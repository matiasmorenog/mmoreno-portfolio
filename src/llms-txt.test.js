import { describe, expect, it } from "vitest";
import { buildLlmsTxt } from "@/data/llms-txt";
import { buildRobotsTxt } from "@/data/robots-txt";
import {
  CANONICAL_SITE_URL,
  canonicalProfile,
} from "@/data/resume/canonical";
import { getLocaleUrl } from "@/data/resume/index";
import { getProjects } from "@/data/projects";

describe("llms.txt", () => {
  it("includes site identity, pages, links, skills, and projects", () => {
    const content = buildLlmsTxt();
    const projects = getProjects("en");

    expect(content).toContain(`Site: ${CANONICAL_SITE_URL}`);
    expect(content).toContain(canonicalProfile.name);
    expect(content).toContain("Senior Frontend Engineer");
    expect(content).toContain(getLocaleUrl("en"));
    expect(content).toContain(getLocaleUrl("es"));
    expect(content).toContain(canonicalProfile.githubUrl);
    expect(content).toContain(canonicalProfile.linkedinUrl);
    expect(content).toContain(canonicalProfile.portfolioUrl);
    expect(content).toContain("React");
    expect(content).toContain("INE");
    expect(content).toContain("## Projects");
    for (const project of projects) {
      expect(content).toContain(project.title);
      expect(content).toContain(project.demoUrl);
    }
  });
});

describe("robots.txt", () => {
  it("references llms.txt and sitemap", () => {
    const content = buildRobotsTxt();

    expect(content).toContain("User-agent: *");
    expect(content).toContain("Allow: /");
    expect(content).toContain(`${CANONICAL_SITE_URL}/llms.txt`);
    expect(content).toContain(`Sitemap: ${CANONICAL_SITE_URL}/sitemap.xml`);
  });
});
