// Batch 2 expansion for Unit 11 (て-form) — more て-form verbs, giving/receiving, instructions
const BATCH2_L_1 = {
  id:"jav2_u11l_b2_1", title:"て-形(けい)練習(れんしゅう)", icon:"🔄", xp:15, board:true,
  steps:[
  {type:"intro", title:"て-形(けい)練習(れんしゅう)",
   desc:"Practice the て-form with more everyday verbs and learn to give instructions, describe what people are doing, and make polite requests. This lesson focuses on applying て-form to real situations you will encounter daily.",
   goals:["Form て-form for more common verbs","Give instructions using て-form chains","Describe what people are currently doing"]},

  {type:"teach", trg:"持(も)って", src:"hold / carry (て-form)", pos:"verb", gender:null,
   note:"持(も)つ (to hold/have) is Group 1: つ becomes って.\n持(も)つ becomes 持(も)って.",
   example:"A: かばんを持(も)ってください。\nB: はい、持(も)ちます。",
   exampleSrc:"A: Please hold the bag.\nB: Yes, I will hold it.",
   funFact:"持(も)つ means both 'to hold' and 'to have/possess.' 持(も)っている means 'I have' (ongoing possession). 持(も)っていく means 'to take (something along).' 持(も)ってくる means 'to bring.' These compounds with いく and くる are used constantly."},

  {type:"teach", trg:"開(あ)けて", src:"open (て-form)", pos:"verb", gender:null,
   note:"開(あ)ける (to open) is Group 2: drop る, add て.\n開(あ)ける becomes 開(あ)けて.",
   example:"A: 窓(まど)を開(あ)けてください。\nB: はい、暑(あつ)かったですか？",
   exampleSrc:"A: Please open the window.\nB: Yes, was it hot?",
   funFact:"開(あ)ける is transitive (you open something). The intransitive partner is 開(あ)く (something opens by itself). This transitive/intransitive verb pair system is uniquely Japanese: 閉(し)める/閉(し)まる (close), 付(つ)ける/付(つ)く (turn on), 消(け)す/消(き)える (turn off)."},

  {type:"teach", trg:"閉(し)めて", src:"close (て-form)", pos:"verb", gender:null,
   note:"閉(し)める (to close) is Group 2: drop る, add て.\n閉(し)める becomes 閉(し)めて.",
   example:"A: ドアを閉(し)めてもいいですか？\nB: はい、いいですよ。",
   exampleSrc:"A: May I close the door?\nB: Yes, that is fine.",
   funFact:"閉(し)める (transitive: to close something) pairs with 閉(し)まる (intransitive: something closes). 窓(まど)が閉(し)まっている means 'the window is closed' (state). 窓(まど)を閉(し)めている means 'someone is closing the window' (action). The pair distinction is a key grammar pattern."},

  {type:"teach", trg:"付(つ)けて", src:"turn on (て-form)", pos:"verb", gender:null,
   note:"付(つ)ける (to turn on/attach) is Group 2: drop る, add て.\n付(つ)ける becomes 付(つ)けて.",
   example:"A: エアコンを付(つ)けてください。\nB: はい、暑(あつ)いですね。",
   exampleSrc:"A: Please turn on the air conditioner.\nB: Yes, it is hot.",
   funFact:"付(つ)ける means 'to attach/turn on.' It is used for lights (電気(でんき)を付(つ)ける), appliances (テレビを付(つ)ける), and even figurative things like names (名前(なまえ)を付(つ)ける = to name). Its intransitive partner is 付(つ)く (to be on/attached)."},

  {type:"mc", q:"What is the て-form of 持(も)つ (to hold)?", opts:["持(も)ちて","持(も)って","持(も)いて","持(も)んで"], ans:"持(も)って",
   hint:"持(も)つ ends in つ. The つ/う/る group changes to って."},

  {type:"teach", trg:"消(け)して", src:"turn off / erase (て-form)", pos:"verb", gender:null,
   note:"消(け)す (to turn off/erase) is Group 1: す becomes して.\n消(け)す becomes 消(け)して.",
   example:"A: 電気(でんき)を消(け)してください。\nB: はい、消(け)します。",
   exampleSrc:"A: Please turn off the light.\nB: Yes, I will turn it off.",
   funFact:"消(け)す covers both 'turn off' (lights, appliances) and 'erase' (pencil marks, data). Its intransitive partner is 消(き)える (to go out/disappear). 電気(でんき)が消(き)えた means 'the light went out' (on its own). 電気(でんき)を消(け)した means 'I turned off the light.'"},

  {type:"teach", trg:"教(おし)えて", src:"teach / tell (て-form)", pos:"verb", gender:null,
   note:"教(おし)える (to teach/tell) is Group 2: drop る, add て.\n教(おし)える becomes 教(おし)えて.",
   example:"A: 日本語(にほんご)を教(おし)えてください。\nB: もちろん！",
   exampleSrc:"A: Please teach me Japanese.\nB: Of course!",
   funFact:"教(おし)える means both 'to teach' (a subject) and 'to tell/inform' (information). 電話番号(でんわばんごう)を教(おし)えてください means 'please tell me your phone number.' Context distinguishes between teaching a skill and sharing information."},

  {type:"teach", trg:"取(と)って", src:"take / pick up (て-form)", pos:"verb", gender:null,
   note:"取(と)る (to take) is Group 1: る becomes って.\n取(と)る becomes 取(と)って.",
   example:"A: 塩(しお)を取(と)ってください。\nB: はい、どうぞ。",
   exampleSrc:"A: Please pass me the salt.\nB: Here you go.",
   funFact:"取(と)る is extremely versatile: 写真(しゃしん)を取(と)る (take a photo), メモを取(と)る (take notes), 休(やす)みを取(と)る (take a break), ビタミンを取(と)る (take vitamins). The て-form 取(と)って also works as 'pass me': 塩(しお)を取(と)って means 'pass the salt.'"},

  {type:"fb", s:"窓(まど)を{1}ください。\n(Please open the window.)", a:"開(あ)けて", opts:["開(あ)けて","閉(し)めて","消(け)して","付(つ)けて"], sSrc:"Please open the window.",
   hint:"The て-form of the Group 2 verb meaning 'to open.'"},

  {type:"teach", trg:"見(み)せて", src:"show (て-form)", pos:"verb", gender:null,
   note:"見(み)せる (to show) is Group 2: drop る, add て.\n見(み)せる becomes 見(み)せて.",
   example:"A: パスポートを見(み)せてください。\nB: はい、どうぞ。",
   exampleSrc:"A: Please show me your passport.\nB: Here you go.",
   funFact:"見(み)せる (to show) is different from 見(み)る (to see/watch). 見(み)せる is transitive: you show something TO someone. At customs, immigration, and hotel check-in, パスポートを見(み)せてください is a phrase you will hear every time."},

  {type:"teach", trg:"入(はい)って", src:"enter (て-form)", pos:"verb", gender:null,
   note:"入(はい)る (to enter) is Group 1: る becomes って.\n入(はい)る becomes 入(はい)って.",
   example:"A: どうぞ、入(はい)ってください。\nB: おじゃまします。",
   exampleSrc:"A: Please, come in.\nB: Excuse me for intruding.",
   funFact:"入(はい)る is Group 1 despite ending in る (the vowel before る is -i but it is still Group 1). 入(はい)ってください (please come in) is standard when inviting someone inside. The response おじゃまします (I am intruding) is the polite set phrase when entering someone's home."},

  {type:"teach", trg:"覚(おぼ)えて", src:"memorize / remember (て-form)", pos:"verb", gender:null,
   note:"覚(おぼ)える (to memorize) is Group 2: drop る, add て.\n覚(おぼ)える becomes 覚(おぼ)えて.",
   example:"A: この言葉(ことば)を覚(おぼ)えてください。\nB: がんばって覚(おぼ)えます。",
   exampleSrc:"A: Please memorize this word.\nB: I will do my best to memorize it.",
   funFact:"覚(おぼ)える means 'to memorize/learn (something new).' It differs from 知(し)る (to know/find out) and わかる (to understand). 覚(おぼ)えている means 'I remember.' 覚(おぼ)えていない means 'I do not remember.' Language learners use this verb constantly."},

  {type:"mc", q:"エアコンを付(つ)けてください means:", opts:["Please turn off the AC","Please turn on the AC","Please clean the AC","Please buy an AC"], ans:"Please turn on the AC",
   hint:"付(つ)ける means to t... on or activate an appliance."},

  {type:"match", pairs:[{trg:"持(も)って",src:"hold (て)"},{trg:"開(あ)けて",src:"open (て)"},{trg:"閉(し)めて",src:"close (て)"},{trg:"付(つ)けて",src:"turn on (て)"}]},

  {type:"match", pairs:[{trg:"消(け)して",src:"turn off (て)"},{trg:"教(おし)えて",src:"teach (て)"},{trg:"取(と)って",src:"take (て)"},{trg:"見(み)せて",src:"show (て)"}]},

  {type:"fb", s:"電気(でんき)を{1}ください。\n(Please turn off the light.)", a:"消(け)して", opts:["消(け)して","付(つ)けて","開(あ)けて","閉(し)めて"], sSrc:"Please turn off the light.",
   hint:"The て-form of the す-ending verb meaning 'to turn off' or 'erase.'"},

  {type:"mc", q:"パスポートを見(み)せてください means:", opts:["Please hide your passport","Please bring your passport","Please show me your passport","Please find your passport"], ans:"Please show me your passport",
   hint:"見(み)せて is the て-form of the verb meaning 'to s...' something to someone."},

  {type:"fb", s:"この言葉(ことば)を{1}ください。\n(Please memorize this word.)", a:"覚(おぼ)えて", opts:["覚(おぼ)えて","教(おし)えて","見(み)せて","取(と)って"], sSrc:"Please memorize this word.",
   hint:"The て-form of the Group 2 verb meaning 'to memorize' or 'learn by heart.'"},
{type:"match",pairs:[{trg:"入(はい)って",src:"enter (て-form)"}]}]};
export default BATCH2_L_1;
