// Japanese V2 Unit 11. て-けい (て-form)
import BATCH2_L1 from './_batch2_u11_L01.js';
// Level: A2.1. JLPT N4 aligned.
import JEXP_11_L1 from './_temp_u11_expand_L01.js';import JEXP_11_L2 from './_temp_u11_expand_L02.js';import JEXP_11_L3 from './_temp_u11_expand_L03.js';
// て-form formation, requests, ongoing actions, permission.

const UNIT_11 = {
  n:11, lang:"ja", srcLang:"en", track:"v2",
  title:"て-けい", sub:"The て-Form",
  icon:"🔗", level:"A2.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: て-form をつくろう (Building the て-form) ═══
{id:"jav2_u11l1", title:"て-けいをつくろう", icon:"🛠️", xp:15, board:true, steps:[
  {type:"intro", title:"て-けいをつくろう",
   desc:"The て-form is the Swiss army knife of Japanese grammar. It connects actions, makes requests, and describes ongoing states. This lesson teaches you how to build it for all three verb groups.",
   goals:["Form て-form for Group 1 (u-verbs), Group 2 (ru-verbs), and irregular verbs","Understand the sound-change rules for Group 1","Use て-form to connect two actions"]},

  {type:"teach", trg:"たべて", src:"eat (て-form)", pos:"verb", gender:null,
   note:"Group 2 (ru-verb): drop る, add て. たべる becomes たべて.\nThis is the simplest pattern.",
   example:"A: やさいをたべてください。\nB: はい、たべます。",
   exampleSrc:"A: Please eat your vegetables.\nB: Yes, I will eat them.",
   funFact:"Group 2 verbs (ichidan/ru-verbs) always end in -iru or -eru and follow the simplest て-form rule. Just swap る for て. No sound changes needed. About 30% of common verbs are Group 2."},

  {type:"teach", trg:"のんで", src:"drink (て-form)", pos:"verb", gender:null,
   note:"Group 1 (u-verb): む ending changes to んで.\nのむ becomes のんで. Same pattern for ぶ and ぬ endings.",
   example:"A: みずをのんでください。\nB: ありがとう。",
   exampleSrc:"A: Please drink some water.\nB: Thank you.",
   funFact:"The む/ぶ/ぬ group all become んで. This is called the 'nasal' group because ん is a nasal sound. Only one common verb ends in ぬ: しぬ (to die), making it しんで."},

  {type:"teach", trg:"かいて", src:"write (て-form)", pos:"verb", gender:null,
   note:"Group 1 (u-verb): く ending changes to いて.\nかく becomes かいて.",
   example:"A: なまえをかいてください。\nB: ここにかきますか？",
   exampleSrc:"A: Please write your name.\nB: Shall I write it here?",
   funFact:"The く to いて change is one of the trickiest for learners. One major exception: いく (to go) becomes いって, not いいて. This is the only irregular く-verb in the entire language."},

  {type:"teach", trg:"まって", src:"wait (て-form)", pos:"verb", gender:null,
   note:"Group 1 (u-verb): つ ending changes to って.\nまつ becomes まって. Same for う and る (Group 1) endings.",
   example:"A: ちょっとまってください。\nB: はい、まちます。",
   exampleSrc:"A: Please wait a moment.\nB: Yes, I will wait.",
   funFact:"Chotto matte kudasai (please wait a moment) is one of the most useful phrases in Japan. The つ/う/る group all become って with a double consonant. This gemination (double consonant) is a signature sound of Japanese."},

  {type:"mc", q:"What is the て-form of たべる?", opts:["たべて","たべって","たべんで","たべいて"], ans:"たべて",
   hint:"This is a Group 2 (ru-verb). Simply drop る and add て."},

  {type:"teach", trg:"はなして", src:"speak (て-form)", pos:"verb", gender:null,
   note:"Group 1 (u-verb): す ending changes to して.\nはなす becomes はなして.",
   example:"A: にほんごではなしてください。\nB: がんばります！",
   exampleSrc:"A: Please speak in Japanese.\nB: I will do my best!",
   funFact:"The す to して change is the most regular pattern in Group 1. Every す-ending verb follows it without exception. Common examples: だす (to put out) becomes だして, けす (to erase) becomes けして."},

  {type:"teach", trg:"して", src:"do (て-form)", pos:"verb", gender:null,
   note:"Irregular verb. する becomes して.\nOne of only two irregular verbs in Japanese.",
   example:"A: しゅくだいをしてください。\nB: もうしました！",
   exampleSrc:"A: Please do your homework.\nB: I already did it!",
   funFact:"する (to do) and くる (to come) are the only two truly irregular verbs in Japanese. Every other verb follows Group 1 or Group 2 rules. する compounds are everywhere: べんきょうする, りょうりする, うんどうする."},

  {type:"teach", trg:"きて", src:"come (て-form)", pos:"verb", gender:null,
   note:"Irregular verb. くる becomes きて.\nThe other irregular verb alongside する.",
   example:"A: あしたもきてください。\nB: もちろん！",
   exampleSrc:"A: Please come again tomorrow.\nB: Of course!",
   funFact:"くる is the second and final irregular verb. Its て-form is きて, its past is きた, its negative is こない. Each form uses a different vowel from the く row: ku, ki, ko. This vowel alternation is unique to this verb."},

  {type:"fb", s:"みずを{1}ください。\n(Please drink water.)", a:"のんで", opts:["のんで","のみて","のむて","のって"], sSrc:"Please drink some water.",
   hint:"のむ is a む-ending Group 1 verb. The む/ぶ/ぬ group becomes んで."},

  {type:"mc", q:"What is the て-form of まつ (to wait)?", opts:["まちて","まって","まつて","まいて"], ans:"まって",
   hint:"つ-ending Group 1 verbs change つ to って with a double consonant."},

  {type:"tip", title:"て-form Sound Change Chart",
   text:"Group 2 (ru-verbs): drop る, add て\nたべる > たべて, みる > みて\n\nGroup 1 (u-verbs) by ending:\nす > して: はなす > はなして\nく > いて: かく > かいて (exception: いく > いって)\nぐ > いで: およぐ > およいで\nむ/ぶ/ぬ > んで: のむ > のんで\nつ/う/る > って: まつ > まって\n\nIrregular:\nする > して, くる > きて",
   deepDive:{title:"How to remember the groups",
    text:"A popular mnemonic groups the endings by their て-form sound:\n\nThe 'って' group (つ/う/る): Think of a strong stop sound.\nThe 'んで' group (む/ぶ/ぬ): Think of a humming, nasal sound.\nThe 'いて' group (く): Think of a sliding sound.\nThe 'いで' group (ぐ): The voiced version of く.\nThe 'して' group (す): Stands alone.\n\nWith practice, these become automatic. Most learners master them within a few weeks of active use."}},

  {type:"match", pairs:[{trg:"たべて",src:"eat (て)"},{trg:"のんで",src:"drink (て)"},{trg:"かいて",src:"write (て)"},{trg:"まって",src:"wait (て)"}]},

  {type:"match", pairs:[{trg:"はなして",src:"speak (て)"},{trg:"して",src:"do (て)"},{trg:"きて",src:"come (て)"},{trg:"たべて",src:"eat (て)"}]},

  {type:"fb", s:"なまえを{1}ください。\n(Please write your name.)", a:"かいて", opts:["かいて","かって","かきて","かくて"], sSrc:"Please write your name.",
   hint:"かく is a く-ending Group 1 verb. The く ending changes to いて."},

  {type:"mc", q:"What is the て-form of する?", opts:["すって","すて","して","されて"], ans:"して",
   hint:"This is one of the two irregular verbs. It does not follow Group 1 or 2 rules."},
]},

// ═══ L2: て-けいのつかいかた (Using the て-form) ═══
{id:"jav2_u11l2", title:"て-けいのつかいかた", icon:"✨", xp:15, board:true, steps:[
  {type:"intro", title:"て-けいのつかいかた",
   desc:"Now that you can build the て-form, learn its three most important uses: making polite requests with ください, describing ongoing actions with いる, and asking permission with もいい.",
   goals:["Make polite requests with て-form + ください","Describe ongoing actions with て-form + いる","Ask and give permission with て-form + もいいですか"]},

  {type:"teach", trg:"〜てください", src:"please do ~", pos:"part", gender:null,
   note:"て-form + ください = polite request. The most common way to ask someone to do something.",
   example:"A: ここにすわってください。\nB: はい、わかりました。",
   exampleSrc:"A: Please sit here.\nB: Yes, understood.",
   funFact:"Kudasai literally means 'please give me (the action of...).' It comes from kudasaru, the honorific form of kureru (to give). So 'tabete kudasai' literally means 'please give me the favor of eating.' This politeness layer is deeply embedded in Japanese."},

  {type:"teach", trg:"〜ている", src:"is doing ~ / ~ ing", pos:"part", gender:null,
   note:"て-form + いる = ongoing action or current state.\nPolite form: て-form + います.",
   example:"A: いまなにをしていますか？\nB: ほんをよんでいます。",
   exampleSrc:"A: What are you doing now?\nB: I am reading a book.",
   funFact:"Japanese does not have a simple present tense like English 'I eat.' たべる means 'I eat (in general)' or 'I will eat.' For 'I am eating right now,' you must use たべている. This distinction trips up many learners but becomes natural quickly."},

  {type:"teach", trg:"〜てもいいですか", src:"may I ~? / is it okay to ~?", pos:"part", gender:null,
   note:"て-form + もいいですか = asking permission.\nAnswer: はい、いいですよ (yes, it is fine).",
   example:"A: しゃしんをとってもいいですか？\nB: はい、いいですよ。",
   exampleSrc:"A: May I take a photo?\nB: Yes, that is fine.",
   funFact:"The も in てもいい means 'even if.' So the literal meaning is 'even if I do X, is it good?' This indirect phrasing is typical of Japanese: rather than directly asking 'can I?', you frame it as 'would it be acceptable even if I did?'"},

  {type:"mc", q:"How do you say 'please wait'?", opts:["まってください","まっています","まってもいい","まっている"], ans:"まってください",
   hint:"Combine the て-form of まつ with the word meaning 'please.'"},

  {type:"teach", trg:"よんでいます", src:"is reading", pos:"verb", gender:null,
   note:"よむ (to read) in the ongoing form: よんで + います.\nDescribes an action happening right now.",
   example:"A: たなかさんはどこですか？\nB: へやでほんをよんでいます。",
   exampleSrc:"A: Where is Tanaka?\nB: She is reading a book in her room.",
   funFact:"The ている form also expresses habitual states and results. まどがあいている means 'the window is open' (result of opening), not 'the window is opening.' Context tells you which meaning applies."},

  {type:"teach", trg:"みています", src:"is watching / is looking", pos:"verb", gender:null,
   note:"みる (to watch/see) in the ongoing form: みて + います.\nGroup 2 verb, so simply drop る, add て.",
   example:"A: なにをみていますか？\nB: テレビをみています。",
   exampleSrc:"A: What are you watching?\nB: I am watching TV.",
   funFact:"みる covers both 'to see' and 'to watch' in Japanese. There is no separate word like English distinguishes between them. テレビをみる means 'to watch TV,' while ふじさんをみる means 'to see Mt. Fuji.' The ている form works for both."},

  {type:"teach", trg:"すわって", src:"sit (て-form)", pos:"verb", gender:null,
   note:"すわる (to sit) is a Group 1 る-ending verb. る becomes って.\nすわる > すわって.",
   example:"A: ここにすわってください。\nB: ありがとうございます。",
   exampleSrc:"A: Please sit here.\nB: Thank you.",
   funFact:"すわる is a Group 1 verb even though it ends in る. The key test: if the vowel before る is not -i or -e, it is Group 1. すわる has -a before る, so it is Group 1. This is the trickiest part of verb classification for learners."},

  {type:"fb", s:"いまほんを{1}います。\n(I am reading a book now.)", a:"よんで", opts:["よんで","よみて","よって","よむて"], sSrc:"I am reading a book now.",
   hint:"よむ is a む-ending verb. The む group changes to んで in て-form."},

  {type:"teach", trg:"しゃしんをとる", src:"to take a photo", pos:"verb", gender:null,
   note:"とる (to take) is Group 1. て-form: とって.\nUsed with もいいですか for permission.",
   example:"A: ここでしゃしんをとってもいいですか？\nB: すみません、ここはだめです。",
   exampleSrc:"A: May I take a photo here?\nB: Sorry, it is not allowed here.",
   funFact:"In Japan, photography etiquette matters greatly. Many temples, museums, and restaurants prohibit photos. The phrase 'shashin wo totte mo ii desu ka?' is essential for polite travelers. You will also hear 'satsuei kinshi' (photography prohibited)."},

  {type:"teach", trg:"たっています", src:"is standing", pos:"verb", gender:null,
   note:"たつ (to stand) in the ongoing form: たって + います.\nDescribes the state of standing.",
   example:"A: あのひとはだれですか？\nB: えきのまえにたっていますか？あれはやまださんです。",
   exampleSrc:"A: Who is that person?\nB: The one standing in front of the station? That is Yamada.",
   funFact:"たっている shows the 'result state' use of ている: the person stood up (action) and is now standing (result). Many verbs work this way: すんでいる (is living/resides), しっている (knows), もっている (has/possesses)."},

  {type:"mc", q:"しゃしんをとってもいいですか means:", opts:["I am taking a photo","May I take a photo?","Please take a photo","I took a photo"], ans:"May I take a photo?",
   hint:"The てもいいですか pattern is used to ask for permission."},

  {type:"match", pairs:[{trg:"たべてください",src:"please eat"},{trg:"たべています",src:"is eating"},{trg:"たべてもいいですか",src:"may I eat?"},{trg:"のんでください",src:"please drink"}]},

  {type:"fb", s:"{1}をとってもいいですか？\n(May I take a photo?)", a:"しゃしん", opts:["しゃしん","えいが","テレビ","おんがく"], sSrc:"May I take a photo?",
   hint:"The word for a picture captured by a camera."},

  {type:"match", pairs:[{trg:"よんでいます",src:"is reading"},{trg:"みています",src:"is watching"},{trg:"たっています",src:"is standing"},{trg:"すわってください",src:"please sit"}]},

  {type:"mc", q:"テレビをみています means:", opts:["Please watch TV","I watched TV","I am watching TV","May I watch TV?"], ans:"I am watching TV",
   hint:"The ています pattern describes an action happening right now."},

  {type:"tip", title:"Three Uses of て-form",
   text:"1. Requests: て-form + ください\nたべてください。(Please eat.)\nきてください。(Please come.)\n\n2. Ongoing actions: て-form + いる/います\nたべています。(I am eating.)\nよんでいます。(I am reading.)\n\n3. Permission: て-form + もいいですか\nたべてもいいですか？(May I eat?)\nとってもいいですか？(May I take it?)",
   deepDive:{title:"ている for states vs actions",
    text:"The ている form has two main uses:\n\nOngoing action: いまごはんをたべています。(I am eating dinner right now.)\nResultant state: けっこんしています。(I am married.)\n\nHow to tell the difference? Verbs describing instantaneous actions (like 'to marry,' 'to die,' 'to arrive') use ている for the resulting state. Verbs describing continuous actions (like 'to eat,' 'to read,' 'to run') use ている for the ongoing action."}},
]},

,BATCH2_L1
]};
export default UNIT_11;
