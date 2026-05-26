import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/content/projects";
import { buildMetadata } from "@/lib/metadata";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return buildMetadata({
    title: project.name,
    description: `${project.summary} ${project.theme}`,
    image: project.previewImage
      ? {
          url: project.previewImage.src,
          alt: project.previewImage.alt,
        }
      : undefined,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm font-medium text-[var(--color-accent)]">
          Project
        </p>
        <h1 className="text-3xl font-semibold text-[var(--color-fg)] sm:text-4xl">
          {project.name}
        </h1>
        <p className="text-lg leading-8 text-[var(--color-muted)]">
          {project.summary}
        </p>
      </header>

      {project.previewImage ? (
        <div className="overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-surface)]">
          <Image
            src={project.previewImage.src}
            alt={project.previewImage.alt}
            width={1200}
            height={630}
            priority
            sizes="(min-width: 768px) 48rem, 100vw"
            className="aspect-[1200/630] w-full object-cover"
          />
        </div>
      ) : null}

      <div className="space-y-5 text-base leading-8 text-[var(--color-muted)]">
        <p>
          <span className="font-medium text-[var(--color-fg)]">
            Theme/focus:
          </span>{" "}
          {project.theme}
        </p>
        <p>
          <span className="font-medium text-[var(--color-fg)]">Status:</span>{" "}
          {project.status}
        </p>
        <p>Full case study coming soon.</p>
        {project.liveUrl ? (
          <p>
            <a
              href={project.liveUrl}
              className="font-medium text-[var(--color-fg)] underline decoration-[var(--color-border-hover)] underline-offset-4 outline-none transition-colors hover:text-[var(--color-accent)] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
              target="_blank"
              rel="noreferrer"
            >
              Visit live site
            </a>
          </p>
        ) : null}
      </div>

      <Link
        href="/projects"
        className="inline-flex rounded-sm border border-[var(--color-border)] px-3 py-2 text-sm font-medium text-[var(--color-fg)] outline-none transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
      >
        Back to projects
      </Link>
    </article>
  );
}
