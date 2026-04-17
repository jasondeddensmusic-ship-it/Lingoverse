// Batch 4 — Unit 04 Lesson 2: More Colors & Describing Things
const BATCH4_L_2 = {
  id:"jav2_u04l_b4_2", title:"もっと色(いろ)", icon:"🎨", xp:15, board:true,
  steps:[
    {type:"intro", title:"もっと色(いろ)と表現(ひょうげん)",
     desc:"Expand your color vocabulary and learn to combine adjectives to describe things more precisely.",
     goals:["Learn additional color words","Combine size and color descriptions","Use no-adjective patterns for materials"]},

    {type:"teach", trg:"紫(むらさき)", src:"purple", pos:"noun", gender:null,
     note:"Kanji: 紫. Used as a noun (color name) or na-adjective.",
     example:"紫(むらさき)の花(はな)はきれいです。",
     exampleSrc:"Purple flowers are beautiful.",
     funFact:"Purple was the color of royalty in ancient Japan, just like in Europe. Only the highest-ranking nobles could wear murasaki. The famous 11th-century author Murasaki Shikibu was named after this noble color."},

    {type:"teach", trg:"オレンジ", src:"orange (color)", pos:"noun", gender:null,
     note:"From English 'orange.' Used for both the color and the fruit.",
     example:"オレンジのTシャツを着(き)ています。",
     exampleSrc:"I am wearing an orange T-shirt.",
     funFact:"Traditional Japanese had no single word for orange. The color was called 橙色(だいだいいろ) (daidai-iro, from the bitter orange tree). Modern Japanese uses the English loanword for convenience."},

    {type:"teach", trg:"灰色(はいいろ)", src:"gray", pos:"noun", gender:null,
     note:"Kanji: 灰色. Ash + color. Describes the color of ashes.",
     example:"灰色(はいいろ)の雲(くも)が出(で)ています。",
     exampleSrc:"Gray clouds are forming.",
     funFact:"The Japanese color system adds 色(いろ) (color) to many base words. Ash-color, skin-color (肌色(はだいろ)), tea-color (茶色(ちゃいろ) = brown). This compound pattern is very productive for describing subtle color variations."},

    {type:"teach", trg:"黄色(きいろ)い", src:"yellow", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 黄色い. One of the few color i-adjectives.",
     example:"黄色(きいろ)いバナナを買(か)いました。",
     exampleSrc:"I bought a yellow banana.",
     funFact:"Japanese traffic lights have a green light called 'aoi' (blue) rather than 'midori' (green). But the yellow light is always 黄色(きいろ). The blue-green confusion is a unique feature of Japanese color language."},

    {type:"teach", trg:"緑(みどり)", src:"green", pos:"noun", gender:null,
     note:"Kanji: 緑. Originally considered a shade of blue (あお) in Japanese.",
     example:"緑(みどり)の山(やま)がきれいです。",
     exampleSrc:"The green mountains are beautiful.",
     funFact:"Classical Japanese grouped green under あお (blue). Old Japanese had only four color adjectives: 白(しろ)い, 黒(くろ)い, 赤(あか)い, 青(あお)い. Green was 'blue.' This is why traffic lights' green is still called あお信号(しんごう) (blue signal)."},

    {type:"teach", trg:"茶色(ちゃいろ)", src:"brown", pos:"noun", gender:null,
     note:"Kanji: 茶色. Tea + color. Named after the color of tea.",
     example:"茶色(ちゃいろ)の靴(くつ)が好(す)きです。",
     exampleSrc:"I like brown shoes.",
     funFact:"Brown is literally 'tea-colored' in Japanese. Tea culture so deeply influenced Japan that the color of brewed tea became the standard name. Similarly, 'sakura-iro' (cherry blossom color) is a shade of pink."},

    {type:"teach", trg:"白(しろ)", src:"white", pos:"noun", gender:null,
     note:"Noun form of 白(しろ)い. Kanji: 白. The noun is used in compounds.",
     example:"白(しろ)いご飯(はん)を食(た)べます。",
     exampleSrc:"I eat white rice.",
     funFact:"White symbolizes purity and new beginnings in Japan. Brides wear white (白無垢(しろむく)) at Shinto weddings. White rice (白米(はくまい)) is the staple of every meal. The white space in art (余白(よはく)) is considered as important as the painted parts."},

    {type:"teach", trg:"黒(くろ)", src:"black", pos:"noun", gender:null,
     note:"Noun form of 黒(くろ)い. Kanji: 黒. Used in many compounds.",
     example:"黒(くろ)い猫(ねこ)がいます。",
     exampleSrc:"There is a black cat.",
     funFact:"Unlike Western superstition, black cats are considered GOOD luck in Japan. A black cat crossing your path means fortune is coming. The maneki-neko (beckoning cat) in black wards off evil."},

    {type:"teach", trg:"ピンク", src:"pink", pos:"noun", gender:null,
     note:"From English 'pink.' No traditional Japanese i-adjective for pink.",
     example:"ピンクの桜(さくら)が咲(さ)いています。",
     exampleSrc:"Pink cherry blossoms are blooming.",
     funFact:"The traditional Japanese word for pink is 桃色(ももいろ) (momo-iro, peach color). But ピンク has largely replaced it in modern usage. Sakura pink, specifically, is a distinct and culturally important shade."},

    {type:"teach", trg:"素敵(すてき)", src:"wonderful / lovely", pos:"adj", gender:null,
     note:"Na-adjective. Written 素敵 in kanji. Stronger than いい.",
     example:"素敵(すてき)なドレスですね。",
     exampleSrc:"What a lovely dress!",
     funFact:"Suteki is a versatile compliment. It works for clothes, rooms, ideas, and people. It carries a sense of admiration and aesthetic appreciation that 'good' or 'nice' doesn't quite capture."},

    {type:"teach", trg:"かわいい", src:"cute / adorable", pos:"adj", gender:null,
     note:"I-adjective. Perhaps the most famous Japanese adjective worldwide.",
     example:"そのぬいぐるみはかわいいですね。",
     exampleSrc:"That stuffed animal is cute, isn't it?",
     funFact:"Kawaii culture is a global phenomenon. From Hello Kitty to Pikachu, Japan exports cuteness worldwide. The word originally meant 'pitiful' (from 顔映(かおは)ゆし, face-flushing), evolving through 'lovable' to today's 'cute.'"},

    {type:"teach", trg:"かっこいい", src:"cool / good-looking", pos:"adj", gender:null,
     note:"I-adjective. Compound of 格好(かっこう) (appearance) + いい (good).",
     example:"あの車(くるま)はかっこいいです。",
     exampleSrc:"That car is cool.",
     funFact:"Kakkoii is the masculine counterpart to kawaii. Boys want to be kakkoii, girls want to be kawaii (traditionally). Modern usage is flexible: women's fashion, cars, and even robots can all be kakkoii."},

    {type:"teach", trg:"新鮮(しんせん)", src:"fresh", pos:"adj", gender:null,
     note:"Na-adjective. Kanji: 新鮮. New + vivid. For food and air.",
     example:"新鮮(しんせん)な野菜(やさい)を買(か)います。",
     exampleSrc:"I buy fresh vegetables.",
     funFact:"Freshness is paramount in Japanese food culture. Fish at markets is graded by freshness, and some sushi restaurants advertise that fish was alive minutes before serving. The pursuit of shinsen drives the entire food supply chain."},

    {type:"teach", trg:"模様(もよう)", src:"pattern / design", pos:"noun", gender:null,
     note:"Kanji: 模様. Model + shape. Textile and decorative patterns.",
     example:"縞縞(しましま)の模様(もよう)が好(す)きです。",
     exampleSrc:"I like striped patterns.",
     funFact:"Japanese traditional patterns (和柄(わがら) wagara) include ichimatsu (checkerboard), seigaiha (ocean waves), and asanoha (hemp leaf). The Demon Slayer anime revived interest in these ancient patterns globally."},

    {type:"mc", q:"What does 灰色(はいいろ) mean?",
     opts:["gray","pink","brown","beige"], ans:"gray",
     hint:"Literally 'ash-color' in Japanese, the color of ashes."},

    {type:"fb", s:"{1}の桜(さくら)が咲(さ)いています。", a:"ピンク",
     sSrc:"Pink cherry blossoms are blooming.",
     opts:["ピンク","白(しろ)","紫(むらさき)","黄色(きいろ)"],
     hint:"The pale rosy color of cherry blossom petals."},

    {type:"match", pairs:[
      {trg:"緑(みどり)", src:"green"},
      {trg:"茶色(ちゃいろ)", src:"brown"},
      {trg:"紫(むらさき)", src:"purple"},
      {trg:"灰色(はいいろ)", src:"gray"}
    ]},

    {type:"mc", q:"かわいい means:",
     opts:["cute","cool","beautiful","scary"], ans:"cute",
     hint:"Japan's most famous adjective, exported worldwide with kawaii culture."},

    {type:"fb", s:"{1}な野菜(やさい)を買(か)います。", a:"新鮮(しんせん)",
     sSrc:"I buy fresh vegetables.",
     opts:["新鮮(しんせん)","大(おお)きい","新(あたら)しい","素敵(すてき)"],
     hint:"Describes food that is recently harvested and not old."},

    {type:"mc", q:"What is the traditional Japanese name for brown?",
     opts:["tea-color (茶色(ちゃいろ))","earth-color","wood-color","mud-color"], ans:"tea-color (茶色(ちゃいろ))",
     hint:"Named after the c... of a beloved hot beverage in Japan."},

    {type:"mc", q:"かっこいい is best translated as:",
     opts:["cool / good-looking","cute","strange","scary"], ans:"cool / good-looking",
     hint:"The masculine counterpart to kawaii, meaning stylish or admirable."}
  ]
};
export default BATCH4_L_2;
