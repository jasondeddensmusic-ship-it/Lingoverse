// Unit 21 Batch 2 Lesson 1: 人口(じんこう)問題(もんだい) (Demographics & Population Issues)
const BATCH2_L_1 = {
  id:"jav2_u21l_b2_1", title:"人口(じんこう)問題(もんだい)", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"人口(じんこう)問題(もんだい)",
     desc:"Japan faces some of the world's most pressing demographic challenges. Learn vocabulary for discussing population decline, birth rates, aging society, and rural depopulation. These topics dominate Japanese news and political debate.",
     goals:["Discuss population decline and birth rate issues","Describe aging society challenges and solutions","Use demographic vocabulary in news contexts"]},

    {type:"teach", trg:"人口(じんこう)", src:"population", pos:"noun", gender:null,
     note:"Kanji: 人口. じん (person) + こう (mouth/opening).\n日本(にほん)の人口(じんこう) = Japan's population.",
     example:"A: 日本(にほん)の人口(じんこう)が減(へ)っています。\nB: 少子化(しょうしか)が原因(げんいん)ですね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Japan's population is decreasing.\nB: The declining birthrate is the cause.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"人口 literally means 'people's mouths,' an ancient way of counting people by mouths to feed. Japan's population peaked at about 128 million in 2008 and has been declining since. Projections suggest it could drop below 100 million by 2050, making 人口減少(じんこうげんしょう) (jinkou genshou, population decline) a constant news topic."},

    {type:"teach", trg:"少子化(しょうしか)", src:"declining birthrate / falling birth rate", pos:"noun", gender:null,
     note:"しょう (few) + し (child) + か (-ification). Kanji: 少子化.\n少子高齢化(しょうしこうれいか) = aging society with few children.",
     example:"A: 少子化(しょうしか)を止(と)める対策(たいさく)が必要(ひつよう)です。\nB: たとえば、どんな対策(たいさく)がありますか？\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Countermeasures to stop the declining birthrate are needed.\nB: For example, what kind of measures are there?\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"少子化 is paired with 高齢化(こうれいか) (aging) as Japan's twin demographic crises: 少子高齢化(しょうしこうれいか) (shoushi koureika). Japan's birth rate has fallen to about 1.2 children per woman, far below the 2.1 needed for stable population. Government measures include childcare subsidies and parental leave expansion."},

    {type:"teach", trg:"原因(げんいん)", src:"cause / reason / origin", pos:"noun", gender:null,
     note:"Kanji: 原因. げん (source/plain) + いん (cause/factor).\n原因(げんいん)を探(さぐ)る = to investigate the cause.",
     example:"A: この問題(もんだい)の原因(げんいん)は何(なん)ですか？\nB: 経済的(けいざいてき)な不安(ふあん)が大(おお)きいです。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: What is the cause of this problem?\nB: Economic anxiety is a major factor.\nA: How was it?\nB: It was very good.",
     funFact:"原因 is the standard word for 'cause' in analytical discussion. Japanese news always investigates 原因(げんいん): fire causes, accident causes, economic causes. The word pairs with 結果(けっか) (kekka, result) in cause-and-effect analysis: 原因(げんいん)と結果(けっか) (cause and effect), a fundamental framework in Japanese journalism."},

    {type:"teach", trg:"減(へ)る", src:"to decrease / to diminish", pos:"verb", gender:null,
     note:"Group 1 verb (intransitive). Kanji: 減る.\n人口(じんこう)が減(へ)る = population decreases.\nTransitive pair: 減(へ)らす (to reduce).",
     example:"A: 若者(わかもの)が減(へ)っています。\nB: 少子化(しょうしか)の影響(えいきょう)ですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: The number of young people is decreasing.\nB: It is the effect of the declining birthrate.\nA: When was it?\nB: It was last summer.",
     funFact:"減(へ)る (intransitive, to decrease) pairs with 減(へ)らす (transitive, to reduce). The distinction matters: 人口(じんこう)が減(へ)る (population decreases, naturally) vs. ごみを減(へ)らす (to reduce garbage, deliberately). This intransitive/transitive verb pair pattern is fundamental to Japanese."},

    {type:"mc", q:"少子化(しょうしか)と高齢化(こうれいか) combined describe:", opts:["A growing population","Japan's twin demographic crisis: few births and aging","Economic growth","Immigration policy"], ans:"Japan's twin demographic crisis: few births and aging",
     hint:"少子(しょうし) (f... children) + 化(か) and 高齢(こうれい) (elderly) + 化(か) describe J...'s d... reality."},

    {type:"teach", trg:"増(ふ)える", src:"to increase / to grow in number", pos:"verb", gender:null,
     note:"Group 2 verb (intransitive). Kanji: 増える.\nOpposite of 減(へ)る. 高齢者(こうれいしゃ)が増(ふ)える = elderly increase.\nTransitive pair: 増(ふ)やす (to increase).",
     example:"A: 一人暮(ひとりぐ)らしの高齢者(こうれいしゃ)が増(ふ)えています。\nB: 地域(ちいき)の支援(しえん)が大事(だいじ)ですね。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: The number of elderly people living alone is increasing.\nB: Community support is important.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"増(ふ)える pairs with 増(ふ)やす (to increase deliberately). In demographic discussions, 高齢者(こうれいしゃ)が増(ふ)える (elderly increase, naturally) appears alongside 若者(わかもの)を増(ふ)やす (to increase young people, policy goal). Japan aims to increase birth rates through various policy incentives."},

    {type:"teach", trg:"地域(ちいき)", src:"region / area / community", pos:"noun", gender:null,
     note:"Kanji: 地域. ち (earth/ground) + いき (area/range).\n地域(ちいき)社会(しゃかい) = local community.",
     example:"A: この地域(ちいき)は高齢化(こうれいか)が進(すす)んでいます。\nB: 若(わか)い人(ひと)が減(へ)りましたね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Aging is advancing in this region.\nB: Young people have decreased.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"地域 describes communities from neighborhoods to entire prefectures. Rural regions (地方(ちほう), chihou) face severe depopulation (過疎化(かそか), kasoka). Many villages have more elderly than young people. 地域(ちいき)おこし協力隊(きょうりょくたい) (chiiki okoshi kyouryokutai, regional revitalization cooperators) is a government program to attract young people to rural areas."},

    {type:"fb", s:"日本(にほん)の{1}が減(へ)っています。\n(Japan's population is decreasing.)", a:"人口(じんこう)", opts:["人口(じんこう)","高齢者(こうれいしゃ)","経済(けいざい)","政府(せいふ)"], sSrc:"Japan's population is decreasing.",
     hint:"The word for the total number of people in a country, made from 'person' and 'mouth.'"},

    {type:"teach", trg:"移民(いみん)", src:"immigrant / immigration", pos:"noun", gender:null,
     note:"Kanji: 移民. い (move/transfer) + みん (people).\n移民(いみん)政策(せいさく) = immigration policy.",
     example:"A: 移民(いみん)を受(う)け入(い)れるべきですか？\nB: さまざまな意見(いけん)があります。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Should we accept immigrants?\nB: There are various opinions.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"移民 is a highly debated topic in Japan, which has historically maintained strict immigration policies. With population decline, debate about accepting more 移民(いみん) has intensified. Japan introduced a technical intern program and expanded work visa categories, though the word 移民(いみん) itself is politically sensitive. Officials prefer 外国人材(がいこくじんざい) (foreign human resources)."},

    {type:"teach", trg:"過疎化(かそか)", src:"depopulation / becoming sparsely populated", pos:"noun", gender:null,
     note:"Kanji: 過疎化. か (excess) + そ (sparse) + か (-ification).\n田舎(いなか)の過疎化(かそか) = rural depopulation.",
     example:"A: 田舎(いなか)の過疎化(かそか)が深刻(しんこく)です。\nB: 学校(がっこう)も閉校(へいこう)しています。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Rural depopulation is severe.\nB: Schools are also closing.\nA: How long did it take?\nB: About two hours.",
     funFact:"過疎化 is the opposite of urbanization. As young people move to cities for education and work, rural areas lose population. Some villages have become 限界集落(げんかいしゅうらく) (genkai shuuraku, marginal settlements) where over half the population is elderly. Abandoned houses (空(あ)き家(や), akiya) number over 8 million in Japan."},

    {type:"teach", trg:"深刻(しんこく)", src:"serious / severe / critical", pos:"adj", gender:null,
     note:"な-adjective. Kanji: 深刻. しん (deep) + こく (engrave/severe).\n深刻(しんこく)な問題(もんだい) = a serious problem.",
     example:"A: 深刻(しんこく)な人材(じんざい)不足(ぶそく)です。\nB: 解決策(かいけつさく)を考(かんが)えなければなりません。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: It is a serious labor shortage.\nB: We must think of solutions.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"深刻 literally means 'deeply engraved,' suggesting a problem that cuts deep. Japanese news uses 深刻(しんこく) to signal that a situation has crossed from concerning to critical. 深刻(しんこく)な人材(じんざい)不足(ぶそく) (severe labor shortage) is one of the most-heard phrases in modern Japanese economic discussion."},

    {type:"mc", q:"過疎化(かそか) means:", opts:["overcrowding","population growth","depopulation / becoming sparse","urbanization"], ans:"depopulation / becoming sparse",
     hint:"過(か) (excess/passing) + 疎(そ) (s.../alienated) + 化(か) (-ification). People leaving, areas emptying."},

    {type:"tip", title:"Japan's Demographic Vocabulary",
     text:"Population basics:\n人口(じんこう) = population\n少子化(しょうしか) = declining birthrate\n高齢化(こうれいか) = aging population\n過疎化(かそか) = depopulation (rural)\n\nChange verbs:\n減(へ)る = to decrease (intransitive)\n増(ふ)える = to increase (intransitive)\n減(へ)らす = to reduce (transitive)\n増(ふ)やす = to increase (transitive)\n\nDiscussion vocabulary:\n原因(げんいん) = cause\n対策(たいさく) = countermeasure\n深刻(しんこく) = serious/severe\n移民(いみん) = immigration",
     deepDive:{title:"Japan's Demographic Timeline",
      text:"Key demographic milestones:\n\n2008: Population peaked at ~128 million.\n2020: Population dropped below 126 million.\n2023: Birth rate hit record low (~758,000 births).\n2050: Projected to fall below 100 million.\n2100: Could drop to ~60 million without change.\n\nThe government has declared the situation a 'national crisis' (国難(こくなん), kokunan). Measures include: free preschool education, expanded parental leave, housing subsidies for families, and encouraging remote work in rural areas. Whether these will reverse the trend remains Japan's defining question."}},

    {type:"match", pairs:[{trg:"人口(じんこう)",src:"population"},{trg:"少子化(しょうしか)",src:"declining birthrate"},{trg:"過疎化(かそか)",src:"depopulation"},{trg:"原因(げんいん)",src:"cause"}]},

    {type:"fb", s:"田舎(いなか)の{1}が深刻(しんこく)です。\n(Rural depopulation is severe.)", a:"過疎化(かそか)", opts:["過疎化(かそか)","高齢化(こうれいか)","少子化(しょうしか)","人口(じんこう)"], sSrc:"Rural depopulation is severe.",
     hint:"The word for areas losing population, combining 'excess' + 'sparse' + '-ification.'"},

    {type:"match", pairs:[{trg:"減(へ)る",src:"to decrease"},{trg:"増(ふ)える",src:"to increase"},{trg:"移民(いみん)",src:"immigration"},{trg:"深刻(しんこく)",src:"serious/severe"}]},

    {type:"mc", q:"減(へ)る vs 減(へ)らす: what is the difference?", opts:["They mean the same thing","減(へ)る = decrease naturally (intransitive); 減(へ)らす = reduce deliberately (transitive)","減(へ)る is formal; 減(へ)らす is casual","減(へ)る is past; 減(へ)らす is present"], ans:"減(へ)る = decrease naturally (intransitive); 減(へ)らす = reduce deliberately (transitive)",
     hint:"One is intransitive (the number goes down on its own). The other is transitive (a person actively lowers the number)."},
  {type:"match",pairs:[{trg:"地域(ちいき)",src:"region / area / community"}]}]
};
export default BATCH2_L_1;
