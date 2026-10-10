import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { collaboration, type LabProject } from "./data";
import styles from "./lab.module.css";

export function Arrow({ back = false }: { back?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={back ? styles.backArrow : undefined}
    >
      <path
        d="M4 12h15M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProjectVisual({
  project,
  priority = false,
}: {
  project: LabProject;
  priority?: boolean;
}) {
  if (project.slug === "prosepal")
    return (
      <div className={`${styles.visual} ${styles.proseVisual}`}>
        <div className={styles.noteBehind} aria-hidden="true" />
        <div className={styles.paper}>
          <span>ProsePal</span>
          <p>
            For the words
            <br />
            that don&apos;t
            <br />
            <em>come easily.</em>
          </p>
          <span className={styles.paperBottom}>
            A little help finding your words.
          </span>
        </div>
      </div>
    );
  if (project.slug === "this-website")
    return (
      <div className={`${styles.visual} ${styles.siteVisual}`}>
        <span>jarrydaubert.com</span>
        <p>
          Always
          <br />
          <em>in the making.</em>
        </p>
        <span>A personal website, with room to try things.</span>
      </div>
    );
  return (
    <div
      className={`${styles.visual} ${project.slug === "payetax" ? styles.taxVisual : styles.padelVisual}`}
    >
      <Image
        src={project.image ?? ""}
        alt={project.alt}
        width={1440}
        height={1000}
        sizes="(max-width: 700px) 100vw, 75vw"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className={styles.projectImage}
      />
    </div>
  );
}

export function ProjectLinks({ project }: { project: LabProject }) {
  return (
    <div className={styles.projectLinks}>
      <a href={project.url} target="_blank" rel="noreferrer">
        {project.slug === "prosepal"
          ? "Visit product website"
          : "Visit website"}
        <Arrow />
        <span className={styles.srOnly}> (opens in a new tab)</span>
      </a>
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noreferrer">
          Explore the code
          <Arrow />
          <span className={styles.srOnly}> (opens in a new tab)</span>
        </a>
      )}
    </div>
  );
}

export function AboutCopy() {
  return (
    <>
      <p>
        I&apos;m Jarryd. I like taking an idea, building it with AI, and finding
        out what it can become.
      </p>
      <p>{collaboration}</p>
      <p>
        My day job is in software testing. This space is for the things I make.
      </p>
    </>
  );
}

export function ContactLinks() {
  return (
    <div className={styles.contactLinks}>
      <a href={`mailto:${site.email}`}>
        Say hello
        <Arrow />
      </a>
      <a href={site.socials.github}>
        GitHub
        <Arrow />
      </a>
      <a href={site.socials.linkedin}>
        LinkedIn
        <Arrow />
      </a>
    </div>
  );
}

export function LabFooter({ concept }: { concept: string }) {
  return (
    <footer className={styles.labFooter}>
      <span>Jarryd Aubert / Built with curiosity.</span>
      <Link href="/design-lab">
        {concept} / Back to design lab
        <Arrow />
      </Link>
    </footer>
  );
}
