# Project memory

## Context

- This repository is a clean UI starter built with React, TypeScript, Vite, and Tailwind CSS v4.
- The current page is a utility-class demo and can be replaced or extended as product screens are designed.
- Tailwind is integrated with `@tailwindcss/vite` in `vite.config.ts` and loaded from `src/index.css` with `@import "tailwindcss";`.
- Starter design tokens live in the CSS `@theme` block in `src/index.css`; the human-readable reference is `DESIGN.md`.
- Storybook 10 uses the React + Vite framework. Its shared preview imports `src/index.css`, and the MCP addon serves `/mcp` on the Storybook origin.
- Storybook's Vitest addon runs stories in Playwright Chromium; public component stories are colocated under `src/components/ui/`.
- uSpec skills are initialized for Codex CLI with the official Native Figma MCP provider. `uspecs.config.json` includes the seven keys from the linked template library and detected `Inter` font. Skills are in `.agents/skills/` and references in `references/`.

## Workflow

1. Install packages with `npm install`.
2. Start the local app with `npm run dev`.
3. Make UI changes in `src/App.tsx` and shared style changes in `src/index.css`.
4. Run `npm run build` before handing work off.
5. Run `npm run storybook` for component development and `npm run test-storybook` for browser-based story and play-function checks.
6. Keep secrets out of the repository; `.env*`, key files, and common credentials files are ignored.
7. For Figma-based UI specification work, use the installed `.agents/skills/` workflows. Run `firstrun` again if changing the template library.

## Notes

- Vite 8 needs a recent Node.js release; see the supported baseline in `README.md`.
- Generated build output goes to `dist/` and is not committed.
