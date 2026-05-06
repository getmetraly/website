import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

const SCAN_DIRS = ["app", "components"];
const SCAN_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".md", ".mdx"]);

const FORBIDDEN = [
  "Pro is available",
  "Start Pro subscription",
  "Upgrade now",
  "Customer portal available",
  "License enforcement works",
  "Enterprise-ready",
  "SOC2-ready",
  "HIPAA-ready",
  "GDPR-compliant",
  "AI assistant works today",
  "Ask Metraly AI anything",
  "Metraly AI is safe",
  "prompt-injection proof",
  "Install plugins from the marketplace",
  "Marketplace is live",
  "Plugin marketplace available",
  "Verified first useful insight in under 5 minutes",
  "Get your first useful insight in under 5 minutes",
  "AI insights in minutes",
  "Zero data is sent to us. Ever.",
  "No telemetry ever"
];

const ALLOWED_CONTEXT_PATTERNS = [
  /do not publish[:\s\S]{0,300}$/i,
  /do not add[:\s\S]{0,300}$/i,
  /do not use[:\s\S]{0,300}$/i,
  /do not claim[:\s\S]{0,300}$/i,
  /not allowed[:\s\S]{0,300}$/i,
  /avoid[:\s\S]{0,300}$/i,
  /unless implementation[:\s\S]{0,300}$/i,
  /must not[:\s\S]{0,300}$/i,
  /should not[:\s\S]{0,300}$/i,
  /unsafe[:\s\S]{0,300}$/i,
  /disallowed[:\s\S]{0,300}$/i,
  /blocked[:\s\S]{0,300}$/i
];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (["node_modules", ".next", ".git", "public"].includes(entry.name)) continue;
      files.push(...walk(fullPath));
    } else if (SCAN_EXTENSIONS.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

function isAllowedContext(content, index) {
  const contextStart = Math.max(0, index - 300);
  const context = content.slice(contextStart, index);
  return ALLOWED_CONTEXT_PATTERNS.some((pattern) => pattern.test(context));
}

const findings = [];

for (const dir of SCAN_DIRS) {
  for (const file of walk(path.join(ROOT, dir))) {
    const content = fs.readFileSync(file, "utf8");
    const lower = content.toLowerCase();

    for (const phrase of FORBIDDEN) {
      const target = phrase.toLowerCase();
      let index = lower.indexOf(target);

      while (index !== -1) {
        if (!isAllowedContext(content, index)) {
          const before = content.slice(0, index);
          const line = before.split(/\r?\n/).length;
          findings.push({ file: path.relative(ROOT, file), line, phrase });
        }
        index = lower.indexOf(target, index + target.length);
      }
    }
  }
}

if (findings.length > 0) {
  console.error("Forbidden website claims found:\n");
  for (const finding of findings) {
    console.error(`- ${finding.file}:${finding.line} — ${finding.phrase}`);
  }
  console.error("\nUse claim-safe wording or place forbidden examples only in explicit disallowed/avoid contexts.");
  process.exit(1);
}

console.log("No forbidden website claims found.");
