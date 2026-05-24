export type Project = {
  name: string;
  summary: string;
  status: string;
};

export const projects: Project[] = [
  {
    name: "ProsePal",
    summary:
      "An AI-assisted writing product for turning intent into better greeting-card messages.",
    status: "Status placeholder",
  },
  {
    name: "PayeTax",
    summary:
      "A UK PAYE and tax calculator product shaped around clarity, usefulness, and trust.",
    status: "Status placeholder",
  },
  {
    name: "Evolution Padel",
    summary:
      "A fast, SEO-focused client website for a padel business with a practical launch path.",
    status: "Status placeholder",
  },
  {
    name: "AI operator experiments",
    summary:
      "Small experiments in AI-assisted software delivery, quality checks, and operator workflows.",
    status: "Status placeholder",
  },
];

export const selectedWork = [
  {
    name: "ProsePal",
    summary: "AI-assisted greeting-card writing app.",
  },
  {
    name: "PayeTax",
    summary: "UK PAYE/tax calculator product.",
  },
  {
    name: "Evolution Padel",
    summary: "Fast, SEO-focused client website.",
  },
];
