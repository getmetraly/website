import { test, expect } from "@playwright/test";

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
];

for (const route of routes) {
  test(`route ${route} renders`, async ({ page }) => {
    const response = await page.goto(route, {
      waitUntil: "networkidle",
    });

    expect(response?.ok()).toBeTruthy();

    await expect(page.locator("body")).toBeVisible();

    const bodyText = await page.locator("body").innerText();

    expect(bodyText.length).toBeGreaterThan(20);
  });
}
