// Batch 10 – Unit 16 (B1.1 Plans): Daily Planning & Scheduling
const BATCH10_L1 = {
  id:"jav2_u16l_b10_1", title:"にっていかんり", icon:"📋", xp:15, board:true,
  steps:[
    {type:"intro", title:"にっていかんり",
     desc:"Learn vocabulary for daily planning, scheduling, and time management. These practical words are essential for work and study in Japan.",
     goals:["Manage schedules and deadlines","Discuss priorities","Use planning-related expressions"]},

    {type:"teach", trg:"しめきり", src:"deadline", pos:"noun", gender:null,
     note:"しめきりにまにあう = to meet the deadline.\nしめきりびは = the deadline date is.",
     example:"A: しめきりはいつですか？\nB: らいしゅうのきんようびです。",
     exampleSrc:"A: When is the deadline?\nB: Next Friday.",
     funFact:"しめきり (締め切り) literally means 'closed off.' Japanese people take しめきり extremely seriously. Missing one is considered a major professional failing. The phrase しめきりまえ means 'before the deadline' and is when most Japanese people feel the most productive pressure."},

    {type:"teach", trg:"ゆうせん", src:"priority", pos:"noun", gender:null,
     note:"ゆうせんじゅんい = priority order.\nゆうせんする = to prioritize.",
     example:"A: なにをゆうせんしますか？\nB: けんこうがいちばんです。",
     exampleSrc:"A: What do you prioritize?\nB: Health comes first.",
     funFact:"ゆうせん (優先) culture is visible everywhere in Japan. ゆうせんせき (priority seats) on trains are for elderly, pregnant, and disabled passengers. ゆうせんレーン (priority lanes) exist at airports. In business, ゆうせんじゅんい (priority ranking) determines meeting agendas and task allocation."},

    {type:"teach", trg:"のばす", src:"to extend / to postpone", pos:"verb", gender:null,
     note:"きかんをのばす = to extend the period.\nしめきりをのばす = to extend the deadline.",
     example:"A: しめきりをのばせますか？\nB: いちにちだけなら。",
     exampleSrc:"A: Can you extend the deadline?\nB: Only by one day.",
     funFact:"のばす (延ばす/伸ばす) has two kanji: 延 for extending time/postponing and 伸 for stretching/growing. Asking to のばす a しめきり is delicate in Japanese business. You would frame it as おいそがしいところすみませんが (I am sorry to bother you when you are busy, but...)."},

    {type:"teach", trg:"おわらせる", src:"to finish / to complete", pos:"verb", gender:null,
     note:"Causative of おわる. しごとをおわらせる = to finish work.\nCompelling something to end.",
     example:"A: さんじまでにおわらせてください。\nB: がんばります。",
     exampleSrc:"A: Please finish by 3 o'clock.\nB: I will do my best.",
     funFact:"おわらせる (終わらせる) uses the causative form to mean 'to make something end/finish.' The distinction between おわる (it ends naturally) and おわらせる (I make it end) is important. In workplace Japanese, おわらせます (I will finish it) shows active commitment."},

    {type:"teach", trg:"やりなおす", src:"to redo / to start over", pos:"verb", gender:null,
     note:"やる = to do, なおす = to fix/redo.\nもういちどやりなおす = do over once more.",
     example:"A: まちがえたのでやりなおします。\nB: じかんはだいじょうぶですか？",
     exampleSrc:"A: I made a mistake, so I will redo it.\nB: Is there enough time?",
     funFact:"やりなおす is a compound verb (やる + なおす) where なおす adds the meaning 'redo properly.' Many Japanese compound verbs use this pattern: かきなおす (rewrite), いいなおす (rephrase), やりなおし (a redo). The phrase じんせいのやりなおし means 'a fresh start in life.'"},

    {type:"teach", trg:"あとまわし", src:"putting off / postponing", pos:"noun", gender:null,
     note:"あとまわしにする = to put off till later.\nNegative nuance: procrastination.",
     example:"A: あとまわしにしないでください。\nB: わかりました。いますぐやります。",
     exampleSrc:"A: Please do not put it off.\nB: Understood. I will do it right away.",
     funFact:"あとまわし (後回し) literally means 'sending to later.' While Japanese culture values diligence, あとまわし is a universal human tendency. The phrase あとまわしにするくせ means 'the habit of procrastinating.' Self-help books about overcoming あとまわし are bestsellers in Japan."},

    {type:"teach", trg:"すすめる", src:"to advance / to make progress", pos:"verb", gender:null,
     note:"プロジェクトをすすめる = to advance a project.\nはなしをすすめる = to move the conversation forward.",
     example:"A: プロジェクトをすすめましょう。\nB: まず、スケジュールをかくにんします。",
     exampleSrc:"A: Let's move the project forward.\nB: First, let me confirm the schedule.",
     funFact:"すすめる (進める) is essential in meetings: ぎだいをすすめる (proceed with the agenda), けいかくをすすめる (advance the plan). The intransitive form すすむ (to progress) pairs with it: プロジェクトがすすんでいる (the project is progressing). Japanese business values steady, incremental すすめ方 (way of proceeding)."},

    {type:"teach", trg:"まとめる", src:"to summarize / to organize / to compile", pos:"verb", gender:null,
     note:"レポートをまとめる = to compile a report.\nいけんをまとめる = to consolidate opinions.",
     example:"A: かいぎのないようをまとめてください。\nB: ぎじろくをつくります。",
     exampleSrc:"A: Please summarize the meeting contents.\nB: I will create minutes.",
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
