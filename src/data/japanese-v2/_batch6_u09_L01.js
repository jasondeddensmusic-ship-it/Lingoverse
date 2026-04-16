// Batch 6 – Unit 09 (A1.2 Shopping): Clothing & Trying On
const BATCH6_L1 = {
  id:"jav2_u09l_b6_1", title:"ふくをかう", icon:"👗", xp:15, board:true,
  steps:[
    {type:"intro", title:"ふくをかう",
     desc:"Learn clothing vocabulary and the phrases needed for shopping at clothing stores. Japan's fashion culture ranges from traditional kimono to cutting-edge Harajuku styles.",
     goals:["Name common clothing items","Ask to try things on and about sizes","Handle clothing store transactions"]},

    {type:"teach", trg:"ふく", src:"clothes / clothing", pos:"noun", gender:null,
     note:"Kanji: 服. ふくをきる = to wear clothes (upper body).\nようふく = Western-style clothes.",
     example:"A: あたらしいふくをかいたいです。\nB: どんなふくをさがしていますか？",
     exampleSrc:"A: I want to buy new clothes.\nB: What kind of clothes are you looking for?",
     funFact:"Japanese uses different verbs for wearing depending on the body part: きる (upper body), はく (lower body/shoes), かぶる (head), する (accessories), はめる (rings/gloves). This precision reflects attention to detail in clothing culture."},

    {type:"teach", trg:"シャツ", src:"shirt", pos:"noun", gender:null,
     note:"Katakana loanword. Tシャツ = T-shirt.\nワイシャツ = dress shirt (from 'white shirt').",
     example:"A: このシャツはいくらですか？\nB: さんぜんえんです。",
     exampleSrc:"A: How much is this shirt?\nB: It is 3,000 yen.",
     funFact:"ワイシャツ comes from 'white shirt,' not 'Y-shirt' as some think. Japanese fashion vocabulary borrows heavily from English: ジーンズ (jeans), スカート (skirt), コート (coat), ジャケット (jacket). But some words like ズボン (trousers) come from French 'jupon.'"},

    {type:"teach", trg:"ズボン", src:"trousers / pants", pos:"noun", gender:null,
     note:"From French 'jupon' (petticoat). Also パンツ (from English).\nズボンをはく = to put on trousers.",
     example:"A: このズボンはちょっとながいです。\nB: みじかいサイズもありますよ。",
     exampleSrc:"A: These trousers are a bit long.\nB: We also have a shorter size.",
     funFact:"ズボン is one of the few French loanwords in daily Japanese. Younger people increasingly use パンツ instead, though パンツ also means underwear. To avoid confusion, context matters. ジーパン (jeans) is a Japanese abbreviation of 'jeans pants.'"},

    {type:"teach", trg:"くつ", src:"shoes", pos:"noun", gender:null,
     note:"Kanji: 靴. くつをはく = to put on shoes.\nくつした = socks (literally: under-shoes).",
     example:"A: くつをぬいでください。\nB: はい、スリッパはありますか？",
     exampleSrc:"A: Please take off your shoes.\nB: Sure, are there slippers?",
     funFact:"Removing shoes (くつをぬぐ) is fundamental Japanese etiquette. Homes, temples, some restaurants, and many schools require it. The genkan (玄関, entryway) is where shoes come off. Putting shoes on the wrong feet is considered very sloppy."},

    {type:"teach", trg:"きてみる", src:"to try wearing", pos:"verb", gender:null,
     note:"きる + みる = to try on (clothes). きてみてもいいですか = may I try it on?\nLiterally: try wearing and see.",
     example:"A: このドレスをきてみてもいいですか？\nB: はい、しちゃくしつはあちらです。",
     exampleSrc:"A: May I try on this dress?\nB: Yes, the fitting room is over there.",
     funFact:"The てみる pattern (verb + try) is incredibly useful: たべてみる (try eating), いってみる (try going), つかってみる (try using). It softens requests and shows willingness to experiment. Japanese shop staff welcome you trying things with どうぞ (go ahead)."},

    {type:"mc", q:"きてみてもいいですか means:", opts:["May I try it on?","How much is it?","Do you have a bigger size?","Where is the exit?"], ans:"May I try it on?",
     hint:"きる means to wear, and てみる means to t... doing something."},

    {type:"teach", trg:"サイズ", src:"size", pos:"noun", gender:null,
     note:"Katakana loanword. S, M, L, LL sizes.\nサイズがあう = the size fits.",
     example:"A: もうすこしおおきいサイズはありますか？\nB: Lサイズがございます。",
     exampleSrc:"A: Do you have a slightly larger size?\nB: We have size L.",
     funFact:"Japanese clothing sizes run smaller than Western sizes. A Japanese L is often equivalent to a Western M. LL (double-L) is a common Japanese size category. For shoes, Japan uses centimeters (26cm, 27cm) rather than abstract size numbers."},

    {type:"teach", trg:"にあう", src:"to suit / to look good on", pos:"verb", gender:null,
     note:"Group 1 verb. よくにあっています = it looks great on you.\nKanji: 似合う.",
     example:"A: このいろ、にあいますか？\nB: とてもにあっていますよ。",
     exampleSrc:"A: Does this color suit me?\nB: It looks great on you.",
     funFact:"にあう (似合う) combines 似 (resemble) and 合 (match). Japanese shop staff are trained in the art of the compliment: おにあいですよ (it suits you) is said generously. The concept of にあう extends beyond fashion to couples: おにあいのふたり (a well-matched pair)."},

    {type:"teach", trg:"ぬぐ", src:"to take off (clothing/shoes)", pos:"verb", gender:null,
     note:"Group 1 verb. くつをぬぐ = to take off shoes.\nKanji: 脱ぐ. Opposite of きる/はく.",
     example:"A: コートをぬいでください。\nB: はい、ここにかけてもいいですか？",
     exampleSrc:"A: Please take off your coat.\nB: Sure, may I hang it here?",
     funFact:"ぬぐ is the universal 'take off' for clothing. The kanji 脱 also appears in だっしゅつ (escape) and だっすい (dehydration). The act of ぬぐ has cultural significance: ぬぐことなく (without taking off, meaning without hiding anything) means being completely honest."},

    {type:"teach", trg:"いろ", src:"color", pos:"noun", gender:null,
     note:"Kanji: 色. なにいろ = what color?\nいろいろ = various (literally: color-color).",
     example:"A: なにいろがすきですか？\nB: あおがすきです。",
     exampleSrc:"A: What color do you like?\nB: I like blue.",
     funFact:"Japanese originally had only four color words: しろい (white), くろい (black), あかい (red), あおい (blue). These are the only colors that are also i-adjectives. Green (みどり) was historically considered a shade of あお, which is why traffic lights say あおしんごう (blue signal) for green."},

    {type:"teach", trg:"ながい", src:"long", pos:"adj", gender:null,
     note:"I-adjective. Opposite: みじかい (short).\nKanji: 長い. ながいかみ = long hair.",
     example:"A: このスカートはながすぎます。\nB: みじかいのもありますよ。",
     exampleSrc:"A: This skirt is too long.\nB: We also have a short one.",
     funFact:"ながい pairs with みじかい for physical length and time duration: ながいじかん (a long time), みじかいやすみ (a short break). The すぎる suffix means 'too much': ながすぎる (too long), みじかすぎる (too short)."},

    {type:"fb", s:"このドレスを{1}もいいですか？\n(May I try on this dress?)", a:"きてみて", opts:["きてみて","きって","ぬいで","かって"], sSrc:"May I try on this dress?",
     hint:"Combine the verb for wearing with the 'try' pattern てみる, then add て for permission."},

    {type:"teach", trg:"みじかい", src:"short (length)", pos:"adj", gender:null,
     note:"I-adjective. Opposite: ながい.\nKanji: 短い. みじかいかみ = short hair.",
     example:"A: もうすこしみじかいズボンがほしいです。\nB: こちらはいかがですか？",
     exampleSrc:"A: I want slightly shorter trousers.\nB: How about these?",
     funFact:"みじかい describes both physical length and time: みじかいいのち (a short life) is a poetic phrase. In fashion, Japanese street style boldly mixes ながい and みじかい. Harajuku fashion often features unexpected length combinations."},

    {type:"mc", q:"にあう describes:", opts:["Something that suits or looks good on you","Something that is too big","Something that is expensive","Something that is the wrong color"], ans:"Something that suits or looks good on you",
     hint:"This verb means a g... match between a person and what they wear."},

    {type:"match", pairs:[
      {trg:"ふく", src:"clothes"},
      {trg:"くつ", src:"shoes"},
      {trg:"サイズ", src:"size"},
      {trg:"いろ", src:"color"},
      {trg:"にあう", src:"to suit"}
    ]},

    {type:"fb", s:"もうすこしおおきい{1}はありますか？\n(Do you have a slightly bigger size?)", a:"サイズ", opts:["サイズ","いろ","かたち","ねだん"], sSrc:"Do you have a slightly bigger size?",
     hint:"The katakana loanword for how big or small something is."},

    {type:"mc", q:"What must you do before entering a Japanese home?", opts:["Take off your shoes (くつをぬぐ)","Bow three times","Say a prayer","Wash your hands"], ans:"Take off your shoes (くつをぬぐ)",
     hint:"Japanese homes require removing footwear at the genkan (entryway)."}
  ]
};
export default BATCH6_L1;
