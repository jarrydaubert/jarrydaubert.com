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
        className="text-3xl font-semibold text-stone-950 dark:text-stone-50 sm:text-4xl"
      >
        Page not found
      </h1>
      <p className="text-base leading-7 text-stone-600 dark:text-stone-300">
        The page you were looking for is not here.
      </p>
      <Link
        href="/"
        className="inline-flex rounded border border-stone-300 px-3 py-2 text-sm font-medium text-stone-800 outline-none hover:border-stone-500 hover:text-stone-950 focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50 dark:border-stone-700 dark:text-stone-200 dark:hover:border-stone-500 dark:hover:text-stone-50 dark:focus-visible:ring-stone-50 dark:focus-visible:ring-offset-stone-950"
      >
        Back home
      </Link>
    </section>
  );
}
