# VerumLingua Product Plan — Business Model, Backend, API Architecture

> Written 2026-03-31. This is the strategic roadmap for monetization, user infrastructure, and premium features.

---

## 1. Business Model: Freemium + Ads (Phased Rollout)

### Phase 1: Free Launch (Launch → 1,000 users)
- **Completely free.** No ads, no paywall.
- Goal: product-market fit and user feedback.
- Cost: zero (static site + free tiers for all services).
- Focus: get real users, collect feedback, fix friction points.

### Phase 2: Introduce Ads (1K+ users)
- Non-intrusive ads on free tier only.
- One banner between lessons. NO interstitials during learning (kills retention).
- Ad provider: Google AdSense or a privacy-friendly alternative (e.g., EthicalAds, Carbon).
- Revenue target: cover hosting + API costs.

### Phase 3: Launch Premium (5K+ users)
- Free users keep everything they had.
- Premium subscription removes ads + adds exclusive features.
- Pricing: ~$6.99/month or $49.99/year (annual = 40% discount, standard for app subscriptions).
- Payment: Stripe Checkout (simplest integration, handles subscriptions natively).

### Why This Order
1. Nobody pays for an app they haven't tried.
2. Ads validate that you have traffic before you build a paywall.
3. Premium features need user data to design well (what do users actually want?).
4. Free tier stays generous forever — this is NOT a bait-and-switch.

---

## 2. Feature Tiers

### Free Tier (generous, hooks users)

| Feature | Details |
|---------|---------|
| All 5 languages | Korean, Dutch, German, French, Spanish |
| A1-A2 content | Full beginner + elementary curriculum |
| 3 lessons/day | Resets at midnight local time |
| Basic progress | XP, streak, words learned (localStorage initially, cloud later) |
| Grammar colorizer | Full Aa toggle + settings |
| CEFR Reference | Full word lists for all languages |
| Grammar/Idioms pages | Full access |
| Verumius AI | 5 messages/day |
| Flashcards + Quiz | Full access |
| Ads | Between lessons (Phase 2+) |

### Premium (~$6.99/mo or $49.99/yr)

| Feature | Details |
|---------|---------|
| Unlimited lessons | No daily cap |
| No ads | Clean experience |
| B1-B2 content | Advanced levels are premium-only |
| Unlimited Verumius AI | Full Claude-powered tutor, no message limit |
| Cloud sync | Progress saved across all devices |
| Offline mode | Download lessons for offline use |
| Advanced analytics | Weak areas, study recommendations, time tracking |
| Custom study plans | AI generates personalized curriculum based on gaps |
| Priority new content | New languages/units available to premium first |
| Export progress | PDF certificates, shareable stats |
| Story mode | Full Verumius story arc (when implemented) |

### Feature Gate Logic
```
isPremium(user) → boolean
- Check user.subscription.tier === "premium"
- Check user.subscription.expires_at > now()
- Cache locally, revalidate on app start

dailyLessonCount(user) → number
- Free: 3 lessons/day (count from midnight local)
- Premium: unlimited

aiMessageCount(user) → number
- Free: 5/day
- Premium: unlimited

contentAccess(user, level) → boolean
- Free: A1, A2
- Premium: A1, A2, B1, B2
```

---

## 3. Backend Architecture: Supabase

### Why Supabase
- PostgreSQL foundation (powerful queries for leaderboards, analytics)
- Built-in auth (Google, email, Apple — turnkey)
- Row-level security (users can only read/write their own data)
- Generous free tier (50K monthly active users)
- JavaScript SDK (works with React)
- Realtime subscriptions (future: live features)
- Compatible with existing Cloudflare Workers (AI chat stays there)

### Architecture Overview

```
┌──────────────────────────────────────────────────────┐
│              Frontend (React SPA)                     │
│              lingoverse.nl / Vite build               │
│                                                       │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │ Lesson      │  │ User Profile │  │ Verumius     │ │
│  │ Engine      │  │ & Progress   │  │ AI Chat      │ │
│  └──────┬──────┘  └──────┬───────┘  └──────┬───────┘ │
└─────────┼────────────────┼─────────────────┼─────────┘
          │                │                 │
          │         ┌──────▼───────┐  ┌──────▼───────┐
          │         │  Supabase    │  │  Cloudflare  │
          │         │              │  │  Workers     │
          │         │  - Auth      │  │              │
          │         │  - Database  │  │  - Claude    │
          │         │  - Storage   │  │    API proxy │
          │         │  - Realtime  │  │  - Rate      │
          │         │              │  │    limiting  │
          │         └──────────────┘  └──────────────┘
          │
   ┌──────▼───────┐
   │  Stripe      │
   │  (Payments)  │
   │              │
   │  - Checkout  │
   │  - Webhooks  │
   │  - Portal    │
   └──────────────┘
```

### Service Responsibilities

