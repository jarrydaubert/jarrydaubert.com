import { site } from "@/lib/site";
import { labMetadata } from "../../_lib/metadata";
import { Mark } from "../_components/marks";
import styles from "../a.module.css";

export const metadata = labMetadata(
  "About, concept A",
  "About Jarryd Aubert, design lab concept A.",
);

export default function ConceptAAbout() {
  return (
    <article className={styles.about} aria-labelledby="a-about-title">
      <div className={styles.portrait}>
        <span>Photo of Jarryd</span>
        <span className={styles.portraitHint}>
          Placeholder. Add a real one.
        </span>
      </div>

      <div className={styles.aboutText}>
        <h1 id="a-about-title" className={styles.aboutTitle}>
          About
        </h1>
        <p className={styles.aboutLead}>
          I&apos;m Jarryd. I like making things and seeing how far I can get
          with AI coding agents.
        </p>
        <p>
          My day job is software testing, and my CV and LinkedIn cover that.
          This site is for the side projects: a tax calculator, an iPhone app, a
          website for a padel venue and the site itself.
        </p>
        <p>
          The way I work is simple. The agents suggest approaches and write a
          lot of the code. I decide what to build, read what they produce, push
          it until it&apos;s right, and own the result. Testing is the habit I
          bring with me, so nothing ships just because it looks finished.
        </p>
        <p className={styles.aboutContact}>
          The easiest way to reach me is{" "}
          <a href={`mailto:${site.email}`} className={styles.aboutEmail}>
            {site.email}
            <Mark kind="underline" className={styles.aboutUnderline} />
          </a>
          .
        </p>
        <ul className={styles.aboutLinks}>
          <li>
            <a href={site.socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
