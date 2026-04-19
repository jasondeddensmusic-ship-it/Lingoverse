# Supabase Phase 1 Setup — Owner Checklist

Phase 1 scaffold is in the codebase. The code compiles and the app runs in offline mode
(localStorage only) until you complete these steps.

## Step 1 — Install the package

Run this once on your machine:

```
npm install
```

This installs `@supabase/supabase-js` which was added to `package.json` in this phase.

## Step 2 — Create a Supabase project

1. Go to https://supabase.com and sign in (or create a free account).
2. Click **New project**.
3. Name it `verumlingua` (or anything you like).
4. Choose the **Frankfurt (eu-central-1)** region — closest to the Netherlands.
5. Set a strong database password and save it somewhere safe.
6. Wait ~2 minutes for the project to provision.

## Step 3 — Run the SQL migration

1. In your Supabase project dashboard, go to **SQL Editor**.
2. Click **New query**.
3. Open `supabase/migrations/0001_initial_schema.sql` from this repo.
4. Paste the entire contents into the SQL editor.
5. Click **Run**.

This creates all tables (`profiles`, `language_progress`, `learned_words`, `srs_cards`,
`subscriptions`) with Row Level Security policies enabled.

## Step 4 — Get your API keys

1. In your Supabase project, go to **Settings → API**.
2. Copy the **Project URL** (looks like `https://xxxxxxxxxxxx.supabase.co`).
3. Copy the **anon / public key** (the long JWT string under "Project API keys").

## Step 5 — Set env vars locally

Copy `.env.example` to a new file called `.env.local` in the project root:

```
cp .env.example .env.local
```

Fill in the values:

```
VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhb...your-anon-key...
```

`.env.local` is gitignored — it never gets committed to GitHub.

## Step 6 — Set env vars in GitHub Actions

This makes the live site (lingoverse.nl) connect to the backend.

1. Go to https://github.com/jasondeddensmusic-ship-it/Lingoverse/settings/secrets/actions.
2. Click **New repository secret** twice, adding:
   - Name: `VITE_SUPABASE_URL` / Value: your project URL
   - Name: `VITE_SUPABASE_ANON_KEY` / Value: your anon key
3. The existing deploy workflow picks these up automatically — no workflow edits needed
   because Vite injects all `VITE_*` env vars at build time.

## Step 7 — Verify

Run `npm run dev` locally. The app should start as normal. No errors in the console.
The backend functions are stubs for now — they connect to Supabase but don't write anything
until Phase 3 wires them into the lesson engine.

## What comes next

- **Phase 2** — Replace the AuthScreen mock with real Supabase auth (email + Google OAuth).
- **Phase 3** — Wire `src/backend/progress.js` functions into the lesson engine so SRS cards
  and progress sync to the database on every quiz outcome.
- **Phase 4** — Stripe integration for premium subscriptions.

## Files added in Phase 1

| File | Purpose |
|------|---------|
| `src/backend/supabase.js` | Singleton client with lazy import + null fallback |
| `src/backend/progress.js` | Stub functions for progress/SRS/learned-word sync |
| `supabase/migrations/0001_initial_schema.sql` | Full Postgres schema with RLS |
| `.env.example` | Template for local env vars (safe to commit) |
