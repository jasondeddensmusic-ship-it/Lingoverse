// Batch 8 – Unit 21 (B1.2 Society): Social Issues Vocabulary
const BATCH8_L1 = {
  id:"jav2_u21l_b8_1", title:"しゃかいもんだい", icon:"🏘️", xp:15, board:true,
  steps:[
    {type:"intro", title:"しゃかいもんだい",
     desc:"Learn vocabulary for discussing social issues affecting modern Japan. These words appear frequently in news, conversations, and JLPT N2 reading passages.",
     goals:["Discuss aging society and population decline","Talk about work-life balance issues","Express opinions on social challenges"]},

    {type:"teach", trg:"こうれいか", src:"aging (of society)", pos:"noun", gender:null,
     note:"Kanji: 高齢化. こうれいかしゃかい = aging society.\nJapan's biggest demographic challenge.",
     example:"A: にほんのこうれいかはすすんでいます。\nB: かいごのもんだいがふえていますね。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Japan's aging is advancing.\nB: Elderly care problems are increasing.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"Japan has the world's oldest population: about 29% are over 65. こうれいかしゃかい describes a society where seniors form a growing share. The term ちょうこうれいしゃかい (super-aged society) was coined for Japan. This drives debates about ねんきん (pensions), かいご (care), and いりょうひ (medical costs)."},

    {type:"teach", trg:"しょうしか", src:"declining birthrate", pos:"noun", gender:null,
     note:"Kanji: 少子化. しょうしこうれいか = declining births + aging population.\nThe twin crisis.",
     example:"A: しょうしかがつづいています。\nB: こそだてしえんがひつようですね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: The declining birthrate continues.\nB: Child-raising support is needed.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"Japan's birthrate is about 1.2 children per woman, far below replacement level. しょうしか is driven by late marriage, high costs of こそだて (child-raising), and changing values. The government offers しょうしかたいさく (countermeasures) including subsidies, but the trend continues. By 2050, Japan's population may drop below 100 million."},

    {type:"teach", trg:"かろうし", src:"death from overwork", pos:"noun", gender:null,
     note:"Kanji: 過労死. A word that entered global vocabulary.\nかろうしライン = overwork threshold (80+ hours overtime/month).",
     example:"A: かろうしをふせぐためにはたらきかたをかえなければなりません。\nB: ざんぎょうをへらすべきですね。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: We must change how we work to prevent death from overwork.\nB: We should reduce overtime.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"かろうし is internationally recognized as a Japanese term. It describes death (from stroke, heart attack, or suicide) caused by excessive work. Japan officially recognized かろうし in the 1980s. The government set 80 hours of monthly overtime as the かろうしライン (danger line). はたらきかたかいかく (work-style reform) laws aim to prevent it."},

    {type:"teach", trg:"はたらきかたかいかく", src:"work-style reform", pos:"noun", gender:null,
     note:"Government initiative since 2018 to improve work conditions.\nざんぎょうじょうげん = overtime cap.",
     example:"A: はたらきかたかいかくでざんぎょうがへりました。\nB: いいことですね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Work-style reform reduced overtime.\nB: That is a good thing.\nA: How long did it take?\nB: About two hours.",
     funFact:"はたらきかたかいかく became law in 2019, capping overtime at 45 hours/month. It promotes ゆうきゅうきゅうか (paid leave), テレワーク (remote work), and フレックスタイム (flex time). Adoption varies: large companies comply, but small businesses and traditional industries struggle to change deeply rooted work culture."},

    {type:"teach", trg:"ひきこもり", src:"social withdrawal / shut-in", pos:"noun", gender:null,
     note:"People who withdraw from society, staying home for months or years.\nKanji: 引きこもり.",
     example:"A: ひきこもりのもんだいはふくざつです。\nB: かぞくへのサポートもひつようですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: The hikikomori problem is complex.\nB: Support for families is also needed.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"An estimated 1.5 million Japanese people are ひきこもり, including many middle-aged adults (8050もんだい: 80-year-old parents supporting 50-year-old children). Causes include いじめ (bullying), work stress, and social pressure. Japan has specialized support centers, but stigma prevents many from seeking help."},

    {type:"mc", q:"What does しょうしこうれいか describe?", opts:["The twin crisis of declining births and aging population","A new education policy","Economic growth strategy","Environmental protection"], ans:"The twin crisis of declining births and aging population",
     hint:"This compound term captures Japan's two most pressing demographic challenges."},

    {type:"teach", trg:"かくさ", src:"gap / disparity / inequality", pos:"noun", gender:null,
     note:"Kanji: 格差. けいざいかくさ = economic disparity.\nかくさしゃかい = unequal society.",
     example:"A: しょとくかくさがひろがっています。\nB: セーフティネットがじゅうようです。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Income disparity is widening.\nB: Safety nets are important.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"かくさしゃかい (disparity society) became a buzzword in 2006. Japan, once proud of its middle-class society (いちおくそうちゅうりゅう, 100 million all middle-class), now faces growing きょういくかくさ (education gap), ちいきかくさ (regional gap), and せだいかんかくさ (generational gap)."},

    {type:"teach", trg:"いじめ", src:"bullying", pos:"noun", gender:null,
     note:"Kanji: いじめ. がっこういじめ = school bullying.\nネットいじめ = cyberbullying.",
     example:"A: いじめをぜったいにゆるしません。\nB: はやくきづくことがたいせつです。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: We absolutely will not tolerate bullying.\nB: Noticing it early is important.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"いじめ is a serious social issue in Japan. Schools track いじめにんちけんすう (recognized bullying cases). Types include むし (ignoring), なかまはずれ (exclusion), and ネットいじめ (cyberbullying via LINE and SNS). Japan has いじめぼうしたいさくすいしんほう (Anti-Bullying Law) since 2013."},

    {type:"teach", trg:"ジェンダー", src:"gender", pos:"noun", gender:null,
     note:"Loanword. ジェンダーびょうどう = gender equality.\nジェンダーギャップしすう = Gender Gap Index.",
     example:"A: にほんのジェンダーギャップはまだおおきいです。\nB: かいぜんがひつようですね。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Japan's gender gap is still large.\nB: Improvement is necessary.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"Japan ranks consistently low on the World Economic Forum's Gender Gap Index (around 120th out of 146 countries). The gap is largest in せいじ (politics) and けいざい (economics). Women make up only about 10% of national parliament. 女性活躍推進法 (Women's Active Participation Law) aims to increase female leadership."},

    {type:"teach", trg:"たよう", src:"diversity", pos:"noun", gender:null,
     note:"Kanji: 多様. たようせい = diversity.\nたようなかちかん = diverse values.",
     example:"A: たようせいをみとめるしゃかいがひつようです。\nB: ちがいをそんちょうしましょう。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: A society that recognizes diversity is necessary.\nB: Let us respect differences.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"たようせい (diversity) has become a major topic in Japanese business and education. ダイバーシティ (diversity, loanword) appears in corporate goals. Japan's historical homogeneity makes たようせい discussions complex. Increasing foreign residents, LGBTQ+ visibility, and disability inclusion are driving change."},

    {type:"teach", trg:"ボランティア", src:"volunteer / volunteering", pos:"noun", gender:null,
     note:"Loanword. ボランティアかつどう = volunteer activities.\nEarthquake relief volunteering is common.",
     example:"A: しゅうまつにボランティアをしています。\nB: どんなかつどうですか？\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: I volunteer on weekends.\nB: What kind of activities?\nA: Do you go often?\nB: I go about once a month.",
     funFact:"ボランティア culture grew dramatically after the 1995 Kobe earthquake and 2011 Tohoku disaster. Japan's ボランティアげんねん (volunteer year one) was 1995. Young people increasingly do ボランティア for social issues, elderly care, and child support. School ボランティア hours are sometimes required."},

    {type:"fb", s:"にほんの{1}はすすんでいます。\n(Japan's aging is advancing.)", a:"こうれいか", opts:["こうれいか","しょうしか","かくさ","ひきこもり"], sSrc:"Japan's aging is advancing.",
     hint:"This word specifically describes the increase of elderly people in the population."},

    {type:"teach", trg:"きょうせいしゃかい", src:"inclusive society / society of coexistence", pos:"noun", gender:null,
     note:"きょうせい (coexistence) + しゃかい (society).\nA policy goal in Japan.",
     example:"A: きょうせいしゃかいのじつげんをめざしています。\nB: だれもがくらしやすいしゃかいですね。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: We aim to realize an inclusive society.\nB: A society where everyone can live comfortably.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"きょうせいしゃかい (共生社会) is a government policy vision where people of different backgrounds, abilities, and ages live together harmoniously. It encompasses barrier-free design, multicultural coexistence (たぶんかきょうせい), and disability inclusion. The concept reflects Japan adapting to increasing diversity."},

    {type:"teach", trg:"ふくし", src:"welfare / social services", pos:"noun", gender:null,
     note:"Kanji: 福祉. しゃかいふくし = social welfare.\nふくしし = social worker.",
     example:"A: ふくしサービスをりようしていますか？\nB: はい、かいごサービスをうけています。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Are you using welfare services?\nB: Yes, I am receiving care services.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"Japan's ふくし system includes かいごほけん (long-term care insurance), しょうがいしゃふくし (disability welfare), and じどうふくし (child welfare). The かいごほけん system, started in 2000, is used by millions of elderly. ふくし spending represents a growing portion of Japan's national budget."},

    {type:"match", pairs:[{trg:"こうれいか",src:"aging society"},{trg:"しょうしか",src:"declining birthrate"},{trg:"かろうし",src:"death from overwork"},{trg:"ひきこもり",src:"social withdrawal"},{trg:"いじめ",src:"bullying"}],
     hint:"Match each social issue term with its English meaning."},

    {type:"mc", q:"What is the かろうしライン?", opts:["80 hours of monthly overtime as the danger threshold","The minimum wage","The retirement age","The legal work week"], ans:"80 hours of monthly overtime as the danger threshold",
     hint:"Working beyond this amount of m... o... puts workers at serious health risk."},

    {type:"fb", s:"{1}をぜったいにゆるしません。\n(We absolutely will not tolerate bullying.)", a:"いじめ", opts:["いじめ","かくさ","ひきこもり","かろうし"], sSrc:"We absolutely will not tolerate bullying.",
     hint:"This social problem particularly affects children and students in schools."},

    {type:"mc", q:"What does きょうせいしゃかい aim for?", opts:["A society where people of all backgrounds coexist harmoniously","A society focused only on economic growth","A society with strict rules","A society without technology"], ans:"A society where people of all backgrounds coexist harmoniously",
     hint:"This policy vision promotes inclusion of diverse p..., abilities, and cultures."}
  ]
};
export default BATCH8_L1;
