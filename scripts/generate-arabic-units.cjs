#!/usr/bin/env node
/**
 * Arabic Unit Generator for German v2
 *
 * Reads English-source German units and generates Arabic-source versions.
 * Handles structural cloning + field translation.
 *
 * Usage: node scripts/generate-arabic-units.js [unitNum]
 *   e.g. node scripts/generate-arabic-units.js 5
 */

const fs = require('fs');
const path = require('path');

const UNIT_NUM = parseInt(process.argv[2]) || 5;
const pad = String(UNIT_NUM).padStart(2, '0');
const srcFile = path.join(__dirname, '..', 'src', 'data', 'german-v2', `unit-${pad}.js`);
const outDir = path.join(__dirname, '..', 'src', 'data', 'german-v2-ar');
const outFile = path.join(outDir, `unit-${pad}.js`);

// Load the English unit
const unit = require(srcFile).default;

// Deep clone
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const clone = {};
  for (const key in obj) clone[key] = deepClone(obj[key]);
  return clone;
}

const arUnit = deepClone(unit);
arUnit.srcLang = 'ar';

// Translation dictionary for common teach card translations
// These are the word-level translations (trg → Arabic src)
const WORD_TRANSLATIONS = {
  // Common greetings & basics
  "Hello": "مرحبًا",
  "Good morning": "صباح الخير",
  "Good evening": "مساء الخير",
  "Good night": "تصبح على خير",
  "Goodbye": "مع السلامة",
  "Please": "من فضلك",
  "Thank you": "شكرًا",
  "Thanks": "شكرًا",
  "Yes": "نعم",
  "No": "لا",
  "Excuse me": "عذرًا",
  "Sorry": "آسف",
  "Welcome": "أهلاً وسهلاً",
  // People
  "the friend (male)": "الصديق (ذكر)",
  "the friend (female)": "الصديقة (أنثى)",
  "the man": "الرجل",
  "the woman": "المرأة",
  "the child": "الطفل",
  "the boy": "الولد",
  "the girl": "البنت",
  "the family": "العائلة",
  "the mother": "الأم",
  "the father": "الأب",
  // Food & drink
  "breakfast": "الفطور",
  "noon, midday": "الظهر",
  "evening": "المساء",
  "food, meal": "الطعام، الوجبة",
  "to eat": "يأكل",
  "to drink": "يشرب",
  "to have breakfast": "يتناول الفطور",
  "appetite": "الشهية",
  "menu": "قائمة الطعام",
  "menu (variant spelling)": "قائمة الطعام (تهجئة بديلة)",
  "cigarette": "السيجارة",
  "to smoke": "يدخن",
  "the soup": "الحساء",
  "to taste": "يتذوق",
  // Adjectives
  "beautiful / nice / lovely": "جميل / لطيف",
  "wonderful": "رائع",
  "bad": "سيئ",
  "simple, easy": "بسيط، سهل",
  "funny, fun": "مضحك، ممتع",
  "loud": "عالٍ (الصوت)",
  "quiet, soft (sound)": "هادئ، خافت",
  "calm, peaceful": "هادئ، مسالم",
  "bitter": "مُر",
  "delicious / yummy": "لذيذ",
  "salty": "مالح",
  "satisfied, content": "راضٍ، قانع",
  "together": "معًا",
  "gladly, with pleasure": "بكل سرور",
  // The heart
  "the heart": "القلب",
  // Common verbs
  "to be": "يكون",
  "to have": "يملك",
  "to go": "يذهب",
  "to come": "يأتي",
  "to say": "يقول",
  "to speak": "يتكلم",
  "to understand": "يفهم",
  "to know": "يعرف",
  "to learn": "يتعلم",
  "to live": "يعيش",
  "to work": "يعمل",
  "to play": "يلعب",
  "to read": "يقرأ",
  "to write": "يكتب",
  "to sleep": "ينام",
  "to buy": "يشتري",
  "to give": "يعطي",
  "to take": "يأخذ",
  "to find": "يجد",
  "to see": "يرى",
  "to hear": "يسمع",
  "to think": "يفكر",
  "to need": "يحتاج",
  "to want": "يريد",
  "to like": "يحب",
  "to try": "يحاول",
  "to help": "يساعد",
  "to ask": "يسأل",
  "to wait": "ينتظر",
  "to call": "يتصل",
  "to travel": "يسافر",
  // Numbers
  "zero": "صفر", "one": "واحد", "two": "اثنان", "three": "ثلاثة",
  "four": "أربعة", "five": "خمسة", "six": "ستة", "seven": "سبعة",
  "eight": "ثمانية", "nine": "تسعة", "ten": "عشرة",
  // Transport
  "the train": "القطار",
  "the bus": "الحافلة",
  "the car": "السيارة",
  "the airplane": "الطائرة",
  "the station": "المحطة",
  "the airport": "المطار",
  "the ticket": "التذكرة",
  // Places
  "the city": "المدينة",
  "the street": "الشارع",
  "the house": "المنزل",
  "the school": "المدرسة",
  "the hotel": "الفندق",
  "the restaurant": "المطعم",
  // Common phrases
  "How are you?": "كيف حالك؟",
  "I am fine": "أنا بخير",
  "What is your name?": "ما اسمك؟",
  "My name is...": "اسمي...",
  "I don't understand": "لا أفهم",
  "Do you speak English?": "هل تتكلم الإنجليزية؟",
};

