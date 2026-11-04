import { AgentTraceStep, OrchestrationStage, ProductCandidate, UserTwinProfile, ScoreWeights } from '../types';
import { detectCategoryIntent, getCandidatesForIntent } from './mockCatalog';
import { evaluateMultiAttributeScore } from './scoringEngine';
import { sanitizeProductReviews } from './reviewSanitizer';

export interface OrchestrationResult {
  champion: ProductCandidate;
  finalists: ProductCandidate[];
  allCandidates: ProductCandidate[];
  traceLog: AgentTraceStep[];
  detectedCategory: string;
}

export type TraceUpdateCallback = (step: AgentTraceStep) => void;

export async function runTwinAgentWorkflow(
  userQuery: string,
  profile: UserTwinProfile,
  onStepUpdate: TraceUpdateCallback,
  weights?: ScoreWeights
): Promise<OrchestrationResult> {
  const trace: AgentTraceStep[] = [];

  const addStep = async (
    stage: OrchestrationStage,
    agentName: string,
    title: string,
    details: string,
    delayMs: number,
    dataSnapshot?: any
  ): Promise<AgentTraceStep> => {
    const step: AgentTraceStep = {
      id: `step-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      stage,
      agentName,
      status: 'running',
      title,
      details,
      durationMs: delayMs,
      dataSnapshot
    };
    onStepUpdate(step);
    await new Promise((r) => setTimeout(r, delayMs));
    step.status = 'completed';
    onStepUpdate(step);
    trace.push(step);
    return step;
  };

  // Intent Routing: Automatically select category catalog based on prompt query
  const detectedCategory = detectCategoryIntent(userQuery, profile.activeItinerary?.destination);
  const rawCandidates = getCandidatesForIntent(detectedCategory, userQuery, profile);

  // Node 1: Intent & Constraint Parser
  if (detectedCategory === 'clothes') {
    await addStep(
      'INTENT_CAPTURE',
      'IntentParserAgent',
      'Deconstructing Natural Language Request: Commuter Travel Clothes & Apparel',
      `Extracted travel clothing capsule constraints from prompt: "${userQuery}". Identified sizing tolerances: ${profile.sizing.shirtSize} tops and ${profile.sizing.pantSize} bottoms, destination: ${profile.activeItinerary.destination}, and daily activity: ${profile.activeItinerary.activityNotes}. Enforcing wrinkle-free packing, anti-odor performance, and versatile smart-casual styling.`,
      650,
      {
        detectedIntent: 'Clothes / Commuter Capsule Wardrobe',
        topSizing: profile.sizing.shirtSize,
        bottomSizing: profile.sizing.pantSize,
        destination: profile.activeItinerary.destination,
        targetFormality: `${profile.activeItinerary.dressCode} (Index 8-9)`,
        capsuleCriteria: 'Wrinkle-Free, Quick-Dry, 4-Way Technical Mobility'
      }
    );
  } else if (detectedCategory === 'pants') {
    await addStep(
      'INTENT_CAPTURE',
      'IntentParserAgent',
      'Deconstructing Natural Language Request: Pants & Trousers',
      `Extracted trousers & commuter pant constraints from prompt: "${userQuery}". Identified sizing tolerance: ${profile.sizing.pantSize}, dress code: ${profile.activeItinerary.dressCode}, daily step load: ${profile.activeItinerary.expectedDailySteps.toLocaleString()} steps. Enforcing 4-way stretch mobility, liquid/spill repellency, and wrinkle recovery.`,
      650,
      {
        detectedIntent: 'Pants / Smart Commuter Chino',
        sizingProfile: `${profile.sizing.pantSize} Regular`,
        destination: profile.activeItinerary.destination,
        targetFormality: `${profile.activeItinerary.dressCode} (Index 8-9)`,
        mobilityReq: '4-Way Stretch & Gusseted Construction'
      }
    );
  } else if (detectedCategory === 'bags') {
    await addStep(
      'INTENT_CAPTURE',
      'IntentParserAgent',
      'Deconstructing Natural Language Request: Travel Backpacks & Bags',
      `Extracted travel bag constraints from prompt: "${userQuery}". Identified destination: ${profile.activeItinerary.destination}, airline carry-on parameters, load-lifter ergonomic strap requirements, and weatherproof exterior shell.`,
      650,
      {
        detectedIntent: 'Bags / Weatherproof Travel Pack',
        destination: profile.activeItinerary.destination,
        laptopSleeveReq: '16" Padded Compartment',
        targetVolume: '28L - 35L Carry-On Standard'
      }
    );
  } else if (detectedCategory === 'shirts') {
    await addStep(
      'INTENT_CAPTURE',
      'IntentParserAgent',
      'Deconstructing Natural Language Request: Shirts & Tops',
      `Extracted shirt constraints from prompt: "${userQuery}". Identified sizing: ${profile.sizing.shirtSize}, anti-odor silverescent/merino fabric requirements, and collar structure for smart-casual client presentations.`,
      650,
      {
        detectedIntent: 'Shirts / Anti-Odor Commuter Tops',
        sizingProfile: profile.sizing.shirtSize,
        odorControlReq: 'Silverescent / Merino Natural Bacteriostatic'
      }
    );
  } else if (detectedCategory === 'outerwear') {
    await addStep(
      'INTENT_CAPTURE',
      'IntentParserAgent',
      'Deconstructing Natural Language Request: Outerwear',
      `Extracted outerwear constraints from prompt: "${userQuery}". Identified destination: ${profile.activeItinerary.destination}, weather: ${profile.activeItinerary.weatherForecast}, dress code: ${profile.activeItinerary.dressCode}. Enforcing high breathability for transit & 20,000mm+ waterproof membrane.`,
      650,
      {
        detectedIntent: 'Outerwear / Stormproof Rain Shell',
        destination: profile.activeItinerary.destination,
        weatherSignal: '12°C Drizzle / Tube Transit',
        targetFormality: `${profile.activeItinerary.dressCode} (Index 8-10)`,
        breathabilityRequirement: 'Pit Zips or C-KNIT membrane'
      }
    );
  } else if (detectedCategory === 'audio') {
    await addStep(
      'INTENT_CAPTURE',
      'IntentParserAgent',
      'Deconstructing Natural Language Request: Long-Haul Audio ANC',
      `Extracted flight audio constraints from prompt: "${userQuery}". Identified transit route: ${profile.activeItinerary.destination}, duration: 14h transpacific flight, dress code: ${profile.activeItinerary.dressCode}. Enforcing dual-chip active noise reduction and zero-pressure ear cushions.`,
      650,
      {
        detectedIntent: 'Audio / Flight ANC Travel',
        transitRoute: profile.activeItinerary.destination,
        targetNoiseCut: 'Low-frequency jet cabin drone (98%+)',
        wearDuration: '14-Hour Continuous Flight',
        formalityRating: 'Tech Minimalist / Executive'
      }
    );
  } else if (detectedCategory === 'footwear') {
    await addStep(
      'INTENT_CAPTURE',
      'IntentParserAgent',
      'Deconstructing Natural Language Request: Footwear',
      `Extracted footwear constraints from prompt: "${userQuery}". Identified destination: ${profile.activeItinerary.destination}, weather: ${profile.activeItinerary.weatherForecast}, steps: ${profile.activeItinerary.expectedDailySteps.toLocaleString()} steps/day, formality: ${profile.activeItinerary.dressCode}.`,
      650,
      {
        detectedIntent: 'Footwear / Weatherproof Commute',
        destination: profile.activeItinerary.destination,
        weatherSignal: '18°C Rain Showers',
        walkingPace: `${profile.activeItinerary.expectedDailySteps.toLocaleString()} steps/day (High Impact)`,
        targetFormality: 'Smart Casual (Index 7-8)'
      }
    );
  } else {
    // Dynamic Custom Query
    await addStep(
      'INTENT_CAPTURE',
      'IntentParserAgent',
      `Deconstructing Natural Language Request: ${detectedCategory.toUpperCase()}`,
      `Synthesizing custom product constraints from user prompt: "${userQuery}". Analyzing destination: ${profile.activeItinerary.destination}, dress code: ${profile.activeItinerary.dressCode}, and personal quality floor.`,
      650,
      {
        detectedIntent: `${detectedCategory.toUpperCase()} / Dynamic Synthesis`,
        userQuery: userQuery,
        targetBudget: `$${profile.budgetElasticity.preferredTarget}`
      }
    );
  }

  // Node 2: Dynamic Twin Memory Graph Retrieval
  await addStep(
    'TWIN_MEMORY_RETRIEVAL',
    'ContextGraphAgent',
    'Querying Persistent User Memory Graph',
    `Loaded profile for ${profile.name} (${profile.handle}). Activated sizing tolerances: ${profile.sizing.pantSize} (Pants), ${profile.sizing.shoeSize} (Shoes), ${profile.sizing.shirtSize} (Tops). Injected ${profile.returnHistory.length} negative return memory vectors into reasoning graph.`,
    800,
    {
      sizingTolerances: {
        pantSize: profile.sizing.pantSize,
        shoeSize: `${profile.sizing.shoeSize} (${profile.sizing.shoeWidth})`,
        shirtSize: profile.sizing.shirtSize
      },
      negativeReturnAvoidance: profile.returnHistory.map(r => r.learnedNegativeSignal),
      budgetTolerance: `$${profile.budgetElasticity.preferredTarget} target (Flex up to $${profile.budgetElasticity.maxFlexCeiling})`,
      trustedBrands: profile.brandAffinities.preferred
    }
  );

  // Node 3: Multi-Source Web Extraction vs Merchant APIs
  await addStep(
    'MULTI_SOURCE_EXTRACTION',
    'CatalogIngestionAgent',
    `Parallel Multi-Source Retrieval: ${detectedCategory.toUpperCase()} Catalog`,
    `Simultaneously querying 3 channels for ${detectedCategory}: Shopify Direct Merchant API (138ms), Affiliate Partner Feed via Rakuten (310ms), and Headless Playwright Scraper (520ms). Retrieved ${rawCandidates.length} candidate vectors (${rawCandidates.map(c => c.brand).join(', ')}).`,
    900,
    {
      channelsQueried: [
        { channel: 'Shopify Merchant API', status: '200 OK', latency: '138ms' },
        { channel: 'Affiliate Partner Feed (CJ/Rakuten)', status: '200 OK', latency: '310ms' },
        { channel: 'Headless Scraper (Playwright/Chromium)', status: 'DOM Extracted', latency: '520ms' }
      ],
      rawItemsFound: rawCandidates.length,
      categoryCatalog: detectedCategory
    }
  );

  // Node 4: Deep Multi-Attribute Scoring
  await addStep(
    'MULTI_ATTRIBUTE_SCORING',
    'ParetoScoringAgent',
    'Multi-Attribute Constraint Solving & Pareto Vector Optimization',
    `Evaluating weatherproofing membrane, ergonomic long-wear comfort, formality index, and budget tolerance against user profile vectors.`,
    850,
    {
      constraintsEvaluated: ['Weather Resistance', 'Ergonomic Mobility', 'Dress Code Formality', 'Budget Elasticity'],
      scoringFunction: 'Normalized Multi-Attribute Pareto Optimization'
    }
  );

  // Evaluate candidate scores
  const evaluatedCandidates = rawCandidates.map(cand => {
    const scores = evaluateMultiAttributeScore(cand, profile, weights);
    const sanitized = sanitizeProductReviews(cand);
    return {
      ...cand,
      attributeScores: scores,
      reviewSanitization: {
        ...cand.reviewSanitization,
        sanitizedStarRating: sanitized.sanitizedRating,
        trustScore: sanitized.trustScore
      }
    };
  });

  // Filter out disqualified items for the top recommendations
  const validFinalists = evaluatedCandidates
    .filter(c => c.attributeScores.compositeTwinFitScore > 65 && c.reviewSanitization.trustScore > 40)
    .sort((a, b) => b.attributeScores.compositeTwinFitScore - a.attributeScores.compositeTwinFitScore);

  const champion = validFinalists[0] || evaluatedCandidates[0];
  const otherFinalists = validFinalists.slice(1, 3);
  const disqualifiedProduct = evaluatedCandidates.find(c => c.brand.includes('Global') || c.reviewSanitization.trustScore < 30);

  // Node 5: Review Sanitization & Trust Purity Filter
  await addStep(
    'REVIEW_SANITIZATION',
    'ReviewSanitizerAgent',
    'Filtering Bot Reviews, Fake 5-Star Clusters & Sponsored Junk',
    disqualifiedProduct
      ? `Executed NLP bot-pattern audit across aggregated reviews. Purged ${disqualifiedProduct.reviewSanitization.botReviewsPurged.toLocaleString()} suspicious bot reviews. Flagged and disqualified ${disqualifiedProduct.name} (${disqualifiedProduct.reviewSanitization.trustScore}% trust score).`
      : 'Executed NLP bot-pattern audit across customer reviews. Purged bot reviews and penalized sponsored bias.',
    950,
    {
      disqualifiedItems: disqualifiedProduct ? [`${disqualifiedProduct.name} - Bot review farm detected`] : [],
      topTrustScore: `${champion.reviewSanitization.trustScore}% Trust Purity (${champion.brand} ${champion.name})`
    }
  );

  // Node 6: Decision Reduction & Transparent Finalists
  await addStep(
    'SYNTHESIZING_FINALISTS',
    'ReasoningSynthesizerAgent',
    `Pruning Search Space: Selected #1 Champion & Top ${otherFinalists.length} Finalists`,
    `Decision reduction complete for ${detectedCategory}: Selected #1 Champion (${champion.brand} ${champion.name}) with ${champion.attributeScores.compositeTwinFitScore}% fit score, plus ${otherFinalists.length} curated finalists.`,
    700,
    {
      champion: `${champion.brand} ${champion.name} (Fit Score: ${champion.attributeScores.compositeTwinFitScore}%)`,
      finalist1: otherFinalists[0] ? `${otherFinalists[0].brand} ${otherFinalists[0].name}` : 'N/A',
      finalist2: otherFinalists[1] ? `${otherFinalists[1].brand} ${otherFinalists[1].name}` : 'N/A'
    }
  );

  // Node 7: Completed & Ready for One-Tap Authorization
  await addStep(
    'COMPLETED',
    'OrchestratorMaster',
    'Digital Twin Recommendation Ready for 1-Tap Authorization',
    `Tokenized Stripe payment session pre-configured for ${champion.name}. Sizing (${profile.sizing.pantSize || profile.sizing.shoeSize}) and shipping route verified.`,
    400
  );

  return {
    champion,
    finalists: otherFinalists,
    allCandidates: evaluatedCandidates,
    traceLog: trace,
    detectedCategory
  };
}
