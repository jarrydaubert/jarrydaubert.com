import Link from "next/link";
import { labMetadata, projects } from "../data";
import styles from "../lab.module.css";
import { AboutCopy, Arrow, ContactLinks, ProjectVisual } from "../shared";

export const metadata = labMetadata("Open book", "/design-lab/a");

export default function EditorialHome() {
  return (
    <main id="main-content">
      <section className={styles.editorialIntro}>
        <h1>
          A few things
          <br />
          I&apos;ve been <em>building.</em>
        </h1>
        <div>
          <p>I&apos;m Jarryd. I explore AI by making things.</p>
          <p>A few of those experiments have become real apps and websites.</p>
          <a href="#work" className={styles.quietLink}>
            Take a look
            <Arrow />
          </a>
        </div>
      </section>
      <section id="work" className={styles.work}>
        <div className={styles.sectionLabel}>
          <h2>Selected work</h2>
          <span>Four things, and counting.</span>
        </div>
        <div className={styles.editorialGrid}>
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className={
                index === 0 || index === 3 ? styles.wideProject : undefined
              }
            >
              <Link
                href={`/design-lab/a/${project.slug}`}
                className={styles.projectCard}
                aria-label={`Explore ${project.name}`}
              >
                <ProjectVisual project={project} priority={index === 0} />
                <div className={styles.projectCaption}>
                  <div>
                    <span className={styles.projectNumber}>
                      {project.number} / {project.kind}
                    </span>
                    <h3>{project.name}</h3>
                    <p>{project.tagline}</p>
                  </div>
                  <span className={styles.openArrow}>
                    <Arrow />
                  </span>
                </div>
              </Link>
              <p className={styles.status}>
                {project.status}
                {project.slug === "prosepal" && (
                  <span> / Illustration, not an app screenshot</span>
                )}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section id="about" className={styles.editorialAbout}>
        <div>
          <span className={styles.smallLabel}>A little about me</span>
          <h2>
            Curiosity,
            <br />
            <em>put to work.</em>
          </h2>
        </div>
        <div className={styles.aboutBody}>
          <AboutCopy />
          <ContactLinks />
        </div>
      </section>
    </main>
  );
}
