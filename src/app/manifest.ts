import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jarryd Aubert",
    short_name: "Jarryd",
    description:
      "Personal site of Jarryd Aubert, QA-minded product builder focused on useful software and AI-assisted workflows.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#0c0a09",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
