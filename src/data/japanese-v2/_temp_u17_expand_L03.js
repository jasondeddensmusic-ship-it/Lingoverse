// Unit 17 Expansion. Lesson 5: うけみとニュース (Passive in News and Reporting)
const LESSON_5 = {
  id:"jav2_u17l5", title:"うけみとニュース", icon:"📰", xp:15, board:true,
  steps:[
    {type:"intro", title:"うけみとニュース",
     desc:"Passive voice dominates Japanese news reporting. Events are described from the perspective of the affected party: buildings were built, people were rescued, decisions were announced. Learn to read and understand news-style passive, the backbone of formal Japanese.",
     goals:["Understand passive in news and reporting contexts","Use passive to describe events neutrally","Recognize formal passive patterns in announcements"]},

    {type:"teach", trg:"はっぴょうされる", src:"to be announced / to be published", pos:"verb", gender:null,
     note:"Passive of はっぴょうする (to announce). する-verb to される.\nKanji: 発表される. Standard in news.",
     example:"A: あたらしいけいかくがはっぴょうされました。\nB: どんなけいかくですか？",
     exampleSrc:"A: A new plan was announced.\nB: What kind of plan?",
     funFact:"発表される appears in virtually every Japanese news broadcast. Combining 発 (emit/release) and 表 (surface/display), it covers announcements from government policies to celebrity news. The passive form is standard because news reports focus on the event, not the announcer."},

    {type:"teach", trg:"たてられる", src:"to be built / to be erected", pos:"verb", gender:null,
     note:"Passive of たてる (to build). Group 2: たて + られる.\nKanji: 建てられる.",
     example:"A: あたらしいビルがたてられています。\nB: いつかんせいしますか？",
     exampleSrc:"A: A new building is being built.\nB: When will it be completed?",
     funFact:"建てられる is essential for describing construction and history. Japan's construction industry is enormous, with buildings constantly going up in cities. Historical descriptions also rely on this verb: このじんじゃは800ねんまえにたてられました (this shrine was built 800 years ago)."},

    {type:"teach", trg:"ひらかれる", src:"to be held / to be opened (event)", pos:"verb", gender:null,
     note:"Passive of ひらく (to open/hold an event). Group 1: ひらく to ひらか + れる.\nKanji: 開かれる.",
     example:"A: らいしゅうかいぎがひらかれます。\nB: なんじからですか？",
     exampleSrc:"A: A meeting will be held next week.\nB: From what time?",
     funFact:"開かれる covers events being held: meetings, exhibitions, ceremonies. The kanji 開 (open) extends from physical opening to hosting events. Olympic opening ceremonies are かいかいしき (opening ceremony), using the same kanji. News constantly reports events ひらかれる."},

    {type:"teach", trg:"みつけられる", src:"to be found / to be discovered", pos:"verb", gender:null,
     note:"Passive of みつける (to find). Group 2: みつけ + られる.\nKanji: 見つけられる.",
     example:"A: あたらしいいせきがみつけられました。\nB: どこでみつかりましたか？",
     exampleSrc:"A: A new archaeological site was discovered.\nB: Where was it found?",
     funFact:"見つけられる (passive) describes something being found by someone. Compare with the intransitive みつかる (to be found, to turn up). News prefers the passive 見つけられた when crediting discoverers, and みつかった for general reporting. Both are common in news about archaeological finds and missing persons."},

    {type:"mc", q:"あたらしいけいかくがはっぴょうされました means:", opts:["They announced a new plan","A new plan was announced","I announced my plan","The plan was cancelled"], ans:"A new plan was announced",
     hint:"Passive of はっぴょうする. The focus is on the p... (what was a...), not who a... it."},

    {type:"teach", trg:"えらばれる", src:"to be chosen / to be elected", pos:"verb", gender:null,
     note:"Passive of えらぶ (to choose). Group 1: えらぶ to えらば + れる.\nKanji: 選ばれる. Common in election news.",
     example:"A: あたらしいしちょうがえらばれました。\nB: だれがえらばれましたか？",
     exampleSrc:"A: A new mayor was elected.\nB: Who was elected?",
     funFact:"選ばれる appears constantly in election reporting and awards ceremonies. The kanji 選 is in 選挙 (senkyo, election) and 選手 (senshu, athlete). When someone is 'chosen' for a national team or award, news reports use えらばれた. The passive emphasizes the honor of being selected."},

    {type:"teach", trg:"けいかく", src:"plan / project", pos:"noun", gender:null,
     note:"する-verb capable: けいかくする = to plan.\nKanji: 計画. 計 (measure) + 画 (drawing/plan).",
     example:"A: なつやすみのけいかくをたてましょう。\nB: どこにいきたいですか？",
     exampleSrc:"A: Let us make plans for summer vacation.\nB: Where do you want to go?",
     funFact:"計画 is used for everything from vacation plans to government projects. The expression けいかくどおり (according to plan) appears in business and daily life. Japan is known for meticulous planning. Train schedules, event timelines, and project management all reflect this cultural emphasis on keikaku."},

    {type:"teach", trg:"つたえられる", src:"to be conveyed / to be reported", pos:"verb", gender:null,
     note:"Passive of つたえる (to convey/report). Group 2: つたえ + られる.\nKanji: 伝えられる.",
     example:"A: テレビでじこがつたえられました。\nB: どこでおきましたか？",
     exampleSrc:"A: An accident was reported on TV.\nB: Where did it happen?",
     funFact:"伝えられる is the news reporter's passive. The kanji 伝 means 'transmit/convey' and appears in 伝統 (tradition, literally 'transmitted customs') and 伝説 (legend, 'transmitted story'). News anchors use つたえられている (is being reported) for developing stories."},

    {type:"fb", s:"あたらしいビルが{1}います。\n(A new building is being built.)", a:"たてられて", opts:["たてられて","たてて","たって","たてさせて"], sSrc:"A new building is being built.",
     hint:"The passive て-form of たてる (to build). Group 2 passive: stem + られる."},

    {type:"teach", trg:"かんせいする", src:"to be completed / to finish (construction)", pos:"verb", gender:null,
     note:"する-verb. かんせい = completion. Kanji: 完成する.\n完 (complete) + 成 (become/achieve).",
     example:"A: あたらしいえきがらいねんかんせいします。\nB: べんりになりますね。",
     exampleSrc:"A: The new station will be completed next year.\nB: It will become convenient.",
     funFact:"完成する is used for any major project reaching completion: buildings, artworks, software. The related かんせいひん (finished product) appears in manufacturing. Japan takes great pride in completion quality. The idea that something is kansei (complete, perfected) carries deep satisfaction."},

    {type:"teach", trg:"おこなわれる", src:"to be carried out / to be conducted", pos:"verb", gender:null,
     note:"Passive of おこなう (to carry out). Group 1: おこなう to おこなわ + れる.\nKanji: 行われる. Very formal.",
     example:"A: そつぎょうしきがおこなわれました。\nB: おめでとうございます。",
     exampleSrc:"A: The graduation ceremony was held.\nB: Congratulations.",
     funFact:"行われる is the most formal way to say an event was conducted. While ひらかれる covers 'held/opened,' 行われる emphasizes official execution. Ceremonies (式), investigations (調査), and experiments (実験) are all 行われる in news language. It sounds authoritative and institutional."},

    {type:"mc", q:"そつぎょうしきがおこなわれた means:", opts:["The ceremony was cancelled","The graduation ceremony was held","I attended the ceremony","The ceremony will be next week"], ans:"The graduation ceremony was held",
     hint:"行われる is the formal passive for events being conducted or carried out."},

    {type:"tip", title:"Passive in Japanese News",
     text:"Japanese news heavily favors passive voice. Common patterns:\n\nはっぴょうされた = was announced\nたてられた = was built\nひらかれた = was held (event)\nみつけられた = was discovered\nえらばれた = was elected/chosen\nつたえられた = was reported\nおこなわれた = was carried out\n\nWhy passive dominates news:\n1. Objectivity: avoids naming actors unnecessarily\n2. Focus: puts the event or result first\n3. Formality: passive sounds more authoritative\n4. Brevity: can omit the agent entirely",
     deepDive:{title:"Reading Japanese News",
      text:"If you can recognize passive verbs, you can read basic Japanese news headlines. Most follow this pattern:\n\n[Topic] が + [passive verb]\nあたらしいほうりつがせいりつされた (A new law was enacted)\n\n[Topic] が + [place] で + [passive verb]\nたいかいがとうきょうでひらかれた (The tournament was held in Tokyo)\n\nThe agent (who did it) is often omitted entirely in news. Passive voice makes this natural. This is the opposite of English journalism, which prefers active voice and named agents."}},

    {type:"match", pairs:[{trg:"はっぴょうされる",src:"to be announced"},{trg:"たてられる",src:"to be built"},{trg:"ひらかれる",src:"to be held"},{trg:"みつけられる",src:"to be discovered"}]},

    {type:"fb", s:"そつぎょうしきが{1}ました。\n(The graduation ceremony was held.)", a:"おこなわれ", opts:["おこなわれ","おこなって","おこない","おこなえ"], sSrc:"The graduation ceremony was held.",
     hint:"The formal passive of おこなう (to carry out). Group 1: あ-row + れる."},

    {type:"match", pairs:[{trg:"つたえられる",src:"to be reported"},{trg:"おこなわれる",src:"to be carried out"},{trg:"けいかく",src:"plan"},{trg:"かんせいする",src:"to be completed"}]},

    {type:"mc", q:"Why does Japanese news prefer passive voice?", opts:["It sounds more casual","It focuses on events rather than actors","It is easier to conjugate","Passive is required by law"], ans:"It focuses on events rather than actors",
     hint:"News reporting puts the event first. Passive lets you describe what happened without naming who did it."},
  ]
};
export default LESSON_5;
