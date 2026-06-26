# GTM Glossary, the language

Tight definitions of the vocabulary a GTM engineer needs. Used by the `gtm-wizard` skill. Each entry:
the term, a plain definition, and (where it matters) a **source/caveat**. ⚠ = a number to treat as
descriptive/contested, not a law. Add terms as they come up; cite when you do.

## Strategy & motions
- **GTM (go-to-market)**: every function that touches a customer or makes a dollar (marketing, sales,
  SE, CS, support, partnerships), not just sales+marketing. *(Jean Grosser.)*
- **Motion**: the *way* you take a product to market: PLG / sales-led / community-led / allbound.
  **Motion-fit is set by ACV, not fashion**: there's no single best motion. *(GTM Strategist 2025, n=195.)*
- **PLG (product-led growth)**: the product itself drives acquisition/conversion (self-serve, free tier).
  Fits sub-$5K ACV; has a ceiling (people won't self-serve $1M) so you add sales before you hit it.
- **Sales-led**: humans (SDR→AE) drive the deal. **ABX/ABM** (account-based) is reserved for >$25K ACV.
- **Community-led / founder-led**: distribution via a community or the founder's brand. Under $1M ARR the
  top channels are LinkedIn, warm outbound, founder brand, *not* paid ads/conferences. *(GTM Strategist 2025.)*
- **Allbound**: synchronized inbound + outbound + paid + content; treats "inbound vs outbound" as a false choice.
- **Demand capture vs demand generation**: serving people who already want the thing vs creating want for an
  outcome they didn't know to ask for.
- **ICP (Ideal Customer Profile)**: the company type you're built to serve (firmographics + fit).
- **ECP (Early Customer Profile)**: the *narrower* customer you can actually win in the first 3–18 months
  (short cycle, real pain, pays early). Comes before the broad ICP. *(Maja Voje.)*
- **Beachhead**: win one segment completely, then expand. Opposite of "spray and pray."
- **Segmentation**: slicing the market so groups buy differently. A graph: size × growth × business
  model/workload (Stripe/Vercel). Rule of thumb: 3 attributes that narrow the ICP. *(Jean Grosser.)*
- **Positioning / UVP**: the one-sentence "we are the X of Y / we do Z for W"; must precede tactics. *(FullFunnel.)*
- **Category of one / stealth offer**: a unique mechanism that makes you uncomparable; "uncovered" by testing
  many offers and reading the market, not invented. *(Jordan Crawford.)*
- **Worldview / states-not-stages**: sell to the buyer's worldview and their *current situation* (a CTO with
  no DevOps ≠ one with a team), not just a funnel stage.

## Economics & roles
- **ACV**: annual contract value. **LTV / CAC**: lifetime value / customer acquisition cost; CAC must stay
  below LTV or paid channels are a leaky bucket (a real risk at low ACV).
- **TAM / SAM / SOM**: total / serviceable / obtainable market.
- **SDR / BDR**: generate pipeline (inbound qualification or outbound prospecting). **AE**: closer.
  **RevOps**: the analytical/systems arm of revenue. **CRO**: chief revenue officer.
- **GTM engineer**: a RevOps × software-engineering hybrid who builds the data, workflows, integrations,
  and internal tools (often agents) that compound the revenue team. Coined by Clay; popularized at Vercel.

## Signals & outbound
- **Signal-based selling**: trigger + personalize outreach off real-time buying signals (observable events).
  The 2025–26 edge: "whoever reads the signals best." *(Maja Voje.)* Still leading-edge, not majority practice.
- **Buying signals**: first-party (your site: pricing-page visits), engagement (demo/trial), third-party
  (funding, hiring, exec hires, tech changes, **public-record filings**: inspections, permits, licenses).
- **Signal sequence**: detect signal → reach out while relevance is highest → tailor to the signal's context.
- **Intent data**: third-party signals that an account is researching your category (noisy; visible to competitors).
- **PQS (Pain-Qualified Segment)**: a segment defined by an *observable pain in public data*, not firmographics.
  Pain backwards, not firmographics forwards. *(Jordan Crawford.)*
- **PVP (Permissionless Value Prop)**: a message so useful the recipient would pay to receive it; you do the
  work upfront (e.g. decision-maker cards). **Headless PVP**: start from the data, find the pain, then the buyer.
- **Sequence / cadence**: the multi-touch series of outreach. **Small/targeted beats blasts** (Hunter 2026).
- **Reply rate**: replies ÷ sent. ⚠ Hunter 2026 (31M emails): **~4.5% avg sequence**, sales ~3%, the
  realistic low-ACV baseline. **Open rate** (~30%) is **unreliable** post-Apple-MPP, trust reply, not open.
- **Meeting-booked rate**: the metric that actually matters; a common pain-based test beat-bar is **1%**.

