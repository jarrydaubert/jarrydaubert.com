import Link from "next/link";
import { notFound } from "next/navigation";
import { collaboration, findProject, labMetadata, projects } from "../../data";
import styles from "../../lab.module.css";
import { PayeTaxMedia } from "../../payetax-media";
import { Arrow, ProjectLinks, ProjectVisual } from "../../shared";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProject(slug);
  return labMetadata(
    project?.name ?? "Project not found",
    `/design-lab/a/${slug}`,
  );
}

export default async function EditorialProject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main id="main-content" className={styles.detail}>
      <Link href="/design-lab/a#work" className={styles.quietLink}>
        <Arrow back />
        All work
      </Link>
      <div className={styles.detailHeading}>
        <h1>{project.name}</h1>
        <div>
          <p>{project.tagline}</p>
          <span className={styles.status}>{project.status}</span>
        </div>
      </div>
      {project.slug === "payetax" ? (
        <PayeTaxMedia />
      ) : (
        <figure>
          <ProjectVisual project={project} priority />
          <figcaption>{project.caption}</figcaption>
        </figure>
      )}
      <div className={styles.detailBody}>
        <h2>A closer look.</h2>
        <div>
          <p className={styles.largeBody}>{project.description}</p>
          <p>{project.note}</p>
          <ProjectLinks project={project} />
          <details className={styles.buildNote}>
            <summary>
              How I work with AI<span>+</span>
            </summary>
            <p>{collaboration}</p>
          </details>
        </div>
      </div>
      <Link className={styles.nextProject} href={`/design-lab/a/${next.slug}`}>
        <span>Next project</span>
        <strong>{next.name}</strong>
        <Arrow />
      </Link>
    </main>
  );
}
