/**
 * Generate static CV PDFs into public/cv for <a download> links (no client JS).
 * Run: node scripts/generate-resume-pdfs.mjs
 */
import React from "react";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Register JSX via Node's experimental? Prefer vitest/vite path — use dynamic import
// after ensuring we can resolve the app modules. Fall back to @react-pdf + compiled approach.
async function loadViaVite() {
  const { createServer } = await import("vite");
  const server = await createServer({
    root,
    configFile: false,
    server: { middlewareMode: true },
    appType: "custom",
    resolve: {
      alias: {
        "@": root,
      },
    },
    optimizeDeps: {
      include: ["@react-pdf/renderer"],
    },
    ssr: {
      external: [],
      noExternal: ["@react-pdf/renderer"],
    },
  });

  try {
    const { pdf } = await server.ssrLoadModule("@react-pdf/renderer");
    const { default: ResumePdfDocument } = await server.ssrLoadModule(
      "/components/resume/ResumePdfDocument.jsx"
    );
    const { default: ResumePdfAtsDocument } = await server.ssrLoadModule(
      "/components/resume/ResumePdfAtsDocument.jsx"
    );
    const { getResume } = await server.ssrLoadModule("/data/resume/index.js");

    const outDir = path.join(root, "public", "cv");
    await fs.mkdir(outDir, { recursive: true });

    // @react-pdf needs jpg/png (not webp). Site uses webp; PDFs use jpeg source.
    const photoUrl = path.join(root, "public", "profile-photo.jpg");

    for (const locale of ["en", "es"]) {
      const resume = getResume(locale);
      const resumeForPdf = {
        ...resume,
        contact: {
          ...resume.contact,
          photoUrl,
        },
      };

      const designedBlob = await pdf(
        React.createElement(ResumePdfDocument, { resume: resumeForPdf })
      ).toBuffer();
      const atsBlob = await pdf(
        React.createElement(ResumePdfAtsDocument, { resume: resumeForPdf })
      ).toBuffer();

      const designedPath = path.join(outDir, `matias-moreno-cv-${locale}.pdf`);
      const atsPath = path.join(outDir, `matias-moreno-cv-ats-${locale}.pdf`);
      await fs.writeFile(designedPath, designedBlob);
      await fs.writeFile(atsPath, atsBlob);
      console.log(`Wrote ${path.relative(root, designedPath)}`);
      console.log(`Wrote ${path.relative(root, atsPath)}`);
    }
  } finally {
    await server.close();
  }
}

loadViaVite().catch((error) => {
  console.error(error);
  process.exit(1);
});
