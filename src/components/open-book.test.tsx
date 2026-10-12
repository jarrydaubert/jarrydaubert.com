import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";
import { allProjects } from "@/lib/content";
import { SiteHeader } from "./site-chrome";

describe("public Open Book experience", () => {
  it("keeps archived writing and experiments out of the public entry points", () => {
    const html = renderToStaticMarkup(
      <>
        <SiteHeader />
        <Home />
      </>,
    );
    expect(html).not.toContain('href="/writing');
    expect(html).not.toContain("ai-operator-experiments");
    expect(html).not.toContain("evolution-padel");
    expect(html).toContain('href="/projects"');
    expect(html).toContain('href="/about"');
    for (const project of allProjects) {
      expect(html).toContain(`href="${project.href}"`);
      expect(html).toContain(project.status);
    }
  });

  it("presents the unreleased native app without a fabricated app screen", () => {
    const html = renderToStaticMarkup(<Home />);
    const images = [...html.matchAll(/<img\s[^>]*alt="([^"]*)"/g)].map(
      (match) => match[1],
    );
    expect(images).toHaveLength(3);
    expect(images.filter((alt) => alt.includes("ProsePal"))).toEqual([
      "ProsePal&#x27;s feather app icon",
    ]);
    expect(html).toContain("Native app in development");
    expect(html).not.toContain("Live app");
  });
});
