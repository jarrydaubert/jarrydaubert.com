"use client";

import { type CSSProperties, type ReactNode, useState } from "react";
import styles from "../b.module.css";

type Option = { name: string; bg: string; fg: string };

// The About page has no colour of its own yet, so visitors can borrow one.
export function OwnColour({
  options,
  children,
}: {
  options: Option[];
  children: ReactNode;
}) {
  const [picked, setPicked] = useState<Option | null>(null);

  return (
    <article
      className={styles.about}
      style={
        (picked
          ? { "--about-bg": picked.bg, "--about-ink": picked.fg }
          : {}) as CSSProperties
      }
    >
      <div className={styles.aboutGrid}>{children}</div>
      <fieldset className={styles.borrow}>
        <legend className={styles.borrowLabel}>
          {picked
            ? `Borrowing ${picked.name}'s colour.`
            : "No colour of my own yet. Borrow one:"}
        </legend>
        <div className={styles.borrowChips}>
          {options.map((option) => (
            <button
              key={option.name}
              type="button"
              aria-pressed={picked?.name === option.name}
              aria-label={`Use ${option.name}'s colour`}
              className={styles.borrowChip}
              style={{ "--chip": option.bg } as CSSProperties}
              onClick={() =>
                setPicked(picked?.name === option.name ? null : option)
              }
            />
          ))}
        </div>
      </fieldset>
    </article>
  );
}
