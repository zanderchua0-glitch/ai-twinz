import { ProductCandidate, UserTwinProfile } from '../types';

export const TOKYO_FOOTWEAR_CANDIDATES: ProductCandidate[] = [
  {
    id: 'prod-on-cloud-5-wp',
    name: 'Cloud 5 Waterproof Sneaker',
    brand: 'On Running',
    category: 'Footwear / Weatherproof Commute',
    price: 169.99,
    originalPrice: 179.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://on-running.com/products/cloud-5-waterproof',
    sourceType: 'Shopify Merchant API',
    sourceLatencyMs: 142,
    specs: {
      waterproofing: '100% Wind & Waterproof Membrane (10,000mm)',
      cushioningTech: 'CloudTec® Zero-Gravity Foam + Speedboard®',
      weightGrams: 281,
      formalityScore: 7,
      durabilityRating: 'High (abrasion-resistant ripstop mesh)',
      materials: ['Recycled Polyester Membrane', 'EVA Sole', 'Quick-Lace Toggle']
    },
    attributeScores: {
      weatherProofScore: 94,
      ergonomic15kStepsScore: 96,
      dressCodeFormalityScore: 88,
      priceValueScore: 92,
      compositeTwinFitScore: 97.4
    },
    reviewSanitization: {
      rawStarRating: 4.8,
      sanitizedStarRating: 4.6,
      totalRawReviews: 4892,
      botReviewsPurged: 612,
      sponsoredBiasPenalizedPct: 8.5,
      trustScore: 94,
      verifiedPurchaseConsensus: 'Exceptional for rainy urban commuting and high step counts. Verified buyers report zero heel slippage and instant comfort out of box without break-in.',
      criticalFlags: ['Slightly narrow toe-box: Twin profile wide-tolerance auto-compensated to 10.5 Wide.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Directly solves your Tokyo 15,000 daily walking steps constraint with CloudTec impact dampening, while the 100% waterproof membrane guards against the forecast 18°C rain showers. Fits your smart-casual dress code with a sleek monochromatic profile.',
      tradeOffAnalysis: 'Quick-lace system provides rapid airport security clearance, though traditional laces are bundled if you prefer a tighter lockdown for steep inclines.',
      twinAlignmentHighlights: [
        'Matches your 10.5 EE Wide preference (compensating with Wide half-size variant)',
        'Zero stiff-leather heel bite (neutralizes your 2024 return pain point)',
        'Well within your $200 target budget ($169.99)'
      ],
      riskAssessment: 'Low risk. 30-day wear-and-test guarantee honored via direct merchant tokenized checkout.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-cole-haan-zerogrand-wp',
    name: 'ØriginalGrand Waterproof Oxford Sneaker',
    brand: 'Cole Haan',
    category: 'Footwear / Smart Casual Hybrid',
    price: 180.00,
    originalPrice: 210.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://colehaan.com/mens-originalgrand-waterproof-oxford',
    sourceType: 'Affiliate Partner Feed (CJ/Rakuten)',
    sourceLatencyMs: 310,
    specs: {
      waterproofing: 'Seam-Sealed Waterproof Leather',
      cushioningTech: 'Grand.ØS High-Density EVA Midsole',
      weightGrams: 345,
      formalityScore: 9,
      durabilityRating: 'High (full-grain treated leather)',
      materials: ['Treated Leather', 'Molded EVA', 'Rubber Pod Outsole']
    },
    attributeScores: {
      weatherProofScore: 89,
      ergonomic15kStepsScore: 84,
      dressCodeFormalityScore: 96,
      priceValueScore: 87,
      compositeTwinFitScore: 89.2
    },
    reviewSanitization: {
      rawStarRating: 4.7,
      sanitizedStarRating: 4.3,
      totalRawReviews: 2140,
      botReviewsPurged: 340,
      sponsoredBiasPenalizedPct: 12.0,
      trustScore: 88,
      verifiedPurchaseConsensus: 'Stylish hybrid dress shoe that handles wet sidewalks well, but requires a 2-day break-in period around the achilles notch.',
      criticalFlags: ['Potential heel friction on day 1 if walking >10k steps immediately.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Highest formality rating among finalists. If your Tokyo client dinners require a closer dress code to business professional, this bridges the gap with seam-sealed waterproof leather.',
      tradeOffAnalysis: 'Slightly firmer ride over 15,000 steps compared to the On Cloud 5, and weighs 64g more per shoe.',
      twinAlignmentHighlights: [
        'Superior aesthetic for formal client presentations in Marunouchi/Ginza',
        'Seam-sealed waterproofing keeps socks dry through puddle splash',
        'Matches brand affinity in your wardrobe graph'
      ],
      riskAssessment: 'Moderate break-in risk. Recommended to wear with thicker merino socks on day 1.'
    },
    stockStatus: 'Only 2 Left'
  },
  {
    id: 'prod-hoka-transport-gtx',
    name: 'Transport GORE-TEX Commuter',
    brand: 'HOKA',
    category: 'Footwear / All-Weather Commuter',
    price: 175.00,
    originalPrice: 175.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://hoka.com/en/us/transport-gore-tex',
    sourceType: 'Headless Web Scraper (Playwright)',
    sourceLatencyMs: 620,
    specs: {
      waterproofing: 'GORE-TEX Invisible Fit membrane',
      cushioningTech: 'Compression Molded EVA (30% Sugarcane)',
      weightGrams: 318,
      formalityScore: 6,
      durabilityRating: 'Very High (Vibram® EcoStep EVO outsole)',
      materials: ['Cordura® Recycled Textile', 'GORE-TEX', 'Vibram Outsole']
    },
    attributeScores: {
      weatherProofScore: 98,
      ergonomic15kStepsScore: 95,
      dressCodeFormalityScore: 74,
      priceValueScore: 89,
      compositeTwinFitScore: 88.6
    },
    reviewSanitization: {
      rawStarRating: 4.6,
      sanitizedStarRating: 4.5,
      totalRawReviews: 1250,
      botReviewsPurged: 80,
      sponsoredBiasPenalizedPct: 4.0,
      trustScore: 96,
      verifiedPurchaseConsensus: 'Unbeatable wet weather grip thanks to Vibram lugs. Cushioned like a dream for all-day standing and walking.',
      criticalFlags: ['Chunkier silhouette may clash with tailored tapered trousers.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Industry benchmark for wet-weather grip and high step cushioning. Vibram outsole guarantees no slipping on wet Tokyo subway marble tiles.',
      tradeOffAnalysis: 'Silhouette leans utilitarian/gorpcore rather than sleek minimalist, lowering formality score for upscale meetings.',
      twinAlignmentHighlights: [
        'GORE-TEX Invisible Fit eliminates hot spots',
        'Vibram lugs prevent wet subway tile slippage',
        'Sugarcane EVA provides supreme plushness for 15,000+ step days'
      ],
      riskAssessment: 'Low physical risk, aesthetic caution if strict formal meetings are scheduled.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-generic-sponsored-runner',
    name: 'AquaShield Ultra Storm-Walker Pro (Sponsored)',
    brand: 'FastTrend Global',
    category: 'Footwear / Cheap Knockoff',
    price: 49.99,
    originalPrice: 129.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://marketplace-promo.com/aquashield',
    sourceType: 'Headless Web Scraper (Playwright)',
    sourceLatencyMs: 480,
    specs: {
      waterproofing: 'Sprayed Chemical DWR (Washes off in 2 rains)',
      cushioningTech: 'Basic Recycled Foam',
      weightGrams: 410,
      formalityScore: 4,
      durabilityRating: 'Low (glued sole separation risk)',
      materials: ['Synthetic PU', 'Cheap Plastic Shank']
    },
    attributeScores: {
      weatherProofScore: 32,
      ergonomic15kStepsScore: 28,
      dressCodeFormalityScore: 40,
      priceValueScore: 45,
      compositeTwinFitScore: 34.1
    },
    reviewSanitization: {
      rawStarRating: 4.9,
      sanitizedStarRating: 2.1,
      totalRawReviews: 9400,
      botReviewsPurged: 7850,
      sponsoredBiasPenalizedPct: 75.0,
      trustScore: 18,
      verifiedPurchaseConsensus: 'FLAGGED JUNK: 83% of 5-star reviews generated by incentivized bot rings. Real verified purchasers cite sole detachment and soaked socks after 20 minutes in rain.',
      criticalFlags: [
        'DISQUALIFIED: Bot review farm detected with 83% fake review cluster.',
        'DISQUALIFIED: Spray coating does not meet your waterproof criteria.',
        'DISQUALIFIED: Unsupportive foam causes severe plantar strain at >8k steps.'
      ]
    },
    transparentReasoning: {
      whyThisFitsYou: 'DISQUALIFIED BY DIGITAL TWIN. Appears at top of sponsored search engines, but completely purged by AI Twinz review sanitizer.',
      tradeOffAnalysis: 'Cheap upfront sticker price hides toxic glue durability, zero heel support, and false waterproof claims.',
      twinAlignmentHighlights: [
        'Violates your personal quality floor',
        'Direct trigger for your past return reason: "rigid sole and heel blisters"',
        'Blacklisted merchant behavior'
      ],
      riskAssessment: 'Extreme risk. Purged from finalists.'
    },
    stockStatus: 'In Stock'
  }
];

export const CLOTHES_CANDIDATES: ProductCandidate[] = [
  {
    id: 'prod-lulu-commuter-capsule',
    name: 'Commission Commuter Travel Capsule (Polo & Chino Set)',
    brand: 'Lululemon',
    category: 'Clothes / Commuter Travel Wardrobe',
    price: 216.00,
    originalPrice: 226.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://shop.lululemon.com/c/men-travel-apparel',
    sourceType: 'Shopify Merchant API',
    sourceLatencyMs: 130,
    specs: {
      waterproofing: 'DWR Liquid Spill Repellency & Quick Evaporation',
      cushioningTech: '4-Way Warpstreme™ Stretch & Silverescent® Anti-Stink',
      weightGrams: 480,
      formalityScore: 8,
      durabilityRating: 'Very High (Retains tailored shape after flights)',
      materials: ['Warpstreme Technical Fabric', 'Silver-Infused Yarn', 'Wrinkle-Proof Mesh']
    },
    attributeScores: {
      weatherProofScore: 90,
      ergonomic15kStepsScore: 98,
      dressCodeFormalityScore: 92,
      priceValueScore: 94,
      compositeTwinFitScore: 97.2
    },
    reviewSanitization: {
      rawStarRating: 4.9,
      sanitizedStarRating: 4.8,
      totalRawReviews: 5420,
      botReviewsPurged: 210,
      sponsoredBiasPenalizedPct: 3.5,
      trustScore: 97,
      verifiedPurchaseConsensus: 'The benchmark two-piece travel set for international business commuters. Packs compactly into carry-ons with zero ironing required on arrival.',
      criticalFlags: ['Matches M Athletic tops & 32 x 32 bottoms perfectly.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Directly solves your travel clothing request. Integrates both your M Athletic chest fit and 32 x 32 waistline profile. Warpstreme fabric delivers 4-way stretch across 15,000 steps while retaining a crisp, smart-casual silhouette.',
      tradeOffAnalysis: 'Premium technical clothing set that replaces 3 bulky cotton outfits in your luggage.',
      twinAlignmentHighlights: [
        'Matches your exact sizing: M Athletic top & 32 x 32 trousers',
        'Anti-odor silver yarn cures past synthetic odor return concerns',
        'Preferred brand: Lululemon in your twin affinity graph'
      ],
      riskAssessment: 'Very low risk. 30-day merchant satisfaction guarantee.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-western-rise-travel-set',
    name: 'Limitless Merino & Evolution Chino Travel Set',
    brand: 'Western Rise',
    category: 'Clothes / Merino Performance Wardrobe',
    price: 248.00,
    originalPrice: 266.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://westernrise.com/collections/travel-sets',
    sourceType: 'Shopify Merchant API',
    sourceLatencyMs: 145,
    specs: {
      waterproofing: 'Shed-Tech DWR & Natural Merino Moisture Buffer',
      cushioningTech: 'Supplex® Air-Flex 4-Way Stretch & Core-Spun Merino',
      weightGrams: 490,
      formalityScore: 9,
      durabilityRating: 'Exceptional (Cordura-grade Supplex + Wool)',
      materials: ['Australian Merino Wool', 'Supplex Air-Textured Nylon', 'Mother of Pearl Buttons']
    },
    attributeScores: {
      weatherProofScore: 92,
      ergonomic15kStepsScore: 94,
      dressCodeFormalityScore: 96,
      priceValueScore: 90,
      compositeTwinFitScore: 93.6
    },
    reviewSanitization: {
      rawStarRating: 4.8,
      sanitizedStarRating: 4.6,
      totalRawReviews: 2190,
      botReviewsPurged: 95,
      sponsoredBiasPenalizedPct: 4.0,
      trustScore: 95,
      verifiedPurchaseConsensus: 'Natural temperature regulation between cold plane cabins and humid outdoor streets. Can be worn 3 days straight with zero odor.',
      criticalFlags: ['Shirt requires cold wash and hang dry.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Highest formality index for executive client presentations. Australian merino wool regulates body temperature dynamically.',
      tradeOffAnalysis: 'Slightly higher investment ($248), but eliminates dry-cleaning on trips.',
      twinAlignmentHighlights: [
        'Natural temperature regulation neutralizes sweat sensitivity',
        'Elevated dress formal aesthetic for corporate dinners'
      ],
      riskAssessment: 'Low risk. Premium yarn durability.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-arcteryx-system-a-capsule',
    name: 'System_A Transit Technical Apparel Kit',
    brand: "Arc'teryx",
    category: 'Clothes / Minimalist Techwear Kit',
    price: 360.00,
    originalPrice: 380.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://arcteryx.com/system-a',
    sourceType: 'Affiliate Partner Feed (CJ/Rakuten)',
    sourceLatencyMs: 310,
    specs: {
      waterproofing: 'FC0-DWR Water Repellent Technical Weave',
      cushioningTech: 'Anatomical Gusset Patterning & Fortius™ Air',
      weightGrams: 510,
      formalityScore: 8,
      durabilityRating: 'Museum Quality (Alpine Grade Seam Taping)',
      materials: ['Fortius™ 2.0 Softshell', 'Recycled Nylon', 'Laser-Cut Venting']
    },
    attributeScores: {
      weatherProofScore: 96,
      ergonomic15kStepsScore: 92,
      dressCodeFormalityScore: 88,
      priceValueScore: 80,
      compositeTwinFitScore: 89.4
    },
    reviewSanitization: {
      rawStarRating: 4.8,
      sanitizedStarRating: 4.7,
      totalRawReviews: 1240,
      botReviewsPurged: 60,
      sponsoredBiasPenalizedPct: 4.5,
      trustScore: 96,
      verifiedPurchaseConsensus: 'The gold standard in technical urban commute apparel. Complete freedom of movement and weather deflection.',
      criticalFlags: ['Athletic trim cut.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Unmatched technical weather resistance and commuter durability from your preferred brand, Arc\'teryx.',
      tradeOffAnalysis: 'Priced at $360, testing upper budget ceiling.',
      twinAlignmentHighlights: [
        'Preferred brand affinity: Arc\'teryx',
        'Alpine-grade weatherproofing'
      ],
      riskAssessment: 'Low risk. Lifetime brand warranty.'
    },
    stockStatus: 'Only 2 Left'
  },
  {
    id: 'prod-fasttrend-cheap-clothes',
    name: 'UltraComfort All-Weather Tracksuit Pro (Sponsored)',
    brand: 'FastTrend Global',
    category: 'Clothes / Cheap Knockoff',
    price: 29.99,
    originalPrice: 119.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://cheap-deals-online.com/clothes-set',
    sourceType: 'Headless Web Scraper (Playwright)',
    sourceLatencyMs: 490,
    specs: {
      waterproofing: 'Non-breathable synthetic polyester',
      cushioningTech: 'Scratchy Stiff Seams',
      weightGrams: 640,
      formalityScore: 3,
      durabilityRating: 'Low (Loose threads & pilling in 1 wash)',
      materials: ['100% Unbreathable Polyester', 'Plastic Zippers']
    },
    attributeScores: {
      weatherProofScore: 30,
      ergonomic15kStepsScore: 24,
      dressCodeFormalityScore: 30,
      priceValueScore: 40,
      compositeTwinFitScore: 31.0
    },
    reviewSanitization: {
      rawStarRating: 4.9,
      sanitizedStarRating: 1.7,
      totalRawReviews: 9200,
      botReviewsPurged: 8140,
      sponsoredBiasPenalizedPct: 88.0,
      trustScore: 13,
      verifiedPurchaseConsensus: 'FLAGGED JUNK: 88% fake bot reviews. Verified purchasers report suffocating polyester that turns into a sauna and rips at seams.',
      criticalFlags: [
        'DISQUALIFIED: Bot review farm detected.',
        'DISQUALIFIED: Severe sweat trap causes skin irritation.',
        'DISQUALIFIED: Inconsistent sizing.'
      ]
    },
    transparentReasoning: {
      whyThisFitsYou: 'DISQUALIFIED BY DIGITAL TWIN. Appears at top of sponsored search engines, but completely purged.',
      tradeOffAnalysis: 'Cheap upfront sticker price hides toxic scratchy fabric.',
      twinAlignmentHighlights: ['Violates personal quality floor', 'Blacklisted merchant'],
      riskAssessment: 'Severe risk.'
    },
    stockStatus: 'In Stock'
  }
];

export const PANTS_CANDIDATES: ProductCandidate[] = [
  {
    id: 'prod-lulu-commission-pant',
    name: 'Commission Slim-Fit Travel Pant (Warpstreme™ 32x32)',
    brand: 'Lululemon',
    category: 'Pants / Smart Commuter Chino',
    price: 128.00,
    originalPrice: 128.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://shop.lululemon.com/p/men-pants/commission-pant-slim-warpstreme',
    sourceType: 'Shopify Merchant API',
    sourceLatencyMs: 135,
    specs: {
      waterproofing: 'Water-Repellent DWR Treatment & Quick-Dry',
      cushioningTech: '4-Way Stretch Warpstreme™ Fabric & Ergonomic Gusset',
      weightGrams: 320,
      formalityScore: 8,
      durabilityRating: 'Very High (Shape Retention & Wrinkle-Proof)',
      materials: ['100% Elastomultiester Warpstreme', 'Hidden Secure Passport Pocket', 'Breathable Mesh Pockets']
    },
    attributeScores: {
      weatherProofScore: 88,
      ergonomic15kStepsScore: 98,
      dressCodeFormalityScore: 92,
      priceValueScore: 94,
      compositeTwinFitScore: 96.8
    },
    reviewSanitization: {
      rawStarRating: 4.8,
      sanitizedStarRating: 4.7,
      totalRawReviews: 6120,
      botReviewsPurged: 310,
      sponsoredBiasPenalizedPct: 4.2,
      trustScore: 96,
      verifiedPurchaseConsensus: 'The undisputed holy grail of travel trousers. Verified travelers praise the invisible 4-way stretch that looks like a luxury Italian wool-blend chino without bunching or wrinkling on 14-hour flights.',
      criticalFlags: ['Matches 32 x 32 profile with zero tailoring needed.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Directly matches your exact 32 x 32 pant profile. Engineered with technical 4-way Warpstreme stretch that moves freely across 15,000 steps while retaining a crisp, tailored chino crease for executive client presentations.',
      tradeOffAnalysis: 'Slightly lighter weight than heavyweight denim, making it ideal for mild climates and packed transit.',
      twinAlignmentHighlights: [
        'Matches your 32 x 32 sizing geometry with zero waist pinching',
        'Wrinkle-free recovery after long flight compression',
        'Direct alignment with your preferred brand affinity: Lululemon'
      ],
      riskAssessment: 'Very low risk. 30-day merchant satisfaction guarantee.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-western-rise-evolution',
    name: 'Evolution Pant 2.0 Ultralight Chino',
    brand: 'Western Rise',
    category: 'Pants / Ultralight Packable Travel',
    price: 128.00,
    originalPrice: 148.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://westernrise.com/products/evolution-pant',
    sourceType: 'Shopify Merchant API',
    sourceLatencyMs: 148,
    specs: {
      waterproofing: 'Stain-Proof & Water-Resistant DWR Finish',
      cushioningTech: 'Supplex® Air-Flex 4-Way Stretch Nylon',
      weightGrams: 280,
      formalityScore: 8,
      durabilityRating: 'Exceptional (Abrasion-Resistant Supplex Nylon)',
      materials: ['96% Air-Textured Nylon', '4% Elastane', 'Concealed Media Zip Pocket']
    },
    attributeScores: {
      weatherProofScore: 91,
      ergonomic15kStepsScore: 94,
      dressCodeFormalityScore: 86,
      priceValueScore: 93,
      compositeTwinFitScore: 92.4
    },
    reviewSanitization: {
      rawStarRating: 4.7,
      sanitizedStarRating: 4.5,
      totalRawReviews: 2890,
      botReviewsPurged: 160,
      sponsoredBiasPenalizedPct: 5.0,
      trustScore: 94,
      verifiedPurchaseConsensus: 'Packs down smaller than a t-shirt. Liquid spills bead right off the fabric, and it dries in under 3 hours in hotel bathrooms.',
      criticalFlags: ['Slim straight taper: Fits comfortably over commuter sneakers and dress oxfords.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Ultralight 280g travel trousers with DWR stain-repellency. Sheds coffee spills and subway rain splashes effortlessly.',
      tradeOffAnalysis: 'Matte canvas-weave texture is slightly more travel-focused than the Lululemon dress finish.',
      twinAlignmentHighlights: [
        'Fits 32x32 sizing with tailored leg opening',
        'Weighs only 280g for minimal carry-on baggage load',
        'Western Rise brand affinity confirmed'
      ],
      riskAssessment: 'Low risk. Highly durable Supplex nylon construction.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-outlier-slim-dungarees',
    name: 'Slim Dungarees Technical Canvas Pant',
    brand: 'Outlier',
    category: 'Pants / Heavy Duty Technical Formal',
    price: 198.00,
    originalPrice: 198.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://outlier.nyc/products/slim-dungarees',
    sourceType: 'Headless Web Scraper (Playwright)',
    sourceLatencyMs: 460,
    specs: {
      waterproofing: 'Schoeller F.Dry NanoSphere® Water Resistance',
      cushioningTech: 'Workcloth 4-Way Doubleweave Canvas',
      weightGrams: 410,
      formalityScore: 9,
      durabilityRating: 'Near-Indestructible (Cordura Grade Face)',
      materials: ['Cordura Nylon Face', 'Soft Polyester Back', 'Zinc Button']
    },
    attributeScores: {
      weatherProofScore: 93,
      ergonomic15kStepsScore: 89,
      dressCodeFormalityScore: 95,
      priceValueScore: 84,
      compositeTwinFitScore: 89.6
    },
    reviewSanitization: {
      rawStarRating: 4.8,
      sanitizedStarRating: 4.6,
      totalRawReviews: 1450,
      botReviewsPurged: 70,
      sponsoredBiasPenalizedPct: 3.5,
      trustScore: 95,
      verifiedPurchaseConsensus: 'The definitive one-bag travel pant. Cordura outer face survives years of heavy friction while the inside feels like soft sweatpants.',
      criticalFlags: ['Substantial fabric weight: Warmer in high summer heat.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Peak durability and highest formality score among tech trousers. Bridges the gap between raw denim aesthetic and technical weather protection.',
      tradeOffAnalysis: 'Priced at $198, approaching your upper budget elasticity limit.',
      twinAlignmentHighlights: [
        'NanoSphere treatment sheds wet city drizzle',
        'High abrasion tolerance eliminates thigh rub wear',
        'Sophisticated drape suitable for upscale client dinners'
      ],
      riskAssessment: 'Low physical risk. Top tier resale value.'
    },
    stockStatus: 'Only 2 Left'
  },
  {
    id: 'prod-fasttrend-cheap-pants',
    name: 'UltraFlex Hydro-Pant Pro 3000 (Sponsored)',
    brand: 'FastTrend Global',
    category: 'Pants / Cheap Knockoff',
    price: 24.99,
    originalPrice: 89.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://cheap-deals-online.com/hydro-pant',
    sourceType: 'Headless Web Scraper (Playwright)',
    sourceLatencyMs: 490,
    specs: {
      waterproofing: 'Coated Plastic Film (Traps all body heat)',
      cushioningTech: 'Cheap Elastic Band with No Gusset',
      weightGrams: 440,
      formalityScore: 3,
      durabilityRating: 'Extremely Low (Crotch seam blowout risk)',
      materials: ['100% Non-Breathable Recycled Polyester', 'Toxic Chemical Dyes']
    },
    attributeScores: {
      weatherProofScore: 32,
      ergonomic15kStepsScore: 24,
      dressCodeFormalityScore: 30,
      priceValueScore: 40,
      compositeTwinFitScore: 31.2
    },
    reviewSanitization: {
      rawStarRating: 4.9,
      sanitizedStarRating: 1.7,
      totalRawReviews: 8950,
      botReviewsPurged: 7920,
      sponsoredBiasPenalizedPct: 88.0,
      trustScore: 14,
      verifiedPurchaseConsensus: 'FLAGGED JUNK: 88% fake reviews detected. Verified buyers report suffocating non-breathable polyester, noisy swishing sounds, and seam failure on the second wear.',
      criticalFlags: [
        'DISQUALIFIED: Bot review farm detected with 88% fake review cluster.',
        'DISQUALIFIED: Cheap polyester causes severe sweat traps and odor buildup.',
        'DISQUALIFIED: Sizing is wildly inconsistent (runs 3 inches too short).'
      ]
    },
    transparentReasoning: {
      whyThisFitsYou: 'DISQUALIFIED BY DIGITAL TWIN. Appears at top of sponsored search engines through keyword stuffing, but eliminated by AI Twinz quality floor.',
      tradeOffAnalysis: 'Cheap price hides terrible breathability, toxic plastic dyes, and high failure rates.',
      twinAlignmentHighlights: [
        'Direct violation of user quality floor',
        'Matches return history flag: non-breathable synthetic sweat traps',
        'Blacklisted merchant entity'
      ],
      riskAssessment: 'Severe risk. Disqualified from recommendations.'
    },
    stockStatus: 'In Stock'
  }
];

export const WATCH_CANDIDATES: ProductCandidate[] = [
  {
    id: 'prod-apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2 (GPS + Cellular Titanium)',
    brand: 'Apple',
    category: 'Watches / Rugged GPS Timepiece',
    price: 799.00,
    originalPrice: 799.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://apple.com/apple-watch-ultra-2',
    sourceType: 'Shopify Merchant API',
    sourceLatencyMs: 140,
    specs: {
      waterproofing: '100m Water Resistance & High-Speed Water Sports',
      cushioningTech: 'Aerospace Grade 49mm Titanium & Dual-Frequency GPS',
      weightGrams: 61,
      formalityScore: 8,
      durabilityRating: 'Military Spec (MIL-STD 810H Sapphire Crystal)',
      materials: ['Grade 5 Aerospace Titanium', 'Sapphire Front Crystal', 'Ceramic Back']
    },
    attributeScores: {
      weatherProofScore: 99,
      ergonomic15kStepsScore: 96,
      dressCodeFormalityScore: 88,
      priceValueScore: 85,
      compositeTwinFitScore: 95.8
    },
    reviewSanitization: {
      rawStarRating: 4.9,
      sanitizedStarRating: 4.8,
      totalRawReviews: 6800,
      botReviewsPurged: 240,
      sponsoredBiasPenalizedPct: 3.2,
      trustScore: 98,
      verifiedPurchaseConsensus: 'Exceptional for global travel. 72-hour low power battery life, cellular roaming, and dual-frequency GPS that locks accurately between tall urban skyscrapers.',
      criticalFlags: ['49mm case: Bold wrist presence that fits comfortably under shirt cuffs.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Peak technical navigation companion for your international travel itinerary. Precision dual-frequency GPS tracks subway and walking navigation, while titanium casing survives rigorous daily transit.',
      tradeOffAnalysis: 'Requires charging every 2-3 days compared to dedicated solar-powered expedition watches.',
      twinAlignmentHighlights: [
        'Dual-frequency GPS guides walking navigation through high-density urban canyons',
        'Cellular connectivity keeps you reachable without phone in hand',
        'Directly aligns with your smart casual & tech lifestyle'
      ],
      riskAssessment: 'Very low risk. Comprehensive AppleCare coverage.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-garmin-fenix-7-pro',
    name: 'Fenix 7 Pro Sapphire Solar GPS',
    brand: 'Garmin',
    category: 'Watches / Multi-Sport Solar Timepiece',
    price: 799.99,
    originalPrice: 899.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://garmin.com/p/fenix-7-pro',
    sourceType: 'Affiliate Partner Feed (CJ/Rakuten)',
    sourceLatencyMs: 290,
    specs: {
      waterproofing: '10 ATM (100m Submersible)',
      cushioningTech: 'Power Sapphire™ Solar Charging & LED Flashlight',
      weightGrams: 73,
      formalityScore: 8,
      durabilityRating: 'Extreme (Titanium Bezel & Fiber-Reinforced Polymer)',
      materials: ['Titanium Bezel', 'Sapphire Glass', 'Silicone QuickFit Band']
    },
    attributeScores: {
      weatherProofScore: 98,
      ergonomic15kStepsScore: 94,
      dressCodeFormalityScore: 85,
      priceValueScore: 88,
      compositeTwinFitScore: 92.4
    },
    reviewSanitization: {
      rawStarRating: 4.8,
      sanitizedStarRating: 4.7,
      totalRawReviews: 3100,
      botReviewsPurged: 120,
      sponsoredBiasPenalizedPct: 3.8,
      trustScore: 96,
      verifiedPurchaseConsensus: 'Unmatched 22-day battery life on a single charge. The built-in LED flashlight is indispensable for late night travel navigation.',
      criticalFlags: ['MIP display prioritizes outdoor sunlight legibility over OLED contrast.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Infinite battery peace of mind. Up to 22 days of battery life with solar charging eliminates packing extra cables for multi-week travel.',
      tradeOffAnalysis: 'Memory-in-pixel screen is optimized for battery life rather than touch smartwatch apps.',
      twinAlignmentHighlights: [
        '22-day solar battery life eliminates flight charger clutter',
        'Topographic global maps preloaded for offline walking navigation'
      ],
      riskAssessment: 'Low risk. Garmin warranty honored globally.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-omega-seamaster-aqua-terra',
    name: 'Seamaster Aqua Terra 150M Master Chronometer',
    brand: 'Omega',
    category: 'Watches / Luxury Executive Swiss Horology',
    price: 5900.00,
    originalPrice: 6300.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://omegawatches.com/seamaster-aqua-terra',
    sourceType: 'Headless Web Scraper (Playwright)',
    sourceLatencyMs: 510,
    specs: {
      waterproofing: '150m Screw-Down Crown Water Resistance',
      cushioningTech: 'METAS Certified Co-Axial Calibre 8900 (Anti-Magnetic to 15,000 Gauss)',
      weightGrams: 148,
      formalityScore: 10,
      durabilityRating: 'Heirloom Heritage (Scratch-Resistant Domed Sapphire)',
      materials: ['Stainless Steel 316L', 'Teak Concept Dial', 'Sapphire Exhibition Caseback']
    },
    attributeScores: {
      weatherProofScore: 94,
      ergonomic15kStepsScore: 82,
      dressCodeFormalityScore: 99,
      priceValueScore: 70,
      compositeTwinFitScore: 86.8
    },
    reviewSanitization: {
      rawStarRating: 4.9,
      sanitizedStarRating: 4.8,
      totalRawReviews: 940,
      botReviewsPurged: 40,
      sponsoredBiasPenalizedPct: 2.0,
      trustScore: 98,
      verifiedPurchaseConsensus: 'The quintessential GADA (Go Anywhere, Do Anything) luxury watch. Flawless finishing from executive boardrooms to beach resorts.',
      criticalFlags: ['Luxury price tier: Investment grade timepiece.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Peak Swiss horological authority. 10/10 formality index for highest level executive dinners.',
      tradeOffAnalysis: 'Mechanical automatic movement lacks digital notifications, but offers lifetime prestige.',
      twinAlignmentHighlights: [
        'Master Chronometer certification guarantees chronometric precision under flight magnetism',
        'Timeless elegance suited for white-tie and business formal'
      ],
      riskAssessment: 'Investment grade. 5-year international Omega warranty.'
    },
    stockStatus: 'Only 2 Left'
  },
  {
    id: 'prod-fasttrend-cheap-watch',
    name: 'UltraTitan Pro Smart Watch 9000 (Sponsored)',
    brand: 'FastTrend Global',
    category: 'Watches / Cheap Knockoff',
    price: 19.99,
    originalPrice: 99.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://bargain-tech-deals.com/smartwatch',
    sourceType: 'Headless Web Scraper (Playwright)',
    sourceLatencyMs: 440,
    specs: {
      waterproofing: 'Zero Real Seal (Fogs up in light drizzle)',
      cushioningTech: 'Laggy 15 FPS Low-Res Screen & Fake Sensors',
      weightGrams: 90,
      formalityScore: 3,
      durabilityRating: 'Extremely Low (Battery dies after 3 hours)',
      materials: ['Hollow Chromed Plastic', 'Thin Toxic Silicone']
    },
    attributeScores: {
      weatherProofScore: 24,
      ergonomic15kStepsScore: 20,
      dressCodeFormalityScore: 30,
      priceValueScore: 38,
      compositeTwinFitScore: 28.5
    },
    reviewSanitization: {
      rawStarRating: 4.9,
      sanitizedStarRating: 1.6,
      totalRawReviews: 8900,
      botReviewsPurged: 7950,
      sponsoredBiasPenalizedPct: 89.0,
      trustScore: 12,
      verifiedPurchaseConsensus: 'FLAGGED SCAM: 89% bot reviews. Heart rate and step sensors output random fake numbers even when resting on a wooden table.',
      criticalFlags: [
        'DISQUALIFIED: Bot review ring detected.',
        'DISQUALIFIED: Fake biometric sensors with security vulnerabilities.',
        'DISQUALIFIED: Battery fails to last past 4 hours.'
      ]
    },
    transparentReasoning: {
      whyThisFitsYou: 'DISQUALIFIED BY DIGITAL TWIN. Advertises fake titanium casing but uses painted chrome plastic.',
      tradeOffAnalysis: 'Zero reliable software or battery life.',
      twinAlignmentHighlights: ['Violates personal quality floor', 'Blacklisted merchant'],
      riskAssessment: 'Severe risk.'
    },
    stockStatus: 'In Stock'
  }
];

export const SUNGLASSES_CANDIDATES: ProductCandidate[] = [
  {
    id: 'prod-rayban-wayfarer-polarized',
    name: 'Original Wayfarer Classic Polarized (RB2140)',
    brand: 'Ray-Ban',
    category: 'Sunglasses / Polarized Classic Eyewear',
    price: 171.00,
    originalPrice: 171.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://ray-ban.com/usa/sunglasses/RB2140',
    sourceType: 'Shopify Merchant API',
    sourceLatencyMs: 140,
    specs: {
      waterproofing: '100% UV400 & Hydrophobic Lens Coating',
      cushioningTech: 'Handcrafted Acetate Frame & 7-Barrel Steel Hinges',
      weightGrams: 45,
      formalityScore: 8,
      durabilityRating: 'Very High (Mineral Glass Crystal Lenses)',
      materials: ['Cellulose Acetate Frame', 'G-15 Green Polarized Glass Lenses']
    },
    attributeScores: {
      weatherProofScore: 92,
      ergonomic15kStepsScore: 96,
      dressCodeFormalityScore: 94,
      priceValueScore: 95,
      compositeTwinFitScore: 96.5
    },
    reviewSanitization: {
      rawStarRating: 4.8,
      sanitizedStarRating: 4.7,
      totalRawReviews: 8400,
      botReviewsPurged: 410,
      sponsoredBiasPenalizedPct: 4.0,
      trustScore: 97,
      verifiedPurchaseConsensus: 'Timeless aesthetic that looks effortless with both tailored suits and casual travel clothes. Crystal polarized lenses cut street glare completely.',
      criticalFlags: ['Classic forward pantoscopic tilt: Sits comfortably on facial contours.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'The gold standard in travel eyewear. Mineral glass polarized lenses eliminate harsh glare while walking across sunlit Tokyo avenues, and the acetate frame complements your smart-casual wardrobe.',
      tradeOffAnalysis: 'Mineral glass lenses offer superior optical clarity and scratch resistance, weighing slightly more than polycarbonate.',
      twinAlignmentHighlights: [
        'Matches smart-casual and formal itinerary requirements',
        '100% UV polarized protection for high-mileage sunny days',
        'Well within your $200 target budget'
      ],
      riskAssessment: 'Very low risk. 2-year warranty.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-oakley-holbrook-prizm',
    name: 'Holbrook Prizm Deep Water Polarized',
    brand: 'Oakley',
    category: 'Sunglasses / Ultralight Sport-Commuter',
    price: 182.00,
    originalPrice: 182.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://oakley.com/en-us/product/W0OO9102',
    sourceType: 'Affiliate Partner Feed (CJ/Rakuten)',
    sourceLatencyMs: 270,
    specs: {
      waterproofing: 'Plutonite® High-Impact Lens & Hydrophobic Barrier',
      cushioningTech: 'O-Matter™ Stress-Resistant Frame & Three-Point Fit',
      weightGrams: 28,
      formalityScore: 7,
      durabilityRating: 'Extreme (ANSI Z87.1 Impact Rated)',
      materials: ['O-Matter™ Lightweight Polymer', 'Plutonite® Polycarbonate']
    },
    attributeScores: {
      weatherProofScore: 95,
      ergonomic15kStepsScore: 98,
      dressCodeFormalityScore: 84,
      priceValueScore: 92,
      compositeTwinFitScore: 93.1
    },
    reviewSanitization: {
      rawStarRating: 4.8,
      sanitizedStarRating: 4.6,
      totalRawReviews: 4200,
      botReviewsPurged: 180,
      sponsoredBiasPenalizedPct: 4.5,
      trustScore: 95,
      verifiedPurchaseConsensus: 'Weighs virtually nothing (28g) on your face. You can wear them all day without nose bridge fatigue.',
      criticalFlags: ['Casual squared silhouette.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Ultralight 28g chassis prevents nose bridge pressure over 15,000 steps. Prizm optics enhance visual contrast in changing weather.',
      tradeOffAnalysis: 'Slightly sportier vibe than classic Ray-Ban Wayfarer.',
      twinAlignmentHighlights: [
        'Ultralight construction prevents ear and nose fatigue',
        'Impact resistant lenses withstand drops and travel packing'
      ],
      riskAssessment: 'Low risk. High durability.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-fasttrend-cheap-sunglasses',
    name: 'PolarShield HD Tactical Sunglasses (Sponsored)',
    brand: 'FastTrend Global',
    category: 'Sunglasses / Cheap Knockoff',
    price: 14.99,
    originalPrice: 69.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://bargain-shades.com/polarshield',
    sourceType: 'Headless Web Scraper (Playwright)',
    sourceLatencyMs: 440,
    specs: {
      waterproofing: 'Non-UV Rated Acrylic Plastic',
      cushioningTech: 'Brittle Molded Plastic Frame',
      weightGrams: 22,
      formalityScore: 3,
      durabilityRating: 'Extremely Low (Hinge snaps easily)',
      materials: ['Recycled Plastic', 'Untested Acrylic Film']
    },
    attributeScores: {
      weatherProofScore: 22,
      ergonomic15kStepsScore: 25,
      dressCodeFormalityScore: 30,
      priceValueScore: 40,
      compositeTwinFitScore: 28.2
    },
    reviewSanitization: {
      rawStarRating: 4.9,
      sanitizedStarRating: 1.6,
      totalRawReviews: 9400,
      botReviewsPurged: 8400,
      sponsoredBiasPenalizedPct: 89.0,
      trustScore: 11,
      verifiedPurchaseConsensus: 'FLAGGED DANGEROUS: 89% fake reviews. Lenses fail basic UV400 lab tests, causing pupil dilation without blocking ultraviolet light.',
      criticalFlags: [
        'DISQUALIFIED: Severe eye safety risk (Fails UV protection).',
        'DISQUALIFIED: Bot review cluster detected.',
        'DISQUALIFIED: Warped optics cause headaches.'
      ]
    },
    transparentReasoning: {
      whyThisFitsYou: 'DISQUALIFIED BY DIGITAL TWIN. Acrylic film distorts vision and lacks certified UV protection.',
      tradeOffAnalysis: 'Dangerous to eyesight in bright sunlight.',
      twinAlignmentHighlights: ['Direct violation of safety and quality floor', 'Blacklisted merchant'],
      riskAssessment: 'Severe risk.'
    },
    stockStatus: 'In Stock'
  }
];

export const WALLETS_CANDIDATES: ProductCandidate[] = [
  {
    id: 'prod-bellroy-hide-seek',
    name: 'Hide & Seek RFID Protection Leather Wallet',
    brand: 'Bellroy',
    category: 'Wallets / Premium Slim Leather Wallet',
    price: 89.00,
    originalPrice: 89.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://bellroy.com/products/hide-and-seek-wallet',
    sourceType: 'Shopify Merchant API',
    sourceLatencyMs: 135,
    specs: {
      waterproofing: 'Water-Resistant Environmentally Certified Leather',
      cushioningTech: 'Hidden Currency Section & RFID Theft Blocking',
      weightGrams: 58,
      formalityScore: 9,
      durabilityRating: 'High (Full-Grain Tanned Cow Leather)',
      materials: ['Certified Vegetable Tanned Leather', 'RFID Shielding Liner']
    },
    attributeScores: {
      weatherProofScore: 90,
      ergonomic15kStepsScore: 98,
      dressCodeFormalityScore: 96,
      priceValueScore: 95,
      compositeTwinFitScore: 96.7
    },
    reviewSanitization: {
      rawStarRating: 4.8,
      sanitizedStarRating: 4.7,
      totalRawReviews: 4600,
      botReviewsPurged: 180,
      sponsoredBiasPenalizedPct: 3.5,
      trustScore: 97,
      verifiedPurchaseConsensus: 'The quintessential minimalist travel wallet. Holds 12 cards, flat currency, and has a hidden compartment that shields high-value bills from pickpockets.',
      criticalFlags: ['Slim 10mm profile slips effortlessly into front trouser pockets.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Designed for international commuter peace of mind. RFID shielding protects credit cards in crowded subway cars, while the ultra-slim 10mm silhouette won\'t bulge tailored trousers.',
      tradeOffAnalysis: 'Holds up to 12 cards comfortably without stretching.',
      twinAlignmentHighlights: [
        'RFID blocking for crowded subway stations',
        'Front-pocket friendly to prevent pickpocketing',
        'Full-grain leather matches formal attire'
      ],
      riskAssessment: 'Very low risk. 3-year warranty.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-ridge-wallet-titanium',
    name: 'The Ridge Minimalist Titanium Wallet',
    brand: 'The Ridge',
    category: 'Wallets / Aerospace Titanium Cardholder',
    price: 110.00,
    originalPrice: 110.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://ridge.com/products/titanium-matte-black',
    sourceType: 'Shopify Merchant API',
    sourceLatencyMs: 140,
    specs: {
      waterproofing: '100% Waterproof & Corrosion Proof Titanium',
      cushioningTech: 'Dual-Track Elastic & Integrated Cash Strap',
      weightGrams: 70,
      formalityScore: 8,
      durabilityRating: 'Indestructible (Grade 5 Titanium Plates)',
      materials: ['Grade 5 Titanium', 'Replaceable Elastic', 'T5 Torx Screws']
    },
    attributeScores: {
      weatherProofScore: 99,
      ergonomic15kStepsScore: 94,
      dressCodeFormalityScore: 88,
      priceValueScore: 91,
      compositeTwinFitScore: 93.2
    },
    reviewSanitization: {
      rawStarRating: 4.8,
      sanitizedStarRating: 4.6,
      totalRawReviews: 12000,
      botReviewsPurged: 620,
      sponsoredBiasPenalizedPct: 4.5,
      trustScore: 95,
      verifiedPurchaseConsensus: 'Indestructible titanium construction. Completely eliminates back pocket spinal imbalance.',
      criticalFlags: ['Holds 1-12 cards with tactile thumb push access.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Indestructible titanium RFID cardholder that never wears out. Eliminates pocket bulk completely.',
      tradeOffAnalysis: 'Metallic modern industrial aesthetic rather than heritage leather.',
      twinAlignmentHighlights: ['Lifetime durability guarantee', 'Zero pocket footprint'],
      riskAssessment: 'Low risk. Lifetime warranty.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-fasttrend-cheap-wallet',
    name: 'TitanShield Slim Carbon Wallet (Sponsored)',
    brand: 'FastTrend Global',
    category: 'Wallets / Cheap Knockoff',
    price: 12.99,
    originalPrice: 49.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://cheap-deals-online.com/wallet',
    sourceType: 'Headless Web Scraper (Playwright)',
    sourceLatencyMs: 440,
    specs: {
      waterproofing: 'Cheap Fake Carbon Print (Peels in 1 week)',
      cushioningTech: 'Weak Brittle Elastic Band',
      weightGrams: 85,
      formalityScore: 3,
      durabilityRating: 'Extremely Low (Cards get scratched and stuck)',
      materials: ['Printed Plastic', 'Flimsy Elastic']
    },
    attributeScores: {
      weatherProofScore: 24,
      ergonomic15kStepsScore: 22,
      dressCodeFormalityScore: 30,
      priceValueScore: 38,
      compositeTwinFitScore: 28.0
    },
    reviewSanitization: {
      rawStarRating: 4.9,
      sanitizedStarRating: 1.6,
      totalRawReviews: 9600,
      botReviewsPurged: 8600,
      sponsoredBiasPenalizedPct: 90.0,
      trustScore: 10,
      verifiedPurchaseConsensus: 'FLAGGED JUNK: 90% fake reviews. Sharp metal burrs scratch chip cards and elastic snapped after 10 days.',
      criticalFlags: ['DISQUALIFIED: Bot review farm detected.', 'DISQUALIFIED: Scratches credit card chips.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'DISQUALIFIED BY DIGITAL TWIN. Fake carbon vinyl over sharp stamped tin.',
      tradeOffAnalysis: 'Destroys cards and wears out quickly.',
      twinAlignmentHighlights: ['Violates personal quality floor', 'Blacklisted merchant'],
      riskAssessment: 'Severe risk.'
    },
    stockStatus: 'In Stock'
  }
];

export const LONDON_OUTERWEAR_CANDIDATES: ProductCandidate[] = [
  {
    id: 'prod-arcteryx-beta-coat',
    name: 'Beta Lightweight GORE-TEX Coat',
    brand: "Arc'teryx",
    category: 'Outerwear / Stormproof Commute',
    price: 450.00,
    originalPrice: 450.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://arcteryx.com/us/en/shop/mens/beta-coat',
    sourceType: 'Shopify Merchant API',
    sourceLatencyMs: 138,
    specs: {
      waterproofing: '3-Layer GORE-TEX with C-KNIT™ Backer (28,000mm)',
      cushioningTech: 'Articulated Ergonomic Patterning & Pit Vents',
      weightGrams: 375,
      formalityScore: 8,
      durabilityRating: 'Exceptional (N30p 3L GORE-TEX Face)',
      materials: ['GORE-TEX Pro Membrane', 'Nylon Face Fabric', 'C-KNIT Backer']
    },
    attributeScores: {
      weatherProofScore: 99,
      ergonomic15kStepsScore: 94,
      dressCodeFormalityScore: 88,
      priceValueScore: 85,
      compositeTwinFitScore: 94.6
    },
    reviewSanitization: {
      rawStarRating: 4.9,
      sanitizedStarRating: 4.8,
      totalRawReviews: 2430,
      botReviewsPurged: 120,
      sponsoredBiasPenalizedPct: 3.2,
      trustScore: 97,
      verifiedPurchaseConsensus: 'Impenetrable in London drizzle and tube transfers. The C-KNIT interior feels soft against neck skin without the loud rustle of traditional mountain hardshells.',
      criticalFlags: ['Athletic trim cut: Recommend true size M for blazer layering.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Designed for London relentless wet weather with 28,000mm GORE-TEX membrane. High breathability stops sweat accumulation when briskly navigating crowded Underground escalators.',
      tradeOffAnalysis: 'Minimalist alpine hood stows neatly, but lacks a formal wool lapel if ultra-conservative Whitehall attire is required.',
      twinAlignmentHighlights: [
        'Matches preferred brand affinity: Arc\'teryx in your wardrobe graph',
        'Directly cures your Nov 2024 return vector ("heavy waterlogged wool coat")',
        'Ultralight 375g pack weight makes it easy to carry indoors'
      ],
      riskAssessment: 'Low risk. Full Arc\'teryx lifetime membrane warranty honored.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-mackintosh-oxford-mac',
    name: 'Oxford Bonded Cotton Raincoat',
    brand: 'Mackintosh',
    category: 'Outerwear / British Heritage Formal',
    price: 895.00,
    originalPrice: 995.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://mackintosh.com/item/oxford-bonded-mac',
    sourceType: 'Affiliate Partner Feed (CJ/Rakuten)',
    sourceLatencyMs: 340,
    specs: {
      waterproofing: 'Handcrafted Bonded Cotton (100% Water-repellent)',
      cushioningTech: 'Underarm Brass Eyelet Ventilation',
      weightGrams: 760,
      formalityScore: 10,
      durabilityRating: 'Heritage Hand-Taped Seams',
      materials: ['Bonded Cotton Twill', 'Natural Horn Buttons', 'Rubberized Tape']
    },
    attributeScores: {
      weatherProofScore: 92,
      ergonomic15kStepsScore: 78,
      dressCodeFormalityScore: 99,
      priceValueScore: 72,
      compositeTwinFitScore: 87.8
    },
    reviewSanitization: {
      rawStarRating: 4.8,
      sanitizedStarRating: 4.6,
      totalRawReviews: 980,
      botReviewsPurged: 65,
      sponsoredBiasPenalizedPct: 6.0,
      trustScore: 93,
      verifiedPurchaseConsensus: 'The quintessential British raincoat for City of London boardrooms. Unmatched drape over bespoke tailoring.',
      criticalFlags: ['Heavier cotton weight: Not ideal if walking >15k steps in warm humidity.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Peak British boardroom elegance. If your London itinerary involves high-profile corporate dinners in Mayfair or the City, this delivers pure Savile Row aesthetic authority.',
      tradeOffAnalysis: 'Twice the weight of Arc\'teryx (760g vs 375g) and costs $895, testing your maximum budget flexibility.',
      twinAlignmentHighlights: [
        'Perfect 10/10 formality match for British Business Formal',
        'Handmade vulcanized seam taping ensures total drizzle deflection',
        'Timeless silhouette that never dates'
      ],
      riskAssessment: 'Moderate budget elasticity stretch. Dry clean only by rubberized coat specialists.'
    },
    stockStatus: 'Only 2 Left'
  },
  {
    id: 'prod-patagonia-torrentshell-3l',
    name: 'Torrentshell 3L Waterproof Shell',
    brand: 'Patagonia',
    category: 'Outerwear / Everyday Weatherproof',
    price: 179.00,
    originalPrice: 179.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://patagonia.com/product/mens-torrentshell-3l-rain-jacket',
    sourceType: 'Shopify Merchant API',
    sourceLatencyMs: 165,
    specs: {
      waterproofing: 'H2No® Performance Standard 3-Layer (20,000mm)',
      cushioningTech: 'Microfleece-Lined Neck & Two-Way Pit Zips',
      weightGrams: 400,
      formalityScore: 7,
      durabilityRating: 'High (100% Recycled ECONYL® Ripstop)',
      materials: ['Recycled Nylon Ripstop', 'Polycarbonate PU Membrane', 'DWR Finish']
    },
    attributeScores: {
      weatherProofScore: 93,
      ergonomic15kStepsScore: 90,
      dressCodeFormalityScore: 76,
      priceValueScore: 98,
      compositeTwinFitScore: 89.9
    },
    reviewSanitization: {
      rawStarRating: 4.7,
      sanitizedStarRating: 4.5,
      totalRawReviews: 5310,
      botReviewsPurged: 310,
      sponsoredBiasPenalizedPct: 4.5,
      trustScore: 95,
      verifiedPurchaseConsensus: 'Indestructible rain protection for the price. The 3-layer H2No membrane fixes previous delamination flaws of older 2.5-layer versions.',
      criticalFlags: ['Slight rustle sound when walking briskly indoors.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Supreme price-to-performance value ($179). Completely insulates against London drizzle with pit zips to regulate temperature between windy street corners and heated subway stations.',
      tradeOffAnalysis: 'Slightly more casual ripstop texture than the Arc\'teryx Beta Coat.',
      twinAlignmentHighlights: [
        'Well under your target budget ($179 vs $200 target)',
        '3-layer construction ensures membrane won\'t stick to clammy skin',
        'Ironclad Patagonia repair & replacement warranty'
      ],
      riskAssessment: 'Very low risk. High resale and trade-in retention.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-stormguard-fake-knockoff',
    name: 'StormGuard Hydro-Shield Ultra Shell (Sponsored)',
    brand: 'FastTrend Global',
    category: 'Outerwear / Cheap Knockoff',
    price: 39.99,
    originalPrice: 149.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://promo-deals-direct.com/stormguard',
    sourceType: 'Headless Web Scraper (Playwright)',
    sourceLatencyMs: 510,
    specs: {
      waterproofing: 'Sprayed Chemical DWR (Washes off in 20 min)',
      cushioningTech: 'Rigid Non-Breathable Plastic Liner',
      weightGrams: 640,
      formalityScore: 3,
      durabilityRating: 'Low (seam heat tape peels within 1 month)',
      materials: ['Uncoated Polyester', 'Toxic Vinyl Film']
    },
    attributeScores: {
      weatherProofScore: 30,
      ergonomic15kStepsScore: 25,
      dressCodeFormalityScore: 35,
      priceValueScore: 40,
      compositeTwinFitScore: 31.4
    },
    reviewSanitization: {
      rawStarRating: 4.9,
      sanitizedStarRating: 1.9,
      totalRawReviews: 8120,
      botReviewsPurged: 6940,
      sponsoredBiasPenalizedPct: 82.0,
      trustScore: 16,
      verifiedPurchaseConsensus: 'FLAGGED JUNK: 85% of 5-star reviews generated by paid bot farms. Verified users report non-breathable vinyl creates a sauna effect, soaking inside shirts in sweat.',
      criticalFlags: [
        'DISQUALIFIED: Bot review farm detected with 85% fake review cluster.',
        'DISQUALIFIED: Spray coating lacks genuine breathable membrane.',
        'DISQUALIFIED: Direct trigger for your return vector: non-breathable vinyl sweat.'
      ]
    },
    transparentReasoning: {
      whyThisFitsYou: 'DISQUALIFIED BY DIGITAL TWIN. Top sponsored search placement on generic search engines, but purges instantly under AI Twinz verification.',
      tradeOffAnalysis: 'Appears cheap but fails immediately in real rain while creating extreme condensation.',
      twinAlignmentHighlights: [
        'Direct violation of user quality floor',
        'Matches return history flag: non-breathable vinyl sweat traps',
        'Blacklisted merchant entity'
      ],
      riskAssessment: 'Severe risk. Purged from finalists.'
    },
    stockStatus: 'In Stock'
  }
];

export const FLIGHT_AUDIO_CANDIDATES: ProductCandidate[] = [
  {
    id: 'prod-sony-wh1000xm5',
    name: 'WH-1000XM5 Wireless Noise-Canceling',
    brand: 'Sony',
    category: 'Audio / Long-Haul Travel ANC',
    price: 348.00,
    originalPrice: 399.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://electronics.sony.com/audio/headphones/headband/p/wh1000xm5-b',
    sourceType: 'Shopify Merchant API',
    sourceLatencyMs: 140,
    specs: {
      waterproofing: 'Cabin Environment Safe / Splash Resistant',
      cushioningTech: 'Soft Fit Synthetic Leather & Stepless Slider',
      weightGrams: 250,
      formalityScore: 8,
      durabilityRating: 'Very High (Carbon Composite Diaphragm)',
      materials: ['Soft Fit Leatherette', 'Recycled ABS Plastic', 'Neodymium Drivers']
    },
    attributeScores: {
      weatherProofScore: 85,
      ergonomic15kStepsScore: 97,
      dressCodeFormalityScore: 90,
      priceValueScore: 91,
      compositeTwinFitScore: 96.2
    },
    reviewSanitization: {
      rawStarRating: 4.8,
      sanitizedStarRating: 4.7,
      totalRawReviews: 12400,
      botReviewsPurged: 920,
      sponsoredBiasPenalizedPct: 5.5,
      trustScore: 96,
      verifiedPurchaseConsensus: 'The gold standard for long flights. Dual Auto NC Optimizer eliminates 777 jet engine drone entirely. Ear cups distribute pressure so gently you forget you are wearing them.',
      criticalFlags: ['Non-folding hinge: Requires flat travel case inside carry-on.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Engineered specifically for 14-hour transpacific flights. 30-hour battery life outlasts your flight itinerary, and dual V1/QN1 processors filter low-frequency pressurized cabin rumble completely.',
      tradeOffAnalysis: 'Case is slightly larger than foldable older models, but the stepless headband eliminates all crown hot spots.',
      twinAlignmentHighlights: [
        'Ultralight 250g chassis prevents neck fatigue on 14hr flights',
        'Multipoint Bluetooth allows seamless switching between flight iPad and Zoom calls',
        'Top 1% noise cancellation purity rating'
      ],
      riskAssessment: 'Low risk. 2-year manufacturer warranty with airline adapter bundled.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-bose-qc-ultra',
    name: 'QuietComfort Ultra Spatial ANC',
    brand: 'Bose',
    category: 'Audio / Ultra Comfort Travel ANC',
    price: 379.00,
    originalPrice: 429.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://bose.com/p/headphones/bose-quietcomfort-ultra-headphones',
    sourceType: 'Affiliate Partner Feed (CJ/Rakuten)',
    sourceLatencyMs: 290,
    specs: {
      waterproofing: 'IPX4 Splash Resistant',
      cushioningTech: 'CustomTune Ear Canal Calibration & Minimal Clamp Force',
      weightGrams: 253,
      formalityScore: 8,
      durabilityRating: 'High (Cast Aluminum Arm Architecture)',
      materials: ['Protein Leather', 'Cast Aluminum', 'Acoustic Mesh']
    },
    attributeScores: {
      weatherProofScore: 88,
      ergonomic15kStepsScore: 99,
      dressCodeFormalityScore: 86,
      priceValueScore: 87,
      compositeTwinFitScore: 93.1
    },
    reviewSanitization: {
      rawStarRating: 4.7,
      sanitizedStarRating: 4.5,
      totalRawReviews: 4620,
      botReviewsPurged: 380,
      sponsoredBiasPenalizedPct: 7.0,
      trustScore: 92,
      verifiedPurchaseConsensus: 'Unequaled ergonomic clamping force. You can wear these while sleeping against an airplane window without ear cartilage soreness.',
      criticalFlags: ['Immersive audio mode reduces battery life from 24h to 18h.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Benchmark in long-haul physical comfort. Lowest lateral clamping pressure in its class prevents headache pressure on sensitive temples.',
      tradeOffAnalysis: 'Battery life (24 hours) is slightly less than Sony WH-1000XM5 (30 hours), though plenty for a 14-hour flight.',
      twinAlignmentHighlights: [
        'Folds compactly into clamshell travel case',
        'CustomTune automatically adjusts audio equalization to your unique ear canal geometry',
        'Cast aluminum arms offer premium executive finish'
      ],
      riskAssessment: 'Low risk. Generous 90-day flight trial return policy.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-bw-px8',
    name: 'Px8 Flagship Wireless ANC',
    brand: 'Bowers & Wilkins',
    category: 'Audio / Luxury Audiophile Travel',
    price: 699.00,
    originalPrice: 699.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://bowerswilkins.com/en-us/product/over-ear-headphones/px8',
    sourceType: 'Headless Web Scraper (Playwright)',
    sourceLatencyMs: 580,
    specs: {
      waterproofing: 'Precision Machined Luxury Grade',
      cushioningTech: 'Memory Foam Wrapped in Nappa Lambskin',
      weightGrams: 320,
      formalityScore: 10,
      durabilityRating: 'Museum Quality (Die-cast Aluminum & Diamond Cut)',
      materials: ['Nappa Lambskin Leather', 'Die-cast Aluminum Arms', 'Carbon Cone Drivers']
    },
    attributeScores: {
      weatherProofScore: 80,
      ergonomic15kStepsScore: 88,
      dressCodeFormalityScore: 99,
      priceValueScore: 74,
      compositeTwinFitScore: 88.4
    },
    reviewSanitization: {
      rawStarRating: 4.8,
      sanitizedStarRating: 4.6,
      totalRawReviews: 1410,
      botReviewsPurged: 90,
      sponsoredBiasPenalizedPct: 5.0,
      trustScore: 94,
      verifiedPurchaseConsensus: 'Highest audio fidelity in wireless ANC. Real Nappa leather and aluminum give it executive boardroom presence unlike plastic alternatives.',
      criticalFlags: ['Heavier at 320g: Noticeable weight after 6+ hours of continuous wear.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'The luxury statement piece for first-class international transit. Carbon cone drive units provide audiophile clarity that outclasses consumer ANC headsets.',
      tradeOffAnalysis: 'Weighs 70g more than Sony WH-1000XM5 and costs $699.',
      twinAlignmentHighlights: [
        'Highest formality aesthetic index (10/10) for executive travel',
        'Nappa leather ear cushions provide plush acoustic isolation',
        '24-bit DSP audio engine with Qualcomm aptX Adaptive'
      ],
      riskAssessment: 'Premium investment. Requires careful handling of luxury lambskin leather.'
    },
    stockStatus: 'Only 2 Left'
  },
  {
    id: 'prod-aeropods-cheap-knockoff',
    name: 'AeroPods Pro Wireless Noise Cancelling (Sponsored)',
    brand: 'SoundBlast Global',
    category: 'Audio / Cheap Knockoff',
    price: 29.99,
    originalPrice: 99.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://bargain-tech-deals.com/aeropods',
    sourceType: 'Headless Web Scraper (Playwright)',
    sourceLatencyMs: 440,
    specs: {
      waterproofing: 'Zero Ingress Protection',
      cushioningTech: 'Hard Sponge Foam with Rigid Plastic Band',
      weightGrams: 385,
      formalityScore: 3,
      durabilityRating: 'Extremely Low (snapping plastic hinges)',
      materials: ['Hollow Recycled Plastic', 'Synthetic Sponge']
    },
    attributeScores: {
      weatherProofScore: 28,
      ergonomic15kStepsScore: 22,
      dressCodeFormalityScore: 30,
      priceValueScore: 38,
      compositeTwinFitScore: 29.8
    },
    reviewSanitization: {
      rawStarRating: 4.9,
      sanitizedStarRating: 1.8,
      totalRawReviews: 9640,
      botReviewsPurged: 8870,
      sponsoredBiasPenalizedPct: 88.0,
      trustScore: 12,
      verifiedPurchaseConsensus: 'FLAGGED SCAM: 92% fake reviews generated by bot rings. Does not contain an active noise-cancellation chipset—relies purely on muffled passive plastic cups. Hinge snapped on day 3.',
      criticalFlags: [
        'DISQUALIFIED: Bot review farm detected with 92% fake review cluster.',
        'DISQUALIFIED: False advertising — No active noise canceling hardware chip.',
        'DISQUALIFIED: Severe clamp pressure causes ear pain in <30 minutes.'
      ]
    },
    transparentReasoning: {
      whyThisFitsYou: 'DISQUALIFIED BY DIGITAL TWIN. Floods sponsored e-commerce listings with stolen stock photos, but caught and eliminated by AI Twinz trust purity check.',
      tradeOffAnalysis: 'Zero noise cancellation capabilities; plastic headband cracks under cabin bag pressure.',
      twinAlignmentHighlights: [
        'Completely below minimum build-quality standards',
        'Violates user requirement for transpacific flight cabin comfort',
        'Merchant banned from automated tokenized checkout'
      ],
      riskAssessment: 'Extreme risk. Immediate disqualification.'
    },
    stockStatus: 'In Stock'
  }
];

export const BAGS_CANDIDATES: ProductCandidate[] = [
  {
    id: 'prod-aer-travel-pack-3',
    name: 'Travel Pack 3 X-Pac Commuter',
    brand: 'Aer',
    category: 'Bags / Weatherproof Travel Pack',
    price: 249.00,
    originalPrice: 249.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://aersf.com/products/travel-pack-3-x-pac',
    sourceType: 'Shopify Merchant API',
    sourceLatencyMs: 140,
    specs: {
      waterproofing: 'Dimension-Polyant® VX-42 X-Pac™ Waterproof Sailcloth',
      cushioningTech: 'Load-Lifter Ergonomic Harness & Magnetic Fidlock™ Sternum',
      weightGrams: 1800,
      formalityScore: 8,
      durabilityRating: 'Extreme (YKK® AquaGuard® Zips & Duraflex Hardware)',
      materials: ['VX-42 X-Pac Sailcloth', '1680D Cordura Ballistic Nylon', 'High-Density Foam']
    },
    attributeScores: {
      weatherProofScore: 98,
      ergonomic15kStepsScore: 95,
      dressCodeFormalityScore: 90,
      priceValueScore: 91,
      compositeTwinFitScore: 95.7
    },
    reviewSanitization: {
      rawStarRating: 4.9,
      sanitizedStarRating: 4.8,
      totalRawReviews: 3200,
      botReviewsPurged: 110,
      sponsoredBiasPenalizedPct: 3.5,
      trustScore: 98,
      verifiedPurchaseConsensus: 'The gold standard for minimalist one-bag business travel. Easily slips under airplane seats or overhead bins, and the harness distributes heavy laptop weight effortlessly.',
      criticalFlags: ['Structured 35L volume: Remains sleek even when packed to capacity.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Engineered for seamless international transit. Waterproof X-Pac sailcloth protects electronics against sudden rain showers, while the ergonomic load-lifter straps prevent spinal fatigue across 15,000 airport and subway steps.',
      tradeOffAnalysis: 'Sturdy structured chassis weighs 1.8kg empty, but balances weight better than frameless packs.',
      twinAlignmentHighlights: [
        'Dedicated padded laptop compartment holds up to 16" MacBook Pro',
        'Luggage handle pass-through for rapid airport maneuvering',
        'Directly fits within your target budget ceiling'
      ],
      riskAssessment: 'Very low risk. Renowned brand reliability with lifetime warranty.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-peak-design-travel-30l',
    name: 'Travel Backpack 30L',
    brand: 'Peak Design',
    category: 'Bags / Modular Camera & Travel Pack',
    price: 229.00,
    originalPrice: 229.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://peakdesign.com/products/travel-backpack-30l',
    sourceType: 'Affiliate Partner Feed (CJ/Rakuten)',
    sourceLatencyMs: 280,
    specs: {
      waterproofing: '100% Recycled 400D Weatherproof Nylon Canvas',
      cushioningTech: 'Axial Strap Attachments & Stowable Hip Belt',
      weightGrams: 1440,
      formalityScore: 8,
      durabilityRating: 'Very High (UltraZips™ Abrasion Resistance)',
      materials: ['400D Double Poly-Coated Canvas', 'Anodized Aluminum Hardware']
    },
    attributeScores: {
      weatherProofScore: 92,
      ergonomic15kStepsScore: 92,
      dressCodeFormalityScore: 88,
      priceValueScore: 93,
      compositeTwinFitScore: 91.8
    },
    reviewSanitization: {
      rawStarRating: 4.8,
      sanitizedStarRating: 4.6,
      totalRawReviews: 2450,
      botReviewsPurged: 120,
      sponsoredBiasPenalizedPct: 4.0,
      trustScore: 95,
      verifiedPurchaseConsensus: 'Supreme modularity. Expandable from 27L to 33L when you need extra room for duty-free gifts.',
      criticalFlags: ['Shoulder straps are slightly firmer until a 1-week break-in.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Peak versatility with top and rear dual access. Weatherproof nylon shell keeps travel documents dry.',
      tradeOffAnalysis: 'Slightly firmer foam density than Aer Travel Pack 3.',
      twinAlignmentHighlights: [
        'Clean minimalist silhouette looks sharp in boardrooms',
        'Internal expansion zipper gives 6L extra packing buffer'
      ],
      riskAssessment: 'Low risk. Guaranteed for life by Peak Design.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-fasttrend-cheap-pack',
    name: 'TrekPro Tactical 40L Storm-Pack (Sponsored)',
    brand: 'FastTrend Global',
    category: 'Bags / Cheap Knockoff',
    price: 26.99,
    originalPrice: 99.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://bargain-packs-online.com/trekpro',
    sourceType: 'Headless Web Scraper (Playwright)',
    sourceLatencyMs: 470,
    specs: {
      waterproofing: 'Basic Untaped Polyester (Soaks through in 5 min)',
      cushioningTech: 'Zero-Support Hollow Foam Straps',
      weightGrams: 900,
      formalityScore: 3,
      durabilityRating: 'Extremely Low (Zipper teeth break under load)',
      materials: ['Cheap 300D Polyester', 'Flimsy Plastic Buckles']
    },
    attributeScores: {
      weatherProofScore: 28,
      ergonomic15kStepsScore: 25,
      dressCodeFormalityScore: 32,
      priceValueScore: 42,
      compositeTwinFitScore: 30.6
    },
    reviewSanitization: {
      rawStarRating: 4.9,
      sanitizedStarRating: 1.8,
      totalRawReviews: 9100,
      botReviewsPurged: 8020,
      sponsoredBiasPenalizedPct: 86.0,
      trustScore: 15,
      verifiedPurchaseConsensus: 'FLAGGED JUNK: 86% bot reviews detected. Zipper burst open at airport baggage check, spilling contents.',
      criticalFlags: [
        'DISQUALIFIED: Bot review farm detected with 86% fake review cluster.',
        'DISQUALIFIED: Straps dig into clavicles with >5kg weight.',
        'DISQUALIFIED: Zero water resistance.'
      ]
    },
    transparentReasoning: {
      whyThisFitsYou: 'DISQUALIFIED BY DIGITAL TWIN. Advertised with stolen military aesthetics but fails basic load-bearing tests.',
      tradeOffAnalysis: 'Cheap price hides broken zippers and zero rain protection.',
      twinAlignmentHighlights: [
        'Direct violation of user quality floor',
        'Blacklisted merchant entity'
      ],
      riskAssessment: 'Severe risk. Disqualified.'
    },
    stockStatus: 'In Stock'
  }
];

export const SHIRTS_CANDIDATES: ProductCandidate[] = [
  {
    id: 'prod-lulu-evolution-polo',
    name: 'Evolution Short Sleeve Polo (Silverescent™)',
    brand: 'Lululemon',
    category: 'Shirts / Anti-Odor Commuter Polo',
    price: 88.00,
    originalPrice: 88.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://shop.lululemon.com/p/men-polos/evolution-polo',
    sourceType: 'Shopify Merchant API',
    sourceLatencyMs: 142,
    specs: {
      waterproofing: 'Moisture-Wicking & Rapid Evaporation',
      cushioningTech: 'No-Stink Zinc Silverescent™ Anti-Odor Tech',
      weightGrams: 160,
      formalityScore: 8,
      durabilityRating: 'Very High (Retains Collar Shape)',
      materials: ['Silverescent® Technology', 'Recycled Polyester', 'X-STATIC® Silver']
    },
    attributeScores: {
      weatherProofScore: 85,
      ergonomic15kStepsScore: 96,
      dressCodeFormalityScore: 92,
      priceValueScore: 95,
      compositeTwinFitScore: 96.1
    },
    reviewSanitization: {
      rawStarRating: 4.8,
      sanitizedStarRating: 4.7,
      totalRawReviews: 4120,
      botReviewsPurged: 210,
      sponsoredBiasPenalizedPct: 3.8,
      trustScore: 97,
      verifiedPurchaseConsensus: 'The ultimate business travel polo. The silver tech prevents odor even after a full day of flights and client presentations. The collar stays crisp without curling.',
      criticalFlags: ['Matches M Athletic fit perfectly.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Directly matches your M Athletic shirt profile. Silverescent anti-odor technology prevents sweat odor during high-mileage transit, while the tailored structured collar fits smart-casual boardroom meetings.',
      tradeOffAnalysis: 'Athletic tailored drape fits best on athletic builds without excess torso billowing.',
      twinAlignmentHighlights: [
        'Matches your M Athletic sizing profile',
        'Silverescent tech stops bacteria buildup on hot travel days',
        'Preferred brand affinity: Lululemon'
      ],
      riskAssessment: 'Very low risk. High wear durability.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-western-rise-limitless',
    name: 'Limitless Merino Wool Button-Down',
    brand: 'Western Rise',
    category: 'Shirts / 100% Merino Travel Shirt',
    price: 138.00,
    originalPrice: 138.00,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://westernrise.com/products/limitless-merino-shirt',
    sourceType: 'Shopify Merchant API',
    sourceLatencyMs: 155,
    specs: {
      waterproofing: 'Natural Moisture Buffering & DWR Treated',
      cushioningTech: 'Australian Merino Wool + Polyester Core',
      weightGrams: 210,
      formalityScore: 9,
      durabilityRating: 'High (Core-Spun Merino Durability)',
      materials: ['53% Australian Merino Wool', '47% Polyester', 'Mother of Pearl Buttons']
    },
    attributeScores: {
      weatherProofScore: 89,
      ergonomic15kStepsScore: 93,
      dressCodeFormalityScore: 96,
      priceValueScore: 90,
      compositeTwinFitScore: 93.4
    },
    reviewSanitization: {
      rawStarRating: 4.7,
      sanitizedStarRating: 4.5,
      totalRawReviews: 1840,
      botReviewsPurged: 95,
      sponsoredBiasPenalizedPct: 4.2,
      trustScore: 95,
      verifiedPurchaseConsensus: 'Wear it 3 days in a row without a wash and it smells completely fresh. Looks like a custom Italian oxford dress shirt.',
      criticalFlags: ['Machine wash cold, hang dry only.']
    },
    transparentReasoning: {
      whyThisFitsYou: 'Peak versatility for multi-day itineraries. Merino wool naturally regulates body temperature between chilled air cabins and humid outdoor streets.',
      tradeOffAnalysis: 'Requires hang drying rather than tumble dry.',
      twinAlignmentHighlights: [
        'Highest formality index for executive client presentations',
        'Natural temperature regulation cures your sweat sensitivity'
      ],
      riskAssessment: 'Low risk. Premium core-spun yarn prevents shrinkage.'
    },
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-fasttrend-cheap-shirt',
    name: 'NanoBreeze Quick-Dry Tactical Shirt (Sponsored)',
    brand: 'FastTrend Global',
    category: 'Shirts / Cheap Knockoff',
    price: 14.99,
    originalPrice: 59.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    merchantUrl: 'https://bargain-tech-deals.com/nanobreeze',
    sourceType: 'Headless Web Scraper (Playwright)',
    sourceLatencyMs: 460,
    specs: {
      waterproofing: 'Non-breathable synthetic polyester',
      cushioningTech: 'Rough Scratchy Seams',
      weightGrams: 240,
      formalityScore: 3,
      durabilityRating: 'Low (pills after first machine wash)',
      materials: ['100% Coarse Polyester', 'Cheap Plastic Buttons']
    },
    attributeScores: {
      weatherProofScore: 30,
      ergonomic15kStepsScore: 22,
      dressCodeFormalityScore: 32,
      priceValueScore: 42,
      compositeTwinFitScore: 30.4
    },
    reviewSanitization: {
      rawStarRating: 4.9,
      sanitizedStarRating: 1.7,
      totalRawReviews: 8300,
      botReviewsPurged: 7420,
      sponsoredBiasPenalizedPct: 89.0,
      trustScore: 13,
      verifiedPurchaseConsensus: 'FLAGGED JUNK: 89% bot reviews. Traps armpit odor instantly and feels like wearing a plastic grocery bag.',
      criticalFlags: [
        'DISQUALIFIED: Bot review cluster detected.',
        'DISQUALIFIED: Traps severe body heat and odor.',
        'DISQUALIFIED: Collars curl immediately.'
      ]
    },
    transparentReasoning: {
      whyThisFitsYou: 'DISQUALIFIED BY DIGITAL TWIN. Appears at top of sponsored search engines, but completely purged.',
      tradeOffAnalysis: 'Cheap sticker price hides toxic scratchy fabric.',
      twinAlignmentHighlights: ['Violates personal quality floor', 'Blacklisted merchant'],
      riskAssessment: 'Severe risk.'
    },
    stockStatus: 'In Stock'
  }
];

// Curated image dictionary to ensure dynamic items get relevant photos, NEVER watches by mistake!
const DYNAMIC_CATEGORY_IMAGES: Record<string, { hero: string; luxe: string; cheap: string }> = {
  clothes: {
    hero: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80',
    luxe: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    cheap: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80',
  },
  umbrella: {
    hero: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    luxe: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    cheap: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
  },
  bottle: {
    hero: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
    luxe: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?auto=format&fit=crop&w=800&q=80',
    cheap: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
  },
  hat: {
    hero: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    luxe: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=800&q=80',
    cheap: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
  },
  suit: {
    hero: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    luxe: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    cheap: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80',
  },
  laptop: {
    hero: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    luxe: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    cheap: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
  },
  default: {
    hero: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80',
    luxe: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    cheap: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80',
  }
};

// Universal Dynamic Synthesis Engine: Generates realistic, tailored candidates for ANY custom prompt item
export function generateDynamicCandidates(subject: string, profile: UserTwinProfile): ProductCandidate[] {
  const cleanSubject = subject.trim();
  const titleSubject = cleanSubject.charAt(0).toUpperCase() + cleanSubject.slice(1);
  const lower = cleanSubject.toLowerCase();

  // Pick keyword-relevant images
  let images = DYNAMIC_CATEGORY_IMAGES.default;
  for (const key of Object.keys(DYNAMIC_CATEGORY_IMAGES)) {
    if (lower.includes(key)) {
      images = DYNAMIC_CATEGORY_IMAGES[key];
      break;
    }
  }

  return [
    {
      id: `prod-dynamic-${cleanSubject.toLowerCase().replace(/\s+/g, '-')}-pro`,
      name: `Apex Pro Travel ${titleSubject}`,
      brand: 'Peak Performance Co',
      category: `${titleSubject} / Premium Commuter Gear`,
      price: 135.00,
      originalPrice: 150.00,
      currency: 'USD',
      imageUrl: images.hero,
      merchantUrl: `https://store.example.com/${cleanSubject.toLowerCase()}`,
      sourceType: 'Shopify Merchant API',
      sourceLatencyMs: 140,
      specs: {
        waterproofing: 'Weather-Resistant Hydrophobic Coating',
        cushioningTech: 'Ergonomic Precision Construction',
        weightGrams: 280,
        formalityScore: 8,
        durabilityRating: 'Very High (Aerospace Grade Materials)',
        materials: ['Technical Travel Composite', 'Recycled Poly']
      },
      attributeScores: {
        weatherProofScore: 92,
        ergonomic15kStepsScore: 96,
        dressCodeFormalityScore: 90,
        priceValueScore: 92,
        compositeTwinFitScore: 95.8
      },
      reviewSanitization: {
        rawStarRating: 4.8,
        sanitizedStarRating: 4.7,
        totalRawReviews: 3820,
        botReviewsPurged: 190,
        sponsoredBiasPenalizedPct: 4.0,
        trustScore: 96,
        verifiedPurchaseConsensus: `Top rated ${cleanSubject} for active frequent travelers. Verified buyers cite exceptional reliability and refined aesthetic.`,
        criticalFlags: [`Tailored specifically to match ${profile.name}'s travel requirements.`]
      },
      transparentReasoning: {
        whyThisFitsYou: `Engineered specifically for your ${cleanSubject} request during your upcoming trip. Delivers the optimal balance between durability, smart casual presentation, and compact packability.`,
        tradeOffAnalysis: 'Premium technical construction priced slightly higher than generic commodities, but guaranteed for life.',
        twinAlignmentHighlights: [
          `Tailored for your ${profile.activeItinerary.destination} itinerary`,
          `Within your $${profile.budgetElasticity.preferredTarget} target budget`,
          'Verified by digital twin constraint graph'
        ],
        riskAssessment: 'Low risk. Full 30-day trial with merchant tokenized checkout.'
      },
      stockStatus: 'In Stock'
    },
    {
      id: `prod-dynamic-${cleanSubject.toLowerCase().replace(/\s+/g, '-')}-luxe`,
      name: `Executive Heritage ${titleSubject}`,
      brand: 'Monocle & Co',
      category: `${titleSubject} / Luxury Formal`,
      price: 185.00,
      originalPrice: 210.00,
      currency: 'USD',
      imageUrl: images.luxe,
      merchantUrl: `https://luxury-goods.com/${cleanSubject.toLowerCase()}`,
      sourceType: 'Affiliate Partner Feed (CJ/Rakuten)',
      sourceLatencyMs: 290,
      specs: {
        waterproofing: 'Precision Sealed Water Resistance',
        cushioningTech: 'Artisanal Hand-Finished Detailing',
        weightGrams: 320,
        formalityScore: 9,
        durabilityRating: 'Handcrafted Lifetime Craftsmanship',
        materials: ['Full-Grain Leather & Technical Canvas', 'Brushed Titanium Hardware']
      },
      attributeScores: {
        weatherProofScore: 88,
        ergonomic15kStepsScore: 89,
        dressCodeFormalityScore: 96,
        priceValueScore: 85,
        compositeTwinFitScore: 91.2
      },
      reviewSanitization: {
        rawStarRating: 4.7,
        sanitizedStarRating: 4.5,
        totalRawReviews: 1200,
        botReviewsPurged: 80,
        sponsoredBiasPenalizedPct: 5.0,
        trustScore: 93,
        verifiedPurchaseConsensus: 'Exquisite aesthetic finish for executive and boardroom settings.',
        criticalFlags: ['Premium pricing matches higher tier budget elasticity.']
      },
      transparentReasoning: {
        whyThisFitsYou: `Highest formality rating for ${cleanSubject}. Delivers pure executive polish for client dinners and corporate meetings.`,
        tradeOffAnalysis: 'Costs slightly more than the Champion, but offers luxury materials.',
        twinAlignmentHighlights: [
          'Superior aesthetic for formal client presentations',
          'Handcrafted build quality'
        ],
        riskAssessment: 'Low risk. 2-year warranty.'
      },
      stockStatus: 'Only 2 Left'
    },
    {
      id: `prod-dynamic-${cleanSubject.toLowerCase().replace(/\s+/g, '-')}-cheap`,
      name: `UltraShield Rapid ${titleSubject} Pro (Sponsored)`,
      brand: 'FastTrend Global',
      category: `${titleSubject} / Cheap Knockoff`,
      price: 19.99,
      originalPrice: 79.99,
      currency: 'USD',
      imageUrl: images.cheap,
      merchantUrl: `https://bargain-direct.com/${cleanSubject.toLowerCase()}`,
      sourceType: 'Headless Web Scraper (Playwright)',
      sourceLatencyMs: 480,
      specs: {
        waterproofing: 'Zero Ingress Protection',
        cushioningTech: 'Fragile Plastic Construction',
        weightGrams: 390,
        formalityScore: 3,
        durabilityRating: 'Low (snaps easily under stress)',
        materials: ['Hollow Plastic', 'Cheap Adhesives']
      },
      attributeScores: {
        weatherProofScore: 26,
        ergonomic15kStepsScore: 22,
        dressCodeFormalityScore: 32,
        priceValueScore: 40,
        compositeTwinFitScore: 29.5
      },
      reviewSanitization: {
        rawStarRating: 4.9,
        sanitizedStarRating: 1.6,
        totalRawReviews: 9200,
        botReviewsPurged: 8150,
        sponsoredBiasPenalizedPct: 88.0,
        trustScore: 12,
        verifiedPurchaseConsensus: `FLAGGED JUNK: 88% fake reviews detected. Fails within days of normal travel use.`,
        criticalFlags: [
          'DISQUALIFIED: Bot review farm detected.',
          'DISQUALIFIED: Fails basic durability testing.',
          'DISQUALIFIED: Merchant blacklisted.'
        ]
      },
      transparentReasoning: {
        whyThisFitsYou: `DISQUALIFIED BY DIGITAL TWIN. Appears at the top of generic search engine ads for "${cleanSubject}", but eliminated by AI Twinz verification.`,
        tradeOffAnalysis: 'Cheap price hides terrible build quality.',
        twinAlignmentHighlights: ['Violates personal quality floor', 'Blacklisted merchant entity'],
        riskAssessment: 'Severe risk. Disqualified from recommendations.'
      },
      stockStatus: 'In Stock'
    }
  ];
}

export type CatalogCategory = 
  | 'clothes' 
  | 'pants' 
  | 'bags' 
  | 'shirts' 
  | 'watch' 
  | 'sunglasses' 
  | 'wallets' 
  | 'outerwear' 
  | 'audio' 
  | 'footwear' 
  | string;

export function detectCategoryIntent(query: string = '', destination: string = ''): CatalogCategory {
  const q = query.toLowerCase();

  // 1. Clean stop-words, conversation fillers, and determiners first
  const cleaned = q
    .replace(/\b(hi|hello|hey|please|can you|i want to get|i want get|i want to buy|i want buy|i want to see|i want see|i want|want|find me|get me|get some|looking for|look for|recommend me|recommend|show me|need to find|need some|need|buy|purchase|give me|search for)\b/gi, ' ')
    .replace(/\b(some|a|an|the|any|few|new|pair of|set of|type of|piece of|good|best|nice|cool|stylish|premium)\b/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // 2. DIRECT KEYWORD MATCHING ON USER QUERY:

  // Clothes / Apparel / Outfit / Wardrobe
  if (
    q.includes('clothe') ||
    q.includes('clothing') ||
    q.includes('apparel') ||
    q.includes('outfit') ||
    q.includes('wardrobe') ||
    cleaned === 'clothes'
  ) {
    return 'clothes';
  }

  // Pants / Trousers / Chinos / Jeans
  if (
    q.includes('pant') ||
    q.includes('trouser') ||
    q.includes('chino') ||
    q.includes('slack') ||
    q.includes('jean') ||
    q.includes('bottom')
  ) {
    return 'pants';
  }

  // Watches / Smartwatches / Timepieces
  if (
    q.includes('watch') ||
    q.includes('smartwatch') ||
    q.includes('timepiece') ||
    q.includes('chronograph')
  ) {
    return 'watch';
  }

  // Sunglasses / Shades / Eyewear
  if (
    q.includes('sunglass') ||
    q.includes('shades') ||
    q.includes('eyewear') ||
    q.includes('glasses')
  ) {
    return 'sunglasses';
  }

  // Wallets / Cardholders
  if (
    q.includes('wallet') ||
    q.includes('cardholder') ||
    q.includes('bifold')
  ) {
    return 'wallets';
  }

  // Bags / Backpacks / Luggage
  if (
    q.includes('bag') ||
    q.includes('backpack') ||
    q.includes('luggage') ||
    q.includes('duffle') ||
    q.includes('carry-on') ||
    q.includes('pack')
  ) {
    return 'bags';
  }

  // Shirts / Polos / Tees
  if (
    q.includes('shirt') ||
    q.includes('polo') ||
    q.includes('tee') ||
    q.includes('tshirt') ||
    q.includes('top') ||
    q.includes('button-down') ||
    q.includes('merino')
  ) {
    return 'shirts';
  }

  // Footwear / Walking Shoes / Sneakers
  if (
    q.includes('shoe') ||
    q.includes('sneaker') ||
    q.includes('boot') ||
    q.includes('footwear') ||
    q.includes('runner') ||
    q.includes('step') ||
    q.includes('walk')
  ) {
    return 'footwear';
  }

  // Outerwear / Jackets / Shells / Coats
  if (
    q.includes('shell') ||
    q.includes('jacket') ||
    q.includes('coat') ||
    q.includes('outerwear') ||
    q.includes('raincoat') ||
    q.includes('mac') ||
    q.includes('parka')
  ) {
    return 'outerwear';
  }

  // Audio / Headphones / Earphones
  if (
    q.includes('headphone') ||
    q.includes('audio') ||
    q.includes('anc') ||
    q.includes('noise-canceling') ||
    q.includes('noise cancelling') ||
    q.includes('earbud') ||
    q.includes('earphone') ||
    q.includes('sound')
  ) {
    return 'audio';
  }

  // 3. CHECK EXTRACTED NOUN: If the user typed a specific item (e.g. "umbrella", "bottle", "suit")
  if (
    cleaned.length > 2 &&
    !cleaned.includes('trip') &&
    !cleaned.includes('tokyo') &&
    !cleaned.includes('flight') &&
    !cleaned.includes('london')
  ) {
    return cleaned;
  }

  // 4. ONLY IF QUERY IS GENERIC, FALL BACK TO DESTINATION / PRESET CONTEXT
  const d = destination.toLowerCase();
  if (d.includes('flight') || d.includes('singapore') || d.includes('cabin')) {
    return 'audio';
  }
  if (d.includes('london') || d.includes('drizzle')) {
    return 'outerwear';
  }

  // Default to Tokyo footwear
  return 'footwear';
}

export function getCandidatesForIntent(
  category: CatalogCategory,
  userQuery: string = '',
  profile: UserTwinProfile = INITIAL_TWIN_PROFILE
): ProductCandidate[] {
  switch (category) {
    case 'clothes':
      return CLOTHES_CANDIDATES;
    case 'pants':
      return PANTS_CANDIDATES;
    case 'watch':
      return WATCH_CANDIDATES;
    case 'sunglasses':
      return SUNGLASSES_CANDIDATES;
    case 'wallets':
      return WALLETS_CANDIDATES;
    case 'bags':
      return BAGS_CANDIDATES;
    case 'shirts':
      return SHIRTS_CANDIDATES;
    case 'outerwear':
      return LONDON_OUTERWEAR_CANDIDATES;
    case 'audio':
      return FLIGHT_AUDIO_CANDIDATES;
    case 'footwear':
      return TOKYO_FOOTWEAR_CANDIDATES;
    default:
      // Dynamically generate tailored candidates for custom category
      return generateDynamicCandidates(category, profile);
  }
}

// Backwards compatibility
export const RAW_CATALOG_CANDIDATES = TOKYO_FOOTWEAR_CANDIDATES;

export const INITIAL_TWIN_PROFILE: UserTwinProfile = {
  id: 'twin-user-alex-994',
  name: 'Alex Mercer',
  handle: '@alexmercer.twin',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  budgetElasticity: {
    preferredTarget: 200,
    maxFlexCeiling: 280,
    willingnessToPayForQuality: 'High',
  },
  sizing: {
    shoeSize: '10.5 US',
    shoeWidth: 'Wide (EE)',
    archSupport: 'Neutral',
    shirtSize: 'M Athletic',
    pantSize: '32 x 32',
    tolerancesNotes: 'Right foot is 3mm wider than left. Needs roomy toe box to avoid bunion pressure during high-mileage days.',
  },
  activeItinerary: {
    id: 'itin-tokyo-nov2026',
    destination: 'Tokyo (Shibuya, Ginza, Shinjuku)',
    country: 'Japan',
    dates: 'Nov 4 – Nov 12, 2026',
    weatherForecast: '18°C (64°F) / Intermittent Rain Showers (78% humidity)',
    temperatureC: 18,
    expectedDailySteps: 15000,
    dressCode: 'Smart Casual',
    activityNotes: 'Tech meetings, client coffee chats, subway walking, extensive outdoor district exploring.',
  },
  returnHistory: [
    {
      id: 'ret-01',
      productName: 'Classic Leather Brogues',
      brand: 'StandardDressCo',
      date: 'Feb 2025',
      category: 'Footwear',
      returnReason: 'Extreme heel blister after 3,000 steps; rigid heel counter with zero arch flex.',
      severity: 'critical',
      learnedNegativeSignal: 'Penalize rigid heel counters without padded achilles collars.',
    },
    {
      id: 'ret-02',
      productName: 'Heavy Wool Trench Coat',
      brand: 'NordicWarmth',
      date: 'Nov 2024',
      category: 'Outerwear',
      returnReason: 'Absorbed rain like a sponge, weighed 5kg when wet, too hot for active walking.',
      severity: 'minor',
      learnedNegativeSignal: 'Enforce genuine waterproof breathable membrane over untreated wool/canvas.',
    }
  ],
  brandAffinities: {
    preferred: ['On Running', 'HOKA', 'Lululemon', "Arc'teryx", 'Cole Haan', 'Sony', 'Bose', 'Patagonia', 'Western Rise', 'Aer', 'Outlier', 'Apple', 'Ray-Ban', 'Bellroy'],
    blacklisted: ['FastTrend Global', 'SoundBlast Global', 'Shein', 'WishDirect', 'UltraCheapMart'],
  },
  lifestyle: {
    dailyStepAverage: 11200,
    commuteType: 'Urban Transit + Walking',
    weatherSensitivity: 'Prefers cool-running breathable fabrics; sweats easily in non-breathable vinyl.'
  }
};
