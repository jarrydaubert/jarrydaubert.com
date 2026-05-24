import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

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
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-stone-950 antialiased dark:bg-stone-950 dark:text-stone-50">
        <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
          <SiteHeader />
          <main className="flex-1 py-16 sm:py-24">{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
