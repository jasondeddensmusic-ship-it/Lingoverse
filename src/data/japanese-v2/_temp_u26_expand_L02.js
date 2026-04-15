// Unit 26 Expansion — Lesson 4: Editorial Vocabulary
const LESSON_4 = {
  id:"jav2_u26l4", title:"ろんぴょうのことば", icon:"🖊️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Editorial Vocabulary",
     desc:"Editorials and opinion pieces use sophisticated vocabulary to analyze, argue, and persuade. Learn the words that shape public discourse in Japanese media: criticism, influence, trends, and the verbs of argumentation.",
     goals:["Use ひはん, えいきょう, どうこう in editorial contexts","Understand opinion-expression vocabulary","Read and discuss editorial arguments"]},

    {type:"teach", trg:"ひはん", src:"criticism / critique", pos:"noun", gender:null,
     note:"Kanji: 批判. ひはんする = to criticize.\nひはんてき = critical (adjective form).",
     example:"A: せいふのたいおうにたいするひはんがたかまっています。\nB: くわしくはしゃせつをよんでください。",
     exampleSrc:"A: Criticism of the government's response is growing.\nB: Please read the editorial for details.",
     funFact:"批判 uses 批 (strike/criticize) and 判 (judge). Japanese media criticism tends to be less confrontational than Western media. Editorials often use the pattern ...が問われている (is being questioned) rather than direct attacks. ひはんてき (critical) in academic use means 'analytically evaluating,' not necessarily negative."},

    {type:"teach", trg:"えいきょう", src:"influence / impact", pos:"noun", gender:null,
     note:"Kanji: 影響. えいきょうをあたえる = to have an influence.\nえいきょうをうける = to be influenced by.",
     example:"A: このせいさくはけいざいにおおきなえいきょうをあたえるでしょう。\nB: どのようなえいきょうですか？",
     exampleSrc:"A: This policy will have a major impact on the economy.\nB: What kind of impact?",
     funFact:"影響 uses 影 (shadow) and 響 (echo). Influence is poetically described as casting a shadow and creating an echo. The word appears in nearly every editorial discussing policy consequences. The pattern にえいきょうをあたえる (give influence to) and からえいきょうをうける (receive influence from) are essential editorial constructions."},

    {type:"teach", trg:"どうこう", src:"trend / tendency / movement", pos:"noun", gender:null,
     note:"Kanji: 動向. どうこうをちゅうしする = to watch trends closely.\nしじょうのどうこう = market trends.",
     example:"A: せかいけいざいのどうこうにちゅういがひつようです。\nB: とくにアジアしじょうのどうこうですね。",
     exampleSrc:"A: We need to pay attention to global economic trends.\nB: Especially Asian market trends.",
     funFact:"動向 uses 動 (move) and 向 (direction). It captures which way something is moving. Editorials track どうこう of everything: voter sentiment, economic indicators, international relations. The related word 傾向 (keiko, tendency) is more about established patterns, while どうこう implies ongoing, still-developing movement."},

    {type:"mc", q:"えいきょうをあたえる means:", opts:["To exert an effect on something","To receive an effect","To ignore an effect","To predict an effect"], ans:"To exert an effect on something",
     hint:"あたえる means to give, so this phrase means giving influence to something."},

    {type:"teach", trg:"しゅちょう", src:"assertion / claim / argument", pos:"noun", gender:null,
     note:"Kanji: 主張. しゅちょうする = to assert/claim.\nStronger than いけん (opinion). Implies taking a firm position.",
     example:"A: ちょしゃはかんきょうほごのじゅうようせいをしゅちょうしています。\nB: せっとくりょくのあるしゅちょうですね。",
     exampleSrc:"A: The author asserts the importance of environmental protection.\nB: That is a persuasive argument.",
     funFact:"主張 uses 主 (main/master) and 張 (stretch/spread). An assertion 'stretches out' one's main point. Academic writing distinguishes between しゅちょう (the thesis or claim being made), こんきょ (grounds/evidence), and けつろん (conclusion). A good ろんぶん needs all three."},

    {type:"teach", trg:"せっとくりょく", src:"persuasiveness / convincing power", pos:"noun", gender:null,
     note:"せっとく (persuasion) + りょく (power/force).\nせっとくりょくがある = to be persuasive.",
     example:"A: このしゅちょうにはせっとくりょくがたりません。\nB: もっとデータがひつようですね。",
     exampleSrc:"A: This argument lacks persuasiveness.\nB: More data is needed.",
     funFact:"説得力 combines 説得 (persuasion) and 力 (power). Japanese values evidence-based persuasion over emotional appeals in formal contexts. The phrase せっとくりょくのある (persuasive) is a high compliment for an argument. Adding りょく (power) to nouns is productive: 想像力 (imagination), 集中力 (concentration), 表現力 (expressiveness)."},

    {type:"fb", s:"ちょしゃはかんきょうほごのじゅうようせいを___しています。\n(The author asserts the importance of environmental protection.)", a:"しゅちょう", opts:["しゅちょう","ひはん","えいきょう","ほうどう"], sSrc:"The author asserts the importance of environmental protection.",
     hint:"The noun for formally stating and defending a position or thesis."},

    {type:"teach", trg:"こんきょ", src:"grounds / basis / evidence", pos:"noun", gender:null,
     note:"Kanji: 根拠. こんきょにもとづく = to be based on evidence.\nかがくてきこんきょ = scientific basis.",
     example:"A: そのしゅちょうのこんきょはなんですか？\nB: さいきんのちょうさけっかです。",
     exampleSrc:"A: What is the basis for that assertion?\nB: Recent survey results.",
     funFact:"根拠 uses 根 (root) and 拠 (base/rely on). An argument's こんきょ is its root system. Without strong roots, the argument falls. Japanese editorial writing places heavy emphasis on こんきょ. The phrase こんきょのないしゅちょう (a claim without basis) is a devastating critique in any editorial or academic context."},

    {type:"teach", trg:"けいこう", src:"tendency / trend", pos:"noun", gender:null,
     note:"Kanji: 傾向. ...けいこうがある = there is a tendency to...\nMore established than どうこう. Used for patterns observed over time.",
     example:"A: わかいひとのしんぶんばなれのけいこうがつづいています。\nB: デジタルメディアにうつっていますね。",
     exampleSrc:"A: The trend of young people moving away from newspapers continues.\nB: They are shifting to digital media.",
     funFact:"傾向 uses 傾 (lean/tilt) and 向 (direction). A trend is something leaning in a direction. While どうこう tracks active movement, けいこう describes an established lean. The phrase ...のけいこうがみられる (a tendency is observed) is standard editorial and academic phrasing for describing patterns."},

    {type:"mc", q:"こんきょのないしゅちょう means:", opts:["A claim that lacks any supporting evidence","A strong, well-supported argument","A popular opinion","A government policy"], ans:"A claim that lacks any supporting evidence",
     hint:"こんきょ means the root or foundation, and ない means without."},

    {type:"teach", trg:"よろん", src:"public opinion", pos:"noun", gender:null,
     note:"Kanji: 世論. Also read せろん. よろんちょうさ = public opinion poll.\nよろんがわかれる = public opinion is divided.",
     example:"A: このもんだいについてよろんがわかれています。\nB: さんせいとはんたいがはんはんですね。",
     exampleSrc:"A: Public opinion is divided on this issue.\nB: It is about half in favor and half against.",
     funFact:"世論 has two accepted readings: よろん and せろん. Historically, せろん was standard, but よろん has become more common in modern usage. NHK uses both. よろんちょうさ (opinion polls) drive political coverage. Japan's major newspapers and broadcasters conduct regular polls, and the results often lead the news."},

    {type:"fb", s:"わかいひとのしんぶんばなれの___がつづいています。\n(The trend of young people moving away from newspapers continues.)", a:"けいこう", opts:["けいこう","どうこう","えいきょう","よろん"], sSrc:"The trend of young people moving away from newspapers continues.",
     hint:"The noun for an established tendency or pattern that has been observed over time."},

    {type:"match", pairs:[{trg:"ひはん",src:"criticism"},{trg:"えいきょう",src:"influence"},{trg:"どうこう",src:"trend (ongoing)"},{trg:"しゅちょう",src:"assertion"}]},

    {type:"fb", s:"このせいさくはけいざいにおおきな___をあたえるでしょう。\n(This policy will have a major impact on the economy.)", a:"えいきょう", opts:["えいきょう","ひはん","よろん","こんきょ"], sSrc:"This policy will have a major impact on the economy.",
     hint:"The noun for the shadow-and-echo effect one thing has on another."},

    {type:"match", pairs:[{trg:"せっとくりょく",src:"persuasiveness"},{trg:"こんきょ",src:"evidence/grounds"},{trg:"けいこう",src:"tendency"},{trg:"よろん",src:"public opinion"}]},
  ]
};
export default LESSON_4;
