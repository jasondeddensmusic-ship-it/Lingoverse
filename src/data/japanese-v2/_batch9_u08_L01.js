// Batch 9 – Unit 08 (A2.1 Places): Buildings & Landmarks
const BATCH9_L1 = {
  id:"jav2_u08l_b9_1", title:"建物(たてもの)", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"建物(たてもの)",
     desc:"Learn vocabulary for buildings and landmarks you encounter in Japanese cities and towns. Essential for navigation and daily life.",
     goals:["Identify common buildings and facilities","Ask where places are located","Describe what you can do at each location"]},

    {type:"teach", trg:"建物(たてもの)", src:"building", pos:"noun", gender:null,
     note:"建(た)てる = to build. 建物(たてもの) = a building.\n古(ふる)い建物(たてもの) = old building.",
     example:"A: あの建物(たてもの)はなんですか？\nB: 図書館(としょかん)です。",
     exampleSrc:"A: What is that building?\nB: It is a library.",
     funFact:"建物(たてもの) literally means 'built thing.' Japanese architecture ranges from ancient 木造(もくぞう) (wooden) temples to ultramodern skyscrapers. Tokyo Skytree (634m) and Osaka's Abeno Harukas are landmark 建物(たてもの). Japanese building codes are among the world's strictest for earthquake resistance."},

    {type:"teach", trg:"役所(やくしょ)", src:"city hall / government office", pos:"noun", gender:null,
     note:"市役所(しやくしょ) = city hall. 区役所(くやくしょ) = ward office.\n住民票(じゅうみんひょう) = resident certificate.",
     example:"A: 役所(やくしょ)で手続(てつづ)きをします。\nB: 何(なん)の手続(てつづ)きですか？",
     exampleSrc:"A: I will do paperwork at the government office.\nB: What kind of paperwork?",
     funFact:"役所(やくしょ) is where Japanese residents handle official paperwork: 住民票(じゅうみんひょう) (resident certificates), 印鑑登録(いんかんとうろく) (seal registration), and various permits. Foreign residents visit 役所(やくしょ) for 在留(ざいりゅう)カード (residence card) procedures. Most 役所(やくしょ) now have multilingual support."},

    {type:"teach", trg:"神社(じんじゃ)", src:"Shinto shrine", pos:"noun", gender:null,
     note:"鳥居(とりい) = shrine gate. お参(まい)り = shrine visit.\nShrines have red gates (鳥居(とりい)).",
     example:"A: 神社(じんじゃ)にお参(まい)りに行(い)きましょう。\nB: おみくじを引(ひ)きたいです。",
     exampleSrc:"A: Let's visit the shrine.\nB: I want to draw a fortune slip.",
     funFact:"神社(じんじゃ) are Shinto places of worship, marked by 鳥居(とりい) gates. Japan has over 80,000 神社(じんじゃ). You purify hands at the 手水舎(てみずや) (water basin), bow twice, clap twice, and bow once. おみくじ (fortune slips) range from 大吉(だいきち) (great luck) to 大凶(だいきょう) (great misfortune)."},

    {type:"teach", trg:"お寺(てら)", src:"Buddhist temple", pos:"noun", gender:null,
     note:"お寺(てら)参(まい)り = temple visit.\nTemples have お坊(ぼう)さん (monks).",
     example:"A: 京都(きょうと)にはたくさんお寺(てら)があります。\nB: 金閣寺(きんかくじ)に行(い)きたいです。",
     exampleSrc:"A: There are many temples in Kyoto.\nB: I want to go to Kinkakuji.",
     funFact:"お寺(てら) are Buddhist temples, distinct from Shinto 神社(じんじゃ). Many Japanese practice both religions: they visit 神社(じんじゃ) for お正月(しょうがつ) and お寺(てら) for お盆(ぼん). Kyoto alone has over 1,600 お寺(てら). The famous 金閣寺(きんかくじ) (Golden Pavilion) is one of Japan's most visited お寺(てら)."},

    {type:"teach", trg:"交番(こうばん)", src:"police box", pos:"noun", gender:null,
     note:"Small neighborhood police station.\n交番(こうばん)に聞(き)く = ask at the police box.",
     example:"A: 道(みち)に迷(まよ)いました。\nB: 交番(こうばん)で聞(き)いてみましょう。",
     exampleSrc:"A: I am lost.\nB: Let's ask at the police box.",
     funFact:"交番(こうばん) is a uniquely Japanese institution: small police stations on street corners where officers handle lost items, give directions, and patrol neighborhoods. There are about 6,000 交番(こうばん) across Japan. The system has been adopted by countries like Singapore and Brazil."},

    {type:"teach", trg:"薬局(やっきょく)", src:"pharmacy", pos:"noun", gender:null,
     note:"薬剤師(やっきょくし) = pharmacist. 薬(くすり) = medicine.\n処方箋(しょほうせん) = prescription.",
     example:"A: 薬局(やっきょく)はどこですか？\nB: 駅(えき)の前(まえ)にあります。",
     exampleSrc:"A: Where is the pharmacy?\nB: It is in front of the station.",
     funFact:"Japanese 薬局(やっきょく) are divided into two types: 調剤薬局(ちょうざいやっきょく) (dispensing pharmacies, need prescriptions) and ドラッグストア (drug stores, over-the-counter). ドラッグストア like Matsumoto Kiyoshi are tourist favorites for cosmetics, snacks, and medicines. Pharmacists always explain medications carefully."},

    {type:"teach", trg:"大使館(たいしかん)", src:"embassy", pos:"noun", gender:null,
     note:"領事館(りょうじかん) = consulate.\nパスポート = passport.",
     example:"A: パスポートをなくしました。\nB: 大使館(たいしかん)に行(い)ってください。",
     exampleSrc:"A: I lost my passport.\nB: Please go to the embassy.",
     funFact:"大使館(たいしかん) are concentrated in Tokyo's 港区(みなとく) (Minato ward) and 千代田区(ちよだく) (Chiyoda ward). Most countries have both a 大使館(たいしかん) in Tokyo and 領事館(りょうじかん) (consulates) in Osaka, Nagoya, or Fukuoka. The American 大使館(たいしかん) near the Imperial Palace is one of the largest."},

    {type:"teach", trg:"喫茶店(きっさてん)", src:"coffee shop / cafe (traditional)", pos:"noun", gender:null,
     note:"Traditional Japanese cafe. Different from カフェ (modern cafe).\n喫茶(きっさ) = drinking tea.",
     example:"A: 喫茶店(きっさてん)でコーヒーを飲(の)みましょう。\nB: いいですね。",
     exampleSrc:"A: Let's have coffee at a coffee shop.\nB: Sounds good.",
     funFact:"喫茶店(きっさてん) are traditional Japanese cafes, distinct from modern チェーンカフェ (chain cafes) like Starbucks. 喫茶店(きっさてん) serve hand-dripped coffee, have retro decor, and offer a quiet atmosphere. Many have been run by the same family for decades. Regulars have their own preferred seat."},

    {type:"mc", q:"What is the difference between 神社(じんじゃ) and お寺(てら)?", opts:["神社(じんじゃ) is Shinto, お寺(てら) is Buddhist","They are the same thing","神社(じんじゃ) is bigger, お寺(てら) is smaller","神社(じんじゃ) is in cities, お寺(てら) is in mountains"], ans:"神社(じんじゃ) is Shinto, お寺(てら) is Buddhist",
     hint:"These two types of religious buildings belong to Japan's two major spiritual traditions."},

    {type:"fb", s:"道(みち)に迷(まよ)いました。{1}で聞(き)いてみましょう。\n(I am lost. Let's ask at the police box.)", a:"交番(こうばん)", opts:["交番(こうばん)","役所(やくしょ)","大使館(たいしかん)","薬局(やっきょく)"], sSrc:"I am lost. Let's ask at the police box.",
     hint:"These small neighborhood police stations are found on street corners throughout Japan."},

    {type:"match", pairs:[
      {trg:"役所(やくしょ)", src:"government office"},
      {trg:"交番(こうばん)", src:"police box"},
      {trg:"薬局(やっきょく)", src:"pharmacy"},
      {trg:"喫茶店(きっさてん)", src:"coffee shop"}
    ]},

    {type:"mc", q:"What should you do first at a 神社(じんじゃ)?", opts:["Purify hands at the water basin","Ring the bell","Throw money","Draw a fortune slip"], ans:"Purify hands at the water basin",
     hint:"The 手水舎(てみずや) (purification b...) is where visitors cleanse before approaching the main hall."}
  ]
};
export default BATCH9_L1;
