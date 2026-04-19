// Batch 6 – Unit 23 (B1.3 Nominalization): Abstract Concepts & Thought
const BATCH6_L1 = {
  id:"jav2_u23l_b6_1", title:"抽象的(ちゅうしょうてき)な考(かんが)え", icon:"🧠", xp:15, board:true,
  steps:[
    {type:"intro", title:"抽象的(ちゅうしょうてき)な考(かんが)え",
     desc:"Build vocabulary for abstract thinking and intellectual discourse. These nouns and verbs are essential for JLPT N3/N2 reading comprehension and expressing complex ideas.",
     goals:["Use abstract nouns: りゆう, もくてき, けっか","Express cause and effect relationships","Discuss goals, reasons, and outcomes"]},

    {type:"teach", trg:"理由(りゆう)", src:"reason / cause", pos:"noun", gender:null,
     note:"理由(りゆう)を聞(き)く = to ask the reason.\nDifferent from 原因(げんいん) (root cause).",
     example:"A: 遅(おく)れた理由(りゆう)を教(おし)えてください。\nB: 電車(でんしゃ)が止(と)まっていたからです。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Please tell me the reason you were late.\nB: Because the train was stopped.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"理由(りゆう) (理由) combines 理 (reason/logic) and 由 (origin). In Japanese debate and writing, stating clear 理由(りゆう) is essential. JLPT reading tests frequently ask 理由(りゆう)は何(なん)ですか (what is the reason?). The ability to articulate 理由(りゆう) clearly is a mark of intellectual maturity."},

    {type:"teach", trg:"目的(もくてき)", src:"purpose / goal / objective", pos:"noun", gender:null,
     note:"目的(もくてき)を達成(たっせい)する = to achieve a goal.\n目的地(もくてきち) = destination.",
     example:"A: 日本(にほん)に来(き)た目的(もくてき)は何(なん)ですか？\nB: 日本語(にほんご)を勉強(べんきょう)するためです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: What is your purpose for coming to Japan?\nB: To study Japanese.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"目的(もくてき) (目的) combines 目 (eye) and 的 (target). Your 目的(もくてき) is what your eyes are aimed at. Immigration officers ask 入国(にゅうこく)の目的(もくてき) (purpose of entry). In business, 明確(めいかく)な目的(もくてき) (clear objectives) drive project planning. 目的意識(もくてきいしき) (goal awareness) is a valued workplace trait."},

    {type:"teach", trg:"結果(けっか)", src:"result / outcome", pos:"noun", gender:null,
     note:"結果(けっか)として = as a result.\n試験(しけん)の結果(けっか) = exam results.",
     example:"A: 試験(しけん)の結果(けっか)はどうでしたか？\nB: おかげさまで合格(ごうかく)しました。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: How were your exam results?\nB: Thanks to you, I passed.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"結果(けっか) (結果) combines 結 (tie/conclude) and 果 (fruit). The result is the 'fruit' of your efforts. その結果(けっか) (as a result) is a key connector in formal writing. Japanese report cards (通信簿(つうしんぼ)) show academic 結果(けっか) along with behavioral assessments."},

    {type:"teach", trg:"原因(げんいん)", src:"cause / origin (of a problem)", pos:"noun", gender:null,
     note:"事故(じこ)の原因(げんいん) = cause of the accident.\n原因(げんいん)を調(しら)べる = to investigate the cause.",
     example:"A: 火事(かじ)の原因(げんいん)は何(なん)ですか？\nB: まだ調査中(ちょうさちゅう)です。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: What is the cause of the fire?\nB: It is still under investigation.\nA: How was it?\nB: It was very good.",
     funFact:"原因(げんいん) and 結果(けっか) are a fundamental pair: cause and effect. In JLPT reading, identifying the 原因(げんいん) of events is a key skill. 原因(げんいん)不明(ふめい) (cause unknown) is used in medical and accident reports. Scientific papers follow the 原因(げんいん) to 結果(けっか) logic chain."},

    {type:"teach", trg:"影響(えいきょう)", src:"influence / impact / effect", pos:"noun", gender:null,
     note:"影響(えいきょう)を与(あた)える = to have an influence.\n影響(えいきょう)を受(う)ける = to be influenced.",
     example:"A: 台風(たいふう)の影響(えいきょう)で飛行機(ひこうき)が欠航(けっこう)になりました。\nB: 残念(ざんねん)ですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Flights were cancelled due to the typhoon's impact.\nB: That is unfortunate.\nA: When was it?\nB: It was last summer.",
     funFact:"影響(えいきょう) (影響) combines 影 (shadow) and 響 (echo/resonate). An influence is like a shadow that resonates outward. In news, 影響(えいきょう) is a daily word: 経済(けいざい)への影響(えいきょう) (impact on the economy), 健康(けんこう)への影響(えいきょう) (effect on health). JLPT N2 frequently tests 影響(えいきょう) in reading passages."},

    {type:"mc", q:"目的(もくてき) means:", opts:["Purpose or goal","Result or outcome","Reason or cause","Influence or effect"], ans:"Purpose or goal",
     hint:"This word describes what you are aiming to achieve."},

    {type:"teach", trg:"可能性(かのうせい)", src:"possibility / likelihood", pos:"noun", gender:null,
     note:"可能性(かのうせい)がある = there is a possibility.\n可能性(かのうせい)が高(たか)い = highly likely.",
     example:"A: 明日(あした)雨(あめ)が降(ふ)る可能性(かのうせい)はありますか？\nB: はい、五十(ごじゅっ)パーセントくらいです。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Is there a possibility of rain tomorrow?\nB: Yes, about 50 percent.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"可能性(かのうせい) is a key word in academic and formal Japanese. 可能 (possible) + 性 (nature/tendency) = the nature of being possible. Scientists, doctors, and lawyers use this word constantly to express probability without certainty. 無限(むげん)の可能性(かのうせい) (infinite possibilities) is an inspirational phrase."},

    {type:"teach", trg:"事実(じじつ)", src:"fact / truth / reality", pos:"noun", gender:null,
     note:"事実(じじつ)に基(もと)づく = based on facts.\n事実確認(じじつかくにん) = fact-checking.",
     example:"A: 事実(じじつ)を確認(かくにん)してから発表(はっぴょう)しましょう。\nB: そうですね。間違(まちが)いがあってはいけません。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Let us verify the facts before making an announcement.\nB: Yes. There must be no mistakes.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"事実(じじつ) (事実) combines 事 (matter) and 実 (truth/fruit). In journalism, 事実確認(じじつかくにん) (fact-checking) is fundamental. The phrase 事実上(じじつじょう) (in fact/in practice) often introduces reality that differs from theory. Japanese courts require 事実認定(じじつにんてい) (fact-finding) before judgment."},

    {type:"teach", trg:"意見(いけん)", src:"opinion / view", pos:"noun", gender:null,
     note:"意見(いけん)を言(い)う = to express an opinion.\n意見(いけん)が違(ちが)う = opinions differ.",
     example:"A: この問題(もんだい)について意見(いけん)を聞(き)かせてください。\nB: 私(わたし)は反対(はんたい)です。理由(りゆう)を説明(せつめい)します。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Please share your opinion on this issue.\nB: I am against it. Let me explain my reasons.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"Expressing 意見(いけん) directly is less common in Japanese culture than in Western cultures. The phrase 意見(いけん)はありませんか (are there any opinions?) at meetings often gets silence. Japanese communication favors reading the room (空気(くうき)を読(よ)む) over direct opinion-stating. This is changing in younger generations."},

    {type:"teach", trg:"大切(たいせつ)", src:"important / precious / valuable", pos:"adj", gender:null,
     note:"Na-adjective. 大切(たいせつ)なこと = an important thing.\n大事(だいじ) = also important.",
     example:"A: 健康(けんこう)は最(もっと)も大切(たいせつ)です。\nB: そうですね。お金(かね)より大切(たいせつ)です。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Health is the most important thing.\nB: Yes. More important than money.\nA: How long did it take?\nB: About two hours.",
     funFact:"大切(たいせつ) and 大事(だいじ) both mean important but have nuance differences. 大切(たいせつ) is more emotional (precious, cherished): 大切(たいせつ)な人(ひと) (a precious person). 大事(だいじ) is more practical (important, necessary): 大事(だいじ)な書類(しょるい) (important documents). Both are N5/N4 words but used constantly at all levels."},

    {type:"fb", s:"遅(おく)れた{1}を教(おし)えてください。\n(Please tell me the reason you were late.)", a:"りゆう", opts:["りゆう","けっか","もくてき","いけん"], sSrc:"Please tell me the reason you were late.",
     hint:"The word for the explanation or justification behind something."},

    {type:"teach", trg:"考(かんが)える", src:"to think / to consider", pos:"verb", gender:null,
     note:"Group 2 verb. よく考(かんが)えてください = please think carefully.",
     example:"A: もう少(すこ)し考(かんが)えさせてください。\nB: はい、時間(じかん)をかけて大丈夫(だいじょうぶ)ですよ。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Please let me think about it a little more.\nB: Sure, take your time.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"考(かんが)える is the intellectual thinking verb. 思(おも)う (to think/feel) is more emotional. 考(かんが)え方(かた) (way of thinking) is a common word in philosophy and education. The polite expression 考(かんが)えさせてください (let me think about it) is used when you need time before committing to something."},

    {type:"teach", trg:"決(き)める", src:"to decide / to determine", pos:"verb", gender:null,
     note:"Group 2 verb. 決(き)めました = I have decided.\n決(き)まる = to be decided (intransitive).",
     example:"A: もう決(き)めましたか？\nB: はい、こちらに決(き)めました。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Have you decided yet?\nB: Yes, I have decided on this one.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"決(き)める/決(き)まる is another transitive/intransitive pair. ルールが決(き)まった (the rule was decided). ルールを決(き)めた (someone decided the rule). In Japanese, 決(き)め台詞(ぜりふ) (signature phrase/catchphrase) is a pop culture term. Every anime hero has a 決(き)め台詞(ぜりふ) that they say at climactic moments."},

    {type:"mc", q:"原因(げんいん) and 結果(けっか) together describe:", opts:["Cause and effect","Problem and solution","Question and answer","Beginning and end"], ans:"Cause and effect",
     hint:"These two words form the fundamental logical pair in analysis."},

    {type:"match", pairs:[
      {trg:"理由(りゆう)", src:"reason"},
      {trg:"目的(もくてき)", src:"purpose / goal"},
      {trg:"結果(けっか)", src:"result"},
      {trg:"影響(えいきょう)", src:"influence / effect"},
      {trg:"可能性(かのうせい)", src:"possibility"}
    ]},

    {type:"fb", s:"もう少(すこ)し{1}させてください。\n(Please let me think about it a little more.)", a:"かんがえ", opts:["かんがえ","きめ","いい","おもい"], sSrc:"Please let me think about it a little more.",
     hint:"The causative form stem of the verb meaning to think or consider."},

    {type:"mc", q:"事実(じじつ) means:", opts:["Fact or truth","Opinion","Guess","Feeling"], ans:"Fact or truth",
     hint:"This word describes verified reality, not speculation."}
  ,{type:"match",pairs:[{trg:"原因(げんいん)",src:"cause / origin (of a problem)"},{trg:"事実(じじつ)",src:"fact / truth / reality"},{trg:"意見(いけん)",src:"opinion / view"},{trg:"大切(たいせつ)",src:"important / precious / valuable"},{trg:"考(かんが)える",src:"to think / to consider"},{trg:"決(き)める",src:"to decide / to determine"}]},
  {type:"fb", s:"火事(かじ)の{1}を調(しら)べています。", a:["原因(げんいん)"], opts:["原因(げんいん)","結果(けっか)","影響(えいきょう)","理由(りゆう)"], hint:"The factor that directly causes an event or problem to occur.", sSrc:"We are investigating the {1} of the fire."},
  {type:"fb", s:"みんなで相談(そうだん)して方針(ほうしん)を{1}ました。", a:["決(き)める"], opts:["決(き)める","影響(えいきょう)","考(かんが)える","事実(じじつ)"], hint:"The verb for making a decision or settling on a course of action.", sSrc:"We consulted together and {1} on a policy."}
]
};
export default BATCH6_L1;
