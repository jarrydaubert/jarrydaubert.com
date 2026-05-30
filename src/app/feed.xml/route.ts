import { allEssays } from "@/lib/content";
import { absoluteUrl } from "@/lib/metadata";
import { site } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const items = allEssays
    .map(
      (essay) => `    <item>
      <title>${escapeXml(essay.title)}</title>
      <link>${absoluteUrl(essay.href)}</link>
      <guid>${absoluteUrl(essay.href)}</guid>
      <pubDate>${new Date(essay.publishedAt).toUTCString()}</pubDate>
      <description>${escapeXml(essay.summary)}</description>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.name)}</title>
    <link>${site.url}</link>
    <description>${escapeXml(site.description)}</description>
    <language>en-GB</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
