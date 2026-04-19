-- VerumLingua initial schema
-- Run this in the Supabase SQL editor (or via `supabase db push` if you install the Supabase CLI).
-- Auth is handled by Supabase Auth automatically — auth.users already exists.

-- ---------------------------------------------------------------------------
-- profiles
-- ---------------------------------------------------------------------------
create table profiles (
  id           uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  source_lang  text not null default 'en',
  created_at   timestamptz default now()
);

-- Automatically create a profile row when a new user signs up.
create or replace function handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into profiles (id) values (new.id);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();

-- RLS
alter table profiles enable row level security;

create policy "Users can view their own profile"
  on profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on profiles for update
  using (auth.uid() = id);

-- ---------------------------------------------------------------------------
-- language_progress
-- ---------------------------------------------------------------------------
create table language_progress (
  user_id         uuid references auth.users(id) on delete cascade,
  lang            text not null,
  units_completed int  default 0,
  cefr_level      text,
  xp              int  default 0,
  streak_days     int  default 0,
  last_activity   date,
  primary key (user_id, lang)
);

alter table language_progress enable row level security;

create policy "Users can select their own language_progress"
  on language_progress for select
  using (auth.uid() = user_id);

create policy "Users can insert their own language_progress"
  on language_progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own language_progress"
  on language_progress for update
  using (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- learned_words
-- ---------------------------------------------------------------------------
create table learned_words (
  user_id    uuid references auth.users(id) on delete cascade,
  lang       text not null,
  word       text not null,
  first_seen timestamptz default now(),
  primary key (user_id, lang, word)
);

alter table learned_words enable row level security;

create policy "Users can select their own learned_words"
  on learned_words for select
  using (auth.uid() = user_id);

create policy "Users can insert their own learned_words"
  on learned_words for insert
  with check (auth.uid() = user_id);

-- Learned words are never deleted from the learner's perspective (only soft concepts).
-- No delete policy — use service-role key if admin deletion is ever needed.

-- ---------------------------------------------------------------------------
-- srs_cards
-- ---------------------------------------------------------------------------
create table srs_cards (
  user_id        uuid references auth.users(id) on delete cascade,
  lang           text    not null,
  word           text    not null,
  due            timestamptz,
  stability      real,
  difficulty     real,
  elapsed_days   int,
  scheduled_days int,
  reps           int,
  lapses         int,
  state          int,
  last_review    timestamptz,
  primary key (user_id, lang, word)
);

create index srs_cards_due_idx on srs_cards (user_id, lang, due);

alter table srs_cards enable row level security;

create policy "Users can select their own srs_cards"
  on srs_cards for select
  using (auth.uid() = user_id);

create policy "Users can insert their own srs_cards"
  on srs_cards for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own srs_cards"
  on srs_cards for update
  using (auth.uid() = user_id);

create policy "Users can delete their own srs_cards"
  on srs_cards for delete
  using (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- subscriptions
-- ---------------------------------------------------------------------------
create table subscriptions (
  user_id                uuid primary key references auth.users(id) on delete cascade,
  tier                   text default 'free',
  active                 boolean default false,
  renews_at              timestamptz,
  stripe_customer_id     text,
  stripe_subscription_id text
);

alter table subscriptions enable row level security;

create policy "Users can view their own subscription"
  on subscriptions for select
  using (auth.uid() = user_id);

-- Subscription rows are written by server-side Stripe webhook (service role key).
-- Users cannot insert or update their own subscription to prevent self-upgrading.
