// ── Korean Conjugation Engine ──
// Pure-data module for systematic Korean verb/adjective conjugation.
// Given a dictionary form (e.g., 먹다) and optional irregular type,
// generates all conjugated forms across speech levels and tenses.
// Also provides form-to-lemma reverse lookup.

// ════════════════════════════════════════════════════════════
// HANGUL SYLLABLE DECOMPOSITION
// Each Hangul syllable = (initial * 21 + medial) * 28 + final + 0xAC00
// ════════════════════════════════════════════════════════════

const INITIALS = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
const MEDIALS = "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ";
const FINALS = "\0ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ";

// Bright vowels (양성모음): ㅏ(0), ㅑ(2), ㅗ(8), ㅘ(9) → use 아
// Dark vowels (음성모음): everything else → use 어
const BRIGHT_MEDIALS = new Set([0, 2, 8, 9]); // ㅏ, ㅑ, ㅗ, ㅘ

function decompose(ch) {
  const code = ch.charCodeAt(0) - 0xAC00;
  if (code < 0 || code > 11171) return null;
  const final = code % 28;
  const medial = ((code - final) / 28) % 21;
  const initial = Math.floor(((code - final) / 28) / 21);
  return { initial, medial, final };
}

function compose(initial, medial, final) {
  return String.fromCharCode((initial * 21 + medial) * 28 + final + 0xAC00);
}

function hasBatchim(ch) {
  const d = decompose(ch);
  return d ? d.final !== 0 : false;
}

function removeBatchim(ch) {
  const d = decompose(ch);
  if (!d || d.final === 0) return ch;
  return compose(d.initial, d.medial, 0);
}

function getBatchim(ch) {
  const d = decompose(ch);
  return d ? d.final : 0;
}

function getMedial(ch) {
  const d = decompose(ch);
  return d ? d.medial : -1;
}

function isBright(ch) {
  const d = decompose(ch);
  return d ? BRIGHT_MEDIALS.has(d.medial) : false;
}

function setBatchim(ch, finalIdx) {
  const d = decompose(ch);
  if (!d) return ch;
  return compose(d.initial, d.medial, finalIdx);
}

// Get the final consonant character (for display)
function batchimChar(ch) {
  const d = decompose(ch);
  if (!d || d.final === 0) return null;
  return FINALS[d.final];
}

// ════════════════════════════════════════════════════════════
// STEM EXTRACTION
// Dictionary form ends in 다. Stem = everything before 다.
// ════════════════════════════════════════════════════════════

function getStem(dictForm) {
  if (!dictForm || !dictForm.endsWith("다")) return dictForm;
  return dictForm.slice(0, -1);
}

function lastChar(str) {
  return str ? str[str.length - 1] : "";
}

// ════════════════════════════════════════════════════════════
// IRREGULAR VERB TYPES
// Korean has 7 major irregular conjugation types.
// ════════════════════════════════════════════════════════════

export const IRREG_TYPES = {
  regular:  { id: "regular",  label: "Regular",       ko: "규칙" },
  bieup:    { id: "bieup",    label: "ㅂ-irregular",   ko: "ㅂ 불규칙" },
  dieut:    { id: "dieut",    label: "ㄷ-irregular",   ko: "ㄷ 불규칙" },
  hieut:    { id: "hieut",    label: "ㅎ-irregular",   ko: "ㅎ 불규칙" },
  siot:     { id: "siot",     label: "ㅅ-irregular",   ko: "ㅅ 불규칙" },
  rieul:    { id: "rieul",    label: "ㄹ-irregular",   ko: "ㄹ 불규칙" },
  eu:       { id: "eu",       label: "ㅡ-irregular",   ko: "ㅡ 불규칙" },
  reu:      { id: "reu",      label: "르-irregular",   ko: "르 불규칙" },
  hada:     { id: "hada",     label: "하다-verb",      ko: "하다" },
};

// ════════════════════════════════════════════════════════════
// AUTO-DETECT IRREGULAR TYPE from dictionary form
// ════════════════════════════════════════════════════════════

