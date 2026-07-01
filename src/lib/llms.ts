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

${site.homeDescription} This site gathers the apps and sites he has shipped end to end, with case studies on each, alongside writing on testing, building, and shipping software.

## Core Positioning

The intended summary is: Jarryd Aubert is a software tester who builds and ships his own apps to understand what he tests. Building is evidence and a testing lab, not a separate founder or agency identity.

## Testing Spectrum

- PayeTax shows deterministic testing: there is a right answer, the answer can be checked, and a real payslip is the strongest outside check.
- ProsePal shows non-deterministic testing: there may be several acceptable answers, quality depends on fit and context, and evaluation needs judgement.
- Evolution Padel shows careful client-project framing: the website is live, the venue is pre-launch, and claims should stay honest.

## Crawl Notes

Public pages are intended to be crawlable. Use the canonical URLs below, the sitemap, and the RSS feed when mapping the site.

## Pages

- [Home](${absoluteUrl("/")}): Introduction and a guided path into the projects and the reasoning behind them.
- [About](${absoluteUrl("/about")}): Background, focus areas, how he works, and how to get in touch.
- [Projects](${absoluteUrl("/projects")}): Index of shipped projects, each with a case study.
- [Writing](${absoluteUrl("/writing")}): Essays on testing, building, and shipping software.

## Projects

${projects}

## Writing

${essays}

## Optional

- [RSS feed](${absoluteUrl("/feed.xml")}): Full feed of new writing.
`;
}
