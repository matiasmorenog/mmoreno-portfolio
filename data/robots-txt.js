import { CANONICAL_SITE_URL } from "@/data/resume/canonical";

/** @returns {string} */
export function buildRobotsTxt() {
  return [
    "User-agent: *",
    "Allow: /",
    "",
    `# AI crawler context: ${CANONICAL_SITE_URL}/llms.txt`,
    "",
    `Sitemap: ${CANONICAL_SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");
}
