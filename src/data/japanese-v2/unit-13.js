// Japanese V2 Unit 13. けいけん (Experience)
import BATCH11_L1 from './_batch11_u13_L01.js';
import BATCH10_L1 from './_batch10_u13_L01.js';
import BATCH9_L1 from './_batch9_u13_L01.js';
import BATCH7_L1 from './_batch7_u13_L01.js';
import BATCH8_L1 from './_batch8_u13_L01.js';
import BATCH6_L1 from './_batch6_u13_L01.js';
import BATCH4_L02 from './_batch4_u13_L02.js';
import BATCH4_L01 from './_batch4_u13_L01.js';
import BATCH2_L1 from './_batch2_u13_L01.js';
// Level: A2.1. JLPT N4 aligned.
import JEXP_13_L1 from './_temp_u13_expand_L01.js';import JEXP_13_L2 from './_temp_u13_expand_L02.js';import JEXP_13_L3 from './_temp_u13_expand_L03.js';
// たことがある, ことがない, travel vocabulary.

const UNIT_13 = {
  n:13, lang:"ja", srcLang:"en", track:"v2",
  title:"けいけん", sub:"Experience",
  icon:"🌍", level:"A2.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: したことがある (Have Done Before) ═══
{id:"jav2_u13l1", title:"したことがある", icon:"✅", xp:15, board:true, steps:[
  {type:"intro", title:"したことがある",
   desc:"Talk about life experiences using the past tense + ことがある pattern. This lets you say 'I have done X before' or 'I have never done X,' which is essential for sharing stories and getting to know people.",
   goals:["Say 'I have done X before' with た-form + ことがある","Say 'I have never done X' with た-form + ことがない","Talk about travel and life experiences"]},

  {type:"teach", trg:"〜たことがある", src:"have done ~ before", pos:"part", gender:null,
   note:"Past tense (た-form) + ことがある = life experience.\nたべたことがある = have eaten before.",
   example:"A: 寿司(すし)を食(た)べたことがありますか？\nB: はい、あります。とてもおいしかったです。\nA: どこで食(た)べましたか？\nB: 東京(とうきょう)の築地(つきじ)の近(ちか)くのお店(みせ)で食(た)べました。",
   exampleSrc:"A: Have you eaten sushi before?\nB: Yes, I have. It was very delicious.\nA: Where did you eat it?\nB: I ate it at a shop near Tsukiji in Tokyo.",
   funFact:"こと means 'thing/matter/experience.' So たべたことがある literally means 'the experience of having eaten exists.' This is different from the simple past (たべました = I ate). たことがある emphasizes the experience itself, not when it happened."},

  {type:"teach", trg:"〜たことがない", src:"have never done ~", pos:"part", gender:null,
   note:"Past tense (た-form) + ことがない = never done.\nThe negative of the experience pattern.",
   example:"A: 富士山(ふじさん)に登(のぼ)ったことがありますか？\nB: いいえ、登(のぼ)ったことがないです。\nA: いつか登(のぼ)ってみたいですか？\nB: はい、夏(なつ)に挑戦(ちょうせん)したいです。",
   exampleSrc:"A: Have you climbed Mt. Fuji before?\nB: No, I have never climbed it.\nA: Would you like to try climbing it someday?\nB: Yes, I want to try it in summer.",
   funFact:"In casual speech, ことがない often becomes ことない. In polite speech, you can say ことがありません or ことがないです. The pattern works with any verb: 行(い)ったことがない (have never gone), 見(み)たことがない (have never seen)."},

  {type:"teach", trg:"旅行(りょこう)", src:"travel / trip", pos:"noun", gender:null,
   note:"A general word for traveling. りょこうする = to travel.\nKanji: 旅行.",
   example:"A: 日本(にほん)に旅行(りょこう)したことがありますか？\nB: はい、二回(にかい)あります。\nA: どこに行(い)きましたか？\nB: 東京(とうきょう)と京都(きょうと)に行(い)きました。",
   exampleSrc:"A: Have you traveled to Japan before?\nB: Yes, twice.\nA: Where did you go?\nB: I went to Tokyo and Kyoto.",
   funFact:"旅行 combines 旅 (journey) and 行 (go). Japan has a deep travel culture. Domestic travel is hugely popular, with onsen (hot spring) trips being a national pastime. The word tabisuru (to journey) has a more romantic, literary feeling than ryokou."},

  {type:"teach", trg:"経験(けいけん)", src:"experience", pos:"noun", gender:null,
   note:"Life experience or work experience. けいけんする = to experience.\nKanji: 経験.",
   example:"A: いい経験(けいけん)でしたか？\nB: はい、素晴(すば)らしい経験(けいけん)でした。\nA: どんな経験(けいけん)でしたか？\nB: 新(あたら)しい文化(ぶんか)をたくさん学(まな)びました。",
   exampleSrc:"A: Was it a good experience?\nB: Yes, it was a wonderful experience.\nA: What kind of experience was it?\nB: I learned a lot about new cultures.",
   funFact:"経験 combines 経 (pass through) and 験 (test/proof). In job interviews, keiken is a key word: shigoto no keiken (work experience). The word also appears in the proverb keiken ni masaru sensei nashi (no teacher surpasses experience)."},

  {type:"mc", q:"すしをたべたことがある means:", opts:["I have eaten sushi before","I ate sushi yesterday","I want to eat sushi","I am eating sushi"], ans:"I have eaten sushi before",
   hint:"The た-form + ことがある pattern describes a past life experience."},

  {type:"teach", trg:"初(はじ)めて", src:"for the first time", pos:"adv", gender:null,
   note:"Used when doing something for the first time.\nKanji: 初めて.",
   example:"A: 日本(にほん)は初(はじ)めてですか？\nB: はい、初(はじ)めてです。\nA: 何(なに)が一番(いちばん)楽(たの)しみですか？\nB: お寺(てら)と温泉(おんせん)に行(い)きたいです。",
   exampleSrc:"A: Is this your first time in Japan?\nB: Yes, it is my first time.\nA: What are you most looking forward to?\nB: I want to visit temples and hot springs.",
   funFact:"はじめて is one of the most versatile words in Japanese. はじめまして (nice to meet you) comes from the same root. はじめてのけいけん (first experience) is a common phrase. The kanji 初 shows a knife cutting cloth, representing a 'first cut' or beginning."},

  {type:"teach", trg:"登(のぼ)る", src:"to climb", pos:"verb", gender:null,
   note:"Group 1 verb. Used for climbing mountains, stairs, slopes.\nKanji: 登る.",
   example:"A: 山(やま)に登(のぼ)ったことがありますか？\nB: はい、富士山(ふじさん)に登(のぼ)りました。\nA: 大変(たいへん)でしたか？\nB: はい、でも頂上(ちょうじょう)からの景色(けしき)は最高(さいこう)でした。",
   exampleSrc:"A: Have you climbed a mountain before?\nB: Yes, I climbed Mt. Fuji.\nA: Was it tough?\nB: Yes, but the view from the top was the best.",
   funFact:"登る uses the kanji 登, which shows feet climbing upward. Fuji-san ni noboru (to climb Mt. Fuji) is on many Japanese people's bucket lists. The official climbing season is July to September. Over 300,000 people climb it every year."},

  {type:"fb", s:"富士山(ふじさん)に登(のぼ)った{1}がありますか？\n(Have you climbed Mt. Fuji before?)", a:"こと", opts:["こと","もの","ひと","とき"], sSrc:"Have you climbed Mt. Fuji before?",
   hint:"The word meaning 'thing/matter' that turns verbs into noun phrases."},

  {type:"teach", trg:"海(うみ)", src:"sea / ocean", pos:"noun", gender:null,
   note:"Japan is an island nation, so うみ is a fundamental word.\nKanji: 海.",
   example:"A: きれいな海(うみ)を見(み)たことがありますか？\nB: はい、沖縄(おきなわ)の海(うみ)は素晴(すば)らしかったです。\nA: 泳(およ)ぎましたか？\nB: はい、シュノーケリングもしました。",
   exampleSrc:"A: Have you seen a beautiful ocean before?\nB: Yes, the sea in Okinawa was wonderful.\nA: Did you swim?\nB: Yes, I also went snorkeling.",
   funFact:"海 shows water (氵) and mother (母), suggesting the sea as the 'mother of waters.' Japan is surrounded by ocean on all sides, making umi deeply tied to identity. Okinawa, known for crystal-clear seas, is Japan's most popular beach destination."},

  {type:"teach", trg:"国(くに)", src:"country / homeland", pos:"noun", gender:null,
   note:"Means both 'country' and 'hometown/homeland.' Kanji: 国.\nOften used to ask about someone's origin.",
   example:"A: お国(くに)はどちらですか？\nB: オランダです。\nA: オランダのどちらですか？\nB: アムステルダムの近(ちか)くです。",
   exampleSrc:"A: Where are you from? (polite)\nB: I am from the Netherlands.\nA: Where in the Netherlands?\nB: Near Amsterdam.",
   funFact:"The polite form おくに is a classic question for foreigners in Japan. 国 shows a jade (玉) inside borders (囗), representing a precious territory. Kuni can mean your country or your rural hometown, depending on context."},

  {type:"mc", q:"はじめて means:", opts:["the last time","for the first time","a long time ago","many times"], ans:"for the first time",
   hint:"This word describes doing something you have never done before."},

  {type:"match", pairs:[{trg:"旅行(りょこう)",src:"travel"},{trg:"経験(けいけん)",src:"experience"},{trg:"初(はじ)めて",src:"first time"},{trg:"海(うみ)",src:"sea"}]},

  {type:"fb", s:"日本(にほん)は{1}ですか？\n(Is this your first time in Japan?)", a:"はじめて", opts:["はじめて","いちど","むかし","はじめ"], sSrc:"Is this your first time in Japan?",
   hint:"The adverb meaning 'for the first time.'"},

  {type:"match", pairs:[{trg:"登(のぼ)る",src:"to climb"},{trg:"国(くに)",src:"country"},{trg:"たことがある",src:"have done before"},{trg:"たことがない",src:"have never done"}]},

  {type:"mc", q:"のぼったことがない means:", opts:["I climbed before","I want to climb","I have never climbed","I am climbing"], ans:"I have never climbed",
   hint:"た-form + ことがない is the negative experience pattern: n... done."},
]},

// ═══ L2: りょこうのはなし (Travel Stories) ═══
{id:"jav2_u13l2", title:"旅行(りょこう)の話(はなし)", icon:"✈️", xp:15, board:true, steps:[
  {type:"intro", title:"旅行(りょこう)の話(はなし)",
   desc:"Expand your experience vocabulary with words for travel activities and destinations. Practice combining the experience pattern with new verbs to tell richer travel stories.",
   goals:["Use experience patterns with travel vocabulary","Learn destination and activity words","Describe past trips and future travel wishes"]},

  {type:"teach", trg:"お寺(てら)", src:"Buddhist temple", pos:"noun", gender:null,
   note:"With honorific お. Also just てら. Temples are Buddhist; shrines (じんじゃ) are Shinto.\nKanji: お寺.",
   example:"A: 京都(きょうと)でお寺(てら)を見(み)たことがありますか？\nB: はい、金閣寺(きんかくじ)に行(い)きました。\nA: どうでしたか？\nB: とてもきれいで、感動(かんどう)しました。",
   exampleSrc:"A: Have you seen temples in Kyoto before?\nB: Yes, I went to Kinkakuji.\nA: How was it?\nB: It was very beautiful, and I was moved.",
   funFact:"Japan has over 77,000 Buddhist temples. The distinction between tera (temple, Buddhist) and jinja (shrine, Shinto) confuses many visitors. A quick rule: torii gates mean Shinto shrine, large wooden gate (sanmon) means Buddhist temple."},

  {type:"teach", trg:"神社(じんじゃ)", src:"Shinto shrine", pos:"noun", gender:null,
   note:"Shinto places of worship. Marked by torii gates. Different from てら (Buddhist temple).\nKanji: 神社.",
   example:"A: 神社(じんじゃ)に行(い)ったことがありますか？\nB: はい、明治神宮(めいじじんぐう)に行(い)きました。\nA: お参(まい)りしましたか？\nB: はい、おみくじも引(ひ)きました。",
   exampleSrc:"A: Have you been to a shrine before?\nB: Yes, I went to Meiji Shrine.\nA: Did you pray there?\nB: Yes, I also drew a fortune slip.",
   funFact:"神社 combines 神 (god/spirit) and 社 (company/shrine). Shinto shrines have no founder or scripture. They honor kami (spirits/gods) in nature. The famous torii gate marks the border between the everyday world and sacred space."},

  {type:"teach", trg:"温泉(おんせん)", src:"hot spring / hot spring bath", pos:"noun", gender:null,
   note:"Natural hot spring bathing, a beloved Japanese tradition.\nKanji: 温泉.",
   example:"A: 温泉(おんせん)に入(はい)ったことがありますか？\nB: いいえ、まだないです。行(い)きたいです。\nA: 箱根(はこね)がおすすめですよ。\nB: ありがとうございます。今度(こんど)行(い)ってみます。",
   exampleSrc:"A: Have you bathed in a hot spring before?\nB: No, not yet. I want to go.\nA: I recommend Hakone.\nB: Thank you. I will try going next time.",
   funFact:"温泉 combines 温 (warm) and 泉 (spring). Japan has over 27,000 hot spring sources due to its volcanic geography. Onsen culture has strict etiquette: wash thoroughly before entering, no swimsuits, tattoos may be restricted. It is considered deeply relaxing and therapeutic."},

  {type:"teach", trg:"お祭(まつ)り", src:"festival", pos:"noun", gender:null,
   note:"With honorific お. Festivals are central to Japanese community life.\nKanji: お祭り.",
   example:"A: 日本(にほん)のお祭(まつ)りに行(い)ったことがありますか？\nB: はい、花火大会(はなびたいかい)に行(い)きました。\nA: どこの花火大会(はなびたいかい)ですか？\nB: 隅田川(すみだがわ)の花火大会(はなびたいかい)です。すごかったですよ。",
   exampleSrc:"A: Have you been to a Japanese festival before?\nB: Yes, I went to a fireworks festival.\nA: Which fireworks festival?\nB: The Sumida River fireworks festival. It was amazing.",
   funFact:"Japan holds thousands of festivals yearly. Each neighborhood has its own matsuri, often with portable shrines (mikoshi) carried through streets. Summer festivals feature yukata (light kimono), festival food stalls (yatai), and spectacular fireworks (hanabi)."},

  {type:"mc", q:"お寺(てら) and 神社(じんじゃ) are:", opts:["temple (Buddhist) and shrine (Shinto)","both Shinto","both Buddhist","restaurant and hotel"], ans:"temple (Buddhist) and shrine (Shinto)",
   hint:"One is for B... worship, the other for S... worship."},

  {type:"teach", trg:"乗(の)り物(もの)", src:"vehicle / transportation", pos:"noun", gender:null,
   note:"General word for things you ride. のる (to ride) + もの (thing).\nKanji: 乗り物.",
   example:"A: どんな乗(の)り物(もの)が好(す)きですか？\nB: 電車(でんしゃ)が好(す)きです。\nA: どうしてですか？\nB: 景色(けしき)を見(み)ながら旅行(りょこう)できるからです。",
   exampleSrc:"A: What kind of transportation do you like?\nB: I like trains.\nA: Why is that?\nB: Because I can travel while looking at the scenery.",
   funFact:"のりもの is a compound of のる (to ride) and もの (thing). Japan's public transport is legendary for punctuality. The Shinkansen (bullet train) average delay is under one minute per year. Tokyo's train network moves over 40 million passengers daily."},

  {type:"teach", trg:"電車(でんしゃ)", src:"train / electric train", pos:"noun", gender:null,
   note:"The most common transport in Japanese cities. Kanji: 電車.\n電 (electric) + 車 (vehicle).",
   example:"A: 毎日(まいにち)電車(でんしゃ)に乗(の)ります。\nB: 何時(なんじ)の電車(でんしゃ)ですか？\nA: 七時半(しちじはん)のです。\nB: 朝(あさ)は混(こ)んでいますね。",
   exampleSrc:"A: I ride the train every day.\nB: What time train?\nA: The 7:30 one.\nB: It is crowded in the morning, isn't it.",
   funFact:"電車 literally means 'electric car.' Japan's rail network is the envy of the world. Tokyo alone has 882 stations. Rush hour trains can reach 200% capacity. Professional pushers (oshiya) used to help squeeze passengers in, though this is now rare."},

  {type:"teach", trg:"飛行機(ひこうき)", src:"airplane", pos:"noun", gender:null,
   note:"Kanji: 飛行機. 飛 (fly) + 行 (go) + 機 (machine).\nA flying-going-machine.",
   example:"A: 飛行機(ひこうき)に乗(の)ったことがありますか？\nB: はい、何度(なんど)もあります。\nA: 一番(いちばん)長(なが)いフライトはどこでしたか？\nB: ヨーロッパまで十二時間(じゅうにじかん)でした。",
   exampleSrc:"A: Have you ridden an airplane before?\nB: Yes, many times.\nA: What was the longest flight?\nB: It was twelve hours to Europe.",
   funFact:"飛行機 is a beautifully literal compound: 'fly-go-machine.' Japan's two major airlines are JAL and ANA. Domestic flights are common for reaching distant islands like Okinawa or Hokkaido. Narita and Haneda are Tokyo's two international airports."},

  {type:"fb", s:"温泉(おんせん)に入(はい)った{1}がありますか？\n(Have you bathed in a hot spring before?)", a:"こと", opts:["こと","もの","ひと","ところ"], sSrc:"Have you bathed in a hot spring before?",
   hint:"The nominalizer that turns a verb phrase into 'the experience of...'"},

  {type:"teach", trg:"写真(しゃしん)", src:"photograph / photo", pos:"noun", gender:null,
   note:"Used with とる (to take). しゃしんをとる = to take a photo.\nKanji: 写真.",
   example:"A: たくさん写真(しゃしん)を撮(と)りましたか？\nB: はい、百枚(ひゃくまい)ぐらい撮(と)りました！\nA: 一番(いちばん)いい写真(しゃしん)は何(なん)ですか？\nB: 夕日(ゆうひ)の写真(しゃしん)が一番(いちばん)きれいです。",
   exampleSrc:"A: Did you take many photos?\nB: Yes, I took about a hundred!\nA: What is the best photo?\nB: The sunset photo is the most beautiful.",
   funFact:"写真 combines 写 (copy/reflect) and 真 (truth), meaning 'a copy of truth.' Taking photos is deeply embedded in Japanese travel culture. The word purikura (photo sticker booths) shows how Japan turned photography into social entertainment."},

  {type:"teach", trg:"何度(なんど)も", src:"many times", pos:"adv", gender:null,
   note:"なん (what/how many) + ど (times) + も (emphasis).\nStronger than たくさん for frequency.",
   example:"A: 日本(にほん)に行(い)ったことがありますか？\nB: はい、何度(なんど)もあります。\nA: 何回(なんかい)ぐらいですか？\nB: 五回(ごかい)ぐらいです。毎回(まいかい)楽(たの)しいです。",
   exampleSrc:"A: Have you been to Japan before?\nB: Yes, many times.\nA: About how many times?\nB: About five times. It is fun every time.",
   funFact:"なんども is built from the counter ど (times): 一度(いちど) (once), 二度(にど) (twice), 三度(さんど) (three times), 何度(なんど) (how many times). Adding も creates emphasis: 'so many times that I have lost count.' It conveys genuine enthusiasm about repeated experience."},

  {type:"mc", q:"飛行機(ひこうき) means:", opts:["bus","airplane","bicycle","boat"], ans:"airplane",
   hint:"A compound meaning 'fly-go-machine' with the kanji for flight."},

  {type:"match", pairs:[{trg:"お寺(てら)",src:"temple"},{trg:"神社(じんじゃ)",src:"shrine"},{trg:"温泉(おんせん)",src:"hot spring"},{trg:"お祭(まつ)り",src:"festival"}]},

  {type:"match", pairs:[{trg:"電車(でんしゃ)",src:"train"},{trg:"飛行機(ひこうき)",src:"airplane"},{trg:"写真(しゃしん)",src:"photo"},{trg:"何度(なんど)も",src:"many times"}]},

  {type:"fb", s:"日本(にほん)に{1}も行(い)きました。\n(I have been to Japan many times.)", a:"何度(なんど)", opts:["何度(なんど)","一度(いちど)","初(はじ)めて","まだ"], sSrc:"I have been to Japan many times.",
   hint:"The counter-based word meaning 'how many times' that with も means 'many times.'"},

  {type:"mc", q:"温泉(おんせん)に入(はい)ったことがない means:", opts:["I bathed in a hot spring","I want a hot spring","I have never bathed in a hot spring","I like hot springs"], ans:"I have never bathed in a hot spring",
   hint:"た-form + ことがない = have n... done the action before."},
{type:"match",pairs:[{trg:"乗(の)り物(もの)",src:"vehicle / transportation"}]}]},

,BATCH2_L1
,BATCH4_L01
,BATCH4_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_13;
