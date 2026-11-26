"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle one-shot scroll reveal for below-the-fold blocks.
 *
 * Design notes for Matías / PR #11 coexistence:
 * - Visible without JS (CSS defaults to opacity:1; see `.reveal` in locale layout).
 * - Runs once (`data-reveal-visible`), respects `prefers-reduced-motion`.
 * - Do not wrap the hero — keep first paint immediate.
 * - Keep this utility thin; a fuller motion system belongs in scroll-reveal work.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <Box ref={ref} className="reveal" data-reveal>...</Box>
 *
 * Or mark children: elements with `[data-reveal]` under a parent observed together.
 *
 * @param {{ rootMargin?: string, threshold?: number }} [options]
 * @returns {import('react').RefObject<HTMLElement | null>}
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const { rootMargin = "0px 0px -8% 0px", threshold = 0.12 } = options;

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      node.setAttribute("data-reveal-visible", "");
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-reveal-visible", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return ref;
}

export default useScrollReveal;
