import type { Metadata } from "next";
import { EssayCard } from "@/components/essay-card";
import { allEssays } from "@/lib/content";
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
          className="text-3xl font-semibold text-fg sm:text-4xl"
        >
          Writing
        </h1>
        <p className="text-base leading-7 text-muted">
          A small index of working notes on software quality, AI-assisted
          delivery, product building, and shipping discipline.
        </p>
      </header>

      <div className="grid gap-4 border-t border-border pt-6">
        {allEssays.map((essay) => (
          <EssayCard key={essay.slug} essay={essay} />
        ))}
      </div>
    </section>
  );
}
