import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, OgTemplate } from "@/app/_og/og-template";
import { site } from "@/lib/site";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = site.name;

export default function OpengraphImage() {
  return new ImageResponse(
    <OgTemplate
      eyebrow="jarrydaubert.com"
      title="Useful software, shipped with judgement."
      footer={site.jobTitle}
    />,
    { ...size },
  );
}
