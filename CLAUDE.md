# CLAUDE.md — GTM Lab

This repo is a **GTM-engineering learning lab**: a cited knowledge base, an adversarial review panel,
runnable GTM plays-as-skills, and the **GTM Wizard** tutor that composes them. It is **product-agnostic** —
when applied to a specific company, that work lives in a separate project repo, not here. Read `README.md`
for the map.

## Operating invariants (the rules everything follows)

| ID | Invariant |
|----|-----------|
| **LEARN-1** | Learning-first. Favor understanding the mechanism over the shortcut. A concept isn't "learned" until it can be explained back. Every artifact names the concept it teaches. |
| **VALIDATE-1** | Don't automate or scale a motion before it's validated by hand. Manual first, then automate the proven step. |
| **HONEST-1** | Never fabricate data, claims, or metrics. Cite sources. Mark estimates as estimates. State a benchmark's source AND verification status; never present an unverified vendor stat as fact; say "I don't know" rather than invent. This is the credibility of the whole system. |
| **COMPLY-1** | Outreach respects CAN-SPAM / CASL / GDPR-PECR and platform ToS; data use respects the public-record boundary. Deliverability and legal exposure are real, not afterthoughts. |

> Applications of this lab to a specific product layer their **own** project invariants on top (e.g. an
> "ownership" rule for a client-owned product, or a "dogfood" rule). Those don't belong here.

## How to work in this repo
- **Ground claims in the knowledge base** (`knowledge-base/`); cite. If something isn't in the sources,
  say so and (optionally) run a research pass — don't bluff.
- **Teach by doing:** the Wizard explains a concept, checks the learner can explain it back, then routes to
  a runnable play applied to a real company.
- **Audit before trusting:** stress-test plans/outputs with the review panel (`.agents/REVIEW-PANEL.md`).
- **Compose, don't reinvent:** the Wizard routes to the `pqs-pvp` skill and the review panel rather than
  duplicating them.

## Conventions
Markdown. Skills under `skills/<name>/SKILL.md` (+ `README.md`). Knowledge under `knowledge-base/`.
Keep this file lean; push depth into the KB and skill docs.
