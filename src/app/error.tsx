"use client";

import { Button } from "@/components/button";
import { Link } from "@/components/link";

export default function ErrorBoundary({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="max-w-2xl space-y-6" aria-labelledby="error-title">
      <h1
        id="error-title"
        className="text-3xl font-semibold text-fg sm:text-4xl"
      >
        Something went wrong
      </h1>
      <p className="text-base leading-7 text-muted">
        An unexpected error occurred. You can try again or head back home.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button type="button" onClick={reset}>
          Try again
        </Button>
        <Link href="/" variant="back">
          Back home
        </Link>
      </div>
    </section>
  );
}
