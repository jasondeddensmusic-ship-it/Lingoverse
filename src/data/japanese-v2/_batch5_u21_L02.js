// Unit 21 Batch 5 Lesson 2: 社会問題(しゃかいもんだい) (Social Problems & Solutions)
const BATCH5_L_2 = {
  id:"jav2_u21l_b5_2", title:"社会問題(しゃかいもんだい)", icon:"🏙️", xp:15, board:true,
  steps:[
    {type:"intro", title:"社会問題(しゃかいもんだい)",
     desc:"Japan faces unique social challenges: aging population, declining birth rate, work-life balance, and urban-rural divide. Learn the vocabulary that defines these ongoing national conversations. These topics appear constantly in JLPT N3/N2 reading passages and are essential for understanding modern Japan.",
     goals:["Discuss aging society and birth rate decline","Use vocabulary for social welfare and reform","Express solutions and proposals for social issues"]},

    {type:"teach", trg:"高齢化(こうれいか)", src:"aging (of society) / population aging", pos:"noun", gender:null,
     note:"Kanji: 高齢化(こうれいか). 高齢化(こうれいか)社会(しゃかい) = aging society.\n高齢者(こうれいしゃ) = elderly person.",
     example:"A: 日本(にほん)の高齢化(こうれいか)は世界(せかい)で最(もっと)も進(すす)んでいます。\nB: 医療(いりょう)や介護(かいご)の充実(じゅうじつ)が急務(きゅうむ)ですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Japan's population aging is the most advanced in the world.\nB: Improving healthcare and nursing care is urgently needed.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"Japan has the world's highest proportion of elderly citizens, with over 29% aged 65+. 高齢化 uses 高 (high), 齢 (age), and 化 (-ification). The term 超高齢社会 (chou koureika shakai, super-aged society) was coined for Japan. Addressing 高齢化 drives policy on pensions, healthcare, robotics, and immigration."},

    {type:"teach", trg:"少子化(しょうしか)", src:"declining birth rate / fewer children", pos:"noun", gender:null,
     note:"Kanji: 少子化(しょうしか). 少子(しょうし) (few children) + 化(か) (-ification).\n少子高齢化(しょうしこうれいか) = declining births and aging population.",
     example:"A: 少子化(しょうしか)の影響(えいきょう)で学校(がっこう)の数(かず)が減(へ)っています。\nB: 特(とく)に地方(ちほう)では深刻(しんこく)ですね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Due to the declining birth rate, the number of schools is decreasing.\nB: It is especially serious in rural areas.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"Japan's birth rate is among the world's lowest. 少子化 combines 少 (few), 子 (children), and 化 (-ification). The government has created a 少子化対策大臣(しょうしかたいさくだいじん) (Minister for Declining Birth Rate) and offers financial incentives for having children. 少子高齢化(しょうしこうれいか) (declining births + aging) is Japan's defining demographic challenge. It affects everything from the economy to school closures."},

    {type:"teach", trg:"福祉(ふくし)", src:"welfare / social welfare", pos:"noun", gender:null,
     note:"Kanji: 福祉(ふくし). 社会福祉(しゃかいふくし) = social welfare.\n福祉政策(ふくしせいさく) = welfare policy.",
     example:"A: 社会福祉(しゃかいふくし)の充実(じゅうじつ)が求(もと)められています。\nB: 特(とく)に高齢者(こうれいしゃ)への支援(しえん)が重要(じゅうよう)ですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Improvement of social welfare is being sought.\nB: Support for the elderly is especially important.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"福祉 combines 福 (fortune/blessing) and 祉 (happiness/welfare). Japan's welfare system (社会福祉) includes universal healthcare, pension systems, and nursing care insurance (介護保険(かいごほけん)). The kanji 福 appears in 幸福(こうふく) (happiness) and 福岡(ふくおか) (Fukuoka). Japanese welfare policy struggles to balance generous services with the fiscal burden of an aging population."},

    {type:"teach", trg:"介護(かいご)", src:"nursing care / caregiving", pos:"noun", gender:null,
     note:"Kanji: 介護(かいご). 介護(かいご)する = to provide nursing care.\n介護保険(かいごほけん) = nursing care insurance.",
     example:"A: 親(おや)の介護(かいご)をするために仕事(しごと)を辞(や)める人(ひと)が増(ふ)えています。\nB: 介護離職(かいごりしょく)は社会問題(しゃかいもんだい)ですね。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: More people are quitting work to care for their parents.\nB: Caregiving-related job loss is a social problem.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"介護 uses 介 (mediate/intervene) and 護 (protect). Japan introduced 介護保険(かいごほけん) (nursing care insurance) in 2000 as the population aged rapidly. 介護離職(かいごりしょく) (leaving work to provide care) affects millions. The industry faces severe worker shortages, driving interest in care robots and AI-assisted nursing. This is one of Japan's most pressing social challenges."},

    {type:"mc", q:"少子高齢化(しょうしこうれいか) describes:", opts:["Declining births combined with population aging","Economic recession","Environmental pollution","Educational reform"], ans:"Declining births combined with population aging",
     hint:"Two demographic trends c...: fewer children being born and the p... getting older."},

    {type:"teach", trg:"格差(かくさ)", src:"gap / disparity / divide", pos:"noun", gender:null,
     note:"Kanji: 格差(かくさ). 経済格差(けいざいかくさ) = economic disparity.\n格差社会(かくさしゃかい) = unequal society.",
     example:"A: 所得(しょとく)の格差(かくさ)が広(ひろ)がっています。\nB: 教育(きょういく)の機会均等(きかいきんとう)が大切(たいせつ)ですね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: The income gap is widening.\nB: Equal educational opportunities are important.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"格差 became a buzzword in 2000s Japan. 格 (status/standard) + 差 (difference) = disparity. 格差社会(かくさしゃかい) (gap society) was named the buzzword of 2006. Income inequality, regional disparities, and the divide between regular and irregular workers are major themes. Japan's self-image as a middle-class society has been challenged by growing 格差(かくさ)."},

    {type:"teach", trg:"対策(たいさく)", src:"countermeasure / policy measure / solution", pos:"noun", gender:null,
     note:"Kanji: 対策(たいさく). 対策(たいさく)を立(た)てる = to formulate countermeasures.\n防災対策(ぼうさいたいさく) = disaster countermeasures.",
     example:"A: 少子化対策(しょうしかたいさく)としてどのような政策(せいさく)がありますか？\nB: 子育(こそだ)て支援金(しえんきん)や保育所(ほいくじょ)の拡充(かくじゅう)などがあります。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: What policies exist as countermeasures for the declining birth rate?\nB: There are child-rearing support payments and expansion of nurseries.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"対策 combines 対 (against/toward) and 策 (plan/scheme). Japanese government loves 対策 compounds: 高齢化対策(こうれいかたいさく) (aging countermeasures), 少子化対策(しょうしかたいさく) (birth rate countermeasures), 防災対策(ぼうさいたいさく) (disaster countermeasures). Each social problem gets its own 対策 committee and budget. The word implies systematic, planned response rather than ad hoc reactions."},

    {type:"teach", trg:"充実(じゅうじつ)", src:"enrichment / enhancement / fulfillment", pos:"noun", gender:null,
     note:"Kanji: 充実(じゅうじつ). 充実(じゅうじつ)する = to be fulfilled/enriched.\n生活(せいかつ)の充実(じゅうじつ) = enriched life. 内容(ないよう)の充実(じゅうじつ) = enriched content.",
     example:"A: 医療体制(いりょうたいせい)の充実(じゅうじつ)が求(もと)められています。\nB: 医者(いしゃ)や看護師(かんごし)の数(かず)を増(ふ)やすべきですね。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Enhancement of the medical system is being sought.\nB: We should increase the number of doctors and nurses.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"充実 uses 充 (fill/sufficient) and 実 (truth/fruit). It means to make something fuller and more complete. 充実(じゅうじつ)した生活(せいかつ) (a fulfilled life) is a life rich in quality, not just material goods. The verb form 充実(じゅうじつ)させる (to enrich) is common in policy proposals. It is a positive word suggesting improvement and completion."},

    {type:"teach", trg:"急務(きゅうむ)", src:"urgent task / pressing need", pos:"noun", gender:null,
     note:"Kanji: 急務(きゅうむ). 急(きゅう) (urgent) + 務(む) (task/duty).\nUsed for problems requiring immediate action.",
     example:"A: 環境保護(かんきょうほご)は全人類(ぜんじんるい)の急務(きゅうむ)です。\nB: まったくその通(とお)りです。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Environmental protection is an urgent task for all humanity.\nB: That is exactly right.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"急務 is a powerful word in policy and editorial writing. It signals that delay is unacceptable. 急 means 'urgent/rush' and 務 means 'duty/task.' Politicians and commentators use 急務 to push for action: 高齢化対策(こうれいかたいさく)は急務(きゅうむ)である (aging countermeasures are urgently needed). It is formal but impactful."},

    {type:"tip", title:"Japan's Key Social Issues",
     text:"少子高齢化(しょうしこうれいか) = declining births + aging\nFewer children, more elderly. Affects pensions, healthcare, schools.\n\n格差社会(かくさしゃかい) = gap/unequal society\nIncome, regional, and employment type disparities growing.\n\nワークライフバランス = work-life balance\nLong hours, karoshi (death from overwork), paternity leave debate.\n\n介護問題(かいごもんだい) = nursing care problems\nWho cares for the elderly? Worker shortages, family burden.\n\n地方創生(ちほうそうせい) = regional revitalization\nRural depopulation vs. Tokyo concentration.\n\nEach topic has its own vocabulary set and appears frequently in JLPT reading passages."},

    {type:"teach", trg:"改革(かいかく)", src:"reform / restructuring", pos:"noun", gender:null,
     note:"Kanji: 改革(かいかく). 改革(かいかく)する = to reform.\n教育改革(きょういくかいかく) = educational reform.",
     example:"A: 労働改革(ろうどうかいかく)が進(すす)められています。\nB: 残業時間(ざんぎょうじかん)の上限(じょうげん)が設(もう)けられましたね。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Labor reform is being promoted.\nB: A cap on overtime hours was established.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"改革 uses 改 (change/reform) and 革 (leather/revolution). The kanji 革 originally depicted an animal hide being stretched and processed, evolving to mean fundamental transformation. 明治維新(めいじいしん) (Meiji Restoration) and 戦後改革(せんごかいかく) (postwar reforms) transformed Japan. Modern 改革 debates focus on labor, education, and digital transformation."},

    {type:"fb", s:"日本(にほん)の{1}は世界(せかい)で最(もっと)も進(すす)んでいます。\n(Japan's population aging is the most advanced in the world.)", a:"高齢化(こうれいか)", opts:["高齢化(こうれいか)","少子化(しょうしか)","高齢者(こうれいしゃ)","若者(わかもの)"], sSrc:"Japan's population aging is the most advanced in the world.",
     hint:"The noun meaning 'aging of society,' using the characters for high, age, and -ification."},

    {type:"mc", q:"格差社会(かくさしゃかい) means:", opts:["A society with growing inequality/gaps","A classless society","A wealthy society","A peaceful society"], ans:"A society with growing inequality/gaps",
     hint:"格差 (gap/disparity) + 社会(しゃかい) (s...) describes widening i...."},

    {type:"match", pairs:[{trg:"高齢化(こうれいか)",src:"population aging"},{trg:"少子化(しょうしか)",src:"declining birth rate"},{trg:"福祉(ふくし)",src:"social welfare"},{trg:"介護(かいご)",src:"nursing care"}]},

    {type:"fb", s:"少子化(しょうしか){1}として子育(こそだ)て支援(しえん)があります。\n(As a countermeasure for declining births, there is child-rearing support.)", a:"対策(たいさく)", opts:["対策(たいさく)","問題(もんだい)","原因(げんいん)","結果(けっか)"], sSrc:"As a countermeasure for declining births, there is child-rearing support.",
     hint:"The noun meaning countermeasure or policy solution, often paired with social problems."},

    {type:"mc", q:"急務(きゅうむ) describes:", opts:["A task that demands immediate action","A routine duty","A completed task","An optional project"], ans:"A task that demands immediate action",
     hint:"This formal word combines 'urgent' with 'duty/t...' to signal pressing need."}
  ]
};
export default BATCH5_L_2;
