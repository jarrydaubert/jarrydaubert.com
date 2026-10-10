import { SiteChrome } from "@/components/site-chrome";

// The public site's chrome. It lives in this route group (not the root layout)
// so experimental routes such as /design-lab can render their own design
// without changing a single public URL or the markup of the existing pages.
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteChrome>{children}</SiteChrome>;
}
