import React, { useState } from 'react';
import { TwinProvider, useTwin } from './context/TwinContext';
import { Navbar } from './components/Navbar';
import { AskBar } from './components/AskBar';
import { OrchestratorTrace } from './components/OrchestratorTrace';
import { ChampionFinalistCard } from './components/ChampionFinalistCard';
import { TwinMemoryGraph } from './components/TwinMemoryGraph';
import { CatalogInspector } from './components/CatalogInspector';
import { AgentArchitectureView } from './components/AgentArchitectureView';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductCandidate } from './types';
import { Sparkles, Terminal, Shield, ArrowUpRight } from 'lucide-react';

const AppContent: React.FC = () => {
  const { activeView, setActiveView } = useTwin();
  const [checkoutProduct, setCheckoutProduct] = useState<ProductCandidate | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Navigation */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeView === 'concierge' && (
          <div className="space-y-6 animate-fadeIn">
            <AskBar />
            <OrchestratorTrace />
            <ChampionFinalistCard onOpenCheckout={(p) => setCheckoutProduct(p)} />
          </div>
        )}

        {activeView === 'memory_graph' && (
          <div className="animate-fadeIn">
            <TwinMemoryGraph />
          </div>
        )}

        {activeView === 'catalog_extraction' && (
          <div className="animate-fadeIn">
            <CatalogInspector />
          </div>
        )}

        {activeView === 'agent_architecture' && (
          <div className="animate-fadeIn">
            <AgentArchitectureView />
          </div>
        )}
      </main>

      {/* Checkout Modal */}
      {checkoutProduct && (
        <CheckoutModal
          product={checkoutProduct}
          onClose={() => setCheckoutProduct(null)}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/60 py-8 px-4 mt-16 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold tracking-tight text-slate-300">AI TWINZ</span>
            <span>•</span>
            <span>The Autonomous Customer Twin</span>
            <span>•</span>
            <span className="text-cyan-400 font-medium">"Don't browse. Just ask."</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button 
              onClick={() => setActiveView('agent_architecture')}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <span>LangGraph Framework</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
            <button 
              onClick={() => setActiveView('catalog_extraction')}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <span>API vs Scraping</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
            <button 
              onClick={() => setActiveView('memory_graph')}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <span>Context Schema</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
};

export function App() {
  return (
    <TwinProvider>
      <AppContent />
    </TwinProvider>
  );
}

export default App;
