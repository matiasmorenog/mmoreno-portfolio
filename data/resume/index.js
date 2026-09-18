import * as en from "@/data/resume/en";
import * as es from "@/data/resume/es";
import {
  CANONICAL_SITE_URL,
  canonicalProfile,
  linkedInSyncChecklist,
} from "@/data/resume/canonical";

export { CANONICAL_SITE_URL, canonicalProfile, linkedInSyncChecklist };

const locales = {
  en,
  es,
};

export const supportedLocales = ["en", "es"];
export const defaultLocale = "en";
export const localeQueryParam = "lang";

export function parseLocale(value) {
  if (value && supportedLocales.includes(value)) {
    return value;
  }
  return defaultLocale;
}

/** Relative path for Next.js metadata (resolved via metadataBase). */
export function getLocalePath(locale = defaultLocale) {
  if (locale === defaultLocale) {
    return "/";
  }
  return `/?${localeQueryParam}=${locale}`;
}

/** Absolute URL for sitemap and external references. */
export function getLocaleUrl(locale = defaultLocale) {
  return `${CANONICAL_SITE_URL}${getLocalePath(locale)}`;
}

/**
 * hreflang alternates keyed by locale (plus x-default).
 * @param {{ absolute?: boolean }} options — absolute URLs for sitemap; relative paths for metadata.
 */
export function getLocaleLanguageAlternates({ absolute = false } = {}) {
  const toHref = absolute ? getLocaleUrl : getLocalePath;
  const languages = Object.fromEntries(
    supportedLocales.map((locale) => [locale, toHref(locale)])
  );
  languages["x-default"] = toHref(defaultLocale);
  return languages;
}

export function getResumeContent(locale = defaultLocale) {
  return locales[locale] ?? locales[defaultLocale];
}

export function getResume(locale = defaultLocale) {
  return getResumeContent(locale).resume;
}

export function getPortfolioUi(locale = defaultLocale) {
  return getResumeContent(locale).portfolioUi;
}

export function getResumePdfFilenames(locale = defaultLocale) {
  const content = getResumeContent(locale);
  return {
    designed: content.resumePdfFilename,
    ats: content.resumePdfAtsFilename,
  };
}

export function getPortfolioProfile(locale = defaultLocale) {
  const { resume: data } = getResumeContent(locale);
  const [headlineRole, ...headlineRest] = data.contact.title
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);

  return {
    name: data.contact.name,
    role: headlineRole ?? data.contact.title,
    stackLine: headlineRest.join(" · ") || null,
    location: data.contact.location,
    email: data.contact.email,
    phone: data.contact.phone,
    whatsapp: data.contact.whatsappUrl,
    github: data.contact.githubUrl,
    linkedin: data.contact.linkedinUrl,
    profilePhoto: data.contact.profilePhoto,
  };
}

export function getPortfolioSummary(locale = defaultLocale) {
  return getResume(locale).professionalProfile;
}

const COMPACT_EXPERIENCE_IDS = new Set(["santander", "genetrics"]);

export function getExperienceHighlights(locale = defaultLocale) {
  return getResume(locale).experience.map((item) => ({
    id: item.id,
    role: item.role,
    company: item.company,
    period: item.periodDisplay,
    stack: item.stack ?? [],
    details: item.portfolioSummary,
    highlights: item.highlights ?? [],
    technicalHighlight: item.technicalHighlight ?? null,
    compact: COMPACT_EXPERIENCE_IDS.has(item.id),
  }));
}

export function getEducationHighlights(locale = defaultLocale) {
  const data = getResume(locale);
  const certificationsLabel = data.locale === "es" ? "Certificaciones" : "Certifications";
  const languagesLabel = data.locale === "es" ? "Idiomas" : "Languages";

  return [
    ...data.education.map(
      (item) => `${item.degree} — ${item.institution} · ${item.period}`
    ),
    ...(data.certifications.length > 0
      ? [`${certificationsLabel}: ${data.certifications.join(", ")}`]
      : []),
    `${languagesLabel}: ${data.languages.map((lang) => `${lang.name} (${lang.level})`).join(", ")}`,
  ];
}
