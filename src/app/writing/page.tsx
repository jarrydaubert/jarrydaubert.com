import type { Metadata } from "next";
import { WritingCard } from "@/components/writing-card";
import { plannedEssays } from "@/content/writing";

export const metadata: Metadata = {
  title: "Writing",
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
          A small index for essays on software quality, product building, and
          AI-assisted delivery.
        </p>
      </header>

      {plannedEssays.map((essay) => (
        <WritingCard
          key={essay.title}
          title={essay.title}
          teaser={essay.teaser}
        />
      ))}
    </section>
  );
}
