"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../a.module.css";
import { Mark } from "./marks";

type Item = {
  slug: string;
  words: string;
  preview: { src: string; alt: string; width: number; height: number };
  square?: boolean;
};

// The sentence under the headline. Each project name links to its sheet below;
// on a mouse, a pencil circle is drawn round it and a preview follows the cursor.
export function HeroLinks({ items }: { items: Item[] }) {
  // `active` follows the pointer (drives the floating preview); `circled`
  // also follows keyboard focus, so the pencil mark works without a mouse.
  const [active, setActive] = useState<string | null>(null);
  const [circled, setCircled] = useState<string | null>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFinePointer(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!active || !finePointer) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const tick = () => {
      const ease = reduced ? 1 : 0.18;
      current.current.x += (target.current.x - current.current.x) * ease;
      current.current.y += (target.current.y - current.current.y) * ease;
      const dx = target.current.x - current.current.x;
      const tilt = reduced ? 0 : Math.max(-8, Math.min(8, dx * 0.08));
      if (floatRef.current) {
        floatRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) rotate(${tilt}deg)`;
      }
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [active, finePointer]);

  const onMove = (event: React.PointerEvent) => {
    target.current = { x: event.clientX + 24, y: event.clientY - 90 };
  };

  const onEnter = (slug: string) => (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    const point = { x: event.clientX + 24, y: event.clientY - 90 };
    if (!active) current.current = point;
    target.current = point;
    setActive(slug);
    setCircled(slug);
  };

  const activeItem = items.find((item) => item.slug === active);
  const last = items.length - 1;

  return (
    <>
      <p className={styles.heroLede}>
        Lately that&apos;s{" "}
        {items.map((item, index) => (
          <span key={item.slug}>
            <a
              href={`#${item.slug}`}
              className={styles.heroLink}
              onPointerEnter={onEnter(item.slug)}
              onPointerMove={onMove}
              onPointerLeave={() => {
                setActive(null);
                setCircled(null);
              }}
              onFocus={() => setCircled(item.slug)}
              onBlur={() => setCircled(null)}
            >
              {item.words}
              <Mark
                kind="circle"
                drawn={circled === item.slug}
                className={styles.heroCircle}
              />
            </a>
            {index < last - 1 ? ", " : index === last - 1 ? " and " : "."}
          </span>
        ))}
      </p>
      {finePointer ? (
        <div
          ref={floatRef}
          className={`${styles.float} ${activeItem ? styles.floatOn : ""}`}
          aria-hidden="true"
        >
          {items.map((item) => (
            <Image
              key={item.slug}
              src={item.preview.src}
              alt=""
              width={item.preview.width}
              height={item.preview.height}
              sizes="22rem"
              className={`${styles.floatImage} ${item.square ? styles.floatSquare : ""} ${active === item.slug ? styles.floatImageOn : ""}`}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
