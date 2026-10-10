import { Bricolage_Grotesque } from "next/font/google";
import NextLink from "next/link";
import { site } from "@/lib/site";
import styles from "./b.module.css";
import "./view-transition.css";
import { CopyEmail } from "./_components/copy-email";

const grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "wdth"],
  variable: "--b-font",
});

export default function ConceptBLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${grotesque.variable} ${styles.page}`}>
      <header className={styles.header}>
        <NextLink href="/design-lab/b" className={styles.name}>
          Jarryd Aubert
        </NextLink>
        <nav aria-label="Concept B" className={styles.nav}>
          <NextLink href="/design-lab/b/about">About</NextLink>
          <CopyEmail email={site.email} className={styles.hello} />
        </nav>
      </header>

      <main id="main-content" className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>Four colours so far. Built with AI coding agents, checked by me.</p>
        <ul>
          <li>
            <a href={`mailto:${site.email}`}>Email</a>
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
