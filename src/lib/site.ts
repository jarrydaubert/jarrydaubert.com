export const site = {
  name: "Jarryd Aubert",
  shortName: "Jarryd",
  url: "https://jarrydaubert.com",
  email: "me@jarrydaubert.com",
  description:
    "Personal site of Jarryd Aubert, a software tester who builds and ships his own apps to understand what he tests.",
  homeDescription:
    "Jarryd Aubert builds and ships his own apps and sites to understand what he tests.",
  jobTitle: "Software Tester",
  locale: "en_GB",
  socials: {
    github: "https://github.com/jarrydaubert/jarrydaubert.com",
    linkedin: "https://www.linkedin.com/in/jarrydaubert/",
  },
  nav: [
    { href: "/#projects", label: "Projects" },
    { href: "/#the-why", label: "The Why" },
  ],
} as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: site.email,
  jobTitle: site.jobTitle,
  sameAs: [site.socials.github, site.socials.linkedin],
} as const;

type ArticleInput = {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  href: string;
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
    author: { "@type": "Person", name: site.name, url: site.url },
  };
}
