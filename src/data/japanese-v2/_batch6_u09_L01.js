// Batch 6 – Unit 09 (A1.2 Shopping): Clothing & Trying On
const BATCH6_L1 = {
  id:"jav2_u09l_b6_1", title:"服(ふく)を買(か)う", icon:"👗", xp:15, board:true,
  steps:[
    {type:"intro", title:"服(ふく)を買(か)う",
     desc:"Learn clothing vocabulary and the phrases needed for shopping at clothing stores. Japan's fashion culture ranges from traditional kimono to cutting-edge Harajuku styles.",
     goals:["Name common clothing items","Ask to try things on and about sizes","Handle clothing store transactions"]},

    {type:"teach", trg:"服(ふく)", src:"clothes / clothing", pos:"noun", gender:null,
     note:"Kanji: 服. 服(ふく)を着(き)る = to wear clothes (upper body).\n洋服(ようふく) = Western-style clothes.",
     example:"A: 新(あたら)しい服(ふく)を買(か)いたいです。\nB: どんな服(ふく)を探(さが)していますか？",
     exampleSrc:"A: I want to buy new clothes.\nB: What kind of clothes are you looking for?",
     funFact:"Japanese uses different verbs for wearing depending on the body part: 着(き)る (upper body), 履(は)く (lower body/shoes), 被(かぶ)る (head), する (accessories), はめる (rings/gloves). This precision reflects attention to detail in clothing culture."},

    {type:"teach", trg:"シャツ", src:"shirt", pos:"noun", gender:null,
     note:"Katakana loanword. Tシャツ = T-shirt.\nワイシャツ = dress shirt (from 'white shirt').",
     example:"A: このシャツはいくらですか？\nB: 3000円(えん)です。",
     exampleSrc:"A: How much is this shirt?\nB: It is 3,000 yen.",
     funFact:"ワイシャツ comes from 'white shirt,' not 'Y-shirt' as some think. Japanese fashion vocabulary borrows heavily from English: ジーンズ (jeans), スカート (skirt), コート (coat), ジャケット (jacket). But some words like ズボン (trousers) come from French 'jupon.'"},

    {type:"teach", trg:"ズボン", src:"trousers / pants", pos:"noun", gender:null,
     note:"From French 'jupon' (petticoat). Also パンツ (from English).\nズボンを履(は)く = to put on trousers.",
     example:"A: このズボンはちょっと長(なが)いです。\nB: 短(みじか)いサイズもありますよ。",
     exampleSrc:"A: These trousers are a bit long.\nB: We also have a shorter size.",
     funFact:"ズボン is one of the few French loanwords in daily Japanese. Younger people increasingly use パンツ instead, though パンツ also means underwear. To avoid confusion, context matters. ジーパン (jeans) is a Japanese abbreviation of 'jeans pants.'"},

    {type:"teach", trg:"靴(くつ)", src:"shoes", pos:"noun", gender:null,
     note:"Kanji: 靴. 靴(くつ)を履(は)く = to put on shoes.\n靴下(くつした) = socks (literally: under-shoes).",
     example:"A: 靴(くつ)を脱(ぬ)いでください。\nB: はい、スリッパはありますか？",
     exampleSrc:"A: Please take off your shoes.\nB: Sure, are there slippers?",
     funFact:"Removing shoes (靴(くつ)を脱(ぬ)ぐ) is fundamental Japanese etiquette. Homes, temples, some restaurants, and many schools require it. The 玄関(げんかん) (entryway) is where shoes come off. Putting shoes on the wrong feet is considered very sloppy."},

    {type:"teach", trg:"着(き)てみる", src:"to try wearing", pos:"verb", gender:null,
     note:"着(き)る + みる = to try on (clothes). 着(き)てみてもいいですか = may I try it on?\nLiterally: try wearing and see.",
     example:"A: このドレスを着(き)てみてもいいですか？\nB: はい、試着室(しちゃくしつ)はあちらです。",
     exampleSrc:"A: May I try on this dress?\nB: Yes, the fitting room is over there.",
     funFact:"The てみる pattern (verb + try) is incredibly useful: 食(た)べてみる (try eating), 行(い)ってみる (try going), 使(つか)ってみる (try using). It softens requests and shows willingness to experiment. Japanese shop staff welcome you trying things with どうぞ (go ahead)."},

    {type:"mc", q:"着(き)てみてもいいですか means:", opts:["May I try it on?","How much is it?","Do you have a bigger size?","Where is the exit?"], ans:"May I try it on?",
     hint:"着(き)る means to wear, and てみる means to t... doing something."},

    {type:"teach", trg:"サイズ", src:"size", pos:"noun", gender:null,
     note:"Katakana loanword. S, M, L, LL sizes.\nサイズが合(あ)う = the size fits.",
     example:"A: もう少(すこ)し大(おお)きいサイズはありますか？\nB: Lサイズがございます。",
     exampleSrc:"A: Do you have a slightly larger size?\nB: We have size L.",
     funFact:"Japanese clothing sizes run smaller than Western sizes. A Japanese L is often equivalent to a Western M. LL (double-L) is a common Japanese size category. For shoes, Japan uses centimeters (26cm, 27cm) rather than abstract size numbers."},

    {type:"teach", trg:"似合(にあ)う", src:"to suit / to look good on", pos:"verb", gender:null,
     note:"Group 1 verb. よく似合(にあ)っています = it looks great on you.\nKanji: 似合う.",
     example:"A: この色(いろ)、似合(にあ)いますか？\nB: とても似合(にあ)っていますよ。",
     exampleSrc:"A: Does this color suit me?\nB: It looks great on you.",
     funFact:"似合(にあ)う combines 似(に) (resemble) and 合(あ) (match). Japanese shop staff are trained in the art of the compliment: お似合(にあ)いですよ (it suits you) is said generously. The concept of 似合(にあ)う extends beyond fashion to couples: お似合(にあ)いの二人(ふたり) (a well-matched pair)."},

    {type:"teach", trg:"脱(ぬ)ぐ", src:"to take off (clothing/shoes)", pos:"verb", gender:null,
     note:"Group 1 verb. 靴(くつ)を脱(ぬ)ぐ = to take off shoes.\nKanji: 脱ぐ. Opposite of 着(き)る/履(は)く.",
     example:"A: コートを脱(ぬ)いでください。\nB: はい、ここにかけてもいいですか？",
     exampleSrc:"A: Please take off your coat.\nB: Sure, may I hang it here?",
     funFact:"脱(ぬ)ぐ is the universal 'take off' for clothing. The kanji 脱 also appears in 脱出(だっしゅつ) (escape) and 脱水(だっすい) (dehydration). The act of 脱(ぬ)ぐ has cultural significance: 脱(ぬ)ぐことなく (without taking off, meaning without hiding anything) means being completely honest."},

    {type:"teach", trg:"色(いろ)", src:"color", pos:"noun", gender:null,
     note:"Kanji: 色. 何色(なにいろ) = what color?\nいろいろ = various (literally: color-color).",
     example:"A: 何色(なにいろ)が好(す)きですか？\nB: 青(あお)が好(す)きです。",
     exampleSrc:"A: What color do you like?\nB: I like blue.",
     funFact:"Japanese originally had only four color words: 白(しろ)い (white), 黒(くろ)い (black), 赤(あか)い (red), 青(あお)い (blue). These are the only colors that are also i-adjectives. Green (緑(みどり)) was historically considered a shade of 青(あお), which is why traffic lights say 青(あお)信号(しんごう) (blue signal) for green."},

    {type:"teach", trg:"長(なが)い", src:"long", pos:"adj", gender:null,
     note:"I-adjective. Opposite: 短(みじか)い (short).\nKanji: 長い. 長(なが)い髪(かみ) = long hair.",
     example:"A: このスカートは長(なが)すぎます。\nB: 短(みじか)いのもありますよ。",
     exampleSrc:"A: This skirt is too long.\nB: We also have a short one.",
     funFact:"長(なが)い pairs with 短(みじか)い for physical length and time duration: 長(なが)い時間(じかん) (a long time), 短(みじか)い休(やす)み (a short break). The すぎる suffix means 'too much': 長(なが)すぎる (too long), 短(みじか)すぎる (too short)."},

    {type:"fb", s:"このドレスを{1}もいいですか？\n(May I try on this dress?)", a:"着(き)てみて", opts:["着(き)てみて","着(き)って","脱(ぬ)いで","買(か)って"], sSrc:"May I try on this dress?",
     hint:"Combine the verb for wearing with the 'try' pattern てみる, then add て for permission."},

    {type:"teach", trg:"短(みじか)い", src:"short (length)", pos:"adj", gender:null,
     note:"I-adjective. Opposite: 長(なが)い.\nKanji: 短い. 短(みじか)い髪(かみ) = short hair.",
     example:"A: もう少(すこ)し短(みじか)いズボンがほしいです。\nB: こちらはいかがですか？",
     exampleSrc:"A: I want slightly shorter trousers.\nB: How about these?",
     funFact:"短(みじか)い describes both physical length and time: 短(みじか)い命(いのち) (a short life) is a poetic phrase. In fashion, Japanese street style boldly mixes 長(なが)い and 短(みじか)い. Harajuku fashion often features unexpected length combinations."},

    {type:"mc", q:"似合(にあ)う describes:", opts:["Something that suits or looks good on you","Something that is too big","Something that is expensive","Something that is the wrong color"], ans:"Something that suits or looks good on you",
     hint:"This verb means a g... match between a person and what they wear."},

    {type:"match", pairs:[
      {trg:"服(ふく)", src:"clothes"},
      {trg:"靴(くつ)", src:"shoes"},
      {trg:"サイズ", src:"size"},
      {trg:"色(いろ)", src:"color"},
      {trg:"似合(にあ)う", src:"to suit"}
    ]},

    {type:"fb", s:"もう少(すこ)し大(おお)きい{1}はありますか？\n(Do you have a slightly bigger size?)", a:"サイズ", opts:["サイズ","色(いろ)","形(かたち)","値段(ねだん)"], sSrc:"Do you have a slightly bigger size?",
     hint:"The katakana loanword for how big or small something is."},

    {type:"mc", q:"What must you do before entering a Japanese home?", opts:["Take off your shoes (靴(くつ)を脱(ぬ)ぐ)","Bow three times","Say a prayer","Wash your hands"], ans:"Take off your shoes (靴(くつ)を脱(ぬ)ぐ)",
     hint:"Japanese homes require removing footwear at the genkan (entryway)."}
  ]
};
export default BATCH6_L1;
