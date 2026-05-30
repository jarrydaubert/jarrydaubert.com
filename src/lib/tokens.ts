import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Parses the @theme block in globals.css so JS (manifest, viewport themeColor,
 * OG images) reads the SAME color values the CSS uses — never an independent
 * literal. globals.css is the single source of truth; this module is the reader.
 * Uses node:fs, so it is inherently server/build-time only.
 */
const GLOBALS_CSS = join(process.cwd(), "src/app/globals.css");

function parseThemeColors(css: string): Record<string, string> {
  const block = css.match(/@theme\s*\{([\s\S]*?)\}/);
  if (!block) {
    throw new Error("tokens: @theme block not found in globals.css");
  }
  const colors: Record<string, string> = {};
  const re = /--color-([a-z0-9-]+)\s*:\s*(#[0-9a-fA-F]{3,8})\s*;/g;
  for (const match of block[1].matchAll(re)) {
    colors[match[1]] = match[2].toLowerCase();
  }
  return colors;
}

export const tokens = parseThemeColors(readFileSync(GLOBALS_CSS, "utf8"));

export function token(name: string): string {
  const value = tokens[name];
  if (!value) {
    throw new Error(`tokens: missing --color-${name} in globals.css @theme`);
  }
  return value;
}
