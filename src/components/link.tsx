import NextLink from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { buttonClassName } from "@/components/button";
import { cn } from "@/lib/cn";

type Variant = "inline" | "nav" | "back" | "cta";

const VARIANTS: Record<Variant, string> = {
  // Underlined prose/text link. Collapses the focus+underline string repeated site-wide.
  inline: "link",
  // Chrome nav link. Color shift only, no underline.
  nav: "focus-ring font-medium text-muted transition-colors hover:text-fg",
  // Bordered "back" button.
  back: buttonClassName("secondary"),
  // Primary call to action.
  cta: buttonClassName("primary"),
};

type LinkProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "ref" | "className">;

/**
 * One link definition for the whole site. Auto-detects internal (next/link) vs
 * external/mailto/anchor (plain <a> with safe target/rel) and bakes in the focus ring.
 */
export function Link({
  href,
  variant = "inline",
  className,
  children,
  ...rest
}: LinkProps) {
  const classes = cn(VARIANTS[variant], className);

  if (/^https?:\/\//.test(href)) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={classes} {...rest}>
      {children}
    </NextLink>
  );
}
