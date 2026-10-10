# AGENTS.md: jarrydaubert.com

Instructions for AI agents working in this repository.

Read the positioning and voice sections before editing any copy. A change that breaks one of those rules is a regression even if the copy sounds polished.

## What this is

Personal site for Jarryd Aubert.

It exists to show what he builds and how he builds it: real web, mobile and AI projects, the architecture and decisions underneath them, and the AI-assisted way he works. His testing career is covered by his CV and LinkedIn. This site is for the work.

One-line spine:

**Exploring AI by building real things, and checking that they work.**

Primary reader:

Curious technical people, founders and teams building with AI, and anyone who reaches the site from GitHub, LinkedIn or a project. Assume a reader who will open the repo and check.

What this is not:

* Not a CV or a LinkedIn copy. Career history is supporting context, kept short.
* Not a consultancy or freelance landing page. There is no "hire me to build your software" ask.
* Not product marketing. The apps have their own sites. This site shows how they are built.
* Not a claim to be a professional software engineer or AI researcher. State things at their true level.

## Positioning guardrails

These are load-bearing. Do not casually rewrite them.

1. **Building and AI lead.** The headline identity is someone exploring AI by building and shipping real things: websites and an iPhone app, built with AI coding agents, with AI running inside ProsePal itself. Testing is how he keeps the work honest. It appears as evidence (how each project is checked), not as the headline identity.

2. **Screenshots and creative presentation lead.** A project can open with a screenshot, a live preview, an interaction or a story. Technical detail is optional and should earn its place by helping the reader understand the work. Let the project determine the form and order; do not require stack or architecture sections.

3. **Say who did what.** AI coding agents propose approaches and write code as part of a collaboration. He directs the work, evaluates proposals, reviews changes and owns the final decisions, including architecture and validation. Where a page describes a build, make that division of work clear. Do not imply that he hand-wrote all the code or that agents own the final decisions.

4. **No overclaiming, and no underclaiming.** Raise labels to match reality. Do not invent delivered client work, metrics, testimonials, commercial traction, user numbers, team size, funding, performance figures or production maturity.

5. **Every project states its real release state.** Live, in TestFlight, in development or archived, taken from the repo or the live product, never assumed. An architecture that is not yet released must not be presented as the shipped product. If the state cannot be verified, ask.

6. **Tools and vendors are allowed where they describe the work.** Naming the stack on project and "how I build" pages can help explain the work (for example Next.js, SwiftUI, Supabase, Apple Foundation Models, Playwright, Codex, Claude). Do not name-drop tools or model vendors in the hero, and do not claim a vendor is deployed in production unless the deployed configuration proves it. A configurable OpenAI-compatible endpoint is not evidence of which provider is used.

Good direction:

* "A native iPhone app that drafts on-device with Apple's model and sends harder moments to a cloud model through a Supabase edge function."
* "A tax calculator with Jest unit tests and Playwright end-to-end tests across desktop and mobile browsers."
* "Built with AI coding agents. I direct the work, evaluate proposals, review changes and own the final decisions."

Bad direction:

* "AI engineer." "Full-stack developer." "Founder of multiple apps."
* "Built entirely by me" when agents wrote the code.
* "Production-grade AI platform" or any maturity label the repo does not support.
* A wall of logos with no explanation of what each tool does in the system.

## Voice and copy rules

* **No auto-substituted typography.** No em dashes and no en dashes. No curly or smart quotes, and no smart apostrophes. No ellipsis character; write three full stops if you need one. Use full stops, commas, colons, semicolons, or parentheses to separate clauses, and straight quotes for quotation. This is a hard rule everywhere, including markdown, metadata, comments, alt text, and generated copy. The reason fences the whole category: auto-substituted typography is an AI tell, and this site's credibility depends on copy that does not read as generated. A rule that banned only em dashes would invite an agent to treat a curly quote as acceptable. It is not.
* **UK English.** Use UK spelling on this site.
* **Surface-specific spelling matters.** The ProsePal product site may use US English for its audience. Do not copy spelling rules blindly between surfaces.
* **Curious, specific, low hype.** Enthusiasm is welcome when it is about something concrete. Avoid superlatives, growth-marketing tone, inflated labels and vague claims.
* **Concrete over slogan.** Prefer a real decision, a real diagram or a real failure over an adjective.
* **Name projects consistently.** Use one spelling and capitalisation everywhere: ProsePal and PayeTax.

