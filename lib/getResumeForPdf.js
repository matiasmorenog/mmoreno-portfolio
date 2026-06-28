import { getResume } from "@/data/resume";

export function getResumeForPdf(locale = "en") {
  const resume = getResume(locale);
  const photoUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${resume.contact.profilePhoto}`
      : undefined;

  return {
    ...resume,
    contact: {
      ...resume.contact,
      photoUrl,
    },
  };
}
