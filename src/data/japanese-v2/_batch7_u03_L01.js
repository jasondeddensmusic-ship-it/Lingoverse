// Batch 7 – Unit 03 (A1.1 What Is This?): Colors & Shapes
const BATCH7_L1 = {
  id:"jav2_u03l_b7_1", title:"いろとかたち", icon:"🎨", xp:15, board:true,
  steps:[
    {type:"intro", title:"いろとかたち",
     desc:"Learn the basic colors and shapes in Japanese. Colors work as both i-adjectives and nouns, while shapes use unique vocabulary. These words appear everywhere in daily life.",
     goals:["Name the basic colors in Japanese","Describe objects using color adjectives","Learn common shape words"]},

    {type:"teach", trg:"しろい", src:"white", pos:"adj", gender:null,
     note:"I-adjective form. Noun form: しろ.\nしろいくるま = a white car.",
     example:"A: あのしろいいぬはかわいいですね。\nB: はい、ちいさくてしろいですね。",
     exampleSrc:"A: That white dog is cute.\nB: Yes, small and white.",
     funFact:"白 (shiro) represents purity, cleanliness, and innocence in Japan. White rice (しろいごはん) is the staple food. White is worn at weddings (for the bride) and funerals (for the altar). The word 白紙 (hakushi) means a blank slate."},

    {type:"teach", trg:"くろい", src:"black", pos:"adj", gender:null,
     note:"I-adjective form. Noun form: くろ.\nくろいねこ = a black cat.",
     example:"A: くろいかばんはどれですか？\nB: あれです。あのおおきいの。",
     exampleSrc:"A: Which one is the black bag?\nB: That one over there. The big one.",
     funFact:"Unlike Western superstitions, black cats (くろねこ) are considered GOOD luck in Japan. The delivery company Yamato Transport uses a black cat mother carrying a kitten as their logo. Seeing a くろねこ cross your path is fortunate."},

    {type:"teach", trg:"きいろい", src:"yellow", pos:"adj", gender:null,
     note:"I-adjective form. Noun form: きいろ.\nきいろいはな = a yellow flower.",
     example:"A: きいろいバナナをください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please give me a yellow banana.\nB: Here you go.",
     funFact:"きいろ is the color of caution in Japan. School children wear yellow hats (きいろいぼうし) for traffic safety. Yellow lines mark no-parking zones. But きいろ also represents happiness and warmth, appearing in many cheerful designs."},

    {type:"teach", trg:"ちゃいろい", src:"brown", pos:"adj", gender:null,
     note:"I-adjective. ちゃ = tea, いろ = color. Literally: tea-colored.\nちゃいろいくつ = brown shoes.",
     example:"A: ちゃいろいくつがすきです。\nB: わたしもです。",
     exampleSrc:"A: I like brown shoes.\nB: Me too.",
     funFact:"ちゃいろ literally means 'tea color' because Japanese green tea, when brewed strong or aged, turns brown. Many Japanese colors are named after natural objects: ねずみいろ (mouse color = gray), さくらいろ (cherry blossom color = pink), そらいろ (sky color = light blue)."},

    {type:"teach", trg:"みどり", src:"green", pos:"noun", gender:null,
     note:"Noun only (no i-adjective form). みどりいろの = green (adjective).\nTraffic lights: あお not みどり.",
     example:"A: みどりのTシャツはありますか？\nB: はい、こちらです。",
     exampleSrc:"A: Do you have a green T-shirt?\nB: Yes, here it is.",
     funFact:"Japanese traditionally considered green a shade of blue (あお). Traffic lights that look green are still called あおしんごう (blue signal). みどり as a distinct color is relatively modern. This is why vegetables are あおもの (blue things) and green apples are あおりんご."},

    {type:"teach", trg:"むらさき", src:"purple", pos:"noun", gender:null,
     note:"Noun form. むらさきいろの = purple (adjective).\nHistorically the most prestigious color in Japan.",
     example:"A: むらさきのかさをかいました。\nB: きれいないろですね。",
     exampleSrc:"A: I bought a purple umbrella.\nB: That is a pretty color.",
     funFact:"むらさき was the most expensive dye in ancient Japan, reserved for the highest nobility. The Tale of Genji calls the ideal woman Murasaki. Purple robes (紫衣) were restricted by law to Buddhist monks of the highest rank. Today it remains a sophisticated color."},

    {type:"teach", trg:"まる", src:"circle", pos:"noun", gender:null,
     note:"Also まるい (circular, i-adjective).\nまるをかく = to draw a circle.",
     example:"A: ここにまるをかいてください。\nB: おおきいまるですか？",
     exampleSrc:"A: Please draw a circle here.\nB: A big circle?",
     funFact:"The circle (まる) has special meaning in Japanese culture. Teachers mark correct answers with a big まる, not a checkmark. Japanese grading goes: まる (correct), にじゅうまる (double circle, excellent), ばつ (X, wrong). The Olympic maru represents Japan."},

    {type:"teach", trg:"さんかく", src:"triangle", pos:"noun", gender:null,
     note:"さん = three, かく = angle/corner.\nさんかくけい = triangle (geometric term).",
     example:"A: さんかくのおにぎりをつくりましょう。\nB: はい、にほんのおにぎりですね。",
     exampleSrc:"A: Let us make a triangular rice ball.\nB: Yes, a Japanese rice ball.",
     funFact:"Japan's most iconic food shape is the さんかく onigiri (rice ball). The triangular shape represents mountains, which are sacred in Japanese culture. Convenience store onigiri are almost always さんかく, selling over 2 billion per year."},

    {type:"teach", trg:"しかく", src:"square / rectangle", pos:"noun", gender:null,
     note:"し = four, かく = angle/corner.\nしかくい = square-shaped (i-adjective).",
     example:"A: しかくいはこをください。\nB: このサイズでいいですか？",
     exampleSrc:"A: Please give me a square box.\nB: Is this size okay?",
     funFact:"Japanese aesthetics love しかく forms. Tatami mats are rectangular, shoji screens are grid-based, bento boxes are square, and even watermelons are grown in しかく molds as novelty gifts. The famous しかく watermelons cost hundreds of dollars."},

    {type:"teach", trg:"ほし", src:"star", pos:"noun", gender:null,
     note:"Also: ほしがた = star shape.\nほしぞら = starry sky.",
     example:"A: きょうのよるはほしがきれいですね。\nB: そうですね。ほしがたくさんみえます。",
     exampleSrc:"A: The stars are beautiful tonight.\nB: Yes. Many stars are visible.",
     funFact:"ほし (星) shares its radical with 生 (life/birth). Stars are born in the sky. The Tanabata festival (七夕) on July 7th celebrates star-crossed lovers who meet once a year when stars align. Children write wishes on paper strips and hang them on bamboo."},

    {type:"teach", trg:"ハート", src:"heart (shape)", pos:"noun", gender:null,
     note:"Katakana loanword from English 'heart.'\nハートのかたち = heart shape.",
     example:"A: このクッキーはハートのかたちですね。\nB: かわいいですね！",
     exampleSrc:"A: This cookie is heart-shaped.\nB: How cute!",
     funFact:"The heart shape is universal, but in Japan it appears everywhere: food, stationery, fashion, and especially Valentine's Day. Japanese Valentine's Day (February 14) is when women give chocolate to men. Men return gifts on White Day (March 14)."},

    {type:"teach", trg:"かたち", src:"shape / form", pos:"noun", gender:null,
     note:"General word for shape or form.\nどんなかたちですか = what shape is it?",
     example:"A: このケーキはどんなかたちですか？\nB: まるいかたちです。",
     exampleSrc:"A: What shape is this cake?\nB: It is a round shape.",
     funFact:"かたち (形) is a philosophical word in Japanese. Beyond physical shapes, it describes form, style, and proper way of doing things. かた (a reading of the same kanji) means 'form' in martial arts. Every judo throw has its proper かた."},

    {type:"teach", trg:"にじ", src:"rainbow", pos:"noun", gender:null,
     note:"Kanji: 虹. にじがでた = a rainbow appeared.\nにじいろ = rainbow-colored.",
     example:"A: みてください！にじです！\nB: きれいですね。なないろですね。",
     exampleSrc:"A: Look! A rainbow!\nB: Beautiful. Seven colors.",
     funFact:"Japanese tradition says the にじ has seven colors (なないろ), the same as Western tradition. The kanji 虹 contains the insect/bug radical (虫) because ancient Chinese people thought rainbows were sky dragons or serpents. In Japan, seeing a にじ is very lucky."},

    // Quiz steps
    {type:"mc", q:"しろいいぬ means:",
     opts:["A white dog","A black dog","A big dog","A small dog"],
     ans:"A white dog",
     hint:"しろい is the i-adjective for a color associated with purity and snow."},

    {type:"match", pairs:[
      {trg:"しろい", src:"white"},
      {trg:"くろい", src:"black"},
      {trg:"きいろい", src:"yellow"},
      {trg:"ちゃいろい", src:"brown"},
      {trg:"むらさき", src:"purple"}
    ]},

    {type:"fb", s:"にほんのしんごうは「{1}」です。みどりではありません。",
     a:["あお"],
     opts:["あお","みどり","しろ","きいろ"],
     hint:"Japanese traffic lights are called by a traditional color name, even though they look green.",
     sSrc:"Japanese traffic signals are '{1}.' Not green."},

    {type:"mc", q:"おにぎりの typical shape is:",
     opts:["さんかく (triangle)","まる (circle)","しかく (square)","ほし (star)"],
     ans:"さんかく (triangle)",
     hint:"The classic Japanese rice ball is shaped like a mountain, with three corners."},

    {type:"fb", s:"このクッキーは{1}のかたちです。",
     a:["ハート"],
     opts:["ハート","まる","ほし","しかく"],
     hint:"A romantic shape associated with love, written in katakana as a loanword.",
     sSrc:"This cookie is in the shape of a {1}."},

    {type:"mc", q:"ちゃいろ literally means:",
     opts:["Tea color","Earth color","Wood color","Leaf color"],
     ans:"Tea color",
     hint:"The first part of this word is the Japanese word for a common hot beverage."},

    {type:"match", pairs:[
      {trg:"まる", src:"circle"},
      {trg:"さんかく", src:"triangle"},
      {trg:"しかく", src:"square"},
      {trg:"ほし", src:"star"},
      {trg:"かたち", src:"shape"}
    ]},

    {type:"fb", s:"あめのあとに{1}がでました。",
     a:["にじ"],
     opts:["にじ","ほし","くも","かぜ"],
     hint:"After rain, this colorful arc appears in the sky. Japanese tradition says it has seven colors.",
     sSrc:"After the rain, a {1} appeared."}
  ]
};
export default BATCH7_L1;
