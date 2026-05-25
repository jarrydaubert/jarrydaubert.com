export const site = {
  name: "Jarryd Aubert",
  shortName: "Jarryd",
  url: "https://jarrydaubert.com",
  email: "me@jarrydaubert.com",
  description:
    "Personal site of Jarryd Aubert \u2014 QA-minded product builder focused on useful software, AI-assisted workflows, and quality.",
  homeDescription:
    "Jarryd Aubert is a QA-minded product builder focused on useful software, AI-assisted workflows, and quality.",
  jobTitle: "Senior QA Specialist / Product Builder",
  locale: "en_GB",
  ogImage: {
    url: "/og-image.svg",
    width: 1200,
    height: 630,
    alt: "Jarryd Aubert",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/jarrydaubert/",
  },
  nav: [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/writing", label: "Writing" },
  ],
} as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: site.email,
  jobTitle: site.jobTitle,
  sameAs: [site.socials.linkedin],
} as const;
