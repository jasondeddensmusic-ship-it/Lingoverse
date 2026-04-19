// Batch 6 – Unit 11 (A2.1 て-Form): Requests & Instructions
const BATCH6_L1 = {
  id:"jav2_u11l_b6_1", title:"お願(ねが)いと指示(しじ)", icon:"📋", xp:15, board:true,
  steps:[
    {type:"intro", title:"お願(ねが)いと指示(しじ)",
     desc:"Practice the て-form in real-world situations: making requests, giving instructions, and describing sequential actions. These patterns appear constantly at work, home, and in service situations.",
     goals:["Make polite requests with てください","Give sequential instructions","Use てから (after doing) pattern"]},

    {type:"teach", trg:"付(つ)ける", src:"to turn on / to attach", pos:"verb", gender:null,
     note:"Group 2 verb. 電気(でんき)を付(つ)ける = to turn on the light.\nKanji: 付ける. Opposite: 消(け)す (turn off).",
     example:"A: 電気(でんき)を付(つ)けてください。\nB: はい、付(つ)けました。",
     exampleSrc:"A: Please turn on the light.\nB: Okay, I turned it on.",
     funFact:"付(つ)ける covers many meanings: turn on (lights, TV), attach (a name, a label), put on (perfume). The kanji 付 shows a person attaching something. Japanese rooms often have a リモコン (remote control) for the ceiling light, which can change brightness and color temperature."},

    {type:"teach", trg:"消(け)す", src:"to turn off / to extinguish / to erase", pos:"verb", gender:null,
     note:"Group 1 verb. 電気(でんき)を消(け)す = to turn off the light.\nKanji: 消す. Opposite: 付(つ)ける.",
     example:"A: テレビを消(け)してください。\nB: はい、消(け)しました。",
     exampleSrc:"A: Please turn off the TV.\nB: Okay, I turned it off.",
     funFact:"消(け)す works for lights, fires, sounds, and even data. 消(け)しゴム (eraser) uses this verb root. 火(ひ)を消(け)す (put out a fire) is critical vocabulary. In Japanese horror stories, lights turning off (電気(でんき)が消(き)えた) signals something scary is about to happen."},

    {type:"teach", trg:"閉(し)める", src:"to close / to shut", pos:"verb", gender:null,
     note:"Group 2 verb. ドアを閉(し)める = to close the door.\nKanji: 閉める. Opposite: 開(あ)ける.",
     example:"A: 窓(まど)を閉(し)めてもいいですか？\nB: はい、どうぞ。寒(さむ)いですね。",
     exampleSrc:"A: May I close the window?\nB: Yes, please. It is cold.",
     funFact:"閉(し)める and 開(あ)ける (open) are essential daily verbs. Japanese sliding doors (ふすま) and paper screens (障子(しょうじ)) use the same verbs. The kanji 閉 shows a gate (門) with a barrier inside. 締(し)め切(き)り (deadline) literally means 'closing/shutting off.'"},

    {type:"teach", trg:"開(あ)ける", src:"to open", pos:"verb", gender:null,
     note:"Group 2 verb. 窓(まど)を開(あ)ける = to open a window.\nKanji: 開ける. Opposite: 閉(し)める.",
     example:"A: すみません、窓(まど)を開(あ)けてくれませんか？\nB: もちろんです。暑(あつ)いですね。",
     exampleSrc:"A: Excuse me, could you open the window?\nB: Of course. It is hot.",
     funFact:"開(あ)ける also means 'to make space' or 'to make time': 時間(じかん)を開(あ)ける (to free up time), 席(せき)を開(あ)ける (to leave a seat open). The kanji 開 shows doors being pushed open from both sides. あけましておめでとう (Happy New Year) uses a related word meaning 'the year opens.'"},

    {type:"teach", trg:"触(さわ)る", src:"to touch", pos:"verb", gender:null,
     note:"Group 1 verb. 触(さわ)らないでください = please do not touch.\nKanji: 触る.",
     example:"A: この絵(え)に触(さわ)らないでください。\nB: すみません、気(き)をつけます。",
     exampleSrc:"A: Please do not touch this painting.\nB: Sorry, I will be careful.",
     funFact:"触(さわ)らないでください (please don't touch) is common in museums and shops. The polite negative request (ないでください) is an essential て-form extension. お触(さわ)り禁止(きんし) (touching prohibited) signs appear near delicate items."},

    {type:"mc", q:"電気(でんき)を付(つ)けてください means:", opts:["Please turn on the light","Please turn off the light","Please close the door","Please open the window"], ans:"Please turn on the light",
     hint:"付(つ)ける means to t... on. The てください pattern makes it a polite request."},

    {type:"teach", trg:"片付(かたづ)ける", src:"to tidy up / to put away", pos:"verb", gender:null,
     note:"Group 2 verb. 部屋(へや)を片付(かたづ)ける = to clean up a room.\nKanji: 片付ける.",
     example:"A: ご飯(はん)の後(あと)、テーブルを片付(かたづ)けてください。\nB: はい、すぐ片付(かたづ)けます。",
     exampleSrc:"A: After the meal, please clear the table.\nB: Okay, I will tidy up right away.",
     funFact:"片付(かたづ)ける is central to the Japanese organizing philosophy. Marie Kondo's こんまりメソッド brought Japanese tidying to the world. The word combines 片 (one side) and 付(つ)ける (to put). A clean space (きれいな部屋(へや)) is believed to create a clean mind."},

    {type:"teach", trg:"忘(わす)れる", src:"to forget", pos:"verb", gender:null,
     note:"Group 2 verb. 忘(わす)れないでください = please don't forget.\nKanji: 忘れる.",
     example:"A: パスポートを忘(わす)れないでください。\nB: 大丈夫(だいじょうぶ)です。もうカバンに入(い)れました。",
     exampleSrc:"A: Please don't forget your passport.\nB: It's okay. I already put it in my bag.",
     funFact:"忘(わす)れ物(もの) (forgotten item/lost property) is a word every train rider knows. Japanese trains collect millions of 忘(わす)れ物(もの) yearly. The lost-and-found (落(お)とし物(もの)センター) system is incredibly efficient, with a very high return rate. Even cash gets returned."},

    {type:"teach", trg:"戻(もど)る", src:"to return / to go back", pos:"verb", gender:null,
     note:"Group 1 verb. 家(いえ)に戻(もど)る = to return home.\nKanji: 戻る. Different from 帰(かえ)る (go home).",
     example:"A: 5時(ごじ)までに戻(もど)ってください。\nB: はい、間(ま)に合(あ)うようにします。",
     exampleSrc:"A: Please return by 5 o'clock.\nB: Okay, I will make sure to be back in time.",
     funFact:"戻(もど)る emphasizes the physical return to a previous location, while 帰(かえ)る emphasizes going home (one's base). 戻(もど)す (transitive) means to put something back or to return something. 後(うし)ろに戻(もど)る (go back) is a common navigation instruction."},

    {type:"teach", trg:"渡(わた)す", src:"to hand over / to pass", pos:"verb", gender:null,
     note:"Group 1 verb. 書類(しょるい)を渡(わた)す = to hand over documents.\nKanji: 渡す.",
     example:"A: この手紙(てがみ)を山田(やまだ)さんに渡(わた)してください。\nB: はい、分(わ)かりました。",
     exampleSrc:"A: Please hand this letter to Mr. Yamada.\nB: Okay, understood.",
     funFact:"渡(わた)す and 渡(わた)る (to cross) share the same kanji. Handing something over is conceptually 'crossing' it from one person to another. 橋(はし)を渡(わた)る (cross a bridge) and 手紙(てがみ)を渡(わた)す (hand over a letter) use the same root concept."},

    {type:"fb", s:"テレビを{1}てください。\n(Please turn off the TV.)", a:"消(け)し", opts:["消(け)し","付(つ)け","開(あ)け","閉(し)め"], sSrc:"Please turn off the TV.",
     hint:"The て-form of the verb meaning to turn off or extinguish."},

    {type:"teach", trg:"残(のこ)る", src:"to remain / to stay behind", pos:"verb", gender:null,
     note:"Group 1 verb. 残(のこ)り物(もの) = leftovers.\nKanji: 残る. 残(のこ)す = to leave behind (transitive).",
     example:"A: 仕事(しごと)が残(のこ)っています。\nB: 手伝(てつだ)いましょうか？",
     exampleSrc:"A: I still have work remaining.\nB: Shall I help?",
     funFact:"残(のこ)る and 残(のこ)す are an intransitive/transitive pair. 残(のこ)り物(もの) (leftovers) is common in cooking. In exams, 残(のこ)り時間(じかん) (remaining time) causes anxiety. The kanji 残 contains 歹 (death/bones) and 戔 (small), suggesting what small things survive."},

    {type:"teach", trg:"覚(おぼ)える", src:"to memorize / to remember", pos:"verb", gender:null,
     note:"Group 2 verb. 単語(たんご)を覚(おぼ)える = to memorize vocabulary.\nKanji: 覚える. Different from 思(おも)い出(だ)す (recall).",
     example:"A: 漢字(かんじ)を覚(おぼ)えるのが難(むずか)しいです。\nB: 毎日(まいにち)少(すこ)しずつ覚(おぼ)えましょう。",
     exampleSrc:"A: Memorizing kanji is difficult.\nB: Let us memorize a little bit each day.",
     funFact:"覚(おぼ)える means both to memorize and to learn (a skill). 体(からだ)が覚(おぼ)えている (the body remembers) describes muscle memory. Japanese students spend years 覚(おぼ)える-ing kanji. Flashcard apps and the practice of 書(か)き取(と)り (writing practice) are standard methods."},

    {type:"mc", q:"忘(わす)れないでください means:", opts:["Please don't forget","Please remember","Please come back","Please hand it over"], ans:"Please don't forget",
     hint:"忘(わす)れる means to f.... Adding ないでください makes it a negative request."},

    {type:"match", pairs:[
      {trg:"付(つ)ける", src:"to turn on"},
      {trg:"消(け)す", src:"to turn off"},
      {trg:"開(あ)ける", src:"to open"},
      {trg:"閉(し)める", src:"to close"},
      {trg:"忘(わす)れる", src:"to forget"}
    ]},

    {type:"fb", s:"部屋(へや)を{1}てください。\n(Please tidy up the room.)", a:"片付(かたづ)け", opts:["片付(かたづ)け","忘(わす)れ","戻(もど)っ","消(け)し"], sSrc:"Please tidy up the room.",
     hint:"The て-form of the verb meaning to clean up or put things away."},

    {type:"mc", q:"戻(もど)る means:", opts:["To return to a previous place","To open something","To forget","To hand over"], ans:"To return to a previous place",
     hint:"This verb emphasizes physically going back to where you were."}
  ,{type:"match",pairs:[{trg:"触(さわ)る",src:"to touch"},{trg:"戻(もど)る",src:"to return / to go back"},{trg:"渡(わた)す",src:"to hand over / to pass"},{trg:"残(のこ)る",src:"to remain / to stay behind"},{trg:"覚(おぼ)える",src:"to memorize / to remember"}]},
  {type:"fb", s:"暑(あつ)いので窓(まど)を{1}てください。", a:["開(あ)ける"], opts:["開(あ)ける","閉(し)める","付(つ)ける","消(け)す"], hint:"The verb for making a door or window no longer closed.", sSrc:"Please {1} the window because it is hot."},
  {type:"fb", s:"食事(しょくじ)の後(あと)は必(かなら)ず食器(しょっき)を{1}ます。", a:["片付(かたづ)ける"], opts:["片付(かたづ)ける","忘(わす)れる","戻(もど)る","渡(わた)す"], hint:"The verb for tidying up or putting things away after use.", sSrc:"I always {1} the dishes after meals."}
]
};
export default BATCH6_L1;
