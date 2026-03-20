// ── German Conjugation Engine ──
// Pure-data module for systematic German verb conjugation.
// Given an infinitive (e.g., "machen") and optional verb type,
// generates all conjugated forms across tenses and moods.
// Also provides form-to-lemma reverse lookup and noun case declension.
// Architecture mirrors korean-conjugation.js for plugin consistency.

// ════════════════════════════════════════════════════════════
// SEPARABLE & INSEPARABLE PREFIXES
// ════════════════════════════════════════════════════════════

// Inseparable prefixes: never separate, NO ge- in Partizip II
const INSEPARABLE_PREFIXES = ["be", "emp", "ent", "er", "ge", "miss", "ver", "zer"];

// Separable prefixes: separate in main clauses (Prasens/Prateritum),
// attach before ge- in Partizip II (aufgemacht, eingekauft)
const SEPARABLE_PREFIXES = [
  "ab", "an", "auf", "aus", "bei", "da", "dar", "ein", "empor",
  "fest", "fort", "heim", "her", "heraus", "herein", "hin", "hinaus",
  "hinein", "hoch", "los", "mit", "nach", "nieder", "statt",
  "um", "vor", "vorbei", "weg", "weiter", "wieder", "zu",
  "zurecht", "zuruck", "zusammen",
];
// Sort longest first so "zuruck" matches before "zu"
SEPARABLE_PREFIXES.sort((a, b) => b.length - a.length);

// ════════════════════════════════════════════════════════════
// STRONG VERB TABLE (Ablaut patterns)
// Format: infinitive -> { prasens3: 3rd person stem vowel change,
//   prateritum: past stem, partizip2: past participle,
//   aux: "hat"|"ist", notes: optional string }
// prasens3 is the vowel-changed stem for du/er/sie forms only
// ════════════════════════════════════════════════════════════

