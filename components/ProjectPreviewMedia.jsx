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
  const suppressScrollRef = useRef(false);

  const hasVideo = Boolean(project.previewVideo) && !preferReducedMotion;
  const showCarousel = slides.length > 1 && !hasVideo;
  const posterSrc = slides[0]?.src ?? project.previewImage ?? null;

  // [cloneLast, ...slides, cloneFirst] so wrap keeps sliding in the same direction.
  const loopSlides = useMemo(() => {
    if (slides.length < 2) return slides;
    return [slides[slides.length - 1], ...slides, slides[0]];
  }, [slides]);

  const realToTrack = useCallback((realIndex) => realIndex + 1, []);

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

  const jumpToTrack = useCallback((trackIndex) => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    suppressScrollRef.current = true;
    track.scrollTo({
      left: track.clientWidth * trackIndex,
      behavior: "auto",
    });
    requestAnimationFrame(() => {
      suppressScrollRef.current = false;
    });
  }, []);

  const scrollToTrack = useCallback(
    (trackIndex, { smooth = true } = {}) => {
      const track = trackRef.current;
      if (!track || track.clientWidth === 0) return;
      track.scrollTo({
        left: track.clientWidth * trackIndex,
        behavior: smooth && !preferReducedMotion ? "smooth" : "auto",
      });
    },
    [preferReducedMotion]
  );

  // Start on the first real slide (track index 1), not the leading clone.
  useEffect(() => {
    if (!showCarousel) return;
    jumpToTrack(1);
    setActiveIndex(0);
  }, [jumpToTrack, showCarousel, slides.length]);

  const settleFromTrackIndex = useCallback(
    (trackIndex) => {
      if (trackIndex === 0) {
        jumpToTrack(slides.length);
        setActiveIndex(slides.length - 1);
        return;
      }
      if (trackIndex === slides.length + 1) {
        jumpToTrack(1);
        setActiveIndex(0);
        return;
      }
      setActiveIndex(trackIndex - 1);
    },
    [jumpToTrack, slides.length]
  );

  const handleScroll = useCallback(() => {
    if (suppressScrollRef.current) return;
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    const trackIndex = Math.round(track.scrollLeft / track.clientWidth);
    settleFromTrackIndex(trackIndex);
  }, [settleFromTrackIndex]);

  const goPrev = useCallback(() => {
    if (slides.length < 2) return;
    if (activeIndex > 0) {
      const next = activeIndex - 1;
      scrollToTrack(realToTrack(next), { smooth: true });
      setActiveIndex(next);
      return;
    }
    // Keep sliding left onto clone of last, then snap to real last.
    scrollToTrack(0, { smooth: true });
    setActiveIndex(slides.length - 1);
  }, [activeIndex, realToTrack, scrollToTrack, slides.length]);

  const goNext = useCallback(() => {
    if (slides.length < 2) return;
    if (activeIndex < slides.length - 1) {
      const next = activeIndex + 1;
      scrollToTrack(realToTrack(next), { smooth: true });
      setActiveIndex(next);
      return;
    }
    // Keep sliding right onto clone of first, then snap to real first.
    scrollToTrack(slides.length + 1, { smooth: true });
    setActiveIndex(0);
  }, [activeIndex, realToTrack, scrollToTrack, slides.length]);

  const goTo = useCallback(
    (target) => {
      if (target === activeIndex || slides.length < 2) return;
      const last = slides.length - 1;

      if (activeIndex === last && target === 0) {
        scrollToTrack(slides.length + 1, { smooth: true });
        setActiveIndex(0);
        return;
      }
      if (activeIndex === 0 && target === last) {
        scrollToTrack(0, { smooth: true });
        setActiveIndex(last);
        return;
      }

      const distance = Math.abs(target - activeIndex);
      scrollToTrack(realToTrack(target), { smooth: distance === 1 });
      setActiveIndex(target);
    },
    [activeIndex, realToTrack, scrollToTrack, slides.length]
  );

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
        {loopSlides.map((slide, trackIndex) => {
          const isClone = trackIndex === 0 || trackIndex === loopSlides.length - 1;
          const realIndex = isClone
            ? trackIndex === 0
              ? slides.length - 1
              : 0
            : trackIndex - 1;

          return (
            <Box
              key={
                trackIndex === 0
                  ? `clone-start-${slide.src}`
                  : trackIndex === loopSlides.length - 1
                    ? `clone-end-${slide.src}`
                    : slide.src
              }
              component={project.demoUrl ? "a" : "div"}
              href={project.demoUrl ?? undefined}
              target={project.demoUrl ? "_blank" : undefined}
              rel={project.demoUrl ? "noreferrer" : undefined}
              aria-label={
                project.demoUrl && !isClone
                  ? `Open live demo: ${project.title} (${realIndex + 1} of ${slides.length})`
                  : undefined
              }
              aria-hidden={isClone || realIndex !== activeIndex ? true : undefined}
              tabIndex={isClone ? -1 : undefined}
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
                alt={isClone ? "" : slide.alt}
                fill
                sizes="(max-width: 768px) 100vw, 960px"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </Box>
          );
        })}
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
          left: "50%",
          bottom: 10,
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.85,
          px: 1.1,
          py: 0.55,
          borderRadius: 999,
          bgcolor: "rgba(15, 20, 25, 0.55)",
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
              goTo(index);
            }}
            sx={{
              pointerEvents: "auto",
              width: index === activeIndex ? 18 : 9,
              height: 9,
              borderRadius: 999,
              border: 0,
              p: 0,
              cursor: "pointer",
              bgcolor: index === activeIndex ? "#fff" : "rgba(255,255,255,0.5)",
              transition: "width 0.15s ease, background-color 0.15s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
