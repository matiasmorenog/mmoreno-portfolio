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
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(4, minmax(0, 1fr))",
            sm: "repeat(5, minmax(0, 1fr))",
            md: "repeat(5, minmax(0, 1fr))",
            lg: "repeat(10, minmax(0, 1fr))",
          },
          alignItems: "flex-start",
          justifyItems: "center",
          width: "100%",
          gap: { xs: 1, md: 1.25 },
          rowGap: { xs: 1.2, md: 1.25 },
        }}
      >
        {portfolioSkillKeys.map((techKey) => (
          <Box key={techKey}>
            <Box sx={{ display: { xs: "block", lg: "none" } }}>
              <TechIcon techKey={techKey} compact />
            </Box>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <TechIcon techKey={techKey} />
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
