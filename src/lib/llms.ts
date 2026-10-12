import { allEssays, allProjects } from "@/lib/content";
import { absoluteUrl } from "@/lib/metadata";
import { site } from "@/lib/site";

export function buildLlmsTxt(): string {
  const projects = allProjects
    .map(
      (project) =>
        `- [${project.name}](${absoluteUrl(project.href)}): ${project.summary} Status: ${project.status}. ${project.theme}`,
    )
    .join("\n");
  const essays = allEssays
    .map(
      (essay) =>
        `- [${essay.title}](${absoluteUrl(essay.href)}): ${essay.summary}`,
    )
    .join("\n");
  return `# ${site.name}

> ${site.description}

A personal home for things Jarryd enjoys building with AI. Software testing is supporting background; LinkedIn carries the career details.

## Pages

- [Home](${absoluteUrl("/")}): A brief introduction and selected work.
- [About](${absoluteUrl("/about")}): Curiosity, collaboration with coding agents, and contact.
- [Projects](${absoluteUrl("/projects")}): Live projects and work in development.

## Projects

${projects}

## Archive

Older writing remains available at its original URLs. It is not featured in the main site.

- [Writing archive](${absoluteUrl("/writing")})
${essays}

## Optional

- [RSS feed](${absoluteUrl("/feed.xml")}): The existing writing feed.
`;
}
