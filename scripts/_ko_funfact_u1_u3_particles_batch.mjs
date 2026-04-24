#!/usr/bin/env node
// 14 Korean cards u1-u3 using 'Korean particles attach' filler.
// NOTE: Korean uses nl:/en: format (not trg:/src:). Regex adjusted accordingly.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Korean particles attach after nouns to mark their role. No equivalent in English.';

const FACTS = {
  // u1
  '가다 → 가요': "Korean verbs conjugate by changing the stem ending. 가다 (to go, dictionary form) drops 다 and adds 요 for polite speech. The 요 ending is one of Korean's most-used markers.",
  '고마워요': "Casual-polite thanks. From 고맙다 (to be thankful). Softer than 감사합니다 (formal). Use with peers and people you know; 감사합니다 with strangers and superiors.",
  '나이': "Age. Crucial in Korean culture — age determines speech level and honorifics. Asking 나이가 어떻게 되세요? (how old are you?) is normal and not rude, unlike in Western contexts.",

  // u2 — particles introduction
  '먹다': "To eat. Dictionary form. Note verbs ALWAYS end in 다. Common conjugations: 먹어요 (polite), 먹었어요 (past polite), 먹을 거예요 (future).",
  '을 or 를?': "Object particle choice. 을 after consonant-ending nouns (밥을 먹다), 를 after vowel-ending (커피를 마시다). The sound-matching rule runs throughout Korean particles.",
  '은/는, 이/가, 을/를': "Three core particle pairs. 은/는 = topic ('as for X'). 이/가 = subject ('X does'). 을/를 = object ('does to X'). Each pair splits by preceding sound.",
  '이것': "'This one' (near speaker). Demonstrative noun. Pairs: 이것 (near me), 그것 (near you), 저것 (far from both). Korean's three-way spatial distinction is more fine-grained than English.",
  '이 / 그 / 저 + noun': "Demonstrative adjective forms. 이 책 (this book), 그 책 (that book near you), 저 책 (that book far away). Shortened from 이것/그것/저것 when modifying nouns.",
  '이쪽 / 그쪽 / 저쪽': "Direction demonstratives. 쪽 means 'side/direction.' 이쪽 (this way), 그쪽 (that way, near listener), 저쪽 (that way, far). Used for pointing and spatial reference.",
  'Review Summary': "End-of-unit consolidation. Korean curriculum traditionally emphasizes systematic review — each grammatical structure builds on the prior. Review is not filler but pedagogical practice.",

  // u3 — counters + formal speech
  '한, 두, 세, 네': "Native Korean number contractions used WITH counters. 하나 → 한, 둘 → 두, 셋 → 세, 넷 → 네. Contractions happen only directly before a counter; full forms used alone.",
  '개': "Counter for general objects. 사과 두 개 (two apples). Korean requires counters for all countable nouns — like English 'two sheets of paper.' 개 is the default when unsure.",
  '명': "Counter for people. 학생 다섯 명 (five students). More formal counter 분 exists for honorific contexts (손님 두 분 — two guests with respect).",
  '합쇼체  -  formation pattern': "Formal speech level. Verb stem + -ㅂ니다 for vowel-ending stems, -습니다 for consonant-ending. Used in news, formal presentations, military, and with strangers of higher status.",
};

let total = 0;
const LANG_ROOT = 'src/data/korean-v2';
for (const file of fs.readdirSync(LANG_ROOT)) {
  if (!file.endsWith('.js')) continue;
  const path = `${LANG_ROOT}/${file}`;
  let text = fs.readFileSync(path, 'utf8');
  let count = 0;
  for (const [trg, newFact] of Object.entries(FACTS)) {
    const escTrg = trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // MANDATORY: anchor with {type:"teach" prefix — prevents scramble bug.
    // Korean uses nl: instead of trg:
    const re = new RegExp(`(\\{type:"teach",(?:kind:"[^"]*",)?nl:"${escTrg}"[\\s\\S]*?funFact:")${GENERIC.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(")`, 'g');
    if (!re.test(text)) continue;
    re.lastIndex = 0;
    text = text.replace(re, (_, pre, post) => { count++; return pre + newFact + post; });
  }
  if (count > 0) {
    console.log(`${path}: ${count}`);
    total += count;
    if (apply) fs.writeFileSync(path, text);
  }
}
console.log(`\nTotal: ${total}`);
if (!apply) console.log('Dry run.');
