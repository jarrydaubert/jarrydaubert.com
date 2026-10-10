import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { allProjects } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

const siteDescription =
  "Selected shipped apps, client work, and testing notes by Jarryd Aubert.";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description: siteDescription,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <section className="space-y-10" aria-labelledby="projects-title">
      <header className="max-w-3xl space-y-4">
        <h1
          id="projects-title"
          className="text-3xl font-semibold text-fg sm:text-4xl"
        >
          Projects
        </h1>
        <p className="text-base leading-7 text-muted">
          Selected apps, client work, and experiments that show how I test
          software: checking exact answers, judging messy human outputs, and
          making sure small projects are safe enough to ship.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {allProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index < 3}
          />
        ))}
      </div>
    </section>
  );
}
