#!/usr/bin/env node
// A2-level dialogue turn audit. Scopes to "A2" units only.
// For 10-language corpus, A2 typically lives in units labelled "A2.*"
// (or the second sub-level of the curriculum).

import { pathToFileURL } from 'node:url';
import path from 'node:path';

const LANGS = ['italian','japanese','korean','french','spanish'];
const targets = process.argv.slice(2).filter(x => LANGS.includes(x));
const langs = targets.length ? targets : LANGS;

function turns(s) {
  if (!s) return 0;
  return (String(s).match(/(^|\n)\s*[A-Z][:.)）]/g) || []).length;
}

for (const lang of langs) {
  const mod = await import(pathToFileURL(path.resolve(`src/data/units-${lang}-v2.js`)).href);
  const units = mod.default || [];
  const byUnit = {};
  let total = 0, scaled = 0;
  for (const u of units) {
    const level = String(u.level || '').toUpperCase();
    if (!level.startsWith('A2')) continue;
    let uTotal = 0, uScaled = 0, u1 = 0, u2 = 0;
    for (const l of u.lessons || []) {
      for (const s of l.steps || []) {
        if (!s || s.type !== 'teach') continue;
        if (!s.example) continue;
        uTotal++;
        const n = turns(s.example);
        if (n >= 3) uScaled++;
        else if (n === 1) u1++;
        else if (n === 2) u2++;
      }
    }
    byUnit[`u${u.n}(${level})`] = { total: uTotal, scaled: uScaled, u1, u2 };
    total += uTotal;
    scaled += uScaled;
  }
  const under = total - scaled;
  console.log(`\n[${lang}] A2: total=${total} scaled3+=${scaled} under(1-2)=${under}`);
  for (const [k, v] of Object.entries(byUnit)) {
    console.log(`  ${k}: ${v.scaled}/${v.total} scaled (1-turn=${v.u1}, 2-turn=${v.u2})`);
  }
}
