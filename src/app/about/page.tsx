import type { Metadata } from "next";

const siteDescription =
  "Personal site of Jarryd Aubert \u2014 QA-minded product builder focused on useful software, AI-assisted workflows, and quality.";

const focusAreas = [
  "Practical software quality",
  "Test strategy",
  "AI-assisted development workflows",
  "Small product shipping",
];

const workingPrinciples = [
  "Start with risk.",
  "Make quality visible.",
  "Keep systems small enough to reason about.",
  "Use AI to accelerate work, not excuse weak judgment.",
];

export const metadata: Metadata = {
  title: "About",
  description: siteDescription,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold text-stone-950 dark:text-stone-50 sm:text-4xl">
          About
        </h1>
        <p className="text-lg leading-8 text-stone-700 dark:text-stone-200">
          Jarryd Aubert is a Senior QA specialist and product builder based in
          the UK.
        </p>
      </header>

      <div className="space-y-5 text-base leading-8 text-stone-600 dark:text-stone-300">
        <p>
          I work at the intersection of software quality, practical product
          delivery, and AI-assisted development. That means I care less about
          theatre and more about whether a product does the useful thing, under
          realistic conditions, with enough evidence to trust the release.
        </p>
        <p>
          My QA background covers mobile and web testing, QA process, risk-based
          testing, non-functional thinking, and coordinating testing work across
          people and delivery constraints. I like clear acceptance criteria,
          visible trade-offs, and tests that answer real questions instead of
          simply adding ceremony.
        </p>
        <p>
          I am also building small products and experiments on the side:
          ProsePal, PayeTax, client website work, and AI operator experiments
          using tools like Codex, Hermes/R2, and local models. These are not
          agency claims or full-time AI engineer cosplay. They are practical
          attempts to ship useful software with better feedback loops, better
          judgment, and less hand-waving.
        </p>
        <p>
          The thread through the work is quality before testing: shaping the
          problem clearly, reducing avoidable complexity, making risks visible,
          and using AI where it helps move faster without lowering the bar for
          evidence.
        </p>
      </div>

      <section className="space-y-4" aria-labelledby="focus-areas">
        <h2
          id="focus-areas"
          className="text-xl font-semibold text-stone-950 dark:text-stone-50"
        >
          Focus areas
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-lg border border-stone-200 bg-white p-4 text-sm text-stone-700 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-200"
            >
              {area}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="how-i-work">
        <h2
          id="how-i-work"
          className="text-xl font-semibold text-stone-950 dark:text-stone-50"
        >
          How I work
        </h2>
        <ul className="space-y-3 text-base leading-7 text-stone-700 dark:text-stone-200">
          {workingPrinciples.map((principle) => (
            <li
              key={principle}
              className="border-l border-stone-300 pl-4 dark:border-stone-700"
            >
              {principle}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
