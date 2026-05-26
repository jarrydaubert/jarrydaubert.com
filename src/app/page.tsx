import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { personJsonLd, site } from "@/config/site";
import { principles } from "@/content/principles";
import { selectedWork } from "@/content/projects";
import { writing } from "@/content/writing";
import { buildMetadata, serializeJsonLd } from "@/lib/metadata";

const personJsonLdScript = serializeJsonLd(personJsonLd);

export const metadata: Metadata = buildMetadata({
  title: site.name,
  absoluteTitle: true,
  description: site.homeDescription,
});

export default function Home() {
  const firstEssay = writing[0];
  const operatingNotes = [
    {
      label: "Focus",
      value: "QA, product delivery, AI-assisted workflows",
    },
    {
      label: "Current work",
      value: "ProsePal, PayeTax, Evolution Padel",
    },
    {
      label: "Release principles",
      value: "acceptance criteria, checks, metadata, ownership",
    },
  ];

  return (
    <div className="space-y-24">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is static local data with '<' escaped before injection.
        dangerouslySetInnerHTML={{ __html: personJsonLdScript }}
      />
      <section
        className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.72fr)] lg:items-end"
        aria-labelledby="home-title"
      >
        <div className="max-w-3xl space-y-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            QA-minded product builder
          </p>
          <div className="space-y-5">
            <h1
              id="home-title"
              className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-normal text-[var(--color-fg)] sm:text-6xl lg:text-6xl"
            >
              Useful software, shipped with judgement.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl sm:leading-9 lg:max-w-[44rem]">
              I design, build, test, and ship small AI-assisted software
              products, with the quality discipline to know what is ready,
              risky, or not worth shipping.
            </p>
          </div>
        </div>

        <div className="rounded-md border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_86%,transparent)] p-5">
          <p className="mb-5 border-b border-[var(--color-border)] pb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            Operating note
          </p>
          <dl className="space-y-5">
            {operatingNotes.map((note) => (
              <div key={note.label} className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                  {note.label}
                </dt>
                <dd className="text-sm leading-6 text-[var(--color-fg)]">
                  {note.value}
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
        </div>
      </section>

      <section className="space-y-6" aria-labelledby="principles">
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            Principles
          </p>
          <h2
            id="principles"
            className="text-2xl font-semibold text-[var(--color-fg)]"
          >
            Rules for useful work.
          </h2>
        </div>
        <ol className="grid gap-4 text-base leading-7 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <li
              key={principle}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
            >
              <span className="mb-5 block text-sm font-semibold text-[var(--color-accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-semibold text-[var(--color-fg)]">
                {principle}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-6" aria-labelledby="selected-work">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            Selected work
          </p>
          <h2
            id="selected-work"
            className="text-2xl font-semibold text-[var(--color-fg)]"
          >
            Selected work.
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-[var(--color-muted)]">
            Selected products, client work, and experiments that show the shape
            of the work.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {selectedWork.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              summary={project.summary}
              href={`/projects/${project.slug}`}
              previewImage={project.previewImage}
              qualityFocus={project.qualityFocus}
              roleFocus={project.roleFocus}
              status={project.status}
              theme={project.theme}
            />
          ))}
        </div>
      </section>

      <section
        className="rounded-md border border-[var(--color-border-hover)] bg-[var(--color-surface-elevated)] p-6 sm:p-8"
        aria-labelledby="first-essay"
      >
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              Writing
            </p>
            <time
              dateTime={firstEssay.publishedAt}
              className="block text-sm text-[var(--color-subtle)]"
            >
              {firstEssay.publishedAt}
            </time>
          </div>
          <div className="space-y-5">
            <h2
              id="first-essay"
              className="max-w-3xl text-3xl font-semibold leading-tight text-[var(--color-fg)] sm:text-4xl"
            >
              {firstEssay.title}
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--color-muted)]">
              {firstEssay.summary}
            </p>
            <Link
              href={firstEssay.href}
              className="inline-flex text-sm font-semibold text-[var(--color-fg)] underline decoration-[var(--color-accent)] underline-offset-4 outline-none transition-colors hover:text-[var(--color-accent)] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-surface-elevated)]"
            >
              Read the essay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
