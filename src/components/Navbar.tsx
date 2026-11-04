import React from 'react';
import { useTwin } from '../context/TwinContext';
import { 
  Sparkles, 
  Cpu, 
  Database, 
  Globe2, 
  FileCode2, 
  Plane, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { profile, activeView, setActiveView } = useTwin();

  return (
    <header className="sticky top-0 z-40 bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand & Slogan */}
        <div className="flex items-center gap-3.5">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#090d16] rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse-slow" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-lg bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                AI TWINZ
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 font-semibold">
                Autonomous Twin
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium tracking-wide">
              Don't browse. <span className="text-cyan-400 font-semibold">Just ask.</span>
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium">
          <button
            onClick={() => setActiveView('concierge')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeView === 'concierge'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Twin Concierge</span>
          </button>

          <button
            onClick={() => setActiveView('memory_graph')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeView === 'memory_graph'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Memory Graph</span>
          </button>

          <button
            onClick={() => setActiveView('catalog_extraction')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeView === 'catalog_extraction'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>Scraping vs APIs</span>
          </button>

          <button
            onClick={() => setActiveView('agent_architecture')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeView === 'agent_architecture'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <FileCode2 className="w-3.5 h-3.5" />
            <span>Arch & Audit</span>
          </button>
        </nav>

        {/* User Twin Profile Pill */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/90 text-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-400">Context:</span>
            <span className="font-medium text-slate-200 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-cyan-400" />
              Tokyo (15k steps)
            </span>
          </div>

          <div 
            onClick={() => setActiveView('memory_graph')}
            className="flex items-center gap-2.5 pl-2 pr-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 hover:border-cyan-500/50 cursor-pointer transition-colors"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-7 h-7 rounded-full object-cover border border-cyan-400/50"
            />
            <div className="text-left text-xs">
              <div className="font-semibold text-slate-200 leading-tight">{profile.name}</div>
              <div className="text-[10px] text-cyan-400 font-mono">{profile.sizing.shoeSize} {profile.sizing.shoeWidth}</div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};
