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

  it("states the tester-first positioning and testing spectrum", () => {
    const text = buildLlmsTxt();

    expect(text).toContain("## Core Positioning");
    expect(text).toContain(
      "Jarryd Aubert is a software tester who builds and ships his own apps to understand what he tests.",
    );
    expect(text).toContain("## Testing Spectrum");
    expect(text).toContain("PayeTax shows deterministic testing");
    expect(text).toContain("ProsePal shows non-deterministic testing");
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
});
