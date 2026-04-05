#!/usr/bin/env node
/**
 * Extract all [AR] markers from Arabic unit files.
 * Outputs a JSON file with each marker's location and English text.
 * Usage: node scripts/extract-ar-markers.cjs [unit-number]
 * If no unit number, extracts from ALL B1+B2 units.
 */
const fs = require("fs");
const path = require("path");

const AR_DIR = path.join(__dirname, "../src/data/german-v2-ar");
const OUT_DIR = path.join(__dirname, "../tmp");

function extractMarkers(unitNum) {
  const file = path.join(AR_DIR, `unit-${String(unitNum).padStart(2,"0")}.js`);
  if (!fs.existsSync(file)) return [];

  const content = fs.readFileSync(file, "utf8");
  const lines = content.split("\n");
  const markers = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Match all [AR] ... patterns in the line
    const regex = /\[AR\]\s*([^"]*?)(?=")/g;
    let m;
    while ((m = regex.exec(line)) !== null) {
      // Find which field this belongs to
      const fieldMatch = line.substring(0, m.index).match(/(\w+):\s*"$/);
      const field = fieldMatch ? fieldMatch[1] : "unknown";
      markers.push({
        unit: unitNum,
        line: i + 1,
        field,
        english: m[1].trim(),
        col: m.index,
      });
    }
  }
  return markers;
}

// Determine which units to process
const arg = process.argv[2];
let units;
if (arg) {
  units = [parseInt(arg)];
} else {
  // All B1+B2 units with [AR] markers
  units = [];
  for (let u = 13; u <= 36; u++) {
    const file = path.join(AR_DIR, `unit-${String(u).padStart(2,"0")}.js`);
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, "utf8");
      if (content.includes("[AR]")) units.push(u);
    }
  }
}

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

let totalMarkers = 0;
const allMarkers = {};

for (const u of units) {
  const markers = extractMarkers(u);
  if (markers.length > 0) {
    allMarkers[u] = markers;
    totalMarkers += markers.length;
    console.log(`Unit ${u}: ${markers.length} [AR] markers`);
  }
}

// Write summary
const summary = {
  totalMarkers,
  unitCount: Object.keys(allMarkers).length,
  units: Object.fromEntries(
    Object.entries(allMarkers).map(([u, m]) => [
      u,
      {
        count: m.length,
        byField: m.reduce((acc, x) => { acc[x.field] = (acc[x.field]||0) + 1; return acc; }, {}),
      },
    ])
  ),
};

console.log(`\nTotal: ${totalMarkers} markers across ${summary.unitCount} units`);
fs.writeFileSync(path.join(OUT_DIR, "ar-markers-summary.json"), JSON.stringify(summary, null, 2));

// Write per-unit marker files (just the English text to translate)
for (const [u, markers] of Object.entries(allMarkers)) {
  const entries = markers.map(m => ({
    line: m.line,
    field: m.field,
    english: m.english,
  }));
  fs.writeFileSync(
    path.join(OUT_DIR, `ar-markers-unit-${String(u).padStart(2,"0")}.json`),
    JSON.stringify(entries, null, 2)
  );
}

console.log("Output written to tmp/");
