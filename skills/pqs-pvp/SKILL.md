---
name: pqs-pvp
description: >-
  Build Pain-Qualified Segments (PQS) and Permissionless Value Props (PVP) for a company's outbound.
  Find who is in pain from public/observable data, then write messages so genuinely useful the
  recipient would pay to receive them. Use when researching outbound for a brand, building a target
  list, writing cold outreach, generating PQS or PVP, or "do GTM research" / "find me leads with a reason".
---

# PQS / PVP Builder

Turn a seller's offer into **segments defined by observable pain** and **messages worth receiving**, every
claim grounded in real, dated, public data. A runnable GTM play. Honors the lab's invariants (`../../CLAUDE.md`).

## The two concepts (learn these first)
- **PQS — Pain-Qualified Segment.** A group defined by an *observable pain visible in public or queryable
  data*, NOT firmographics. "Hospitals with a 1-star quality rating + recent penalties" (in pain about
  staffing) beats "hospitals with 200+ beds." Start from the pain backwards.
- **PVP — Permissionless Value Prop.** A message so valuable the recipient would *pay* to receive it. You do
  the work upfront and hand it over: a decision-maker card, "3 of your competitors just hired a CRO — here
  are the contacts and the sequence I'd run." No ask hidden inside the value.
- **Headless PVP** (advanced): start from the *data*, find the pain, *then* find which seller it maps to.

## Inputs — ask before you build (reverse-prompt the user)
1. **Who is the seller?** (URL + what they actually sell / their core value props)
2. **Who do they sell to?** (buyer persona — title + what they own)
3. **Geography / segment constraints?** (e.g. US-only — matters for compliance)
4. **What data do we have access to?** (a dataset/MCP, public records/filings, reviews, web only)
5. **Goal of the message?** (book a call / start a relationship / deliver a free asset)
If anything is vague, state the assumption you're about to make and confirm it.

## Workflow
1. **Understand the seller** — positioning, the 2–3 real value props, the ICP, the buyer's worldview/pains.
   Separate **demand capture** (a thing they already want) from **demand generation** (an outcome you must paint).
2. **Hunt pain from PUBLIC data → draft PQS** — for each segment: who + the observable pain + the exact
   public/queryable source that proves it + dates. Sources: regulatory/compliance filings, quality/penalty
   data, inspections/violations, hiring & job descriptions, funding, M&A, product launches, reviews at scale.
   Prefer pain that's **provable from data**, not inferred from human behavior.
3. **Draft PVP messages (decision-maker cards)** — value-first: "I found [specific, true, dated thing] about
   you / your market — here are [the contacts / the data / the next step]." Give the artifact, not a pitch.
   Short, plain, specific. The CTA is a concrete next action, not "let's hop on a call about value."
4. **Evaluate from the BUYER'S lens** — re-read every PQS/PVP as the recipient. Kill anything that makes them
   defensive, anything generic, anything that reads as AI. Rank by what a real buyer would reply to.
5. **Honesty + recency check (HONEST-1 — non-negotiable)** — every claim tied to its source; if you don't
   *know* a number, don't say it; re-validate dates (stamp date-accessed + date-of-info); strip unprovable
   superiority claims and vanity stats. "Evaluate the bullshittiness."
6. **Produce the artifact** — chosen PQS (with sources) + PVP messages (+1–2 variants and a follow-up) +
   5–7 real, researched leads (names, titles, LinkedIn links, the pain found, dates).
7. **Human review before any send** — this skill **researches and drafts**; it never sends and never writes
   to a CRM ("deploy not destroy"). For EU/UK/CA recipients or any scrape, route through COMPLIANCE in the
   review panel (`../../.agents/REVIEW-PANEL.md`) first.

## Model / tool routing
- **Claude** — synthesis, creativity, the buyer-lens and honesty passes; best at messages.
- **Deep web research** — hardest-working at live validation: links, titles, dates.
- **Big-context model** — when you must hold a large dataset in context at once.
- **A real dataset/MCP** > vibe-guessed facts, always. Let a fresh-context reviewer do the final honesty/QA pass.

## Definition of done
- [ ] 3–6 PQS, each with an observable pain + a real, dated public source
- [ ] PVP messages that pass the buyer-lens read AND the honesty check (every claim sourced)
- [ ] 5–7 real leads with names, titles, links, the found pain, and access dates
- [ ] No fabricated stats, no unprovable superiority claims, no stale "pain"
- [ ] Nothing sent; a human-review step is the final instruction

## Anti-patterns (kill on sight)
- Firmographic-only segments with no pain signal · `{title}`+`{company}` personalization · invented numbers ·
  money-shaming framing that makes buyers defensive · AI tells ("most teams", "it's not just X it's Y",
  em-dashes as a giveaway) · anything that sends/scrapes/writes-to-CRM without a human gate.

## Provenance
Distilled from the practitioners in `../../knowledge-base/` (esp. Jordan Crawford's PQS/PVP method).
A worked example of turning a watched practitioner method into a reusable, honesty-gated SOP.
