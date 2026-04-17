// Batch 6 – Unit 23 (B1.3 Nominalization): Abstract Concepts & Thought
const BATCH6_L1 = {
  id:"jav2_u23l_b6_1", title:"ちゅうしょうてきなかんがえ", icon:"🧠", xp:15, board:true,
  steps:[
    {type:"intro", title:"ちゅうしょうてきなかんがえ",
     desc:"Build vocabulary for abstract thinking and intellectual discourse. These nouns and verbs are essential for JLPT N3/N2 reading comprehension and expressing complex ideas.",
     goals:["Use abstract nouns: りゆう, もくてき, けっか","Express cause and effect relationships","Discuss goals, reasons, and outcomes"]},

    {type:"teach", trg:"りゆう", src:"reason / cause", pos:"noun", gender:null,
     note:"Kanji: 理由. りゆうをきく = to ask the reason.\nDifferent from げんいん (root cause).",
     example:"A: おくれたりゆうをおしえてください。\nB: でんしゃがとまっていたからです。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Please tell me the reason you were late.\nB: Because the train was stopped.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"りゆう (理由) combines 理 (reason/logic) and 由 (origin). In Japanese debate and writing, stating clear りゆう is essential. JLPT reading tests frequently ask りゆうはなんですか (what is the reason?). The ability to articulate りゆう clearly is a mark of intellectual maturity."},

    {type:"teach", trg:"もくてき", src:"purpose / goal / objective", pos:"noun", gender:null,
     note:"Kanji: 目的. もくてきをたっせいする = to achieve a goal.\nもくてきち = destination.",
     example:"A: にほんにきたもくてきはなんですか？\nB: にほんごをべんきょうするためです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: What is your purpose for coming to Japan?\nB: To study Japanese.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"もくてき (目的) combines 目 (eye) and 的 (target). Your 目的 is what your eyes are aimed at. Immigration officers ask にゅうこくのもくてき (purpose of entry). In business, めいかくなもくてき (clear objectives) drive project planning. もくてきいしき (goal awareness) is a valued workplace trait."},

    {type:"teach", trg:"けっか", src:"result / outcome", pos:"noun", gender:null,
     note:"Kanji: 結果. けっかとして = as a result.\nしけんのけっか = exam results.",
     example:"A: しけんのけっかはどうでしたか？\nB: おかげさまでごうかくしました。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: How were your exam results?\nB: Thanks to you, I passed.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"けっか (結果) combines 結 (tie/conclude) and 果 (fruit). The result is the 'fruit' of your efforts. そのけっか (as a result) is a key connector in formal writing. Japanese report cards (つうしんぼ) show academic けっか along with behavioral assessments."},

    {type:"teach", trg:"げんいん", src:"cause / origin (of a problem)", pos:"noun", gender:null,
     note:"Kanji: 原因. じこのげんいん = cause of the accident.\nげんいんをしらべる = to investigate the cause.",
     example:"A: かじのげんいんはなんですか？\nB: まだちょうさちゅうです。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: What is the cause of the fire?\nB: It is still under investigation.\nA: How was it?\nB: It was very good.",
     funFact:"げんいん (原因) and けっか (結果) are a fundamental pair: cause and effect. In JLPT reading, identifying the げんいん of events is a key skill. げんいんふめい (cause unknown) is used in medical and accident reports. Scientific papers follow the げんいん to けっか logic chain."},

    {type:"teach", trg:"えいきょう", src:"influence / impact / effect", pos:"noun", gender:null,
     note:"Kanji: 影響. えいきょうをあたえる = to have an influence.\nえいきょうをうける = to be influenced.",
     example:"A: たいふうのえいきょうでひこうきがけっこうになりました。\nB: ざんねんですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Flights were cancelled due to the typhoon's impact.\nB: That is unfortunate.\nA: When was it?\nB: It was last summer.",
     funFact:"えいきょう (影響) combines 影 (shadow) and 響 (echo/resonate). An influence is like a shadow that resonates outward. In news, えいきょう is a daily word: けいざいへのえいきょう (impact on the economy), けんこうへのえいきょう (effect on health). JLPT N2 frequently tests えいきょう in reading passages."},

    {type:"mc", q:"もくてき means:", opts:["Purpose or goal","Result or outcome","Reason or cause","Influence or effect"], ans:"Purpose or goal",
     hint:"This word describes what you are aiming to achieve."},

    {type:"teach", trg:"かのうせい", src:"possibility / likelihood", pos:"noun", gender:null,
     note:"Kanji: 可能性. かのうせいがある = there is a possibility.\nかのうせいがたかい = highly likely.",
     example:"A: あしたあめがふるかのうせいはありますか？\nB: はい、ごじゅっパーセントくらいです。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Is there a possibility of rain tomorrow?\nB: Yes, about 50 percent.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"かのうせい (可能性) is a key word in academic and formal Japanese. 可能 (possible) + 性 (nature/tendency) = the nature of being possible. Scientists, doctors, and lawyers use this word constantly to express probability without certainty. むげんのかのうせい (infinite possibilities) is an inspirational phrase."},

    {type:"teach", trg:"じじつ", src:"fact / truth / reality", pos:"noun", gender:null,
     note:"Kanji: 事実. じじつにもとづく = based on facts.\nじじつかくにん = fact-checking.",
     example:"A: じじつをかくにんしてからはっぴょうしましょう。\nB: そうですね。まちがいがあってはいけません。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Let us verify the facts before making an announcement.\nB: Yes. There must be no mistakes.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"じじつ (事実) combines 事 (matter) and 実 (truth/fruit). In journalism, じじつかくにん (fact-checking) is fundamental. The phrase じじつじょう (in fact/in practice) often introduces reality that differs from theory. Japanese courts require 事実認定 (fact-finding) before judgment."},

    {type:"teach", trg:"いけん", src:"opinion / view", pos:"noun", gender:null,
     note:"Kanji: 意見. いけんをいう = to express an opinion.\nいけんがちがう = opinions differ.",
     example:"A: このもんだいについていけんをきかせてください。\nB: わたしは反対です。りゆうをせつめいします。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Please share your opinion on this issue.\nB: I am against it. Let me explain my reasons.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"Expressing いけん directly is less common in Japanese culture than in Western cultures. The phrase いけんはありませんか (are there any opinions?) at meetings often gets silence. Japanese communication favors reading the room (空気を読む, くうきをよむ) over direct opinion-stating. This is changing in younger generations."},

    {type:"teach", trg:"たいせつ", src:"important / precious / valuable", pos:"adj", gender:null,
     note:"Na-adjective. たいせつなこと = an important thing.\nKanji: 大切. だいじ = also important.",
     example:"A: けんこうはもっともたいせつです。\nB: そうですね。おかねよりたいせつです。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Health is the most important thing.\nB: Yes. More important than money.\nA: How long did it take?\nB: About two hours.",
     funFact:"たいせつ (大切) and だいじ (大事) both mean important but have nuance differences. たいせつ is more emotional (precious, cherished): たいせつなひと (a precious person). だいじ is more practical (important, necessary): だいじなしょるい (important documents). Both are N5/N4 words but used constantly at all levels."},

    {type:"fb", s:"おくれた{1}をおしえてください。\n(Please tell me the reason you were late.)", a:"りゆう", opts:["りゆう","けっか","もくてき","いけん"], sSrc:"Please tell me the reason you were late.",
     hint:"The word for the explanation or justification behind something."},

    {type:"teach", trg:"かんがえる", src:"to think / to consider", pos:"verb", gender:null,
     note:"Group 2 verb. よくかんがえてください = please think carefully.\nKanji: 考える.",
     example:"A: もうすこしかんがえさせてください。\nB: はい、じかんをかけてだいじょうぶですよ。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Please let me think about it a little more.\nB: Sure, take your time.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"かんがえる (考える) is the intellectual thinking verb. おもう (to think/feel) is more emotional. かんがえかた (way of thinking) is a common word in philosophy and education. The polite expression かんがえさせてください (let me think about it) is used when you need time before committing to something."},

    {type:"teach", trg:"きめる", src:"to decide / to determine", pos:"verb", gender:null,
     note:"Group 2 verb. きめました = I have decided.\nKanji: 決める. きまる = to be decided (intransitive).",
     example:"A: もうきめましたか？\nB: はい、こちらにきめました。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Have you decided yet?\nB: Yes, I have decided on this one.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"きめる/きまる is another transitive/intransitive pair. ルールがきまった (the rule was decided). ルールをきめた (someone decided the rule). In Japanese, きめぜりふ (signature phrase/catchphrase) is a pop culture term. Every anime hero has a きめぜりふ that they say at climactic moments."},

    {type:"mc", q:"げんいん and けっか together describe:", opts:["Cause and effect","Problem and solution","Question and answer","Beginning and end"], ans:"Cause and effect",
     hint:"These two words form the fundamental logical pair in analysis."},

    {type:"match", pairs:[
      {trg:"りゆう", src:"reason"},
      {trg:"もくてき", src:"purpose / goal"},
      {trg:"けっか", src:"result"},
      {trg:"えいきょう", src:"influence / effect"},
      {trg:"かのうせい", src:"possibility"}
    ]},

    {type:"fb", s:"もうすこし{1}させてください。\n(Please let me think about it a little more.)", a:"かんがえ", opts:["かんがえ","きめ","いい","おもい"], sSrc:"Please let me think about it a little more.",
     hint:"The causative form stem of the verb meaning to think or consider."},

    {type:"mc", q:"じじつ means:", opts:["Fact or truth","Opinion","Guess","Feeling"], ans:"Fact or truth",
     hint:"This word describes verified reality, not speculation."}
  ]
};
export default BATCH6_L1;
