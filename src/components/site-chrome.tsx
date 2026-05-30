import { Link } from "@/components/link";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="flex flex-col gap-5 border-b border-border pb-7 sm:flex-row sm:items-center sm:justify-between">
      <Link
        href="/"
        variant="nav"
        className="text-lg font-semibold text-fg hover:text-accent"
      >
        {site.name}
      </Link>
      <nav aria-label="Primary navigation">
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[0.95rem] leading-6">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} variant="nav">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-3 border-t border-border pt-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
      <p>&copy; 2026 {site.name}</p>
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        <li>
          <Link href={site.socials.github} variant="nav">
            GitHub
          </Link>
        </li>
        <li>
          <Link href={site.socials.linkedin} variant="nav">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link href="/feed.xml" variant="nav">
            RSS
          </Link>
        </li>
      </ul>
    </footer>
  );
}
