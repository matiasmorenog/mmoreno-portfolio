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
    expect(screen.queryByText("Describe")).not.toBeInTheDocument();
  });

  it("merges Rocha Describe into one paragraph and keeps Result separate", () => {
    render(<PortfolioPage initialLocale="en" />);

    fireEvent.click(screen.getAllByRole("button", { name: "View case study" })[0]);

    expect(screen.getByText("Describe")).toBeInTheDocument();
    expect(screen.queryByText("Action")).not.toBeInTheDocument();
    expect(
      screen.getByText(
        /Wholesale orders were managed through WhatsApp and Excel[\s\S]*met face-to-face with the client to understand the business problem[\s\S]*designed and shipped the full wholesale ordering flow/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /In daily use by 4 ordering locations; 61 wholesale orders \(delivery notes\) processed in Nov 2026\./
      )
    ).toBeInTheDocument();
  });

  it("merges Nexus Describe into one paragraph without Action heading", () => {
    render(<PortfolioPage initialLocale="en" />);

    fireEvent.click(screen.getAllByRole("button", { name: "View case study" })[1]);

    expect(screen.getByText("Describe")).toBeInTheDocument();
    expect(screen.queryByText("Action")).not.toBeInTheDocument();
    expect(
      screen.getByText(
        /Needed a production-shaped multi-tenant e-commerce foundation[\s\S]*Built a multi-tenant storefront and merchant admin/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Live personal SaaS-oriented platform in production with several isolated stores/
      )
    ).toBeInTheDocument();
  });

  it("points Rocha Live Demo to the public demo and links production-since to prod", () => {
    render(<PortfolioPage initialLocale="en" />);

    const rochaDemo = screen
      .getAllByRole("link", { name: "Live Demo" })
      .find((link) => link.getAttribute("href")?.includes("rocha-cotizador"));

    expect(rochaDemo).toHaveAttribute(
      "href",
      "https://rocha-cotizador-dev.vercel.app/"
    );
    expect(rochaDemo?.getAttribute("href")).not.toBe(
      "https://rocha-cotizador.vercel.app/"
    );
    expect(screen.queryByText("Demo access available")).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: "In production since Jul 2026 (production)",
      })
    ).toHaveAttribute("href", "https://rocha-cotizador.vercel.app/");
    expect(
      screen.getByText(
        /In daily use by 4 ordering locations; 61 wholesale orders \(delivery notes\) processed in Nov 2026\./
      )
    ).toBeInTheDocument();
    expect(screen.getAllByText("NextAuth").length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText("Stripe")).toBeInTheDocument();
    expect(screen.getByText("Resend")).toBeInTheDocument();
    expect(screen.getByText("Vercel Blob")).toBeInTheDocument();
    expect(screen.queryByText("Next.js, TypeScript, PostgreSQL")).not.toBeInTheDocument();

    const nexusDemo = screen
      .getAllByRole("link", { name: "Live Demo" })
      .find((link) => link.getAttribute("href")?.includes("nexus-web-store"));
    expect(nexusDemo).toHaveAttribute("href", "https://nexus-web-store.vercel.app/");
  });

  it("shows Rocha production metrics in Spanish without demo-access hint", () => {
    render(<PortfolioPage initialLocale="es" />);

    expect(screen.queryByText("Acceso demo disponible")).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: "En producción desde jul 2026 (production)",
      })
    ).toHaveAttribute("href", "https://rocha-cotizador.vercel.app/");
    expect(
      screen.getByText(
        /En uso diario por 4 sucursales; 61 pedidos mayoristas \(remitos\) procesados en noviembre 2026\./
      )
    ).toBeInTheDocument();
  });

  it("renders Rocha preview carousel with five slides", () => {
    render(<PortfolioPage initialLocale="en" />);

    const rocha = screen.getByRole("region", { name: "Rocha Cotizador previews" });
    expect(within(rocha).getByRole("button", { name: "Previous image" })).toBeInTheDocument();
    expect(within(rocha).getByRole("button", { name: "Next image" })).toBeInTheDocument();
    expect(within(rocha).getByRole("tab", { name: "Show image 1 of 6" })).toBeInTheDocument();
    expect(within(rocha).getByRole("tab", { name: "Show image 2 of 6" })).toBeInTheDocument();
    expect(within(rocha).getByRole("tab", { name: "Show image 3 of 6" })).toBeInTheDocument();
    expect(within(rocha).getByRole("tab", { name: "Show image 4 of 6" })).toBeInTheDocument();
    expect(within(rocha).getByRole("tab", { name: "Show image 5 of 6" })).toBeInTheDocument();
    expect(within(rocha).getByRole("tab", { name: "Show image 6 of 6" })).toBeInTheDocument();
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
      expect(within(rocha).getByRole("tab", { name: "Show image 1 of 6" })).toHaveAttribute(
        "aria-selected",
        "true"
      );

      fireEvent.pointerEnter(rocha);
      act(() => {
        vi.advanceTimersByTime(2200);
      });
      expect(within(rocha).getByRole("tab", { name: "Show image 2 of 6" })).toHaveAttribute(
        "aria-selected",
        "true"
      );

      fireEvent.pointerLeave(rocha);
      act(() => {
        vi.advanceTimersByTime(4400);
      });
      expect(within(rocha).getByRole("tab", { name: "Show image 2 of 6" })).toHaveAttribute(
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
      expect(within(rocha).getByRole("tab", { name: "Show image 2 of 6" })).toHaveAttribute(
        "aria-selected",
        "true"
      );

      fireEvent.pointerEnter(within(rocha).getByRole("button", { name: "Next image" }));
      act(() => {
        vi.advanceTimersByTime(4400);
      });
      expect(within(rocha).getByRole("tab", { name: "Show image 2 of 6" })).toHaveAttribute(
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

  it("shows email and WhatsApp contact links without a tel button", () => {
    render(<PortfolioPage initialLocale="en" />);

    expect(
      screen.getByRole("link", { name: /Email: matiasmorenog@gmail.com/i })
    ).toHaveAttribute("href", expect.stringContaining("mailto:"));
    expect(
      screen.getByRole("link", { name: /Open WhatsApp chat/i })
    ).toBeInTheDocument();
    expect(document.querySelector('a[href^="tel:"]')).toBeNull();
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
