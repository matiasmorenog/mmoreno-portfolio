import { getProjects } from "@/data/projects";
import {
  CANONICAL_SITE_URL,
  canonicalProfile,
  experienceJobs,
  jsonLdKnowsAbout,
  professionalProfileEn,
  siteDescription,
} from "@/data/resume/canonical";
import { experienceContentById } from "@/data/resume/experience-content.en";
import { getLocaleUrl } from "@/data/resume/index";

/**
 * Plain-text site summary for AI crawlers (llms.txt convention).
 * @returns {string}
 */
export function buildLlmsTxt() {
  const experienceLines = experienceJobs.map((job) => {
    const content = experienceContentById[job.id];
    return `- ${content.role} at ${content.company} (${content.periodDisplay})`;
  });

  const skillsLine = jsonLdKnowsAbout
    .filter((skill) => !["Software Engineer", "Frontend Engineer"].includes(skill))
    .join(", ");

  const projectSections = getProjects("en").flatMap((project) => [
    "",
    `**${project.title}** — ${project.demoUrl}`,
    project.summary,
  ]);

  return [
    `# ${canonicalProfile.name} — Portfolio`,
    "",
    `> ${siteDescription}`,
    "",
    `Site: ${CANONICAL_SITE_URL}`,
    "",
    "## About",
    "",
    `${canonicalProfile.name} is a ${canonicalProfile.headline.split(" | ")[0]} based in ${canonicalProfile.location}.`,
    professionalProfileEn[0],
    "",
    "## Key Pages",
    "",
    `- Homepage (EN): ${getLocaleUrl("en")}`,
    `- Homepage (ES): ${getLocaleUrl("es")}`,
    "",
    "## Links",
    "",
    `- Portfolio: ${canonicalProfile.portfolioUrl}`,
    `- GitHub: ${canonicalProfile.githubUrl}`,
    `- LinkedIn: ${canonicalProfile.linkedinUrl}`,
    `- Email: ${canonicalProfile.email}`,
    "",
    "## Skills",
    "",
    skillsLine,
    "",
    "## Experience Highlights",
    "",
    ...experienceLines,
    "",
    "## Projects",
    ...projectSections,
    "",
  ].join("\n");
}