const STRONG_VERBS = {
  // ── a -> a, u, a pattern (fahren type) ──
  "fahren":     { prasens3: "fahr->fahr", ps3vowel: "a:a", prat: "fuhr", pp: "gefahren", aux: "ist" },
  "graben":     { ps3vowel: "a:a", prat: "grub", pp: "gegraben", aux: "hat" },
  "laden":      { ps3vowel: "a:a", prat: "lud", pp: "geladen", aux: "hat" },
  "schaffen":   { ps3vowel: null, prat: "schuf", pp: "geschaffen", aux: "hat" },
  "schlagen":   { ps3vowel: "a:a", prat: "schlug", pp: "geschlagen", aux: "hat" },
  "tragen":     { ps3vowel: "a:a", prat: "trug", pp: "getragen", aux: "hat" },
  "wachsen":    { ps3vowel: "a:a", prat: "wuchs", pp: "gewachsen", aux: "ist" },
  "waschen":    { ps3vowel: "a:a", prat: "wusch", pp: "gewaschen", aux: "hat" },

  // ── e -> i/ie, a, o/e pattern (geben, sprechen type) ──
  "geben":      { ps3vowel: "e:i", prat: "gab", pp: "gegeben", aux: "hat" },
  "lesen":      { ps3vowel: "e:ie", prat: "las", pp: "gelesen", aux: "hat" },
  "sehen":      { ps3vowel: "e:ie", prat: "sah", pp: "gesehen", aux: "hat" },
  "sprechen":   { ps3vowel: "e:i", prat: "sprach", pp: "gesprochen", aux: "hat" },
  "nehmen":     { ps3vowel: "e:i", prat: "nahm", pp: "genommen", aux: "hat", ps3stem: "nimm" },
  "treffen":    { ps3vowel: "e:i", prat: "traf", pp: "getroffen", aux: "hat" },
  "werfen":     { ps3vowel: "e:i", prat: "warf", pp: "geworfen", aux: "hat" },
  "brechen":    { ps3vowel: "e:i", prat: "brach", pp: "gebrochen", aux: "hat" },
  "helfen":     { ps3vowel: "e:i", prat: "half", pp: "geholfen", aux: "hat" },
  "sterben":    { ps3vowel: "e:i", prat: "starb", pp: "gestorben", aux: "ist" },
  "werben":     { ps3vowel: "e:i", prat: "warb", pp: "geworben", aux: "hat" },
  "empfehlen":  { ps3vowel: "e:ie", prat: "empfahl", pp: "empfohlen", aux: "hat" },
  "stehlen":    { ps3vowel: "e:ie", prat: "stahl", pp: "gestohlen", aux: "hat" },
  "essen":      { ps3vowel: "e:i", prat: "ass", pp: "gegessen", aux: "hat", ps3stem: "iss" },
  "vergessen":  { ps3vowel: "e:i", prat: "vergass", pp: "vergessen", aux: "hat" },
  "messen":     { ps3vowel: "e:i", prat: "mass", pp: "gemessen", aux: "hat" },
  "treten":     { ps3vowel: "e:i", prat: "trat", pp: "getreten", aux: "hat" },
  "erschrecken":{ ps3vowel: "e:i", prat: "erschrak", pp: "erschrocken", aux: "ist" },
  "gelten":     { ps3vowel: "e:i", prat: "galt", pp: "gegolten", aux: "hat" },

  // ── ei -> ie, ie pattern (schreiben type) ──
  "schreiben":  { ps3vowel: null, prat: "schrieb", pp: "geschrieben", aux: "hat" },
  "bleiben":    { ps3vowel: null, prat: "blieb", pp: "geblieben", aux: "ist" },
  "leihen":     { ps3vowel: null, prat: "lieh", pp: "geliehen", aux: "hat" },
  "scheinen":   { ps3vowel: null, prat: "schien", pp: "geschienen", aux: "hat" },
  "steigen":    { ps3vowel: null, prat: "stieg", pp: "gestiegen", aux: "ist" },
  "schweigen":  { ps3vowel: null, prat: "schwieg", pp: "geschwiegen", aux: "hat" },
  "treiben":    { ps3vowel: null, prat: "trieb", pp: "getrieben", aux: "hat" },
  "reiben":     { ps3vowel: null, prat: "rieb", pp: "gerieben", aux: "hat" },
  "weisen":     { ps3vowel: null, prat: "wies", pp: "gewiesen", aux: "hat" },
  "beweisen":   { ps3vowel: null, prat: "bewies", pp: "bewiesen", aux: "hat" },
  "entscheiden":{ ps3vowel: null, prat: "entschied", pp: "entschieden", aux: "hat" },
  "vermeiden":  { ps3vowel: null, prat: "vermied", pp: "vermieden", aux: "hat" },
  "schneiden":  { ps3vowel: null, prat: "schnitt", pp: "geschnitten", aux: "hat" },
  "leiden":     { ps3vowel: null, prat: "litt", pp: "gelitten", aux: "hat" },
  "streiten":   { ps3vowel: null, prat: "stritt", pp: "gestritten", aux: "hat" },
  "reiten":     { ps3vowel: null, prat: "ritt", pp: "geritten", aux: "ist" },
  "greifen":    { ps3vowel: null, prat: "griff", pp: "gegriffen", aux: "hat" },
  "pfeifen":    { ps3vowel: null, prat: "pfiff", pp: "gepfiffen", aux: "hat" },
  "beissen":    { ps3vowel: null, prat: "biss", pp: "gebissen", aux: "hat" },

  // ── i -> a, u/o pattern (trinken, finden type) ──
  "trinken":    { ps3vowel: null, prat: "trank", pp: "getrunken", aux: "hat" },
  "finden":     { ps3vowel: null, prat: "fand", pp: "gefunden", aux: "hat" },
  "singen":     { ps3vowel: null, prat: "sang", pp: "gesungen", aux: "hat" },
  "springen":   { ps3vowel: null, prat: "sprang", pp: "gesprungen", aux: "ist" },
  "klingen":    { ps3vowel: null, prat: "klang", pp: "geklungen", aux: "hat" },
  "schwimmen":  { ps3vowel: null, prat: "schwamm", pp: "geschwommen", aux: "ist" },
  "gewinnen":   { ps3vowel: null, prat: "gewann", pp: "gewonnen", aux: "hat" },
  "beginnen":   { ps3vowel: null, prat: "begann", pp: "begonnen", aux: "hat" },
  "binden":     { ps3vowel: null, prat: "band", pp: "gebunden", aux: "hat" },
  "zwingen":    { ps3vowel: null, prat: "zwang", pp: "gezwungen", aux: "hat" },
  "verschwinden":{ ps3vowel: null, prat: "verschwand", pp: "verschwunden", aux: "ist" },

  // ── ie -> o, o pattern (fliegen, ziehen type) ──
  "fliegen":    { ps3vowel: null, prat: "flog", pp: "geflogen", aux: "ist" },
  "fliessen":   { ps3vowel: null, prat: "floss", pp: "geflossen", aux: "ist" },
  "geniessen":  { ps3vowel: null, prat: "genoss", pp: "genossen", aux: "hat" },
  "giessen":    { ps3vowel: null, prat: "goss", pp: "gegossen", aux: "hat" },
  "schiessen":  { ps3vowel: null, prat: "schoss", pp: "geschossen", aux: "hat" },
  "schliessen": { ps3vowel: null, prat: "schloss", pp: "geschlossen", aux: "hat" },
  "verlieren":  { ps3vowel: null, prat: "verlor", pp: "verloren", aux: "hat" },
  "frieren":    { ps3vowel: null, prat: "fror", pp: "gefroren", aux: "hat" },
  "ziehen":     { ps3vowel: null, prat: "zog", pp: "gezogen", aux: "hat" },
  "bieten":     { ps3vowel: null, prat: "bot", pp: "geboten", aux: "hat" },
  "verbieten":  { ps3vowel: null, prat: "verbot", pp: "verboten", aux: "hat" },

  // ── Irregular standouts ──
  "gehen":      { ps3vowel: null, prat: "ging", pp: "gegangen", aux: "ist" },
  "stehen":     { ps3vowel: null, prat: "stand", pp: "gestanden", aux: "hat" },
  "verstehen":  { ps3vowel: null, prat: "verstand", pp: "verstanden", aux: "hat" },
  "kommen":     { ps3vowel: null, prat: "kam", pp: "gekommen", aux: "ist" },
  "bekommen":   { ps3vowel: null, prat: "bekam", pp: "bekommen", aux: "hat" },
  "fallen":     { ps3vowel: "a:a", prat: "fiel", pp: "gefallen", aux: "ist" },
  "gefallen":   { ps3vowel: "a:a", prat: "gefiel", pp: "gefallen", aux: "hat" },
  "halten":     { ps3vowel: "a:a", prat: "hielt", pp: "gehalten", aux: "hat" },
  "lassen":     { ps3vowel: "a:a", prat: "liess", pp: "gelassen", aux: "hat" },
  "schlafen":   { ps3vowel: "a:a", prat: "schlief", pp: "geschlafen", aux: "hat" },
  "laufen":     { ps3vowel: "a:au", prat: "lief", pp: "gelaufen", aux: "ist" },
  "rufen":      { ps3vowel: null, prat: "rief", pp: "gerufen", aux: "hat" },
  "heissen":    { ps3vowel: null, prat: "hiess", pp: "geheissen", aux: "hat" },
  "sitzen":     { ps3vowel: null, prat: "sass", pp: "gesessen", aux: "hat" },
  "liegen":     { ps3vowel: null, prat: "lag", pp: "gelegen", aux: "hat" },
  "tun":        { ps3vowel: null, prat: "tat", pp: "getan", aux: "hat" },
  "wissen":     { ps3vowel: null, prat: "wusste", pp: "gewusst", aux: "hat", ps3stem: "weiss", irregular_prasens: true },
};

// ════════════════════════════════════════════════════════════
// MIXED VERBS (weak Prateritum endings but vowel change)
// ════════════════════════════════════════════════════════════

