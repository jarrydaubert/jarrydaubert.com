import Link from "next/link";

const selectedWork = [
  {
    name: "ProsePal",
    summary: "AI-assisted greeting-card writing app.",
  },
  {
    name: "PayeTax",
    summary: "UK PAYE/tax calculator product.",
  },
  {
    name: "Evolution Padel",
    summary: "Fast, SEO-focused client website.",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="max-w-3xl space-y-8" aria-labelledby="home-title">
        <div className="space-y-5">
          <h1
            id="home-title"
            className="text-4xl font-semibold tracking-normal text-stone-950 dark:text-stone-50 sm:text-5xl"
          >
            Jarryd Aubert
          </h1>
          <p className="text-2xl leading-snug text-stone-800 dark:text-stone-100">
            QA-minded product builder shipping useful software with AI, taste,
            and tests.
          </p>
          <p className="max-w-2xl text-base leading-7 text-stone-600 dark:text-stone-300">
            I build and test practical software products, with a focus on
            quality, evidence, and useful AI-assisted workflows.
          </p>
        </div>

        <nav aria-label="Section navigation">
          <ul className="flex flex-wrap gap-3 text-sm font-medium">
            {[
              { href: "/about", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/writing", label: "Writing" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex rounded border border-stone-300 px-3 py-2 text-stone-800 outline-none hover:border-stone-500 hover:text-stone-950 focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50 dark:border-stone-700 dark:text-stone-200 dark:hover:border-stone-500 dark:hover:text-stone-50 dark:focus-visible:ring-stone-50 dark:focus-visible:ring-offset-stone-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section className="space-y-5" aria-labelledby="selected-work">
        <div className="space-y-2">
          <h2
            id="selected-work"
            className="text-xl font-semibold text-stone-950 dark:text-stone-50"
          >
            Selected work
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-stone-600 dark:text-stone-300">
            Early placeholders for the project stories that will become proper
            case studies.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {selectedWork.map((project) => (
            <Link
              key={project.name}
              href="/projects"
              className="rounded-lg border border-stone-200 bg-white p-5 outline-none hover:border-stone-400 focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-600 dark:focus-visible:ring-stone-50 dark:focus-visible:ring-offset-stone-950"
            >
              <h3 className="font-medium text-stone-950 dark:text-stone-50">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-300">
                {project.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="first-essay">
        <h2
          id="first-essay"
          className="text-xl font-semibold text-stone-950 dark:text-stone-50"
        >
          First essay
        </h2>
        <article className="rounded-lg border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
          <p className="text-base font-medium text-stone-950 dark:text-stone-50">
            The gap between AI-assisted development demos and actually shipping
            with AI
          </p>
          <p className="mt-3 text-sm text-stone-500 dark:text-stone-400">
            Coming soon
          </p>
        </article>
      </section>
    </div>
  );
}
