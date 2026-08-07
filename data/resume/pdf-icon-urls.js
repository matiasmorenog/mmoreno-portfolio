import { technologies } from "@/data/technologies";
import { pdfIconDataUrls } from "@/data/resume/pdf-icons";

export const contactIconKeys = [
  "location",
  "phone",
  "email",
  "linkedin",
  "github",
  "portfolio",
  "whatsapp",
];

export function getTechnologyPdfIconUrl(techKey, { forDarkBackground = false } = {}) {
  const tech = technologies[techKey];
  if (!tech) return null;

  const variantKey = forDarkBackground ? `${techKey}-on-dark` : techKey;
  return pdfIconDataUrls[variantKey] ?? null;
}

export function getContactPdfIconUrl(iconKey) {
  if (!contactIconKeys.includes(iconKey)) return null;
  return pdfIconDataUrls[`contact-${iconKey}`] ?? null;
}
