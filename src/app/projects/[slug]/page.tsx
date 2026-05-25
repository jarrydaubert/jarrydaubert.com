import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/content/projects";

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

  return {
    title: project.name,
    description: `${project.summary} ${project.theme}`,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
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
        <p className="text-sm font-medium text-stone-600 dark:text-stone-300">
          Project
        </p>
        <h1 className="text-3xl font-semibold text-stone-950 dark:text-stone-50 sm:text-4xl">
          {project.name}
        </h1>
        <p className="text-lg leading-8 text-stone-700 dark:text-stone-200">
          {project.summary}
        </p>
      </header>

      <div className="space-y-5 text-base leading-8 text-stone-600 dark:text-stone-300">
        <p>
          <span className="font-medium text-stone-800 dark:text-stone-100">
            Theme/focus:
          </span>{" "}
          {project.theme}
        </p>
        <p>
          <span className="font-medium text-stone-800 dark:text-stone-100">
            Status:
          </span>{" "}
          {project.status}
        </p>
        <p>Full case study coming soon.</p>
        {project.liveUrl ? (
          <p>
            <a
              href={project.liveUrl}
              className="font-medium text-stone-800 underline decoration-stone-300 underline-offset-4 outline-none hover:text-stone-950 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50 dark:text-stone-100 dark:decoration-stone-600 dark:hover:text-white dark:focus-visible:ring-stone-50 dark:focus-visible:ring-offset-stone-950"
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
        className="inline-flex rounded border border-stone-300 px-3 py-2 text-sm font-medium text-stone-800 outline-none hover:border-stone-500 hover:text-stone-950 focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50 dark:border-stone-700 dark:text-stone-200 dark:hover:border-stone-500 dark:hover:text-stone-50 dark:focus-visible:ring-stone-50 dark:focus-visible:ring-offset-stone-950"
      >
        Back to projects
      </Link>
    </article>
  );
}
