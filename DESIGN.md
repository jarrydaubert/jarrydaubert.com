# Design System

This site keeps the design system small on purpose. It should make repeated decisions consistent without becoming ceremony.

## Tokens

Reusable UI colour lives in `src/app/globals.css` inside `@theme`. Those values generate Tailwind utilities such as `bg-surface`, `text-fg`, `border-border`, and `shadow-cta`.

JavaScript reads the same colour source through `src/lib/tokens.ts`. The default `tokens` export is the light palette for metadata, manifest, and Open Graph images. `colorTokens` exposes both light and dark palettes for tests.

The body gradients and dot texture are atmospheric page treatment, not reusable UI colour. Keep those scoped to `body` and `body::before`; do not reuse them in components.

## Typography

The type scale is Tailwind's default scale. Use the configured font families from `@theme`: `body`, `display`, and `mono`.

Arbitrary text sizes should stay rare and local. They are acceptable for one-off editorial display decisions such as the home hero, or for relative inline code sizing in prose.

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
