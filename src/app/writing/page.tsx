import type { Metadata } from "next";
import { WritingCard } from "@/components/writing-card";
import { plannedEssays } from "@/content/writing";

const siteDescription =
  "Notes from Jarryd Aubert on software quality, AI-assisted delivery, product building, and shipping discipline.";

export const metadata: Metadata = {
  title: "Writing",
  description: siteDescription,
  alternates: {
    canonical: "/writing",
  },
};

export default function WritingPage() {
  return (
    <section className="max-w-3xl space-y-10" aria-labelledby="writing-title">
      <header className="space-y-4">
        <h1
          id="writing-title"
          className="text-3xl font-semibold text-stone-950 dark:text-stone-50 sm:text-4xl"
        >
          Writing
        </h1>
        <p className="text-base leading-7 text-stone-600 dark:text-stone-300">
          Notes on software quality, AI-assisted delivery, product building, and
          shipping discipline.
        </p>
      </header>

      {plannedEssays.map((essay) => (
        <WritingCard
          key={essay.title}
          href={essay.href}
          publishedAt={essay.publishedAt}
          title={essay.title}
          summary={essay.summary}
          status={essay.status}
        />
      ))}
    </section>
  );
}
