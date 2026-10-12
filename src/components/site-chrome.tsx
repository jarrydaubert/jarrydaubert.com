import { Link } from "@/components/link";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-container site-header">
      <Link href="/" variant="nav" className="site-mark">
        {site.name}
        <span className="text-accent">.</span>
      </Link>
      <nav aria-label="Primary navigation">
        <ul className="site-nav">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} variant="nav">
                {item.label}
              </Link>
            </li>
          ))}
          <li className="nav-hello">
            <Link href={`mailto:${site.email}`} variant="nav">
              Say hello
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        {site.name}
        <span className="text-accent">.</span>
        {" \u00a9 2026"}
      </p>
      <ul>
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
          <Link href={`mailto:${site.email}`} variant="nav">
            Email
          </Link>
        </li>
      </ul>
    </footer>
  );
}
