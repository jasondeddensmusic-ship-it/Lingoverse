// Batch 11 – Unit 24 (B1.3 Advanced Connectors): Formal Conjunctions & Text Cohesion
const BATCH11_L1 = {
  id:"jav2_u24l_b11_1", title:"ぶんしょうのつなぎ", icon:"📄", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんしょうのつなぎ",
     desc:"Learn formal conjunctions and text cohesion markers used in writing, presentations, and formal speech. These elevate your Japanese to professional and academic levels.",
     goals:["Use formal written connectors: さらに, また, なお","Structure arguments with しかしながら, それにもかかわらず","Create cohesive multi-paragraph text"]},

    {type:"teach", trg:"さらに", src:"furthermore / in addition", pos:"conj", gender:null,
     note:"Adds information, escalating the argument.\nMore formal than それに.",
     example:"A: このせいひんはべんりです。さらに、ねだんもやすいです。\nB: それはいいですね。",
     exampleSrc:"A: This product is convenient. Furthermore, the price is also cheap.\nB: That's great.",
     funFact:"さらに (更に) escalates: each new point is bigger than the last. それに merely adds. さらに carries rhetorical power in presentations: さらにじゅうような点は (an even more important point is...). In formal writing, さらに signals that the argument is building toward a conclusion."},

    {type:"teach", trg:"また", src:"also / in addition / moreover", pos:"conj", gender:null,
     note:"Multi-purpose connector for adding related points.\nまた、... = Also, ...",
     example:"A: きょうとはてらがゆうめいです。また、まいこのぶんかもあります。\nB: いろいろなみりょくがありますね。",
     exampleSrc:"A: Kyoto is famous for temples. Also, it has maiko culture.\nB: It has various attractions.",
     funFact:"また is the workhorse formal connector: neutral, clean, versatile. In academic writing, each paragraph can start with また to add parallel points. Unlike さらに (which escalates), また adds points of equal weight. Business emails use また to introduce additional agenda items."},

    {type:"teach", trg:"なお", src:"note that / additionally (formal)", pos:"conj", gender:null,
     note:"Adds supplementary information or caveats.\nCommon in official notices and documentation.",
     example:"A: しめきりはがつにじゅうごにちです。なお、ちこくはみとめません。\nB: わかりました。",
     exampleSrc:"A: The deadline is the 25th. Note that lateness will not be accepted.\nB: Understood.",
     funFact:"なお is distinctly formal and documentary. It introduces supplementary notes, exceptions, or warnings: なお、ちゅうしゃじょうはありません (Note: there is no parking). Government documents, contracts, and official notices use なお extensively. It signals 'here is something extra you need to know.'"},

    {type:"teach", trg:"しかしながら", src:"however / nevertheless (very formal)", pos:"conj", gender:null,
     note:"Most formal version of 'however.'\nUsed in speeches, papers, and official statements.",
     example:"A: けいざいはせいちょうしています。しかしながら、かくさはひろがっています。\nB: ふくざつなもんだいですね。",
     exampleSrc:"A: The economy is growing. However, inequality is widening.\nB: It is a complex issue.",
     funFact:"しかしながら is the heavyweight 'however' of Japanese. The hierarchy: でも (casual) < けれど (neutral) < しかし (formal) < しかしながら (very formal). Politicians and academics use しかしながら for dramatic contrast. In speeches, it signals a pivotal moment: 'here comes the important counterpoint.'"},

    {type:"teach", trg:"すなわち", src:"namely / that is", pos:"conj", gender:null,
     note:"Provides a precise definition or restatement.\nMore precise than つまり.",
     example:"A: これはSDGs、すなわちじぞくかのうなかいはつもくひょうのことです。\nB: なるほど。",
     exampleSrc:"A: This is SDGs, namely Sustainable Development Goals.\nB: I see.",
     funFact:"すなわち (即ち) is the precision tool of academic Japanese: it equates two things exactly. つまり restates for clarity (rephrasing). すなわち restates for precision (exact equivalence). In legal documents, すなわち defines terms: ここでいう「当事者」とは、すなわち... (the 'party' referred to here means, namely...)."},

    {type:"teach", trg:"したがって", src:"therefore / consequently", pos:"conj", gender:null,
     note:"Draws a logical conclusion from premises.\nFormal version of だから.",
     example:"A: じっけんのけっかはよそくどおりでした。したがって、かせつはただしいといえます。\nB: すばらしいはっけんですね。",
     exampleSrc:"A: The experimental results matched predictions. Therefore, we can say the hypothesis is correct.\nB: That's a wonderful discovery.",
     funFact:"したがって (従って) follows logical reasoning: premise, then conclusion. It is the standard 'therefore' in scientific papers and business analyses. したがう means 'to follow,' so したがって literally means 'following from this.' This logical precision is essential for JLPT N2 reading passages."},

    {type:"teach", trg:"もっとも", src:"although / that said", pos:"conj", gender:null,
     note:"Adds a reservation or exception to the previous statement.\nSoftens absolute claims.",
     example:"A: にほんごはむずかしいです。もっとも、まいにちべんきょうすればだれでもできるようになります。\nB: そうですか。がんばります。",
     exampleSrc:"A: Japanese is difficult. That said, if you study every day anyone can learn it.\nB: Really? I'll do my best.",
     funFact:"もっとも (尤も) adds a nuanced qualification. Unlike しかし (direct contradiction), もっとも says 'my previous point stands, but here is a caveat.' This balanced, fair-minded connector is valued in Japanese academic writing where acknowledging limitations of one's own argument shows intellectual honesty."},

    {type:"teach", trg:"いわゆる", src:"so-called / what is known as", pos:"adj", gender:null,
     note:"Introduces commonly used terms or concepts.\nいわゆるX = so-called X.",
     example:"A: いわゆる「ゆとりせだい」はどんなせだいですか？\nB: きょういくかいかくのじだいにそだったせだいです。",
     exampleSrc:"A: What kind of generation is the so-called 'yutori generation'?\nB: A generation raised during the education reform era.",
     funFact:"いわゆる (所謂) introduces terms with some distance, suggesting 'what people call' without fully endorsing the term. Academics use it for debatable concepts: いわゆる「日本的経営」(so-called 'Japanese-style management'). The quotation marks and いわゆる together signal 'this is a common but perhaps oversimplified label.'"},

    {type:"teach", trg:"ようするに", src:"in short / to sum up", pos:"conj", gender:null,
     note:"Summarizes the essential point.\nLess formal than つまり.",
     example:"A: いろいろせつめいしましたが、ようするにこのけいかくはむりです。\nB: わかりました。べつのほうほうをかんがえましょう。",
     exampleSrc:"A: I explained various things, but in short, this plan is impossible.\nB: Understood. Let's think of another method.",
     funFact:"ようするに (要するに) literally means 'if you boil it down to the essential' (要 = essential). It cuts through complexity to the core point. In meetings, ようするに signals impatience with long explanations: 'bottom line is...' It can sound slightly dismissive of the preceding discussion if used carelessly."},

    {type:"teach", trg:"むしろ", src:"rather / on the contrary", pos:"adv", gender:null,
     note:"Presents a preferred or more accurate alternative.\nX というより むしろ Y = rather Y than X.",
     example:"A: このりょうりはまずいですか？\nB: まずいというよりむしろ、あじがうすいです。",
     exampleSrc:"A: Does this food taste bad?\nB: Rather than bad, the flavor is just weak.",
     funFact:"むしろ (寧ろ) reframes a characterization: 'instead of saying A, it would be more accurate to say B.' こわいというよりむしろおもしろい (rather than scary, it is interesting). This nuanced word shows you have considered multiple perspectives before settling on the most accurate description."},

    {type:"teach", trg:"そもそも", src:"in the first place / to begin with", pos:"adv", gender:null,
     note:"Questions the fundamental premise.\nそもそものもんだいは = the fundamental issue is.",
     example:"A: このプロジェクトはうまくいきませんでした。\nB: そもそも、けいかくにむりがあったのです。",
     exampleSrc:"A: This project didn't go well.\nB: To begin with, the plan itself was unrealistic.",
     funFact:"そもそも (抑) goes back to the root: 'forget the details, let's examine the basic premise.' In debates, そもそも is a powerful reset button: そもそもなぜこれをしているのか (why are we doing this in the first place?). It forces reconsideration of foundations, not just surface issues."},

    // Quiz steps
    {type:"mc", q:"「さらに」と「それに」はどうちがいますか？",
     opts:["さらに escalates, それに merely adds","They are the same","さらに is casual","それに is more formal"],
     ans:"さらに escalates, それに merely adds",
     hint:"One builds the argument to bigger and bigger points, the other a... points of equal weight."},

    {type:"fb", s:"しめきりはにじゅうごにちです。{1}、ちこくはみとめません。",
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

    {type:"mc", q:"「そもそも」はどんなときにつかいますか？",
     opts:["When questioning the fundamental premise","When adding information","When agreeing","When concluding"],
     ans:"When questioning the fundamental premise",
     hint:"This word goes back to the beginning, asking 'why are we doing this in the first place?' It challenges the basic assumption."},

    {type:"fb", s:"むずかしいというよりは{1}おもしろいです。",
     a:["むしろ"],
     opts:["むしろ","もっとも","なお","また"],
     hint:"Rather than calling it difficult, you want to reframe it as interesting. This word means 'rather/on the contrary.'",
     sSrc:"Rather than difficult, it is interesting."},

    {type:"mc", q:"「いわゆる」のあとにくることばはどんなものですか？",
     opts:["Commonly known terms or labels","Exact definitions","Personal opinions","Future plans"],
     ans:"Commonly known terms or labels",
     hint:"This word introduces t... that people c... use, sometimes with a hint of distance suggesting the label may be oversimplified."}
  ]
};
export default BATCH11_L1;
