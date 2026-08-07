"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TechIcon from "@/components/TechIcon";
import { portfolioSkillKeys } from "@/data/technologies";

export default function SkillsIconGrid({ title, subtitle }) {
  return (
    <Paper
      component="section"
      aria-labelledby="skills-heading"
      variant="outlined"
      sx={{ p: { xs: 1.5, md: 2 }, borderRadius: 1 }}
    >
      <Typography id="skills-heading" component="h2" variant="h6">
        {title}
      </Typography>
      {subtitle ? (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1.5 }}>
          {subtitle}
        </Typography>
      ) : null}

      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "flex-start",
          width: "100%",
          gap: { xs: 1.2, md: 1.5 },
          overflowX: { xs: "auto", md: "visible" },
          justifyContent: "flex-start",
          pb: 0.5,
          scrollbarWidth: "thin",
        }}
      >
        {portfolioSkillKeys.map((techKey) => (
          <Box key={techKey} sx={{ flexShrink: { xs: 0 } }}>
            <TechIcon techKey={techKey} />
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
