import Link from "next/link";

type ProjectCardProps = {
  name: string;
  summary: string;
  caseStudyStatus?: string;
  href?: string;
  headingLevel?: 2 | 3;
  status?: string;
  theme?: string;
};

export function ProjectCard({
  name,
  summary,
  caseStudyStatus,
  href,
  headingLevel = 3,
  status,
  theme,
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
        {theme ? (
          <p className="text-sm leading-6 text-stone-600 dark:text-stone-300">
            <span className="font-medium text-stone-800 dark:text-stone-100">
              Theme:
            </span>{" "}
            {theme}
          </p>
        ) : null}
      </div>
      {status || caseStudyStatus ? (
        <div className="mt-6 space-y-2 text-sm text-stone-500 dark:text-stone-400">
          {status ? <p>{status}</p> : null}
          {caseStudyStatus ? <p>{caseStudyStatus}</p> : null}
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
