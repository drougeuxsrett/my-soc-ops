# 🎉 Soc Ops — Social Bingo

> **The icebreaker game that gets people talking.**
> Find someone who matches each square, mark it off, and race to get 5 in a row!

Soc Ops is a lightweight, mobile-friendly **Social Bingo** web app built for in-person mixers, team events, and conferences. Every player gets a unique randomized board — no two are alike. Tap a square when you find a match, and shout **BINGO!** when you complete a row, column, or diagonal.

---

## ✨ Features

- 🎲 **Randomized boards** — each player gets a unique 5×5 grid
- 📱 **Mobile-first** — works great on any device, no install needed
- 💾 **Auto-saves progress** — resume your game if you close the tab
- 🎊 **Bingo celebration** — animated modal when you win
- ✏️ **Fully customizable** — swap in your own questions in one file
- 🚀 **Deploys to GitHub Pages** — shareable link for your whole event

---

## 🕹️ How to Play

1. Open the app on your phone or laptop.
2. Walk around the room and find someone who matches a square (e.g. *"has a pet"*, *"bikes to work"*).
3. Tap the square to mark it — get their name or a quick chat first!
4. First to complete **5 in a row** (across, down, or diagonal) wins. 🏆

The center square is always a **FREE SPACE** — it's already marked for you.

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js 22+](https://nodejs.org/)

### Run locally

```bash
npm install
npm run dev
```

### Build for production

```bash
npm run build
```

Deploys automatically to **GitHub Pages** on every push to `main`.

---

## ✏️ Customize Your Questions

All prompts live in one file: [`src/data/questions.ts`](src/data/questions.ts)

```ts
export const questions: string[] = [
  "bikes to work",
  "has lived in another country",
  // add your own here - must have at least 24 entries
];
```

Edit the list, push to `main`, and your custom game is live within minutes.

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| UI | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Build | [Vite](https://vitejs.dev/) |
| Tests | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) |
| Deploy | GitHub Pages (via GitHub Actions) |

---

## 🤝 Contributing

Contributions, ideas, and questions are welcome! Check out [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

---

## 📄 License

[MIT](LICENSE)
