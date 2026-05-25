import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const siteDescription =
  "Personal site of Jarryd Aubert \u2014 QA-minded product builder focused on useful software, AI-assisted workflows, and quality.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jarrydaubert.com"),
  title: {
    default: "Jarryd Aubert",
    template: "%s | Jarryd Aubert",
  },
  description: siteDescription,
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Jarryd Aubert",
    description: siteDescription,
    url: "https://jarrydaubert.com",
    siteName: "Jarryd Aubert",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Jarryd Aubert",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jarryd Aubert",
    description: siteDescription,
    images: ["/og-image.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-stone-950 antialiased dark:bg-stone-950 dark:text-stone-50">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-50 -translate-y-20 rounded bg-stone-950 px-3 py-2 text-sm font-medium text-stone-50 outline-none transition-transform focus:translate-y-0 focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50 dark:bg-stone-50 dark:text-stone-950 dark:focus-visible:ring-stone-50 dark:focus-visible:ring-offset-stone-950"
        >
          Skip to content
        </a>
        <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
          <SiteHeader />
          <main id="main-content" className="flex-1 py-16 sm:py-24">
            {children}
          </main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
