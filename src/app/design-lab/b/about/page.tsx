import { labMetadata } from "../../data";
import styles from "../../lab.module.css";
import { AboutCopy, ContactLinks } from "../../shared";

export const metadata = labMetadata("A little about me", "/design-lab/b/about");
export default function RoomAbout() {
  return (
    <section className={styles.roomAbout}>
      <span className={styles.smallLabel}>A little about me</span>
      <h2>
        Ideas are good.
        <br />
        <span>
          Making them
          <br />
          is more fun.
        </span>
      </h2>
      <div className={styles.aboutBody}>
        <AboutCopy />
        <ContactLinks />
      </div>
      <p className={styles.aboutPostscript}>
        This is where I keep the things that make it out of my head and into a
        browser. Or a phone.
      </p>
    </section>
  );
}
