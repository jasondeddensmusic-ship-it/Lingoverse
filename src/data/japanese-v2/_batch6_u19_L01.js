// Batch 6 – Unit 19 (B1.2 Conditionals): Problem Solving & Advice
const BATCH6_L1 = {
  id:"jav2_u19l_b6_1", title:"そうだんとアドバイス", icon:"💡", xp:15, board:true,
  steps:[
    {type:"intro", title:"そうだんとアドバイス",
     desc:"Learn vocabulary for discussing problems and giving advice. Conditionals pair naturally with advice: if you do X, then Y will happen. Master practical problem-solving expressions.",
     goals:["Discuss problems and seek advice","Use conditional patterns for suggestions","Express worry and reassurance"]},

    {type:"teach", trg:"そうだん", src:"consultation / seeking advice", pos:"noun", gender:null,
     note:"Kanji: 相談. そうだんする = to consult. そうだんにのる = to give advice.\nそうだんまどぐち = advice counter.",
     example:"A: ちょっとそうだんしたいことがあるのですが。\nB: はい、どうしましたか？\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: I have something I would like to consult about.\nB: Yes, what is the matter?\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"そうだん culture is strong in Japan. Companies have そうだんまどぐち (consultation windows). Schools have スクールカウンセラー. The phrase きがるにそうだんしてください (feel free to consult) appears on posters for mental health support lines."},

    {type:"teach", trg:"しんぱい", src:"worry / anxiety / concern", pos:"noun", gender:null,
     note:"Kanji: 心配. しんぱいする = to worry.\nしんぱいしないで = don't worry.",
     example:"A: しけんのことがしんぱいです。\nB: しんぱいしないでください。じゅんびはできています。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: I am worried about the exam.\nB: Please don't worry. You are prepared.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"しんぱい (心配) combines 心 (heart) and 配 (distribute). Your heart is distributed/scattered with concern. ごしんぱいなく (please don't worry, polite) is a reassuring phrase. Japanese parents are famously しんぱいしょう (worriers), especially about children's education."},

    {type:"teach", trg:"こまる", src:"to be troubled / in difficulty", pos:"verb", gender:null,
     note:"Group 1 verb. こまったときは = when you are in trouble.\nKanji: 困る. こまったなあ = hmm, this is a problem.",
     example:"A: おかねがたりなくてこまっています。\nB: いくらたりないのですか？\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: I don't have enough money and I am in trouble.\nB: How much are you short?\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"こまる is one of the most versatile expressions of difficulty. こまったかお (a troubled face), こまったことに (unfortunately), こまったちゃん (a troublesome person). The set phrase こまったときはおたがいさま (in times of trouble, we help each other) captures Japanese mutual aid values."},

    {type:"teach", trg:"なおす", src:"to fix / to repair / to correct", pos:"verb", gender:null,
     note:"Group 1 verb. パソコンをなおす = to fix a computer.\nKanji: 直す. Also: まちがいをなおす = to correct a mistake.",
     example:"A: このいすをなおせますか？\nB: みてみましょう。たぶんなおせます。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Can you fix this chair?\nB: Let me look at it. I can probably fix it.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"なおす covers both physical repair and error correction. Japanese culture values ものをたいせつにする (taking care of things) over discarding. きんつぎ (金継ぎ, gold repair of broken pottery) elevates repair to art. The philosophy: breakage makes things more beautiful, not less."},

    {type:"teach", trg:"さがす", src:"to search / to look for", pos:"verb", gender:null,
     note:"Group 1 verb. しごとをさがす = to look for a job.\nKanji: 探す.",
     example:"A: なにをさがしていますか？\nB: かぎをさがしています。どこかにおとしました。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: What are you looking for?\nB: I am looking for my keys. I dropped them somewhere.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"さがす applies to physical objects, jobs, apartments, and even people. ぼうさいネット (disaster network) helps さがす missing people after earthquakes. The phrase いいひとをさがしている (looking for a good person) refers to seeking a romantic partner."},

    {type:"mc", q:"こまったときは means:", opts:["When you are in trouble","When you are happy","When you are tired","When you are hungry"], ans:"When you are in trouble",
     hint:"こまる means to be troubled, and とき means 'when.'"},

    {type:"teach", trg:"あきらめる", src:"to give up / to abandon", pos:"verb", gender:null,
     note:"Group 2 verb. ゆめをあきらめないで = don't give up on your dream.\nKanji: 諦める.",
     example:"A: むずかしいけどあきらめないでください。\nB: はい、もうすこしがんばります。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: It is difficult, but please don't give up.\nB: Okay, I will try a little more.\nA: How was it?\nB: It was very good.",
     funFact:"あきらめる comes from Buddhist philosophy: 諦 means 'enlightened acceptance.' Originally, it meant understanding and accepting truth, not quitting. Modern usage shifted to 'give up.' The motivational phrase あきらめなければかならずできる (if you don't give up, you will surely succeed) is everywhere in Japanese sports and education."},

    {type:"teach", trg:"えらぶ", src:"to choose / to select", pos:"verb", gender:null,
     note:"Group 1 verb. ひとつえらんでください = please choose one.\nKanji: 選ぶ.",
     example:"A: どちらをえらびますか？\nB: こちらにします。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Which one will you choose?\nB: I will go with this one.\nA: When was it?\nB: It was last summer.",
     funFact:"えらぶ is the verb behind せんたく (選択, selection/choice). In Japanese culture, having too many choices can cause なやむ (agonize). The phrase にしゃたくいつ (二者択一, choice between two) describes a dilemma. Japanese menus often solve this with セット (set meals) that reduce decision burden."},

    {type:"teach", trg:"たすける", src:"to help / to rescue / pos:", pos:"verb", gender:null,
     note:"Group 2 verb. たすけてください = please help me!\nKanji: 助ける.",
     example:"A: だれかたすけてください！\nB: だいじょうぶですか？なにがありましたか？\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Somebody please help!\nB: Are you okay? What happened?\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"たすけて！(Help!) is the emergency cry in Japanese. たすけあう (to help each other) is a fundamental Japanese value. After the 2011 earthquake, the world admired Japan's mutual aid (きょうじょ). The word たすけ (help) appears in ことわざ (proverbs): てんはみずからたすくるものをたすく (heaven helps those who help themselves)."},

    {type:"teach", trg:"なれる", src:"to get used to / to become accustomed", pos:"verb", gender:null,
     note:"Group 2 verb. にほんのせいかつになれる = to get used to life in Japan.\nKanji: 慣れる.",
     example:"A: にほんのしょくじになれましたか？\nB: はい、もうなれました。なっとうもたべられます。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Have you gotten used to Japanese food?\nB: Yes, I am used to it now. I can even eat natto.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"なれる is a survival word for anyone living abroad. なれるまでたいへん (it is tough until you get used to it) is comforting advice. The phrase すめばみやこ (wherever you live becomes your capital/home) expresses that you will eventually なれる to any place."},

    {type:"fb", s:"ゆめを{1}ないでください。\n(Please don't give up on your dream.)", a:"あきらめ", opts:["あきらめ","えらば","さがさ","なおさ"], sSrc:"Please don't give up on your dream.",
     hint:"The negative form of the verb meaning to give up or abandon."},

    {type:"teach", trg:"みつける", src:"to find / to discover", pos:"verb", gender:null,
     note:"Group 2 verb. こたえをみつける = to find the answer.\nKanji: 見つける.",
     example:"A: やっとかぎをみつけました。\nB: よかったですね！どこにありましたか？\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I finally found my keys.\nB: Great! Where were they?\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"みつける (find) pairs with さがす (search): さがしてみつける (search and find). みつかる (intransitive: to be found) is the passive counterpart: かぎがみつかった (the keys were found). In job hunting, しごとがみつかる (finding work) is the desired outcome of しごとをさがす."},

    {type:"teach", trg:"すすめる", src:"to recommend / to advise", pos:"verb", gender:null,
     note:"Group 2 verb. おすすめ = recommendation.\nKanji: 勧める/薦める.",
     example:"A: なにかおすすめはありますか？\nB: このほんをおすすめします。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Do you have any recommendations?\nB: I recommend this book.\nA: How long did it take?\nB: About two hours.",
     funFact:"おすすめ is everywhere in Japanese commerce: おすすめメニュー (recommended menu items), おすすめしょうひん (recommended products), スタッフのおすすめ (staff picks). The humble suggestion form すすめる softens advice. Rather than commanding, Japanese culture prefers すすめる (gently recommending)."},

    {type:"mc", q:"なれる means:", opts:["To get used to something","To give up","To find","To fix"], ans:"To get used to something",
     hint:"This verb describes the process of becoming accustomed to a new situation."},

    {type:"match", pairs:[
      {trg:"そうだん", src:"consultation"},
      {trg:"しんぱい", src:"worry"},
      {trg:"あきらめる", src:"to give up"},
      {trg:"たすける", src:"to help / rescue"},
      {trg:"すすめる", src:"to recommend"}
    ]},

    {type:"fb", s:"にほんのせいかつに{1}ましたか？\n(Have you gotten used to life in Japan?)", a:"なれ", opts:["なれ","なり","なおし","みつけ"], sSrc:"Have you gotten used to life in Japan?",
     hint:"The past polite form of the verb meaning to become accustomed."},

    {type:"mc", q:"おすすめ means:", opts:["A recommendation","A problem","A complaint","An apology"], ans:"A recommendation",
     hint:"You see this word on menus and in shops when staff suggest their best items."}
  ]
};
export default BATCH6_L1;
