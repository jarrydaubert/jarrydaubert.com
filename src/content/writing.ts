export type WritingItem = {
  href: string;
  publishedAt: string;
  slug: string;
  title: string;
  summary: string;
  status: string;
};

export const plannedEssays: WritingItem[] = [
  {
    href: "/writing/ai-assisted-development-demos-vs-shipping",
    publishedAt: "2026-05-25",
    slug: "ai-assisted-development-demos-vs-shipping",
    title:
      "The gap between AI-assisted development demos and actually shipping with AI",
    summary:
      "AI demos reward speed. Shipping rewards judgment, verification, and restraint.",
    status: "Published.",
  },
];
