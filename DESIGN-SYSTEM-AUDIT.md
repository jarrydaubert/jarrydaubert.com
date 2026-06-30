# Design System Audit

Generated 2026-06-30. Scope: src/ (tokens, globals.css, src/components, page-level usage). Read-only: no code changed. Revised after a verification pass.

## Read this first: copy regressions outrank the design work

These are out of scope for a design-system audit, but they are tracked-copy bugs under the repo's own rules (AGENTS.md positioning guardrails), so they take priority over the polish items below. Flagging only, not fixing, since positioning copy is load-bearing and should change deliberately.

1. README.md line 3 uses "QA-minded product builder". AGENTS.md line 38 names this exact phrase the retired brand and says to treat it as a bug wherever it appears, including README copy.
2. README.md line 7 ("evidence-led product building") leans builder-first in the same spirit.
3. about/page.tsx line 50 ("Senior QA specialist and product builder") and line 7 (the page metadata description) place "product builder" co-equal with QA. AGENTS.md line 32 forbids reordering into builder-first, and line 52 lists "Product builder with QA experience" as bad direction. Line 181 requires metadata to stay tester-first, so line 7 is the more serious of the two.

Suggested follow-up: a separate copy PR that restores tester-first wording on these surfaces, with the cross-surface check AGENTS.md line 182 asks for. Keep it out of any design-system change.

## Summary

Components reviewed: 9. Design-system issues: 6. Score: 84 / 100.

This is a well-built, intentional system. Color is genuinely single-source-of-truth: globals.css @theme defines the palette, src/lib/tokens.ts parses that block so JavaScript never holds an independent hex literal, and tokens.test.ts fails CI on token drift, typos, and WCAG-AA contrast regressions. Zero hardcoded hex values exist in any .tsx file. The deductions below are about consistency at the edges, not foundations.

## What is working

- Single source of truth for color, enforced in code: @theme to tokens.ts reader to CI test. No hex literals leak into TSX.
- Contrast is enforced in CI, not just intended. tokens.test.ts checks 4.5:1 for 15 real text-on-surface pairings. See the correction in finding 4 about which palette this covers.
- Semantic token naming (bg, surface, fg, muted, subtle, accent) rather than literal color names, which scales cleanly to the dark override.
- Centralized primitives via @utility (focus-ring, link, card, eyebrow) and a consistent cn() (clsx + tailwind-merge) merge helper with override safety.
- Global polish handled once: reduced-motion reset, surface-aware focus ring (--focus-offset-color), dark mode via prefers-color-scheme.
- The OG image template, the one place that cannot use Tailwind, still pulls from token("accent") instead of hardcoding.
- Accessibility throughout: aria-hidden on decorative icons, aria-label on icon links and nav, semantic time dateTime, parameterized heading levels.

## Naming consistency

| Area | Status | Note |
|------|--------|------|
| Color tokens | consistent | Semantic, kebab-case, validated against an EXPECTED allowlist |
| Files and components | consistent | kebab-case.tsx files, PascalCase exports, Record<Variant, string> variant maps |
| Label and eyebrow style | inconsistent | Two parallel systems for one visual idea. See finding 1 |

## Token coverage

