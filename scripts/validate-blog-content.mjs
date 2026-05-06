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
const statusMatches = [...source.matchAll(/status:\s*"([^"]+)"/g)].map((match) => match[1]);
const audienceMatches = [...source.matchAll(/audience:\s*"([^"]+)"/g)].map((match) => match[1]);
const readingTimeMatches = [...source.matchAll(/readingTime:\s*"([^"]+)"/g)].map((match) => match[1]);
const tagBlocks = [...source.matchAll(/tags:\s*\[([^\]]+)\]/g)].map((match) => match[1]);
const bodyBlocks = [...source.matchAll(/body:\s*\[([\s\S]*?)\]/g)].map((match) => match[1]);

const errors = [];
const allowedStatuses = new Set(["Draft idea", "Planned", "Drafting", "Review", "Published"]);

function assertUnique(values, label) {
  const seen = new Set();

  for (const value of values) {
    if (seen.has(value)) {
      errors.push(`Duplicate ${label}: ${value}`);
    }

    seen.add(value);
  }
}

function assertCount(values, label) {
  if (slugMatches.length !== values.length) {
    errors.push(`Every blog post must define ${label}`);
  }
}

assertUnique(slugMatches, "slug");
assertUnique(titleMatches, "title");
assertUnique(canonicalMatches, "canonicalPath");

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

for (const status of statusMatches) {
  if (!allowedStatuses.has(status)) {
    errors.push(`Invalid status: ${status}`);
  }
}

if (slugMatches.length === 0) {
  errors.push("No blog posts found in content/blog/posts.ts");
}

assertCount(canonicalMatches, "canonicalPath");
assertCount(excerptMatches, "excerpt");
assertCount(statusMatches, "status");
assertCount(audienceMatches, "audience");
assertCount(readingTimeMatches, "readingTime");
assertCount(tagBlocks, "tags");
assertCount(bodyBlocks, "body paragraphs");

for (const excerpt of excerptMatches) {
  if (excerpt.length < 80) {
    errors.push(`Excerpt is too short: ${excerpt}`);
  }
}

for (const audience of audienceMatches) {
  if (audience.length < 24) {
    errors.push(`Audience description is too short: ${audience}`);
  }
}

for (const readingTime of readingTimeMatches) {
  if (!/^\d+ min read$/.test(readingTime)) {
    errors.push(`Invalid readingTime format: ${readingTime}`);
  }
}

for (const tags of tagBlocks) {
  const values = [...tags.matchAll(/"([^"]+)"/g)].map((match) => match[1]);

  if (values.length < 2) {
    errors.push(`Each post should define at least two tags: ${tags}`);
  }

  assertUnique(values, "tag within one post");
}

for (const body of bodyBlocks) {
  const paragraphs = [...body.matchAll(/"([^"]+)"/g)].map((match) => match[1]);

  if (paragraphs.length < 3) {
    errors.push("Each post body should contain at least three paragraphs");
  }

  for (const paragraph of paragraphs) {
    if (paragraph.length < 80) {
      errors.push(`Body paragraph is too short: ${paragraph}`);
    }
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
