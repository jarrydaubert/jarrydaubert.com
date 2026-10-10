"use client";

import NextLink from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { isPlainClick, useSwatchNavigate } from "./swatch-transition";

export function SwatchLink({
  href,
  morphName,
  className,
  style,
  children,
  "aria-label": ariaLabel,
}: {
  href: string;
  /** view-transition-name shared with the destination page. */
  morphName?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  "aria-label"?: string;
}) {
  const navigate = useSwatchNavigate();
  return (
    <NextLink
      href={href}
      className={className}
      style={style}
      aria-label={ariaLabel}
      onClick={(event) => {
        if (!isPlainClick(event)) return;
        event.preventDefault();
        const element =
          event.currentTarget.querySelector<HTMLElement>("[data-morph]") ??
          event.currentTarget;
        navigate(href, morphName ? { element, name: morphName } : undefined);
      }}
    >
      {children}
    </NextLink>
  );
}
