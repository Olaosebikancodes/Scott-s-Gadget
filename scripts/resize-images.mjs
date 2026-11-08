// Writes WebP copies of every photo in public/products at the widths in src/data/image-widths.json.
// Runs automatically before `npm run dev` and `npm run build`; photos that haven't changed are skipped.
import { readFileSync } from 'node:fs';
import { mkdir, readdir, stat } from 'node:fs/promises';
import sharp from 'sharp';

const SRC = 'public/products';
const OUT = 'public/_resized';
const widths = JSON.parse(readFileSync('src/data/image-widths.json', 'utf8'));

const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
let written = 0;
for (const file of files) {
  const src = `${SRC}/${file}`;
  const srcTime = (await stat(src)).mtimeMs;
  for (const w of widths) {
    const dir = `${OUT}/${w}/products`;
    const out = `${dir}/${file.replace(/\.\w+$/, '.webp')}`;
    const outTime = await stat(out).then((s) => s.mtimeMs, () => 0);
    if (outTime >= srcTime) continue;
    await mkdir(dir, { recursive: true });
    await sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
    written++;
  }
}
console.log(`Product photos: ${written} resized, ${files.length * widths.length - written} already up to date.`);
