/**
 * Resize profile photo to webp ~400px and generate MM favicon / app icons.
 * Run: node scripts/generate-static-assets.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const sourcePhoto = path.join(publicDir, "profile-photo.jpg");

async function generateProfileWebp() {
  const out = path.join(publicDir, "profile-photo.webp");
  await sharp(sourcePhoto)
    .resize(400, 400, { fit: "cover" })
    .webp({ quality: 82 })
    .toFile(out);
  const stat = await fs.stat(out);
  console.log(`Wrote ${path.relative(root, out)} (${stat.size} bytes)`);
}

/** Simple MM monogram on teal — matches site primary. */
async function generateMmPng(size, outPath) {
  const fontSize = Math.round(size * 0.42);
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.18)}" fill="#0f766e"/>
  <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
    font-family="Arial, Helvetica, sans-serif" font-weight="700"
    font-size="${fontSize}" fill="#ffffff">MM</text>
</svg>`;
  await sharp(Buffer.from(svg)).png().toFile(outPath);
  console.log(`Wrote ${path.relative(root, outPath)}`);
}

async function generateFaviconIco() {
  const png32 = await sharp(
    Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#0f766e"/>
  <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
    font-family="Arial, Helvetica, sans-serif" font-weight="700"
    font-size="13" fill="#ffffff">MM</text>
</svg>`)
  )
    .png()
    .toBuffer();

  // Write PNG as favicon.ico fallback (browsers accept PNG-in-.ico widely);
  // also keep icon.png for modern browsers.
  const icoPath = path.join(publicDir, "favicon.ico");
  await fs.writeFile(icoPath, png32);
  console.log(`Wrote ${path.relative(root, icoPath)}`);
}

async function main() {
  await generateProfileWebp();
  await generateMmPng(32, path.join(publicDir, "icon.png"));
  await generateMmPng(180, path.join(publicDir, "apple-touch-icon.png"));
  await generateFaviconIco();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
