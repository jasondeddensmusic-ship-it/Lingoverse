// Unit 03 Batch3 L01. Location & Daily Objects
// New vocab: どこ, うえ, した, なか, となり, ちかく, あります, います,
// さいふ, スマホ, じしょ, でんち, はこ — all absent from unit-03.js
// and _temp_u03 files (which cover classroom objects and technology items).
const BATCH3_L_1 = {
  id:"jav2_u3l_b3_1", title:"どこにありますか", icon:"📍", xp:15, board:true,
  steps:[
    {type:"intro", title:"どこにありますか",
     desc:"Learn to describe where things are located. Japanese uses position words combined with the particle ni to express location precisely and naturally.",
     goals:["Ask and answer 'where is it?' with doko","Use position words: on, under, inside, next to","Distinguish arimasu (for things) from imasu (for people/animals)"]},

    {type:"teach", trg:"どこ", src:"where", pos:"pron", gender:null,
     note:"Question word for location. Pattern: X は どこ です か = Where is X?",
     example:"A: トイレはどこですか？\nB: あそこです。",
     exampleSrc:"A: Where is the restroom?\nB: It is over there.",
     funFact:"Doko is part of the ko-so-a-do pattern: koko (here), soko (there near you), asoko (over there), doko (where?). Once you see this pattern, Japanese location words become a system you can predict rather than memorize one by one."},

    {type:"teach", trg:"あります", src:"there is / exists (non-living)", pos:"verb", gender:null,
     note:"Used for inanimate objects and plants. Negative: ありません.\nKanji: 有ります.",
     example:"A: じしょはどこにありますか？\nB: つくえのうえにあります。",
     exampleSrc:"A: Where is the dictionary?\nB: It is on the desk.",
     funFact:"Arimasu describes the existence of objects. The basic sentence: X ga arimasu = there is an X. For living things (people, animals), you must use imasu instead. This distinction between living and non-living existence is unique to Japanese and fundamental to the language."},

    {type:"teach", trg:"います", src:"there is / exists (living beings)", pos:"verb", gender:null,
     note:"Used for people, animals, and anything that moves by itself. Negative: いません.",
     example:"A: ねこはどこにいますか？\nB: ソファのしたにいます。",
     exampleSrc:"A: Where is the cat?\nB: It is under the sofa.",
     funFact:"Imasu vs arimasu is one of the first major grammar points Japanese learners face. Robots and cars use arimasu (they do not move themselves). Goldfish use imasu (they are alive). This draws a line between what is inherently alive and what just sits there."},

    {type:"mc", q:"Which verb would you use for 'there is a book'?",
     opts:["います","です","あります","します"],
     ans:"あります",
     hint:"Books are non-living objects. Use the existence verb for inanimate things."},

    {type:"teach", trg:"うえ", src:"above / on top of", pos:"noun", gender:null,
     note:"Position word. Pattern: X の うえ に = on top of X.\nKanji: 上.",
     example:"A: かばんはどこですか？\nB: テーブルのうえにあります。",
     exampleSrc:"A: Where is the bag?\nB: It is on top of the table.",
     funFact:"上 is one of the most fundamental kanji. It shows something above a baseline. The same kanji appears in jouzu (上手, skilled = above-hand), ueru (植える, to plant), and kami (上, top/above). Knowing it unlocks dozens of words."},

    {type:"teach", trg:"した", src:"below / under", pos:"noun", gender:null,
     note:"Position word. Pattern: X の した に = under X.\nKanji: 下.",
     example:"A: かぎがつくえのしたにおちています。\nB: ありがとうございます！",
     exampleSrc:"A: The key fell under the desk.\nB: Thank you!",
     funFact:"下 shows something below a baseline, the mirror of 上. Together: ueshita (up and down), joushou (rise), gekou (descent). The word shita also means 'tongue' (written 舌), a famous homophone trap for Japanese learners."},

    {type:"teach", trg:"なか", src:"inside / in", pos:"noun", gender:null,
     note:"Position word. Pattern: X の なか に = inside X.\nKanji: 中.",
     example:"A: さいふはかばんのなかにありますか？\nB: はい、あります。",
     exampleSrc:"A: Is the wallet inside the bag?\nB: Yes, it is.",
     funFact:"中 appears everywhere in Japanese: naka (inside), chuu (middle), chuugoku (China = middle kingdom), nakama (comrade = inside group), chuu gakkou (middle school). It is one of the top 10 most used kanji in the Japanese language."},

    {type:"fb", s:"ねこはソファの{1}にいます。(The cat is under the sofa.)",
     a:"した",
     opts:["した","うえ","なか","となり"],
     hint:"The position word meaning 'below' or 'underneath.'",
     sSrc:"The cat is under the sofa."},

    {type:"teach", trg:"となり", src:"next to / neighboring", pos:"noun", gender:null,
     note:"Position word meaning the immediately adjacent position. X の となり に = next to X.",
     example:"A: ゆうびんきょくはどこですか？\nB: スーパーのとなりにあります。",
     exampleSrc:"A: Where is the post office?\nB: It is next to the supermarket.",
     funFact:"Tonari no Totoro (My Neighbor Totoro) uses this word. Tonari means 'neighboring' or 'next door.' Japan's neighborhood culture (chokai, neighborhood associations) means knowing your tonari (neighbor) is both practical and expected."},

    {type:"teach", trg:"ちかく", src:"near / nearby", pos:"noun", gender:null,
     note:"Position word for proximity. X の ちかく に = near X. Less precise than となり.",
     example:"A: えきのちかくにやすいレストランがありますか？\nB: はい、すぐそこにあります。",
     exampleSrc:"A: Is there a cheap restaurant near the station?\nB: Yes, it is right there.",
     funFact:"Chikaku combines 近 (near, close) with く (adverbial form). The opposite is tooku (far away). In a country where trains connect everything, 'near the station' is the ultimate location descriptor. Real estate ads in Japan almost always start with 'station X minutes on foot.'"},

    {type:"teach", trg:"さいふ", src:"wallet / purse", pos:"noun", gender:null,
     note:"The essential item everyone worries about losing.\nKanji: 財布.",
     example:"A: さいふがみつかりません。\nB: かばんのなかをみましたか？",
     exampleSrc:"A: I cannot find my wallet.\nB: Did you look inside the bag?",
     funFact:"財布 combines 財 (wealth/money) and 布 (cloth). Originally a cloth pouch for coins. Japan has an extremely high lost-and-found return rate. If you lose your wallet in Japan, statistics show you will likely get it back, often with the cash still inside."},

    {type:"teach", trg:"スマホ", src:"smartphone", pos:"noun", gender:null,
     note:"Shortened from スマートフォン (sumaatofon). The universal daily device.\nWritten in katakana.",
     example:"A: スマホはどこにありますか？\nB: かばんのなかにあります。",
     exampleSrc:"A: Where is my smartphone?\nB: It is inside the bag.",
     funFact:"Sumaaho (smartphone, abbreviated sumafo or sumaho) replaced keitai as the dominant mobile device term after 2010. Japan is famous for high smartphone penetration. Unique to Japan: electronic payment via IC cards (Suica, Pasmo) on the same smartphone."},

    {type:"mc", q:"Which sentence means 'The wallet is inside the bag'?",
     opts:["さいふはかばんのしたにあります","さいふはかばんのとなりにあります","さいふはかばんのなかにあります","さいふはかばんのうえにあります"],
     ans:"さいふはかばんのなかにあります",
     hint:"Inside = naka. The wallet is in the position within the bag."},

    {type:"teach", trg:"じしょ", src:"dictionary", pos:"noun", gender:null,
     note:"Paper or digital dictionary. じしょをひく = to look up in a dictionary.\nKanji: 辞書.",
     example:"A: じしょはつくえのうえにありますか？\nB: いいえ、ほんだなのなかにあります。",
     exampleSrc:"A: Is the dictionary on the desk?\nB: No, it is inside the bookshelf.",
     funFact:"辞 (words/resign) + 書 (write/book). A dictionary is literally a 'word book.' Japan produces some of the world's most detailed dictionaries. Kojien, Japan's most famous dictionary, contains over 250,000 entries. It is updated roughly every decade."},

    {type:"teach", trg:"はこ", src:"box", pos:"noun", gender:null,
     note:"Any box or container. Describes the shape.\nKanji: 箱.",
     example:"A: このはこのなかになにがありますか？\nB: えんぴつとけしゴムがあります。",
     exampleSrc:"A: What is inside this box?\nB: There are pencils and erasers.",
     funFact:"箱 (hako) appears in countless compounds: juubako (stacking boxes for New Year food), hakone (famous mountain resort area literally meaning 'box of roots'), and the beloved Hako on (literally 'box sound' = sound of clicking boxes in games)."},

    {type:"match", pairs:[
      {trg:"あります", src:"there is (non-living)"},
      {trg:"います", src:"there is (living)"},
      {trg:"どこ", src:"where"},
      {trg:"なか", src:"inside"}
    ]},

    {type:"match", pairs:[
      {trg:"うえ", src:"above / on top"},
      {trg:"した", src:"below / under"},
      {trg:"となり", src:"next to"},
      {trg:"ちかく", src:"nearby"}
    ]},

    {type:"fb", s:"スマホは{1}にありますか？(Is the smartphone next to the bag?)",
     a:"かばんのとなり",
     opts:["かばんのとなり","かばんのなか","つくえのした","いすのうえ"],
     hint:"The position phrase meaning 'next to the bag.'",
     sSrc:"Is the smartphone next to the bag?"},

    {type:"mc", q:"います is used for:", opts:["Books and pens","Boxes and wallets","Tables and chairs","Cats and people"],
     ans:"Cats and people",
     hint:"This existence verb is only for things that are alive and move on their own."},
  ]
};
export default BATCH3_L_1;
