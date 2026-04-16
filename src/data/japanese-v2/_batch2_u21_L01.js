// Unit 21 Batch 2 Lesson 1: じんこうもんだい (Demographics & Population Issues)
const BATCH2_L_1 = {
  id:"jav2_u21l_b2_1", title:"じんこうもんだい", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"じんこうもんだい",
     desc:"Japan faces some of the world's most pressing demographic challenges. Learn vocabulary for discussing population decline, birth rates, aging society, and rural depopulation. These topics dominate Japanese news and political debate.",
     goals:["Discuss population decline and birth rate issues","Describe aging society challenges and solutions","Use demographic vocabulary in news contexts"]},

    {type:"teach", trg:"じんこう", src:"population", pos:"noun", gender:null,
     note:"Kanji: 人口. じん (person) + こう (mouth/opening).\nにほんのじんこう = Japan's population.",
     example:"A: にほんのじんこうがへっています。\nB: しょうしかがげんいんですね。",
     exampleSrc:"A: Japan's population is decreasing.\nB: The declining birthrate is the cause.",
     funFact:"人口 literally means 'people's mouths,' an ancient way of counting people by mouths to feed. Japan's population peaked at about 128 million in 2008 and has been declining since. Projections suggest it could drop below 100 million by 2050, making 人口減少 (jinkou genshou, population decline) a constant news topic."},

    {type:"teach", trg:"しょうしか", src:"declining birthrate / falling birth rate", pos:"noun", gender:null,
     note:"しょう (few) + し (child) + か (-ification). Kanji: 少子化.\nしょうしこうれいか = aging society with few children.",
     example:"A: しょうしかをとめるたいさくがひつようです。\nB: たとえば、どんなたいさくがありますか？",
     exampleSrc:"A: Countermeasures to stop the declining birthrate are needed.\nB: For example, what kind of measures are there?",
     funFact:"少子化 is paired with 高齢化 (aging) as Japan's twin demographic crises: 少子高齢化 (shoushi koureika). Japan's birth rate has fallen to about 1.2 children per woman, far below the 2.1 needed for stable population. Government measures include childcare subsidies and parental leave expansion."},

    {type:"teach", trg:"げんいん", src:"cause / reason / origin", pos:"noun", gender:null,
     note:"Kanji: 原因. げん (source/plain) + いん (cause/factor).\nげんいんをさぐる = to investigate the cause.",
     example:"A: このもんだいのげんいんはなんですか？\nB: けいざいてきなふあんがおおきいです。",
     exampleSrc:"A: What is the cause of this problem?\nB: Economic anxiety is a major factor.",
     funFact:"原因 is the standard word for 'cause' in analytical discussion. Japanese news always investigates 原因: fire causes, accident causes, economic causes. The word pairs with 結果 (kekka, result) in cause-and-effect analysis: 原因と結果 (cause and effect), a fundamental framework in Japanese journalism."},

    {type:"teach", trg:"へる", src:"to decrease / to diminish", pos:"verb", gender:null,
     note:"Group 1 verb (intransitive). Kanji: 減る.\nじんこうがへる = population decreases.\nTransitive pair: へらす (to reduce).",
     example:"A: わかものがへっています。\nB: しょうしかのえいきょうですね。",
     exampleSrc:"A: The number of young people is decreasing.\nB: It is the effect of the declining birthrate.",
     funFact:"減る (intransitive, to decrease) pairs with 減らす (transitive, to reduce). The distinction matters: じんこうがへる (population decreases, naturally) vs. ごみをへらす (to reduce garbage, deliberately). This intransitive/transitive verb pair pattern is fundamental to Japanese."},

    {type:"mc", q:"しょうしかとこうれいか combined describe:", opts:["A growing population","Japan's twin demographic crisis: few births and aging","Economic growth","Immigration policy"], ans:"Japan's twin demographic crisis: few births and aging",
     hint:"少子 (f... children) + 化 and 高齢 (elderly) + 化 describe J...'s d... reality."},

    {type:"teach", trg:"ふえる", src:"to increase / to grow in number", pos:"verb", gender:null,
     note:"Group 2 verb (intransitive). Kanji: 増える.\nOpposite of へる. こうれいしゃがふえる = elderly increase.\nTransitive pair: ふやす (to increase).",
     example:"A: ひとりぐらしのこうれいしゃがふえています。\nB: ちいきのしえんがだいじですね。",
     exampleSrc:"A: The number of elderly people living alone is increasing.\nB: Community support is important.",
     funFact:"増える pairs with 増やす (to increase deliberately). In demographic discussions, こうれいしゃがふえる (elderly increase, naturally) appears alongside わかものをふやす (to increase young people, policy goal). Japan aims to increase birth rates through various policy incentives."},

    {type:"teach", trg:"ちいき", src:"region / area / community", pos:"noun", gender:null,
     note:"Kanji: 地域. ち (earth/ground) + いき (area/range).\nちいきしゃかい = local community.",
     example:"A: このちいきはこうれいかがすすんでいます。\nB: わかいひとがへりましたね。",
     exampleSrc:"A: Aging is advancing in this region.\nB: Young people have decreased.",
     funFact:"地域 describes communities from neighborhoods to entire prefectures. Rural regions (地方, chihou) face severe depopulation (過疎化, kasoka). Many villages have more elderly than young people. 地域おこし協力隊 (chiiki okoshi kyouryokutai, regional revitalization cooperators) is a government program to attract young people to rural areas."},

    {type:"fb", s:"にほんの{1}がへっています。\n(Japan's population is decreasing.)", a:"じんこう", opts:["じんこう","こうれいしゃ","けいざい","せいふ"], sSrc:"Japan's population is decreasing.",
     hint:"The word for the total number of people in a country, made from 'person' and 'mouth.'"},

    {type:"teach", trg:"いみん", src:"immigrant / immigration", pos:"noun", gender:null,
     note:"Kanji: 移民. い (move/transfer) + みん (people).\nいみんせいさく = immigration policy.",
     example:"A: いみんをうけいれるべきですか？\nB: さまざまないけんがあります。",
     exampleSrc:"A: Should we accept immigrants?\nB: There are various opinions.",
     funFact:"移民 is a highly debated topic in Japan, which has historically maintained strict immigration policies. With population decline, debate about accepting more 移民 has intensified. Japan introduced a technical intern program and expanded work visa categories, though the word 移民 itself is politically sensitive. Officials prefer 外国人材 (foreign human resources)."},

    {type:"teach", trg:"かそか", src:"depopulation / becoming sparsely populated", pos:"noun", gender:null,
     note:"Kanji: 過疎化. か (excess) + そ (sparse) + か (-ification).\nいなかのかそか = rural depopulation.",
     example:"A: いなかのかそかがしんこくです。\nB: がっこうもへいこうしています。",
     exampleSrc:"A: Rural depopulation is severe.\nB: Schools are also closing.",
     funFact:"過疎化 is the opposite of urbanization. As young people move to cities for education and work, rural areas lose population. Some villages have become 限界集落 (genkai shuuraku, marginal settlements) where over half the population is elderly. Abandoned houses (空き家, akiya) number over 8 million in Japan."},

    {type:"teach", trg:"しんこく", src:"serious / severe / critical", pos:"adj", gender:null,
     note:"な-adjective. Kanji: 深刻. しん (deep) + こく (engrave/severe).\nしんこくなもんだい = a serious problem.",
     example:"A: しんこくなじんざいぶそくです。\nB: かいけつさくをかんがえなければなりません。",
     exampleSrc:"A: It is a serious labor shortage.\nB: We must think of solutions.",
     funFact:"深刻 literally means 'deeply engraved,' suggesting a problem that cuts deep. Japanese news uses 深刻 to signal that a situation has crossed from concerning to critical. しんこくなじんざいぶそく (severe labor shortage) is one of the most-heard phrases in modern Japanese economic discussion."},

    {type:"mc", q:"かそか means:", opts:["overcrowding","population growth","depopulation / becoming sparse","urbanization"], ans:"depopulation / becoming sparse",
     hint:"過 (excess/passing) + 疎 (s.../alienated) + 化 (-ification). People leaving, areas emptying."},

    {type:"tip", title:"Japan's Demographic Vocabulary",
     text:"Population basics:\nじんこう = population\nしょうしか = declining birthrate\nこうれいか = aging population\nかそか = depopulation (rural)\n\nChange verbs:\nへる = to decrease (intransitive)\nふえる = to increase (intransitive)\nへらす = to reduce (transitive)\nふやす = to increase (transitive)\n\nDiscussion vocabulary:\nげんいん = cause\nたいさく = countermeasure\nしんこく = serious/severe\nいみん = immigration",
     deepDive:{title:"Japan's Demographic Timeline",
      text:"Key demographic milestones:\n\n2008: Population peaked at ~128 million.\n2020: Population dropped below 126 million.\n2023: Birth rate hit record low (~758,000 births).\n2050: Projected to fall below 100 million.\n2100: Could drop to ~60 million without change.\n\nThe government has declared the situation a 'national crisis' (国難, kokunan). Measures include: free preschool education, expanded parental leave, housing subsidies for families, and encouraging remote work in rural areas. Whether these will reverse the trend remains Japan's defining question."}},

    {type:"match", pairs:[{trg:"じんこう",src:"population"},{trg:"しょうしか",src:"declining birthrate"},{trg:"かそか",src:"depopulation"},{trg:"げんいん",src:"cause"}]},

    {type:"fb", s:"いなかの{1}がしんこくです。\n(Rural depopulation is severe.)", a:"かそか", opts:["かそか","こうれいか","しょうしか","じんこう"], sSrc:"Rural depopulation is severe.",
     hint:"The word for areas losing population, combining 'excess' + 'sparse' + '-ification.'"},

    {type:"match", pairs:[{trg:"へる",src:"to decrease"},{trg:"ふえる",src:"to increase"},{trg:"いみん",src:"immigration"},{trg:"しんこく",src:"serious/severe"}]},

    {type:"mc", q:"へる vs へらす: what is the difference?", opts:["They mean the same thing","へる = decrease naturally (intransitive); へらす = reduce deliberately (transitive)","へる is formal; へらす is casual","へる is past; へらす is present"], ans:"へる = decrease naturally (intransitive); へらす = reduce deliberately (transitive)",
     hint:"Intransitive (it decreases by itself) vs. transitive (someone reduces it)."},
  ]
};
export default BATCH2_L_1;