// Known irregular verbs (by dictionary form)
const KNOWN_BIEUP = new Set([
  "돕다","굽다","눕다","줍다","덥다","춥다","무겁다","가볍다","어렵다",
  "쉽다","귀엽다","맵다","아름답다","즐겁다","반갑다","새롭다","부럽다",
  "무섭다","고맙다","까다롭다","외롭다","시끄럽다","어지럽다",
]);
const KNOWN_DIEUT = new Set(["듣다","걷다","묻다","싣다","깨닫다"]);
const KNOWN_HIEUT = new Set([
  "그렇다","이렇다","저렇다","어떻다","빨갛다","노랗다","파랗다","하얗다",
  "까맣다","동그랗다",
]);
const KNOWN_SIOT = new Set(["짓다","낫다","잇다","붓다","젓다"]);
const KNOWN_RIEUL = new Set([
  "알다","살다","만들다","팔다","열다","놀다","울다","날다","길다","멀다",
  "달다","빨다","들다","걸다","풀다","밀다","돌다","불다","굴다","졸다",
]);
const KNOWN_EU = new Set(["쓰다","끄다","크다","뜨다","슬프다","바쁘다","아프다","예쁘다","기쁘다","나쁘다","배고프다"]);
const KNOWN_REU = new Set(["모르다","부르다","다르다","빠르다","고르다","자르다","누르다","오르다","흐르다","마르다","기르다","이르다"]);

// Regular ㅂ-ending verbs that do NOT irregularize
const REGULAR_BIEUP = new Set(["잡다","입다","씹다","뽑다","접다","좁다","넓다"]);

export function detectIrregType(dictForm) {
  if (!dictForm || !dictForm.endsWith("다")) return "regular";
  if (dictForm.endsWith("하다")) return "hada";
  if (KNOWN_BIEUP.has(dictForm)) return "bieup";
  if (KNOWN_DIEUT.has(dictForm)) return "dieut";
  if (KNOWN_HIEUT.has(dictForm)) return "hieut";
  if (KNOWN_SIOT.has(dictForm)) return "siot";
  if (KNOWN_RIEUL.has(dictForm)) return "rieul";
  if (KNOWN_EU.has(dictForm)) return "eu";
  if (KNOWN_REU.has(dictForm)) return "reu";
  return "regular";
}

// ════════════════════════════════════════════════════════════
// CONJUGATION ENGINE
// Applies vowel-connecting suffix (아/어 type) to a stem,
// handling all irregular transformations.
// ════════════════════════════════════════════════════════════

