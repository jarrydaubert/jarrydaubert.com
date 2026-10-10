import Link from "next/link";
import { collaboration, type LabProject, projects } from "../data";
import styles from "../lab.module.css";
import { Arrow, ProjectLinks, ProjectVisual } from "../shared";

export function Viewer({ project }: { project: LabProject }) {
  const index = projects.indexOf(project);
  const previous = projects[(index + projects.length - 1) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return (
    <article key={project.slug} className={styles.viewer}>
      <div className={styles.viewerToolbar}>
        <span>Selected work</span>
        <div>
          <span>{project.number} / 04</span>
          <Link
            href={`/design-lab/b/${previous.slug}`}
            scroll={false}
            aria-label={`Previous project: ${previous.name}`}
          >
            <Arrow back />
          </Link>
          <Link
            href={`/design-lab/b/${next.slug}`}
            scroll={false}
            aria-label={`Next project: ${next.name}`}
          >
            <Arrow />
          </Link>
        </div>
      </div>
      <figure>
        <ProjectVisual project={project} priority />
        <figcaption>{project.caption}</figcaption>
      </figure>
      <div className={styles.viewerHeading}>
        <h2>{project.name}</h2>
        <span className={styles.status}>{project.status}</span>
      </div>
      <p className={styles.viewerTagline}>{project.tagline}</p>
      <p className={styles.viewerDescription}>{project.description}</p>
      <ProjectLinks project={project} />
      <details className={styles.buildNote}>
        <summary>
          A closer look<span>+</span>
        </summary>
        <p>{project.note}</p>
        <p>{collaboration}</p>
      </details>
      <nav className={styles.filmstrip} aria-label="Project thumbnails">
        {projects.map((item) => (
          <Link
            href={`/design-lab/b/${item.slug}`}
            scroll={false}
            key={item.slug}
            aria-current={project.slug === item.slug ? "page" : undefined}
          >
            <div className={styles.thumbnail}>
              <ProjectVisual project={item} />
            </div>
            <span>
              {item.number}
              <strong>{item.name}</strong>
            </span>
          </Link>
        ))}
      </nav>
    </article>
  );
}
