import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/metadata";
import { publicRoutes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: route.lastModified,
  }));
}
