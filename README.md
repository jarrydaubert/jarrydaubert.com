# jarrydaubert.com

Personal website for Jarryd Aubert: a sharp, static-first home base for a QA-minded product builder focused on useful software, AI-assisted workflows, and quality.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Bun
- Biome
- ESLint
- Vercel deployment target
- Vercel Analytics

## Local Setup

```bash
bun install
bun dev
```

Open `http://localhost:3000`.

## Checks

```bash
bun run lint
bun run lint:biome
bun run format
bun run build
```

`bun run check` runs Biome checks and a production Next build.

## Deploy

Hosted on Vercel as a standard Next.js project. Do not add `output: 'export'`; Vercel handles static rendering automatically for this shell.

- Production domain: `https://jarrydaubert.com`
- `https://www.jarrydaubert.com` redirects to `https://jarrydaubert.com`
- Public repository: `https://github.com/jarrydaubert/jarrydaubert.com`
- Vercel project: `jarrydaubert`
- Vercel workspace/team: JGF
- Package manager: Bun
- Framework: Next.js App Router
- Install command: `bun install`
- Build command: `bun run build`
- Production deploys from the `main` branch through Vercel's Git integration
- Vercel Analytics confirmed working
- DNS provider: Cloudflare
- Vercel DNS records: Cloudflare DNS-only CNAME records for `@` and `www` to Vercel's recommended target
- Email routing: Cloudflare Email Routing active and tested for `me@jarrydaubert.com` to `jarrydaubert@gmail.com`
- Catch-all email: disabled
- DMARC: `p=none` via Cloudflare reporting
- DNSSEC: pending/managed in Cloudflare

Current Vercel project:

- Owner/team: Project Javelin
- Project: `jarrydaubert`
- Preview: `https://jarrydaubert-gggh0lihh-jgf-project-javelin.vercel.app`
- Default production alias: `https://jarrydaubert.vercel.app`

## Scope

The `/workbench` route and any 3D ideas are explicitly out of scope for v1.

## License

This repository is public for transparency and reference only. The source code, content, copy, visual design, and assets are not licensed for reuse without prior written permission. See [LICENSE.md](./LICENSE.md).

## Repository Security

- This is a public personal-site repository.
- No deployment secrets or service tokens are required in GitHub.
- Vercel deploys from `main` through its Git integration.
- CI validates formatting, linting, and production builds.
- Dependabot alerts, security updates, secret scanning, push protection, and branch protection should be enabled in GitHub settings.
- The repository remains all-rights-reserved; see [LICENSE.md](./LICENSE.md).

## Production Checklist

Handled:

- Domain connected
- `www` redirect configured
- Vercel Analytics active
- Bun lockfile committed
- Cloudflare Email Routing active
- Robots and sitemap in place
- Basic metadata, Open Graph, Twitter Card, and Person JSON-LD in place
- Basic security headers configured

Deferred intentionally:

- Strict Content Security Policy
- WAF and rate limiting
- Log drains
- Observability Plus
- Speed Insights
- Load testing
- Enterprise controls
