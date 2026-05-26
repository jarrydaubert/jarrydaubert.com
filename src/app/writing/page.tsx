import type { Metadata } from "next";
import { WritingCard } from "@/components/writing-card";
import { writing } from "@/content/writing";
import { buildMetadata } from "@/lib/metadata";

const siteDescription =
  "Notes from Jarryd Aubert on software quality, AI-assisted delivery, product building, and shipping discipline.";

export const metadata: Metadata = buildMetadata({
  title: "Writing",
  description: siteDescription,
  path: "/writing",
});

export default function WritingPage() {
  return (
    <section className="max-w-4xl space-y-10" aria-labelledby="writing-title">
      <header className="max-w-3xl space-y-4">
        <h1
          id="writing-title"
          className="text-3xl font-semibold text-[var(--color-fg)] sm:text-4xl"
        >
          Writing
        </h1>
        <p className="text-base leading-7 text-[var(--color-muted)]">
          A small index of working notes on software quality, AI-assisted
          delivery, product building, and shipping discipline.
        </p>
      </header>

      <div className="border-t border-[var(--color-border)] pt-6">
        {writing.map((essay) => (
          <WritingCard
            key={essay.title}
            href={essay.href}
            publishedAt={essay.publishedAt}
            title={essay.title}
            summary={essay.summary}
            status={essay.status}
          />
        ))}
      </div>
    </section>
  );
}
