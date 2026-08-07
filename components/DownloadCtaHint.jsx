"use client";

import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";

const RIPPLE_DURATION_MS = 2200;
const RIPPLE_STAGGER_MS = 1100;
const RIPPLE_ITERATIONS = 3;

const rippleSx = (delayMs = 0) => ({
  position: "absolute",
  inset: -4,
  borderRadius: 1.5,
  border: "2px solid",
  borderColor: "primary.main",
  pointerEvents: "none",
  animation: `portfolioDownloadRipple ${RIPPLE_DURATION_MS}ms ease-out ${RIPPLE_ITERATIONS} forwards`,
  animationDelay: `${delayMs}ms`,
  "@media (prefers-reduced-motion: reduce)": {
    display: "none",
  },
});

export default function DownloadCtaHint({ active, onComplete, children }) {
  const trailingRippleRef = useRef(null);
  const completedRef = useRef(false);
  const iterationCountRef = useRef(0);

  useEffect(() => {
    if (!active) {
      completedRef.current = false;
      iterationCountRef.current = 0;
      return undefined;
    }

    const ripple = trailingRippleRef.current;
    if (!ripple) return undefined;

    const handleAnimationEnd = (event) => {
      if (event.target !== ripple || event.animationName !== "portfolioDownloadRipple") {
        return;
      }

      iterationCountRef.current += 1;

      if (iterationCountRef.current >= RIPPLE_ITERATIONS && !completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }
    };

    ripple.addEventListener("animationend", handleAnimationEnd);
    return () => ripple.removeEventListener("animationend", handleAnimationEnd);
  }, [active, onComplete]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        flexShrink: 0,
        borderRadius: 1,
        overflow: "visible",
        "@keyframes portfolioDownloadRipple": {
          "0%": { transform: "scale(0.94)", opacity: 0.55 },
          "100%": { transform: "scale(1.55)", opacity: 0 },
        },
        "@keyframes portfolioDownloadGlow": {
          "0%, 100%": {
            boxShadow: (theme) => `0 0 0 0 ${theme.palette.primary.main}66`,
          },
          "50%": {
            boxShadow: (theme) => `0 0 0 8px ${theme.palette.primary.main}00`,
          },
        },
        "& .download-cta-button": active
          ? {
              animation: `portfolioDownloadGlow ${RIPPLE_DURATION_MS}ms ease-in-out ${RIPPLE_ITERATIONS} forwards`,
              "@media (prefers-reduced-motion: reduce)": {
                animation: "none",
              },
            }
          : undefined,
      }}
    >
      {active ? (
        <>
          <Box aria-hidden sx={rippleSx(0)} />
          <Box aria-hidden ref={trailingRippleRef} sx={rippleSx(RIPPLE_STAGGER_MS)} />
        </>
      ) : null}
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
    </Box>
  );
}
