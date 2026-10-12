import { JsonLd } from "@/components/json-ld";
import { Link } from "@/components/link";
import { AboutSection, Arrow, ProjectShowcase } from "@/components/open-book";
import styles from "@/components/open-book.module.css";
import { buildMetadata } from "@/lib/metadata";
import { personJsonLd, site, websiteJsonLd } from "@/lib/site";

export const metadata = buildMetadata({
  title: site.name,
  absoluteTitle: true,
  description: site.homeDescription,
});

export default function Home() {
  return (
    <div>
      <JsonLd data={personJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <section className={styles.intro} aria-labelledby="home-title">
        <h1 id="home-title">
          A few things
          <br />
          I&apos;ve been <em>building.</em>
        </h1>
        <div className={styles.introCopy}>
          <p>I&apos;m Jarryd. I explore AI by making things.</p>
          <p>A few of those experiments have become real apps and websites.</p>
          <Link href="#projects" variant="nav" className={styles.arrowLink}>
            Take a look <Arrow />
          </Link>
        </div>
      </section>
      <section id="projects" aria-labelledby="work-title">
        <div className={styles.sectionLine}>
          <h2 id="work-title">Selected work</h2>
          <span>A few ongoing curiosities.</span>
        </div>
        <ProjectShowcase />
      </section>
      <AboutSection />
    </div>
  );
}
