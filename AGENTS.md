# Repository working rules

- Keep application code in TypeScript and React under `src/`.
- Use Tailwind CSS v4 utilities for component styling. Put shared tokens and global rules in `src/index.css`.
- Keep `src/main.tsx` importing `src/index.css` so Tailwind is included in the app bundle.
- Keep public component stories colocated with their components and import the app stylesheet from `.storybook/preview.tsx`.
- Add play tests for meaningful interactions and verify them with `npm run test-storybook`.
- Configure Vite integrations in `vite.config.ts`; retain both the React and Tailwind plugins.
- Prefer accessible semantic HTML, descriptive link text, keyboard-visible focus styles, and responsive layouts.
- Do not commit generated output (`dist/`), dependencies (`node_modules/`), environment files, credentials, or private keys.
- Never place real tokens, passwords, or other secrets in source, documentation, or examples. Use clearly fake placeholders in `.env.example` if needed.
- Keep `README.md`, `DESIGN.md`, and `MEMORY.md` aligned with significant project setup changes.
- Before handing off changes, run `npm run build` and report its actual result.