const MIXED_VERBS = {
  "bringen":    { prat: "brachte", pp: "gebracht", aux: "hat" },
  "denken":     { prat: "dachte", pp: "gedacht", aux: "hat" },
  "kennen":     { prat: "kannte", pp: "gekannt", aux: "hat" },
  "nennen":     { prat: "nannte", pp: "genannt", aux: "hat" },
  "rennen":     { prat: "rannte", pp: "gerannt", aux: "ist" },
  "senden":     { prat: "sandte", pp: "gesandt", aux: "hat" },
  "wenden":     { prat: "wandte", pp: "gewandt", aux: "hat" },
  "brennen":    { prat: "brannte", pp: "gebrannt", aux: "hat" },
};

// ════════════════════════════════════════════════════════════
// MODAL VERBS (special conjugation: no endings in 1st/3rd sg Prasens)
// ════════════════════════════════════════════════════════════

const MODAL_VERBS = {
  "konnen": {
    prasens: ["kann", "kannst", "kann", "konnen", "konnt", "konnen"],
    prat: ["konnte", "konntest", "konnte", "konnten", "konntet", "konnten"],
    pp: "gekonnt", konj2: "konnte", aux: "hat",
  },
  "mussen": {
    prasens: ["muss", "musst", "muss", "mussen", "musst", "mussen"],
    prat: ["musste", "musstest", "musste", "mussten", "musstet", "mussten"],
    pp: "gemusst", konj2: "musste", aux: "hat",
  },
  "durfen": {
    prasens: ["darf", "darfst", "darf", "durfen", "durft", "durfen"],
    prat: ["durfte", "durftest", "durfte", "durften", "durftet", "durften"],
    pp: "gedurft", konj2: "durfte", aux: "hat",
  },
  "sollen": {
    prasens: ["soll", "sollst", "soll", "sollen", "sollt", "sollen"],
    prat: ["sollte", "solltest", "sollte", "sollten", "solltet", "sollten"],
    pp: "gesollt", konj2: "sollte", aux: "hat",
  },
  "wollen": {
    prasens: ["will", "willst", "will", "wollen", "wollt", "wollen"],
    prat: ["wollte", "wolltest", "wollte", "wollten", "wolltet", "wollten"],
    pp: "gewollt", konj2: "wollte", aux: "hat",
  },
  "mogen": {
    prasens: ["mag", "magst", "mag", "mogen", "mogt", "mogen"],
    prat: ["mochte", "mochtest", "mochte", "mochten", "mochtet", "mochten"],
    pp: "gemocht", konj2: "mochte", aux: "hat",
  },
};

// ════════════════════════════════════════════════════════════
// AUXILIARY VERBS (fully irregular — hardcoded tables)
// ════════════════════════════════════════════════════════════

const AUXILIARY_VERBS = {
  "sein": {
    prasens: ["bin", "bist", "ist", "sind", "seid", "sind"],
    prat: ["war", "warst", "war", "waren", "wart", "waren"],
    pp: "gewesen", aux: "ist",
    konj2: ["ware", "warest", "ware", "waren", "waret", "waren"],
    imperativ: [null, "sei", "seid", "seien Sie"],
    partizip1: "seiend",
  },
  "haben": {
    prasens: ["habe", "hast", "hat", "haben", "habt", "haben"],
    prat: ["hatte", "hattest", "hatte", "hatten", "hattet", "hatten"],
    pp: "gehabt", aux: "hat",
    konj2: ["hatte", "hattest", "hatte", "hatten", "hattet", "hatten"],
    imperativ: [null, "hab", "habt", "haben Sie"],
    partizip1: "habend",
  },
  "werden": {
    prasens: ["werde", "wirst", "wird", "werden", "werdet", "werden"],
    prat: ["wurde", "wurdest", "wurde", "wurden", "wurdet", "wurden"],
    pp: "geworden", aux: "ist",
    konj2: ["wurde", "wurdest", "wurde", "wurden", "wurdet", "wurden"],
    imperativ: [null, "werde", "werdet", "werden Sie"],
    partizip1: "werdend",
  },
};

// Person labels for conjugation tables
const PERSONS = ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"];

// ════════════════════════════════════════════════════════════
// STEM EXTRACTION
// ════════════════════════════════════════════════════════════

// Extract stem from infinitive: machen -> mach, arbeiten -> arbeit
function getStem(infinitive) {
  if (!infinitive) return "";
  if (infinitive.endsWith("en")) return infinitive.slice(0, -2);
  if (infinitive.endsWith("n")) return infinitive.slice(0, -1); // tun -> tu, sein -> sei (edge cases)
  return infinitive;
}

// Check if stem needs -e- insertion before consonant endings (-st, -t, -te)
// Stems ending in -d, -t, -chn, -ffn, -gn, -tm need epenthesis
function needsEInsertion(stem) {
  if (/[dt]$/.test(stem)) return true;
  if (/[ck]n$/.test(stem)) return true;
  if (/fn$/.test(stem)) return true;
  if (/gn$/.test(stem)) return true;
  if (/tm$/.test(stem)) return true;
  return false;
}

// Check if stem ends in -s, -ss, -ss, -z, -tz (du-form: -st collapses to -t)
function needsSConsonantCollapse(stem) {
  return /[sz]$/.test(stem) || /ss$/.test(stem);
}

// ════════════════════════════════════════════════════════════
// PREFIX DETECTION
// ════════════════════════════════════════════════════════════

// Detect if a verb has a separable or inseparable prefix
function detectPrefix(infinitive) {
  if (!infinitive) return { prefix: null, base: infinitive, type: null };

  // Check inseparable first (they never separate)
  for (const p of INSEPARABLE_PREFIXES) {
    if (infinitive.startsWith(p) && infinitive.length > p.length + 2) {
      // "ge" prefix: only inseparable when the remainder is not a known verb on its own
      // e.g., "gehoren" is inseparable, but "gehen" is NOT prefixed
      if (p === "ge" && (infinitive === "gehen" || infinitive === "geben" || infinitive === "gelten")) continue;
      return { prefix: p, base: infinitive.slice(p.length), type: "inseparable" };
    }
  }

  // Check separable prefixes
  for (const p of SEPARABLE_PREFIXES) {
    if (infinitive.startsWith(p) && infinitive.length > p.length + 2) {
      const base = infinitive.slice(p.length);
      // Verify the remainder looks like a verb (ends in -en or -n)
      if (base.endsWith("en") || base.endsWith("n")) {
        return { prefix: p, base, type: "separable" };
      }
    }
  }

  return { prefix: null, base: infinitive, type: null };
}

