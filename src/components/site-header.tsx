import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
];

export function SiteHeader() {
  return (
    <header className="flex flex-col gap-5 border-b border-stone-200 pb-7 dark:border-stone-800 sm:flex-row sm:items-center sm:justify-between">
      <Link
        href="/"
        className="text-lg font-semibold tracking-normal text-stone-950 outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50 dark:text-stone-50 dark:focus-visible:ring-stone-50 dark:focus-visible:ring-offset-stone-950"
      >
        Jarryd Aubert
      </Link>
      <nav aria-label="Primary navigation">
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[0.95rem] leading-6 text-stone-700 dark:text-stone-300">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-medium outline-none hover:text-stone-950 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50 dark:hover:text-stone-50 dark:focus-visible:ring-stone-50 dark:focus-visible:ring-offset-stone-950"
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
