// Crawls the running site, checks every internal link and #anchor resolves,
// and lists external links for manual review.
// Usage: npm run build && npm start, then in another terminal: npm run check-links [baseUrl]

const base = new URL(process.argv[2] ?? "http://localhost:3000");

const decode = (value) =>
  value.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'");

const hrefsIn = (html) => [...html.matchAll(/<a\b[^>]*?\shref="([^"]*)"/g)].map((match) => decode(match[1]));
const idsIn = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => decode(match[1])));

const pages = new Map(); // pathname -> { status, ids }
const external = new Map(); // url -> Set of pages linking to it
const anchorChecks = []; // { from, pathname, hash }
const queue = ["/"];

while (queue.length > 0) {
  const pathname = queue.shift();
  if (pages.has(pathname)) continue;

  const response = await fetch(new URL(pathname, base), { redirect: "manual" });
  const html = response.ok ? await response.text() : "";
  pages.set(pathname, { status: response.status, ids: idsIn(html) });

  for (const href of hrefsIn(html)) {
    const url = new URL(href, new URL(pathname, base));
    if (url.origin !== base.origin) {
      if (!external.has(url.href)) external.set(url.href, new Set());
      external.get(url.href).add(pathname);
      continue;
    }
    if (url.hash) anchorChecks.push({ from: pathname, pathname: url.pathname, hash: decodeURIComponent(url.hash.slice(1)) });
    if (!pages.has(url.pathname)) queue.push(url.pathname);
  }
}

const problems = [];

for (const [pathname, { status }] of pages) {
  if (status !== 200) problems.push(`${pathname} returned ${status}`);
}

for (const { from, pathname, hash } of anchorChecks) {
  if (!pages.get(pathname)?.ids.has(hash)) problems.push(`${from} links to ${pathname}#${hash}, but that id doesn't exist`);
}

console.log(`Internal pages checked (${pages.size}):`);
for (const [pathname, { status }] of pages) console.log(`  ${status}  ${pathname}`);

console.log(`\nAnchors checked: ${new Set(anchorChecks.map((a) => `${a.pathname}#${a.hash}`)).size} unique`);

console.log(`\nExternal links to confirm (${external.size}):`);
for (const [url, from] of [...external].sort(([a], [b]) => a.localeCompare(b))) {
  console.log(`  ${url}\n      on: ${[...from].join(", ")}`);
}

if (problems.length > 0) {
  console.error(`\n${problems.length} problem(s):`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log("\nAll internal links and anchors resolve.");
