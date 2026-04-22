// N4 Core Verbs. Unit 11 Lesson: Essential JLPT N4 Verbs (A2.1)
// 7 teach cards: 会う, 遊ぶ, 生まれる, 入れる, 持つ, 呼ぶ, 変える
// PP64: every teach card tested. PP67: 2+ fb with Japanese answers.

const N4VERBS_L1 = {id:"jpv2_u11l_n4v", title:"N4必須動詞(ひっすどうし)", icon:"📝", xp:15, board:true, steps:[

  {type:"intro", title:"Essential JLPT N4 Verbs",
   desc:"Learn 7 essential JLPT N4 Japanese verbs: to meet, to play, to be born, to put in, to hold, to call, to change. These are core verbs for daily Japanese communication.",
   goals:["Master 7 core JLPT N4 verbs","Distinguish godan vs ichidan","Use them in daily conversation"]},

  // ── Teach card 1: 会う ──
  {type:"teach", trg:"会(あ)う", src:"to meet", pos:"verb", gender:null,
   note:"Godan (u-verb): 会(あ)う, 会(あ)います, 会(あ)って.\n会(あ)う uses は to mark the person met: 友達(ともだち)に会(あ)う.",
   example:"A: 今日(きょう)、公園(こうえん)で父(ちち)に会(あ)いました。\nB: そうですか。お父(とう)さんはお元気(げんき)ですか？",
   exampleSrc:"A: Today I met my father at the park.\nB: Is that so? Is your father doing well?",
   funFact:"会(あ)う uses the particle に for the person met, not を. This surprises many learners. 久(ひさ)しぶり！(Long time no see!) is often said when 会(あ)う happens after a long absence."},

  // ── Teach card 2: 遊ぶ ──
  {type:"teach", trg:"遊(あそ)ぶ", src:"to play / to have fun", pos:"verb", gender:null,
   note:"Godan (bu-verb): 遊(あそ)ぶ, 遊(あそ)びます, 遊(あそ)んで.\n遊(あそ)ぶ can mean both children playing and adults hanging out.",
   example:"A: 学校(がっこう)の後(あと)で何(なに)をしますか？\nB: 公園(こうえん)で遊(あそ)びます。",
   exampleSrc:"A: What will you do after school?\nB: I will play at the park.",
   funFact:"遊(あそ)ぶ comes from 遊(あそ)び (play/leisure). Adults say 遊(あそ)びに来(き)てください (Please come hang out) as a casual invitation. 遊(あそ)び心(ごころ) means a playful spirit."},

  // ── Teach card 3: 生まれる ──
  {type:"teach", trg:"生(う)まれる", src:"to be born", pos:"verb", gender:null,
   note:"Ichidan (ru-verb): 生(う)まれる, 生(う)まれます, 生(う)まれて.\nBirth location uses で: 日本(にほん)で生(う)まれました.",
   example:"A: どこで生(う)まれましたか？\nB: 日本(にほん)で生(う)まれました。",
   exampleSrc:"A: Where were you born?\nB: I was born in Japan.",
   funFact:"生(う)まれる uses the kanji 生(せい/しょう), meaning life or birth. The same kanji appears in 先生(せんせい) (teacher, literally 'born before'). 生(う)まれ故郷(ふるさと) means birthplace or hometown."},

  // ── Teach card 4: 入れる ──
  {type:"teach", trg:"入(い)れる", src:"to put in / to insert", pos:"verb", gender:null,
   note:"Ichidan (ru-verb): 入(い)れる, 入(い)れます, 入(い)れて.\nContrast: 入(はい)る (to enter, intransitive) vs 入(い)れる (to put in, transitive).",
   example:"A: かばんに本(ほん)を入(い)れてください。\nB: はい、入(い)れました。",
   exampleSrc:"A: Please put the book in the bag.\nB: Yes, I put it in.",
   funFact:"入(い)れる is transitive (takes an object). Its intransitive partner is 入(はい)る (to go in). Pairing them: お茶(ちゃ)を入(い)れる means both 'to pour tea' and 'to brew tea' in Japanese, making it a versatile daily verb."},

  // ── Teach card 5: 持つ ──
  {type:"teach", trg:"持(も)つ", src:"to hold / to have / to carry", pos:"verb", gender:null,
   note:"Godan (tsu-verb): 持(も)つ, 持(も)ちます, 持(も)って.\n持(も)っています = currently having/holding (resultant state).",
   example:"A: 携帯(けいたい)を持(も)っていますか？\nB: はい、持(も)っています。",
   exampleSrc:"A: Do you have a cellphone?\nB: Yes, I have one.",
   funFact:"持(も)つ is often used with ている to mean 'to own/have': 車(くるま)を持(も)っています (I own a car). The same verb means both physical holding and abstract possession. 持(も)ち物(もの) means belongings or personal items."},

  // ── Teach card 6: 呼ぶ ──
  {type:"teach", trg:"呼(よ)ぶ", src:"to call (someone) / to invite", pos:"verb", gender:null,
   note:"Godan (bu-verb): 呼(よ)ぶ, 呼(よ)びます, 呼(よ)んで.\nを marks the person called: 父(ちち)を呼(よ)ぶ (to call for my father).",
   example:"A: 誰(だれ)かを呼(よ)びましょうか？\nB: 母(はは)を呼(よ)んでください。",
   exampleSrc:"A: Shall we call someone?\nB: Please call my mother.",
   funFact:"呼(よ)ぶ can mean 'to call out to', 'to summon', or 'to invite'. 呼(よ)び名(な) means a nickname (literally 'call name'). 呼(よ)び出(だ)す (to call out/summon) adds 出(だ)す for a stronger sense of bringing someone out."},

  // ── Teach card 7: 変える ──
  {type:"teach", trg:"変(か)える", src:"to change (something)", pos:"verb", gender:null,
   note:"Ichidan (ru-verb): 変(か)える, 変(か)えます, 変(か)えて.\nTransitive: subject changes the object. 変(か)わる is the intransitive partner (something changes on its own).",
   example:"A: 野菜(やさい)を入(い)れて、レシピを変(か)えてもいいですか？\nB: もちろん！大(おお)きい野菜(やさい)がいいですよ。",
   exampleSrc:"A: May I add vegetables and change the recipe?\nB: Of course! Big vegetables are good.",
   funFact:"変(か)える (to change something, transitive) vs 変(か)わる (to change/be changed, intransitive) is a classic Japanese verb pair. 気(き)が変(か)わる means 'to change one's mind'. 着替(きが)える (to change clothes) uses 変(か)える at its core."},

  // ── Tip card: Godan vs Ichidan ──
  {type:"tip", title:"Godan vs Ichidan: A Quick Test",
   text:"The 7 verbs in this lesson split into two groups:\n\nGodan (u-verbs): 会(あ)う, 遊(あそ)ぶ, 持(も)つ, 呼(よ)ぶ\nIchidan (ru-verbs): 生(う)まれる, 入(い)れる, 変(か)える\n\nQuick test for ichidan: does the verb end in eru or iru AND the sound before ru is a vowel? If yes, it is likely ichidan.\n会(あ)う ends in u + consonant sound = godan.\n変(か)える ends in eru = ichidan.",
   deepDive:{title:"Why the distinction matters",
    text:"Godan and ichidan verbs form て-form differently.\n\nGodan rules vary by ending:\n会(あ)う -> 会(あ)って (u-ending: double consonant + te)\n遊(あそ)ぶ -> 遊(あそ)んで (bu-ending: n + de)\n持(も)つ -> 持(も)って (tsu-ending: double t + te)\n呼(よ)ぶ -> 呼(よ)んで (bu-ending: n + de)\n\nIchidan rule is always simple: drop る, add て.\n生(う)まれる -> 生(う)まれて\n入(い)れる -> 入(い)れて\n変(か)える -> 変(か)えて\n\nMastering this split unlocks て-form for all verbs."}},

  // ── Quiz 1: mc, 会う meaning ──
  {type:"mc", q:"What does 会(あ)う mean?", opts:["to meet","to call","to hold","to go"], ans:"to meet",
   hint:"This verb uses に to mark the person you encounter."},

  // ── Quiz 2: mc, 遊ぶ meaning ──
  {type:"mc", q:"Which verb means 'to play / to have fun'?",
   opts:["持(も)つ","遊(あそ)ぶ","生(う)まれる","変(か)える"], ans:"遊(あそ)ぶ",
   hint:"This godan bu-verb describes recreational activity or hanging out."},

  // ── Quiz 3: mc, correct particle for 会う ──
  {type:"mc", q:"Choose the correct particle: 父(ちち)___会(あ)いました。",
   opts:["を","は","に","が"], ans:"に",
   hint:"The verb 会(あ)う uses this particle to mark the person met."},

  // ── Quiz 4: fb, production: 入れる ──
  {type:"fb", s:"かばんに本(ほん)を{1}ください。\n(Please put the book in the bag.)", a:"入(い)れて",
   opts:["入(い)れて","変(か)えて","遊(あそ)んで","呼(よ)んで"],
   sSrc:"Please put the book in the bag.",
   hint:"The て-form of 入(い)れる (ichidan): drop る, add て."},

  // ── Quiz 5: fb, production: 持つ ──
  {type:"fb", s:"携帯(けいたい)を{1}いますか？\n(Do you have a cellphone?)", a:"持(も)って",
   opts:["持(も)って","呼(よ)んで","会(あ)って","遊(あそ)んで"],
   sSrc:"Do you have a cellphone?",
   hint:"Use the て-form of 持(も)つ with いますか to ask about possession."},

  // ── Quiz 6: match, all 7 verbs ──
  {type:"match", pairs:[
    {trg:"会(あ)う", src:"to meet"},
    {trg:"遊(あそ)ぶ", src:"to play / to have fun"},
    {trg:"生(う)まれる", src:"to be born"},
    {trg:"変(か)える", src:"to change (something)"}
  ]},

  // ── Quiz 7: match, remaining 3 verbs ──
  {type:"match", pairs:[
    {trg:"入(い)れる", src:"to put in"},
    {trg:"持(も)つ", src:"to hold / to have"},
    {trg:"呼(よ)ぶ", src:"to call (someone)"}
  ]},

  // ── Quiz 8: mc, 生まれる context ──
  {type:"mc", q:"日本(にほん)で生(う)まれました means:",
   opts:["I visited Japan","I went to Japan","I live in Japan","I was born in Japan"], ans:"I was born in Japan",
   hint:"生(う)まれる is the ichidan verb for birth. で marks the location."},

  // ── Quiz 9: mc, 変える vs 変わる ──
  {type:"mc", q:"Which sentence means 'I changed the recipe'?",
   opts:["レシピを変(か)えました","レシピに会(あ)いました","レシピを遊(あそ)びました","レシピが変(か)わりました"],
   ans:"レシピを変(か)えました",
   hint:"変(か)える is transitive: the subject performs the change on an object marked with を."},

  // ── Quiz 10: mc, 呼ぶ meaning ──
  {type:"mc", q:"母(はは)を呼(よ)んでください means:",
   opts:["Please meet my mother","Please call my mother","Please change my mother","Please hold my mother"],
   ans:"Please call my mother",
   hint:"呼(よ)ぶ means to … out to or summon someone. を marks the person called."}

]};

export default N4VERBS_L1;