// Connect stem + 아/어 vowel suffix (the core operation)
function connectAE(stem, irregType) {
  if (!stem) return "해";
  const last = lastChar(stem);
  const d = decompose(last);
  if (!d) return stem + "어";

  // 하다 → 해
  if (irregType === "hada") {
    return stem.slice(0, -1) + "해";
  }

  // ㅂ-irregular: drop ㅂ, add 워 (or 와 for 돕다/곱다)
  if (irregType === "bieup" && d.final === FINALS.indexOf("ㅂ")) {
    const base = removeBatchim(last);
    const prefix = stem.slice(0, -1) + base;
    // 돕다→도와, 곱다→고와 (bright vowel → 와)
    if (isBright(base)) return prefix + "와";
    return prefix + "워";
  }

  // ㄷ-irregular: ㄷ → ㄹ before vowel
  if (irregType === "dieut" && d.final === FINALS.indexOf("ㄷ")) {
    const newLast = setBatchim(last, FINALS.indexOf("ㄹ"));
    return stem.slice(0, -1) + newLast + (isBright(newLast) ? "아" : "어");
  }

  // ㅎ-irregular: drop ㅎ, merge vowel (ㅏ+ㅎ→ㅐ, ㅓ+ㅎ→ㅔ)
  if (irregType === "hieut" && d.final === FINALS.indexOf("ㅎ")) {
    const noFinal = removeBatchim(last);
    const nd = decompose(noFinal);
    if (nd) {
      // ㅏ→ㅐ, ㅓ→ㅔ
      if (nd.medial === MEDIALS.indexOf("ㅏ")) return stem.slice(0, -1) + compose(nd.initial, MEDIALS.indexOf("ㅐ"), 0);
      if (nd.medial === MEDIALS.indexOf("ㅓ")) return stem.slice(0, -1) + compose(nd.initial, MEDIALS.indexOf("ㅔ"), 0);
    }
    return stem.slice(0, -1) + noFinal + "어";
  }

  // ㅅ-irregular: drop ㅅ before vowel
  if (irregType === "siot" && d.final === FINALS.indexOf("ㅅ")) {
    const noFinal = removeBatchim(last);
    return stem.slice(0, -1) + noFinal + (isBright(noFinal) ? "아" : "어");
  }

  // ㅡ-irregular: drop ㅡ, check preceding syllable for vowel harmony
  if (irregType === "eu" && d.final === 0 && d.medial === MEDIALS.indexOf("ㅡ")) {
    if (stem.length >= 2) {
      const prev = stem[stem.length - 2];
      if (isBright(prev)) return stem.slice(0, -1) + compose(d.initial, MEDIALS.indexOf("ㅏ"), 0);
      return stem.slice(0, -1) + compose(d.initial, MEDIALS.indexOf("ㅓ"), 0);
    }
    // Single syllable ㅡ stems (e.g., 쓰→써, 끄→꺼)
    return compose(d.initial, MEDIALS.indexOf("ㅓ"), 0);
  }

  // 르-irregular: ㄹ goes to previous syllable batchim, 러/라 added
  if (irregType === "reu" && stem.endsWith("르") && stem.length >= 2) {
    const prev = stem[stem.length - 2];
    const pd = decompose(prev);
    if (pd) {
      const withRieul = setBatchim(prev, FINALS.indexOf("ㄹ"));
      if (isBright(prev)) return stem.slice(0, -2) + withRieul + "라";
      return stem.slice(0, -2) + withRieul + "러";
    }
  }

  // ── Regular conjugation ──

  // No 받침 — vowel contraction
  if (d.final === 0) {
    const med = d.medial;
    // ㅏ + 아 → ㅏ (가 + 아 → 가)
    if (med === MEDIALS.indexOf("ㅏ")) return stem;
    // ㅗ + 아 → ㅘ (오 + 아 → 와)
    if (med === MEDIALS.indexOf("ㅗ")) return stem.slice(0, -1) + compose(d.initial, MEDIALS.indexOf("ㅘ"), 0);
    // ㅜ + 어 → ㅝ (주 + 어 → 줘)
    if (med === MEDIALS.indexOf("ㅜ")) return stem.slice(0, -1) + compose(d.initial, MEDIALS.indexOf("ㅝ"), 0);
    // ㅣ + 어 → ㅕ (시 + 어 → 셔)
    if (med === MEDIALS.indexOf("ㅣ")) return stem.slice(0, -1) + compose(d.initial, MEDIALS.indexOf("ㅕ"), 0);
    // ㅓ + 어 → ㅓ (서 + 어 → 서)
    if (med === MEDIALS.indexOf("ㅓ")) return stem;
    // ㅐ + 어 → ㅐ (no change)
    if (med === MEDIALS.indexOf("ㅐ")) return stem;
    // ㅔ + 어 → ㅔ (no change)
    if (med === MEDIALS.indexOf("ㅔ")) return stem;
    // Default: append 아/어
    if (BRIGHT_MEDIALS.has(med)) return stem + "아";
    return stem + "어";
  }

  // Has 받침 — just append 아/어
  if (isBright(last)) return stem + "아";
  return stem + "어";
}

// Connect stem + consonant-starting suffix (e.g., 는, 고, ㅂ니다)
// For ㄹ-irregular: ㄹ drops before ㄴ, ㅂ, ㅅ
function connectConsonant(stem, suffix, irregType) {
  if (irregType === "rieul") {
    const last = lastChar(stem);
    const d = decompose(last);
    if (d && d.final === FINALS.indexOf("ㄹ")) {
      const firstSuffix = suffix[0];
      // ㄹ drops before ㄴ, ㅂ, ㅅ
      if ("ㄴㅂㅅ느".includes(firstSuffix) || suffix.startsWith("습") || suffix.startsWith("ㅂ")) {
        return stem.slice(0, -1) + removeBatchim(last) + suffix;
      }
    }
  }
  return stem + suffix;
}

