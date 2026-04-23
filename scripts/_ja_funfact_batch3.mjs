#!/usr/bin/env node
// Batch 3: Japanese funFact replacements for units 32-33 (medical + literature).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics.';

const FACTS = {
  // u32 医療 (medical)
  '診察(しんさつ)': '診(しん) (to examine) + 察(さつ) (to observe). A standard 診察(しんさつ) at a Japanese clinic often runs just 3-5 minutes, earning the nickname 3分診療(さんぷんしんりょう). Japan has more hospital beds per capita than any OECD country.',
  '手術(しゅじゅつ)': '手(しゅ) (hand) + 術(じゅつ) (skill). Literally hand-skill. Japan leads in robotic 手術(しゅじゅつ) adoption, with the da Vinci system used for cancer and cardiac procedures in most teaching hospitals.',
  '処方箋(しょほうせん)': '処方(しょほう) (prescription method) + 箋(せん) (slip). Japan separates 処方箋(しょほうせん) issuing (doctors) from dispensing (pharmacists) since the 1997 分業(ぶんぎょう) (separation) reform.',
  '入院(にゅういん)': '入(にゅう) (to enter) + 院(いん) (institution). Japanese average hospital stay is about 16 days, 3x longer than the OECD average. 入院(にゅういん) bills are mostly covered by 健康保険(けんこうほけん) (national health insurance).',
  '退院(たいいん)': '退(たい) (to retreat) + 院(いん) (institution). The discharge ritual includes 退院(たいいん)祝(いわ)い (discharge celebration) and お礼(れい) (thank-you) gifts to nurses, though modern hospitals now discourage the latter.',
  '健康診断(けんこうしんだん)': '健康(けんこう) (health) + 診断(しんだん) (diagnosis). Japanese companies must provide annual 健康診断(けんこうしんだん) to employees by law. Results include BMI, blood tests, chest X-rays, and stomach imaging for those over 35.',
  '予防(よぼう)': '予(よ) (in advance) + 防(ぼう) (to prevent). The national slogan 予防(よぼう)が一番(いちばん) (prevention first) drives Japan\'s cancer screening and vaccination programs. The pandemic added マスク (mask-wearing) as a norm.',
  '免疫(めんえき)': '免(めん) (to exempt) + 疫(えき) (epidemic). Shinya Tasuku won the 2018 Nobel Prize for 免疫(めんえき) checkpoint therapy in cancer. Japan is a major center for 免疫(めんえき)学(がく) (immunology) research.',

  // u32 Mental health
  'ストレス': 'From English. ストレス社会(しゃかい) (stress society) is a standard Japanese media framing. Annual workplace ストレスチェック (stress checks) became legally mandatory for firms with 50+ employees in 2015.',
  'うつ病(びょう)': 'うつ (pressed down) + 病(びょう) (illness). Japanese 厚生労働省(こうせいろうどうしょう) estimates 1.5 million people have うつ病(びょう). Lifetime prevalence is climbing and workplace awareness training has expanded since 2010.',
  '不安症(ふあんしょう)': '不安(ふあん) (anxiety) + 症(しょう) (condition). 社交不安症(しゃこうふあんしょう) (social anxiety disorder) and パニック障害(しょうがい) (panic disorder) are now widely recognized diagnoses, though stigma in the workplace persists.',
  'カウンセリング': 'Imported English. Mental health support in Japan historically went through 精神科(せいしんか) (psychiatry) rather than カウンセリング. The counseling profession has grown rapidly since the 2010s.',
  'セルフケア': 'Imported English. セルフケア apps and magazines proliferated during the pandemic. Traditional Japanese 養生(ようじょう) (life cultivation) concepts have been rebranded as セルフケア for younger audiences.',
  'マインドフルネス': 'Imported English. Ironically, マインドフルネス returns to Japan as Western mindfulness, originally derived from Buddhist 瞑想(めいそう) (meditation). Corporate マインドフルネス programs are now common at tech firms.',
  '心理士(しんりし)': '心理(しんり) (psychology) + 士(し) (professional). Japan created the national 公認心理師(こうにんしんりし) qualification in 2015, the first unified psychology license, putting the field on par with medical and legal professions.',
  '福祉(ふくし)': '福(ふく) (fortune) + 祉(し) (blessing). Japan\'s 社会福祉(しゃかいふくし) system faces demographic strain from an aging population. 介護保険(かいごほけん) (long-term care insurance) started in 2000 and is regularly adjusted.',

  // u33 古典文学 (literature)
  '俳句(はいく)': '俳(はい) (verse) + 句(く) (phrase). Japan\'s most internationally famous literary form, 17 syllables in 5-7-5. Matsuo Basho (1644-1694) elevated 俳句(はいく) from entertainment to serious art. Each requires a 季語(きご) (seasonal word).',
  '短歌(たんか)': '短(たん) (short) + 歌(うた) (song). 31-syllable 5-7-5-7-7 form, older than 俳句(はいく). The 万葉集(まんようしゅう) (8th century) contains over 4,500 短歌(たんか). The Emperor still composes 短歌(たんか) at New Year.',
  '物語(ものがたり)': 'Literally "thing-telling." The 源氏(げんじ)物語(ものがたり) (Tale of Genji, c. 1008) by Murasaki Shikibu is considered the world\'s first novel. Japanese students still read excerpts in 古文(こぶん) (classical Japanese) class.',
  '作家(さっか)': '作(さく) (to make) + 家(か) (specialist). Modern literary 作家(さっか) emerged in the Meiji era as a profession. Haruki Murakami is the most internationally known contemporary Japanese 作家(さっか), translated into over 50 languages.',
  '批評(ひひょう)': '批(ひ) (to criticize) + 評(ひょう) (evaluation). Japanese 文芸批評(ぶんげいひひょう) (literary criticism) has its own celebrities. Kobayashi Hideo (1902-1983) is regarded as the father of modern Japanese literary criticism.',
  '比喩(ひゆ)': '比(ひ) (to compare) + 喩(ゆ) (to illustrate). Umbrella term for metaphor, simile, analogy. Japanese literary analysis distinguishes 直喩(ちょくゆ) (direct/simile), 隠喩(いんゆ) (hidden/metaphor), and 擬人法(ぎじんほう) (personification).',
  '著作権(ちょさくけん)': '著作(ちょさく) (authorship) + 権(けん) (right). Japan joined the Berne Convention in 1899. Copyright lasts 70 years after the author\'s death (extended from 50 in 2018, aligning with TPP partners).',
  '文体(ぶんたい)': '文(ぶん) (text) + 体(たい) (body/style). Classical Japanese distinguishes 文語体(ぶんごたい) (literary style) from 口語体(こうごたい) (colloquial style). The Meiji 言文一致(げんぶんいっち) movement unified speech and writing.',

  // u33 Traditional arts
  '歌舞伎(かぶき)': '歌(か) (song) + 舞(ぶ) (dance) + 伎(き) (skill). Originally a 1600s street performance banned for lewdness, now UNESCO Intangible Cultural Heritage. Tokyo\'s 歌舞伎座(かぶきざ) hosts daily performances; English audio guides are available.',
  '能(のう)': 'From 能(のう)力(りょく) (ability). 能(のう) dates to the 14th century, codified by Zeami. Performances are slow, masked, and highly stylized. Five classical schools still pass down 能(のう) techniques via hereditary families.',
  '落語(らくご)': '落(らく) (to fall) + 語(ご) (tale). A single 落語家(らくごか) (comic storyteller) sits on a cushion and performs comic monologues. The punchline is called the 落(お)ち (fall). Dates to Edo period (1603-1868).',
  '書道(しょどう)': '書(しょ) (writing) + 道(どう) (way). Far more than handwriting: a 書道(しょどう) master trains for decades. Japanese elementary schools include 書道(しょどう) in the curriculum. New Year 書(か)き初(ぞ)め is a common household ritual.',
  '生(い)け花(ばな)': '生(い)ける (to arrange) + 花(はな) (flowers). Japanese flower arrangement with philosophical depth. 池坊(いけのぼう) school traces back 550 years. Unlike Western bouquets, 生(い)け花(ばな) celebrates empty space (間, ma) and asymmetry.',
  '茶道(さどう)': '茶(さ) (tea) + 道(どう) (way). Also read ちゃどう. The 16th-century tea master Sen no Rikyu defined 茶道(さどう) aesthetics: 和敬清寂(わけいせいじゃく) (harmony, respect, purity, tranquility). A full ceremony takes 4 hours.',
  '浮世絵(うきよえ)': '浮世(うきよ) (floating world) + 絵(え) (picture). Edo-period woodblock prints. Hokusai\'s 富嶽三十六景(ふがくさんじゅうろっけい) (Thirty-six Views of Mount Fuji, 1830s) inspired Van Gogh, Monet, and Debussy.',
  '人間国宝(にんげんこくほう)': '人間(にんげん) (human) + 国宝(こくほう) (national treasure). Official title for masters of traditional arts and crafts, designated by the Ministry of Culture. Each 人間国宝(にんげんこくほう) receives a 2 million yen annual stipend for training successors.',
};

const FILES = [
  'src/data/japanese-v2/_batch9_u32_L01.js',
  'src/data/japanese-v2/_batch10_u32_L01.js',
  'src/data/japanese-v2/_batch9_u33_L01.js',
  'src/data/japanese-v2/_batch10_u33_L01.js',
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
