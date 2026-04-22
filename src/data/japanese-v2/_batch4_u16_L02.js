// Batch 4. Unit 16 Lesson 2: Future Plans & Intentions
const BATCH4_L_2 = {
  id:"jav2_u16l_b4_2", title:"将来(しょうらい)", icon:"🔮", xp:15, board:true,
  steps:[
    {type:"intro", title:"将来(しょうらい)の予定(よてい)",
     desc:"Learn to talk about future plans, goals, and life decisions. These expressions help you discuss intentions, ambitions, and upcoming events.",
     goals:["Discuss future plans and goals","Express decisions and intentions","Talk about life aspirations"]},

    {type:"teach", trg:"将来(しょうらい)", src:"future / in the future", pos:"noun", gender:null,
     note:"Kanji: 将来. Will + come. Your personal future and prospects.",
     example:"将来(しょうらい)の夢(ゆめ)は何(なん)ですか？",
     exampleSrc:"What is your dream for the future?",
     funFact:"Shourai specifically means YOUR personal future, not 'the future' in general (未来 mirai). When Japanese ask about your shourai, they mean your career plans, life goals, and aspirations. It is a deeply personal question."},

    {type:"teach", trg:"目標(もくひょう)", src:"goal / target", pos:"noun", gender:null,
     note:"Kanji: 目標. Eye + sign. Something you aim toward.",
     example:"今年(ことし)の目標(もくひょう)はJLPTに合格(ごうかく)することです。",
     exampleSrc:"This year's goal is to pass the JLPT.",
     funFact:"Setting goals (目標設定) is part of Japanese corporate culture. Employees write annual mokuhyou reviewed by managers. Schools also use mokuhyou: class goals, sports day goals, study goals. The culture of goal-setting starts in kindergarten."},

    {type:"teach", trg:"計画(けいかく)する", src:"to plan", pos:"verb", gender:null,
     note:"Kanji: 計画する. Measure + picture. Creating a detailed plan.",
     example:"旅行(りょこう)を計画(けいかく)しています。",
     exampleSrc:"I am planning a trip.",
     funFact:"Keikaku (planning) is valued highly in Japanese culture. 'Keikaku-doori' (according to plan) is a famous phrase from the anime Death Note. Japanese project management emphasizes meticulous planning before any action begins."},

    {type:"teach", trg:"決(き)める", src:"to decide", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 決める. To fix upon a choice.",
     example:"大学(だいがく)を決(き)めました。",
     exampleSrc:"I decided on a university.",
     funFact:"Kimeru is decisive and final. In contrast, Japanese culture often avoids quick individual decisions, preferring group consensus. But once something is kimeta (decided), commitment is strong. 'Kime!' is also a dramatic anime battle cry."},

    {type:"teach", trg:"選(えら)ぶ", src:"to choose / select", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 選ぶ. Picking from multiple options.",
     example:"好(す)きなものを選(えら)んでください。",
     exampleSrc:"Please choose whatever you like.",
     funFact:"Erabu implies careful selection from options. Japanese consumer culture offers overwhelming choices (dozens of Kit-Kat flavors, hundreds of vending machine drinks). The ability to erabu wisely from abundance is a valued skill."},

    {type:"teach", trg:"準備(じゅんび)する", src:"to prepare", pos:"verb", gender:null,
     note:"Kanji: 準備する. Standard + prepare. Getting ready for something.",
     example:"試験(しけん)の準備(じゅんび)をしています。",
     exampleSrc:"I am preparing for the exam.",
     funFact:"Junbi (preparation) is considered more important than the event itself in Japanese culture. The phrase 段取り八分 (dandori hachibu) means '80% of success is in the preparation.' Sports teams, businesses, and individuals live by this principle."},

    {type:"teach", trg:"間(ま)に合(あ)う", src:"to be in time / make it", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 間に合う. Between + fit. To arrive within the time limit.",
     example:"電車(でんしゃ)に間(ま)に合(あ)いました。",
     exampleSrc:"I made it to the train in time.",
     funFact:"Ma ni au literally means 'to fit within the interval.' Missing trains, deadlines, or appointments causes great stress in punctuality-obsessed Japan. The question 'ma ni au?' (will we make it?) is heard dozens of times daily."},

    {type:"teach", trg:"遅(おく)れる", src:"to be late", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 遅れる. Being behind schedule.",
     example:"十分(じゅっぷん)遅(おく)れてすみません。",
     exampleSrc:"Sorry for being 10 minutes late.",
     funFact:"Being even 5 minutes late in Japan requires an apology. The phrase 'okurete sumimasen' is said with a bow upon arrival. Some companies require you to call ahead if you will be even slightly late. Punctuality is respect."},

    {type:"teach", trg:"可能性(かのうせい)", src:"possibility", pos:"noun", gender:null,
     note:"Kanji: 可能性. Possible + nature. The chance of something happening.",
     example:"合格(ごうかく)する可能性(かのうせい)があります。",
     exampleSrc:"There is a possibility of passing.",
     funFact:"Kanousei is used frequently in news, weather, and planning. 'Ame no kanousei ga arimasu' (there is a possibility of rain). Japanese communication prefers stating possibilities rather than certainties, reflecting a cultural preference for hedging."},

    {type:"teach", trg:"機会(きかい)", src:"opportunity / chance", pos:"noun", gender:null,
     note:"Kanji: 機会. Mechanism + meet. When timing aligns favorably.",
     example:"いい機会(きかい)があれば留学(りゅうがく)したいです。",
     exampleSrc:"If there is a good opportunity, I want to study abroad.",
     funFact:"Kikai (opportunity) uses different kanji from 機械 (kikai, machine). The character 機 means both 'machine' and 'critical moment.' 機を見る (ki wo miru, reading the moment) is the art of seizing opportunities at the right time."},

    {type:"teach", trg:"目指(めざ)す", src:"to aim for / aspire to", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 目指す. Eye + point. Setting your sights on.",
     example:"医者(いしゃ)を目指(めざ)しています。",
     exampleSrc:"I am aspiring to become a doctor.",
     funFact:"Mezasu combines 目 (eye) with 指す (to point). You point your eyes toward your goal. It is stronger than 'hoping' but softer than 'deciding.' Japanese people use it to express serious long-term aspirations."},

    {type:"teach", trg:"叶(かな)える", src:"to fulfill / make come true", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 叶える. Making dreams or wishes reality.",
     example:"夢(ゆめ)を叶(かな)えたいです。",
     exampleSrc:"I want to make my dream come true.",
     funFact:"Yume wo kanaeru (fulfill a dream) is one of the most emotionally powerful phrases in Japanese. The kanji 叶 combines 口 (mouth) and 十 (ten), suggesting that if ten mouths say it (if enough people believe), it comes true."},

    {type:"teach", trg:"迷(まよ)う", src:"to be lost / to hesitate / be torn", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 迷う. Both physically lost and emotionally undecided.",
     example:"どちらを選(えら)ぶか迷(まよ)っています。",
     exampleSrc:"I am torn about which to choose.",
     funFact:"Mayou works for both physical (道に迷う, lost on the road) and emotional (迷っている, undecided) situations. Japanese decision-making culture values careful deliberation, so saying 'mayotteiru' is perfectly acceptable and honest."},

    {type:"mc", q:"What does 将来(しょうらい) mean?",
     opts:["your personal future","the past","the present","the world"], ans:"your personal future",
     hint:"Specifically about your own life prospects and plans ahead."},

    {type:"fb", s:"夢(ゆめ)を{1}たいです。", a:"叶(かな)え",
     sSrc:"I want to make my dream come true.",
     opts:["叶(かな)え","目指(めざ)し","決(き)め","選(えら)び"],
     hint:"To take a wish or dream and turn it into reality."},

    {type:"match", pairs:[
      {trg:"目標(もくひょう)", src:"goal"},
      {trg:"準備(じゅんび)", src:"preparation"},
      {trg:"機会(きかい)", src:"opportunity"},
      {trg:"可能性(かのうせい)", src:"possibility"}
    ]},

    {type:"mc", q:"What does 迷(まよ)う express?",
     opts:["excitement","hesitation / being torn between options","certainty","anger"], ans:"hesitation / being torn between options",
     hint:"The state of not b... able to decide, going back and forth."},

    {type:"fb", s:"電車(でんしゃ)に{1}ました。", a:"間(ま)に合(あ)い",
     sSrc:"I made it to the train in time.",
     opts:["間(ま)に合(あ)い","遅(おく)れ","乗(の)り","降(お)り"],
     hint:"Successfully arriving before the departure time."},

    {type:"mc", q:"段取り八分 means:",
     opts:["work overtime","plan for failure","80% of success is in preparation","always be on time"], ans:"80% of success is in preparation",
     hint:"A proverb emphasizing that planning is most of the work."},

    {type:"mc", q:"目指(めざ)す means:",
     opts:["to give up","to remember","to forget","to aim for / aspire to"], ans:"to aim for / aspire to",
     hint:"Setting your sights on a long-term goal or aspiration."}
  ,{type:"match",pairs:[{trg:"将来(しょうらい)",src:"future / in the future"},{trg:"計画(けいかく)する",src:"to plan"},{trg:"決(き)める",src:"to decide"},{trg:"選(えら)ぶ",src:"to choose / select"},{trg:"間(ま)に合(あ)う",src:"to be in time / make it"},{trg:"遅(おく)れる",src:"to be late"}]},{type:"match",pairs:[{trg:"目指(めざ)す",src:"to aim for / aspire to"},{trg:"迷(まよ)う",src:"to be lost / to hesitate / be torn"}]},
  {type:"fb", s:"今年(ことし)の{1}はJLPT N2に合格(ごうかく)することです。", a:["目標(もくひょう)"], opts:["目標(もくひょう)","将来(しょうらい)","計画(けいかく)する","選(えら)ぶ"], hint:"A specific aim or target you set for yourself to work toward.", sSrc:"My {1} for this year is to pass JLPT N2."},
  {type:"fb", s:"留学(りゅうがく)は日本語(にほんご)を上達(じょうたつ)させる良(よ)い{1}です。", a:["機会(きかい)"], opts:["機会(きかい)","可能性(かのうせい)","目標(もくひょう)","将来(しょうらい)"], hint:"A favourable situation that allows you to do or achieve something.", sSrc:"Studying abroad is a good {1} to improve your Japanese."}
]
};
export default BATCH4_L_2;
