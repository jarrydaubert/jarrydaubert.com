import Link from "next/link";
import { site } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="flex flex-col gap-5 border-b border-[var(--color-border)] pb-7 sm:flex-row sm:items-center sm:justify-between">
      <Link
        href="/"
        className="text-lg font-semibold tracking-normal text-[var(--color-fg)] outline-none transition-colors hover:text-[var(--color-accent)] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
      >
        {site.name}
      </Link>
      <nav aria-label="Primary navigation">
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[0.95rem] leading-6 text-[var(--color-muted)]">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-medium outline-none transition-colors hover:text-[var(--color-fg)] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
