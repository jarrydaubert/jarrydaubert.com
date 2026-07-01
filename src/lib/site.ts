export const site = {
  name: "Jarryd Aubert",
  shortName: "Jarryd",
  url: "https://jarrydaubert.com",
  email: "me@jarrydaubert.com",
  description:
    "Personal site of Jarryd Aubert, a software tester who builds and ships his own apps to understand what he tests.",
  homeDescription:
    "Jarryd Aubert is a software tester who builds and ships his own apps to understand what he tests.",
  jobTitle: "Software Tester",
  locale: "en_GB",
  socials: {
    github: "https://github.com/jarrydaubert",
    linkedin: "https://www.linkedin.com/in/jarrydaubert/",
  },
  nav: [
    { href: "/#projects", label: "Projects" },
    { href: "/#the-why", label: "The Why" },
  ],
} as const;

export const knowsAbout = [
  "software testing",
  "QA",
  "test planning",
  "test automation",
  "accessibility checks",
  "shipping small apps",
  "AI-assisted development review",
  "deterministic testing",
  "non-deterministic product evaluation",
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