| Category | Defined | Outside the system |
|----------|---------|--------------------|
| Color | 11 semantic tokens, light plus dark | 0 in TSX. In globals.css: 4 hardcoded hex in body gradients (#f3eadb, #efe4d1, #201711, #15110d) plus about 8 rgb() decorative literals (gradients, dot texture, the --shadow-elevated color) |
| Typography | 3 font families (body, display, mono) | No type-scale tokens. Sizes come from Tailwind defaults plus 5 arbitrary one-offs in the hero (text-[4.25rem], leading-[0.92], tracking-[-0.035em], max-w-[11.5em]) |
| Spacing | 1 (--spacing-section) | Otherwise Tailwind's default scale, which is consistent |
| Radius | none | Inline in utilities (0.375rem, 0.125rem) plus Tailwind rounded-*. Not tokenized |
| Shadow | 1 (--shadow-elevated) | 1 one-off shadow-[0_12px_30px_-22px_...] on the CTA (page.tsx line 101) |
| Motion | keyframes centralized | Durations (120 to 700ms) inline, not tokenized |

## Component completeness

Scored on the site's own terms. This is a content and portfolio site, so the absence of Input, Modal, and Form primitives is correct, not a gap.

| Component | Variants | States | A11y | Docs | Score |
|-----------|----------|--------|------|------|-------|
| Link | inline, nav, back | hover, focus | good | inline only | 9/10 |
| Card | interactive, static | hover, focus | good | inline only | 9/10 |
| Figure | none | none | alt required, CLS-safe | inline only | 9/10 |
| SiteHeader, SiteFooter | none | hover, focus | nav labels | inline only | 9/10 |
| Icons | GitHub, LinkedIn | none | currentColor, aria-hidden | good | 9/10 |
| Prose (MDX map) | full element map | yes | good | inline only | 8/10 |
| EssayCard | none | inherits Card | good | inline only | 8/10 |
| ProjectCard | h2, h3 | inherits Card | good | inline only | 7/10, carries the duplicated label string |
| Button / CTA | none | n/a | n/a | n/a | gap, hand-rolled in two places |

## Priority actions

1. Unify the small-uppercase-label style. The pattern "text-xs font-semibold uppercase tracking-[...] text-subtle" is defined three times with two tracking values: project-card.tsx line 5 (0.16em), about/page.tsx line 36 (0.14em), and about/page.tsx line 141 (0.16em, inline). A separate .eyebrow utility (globals.css line 144, 0.08em) covers a near-identical idea. Collapse them into one utility or eyebrow size variant and delete the local label constants. Removes the drift and the duplication together.

2. Extract a single button primitive. Button styling is hand-rolled in two tracked files: the accent CTA at page.tsx line 101 (with a one-off shadow-[...]), and a native button at error.tsx line 23 whose class string is a verbatim copy of the Link "back" variant (link.tsx line 13). Link only renders anchors, so error.tsx cannot reuse it and duplicates the string instead. Introduce a Button primitive or a shared variant constant that both an anchor and a button element can consume, and either reuse --shadow-elevated or promote the bespoke CTA shadow to a token.

3. Bring decorative color into the system, or document it as deliberately outside. globals.css calls itself the single source of truth for color, but the gradients and texture use hardcoded hex and rgb() literals (lines 26, 41, 46, 49, 60 to 61, 90, 93, 98 to 99). Either add atmosphere tokens or add a one-line comment scoping these as intentional non-token values, so the claim and the code agree.

4. Enforce dark-palette contrast in CI. Correction to an earlier draft of this audit: contrast is currently enforced for the light palette only. tokens.ts parses just the @theme block, and tokens.test.ts reads only those exported tokens, so the dark palette in globals.css line 71 is not tested. The dark ratios were computed by hand and currently pass AA, but nothing guards them against future edits. Parse the dark override too and run the same pairings against it.

5. Decide on a type scale. Heading sizes are set per page (prose h2 text-2xl, h3 text-lg; hero arbitrary text-[4.25rem]). Either ratify Tailwind's defaults as the scale and note it, or add text tokens and pull the hero one-offs behind named values if they will be reused.

6. Add a one-page system overview. The inline comments are excellent, but there is no single document a newcomer can read for the tokens, the primitives, and how to add one. This audit can seed it.

## Verification notes

- Zero hardcoded hex in TSX: confirmed by grep across src.
- Label drift, the two button locations, and the decorative color literals: confirmed against the cited file lines.
- Dark-palette contrast not enforced: confirmed by reading tokens.ts (parses @theme only) and tokens.test.ts (tests exported tokens only).
- Copy regressions: confirmed against README.md and about/page.tsx and checked against AGENTS.md guardrails.
