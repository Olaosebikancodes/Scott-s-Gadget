import type { NextConfig } from "next";
import imageWidths from "./src/data/image-widths.json";

// The address that product links in WhatsApp messages and share previews point to.
// Set SITE_URL on the host once a custom domain is live; until then the host's own address is used.
const siteUrl =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  process.env.CF_PAGES_URL ||
  "http://localhost:3000";

const nextConfig: NextConfig = {
  // Build to plain HTML, CSS and JS in /out. No server is needed, so any static host works.
  output: "export",
  env: {
    SITE_URL: siteUrl.replace(/\/$/, ""),
  },
  images: {
    // No image server in a static export: photos are pre-resized by scripts/resize-images.mjs.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: imageWidths.filter((w) => w >= 640),
    imageSizes: imageWidths.filter((w) => w < 640),
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
