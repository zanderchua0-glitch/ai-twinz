import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { 
  UserTwinProfile, 
  ProductCandidate, 
  AgentTraceStep, 
  OrchestrationStage,
  CheckoutReceipt,
  ScoreWeights
} from '../types';
import { INITIAL_TWIN_PROFILE } from '../engine/mockCatalog';
import { runTwinAgentWorkflow, OrchestrationResult } from '../engine/orchestrator';
import { evaluateMultiAttributeScore } from '../engine/scoringEngine';

const DEFAULT_SCORE_WEIGHTS: ScoreWeights = {
  weatherMatchWeight: 0.25,
  ergonomicStepWeight: 0.30,
  dressCodeWeight: 0.20,
  budgetWeight: 0.15,
  returnRiskAvoidanceWeight: 0.10,
};

const LOCAL_STORAGE_KEY_PROFILE = 'ai_twinz_profile_v2';
const LOCAL_STORAGE_KEY_ORDERS = 'ai_twinz_orders_v2';

interface TwinContextType {
  profile: UserTwinProfile;
  updateProfile: (updated: Partial<UserTwinProfile>) => void;
  updateItinerary: (itinerary: Partial<UserTwinProfile['activeItinerary']>) => void;
  updateSizing: (sizing: Partial<UserTwinProfile['sizing']>) => void;
  addReturnMemory: (item: { productName: string; brand: string; returnReason: string }) => void;
  query: string;
  setQuery: (q: string) => void;
  isRunning: boolean;
  orchestrationStage: OrchestrationStage;
  traceSteps: AgentTraceStep[];
  result: OrchestrationResult | null;
  selectedFinalist: ProductCandidate | null;
  setSelectedFinalist: (p: ProductCandidate | null) => void;
  triggerSearch: (customQuery?: string, customProfile?: UserTwinProfile) => Promise<void>;
  resetToPreset: (presetName: string) => void;
  checkoutReceipt: CheckoutReceipt | null;
  pastOrders: CheckoutReceipt[];
  executeOneTapCheckout: (product: ProductCandidate) => Promise<CheckoutReceipt>;
  isCheckingOut: boolean;
  activeView: 'concierge' | 'memory_graph' | 'catalog_extraction' | 'agent_architecture';
  setActiveView: (view: 'concierge' | 'memory_graph' | 'catalog_extraction' | 'agent_architecture') => void;
  
  // Interactive Pareto Sliders
  scoreWeights: ScoreWeights;
  updateScoreWeights: (weights: Partial<ScoreWeights>) => void;
  resetScoreWeights: () => void;

  // Natural Language Commands & Notifications
  latestMemoryUpdateMessage: string | null;
  clearLatestMemoryMessage: () => void;
  executeNaturalLanguageCommand: (input: string) => { executed: boolean; feedback?: string };

  // JSON-LD Portability & Persistence
  exportJsonLd: () => void;
  importJsonLd: (jsonContent: string) => { success: boolean; error?: string };
  resetProfileToDefaults: () => void;
}

const TwinContext = createContext<TwinContextType | undefined>(undefined);

