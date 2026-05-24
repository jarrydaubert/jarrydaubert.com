import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
];

export const metadata: Metadata = {
  title: {
    default: "Jarryd Aubert",
    template: "%s | Jarryd Aubert",
  },
  description:
    "Personal site of Jarryd Aubert \u2014 QA-minded product builder focused on useful software, AI-assisted workflows, and quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-stone-950 antialiased dark:bg-stone-950 dark:text-stone-50">
        <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-5 py-6 sm:px-8 sm:py-8">
          <header className="flex flex-col gap-5 border-b border-stone-200 pb-6 dark:border-stone-800 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="text-base font-semibold tracking-normal text-stone-950 outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50 dark:text-stone-50 dark:focus-visible:ring-stone-50 dark:focus-visible:ring-offset-stone-950"
            >
              Jarryd Aubert
            </Link>
            <nav aria-label="Primary navigation">
              <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-stone-600 dark:text-stone-300">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="outline-none hover:text-stone-950 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50 dark:hover:text-stone-50 dark:focus-visible:ring-stone-50 dark:focus-visible:ring-offset-stone-950"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <main className="flex-1 py-14 sm:py-20">{children}</main>
          <footer className="border-t border-stone-200 pt-6 text-sm text-stone-500 dark:border-stone-800 dark:text-stone-400">
            <p>&copy; {year} Jarryd Aubert</p>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
