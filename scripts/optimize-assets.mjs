/**
 * Compress public images and portfolio videos for production deploy.
 * Run: npm run optimize:assets
 */
import { execFileSync } from "node:child_process";
import { readdir, rename, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const IMAGE_DIRS = [
  "images/brand",
  "images/portfolio",
  "images/services",
  "images/team",
];

const VIDEO_FILES = [
  "videos/portfolio/gelato.mp4",
  "videos/portfolio/roadking-ads.mp4",
  "videos/portfolio/roadking-vertical.mp4",
  "videos/portfolio/roadking-promo.mp4",
  "videos/portfolio/roadking-promotional.mp4",
];

function fmt(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) return;

  const before = (await stat(filePath)).size;
  const tmp = `${filePath}.opt`;

  try {
    const pipeline = sharp(filePath, { failOn: "none" });
    if (ext === ".png") {
      await pipeline
        .png({ quality: 82, compressionLevel: 9, effort: 10 })
        .toFile(tmp);
    } else if (ext === ".webp") {
      await pipeline.webp({ quality: 82 }).toFile(tmp);
    } else {
      await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(tmp);
    }

    const after = (await stat(tmp)).size;
    if (after < before * 0.98) {
      await unlink(filePath);
      await rename(tmp, filePath);
      console.log(
        `  image ${path.relative(publicDir, filePath)}: ${fmt(before)} → ${fmt(after)}`
      );
    } else {
      await unlink(tmp);
    }
  } catch (err) {
    try {
      await unlink(tmp);
    } catch {
      /* ignore */
    }
    console.warn(`  image skip ${filePath}:`, err.message);
  }
}

async function walkImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walkImages(full);
    else await optimizeImage(full);
  }
}

async function main() {
  console.log("Optimizing images…");
  for (const dir of IMAGE_DIRS) {
    const full = path.join(publicDir, dir);
    try {
      await walkImages(full);
    } catch {
      console.warn(`  skip missing dir ${dir}`);
    }
  }

  console.log("\nOptimizing videos…");
  let ffmpegBin;
  try {
    const mod = await import("@ffmpeg-installer/ffmpeg");
    ffmpegBin = mod.path;
  } catch {
    console.warn("  @ffmpeg-installer/ffmpeg not installed — skip videos");
    return;
  }

  for (const rel of VIDEO_FILES) {
    const filePath = path.join(publicDir, rel);
    try {
      const before = (await stat(filePath)).size;
      const tmp = `${filePath}.opt.mp4`;
      const crf = rel.includes("gelato") ? "30" : "28";

      execFileSync(
        ffmpegBin,
        [
          "-y",
          "-i",
          filePath,
          "-c:v",
          "libx264",
          "-crf",
          crf,
          "-preset",
          "medium",
          "-vf",
          "scale=1280:-2",
          "-an",
          "-movflags",
          "+faststart",
          tmp,
        ],
        { stdio: "pipe", maxBuffer: 100 * 1024 * 1024 }
      );

      const after = (await stat(tmp)).size;
      if (after < before) {
        await unlink(filePath);
        await rename(tmp, filePath);
        console.log(`  video ${rel}: ${fmt(before)} → ${fmt(after)}`);
      } else {
        await unlink(tmp);
        console.log(`  video ${rel}: kept (${fmt(before)})`);
      }
    } catch (err) {
      console.warn(`  video skip ${rel}:`, err.message);
    }
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
