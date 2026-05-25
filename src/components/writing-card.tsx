import Link from "next/link";

type WritingCardProps = {
  href?: string;
  title: string;
  headingLevel?: 2 | 3;
  publishedAt?: string;
  summary?: string;
  status?: string;
};

export function WritingCard({
  href,
  title,
  headingLevel = 2,
  publishedAt,
  summary,
  status = "Coming soon.",
}: WritingCardProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const content = (
    <>
      <div className="space-y-3">
        <Heading className="text-lg font-semibold text-[var(--color-fg)]">
          {title}
        </Heading>
        {summary ? (
          <p className="text-sm leading-6 text-[var(--color-muted)]">
            {summary}
          </p>
        ) : null}
      </div>
      <p className="mt-6 text-sm text-[var(--color-subtle)]">
        {status}
        {publishedAt ? (
          <>
            <span aria-hidden="true"> / </span>
            <time dateTime={publishedAt}>{publishedAt}</time>
          </>
        ) : null}
      </p>
    </>
  );

  const className =
    "rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors";

  if (href) {
    return (
      <Link
        href={href}
        className={`${className} block outline-none hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-elevated)] focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]`}
      >
        {content}
      </Link>
    );
  }

  return <article className={className}>{content}</article>;
}
