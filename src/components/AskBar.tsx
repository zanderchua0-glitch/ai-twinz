import React, { useState } from 'react';
import { useTwin } from '../context/TwinContext';
import { Sparkles, Send, RotateCcw, CloudRain, Footprints, DollarSign, Shirt, CheckCircle2, X } from 'lucide-react';

export const AskBar: React.FC = () => {
  const { 
    query, 
    setQuery, 
    isRunning, 
    triggerSearch, 
    resetToPreset,
    profile,
    executeNaturalLanguageCommand,
    latestMemoryUpdateMessage,
    clearLatestMemoryMessage
  } = useTwin();

  const [commandFeedback, setCommandFeedback] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRunning || !query.trim()) return;

    // Check if user input is a natural language Twin memory update command
    const cmdResult = executeNaturalLanguageCommand(query);
    if (cmdResult.executed && cmdResult.feedback) {
      setCommandFeedback(cmdResult.feedback);
      setTimeout(() => {
        setCommandFeedback(null);
      }, 5000);
      return;
    }

    // Otherwise standard search
    triggerSearch();
  };

  const handlePresetClick = (presetKey: string) => {
    resetToPreset(presetKey);
  };

  return (
    <div className="w-full max-w-5xl mx-auto mb-8">
      {/* Hero Title & Subtext */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          Autonomous Multi-Agent Commerce Intelligence
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
          Don't browse. <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Just ask.</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Your active digital twin holds your sizing, travel plans, return history, and lifestyle constraints. It filters fake reviews, scores real products, and prepares one-tap checkout.
        </p>
      </div>

      {/* Memory Update Toast Banner */}
      {(commandFeedback || latestMemoryUpdateMessage) && (
        <div className="mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-cyan-950/90 to-emerald-950/90 border border-emerald-500/50 flex items-center justify-between text-xs text-emerald-200 shadow-xl shadow-cyan-950/40 animate-fadeIn">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 animate-pulse" />
            <span className="font-semibold">{commandFeedback || latestMemoryUpdateMessage}</span>
          </div>
          <button 
            onClick={() => { setCommandFeedback(null); clearLatestMemoryMessage(); }}
            className="p-1 hover:text-white transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Input Box */}
      <form 
        onSubmit={handleSubmit}
        className="relative flex items-center bg-slate-900/90 border-2 border-slate-700/80 focus-within:border-cyan-500/80 rounded-2xl p-2 shadow-2xl shadow-cyan-950/40 transition-all duration-300 backdrop-blur-xl"
      >
        <div className="pl-3 pr-2 text-cyan-400">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask anything or command Twin: 'Update my shoe size to 11 US', 'Set budget to $260', 'Blacklist Nike'..."
          disabled={isRunning}
          className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm md:text-base px-2 py-3 focus:outline-none font-medium"
        />

        <div className="flex items-center gap-2 pr-1">
          <button
            type="submit"
            disabled={isRunning || !query.trim()}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
          >
            {isRunning ? (
              <>
                <RotateCcw className="w-4 h-4 animate-spin" />
                <span>Evaluating...</span>
              </>
            ) : (
              <>
                <span>Ask Twin</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Dynamic Context Signals Loaded */}
      <div className="flex flex-wrap items-center justify-between gap-3 mt-3 px-1 text-xs text-slate-400">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-slate-500 font-mono text-[11px] uppercase tracking-wider">Active Twin Context:</span>
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-cyan-300 font-medium">
            <CloudRain className="w-3.5 h-3.5 text-cyan-400" />
            <span>{profile.activeItinerary.destination.split('(')[0]} ({profile.activeItinerary.temperatureC}°C)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-emerald-300 font-medium">
            <Footprints className="w-3.5 h-3.5 text-emerald-400" />
            <span>{profile.activeItinerary.expectedDailySteps.toLocaleString()} steps/day</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-indigo-300 font-medium">
            <Shirt className="w-3.5 h-3.5 text-indigo-400" />
            <span>{profile.sizing.shoeSize} {profile.sizing.shoeWidth} • {profile.sizing.shirtSize}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-amber-300 font-medium">
            <DollarSign className="w-3.5 h-3.5 text-amber-400" />
            <span>Target ${profile.budgetElasticity.preferredTarget} (Max ${profile.budgetElasticity.maxFlexCeiling})</span>
          </div>
        </div>

        {/* Preset Switchers (Fixes Preset Bug with Dynamic Multi-Category Catalog) */}
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-[11px] font-mono uppercase">Category Presets:</span>
          <button
            type="button"
            onClick={() => handlePresetClick('tokyo')}
            className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-medium border border-slate-700"
          >
            🇯🇵 Tokyo 15k Steps
          </button>
          <button
            type="button"
            onClick={() => handlePresetClick('london')}
            className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-medium border border-slate-700"
          >
            🇬🇧 London Rain Shell
          </button>
          <button
            type="button"
            onClick={() => handlePresetClick('electronics')}
            className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-medium border border-slate-700"
          >
            🎧 Long Flight ANC
          </button>
        </div>
      </div>
    </div>
  );
};
