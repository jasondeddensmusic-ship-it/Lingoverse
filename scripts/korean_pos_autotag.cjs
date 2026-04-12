#!/usr/bin/env node
/**
 * korean_pos_autotag.cjs
 *
 * Reads src/data/units-korean.js and adds pos + gender fields to all
 * teach cards that don't already have them. Korean has no grammatical
 * gender, so gender is always null.
 *
 * Usage: node scripts/korean_pos_autotag.cjs
 */

const fs = require('fs');
const path = require('path');

const SRC = path.resolve(__dirname, '..', 'src', 'data', 'units-korean.js');
const BAK = SRC + '.bak';

// ── POS classification ──────────────────────────────────────────

const PARTICLES = [
  '는', '은', '이', '가', '을', '를', '에', '에서',
  '도', '의', '로', '으로', '까지', '부터', '만',
  '처럼', '한테', '에게'
];

const COPULA_PATTERNS = ['이다', '이에요', '예요', '아니에요'];
const VERB_ENDING_PATTERNS = [
  '아요', '어요', '해요',       // polite informal
  'ㅂ니다', '습니다',           // formal
  '았', '었', '했',             // past tense
  '겠',                         // future/intention
  '세요', '으세요',             // honorific
  '지 마세요', '지 않다',       // negation forms
];

const GREETING_INTJ = [
  'hello', 'hi', 'bye', 'goodbye', 'hey', 'oh', 'wow',
  'oops', 'ouch', 'cheers', 'welcome', 'sorry',
  'excuse me', 'thank you', 'thanks', 'please',
  'yes', 'no', 'yeah', 'nope', 'okay', 'ok',
];

const PRONOUN_WORDS = [
  /^i\b/i, /\bme\b/i, /\byou\b/i, /\bhe\b/i, /\bshe\b/i,
  /\bwe\b/i, /\bthey\b/i, /\bthis\b/i, /\bthat\b/i,
  /\bwho\b/i, /\bwhat\b/i, /\bwhich\b/i,
  /\bmyself\b/i, /\byourself\b/i,
  /\bmy\b/i, /\byour\b/i, /\bhis\b/i, /\bher\b/i, /\bour\b/i, /\btheir\b/i,
];

function classifyPos(kind, nl, en) {
  const enLow = (en || '').toLowerCase().trim();
  const nlTrim = (nl || '').trim();

  // ── Rule 1: grammar + particle ──
  if (kind === 'grammar') {
    const isParticle = PARTICLES.some(p => nlTrim.includes(p));
    // Exclude copula/verb-ending matches from being classified as particle
    const isCopula = COPULA_PATTERNS.some(p => nlTrim.includes(p));
    const isVerbEnding = VERB_ENDING_PATTERNS.some(p => nlTrim.includes(p));

    if (isParticle && !isCopula && !isVerbEnding) return 'part';

    // ── Rule 2: grammar + copula ──
    if (isCopula) return 'aux';

    // ── Rule 3: grammar + verb endings ──
    if (isVerbEnding) return 'verb';

    // grammar cards about negation (안, 못)
    if (enLow.includes('not') || enLow.includes('negation')) return 'adv';

    // Default grammar cards to particle if they look structural
    return 'part';
  }

  // ── Rule 6: phrase with conjugation arrow ──
  if (kind === 'phrase') {
    if (nlTrim.includes('→') || nlTrim.includes('->')) return 'verb';
  }

  // ── Rule 8: interjections / greetings ──
  if (GREETING_INTJ.some(w => {
    const re = new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    return re.test(enLow);
  })) {
    // "Yes, that's right" or "Nice to meet you" = interjection/phrase
    // But "to please" is a verb — check "to " prefix first
    if (enLow.startsWith('to ') && !enLow.startsWith('to be') && kind === 'word') return 'verb';
    return 'intj';
  }

  // ── Rule 4: word + "to ..." ──
  if (enLow.startsWith('to ')) return 'verb';

  // ── Rule 9: numbers ──
  if (/\bnumber|\bcounting|\bone\b|\btwo\b|\bthree\b|\bfour\b|\bfive\b|\bsix\b|\bseven\b|\beight\b|\bnine\b|\bten\b|\bhundred|\bthousand|\bfirst|\bsecond|\bthird/i.test(enLow) ||
      /^[0-9]/.test(nlTrim)) {
    return 'num';
  }

  // ── Rule 10: pronouns ──
  // Only classify as pronoun if the English is SHORT (1-4 words) and
  // primarily about a pronoun, not a whole phrase
  const wordCount = enLow.split(/\s+/).length;
  if (wordCount <= 4 && PRONOUN_WORDS.some(re => re.test(enLow))) {
    return 'pron';
  }

  // ── Rule 5: Korean adjectives (descriptive verbs ending in 다) ──
  if (kind === 'word' && nlTrim.endsWith('다')) {
    // Korean adj-verbs: check if en suggests adjective quality
    const adjPatterns = /\b(big|small|hot|cold|new|old|good|bad|pretty|beautiful|ugly|tall|short|long|fast|slow|easy|hard|difficult|expensive|cheap|busy|free|happy|sad|angry|tired|hungry|thirsty|sick|healthy|clean|dirty|bright|dark|loud|quiet|heavy|light|sweet|sour|bitter|spicy|salty|interesting|boring|fun|scary|dangerous|safe|important|famous|popular|delicious|tasty|nice|kind|warm|cool|young|high|low|wide|narrow|thick|thin|deep|shallow|soft|strong|weak|rich|poor|full|empty|wet|dry|right|wrong|same|different|special|possible|necessary|many|much|few|little)\b/i;
    if (adjPatterns.test(enLow)) return 'adj';
    // If en doesn't start with "to " but nl ends in 다, could be adj or noun
    // Korean adj-verbs (형용사) often translate as plain adjectives in English
    if (!enLow.startsWith('to ') && !enLow.includes('(') && wordCount <= 3) {
      if (adjPatterns.test(enLow)) return 'adj';
    }
  }

  // ── Rule 7: standalone word → noun default ──
  if (kind === 'word') return 'noun';

  // ── Phrase fallback ──
  if (kind === 'phrase') return 'intj'; // most Korean phrases are set expressions

  // ── Rule 11: default ──
  return 'noun';
}

