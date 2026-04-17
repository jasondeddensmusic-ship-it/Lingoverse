// Japanese V2 Unit 24. つなぎ (Advanced Connectors)
import BATCH11_L1 from './_batch11_u24_L01.js';
import BATCH10_L1 from './_batch10_u24_L01.js';
import BATCH9_L1 from './_batch9_u24_L01.js';
import BATCH7_L1 from './_batch7_u24_L01.js';
import BATCH8_L1 from './_batch8_u24_L01.js';
import BATCH6_L1 from './_batch6_u24_L01.js';
import BATCH5_L02 from './_batch5_u24_L02.js';
import BATCH5_L01 from './_batch5_u24_L01.js';
import BATCH2_L04 from './_batch2_u24_L04.js';
import BATCH2_L03 from './_batch2_u24_L03.js';
import EXP_L3 from './_temp_u24_expand_L01.js';import EXP_L4 from './_temp_u24_expand_L02.js';import EXP_L5 from './_temp_u24_expand_L03.js';
// Level: B1.3. JLPT N3 aligned.
// にもかかわらず, 一方で, したがって, つまり, ところが, そのうえ.

const UNIT_24 = {
  n:24, lang:"ja", srcLang:"en", track:"v2",
  title:"つなぎ", sub:"Advanced Connectors",
  icon:"🔗", level:"B1.3", color:"#7B5EE8",
  lessons:[

// ═══ L1: Contrast & Result Connectors ═══
{id:"jav2_u24l1", title:"Contrast & Result", icon:"⚡", xp:15, board:true, steps:[
  {type:"intro", title:"Contrast & Result Connectors",
   desc:"Move beyond でも and だから. These advanced connectors let you build complex arguments: conceding a point, drawing conclusions, and signaling unexpected outcomes. They are essential for essays, presentations, and formal conversation at the B1 level.",
   goals:["Use にもかかわらず for 'despite'","Use したがって for formal 'therefore'","Use ところが for unexpected contrast"]},

  {type:"teach", trg:"にもかかわらず", src:"despite / in spite of", pos:"conj", gender:null,
   note:"Attaches to nouns, verbs, or adjectives. Very formal.\n雨(あめ)にもかかわらず = despite the rain.",
   example:"A: 雨(あめ)にもかかわらず、多(おお)くの人(ひと)が来(き)ました。\nB: 人気(にんき)のあるイベントですね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
   exampleSrc:"A: Despite the rain, many people came.\nB: It must be a popular event.\nA: That is exciting.\nB: Yes, I am already excited.",
   funFact:"にもかかわらず breaks down as に (to) + も (even) + かかわらず (not being involved/affected). The verb かかわる means 'to be concerned with.' So the literal meaning is 'even without being affected by,' which evolved into the concessive 'despite.'"},

  {type:"teach", trg:"したがって", src:"therefore / consequently", pos:"conj", gender:null,
   note:"Formal connector for logical conclusions. Common in writing and presentations.\nUsed at the start of a sentence.",
   example:"A: この地域(ちいき)は高齢化(こうれいか)が進(すす)んでいます。したがって、医療(いりょう)サービスの需要(じゅよう)が高(たか)まっています。\nB: なるほど。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
   exampleSrc:"A: Aging is progressing in this region. Therefore, the demand for medical services is increasing.\nB: I see.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
   funFact:"したがって comes from the verb 従(したが)う (to follow/obey). The て-form したがって literally means 'following from that.' It is the formal cousin of だから and そのため. Academic papers and news reports strongly prefer したがって over casual alternatives."},

  {type:"teach", trg:"ところが", src:"however / and yet (unexpected)", pos:"conj", gender:null,
   note:"Signals an unexpected turn of events. Stronger surprise than でも.\nUsed at the start of a new sentence.",
   example:"A: 昨日(きのう)はいい天気(てんき)になると思(おも)いました。ところが、急(きゅう)に雨(あめ)が降(ふ)りました。\nB: 残念(ざんねん)でしたね。\nA: どうでしたか？\nB: とても良(よ)かったです。",
   exampleSrc:"A: I thought yesterday would have nice weather. However, it suddenly rained.\nB: What a shame.\nA: How was it?\nB: It was very good.",
   funFact:"ところが uses ところ (place/point) plus が (but). It literally means 'at that point, but...' The surprise element is what separates it from しかし (neutral contrast). ところが always introduces something the speaker did not expect or that contradicts the setup."},

  {type:"mc", q:"雨(あめ)にもかかわらず、試合(しあい)は行(おこな)われた means:", opts:["Despite the rain, the match was held","Because of the rain, the match was cancelled","After the rain, the match started","The match was rained out"], ans:"Despite the rain, the match was held",
   hint:"This connector expresses that something happened even though a contrary condition existed."},

  {type:"tip", title:"Formal vs Casual Connectors",
   text:"Japanese has parallel sets of connectors at different formality levels:\n\nContrast:\n- でも / けど (casual)\n- しかし (neutral formal)\n- ところが (formal, with surprise)\n- にもかかわらず (very formal, concessive)\n\nResult:\n- だから (casual)\n- そのため / そこで (neutral)\n- したがって (very formal)\n\nUsing the wrong level sounds odd. したがって in casual chat sounds stiff. でも in an essay sounds childish.",
   deepDive:{title:"Choosing the Right Level",
    text:"Match your connector to the context:\n\nCasual conversation: でも, だから, それに\nPolite conversation: しかし, そのため, さらに\nPresentations: したがって, にもかかわらず, そのうえ\nAcademic writing: したがって, にもかかわらず, 一方(いっぽう)\n\nMixing levels is a common learner mistake. A good rule: if you would say 'therefore' in English instead of 'so,' use したがって instead of だから."}},

  {type:"teach", trg:"高齢化(こうれいか)", src:"aging (of population)", pos:"noun", gender:null,
   note:"Kanji: 高齢化. 高(こう) (high) + 齢(れい) (age) + 化(か) (-ification).\nA major social issue in Japan.",
   example:"A: 日本(にほん)の高齢化(こうれいか)は世界(せかい)で最(もっと)も進(すす)んでいます。\nB: 対策(たいさく)が必要(ひつよう)ですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
   exampleSrc:"A: Japan's aging population is the most advanced in the world.\nB: Countermeasures are needed.\nA: When was it?\nB: It was last summer.",
   funFact:"Japan has the world's oldest population: over 29% are 65 or older. The suffix 化 (ka) means '-ification' and appears everywhere: 国際化(こくさいか) (internationalization), 近代化(きんだいか) (modernization), 温暖化(おんだんか) (warming). 高齢化 was named a buzzword of the 1990s but remains Japan's defining challenge."},

  {type:"teach", trg:"医療(いりょう)", src:"medical care / healthcare", pos:"noun", gender:null,
   note:"Kanji: 医療. 医(い) (medicine) + 療(りょう) (heal).\n医療費(いりょうひ) = medical expenses.",
   example:"A: 日本(にほん)の医療制度(いりょうせいど)はとても優(すぐ)れています。\nB: 誰(だれ)でも病院(びょういん)に行(い)けますね。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
   exampleSrc:"A: Japan's medical system is very excellent.\nB: Anyone can go to the hospital.\nA: That is nice.\nB: Yes, it was very fun.",
   funFact:"Japan's universal healthcare system covers everyone and keeps costs low. The kanji 医 originally depicted an arrow (矢) in a container, representing a medicine box. The system is called 国民皆保険(こくみんかいほけん) (kokumin kai hoken), meaning 'insurance for all citizens.'"},

  {type:"fb", s:"{1}、医療(いりょう)サービスの需要(じゅよう)が高(たか)まっています。\n(Therefore, the demand for medical services is increasing.)", a:"したがって", opts:["したがって","ところが","でも","それに"], sSrc:"Therefore, the demand for medical services is increasing.",
   hint:"The formal connector that draws a logical conclusion from a preceding statement."},

  {type:"mc", q:"ところが signals:", opts:["An expected result","An unexpected contrast or surprise","A formal conclusion","An addition to a list"], ans:"An unexpected contrast or surprise",
   hint:"This connector introduces something the speaker did not anticipate."},

  {type:"match", pairs:[{trg:"にもかかわらず",src:"despite"},{trg:"したがって",src:"therefore"},{trg:"ところが",src:"however (unexpected)"},{trg:"高齢化(こうれいか)",src:"aging population"}]},

  {type:"fb", s:"雨(あめ){1}、多(おお)くの人(ひと)が来(き)ました。\n(Despite the rain, many people came.)", a:"にもかかわらず", opts:["にもかかわらず","だから","ところが","したがって"], sSrc:"Despite the rain, many people came.",
   hint:"The very formal concessive connector meaning 'in spite of.'"},
]},

// ═══ L2: Addition & Rephrasing Connectors ═══
{id:"jav2_u24l2", title:"Addition & Rephrasing", icon:"➕", xp:15, board:true, steps:[
  {type:"intro", title:"Addition & Rephrasing Connectors",
   desc:"Learn connectors that add information, rephrase for clarity, and present both sides of an argument. つまり (in other words), そのうえ (moreover), and 一方(いっぽう)で (on the other hand) are indispensable for structuring complex thoughts.",
   goals:["Use つまり to rephrase or summarize","Use そのうえ to add supporting points","Use 一方(いっぽう)で to present a contrasting perspective"]},

  {type:"teach", trg:"つまり", src:"in other words / that is to say", pos:"conj", gender:null,
   note:"Rephrases or summarizes what was just said. Works like English 'in other words' or 'basically.'\nUsed at the start of a sentence or clause.",
   example:"A: このプロジェクトは予算(よさん)オーバーで、スケジュールも遅(おく)れています。つまり、見直(みなお)しが必要(ひつよう)です。\nB: そうですね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
   exampleSrc:"A: This project is over budget and behind schedule. In other words, a review is necessary.\nB: I agree.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
   funFact:"つまり comes from the verb 詰(つ)まる (to be packed/stuck). The idea is that all the information 'packs down' into a concise summary. It often introduces the speaker's real point after providing context. In debates and meetings, つまり signals 'here is the bottom line.'"},

  {type:"teach", trg:"そのうえ", src:"moreover / on top of that", pos:"conj", gender:null,
   note:"Adds a further point that strengthens the argument. More formal than それに.\nそのうえ = その (that) + 上(うえ) (top/above).",
   example:"A: このレストランは美味(おい)しいです。そのうえ、値段(ねだん)も安(やす)いです。\nB: 今度(こんど)行(い)ってみましょう。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
   exampleSrc:"A: This restaurant is delicious. Moreover, the prices are cheap.\nB: Let's go sometime.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
   funFact:"そのうえ literally means 'on top of that.' The word 上(うえ) (above) is used in many abstract expressions: 〜上(うえ)で (after doing), 〜上(うえ)に (in addition to). そのうえ stacks arguments like building blocks, each one adding height to the point being made."},

  {type:"teach", trg:"一方(いっぽう)で", src:"on the other hand / meanwhile", pos:"conj", gender:null,
   note:"Kanji: 一方で. Presents a contrasting or parallel perspective.\nDifferent from しかし: not contradiction but different angle.",
   example:"A: 都会(とかい)は便利(べんり)です。一方(いっぽう)で、自然(しぜん)が少(すく)ないです。\nB: 確(たし)かに、両方(りょうほう)にいいところがありますね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
   exampleSrc:"A: Cities are convenient. On the other hand, there is little nature.\nB: Indeed, both have good points.\nA: How long did it take?\nB: About two hours.",
   funFact:"一方 literally means 'one direction.' When you say 一方(いっぽう)で, you are pivoting to look in a different direction at the same issue. Unlike ところが (surprise contrast), 一方(いっぽう)で is neutral: it simply presents the other side. News articles love this word for balanced reporting."},

  {type:"mc", q:"つまり is used to:", opts:["Rephrase or summarize what was just said","Add a new unrelated point","Express surprise at a contrast","Signal the end of a discussion"], ans:"Rephrase or summarize what was just said",
   hint:"This connector packs information down into a clearer or simpler restatement."},

  {type:"teach", trg:"予算(よさん)", src:"budget", pos:"noun", gender:null,
   note:"Kanji: 予算. 予(よ) (in advance) + 算(さん) (calculate).\n予算(よさん)オーバー = over budget. 予算内(よさんない) = within budget.",
   example:"A: 予算(よさん)はいくらですか？\nB: 五万円(ごまんえん)以内(いない)でお願(ねが)いします。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
   exampleSrc:"A: What is the budget?\nB: Within 50,000 yen, please.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
   funFact:"予算 combines 予 (forecast) and 算 (calculate), so a budget is literally a 'pre-calculation.' Japanese government budget debates (予算委員会(よさんいいんかい), yosan iinkai) are televised and closely watched. The fiscal year in Japan starts April 1, not January 1."},

  {type:"teach", trg:"見直(みなお)し", src:"review / reassessment", pos:"noun", gender:null,
   note:"From 見直(みなお)す (to review, to look again). Kanji: 見直し.\n計画(けいかく)の見直(みなお)し = review of a plan.",
   example:"A: スケジュールの見直(みなお)しが必要(ひつよう)です。\nB: 明日(あした)の会議(かいぎ)で相談(そうだん)しましょう。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
   exampleSrc:"A: A schedule review is necessary.\nB: Let's discuss it at tomorrow's meeting.\nA: Do you recommend it?\nB: Yes, please try it.",
   funFact:"見直す breaks into 見 (look) + 直す (fix/redo). Japanese has many compound verbs with 直す: やり直(なお)す (redo), 書(か)き直(なお)す (rewrite), 作(つく)り直(なお)す (remake). This pattern of 'verb + 直す' is one of the most productive in Japanese and appears constantly in business settings."},

  {type:"fb", s:"このレストランは美味(おい)しいです。{1}、値段(ねだん)も安(やす)いです。\n(This restaurant is delicious. Moreover, the prices are cheap.)", a:"そのうえ", opts:["そのうえ","ところが","つまり","にもかかわらず"], sSrc:"This restaurant is delicious. Moreover, the prices are cheap.",
   hint:"The connector that adds a further supporting point on top of what was said."},

  {type:"teach", trg:"値段(ねだん)", src:"price", pos:"noun", gender:null,
   note:"Kanji: 値段. 値段(ねだん)が高(たか)い = expensive. 値段(ねだん)が安(やす)い = cheap.\nAlso: 価格(かかく) (price, more formal).",
   example:"A: このかばんの値段(ねだん)はいくらですか？\nB: 三千円(さんぜんえん)です。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
   exampleSrc:"A: What is the price of this bag?\nB: It is 3,000 yen.\nA: Shall we go together?\nB: That sounds good. Let's go.",
   funFact:"値段 uses 値 (value) and 段 (step/grade). Prices in Japan almost never involve haggling, unlike many other Asian markets. The posted price is the price. The concept of まけてください (give me a discount) exists but is largely limited to certain markets in Osaka and tourist areas."},

  {type:"mc", q:"都会(とかい)は便利(べんり)です。一方(いっぽう)で、自然(しぜん)が少(すく)ないです。What does 一方(いっぽう)で do here?", opts:["Adds a supporting detail","Presents the other side of the argument","Draws a logical conclusion","Rephrases the first sentence"], ans:"Presents the other side of the argument",
   hint:"This connector pivots to a different perspective on the same topic."},

  {type:"match", pairs:[{trg:"つまり",src:"in other words"},{trg:"そのうえ",src:"moreover"},{trg:"一方(いっぽう)で",src:"on the other hand"},{trg:"予算(よさん)",src:"budget"}]},

  {type:"fb", s:"予算(よさん)オーバーで、スケジュールも遅(おく)れています。{1}、見直(みなお)しが必要(ひつよう)です。\n(Over budget and behind schedule. In other words, a review is necessary.)", a:"つまり", opts:["つまり","そのうえ","ところが","したがって"], sSrc:"Over budget and behind schedule. In other words, a review is necessary.",
   hint:"The connector that rephrases or summarizes the preceding information into a bottom line."},

  {type:"match", pairs:[{trg:"見直(みなお)し",src:"review"},{trg:"値段(ねだん)",src:"price"},{trg:"医療(いりょう)",src:"medical care"},{trg:"高齢化(こうれいか)",src:"aging population"}]},
]},

,EXP_L3,EXP_L4,EXP_L5
,BATCH2_L03
,BATCH2_L04
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_24;
