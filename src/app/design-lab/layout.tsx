import type { Metadata } from "next";
import { labRobots } from "./_lib/metadata";

export const metadata: Metadata = {
  title: { absolute: "Design lab", template: "%s | Design lab" },
  robots: labRobots,
  alternates: { canonical: null },
};

// No site chrome here: each concept brings its own header, footer and type.
export default function DesignLabLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
