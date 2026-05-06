import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const postsPath = join(__dirname, "..", "content", "blog", "posts.ts");
const source = readFileSync(postsPath, "utf8");

const slugMatches = [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
const titleMatches = [...source.matchAll(/title:\s*"([^"]+)"/g)].map((match) => match[1]);
const excerptMatches = [...source.matchAll(/excerpt:\s*\n?\s*"([^"]+)"/g)].map((match) => match[1]);
const canonicalMatches = [...source.matchAll(/canonicalPath:\s*"([^"]+)"/g)].map((match) => match[1]);

const errors = [];

function assertUnique(values, label) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) {
      errors.push(`Duplicate ${label}: ${value}`);
    }
    seen.add(value);
  }
}

assertUnique(slugMatches, "slug");
assertUnique(titleMatches, "title");

for (const slug of slugMatches) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    errors.push(`Invalid slug format: ${slug}`);
  }
}

for (const path of canonicalMatches) {
  if (!path.startsWith("/blog/")) {
    errors.push(`Invalid canonicalPath: ${path}`);
  }
}

if (slugMatches.length === 0) {
  errors.push("No blog posts found in content/blog/posts.ts");
}

if (slugMatches.length !== canonicalMatches.length) {
  errors.push("Every blog post must have canonicalPath");
}

if (slugMatches.length !== excerptMatches.length) {
  errors.push("Every blog post must have excerpt");
}

for (const excerpt of excerptMatches) {
  if (excerpt.length < 80) {
    errors.push(`Excerpt is too short: ${excerpt}`);
  }
}

for (const slug of slugMatches) {
  if (!canonicalMatches.includes(`/blog/${slug}`)) {
    errors.push(`canonicalPath missing or mismatched for slug: ${slug}`);
  }
}

if (errors.length > 0) {
  console.error("Blog content validation failed:\n");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Blog content validation passed for ${slugMatches.length} posts.`);
