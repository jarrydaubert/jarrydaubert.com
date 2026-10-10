"use client";

import { useRouter } from "next/navigation";
import { useCallback, useLayoutEffect } from "react";

// A swatch grows into its project page using the View Transitions API. The
// transition waits until the destination page has committed, which the page
// signals by rendering <SwatchArrived />. Browsers without the API, and anyone
// who prefers reduced motion, get an ordinary navigation.

let settle: (() => void) | null = null;

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => Promise<void>) => unknown;
};

export function useSwatchNavigate() {
  const router = useRouter();

  return useCallback(
    (href: string, morph?: { element: HTMLElement; name: string }) => {
      const doc = document as ViewTransitionDocument;
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (!doc.startViewTransition || reduced) {
        router.push(href);
        return;
      }
      // Only the chosen chip is named, so the others simply fade with the page
      // instead of lingering as separate layers over the new one.
      if (morph) morph.element.style.viewTransitionName = morph.name;
      doc.startViewTransition(
        () =>
          new Promise<void>((resolve) => {
            const timeout = window.setTimeout(resolve, 1200);
            settle = () => {
              window.clearTimeout(timeout);
              resolve();
            };
            router.push(href);
          }),
      );
    },
    [router],
  );
}

export function SwatchArrived() {
  useLayoutEffect(() => {
    settle?.();
    settle = null;
  }, []);
  return null;
}

/** Plain left-click only: modified clicks keep their normal browser meaning. */
export function isPlainClick(event: React.MouseEvent) {
  return (
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  );
}
