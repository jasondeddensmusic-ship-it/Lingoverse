// Batch 9 – Unit 14 (B1.1 Opinions): Debate & Discussion
const BATCH9_L1 = {
  id:"jav2_u14l_b9_1", title:"議論(ぎろん)", icon:"💬", xp:15, board:true,
  steps:[
    {type:"intro", title:"議論(ぎろん)",
     desc:"Learn vocabulary and expressions for expressing opinions, agreeing, disagreeing, and participating in discussions.",
     goals:["Express agreement and disagreement politely","Give reasons for opinions","Participate in discussions naturally"]},

    {type:"teach", trg:"賛成(さんせい)", src:"agreement / in favor", pos:"noun", gender:null,
     note:"賛成(さんせい)する = to agree. 賛成(さんせい)です = I agree.\nOpposite: 反対(はんたい).",
     example:"A: この計画(けいかく)に賛成(さんせい)ですか？\nB: はい、賛成(さんせい)です。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Do you agree with this plan?\nB: Yes, I agree.\nA: How was it?\nB: It was very good.",
     funFact:"賛成(さんせい) (賛成) is direct and clear. In formal meetings, Japanese people often avoid saying 反対(はんたい) directly. Instead, they use softer phrases like ちょっとむずかしいかもしれません (that might be difficult). Reading these indirect signals is essential in Japanese business."},

    {type:"teach", trg:"反対(はんたい)", src:"opposition / against", pos:"noun", gender:null,
     note:"反対(はんたい)する = to oppose. 反対(はんたい)です = I am against.\n反対(はんたい)意見(いけん) = opposing opinion.",
     example:"A: 反対(はんたい)の人(ひと)はいますか？\nB: 一(ひと)つ気(き)になる点(てん)があります。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Is anyone opposed?\nB: I have one concern.\nA: When was it?\nB: It was last summer.",
     funFact:"反対(はんたい) (反対) is often softened in Japanese communication. Rather than 反対(はんたい)です, people prefer ちょっと考(かんが)えさせてください (let me think about it) or 別(べつ)の方法(ほうほう)もあるかもしれません (there might be another way). Direct 反対(はんたい) is reserved for strong feelings or formal votes."},

    {type:"teach", trg:"確(たし)かに", src:"certainly / indeed", pos:"adv", gender:null,
     note:"Used to acknowledge a valid point.\n確(たし)かに、そうですね = Indeed, that is so.",
     example:"A: 値段(ねだん)が高(たか)いですね。\nB: 確(たし)かに。でも品質(ひんしつ)はいいです。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: The price is high.\nB: Indeed. But the quality is good.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"確(たし)かに (確かに) is a powerful discussion tool. It validates the other person's point before introducing a counterargument. The pattern 確(たし)かに...でも (indeed...but) is the most common way to disagree respectfully in Japanese. It shows you listened before disagreeing."},

    {type:"teach", trg:"理由(りゆう)", src:"reason / grounds", pos:"noun", gender:null,
     note:"理由(りゆう)を説明(せつめい)する = to explain the reason.\nなぜ？ = Why?",
     example:"A: 反対(はんたい)の理由(りゆう)は何(なに)ですか？\nB: 予算(よさん)が足(た)りないからです。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: What is the reason for opposing?\nB: Because the budget is insufficient.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"理由(りゆう) (理由) is essential in Japanese formal communication. Japanese people expect logical 理由(りゆう) behind decisions. The phrase 理由(りゆう)を聞(き)かせてください (please tell me the reason) is standard. In Japanese essay writing, 意見(いけん) (opinion) must always be supported by 理由(りゆう)."},

    {type:"teach", trg:"つまり", src:"in other words / that is to say", pos:"adv", gender:null,
     note:"Used to summarize or rephrase.\nつまり、こういうことです = In other words, it is like this.",
     example:"A: つまり、時間(じかん)が足(た)りないということですか？\nB: はい、そういうことです。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: In other words, you are saying there is not enough time?\nB: Yes, that is it.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"つまり is a connector that signals you are about to restate something more clearly. It is extremely useful in discussions and presentations. The phrase つまり何(なに)が言(い)いたいの？ (so what are you trying to say?) is a casual but common way to ask someone to get to the point."},

    {type:"teach", trg:"結局(けっきょく)", src:"in the end / after all / ultimately", pos:"adv", gender:null,
     note:"結局(けっきょく)どうなりましたか = How did it turn out?\nSummarizes the final outcome.",
     example:"A: 結局(けっきょく)どうなりましたか？\nB: 結局(けっきょく)、休暇(きゅうか)をとることにしました。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: How did it turn out?\nB: In the end, I decided to take a vacation.\nA: How long did it take?\nB: About two hours.",
     funFact:"結局(けっきょく) (結局) means 'final conclusion' and often carries a nuance that the outcome was different from expectations. 結局(けっきょく)だめだった (it did not work out in the end) and 結局(けっきょく)よかった (it turned out well) are both common. It implies a journey of deliberation before the final result."},

    {type:"teach", trg:"場合(ばあい)", src:"case / situation / instance", pos:"noun", gender:null,
     note:"この場合(ばあい) = in this case.\nもしもの場合(ばあい) = in case of emergency.",
     example:"A: 雨(あめ)の場合(ばあい)はどうしますか？\nB: 室内(しつない)でやりましょう。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: What shall we do in case of rain?\nB: Let's do it indoors.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"場合(ばあい) (場合) is one of the most useful conditional words. 雨(あめ)の場合(ばあい) (in case of rain) appears on every outdoor event notice. The pattern Nの場合(ばあい) or Vた場合(ばあい) creates conditional scenarios. 場合(ばあい)によって means 'depending on the situation,' adding flexibility to decisions."},

    {type:"teach", trg:"提案(ていあん)", src:"proposal / suggestion", pos:"noun", gender:null,
     note:"提案(ていあん)する = to propose/suggest.\n提案(ていあん)書(しょ) = proposal document.",
     example:"A: 一(ひと)つ提案(ていあん)があります。\nB: どうぞ、聞(き)かせてください。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I have a suggestion.\nB: Please, let me hear it.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"提案(ていあん) (提案) combines 提 (present) and 案 (plan). In Japanese meetings, 提案(ていあん) are often circulated as documents before discussion, so everyone can prepare responses. This reflects the ねまわし (groundwork) culture where consensus is built before formal meetings."},

    {type:"mc", q:"What is the common Japanese pattern for polite disagreement?", opts:["たしかに...でも (indeed...but)","いいえ、はんたいです (no, I disagree)","それはちがいます (that is wrong)","ぜったいだめです (absolutely not)"], ans:"たしかに...でも (indeed...but)",
     hint:"This pattern validates the other person's point before introducing a counterargument."},

    {type:"fb", s:"{1}どうなりましたか？\n(How did it turn out in the end?)", a:"結局(けっきょく)", opts:["結局(けっきょく)","確(たし)かに","つまり","たとえば"], sSrc:"How did it turn out in the end?",
     hint:"This adverb summarizes the final outcome, often implying the result differed from expectations."},

    {type:"match", pairs:[
      {trg:"賛成(さんせい)", src:"agreement"},
      {trg:"反対(はんたい)", src:"opposition"},
      {trg:"理由(りゆう)", src:"reason"},
      {trg:"提案(ていあん)", src:"proposal"}
    ]},

    {type:"mc", q:"What is ねまわし in Japanese business culture?", opts:["Building consensus before formal meetings","Cleaning the office","Writing proposals","Arriving early to meetings"], ans:"Building consensus before formal meetings",
     hint:"This practice involves circulating ideas and gathering support informally b... the official discussion."}
  ]
};
export default BATCH9_L1;
