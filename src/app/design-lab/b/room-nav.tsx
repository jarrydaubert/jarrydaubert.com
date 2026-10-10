"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "../data";
import styles from "../lab.module.css";
import { Arrow } from "../shared";

export function RoomNav() {
  const pathname = usePathname();
  const selected =
    pathname === "/design-lab/b" ? "payetax" : pathname.split("/").pop();
  return (
    <>
      <nav aria-label="Project index" className={styles.roomNav}>
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/design-lab/b/${project.slug}`}
            scroll={false}
            aria-current={selected === project.slug ? "page" : undefined}
          >
            <span>{project.number}</span>
            <span>{project.name}</span>
            <Arrow />
          </Link>
        ))}
      </nav>
      <Link
        href="/design-lab/b/about"
        scroll={false}
        className={styles.roomAboutLink}
        aria-current={selected === "about" ? "page" : undefined}
      >
        A little about me
        <Arrow />
      </Link>
    </>
  );
}
