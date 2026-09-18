import React from "react";
import { render, screen } from "@testing-library/react";
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
    expect(screen.getAllByText("Problem").length).toBeGreaterThanOrEqual(2);
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
