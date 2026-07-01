import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Figure } from "@/components/figure";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/components/link";
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
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const hasCaseStudy = project.body.trim().length > 0;

  return (
    <article className="max-w-3xl space-y-10">
      <JsonLd data={projectJsonLd(project)} />
      <header className="space-y-4">
        <p className="text-sm font-medium text-subtle">Project</p>
        <h1 className="text-3xl font-semibold text-fg sm:text-4xl">
          {project.name}
        </h1>
        <p className="text-lg leading-8 text-muted">{project.summary}</p>
      </header>

      {project.previewImage ? (
        <Figure
          src={project.previewImage.src}
          alt={project.previewImage.alt}
          width={project.previewImage.width}
          height={project.previewImage.height}
          priority
        />
      ) : null}

      <div className="space-y-5 text-base leading-8 text-muted">
        <p>
          <span className="font-medium text-fg">Theme/focus:</span>{" "}
          {project.theme}
        </p>
        <p>
          <span className="font-medium text-fg">Status:</span> {project.status}
        </p>
        {project.liveUrl ? (
          <p>
            <Link href={project.liveUrl}>Visit live site</Link>
          </p>
        ) : null}
      </div>

      {hasCaseStudy ? <Prose source={project.body} /> : null}

      <Link href="/projects" variant="back">
        Back to projects
      </Link>
    </article>
  );
}
