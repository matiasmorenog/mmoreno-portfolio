"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import {
  getTechnologyIconPath,
  getTechnologyIconUrl,
  technologies,
} from "@/data/technologies";

const COMPACT_SLOT_WIDTH = 54;
const DEFAULT_SLOT_WIDTH = 76;

export default function TechIcon({
  techKey,
  showLabel = true,
  size = 22,
  compact = false,
  responsive = false,
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
      className="tech-icon-slot"
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: compact || responsive ? { xs: 0.35, lg: responsive ? 0.6 : 0.35 } : 0.6,
        width: responsive ? undefined : slotWidth,
        flexShrink: 0,
      }}
    >
      <Box
        className="tech-icon-box"
        sx={{
          width: responsive ? undefined : iconBoxSize,
          height: responsive ? undefined : iconBoxSize,
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
          className="tech-icon-img"
          src={iconSrc}
          alt=""
          aria-hidden
          onError={() => {
            if (iconSrc !== remoteIcon && remoteIcon) setIconSrc(remoteIcon);
          }}
          sx={{
            width: responsive ? undefined : size,
            height: responsive ? undefined : size,
            display: "block",
          }}
        />
      </Box>
      {showLabel ? (
        <Typography
          className="tech-icon-label"
          variant="caption"
          color="text.secondary"
          sx={{
            width: "100%",
            fontWeight: 600,
            fontSize: responsive ? undefined : compact ? "0.62rem" : "0.72rem",
            textAlign: "center",
            lineHeight: 1.15,
            minHeight: responsive ? undefined : compact ? "2.3em" : "2.4em",
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
