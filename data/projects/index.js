import { projects as projectDefinitions } from "@/data/projects/projects";
import { projectContentById } from "@/data/projects/content";

export { projects } from "@/data/projects/projects";

export function getProjects(locale = "en") {
  const contentLocale = locale === "es" ? "es" : "en";

  return projectDefinitions.map((project) => {
    const localized = projectContentById[project.id]?.[contentLocale] ?? {};

    return {
      ...project,
      ...localized,
      caseStudy: localized.caseStudy ?? null,
    };
  });
}