// Connect stem + 으-type suffix (e.g., 으면, 으니까, 으세요)
// If stem has no 받침, drop 으
// If stem has ㄹ 받침 (ㄹ-irregular), drop 으
function connectEu(stem, euSuffix, irregType) {
  const last = lastChar(stem);
  const d = decompose(last);
  if (!d) return stem + euSuffix;
  const coreSuffix = euSuffix.startsWith("으") ? euSuffix.slice(1) : euSuffix;
  // No 받침 → skip 으
  if (d.final === 0) return stem + coreSuffix;
  // ㄹ 받침 → skip 으 (ㄹ-irregular drops ㄹ before some, keeps before others)
  if (d.final === FINALS.indexOf("ㄹ")) return stem + coreSuffix;
  // Has 받침 → use 으
  return stem + euSuffix;
}

// ════════════════════════════════════════════════════════════
// ENDING TEMPLATES
// Each ending defines how to attach to the stem.
// ════════════════════════════════════════════════════════════

const ENDINGS = [
  // ── Present tense ──
  { id: "present_polite",   label: "해요체 Present",     group: "해요체",  tense: "present", level: "A1",
    conjugate: (stem, irr) => connectAE(stem, irr) + "요" },
  { id: "present_formal",   label: "합쇼체 Present",     group: "합쇼체",  tense: "present", level: "A1",
    conjugate: (stem, irr) => {
      const last = lastChar(stem);
      if (hasBatchim(last)) return connectConsonant(stem, "습니다", irr);
      return stem + "ㅂ니다"; // Actually need to add ㅂ as batchim
    }},
  { id: "present_casual",   label: "반말 Present",       group: "반말",    tense: "present", level: "A2",
    conjugate: (stem, irr) => connectAE(stem, irr) },

  // ── Past tense ──
  { id: "past_polite",      label: "해요체 Past",        group: "해요체",  tense: "past", level: "A2",
    conjugate: (stem, irr) => connectAE(stem, irr) + "ㅆ어요" },
  { id: "past_formal",      label: "합쇼체 Past",        group: "합쇼체",  tense: "past", level: "A2",
    conjugate: (stem, irr) => connectAE(stem, irr) + "ㅆ습니다" },
  { id: "past_casual",      label: "반말 Past",          group: "반말",    tense: "past", level: "A2",
    conjugate: (stem, irr) => connectAE(stem, irr) + "ㅆ어" },

  // ── Future tense ──
  { id: "future_polite",    label: "해요체 Future",      group: "해요체",  tense: "future", level: "A2",
    conjugate: (stem, irr) => connectEu(stem, "을 거예요", irr) },
  { id: "future_formal",    label: "합쇼체 Future",      group: "합쇼체",  tense: "future", level: "A2",
    conjugate: (stem, irr) => connectEu(stem, "을 겁니다", irr) },
  { id: "future_casual",    label: "반말 Future",        group: "반말",    tense: "future", level: "A2",
    conjugate: (stem, irr) => connectEu(stem, "을 거야", irr) },

  // ── Progressive ──
  { id: "progressive_polite", label: "해요체 Progressive", group: "해요체", tense: "progressive", level: "A2",
    conjugate: (stem, irr) => stem + "고 있어요" },

  // ── Imperative / Request ──
  { id: "imperative_polite", label: "Polite Request",    group: "해요체",  tense: "imperative", level: "A1",
    conjugate: (stem, irr) => connectEu(stem, "으세요", irr) },

  // ── Propositive ──
  { id: "propositive_polite", label: "Polite Suggestion", group: "합쇼체", tense: "propositive", level: "A2",
    conjugate: (stem, irr) => connectEu(stem, "읍시다", irr) },

  // ── Modifiers (관형형) ──
  { id: "modifier_present",  label: "Present Modifier (-는)", group: "Modifier", tense: "modifier", level: "B1",
    conjugate: (stem, irr) => connectConsonant(stem, "는", irr) },
  { id: "modifier_past",     label: "Past Modifier (-ㄴ/은)", group: "Modifier", tense: "modifier", level: "B1",
    conjugate: (stem, irr) => connectEu(stem, "은", irr) },
  { id: "modifier_future",   label: "Future Modifier (-ㄹ/을)", group: "Modifier", tense: "modifier", level: "B1",
    conjugate: (stem, irr) => connectEu(stem, "을", irr) },

  // ── Nominalizers ──
  { id: "nominalizer_gi",    label: "Nominalized (-기)",  group: "Nominalization", tense: "nominal", level: "A2",
    conjugate: (stem, irr) => stem + "기" },
  { id: "nominalizer_m",     label: "Nominalized (-ㅁ/음)", group: "Nominalization", tense: "nominal", level: "B1",
    conjugate: (stem, irr) => connectEu(stem, "음", irr) },

  // ── Connectives ──
  { id: "connective_go",     label: "And (-고)",           group: "Connective", tense: "connective", level: "A2",
    conjugate: (stem, irr) => stem + "고" },
  { id: "connective_seo",    label: "So/Because (-서)",    group: "Connective", tense: "connective", level: "A2",
    conjugate: (stem, irr) => connectAE(stem, irr) + "서" },
  { id: "connective_nikka",  label: "Because (-니까)",     group: "Connective", tense: "connective", level: "B1",
    conjugate: (stem, irr) => connectEu(stem, "으니까", irr) },
  { id: "connective_myeon",  label: "If/When (-면)",       group: "Connective", tense: "connective", level: "A2",
    conjugate: (stem, irr) => connectEu(stem, "으면", irr) },
  { id: "connective_jiman",  label: "But (-지만)",         group: "Connective", tense: "connective", level: "A2",
    conjugate: (stem, irr) => stem + "지만" },

  // ── Honorific ──
  { id: "honorific_present", label: "Subject Honorific",   group: "Honorific", tense: "present", level: "B1",
    conjugate: (stem, irr) => connectEu(stem, "으세요", irr) },

  // ── Ability / Possibility ──
  { id: "ability_pos",       label: "Can (-ㄹ 수 있다)",   group: "Ability", tense: "ability", level: "A2",
    conjugate: (stem, irr) => connectEu(stem, "을 수 있어요", irr) },
  { id: "ability_neg",       label: "Cannot (-ㄹ 수 없다)", group: "Ability", tense: "ability", level: "A2",
    conjugate: (stem, irr) => connectEu(stem, "을 수 없어요", irr) },

  // ── Want ──
  { id: "want",              label: "Want (-고 싶다)",     group: "Desire", tense: "want", level: "A1",
    conjugate: (stem, irr) => stem + "고 싶어요" },

  // ── Negation ──
  { id: "neg_an",            label: "안 + verb",           group: "Negation", tense: "negation", level: "A1",
    conjugate: (stem, irr) => "안 " + connectAE(stem, irr) + "요" },
  { id: "neg_ji",            label: "-지 않다",            group: "Negation", tense: "negation", level: "A2",
    conjugate: (stem, irr) => stem + "지 않아요" },
];

