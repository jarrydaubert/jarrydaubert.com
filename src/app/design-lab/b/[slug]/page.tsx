import type { Metadata, Viewport } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { labMetadata } from "../../_lib/metadata";
import {
  getLabProject,
  type LabImage,
  labProjects,
  prosePalIcon,
} from "../../_lib/projects";
import { Rail } from "../_components/rail";
import { swatchVars } from "../_components/swatch";
import { SwatchLink } from "../_components/swatch-link";
import { SwatchArrived } from "../_components/swatch-transition";
import styles from "../b.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return labProjects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getLabProject(slug);
  return labMetadata(
    project ? `${project.name}, concept B` : "Concept B",
    project?.line ?? "Design lab concept B.",
  );
}

// The phone's browser chrome takes on the swatch colour too.
export async function generateViewport({ params }: Props): Promise<Viewport> {
  const { slug } = await params;
  const project = getLabProject(slug);
  return project ? { themeColor: project.colour.bg } : {};
}

function RailImage({ image, phone }: { image: LabImage; phone?: boolean }) {
  return (
    <figure className={phone ? styles.railPhone : styles.railDesktop}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={phone ? "18rem" : "(min-width: 900px) 62rem, 88vw"}
        draggable={false}
      />
    </figure>
  );
}

export default async function ConceptBProject({ params }: Props) {
  const { slug } = await params;
  const project = getLabProject(slug);
  if (!project) notFound();
  const others = labProjects.filter((p) => p.slug !== project.slug);

  return (
    <article
      className={styles.project}
      style={
        {
          ...swatchVars(project),
          viewTransitionName: `swatch-${project.slug}`,
        } as CSSProperties
      }
      aria-labelledby="b-project-title"
    >
      <SwatchArrived />
      {/* The whole page, header included, takes on the swatch colour. */}
      <style>{`:root{--b-page-bg:${project.colour.bg};--b-page-ink:${project.colour.fg};--b-page-soft:${project.colour.soft}}`}</style>
      <div className={styles.projectInner}>
        <NextLink href="/design-lab/b" className={styles.projectBack}>
          Back to the swatch book
        </NextLink>

        <header className={styles.projectHead}>
          <p className={styles.projectHex}>{project.colour.bg.toUpperCase()}</p>
          <h1 id="b-project-title" className={styles.projectTitle}>
            {project.name}
          </h1>
          <p className={styles.projectLine}>{project.line}</p>
          <p
            className={styles.projectStatus}
            data-live={project.live ? "true" : "false"}
          >
            {project.status}
          </p>
          <ul className={styles.projectLinks}>
            {project.links.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("http") ? (
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ) : (
                  <NextLink href={link.href}>{link.label}</NextLink>
                )}
              </li>
            ))}
          </ul>
        </header>
      </div>

      {project.slug === "prosepal" ? (
        <div className={styles.prose}>
          <div className={styles.proseIcon}>
            <Image
              src={prosePalIcon.src}
              alt={prosePalIcon.alt}
              width={prosePalIcon.width}
              height={prosePalIcon.height}
              sizes="14rem"
            />
          </div>
          <ol className={styles.lanes}>
            <li>
              <span className={styles.laneWhen}>A birthday note</span>
              <span className={styles.laneWhere}>
                Written on the iPhone by Apple&apos;s on-device model.
              </span>
            </li>
            <li>
              <span className={styles.laneWhen}>A sympathy card</span>
              <span className={styles.laneWhere}>
                Sent to a cloud model through a Supabase edge function, only if
                you&apos;ve allowed online writing. Falls back to the phone.
              </span>
            </li>
          </ol>
          <p className={styles.placeholderTile}>
            Placeholder: screenshots of the native app go here once it ships.
          </p>
        </div>
      ) : (
        <Rail label={`Screenshots of ${project.name}`}>
          {project.desktop ? <RailImage image={project.desktop} /> : null}
          {project.mobile ? <RailImage image={project.mobile} phone /> : null}
          {project.extra ? <RailImage image={project.extra} /> : null}
        </Rail>
      )}

      <div className={styles.projectInner}>
        <dl className={styles.facts}>
          <div>
            <dt>What it is</dt>
            <dd>{project.what}</dd>
          </div>
          <div>
            <dt>How it was made</dt>
            <dd>{project.built}</dd>
          </div>
          <div>
            <dt>
              {project.slug === "prosepal"
                ? "Where it stands"
                : "How it's checked"}
            </dt>
            <dd>{project.checked}</dd>
          </div>
        </dl>

        <nav className={styles.others} aria-label="Other projects">
          <p className={styles.othersTitle}>Other colours</p>
          <ul>
            {others.map((other) => (
              <li key={other.slug}>
                <SwatchLink
                  href={`/design-lab/b/${other.slug}`}
                  className={styles.otherChip}
                  morphName={`swatch-${other.slug}`}
                  style={swatchVars(other)}
                >
                  <span className={styles.otherName}>{other.name}</span>
                  <span className={styles.otherHex}>
                    {other.colour.bg.toUpperCase()}
                  </span>
                </SwatchLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </article>
  );
}