| Service | Handles |
|---------|---------|
| **Supabase Auth** | User signup/login (Google, email, Apple). JWT tokens. Session management. |
| **Supabase Database** | User profiles, progress, learned words, achievements, subscriptions, analytics. |
| **Supabase Storage** | Offline lesson downloads (future). User-generated content (future). |
| **Cloudflare Workers** | Claude API proxy for Verumius chat. Rate limiting. Context injection. |
| **Stripe** | Subscription management. Checkout flow. Webhook → Supabase to update subscription status. |
| **Frontend** | All rendering, lesson engine, offline cache (service worker for PWA). |

---

## 4. Database Schema

### `profiles` (extends Supabase auth.users)
```sql
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  display_name TEXT DEFAULT 'Learner',
  avatar TEXT DEFAULT 'default',
  active_lang TEXT DEFAULT 'nl',
  base_lang TEXT DEFAULT 'en',
  daily_goal INTEGER DEFAULT 15,
  dark_mode BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

### `subscriptions`
```sql
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  tier TEXT DEFAULT 'free' CHECK (tier IN ('free', 'premium')),
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  started_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  cancelled_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

### `progress`
```sql
CREATE TABLE progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  lang TEXT NOT NULL,
  unit_n INTEGER NOT NULL,
  lesson_id TEXT NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT now(),
  score REAL,  -- 0.0 to 1.0
  xp_earned INTEGER DEFAULT 0,
  time_spent_seconds INTEGER,
  UNIQUE(user_id, lang, unit_n, lesson_id)
);
```

### `learned_words`
```sql
CREATE TABLE learned_words (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  lang TEXT NOT NULL,
  word TEXT NOT NULL,
  learned_at TIMESTAMPTZ DEFAULT now(),
  review_count INTEGER DEFAULT 0,
  last_reviewed TIMESTAMPTZ,
  confidence REAL DEFAULT 0.5,  -- spaced repetition score
  UNIQUE(user_id, lang, word)
);
```

### `achievements`
```sql
CREATE TABLE achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  achievement_id TEXT NOT NULL,
  unlocked_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, achievement_id)
);
```

### `daily_stats`
```sql
CREATE TABLE daily_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  lessons_completed INTEGER DEFAULT 0,
  xp_earned INTEGER DEFAULT 0,
  words_learned INTEGER DEFAULT 0,
  ai_messages_sent INTEGER DEFAULT 0,
  time_spent_seconds INTEGER DEFAULT 0,
  streak_day INTEGER DEFAULT 1,
  UNIQUE(user_id, date)
);
```

### `chat_history`
```sql
CREATE TABLE chat_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  lang TEXT NOT NULL,
  messages JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

### `flags` (user-reported issues)
```sql
CREATE TABLE flags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  lang TEXT NOT NULL,
  lesson_id TEXT NOT NULL,
  step_index INTEGER,
  step_data JSONB,
  reason TEXT,
  detail TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

### Row-Level Security (RLS)
```sql
-- Users can only read/write their own data
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Same pattern for all user tables
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users own progress" ON progress FOR ALL USING (auth.uid() = user_id);

-- Repeat for: learned_words, achievements, daily_stats, chat_history, flags, subscriptions
```

---

## 5. API Endpoints

### Supabase (auto-generated REST + JS SDK)
No custom API needed. Supabase client handles all CRUD:
```js
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Auth
await supabase.auth.signInWithOAuth({ provider: 'google' })
await supabase.auth.signOut()

// Progress
await supabase.from('progress').insert({ lang, unit_n, lesson_id, score, xp_earned })
await supabase.from('progress').select('*').eq('lang', 'de')

// Learned words
await supabase.from('learned_words').upsert({ lang, word })

// Daily stats
await supabase.from('daily_stats').upsert({ date: today, lessons_completed: count })
```

### Cloudflare Workers (AI Chat — existing)
```
POST https://verumlingua-ai.xqkv62nnqq.workers.dev
Body: { messages, context, user_id? }

Enhanced with:
- Rate limiting per user (free: 5/day, premium: unlimited)
- User context from Supabase (current lesson, known words, weak areas)
- Chat history persistence (save to Supabase after each conversation)
```

### Stripe Webhooks (Cloudflare Worker or Supabase Edge Function)
```
POST /webhooks/stripe
Events:
- checkout.session.completed → create subscription record
- customer.subscription.updated → update tier/expiry
- customer.subscription.deleted → downgrade to free
- invoice.payment_failed → notify user, grace period
```

---

## 6. Frontend Integration Plan

### Auth Flow
```
1. User clicks "Sign In" → Supabase auth popup (Google/email)
2. On success → fetch profile from profiles table
3. If new user → create profile + migrate localStorage progress
4. Store JWT in memory (not localStorage for security)
5. All subsequent requests include JWT automatically
```

### Progress Sync Strategy
```
1. Write-through: save to localStorage AND Supabase simultaneously
2. On app start: fetch from Supabase, merge with localStorage
3. Conflict resolution: latest timestamp wins
4. Offline: queue writes, sync when back online
5. Migration: first login migrates all localStorage data to cloud
```

### Premium Gating
```jsx
// In App.jsx or a context provider
const { subscription } = useUser();
const isPremium = subscription?.tier === 'premium' &&
                  new Date(subscription.expires_at) > new Date();

// In LearnPage
if (!isPremium && lessonCount >= 3) {
  return <UpgradePrompt />;
}

// In content access
const accessibleLevels = isPremium ? ['A1','A2','B1','B2'] : ['A1','A2'];
```

