export const CANONICAL_SITE_URL = "https://mmoreno-portfolio.vercel.app";

export const canonicalProfile = {
  name: "Matías Moreno",
  legalName: "Matias Adrian Moreno Gallo",
  headline:
    "Senior Frontend Engineer | React & TypeScript | Performance & Scalable UI Systems",
  linkedinHeadline:
    "Senior Frontend Engineer | React & TypeScript | Performance & Scalable UI Systems",
  location: "Tigre, Buenos Aires, Argentina",
  phone: "+54 11 6353 7809",
  whatsappUrl: "https://wa.me/541163537809",
  email: "matiasmorenog@gmail.com",
  linkedinLabel: "linkedin.com/in/matias-moreno",
  linkedinUrl: "https://www.linkedin.com/in/matias-moreno/",
  githubLabel: "github.com/matiasmorenog",
  githubUrl: "https://github.com/matiasmorenog",
  portfolioLabel: "mmoreno-portfolio.vercel.app",
  portfolioUrl: CANONICAL_SITE_URL,
  profilePhoto: "/profile-photo.jpg",
};

/**
 * Canonical job titles, companies, dates and stack for CV, portfolio and LinkedIn.
 * Keep LinkedIn experience entries aligned with these exact values.
 *
 * Title format: role only — stack and domain live in bullets, not in the title.
 */
export const experienceJobs = [
  {
    id: "ine",
    role: "Senior Frontend Engineer",
    company: "INE",
    period: "2022 – 2025",
    periodDisplay: "Mar 2022 - Jul 2025",
    stack: ["React", "Vue.js", "TypeScript", "Jest", "Web Workers"],
  },
  {
    id: "santander",
    role: "Full Stack Engineer",
    company: "Santander Tecnología Argentina",
    period: "2021 – 2022",
    periodDisplay: "Dec 2021 - Mar 2022",
    stack: ["SQL Server", "Stored Procedures", "Banking Systems"],
  },
  {
    id: "genetrics",
    role: "Full Stack Engineer",
    company: "Genetrics",
    period: "2021 – 2021",
    periodDisplay: "Jul 2021 - Sep 2021",
    stack: ["React", "REST APIs", "Healthcare"],
  },
  {
    id: "envone",
    role: "Full Stack Engineer",
    company: "Envone",
    period: "2015 – 2021",
    periodDisplay: "Jul 2015 - Jun 2021",
    stack: ["Vue.js", "Node.js", "PostgreSQL", "Scrum"],
  },
];

export const linkedInSyncChecklist = [
  `Headline: ${canonicalProfile.linkedinHeadline}`,
  `Location: ${canonicalProfile.location}`,
  ...experienceJobs.map(
    (job) => `${job.company}: ${job.role} (${job.periodDisplay}) · ${job.stack.join(", ")}`,
  ),
];

/** Professional summary — aligned with LinkedIn About (EN / ES). */
export const professionalProfileEn = [
  "I specialize in building scalable SaaS and B2B platforms, with production experience across React and Vue ecosystems — banking, healthcare, and global certification products.",
  "Delivered high-traffic interfaces for 150,000+ active users, combining performance optimization, automated testing, and cross-functional delivery with backend and product teams.",
  "Full-stack foundation with Node.js and PostgreSQL from 6+ years building CRM and B2B products — with frontend as my primary focus.",
  "Previously led frontend ownership of INE's B2B SaaS platform as an individual contributor (no direct reports). Comfortable in regulated, high-compliance environments and agile (Scrum) delivery.",
  "Seeking to contribute frontend architecture leadership, code quality standards, and user-centered product execution in remote or hybrid engineering teams.",
];

export const professionalProfileEs = [
  "Me especializo en construir plataformas SaaS y B2B escalables, con experiencia en producción en los ecosistemas React y Vue — banca, salud y certificaciones globales.",
  "Entregué interfaces de alto tráfico para más de 150.000 usuarios activos, combinando optimización de performance, testing automatizado y trabajo cross-funcional con equipos de backend y producto.",
  "Base full stack con Node.js y PostgreSQL (6+ años en CRM y productos B2B), con el frontend como foco principal.",
  "Lideré la entrega frontend de la plataforma SaaS B2B de INE como contributor individual (sin personas a cargo). Experiencia en entornos regulados de alta compliance y entrega ágil (Scrum).",
  "Busco aportar liderazgo en arquitectura frontend, estándares de calidad de código y ejecución centrada en el usuario en equipos de ingeniería remotos o híbridos.",
];

/** Shared site / metadata description (layout, Open Graph, JSON-LD). */
export const siteDescription =
  "Senior Frontend Engineer specializing in React, TypeScript, and scalable UI systems. Experience in SaaS platforms, banking, healthcare, and B2B solutions.";

/** Person JSON-LD — single source of truth for structured data on the homepage. */
export const jsonLdJobTitle = "Senior Frontend Engineer";

export const jsonLdPersonDescription = professionalProfileEn[0];

export const jsonLdKnowsAbout = [
  "Senior Frontend Engineer",
  "React",
  "TypeScript",
  "Vue.js",
  "Next.js",
  "Node.js",
  "Nest.js",
  "JavaScript",
  "Frontend Architecture",
  "Performance Optimization",
  "Scalable UI Systems",
  "SaaS",
  "B2B",
  "Jest",
  "Cypress",
  "Automated Testing",
  "PostgreSQL",
  "REST APIs",
];

/** Curated SEO keywords for layout metadata (EN default). */
export const siteKeywords = jsonLdKnowsAbout;

export const jsonLdAddress = {
  "@type": "PostalAddress",
  addressLocality: "Tigre",
  addressRegion: "Buenos Aires",
  addressCountry: "AR",
};

export const jsonLdKnowsLanguage = [
  { "@type": "Language", name: "English", alternateName: "en" },
  { "@type": "Language", name: "Spanish", alternateName: "es" },
];
