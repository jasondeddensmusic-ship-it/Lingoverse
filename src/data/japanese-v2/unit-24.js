// Japanese V2 Unit 24. つなぎ (Advanced Connectors)
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
   note:"Attaches to nouns, verbs, or adjectives. Very formal.\nあめにもかかわらず = despite the rain.",
   example:"A: あめにもかかわらず、おおくのひとがきました。\nB: にんきのあるイベントですね。",
   exampleSrc:"A: Despite the rain, many people came.\nB: It must be a popular event.",
   funFact:"にもかかわらず breaks down as に (to) + も (even) + かかわらず (not being involved/affected). The verb かかわる means 'to be concerned with.' So the literal meaning is 'even without being affected by,' which evolved into the concessive 'despite.'"},

  {type:"teach", trg:"したがって", src:"therefore / consequently", pos:"conj", gender:null,
   note:"Formal connector for logical conclusions. Common in writing and presentations.\nUsed at the start of a sentence.",
   example:"A: このちいきはこうれいかがすすんでいます。したがって、いりょうサービスのじゅようがたかまっています。\nB: なるほど。",
   exampleSrc:"A: Aging is progressing in this region. Therefore, the demand for medical services is increasing.\nB: I see.",
   funFact:"したがって comes from the verb したがう (to follow/obey). The te-form したがって literally means 'following from that.' It is the formal cousin of だから and そのため. Academic papers and news reports strongly prefer したがって over casual alternatives."},

  {type:"teach", trg:"ところが", src:"however / and yet (unexpected)", pos:"conj", gender:null,
   note:"Signals an unexpected turn of events. Stronger surprise than でも.\nUsed at the start of a new sentence.",
   example:"A: きのうはいいてんきになるとおもいました。ところが、きゅうにあめがふりました。\nB: ざんねんでしたね。",
   exampleSrc:"A: I thought yesterday would have nice weather. However, it suddenly rained.\nB: What a shame.",
   funFact:"ところが uses ところ (place/point) plus が (but). It literally means 'at that point, but...' The surprise element is what separates it from しかし (neutral contrast). ところが always introduces something the speaker did not expect or that contradicts the setup."},

  {type:"mc", q:"あめにもかかわらず、しあいはおこなわれた means:", opts:["Despite the rain, the match was held","Because of the rain, the match was cancelled","After the rain, the match started","The match was rained out"], ans:"Despite the rain, the match was held",
   hint:"This connector expresses that something happened even though a contrary condition existed."},

  {type:"tip", title:"Formal vs Casual Connectors",
   text:"Japanese has parallel sets of connectors at different formality levels:\n\nContrast:\n- でも / けど (casual)\n- しかし (neutral formal)\n- ところが (formal, with surprise)\n- にもかかわらず (very formal, concessive)\n\nResult:\n- だから (casual)\n- そのため / そこで (neutral)\n- したがって (very formal)\n\nUsing the wrong level sounds odd. したがって in casual chat sounds stiff. でも in an essay sounds childish.",
   deepDive:{title:"Choosing the Right Level",
    text:"Match your connector to the context:\n\nCasual conversation: でも, だから, それに\nPolite conversation: しかし, そのため, さらに\nPresentations: したがって, にもかかわらず, そのうえ\nAcademic writing: したがって, にもかかわらず, 一方\n\nMixing levels is a common learner mistake. A good rule: if you would say 'therefore' in English instead of 'so,' use したがって instead of だから."}},

  {type:"teach", trg:"こうれいか", src:"aging (of population)", pos:"noun", gender:null,
   note:"Kanji: 高齢化. 高 (high) + 齢 (age) + 化 (-ification).\nA major social issue in Japan.",
   example:"A: にほんのこうれいかはせかいでもっともすすんでいます。\nB: たいさくがひつようですね。",
   exampleSrc:"A: Japan's aging population is the most advanced in the world.\nB: Countermeasures are needed.",
   funFact:"Japan has the world's oldest population: over 29% are 65 or older. The suffix 化 (ka) means '-ification' and appears everywhere: 国際化 (internationalization), 近代化 (modernization), 温暖化 (warming). こうれいか was named a buzzword of the 1990s but remains Japan's defining challenge."},

  {type:"teach", trg:"いりょう", src:"medical care / healthcare", pos:"noun", gender:null,
   note:"Kanji: 医療. 医 (medicine) + 療 (heal).\nいりょうひ = medical expenses.",
   example:"A: にほんのいりょうせいどはとてもすぐれています。\nB: だれでもびょういんにいけますね。",
   exampleSrc:"A: Japan's medical system is very excellent.\nB: Anyone can go to the hospital.",
   funFact:"Japan's universal healthcare system covers everyone and keeps costs low. The kanji 医 originally depicted an arrow (矢) in a container, representing a medicine box. The system is called 国民皆保険 (kokumin kai hoken), meaning 'insurance for all citizens.'"},

  {type:"fb", s:"{1}、いりょうサービスのじゅようがたかまっています。\n(Therefore, the demand for medical services is increasing.)", a:"したがって", opts:["したがって","ところが","でも","それに"], sSrc:"Therefore, the demand for medical services is increasing.",
   hint:"The formal connector that draws a logical conclusion from a preceding statement."},

  {type:"mc", q:"ところが signals:", opts:["An expected result","An unexpected contrast or surprise","A formal conclusion","An addition to a list"], ans:"An unexpected contrast or surprise",
   hint:"This connector introduces something the speaker did not anticipate."},

  {type:"match", pairs:[{trg:"にもかかわらず",src:"despite"},{trg:"したがって",src:"therefore"},{trg:"ところが",src:"however (unexpected)"},{trg:"こうれいか",src:"aging population"}]},

  {type:"fb", s:"あめ{1}、おおくのひとがきました。\n(Despite the rain, many people came.)", a:"にもかかわらず", opts:["にもかかわらず","だから","ところが","したがって"], sSrc:"Despite the rain, many people came.",
   hint:"The very formal concessive connector meaning 'in spite of.'"},
]},

