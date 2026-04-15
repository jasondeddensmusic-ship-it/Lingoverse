// Unit 03 Expansion L04 — Kono/Sono/Ano + Location Words
const LESSON_4 = {
  id:"jav2_u3l4", title:"この・その・あの", icon:"👉", xp:15, board:true,
  steps:[
    {type:"intro", title:"この・その・あの",
     desc:"Learn the adjective-like demonstratives that modify nouns directly: kono (this), sono (that), ano (that over there). Also learn basic location words: ue, shita, naka, soto.",
     goals:["Use kono/sono/ano before nouns","Describe where objects are with location words","Combine demonstratives with location expressions"]},

    {type:"teach", trg:"この", src:"this (before a noun)", pos:"adj", gender:null,
     note:"Kore = this (standalone). Kono = this (before a noun).\nこの + noun = this noun.",
     example:"A: このほんはおもしろいです。\nB: そのほんもおもしろいですよ。",
     exampleSrc:"A: This book is interesting.\nB: That book is interesting too.",
     funFact:"Kore and kono are related but different. Kore stands alone as a pronoun (this thing). Kono must always be followed by a noun: kono hon (this book), kono hito (this person). Mixing them up is a common beginner mistake."},

    {type:"teach", trg:"その", src:"that (before a noun, near listener)", pos:"adj", gender:null,
     note:"Sore = that (standalone). Sono = that (before a noun).\nその + noun = that noun.",
     example:"A: そのかばんはだれのですか？\nB: たなかさんのです。",
     exampleSrc:"A: Whose is that bag?\nB: It is Tanaka-san's.",
     funFact:"Sono also works for things the listener just mentioned. 'I went to a restaurant.' 'Sono resutoran wa doko desu ka?' (Where is that restaurant?) This abstract use of sono referencing shared knowledge is very common."},

    {type:"teach", trg:"あの", src:"that (before a noun, far from both)", pos:"adj", gender:null,
     note:"Are = that over there (standalone). Ano = that over there (before a noun).",
     example:"A: あのひとはだれですか？\nB: やまだせんせいです。",
     exampleSrc:"A: Who is that person (over there)?\nB: That is Professor Yamada.",
     funFact:"Ano is also a filler word like 'um' or 'uh' in English. When someone says 'ano...' at the start of a sentence, they are hesitating or thinking. This usage is unrelated to the demonstrative meaning and is extremely common in natural speech."},

    {type:"teach", trg:"どの", src:"which (before a noun)", pos:"adj", gender:null,
     note:"The question form completing the ko-so-a-do set.\nどの + noun = which noun?",
     example:"A: どのペンがほしいですか？\nB: あのあかいペンがほしいです。",
     exampleSrc:"A: Which pen do you want?\nB: I want that red pen over there.",
     funFact:"Dono completes the full set: kono (this), sono (that), ano (that far), dono (which). This four-part pattern repeats across dozens of Japanese words: koko/soko/asoko/doko (here/there/over there/where)."},

    {type:"mc", q:"この is different from これ because:", opts:["Kono is more polite","Kono must be followed by a noun","Kono is past tense","Kono is for questions"], ans:"Kono must be followed by a noun",
     hint:"One demonstrative works independently; the other always attaches before a second word to modify it."},

    {type:"teach", trg:"うえ", src:"on top / above", pos:"noun", gender:null,
     note:"Location word. Pattern: X の うえ に = on top of X.\nKanji: 上.",
     example:"A: かぎはどこですか？\nB: つくえのうえにあります。",
     exampleSrc:"A: Where are the keys?\nB: They are on top of the desk.",
     funFact:"上 (ue/kami/jou) has many readings and appears everywhere: jouzu (skillful = upper hand), jouseki (upper seat = seat of honor), ue kara (from above). Physical and abstract 'above' use the same word."},

    {type:"teach", trg:"した", src:"below / under", pos:"noun", gender:null,
     note:"Location word. Pattern: X の した に = under X.\nKanji: 下.",
     example:"A: ねこはどこですか？\nB: つくえのしたにいます。",
     exampleSrc:"A: Where is the cat?\nB: It is under the desk.",
     funFact:"下 (shita/shimo/ka/ge) is the opposite of 上. It appears in kudasai (please give down to me), shita-gi (underwear = below-clothing), and gesha (getting off a vehicle = descending)."},

    {type:"teach", trg:"なか", src:"inside / in", pos:"noun", gender:null,
     note:"Location word. Pattern: X の なか に = inside X.\nKanji: 中.",
     example:"A: パスポートはどこですか？\nB: かばんのなかにあります。",
     exampleSrc:"A: Where is the passport?\nB: It is inside the bag.",
     funFact:"中 (naka/chuu) means both 'inside' and 'middle.' Chuugoku (China = middle country), chuugakkou (middle school), naka-mi (contents = what is inside). The kanji shows a line through the middle of a box."},

    {type:"teach", trg:"そと", src:"outside", pos:"noun", gender:null,
     note:"Location word. Opposite of なか (inside).\nKanji: 外.",
     example:"A: そとはさむいですか？\nB: はい、コートをきてください。",
     exampleSrc:"A: Is it cold outside?\nB: Yes, please wear a coat.",
     funFact:"外 (soto/gai/ge) means outside and also foreign. Gaijin (外人, outside-person) means foreigner. Gaikoku (外国, outside-country) means foreign country. The concept of inside (uchi) vs outside (soto) is fundamental to Japanese social psychology."},

    {type:"fb", s:"かばんの___にほんがあります。",
     a:["なか"],
     opts:["なか","うえ","した","そと"],
     hint:"The location word meaning 'inside' that describes what is within a container.",
     sSrc:"There is a book inside the bag."},

    {type:"teach", trg:"よこ", src:"beside / next to", pos:"noun", gender:null,
     note:"Location word. Pattern: X の よこ に = beside X.\nKanji: 横.",
     example:"A: えきのよこにコンビニがあります。\nB: べんりですね。",
     exampleSrc:"A: There is a convenience store next to the station.\nB: That's convenient.",
     funFact:"Yoko means 'horizontal' or 'beside.' Yokozuna (sumo's highest rank) literally means 'horizontal rope' (the ceremonial rope worn by the champion). Yokohama (横浜) means 'horizontal beach,' describing its long coastline."},

    {type:"teach", trg:"まえ", src:"in front of / before", pos:"noun", gender:null,
     note:"Location and time word. X の まえ に = in front of / before X.\nKanji: 前.",
     example:"A: がっこうのまえにバスていがあります。\nB: あ、そうですか。",
     exampleSrc:"A: There is a bus stop in front of the school.\nB: Oh, is that so?",
     funFact:"前 works for both space and time. Mise no mae (in front of the shop) and juuji no mae (before 10 o'clock). Namae (名前, name) literally means 'what comes before the na (you),' a label placed in front of a person."},

    {type:"teach", trg:"うしろ", src:"behind / in back of", pos:"noun", gender:null,
     note:"Location word. Opposite of まえ (front).\nKanji: 後ろ.",
     example:"A: じてんしゃはどこですか？\nB: いえのうしろにあります。",
     exampleSrc:"A: Where is the bicycle?\nB: It is behind the house.",
     funFact:"Ushiro feels less formal than ato (also 'behind/after'). In everyday speech, ushiro is for physical space (behind the building), while ato tends to be for time (after lunch). Both can overlap in usage."},

    {type:"teach", trg:"あいだ", src:"between", pos:"noun", gender:null,
     note:"Location word. Pattern: A と B の あいだ に = between A and B.\nKanji: 間.",
     example:"A: ほんやはぎんこうとえきのあいだにあります。\nB: わかりました。ありがとうございます。",
     exampleSrc:"A: The bookstore is between the bank and the station.\nB: I understand. Thank you.",
     funFact:"間 (aida/kan/ma) is one of the most philosophical kanji. Ma (space/gap/pause) is a key concept in Japanese aesthetics. The space between notes in music, the pause in conversation, the gap in architecture: ma gives meaning to emptiness."},

    {type:"mc", q:"つくえのしたに means:", opts:["On the desk","Under the desk","Next to the desk","Behind the desk"], ans:"Under the desk",
     hint:"Shita is the location word for 'below/u....'"},

    {type:"match", pairs:[
      {trg:"この", src:"this (+ noun)"},
      {trg:"その", src:"that (+ noun)"},
      {trg:"あの", src:"that far (+ noun)"},
      {trg:"どの", src:"which (+ noun)"}
    ]},

    {type:"match", pairs:[
      {trg:"うえ", src:"on top / above"},
      {trg:"した", src:"below / under"},
      {trg:"なか", src:"inside"},
      {trg:"そと", src:"outside"}
    ]},

    {type:"fb", s:"___ひとはだれですか？",
     a:["あの"],
     opts:["あの","あれ","あそこ","あり"],
     hint:"The demonstrative used before a noun to mean 'that person over there.'",
     sSrc:"Who is that person (over there)?"},

    {type:"mc", q:"Which set completes the ko-so-a-do pattern?", opts:["kono/sono/ano/dono","kore/soko/are/doko","kono/sore/ano/dore","koko/sono/ano/dono"], ans:"kono/sono/ano/dono",
     hint:"All four must use the same form: the noun-modifying adjectival form."},

    {type:"mc", q:"えきのまえに means:", opts:["Inside the station","Behind the station","In front of the station","Next to the station"], ans:"In front of the station",
     hint:"Mae covers both 'in f... of' (space) and 'before' (time)."},
  ]
};
export default LESSON_4;
