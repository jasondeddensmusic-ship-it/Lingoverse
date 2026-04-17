// Batch 7 – Unit 01 (A1.1 Greetings): Classroom Expressions & Responses
const BATCH7_L1 = {
  id:"jav2_u01l_b7_1", title:"教室(きょうしつ)の言葉(ことば)", icon:"🏫", xp:15, board:true,
  steps:[
    {type:"intro", title:"教室(きょうしつ)の言葉(ことば)",
     desc:"Learn essential classroom expressions that teachers and students use every day. These phrases will help you participate actively in any Japanese language class.",
     goals:["Understand common teacher instructions","Respond appropriately in class","Use classroom interaction phrases"]},

    {type:"teach", trg:"聞(き)いてください", src:"please listen", pos:"verb", gender:null,
     note:"Polite request form of 聞(き)く (to listen).\nTeachers say this constantly at the start of explanations.",
     example:"A: 聞(き)いてください。大事(だいじ)なことです。\nB: はい、わかりました。",
     exampleSrc:"A: Please listen. This is important.\nB: Yes, understood.",
     funFact:"聞(き)く can mean both 'to listen' and 'to ask.' Context tells you which. In class, 聞(き)いてください always means 'listen.' To say 'please ask,' teachers say 質問(しつもん)してください instead."},

    {type:"teach", trg:"見(み)てください", src:"please look", pos:"verb", gender:null,
     note:"Polite request form of 見(み)る (to look/see).\nUsed when the teacher shows something.",
     example:"A: こちらを見(み)てください。\nB: はい、見(み)ています。",
     exampleSrc:"A: Please look over here.\nB: Yes, I am looking.",
     funFact:"見(み)る covers 'see,' 'look,' and 'watch' in Japanese. For emphasis on careful observation, teachers may say よく見(み)てください (please look carefully). よく means 'well' or 'carefully.'"},

    {type:"teach", trg:"書(か)いてください", src:"please write", pos:"verb", gender:null,
     note:"Polite request form of 書(か)く (to write).\n書(か)く is a Group 1 verb: 書(か)きます, 書(か)いて.",
     example:"A: 名前(なまえ)を書(か)いてください。\nB: ここに書(か)きますか？",
     exampleSrc:"A: Please write your name.\nB: Shall I write it here?",
     funFact:"書(か)く also means 'to draw' (as in pictures). The kanji are different: 書く for writing and 描く for drawing, but in hiragana both look the same. Context makes the meaning clear."},

    {type:"teach", trg:"読(よ)んでください", src:"please read", pos:"verb", gender:null,
     note:"Polite request form of 読(よ)む (to read).\n読(よ)む is a Group 1 verb: 読(よ)みます, 読(よ)んで.",
     example:"A: ページ三(さん)を読(よ)んでください。\nB: はい。「日本(にほん)は...」",
     exampleSrc:"A: Please read page three.\nB: Yes. 'Japan is...'",
     funFact:"読(よ)む originally meant 'to count' in Old Japanese. Reading kanji meant counting strokes. The connection between reading and counting survives in the word 読(よ)み (reading/counting). In sumo, the referee's chant is also called 読(よ)み."},

    {type:"teach", trg:"言(い)ってください", src:"please say it", pos:"verb", gender:null,
     note:"Polite request form of 言(い)う (to say).\nもう一度(いちど)言(い)ってください = please say it once more.",
     example:"A: 日本語(にほんご)で言(い)ってください。\nB: すみません、もう一度(いちど)言(い)ってください。",
     exampleSrc:"A: Please say it in Japanese.\nB: Sorry, please say it once more.",
     funFact:"言(い)う becomes 言(い)って in て-form, not いいて. This is because 言(い)う is a special Group 1 verb. The pronunciation is 'itte' with a double t. Students often confuse 言(い)って (say) with 行(い)って from 行(い)く (go), which sounds identical."},

    {type:"teach", trg:"質問(しつもん)", src:"question", pos:"noun", gender:null,
     note:"質問(しつもん)があります = I have a question.\n質問(しつもん)してもいいですか = may I ask a question?",
     example:"A: 質問(しつもん)があります。\nB: はい、どうぞ。",
     exampleSrc:"A: I have a question.\nB: Yes, go ahead.",
     funFact:"質問(しつもん) combines 質 (quality/substance) and 問 (to ask). In Japanese classrooms, asking questions is less common than in Western ones. Students often approach the teacher privately after class rather than asking in front of everyone."},

    {type:"teach", trg:"答(こた)え", src:"answer", pos:"noun", gender:null,
     note:"答(こた)える = to answer (verb form).\n正解(せいかい) = correct answer.",
     example:"A: 答(こた)えは何(なん)ですか？\nB: 答(こた)えは「三(さん)」です。",
     exampleSrc:"A: What is the answer?\nB: The answer is 'three.'",
     funFact:"答(こた)え uses the kanji 答, which combines the bamboo radical (竹) on top and 合 (to fit/match) below. An answer is something that fits the question, like bamboo pieces fitting together in a woven basket."},

    {type:"teach", trg:"練習(れんしゅう)", src:"practice / exercise", pos:"noun", gender:null,
     note:"練習(れんしゅう)する = to practice.\n練習(れんしゅう)問題(もんだい) = practice problems.",
     example:"A: 漢字(かんじ)の練習(れんしゅう)をしましょう。\nB: はい、頑張(がんば)ります。",
     exampleSrc:"A: Let us practice kanji.\nB: Yes, I will do my best.",
     funFact:"練習(れんしゅう) combines 練 (to polish/refine) and 習 (to learn by repetition). The Japanese learning philosophy emphasizes repetitive practice. The proverb 習(なら)うより慣(な)れろ means 'get used to it rather than learning it,' valuing hands-on practice."},

    {type:"teach", trg:"上手(じょうず)", src:"skillful / good at", pos:"adj", gender:null,
     note:"Na-adjective. 日本語(にほんご)が上手(じょうず)ですね = your Japanese is good.\nOpposite: 下手(へた) (bad at).",
     example:"A: 歌(うた)が上手(じょうず)ですね！\nB: ありがとうございます。まだまだです。",
     exampleSrc:"A: You are good at singing!\nB: Thank you. I still have a long way to go.",
     funFact:"When someone says 上手(じょうず)ですね, the polite response is まだまだです (I still have far to go). Accepting the compliment directly is considered immodest. This humility reflex is deeply embedded in Japanese communication."},

    {type:"teach", trg:"難(むずか)しい", src:"difficult", pos:"adj", gender:null,
     note:"I-adjective. 難(むずか)しくない = not difficult.\n漢字(かんじ)は難(むずか)しいです = kanji is difficult.",
     example:"A: 日本語(にほんご)は難(むずか)しいですか？\nB: 少(すこ)し難(むずか)しいですが、楽(たの)しいです。",
     exampleSrc:"A: Is Japanese difficult?\nB: It is a little difficult, but fun.",
     funFact:"難(むずか)しい uses the kanji 難 which also appears in 難民(なんみん) (refugee) and 困難(こんなん) (hardship). Japanese learners worldwide agree that kanji is the most 難(むずか)しい part. But most Japanese people say keigo (polite language) is hardest even for them."},

    {type:"teach", trg:"やさしい", src:"easy / kind", pos:"adj", gender:null,
     note:"I-adjective. Two meanings: easy (易(やさ)しい) and kind (優(やさ)しい).\nContext determines which meaning.",
     example:"A: この問題(もんだい)はやさしいですか？\nB: はい、やさしいです。",
     exampleSrc:"A: Is this problem easy?\nB: Yes, it is easy.",
     funFact:"やさしい is a rare word with two completely different kanji and meanings. 易(やさ)しい means easy (opposite of difficult). 優(やさ)しい means kind/gentle (describing personality). In hiragana they look identical, so only context reveals the meaning."},

    {type:"teach", trg:"覚(おぼ)える", src:"to memorize / to remember", pos:"verb", gender:null,
     note:"Group 2 verb. 単語(たんご)を覚(おぼ)える = to memorize vocabulary.\n覚(おぼ)えていますか = do you remember?",
     example:"A: この言葉(ことば)を覚(おぼ)えてください。\nB: はい、頑張(がんば)って覚(おぼ)えます。",
     exampleSrc:"A: Please memorize this word.\nB: Yes, I will do my best to memorize it.",
     funFact:"覚(おぼ)える covers both 'memorize' (deliberate effort) and 'remember' (passive recall). English separates these, but Japanese uses one verb. The kanji 覚 also appears in 覚悟(かくご) (preparedness), showing the depth of mental commitment."},

    {type:"teach", trg:"間違(まちが)える", src:"to make a mistake", pos:"verb", gender:null,
     note:"Group 2 verb. 間違(まちが)えました = I made a mistake.\n間違(まちが)い = a mistake (noun).",
     example:"A: すみません、間違(まちが)えました。\nB: 大丈夫(だいじょうぶ)ですよ。もう一度(いちど)。",
     exampleSrc:"A: Sorry, I made a mistake.\nB: It is okay. One more time.",
     funFact:"Japanese classrooms embrace mistakes as learning. The phrase 間違(まちが)えてもいいです (it is okay to make mistakes) is heard often. In Japanese education philosophy, errors reveal understanding gaps and are valued, not punished."},

    {type:"teach", trg:"繰(く)り返(かえ)す", src:"to repeat", pos:"verb", gender:null,
     note:"Group 1 verb. 繰(く)り返(かえ)してください = please repeat.\n繰(く)り返(かえ)し = repetition (noun).",
     example:"A: 繰(く)り返(かえ)してください。「おはようございます。」\nB: おはようございます。",
     exampleSrc:"A: Please repeat. 'Good morning.'\nB: Good morning.",
     funFact:"繰(く)り返(かえ)す literally means 'to spin and return.' The image is of thread being wound on a spool, going around again and again. Japanese language learning heavily relies on repetition, especially for pronunciation drills called シャドーイング (shadowing)."},

    // Quiz steps
    {type:"mc", q:"せんせいが「見(み)てください」と言(い)いました。何(なに)をしますか？",
     opts:["Look at what the teacher shows","Write in the notebook","Read the textbook","Listen carefully"],
     ans:"Look at what the teacher shows",
     hint:"見(み)る means to l... or see. The t... is asking you to direct your eyes somewhere."},

    {type:"match", pairs:[
      {trg:"質問(しつもん)", src:"question"},
      {trg:"答(こた)え", src:"answer"},
      {trg:"練習(れんしゅう)", src:"practice"},
      {trg:"間違(まちが)い", src:"mistake"},
      {trg:"繰(く)り返(かえ)し", src:"repetition"}
    ]},

    {type:"fb", s:"日本語(にほんご)が{1}ですね！",
     a:["上手(じょうず)"],
     opts:["上手(じょうず)","難(むずか)しい","やさしい","下手(へた)"],
     hint:"You are complimenting someone's Japanese ability. This na-adjective means 'skillful.'",
     sSrc:"Your Japanese is {1}!"},

    {type:"mc", q:"覚(おぼ)える means:",
     opts:["To memorize","To forget","To practice","To repeat"],
     ans:"To memorize",
     hint:"This verb is about storing information in your mind. It covers both deliberate memorization and passive recall."},

    {type:"fb", s:"すみません、{1}。もう一度(いちど)おねがいします。",
     a:["間違(まちが)えました"],
     opts:["間違(まちが)えました","覚(おぼ)えました","書(か)きました","読(よ)みました"],
     hint:"You are apologizing for an error. Past tense of the verb meaning 'to make a mistake.'",
     sSrc:"Sorry, I {1}. Once more please."},

    {type:"mc", q:"やさしい can mean both:",
     opts:["Easy and kind","Difficult and easy","Big and small","Good and bad"],
     ans:"Easy and kind",
     hint:"This adjective has two different kanji but sounds the same. One meaning is about difficulty, the other about personality."},

    {type:"match", pairs:[
      {trg:"聞(き)いてください", src:"please listen"},
      {trg:"書(か)いてください", src:"please write"},
      {trg:"読(よ)んでください", src:"please read"},
      {trg:"言(い)ってください", src:"please say it"}
    ]},

    {type:"fb", s:"漢字(かんじ)は{1}ですが、楽(たの)しいです。",
     a:["難(むずか)しい"],
     opts:["難(むずか)しい","やさしい","上手(じょうず)","大(おお)きい"],
     hint:"The speaker admits kanji is challenging but still enjoys it. This i-adjective means 'difficult.'",
     sSrc:"Kanji is {1}, but it is fun."}
  ]
};
export default BATCH7_L1;
