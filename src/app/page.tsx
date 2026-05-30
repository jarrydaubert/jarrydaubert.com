import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/components/link";
import { ProjectCard } from "@/components/project-card";
import { principles } from "@/content/principles";
import { allEssays, selectedWork } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { personJsonLd, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: site.name,
  absoluteTitle: true,
  description: site.homeDescription,
});

const operatingNotes = [
  { label: "Focus", value: "QA, product delivery, AI-assisted workflows" },
  { label: "Current work", value: "ProsePal, PayeTax, Evolution Padel" },
  {
    label: "Release bias",
    value: "acceptance criteria, checks, metadata, ownership",
  },
];

const LABEL = "text-xs font-semibold uppercase tracking-[0.14em] text-subtle";
const EYEBROW = "text-xs font-semibold uppercase tracking-[0.16em] text-subtle";

export default function Home() {
  const firstEssay = allEssays[0];

  return (
    <div className="space-y-section">
      <JsonLd data={personJsonLd} />

      <section
        className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.72fr)] lg:items-end"
        aria-labelledby="home-title"
      >
        <div className="max-w-3xl space-y-7">
          <p className="text-xs font-semibold tracking-[0.16em] text-subtle uppercase">
            QA-minded product builder
          </p>
          <div className="space-y-5">
            <h1
              id="home-title"
              className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-fg sm:text-6xl"
            >
              Useful software, shipped with judgement
              <span className="text-accent">.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              I build small software products, stress-test them, and write about
              the judgement required to ship AI-assisted work properly.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link
              href={`mailto:${site.email}`}
              variant="back"
              className="border-transparent bg-accent font-semibold text-bg hover:border-transparent hover:bg-ring hover:text-bg"
            >
              Email me
            </Link>
            <Link href={`mailto:${site.email}`} className="font-mono text-sm">
              {site.email}
            </Link>
          </div>
        </div>

        <div className="rounded-md border border-border bg-[color-mix(in_srgb,var(--color-surface)_86%,transparent)] p-5 [--focus-offset-color:var(--color-surface)]">
          <p className="mb-5 border-b border-border pb-4 text-xs font-semibold tracking-[0.16em] text-subtle uppercase">
            Operating note
          </p>
          <dl className="space-y-5">
            {operatingNotes.map((note) => (
              <div key={note.label} className="space-y-1">
                <dt className={LABEL}>{note.label}</dt>
                <dd className="text-sm leading-6 text-fg">{note.value}</dd>
              </div>
            ))}
            <div className="space-y-1">
              <dt className={LABEL}>Contact</dt>
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
        </div>
      </section>

      <section className="space-y-6" aria-labelledby="principles">
        <div className="max-w-2xl space-y-2">
          <p className={EYEBROW}>Principles</p>
          <h2 id="principles" className="text-2xl font-semibold text-fg">
            Rules for useful work.
          </h2>
        </div>
        <ol className="grid gap-4 text-base leading-7 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <li key={principle} className="card p-5">
              <span className="mb-5 block font-mono text-sm font-semibold text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-semibold text-fg">{principle}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-6" aria-labelledby="selected-work">
        <div className="space-y-2">
          <p className={EYEBROW}>Selected work</p>
          <h2 id="selected-work" className="text-2xl font-semibold text-fg">
            Selected work.
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-muted">
            Selected products, client work, and experiments that show the shape
            of the work.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {selectedWork.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {firstEssay ? (
        <section
          className="rounded-md border border-border-hover bg-accent-soft p-6 shadow-elevated sm:p-8 [--focus-offset-color:var(--color-accent-soft)]"
          aria-labelledby="first-essay"
        >
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="space-y-3">
              <p className={EYEBROW}>Writing</p>
              <time
                dateTime={firstEssay.publishedAt}
                className="block text-sm text-subtle"
              >
                {firstEssay.publishedAt}
              </time>
            </div>
            <div className="space-y-5">
              <h2
                id="first-essay"
                className="max-w-3xl text-3xl font-semibold leading-tight text-fg sm:text-4xl"
              >
                {firstEssay.title}
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted">
                {firstEssay.summary}
              </p>
              <Link href={firstEssay.href} className="text-sm font-semibold">
                Read the essay
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
