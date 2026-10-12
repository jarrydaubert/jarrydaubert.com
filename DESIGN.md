# Design System

This site keeps the design system small on purpose. It should make repeated decisions consistent without becoming ceremony.

## Tokens

Reusable UI colour lives in `src/app/globals.css` inside `@theme`. Those values generate Tailwind utilities such as `bg-surface`, `text-fg`, `border-border`, and `shadow-cta`.

JavaScript reads the same colour source through `src/lib/tokens.ts`. The default `tokens` export is the light palette for metadata, manifest, and Open Graph images. `colorTokens` exposes both light and dark palettes for tests.

Open Book uses a flat paper background and an automatic dark palette through `prefers-color-scheme`. The project-specific `--paye-surface` and `--prose-surface` colours also adapt to the theme. Screenshots retain the real product colours.

## Typography

The type scale is Tailwind's default scale. Use the configured font families from `@theme`: `body`, `display`, and `mono`.

Arbitrary text sizes should stay rare and local. They are acceptable for one-off editorial display decisions such as the home hero, or for relative inline code sizing in prose.

## Brand Mark

The full stop after `Jarryd Aubert` in the header and footer is intentional. Treat it as the brass full stop in spirit: a small signal of closure, evidence, and work that has been checked rather than merely presented.

Keep the mark token-driven. In the Open Book palette it uses `text-accent`, not a hardcoded brass colour, so the meaning survives palette changes without creating a one-off colour rule.

## Primitives

Use these shared primitives before adding local class strings:

- `Link` for internal links, external links, mail links, and anchor links.
- `Button` for native button actions.
- `Card` for bordered content surfaces.
- `Figure` for content images with reserved dimensions.
- `Prose` for MDX-rendered body content.
- `JsonLd` for escaped structured data.
- `label` for small uppercase labels.
- `eyebrow` for section markers and small mono annotations.
- `focus-ring`, `link`, and `card` for shared CSS utilities.

## Adding A Pattern

Add a new primitive only when it removes real duplication or protects a repeated behaviour. Prefer a component when the pattern has semantics, such as a real button. Prefer a CSS utility when the pattern is purely presentational.

Before committing a design-system change, run:

```bash
bun run check:repo
bun run build
```

## Open Book

Newsreader supplies the editorial headings, including a real italic face. Inter keeps supporting copy quiet. The wide page gutter, expressive introduction and thin section rules come from the selected Open Book concept.

PayeTax uses genuine desktop and mobile captures. ProsePal uses its real icon and an editorial development note, never fabricated native screens. This website stays a short text entry. `open-book.tsx` and its CSS module share these presentations across the public routes.

The original essay and unlisted experiment routes retain their content and indexing behaviour. No experimental design routes are part of the public implementation.

### Image provenance

- PayeTax screenshots: live `https://payetax.co.uk/`, captured 11 October 2026. Desktop 1425 x 891, mobile 375 x 812. The calculator uses the site's example salary of GBP 50,000. Saved as WebP without changing the interface. These compact captures are served directly through Next Image with reserved dimensions, avoiding runtime recompression.
- ProsePal icon: `https://prosepal.app/apple-touch-icon.png`, retrieved 11 October 2026. The icon is identity material, not a screenshot of the native rebuild.
