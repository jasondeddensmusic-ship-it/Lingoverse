# LingoVerse

A polyglot-built, pedagogy-first language learning platform.

## How to run this app

### Option 1: CodeSandbox (easiest — no install needed)
1. Go to [codesandbox.io](https://codesandbox.io)
2. Click **"Import repository"** (or go to codesandbox.io/p/github/YOUR-USERNAME/lingoverse)
3. It auto-detects the project and starts it
4. Wait ~30 seconds for it to install and load
5. You'll see LingoVerse running in the preview panel

### Option 2: StackBlitz (alternative — also no install)
1. Go to [stackblitz.com](https://stackblitz.com)
2. Click **"Import from GitHub"**
3. Paste your repo URL
4. It runs automatically

### Option 3: Run locally (if you have Node.js)
```
npm install
npm run dev
```

## Project structure
- `src/verumlingua.jsx` — The full app (engine + content)
- `data/` — Separated JSON files for each language's curriculum
- `engine/` — Engine-only JSX (no content, for reference)
- `docs/` — Curriculum documentation
- `scripts/` — Extraction and validation tools
