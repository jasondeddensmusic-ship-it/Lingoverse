/**
 * Progress sync layer — Phase 1 scaffold (stubs only).
 *
 * All functions are no-ops when the Supabase client is null (env vars missing,
 * package not installed, or user not authenticated). The app continues to work
 * fully from localStorage in that state.
 *
 * Phase 3 will wire these into the existing client-side state management so
 * that every recordQuizOutcome / SRS update also persists to the database.
 */

import { getSupabaseClient } from './supabase.js';

// ---------------------------------------------------------------------------
// language_progress table
// ---------------------------------------------------------------------------

/**
 * Upsert a user's progress for a given language.
 *
 * @param {string} userId   - Supabase auth user UUID
 * @param {string} lang     - language code, e.g. 'de', 'ja'
 * @param {object} progressData - fields to upsert:
 *   { units_completed, cefr_level, xp, streak_days, last_activity }
 * @returns {Promise<object|null>} upserted row or null on no-op / error
 */
export async function syncProgress(userId, lang, progressData) {
  const supabase = await getSupabaseClient();
  if (!supabase || !userId || !lang) return null;

  const { data, error } = await supabase
    .from('language_progress')
    .upsert({ user_id: userId, lang, ...progressData }, { onConflict: 'user_id,lang' })
    .select()
    .single();

  if (error) {
    console.warn('[progress] syncProgress error:', error.message);
    return null;
  }
  return data;
}

/**
 * Fetch a user's progress row for a given language.
 *
 * @param {string} userId
 * @param {string} lang
 * @returns {Promise<object|null>}
 */
export async function fetchProgress(userId, lang) {
  const supabase = await getSupabaseClient();
  if (!supabase || !userId || !lang) return null;

  const { data, error } = await supabase
    .from('language_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('lang', lang)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') {
      // PGRST116 = row not found — not an error worth logging
      console.warn('[progress] fetchProgress error:', error.message);
    }
    return null;
  }
  return data;
}

// ---------------------------------------------------------------------------
// srs_cards table
// ---------------------------------------------------------------------------

/**
 * Upsert an SRS card's FSRS state for a given word.
 *
 * @param {string} userId
 * @param {string} lang
 * @param {string} word    - the target-language word (primary key component)
 * @param {object} fsrsCard - ts-fsrs Card object fields to persist:
 *   { due, stability, difficulty, elapsed_days, scheduled_days, reps, lapses, state, last_review }
 * @returns {Promise<object|null>}
 */
export async function syncSrsCard(userId, lang, word, fsrsCard) {
  const supabase = await getSupabaseClient();
  if (!supabase || !userId || !lang || !word) return null;

  const { data, error } = await supabase
    .from('srs_cards')
    .upsert(
      { user_id: userId, lang, word, ...fsrsCard },
      { onConflict: 'user_id,lang,word' }
    )
    .select()
    .single();

  if (error) {
    console.warn('[progress] syncSrsCard error:', error.message);
    return null;
  }
  return data;
}

/**
 * Fetch SRS cards that are due for review (due <= now()).
 *
 * @param {string} userId
 * @param {string} lang
 * @param {number} limit  - max cards to return (default 50)
 * @returns {Promise<object[]>} array of srs_cards rows
 */
export async function fetchDueSrsCards(userId, lang, limit = 50) {
  const supabase = await getSupabaseClient();
  if (!supabase || !userId || !lang) return [];

  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from('srs_cards')
    .select('*')
    .eq('user_id', userId)
    .eq('lang', lang)
    .lte('due', now)
    .order('due', { ascending: true })
    .limit(limit);

  if (error) {
    console.warn('[progress] fetchDueSrsCards error:', error.message);
    return [];
  }
  return data ?? [];
}

// ---------------------------------------------------------------------------
// learned_words table
// ---------------------------------------------------------------------------

/**
 * Record a word as learned (first-seen timestamp).
 * Silently ignores duplicate inserts (primary key conflict = word already known).
 *
 * @param {string} userId
 * @param {string} lang
 * @param {string} word
 * @returns {Promise<object|null>}
 */
export async function markLearnedWord(userId, lang, word) {
  const supabase = await getSupabaseClient();
  if (!supabase || !userId || !lang || !word) return null;

  const { data, error } = await supabase
    .from('learned_words')
    .insert({ user_id: userId, lang, word, first_seen: new Date().toISOString() })
    .select()
    .single();

  if (error) {
    // 23505 = unique_violation — word already marked as learned, not an error
    if (error.code !== '23505') {
      console.warn('[progress] markLearnedWord error:', error.message);
    }
    return null;
  }
  return data;
}
