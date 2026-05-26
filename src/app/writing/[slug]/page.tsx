import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWritingBySlug, writing } from "@/content/writing";
import { buildMetadata } from "@/lib/metadata";

type WritingPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return writing.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getWritingBySlug(slug);

  if (!item) {
    return {
      title: "Writing Not Found",
    };
  }

  return buildMetadata({
    title: item.title,
    description: item.description,
    path: item.href,
    type: "article",
    publishedAt: item.publishedAt,
  });
}

export default async function WritingDetailPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const item = getWritingBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <article className="max-w-3xl space-y-12" aria-labelledby="essay-title">
      <header className="space-y-5">
        <p className="text-sm font-medium text-[var(--color-accent)]">
          Writing
        </p>
        <div className="space-y-4">
          <h1
            id="essay-title"
            className="text-3xl font-semibold leading-tight text-[var(--color-fg)] sm:text-4xl sm:leading-tight"
          >
            {item.title}
          </h1>
          <p className="text-lg leading-8 text-[var(--color-muted)]">
            {item.summary}
          </p>
        </div>
        <p className="text-sm text-[var(--color-subtle)]">
          <time dateTime={item.publishedAt}>{item.publishedAt}</time>
        </p>
      </header>

      <div className="space-y-7 text-base leading-8 text-[var(--color-muted)]">
        {item.body.map((block) =>
          block.type === "heading" ? (
            <h2
              key={block.text}
              className="pt-4 text-xl font-semibold text-[var(--color-fg)]"
            >
              {block.text}
            </h2>
          ) : (
            <p key={block.text}>{block.text}</p>
          ),
        )}
      </div>

      <footer className="border-t border-[var(--color-border)] pt-8">
        <Link
          href="/writing"
          className="text-sm font-medium text-[var(--color-fg)] underline decoration-[var(--color-border-hover)] underline-offset-4 outline-none transition-colors hover:text-[var(--color-accent)] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
        >
          Back to writing
        </Link>
      </footer>
    </article>
  );
}
