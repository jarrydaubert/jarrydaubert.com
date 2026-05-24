# jarrydaubert.com

Personal website for Jarryd Aubert: a sharp, static-first home base for a QA-minded product builder focused on useful software, AI-assisted workflows, and quality.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Bun
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

## Deployment

Deploy to Vercel as a standard Next.js project. Do not add `output: 'export'`; Vercel handles static rendering automatically for this shell.

## Scope

The `/workbench` route and any 3D ideas are explicitly out of scope for v1.
