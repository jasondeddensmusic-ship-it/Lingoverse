// Unit 27 Batch 2 Lesson 3: エネルギーせいさく (Energy Policy)
const BATCH2_L_3 = {
  id:"jav2_u27l_b2_3", title:"エネルギーせいさく", icon:"⚡", xp:15, board:true,
  steps:[
    {type:"intro", title:"エネルギーせいさく",
     desc:"Japan's energy policy is one of the most debated topics in its politics and media. After the 2011 Fukushima disaster, the energy mix became a central national issue. Learn vocabulary for nuclear power, renewable energy, and policy debate essential for understanding Japanese news and JLPT N2 reading.",
     goals:["Use energy-related vocabulary","Discuss nuclear and renewable energy","Understand Japan's energy policy debates"]},

    {type:"teach", trg:"げんしりょく", src:"nuclear power / atomic energy", pos:"noun", gender:null,
     note:"Kanji: 原子力. げんしりょくはつでんしょ = nuclear power plant.\nげんぱつ = abbreviated form.",
     example:"A: げんしりょくはつでんのしょうらいについてぎろんがつづいています。\nB: あんぜんせいとエネルギーじゅきゅうのバランスがかだいです。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: The debate about the future of nuclear power generation continues.\nB: Balancing safety and energy supply-demand is the challenge.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"原子力 uses 原子 (atom) and 力 (power). The 2011 Fukushima Daiichi disaster profoundly changed Japan's relationship with nuclear power. All 54 reactors were shut down, and as of 2024, only a fraction have restarted. The word げんぱつ (shortened from 原子力発電所) became one of the most emotionally charged terms in Japanese public discourse."},

    {type:"teach", trg:"さいせいかのうエネルギー", src:"renewable energy", pos:"noun", gender:null,
     note:"Kanji: 再生可能. さいせい (regeneration) + かのう (possible) + エネルギー.\nAlso: さいエネ (abbreviated).",
     example:"A: さいせいかのうエネルギーのかくだいがもとめられています。\nB: たいようこうやふうりょくはつでんがちゅうもくされていますね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Expansion of renewable energy is being demanded.\nB: Solar and wind power generation are attracting attention.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"再生可能エネルギー is a long compound typical of Japanese policy vocabulary. Japan's renewable energy push accelerated after Fukushima, with a feed-in tariff system (FIT) introduced in 2012. Solar panels now dot rooftops across Japan. However, Japan's mountainous terrain and dense population make large-scale wind and solar farms challenging."},

    {type:"teach", trg:"たいようこう", src:"solar power / sunlight", pos:"noun", gender:null,
     note:"Kanji: 太陽光. たいようこうはつでん = solar power generation.\nたいようこうパネル = solar panel.",
     example:"A: たいようこうパネルのせっちがぜんこくでひろがっています。\nB: はつでんコストもさがってきましたね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Installation of solar panels is spreading nationwide.\nB: Generation costs have also been decreasing.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"太陽光 uses 太陽 (sun) and 光 (light). Japan became one of the world's largest solar markets after Fukushima. The sight of たいようこうパネル on rooftops, in fields, and even floating on lakes has become common. Meガソーラー (mega-solar, large-scale solar farms) have transformed some rural landscapes, sparking both environmental benefits and local land-use debates."},

    {type:"mc", q:"げんぱつ is short for:", opts:["原子力発電所 (nuclear power plant)","原子番号 (atomic number)","原始林 (primeval forest)","原価計算 (cost accounting)"], ans:"原子力発電所 (nuclear power plant)",
     hint:"This abbreviation combines the first kanji of each word in the full compound for a n... facility."},

    {type:"teach", trg:"ふうりょく", src:"wind power", pos:"noun", gender:null,
     note:"Kanji: 風力. ふうりょくはつでん = wind power generation.\nふうしゃ = windmill / wind turbine.",
     example:"A: かいじょうふうりょくはつでんのけんきゅうがすすんでいます。\nB: にほんはかいがんせんがながいのでてきしていますね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Research on offshore wind power generation is advancing.\nB: Japan is suitable because it has a long coastline.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"風力 uses 風 (wind) and 力 (power). While Japan has significant wind resources, especially offshore, wind power development has been slower than solar. Concerns about typhoon damage, fishing rights, and landscape impact have slowed progress. However, the government has designated promotion zones for かいじょうふうりょく (offshore wind), aiming for significant expansion by 2030."},

    {type:"teach", trg:"でんりょく", src:"electric power / electricity", pos:"noun", gender:null,
     note:"Kanji: 電力. でんりょくがいしゃ = electric power company.\nでんりょくじゆうか = electricity deregulation.",
     example:"A: にほんのでんりょくじゅようはふゆとなつにピークをむかえます。\nB: れいぼうとだんぼうのえいきょうですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Japan's electricity demand peaks in winter and summer.\nB: That is the effect of air conditioning and heating.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"電力 uses 電 (electricity) and 力 (power). Japan's electricity market was monopolized by 10 regional power companies until 2016, when でんりょくじゆうか (deregulation) allowed competition. The reform was partly driven by the Fukushima disaster, which exposed risks of concentrated power supply. Consumers can now choose their electricity provider."},

    {type:"fb", s:"さいせいかのう{1}のかくだいがもとめられています。\n(Expansion of renewable energy is being demanded.)", a:"エネルギー", opts:["エネルギー","でんりょく","げんしりょく","しげん"], sSrc:"Expansion of renewable energy is being demanded.",
     hint:"The loanword from German/English meaning the capacity to do work, essential for modern life."},

    {type:"teach", trg:"はいしゅつりょう", src:"emissions (amount) / discharge volume", pos:"noun", gender:null,
     note:"Kanji: 排出量. CO2はいしゅつりょう = CO2 emissions.\nはいしゅつけんとりひき = emissions trading.",
     example:"A: にほんはCO2はいしゅつりょうのさくげんをめざしています。\nB: にせんごじゅうねんまでにカーボンニュートラルをたっせいするよていです。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Japan aims to reduce CO2 emissions.\nB: It plans to achieve carbon neutrality by 2050.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"排出量 uses 排出 (emit/discharge) and 量 (amount). Japan pledged to reach カーボンニュートラル (carbon neutrality) by 2050. This requires dramatic reductions in CO2はいしゅつりょう across industry, transportation, and residential sectors. The challenge is enormous for a country that imports most of its fossil fuels and reduced nuclear power after Fukushima."},

    {type:"teach", trg:"しょうエネ", src:"energy conservation / energy saving", pos:"noun", gender:null,
     note:"Short for 省エネルギー. しょうエネきき = energy-saving appliances.\nしょうエネたいさく = energy conservation measures.",
     example:"A: にほんのしょうエネぎじゅつはせかいトップレベルです。\nB: でんきだいのせつやくにもなりますね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Japan's energy conservation technology is world-class.\nB: It also saves on electricity bills.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"省エネ abbreviates 省エネルギー. Japan is a global leader in energy efficiency, driven by resource scarcity and high energy costs. After the 1973 oil crisis, the government launched massive しょうエネ campaigns. Japanese appliances are among the most energy-efficient in the world, with the トップランナー (top runner) program requiring manufacturers to meet the best efficiency standards."},

    {type:"teach", trg:"さくげん", src:"reduction / cutback", pos:"noun", gender:null,
     note:"Kanji: 削減. さくげんする = to reduce/cut.\nコストさくげん = cost reduction.",
     example:"A: はいしゅつりょうのさくげんにはこくみんいちにんひとりのどりょくがひつようです。\nB: しょうエネいしきをたかめましょう。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Reducing emissions requires effort from each individual citizen.\nB: Let us raise energy conservation awareness.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"削減 uses 削 (shave/cut) and 減 (decrease). In Japanese policy and business, さくげん is a key action word. Budget cuts (よさんさくげん), staff reductions (じんいんさくげん), and emissions reductions (はいしゅつさくげん) all use this term. The nuance is deliberate, planned reduction rather than passive decline."},

    {type:"mc", q:"しょうエネ is an abbreviation for:", opts:["省エネルギー (energy conservation)","消費エネルギー (consumed energy)","商業エネルギー (commercial energy)","小エネルギー (small energy)"], ans:"省エネルギー (energy conservation)",
     hint:"The first kanji 省 means 'to conserve/save,' creating a compound about using less e...."},

    {type:"fb", s:"CO2はいしゅつりょうの{1}をめざしています。\n(Aiming to reduce CO2 emissions.)", a:"さくげん", opts:["さくげん","ぞうか","かくだい","けいぞく"], sSrc:"Aiming to reduce CO2 emissions.",
     hint:"The noun meaning 'reduction' or 'cutback,' the deliberate act of making something smaller."},

    {type:"match", pairs:[{trg:"げんしりょく",src:"nuclear power"},{trg:"さいせいかのうエネルギー",src:"renewable energy"},{trg:"たいようこう",src:"solar power"},{trg:"ふうりょく",src:"wind power"}]},

    {type:"fb", s:"にほんのしょうエネ{1}はせかいトップレベルです。\n(Japan's energy conservation technology is world-class.)", a:"ぎじゅつ", opts:["ぎじゅつ","せいさく","もんだい","たいさく"], sSrc:"Japan's energy conservation technology is world-class.",
     hint:"The noun meaning 'technology' or 'technique,' the practical application of scientific knowledge."},

    {type:"match", pairs:[{trg:"でんりょく",src:"electric power"},{trg:"はいしゅつりょう",src:"emissions"},{trg:"しょうエネ",src:"energy conservation"},{trg:"さくげん",src:"reduction"}]},

    {type:"mc", q:"Japan's energy policy debate intensified after:", opts:["The 1995 Kobe earthquake","The 2011 Fukushima nuclear disaster","The 1973 oil crisis","The 2020 Olympics"], ans:"The 2011 Fukushima nuclear disaster",
     hint:"This event led to the shutdown of all 54 n... reactors and a national rethinking of energy mix."},
  ]
};
export default BATCH2_L_3;
