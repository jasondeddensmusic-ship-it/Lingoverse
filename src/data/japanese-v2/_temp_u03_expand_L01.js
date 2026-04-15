// Unit 03 Expansion L03 — More Everyday Objects & Classroom Items
const LESSON_3 = {
  id:"jav2_u3l3", title:"きょうしつのもの", icon:"📚", xp:15, board:true,
  steps:[
    {type:"intro", title:"きょうしつのもの",
     desc:"Learn the names of items you encounter in a classroom, office, or around the house. You will practice demonstratives with these new objects and strengthen your kore/sore/are skills.",
     goals:["Name classroom and household objects","Use demonstratives with new vocabulary","Practice the no particle for describing objects"]},

    {type:"teach", trg:"えんぴつ", src:"pencil", pos:"noun", gender:null,
     note:"Compound: 鉛 (lead) + 筆 (writing brush). A pencil is literally a 'lead brush.'\nKanji: 鉛筆.",
     example:"A: えんぴつをかしてください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please lend me a pencil.\nB: Here you go.",
     funFact:"Japanese students use pencils far more than pens through elementary school. Many standardized tests still require pencils. Mechanical pencils (sharp pencils, shaapupenshiru) are enormously popular and come in beautiful designs."},

    {type:"teach", trg:"ペン", src:"pen", pos:"noun", gender:null,
     note:"Loanword from English. Written in katakana.\nBallpoint pen: ボールペン (boorupen).",
     example:"A: あかいペンはありますか？\nB: はい、あります。どうぞ。",
     exampleSrc:"A: Do you have a red pen?\nB: Yes, I do. Here you go.",
     funFact:"Japanese stationery is world-famous for quality. Brands like Pilot, Uni, and Zebra make pens exported worldwide. The Pilot Frixion (erasable pen) and Uni Jetstream are globally bestselling Japanese inventions."},

    {type:"teach", trg:"ノート", src:"notebook", pos:"noun", gender:null,
     note:"From English 'note.' Refers to a notebook, not a single note.\nWritten in katakana.",
     example:"A: あたらしいノートがほしいです。\nB: あそこにありますよ。",
     exampleSrc:"A: I want a new notebook.\nB: There is one over there.",
     funFact:"Japanese students are famous for beautiful note-taking. Campus Note (by Kokuyo) is Japan's bestselling notebook. Many students use color-coded systems with multiple pen colors. Neat notes are considered a study skill and a point of pride."},

    {type:"teach", trg:"けしゴム", src:"eraser", pos:"noun", gender:null,
     note:"Keshi (erase) + gomu (rubber, from Dutch 'gom'). A hybrid Japanese-Dutch compound.",
     example:"A: けしゴムをかしてください。\nB: はい、このしろいのです。",
     exampleSrc:"A: Please lend me an eraser.\nB: Yes, this white one.",
     funFact:"The word gomu comes from Dutch 'gom' (gum/rubber). MONO erasers by Tombow are considered the best in the world and are exported to over 70 countries. Japanese children collect cute novelty erasers shaped like food and animals."},

    {type:"mc", q:"えんぴつ literally means:", opts:["writing stick","lead brush","wood pen","sharp point"], ans:"lead brush",
     hint:"The kanji combine 'l...' (the graphite material) and 'writing b....'"},

    {type:"teach", trg:"つくえ", src:"desk", pos:"noun", gender:null,
     note:"A desk for studying or working. Dining tables use テーブル (teeburu).\nKanji: 机.",
     example:"A: つくえのうえにほんがあります。\nB: ああ、わたしのほんです。",
     exampleSrc:"A: There is a book on the desk.\nB: Oh, that is my book.",
     funFact:"The kanji 机 is simple: 木 (tree/wood) + 几 (small table). Desks in Japanese schools face forward in rows. Students do not change classrooms between subjects. Instead, teachers come to them. Cleaning their own desks is part of daily souji (cleaning time)."},

    {type:"teach", trg:"いす", src:"chair", pos:"noun", gender:null,
     note:"General word for any chair or seat. Also written 椅子.\nKanji: 椅子.",
     example:"A: いすにすわってください。\nB: ありがとうございます。",
     exampleSrc:"A: Please sit on the chair.\nB: Thank you.",
     funFact:"Chairs were uncommon in traditional Japanese homes where people sat on tatami (straw mats) using zabuton (cushions). Western-style chairs spread during the Meiji era. Today, many Japanese homes have both styles, with tatami rooms for traditional sitting."},

    {type:"teach", trg:"まど", src:"window", pos:"noun", gender:null,
     note:"Windows in Japanese classrooms are always on the left side for right-handed writing light.\nKanji: 窓.",
     example:"A: まどをあけてください。\nB: はい、あつかったですね。",
     exampleSrc:"A: Please open the window.\nB: Yes, it was hot.",
     funFact:"In anime and manga, the protagonist almost always sits by the window in the back of the classroom. This 'window seat' (mado-giwa no seki) became such a trope that it is parodied in many shows. Real Japanese classrooms put desks in strict rows."},

    {type:"teach", trg:"ドア", src:"door", pos:"noun", gender:null,
     note:"Loanword from English. Traditional sliding doors are ふすま (fusuma) or しょうじ (shouji).",
     example:"A: ドアをしめてください。\nB: はい。",
     exampleSrc:"A: Please close the door.\nB: Yes.",
     funFact:"Japan has three types of 'doors': doa (Western-style hinged), fusuma (opaque sliding), and shouji (paper sliding screens). Traditional homes use sliding doors exclusively because they save space and allow flexible room layouts."},

    {type:"fb", s:"___のうえにペンがあります。",
     a:["つくえ"],
     opts:["つくえ","いす","まど","ドア"],
     hint:"The furniture piece you write on, where objects are placed 'on top.'",
     sSrc:"There is a pen on the desk."},

    {type:"teach", trg:"でんわ", src:"telephone", pos:"noun", gender:null,
     note:"Compound: 電 (electric) + 話 (talk). Landline phone.\nKanji: 電話.",
     example:"A: でんわばんごうをおしえてください。\nB: 090-1234-5678です。",
     exampleSrc:"A: Please tell me your phone number.\nB: It is 090-1234-5678.",
     funFact:"電話 (electric talk) perfectly describes what a phone does. Japanese phone numbers start with area codes (03 for Tokyo, 06 for Osaka) or 090/080/070 for mobile phones. Japan still has many public phone booths (koushuu denwa) for emergencies."},

    {type:"teach", trg:"テレビ", src:"television / TV", pos:"noun", gender:null,
     note:"Shortened from 'television.' One of the most common katakana loanwords.",
     example:"A: まいにちテレビをみますか？\nB: はい、ニュースをみます。",
     exampleSrc:"A: Do you watch TV every day?\nB: Yes, I watch the news.",
     funFact:"Terebi was shortened from 'television' in the 1950s. Japanese TV is unique: variety shows (baraetii) feature comedy, games, and food segments all in one program. NHK (Japan Broadcasting Corporation) collects a mandatory viewing fee from every household."},

    {type:"teach", trg:"パソコン", src:"computer / PC", pos:"noun", gender:null,
     note:"Shortened from パーソナルコンピューター (personal computer). Very common abbreviation.",
     example:"A: パソコンをつかいますか？\nB: はい、まいにちつかいます。",
     exampleSrc:"A: Do you use a computer?\nB: Yes, I use one every day.",
     funFact:"Pasokon is a uniquely Japanese abbreviation. English speakers say PC, but Japanese created their own shortening. Japanese people also say sumaho (smartphone), paato (part-time job), and konbini (convenience store). Abbreviating loanwords is an art form."},

    {type:"mc", q:"でんわ literally means:", opts:["far voice","electric talk","wire sound","signal box"], ans:"electric talk",
     hint:"The kanji combine 'e...' and 't.../conversation.'"},

    {type:"teach", trg:"かみ", src:"paper", pos:"noun", gender:null,
     note:"One of the most common materials. Homophone: 髪 (kami, hair) and 神 (kami, god).\nKanji: 紙.",
     example:"A: かみをいちまいください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please give me one sheet of paper.\nB: Here you go.",
     funFact:"Kami (paper), kami (hair), and kami (god) are all pronounced the same but written with different kanji. Japanese has many homophones. Context always makes the meaning clear, but it creates great material for puns (dajare)."},

    {type:"match", pairs:[
      {trg:"えんぴつ", src:"pencil"},
      {trg:"ペン", src:"pen"},
      {trg:"ノート", src:"notebook"},
      {trg:"けしゴム", src:"eraser"}
    ]},

    {type:"match", pairs:[
      {trg:"つくえ", src:"desk"},
      {trg:"いす", src:"chair"},
      {trg:"まど", src:"window"},
      {trg:"ドア", src:"door"}
    ]},

    {type:"fb", s:"___をいちまいください。",
     a:["かみ"],
     opts:["かみ","ペン","ほん","かぎ"],
     hint:"The flat material you write on, counted with the mai counter.",
     sSrc:"One sheet of paper, please."},

    {type:"mc", q:"パソコン is short for:", opts:["Portable computer","Personal computer","Power console","Processing center"], ans:"Personal computer",
     hint:"A uniquely Japanese abbreviation of the full katakana loanword."},

    {type:"mc", q:"Which word is a loanword from Dutch?", opts:["えんぴつ","けしゴム","つくえ","かみ"], ans:"けしゴム",
     hint:"The gomu (rubber) part of this compound came from Dutch traders."},
  ]
};
export default LESSON_3;
