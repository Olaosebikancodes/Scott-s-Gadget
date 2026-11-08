import widths from '../data/image-widths.json';

// A static export has no image server, so scripts/resize-images.mjs writes WebP copies of every
// product photo at these widths before each build. This picks the closest copy at or above the width asked for.
export default function imageLoader({ src, width }: { src: string; width: number }) {
  if (!src.startsWith('/products/')) return src;
  const w = widths.find((x) => x >= width) ?? widths[widths.length - 1];
  return `/_resized/${w}${src.replace(/\.\w+$/, '.webp')}`;
}
