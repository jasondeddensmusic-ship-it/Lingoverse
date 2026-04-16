// Batch 7 – Unit 01 (A1.1 Greetings): Classroom Expressions & Responses
const BATCH7_L1 = {
  id:"jav2_u01l_b7_1", title:"きょうしつのことば", icon:"🏫", xp:15, board:true,
  steps:[
    {type:"intro", title:"きょうしつのことば",
     desc:"Learn essential classroom expressions that teachers and students use every day. These phrases will help you participate actively in any Japanese language class.",
     goals:["Understand common teacher instructions","Respond appropriately in class","Use classroom interaction phrases"]},

    {type:"teach", trg:"きいてください", src:"please listen", pos:"verb", gender:null,
     note:"Polite request form of きく (to listen).\nTeachers say this constantly at the start of explanations.",
     example:"A: きいてください。だいじなことです。\nB: はい、わかりました。",
     exampleSrc:"A: Please listen. This is important.\nB: Yes, understood.",
     funFact:"きく can mean both 'to listen' and 'to ask.' Context tells you which. In class, きいてください always means 'listen.' To say 'please ask,' teachers say しつもんしてください instead."},

    {type:"teach", trg:"みてください", src:"please look", pos:"verb", gender:null,
     note:"Polite request form of みる (to look/see).\nUsed when the teacher shows something.",
     example:"A: こちらをみてください。\nB: はい、みています。",
     exampleSrc:"A: Please look over here.\nB: Yes, I am looking.",
     funFact:"みる covers 'see,' 'look,' and 'watch' in Japanese. For emphasis on careful observation, teachers may say よくみてください (please look carefully). よく means 'well' or 'carefully.'"},

    {type:"teach", trg:"かいてください", src:"please write", pos:"verb", gender:null,
     note:"Polite request form of かく (to write).\nかく is a Group 1 verb: かきます, かいて.",
     example:"A: なまえをかいてください。\nB: ここにかきますか？",
     exampleSrc:"A: Please write your name.\nB: Shall I write it here?",
     funFact:"かく also means 'to draw' (as in pictures). The kanji are different: 書く for writing and 描く for drawing, but in hiragana both look the same. Context makes the meaning clear."},

    {type:"teach", trg:"よんでください", src:"please read", pos:"verb", gender:null,
     note:"Polite request form of よむ (to read).\nよむ is a Group 1 verb: よみます, よんで.",
     example:"A: ページさんをよんでください。\nB: はい。「にほんは...」",
     exampleSrc:"A: Please read page three.\nB: Yes. 'Japan is...'",
     funFact:"よむ originally meant 'to count' in Old Japanese. Reading kanji meant counting strokes. The connection between reading and counting survives in the word よみ (reading/counting). In sumo, the referee's chant is also called よみ."},

    {type:"teach", trg:"いってください", src:"please say it", pos:"verb", gender:null,
     note:"Polite request form of いう (to say).\nもういちどいってください = please say it once more.",
     example:"A: にほんごでいってください。\nB: すみません、もういちどいってください。",
     exampleSrc:"A: Please say it in Japanese.\nB: Sorry, please say it once more.",
     funFact:"いう becomes いって in て-form, not いいて. This is because いう is a special Group 1 verb. The pronunciation is 'itte' with a double t. Students often confuse いって (say) with いって from いく (go), which sounds identical."},

    {type:"teach", trg:"しつもん", src:"question", pos:"noun", gender:null,
     note:"しつもんがあります = I have a question.\nしつもんしてもいいですか = may I ask a question?",
     example:"A: しつもんがあります。\nB: はい、どうぞ。",
     exampleSrc:"A: I have a question.\nB: Yes, go ahead.",
     funFact:"質問 combines 質 (quality/substance) and 問 (to ask). In Japanese classrooms, asking questions is less common than in Western ones. Students often approach the teacher privately after class rather than asking in front of everyone."},

    {type:"teach", trg:"こたえ", src:"answer", pos:"noun", gender:null,
     note:"こたえる = to answer (verb form).\nせいかい = correct answer.",
     example:"A: こたえはなんですか？\nB: こたえは「さん」です。",
     exampleSrc:"A: What is the answer?\nB: The answer is 'three.'",
     funFact:"こたえ (答え) uses the kanji 答, which combines the bamboo radical (竹) on top and 合 (to fit/match) below. An answer is something that fits the question, like bamboo pieces fitting together in a woven basket."},

    {type:"teach", trg:"れんしゅう", src:"practice / exercise", pos:"noun", gender:null,
     note:"れんしゅうする = to practice.\nれんしゅうもんだい = practice problems.",
     example:"A: かんじのれんしゅうをしましょう。\nB: はい、がんばります。",
     exampleSrc:"A: Let us practice kanji.\nB: Yes, I will do my best.",
     funFact:"練習 combines 練 (to polish/refine) and 習 (to learn by repetition). The Japanese learning philosophy emphasizes repetitive practice. The proverb ならうよりなれろ means 'get used to it rather than learning it,' valuing hands-on practice."},

    {type:"teach", trg:"じょうず", src:"skillful / good at", pos:"adj", gender:null,
     note:"Na-adjective. にほんごがじょうずですね = your Japanese is good.\nOpposite: へた (bad at).",
     example:"A: うたがじょうずですね！\nB: ありがとうございます。まだまだです。",
     exampleSrc:"A: You are good at singing!\nB: Thank you. I still have a long way to go.",
     funFact:"When someone says じょうずですね, the polite response is まだまだです (I still have far to go). Accepting the compliment directly is considered immodest. This humility reflex is deeply embedded in Japanese communication."},

    {type:"teach", trg:"むずかしい", src:"difficult", pos:"adj", gender:null,
     note:"I-adjective. むずかしくない = not difficult.\nかんじはむずかしいです = kanji is difficult.",
     example:"A: にほんごはむずかしいですか？\nB: すこしむずかしいですが、たのしいです。",
     exampleSrc:"A: Is Japanese difficult?\nB: It is a little difficult, but fun.",
     funFact:"難しい uses the kanji 難 which also appears in 難民 (nanmin, refugee) and 困難 (konnan, hardship). Japanese learners worldwide agree that kanji is the most むずかしい part. But most Japanese people say keigo (polite language) is hardest even for them."},

    {type:"teach", trg:"やさしい", src:"easy / kind", pos:"adj", gender:null,
     note:"I-adjective. Two meanings: easy (易しい) and kind (優しい).\nContext determines which meaning.",
     example:"A: このもんだいはやさしいですか？\nB: はい、やさしいです。",
     exampleSrc:"A: Is this problem easy?\nB: Yes, it is easy.",
     funFact:"やさしい is a rare word with two completely different kanji and meanings. 易しい means easy (opposite of difficult). 優しい means kind/gentle (describing personality). In hiragana they look identical, so only context reveals the meaning."},

    {type:"teach", trg:"おぼえる", src:"to memorize / to remember", pos:"verb", gender:null,
     note:"Group 2 verb. たんごをおぼえる = to memorize vocabulary.\nおぼえていますか = do you remember?",
     example:"A: このことばをおぼえてください。\nB: はい、がんばっておぼえます。",
     exampleSrc:"A: Please memorize this word.\nB: Yes, I will do my best to memorize it.",
     funFact:"おぼえる covers both 'memorize' (deliberate effort) and 'remember' (passive recall). English separates these, but Japanese uses one verb. The kanji 覚 also appears in 覚悟 (kakugo, preparedness), showing the depth of mental commitment."},

    {type:"teach", trg:"まちがえる", src:"to make a mistake", pos:"verb", gender:null,
     note:"Group 2 verb. まちがえました = I made a mistake.\nまちがい = a mistake (noun).",
     example:"A: すみません、まちがえました。\nB: だいじょうぶですよ。もういちど。",
     exampleSrc:"A: Sorry, I made a mistake.\nB: It is okay. One more time.",
     funFact:"Japanese classrooms embrace mistakes as learning. The phrase まちがえてもいいです (it is okay to make mistakes) is heard often. In Japanese education philosophy, errors reveal understanding gaps and are valued, not punished."},

    {type:"teach", trg:"くりかえす", src:"to repeat", pos:"verb", gender:null,
     note:"Group 1 verb. くりかえしてください = please repeat.\nくりかえし = repetition (noun).",
     example:"A: くりかえしてください。「おはようございます。」\nB: おはようございます。",
     exampleSrc:"A: Please repeat. 'Good morning.'\nB: Good morning.",
     funFact:"くりかえす (繰り返す) literally means 'to spin and return.' The image is of thread being wound on a spool, going around again and again. Japanese language learning heavily relies on repetition, especially for pronunciation drills called シャドーイング (shadowing)."},

    // Quiz steps
    {type:"mc", q:"せんせいが「みてください」と言いました。何をしますか？",
     opts:["Look at what the teacher shows","Write in the notebook","Read the textbook","Listen carefully"],
     ans:"Look at what the teacher shows",
     hint:"みる means to l... or see. The t... is asking you to direct your eyes somewhere."},

    {type:"match", pairs:[
      {trg:"しつもん", src:"question"},
      {trg:"こたえ", src:"answer"},
      {trg:"れんしゅう", src:"practice"},
      {trg:"まちがい", src:"mistake"},
      {trg:"くりかえし", src:"repetition"}
    ]},

    {type:"fb", s:"にほんごが{1}ですね！",
     a:["じょうず"],
     opts:["じょうず","むずかしい","やさしい","へた"],
     hint:"You are complimenting someone's Japanese ability. This na-adjective means 'skillful.'",
     sSrc:"Your Japanese is {1}!"},

    {type:"mc", q:"おぼえる means:",
     opts:["To memorize","To forget","To practice","To repeat"],
     ans:"To memorize",
     hint:"This verb is about storing information in your mind. It covers both deliberate memorization and passive recall."},

    {type:"fb", s:"すみません、{1}。もういちどおねがいします。",
     a:["まちがえました"],
     opts:["まちがえました","おぼえました","かきました","よみました"],
     hint:"You are apologizing for an error. Past tense of the verb meaning 'to make a mistake.'",
     sSrc:"Sorry, I {1}. Once more please."},

    {type:"mc", q:"やさしい can mean both:",
     opts:["Easy and kind","Difficult and easy","Big and small","Good and bad"],
     ans:"Easy and kind",
     hint:"This adjective has two different kanji but sounds the same. One meaning is about difficulty, the other about personality."},

    {type:"match", pairs:[
      {trg:"きいてください", src:"please listen"},
      {trg:"かいてください", src:"please write"},
      {trg:"よんでください", src:"please read"},
      {trg:"いってください", src:"please say it"}
    ]},

    {type:"fb", s:"かんじは{1}ですが、たのしいです。",
     a:["むずかしい"],
     opts:["むずかしい","やさしい","じょうず","おおきい"],
     hint:"The speaker admits kanji is challenging but still enjoys it. This i-adjective means 'difficult.'",
     sSrc:"Kanji is {1}, but it is fun."}
  ]
};
export default BATCH7_L1;
