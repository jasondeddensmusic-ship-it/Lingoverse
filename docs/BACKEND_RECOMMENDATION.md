# Backend Recommendation — VerumLingua 2026

**Status:** AI recommendation (Jason asked for the call). Owner reads, approves or redirects.

## TL;DR

**Pick Supabase.** Cheapest path to production-quality user accounts, progress sync, streaks, leaderboards, and eventual monetization, with no lock-in to Google's walled garden. Open-source + self-hostable if you ever outgrow the hosted tier.

## What you need

Right now the app is 100% client-side. `localStorage` holds progress, SRS state, learned-word sets. That works for a single-device prototype. It doesn't work for:

1. **Cross-device sync** — user starts a lesson on laptop, continues on phone.
2. **Streak integrity** — can't fake your streak because the server owns the clock.
3. **Leaderboards / social** — need a shared database.
4. **Subscription state** — premium features need a server to say "yes, this user paid."
5. **Data safety** — clearing localStorage today wipes everything. No recovery.

Backend addresses all five.

## Options considered

| Option | Auth | DB | Realtime | Price at 1k users | Vendor lock | Notes |
|--------|------|-----|----------|-------------------|-------------|-------|
| **Supabase** | ✅ built-in | Postgres | ✅ | ~$0 (free tier covers) | Low (OSS, portable) | Recommended |
| Firebase (Google) | ✅ | Firestore (NoSQL) | ✅ | ~$0 | High — proprietary | Fast to ship but noSQL hurts at scale |
| Clerk + own backend | ✅ best-in-class | your choice | you build | $25/mo Clerk + hosting | Medium | More code to write |
| Custom Node + Postgres | you build | you build | you build | hosting only | None | Most work; you're not a coder |
| AWS Amplify | ✅ | DynamoDB | ✅ | $0 tier | Very high | AWS tax on ops simplicity |

## Why Supabase wins for VerumLingua

1. **SQL (Postgres)** — the data model is relational (users × languages × units × SRS cards). SQL queries are clearer than Firestore's NoSQL gymnastics. You'll have queries like "top 10 users by streak in Dutch this week" that are trivial in SQL, painful in NoSQL.

2. **Auth is free and works** — email/password, magic link, Google/Apple/GitHub OAuth all out of the box. No separate auth service bill.

3. **Row Level Security (RLS)** — Postgres-native per-row access rules. User A literally cannot read User B's SRS cards because the database enforces it. Much better than "remember to filter by userId in every query."

4. **Realtime subscriptions** — for the eventual social/leaderboard features, you subscribe to table changes without building WebSocket infra.

5. **Edge functions** — for server-side logic (streak calc, subscription webhook from Stripe), Supabase runs Deno functions at the edge. No separate Lambda/Cloud Run config.

6. **Free tier is generous** — 500 MB database, 50k monthly active users, 5 GB bandwidth. You won't pay until you have a real business.

7. **Open source + self-hostable** — if you ever need to bail from the hosted service (pricing change, compliance, etc.), you can run the exact same stack on your own server. Firebase/Amplify lock you in forever.

8. **TypeScript SDK is excellent** — generated types from your schema, so refactors are safe.

## Minimum viable schema

```sql
-- Users (managed by Supabase Auth automatically)
-- auth.users has id, email, created_at, etc.

-- Per-user profile
create table profiles (
  id uuid primary key references auth.users(id),
  display_name text,
  source_lang text not null default 'en',
  created_at timestamptz default now()
);

-- Per-language progress
create table language_progress (
  user_id uuid references auth.users(id),
  lang text not null,          -- 'pt','de','ja', etc.
  units_completed int default 0,
  cefr_level text,             -- 'A1.2', 'B1.1'
  xp int default 0,
  streak_days int default 0,
  last_activity date,
  primary key (user_id, lang)
);

-- Learned words per user per language
create table learned_words (
  user_id uuid references auth.users(id),
  lang text,
  word text,
  first_seen timestamptz,
  primary key (user_id, lang, word)
);

-- SRS cards (FSRS state)
create table srs_cards (
  user_id uuid references auth.users(id),
  lang text,
  word text,
  due timestamptz,
  stability real,
  difficulty real,
  elapsed_days int,
  scheduled_days int,
  reps int,
  lapses int,
  state int,
  last_review timestamptz,
  primary key (user_id, lang, word)
);

-- Subscription state (stripe webhook updates this)
create table subscriptions (
  user_id uuid primary key references auth.users(id),
  tier text,                    -- 'free', 'premium'
  active boolean,
  renews_at timestamptz,
  stripe_customer_id text,
  stripe_subscription_id text
);
```

