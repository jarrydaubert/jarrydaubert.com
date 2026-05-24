import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const projects = [
  {
    name: "ProsePal",
    summary:
      "An AI-assisted writing product for turning intent into better greeting-card messages.",
    status: "Status placeholder",
  },
  {
    name: "PayeTax",
    summary:
      "A UK PAYE and tax calculator product shaped around clarity, usefulness, and trust.",
    status: "Status placeholder",
  },
  {
    name: "Evolution Padel",
    summary:
      "A fast, SEO-focused client website for a padel business with a practical launch path.",
    status: "Status placeholder",
  },
  {
    name: "AI operator experiments",
    summary:
      "Small experiments in AI-assisted software delivery, quality checks, and operator workflows.",
    status: "Status placeholder",
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-10" aria-labelledby="projects-title">
      <header className="max-w-3xl space-y-4">
        <h1
          id="projects-title"
          className="text-3xl font-semibold text-stone-950 dark:text-stone-50 sm:text-4xl"
        >
          Projects
        </h1>
        <p className="text-base leading-7 text-stone-600 dark:text-stone-300">
          Starter notes for products and experiments. Proper case studies will
          replace these placeholders.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-lg border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900"
          >
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-stone-950 dark:text-stone-50">
                {project.name}
              </h2>
              <p className="text-sm leading-6 text-stone-600 dark:text-stone-300">
                {project.summary}
              </p>
            </div>
            <div className="mt-6 space-y-2 text-sm text-stone-500 dark:text-stone-400">
              <p>{project.status}</p>
              <p>Case study coming soon</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
