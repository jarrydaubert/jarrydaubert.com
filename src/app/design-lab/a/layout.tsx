import Link from "next/link";
import { site } from "@/lib/site";
import styles from "../lab.module.css";
import { LabFooter } from "../shared";

export default function EditorialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.editorial}>
      <header className={styles.editorialHeader}>
        <Link href="/design-lab/a" className={styles.wordmark}>
          Jarryd Aubert<span>.</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/design-lab/a#work">Work</Link>
          <Link href="/design-lab/a#about">About</Link>
          <a href={`mailto:${site.email}`}>Say hello</a>
        </nav>
      </header>
      {children}
      <LabFooter concept="Open book" />
    </div>
  );
}
