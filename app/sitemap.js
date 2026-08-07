import {
  defaultLocale,
  getLocaleLanguageAlternates,
  getLocaleUrl,
} from "@/data/resume/index";

/** @returns {import("next").MetadataRoute.Sitemap} */
export default function sitemap() {
  return [
    {
      url: getLocaleUrl(defaultLocale),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: getLocaleLanguageAlternates({ absolute: true }),
      },
    },
  ];
}
