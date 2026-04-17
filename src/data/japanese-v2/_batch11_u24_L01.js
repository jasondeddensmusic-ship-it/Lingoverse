// Batch 11 – Unit 24 (B1.3 Advanced Connectors): Formal Conjunctions & Text Cohesion
const BATCH11_L1 = {
  id:"jav2_u24l_b11_1", title:"文章(ぶんしょう)のつなぎ", icon:"📄", xp:15, board:true,
  steps:[
    {type:"intro", title:"文章(ぶんしょう)のつなぎ",
     desc:"Learn formal conjunctions and text cohesion markers used in writing, presentations, and formal speech. These elevate your Japanese to professional and academic levels.",
     goals:["Use formal written connectors: さらに, また, なお","Structure arguments with しかしながら, それにもかかわらず","Create cohesive multi-paragraph text"]},

    {type:"teach", trg:"さらに", src:"furthermore / in addition", pos:"conj", gender:null,
     note:"Adds information, escalating the argument.\nMore formal than それに.",
     example:"A: この製品(せいひん)は便利(べんり)です。さらに、値段(ねだん)も安(やす)いです。\nB: それはいいですね。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: This product is convenient. Furthermore, the price is also cheap.\nB: That's great.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"さらに (更に) escalates: each new point is bigger than the last. それに merely adds. さらに carries rhetorical power in presentations: さらに重要(じゅうよう)な点(てん)は (an even more important point is...). In formal writing, さらに signals that the argument is building toward a conclusion."},

    {type:"teach", trg:"また", src:"also / in addition / moreover", pos:"conj", gender:null,
     note:"Multi-purpose connector for adding related points.\nまた、... = Also, ...",
     example:"A: 京都(きょうと)は寺(てら)が有名(ゆうめい)です。また、舞妓(まいこ)の文化(ぶんか)もあります。\nB: いろいろな魅力(みりょく)がありますね。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Kyoto is famous for temples. Also, it has maiko culture.\nB: It has various attractions.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"また is the workhorse formal connector: neutral, clean, versatile. In academic writing, each paragraph can start with また to add parallel points. Unlike さらに (which escalates), また adds points of equal weight. Business emails use また to introduce additional agenda items."},

    {type:"teach", trg:"なお", src:"note that / additionally (formal)", pos:"conj", gender:null,
     note:"Adds supplementary information or caveats.\nCommon in official notices and documentation.",
     example:"A: 締(し)め切(き)りは月(がつ)二十五(にじゅうご)日(にち)です。なお、遅刻(ちこく)は認(みと)めません。\nB: わかりました。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: The deadline is the 25th. Note that lateness will not be accepted.\nB: Understood.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"なお is distinctly formal and documentary. It introduces supplementary notes, exceptions, or warnings: なお、駐車場(ちゅうしゃじょう)はありません (Note: there is no parking). Government documents, contracts, and official notices use なお extensively. It signals 'here is something extra you need to know.'"},

    {type:"teach", trg:"しかしながら", src:"however / nevertheless (very formal)", pos:"conj", gender:null,
     note:"Most formal version of 'however.'\nUsed in speeches, papers, and official statements.",
     example:"A: 経済(けいざい)は成長(せいちょう)しています。しかしながら、格差(かくさ)は広(ひろ)がっています。\nB: 複雑(ふくざつ)な問題(もんだい)ですね。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: The economy is growing. However, inequality is widening.\nB: It is a complex issue.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"しかしながら is the heavyweight 'however' of Japanese. The hierarchy: でも (casual) < けれど (neutral) < しかし (formal) < しかしながら (very formal). Politicians and academics use しかしながら for dramatic contrast. In speeches, it signals a pivotal moment: 'here comes the important counterpoint.'"},

    {type:"teach", trg:"すなわち", src:"namely / that is", pos:"conj", gender:null,
     note:"Provides a precise definition or restatement.\nMore precise than つまり.",
     example:"A: これはSDGs、すなわち持続可能(じぞくかのう)な開発目標(かいはつもくひょう)のことです。\nB: なるほど。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: This is SDGs, namely Sustainable Development Goals.\nB: I see.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"すなわち (即ち) is the precision tool of academic Japanese: it equates two things exactly. つまり restates for clarity (rephrasing). すなわち restates for precision (exact equivalence). In legal documents, すなわち defines terms: ここでいう「当事者(とうじしゃ)」とは、すなわち... (the 'party' referred to here means, namely...)."},

    {type:"teach", trg:"したがって", src:"therefore / consequently", pos:"conj", gender:null,
     note:"Draws a logical conclusion from premises.\nFormal version of だから.",
     example:"A: 実験(じっけん)の結果(けっか)は予測(よそく)どおりでした。したがって、仮説(かせつ)は正(ただ)しいといえます。\nB: 素晴(すば)らしい発見(はっけん)ですね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: The experimental results matched predictions. Therefore, we can say the hypothesis is correct.\nB: That's a wonderful discovery.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"したがって (従って) follows logical reasoning: premise, then conclusion. It is the standard 'therefore' in scientific papers and business analyses. したがう means 'to follow,' so したがって literally means 'following from this.' This logical precision is essential for JLPT N2 reading passages."},

    {type:"teach", trg:"もっとも", src:"although / that said", pos:"conj", gender:null,
     note:"Adds a reservation or exception to the previous statement.\nSoftens absolute claims.",
     example:"A: 日本語(にほんご)は難(むずか)しいです。もっとも、毎日(まいにち)勉強(べんきょう)すれば誰(だれ)でもできるようになります。\nB: そうですか。頑張(がんば)ります。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Japanese is difficult. That said, if you study every day anyone can learn it.\nB: Really? I'll do my best.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"もっとも (尤も) adds a nuanced qualification. Unlike しかし (direct contradiction), もっとも says 'my previous point stands, but here is a caveat.' This balanced, fair-minded connector is valued in Japanese academic writing where acknowledging limitations of one's own argument shows intellectual honesty."},

    {type:"teach", trg:"いわゆる", src:"so-called / what is known as", pos:"adj", gender:null,
     note:"Introduces commonly used terms or concepts.\nいわゆるX = so-called X.",
     example:"A: いわゆる「ゆとり世代(せだい)」はどんな世代(せだい)ですか？\nB: 教育改革(きょういくかいかく)の時代(じだい)に育(そだ)った世代(せだい)です。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: What kind of generation is the so-called 'yutori generation'?\nB: A generation raised during the education reform era.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"いわゆる (所謂) introduces terms with some distance, suggesting 'what people call' without fully endorsing the term. Academics use it for debatable concepts: いわゆる「日本的(にほんてき)経営(けいえい)」(so-called 'Japanese-style management'). The quotation marks and いわゆる together signal 'this is a common but perhaps oversimplified label.'"},

    {type:"teach", trg:"ようするに", src:"in short / to sum up", pos:"conj", gender:null,
     note:"Summarizes the essential point.\nLess formal than つまり.",
     example:"A: いろいろ説明(せつめい)しましたが、ようするにこの計画(けいかく)は無理(むり)です。\nB: わかりました。別(べつ)の方法(ほうほう)を考(かんが)えましょう。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: I explained various things, but in short, this plan is impossible.\nB: Understood. Let's think of another method.\nA: How was it?\nB: It was very good.",
     funFact:"ようするに (要するに) literally means 'if you boil it down to the essential' (要 = essential). It cuts through complexity to the core point. In meetings, ようするに signals impatience with long explanations: 'bottom line is...' It can sound slightly dismissive of the preceding discussion if used carelessly."},

    {type:"teach", trg:"むしろ", src:"rather / on the contrary", pos:"adv", gender:null,
     note:"Presents a preferred or more accurate alternative.\nXというよりむしろY = rather Y than X.",
     example:"A: この料理(りょうり)はまずいですか？\nB: まずいというよりむしろ、味(あじ)が薄(うす)いです。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Does this food taste bad?\nB: Rather than bad, the flavor is just weak.\nA: When was it?\nB: It was last summer.",
     funFact:"むしろ (寧ろ) reframes a characterization: 'instead of saying A, it would be more accurate to say B.' 怖(こわ)いというよりむしろ面白(おもしろ)い (rather than scary, it is interesting). This nuanced word shows you have considered multiple perspectives before settling on the most accurate description."},

    {type:"teach", trg:"そもそも", src:"in the first place / to begin with", pos:"adv", gender:null,
     note:"Questions the fundamental premise.\nそもそもの問題(もんだい)は = the fundamental issue is.",
     example:"A: このプロジェクトはうまくいきませんでした。\nB: そもそも、計画(けいかく)に無理(むり)があったのです。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: This project didn't go well.\nB: To begin with, the plan itself was unrealistic.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"そもそも (抑) goes back to the root: 'forget the details, let's examine the basic premise.' In debates, そもそも is a powerful reset button: そもそもなぜこれをしているのか (why are we doing this in the first place?). It forces reconsideration of foundations, not just surface issues."},

    // Quiz steps
    {type:"mc", q:"「さらに」と「それに」はどう違(ちが)いますか？",
     opts:["さらに escalates, それに merely adds","They are the same","さらに is casual","それに is more formal"],
     ans:"さらに escalates, それに merely adds",
     hint:"One builds the argument to bigger and bigger points, the other a... points of equal weight."},

    {type:"fb", s:"締(し)め切(き)りは二十五(にじゅうご)日(にち)です。{1}、遅刻(ちこく)は認(みと)めません。",
     a:["なお"],
     opts:["なお","また","さらに","しかし"],
     hint:"An official notice adds supplementary information about a rule. This formal connector introduces an additional note or caveat.",
     sSrc:"The deadline is the 25th. Note that lateness will not be accepted."},

    {type:"match", pairs:[
      {trg:"したがって", src:"therefore"},
      {trg:"しかしながら", src:"however (very formal)"},
      {trg:"すなわち", src:"namely"},
      {trg:"ようするに", src:"in short"}
    ]},

    {type:"mc", q:"「そもそも」はどんなときに使(つか)いますか？",
     opts:["When questioning the fundamental premise","When adding information","When agreeing","When concluding"],
     ans:"When questioning the fundamental premise",
     hint:"This word goes back to the beginning, asking 'why are we doing this in the first place?' It challenges the basic assumption."},

    {type:"fb", s:"難(むずか)しいというよりは{1}面白(おもしろ)いです。",
     a:["むしろ"],
     opts:["むしろ","もっとも","なお","また"],
     hint:"Rather than calling it difficult, you want to reframe it as interesting. This word means 'rather/on the contrary.'",
     sSrc:"Rather than difficult, it is interesting."},

    {type:"mc", q:"「いわゆる」のあとに来(く)ることばはどんなものですか？",
     opts:["Commonly known terms or labels","Exact definitions","Personal opinions","Future plans"],
     ans:"Commonly known terms or labels",
     hint:"This word introduces t... that people c... use, sometimes with a hint of distance suggesting the label may be oversimplified."}
  ]
};
export default BATCH11_L1;