All tables get RLS policies: user can only read/write rows where `user_id = auth.uid()`.

## Migration path (from the current localStorage app)

### Phase 1 — Scaffold (½ day)
- Create Supabase project.
- Generate TypeScript types from schema.
- Add `@supabase/supabase-js` dependency.
- Create `src/backend/supabase.js` singleton client.
- Keep env var `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.

### Phase 2 — Auth UI (½ day)
- Replace the existing `src/pages/AuthScreen.jsx` mock with real Supabase auth calls.
- Email/password + Google OAuth buttons.
- `onAuthStateChange` listener in App.jsx to hydrate user on load.
- Redirect to Home on sign-in; redirect to Auth on sign-out.

### Phase 3 — Progress sync (1 day)
- Replace `window.storage` reads/writes in a small dedicated `src/backend/progress.js` layer.
- On every `recordQuizOutcome` (now wired via SRS agent), also upsert the SRS card to `srs_cards`.
- On login, hydrate `learned_words` + `language_progress` from DB into the existing client-side state.
- Local fallback when offline (queue mutations, sync on reconnect).

### Phase 4 — Stripe + premium (1 day)
- Stripe checkout session creation from an edge function.
- Webhook endpoint to update `subscriptions` table.
- Gate premium features (ad-free, leaderboards, unlimited flashcards) with `user.subscription.tier === 'premium'`.

### Phase 5 — Social / leaderboards (optional, when ready)
- Daily/weekly leaderboard views via SQL aggregations.
- Friend connections, shared streaks, etc.

## Owner approvals needed before Phase 1

- [ ] Use Supabase (or different choice)?
- [ ] Supabase org/project name to create?
- [ ] Stripe connected account ready for when Phase 4 starts?
- [ ] Owner has access to create env var secrets in GitHub Actions (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`)?

## Risks + mitigations

- **Supabase free tier limits** — 500 MB DB is small. A user with 5k SRS cards × 200 bytes each = 1 MB per user, so free tier covers 500 users comfortably. Beyond that, $25/mo Pro tier. At 5,000 paying users that's still trivial.
- **RLS configuration errors** — a missing policy means all users can read all data. Mitigation: write RLS policies in the same migration as the table, never in a separate step. Integration tests verify.
- **localStorage to DB migration** — existing users will lose their progress unless we write a one-time import flow. Mitigation: on first login, offer "import from this device" that bulk-uploads local state.
- **Offline-first UX** — Supabase is online-first. When offline, queue mutations to localStorage, drain queue on reconnect. Standard pattern.
- **Latency** — first query is ~200ms cold. Use edge functions in the nearest region to the user base (Europe — Amsterdam is close to Jason's Netherlands base).

## Alternatives I'd pick if constraint changed

- **If you hated SQL and wanted fastest possible prototype**: Firebase. Know you'll regret it at 10k users.
- **If you needed on-prem (unlikely)**: self-hosted Supabase docker stack.
- **If Clerk was already in use for another project**: Clerk + Railway Postgres. Equivalent outcome, 2× the wiring.

## Why I'm calling Supabase specifically

Because:
- Postgres is the least-regret database for a 5-year project.
- Auth + DB + realtime + edge in one SKU saves you 3 vendor bills.
- Open-source escape hatch means "no regrets" even if Supabase the company dies.
- Their TypeScript DX is honestly the best I've used.
- Price at your scale is zero until you're making real money, at which point $25/mo is invisible.

**Recommendation: green-light Supabase. I'll start Phase 1 on your go-ahead.**
