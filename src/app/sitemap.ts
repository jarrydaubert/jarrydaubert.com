import type { MetadataRoute } from "next";
import { allEssays, allProjects } from "@/lib/content";
import { absoluteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages have no content date; use the freshest essay as the site's
  // "last updated" signal (no divorced hardcoded constant).
  const siteLastModified = allEssays[0]?.publishedAt ?? "2026-05-25";

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
