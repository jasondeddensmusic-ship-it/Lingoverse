// Japanese V2 Unit 11. て-形(けい) (て-form)
import N4VERBS_L1 from './_n4verbs_u11_L01.js';
import BATCH11_L1 from './_batch11_u11_L01.js';
import BATCH10_L1 from './_batch10_u11_L01.js';
import BATCH9_L1 from './_batch9_u11_L01.js';
import BATCH7_L1 from './_batch7_u11_L01.js';
import BATCH8_L1 from './_batch8_u11_L01.js';
import BATCH6_L1 from './_batch6_u11_L01.js';
import BATCH4_L02 from './_batch4_u11_L02.js';
import BATCH4_L01 from './_batch4_u11_L01.js';
import BATCH2_L1 from './_batch2_u11_L01.js';
// Level: A2.1. JLPT N4 aligned.
import JEXP_11_L1 from './_temp_u11_expand_L01.js';import JEXP_11_L2 from './_temp_u11_expand_L02.js';import JEXP_11_L3 from './_temp_u11_expand_L03.js';
// て-form formation, requests, ongoing actions, permission.

const UNIT_11 = {
  n:11, lang:"ja", srcLang:"en", track:"v2",
  title:"て-形(けい)", sub:"The て-Form",
  icon:"\u{1F517}", level:"A2.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: て-形(けい) をつくろう (Building the て-form) ═══
{id:"jav2_u11l1", title:"て-形(けい)をつくろう", icon:"\u{1F6E0}\uFE0F", xp:15, board:true, steps:[
  {type:"intro", title:"て-形(けい)をつくろう",
   desc:"The て-form is the Swiss army knife of Japanese grammar. It connects actions, makes requests, and describes ongoing states. This lesson teaches you how to build it for all three verb groups.",
   goals:["Form て-form for Group 1 (u-verbs), Group 2 (ru-verbs), and irregular verbs","Understand the sound-change rules for Group 1","Use て-form to connect two actions"]},

  {type:"teach", trg:"食(た)べて", src:"eat (て-form)", pos:"verb", gender:null,
   note:"Group 2 (ru-verb): drop る, add て. 食(た)べる becomes 食(た)べて.\nThis is the simplest pattern.",
   example:"A: 野菜(やさい)を食(た)べてください。\nB: はい、食(た)べます。",
   exampleSrc:"A: Please eat your vegetables.\nB: Yes, I will eat them.",
   funFact:"Group 2 verbs (ichidan/ru-verbs) always end in -iru or -eru and follow the simplest て-form rule. Just swap る for て. No sound changes needed. About 30% of common verbs are Group 2."},

  {type:"teach", trg:"飲(の)んで", src:"drink (て-form)", pos:"verb", gender:null,
   note:"Group 1 (u-verb): む ending changes to んで.\n飲(の)む becomes 飲(の)んで. Same pattern for ぶ and ぬ endings.",
   example:"A: 水(みず)を飲(の)んでくだ���い。\nB: ありがとう。",
   exampleSrc:"A: Please drink some water.\nB: Thank you.",
   funFact:"The む/ぶ/ぬ group all become んで. This is called the 'nasal' group because ん is a nasal sound. Only one common verb ends in ぬ: 死(し)ぬ (to die), making it 死(し)んで."},

  {type:"teach", trg:"書(か)いて", src:"write (て-form)", pos:"verb", gender:null,
   note:"Group 1 (u-verb): く ending changes to いて.\n書(か)�� becomes 書(か)いて.",
   example:"A: 名前(なまえ)���書(か)いてください。\nB: ここに書(か)きますか?",
   exampleSrc:"A: Please write your name.\nB: Shall I write it here?",
   funFact:"The く to いて change is one of the trickiest for learners. One major exception: 行(い)く (to go) becomes 行(い)って, not 行(い)いて. This is the only irregular く-verb in the entire language."},

  {type:"teach", trg:"待(ま)って", src:"wait (て-form)", pos:"verb", gender:null,
   note:"Group 1 (u-verb): つ ending changes to って.\n待(ま)�� becomes 待(ま)って. Same for う and る (Group 1) endings.",
   example:"A: ちょっと待(ま)ってくだ���い。\nB: はい��待(ま)ちます。",
   exampleSrc:"A: Please wait a moment.\nB: Yes, I will wait.",
   funFact:"Chotto matte kudasai (please wait a moment) is one of the most useful phrases in Japan. The つ/う/る group all become って with a double consonant. This gemination (double consonant) is a signature sound of Japanese."},

  {type:"mc", q:"What is the て-form of 食(た)べる?", opts:["食(た)べて","食(た)べって","食(た)べんで","食(た)べいて"], ans:"食(た)べて",
   hint:"This is a Group 2 (ru-verb). Simply drop る and add て."},

  {type:"teach", trg:"話(はな)して", src:"speak (て-form)", pos:"verb", gender:null,
   note:"Group 1 (u-verb): す ending changes to して.\n話(はな)す becomes 話(はな)して.",
   example:"A: 日本語(にほんご)で話(はな)してください。\nB: がんばります!",
   exampleSrc:"A: Please speak in Japanese.\nB: I will do my best!",
   funFact:"The す to して change is the most regular pattern in Group 1. Every す-ending verb follows it without exception. Common examples: 出(だ)す (to put out) becomes ���(だ)して, 消(け)す (to erase) becomes 消(け)して."},

  {type:"teach", trg:"して", src:"do (て-form)", pos:"verb", gender:null,
   note:"Irregular verb. する becomes して.\nOne of only two irregular verbs in Japanese.",
   example:"A: ��題(しゅくだい)をしてください。\nB: もうしました!",
   exampleSrc:"A: Please do your homework.\nB: I already did it!",
   funFact:"する (to do) and くる (to come) are the only two truly irregular verbs in Japanese. Every other verb follows Group 1 or Group 2 rules. する compounds are everywhere: 勉強(べんきょう)する, 料理(りょうり)する, 運動(うんどう)する."},

  {type:"teach", trg:"来(き)て", src:"come (て-form)", pos:"verb", gender:null,
   note:"Irregular verb. 来(く)る becomes 来(き)て.\nThe other irregular verb alongside する.",
   example:"A: 明日(あした)も来(き)て��ださい。\nB: もちろん!",
   exampleSrc:"A: Please come again tomorrow.\nB: Of course!",
   funFact:"くる is the second and final irregular verb. Its て-form is きて, its past is きた, its negative is こない. Each form uses a different vowel from the く row: ku, ki, ko. This vowel alternation is unique to this verb."},

  {type:"fb", s:"水(みず)を{1}ください。\n(Please drink water.)", a:"飲(の)んで", opts:["飲(の)んで","飲(の)みて","飲(の)むて","飲(の)って"], sSrc:"Please drink some water.",
   hint:"飲(の)む is a む-ending Group 1 verb. The む/ぶ/ぬ group becomes んで."},

  {type:"mc", q:"What is the て-form of 待(ま)つ (to wait)?", opts:["待(ま)ちて","待(ま)って","待(ま)つて","待(ま)いて"], ans:"待(ま)って",
   hint:"つ-ending Group 1 verbs change つ to って with a double consonant."},

  {type:"tip", title:"て-form Sound Change Chart",
   text:"Group 2 (ru-verbs): drop る, add て\n食(た)べる > 食(た)べて, 見(み)る > 見(み)て\n\nGroup 1 (u-verbs) by ending:\nす > して: 話(はな)す > 話(はな)して\nく > いて: 書(か)く > ��(か)いて (exception: 行(い)く > 行(い)って)\nぐ > いで: 泳(およ)ぐ > 泳(およ)いで\nむ/ぶ/ぬ > んで: 飲(の)む > 飲(の)んで\nつ/う/る > って: 待(ま)つ > 待(ま)って\n\nIrregular:\nする > して, 来(く)る > 来(き)て",
   deepDive:{title:"How to remember the groups",
    text:"A popular mnemonic groups the endings by their て-form sound:\n\nThe 'って' group (つ/う/る): Think of a strong stop sound.\nThe 'んで' group (む/ぶ/ぬ): Think of a humming, nasal sound.\nThe 'いて' group (く): Think of a sliding sound.\nThe 'いで' group (ぐ): The voiced version of く.\nThe 'して' group (す): Stands alone.\n\nWith practice, these become automatic. Most learners master them within a few weeks of active use."}},

  {type:"match", pairs:[{trg:"食(た)��て",src:"eat (て)"},{trg:"飲(の)んで",src:"drink (て)"},{trg:"書(か)いて",src:"write (て)"},{trg:"待(ま)って",src:"wait (て)"}]},

  {type:"match", pairs:[{trg:"話(はな)して",src:"speak (て)"},{trg:"して",src:"do (て)"},{trg:"来(き)て",src:"come (て)"},{trg:"食(��)べて",src:"eat (て)"}]},

  {type:"fb", s:"名前(なま��)を{1}ください。\n(Please write your name.)", a:"書(か)いて", opts:["書(か)いて","書(か)って","書(か)きて","書(か)くて"], sSrc:"Please write your name.",
   hint:"書(か)く is a く-ending Group 1 verb. The く ending changes to いて."},

  {type:"mc", q:"What is the て-form of する?", opts:["すって","すて","して","されて"], ans:"して",
   hint:"This is one of the two irregular verbs. It does not follow Group 1 or 2 rules."},
]},

// ═══ L2: て-形(けい)の使(つか)い方(かた) (Using the て-form) ═══
{id:"jav2_u11l2", title:"て-形(けい)の使(つか)い方(かた)", icon:"\u2728", xp:15, board:true, steps:[
  {type:"intro", title:"て-形(けい)の使(つか)い方(かた)",
   desc:"Now that you can build the て-form, learn its three most important uses: making polite requests with ください, describing ongoing actions with いる, and asking permission with もいい.",
   goals:["Make polite requests with て-form + ください","Describe ongoing actions with て-form + い���","Ask and give permission with て-form + もいいですか"]},

  {type:"teach", trg:"\u301Cてください", src:"please do ~", pos:"part", gender:null,
   note:"て-form + ください = polite request. The most common way to ask someone to do something.",
   example:"A: ここに座(すわ)ってください。\nB: はい、わかりました。",
   exampleSrc:"A: Please sit here.\nB: Yes, understood.",
   funFact:"Kudasai literally means 'please give me (the action of...).' It comes from kudasaru, the honorific form of kureru (to give). So 'tabete kudasai' literally means 'please give me the favor of eating.' This politeness layer is deeply embedded in Japanese."},

  {type:"teach", trg:"\u301Cている", src:"is doing ~ / ~ ing", pos:"part", gender:null,
   note:"て-form + いる = ongoing action or current state.\nPolite form: て-form + います.",
   example:"A: 今(いま)何(なに)をしています���?\nB: 本(ほん)を読(よ)んでいます。",
   exampleSrc:"A: What are you doing now?\nB: I am reading a book.",
   funFact:"Japanese does not have a simple present tense like English 'I eat.' 食(た)べる means 'I eat (in general)' or 'I will eat.' For 'I am eating right now,' you must use 食(た)べている. This distinction trips up many learners but becomes natural quickly."},

  {type:"teach", trg:"\u301CてもいいですかQuestion", src:"may I ~? / is it okay to ~?", pos:"part", gender:null,
   note:"���-form + もいいですか = asking permission.\nAnswer: はい、いいですよ (yes, it is fine).",
   example:"A: 写真(しゃしん)��撮(と)ってもいいですか?\nB: はい、いいですよ。",
   exampleSrc:"A: May I take a photo?\nB: Yes, that is fine.",
   funFact:"The も in てもいい means 'even if.' So the literal meaning is 'even if I do X, is it good?' This indirect phrasing is typical of Japanese: rather than directly asking 'can I?', you frame it as 'would it be acceptable even if I did?'"},

  {type:"mc", q:"How do you say 'please wait'?", opts:["��(ま)ってください","待(ま)っています","待(ま)ってもいい","待(ま)っている"], ans:"待(ま)ってください",
   hint:"Combine the て-form of 待(ま)つ with the word meaning 'please.'"},

  {type:"teach", trg:"読(よ)んでいます", src:"is reading", pos:"verb", gender:null,
   note:"読(よ)む (to read) in the ongoing form: 読(よ)んで + います.\nDescribes an action happening right now.",
   example:"A: 田中(たなか)さんはどこですか?\nB: 部屋(へや)で本(ほ���)を読(よ)んでいます。",
   exampleSrc:"A: Where is Tanaka?\nB: She is reading a book in her room.",
   funFact:"The ている form also expresses habitual states and results. 窓(まど)が開(あ)いている means 'the window is open' (result of opening), not 'the window is opening.' Context tells you which meaning applies."},

  {type:"teach", trg:"見(み)ています", src:"is watching / is looking", pos:"verb", gender:null,
   note:"見(み)る (to watch/see) in the ongoing form: 見(み)て + います.\nGroup 2 verb, so simply drop る, add て.",
   example:"A: 何(なに)を見(み)ていますか?\nB: テレビを見(み)ています。",
   exampleSrc:"A: What are you watching?\nB: I am watching TV.",
   funFact:"見(み)る covers both 'to see' and 'to watch' in Japanese. There is no separate word like English distinguishes between them. テレビを見(み)る means 'to watch TV,' while 富士山(ふじさん)を見(み)る means 'to see Mt. Fuji.' The ている form works for both."},

  {type:"teach", trg:"座(すわ)って", src:"sit (て-form)", pos:"verb", gender:null,
   note:"座(すわ)る (to sit) is a Group 1 る-ending verb. る becomes って.\n座(すわ)る > 座(すわ)って.",
   example:"A: こ���に座(すわ)ってください。\nB: ありがとうございます。",
   exampleSrc:"A: Please sit here.\nB: Thank you.",
   funFact:"座(す���)る is a Group 1 verb even though it ends in る. The key test: if the vowel before る is not -i or -e, it is Group 1. 座(すわ)る has -a before る, so it is Group 1. This is the trickiest part of verb classification for learners."},

  {type:"fb", s:"今(いま)本(ほん)を{1}います。\n(I am reading a book now.)", a:"��(よ)んで", opts:["読(よ)んで","読(よ)みて","読(よ)って","読(よ)むて"], sSrc:"I am reading a book now.",
   hint:"読(よ)む is a む-ending verb. The む group changes to んで in て-form."},

  {type:"teach", trg:"写真(しゃしん)を撮(と)る", src:"to take a photo", pos:"verb", gender:null,
   note:"撮(と)る (to take) is Group 1. て-form: 撮(と)って.\nUsed with もいいですか for permission.",
   example:"A: ここで写真(しゃしん)を撮(と)ってもいいですか?\nB: すみません、ここはだめです。",
   exampleSrc:"A: May I take a photo here?\nB: Sorry, it is not allowed here.",
   funFact:"In Japan, photography etiquette matters greatly. Many temples, museums, and restaurants prohibit photos. The phrase 'shashin wo totte mo ii desu ka?' is essential for polite travelers. You will also hear 'satsuei kinshi' (photography prohibited)."},

  {type:"teach", trg:"立(た)っています", src:"is standing", pos:"verb", gender:null,
   note:"立(た)つ (to stand) in the ongoing form: 立(た)って + ��ます.\nDescribes the state of standing.",
   example:"A: あの人(ひと)は誰(だれ)ですか?\nB: 駅(えき)の前(まえ)��立(た)っていますか? あれは山田(やまだ)さんです。",
   exampleSrc:"A: Who is that person?\nB: The one standing in front of the station? That is Yamada.",
   funFact:"立(た)っている shows the 'result state' use of ている: the person stood up (action) and is now standing (result). Many verbs work this way: 住(す)んでいる (is living/resides), 知(し)っている (knows), 持(も)っている (has/possesses)."},

  {type:"mc", q:"写真(しゃしん)を撮(と)ってもいいですか means:", opts:["I am taking a photo","May I take a photo?","Please take a photo","I took a photo"], ans:"May I take a photo?",
   hint:"The てもいいですか pattern is used to ask for permission."},

  {type:"match", pairs:[{trg:"食(た)べてください",src:"please eat"},{trg:"食(た)べています",src:"is eating"},{trg:"食(た)べてもいいです��",src:"may I eat?"},{trg:"飲(の)んでください",src:"please drink"}]},

  {type:"fb", s:"{1}を撮(と)ってもいいですか?\n(May I take a photo?)", a:"写真(しゃしん)", opts:["���真(しゃしん)","映画(えいが)","テレビ","音楽(お��がく)"], sSrc:"May I take a photo?",
   hint:"The word for a picture captured by a camera."},

  {type:"match", pairs:[{trg:"読(よ)んでいます",src:"is reading"},{trg:"見(み)ています",src:"is watching"},{trg:"立(た)っています",src:"is standing"},{trg:"座(すわ)ってください",src:"please sit"}]},

  {type:"mc", q:"テレビを見(み)ています means:", opts:["Please watch TV","I watched TV","I am watching TV","May I watch TV?"], ans:"I am watching TV",
   hint:"The ています pattern describes an action happening right now."},

  {type:"tip", title:"Three Uses of て-form",
   text:"1. Requests: て-form + くだ��い\n食(た)べてください。(Please eat.)\n来(き)てください。(Please come.)\n\n2. Ongoing actions: て-form + いる/います\n食(た)べています。(I am eating.)\n読(よ)んでいます。(I am reading.)\n\n3. Permission: て-form + もいいですか\n食(た)べてもいいですか? (May I eat?)\n撮(と)っ���もいいですか? (May I take it?)",
   deepDive:{title:"ている for states vs actions",
    text:"The ている form has two main uses:\n\nOngoing action: 今(いま)ご飯(は��)を食(た)べています。(I am eating dinner right now.)\nResultant state: 結婚(けっこん)しています。(I am married.)\n\nHow to tell the difference? Verbs describing instantaneous actions (like 'to marry,' 'to die,' 'to arrive') use ている for the resulting state. Verbs describing continuous actions (like 'to eat,' 'to read,' 'to run') use ている for the ongoing action."}},
{type:"match",pairs:[{trg:"\u301Cてください",src:"please do ~"},{trg:"\u301Cている",src:"is doing ~ / ~ ing"},{trg:"\u301CてもいいですかQuestion",src:"may I ~? / is it okay to ~?"}]}]},

,BATCH2_L1
,BATCH4_L01
,BATCH4_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
,N4VERBS_L1
,
  JEXP_11_L1,
  JEXP_11_L2,
  JEXP_11_L3
]};
export default UNIT_11;
