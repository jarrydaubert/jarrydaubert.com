# AGENTS.md: jarrydaubert.com

Instructions for AI agents working in this repository.

Read the positioning and voice sections before editing any copy. A change that breaks one of those rules is a regression even if the copy sounds polished.

## What this is

Personal site for Jarryd Aubert.

It exists as proof-of-work credibility: a software tester who builds and ships his own apps to understand what he tests. Building is in service of testing. It is the lab, not a rival identity.

One-line spine:

**A software tester who builds and ships his own apps to understand what he tests.**

Primary reader:

Hiring managers and recruiters for QA, software testing, test automation, and quality-focused engineering roles, plus anyone who reaches the site from LinkedIn, GitHub, or job applications.

What this is not:

* Not a consultancy or freelance landing page. There is no "hire me to build your software" ask, and copy must not drift toward one.
* Not product marketing. The apps have their own sites. This site positions the person.
* Not an AI portfolio. AI assistance is part of the working method, not the headline identity.
* Not a place to be modest or to oversell. State things at their true level.

## Positioning guardrails

These are load-bearing. Do not casually rewrite them.

1. **Tester-first, always.** Testing is the identity. Building is how he learns what he tests. Never reorder this into "builder who also tests," "indie dev," "AI developer," or "founder."

2. **AI is demoted.** The site can mention that projects were built with AI assistance where relevant, but AI is never the headline. Vendor or model names must not appear in the hero or positioning copy. Feature-level AI language is allowed only inside a project detail when it helps explain the testing challenge.

3. **No overclaiming, and no underclaiming.** Raise labels to match reality. A shipped app can be called live. But do not invent delivered client work, metrics, testimonials, commercial traction, team size, funding, or production maturity.

4. **The retired brand stays retired.** Do not reintroduce "QA-minded product builder," or any builder-first or AI-forward framing. If you find that wording in copy, metadata, Open Graph text, alt text, README copy, or generated content, treat it as a bug.

5. **Acts, not vendors.** Describe what was done and what it proves. Do not lead with tools or model names.

Good direction:

* "Built and shipped a tax calculator that can be checked against a real payslip."
* "Tests deterministic and non-deterministic products differently."
* "Uses building as a way to understand failure modes."

Bad direction:

* "AI-powered builder."
* "Founder of multiple apps."
* "Product builder with QA experience."
* "Built using GPT, Claude, Gemini, or other model names."

## Voice and copy rules

* **No em dashes.** Use full stops, commas, colons, semicolons, or parentheses. This is a hard rule everywhere, including markdown, metadata, comments, and generated copy.
* **UK English.** This is a UK-facing credibility surface. Use UK spelling on this site.
* **Surface-specific spelling matters.** The ProsePal product site may use US English for its audience. Do not copy spelling rules blindly between surfaces.
* **Calm, evidence-led, low hype.** Avoid superlatives, growth-marketing tone, inflated labels, and vague credibility claims.
* **Concrete over slogan.** Prefer earned conclusions backed by specific examples.
* **Name projects consistently.** Use one spelling and capitalisation everywhere: ProsePal, PayeTax, Evolution Padel.

Target register:

"I do not just want something to work. I want to know how it fails."

Then support it with concrete evidence.

## The work section

The work section should show a testing spectrum, not just "three things I built."

The intended structure for each project card is:

* what it is
* what I did
* what it proves

The three projects can have equal prominence, but each card should surface what that project uniquely proves.

### PayeTax

PayeTax is the deterministic case.

It is a live UK tax calculator where correctness can be checked against a hard oracle. In plain terms: the output can be compared to a real payslip.

What it proves:

* correctness testing
* edge-case thinking
* deterministic calculation logic
* trust in outputs where there is a right answer

Do not turn this into generic SaaS or fintech marketing.

### ProsePal

ProsePal is the non-deterministic case.

It is a live message-writing app where there is no single right answer. Quality depends on fit, tone, context, usefulness, and judgement.

What it proves:

* testing without a fixed oracle
* quality judgement under ambiguity
* AI-assisted product evaluation
* rubric-led thinking
* user outcome testing rather than only code correctness

Do not make AI the headline. The interesting part is not "uses AI." The interesting part is how quality is judged when outputs are subjective.

### Evolution Padel

Evolution Padel is a careful credibility case.

The venue site is live. The venue itself is pre-launch. Booking is not live unless the repo or live site proves otherwise.

Acceptable framing:

* "pre-launch client venue"
* "early digital work"
* "live venue website"
* "client project, framed carefully"

Do not inflate it into:

* delivered commercial platform
* live booking system
* operating venue
* proven revenue channel
* large client engagement

"Live / client project" is already generous. Keep the wording honest.

## Determinism spectrum

The PayeTax and ProsePal pairing is intentional.

PayeTax shows a deterministic testing problem:

* there is a right answer
* the answer can be checked
* failures are measurable

ProsePal shows a non-deterministic testing problem:

* there may be several acceptable answers
* quality is contextual
* failures are partly subjective
* evaluation needs rubrics and judgement

Do not flatten this into "apps I built." The point is the testing range.

## Cross-surface consistency

This site is one node in a wider credibility surface:

* GitHub profile
* LinkedIn
* App Store listings
* PayeTax site
* ProsePal site
* Evolution Padel site

Rules:

* Credibility surfaces lead tester-first.
* Product surfaces sell the product on their own terms.
* Do not copy product marketing language into the personal site without checking fit.
* Do not copy personal positioning into product sites if it weakens the product message.
* Metadata and Open Graph descriptions must stay tester-first.
* If positioning changes here, flag GitHub bio and LinkedIn headline as follow-up surfaces in the PR description.

Recommended meta direction:

"Jarryd Aubert is a software tester who builds and ships his own apps to understand what he tests."

Avoid stale or retired meta direction:

"QA-minded product builder."

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

* Reintroduce the old "QA-minded product builder" brand.
* Reframe Jarryd as builder-first, founder-first, AI-first, or consultant-first.
* Put AI, vendor, or model names in hero or positioning copy.
* Invent metrics, testimonials, client engagements, revenue, user numbers, or team size.
* Inflate Evolution Padel beyond its real state.
* Use em dashes.
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
