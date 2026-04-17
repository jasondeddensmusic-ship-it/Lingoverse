// Batch 10 – Unit 16 (B1.1 Plans): Daily Planning & Scheduling
const BATCH10_L1 = {
  id:"jav2_u16l_b10_1", title:"日程管理(にっていかんり)", icon:"📋", xp:15, board:true,
  steps:[
    {type:"intro", title:"日程管理(にっていかんり)",
     desc:"Learn vocabulary for daily planning, scheduling, and time management. These practical words are essential for work and study in Japan.",
     goals:["Manage schedules and deadlines","Discuss priorities","Use planning-related expressions"]},

    {type:"teach", trg:"締(し)め切(き)り", src:"deadline", pos:"noun", gender:null,
     note:"締(し)め切(き)りに間(ま)に合(あ)う = to meet the deadline.\n締(し)め切(き)り日(び)は = the deadline date is.",
     example:"A: 締(し)め切(き)りはいつですか？\nB: 来週(らいしゅう)の金曜日(きんようび)です。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: When is the deadline?\nB: Next Friday.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"締(し)め切(き)り (締め切り) literally means 'closed off.' Japanese people take 締(し)め切(き)り extremely seriously. Missing one is considered a major professional failing. The phrase 締(し)め切(き)り前(まえ) means 'before the deadline' and is when most Japanese people feel the most productive pressure."},

    {type:"teach", trg:"優先(ゆうせん)", src:"priority", pos:"noun", gender:null,
     note:"優先(ゆうせん)順位(じゅんい) = priority order.\n優先(ゆうせん)する = to prioritize.",
     example:"A: 何(なに)を優先(ゆうせん)しますか？\nB: 健康(けんこう)が一番(いちばん)です。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: What do you prioritize?\nB: Health comes first.\nA: How long did it take?\nB: About two hours.",
     funFact:"優先(ゆうせん) (優先) culture is visible everywhere in Japan. 優先(ゆうせん)席(せき) (priority seats) on trains are for elderly, pregnant, and disabled passengers. 優先(ゆうせん)レーン (priority lanes) exist at airports. In business, 優先(ゆうせん)順位(じゅんい) (priority ranking) determines meeting agendas and task allocation."},

    {type:"teach", trg:"延(の)ばす", src:"to extend / to postpone", pos:"verb", gender:null,
     note:"期間(きかん)を延(の)ばす = to extend the period.\n締(し)め切(き)りを延(の)ばす = to extend the deadline.",
     example:"A: 締(し)め切(き)りを延(の)ばせますか？\nB: 一日(いちにち)だけなら。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Can you extend the deadline?\nB: Only by one day.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"延(の)ばす (延ばす/伸ばす) has two kanji: 延 for extending time/postponing and 伸 for stretching/growing. Asking to 延(の)ばす a 締(し)め切(き)り is delicate in Japanese business. You would frame it as お忙(いそが)しいところすみませんが (I am sorry to bother you when you are busy, but...)."},

    {type:"teach", trg:"終(お)わらせる", src:"to finish / to complete", pos:"verb", gender:null,
     note:"Causative of 終(お)わる. 仕事(しごと)を終(お)わらせる = to finish work.\nCompelling something to end.",
     example:"A: 三時(さんじ)までに終(お)わらせてください。\nB: 頑張(がんば)ります。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Please finish by 3 o'clock.\nB: I will do my best.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"終(お)わらせる (終わらせる) uses the causative form to mean 'to make something end/finish.' The distinction between 終(お)わる (it ends naturally) and 終(お)わらせる (I make it end) is important. In workplace Japanese, 終(お)わらせます (I will finish it) shows active commitment."},

    {type:"teach", trg:"やり直(なお)す", src:"to redo / to start over", pos:"verb", gender:null,
     note:"やる = to do, 直(なお)す = to fix/redo.\nもう一度(いちど)やり直(なお)す = do over once more.",
     example:"A: 間違(まちが)えたのでやり直(なお)します。\nB: 時間(じかん)は大丈夫(だいじょうぶ)ですか？\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I made a mistake, so I will redo it.\nB: Is there enough time?\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"やり直(なお)す is a compound verb (やる + 直(なお)す) where 直(なお)す adds the meaning 'redo properly.' Many Japanese compound verbs use this pattern: 書(か)き直(なお)す (rewrite), 言(い)い直(なお)す (rephrase), やり直(なお)し (a redo). The phrase 人生(じんせい)のやり直(なお)し means 'a fresh start in life.'"},

    {type:"teach", trg:"後回(あとまわ)し", src:"putting off / postponing", pos:"noun", gender:null,
     note:"後回(あとまわ)しにする = to put off till later.\nNegative nuance: procrastination.",
     example:"A: 後回(あとまわ)しにしないでください。\nB: わかりました。今(いま)すぐやります。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Please do not put it off.\nB: Understood. I will do it right away.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"後回(あとまわ)し (後回し) literally means 'sending to later.' While Japanese culture values diligence, 後回(あとまわ)し is a universal human tendency. The phrase 後回(あとまわ)しにするくせ means 'the habit of procrastinating.' Self-help books about overcoming 後回(あとまわ)し are bestsellers in Japan."},

    {type:"teach", trg:"進(すす)める", src:"to advance / to make progress", pos:"verb", gender:null,
     note:"プロジェクトを進(すす)める = to advance a project.\n話(はなし)を進(すす)める = to move the conversation forward.",
     example:"A: プロジェクトを進(すす)めましょう。\nB: まず、スケジュールを確認(かくにん)します。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Let's move the project forward.\nB: First, let me confirm the schedule.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"進(すす)める (進める) is essential in meetings: 議題(ぎだい)を進(すす)める (proceed with the agenda), 計画(けいかく)を進(すす)める (advance the plan). The intransitive form 進(すす)む (to progress) pairs with it: プロジェクトが進(すす)んでいる (the project is progressing). Japanese business values steady, incremental 進(すす)め方(かた) (way of proceeding)."},

    {type:"teach", trg:"まとめる", src:"to summarize / to organize / to compile", pos:"verb", gender:null,
     note:"レポートをまとめる = to compile a report.\n意見(いけん)をまとめる = to consolidate opinions.",
     example:"A: 会議(かいぎ)の内容(ないよう)をまとめてください。\nB: 議事録(ぎじろく)を作(つく)ります。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Please summarize the meeting contents.\nB: I will create minutes.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"まとめる is one of the most useful business verbs. まとめサイト (summary websites) are hugely popular in Japan. In meetings, the facilitator will say では、まとめます (now, let me summarize). The noun form まとめ appears everywhere: year-end まとめ articles, travel まとめ, study まとめ."},

    {type:"mc", q:"What does 後回(あとまわ)しにする mean?", opts:["To postpone / to put off till later","To do it quickly","To delegate to others","To cancel completely"], ans:"To postpone / to put off till later",
     hint:"This phrase literally means 'sending to after' and has a negative nuance of procrastination."},

    {type:"fb", s:"{1}は来週(らいしゅう)の金曜日(きんようび)です。\n(The deadline is next Friday.)", a:"締(し)め切(き)り", opts:["締(し)め切(き)り","予定(よてい)","目標(もくひょう)","約束(やくそく)"], sSrc:"The deadline is next Friday.",
     hint:"This word literally means 'closed off' and refers to the final date for completing something."},

    {type:"match", pairs:[
      {trg:"締(し)め切(き)り", src:"deadline"},
      {trg:"優先(ゆうせん)", src:"priority"},
      {trg:"やり直(なお)す", src:"to redo"},
      {trg:"まとめる", src:"to summarize"}
    ]},

    {type:"mc", q:"What is the difference between 終(お)わる and 終(お)わらせる?", opts:["終(お)わる ends naturally, 終(お)わらせる means to make it end","They mean the same thing","終(お)わる is past tense of 終(お)わらせる","終(お)わらせる is more casual"], ans:"終(お)わる ends naturally, 終(お)わらせる means to make it end",
     hint:"The causative form adds the meaning of actively making or forcing something to happen."}
  ]
};
export default BATCH10_L1;
