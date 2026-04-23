#!/usr/bin/env node
// Batch replace Japanese generic funFacts with word-specific ones.
// Table-driven: map trg → unique funFact. File-scoped for safety.

import fs from 'node:fs';
import path from 'node:path';

const apply = process.argv.includes('--apply');

const GENERIC_LINE = 'This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics.';

// trg → replacement funFact.
const FACTS = {
  // === u28 文章体 (written style / formal writing) ===
  'である': 'The 文語(ぶんご)-derived copula of formal writing. Essays, editorials, and academic papers use である where spoken Japanese uses です. Reading newspapers and novels without である feels impossible.',
  'けだし': 'Classical adverb meaning roughly "indeed" or "surely." Rare in modern speech, but Japanese legal opinions and older literature rely on けだし to frame an assertion with gravitas.',
  'おそらく': 'おそらく (probably) is softer and more formal than たぶん (maybe). News commentators and legal writing prefer おそらく when hedging. In conversation, using おそらく signals careful thought.',
  'あるいは': 'Literary "or" — formal alternative to または. Essays and legal writing use あるいは for subtle dichotomies, while the more everyday または handles simple choices like on forms.',
  'ないし': 'Legal and academic formal "or" / "from X to Y." 三(さん)ないし五人(ごにん) means "three to five people." Rare in speech but standard in contracts and statutes.',
  'ゆえに': 'Classical logical connector "therefore." Most famous in translations of Descartes: 我(われ)思(おも)う、ゆえに我(われ)あり (I think, therefore I am). Modern speech uses だから.',
  'とはいえ': 'Concessive conjunction meaning "that said" or "even so." Balances a previous claim. Journalists use とはいえ to pivot to nuance without sounding combative.',
  'いわゆる': 'Means "so-called" or "what is called." Used when introducing a term, often with slight irony or caution: いわゆる「外国人(がいこくじん)」問題(もんだい) (the so-called "foreigner" problem).',

  // === u28 ビジネスメール ===
  '件名(けんめい)': '件(けん) (matter) + 名(めい) (name). Japanese email subject lines are typically short and blunt, often starting with 【】brackets to mark priority: 【重要(じゅうよう)】, 【至急(しきゅう)】, 【確認(かくにん)依頼(いらい)】.',
  '本文(ほんぶん)': '本(ほん) (main) + 文(ぶん) (text). The 本文(ほんぶん) of a Japanese business email follows strict structure: 挨拶(あいさつ) greeting, 名乗(なの)り self-introduction, 要件(ようけん) main point, 締(し)めくくり closing.',
  '署名(しょめい)': '署(しょ) (to write/sign) + 名(めい) (name). A Japanese email 署名(しょめい) typically includes 会社名(かいしゃめい), 部署(ぶしょ), name, 電話(でんわ), email, and 住所(じゅうしょ). Some add a favorite quote for personal warmth.',
  '添付(てんぷ)': '添(そ)える (to attach) + 付(つ)ける (to affix). 添付(てんぷ)ファイル (attachment) is the standard term. Many Japanese companies disallow attaching files over 10 MB due to historical email server limits.',
  '前略(まえりゃく)': 'Literally "omitting the preceding." A signal in old-school letters that you are skipping the usual seasonal greeting. Pairs with closing 草々(そうそう) (briefly). Used for urgent notes.',
  '送信(そうしん)する': '送(おく)る (to send) + 信(しん) (message). The 送信(そうしん) button in Japanese email clients (Gmail, Outlook) is one of the most universally recognized Japanese IT terms.',
  '記述(きじゅつ)': '記(しる)す (to note) + 述(の)べる (to state). Refers to written description, especially factual or technical. Japanese programming documentation uses 記述(きじゅつ) constantly: 型(かた)記述(きじゅつ), 関数(かんすう)記述(きじゅつ).',
  '訂正(ていせい)': '訂(ただ)す (to correct) + 正(ただ)す (to rectify). TV news runs 訂正(ていせい)お詫(わ)び (correction and apology) segments. The double-emphasis kanji pair signals the seriousness of correcting the record.',

  // === u29 経済用語 ===
  'インフレ': 'Short for インフレーション. Japan spent 1991-2012 in a famous deflationary era (失(うしな)われた20年(にじゅうねん)). Inflation returning in 2022-2023 shocked a generation used to stable prices.',
  'デフレ': 'Short for デフレーション. 日本(にほん) is the textbook case for chronic デフレ in a major economy. The Bank of Japan ran 量的緩和(りょうてきかんわ) (quantitative easing) for decades to escape it.',
  '円高(えんだか)': '円(えん) (yen) + 高(たか)い (high/strong). Strong yen hurts exporters but helps importers and tourists heading overseas. The 1985 プラザ合意(ごうい) (Plaza Accord) triggered a historic 円高(えんだか) surge.',
  '円安(えんやす)': '円(えん) (yen) + 安(やす)い (cheap/weak). Benefits exporters and inbound tourism. The post-2022 円安(えんやす) brought record tourist numbers but painful fuel and food import prices.',
  '景気後退(けいきこうたい)': '景気(けいき) (economic climate) + 後退(こうたい) (retreat). Technically defined as two consecutive quarters of negative GDP growth. Japan entered 景気後退(けいきこうたい) briefly during COVID-19 shutdowns.',
  '不況(ふきょう)': '不(ふ) (not) + 況(きょう) (state). Broader than 景気後退(けいきこうたい). Japanese economists distinguish 平成不況(へいせいふきょう) (Heisei recession 1991-) as a three-decade slump.',
  'GDP': 'Japanese news always spells out G-D-P in katakana 英字(えいじ). The native term is 国内総生産(こくないそうせいさん). Japan was the world\'s #2 economy until 2010 when China overtook it; #4 after Germany passed Japan in 2023.',
  '雇用率(こようりつ)': '雇(やと)う (to hire) + 用(もち)いる (to use) + 率(りつ) (rate). Japan\'s 雇用率(こようりつ) is historically high, but 非正規(ひせいき) (non-regular) employment has grown from 20% to 40% since 1990.',

  // === u29 貿易 ===
  '輸出(ゆしゅつ)': '輸(ゆ) (to transport) + 出(しゅつ) (out). Japan is globally known for 輸出(ゆしゅつ) of cars, electronics, and machinery. Toyota, Sony, and Nintendo drive trillions of yen in annual 輸出(ゆしゅつ).',
  '輸入(ゆにゅう)': '輸(ゆ) (to transport) + 入(にゅう) (in). Resource-poor Japan 輸入(ゆにゅう)s 99% of its oil, 90% of natural gas, and 60% of food. This dependency drives active 貿易(ぼうえき) diplomacy.',
  '貿易(ぼうえき)': '貿(ぼう) (to trade) + 易(えき) (exchange). Japan\'s 貿易(ぼうえき) structure has shifted from export surplus to chronic deficit since Fukushima halted nuclear power and raised fossil fuel imports.',
  '関税(かんぜい)': '関(かん) (barrier) + 税(ぜい) (tax). Japan is famously protective of its rice market: 関税(かんぜい) on imported rice exceeds 700%. The TPP (CPTPP) pact challenged this decades-old protection.',
  '供給(きょうきゅう)': '供(そな)える (to offer) + 給(たま)う (to bestow). 供給(きょうきゅう)不足(ぶそく) (supply shortage) dominated 2020-2021 pandemic news as semiconductor supply chains disrupted Japanese car production.',
  '需要(じゅよう)': '需(じゅ) (to need) + 要(よう) (to require). 需要(じゅよう)と供給(きょうきゅう) is Japanese Econ 101 textbook phrase 1. The aging population is slowly shrinking domestic 需要(じゅよう).',
  '市場価格(しじょうかかく)': '市場(しじょう) (market) + 価格(かかく) (price). Tokyo\'s 築地(つきじ) and 豊洲(とよす) fish 市場(しじょう) famously set overnight 市場価格(しじょうかかく) through ritualized auctions dating to the 1930s.',
  '直接投資(ちょくせつとうし)': '直接(ちょくせつ) (direct) + 投資(とうし) (investment). Japanese corporations hold massive foreign 直接投資(ちょくせつとうし) positions, especially in Southeast Asia, accumulated since the 1980s bubble era.',
};

