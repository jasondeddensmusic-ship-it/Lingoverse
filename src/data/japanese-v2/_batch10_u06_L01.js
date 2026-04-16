// Batch 10 – Unit 06 (A1.2 Family): Life Events
const BATCH10_L1 = {
  id:"jav2_u06l_b10_1", title:"かぞくのぎょうじ", icon:"🎎", xp:15, board:true,
  steps:[
    {type:"intro", title:"かぞくのぎょうじ",
     desc:"Learn vocabulary for major family milestones and ceremonies. These events are central to Japanese family life and culture.",
     goals:["Discuss weddings and celebrations","Talk about births and milestones","Understand Japanese family ceremonies"]},

    {type:"teach", trg:"けっこん", src:"marriage / wedding", pos:"noun", gender:null,
     note:"けっこんする = to marry. けっこんしき = wedding ceremony.\nけっこんゆびわ = wedding ring.",
     example:"A: いつけっこんしましたか？\nB: きょねんのろくがつです。",
     exampleSrc:"A: When did you get married?\nB: Last June.",
     funFact:"Japanese けっこんしき (wedding ceremonies) can be Shinto (じんぜんしき), Christian-style (きょうかいしき, even for non-Christians), or non-religious (じんぜんしき). Guests give ごしゅうぎ (monetary gifts) in special envelopes, typically 30,000 yen for friends."},

    {type:"teach", trg:"たんじょう", src:"birth", pos:"noun", gender:null,
     note:"たんじょうび = birthday. たんじょうする = to be born.\nおたんじょうびおめでとう = happy birthday.",
     example:"A: あかちゃんがたんじょうしました！\nB: おめでとうございます！",
     exampleSrc:"A: A baby was born!\nB: Congratulations!",
     funFact:"たんじょう (誕生) literally means 'to come into the truth of being.' Japanese たんじょうび celebrations have adopted Western customs like ケーキ (cake) and ろうそく (candles), but traditional celebrations include おくいぞめ (first meal ceremony at 100 days)."},

    {type:"teach", trg:"そつぎょう", src:"graduation", pos:"noun", gender:null,
     note:"そつぎょうしき = graduation ceremony.\nそつぎょうする = to graduate.",
     example:"A: むすめがそつぎょうしました。\nB: おめでとうございます。",
     exampleSrc:"A: My daughter graduated.\nB: Congratulations.",
     funFact:"Japanese そつぎょうしき (graduation ceremonies) are highly emotional. Students often cry, exchange second uniform buttons (だいにボタン) as love tokens, and take endless photos. Cherry blossoms blooming during March そつぎょう season has become an iconic symbol of bittersweet farewells."},

    {type:"teach", trg:"にゅうがく", src:"enrollment / entering school", pos:"noun", gender:null,
     note:"にゅうがくしき = enrollment ceremony.\nにゅうがくする = to enter school.",
     example:"A: むすこがしょうがっこうににゅうがくします。\nB: おめでとうございます。",
     exampleSrc:"A: My son is entering elementary school.\nB: Congratulations.",
     funFact:"にゅうがくしき (entrance ceremonies) in April are major events. Parents buy ランドセル (expensive leather backpacks) for elementary school にゅうがく. The ランドセル tradition dates to the Meiji era and a single backpack can cost 50,000-100,000 yen."},

    {type:"teach", trg:"しちごさん", src:"Seven-Five-Three ceremony", pos:"noun", gender:null,
     note:"Celebration for children ages 3, 5, and 7.\nHeld on November 15th.",
     example:"A: しちごさんのしゃしんをとりましょう。\nB: きものをきせたいです。",
     exampleSrc:"A: Let's take Seven-Five-Three photos.\nB: I want to dress them in kimono.",
     funFact:"しちごさん (七五三) celebrates children surviving to ages 3, 5, and 7, historically dangerous milestones. Children wear formal きもの and visit shrines. They receive ちとせあめ (thousand-year candy) in special bags, symbolizing hope for a long life."},

    {type:"teach", trg:"おぼん", src:"Obon festival (ancestor remembrance)", pos:"noun", gender:null,
     note:"Usually mid-August. Many people return to hometowns.\nおぼんやすみ = Obon holiday.",
     example:"A: おぼんにじっかにかえります。\nB: いつかえりますか？",
     exampleSrc:"A: I will return to my parents' home for Obon.\nB: When will you go back?",
     funFact:"おぼん (お盆) is when spirits of ancestors return home. Families light むかえび (welcome fires) and おくりび (farewell fires). It is one of Japan's biggest travel periods alongside しょうがつ (New Year) and ゴールデンウィーク (Golden Week). ぼんおどり (Bon dance) festivals happen nationwide."},

    {type:"teach", trg:"おしょうがつ", src:"New Year", pos:"noun", gender:null,
     note:"January 1-3. The most important holiday in Japan.\nねんがじょう = New Year postcard.",
     example:"A: おしょうがつはなにをしますか？\nB: はつもうでにいきます。",
     exampleSrc:"A: What will you do for New Year?\nB: I will go to the first shrine visit.",
     funFact:"おしょうがつ (お正月) is Japan's most important holiday. Families eat おせちりょうり (special New Year food), play かるた (card games), and visit shrines for はつもうで (first visit). Children receive おとしだま (money gifts in envelopes). Most businesses close January 1-3."},

    {type:"teach", trg:"はつもうで", src:"first shrine visit of the year", pos:"noun", gender:null,
     note:"Done during the first three days of January.\nはつ = first, もうで = visit to a shrine.",
     example:"A: はつもうでにいきましょう。\nB: どこのじんじゃにいきますか？",
     exampleSrc:"A: Let's go for the first shrine visit.\nB: Which shrine shall we go to?",
     funFact:"はつもうで (初詣) draws over 80 million visitors to shrines and temples in the first three days of January. めいじじんぐう (Meiji Shrine) in Tokyo receives about 3 million visitors. People pray for health, success, and good fortune while drawing おみくじ (fortune slips)."},

    {type:"mc", q:"What is しちごさん?", opts:["A ceremony for children ages 3, 5, and 7","A wedding celebration","A graduation event","A New Year festival"], ans:"A ceremony for children ages 3, 5, and 7",
     hint:"The name literally contains the numbers seven, five, and three."},

    {type:"fb", s:"{1}にじっかにかえります。\n(I will return to my parents' home for Obon.)", a:"おぼん", opts:["おぼん","おしょうがつ","しちごさん","そつぎょう"], sSrc:"I will return to my parents' home for Obon.",
     hint:"This mid-August festival honors ancestors and is one of Japan's biggest travel periods."},

    {type:"match", pairs:[
      {trg:"けっこん", src:"marriage"},
      {trg:"そつぎょう", src:"graduation"},
      {trg:"にゅうがく", src:"enrollment"},
      {trg:"はつもうで", src:"first shrine visit"}
    ]},

    {type:"mc", q:"What do children receive during おしょうがつ?", opts:["おとしだま (money gifts)","ちとせあめ (candy)","ランドセル (backpacks)","きもの (kimono)"], ans:"おとしだま (money gifts)",
     hint:"During New Year, adults give children special envelopes containing m...."}
  ]
};
export default BATCH10_L1;
