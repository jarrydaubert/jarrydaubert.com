import { Analytics } from "@vercel/analytics/next";
import type { Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: "#11100d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-50 -translate-y-20 rounded-sm bg-[var(--color-fg)] px-3 py-2 text-sm font-medium text-[var(--color-bg)] outline-none transition-transform focus:translate-y-0 focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
        >
          Skip to content
        </a>
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
          <SiteHeader />
          <main id="main-content" className="flex-1 py-14 sm:py-20">
            {children}
          </main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
