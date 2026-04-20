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

// ═══ N3中級語彙: Core N3 Vocabulary for Experience & Growth ═══
,{id:"jpv2_u13l_n3", title:"N3中級語彙(ちゅうきゅうごい)", icon:"📚", xp:15, board:true, steps:[
{type:"intro", title:"JLPT N3 Core Vocabulary", desc:"Learn 7 essential JLPT N3 Japanese words for daily life and reflection. Essential for N3 exam and B1-level fluency.", goals:["Master 7 core N3 words","Use formal expressions","Describe abstract concepts"]},

{type:"teach", trg:"喜(よろこ)ぶ", src:"to rejoice / to be pleased", pos:"verb", gender:null,
 note:"Group 1 verb. て-form: 喜(よろこ)んで.\n喜(よろこ)んで = gladly / with pleasure.",
 example:"A: 合格(ごうかく)しました！\nB: それは本当(ほんとう)に喜(よろこ)べることですね。\nA: 家族(かぞく)も喜(よろこ)んでいます。\nB: おめでとうございます。",
 exampleSrc:"A: I passed!\nB: That is truly something to rejoice about.\nA: My family is also pleased.\nB: Congratulations.",
 funFact:"喜(よろこ)ぶ (喜ぶ) appears in the classic phrase 喜(よろこ)んで！ (gladly!), used when accepting a request with enthusiasm. The kanji 喜 shows a drum topped with a mouth, evoking joyful music."},

{type:"teach", trg:"記録(きろく)", src:"record / documentation", pos:"noun", gender:null,
 note:"記録(きろく)する = to record, to document.\n世界記録(せかいきろく) = world record.",
 example:"A: 旅行(りょこう)の記録(きろく)をつけていますか？\nB: はい、日記(にっき)を書(か)いています。\nA: 写真(しゃしん)も撮(と)りましたか？\nB: はい、たくさん記録(きろく)しました。",
 exampleSrc:"A: Do you keep a record of your travels?\nB: Yes, I write a diary.\nA: Did you also take photos?\nB: Yes, I documented a lot.",
 funFact:"記録(きろく) uses 記 (write/record) and 録 (engrave). Breaking a world record is 世界記録(せかいきろく)を塗(ぬ)り替(か)える, literally 'to repaint the world record.' Japan is home to countless sports and cultural world records."},

{type:"teach", trg:"現在(げんざい)", src:"present (time) / currently", pos:"noun", gender:null,
 note:"Formal word for 'now' or 'at present.' More formal than 今(いま).\nKanji: 現在.",
 example:"A: 現在(げんざい)どこに住(す)んでいますか？\nB: 現在(げんざい)は東京(とうきょう)に住(す)んでいます。\nA: 前(まえ)はどこに住(す)んでいましたか？\nB: 学校(がっこう)の近(ちか)くに住(す)んでいました。",
 exampleSrc:"A: Where do you currently live?\nB: Currently I live in Tokyo.\nA: Where did you live before?\nB: I lived near the school.",
 funFact:"現在(げんざい) is standard in formal writing, business, and news. 現在(げんざい) vs 今(いま): both mean 'now,' but 現在(げんざい) sounds official. You will see 現在(げんざい)のところ (as of now) and 現在形(げんざいけい) (present tense) in grammar textbooks."},

{type:"teach", trg:"困難(こんなん)", src:"difficulty / hardship", pos:"noun", gender:null,
 note:"Can be used as a noun or na-adjective. 困難(こんなん)な問題(もんだい) = a difficult problem.\nFormal register.",
 example:"A: 困難(こんなん)な経験(けいけん)でしたか？\nB: はい、でも多(おお)くを学(まな)びました。\nA: どんな困難(こんなん)がありましたか？\nB: 言葉(ことば)の壁(かべ)が一番(いちばん)大(おお)きかったです。",
 exampleSrc:"A: Was it a difficult experience?\nB: Yes, but I learned a lot.\nA: What kind of difficulties were there?\nB: The language barrier was the biggest.",
 funFact:"困難(こんなん) uses 困 (be in trouble, a tree stuck in a box) and 難 (difficult, a bird in fire). Both kanji convey being trapped in hardship. Proverb: 困難(こんなん)は人(ひと)を強(つよ)くする (difficulties make a person stronger)."},

{type:"teach", trg:"一生懸命(いっしょうけんめい)", src:"with all one's might / earnestly", pos:"adv", gender:null,
 note:"One of the most useful N3 expressions. Often shortened to 一生懸命(いっしょうけんめい)に (adverb form).\nLiterally: 'risking one's life on this one place.'",
 example:"A: 日本語(にほんご)の勉強(べんきょう)はどうですか？\nB: 一生懸命(いっしょうけんめい)やっています。\nA: 一生懸命(いっしょうけんめい)やれば、できますよ。\nB: ありがとうございます。頑張(がんば)ります。",
 exampleSrc:"A: How is your Japanese study going?\nB: I am doing it with all my might.\nA: If you do it with all your might, you can do it.\nB: Thank you. I will keep at it.",
 funFact:"一生懸命(いっしょうけんめい) (一所懸命) originally meant 'to risk one's life defending a single piece of land' in samurai culture. Over centuries it became the everyday word for giving 100% effort. It perfectly captures the Japanese cultural value of 真剣(しんけん)さ (seriousness/sincerity)."},

{type:"teach", trg:"建(た)てる", src:"to build / to construct", pos:"verb", gender:null,
 note:"Ichidan (Group 2) verb. て-form: 建(た)てて.\n家(いえ)を建(た)てる = to build a house.",
 example:"A: 夢(ゆめ)はありますか？\nB: 自分(じぶん)の家(いえ)を建(た)てることです。\nA: どんな家(いえ)を建(た)てたいですか？\nB: 大(おお)きな庭(にわ)のある家(いえ)を建(た)てたいです。",
 exampleSrc:"A: Do you have a dream?\nB: My dream is to build my own house.\nA: What kind of house do you want to build?\nB: I want to build a house with a big garden.",
 funFact:"建(た)てる (建てる) uses 建, which combines 廴 (movement) and 聿 (writing brush held upright), suggesting raising something up. 建(た)てる is for structures; 作(つく)る is for objects or food. You build (建てる) a building, you make (作る) bread."},

{type:"teach", trg:"理解(りかい)", src:"understanding / comprehension", pos:"noun", gender:null,
 note:"理解(りかい)する = to understand. 理解力(りかいりょく) = comprehension ability.\nFormal, used in academic and business contexts.",
 example:"A: 日本語(にほんご)の理解(りかい)が深(ふか)まりました。\nB: どうやって勉強(べんきょう)しましたか？\nA: 一生懸命(いっしょうけんめい)やった経験(けいけん)があります。\nB: 素晴(すば)らしい努力(どりょく)ですね。",
 exampleSrc:"A: My understanding of Japanese has deepened.\nB: How did you study?\nA: I have the experience of doing it with all my might.\nB: What a wonderful effort.",
 funFact:"理解(りかい) uses 理 (reason/logic) and 解 (untie/solve). To 理解(りかい)する is to untie the logic of something. Its opposite is 誤解(ごかい) (misunderstanding, lit. 'wrong untying'). 誤解(ごかい)されやすい = easily misunderstood."},

{type:"tip", title:"N3 Vocabulary in Context", text:"These 7 words appear frequently on the JLPT N3 exam and in everyday B1-level Japanese:\n- 喜(よろこ)ぶ / 記録(きろく) / 現在(げんざい) are neutral-to-formal.\n- 困難(こんなん) is used in formal speech and writing.\n- 一生懸命(いっしょうけんめい) is universal, spoken and written.\n- 建(た)てる / 理解(りかい) appear in practical and academic contexts.", deepDive:"One key pattern: many N3 nouns become verbs by adding する. 記録(きろく)する (to record), 理解(りかい)する (to understand), 努力(どりょく)する (to make an effort). Mastering this する-verb pattern is essential for JLPT N3 and B1 fluency."},

{type:"mc", q:"喜(よろこ)ぶ means:", opts:["to apologize","to be troubled","to rejoice / be pleased","to refuse"], ans:"to rejoice / be pleased",
 hint:"This is a positive emotion verb. Think of celebration and good news."},

{type:"mc", q:"一生懸命(いっしょうけんめい) means:", opts:["a little bit","sometimes","by oneself","with all one's might"], ans:"with all one's might",
 hint:"This expression describes giving maximum effort, originally from samurai culture."},

{type:"fb", s:"旅行(りょこう)の{1}をつけています。\n(I keep a record of my travels.)", a:"記録(きろく)", opts:["記録(きろく)","現在(げんざい)","理解(りかい)","経験(けいけん)"], sSrc:"I keep a record of my travels.",
 hint:"The word meaning 'record / documentation,' also used for world records."},

{type:"fb", s:"自分(じぶん)の家(いえ)を{1}のが夢(ゆめ)です。\n(My dream is to build my own house.)", a:"建(た)てる", opts:["建(た)てる","登(のぼ)る","撮(と)る","乗(の)る"], sSrc:"My dream is to build my own house.",
 hint:"The ichidan verb meaning 'to construct / to build' structures."},

{type:"match", pairs:[{trg:"喜(よろこ)ぶ",src:"to rejoice"},{trg:"記録(きろく)",src:"record"},{trg:"現在(げんざい)",src:"currently"},{trg:"困難(こんなん)",src:"difficulty"}]},

{type:"match", pairs:[{trg:"一生懸命(いっしょうけんめい)",src:"with all one's might"},{trg:"建(た)てる",src:"to build"},{trg:"理解(りかい)",src:"understanding"},{trg:"経験(けいけん)",src:"experience"}]},

]}

  ,{id:"jav2_u13l_n4v", title:"N4動詞(どうし)と名詞(めいし)", icon:"🎬", xp:15, board:true, steps:[
  {type:"intro", title:"N4 Verbs and Nouns", desc:"Seven JLPT N4 words that come up constantly in everyday Japanese: three verbs covering actions you do for others, and four nouns for places and concepts central to daily life.", goals:["Use 伝える, 置く, 起こす, 始まる correctly","Name key everyday nouns: 映画館, 場所, 交通","Form natural sentences at A2-B1 level"]},

  {type:"teach", trg:"伝(つた)える", src:"to convey / to tell / to pass on", pos:"verb", gender:null,
   note:"Ichidan verb. Takes に for the recipient: 先生(せんせい)に伝(つた)える.\nConveys a message from one person to another.",
   example:"A: 田中(たなか)さんに会議(かいぎ)の時間(じかん)を伝(つた)えてください。\nB: わかりました。すぐに伝(つた)えます。",
   exampleSrc:"A: Please tell Mr. Tanaka the meeting time.\nB: Understood. I will pass it on right away.",
   funFact:"伝える uses 伝 (transmit/tradition), also in 伝統(でんとう) (tradition) and 伝言(でんごん) (verbal message). The idea is that a message travels down a chain, like oral tradition passing through generations."},

  {type:"teach", trg:"置(お)く", src:"to place / to put / to leave (in a spot)", pos:"verb", gender:null,
   note:"Godan verb. Indicates deliberate placement: どこに置(お)く (where to put it).\nAlso appears in compound verb ておく (to do in advance).",
   example:"A: 鍵(かぎ)をどこに置(お)きましたか？\nB: テーブルの上(うえ)に置(お)きました。",
   exampleSrc:"A: Where did you put the key?\nB: I placed it on top of the table.",
   funFact:"置く is the root of the grammatical pattern ておく (to do something in advance or for later): 準備(じゅんび)しておく = to prepare in advance. This pattern is extremely common at N4 and appears in business Japanese constantly."},

  {type:"teach", trg:"起(お)こす", src:"to wake (someone) up / to cause / to stir up", pos:"verb", gender:null,
   note:"Godan verb. Compare: 起(お)きる (I wake up, intransitive) vs. 起(お)こす (I wake you up, transitive).\nWho wakes up: the person marked with を.",
   example:"A: 明日(あした)の朝(あさ)、起(お)こしてもらえますか？\nB: いいですよ。何時(なんじ)に起(お)こしますか？",
   exampleSrc:"A: Can you wake me up tomorrow morning?\nB: Sure. What time shall I wake you?",
   funFact:"起こす and 起きる share the root 起 (rise/get up). Japanese often pairs intransitive and transitive verb forms this way: 始(はじ)まる (it begins) / 始(はじ)める (to begin it); 終(お)わる (it ends) / 終(お)える (to end it). Spotting these pairs accelerates vocabulary growth."},

  {type:"teach", trg:"始(はじ)まる", src:"to begin / to start (intransitive)", pos:"verb", gender:null,
   note:"Godan verb. Subject is the thing that starts (no agent needed).\nCompare: 始(はじ)める (transitive, someone starts something) — taught in Unit 11.",
   example:"A: 映画(えいが)は何時(なんじ)に始(はじ)まりますか？\nB: 三時(さんじ)に始(はじ)まります。",
   exampleSrc:"A: What time does the movie begin?\nB: It starts at three o'clock.",
   funFact:"始まる marks the event as the subject: 授業(じゅぎょう)が始(はじ)まる (class begins). When YOU start something, use 始める: 授業(じゅぎょう)を始(はじ)める (to start class). Getting this pair right is a key N4 accuracy marker."},

  {type:"tip", title:"Transitive vs. Intransitive Verb Pairs",
   text:"Japanese pairs many verbs: one intransitive (thing acts on its own) and one transitive (person causes it).\n\nIntransitive (subject changes):\n起(お)きる — I wake up\n始(はじ)まる — it begins\n\nTransitive (person causes change):\n起(お)こす — (I) wake (you) up\n始(はじ)める — (I) begin (something)\n\nKey test: can you ask 'who caused it?' If yes, use the transitive form.",
   deepDive:{title:"Spotting the pairs",
    text:"Look at the verb endings. A rough pattern:\n-る (intransitive) pairs with -す (transitive):\n起(お)きる / 起(お)こす, 出(で)る / 出(だ)す\n\n-まる (intransitive) pairs with -める (transitive):\n始(はじ)まる / 始(はじ)める, 決(き)まる / 決(き)める\n\nThis is not a rule without exceptions, but knowing it helps you guess correctly ~70% of the time at N4 level."}},

  {type:"teach", trg:"映画館(えいがかん)", src:"movie theater", pos:"noun", gender:null,
   note:"映画(えいが) (movie) + 館(かん) (building/hall).\n館 is a common suffix for public buildings.",
   example:"A: 映画館(えいがかん)でどんな映画(えいが)を見(み)ましたか？\nB: アクション映画(えいが)を見(み)ました。面白(おもしろ)かったです。",
   exampleSrc:"A: What movie did you watch at the movie theater?\nB: I watched an action movie. It was interesting.",
   funFact:"The kanji 館(かん) (building) appears in many Japanese public buildings: 美術館(びじゅつかん) (art museum), 博物館(はくぶつかん) (natural history museum), 体育館(たいいくかん) (gymnasium), 図書館(としょかん) (library). Recognizing 館 immediately tells you it is a public building or hall."},

  {type:"teach", trg:"場所(ばしょ)", src:"place / location / spot", pos:"noun", gender:null,
   note:"Very common noun. Used for both physical and abstract locations.\nどんな場所(ばしょ) = what kind of place.",
   example:"A: 待(ま)ち合(あ)わせの場所(ばしょ)はどこですか？\nB: 駅(えき)の前(まえ)の場所(ばしょ)はどうですか？",
   exampleSrc:"A: Where is the meeting place?\nB: How about the spot in front of the station?",
   funFact:"場所 uses 場 (location/situation) and 所 (place). You will see 場 in 場合(ばあい) (situation/case), 工場(こうじょう) (factory), and 広場(ひろば) (plaza). 所 appears in 台所(だいどころ) (kitchen) and 所長(しょちょう) (director of a place). Both kanji carry the 'place' meaning independently."},

  {type:"teach", trg:"交通(こうつう)", src:"traffic / transportation / transit", pos:"noun", gender:null,
   note:"交通機関(こうつうきかん) = transportation system.\n交通手段(こうつうしゅだん) = means of transport.",
   example:"A: この町(まち)の交通(こうつう)はどうですか？\nB: 電車(でんしゃ)がよく走(はし)っているので、とても便利(べんり)です。",
   exampleSrc:"A: How is the transportation in this town?\nB: Trains run frequently, so it is very convenient.",
   funFact:"Japan has some of the world's most reliable 交通(こうつう). The average shinkansen delay is under one minute per year. 交通渋滞(こうつうじゅうたい) (traffic jam) is a frequent topic in cities; the solution is usually 電車(でんしゃ) (train), which is why most Tokyo residents rarely drive."},

  {type:"mc", q:"田中(たなか)さんに会議(かいぎ)の時間(じかん)を___てください。 (Please pass on the meeting time to Mr. Tanaka.)", opts:["伝(つた)え","置(お)き","起(お)こし","始(はじ)め"], ans:"伝(つた)え",
   hint:"The verb meaning 'to convey a message to someone,' used with the に recipient particle."},

  {type:"mc", q:"Which verb means 'to put something down in a spot' (godan, transitive)?", opts:["置(お)く","起(お)きる","伝(つた)える","始(はじ)まる"], ans:"置(お)く",
   hint:"Think of setting an object deliberately somewhere. Godan. Pairs with おいてあります (it has been placed there)."},

  {type:"fb", s:"朝(あさ)6時(じ)に起(お)こして{1}か？\n(Could you wake me up at 6 in the morning?)", a:"もらえます", opts:["もらえます","います","きます","あります"], hint:"The polite request form: 'could you do X for me' uses てもらえますか with the te-form of the main verb.", sSrc:"Could you wake me up at 6 in the morning?"},

  {type:"fb", s:"映画(えいが)は3時(じ)に{1}まります。\n(The movie starts at 3 o'clock.)", a:"始(はじ)", opts:["始(はじ)","置(お)","伝(つた)","起(お)こ"], hint:"The intransitive verb meaning 'it begins on its own.' The subject is the movie, not a person.", sSrc:"The movie starts at 3 o'clock."},

  {type:"mc", q:"映画館(えいがかん) means:", opts:["movie theater","train station","library","art museum"], ans:"movie theater",
   hint:"映画 = movie. The second part is a kanji meaning 'public building or hall.' Where do you watch movies?"},

  {type:"fb", s:"待(ま)ち合(あ)わせの{1}はどこにしますか？\n(Where shall we set the meeting place?)", a:"場所(ばしょ)", opts:["場所(ばしょ)","交通(こうつう)","時間(じかん)","映画館(えいがかん)"], hint:"The noun meaning 'place/spot/location,' used for arranging where to meet.", sSrc:"Where shall we set the meeting place?"},

  {type:"mc", q:"この地域(ちいき)の交通(こうつう)はとても便利(べんり)です。 What does 交通 mean here?", opts:["transportation","communication","weather","population"], ans:"transportation",
   hint:"交通 refers to the movement of people and vehicles — trains, buses, roads. Not to be confused with 通信(つうしん) (communication)."},

  {type:"fb", s:"鍵(かぎ)をテーブルの上(うえ)に{1}いてください。\n(Please place the key on top of the table.)", a:"置(お)", opts:["置(お)","伝(つた)","起(お)こ","始(はじ)"], hint:"The godan verb meaning 'to place/put something somewhere.' The object is the key.", sSrc:"Please place the key on top of the table."},

  {type:"match", pairs:[{trg:"伝(つた)える",src:"to convey / tell"},{trg:"置(お)く",src:"to place / put"},{trg:"起(お)こす",src:"to wake (someone) up"},{trg:"始(はじ)まる",src:"to begin (intransitive)"}]},

  {type:"match", pairs:[{trg:"映画館(えいがかん)",src:"movie theater"},{trg:"場所(ばしょ)",src:"place / location"},{trg:"交通(こうつう)",src:"traffic / transportation"}]},
]}

]};
export default UNIT_13;
