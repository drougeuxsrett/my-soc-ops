# Copilot Instructions

## Mandatory Development Checklist
Before finishing any task, verify:
- [ ] `npm run lint` — no lint errors
- [ ] `npm run build` — TypeScript + Vite build succeeds
- [ ] `npm run test` — all Vitest tests pass

## Project
**Soc Ops** — React 19 + TypeScript social bingo game. Players tap squares to find matching people, aiming for 5-in-a-row. Deploys to GitHub Pages on push to `main`.

## Architecture
```
src/data/questions.ts   ← 24 strings + FREE_SPACE; edit here to change game content (must have ≥24)
src/types/index.ts      ← BingoSquareData, BingoLine, GameState
src/utils/bingoLogic.ts ← Pure functions: generateBoard, toggleSquare, checkBingo, getWinningSquareIds
src/hooks/useBingoGame.ts ← All state + localStorage persistence (single source of truth)
src/App.tsx             ← Routes by gameState: 'start' → StartScreen, else → GameScreen + BingoModal
src/components/         ← Presentational only, props-driven
```

**State flow**: `useBingoGame` → props drilled to components. GameState: `'start'` → `'playing'` → `'bingo'` → `'start'`.

**Board**: 5×5, IDs 0–24. Center (index 12) is always the free space. `localStorage` key `'bingo-game-state'`; bump `STORAGE_VERSION` in `useBingoGame.ts` when the stored schema changes.

## Tailwind CSS v4
No `tailwind.config.js` — tokens live in `src/index.css` via `@theme`: `--color-accent`, `--color-marked`, `--color-bingo`, etc. Use as utilities: `bg-accent`, `text-bingo`. See `.github/instructions/tailwind-4.instructions.md`.

## Conventions
- Named exports everywhere (only `App` uses default export)
- Props interfaces defined inline above each component, not in `types/index.ts`
- Tests co-located in `src/utils/` next to the logic they test

### Git Worktree Isolation
When creating worktrees, always use `./.worktrees/` (inside the project) and the `--relative-paths` flag to avoid permission errors in Dev Containers.