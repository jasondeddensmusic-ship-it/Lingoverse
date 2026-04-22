// Unit 27 Expansion. Lesson 3: Climate & Energy
const LESSON_3 = {
  id:"jav2_u27l3", title:"きこうとエネルギー", icon:"⚡", xp:15, board:true,
  steps:[
    {type:"intro", title:"Climate & Energy",
     desc:"Climate change discussions in Japanese media use specific vocabulary for weather patterns, energy sources, and carbon emissions. Master these terms to engage with Japan's energy debate, from nuclear power controversies to renewable energy goals.",
     goals:["Use きこうへんどう, さいせいかのう, はいしゅつりょう","Discuss energy policy in Japanese","Navigate climate science vocabulary at B2 level"]},

    {type:"teach", trg:"きこうへんどう", src:"climate change", pos:"noun", gender:null,
     note:"Kanji: 気候変動. きこう (climate) + へんどう (change/fluctuation).\nきこうへんどうたいさく = climate change measures.",
     example:"A: きこうへんどうはせかいてきなもんだいです。\nB: すべてのくにがきょうりょくするひつようがあります。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Climate change is a global problem.\nB: All countries need to cooperate.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"気候変動 is the formal term used in policy and science. 地球温暖化 (global warming) focuses on temperature, while きこうへんどう encompasses all climate shifts. Japan signed the Paris Agreement in 2016 and pledged carbon neutrality by 2050. The term カーボンニュートラル (carbon neutral) is now part of everyday Japanese news vocabulary."},

    {type:"teach", trg:"さいせいかのうエネルギー", src:"renewable energy", pos:"noun", gender:null,
     note:"さいせい (regeneration) + かのう (possible) + エネルギー (energy).\nOften abbreviated to さいエネ in headlines.",
     example:"A: さいせいかのうエネルギーのわりあいをふやすべきです。\nB: たいようこうやふうりょくがきたいされていますね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: We should increase the proportion of renewable energy.\nB: Solar and wind power are being anticipated.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Japan's energy mix debate intensified after the 2011 Fukushima disaster. Before 2011, nuclear provided about 30% of electricity. After, Japan rapidly shifted to fossil fuels while trying to expand さいせいかのうエネルギー. The debate between nuclear restart and renewables remains one of Japan's most contentious policy issues."},

    {type:"teach", trg:"はいしゅつりょう", src:"emission volume / amount of emissions", pos:"noun", gender:null,
     note:"はいしゅつ (emission) + りょう (quantity).\nCO2はいしゅつりょう = CO2 emission volume.",
     example:"A: CO2のはいしゅつりょうをさくげんするもくひょうがあります。\nB: にせんごじゅうねんまでにゼロにするのですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: There is a target to reduce CO2 emission volume.\nB: To zero by 2050, right?\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"排出量 is a three-part compound: 排 (expel) + 出 (exit) + 量 (amount). Japan is the world's fifth-largest CO2 emitter. The phrase はいしゅつりょうさくげん (emission reduction) appears in every environmental policy document. りょう as a suffix creates many measurement words: 生産量 (production volume), 消費量 (consumption volume)."},

    {type:"mc", q:"さいせいかのうエネルギー includes:", opts:["Solar and wind power","Natural gas pipelines","Nuclear power only","Fossil fuels like coal"], ans:"Solar and wind power",
     hint:"さいせい means regeneration and かのう means possible: energy that regenerates itself."},

    {type:"teach", trg:"たいようこう", src:"solar power / sunlight", pos:"noun", gender:null,
     note:"Kanji: 太陽光. たいよう (sun) + こう (light).\nたいようこうはつでん = solar power generation.",
     example:"A: たいようこうパネルをせっちするかていがふえています。\nB: でんきだいのせつやくにもなりますね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Households installing solar panels are increasing.\nB: It also saves on electricity costs.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japan has the third-largest installed solar capacity in the world. After Fukushima, generous feed-in tariffs drove a solar boom. The countryside is dotted with メガソーラー (mega-solar) installations. However, Japan's mountainous terrain and typhoon-prone climate create challenges for large-scale たいようこう deployment."},

    {type:"teach", trg:"さくげん", src:"reduction / cutback", pos:"noun", gender:null,
     note:"Kanji: 削減. さくげんする = to reduce/cut.\nよさんさくげん = budget cuts. はいしゅつさくげん = emission reduction.",
     example:"A: コストをさくげんするひつようがあります。\nB: どこからさくげんしますか？\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: We need to reduce costs.\nB: Where do we cut from?\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"削減 uses 削 (shave/scrape) and 減 (decrease). It implies active, deliberate reduction, not natural decline. The word is harsh in connotation: you are scraping something away. In policy debates, さくげんもくひょう (reduction targets) for emissions, budgets, and military spending are always contentious."},

    {type:"fb", s:"CO2の{1}をさくげんするもくひょうがあります。\n(There is a target to reduce CO2 emission volume.)", a:"はいしゅつりょう", opts:["はいしゅつりょう","たいきおせん","ちきゅうおんだんか","さいせいかのう"], sSrc:"There is a target to reduce CO2 emission volume.",
     hint:"The compound noun for the amount of substances expelled, measured in tons or units."},

    {type:"teach", trg:"げんしりょく", src:"nuclear power / atomic energy", pos:"noun", gender:null,
     note:"Kanji: 原子力. げんしりょくはつでんしょ = nuclear power plant.\nげんぱつ = abbreviation for nuclear power plant.",
     example:"A: げんしりょくはつでんしょのさいかどうについてぎろんがつづいています。\nB: さんせいとはんたいのいけんがわかれています。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Debate continues about restarting nuclear power plants.\nB: Opinions are divided between for and against.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"原子力 uses 原子 (atom) and 力 (power). Japan's relationship with nuclear energy is uniquely complex. As the only country to suffer atomic bombings, and having experienced Fukushima, the debate is deeply emotional. げんぱつ (nuclear plant) abbreviates 原子力発電所. Anti-nuclear protests use the slogan 原発ゼロ (zero nuclear plants)."},

    {type:"teach", trg:"さいかどう", src:"restart / resumption of operation", pos:"noun", gender:null,
     note:"Kanji: 再稼働. さい (again) + かどう (operation).\nUsed especially for nuclear power plant restarts.",
     example:"A: さいかどうにはあんぜんしんさがひつようです。\nB: じゅうみんのどういもひつようですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Safety inspections are required for restart.\nB: The consent of residents is also needed.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"再稼働 became a politically charged word after 2011. Every nuclear plant restart requires 原子力規制委員会 (Nuclear Regulation Authority) approval plus local government consent. The process is slow and contentious. As of the mid-2020s, only about a third of Japan's reactors have been approved for さいかどう."},

    {type:"mc", q:"Why is げんしりょく especially sensitive in Japan?", opts:["Nuclear power is too expensive","Japan experienced both atomic bombings and a nuclear disaster","Nuclear plants are common everywhere","Japan has no nuclear history"], ans:"Japan experienced both atomic bombings and a nuclear disaster",
     hint:"J...'s unique historical experiences with a... weapons and Fukushima shape this debate."},

    {type:"teach", trg:"じゅうみん", src:"residents / inhabitants", pos:"noun", gender:null,
     note:"Kanji: 住民. ちいきじゅうみん = local residents.\nじゅうみんとうひょう = residents' referendum.",
     example:"A: じゅうみんのあんぜんがさいゆうせんです。\nB: そのとおりです。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Residents' safety is the top priority.\nB: Exactly right.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"住民 uses 住 (live/dwell) and 民 (people). In environmental policy, じゅうみん consent is crucial. Japan has a strong tradition of じゅうみんうんどう (residents' movements) where local communities organize against unwanted developments. These movements successfully blocked pollution in the 1960s-70s and continue to shape local policy."},

    {type:"fb", s:"げんしりょくはつでんしょの{1}についてぎろんがつづいています。\n(Debate continues about restarting nuclear power plants.)", a:"さいかどう", opts:["さいかどう","さくげん","はいしゅつ","さいせい"], sSrc:"Debate continues about restarting nuclear power plants.",
     hint:"The noun for putting something back into operation after it was shut down."},

    {type:"match", pairs:[{trg:"きこうへんどう",src:"climate change"},{trg:"さいせいかのうエネルギー",src:"renewable energy"},{trg:"はいしゅつりょう",src:"emission volume"},{trg:"たいようこう",src:"solar power"}]},

    {type:"fb", s:"コストを{1}するひつようがあります。\n(We need to reduce costs.)", a:"さくげん", opts:["さくげん","さいかどう","かくだい","はいしゅつ"], sSrc:"We need to reduce costs.",
     hint:"The verb-noun meaning to shave down or cut back an amount."},

    {type:"match", pairs:[{trg:"げんしりょく",src:"nuclear power"},{trg:"さいかどう",src:"restart"},{trg:"じゅうみん",src:"residents"},{trg:"さくげん",src:"reduction"}]},
  ]
};
export default LESSON_3;