## Design and content anti-patterns

These are the defaults an agent falls into. Each is forbidden, and each carries its reason so it cannot be reasoned around.

* **When a section feels flat or thin, fix the content. Do not decorate.** No icons, gradients, badges or ornament added to solve what is really a content problem. Decoration over weak content reads as generated filler.
* **Diagrams must show the real system.** An architecture diagram is drawn from the repo, with real component names and real data flow. No generic boxes, no components that do not exist.
* **Do not pad to look complete.** A short, true list beats a long, padded one.
* **Visual ambition is welcome.** Motion, interaction, illustration and a strong visual identity are encouraged when they show the work or the system. They are not a substitute for content.
* **Do not reach for the generic AI-startup aesthetic.** Gradient hero, logo soup, founder energy and "revolutionary" copy undermine a site whose point is that the work is real.

## The work section

Each project should have a short description, an accurate release status and useful links. Screenshots and creative presentation should lead. Technical detail is optional and should earn its place by helping the reader understand the work. Do not force every project into the same layout or require a project-page checklist.

### PayeTax

Web development and test automation. A live UK tax calculator. It has no runtime AI: its AI story is how it was built, not what it does. The interesting parts are the calculation engine, the test suite (unit and end-to-end across browsers and devices, plus accessibility checks), monitoring and CI. Correctness against real payslips is evidence, not the headline.

Do not turn this into generic SaaS or fintech marketing.

### ProsePal

Mobile development and AI integration. The interesting parts are the native iPhone app, the split between on-device and cloud generation, routing, prompt and user-data separation, the backend, and the evaluation tooling. What the app writes is context, not the headline.

Check the release state of the native app against the repo and the App Store before describing it as live. The repo records an archived Flutter production app; do not merge the two.

### This site

AI-assisted development. How the site is built and kept honest: the stack, the CI gates, and the workflow of directing the work, evaluating AI proposals, reviewing changes and owning the final decisions. Real examples from the repo's history are the evidence.

## Cross-surface consistency

This site is one node in a wider surface:

* GitHub profile
* LinkedIn
* App Store listings
* PayeTax site
* ProsePal site

Rules:

* LinkedIn and the CV carry the testing career. This site carries the builds.
* Product surfaces sell the product on their own terms. Do not copy product marketing into this site, or this site's framing into product sites.
* Metadata and Open Graph descriptions must match the positioning above.
* If positioning changes here, flag the GitHub bio and LinkedIn headline as follow-up surfaces in the PR description.

Recommended meta direction:

"Jarryd Aubert explores AI by building real things: web apps, an iPhone app, and the architecture and checks underneath them."

Retired meta direction (do not reintroduce):

"QA-minded product builder."
"A software tester who builds and ships his own apps to understand what he tests."

## Tech, setup, and commands

Confirm these against the repo before editing this section. If the repo changes, update this section in the same PR.

Current expected setup:

* Stack: Next.js and TypeScript under `src/`.
* Package manager: Bun.
* Install: `bun install --frozen-lockfile`.
* Repo check: `bun run check:repo`.
* Build: `bun run build`.

Normal local validation before commit:

```bash
bun install --frozen-lockfile
bun run check:repo
bun run build
```

If any of these commands are wrong, do not guess. Inspect `package.json`, the workflow files, and the README, then update this section with verified facts.

## Generated files and artifacts

If the repo generates content or artifacts:

* edit the source or generator, not generated output
* run the relevant generator if one exists
* verify no unintended generated drift remains
* use a `git diff` review before committing

The failure mode to avoid is a templated copy change that propagates a wrong claim across many generated pages.

## CI and repo quality philosophy

This repo follows a lean quality posture:

**Nets, not scaffolding.**

CI should answer:

"Is this safe enough to merge?"

CI should not become a ceremony layer that slows normal development.

