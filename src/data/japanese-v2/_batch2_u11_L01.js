// Batch 2 expansion for Unit 11 (て-form) — more て-form verbs, giving/receiving, instructions
const BATCH2_L_1 = {
  id:"jav2_u11l_b2_1", title:"て-けいれんしゅう", icon:"🔄", xp:15, board:true,
  steps:[
  {type:"intro", title:"て-けいれんしゅう",
   desc:"Practice the て-form with more everyday verbs and learn to give instructions, describe what people are doing, and make polite requests. This lesson focuses on applying て-form to real situations you will encounter daily.",
   goals:["Form て-form for more common verbs","Give instructions using て-form chains","Describe what people are currently doing"]},

  {type:"teach", trg:"もって", src:"hold / carry (て-form)", pos:"verb", gender:null,
   note:"もつ (to hold/have) is Group 1: つ becomes って.\nもつ becomes もって.",
   example:"A: かばんをもってください。\nB: はい、もちます。",
   exampleSrc:"A: Please hold the bag.\nB: Yes, I will hold it.",
   funFact:"もつ means both 'to hold' and 'to have/possess.' もっている means 'I have' (ongoing possession). もっていく means 'to take (something along).' もってくる means 'to bring.' These compounds with いく and くる are used constantly."},

  {type:"teach", trg:"あけて", src:"open (て-form)", pos:"verb", gender:null,
   note:"あける (to open) is Group 2: drop る, add て.\nあける becomes あけて.",
   example:"A: まどをあけてください。\nB: はい、あつかったですか？",
   exampleSrc:"A: Please open the window.\nB: Yes, was it hot?",
   funFact:"あける is transitive (you open something). The intransitive partner is あく (something opens by itself). This transitive/intransitive verb pair system is uniquely Japanese: しめる/しまる (close), つける/つく (turn on), けす/きえる (turn off)."},

  {type:"teach", trg:"しめて", src:"close (て-form)", pos:"verb", gender:null,
   note:"しめる (to close) is Group 2: drop る, add て.\nしめる becomes しめて.",
   example:"A: ドアをしめてもいいですか？\nB: はい、いいですよ。",
   exampleSrc:"A: May I close the door?\nB: Yes, that is fine.",
   funFact:"しめる (transitive: to close something) pairs with しまる (intransitive: something closes). まどがしまっている means 'the window is closed' (state). まどをしめている means 'someone is closing the window' (action). The pair distinction is a key grammar pattern."},

  {type:"teach", trg:"つけて", src:"turn on (て-form)", pos:"verb", gender:null,
   note:"つける (to turn on/attach) is Group 2: drop る, add て.\nつける becomes つけて.",
   example:"A: エアコンをつけてください。\nB: はい、あついですね。",
   exampleSrc:"A: Please turn on the air conditioner.\nB: Yes, it is hot.",
   funFact:"つける means 'to attach/turn on.' It is used for lights (でんきをつける), appliances (テレビをつける), and even figurative things like names (なまえをつける = to name). Its intransitive partner is つく (to be on/attached)."},

  {type:"mc", q:"What is the て-form of もつ (to hold)?", opts:["もちて","もって","もいて","もんで"], ans:"もって",
   hint:"もつ ends in つ. The つ/う/る group changes to って."},

  {type:"teach", trg:"けして", src:"turn off / erase (て-form)", pos:"verb", gender:null,
   note:"けす (to turn off/erase) is Group 1: す becomes して.\nけす becomes けして.",
   example:"A: でんきをけしてください。\nB: はい、けします。",
   exampleSrc:"A: Please turn off the light.\nB: Yes, I will turn it off.",
   funFact:"けす covers both 'turn off' (lights, appliances) and 'erase' (pencil marks, data). Its intransitive partner is きえる (to go out/disappear). でんきがきえた means 'the light went out' (on its own). でんきをけした means 'I turned off the light.'"},

  {type:"teach", trg:"おしえて", src:"teach / tell (て-form)", pos:"verb", gender:null,
   note:"おしえる (to teach/tell) is Group 2: drop る, add て.\nおしえる becomes おしえて.",
   example:"A: にほんごをおしえてください。\nB: もちろん！",
   exampleSrc:"A: Please teach me Japanese.\nB: Of course!",
   funFact:"おしえる means both 'to teach' (a subject) and 'to tell/inform' (information). でんわばんごうをおしえてください means 'please tell me your phone number.' Context distinguishes between teaching a skill and sharing information."},

  {type:"teach", trg:"とって", src:"take / pick up (て-form)", pos:"verb", gender:null,
   note:"とる (to take) is Group 1: る becomes って.\nとる becomes とって.",
   example:"A: しおをとってください。\nB: はい、どうぞ。",
   exampleSrc:"A: Please pass me the salt.\nB: Here you go.",
   funFact:"とる is extremely versatile: しゃしんをとる (take a photo), メモをとる (take notes), やすみをとる (take a break), ビタミンをとる (take vitamins). The て-form とって also works as 'pass me': しおをとって means 'pass the salt.'"},

  {type:"fb", s:"まどを{1}ください。\n(Please open the window.)", a:"あけて", opts:["あけて","しめて","けして","つけて"], sSrc:"Please open the window.",
   hint:"The て-form of the Group 2 verb meaning 'to open.'"},

  {type:"teach", trg:"みせて", src:"show (て-form)", pos:"verb", gender:null,
   note:"みせる (to show) is Group 2: drop る, add て.\nみせる becomes みせて.",
   example:"A: パスポートをみせてください。\nB: はい、どうぞ。",
   exampleSrc:"A: Please show me your passport.\nB: Here you go.",
   funFact:"みせる (to show) is different from みる (to see/watch). みせる is transitive: you show something TO someone. At customs, immigration, and hotel check-in, パスポートをみせてください is a phrase you will hear every time."},

  {type:"teach", trg:"はいって", src:"enter (て-form)", pos:"verb", gender:null,
   note:"はいる (to enter) is Group 1: る becomes って.\nはいる becomes はいって.",
   example:"A: どうぞ、はいってください。\nB: おじゃまします。",
   exampleSrc:"A: Please, come in.\nB: Excuse me for intruding.",
   funFact:"はいる is Group 1 despite ending in る (the vowel before る is -i but it is still Group 1). はいってください (please come in) is standard when inviting someone inside. The response おじゃまします (I am intruding) is the polite set phrase when entering someone's home."},

  {type:"teach", trg:"おぼえて", src:"memorize / remember (て-form)", pos:"verb", gender:null,
   note:"おぼえる (to memorize) is Group 2: drop る, add て.\nおぼえる becomes おぼえて.",
   example:"A: このことばをおぼえてください。\nB: がんばっておぼえます。",
   exampleSrc:"A: Please memorize this word.\nB: I will do my best to memorize it.",
   funFact:"おぼえる means 'to memorize/learn (something new).' It differs from しる (to know/find out) and わかる (to understand). おぼえている means 'I remember.' おぼえていない means 'I do not remember.' Language learners use this verb constantly."},

  {type:"mc", q:"エアコンをつけてください means:", opts:["Please turn off the AC","Please turn on the AC","Please clean the AC","Please buy an AC"], ans:"Please turn on the AC",
   hint:"つける means to t... on or activate an appliance."},

  {type:"match", pairs:[{trg:"もって",src:"hold (て)"},{trg:"あけて",src:"open (て)"},{trg:"しめて",src:"close (て)"},{trg:"つけて",src:"turn on (て)"}]},

  {type:"match", pairs:[{trg:"けして",src:"turn off (て)"},{trg:"おしえて",src:"teach (て)"},{trg:"とって",src:"take (て)"},{trg:"みせて",src:"show (て)"}]},

  {type:"fb", s:"でんきを{1}ください。\n(Please turn off the light.)", a:"けして", opts:["けして","つけて","あけて","しめて"], sSrc:"Please turn off the light.",
   hint:"The て-form of the す-ending verb meaning 'to turn off' or 'erase.'"},

  {type:"mc", q:"パスポートをみせてください means:", opts:["Please hide your passport","Please bring your passport","Please show me your passport","Please find your passport"], ans:"Please show me your passport",
   hint:"みせて is the て-form of the verb meaning 'to s...' something to someone."},

  {type:"fb", s:"このことばを{1}ください。\n(Please memorize this word.)", a:"おぼえて", opts:["おぼえて","おしえて","みせて","とって"], sSrc:"Please memorize this word.",
   hint:"The て-form of the Group 2 verb meaning 'to memorize' or 'learn by heart.'"},
]};
export default BATCH2_L_1;
