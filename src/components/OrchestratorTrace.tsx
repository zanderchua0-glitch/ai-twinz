import React, { useState } from 'react';
import { useTwin } from '../context/TwinContext';
import { 
  CheckCircle2, 
  RotateCcw, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Bot, 
  Layers, 
  Cpu, 
  ShieldAlert, 
  Sparkles 
} from 'lucide-react';
import { AgentTraceStep } from '../types';

export const OrchestratorTrace: React.FC = () => {
  const { traceSteps, isRunning, orchestrationStage } = useTwin();
  const [expandedStepId, setExpandedStepId] = useState<string | null>(null);

  if (traceSteps.length === 0 && !isRunning) {
    return null;
  }

  const toggleExpand = (id: string) => {
    setExpandedStepId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-5xl mx-auto mb-8 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 sm:p-5 backdrop-blur-md">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white flex items-center gap-2">
              LangGraph Multi-Agent Orchestration Pipeline
              {isRunning && (
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-[10px] text-cyan-300 font-mono animate-pulse">
                  <RotateCcw className="w-3 h-3 animate-spin" />
                  Live Trace
                </span>
              )}
            </h2>
            <p className="text-xs text-slate-400">
              Parallel agents executing intent parsing, memory retrieval, multi-source extraction, and review sanitization.
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>Stage: {orchestrationStage}</span>
        </div>
      </div>

      {/* Steps List */}
      <div className="space-y-2.5">
        {traceSteps.map((step: AgentTraceStep, index: number) => {
          const isExpanded = expandedStepId === step.id;
          const isStepRunning = step.status === 'running';

          return (
            <div 
              key={step.id} 
              className={`rounded-xl border transition-all ${
                isStepRunning 
                  ? 'bg-slate-800/80 border-cyan-500/50 shadow-md shadow-cyan-950/30' 
                  : 'bg-slate-950/40 border-slate-800/70 hover:border-slate-700'
              }`}
            >
              <div 
                onClick={() => toggleExpand(step.id)}
                className="flex items-center justify-between p-3 cursor-pointer select-none"
              >
                <div className="flex items-center gap-3">
                  {/* Status Icon */}
                  <div className="flex-shrink-0">
                    {isStepRunning ? (
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center">
                        <RotateCcw className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/80 flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                    )}
                  </div>

                  {/* Title & Agent */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                        [{step.agentName}]
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-200">
                        {step.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {step.details}
                    </p>
                  </div>
                </div>

                {/* Duration & Expand Toggle */}
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                  <span className="hidden md:inline-flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {step.durationMs}ms
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </div>

              {/* Expanded Data Snapshot */}
              {isExpanded && (
                <div className="px-4 pb-3 pt-1 border-t border-slate-800/60 bg-slate-950/80 rounded-b-xl text-xs space-y-2">
                  <div className="text-slate-300 leading-relaxed">
                    {step.details}
                  </div>

                  {step.dataSnapshot && (
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        Payload / Context State:
                      </div>
                      <pre className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto">
                        {JSON.stringify(step.dataSnapshot, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
