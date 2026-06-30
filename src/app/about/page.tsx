import type { Metadata } from "next";
import { Link } from "@/components/link";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const siteDescription =
  "About Jarryd Aubert, a UK-based software tester who builds and ships his own apps to understand what he tests.";

const focusAreas = [
  "Practical software quality",
  "Test strategy",
  "Testing ambiguous outputs",
  "Release evidence from shipped apps",
];

const workingPrinciples = [
  "Start with risk.",
  "Make quality visible.",
  "Keep systems small enough to reason about.",
  "Use AI to accelerate work, not excuse weak judgement.",
];

const operatingProfile = [
  {
    label: "Focus",
    value: "Software quality, test strategy, evidence from shipped apps",
  },
  {
    label: "Working bias",
    value: "Start with risk, make quality visible, keep systems small",
  },
  { label: "Current work", value: "ProsePal, PayeTax, Evolution Padel" },
];

const PROFILE_LABEL =
  "text-xs font-semibold uppercase tracking-[0.14em] text-subtle";

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
              I work in software quality, with shipped side projects as a way
              to understand the failure modes I test for. That means I care
              less about theatre and more about whether a product does the
              useful thing, under realistic conditions, with enough evidence to
              trust the release.
            </p>
            <p>
              My QA background covers mobile and web testing, QA process,
              risk-based testing, non-functional thinking, and coordinating
              testing work across people and delivery constraints. I like clear
              acceptance criteria, visible trade-offs, and tests that answer
              real questions instead of simply adding ceremony.
            </p>
            <p>
              I also use small shipped projects as a testing lab: ProsePal,
              PayeTax, client website work, and experiments with AI-assisted
              development. These are not agency claims or a claim to be a
              full-time AI engineer. They are practical attempts to ship useful
              software with better feedback loops, better judgement, and less
              hand-waving.
            </p>
            <p>
              The thread through the work is quality before testing: shaping the
              problem clearly, reducing avoidable complexity, making risks
              visible, and using AI where it helps move faster without lowering
              the bar for evidence.
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
            className="mb-5 border-b border-border pb-4 text-xs font-semibold uppercase tracking-[0.16em] text-subtle"
          >
            Operating profile
          </h2>
          <dl className="space-y-5">
            {operatingProfile.map((item) => (
              <div key={item.label} className="space-y-1">
                <dt className={PROFILE_LABEL}>{item.label}</dt>
                <dd className="text-sm leading-6 text-fg">{item.value}</dd>
              </div>
            ))}
            <div className="space-y-1">
              <dt className={PROFILE_LABEL}>Contact</dt>
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
