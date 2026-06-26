# Implementation Plan — GTM Wizard (web app)

Operationalizes `SPEC.md` at the **GO-SMALLER** scope from `../.agents/audits/gtm-wizard-app-SPEC-audit.md`.
Mirrors the conventions of `renewables-wizard` / `datacenter-wizard` (Vite + vanilla JS, one JS+CSS module
per section, `public/data/*.json` content, `main.js` router). **Dogfood rule:** all content is *generated
from* `../knowledge-base/` by a `build-data` script — the KB is the single source of truth, so the app can
never drift from it (the audit's #1 risk).

## Target structure (matches your wizard template)
```
app/
├── index.html
├── package.json · vite.config.js
├── scripts/build-data.mjs        # KB markdown → public/data/*.json  (the dogfood/sync generator)
├── public/
│   ├── favicon.svg
│   └── data/                      # GENERATED — do not hand-edit
│       ├── glossary.json          ← ../knowledge-base/glossary.md
│       ├── benchmarks.json        ← ../knowledge-base/benchmarks.md  (general verified set; to author)
│       └── advisor.json           ← ../knowledge-base/advisor.md      (motion-fit tree; to author)
└── src/
    ├── main.js                    # router + shell + nav
    ├── knowledge.js               # Knowledge Base (glossary search/filter)
    ├── benchmarks.js              # Benchmark Library (filter + verified/unverified badge) ← the hero
    ├── advisor.js                 # Advisor decision tree
    ├── style.css
    └── css/  base · layout · shared · responsive · knowledge · benchmarks · advisor · footer
```

## Data schemas (what `build-data` emits)
```jsonc
// glossary.json
{ "term": "PQS (Pain-Qualified Segment)", "category": "Signals & outbound",
  "definition": "...", "source": "Jordan Crawford", "caveated": false }

// benchmarks.json  — the differentiator: every row carries source + status
{ "metric": "Cold email reply rate (avg sequence)", "value": "~4.5%", "topic": "Outbound",
  "source": "Hunter 2026 State of Cold Email (31M emails)", "sourceUrl": "https://hunter.io/the-state-of-cold-email/",
  "status": "verified",            // "verified" | "descriptive" | "unverified"
  "caveat": "Self-selected user base; sales use-case ~3%; open rate unreliable post-MPP." }

// advisor.json — decision tree
{ "id": "acv", "question": "What's your annual contract value (ACV)?",
  "options": [ { "label": "< $5K (self-serve)", "next": "arr" }, ... ],
  "recommendation": { "motion": "PLG + warm/founder-led outbound", "channels": [...],
    "why": "...", "source": "GTM Strategist 2025 (Voje/Poyar, n=195)", "caveats": [...] } }
```

## Phases (v1 = GO-SMALLER)

**Phase 0 — Content source + scaffold**
- Author the two KB files the app needs (general, application-agnostic): `../knowledge-base/benchmarks.md`
  (the verified Hunter/ChartMogul/Google-Yahoo/etc. set, each with source + status) and
  `../knowledge-base/advisor.md` (the motion-fit decision tree). Glossary already exists.
- Scaffold the Vite app from the wizard template (index.html, package.json, vite.config, `main.js` shell +
  nav, base/layout/shared/responsive CSS). Establish a non-default design system (anti-AI-slop — see gate).
- *Done:* `npm run dev` serves an empty-but-styled shell with nav.

**Phase 1 — `build-data` generator (the dogfood + drift fix; in v1, not v2)**
- `scripts/build-data.mjs` parses the KB markdown (grouped `## category` → `- **Term** — def *(source)* ⚠`)
  into `public/data/*.json`. Wire `npm run build:data`, and run it as a `prebuild` + dev step.
- *Done:* editing a KB `.md` and re-running regenerates the JSON; `data/` is git-ignored or clearly "generated".

**Phase 2 — Knowledge Base section** (`knowledge.js`)
- Search box + category filter over `glossary.json`; term cards show definition + source + a "⚠ contested"
  marker where flagged. *Done:* searchable, filterable, the full glossary renders.

**Phase 3 — Benchmark Library section** (`benchmarks.js`) ← the hero
- Filter by topic; each benchmark renders with its **source link** and a **status badge**
  (`verified` / `descriptive` / `unverified`) + the caveat. *Done:* the verified/unverified labeling is the
  most prominent, legible thing on the page.

**Phase 4 — Advisor** (`advisor.js`)
- Decision tree (ACV → ARR stage → ICP type) → a grounded motion+channels recommendation with its source
  and caveats. *Done:* a coherent recommendation with citation, no invented certainty.

**Phase 5 — Landing / About**
- Lead the landing with the honesty differentiator ("every stat labeled verified/unverified — and it says
  when it doesn't know"). Light branding/CTA (match the other wizards' footer). *Done:* the differentiator
  is the first thing a visitor sees.

**Phase 6 — Deploy**
- GitHub Pages. NOTE: the app is a *subfolder* of `gtm-lab`, so Pages needs either (a) an Actions workflow
  that builds `app/` and publishes, or (b) extracting `app/` to its own repo (like the other wizards).
  Decide at this phase. Set Vite `base` accordingly. *Done:* a live URL.

## Pre-launch gate (from the audit)
- **DESIGNER review** (port a `DESIGNER` persona from your synthgrid/cableknit library into `gtm-lab/.agents/`)
  — anti-AI-slop craft is the defense against "generic template," failure mode #2.
- **a11y + responsive** pass. **Leak check:** no client/application-specific content; nothing unverified shown as fact;
  benchmark tables are *our cited synthesis*, not republished third-party tables (COMPLIANCE).

## v2 (after v1 ships)
Calculators (`calculator.js`: CAC/LTV, TAM/SAM/SOM, free-to-paid-vs-benchmark, spam-rate checker,
two-week-test sample size) · Compare (`compare.js`: motions / channels / tools).

## Risks → mitigations (carried from the audit)
| Risk | Mitigation |
|---|---|
| KB↔JSON drift (undercuts the honesty brand) | `build-data` generator in v1; `data/` is generated, never hand-edited |
| "Generic wizard #4" / AI-slop | differentiator-as-hero + a real DESIGNER pass + content depth |
| Solo scope creep | v1 = 3 sections only; calculators/Compare deferred |
| No live LLM | intentional; the Claude `gtm-wizard` skill stays the conversational engine |

## Open decisions before building
1. **Deploy target:** Actions-from-subfolder vs. extract `app/` to its own repo for Pages? (affects Vite `base`)
2. **Port the `DESIGNER` (+ light `ARCHITECT/NITPICK`) persona** now, so we can audit the implementation?
3. Confirm: build v1 in phase order above, starting Phase 0 (content + scaffold)?
