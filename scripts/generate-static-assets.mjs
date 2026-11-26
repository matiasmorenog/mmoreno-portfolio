/**
 * Resize profile photo to webp ~400px and generate MM favicon / app icons.
 * Run: node scripts/generate-static-assets.mjs
 *
 * Note: writes PNG icons via sharp; writes a real .ico via a small Python/Pillow
 * helper when available, otherwise falls back to PNG bytes named .ico (less ideal).
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const appDir = path.join(root, "app");
const sourcePhoto = path.join(publicDir, "profile-photo.jpg");

function mmSvg(size) {
  const fontSize = Math.round(size * 0.42);
  const radius = Math.round(size * 0.18);
  return Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${radius}" fill="#0f766e"/>
  <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
    font-family="Arial, Helvetica, sans-serif" font-weight="700"
    font-size="${fontSize}" fill="#ffffff">MM</text>
</svg>`);
}

async function generateProfileWebp() {
  const out = path.join(publicDir, "profile-photo.webp");
  await sharp(sourcePhoto)
    .resize(400, 400, { fit: "cover" })
    .webp({ quality: 82 })
    .toFile(out);
  const stat = await fs.stat(out);
  console.log(`Wrote ${path.relative(root, out)} (${stat.size} bytes)`);
}

async function generateMmPng(size, outPath) {
  await sharp(mmSvg(size)).png().toFile(outPath);
  console.log(`Wrote ${path.relative(root, outPath)}`);
}

function generateRealIco(pngSource, icoOut) {
  const py = `
from PIL import Image
master = Image.open(${JSON.stringify(pngSource)}).convert("RGBA")
master.save(${JSON.stringify(icoOut)}, format="ICO", sizes=[(16,16),(32,32),(48,48)])
data = open(${JSON.stringify(icoOut)}, "rb").read()
assert data[:4] == b"\\x00\\x00\\x01\\x00", data[:4]
print("Wrote real ICO", ${JSON.stringify(icoOut)}, len(data))
`;
  const result = spawnSync("python3", ["-c", py], { encoding: "utf8" });
  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout || "Pillow ICO generation failed");
  }
  console.log(result.stdout.trim());
}

async function main() {
  await generateProfileWebp();
  const icon32 = path.join(publicDir, "icon.png");
  const apple = path.join(publicDir, "apple-touch-icon.png");
  const favicon = path.join(publicDir, "favicon.ico");
  await generateMmPng(32, icon32);
  await generateMmPng(180, apple);
  generateRealIco(apple, favicon);

  // Next.js file-based metadata icons (app/)
  await fs.mkdir(appDir, { recursive: true });
  await fs.copyFile(icon32, path.join(appDir, "icon.png"));
  await fs.copyFile(apple, path.join(appDir, "apple-icon.png"));
  await fs.copyFile(favicon, path.join(appDir, "favicon.ico"));
  console.log("Synced app/icon.png, app/apple-icon.png, app/favicon.ico");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
