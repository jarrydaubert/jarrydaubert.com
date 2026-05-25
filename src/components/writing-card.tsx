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
        <Heading className="text-lg font-semibold text-stone-950 dark:text-stone-50">
          {title}
        </Heading>
        {summary ? (
          <p className="text-sm leading-6 text-stone-600 dark:text-stone-300">
            {summary}
          </p>
        ) : null}
      </div>
      <p className="mt-6 text-sm text-stone-600 dark:text-stone-300">
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
    "rounded-lg border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900";

  if (href) {
    return (
      <Link
        href={href}
        className={`${className} block outline-none hover:border-stone-400 focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50 dark:hover:border-stone-600 dark:focus-visible:ring-stone-50 dark:focus-visible:ring-offset-stone-950`}
      >
        {content}
      </Link>
    );
  }

  return <article className={className}>{content}</article>;
}
