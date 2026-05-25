import type { Metadata } from "next";
import Link from "next/link";
import { plannedEssays } from "@/content/writing";

const essay = plannedEssays[0];

const description =
  "AI demos reward speed. Shipping with AI rewards judgment, verification, and restraint.";

export const metadata: Metadata = {
  title: essay.title,
  description,
  alternates: {
    canonical: essay.href,
  },
  openGraph: {
    title: essay.title,
    description,
    url: essay.href,
    type: "article",
    publishedTime: essay.publishedAt,
  },
  twitter: {
    title: essay.title,
    description,
  },
};

export default function EssayPage() {
  return (
    <article className="max-w-3xl space-y-12" aria-labelledby="essay-title">
      <header className="space-y-5">
        <p className="text-sm font-medium text-stone-600 dark:text-stone-300">
          Writing
        </p>
        <div className="space-y-4">
          <h1
            id="essay-title"
            className="text-3xl font-semibold leading-tight text-stone-950 dark:text-stone-50 sm:text-4xl sm:leading-tight"
          >
            {essay.title}
          </h1>
          <p className="text-lg leading-8 text-stone-700 dark:text-stone-200">
            AI demos reward speed. Shipping rewards judgment.
          </p>
        </div>
        <p className="text-sm text-stone-600 dark:text-stone-300">
          <time dateTime={essay.publishedAt}>{essay.publishedAt}</time>
        </p>
      </header>

      <div className="space-y-7 text-base leading-8 text-stone-700 dark:text-stone-200">
        <p>
          The most impressive AI-assisted development demo is usually the one
          where almost nothing exists at the start. A prompt goes in. A working
          interface appears. There is a little suspense, a little theatre, and
          then a browser tab with something that looks surprisingly complete.
          That is a real shift. It is also a bad model for judging whether a
          product is ready to ship.
        </p>

        <p>
          Demos optimise for visible output. Shipping optimises for durable
          outcomes. Those are related, but they are not the same thing. A demo
          can hide weak acceptance criteria, missing edge cases, vague
          ownership, broken metadata, poor accessibility, and deployment
          shortcuts. A real release cannot hide those things for long. The
          closer the work gets to production, the less useful it is to ask,
          &quot;did the model make something?&quot; The better question is,
          &quot;do we understand what changed, why it changed, and what evidence
          says it is safe enough?&quot;
        </p>

        <h2 className="pt-4 text-xl font-semibold text-stone-950 dark:text-stone-50">
          Generation is not the bottleneck anymore
        </h2>

        <p>
          AI has made the act of producing code cheaper. It can scaffold a
          route, wire up metadata, generate a first pass at copy, suggest a test
          shape, or turn a rough instruction into a usable implementation. That
          speed is valuable. It gives small builders more leverage, especially
          when the task is well bounded and the surrounding system is simple
          enough to reason about.
        </p>

        <p>
          But faster production does not automatically mean safer production. In
          many cases the bottleneck moves from typing to judging. Someone still
          has to decide whether the generated output fits the intent. Someone
          has to inspect the diff, notice the extra dependency that should not
          be there, catch the route that does not belong, or say no to the
          tempting flourish that would make the demo better and the product
          worse.
        </p>

        <p>
          That operator work is not glamorous, but it is the work. The person
          using the tool has to frame the task, constrain the scope, preserve
          the architecture, run checks, read failures, and decide whether
          &quot;looks done&quot; has become &quot;is safe to ship.&quot; AI can
          help with each of those steps, but it cannot remove responsibility for
          them.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-stone-950 dark:text-stone-50">
          Acceptance criteria get more important
        </h2>

        <p>
          When code is cheap to generate, vague requests become expensive in a
          different way. The cost shows up as review time, rework, and false
          confidence. A model can fill gaps quickly, but it may fill them with
          assumptions that feel plausible and still miss the thing that matters.
          Clear acceptance criteria act as a brake on that drift.
        </p>

        <p>
          This site was useful practice in that sense. The prompts that worked
          best were bounded: build the initial shell, use Next.js App Router,
          keep it static-first, install Vercel Analytics, do not add a
          workbench, do not add 3D, do not create fake metrics. Later passes had
          similarly narrow goals: remove the scroll behaviour warning, add a
          principles section, expose a contact path, add project stubs, harden
          metadata, add security headers, and tidy the public repository
          presentation.
        </p>

        <p>
          Those constraints did not slow the work down. They made the work
          shippable. Without them, it would have been easy to wander into the
          sort of impressive side quest that creates more surface area than
          value. The 3D/workbench idea can wait. The basic site needed identity,
          routes, copy, analytics, a deployment path, email, metadata, and a
          clean public repo first.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-stone-950 dark:text-stone-50">
          Evidence beats vibes
        </h2>

        <p>
          A generated change can look tidy and still be wrong. It can pass a
          glance and fail a build. It can satisfy the local page and break
          metadata, redirects, or accessibility. That is why tests, checks, and
          release evidence become more important with AI, not less.
        </p>

        <p>
          On this site, the useful signals were ordinary ones: `bun run format`,
          `bun run lint`, `bun run lint:biome`, and `bun run build`. The build
          output showed which routes were generated. Live checks confirmed
          redirects, sitemap entries, robots, manifest, headers, and the contact
          path. Vercel inspection confirmed whether production was actually
          serving the right commit. GitHub Actions and Dependabot were not
          dramatic additions, but they made the public repo harder to break by
          accident.
        </p>

        <p>
          None of this is anti-AI. It is the opposite. If AI lets you move
          faster, your verification loop has to keep up. Speed without evidence
          just creates a nicer-looking pile of uncertainty.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-stone-950 dark:text-stone-50">
          Review loops are product work
        </h2>

        <p>
          There is a common mistake in treating review as a final gate,
          something that happens after the interesting creative work is done.
          With AI-assisted development, review is part of the creative work. The
          first generated version is often raw material. The quality comes from
          shaping it, cutting scope, checking behaviour, and asking whether it
          serves the product rather than the demo.
        </p>

        <p>
          A frontend audit is a good example. It is easy to generate a homepage
          that looks complete. It is harder to notice that there is no contact
          mechanism, project cards all point to the same place, Open Graph data
          is missing, the sitemap is thin, muted text may be low contrast, and
          the page has too many &quot;coming soon&quot; signals. Those are not
          exotic engineering problems. They are judgment problems. They are the
          difference between a page that exists and a page that earns a little
          trust.
        </p>

        <p>
          The same pattern applies to deployment. A site can build locally and
          still be on the wrong production deployment. A domain can resolve and
          still need canonical behaviour checked. A repository can be public and
          still need a license note, CI, Dependabot, secret scanning, and branch
          protection. Shipping is full of these small, unglamorous checks. They
          are easy to skip because each one feels minor. Together, they are the
          release.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-stone-950 dark:text-stone-50">
          The operator matters
        </h2>

        <p>
          The best AI workflow I have found so far is not &quot;ask for
          everything.&quot; It is closer to working with a fast, capable
          collaborator who needs clear boundaries. I want the tool to propose,
          implement, inspect, and verify. I do not want it to silently expand
          the product, invent facts, add dependencies, or turn every task into a
          redesign.
        </p>

        <p>
          That means the operator has to keep a thread of intent through the
          work. What is the smallest useful change? What should not change? What
          evidence will we accept? What is deliberately out of scope? Where is
          the risk? A good prompt is not just a request for output. It is a set
          of operating conditions.
        </p>

        <p>
          This is especially important for small builders. AI can make a solo or
          small-team project feel less constrained by time and blank-page
          friction. That is powerful. But it also makes it easier to create more
          than you can maintain. The discipline is not only in shipping more. It
          is in choosing what not to ship yet.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-stone-950 dark:text-stone-50">
          Looks done is not done
        </h2>

        <p>
          The central gap between AI demos and shipping is the gap between
          appearance and confidence. A demo needs to look done. A release needs
          to be understood well enough that someone is willing to own it.
        </p>

        <p>
          That does not mean every small change needs enterprise ceremony. It
          means the evidence should match the risk. For a personal site, the
          evidence might be a clean build, working routes, correct redirects,
          readable copy, accessible focus states, sane metadata, no secrets in
          the repo, and a deployment connected to the right branch. For a tax
          calculator, a payment flow, a healthcare workflow, or anything with
          meaningful user harm, the bar should be much higher.
        </p>

        <p>
          AI-assisted development is not a shortcut around judgment. It is a way
          to spend less time on mechanical production and more time on framing,
          review, testing, release evidence, and product decisions. Used well,
          that is a serious advantage. Used lazily, it just moves the mess
          faster.
        </p>

        <p>
          The promise is not that AI makes shipping effortless. The promise is
          that it can make disciplined shipping more accessible. The work still
          has to be bounded. The diff still has to be read. The checks still
          have to pass. The operator still has to decide whether the result is
          good enough to carry their name.
        </p>
      </div>

      <footer className="border-t border-stone-200 pt-8 dark:border-stone-800">
        <Link
          href="/writing"
          className="text-sm font-medium text-stone-800 underline decoration-stone-300 underline-offset-4 outline-none hover:text-stone-950 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50 dark:text-stone-100 dark:decoration-stone-600 dark:hover:text-white dark:focus-visible:ring-stone-50 dark:focus-visible:ring-offset-stone-950"
        >
          Back to writing
        </Link>
      </footer>
    </article>
  );
}
