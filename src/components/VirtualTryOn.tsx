import React, { useEffect, useState, useRef } from 'react';
import { useTwin } from '../context/TwinContext';
import { ProductCandidate } from '../types';
import { 
  CheckCircle, 
  AlertTriangle, 
  Sparkles, 
  Footprints, 
  Ruler, 
  Shield, 
  Zap, 
  Upload, 
  Image as ImageIcon, 
  RotateCcw,
  Palette,
  Eye,
  Activity
} from 'lucide-react';

// ─── Circular Gauge ───────────────────────────────────────────────────────────
const CircularGauge: React.FC<{
  label: string;
  value: number;
  color: string;
  trackColor: string;
  size?: number;
  delay?: number;
}> = ({ label, value, color, trackColor, size = 80, delay = 0 }) => {
  const [animated, setAnimated] = useState(0);
  const r = (size - 14) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (animated / 100) * circ;

  useEffect(() => {
    const t = setTimeout(() => setAnimated(value), delay + 100);
    return () => clearTimeout(t);
  }, [value, delay]);

  return (
    <div className="flex flex-col items-center gap-1.5">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none"
          stroke={trackColor}
          strokeWidth="7"
        />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: `stroke-dashoffset 0.9s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms` }}
          filter={`drop-shadow(0 0 4px ${color}88)`}
        />
        <text
          x={size / 2} y={size / 2 + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="13"
          fontWeight="700"
          fill="white"
          fontFamily="monospace"
        >
          {animated}
        </text>
      </svg>
      <span className="text-[10px] font-mono text-slate-400 text-center leading-tight max-w-[72px]">{label}</span>
    </div>
  );
};

// ─── Trouser Styler Presets ─────────────────────────────────────────────────
export type TrouserStyle = 'charcoal' | 'navy' | 'black_tech' | 'indigo_denim';

const TROUSER_OPTIONS: { id: TrouserStyle; label: string; colorHex: string; strokeHex: string; desc: string }[] = [
  { id: 'charcoal', label: 'Charcoal Wool', colorHex: '#27272a', strokeHex: '#3f3f46', desc: 'Formal tailored drape' },
  { id: 'navy', label: 'Navy Chino', colorHex: '#1e293b', strokeHex: '#334155', desc: 'Smart casual taper' },
  { id: 'black_tech', label: 'Black Tech', colorHex: '#09090b', strokeHex: '#27272a', desc: 'Water-resistant techwear' },
  { id: 'indigo_denim', label: 'Indigo Denim', colorHex: '#1e3a8a', strokeHex: '#2563eb', desc: 'Raw selvedge wash' },
];

