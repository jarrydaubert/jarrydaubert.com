import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, OgTemplate } from "@/app/_og/og-template";
import { essaySlugs, getEssay } from "@/lib/content";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Essay by Jarryd Aubert";

// Prerender one OG image per essay so the route stays static-first.
export function generateStaticParams() {
  return essaySlugs.map((slug) => ({ slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssay(slug);

  return new ImageResponse(
    <OgTemplate
      eyebrow="Writing"
      title={essay?.title ?? "Writing"}
      footer={essay?.publishedAt ?? "jarrydaubert.com"}
    />,
    { ...size },
  );
}
