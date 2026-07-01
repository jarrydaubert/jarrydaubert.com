import { describe, expect, it } from "vitest";
import { GET as feed } from "@/app/feed.xml/route";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { site } from "@/lib/site";
import { essaySlugs, projectSlugs } from "@/lib/content";
import { absoluteUrl, buildMetadata, serializeJsonLd } from "./metadata";

describe("absoluteUrl", () => {
  it("normalizes relative paths and passes absolute through", () => {
    expect(absoluteUrl("/about")).toBe(`${site.url}/about`);
    expect(absoluteUrl("about")).toBe(`${site.url}/about`);
    expect(absoluteUrl("https://example.com/x")).toBe("https://example.com/x");
  });
});

describe("serializeJsonLd", () => {
  it("escapes '<' so JSON-LD cannot break out of the script tag", () => {
    const out = serializeJsonLd({ a: "</script><b>" });
    expect(out).not.toContain("</script>");
    expect(out).toContain("\\u003c");
  });
});

describe("buildMetadata", () => {
  it("builds website defaults with a title template + canonical", () => {
    const m = buildMetadata();
    expect(m.alternates?.canonical).toBe("/");
    expect(m.title).toMatchObject({ template: `%s | ${site.name}` });
    expect((m.twitter as { card?: string } | null)?.card).toBe(
      "summary_large_image",
    );
  });

  it("sets canonical path and og url for a sub-page", () => {
    const m = buildMetadata({ title: "About", path: "/about" });
    expect(m.alternates?.canonical).toBe("/about");
    expect(m.openGraph?.url).toBe(absoluteUrl("/about"));
  });

  it("sets a default social image for non-essay pages", () => {
    const m = buildMetadata({ title: "About", path: "/about" });
    const og = m.openGraph as {
      images?: { url?: string; width?: number; height?: number }[];
    };
    const twitter = m.twitter as {
      images?: { url?: string; width?: number; height?: number }[];
    };

    expect(og.images?.[0]).toMatchObject({
      url: absoluteUrl("/opengraph-image"),
      width: 1200,
      height: 630,
      type: "image/png",
    });
    expect(twitter.images?.[0]?.url).toBe(absoluteUrl("/opengraph-image"));
  });

  it("emits article publishedTime for type=article", () => {
    const m = buildMetadata({
      title: "Essay",
      path: "/writing/essay",
      type: "article",
      publishedAt: "2026-05-25",
    });
    const og = m.openGraph as {
      type?: string;
      publishedTime?: string;
      images?: { url?: string }[];
    };
    expect(og.type).toBe("article");
    expect(og.publishedTime).toBe("2026-05-25");
    expect(og.images?.[0]?.url).toBe(
      absoluteUrl("/writing/essay/opengraph-image"),
    );
  });
});

describe("robots", () => {
  it("allows search and AI crawlers to reach public pages", () => {
    const rules = robots().rules as { userAgent?: string; allow?: string }[];
    const agents = rules.map((rule) => rule.userAgent);

    for (const agent of [
      "*",
      "Googlebot",
      "Google-Extended",
      "OAI-SearchBot",
      "GPTBot",
      "ChatGPT-User",
    ]) {
      expect(agents).toContain(agent);
    }
    expect(rules.every((rule) => rule.allow === "/")).toBe(true);
    expect(robots().sitemap).toBe(absoluteUrl("/sitemap.xml"));
  });
});

describe("feed", () => {
  it("includes a self link and last build date", async () => {
    const response = feed();
    const text = await response.text();

    expect(text).toContain('xmlns:atom="http://www.w3.org/2005/Atom"');
    expect(text).toContain(
      `<atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />`,
    );
    expect(text).toContain("<lastBuildDate>");
  });
});

describe("sitemap", () => {
  it("covers every static, essay, and project route with no duplicates", () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(new Set(urls).size).toBe(urls.length);
    for (const path of ["/", "/about", "/projects", "/writing"]) {
      expect(urls).toContain(absoluteUrl(path));
    }
    for (const slug of essaySlugs) {
      expect(urls).toContain(absoluteUrl(`/writing/${slug}`));
    }
    for (const slug of projectSlugs) {
      expect(urls).toContain(absoluteUrl(`/projects/${slug}`));
    }
  });
});

describe("site config", () => {
  it("exposes a well-formed url and email", () => {
    expect(() => new URL(site.url)).not.toThrow();
    expect(site.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  });
});
