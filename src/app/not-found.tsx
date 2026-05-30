import type { Metadata } from "next";
import { Link } from "@/components/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested page could not be found.",
};

export default function NotFound() {
  return (
    <section className="max-w-2xl space-y-6" aria-labelledby="not-found-title">
      <h1
        id="not-found-title"
        className="text-3xl font-semibold text-fg sm:text-4xl"
      >
        Page not found
      </h1>
      <p className="text-base leading-7 text-muted">
        The page you were looking for is not here.
      </p>
      <Link href="/" variant="back">
        Back home
      </Link>
    </section>
  );
}
