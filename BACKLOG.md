# Backlog

This is a staged backlog for `jarrydaubert.com`. The site is live, so architecture work should be incremental: public URLs unchanged, visual output materially unchanged, CI green, Vercel deployable, and easy to roll back.

## Current Launch And Ops

- [ ] Wait for DNSSEC to move from pending to active.
- [ ] Enable or confirm Dependabot alerts in GitHub settings.
- [ ] Enable or confirm Dependabot security updates in GitHub settings.
- [ ] Enable or confirm secret scanning and push protection in GitHub settings.
- [ ] Enable or confirm branch protection/ruleset for `main` after CI passes.
- [ ] Consider requiring CI status checks on `main`.
- [ ] Human copy review.
- [ ] Add real GitHub link on the site.
- [ ] Run Lighthouse after deployment.
- [ ] Submit to Google Search Console after launch.
- [ ] Optional later: configure send-as or full mailbox if needed.

## Architecture Principles

- [ ] Treat this as a staged internal refactor, not a rewrite or re-platform.
- [ ] Keep Biome first-class: formatting plus general code hygiene.
- [ ] Keep ESLint for Next.js and React ecosystem linting.
- [ ] Avoid a CMS, database, auth, comments, newsletter, search, 3D/workbench, animation system, component library, visual redesign, strict CSP, or full observability stack as part of this work.
- [ ] Do not add shadcn/ui, Radix, Framer Motion, or a component library.

## P1 - Safe Architecture Foundation

- [x] Centralise site config and identity constants in `src/config/site.ts`.
- [x] Move site URL, name, short name, email, description, job title, social links, nav links, and JSON-LD person data into the site config.
- [x] Add `src/lib/routes.ts` as a route registry for static public routes.
- [x] Add `src/lib/metadata.ts` with a shared metadata builder for canonical URLs, Open Graph, Twitter cards, title templates, shared OG image defaults, and article metadata.
- [x] Update layout and page metadata to use the metadata builder.
- [x] Update JSON-LD to use the site config.
- [x] Keep public output unchanged.

Validation:

```bash
bun run format
bun run lint:biome
bun run lint
bun run build
```

## P1 - Generated SEO

- [x] Replace `src/app/sitemap.xml` with `src/app/sitemap.ts`.
- [x] Replace `src/app/robots.txt` with `src/app/robots.ts`.
- [x] Generate URLs from the site config, static route registry, writing content, and project content.
- [x] Include `lastmod` values where available.
- [x] Ensure robots references the sitemap.
- [x] Ensure the sitemap includes `/`, `/about`, `/projects`, `/writing`, project pages, and the published essay.

## P1 - Lightweight Verification

- [ ] Add lightweight tests where they protect real drift risk.
- [ ] Test that the site config exports a valid URL and email.
- [ ] Test that the route registry contains expected canonical routes.
- [ ] Test that the metadata builder outputs canonical, Open Graph, and Twitter fields.
- [ ] Test that sitemap generation includes all public routes.
- [ ] Test that writing entries have unique slugs.
- [ ] Test that project entries have unique slugs.
- [ ] Prefer Vitest first; do not add Playwright until there is a clear need.

## P2 - Content Scalability

- [ ] Add another full essay.
- [ ] Add richer project case studies.
- [x] Move writing toward content files with typed metadata when adding the second essay or when the TSX route becomes annoying to maintain.
- [ ] Move project case studies toward content files with typed metadata when adding the first real case study.
- [ ] Add `src/content/schema.ts` with Zod frontmatter validation if/when MDX lands.
- [ ] Add `src/content/writing/<slug>.mdx` for essays if/when MDX lands.
- [ ] Add `src/content/projects/<slug>.mdx` for project case studies if/when MDX lands.
- [x] Add a content loader.
- [x] Add generic `writing/[slug]` and `projects/[slug]` pages.
- [x] Generate static params from content.
- [x] Generate metadata and sitemap entries from content metadata.
- [x] Keep existing essay and project URLs stable.

Potential MDX packages:

```text
gray-matter
zod
remark-gfm
rehype-slug
rehype-autolink-headings
next-mdx-remote/rsc
```

## P3 - Styling Cleanup

- [ ] Extract repeated focus, link, and card styles.
- [ ] Add a `cn()` helper if it reduces real duplication.
- [ ] Introduce semantic color tokens in `globals.css`.
- [ ] Add small reusable utilities such as `focus-ring`, `text-link`, `surface-card`, `status-pill`, and `muted`.
- [ ] Reduce dark-mode class duplication gradually.
- [ ] Keep the design sparse and text-led.
- [ ] Avoid atoms/molecules/organisms folder structure.

Suggested semantic tokens:

```text
--color-bg
--color-surface
--color-fg
--color-muted
--color-subtle
--color-border
--color-border-hover
--color-ring
--color-accent
```

## P4 - Test Expansion

- [ ] Add Playwright route smoke tests only if useful.
- [ ] Check homepage, about, projects, writing, and essay routes return 200.
- [ ] Add metadata/header checks.
- [ ] Add axe accessibility smoke tests.
- [ ] Consider checks for `www` redirect and security headers if the deployment setup makes them practical.

## P5 - Tooling Cleanup

- [ ] Make the `check` script authoritative once tests exist.
- [ ] Keep `format:check`, `lint:biome`, `lint`, `typecheck`, `test`, and `build` as separate quality gates where useful.
- [ ] Clarify CI jobs around format, Biome lint, ESLint, typecheck, tests, and build.
- [ ] Keep Dependabot grouping minor/patch only.
- [ ] Review whether `lint:biome` is still giving useful signal, but do not remove Biome.

Target pipeline:

```bash
bun run format:check
bun run lint:biome
bun run lint
bun run typecheck
bun run test
bun run build
```
