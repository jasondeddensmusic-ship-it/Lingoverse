// Batch 10 – Unit 06 (A1.2 Family): Life Events
const BATCH10_L1 = {
  id:"jav2_u06l_b10_1", title:"家族(かぞく)の行事(ぎょうじ)", icon:"🎎", xp:15, board:true,
  steps:[
    {type:"intro", title:"家族(かぞく)の行事(ぎょうじ)",
     desc:"Learn vocabulary for major family milestones and ceremonies. These events are central to Japanese family life and culture.",
     goals:["Discuss weddings and celebrations","Talk about births and milestones","Understand Japanese family ceremonies"]},

    {type:"teach", trg:"結婚(けっこん)", src:"marriage / wedding", pos:"noun", gender:null,
     note:"結婚(けっこん)する = to marry. 結婚式(けっこんしき) = wedding ceremony.\n結婚指輪(けっこんゆびわ) = wedding ring.",
     example:"A: いつ結婚(けっこん)しましたか？\nB: 去年(きょねん)の6月(ろくがつ)です。",
     exampleSrc:"A: When did you get married?\nB: Last June.",
     funFact:"Japanese 結婚式(けっこんしき) (wedding ceremonies) can be Shinto (神前式(じんぜんしき)), Christian-style (教会式(きょうかいしき), even for non-Christians), or non-religious. Guests give ご祝儀(ごしゅうぎ) (monetary gifts) in special envelopes, typically 30,000 yen for friends."},

    {type:"teach", trg:"誕生(たんじょう)", src:"birth", pos:"noun", gender:null,
     note:"誕生日(たんじょうび) = birthday. 誕生(たんじょう)する = to be born.\nお誕生日(たんじょうび)おめでとう = happy birthday.",
     example:"A: 赤(あか)ちゃんが誕生(たんじょう)しました！\nB: おめでとうございます！",
     exampleSrc:"A: A baby was born!\nB: Congratulations!",
     funFact:"誕生(たんじょう) literally means 'to come into the truth of being.' Japanese 誕生日(たんじょうび) celebrations have adopted Western customs like ケーキ (cake) and ろうそく (candles), but traditional celebrations include お食(く)い初(ぞ)め (first meal ceremony at 100 days)."},

    {type:"teach", trg:"卒業(そつぎょう)", src:"graduation", pos:"noun", gender:null,
     note:"卒業式(そつぎょうしき) = graduation ceremony.\n卒業(そつぎょう)する = to graduate.",
     example:"A: 娘(むすめ)が卒業(そつぎょう)しました。\nB: おめでとうございます。",
     exampleSrc:"A: My daughter graduated.\nB: Congratulations.",
     funFact:"Japanese 卒業式(そつぎょうしき) (graduation ceremonies) are highly emotional. Students often cry, exchange second uniform buttons (第二(だいに)ボタン) as love tokens, and take endless photos. Cherry blossoms blooming during March 卒業(そつぎょう) season has become an iconic symbol of bittersweet farewells."},

    {type:"teach", trg:"入学(にゅうがく)", src:"enrollment / entering school", pos:"noun", gender:null,
     note:"入学式(にゅうがくしき) = enrollment ceremony.\n入学(にゅうがく)する = to enter school.",
     example:"A: 息子(むすこ)が小学校(しょうがっこう)に入学(にゅうがく)します。\nB: おめでとうございます。",
     exampleSrc:"A: My son is entering elementary school.\nB: Congratulations.",
     funFact:"入学式(にゅうがくしき) (entrance ceremonies) in April are major events. Parents buy ランドセル (expensive leather backpacks) for elementary school 入学(にゅうがく). The ランドセル tradition dates to the Meiji era and a single backpack can cost 50,000-100,000 yen."},

    {type:"teach", trg:"七五三(しちごさん)", src:"Seven-Five-Three ceremony", pos:"noun", gender:null,
     note:"Celebration for children ages 3, 5, and 7.\nHeld on November 15th.",
     example:"A: 七五三(しちごさん)の写真(しゃしん)を撮(と)りましょう。\nB: 着物(きもの)を着(き)せたいです。",
     exampleSrc:"A: Let's take Seven-Five-Three photos.\nB: I want to dress them in kimono.",
     funFact:"七五三(しちごさん) celebrates children surviving to ages 3, 5, and 7, historically dangerous milestones. Children wear formal 着物(きもの) and visit shrines. They receive 千歳飴(ちとせあめ) (thousand-year candy) in special bags, symbolizing hope for a long life."},

    {type:"teach", trg:"お盆(ぼん)", src:"Obon festival (ancestor remembrance)", pos:"noun", gender:null,
     note:"Usually mid-August. Many people return to hometowns.\nお盆休(ぼんやす)み = Obon holiday.",
     example:"A: お盆(ぼん)に実家(じっか)に帰(かえ)ります。\nB: いつ帰(かえ)りますか？",
     exampleSrc:"A: I will return to my parents' home for Obon.\nB: When will you go back?",
     funFact:"お盆(ぼん) is when spirits of ancestors return home. Families light 迎(むか)え火(び) (welcome fires) and 送(おく)り火(び) (farewell fires). It is one of Japan's biggest travel periods alongside お正月(しょうがつ) (New Year) and ゴールデンウィーク (Golden Week). 盆踊(ぼんおど)り (Bon dance) festivals happen nationwide."},

    {type:"teach", trg:"お正月(しょうがつ)", src:"New Year", pos:"noun", gender:null,
     note:"January 1-3. The most important holiday in Japan.\n年賀状(ねんがじょう) = New Year postcard.",
     example:"A: お正月(しょうがつ)は何(なに)をしますか？\nB: 初詣(はつもうで)に行(い)きます。",
     exampleSrc:"A: What will you do for New Year?\nB: I will go to the first shrine visit.",
     funFact:"お正月(しょうがつ) is Japan's most important holiday. Families eat おせち料理(りょうり) (special New Year food), play かるた (card games), and visit shrines for 初詣(はつもうで) (first visit). Children receive お年玉(としだま) (money gifts in envelopes). Most businesses close January 1-3."},

    {type:"teach", trg:"初詣(はつもうで)", src:"first shrine visit of the year", pos:"noun", gender:null,
     note:"Done during the first three days of January.\n初(はつ) = first, 詣(もうで) = visit to a shrine.",
     example:"A: 初詣(はつもうで)に行(い)きましょう。\nB: どこの神社(じんじゃ)に行(い)きますか？",
     exampleSrc:"A: Let's go for the first shrine visit.\nB: Which shrine shall we go to?",
     funFact:"初詣(はつもうで) draws over 80 million visitors to shrines and temples in the first three days of January. 明治神宮(めいじじんぐう) (Meiji Shrine) in Tokyo receives about 3 million visitors. People pray for health, success, and good fortune while drawing おみくじ (fortune slips)."},

    {type:"mc", q:"What is 七五三(しちごさん)?", opts:["A ceremony for children ages 3, 5, and 7","A wedding celebration","A graduation event","A New Year festival"], ans:"A ceremony for children ages 3, 5, and 7",
     hint:"The name literally contains the numbers seven, five, and three."},

    {type:"fb", s:"{1}に実家(じっか)に帰(かえ)ります。\n(I will return to my parents' home for Obon.)", a:"お盆(ぼん)", opts:["お盆(ぼん)","お正月(しょうがつ)","七五三(しちごさん)","卒業(そつぎょう)"], sSrc:"I will return to my parents' home for Obon.",
     hint:"This mid-August festival honors ancestors and is one of Japan's biggest travel periods."},

    {type:"match", pairs:[
      {trg:"結婚(けっこん)", src:"marriage"},
      {trg:"卒業(そつぎょう)", src:"graduation"},
      {trg:"入学(にゅうがく)", src:"enrollment"},
      {trg:"初詣(はつもうで)", src:"first shrine visit"}
    ]},

    {type:"mc", q:"What do children receive during お正月(しょうがつ)?", opts:["お年玉(としだま) (money gifts)","千歳飴(ちとせあめ) (candy)","ランドセル (backpacks)","着物(きもの) (kimono)"], ans:"お年玉(としだま) (money gifts)",
     hint:"During New Year, adults give children special envelopes containing m...."}
  ,{type:"match",pairs:[{trg:"誕生(たんじょう)",src:"birth"},{trg:"七五三(しちごさん)",src:"Seven-Five-Three ceremony"},{trg:"お正月(しょうがつ)",src:"New Year"}]}]
};
export default BATCH10_L1;
