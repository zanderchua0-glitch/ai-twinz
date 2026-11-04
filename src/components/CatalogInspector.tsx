import React, { useState, useEffect } from 'react';
import { 
  Globe2, 
  Terminal, 
  Zap, 
  RefreshCw, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Server, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';
import { simulateMultiSourceExtraction, ExtractionStreamItem } from '../engine/scraperEngine';

export const CatalogInspector: React.FC = () => {
  const [streams, setStreams] = useState<ExtractionStreamItem[]>([]);
  const [selectedStream, setSelectedStream] = useState<ExtractionStreamItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadStreams = async () => {
    setIsLoading(true);
    const res = await simulateMultiSourceExtraction();
    setStreams(res);
    setSelectedStream(res[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadStreams();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-1">
            <Globe2 className="w-4 h-4" />
            <span>FOUNDATIONAL ARCHITECTURE #3</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            Web Extraction vs. Merchant APIs Inspector
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Live comparison of structured merchant APIs, affiliate partner feeds, and headless browser scraping fallbacks for catalog, inventory, and pricing telemetry.
          </p>
        </div>

        <button
          onClick={loadStreams}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold border border-slate-700 transition-colors"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
          <span>Test Multi-Source Crawl</span>
        </button>
      </div>

      {/* Comparison Matrix Table */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 overflow-x-auto">
        <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          Technical Trade-Off Matrix (MVP Architecture)
        </h3>

        <table className="w-full text-left text-xs text-slate-300">
          <thead>
            <tr className="border-b border-slate-800 text-slate-500 font-mono uppercase text-[11px]">
              <th className="pb-3 font-semibold">Source Channel</th>
              <th className="pb-3 font-semibold">Latency</th>
              <th className="pb-3 font-semibold">Schema Reliability</th>
              <th className="pb-3 font-semibold">Inventory Freshness</th>
              <th className="pb-3 font-semibold">1-Tap Checkout Ready?</th>
              <th className="pb-3 font-semibold">MVP Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
            <tr className="hover:bg-slate-800/30">
              <td className="py-3 font-sans font-semibold text-cyan-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Shopify Merchant API
              </td>
              <td className="py-3 text-emerald-400 font-bold">142ms</td>
              <td className="py-3 text-slate-200">High (Structured REST/GraphQL)</td>
              <td className="py-3 text-emerald-400">Instant (Webhook synced)</td>
              <td className="py-3 text-emerald-400 font-semibold">Yes (Tokenized DraftOrder)</td>
              <td className="py-3 text-slate-200 font-sans font-medium">Primary Partner Target</td>
            </tr>

            <tr className="hover:bg-slate-800/30">
              <td className="py-3 font-sans font-semibold text-indigo-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                Affiliate Partner Feed (Rakuten/CJ)
              </td>
              <td className="py-3 text-slate-300">310ms</td>
              <td className="py-3 text-slate-200">Moderate (Bulk JSON/CSV)</td>
              <td className="py-3 text-amber-400">Delta Sync (10-15 min drift)</td>
              <td className="py-3 text-amber-400">Deep Link / Tokenized Affiliate</td>
              <td className="py-3 text-slate-200 font-sans font-medium">Secondary Catalog Scale</td>
            </tr>

            <tr className="hover:bg-slate-800/30">
              <td className="py-3 font-sans font-semibold text-amber-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Headless Web Scraper (Playwright)
              </td>
              <td className="py-3 text-amber-400 font-bold">620ms</td>
              <td className="py-3 text-rose-300">Fragile (DOM Selector Drift)</td>
              <td className="py-3 text-cyan-300">Real-time on scrape</td>
              <td className="py-3 text-slate-400">Synthetic Form Filling / HITL</td>
              <td className="py-3 text-slate-200 font-sans font-medium">Zero-API Fallback Crawler</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Live Stream Inspector & Payload Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Stream Selector */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
            Simulated Ingestion Streams:
          </div>

          {streams.map((stream) => {
            const isSelected = selectedStream?.sourceType === stream.sourceType;
            return (
              <div
                key={stream.sourceType}
                onClick={() => setSelectedStream(stream)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-950/40'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-slate-200">{stream.sourceType}</span>
                  <span className="font-mono text-cyan-400 font-semibold">{stream.latencyMs}ms</span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono truncate mb-2">
                  {stream.endpoint}
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono border-t border-slate-800/60 pt-2">
                  <span>{stream.freshness}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> {stream.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Raw Payload & Headers Inspector */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-5 space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400">
              <Terminal className="w-4 h-4" />
              <span className="font-bold">Raw Telemetry & Extracted JSON Payload</span>
            </div>
            <span className="text-[10px] text-slate-500 uppercase">
              {selectedStream?.sourceType.split(' ')[0]}
            </span>
          </div>

          {selectedStream && (
            <div className="space-y-4">
              <div>
                <div className="text-slate-500 text-[10px] uppercase mb-1">HTTP Request & Synthetic Headers</div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                  {Object.entries(selectedStream.headers).map(([k, v]) => (
                    <div key={k} className="flex gap-2">
                      <span className="text-cyan-400">{k}:</span>
                      <span className="text-slate-200">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-slate-500 text-[10px] uppercase mb-1">Normalized Extraction Payload</div>
                <pre className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-cyan-300 text-[11px] overflow-x-auto max-h-64 leading-relaxed">
                  {selectedStream.rawSnippet}
                </pre>
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
