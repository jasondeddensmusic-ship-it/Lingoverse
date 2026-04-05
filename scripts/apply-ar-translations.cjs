#!/usr/bin/env node
/**
 * Apply Arabic translations to unit files.
 *
 * Input: JSON file with array of {line, field, english, arabic} objects
 * Usage: node scripts/apply-ar-translations.cjs <unit-number> <translations.json>
 *
 * The script reads the unit file, replaces [AR] markers with Arabic text,
 * and writes the result back.
 */
const fs = require("fs");
const path = require("path");

const unitNum = parseInt(process.argv[2]);
const transFile = process.argv[3];

if (!unitNum || !transFile) {
  console.error("Usage: node apply-ar-translations.cjs <unit-number> <translations.json>");
  process.exit(1);
}

const AR_DIR = path.join(__dirname, "../src/data/german-v2-ar");
const unitFile = path.join(AR_DIR, `unit-${String(unitNum).padStart(2, "0")}.js`);

if (!fs.existsSync(unitFile)) {
  console.error(`Unit file not found: ${unitFile}`);
  process.exit(1);
}

// Load translations
const translations = JSON.parse(fs.readFileSync(transFile, "utf8"));

// Build a lookup: "line:english" -> arabic
const lookup = new Map();
for (const t of translations) {
  if (t.arabic && t.english) {
    // Key by english text for flexible matching
    const key = t.english.trim();
    if (!lookup.has(key)) lookup.set(key, t.arabic);
  }
}

console.log(`Loaded ${lookup.size} translations`);

// Read unit file
let content = fs.readFileSync(unitFile, "utf8");
let applied = 0;
let missed = 0;

// Replace [AR] markers
for (const [english, arabic] of lookup.entries()) {
  // Escape regex special chars in english
  const escaped = english.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`\\[AR\\]\\s*${escaped}`, "g");
  const before = content;
  // Sanitize Arabic text for JS string safety (PP39)
  const safeArabic = arabic
    .replace(/\r\n/g, "\\n")  // Windows newlines
    .replace(/\r/g, "\\n")     // Old Mac
    .replace(/\n/g, "\\n")     // Unix
    .replace(/\u201C/g, "'")   // Left smart double quote → single quote
    .replace(/\u201D/g, "'")   // Right smart double quote → single quote
    .replace(/\u2018/g, "'")   // Left smart single quote
    .replace(/\u2019/g, "'")   // Right smart single quote
    .replace(/"/g, "'");       // Regular double quote → single (avoid breaking JS "strings")
  content = content.replace(regex, safeArabic);
  if (content !== before) {
    const count = (before.match(regex) || []).length;
    applied += count;
  }
}

// Count remaining [AR] markers
const remaining = (content.match(/\[AR\]/g) || []).length;

// Write back
fs.writeFileSync(unitFile, content, "utf8");

console.log(`Applied: ${applied} translations`);
console.log(`Remaining [AR]: ${remaining}`);
console.log(`Wrote: ${unitFile}`);
