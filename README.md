# Nice UI Library

A starter project using React, TypeScript, Vite, and Tailwind CSS v4.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install

```sh
npm install
```

## Run locally

```sh
npm run dev
```

Vite prints the local development URL in the terminal (usually `http://localhost:5173`).

## Build for production

```sh
npm run build
```

The production output is written to `dist/`. To preview it locally, run `npm run preview` after building.

## Project structure

- `src/App.tsx` — demo page with responsive Tailwind utility classes
- `src/index.css` — Tailwind CSS v4 import and global design tokens
- `vite.config.ts` — Vite, React, and Tailwind CSS plugins
- `.storybook/` — Storybook configuration, shared app styles, MCP endpoint, and browser tests
- `src/components/ui/*.stories.tsx` — stories for public UI components
- `DESIGN.md` — starter design tokens
- `AGENTS.md` — repository working rules
- `MEMORY.md` — project context and workflow notes

Tailwind is loaded through the `@tailwindcss/vite` plugin; no separate Tailwind configuration file is needed for this starter.

## Storybook

Start the component workshop with:

```sh
npm run storybook
```

The Storybook MCP endpoint is available at `http://localhost:6006/mcp` while Storybook is running. Build the static Storybook with `npm run build-storybook`.

Run component render and play-function tests in headless Chromium with:

```sh
npm run test-storybook
```

## UI specification skills

This repository includes the uSpec skills and reference materials under `.agents/skills/` and `references/`. They were initialized for Codex CLI with the official Native Figma MCP provider. `uspecs.config.json` records the selected provider, the detected font family, and the seven template component keys extracted from the linked Figma library.

To initialize or refresh the Uspec setup, run:

```sh
npx uspec-skills init
```

Use the installed `firstrun` skill to configure or refresh the template keys when switching Figma libraries.
