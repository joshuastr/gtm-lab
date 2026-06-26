# GTM Wizard

An interactive, **grounded** GTM tutor — built in Claude Code — that teaches modern B2B go-to-market
(the concepts, the language, the best practices), drills you until you can explain them back, then has you
**apply** each idea to a real company and audits the result with an adversarial review panel.

Two things at once: **a way to learn GTM by doing**, and **a demonstration of how to build trustworthy AI
tooling.** General-purpose.

## Why it's interesting (the competencies on display)
Not a chatbot wrapper — a small system that shows what a GTM/AI engineer is actually hired for:
- **Grounding & honesty over fluency.** Every fact is cited; benchmarks carry their source and verification
  status; refuted/unverified stats are *labelled, not repeated*; "I don't know" is allowed. (The knowledge
  base was built from adversarially-verified research — fan-out search → fetch → multi-vote verification →
  cited synthesis — which surfaced and killed several popular-but-false GTM benchmarks.)
- **Skills as SOPs / context engineering.** GTM plays are codified as reusable Claude skills with on-demand
  loading, not one-off prompts — the modern agent-tooling pattern.
- **Adversarial review.** Plans and outputs are stress-tested by a review panel (strategist, skeptic,
  pragmatist, buyer, compliance) before they're trusted.
- **Pedagogy that works.** Plain-English-first, explain-back-to-pass, learn→apply→audit — not a wall of text.

## How to use it
In Claude Code, say **"start the GTM wizard"** (or "teach me GTM", "what does PVP mean?", "quiz me on
deliverability", "help me practice outbound on [company]"). Six modes — **Learn · Glossary · Drill · Do ·
Audit · Path** — over a 9-module curriculum.

The **capstone**: chain modules into a complete mini-GTM for a company of your choice (ECP → signal →
PQS/PVP → two-week-test → review-panel audit). That artifact is the thing to show.

## Honest about its limits
A couple of curriculum areas (answer-engine optimization; cold-email legal compliance) are flagged as
*under-researched* — the Wizard says so and offers a research pass rather than bluffing. That's the point:
a tool you can trust about what it doesn't know.
