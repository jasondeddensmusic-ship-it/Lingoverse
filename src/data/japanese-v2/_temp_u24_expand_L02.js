// Unit 24 Expansion. Lesson 4: それに・さらに・そこで (Addition & Action Connectors)
const LESSON_4 = {
  id:"jav2_u24l4", title:"それに・さらに・そこで", icon:"📎", xp:15, board:true,
  steps:[
    {type:"intro", title:"それに・さらに・そこで",
     desc:"Learn connectors that add information, intensify, and prompt action. それに (in addition) and さらに (furthermore) build arguments layer by layer. そこで (and so/therefore) and そのため (for that reason) connect causes to actions. These are essential for essays, presentations, and structured arguments.",
     goals:["Use それに and さらに to stack supporting points","Use そこで to connect a situation to an action taken","Use そのため for formal cause-and-effect"]},

    {type:"teach", trg:"それに", src:"in addition / besides / on top of that", pos:"conj", gender:null,
     note:"Casual-to-neutral addition connector. Adds a further point.\nMore conversational than そのうえ or さらに.",
     example:"A: このみせはやすいです。それに、りょうもおおいです。\nB: さいこうですね。",
     exampleSrc:"A: This restaurant is cheap. Besides, the portions are large.\nB: That is the best.",
     funFact:"それに is the most conversational addition connector. それ (that) + に (to/in) literally means 'to that, add...' It appears naturally in everyday conversation when listing reasons or building an argument casually. In contrast, そのうえ and さらに are reserved for presentations and writing."},

    {type:"teach", trg:"さらに", src:"furthermore / additionally / even more", pos:"conj", gender:null,
     note:"Formal addition connector. Stronger emphasis than それに.\nKanji: 更に. Also used as an adverb meaning 'even more.'",
     example:"A: ことしのうりあげはよかったです。さらに、らいねんはもっとせいちょうするよそうです。\nB: すばらしいですね。",
     exampleSrc:"A: This year's sales were good. Furthermore, they are forecast to grow even more next year.\nB: That is wonderful.",
     funFact:"さらに comes from 更 (renew/change further). As a connector, it escalates: each point builds on the last. As an adverb, さらに means 'even more': さらにおおきい (even bigger), さらによい (even better). It appears in news when escalating developments unfold: さらに被害がひろがっている (damage is spreading further)."},

    {type:"teach", trg:"そこで", src:"and so / therefore (action taken)", pos:"conj", gender:null,
     note:"Connects a situation to an action or decision taken because of it.\nDifferent from だから: そこで emphasizes the action, not just the reason.",
     example:"A: でんしゃがおくれていました。そこで、タクシーでいくことにしました。\nB: それはよいはんだんでしたね。",
     exampleSrc:"A: The train was delayed. And so, I decided to go by taxi.\nB: That was a good decision.",
     funFact:"そこで uses そこ (there/that point) plus で (at/by means of). It literally means 'at that point,' marking the moment a situation prompted an action. Unlike だから (because, reason-focused), そこで is action-focused: given the situation, here is what was done. News reports love this pattern for narrating sequences of decisions."},

    {type:"teach", trg:"そのため", src:"for that reason / because of that", pos:"conj", gender:null,
     note:"Polite/formal cause-and-effect connector. そのため = for that reason.\nMore formal than だから, less formal than したがって.",
     example:"A: きょうはどうろがこんでいます。そのため、おくれるかもしれません。\nB: きをつけてきてください。",
     exampleSrc:"A: The roads are congested today. For that reason, I might be late.\nB: Please come safely.",
     funFact:"そのため sits in the middle of the formality scale: above だから but below したがって. It is the go-to connector for polite explanations. Business emails use it constantly: 本日は体調不良のため (due to feeling unwell today)... The ため (for the sake of/because of) component also appears in ために (in order to)."},

    {type:"mc", q:"そこで emphasizes:", opts:["The reason behind something","The action taken in response to a situation","An unexpected contrast","Additional information"], ans:"The action taken in response to a situation",
     hint:"This connector marks the moment when a s... prompted a decision or a...."},

    {type:"teach", trg:"うりあげ", src:"sales / revenue", pos:"noun", gender:null,
     note:"Kanji: 売り上げ. うり (sell) + あげ (raise).\nうりあげがのびる = sales grow.",
     example:"A: こんげつのうりあげはどうでしたか？\nB: ぜんげつよりにじゅっパーセントふえました。",
     exampleSrc:"A: How were this month's sales?\nB: They increased twenty percent from last month.",
     funFact:"売り上げ combines 売る (sell) and 上げる (raise), creating 'raised through selling.' It is the standard business term for revenue. Quarterly うりあげ reports drive stock prices and corporate strategy. Retail stores track daily うりあげ meticulously. The phrase うりあげナンバーワン (number one in sales) is used heavily in advertising."},

    {type:"teach", trg:"せいちょう", src:"growth / development", pos:"noun", gender:null,
     note:"Kanji: 成長. せい (become/achieve) + ちょう (long/chief).\nけいざいせいちょう = economic growth. こどものせいちょう = child's growth.",
     example:"A: こどものせいちょうははやいですね。\nB: きょねんからずいぶんおおきくなりました。",
     exampleSrc:"A: Children grow quickly.\nB: They have gotten much bigger since last year.",
     funFact:"成長 covers both physical growth and abstract development. けいざいせいちょう (economic growth) dominates news, while こどものせいちょう (child development) fills parenting discussions. Japan's 高度経済成長 (koudokeizaiseichou, high economic growth) period of the 1960s-70s transformed the country from postwar ruins to an economic superpower."},

    {type:"teach", trg:"はんだん", src:"judgment / decision / assessment", pos:"noun", gender:null,
     note:"Kanji: 判断. はん (judge) + だん (sever/decide).\nはんだんする = to judge/decide.",
     example:"A: それはよいはんだんでしたね。\nB: じょうきょうをよくかんがえてきめました。",
     exampleSrc:"A: That was a good judgment.\nB: I considered the situation carefully and decided.",
     funFact:"判断 combines 判 (judge, stamp) and 断 (sever/decide). Making a はんだん means cutting through ambiguity to reach a conclusion. Japanese business culture values careful はんだん over quick decisions. The phrase じしゅてきはんだん (autonomous judgment) is prized in workers, but only within the boundaries set by group consensus."},

    {type:"fb", s:"でんしゃがおくれていました。{1}、タクシーでいくことにしました。\n(The train was delayed. And so, I decided to go by taxi.)", a:"そこで", opts:["そこで","そのため","それに","さらに"], sSrc:"The train was delayed. And so, I decided to go by taxi.",
     hint:"The connector that links a situation to the concrete action taken in response."},

    {type:"teach", trg:"〜だけでなく", src:"not only ~ (but also)", pos:"conj", gender:null,
     note:"Noun/clause + だけでなく = not only X but also.\nBuilds compound arguments by adding layers.",
     example:"A: にほんごだけでなく、ちゅうごくごもはなせます。\nB: すごいですね。",
     exampleSrc:"A: I can speak not only Japanese but also Chinese.\nB: That is impressive.",
     funFact:"だけでなく is one of the most useful expansion patterns. だけ (only) + でなく (not being) = 'not being only.' It appears in persuasive writing, job interviews, and presentations. こどもだけでなくおとなも (not only children but adults too) is a common pattern for describing universal appeal."},

    {type:"teach", trg:"じょうきょう", src:"situation / circumstances", pos:"noun", gender:null,
     note:"Kanji: 状況. じょう (condition) + きょう (situation).\nじょうきょうをせつめいする = explain the situation.",
     example:"A: いまのじょうきょうをせつめいしてください。\nB: すこしふくざつなじょうきょうです。",
     exampleSrc:"A: Please explain the current situation.\nB: It is a somewhat complex situation.",
     funFact:"状況 uses 状 (condition/letter) and 況 (moreover/situation). It is the standard formal word for 'situation,' used in news, business, and emergencies. 緊急状況 (kinkyu joukyou, emergency situation) and 現在の状況 (genzai no joukyou, current situation) are high-frequency news phrases. The similar word じたい (事態) is more urgent."},

    {type:"mc", q:"さらに is different from それに because:", opts:["They mean opposite things","さらに is more formal and emphatic","それに is only used in writing","さらに is more casual"], ans:"さらに is more formal and emphatic",
     hint:"Both add information, but one is conversational while the other escalates in f... contexts."},

    {type:"match", pairs:[{trg:"それに",src:"in addition (casual)"},{trg:"さらに",src:"furthermore (formal)"},{trg:"そこで",src:"and so (action taken)"},{trg:"そのため",src:"for that reason"}]},

    {type:"match", pairs:[{trg:"うりあげ",src:"sales/revenue"},{trg:"せいちょう",src:"growth"},{trg:"はんだん",src:"judgment"},{trg:"じょうきょう",src:"situation"}]},

    {type:"fb", s:"きょうはどうろがこんでいます。{1}、おくれるかもしれません。\n(The roads are congested today. For that reason, I might be late.)", a:"そのため", opts:["そのため","そこで","それに","つまり"], sSrc:"The roads are congested today. For that reason, I might be late.",
     hint:"The polite formal connector expressing cause and effect, more neutral than したがって."},

    {type:"mc", q:"だけでなく means:", opts:["Not only","Only if","Nothing but","Even though"], ans:"Not only",
     hint:"This pattern expands an argument by saying X is not the only thing; Y is also true."},

    {type:"match", pairs:[{trg:"だけでなく",src:"not only"},{trg:"じょうきょう",src:"situation"},{trg:"はんだん",src:"judgment"},{trg:"そこで",src:"and so"}]},
  ]
};
export default LESSON_4;
