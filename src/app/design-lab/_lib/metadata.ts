import type { Metadata } from "next";

// Every design-lab page is an unlisted experiment: never indexed, never
// followed, no canonical, and absent from the sitemap and public navigation.
export const labRobots: Metadata["robots"] = {
  index: false,
  follow: false,
  nocache: true,
  googleBot: { index: false, follow: false },
};

export function labMetadata(title: string, description: string): Metadata {
  return {
    title: {
      absolute: title === "Design lab" ? title : `${title} | Design lab`,
    },
    description,
    robots: labRobots,
    alternates: { canonical: null },
    openGraph: null,
    twitter: null,
  };
}