## Deliverability & sending infrastructure
- **Deliverability**: whether your email reaches the inbox (vs spam/blocked). For cold outbound it's often more
  decisive than copy.
- **SPF / DKIM / DMARC**: the three email-auth standards. Google+Yahoo 2024+ **require all three** for bulk
  senders (DMARC ≥ p=none). *(Google/Yahoo sender docs, settled; enforcement tightened Nov 2025.)*
- **Sending / secondary domain**: a separate domain for cold sends so a reputation hit doesn't touch your primary.
- **Warmup**: gradually ramping sending volume/engagement to build a new domain/inbox's reputation.
- **Sender reputation / spam rate**: keep spam complaints **< 0.3% (target < 0.1%)** or deliverability collapses.
  *(Google/Yahoo, settled.)*
- **One-click unsubscribe (RFC 8058)**: required for bulk marketing mail; honor within 2 days.
- **Catch-all**: a domain that accepts all addresses (can't verify → bounce risk). **Email verification /
  waterfall**: checking addresses across providers before sending to protect reputation (and honesty).

## Compliance
- **CAN-SPAM (US)**: opt-out regime: truthful headers, physical address, working opt-out. B2B cold email is legal if met.
- **CASL (Canada)**: stricter, generally **opt-in/consent**; narrow B2B exceptions.
- **GDPR / PECR (EU/UK)**: needs a lawful basis (often **legitimate interest** for B2B), data minimization,
  easy opt-out/erasure. The US "it's just B2B" reasoning does **not** cover EU/UK persons.
  *(Legal specifics flagged for verification, confirm before relying.)*

## Data & enrichment
- **Enrichment**: adding attributes to a bare record (a company's size and industry, a person's email, title, and LinkedIn) so you can actually target it.
- **Waterfall enrichment**: trying several data providers in sequence, a waterfall, so each one fills the gaps the previous missed. It raises your hit rate versus relying on a single source, and it is the core of how a tool like Clay builds complete records.
- **Dedup / data hygiene**: removing duplicates and stale/bad records; the trust surface of a data product.
- **Public-record data**: data from mandated public filings; a first-class signal source. *(Cannonball.)*

## Inbound, content, SEO & AEO
- **SEO**: ranking in search. **Programmatic SEO**: generating many templated pages (e.g. one per entity);
  powerful but risks thin/duplicate-content penalties if pages lack unique value.
- **AEO (Answer-Engine Optimization)**: being the source **cited** by ChatGPT/Perplexity/Claude/Google AI
  Overviews. The 2026 frontier for a data product. *(Tactics flagged for verification, don't cite as settled.)*
- **Comparison / "alternative" pages**: bottom-funnel pages targeting "[incumbent] alternative/pricing";
  high-intent, cheap to rank.

## PLG, metrics & testing
- **Activation**: the first "aha"/value moment that predicts retention.
- **Free-to-paid conversion**: ⚠ **8% median** across B2B SaaS, bimodal; credit-card trials ~30% vs no-card ~5–6%
  (selection bias, not a causal lever). *(ChartMogul Jan 2026, replaces stale OpenView 2022.)*
- **Funnel / metric tree**: the chain of conversion metrics from first-touch to expansion.
- **Attribution**: assigning credit for a conversion to channels/touches.
- **Two-week test / fixed-window test**: validate a single channel over a fixed window before scaling; judge on
  real outcomes (replies/meetings), not vanity (opens). "Don't test multiple channels at once." *(Cannonball.)*
- **Validate-before-scale**: prove a motion manually before automating or paying. (= VALIDATE-1.)

## AI / GTM-engineering tooling
- **Clay**: orchestration + waterfall enrichment + CRM plumbing. **Claygent / Navigator**: Clay's AI agent;
  Navigator can scrape non-API/public-record web UIs (SEC/FINRA). *(Clay, vendor.)*
- **Claude Code**: agent in your terminal; the "GTM OS" in the practitioner playbooks.
- **Skill**: a codified standard operating procedure for an agent (a prompt plus front matter), loaded on demand only when it is needed.
- **Sub-agent**: offloading a task to a fresh context window so the main agent only sees the result. It is a way to manage context, not to role-play a persona.
- **MCP (Model Context Protocol)**: a standard tool interface that lets an agent use an app, but its tool definitions stay in context the whole time, which can crowd the model.
- **CLI**: a code-based tool interface the agent calls, loaded only when used, so it is leaner than MCP for many tasks.
- **Context engineering**: structuring/compacting the right info so the model performs; "context is the edge."
- **Karpathy loop**: pick one metric + a ground truth; spawn challengers that must beat it to win; self-improving.
- **GTM orchestrator / agent**: a chain of skills (AI + tools + a feedback loop) that runs a GTM play end-to-end.
- **The four-layer stack (Clay)**: Data Foundation → Orchestration → Execution → Agents; the data foundation
  gates everything. *(Clay, vendor.)*
