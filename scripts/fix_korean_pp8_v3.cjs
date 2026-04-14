#!/usr/bin/env node
/**
 * fix_korean_pp8_v3.cjs
 * Third pass: fixes final remaining violations.
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'korean-v2');

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Direct string replacements per file
const FILE_FIXES = {
  'unit-04.js': [
    // VISUAL: "싸다" in "비싸다 means expensive... inexpensive"
    { old: `q:"비싸다 means expensive. What is the opposite adjective, meaning inexpensive?"`,
      new: `q:"What is the antonym of 비싸다? This word describes something that costs little."` },
  ],
  'unit-06.js': [
    // VISUAL: "있" in "exists verb 있다"
    { old: `q:"Which part of the existence verb 있다 is left when you remove the dictionary suffix?"`,
      new: `q:"Remove the dictionary suffix -다 from the existence verb. What is the bare stem?"` },
  ],
  'unit-10.js': [
    // HINT: "사 주다 = buy for someone" leaks 주다
    { old: `hint:"사 주다 = buy for someone. Mom bought the rice cake for the student."`,
      new: `hint:"Buying something as a gift for someone: the benefactive compound of the purchasing verb."` },
  ],
  'unit-13.js': [
    // HINT_FB: "Honorific: 먹다 → 드시다. Past + -(으)시-: 드셨어요." leaks 드셨어요
    { old: `hint:"Honorific: 먹다 → 드시다. Past + -(으)시-: 드셨어요."`,
      new: `hint:"Honorific eating verb + past tense + -(으)시-: three layers for respectful past."` },
    // HINT_FB: "-다고 하다 = reported statement. Friend said: it is good." leaks 다고
    { old: `hint:"-다고 하다 = reported statement. Friend said: it is good."`,
      new: `hint:"Report what a friend said about the food using the indirect statement quotation."` },
    // HINT_FB: "Past modifier -(으)ㄴ: 먹다 → 먹은. The bibimbap that was eaten." leaks 먹은
    { old: `hint:"Past modifier -(으)ㄴ: 먹다 → 먹은. The bibimbap that was eaten."`,
      new: `hint:"Apply the past tense modifier to the eating verb. The dish that was already eaten."` },
    // HINT_FB: "Reported command: -(으)라고 하다. Teacher commanding the student." leaks 라고
    { old: `hint:"Reported command: -(으)라고 하다. Teacher commanding the student."`,
      new: `hint:"Report what a teacher commanded using the indirect reported-command form."` },
    // HINT_FB: "Present noun modifier -는: 살다 → 사는. Describes someone who currently liv" leaks 사는
    { old: `hint:"Present noun modifier -는: 살다 → 사는. Describes someone who currently liv`,
      new: `hint:"The present tense modifier of the living verb describes a person by where they reside.` },
    // HINT: "Certain grammar patterns require nominalizer -기. Which ones?" leaks -기
    { old: `hint:"Certain grammar patterns require nominalizer -기. Which ones?"`,
      new: `hint:"Fixed grammar expressions like before-doing, famous-for, and purpose require a specific nominalizer."` },
    // HINT: "Two nominalizer types: one for fixed expressions (-기), one for specifi" leaks -기/-는
    { old: `hint:"Two nominalizer types: one for fixed expressions (-기), one for specifi`,
      new: `hint:"Two nominalizer forms: one for abstract/fixed expressions, one for specific ongoing actions."` },
  ],
  'unit-15.js': [
    // ㅂ-irregular hints (multiple)
    { old: `hint:"Four constructs: ㅂ-irregular grill verb + reported suggestion + nomina`,
      new: `hint:"Four constructs: consonant-irregular grill verb + reported suggestion + nominalization + copula."` },
    { old: `hint:"Four grammar forms: past modifier + spice modifier + ㅂ-irregular past `,
      new: `hint:"Four grammar forms: past modifier + adjective modifier + consonant-irregular past + surprise quote."` },
    { old: `hint:"ㅂ-irregular bland modifier + past modifier + change of state: three fo`,
      new: `hint:"Three forms: bland consonant-irregular modifier + past modifier + change of state."` },
  ],
  'unit-21.js': [
    // VISUAL: "면접에 합격했어요!" question contains ans="Passed the interview"
    { old: `q:"면접에 합격했어요! What happened?\n(I passed the interview!)"`,
      new: `q:"What does 합격하다 mean in the context of 면접에 합격했어요?\n(The result of the job interview)"` },
    // HINT: "치고 = for a category. 만큼 = proportional. Both advanced patterns." leaks 치고/만큼
    { old: `hint:"치고 = for a category. 만큼 = proportional. Both advanced patterns."`,
      new: `hint:"Two advanced patterns combined: one sets a comparative category, the other shows proportion."` },
    // HINT: "Elevation honors the other person's action; humility lowers one's own." leaks 드시다
    { old: `hint:"Elevation honors the other person's action; humility lowers one's own. Which is 드시다?"`,
      new: `hint:"One verb elevates the other person's eating; humble verbs lower the speaker's own actions."` },
  ],
  'unit-22.js': [
    // VISUAL: "찬성의 반대말은?" contains ans="반대"
    { old: `q:"찬성의 반대말은?\n(What is the opposite of 찬성?)"`,
      new: `q:"찬성 means agreement/in favor. Which word means the opposite — against or opposing?"`},
    // VISUAL: "커피 대신에 차를 마시겠습니다. '대신에' means:" contains ans="Instead of"
    { old: `q:"커피 대신에 차를 마시겠습니다. '대신에' means:\n(I will drink tea instead of coffee.)"`,
      new: `q:"대신에 in '커피 ___ 차를 마시겠습니다' expresses a substitution. What does 대신에 mean?"` },
    // Various hint leaks in later units
    // HINT: "'As you can see' connects the speaker to what the listener is observin" leaks 보다
    { old: `hint:"'As you can see' connects the speaker to what the listener is observing. What form does 보다 take?"`,
      new: `hint:"This expression connects to what the listener can observe. The seeing verb takes a special form."` },
  ],
  'unit-26.js': [
    // HINT: "Nominalize the forgetting verb with -기 to use it as a noun in the sent" leaks -기
    { old: `hint:"Nominalize the forgetting verb with -기 to use it as a noun in the sentence."`,
      new: `hint:"Turn the forgetting verb into a noun using a nominalizer suffix."` },
    // HINT: "This pattern expresses 'also does X' or 'sometimes does X': a review o" leaks -기도
    { old: `hint:"This pattern expresses 'also does X' or 'sometimes does X': a review of the -기도 form."`,
      new: `hint:"Review pattern: expressing that something also happens or sometimes happens."` },
    // HINT: "줄다 to 줄었다 = decreased. 었 = past ." leaks 줄었다
    { old: `hint:"줄다 to 줄었다 = decreased. 었 = past ."`,
      new: `hint:"The decreasing verb in past tense: which vowel-class past marker does it use?"` },
    // HINT: "Formal nominalization using -(으)ㅁ: converts an importance adjective to" leaks -(으)ㅁ
    { old: `hint:"Formal nominalization using -(으)ㅁ: converts an importance adjective to a formal noun."`,
      new: `hint:"The formal nominalizer suffix converts an adjective into a formal noun form."` },
    // HINT: "The long-form negation attaches -지 않다 after the verb stem." leaks -지/-않다
    { old: `hint:"The long-form negation attaches -지 않다 after the verb stem."`,
      new: `hint:"The long-form negation: a specific suffix + negative auxiliary after the verb stem."` },
    // HINT: "-(으)ㄹ 수 있다 = can. Core ability expression." leaks -(으)ㄹ/있다
    { old: `hint:"-(으)ㄹ 수 있다 = can. Core ability expression."`,
      new: `hint:"Core ability expression: the ability modifier + 수 + the existence verb."` },
    // HINT: "-아야 하다 = must. Obligation." leaks 하다
    { old: `hint:"-아야 하다 = must. Obligation."`,
      new: `hint:"Obligation form: must or have to. The vowel-harmony ending + 야 + obligation verb."` },
    // HINT: "-기 = turn verb into noun. 믿다 to 믿기 = believing." leaks -기
    { old: `hint:"-기 = turn verb into noun. 믿다 to 믿기 = believing."`,
      new: `hint:"Nominalization suffix that turns a verb into a noun. The believing/trusting verb."` },
  ],
};

let totalFixes = 0;

for (const [fileName, fixes] of Object.entries(FILE_FIXES)) {
  const filePath = path.join(BASE, fileName);
  if (!fs.existsSync(filePath)) {
    console.log(`  SKIPPING ${fileName} (not found)`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let fixCount = 0;

  for (const fix of fixes) {
    // Try exact match (handles truncated strings with prefix too)
    if (content.includes(fix.old)) {
      content = content.split(fix.old).join(fix.new);
      fixCount++;
    } else {
      // Try prefix match for truncated strings
      const prefix = fix.old.substring(0, 50);
      const idx = content.indexOf(prefix);
      if (idx !== -1) {
        // Find the end of this hint/question string
        const endQuote = content.indexOf('"', idx + prefix.length);
        if (endQuote !== -1) {
          const fullOld = content.substring(idx, endQuote + 1);
          content = content.replace(fullOld, fix.new.endsWith('"') ? fix.new : fix.new + '"');
          fixCount++;
        }
      }
    }
  }

  if (fixCount > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ${fileName}: ${fixCount} fixes`);
    totalFixes += fixCount;
  }
}

console.log(`\n=== TOTAL: ${totalFixes} fixes applied ===`);
