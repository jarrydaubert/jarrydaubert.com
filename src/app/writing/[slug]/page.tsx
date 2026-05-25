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
        <p className="text-sm font-medium text-stone-600 dark:text-stone-300">
          Writing
        </p>
        <div className="space-y-4">
          <h1
            id="essay-title"
            className="text-3xl font-semibold leading-tight text-stone-950 dark:text-stone-50 sm:text-4xl sm:leading-tight"
          >
            {item.title}
          </h1>
          <p className="text-lg leading-8 text-stone-700 dark:text-stone-200">
            {item.summary}
          </p>
        </div>
        <p className="text-sm text-stone-600 dark:text-stone-300">
          <time dateTime={item.publishedAt}>{item.publishedAt}</time>
        </p>
      </header>

      <div className="space-y-7 text-base leading-8 text-stone-700 dark:text-stone-200">
        {item.body.map((block) =>
          block.type === "heading" ? (
            <h2
              key={block.text}
              className="pt-4 text-xl font-semibold text-stone-950 dark:text-stone-50"
            >
              {block.text}
            </h2>
          ) : (
            <p key={block.text}>{block.text}</p>
          ),
        )}
      </div>

      <footer className="border-t border-stone-200 pt-8 dark:border-stone-800">
        <Link
          href="/writing"
          className="text-sm font-medium text-stone-800 underline decoration-stone-300 underline-offset-4 outline-none hover:text-stone-950 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50 dark:text-stone-100 dark:decoration-stone-600 dark:hover:text-white dark:focus-visible:ring-stone-50 dark:focus-visible:ring-offset-stone-950"
        >
          Back to writing
        </Link>
      </footer>
    </article>
  );
}
