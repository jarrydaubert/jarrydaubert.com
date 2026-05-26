import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  name: string;
  summary: string;
  href?: string;
  headingLevel?: 2 | 3;
  liveUrl?: string;
  previewImage?: {
    src: string;
    alt: string;
  };
  qualityFocus?: string;
  roleFocus?: string;
  status?: string;
  theme?: string;
};

export function ProjectCard({
  name,
  summary,
  href,
  headingLevel = 3,
  liveUrl,
  previewImage,
  qualityFocus,
  roleFocus,
  status,
  theme,
}: ProjectCardProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const className =
    "rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-elevated)]";

  return (
    <article className={className}>
      {previewImage ? (
        <div className="mb-5 overflow-hidden rounded-sm border border-[var(--color-border)] bg-[var(--color-bg)]">
          <Image
            src={previewImage.src}
            alt={previewImage.alt}
            width={1200}
            height={630}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            loading="lazy"
            className="aspect-[1200/630] w-full object-cover"
          />
        </div>
      ) : null}
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
      {status || roleFocus || qualityFocus || liveUrl || href ? (
        <div className="mt-7 space-y-3 border-t border-[var(--color-border)] pt-5 text-sm leading-6 text-[var(--color-muted)]">
          {roleFocus ? (
            <p>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Role/focus
              </span>{" "}
              {roleFocus}
            </p>
          ) : null}
          {qualityFocus ? (
            <p>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Quality focus
              </span>{" "}
              {qualityFocus}
            </p>
          ) : null}
          {status ? (
            <p>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Current state
              </span>{" "}
              {status}
            </p>
          ) : null}
          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
            {href ? (
              <Link
                href={href}
                className="font-medium text-[var(--color-fg)] underline decoration-[var(--color-border-hover)] underline-offset-4 outline-none transition-colors hover:text-[var(--color-accent)] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-surface)]"
              >
                View project note
              </Link>
            ) : null}
            {liveUrl ? (
              <a
                href={liveUrl}
                className="font-medium text-[var(--color-fg)] underline decoration-[var(--color-border-hover)] underline-offset-4 outline-none transition-colors hover:text-[var(--color-accent)] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-surface)]"
                target="_blank"
                rel="noreferrer"
              >
                Live site
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </article>
  );
}
