import { describe, expect, it } from "vitest";
import { allEssays, allProjects } from "@/lib/content";
import { absoluteUrl } from "@/lib/metadata";
import { site } from "@/lib/site";
import { buildLlmsTxt } from "./llms";

describe("buildLlmsTxt", () => {
  it("opens with the site title and summary blockquote", () => {
    const text = buildLlmsTxt();
    expect(text.startsWith(`# ${site.name}\n`)).toBe(true);
    expect(text).toContain(`> ${site.description}`);
  });

  it("links the core pages and the feed by canonical URL", () => {
    const text = buildLlmsTxt();
    for (const path of ["/", "/about", "/projects", "/writing", "/feed.xml"]) {
      expect(text).toContain(absoluteUrl(path));
    }
  });

  it("describes building with AI and distinguishes release states", () => {
    const text = buildLlmsTxt();
    expect(text).toContain("building real things");
    expect(text).toContain("Native app in development");
    expect(text).toContain("Live website");
    expect(text).not.toContain("case study");
    expect(text).not.toContain("understand what he tests");
  });

  it("links every published project and essay so the map cannot drift", () => {
    const text = buildLlmsTxt();
    for (const project of allProjects) {
      expect(text).toContain(absoluteUrl(project.href));
      expect(text).toContain(project.name);
    }
    for (const essay of allEssays) {
      expect(text).toContain(absoluteUrl(essay.href));
      expect(text).toContain(essay.title);
    }
  });

  it("omits the unlisted experiment from generated references", () => {
    const text = buildLlmsTxt();
    expect(text).not.toContain("AI workflow experiments");
    expect(text).not.toContain("/projects/ai-operator-experiments");
  });
});
