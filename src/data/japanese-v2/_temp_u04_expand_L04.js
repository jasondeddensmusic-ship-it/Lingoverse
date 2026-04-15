// Unit 04 Expansion L06 — More Counters & Practical Counting
const LESSON_6 = {
  id:"jav2_u4l6", title:"もっとかぞえよう", icon:"🔢", xp:15, board:true,
  steps:[
    {type:"intro", title:"もっとかぞえよう",
     desc:"Expand your counting skills with more essential counters and the native Japanese counting system (hitotsu, futatsu). Japanese uses about 500 counters, but mastering just 10 covers most daily situations.",
     goals:["Use the native Japanese general counting system","Learn counters for people (nin), machines (dai), and drinks (hai)","Count confidently in real-world situations"]},

    {type:"teach", trg:"ひとつ", src:"one (general counter)", pos:"num", gender:null,
     note:"Native Japanese counting. Used for general objects when you do not know the specific counter.",
     example:"A: りんごをひとつください。\nB: はい、ひとつですね。",
     exampleSrc:"A: One apple, please.\nB: Yes, one, right?",
     funFact:"The hitotsu/futatsu system (native Japanese numbers) is the universal backup counter. When unsure which counter to use, these work for almost any object. They only go up to 10 (toou), after which you switch to the Sino-Japanese system."},

    {type:"teach", trg:"ふたつ", src:"two (general counter)", pos:"num", gender:null,
     note:"Native Japanese for 'two things.' Works as a safe general counter.",
     example:"A: おにぎりをふたつおねがいします。\nB: はい、ふたつですね。",
     exampleSrc:"A: Two rice balls, please.\nB: Yes, two, right?",
     funFact:"Futatsu is the safe choice when ordering food and you are not sure of the counter. At convenience stores and restaurants, using hitotsu, futatsu, mittsu is always understood and never wrong. It is the 'just counting things' system."},

    {type:"teach", trg:"みっつ", src:"three (general counter)", pos:"num", gender:null,
     note:"Native Japanese for 'three things.'",
     example:"A: たまごをみっつかいました。\nB: りょうりしますか？",
     exampleSrc:"A: I bought three eggs.\nB: Are you going to cook?",
     funFact:"The native counting goes: hitotsu (1), futatsu (2), mittsu (3), yottsu (4), itsutsu (5), muttsu (6), nanatsu (7), yattsu (8), kokonotsu (9), too (10). These are ancient Yamato-kotoba (native Japanese words) predating Chinese influence."},

    {type:"teach", trg:"よっつ", src:"four (general counter)", pos:"num", gender:null,
     note:"Native Japanese for 'four things.' Avoids the unlucky shi reading.",
     example:"A: ケーキをよっつたべました。\nB: たべすぎですよ！",
     exampleSrc:"A: I ate four pieces of cake.\nB: That's too much!",
     funFact:"Yottsu neatly avoids the shi (death) problem that plagues the number four. In the native counting system, four was always yottsu, never anything resembling shi. This is one reason why the native system survives alongside the Chinese system."},

    {type:"mc", q:"When should you use the hitotsu/futatsu system?", opts:["Only for food","When you don't know the specific counter","Only in formal speech","Only for numbers above 10"], ans:"When you don't know the specific counter",
     hint:"This native system is the safe universal backup for counting objects."},

    {type:"teach", trg:"いつつ", src:"five (general counter)", pos:"num", gender:null,
     note:"Native Japanese for 'five things.'",
     example:"A: りんごをいつつください。\nB: いつつですね。はい、どうぞ。",
     exampleSrc:"A: Five apples, please.\nB: Five, right? Here you go.",
     funFact:"Itsutsu appears in the famous Musashi novel Gorin no Sho (Book of Five Rings), where go is the Sino-Japanese five and itsutsu is the native five. The native system carries a more traditional, Japanese feel compared to the Chinese-origin numbers."},

    {type:"teach", trg:"にん", src:"(counter for people)", pos:"part", gender:null,
     note:"Counter for people. Irregular: ひとり (1 person), ふたり (2 people). Three onwards: さんにん, よにん, etc.\nKanji: 人.",
     example:"A: なんにんですか？\nB: よにんです。",
     exampleSrc:"A: How many people?\nB: Four people.",
     funFact:"Hitori (one person) and futari (two people) use the native Japanese counting system. From three onwards, it switches to Sino-Japanese: san-nin, yo-nin, go-nin. This mixing of systems is unique to the people counter and must be memorized."},

    {type:"teach", trg:"ひとり", src:"one person / alone", pos:"num", gender:null,
     note:"Irregular reading. Also means 'alone.' ひとりで = by myself.\nKanji: 一人.",
     example:"A: ひとりでいきますか？\nB: いいえ、ともだちといきます。",
     exampleSrc:"A: Are you going alone?\nB: No, I'm going with a friend.",
     funFact:"Hitori carries emotional weight beyond just counting. Hitori de (alone) can sound lonely or independent depending on context. Hitori-gurashi (living alone) is a huge life milestone in Japan. Many TV shows and manga explore hitori life."},

    {type:"teach", trg:"ふたり", src:"two people", pos:"num", gender:null,
     note:"Irregular reading. Often implies a couple or pair.\nKanji: 二人.",
     example:"A: ふたりでどこにいきますか？\nB: レストランにいきます。",
     exampleSrc:"A: Where are you two going?\nB: We're going to a restaurant.",
     funFact:"Futari often implies a romantic couple. 'Futari de' (just the two of us) has a romantic nuance. The phrase 'futari-kiri' (only two people, no one else) is common in love songs and drama. Asking 'futari de?' at a restaurant means 'table for two?'"},

    {type:"fb", s:"___ですか？(How many people?)",
     a:["なんにん"],
     opts:["なんにん","なんこ","なんまい","なんぼん"],
     hint:"The question form using the people counter.",
     sSrc:"How many people?"},

    {type:"teach", trg:"だい", src:"(counter for machines/vehicles)", pos:"part", gender:null,
     note:"Counter for cars, bicycles, computers, TVs, and other machines.\nKanji: 台.",
     example:"A: くるまはなんだいありますか？\nB: いちだいです。",
     exampleSrc:"A: How many cars do you have?\nB: One.",
     funFact:"台 originally meant a platform or stand. Machines sit on platforms, so dai became the machine counter. Ichi-dai, ni-dai, san-dai... No sound changes, making it one of the easiest counters to use."},

    {type:"teach", trg:"はい", src:"(counter for cups/glasses of drink)", pos:"part", gender:null,
     note:"Counter for drinks in cups, glasses, or bowls. Sound changes: いっぱい (1), さんばい (3).\nKanji: 杯.",
     example:"A: コーヒーをいっぱいおねがいします。\nB: ホットですか？アイスですか？",
     exampleSrc:"A: One coffee, please.\nB: Hot or iced?",
     funFact:"杯 also means 'cup' or 'bowl.' Ippai (one cup) doubles as a word meaning 'full' or 'a lot.' Onaka ga ippai (stomach is full). Sound changes: ippai (1), nihai (2), sanbai (3), yonhai (4), gohai (5), roppai (6), nanahai (7), happai (8)."},

    {type:"teach", trg:"さつ", src:"(counter for books/volumes)", pos:"part", gender:null,
     note:"Counter for bound publications: books, magazines, notebooks.\nKanji: 冊.",
     example:"A: ほんをなんさつかいましたか？\nB: さんさつかいました。",
     exampleSrc:"A: How many books did you buy?\nB: I bought three.",
     funFact:"冊 originally depicted bamboo strips bound together (ancient books). Issatsu (1 book), nisatsu (2 books), sansatsu (3 books). No major sound changes. This counter specifically applies to bound publications, not loose papers (which use mai)."},

    {type:"teach", trg:"かい", src:"(counter for floors/stories)", pos:"part", gender:null,
     note:"Counter for building floors. Pattern: なんかい (what floor?).\nKanji: 階.",
     example:"A: レストランはなんかいですか？\nB: さんかいです。",
     exampleSrc:"A: What floor is the restaurant on?\nB: Third floor.",
     funFact:"Japanese buildings count floors from 1 (ikkai = ground floor). There is no 'ground floor' vs 'first floor' confusion like in British English. Basement floors use chika: chika ikkai (basement 1), chika nikai (basement 2). Elevators show B1, B2 for basements."},

    {type:"mc", q:"ひとり means both:", opts:["One and two","One person and alone","First and last","Small and single"], ans:"One person and alone",
     hint:"This irregular reading carries counting AND emotional meaning."},

    {type:"match", pairs:[
      {trg:"ひとつ", src:"one (thing)"},
      {trg:"ふたつ", src:"two (things)"},
      {trg:"みっつ", src:"three (things)"},
      {trg:"よっつ", src:"four (things)"}
    ]},

    {type:"match", pairs:[
      {trg:"にん", src:"counter: people"},
      {trg:"だい", src:"counter: machines"},
      {trg:"はい", src:"counter: cups/glasses"},
      {trg:"さつ", src:"counter: books"}
    ]},

    {type:"fb", s:"コーヒーを___おねがいします。",
     a:["いっぱい"],
     opts:["いっぱい","いっこ","いちまい","いっさつ"],
     hint:"The counter for one cup of a beverage, with the sound change for 'one.'",
     sSrc:"One coffee, please."},

    {type:"mc", q:"レストランはさんかいです means:", opts:["The restaurant has three tables","The restaurant is on the third floor","The restaurant opens at 3","Three restaurants"], ans:"The restaurant is on the third floor",
     hint:"Kai is the counter for floors/stories of a building."},

    {type:"mc", q:"Which counter pair is irregular?", opts:["さんこ / よんこ","さんまい / よんまい","ひとり / ふたり","さんだい / よんだい"], ans:"ひとり / ふたり",
     hint:"These two use the native Japanese counting system while the rest use Sino-Japanese."},
  ]
};
export default LESSON_6;
