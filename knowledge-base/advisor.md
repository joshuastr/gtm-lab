# Advisor, "What GTM motion fits my company?"

The source for the app's **Advisor**. A short, honest decision aid (not a deep tree). It first asks what
**kind of business** you are, because channels and economics differ sharply across software, hardware, and
services. For software the primary lever is **ACV**. Grounded in the GTM Strategist 2025 report (Voje/Poyar,
n=195) and practitioner sources; every recommendation carries its source and caveats.

Format (parsed by `app/scripts/build-data.mjs`): `## Archetype: <question>` with `- option: label | track | sub`;
`## ACV question: <question>`; `## Band: <track> | <label> | <acv or descriptor>` then `- key: value` lines;
`## Cross-band notes` items always show.

## Archetype: What are you taking to market?
- option: Software / digital | saas | SaaS or a digital subscription
- option: Physical / hardware | hardware | A product you manufacture and ship
- option: Service / agency | services | You sell expertise and people's time

## ACV question: What is your annual contract value (ACV)?

## Band: saas | self-serve | ACV under $5K
- motion: Product-led (self-serve) + warm, founder-led, signal-based outbound
- channels: Programmatic SEO/AEO (the compounding bet), comparison and alternative pages, founder brand + LinkedIn, dogfooded outbound
- avoid: Paid ads, conferences, heavy ABX, premature at this ACV (CAC > LTV risk)
- why: PLG dominates sub-$5K ACV; under $1M ARR the top-performing channels are LinkedIn, warm outbound, and founder brand
- source: GTM Strategist 2025 (Voje/Poyar, n=195)
- caveat: PLG has a ceiling (people will not self-serve a $1M deal), so add a sales motion before you hit it. Lead with signal-based outbound, not spray-and-pray.
- refine: ARR < $1M → validate-before-scale; 10 manual messages before any automation; one channel at a time.
- refine: ICP = data/RevOps buyer → the data IS the marketing asset; prioritize programmatic SEO/AEO + a benchmark content angle.
- see: Start Here, plus the Outbound and Inbound plays

## Band: saas | hybrid | ACV $5K to $25K
- motion: Self-serve entry + sales-assist on expansion; signal-based outbound to higher-fit accounts
- channels: SEO/AEO + content, warm and signal outbound, a light SDR motion as inbound proves out
- avoid: Full enterprise ABX machinery before the repeatable motion exists
- why: The $5K to $25K band is genuinely hybrid, neither pure PLG nor pure enterprise
- source: GTM Strategist 2025 (Voje/Poyar, n=195)
- caveat: Add RevOps and measurement early so you can see what is working before scaling spend.
- refine: ECP first; target the segment you can win in 3 to 18 months (short cycle, real pain) before the broad ICP. (Maja Voje)
- see: the Foundations and Measurement plays

## Band: saas | enterprise | ACV over $25K
- motion: Account-based (ABX) + sales-led; deployed and solutions engineering for complex buys
- channels: ABM plays, exec and founder relationships, events, partnerships; outbound is multi-threaded and research-heavy
- avoid: Relying on self-serve PLG to carry large deals
- why: ABX takes the lead above $25K ACV; buying is committee-driven and risk-averse
- source: GTM Strategist 2025 (Voje/Poyar, n=195)
- caveat: Around 80% of buyers buy to avoid pain and reduce risk, so sell de-risking, not just upside. (Jean Grosser / April Dunford)
- refine: Enterprise prospecting is the last thing AI fully automates, so keep humans on multi-threaded accounts.
- see: the Foundations play (positioning)

## Band: hardware | Hardware and physical products | A product you make and ship
- motion: Channel-led: prove DTC unit economics first, then expand to marketplace, retail, and distribution; for energy devices, the utility channel
- channels: Your own DTC store, Amazon and marketplaces, retail and big-box, the pro and distributor channel, utility rebate and demand-response programs
- avoid: Scaling paid ads or opening retail before DTC unit economics and CAC payback are proven; cold-email outbound (wrong motion entirely)
- why: Hardware lives on margin and channel fit, not outbound. Discovery happens through retail, marketplaces, ecosystem, reviews, and partnerships, and compatibility plus installation are the make-or-break friction
- source: DTC and retail practitioner guidance (Shopify, Predictable Designs); utility demand-response programs (ecobee, SRP)
- caveat: For energy and connected devices, utility rebate and demand-response programs are often the highest-leverage channel; they turn a one-time sale into recurring revenue and most founders underuse them.
- see: the Hardware and physical products plays

## Band: services | Services and agencies | You sell expertise and time
- motion: Niche-led: specialize hard, build founder authority, run a referral and consultative-sale engine, then productize and move to retainers
- channels: A clear niche and positioning, founder authority and content, referrals and partner networks, targeted warm and signal outbound, productized offers
- avoid: Generalist positioning (competes on price), hourly billing, and leaving referrals to chance
- why: For services the founder's reputation is the product and the work cannot be trialed, so specialization, proof, and referrals win. Specialists charge 2 to 3x generalists and referrals are the top acquisition channel
- source: Agency niche and referral data (AgencyAnalytics, Vendasta); Consulting Success (productized services, retainers)
- caveat: Productizing your service and moving from hourly to retainers or value-based pricing is the biggest lever on both margin and predictability.
- see: the Services and agencies plays

## Cross-band notes (always show)
- Fundamentals gate everything: segmentation → ECP/ICP → positioning before tactics. (FullFunnel 9-step)
- Validate before scaling: prove a motion by hand first (a small fixed-window test) before you automate it or pour in budget. (Cannonball)
- "AI is commoditized; your data and context are the edge." Differentiate on proprietary data and freshness, not access. (Clay/Octave)
