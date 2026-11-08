import type { NextConfig } from "next";
import imageWidths from "./src/data/image-widths.json";

// The live address of the site, used in WhatsApp product links, share previews and the sitemap.
// Change it here when a custom domain is connected (or set SITE_URL on the host to override it).
const PRODUCTION_URL = "https://scott-s-gadget.pages.dev";

const siteUrl =
  process.env.SITE_URL ||
  (process.env.NODE_ENV === "production" ? PRODUCTION_URL : "http://localhost:3000");

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