// Fix 합쇼체 present: need to properly add ㅂ as batchim to open syllable
ENDINGS[1].conjugate = (stem, irr) => {
  // Handle 하다 → 합니다
  if (irr === "hada") return stem.slice(0, -1) + "합니다";
  // Handle ㄹ-irregular: ㄹ drops before ㅂ
  if (irr === "rieul") {
    const last = lastChar(stem);
    const d = decompose(last);
    if (d && d.final === FINALS.indexOf("ㄹ")) {
      const noFinal = removeBatchim(last);
      return stem.slice(0, -1) + setBatchim(noFinal, FINALS.indexOf("ㅂ")) + "니다";
    }
  }
  const last = lastChar(stem);
  const d = decompose(last);
  if (!d) return stem + "습니다";
  if (d.final === 0) {
    // No 받침: add ㅂ as batchim
    return stem.slice(0, -1) + setBatchim(last, FINALS.indexOf("ㅂ")) + "니다";
  }
  return stem + "습니다";
};

// Fix past tense: 았/었 needs to be a proper syllable, not ㅆ appended to text
// connectAE produces the 아/어 connected form; we need to add ㅆ as batchim to the last char
function addSsang(connectedForm) {
  const last = lastChar(connectedForm);
  const d = decompose(last);
  if (!d) return connectedForm + "ㅆ";
  if (d.final === 0) {
    return connectedForm.slice(0, -1) + setBatchim(last, FINALS.indexOf("ㅆ"));
  }
  // Already has batchim — this shouldn't happen normally after connectAE
  return connectedForm + "ㅆ";
}

