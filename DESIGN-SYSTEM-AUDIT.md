# Design System Audit

Generated 2026-06-30. Scope: `src/` tokens, `globals.css`, `src/components`, and page-level usage. Updated 2026-06-30 after verified follow-up fixes.

This file is now a status record for the audit work. For current design-system rules, use `DESIGN.md`.

## Current Status

The original audit found strong foundations and several edge inconsistencies. The verified issues have now been addressed in follow-up commits.

Component modules inspected: 9.

## Fixes Completed

1. Tester-first copy and metadata restored.

Files: `README.md`, `src/lib/site.ts`, `src/lib/llms.ts`, `src/app/about/page.tsx`, `src/app/projects/page.tsx`, `src/app/writing/page.tsx`, and project frontmatter.

The retired "QA-minded product builder" phrase, co-equal "product builder" framing, builder-first page descriptions, vendor-led project summary language, and stale in-progress labels for live projects were removed or corrected.

2. Non-ASCII typography removed from source.

Files: `src/app/page.tsx`, `src/components/project-card.tsx`, and `src/lib/content.ts`.

The right-arrow character was removed from UI copy and comments.

3. Label style unified.

Files: `src/app/globals.css`, `src/components/project-card.tsx`, and `src/app/about/page.tsx`.

The duplicated small-uppercase label strings were replaced with the shared `label` utility.

4. Button styling shared.

Files: `src/components/button.tsx`, `src/components/link.tsx`, `src/app/page.tsx`, and `src/app/error.tsx`.

The homepage CTA and the native error-boundary button now use shared button variant styles. The CTA shadow is a named token, `shadow-cta`, rather than an arbitrary class.

5. Dark-palette contrast enforced.

Files: `src/lib/tokens.ts` and `src/lib/tokens.test.ts`.

The token reader now exposes both light and dark palettes. The contrast test runs the same WCAG AA pairings against both palettes.

6. Decorative colour and type-scale decisions documented.

Files: `src/app/globals.css` and `DESIGN.md`.

`@theme` is scoped as the source for reusable UI colour. Body gradient and texture values are documented as local atmospheric treatment. Tailwind defaults are documented as the type scale.

## Current Foundations

- Reusable UI colour is still single-source through `globals.css @theme`.
- JavaScript still reads colour from `src/lib/tokens.ts`, not independent literals.
- Token tests now cover expected names, drift, and contrast for both light and dark palettes.
- No hardcoded hex values should appear in TSX.
- Shared primitives now cover links, cards, figures, buttons, labels, focus rings, MDX prose, and JSON-LD injection.

## Remaining Verification

The implementation still needs final local validation and rendered visual QA before handoff:

```bash
bun run check:repo
bun run build
```

For UI changes, inspect the affected routes in a browser at desktop and mobile widths, including the homepage CTA, project cards, the about operating profile, and the error boundary button.
