"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { getTechnologyIconPath, getTechnologyIconUrl, technologies } from "@/data/technologies";

const COMPACT_SLOT_WIDTH = 54;
const DEFAULT_SLOT_WIDTH = 76;

export default function TechIcon({
  techKey,
  showLabel = true,
  size = 22,
  compact = false,
}) {
  const theme = useTheme();
  const tech = technologies[techKey];
  const isDarkMode = theme.palette.mode === "dark";
  const localIcon = getTechnologyIconPath(techKey, { isDarkMode });
  const remoteIcon = getTechnologyIconUrl(techKey, { forDarkBackground: isDarkMode });
  const [iconSrc, setIconSrc] = useState(localIcon ?? remoteIcon);

  if (!tech) return null;

  const slotWidth = compact ? COMPACT_SLOT_WIDTH : DEFAULT_SLOT_WIDTH;
  const iconBoxSize = compact ? 34 : 44;

  return (
    <Box
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: compact ? 0.35 : 0.6,
        width: slotWidth,
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          width: iconBoxSize,
          height: iconBoxSize,
          borderRadius: 1,
          border: 1,
          borderColor: "divider",
          bgcolor: "action.hover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={iconSrc}
          alt=""
          aria-hidden
          onError={() => {
            if (iconSrc !== remoteIcon && remoteIcon) setIconSrc(remoteIcon);
          }}
          sx={{ width: size, height: size, display: "block" }}
        />
      </Box>
      {showLabel ? (
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            width: "100%",
            fontWeight: 600,
            fontSize: compact ? "0.62rem" : "0.72rem",
            textAlign: "center",
            lineHeight: 1.15,
            minHeight: compact ? "2.3em" : "2.4em",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {tech.label}
        </Typography>
      ) : null}
    </Box>
  );
}
