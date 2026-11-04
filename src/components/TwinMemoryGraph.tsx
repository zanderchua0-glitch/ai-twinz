import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTwin } from '../context/TwinContext';
import {
  Database,
  MapPin,
  Shirt,
  RotateCcw,
  AlertCircle,
  Plus,
  Check,
  Sparkles,
  DollarSign,
  User,
  Download,
  Upload,
  HardDrive,
  ShoppingBag,
  ExternalLink,
  ShieldCheck,
  Trash2
} from 'lucide-react';

// ─── Node types for the property graph ───────────────────────────────────────
type NodeId = 'user' | 'sizing' | 'itinerary' | 'budget' | 'returns' | 'brands';

interface GraphNode {
  id: NodeId;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  color: string;
  glowColor: string;
  icon: React.ReactNode;
}

interface GraphEdge {
  from: NodeId;
  to: NodeId;
  label: string;
}

const NODES: GraphNode[] = [
  {
    id: 'user',
    label: 'User Twin',
    sublabel: 'Root Node',
    x: 50,
    y: 50,
    color: '#22d3ee',
    glowColor: 'rgba(34,211,238,0.55)',
    icon: <User className="w-4 h-4" />,
  },
  {
    id: 'sizing',
    label: 'Sizing',
    sublabel: 'Tolerances',
    x: 18,
    y: 20,
    color: '#818cf8',
    glowColor: 'rgba(129,140,248,0.55)',
    icon: <Shirt className="w-3.5 h-3.5" />,
  },
  {
    id: 'itinerary',
    label: 'Itinerary',
    sublabel: 'Live Context',
    x: 82,
    y: 20,
    color: '#22d3ee',
    glowColor: 'rgba(34,211,238,0.55)',
    icon: <MapPin className="w-3.5 h-3.5" />,
  },
  {
    id: 'budget',
    label: 'Budget',
    sublabel: 'Elasticity',
    x: 85,
    y: 78,
    color: '#fbbf24',
    glowColor: 'rgba(251,191,36,0.55)',
    icon: <DollarSign className="w-3.5 h-3.5" />,
  },
  {
    id: 'returns',
    label: 'Return Vectors',
    sublabel: 'Pain Memory',
    x: 18,
    y: 78,
    color: '#f87171',
    glowColor: 'rgba(248,113,113,0.55)',
    icon: <AlertCircle className="w-3.5 h-3.5" />,
  },
  {
    id: 'brands',
    label: 'Brands',
    sublabel: 'Affinity Matrix',
    x: 50,
    y: 88,
    color: '#34d399',
    glowColor: 'rgba(52,211,153,0.55)',
    icon: <Sparkles className="w-3.5 h-3.5" />,
  },
];

const EDGES: GraphEdge[] = [
  { from: 'user', to: 'sizing', label: 'HAS_SIZING' },
  { from: 'user', to: 'itinerary', label: 'ACTIVE_ITINERARY' },
  { from: 'user', to: 'budget', label: 'BUDGET_ELASTICITY' },
  { from: 'user', to: 'returns', label: 'RETURN_VECTORS' },
  { from: 'user', to: 'brands', label: 'BRAND_AFFINITY' },
];

