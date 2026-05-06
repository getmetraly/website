import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DEMO_INDEX = path.join(ROOT, "public", "demo-app", "index.html");

const REQUIRED_SNIPPETS = [
  "Synthetic preview only",
  "Do not enter real credentials",
  "source tokens",
  "repository names",
  "customer data",
  "secrets",
  "personal information",
];

if (!fs.existsSync(DEMO_INDEX)) {
  console.error("Demo app index is missing at public/demo-app/index.html");
  process.exit(1);
}

const content = fs.readFileSync(DEMO_INDEX, "utf8");
const missing = REQUIRED_SNIPPETS.filter((snippet) => !content.includes(snippet));

if (missing.length > 0) {
  console.error("Demo app safety banner is missing required wording:\n");
  for (const snippet of missing) {
    console.error(`- ${snippet}`);
  }
  console.error("\nAdd visible synthetic-demo safety copy to public/demo-app/index.html.");
  process.exit(1);
}

console.log("Demo app safety banner found.");
