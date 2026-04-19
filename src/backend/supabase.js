/**
 * Supabase singleton client — Phase 1 scaffold.
 *
 * Uses a lazy dynamic import so the build succeeds even before
 * `npm install` adds @supabase/supabase-js to node_modules.
 * When env vars are missing the module returns null and all
 * progress functions become no-ops (offline-first fallback).
 */

let _client = null;
let _initialized = false;

/**
 * Returns the Supabase client, or null if:
 *   - env vars are not set, or
 *   - @supabase/supabase-js is not installed yet.
 *
 * Call this inside async functions; it resolves instantly after first call.
 */
export async function getSupabaseClient() {
  if (_initialized) return _client;
  _initialized = true;

  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!url || !key) {
    // No credentials — offline mode.
    _client = null;
    return null;
  }

  try {
    const { createClient } = await import('@supabase/supabase-js');
    _client = createClient(url, key, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    });
  } catch {
    // Package not installed yet — offline mode.
    _client = null;
  }

  return _client;
}

/**
 * Synchronous accessor for code that has already awaited getSupabaseClient().
 * Returns null until the async initialiser has run.
 */
export function getSupabaseClientSync() {
  return _client;
}
