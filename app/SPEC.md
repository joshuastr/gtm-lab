# Spec — GTM Wizard (web app)

The public, interactive front-end to GTM Lab. Mirrors the proven format of `renewables-wizard` /
`datacenter-wizard` (Vite + vanilla JS + JSON data, GitHub Pages), but for **modern B2B go-to-market** —
and **fed entirely by `gtm-lab/knowledge-base/`** (the KB is the single source of truth; this app renders it).

## Why it exists (goals, in priority)
1. **Learn** — a browsable, searchable reference for GTM concepts, language, and best practices.
2. **Demonstrate** — a clickable portfolio piece for interviews (GTM / RevOps / GTM-engineering roles) —
   something an interviewer can *use* in two minutes, no Claude Code required.
3. **(Optional) Funnel** — light consulting/branding CTA, matching the other wizards.

## The differentiator (lead with this)
Every benchmark carries its **source AND a verified / unverified flag**, and the tool openly says when
something *isn't* known. No other GTM tool does this. It's the honesty discipline from the KB, made visible —
and the single best signal of GTM-engineering judgment to an interviewer.

## Audience
- Primary: **me** (learner) + **interviewers** evaluating a portfolio piece.
- Secondary: GTM practitioners; consulting leads.

## Sections (→ data file, ← KB source) · v1 vs later
| Section | What it does | Data file ← KB source | Phase |
|---|---|---|---|
| **Knowledge Base** | searchable glossary + best-practice guides (the "language") | `glossary.json` ← `knowledge-base/glossary.md` | **v1** |
| **Benchmark Library** | filterable benchmarks, each with source + verified/unverified flag | `benchmarks.json` ← the verified research reports | **v1** |
| **Advisor** | decision tree: "what GTM motion + first channels fit my company?" (inputs: ACV, ARR stage, ICP type) → grounded recommendation + caveats | `advisor.json` ← motion-fit findings | **v1** |
| **Calculators** | CAC/LTV, TAM/SAM/SOM, free-to-paid-vs-benchmark, spam-rate checker, two-week-test sample-size | (in code) | v2 |
| **Compare** | motions / channels / tools side-by-side with filters | `compare-*.json` | v2 |
| **About / CTA** | what it is, the honesty principle, branding | static | v1 (light) |

## Tech & architecture
- **Vite + vanilla JS + CSS**, static, no backend, deploy to **GitHub Pages** (match the existing wizards).
- All content in `public/data/*.json`. **No live LLM at runtime** — teaching here is decision-tree + search
  + reference; the *conversational* Socratic tutor stays the Claude `gtm-wizard` skill. (Honest split:
  web app = orientation + reference + demo; skill = the dynamic engine.)
- **Dogfood / sync:** JSON is generated from the KB. v1 = a documented manual/scripted port; a small
  `build-data` script that reads the KB markdown is the goal so the two never drift.

## Non-goals (v1)
No live chat, no backend/auth, no application-specific content, no calculators/compare (those are v2).

## Success criteria
- An interviewer clicks the live URL and within ~2 minutes (a) grasps modern GTM and (b) notices the
  verified/unverified honesty discipline.
- I can use the glossary + benchmark library as my own reference, and it stays in sync with the KB.

## Known risks (for the audit to pressure-test)
- KB↔JSON **drift** (an honesty tool with stale data is self-defeating).
- "Just another wizard/calculator site" if content is shallow or the design reads as AI-slop.
- Scope creep across 5 sections for a solo build → ships nothing.
