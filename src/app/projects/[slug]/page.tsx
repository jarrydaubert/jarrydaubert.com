import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/components/link";
import { PayeTaxMedia, ProsePalMedia } from "@/components/open-book";
import styles from "@/components/open-book.module.css";
import { Prose } from "@/components/prose";
import { getProject, projectSlugs } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { projectJsonLd } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return buildMetadata({
    title: project.name,
    description: `${project.summary} ${project.theme}`,
    path: project.href,
    index: project.listed,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className={styles.detail}>
      <JsonLd data={projectJsonLd(project)} />
      <Link href="/projects" className={styles.back}>
        Back to work
      </Link>
      <header className={styles.pageIntro}>
        <div className={styles.detailStatus}>{project.status}</div>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
      </header>
      {slug === "payetax" ? <PayeTaxMedia priority /> : null}
      <div className={slug === "prosepal" ? styles.proseDetail : undefined}>
        {slug === "prosepal" ? <ProsePalMedia /> : null}
        <div>
          {project.body.trim() ? (
            <div className={styles.detailBody}>
              <Prose source={project.body} />
            </div>
          ) : (
            <p className="text-muted">{project.theme}</p>
          )}
          <div className={styles.detailLinks}>
            {project.liveUrl ? (
              <Link href={project.liveUrl}>
                {slug === "this-website"
                  ? "Explore the source on GitHub"
                  : "Visit PayeTax"}
              </Link>
            ) : null}
            {slug === "prosepal" ? (
              <Link href="https://prosepal.app/">Visit ProsePal</Link>
            ) : null}
          </div>
        </div>
      </div>
      {slug === "payetax" ? (
        <figure>
          <Image
            unoptimized
            src="/projects/payetax-calculator.webp"
            alt="PayeTax showing the tax breakdown for an illustrative annual salary of 50,000 pounds."
            width={1425}
            height={891}
            sizes="90vw"
            className={styles.calculator}
          />
          <figcaption className="mt-3 text-xs text-muted">
            The live calculator, with an example salary.
          </figcaption>
        </figure>
      ) : null}
    </article>
  );
}
