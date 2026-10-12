import { Children, isValidElement, type ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";
import ProjectPage from "@/app/projects/[slug]/page";
import ProjectsPage from "@/app/projects/page";
import { allProjects } from "@/lib/content";
import { Prose } from "./prose";
import { SiteFooter, SiteHeader } from "./site-chrome";

function findProseSource(node: ReactNode): string | undefined {
  if (!isValidElement<{ children?: ReactNode; source?: string }>(node)) {
    return undefined;
  }
  if (node.type === Prose) return node.props.source;
  return Children.toArray(node.props.children)
    .map(findProseSource)
    .find((source) => source !== undefined);
}

describe("public Open Book experience", () => {
  it("preserves the footer space after formatting JSX", () => {
    expect(renderToStaticMarkup(<SiteFooter />)).toContain(
      'Jarryd Aubert<span class="text-accent">.</span> \u00a9 2026',
    );
  });
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
      const article = [
        ...html.matchAll(/<article\b[^>]*>([\s\S]*?)<\/article>/g),
      ]
        .map((match) => match[1])
        .find((content) => content.includes(`href="${project.href}"`));
      expect(article).toBeDefined();
      expect(article).toContain(project.status);
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
  });

  it("distinguishes the forthcoming SwiftUI rebuild from the Flutter release on its detail page", async () => {
    const page = await ProjectPage({
      params: Promise.resolve({ slug: "prosepal" }),
    });
    const header = Children.toArray(page.props.children).find(
      (child) => isValidElement(child) && child.type === "header",
    );
    const headerHtml = renderToStaticMarkup(header);
    expect(headerHtml).toContain("<h1>ProsePal</h1>");
    expect(headerHtml.match(/Native app in development/g)).toHaveLength(1);

    const source = findProseSource(page);
    expect(source).toBeDefined();
    const body = renderToStaticMarkup(await Prose({ source: source ?? "" }));
    expect(body).toContain("I&#x27;m rebuilding it in SwiftUI");
    const releaseParagraph = [...body.matchAll(/<p>([\s\S]*?)<\/p>/g)]
      .map((match) => match[1])
      .find((content) => content.includes("existing App Store app"));
    expect(releaseParagraph).toContain(
      'href="https://apps.apple.com/app/prosepal/id6757088726"',
    );
    expect(releaseParagraph).toContain("is the earlier Flutter version.");
    expect(releaseParagraph).toContain(
      "This SwiftUI rebuild isn&#x27;t released yet.",
    );
  });

  it("uses h2 project titles directly beneath the projects page h1", () => {
    const html = renderToStaticMarkup(<ProjectsPage />);
    expect([...html.matchAll(/<h([123])\b/g)].map((match) => match[1])).toEqual(
      ["1", "2", "2", "2"],
    );
  });
});
