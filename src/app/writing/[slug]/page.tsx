import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/components/link";
import { Prose } from "@/components/prose";
import { essaySlugs, getEssay } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { articleJsonLd } from "@/lib/site";

type WritingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return essaySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssay(slug);

  if (!essay) {
    return { title: "Writing Not Found" };
  }

  return buildMetadata({
    title: essay.title,
    description: essay.description,
    path: essay.href,
    type: "article",
    publishedAt: essay.publishedAt,
    modifiedAt: essay.updatedAt,
  });
}

export default async function WritingDetailPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const essay = getEssay(slug);

  if (!essay) {
    notFound();
  }

  return (
    <article className="max-w-3xl space-y-12" aria-labelledby="essay-title">
      <JsonLd data={articleJsonLd(essay)} />
      <header className="space-y-5">
        <p className="text-sm font-medium text-subtle">Writing</p>
        <div className="space-y-4">
          <h1
            id="essay-title"
            className="text-3xl font-semibold leading-tight text-fg sm:text-4xl sm:leading-tight"
          >
            {essay.title}
          </h1>
          <p className="text-lg leading-8 text-muted">{essay.summary}</p>
        </div>
        <p className="text-sm text-subtle">
          <time dateTime={essay.publishedAt}>{essay.publishedAt}</time>
          <span aria-hidden="true"> / </span>
          {essay.readingTime}
        </p>
      </header>

      <Prose source={essay.body} />

      <footer className="border-t border-border pt-8">
        <Link href="/writing">Back to writing</Link>
      </footer>
    </article>
  );
}