// ─── Interactive SVG Canvas ──────────────────────────────────────────────────
const PropertyGraphCanvas: React.FC<{
  activeNode: NodeId | null;
  onNodeClick: (id: NodeId) => void;
  glowingNode: NodeId | null;
}> = ({ activeNode, onNodeClick, glowingNode }) => {
  const nodeMap = Object.fromEntries(NODES.map((n) => [n.id, n]));

  return (
    <svg viewBox="0 0 100 100" className="w-full h-72 sm:h-96 select-none">
      {/* Background radial gradient */}
      <defs>
        <radialGradient id="graphBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0c1a2e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#020817" stopOpacity="1" />
        </radialGradient>
        {NODES.map((node) => (
          <filter key={`glow-${node.id}`} id={`glow-${node.id}`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        ))}
      </defs>

      <rect width="100" height="100" fill="url(#graphBg)" rx="4" />

      {/* Grid lines */}
      {[20, 40, 60, 80].map((v) => (
        <line key={`h-${v}`} x1="0" y1={v} x2="100" y2={v} stroke="#1e293b" strokeWidth="0.25" strokeDasharray="1,3" />
      ))}
      {[20, 40, 60, 80].map((v) => (
        <line key={`v-${v}`} x1={v} y1="0" x2={v} y2="100" stroke="#1e293b" strokeWidth="0.25" strokeDasharray="1,3" />
      ))}

      {/* Edges */}
      {EDGES.map((edge) => {
        const from = nodeMap[edge.from];
        const to = nodeMap[edge.to];
        const isConnectedActive = activeNode === edge.from || activeNode === edge.to;
        const isConnectedGlowing = glowingNode === edge.from || glowingNode === edge.to;

        return (
          <g key={`${edge.from}-${edge.to}`}>
            <line
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={isConnectedGlowing ? '#22d3ee' : isConnectedActive ? '#38bdf8' : '#334155'}
              strokeWidth={isConnectedGlowing ? '1.5' : isConnectedActive ? '1.2' : '0.6'}
              strokeDasharray={isConnectedGlowing ? '1,1' : undefined}
              style={{ transition: 'all 0.3s' }}
            />
            {/* Edge label */}
            <text
              x={(from.x + to.x) / 2}
              y={(from.y + to.y) / 2 - 1.5}
              textAnchor="middle"
              fontSize="4.5"
              fill={isConnectedActive ? '#94a3b8' : '#475569'}
              fontFamily="monospace"
            >
              {edge.label}
            </text>
          </g>
        );
      })}

      {/* Nodes */}
      {NODES.map((node) => {
        const isActive = activeNode === node.id;
        const isGlowing = glowingNode === node.id;
        const r = node.id === 'user' ? 8 : 6.5;
        const cx = node.x;
        const cy = node.y;

        return (
          <g
            key={node.id}
            onClick={() => onNodeClick(node.id)}
            className="cursor-pointer"
            filter={isGlowing ? `url(#glow-${node.id})` : undefined}
          >
            {/* Outer ring on active / glowing */}
            {(isActive || isGlowing) && (
              <circle
                cx={cx}
                cy={cy}
                r={r + 3}
                fill="none"
                stroke={node.color}
                strokeWidth="0.75"
                opacity={isGlowing ? 0.9 : 0.4}
                strokeDasharray={isGlowing ? '2,2' : undefined}
                className={isGlowing ? 'animate-spin' : ''}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />
            )}

            {/* Node body */}
            <circle
              cx={cx}
              cy={cy}
              r={r}
              fill={isActive ? '#0f172a' : '#020817'}
              stroke={node.color}
              strokeWidth={isActive || isGlowing ? '1.4' : '0.8'}
              style={{ transition: 'all 0.3s' }}
            />

            {/* Labels */}
            <text
              x={cx}
              y={cy + (node.id === 'user' ? 0 : -0.5)}
              textAnchor="middle"
              fontSize={node.id === 'user' ? '9' : '8'}
              fontWeight="700"
              fill={node.color}
              fontFamily="monospace"
            >
              {node.label}
            </text>
            <text
              x={cx}
              y={cy + (node.id === 'user' ? 8 : 7)}
              textAnchor="middle"
              fontSize="7"
              fill="#64748b"
              fontFamily="sans-serif"
            >
              {node.sublabel}
            </text>

            {/* Live sync flash */}
            {isGlowing && (
              <text
                x={cx}
                y={cy - r - 10}
                textAnchor="middle"
                fontSize="7.5"
                fill={node.color}
                fontFamily="monospace"
                fontWeight="700"
              >
                ● SYNCED
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
export const TwinMemoryGraph: React.FC = () => {
  const {
    profile,
    updateItinerary,
    updateSizing,
    updateProfile,
    addReturnMemory,
    triggerSearch,
    setActiveView,
    exportJsonLd,
    importJsonLd,
    resetProfileToDefaults,
    pastOrders
  } = useTwin();

  const [newReturnBrand, setNewReturnBrand] = useState('');
  const [newReturnProduct, setNewReturnProduct] = useState('');
  const [newReturnReason, setNewReturnReason] = useState('');
  const [saveToast, setSaveToast] = useState(false);
  const [glowingNode, setGlowingNode] = useState<NodeId | null>(null);
  const [activeNode, setActiveNode] = useState<NodeId | null>(null);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Refs for scrolling to each section
  const itineraryRef = useRef<HTMLDivElement>(null);
  const sizingRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);
  const returnsRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);

  const NODE_REFS: Record<NodeId, React.RefObject<HTMLDivElement | null>> = {
    user: itineraryRef,
    sizing: sizingRef,
    itinerary: itineraryRef,
    budget: budgetRef,
    returns: returnsRef,
    brands: brandsRef,
  };

  const pulseNode = useCallback((id: NodeId) => {
    setGlowingNode(id);
    setSaveToast(true);
    setTimeout(() => setGlowingNode(null), 1800);
    setTimeout(() => setSaveToast(false), 2200);
  }, []);

  const handleNodeClick = (id: NodeId) => {
    setActiveNode(id);
    const ref = NODE_REFS[id];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleItineraryChange = (field: string, value: any) => {
    updateItinerary({ [field]: value });
    pulseNode('itinerary');
  };

  const handleSizingChange = (field: string, value: any) => {
    updateSizing({ [field]: value });
    pulseNode('sizing');
  };

  const handleBudgetChange = (target: number) => {
    updateProfile({
      budgetElasticity: {
        ...profile.budgetElasticity,
        preferredTarget: target,
        maxFlexCeiling: target + 80,
      },
    });
    pulseNode('budget');
  };

  const handleAddReturn = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReturnBrand && newReturnReason) {
      addReturnMemory({
        productName: newReturnProduct || 'Unspecified Item',
        brand: newReturnBrand,
        returnReason: newReturnReason,
      });
      setNewReturnBrand('');
      setNewReturnProduct('');
      setNewReturnReason('');
      pulseNode('returns');
    }
  };

  const handleJsonLdUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        const res = importJsonLd(text);
        if (res.success) {
          setImportStatus('JSON-LD Portability Bundle successfully imported and saved!');
          pulseNode('user');
          setTimeout(() => setImportStatus(null), 5000);
        } else {
          setImportStatus(`Import Error: ${res.error}`);
          setTimeout(() => setImportStatus(null), 5000);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleRerun = () => {
    setActiveView('concierge');
    triggerSearch();
  };

  const activeBorder: Record<NodeId, string> = {
    user: 'border-cyan-500/60 shadow-cyan-500/10',
    sizing: 'border-indigo-500/60 shadow-indigo-500/10',
    itinerary: 'border-cyan-500/60 shadow-cyan-500/10',
    budget: 'border-amber-500/60 shadow-amber-500/10',
    returns: 'border-rose-500/60 shadow-rose-500/10',
    brands: 'border-emerald-500/60 shadow-emerald-500/10',
  };

  const getSectionClass = (nodeId: NodeId) =>
    `bg-slate-900/80 border rounded-3xl p-6 space-y-5 transition-all duration-300 ${
      activeNode === nodeId
        ? `${activeBorder[nodeId]} shadow-lg`
        : 'border-slate-800'
    }`;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">

      {/* Toast */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm shadow-xl animate-bounce">
          <Check className="w-4 h-4" />
          <span>Twin Memory Graph Updated &amp; Persisted to Local Vault!</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-3xl">
        <div className="flex items-center gap-4">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-400 shadow-lg shadow-cyan-500/20"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">{profile.name}</h2>
              <span className="text-xs font-mono text-cyan-400">{profile.handle}</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Persistent Digital Twin Memory Graph • Self-Sovereign Context Engine
            </p>
          </div>
        </div>
        <button
          onClick={handleRerun}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/25 transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Apply Changes &amp; Re-Run Agents</span>
        </button>
      </div>

      {/* Self-Sovereign JSON-LD Portability & Persistence Toolbar */}
      <div className="bg-slate-900/90 border border-cyan-500/30 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <HardDrive className="w-4 h-4 text-cyan-400" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                Self-Sovereign JSON-LD Vault
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                localStorage Persisted
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Own your commerce twin. Export or import your sizing, returns, and orders as W3C-compatible .jsonld.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <input
            type="file"
            accept=".jsonld,.json"
            ref={fileInputRef}
            onChange={handleJsonLdUpload}
            className="hidden"
          />

          <button
            onClick={exportJsonLd}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export .jsonld</span>
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Import .jsonld</span>
          </button>

          <button
            onClick={resetProfileToDefaults}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-rose-950/60 border border-slate-800 text-slate-400 hover:text-rose-300 text-xs transition-colors"
            title="Reset to factory baseline"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Import Notification Banner */}
      {importStatus && (
        <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs text-cyan-200 font-medium animate-fadeIn">
          {importStatus}
        </div>
      )}

      {/* ── Interactive Property Graph ── */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Live Property-Graph Topology
            </h3>
          </div>
          <span className="text-[11px] text-slate-500 font-mono">Click any node to navigate</span>
        </div>

        <PropertyGraphCanvas
          activeNode={activeNode}
          onNodeClick={handleNodeClick}
          glowingNode={glowingNode}
        />

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/60">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span> Identity</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span> Sizing Tolerances</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span> Itinerary Context</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Budget Elasticity</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span> Return Pain Points</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Brand Affinities</span>
        </div>
      </div>

      {/* ── Editable Graph Nodes ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Column 1 */}
        <div className="space-y-6">

          {/* Sizing Tolerances */}
          <div ref={sizingRef as React.RefObject<HTMLDivElement>} className={getSectionClass('sizing')}>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Shirt className="w-4 h-4 text-indigo-400" />
              Sizing Tolerances &amp; Geometry
              <span className="ml-auto text-[10px] font-mono text-indigo-500 bg-indigo-950/60 border border-indigo-500/20 px-2 py-0.5 rounded-full">
                SIZING NODE
              </span>
            </h3>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Shoe Size (US)</label>
                <input
                  type="text"
                  value={profile.sizing.shoeSize}
                  onChange={(e) => handleSizingChange('shoeSize', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 font-mono focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Width Geometry</label>
                <select
                  value={profile.sizing.shoeWidth}
                  onChange={(e) => handleSizingChange('shoeWidth', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 font-mono focus:border-indigo-500 focus:outline-none"
                >
                  <option value="Regular">Regular (D)</option>
                  <option value="Wide (EE)">Wide (EE)</option>
                  <option value="Extra Wide (4E)">Extra Wide (4E)</option>
                </select>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Shirt / Jacket Size</label>
                <input
                  type="text"
                  value={profile.sizing.shirtSize}
                  onChange={(e) => handleSizingChange('shirtSize', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 font-mono focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Arch Profile</label>
                <select
                  value={profile.sizing.archSupport}
                  onChange={(e) => handleSizingChange('archSupport', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 font-mono focus:border-indigo-500 focus:outline-none"
                >
                  <option value="Neutral">Neutral</option>
                  <option value="High Support">High Support</option>
                  <option value="Flat/Low">Flat/Low</option>
                </select>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs">
              <span className="text-indigo-400 font-mono font-bold text-[10px] uppercase">Geometric Tolerance Note:</span>
              <p className="text-slate-400 mt-1 leading-relaxed">{profile.sizing.tolerancesNotes}</p>
            </div>
          </div>

          {/* Active Travel Itinerary */}
          <div ref={itineraryRef as React.RefObject<HTMLDivElement>} className={getSectionClass('itinerary')}>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              Active Trip Context &amp; Itinerary
              <span className="ml-auto text-[10px] font-mono text-cyan-500 bg-cyan-950/60 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                ITINERARY NODE
              </span>
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Destination &amp; Districts</label>
                <input
                  type="text"
                  value={profile.activeItinerary.destination}
                  onChange={(e) => handleItineraryChange('destination', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 font-medium focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block mb-1">Daily Steps Expected</label>
                  <input
                    type="number"
                    value={profile.activeItinerary.expectedDailySteps}
                    onChange={(e) => handleItineraryChange('expectedDailySteps', parseInt(e.target.value) || 0)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 font-mono focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Dress Code Constraint</label>
                  <select
                    value={profile.activeItinerary.dressCode}
                    onChange={(e) => handleItineraryChange('dressCode', e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="Smart Casual">Smart Casual</option>
                    <option value="Business Formal">Business Formal</option>
                    <option value="Casual Adventure">Casual Adventure</option>
                    <option value="Tech Minimalist">Tech Minimalist</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Weather Forecast Condition</label>
                <input
                  type="text"
                  value={profile.activeItinerary.weatherForecast}
                  onChange={(e) => handleItineraryChange('weatherForecast', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:border-cyan-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Budget Elasticity */}
          <div ref={budgetRef as React.RefObject<HTMLDivElement>} className={getSectionClass('budget')}>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-amber-400" />
              Budget Elasticity &amp; Price Ceiling
              <span className="ml-auto text-[10px] font-mono text-amber-500 bg-amber-950/60 border border-amber-500/20 px-2 py-0.5 rounded-full">
                BUDGET NODE
              </span>
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Target Budget Target:</span>
                <span className="text-amber-400 font-mono font-bold text-base">
                  ${profile.budgetElasticity.preferredTarget}
                </span>
              </div>

              <input
                type="range"
                min="100"
                max="500"
                step="10"
                value={profile.budgetElasticity.preferredTarget}
                onChange={(e) => handleBudgetChange(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />

              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>$100 Target</span>
                <span>Flex Ceiling: ${profile.budgetElasticity.maxFlexCeiling}</span>
                <span>$500 High-End</span>
              </div>
            </div>
          </div>

        </div>

        {/* Column 2 */}
        <div className="space-y-6">

          {/* Return Pain Memory */}
          <div ref={returnsRef as React.RefObject<HTMLDivElement>} className={getSectionClass('returns')}>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400" />
              Negative Return Vectors (Pain Points)
              <span className="ml-auto text-[10px] font-mono text-rose-500 bg-rose-950/60 border border-rose-500/20 px-2 py-0.5 rounded-full">
                RETURNS NODE
              </span>
            </h3>

            <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
              {profile.returnHistory.map((ret) => (
                <div key={ret.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-200">{ret.productName} ({ret.brand})</span>
                    <span className="text-[10px] text-slate-500 font-mono">{ret.date}</span>
                  </div>
                  <div className="text-rose-300/90 text-[11px]">
                    <span className="font-semibold">Reason:</span> "{ret.returnReason}"
                  </div>
                  <div className="text-slate-400 text-[10px] font-mono pt-1 border-t border-slate-900">
                    ⚡ {ret.learnedNegativeSignal}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleAddReturn} className="pt-2 border-t border-slate-800 space-y-2 text-xs">
              <div className="text-slate-400 font-medium">Add New Return Pain Point to Memory:</div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Brand (e.g. Nike)"
                  value={newReturnBrand}
                  onChange={(e) => setNewReturnBrand(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-slate-200"
                />
                <input
                  type="text"
                  placeholder="Product (e.g. Air Force 1)"
                  value={newReturnProduct}
                  onChange={(e) => setNewReturnProduct(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-slate-200"
                />
              </div>
              <input
                type="text"
                placeholder="Return reason (e.g. Sole too stiff, heel slippage...)"
                value={newReturnReason}
                onChange={(e) => setNewReturnReason(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-slate-200"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-rose-300 font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Inject Negative Signal Vector</span>
              </button>
            </form>
          </div>

          {/* Brand Affinity */}
          <div ref={brandsRef as React.RefObject<HTMLDivElement>} className={getSectionClass('brands')}>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Brand Affinity &amp; Blacklist Filter
              <span className="ml-auto text-[10px] font-mono text-emerald-500 bg-emerald-950/60 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                BRANDS NODE
              </span>
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <div className="text-slate-400 mb-1.5 font-mono uppercase text-[10px]">Preferred Brands (+Bonus Score)</div>
                <div className="flex flex-wrap gap-1.5">
                  {profile.brandAffinities.preferred.map((b) => (
                    <span key={b} className="px-2.5 py-1 rounded-lg bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 font-medium">
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-slate-400 mb-1.5 font-mono uppercase text-[10px]">Blacklisted Brands (Auto-Purge)</div>
                <div className="flex flex-wrap gap-1.5">
                  {profile.brandAffinities.blacklisted.map((b) => (
                    <span key={b} className="px-2.5 py-1 rounded-lg bg-rose-950/70 border border-rose-500/40 text-rose-300 font-medium">
                      ✕ {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Persisted Order History (from localStorage) */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-cyan-400" />
                <span>Persistent Order Vault ({pastOrders.length})</span>
              </h3>
              <span className="text-[10px] font-mono text-slate-500">Auto-Tokenized Receipts</span>
            </div>

            {pastOrders.length === 0 ? (
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-500 text-center">
                No orders yet. Any 1-tap authorized purchase will be tokenized and recorded in your local memory graph vault.
              </div>
            ) : (
              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {pastOrders.map((ord) => (
                  <div key={ord.orderId} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{ord.product.name}</span>
                      <span className="text-emerald-400 font-mono font-bold">${ord.amount.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>{ord.orderId}</span>
                      <span>Auth: {ord.authorizedAt}</span>
                    </div>
                    <div className="text-[10px] text-cyan-300/80 font-mono">
                      Tracking: {ord.trackingNumber}
                    </div>
                    <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-900">
                      ⚡ {ord.twinPostPurchaseFeedbackLearned}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
