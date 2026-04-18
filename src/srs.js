/**
 * SRS Module — FSRS-based spaced repetition for VerumLingua
 *
 * Uses ts-fsrs (open-source, research-backed algorithm).
 * All state persisted to localStorage via window.storage.
 * Storage key: "lingoverse:srs" → { [lang]: { [word]: fsrsCard } }
 */

import { createEmptyCard, fsrs, generatorParameters, Rating } from "ts-fsrs";

// ─── FSRS Engine (singleton) ────────────────────────────────────
const ENGINE = fsrs(generatorParameters());

export { Rating };

// ─── Date Serialization ─────────────────────────────────────────
const DATE_FIELDS = ["due", "last_review"];

function serializeCard(card) {
  const out = { ...card };
  for (const f of DATE_FIELDS) {
    if (out[f] instanceof Date) out[f] = out[f].toISOString();
  }
  return out;
}

function hydrateCard(raw) {
  const out = { ...raw };
  for (const f of DATE_FIELDS) {
    if (typeof out[f] === "string") out[f] = new Date(out[f]);
  }
  return out;
}

// ─── Storage Layer ──────────────────────────────────────────────
const STORAGE_KEY = "lingoverse:srs";

export function loadSrsData(lang) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const all = JSON.parse(raw);
    const langData = all[lang] || {};
    const out = {};
    for (const [word, card] of Object.entries(langData)) {
      out[word] = hydrateCard(card);
    }
    return out;
  } catch { return {}; }
}

export function saveSrsData(lang, cards) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const all = raw ? JSON.parse(raw) : {};
    const serialized = {};
    for (const [word, card] of Object.entries(cards)) {
      serialized[word] = serializeCard(card);
    }
    all[lang] = serialized;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch (e) { console.warn("SRS save failed:", e); }
}

export function clearSrsData() {
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
}

// ─── FSRS Operations ────────────────────────────────────────────
export function initCard() {
  return createEmptyCard(new Date());
}

export function reviewCard(card, rating) {
  const scheduling = ENGINE.repeat(card, new Date());
  const result = scheduling[rating];
  return { card: result.card, log: result.log };
}

export function previewIntervals(card) {
  const scheduling = ENGINE.repeat(card, new Date());
  return {
    [Rating.Again]: scheduling[Rating.Again].card,
    [Rating.Hard]:  scheduling[Rating.Hard].card,
    [Rating.Good]:  scheduling[Rating.Good].card,
    [Rating.Easy]:  scheduling[Rating.Easy].card,
  };
}

// ─── Due Cards ──────────────────────────────────────────────────
export function getDueCards(cardsMap) {
  const now = new Date();
  return Object.entries(cardsMap)
    .filter(([, card]) => card.due <= now)
    .sort((a, b) => a[1].due - b[1].due)
    .map(([word, card]) => ({ word, card }));
}

// ─── Stats ──────────────────────────────────────────────────────
export function getStats(cardsMap) {
  let dueNow = 0, mastered = 0, learning = 0, total = 0;
  const now = new Date();
  for (const card of Object.values(cardsMap)) {
    total++;
    if (card.due <= now) dueNow++;
    if (card.scheduled_days > 21) mastered++;
    else learning++;
  }
  return { dueNow, mastered, learning, total };
}

// ─── Migration ──────────────────────────────────────────────────
export function initSrsForLearnedWords(lang, lwSet, existing) {
  const cards = { ...existing };
  let added = 0;
  for (const word of lwSet) {
    const key = word.toLowerCase();
    if (!cards[key]) {
      cards[key] = initCard();
      added++;
    }
  }
  if (added > 0) saveSrsData(lang, cards);
  return cards;
}

// ─── Formatting — distinct labels per rating ────────────────────
const RATING_LABELS = {
  1: ["repeat now", "10 min", "1 day", "4 days"],   // new card (state 0)
  2: ["repeat now", "next day", "3 days", "1 week"], // learning (state 1)
};
export function formatNextReview(card, rating) {
  // For new/learning cards, use fixed human labels since FSRS gives confusing minute-level diffs
  if (card.scheduled_days < 1) {
    const idx = rating - 1; // Rating.Again=1, Hard=2, Good=3, Easy=4
    return (RATING_LABELS[1] || RATING_LABELS[2])[idx] || "";
  }
  const d = card.scheduled_days;
  if (d === 1) return "tomorrow";
  if (d < 7) return d + " days";
  if (d < 14) return "1 week";
  if (d < 30) return Math.round(d / 7) + " wks";
  if (d < 60) return "1 month";
  return Math.round(d / 30) + " mo";
}

// ─── Lesson-integration hook (2026-04-19) ───────────────────────
//
// Non-invasive hook LessonEngine (or any quiz step handler) can call on
// every quiz outcome. One-liner: `recordQuizOutcome(lang, trg, correct)`.
//
// - If the word has no card yet, one is created.
// - On CORRECT: the card is rated `Good` (normal advance).
// - On WRONG:   the card is rated `Again` (reset interval, resurface soon).
// - State is persisted to localStorage immediately.
//
// This is safe to call from anywhere — if localStorage is unavailable or
// ts-fsrs throws, it silently no-ops. It never blocks the UI.
//
// Usage from a lesson step handler:
//   import { recordQuizOutcome } from '../srs';
//   ...
//   recordQuizOutcome(currentLang, teachCardTrg, wasCorrect);
export function recordQuizOutcome(lang, word, correct) {
  if (!lang || !word) return;
  try {
    const key = String(word).toLowerCase().trim();
    if (!key) return;
    const cards = loadSrsData(lang);
    const card = cards[key] || initCard();
    const rating = correct ? Rating.Good : Rating.Again;
    const { card: next } = reviewCard(card, rating);
    cards[key] = next;
    saveSrsData(lang, cards);
  } catch (e) {
    // Never let SRS bookkeeping block lesson flow.
    console.warn("recordQuizOutcome failed:", e);
  }
}

// Convenience: get the due queue for today-or-earlier, limited + sorted.
// Callers (Home "Daily Review" tile, Flashcards) use this for the fetch.
export function getDueToday(lang, limit = 20) {
  const cards = loadSrsData(lang);
  return getDueCards(cards).slice(0, limit);
}
