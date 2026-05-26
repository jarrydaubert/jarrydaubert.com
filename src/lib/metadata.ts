import type { Metadata } from "next";
import { site } from "@/config/site";

type MetadataType = "website" | "article";

type BuildMetadataOptions = {
  title?: string;
  absoluteTitle?: boolean;
  description?: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt: string;
  };
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

export function buildMetadata({
  title,
  absoluteTitle = false,
  description = site.description,
  image = site.ogImage,
  path = "/",
  type = "website",
  publishedAt,
  modifiedAt,
}: BuildMetadataOptions = {}): Metadata {
  const metadataTitle =
    title === undefined
      ? {
          default: site.name,
          template: `%s | ${site.name}`,
        }
      : absoluteTitle
        ? { absolute: title }
        : title;
  const displayTitle = title ?? site.name;

  return {
    metadataBase: new URL(site.url),
    title: metadataTitle,
    description,
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
    openGraph: {
      title: displayTitle,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      images: [
        {
          url: image.url,
          width: image.width ?? site.ogImage.width,
          height: image.height ?? site.ogImage.height,
          alt: image.alt,
        },
      ],
      type,
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
      images: [image.url],
    },
  };
}
