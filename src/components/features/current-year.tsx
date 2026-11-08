// The site is built ahead of time, so this is the year of the last build. Any redeploy updates it.
export function CurrentYear() {
  return <>{new Date().getFullYear()}</>;
}
