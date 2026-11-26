"use client";

import React from "react";
import Box from "@mui/material/Box";
import { useInViewOnce } from "@/hooks/useInViewOnce";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const DEFAULT_DURATION_MS = 900;
const DEFAULT_DISTANCE_PX = 16;

/**
 * Subtle fade + translate-up reveal. Runs once when scrolled into view
 * (or immediately on mount when `immediate` is set).
 */
export default function ScrollReveal({
  children,
  component = "div",
  delayMs = 0,
  durationMs = DEFAULT_DURATION_MS,
  distancePx = DEFAULT_DISTANCE_PX,
  immediate = false,
  disabled = false,
  sx,
  ...rest
}) {
  const [ref, inView] = useInViewOnce({ immediate, disabled });

  return (
    <Box
      ref={ref}
      component={component}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate3d(0, 0, 0)" : `translate3d(0, ${distancePx}px, 0)`,
        transition: `opacity ${durationMs}ms ${EASE} ${delayMs}ms, transform ${durationMs}ms ${EASE} ${delayMs}ms`,
        willChange: inView ? "auto" : "opacity, transform",
        "@media (prefers-reduced-motion: reduce)": {
          opacity: 1,
          transform: "none",
          transition: "none",
          willChange: "auto",
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}
