import { ProjectShowcase } from "@/components/open-book";
import styles from "@/components/open-book.module.css";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "A few things Jarryd Aubert is building with AI: PayeTax, the native ProsePal rebuild, and this website.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <section aria-labelledby="projects-title">
      <header className={styles.pageIntro}>
        <h1 id="projects-title">
          Things taking <em>shape.</em>
        </h1>
        <p>
          A calculator, an iPhone app, and this little corner of the internet.
        </p>
      </header>
      <ProjectShowcase headingLevel={2} />
    </section>
  );
}
