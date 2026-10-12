import type { MetadataRoute } from "next";
import { allEssays, allProjects } from "@/lib/content";
import { absoluteUrl } from "@/lib/metadata";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Public page revisions are independent of the archived essay dates.
  const siteLastModified = site.updatedAt;

  const routes = [
    ...["/", "/about", "/projects", "/writing"].map((path) => ({
      path,
      lastModified: siteLastModified,
    })),
    ...allEssays.map((essay) => ({
      path: essay.href,
      lastModified: essay.updatedAt ?? essay.publishedAt,
    })),
    ...allProjects.map((project) => ({
      path: project.href,
      lastModified: siteLastModified,
    })),
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: route.lastModified,
  }));
}
