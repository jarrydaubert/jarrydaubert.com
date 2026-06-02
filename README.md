# jarrydaubert.com

Personal website for Jarryd Aubert, a QA-minded product builder focused on useful software, AI-assisted workflows, and quality.

Live site: [https://jarrydaubert.com](https://jarrydaubert.com)

This site is a personal home base for selected projects, writing, and contact. It presents work around practical software quality, AI-assisted delivery, and evidence-led product building.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- MDX (`next-mdx-remote`) content with Zod-validated frontmatter
- Bun
- Biome
- Vitest
- Vercel
- Cloudflare DNS
- Vercel Analytics

## Project Structure

```text
src/app
src/components
src/content
src/lib
public
.github/workflows
```

- `src/app` contains the App Router routes and metadata routes (sitemap, robots, manifest, RSS, OG images).
- `src/components` contains reusable primitives (`Link`, `Card`, `Prose`, ...) and site components.
- `src/content` contains essays and project case studies as MDX (filename is the slug) plus the Zod frontmatter schema.
- `src/lib` contains the content loader, metadata builder, site config, and design-token reader.
- `public` contains static assets.
- `.github/workflows` contains CI.

## Local Development

```bash
bun install
bun dev
bun run format
bun run lint:biome
bun run typecheck
bun run test
bun run build
bun run check
```

## Quality Checks

The repo uses Biome for formatting and linting, TypeScript for type safety, Vitest for content/metadata/token invariants, GitHub CodeQL for JavaScript/TypeScript security scanning, and `next build` for production build validation. Frontmatter is validated by Zod at build time, so a malformed essay or project fails the build.

GitHub Actions runs the same quality gate on pushes and pull requests to `main`: Biome format check, Biome lint, TypeScript, tests, and production build. Dependabot checks dependencies weekly.

No local environment variables are required to run the site, so this repo intentionally does not include a `.env.example` file.

## Deployment

Production is deployed on Vercel. The `main` branch is the production branch, and Vercel deploys from GitHub. Cloudflare manages DNS.

## Security

No secrets are required in this repository. Security concerns should be reported privately using the guidance in [SECURITY.md](./SECURITY.md). Please do not open public GitHub issues containing secrets or vulnerability details.

## License

This repository is public for transparency, but it is not an open-source template. All rights reserved unless stated otherwise. See [LICENSE.md](./LICENSE.md).
