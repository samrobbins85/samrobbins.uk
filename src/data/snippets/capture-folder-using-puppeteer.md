---
title: "Capture folder using Puppeteer"
description: "Use puppeteer and serve-handler to capture a web folder"
language: "JavaScript"
date: 2021-04-07
---

```js
const puppeteer = require("puppeteer");
const handler = require("serve-handler");
const http = require("http");

(async () => {
  const server = http.createServer((request, response) =>
    handler(request, response, { public: "out" })
  );

  server.listen(3000, () => {
    console.log("Running at http://localhost:3000");
  });
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle2",
  });

  await page.pdf({ path: "file.pdf", format: "A4" });
  await browser.close();
  await server.close();
})();
```