// ── Main ─────────────────────────────────────────────────────────

console.log('Reading', SRC);
const original = fs.readFileSync(SRC, 'utf8');

// Create backup
fs.writeFileSync(BAK, original, 'utf8');
console.log('Backup saved to', BAK);

// Match teach card objects that do NOT already have a pos field.
// Strategy: find each {type:"teach",...} block and inject pos+gender
// after the en:"..." field if pos is missing.

// We match the whole teach card from {type:"teach" to its closing }
// This regex captures teach cards on a single line (standard format).
const TEACH_RE = /\{type:"teach",(.*?)\}/g;

let modified = original;
let tagCount = 0;
let skipped = 0;
const posDistribution = {};

// Collect all matches first so we can replace safely
const matches = [];
let m;
while ((m = TEACH_RE.exec(original)) !== null) {
  matches.push({ full: m[0], inner: m[1], index: m.index });
}

console.log(`Found ${matches.length} teach cards total.`);

// Process in reverse order so indices stay valid
for (let i = matches.length - 1; i >= 0; i--) {
  const { full, inner, index } = matches[i];

  // Skip if already has pos field
  if (/\bpos:/.test(inner)) {
    skipped++;
    continue;
  }

  // Extract kind, nl, en
  const kindMatch = inner.match(/kind:"([^"]*)"/);
  const nlMatch = inner.match(/nl:"((?:[^"\\]|\\.)*)"/);
  const enMatch = inner.match(/en:"((?:[^"\\]|\\.)*)"/);

  const kind = kindMatch ? kindMatch[1] : 'word';
  const nl = nlMatch ? nlMatch[1] : '';
  const en = enMatch ? enMatch[1] : '';

  const pos = classifyPos(kind, nl, en);
  posDistribution[pos] = (posDistribution[pos] || 0) + 1;

  // Insert pos:"XXX",gender:null after the en:"..." field
  // Find the en field in the full match and insert after it
  const enFieldRe = /en:"(?:[^"\\]|\\.)*"/;
  const enFieldMatch = full.match(enFieldRe);

  if (enFieldMatch) {
    const enEnd = full.indexOf(enFieldMatch[0]) + enFieldMatch[0].length;
    const newCard = full.slice(0, enEnd) + ',pos:"' + pos + '",gender:null' + full.slice(enEnd);

    // Replace in the modified string
    modified = modified.slice(0, index) + newCard + modified.slice(index + full.length);
    tagCount++;
  } else {
    console.warn(`  WARNING: Could not find en field in card at index ${index}: ${full.slice(0, 80)}...`);
  }
}

// Write modified file
fs.writeFileSync(SRC, modified, 'utf8');

// ── Summary ──────────────────────────────────────────────────────
console.log('\n=== POS Auto-Tag Summary ===');
console.log(`Total teach cards found: ${matches.length}`);
console.log(`Already had pos:         ${skipped}`);
console.log(`Newly tagged:            ${tagCount}`);
console.log('\nPOS Distribution (newly tagged):');

const sorted = Object.entries(posDistribution).sort((a, b) => b[1] - a[1]);
for (const [pos, count] of sorted) {
  console.log(`  ${pos.padEnd(6)} ${String(count).padStart(5)}`);
}
console.log(`\nTotal: ${sorted.reduce((s, [, c]) => s + c, 0)}`);
console.log('\nDone. File written. Backup at', path.basename(BAK));