export const TwinProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Load initial profile from localStorage or fallback to INITIAL_TWIN_PROFILE
  const [profile, setProfile] = useState<UserTwinProfile>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_PROFILE);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to parse profile from localStorage', e);
    }
    return INITIAL_TWIN_PROFILE;
  });

  // Load past orders from localStorage
  const [pastOrders, setPastOrders] = useState<CheckoutReceipt[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_ORDERS);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to parse orders from localStorage', e);
    }
    return [];
  });

  const [query, setQuery] = useState<string>(
    'Find me the best walking shoes for my upcoming Tokyo trip: 15,000 steps a day, rainy forecast, smart casual meetings, size 10.5 wide, under $250.'
  );
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [orchestrationStage, setOrchestrationStage] = useState<OrchestrationStage>('IDLE');
  const [traceSteps, setTraceSteps] = useState<AgentTraceStep[]>([]);
  const [result, setResult] = useState<OrchestrationResult | null>(null);
  const [selectedFinalist, setSelectedFinalist] = useState<ProductCandidate | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [checkoutReceipt, setCheckoutReceipt] = useState<CheckoutReceipt | null>(null);
  const [activeView, setActiveView] = useState<'concierge' | 'memory_graph' | 'catalog_extraction' | 'agent_architecture'>('concierge');
  
  // Weights for dynamic Pareto re-scoring
  const [scoreWeights, setScoreWeights] = useState<ScoreWeights>(DEFAULT_SCORE_WEIGHTS);
  const [latestMemoryUpdateMessage, setLatestMemoryUpdateMessage] = useState<string | null>(null);

  // Persist profile to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_PROFILE, JSON.stringify(profile));
    } catch (e) {
      console.error('Error saving profile to localStorage:', e);
    }
  }, [profile]);

  // Persist orders to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_ORDERS, JSON.stringify(pastOrders));
    } catch (e) {
      console.error('Error saving orders to localStorage:', e);
    }
  }, [pastOrders]);

  const clearLatestMemoryMessage = () => setLatestMemoryUpdateMessage(null);

  const updateProfile = (updated: Partial<UserTwinProfile>) => {
    setProfile(prev => ({ ...prev, ...updated }));
  };

  const updateItinerary = (itineraryUpdates: Partial<UserTwinProfile['activeItinerary']>) => {
    setProfile(prev => ({
      ...prev,
      activeItinerary: { ...prev.activeItinerary, ...itineraryUpdates }
    }));
  };

  const updateSizing = (sizingUpdates: Partial<UserTwinProfile['sizing']>) => {
    setProfile(prev => ({
      ...prev,
      sizing: { ...prev.sizing, ...sizingUpdates }
    }));
  };

  const addReturnMemory = (item: { productName: string; brand: string; returnReason: string }) => {
    const newEntry = {
      id: `ret-${Date.now()}`,
      productName: item.productName,
      brand: item.brand,
      date: 'Just now',
      category: 'Footwear',
      returnReason: item.returnReason,
      severity: 'critical' as const,
      learnedNegativeSignal: `Flag and penalize issues similar to: "${item.returnReason}"`
    };
    setProfile(prev => ({
      ...prev,
      returnHistory: [newEntry, ...prev.returnHistory]
    }));
  };

  // Dynamic real-time recalculation of scores when Pareto sliders are dragged
  const updateScoreWeights = (newWeightsPartial: Partial<ScoreWeights>) => {
    const updated = { ...scoreWeights, ...newWeightsPartial };
    setScoreWeights(updated);

    if (result && result.allCandidates.length > 0) {
      // Recompute scores on the fly without running full network simulation
      const reScored = result.allCandidates.map(cand => {
        const scores = evaluateMultiAttributeScore(cand, profile, updated);
        return {
          ...cand,
          attributeScores: scores
        };
      });

      const validFinalists = reScored
        .filter(c => c.attributeScores.compositeTwinFitScore > 65 && c.reviewSanitization.trustScore > 40)
        .sort((a, b) => b.attributeScores.compositeTwinFitScore - a.attributeScores.compositeTwinFitScore);

      const newChamp = validFinalists[0] || reScored[0];
      const newFinalists = validFinalists.slice(1, 3);

      setResult(prev => prev ? {
        ...prev,
        champion: newChamp,
        finalists: newFinalists,
        allCandidates: reScored
      } : null);

      // Keep selected finalist in sync
      if (selectedFinalist) {
        const matching = reScored.find(c => c.id === selectedFinalist.id);
        if (matching) setSelectedFinalist(matching);
      }
    }
  };

  const resetScoreWeights = () => {
    updateScoreWeights(DEFAULT_SCORE_WEIGHTS);
  };

  const triggerSearch = async (customQuery?: string, customProfile?: UserTwinProfile) => {
    const searchQuery = customQuery || query;
    const currentProfile = customProfile || profile;

    setIsRunning(true);
    setTraceSteps([]);
    setResult(null);
    setSelectedFinalist(null);
    setCheckoutReceipt(null);
    setOrchestrationStage('INTENT_CAPTURE');

    try {
      const res = await runTwinAgentWorkflow(
        searchQuery,
        currentProfile,
        (step) => {
          setTraceSteps(prev => {
            const existingIdx = prev.findIndex(s => s.id === step.id);
            if (existingIdx >= 0) {
              const updated = [...prev];
              updated[existingIdx] = step;
              return updated;
            }
            return [...prev, step];
          });
          setOrchestrationStage(step.stage);
        },
        scoreWeights
      );

      setResult(res);
      setSelectedFinalist(res.champion);
      setOrchestrationStage('COMPLETED');
    } catch (err) {
      console.error('Error executing twin workflow:', err);
    } finally {
      setIsRunning(false);
    }
  };

  // Natural Language Command Parser for AskBar
  const executeNaturalLanguageCommand = (input: string): { executed: boolean; feedback?: string } => {
    const trimmed = input.trim();
    const lower = trimmed.toLowerCase();

    // 1. Shoe size: "Update my shoe size to 11 US", "Shoe size 11", "Set shoe size 10.5 wide"
    const shoeSizeMatch = lower.match(/(?:update|set|change)?.*?(?:shoe size|size)\s*(?:to|=)?\s*([0-9]+(?:\.[0-9]+)?)\s*(us)?(\s*(wide|ee|regular))?/i);
    if (shoeSizeMatch && !lower.includes('jacket') && !lower.includes('rain')) {
      const sizeVal = `${shoeSizeMatch[1]} US`;
      const widthVal = shoeSizeMatch[4]?.toLowerCase().includes('wide') || shoeSizeMatch[4]?.toLowerCase().includes('ee')
        ? 'Wide (EE)'
        : profile.sizing.shoeWidth;

      setProfile(prev => ({
        ...prev,
        sizing: {
          ...prev.sizing,
          shoeSize: sizeVal,
          shoeWidth: widthVal
        }
      }));

      const feedback = `Twin Memory Mutated: Shoe size updated to ${sizeVal} (${widthVal}). Saved to local vault.`;
      setLatestMemoryUpdateMessage(feedback);
      return { executed: true, feedback };
    }

    // 2. Budget: "Set my budget to $260", "Budget 300", "Update budget to 250"
    const budgetMatch = lower.match(/(?:set|update|change)?.*?(?:budget)\s*(?:to|=)?\s*\$?([0-9]+)/i);
    if (budgetMatch) {
      const targetBudget = parseInt(budgetMatch[1], 10);
      const flexCeiling = Math.round(targetBudget * 1.35);

      setProfile(prev => ({
        ...prev,
        budgetElasticity: {
          ...prev.budgetElasticity,
          preferredTarget: targetBudget,
          maxFlexCeiling: flexCeiling
        }
      }));

      const feedback = `Twin Memory Mutated: Budget target set to $${targetBudget} (Flex ceiling: $${flexCeiling}).`;
      setLatestMemoryUpdateMessage(feedback);
      return { executed: true, feedback };
    }

    // 3. Blacklist: "Blacklist Nike", "Avoid Shein", "Ban Brand"
    const blacklistMatch = lower.match(/(?:blacklist|avoid|ban|block)\s+([a-zA-Z0-9'\s]+)/i);
    if (blacklistMatch) {
      const brandName = blacklistMatch[1].trim();
      const formatted = brandName.charAt(0).toUpperCase() + brandName.slice(1);

      setProfile(prev => {
        const currentList = prev.brandAffinities.blacklisted;
        if (!currentList.includes(formatted)) {
          return {
            ...prev,
            brandAffinities: {
              ...prev.brandAffinities,
              blacklisted: [formatted, ...currentList]
            }
          };
        }
        return prev;
      });

      const feedback = `Twin Memory Mutated: Added "${formatted}" to blacklisted brands (Auto-Purge active).`;
      setLatestMemoryUpdateMessage(feedback);
      return { executed: true, feedback };
    }

    // 4. Preferred brand: "Prefer Arc'teryx", "Add Patagonia to preferred"
    const preferMatch = lower.match(/(?:prefer|favorite|add preferred)\s+([a-zA-Z0-9'\s]+)/i);
    if (preferMatch) {
      const brandName = preferMatch[1].trim();
      const formatted = brandName.charAt(0).toUpperCase() + brandName.slice(1);

      setProfile(prev => {
        const currentList = prev.brandAffinities.preferred;
        if (!currentList.includes(formatted)) {
          return {
            ...prev,
            brandAffinities: {
              ...prev.brandAffinities,
              preferred: [formatted, ...currentList]
            }
          };
        }
        return prev;
      });

      const feedback = `Twin Memory Mutated: Added "${formatted}" to preferred brand affinities (+Score Bonus).`;
      setLatestMemoryUpdateMessage(feedback);
      return { executed: true, feedback };
    }

    // 5. Destination / City: "Set destination to London", "Destination Paris"
    const destMatch = lower.match(/(?:set destination to|traveling to|going to)\s+([a-zA-Z\s]+)/i);
    if (destMatch) {
      const dest = destMatch[1].trim();
      setProfile(prev => ({
        ...prev,
        activeItinerary: {
          ...prev.activeItinerary,
          destination: dest
        }
      }));

      const feedback = `Twin Memory Mutated: Travel destination set to "${dest}".`;
      setLatestMemoryUpdateMessage(feedback);
      return { executed: true, feedback };
    }

    return { executed: false };
  };

  const resetToPreset = (presetName: string) => {
    let newQuery = '';
    let updatedItinerary: Partial<UserTwinProfile['activeItinerary']> = {};

    if (presetName === 'tokyo') {
      newQuery = 'Find me the best walking shoes for my upcoming Tokyo trip: 15,000 steps a day, rainy forecast, smart casual meetings, size 10.5 wide, under $250.';
      updatedItinerary = {
        id: 'itin-tokyo-nov2026',
        destination: 'Tokyo (Shibuya, Ginza, Shinjuku)',
        country: 'Japan',
        weatherForecast: '18°C (64°F) / Intermittent Rain Showers (78% humidity)',
        temperatureC: 18,
        expectedDailySteps: 15000,
        dressCode: 'Smart Casual',
        activityNotes: 'Tech meetings, client coffee chats, subway walking, extensive outdoor district exploring.'
      };
    } else if (presetName === 'london') {
      newQuery = 'Need a minimalist waterproof shell jacket for London business meetings and walking between underground stations.';
      updatedItinerary = {
        id: 'itin-london-dec2026',
        destination: 'London (City, Soho, Westminster)',
        country: 'United Kingdom',
        weatherForecast: '12°C (54°F) / Heavy Continuous Drizzle',
        temperatureC: 12,
        expectedDailySteps: 14000,
        dressCode: 'Business Formal',
        activityNotes: 'Underground transit walking, corporate presentations, wet weather commutes.'
      };
    } else if (presetName === 'electronics') {
      newQuery = 'High-fidelity wireless active noise-canceling headphones for 14-hour transpacific flights and remote Zoom calls.';
      updatedItinerary = {
        id: 'itin-flight-transpacific',
        destination: 'San Francisco to Singapore Flight',
        country: 'International Transit',
        weatherForecast: 'Pressurized Cabin / 21°C Dry Air',
        temperatureC: 21,
        expectedDailySteps: 6000,
        dressCode: 'Tech Minimalist',
        activityNotes: 'Long-haul flights, audio isolation from aircraft engines, executive virtual presentations.'
      };
    }

    setQuery(newQuery);
    const updatedProfile: UserTwinProfile = {
      ...profile,
      activeItinerary: { ...profile.activeItinerary, ...updatedItinerary }
    };
    setProfile(updatedProfile);

    // Auto trigger evaluation with the new category!
    triggerSearch(newQuery, updatedProfile);
  };

  const executeOneTapCheckout = async (product: ProductCandidate): Promise<CheckoutReceipt> => {
    setIsCheckingOut(true);
    // Simulate tokenized background checkout (Stripe PaymentIntent off-session clearance + merchant inventory hold)
    await new Promise(r => setTimeout(r, 1600));

    const receipt: CheckoutReceipt = {
      orderId: `AGY-ORD-${Date.now().toString().slice(-6)}`,
      authorizedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      product,
      amount: product.price,
      currency: product.currency,
      stripeTokenUsed: 'pm_tok_visa_4242_customer_authenticated',
      shippingAddress: '742 Evergreen Terrace, San Francisco, CA 94107, USA (Expedited Hotel Delivery Tokyo Ward 3 ready)',
      trackingNumber: `TRK-JP-${Math.floor(100000000 + Math.random() * 900000000)}`,
      estimatedDeliveryDate: 'Delivering Nov 3, 2026 (1 day prior to travel departure)',
      twinPostPurchaseFeedbackLearned: `Context logged. Sizing tolerances and ${product.specs.waterproofing} added to verified satisfaction graph.`
    };

    setCheckoutReceipt(receipt);
    setPastOrders(prev => [receipt, ...prev]);
    setIsCheckingOut(false);
    return receipt;
  };

  // JSON-LD Export & Import Functions
  const exportJsonLd = () => {
    const jsonLdPayload = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      identifier: profile.id,
      name: profile.name,
      alternateName: profile.handle,
      description: 'AI Twinz Self-Sovereign Digital Twin Profile & Constraint Graph',
      version: '2.0.0',
      exportedAt: new Date().toISOString(),
      twinProfile: profile,
      pastOrders: pastOrders
    };

    const blob = new Blob([JSON.stringify(jsonLdPayload, null, 2)], { type: 'application/ld+json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${profile.handle.replace('@', '')}-twin-profile.jsonld`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const importJsonLd = (jsonString: string): { success: boolean; error?: string } => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.twinProfile && parsed.twinProfile.sizing) {
        setProfile(parsed.twinProfile);
        if (Array.isArray(parsed.pastOrders)) {
          setPastOrders(parsed.pastOrders);
        }
        setLatestMemoryUpdateMessage('Successfully imported self-sovereign Twin JSON-LD profile!');
        return { success: true };
      }
      return { success: false, error: 'Invalid schema: Missing twinProfile node.' };
    } catch (e: any) {
      return { success: false, error: e.message || 'JSON parse error' };
    }
  };

  const resetProfileToDefaults = () => {
    setProfile(INITIAL_TWIN_PROFILE);
    setPastOrders([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY_PROFILE);
    localStorage.removeItem(LOCAL_STORAGE_KEY_ORDERS);
    setLatestMemoryUpdateMessage('Twin profile restored to factory baseline.');
  };

  // Initial search on mount
  useEffect(() => {
    triggerSearch();
  }, []);

  return (
    <TwinContext.Provider
      value={{
        profile,
        updateProfile,
        updateItinerary,
        updateSizing,
        addReturnMemory,
        query,
        setQuery,
        isRunning,
        orchestrationStage,
        traceSteps,
        result,
        selectedFinalist,
        setSelectedFinalist,
        triggerSearch,
        resetToPreset,
        checkoutReceipt,
        pastOrders,
        executeOneTapCheckout,
        isCheckingOut,
        activeView,
        setActiveView,
        scoreWeights,
        updateScoreWeights,
        resetScoreWeights,
        latestMemoryUpdateMessage,
        clearLatestMemoryMessage,
        executeNaturalLanguageCommand,
        exportJsonLd,
        importJsonLd,
        resetProfileToDefaults
      }}
    >
      {children}
    </TwinContext.Provider>
  );
};

export const useTwin = () => {
  const ctx = useContext(TwinContext);
  if (!ctx) throw new Error('useTwin must be used within a TwinProvider');
  return ctx;
};
