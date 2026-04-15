// Unit 04 Expansion L03. More Adjectives (i-adj & na-adj)
const LESSON_3 = {
  id:"jav2_u4l3", title:"もっとけいようし", icon:"✨", xp:15, board:true,
  steps:[
    {type:"intro", title:"もっとけいようし",
     desc:"Learn more i-adjectives and your first na-adjectives. Japanese has two adjective types: i-adjectives (native Japanese, end in い) and na-adjectives (often Chinese-origin, need な before nouns).",
     goals:["Use 10+ new descriptive adjectives","Distinguish i-adjectives from na-adjectives","Describe objects and experiences with rich vocabulary"]},

    {type:"teach", trg:"あたらしい", src:"new / fresh", pos:"adj", gender:null,
     note:"I-adjective. Opposite: ふるい (furui, old).\nKanji: 新しい.",
     example:"A: あたらしいくつをかいました。\nB: いいですね！いくらでしたか？",
     exampleSrc:"A: I bought new shoes.\nB: Nice! How much were they?",
     funFact:"新 appears in many compounds: shimbun (新聞, newspaper = new things heard), shinnen (新年, New Year), shinkansen (新幹線, new trunk line = bullet train). The idea of 'new' is deeply valued in Japanese culture."},

    {type:"teach", trg:"ふるい", src:"old (things, not people)", pos:"adj", gender:null,
     note:"I-adjective. For objects only. For people's age, use としをとった.\nKanji: 古い.",
     example:"A: このじしょはふるいです。\nB: あたらしいのをかいましょう。",
     exampleSrc:"A: This dictionary is old.\nB: Let's buy a new one.",
     funFact:"Never use furui for people. It is only for objects and abstract things. Furui tomodachi (old friend) is fine because it means 'long-time friend.' But furui hito (old person) sounds like you are calling them a relic. Use otoshiyori (elderly person) instead."},

    {type:"teach", trg:"いい", src:"good / fine", pos:"adj", gender:null,
     note:"Irregular i-adjective. Changes to よ- in conjugation: よかった (was good), よくない (not good).",
     example:"A: このレストランはいいですよ。\nB: じゃ、いきましょう！",
     exampleSrc:"A: This restaurant is good!\nB: Then let's go!",
     funFact:"Ii is one of few irregular adjectives. Its old form was yoi, which survives in conjugation: yokatta (was good), yoku nai (not good). Ii desu can mean 'it's good' or 'no thanks' depending on tone. This ambiguity confuses many foreigners."},

    {type:"teach", trg:"わるい", src:"bad / wrong", pos:"adj", gender:null,
     note:"I-adjective. Opposite of いい. Also used as an informal apology.\nKanji: 悪い.",
     example:"A: てんきがわるいですね。\nB: うん、あめがふっています。",
     exampleSrc:"A: The weather is bad.\nB: Yeah, it's raining.",
     funFact:"Warui as an apology (warui, warui = my bad) is casual male speech. The kanji 悪 appears in akuma (devil = evil demon) and akui (malice = evil intention). Despite this, warui in daily speech is usually mild: bad weather, bad results, my mistake."},

    {type:"mc", q:"ふるい should NOT be used for:", opts:["An old book","An old building","An old person","An old car"], ans:"An old person",
     hint:"This adjective is only for things, not for describing elderly people."},

    {type:"teach", trg:"ながい", src:"long", pos:"adj", gender:null,
     note:"I-adjective. Opposite: みじかい (mijikai, short).\nKanji: 長い.",
     example:"A: ながいえいがでしたね。\nB: うん、さんじかんもありました。",
     exampleSrc:"A: It was a long movie.\nB: Yeah, it was three whole hours.",
     funFact:"長 appears in chousen (challenge = long battle), chouki (long period), and shachou (company president = senior/longest leader). Nagai covers physical length and time duration, just like English 'long.'"},

    {type:"teach", trg:"みじかい", src:"short (length / time)", pos:"adj", gender:null,
     note:"I-adjective. For length and duration. Not for height (use ひくい).\nKanji: 短い.",
     example:"A: にほんのなつはみじかいですか？\nB: いいえ、けっこうながいです。",
     exampleSrc:"A: Is the Japanese summer short?\nB: No, it's quite long.",
     funFact:"Mijikai covers short length and short time. Short hair: mijikai kami. Short vacation: mijikai yasumi. But for short height, use hikui (low) or se ga hikui (height is low), never mijikai."},

    {type:"teach", trg:"きれい", src:"beautiful / clean", pos:"adj", gender:null,
     note:"NA-adjective (despite ending in い). Uses な before nouns: きれいな花.\nKanji: 綺麗.",
     example:"A: きれいなはなですね。\nB: さくらです。にほんのはなです。",
     exampleSrc:"A: What beautiful flowers.\nB: They are cherry blossoms. Japan's flower.",
     funFact:"Kirei looks like an i-adjective but is actually a na-adjective. This is the most common beginner trap. You must say kirei NA hana (beautiful flower), not kirei hana. Kirei covers both 'beautiful' and 'clean,' reflecting how cleanliness is aesthetically valued in Japan."},

    {type:"teach", trg:"しずか", src:"quiet / calm", pos:"adj", gender:null,
     note:"NA-adjective. Uses な before nouns: しずかなまち.\nKanji: 静か.",
     example:"A: しずかなまちですね。\nB: はい、とてもすみやすいです。",
     exampleSrc:"A: It's a quiet town.\nB: Yes, it's very easy to live in.",
     funFact:"Shizuka represents the Japanese aesthetic value of tranquility. Shizuka na mori (quiet forest), shizuka na yoru (quiet night). Japanese temples and gardens are designed around shizukesa (quietness). Noise in these spaces is considered deeply disrespectful."},

    {type:"fb", s:"{1}なまちですね。(It's a quiet town.)",
     a:["しずか"],
     opts:["しずか","しずかい","しずかな","きれい"],
     hint:"The na-adjective base form that means 'quiet.' Before desu, use the base form without na.",
     sSrc:"It's a quiet town."},

    {type:"teach", trg:"にぎやか", src:"lively / bustling", pos:"adj", gender:null,
     note:"NA-adjective. Opposite of しずか.\nKanji: 賑やか.",
     example:"A: とうきょうはにぎやかですね。\nB: はい、とくにしぶやがにぎやかです。",
     exampleSrc:"A: Tokyo is lively, isn't it?\nB: Yes, Shibuya especially is bustling.",
     funFact:"Nigiyaka has a positive connotation: energetic, fun, exciting. It is different from urusai (noisy, negative). A festival is nigiyaka. A screaming neighbor is urusai. Japanese carefully distinguishes between pleasant and unpleasant sounds."},

    {type:"teach", trg:"べんり", src:"convenient / handy", pos:"adj", gender:null,
     note:"NA-adjective. Japan is famous for convenience.\nKanji: 便利.",
     example:"A: このアプリはべんりです。\nB: わたしもダウンロードします。",
     exampleSrc:"A: This app is convenient.\nB: I'll download it too.",
     funFact:"便 (convenience) + 利 (benefit). Japan is a convenience culture: 24-hour konbini (convenience stores), vending machines everywhere, trains that run on time to the second. Benri is one of the highest compliments for any product or service."},

    {type:"teach", trg:"ゆうめい", src:"famous", pos:"adj", gender:null,
     note:"NA-adjective. Pattern: X は ゆうめい です = X is famous.\nKanji: 有名.",
     example:"A: ふじさんはゆうめいですか？\nB: はい、せかいでゆうめいです。",
     exampleSrc:"A: Is Mt. Fuji famous?\nB: Yes, it is famous worldwide.",
     funFact:"有 (exist/have) + 名 (name). Famous literally means 'having a name.' Mt. Fuji, sushi, and anime are all sekai de yuumei (famous worldwide). The opposite is mumei (無名, nameless = unknown)."},

    {type:"teach", trg:"たいせつ", src:"important / precious", pos:"adj", gender:null,
     note:"NA-adjective. Often used with な before nouns: たいせつなひと (important person).\nKanji: 大切.",
     example:"A: かぞくはたいせつですね。\nB: はい、いちばんたいせつです。",
     exampleSrc:"A: Family is important, right?\nB: Yes, the most important.",
     funFact:"大 (big) + 切 (cut/important). Taisetsu implies something you must protect carefully. Taisetsu na hito (precious person) is a tender way to describe loved ones. It carries more emotional weight than juuyou (important, more factual/dry)."},

    {type:"mc", q:"きれい is tricky because:", opts:["It is a na-adjective despite ending in い","It means both good and bad","It is always negative","It changes meaning with tone"], ans:"It is a na-adjective despite ending in い",
     hint:"Kirei defies expectations. The い spelling looks familiar but the word follows a different grammar class."},

    {type:"tip", title:"I-Adjective vs Na-Adjective",
     text:"I-adjectives end in い and go directly before nouns:\nたかい かばん = expensive bag\nあたらしい くつ = new shoes\n\nNa-adjectives need な before nouns:\nきれいな はな = beautiful flower\nしずかな まち = quiet town\n\nBefore です, both work the same:\nたかいです / きれいです",
     deepDive:{title:"The kirei trap",
      text:"These na-adjectives end in い but are NOT i-adjectives:\nきれい (beautiful)\nゆうめい (famous)\nきらい (dislike)\nていねい (polite)\n\nTest: if the い is part of えい or あい, it is usually a na-adjective. True i-adjective endings have い preceded by a consonant sound: taka-i, ooki-i, naga-i."}},

    {type:"match", pairs:[
      {trg:"あたらしい", src:"new"},
      {trg:"ふるい", src:"old (things)"},
      {trg:"ながい", src:"long"},
      {trg:"みじかい", src:"short"}
    ]},

    {type:"match", pairs:[
      {trg:"きれい", src:"beautiful / clean"},
      {trg:"しずか", src:"quiet"},
      {trg:"べんり", src:"convenient"},
      {trg:"ゆうめい", src:"famous"}
    ]},

    {type:"fb", s:"ふじさんは せかいで {1}です。",
     a:["ゆうめい"],
     opts:["ゆうめい","しずか","べんり","たいせつ"],
     hint:"The na-adjective meaning 'famous' or 'well-known.'",
     sSrc:"Mt. Fuji is famous worldwide."},

    {type:"mc", q:"Which is a na-adjective?", opts:["たかい","おおきい","べんり","あたらしい"], ans:"べんり",
     hint:"Three of these end in い as true i-adjectives. One needs な before nouns."},

    {type:"mc", q:"いい changes to よ- in conjugation. Which is correct for 'was good'?", opts:["いかった","いいだった","よかった","よいかった"], ans:"よかった",
     hint:"The old form yoi surfaces in past tense and negative forms."},
  ]
};
export default LESSON_3;
