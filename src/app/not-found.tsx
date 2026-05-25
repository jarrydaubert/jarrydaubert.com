import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested page could not be found.",
};

export default function NotFound() {
  return (
    <section className="max-w-2xl space-y-6" aria-labelledby="not-found-title">
      <h1
        id="not-found-title"
        className="text-3xl font-semibold text-[var(--color-fg)] sm:text-4xl"
      >
        Page not found
      </h1>
      <p className="text-base leading-7 text-[var(--color-muted)]">
        The page you were looking for is not here.
      </p>
      <Link
        href="/"
        className="inline-flex rounded-sm border border-[var(--color-border)] px-3 py-2 text-sm font-medium text-[var(--color-fg)] outline-none transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
      >
        Back home
      </Link>
    </section>
  );
}
