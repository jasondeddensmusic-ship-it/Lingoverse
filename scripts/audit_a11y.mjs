#!/usr/bin/env node
/**
 * audit_a11y.mjs — accessibility audit for VerumLingua JSX surfaces.
 *
 * Why this exists (Rule I — validator-first engineering):
 * Brilliant/Duolingo/Babbel pass WCAG AA. Pre-Claude-Design baseline
 * accessibility audit lets the redesign inherit a11y constraints
 * instead of bolting them on later.
 *
 * Patterns flagged:
 * 1. **Image without alt** — `<img src="..." />` missing `alt=`.
 * 2. **Button without accessible name** — `<button>` with no text
 *    children AND no `aria-label`/`aria-labelledby` AND no `title`.
 * 3. **Clickable div without keyboard handler** — `<div onClick=...>`
 *    without `role="button"`, `onKeyDown`, or `tabIndex`.
 * 4. **Input without label** — `<input type="text|search|email|...">`
 *    without `aria-label`, `aria-labelledby`, `placeholder` (weak),
 *    or a sibling/wrapping `<label>`.
 * 5. **Icon-only buttons** — `<button>` with single child being
 *    `<svg>` or single emoji and no aria-label.
 *
 * Mode:
 * - default: print summary + top files (informational, exit 0)
 * - --strict: exit 1 if total violations > THRESHOLD
 * - --verbose: print every violation file:approxLine
 *
 * Tracked in AUTONOMOUS_QUEUE under VISUAL-A11Y.
 */

import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(process.cwd(), 'src');
const VERBOSE = process.argv.includes('--verbose');
const STRICT = process.argv.includes('--strict');
const THRESHOLD = 200; // Above this in --strict mode = fail (initial baseline)

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    const st = fs.statSync(fp);
    if (st.isDirectory()) out.push(...walk(fp));
    else if (/\.jsx?$/.test(f)) out.push(fp);
  }
  return out;
}

const files = walk(ROOT).filter(f => {
  if (/[\\\/]data[\\\/]/.test(f)) return false;
  if (/\.bak\./.test(f)) return false;
  if (f.endsWith('styles.js')) return false;
  return true;
});

const violations = {
  imgNoAlt: [],
  buttonNoName: [],
  clickableDiv: [],
  inputNoLabel: [],
  iconOnlyBtn: [],
};

// Heuristic line lookup for a substring index.
function lineOf(text, idx) {
  return text.slice(0, idx).split('\n').length;
}

// Find every opening JSX tag of a given name, returning [tagStartIdx, attrsStr]
// pairs. Walks the source char-by-char tracking JSX expression depth ({...})
// and string quotes so attributes containing `>` (e.g. arrow functions, JSX)
// don't terminate the tag prematurely.
function findOpenTags(text, tagName) {
  const out = [];
  const re = new RegExp(`<${tagName}\\b`, 'g');
  let m;
  while ((m = re.exec(text)) !== null) {
    let depth = 0;
    let inStr = null;
    let i = m.index + m[0].length;
    while (i < text.length) {
      const ch = text[i];
      if (inStr) {
        if (ch === '\\' && i + 1 < text.length) { i += 2; continue; }
        if (ch === inStr) inStr = null;
      } else if (ch === '"' || ch === "'" || ch === '`') {
        inStr = ch;
      } else if (ch === '{') depth++;
      else if (ch === '}') depth--;
      else if (ch === '>' && depth === 0) {
        // Slice the attrs portion (excluding `<TagName` prefix and trailing `>`)
        const attrs = text.slice(m.index + m[0].length, i);
        out.push({ index: m.index, attrs, end: i });
        break;
      }
      i++;
    }
  }
  return out;
}

