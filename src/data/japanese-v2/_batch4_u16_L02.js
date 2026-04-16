// Batch 4 — Unit 16 Lesson 2: Future Plans & Intentions
const BATCH4_L_2 = {
  id:"jav2_u16l_b4_2", title:"しょうらい", icon:"🔮", xp:15, board:true,
  steps:[
    {type:"intro", title:"しょうらいのよてい",
     desc:"Learn to talk about future plans, goals, and life decisions. These expressions help you discuss intentions, ambitions, and upcoming events.",
     goals:["Discuss future plans and goals","Express decisions and intentions","Talk about life aspirations"]},

    {type:"teach", trg:"しょうらい", src:"future / in the future", pos:"noun", gender:null,
     note:"Kanji: 将来. Will + come. Your personal future and prospects.",
     example:"しょうらいのゆめはなんですか？",
     exampleSrc:"What is your dream for the future?",
     funFact:"Shourai specifically means YOUR personal future, not 'the future' in general (未来 mirai). When Japanese ask about your shourai, they mean your career plans, life goals, and aspirations. It is a deeply personal question."},

    {type:"teach", trg:"もくひょう", src:"goal / target", pos:"noun", gender:null,
     note:"Kanji: 目標. Eye + sign. Something you aim toward.",
     example:"ことしのもくひょうはJLPTにごうかくすることです。",
     exampleSrc:"This year's goal is to pass the JLPT.",
     funFact:"Setting goals (目標設定) is part of Japanese corporate culture. Employees write annual mokuhyou reviewed by managers. Schools also use mokuhyou: class goals, sports day goals, study goals. The culture of goal-setting starts in kindergarten."},

    {type:"teach", trg:"けいかくする", src:"to plan", pos:"verb", gender:null,
     note:"Kanji: 計画する. Measure + picture. Creating a detailed plan.",
     example:"りょこうをけいかくしています。",
     exampleSrc:"I am planning a trip.",
     funFact:"Keikaku (planning) is valued highly in Japanese culture. 'Keikaku-doori' (according to plan) is a famous phrase from the anime Death Note. Japanese project management emphasizes meticulous planning before any action begins."},

    {type:"teach", trg:"きめる", src:"to decide", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 決める. To fix upon a choice.",
     example:"だいがくをきめました。",
     exampleSrc:"I decided on a university.",
     funFact:"Kimeru is decisive and final. In contrast, Japanese culture often avoids quick individual decisions, preferring group consensus. But once something is kimeta (decided), commitment is strong. 'Kime!' is also a dramatic anime battle cry."},

    {type:"teach", trg:"えらぶ", src:"to choose / select", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 選ぶ. Picking from multiple options.",
     example:"すきなものをえらんでください。",
     exampleSrc:"Please choose whatever you like.",
     funFact:"Erabu implies careful selection from options. Japanese consumer culture offers overwhelming choices (dozens of Kit-Kat flavors, hundreds of vending machine drinks). The ability to erabu wisely from abundance is a valued skill."},

    {type:"teach", trg:"じゅんびする", src:"to prepare", pos:"verb", gender:null,
     note:"Kanji: 準備する. Standard + prepare. Getting ready for something.",
     example:"しけんのじゅんびをしています。",
     exampleSrc:"I am preparing for the exam.",
     funFact:"Junbi (preparation) is considered more important than the event itself in Japanese culture. The phrase 段取り八分 (dandori hachibu) means '80% of success is in the preparation.' Sports teams, businesses, and individuals live by this principle."},

    {type:"teach", trg:"まにあう", src:"to be in time / make it", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 間に合う. Between + fit. To arrive within the time limit.",
     example:"でんしゃにまにあいました。",
     exampleSrc:"I made it to the train in time.",
     funFact:"Ma ni au literally means 'to fit within the interval.' Missing trains, deadlines, or appointments causes great stress in punctuality-obsessed Japan. The question 'ma ni au?' (will we make it?) is heard dozens of times daily."},

    {type:"teach", trg:"おくれる", src:"to be late", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 遅れる. Being behind schedule.",
     example:"じゅっぷんおくれてすみません。",
     exampleSrc:"Sorry for being 10 minutes late.",
     funFact:"Being even 5 minutes late in Japan requires an apology. The phrase 'okurete sumimasen' is said with a bow upon arrival. Some companies require you to call ahead if you will be even slightly late. Punctuality is respect."},

    {type:"teach", trg:"かのうせい", src:"possibility", pos:"noun", gender:null,
     note:"Kanji: 可能性. Possible + nature. The chance of something happening.",
     example:"ごうかくするかのうせいがあります。",
     exampleSrc:"There is a possibility of passing.",
     funFact:"Kanousei is used frequently in news, weather, and planning. 'Ame no kanousei ga arimasu' (there is a possibility of rain). Japanese communication prefers stating possibilities rather than certainties, reflecting a cultural preference for hedging."},

    {type:"teach", trg:"きかい", src:"opportunity / chance", pos:"noun", gender:null,
     note:"Kanji: 機会. Mechanism + meet. When timing aligns favorably.",
     example:"いいきかいがあればりゅうがくしたいです。",
     exampleSrc:"If there is a good opportunity, I want to study abroad.",
     funFact:"Kikai (opportunity) uses different kanji from 機械 (kikai, machine). The character 機 means both 'machine' and 'critical moment.' 機を見る (ki wo miru, reading the moment) is the art of seizing opportunities at the right time."},

    {type:"teach", trg:"めざす", src:"to aim for / aspire to", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 目指す. Eye + point. Setting your sights on.",
     example:"いしゃをめざしています。",
     exampleSrc:"I am aspiring to become a doctor.",
     funFact:"Mezasu combines 目 (eye) with 指す (to point). You point your eyes toward your goal. It is stronger than 'hoping' but softer than 'deciding.' Japanese people use it to express serious long-term aspirations."},

    {type:"teach", trg:"かなえる", src:"to fulfill / make come true", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 叶える. Making dreams or wishes reality.",
     example:"ゆめをかなえたいです。",
     exampleSrc:"I want to make my dream come true.",
     funFact:"Yume wo kanaeru (fulfill a dream) is one of the most emotionally powerful phrases in Japanese. The kanji 叶 combines 口 (mouth) and 十 (ten), suggesting that if ten mouths say it (if enough people believe), it comes true."},

    {type:"teach", trg:"まよう", src:"to be lost / to hesitate / be torn", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 迷う. Both physically lost and emotionally undecided.",
     example:"どちらをえらぶかまよっています。",
     exampleSrc:"I am torn about which to choose.",
     funFact:"Mayou works for both physical (道に迷う, lost on the road) and emotional (迷っている, undecided) situations. Japanese decision-making culture values careful deliberation, so saying 'mayotteiru' is perfectly acceptable and honest."},

    {type:"mc", q:"What does しょうらい mean?",
     opts:["your personal future","the past","the present","the world"], ans:"your personal future",
     hint:"Specifically about your own life prospects and plans ahead."},

    {type:"fb", s:"ゆめを{1}たいです。", a:"かなえ",
     sSrc:"I want to make my dream come true.",
     opts:["かなえ","めざし","きめ","えらび"],
     hint:"To take a wish or dream and turn it into reality."},

    {type:"match", pairs:[
      {trg:"もくひょう", src:"goal"},
      {trg:"じゅんび", src:"preparation"},
      {trg:"きかい", src:"opportunity"},
      {trg:"かのうせい", src:"possibility"}
    ]},

    {type:"mc", q:"What does まよう express?",
     opts:["hesitation / being torn between options","certainty","anger","excitement"], ans:"hesitation / being torn between options",
     hint:"The state of not b... able to decide, going back and forth."},

    {type:"fb", s:"でんしゃに{1}ました。", a:"まにあい",
     sSrc:"I made it to the train in time.",
     opts:["まにあい","おくれ","のり","おり"],
     hint:"Successfully arriving before the departure time."},

    {type:"mc", q:"段取り八分 means:",
     opts:["80% of success is in preparation","always be on time","work overtime","plan for failure"], ans:"80% of success is in preparation",
     hint:"A proverb emphasizing that planning is most of the work."},

    {type:"mc", q:"めざす means:",
     opts:["to aim for / aspire to","to give up","to remember","to forget"], ans:"to aim for / aspire to",
     hint:"Setting your sights on a long-term goal or aspiration."}
  ]
};
export default BATCH4_L_2;
