# GTM Curriculum

The learning path the `gtm-wizard` skill teaches. Nine modules, each = a **concept to learn** + the
**grounding** + a **runnable play** (learning becomes proof-of-work) + an **explain-back checkpoint**
(you haven't learned it until you can explain it). Follow the learner's curiosity; this is a guide, not a
rail. Default order builds dependencies. Plays apply to **a real company of the learner's choice.**

| # | Module | Learn (grounding) | Do (the play) | Explain-back checkpoint |
|---|--------|-------------------|---------------|--------------------------|
| 1 | **Foundations** — motions, ICP/ECP, segmentation, positioning, pricing | `glossary.md` (strategy) | Pick a company → name its motion + a 3-attribute ECP | "Why does motion-fit depend on ACV, not preference?" |
| 2 | **GTM Engineering** — the role, the stack, Claude+Clay, skills/agents | `glossary.md` (AI tooling) | Describe one workflow you'd turn into a skill + why | "Skill vs sub-agent — what's each for?" |
| 3 | **Signal-Based Selling** — signals, the signal sequence, allbound | `glossary.md` (signals) | Find a real public buying signal for a company → the *situation* behind it | "Why is the situation more useful than the raw signal?" |
| 4 | **Outbound & Deliverability** — messaging (PQS/PVP), sequencing, SPF/DKIM/DMARC, spam rate | `glossary.md` (outbound + deliverability) | Run the **`pqs-pvp`** skill on a company; draft a deliverability preflight | "What 4 things must a bulk sender do, and why <0.3% spam?" |
| 5 | **Data & Enrichment** — public-record data, waterfalls, hygiene | `glossary.md` (data) | Score a regulated-filing type as a data-product opportunity | "What makes a public filing a good data-product opportunity?" |
| 6 | **Inbound, SEO & AEO** — programmatic SEO, comparison pages, getting cited by answer engines | `glossary.md` (SEO/AEO) ⚠ thin | Draft one comparison page + one per-entity page outline | "How do you publish 1,000s of pages without thin-content penalties?" |
| 7 | **PLG & Self-Serve** — activation, free-to-paid, pricing for low-ACV | `glossary.md` (PLG) | Critique a real self-serve funnel; find the activation moment | "Why is the credit-card 30% vs 5% gap NOT a causal lever?" |
| 8 | **RevOps & Measurement** — funnel/metric trees, attribution, honest benchmarks | `glossary.md` (metrics) | Build a metric tree for one motion + name the leading indicator | "Which of these benchmarks is verified vs vendor-claimed?" |
| 9 | **Testing & Scaling** — fixed-window tests, beating vanity metrics, validate-before-scale | `glossary.md` (testing) | Design a two-week test (single channel, 1% meeting-booked bar) | "Why never test two channels at once?" |

## Capstone
Chain modules 1→4 into a complete mini-GTM for a company of the learner's choice: ECP (1) → signal (3) →
PQS/PVP via the `pqs-pvp` skill (4) → two-week test plan (9) → **audit** with the review panel
(`../.agents/REVIEW-PANEL.md`). That artifact is the portfolio centerpiece.

## How the Wizard uses this
- **Path mode** assesses where the learner is and points to the next module.
- It teaches the **Learn** column, drills the **explain-back**, and only marks a module "done" when the
  learner passes the checkpoint *and* completes the **Do** play.
- When a module's grounding is thin (e.g. AEO in module 6), the Wizard says so and offers a research pass
  rather than bluffing (HONEST-1).
