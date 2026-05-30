import { Analytics } from "@vercel/analytics/next";
import type { Viewport } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { buildMetadata } from "@/lib/metadata";
import { token } from "@/lib/tokens";
import "./globals.css";

// Self-hosted at build time by next/font — no runtime requests to Google.
const fontDisplay = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display-loaded",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-loaded",
});

export const metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: token("bg"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontMono.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#main-content"
          className="focus-ring fixed top-4 left-4 z-50 -translate-y-20 rounded-sm bg-fg px-3 py-2 text-sm font-medium text-bg transition-transform focus:translate-y-0"
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