// ─── Body Silhouette with Trouser Styler & Gear ───────────────────────────────
const BodySilhouette: React.FC<{ 
  product: ProductCandidate; 
  shoeSize: string; 
  shoeWidth: string;
  trouserStyle: TrouserStyle;
}> = ({ product, shoeSize, shoeWidth, trouserStyle }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const activeTrouser = TROUSER_OPTIONS.find(t => t.id === trouserStyle) || TROUSER_OPTIONS[0];

  const isFootwear = product.category.toLowerCase().includes('footwear');
  const isOuterwear = product.category.toLowerCase().includes('outerwear');
  const isAudio = product.category.toLowerCase().includes('audio');
  const isPants = product.category.toLowerCase().includes('pant');

  return (
    <div className="relative flex flex-col items-center justify-center select-none py-2">
      <svg
        viewBox="0 0 120 340"
        className="w-32 h-auto drop-shadow-2xl"
        style={{ filter: 'drop-shadow(0 0 18px rgba(34,211,238,0.15))' }}
      >
        {/* Head */}
        <ellipse cx="60" cy="30" rx="16" ry="18" fill="#1e293b" stroke="#22d3ee" strokeWidth="1" />
        
        {/* Headphones overlay if audio */}
        {isAudio && (
          <g>
            <path d="M42 26 C42 12, 78 12, 78 26" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
            <rect x="40" y="24" width="7" height="14" rx="3.5" fill="#38bdf8" />
            <rect x="73" y="24" width="7" height="14" rx="3.5" fill="#38bdf8" />
          </g>
        )}

        {/* Neck */}
        <rect x="54" y="46" width="12" height="10" rx="4" fill="#1e293b" />

        {/* Torso / Jacket */}
        <path 
          d="M20 58 Q60 52 100 58 L95 120 Q60 128 25 120 Z" 
          fill={isOuterwear ? '#0f766e' : '#1e293b'} 
          stroke={isOuterwear ? '#2dd4bf' : '#334155'} 
          strokeWidth={isOuterwear ? '1.5' : '0.5'} 
        />
        {isOuterwear && (
          <path d="M60 55 L60 122" stroke="#2dd4bf" strokeWidth="1.2" strokeDasharray="2,2" />
        )}

        {/* Left arm */}
        <path d="M20 60 Q8 90 10 120" stroke={isOuterwear ? '#0f766e' : '#1e293b'} strokeWidth="14" strokeLinecap="round" fill="none" />
        <path d="M20 60 Q8 90 10 120" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />

        {/* Right arm */}
        <path d="M100 60 Q112 90 110 120" stroke={isOuterwear ? '#0f766e' : '#1e293b'} strokeWidth="14" strokeLinecap="round" fill="none" />
        <path d="M100 60 Q112 90 110 120" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />

        {/* Hips */}
        <path d="M25 118 Q60 130 95 118 L98 180 Q60 192 22 180 Z" fill={activeTrouser.colorHex} stroke={isPants ? '#22d3ee' : activeTrouser.strokeHex} strokeWidth={isPants ? '1.8' : '0.8'} />

        {/* Left Leg (Trouser Styler Applied) */}
        <path d="M40 178 Q35 230 34 270" stroke={activeTrouser.colorHex} strokeWidth="18" strokeLinecap="round" fill="none" />
        <path d="M40 178 Q35 230 34 270" stroke={isPants ? '#22d3ee' : activeTrouser.strokeHex} strokeWidth={isPants ? '1.5' : '1'} strokeLinecap="round" fill="none" />

        {/* Right Leg (Trouser Styler Applied) */}
        <path d="M80 178 Q85 230 86 270" stroke={activeTrouser.colorHex} strokeWidth="18" strokeLinecap="round" fill="none" />
        <path d="M80 178 Q85 230 86 270" stroke={isPants ? '#22d3ee' : activeTrouser.strokeHex} strokeWidth={isPants ? '1.5' : '1'} strokeLinecap="round" fill="none" />

        {/* Subtle Trouser Crease line */}
        <path d="M35 185 L33 265" stroke={activeTrouser.strokeHex} strokeWidth="0.8" opacity="0.6" />
        <path d="M85 185 L87 265" stroke={activeTrouser.strokeHex} strokeWidth="0.8" opacity="0.6" />

        {/* Glow dots on body */}
        <circle cx="60" cy="80" r="3" fill="#22d3ee" opacity="0.3" />
        <circle cx="60" cy="148" r="3" fill="#22d3ee" opacity={isPants ? 0.6 : 0.2} />
      </svg>

      {/* Product Image Overlay Badge */}
      {isFootwear ? (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 flex justify-between px-0">
          <div className="relative w-14 h-10 rounded-lg overflow-hidden border border-cyan-500/40 shadow-lg shadow-cyan-500/20 -scale-x-100 bg-slate-900">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover object-center"
              onLoad={() => setImgLoaded(true)}
              style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.4s' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          </div>
          <div className="relative w-14 h-10 rounded-lg overflow-hidden border border-cyan-500/40 shadow-lg shadow-cyan-500/20 bg-slate-900">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover object-center"
              style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.4s' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          </div>
        </div>
      ) : isPants ? (
        <div className="absolute bottom-10 -right-2 w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-xl shadow-cyan-500/30 bg-slate-950">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ) : (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-400 shadow-lg shadow-cyan-500/30">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}

      {/* Size label */}
      <div className="mt-3 flex gap-2 text-[10px] font-mono">
        <span className="px-2 py-0.5 rounded-full bg-indigo-950 border border-indigo-500/30 text-indigo-300">
          {isPants ? 'Size 32 x 32' : isFootwear ? `US ${shoeSize}` : 'Size M Regular'}
        </span>
        <span className="px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300">
          {isPants ? '4-Way Stretch' : isFootwear ? shoeWidth : 'Athletic Cut'}
        </span>
      </div>
    </div>
  );
};

// ─── 2D Trouser Drape & Flex Component ────────────────────────────────────────
const TrouserDrapeHeatmap: React.FC<{
  selectedSize: string;
  targetPantSize: string;
}> = ({ selectedSize, targetPantSize }) => {
  const isMatch = selectedSize === targetPantSize;
  return (
    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
            2D Trouser Drape, Waist &amp; Flex Dynamics
          </h4>
        </div>
        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
          isMatch ? 'bg-emerald-950 border border-emerald-500/40 text-emerald-300' : 'bg-amber-950 border border-amber-500/40 text-amber-300'
        }`}>
          {isMatch ? 'OPTIMAL TWIN DRAPE (32 x 32)' : `${selectedSize} TESTING`}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 py-2 text-center font-mono">
        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-[10px] text-slate-400 block mb-0.5">Waistband Fit</span>
          <span className="text-emerald-400 font-bold text-xs">Zero Dig (32")</span>
          <span className="text-[9px] text-slate-500 block mt-0.5">Hidden Elastic Core</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-[10px] text-slate-400 block mb-0.5">4-Way Stretch Flex</span>
          <span className="text-cyan-400 font-bold text-xs">98% Mobility</span>
          <span className="text-[9px] text-slate-500 block mt-0.5">Gusseted Stride</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-[10px] text-slate-400 block mb-0.5">Inseam Drape</span>
          <span className="text-indigo-400 font-bold text-xs">32" Slight Break</span>
          <span className="text-[9px] text-slate-500 block mt-0.5">Over Commuter Shoes</span>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-200 leading-relaxed">
        <p className="font-medium">
          {isMatch 
            ? '✓ Verified Twin Fit: 32x32 tailored taper matches your waist geometry perfectly. 4-way Warpstreme stretch ensures zero seam tension across 15,000 steps.'
            : `Testing ${selectedSize}: Your digital twin profile standard is ${targetPantSize}. Warpstreme stretch accommodates within ±1 size flex.`
          }
        </p>
      </div>
    </div>
  );
};

// ─── 2D Foot Pressure & Bunion Heatmap Component ─────────────────────────────
const FootPressureHeatmap: React.FC<{
  selectedSize: string;
  userToleranceWidth: string;
}> = ({ selectedSize, userToleranceWidth }) => {
  const sizeNum = parseFloat(selectedSize.replace(/[^0-9.]/g, '')) || 10.5;

  let rightBunionState: {
    pressurePsi: number;
    color: string;
    level: 'CRITICAL' | 'WARNING' | 'OPTIMAL' | 'RELAXED' | 'LOOSE';
    message: string;
    clearanceMm: number;
  };

  if (sizeNum <= 9.5) {
    rightBunionState = {
      pressurePsi: 96,
      color: '#ef4444',
      level: 'CRITICAL',
      message: 'CRITICAL PINCH: Right bunion exceeds lateral boundary by 4.2mm. Severe blister & metatarsal pain risk over 15k steps.',
      clearanceMm: -4.2
    };
  } else if (sizeNum === 10.0) {
    rightBunionState = {
      pressurePsi: 82,
      color: '#f97316',
      level: 'WARNING',
      message: 'FRICTION WARNING: Right bunion touches lateral toe-box wall (1.4mm compression). Acceptable only with thin compression socks.',
      clearanceMm: -1.4
    };
  } else if (sizeNum === 10.5) {
    rightBunionState = {
      pressurePsi: 52,
      color: '#22c55e',
      level: 'OPTIMAL',
      message: 'OPTIMAL TWIN FIT: 3.5mm lateral toe-box clearance perfectly accommodates your +3mm right foot asymmetry with zero bunion hotspots.',
      clearanceMm: 3.5
    };
  } else if (sizeNum === 11.0) {
    rightBunionState = {
      pressurePsi: 38,
      color: '#38bdf8',
      level: 'RELAXED',
      message: 'ROOMY VOLUME: Ample bunion clearance (5.2mm), but minor 1.8mm heel-slip drift detected during walking gait.',
      clearanceMm: 5.2
    };
  } else {
    rightBunionState = {
      pressurePsi: 24,
      color: '#a855f7',
      level: 'LOOSE',
      message: 'EXCESS VOLUME: Toe box too long. Forefoot slide risk increases calf fatigue over 10,000+ daily steps.',
      clearanceMm: 7.0
    };
  }

  const leftBunionColor = sizeNum < 10.0 ? '#f97316' : '#22c55e';

  return (
    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
            2D Foot Pressure &amp; Bunion Asymmetry Heatmap
          </h4>
        </div>
        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
          rightBunionState.level === 'OPTIMAL' 
            ? 'bg-emerald-950 border border-emerald-500/40 text-emerald-300' 
            : rightBunionState.level === 'CRITICAL'
            ? 'bg-rose-950 border border-rose-500/40 text-rose-300 animate-pulse'
            : 'bg-amber-950 border border-amber-500/40 text-amber-300'
        }`}>
          {rightBunionState.level} ({rightBunionState.pressurePsi} PSI)
        </span>
      </div>

      <div className="flex items-center justify-center gap-8 py-2">
        {/* Left Foot */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-mono text-slate-500 mb-1">LEFT FOOT (Standard)</span>
          <svg width="70" height="130" viewBox="0 0 70 130" className="drop-shadow-lg">
            <defs>
              <radialGradient id="leftHeelGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1e293b" stopOpacity="0.2" />
              </radialGradient>
              <radialGradient id="leftBunionGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={leftBunionColor} stopOpacity="0.9" />
                <stop offset="100%" stopColor="#1e293b" stopOpacity="0.2" />
              </radialGradient>
            </defs>

            <path
              d="M35 10 C50 10 60 25 60 45 C60 65 48 85 52 110 C52 125 45 125 35 125 C25 125 18 125 18 110 C22 85 10 65 10 45 C10 25 20 10 35 10 Z"
              fill="#0f172a"
              stroke="#334155"
              strokeWidth="1.5"
            />
            <ellipse cx="35" cy="40" rx="16" ry="12" fill="url(#leftBunionGrad)" />
            <ellipse cx="32" cy="75" rx="8" ry="14" fill="#0284c7" opacity="0.4" />
            <ellipse cx="35" cy="108" rx="11" ry="10" fill="url(#leftHeelGrad)" />
          </svg>
          <span className="text-[10px] font-mono text-emerald-400 mt-1">48 PSI (Normal)</span>
        </div>

        {/* Asymmetry Divider */}
        <div className="flex flex-col items-center text-center px-2 py-1 rounded-xl bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 space-y-1">
          <span className="text-cyan-400 font-bold">+3mm Wider</span>
          <span className="text-[9px] text-slate-500">Asymmetry Delta</span>
          <span className="text-amber-400 font-bold">1st Metatarsal</span>
        </div>

        {/* Right Foot with Bunion Hotspot */}
        <div className="flex flex-col items-center relative">
          <span className="text-[10px] font-mono text-slate-500 mb-1">RIGHT FOOT (+3mm Bunion)</span>
          <svg width="70" height="130" viewBox="0 0 70 130" className="drop-shadow-lg">
            <defs>
              <radialGradient id="rightHeelGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1e293b" stopOpacity="0.2" />
              </radialGradient>
              <radialGradient id="rightBunionGrad" cx="30%" cy="50%" r="50%">
                <stop offset="0%" stopColor={rightBunionState.color} stopOpacity="1" />
                <stop offset="70%" stopColor={rightBunionState.color} stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1e293b" stopOpacity="0.1" />
              </radialGradient>
            </defs>

            <path
              d="M35 10 C50 10 63 25 63 45 C63 65 49 85 52 110 C52 125 45 125 35 125 C25 125 18 125 18 110 C22 85 8 65 8 45 C8 25 20 10 35 10 Z"
              fill="#0f172a"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            <ellipse cx="36" cy="40" rx="18" ry="13" fill="#0284c7" opacity="0.3" />
            <circle cx="16" cy="44" r="11" fill="url(#rightBunionGrad)" />
            <ellipse cx="38" cy="75" rx="8" ry="14" fill="#0284c7" opacity="0.4" />
            <ellipse cx="35" cy="108" rx="11" ry="10" fill="url(#rightHeelGrad)" />
          </svg>
          <span className="text-[10px] font-mono font-bold mt-1" style={{ color: rightBunionState.color }}>
            {rightBunionState.pressurePsi} PSI (Bunion Zone)
          </span>
        </div>
      </div>

      <div className={`p-3 rounded-xl border text-xs leading-relaxed ${
        rightBunionState.level === 'OPTIMAL'
          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
          : rightBunionState.level === 'CRITICAL'
          ? 'bg-rose-950/40 border-rose-500/40 text-rose-200'
          : 'bg-amber-950/40 border-amber-500/40 text-amber-200'
      }`}>
        <p className="font-medium">{rightBunionState.message}</p>
        <div className="flex items-center gap-3 mt-1.5 text-[11px] font-mono text-slate-300">
          <span>Target Clearance: <strong className="text-white">{rightBunionState.clearanceMm > 0 ? `+${rightBunionState.clearanceMm}mm` : `${rightBunionState.clearanceMm}mm`}</strong></span>
          <span>•</span>
          <span>Toe-Box Tolerance: <strong className="text-white">{userToleranceWidth}</strong></span>
        </div>
      </div>
    </div>
  );
};

// ─── AI Fit Report ────────────────────────────────────────────────────────────
const FitReport: React.FC<{ product: ProductCandidate; selectedSize: string }> = ({ product, selectedSize }) => {
  const { profile } = useTwin();
  const fitScore = product.attributeScores.compositeTwinFitScore;

  const positiveNotes: string[] = [
    ...product.transparentReasoning.twinAlignmentHighlights,
  ];

  const warningNotes: string[] = [];
  if (profile.returnHistory.length > 0) {
    warningNotes.push(
      `Return vector guard: "${profile.returnHistory[0].returnReason.slice(0, 55)}..." — verified safe.`
    );
  }
  if (product.reviewSanitization.criticalFlags.length > 0) {
    warningNotes.push(product.reviewSanitization.criticalFlags[0]);
  }

  const fitLabel =
    fitScore >= 95 ? 'Perfect Twin Match' :
    fitScore >= 85 ? 'Excellent Fit' :
    fitScore >= 75 ? 'Good Fit' :
    'Acceptable Fit';

  const fitColor =
    fitScore >= 95 ? 'text-emerald-400' :
    fitScore >= 85 ? 'text-cyan-400' :
    fitScore >= 75 ? 'text-amber-400' :
    'text-rose-400';

  return (
    <div className="space-y-4 h-full flex flex-col">
      <div className="text-center p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
        <div className="text-xs font-mono text-slate-500 uppercase mb-1">Twin Compatibility Confidence</div>
        <div className={`text-5xl font-black ${fitColor} tabular-nums`}
          style={{ textShadow: '0 0 30px currentColor' }}>
          {fitScore}
          <span className="text-2xl text-slate-500">%</span>
        </div>
        <div className={`text-sm font-semibold mt-1 ${fitColor}`}>{fitLabel}</div>
        <div className="text-[11px] text-slate-500 mt-0.5">
          Evaluating size <span className="text-cyan-300 font-mono font-semibold">{selectedSize}</span> against digital twin profile
        </div>
      </div>

      <div className="flex-1 space-y-2">
        <div className="text-[10px] font-mono uppercase text-slate-500">Verified Twin Alignments</div>
        {positiveNotes.map((note, i) => (
          <div key={i} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <span>{note}</span>
          </div>
        ))}
      </div>

      {warningNotes.length > 0 && (
        <div className="space-y-2">
          <div className="text-[10px] font-mono uppercase text-slate-500">Flagged &amp; Compensated</div>
          {warningNotes.map((note, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-xl bg-amber-950/20 border border-amber-900/40">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>{note}</span>
            </div>
          ))}
        </div>
      )}

      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
        <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">Synthesized Risk Assessment</div>
        <p className="text-slate-300">{product.transparentReasoning.riskAssessment}</p>
      </div>
    </div>
  );
};

// ─── Main Multimodal Virtual Try-On Component ────────────────────────────────
export const VirtualTryOn: React.FC<{ product: ProductCandidate }> = ({ product }) => {
  const { profile } = useTwin();
  const [visible, setVisible] = useState(false);
  
  const isPants = product.category.toLowerCase().includes('pant');
  const isFootwear = product.category.toLowerCase().includes('footwear');
  
  const defaultSize = isPants ? (profile.sizing.pantSize || '32 x 32') : profile.sizing.shoeSize;
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [trouserStyle, setTrouserStyle] = useState<TrouserStyle>('charcoal');
  const [activeTab, setActiveTab] = useState<'silhouette' | 'photo_upload'>('silhouette');
  
  const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setSelectedSize(isPants ? (profile.sizing.pantSize || '32 x 32') : profile.sizing.shoeSize);
  }, [product.id, profile.sizing.pantSize, profile.sizing.shoeSize, isPants]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedPhotoUrl(url);
      setActiveTab('photo_upload');
    }
  };

  const handleUseSamplePhoto = () => {
    setUploadedPhotoUrl('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80');
    setActiveTab('photo_upload');
  };

  const scores = product.attributeScores;
  const sizes = isPants 
    ? ['30 x 30', '31 x 32', '32 x 32', '33 x 32', '34 x 32']
    : ['9.5 US', '10.0 US', '10.5 US', '11.0 US', '11.5 US'];

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
      className="mt-4 rounded-3xl border border-cyan-500/25 bg-gradient-to-br from-slate-900/95 via-slate-950 to-cyan-950/20 overflow-hidden shadow-2xl shadow-cyan-950/40"
    >
      {/* Header & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/60 gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              Multimodal AI Virtual Try-On
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300">
                {isPants ? 'TROUSER DRAPE & STRETCH' : 'PHOTO UPLOAD + HEATMAP'}
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Testing {product.name} ({product.brand})
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('silhouette')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'silhouette'
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Silhouette &amp; Fit Dynamics</span>
          </button>

          <button
            onClick={() => setActiveTab('photo_upload')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'photo_upload'
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>My Photo Preview</span>
          </button>
        </div>
      </div>

      {/* Controls Bar: Size Selector & Trouser Styler */}
      <div className="px-6 py-3 border-b border-slate-800/50 flex flex-wrap items-center justify-between gap-4 bg-slate-950/40">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Ruler className="w-3.5 h-3.5 text-indigo-400" />
            <span className="uppercase text-[10px]">Test Size:</span>
          </div>
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s)}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                selectedSize === s
                  ? 'bg-indigo-500/20 border border-indigo-400 text-indigo-300 font-bold shadow-md shadow-indigo-500/10'
                  : 'bg-slate-800 border border-slate-700 text-slate-400 hover:border-slate-600'
              }`}
            >
              {s}
              {s === (isPants ? profile.sizing.pantSize : profile.sizing.shoeSize) && (
                <span className="ml-1 text-cyan-400">★</span>
              )}
            </button>
          ))}
          <span className="text-[10px] font-mono text-cyan-500">★ = Twin Profile Size</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Palette className="w-3.5 h-3.5 text-cyan-400" />
            <span className="uppercase text-[10px]">Trouser Styler:</span>
          </div>
          {TROUSER_OPTIONS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTrouserStyle(t.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all border ${
                trouserStyle === t.id
                  ? 'bg-slate-800 border-cyan-400 text-white font-semibold'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <span 
                className="w-2.5 h-2.5 rounded-full border border-white/20" 
                style={{ backgroundColor: t.colorHex }} 
              />
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === 'silhouette' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-800/60">
          
          {/* Column 1: Body Silhouette with Trouser Styler */}
          <div className="lg:col-span-3 flex flex-col items-center justify-between py-6 px-4 bg-slate-950/30">
            <div className="text-[10px] font-mono uppercase text-slate-500 tracking-widest text-center">
              Silhouette Outfit Styler
            </div>
            
            <BodySilhouette
              product={product}
              shoeSize={selectedSize}
              shoeWidth={profile.sizing.shoeWidth}
              trouserStyle={trouserStyle}
            />

            <div className="w-full text-center p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <div className="text-[10px] font-mono text-slate-500 uppercase">Active Trouser Drape</div>
              <div className="text-cyan-300 font-semibold mt-0.5">
                {TROUSER_OPTIONS.find(t => t.id === trouserStyle)?.label}
              </div>
              <div className="text-[10px] text-slate-500">
                {TROUSER_OPTIONS.find(t => t.id === trouserStyle)?.desc}
              </div>
            </div>
          </div>

          {/* Column 2: 2D Foot Pressure OR Trouser Drape Dynamics */}
          <div className="lg:col-span-5 flex flex-col justify-between py-6 px-6 gap-4">
            {isPants ? (
              <TrouserDrapeHeatmap
                selectedSize={selectedSize}
                targetPantSize={profile.sizing.pantSize || '32 x 32'}
              />
            ) : (
              <FootPressureHeatmap
                selectedSize={selectedSize}
                userToleranceWidth={profile.sizing.shoeWidth}
              />
            )}

            {/* Dimensional Fit Gauges */}
            <div className="grid grid-cols-4 gap-2 pt-2 border-t border-slate-800/60">
              <CircularGauge
                label={isPants ? "Waistband" : "Toe Box"}
                value={Math.min(100, scores.ergonomic15kStepsScore + (isPants ? 2 : 0))}
                color="#22d3ee"
                trackColor="#1e3a4a"
                size={70}
              />
              <CircularGauge
                label={isPants ? "4-Way Flex" : "Heel Lock"}
                value={Math.min(100, isPants ? 98 : scores.weatherProofScore)}
                color="#818cf8"
                trackColor="#1e1b4b"
                size={70}
              />
              <CircularGauge
                label={isPants ? "Inseam" : "Arch Flex"}
                value={Math.min(100, isPants ? 95 : scores.ergonomic15kStepsScore - 2)}
                color="#34d399"
                trackColor="#0d2e22"
                size={70}
              />
              <CircularGauge
                label={isPants ? "Wrinkle Free" : "Asymmetry"}
                value={isPants ? 96 : 94}
                color="#fbbf24"
                trackColor="#2d1f00"
                size={70}
              />
            </div>
          </div>

          {/* Column 3: AI Fit Report */}
          <div className="lg:col-span-4 py-6 px-6">
            <div className="text-[10px] font-mono uppercase text-slate-500 mb-3 tracking-widest">
              AI Fit Analysis Report
            </div>
            <FitReport product={product} selectedSize={selectedSize} />
          </div>

        </div>
      ) : (
        /* Photo Upload Mode */
        <div className="p-8">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
          />

          {uploadedPhotoUrl ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border-2 border-cyan-500/40 bg-slate-950 shadow-2xl group">
                <img
                  src={uploadedPhotoUrl}
                  alt="User Outfit"
                  className="w-full h-[460px] object-cover object-center"
                />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 border border-cyan-400 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-16 h-16 rounded-xl object-cover border border-cyan-500/40 bg-slate-950"
                    />
                    <div>
                      <div className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">
                        AR Gear Overlay Active
                      </div>
                      <div className="text-sm font-bold text-white line-clamp-1">{product.name}</div>
                      <div className="text-xs text-slate-300">
                        Tested with <strong className="text-white">{selectedSize}</strong> • {product.brand}
                      </div>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <div className="text-xl font-black text-emerald-400 font-mono">
                      {scores.compositeTwinFitScore}%
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono uppercase">Twin Match</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div>
                  <h4 className="text-xl font-bold text-white">Outfit Photo Analyzed</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    AI Twinz evaluated your outfit profile against {product.brand} styling aesthetics, drape, and proportions.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Visual Match Assessment</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    The {product.name} seamlessly pairs with your outfit drape with tailored lines suitable for both walking commutes and client meetings.
                  </p>
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-slate-400">
                    <span>Selected Sizing:</span>
                    <span className="font-mono text-cyan-300 font-bold">{selectedSize}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 border border-slate-700"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Upload Different Photo</span>
                  </button>
                  <button
                    onClick={() => setUploadedPhotoUrl(null)}
                    className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-rose-950/60 text-slate-400 hover:text-rose-300 text-xs font-semibold transition-colors border border-slate-800"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-xl mx-auto text-center py-10 px-6 rounded-3xl border-2 border-dashed border-slate-700 hover:border-cyan-500/60 transition-colors bg-slate-950/50 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-xl shadow-cyan-950/40">
                <Upload className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Upload Your Outfit or Mirror Selfie</h4>
                <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                  Drop in any full-length photo to preview how {product.brand} {product.name} pairs with your actual wardrobe drape and styling.
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all"
                >
                  Choose File from Device
                </button>
                <button
                  onClick={handleUseSamplePhoto}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs border border-slate-700 transition-colors"
                >
                  Use Sample Commuter Outfit
                </button>
              </div>
              <div className="text-[10px] font-mono text-slate-500">
                Supports JPG, PNG, WEBP (Processed 100% locally in browser memory)
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="px-6 py-3 border-t border-slate-800/60 bg-slate-950/60 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-cyan-400" />
          <span>
            {isPants 
              ? 'Trouser drape analysis evaluated against 32x32 waistline geometry and 4-way stretch flex.'
              : 'Multimodal analysis combines 2D foot pressure simulation, custom photo preview, and 3mm right-foot bunion compensation.'
            }
          </span>
        </div>
        <span className="text-cyan-400">Twin ID: {profile.id}</span>
      </div>
    </div>
  );
};
