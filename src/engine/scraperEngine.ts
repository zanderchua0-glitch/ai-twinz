import { ExtractionSourceType } from '../types';

export interface ExtractionStreamItem {
  sourceType: ExtractionSourceType;
  endpoint: string;
  latencyMs: number;
  itemCount: number;
  freshness: string;
  sampleItem: string;
  status: 'synced' | 'fallback_crawled' | 'cached';
  headers: Record<string, string>;
  rawSnippet: string;
}

export async function simulateMultiSourceExtraction(): Promise<ExtractionStreamItem[]> {
  return [
    {
      sourceType: 'Shopify Merchant API',
      endpoint: 'https://api.on-running.com/v1/inventory/cloud-5-wp',
      latencyMs: 142,
      itemCount: 14,
      freshness: 'Real-time (Webhook synced 4s ago)',
      sampleItem: 'On Running Cloud 5 Waterproof (Size 10.5 EE Available)',
      status: 'synced',
      headers: {
        'x-merchant-id': 'on_cloud_global_direct',
        'x-inventory-level': 'sufficient (18 units at Tokyo East Hub)',
        'cache-control': 'private, max-age=30'
      },
      rawSnippet: JSON.stringify({
        sku: 'ON-CL5-WP-BLK-105W',
        inventory: 18,
        price_cents: 16999,
        sizing_table: { us: '10.5', width: 'Wide', heel_drop_mm: 8 }
      }, null, 2)
    },
    {
      sourceType: 'Affiliate Partner Feed (CJ/Rakuten)',
      endpoint: 'https://feed.rakuten.com/v2/merchants/colehaan/feed.json',
      latencyMs: 310,
      itemCount: 8,
      freshness: 'Updated 12 mins ago (Delta sync)',
      sampleItem: 'Cole Haan ØriginalGrand Waterproof Oxford',
      status: 'synced',
      headers: {
        'x-affiliate-network': 'Rakuten Advertising v2',
        'x-commission-rate': '4.5%',
        'content-type': 'application/json'
      },
      rawSnippet: JSON.stringify({
        product_id: 'CH-ORIG-WP-01',
        sale_price: 180.00,
        regular_price: 210.00,
        affiliate_tracking_params: 'aitwinz_tokenized_subid_994'
      }, null, 2)
    },
    {
      sourceType: 'Headless Web Scraper (Playwright)',
      endpoint: 'https://hoka.com/en/us/transport-gore-tex.html',
      latencyMs: 620,
      itemCount: 4,
      freshness: 'Live DOM extraction (Chromium headless)',
      sampleItem: 'Hoka Transport GORE-TEX Commuter',
      status: 'fallback_crawled',
      headers: {
        'User-Agent': 'AITwinzCustomerAgent/1.0 (+https://aitwinz.ai/bot)',
        'Sec-Ch-Ua': '"Chromium";v="128"',
        'x-rendered-with': 'Playwright-stealth'
      },
      rawSnippet: JSON.stringify({
        extracted_via: 'css_selector: .product-detail__price, .specs-table',
        price_scraped: 175.00,
        in_stock_badge_detected: true,
        json_ld_schema: 'Product: Hoka Transport GTX'
      }, null, 2)
    }
  ];
}
