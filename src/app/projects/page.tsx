import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <section className="space-y-10" aria-labelledby="projects-title">
      <header className="max-w-3xl space-y-4">
        <h1
          id="projects-title"
          className="text-3xl font-semibold text-stone-950 dark:text-stone-50 sm:text-4xl"
        >
          Projects
        </h1>
        <p className="text-base leading-7 text-stone-600 dark:text-stone-300">
          Starter notes for products and experiments. Proper case studies will
          replace these placeholders.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            summary={project.summary}
            headingLevel={2}
            status={project.status}
          />
        ))}
      </div>
    </section>
  );
}
