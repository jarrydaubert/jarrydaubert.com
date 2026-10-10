"use client";

import {
  type CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styles from "../a.module.css";

// Hand-drawn reviewer's marks. Strokes are non-scaling (so a stretched circle
// keeps an even pencil line), which means dash lengths are in screen pixels.
// We measure each path's on-screen length and draw it with one dashoffset
// transition from that length to zero.

const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function screenLength(svg: SVGSVGElement, path: SVGPathElement) {
  const box = svg.viewBox.baseVal;
  const rect = svg.getBoundingClientRect();
  if (!box.width || !box.height || !rect.width) return 0;
  const sx = rect.width / box.width;
  const sy = rect.height / box.height;
  const total = path.getTotalLength();
  const steps = 48;
  let length = 0;
  let prev = path.getPointAtLength(0);
  for (let i = 1; i <= steps; i++) {
    const point = path.getPointAtLength((total * i) / steps);
    length += Math.hypot((point.x - prev.x) * sx, (point.y - prev.y) * sy);
    prev = point;
  }
  return Math.ceil(length + 4);
}
const PATHS = {
  tick: {
    viewBox: "0 0 48 40",
    d: "M4 22 C 9 26, 13 31, 17 35 C 24 22, 33 11, 45 3",
  },
  circle: {
    viewBox: "0 0 200 80",
    d: "M 32 13 C 72 2, 160 4, 188 26 C 205 44, 170 72, 100 75 C 40 78, 6 62, 8 42 C 10 22, 50 9, 126 7",
  },
  underline: { viewBox: "0 0 200 12", d: "M2 8 C 50 3, 120 2, 198 6" },
  strike: { viewBox: "0 0 200 14", d: "M2 10 C 60 5, 140 11, 198 6" },
  arrowDown: {
    viewBox: "0 0 120 90",
    d: "M6 6 C 46 4, 92 22, 108 78 M 94 66 L 108 80 L 116 62",
  },
  arrowLeft: {
    viewBox: "0 0 120 60",
    d: "M114 10 C 80 4, 40 18, 10 44 M 10 26 L 8 46 L 28 48",
  },
  arrowRight: {
    viewBox: "0 0 120 60",
    d: "M6 10 C 40 4, 80 18, 110 44 M 110 26 L 112 46 L 92 48",
  },
} as const;

export type MarkKind = keyof typeof PATHS;

type MarkProps = {
  kind: MarkKind;
  className?: string;
  style?: CSSProperties;
  /** Draw immediately rather than when scrolled into view. */
  eager?: boolean;
  /** Controlled drawing, for marks that answer a hover or a toggle. */
  drawn?: boolean;
  delay?: number;
};

export function Mark({
  kind,
  className,
  style,
  eager = false,
  drawn,
  delay = 0,
}: MarkProps) {
  const ref = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [inView, setInView] = useState(false);
  const [length, setLength] = useState<number | null>(null);

  useIsoLayoutEffect(() => {
    const svg = ref.current;
    const path = pathRef.current;
    if (!svg || !path) return;
    const measure = () => setLength(screenLength(svg, path));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!eager) return;
    // Let the undrawn state paint first so the stroke visibly draws on load.
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setInView(true)),
    );
    return () => cancelAnimationFrame(id);
  }, [eager]);

  useEffect(() => {
    if (eager || drawn !== undefined) return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [eager, drawn]);

  const isDrawn = drawn ?? inView;
  const path = PATHS[kind];

  return (
    <svg
      ref={ref}
      viewBox={path.viewBox}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={`${styles.mark} ${isDrawn ? styles.markDrawn : ""} ${className ?? ""}`}
      style={
        {
          ...style,
          "--mark-delay": isDrawn ? `${delay}ms` : "0ms",
          "--mark-length": length ? `${length}px` : "2000px",
        } as CSSProperties
      }
    >
      <path ref={pathRef} d={path.d} />
    </svg>
  );
}
