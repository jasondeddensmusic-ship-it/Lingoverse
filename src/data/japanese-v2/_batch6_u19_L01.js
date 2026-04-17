// Batch 6 – Unit 19 (B1.2 Conditionals): Problem Solving & Advice
const BATCH6_L1 = {
  id:"jav2_u19l_b6_1", title:"相談(そうだん)とアドバイス", icon:"💡", xp:15, board:true,
  steps:[
    {type:"intro", title:"相談(そうだん)とアドバイス",
     desc:"Learn vocabulary for discussing problems and giving advice. Conditionals pair naturally with advice: if you do X, then Y will happen. Master practical problem-solving expressions.",
     goals:["Discuss problems and seek advice","Use conditional patterns for suggestions","Express worry and reassurance"]},

    {type:"teach", trg:"相談(そうだん)", src:"consultation / seeking advice", pos:"noun", gender:null,
     note:"相談(そうだん)する = to consult. 相談(そうだん)に乗(の)る = to give advice.\n相談(そうだん)窓口(まどぐち) = advice counter.",
     example:"A: ちょっと相談(そうだん)したいことがあるのですが。\nB: はい、どうしましたか？\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: I have something I would like to consult about.\nB: Yes, what is the matter?\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"相談(そうだん) culture is strong in Japan. Companies have 相談(そうだん)窓口(まどぐち) (consultation windows). Schools have スクールカウンセラー. The phrase 気軽(きがる)に相談(そうだん)してください (feel free to consult) appears on posters for mental health support lines."},

    {type:"teach", trg:"心配(しんぱい)", src:"worry / anxiety / concern", pos:"noun", gender:null,
     note:"心配(しんぱい)する = to worry.\n心配(しんぱい)しないで = don't worry.",
     example:"A: 試験(しけん)のことが心配(しんぱい)です。\nB: 心配(しんぱい)しないでください。準備(じゅんび)はできています。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: I am worried about the exam.\nB: Please don't worry. You are prepared.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"心配(しんぱい) (心配) combines 心 (heart) and 配 (distribute). Your heart is distributed/scattered with concern. ご心配(しんぱい)なく (please don't worry, polite) is a reassuring phrase. Japanese parents are famously 心配性(しんぱいしょう) (worriers), especially about children's education."},

    {type:"teach", trg:"困(こま)る", src:"to be troubled / in difficulty", pos:"verb", gender:null,
     note:"Group 1 verb. 困(こま)ったときは = when you are in trouble.\n困(こま)ったなあ = hmm, this is a problem.",
     example:"A: お金(かね)が足(た)りなくて困(こま)っています。\nB: いくら足(た)りないのですか？\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: I don't have enough money and I am in trouble.\nB: How much are you short?\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"困(こま)る is one of the most versatile expressions of difficulty. 困(こま)った顔(かお) (a troubled face), 困(こま)ったことに (unfortunately), 困(こま)ったちゃん (a troublesome person). The set phrase 困(こま)ったときはお互(たが)いさま (in times of trouble, we help each other) captures Japanese mutual aid values."},

    {type:"teach", trg:"直(なお)す", src:"to fix / to repair / to correct", pos:"verb", gender:null,
     note:"Group 1 verb. パソコンを直(なお)す = to fix a computer.\nAlso: 間違(まちが)いを直(なお)す = to correct a mistake.",
     example:"A: この椅子(いす)を直(なお)せますか？\nB: 見(み)てみましょう。たぶん直(なお)せます。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Can you fix this chair?\nB: Let me look at it. I can probably fix it.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"直(なお)す covers both physical repair and error correction. Japanese culture values ものを大切(たいせつ)にする (taking care of things) over discarding. 金継(きんつ)ぎ (金継ぎ, gold repair of broken pottery) elevates repair to art. The philosophy: breakage makes things more beautiful, not less."},

    {type:"teach", trg:"探(さが)す", src:"to search / to look for", pos:"verb", gender:null,
     note:"Group 1 verb. 仕事(しごと)を探(さが)す = to look for a job.",
     example:"A: 何(なに)を探(さが)していますか？\nB: 鍵(かぎ)を探(さが)しています。どこかに落(お)としました。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: What are you looking for?\nB: I am looking for my keys. I dropped them somewhere.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"探(さが)す applies to physical objects, jobs, apartments, and even people. 防災(ぼうさい)ネット (disaster network) helps 探(さが)す missing people after earthquakes. The phrase いい人(ひと)を探(さが)している (looking for a good person) refers to seeking a romantic partner."},

    {type:"mc", q:"困(こま)ったときは means:", opts:["When you are in trouble","When you are happy","When you are tired","When you are hungry"], ans:"When you are in trouble",
     hint:"困(こま)る means to be troubled, and とき means 'when.'"},

    {type:"teach", trg:"諦(あきら)める", src:"to give up / to abandon", pos:"verb", gender:null,
     note:"Group 2 verb. 夢(ゆめ)を諦(あきら)めないで = don't give up on your dream.",
     example:"A: 難(むずか)しいけど諦(あきら)めないでください。\nB: はい、もう少(すこ)し頑張(がんば)ります。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: It is difficult, but please don't give up.\nB: Okay, I will try a little more.\nA: How was it?\nB: It was very good.",
     funFact:"諦(あきら)める comes from Buddhist philosophy: 諦 means 'enlightened acceptance.' Originally, it meant understanding and accepting truth, not quitting. Modern usage shifted to 'give up.' The motivational phrase 諦(あきら)めなければ必(かなら)ずできる (if you don't give up, you will surely succeed) is everywhere in Japanese sports and education."},

    {type:"teach", trg:"選(えら)ぶ", src:"to choose / to select", pos:"verb", gender:null,
     note:"Group 1 verb. 一(ひと)つ選(えら)んでください = please choose one.",
     example:"A: どちらを選(えら)びますか？\nB: こちらにします。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Which one will you choose?\nB: I will go with this one.\nA: When was it?\nB: It was last summer.",
     funFact:"選(えら)ぶ is the verb behind 選択(せんたく) (selection/choice). In Japanese culture, having too many choices can cause 悩(なや)む (agonize). The phrase 二者択一(にしゃたくいつ) (choice between two) describes a dilemma. Japanese menus often solve this with セット (set meals) that reduce decision burden."},

    {type:"teach", trg:"助(たす)ける", src:"to help / to rescue", pos:"verb", gender:null,
     note:"Group 2 verb. 助(たす)けてください = please help me!",
     example:"A: だれか助(たす)けてください！\nB: 大丈夫(だいじょうぶ)ですか？何(なに)がありましたか？\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Somebody please help!\nB: Are you okay? What happened?\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"助(たす)けて！(Help!) is the emergency cry in Japanese. 助(たす)け合(あ)う (to help each other) is a fundamental Japanese value. After the 2011 earthquake, the world admired Japan's mutual aid (共助(きょうじょ)). The word 助(たす)け (help) appears in ことわざ (proverbs): 天(てん)は自(みずか)ら助(たす)くる者(もの)を助(たす)く (heaven helps those who help themselves)."},

    {type:"teach", trg:"慣(な)れる", src:"to get used to / to become accustomed", pos:"verb", gender:null,
     note:"Group 2 verb. 日本(にほん)の生活(せいかつ)に慣(な)れる = to get used to life in Japan.",
     example:"A: 日本(にほん)の食事(しょくじ)に慣(な)れましたか？\nB: はい、もう慣(な)れました。納豆(なっとう)も食(た)べられます。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Have you gotten used to Japanese food?\nB: Yes, I am used to it now. I can even eat natto.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"慣(な)れる is a survival word for anyone living abroad. 慣(な)れるまで大変(たいへん) (it is tough until you get used to it) is comforting advice. The phrase 住(す)めば都(みやこ) (wherever you live becomes your capital/home) expresses that you will eventually 慣(な)れる to any place."},

    {type:"fb", s:"夢(ゆめ)を{1}ないでください。\n(Please don't give up on your dream.)", a:"あきらめ", opts:["あきらめ","えらば","さがさ","なおさ"], sSrc:"Please don't give up on your dream.",
     hint:"The negative form of the verb meaning to give up or abandon."},

    {type:"teach", trg:"見(み)つける", src:"to find / to discover", pos:"verb", gender:null,
     note:"Group 2 verb. 答(こた)えを見(み)つける = to find the answer.",
     example:"A: やっと鍵(かぎ)を見(み)つけました。\nB: よかったですね！どこにありましたか？\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I finally found my keys.\nB: Great! Where were they?\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"見(み)つける (find) pairs with 探(さが)す (search): 探(さが)して見(み)つける (search and find). 見(み)つかる (intransitive: to be found) is the passive counterpart: 鍵(かぎ)が見(み)つかった (the keys were found). In job hunting, 仕事(しごと)が見(み)つかる (finding work) is the desired outcome of 仕事(しごと)を探(さが)す."},

    {type:"teach", trg:"勧(すす)める", src:"to recommend / to advise", pos:"verb", gender:null,
     note:"Group 2 verb. おすすめ = recommendation.",
     example:"A: 何(なに)かおすすめはありますか？\nB: この本(ほん)をおすすめします。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Do you have any recommendations?\nB: I recommend this book.\nA: How long did it take?\nB: About two hours.",
     funFact:"おすすめ is everywhere in Japanese commerce: おすすめメニュー (recommended menu items), おすすめ商品(しょうひん) (recommended products), スタッフのおすすめ (staff picks). The humble suggestion form 勧(すす)める softens advice. Rather than commanding, Japanese culture prefers 勧(すす)める (gently recommending)."},

    {type:"mc", q:"慣(な)れる means:", opts:["To get used to something","To give up","To find","To fix"], ans:"To get used to something",
     hint:"This verb describes the process of becoming accustomed to a new situation."},

    {type:"match", pairs:[
      {trg:"相談(そうだん)", src:"consultation"},
      {trg:"心配(しんぱい)", src:"worry"},
      {trg:"諦(あきら)める", src:"to give up"},
      {trg:"助(たす)ける", src:"to help / rescue"},
      {trg:"勧(すす)める", src:"to recommend"}
    ]},

    {type:"fb", s:"日本(にほん)の生活(せいかつ)に{1}ましたか？\n(Have you gotten used to life in Japan?)", a:"なれ", opts:["なれ","なり","なおし","みつけ"], sSrc:"Have you gotten used to life in Japan?",
     hint:"The past polite form of the verb meaning to become accustomed."},

    {type:"mc", q:"おすすめ means:", opts:["A recommendation","A problem","A complaint","An apology"], ans:"A recommendation",
     hint:"You see this word on menus and in shops when staff suggest their best items."}
  ]
};
export default BATCH6_L1;
