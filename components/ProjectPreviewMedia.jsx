"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

function resolveSlides(project) {
  if (Array.isArray(project.previewImages) && project.previewImages.length > 0) {
    return project.previewImages
      .filter((item) => item?.src)
      .map((item) => ({
        src: item.src,
        alt: item.alt ?? project.previewAlt ?? project.title,
      }));
  }

  if (project.previewImage) {
    return [
      {
        src: project.previewImage,
        alt: project.previewAlt ?? project.title,
      },
    ];
  }

  return [];
}

export default function ProjectPreviewMedia({
  project,
  PreviewComponent,
  previousLabel = "Previous image",
  nextLabel = "Next image",
}) {
  const slides = useMemo(() => resolveSlides(project), [project]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [preferReducedMotion, setPreferReducedMotion] = useState(false);
  const trackRef = useRef(null);

  const hasVideo = Boolean(project.previewVideo) && !preferReducedMotion;
  const showCarousel = slides.length > 1 && !hasVideo;
  const posterSrc = slides[0]?.src ?? project.previewImage ?? null;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPreferReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    setActiveIndex((current) => {
      if (slides.length === 0) return 0;
      return Math.min(current, slides.length - 1);
    });
  }, [slides.length]);

  const scrollToIndex = useCallback(
    (index) => {
      const track = trackRef.current;
      if (!track) return;
      const width = track.clientWidth;
      track.scrollTo({
        left: width * index,
        behavior: preferReducedMotion ? "auto" : "smooth",
      });
      setActiveIndex(index);
    },
    [preferReducedMotion]
  );

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    const nextIndex = Math.round(track.scrollLeft / track.clientWidth);
    setActiveIndex(nextIndex);
  }, []);

  const goPrev = useCallback(() => {
    if (slides.length < 2) return;
    scrollToIndex((activeIndex - 1 + slides.length) % slides.length);
  }, [activeIndex, scrollToIndex, slides.length]);

  const goNext = useCallback(() => {
    if (slides.length < 2) return;
    scrollToIndex((activeIndex + 1) % slides.length);
  }, [activeIndex, scrollToIndex, slides.length]);

  const handleKeyDown = useCallback(
    (event) => {
      if (!showCarousel) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    },
    [goNext, goPrev, showCarousel]
  );

  const mediaShellSx = {
    display: "block",
    width: "100%",
    aspectRatio: slides.length > 0 || hasVideo ? "40 / 23" : "16 / 9",
    position: "relative",
    overflow: "hidden",
    bgcolor: "#152535",
    textDecoration: "none",
    color: "inherit",
    cursor: project.demoUrl ? "pointer" : "default",
    transition: "opacity 0.2s ease",
    outline: "none",
    "&:hover": project.demoUrl
      ? {
          opacity: 0.92,
        }
      : undefined,
    "&:focus-visible": {
      boxShadow: (theme) => `inset 0 0 0 2px ${theme.palette.primary.main}`,
    },
  };

  if (hasVideo && project.previewVideo) {
    return (
      <Box
        component={project.demoUrl ? "a" : "div"}
        href={project.demoUrl ?? undefined}
        target={project.demoUrl ? "_blank" : undefined}
        rel={project.demoUrl ? "noreferrer" : undefined}
        aria-label={project.demoUrl ? `Open live demo: ${project.title}` : undefined}
        sx={mediaShellSx}
      >
        <Box
          component="video"
          src={project.previewVideo}
          poster={posterSrc ?? undefined}
          muted
          loop
          autoPlay
          playsInline
          aria-label={project.previewAlt ?? `${project.title} preview`}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
            pointerEvents: "none",
          }}
        />
      </Box>
    );
  }

  if (slides.length === 0 && PreviewComponent) {
    return (
      <Box
        component={project.demoUrl ? "a" : "div"}
        href={project.demoUrl ?? undefined}
        target={project.demoUrl ? "_blank" : undefined}
        rel={project.demoUrl ? "noreferrer" : undefined}
        aria-label={project.demoUrl ? `Open live demo: ${project.title}` : undefined}
        sx={{ ...mediaShellSx, aspectRatio: "16 / 9" }}
      >
        <PreviewComponent
          aria-label={project.previewAlt ?? `${project.title} preview`}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            pointerEvents: "none",
          }}
        />
      </Box>
    );
  }

  if (slides.length === 0) {
    return null;
  }

  if (!showCarousel) {
    const slide = slides[0];
    return (
      <Box
        component={project.demoUrl ? "a" : "div"}
        href={project.demoUrl ?? undefined}
        target={project.demoUrl ? "_blank" : undefined}
        rel={project.demoUrl ? "noreferrer" : undefined}
        aria-label={project.demoUrl ? `Open live demo: ${project.title}` : undefined}
        sx={mediaShellSx}
      >
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 768px) 100vw, 960px"
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        ...mediaShellSx,
        cursor: "default",
        "&:hover": undefined,
      }}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${project.title} previews`}
      onKeyDown={handleKeyDown}
    >
      <Box
        ref={trackRef}
        onScroll={handleScroll}
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {slides.map((slide, index) => (
          <Box
            key={slide.src}
            component={project.demoUrl ? "a" : "div"}
            href={project.demoUrl ?? undefined}
            target={project.demoUrl ? "_blank" : undefined}
            rel={project.demoUrl ? "noreferrer" : undefined}
            aria-label={
              project.demoUrl
                ? `Open live demo: ${project.title} (${index + 1} of ${slides.length})`
                : undefined
            }
            aria-hidden={index !== activeIndex ? true : undefined}
            sx={{
              position: "relative",
              flex: "0 0 100%",
              width: "100%",
              height: "100%",
              scrollSnapAlign: "start",
              textDecoration: "none",
              color: "inherit",
              cursor: project.demoUrl ? "pointer" : "default",
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 960px"
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          </Box>
        ))}
      </Box>

      <IconButton
        size="small"
        aria-label={previousLabel}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          goPrev();
        }}
        sx={{
          position: "absolute",
          top: "50%",
          left: 6,
          transform: "translateY(-50%)",
          bgcolor: "rgba(15, 20, 25, 0.55)",
          color: "#fff",
          "&:hover": { bgcolor: "rgba(15, 20, 25, 0.75)" },
        }}
      >
        <ChevronLeftRoundedIcon fontSize="small" />
      </IconButton>

      <IconButton
        size="small"
        aria-label={nextLabel}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          goNext();
        }}
        sx={{
          position: "absolute",
          top: "50%",
          right: 6,
          transform: "translateY(-50%)",
          bgcolor: "rgba(15, 20, 25, 0.55)",
          color: "#fff",
          "&:hover": { bgcolor: "rgba(15, 20, 25, 0.75)" },
        }}
      >
        <ChevronRightRoundedIcon fontSize="small" />
      </IconButton>

      <Box
        component="div"
        role="tablist"
        aria-label={`${project.title} preview slides`}
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 8,
          display: "flex",
          justifyContent: "center",
          gap: 0.75,
          pointerEvents: "none",
        }}
      >
        {slides.map((slide, index) => (
          <Box
            key={`dot-${slide.src}`}
            component="button"
            type="button"
            role="tab"
            aria-label={`Show image ${index + 1} of ${slides.length}`}
            aria-selected={index === activeIndex}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              scrollToIndex(index);
            }}
            sx={{
              pointerEvents: "auto",
              width: 8,
              height: 8,
              borderRadius: "50%",
              border: 0,
              p: 0,
              cursor: "pointer",
              bgcolor: index === activeIndex ? "#fff" : "rgba(255,255,255,0.45)",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
