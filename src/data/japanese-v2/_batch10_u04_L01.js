// Batch 10 – Unit 04 (A1.1 How Much?): Counters & Quantities
const BATCH10_L1 = {
  id:"jav2_u04l_b10_1", title:"かぞえかた", icon:"🔢", xp:15, board:true,
  steps:[
    {type:"intro", title:"かぞえかた",
     desc:"Master essential Japanese counter words. Unlike English, Japanese uses specific counters for different types of objects.",
     goals:["Use common counter words correctly","Count flat objects, cylindrical objects, and small items","Understand the general-purpose counter"]},

    {type:"teach", trg:"〜まい", src:"counter for flat objects", pos:"part", gender:null,
     note:"Used for paper, plates, shirts, tickets.\nいちまい、にまい、さんまい...",
     example:"A: かみをさんまいください。\nB: はい、さんまいですね。",
     exampleSrc:"A: Please give me three sheets of paper.\nB: Yes, three sheets.",
     funFact:"まい (枚) is one of the first counters Japanese children learn. It counts anything flat and thin: paper, plates, photos, blankets, shirts. The kanji 枚 originally meant a thin piece of wood, which expanded to all flat things."},

    {type:"teach", trg:"〜ほん", src:"counter for long/cylindrical objects", pos:"part", gender:null,
     note:"Used for bottles, pens, trees, roads.\nいっぽん、にほん、さんぼん (sound changes!).",
     example:"A: ペンをにほんかいました。\nB: なにいろですか？",
     exampleSrc:"A: I bought two pens.\nB: What color are they?",
     funFact:"ほん (本) is tricky because of sound changes: いっぽん (1), にほん (2), さんぼん (3). The kanji 本 means 'origin' or 'book,' but as a counter it measures long things: pencils, trees, roads, rivers, and even phone calls."},

    {type:"teach", trg:"〜さつ", src:"counter for bound volumes", pos:"part", gender:null,
     note:"Used for books, notebooks, magazines.\nいっさつ、にさつ、さんさつ...",
     example:"A: ほんをなんさつかりましたか？\nB: ごさつかりました。",
     exampleSrc:"A: How many books did you borrow?\nB: I borrowed five.",
     funFact:"さつ (冊) specifically counts things that are bound together like books. The kanji shows bamboo strips tied together, which was the ancient Chinese form of a 'book.' Magazines, manga volumes, and notebooks all use さつ."},

    {type:"teach", trg:"〜だい", src:"counter for machines/vehicles", pos:"part", gender:null,
     note:"Used for cars, computers, TVs, bicycles.\nいちだい、にだい、さんだい...",
     example:"A: くるまはなんだいありますか？\nB: にだいあります。",
     exampleSrc:"A: How many cars do you have?\nB: We have two.",
     funFact:"だい (台) originally meant a stand or platform, then expanded to count machines placed on stands. Today it covers cars, buses, computers, and washing machines. Japanese car dealerships display しんしゃ (new cars) counted in だい."},

    {type:"teach", trg:"〜はい", src:"counter for cups/glasses/bowls", pos:"part", gender:null,
     note:"Used for drinks in containers.\nいっぱい、にはい、さんばい (sound changes!).",
     example:"A: コーヒーをにはいおねがいします。\nB: ホットですか、アイスですか？",
     exampleSrc:"A: Two cups of coffee, please.\nB: Hot or iced?",
     funFact:"はい (杯) counts things in cups, glasses, or bowls. It has tricky sound changes: いっぱい (1), にはい (2), さんばい (3). いっぱい also means 'full' or 'a lot,' so いっぱいいっぱい means 'completely full' or 'at my limit.'"},

    {type:"teach", trg:"〜こ", src:"counter for small objects", pos:"part", gender:null,
     note:"General counter for small, round-ish items.\nいっこ、にこ、さんこ...",
     example:"A: りんごをいっこください。\nB: はい、どうぞ。",
     exampleSrc:"A: One apple, please.\nB: Here you go.",
     funFact:"こ (個) is one of the most versatile counters, used for eggs, apples, erasers, and other small objects. When in doubt about which counter to use for a small item, こ is usually safe. The kanji 個 means 'individual piece.'"},

    {type:"teach", trg:"〜にん", src:"counter for people", pos:"part", gender:null,
     note:"ひとり (1), ふたり (2), さんにん (3), よにん (4)...\nSpecial readings for 1 and 2!",
     example:"A: なんにんかぞくですか？\nB: よにんかぞくです。",
     exampleSrc:"A: How many people are in your family?\nB: A family of four.",
     funFact:"にん (人) has special readings for 1 and 2: ひとり and ふたり use native Japanese numbers, while さんにん onward uses Chinese-origin numbers. At restaurants, staff ask なんめいさまですか (how many guests?), using the polite counter めい instead of にん."},

    {type:"teach", trg:"〜つ", src:"general counter (1-9)", pos:"part", gender:null,
     note:"Native Japanese counting: ひとつ、ふたつ、みっつ...\nOnly goes up to とお (10).",
     example:"A: みかんをみっつください。\nB: はい、みっつですね。",
     exampleSrc:"A: Three mandarin oranges, please.\nB: Yes, three.",
     funFact:"The つ counter uses native Japanese numbers and works as a universal fallback when you forget the specific counter. However, it only goes to とお (10). After that, you need specific counters. Children learn ひとつ、ふたつ through counting songs."},

    {type:"mc", q:"Which counter would you use for books?", opts:["〜さつ","〜まい","〜ほん","〜こ"], ans:"〜さつ",
     hint:"This counter is specifically for bound volumes like books, notebooks, and magazines."},

    {type:"fb", s:"コーヒーを{1}おねがいします。\n(Two cups of coffee, please.)", a:"にはい", opts:["にはい","にほん","にまい","にこ"], sSrc:"Two cups of coffee, please.",
     hint:"This counter is used for drinks in cups, glasses, or bowls."},

    {type:"match", pairs:[
      {trg:"〜まい", src:"flat objects"},
      {trg:"〜ほん", src:"long objects"},
      {trg:"〜だい", src:"machines/vehicles"},
      {trg:"〜さつ", src:"books/volumes"}
    ]},

    {type:"mc", q:"How do you say 'one person' in Japanese?", opts:["ひとり","いちにん","いっこ","ひとつ"], ans:"ひとり",
     hint:"The counter for people has special native Japanese readings for 1 and 2."}
  ]
};
export default BATCH10_L1;
