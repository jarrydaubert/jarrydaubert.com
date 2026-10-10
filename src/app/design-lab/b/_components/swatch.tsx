import Image from "next/image";
import type { CSSProperties } from "react";
import { type LabProject, prosePalIcon } from "../../_lib/projects";
import styles from "../b.module.css";
import { SwatchLink } from "./swatch-link";

export function swatchVars(project: LabProject): CSSProperties {
  return {
    "--swatch": project.colour.bg,
    "--swatch-ink": project.colour.fg,
    "--swatch-soft": project.colour.soft,
  } as CSSProperties;
}

/** One paint chip: the project's colour, a glimpse of it, and its label strip. */
export function Swatch({ project }: { project: LabProject }) {
  const image =
    project.slug === "prosepal"
      ? prosePalIcon
      : (project.extra ?? project.desktop);

  return (
    <SwatchLink
      href={`/design-lab/b/${project.slug}`}
      className={styles.swatch}
      morphName={`swatch-${project.slug}`}
      style={swatchVars(project)}
    >
      <span className={styles.chip} data-morph>
        {image ? (
          <Image
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            sizes="16rem"
            className={
              project.slug === "prosepal" ? styles.chipIcon : styles.chipShot
            }
          />
        ) : null}
        <span className={styles.chipName}>{project.name}</span>
      </span>
      <span className={styles.strip}>
        <span className={styles.stripLine}>{project.line}</span>
        <span className={styles.stripMeta}>
          <span>{project.status}</span>
          <span className={styles.hex}>{project.colour.bg.toUpperCase()}</span>
        </span>
      </span>
    </SwatchLink>
  );
}