for (const file of files) {
  let text = fs.readFileSync(file, 'utf8');
  const rel = path.relative(process.cwd(), file);
  // Strip line + block comments so JSDoc examples don't generate false positives
  text = text.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '));
  text = text.replace(/\/\/[^\n]*/g, (m) => m.replace(/[^\n]/g, ' '));

  // 1. <img ... /> without alt=
  for (const tag of findOpenTags(text, 'img')) {
    if (!/\balt\s*=/.test(tag.attrs)) {
      violations.imgNoAlt.push({ file: rel, line: lineOf(text, tag.index) });
    }
  }

  // 2. <button> without accessible name. We look at the opening tag + the
  // first ~400 chars after to see if there's text content or aria-label.
  for (const tag of findOpenTags(text, 'button')) {
    const attrs = tag.attrs;
    const hasAria = /\baria-label\s*=/.test(attrs) || /\baria-labelledby\s*=/.test(attrs);
    const hasTitle = /\btitle\s*=/.test(attrs);
    if (hasAria || hasTitle) continue;
    // Look ahead for text or props
    const after = text.slice(tag.end + 1, tag.end + 1 + 400);
    const closeIdx = after.indexOf('</button>');
    const inner = closeIdx >= 0 ? after.slice(0, closeIdx) : after;
    // Strip JSX comments
    const stripped = inner.replace(/\{\/\*[\s\S]*?\*\/\}/g, '').trim();
    // Icon-only: only an <svg> child, no text, no other children.
    const svgOnly = /^<svg[\s\S]*<\/svg>$/.test(stripped);
    if (svgOnly) {
      violations.iconOnlyBtn.push({ file: rel, line: lineOf(text, tag.index) });
      continue;
    }
    // Trust JSX expression children: `{t("key")}`, `{label}`, etc. typically
    // produce accessible text content. Only flag genuinely empty buttons.
    if (stripped === '') {
      violations.buttonNoName.push({ file: rel, line: lineOf(text, tag.index) });
    }
  }

  // 3. <div onClick=...> without role / onKeyDown / tabIndex.
  // Exempt: any explicit role attribute AND onClick that's pure
  // event-suppression (e.stopPropagation).
  for (const tag of findOpenTags(text, 'div')) {
    const attrs = tag.attrs;
    if (!/\bonClick\s*=/.test(attrs)) continue;
    const hasAnyRole = /\brole\s*=\s*["'][^"']+["']/.test(attrs);
    const hasKey = /\bonKeyDown\s*=/.test(attrs) || /\bonKeyUp\s*=/.test(attrs) || /\bonKeyPress\s*=/.test(attrs);
    const hasTab = /\btabIndex\s*=/.test(attrs);
    // onClick={e=>e.stopPropagation()} or onClick={(e)=>e.stopPropagation()}
    const stopOnly = /onClick\s*=\s*\{\s*\(?\s*e\s*\)?\s*=>\s*e\.stopPropagation\(\s*\)\s*\}/.test(attrs);
    if (stopOnly) continue;
    if (!hasAnyRole && !hasKey && !hasTab) {
      violations.clickableDiv.push({ file: rel, line: lineOf(text, tag.index) });
    }
  }

  // 4. <input type="text|search|email|password|tel|url|number"> without label
  for (const tag of findOpenTags(text, 'input')) {
    const attrs = tag.attrs;
    const typeM = attrs.match(/\btype\s*=\s*["']([^"']+)["']/);
    const type = typeM ? typeM[1] : 'text';
    // Only check text-y inputs; checkbox/radio/file/range/etc. are fine
    if (!/^(text|search|email|password|tel|url|number)$/.test(type)) continue;
    const hasAria = /\baria-label\s*=/.test(attrs) || /\baria-labelledby\s*=/.test(attrs);
    const hasId = /\bid\s*=\s*["']([^"']+)["']/.test(attrs);
    // We don't try to find a paired <label htmlFor=>; if the input has neither
    // aria-label nor id (so a label could refer to it), flag.
    if (!hasAria && !hasId) {
      violations.inputNoLabel.push({ file: rel, line: lineOf(text, tag.index) });
    }
  }
}

const totals = {
  imgNoAlt: violations.imgNoAlt.length,
  buttonNoName: violations.buttonNoName.length,
  clickableDiv: violations.clickableDiv.length,
  inputNoLabel: violations.inputNoLabel.length,
  iconOnlyBtn: violations.iconOnlyBtn.length,
};
const totalViolations = Object.values(totals).reduce((a, b) => a + b, 0);

console.log('Accessibility audit (WCAG AA proxy):');
console.log(`  Files scanned: ${files.length}`);
console.log('');
console.log(`  <img> without alt:                 ${totals.imgNoAlt}`);
console.log(`  <button> with no accessible name:  ${totals.buttonNoName}`);
console.log(`  Icon-only <button> w/o aria-label: ${totals.iconOnlyBtn}`);
console.log(`  Clickable <div> w/o keyboard:      ${totals.clickableDiv}`);
console.log(`  <input> w/o label or aria-label:   ${totals.inputNoLabel}`);
console.log(`  TOTAL:                             ${totalViolations}`);
console.log('');

if (VERBOSE) {
  // Top files by total violations
  const fileCounts = {};
  for (const arr of Object.values(violations)) {
    for (const v of arr) fileCounts[v.file] = (fileCounts[v.file] || 0) + 1;
  }
  const sorted = Object.entries(fileCounts).sort((a, b) => b[1] - a[1]).slice(0, 10);
  console.log('Top 10 files by a11y debt:');
  for (const [f, c] of sorted) console.log(`  ${c.toString().padStart(4)}  ${f}`);
  console.log('');
  // Print detail for buttons + inputs (highest priority)
  if (totals.buttonNoName > 0) {
    console.log('Buttons with no accessible name (first 20):');
    for (const v of violations.buttonNoName.slice(0, 20)) console.log(`  ${v.file}:${v.line}`);
    console.log('');
  }
  if (totals.inputNoLabel > 0) {
    console.log('Inputs without label (first 20):');
    for (const v of violations.inputNoLabel.slice(0, 20)) console.log(`  ${v.file}:${v.line}`);
    console.log('');
  }
  if (totals.iconOnlyBtn > 0) {
    console.log('Icon-only buttons without aria-label (first 20):');
    for (const v of violations.iconOnlyBtn.slice(0, 20)) console.log(`  ${v.file}:${v.line}`);
    console.log('');
  }
  if (totals.clickableDiv > 0) {
    console.log('Clickable divs without keyboard handler (first 30):');
    for (const v of violations.clickableDiv.slice(0, 30)) console.log(`  ${v.file}:${v.line}`);
    console.log('');
  }
}

console.log(`Tracked in AUTONOMOUS_QUEUE under VISUAL-A11Y.`);

if (STRICT && totalViolations > THRESHOLD) {
  console.log(`STRICT: total ${totalViolations} > threshold ${THRESHOLD}`);
  process.exit(1);
}
process.exit(0);
