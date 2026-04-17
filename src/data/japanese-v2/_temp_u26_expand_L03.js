// Unit 26 Expansion. Lesson 5: News Commentary
const LESSON_5 = {
  id:"jav2_u26l5", title:"ニュースかいせつ", icon:"🎙️", xp:15, board:true,
  steps:[
    {type:"intro", title:"News Commentary",
     desc:"Japanese news commentary uses analytical vocabulary to explain causes, predict outcomes, and evaluate situations. Master the language of analysis used by commentators, experts, and editorial writers on Japanese television and in print.",
     goals:["Use ようそ, みとおし, はいけい in analytical contexts","Express causes and predictions in news-style Japanese","Navigate expert commentary vocabulary"]},

    {type:"teach", trg:"かいせつ", src:"commentary / explanation / analysis", pos:"noun", gender:null,
     note:"Kanji: 解説. かいせつする = to explain/commentate.\nかいせついん = commentator. ニュースかいせつ = news analysis.",
     example:"A: このもんだいについてせんもんかがかいせつしています。\nB: わかりやすいかいせつですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: An expert is providing commentary on this issue.\nB: It is an easy-to-understand explanation.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"解説 uses 解 (untie/solve) and 説 (explain). A commentator 'unties' complex issues for the audience. NHK has dedicated かいせついん (commentators) who appear alongside news anchors to analyze stories. The role requires deep expertise in a specific field: politics, economics, international affairs, or science."},

    {type:"teach", trg:"はいけい", src:"background / context", pos:"noun", gender:null,
     note:"Kanji: 背景. はいけいにある = to be in the background.\nじだいのはいけい = the context of the era.",
     example:"A: このじけんのはいけいにはけいざいもんだいがあります。\nB: もうすこしくわしくおしえてください。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Economic problems are in the background of this incident.\nB: Please tell me a little more in detail.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"背景 uses 背 (back) and 景 (scenery). The background of a story is the scenery behind it. Good かいせつ always explains はいけい before analyzing the event itself. Photography also uses はいけい for the literal background of an image. In both cases, understanding what is behind the subject matters."},

    {type:"teach", trg:"ようそ", src:"element / factor", pos:"noun", gender:null,
     note:"Kanji: 要素. ようそがおおい = there are many factors.\nじゅうようなようそ = an important factor.",
     example:"A: せいこうにはいくつかのようそがひつようです。\nB: たとえばどんなようそですか？\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Several factors are necessary for success.\nB: For example, what kind of factors?\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"要素 uses 要 (essential) and 素 (element). Commentators break complex events into their ようそ to make them understandable. The word appears in every analytical discussion: けいざいてきようそ (economic factors), しゃかいてきようそ (social factors), しんりてきようそ (psychological factors)."},

    {type:"mc", q:"はいけいにある means:", opts:["To be in the foreground","To be irrelevant","To be well-known","To exist as the underlying context"], ans:"To exist as the underlying context",
     hint:"はいけい is the scenery behind an event, and にある means to e... there."},

    {type:"teach", trg:"みとおし", src:"outlook / forecast / prospect", pos:"noun", gender:null,
     note:"Kanji: 見通し. みとおしがあかるい = the outlook is bright.\nみとおしがくらい = the outlook is dim.",
     example:"A: けいざいのみとおしはあかるいですか？\nB: たんきてきにはかいふくがきたいできます。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Is the economic outlook bright?\nB: Recovery can be expected in the short term.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"見通し literally means 'seeing through.' It is the ability to see the road ahead. Economic forecasts, weather predictions, and political outlooks all use みとおし. The expressions みとおしがたたない (cannot establish an outlook) and みとおしがたつ (can establish an outlook) are standard in news commentary."},

    {type:"teach", trg:"たんきてき", src:"short-term", pos:"adj", gender:null,
     note:"たんき (short period) + てき (adjectival suffix).\nOpposite: ちょうきてき (long-term).",
     example:"A: たんきてきなこうかはあるでしょう。\nB: ちょうきてきにはどうですか？\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: There will likely be a short-term effect.\nB: How about in the long term?\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"The てき suffix converts nouns into adjectives. たんき (short period) becomes たんきてき (short-term). This pattern is incredibly productive: けいざいてき (economic), しゃかいてき (social), こくさいてき (international). Commentators layer these freely: たんきてきけいざいてきえいきょう (short-term economic impact)."},

    {type:"fb", s:"けいざいの{1}はあかるいですか？\n(Is the economic outlook bright?)", a:"みとおし", opts:["みとおし","はいけい","ようそ","かいせつ"], sSrc:"Is the economic outlook bright?",
     hint:"The noun for seeing into the future, used for forecasts and predictions."},

    {type:"teach", trg:"げんいん", src:"cause / reason", pos:"noun", gender:null,
     note:"Kanji: 原因. げんいんをさぐる = to investigate the cause.\nげんいんとけっか = cause and effect.",
     example:"A: じこのげんいんはまだちょうさちゅうです。\nB: はやくげんいんがはんめいするといいですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: The cause of the accident is still under investigation.\nB: I hope the cause is identified soon.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"原因 uses 原 (origin/plain) and 因 (cause/reason). News commentary often structures analysis as: はいけい (background) then げんいん (cause) then えいきょう (impact) then みとおし (outlook). This four-part framework is the backbone of Japanese news analysis."},

    {type:"teach", trg:"ちょうさ", src:"investigation / survey / research", pos:"noun", gender:null,
     note:"Kanji: 調査. ちょうさする = to investigate.\nちょうさけっか = survey results. よろんちょうさ = opinion poll.",
     example:"A: ちょうさのけっかがはっぴょうされました。\nB: どんなけっかでしたか？\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: The investigation results have been announced.\nB: What were the results?\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"調査 uses 調 (investigate/tune) and 査 (inspect). The word covers everything from police investigations to market research to academic surveys. Japanese media loves citing ちょうさ results. The phrases ちょうさによると (according to a survey) and ちょうさでわかった (it was found through investigation) are editorial staples."},

    {type:"mc", q:"げんいんとけっか describes:", opts:["The relationship where one thing leads to another","A type of news report","A commentary structure","An editorial opinion"], ans:"The relationship where one thing leads to another",
     hint:"げんいん (origin/source) and けっか (outcome) describe what produces what."},

    {type:"teach", trg:"しんちょう", src:"cautious / prudent / careful", pos:"adj", gender:null,
     note:"Kanji: 慎重. しんちょうなたいおう = cautious response.\nしんちょうにけんとうする = to consider carefully.",
     example:"A: せいふはしんちょうなたいおうをしめしています。\nB: もっとはやくこうどうすべきだというこえもあります。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: The government is showing a cautious response.\nB: There are also voices saying they should act faster.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"慎重 uses 慎 (careful/restrain) and 重 (heavy/important). Being しんちょう implies weighing matters heavily before acting. In news commentary, しんちょう often contrasts with 積極的 (proactive). The debate between しんちょう and せっきょくてき approaches is a recurring theme in policy analysis."},

    {type:"teach", trg:"せっきょくてき", src:"proactive / positive / aggressive", pos:"adj", gender:null,
     note:"Kanji: 積極的. せっきょくてきにとりくむ = to engage proactively.\nOpposite: しょうきょくてき (passive/negative).",
     example:"A: もっとせっきょくてきなたいさくがひつようです。\nB: ぐたいてきにはどうすればいいでしょうか。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: More proactive measures are needed.\nB: Specifically, what should be done?\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"積極的 uses 積 (accumulate) and 極 (extreme). Being proactive means pushing to the extreme of accumulation. It is the word commentators use when arguing the government or companies should do more. The opposite しょうきょくてき (消極的, passive) implies reluctance and half-measures."},

    {type:"fb", s:"せいふは{1}なたいおうをしめしています。\n(The government is showing a cautious response.)", a:"しんちょう", opts:["しんちょう","せっきょくてき","たんきてき","ちょうきてき"], sSrc:"The government is showing a cautious response.",
     hint:"The adjective meaning careful and deliberate, implying slow but thoughtful action."},

    {type:"match", pairs:[{trg:"かいせつ",src:"commentary"},{trg:"はいけい",src:"background"},{trg:"ようそ",src:"factor"},{trg:"みとおし",src:"outlook"}]},

    {type:"fb", s:"じこの{1}はまだちょうさちゅうです。\n(The cause of the accident is still under investigation.)", a:"げんいん", opts:["げんいん","はいけい","ようそ","けっか"], sSrc:"The cause of the accident is still under investigation.",
     hint:"The noun for the origin or source that produced an event or outcome."},

    {type:"match", pairs:[{trg:"げんいん",src:"cause"},{trg:"ちょうさ",src:"investigation"},{trg:"しんちょう",src:"cautious"},{trg:"せっきょくてき",src:"proactive"}]},
  ]
};
export default LESSON_5;
