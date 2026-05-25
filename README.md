# jarrydaubert.com

Personal website for Jarryd Aubert — a QA-minded product builder focused on useful software, AI-assisted workflows, and quality.

Live site: [https://jarrydaubert.com](https://jarrydaubert.com)

This site is a personal home base for selected projects, writing, and contact. It presents work around practical software quality, AI-assisted delivery, and evidence-led product building.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Bun
- Biome
- ESLint
- Vercel
- Cloudflare DNS
- Vercel Analytics

## Project Structure

```text
src/app
src/components
src/content
public
.github/workflows
```

- `src/app` contains the App Router routes and metadata files.
- `src/components` contains reusable site components.
- `src/content` contains typed project, writing, and principle data.
- `public` contains static assets.
- `.github/workflows` contains CI.

## Local Development

```bash
bun install
bun dev
bun run format
bun run lint
bun run lint:biome
bun run build
```

## Quality Checks

The repo uses Biome for formatting, ESLint for code linting, and `next build` for production build validation.

GitHub Actions runs format, lint, and build checks on pushes and pull requests to `main`. Dependabot checks dependencies weekly.

## Deployment

Production is deployed on Vercel. The `main` branch is the production branch, and Vercel deploys from GitHub. Cloudflare manages DNS.

## Security

No secrets are required in this repository. Security concerns should be reported privately using the guidance in [SECURITY.md](./SECURITY.md). Please do not open public GitHub issues containing secrets or vulnerability details.

## License

This repository is public for transparency, but it is not an open-source template. All rights reserved unless stated otherwise. See [LICENSE.md](./LICENSE.md).
