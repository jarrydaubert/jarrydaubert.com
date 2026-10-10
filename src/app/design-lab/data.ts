import type { Metadata } from "next";

export const projects = [
  {
    slug: "payetax",
    name: "PayeTax",
    number: "01",
    kind: "Web application",
    tagline: "A little clarity on take-home pay.",
    status: "Live website",
    description:
      "A UK tax calculator for the numbers that land in your bank account. Built with AI assistance, with plenty of attention to the awkward details.",
    note: "The interesting challenge is making a complicated calculation feel straightforward. The AI is in the way I build it; the calculator itself works with rules, not a language model.",
    url: "https://payetax.co.uk/",
    repo: "https://github.com/jarrydaubert/payetax",
    image: "/design-lab/payetax.jpg",
    alt: "The live PayeTax website showing its UK take-home pay calculator introduction.",
    caption: "A capture of the live website.",
  },
  {
    slug: "prosepal",
    name: "ProsePal",
    number: "02",
    kind: "iPhone application",
    tagline: "For the words that don't come easily.",
    status: "Native app in development",
    description:
      "An iPhone app for writing personal messages. An exploration of native development and the space between on-device and cloud AI.",
    note: "The native SwiftUI app is a work in progress. It explores drafting on the phone and using an online model for other requests. The older App Store app is a separate Flutter version, not this native build.",
    url: "https://www.prosepal.app/",
    repo: "https://github.com/jarrydaubert/prosepal",
    image: null,
    alt: "",
    caption: "Typographic illustration, not an app screenshot.",
  },
  {
    slug: "evolution-padel",
    name: "Evolution Padel",
    number: "03",
    kind: "Venue website",
    tagline: "A first home for a new place to play.",
    status: "Live website / pre-launch venue",
    description:
      "A website for a padel venue getting ready to open. Early digital work that gives people a place to explore the plans and follow what's next.",
    note: "The website is live. The venue is still pre-launch, and court booking is not open. Keeping that distinction clear is part of the work.",
    url: "https://www.evolutionpadel.uk/",
    repo: null,
    image: "/design-lab/evolution-padel.jpg",
    alt: "The live Evolution Padel website announcing its forthcoming Renfrew venue.",
    caption: "A capture of the live pre-launch venue website.",
  },
  {
    slug: "this-website",
    name: "This website",
    number: "04",
    kind: "An ongoing experiment",
    tagline: "A small corner of the internet, made mine.",
    status: "Live website / experimental redesign",
    description:
      "Somewhere to collect the things I'm building. And another opportunity to see what working with AI coding agents can make possible.",
    note: "Built with Next.js and TypeScript, with formatting, linting, type checks, tests and a production build in the repo checks. These two designs are experiments; the existing site remains live.",
    url: "https://jarrydaubert.com/",
    repo: "https://github.com/jarrydaubert/jarrydaubert.com",
    image: null,
    alt: "",
    caption: "An ongoing experiment in AI-assisted building.",
  },
] as const;

export type LabProject = (typeof projects)[number];
export const collaboration =
  "AI coding agents propose approaches and write code. I direct the work, evaluate proposals, review changes and own the final decisions, including how the work is checked.";
export function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
export function labMetadata(title: string, path: string): Metadata {
  const description =
    "Jarryd Aubert explores AI by building real things. An experimental collection of web apps, an iPhone app and work in progress.";
  return {
    title: { absolute: `${title} | Jarryd Aubert` },
    description,
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images: [] },
    twitter: { title, description, images: [] },
  };
}
