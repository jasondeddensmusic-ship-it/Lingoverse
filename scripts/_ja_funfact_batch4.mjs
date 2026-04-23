#!/usr/bin/env node
// Batch 4: Japanese funFact replacements for units 34-36 (final 48).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics.';

const FACTS = {
  // u34 外交 (diplomacy)
  '外交官(がいこうかん)': '外交(がいこう) (diplomacy) + 官(かん) (official). Japanese 外交官(がいこうかん) are selected via 外務省(がいむしょう)採用試験(さいようしけん). The 外務省(がいむしょう) (MOFA) maintains around 230 embassies and consulates worldwide.',
  '条約(じょうやく)': '条(じょう) (article) + 約(やく) (agreement). Japanese 条約(じょうやく) require Diet ratification under Article 73 of the 憲法(けんぽう). The 日米安保条約(にちべいあんぽじょうやく) (US-Japan Security Treaty, 1960) remains the most politically significant.',
  '国連(こくれん)': 'Short for 国際連合(こくさいれんごう). Japan joined the UN in 1956. Japan has been a non-permanent UNSC member more times than any other non-P5 country and seeks permanent seat reform.',
  '多国間(たこくかん)': '多(た) (many) + 国(こく) (country) + 間(かん) (between). Japan participates in major 多国間(たこくかん) frameworks: G7, G20, APEC, ASEAN+3, Quad. 多国間主義(たこくかんしゅぎ) (multilateralism) is a MOFA priority.',
  '協力(きょうりょく)': '協(きょう) (together) + 力(りょく) (power). Japan\'s JICA 国際協力機構(こくさいきょうりょくきこう) is one of the world\'s largest development aid agencies, operating in 150+ countries with a 2 trillion yen budget.',
  '緊張(きんちょう)': '緊(きん) (tight) + 張(ちょう) (to stretch). Diplomatic term for strained relations. Also used personally (緊張(きんちょう)している = I am nervous), creating a pun-rich word in political headlines.',
  '制裁(せいさい)': '制(せい) (to control) + 裁(さい) (to judge). Japanese economic 制裁(せいさい) policy is coordinated with G7 partners. Historical examples include sanctions on North Korea since 2006 nuclear tests.',
  '紛争(ふんそう)': '紛(ふん) (disorder) + 争(そう) (conflict). Japan\'s 憲法(けんぽう) Article 9 renouncing war shapes its approach to 紛争(ふんそう) resolution. Japanese peacekeeping deployments are tightly constrained.',

  // u34 Foreign aid
  '援助(えんじょ)': '援(えん) (to help) + 助(じょ) (to assist). 政府開発援助(せいふかいはつえんじょ) (ODA, Official Development Assistance) peaked at 1997. Japan\'s ODA model emphasizes infrastructure and technical training over cash grants.',
  '開発(かいはつ)': '開(かい) (to open) + 発(はつ) (to start). Japan\'s 開発協力大綱(かいはつきょうりょくたいこう) (Development Cooperation Charter) defines its aid principles. A shift from infrastructure to health, education, and climate has accelerated since 2015.',
  '貧困(ひんこん)': '貧(ひん) (poor) + 困(こん) (troubled). Japan has one of the OECD\'s highest child 貧困(ひんこん) rates (about 14%). 相対的貧困(そうたいてきひんこん) (relative poverty) is a growing domestic concern despite high GDP per capita.',
  '難民(なんみん)': '難(なん) (hardship) + 民(みん) (people). Japan is a signatory to the 1951 Refugee Convention but accepts very few 難民(なんみん), typically under 1% of applicants. Ukrainian 避難民(ひなんみん) policy in 2022 was a notable exception.',
  '気候変動(きこうへんどう)': '気候(きこう) (climate) + 変動(へんどう) (change). 1997 京都議定書(きょうとぎていしょ) was negotiated in Kyoto, symbolically cementing Japan in climate diplomacy. COP27-29 continue Japan\'s active participation.',
  '問題解決(もんだいかいけつ)': '問題(もんだい) (problem) + 解決(かいけつ) (resolution). Japanese corporate training emphasizes 問題解決(もんだいかいけつ) frameworks: PDCA cycle, ロジックツリー, MECE. This vocabulary has permeated daily management speech.',
  '貿易協定(ぼうえききょうてい)': '貿易(ぼうえき) (trade) + 協定(きょうてい) (agreement). Japan\'s CPTPP leadership after US withdrawal was a notable moment. EPAs (経済連携協定) with EU, UK, ASEAN, and RCEP mark a 貿易協定(ぼうえききょうてい) boom.',
  '日本外交(にほんがいこう)': 'Japan\'s diplomacy historically emphasized three pillars: US alliance, UN participation, Asia engagement. The 2015 peace-security legislation loosened post-war restraints on collective self-defense operations.',

  // u35 Digital society
  '人工知能(じんこうちのう)': '人工(じんこう) (artificial) + 知能(ちのう) (intelligence). Abbreviated AI. Japan\'s 2019 AI strategy aims for humanistic AI use (人間中心(にんげんちゅうしん)のAI). Workplace 生成AI (generative AI) adoption surged through 2023-2024.',
  'ビッグデータ': 'Imported English. Japanese firms were early ビッグデータ adopters in telecom, retail, and railway. JR East collects billions of Suica card tap records daily, anonymized for 都市計画(としけいかく) (urban planning).',
  'サイバーセキュリティ': 'Imported English. Japan\'s 内閣サイバーセキュリティセンター (NISC) runs since 2015. Ransomware attacks on Japanese companies spiked in 2021-2022, making サイバーセキュリティ a board-level concern.',
  'デジタル化(か)': 'Imported デジタル + 化(か) (-ification). Japan notoriously lagged in デジタル化(か) (hanko seal, fax machines). The 2021 デジタル庁(ちょう) (Digital Agency) was created to accelerate government digitization.',
  '自動化(じどうか)': '自動(じどう) (automatic) + 化(か) (-ification). Japanese manufacturing pioneered 自動化(じどうか). Toyota\'s 自働化(じどうか, with an added 人 radical) means human-supervised automation, a philosophical distinction.',
  'ロボティクス': 'Imported English. Japan is the world leader in industrial ロボティクス with firms like FANUC, Yaskawa, and Kawasaki. ASIMO and Pepper made Japan a pop-culture ロボティクス exporter too.',
  'クラウド': 'Imported English cloud. AWS Tokyo was launched in 2011. Japanese government クラウド adoption accelerated after 2020 with the ガバメントクラウド (government cloud) initiative replacing dozens of fragmented systems.',
  'アルゴリズム': 'Imported English. Japanese high school 情報(じょうほう)I curriculum includes アルゴリズム basics since 2022. 生成AI impact on job markets has made アルゴリズム awareness a general civic literacy concern.',

  // u35 Privacy/compliance
  'プライバシー保護(ほご)': 'プライバシー + 保護(ほご) (protection). Japan\'s 個人情報保護法(こじんじょうほうほごほう) (APPI) is the primary framework, updated in 2017 and 2020 to approach GDPR rigor for international data transfers.',
  'データ保護(ほご)': 'データ + 保護(ほご). Japan was granted GDPR adequacy decision by the EU in 2019, enabling data flow between the two jurisdictions. Japanese companies operating in Europe must comply with both regimes.',
  '監視(かんし)': '監(かん) (to oversee) + 視(し) (to watch). Japanese surveillance culture balances 防犯(ぼうはん) (crime prevention) with privacy. Japan has more CCTV per capita than most democracies but less public debate than in Europe.',
  '自己決定権(じこけっていけん)': '自己(じこ) (self) + 決定(けってい) (decision) + 権(けん) (right). Bioethics debates in Japan center on 自己決定権(じこけっていけん) versus family consent, particularly around end-of-life care and organ donation.',
  'デジタルデバイド': 'Imported English. Japan\'s デジタルデバイド splits by age: smartphones reach 90%+ of under-60s but only about 60% of over-70s. Government digital services must maintain paper alternatives.',
  '情報格差(じょうほうかくさ)': '情報(じょうほう) (information) + 格差(かくさ) (gap). Native equivalent of デジタルデバイド. Japanese policy frames 情報格差(じょうほうかくさ) as a social inclusion issue, not just technology access.',
  'フェイクニュース': 'Imported English. The 2016 US election brought フェイクニュース into mainstream Japanese vocabulary. 2021-2022 elections saw organized Japanese-language disinformation campaigns, driving policy response.',
  'コンプライアンス': 'Imported English. Japanese corporate コンプライアンス training became universal after the 2000s Enron-era scandals. 内部通報制度(ないぶつうほうせいど) (whistleblower systems) are now legally required for most firms.',

  // u36 Future of Japan
  '革新(かくしん)': '革(かく) (to change) + 新(しん) (new). Japanese innovation policy emphasizes 破壊的(はかいてき)革新(かくしん) (disruptive innovation) to exit the lost decades. 革新(かくしん)都市(とし) (innovation city) initiatives target Kyoto, Fukuoka, Tsukuba.',
  'スタートアップ': 'Imported English. Japan\'s スタートアップ ecosystem was historically weak but has grown rapidly since 2020. The government pledged 10 trillion yen スタートアップ support through 2027 under the new capitalism framework.',
  '地方創生(ちほうそうせい)': '地方(ちほう) (regional) + 創生(そうせい) (creation). A 2014 initiative to revitalize depopulating rural areas via subsidies, tax incentives, and 移住(いじゅう) (migration) programs. Results are mixed but initiatives continue.',
  '働(はたら)き方改革(かたかいかく)': '働(はたら)く (to work) + 方(かた) (way) + 改革(かいかく) (reform). Since 2019, overtime caps, paid leave rules, and 同一労働同一賃金(どういつろうどうどういつちんぎん) (equal pay for equal work) reshape Japanese labor law.',
  '子育(こそだ)て支援(しえん)': '子育(こそだ)て (childcare) + 支援(しえん) (support). Japan\'s declining birth rate (TFR 1.26 in 2022) drives aggressive 子育(こそだ)て支援(しえん) expansion: universal preschool, paid parental leave, cash allowances.',
  'インバウンド': 'Imported English. Japan\'s インバウンド strategy aimed for 40M annual tourists pre-COVID (hit 31.9M in 2019). Post-pandemic recovery hit records in 2024, driven by weak yen and UNESCO heritage sites.',
  'ソサエティ': 'Imported English. ソサエティ5.0 is Japan\'s vision for a super-smart society integrating IoT, AI, and robotics. Preceded by 1.0 hunter-gatherer, 2.0 agricultural, 3.0 industrial, 4.0 information.',
  '未来像(みらいぞう)': '未来(みらい) (future) + 像(ぞう) (image). 2050 未来像(みらいぞう) is a standard prompt in Japanese corporate and government strategic planning. Long-term visioning is culturally valued.',

  // u36 Reflection
  '達成感(たっせいかん)': '達成(たっせい) (achievement) + 感(かん) (feeling). A core concept in Japanese education and work culture. 達成感(たっせいかん)を得(え)る (to get a sense of achievement) is framed as a key motivator, especially in team contexts.',
  '振(ふ)り返(かえ)り': '振(ふ)る (to shake) + 返(かえ)る (to return). Literally looking back. KPT (Keep, Problem, Try) and other structured 振(ふ)り返(かえ)り frameworks are widely used in Japanese agile and education contexts.',
  '応用(おうよう)する': '応(おう) (to respond) + 用(よう) (to use). Japanese math textbooks distinguish 基礎(きそ) (foundation) from 応用(おうよう) (application) problems. 応用力(おうようりょく) is a common educational goal.',
  '発展(はってん)する': '発(はつ) (to emerge) + 展(てん) (to expand). Used for economic, academic, and personal growth. 発展途上国(はってんとじょうこく) means developing country. The verb form implies active positive change.',
  '貢献(こうけん)する': '貢(こう) (tribute) + 献(けん) (to offer). The aspirational word in Japanese corporate mission statements: 社会(しゃかい)に貢献(こうけん)する (contribute to society). Embedded in most annual reports.',
  '期待(きたい)': '期(き) (period) + 待(ま)つ (to wait). Carries stronger weight than English expectation. 期待(きたい)に応(こた)える (to meet expectations) is a central relational value in Japanese workplaces and families.',
  '課題(かだい)': '課(か) (assignment) + 題(だい) (topic). Softer than 問題(もんだい) (problem). Japanese management prefers 課題(かだい) because it frames a difficulty as a task to tackle rather than a flaw to blame.',
  '展望(てんぼう)': '展(てん) (to spread) + 望(ぼう) (to wish/view). Used for outlook in business, geography, and career. 展望台(てんぼうだい) (observation deck) makes the metaphor concrete across Japanese tourist sites.',
};

const FILES = [
  'src/data/japanese-v2/_batch9_u34_L01.js',
  'src/data/japanese-v2/_batch10_u34_L01.js',
  'src/data/japanese-v2/_batch9_u35_L01.js',
  'src/data/japanese-v2/_batch10_u35_L01.js',
  'src/data/japanese-v2/_batch9_u36_L01.js',
  'src/data/japanese-v2/_batch10_u36_L01.js',
];

let total = 0;
for (const f of FILES) {
  let text = fs.readFileSync(f, 'utf8');
  let count = 0;
  for (const [trg, newFact] of Object.entries(FACTS)) {
    const escTrg = trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(trg:"${escTrg}"[\\s\\S]*?funFact:")${GENERIC.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(")`, 'g');
    if (!re.test(text)) continue;
    re.lastIndex = 0;
    text = text.replace(re, (_, pre, post) => { count++; return pre + newFact + post; });
  }
  if (count > 0) {
    console.log(`${f}: ${count}`);
    total += count;
    if (apply) fs.writeFileSync(f, text);
  }
}
console.log(`\nTotal: ${total}`);
if (!apply) console.log('Dry run. Re-run with --apply.');
