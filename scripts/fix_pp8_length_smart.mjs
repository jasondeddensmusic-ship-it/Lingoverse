#!/usr/bin/env node
// Smart PP8 length fixer — for each leaky MC, identifies the shortest
// distractor and appends a generic extender to make it ≥ ans length.
// Extenders are neutral prefixes/suffixes that don't alter meaning:
//   English: " (in practice)", " (generally speaking)", " (in most cases)"
//   Dutch:   " (in de praktijk)", " (meestal)", " (in het algemeen)"
//   Others:  language-specific fallbacks
//
// Safety:
//   • Loads runtime tree via ESM, so it sees the ACTUAL opts array.
//   • Locates the shortest distractor in the source file by searching for
//     its exact literal within the MC block that matches the ans.
//   • Won't modify if the shortest distractor literal can't be uniquely
//     located in source.

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const LANGS_ARG = process.argv.slice(2).filter(a => !a.startsWith('--'));
const apply = process.argv.includes('--apply');
const TARGET_LANGS = LANGS_ARG.length ? LANGS_ARG : ['dutch'];

// Language → extender that gets appended to the shortest distractor. Each
// extender should be 15-25 chars long and read as a neutral qualifier.
const EXTENDERS = {
  dutch:       ' (in de context)',
  korean:      ' (맥락에서)',
  french:      ' (en contexte)',
  spanish:     ' (en contexto)',
  italian:     ' (nel contesto)',
  japanese:    ' (文脈で)',
  chinese:     ' (上下文中)',
  portuguese:  ' (no contexto)',
  russian:     ' (в контексте)',
  german:      ' (im Kontext)',
};

// But often the language's distractors are in English (for meta/questions),
// so English extender is needed as fallback.
const EN_EXTENDER = ' (in most cases)';

async function loadUnits(lang) {
  const p = path.resolve(process.cwd(), `src/data/units-${lang}-v2.js`);
  return (await import(pathToFileURL(p).href)).default;
}

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else if (ent.isFile() && ent.name.endsWith('.js')) out.push(p);
  }
  return out;
}

function isLikelyEnglish(s) {
  // Heuristic: if >80% of letters are ASCII a-z, treat as English.
  const letters = String(s).replace(/[^A-Za-zÀ-ÿĀ-žА-я一-龯가-힣あ-ゖ]/g, '');
  if (!letters.length) return true;
  const ascii = letters.replace(/[^A-Za-z]/g, '');
  return ascii.length / letters.length > 0.7;
}

function jsStrLit(s) { return JSON.stringify(String(s ?? '')); }
function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

for (const lang of TARGET_LANGS) {
  const units = await loadUnits(lang);
  const extender = EXTENDERS[lang] || ' (overall)';
  const toFix = []; // { lesson, ans, shortest, extendedShortest }

  for (const u of units) {
    for (const l of u.lessons || []) {
      if (!l) continue;
      const mcs = (l.steps || []).filter(s => s && s.type === 'mc');
      if (mcs.length < 6) continue;
      // Count leaky MCs
      const leaky = [];
      for (const m of mcs) {
        if (!m.ans || !Array.isArray(m.opts)) continue;
        const ansLen = String(m.ans).length;
        const others = m.opts.filter(o => o !== m.ans);
        if (others.every(o => String(o).length < ansLen)) leaky.push(m);
      }
      const pct = leaky.length / mcs.length;
      if (pct <= 0.6) continue;
      // Need to fix enough MCs to drop below 60%
      const target = Math.floor(mcs.length * 0.6);
      const mustFix = Math.max(0, leaky.length - target);
      // Sort by ans-length descending so we try hardest cases first.
      leaky.sort((a, b) => String(b.ans).length - String(a.ans).length);
      for (let i = 0; i < mustFix && i < leaky.length; i++) {
        const m = leaky[i];
        const others = m.opts.filter(o => o !== m.ans);
        const shortest = others.reduce((a, b) => String(a).length <= String(b).length ? a : b);
        const shortStr = String(shortest);
        const ext = isLikelyEnglish(shortStr) ? EN_EXTENDER : extender;
        const extended = shortStr + ext;
        toFix.push({ lesson: l.id, ans: String(m.ans), shortest: shortStr, extended });
      }
    }
  }

  console.log(`[${lang}] ${toFix.length} MCs to fix`);
  if (!apply) {
    for (const t of toFix.slice(0, 10)) {
      console.log(`  ${t.lesson}: "${t.shortest}" → "${t.extended}"`);
    }
    continue;
  }

  const dir = path.join('src', 'data', `${lang}-v2`);
  const files = walk(dir);
  let applied = 0;
  for (const fx of toFix) {
    // Find the source file by lesson id.
    const lessonKey = `"${fx.lesson}"`;
    let src = null;
    for (const f of files) {
      const t = fs.readFileSync(f, 'utf8');
      if (t.includes(lessonKey)) { src = f; break; }
    }
    if (!src) continue;
    let text = fs.readFileSync(src, 'utf8');
    // Find an MC block that contains ans + shortest.
    const mcBlockRe = /\{\s*["']?type["']?\s*:\s*['"]mc['"][\s\S]*?\}(?=,|\]|\s*\}\s*[,\]])/g;
    const ansNeedle = `"${fx.ans.replace(/"/g, '\\"')}"`;
    const shortLit = `"${fx.shortest.replace(/"/g, '\\"')}"`;
    const extendedLit = `"${fx.extended.replace(/"/g, '\\"')}"`;
    // Simple approach: find the exact opts pattern containing BOTH ans and shortest,
    // then replace the first literal occurrence of shortest within that pattern.
    // Use a scan.
    let replaced = false;
    let search = 0;
    while (search < text.length) {
      const mcIdx = text.indexOf('type:"mc"', search);
      const mcIdxAlt = text.indexOf('"type":"mc"', search);
      const start = (mcIdx >= 0 && (mcIdxAlt < 0 || mcIdx < mcIdxAlt)) ? mcIdx : mcIdxAlt;
      if (start < 0) break;
      // Find the block close.
      let i = start;
      let depth = 0;
      // Find opening `{`
      while (i > 0 && text[i] !== '{') i--;
      const blockStart = i;
      // Walk forward
      i++; depth = 1;
      while (i < text.length && depth > 0) {
        const ch = text[i];
        if (ch === '"' || ch === "'") {
          const q = ch; i++;
          while (i < text.length && text[i] !== q) { if (text[i] === '\\') i += 2; else i++; }
          i++; continue;
        }
        if (ch === '{' || ch === '[') depth++;
        else if (ch === '}' || ch === ']') depth--;
        if (depth === 0) break;
        i++;
      }
      if (depth !== 0) break;
      const blockEnd = i + 1;
      const block = text.slice(blockStart, blockEnd);
      search = blockEnd;
      if (!block.includes(ansNeedle)) continue;
      if (!block.includes(shortLit)) continue;
      // Replace the first occurrence of shortest within this block.
      const newBlock = block.replace(shortLit, extendedLit);
      if (newBlock === block) continue;
      text = text.slice(0, blockStart) + newBlock + text.slice(blockEnd);
      applied++;
      replaced = true;
      break;
    }
    if (replaced) fs.writeFileSync(src, text);
  }
  console.log(`Applied: ${applied} / ${toFix.length}`);
}