### Ad Integration
```jsx
// Between lessons (free users only)
if (!isPremium && lessonJustCompleted) {
  return <AdBanner provider="adsense" slot="between-lessons" />;
}
```

---

## 7. Implementation Roadmap

### Sprint 1: Auth + Cloud Sync (1-2 weeks)
- [ ] Set up Supabase project
- [ ] Create database tables + RLS policies
- [ ] Add Supabase JS SDK to frontend
- [ ] Auth UI (sign in with Google, email)
- [ ] Migrate localStorage persistence to Supabase
- [ ] Offline queue for writes
- [ ] Profile page: show cloud sync status

### Sprint 2: Premium Infrastructure (1 week)
- [ ] Stripe account + product setup
- [ ] Checkout flow (upgrade button → Stripe Checkout → redirect)
- [ ] Webhook handler (Cloudflare Worker or Supabase Edge Function)
- [ ] Premium gating in frontend (lesson limit, AI limit, content lock)
- [ ] Stripe Customer Portal (manage subscription, cancel)

### Sprint 3: Ads (3-5 days)
- [ ] AdSense/alternative account setup
- [ ] Ad component (banner between lessons)
- [ ] Premium users: no ads
- [ ] A/B test ad placement (between lessons vs. in sidebar)

### Sprint 4: Advanced Analytics (1 week)
- [ ] daily_stats tracking (lessons, XP, time, streaks)
- [ ] Analytics dashboard in Profile page
- [ ] Weak areas detection (quiz accuracy per topic)
- [ ] Study recommendations (AI-generated from weak areas)
- [ ] Streak calendar visualization

### Sprint 5: Offline Mode (1 week)
- [ ] Service worker for PWA
- [ ] Lesson data caching strategy
- [ ] Download manager UI
- [ ] Sync queue for offline progress

---

## 8. Cost Projections

### At 0-1,000 users (Phase 1: Free)
| Service | Cost |
|---------|------|
| Hosting (mijndomein.nl) | Already paid |
| Supabase | Free tier |
| Cloudflare Workers | Free tier (100K requests/day) |
| Claude API (Verumius) | ~$5-20/month (depends on usage) |
| **Total** | **~$5-20/month** |

### At 1,000-10,000 users (Phase 2: Ads)
| Service | Cost | Revenue |
|---------|------|---------|
| Supabase | Free tier (up to 50K MAU) | — |
| Cloudflare Workers | Free tier still | — |
| Claude API | ~$50-200/month | — |
| AdSense | — | ~$30-100/month |
| **Net** | | **~breakeven** |

### At 10,000+ users (Phase 3: Premium)
| Service | Cost | Revenue |
|---------|------|---------|
| Supabase Pro | $25/month | — |
| Cloudflare Workers | $5/month | — |
| Claude API | ~$200-500/month | — |
| Stripe fees | 2.9% + $0.30 per transaction | — |
| Premium subscribers (5% conversion) | — | 500 users x $6.99 = $3,495/month |
| AdSense (free users) | — | ~$200-500/month |
| **Net** | ~$730-1,030/month | **~$3,695-3,995/month** |

---

## 9. Competitive Positioning

### What VerumLingua Does That Duolingo Doesn't
1. **Certification-grade content** — every word from official exam lists (Goethe, TOPIK, DELF, DELE, NT2)
2. **Grammar colorizer** — visual POS/gender tagging on every sentence
3. **Clickable word dictionary** — tap any word in any lesson for instant lookup
4. **AI tutor with lesson context** — Verumius knows what you're studying right now
5. **Story system** — Verumius protagonist creates emotional connection to learning
6. **ANY source to ANY target** — not English-centric (Arabic speakers learning German, etc.)
7. **Transparency** — open curriculum, no gamification dark patterns

### Pricing Comparison
| App | Free | Premium |
|-----|------|---------|
| Duolingo | Limited hearts, ads | $6.99/mo (Super), $13.99/mo (Max) |
| Babbel | 1 free lesson | $6.95-$13.95/mo |
| Busuu | Limited access | $5.95-$13.95/mo |
| **VerumLingua** | **A1-A2 full, 3 lessons/day** | **$6.99/mo** |

---

## 10. Key Decisions Still Needed

1. **Ad provider**: Google AdSense vs. privacy-friendly alternative (EthicalAds, Carbon)?
2. **Auth providers**: Google + email + Apple? Or Google + email only at launch?
3. **Offline storage**: IndexedDB (browser) vs. SQLite (if going PWA/native)?
4. **App stores**: PWA only, or eventually React Native / Capacitor for iOS/Android?
5. **Content licensing**: Is the content CC-licensed? Matters for community contributions.
6. **GDPR**: Cookie consent, data export, account deletion. Required for EU users (you're in NL).

---

*This document is the strategic foundation. Implementation starts with Sprint 1 (Auth + Cloud Sync) after the content pipeline catches up.*
