export type Project = {
  name: string;
  summary: string;
  theme: string;
  status: string;
  caseStudyStatus: string;
};

export const projects: Project[] = [
  {
    name: "ProsePal",
    summary: "AI-assisted greeting-card writing app.",
    theme: "Product building, AI-assisted writing, tone/occasion fit.",
    status: "In progress.",
    caseStudyStatus: "Coming soon.",
  },
  {
    name: "PayeTax",
    summary: "UK PAYE/tax calculator product.",
    theme:
      "Practical finance tooling, correctness, edge cases, release evidence.",
    status: "In progress.",
    caseStudyStatus: "Coming soon.",
  },
  {
    name: "Evolution Padel",
    summary: "Fast, SEO-focused client website.",
    theme:
      "Static site delivery, analytics, SEO, performance, client handover.",
    status: "Live/client project.",
    caseStudyStatus: "Coming soon.",
  },
  {
    name: "AI operator experiments",
    summary:
      "Experiments with Codex, Hermes/R2, local models, and evidence-led AI workflows.",
    theme:
      "AI-assisted development, operator workflows, verification, release discipline.",
    status: "Ongoing experiments.",
    caseStudyStatus: "Notes coming soon.",
  },
];

export const selectedWork = projects.slice(0, 3);
