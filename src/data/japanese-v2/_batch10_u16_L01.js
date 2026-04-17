// Batch 10 – Unit 16 (B1.1 Plans): Daily Planning & Scheduling
const BATCH10_L1 = {
  id:"jav2_u16l_b10_1", title:"にっていかんり", icon:"📋", xp:15, board:true,
  steps:[
    {type:"intro", title:"にっていかんり",
     desc:"Learn vocabulary for daily planning, scheduling, and time management. These practical words are essential for work and study in Japan.",
     goals:["Manage schedules and deadlines","Discuss priorities","Use planning-related expressions"]},

    {type:"teach", trg:"しめきり", src:"deadline", pos:"noun", gender:null,
     note:"しめきりにまにあう = to meet the deadline.\nしめきりびは = the deadline date is.",
     example:"A: しめきりはいつですか？\nB: らいしゅうのきんようびです。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: When is the deadline?\nB: Next Friday.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"しめきり (締め切り) literally means 'closed off.' Japanese people take しめきり extremely seriously. Missing one is considered a major professional failing. The phrase しめきりまえ means 'before the deadline' and is when most Japanese people feel the most productive pressure."},

    {type:"teach", trg:"ゆうせん", src:"priority", pos:"noun", gender:null,
     note:"ゆうせんじゅんい = priority order.\nゆうせんする = to prioritize.",
     example:"A: なにをゆうせんしますか？\nB: けんこうがいちばんです。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: What do you prioritize?\nB: Health comes first.\nA: How long did it take?\nB: About two hours.",
     funFact:"ゆうせん (優先) culture is visible everywhere in Japan. ゆうせんせき (priority seats) on trains are for elderly, pregnant, and disabled passengers. ゆうせんレーン (priority lanes) exist at airports. In business, ゆうせんじゅんい (priority ranking) determines meeting agendas and task allocation."},

    {type:"teach", trg:"のばす", src:"to extend / to postpone", pos:"verb", gender:null,
     note:"きかんをのばす = to extend the period.\nしめきりをのばす = to extend the deadline.",
     example:"A: しめきりをのばせますか？\nB: いちにちだけなら。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Can you extend the deadline?\nB: Only by one day.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"のばす (延ばす/伸ばす) has two kanji: 延 for extending time/postponing and 伸 for stretching/growing. Asking to のばす a しめきり is delicate in Japanese business. You would frame it as おいそがしいところすみませんが (I am sorry to bother you when you are busy, but...)."},

    {type:"teach", trg:"おわらせる", src:"to finish / to complete", pos:"verb", gender:null,
     note:"Causative of おわる. しごとをおわらせる = to finish work.\nCompelling something to end.",
     example:"A: さんじまでにおわらせてください。\nB: がんばります。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Please finish by 3 o'clock.\nB: I will do my best.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"おわらせる (終わらせる) uses the causative form to mean 'to make something end/finish.' The distinction between おわる (it ends naturally) and おわらせる (I make it end) is important. In workplace Japanese, おわらせます (I will finish it) shows active commitment."},

    {type:"teach", trg:"やりなおす", src:"to redo / to start over", pos:"verb", gender:null,
     note:"やる = to do, なおす = to fix/redo.\nもういちどやりなおす = do over once more.",
     example:"A: まちがえたのでやりなおします。\nB: じかんはだいじょうぶですか？\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I made a mistake, so I will redo it.\nB: Is there enough time?\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"やりなおす is a compound verb (やる + なおす) where なおす adds the meaning 'redo properly.' Many Japanese compound verbs use this pattern: かきなおす (rewrite), いいなおす (rephrase), やりなおし (a redo). The phrase じんせいのやりなおし means 'a fresh start in life.'"},

    {type:"teach", trg:"あとまわし", src:"putting off / postponing", pos:"noun", gender:null,
     note:"あとまわしにする = to put off till later.\nNegative nuance: procrastination.",
     example:"A: あとまわしにしないでください。\nB: わかりました。いますぐやります。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Please do not put it off.\nB: Understood. I will do it right away.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"あとまわし (後回し) literally means 'sending to later.' While Japanese culture values diligence, あとまわし is a universal human tendency. The phrase あとまわしにするくせ means 'the habit of procrastinating.' Self-help books about overcoming あとまわし are bestsellers in Japan."},

    {type:"teach", trg:"すすめる", src:"to advance / to make progress", pos:"verb", gender:null,
     note:"プロジェクトをすすめる = to advance a project.\nはなしをすすめる = to move the conversation forward.",
     example:"A: プロジェクトをすすめましょう。\nB: まず、スケジュールをかくにんします。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Let's move the project forward.\nB: First, let me confirm the schedule.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"すすめる (進める) is essential in meetings: ぎだいをすすめる (proceed with the agenda), けいかくをすすめる (advance the plan). The intransitive form すすむ (to progress) pairs with it: プロジェクトがすすんでいる (the project is progressing). Japanese business values steady, incremental すすめ方 (way of proceeding)."},

    {type:"teach", trg:"まとめる", src:"to summarize / to organize / to compile", pos:"verb", gender:null,
     note:"レポートをまとめる = to compile a report.\nいけんをまとめる = to consolidate opinions.",
     example:"A: かいぎのないようをまとめてください。\nB: ぎじろくをつくります。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Please summarize the meeting contents.\nB: I will create minutes.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"まとめる is one of the most useful business verbs. まとめサイト (summary websites) are hugely popular in Japan. In meetings, the facilitator will say では、まとめます (now, let me summarize). The noun form まとめ appears everywhere: year-end まとめ articles, travel まとめ, study まとめ."},

    {type:"mc", q:"What does あとまわしにする mean?", opts:["To postpone / to put off till later","To do it quickly","To delegate to others","To cancel completely"], ans:"To postpone / to put off till later",
     hint:"This phrase literally means 'sending to after' and has a negative nuance of procrastination."},

    {type:"fb", s:"{1}はらいしゅうのきんようびです。\n(The deadline is next Friday.)", a:"しめきり", opts:["しめきり","よてい","もくひょう","やくそく"], sSrc:"The deadline is next Friday.",
     hint:"This word literally means 'closed off' and refers to the final date for completing something."},

    {type:"match", pairs:[
      {trg:"しめきり", src:"deadline"},
      {trg:"ゆうせん", src:"priority"},
      {trg:"やりなおす", src:"to redo"},
      {trg:"まとめる", src:"to summarize"}
    ]},

    {type:"mc", q:"What is the difference between おわる and おわらせる?", opts:["おわる ends naturally, おわらせる means to make it end","They mean the same thing","おわる is past tense of おわらせる","おわらせる is more casual"], ans:"おわる ends naturally, おわらせる means to make it end",
     hint:"The causative form adds the meaning of actively making or forcing something to happen."}
  ]
};
export default BATCH10_L1;