// Translate a source field if we have a translation
function translateSrc(text) {
  if (!text) return text;
  // Exact match
  if (WORD_TRANSLATIONS[text]) return WORD_TRANSLATIONS[text];
  // Case-insensitive
  const lower = text.toLowerCase();
  for (const [k, v] of Object.entries(WORD_TRANSLATIONS)) {
    if (k.toLowerCase() === lower) return v;
  }
  // Return original with Arabic marker for manual review
  return `[AR] ${text}`;
}

// Process each step
function processStep(step) {
  // Translate src field (word translation)
  if (step.src) step.src = translateSrc(step.src);

  // Mark other source-language fields for translation
  if (step.exampleSrc) step.exampleSrc = `[AR] ${step.exampleSrc}`;
  if (step.note) step.note = `[AR] ${step.note}`;
  if (step.funFact) step.funFact = `[AR] ${step.funFact}`;
  if (step.hint) step.hint = `[AR] ${step.hint}`;
  if (step.sSrc) step.sSrc = `[AR] ${step.sSrc}`;

  // Intro fields
  if (step.desc) step.desc = `[AR] ${step.desc}`;
  if (step.goals) step.goals = step.goals.map(g => `[AR] ${g}`);

  // Tip fields
  if (step.text) step.text = `[AR] ${step.text}`;
  if (step.deepDive) {
    if (typeof step.deepDive === 'string') step.deepDive = `[AR] ${step.deepDive}`;
    else if (step.deepDive?.text) step.deepDive.text = `[AR] ${step.deepDive.text}`;
  }

  // Verb table note
  if (step.note && step.type === 'verb_table') step.note = `[AR] ${step.note}`;

  return step;
}

// Process all lessons
for (const lesson of arUnit.lessons) {
  for (let i = 0; i < lesson.steps.length; i++) {
    lesson.steps[i] = processStep(lesson.steps[i]);
  }
}

// Serialize to JS
function serialize(obj, depth = 0) {
  const indent = '  '.repeat(depth);
  if (obj === null) return 'null';
  if (obj === undefined) return 'undefined';
  if (typeof obj === 'string') return JSON.stringify(obj);
  if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj);
  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]';
    const items = obj.map(item => serialize(item, depth + 1));
    // Short arrays inline
    const inline = `[${items.join(',')}]`;
    if (inline.length < 120) return inline;
    return `[\n${items.map(i => indent + '  ' + i).join(',\n')}\n${indent}]`;
  }
  const entries = Object.entries(obj).map(([k, v]) => {
    const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
    return `${key}:${serialize(v, depth + 1)}`;
  });
  const inline = `{${entries.join(',')}}`;
  if (inline.length < 150) return inline;
  return `{${entries.join(',')}}`;
}

const varName = `UNIT_${pad}_AR`;
const output = `// German v2 Unit ${UNIT_NUM} — Arabic source language (srcLang:"ar")
// Auto-generated. Fields marked [AR] need manual Arabic translation.
const ${varName} = ${serialize(arUnit)};

export default ${varName};
`;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, output);
console.log(`Written: ${outFile}`);
console.log(`Size: ${(output.length / 1024).toFixed(1)}KB`);

// Count [AR] markers still needing translation
const arCount = (output.match(/\[AR\]/g) || []).length;
const translatedSrc = arUnit.lessons.reduce((a, l) => a + l.steps.filter(s => s.type === 'teach' && s.src && !s.src.startsWith('[AR]')).length, 0);
const totalSrc = arUnit.lessons.reduce((a, l) => a + l.steps.filter(s => s.type === 'teach').length, 0);
console.log(`Teach card translations: ${translatedSrc}/${totalSrc} done`);
console.log(`[AR] markers remaining: ${arCount}`);
