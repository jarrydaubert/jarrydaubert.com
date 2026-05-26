export type Project = {
  name: string;
  slug: string;
  summary: string;
  theme: string;
  status: string;
  caseStudyStatus: string;
  previewImage?: {
    src: string;
    alt: string;
  };
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    name: "ProsePal",
    slug: "prosepal",
    summary: "AI-assisted greeting-card writing app.",
    theme: "Product building, AI-assisted writing, tone/occasion fit.",
    status: "In progress.",
    caseStudyStatus: "Coming soon.",
    liveUrl: "https://www.prosepal.app/",
    previewImage: {
      src: "https://www.prosepal.app/og-image-v5.jpg",
      alt: "ProsePal social preview.",
    },
  },
  {
    name: "PayeTax",
    slug: "payetax",
    summary: "UK PAYE/tax calculator product.",
    theme:
      "Practical finance tooling, correctness, edge cases, release evidence.",
    status: "In progress.",
    caseStudyStatus: "Coming soon.",
    liveUrl: "https://payetax.co.uk/",
    previewImage: {
      src: "https://payetax.co.uk/images/og-image.png",
      alt: "PayeTax social preview.",
    },
  },
  {
    name: "Evolution Padel",
    slug: "evolution-padel",
    summary: "Fast, SEO-focused client website.",
    theme:
      "Static site delivery, analytics, SEO, performance, client handover.",
    status: "Live/client project.",
    caseStudyStatus: "Coming soon.",
    liveUrl: "https://www.evolutionpadel.uk/",
    previewImage: {
      src: "https://www.evolutionpadel.uk/images/lobby-feature-wall.jpeg",
      alt: "Evolution Padel reception and feature wall render.",
    },
  },
  {
    name: "AI operator experiments",
    slug: "ai-operator-experiments",
    summary:
      "Experiments with Codex, Hermes/R2, local models, and evidence-led AI workflows.",
    theme:
      "AI-assisted development, operator workflows, verification, release discipline.",
    status: "Ongoing experiments.",
    caseStudyStatus: "Notes coming soon.",
  },
];

export const selectedWork = projects.slice(0, 3);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
