// Unit 26 Batch 2 Lesson 3: メディアリテラシー (Media Literacy)
const BATCH2_L_3 = {
  id:"jav2_u26l_b2_3", title:"メディアリテラシー", icon:"🔍", xp:15, board:true,
  steps:[
    {type:"intro", title:"メディアリテラシー",
     desc:"Critical media consumption requires vocabulary for bias, sources, and credibility. Learn to discuss media influence, distinguish fact from opinion, and evaluate news sources in Japanese. These terms are essential for reading editorials and JLPT N2 opinion passages.",
     goals:["Discuss media bias and credibility","Distinguish facts from opinions","Evaluate news sources critically"]},

    {type:"teach", trg:"へんこう", src:"bias / partiality / deviation", pos:"noun", gender:null,
     note:"Kanji: 偏向. へんこうほうどう = biased reporting.\nUsed for media criticism and academic discussion.",
     example:"A: このほうどうにはへんこうがあるのではないですか？\nB: たしかに、いっぽうてきなしてんですね。",
     exampleSrc:"A: Isn't there bias in this reporting?\nB: Indeed, it is a one-sided perspective.",
     funFact:"偏向 uses 偏 (lean/incline) and 向 (direction). When reporting 'leans in one direction,' it shows bias. Japanese media criticism often focuses on へんこうほうどう, with different outlets accused of leaning left (Asahi) or right (Yomiuri). Media literacy education teaches students to read multiple sources to identify へんこう."},

    {type:"teach", trg:"しんらいせい", src:"reliability / credibility / trustworthiness", pos:"noun", gender:null,
     note:"Kanji: 信頼性. しんらいせいがたかい = highly reliable.\nじょうほうのしんらいせい = reliability of information.",
     example:"A: このじょうほうのしんらいせいをどうひょうかしますか？\nB: いくつかのしゅってんをかくにんするひつようがあります。",
     exampleSrc:"A: How do you evaluate the reliability of this information?\nB: We need to verify several sources.",
     funFact:"信頼性 adds the suffix 性 (nature/quality) to 信頼 (trust). In Japanese academic writing, demonstrating しんらいせい of data and sources is fundamental. The word also applies to people and institutions: しんらいできるひと (a trustworthy person). Building しんらい takes time in Japanese culture, but once established, it is a powerful asset."},

    {type:"teach", trg:"しゅってん", src:"source / origin / citation", pos:"noun", gender:null,
     note:"Kanji: 出典. しゅってんをしめす = to cite a source.\nUsed in academic and journalistic writing.",
     example:"A: このデータのしゅってんはなんですか？\nB: そうむしょうのとうけいです。",
     exampleSrc:"A: What is the source of this data?\nB: It is statistics from the Ministry of Internal Affairs.",
     funFact:"出典 uses 出 (come out) and 典 (canon/classic). A source is where information 'comes out from.' In Japanese academic culture, citing しゅってん is mandatory. Plagiarism is taken seriously, and university students learn proper citation formats. News credibility also depends on identifiable しゅってん for claims and statistics."},

    {type:"mc", q:"へんこうほうどう means:", opts:["Breaking news","Biased reporting","Live broadcast","Editorial column"], ans:"Biased reporting",
     hint:"The compound combines the word for 'bias/leaning' with the word for 'r....'"},

    {type:"teach", trg:"きゃっかんてき", src:"objective", pos:"adj", gender:null,
     note:"Kanji: 客観的. Opposite: しゅかんてき (subjective).\nきゃっかんてきにみる = to view objectively.",
     example:"A: できるだけきゃっかんてきにほうどうするべきです。\nB: しかしかんぜんなきゃっかんせいはむずかしいですね。",
     exampleSrc:"A: We should report as objectively as possible.\nB: However, complete objectivity is difficult.",
     funFact:"客観的 adds the adjectival suffix 的 to きゃっかん (objectivity). The quest for きゃっかんてき reporting is a central ideal of journalism globally. In Japanese, the tension between きゃっかんてき (objective) and しゅかんてき (subjective) reporting is actively debated. Some argue pure きゃっかんせい is impossible, and transparency about perspective is more honest."},

    {type:"teach", trg:"せろん", src:"public opinion", pos:"noun", gender:null,
     note:"Kanji: 世論. Also read よろん. せろんちょうさ = public opinion poll.\nせろんをうごかす = to sway public opinion.",
     example:"A: せろんちょうさでははんたいがおおいです。\nB: せいふはせろんをむしできないでしょう。",
     exampleSrc:"A: In public opinion polls, opposition is high.\nB: The government cannot ignore public opinion.",
     funFact:"世論 has two readings: せろん (more common in media) and よろん (more traditional). The word uses 世 (world/society) and 論 (opinion/argument). Japanese media heavily reports on せろんちょうさ (opinion polls), and governments pay close attention. Major newspapers conduct their own polls, creating a rich landscape of public sentiment data."},

    {type:"teach", trg:"とうけい", src:"statistics", pos:"noun", gender:null,
     note:"Kanji: 統計. とうけいデータ = statistical data.\nとうけいがく = statistics (as a discipline).",
     example:"A: とうけいデータにもとづいてはんだんしましょう。\nB: すうじだけでなくはいけいもかんがえるべきです。",
     exampleSrc:"A: Let us make judgments based on statistical data.\nB: We should consider not just numbers but the background too.",
     funFact:"統計 uses 統 (govern/unite) and 計 (measure/plan). Japan's statistics bureau (総務省統計局) produces detailed data on population, economy, and society. Japanese business culture values とうけい highly. The phrase すうじでかたる (to speak with numbers) reflects the expectation that arguments should be supported by data."},

    {type:"fb", s:"このデータの{1}はなんですか？\n(What is the source of this data?)", a:"しゅってん", opts:["しゅってん","しんらいせい","へんこう","とうけい"], sSrc:"What is the source of this data?",
     hint:"The noun meaning 'source' or 'citation,' where information originally came from."},

    {type:"teach", trg:"いっぽうてき", src:"one-sided / unilateral", pos:"adj", gender:null,
     note:"Kanji: 一方的. いっぽうてきなほうどう = one-sided reporting.\nいっぽうてきなしゅちょう = one-sided argument.",
     example:"A: いっぽうてきなじょうほうだけではんだんしないでください。\nB: りょうほうのいけんをきくべきですね。",
     exampleSrc:"A: Please do not judge based on one-sided information alone.\nB: We should listen to both sides' opinions.",
     funFact:"一方的 adds 的 (adjective marker) to 一方 (one direction). When something is いっぽうてき, it only shows one angle. In media criticism, いっぽうてきなほうどう is a serious charge. Japanese courts have ruled that overly いっぽうてき news coverage can violate fair reporting standards."},

    {type:"teach", trg:"じじつ", src:"fact / reality / truth", pos:"noun", gender:null,
     note:"Kanji: 事実. じじつかくにん = fact-checking.\nじじつにもとづく = based on facts.",
     example:"A: じじつといけんをくべつすることがたいせつです。\nB: メディアリテラシーのきほんですね。",
     exampleSrc:"A: It is important to distinguish facts from opinions.\nB: That is the foundation of media literacy.",
     funFact:"事実 uses 事 (matter/thing) and 実 (truth/fruit). Facts are 'true matters.' The distinction between じじつ (fact) and いけん (opinion) is central to media literacy education in Japan. NHK, as the public broadcaster, emphasizes じじつにもとづくほうどう (fact-based reporting), though its perceived neutrality is debated."},

    {type:"mc", q:"せろんちょうさ means:", opts:["Market research","Public opinion poll","Government statistics","News broadcast rating"], ans:"Public opinion poll",
     hint:"せろん means 'p... o...' and ちょうさ means 'survey/investigation.'"},

    {type:"teach", trg:"くべつ", src:"distinction / differentiation", pos:"noun", gender:null,
     note:"Kanji: 区別. くべつする = to distinguish.\nくべつがつかない = cannot tell apart.",
     example:"A: フェイクニュースとほんとうのニュースのくべつがむずかしくなっています。\nB: しゅってんをかくにんするしゅうかんがたいせつです。",
     exampleSrc:"A: It is becoming difficult to distinguish fake news from real news.\nB: The habit of checking sources is important.",
     funFact:"区別 uses 区 (ward/section) and 別 (separate/different). To distinguish is to 'separate into sections.' In Japanese logic, making clear くべつ is valued. The phrase くべつなく (without distinction) is used positively for equality: せいべつのくべつなく (regardless of gender). Clear thinking requires clear くべつ."},

    {type:"fb", s:"じじつと{1}をくべつすることがたいせつです。\n(It is important to distinguish facts from opinions.)", a:"いけん", opts:["いけん","じけん","とうけい","しゅってん"], sSrc:"It is important to distinguish facts from opinions.",
     hint:"The noun meaning a personal view or judgment, contrasted with verifiable facts."},

    {type:"match", pairs:[{trg:"へんこう",src:"bias"},{trg:"しんらいせい",src:"reliability"},{trg:"しゅってん",src:"source/citation"},{trg:"せろん",src:"public opinion"}]},

    {type:"fb", s:"いっぽうてきな{1}だけではんだんしないでください。\n(Please do not judge based on one-sided information alone.)", a:"じょうほう", opts:["じょうほう","いけん","とうけい","じじつ"], sSrc:"Please do not judge based on one-sided information alone.",
     hint:"The general noun for knowledge or data received about something."},

    {type:"match", pairs:[{trg:"きゃっかんてき",src:"objective"},{trg:"いっぽうてき",src:"one-sided"},{trg:"じじつ",src:"fact"},{trg:"くべつ",src:"distinction"}]},

    {type:"mc", q:"Which practice is most fundamental to media literacy?", opts:["Believing the first source you find","Checking multiple sources to verify information","Only reading one trusted newspaper","Ignoring all news entirely"], ans:"Checking multiple sources to verify information",
     hint:"しゅってんをかくにんする (verifying sources) is the foundational skill of critical media consumption."},
  ]
};
export default BATCH2_L_3;
