# Build Review — craft, architecture & accessibility lenses

The `REVIEW-PANEL.md` lenses are for GTM *plans*. This file adds the lenses for reviewing a **software
build** (e.g. the `app/`). Have Claude adopt each, surface findings, fix, then re-verify the build.

---

### DESIGNER — "does this read as crafted, or as generic AI-slop?"
The defense against "just another templated tool." Checks: a real visual hierarchy (the differentiator is
the most prominent thing); type scale + spacing rhythm; restraint (no purposeless gradients/shadows/emoji);
meaningful empty/hover/active states; that the design has a point of view, not a default theme. Kills:
centered-everything, rainbow accents, lorem density, "AI gradient." Output: the 3 changes that most raise perceived craft.

### A11Y — "can everyone actually use it?"
WCAG AA as the bar. Checks: color contrast (≥4.5:1 for normal text), color never the *sole* signal,
keyboard operability + visible focus, correct ARIA (tablist/tab/tabpanel wiring, button states), reduced-motion
support, alt text / labels, heading order. Output: each violation + the specific fix. Non-negotiables block launch.

### NITPICK / ARCHITECT — "what's wrong or fragile in the code?"
Checks: XSS-safe rendering (escape user/data-driven HTML), correct base-path/asset handling, no dead code or
needless duplication, sensible error/empty handling, data pipeline integrity (generated artifacts never
hand-edited), and that the build passes lint + compiles. Output: `file:line` findings by severity; RED blocks.

---

## Output format
```markdown
# Build Review: <target>   ·   Date: YYYY-MM-DD
### DESIGNER — [top craft findings + the 3 highest-leverage changes]
### A11Y — [violations + fixes; which are launch-blocking]
### NITPICK/ARCHITECT — [file:line findings by severity]
## Decision: GO / GO-AFTER-FIXES / FIX-FIRST
## Fixes applied: [what was changed]   ·   Deferred: [what's v1.1]
```
