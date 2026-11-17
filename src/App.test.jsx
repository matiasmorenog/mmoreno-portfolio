import React from "react";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PortfolioPage from "../app/portfolio-page";

describe("App", () => {
  it("renders project content", () => {
    render(<PortfolioPage />);

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

  it("renders Rocha preview carousel with three slides", () => {
    render(<PortfolioPage />);

    const rocha = screen.getByRole("region", { name: "Rocha Cotizador previews" });
    expect(within(rocha).getByRole("button", { name: "Previous image" })).toBeInTheDocument();
    expect(within(rocha).getByRole("button", { name: "Next image" })).toBeInTheDocument();
    expect(within(rocha).getByRole("tab", { name: "Show image 1 of 3" })).toBeInTheDocument();
    expect(within(rocha).getByRole("tab", { name: "Show image 2 of 3" })).toBeInTheDocument();
    expect(within(rocha).getByRole("tab", { name: "Show image 3 of 3" })).toBeInTheDocument();
  });

  it("renders Nexus preview carousel with five slides", () => {
    render(<PortfolioPage />);

    const nexus = screen.getByRole("region", { name: "Nexus Web Store previews" });
    expect(within(nexus).getByRole("button", { name: "Previous image" })).toBeInTheDocument();
    expect(within(nexus).getByRole("button", { name: "Next image" })).toBeInTheDocument();
    expect(within(nexus).getByRole("tab", { name: "Show image 1 of 5" })).toBeInTheDocument();
    expect(within(nexus).getByRole("tab", { name: "Show image 2 of 5" })).toBeInTheDocument();
    expect(within(nexus).getByRole("tab", { name: "Show image 3 of 5" })).toBeInTheDocument();
    expect(within(nexus).getByRole("tab", { name: "Show image 4 of 5" })).toBeInTheDocument();
    expect(within(nexus).getByRole("tab", { name: "Show image 5 of 5" })).toBeInTheDocument();
  });

  it("renders positioning and primary CTAs", () => {
    render(<PortfolioPage />);

    expect(screen.getByRole("heading", { name: "Quick Links" })).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: "LinkedIn" }).length
    ).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole("link", { name: "GitHub" }).length).toBeGreaterThanOrEqual(
      1
    );
    expect(screen.getByRole("button", { name: "Download CV" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Download ATS CV" })).toBeInTheDocument();
    expect(screen.getAllByText("Software Engineer").length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByText("Working style")).not.toBeInTheDocument();
  });

  it("highlights INE Web Worker technical work", () => {
    render(<PortfolioPage />);

    expect(screen.getByText("Technical highlight")).toBeInTheDocument();
    expect(screen.getByText("Web Worker filtering & sorting")).toBeInTheDocument();
    expect(screen.getByText("Coverage: 98% worker logic")).toBeInTheDocument();
    expect(
      screen.getByText("Frontend-focused · Full-stack experienced")
    ).toBeInTheDocument();
  });
});
