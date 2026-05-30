import { describe, expect, it } from "vitest";
import { tokens } from "./tokens";

const EXPECTED = [
  "bg",
  "surface",
  "surface-elevated",
  "fg",
  "muted",
  "subtle",
  "border",
  "border-hover",
  "ring",
  "accent",
  "accent-soft",
];

function channel(c: number): number {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

function luminance(hex: string): number {
  const n = hex.replace("#", "");
  const r = Number.parseInt(n.slice(0, 2), 16);
  const g = Number.parseInt(n.slice(2, 4), 16);
  const b = Number.parseInt(n.slice(4, 6), 16);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrast(fg: string, bg: string): number {
  const a = luminance(fg);
  const b = luminance(bg);
  const [hi, lo] = a > b ? [a, b] : [b, a];
  return (hi + 0.05) / (lo + 0.05);
}

// Text colors rendered at normal (sub-18px) sizes on each surface they appear on
// must clear WCAG AA (4.5). These are the pairings the design actually uses.
const PAIRS: Array<[string, string]> = [
  ["fg", "bg"],
  ["fg", "surface"],
  ["fg", "surface-elevated"],
  ["muted", "bg"],
  ["muted", "surface"],
  ["muted", "surface-elevated"],
  ["subtle", "bg"],
  ["subtle", "surface"],
  ["subtle", "surface-elevated"],
  ["accent", "bg"],
  ["accent", "surface"],
  ["accent", "surface-elevated"],
  // The highlighted essay box uses accent-soft as a text background.
  ["fg", "accent-soft"],
  ["muted", "accent-soft"],
  ["subtle", "accent-soft"],
];

describe("design tokens", () => {
  it("parses every expected token from globals.css @theme", () => {
    for (const name of EXPECTED) {
      expect(tokens[name], `--color-${name}`).toMatch(/^#[0-9a-f]{6}$/);
    }
  });

  it("defines no unexpected tokens (catches typos)", () => {
    expect(Object.keys(tokens).sort()).toEqual([...EXPECTED].sort());
  });

  it.each(PAIRS)("text %s on %s clears WCAG AA (4.5)", (fg, bg) => {
    const ratio = contrast(tokens[fg], tokens[bg]);
    expect(
      ratio,
      `${fg} on ${bg} = ${ratio.toFixed(2)}`,
    ).toBeGreaterThanOrEqual(4.5);
  });
});