const FILES_TO_PATCH = [
  'src/data/japanese-v2/_batch9_u28_L01.js',
  'src/data/japanese-v2/_batch10_u28_L01.js',
  'src/data/japanese-v2/_batch9_u29_L01.js',
  'src/data/japanese-v2/_batch10_u29_L01.js',
];

let applied = 0;
for (const f of FILES_TO_PATCH) {
  let text = fs.readFileSync(f, 'utf8');
  let localCount = 0;
  for (const [trg, newFact] of Object.entries(FACTS)) {
    // Find teach blocks with this trg.
    const trgPattern = new RegExp(`trg:"${trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g');
    if (!trgPattern.test(text)) continue;
    // Find and replace generic funFact in that block.
    // Block goes from {type:"teach" to matching closing }.
    // We only replace the generic line scoped to this block.
    const blockPat = new RegExp(`(trg:"${trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?funFact:")${GENERIC_LINE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(")`, 'g');
    const matches = text.match(blockPat);
    if (!matches || !matches.length) continue;
    text = text.replace(blockPat, `$1${newFact.replace(/\$/g, '$$$$')}$2`);
    localCount++;
  }
  if (localCount > 0) {
    console.log(`${f}: ${localCount} replacement(s)`);
    applied += localCount;
    if (apply) fs.writeFileSync(f, text);
  }
}
console.log(`\nTotal: ${applied}`);
if (!apply) console.log('Dry run. Re-run with --apply.');