// ═══ L2: Addition & Rephrasing Connectors ═══
{id:"jav2_u24l2", title:"Addition & Rephrasing", icon:"➕", xp:15, board:true, steps:[
  {type:"intro", title:"Addition & Rephrasing Connectors",
   desc:"Learn connectors that add information, rephrase for clarity, and present both sides of an argument. つまり (in other words), そのうえ (moreover), and 一方で (on the other hand) are indispensable for structuring complex thoughts.",
   goals:["Use つまり to rephrase or summarize","Use そのうえ to add supporting points","Use いっぽうで to present a contrasting perspective"]},

  {type:"teach", trg:"つまり", src:"in other words / that is to say", pos:"conj", gender:null,
   note:"Rephrases or summarizes what was just said. Works like English 'in other words' or 'basically.'\nUsed at the start of a sentence or clause.",
   example:"A: このプロジェクトはよさんオーバーで、スケジュールもおくれています。つまり、みなおしがひつようです。\nB: そうですね。",
   exampleSrc:"A: This project is over budget and behind schedule. In other words, a review is necessary.\nB: I agree.",
   funFact:"つまり comes from the verb つまる (to be packed/stuck). The idea is that all the information 'packs down' into a concise summary. It often introduces the speaker's real point after providing context. In debates and meetings, つまり signals 'here is the bottom line.'"},

  {type:"teach", trg:"そのうえ", src:"moreover / on top of that", pos:"conj", gender:null,
   note:"Adds a further point that strengthens the argument. More formal than それに.\nそのうえ = その (that) + うえ (top/above).",
   example:"A: このレストランはおいしいです。そのうえ、ねだんもやすいです。\nB: こんどいってみましょう。",
   exampleSrc:"A: This restaurant is delicious. Moreover, the prices are cheap.\nB: Let's go sometime.",
   funFact:"そのうえ literally means 'on top of that.' The word うえ (上, above) is used in many abstract expressions: 〜うえで (after doing), 〜うえに (in addition to). そのうえ stacks arguments like building blocks, each one adding height to the point being made."},

  {type:"teach", trg:"いっぽうで", src:"on the other hand / meanwhile", pos:"conj", gender:null,
   note:"Kanji: 一方で. Presents a contrasting or parallel perspective.\nDifferent from しかし: not contradiction but different angle.",
   example:"A: とかいはべんりです。いっぽうで、しぜんがすくないです。\nB: たしかに、りょうほうにいいところがありますね。",
   exampleSrc:"A: Cities are convenient. On the other hand, there is little nature.\nB: Indeed, both have good points.",
   funFact:"一方 literally means 'one direction.' When you say いっぽうで, you are pivoting to look in a different direction at the same issue. Unlike ところが (surprise contrast), いっぽうで is neutral: it simply presents the other side. News articles love this word for balanced reporting."},

  {type:"mc", q:"つまり is used to:", opts:["Rephrase or summarize what was just said","Add a new unrelated point","Express surprise at a contrast","Signal the end of a discussion"], ans:"Rephrase or summarize what was just said",
   hint:"This connector packs information down into a clearer or simpler restatement."},

  {type:"teach", trg:"よさん", src:"budget", pos:"noun", gender:null,
   note:"Kanji: 予算. 予 (in advance) + 算 (calculate).\nよさんオーバー = over budget. よさんない = within budget.",
   example:"A: よさんはいくらですか？\nB: ごまんえんいないでおねがいします。",
   exampleSrc:"A: What is the budget?\nB: Within 50,000 yen, please.",
   funFact:"予算 combines 予 (forecast) and 算 (calculate), so a budget is literally a 'pre-calculation.' Japanese government budget debates (予算委員会, yosan iinkai) are televised and closely watched. The fiscal year in Japan starts April 1, not January 1."},

  {type:"teach", trg:"みなおし", src:"review / reassessment", pos:"noun", gender:null,
   note:"From みなおす (to review, to look again). Kanji: 見直し.\nけいかくのみなおし = review of a plan.",
   example:"A: スケジュールのみなおしがひつようです。\nB: あしたのかいぎでそうだんしましょう。",
   exampleSrc:"A: A schedule review is necessary.\nB: Let's discuss it at tomorrow's meeting.",
   funFact:"見直す breaks into 見 (look) + 直す (fix/redo). Japanese has many compound verbs with 直す: やり直す (redo), 書き直す (rewrite), 作り直す (remake). This pattern of 'verb + 直す' is one of the most productive in Japanese and appears constantly in business settings."},

  {type:"fb", s:"このレストランはおいしいです。{1}、ねだんもやすいです。\n(This restaurant is delicious. Moreover, the prices are cheap.)", a:"そのうえ", opts:["そのうえ","ところが","つまり","にもかかわらず"], sSrc:"This restaurant is delicious. Moreover, the prices are cheap.",
   hint:"The connector that adds a further supporting point on top of what was said."},

  {type:"teach", trg:"ねだん", src:"price", pos:"noun", gender:null,
   note:"Kanji: 値段. ねだんがたかい = expensive. ねだんがやすい = cheap.\nAlso: かかく (price, more formal).",
   example:"A: このかばんのねだんはいくらですか？\nB: さんぜんえんです。",
   exampleSrc:"A: What is the price of this bag?\nB: It is 3,000 yen.",
   funFact:"値段 uses 値 (value) and 段 (step/grade). Prices in Japan almost never involve haggling, unlike many other Asian markets. The posted price is the price. The concept of まけてください (give me a discount) exists but is largely limited to certain markets in Osaka and tourist areas."},

  {type:"mc", q:"とかいはべんりです。いっぽうで、しぜんがすくないです。What does いっぽうで do here?", opts:["Adds a supporting detail","Presents the other side of the argument","Draws a logical conclusion","Rephrases the first sentence"], ans:"Presents the other side of the argument",
   hint:"This connector pivots to a different perspective on the same topic."},

  {type:"match", pairs:[{trg:"つまり",src:"in other words"},{trg:"そのうえ",src:"moreover"},{trg:"いっぽうで",src:"on the other hand"},{trg:"よさん",src:"budget"}]},

  {type:"fb", s:"よさんオーバーで、スケジュールもおくれています。{1}、みなおしがひつようです。\n(Over budget and behind schedule. In other words, a review is necessary.)", a:"つまり", opts:["つまり","そのうえ","ところが","したがって"], sSrc:"Over budget and behind schedule. In other words, a review is necessary.",
   hint:"The connector that rephrases or summarizes the preceding information into a bottom line."},

  {type:"match", pairs:[{trg:"みなおし",src:"review"},{trg:"ねだん",src:"price"},{trg:"いりょう",src:"medical care"},{trg:"こうれいか",src:"aging population"}]},
]},

,EXP_L3,EXP_L4,EXP_L5
,BATCH2_L03
,BATCH2_L04
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
]};
export default UNIT_24;
