// Shared, verified project facts for both design-lab concepts.
//
// Every status and stack line here was checked on 10 October 2026 against the
// project repos and the live products:
// - PayeTax: live at payetax.co.uk. Its repo runs Jest unit tests, axe
//   accessibility tests and Playwright end-to-end tests on Chromium, WebKit,
//   Mobile Chrome and Mobile Safari.
// - ProsePal: the native SwiftUI app (prosepal-ios, iOS 26, marketing version
//   0.1.0) is in development. The App Store still lists the earlier Flutter
//   app (version 1.1.2). Routing is from MessageWritingService: everyday
//   moments draft on-device first; careful moments go to the gateway (a
//   Supabase edge function) and can fall back to on-device.
// - Evolution Padel: the website is live; the venue is pre-launch and booking
//   is not live.
// - This site: Next.js and MDX, Bun, Biome, Vitest; CI runs repo checks and a
//   production build, plus CodeQL.

export type LabImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type LabProject = {
  slug: string;
  name: string;
  /** One line, conversational. */
  line: string;
  /** Short, honest release state. */
  status: string;
  /** Is the thing itself live? Drives the status dot. */
  live: boolean;
  what: string;
  built: string;
  checked: string;
  links: { label: string; href: string }[];
  /**
   * Project colour for concept B, taken from each product's own source:
   * PayeTax's --ledger-blue (oklch 0.33 0.095 255), the clay in ProsePal's
   * MomentVisualTokens.swift, Evolution Padel's --accent, and this site's
   * current --color-accent.
   */
  colour: { bg: string; fg: string; soft: string };
  desktop?: LabImage;
  mobile?: LabImage;
  extra?: LabImage;
};

const desktop = (src: string, alt: string): LabImage => ({
  src,
  alt,
  width: 2000,
  height: 1250,
});

const mobile = (src: string, alt: string): LabImage => ({
  src,
  alt,
  width: 780,
  height: 1688,
});

export const labProjects: LabProject[] = [
  {
    slug: "payetax",
    name: "PayeTax",
    line: "A UK take-home pay calculator that has to be right to the penny.",
    status: "Live",
    live: true,
    what: "Type in a salary and it works out income tax, National Insurance, student loans and pensions for every UK region. No account, nothing to install.",
    built:
      "I picked it because tax has a right or wrong answer, so you can tell when something is off. AI coding agents wrote most of the code. I decided what it should do, reviewed the changes and made the final calls.",
    checked:
      "Unit tests for the tax engine, accessibility checks, and end-to-end tests that drive the calculator in desktop and mobile browsers. My own payslip matches it to the penny.",
    links: [
      { label: "Open PayeTax", href: "https://payetax.co.uk/" },
      {
        label: "How I tested it",
        href: "/writing/proving-my-tax-calculator-correct",
      },
    ],
    colour: { bg: "#0b3565", fg: "#f6f1e7", soft: "#c9d6e8" },
    desktop: desktop(
      "/design-lab/payetax-calc.webp",
      "PayeTax showing a full breakdown for a 42,000 pound salary, from gross pay to net pay.",
    ),
    mobile: mobile(
      "/design-lab/payetax-mobile.webp",
      "The PayeTax home page on a phone.",
    ),
    extra: desktop(
      "/design-lab/payetax-home.webp",
      "The PayeTax home page on a desktop browser.",
    ),
  },
  {
    slug: "prosepal",
    name: "ProsePal",
    line: "An iPhone app for the messages that are hard to write.",
    status: "Native app in development",
    live: false,
    what: "You pick who it's for and what the moment is, and it drafts something you can edit and make your own. It never sends anything for you.",
    built:
      "I'm rebuilding it as a native SwiftUI app. Everyday notes are drafted on the phone with Apple's on-device model. Sympathy, apologies and other careful moments go to a cloud model through a Supabase edge function, and only if you've allowed online writing. AI coding agents write much of the code; I set the boundaries and review what lands.",
    checked:
      "An earlier Flutter version is still on the App Store. The native rewrite hasn't shipped yet, so there are no screenshots of it here.",
    links: [
      {
        label: "Earlier version on the App Store",
        href: "https://apps.apple.com/app/prosepal/id6757088726",
      },
    ],
    colour: { bg: "#9d5035", fg: "#fbf3ea", soft: "#fae6da" },
  },
  {
    slug: "evolution-padel",
    name: "Evolution Padel",
    line: "A website for a padel venue in Renfrew that hasn't opened yet.",
    status: "Live site, venue pre-launch",
    live: true,
    what: "The venue's first website: what padel is, what's coming, prices and a way to hear about launch. Booking isn't live, because the courts aren't either.",
    built:
      "Early digital work for a client venue. Built with AI coding agents, with me directing the work and reviewing what shipped.",
    checked:
      "The site says plainly that booking isn't open yet, and points people to launch updates instead.",
    links: [
      { label: "Visit the site", href: "https://www.evolutionpadel.uk/" },
    ],
    colour: { bg: "#7ed321", fg: "#11150a", soft: "#3b4a12" },
    desktop: desktop(
      "/design-lab/padel-home.webp",
      "The Evolution Padel home page: Padel is evolving, Renfrew is next.",
    ),
    mobile: mobile(
      "/design-lab/padel-mobile.webp",
      "The Evolution Padel home page on a phone.",
    ),
  },
  {
    slug: "this-site",
    name: "This website",
    line: "The place you're reading this. Also an experiment.",
    status: "Live",
    live: true,
    what: "A small Next.js site with its words in MDX files. The first commit was in May 2026.",
    built:
      "AI coding agents propose approaches and write the changes. I direct the work, review what they produce and make the final calls.",
    checked:
      "Formatting, linting, type checks, unit tests and a production build on every pull request, plus code scanning. The page you're on is a design experiment that isn't live.",
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/jarrydaubert/jarrydaubert.com",
      },
    ],
    colour: { bg: "#45616e", fg: "#f6f8f9", soft: "#d8e4e8" },
    desktop: desktop(
      "/design-lab/site-current.webp",
      "The current jarrydaubert.com home page.",
    ),
  },
];

/** A few real commit messages from this repo's history, newest first. */
export const realCommits = [
  {
    date: "2026-10-10",
    message: "fix: add About navigation and unlist empty experiment",
  },
  { date: "2026-07-01", message: "copy: recover precise testing claims" },
  {
    date: "2026-06-03",
    message: "feat: add essay on tax calculator consistency vs correctness",
  },
  {
    date: "2026-05-31",
    message: "polish: drop scare-quotes from ProsePal explores line",
  },
  { date: "2026-05-24", message: "Initial commit from Create Next App" },
];

export const prosePalIcon: LabImage = {
  src: "/design-lab/prosepal-icon.webp",
  alt: "The ProsePal app icon: a pink and peach feather on a dark background.",
  width: 512,
  height: 512,
};

export function getLabProject(slug: string) {
  return labProjects.find((project) => project.slug === slug);
}

export function nextLabProject(slug: string) {
  const index = labProjects.findIndex((project) => project.slug === slug);
  return labProjects[(index + 1) % labProjects.length];
}
