import { Analytics } from "@vercel/analytics/next";
import type { Viewport } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import { buildMetadata } from "@/lib/metadata";
import { token } from "@/lib/tokens";
import "./globals.css";

// Self-hosted at build time by next/font, with no runtime font requests.
const fontDisplay = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display-loaded",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body-loaded",
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
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main-content"
          className="focus-ring fixed top-4 left-4 z-50 -translate-y-20 rounded-sm bg-fg px-3 py-2 text-sm font-medium text-bg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
