// Unit 26 Expansion — Lesson 5: News Commentary
const LESSON_5 = {
  id:"jav2_u26l5", title:"ニュースかいせつ", icon:"🎙️", xp:15, board:true,
  steps:[
    {type:"intro", title:"News Commentary",
     desc:"Japanese news commentary uses analytical vocabulary to explain causes, predict outcomes, and evaluate situations. Master the language of analysis used by commentators, experts, and editorial writers on Japanese television and in print.",
     goals:["Use ようそ, みとおし, はいけい in analytical contexts","Express causes and predictions in news-style Japanese","Navigate expert commentary vocabulary"]},

    {type:"teach", trg:"かいせつ", src:"commentary / explanation / analysis", pos:"noun", gender:null,
     note:"Kanji: 解説. かいせつする = to explain/commentate.\nかいせついん = commentator. ニュースかいせつ = news analysis.",
     example:"A: このもんだいについてせんもんかがかいせつしています。\nB: わかりやすいかいせつですね。",
     exampleSrc:"A: An expert is providing commentary on this issue.\nB: It is an easy-to-understand explanation.",
     funFact:"解説 uses 解 (untie/solve) and 説 (explain). A commentator 'unties' complex issues for the audience. NHK has dedicated かいせついん (commentators) who appear alongside news anchors to analyze stories. The role requires deep expertise in a specific field: politics, economics, international affairs, or science."},

    {type:"teach", trg:"はいけい", src:"background / context", pos:"noun", gender:null,
     note:"Kanji: 背景. はいけいにある = to be in the background.\nじだいのはいけい = the context of the era.",
     example:"A: このじけんのはいけいにはけいざいもんだいがあります。\nB: もうすこしくわしくおしえてください。",
     exampleSrc:"A: Economic problems are in the background of this incident.\nB: Please tell me a little more in detail.",
     funFact:"背景 uses 背 (back) and 景 (scenery). The background of a story is the scenery behind it. Good かいせつ always explains はいけい before analyzing the event itself. Photography also uses はいけい for the literal background of an image. In both cases, understanding what is behind the subject matters."},

    {type:"teach", trg:"ようそ", src:"element / factor", pos:"noun", gender:null,
     note:"Kanji: 要素. ようそがおおい = there are many factors.\nじゅうようなようそ = an important factor.",
     example:"A: せいこうにはいくつかのようそがひつようです。\nB: たとえばどんなようそですか？",
     exampleSrc:"A: Several factors are necessary for success.\nB: For example, what kind of factors?",
     funFact:"要素 uses 要 (essential) and 素 (element). Commentators break complex events into their ようそ to make them understandable. The word appears in every analytical discussion: けいざいてきようそ (economic factors), しゃかいてきようそ (social factors), しんりてきようそ (psychological factors)."},

    {type:"mc", q:"はいけいにある means:", opts:["To exist as the underlying context","To be in the foreground","To be irrelevant","To be well-known"], ans:"To exist as the underlying context",
     hint:"はいけい is the scenery behind an event, and にある means to exist there."},

    {type:"teach", trg:"みとおし", src:"outlook / forecast / prospect", pos:"noun", gender:null,
     note:"Kanji: 見通し. みとおしがあかるい = the outlook is bright.\nみとおしがくらい = the outlook is dim.",
     example:"A: けいざいのみとおしはあかるいですか？\nB: たんきてきにはかいふくがきたいできます。",
     exampleSrc:"A: Is the economic outlook bright?\nB: Recovery can be expected in the short term.",
     funFact:"見通し literally means 'seeing through.' It is the ability to see the road ahead. Economic forecasts, weather predictions, and political outlooks all use みとおし. The expressions みとおしがたたない (cannot establish an outlook) and みとおしがたつ (can establish an outlook) are standard in news commentary."},

    {type:"teach", trg:"たんきてき", src:"short-term", pos:"adj", gender:null,
     note:"たんき (short period) + てき (adjectival suffix).\nOpposite: ちょうきてき (long-term).",
     example:"A: たんきてきなこうかはあるでしょう。\nB: ちょうきてきにはどうですか？",
     exampleSrc:"A: There will likely be a short-term effect.\nB: How about in the long term?",
     funFact:"The てき suffix converts nouns into adjectives. たんき (short period) becomes たんきてき (short-term). This pattern is incredibly productive: けいざいてき (economic), しゃかいてき (social), こくさいてき (international). Commentators layer these freely: たんきてきけいざいてきえいきょう (short-term economic impact)."},

    {type:"fb", s:"けいざいの___はあかるいですか？\n(Is the economic outlook bright?)", a:"みとおし", opts:["みとおし","はいけい","ようそ","かいせつ"], sSrc:"Is the economic outlook bright?",
     hint:"The noun for seeing into the future, used for forecasts and predictions."},

    {type:"teach", trg:"げんいん", src:"cause / reason", pos:"noun", gender:null,
     note:"Kanji: 原因. げんいんをさぐる = to investigate the cause.\nげんいんとけっか = cause and effect.",
     example:"A: じこのげんいんはまだちょうさちゅうです。\nB: はやくげんいんがはんめいするといいですね。",
     exampleSrc:"A: The cause of the accident is still under investigation.\nB: I hope the cause is identified soon.",
     funFact:"原因 uses 原 (origin/plain) and 因 (cause/reason). News commentary often structures analysis as: はいけい (background) then げんいん (cause) then えいきょう (impact) then みとおし (outlook). This four-part framework is the backbone of Japanese news analysis."},

    {type:"teach", trg:"ちょうさ", src:"investigation / survey / research", pos:"noun", gender:null,
     note:"Kanji: 調査. ちょうさする = to investigate.\nちょうさけっか = survey results. よろんちょうさ = opinion poll.",
     example:"A: ちょうさのけっかがはっぴょうされました。\nB: どんなけっかでしたか？",
     exampleSrc:"A: The investigation results have been announced.\nB: What were the results?",
     funFact:"調査 uses 調 (investigate/tune) and 査 (inspect). The word covers everything from police investigations to market research to academic surveys. Japanese media loves citing ちょうさ results. The phrases ちょうさによると (according to a survey) and ちょうさでわかった (it was found through investigation) are editorial staples."},

    {type:"mc", q:"げんいんとけっか describes:", opts:["The relationship where one thing leads to another","A type of news report","A commentary structure","An editorial opinion"], ans:"The relationship where one thing leads to another",
     hint:"げんいん (origin/source) and けっか (outcome) describe what produces what."},

    {type:"teach", trg:"しんちょう", src:"cautious / prudent / careful", pos:"adj", gender:null,
     note:"Kanji: 慎重. しんちょうなたいおう = cautious response.\nしんちょうにけんとうする = to consider carefully.",
     example:"A: せいふはしんちょうなたいおうをしめしています。\nB: もっとはやくこうどうすべきだというこえもあります。",
     exampleSrc:"A: The government is showing a cautious response.\nB: There are also voices saying they should act faster.",
     funFact:"慎重 uses 慎 (careful/restrain) and 重 (heavy/important). Being しんちょう implies weighing matters heavily before acting. In news commentary, しんちょう often contrasts with 積極的 (proactive). The debate between しんちょう and せっきょくてき approaches is a recurring theme in policy analysis."},

    {type:"teach", trg:"せっきょくてき", src:"proactive / positive / aggressive", pos:"adj", gender:null,
     note:"Kanji: 積極的. せっきょくてきにとりくむ = to engage proactively.\nOpposite: しょうきょくてき (passive/negative).",
     example:"A: もっとせっきょくてきなたいさくがひつようです。\nB: ぐたいてきにはどうすればいいでしょうか。",
     exampleSrc:"A: More proactive measures are needed.\nB: Specifically, what should be done?",
     funFact:"積極的 uses 積 (accumulate) and 極 (extreme). Being proactive means pushing to the extreme of accumulation. It is the word commentators use when arguing the government or companies should do more. The opposite しょうきょくてき (消極的, passive) implies reluctance and half-measures."},

    {type:"fb", s:"せいふは___なたいおうをしめしています。\n(The government is showing a cautious response.)", a:"しんちょう", opts:["しんちょう","せっきょくてき","たんきてき","ちょうきてき"], sSrc:"The government is showing a cautious response.",
     hint:"The adjective meaning careful and deliberate, implying slow but thoughtful action."},

    {type:"match", pairs:[{trg:"かいせつ",src:"commentary"},{trg:"はいけい",src:"background"},{trg:"ようそ",src:"factor"},{trg:"みとおし",src:"outlook"}]},

    {type:"fb", s:"じこの___はまだちょうさちゅうです。\n(The cause of the accident is still under investigation.)", a:"げんいん", opts:["げんいん","はいけい","ようそ","けっか"], sSrc:"The cause of the accident is still under investigation.",
     hint:"The noun for the origin or source that produced an event or outcome."},

    {type:"match", pairs:[{trg:"げんいん",src:"cause"},{trg:"ちょうさ",src:"investigation"},{trg:"しんちょう",src:"cautious"},{trg:"せっきょくてき",src:"proactive"}]},
  ]
};
export default LESSON_5;
