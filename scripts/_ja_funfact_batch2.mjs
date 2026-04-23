#!/usr/bin/env node
// Batch 2: Japanese funFact replacements for units 30-31.
// NOTE: all values use single quotes internally to avoid escape issues.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');

const GENERIC = 'This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics.';

const FACTS = {
  // u30 思想 (philosophy/thought)
  '倫理(りんり)': '倫(りん) (rules of conduct) + 理(り) (principle). Japanese companies distinguish 法律(ほうりつ) (law) from 倫理(りんり) (ethics). Many corporate scandals describe breaches as not illegal but 倫理(りんり)に反(はん)する (ethically wrong).',
  '道徳(どうとく)': '道(みち) (the way) + 徳(とく) (virtue). Japanese elementary schools have a dedicated 道徳(どうとく) curriculum since 2018, covering honesty, respect, and collective responsibility through short stories and discussions.',
  '善悪(ぜんあく)': '善(ぜん) (good) + 悪(あく) (evil). A classical binary concept. Japanese philosophy often emphasizes situational ethics over absolute 善悪(ぜんあく), influenced by Buddhist nuance and Shinto naturalism.',
  '真理(しんり)': '真(しん) (true) + 理(り) (principle). Used in philosophy, logic, and religion to mean universal truth. Buddhist traditions translate dharma as 真理(しんり), the true nature of reality.',
  '存在(そんざい)': '存(そん) (to exist) + 在(ざい) (to be present). A key philosophical term. 存在論(そんざいろん) translates ontology. Heidegger translations in Japanese use 存在(そんざい) for Sein (being).',
  '本質(ほんしつ)': '本(ほん) (origin) + 質(しつ) (quality). The intrinsic nature of a thing. A favorite term of Japanese critics: 本質(ほんしつ)を突(つ)く means to cut to the essence in any analysis.',
  '観念(かんねん)': '観(かん) (to observe) + 念(ねん) (thought). Also means mental surrender, as in 観念(かんねん)しろ (give up / face reality). A philosophical term that doubles as everyday slang.',
  '知覚(ちかく)': '知(ち) (knowledge) + 覚(かく) (to sense). Used in psychology and philosophy for perception. 知覚(ちかく)心理学(しんりがく) (perceptual psychology) is a standard Japanese university subject.',

  // u30 Reasoning
  '推論(すいろん)': '推(すい) (to push/infer) + 論(ろん) (argument). Used in logic, law, and AI. Japanese legal reasoning relies heavily on 推論(すいろん)過程(かてい) (chain of inference) rather than strict case law, reflecting civil-law tradition.',
  '仮説(かせつ)': '仮(か) (provisional) + 説(せつ) (theory). Scientific method is taught as 仮説(かせつ) → 実験(じっけん) → 結論(けつろん) in Japanese middle school, mirroring English hypothesis-experiment-conclusion.',
  '証明(しょうめい)': '証(しょう) (proof) + 明(めい) (clear). Mathematical proofs, legal proofs, and everyday validations all use 証明(しょうめい). Student ID cards are 身分(みぶん)証明書(しょうめいしょ) (identification proof document).',
  '前提(ぜんてい)': '前(ぜん) (before) + 提(てい) (to present). Used in logic, business, and everyday reasoning. Japanese debate often probes whether a 前提(ぜんてい)が違(ちが)う (the premise is wrong) before attacking the conclusion.',
  '機能(きのう)する': '機(き) (mechanism) + 能(のう) (ability). A neutral verb for things working as intended. Japanese tech journalism heavily uses 機能(きのう)する when describing whether software, policies, or systems deliver.',
  '客観的(きゃっかんてき)': '客観(きゃっかん) (object-view) + 的(てき) (-ive). Contrasts with 主観的(しゅかんてき) (subjective). Japanese academic and journalistic writing prizes 客観的(きゃっかんてき) perspective as a mark of credibility.',
  '主観的(しゅかんてき)': '主観(しゅかん) (subject-view) + 的(てき) (-ive). Personal, experience-based viewpoint. Japanese criticism distinguishes 主観的(しゅかんてき) review (this reviewer felt) from 客観的(きゃっかんてき) analysis (measurable facts).',
  '傾向(けいこう)': '傾(かたむ)く (to lean) + 向(む)く (to face). A directional tendency. 傾向(けいこう)と対策(たいさく) (trends and countermeasures) is a famous Japanese study-guide subtitle, promising pattern-based exam prep.',

  // u31 裁判 (legal system)
  '裁判官(さいばんかん)': '裁(さば)く (to judge) + 判(はん) (decision) + 官(かん) (official). Japanese 裁判官(さいばんかん) have lifetime tenure until age 65 and are appointed via 司法試験(しほうしけん) — an exam with historically under 3% pass rate.',
  '弁護士(べんごし)': '弁(べん) (to argue) + 護(ご) (to defend) + 士(し) (professional). Japan has one of the lowest lawyer-to-citizen ratios in the OECD. A 弁護士(べんごし) badge features the scales of justice motif.',
  '被告人(ひこくにん)': '被(ひ) (to receive) + 告(こく) (accusation) + 人(にん) (person). The 被告人(ひこくにん) in Japanese criminal trials has a 99%+ conviction rate, a statistic that attracts significant domestic and international legal debate.',
  '判決(はんけつ)': '判(はん) (judgment) + 決(けつ) (decision). Japanese 判決(はんけつ) are read aloud by the 裁判官(さいばんかん) in court and published on the Supreme Court website. High-profile verdicts drive media cycles.',
  '証拠(しょうこ)': '証(しょう) (proof) + 拠(きょ) (basis). Japanese criminal procedure has strict 証拠(しょうこ)採用(さいよう) (evidence admission) rules. Illegally obtained 証拠(しょうこ) can be excluded under 証拠排除法則(はいじょほうそく).',
  '無罪(むざい)': '無(む) (not) + 罪(ざい) (crime). Acquittal is rare in Japan (about 0.1%). 無罪判決(むざいはんけつ) of a senior figure typically becomes front-page news for weeks.',
  '有罪(ゆうざい)': '有(ゆう) (having) + 罪(ざい) (crime). Finding of guilt. Japanese conviction rate exceeds 99%, sparking ongoing debate about confession-driven investigation practices.',
  '憲法(けんぽう)': '憲(けん) (constitution) + 法(ほう) (law). Japan\'s 日本国憲法(にほんこくけんぽう) (1947) has never been amended, an unusual record. Article 9 (renouncing war) is the most globally famous clause.',

  // u31 rights/law
  '人権(じんけん)': '人(じん) (human) + 権(けん) (right). Post-war Japan rebuilt legal system around 基本的人権(きほんてきじんけん) (fundamental human rights). The United Nations Human Rights Council periodically reviews Japan.',
  '市民権(しみんけん)': '市民(しみん) (citizen) + 権(けん) (right). In Japan, 市民権(しみんけん) often refers to social acceptance beyond legal citizenship. 市民権(しみんけん)を得(え)る means something has become mainstream.',
  '選挙権(せんきょけん)': '選挙(せんきょ) (election) + 権(けん) (right). Japan lowered the voting age from 20 to 18 in 2016, the first change since 1945. Turnout among 18-19 year-olds remains a civic education concern.',
  '言論(げんろん)の自由(じゆう)': 'Freedom of speech, guaranteed in Article 21 of Japan\'s 憲法(けんぽう). Japan\'s press freedom ranking has declined since 2010 due to journalist-source confidentiality concerns and pressure from the kisha-club system.',
  'プライバシー': 'Imported English. Japan\'s 個人情報保護法(こじんじょうほうほごほう) (Personal Information Protection Act, 2003 + 2017) is the primary プライバシー framework, comparable to but narrower than GDPR.',
  '平等(びょうどう)': '平(へい) (flat) + 等(とう) (equal). Article 14 of Japan\'s 憲法(けんぽう) guarantees 法(ほう)の下(もと)の平等(びょうどう) (equality under law). 男女平等(だんじょびょうどう) (gender equality) is an active ongoing topic.',
  '差別(さべつ)': '差(さ) (difference) + 別(べつ) (separation). Japanese anti-discrimination law has been strengthened in the 2020s to cover LGBTQ+ and 外国人(がいこくじん) (foreign residents), though some advocates argue more is needed.',
  '法律(ほうりつ)': '法(ほう) (law) + 律(りつ) (rule). Japan\'s legal system blends German civil law (Meiji era) with post-WWII American constitutional influence. 六法全書(ろっぽうぜんしょ) (Six Codes) collects core 法律(ほうりつ).',
};

const FILES = [
  'src/data/japanese-v2/_batch9_u30_L01.js',
  'src/data/japanese-v2/_batch10_u30_L01.js',
  'src/data/japanese-v2/_batch9_u31_L01.js',
  'src/data/japanese-v2/_batch10_u31_L01.js',
];

let total = 0;
for (const f of FILES) {
  let text = fs.readFileSync(f, 'utf8');
  let count = 0;
  for (const [trg, newFact] of Object.entries(FACTS)) {
    const escTrg = trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Match: trg:"<trg>" ... funFact:"<generic>"
    const re = new RegExp(`(trg:"${escTrg}"[\\s\\S]*?funFact:")${GENERIC.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(")`, 'g');
    if (!re.test(text)) continue;
    re.lastIndex = 0;
    text = text.replace(re, (_, pre, post) => {
      count++;
      return pre + newFact + post;
    });
  }
  if (count > 0) {
    console.log(`${f}: ${count}`);
    total += count;
    if (apply) fs.writeFileSync(f, text);
  }
}
console.log(`\nTotal: ${total}`);
if (!apply) console.log('Dry run. Re-run with --apply.');
