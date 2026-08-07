export const technologies = {
  react: { label: "React", slug: "react", color: "61DAFB" },
  nextjs: { label: "Next.js", slug: "nextdotjs", color: "000000", darkColor: "FFFFFF" },
  vue: { label: "Vue.js", slug: "vuedotjs", color: "4FC08D" },
  typescript: { label: "TypeScript", slug: "typescript", color: "3178C6" },
  nodejs: { label: "Node.js", slug: "nodedotjs", color: "339933" },
  postgresql: { label: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  jest: { label: "Jest", slug: "jest", color: "C21325" },
  cypress: { label: "Cypress", slug: "cypress", color: "69D3A7" },
  prisma: { label: "Prisma", slug: "prisma", color: "2D3748", darkColor: "FFFFFF" },
  tailwindcss: { label: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
  mercadopago: { label: "Mercado Pago", slug: "mercadopago", color: "009EE3" },
  zustand: { label: "Zustand", slug: "zustand", color: "443E38", darkColor: "FFFFFF" },
  mysql: { label: "MySQL", slug: "mysql", color: "4479A1" },
  nestjs: { label: "NestJS", slug: "nestjs", color: "E0234E" },
  vercel: { label: "Vercel", slug: "vercel", color: "000000", darkColor: "FFFFFF" },
  sqlserver: { label: "SQL Server", slug: "microsoftsqlserver", color: "CC2927" },
};

export function getTechnologyIconUrl(techKey, { forDarkBackground = false } = {}) {
  const tech = technologies[techKey];
  if (!tech) return null;

  const color =
    forDarkBackground && tech.darkColor ? tech.darkColor : tech.color;

  return `https://cdn.simpleicons.org/${tech.slug}/${color}`;
}

/** Local PNG icons (generated for PDF) — preferred in UI for consistent loading. */
export function getTechnologyIconPath(techKey, { isDarkMode = false } = {}) {
  const tech = technologies[techKey];
  if (!tech) return null;

  const variant = isDarkMode && tech.darkColor ? `${techKey}-on-dark` : techKey;
  return `/resume-icons/${variant}.png`;
}

export const portfolioSkillKeys = [
  "react",
  "nextjs",
  "vue",
  "typescript",
  "nodejs",
  "postgresql",
  "jest",
  "cypress",
  "prisma",
  "tailwindcss",
];

const labelToKey = {
  React: "react",
  "Next.js": "nextjs",
  "Vue.js": "vue",
  TypeScript: "typescript",
  "Node.js": "nodejs",
  PostgreSQL: "postgresql",
  Prisma: "prisma",
  NextAuth: null,
  "Mercado Pago": "mercadopago",
  Zustand: "zustand",
  "Tailwind CSS": "tailwindcss",
  Jest: "jest",
  Cypress: "cypress",
  "Jest & Cypress": null,
  "SQL Server": "sqlserver",
  "Web Workers": null,
  "Stored Procedures": null,
  "Banking Systems": null,
  "REST APIs": null,
  Healthcare: null,
  Scrum: null,
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
