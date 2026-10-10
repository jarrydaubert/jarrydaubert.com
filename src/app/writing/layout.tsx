import { SiteChrome } from "@/components/site-chrome";

// Essays keep the public site's chrome. They live outside the (site) route
// group on purpose: inside a group, Next.js appends a hash to the per-essay
// opengraph-image route, which would change published social image URLs.
export default function WritingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteChrome>{children}</SiteChrome>;
}
