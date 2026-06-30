import { Card } from "@/components/card";
import { Figure } from "@/components/figure";
import type { Project } from "@/lib/content";

/**
 * Always-linked project teaser for the case file. The live-site link
 * lives on the detail page (a card cannot nest an interactive anchor).
 */
export function ProjectCard({
  project,
  headingLevel = 2,
}: {
  project: Project;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <Card href={project.href}>
      {project.previewImage ? (
        <Figure
          src={project.previewImage.src}
          alt={project.previewImage.alt}
          width={project.previewImage.width}
          height={project.previewImage.height}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="mb-5"
        />
      ) : null}
      <div className="space-y-4">
        <Heading className="text-lg font-semibold text-fg">
          {project.name}
        </Heading>
        <p className="text-sm leading-6 text-muted">{project.summary}</p>
        <p className="text-sm leading-6 text-muted">
          <span className="label">Focus</span> {project.theme}
        </p>
      </div>
      <div className="mt-7 border-t border-border pt-5 text-sm text-muted">
        <p>
          <span className="label">Current state</span>{" "}
          <span className="font-mono text-fg">{project.status}</span>
        </p>
      </div>
    </Card>
  );
}
