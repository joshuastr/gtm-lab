# Advisor, "What GTM motion fits my company?"

The source for the app's **Advisor**. A short, honest decision aid (not a deep tree): the primary lever is
**ACV**, refined by **ARR stage** and **ICP type**. Grounded in the GTM Strategist 2025 report (Voje/Poyar,
n=195), motion-fit is set by economics, not fashion. Every recommendation carries its source + caveats.

Format (parsed by `app/scripts/build-data.mjs`): `## Band` (the ACV gate) then `- key: value` lines;
`refine:` lines add ARR/ICP context.

## Q1, Annual contract value (ACV)?
- option: Under $5K / self-serve → band: self-serve
- option: $5K–$25K → band: hybrid
- option: Over $25K → band: enterprise

## Band: self-serve  (ACV under $5K)
- motion: Product-led (self-serve) + warm, founder-led, signal-based outbound
- channels: Programmatic SEO/AEO (the compounding bet), comparison/"alternative" pages, founder brand + LinkedIn, dogfooded outbound
- avoid: Paid ads, conferences, heavy ABX, premature at this ACV (CAC > LTV risk)
- why: PLG dominates sub-$5K ACV; under $1M ARR the top-performing channels are LinkedIn, warm outbound, and founder brand
- source: GTM Strategist 2025 (Voje/Poyar, n=195)
- caveat: PLG has a ceiling (people won't self-serve $1M), add a sales motion before you hit it. Lead with signal-based outbound, not spray-and-pray.
- refine: ARR < $1M → validate-before-scale; 10 manual messages before any automation; one channel at a time.
- refine: ICP = data/RevOps buyer → the data IS the marketing asset; prioritize programmatic SEO/AEO + a verified-benchmark content angle.

## Band: hybrid  (ACV $5K–$25K)
- motion: Self-serve entry + sales-assist on expansion; signal-based outbound to higher-fit accounts
- channels: SEO/AEO + content, warm/signal outbound, a light SDR motion as inbound proves out
- avoid: Full enterprise ABX machinery before the repeatable motion exists
- why: The $5K–$25K band is genuinely hybrid, neither pure PLG nor pure enterprise
- source: GTM Strategist 2025 (Voje/Poyar, n=195)
- caveat: Add RevOps/measurement early so you can see what's working before scaling spend.
- refine: ECP first, target the segment you can win in 3–18 months (short cycle, real pain) before the broad ICP. (Maja Voje)

## Band: enterprise  (ACV over $25K)
- motion: Account-based (ABX) + sales-led; deployed/solutions engineering for complex buys
- channels: ABM plays, exec/founder relationships, events, partnerships; outbound is multi-threaded and research-heavy
- avoid: Relying on self-serve PLG to carry large deals
- why: ABX takes the lead above $25K ACV; buying is committee-driven and risk-averse
- source: GTM Strategist 2025 (Voje/Poyar, n=195)
- caveat: ~80% of buyers buy to avoid pain / reduce risk, sell de-risking, not just upside. (Jean Grosser / April Dunford)
- refine: Enterprise prospecting is the last thing AI fully automates, keep humans on multi-threaded accounts.

## Cross-band notes (always show)
- Fundamentals gate everything: segmentation → ECP/ICP → positioning **before** tactics. (FullFunnel 9-step)
- Validate before scaling: a fixed-window test (one channel, ~1,000 activities, beat 1% meeting-booked) before automation. (Cannonball)
- "AI is commoditized; your data/context is the edge." Differentiate on proprietary data + freshness, not access. (Clay/Octave)
