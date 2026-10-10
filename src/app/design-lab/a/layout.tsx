import { Instrument_Sans } from "next/font/google";
import NextLink from "next/link";
import { site } from "@/lib/site";
import { Mark } from "./_components/marks";
import styles from "./a.module.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
  variable: "--a-font",
});

export default function ConceptALayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${sans.variable} ${styles.page}`}>
      <header className={styles.header}>
        <NextLink href="/design-lab/a" className={styles.name}>
          Jarryd Aubert
        </NextLink>
        <nav aria-label="Concept A">
          <ul className={styles.nav}>
            <li>
              <NextLink href="/design-lab/a#work">Work</NextLink>
            </li>
            <li>
              <NextLink href="/design-lab/a/about">About</NextLink>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>Email</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content" className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerLine}>
          Built with AI coding agents. Checked by me.
          <Mark kind="tick" className={styles.footerTick} />
        </p>
        <ul className={styles.footerLinks}>
          <li>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
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
          <li>
            <NextLink href="/design-lab">Design lab</NextLink>
          </li>
        </ul>
      </footer>
    </div>
  );
}
