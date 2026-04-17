// Unit 21 Batch 5 Lesson 2: しゃかいもんだい (Social Problems & Solutions)
const BATCH5_L_2 = {
  id:"jav2_u21l_b5_2", title:"しゃかいもんだい", icon:"🏙️", xp:15, board:true,
  steps:[
    {type:"intro", title:"しゃかいもんだい",
     desc:"Japan faces unique social challenges: aging population, declining birth rate, work-life balance, and urban-rural divide. Learn the vocabulary that defines these ongoing national conversations. These topics appear constantly in JLPT N3/N2 reading passages and are essential for understanding modern Japan.",
     goals:["Discuss aging society and birth rate decline","Use vocabulary for social welfare and reform","Express solutions and proposals for social issues"]},

    {type:"teach", trg:"こうれいか", src:"aging (of society) / population aging", pos:"noun", gender:null,
     note:"Kanji: 高齢化. こうれいかしゃかい = aging society.\nこうれいしゃ = elderly person.",
     example:"A: にほんのこうれいかはせかいでもっともすすんでいます。\nB: いりょうやかいごのじゅうじつがきゅうむですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Japan's population aging is the most advanced in the world.\nB: Improving healthcare and nursing care is urgently needed.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"Japan has the world's highest proportion of elderly citizens, with over 29% aged 65+. 高齢化 uses 高 (high), 齢 (age), and 化 (-ification). The term 超高齢社会 (chou koureika shakai, super-aged society) was coined for Japan. Addressing こうれいか drives policy on pensions, healthcare, robotics, and immigration."},

    {type:"teach", trg:"しょうしか", src:"declining birth rate / fewer children", pos:"noun", gender:null,
     note:"Kanji: 少子化. しょうし (few children) + か (-ification).\nしょうしこうれいか = declining births and aging population.",
     example:"A: しょうしかのえいきょうでがっこうのかずがへっています。\nB: とくにちほうではしんこくですね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Due to the declining birth rate, the number of schools is decreasing.\nB: It is especially serious in rural areas.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"Japan's birth rate is among the world's lowest. 少子化 combines 少 (few), 子 (children), and 化 (-ification). The government has created a 少子化対策大臣 (Minister for Declining Birth Rate) and offers financial incentives for having children. しょうしこうれいか (declining births + aging) is Japan's defining demographic challenge. It affects everything from the economy to school closures."},

    {type:"teach", trg:"ふくし", src:"welfare / social welfare", pos:"noun", gender:null,
     note:"Kanji: 福祉. しゃかいふくし = social welfare.\nふくしせいさく = welfare policy.",
     example:"A: しゃかいふくしのじゅうじつがもとめられています。\nB: とくにこうれいしゃへのしえんがじゅうようですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Improvement of social welfare is being sought.\nB: Support for the elderly is especially important.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"福祉 combines 福 (fortune/blessing) and 祉 (happiness/welfare). Japan's welfare system (社会福祉) includes universal healthcare, pension systems, and nursing care insurance (介護保険). The kanji 福 appears in 幸福 (happiness) and 福岡 (Fukuoka). Japanese welfare policy struggles to balance generous services with the fiscal burden of an aging population."},

    {type:"teach", trg:"かいご", src:"nursing care / caregiving", pos:"noun", gender:null,
     note:"Kanji: 介護. かいごする = to provide nursing care.\nかいごほけん = nursing care insurance.",
     example:"A: おやのかいごをするためにしごとをやめるひとがふえています。\nB: かいごりしょくはしゃかいもんだいですね。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: More people are quitting work to care for their parents.\nB: Caregiving-related job loss is a social problem.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"介護 uses 介 (mediate/intervene) and 護 (protect). Japan introduced かいごほけん (nursing care insurance) in 2000 as the population aged rapidly. かいごりしょく (leaving work to provide care) affects millions. The industry faces severe worker shortages, driving interest in care robots and AI-assisted nursing. This is one of Japan's most pressing social challenges."},

    {type:"mc", q:"しょうしこうれいか describes:", opts:["Declining births combined with population aging","Economic recession","Environmental pollution","Educational reform"], ans:"Declining births combined with population aging",
     hint:"Two demographic trends c...: fewer children being born and the p... getting older."},

    {type:"teach", trg:"かくさ", src:"gap / disparity / divide", pos:"noun", gender:null,
     note:"Kanji: 格差. けいざいかくさ = economic disparity.\nかくさしゃかい = unequal society.",
     example:"A: しょとくのかくさがひろがっています。\nB: きょういくのきかいきんとうがたいせつですね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: The income gap is widening.\nB: Equal educational opportunities are important.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"格差 became a buzzword in 2000s Japan. 格 (status/standard) + 差 (difference) = disparity. かくさしゃかい (gap society) was named the buzzword of 2006. Income inequality, regional disparities, and the divide between regular and irregular workers are major themes. Japan's self-image as a middle-class society has been challenged by growing かくさ."},

    {type:"teach", trg:"たいさく", src:"countermeasure / policy measure / solution", pos:"noun", gender:null,
     note:"Kanji: 対策. たいさくをたてる = to formulate countermeasures.\nぼうさいたいさく = disaster countermeasures.",
     example:"A: しょうしかたいさくとしてどのようなせいさくがありますか？\nB: こそだてしえんきんやほいくじょのかくじゅうなどがあります。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: What policies exist as countermeasures for the declining birth rate?\nB: There are child-rearing support payments and expansion of nurseries.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"対策 combines 対 (against/toward) and 策 (plan/scheme). Japanese government loves たいさく compounds: こうれいかたいさく (aging countermeasures), しょうしかたいさく (birth rate countermeasures), ぼうさいたいさく (disaster countermeasures). Each social problem gets its own たいさく committee and budget. The word implies systematic, planned response rather than ad hoc reactions."},

    {type:"teach", trg:"じゅうじつ", src:"enrichment / enhancement / fulfillment", pos:"noun", gender:null,
     note:"Kanji: 充実. じゅうじつする = to be fulfilled/enriched.\nせいかつのじゅうじつ = enriched life. ないようのじゅうじつ = enriched content.",
     example:"A: いりょうたいせいのじゅうじつがもとめられています。\nB: いしゃやかんごしのかずをふやすべきですね。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Enhancement of the medical system is being sought.\nB: We should increase the number of doctors and nurses.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"充実 uses 充 (fill/sufficient) and 実 (truth/fruit). It means to make something fuller and more complete. じゅうじつしたせいかつ (a fulfilled life) is a life rich in quality, not just material goods. The verb form じゅうじつさせる (to enrich) is common in policy proposals. It is a positive word suggesting improvement and completion."},

    {type:"teach", trg:"きゅうむ", src:"urgent task / pressing need", pos:"noun", gender:null,
     note:"Kanji: 急務. きゅう (urgent) + む (task/duty).\nUsed for problems requiring immediate action.",
     example:"A: かんきょうほごはぜんじんるいのきゅうむです。\nB: まったくそのとおりです。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Environmental protection is an urgent task for all humanity.\nB: That is exactly right.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"急務 is a powerful word in policy and editorial writing. It signals that delay is unacceptable. 急 means 'urgent/rush' and 務 means 'duty/task.' Politicians and commentators use きゅうむ to push for action: こうれいかたいさくはきゅうむである (aging countermeasures are urgently needed). It is formal but impactful."},

    {type:"tip", title:"Japan's Key Social Issues",
     text:"しょうしこうれいか = declining births + aging\nFewer children, more elderly. Affects pensions, healthcare, schools.\n\nかくさしゃかい = gap/unequal society\nIncome, regional, and employment type disparities growing.\n\nワークライフバランス = work-life balance\nLong hours, karoshi (death from overwork), paternity leave debate.\n\nかいごもんだい = nursing care problems\nWho cares for the elderly? Worker shortages, family burden.\n\nちほうそうせい = regional revitalization\nRural depopulation vs. Tokyo concentration.\n\nEach topic has its own vocabulary set and appears frequently in JLPT reading passages."},

    {type:"teach", trg:"かいかく", src:"reform / restructuring", pos:"noun", gender:null,
     note:"Kanji: 改革. かいかくする = to reform.\nきょういくかいかく = educational reform.",
     example:"A: ろうどうかいかくがすすめられています。\nB: ざんぎょうじかんのじょうげんがもうけられましたね。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Labor reform is being promoted.\nB: A cap on overtime hours was established.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"改革 uses 改 (change/reform) and 革 (leather/revolution). The kanji 革 originally depicted an animal hide being stretched and processed, evolving to mean fundamental transformation. めいじいしん (Meiji Restoration) and せんごかいかく (postwar reforms) transformed Japan. Modern かいかく debates focus on labor, education, and digital transformation."},

    {type:"fb", s:"にほんの{1}はせかいでもっともすすんでいます。\n(Japan's population aging is the most advanced in the world.)", a:"こうれいか", opts:["こうれいか","しょうしか","こうれいしゃ","わかもの"], sSrc:"Japan's population aging is the most advanced in the world.",
     hint:"The noun meaning 'aging of society,' using the characters for high, age, and -ification."},

    {type:"mc", q:"かくさしゃかい means:", opts:["A society with growing inequality/gaps","A classless society","A wealthy society","A peaceful society"], ans:"A society with growing inequality/gaps",
     hint:"かくさ (gap/disparity) + しゃかい (s...) describes widening i...."},

    {type:"match", pairs:[{trg:"こうれいか",src:"population aging"},{trg:"しょうしか",src:"declining birth rate"},{trg:"ふくし",src:"social welfare"},{trg:"かいご",src:"nursing care"}]},

    {type:"fb", s:"しょうしか{1}としてこそだてしえんがあります。\n(As a countermeasure for declining births, there is child-rearing support.)", a:"たいさく", opts:["たいさく","もんだい","げんいん","けっか"], sSrc:"As a countermeasure for declining births, there is child-rearing support.",
     hint:"The noun meaning countermeasure or policy solution, often paired with social problems."},

    {type:"mc", q:"きゅうむ describes:", opts:["A task that demands immediate action","A routine duty","A completed task","An optional project"], ans:"A task that demands immediate action",
     hint:"This formal word combines 'urgent' with 'duty/t...' to signal pressing need."}
  ]
};
export default BATCH5_L_2;
