import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Parses the @theme block in globals.css so JS (manifest, viewport themeColor,
 * OG images) reads the SAME color values the CSS uses, never an independent
 * literal. globals.css is the single source of truth; this module is the reader.
 * Uses node:fs, so it is inherently server/build-time only.
 */
const GLOBALS_CSS = join(process.cwd(), "src/app/globals.css");

function extractBlock(
  css: string,
  startPattern: RegExp,
  label: string,
): string {
  const start = css.search(startPattern);
  if (start === -1) {
    throw new Error(`tokens: ${label} block not found in globals.css`);
  }

  const open = css.indexOf("{", start);
  if (open === -1) {
    throw new Error(`tokens: ${label} block has no opening brace`);
  }

  let depth = 0;
  for (let i = open; i < css.length; i += 1) {
    const char = css[i];
    if (char === "{") {
      depth += 1;
    }
    if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        return css.slice(open + 1, i);
      }
    }
  }

  throw new Error(`tokens: ${label} block has no closing brace`);
}

function parseColorDeclarations(block: string): Record<string, string> {
  const colors: Record<string, string> = {};
  const re = /--color-([a-z0-9-]+)\s*:\s*(#[0-9a-fA-F]{3,8})\s*;/g;
  for (const match of block.matchAll(re)) {
    colors[match[1]] = match[2].toLowerCase();
  }
  return colors;
}

const css = readFileSync(GLOBALS_CSS, "utf8");
const darkMediaBlock = extractBlock(
  css,
  /@media\s*\(prefers-color-scheme:\s*dark\)/,
  "dark media",
);

export const colorTokens = {
  light: parseColorDeclarations(extractBlock(css, /@theme\s*/, "@theme")),
  dark: parseColorDeclarations(
    extractBlock(darkMediaBlock, /:root\s*/, "dark :root"),
  ),
};

export const tokens = colorTokens.light;

export function token(name: string): string {
  const value = tokens[name];
  if (!value) {
    throw new Error(`tokens: missing --color-${name} in globals.css @theme`);
  }
  return value;
}
