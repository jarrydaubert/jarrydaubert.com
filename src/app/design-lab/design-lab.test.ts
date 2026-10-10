import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { labMetadata, labRobots } from "./_lib/metadata";
import { labProjects } from "./_lib/projects";
import { metadata as layoutMetadata } from "./layout";

const LAB_DIR = join(process.cwd(), "src/app/design-lab");

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return sourceFiles(path);
    return /\.(tsx?|css)$/.test(name) && !name.endsWith(".test.ts")
      ? [path]
      : [];
  });
}

describe("design lab", () => {
  it("is never indexed or followed", () => {
    expect(labRobots).toMatchObject({ index: false, follow: false });
    expect(layoutMetadata.robots).toBe(labRobots);
    const page = labMetadata("Test", "Test");
    expect(page.robots).toBe(labRobots);
    expect(page.alternates?.canonical).toBeNull();
  });

  it("stays out of the sitemap", () => {
    for (const entry of sitemap()) {
      expect(entry.url).not.toContain("/design-lab");
    }
  });

  it("states a release status for every project", () => {
    expect(labProjects.map((project) => project.slug)).toEqual([
      "payetax",
      "prosepal",
      "evolution-padel",
      "this-site",
    ]);
    for (const project of labProjects) {
      expect(project.status.length).toBeGreaterThan(0);
    }
    const prosePal = labProjects.find((p) => p.slug === "prosepal");
    expect(prosePal?.live).toBe(false);
    expect(prosePal?.desktop).toBeUndefined();
  });

  it("uses no auto-substituted typography in its source", () => {
    // Em dash, en dash, curly quotes and the ellipsis character.
    const banned = /[–—‘’“”…]/;
    for (const file of sourceFiles(LAB_DIR)) {
      expect(readFileSync(file, "utf8"), file).not.toMatch(banned);
    }
  });
});
