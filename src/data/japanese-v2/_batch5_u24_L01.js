// Unit 24 Batch 5 Lesson 1: 付加(ふか)のつなぎ (Addition & Emphasis Connectors)
const BATCH5_L_1 = {
  id:"jav2_u24l_b5_1", title:"付加(ふか)のつなぎ", icon:"➕", xp:15, board:true,
  steps:[
    {type:"intro", title:"付加(ふか)のつなぎ",
     desc:"Build complex arguments with addition and emphasis connectors. そのうえ (moreover), それに (besides), さらに (furthermore), and もっとも (although/admittedly). These connectors transform simple observations into layered, persuasive arguments essential for B1+ discourse.",
     goals:["Use そのうえ, さらに for adding points","Use もっとも for concession","Build multi-point arguments with connectors"]},

    {type:"teach", trg:"そのうえ", src:"moreover / on top of that / besides", pos:"conj", gender:null,
     note:"Kanji: その上(うえ). Adds another point to strengthen an argument.\nUsed at the start of a new sentence.",
     example:"A: このホテルは駅(えき)から近(ちか)いです。そのうえ、値段(ねだん)も手頃(てごろ)です。\nB: よさそうですね。予約(よやく)しましょう。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: This hotel is close to the station. Moreover, the price is reasonable.\nB: It sounds good. Let us make a reservation.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"その上(うえ) literally means 'on top of that.' It adds a POSITIVE point to an already positive statement, or a NEGATIVE point to a negative one. It does not mix positive and negative (use しかも for unexpected additions). In formal writing, そのうえ signals that the writer is building a cumulative case."},

    {type:"teach", trg:"さらに", src:"furthermore / in addition / even more", pos:"adv", gender:null,
     note:"Kanji: 更(さら)に. Adds emphasis to a progressive series.\nMore formal than そのうえ. Used in writing and speeches.",
     example:"A: 日本(にほん)の人口(じんこう)は減(へ)り続(つづ)けています。さらに、高齢化(こうれいか)も進(すす)んでいます。\nB: 複合的(ふくごうてき)な問題(もんだい)ですね。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Japan's population continues to decline. Furthermore, aging is also progressing.\nB: It is a complex problem.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"更(さら)に uses 更(さら) (renew/change/further). It implies each additional point intensifies the situation. さらに is more academic and impactful than そのうえ. News anchors use it to build dramatic tension: 地震(じしん)に続(つづ)き、さらに津波(つなみ)警報(けいほう)が発表(はっぴょう)されました (following the earthquake, furthermore a tsunami warning was issued)."},

    {type:"teach", trg:"しかも", src:"moreover / and yet / what is more", pos:"conj", gender:null,
     note:"Adds a surprising or impressive additional fact.\nCan follow both positive and negative statements.",
     example:"A: 彼(かれ)は日本語(にほんご)が話(はな)せます。しかも、漢字(かんじ)も二千字(にせんじ)以上(いじょう)読(よ)めます。\nB: すごいですね。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: He can speak Japanese. What is more, he can read over 2,000 kanji.\nB: That is amazing.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"しかも adds a surprising twist. Unlike そのうえ (straightforward addition), しかも implies 'and would you believe it!' The surprise element makes it more dramatic. It works in both directions: positive (speaks Japanese, AND can read kanji!) and negative (expensive, AND bad quality!). This versatility makes it a favorite in storytelling."},

    {type:"teach", trg:"もっとも", src:"although / admittedly / however", pos:"conj", gender:null,
     note:"Concessive connector. Acknowledges a counterpoint after making a claim.\nFormerly: もっとも = most (superlative). As connector: admittedly.",
     example:"A: このレストランはおすすめです。もっとも、予約(よやく)が必要(ひつよう)ですが。\nB: 人気(にんき)のある店(みせ)なんですね。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: I recommend this restaurant. Admittedly, you need a reservation though.\nB: It must be a popular place.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"もっとも as a connector means 'I should add, however...' It introduces a minor qualification after a strong statement, showing balanced thinking. The speaker is not retracting their point but acknowledging a limitation. In academic writing, もっとも signals intellectual honesty: making a claim while noting its boundaries."},

    {type:"mc", q:"そのうえ is used to:", opts:["Add another point that strengthens the argument","Contradict the previous statement","Change the topic entirely","Ask a question"], ans:"Add another point that strengthens the argument",
     hint:"This connector adds a... fact in the same direction (positive to positive, or negative to negative)."},

    {type:"teach", trg:"つまり", src:"in other words / that is to say / basically", pos:"conj", gender:null,
     note:"Restates or summarizes a previous point more simply.\nUsed for clarification and conclusion.",
     example:"A: 彼(かれ)は毎日(まいにち)走(はし)って、ジムにも通(かよ)っています。つまり、運動(うんどう)が好(す)きなんですね。\nB: 健康的(けんこうてき)な生活(せいかつ)ですね。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: He runs every day and also goes to the gym. In other words, he likes exercise.\nB: That is a healthy lifestyle.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"つまり comes from つまる (to be clogged/blocked), metaphorically meaning 'to come down to / to boil down to.' It signals a summary or simplification. In lectures, つまり introduces the key takeaway. In arguments, it reframes the core point. The formal equivalent すなわち is used in academic writing, while つまり works in both speech and writing."},

    {type:"teach", trg:"言(い)い換(か)えれば", src:"in other words / to put it differently", pos:"conj", gender:null,
     note:"Kanji: 言(い)い換(か)えれば. 言(い)い換(か)える (to rephrase) + ば (if).\nMore formal than つまり.",
     example:"A: 日本(にほん)は島国(しまぐに)です。言(い)い換(か)えれば、海(うみ)に囲(かこ)まれた国(くに)です。\nB: だから海産物(かいさんぶつ)が豊(ゆた)かなんですね。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Japan is an island nation. In other words, it is a country surrounded by the sea.\nB: That is why it is rich in seafood.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"言(い)い換(か)えれば literally means 'if one rephrases it.' It signals that the following sentence says the same thing in different words. This explicit rephrasing is valued in Japanese communication, where indirect expression can sometimes leave meaning ambiguous. Teachers use it to ensure students understand: 言(い)い換(か)えれば... to reformulate a difficult concept."},

    {type:"teach", trg:"手頃(てごろ)", src:"reasonable (price) / affordable / handy", pos:"adj", gender:null,
     note:"な-adjective. Kanji: 手頃(てごろ). 手頃(てごろ)な値段(ねだん) = reasonable price.\n手(て) (hand) + ごろ (suitable/just right).",
     example:"A: このホテルは手頃(てごろ)な値段(ねだん)でサービスもいいです。\nB: コスパがいいですね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: This hotel has reasonable prices and good service.\nB: It has good cost performance.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"手頃(てごろ) literally means 'fits in the hand,' implying something of manageable size, price, or difficulty. 手頃(てごろ)なレストラン (a reasonably priced restaurant) is a common recommendation. The related expression コスパがいい (good cost-performance, from English 'cost performance') is modern slang for value for money."},

    {type:"tip", title:"Connector Functions",
     text:"ADDING points:\nそのうえ = moreover (same direction)\nさらに = furthermore (escalating)\nしかも = what is more (surprising)\nそれに = besides (casual addition)\n\nRESTATING/CLARIFYING:\nつまり = in other words (summary)\n言(い)い換(か)えれば = to put it differently (rephrasing)\nすなわち = namely (formal, written)\n\nCONCEDING:\nもっとも = admittedly / although\nたしかに...しかし = certainly...but\n\nEach connector signals how your next point relates to the previous one. Using them correctly creates well-structured arguments."},

    {type:"teach", trg:"以上(いじょう)のことから", src:"from the above / based on the foregoing", pos:"conj", gender:null,
     note:"以上(いじょう) (above) + のことから (from the matter of). Formal conclusion marker.\nUsed in essays and presentations to introduce conclusions.",
     example:"A: 以上(いじょう)のことから、この計画(けいかく)は実行(じっこう)すべきだと考(かんが)えます。\nB: 説得力(せっとくりょく)のあるプレゼンでしたね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Based on the above, I believe this plan should be carried out.\nB: That was a persuasive presentation.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"以上(いじょう)のことから is the standard conclusion opener in Japanese academic and business writing. It signals that everything before was evidence, and now comes the conclusion. JLPT reading passages frequently end with this pattern. Learning to recognize it helps you find the main argument in long texts."},

    {type:"teach", trg:"説得力(せっとくりょく)", src:"persuasiveness / convincing power", pos:"noun", gender:null,
     note:"Kanji: 説得力(せっとくりょく). 説得(せっとく) (persuasion) + 力(りょく) (power/force).\n説得力(せっとくりょく)がある = to be persuasive.",
     example:"A: データに基(もと)づいた主張(しゅちょう)は説得力(せっとくりょく)があります。\nB: 感情(かんじょう)だけでは人(ひと)を動(うご)かせませんからね。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Claims based on data are persuasive.\nB: Because you cannot move people with emotions alone.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"説得力(せっとくりょく) is a highly valued quality in Japanese business and academia. 説(せつ) (explain) + 得(とく) (obtain/convince) + 力(りょく) (power). A proposal with 説得力(せっとくりょく) is backed by data, logic, and clear presentation. Japanese presentations are judged not just on content but on how 説得力(せっとくりょく)のある (persuasive) the delivery is."},

    {type:"fb", s:"このホテルは駅(えき)から近(ちか)いです。{1}、値段(ねだん)も手頃(てごろ)です。\n(This hotel is close to the station. Moreover, the price is reasonable.)", a:"そのうえ", opts:["そのうえ","しかし","ところが","つまり"], sSrc:"This hotel is close to the station. Moreover, the price is reasonable.",
     hint:"The addition connector meaning 'on top of that,' adding another positive point."},

    {type:"mc", q:"しかも adds:", opts:["A surprising additional fact","A contradiction","A question","A conclusion"], ans:"A surprising additional fact",
     hint:"This connector means 'and would you believe it!' adding an impressive or unexpected point."},

    {type:"match", pairs:[{trg:"そのうえ",src:"moreover"},{trg:"さらに",src:"furthermore"},{trg:"つまり",src:"in other words"},{trg:"もっとも",src:"admittedly/although"}]},

    {type:"fb", s:"彼(かれ)は日本語(にほんご)が話(はな)せます。{1}、漢字(かんじ)も二千字(にせんじ)読(よ)めます。\n(He speaks Japanese. What is more, he can read 2,000+ kanji.)", a:"しかも", opts:["しかも","しかし","したがって","そこで"], sSrc:"He speaks Japanese. What is more, he can read 2,000+ kanji.",
     hint:"The connector that adds a surprising or impressive additional fact."},

    {type:"mc", q:"以上(いじょう)のことから is used to:", opts:["Introduce a conclusion based on previous points","Start a new topic","Express disagreement","Ask for clarification"], ans:"Introduce a conclusion based on previous points",
     hint:"This formal phrase signals that everything before was evidence, and now the c... follows."}
  ]
};
export default BATCH5_L_1;
