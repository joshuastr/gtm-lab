# Build Review: GTM Wizard app (v1 implementation)
Date: 2026-06-25 · Reviewed `../../app/` · Lenses: DESIGNER, A11Y, NITPICK/ARCHITECT (`../BUILD-REVIEW.md`)

### DESIGNER — craft
**Strengths:** the differentiator is foregrounded (the honesty strip + the status badges are the most
prominent elements); restraint (no purposeless gradients/emoji/AI-slop); reads as part of the wizard
portfolio family (Space Grotesk/Inter, the token system) with a distinct indigo accent so it's not a clone;
clear hierarchy and real hover/active/empty states.
**Highest-leverage polish (→ v1.1, non-blocking):** (1) group the glossary by category headers (many cards
are term+definition only — headers add scannability); (2) a small result-count line per section; (3) show
the Advisor's three bands as a compare-at-a-glance, not just the selected one.

### A11Y — fixed the real failures
- **FIXED (was a WCAG AA failure):** light-gray meta text (`--ink-4` #9ca3af ≈ 2.6:1 on white) failed the
  4.5:1 minimum. Darkened the ink scale (ink-4 → #6b7280 ≈ 4.6:1, ink-3 → #52525b).
- **FIXED:** tab/panel ARIA — wired `aria-controls` on tabs, `aria-labelledby` + `tabindex="0"` on panels,
  `aria-label` on the tablist (in `main.js`).
- **FIXED:** added `prefers-reduced-motion` support (disables the fade + smooth-scroll).
- **Pass:** color is never the *sole* signal — the honesty strip and badges carry text labels too.
- **Deferred (minor, → v1.1):** `aria-pressed` on filter chips; roving-tabindex arrow-key nav between tabs.

### NITPICK / ARCHITECT
- **FIXED:** eslint flat-config globs missed `.mjs`, so Node's `console` wasn't recognized in the generator —
  added a Node-globals block. **Lint now clean; production build passes** (7 modules, ~10KB CSS / 8KB JS).
- **Pass:** all data-driven HTML is rendered through an `esc()` helper (XSS-safe); data originates only from
  the trusted KB.
- **Pass:** `public/data/` is written *only* by `build:data` (generated, gitignored) — pipeline integrity holds.
- **Watch:** favicon uses an absolute `/favicon.svg` (matches the renewables-wizard convention); confirm it
  resolves once deployed under the `/gtm-lab/` base. `esc()` is duplicated across 3 modules — fine for a
  no-bundler vanilla app; could extract to `util.js` (v1.1).

## Decision: GO (after fixes)
The three real a11y issues (contrast, ARIA wiring, reduced-motion) and the lint error are fixed and verified.
Remaining items are non-blocking v1.1 polish.

## Fixes applied
ink-scale contrast · tab/panel ARIA wiring · reduced-motion · eslint `.mjs` Node globals.
## Deferred (v1.1)
glossary category grouping · per-section counts · advisor compare-view · `aria-pressed` on chips · `util.js` for `esc`.
