import Link from "next/link";

type ProjectCardProps = {
  name: string;
  summary: string;
  caseStudyStatus?: string;
  href?: string;
  headingLevel?: 2 | 3;
  liveUrl?: string;
  status?: string;
  theme?: string;
};

export function ProjectCard({
  name,
  summary,
  caseStudyStatus,
  href,
  headingLevel = 3,
  liveUrl,
  status,
  theme,
}: ProjectCardProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const content = (
    <>
      <div className="space-y-4">
        <Heading className="text-lg font-semibold text-[var(--color-fg)]">
          {name}
        </Heading>
        <p className="text-sm leading-6 text-[var(--color-muted)]">{summary}</p>
        {theme ? (
          <p className="text-sm leading-6 text-[var(--color-muted)]">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Focus
            </span>{" "}
            {theme}
          </p>
        ) : null}
      </div>
      {status || caseStudyStatus || liveUrl ? (
        <div className="mt-7 space-y-3 border-t border-[var(--color-border)] pt-5 text-sm text-[var(--color-muted)]">
          {status ? (
            <p>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Current state
              </span>{" "}
              {status}
            </p>
          ) : null}
          {caseStudyStatus ? (
            <p>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Case study
              </span>{" "}
              {caseStudyStatus}
            </p>
          ) : null}
          {liveUrl ? (
            <p>
              <a
                href={liveUrl}
                className="font-medium text-[var(--color-fg)] underline decoration-[var(--color-border-hover)] underline-offset-4 outline-none transition-colors hover:text-[var(--color-accent)] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-surface)]"
                target="_blank"
                rel="noreferrer"
              >
                Live site
              </a>
            </p>
          ) : null}
          {href ? (
            <p className="font-medium text-[var(--color-fg)]">Open case file</p>
          ) : null}
        </div>
      ) : null}
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
