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

## Design Guide — Cozy Coffee Shop

**Theme**: Warm, intimate café aesthetic — aged parchment, espresso tones, hand-lettered serif typography.

**Typography** (loaded from Google Fonts — do not swap for system/generic fonts):
- Headlines: `'Playfair Display'` — weights 700/900, used via inline `style` or CSS variable `--font-display`
- Body/labels: `'Crimson Pro'` — weights 400/600 regular + italic, used via `--font-body`
- Never use Inter, Roboto, system-ui, or any sans-serif unless explicitly requested

**Colour tokens** (defined in `src/index.css` `@theme`, use as Tailwind utilities):
| Token | Value | Usage |
|---|---|---|
| `espresso` | `#2c1810` | Headlines, dark buttons, free space bg |
| `roast` | `#4a2c1a` | Button gradients, secondary dark |
| `mocha` | `#8b5e3c` | Body text, borders, muted labels |
| `caramel` | `#c8851b` | Accent, marked borders, ✓ stamp |
| `latte` | `#d4a96a` | Winning squares, card borders |
| `cream` | `#f5ecd7` | Button text on dark, light surfaces |
| `parchment` | `#faf3e4` | Page/card background |
| `steam` | `#ede0c4` | Hover states, dividers |

**Backgrounds**: Layer radial-gradient CSS for parchment depth — never flat solid colours.

**Animations** (defined in `src/index.css`):
- `anim-fade-up` + `anim-delay-1/2/3` — staggered entrance on start screen
- `stamp-in` — scale-bounce when a square is marked
- `modal-in` — scale+fade for the bingo dialog

**Component patterns**:
- Dark CTAs use `linear-gradient(160deg, #4a2c1a 0%, #2c1810 100%)` with cream text
- Cards/board use parchment→steam gradient + `1–2px` latte border + warm box-shadow
- Free space: espresso tile with ☕ glyph
- Bingo modal overlay: `oklch(0.28 0.06 45 / 0.65)` sepia cast (not black)

## Conventions
- Named exports everywhere (only `App` uses default export)
- Props interfaces defined inline above each component, not in `types/index.ts`
- Tests co-located in `src/utils/` next to the logic they test
