# PQS / PVP Builder — a Claude skill

A reusable Claude skill that turns a company's offer into **Pain-Qualified Segments** and **Permissionless
Value Props** — outbound research where every claim is grounded in real, dated, public data. `SKILL.md` is
the runnable skill; this is the cover note.

## What it does
Given a target company, it produces: (1) segments defined by *observable pain in public data* (not
firmographics), (2) value-first messages a buyer would actually want to receive, and (3) a short list of
real, researched leads — all honesty-checked and recency-stamped, with a human-review gate before anything
is ever sent.

## How to run it
Say **"use the pqs-pvp skill for [company]"** (or: build PQS/PVP, research outbound for a brand, build a
target list, "find me leads with a reason"). It asks a few questions first (seller, buyer, geography, data
access, goal), then builds. Output is a single artifact. Review it, then send manually if you choose.

## Design principles baked in
- **Pain backwards, not firmographics forwards** (the PQS idea).
- **Value people would pay to receive** (the PVP / permissionless value idea).
- **Honesty gate** — no invented stats, recency-checked, "evaluate the bullshittiness."
- **Deploy, not destroy** — researches and drafts only; never sends or writes to a CRM.

## Provenance
Distilled from the practitioner sources in `../../knowledge-base/` (esp. Jordan Crawford's PQS/PVP method).
A worked example of how I turn a watched practitioner method into a reusable, honesty-gated SOP.
