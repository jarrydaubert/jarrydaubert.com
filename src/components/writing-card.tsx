type WritingCardProps = {
  title: string;
  headingLevel?: 2 | 3;
  summary?: string;
  status?: string;
};

export function WritingCard({
  title,
  headingLevel = 2,
  summary,
  status = "Coming soon.",
}: WritingCardProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article className="rounded-lg border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
      <div className="space-y-3">
        <Heading className="text-lg font-semibold text-stone-950 dark:text-stone-50">
          {title}
        </Heading>
        {summary ? (
          <p className="text-sm leading-6 text-stone-600 dark:text-stone-300">
            {summary}
          </p>
        ) : null}
      </div>
      <p className="mt-6 text-sm text-stone-500 dark:text-stone-400">
        {status}
      </p>
    </article>
  );
}
