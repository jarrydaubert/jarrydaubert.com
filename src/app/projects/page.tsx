import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
import { buildMetadata } from "@/lib/metadata";

const siteDescription =
  "Selected products, client work, and AI operator experiments by Jarryd Aubert.";

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
          className="text-3xl font-semibold text-[var(--color-fg)] sm:text-4xl"
        >
          Projects
        </h1>
        <p className="text-base leading-7 text-[var(--color-muted)]">
          Selected products, client work, and experiments across practical
          software quality, AI-assisted delivery, and small product shipping.
          Proper case studies will replace these starter notes.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            summary={project.summary}
            headingLevel={2}
            theme={project.theme}
            status={project.status}
            caseStudyStatus={project.caseStudyStatus}
            liveUrl={project.liveUrl}
            previewImage={project.previewImage}
          />
        ))}
      </div>
    </section>
  );
}
