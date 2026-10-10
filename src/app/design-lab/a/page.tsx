import NextLink from "next/link";
import { labMetadata } from "../_lib/metadata";
import { labProjects, prosePalIcon } from "../_lib/projects";
import { HeroLinks } from "./_components/hero-links";
import { Mark } from "./_components/marks";
import { Sheet } from "./_components/sheet";
import styles from "./a.module.css";

export const metadata = labMetadata(
  "Concept A: Marked up",
  "Design lab concept A for jarrydaubert.com.",
);

const HERO_ITEMS = [
  { slug: "payetax", words: "a tax calculator" },
  { slug: "prosepal", words: "an iPhone app" },
  { slug: "evolution-padel", words: "a website for a padel venue" },
  { slug: "this-site", words: "this site" },
].map((item) => {
  const project = labProjects.find((p) => p.slug === item.slug);
  const preview =
    item.slug === "prosepal"
      ? prosePalIcon
      : (project?.extra ?? project?.desktop ?? prosePalIcon);
  return { ...item, preview, square: item.slug === "prosepal" };
});

export default function ConceptAHome() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="a-hero">
        <h1 id="a-hero" className={styles.heroTitle}>
          I make things with AI coding agents, then check they actually{" "}
          <span className={styles.heroLast}>
            work.
            <Mark kind="tick" eager delay={650} className={styles.heroTick} />
          </span>
        </h1>
        <HeroLinks items={HERO_ITEMS} />
      </section>

      <section id="work" className={styles.work} aria-label="Work">
        {labProjects.map((project, index) => (
          <Sheet key={project.slug} project={project} flip={index % 2 === 1} />
        ))}
      </section>

      <section className={styles.aboutTeaser} aria-labelledby="a-about">
        <h2 id="a-about" className={styles.aboutTeaserTitle}>
          Hello, I&apos;m Jarryd.
        </h2>
        <p className={styles.aboutTeaserBody}>
          I work in software testing; that part lives on my CV. This is where
          the things I make go. The agents write a lot of the code. I decide
          what gets built and whether it&apos;s good enough.
        </p>
        <p className={styles.sheetLinks}>
          <NextLink href="/design-lab/a/about">A little more about me</NextLink>
        </p>
      </section>
    </>
  );
}
