import { describe, expect, it } from "vitest";
import {
  CANONICAL_SITE_URL,
  getLocaleLanguageAlternates,
  getLocalePath,
  getLocaleUrl,
  getStaticCvPaths,
} from "@/data/resume/index";

describe("locale alternates", () => {
  it("builds relative metadata paths", () => {
    expect(getLocalePath("en")).toBe("/");
    expect(getLocalePath("es")).toBe("/es");
    expect(getLocaleLanguageAlternates()).toEqual({
      en: "/",
      es: "/es",
      "x-default": "/",
    });
  });

  it("builds absolute sitemap URLs", () => {
    expect(getLocaleUrl("en")).toBe(`${CANONICAL_SITE_URL}/`);
    expect(getLocaleUrl("es")).toBe(`${CANONICAL_SITE_URL}/es`);
    expect(getLocaleLanguageAlternates({ absolute: true })).toEqual({
      en: `${CANONICAL_SITE_URL}/`,
      es: `${CANONICAL_SITE_URL}/es`,
      "x-default": `${CANONICAL_SITE_URL}/`,
    });
  });

  it("maps static CV download paths", () => {
    expect(getStaticCvPaths("en")).toEqual({
      designed: "/cv/matias-moreno-cv-en.pdf",
      ats: "/cv/matias-moreno-cv-ats-en.pdf",
    });
    expect(getStaticCvPaths("es")).toEqual({
      designed: "/cv/matias-moreno-cv-es.pdf",
      ats: "/cv/matias-moreno-cv-ats-es.pdf",
    });
  });
});
