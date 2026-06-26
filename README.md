# GTM Lab

A personal **go-to-market engineering learning lab** — and an interactive, **grounded** GTM tutor built
in Claude Code. I'm learning modern B2B go-to-market by building the system that teaches it: a cited
knowledge base, an adversarial review panel, runnable GTM plays-as-skills, and a tutor (the **GTM Wizard**)
that ties them together.

It's general-purpose. I apply it to real projects (e.g. a franchise-data startup) in *separate* repos —
this one stays product-agnostic.

## What's here
```
knowledge-base/     cited GTM knowledge: glossary (the language), curriculum, sources
.agents/            an adversarial review panel (strategist / skeptic / pragmatist / buyer / compliance)
skills/
  gtm-wizard/       the tutor: teaches → drills → has you apply → audits
  pqs-pvp/          a runnable GTM play: Pain-Qualified Segments + Permissionless Value Props
```

## Use it
In Claude Code, say **"start the GTM wizard"** (or "teach me GTM", "what does PVP mean?", "quiz me on
deliverability", "help me practice outbound on [company]"). Six modes — **Learn · Glossary · Drill · Do ·
Audit · Path** — over a 9-module curriculum.

## The principle that makes it worth trusting
**Grounding and honesty over fluency.** Every substantive claim is cited to the knowledge base; every
benchmark carries its source and verification status; unverified/refuted stats are *labelled, not
repeated*; "I don't know / it's not in the sources" is allowed. The knowledge base was built from
adversarially-verified research (fan-out search → fetch → multi-vote verification → cited synthesis),
which surfaced and killed several popular-but-false GTM benchmarks.

## Status
Active learning project — the knowledge base and curriculum grow as I work through each module.
Built with Claude.
