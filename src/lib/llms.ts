import { allEssays, allProjects } from "@/lib/content";
import { absoluteUrl } from "@/lib/metadata";
import { site } from "@/lib/site";

// Builds the /llms.txt body following the llmstxt.org convention: a concise,
// link-first Markdown map of the site for LLMs. Sourced from the same content
// loaders as the sitemap and RSS feed (allProjects/allEssays), so it never
// drifts from what is actually published. There is no second source of truth.
export function buildLlmsTxt(): string {
  const projects = allProjects
    .map((project) => {
      const live = project.liveUrl ? ` Live at ${project.liveUrl}.` : "";
      return `- [${project.name}](${absoluteUrl(project.href)}): ${project.summary}${live}`;
    })
    .join("\n");

  const essays = allEssays
    .map(
      (essay) =>
        `- [${essay.title}](${absoluteUrl(essay.href)}): ${essay.summary}`,
    )
    .join("\n");

  return `# ${site.name}

> ${site.description}

${site.homeDescription} This site gathers the apps and sites he has shipped end to end, with case studies on each, alongside writing on building and testing software.

## Pages

- [Home](${absoluteUrl("/")}): Introduction and a guided path into the projects and the reasoning behind them.
- [About](${absoluteUrl("/about")}): Background, focus areas, how he works, and how to get in touch.
- [Projects](${absoluteUrl("/projects")}): Index of shipped projects, each with a case study.
- [Writing](${absoluteUrl("/writing")}): Essays on building and testing software.

## Projects

${projects}

## Writing

${essays}

## Optional

- [RSS feed](${absoluteUrl("/feed.xml")}): Full feed of new writing.
`;
}
