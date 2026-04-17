// Batch 7 – Unit 14 (B1.1 Opinions): Debate & Discussion Vocabulary
const BATCH7_L1 = {
  id:"jav2_u14l_b7_1", title:"ぎろんのことば", icon:"💬", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぎろんのことば",
     desc:"Learn vocabulary for expressing opinions, agreeing, disagreeing, and discussing topics. These words enable you to participate in Japanese conversations beyond simple exchanges.",
     goals:["Express agreement and disagreement politely","Use opinion-framing vocabulary","Connect ideas with discussion phrases"]},

    {type:"teach", trg:"さんせい", src:"agreement / in favor", pos:"noun", gender:null,
     note:"さんせいする = to agree. さんせいです = I agree.\nOpposite: はんたい (opposition).",
     example:"A: このけいかくにさんせいですか？\nB: はい、さんせいです。いいアイデアです。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Do you agree with this plan?\nB: Yes, I agree. It is a good idea.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"さんせい (賛成) uses 賛 (praise/approve) and 成 (become/achieve). In Japanese meetings, agreement is often reached through nemawashi (根回し, prior consensus building) before the formal discussion. The actual meeting often just confirms pre-arranged さんせい."},

    {type:"teach", trg:"はんたい", src:"opposition / against", pos:"noun", gender:null,
     note:"はんたいする = to oppose. はんたいです = I am against it.\nはんたいいけん = opposing opinion.",
     example:"A: このていあんにはんたいのひとはいますか？\nB: はい、わたしははんたいです。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Is anyone against this proposal?\nB: Yes, I am against it.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"Saying はんたい directly in a meeting is uncommon in Japan. People soften opposition with phrases like ちょっとむずかしいかもしれません (it might be a bit difficult) or べつのほうほうもかんがえられませんか (could we consider another approach?). Direct はんたい is reserved for strong convictions."},

    {type:"teach", trg:"たしかに", src:"certainly / indeed", pos:"adv", gender:null,
     note:"Used to acknowledge the other person's point.\nたしかに、そうですね = indeed, that is so.",
     example:"A: にほんごはむずかしいですよ。\nB: たしかに。でもおもしろいです。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Japanese is difficult.\nB: Indeed. But it is interesting.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"たしかに is a conversation lubricant. Starting your response with たしかに shows you heard and respect the other person's point before adding your own view. It is the Japanese version of 'you have a point.' Using it frequently makes you sound thoughtful and considerate."},

    {type:"teach", trg:"たとえば", src:"for example", pos:"adv", gender:null,
     note:"Used to introduce examples.\nたとえばどんなこと？ = like what?",
     example:"A: にほんにはおもしろいぶんかがたくさんあります。\nB: たとえば？\nA: たとえば、まつりやおんせんです。\nB: おんせんにいってみたいです。",
     exampleSrc:"A: Japan has many interesting cultural things.\nB: For example?\nA: For example, festivals and hot springs.\nB: I want to try going to a hot spring.",
     funFact:"たとえば (例えば) is crucial in Japanese discussions. Japanese communication often starts general and moves to specific. Asking たとえば？ is a natural way to request specifics. The word comes from たとえ (比え, comparison/allegory), reflecting the use of examples to illustrate points."},

    {type:"teach", trg:"ようするに", src:"in short / in other words", pos:"adv", gender:null,
     note:"Used to summarize a point.\nようするにどういうことですか = so what does that mean?",
     example:"A: いろいろなもんだいがありますが...\nB: ようするに、じかんがたりないということですか？\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: There are various problems, but...\nB: In short, you mean there is not enough time?\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"ようするに (要するに) literally means 'if you get to the essential point.' It is useful for cutting through vague Japanese indirectness and getting to the core. However, using it too often can seem impatient. In business, it signals that you want a concise summary."},

    {type:"teach", trg:"つまり", src:"that is to say / in other words", pos:"adv", gender:null,
     note:"Similar to ようするに but softer.\nつまり、こういうことです = that is to say, it is like this.",
     example:"A: あしたはもくようびです。つまり、あさってはきんようびです。\nB: そうですね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Tomorrow is Thursday. That is to say, the day after is Friday.\nB: That's right.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"つまり is one of the most useful connector words. It rephrases what was just said more clearly. In academic writing, つまり introduces a cleaner restatement of a complex idea. The word comes from 詰まり (packed/concentrated), implying you are compressing meaning into fewer words."},

    {type:"teach", trg:"やはり", src:"as expected / after all", pos:"adv", gender:null,
     note:"Casual: やっぱり. Confirms what you already suspected.\nやはりそうでしたか = so it was as I thought.",
     example:"A: やっぱりにほんごはむずかしいですね。\nB: やはりそうおもいますか。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Japanese is difficult after all.\nB: So you think so too.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"やはり/やっぱり is one of the most frequently used Japanese words. It confirms expectations, expresses 'I knew it,' or means 'after all.' やっぱりやめます (I will not do it after all) is perfectly acceptable for changing your mind. The word reflects a Japanese comfort with validated expectations."},

    {type:"teach", trg:"むしろ", src:"rather / instead", pos:"adv", gender:null,
     note:"Used to present a preferred alternative or correction.\nむしろぎゃくです = rather, it is the opposite.",
     example:"A: にほんごのかんじはむずかしいですか？\nB: むしろ、おもしろいとおもいます。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Are Japanese kanji difficult?\nB: Rather, I think they are interesting.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"むしろ (寧ろ) offers a gentle correction or alternative view. In debate, it reframes without directly contradicting. Instead of saying 'you are wrong,' you say むしろ to offer a different perspective. This indirect disagreement is core to Japanese discussion style."},

    {type:"teach", trg:"ばあい", src:"case / situation", pos:"noun", gender:null,
     note:"このばあい = in this case.\nばあいによって = depending on the situation.",
     example:"A: あめのばあいはどうしますか？\nB: しない(indoors)でやりましょう。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: What do we do in case of rain?\nB: Let us do it indoors.\nA: How was it?\nB: It was very good.",
     funFact:"ばあい (場合) is essential in Japanese planning. Japanese culture values preparation for every ばあい (case/contingency). Meeting agendas often list ばあい scenarios. Weather contingencies are always planned. The expression 最悪の場合 (さいあくのばあい, worst case scenario) is used without alarm."},

    {type:"teach", trg:"もんだい", src:"problem / issue / question", pos:"noun", gender:null,
     note:"もんだいがある = there is a problem.\nしけんもんだい = exam question.",
     example:"A: なにかもんだいがありますか？\nB: ひとつだけもんだいがあります。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Are there any problems?\nB: There is just one problem.\nA: When was it?\nB: It was last summer.",
     funFact:"もんだい (問題) has three meanings: problem, issue, and question (on a test). The kanji combine 問 (ask) and 題 (topic). In conversation, もんだいない (no problem) is common reassurance. The phrase もんだいはありません echoes English 'no worries' and is used just as casually."},

    {type:"teach", trg:"かいけつ", src:"solution / resolution", pos:"noun", gender:null,
     note:"かいけつする = to solve/resolve.\nもんだいかいけつ = problem solving.",
     example:"A: このもんだいのかいけつほうほうはなんですか？\nB: みんなではなしあいましょう。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: What is the solution to this problem?\nB: Let us discuss it together.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"かいけつ (解決) combines 解 (untie/solve) and 決 (decide). Problem solving in Japan often involves group discussion (話し合い, はなしあい) rather than individual decisions. The process values consensus and shared ownership of the かいけつ, even if it takes longer."},

    {type:"teach", trg:"けっか", src:"result / outcome", pos:"noun", gender:null,
     note:"けっかてきに = as a result. けっかはっぴょう = announcing results.\nしけんのけっか = exam results.",
     example:"A: けっかはどうでしたか？\nB: よいけっかがでました。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: How were the results?\nB: Good results came out.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"けっか (結果) combines 結 (tie/conclude) and 果 (fruit/result). Results are the 'fruit' of efforts. The expression 結果オーライ (result all right) means 'the outcome was fine even if the process was messy.' Japanese business culture values both process (プロセス) and けっか."},

    {type:"teach", trg:"げんいん", src:"cause / reason", pos:"noun", gender:null,
     note:"げんいんをしらべる = to investigate the cause.\nげんいんふめい = cause unknown.",
     example:"A: じこのげんいんはなんでしたか？\nB: スピードのだしすぎでした。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: What was the cause of the accident?\nB: It was excessive speed.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"げんいん (原因) pairs naturally with けっか (result). The pattern げんいんときっかけ (cause and trigger) is common in analysis. Japanese news always reports the げんいん of incidents. The word combines 原 (origin/field) and 因 (cause/factor), pointing back to the root source."},

    // Quiz steps
    {type:"mc", q:"In Japanese meetings, direct はんたい is:",
     opts:["Uncommon; people soften disagreement","Very common and expected","Only used by senior staff","Forbidden"],
     ans:"Uncommon; people soften disagreement",
     hint:"Japanese communication prefers indirect ways to express opposition rather than stating it bluntly."},

    {type:"match", pairs:[
      {trg:"さんせい", src:"agreement"},
      {trg:"はんたい", src:"opposition"},
      {trg:"もんだい", src:"problem"},
      {trg:"かいけつ", src:"solution"},
      {trg:"けっか", src:"result"}
    ]},

    {type:"fb", s:"{1}、にほんごはむずかしいですね。",
     a:["やはり"],
     opts:["やはり","たしかに","つまり","むしろ"],
     hint:"This adverb confirms what you already suspected or expected. Casual form: やっぱり.",
     sSrc:"{1}, Japanese is difficult."},

    {type:"mc", q:"たとえば is used to:",
     opts:["Introduce a specific example","Express disagreement","Summarize a point","Change the topic"],
     ans:"Introduce a specific example",
     hint:"This word means 'for e...' and helps move from general statements to concrete illustrations."},

    {type:"fb", s:"あめの{1}はしないでやりましょう。",
     a:["ばあい"],
     opts:["ばあい","けっか","げんいん","もんだい"],
     hint:"In case of rain, we should do it indoors. This word means 'case' or 'situation.'",
     sSrc:"In {1} of rain, let us do it indoors."},

    {type:"mc", q:"ようするに is used when you want to:",
     opts:["Get to the essential point quickly","Change the subject","Express surprise","Ask permission"],
     ans:"Get to the essential point quickly",
     hint:"This phrase means 'in short' and signals you want a concise summary."},

    {type:"match", pairs:[
      {trg:"たしかに", src:"certainly"},
      {trg:"つまり", src:"that is to say"},
      {trg:"むしろ", src:"rather"},
      {trg:"ようするに", src:"in short"},
      {trg:"げんいん", src:"cause"}
    ]},

    {type:"fb", s:"このもんだいの{1}ほうほうをかんがえましょう。",
     a:["かいけつ"],
     opts:["かいけつ","げんいん","けっか","さんせい"],
     hint:"Let us think of a way to solve this problem. This noun means 'solution' or 'resolution.'",
     sSrc:"Let us think of a {1} method for this problem."}
  ]
};
export default BATCH7_L1;
