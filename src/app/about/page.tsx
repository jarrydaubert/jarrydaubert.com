import { AboutSection } from "@/components/open-book";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "I'm Jarryd. I enjoy exploring AI by building real things, with a background in software testing and plenty left to learn.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutSection standalone />;
}
