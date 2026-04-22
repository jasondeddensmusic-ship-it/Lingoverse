// Batch 7 – Unit 03 (A1.1 What Is This?): Colors & Shapes
const BATCH7_L1 = {
  id:"jav2_u03l_b7_1", title:"色(いろ)と形(かたち)", icon:"🎨", xp:15, board:true,
  steps:[
    {type:"intro", title:"色(いろ)と形(かたち)",
     desc:"Learn the basic colors and shapes in Japanese. Colors work as both i-adjectives and nouns, while shapes use unique vocabulary. These words appear everywhere in daily life.",
     goals:["Name the basic colors in Japanese","Describe objects using color adjectives","Learn common shape words"]},

    {type:"teach", trg:"白(しろ)い", src:"white", pos:"adj", gender:null,
     note:"I-adjective form. Noun form: 白(しろ).\n白(しろ)い車(くるま) = a white car.",
     example:"A: あの白(しろ)い犬(いぬ)はかわいいですね。\nB: はい、小(ちい)さくて白(しろ)いですね。",
     exampleSrc:"A: That white dog is cute.\nB: Yes, small and white.",
     funFact:"白(しろ) represents purity, cleanliness, and innocence in Japan. 白(しろ)いご飯(はん) (white rice) is the staple food. White is worn at weddings (for the bride) and funerals (for the altar). The word 白紙(はくし) means a blank slate."},

    {type:"teach", trg:"黒(くろ)い", src:"black", pos:"adj", gender:null,
     note:"I-adjective form. Noun form: 黒(くろ).\n黒(くろ)い猫(ねこ) = a black cat.",
     example:"A: 黒(くろ)いかばんはどれですか？\nB: あれです。あの大(おお)きいの。",
     exampleSrc:"A: Which one is the black bag?\nB: That one over there. The big one.",
     funFact:"Unlike Western superstitions, black cats (黒(くろ)い猫(ねこ)) are considered GOOD luck in Japan. The delivery company Yamato Transport uses a black cat mother carrying a kitten as their logo. Seeing a 黒(くろ)い猫(ねこ) cross your path is fortunate."},

    {type:"teach", trg:"黄色(きいろ)い", src:"yellow", pos:"adj", gender:null,
     note:"I-adjective form. Noun form: 黄色(きいろ).\n黄色(きいろ)い花(はな) = a yellow flower.",
     example:"A: 黄色(きいろ)いバナナをください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please give me a yellow banana.\nB: Here you go.",
     funFact:"黄色(きいろ) is the color of caution in Japan. 小学生(しょうがくせい) (elementary school students) wear 黄色(きいろ)い帽子(ぼうし) for traffic safety. Yellow lines mark no-parking zones. But 黄色(きいろ) also represents happiness and warmth, appearing in many cheerful designs."},

    {type:"teach", trg:"茶色(ちゃいろ)い", src:"brown", pos:"adj", gender:null,
     note:"I-adjective. 茶(ちゃ) = tea, 色(いろ) = color. Literally: tea-colored.\n茶色(ちゃいろ)い靴(くつ) = brown shoes.",
     example:"A: 茶色(ちゃいろ)い靴(くつ)が好(す)きです。\nB: 私(わたし)もです。",
     exampleSrc:"A: I like brown shoes.\nB: Me too.",
     funFact:"茶色(ちゃいろ) literally means 'tea color' because Japanese green tea, when brewed strong or aged, turns brown. Many Japanese colors are named after natural objects: ねずみ色(いろ) (mouse color = gray), 桜色(さくらいろ) (cherry blossom color = pink), 空色(そらいろ) (sky color = light blue)."},

    {type:"teach", trg:"緑(みどり)", src:"green", pos:"noun", gender:null,
     note:"Noun only (no i-adjective form). 緑(みどり)色(いろ)の = green (adjective).\nTraffic lights: 青(あお) not 緑(みどり).",
     example:"A: 緑(みどり)のTシャツはありますか？\nB: はい、こちらです。",
     exampleSrc:"A: Do you have a green T-shirt?\nB: Yes, here it is.",
     funFact:"Japanese traditionally considered green a shade of blue (青(あお)). Traffic lights that look green are still called 青信号(あおしんごう) (blue signal). 緑(みどり) as a distinct color is relatively modern. This is why vegetables are 青物(あおもの) (blue things) and green apples are 青(あお)りんご."},

    {type:"teach", trg:"紫(むらさき)", src:"purple", pos:"noun", gender:null,
     note:"Noun form. 紫(むらさき)色(いろ)の = purple (adjective).\nHistorically the most prestigious color in Japan.",
     example:"A: 紫(むらさき)の傘(かさ)を買(か)いました。\nB: きれいな色(いろ)ですね。",
     exampleSrc:"A: I bought a purple umbrella.\nB: That is a pretty color.",
     funFact:"紫(むらさき) was the most expensive dye in ancient Japan, reserved for the highest nobility. 源氏物語(げんじものがたり) calls the ideal woman 紫(むらさき). 紫衣(しえ) (purple robes) were restricted by law to Buddhist monks of the highest rank. Today it remains a sophisticated color."},

    {type:"teach", trg:"丸(まる)", src:"circle", pos:"noun", gender:null,
     note:"Also 丸(まる)い (circular, i-adjective).\n丸(まる)を書(か)く = to draw a circle.",
     example:"A: ここに丸(まる)を書(か)いてください。\nB: 大(おお)きい丸(まる)ですか？",
     exampleSrc:"A: Please draw a circle here.\nB: A big circle?",
     funFact:"The circle (丸(まる)) has special meaning in Japanese culture. Teachers mark correct answers with a big 丸(まる), not a checkmark. Japanese grading goes: 丸(まる) (correct), 二重丸(にじゅうまる) (double circle, excellent), バツ (X, wrong). The Olympic 丸(まる) represents Japan."},

    {type:"teach", trg:"三角(さんかく)", src:"triangle", pos:"noun", gender:null,
     note:"三(さん) = three, 角(かく) = angle/corner.\n三角形(さんかっけい) = triangle (geometric term).",
     example:"A: 三角(さんかく)のおにぎりを作(つく)りましょう。\nB: はい、日本(にほん)のおにぎりですね。",
     exampleSrc:"A: Let us make a triangular rice ball.\nB: Yes, a Japanese rice ball.",
     funFact:"Japan's most iconic food shape is the 三角(さんかく) おにぎり (rice ball). The triangular shape represents mountains, which are sacred in Japanese culture. Convenience store おにぎり are almost always 三角(さんかく), selling over 2 billion per year."},

    {type:"teach", trg:"四角(しかく)", src:"square / rectangle", pos:"noun", gender:null,
     note:"四(し) = four, 角(かく) = angle/corner.\n四角(しかく)い = square-shaped (i-adjective).",
     example:"A: 四角(しかく)い箱(はこ)をください。\nB: このサイズでいいですか？",
     exampleSrc:"A: Please give me a square box.\nB: Is this size okay?",
     funFact:"Japanese aesthetics love 四角(しかく) forms. 畳(たたみ) (tatami mats) are rectangular, 障子(しょうじ) (shoji screens) are grid-based, 弁当箱(べんとうばこ) are square, and even watermelons are grown in 四角(しかく) molds as novelty gifts. The famous 四角(しかく)いスイカ (square watermelons) cost hundreds of dollars."},

    {type:"teach", trg:"星(ほし)", src:"star", pos:"noun", gender:null,
     note:"Also: 星形(ほしがた) = star shape.\n星空(ほしぞら) = starry sky.",
     example:"A: 今夜(こんや)は星(ほし)がきれいですね。\nB: そうですね。星(ほし)がたくさん見(み)えます。",
     exampleSrc:"A: The stars are beautiful tonight.\nB: Yes. Many stars are visible.",
     funFact:"星(ほし) shares its radical with 生 (life/birth). Stars are born in the sky. The 七夕(たなばた) festival on July 7th celebrates star-crossed lovers who meet once a year when stars align. 子(こ)どもたちは紙(かみ)に願(ねが)い事(ごと)を書(か)いて竹(たけ)に飾(かざ)ります (children write wishes on paper and hang them on bamboo)."},

    {type:"teach", trg:"ハート", src:"heart (shape)", pos:"noun", gender:null,
     note:"Katakana loanword from English 'heart.'\nハートの形(かたち) = heart shape.",
     example:"A: このクッキーはハートの形(かたち)ですね。\nB: かわいいですね！",
     exampleSrc:"A: This cookie is heart-shaped.\nB: How cute!",
     funFact:"The heart shape is universal, but in Japan it appears everywhere: food, stationery, fashion, and especially Valentine's Day. Japanese バレンタインデー (February 14) is when women give chocolate to men. Men return gifts on ホワイトデー (White Day, March 14)."},

    {type:"teach", trg:"形(かたち)", src:"shape / form", pos:"noun", gender:null,
     note:"General word for shape or form.\nどんな形(かたち)ですか = what shape is it?",
     example:"A: このケーキはどんな形(かたち)ですか？\nB: 丸(まる)い形(かたち)です。",
     exampleSrc:"A: What shape is this cake?\nB: It is a round shape.",
     funFact:"形(かたち) is a philosophical word in Japanese. Beyond physical shapes, it describes form, style, and proper way of doing things. 型(かた) (a related reading) means 'form' in martial arts. Every 柔道(じゅうどう) throw has its proper 型(かた)."},

    {type:"teach", trg:"虹(にじ)", src:"rainbow", pos:"noun", gender:null,
     note:"Kanji: 虹. 虹(にじ)が出(で)た = a rainbow appeared.\n虹色(にじいろ) = rainbow-colored.",
     example:"A: 見(み)てください！虹(にじ)です！\nB: きれいですね。七色(なないろ)ですね。",
     exampleSrc:"A: Look! A rainbow!\nB: Beautiful. Seven colors.",
     funFact:"Japanese tradition says the 虹(にじ) has seven colors (七色(なないろ)), the same as Western tradition. The kanji 虹 contains the insect/bug radical (虫) because ancient Chinese people thought rainbows were sky dragons or serpents. In Japan, seeing a 虹(にじ) is very lucky."},

    // Quiz steps
    {type:"mc", q:"白(しろ)い犬(いぬ) means:",
     opts:["A white dog","A black dog","A big dog","A small dog"],
     ans:"A white dog",
     hint:"白(しろ)い is the i-adjective for a color associated with purity and snow."},

    {type:"match", pairs:[
      {trg:"白(しろ)い", src:"white"},
      {trg:"黒(くろ)い", src:"black"},
      {trg:"黄色(きいろ)い", src:"yellow"},
      {trg:"茶色(ちゃいろ)い", src:"brown"},
      {trg:"紫(むらさき)", src:"purple"}
    ]},

    {type:"fb", s:"日本(にほん)の信号(しんごう)は「{1}」です。緑(みどり)ではありません。",
     a:["青(あお)"],
     opts:["青(あお)","緑(みどり)","白(しろ)","黄色(きいろ)"],
     hint:"Japanese traffic lights are called by a traditional color name, even though they look green.",
     sSrc:"Japanese traffic signals are '{1}.' Not green."},

    {type:"mc", q:"おにぎりの typical shape is:",
     opts:["星(ほし) (star)","三角(さんかく) (triangle)","丸(まる) (circle)","四角(しかく) (square)"],
     ans:"三角(さんかく) (triangle)",
     hint:"The classic Japanese rice ball is shaped like a mountain, with three corners."},

    {type:"fb", s:"このクッキーは{1}の形(かたち)です。",
     a:["ハート"],
     opts:["ハート","丸(まる)","星(ほし)","四角(しかく)"],
     hint:"A romantic shape associated with love, written in katakana as a loanword.",
     sSrc:"This cookie is in the shape of a {1}."},

    {type:"mc", q:"茶色(ちゃいろ) literally means:",
     opts:["Wood color","Leaf color","Tea color","Earth color"],
     ans:"Tea color",
     hint:"The first part of this word is the Japanese word for a common hot beverage."},

    {type:"match", pairs:[
      {trg:"丸(まる)", src:"circle"},
      {trg:"三角(さんかく)", src:"triangle"},
      {trg:"四角(しかく)", src:"square"},
      {trg:"星(ほし)", src:"star"},
      {trg:"形(かたち)", src:"shape"}
    ]},

    {type:"fb", s:"雨(あめ)のあとに{1}が出(で)ました。",
     a:["虹(にじ)"],
     opts:["虹(にじ)","星(ほし)","雲(くも)","風(かぜ)"],
     hint:"After rain, this colorful arc appears in the sky. Japanese tradition says it has seven colors.",
     sSrc:"After the rain, a {1} appeared."}
  ,{type:"match",pairs:[{trg:"緑(みどり)",src:"green"}]}]
};
export default BATCH7_L1;
