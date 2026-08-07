"use client";

import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import TechIcon from "@/components/TechIcon";
import { resolveTechnologyKeys } from "@/data/technologies";

export default function TechStack({ labels = [], compact = true, showLabel = true }) {
  const techKeys = resolveTechnologyKeys(labels);
  const unresolvedLabels = labels.filter((label) => {
    if (label === "Jest & Cypress") return false;
    return !resolveTechnologyKeys([label]).length;
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        gap: 1,
        overflowX: compact ? "auto" : "visible",
        pb: 0.5,
        scrollbarWidth: "thin",
      }}
    >
      {techKeys.map((techKey) => (
        <TechIcon
          key={techKey}
          techKey={techKey}
          compact={compact}
          showLabel={showLabel}
        />
      ))}
      {unresolvedLabels.map((label) => (
        <Chip
          key={label}
          label={label}
          size="small"
          variant="outlined"
          sx={{ flexShrink: 0, alignSelf: "flex-start" }}
        />
      ))}
    </Box>
  );
}
