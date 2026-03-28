#!/usr/bin/env node
/**
 * PP8 Position Bias Fix: Shuffle MC answer positions across all German v2 units.
 *
 * For each MC step, moves the correct answer (ans) to a varied position in opts[].
 * Uses a seeded deterministic shuffle so results are reproducible.
 * Target: ~25% per position across each unit.
 */

const fs = require('fs');
const path = require('path');

const UNITS_DIR = path.join(__dirname, '..', 'src', 'data', 'german-v2');

// Simple seeded RNG (mulberry32)
function mulberry32(seed) {
  return function() {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

let totalShuffled = 0;
let totalMC = 0;
const unitStats = [];

for (let i = 1; i <= 36; i++) {
  const filename = `unit-${String(i).padStart(2, '0')}.js`;
  const filepath = path.join(UNITS_DIR, filename);

  if (!fs.existsSync(filepath)) continue;

  let content = fs.readFileSync(filepath, 'utf8');
  const rng = mulberry32(i * 31337); // deterministic seed per unit

  // Find all MC steps: {type:"mc", ... opts:[...], ans:"...", ...}
  // We need to find lines with type:"mc" and shuffle opts
  const mcRegex = /\{type:"mc",[^}]*opts:\[([^\]]+)\],[^}]*ans:"([^"]+)"[^}]*\}/g;

  let unitMC = 0;
  let unitShuffled = 0;
  const positions = [0, 0, 0, 0];

  // Track position assignments to balance across unit
  const positionQueue = [];

  // First pass: count MCs
  let match;
  const matches = [];
  while ((match = mcRegex.exec(content)) !== null) {
    matches.push({ full: match[0], optsStr: match[1], ans: match[2], index: match.index });
    unitMC++;
  }

  if (matches.length === 0) {
    unitStats.push({ unit: i, mc: 0, shuffled: 0, positions: [0,0,0,0] });
    continue;
  }

  // Build balanced position assignments
  // Fill in round-robin style, then shuffle
  for (let j = 0; j < matches.length; j++) {
    positionQueue.push(j % 4);
  }
  // Fisher-Yates shuffle of position assignments
  for (let j = positionQueue.length - 1; j > 0; j--) {
    const k = Math.floor(rng() * (j + 1));
    [positionQueue[j], positionQueue[k]] = [positionQueue[k], positionQueue[j]];
  }

  // Second pass: apply shuffles (process in reverse to preserve indices)
  for (let j = matches.length - 1; j >= 0; j--) {
    const m = matches[j];
    const targetPos = positionQueue[j];

    // Parse opts array
    const optsMatch = m.optsStr.match(/"([^"]+)"/g);
    if (!optsMatch || optsMatch.length < 2) continue;

    const opts = optsMatch.map(o => o.slice(1, -1)); // strip quotes
    const ansIdx = opts.indexOf(m.ans);

    if (ansIdx === -1) continue; // ans not found in opts (shouldn't happen)

    // If already at target position, no change needed
    if (ansIdx === targetPos && targetPos < opts.length) {
      positions[ansIdx]++;
      continue;
    }

    // Clamp target to valid range
    const actualTarget = Math.min(targetPos, opts.length - 1);

    // Move answer to target position
    opts.splice(ansIdx, 1); // remove from current
    opts.splice(actualTarget, 0, m.ans); // insert at target

    // Rebuild opts string
    const newOptsStr = opts.map(o => `"${o}"`).join(',');
    const newFull = m.full.replace(`opts:[${m.optsStr}]`, `opts:[${newOptsStr}]`);

    content = content.substring(0, m.index) + newFull + content.substring(m.index + m.full.length);

    const newAnsIdx = opts.indexOf(m.ans);
    positions[newAnsIdx]++;
    unitShuffled++;
  }

  // Count unchanged positions
  totalMC += unitMC;
  totalShuffled += unitShuffled;

  fs.writeFileSync(filepath, content, 'utf8');
  unitStats.push({ unit: i, mc: unitMC, shuffled: unitShuffled, positions });
}

console.log('\n=== PP8 Position Shuffle Results ===\n');
console.log('Unit | MC | Shuffled | P0 | P1 | P2 | P3');
console.log('-----|----|---------|----|----|----|----');
for (const s of unitStats) {
  if (s.mc === 0) continue;
  const pcts = s.positions.map(p => `${Math.round(p/s.mc*100)}%`);
  console.log(`U${String(s.unit).padStart(2,'0')} | ${s.mc} | ${s.shuffled} | ${pcts.join(' | ')}`);
}
console.log(`\nTotal: ${totalMC} MC steps, ${totalShuffled} shuffled`);
