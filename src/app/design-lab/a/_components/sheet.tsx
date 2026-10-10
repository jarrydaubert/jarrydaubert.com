import Image from "next/image";
import NextLink from "next/link";
import {
  type LabImage,
  type LabProject,
  prosePalIcon,
  realCommits,
} from "../../_lib/projects";
import styles from "../a.module.css";
import { Mark, type MarkKind } from "./marks";
import { RouteSketch } from "./route-sketch";

function Shot({
  image,
  className,
  sizes,
}: {
  image: LabImage;
  className?: string;
  sizes: string;
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      className={`${styles.shot} ${className ?? ""}`}
    />
  );
}

/** A margin note in reviewer's pencil, with a drawn arrow. */
export function Note({
  kind,
  className,
  children,
  delay = 250,
}: {
  kind: MarkKind;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <p className={`${styles.note} ${className ?? ""}`}>
      <span>{children}</span>
      <Mark kind={kind} className={styles.noteArrow} delay={delay} />
    </p>
  );
}

export function StatusLine({ project }: { project: LabProject }) {
  return (
    <p className={styles.status}>
      <Mark
        kind={project.live ? "tick" : "circle"}
        className={project.live ? styles.statusTick : styles.statusOpen}
      />
      {project.status}
    </p>
  );
}

/** The figure for each project: its own composition, not a shared template. */
export function ProjectFigure({ project }: { project: LabProject }) {
  switch (project.slug) {
    case "payetax":
      return (
        <div className={`${styles.figure} ${styles.figurePaye}`}>
          {project.desktop ? (
            <Shot
              image={project.desktop}
              sizes="(min-width: 900px) 56vw, 92vw"
            />
          ) : null}
          {project.mobile ? (
            <Shot
              image={project.mobile}
              className={styles.shotPhone}
              sizes="(min-width: 900px) 14vw, 34vw"
            />
          ) : null}
          <Note kind="arrowDown" className={styles.notePaye}>
            Income tax, National Insurance, student loans and pensions, for
            every UK region.
          </Note>
        </div>
      );
    case "prosepal":
      return (
        <div className={`${styles.figure} ${styles.figureProse}`}>
          <div className={styles.iconWrap}>
            <Image
              src={prosePalIcon.src}
              alt={prosePalIcon.alt}
              width={prosePalIcon.width}
              height={prosePalIcon.height}
              sizes="9rem"
              className={styles.icon}
            />
            <p className={styles.placeholder}>
              Native app screenshots to come, once it ships.
            </p>
          </div>
          <RouteSketch />
        </div>
      );
    case "evolution-padel":
      return (
        <div className={`${styles.figure} ${styles.figurePadel}`}>
          {project.desktop ? (
            <Shot
              image={project.desktop}
              sizes="(min-width: 900px) 56vw, 92vw"
            />
          ) : null}
          {project.mobile ? (
            <Shot
              image={project.mobile}
              className={styles.shotPhone}
              sizes="(min-width: 900px) 14vw, 34vw"
            />
          ) : null}
          <Note kind="arrowLeft" className={styles.notePadel}>
            Opening 2026. Booking isn&apos;t live yet, and the site says so.
          </Note>
        </div>
      );
    default:
      return (
        <div className={`${styles.figure} ${styles.figureSite}`}>
          {project.desktop ? (
            <div>
              <div className={styles.siteShot}>
                <Shot
                  image={project.desktop}
                  sizes="(min-width: 900px) 40vw, 92vw"
                />
                <Mark kind="strike" className={styles.siteStrike} />
              </div>
              <Note kind="arrowRight" className={styles.noteSite}>
                Today&apos;s homepage. You&apos;re looking at one idea for the
                next one.
              </Note>
            </div>
          ) : null}
          <div className={styles.log}>
            <p className={styles.logTitle}>A few real commits</p>
            <ol className={styles.logList}>
              {realCommits.map((commit) => (
                <li key={commit.message}>
                  <time dateTime={commit.date}>{commit.date}</time>
                  <span>{commit.message}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      );
  }
}

export function Sheet({
  project,
  flip,
}: {
  project: LabProject;
  flip: boolean;
}) {
  const external = project.links.find((link) => link.href.startsWith("http"));

  return (
    <article
      id={project.slug}
      className={`${styles.sheet} ${flip ? styles.sheetFlip : ""}`}
      aria-labelledby={`${project.slug}-title`}
    >
      <div className={styles.sheetText}>
        <h2 id={`${project.slug}-title`} className={styles.sheetTitle}>
          <NextLink href={`/design-lab/a/${project.slug}`}>
            {project.name}
          </NextLink>
        </h2>
        <p className={styles.sheetLine}>{project.line}</p>
        <StatusLine project={project} />
        <p className={styles.sheetBody}>{project.what}</p>
        <p className={styles.sheetLinks}>
          <NextLink href={`/design-lab/a/${project.slug}`}>
            How it was made
          </NextLink>
          {external ? (
            <a href={external.href} target="_blank" rel="noreferrer">
              {external.label}
            </a>
          ) : null}
        </p>
      </div>
      <ProjectFigure project={project} />
    </article>
  );
}
