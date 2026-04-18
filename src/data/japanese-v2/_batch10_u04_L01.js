// Batch 10 – Unit 04 (A1.1 How Much?): Counters & Quantities
const BATCH10_L1 = {
  id:"jav2_u04l_b10_1", title:"数(かぞ)え方(かた)", icon:"🔢", xp:15, board:true,
  steps:[
    {type:"intro", title:"数(かぞ)え方(かた)",
     desc:"Master essential Japanese counter words. Unlike English, Japanese uses specific counters for different types of objects.",
     goals:["Use common counter words correctly","Count flat objects, cylindrical objects, and small items","Understand the general-purpose counter"]},

    {type:"teach", trg:"〜枚(まい)", src:"counter for flat objects", pos:"part", gender:null,
     note:"Used for paper, plates, shirts, tickets.\n1枚(まい)、2枚(まい)、3枚(まい)...",
     example:"A: 紙(かみ)を3枚(まい)ください。\nB: はい、3枚(まい)ですね。",
     exampleSrc:"A: Please give me three sheets of paper.\nB: Yes, three sheets.",
     funFact:"枚(まい) is one of the first counters Japanese children learn. It counts anything flat and thin: paper, plates, photos, blankets, shirts. The kanji 枚 originally meant a thin piece of wood, which expanded to all flat things."},

    {type:"teach", trg:"〜本(ほん)", src:"counter for long/cylindrical objects", pos:"part", gender:null,
     note:"Used for bottles, pens, trees, roads.\n1本(いっぽん)、2本(にほん)、3本(さんぼん) (sound changes!).",
     example:"A: ペンを2本(にほん)買(か)いました。\nB: 何色(なにいろ)ですか？",
     exampleSrc:"A: I bought two pens.\nB: What color are they?",
     funFact:"本(ほん) is tricky because of sound changes: 1本(いっぽん) (1), 2本(にほん) (2), 3本(さんぼん) (3). The kanji 本 means 'origin' or 'book,' but as a counter it measures long things: pencils, trees, roads, rivers, and even phone calls."},

    {type:"teach", trg:"〜冊(さつ)", src:"counter for bound volumes", pos:"part", gender:null,
     note:"Used for books, notebooks, magazines.\n1冊(いっさつ)、2冊(にさつ)、3冊(さんさつ)...",
     example:"A: 本(ほん)を何冊(なんさつ)借(か)りましたか？\nB: 5冊(ごさつ)借(か)りました。",
     exampleSrc:"A: How many books did you borrow?\nB: I borrowed five.",
     funFact:"冊(さつ) specifically counts things that are bound together like books. The kanji shows bamboo strips tied together, which was the ancient Chinese form of a 'book.' Magazines, manga volumes, and notebooks all use 冊(さつ)."},

    {type:"teach", trg:"〜台(だい)", src:"counter for machines/vehicles", pos:"part", gender:null,
     note:"Used for cars, computers, TVs, bicycles.\n1台(いちだい)、2台(にだい)、3台(さんだい)...",
     example:"A: 車(くるま)は何台(なんだい)ありますか？\nB: 2台(にだい)あります。",
     exampleSrc:"A: How many cars do you have?\nB: We have two.",
     funFact:"台(だい) originally meant a stand or platform, then expanded to count machines placed on stands. Today it covers cars, buses, computers, and washing machines. Japanese car dealerships display 新車(しんしゃ) (new cars) counted in 台(だい)."},

    {type:"teach", trg:"〜杯(はい)", src:"counter for cups/glasses/bowls", pos:"part", gender:null,
     note:"Used for drinks in containers.\n1杯(いっぱい)、2杯(にはい)、3杯(さんばい) (sound changes!).",
     example:"A: コーヒーを2杯(にはい)お願(ねが)いします。\nB: ホットですか、アイスですか？",
     exampleSrc:"A: Two cups of coffee, please.\nB: Hot or iced?",
     funFact:"杯(はい) counts things in cups, glasses, or bowls. It has tricky sound changes: 1杯(いっぱい) (1), 2杯(にはい) (2), 3杯(さんばい) (3). いっぱい also means 'full' or 'a lot,' so いっぱいいっぱい means 'completely full' or 'at my limit.'"},

    {type:"teach", trg:"〜個(こ)", src:"counter for small objects", pos:"part", gender:null,
     note:"General counter for small, round-ish items.\n1個(いっこ)、2個(にこ)、3個(さんこ)...",
     example:"A: りんごを1個(いっこ)ください。\nB: はい、どうぞ。",
     exampleSrc:"A: One apple, please.\nB: Here you go.",
     funFact:"個(こ) is one of the most versatile counters, used for eggs, apples, erasers, and other small objects. When in doubt about which counter to use for a small item, 個(こ) is usually safe. The kanji 個 means 'individual piece.'"},

    {type:"teach", trg:"〜人(にん)", src:"counter for people", pos:"part", gender:null,
     note:"1人(ひとり) (1), 2人(ふたり) (2), 3人(さんにん) (3), 4人(よにん) (4)...\nSpecial readings for 1 and 2!",
     example:"A: 何人(なんにん)家族(かぞく)ですか？\nB: 4人(よにん)家族(かぞく)です。",
     exampleSrc:"A: How many people are in your family?\nB: A family of four.",
     funFact:"人(にん) has special readings for 1 and 2: 1人(ひとり) and 2人(ふたり) use native Japanese numbers, while 3人(さんにん) onward uses Chinese-origin numbers. At restaurants, staff ask 何名様(なんめいさま)ですか (how many guests?), using the polite counter 名(めい) instead of 人(にん)."},

    {type:"teach", trg:"〜つ", src:"general counter (1-9)", pos:"part", gender:null,
     note:"Native Japanese counting: 1つ(ひとつ)、2つ(ふたつ)、3つ(みっつ)...\nOnly goes up to 10(とお).",
     example:"A: みかんを3つ(みっつ)ください。\nB: はい、3つ(みっつ)ですね。",
     exampleSrc:"A: Three mandarin oranges, please.\nB: Yes, three.",
     funFact:"The つ counter uses native Japanese numbers and works as a universal fallback when you forget the specific counter. However, it only goes to 10(とお). After that, you need specific counters. Children learn 1つ(ひとつ)、2つ(ふたつ) through counting songs."},

    {type:"mc", q:"Which counter would you use for books?", opts:["〜冊(さつ)","〜枚(まい)","〜本(ほん)","〜個(こ)"], ans:"〜冊(さつ)",
     hint:"This counter is specifically for bound volumes like books, notebooks, and magazines."},

    {type:"fb", s:"コーヒーを{1}お願(ねが)いします。\n(Two cups of coffee, please.)", a:"2杯(にはい)", opts:["2杯(にはい)","2本(にほん)","2枚(にまい)","2個(にこ)"], sSrc:"Two cups of coffee, please.",
     hint:"This counter is used for drinks in cups, glasses, or bowls."},

    {type:"match", pairs:[
      {trg:"〜枚(まい)", src:"flat objects"},
      {trg:"〜本(ほん)", src:"long objects"},
      {trg:"〜台(だい)", src:"machines/vehicles"},
      {trg:"〜冊(さつ)", src:"books/volumes"}
    ]},

    {type:"mc", q:"How do you say 'one person' in Japanese?", opts:["1人(ひとり)","1人(いちにん)","1個(いっこ)","1つ(ひとつ)"], ans:"1人(ひとり)",
     hint:"The counter for people has special native Japanese readings for 1 and 2."}
  ,{type:"match",pairs:[{trg:"〜杯(はい)",src:"counter for cups/glasses/bowls"},{trg:"〜人(にん)",src:"counter for people"},{trg:"〜つ",src:"general counter (1-9)"}]}]
};
export default BATCH10_L1;
