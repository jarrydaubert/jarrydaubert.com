import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/metadata";

const crawlableUserAgents = [
  "*",
  "Googlebot",
  "Google-Extended",
  "OAI-SearchBot",
  "GPTBot",
  "ChatGPT-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: crawlableUserAgents.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
