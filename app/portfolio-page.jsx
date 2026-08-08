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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SkillsIconGrid from "@/components/SkillsIconGrid";
import ProjectCard from "@/components/ProjectCard";
import DownloadCtaHint from "@/components/DownloadCtaHint";
import PortfolioContact from "@/components/PortfolioContact";
import { getProjects } from "@/data/projects";
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
  boxShadow: 2,
};

function FloatingDisplayControls({ darkMode, locale, ui, onToggleDarkMode, onToggleLocale }) {
  return (
    <Box
      sx={{
        position: "fixed",
        top: { xs: 28, md: 40 },
        left: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.tooltip,
        pointerEvents: "none",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", pointerEvents: "none" }}>
        <Box
          component="nav"
          aria-label="Display settings"
          sx={{
            position: { xs: "fixed", sm: "absolute" },
            top: { xs: 28, sm: 0 },
            right: { xs: 16, sm: 0 },
            transform: {
              sm: "translateX(calc(100% + 12px))",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.75,
            pointerEvents: "auto",
          }}
        >
          <Tooltip title={ui.switchLanguage}>
            <IconButton
              onClick={onToggleLocale}
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
              onClick={onToggleDarkMode}
              aria-label={darkMode ? ui.switchToLight : ui.switchToDark}
              size="small"
              sx={toolbarIconButtonSx}
            >
              {darkMode ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
    </Box>
  );
}

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
  const [downloadHint, setDownloadHint] = useState(true);

  const handleDownloadHintComplete = useCallback(() => {
    setDownloadHint(false);
  }, []);

  const theme = useMemo(() => createPortfolioTheme(darkMode), [darkMode]);
  const ui = useMemo(() => getPortfolioUi(locale), [locale]);
  const profile = useMemo(() => getPortfolioProfile(locale), [locale]);
  const portfolioSummary = useMemo(() => getPortfolioSummary(locale), [locale]);
  const experienceHighlights = useMemo(() => getExperienceHighlights(locale), [locale]);
  const educationHighlights = useMemo(() => getEducationHighlights(locale), [locale]);
  const localizedProjects = useMemo(() => getProjects(locale), [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const urlLocale = parseLocale(searchParams.get(localeQueryParam));
    setLocale((current) => (current === urlLocale ? current : urlLocale));
  }, [searchParams]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDownloadHint(false);
    }
  }, []);

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

  const handleScrollToProjects = (event) => {
    event.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (!projectsSection) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    projectsSection.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
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
        <FloatingDisplayControls
          darkMode={darkMode}
          locale={locale}
          ui={ui}
          onToggleDarkMode={() => setDarkMode((prev) => !prev)}
          onToggleLocale={handleToggleLocale}
        />
        <Container maxWidth="lg">
          <Stack spacing={2}>
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
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1.5fr" },
                  alignItems: "stretch",
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
                      maxWidth: { xs: 640, md: "none" },
                    }}
                  >
                    {profile.role}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mt: 1,
                      fontWeight: 500,
                      lineHeight: 1.45,
                      fontSize: { xs: "0.9rem", md: "0.98rem" },
                    }}
                  >
                    {ui.elevatorPitch}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    flexWrap="wrap"
                    sx={{ mt: 1.2 }}
                  >
                    <Chip
                      size="small"
                      variant="outlined"
                      icon={<LocationOnRoundedIcon />}
                      label={profile.location}
                    />
                    {ui.heroChips.map((chip) => (
                      <Chip key={chip} size="small" variant="outlined" label={chip} />
                    ))}
                  </Stack>

                  <Button
                    size="small"
                    variant="contained"
                    component="a"
                    href="#projects"
                    onClick={handleScrollToProjects}
                    sx={{ mt: 1.5, alignSelf: "flex-start" }}
                  >
                    {ui.viewProjects}
                  </Button>
                </Box>

                <Stack
                  spacing={2}
                  sx={{
                    position: "relative",
                    pl: { md: 2 },
                    "&::before": {
                      content: '""',
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "1px",
                      bgcolor: "divider",
                    },
                  }}
                >
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
                        variant="contained"
                        component="a"
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        startIcon={<LinkedInIcon fontSize="small" />}
                        sx={{
                          bgcolor: "#0A66C2",
                          color: "#fff",
                          "&:hover": {
                            bgcolor: "#004182",
                          },
                        }}
                      >
                        {ui.linkedin}
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        component="a"
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                        startIcon={<GitHubIcon fontSize="small" />}
                        sx={{
                          bgcolor: "#24292f",
                          color: "#fff",
                          "&:hover": {
                            bgcolor: "#0d1117",
                          },
                        }}
                      >
                        {ui.github}
                      </Button>
                      <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap
                        alignItems="center"
                        sx={{ flexWrap: "nowrap", flexShrink: 0 }}
                      >
                        <DownloadCtaHint
                          active={downloadHint}
                          onComplete={handleDownloadHintComplete}
                        >
                          <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            className="download-cta-button"
                            onClick={handleDownloadCv}
                            disabled={downloadingCv || downloadingCvAts}
                            startIcon={<DownloadRoundedIcon fontSize="small" />}
                            sx={{ whiteSpace: "nowrap", flexShrink: 0 }}
                          >
                            <Box
                              component="span"
                              sx={{
                                display: "inline-grid",
                                "& > span": { gridArea: "1 / 1" },
                              }}
                            >
                              <Box
                                component="span"
                                aria-hidden={downloadingCv}
                                sx={{ visibility: downloadingCv ? "hidden" : "visible" }}
                              >
                                {ui.downloadCv}
                              </Box>
                              <Box
                                component="span"
                                aria-hidden={!downloadingCv}
                                sx={{ visibility: downloadingCv ? "visible" : "hidden" }}
                              >
                                {ui.generating}
                              </Box>
                            </Box>
                          </Button>
                        </DownloadCtaHint>
                        <Button
                          size="small"
                          variant="text"
                          onClick={handleDownloadCvAts}
                          disabled={downloadingCv || downloadingCvAts}
                          sx={{ whiteSpace: "nowrap", flexShrink: 0 }}
                        >
                          {downloadingCvAts ? ui.generating : ui.downloadCvAts}
                        </Button>
                      </Stack>
                    </Stack>
                  </Box>

                  <Divider />

                  <PortfolioContact
                    title={ui.contactTitle}
                    email={profile.email}
                    copyEmailLabel={ui.copyEmail}
                    emailCopiedLabel={ui.emailCopied}
                    phone={profile.phone}
                    whatsappHref={profile.whatsapp}
                    openWhatsAppLabel={ui.openWhatsApp}
                  />
                </Stack>
              </Box>
            </Paper>

            <SkillsIconGrid title={ui.coreSkillsTitle} subtitle={ui.skillsSubtitle} />

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
                      {item.stack?.length > 0 ? (
                        <Stack
                          direction="row"
                          spacing={0.6}
                          useFlexGap
                          flexWrap="wrap"
                          sx={{ mt: 0.8 }}
                        >
                          {item.stack.map((tech) => (
                            <Chip key={tech} label={tech} size="small" variant="outlined" />
                          ))}
                        </Stack>
                      ) : null}
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

            <Box component="section" aria-labelledby="projects-heading">
              <Typography
                id="projects-heading"
                component="h2"
                variant="h6"
                sx={{ mb: 0.5 }}
              >
                {ui.liveDemoProjects}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                {ui.portfolioSubtitle}
              </Typography>

              <Box
                id="projects"
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 2,
                  width: "100%",
                }}
              >
                {localizedProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    caseStudyLabels={{
                      problem: ui.caseStudyProblem,
                      action: ui.caseStudyAction,
                      result: ui.caseStudyResult,
                    }}
                  />
                ))}
              </Box>
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
