# Review: GTM Wizard (web app) SPEC
Date: 2026-06-25 · Reviews `../../app/SPEC.md`

**Plan (1 para):** Build a public Vite/vanilla-JS web app (the renewables/datacenter-wizard format) for
modern GTM — Knowledge Base + Benchmark Library + Advisor in v1 — fed by the `gtm-lab` KB, deployed to
GitHub Pages, as a learning reference + interview portfolio piece. Cost: a solo build of a few days.
Success = an interviewer clicks it and "gets it" in 2 minutes, and it stays in sync with the KB.

### STRATEGIST — is this the right move, and the right shape?
Yes — the format fits the goal better than the Claude skill alone (clickable > config file), and it
**compounds** existing work (the KB *is* the content). The strategic risk isn't the format, it's
**differentiation**: you already ship wizards in this exact template, so a GTM one could read as "#4 of the
same." The wedge that makes it not-generic is the **verified/unverified benchmark labeling + honest "I don't
know"** — that's a GTM-engineering judgment signal, not a calculator. **Make that the hero of the landing
page**, not a footnote. Gap: the spec lists the differentiator but the *layout* doesn't yet foreground it.

### SKEPTIC — why will this fail?
Load-bearing assumption: *"an interviewer will click a link and be impressed by a decision-tree GTM tool."*
Three failure modes, most→least likely:
1. **KB↔JSON drift.** A manual port means the app and KB diverge → an *honesty-branded* tool shipping stale
   or contradictory numbers. That's the most damaging failure because it undercuts the one differentiator.
   → Not fully fixable by discipline; needs the `build-data` script (read KB markdown → JSON) in v1, not v2.
2. **Shallow-content / AI-slop perception.** If the Advisor is a thin 4-question tree or the design looks
   templated, it reads as generic. Depth (real, cited recommendations) + a non-default design pass are the defense.
3. **Scope creep.** Five sections + calculators solo → ships nothing. (Mitigated if v1 holds to 3 sections.)
No veto (reversible, $0, net-new). But **#1 is a soft-flag**: don't ship the honesty tool on a drift-prone
data pipeline — wire the generator first.

### PRAGMATIST — the one highest-value move
Smallest valuable v1 = **Knowledge Base (glossary already written) + Benchmark Library (data already
verified) + ONE Advisor tree (motion-fit).** Those need almost no new content — they're a *render* of the KB.
**Cut calculators + Compare to v2.** Value-per-hour is highest here because the content cost is ~zero.
- **The one move:** scaffold from `renewables-wizard` (Vite shell + nav), write the `build-data` script that
  turns `glossary.md` + the verified benchmarks into `glossary.json` + `benchmarks.json`, render those two
  sections. Advisor tree next.
- **Done bar:** deploys to GitHub Pages; glossary is searchable; benchmark library shows source + flag; an
  interviewer can use it in 2 min.
- **Cut list:** calculators, compare, consulting funnel polish, the worked example — all later.

### BUYER — two recipients
- **Interviewer:** "Portfolio has 4 wizards — why care about this one?" → only the honesty discipline saves
  it from "neat, another tool." If the landing leads with *"every stat labeled verified/unverified — and it
  says when it doesn't know,"* that's a genuine "huh, that's a real GTM-eng instinct" moment. Without it: meh.
- **Learner (you):** honest check — a static decision tree isn't how deep learning happens; the **glossary +
  benchmark library are real reference value**, the Advisor is orientation. Don't oversell it as "the tutor" —
  the Claude skill is the tutor; the app is reference + demo. The spec already frames this honestly. Good.

### COMPLIANCE — publishing-honesty (no sending here, so this is light)
- **Don't republish others' content/data verbatim.** The Benchmark Library must present *your cited synthesis*
  with source links — not scraped tables from Hunter/ChartMogul/etc. (same boundary as the open-source repo).
- Keep it free of any client/application specifics (it's public). Verified-vs-unverified labeling is itself a
  compliance/honesty strength — keep it rigorous.
- No veto.

### ⚠ Process gap (flag, not a finding)
This panel is tuned for **GTM plans**, not a software build. The spec is fine, but the **implementation**
review wants two lenses this repo doesn't have yet: a **DESIGNER** (anti-AI-slop craft — critical, since
"generic template" is failure mode #2) and a light **ARCHITECT/NITPICK** (data-pipeline + a11y + the
build-data script). Recommend porting those from your synthgrid/cableknit persona library before the build review.

---

## Decision: **GO-SMALLER**
Build v1 = Knowledge Base + Benchmark Library + one Advisor tree, KB-sourced via a `build-data` script,
deployed to Pages. Hold calculators/Compare for v2.

## The one next action
Scaffold the Vite app from the `renewables-wizard` structure and write the `build-data` script
(KB markdown → `public/data/glossary.json` + `benchmarks.json`); render those two sections first.

## Open risks accepted on the record
1. **KB↔JSON drift** — accepted ONLY with the `build-data` generator in v1 (not deferred). 2. **Design-craft /
"generic" perception** — accepted pending a DESIGNER review before launch. 3. **No live LLM** — intentional;
the Claude skill remains the conversational engine.
