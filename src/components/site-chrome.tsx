import { Link } from "@/components/link";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/72 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          variant="nav"
          className="text-base font-semibold text-fg hover:text-accent"
        >
          {site.name}
          <span className="text-ring">.</span>
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-x-5 text-sm leading-6 sm:gap-x-6">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} variant="nav">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-6 border-t border-border py-8 text-sm text-subtle sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-semibold text-fg">
          {site.name}
          <span className="text-ring">.</span>
        </p>
        <p className="mt-2">&copy; 2026. Built, tested, and kept honest.</p>
      </div>
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        <li>
          <Link href={`mailto:${site.email}`} variant="nav">
            Email
          </Link>
        </li>
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
      </ul>
    </footer>
  );
}
