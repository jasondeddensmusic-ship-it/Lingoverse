// Japanese V2 Unit 19 — じょうけん (Conditionals)
// Level: B1.1 — JLPT N3 aligned.
// たら, ば, と, なら — four conditional forms.

const UNIT_19 = {
  n:19, lang:"ja", srcLang:"en", track:"v2",
  title:"じょうけん", sub:"Conditionals",
  icon:"🔀", level:"B1.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: たら・と (If/When) ═══
{id:"jav2_u19l1", title:"たら・と", icon:"❓", xp:15, board:true, steps:[
  {type:"intro", title:"たら・と",
   desc:"Master two of Japan's four conditional forms. たら is the most versatile 'if/when' and works in almost any situation. と expresses automatic, natural results: 'when you push this button, the door opens.' These are the two most common conditionals in daily speech.",
   goals:["Use たら for general 'if/when' conditions","Use と for automatic/natural results","Distinguish たら (flexible) from と (automatic)"]},

  {type:"teach", trg:"〜たら", src:"if ~ / when ~", pos:"part", gender:null,
   note:"Past tense (た-form) + ら. The most versatile conditional.\nいったら = if/when (someone) goes. たべたら = if/when (someone) eats.",
   example:"A: あしたあめがふったらうちにいます。\nB: いいですね。ゆっくりやすんでください。",
   exampleSrc:"A: If it rains tomorrow, I will stay home.\nB: That sounds nice. Please rest well.",
   funFact:"たら is the safest conditional for learners. It works in almost every situation where English uses 'if' or 'when.' Form it by taking the past tense and adding ら: いった → いったら, たべた → たべたら, だった → だったら. When in doubt about which conditional to use, choose たら."},

  {type:"teach", trg:"〜と", src:"when ~ (automatic result)", pos:"part", gender:null,
   note:"Dictionary form + と = automatic, habitual, or natural result.\nCannot be used with requests, commands, or intentions.",
   example:"A: このボタンをおすとドアがあきます。\nB: べんりですね。",
   exampleSrc:"A: When you push this button, the door opens.\nB: That is convenient.",
   funFact:"と is the conditional for laws of nature and mechanical cause-and-effect. Spring comes and flowers bloom. You turn right and the station is there. It implies an automatic, inevitable result. You cannot use と when the result involves your will, request, or command."},

  {type:"teach", trg:"おす", src:"to push / to press", pos:"verb", gender:null,
   note:"Group 1 verb. ボタンをおす = press a button.\nKanji: 押す.",
   example:"A: どのボタンをおしますか？\nB: あかいボタンをおしてください。",
   exampleSrc:"A: Which button should I press?\nB: Please press the red button.",
   funFact:"押す is essential for daily life in Japan, where vending machines, train ticket machines, and electronic devices require button-pressing. The kanji 押 appears in 押入れ (oshiire, Japanese closet with sliding doors) and 押印 (stamp/seal application)."},

  {type:"teach", trg:"まがる", src:"to turn (a corner)", pos:"verb", gender:null,
   note:"Group 1 verb. みぎにまがる = turn right. ひだりにまがる = turn left.\nKanji: 曲がる.",
   example:"A: つぎのかどをみぎにまがるとえきがあります。\nB: ありがとうございます。",
   exampleSrc:"A: When you turn right at the next corner, there is a station.\nB: Thank you.",
   funFact:"曲がる is the standard verb for giving directions. Combined with と (automatic result conditional), it forms the classic direction pattern: まがると...があります (when you turn, there is...). The kanji 曲 also means 'song/tune' (曲 kyoku), from the idea of bending/curving musical notes."},

  {type:"mc", q:"このボタンをおすとドアがあきます means:", opts:["Push this button or the door opens","If you want, push the button","When you push this button, the door opens","Push the button and close the door"], ans:"When you push this button, the door opens",
   hint:"と expresses an automatic result: one action naturally triggers the next."},

  {type:"teach", trg:"さむい", src:"cold (weather/air)", pos:"adj", gender:null,
   note:"い-adjective for cold temperatures. Opposite: あつい (hot).\nKanji: 寒い. Applies to weather, not objects.",
   example:"A: さむかったらコートをきてください。\nB: はい、そうします。",
   exampleSrc:"A: If it is cold, please wear a coat.\nB: Yes, I will do that.",
   funFact:"Japanese distinguishes さむい (air/weather is cold) from つめたい (an object is cold to touch). Cold water is つめたいみず, but a cold day is さむいひ. This distinction does not exist in most European languages, making it a common source of mistakes for learners."},

  {type:"teach", trg:"はるになる", src:"spring comes / it becomes spring", pos:"verb", gender:null,
   note:"はる (spring) + になる (to become). Seasonal change expression.\nUsed with と for natural phenomena.",
   example:"A: はるになるとさくらがさきます。\nB: きれいでしょうね。",
   exampleSrc:"A: When spring comes, cherry blossoms bloom.\nB: It must be beautiful.",
   funFact:"Seasonal vocabulary is deeply embedded in Japanese. Each season has iconic imagery: spring (sakura), summer (fireworks), autumn (red leaves), winter (snow). The phrase haru ni naru to (when spring comes) begins countless poems and songs. Japan's intense awareness of seasons shapes food, fashion, and greetings."},

  {type:"fb", s:"あめがふっ___うちにいます。\n(If it rains, I will stay home.)", a:"たら", opts:["たら","と","ば","なら"], sSrc:"If it rains, I will stay home.",
   hint:"The most versatile conditional, formed by adding this to the past tense (た-form)."},

  {type:"teach", trg:"さく", src:"to bloom (flowers)", pos:"verb", gender:null,
   note:"Group 1 verb. さくらがさく = cherry blossoms bloom.\nKanji: 咲く.",
   example:"A: いつさくらがさきますか？\nB: だいたい3がつのおわりです。",
   exampleSrc:"A: When do cherry blossoms bloom?\nB: Usually around the end of March.",
   funFact:"咲く is almost exclusively used for flowers blooming. The sakura forecast (桜前線, sakura zensen) is a major news event each spring, tracking the 'cherry blossom front' as it moves northward across Japan from late March to mid-May. Hanami (flower viewing) parties under blooming trees are a beloved tradition."},

  {type:"teach", trg:"おわる", src:"to end / to finish", pos:"verb", gender:null,
   note:"Group 1 verb (intransitive). しごとがおわる = work finishes.\nKanji: 終わる. Transitive pair: おえる.",
   example:"A: しごとがおわったらのみにいきましょう。\nB: いいですね！",
   exampleSrc:"A: When work finishes, let us go for drinks.\nB: Sounds good!",
   funFact:"終わる (intransitive: it ends) pairs with 終える (transitive: I end it). After-work drinking (仕事が終わったら飲みに行く) is a staple of Japanese social life. The pattern たら + しましょう (when X happens, let us do Y) is extremely common for making plans."},

  {type:"mc", q:"Which conditional is used for natural/automatic results?", opts:["たら","と","ば","なら"], ans:"と",
   hint:"This conditional describes inevitable cause-and-effect, like seasons changing or buttons working."},

  {type:"tip", title:"たら vs. と",
   text:"たら: Flexible. Works for hypothetical, real, past, future.\nあめがふったら (if it rains / when it rained)\nCan be followed by requests, intentions, commands.\n\nと: Automatic results only. Laws, habits, directions.\nはるになるとさくらがさく (when spring comes, blossoms bloom)\nCannot be followed by requests or intentions.\n\nWrong: *あめがふるとかさをかしてください (cannot use と + request).\nRight: あめがふったらかさをかしてください (if it rains, please lend me an umbrella).",
   deepDive:{title:"When と Goes Wrong",
    text:"The biggest mistake with と is using it with volitional results. と only works when the result is automatic or beyond human control.\n\nCorrect: ボタンをおすとでんきがつく (press button, light turns on: automatic).\nWrong: ボタンをおすとでんきをつけてください (press button, please turn on light: request).\n\nCorrect: みぎにまがるとえきがある (turn right, station is there: fact).\nWrong: みぎにまがるとえきにいってください (turn right, please go to station: request).\n\nWhen in doubt, use たら. It works everywhere."}},

  {type:"match", pairs:[{trg:"おす",src:"to push/press"},{trg:"まがる",src:"to turn"},{trg:"さく",src:"to bloom"},{trg:"おわる",src:"to end"}]},

  {type:"fb", s:"みぎにまがる___えきがあります。\n(When you turn right, there is a station.)", a:"と", opts:["と","たら","ば","なら"], sSrc:"When you turn right, there is a station.",
   hint:"The conditional for automatic/factual results. Turning right naturally leads to the station."},

  {type:"match", pairs:[{trg:"たら",src:"if/when (flexible)"},{trg:"と",src:"when (automatic result)"},{trg:"さむい",src:"cold (weather)"},{trg:"はるになる",src:"spring comes"}]},

  {type:"mc", q:"しごとがおわったらのみにいきましょう means:", opts:["Work ended so I drank","When work finishes, let us go for drinks","If we drink, work will end","Work ends automatically"], ans:"When work finishes, let us go for drinks",
   hint:"たら + しましょう is the pattern for suggesting an activity after a condition is met."},
]},

// ═══ L2: ば・なら (Logical & Contextual If) ═══
{id:"jav2_u19l2", title:"ば・なら", icon:"🧠", xp:15, board:true, steps:[
  {type:"intro", title:"ば・なら",
   desc:"Complete your conditional toolkit with ば and なら. ば expresses logical conditions: 'if you study, you will pass.' なら picks up on context: 'if you are talking about Tokyo, I recommend Asakusa.' Together with たら and と, you now have all four Japanese conditionals.",
   goals:["Use ば for logical/hypothetical conditions","Use なら for contextual/topical conditions","Choose the right conditional for each situation"]},

  {type:"teach", trg:"〜ば", src:"if ~ (logical condition)", pos:"part", gender:null,
   note:"Group 1: change う to え-row + ば. いく → いけば.\nGroup 2: remove る, add れば. たべる → たべれば.\nAdj: い → ければ. さむい → さむければ.",
   example:"A: べんきょうすればごうかくできますよ。\nB: がんばります！",
   exampleSrc:"A: If you study, you can pass.\nB: I will do my best!",
   funFact:"ば is the most literary and logical conditional. It presents a clean if-then relationship. It is favored in proverbs: 急がば回れ (isogaba maware: if you hurry, take the long way around). In modern speech, ば is common with adjectives and in set phrases."},

  {type:"teach", trg:"〜なら", src:"if (talking about) ~ / if it is the case that ~", pos:"part", gender:null,
   note:"Follows nouns, verbs, adjectives. Picks up on what was just said.\nにほんなら = if we are talking about Japan...",
   example:"A: にほんにいきたいです。\nB: にほんなら、きょうとがおすすめです。",
   exampleSrc:"A: I want to go to Japan.\nB: If it is Japan (you are talking about), I recommend Kyoto.",
   funFact:"なら is the 'contextual' conditional. It responds to information just received. Someone says 'I like sushi' and you respond 'nara, this restaurant is great.' It is the conditional of advice and recommendations. It literally picks up the topic and adds your input."},

  {type:"teach", trg:"ごうかくする", src:"to pass (an exam)", pos:"verb", gender:null,
   note:"する-verb. ごうかく = passing/success. Opposite: ふごうかく (fail).\nKanji: 合格する.",
   example:"A: しけんにごうかくしました！\nB: おめでとうございます！",
   exampleSrc:"A: I passed the exam!\nB: Congratulations!",
   funFact:"合格 combines 合 (match/fit) and 格 (standard/rank). Passing exams is a major life event in Japan, where entrance exams determine school and career paths. The word goukaku appears on lucky charms (omamori) sold at shrines during exam season."},

  {type:"teach", trg:"おすすめ", src:"recommendation", pos:"noun", gender:null,
   note:"From すすめる (to recommend). おすすめ adds the honorific お prefix.\nおすすめです = I recommend it.",
   example:"A: なにかおすすめはありますか？\nB: このラーメンがおすすめです。",
   exampleSrc:"A: Do you have any recommendations?\nB: I recommend this ramen.",
   funFact:"おすすめ is one of the most useful words in Japan. Every restaurant has osusume (recommended dishes). Shop staff use it constantly. The pattern なら + おすすめ (if you are talking about X, I recommend Y) is a natural combination that Japanese people use daily."},

  {type:"mc", q:"べんきょうすればごうかくできる means:", opts:["I studied and passed","If you study, you can pass","Studying is passing","You passed because you studied"], ans:"If you study, you can pass",
   hint:"ば presents a logical if-then condition: if the first part is true, the second follows."},

  {type:"teach", trg:"やすければ", src:"if it is cheap", pos:"adj", gender:null,
   note:"ば conditional of やすい (cheap). い → ければ.\nたかければ = if it is expensive.",
   example:"A: やすければかいたいです。\nB: セールのときにいきましょう。",
   exampleSrc:"A: If it is cheap, I want to buy it.\nB: Let us go during the sale.",
   funFact:"Adjective conditionals with ば are very natural in Japanese. やすければ (if cheap), おいしければ (if tasty), ちかければ (if close). This pattern is used more frequently than the たら equivalent for adjectives in many contexts. It sounds clean and direct."},

  {type:"teach", trg:"ちかければ", src:"if it is close/nearby", pos:"adj", gender:null,
   note:"ば conditional of ちかい (close/near). い → ければ.\nKanji: 近ければ.",
   example:"A: えきにちかければべんりですね。\nB: そうですね、あるいていけます。",
   exampleSrc:"A: If it is close to the station, it is convenient.\nB: That is right, you can walk.",
   funFact:"Proximity to train stations is the most important factor in Japanese real estate. Listings always state ekimae (in front of station) or toho X-fun (X minutes on foot). ちかければ (if it is close) is a phrase that comes up in nearly every apartment hunting conversation."},

  {type:"tip", title:"All Four Conditionals",
   text:"たら: Most versatile. Any situation. 'If it rains, I will stay home.'\nあめがふったらうちにいます。\n\nと: Automatic results. 'Push this and the door opens.'\nおすとドアがあきます。\n\nば: Logical condition. 'If you study, you can pass.'\nべんきょうすればごうかくできる。\n\nなら: Contextual. 'If (you are asking about) Japan, try Kyoto.'\nにほんなら、きょうとがいい。\n\nQuick guide: When in doubt, use たら.",
   deepDive:{title:"Choosing the Right Conditional",
    text:"Each conditional has a 'personality':\n\nたら: The generalist. Works everywhere. Safe default.\nと: The scientist. Only for facts and automatic results.\nば: The logician. Clean if-then. Great with adjectives.\nなら: The advisor. Responds to context and gives recommendations.\n\nOverlap is huge. Many sentences work with 2 or 3 conditionals. But each adds a slightly different nuance. Native speakers choose instinctively based on what they want to emphasize: the timing (たら), the automaticity (と), the logic (ば), or the context (なら)."}},

  {type:"fb", s:"にほん___、きょうとがおすすめです。\n(If it is Japan you are talking about, I recommend Kyoto.)", a:"なら", opts:["なら","たら","と","ば"], sSrc:"If it is Japan you are talking about, I recommend Kyoto.",
   hint:"The contextual conditional that picks up on what was just mentioned."},

  {type:"teach", trg:"さがす", src:"to search / to look for", pos:"verb", gender:null,
   note:"Group 1 verb. しごとをさがす = to look for a job.\nKanji: 探す.",
   example:"A: あたらしいアパートをさがしています。\nB: えきにちかければべんりですよ。",
   exampleSrc:"A: I am looking for a new apartment.\nB: If it is close to the station, it is convenient.",
   funFact:"探す uses the kanji 探 (search/probe). Japanese apartment hunting (heya sagashi) is a specific cultural experience involving real estate agents (fudousan-ya) and detailed room layouts. The word also appears in 探偵 (tantei, detective) and 探検 (tanken, exploration)."},

  {type:"teach", trg:"れんらくする", src:"to contact / to get in touch", pos:"verb", gender:null,
   note:"する-verb. れんらく = contact/communication.\nKanji: 連絡する. こまったられんらくしてください.",
   example:"A: なにかあったられんらくしてください。\nB: わかりました。",
   exampleSrc:"A: If anything happens, please contact me.\nB: Understood.",
   funFact:"連絡 combines 連 (link/chain) and 絡 (entwine). In Japanese business culture, renraku is one of the three pillars of workplace communication: 報連相 (hourensou) = 報告 (report), 連絡 (contact), 相談 (consult). This trio is drilled into every new employee."},

  {type:"mc", q:"やすければかいたい means:", opts:["It was cheap so I bought it","If it is cheap, I want to buy it","I want to buy cheap things","Buying cheap is good"], ans:"If it is cheap, I want to buy it",
   hint:"ければ is the ば conditional for い-adjectives. It expresses a logical condition."},

  {type:"match", pairs:[{trg:"ば",src:"if (logical)"},{trg:"なら",src:"if (contextual)"},{trg:"ごうかくする",src:"to pass (exam)"},{trg:"おすすめ",src:"recommendation"}]},

  {type:"fb", s:"べんきょう___ごうかくできますよ。\n(If you study, you can pass.)", a:"すれば", opts:["すれば","したら","すると","するなら"], sSrc:"If you study, you can pass.",
   hint:"The ば conditional of する. Expresses a logical if-then relationship."},

  {type:"match", pairs:[{trg:"やすければ",src:"if it is cheap"},{trg:"ちかければ",src:"if it is close"},{trg:"さがす",src:"to search"},{trg:"れんらくする",src:"to contact"}]},

  {type:"mc", q:"Which conditional CANNOT be followed by a request?", opts:["たら","と","ば","なら"], ans:"と",
   hint:"This conditional only works with automatic, natural results, never with commands or requests."},
]},

]};
export default UNIT_19;
