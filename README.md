# AI Stack Tutor — ChatGPT Build

Interactive study guide for understanding the AI stack from compute, memory and packaging through inference, SaaS economics and the AI capital cycle.

This repository contains the standalone application created in ChatGPT. The source HTML is split into deterministic chunks under `chunks/`; `node build.js` reassembles and verifies the exact application into `dist/index.html`.

## Build

```bash
npm run build
```

## Deploy

Configured as a static Vercel project using `vercel.json`.