// ════════════════════════════════════════════════════════════
// VERB TYPE DETECTION
// ════════════════════════════════════════════════════════════

export const VERB_TYPES = {
  regular:      { id: "regular",      label: "Regular (weak)",          de: "schwaches Verb" },
  strong:       { id: "strong",       label: "Strong",                  de: "starkes Verb" },
  mixed:        { id: "mixed",        label: "Mixed",                   de: "gemischtes Verb" },
  modal:        { id: "modal",        label: "Modal",                   de: "Modalverb" },
  auxiliary:    { id: "auxiliary",     label: "Auxiliary",               de: "Hilfsverb" },
  separable:    { id: "separable",    label: "Separable prefix",        de: "trennbares Verb" },
  inseparable:  { id: "inseparable",  label: "Inseparable prefix",      de: "untrennbares Verb" },
  reflexive:    { id: "reflexive",    label: "Reflexive",               de: "reflexives Verb" },
};

export function detectVerbType(infinitive) {
  if (!infinitive) return "regular";
  const clean = infinitive.replace(/^sich\s+/, "");

  // Auxiliaries
  if (AUXILIARY_VERBS[clean]) return "auxiliary";

  // Modals
  if (MODAL_VERBS[clean]) return "modal";

  // Strong verbs (check full infinitive first, then base for prefixed forms)
  if (STRONG_VERBS[clean]) return "strong";

  // Mixed verbs
  if (MIXED_VERBS[clean]) return "mixed";

  // Reflexive (starts with "sich")
  if (infinitive.startsWith("sich ")) return "reflexive";

  // Check prefix
  const { prefix, base, type } = detectPrefix(clean);
  if (type === "separable") {
    // Check if the base verb is strong/mixed
    if (STRONG_VERBS[base]) return "strong";
    if (MIXED_VERBS[base]) return "mixed";
    return "separable";
  }
  if (type === "inseparable") {
    // Check if the full verb is in the strong/mixed tables
    if (STRONG_VERBS[clean]) return "strong";
    if (MIXED_VERBS[clean]) return "mixed";
    return "inseparable";
  }

  return "regular";
}

// ════════════════════════════════════════════════════════════
// CONJUGATION HELPERS
// ════════════════════════════════════════════════════════════

// Apply Prasens 3rd-person vowel change to a stem
// ps3vowel: "a:a" means Umlaut (a->a with dots = a), "e:i" means e->i, "e:ie" means e->ie
function applyPrasensChange(stem, strongEntry) {
  if (!strongEntry || !strongEntry.ps3vowel) return null;
  if (strongEntry.ps3stem) return strongEntry.ps3stem; // Fully irregular stem (nehmen->nimm, essen->iss)

  const [from, to] = strongEntry.ps3vowel.split(":");
  // Find the LAST occurrence of the vowel in the stem and replace it
  // "a:a" -> umlaut: a becomes a (display limitation, but semantically correct)
  // In a real app with Unicode: a->a, o->o, u->u, au->au
  const vowelMap = {
    "a:a": [/a(?=[^aeiou]*$)/, "\u00e4"],    // a -> a with umlaut
    "a:au": [/a(?=[^aeiou]*$)/, "\u00e4u"],   // a -> au with umlaut (laufen)
    "e:i": [/e(?=[^aeiou]*$)/, "i"],           // e -> i
    "e:ie": [/e(?=[^aeiou]*$)/, "ie"],         // e -> ie
  };
  const key = from + ":" + to;
  const mapping = vowelMap[key];
  if (!mapping) return null;
  const changed = stem.replace(mapping[0], mapping[1]);
  return changed !== stem ? changed : null;
}

// Conjugate regular Prasens for all 6 persons
function conjugateRegularPrasens(stem, infinitive) {
  const e = needsEInsertion(stem);
  const sCollapse = needsSConsonantCollapse(stem);

  return [
    stem + "e",                                      // ich mache
    stem + (e ? "est" : (sCollapse ? "t" : "st")),   // du machst / arbeitest / reist
    stem + (e ? "et" : "t"),                          // er macht / arbeitet
    infinitive,                                       // wir machen (= infinitive)
    stem + (e ? "et" : "t"),                          // ihr macht / arbeitet
    infinitive,                                       // sie/Sie machen (= infinitive)
  ];
}

// Conjugate regular Prateritum (weak verbs: stem + -te, -test, -te, -ten, -tet, -ten)
function conjugateRegularPrateritum(stem) {
  const e = needsEInsertion(stem);
  const base = stem + (e ? "ete" : "te");
  return [
    base,                               // ich machte
    base + "st",                        // du machtest
    base,                               // er machte
    base + "n",                         // wir machten
    base + "t",                         // ihr machtet
    base + "n",                         // sie machten
  ];
}

// Conjugate strong Prateritum (stem change, NO -te suffix, but person endings)
function conjugateStrongPrateritum(pratStem) {
  const e = needsEInsertion(pratStem);
  return [
    pratStem,                                        // ich fuhr
    pratStem + (e ? "est" : "st"),                   // du fuhrst
    pratStem,                                        // er fuhr
    pratStem + "en",                                 // wir fuhren
    pratStem + (e ? "et" : "t"),                     // ihr fuhrt
    pratStem + "en",                                 // sie fuhren
  ];
}

