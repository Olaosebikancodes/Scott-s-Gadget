import credits from '@/data/photo-credits.json';

const BY_SLUG = new Map(credits.map((c) => [c.slug, c]));

// CC0 and public-domain photos need no credit. CC BY and CC BY-SA photos must name the author and licence.
export function photoCredit(slug: string) {
  const c = BY_SLUG.get(slug);
  if (!c || /^(CC0|Public domain)/i.test(c.license)) return null;
  const m = c.license.match(/^CC (BY(?:-SA)?) ([\d.]+)/i);
  return { ...c, licenseUrl: m ? `https://creativecommons.org/licenses/${m[1].toLowerCase()}/${m[2]}/` : c.source };
}
