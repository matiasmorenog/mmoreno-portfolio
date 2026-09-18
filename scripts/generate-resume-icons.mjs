import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const technologies = {
  react: { slug: "react", color: "61DAFB" },
  typescript: { slug: "typescript", color: "3178C6" },
  nextjs: { slug: "nextdotjs", color: "000000", darkColor: "FFFFFF" },
  javascript: { slug: "javascript", color: "F7DF1E" },
  nodejs: { slug: "nodedotjs", color: "339933" },
  vue: { slug: "vuedotjs", color: "4FC08D" },
  postgresql: { slug: "postgresql", color: "4169E1" },
  express: { slug: "express", color: "000000", darkColor: "FFFFFF" },
  zustand: { slug: "zustand", color: "443E38", darkColor: "FFFFFF" },
  git: { slug: "git", color: "F05032" },
  jest: { slug: "jest", color: "C21325" },
  cypress: { slug: "cypress", color: "69D3A7" },
  prisma: { slug: "prisma", color: "2D3748", darkColor: "FFFFFF" },
  tailwindcss: { slug: "tailwindcss", color: "06B6D4" },
  mercadopago: { slug: "mercadopago", color: "009EE3" },
  mysql: { slug: "mysql", color: "4479A1" },
  nestjs: { slug: "nestjs", color: "E0234E" },
  vercel: { slug: "vercel", color: "000000", darkColor: "FFFFFF" },
  sqlserver: { slug: "microsoftsqlserver", color: "CC2927" },
};

const customSvgByTechKey = {
  zustand: (color) =>
    `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#${color}" d="M12 3c-2.8 0-5 2.2-5 5 0 1.2.4 2.3 1.1 3.2-.8.5-1.4 1.4-1.4 2.4v1.4c0 1.7 1.3 3 3 3h4.6c1.7 0 3-1.3 3-3v-1.4c0-1-.6-1.9-1.4-2.4.7-.9 1.1-2 1.1-3.2 0-2.8-2.2-5-5-5zm-2.8 5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9-.9.4-.9.9.4.9.9.9zm5.6 0c.5 0 .9-.4.9-.9s-.4-.9-.9-.9-.9.4-.9.9.4.9.9.9z"/></svg>`,
};

const contactIcons = {
  location: {
    color: "8FA8BC",
    custom: (color) =>
      `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#${color}" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
  },
  phone: {
    color: "8FA8BC",
    custom: (color) =>
      `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#${color}" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
  },
  email: {
    color: "8FA8BC",
    custom: (color) =>
      `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#${color}" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/></svg>`,
  },
  linkedin: {
    color: "0A66C2",
    custom: (color) =>
      `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#${color}" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  github: { slug: "github", color: "FFFFFF" },
  portfolio: {
    color: "7DE2DB",
    custom: (color) =>
      `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#${color}" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
  },
  whatsapp: { slug: "whatsapp", color: "25D366" },
};

const ICON_SIZE = 48;
const publicIconsDir = path.join(rootDir, "public", "resume-icons");
const outputFile = path.join(rootDir, "data", "resume", "pdf-icons.js");

function getIconColor(tech, forDarkBackground) {
  return forDarkBackground && tech.darkColor ? tech.darkColor : tech.color;
}

async function fetchSvg(itemKey, slug, color, customSvg) {
  if (customSvg) {
    return customSvg(color);
  }

  if (customSvgByTechKey[itemKey]) {
    return customSvgByTechKey[itemKey](color);
  }

  const sources = [
    `https://cdn.simpleicons.org/${slug}/${color}`,
    `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`,
  ];

  for (const source of sources) {
    const response = await fetch(source);
    if (!response.ok) continue;

    const svg = await response.text();
    if (!svg.includes("<svg")) continue;

    if (source.includes("jsdelivr")) {
      if (svg.includes('fill="currentColor"')) {
        return svg.replace(/fill="currentColor"/g, `fill="#${color}"`);
      }

      if (!svg.includes(`fill="#${color}"`)) {
        return svg.replace(/<path /g, `<path fill="#${color}" `);
      }
    }

    return svg;
  }

  throw new Error(`Failed to fetch icon for ${techKey} (${slug}/${color})`);
}

async function svgToPng(svg) {
  return sharp(Buffer.from(svg)).resize(ICON_SIZE, ICON_SIZE).png().toBuffer();
}

async function main() {
  await mkdir(publicIconsDir, { recursive: true });

  const pdfIconDataUrls = {};

  for (const [techKey, tech] of Object.entries(technologies)) {
    for (const forDarkBackground of [false, true]) {
      const color = getIconColor(tech, forDarkBackground);
      const variantKey = forDarkBackground ? `${techKey}-on-dark` : techKey;
      const fileName = `${variantKey}.png`;

      const svg = await fetchSvg(techKey, tech.slug, color);
      const pngBuffer = await svgToPng(svg);
      const dataUrl = `data:image/png;base64,${pngBuffer.toString("base64")}`;

      await writeFile(path.join(publicIconsDir, fileName), pngBuffer);
      pdfIconDataUrls[variantKey] = dataUrl;

      console.log(`Generated ${fileName}`);
    }
  }

  for (const [iconKey, icon] of Object.entries(contactIcons)) {
    const variantKey = `contact-${iconKey}`;
    const fileName = `${variantKey}.png`;

    const svg = await fetchSvg(iconKey, icon.slug, icon.color, icon.custom);
    const pngBuffer = await svgToPng(svg);
    const dataUrl = `data:image/png;base64,${pngBuffer.toString("base64")}`;

    await writeFile(path.join(publicIconsDir, fileName), pngBuffer);
    pdfIconDataUrls[variantKey] = dataUrl;

    console.log(`Generated ${fileName}`);
  }

  const fileContents = `// Generated by scripts/generate-resume-icons.mjs — do not edit manually.
export const pdfIconDataUrls = ${JSON.stringify(pdfIconDataUrls, null, 2)};
`;

  await writeFile(outputFile, fileContents);
  console.log(`Wrote ${path.relative(rootDir, outputFile)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
