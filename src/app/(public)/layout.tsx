import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
        <main id="main-content" className="flex-1 py-14 sm:py-20">
          {children}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
