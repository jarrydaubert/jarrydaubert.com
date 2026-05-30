import NextLink from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  href?: string;
  className?: string;
  children: ReactNode;
};

const INTERACTIVE =
  "block focus-ring hover:border-border-hover hover:bg-surface-elevated";

/**
 * Surface primitive: the shared card shell (border + surface + radius + p-5).
 * With href it becomes an internal link with hover/focus; without, a static
 * <article>. Padding is overridable via className (tailwind-merge resolves it).
 */
export function Card({ href, className, children }: CardProps) {
  if (href) {
    return (
      <NextLink href={href} className={cn("card p-5", INTERACTIVE, className)}>
        {children}
      </NextLink>
    );
  }

  return (
    <article
      className={cn(
        "card p-5 [--focus-offset-color:var(--color-surface)]",
        className,
      )}
    >
      {children}
    </article>
  );
}
