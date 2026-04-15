// Unit 27 Expansion — Lesson 3: Climate & Energy
const LESSON_3 = {
  id:"jav2_u27l3", title:"きこうとエネルギー", icon:"⚡", xp:15, board:true,
  steps:[
    {type:"intro", title:"Climate & Energy",
     desc:"Climate change discussions in Japanese media use specific vocabulary for weather patterns, energy sources, and carbon emissions. Master these terms to engage with Japan's energy debate, from nuclear power controversies to renewable energy goals.",
     goals:["Use きこうへんどう, さいせいかのう, はいしゅつりょう","Discuss energy policy in Japanese","Navigate climate science vocabulary at B2 level"]},

    {type:"teach", trg:"きこうへんどう", src:"climate change", pos:"noun", gender:null,
     note:"Kanji: 気候変動. きこう (climate) + へんどう (change/fluctuation).\nきこうへんどうたいさく = climate change measures.",
     example:"A: きこうへんどうはせかいてきなもんだいです。\nB: すべてのくにがきょうりょくするひつようがあります。",
     exampleSrc:"A: Climate change is a global problem.\nB: All countries need to cooperate.",
     funFact:"気候変動 is the formal term used in policy and science. 地球温暖化 (global warming) focuses on temperature, while きこうへんどう encompasses all climate shifts. Japan signed the Paris Agreement in 2016 and pledged carbon neutrality by 2050. The term カーボンニュートラル (carbon neutral) is now part of everyday Japanese news vocabulary."},

    {type:"teach", trg:"さいせいかのうエネルギー", src:"renewable energy", pos:"noun", gender:null,
     note:"さいせい (regeneration) + かのう (possible) + エネルギー (energy).\nOften abbreviated to さいエネ in headlines.",
     example:"A: さいせいかのうエネルギーのわりあいをふやすべきです。\nB: たいようこうやふうりょくがきたいされていますね。",
     exampleSrc:"A: We should increase the proportion of renewable energy.\nB: Solar and wind power are being anticipated.",
     funFact:"Japan's energy mix debate intensified after the 2011 Fukushima disaster. Before 2011, nuclear provided about 30% of electricity. After, Japan rapidly shifted to fossil fuels while trying to expand さいせいかのうエネルギー. The debate between nuclear restart and renewables remains one of Japan's most contentious policy issues."},

    {type:"teach", trg:"はいしゅつりょう", src:"emission volume / amount of emissions", pos:"noun", gender:null,
     note:"はいしゅつ (emission) + りょう (quantity).\nCO2はいしゅつりょう = CO2 emission volume.",
     example:"A: CO2のはいしゅつりょうをさくげんするもくひょうがあります。\nB: にせんごじゅうねんまでにゼロにするのですね。",
     exampleSrc:"A: There is a target to reduce CO2 emission volume.\nB: To zero by 2050, right?",
     funFact:"排出量 is a three-part compound: 排 (expel) + 出 (exit) + 量 (amount). Japan is the world's fifth-largest CO2 emitter. The phrase はいしゅつりょうさくげん (emission reduction) appears in every environmental policy document. りょう as a suffix creates many measurement words: 生産量 (production volume), 消費量 (consumption volume)."},

    {type:"mc", q:"さいせいかのうエネルギー includes:", opts:["Nuclear power only","Fossil fuels like coal","Solar and wind power","Natural gas pipelines"], ans:"Solar and wind power",
     hint:"さいせい means regeneration and かのう means possible: energy that regenerates itself."},

    {type:"teach", trg:"たいようこう", src:"solar power / sunlight", pos:"noun", gender:null,
     note:"Kanji: 太陽光. たいよう (sun) + こう (light).\nたいようこうはつでん = solar power generation.",
     example:"A: たいようこうパネルをせっちするかていがふえています。\nB: でんきだいのせつやくにもなりますね。",
     exampleSrc:"A: Households installing solar panels are increasing.\nB: It also saves on electricity costs.",
     funFact:"Japan has the third-largest installed solar capacity in the world. After Fukushima, generous feed-in tariffs drove a solar boom. The countryside is dotted with メガソーラー (mega-solar) installations. However, Japan's mountainous terrain and typhoon-prone climate create challenges for large-scale たいようこう deployment."},

    {type:"teach", trg:"さくげん", src:"reduction / cutback", pos:"noun", gender:null,
     note:"Kanji: 削減. さくげんする = to reduce/cut.\nよさんさくげん = budget cuts. はいしゅつさくげん = emission reduction.",
     example:"A: コストをさくげんするひつようがあります。\nB: どこからさくげんしますか？",
     exampleSrc:"A: We need to reduce costs.\nB: Where do we cut from?",
     funFact:"削減 uses 削 (shave/scrape) and 減 (decrease). It implies active, deliberate reduction, not natural decline. The word is harsh in connotation: you are scraping something away. In policy debates, さくげんもくひょう (reduction targets) for emissions, budgets, and military spending are always contentious."},

    {type:"fb", s:"CO2の___をさくげんするもくひょうがあります。\n(There is a target to reduce CO2 emission volume.)", a:"はいしゅつりょう", opts:["はいしゅつりょう","たいきおせん","ちきゅうおんだんか","さいせいかのう"], sSrc:"There is a target to reduce CO2 emission volume.",
     hint:"The compound noun for the amount of substances expelled, measured in tons or units."},

    {type:"teach", trg:"げんしりょく", src:"nuclear power / atomic energy", pos:"noun", gender:null,
     note:"Kanji: 原子力. げんしりょくはつでんしょ = nuclear power plant.\nげんぱつ = abbreviation for nuclear power plant.",
     example:"A: げんしりょくはつでんしょのさいかどうについてぎろんがつづいています。\nB: さんせいとはんたいのいけんがわかれています。",
     exampleSrc:"A: Debate continues about restarting nuclear power plants.\nB: Opinions are divided between for and against.",
     funFact:"原子力 uses 原子 (atom) and 力 (power). Japan's relationship with nuclear energy is uniquely complex. As the only country to suffer atomic bombings, and having experienced Fukushima, the debate is deeply emotional. げんぱつ (nuclear plant) abbreviates 原子力発電所. Anti-nuclear protests use the slogan 原発ゼロ (zero nuclear plants)."},

    {type:"teach", trg:"さいかどう", src:"restart / resumption of operation", pos:"noun", gender:null,
     note:"Kanji: 再稼働. さい (again) + かどう (operation).\nUsed especially for nuclear power plant restarts.",
     example:"A: さいかどうにはあんぜんしんさがひつようです。\nB: じゅうみんのどういもひつようですね。",
     exampleSrc:"A: Safety inspections are required for restart.\nB: The consent of residents is also needed.",
     funFact:"再稼働 became a politically charged word after 2011. Every nuclear plant restart requires 原子力規制委員会 (Nuclear Regulation Authority) approval plus local government consent. The process is slow and contentious. As of the mid-2020s, only about a third of Japan's reactors have been approved for さいかどう."},

    {type:"mc", q:"Why is げんしりょく especially sensitive in Japan?", opts:["Nuclear plants are common everywhere","Japan has no nuclear history","Nuclear power is too expensive","Japan experienced both atomic bombings and a nuclear disaster"], ans:"Japan experienced both atomic bombings and a nuclear disaster",
     hint:"J...'s unique historical experiences with a... weapons and Fukushima shape this debate."},

    {type:"teach", trg:"じゅうみん", src:"residents / inhabitants", pos:"noun", gender:null,
     note:"Kanji: 住民. ちいきじゅうみん = local residents.\nじゅうみんとうひょう = residents' referendum.",
     example:"A: じゅうみんのあんぜんがさいゆうせんです。\nB: そのとおりです。",
     exampleSrc:"A: Residents' safety is the top priority.\nB: Exactly right.",
     funFact:"住民 uses 住 (live/dwell) and 民 (people). In environmental policy, じゅうみん consent is crucial. Japan has a strong tradition of じゅうみんうんどう (residents' movements) where local communities organize against unwanted developments. These movements successfully blocked pollution in the 1960s-70s and continue to shape local policy."},

    {type:"fb", s:"げんしりょくはつでんしょの___についてぎろんがつづいています。\n(Debate continues about restarting nuclear power plants.)", a:"さいかどう", opts:["さいかどう","さくげん","はいしゅつ","さいせい"], sSrc:"Debate continues about restarting nuclear power plants.",
     hint:"The noun for putting something back into operation after it was shut down."},

    {type:"match", pairs:[{trg:"きこうへんどう",src:"climate change"},{trg:"さいせいかのうエネルギー",src:"renewable energy"},{trg:"はいしゅつりょう",src:"emission volume"},{trg:"たいようこう",src:"solar power"}]},

    {type:"fb", s:"コストを___するひつようがあります。\n(We need to reduce costs.)", a:"さくげん", opts:["さくげん","さいかどう","かくだい","はいしゅつ"], sSrc:"We need to reduce costs.",
     hint:"The verb-noun meaning to shave down or cut back an amount."},

    {type:"match", pairs:[{trg:"げんしりょく",src:"nuclear power"},{trg:"さいかどう",src:"restart"},{trg:"じゅうみん",src:"residents"},{trg:"さくげん",src:"reduction"}]},
  ]
};
export default LESSON_3;
