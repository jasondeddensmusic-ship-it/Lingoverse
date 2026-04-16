// Unit 24 Batch 5 Lesson 1: ふかのつなぎ (Addition & Emphasis Connectors)
const BATCH5_L_1 = {
  id:"jav2_u24l_b5_1", title:"ふかのつなぎ", icon:"➕", xp:15, board:true,
  steps:[
    {type:"intro", title:"ふかのつなぎ",
     desc:"Build complex arguments with addition and emphasis connectors. そのうえ (moreover), それに (besides), さらに (furthermore), and もっとも (although/admittedly). These connectors transform simple observations into layered, persuasive arguments essential for B1+ discourse.",
     goals:["Use そのうえ, さらに for adding points","Use もっとも for concession","Build multi-point arguments with connectors"]},

    {type:"teach", trg:"そのうえ", src:"moreover / on top of that / besides", pos:"conj", gender:null,
     note:"Kanji: その上. Adds another point to strengthen an argument.\nUsed at the start of a new sentence.",
     example:"A: このホテルはえきからちかいです。そのうえ、ねだんもてごろです。\nB: よさそうですね。よやくしましょう。",
     exampleSrc:"A: This hotel is close to the station. Moreover, the price is reasonable.\nB: It sounds good. Let us make a reservation.",
     funFact:"その上 literally means 'on top of that.' It adds a POSITIVE point to an already positive statement, or a NEGATIVE point to a negative one. It does not mix positive and negative (use しかも for unexpected additions). In formal writing, そのうえ signals that the writer is building a cumulative case."},

    {type:"teach", trg:"さらに", src:"furthermore / in addition / even more", pos:"adv", gender:null,
     note:"Kanji: 更に. Adds emphasis to a progressive series.\nMore formal than そのうえ. Used in writing and speeches.",
     example:"A: にほんのじんこうはへりつづけています。さらに、こうれいかもすすんでいます。\nB: ふくごうてきなもんだいですね。",
     exampleSrc:"A: Japan's population continues to decline. Furthermore, aging is also progressing.\nB: It is a complex problem.",
     funFact:"更に uses 更 (renew/change/further). It implies each additional point intensifies the situation. さらに is more academic and impactful than そのうえ. News anchors use it to build dramatic tension: じしんにつづき、さらにつなみけいほうがはっぴょうされました (following the earthquake, furthermore a tsunami warning was issued)."},

    {type:"teach", trg:"しかも", src:"moreover / and yet / what is more", pos:"conj", gender:null,
     note:"Adds a surprising or impressive additional fact.\nCan follow both positive and negative statements.",
     example:"A: かれはにほんごがはなせます。しかも、かんじもにせんじいじょうよめます。\nB: すごいですね。",
     exampleSrc:"A: He can speak Japanese. What is more, he can read over 2,000 kanji.\nB: That is amazing.",
     funFact:"しかも adds a surprising twist. Unlike そのうえ (straightforward addition), しかも implies 'and would you believe it!' The surprise element makes it more dramatic. It works in both directions: positive (speaks Japanese, AND can read kanji!) and negative (expensive, AND bad quality!). This versatility makes it a favorite in storytelling."},

    {type:"teach", trg:"もっとも", src:"although / admittedly / however", pos:"conj", gender:null,
     note:"Concessive connector. Acknowledges a counterpoint after making a claim.\nFormerly: もっとも = most (superlative). As connector: admittedly.",
     example:"A: このレストランはおすすめです。もっとも、よやくがひつようですが。\nB: にんきのあるみせなんですね。",
     exampleSrc:"A: I recommend this restaurant. Admittedly, you need a reservation though.\nB: It must be a popular place.",
     funFact:"もっとも as a connector means 'I should add, however...' It introduces a minor qualification after a strong statement, showing balanced thinking. The speaker is not retracting their point but acknowledging a limitation. In academic writing, もっとも signals intellectual honesty: making a claim while noting its boundaries."},

    {type:"mc", q:"そのうえ is used to:", opts:["Add another point that strengthens the argument","Contradict the previous statement","Change the topic entirely","Ask a question"], ans:"Add another point that strengthens the argument",
     hint:"This connector adds a... fact in the same direction (positive to positive, or negative to negative)."},

    {type:"teach", trg:"つまり", src:"in other words / that is to say / basically", pos:"conj", gender:null,
     note:"Restates or summarizes a previous point more simply.\nUsed for clarification and conclusion.",
     example:"A: かれはまいにちはしって、ジムにもかよっています。つまり、うんどうがすきなんですね。\nB: けんこうてきなせいかつですね。",
     exampleSrc:"A: He runs every day and also goes to the gym. In other words, he likes exercise.\nB: That is a healthy lifestyle.",
     funFact:"つまり comes from つまる (to be clogged/blocked), metaphorically meaning 'to come down to / to boil down to.' It signals a summary or simplification. In lectures, つまり introduces the key takeaway. In arguments, it reframes the core point. The formal equivalent すなわち is used in academic writing, while つまり works in both speech and writing."},

    {type:"teach", trg:"いいかえれば", src:"in other words / to put it differently", pos:"conj", gender:null,
     note:"Kanji: 言い換えれば. いいかえる (to rephrase) + ば (if).\nMore formal than つまり.",
     example:"A: にほんはしまぐにです。いいかえれば、うみにかこまれたくにです。\nB: だからかいさんぶつがゆたかなんですね。",
     exampleSrc:"A: Japan is an island nation. In other words, it is a country surrounded by the sea.\nB: That is why it is rich in seafood.",
     funFact:"言い換えれば literally means 'if one rephrases it.' It signals that the following sentence says the same thing in different words. This explicit rephrasing is valued in Japanese communication, where indirect expression can sometimes leave meaning ambiguous. Teachers use it to ensure students understand: いいかえれば... to reformulate a difficult concept."},

    {type:"teach", trg:"てごろ", src:"reasonable (price) / affordable / handy", pos:"adj", gender:null,
     note:"な-adjective. Kanji: 手頃. てごろなねだん = reasonable price.\nて (hand) + ごろ (suitable/just right).",
     example:"A: このホテルはてごろなねだんでサービスもいいです。\nB: コスパがいいですね。",
     exampleSrc:"A: This hotel has reasonable prices and good service.\nB: It has good cost performance.",
     funFact:"手頃 literally means 'fits in the hand,' implying something of manageable size, price, or difficulty. てごろなレストラン (a reasonably priced restaurant) is a common recommendation. The related expression コスパがいい (good cost-performance, from English 'cost performance') is modern slang for value for money."},

    {type:"tip", title:"Connector Functions",
     text:"ADDING points:\nそのうえ = moreover (same direction)\nさらに = furthermore (escalating)\nしかも = what is more (surprising)\nそれに = besides (casual addition)\n\nRESTATING/CLARIFYING:\nつまり = in other words (summary)\nいいかえれば = to put it differently (rephrasing)\nすなわち = namely (formal, written)\n\nCONCEDING:\nもっとも = admittedly / although\nたしかに...しかし = certainly...but\n\nEach connector signals how your next point relates to the previous one. Using them correctly creates well-structured arguments."},

    {type:"teach", trg:"いじょうのことから", src:"from the above / based on the foregoing", pos:"conj", gender:null,
     note:"いじょう (above) + のことから (from the matter of). Formal conclusion marker.\nUsed in essays and presentations to introduce conclusions.",
     example:"A: いじょうのことから、このけいかくはじっこうすべきだとかんがえます。\nB: せっとくりょくのあるプレゼンでしたね。",
     exampleSrc:"A: Based on the above, I believe this plan should be carried out.\nB: That was a persuasive presentation.",
     funFact:"以上のことから is the standard conclusion opener in Japanese academic and business writing. It signals that everything before was evidence, and now comes the conclusion. JLPT reading passages frequently end with this pattern. Learning to recognize it helps you find the main argument in long texts."},

    {type:"teach", trg:"せっとくりょく", src:"persuasiveness / convincing power", pos:"noun", gender:null,
     note:"Kanji: 説得力. せっとく (persuasion) + りょく (power/force).\nせっとくりょくがある = to be persuasive.",
     example:"A: データにもとづいたしゅちょうはせっとくりょくがあります。\nB: かんじょうだけではひとをうごかせませんからね。",
     exampleSrc:"A: Claims based on data are persuasive.\nB: Because you cannot move people with emotions alone.",
     funFact:"説得力 is a highly valued quality in Japanese business and academia. 説 (explain) + 得 (obtain/convince) + 力 (power). A proposal with せっとくりょく is backed by data, logic, and clear presentation. Japanese presentations are judged not just on content but on how せっとくりょくのある (persuasive) the delivery is."},

    {type:"fb", s:"このホテルはえきからちかいです。{1}、ねだんもてごろです。\n(This hotel is close to the station. Moreover, the price is reasonable.)", a:"そのうえ", opts:["そのうえ","しかし","ところが","つまり"], sSrc:"This hotel is close to the station. Moreover, the price is reasonable.",
     hint:"The addition connector meaning 'on top of that,' adding another positive point."},

    {type:"mc", q:"しかも adds:", opts:["A surprising additional fact","A contradiction","A question","A conclusion"], ans:"A surprising additional fact",
     hint:"This connector means 'and would you believe it!' adding an impressive or unexpected point."},

    {type:"match", pairs:[{trg:"そのうえ",src:"moreover"},{trg:"さらに",src:"furthermore"},{trg:"つまり",src:"in other words"},{trg:"もっとも",src:"admittedly/although"}]},

    {type:"fb", s:"かれはにほんごがはなせます。{1}、かんじもにせんじよめます。\n(He speaks Japanese. What is more, he can read 2,000+ kanji.)", a:"しかも", opts:["しかも","しかし","したがって","そこで"], sSrc:"He speaks Japanese. What is more, he can read 2,000+ kanji.",
     hint:"The connector that adds a surprising or impressive additional fact."},

    {type:"mc", q:"いじょうのことから is used to:", opts:["Introduce a conclusion based on previous points","Start a new topic","Express disagreement","Ask for clarification"], ans:"Introduce a conclusion based on previous points",
     hint:"This formal phrase signals that everything before was evidence, and now the c... follows."}
  ]
};
export default BATCH5_L_1;
