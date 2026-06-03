import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/components/link";
import { allEssays } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { personJsonLd, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: site.name,
  absoluteTitle: true,
  description: site.homeDescription,
});

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const PROJECTS = [
  {
    name: "PayeTax",
    description: "A live UK PAYE, salary, and dividend calculator.",
    built:
      "I chose it because it gave me something a tester wants: a clear right or wrong answer. The work forced me through messy inputs, including Scottish rates, student-loan thresholds on total income, and salary/dividend choices.",
    proof: "It matches my own payslip to the penny.",
    insightLabel: "What it demonstrates",
    demonstrates: "Correctness under real-world inputs, not happy-path ones.",
    href: "https://payetax.co.uk/",
    linkText: "Visit PayeTax",
  },
  {
    name: "ProsePal",
    description: "A live message-writing app.",
    built:
      "I built and shipped it as a real app, then used it to explore the harder problem of judging output where there is no single right answer.",
    proof:
      "The quality work is still in progress, which is the point: it gives me a real product surface for working through tone, context, usefulness, and generic generated output.",
    insightLabel: "What it explores",
    demonstrates:
      "How do you test something when correctness is a matter of judgement, not a value you can assert against?",
    href: "https://www.prosepal.app/",
    linkText: "Visit ProsePal",
  },
];

const WRITING_SLUGS = [
  "proving-my-tax-calculator-correct",
  "ai-assisted-development-demos-vs-shipping",
];

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

export default function Home() {
  const essays = WRITING_SLUGS.map((slug) =>
    allEssays.find((essay) => essay.slug === slug),
  ).filter((essay): essay is NonNullable<typeof essay> => Boolean(essay));

  return (
    <div className="home-page">
      <JsonLd data={personJsonLd} />

      <section
        aria-labelledby="home-title"
        className="reveal flex min-h-[calc(100svh-12rem)] flex-col justify-center py-14 sm:py-20"
      >
        <div className="max-w-5xl">
          <h1
            id="home-title"
            className="max-w-[11.5em] text-5xl font-normal leading-[0.92] tracking-[-0.035em] text-fg sm:text-6xl lg:text-[4.25rem]"
          >
            I build to understand what I test.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-muted sm:text-2xl sm:leading-10">
            To test software well, I wanted to feel what building it is actually
            like. So I&apos;ve shipped my own apps and sites, start to finish,
            and held them to the same scrutiny I&apos;d give anyone else&apos;s.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="#projects"
              variant="nav"
              className="rounded-sm bg-accent px-5 py-3 text-sm font-medium text-bg shadow-[0_12px_30px_-22px_var(--color-accent)] hover:bg-fg hover:text-bg sm:font-semibold"
            >
              See the projects
            </Link>
            <Link
              href="#the-why"
              variant="nav"
              className="text-sm font-medium text-fg hover:text-accent sm:font-semibold"
            >
              Why I build
            </Link>
          </div>
        </div>
      </section>

      <section
        id="projects"
        aria-labelledby="projects-title"
        className="reveal scroll-mt-9 py-20 sm:scroll-mt-1 sm:py-28"
      >
        <p className="eyebrow">01 Projects</p>
        <div className="mt-5 max-w-4xl">
          <h2
            id="projects-title"
            className="text-4xl font-medium leading-tight text-fg sm:text-6xl"
          >
            What I built, and tested properly.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              className="card flex flex-col p-6 sm:p-8 [--focus-offset-color:var(--color-surface)]"
            >
              <div>
                <p className="eyebrow text-accent">Live</p>
                <h3 className="mt-4 text-4xl font-medium text-fg">
                  {project.name}
                </h3>
                <p className="mt-4 text-xl leading-8 text-muted">
                  {project.description}
                </p>
              </div>

              <dl className="mt-8 space-y-7">
                <div>
                  <dt className="eyebrow">What I built</dt>
                  <dd className="mt-3 text-base leading-7 text-muted">
                    {project.built}
                  </dd>
                  <dd className="mt-4 border-l border-border-hover pl-4 text-base font-medium leading-7 text-fg">
                    {project.proof}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">{project.insightLabel}</dt>
                  <dd className="mt-3 text-base leading-7 text-muted">
                    {project.demonstrates}
                  </dd>
                </div>
              </dl>

              <p className="mt-8 pt-2 text-sm font-semibold">
                <Link href={project.href}>{project.linkText}</Link>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="the-why"
        aria-labelledby="why-title"
        className="reveal scroll-mt-9 py-20 sm:scroll-mt-1 sm:py-28"
      >
        <p className="eyebrow">02 The Why</p>
        <h2
          id="why-title"
          className="mt-5 max-w-5xl font-display text-5xl font-medium leading-tight text-fg sm:text-7xl"
        >
          I build to understand what I test.
        </h2>
        <div className="mt-10 max-w-3xl space-y-7 text-xl leading-9 text-muted">
          <p>
            I wanted to feel firsthand what building software is actually like,
            from buying a domain and setting up a repo to deploying, publishing,
            watching analytics, and living with my own bugs.
          </p>
          <p>
            Going through that pain changed how I test, because now I understand
            more of where software actually hurts. The awkward handoffs, the
            ambiguous decisions, the hidden edge cases, and the small release
            details all feel different when my own name is on the thing.
          </p>
        </div>
      </section>

      {essays.length > 0 ? (
        <section
          aria-labelledby="writing-title"
          className="reveal py-20 sm:py-28"
        >
          <p className="eyebrow">Writing</p>
          <div className="mt-5 flex flex-col gap-8 border-t border-border pt-8 lg:flex-row lg:items-start lg:justify-between">
            <h2
              id="writing-title"
              className="max-w-xl text-2xl font-semibold leading-9 text-fg sm:text-3xl"
            >
              Notes on testing, building, and shipping software that holds up.
            </h2>
            <div className="grid w-full max-w-xl gap-4">
              {essays.map((essay) => (
                <Link
                  key={essay.slug}
                  href={essay.href}
                  variant="nav"
                  className="card block p-6 hover:border-border-hover hover:bg-surface-elevated"
                >
                  <p className="font-mono text-xs text-subtle">
                    <time dateTime={essay.publishedAt}>
                      {formatDate(essay.publishedAt)}
                    </time>
                  </p>
                  <h3 className="mt-3 text-2xl font-medium leading-8 text-fg">
                    {essay.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
