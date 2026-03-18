// ── Universal Dictionary Auto-Builder ──
// Builds LANG_DICT from UNITS teach cards at module load.
// Korean entries get merged with hand-crafted KOREAN_DICT overrides (richer morph/particle/uses data).
// This is the single source of truth for the clickable word dictionary system.

import { ARTICLE_SYSTEMS } from './vocabulary.js';
import dutchUnits from './units-dutch.js';
import koreanUnits from './units-korean.js';
import germanUnits from './units-german.js';
import frenchUnits from './units-french.js';
import spanishUnits from './units-spanish.js';
import otherUnits from './units-other.js';

const ALL_UNITS = [...dutchUnits, ...koreanUnits, ...germanUnits, ...frenchUnits, ...spanishUnits, ...otherUnits];

// Strip article from a word and return { article, bare }
function stripArticle(word, lang) {
  if (!word || typeof word !== "string") return { article: null, bare: word };
  const sys = ARTICLE_SYSTEMS[lang];
  if (!sys) return { article: null, bare: word };
  const detected = sys.detect(word);
  if (detected === "none") return { article: null, bare: word };
  // Strip the article prefix
  const lower = word.toLowerCase();
  for (const art of sys.articles) {
    // Handle contractions like "l'" in French
    if (art.endsWith("'") && lower.startsWith(art)) {
      return { article: art, bare: word.slice(art.length) };
    }
    if (lower.startsWith(art + " ")) {
      return { article: art, bare: word.slice(art.length + 1) };
    }
  }
  return { article: detected, bare: word };
}

// Classify word kind from teach card data
function classifyKind(step, lang) {
  if (step.kind) return step.kind;
  const en = (step.en || "").toLowerCase();
  const nl = (step.nl || "");
  // Verb heuristic: English starts with "to "
  if (en.startsWith("to ")) return "verb";
  // Noun heuristic: has article
  const sys = ARTICLE_SYSTEMS[lang];
  if (sys) {
    const detected = sys.detect(nl);
    if (detected !== "none") return "noun";
  }
  // Phrase heuristic: contains spaces and no article
  if (nl.includes(" ") && en.includes(" ") && !en.startsWith("the ") && !en.startsWith("a ")) return "phrase";
  // Default: noun (most teach cards without explicit kind are nouns)
  return "noun";
}

// Build dictionary for a single language from its units
export function buildLangDict(units, lang) {
  const dict = {};
  const unitsByLang = units.filter(u => u.lang === lang);

  for (const unit of unitsByLang) {
    const level = unit.level || "A1";
    for (const lesson of (unit.lessons || [])) {
      for (const step of (lesson.steps || [])) {
        if (step.type !== "teach") continue;
        if (!step.nl || !step.en) continue;

        const { article, bare } = stripArticle(step.nl, lang);
        const key = bare.toLowerCase();
        const kind = classifyKind(step, lang);

        // Skip if already exists with richer data (don't overwrite)
        if (dict[key] && dict[key].lessonId && !step.example) continue;

        dict[key] = {
          word: bare,
          display: step.nl,
          en: step.en,
          article: article,
          kind: kind,
          level: level,
          lessonId: lesson.id,
          phonetic: step.phonetic || null,
          cognate: step.cognate || null,
          note: step.note || null,
          also: step.also || null,
          example: step.example || null,
          exampleEn: step.exampleEn || null,
          // Korean-specific fields (null for other languages, overridden by KOREAN_DICT)
          morph: null,
          particle: null,
          uses: null,
        };
      }
    }
  }
  return dict;
}

// Build dictionaries for all languages
export function buildAllDicts(units) {
  const langs = [...new Set(units.map(u => u.lang).filter(Boolean))];
  const result = {};
  for (const lang of langs) {
    result[lang] = buildLangDict(units, lang);
  }
  return result;
}

// Pre-built dictionary at module load
export const LANG_DICT = buildAllDicts(ALL_UNITS);

// Merge Korean hand-crafted overrides (called from lingoverse.jsx after KOREAN_DICT is defined)
export function mergeKoreanDict(koreanDict) {
  if (!LANG_DICT.ko) LANG_DICT.ko = {};
  for (const [key, entry] of Object.entries(koreanDict)) {
    const existing = LANG_DICT.ko[key] || {};
    LANG_DICT.ko[key] = {
      ...existing,
      word: entry.base || existing.word || key,
      display: entry.base || existing.display || key,
      en: existing.en || "",
      article: null,
      kind: existing.kind || "noun",
      level: entry.level || existing.level || "A1",
      lessonId: existing.lessonId || null,
      phonetic: existing.phonetic || null,
      cognate: existing.cognate || null,
      note: entry.note || existing.note || null,
      // Korean-specific override fields
      morph: entry.morph || null,
      particle: entry.particle || null,
      uses: entry.uses || null,
    };
  }
}

// Lookup helper: find word in dictionary (tries exact, then stripped article)
export function lookupWord(word, lang) {
  const dict = LANG_DICT[lang];
  if (!dict) return null;
  const lower = (word || "").toLowerCase();
  // Direct lookup
  if (dict[lower]) return dict[lower];
  // Try stripping article
  const { bare } = stripArticle(word, lang);
  const bareKey = bare.toLowerCase();
  if (dict[bareKey]) return dict[bareKey];
  return null;
}

// Get all taught words for a language up to a given lesson
export function getTaughtWords(lang, upToLessonId) {
  const dict = LANG_DICT[lang];
  if (!dict) return new Set();
  const taught = new Set();
  // We need lesson ordering — build from units
  const unitsByLang = ALL_UNITS.filter(u => u.lang === lang);
  let found = false;
  for (const unit of unitsByLang) {
    for (const lesson of (unit.lessons || [])) {
      for (const step of (lesson.steps || [])) {
        if (step.type === "teach" && step.nl) {
          const { bare } = stripArticle(step.nl, lang);
          taught.add(bare.toLowerCase());
        }
      }
      if (lesson.id === upToLessonId) { found = true; break; }
    }
    if (found) break;
  }
  return taught;
}
