import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const focusAreas = [
  "Practical software quality",
  "Test strategy",
  "AI-assisted development workflows",
  "Small product shipping",
];

export default function AboutPage() {
  return (
    <article className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold text-stone-950 dark:text-stone-50 sm:text-4xl">
          About
        </h1>
        <p className="text-lg leading-8 text-stone-700 dark:text-stone-200">
          Jarryd Aubert is a Senior QA specialist and product builder based in
          the UK.
        </p>
      </header>

      <div className="space-y-5 text-base leading-7 text-stone-600 dark:text-stone-300">
        <p>
          His work sits at the point where product judgement, test strategy, and
          useful AI-assisted delivery meet. The focus is practical: shipping
          small, understandable software that can be checked, improved, and
          trusted.
        </p>
        <p>
          This site is a place for project notes, case studies, and writing
          about the realities of building with quality in mind.
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
    </article>
  );
}
