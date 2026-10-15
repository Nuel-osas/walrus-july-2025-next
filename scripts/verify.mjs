import assert from "node:assert/strict";
import fs from "node:fs/promises";
import net from "node:net";
import path from "node:path";
import { spawn } from "node:child_process";
import { chromium } from "playwright-core";

// Runs against a production build by default; BASE_URL can select an existing preview.
const artifacts = path.resolve(".site-capture/qa");
await fs.mkdir(artifacts, { recursive: true });
let server;
let browser;
const report = { passed: false, pages: [] };

async function getBrowserPath() {
  const candidates = [
    process.env.CHROME_PATH,
    chromium.executablePath(),
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ].filter(Boolean);
  for (const candidate of candidates) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      /* Try next browser. */
    }
  }
  throw new Error(
    "Install Chromium with npx playwright-core install chromium, or set CHROME_PATH.",
  );
}

async function startServer() {
  if (process.env.BASE_URL) return process.env.BASE_URL;
  const port = await new Promise((resolve) => {
    const probe = net.createServer();
    probe.listen(0, "127.0.0.1", () => {
      const { port } = probe.address();
      probe.close(() => resolve(port));
    });
  });
  server = spawn(
    process.execPath,
    [
      "node_modules/next/dist/bin/next",
      "start",
      "--hostname",
      "127.0.0.1",
      "--port",
      String(port),
    ],
    { stdio: ["ignore", "pipe", "pipe"] },
  );
  let output = "";
  server.stdout.on("data", (data) => {
    output += data;
  });
  server.stderr.on("data", (data) => {
    output += data;
  });
  const url = `http://127.0.0.1:${port}`;
  for (let attempt = 0; attempt < 80; attempt++) {
    try {
      if ((await fetch(url)).ok) return url;
    } catch {
      /* Server starting. */
    }
    if (server.exitCode !== null) throw new Error(output);
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Preview did not start: ${output}`);
}

const routes = [
  "",
  "about",
  "blog",
  "community",
  "get-started",
  "network-release-schedule",
  "news",
  "rfp",
  "wal-token",
];
async function scrollTo(page, selector) {
  await page
    .locator(selector)
    .first()
    .evaluate((element) =>
      window.scrollTo(0, element.getBoundingClientRect().top + scrollY - 150),
    );
  await page.waitForTimeout(1200);
}

try {
  const url = await startServer();
  const origin = new URL(url).origin;
  browser = await chromium.launch({
    executablePath: await getBrowserPath(),
    headless: true,
  });
  for (const scenario of [
    { name: "desktop", viewport: { width: 1440, height: 1000 } },
    {
      name: "mobile",
      viewport: { width: 390, height: 844 },
      isMobile: true,
      hasTouch: true,
    },
    {
      name: "reduced-motion",
      viewport: { width: 768, height: 1024 },
      reducedMotion: "reduce",
    },
  ]) {
    const { name, ...options } = scenario;
    if (process.env.SCENARIO && process.env.SCENARIO !== name) continue;
    const page = await browser.newPage(options);
    page.setDefaultTimeout(12000);
    for (const route of routes) {
      const result = {
        scenario: name,
        route: "/" + route,
        errors: [],
        missing: [],
        external: [],
        checks: [],
      };
      report.pages.push(result);
      const onError = (error) => result.errors.push(error.message);
      const onConsole = (message) => {
        if (message.type() === "error") result.errors.push(message.text());
      };
      const onResponse = (response) => {
        if (response.status() >= 400) result.missing.push(response.url());
      };
      page.on("pageerror", onError);
      page.on("console", onConsole);
      page.on("response", onResponse);
      await page.route("**/*", (request) => {
        const target = request.request().url();
        if (target.startsWith("http") && new URL(target).origin !== origin) {
          result.external.push(target);
          return request.abort();
        }
        return request.continue();
      });
      const response = await page.goto(url + "/" + route, {
        waitUntil: "networkidle",
      });
      assert.equal(response.status(), 200);
      await page.waitForFunction(
        () => document.documentElement.dataset.siteReady === "true",
      );
      await page.waitForTimeout(1600);
      assert.equal(await page.locator("main").count(), 1);
      assert.equal(
        await page.locator(".navigation").count(),
        1,
        "A single accessible navigation",
      );
      assert.ok((await page.locator("h1").count()) > 0);
      await page.evaluate(async () => {
        await Promise.all(
          Array.from(document.images).map(async (image) => {
            image.loading = "eager";
            try {
              await image.decode();
            } catch {}
          }),
        );
      });
      const broken = await page.evaluate(() =>
        Array.from(document.images)
          .filter((image) => !image.complete || !image.naturalWidth)
          .map((image) => image.src),
      );
      assert.deepEqual(broken, [], "Broken images");
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        "Horizontal overflow",
      );
      result.checks.push(
        "Server-rendered route, images, fonts, responsive width",
      );
      await page.screenshot({
        path: path.join(artifacts, `${name}-${route || "home"}.png`),
      });

      if (!route) {
        assert.equal(
          await page.locator(".home-hero canvas").count(),
          1,
          "Restored pixel grid",
        );
        const font = await page
          .locator("h1")
          .first()
          .evaluate((el) => getComputedStyle(el).fontFamily);
        assert.match(font, /PPNeueBit/);
        assert.ok(
          await page.evaluate(() => document.fonts.check("700 16px PPNeueBit")),
          "Pixel font loaded",
        );
        if (scenario.viewport.width < 992)
          await page.getByRole("button", { name: "Open menu" }).click();
        const discover = page.getByRole("button", { name: /discover/i });
        await discover.focus();
        await page.keyboard.press("ArrowDown");
        assert.equal(await discover.getAttribute("aria-expanded"), "true");
        assert.equal(
          await page.evaluate(() => document.activeElement.textContent),
          "Walrus",
        );
        await page.keyboard.press("Escape");
        assert.equal(await discover.getAttribute("aria-expanded"), "false");
        if (scenario.viewport.width < 992)
          await page.getByRole("button", { name: "Close menu" }).click();
        await scrollTo(page, ".home-news");
        await scrollTo(page, ".home-community");
        await scrollTo(page, "footer");
        result.checks.push(
          "Grid, pixel font, keyboard menus, mobile menu, scroll reveals",
        );
      }
      if (["get-started", "rfp", "wal-token", "community"].includes(route)) {
        await scrollTo(page, ".faq-button");
        const first = page.locator(".faq-button").first();
        if ((await first.getAttribute("aria-expanded")) === "true")
          await first.click();
        await first.click();
        assert.equal(await first.getAttribute("aria-expanded"), "true");
        const answer = page.locator(
          "#" + (await first.getAttribute("aria-controls")),
        );
        assert.ok((await answer.boundingBox()).height > 0);
        assert.equal(await answer.getAttribute("aria-hidden"), "false");
        await first.focus();
        await page.keyboard.press("Enter");
        assert.equal(await first.getAttribute("aria-expanded"), "false");
        result.checks.push("Accordion opens, closes, and supports keyboard");
      }
      if (["blog", "news"].includes(route)) {
        await scrollTo(page, "[data-filter]");
        const list = page.locator('[fs-cmsfilter-element="list"]');
        const initial = await list.locator(":scope > :visible").count();
        const filter = page.locator(
          route === "blog"
            ? '[data-filter="ecosystem"]'
            : '[data-filter="announcement"]',
        );
        await filter.click();
        const count = await list.locator(":scope > :visible").count();
        assert.ok(count > 0 && count < initial, "Filter narrows entries");
        await page.locator('[data-filter="all"]').click();
        assert.equal(await list.locator(":scope > :visible").count(), initial);
        if (route === "blog") {
          await page.locator('[data-filter="depin"]').click();
          assert.ok(await page.locator(".archive-empty").isVisible());
          await page.locator('[data-filter="all"]').click();
          assert.match(
            await page
              .getByRole("link", { name: "Next Page" })
              .getAttribute("href"),
            /walrus\.xyz\/blog\?/,
          );
        }
        result.checks.push("Category filtering, reset, and empty results");
      }
      if (route === "community") {
        await scrollTo(page, ".newsletter-form");
        await page.locator("#email").fill("archive-test@example.com");
        await page.locator(".newsletter-form input[type=checkbox]").check();
        await page
          .getByRole("button", { name: "Subscribe", exact: true })
          .click();
        assert.match(
          await page.locator(".archive-form-status").innerText(),
          /No subscription was submitted/,
        );
        assert.equal(await page.locator("#events").count(), 1);
        result.checks.push(
          "Newsletter stays local and reports archive limitation; events anchor exists",
        );
      }
      if (route === "wal-token" && name === "reduced-motion") {
        assert.ok(
          await page
            .locator("[data-chart-detail]")
            .evaluateAll((nodes) =>
              nodes.every(
                (el) => getComputedStyle(el).visibility === "visible",
              ),
            ),
        );
        result.checks.push(
          "All distribution panels readable with reduced motion",
        );
      }
      assert.deepEqual(result.errors, [], "Browser errors");
      assert.deepEqual(result.missing, [], "Missing resources");
      assert.deepEqual(result.external, [], "External runtime requests");
      console.log(`PASS ${name} /${route}`);
      page.off("pageerror", onError);
      page.off("console", onConsole);
      page.off("response", onResponse);
      await page.unrouteAll();
    }
    await page.close();
  }
  const noJS = await browser.newPage({ javaScriptEnabled: false });
  await noJS.goto(url);
  assert.match(await noJS.locator("h1").first().innerText(), /Do more/i);
  await noJS.goto(url + "/rfp");
  assert.ok(
    (await noJS.locator(".faq-answer").first().boundingBox()).height > 0,
  );
  await noJS.goto(url + "/community");
  assert.ok(
    await noJS
      .locator("[data-involved-details]")
      .evaluateAll((nodes) =>
        nodes.every((el) => getComputedStyle(el).visibility === "visible"),
      ),
  );
  await noJS.close();
  report.pages.push({
    scenario: "no-javascript",
    checks: ["Server rendered home, readable FAQ answers and community panels"],
  });
  report.passed = true;
} catch (error) {
  report.failure = error.stack;
  console.error(error);
  process.exitCode = 1;
} finally {
  await browser?.close();
  server?.kill("SIGTERM");
  await fs.writeFile(
    path.join(artifacts, "report.json"),
    JSON.stringify(report, null, 2),
  );
}
