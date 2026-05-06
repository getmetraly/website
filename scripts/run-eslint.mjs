import { spawnSync } from "node:child_process";

const args = [
  "--yes",
  "--package=eslint@9.39.1",
  "eslint",
  "app",
  "components",
  "scripts",
  "--ext",
  ".js,.mjs,.ts,.tsx",
  "--max-warnings=0",
];

const result = spawnSync("npx", args, {
  stdio: "inherit",
  shell: process.platform === "win32",
});

if (typeof result.status === "number") {
  process.exit(result.status);
}

process.exit(1);
