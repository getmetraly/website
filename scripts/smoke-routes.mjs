const routes = [
  "/",
  "/pricing",
  "/docs",
  "/demo",
  "/ai",
  "/trust",
  "/privacy",
  "/terms",
  "/demo-app",
  "/demo-app/",
];

const baseUrl = process.env.SMOKE_BASE_URL || "http://localhost:3000";

for (const route of routes) {
  const url = `${baseUrl}${route}`;

  const response = await fetch(url, {
    redirect: "follow",
  });

  if (!response.ok) {
    console.error(`Smoke route failed: ${url} -> ${response.status}`);
    process.exit(1);
  }

  const body = await response.text();

  if (!body || body.length < 32) {
    console.error(`Smoke route returned suspiciously small body: ${url}`);
    process.exit(1);
  }

  console.log(`OK ${route}`);
}

console.log("Smoke route checks passed.");
