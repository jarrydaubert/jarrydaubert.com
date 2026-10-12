export const site = {
  name: "Jarryd Aubert",
  shortName: "Jarryd",
  updatedAt: "2026-10-11",
  url: "https://jarrydaubert.com",
  email: "me@jarrydaubert.com",
  description:
    "Jarryd Aubert explores AI by building real things: web apps, an iPhone app, and this website.",
  homeDescription:
    "A few things Jarryd Aubert is building with AI: PayeTax, the native ProsePal rebuild, and this website.",
  jobTitle: "Software Tester",
  locale: "en_GB",
  socials: {
    github: "https://github.com/jarrydaubert",
    linkedin: "https://www.linkedin.com/in/jarrydaubert/",
  },
  nav: [
    { href: "/projects", label: "Work" },
    { href: "/about", label: "About" },
  ],
} as const;

export const knowsAbout = [
  "AI-assisted development",
  "web apps",
  "iPhone apps",
  "software testing",
];

const personRef = {
  "@type": "Person",
  name: site.name,
  url: site.url,
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  description: site.homeDescription,
  email: site.email,
  jobTitle: site.jobTitle,
  knowsAbout,
  sameAs: [site.socials.github, site.socials.linkedin],
} as const;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: "en-GB",
  publisher: personRef,
} as const;

type ArticleInput = {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  href: string;
};

type ProjectInput = {
  name: string;
  summary: string;
  theme: string;
  href: string;
  liveUrl?: string;
};

export function articleJsonLd(essay: ArticleInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: essay.title,
    description: essay.description,
    datePublished: essay.publishedAt,
    dateModified: essay.updatedAt ?? essay.publishedAt,
    url: `${site.url}${essay.href}`,
    mainEntityOfPage: `${site.url}${essay.href}`,
    image: `${site.url}${essay.href}/opengraph-image`,
    inLanguage: "en-GB",
    author: personRef,
    publisher: personRef,
  };
}

export function projectJsonLd(project: ProjectInput) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: `${project.summary} ${project.theme}`,
    url: `${site.url}${project.href}`,
    ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
    inLanguage: "en-GB",
    author: personRef,
  };
}