// Build Partizip II for a verb
function buildPartizipII(infinitive, stem, prefixInfo) {
  // Check strong/mixed tables first (they have pre-built pp)
  const clean = infinitive.replace(/^sich\s+/, "");
  const strong = STRONG_VERBS[clean];
  if (strong) return strong.pp;
  const mixed = MIXED_VERBS[clean];
  if (mixed) return mixed.pp;

  // For prefixed verbs, check the base verb too
  if (prefixInfo.prefix && prefixInfo.base) {
    const baseStrong = STRONG_VERBS[prefixInfo.base];
    const baseMixed = MIXED_VERBS[prefixInfo.base];
    if (baseStrong) {
      // Reconstruct PP with prefix: aufstehen -> aufgestanden, verstehen -> verstanden
      const basePP = baseStrong.pp;
      if (prefixInfo.type === "separable") {
        // Insert prefix before ge-: ge-standen -> auf-ge-standen
        if (basePP.startsWith("ge")) return prefixInfo.prefix + basePP;
        return prefixInfo.prefix + "ge" + basePP;
      }
      // Inseparable: no ge-, just prefix + base PP without ge-
      return prefixInfo.prefix + basePP.replace(/^ge/, "");
    }
    if (baseMixed) {
      const basePP = baseMixed.pp;
      if (prefixInfo.type === "separable") {
        if (basePP.startsWith("ge")) return prefixInfo.prefix + basePP;
        return prefixInfo.prefix + "ge" + basePP;
      }
      return prefixInfo.prefix + basePP.replace(/^ge/, "");
    }
  }

  // Regular weak verb: ge- + stem + -t (with e-insertion if needed)
  const baseStem = getStem(prefixInfo.base || infinitive);
  const e = needsEInsertion(baseStem);
  const suffix = e ? "et" : "t";

  if (prefixInfo.type === "inseparable") {
    // No ge-: besuchen -> besucht, erzahlen -> erzahlt
    return prefixInfo.prefix + baseStem + suffix;
  }
  if (prefixInfo.type === "separable") {
    // Prefix + ge + stem + t: aufmachen -> aufgemacht
    return prefixInfo.prefix + "ge" + baseStem + suffix;
  }

  // No prefix: ge + stem + t: machen -> gemacht
  return "ge" + baseStem + suffix;
}

// Build Partizip I (present participle): infinitive + -d
function buildPartizipI(infinitive) {
  return infinitive + "d";
}

// Build Imperativ forms: du, ihr, Sie
function buildImperativ(stem, infinitive, strongEntry, prefixInfo) {
  // Strong verbs with e->i/ie change use the changed stem for du-imperative
  let duStem = stem;
  if (strongEntry && strongEntry.ps3vowel) {
    const changed = applyPrasensChange(stem, strongEntry);
    if (changed && strongEntry.ps3vowel.startsWith("e:")) {
      duStem = changed; // gib! lies! nimm!
    }
    // a->a Umlaut does NOT apply to imperative (fahr! not fahr!)
  }
  if (strongEntry && strongEntry.ps3stem && strongEntry.ps3vowel && strongEntry.ps3vowel.startsWith("e:")) {
    duStem = strongEntry.ps3stem; // nimm! iss!
  }

  let duForm = duStem; // No ending for du-imperative (or optional -e for regular)
  let ihrForm = stem + (needsEInsertion(stem) ? "et" : "t");
  let sieForm = infinitive + " Sie"; // Always infinitive + Sie

  // Separable prefix: prefix goes to the end
  if (prefixInfo.type === "separable") {
    const baseStem = getStem(prefixInfo.base);
    let baseDuStem = baseStem;
    const baseStrong = STRONG_VERBS[prefixInfo.base];
    if (baseStrong && baseStrong.ps3vowel && baseStrong.ps3vowel.startsWith("e:")) {
      const changed = applyPrasensChange(baseStem, baseStrong);
      if (changed) baseDuStem = changed;
      if (baseStrong.ps3stem) baseDuStem = baseStrong.ps3stem;
    }
    duForm = baseDuStem + " " + prefixInfo.prefix;
    ihrForm = baseStem + (needsEInsertion(baseStem) ? "et" : "t") + " " + prefixInfo.prefix;
    sieForm = prefixInfo.base + " Sie " + prefixInfo.prefix;
  }

  return {
    du: duForm + "!",
    ihr: ihrForm + "!",
    sie: sieForm + "!",
  };
}

// Get the auxiliary verb (hat/ist) for Perfekt
function getAuxiliary(infinitive) {
  const clean = infinitive.replace(/^sich\s+/, "");
  const strong = STRONG_VERBS[clean];
  if (strong) return strong.aux;
  const mixed = MIXED_VERBS[clean];
  if (mixed) return mixed.aux;
  const aux = AUXILIARY_VERBS[clean];
  if (aux) return aux.aux;

  // Check base of prefixed verbs
  const { base } = detectPrefix(clean);
  if (base !== clean) {
    const baseStrong = STRONG_VERBS[base];
    if (baseStrong) return baseStrong.aux;
    const baseMixed = MIXED_VERBS[base];
    if (baseMixed) return baseMixed.aux;
  }

  // Reflexive verbs always use "hat"
  if (infinitive.startsWith("sich ")) return "hat";

  // Default: "hat" for most regular verbs
  return "hat";
}

// ════════════════════════════════════════════════════════════
// MAIN CONJUGATION API
// ════════════════════════════════════════════════════════════

