import { token } from "@/lib/tokens";

export { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

/**
 * Shared OG layout for the default site image and per-essay images. Uses inline
 * styles + brand tokens (ImageResponse does not run Tailwind) read from the same
 * @theme source as the site, so OG colors never drift from the UI.
 */
export function OgTemplate({
  eyebrow,
  title,
  footer,
}: {
  eyebrow: string;
  title: string;
  footer: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: token("bg"),
        color: token("fg"),
        padding: 80,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 30,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: token("accent"),
        }}
      >
        {eyebrow}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 68,
          fontWeight: 600,
          lineHeight: 1.1,
          maxWidth: 980,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", fontSize: 30, color: token("accent") }}>
        {footer}
      </div>
    </div>
  );
}
