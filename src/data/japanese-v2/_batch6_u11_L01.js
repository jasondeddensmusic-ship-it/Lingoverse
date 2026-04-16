// Batch 6 – Unit 11 (A2.1 て-Form): Requests & Instructions
const BATCH6_L1 = {
  id:"jav2_u11l_b6_1", title:"おねがいとしじ", icon:"📋", xp:15, board:true,
  steps:[
    {type:"intro", title:"おねがいとしじ",
     desc:"Practice the て-form in real-world situations: making requests, giving instructions, and describing sequential actions. These patterns appear constantly at work, home, and in service situations.",
     goals:["Make polite requests with てください","Give sequential instructions","Use てから (after doing) pattern"]},

    {type:"teach", trg:"つける", src:"to turn on / to attach", pos:"verb", gender:null,
     note:"Group 2 verb. でんきをつける = to turn on the light.\nKanji: 付ける. Opposite: けす (turn off).",
     example:"A: でんきをつけてください。\nB: はい、つけました。",
     exampleSrc:"A: Please turn on the light.\nB: Okay, I turned it on.",
     funFact:"つける covers many meanings: turn on (lights, TV), attach (a name, a label), put on (perfume). The kanji 付 shows a person attaching something. Japanese rooms often have a リモコン (remote control) for the ceiling light, which can change brightness and color temperature."},

    {type:"teach", trg:"けす", src:"to turn off / to extinguish / to erase", pos:"verb", gender:null,
     note:"Group 1 verb. でんきをけす = to turn off the light.\nKanji: 消す. Opposite: つける.",
     example:"A: テレビをけしてください。\nB: はい、けしました。",
     exampleSrc:"A: Please turn off the TV.\nB: Okay, I turned it off.",
     funFact:"けす works for lights, fires, sounds, and even data. けしゴム (eraser) uses this verb root. ひをけす (put out a fire) is critical vocabulary. In Japanese horror stories, lights turning off (でんきがきえた) signals something scary is about to happen."},

    {type:"teach", trg:"しめる", src:"to close / to shut", pos:"verb", gender:null,
     note:"Group 2 verb. ドアをしめる = to close the door.\nKanji: 閉める. Opposite: あける.",
     example:"A: まどをしめてもいいですか？\nB: はい、どうぞ。さむいですね。",
     exampleSrc:"A: May I close the window?\nB: Yes, please. It is cold.",
     funFact:"しめる and あける (open) are essential daily verbs. Japanese sliding doors (ふすま) and paper screens (しょうじ) use the same verbs. The kanji 閉 shows a gate (門) with a barrier inside. しめきり (deadline) literally means 'closing/shutting off.'"},

    {type:"teach", trg:"あける", src:"to open", pos:"verb", gender:null,
     note:"Group 2 verb. まどをあける = to open a window.\nKanji: 開ける. Opposite: しめる.",
     example:"A: すみません、まどをあけてくれませんか？\nB: もちろんです。あついですね。",
     exampleSrc:"A: Excuse me, could you open the window?\nB: Of course. It is hot.",
     funFact:"あける also means 'to make space' or 'to make time': じかんをあける (to free up time), せきをあける (to leave a seat open). The kanji 開 shows doors being pushed open from both sides. あけましておめでとう (Happy New Year) uses a related word meaning 'the year opens.'"},

    {type:"teach", trg:"さわる", src:"to touch", pos:"verb", gender:null,
     note:"Group 1 verb. さわらないでください = please do not touch.\nKanji: 触る.",
     example:"A: このえにさわらないでください。\nB: すみません、きをつけます。",
     exampleSrc:"A: Please do not touch this painting.\nB: Sorry, I will be careful.",
     funFact:"さわらないでください (please don't touch) is common in museums and shops. The polite negative request (ないでください) is an essential て-form extension. おさわりきんし (触り禁止, touching prohibited) signs appear near delicate items."},

    {type:"mc", q:"でんきをつけてください means:", opts:["Please turn on the light","Please turn off the light","Please close the door","Please open the window"], ans:"Please turn on the light",
     hint:"つける means to t... on. The てください pattern makes it a polite request."},

    {type:"teach", trg:"かたづける", src:"to tidy up / to put away", pos:"verb", gender:null,
     note:"Group 2 verb. へやをかたづける = to clean up a room.\nKanji: 片付ける.",
     example:"A: ごはんのあと、テーブルをかたづけてください。\nB: はい、すぐかたづけます。",
     exampleSrc:"A: After the meal, please clear the table.\nB: Okay, I will tidy up right away.",
     funFact:"かたづける (片付ける) is central to the Japanese organizing philosophy. Marie Kondo's こんまりメソッド brought Japanese tidying to the world. The word combines 片 (one side) and 付ける (to put). A clean space (きれいなへや) is believed to create a clean mind."},

    {type:"teach", trg:"わすれる", src:"to forget", pos:"verb", gender:null,
     note:"Group 2 verb. わすれないでください = please don't forget.\nKanji: 忘れる.",
     example:"A: パスポートをわすれないでください。\nB: だいじょうぶです。もうカバンにいれました。",
     exampleSrc:"A: Please don't forget your passport.\nB: It's okay. I already put it in my bag.",
     funFact:"わすれもの (forgotten item/lost property) is a word every train rider knows. Japanese trains collect millions of わすれもの yearly. The lost-and-found (おとしものセンター) system is incredibly efficient, with a very high return rate. Even cash gets returned."},

    {type:"teach", trg:"もどる", src:"to return / to go back", pos:"verb", gender:null,
     note:"Group 1 verb. いえにもどる = to return home.\nKanji: 戻る. Different from かえる (go home).",
     example:"A: ごじまでにもどってください。\nB: はい、まにあうようにします。",
     exampleSrc:"A: Please return by 5 o'clock.\nB: Okay, I will make sure to be back in time.",
     funFact:"もどる emphasizes the physical return to a previous location, while かえる emphasizes going home (one's base). もどす (transitive) means to put something back or to return something. うしろにもどる (go back) is a common navigation instruction."},

    {type:"teach", trg:"わたす", src:"to hand over / to pass", pos:"verb", gender:null,
     note:"Group 1 verb. しょるいをわたす = to hand over documents.\nKanji: 渡す.",
     example:"A: このてがみをやまださんにわたしてください。\nB: はい、わかりました。",
     exampleSrc:"A: Please hand this letter to Mr. Yamada.\nB: Okay, understood.",
     funFact:"わたす (渡す) and わたる (渡る, to cross) share the same kanji. Handing something over is conceptually 'crossing' it from one person to another. はしをわたる (cross a bridge) and てがみをわたす (hand over a letter) use the same root concept."},

    {type:"fb", s:"テレビを{1}てください。\n(Please turn off the TV.)", a:"けし", opts:["けし","つけ","あけ","しめ"], sSrc:"Please turn off the TV.",
     hint:"The て-form of the verb meaning to turn off or extinguish."},

    {type:"teach", trg:"のこる", src:"to remain / to stay behind", pos:"verb", gender:null,
     note:"Group 1 verb. のこりもの = leftovers.\nKanji: 残る. のこす = to leave behind (transitive).",
     example:"A: しごとがのこっています。\nB: てつだいましょうか？",
     exampleSrc:"A: I still have work remaining.\nB: Shall I help?",
     funFact:"のこる and のこす are an intransitive/transitive pair. のこりもの (leftovers) is common in cooking. In exams, のこりじかん (remaining time) causes anxiety. The kanji 残 contains 歹 (death/bones) and 戔 (small), suggesting what small things survive."},

    {type:"teach", trg:"おぼえる", src:"to memorize / to remember", pos:"verb", gender:null,
     note:"Group 2 verb. たんごをおぼえる = to memorize vocabulary.\nKanji: 覚える. Different from おもいだす (recall).",
     example:"A: かんじをおぼえるのがむずかしいです。\nB: まいにちすこしずつおぼえましょう。",
     exampleSrc:"A: Memorizing kanji is difficult.\nB: Let us memorize a little bit each day.",
     funFact:"おぼえる means both to memorize and to learn (a skill). からだがおぼえている (the body remembers) describes muscle memory. Japanese students spend years おぼえる-ing kanji. Flashcard apps and the practice of 書き取り (writing practice) are standard methods."},

    {type:"mc", q:"わすれないでください means:", opts:["Please don't forget","Please remember","Please come back","Please hand it over"], ans:"Please don't forget",
     hint:"わすれる means to f.... Adding ないでください makes it a negative request."},

    {type:"match", pairs:[
      {trg:"つける", src:"to turn on"},
      {trg:"けす", src:"to turn off"},
      {trg:"あける", src:"to open"},
      {trg:"しめる", src:"to close"},
      {trg:"わすれる", src:"to forget"}
    ]},

    {type:"fb", s:"へやを{1}てください。\n(Please tidy up the room.)", a:"かたづけ", opts:["かたづけ","わすれ","もどっ","けし"], sSrc:"Please tidy up the room.",
     hint:"The て-form of the verb meaning to clean up or put things away."},

    {type:"mc", q:"もどる means:", opts:["To return to a previous place","To open something","To forget","To hand over"], ans:"To return to a previous place",
     hint:"This verb emphasizes physically going back to where you were."}
  ]
};
export default BATCH6_L1;
