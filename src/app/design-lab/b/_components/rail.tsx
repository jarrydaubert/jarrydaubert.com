"use client";

import { type ReactNode, useRef } from "react";
import styles from "../b.module.css";

// A horizontal strip of screenshots. Scrolls natively with touch, trackpad and
// keyboard (it is focusable); with a mouse it can also be dragged.
export function Rail({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);

  return (
    <section
      ref={ref}
      className={styles.rail}
      aria-label={label}
      // biome-ignore lint/a11y/noNoninteractiveTabindex: a scrollable region must be focusable so keyboard users can scroll it
      tabIndex={0}
      onPointerDown={(event) => {
        if (event.pointerType !== "mouse" || !ref.current) return;
        drag.current = {
          x: event.clientX,
          left: ref.current.scrollLeft,
          moved: false,
        };
        ref.current.setPointerCapture(event.pointerId);
        ref.current.dataset.dragging = "true";
      }}
      onPointerMove={(event) => {
        if (!drag.current || !ref.current) return;
        const dx = event.clientX - drag.current.x;
        if (Math.abs(dx) > 4) drag.current.moved = true;
        ref.current.scrollLeft = drag.current.left - dx;
      }}
      onPointerUp={(event) => {
        if (!ref.current) return;
        ref.current.releasePointerCapture(event.pointerId);
        delete ref.current.dataset.dragging;
        drag.current = null;
      }}
    >
      {children}
    </section>
  );
}
