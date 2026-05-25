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

- Package manager: Bun
- Install command: `bun install`
- Build command: `bun run build`
- Domain: `jarrydaubert.com`
- `www.jarrydaubert.com` redirects to `https://jarrydaubert.com`
- DNS: Cloudflare DNS-only CNAME records for apex and `www` pointing to Vercel recommended targets
- Vercel Analytics confirmed working

Current Vercel project:

- Owner/team: Project Javelin
- Project: `jarrydaubert`
- Preview: `https://jarrydaubert-gggh0lihh-jgf-project-javelin.vercel.app`
- Default production alias: `https://jarrydaubert.vercel.app`

## Scope

The `/workbench` route and any 3D ideas are explicitly out of scope for v1.