// Redefine past tense endings with proper ㅆ handling
ENDINGS[3].conjugate = (stem, irr) => addSsang(connectAE(stem, irr)) + "어요"; // past polite
ENDINGS[4].conjugate = (stem, irr) => addSsang(connectAE(stem, irr)) + "습니다"; // past formal
ENDINGS[5].conjugate = (stem, irr) => addSsang(connectAE(stem, irr)) + "어"; // past casual

// ════════════════════════════════════════════════════════════
// MAIN CONJUGATION API
// ════════════════════════════════════════════════════════════

export function conjugateVerb(dictForm, irregTypeOverride) {
  if (!dictForm || !dictForm.endsWith("다")) return {};
  const stem = getStem(dictForm);
  const irr = irregTypeOverride || detectIrregType(dictForm);
  const result = {};
  for (const ending of ENDINGS) {
    try {
      result[ending.id] = {
        form: ending.conjugate(stem, irr),
        label: ending.label,
        group: ending.group,
        tense: ending.tense,
        level: ending.level,
      };
    } catch (e) {
      // Skip if conjugation fails for edge case
      result[ending.id] = { form: stem + "?", label: ending.label, group: ending.group, tense: ending.tense, level: ending.level };
    }
  }
  return result;
}

// Get all endings metadata (for UI rendering)
export function getEndingsList() {
  return ENDINGS.map(e => ({
    id: e.id,
    label: e.label,
    group: e.group,
    tense: e.tense,
    level: e.level,
  }));
}

// Get irregular type info
export function getIrregInfo(dictForm) {
  const type = detectIrregType(dictForm);
  return IRREG_TYPES[type] || IRREG_TYPES.regular;
}

// ════════════════════════════════════════════════════════════
// FORM-TO-LEMMA REVERSE INDEX BUILDER
// Generates all conjugated forms for a set of dictionary forms,
// returns a map: surfaceForm → dictForm
// ════════════════════════════════════════════════════════════

export function buildFormIndex(dictForms) {
  const index = {};
  for (const dictForm of dictForms) {
    const forms = conjugateVerb(dictForm);
    for (const ending of Object.values(forms)) {
      if (ending.form && ending.form !== dictForm) {
        // Store the surface form (may contain spaces for compound forms)
        // Only index single-word forms for search
        const formStr = ending.form;
        // For multi-word forms like "안 먹어요", index the main verb part too
        const words = formStr.split(" ");
        for (const w of words) {
          if (w.length > 0 && /[\uAC00-\uD7AF]/.test(w) && !index[w]) {
            index[w] = dictForm;
          }
        }
        // Also index full form
        if (!index[formStr]) {
          index[formStr] = dictForm;
        }
      }
    }
  }
  return index;
}

// ════════════════════════════════════════════════════════════
// NOUN PARTICLE COMBINATIONS
// For nouns, generate common particle attachments
// ════════════════════════════════════════════════════════════

export function nounWithParticles(noun) {
  if (!noun) return [];
  const last = lastChar(noun);
  const batch = hasBatchim(last);
  return [
    { particle: batch ? "은" : "는", role: "Topic", form: noun + (batch ? "은" : "는") },
    { particle: batch ? "이" : "가", role: "Subject", form: noun + (batch ? "이" : "가") },
    { particle: batch ? "을" : "를", role: "Object", form: noun + (batch ? "을" : "를") },
    { particle: "에", role: "Location/Time", form: noun + "에" },
    { particle: "에서", role: "At (action)", form: noun + "에서" },
    { particle: batch ? "으로" : "로", role: "Direction/Means", form: noun + (batch ? "으로" : "로") },
    { particle: "의", role: "Possessive", form: noun + "의" },
    { particle: "도", role: "Also/Too", form: noun + "도" },
    { particle: "만", role: "Only", form: noun + "만" },
    { particle: batch ? "과" : "와", role: "And/With", form: noun + (batch ? "과" : "와") },
    { particle: "에게", role: "To (person)", form: noun + "에게" },
    { particle: "한테", role: "To (casual)", form: noun + "한테" },
    { particle: "부터", role: "From", form: noun + "부터" },
    { particle: "까지", role: "Until/To", form: noun + "까지" },
  ];
}
