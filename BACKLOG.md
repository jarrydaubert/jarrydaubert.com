# Backlog

This is a staged backlog for `jarrydaubert.com`. The site is live, so changes should stay incremental: public URLs stable, CI green, Vercel deployable, and easy to roll back.

## Current State

- Stack: Next.js App Router, TypeScript, Tailwind CSS v4, MDX content, Bun, Biome, Vitest, Vercel, Cloudflare DNS, Vercel Analytics.
- Content lives in `src/content`.
- Site identity and navigation live in `src/lib/site.ts`.
- Metadata, sitemap, robots, RSS, manifest, and OG images are generated from code and content.
- Reusable design-system rules live in `DESIGN.md`.
- Normal validation before commit:

```bash
bun run check:repo
bun run build
```

## Done

- [x] Tester-first positioning restored across site copy, metadata, and project summaries.
- [x] Public wording simplified so recruiters and non-specialist readers can understand the work.
- [x] Cool-paper palette and Newsreader/Inter/JetBrains Mono type system applied.
- [x] Home hero typography tuned for the serif display font.
- [x] Shared design primitives added or consolidated: `Link`, `Button`, `Card`, `Figure`, `Prose`, `label`, `eyebrow`, `focus-ring`, `link`, and `card`.
- [x] Light and dark colour tokens exposed through `src/lib/tokens.ts`.
- [x] Token tests cover drift, expected token names, and contrast in light and dark palettes.
- [x] Content moved to MDX files with Zod frontmatter validation.
- [x] Dynamic writing and project pages generate static params, metadata, sitemap entries, and OG data from content.
- [x] CI runs lockfile install, repo checks, and production build.
- [x] CodeQL, Dependabot config, tracked env guard, and lockfile policy guard are in place.
- [x] No local environment variables are required.

## Keep Watching

- [ ] Final human read before pushing major copy changes.
- [ ] Verify DNSSEC status if changing DNS settings.
- [ ] Run Lighthouse only when there is a specific performance or SEO question, not as standing CI.
- [ ] Decide whether the header `Projects` link should stay as `/#projects` or point to `/projects`.
- [ ] Add richer project case studies when there is real detail to show.
- [ ] Add another essay when there is a useful testing lesson to publish.
- [ ] Consider route smoke tests only if route generation starts changing often.
- [ ] Consider accessibility smoke tests only if there is enough stable UI to justify the maintenance.

## Guardrails

- Do not reintroduce the retired builder-first positioning.
- Do not make AI the headline.
- Do not inflate Evolution Padel beyond a live website for a pre-launch client venue.
- Do not add CMS, database, auth, comments, newsletter, search, 3D/workbench, animation system, component library, visual-regression workflow, Lighthouse workflow, or governance workflow without a specific need.
- Do not add `.env.example` unless local environment variables become required.
