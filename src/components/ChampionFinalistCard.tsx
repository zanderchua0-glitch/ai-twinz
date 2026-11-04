import React, { useState } from 'react';
import { useTwin } from '../context/TwinContext';
import { 
  Trophy, 
  ShieldCheck, 
  CloudRain, 
  Footprints, 
  DollarSign, 
  Shirt, 
  ExternalLink, 
  Zap, 
  CheckCircle, 
  ChevronRight, 
  Layers, 
  ShieldAlert, 
  ArrowRight,
  Sparkles,
  Sliders,
  RotateCcw,
  Scale,
  X
} from 'lucide-react';
import { ProductCandidate } from '../types';
import { VirtualTryOn } from './VirtualTryOn';

export const ChampionFinalistCard: React.FC<{ onOpenCheckout: (p: ProductCandidate) => void }> = ({ onOpenCheckout }) => {
  const { 
    result, 
    selectedFinalist, 
    setSelectedFinalist,
    scoreWeights,
    updateScoreWeights,
    resetScoreWeights
  } = useTwin();

  const [showDisqualified, setShowDisqualified] = useState(false);
  const [showTryOn, setShowTryOn] = useState(false);
  const [showSliders, setShowSliders] = useState(true);
  const [showMatrix, setShowMatrix] = useState(false);

  if (!result) return null;

  const current = selectedFinalist || result.champion;
  const isChampion = current.id === result.champion.id;
  const disqualifiedProduct = result.allCandidates.find(
    c => c.brand.includes('Global') || c.reviewSanitization.trustScore < 30
  );

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-slate-800 p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold">
                Finalist Decision Synthesis
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-mono">
                {result.finalists.length + 1} Selected from {result.detectedCategory ? result.detectedCategory.toUpperCase() : 'CATALOG'}
              </span>
            </div>
            <h2 className="text-lg font-bold text-white">
              {isChampion ? `#1 Champion: ${current.name}` : `Finalist Alternate: ${current.name}`}
            </h2>
          </div>
        </div>

        {/* Alternate Finalist Quick Switcher */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => { setSelectedFinalist(result.champion); setShowTryOn(false); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              current.id === result.champion.id
                ? 'bg-cyan-500 text-white font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            #1 Champion ({result.champion.brand})
          </button>
          {result.finalists.map((f, idx) => (
            <button
              key={f.id}
              onClick={() => { setSelectedFinalist(f); setShowTryOn(false); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                current.id === f.id
                  ? 'bg-cyan-500 text-white font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              #{idx + 2} {f.brand}
            </button>
          ))}

          {/* Matrix & Sliders View Toggles */}
          <button
            onClick={() => setShowMatrix(!showMatrix)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border flex items-center gap-1.5 ${
              showMatrix 
                ? 'bg-indigo-600 border-indigo-400 text-white' 
                : 'bg-slate-800 border-slate-700 text-indigo-300 hover:bg-slate-700'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>{showMatrix ? 'Hide Matrix' : 'Side-by-Side Matrix'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Pareto Trade-Off Sliders Panel */}
      <div className="bg-slate-900/95 border border-cyan-500/30 rounded-2xl p-5 shadow-xl shadow-cyan-950/30">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Interactive Pareto Trade-Off Weighting
            </h3>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-mono">
              Live Re-ranking
            </span>
          </div>
          <button
            onClick={resetScoreWeights}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors font-mono"
            title="Reset to Twin defaults"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Weights</span>
          </button>
        </div>

        <p className="text-xs text-slate-400 mb-4 leading-relaxed">
          Drag sliders to dynamically shift your decision priorities. Watch the #1 Champion and Finalists re-rank on the fly as Weatherproofing, Ergonomics, Formality, or Budget are prioritized.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Weatherproofing Slider */}
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <CloudRain className="w-3.5 h-3.5" /> Weatherproofing
              </span>
              <span className="font-mono text-cyan-400 font-bold">
                {Math.round(scoreWeights.weatherMatchWeight * 100)}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="60"
              step="5"
              value={Math.round(scoreWeights.weatherMatchWeight * 100)}
              onChange={(e) => updateScoreWeights({ weatherMatchWeight: Number(e.target.value) / 100 })}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
              <span>Flexible</span>
              <span>100% Sealed</span>
            </div>
          </div>

          {/* Ergonomics Slider */}
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <Footprints className="w-3.5 h-3.5" /> Ergonomics / Comfort
              </span>
              <span className="font-mono text-emerald-400 font-bold">
                {Math.round(scoreWeights.ergonomicStepWeight * 100)}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="60"
              step="5"
              value={Math.round(scoreWeights.ergonomicStepWeight * 100)}
              onChange={(e) => updateScoreWeights({ ergonomicStepWeight: Number(e.target.value) / 100 })}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
              <span>Standard</span>
              <span>Ultra-Plush</span>
            </div>
          </div>

          {/* Formality Slider */}
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
              <span className="flex items-center gap-1.5 text-indigo-300">
                <Shirt className="w-3.5 h-3.5" /> Formality / Aesthetics
              </span>
              <span className="font-mono text-indigo-400 font-bold">
                {Math.round(scoreWeights.dressCodeWeight * 100)}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="60"
              step="5"
              value={Math.round(scoreWeights.dressCodeWeight * 100)}
              onChange={(e) => updateScoreWeights({ dressCodeWeight: Number(e.target.value) / 100 })}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
              <span>Athletic</span>
              <span>Executive</span>
            </div>
          </div>

          {/* Budget Elasticity Slider */}
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
              <span className="flex items-center gap-1.5 text-amber-300">
                <DollarSign className="w-3.5 h-3.5" /> Budget &amp; Value
              </span>
              <span className="font-mono text-amber-400 font-bold">
                {Math.round(scoreWeights.budgetWeight * 100)}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="60"
              step="5"
              value={Math.round(scoreWeights.budgetWeight * 100)}
              onChange={(e) => updateScoreWeights({ budgetWeight: Number(e.target.value) / 100 })}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
              <span>Spend for Luxe</span>
              <span>Strict Ceiling</span>
            </div>
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Matrix */}
      {showMatrix && (
        <div className="bg-slate-900 border border-indigo-500/40 rounded-3xl p-6 overflow-hidden shadow-2xl shadow-indigo-950/40 animate-fadeIn">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-indigo-400" />
              <h3 className="text-base font-bold text-white">Side-by-Side Pareto Comparison Matrix</h3>
            </div>
            <button
              onClick={() => setShowMatrix(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              Close Matrix ✕
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase text-[11px]">
                  <th className="py-3 px-3">Candidate</th>
                  <th className="py-3 px-3 text-center">Fit Score</th>
                  <th className="py-3 px-3">Price</th>
                  <th className="py-3 px-3">Weatherproofing</th>
                  <th className="py-3 px-3">Ergonomics</th>
                  <th className="py-3 px-3">Formality</th>
                  <th className="py-3 px-3">Trust Purity</th>
                  <th className="py-3 px-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 font-mono text-[11px]">
                {/* Champion Row */}
                <tr className="bg-cyan-950/30 hover:bg-cyan-950/50 transition-colors">
                  <td className="py-3.5 px-3 font-sans">
                    <div className="font-bold text-white flex items-center gap-2">
                      <span className="p-1 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono">#1 CHAMPION</span>
                      <span>{result.champion.brand} {result.champion.name}</span>
                    </div>
                    <div className="text-[10px] text-slate-400">{result.champion.category}</div>
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <span className="px-2 py-1 rounded-full bg-cyan-950 border border-cyan-400 text-cyan-300 font-bold">
                      {result.champion.attributeScores.compositeTwinFitScore}%
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-emerald-400 font-bold">${result.champion.price.toFixed(2)}</td>
                  <td className="py-3.5 px-3 text-cyan-300">{result.champion.attributeScores.weatherProofScore}%</td>
                  <td className="py-3.5 px-3 text-emerald-300">{result.champion.attributeScores.ergonomic15kStepsScore}%</td>
                  <td className="py-3.5 px-3 text-indigo-300">{result.champion.attributeScores.dressCodeFormalityScore}% ({result.champion.specs.formalityScore}/10)</td>
                  <td className="py-3.5 px-3 text-emerald-400 font-bold">{result.champion.reviewSanitization.trustScore}%</td>
                  <td className="py-3.5 px-3 text-center">
                    <button
                      onClick={() => { setSelectedFinalist(result.champion); onOpenCheckout(result.champion); }}
                      className="px-3 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white font-sans font-bold text-xs"
                    >
                      1-Tap Buy
                    </button>
                  </td>
                </tr>

                {/* Finalists Rows */}
                {result.finalists.map((f, idx) => (
                  <tr key={f.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-3 font-sans">
                      <div className="font-bold text-slate-200 flex items-center gap-2">
                        <span className="p-1 rounded bg-slate-800 text-slate-300 text-[10px] font-mono">#{idx + 2} FINALIST</span>
                        <span>{f.brand} {f.name}</span>
                      </div>
                      <div className="text-[10px] text-slate-400">{f.category}</div>
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200 font-bold">
                        {f.attributeScores.compositeTwinFitScore}%
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-slate-300 font-bold">${f.price.toFixed(2)}</td>
                    <td className="py-3.5 px-3 text-cyan-300">{f.attributeScores.weatherProofScore}%</td>
                    <td className="py-3.5 px-3 text-emerald-300">{f.attributeScores.ergonomic15kStepsScore}%</td>
                    <td className="py-3.5 px-3 text-indigo-300">{f.attributeScores.dressCodeFormalityScore}% ({f.specs.formalityScore}/10)</td>
                    <td className="py-3.5 px-3 text-emerald-400">{f.reviewSanitization.trustScore}%</td>
                    <td className="py-3.5 px-3 text-center">
                      <button
                        onClick={() => setSelectedFinalist(f)}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-sans font-medium text-xs border border-slate-700"
                      >
                        Select
                      </button>
                    </td>
                  </tr>
                ))}

                {/* Disqualified Row */}
                {disqualifiedProduct && (
                  <tr className="bg-rose-950/20 text-slate-500">
                    <td className="py-3.5 px-3 font-sans">
                      <div className="font-semibold text-rose-400 flex items-center gap-2">
                        <span className="p-1 rounded bg-rose-950 text-rose-300 text-[10px] font-mono">DISQUALIFIED</span>
                        <span>{disqualifiedProduct.brand} {disqualifiedProduct.name}</span>
                      </div>
                      <div className="text-[10px] text-rose-400/70">Fake review bot cluster purged</div>
                    </td>
                    <td className="py-3.5 px-3 text-center text-rose-400 font-bold">
                      {disqualifiedProduct.attributeScores.compositeTwinFitScore}%
                    </td>
                    <td className="py-3.5 px-3 text-rose-300">${disqualifiedProduct.price.toFixed(2)}</td>
                    <td className="py-3.5 px-3 text-rose-300">{disqualifiedProduct.attributeScores.weatherProofScore}%</td>
                    <td className="py-3.5 px-3 text-rose-300">{disqualifiedProduct.attributeScores.ergonomic15kStepsScore}%</td>
                    <td className="py-3.5 px-3 text-rose-300">{disqualifiedProduct.attributeScores.dressCodeFormalityScore}%</td>
                    <td className="py-3.5 px-3 text-rose-400 font-bold">{disqualifiedProduct.reviewSanitization.trustScore}% (BOTS)</td>
                    <td className="py-3.5 px-3 text-center text-rose-500 font-sans text-xs">Purged</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Main Champion Card */}
      <div className="bg-slate-900/90 border-2 border-cyan-500/40 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-950/50 backdrop-blur-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Left Column: Image & Direct Merchant Specs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group">
              <img
                src={current.imageUrl}
                alt={current.name}
                className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                <span className="px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wide bg-cyan-950/90 border border-cyan-400 text-cyan-300 shadow-lg">
                  {current.attributeScores.compositeTwinFitScore}% Twin Fit Match
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-950/90 border border-emerald-500/50 text-emerald-300">
                  {current.stockStatus}
                </span>
              </div>

              <div className="absolute bottom-3 right-3">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-slate-900/90 border border-slate-700 text-slate-300">
                  Source: {current.sourceType.split(' ')[0]}
                </span>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-slate-400 font-mono text-[10px] uppercase">Waterproofing</div>
                <div className="font-semibold text-slate-200 mt-0.5 line-clamp-1">{current.specs.waterproofing}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-slate-400 font-mono text-[10px] uppercase">Ergonomic Build</div>
                <div className="font-semibold text-slate-200 mt-0.5 line-clamp-1">{current.specs.cushioningTech}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-slate-400 font-mono text-[10px] uppercase">Product Weight</div>
                <div className="font-semibold text-slate-200 mt-0.5">{current.specs.weightGrams}g</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-slate-400 font-mono text-[10px] uppercase">Formality Rating</div>
                <div className="font-semibold text-slate-200 mt-0.5">{current.specs.formalityScore}/10 Index</div>
              </div>
            </div>
          </div>

          {/* Right Column: Reasoning, Scores, Sanitized Reviews, 1-Tap Checkout */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Title & Price */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-1">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  {current.brand} • {current.category}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-white">${current.price.toFixed(2)}</span>
                  {current.originalPrice > current.price && (
                    <span className="text-sm text-slate-500 line-through">${current.originalPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {current.name}
              </h3>
            </div>

            {/* Transparent Reasoning: "Why this fits you" */}
            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-2.5">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Transparent Reasoning: Why This Fits You</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {current.transparentReasoning.whyThisFitsYou}
              </p>

              {/* Twin Alignment Badges */}
              <div className="space-y-1.5 pt-1">
                {current.transparentReasoning.twinAlignmentHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Multi-Attribute Scoring Bars */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                <span>Multi-Attribute Constraint Satisfaction:</span>
                <span className="text-cyan-400 font-semibold">{current.attributeScores.compositeTwinFitScore} / 100</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {/* Weather */}
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                    <span className="flex items-center gap-1"><CloudRain className="w-3 h-3 text-cyan-400" /> Weather</span>
                    <span className="font-mono text-cyan-400 font-bold">{current.attributeScores.weatherProofScore}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${current.attributeScores.weatherProofScore}%` }} />
                  </div>
                </div>

                {/* Ergonomics */}
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                    <span className="flex items-center gap-1"><Footprints className="w-3 h-3 text-emerald-400" /> Ergonomics</span>
                    <span className="font-mono text-emerald-400 font-bold">{current.attributeScores.ergonomic15kStepsScore}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${current.attributeScores.ergonomic15kStepsScore}%` }} />
                  </div>
                </div>

                {/* Formality */}
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                    <span className="flex items-center gap-1"><Shirt className="w-3 h-3 text-indigo-400" /> Formality</span>
                    <span className="font-mono text-indigo-400 font-bold">{current.attributeScores.dressCodeFormalityScore}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-400 h-full rounded-full" style={{ width: `${current.attributeScores.dressCodeFormalityScore}%` }} />
                  </div>
                </div>

                {/* Price Value */}
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                    <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-amber-400" /> Budget</span>
                    <span className="font-mono text-amber-400 font-bold">{current.attributeScores.priceValueScore}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-400 h-full rounded-full" style={{ width: `${current.attributeScores.priceValueScore}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Review Sanitization Pill */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-200">
                    Sanitized Consensus: {current.reviewSanitization.sanitizedStarRating} ★
                    <span className="text-slate-500 font-normal ml-1">
                      (Purged {current.reviewSanitization.botReviewsPurged.toLocaleString()} fake bot reviews)
                    </span>
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    {current.reviewSanitization.verifiedPurchaseConsensus}
                  </div>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Trust Purity</div>
                <div className="text-emerald-400 font-mono font-bold">{current.reviewSanitization.trustScore}%</div>
              </div>
            </div>

            {/* Action Bar: 1-Tap Checkout + Virtual Try-On */}
            <div className="pt-2 flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenCheckout(current)}
                  className="w-full sm:flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
                  <span>One-Tap Tokenized Checkout (${current.price.toFixed(2)})</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <a
                  href={current.merchantUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-4 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center justify-center gap-2 transition-colors border border-slate-700"
                >
                  <span>Direct Merchant Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Virtual Try-On Toggle */}
              <button
                onClick={() => setShowTryOn(!showTryOn)}
                className={`w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-sm transition-all border ${
                  showTryOn
                    ? 'bg-cyan-500/15 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300'
                }`}
              >
                {showTryOn ? (
                  <><X className="w-4 h-4" /><span>Close Multimodal Virtual Try-On</span></>
                ) : (
                  <><Sparkles className="w-4 h-4 text-cyan-400" /><span>Multimodal Virtual Try-On (Photo Upload + Heatmap Styler)</span></>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Virtual Try-On Panel */}
      {showTryOn && <VirtualTryOn product={current} />}

      {/* Disqualified Junk Section (Demonstrates Anti-Junk & Anti-Bot Philosophy) */}
      {disqualifiedProduct && (
        <div className="rounded-2xl border border-rose-900/60 bg-rose-950/20 p-4">
          <div 
            onClick={() => setShowDisqualified(!showDisqualified)}
            className="flex items-center justify-between cursor-pointer select-none"
          >
            <div className="flex items-center gap-2.5 text-xs text-rose-300">
              <ShieldAlert className="w-4 h-4 text-rose-400 flex-shrink-0" />
              <span className="font-semibold">
                AI Twinz Anti-Junk Protection: Filtered 1 Sponsored Ad &amp; Bot Cluster
              </span>
              <span className="hidden sm:inline text-rose-400/80 font-mono text-[11px]">
                ({disqualifiedProduct.name})
              </span>
            </div>
            <button className="text-xs text-rose-400 font-mono hover:underline">
              {showDisqualified ? 'Hide Details ▲' : 'Inspect Disqualified Junk ▼'}
            </button>
          </div>

          {showDisqualified && (
            <div className="mt-3 pt-3 border-t border-rose-900/40 text-xs space-y-2 text-slate-300">
              <p className="text-rose-200">
                Traditional marketplaces show <span className="font-bold">{disqualifiedProduct.name}</span> (${disqualifiedProduct.price.toFixed(2)}) at the very top because the merchant paid for sponsored placement and generated {disqualifiedProduct.reviewSanitization.botReviewsPurged.toLocaleString()} bot 5-star reviews.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-mono text-[11px]">
                <div className="p-2 rounded bg-rose-950/60 border border-rose-900/60 text-rose-300">
                  Raw Star Rating: <span className="line-through text-slate-400">{disqualifiedProduct.reviewSanitization.rawStarRating} ★</span> → Real: {disqualifiedProduct.reviewSanitization.sanitizedStarRating} ★
                </div>
                <div className="p-2 rounded bg-rose-950/60 border border-rose-900/60 text-rose-300">
                  Bot Purge: {disqualifiedProduct.reviewSanitization.botReviewsPurged.toLocaleString()} Fake Reviews ({disqualifiedProduct.reviewSanitization.sponsoredBiasPenalizedPct.toFixed(0)}%)
                </div>
                <div className="p-2 rounded bg-rose-950/60 border border-rose-900/60 text-rose-300">
                  Trust Score: {disqualifiedProduct.reviewSanitization.trustScore}% (DISQUALIFIED)
                </div>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
