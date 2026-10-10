import Image from "next/image";
import NextLink from "next/link";
import { labMetadata } from "./_lib/metadata";
import styles from "./lab.module.css";

export const metadata = labMetadata(
  "Design lab",
  "Two experimental redesigns of jarrydaubert.com. Not indexed.",
);

const CONCEPTS = [
  {
    href: "/design-lab/a",
    letter: "A",
    name: "Marked up",
    line: "Drafting paper and a reviewer's blue pencil. The agents write, I mark up and tick off. In dark mode it becomes a blueprint.",
    image: "/design-lab/concept-a.webp",
    alt: "Concept A: a large headline on pale grid paper with a hand-drawn tick, above a PayeTax screenshot annotated in blue pencil.",
  },
  {
    href: "/design-lab/b",
    letter: "B",
    name: "Swatch book",
    line: "Each project is a paint chip in its own real colour. Fan through them, pick one, and it grows into the page.",
    image: "/design-lab/concept-b.webp",
    alt: "Concept B: a bold headline beside a fanned stack of four coloured project swatches.",
  },
];

export default function DesignLab() {
  return (
    <main id="main-content" className={styles.lab}>
      <header className={styles.head}>
        <p className={styles.kicker}>
          <NextLink href="/">jarrydaubert.com</NextLink>
        </p>
        <h1 className={styles.title}>Design lab</h1>
        <p className={styles.intro}>
          Two ideas for what this site could become. Both are fully working, use
          real projects and real screenshots, and neither is live.
        </p>
      </header>

      <ul className={styles.cards}>
        {CONCEPTS.map((concept) => (
          <li key={concept.href}>
            <NextLink href={concept.href} className={styles.card}>
              <span className={styles.frame}>
                <Image
                  src={concept.image}
                  alt={concept.alt}
                  width={1600}
                  height={1000}
                  sizes="(min-width: 900px) 46vw, 92vw"
                  priority
                />
              </span>
              <span className={styles.meta}>
                <span className={styles.letter} aria-hidden="true">
                  {concept.letter}
                </span>
                <span>
                  <span className={styles.name}>
                    Concept {concept.letter}: {concept.name}
                  </span>
                  <span className={styles.line}>{concept.line}</span>
                </span>
              </span>
            </NextLink>
          </li>
        ))}
      </ul>

      <p className={styles.foot}>
        Experiments only: not in the sitemap, not linked from the site, and
        marked noindex. The public pages are unchanged.
      </p>
    </main>
  );
}