### Hard gates

The hard gate should remain small, deterministic, and repeatable.

Expected hard gate:

* install from lockfile
* lint or repo health checks
* typecheck, if configured
* tests, if configured
* production build

The required branch protection check should be the main CI gate.

### Security scanning

Security scanning is part of the baseline, not optional decoration.

Expected security posture:

* CodeQL for JavaScript and TypeScript
* Dependabot configuration
* Dependabot security updates enabled
* secret scanning enabled
* push protection enabled
* protected main branch

Do not add extra languages to CodeQL unless the repo contains meaningful source code in those languages.

### Environment variables

Do not create fake config theatre.

If runtime or build environment variables are required:

* commit `.env.example`
* include placeholder names only
* never commit real secrets
* document where production values live

If no local environment variables are required:

* do not add an empty `.env.example`
* document that no local env vars are required

### Visual checks

Visual checking is useful, but it belongs primarily in the agent and developer loop.

For frontend changes, the agent must visually inspect the affected page or component before committing. This is exploratory visual QA, not permanent visual-regression baseline maintenance.

For UI changes, the agent should:

* run the app locally when practical
* inspect the changed route or component in a browser
* check obvious responsive states where relevant
* check console errors
* check the main interaction path
* add or update tests for behaviour that should remain protected
* run the deterministic local validation commands before commit

Do not add visual-regression, Lighthouse, flake-audit, governance, or release workflows by default.

Only add heavier workflows when there is a specific, justified need. If added, explain:

* what risk the workflow catches
* whether it blocks merges
* how often it runs
* what maintenance it creates
* how to remove it if it stops paying its way

## AI-assisted development rule

AI-assisted code is allowed.

Unverified AI-assisted code is not.

Agents may suggest, edit, refactor, and generate code, but every change must be grounded in the repo's actual state and validated before commit.

Verify against the source before asserting. An impressive-looking summary is not verification. Reading the file, running the command, or checking the artifact is. If you cannot verify a claim, cut it or mark it clearly as unverified.

Agents must not:

* invent commands
* invent product claims
* invent metrics
* invent technical capabilities
* invent environment variables
* invent tests that were not run
* assert a repo control exists without checking it
* leave placeholder instructions in committed files

## Things an agent must never do

* Reintroduce the retired "QA-minded product builder" or tester-first spine.
* Reframe Jarryd as a professional software engineer, AI researcher, founder or consultant.
* Imply he hand-wrote all the code, or that agents own the final decisions.
* Name-drop tools or model vendors in the hero, or claim a production vendor the deployed configuration does not prove.
* Describe a project as live or released without checking its real release state.
* Draw an architecture diagram that does not match the repo.
* Invent metrics, testimonials, client engagements, revenue, user numbers, or team size.
* Use em dashes, en dashes, curly quotes, smart apostrophes, or any other auto-substituted typography.
* Decorate a flat or thin section instead of fixing its content.
* Assert something from a summary without checking the source.
* Change the positioning or target reader unless explicitly asked.
* Hand-edit generated files instead of their source.
* Tidy a privacy, security, or factual claim before confirming it is true.
* Add workflows just because they look mature.
* Add `.env.example` if no env vars are required.
* Add visual or Lighthouse checks as default CI scaffolding.

## Pull request expectations

A PR should make the state of the change clear.

For copy changes, include:

* what positioning or wording changed
* whether metadata changed
* whether any cross-surface follow-up is needed
* confirmation that no retired positioning was reintroduced
* confirmation that every release state and stack claim was checked against the repo or live product
* confirmation that no em dashes were added

For frontend changes, include:

* what page or component changed
* what visual inspection was performed
* any responsive states checked
* any tests added or updated
* local validation commands run

For CI or repo-control changes, include:

* workflows added, changed, or removed
* required status checks affected
* branch protection or ruleset changes
* security controls affected
* reason the change is a net, not scaffolding

## When unsure

Ask, or leave it.

Honesty over polish.

If a change requires asserting something you cannot verify is true, do not assert it. The site's argument is that the story never outruns the real state. Agent edits are held to the same bar.