export function conjugateVerb(infinitive, verbTypeOverride) {
  if (!infinitive) return {};
  const isReflexive = infinitive.startsWith("sich ");
  const clean = infinitive.replace(/^sich\s+/, "");
  const type = verbTypeOverride || detectVerbType(infinitive);
  const result = {};

  // ── Auxiliary verbs (sein, haben, werden): fully hardcoded ──
  if (AUXILIARY_VERBS[clean]) {
    const aux = AUXILIARY_VERBS[clean];
    const refPron = isReflexive ? ["mich", "dich", "sich", "uns", "euch", "sich"] : null;
    const rp = (i) => refPron ? refPron[i] + " " : "";

    // Prasens
    for (let i = 0; i < 6; i++) {
      result["prasens_" + i] = {
        form: PERSONS[i] + " " + rp(i) + aux.prasens[i],
        label: PERSONS[i], group: "Prasens", tense: "prasens", level: "A1",
      };
    }
    // Prateritum
    for (let i = 0; i < 6; i++) {
      result["prateritum_" + i] = {
        form: PERSONS[i] + " " + rp(i) + aux.prat[i],
        label: PERSONS[i], group: "Prateritum", tense: "prateritum", level: "A2",
      };
    }
    // Perfekt
    const perfAux = aux.aux === "ist" ? "sein" : "haben";
    const perfAuxForms = AUXILIARY_VERBS[perfAux].prasens;
    for (let i = 0; i < 6; i++) {
      result["perfekt_" + i] = {
        form: PERSONS[i] + " " + rp(i) + perfAuxForms[i] + " " + aux.pp,
        label: PERSONS[i], group: "Perfekt", tense: "perfekt", level: "A2",
      };
    }
    // Konjunktiv II
    const konj2 = Array.isArray(aux.konj2) ? aux.konj2 : null;
    if (konj2) {
      for (let i = 0; i < 6; i++) {
        result["konjunktiv2_" + i] = {
          form: PERSONS[i] + " " + rp(i) + konj2[i],
          label: PERSONS[i], group: "Konjunktiv II", tense: "konjunktiv2", level: "B1",
        };
      }
    }
    // Imperativ
    if (aux.imperativ) {
      if (aux.imperativ[1]) result.imperativ_du = { form: aux.imperativ[1] + "!", label: "du", group: "Imperativ", tense: "imperativ", level: "A2" };
      if (aux.imperativ[2]) result.imperativ_ihr = { form: aux.imperativ[2] + "!", label: "ihr", group: "Imperativ", tense: "imperativ", level: "A2" };
      if (aux.imperativ[3]) result.imperativ_sie = { form: aux.imperativ[3] + "!", label: "Sie", group: "Imperativ", tense: "imperativ", level: "A2" };
    }
    // Partizipien
    result.partizip1 = { form: aux.partizip1 || buildPartizipI(clean), label: "Partizip I", group: "Partizipien", tense: "partizip", level: "B1" };
    result.partizip2 = { form: aux.pp, label: "Partizip II", group: "Partizipien", tense: "partizip", level: "A2" };
    return result;
  }

  // ── Modal verbs: use hardcoded tables ──
  if (MODAL_VERBS[clean]) {
    const modal = MODAL_VERBS[clean];
    for (let i = 0; i < 6; i++) {
      result["prasens_" + i] = {
        form: PERSONS[i] + " " + modal.prasens[i],
        label: PERSONS[i], group: "Prasens", tense: "prasens", level: "A1",
      };
    }
    for (let i = 0; i < 6; i++) {
      result["prateritum_" + i] = {
        form: PERSONS[i] + " " + modal.prat[i],
        label: PERSONS[i], group: "Prateritum", tense: "prateritum", level: "A2",
      };
    }
    // Perfekt (modals use double infinitive in perfect, but simplified here)
    const habenForms = AUXILIARY_VERBS.haben.prasens;
    for (let i = 0; i < 6; i++) {
      result["perfekt_" + i] = {
        form: PERSONS[i] + " " + habenForms[i] + " " + modal.pp,
        label: PERSONS[i], group: "Perfekt", tense: "perfekt", level: "B1",
      };
    }
    // Konjunktiv II
    if (modal.konj2) {
      const k2stem = modal.konj2;
      const k2forms = [k2stem, k2stem + "st", k2stem, k2stem + "n", k2stem + "t", k2stem + "n"];
      for (let i = 0; i < 6; i++) {
        result["konjunktiv2_" + i] = {
          form: PERSONS[i] + " " + k2forms[i],
          label: PERSONS[i], group: "Konjunktiv II", tense: "konjunktiv2", level: "B1",
        };
      }
    }
    result.partizip2 = { form: modal.pp, label: "Partizip II", group: "Partizipien", tense: "partizip", level: "B1" };
    return result;
  }

  // ── All other verbs: regular, strong, mixed, prefixed, reflexive ──
  const prefixInfo = detectPrefix(clean);
  const baseInf = prefixInfo.base || clean;
  const baseStem = getStem(baseInf);

  // Look up strong/mixed data (check full verb first, then base)
  const strongFull = STRONG_VERBS[clean];
  const strongBase = STRONG_VERBS[baseInf];
  const mixedFull = MIXED_VERBS[clean];
  const mixedBase = MIXED_VERBS[baseInf];
  const strongEntry = strongFull || strongBase || null;
  const mixedEntry = mixedFull || mixedBase || null;
  const isStrong = !!strongEntry;
  const isMixed = !!mixedEntry;

  // Reflexive pronoun forms
  const refPron = isReflexive ? ["mich", "dich", "sich", "uns", "euch", "sich"] : null;
  const rp = (i) => refPron ? refPron[i] + " " : "";

  // ── PRASENS ──
  let prasensForms;
  if (strongEntry && strongEntry.irregular_prasens) {
    // Fully irregular Prasens (wissen)
    prasensForms = conjugateRegularPrasens(baseStem, baseInf);
    if (strongEntry.ps3stem) {
      prasensForms[0] = strongEntry.ps3stem; // ich weiss
      prasensForms[2] = strongEntry.ps3stem; // er weiss
    }
  } else if (isStrong && strongEntry.ps3vowel) {
    // Strong with Prasens vowel change (du/er only)
    prasensForms = conjugateRegularPrasens(baseStem, baseInf);
    const changedStem = applyPrasensChange(baseStem, strongEntry);
    if (changedStem) {
      // du: changed stem + st (or -t for s-stems)
      const sCollapse = needsSConsonantCollapse(changedStem);
      prasensForms[1] = changedStem + (sCollapse ? "t" : "st");
      // er/sie/es: changed stem + t
      prasensForms[2] = changedStem + "t";
    }
  } else {
    prasensForms = conjugateRegularPrasens(baseStem, baseInf);
  }

  // Apply separable prefix: "macht" -> "macht ... auf" (shown as "macht auf" in tables)
  for (let i = 0; i < 6; i++) {
    let form = prasensForms[i];
    if (prefixInfo.type === "separable") {
      form = form + " " + prefixInfo.prefix;
    } else if (prefixInfo.prefix) {
      form = prefixInfo.prefix + form;
    }
    result["prasens_" + i] = {
      form: PERSONS[i] + " " + rp(i) + form,
      label: PERSONS[i], group: "Prasens", tense: "prasens", level: "A1",
    };
  }

  // ── PRATERITUM ──
  let pratForms;
  if (isStrong) {
    // Strong: use Ablaut stem from table
    let pratStem;
    if (strongFull) {
      pratStem = strongFull.prat;
    } else if (strongBase) {
      // Prefixed strong verb: add prefix to base Prateritum stem
      pratStem = strongBase.prat;
    }
    pratForms = conjugateStrongPrateritum(pratStem);
    // Add prefix for inseparable, or append for separable
    if (prefixInfo.type === "inseparable") {
      pratForms = pratForms.map(f => prefixInfo.prefix + f);
    } else if (prefixInfo.type === "separable") {
      pratForms = pratForms.map(f => f + " " + prefixInfo.prefix);
    }
  } else if (isMixed) {
    let pratStem;
    if (mixedFull) {
      pratStem = mixedFull.prat;
    } else {
      pratStem = mixedBase.prat;
    }
    // Mixed verbs use weak endings on the changed stem
    // pratStem already includes the -te ending (e.g., "dachte")
    const base = pratStem;
    pratForms = [base, base + "st", base, base + "n", base + "t", base + "n"];
    if (prefixInfo.type === "inseparable") {
      pratForms = pratForms.map(f => prefixInfo.prefix + f);
    } else if (prefixInfo.type === "separable") {
      pratForms = pratForms.map(f => f + " " + prefixInfo.prefix);
    }
  } else {
    // Regular weak verb
    pratForms = conjugateRegularPrateritum(baseStem);
    if (prefixInfo.type === "inseparable") {
      pratForms = pratForms.map(f => prefixInfo.prefix + f);
    } else if (prefixInfo.type === "separable") {
      pratForms = pratForms.map(f => f + " " + prefixInfo.prefix);
    }
  }
  for (let i = 0; i < 6; i++) {
    result["prateritum_" + i] = {
      form: PERSONS[i] + " " + rp(i) + pratForms[i],
      label: PERSONS[i], group: "Prateritum", tense: "prateritum", level: "A2",
    };
  }

  // ── PERFEKT ──
  const pp = buildPartizipII(clean, baseStem, prefixInfo);
  const auxVerb = getAuxiliary(infinitive);
  const auxForms = AUXILIARY_VERBS[auxVerb === "ist" ? "sein" : "haben"].prasens;
  for (let i = 0; i < 6; i++) {
    result["perfekt_" + i] = {
      form: PERSONS[i] + " " + rp(i) + auxForms[i] + " " + pp,
      label: PERSONS[i], group: "Perfekt", tense: "perfekt", level: "A2",
    };
  }

  // ── KONJUNKTIV II ──
  // Regular verbs: wurde + infinitive
  // Strong verbs with special Konj II: Prateritum stem + Umlaut + -e endings
  const wurdeForms = AUXILIARY_VERBS.werden.konj2 || AUXILIARY_VERBS.werden.prat;
  for (let i = 0; i < 6; i++) {
    result["konjunktiv2_" + i] = {
      form: PERSONS[i] + " " + rp(i) + wurdeForms[i] + " " + (isReflexive ? "sich " : "") + clean,
      label: PERSONS[i], group: "Konjunktiv II", tense: "konjunktiv2", level: "B1",
    };
  }

  // ── IMPERATIV ──
  const imp = buildImperativ(baseStem, baseInf, strongEntry, prefixInfo);
  result.imperativ_du = { form: (isReflexive ? rp(1) : "") + imp.du, label: "du", group: "Imperativ", tense: "imperativ", level: "A2" };
  result.imperativ_ihr = { form: (isReflexive ? rp(4) : "") + imp.ihr, label: "ihr", group: "Imperativ", tense: "imperativ", level: "A2" };
  result.imperativ_sie = { form: (isReflexive ? rp(5) : "") + imp.sie, label: "Sie", group: "Imperativ", tense: "imperativ", level: "A2" };

  // ── PARTIZIPIEN ──
  result.partizip1 = { form: buildPartizipI(clean), label: "Partizip I", group: "Partizipien", tense: "partizip", level: "B1" };
  result.partizip2 = { form: pp, label: "Partizip II", group: "Partizipien", tense: "partizip", level: "A2" };

  return result;
}

