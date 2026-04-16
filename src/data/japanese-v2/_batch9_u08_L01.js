// Batch 9 – Unit 08 (A2.1 Places): Buildings & Landmarks
const BATCH9_L1 = {
  id:"jav2_u08l_b9_1", title:"たてもの", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"たてもの",
     desc:"Learn vocabulary for buildings and landmarks you encounter in Japanese cities and towns. Essential for navigation and daily life.",
     goals:["Identify common buildings and facilities","Ask where places are located","Describe what you can do at each location"]},

    {type:"teach", trg:"たてもの", src:"building", pos:"noun", gender:null,
     note:"たてる = to build. たてもの = a building.\nふるいたてもの = old building.",
     example:"A: あのたてものはなんですか？\nB: としょかんです。",
     exampleSrc:"A: What is that building?\nB: It is a library.",
     funFact:"たてもの (建物) literally means 'built thing.' Japanese architecture ranges from ancient もくぞう (wooden) temples to ultramodern skyscrapers. Tokyo Skytree (634m) and Osaka's Abeno Harukas are landmark たてもの. Japanese building codes are among the world's strictest for earthquake resistance."},

    {type:"teach", trg:"やくしょ", src:"city hall / government office", pos:"noun", gender:null,
     note:"しやくしょ = city hall. くやくしょ = ward office.\nじゅうみんひょう = resident certificate.",
     example:"A: やくしょでてつづきをします。\nB: なんのてつづきですか？",
     exampleSrc:"A: I will do paperwork at the government office.\nB: What kind of paperwork?",
     funFact:"やくしょ (役所) is where Japanese residents handle official paperwork: じゅうみんひょう (resident certificates), いんかんとうろく (seal registration), and various permits. Foreign residents visit やくしょ for ざいりゅうカード (residence card) procedures. Most やくしょ now have multilingual support."},

    {type:"teach", trg:"じんじゃ", src:"Shinto shrine", pos:"noun", gender:null,
     note:"とりい = shrine gate. おまいり = shrine visit.\nShrines have red gates (とりい).",
     example:"A: じんじゃにおまいりにいきましょう。\nB: おみくじをひきたいです。",
     exampleSrc:"A: Let's visit the shrine.\nB: I want to draw a fortune slip.",
     funFact:"じんじゃ (神社) are Shinto places of worship, marked by とりい gates. Japan has over 80,000 じんじゃ. You purify hands at the てみずや (water basin), bow twice, clap twice, and bow once. おみくじ (fortune slips) range from だいきち (great luck) to だいきょう (great misfortune)."},

    {type:"teach", trg:"おてら", src:"Buddhist temple", pos:"noun", gender:null,
     note:"おてらまいり = temple visit.\nTemples have おぼうさん (monks).",
     example:"A: きょうとにはたくさんおてらがあります。\nB: きんかくじにいきたいです。",
     exampleSrc:"A: There are many temples in Kyoto.\nB: I want to go to Kinkakuji.",
     funFact:"おてら (お寺) are Buddhist temples, distinct from Shinto じんじゃ. Many Japanese practice both religions: they visit じんじゃ for おしょうがつ and おてら for おぼん. Kyoto alone has over 1,600 おてら. The famous きんかくじ (Golden Pavilion) is one of Japan's most visited おてら."},

    {type:"teach", trg:"こうばん", src:"police box", pos:"noun", gender:null,
     note:"Small neighborhood police station.\nこうばんにきく = ask at the police box.",
     example:"A: みちにまよいました。\nB: こうばんできいてみましょう。",
     exampleSrc:"A: I am lost.\nB: Let's ask at the police box.",
     funFact:"こうばん (交番) is a uniquely Japanese institution: small police stations on street corners where officers handle lost items, give directions, and patrol neighborhoods. There are about 6,000 こうばん across Japan. The system has been adopted by countries like Singapore and Brazil."},

    {type:"teach", trg:"やっきょく", src:"pharmacy", pos:"noun", gender:null,
     note:"やっきょくし = pharmacist. くすり = medicine.\nしょほうせん = prescription.",
     example:"A: やっきょくはどこですか？\nB: えきのまえにあります。",
     exampleSrc:"A: Where is the pharmacy?\nB: It is in front of the station.",
     funFact:"Japanese やっきょく (薬局) are divided into two types: ちょうざいやっきょく (dispensing pharmacies, need prescriptions) and ドラッグストア (drug stores, over-the-counter). ドラッグストア like Matsumoto Kiyoshi are tourist favorites for cosmetics, snacks, and medicines. Pharmacists always explain medications carefully."},

    {type:"teach", trg:"たいしかん", src:"embassy", pos:"noun", gender:null,
     note:"りょうじかん = consulate.\nパスポート = passport.",
     example:"A: パスポートをなくしました。\nB: たいしかんにいってください。",
     exampleSrc:"A: I lost my passport.\nB: Please go to the embassy.",
     funFact:"たいしかん (大使館) are concentrated in Tokyo's みなとく (Minato ward) and ちよだく (Chiyoda ward). Most countries have both a たいしかん in Tokyo and りょうじかん (consulates) in Osaka, Nagoya, or Fukuoka. The American たいしかん near the Imperial Palace is one of the largest."},

    {type:"teach", trg:"きっさてん", src:"coffee shop / cafe (traditional)", pos:"noun", gender:null,
     note:"Traditional Japanese cafe. Different from カフェ (modern cafe).\nきっさ = drinking tea.",
     example:"A: きっさてんでコーヒーをのみましょう。\nB: いいですね。",
     exampleSrc:"A: Let's have coffee at a coffee shop.\nB: Sounds good.",
     funFact:"きっさてん (喫茶店) are traditional Japanese cafes, distinct from modern チェーンカフェ (chain cafes) like Starbucks. きっさてん serve hand-dripped coffee, have retro decor, and offer a quiet atmosphere. Many have been run by the same family for decades. Regulars have their own preferred seat."},

    {type:"mc", q:"What is the difference between じんじゃ and おてら?", opts:["じんじゃ is Shinto, おてら is Buddhist","They are the same thing","じんじゃ is bigger, おてら is smaller","じんじゃ is in cities, おてら is in mountains"], ans:"じんじゃ is Shinto, おてら is Buddhist",
     hint:"These two types of religious buildings belong to Japan's two major spiritual traditions."},

    {type:"fb", s:"みちにまよいました。{1}できいてみましょう。\n(I am lost. Let's ask at the police box.)", a:"こうばん", opts:["こうばん","やくしょ","たいしかん","やっきょく"], sSrc:"I am lost. Let's ask at the police box.",
     hint:"These small neighborhood police stations are found on street corners throughout Japan."},

    {type:"match", pairs:[
      {trg:"やくしょ", src:"government office"},
      {trg:"こうばん", src:"police box"},
      {trg:"やっきょく", src:"pharmacy"},
      {trg:"きっさてん", src:"coffee shop"}
    ]},

    {type:"mc", q:"What should you do first at a じんじゃ?", opts:["Purify hands at the water basin","Ring the bell","Throw money","Draw a fortune slip"], ans:"Purify hands at the water basin",
     hint:"The てみずや (purification b...) is where visitors cleanse before approaching the main hall."}
  ]
};
export default BATCH9_L1;
