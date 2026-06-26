# GTM Benchmarks

The source for the app's **Benchmarks** section. A reference of useful GTM benchmarks, each with its
source and the context that matters. Numbers reflect the sample they came from, so read the caveat, not
just the number.

Format (parsed by `app/scripts/build-data.mjs`): `### Metric` then `- key: value` lines.

## Outbound

### Cold email reply rate (avg sequence)
- value: ~4.5%
- topic: Outbound
- source: Hunter 2026 State of Cold Email (31M emails)
- url: https://hunter.io/the-state-of-cold-email/
- caveat: Self-selected, sophisticated user base. By use case, sales ~3%, marketing 6.2%, PR/link-building 13%, headhunting 7.5%. For low-ACV sales outreach, ~3% is the realistic baseline.

### Cold email open rate
- value: ~30% (unreliable metric)
- topic: Outbound
- source: Hunter 2026 State of Cold Email
- url: https://hunter.io/the-state-of-cold-email/
- caveat: Open rate is unreliable post-Apple Mail Privacy Protection, so do not optimize on it; trust reply rate.

### Small/targeted lists vs blasts
- value: 21–50 recipients 6.2% reply vs 500+ at 2.4%; 1–2 people/company 5.1% vs 3+ at 3.5%
- topic: Outbound
- source: Hunter 2026 (corroborated by Snov.io)
- url: https://hunter.io/the-state-of-cold-email/
- caveat: Observational. The lever is targeting quality, not mechanically shrinking the list. Supports narrow, signal-based outbound.

## Deliverability (Google/Yahoo 2024+, enforcement tightened Nov 2025)

### Authentication required for bulk senders
- value: SPF + DKIM + DMARC (p=none floor); From-header aligned with SPF or DKIM
- topic: Deliverability
- source: Google & Yahoo sender guidelines
- url: https://support.google.com/a/answer/81126
- caveat: Build to the full standard from day one. The ~5,000/day "bulk" threshold applies broadly, even below it.

### Spam complaint rate ceiling
- value: < 0.3% hard, target < 0.1%
- topic: Deliverability
- source: Google & Yahoo sender guidelines
- url: https://senders.yahooinc.com/best-practices/
- caveat: Yahoo calculates on inbox-delivered mail, so its number runs higher than your ESP's. Exceeding 0.3% collapses deliverability.

### One-click unsubscribe
- value: Required (RFC 8058 List-Unsubscribe-Post) + visible body link; honor within 2 days
- topic: Deliverability
- source: Google & Yahoo sender guidelines
- url: https://support.google.com/a/answer/81126
- caveat: For bulk marketing/subscribed mail.

## Motion & strategy

### Motion-fit by ACV
- value: PLG/self-serve dominates < $5K ACV; ABX/account-based leads > $25K ACV; under $1M ARR the top channels are LinkedIn, warm outbound, founder brand
- topic: Strategy
- source: GTM Strategist 2025 State of B2B GTM Report (Maja Voje + Kyle Poyar, n=195)
- url: https://knowledge.gtmstrategist.com/p/b2b-gtm-2025-report-trends-insights
- caveat: "No correlation between GTM motion and growth rate", so fit beats fashion. Not paid/conferences/heavy ABX for a low-ACV product.

### AI in GTM, adoption vs impact
- value: 74% have a top-down AI mandate, 91% use ChatGPT, but only 24% report big impact; 41% use agents, 21% multi-agent
- topic: Strategy
- source: GTM Strategist 2025 State of B2B GTM Report (n=195)
- url: https://knowledge.gtmstrategist.com/p/b2b-gtm-2025-report-trends-insights
- caveat: Agentic GTM is still an edge, not table stakes.

## PLG & self-serve

### Free-to-paid conversion (median)
- value: ~8% median (bimodal, 10× gap top vs bottom quintile)
- topic: PLG
- source: ChartMogul 2026 SaaS Conversion Report (200 products, $1–10M ARR)
- url: https://chartmogul.com/reports/saas-conversion-report/
- caveat: The current replacement for the frozen OpenView 2022 figures. Few products actually sit at the median.

### Free trial: credit-card-required vs not
- value: CC-required ~30% vs no-card ~5–6%
- topic: PLG
- source: ChartMogul 2026 SaaS Conversion Report
- url: https://chartmogul.com/reports/saas-conversion-report/
- caveat: This is selection bias, not a causal lever. A card wall filters serious buyers, so don't expect 30% just by adding a card.

## Testing

### Fixed-window outbound test bar
- value: 1,000 activities on a single channel; beat a 1% meeting-booked rate before scaling
- topic: Testing
- source: Cannonball GTM "Outbound Campaign Testing Bible" (Jordan Crawford)
- url: https://cannonballgtm.com/
- caveat: Practitioner heuristic scoped to pain-based outbound. "Never test two channels at once." Not a universal law.
