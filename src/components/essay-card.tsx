import { Card } from "@/components/card";
import type { Essay } from "@/lib/content";

export function EssayCard({ essay }: { essay: Essay }) {
  return (
    <Card href={essay.href}>
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-fg">{essay.title}</h2>
        <p className="text-sm leading-6 text-muted">{essay.summary}</p>
      </div>
      <p className="mt-6 text-sm text-subtle">
        {essay.status}
        <span aria-hidden="true"> / </span>
        <time dateTime={essay.publishedAt}>{essay.publishedAt}</time>
        <span aria-hidden="true"> / </span>
        {essay.readingTime}
      </p>
    </Card>
  );
}
