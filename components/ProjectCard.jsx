"use client";

import React from "react";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { keyframes } from "@mui/material/styles";
import { getProjectPreviewComponent } from "@/components/project-previews";
import { useDemoUrlStatus } from "@/hooks/useDemoUrlStatus";
import TechStack from "@/components/TechStack";

const statusColorMap = {
  Live: "success",
  Prototype: "warning",
  Archived: "default",
};

const livePulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  70% {
    transform: scale(2.2);
    opacity: 0;
  }
  100% {
    transform: scale(2.2);
    opacity: 0;
  }
`;

function LiveStatusChip({ projectStatus, liveStatus }) {
  if (projectStatus !== "Live") {
    return (
      <Chip
        size="small"
        label={projectStatus}
        color={statusColorMap[projectStatus] ?? "default"}
        variant="outlined"
      />
    );
  }

  const label =
    liveStatus === "checking" ? "Checking…" : liveStatus === "offline" ? "Offline" : "Live";

  const color =
    liveStatus === "offline" ? "warning" : liveStatus === "live" ? "success" : "default";

  return (
    <Chip
      size="small"
      label={label}
      color={color}
      variant="outlined"
      aria-live="polite"
      icon={
        liveStatus === "live" ? (
          <Box
            aria-hidden
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: "success.main",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                bgcolor: "success.main",
                animation: `${livePulse} 1.6s ease-out infinite`,
              },
            }}
          />
        ) : undefined
      }
      sx={{
        ...(liveStatus === "checking" && { opacity: 0.85 }),
        ...(liveStatus === "live" && {
          "& .MuiChip-icon": {
            ml: 1,
            mr: 0.25,
          },
        }),
      }}
    />
  );
}

function CaseStudyItem({ label, children }) {
  return (
    <Box>
      <Typography
        variant="overline"
        color="primary.main"
        sx={{ fontWeight: 700, letterSpacing: 0.8, lineHeight: 1.2 }}
      >
        {label}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.4, lineHeight: 1.6 }}>
        {children}
      </Typography>
    </Box>
  );
}

export default function ProjectCard({ project, caseStudyLabels }) {
  const PreviewComponent = getProjectPreviewComponent(project.previewKey);
  const shouldPingLive = project.status === "Live" && Boolean(project.demoUrl);
  const liveStatus = useDemoUrlStatus(project.demoUrl, shouldPingLive);
  const hasPreviewImage = Boolean(project.previewImage);
  const hasPreview = hasPreviewImage || Boolean(PreviewComponent);

  return (
    <Paper
      component="article"
      variant="outlined"
      sx={{
        borderRadius: 1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {hasPreview ? (
        <Box
          component={project.demoUrl ? "a" : "div"}
          href={project.demoUrl ?? undefined}
          target={project.demoUrl ? "_blank" : undefined}
          rel={project.demoUrl ? "noreferrer" : undefined}
          aria-label={project.demoUrl ? `Open live demo: ${project.title}` : undefined}
          sx={{
            display: "block",
            width: "100%",
            aspectRatio: hasPreviewImage ? "40 / 23" : "16 / 9",
            position: "relative",
            overflow: "hidden",
            bgcolor: "#152535",
            textDecoration: "none",
            color: "inherit",
            cursor: project.demoUrl ? "pointer" : "default",
            transition: "opacity 0.2s ease",
            "&:hover": project.demoUrl
              ? {
                  opacity: 0.92,
                }
              : undefined,
          }}
        >
          {hasPreviewImage ? (
            <Image
              src={project.previewImage}
              alt={project.previewAlt ?? project.title}
              fill
              sizes="(max-width: 768px) 100vw, 960px"
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          ) : (
            <PreviewComponent
              aria-label={project.previewAlt ?? `${project.title} preview`}
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                pointerEvents: "none",
              }}
            />
          )}
        </Box>
      ) : null}

      <Box sx={{ p: { xs: 2, md: 2.5 }, flex: 1, display: "flex", flexDirection: "column" }}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          useFlexGap
          flexWrap="wrap"
          sx={{ mb: 1.2 }}
        >
          <Typography component="h3" variant="h5" sx={{ fontWeight: 700 }}>
            {project.title}
          </Typography>
          <LiveStatusChip projectStatus={project.status} liveStatus={liveStatus} />
          {project.category ? (
            <Chip size="small" label={project.category} variant="outlined" />
          ) : null}
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
            {project.level}
          </Typography>
        </Stack>

        <TechStack labels={project.stack} />

        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, lineHeight: 1.65 }}>
          {project.summary}
        </Typography>

        <Typography variant="body2" sx={{ mt: 1.4, lineHeight: 1.6 }}>
          {project.impact}
        </Typography>

        {project.caseStudy && caseStudyLabels ? (
          <Stack spacing={1.2} sx={{ mt: 1.6 }}>
            <CaseStudyItem label={caseStudyLabels.problem}>
              {project.caseStudy.problem}
            </CaseStudyItem>
            <CaseStudyItem label={caseStudyLabels.action}>
              {project.caseStudy.action}
            </CaseStudyItem>
            <CaseStudyItem label={caseStudyLabels.result}>
              {project.caseStudy.result}
            </CaseStudyItem>
          </Stack>
        ) : null}

        <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
          {project.role ? `Role: ${project.role}. ` : ""}
          {project.usage}
        </Typography>

        <Divider sx={{ mt: "auto", mb: 2 }} />

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
          {project.demoUrl ? (
            <Button
              size="small"
              variant="contained"
              component="a"
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </Button>
          ) : (
            <Button size="small" variant="outlined" disabled>
              Demo Soon
            </Button>
          )}

          {project.repoUrl ? (
            <Button
              size="small"
              variant="outlined"
              component="a"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </Button>
          ) : null}
        </Stack>
      </Box>
    </Paper>
  );
}
