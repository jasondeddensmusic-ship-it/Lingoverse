// Batch 4 — Unit 04 Lesson 2: More Colors & Describing Things
const BATCH4_L_2 = {
  id:"jav2_u04l_b4_2", title:"もっといろ", icon:"🎨", xp:15, board:true,
  steps:[
    {type:"intro", title:"もっといろとひょうげん",
     desc:"Expand your color vocabulary and learn to combine adjectives to describe things more precisely.",
     goals:["Learn additional color words","Combine size and color descriptions","Use no-adjective patterns for materials"]},

    {type:"teach", trg:"むらさき", src:"purple", pos:"noun", gender:null,
     note:"Kanji: 紫. Used as a noun (color name) or na-adjective.",
     example:"むらさきのはなはきれいです。",
     exampleSrc:"Purple flowers are beautiful.",
     funFact:"Purple was the color of royalty in ancient Japan, just like in Europe. Only the highest-ranking nobles could wear murasaki. The famous 11th-century author Murasaki Shikibu was named after this noble color."},

    {type:"teach", trg:"オレンジ", src:"orange (color)", pos:"noun", gender:null,
     note:"From English 'orange.' Used for both the color and the fruit.",
     example:"オレンジのTシャツをきています。",
     exampleSrc:"I am wearing an orange T-shirt.",
     funFact:"Traditional Japanese had no single word for orange. The color was called 橙色 (daidai-iro, from the bitter orange tree). Modern Japanese uses the English loanword for convenience."},

    {type:"teach", trg:"はいいろ", src:"gray", pos:"noun", gender:null,
     note:"Kanji: 灰色. Ash + color. Describes the color of ashes.",
     example:"はいいろのくもがでています。",
     exampleSrc:"Gray clouds are forming.",
     funFact:"The Japanese color system adds いろ (color) to many base words. Ash-color, skin-color (肌色), tea-color (茶色 = brown). This compound pattern is very productive for describing subtle color variations."},

    {type:"teach", trg:"きいろい", src:"yellow", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 黄色い. One of the few color i-adjectives.",
     example:"きいろいバナナをかいました。",
     exampleSrc:"I bought a yellow banana.",
     funFact:"Japanese traffic lights have a green light called 'aoi' (blue) rather than 'midori' (green). But the yellow light is always きいろ. The blue-green confusion is a unique feature of Japanese color language."},

    {type:"teach", trg:"みどり", src:"green", pos:"noun", gender:null,
     note:"Kanji: 緑. Originally considered a shade of blue (あお) in Japanese.",
     example:"みどりのやまがきれいです。",
     exampleSrc:"The green mountains are beautiful.",
     funFact:"Classical Japanese grouped green under あお (blue). Old Japanese had only four color adjectives: shiroi, kuroi, akai, aoi. Green was 'blue.' This is why traffic lights' green is still called あお信号 (blue signal)."},

    {type:"teach", trg:"ちゃいろ", src:"brown", pos:"noun", gender:null,
     note:"Kanji: 茶色. Tea + color. Named after the color of tea.",
     example:"ちゃいろのくつがすきです。",
     exampleSrc:"I like brown shoes.",
     funFact:"Brown is literally 'tea-colored' in Japanese. Tea culture so deeply influenced Japan that the color of brewed tea became the standard name. Similarly, 'sakura-iro' (cherry blossom color) is a shade of pink."},

    {type:"teach", trg:"しろ", src:"white", pos:"noun", gender:null,
     note:"Noun form of しろい. Kanji: 白. The noun is used in compounds.",
     example:"しろいごはんをたべます。",
     exampleSrc:"I eat white rice.",
     funFact:"White symbolizes purity and new beginnings in Japan. Brides wear white (白無垢) at Shinto weddings. White rice (白米) is the staple of every meal. The white space in art (余白) is considered as important as the painted parts."},

    {type:"teach", trg:"くろ", src:"black", pos:"noun", gender:null,
     note:"Noun form of くろい. Kanji: 黒. Used in many compounds.",
     example:"くろいねこがいます。",
     exampleSrc:"There is a black cat.",
     funFact:"Unlike Western superstition, black cats are considered GOOD luck in Japan. A black cat crossing your path means fortune is coming. The maneki-neko (beckoning cat) in black wards off evil."},

    {type:"teach", trg:"ピンク", src:"pink", pos:"noun", gender:null,
     note:"From English 'pink.' No traditional Japanese i-adjective for pink.",
     example:"ピンクのさくらがさいています。",
     exampleSrc:"Pink cherry blossoms are blooming.",
     funFact:"The traditional Japanese word for pink is 桃色 (momo-iro, peach color). But ピンク has largely replaced it in modern usage. Sakura pink, specifically, is a distinct and culturally important shade."},

    {type:"teach", trg:"すてき", src:"wonderful / lovely", pos:"adj", gender:null,
     note:"Na-adjective. Written 素敵 in kanji. Stronger than いい.",
     example:"すてきなドレスですね。",
     exampleSrc:"What a lovely dress!",
     funFact:"Suteki is a versatile compliment. It works for clothes, rooms, ideas, and people. It carries a sense of admiration and aesthetic appreciation that 'good' or 'nice' doesn't quite capture."},

    {type:"teach", trg:"かわいい", src:"cute / adorable", pos:"adj", gender:null,
     note:"I-adjective. Perhaps the most famous Japanese adjective worldwide.",
     example:"そのぬいぐるみはかわいいですね。",
     exampleSrc:"That stuffed animal is cute, isn't it?",
     funFact:"Kawaii culture is a global phenomenon. From Hello Kitty to Pikachu, Japan exports cuteness worldwide. The word originally meant 'pitiful' (from 顔映ゆし, face-flushing), evolving through 'lovable' to today's 'cute.'"},

    {type:"teach", trg:"かっこいい", src:"cool / good-looking", pos:"adj", gender:null,
     note:"I-adjective. Compound of 格好 (appearance) + いい (good).",
     example:"あのくるまはかっこいいです。",
     exampleSrc:"That car is cool.",
     funFact:"Kakkoii is the masculine counterpart to kawaii. Boys want to be kakkoii, girls want to be kawaii (traditionally). Modern usage is flexible: women's fashion, cars, and even robots can all be kakkoii."},

    {type:"teach", trg:"しんせん", src:"fresh", pos:"adj", gender:null,
     note:"Na-adjective. Kanji: 新鮮. New + vivid. For food and air.",
     example:"しんせんなやさいをかいます。",
     exampleSrc:"I buy fresh vegetables.",
     funFact:"Freshness is paramount in Japanese food culture. Fish at markets is graded by freshness, and some sushi restaurants advertise that fish was alive minutes before serving. The pursuit of shinsen drives the entire food supply chain."},

    {type:"teach", trg:"もよう", src:"pattern / design", pos:"noun", gender:null,
     note:"Kanji: 模様. Model + shape. Textile and decorative patterns.",
     example:"しましまのもようがすきです。",
     exampleSrc:"I like striped patterns.",
     funFact:"Japanese traditional patterns (和柄 wagara) include ichimatsu (checkerboard), seigaiha (ocean waves), and asanoha (hemp leaf). The Demon Slayer anime revived interest in these ancient patterns globally."},

    {type:"mc", q:"What does はいいろ mean?",
     opts:["gray","pink","brown","beige"], ans:"gray",
     hint:"Literally 'ash-color' in Japanese, the color of ashes."},

    {type:"fb", s:"{1}のさくらがさいています。", a:"ピンク",
     sSrc:"Pink cherry blossoms are blooming.",
     opts:["ピンク","しろ","むらさき","きいろ"],
     hint:"The pale rosy color of cherry blossom petals."},

    {type:"match", pairs:[
      {trg:"みどり", src:"green"},
      {trg:"ちゃいろ", src:"brown"},
      {trg:"むらさき", src:"purple"},
      {trg:"はいいろ", src:"gray"}
    ]},

    {type:"mc", q:"かわいい means:",
     opts:["cute","cool","beautiful","scary"], ans:"cute",
     hint:"Japan's most famous adjective, exported worldwide with kawaii culture."},

    {type:"fb", s:"{1}なやさいをかいます。", a:"しんせん",
     sSrc:"I buy fresh vegetables.",
     opts:["しんせん","おおきい","あたらしい","すてき"],
     hint:"Describes food that is recently harvested and not old."},

    {type:"mc", q:"What is the traditional Japanese name for brown?",
     opts:["tea-color (ちゃいろ)","earth-color","wood-color","mud-color"], ans:"tea-color (ちゃいろ)",
     hint:"Named after the c... of a beloved hot beverage in Japan."},

    {type:"mc", q:"かっこいい is best translated as:",
     opts:["cool / good-looking","cute","strange","scary"], ans:"cool / good-looking",
     hint:"The masculine counterpart to kawaii, meaning stylish or admirable."}
  ]
};
export default BATCH4_L_2;
