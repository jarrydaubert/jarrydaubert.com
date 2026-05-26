import { site } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-subtle)]">
      <p>&copy; 2026 {site.name}</p>
    </footer>
  );
}
