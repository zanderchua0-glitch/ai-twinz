import { ProductCandidate, UserTwinProfile, ScoreWeights } from '../types';

export { type ScoreWeights };

export function evaluateMultiAttributeScore(
  product: ProductCandidate,
  profile: UserTwinProfile,
  weights: ScoreWeights = {
    weatherMatchWeight: 0.25,
    ergonomicStepWeight: 0.30,
    dressCodeWeight: 0.20,
    budgetWeight: 0.15,
    returnRiskAvoidanceWeight: 0.10,
  }
): {
  weatherProofScore: number;
  ergonomic15kStepsScore: number;
  dressCodeFormalityScore: number;
  priceValueScore: number;
  compositeTwinFitScore: number;
  penaltyDeductions: string[];
} {
  const penalties: string[] = [];

  // Weather resistance evaluation
  let weatherProof = product.attributeScores.weatherProofScore;
  const forecast = (profile.activeItinerary?.weatherForecast || '').toLowerCase();
  const waterproofing = (product.specs.waterproofing || '').toLowerCase();

  if (forecast.includes('rain') || forecast.includes('drizzle')) {
    const hasSolidWaterproofing =
      waterproofing.includes('waterproof') ||
      waterproofing.includes('gore-tex') ||
      waterproofing.includes('h2no') ||
      waterproofing.includes('bonded cotton') ||
      waterproofing.includes('water-repellent') ||
      waterproofing.includes('dwr') ||
      waterproofing.includes('nanosphere') ||
      waterproofing.includes('x-pac') ||
      waterproofing.includes('seam-sealed');

    const cat = product.category.toLowerCase();
    const isWaterCritical = cat.includes('outerwear') || cat.includes('footwear');

    if (isWaterCritical && !hasSolidWaterproofing) {
      weatherProof -= 35;
      penalties.push('Lacks true waterproof membrane for rain forecast');
    }
  }

  // Ergonomic step & long-wear matching
  let ergonomicScore = product.attributeScores.ergonomic15kStepsScore;
  const dailySteps = profile.activeItinerary?.expectedDailySteps || 10000;
  
  if (product.category.toLowerCase().includes('footwear')) {
    if (dailySteps >= 12000 && product.specs.weightGrams > 350) {
      ergonomicScore -= 10;
      penalties.push('Heavier footwear (>350g) increases fatigue over high step days');
    }
  } else if (product.category.toLowerCase().includes('audio')) {
    if (product.specs.weightGrams > 300) {
      ergonomicScore -= 8;
      penalties.push('Heavier headphone weight increases neck strain during long flights');
    }
  } else if (product.category.toLowerCase().includes('outerwear')) {
    if (product.specs.weightGrams > 650) {
      ergonomicScore -= 10;
      penalties.push('Heavier outer layer reduces packing mobility and walking ease');
    }
  } else if (product.category.toLowerCase().includes('pant')) {
    if (product.specs.weightGrams > 400) {
      ergonomicScore -= 8;
      penalties.push('Heavier fabric weight reduces stride mobility over high step days');
    }
  }

  // Formality matching
  let formalityScore = product.attributeScores.dressCodeFormalityScore;
  const targetDress = profile.activeItinerary?.dressCode || 'Smart Casual';
  if (targetDress === 'Smart Casual') {
    if (product.specs.formalityScore < 6) {
      formalityScore -= 15;
      penalties.push('Too athletic/casual for smart-casual client meetings');
    }
  } else if (targetDress === 'Business Formal') {
    if (product.specs.formalityScore < 8) {
      formalityScore -= 20;
      penalties.push('Formality rating too relaxed for business formal executive attire');
    }
  }

  // Budget elasticity
  let budgetScore = 90;
  const target = profile.budgetElasticity?.preferredTarget || 250;
  const maxCeil = profile.budgetElasticity?.maxFlexCeiling || 350;
  if (product.price <= target) {
    budgetScore = 96;
  } else if (product.price <= maxCeil) {
    budgetScore = 85;
  } else {
    budgetScore = 60;
    penalties.push(`Exceeds maximum ceiling of $${maxCeil}`);
  }

  // Negative Return Memory avoidance
  (profile.returnHistory || []).forEach((ret) => {
    if (
      ret.returnReason.toLowerCase().includes('heel blister') &&
      product.brand.toLowerCase().includes('standarddress')
    ) {
      ergonomicScore -= 30;
      penalties.push('Triggers historical return pain point: rigid heel blister');
    }
    if (
      ret.returnReason.toLowerCase().includes('absorbed rain') &&
      product.category.toLowerCase().includes('outerwear') &&
      waterproofing.includes('chemical dwr')
    ) {
      weatherProof -= 35;
      penalties.push('Triggers historical return pain point: water absorption / soaked fabric');
    }
  });

  // Brand affinity bonus/penalty
  if (profile.brandAffinities?.preferred?.includes(product.brand)) {
    // slight positive nudge
    formalityScore = Math.min(100, formalityScore + 3);
  }
  if (profile.brandAffinities?.blacklisted?.includes(product.brand)) {
    penalties.push(`Brand ${product.brand} is blacklisted by user digital twin`);
    weatherProof = Math.max(10, weatherProof - 40);
    ergonomicScore = Math.max(10, ergonomicScore - 40);
  }

  // Calculate total weight to normalize
  const totalWeight =
    (weights.weatherMatchWeight || 0.25) +
    (weights.ergonomicStepWeight || 0.3) +
    (weights.dressCodeWeight || 0.2) +
    (weights.budgetWeight || 0.15) +
    (weights.returnRiskAvoidanceWeight || 0.1);

  const normWeather = (weights.weatherMatchWeight || 0.25) / totalWeight;
  const normErgo = (weights.ergonomicStepWeight || 0.3) / totalWeight;
  const normDress = (weights.dressCodeWeight || 0.2) / totalWeight;
  const normBudget = (weights.budgetWeight || 0.15) / totalWeight;
  const normRisk = (weights.returnRiskAvoidanceWeight || 0.1) / totalWeight;

  const returnAvoidanceScore = penalties.length === 0 ? 100 : Math.max(20, 100 - penalties.length * 15);

  const composite =
    weatherProof * normWeather +
    ergonomicScore * normErgo +
    formalityScore * normDress +
    budgetScore * normBudget +
    returnAvoidanceScore * normRisk;

  return {
    weatherProofScore: Math.max(0, Math.min(100, Math.round(weatherProof))),
    ergonomic15kStepsScore: Math.max(0, Math.min(100, Math.round(ergonomicScore))),
    dressCodeFormalityScore: Math.max(0, Math.min(100, Math.round(formalityScore))),
    priceValueScore: Math.max(0, Math.min(100, Math.round(budgetScore))),
    compositeTwinFitScore: Math.max(0, Math.min(100, Number(composite.toFixed(1)))),
    penaltyDeductions: penalties,
  };
}
