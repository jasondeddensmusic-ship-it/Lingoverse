// Japanese V2 Unit 19. 条件(じょうけん) (Conditionals)
import BATCH11_L1 from './_batch11_u19_L01.js';
import BATCH10_L1 from './_batch10_u19_L01.js';
import BATCH9_L1 from './_batch9_u19_L01.js';
import BATCH7_L1 from './_batch7_u19_L01.js';
import BATCH8_L1 from './_batch8_u19_L01.js';
import BATCH6_L1 from './_batch6_u19_L01.js';
import BATCH5_L02 from './_batch5_u19_L02.js';
import BATCH5_L01 from './_batch5_u19_L01.js';
import BATCH2_L02 from './_batch2_u19_L02.js';
import BATCH2_L01 from './_batch2_u19_L01.js';
import EXP_L3 from './_temp_u19_expand_L01.js';import EXP_L4 from './_temp_u19_expand_L02.js';import EXP_L5 from './_temp_u19_expand_L03.js';
// Level: B1.1. JLPT N3 aligned.
// たら, ば, と, なら. four conditional forms.

const UNIT_19 = {
  n:19, lang:"ja", srcLang:"en", track:"v2",
  title:"条件(じょうけん)", sub:"Conditionals",
  icon:"🔀", level:"B1.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: たら・と (If/When) ═══
{id:"jav2_u19l1", title:"たら・と", icon:"❓", xp:15, board:true, steps:[
  {type:"intro", title:"たら・と",
   desc:"Master two of Japan's four conditional forms. たら is the most versatile 'if/when' and works in almost any situation. と expresses automatic, natural results: 'when you push this button, the door opens.' These are the two most common conditionals in daily speech.",
   goals:["Use たら for general 'if/when' conditions","Use と for automatic/natural results","Distinguish たら (flexible) from と (automatic)"]},

  {type:"teach", trg:"〜たら", src:"if ~ / when ~", pos:"part", gender:null,
   note:"Past tense (た-form) + ら. The most versatile conditional.\n行(い)ったら = if/when (someone) goes. 食(た)べたら = if/when (someone) eats.",
   example:"A: 明日(あした)雨(あめ)が降(ふ)ったら家(うち)にいます。\nB: いいですね。ゆっくり休(やす)んでください。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
   exampleSrc:"A: If it rains tomorrow, I will stay home.\nB: That sounds nice. Please rest well.\nA: I am also interested.\nB: Then, how about doing it together next time?",
   funFact:"たら is the safest conditional for learners. It works in almost every situation where English uses 'if' or 'when.' Form it by taking the past tense and adding ら: 行(い)った → 行(い)ったら, 食(た)べた → 食(た)べたら, だった → だったら. When in doubt about which conditional to use, choose たら."},

  {type:"teach", trg:"〜と", src:"when ~ (automatic result)", pos:"part", gender:null,
   note:"Dictionary form + と = automatic, habitual, or natural result.\nCannot be used with requests, commands, or intentions.",
   example:"A: このボタンを押(お)すとドアが開(あ)きます。\nB: 便利(べんり)ですね。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
   exampleSrc:"A: When you push this button, the door opens.\nB: That is convenient.\nA: What was it like?\nB: It was much better than I imagined.",
   funFact:"と is the conditional for laws of nature and mechanical cause-and-effect. Spring comes and flowers bloom. You turn right and the station is there. It implies an automatic, inevitable result. You cannot use と when the result involves your will, request, or command."},

  {type:"teach", trg:"押(お)す", src:"to push / to press", pos:"verb", gender:null,
   note:"Group 1 verb. ボタンを押(お)す = press a button.\nKanji: 押す.",
   example:"A: どのボタンを押(お)しますか？\nB: 赤(あか)いボタンを押(お)してください。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
   exampleSrc:"A: Which button should I press?\nB: Please press the red button.\nA: What did you eat?\nB: I ate the local specialty.",
   funFact:"押す is essential for daily life in Japan, where vending machines, train ticket machines, and electronic devices require button-pressing. The kanji 押 appears in 押入(おしい)れ (oshiire, Japanese closet with sliding doors) and 押印(おういん) (stamp/seal application)."},

  {type:"teach", trg:"曲(ま)がる", src:"to turn (a corner)", pos:"verb", gender:null,
   note:"Group 1 verb. 右(みぎ)に曲(ま)がる = turn right. 左(ひだり)に曲(ま)がる = turn left.\nKanji: 曲がる.",
   example:"A: 次(つぎ)の角(かど)を右(みぎ)に曲(ま)がると駅(えき)があります。\nB: ありがとうございます。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
   exampleSrc:"A: When you turn right at the next corner, there is a station.\nB: Thank you.\nA: That is exciting.\nB: Yes, I am already excited.",
   funFact:"曲がる is the standard verb for giving directions. Combined with と (automatic result conditional), it forms the classic direction pattern: 曲(ま)がると...があります (when you turn, there is...). The kanji 曲 also means 'song/tune' (曲 kyoku), from the idea of bending/curving musical notes."},

  {type:"mc", q:"このボタンを押(お)すとドアが開(あ)きます means:", opts:["When you push this button, the door opens","If you want, push the button","Push this button or the door opens","Push the button and close the door"], ans:"When you push this button, the door opens",
   hint:"と expresses an automatic result: one action naturally triggers the next."},

  {type:"teach", trg:"寒(さむ)い", src:"cold (weather/air)", pos:"adj", gender:null,
   note:"い-adjective for cold temperatures. Opposite: 暑(あつ)い (hot).\nKanji: 寒い. Applies to weather, not objects.",
   example:"A: 寒(さむ)かったらコートを着(き)てください。\nB: はい、そうします。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
   exampleSrc:"A: If it is cold, please wear a coat.\nB: Yes, I will do that.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
   funFact:"Japanese distinguishes 寒(さむ)い (air/weather is cold) from 冷(つめ)たい (an object is cold to touch). Cold water is 冷(つめ)たい水(みず), but a cold day is 寒(さむ)い日(ひ). This distinction does not exist in most European languages, making it a common source of mistakes for learners."},

  {type:"teach", trg:"春(はる)になる", src:"spring comes / it becomes spring", pos:"verb", gender:null,
   note:"春(はる) (spring) + になる (to become). Seasonal change expression.\nUsed with と for natural phenomena.",
   example:"A: 春(はる)になると桜(さくら)が咲(さ)きます。\nB: きれいでしょうね。\nA: どうでしたか？\nB: とても良(よ)かったです。",
   exampleSrc:"A: When spring comes, cherry blossoms bloom.\nB: It must be beautiful.\nA: How was it?\nB: It was very good.",
   funFact:"Seasonal vocabulary is deeply embedded in Japanese. Each season has iconic imagery: spring (sakura), summer (fireworks), autumn (red leaves), winter (snow). The phrase 春(はる)になると (when spring comes) begins countless poems and songs. Japan's intense awareness of seasons shapes food, fashion, and greetings."},

  {type:"fb", s:"雨(あめ)が降(ふ)っ{1}家(うち)にいます。\n(If it rains, I will stay home.)", a:"たら", opts:["たら","と","ば","なら"], sSrc:"If it rains, I will stay home.",
   hint:"The most versatile conditional, formed by adding this to the past tense (た-form)."},

  {type:"teach", trg:"咲(さ)く", src:"to bloom (flowers)", pos:"verb", gender:null,
   note:"Group 1 verb. 桜(さくら)が咲(さ)く = cherry blossoms bloom.\nKanji: 咲く.",
   example:"A: いつ桜(さくら)が咲(さ)きますか？\nB: だいたい3月(がつ)の終(お)わりです。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
   exampleSrc:"A: When do cherry blossoms bloom?\nB: Usually around the end of March.\nA: When was it?\nB: It was last summer.",
   funFact:"咲く is almost exclusively used for flowers blooming. The sakura forecast (桜前線, sakura zensen) is a major news event each spring, tracking the 'cherry blossom front' as it moves northward across Japan from late March to mid-May. Hanami (flower viewing) parties under blooming trees are a beloved tradition."},

  {type:"teach", trg:"終(お)わる", src:"to end / to finish", pos:"verb", gender:null,
   note:"Group 1 verb (intransitive). 仕事(しごと)が終(お)わる = work finishes.\nKanji: 終わる. Transitive pair: 終(お)える.",
   example:"A: 仕事(しごと)が終(お)わったら飲(の)みに行(い)きましょう。\nB: いいですね！\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
   exampleSrc:"A: When work finishes, let us go for drinks.\nB: Sounds good!\nA: That is nice.\nB: Yes, it was very fun.",
   funFact:"終わる (intransitive: it ends) pairs with 終える (transitive: I end it). After-work drinking (仕事が終わったら飲みに行く) is a staple of Japanese social life. The pattern たら + しましょう (when X happens, let us do Y) is extremely common for making plans."},

  {type:"mc", q:"Which conditional is used for natural/automatic results?", opts:["たら","と","ば","なら"], ans:"と",
   hint:"This conditional describes inevitable cause-and-effect, like seasons changing or buttons working."},

  {type:"tip", title:"たら vs. と",
   text:"たら: Flexible. Works for hypothetical, real, past, future.\n雨(あめ)が降(ふ)ったら (if it rains / when it rained)\nCan be followed by requests, intentions, commands.\n\nと: Automatic results only. Laws, habits, directions.\n春(はる)になると桜(さくら)が咲(さ)く (when spring comes, blossoms bloom)\nCannot be followed by requests or intentions.\n\nWrong: *雨(あめ)が降(ふ)ると傘(かさ)を貸(か)してください (cannot use と + request).\nRight: 雨(あめ)が降(ふ)ったら傘(かさ)を貸(か)してください (if it rains, please lend me an umbrella).",
   deepDive:{title:"When と Goes Wrong",
    text:"The biggest mistake with と is using it with volitional results. と only works when the result is automatic or beyond human control.\n\nCorrect: ボタンを押(お)すと電気(でんき)がつく (press button, light turns on: automatic).\nWrong: ボタンを押(お)すと電気(でんき)をつけてください (press button, please turn on light: request).\n\nCorrect: 右(みぎ)に曲(ま)がると駅(えき)がある (turn right, station is there: fact).\nWrong: 右(みぎ)に曲(ま)がると駅(えき)に行(い)ってください (turn right, please go to station: request).\n\nWhen in doubt, use たら. It works everywhere."}},

  {type:"match", pairs:[{trg:"押(お)す",src:"to push/press"},{trg:"曲(ま)がる",src:"to turn"},{trg:"咲(さ)く",src:"to bloom"},{trg:"終(お)わる",src:"to end"}]},

  {type:"fb", s:"右(みぎ)に曲(ま)がる{1}駅(えき)があります。\n(When you turn right, there is a station.)", a:"と", opts:["と","たら","ば","なら"], sSrc:"When you turn right, there is a station.",
   hint:"The conditional for automatic/factual results. Turning right naturally leads to the station."},

  {type:"match", pairs:[{trg:"たら",src:"if/when (flexible)"},{trg:"と",src:"when (automatic result)"},{trg:"寒(さむ)い",src:"cold (weather)"},{trg:"春(はる)になる",src:"spring comes"}]},

  {type:"mc", q:"仕事(しごと)が終(お)わったら飲(の)みに行(い)きましょう means:", opts:["Work ended so I drank","If we drink, work will end","When work finishes, let us go for drinks","Work ends automatically"], ans:"When work finishes, let us go for drinks",
   hint:"たら + しましょう is the pattern for suggesting an activity after a condition is met."},
]},

// ═══ L2: ば・なら (Logical & Contextual If) ═══
{id:"jav2_u19l2", title:"ば・なら", icon:"🧠", xp:15, board:true, steps:[
  {type:"intro", title:"ば・なら",
   desc:"Complete your conditional toolkit with ば and なら. ば expresses logical conditions: 'if you study, you will pass.' なら picks up on context: 'if you are talking about Tokyo, I recommend Asakusa.' Together with たら and と, you now have all four Japanese conditionals.",
   goals:["Use ば for logical/hypothetical conditions","Use なら for contextual/topical conditions","Choose the right conditional for each situation"]},

  {type:"teach", trg:"〜ば", src:"if ~ (logical condition)", pos:"part", gender:null,
   note:"Group 1: change う to え-row + ば. 行(い)く → 行(い)けば.\nGroup 2: remove る, add れば. 食(た)べる → 食(た)べれば.\nAdj: い → ければ. 寒(さむ)い → 寒(さむ)ければ.",
   example:"A: 勉強(べんきょう)すれば合格(ごうかく)できますよ。\nB: 頑張(がんば)ります！\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
   exampleSrc:"A: If you study, you can pass.\nB: I will do my best!\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
   funFact:"ば is the most literary and logical conditional. It presents a clean if-then relationship. It is favored in proverbs: 急(いそ)がば回(まわ)れ (isogaba maware: if you hurry, take the long way around). In modern speech, ば is common with adjectives and in set phrases."},

  {type:"teach", trg:"〜なら", src:"if (talking about) ~ / if it is the case that ~", pos:"part", gender:null,
   note:"Follows nouns, verbs, adjectives. Picks up on what was just said.\n日本(にほん)なら = if we are talking about Japan...",
   example:"A: 日本(にほん)に行(い)きたいです。\nB: 日本(にほん)なら、京都(きょうと)がおすすめです。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
   exampleSrc:"A: I want to go to Japan.\nB: If it is Japan (you are talking about), I recommend Kyoto.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
   funFact:"なら is the 'contextual' conditional. It responds to information just received. Someone says 'I like sushi' and you respond 'nara, this restaurant is great.' It is the conditional of advice and recommendations. It literally picks up the topic and adds your input."},

  {type:"teach", trg:"合格(ごうかく)する", src:"to pass (an exam)", pos:"verb", gender:null,
   note:"する-verb. 合格(ごうかく) = passing/success. Opposite: 不合格(ふごうかく) (fail).\nKanji: 合格する.",
   example:"A: 試験(しけん)に合格(ごうかく)しました！\nB: おめでとうございます！\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
   exampleSrc:"A: I passed the exam!\nB: Congratulations!\nA: How long did it take?\nB: About two hours.",
   funFact:"合格 combines 合 (match/fit) and 格 (standard/rank). Passing exams is a major life event in Japan, where entrance exams determine school and career paths. The word goukaku appears on lucky charms (omamori) sold at shrines during exam season."},

  {type:"teach", trg:"おすすめ", src:"recommendation", pos:"noun", gender:null,
   note:"From 勧(すす)める (to recommend). おすすめ adds the honorific お prefix.\nおすすめです = I recommend it.",
   example:"A: 何(なに)かおすすめはありますか？\nB: このラーメンがおすすめです。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
   exampleSrc:"A: Do you have any recommendations?\nB: I recommend this ramen.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
   funFact:"おすすめ is one of the most useful words in Japan. Every restaurant has osusume (recommended dishes). Shop staff use it constantly. The pattern なら + おすすめ (if you are talking about X, I recommend Y) is a natural combination that Japanese people use daily."},

  {type:"mc", q:"勉強(べんきょう)すれば合格(ごうかく)できる means:", opts:["If you study, you can pass","I studied and passed","Studying is passing","You passed because you studied"], ans:"If you study, you can pass",
   hint:"ば presents a logical if-then condition: if the first part is true, the second follows."},

  {type:"teach", trg:"安(やす)ければ", src:"if it is cheap", pos:"adj", gender:null,
   note:"ば conditional of 安(やす)い (cheap). い → ければ.\n高(たか)ければ = if it is expensive.",
   example:"A: 安(やす)ければ買(か)いたいです。\nB: セールの時(とき)に行(い)きましょう。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
   exampleSrc:"A: If it is cheap, I want to buy it.\nB: Let us go during the sale.\nA: Do you recommend it?\nB: Yes, please try it.",
   funFact:"Adjective conditionals with ば are very natural in Japanese. 安(やす)ければ (if cheap), 美味(おい)しければ (if tasty), 近(ちか)ければ (if close). This pattern is used more frequently than the たら equivalent for adjectives in many contexts. It sounds clean and direct."},

  {type:"teach", trg:"近(ちか)ければ", src:"if it is close/nearby", pos:"adj", gender:null,
   note:"ば conditional of 近(ちか)い (close/near). い → ければ.\nKanji: 近ければ.",
   example:"A: 駅(えき)に近(ちか)ければ便利(べんり)ですね。\nB: そうですね、歩(ある)いて行(い)けます。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
   exampleSrc:"A: If it is close to the station, it is convenient.\nB: That is right, you can walk.\nA: Shall we go together?\nB: That sounds good. Let's go.",
   funFact:"Proximity to train stations is the most important factor in Japanese real estate. Listings always state ekimae (in front of station) or toho X-fun (X minutes on foot). 近(ちか)ければ (if it is close) is a phrase that comes up in nearly every apartment hunting conversation."},

  {type:"tip", title:"All Four Conditionals",
   text:"たら: Most versatile. Any situation. 'If it rains, I will stay home.'\n雨(あめ)が降(ふ)ったら家(うち)にいます。\n\nと: Automatic results. 'Push this and the door opens.'\n押(お)すとドアが開(あ)きます。\n\nば: Logical condition. 'If you study, you can pass.'\n勉強(べんきょう)すれば合格(ごうかく)できる。\n\nなら: Contextual. 'If (you are asking about) Japan, try Kyoto.'\n日本(にほん)なら、京都(きょうと)がいい。\n\nQuick guide: When in doubt, use たら.",
   deepDive:{title:"Choosing the Right Conditional",
    text:"Each conditional has a 'personality':\n\nたら: The generalist. Works everywhere. Safe default.\nと: The scientist. Only for facts and automatic results.\nば: The logician. Clean if-then. Great with adjectives.\nなら: The advisor. Responds to context and gives recommendations.\n\nOverlap is huge. Many sentences work with 2 or 3 conditionals. But each adds a slightly different nuance. Native speakers choose instinctively based on what they want to emphasize: the timing (たら), the automaticity (と), the logic (ば), or the context (なら)."}},

  {type:"fb", s:"日本(にほん){1}、京都(きょうと)がおすすめです。\n(If it is Japan you are talking about, I recommend Kyoto.)", a:"なら", opts:["なら","たら","と","ば"], sSrc:"If it is Japan you are talking about, I recommend Kyoto.",
   hint:"The contextual conditional that picks up on what was just mentioned."},

  {type:"teach", trg:"探(さが)す", src:"to search / to look for", pos:"verb", gender:null,
   note:"Group 1 verb. 仕事(しごと)を探(さが)す = to look for a job.\nKanji: 探す.",
   example:"A: 新(あたら)しいアパートを探(さが)しています。\nB: 駅(えき)に近(ちか)ければ便利(べんり)ですよ。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
   exampleSrc:"A: I am looking for a new apartment.\nB: If it is close to the station, it is convenient.\nA: Where do you recommend?\nB: I recommend Kyoto.",
   funFact:"探す uses the kanji 探 (search/probe). Japanese apartment hunting (heya sagashi) is a specific cultural experience involving real estate agents (fudousan-ya) and detailed room layouts. The word also appears in 探偵(たんてい) (tantei, detective) and 探検(たんけん) (tanken, exploration)."},

  {type:"teach", trg:"連絡(れんらく)する", src:"to contact / to get in touch", pos:"verb", gender:null,
   note:"する-verb. 連絡(れんらく) = contact/communication.\nKanji: 連絡する. 困(こま)ったら連絡(れんらく)してください.",
   example:"A: 何(なに)かあったら連絡(れんらく)してください。\nB: 分(わ)かりました。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
   exampleSrc:"A: If anything happens, please contact me.\nB: Understood.\nA: What was the best part?\nB: The food was the most delicious.",
   funFact:"連絡 combines 連 (link/chain) and 絡 (entwine). In Japanese business culture, renraku is one of the three pillars of workplace communication: 報連相(ほうれんそう) (hourensou) = 報告(ほうこく) (report), 連絡(れんらく) (contact), 相談(そうだん) (consult). This trio is drilled into every new employee."},

  {type:"mc", q:"安(やす)ければ買(か)いたい means:", opts:["It was cheap so I bought it","If it is cheap, I want to buy it","I want to buy cheap things","Buying cheap is good"], ans:"If it is cheap, I want to buy it",
   hint:"ければ is the ば conditional for い-adjectives. It expresses a logical condition."},

  {type:"match", pairs:[{trg:"ば",src:"if (logical)"},{trg:"なら",src:"if (contextual)"},{trg:"合格(ごうかく)する",src:"to pass (exam)"},{trg:"おすすめ",src:"recommendation"}]},

  {type:"fb", s:"勉強(べんきょう){1}合格(ごうかく)できますよ。\n(If you study, you can pass.)", a:"すれば", opts:["すれば","したら","すると","するなら"], sSrc:"If you study, you can pass.",
   hint:"The ば conditional of する. Expresses a logical if-then relationship."},

  {type:"match", pairs:[{trg:"安(やす)ければ",src:"if it is cheap"},{trg:"近(ちか)ければ",src:"if it is close"},{trg:"探(さが)す",src:"to search"},{trg:"連絡(れんらく)する",src:"to contact"}]},

  {type:"mc", q:"Which conditional CANNOT be followed by a request?", opts:["たら","ば","と","なら"], ans:"と",
   hint:"This conditional only works with automatic, natural results, never with commands or requests."},
]},

,EXP_L3,EXP_L4,EXP_L5
,BATCH2_L01
,BATCH2_L02
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_19;
