import type { Metadata } from "next";
import { Link } from "@/components/link";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const siteDescription =
  "About Jarryd Aubert, a UK-based software tester who builds and ships his own apps to understand what he tests.";

const focusAreas = [
  "Finding software risks",
  "Planning useful tests",
  "Testing messy human outputs",
  "Checking real shipped apps",
];

const workingPrinciples = [
  "Start with risk.",
  "Make quality easy to see.",
  "Keep systems small enough to reason about.",
  "Use AI to move faster, not to lower the bar.",
];

const operatingProfile = [
  {
    label: "Focus",
    value: "Software testing, useful test plans, and proof from shipped apps",
  },
  {
    label: "How I work",
    value: "Start with risk, make quality visible, keep systems small",
  },
  { label: "Current work", value: "ProsePal, PayeTax, Evolution Padel" },
];

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: siteDescription,
  path: "/about",
});

export default function AboutPage() {
  return (
    <article className="max-w-6xl space-y-12">
      <header className="max-w-3xl space-y-4">
        <h1 className="text-3xl font-semibold text-fg sm:text-4xl">About</h1>
        <p className="text-lg leading-8 text-muted">
          Jarryd Aubert is a UK-based software tester who builds and ships his
          own apps to understand what he tests.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)] lg:items-start">
        <div className="max-w-3xl space-y-12">
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>
              I work in software testing, and I use shipped side projects to
              understand the problems I test for. I care less about theatre and
              more about whether a product does the useful thing, in realistic
              conditions, with enough proof to trust the release.
            </p>
            <p>
              My QA background covers mobile and web testing, test planning,
              performance and reliability concerns, and coordinating testing
              work across people and deadlines. I like clear rules for what
              "done" means, visible trade-offs, and tests that answer real
              questions instead of adding ceremony.
            </p>
            <p>
              I also use small shipped projects as a testing lab: ProsePal,
              PayeTax, client website work, and experiments with AI-assisted
              development. These are not agency claims or a claim to be a
              full-time AI engineer. They are practical attempts to ship useful
              software with faster feedback, better judgement, and less
              hand-waving.
            </p>
            <p>
              The thread through the work is quality before testing: understand
              the problem, cut the complexity that is not needed, make the risks
              easy to see, and use AI only where it helps without lowering the
              bar for proof.
            </p>
          </div>

          <section className="space-y-4" aria-labelledby="focus-areas">
            <h2 id="focus-areas" className="text-xl font-semibold text-fg">
              Focus areas
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <li key={area} className="card p-4 text-sm text-muted">
                  {area}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4" aria-labelledby="how-i-work">
            <h2 id="how-i-work" className="text-xl font-semibold text-fg">
              How I work
            </h2>
            <ul className="space-y-3 text-base leading-7 text-muted">
              {workingPrinciples.map((principle) => (
                <li
                  key={principle}
                  className="border-l border-border-hover pl-4"
                >
                  {principle}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4" aria-labelledby="contact">
            <h2
              id="contact"
              className="scroll-mt-24 text-xl font-semibold text-fg"
            >
              Contact
            </h2>
            <p className="text-base leading-7 text-muted">
              For now, the best way to reach me is by email.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <Link href={`mailto:${site.email}`}>{site.email}</Link>
              <Link href={site.socials.github}>GitHub</Link>
              <Link href={site.socials.linkedin}>LinkedIn</Link>
            </div>
          </section>
        </div>

        <aside
          className="rounded-md border border-border bg-[color-mix(in_srgb,var(--color-surface)_86%,transparent)] p-5 lg:sticky lg:top-8 [--focus-offset-color:var(--color-surface)]"
          aria-labelledby="operating-profile"
        >
          <h2
            id="operating-profile"
            className="label mb-5 border-b border-border pb-4"
          >
            Quick profile
          </h2>
          <dl className="space-y-5">
            {operatingProfile.map((item) => (
              <div key={item.label} className="space-y-1">
                <dt className="label">{item.label}</dt>
                <dd className="text-sm leading-6 text-fg">{item.value}</dd>
              </div>
            ))}
            <div className="space-y-1">
              <dt className="label">Contact</dt>
              <dd>
                <Link
                  href={`mailto:${site.email}`}
                  className="text-sm font-medium"
                >
                  {site.email}
                </Link>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </article>
  );
}
