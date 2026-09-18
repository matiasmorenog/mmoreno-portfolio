export const technologies = {
  react: { label: "React", slug: "react", color: "61DAFB" },
  typescript: { label: "TypeScript", slug: "typescript", color: "3178C6" },
  nextjs: { label: "Next.js", slug: "nextdotjs", color: "000000", darkColor: "FFFFFF" },
  javascript: { label: "JavaScript", slug: "javascript", color: "F7DF1E" },
  nodejs: { label: "Node.js", slug: "nodedotjs", color: "339933" },
  vue: { label: "Vue.js", slug: "vuedotjs", color: "4FC08D" },
  postgresql: { label: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  express: { label: "Express", slug: "express", color: "000000", darkColor: "FFFFFF" },
  zustand: { label: "Zustand", slug: "zustand", color: "443E38", darkColor: "FFFFFF" },
  git: { label: "Git", slug: "git", color: "F05032" },
  jest: { label: "Jest", slug: "jest", color: "C21325" },
  cypress: { label: "Cypress", slug: "cypress", color: "69D3A7" },
  prisma: { label: "Prisma", slug: "prisma", color: "2D3748", darkColor: "FFFFFF" },
  tailwindcss: { label: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
  mercadopago: { label: "Mercado Pago", slug: "mercadopago", color: "009EE3" },
  mysql: { label: "MySQL", slug: "mysql", color: "4479A1" },
  nestjs: { label: "NestJS", slug: "nestjs", color: "E0234E" },
  vercel: { label: "Vercel", slug: "vercel", color: "000000", darkColor: "FFFFFF" },
};

export function getTechnologyIconUrl(techKey, { forDarkBackground = false } = {}) {
  const tech = technologies[techKey];
  if (!tech) return null;

  const color = forDarkBackground && tech.darkColor ? tech.darkColor : tech.color;

  return `https://cdn.simpleicons.org/${tech.slug}/${color}`;
}

/** Local PNG icons (generated for PDF) — preferred in UI for consistent loading. */
export function getTechnologyIconPath(techKey, { isDarkMode = false } = {}) {
  const tech = technologies[techKey];
  if (!tech) return null;

  const variant = isDarkMode && tech.darkColor ? `${techKey}-on-dark` : techKey;
  return `/resume-icons/${variant}.png`;
}

/** Compact core skills shown in the portfolio icon grid (~10). */
export const portfolioSkillKeys = [
  "react",
  "typescript",
  "nextjs",
  "javascript",
  "nodejs",
  "vue",
  "postgresql",
  "express",
  "zustand",
  "git",
];

const labelToKey = {
  React: "react",
  "Next.js": "nextjs",
  "Vue.js": "vue",
  TypeScript: "typescript",
  JavaScript: "javascript",
  "Node.js": "nodejs",
  PostgreSQL: "postgresql",
  Prisma: "prisma",
  NextAuth: null,
  Express: "express",
  Git: "git",
  MySQL: "mysql",
  SQL: null,
  "Material UI": null,
  "Mercado Pago": "mercadopago",
  Zustand: "zustand",
  "Tailwind CSS": "tailwindcss",
  Jest: "jest",
  Cypress: "cypress",
  "Jest & Cypress": null,
  "Web Workers": null,
  "Stored Procedures": null,
  "REST APIs": null,
};

export function resolveTechnology(label) {
  const key = labelToKey[label];
  if (!key) return null;
  return technologies[key] ? { key, ...technologies[key] } : null;
}

export function resolveTechnologyKeys(labels = []) {
  const keys = [];

  for (const label of labels) {
    if (label === "Jest & Cypress") {
      keys.push("jest", "cypress");
      continue;
    }

    const tech = resolveTechnology(label);
    if (tech && !keys.includes(tech.key)) {
      keys.push(tech.key);
    }
  }

  return keys;
}
