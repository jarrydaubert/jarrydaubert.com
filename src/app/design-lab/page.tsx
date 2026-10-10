import Image from "next/image";
import Link from "next/link";
import { labMetadata } from "./data";
import styles from "./lab.module.css";
import { Arrow } from "./shared";

export const metadata = labMetadata(
  "Two ways to make a little space",
  "/design-lab",
);
export default function DesignLab() {
  return (
    <main id="main-content" className={styles.gallery}>
      <header>
        <Link href="/">Jarryd Aubert</Link>
        <span>Design lab / Codex</span>
      </header>
      <section className={styles.galleryIntro}>
        <h1>
          Same curiosity.
          <br />
          <em>Two different corners.</em>
        </h1>
        <p>
          Two ways to make a home for the things I build.
          <br />
          Have a look around. See which feels like me.
        </p>
      </section>
      <div className={styles.galleryGrid}>
        <Link href="/design-lab/a" className={styles.galleryCard}>
          <div className={styles.galleryPreview}>
            <Image
              src="/design-lab/concept-a.jpg"
              alt="Open book: an editorial page with expressive serif typography and large project imagery."
              width={1440}
              height={1000}
              priority
            />
          </div>
          <div className={styles.galleryCaption}>
            <span>A / Open book</span>
            <Arrow />
          </div>
          <p>An airy, image-led collection. Room to wander.</p>
        </Link>
        <Link href="/design-lab/b" className={styles.galleryCard}>
          <div className={styles.galleryPreview}>
            <Image
              src="/design-lab/concept-b.jpg"
              alt="The project room: a persistent project index alongside a focused viewing pane."
              width={1440}
              height={1000}
              priority
            />
          </div>
          <div className={styles.galleryCaption}>
            <span>B / The project room</span>
            <Arrow />
          </div>
          <p>A quieter viewing room. One thing at a time.</p>
        </Link>
      </div>
      <footer className={styles.galleryFooter}>
        <span>Experimental designs. The live site is unchanged.</span>
        <Link href="/">
          Back to the current site
          <Arrow />
        </Link>
      </footer>
    </main>
  );
}
