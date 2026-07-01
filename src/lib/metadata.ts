import type { Metadata } from "next";
import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { site } from "@/lib/site";

type MetadataType = "website" | "article";

type BuildMetadataOptions = {
  title?: string;
  absoluteTitle?: boolean;
  description?: string;
  path?: string;
  type?: MetadataType;
  publishedAt?: string;
  modifiedAt?: string;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${normalizedPath}`;
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/**
 * Single metadata builder. OG/Twitter image tags point at file-based
 * `opengraph-image` routes: the default site image for normal pages and a
 * per-essay image for article pages.
 */
export function buildMetadata({
  title,
  absoluteTitle = false,
  description = site.description,
  path = "/",
  type = "website",
  publishedAt,
  modifiedAt,
}: BuildMetadataOptions = {}): Metadata {
  const metadataTitle =
    title === undefined
      ? { default: site.name, template: `%s | ${site.name}` }
      : absoluteTitle
        ? { absolute: title }
        : title;
  const displayTitle = title ?? site.name;
  const normalizedPath = path === "/" ? "" : path.replace(/\/$/, "");
  const imagePath =
    type === "article" && normalizedPath
      ? `${normalizedPath}/opengraph-image`
      : "/opengraph-image";
  const socialImage = {
    url: absoluteUrl(imagePath),
    width: OG_SIZE.width,
    height: OG_SIZE.height,
    alt: displayTitle,
    type: OG_CONTENT_TYPE,
  };

  return {
    metadataBase: new URL(site.url),
    title: metadataTitle,
    description,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    alternates: {
      canonical: path,
    },
    icons: {
      icon: [{ url: "/favicon.ico", sizes: "16x16 32x32" }],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/manifest.webmanifest",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: displayTitle,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      locale: site.locale,
      type,
      images: [socialImage],
      ...(type === "article" && publishedAt
        ? {
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      images: [socialImage],
    },
  };
}
