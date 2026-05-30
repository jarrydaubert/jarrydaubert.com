import { describe, expect, it } from "vitest";
import {
  allEssays,
  allProjects,
  essaySlugs,
  getEssay,
  getProject,
  projectSlugs,
  selectedWork,
} from "@/lib/content";

describe("content loader", () => {
  it("loads the migrated essay with its URL preserved", () => {
    const essay = getEssay("ai-assisted-development-demos-vs-shipping");
    expect(essay).toBeDefined();
    expect(essay?.href).toBe(
      "/writing/ai-assisted-development-demos-vs-shipping",
    );
    expect(essay?.body.length).toBeGreaterThan(500);
    expect(essay?.readingTime).toMatch(/min read/);
  });

  it("loads all four projects in declared order", () => {
    expect(projectSlugs).toEqual([
      "prosepal",
      "payetax",
      "evolution-padel",
      "ai-operator-experiments",
    ]);
    expect(getProject("prosepal")?.href).toBe("/projects/prosepal");
  });

  it("selects exactly the featured projects for the home page", () => {
    expect(selectedWork.map((p) => p.slug)).toEqual([
      "prosepal",
      "payetax",
      "evolution-padel",
    ]);
  });

  it("has unique slugs within and across content types", () => {
    const all = [...essaySlugs, ...projectSlugs];
    expect(new Set(all).size).toBe(all.length);
  });

  it("every essay has a parseable ISO publishedAt", () => {
    for (const essay of allEssays) {
      expect(essay.publishedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(Date.parse(essay.publishedAt))).toBe(false);
    }
  });

  it("every project preview image declares positive dimensions", () => {
    for (const project of allProjects) {
      if (project.previewImage) {
        expect(project.previewImage.width).toBeGreaterThan(0);
        expect(project.previewImage.height).toBeGreaterThan(0);
      }
    }
  });

  it("orders essays newest first", () => {
    const dates = allEssays.map((essay) => essay.publishedAt);
    expect([...dates].sort((a, b) => (a < b ? 1 : -1))).toEqual(dates);
  });
});
