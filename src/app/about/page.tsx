import type { Metadata } from "next";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

const siteDescription =
  "About Jarryd Aubert, a UK-based Senior QA specialist and product builder working across quality, delivery, and AI-assisted workflows.";

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
  "Use AI to accelerate work, not excuse weak judgement.",
];

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: siteDescription,
  path: "/about",
});

export default function AboutPage() {
  const operatingProfile = [
    {
      label: "Focus",
      value: "Software quality, product delivery, AI-assisted workflows",
    },
    {
      label: "Working bias",
      value: "Start with risk, make quality visible, keep systems small",
    },
    {
      label: "Current work",
      value: "ProsePal, PayeTax, Evolution Padel",
    },
  ];

  return (
    <article className="max-w-6xl space-y-12">
      <header className="max-w-3xl space-y-4">
        <h1 className="text-3xl font-semibold text-[var(--color-fg)] sm:text-4xl">
          About
        </h1>
        <p className="text-lg leading-8 text-[var(--color-muted)]">
          Jarryd Aubert is a Senior QA specialist and product builder based in
          the UK.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)] lg:items-start">
        <div className="max-w-3xl space-y-12">
          <div className="space-y-5 text-base leading-8 text-[var(--color-muted)]">
            <p>
              I work at the intersection of software quality, practical product
              delivery, and AI-assisted development. That means I care less
              about theatre and more about whether a product does the useful
              thing, under realistic conditions, with enough evidence to trust
              the release.
            </p>
            <p>
              My QA background covers mobile and web testing, QA process,
              risk-based testing, non-functional thinking, and coordinating
              testing work across people and delivery constraints. I like clear
              acceptance criteria, visible trade-offs, and tests that answer
              real questions instead of simply adding ceremony.
            </p>
            <p>
              I am also building small products and experiments on the side:
              ProsePal, PayeTax, client website work, and AI operator
              experiments using tools like Codex, Hermes/R2, and local models.
              These are not agency claims or full-time AI engineer cosplay. They
              are practical attempts to ship useful software with better
              feedback loops, better judgement, and less hand-waving.
            </p>
            <p>
              The thread through the work is quality before testing: shaping the
              problem clearly, reducing avoidable complexity, making risks
              visible, and using AI where it helps move faster without lowering
              the bar for evidence.
            </p>
          </div>

          <section className="space-y-4" aria-labelledby="focus-areas">
            <h2
              id="focus-areas"
              className="text-xl font-semibold text-[var(--color-fg)]"
            >
              Focus areas
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm text-[var(--color-muted)]"
                >
                  {area}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4" aria-labelledby="how-i-work">
            <h2
              id="how-i-work"
              className="text-xl font-semibold text-[var(--color-fg)]"
            >
              How I work
            </h2>
            <ul className="space-y-3 text-base leading-7 text-[var(--color-muted)]">
              {workingPrinciples.map((principle) => (
                <li
                  key={principle}
                  className="border-l border-[var(--color-border-hover)] pl-4"
                >
                  {principle}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4" aria-labelledby="contact">
            <h2
              id="contact"
              className="text-xl font-semibold text-[var(--color-fg)]"
            >
              Contact
            </h2>
            <p className="text-base leading-7 text-[var(--color-muted)]">
              For now, the best way to reach me is by email.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <a
                href={`mailto:${site.email}`}
                className="text-[var(--color-fg)] underline decoration-[var(--color-border-hover)] underline-offset-4 outline-none transition-colors hover:text-[var(--color-accent)] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
              >
                {site.email}
              </a>
              <a
                href={site.socials.github}
                className="text-[var(--color-fg)] underline decoration-[var(--color-border-hover)] underline-offset-4 outline-none transition-colors hover:text-[var(--color-accent)] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={site.socials.linkedin}
                className="text-[var(--color-fg)] underline decoration-[var(--color-border-hover)] underline-offset-4 outline-none transition-colors hover:text-[var(--color-accent)] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </div>

        <aside
          className="rounded-md border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_86%,transparent)] p-5 lg:sticky lg:top-8"
          aria-labelledby="operating-profile"
        >
          <h2
            id="operating-profile"
            className="mb-5 border-b border-[var(--color-border)] pb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]"
          >
            Operating profile
          </h2>
          <dl className="space-y-5">
            {operatingProfile.map((item) => (
              <div key={item.label} className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                  {item.label}
                </dt>
                <dd className="text-sm leading-6 text-[var(--color-fg)]">
                  {item.value}
                </dd>
              </div>
            ))}
            <div className="space-y-1">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                Contact
              </dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm font-medium text-[var(--color-fg)] underline decoration-[var(--color-border-hover)] underline-offset-4 outline-none transition-colors hover:text-[var(--color-accent)] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-surface)]"
                >
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </article>
  );
}
