import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
};

export default function WritingPage() {
  return (
    <section className="max-w-3xl space-y-10" aria-labelledby="writing-title">
      <header className="space-y-4">
        <h1
          id="writing-title"
          className="text-3xl font-semibold text-stone-950 dark:text-stone-50 sm:text-4xl"
        >
          Writing
        </h1>
        <p className="text-base leading-7 text-stone-600 dark:text-stone-300">
          A small index for essays on software quality, product building, and
          AI-assisted delivery.
        </p>
      </header>

      <article className="rounded-lg border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-stone-950 dark:text-stone-50">
            The gap between AI-assisted development demos and actually shipping
            with AI
          </h2>
          <p className="text-sm leading-6 text-stone-600 dark:text-stone-300">
            A planned essay about the difference between impressive AI coding
            demos and the steadier work of getting useful software into
            production with tests, review, and evidence.
          </p>
        </div>
        <p className="mt-6 text-sm text-stone-500 dark:text-stone-400">
          Coming soon
        </p>
      </article>
    </section>
  );
}
