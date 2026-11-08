// Reading the clock during a prerender is a build error with Cache Components.
// A cached function computes the year once and refreshes it when the cache revalidates.
async function getYear() {
  'use cache';
  return new Date().getFullYear();
}

export async function CurrentYear() {
  return <>{await getYear()}</>;
}