// ════════════════════════════════════════════════════════════
// VERB INFO API
// ════════════════════════════════════════════════════════════

export function getVerbInfo(infinitive) {
  if (!infinitive) return { type: "regular", label: "Regular", aux: "hat", notes: null };
  const type = detectVerbType(infinitive);
  const typeInfo = VERB_TYPES[type] || VERB_TYPES.regular;
  const aux = getAuxiliary(infinitive);
  const clean = infinitive.replace(/^sich\s+/, "");
  const prefixInfo = detectPrefix(clean);
  let notes = null;
  if (prefixInfo.type === "separable") notes = "Separable prefix: " + prefixInfo.prefix + "-";
  if (prefixInfo.type === "inseparable") notes = "Inseparable prefix: " + prefixInfo.prefix + "-";
  if (infinitive.startsWith("sich ")) notes = (notes ? notes + ". " : "") + "Reflexive verb";
  return { type: type, label: typeInfo.label, de: typeInfo.de, aux: aux, notes: notes };
}

// ════════════════════════════════════════════════════════════
// FORM-TO-LEMMA REVERSE INDEX BUILDER
// Maps every conjugated surface form back to its infinitive.
// Searching "fuhrst" resolves to "fahren".
// ════════════════════════════════════════════════════════════

export function buildFormIndex(infinitives) {
  const index = {};
  for (const inf of infinitives) {
    try {
      const forms = conjugateVerb(inf);
      for (const entry of Object.values(forms)) {
        if (!entry.form || entry.form === inf) continue;
        // Extract the conjugated word(s) from "PERSON form" pattern
        const words = entry.form.split(" ");
        // Skip the person pronoun (first word, or first two for er/sie/es)
        let startIdx = 1;
        if (words[0] === "er/sie/es") startIdx = 1;
        // Index each word from the conjugated part
        for (let i = startIdx; i < words.length; i++) {
          const w = words[i].replace(/[!?,.]$/g, "").toLowerCase();
          if (w.length > 1 && w !== "sich" && w !== "mich" && w !== "dich" && w !== "uns" && w !== "euch" &&
              w !== "hat" && w !== "habe" && w !== "hast" && w !== "haben" && w !== "habt" &&
              w !== "bin" && w !== "bist" && w !== "ist" && w !== "sind" && w !== "seid" &&
              w !== "werde" && w !== "wirst" && w !== "wird" && w !== "werden" && w !== "werdet" &&
              w !== "wurde" && w !== "wurdest" && w !== "wurden" && w !== "wurdet" &&
              w !== "sie" && w !== "sie/sie") {
            if (!index[w]) index[w] = inf;
          }
        }
      }
    } catch (e) {
      // Skip verbs that fail to conjugate
    }
  }
  return index;
}

