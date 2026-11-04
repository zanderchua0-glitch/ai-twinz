import React from 'react';
import { useTwin } from '../context/TwinContext';
import { 
  Cpu, 
  Database, 
  Globe2, 
  CreditCard, 
  ShieldCheck, 
  ArrowRight, 
  Terminal, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';

export const AgentArchitectureView: React.FC = () => {
  const { traceSteps } = useTwin();

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      
      {/* Overview Banner */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          Technical Scope & Architecture Blueprint
        </span>
        <h2 className="text-2xl font-black text-white mt-1">
          The 4 Foundational Pillars of the AI Digital Twin Customer
        </h2>
        <p className="text-sm text-slate-400 mt-2 leading-relaxed">
          Comprehensive review of the agent state graph, property-memory schema, catalog ingestion hybrid, and tokenized checkout flow designed to eliminate browsing and execute purchases autonomously.
        </p>
      </div>

      {/* The 4 Foundational Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Pillar 1: Architecture & Agent Orchestration */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">Pillar 1</span>
              <h3 className="text-base font-bold text-white">LangGraph Agent Orchestration</h3>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Coordinated cyclic graph executing specialized sub-agents:
          </p>

          <ul className="space-y-2 text-xs text-slate-400 font-mono">
            <li className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">01.</span>
              <span>IntentParserAgent: Extracts qualitative constraints (15k steps, rain).</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">02.</span>
              <span>ContextGraphAgent: Pulls sizing tolerances & negative return signals.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">03.</span>
              <span>ParetoScoringAgent: Multi-attribute objective function optimization.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">04.</span>
              <span>ReviewSanitizerAgent: Purges bot rings & sponsored ad inflation.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">05.</span>
              <span>ReasoningSynthesizerAgent: Decision reduction to 1 Champion + 2 finalists.</span>
            </li>
          </ul>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
            State Persistence: Redis Checkpointer for continuous resuming after user inspection.
          </div>
        </div>

        {/* Pillar 2: Context & Memory Schema */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">Pillar 2</span>
              <h3 className="text-base font-bold text-white">Context & Dynamic Property Graph</h3>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Persistent property-graph schema (Neo4j / Amazon Neptune) modeling compounding customer fidelity:
          </p>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-cyan-300 space-y-1">
            <div>(:User {`{id, name, budget_elasticity}`})</div>
            <div className="pl-4">{'↳ -[:HAS_SIZING]->'} (:Sizing {`{shoe: "10.5", width: "EE", arch: "Neutral"}`})</div>
            <div className="pl-4">{'↳ -[:ACTIVE_ITINERARY]->'} (:Itinerary {`{destination: "Tokyo", steps: 15000}`})</div>
            <div className="pl-4">{'↳ -[:RETURNED_AVERSION]->'} (:PainPoint {`{reason: "stiff heel blister"}`})</div>
            <div className="pl-4">{'↳ -[:BRAND_AFFINITY]->'} (:Brand {`{affinity: "On Running", blacklist: "FastTrend"}`})</div>
          </div>

          <p className="text-xs text-slate-400">
            Dynamic variables are versioned snapshots allowing time-travel context retrieval and seamless calendar sync.
          </p>
        </div>

        {/* Pillar 3: Web Extraction vs. Merchant APIs */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">Pillar 3</span>
              <h3 className="text-base font-bold text-white">Hybrid Catalog Extraction Stack</h3>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            A three-tier hybrid strategy balancing reliability, coverage, and real-time inventory verification:
          </p>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2">
              <span className="font-mono text-emerald-400 font-bold">Tier 1:</span>
              <span className="text-slate-300">Shopify & Retailer APIs (Shopify DraftOrder, Amazon SP-API) for real-time inventory and instant 1-tap checkout.</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2">
              <span className="font-mono text-indigo-400 font-bold">Tier 2:</span>
              <span className="text-slate-300">Affiliate feeds (Rakuten, CJ) for bulk price comparison and broad product catalog discoverability.</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2">
              <span className="font-mono text-amber-400 font-bold">Tier 3:</span>
              <span className="text-slate-300">Headless Playwright Scraper fallback with stealth browser profiles to extract specs from un-partnered merchant domains.</span>
            </div>
          </div>
        </div>

        {/* Pillar 4: Checkout & Tokenized Payment Architecture */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-semibold">Pillar 4</span>
              <h3 className="text-base font-bold text-white">One-Tap Tokenized Checkout Flow</h3>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Stripe <code className="text-amber-400 font-mono">setup_future_usage=off_session</code> architecture for seamless autonomous settlement upon single-tap human approval:
          </p>

          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>User pre-authorizes Stripe Customer payment vault once.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>Agent constructs pre-populated order (sizing 10.5 EE, shipping, duties).</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>Single tap fires atomic serverless function clearing merchant payment.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>Post-purchase feedback loop updates Twin satisfaction memory.</span>
            </li>
          </ul>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
            Immutable Audit Trail: Every LLM prompt, temperature, and score logged to tamper-proof ledger.
          </div>
        </div>

      </div>

      {/* Live Decision Trace Audit Table */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2 text-cyan-400">
            <Terminal className="w-4 h-4" />
            <h3 className="text-sm font-bold text-white">Live Execution Audit Trail (Session Ledger)</h3>
          </div>
          <span className="text-xs font-mono text-slate-500">
            {traceSteps.length} Steps Recorded
          </span>
        </div>

        <div className="space-y-2">
          {traceSteps.map((step, idx) => (
            <div key={step.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-slate-500">#{idx + 1}</span>
                <span className="text-cyan-400 font-bold">[{step.agentName}]</span>
                <span className="text-slate-200">{step.title}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                <span className="text-emerald-400 font-bold">{step.status.toUpperCase()}</span>
                <span>{step.durationMs}ms</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
