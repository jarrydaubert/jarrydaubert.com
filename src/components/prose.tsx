import { compileMDX } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { Figure } from "@/components/figure";
import { Link } from "@/components/link";

const components = {
  a: ({ href = "", children, ...rest }: ComponentProps<"a">) =>
    href.startsWith("#") ? (
      // Heading-anchor link (rehype-autolink behavior:"wrap") — inherits the
      // heading's look, no underline, but stays keyboard-focusable.
      <a
        href={href}
        className="font-[inherit] text-inherit no-underline focus-ring"
        {...rest}
      >
        {children}
      </a>
    ) : (
      <Link href={href}>{children}</Link>
    ),
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="scroll-mt-24 pt-4 text-xl font-semibold text-fg"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="scroll-mt-24 pt-2 text-lg font-semibold text-fg"
      {...props}
    />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="list-disc space-y-2 pl-6" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="list-decimal space-y-2 pl-6" {...props} />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-semibold text-fg" {...props} />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      className="rounded bg-surface px-1.5 py-0.5 text-[0.9em] text-fg"
      {...props}
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      className="overflow-x-auto rounded-md border border-border bg-surface p-4 text-sm [&_code]:bg-transparent [&_code]:p-0"
      {...props}
    />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-2 border-border-hover pl-4 text-muted italic"
      {...props}
    />
  ),
  img: ({ src, alt, width, height }: ComponentProps<"img">) => (
    <Figure
      src={String(src)}
      alt={alt ?? ""}
      width={Number(width) || 1200}
      height={Number(height) || 630}
    />
  ),
  Figure,
};

export async function Prose({ source }: { source: string }) {
  const { content } = await compileMDX({
    source,
    components,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ],
      },
    },
  });

  return (
    <div className="space-y-7 text-base leading-8 text-muted">{content}</div>
  );
}
