// Batch 7 – Unit 14 (B1.1 Opinions): Debate & Discussion Vocabulary
const BATCH7_L1 = {
  id:"jav2_u14l_b7_1", title:"議論(ぎろん)の言葉(ことば)", icon:"💬", xp:15, board:true,
  steps:[
    {type:"intro", title:"議論(ぎろん)の言葉(ことば)",
     desc:"Learn vocabulary for expressing opinions, agreeing, disagreeing, and discussing topics. These words enable you to participate in Japanese conversations beyond simple exchanges.",
     goals:["Express agreement and disagreement politely","Use opinion-framing vocabulary","Connect ideas with discussion phrases"]},

    {type:"teach", trg:"賛成(さんせい)", src:"agreement / in favor", pos:"noun", gender:null,
     note:"賛成(さんせい)する = to agree. 賛成(さんせい)です = I agree.\nOpposite: 反対(はんたい) (opposition).",
     example:"A: この計画(けいかく)に賛成(さんせい)ですか？\nB: はい、賛成(さんせい)です。いいアイデアです。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Do you agree with this plan?\nB: Yes, I agree. It is a good idea.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"賛成(さんせい) uses 賛 (praise/approve) and 成 (become/achieve). In Japanese meetings, agreement is often reached through nemawashi (根回(ねまわ)し, prior consensus building) before the formal discussion. The actual meeting often just confirms pre-arranged 賛成(さんせい)."},

    {type:"teach", trg:"反対(はんたい)", src:"opposition / against", pos:"noun", gender:null,
     note:"反対(はんたい)する = to oppose. 反対(はんたい)です = I am against it.\n反対意見(はんたいいけん) = opposing opinion.",
     example:"A: この提案(ていあん)に反対(はんたい)の人(ひと)はいますか？\nB: はい、私(わたし)は反対(はんたい)です。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Is anyone against this proposal?\nB: Yes, I am against it.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"Saying 反対(はんたい) directly in a meeting is uncommon in Japan. People soften opposition with phrases like ちょっと難(むずか)しいかもしれません (it might be a bit difficult) or 別(べつ)の方法(ほうほう)も考(かんが)えられませんか (could we consider another approach?). Direct 反対(はんたい) is reserved for strong convictions."},

    {type:"teach", trg:"確(たし)かに", src:"certainly / indeed", pos:"adv", gender:null,
     note:"Used to acknowledge the other person's point.\n確(たし)かに、そうですね = indeed, that is so.",
     example:"A: 日本語(にほんご)は難(むずか)しいですよ。\nB: 確(たし)かに。でも面白(おもしろ)いです。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Japanese is difficult.\nB: Indeed. But it is interesting.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"確(たし)かに is a conversation lubricant. Starting your response with 確(たし)かに shows you heard and respect the other person's point before adding your own view. It is the Japanese version of 'you have a point.' Using it frequently makes you sound thoughtful and considerate."},

    {type:"teach", trg:"例(たと)えば", src:"for example", pos:"adv", gender:null,
     note:"Used to introduce examples.\n例(たと)えばどんなこと？ = like what?",
     example:"A: 日本(にほん)には面白(おもしろ)い文化(ぶんか)がたくさんあります。\nB: 例(たと)えば？\nA: 例(たと)えば、祭(まつ)りや温泉(おんせん)です。\nB: 温泉(おんせん)に行(い)ってみたいです。",
     exampleSrc:"A: Japan has many interesting cultural things.\nB: For example?\nA: For example, festivals and hot springs.\nB: I want to try going to a hot spring.",
     funFact:"例(たと)えば is crucial in Japanese discussions. Japanese communication often starts general and moves to specific. Asking 例(たと)えば？ is a natural way to request specifics. The word comes from たとえ (比(たと)え, comparison/allegory), reflecting the use of examples to illustrate points."},

    {type:"teach", trg:"要(よう)するに", src:"in short / in other words", pos:"adv", gender:null,
     note:"Used to summarize a point.\n要(よう)するにどういうことですか = so what does that mean?",
     example:"A: いろいろな問題(もんだい)がありますが...\nB: 要(よう)するに、時間(じかん)が足(た)りないということですか？\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: There are various problems, but...\nB: In short, you mean there is not enough time?\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"要(よう)するに literally means 'if you get to the essential point.' It is useful for cutting through vague Japanese indirectness and getting to the core. However, using it too often can seem impatient. In business, it signals that you want a concise summary."},

    {type:"teach", trg:"つまり", src:"that is to say / in other words", pos:"adv", gender:null,
     note:"Similar to 要(よう)するに but softer.\nつまり、こういうことです = that is to say, it is like this.",
     example:"A: 明日(あした)は木曜日(もくようび)です。つまり、明後日(あさって)は金曜日(きんようび)です。\nB: そうですね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Tomorrow is Thursday. That is to say, the day after is Friday.\nB: That's right.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"つまり is one of the most useful connector words. It rephrases what was just said more clearly. In academic writing, つまり introduces a cleaner restatement of a complex idea. The word comes from 詰(つ)まり (packed/concentrated), implying you are compressing meaning into fewer words."},

    {type:"teach", trg:"やはり", src:"as expected / after all", pos:"adv", gender:null,
     note:"Casual: やっぱり. Confirms what you already suspected.\nやはりそうでしたか = so it was as I thought.",
     example:"A: やっぱり日本語(にほんご)は難(むずか)しいですね。\nB: やはりそう思(おも)いますか。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Japanese is difficult after all.\nB: So you think so too.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"やはり/やっぱり is one of the most frequently used Japanese words. It confirms expectations, expresses 'I knew it,' or means 'after all.' やっぱりやめます (I will not do it after all) is perfectly acceptable for changing your mind. The word reflects a Japanese comfort with validated expectations."},

    {type:"teach", trg:"むしろ", src:"rather / instead", pos:"adv", gender:null,
     note:"Used to present a preferred alternative or correction.\nむしろ逆(ぎゃく)です = rather, it is the opposite.",
     example:"A: 日本語(にほんご)の漢字(かんじ)は難(むずか)しいですか？\nB: むしろ、面白(おもしろ)いと思(おも)います。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Are Japanese kanji difficult?\nB: Rather, I think they are interesting.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"むしろ (寧ろ) offers a gentle correction or alternative view. In debate, it reframes without directly contradicting. Instead of saying 'you are wrong,' you say むしろ to offer a different perspective. This indirect disagreement is core to Japanese discussion style."},

    {type:"teach", trg:"場合(ばあい)", src:"case / situation", pos:"noun", gender:null,
     note:"この場合(ばあい) = in this case.\n場合(ばあい)によって = depending on the situation.",
     example:"A: 雨(あめ)の場合(ばあい)はどうしますか？\nB: 室内(しつない)でやりましょう。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: What do we do in case of rain?\nB: Let us do it indoors.\nA: How was it?\nB: It was very good.",
     funFact:"場合(ばあい) is essential in Japanese planning. Japanese culture values preparation for every 場合(ばあい) (case/contingency). Meeting agendas often list 場合(ばあい) scenarios. Weather contingencies are always planned. The expression 最悪(さいあく)の場合(ばあい) (worst case scenario) is used without alarm."},

    {type:"teach", trg:"問題(もんだい)", src:"problem / issue / question", pos:"noun", gender:null,
     note:"問題(もんだい)がある = there is a problem.\n試験問題(しけんもんだい) = exam question.",
     example:"A: 何(なに)か問題(もんだい)がありますか？\nB: 一(ひと)つだけ問題(もんだい)があります。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Are there any problems?\nB: There is just one problem.\nA: When was it?\nB: It was last summer.",
     funFact:"問題(もんだい) has three meanings: problem, issue, and question (on a test). The kanji combine 問 (ask) and 題 (topic). In conversation, 問題(もんだい)ない (no problem) is common reassurance. The phrase 問題(もんだい)はありません echoes English 'no worries' and is used just as casually."},

    {type:"teach", trg:"解決(かいけつ)", src:"solution / resolution", pos:"noun", gender:null,
     note:"解決(かいけつ)する = to solve/resolve.\n問題解決(もんだいかいけつ) = problem solving.",
     example:"A: この問題(もんだい)の解決(かいけつ)方法(ほうほう)は何(なに)ですか？\nB: みんなで話(はな)し合(あ)いましょう。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: What is the solution to this problem?\nB: Let us discuss it together.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"解決(かいけつ) combines 解 (untie/solve) and 決 (decide). Problem solving in Japan often involves group discussion (話(はな)し合(あ)い) rather than individual decisions. The process values consensus and shared ownership of the 解決(かいけつ), even if it takes longer."},

    {type:"teach", trg:"結果(けっか)", src:"result / outcome", pos:"noun", gender:null,
     note:"結果的(けっかてき)に = as a result. 結果発表(けっかはっぴょう) = announcing results.\n試験(しけん)の結果(けっか) = exam results.",
     example:"A: 結果(けっか)はどうでしたか？\nB: 良(よ)い結果(けっか)が出(で)ました。\nA: そうですか。良(よ)かったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: How were the results?\nB: Good results came out.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"結果(けっか) combines 結 (tie/conclude) and 果 (fruit/result). Results are the 'fruit' of efforts. The expression 結果(けっか)オーライ means 'the outcome was fine even if the process was messy.' Japanese business culture values both process (プロセス) and 結果(けっか)."},

    {type:"teach", trg:"原因(げんいん)", src:"cause / reason", pos:"noun", gender:null,
     note:"原因(げんいん)を調(しら)べる = to investigate the cause.\n原因(げんいん)不明(ふめい) = cause unknown.",
     example:"A: 事故(じこ)の原因(げんいん)は何(なに)でしたか？\nB: スピードの出(だ)しすぎでした。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: What was the cause of the accident?\nB: It was excessive speed.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"原因(げんいん) pairs naturally with 結果(けっか) (result). The pattern 原因(げんいん)ときっかけ (cause and trigger) is common in analysis. Japanese news always reports the 原因(げんいん) of incidents. The word combines 原 (origin/field) and 因 (cause/factor), pointing back to the root source."},

    // Quiz steps
    {type:"mc", q:"In Japanese meetings, direct 反対(はんたい) is:",
     opts:["Uncommon; people soften disagreement","Very common and expected","Only used by senior staff","Forbidden"],
     ans:"Uncommon; people soften disagreement",
     hint:"Japanese communication prefers indirect ways to express opposition rather than stating it bluntly."},

    {type:"match", pairs:[
      {trg:"賛成(さんせい)", src:"agreement"},
      {trg:"反対(はんたい)", src:"opposition"},
      {trg:"問題(もんだい)", src:"problem"},
      {trg:"解決(かいけつ)", src:"solution"},
      {trg:"結果(けっか)", src:"result"}
    ]},

    {type:"fb", s:"{1}、日本語(にほんご)は難(むずか)しいですね。",
     a:["やはり"],
     opts:["やはり","確(たし)かに","つまり","むしろ"],
     hint:"This adverb confirms what you already suspected or expected. Casual form: やっぱり.",
     sSrc:"{1}, Japanese is difficult."},

    {type:"mc", q:"例(たと)えば is used to:",
     opts:["Introduce a specific example","Express disagreement","Summarize a point","Change the topic"],
     ans:"Introduce a specific example",
     hint:"This word means 'for e...' and helps move from general statements to concrete illustrations."},

    {type:"fb", s:"雨(あめ)の{1}は室内(しつない)でやりましょう。",
     a:["場合(ばあい)"],
     opts:["場合(ばあい)","結果(けっか)","原因(げんいん)","問題(もんだい)"],
     hint:"In case of rain, we should do it indoors. This word means 'case' or 'situation.'",
     sSrc:"In {1} of rain, let us do it indoors."},

    {type:"mc", q:"要(よう)するに is used when you want to:",
     opts:["Get to the essential point quickly","Change the subject","Express surprise","Ask permission"],
     ans:"Get to the essential point quickly",
     hint:"This phrase means 'in short' and signals you want a concise summary."},

    {type:"match", pairs:[
      {trg:"確(たし)かに", src:"certainly"},
      {trg:"つまり", src:"that is to say"},
      {trg:"むしろ", src:"rather"},
      {trg:"要(よう)するに", src:"in short"},
      {trg:"原因(げんいん)", src:"cause"}
    ]},

    {type:"fb", s:"この問題(もんだい)の{1}方法(ほうほう)を考(かんが)えましょう。",
     a:["解決(かいけつ)"],
     opts:["解決(かいけつ)","原因(げんいん)","結果(けっか)","賛成(さんせい)"],
     hint:"Let us think of a way to solve this problem. This noun means 'solution' or 'resolution.'",
     sSrc:"Let us think of a {1} method for this problem."}
  ]
};
export default BATCH7_L1;