// ════════════════════════════════════════════════════════════
// NOUN CASE DECLENSION
// Generate a noun across German's 4 cases with articles
// ════════════════════════════════════════════════════════════

// Article declension tables
const DEF_ARTICLES = {
  m:  { nom: "der", acc: "den", dat: "dem", gen: "des" },
  f:  { nom: "die", acc: "die", dat: "der", gen: "der" },
  n:  { nom: "das", acc: "das", dat: "dem", gen: "des" },
  pl: { nom: "die", acc: "die", dat: "den", gen: "der" },
};

const INDEF_ARTICLES = {
  m:  { nom: "ein", acc: "einen", dat: "einem", gen: "eines" },
  f:  { nom: "eine", acc: "eine", dat: "einer", gen: "einer" },
  n:  { nom: "ein", acc: "ein", dat: "einem", gen: "eines" },
};

// Weak (n-declension) nouns: add -n or -en in all cases except nominative singular
const WEAK_NOUN_ENDINGS = ["e", "ant", "ent", "ist", "at", "oge", "graf", "nom"];
// Common weak nouns for quick lookup
const KNOWN_WEAK_NOUNS = new Set([
  "Herr", "Mensch", "Junge", "Kunde", "Kollege", "Nachbar",
  "Student", "Prasident", "Patient", "Journalist", "Tourist",
  "Polizist", "Demokrat", "Automat", "Elefant", "Bar",
  "Affe", "Hase", "Lowe", "Rabe",
]);

function isWeakNoun(noun) {
  if (KNOWN_WEAK_NOUNS.has(noun)) return true;
  const lower = noun.toLowerCase();
  return WEAK_NOUN_ENDINGS.some(e => lower.endsWith(e) && lower.length > e.length + 2);
}

export function nounWithCases(noun, gender) {
  if (!noun || !gender) return [];
  const g = gender.toLowerCase();
  const defArt = DEF_ARTICLES[g];
  const indefArt = INDEF_ARTICLES[g];
  if (!defArt) return [];

  const cases = ["nom", "acc", "dat", "gen"];
  const caseLabels = { nom: "Nominativ", acc: "Akkusativ", dat: "Dativ", gen: "Genitiv" };
  const result = [];

  const weak = g === "m" && isWeakNoun(noun);

  for (const c of cases) {
    let nounForm = noun;
    if (weak && c !== "nom") {
      // Weak nouns add -n or -en in acc/dat/gen
      nounForm = noun.endsWith("e") ? noun + "n" : noun + "en";
    } else if ((g === "m" || g === "n") && c === "gen") {
      // Masculine/neuter genitive: add -s or -es
      if (noun.endsWith("s") || noun.endsWith("ss") || noun.endsWith("z") || noun.endsWith("tz") ||
          noun.endsWith("x") || noun.endsWith("sch")) {
        nounForm = noun + "es";
      } else if (noun.length <= 4) {
        nounForm = noun + "es"; // Short words prefer -es
      } else {
        nounForm = noun + "s";
      }
    } else if (g === "pl" && c === "dat") {
      // Plural dative: add -n if not already ending in -n or -s
      if (!noun.endsWith("n") && !noun.endsWith("s")) {
        nounForm = noun + "n";
      }
    }

    result.push({
      case: c,
      caseLabel: caseLabels[c],
      definite: defArt[c] + " " + nounForm,
      indefinite: indefArt ? indefArt[c] + " " + nounForm : null,
      nounForm: nounForm,
      article: defArt[c],
    });
  }

  return result;
}

// ════════════════════════════════════════════════════════════
// UTILITY EXPORTS
// ════════════════════════════════════════════════════════════

// Get all verb endings metadata (for UI rendering)
export function getEndingsList() {
  const groups = ["Prasens", "Prateritum", "Perfekt", "Konjunktiv II", "Imperativ", "Partizipien"];
  const entries = [];
  for (const g of groups) {
    if (g === "Imperativ") {
      entries.push({ id: "imperativ_du", label: "du", group: g, tense: "imperativ", level: "A2" });
      entries.push({ id: "imperativ_ihr", label: "ihr", group: g, tense: "imperativ", level: "A2" });
      entries.push({ id: "imperativ_sie", label: "Sie", group: g, tense: "imperativ", level: "A2" });
    } else if (g === "Partizipien") {
      entries.push({ id: "partizip1", label: "Partizip I", group: g, tense: "partizip", level: "B1" });
      entries.push({ id: "partizip2", label: "Partizip II", group: g, tense: "partizip", level: "A2" });
    } else {
      for (let i = 0; i < 6; i++) {
        const tense = g.toLowerCase().replace(/ /g, "");
        entries.push({
          id: tense + "_" + i,
          label: PERSONS[i],
          group: g,
          tense: tense,
          level: g === "Prasens" ? "A1" : g === "Konjunktiv II" ? "B1" : "A2",
        });
      }
    }
  }
  return entries;
}

// Export constants for integration with dictionary.js
export { STRONG_VERBS, MIXED_VERBS, MODAL_VERBS, AUXILIARY_VERBS, PERSONS };
export { SEPARABLE_PREFIXES, INSEPARABLE_PREFIXES };
export { detectPrefix };
