import { expect, test } from "@playwright/test";

test("filters projects and opens detail pages", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Storybook", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(1);
  await expect(page.locator(".project-card")).toContainText("Nucleus UI");
  await page
    .getByRole("link", { name: "Explore project", exact: true })
    .first()
    .click();
  await expect(page).toHaveURL(/\/projects\/nucleus-ui$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Nucleus UI",
  );
  await page.getByRole("link", { name: "Back to projects" }).click();
  await expect(page.locator(".project-card")).toHaveCount(4);
});

test("palette supports search, no results, Escape and focus restoration", async ({
  page,
}) => {
  await page.goto("/");
  const opener = page.getByRole("button", { name: "Open command palette" });
  await opener.click();
  const dialog = page.getByRole("dialog", { name: "Quick navigation" });
  await expect(dialog).toBeVisible();
  await page.getByRole("textbox", { name: "Search sections" }).fill("missing");
  await expect(dialog).toContainText("No sections found");
  await page.getByRole("textbox", { name: "Search sections" }).fill("projects");
  await expect(dialog.getByRole("link")).toHaveCount(1);
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(opener).toBeFocused();
  await page.keyboard.press("Control+k");
  await expect(dialog).toBeVisible();
});

test("saves theme and supports terminal commands", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute(
    "data-theme",
    /dark|light/,
  );
  const before = await page.locator("html").getAttribute("data-theme");
  await page.getByRole("button", { name: "Toggle theme" }).click();
  const expected = before === "dark" ? "light" : "dark";
  await expect(page.locator("html")).toHaveAttribute("data-theme", expected);
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", expected);
  const terminal = page.getByRole("textbox", { name: "Terminal command" });
  await terminal.fill("help");
  await terminal.press("Enter");
  await expect(page.getByRole("log")).toContainText("Commands:");
  await terminal.fill("clear");
  await terminal.press("Enter");
  await expect(page.getByRole("log")).toBeEmpty();
});

test("project explorer updates and real contact links are available", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByLabel("// project explorer").selectOption("pulse");
  await expect(page.locator(".case-main h2")).toHaveText("Pulse");
  await page.getByRole("button", { name: "Technology", exact: true }).click();
  await expect(page.locator(".case-main")).toContainText("WebSockets");
  await expect(
    page.getByRole("link", { name: "ashishbox13@gmail.com", exact: true }),
  ).toHaveAttribute("href", "mailto:ashishbox13@gmail.com");
  await expect(
    page.locator(".contact-links").getByRole("link", { name: "GitHub" }),
  ).toHaveAttribute("href", "https://github.com/Ashishjadhav-dev");
  await expect(page.locator(".contact-form")).toContainText("Opens a draft");
  await expect(page.locator(".draft-label")).toHaveCount(4);
});

test("responsive navigation and layout have no horizontal overflow", async ({
  page,
  isMobile,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  if (isMobile) {
    await page.getByRole("button", { name: "Open menu" }).click();
    await page
      .getByRole("dialog", { name: "Navigation" })
      .getByRole("link", { name: "Contact" })
      .click();
    await expect(page).toHaveURL(/#contact$/);
    await expect(page.getByRole("dialog")).not.toBeVisible();
  }
  for (const width of isMobile ? [320, 390, 768] : [1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await expect
      .poll(() =>
        page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      )
      .toBe(true);
    await expect
      .poll(() =>
        page
          .locator(".hero h1")
          .evaluate((element) => element.scrollWidth <= element.clientWidth),
      )
      .toBe(true);
  }
  await page.setViewportSize({ width: isMobile ? 390 : 1440, height: 900 });
  await page.goto("/");
  await page.screenshot({
    path: `/tmp/ashish-portfolio-${isMobile ? "mobile" : "desktop"}.png`,
    fullPage: false,
  });
  expect(errors).toEqual([]);
});

test("unknown projects return 404 and detail pages include metadata", async ({
  page,
}) => {
  const response = await page.goto("/projects/missing");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Page not found.",
  );
  await page.goto("/projects/detectgrowth");
  await expect(page).toHaveTitle("DetectGrowth — Ashish S Jadhav");
});

test("reduced motion stops rotating headline", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const text = await page.locator(".hero-highlight").textContent();
  await page.waitForTimeout(2600);
  await expect(page.locator(".hero-highlight")).toHaveText(text!);
});

test("contact requires valid fields and describes the draft honestly", async ({
  page,
}) => {
  await page.goto("/#contact");
  await page.getByRole("button", { name: "Create email draft" }).click();
  await expect(page.locator("#contact-name:invalid")).toHaveCount(1);
  await page.getByLabel("Your name", { exact: true }).fill("Test Visitor");
  await page
    .getByLabel("Email address", { exact: true })
    .fill("visitor@example.com");
  await page
    .getByLabel("Message", { exact: true })
    .fill("A project with React & TypeScript? Let's talk.");
  await page.getByRole("button", { name: "Create email draft" }).click();
  await expect(page.locator(".contact-form").getByRole("status")).toContainText(
    "Nothing has been sent by this site.",
  );
});
