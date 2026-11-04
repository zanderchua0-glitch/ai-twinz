export interface SizingTolerances {
  shoeSize: string;
  shoeWidth: 'Regular' | 'Wide (EE)' | 'Extra Wide (4E)';
  archSupport: 'Neutral' | 'High Support' | 'Flat/Low';
  shirtSize: string;
  pantSize: string;
  tolerancesNotes: string;
}

export interface TravelItinerary {
  id: string;
  destination: string;
  country: string;
  dates: string;
  weatherForecast: string;
  temperatureC: number;
  expectedDailySteps: number;
  dressCode: 'Smart Casual' | 'Business Formal' | 'Casual Adventure' | 'Tech Minimalist';
  activityNotes: string;
}

export interface ReturnMemory {
  id: string;
  productName: string;
  brand: string;
  date: string;
  category: string;
  returnReason: string;
  severity: 'minor' | 'critical';
  learnedNegativeSignal: string;
}

export interface ScoreWeights {
  weatherMatchWeight: number;
  ergonomicStepWeight: number;
  dressCodeWeight: number;
  budgetWeight: number;
  returnRiskAvoidanceWeight: number;
}

export interface UserTwinProfile {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  budgetElasticity: {
    preferredTarget: number;
    maxFlexCeiling: number;
    willingnessToPayForQuality: 'High' | 'Moderate' | 'Low';
  };
  sizing: SizingTolerances;
  activeItinerary: TravelItinerary;
  returnHistory: ReturnMemory[];
  brandAffinities: {
    preferred: string[];
    blacklisted: string[];
  };
  lifestyle: {
    dailyStepAverage: number;
    commuteType: string;
    weatherSensitivity: string;
  };
}

export type ExtractionSourceType = 'Shopify Merchant API' | 'Headless Web Scraper (Playwright)' | 'Affiliate Partner Feed (CJ/Rakuten)';

export interface ProductCandidate {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  currency: string;
  imageUrl: string;
  merchantUrl: string;
  sourceType: ExtractionSourceType;
  sourceLatencyMs: number;
  specs: {
    waterproofing: string;
    cushioningTech: string;
    weightGrams: number;
    formalityScore: number; // 1 to 10
    durabilityRating: string;
    materials: string[];
  };
  attributeScores: {
    weatherProofScore: number;    // 0 - 100
    ergonomic15kStepsScore: number; // 0 - 100
    dressCodeFormalityScore: number; // 0 - 100
    priceValueScore: number;       // 0 - 100
    compositeTwinFitScore: number; // 0 - 100
  };
  reviewSanitization: {
    rawStarRating: number;
    sanitizedStarRating: number;
    totalRawReviews: number;
    botReviewsPurged: number;
    sponsoredBiasPenalizedPct: number;
    trustScore: number; // 0 - 100%
    verifiedPurchaseConsensus: string;
    criticalFlags: string[];
  };
  transparentReasoning: {
    whyThisFitsYou: string;
    tradeOffAnalysis: string;
    twinAlignmentHighlights: string[];
    riskAssessment: string;
  };
  stockStatus: 'In Stock' | 'Only 2 Left' | 'Pre-order';
}

export type OrchestrationStage =
  | 'IDLE'
  | 'INTENT_CAPTURE'
  | 'TWIN_MEMORY_RETRIEVAL'
  | 'MULTI_SOURCE_EXTRACTION'
  | 'MULTI_ATTRIBUTE_SCORING'
  | 'REVIEW_SANITIZATION'
  | 'SYNTHESIZING_FINALISTS'
  | 'COMPLETED';

export interface AgentTraceStep {
  id: string;
  stage: OrchestrationStage;
  agentName: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  title: string;
  details: string;
  durationMs: number;
  dataSnapshot?: any;
}

export interface CheckoutReceipt {
  orderId: string;
  authorizedAt: string;
  product: ProductCandidate;
  amount: number;
  currency: string;
  stripeTokenUsed: string;
  shippingAddress: string;
  trackingNumber: string;
  estimatedDeliveryDate: string;
  twinPostPurchaseFeedbackLearned: string;
}
