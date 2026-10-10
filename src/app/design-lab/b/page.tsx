import type { CSSProperties } from "react";
import { labMetadata } from "../_lib/metadata";
import { labProjects } from "../_lib/projects";
import { Swatch } from "./_components/swatch";
import styles from "./b.module.css";

export const metadata = labMetadata(
  "Concept B: Swatch book",
  "Design lab concept B for jarrydaubert.com.",
);

export default function ConceptBHome() {
  return (
    <div className={styles.home}>
      <section className={styles.intro} aria-labelledby="b-intro">
        <h1 id="b-intro" className={styles.introTitle}>
          A small swatch book of things I&apos;ve built with AI coding agents.
        </h1>
        <p className={styles.introPick}>Pick a colour.</p>
        <p className={styles.introNote}>
          Each one is the project&apos;s own colour, lifted from its code.
        </p>
      </section>

      <section className={styles.fanWrap} aria-label="Projects">
        <ul className={styles.fan}>
          {labProjects.map((project, index) => (
            <li
              key={project.slug}
              className={styles.fanItem}
              style={{ "--i": index } as CSSProperties}
            >
              <Swatch project={project} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
