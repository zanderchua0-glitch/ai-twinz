# AI Twinz: The Autonomous Customer Twin

> **"Don't browse. Just ask."**  
> An autonomous e-commerce paradigm shift: reversing the broken model of sponsored ads, fake reviews, and endless browsing into an active digital twin that stores personal context, cross-evaluates real products with complex constraints, and executes tokenized purchases with one tap.

---

## 🚀 Quick Start

The app is built and ready to run locally:

```bash
# Option 1: Double-click run.bat (Windows)
run.bat

# Option 2: Run via Python server
python serve.py

# Option 3: Run via Vite dev server
npm run dev
```

Then visit: **`http://localhost:5173`**

---

## 🏛 The Four Foundational Technical Pillars

### 1. Architecture & Agent Orchestration (LangGraph Flow)
- **IntentParserAgent**: Parses unstructured user prompts into discrete qualitative constraints (e.g., Tokyo trip, 18°C rain, 15,000 steps/day, smart-casual dress code).
- **ContextGraphAgent**: Retrieves persistent sizing tolerances, negative return memory vectors, and brand trust rules from the property-memory graph.
- **CatalogIngestionAgent**: Coordinates multi-channel querying across APIs, feeds, and headless scraper fallbacks.
- **ParetoScoringAgent**: Multi-attribute objective function optimization (weatherproofing, step ergonomics, formality, price elasticity).
- **ReviewSanitizerAgent**: Detects coordinated bot rings, affiliate bias, and filters fake reviews down to a pure trust score.
- **ReasoningSynthesizerAgent**: Decision reduction from 40+ products down to 1 Champion + 2 Finalists with transparent "Why this fits you" reasoning.

### 2. Context & Memory Schema
- **Property-Graph Schema**: Models the compounding relationship between the customer and dynamic context:
  - `User` ➔ `Sizing` (e.g. 10.5 US, Wide EE, neutral arch)
  - `User` ➔ `ActiveItinerary` (Tokyo Nov 2026, 18°C rain showers, 15,000 steps/day)
  - `User` ➔ `ReturnHistory` (e.g. "Extreme heel blister after 3,000 steps" ➔ learned negative signal)
  - `User` ➔ `BrandAffinities` (Preferred vs. Blacklisted)
  - `User` ➔ `BudgetElasticity` ($200 target, max flex ceiling $280)
- **Live Interactivity**: Adjust any parameter in the *Twin Memory Graph* tab and click *Apply & Re-Run* to watch the agent adapt immediately.

### 3. Web Extraction vs. Merchant APIs
- **Structured Commerce APIs**: Real-time webhook-synced inventory and instant DraftOrder creation (e.g., Shopify Merchant API, 142ms latency).
- **Affiliate Feeds**: Bulk delta updates for wide product catalog discovery (e.g., Rakuten/CJ, 310ms latency).
- **Headless Scraping (Playwright)**: Zero-API fallback crawler for unstructured merchant product pages (620ms latency).
- Interactive telemetry and JSON payload inspector available in the *Scraping vs APIs* tab.

### 4. Checkout & Human-in-the-Loop Execution
- **Stripe `setup_future_usage=off_session`**: Allows one-tap authorization with zero forms, zero typing, and pre-calculated shipping & customs.
- **Zero-Friction Guarantee**: If the item doesn't fit according to the customer's tolerance, the digital twin automatically schedules courier return pickup.
- **Compounding Learning**: Successful checkouts feed satisfaction vectors back into the memory graph.

---

## 📦 Project Structure

```
project/
├── dist/                        # Production optimized build
├── src/
│   ├── types/
│   │   └── index.ts             # Domain models (Profile, Product, Orchestration, Checkout)
│   ├── engine/
│   │   ├── orchestrator.ts      # LangGraph state machine & event streamer
│   │   ├── mockCatalog.ts       # Curated multi-brand catalog (On, Cole Haan, Hoka, FastTrend)
│   │   ├── scoringEngine.ts     # Multi-attribute constraint solver
│   │   ├── reviewSanitizer.ts   # Bot review & fake star rating purge algorithm
│   │   └── scraperEngine.ts     # Ingestion simulator (APIs vs Feeds vs Playwright)
│   ├── context/
│   │   └── TwinContext.tsx      # React state provider for profile, trace, and orders
│   ├── components/
│   │   ├── Navbar.tsx           # Branding, slogan, live status & user profile pill
│   │   ├── AskBar.tsx           # "Don't browse. Just ask." prompt bar + preset scenarios
│   │   ├── OrchestratorTrace.tsx# Step-by-step LangGraph live execution trace
│   │   ├── ChampionFinalistCard.tsx # Champion product + finalists + anti-junk filter
│   │   ├── TwinMemoryGraph.tsx  # Dynamic context & return memory graph dashboard
│   │   ├── CatalogInspector.tsx # Deep dive on APIs vs Headless Web Scraping
│   │   ├── AgentArchitectureView.tsx # Technical scope analysis & session audit log
│   │   └── CheckoutModal.tsx    # One-Tap Tokenized Checkout execution & receipt
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── serve.py                     # Python HTTP server
├── run.bat                      # Windows one-click launcher
└── README.md
```
