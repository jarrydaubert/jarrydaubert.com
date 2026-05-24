import Link from "next/link";

type ProjectCardProps = {
  name: string;
  summary: string;
  href?: string;
  headingLevel?: 2 | 3;
  status?: string;
};

export function ProjectCard({
  name,
  summary,
  href,
  headingLevel = 3,
  status,
}: ProjectCardProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const content = (
    <>
      <div className="space-y-3">
        <Heading className="font-medium text-stone-950 dark:text-stone-50">
          {name}
        </Heading>
        <p className="text-sm leading-6 text-stone-600 dark:text-stone-300">
          {summary}
        </p>
      </div>
      {status ? (
        <div className="mt-6 space-y-2 text-sm text-stone-500 dark:text-stone-400">
          <p>{status}</p>
          <p>Case study coming soon</p>
        </div>
      ) : null}
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
