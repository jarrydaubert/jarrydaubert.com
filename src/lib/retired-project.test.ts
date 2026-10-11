import { describe, expect, it } from "vitest";
import nextConfig from "../../next.config";
import sitemap from "@/app/sitemap";
import { getProject } from "@/lib/content";
import { buildLlmsTxt } from "@/lib/llms";
import { absoluteUrl } from "@/lib/metadata";

describe("former project removal", () => {
  it("permanently redirects the previous public URL to the projects index", async () => {
    const redirects = await nextConfig.redirects?.();
    expect(redirects).toContainEqual({
      source: "/projects/evolution-padel",
      destination: "/projects",
      permanent: true,
    });
  });

  it("keeps the removed project out of public content and discovery", () => {
    expect(getProject("evolution-padel")).toBeUndefined();
    expect(sitemap().map((entry) => entry.url)).not.toContain(
      absoluteUrl("/projects/evolution-padel"),
    );
    expect(buildLlmsTxt()).not.toContain("Evolution Padel");
    expect(buildLlmsTxt()).not.toContain("evolutionpadel.uk");
  });
});
