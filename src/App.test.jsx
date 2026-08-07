import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PortfolioPage from "../app/portfolio-page";

describe("App", () => {
  it("renders project content", () => {
    render(<PortfolioPage />);

    expect(screen.getByText("Rocha Cotizador")).toBeInTheDocument();
    expect(screen.getByText("Nexus Web Store")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Live Demo" }).length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText("Problem").length).toBeGreaterThanOrEqual(2);
  });

  it("renders quick links actions", () => {
    render(<PortfolioPage />);

    expect(screen.getByRole("heading", { name: "Quick Links" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "LinkedIn" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "GitHub" })).toBeInTheDocument();
  });
});
