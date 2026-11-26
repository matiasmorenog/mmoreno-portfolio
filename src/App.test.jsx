import React from "react";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import PortfolioPage from "../app/[locale]/portfolio-page";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
}));

describe("App", () => {
  it("renders project content", () => {
    render(<PortfolioPage initialLocale="en" />);

    expect(screen.getByText("Rocha Cotizador")).toBeInTheDocument();
    expect(screen.getByText("Nexus Web Store")).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: "Live Demo" }).length
    ).toBeGreaterThanOrEqual(2);
    expect(
      screen.getAllByRole("button", { name: "View case study" }).length
    ).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText(/Result:/).length).toBeGreaterThanOrEqual(2);
    expect(screen.queryByText("Problem")).not.toBeInTheDocument();
  });

  it("renders Rocha preview carousel with five slides", () => {
    render(<PortfolioPage initialLocale="en" />);

    const rocha = screen.getByRole("region", { name: "Rocha Cotizador previews" });
    expect(within(rocha).getByRole("button", { name: "Previous image" })).toBeInTheDocument();
    expect(within(rocha).getByRole("button", { name: "Next image" })).toBeInTheDocument();
    expect(within(rocha).getByRole("tab", { name: "Show image 1 of 5" })).toBeInTheDocument();
    expect(within(rocha).getByRole("tab", { name: "Show image 2 of 5" })).toBeInTheDocument();
    expect(within(rocha).getByRole("tab", { name: "Show image 3 of 5" })).toBeInTheDocument();
    expect(within(rocha).getByRole("tab", { name: "Show image 4 of 5" })).toBeInTheDocument();
    expect(within(rocha).getByRole("tab", { name: "Show image 5 of 5" })).toBeInTheDocument();
  });

  it("renders Nexus preview carousel with five slides", () => {
    render(<PortfolioPage initialLocale="en" />);

    const nexus = screen.getByRole("region", { name: "Nexus Web Store previews" });
    expect(within(nexus).getByRole("button", { name: "Previous image" })).toBeInTheDocument();
    expect(within(nexus).getByRole("button", { name: "Next image" })).toBeInTheDocument();
    expect(within(nexus).getByRole("tab", { name: "Show image 1 of 5" })).toBeInTheDocument();
    expect(within(nexus).getByRole("tab", { name: "Show image 2 of 5" })).toBeInTheDocument();
    expect(within(nexus).getByRole("tab", { name: "Show image 3 of 5" })).toBeInTheDocument();
    expect(within(nexus).getByRole("tab", { name: "Show image 4 of 5" })).toBeInTheDocument();
    expect(within(nexus).getByRole("tab", { name: "Show image 5 of 5" })).toBeInTheDocument();
  });

  describe("preview carousel hover autoplay", () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it("advances slides while hovered and pauses on leave", () => {
      render(<PortfolioPage initialLocale="en" />);

      const rocha = screen.getByRole("region", { name: "Rocha Cotizador previews" });
      expect(within(rocha).getByRole("tab", { name: "Show image 1 of 5" })).toHaveAttribute(
        "aria-selected",
        "true"
      );

      fireEvent.pointerEnter(rocha);
      act(() => {
        vi.advanceTimersByTime(2200);
      });
      expect(within(rocha).getByRole("tab", { name: "Show image 2 of 5" })).toHaveAttribute(
        "aria-selected",
        "true"
      );

      fireEvent.pointerLeave(rocha);
      act(() => {
        vi.advanceTimersByTime(4400);
      });
      expect(within(rocha).getByRole("tab", { name: "Show image 2 of 5" })).toHaveAttribute(
        "aria-selected",
        "true"
      );
    });

    it("pauses autoplay while hovering carousel controls", () => {
      render(<PortfolioPage initialLocale="en" />);

      const rocha = screen.getByRole("region", { name: "Rocha Cotizador previews" });
      fireEvent.pointerEnter(rocha);
      act(() => {
        vi.advanceTimersByTime(2200);
      });
      expect(within(rocha).getByRole("tab", { name: "Show image 2 of 5" })).toHaveAttribute(
        "aria-selected",
        "true"
      );

      fireEvent.pointerEnter(within(rocha).getByRole("button", { name: "Next image" }));
      act(() => {
        vi.advanceTimersByTime(4400);
      });
      expect(within(rocha).getByRole("tab", { name: "Show image 2 of 5" })).toHaveAttribute(
        "aria-selected",
        "true"
      );
    });
  });

  it("renders positioning and primary CTAs", () => {
    render(<PortfolioPage initialLocale="en" />);

    expect(screen.getByRole("heading", { name: "Quick Links" })).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: "LinkedIn" }).length
    ).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole("link", { name: "GitHub" }).length).toBeGreaterThanOrEqual(
      1
    );
    expect(screen.getByRole("link", { name: "Download CV" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Download ATS CV" })).toBeInTheDocument();
    expect(screen.getAllByText("Software Engineer").length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByText("Working style")).not.toBeInTheDocument();
  });

  it("highlights INE Web Worker technical work", () => {
    render(<PortfolioPage initialLocale="en" />);

    expect(screen.getByText("Technical highlight")).toBeInTheDocument();
    expect(screen.getByText("Web Worker filtering & sorting")).toBeInTheDocument();
    expect(screen.getByText("Coverage: 98% worker logic")).toBeInTheDocument();
    expect(
      screen.getByText("Frontend-focused · Full-stack experienced")
    ).toBeInTheDocument();
  });

  it("shows freelance umbrella and Santander Feb end date", () => {
    render(<PortfolioPage initialLocale="en" />);

    expect(screen.getByText("Freelance & personal projects")).toBeInTheDocument();
    expect(screen.getByText("Aug 2025 – Present")).toBeInTheDocument();
    expect(screen.getByText("Dec 2021 – Feb 2022")).toBeInTheDocument();
    expect(screen.getByText("Mar 2022 – Jul 2025")).toBeInTheDocument();
    expect(screen.queryByText("Dec 2021 – Mar 2022")).not.toBeInTheDocument();
  });
});
