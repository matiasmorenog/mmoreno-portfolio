import { describe, expect, it } from "vitest";
import {
  CANONICAL_SITE_URL,
  getLocaleLanguageAlternates,
  getLocalePath,
  getLocaleUrl,
} from "@/data/resume/index";

describe("locale alternates", () => {
  it("builds relative metadata paths", () => {
    expect(getLocalePath("en")).toBe("/");
    expect(getLocalePath("es")).toBe("/?lang=es");
    expect(getLocaleLanguageAlternates()).toEqual({
      en: "/",
      es: "/?lang=es",
      "x-default": "/",
    });
  });

  it("builds absolute sitemap URLs", () => {
    expect(getLocaleUrl("en")).toBe(`${CANONICAL_SITE_URL}/`);
    expect(getLocaleUrl("es")).toBe(`${CANONICAL_SITE_URL}/?lang=es`);
    expect(getLocaleLanguageAlternates({ absolute: true })).toEqual({
      en: `${CANONICAL_SITE_URL}/`,
      es: `${CANONICAL_SITE_URL}/?lang=es`,
      "x-default": `${CANONICAL_SITE_URL}/`,
    });
  });
});
