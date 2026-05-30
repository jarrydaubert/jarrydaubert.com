import { serializeJsonLd } from "@/lib/metadata";

/**
 * Server component that injects JSON-LD with '<' escaped before injection.
 * Replaces ad-hoc dangerouslySetInnerHTML at call sites.
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: serializeJsonLd escapes '<' on static local data.
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
