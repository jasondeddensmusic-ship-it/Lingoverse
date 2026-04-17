// Batch 8 – Unit 21 (B1.2 Society): Social Issues Vocabulary
const BATCH8_L1 = {
  id:"jav2_u21l_b8_1", title:"社会(しゃかい)問題(もんだい)", icon:"🏘️", xp:15, board:true,
  steps:[
    {type:"intro", title:"社会(しゃかい)問題(もんだい)",
     desc:"Learn vocabulary for discussing social issues affecting modern Japan. These words appear frequently in news, conversations, and JLPT N2 reading passages.",
     goals:["Discuss aging society and population decline","Talk about work-life balance issues","Express opinions on social challenges"]},

    {type:"teach", trg:"高齢化(こうれいか)", src:"aging (of society)", pos:"noun", gender:null,
     note:"Kanji: 高齢化. 高齢化(こうれいか)社会(しゃかい) = aging society.\nJapan's biggest demographic challenge.",
     example:"A: 日本(にほん)の高齢化(こうれいか)は進(すす)んでいます。\nB: 介護(かいご)の問題(もんだい)が増(ふ)えていますね。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Japan's aging is advancing.\nB: Elderly care problems are increasing.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"Japan has the world's oldest population: about 29% are over 65. 高齢化(こうれいか)社会(しゃかい) describes a society where seniors form a growing share. The term 超(ちょう)高齢化(こうれいか)社会(しゃかい) (super-aged society) was coined for Japan. This drives debates about 年金(ねんきん) (pensions), 介護(かいご) (care), and 医療費(いりょうひ) (medical costs)."},

    {type:"teach", trg:"少子化(しょうしか)", src:"declining birthrate", pos:"noun", gender:null,
     note:"Kanji: 少子化. 少子(しょうし)高齢化(こうれいか) = declining births + aging population.\nThe twin crisis.",
     example:"A: 少子化(しょうしか)が続(つづ)いています。\nB: 子育(こそだ)て支援(しえん)が必要(ひつよう)ですね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: The declining birthrate continues.\nB: Child-raising support is needed.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"Japan's birthrate is about 1.2 children per woman, far below replacement level. 少子化(しょうしか) is driven by late marriage, high costs of 子育(こそだ)て (child-raising), and changing values. The government offers 少子化(しょうしか)対策(たいさく) (countermeasures) including subsidies, but the trend continues. By 2050, Japan's population may drop below 100 million."},

    {type:"teach", trg:"過労死(かろうし)", src:"death from overwork", pos:"noun", gender:null,
     note:"Kanji: 過労死. A word that entered global vocabulary.\n過労死(かろうし)ライン = overwork threshold (80+ hours overtime/month).",
     example:"A: 過労死(かろうし)を防(ふせ)ぐために働(はたら)き方(かた)を変(か)えなければなりません。\nB: 残業(ざんぎょう)を減(へ)らすべきですね。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: We must change how we work to prevent death from overwork.\nB: We should reduce overtime.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"過労死(かろうし) is internationally recognized as a Japanese term. It describes death (from stroke, heart attack, or suicide) caused by excessive work. Japan officially recognized 過労死(かろうし) in the 1980s. The government set 80 hours of monthly overtime as the 過労死(かろうし)ライン (danger line). 働(はたら)き方(かた)改革(かいかく) (work-style reform) laws aim to prevent it."},

    {type:"teach", trg:"働(はたら)き方(かた)改革(かいかく)", src:"work-style reform", pos:"noun", gender:null,
     note:"Government initiative since 2018 to improve work conditions.\n残業(ざんぎょう)上限(じょうげん) = overtime cap.",
     example:"A: 働(はたら)き方(かた)改革(かいかく)で残業(ざんぎょう)が減(へ)りました。\nB: いいことですね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Work-style reform reduced overtime.\nB: That is a good thing.\nA: How long did it take?\nB: About two hours.",
     funFact:"働(はたら)き方(かた)改革(かいかく) became law in 2019, capping overtime at 45 hours/month. It promotes 有給(ゆうきゅう)休暇(きゅうか) (paid leave), テレワーク (remote work), and フレックスタイム (flex time). Adoption varies: large companies comply, but small businesses and traditional industries struggle to change deeply rooted work culture."},

    {type:"teach", trg:"引(ひ)きこもり", src:"social withdrawal / shut-in", pos:"noun", gender:null,
     note:"People who withdraw from society, staying home for months or years.\nKanji: 引きこもり.",
     example:"A: 引(ひ)きこもりの問題(もんだい)は複雑(ふくざつ)です。\nB: 家族(かぞく)へのサポートも必要(ひつよう)ですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: The hikikomori problem is complex.\nB: Support for families is also needed.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"An estimated 1.5 million Japanese people are 引(ひ)きこもり, including many middle-aged adults (8050問題(もんだい): 80-year-old parents supporting 50-year-old children). Causes include いじめ (bullying), work stress, and social pressure. Japan has specialized support centers, but stigma prevents many from seeking help."},

    {type:"mc", q:"What does 少子(しょうし)高齢化(こうれいか) describe?", opts:["The twin crisis of declining births and aging population","A new education policy","Economic growth strategy","Environmental protection"], ans:"The twin crisis of declining births and aging population",
     hint:"This compound term captures Japan's two most pressing demographic challenges."},

    {type:"teach", trg:"格差(かくさ)", src:"gap / disparity / inequality", pos:"noun", gender:null,
     note:"Kanji: 格差. 経済(けいざい)格差(かくさ) = economic disparity.\n格差(かくさ)社会(しゃかい) = unequal society.",
     example:"A: 所得(しょとく)格差(かくさ)が広(ひろ)がっています。\nB: セーフティネットが重要(じゅうよう)です。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Income disparity is widening.\nB: Safety nets are important.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"格差(かくさ)社会(しゃかい) (disparity society) became a buzzword in 2006. Japan, once proud of its middle-class society (一億(いちおく)総(そう)中流(ちゅうりゅう), 100 million all middle-class), now faces growing 教育(きょういく)格差(かくさ) (education gap), 地域(ちいき)格差(かくさ) (regional gap), and 世代間(せだいかん)格差(かくさ) (generational gap)."},

    {type:"teach", trg:"いじめ", src:"bullying", pos:"noun", gender:null,
     note:"Kanji: いじめ. 学校(がっこう)いじめ = school bullying.\nネットいじめ = cyberbullying.",
     example:"A: いじめを絶対(ぜったい)に許(ゆる)しません。\nB: 早(はや)く気(き)づくことが大切(たいせつ)です。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: We absolutely will not tolerate bullying.\nB: Noticing it early is important.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"いじめ is a serious social issue in Japan. Schools track いじめ認知(にんち)件数(けんすう) (recognized bullying cases). Types include 無視(むし) (ignoring), 仲間(なかま)外(はず)れ (exclusion), and ネットいじめ (cyberbullying via LINE and SNS). Japan has いじめ防止(ぼうし)対策(たいさく)推進(すいしん)法(ほう) (Anti-Bullying Law) since 2013."},

    {type:"teach", trg:"ジェンダー", src:"gender", pos:"noun", gender:null,
     note:"Loanword. ジェンダー平等(びょうどう) = gender equality.\nジェンダーギャップ指数(しすう) = Gender Gap Index.",
     example:"A: 日本(にほん)のジェンダーギャップはまだ大(おお)きいです。\nB: 改善(かいぜん)が必要(ひつよう)ですね。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Japan's gender gap is still large.\nB: Improvement is necessary.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"Japan ranks consistently low on the World Economic Forum's Gender Gap Index (around 120th out of 146 countries). The gap is largest in 政治(せいじ) (politics) and 経済(けいざい) (economics). Women make up only about 10% of national parliament. 女性(じょせい)活躍(かつやく)推進(すいしん)法(ほう) (Women's Active Participation Law) aims to increase female leadership."},

    {type:"teach", trg:"多様(たよう)", src:"diversity", pos:"noun", gender:null,
     note:"Kanji: 多様. 多様性(たようせい) = diversity.\n多様(たよう)な価値観(かちかん) = diverse values.",
     example:"A: 多様性(たようせい)を認(みと)める社会(しゃかい)が必要(ひつよう)です。\nB: 違(ちが)いを尊重(そんちょう)しましょう。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: A society that recognizes diversity is necessary.\nB: Let us respect differences.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"多様性(たようせい) (diversity) has become a major topic in Japanese business and education. ダイバーシティ (diversity, loanword) appears in corporate goals. Japan's historical homogeneity makes 多様性(たようせい) discussions complex. Increasing foreign residents, LGBTQ+ visibility, and disability inclusion are driving change."},

    {type:"teach", trg:"ボランティア", src:"volunteer / volunteering", pos:"noun", gender:null,
     note:"Loanword. ボランティア活動(かつどう) = volunteer activities.\nEarthquake relief volunteering is common.",
     example:"A: 週末(しゅうまつ)にボランティアをしています。\nB: どんな活動(かつどう)ですか？\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: I volunteer on weekends.\nB: What kind of activities?\nA: Do you go often?\nB: I go about once a month.",
     funFact:"ボランティア culture grew dramatically after the 1995 Kobe earthquake and 2011 Tohoku disaster. Japan's ボランティア元年(がんねん) (volunteer year one) was 1995. Young people increasingly do ボランティア for social issues, elderly care, and child support. School ボランティア hours are sometimes required."},

    {type:"fb", s:"日本(にほん)の{1}は進(すす)んでいます。\n(Japan's aging is advancing.)", a:"高齢化(こうれいか)", opts:["高齢化(こうれいか)","少子化(しょうしか)","格差(かくさ)","引(ひ)きこもり"], sSrc:"Japan's aging is advancing.",
     hint:"This word specifically describes the increase of elderly people in the population."},

    {type:"teach", trg:"共生(きょうせい)社会(しゃかい)", src:"inclusive society / society of coexistence", pos:"noun", gender:null,
     note:"共生(きょうせい) (coexistence) + 社会(しゃかい) (society).\nA policy goal in Japan.",
     example:"A: 共生(きょうせい)社会(しゃかい)の実現(じつげん)を目指(めざ)しています。\nB: 誰(だれ)もが暮(く)らしやすい社会(しゃかい)ですね。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: We aim to realize an inclusive society.\nB: A society where everyone can live comfortably.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"共生(きょうせい)社会(しゃかい) is a government policy vision where people of different backgrounds, abilities, and ages live together harmoniously. It encompasses barrier-free design, multicultural coexistence (多文化(たぶんか)共生(きょうせい)), and disability inclusion. The concept reflects Japan adapting to increasing diversity."},

    {type:"teach", trg:"福祉(ふくし)", src:"welfare / social services", pos:"noun", gender:null,
     note:"Kanji: 福祉. 社会(しゃかい)福祉(ふくし) = social welfare.\n福祉士(ふくしし) = social worker.",
     example:"A: 福祉(ふくし)サービスを利用(りよう)していますか？\nB: はい、介護(かいご)サービスを受(う)けています。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Are you using welfare services?\nB: Yes, I am receiving care services.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"Japan's 福祉(ふくし) system includes 介護(かいご)保険(ほけん) (long-term care insurance), 障害者(しょうがいしゃ)福祉(ふくし) (disability welfare), and 児童(じどう)福祉(ふくし) (child welfare). The 介護(かいご)保険(ほけん) system, started in 2000, is used by millions of elderly. 福祉(ふくし) spending represents a growing portion of Japan's national budget."},

    {type:"match", pairs:[{trg:"高齢化(こうれいか)",src:"aging society"},{trg:"少子化(しょうしか)",src:"declining birthrate"},{trg:"過労死(かろうし)",src:"death from overwork"},{trg:"引(ひ)きこもり",src:"social withdrawal"},{trg:"いじめ",src:"bullying"}],
     hint:"Match each social issue term with its English meaning."},

    {type:"mc", q:"What is the 過労死(かろうし)ライン?", opts:["80 hours of monthly overtime as the danger threshold","The minimum wage","The retirement age","The legal work week"], ans:"80 hours of monthly overtime as the danger threshold",
     hint:"Working beyond this amount of m... o... puts workers at serious health risk."},

    {type:"fb", s:"{1}を絶対(ぜったい)に許(ゆる)しません。\n(We absolutely will not tolerate bullying.)", a:"いじめ", opts:["いじめ","格差(かくさ)","引(ひ)きこもり","過労死(かろうし)"], sSrc:"We absolutely will not tolerate bullying.",
     hint:"This social problem particularly affects children and students in schools."},

    {type:"mc", q:"What does 共生(きょうせい)社会(しゃかい) aim for?", opts:["A society where people of all backgrounds coexist harmoniously","A society focused only on economic growth","A society with strict rules","A society without technology"], ans:"A society where people of all backgrounds coexist harmoniously",
     hint:"This policy vision promotes inclusion of diverse p..., abilities, and cultures."}
  ]
};
export default BATCH8_L1;
