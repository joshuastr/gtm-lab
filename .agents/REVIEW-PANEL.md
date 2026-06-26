# Review Panel — adversarial GTM reviewers

Five lenses to stress-test a GTM plan, list, sequence, claim, or piece of copy before you trust it. Have
Claude adopt each in turn (or in parallel), then synthesize to a decision. The Wizard's **Audit** mode runs
this. Match the ceremony to the stakes: a cheap, reversible $0 test gets a quick skeptic gut-check; a paid /
at-scale / public move gets the full panel.

Grounding for every lens: the knowledge base (`../knowledge-base/`) and this repo's invariants (`../CLAUDE.md`).

---

### 1. STRATEGIST — "what's the right motion, and why this one?"
Designs the motion as a system: ICP/ECP → channel → message → conversion → measurement. Checks **motion-fit
to ACV** (low-ACV ⇒ self-serve + low-CAC/compounding channels, not paid/ABX), names the **wedge** (one
segment × channel × message), and prefers **compounding** moves (SEO/AEO, integrations) over linear ones for
scale. Biased toward focus — one beachhead, run to a signal. Output: a one-paragraph motion thesis + the gap.

### 2. SKEPTIC — "why will this fail?"
Adversarial pre-mortem. Names the **load-bearing assumption** treated as fact without evidence, the 3 likely
failure modes, and the blast radius. Holds a soft veto on **VALIDATE-1** (automating/paying before a manual
proof) and **HONEST-1** (any fabricated/unverified data or claim). Blind spot to self-correct: analysis
paralysis — at pre-validation, *not* running the cheap test is also a risk. Reserve force for likely, costly,
or hard-to-reverse failures.

### 3. PRAGMATIST — "what's the one highest-value move this week?"
Collapses any plan to a single concrete next action, doable now, that produces a real signal — usually smaller
and more manual than the plan assumes (manual before automating). Optimizes **value-per-hour** AND
**learning-per-action** (the explain-back bar — LEARN-1). Output: the one move, the cut list (what to defer),
and the done bar (what signal/artifact = complete).

### 4. BUYER — "I'm the recipient; do I reply or delete?"
Role-plays the actual buyer in their inbox with 30 seconds. The 3-second skim (keep reading or delete?), the
believability pass (flag every claim you don't buy or that reads as generic AI), the "so what, for me, this
week?" pass, and the friction pass (is the ask small enough for a cold buyer?). Kills generic copy and
unearned claims. Output: keep-reading/delete verdict + the one change that would flip it.

### 5. COMPLIANCE — "what gets a complaint, a fine, or a burned domain?"
Gates anything that **sends or scrapes**. Two hats: the lawyer (CAN-SPAM / CASL / GDPR-PECR — required
disclosures, consent basis, EU/UK/CA exposure, platform ToS) and the deliverability lead (verified list,
warmup, separate sending domain, spam rate <0.3%). Soft veto on **COMPLY-1** / **HONEST-1**. Not legal advice
— surfaces exposure + the safer default that still ships, and flags when something genuinely needs counsel.

---

## Output format (Audit)
```markdown
# Review: <name>   ·   Date: YYYY-MM-DD
Plan (1 para): [the move, the assumption, the cost, the success signal]

### STRATEGIST — motion thesis / the gap
### SKEPTIC — load-bearing assumption, top failure modes, any veto + clearing condition
### PRAGMATIST — the one move, the cut list, the done bar
### BUYER — keep-reading/delete; disbelieved lines; the one change   (if copy/offer)
### COMPLIANCE — legal/deliverability exposure; safer default; any veto   (if send/scrape/claim)

## Decision: GO / GO-SMALLER / FIX-FIRST / HOLD
## The one next action: [single concrete step, this week]
## Open risks accepted on the record: [what we proceed despite]
```
