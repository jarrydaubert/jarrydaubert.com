import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { findProject, labMetadata, projects } from "./data";

describe("experimental route boundaries", () => {
  const routes = [
    "/design-lab",
    "/design-lab/a",
    "/design-lab/b",
    "/design-lab/b/about",
    ...projects.flatMap(({ slug }) => [
      `/design-lab/a/${slug}`,
      `/design-lab/b/${slug}`,
    ]),
  ];
  it.each(routes)("keeps %s out of search and the public sitemap", (path) => {
    const metadata = labMetadata("Experiment", path);
    expect(metadata.robots).toMatchObject({
      index: false,
      follow: false,
      googleBot: { index: false },
    });
    expect(metadata.alternates?.canonical).toBe(path);
    expect(sitemap().some(({ url }) => url.includes("/design-lab"))).toBe(
      false,
    );
  });
  it("does not resolve an unknown project to a published project", () => {
    expect(findProject("not-a-project")).toBeUndefined();
  });
  it("distinguishes the native ProsePal work from the App Store app", () => {
    expect(findProject("prosepal")?.status).toBe("Native app in development");
    expect(findProject("prosepal")?.image).toBeNull();
  });
});
