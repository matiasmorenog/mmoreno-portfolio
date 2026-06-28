"use client";

import React, { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import {
  getPortfolioProfile,
  getPortfolioSummary,
  getExperienceHighlights,
  getEducationHighlights,
  getPortfolioUi,
  defaultLocale,
  localeQueryParam,
  parseLocale,
} from "@/data/resume";
import { createPortfolioTheme } from "@/app/theme";

const toolbarIconButtonSx = {
  border: 1,
  borderColor: "divider",
  bgcolor: "background.paper",
};

function PortfolioPageContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [darkMode, setDarkMode] = useState(true);
  const [locale, setLocale] = useState(() =>
    parseLocale(searchParams.get(localeQueryParam)),
  );
  const [downloadingCv, setDownloadingCv] = useState(false);
  const [downloadingCvAts, setDownloadingCvAts] = useState(false);

  const theme = useMemo(() => createPortfolioTheme(darkMode), [darkMode]);
  const ui = useMemo(() => getPortfolioUi(locale), [locale]);
  const profile = useMemo(() => getPortfolioProfile(locale), [locale]);
  const portfolioSummary = useMemo(() => getPortfolioSummary(locale), [locale]);
  const experienceHighlights = useMemo(() => getExperienceHighlights(locale), [locale]);
  const educationHighlights = useMemo(() => getEducationHighlights(locale), [locale]);
  const contactMailtoUrl = useMemo(
    () =>
      `mailto:${profile.email}?subject=${encodeURIComponent(ui.contactMailSubject)}`,
    [profile.email, ui.contactMailSubject],
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const urlLocale = parseLocale(searchParams.get(localeQueryParam));
    setLocale((current) => (current === urlLocale ? current : urlLocale));
  }, [searchParams]);

  const updateLocale = useCallback(
    (nextLocale) => {
      const resolvedLocale = parseLocale(nextLocale);
      setLocale(resolvedLocale);

      const params = new URLSearchParams(searchParams.toString());
      if (resolvedLocale === defaultLocale) {
        params.delete(localeQueryParam);
      } else {
        params.set(localeQueryParam, resolvedLocale);
      }

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const handleToggleLocale = () => {
    updateLocale(locale === "en" ? "es" : "en");
  };

  const handleContactClick = () => {
    window.location.href = contactMailtoUrl;
  };

  const handleDownloadCv = async () => {
    setDownloadingCv(true);
    try {
      const { downloadResumePdf } = await import("@/lib/downloadResumePdf");
      await downloadResumePdf(locale);
    } finally {
      setDownloadingCv(false);
    }
  };

  const handleDownloadCvAts = async () => {
    setDownloadingCvAts(true);
    try {
      const { downloadResumePdfAts } = await import("@/lib/downloadResumePdf");
      await downloadResumePdfAts(locale);
    } finally {
      setDownloadingCvAts(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component="main"
        id="main-content"
        sx={{
          minHeight: "100vh",
          background: darkMode
            ? "radial-gradient(circle at 92% 3%, #264866 0%, #0e1320 55%)"
            : "radial-gradient(circle at 95% 5%, #ffe5bf 0%, #f4f1ea 50%, #dbe9ff 100%)",
          py: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
              <Tooltip title={ui.switchLanguage}>
                <IconButton
                  onClick={handleToggleLocale}
                  aria-label={ui.switchLanguage}
                  size="small"
                  sx={{
                    ...toolbarIconButtonSx,
                    width: 36,
                    height: 36,
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: 0.6,
                  }}
                >
                  {locale.toUpperCase()}
                </IconButton>
              </Tooltip>
              <Tooltip title={darkMode ? ui.switchToLight : ui.switchToDark}>
                <IconButton
                  onClick={() => setDarkMode((prev) => !prev)}
                  aria-label={darkMode ? ui.switchToLight : ui.switchToDark}
                  size="small"
                  sx={toolbarIconButtonSx}
                >
                  {darkMode ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
                </IconButton>
              </Tooltip>
            </Box>

            <Paper
              component="section"
              aria-labelledby="hero-heading"
              variant="outlined"
              sx={{ p: { xs: 2, md: 2.5 }, borderRadius: 1 }}
            >
              <Box
                sx={{
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: { xs: "1fr", md: "1.6fr 1fr" },
                  alignItems: "start",
                }}
              >
                <Box>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1.2}
                    alignItems={{ xs: "flex-start", sm: "center" }}
                  >
                    <Avatar
                      src={profile.profilePhoto}
                      alt={`${profile.name} profile photo`}
                      sx={{
                        width: 120,
                        height: 120,
                        bgcolor: "primary.main",
                        color: "#fff",
                        fontWeight: 700,
                      }}
                    >
                      MM
                    </Avatar>
                    <Box>
                      <Typography
                        variant="overline"
                        color="primary.main"
                        sx={{ fontWeight: 700, letterSpacing: 1.4 }}
                      >
                        {ui.reactPortfolioHub}
                      </Typography>
                      <Typography
                        variant="h3"
                        component="h1"
                        id="hero-heading"
                        sx={{ mt: 0.2, fontSize: { xs: "1.8rem", md: "2.6rem" } }}
                      >
                        {profile.name}
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                      mt: 0.4,
                      fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" },
                      lineHeight: 1.35,
                      maxWidth: 640,
                    }}
                  >
                    {profile.role}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    flexWrap="wrap"
                    sx={{ mt: 1.4 }}
                  >
                    <Chip
                      size="small"
                      color="primary"
                      label={ui.availableFor}
                    />
                    <Chip size="small" variant="outlined" label={profile.location} />
                    {ui.credibilityChips.map((chip) => (
                      <Chip key={chip} size="small" variant="outlined" label={chip} />
                    ))}
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    flexWrap="wrap"
                    sx={{ mt: 1.5 }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      component="a"
                      href="#projects"
                    >
                      {ui.viewProjects}
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      type="button"
                      onClick={handleContactClick}
                      aria-label={`${ui.contactMe} (${profile.email})`}
                    >
                      {ui.contactMe}
                    </Button>
                  </Stack>
                </Box>

                <Stack spacing={2} sx={{ pl: { md: 1 }, borderLeft: { md: 1 }, borderColor: { md: "divider" } }}>
                  <Box>
                    <Typography
                      component="h2"
                      variant="subtitle2"
                      sx={{ fontWeight: 700 }}
                    >
                      {ui.summary}
                    </Typography>
                    {portfolioSummary.map((item) => (
                      <Typography
                        key={item}
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.8, lineHeight: 1.45 }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>

                  <Divider />

                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      {ui.quickLinks}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      useFlexGap
                      flexWrap="wrap"
                      sx={{ mt: 1 }}
                    >
                      <Button
                        size="small"
                        variant="outlined"
                        component="a"
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {ui.linkedin}
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        component="a"
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {ui.github}
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={handleDownloadCv}
                        disabled={downloadingCv || downloadingCvAts}
                        startIcon={<DownloadRoundedIcon fontSize="small" />}
                      >
                        {downloadingCv ? ui.generating : ui.downloadCv}
                      </Button>
                      <Button
                        size="small"
                        variant="text"
                        onClick={handleDownloadCvAts}
                        disabled={downloadingCv || downloadingCvAts}
                      >
                        {downloadingCvAts ? ui.generating : ui.downloadCvAts}
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Paper>

            <Paper
              component="section"
              variant="outlined"
              sx={{ p: 1.5, borderRadius: 1 }}
            >
              <Typography component="h2" variant="h6" sx={{ mb: 1 }}>
                {ui.coreSkillsTitle}
              </Typography>
              <Stack direction="row" spacing={0.9} useFlexGap flexWrap="wrap">
                {ui.coreSkillChips.map((skill) => (
                  <Chip key={skill} label={skill} variant="outlined" />
                ))}
              </Stack>
            </Paper>

            <Paper
              component="section"
              variant="outlined"
              sx={{ p: 1.5, borderRadius: 1 }}
            >
              <Typography component="h2" variant="h6" sx={{ mb: 1 }}>
                {ui.softSkillsTitle}
              </Typography>
              <Stack direction="row" spacing={0.9} useFlexGap flexWrap="wrap">
                {ui.softSkillChips.map((skill) => (
                  <Chip key={skill} label={skill} variant="outlined" />
                ))}
              </Stack>
            </Paper>

            <Box
              component="section"
              aria-labelledby="experience-heading"
              sx={{
                display: "grid",
                gap: 1,
                gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr" },
              }}
            >
              <Paper variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
                <Typography
                  id="experience-heading"
                  component="h2"
                  variant="h6"
                  sx={{ mb: 1 }}
                >
                  {ui.experienceHighlights}
                </Typography>
                {experienceHighlights.map((item, index) => (
                  <Box
                    key={item.company}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      gap: 1.5,
                      pb: index < experienceHighlights.length - 1 ? 1.5 : 0,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        pt: 0.3,
                      }}
                    >
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          bgcolor: "primary.main",
                          flexShrink: 0,
                        }}
                      />
                      {index < experienceHighlights.length - 1 ? (
                        <Box
                          sx={{
                            width: 2,
                            flexGrow: 1,
                            minHeight: 24,
                            mt: 0.5,
                            bgcolor: "divider",
                            borderRadius: 1,
                          }}
                        />
                      ) : null}
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: { xs: "1fr", sm: "1fr 10.5rem" },
                          columnGap: 2,
                          rowGap: 0.25,
                          alignItems: "baseline",
                        }}
                      >
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                          {item.role} — {item.company}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          component="time"
                          sx={{
                            fontWeight: 600,
                            fontVariantNumeric: "tabular-nums",
                            whiteSpace: "nowrap",
                            textAlign: { sm: "right" },
                          }}
                        >
                          {item.period}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.4 }}>
                        {item.details}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Paper>

              <Paper variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
                <Typography component="h2" variant="h6" sx={{ mb: 1 }}>
                  {ui.educationCertifications}
                </Typography>
                {educationHighlights.map((item) => (
                  <Typography
                    key={item}
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {item}
                  </Typography>
                ))}
              </Paper>
            </Box>

            <Typography
              id="projects-heading"
              component="h2"
              variant="h6"
              sx={{ mb: 1 }}
            >
              {ui.liveDemoProjects}
            </Typography>

            <Box
              id="projects"
              component="section"
              aria-labelledby="projects-heading"
              sx={{
                display: "grid",
                gap: 1,
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                },
              }}
            >
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Box>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={null}>
      <PortfolioPageContent />
    </Suspense>
  );
}
