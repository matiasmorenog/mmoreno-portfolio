import {
  getLocaleLanguageAlternates,
  getLocaleUrl,
  supportedLocales,
} from "@/data/resume/index";

/** @returns {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  const languages = getLocaleLanguageAlternates({ absolute: true });

  return supportedLocales.map((locale) => ({
    url: getLocaleUrl(locale),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages,
    },
  }));
}
