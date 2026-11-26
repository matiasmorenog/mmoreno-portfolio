import React from "react";
import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ScrollReveal from "@/components/ScrollReveal";

describe("ScrollReveal", () => {
  let observerCallback;
  let observe;
  let disconnect;

  beforeEach(() => {
    observe = vi.fn();
    disconnect = vi.fn();
    observerCallback = null;

    class MockIntersectionObserver {
      constructor(callback) {
        observerCallback = callback;
      }

      observe = observe;
      unobserve = vi.fn();
      disconnect = disconnect;
    }

    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("starts hidden and reveals once when intersecting", () => {
    render(
      <ScrollReveal>
        <p>Reveal me</p>
      </ScrollReveal>
    );

    const node = screen.getByText("Reveal me").parentElement;
    expect(node).toHaveStyle({ opacity: "0" });
    expect(observe).toHaveBeenCalled();

    act(() => {
      observerCallback([{ isIntersecting: true }]);
    });

    expect(node).toHaveStyle({ opacity: "1" });
    expect(disconnect).toHaveBeenCalled();
  });

  it("shows immediately when prefers-reduced-motion is set", () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === "(prefers-reduced-motion: reduce)",
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(
      <ScrollReveal>
        <p>Always visible</p>
      </ScrollReveal>
    );

    expect(screen.getByText("Always visible").parentElement).toHaveStyle({
      opacity: "1",
    });
    expect(observe).not.toHaveBeenCalled();
  });
});
