export const CANONICAL_SITE_URL = "https://mmoreno-portfolio.vercel.app";

export const canonicalProfile = {
  name: "Matías Moreno",
  legalName: "Matias Adrian Moreno Gallo",
  headline: "Software Engineer | React, TypeScript, Next.js & Node.js",
  linkedinHeadline: "Software Engineer | React, TypeScript, Next.js & Node.js",
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
 * Canonical job ids, dates and stack for CV, portfolio and LinkedIn.
 * Localized role/company/periodDisplay/highlights live in experience-content.*.js.
 *
 * Reverse chronological order by end/start date.
 */
export const experienceJobs = [
  {
    id: "rocha",
    period: "2026 – Present",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth"],
  },
  {
    id: "ine",
    period: "2022 – 2025",
    stack: ["React", "Vue.js", "TypeScript", "Jest", "Web Workers"],
  },
  {
    id: "santander",
    period: "2021 – 2022",
    stack: ["SQL", "Stored Procedures"],
  },
  {
    id: "genetrics",
    period: "2021 – 2021",
    stack: ["React", "Material UI", "REST APIs"],
  },
  {
    id: "envone",
    period: "2015 – 2021",
    stack: ["Vue.js", "Node.js", "Express", "PostgreSQL", "MySQL"],
  },
];

export const linkedInSyncChecklist = [
  `Headline: ${canonicalProfile.linkedinHeadline}`,
  `Location: ${canonicalProfile.location}`,
  ...experienceJobs.map((job) => `${job.id}: (${job.period}) · ${job.stack.join(", ")}`),
];

/** Professional summary — single source of truth (EN / ES). */
export const professionalProfileEn = [
  "Software Engineer with 10+ years of experience building production web applications across SaaS, B2B, healthcare, banking, and industrial platforms. Strong frontend background in React, TypeScript, Vue.js, and web performance, combined with full-stack experience in Next.js, Node.js, REST APIs, and PostgreSQL. Experienced in delivering production features, complex business logic, API integrations, testing, and end-to-end software development.",
];

export const professionalProfileEs = [
  "Ingeniero de Software con más de 10 años de experiencia desarrollando aplicaciones web en producción para plataformas SaaS, B2B, salud, banca y sector industrial. Sólida experiencia frontend con React, TypeScript, Vue.js y optimización de rendimiento web, combinada con experiencia full-stack en Next.js, Node.js, APIs REST y PostgreSQL. Experiencia desarrollando funcionalidades en producción, lógica de negocio compleja, integraciones con APIs, testing y desarrollo de software end-to-end.",
];

/** Shared site / metadata description (layout, Open Graph, JSON-LD). */
export const siteDescription =
  "Software Engineer with a strong React, TypeScript, and Next.js frontend background, plus full-stack experience with Node.js, REST APIs, and PostgreSQL. Production work across SaaS, B2B, healthcare, banking, and industrial platforms.";

/** Person JSON-LD — single source of truth for structured data on the homepage. */
export const jsonLdJobTitle = "Software Engineer";

export const jsonLdPersonDescription = professionalProfileEn[0];

export const jsonLdKnowsAbout = [
  "Software Engineer",
  "Frontend Engineer",
  "React",
  "TypeScript",
  "Next.js",
  "Vue.js",
  "Node.js",
  "JavaScript",
  "PostgreSQL",
  "REST APIs",
  "Prisma",
  "Jest",
  "Cypress",
  "Web Performance",
  "SaaS",
  "B2B",
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
