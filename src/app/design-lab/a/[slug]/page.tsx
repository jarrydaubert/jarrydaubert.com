import type { Metadata } from "next";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { labMetadata } from "../../_lib/metadata";
import {
  getLabProject,
  labProjects,
  nextLabProject,
} from "../../_lib/projects";
import { Mark } from "../_components/marks";
import { ProjectFigure, StatusLine } from "../_components/sheet";
import styles from "../a.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return labProjects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getLabProject(slug);
  return labMetadata(
    project ? `${project.name}, concept A` : "Concept A",
    project?.line ?? "Design lab concept A.",
  );
}

export default async function ConceptAProject({ params }: Props) {
  const { slug } = await params;
  const project = getLabProject(slug);
  if (!project) notFound();
  const next = nextLabProject(slug);

  return (
    <article className={styles.project} aria-labelledby="a-project-title">
      <NextLink href={`/design-lab/a#${project.slug}`} className={styles.back}>
        Back to all work
      </NextLink>

      <header className={styles.projectHeader}>
        <h1 id="a-project-title" className={styles.projectTitle}>
          {project.name}
        </h1>
        <p className={styles.projectLine}>{project.line}</p>
        <StatusLine project={project} />
        <p className={styles.sheetLinks}>
          {project.links.map((link) =>
            link.href.startsWith("http") ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <NextLink key={link.href} href={link.href}>
                {link.label}
              </NextLink>
            ),
          )}
        </p>
      </header>

      <div className={styles.projectFigure}>
        <ProjectFigure project={project} />
      </div>

      <div className={styles.projectNotes}>
        <section aria-labelledby="a-what">
          <h2 id="a-what">What it is</h2>
          <p>{project.what}</p>
        </section>
        <section aria-labelledby="a-built">
          <h2 id="a-built">How it was made</h2>
          <p>{project.built}</p>
        </section>
        <section aria-labelledby="a-checked">
          <h2 id="a-checked">
            {project.slug === "prosepal"
              ? "Where it stands"
              : "How it's checked"}
          </h2>
          <p>{project.checked}</p>
        </section>
      </div>

      <NextLink href={`/design-lab/a/${next.slug}`} className={styles.next}>
        <span className={styles.nextLabel}>Next</span>
        <span className={styles.nextName}>
          {next.name}
          <Mark kind="underline" className={styles.nextUnderline} />
        </span>
      </NextLink>
    </article>
  );
}
