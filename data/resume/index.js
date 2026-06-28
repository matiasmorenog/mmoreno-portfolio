import * as en from "@/data/resume/en";
import * as es from "@/data/resume/es";

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
  const ui = getPortfolioUi(locale);

  return {
    name: data.contact.name,
    role: data.contact.title.replace(/\s*\|\s*/g, " — "),
    location: `${data.contact.location} — ${ui.openToRemote}`,
    email: data.contact.email,
    github: data.contact.githubUrl,
    linkedin: data.contact.linkedinUrl,
    profilePhoto: data.contact.profilePhoto,
  };
}

export function getPortfolioSummary(locale = defaultLocale) {
  return getResume(locale).professionalProfile;
}

export function getExperienceHighlights(locale = defaultLocale) {
  return getResume(locale).experience.map((item) => ({
    role: item.role,
    company: item.company,
    period: item.periodDisplay,
    details: item.portfolioSummary,
  }));
}

export function getEducationHighlights(locale = defaultLocale) {
  const data = getResume(locale);
  const certificationsLabel =
    data.locale === "es" ? "Certificaciones" : "Certifications";
  const languagesLabel = data.locale === "es" ? "Idiomas" : "Languages";

  return [
    ...data.education.map(
      (item) => `${item.degree} — ${item.institution} · ${item.period}`,
    ),
    `${certificationsLabel}: ${data.certifications.join(", ")}`,
    `${languagesLabel}: ${data.languages.map((lang) => `${lang.name} (${lang.level})`).join(", ")}`,
  ];
}
