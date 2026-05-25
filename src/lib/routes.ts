import { site } from "@/config/site";
import { projects } from "@/content/projects";
import { writing } from "@/content/writing";

export type PublicRoute = {
  path: string;
  lastModified: string;
};

const siteLastModified = "2026-05-25";

export const staticRoutes: PublicRoute[] = [
  { path: "/", lastModified: siteLastModified },
  ...site.nav.map((item) => ({
    path: item.href,
    lastModified: siteLastModified,
  })),
];

export const projectRoutes: PublicRoute[] = projects.map((project) => ({
  path: `/projects/${project.slug}`,
  lastModified: siteLastModified,
}));

export const writingRoutes: PublicRoute[] = writing.map((essay) => ({
  path: essay.href,
  lastModified: essay.publishedAt,
}));

export const publicRoutes: PublicRoute[] = [
  ...staticRoutes,
  ...projectRoutes,
  ...writingRoutes,
];
