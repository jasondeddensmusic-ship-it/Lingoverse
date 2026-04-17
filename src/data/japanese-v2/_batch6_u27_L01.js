// Batch 6 – Unit 27 (B2.2 Environment): Energy & Sustainability
const BATCH6_L1 = {
  id:"jav2_u27l_b6_1", title:"エネルギーと持続(じぞく)", icon:"♻️", xp:15, board:true,
  steps:[
    {type:"intro", title:"エネルギーと持続(じぞく)",
     desc:"Explore vocabulary for energy, sustainability, and environmental policy. Japan's energy challenges after 2011 make this topic particularly relevant and frequently discussed in news and society.",
     goals:["Discuss energy sources and policies","Use sustainability vocabulary","Express opinions on environmental issues"]},

    {type:"teach", trg:"エネルギー", src:"energy", pos:"noun", gender:null,
     note:"From German/English. 再生可能(さいせいかのう)エネルギー = renewable energy.\n核(かく)エネルギー = nuclear energy.",
     example:"A: 日本(にほん)のエネルギー自給率(じきゅうりつ)は低(ひく)いです。\nB: そうですね。資源(しげん)が少(すく)ないですから。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Japan's energy self-sufficiency rate is low.\nB: Yes. Because natural resources are scarce.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"Japan imports about 90% of its energy. After the 2011 Fukushima disaster, all nuclear power plants were shut down, dramatically increasing fossil fuel imports. The nation's energy policy (エネルギーせいさく) became one of the most debated topics. Japan now aims for carbon neutrality by 2050."},

    {type:"teach", trg:"持続可能(じぞくかのう)", src:"sustainable", pos:"adj", gender:null,
     note:"持続可能(じぞくかのう)な社会(しゃかい) = sustainable society.\nSDGs = えすでぃーじーず.",
     example:"A: 持続可能(じぞくかのう)な社会(しゃかい)を目指(めざ)すべきです。\nB: そのために私(わたし)たちに何(なに)ができますか？\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: We should aim for a sustainable society.\nB: What can we do toward that?\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"じぞくかのう (持続可能) is Japan's translation of 'sustainable.' SDGs (えすでぃーじーず, Sustainable Development Goals) have become hugely popular in Japan. Schools teach SDGs, companies display SDGs badges, and media covers SDGs initiatives. The 17 colored goal icons are recognizable throughout the country."},

    {type:"teach", trg:"太陽光(たいようこう)", src:"solar power / sunlight", pos:"noun", gender:null,
     note:"太陽光(たいようこう)発電(はつでん) = solar power generation.\nソーラーパネル = solar panels.",
     example:"A: 屋根(やね)にソーラーパネルをつけましたか？\nB: はい、電気代(でんきだい)が安(やす)くなりました。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Did you install solar panels on your roof?\nB: Yes, the electricity bill became cheaper.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"After 2011, Japan became one of the world's largest solar energy markets. たいようこうはつでん (solar power generation) capacity grew rapidly with government subsidies. However, mountainous terrain limits installation space, leading to creative solutions: floating solar panels on reservoirs and dam surfaces."},

    {type:"teach", trg:"排出(はいしゅつ)", src:"emission / discharge", pos:"noun", gender:null,
     note:"CO2排出量(はいしゅつりょう) = CO2 emissions.\n排出(はいしゅつ)を減(へ)らす = to reduce emissions.",
     example:"A: 二酸化炭素(にさんかたんそ)の排出(はいしゅつ)を減(へ)らす必要(ひつよう)があります。\nB: 車(くるま)を減(へ)らすことから始(はじ)めましょう。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: We need to reduce CO2 emissions.\nB: Let us start by reducing car use.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"はいしゅつ (排出) combines 排 (expel) and 出 (exit). カーボンニュートラル (carbon neutral) by 2050 is Japan's official goal. はいしゅつけん (emission credits) and はいしゅつきせい (emission regulations) are key policy terms. Japan's manufacturing sector accounts for a large portion of はいしゅつ."},

    {type:"teach", trg:"資源(しげん)", src:"resources / natural resources", pos:"noun", gender:null,
     note:"自然(しぜん)資源(しげん) = natural resources.\n資源(しげん)の無駄遣(むだづか)い = wasting resources.",
     example:"A: 日本(にほん)は天然(てんねん)資源(しげん)が少(すく)ない国(くに)です。\nB: だからリサイクルが重要(じゅうよう)なのですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Japan is a country with few natural resources.\nB: That is why recycling is important.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"Japan's lack of natural しげん (resources) shaped its history and economy. With few minerals and fossil fuels, Japan became a manufacturing powerhouse: importing raw しげん, adding value through technology, and exporting finished products. This resource scarcity also drives Japan's advanced recycling systems and energy conservation culture."},

    {type:"mc", q:"持続可能(じぞくかのう) means:", opts:["Sustainable","Renewable","Recyclable","Efficient"], ans:"Sustainable",
     hint:"This word describes systems that can continue long-term without depleting resources."},

    {type:"teach", trg:"汚(よご)す", src:"to pollute / to dirty / to contaminate", pos:"verb", gender:null,
     note:"Group 1 verb. 川(かわ)を汚(よご)す = to pollute a river.\n空気(くうき)を汚(よご)す = to pollute air.",
     example:"A: 工場(こうじょう)の廃水(はいすい)が川(かわ)を汚(よご)しています。\nB: 厳(きび)しい規制(きせい)が必要(ひつよう)ですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Factory wastewater is polluting the river.\nB: Strict regulations are needed.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"よごす (汚す, to dirty) and よごれる (汚れる, to become dirty) are a transitive/intransitive pair. Japan's environmental history includes severe pollution: Minamata disease (水俣病), itai-itai disease. These tragedies led to some of the world's strictest environmental laws. Today, Japanese rivers and air are remarkably clean."},

    {type:"teach", trg:"リサイクル", src:"recycling", pos:"noun", gender:null,
     note:"Katakana loanword. リサイクルする = to recycle.\n3R: リデュース, リユース, リサイクル.",
     example:"A: ペットボトルはリサイクルに出(だ)してください。\nB: はい、キャップとラベルを外(はず)してからですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Please put PET bottles in recycling.\nB: Yes, after removing the cap and label.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"Japanese recycling is among the world's most detailed. ペットボトル (PET bottles) must have caps removed, labels peeled, and bottles rinsed. Japan recycles about 85% of PET bottles (vs. 30% in the US). The 3R movement (Reduce, Reuse, Recycle) is taught in elementary school."},

    {type:"teach", trg:"節約(せつやく)", src:"conservation / saving / economizing", pos:"noun", gender:null,
     note:"電気(でんき)の節約(せつやく) = saving electricity.\n節約(せつやく)する = to economize.",
     example:"A: 電気(でんき)の節約(せつやく)のためにLEDに変(か)えました。\nB: いいですね。電気代(でんきだい)が減(へ)りますよ。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: I switched to LED to save electricity.\nB: Good idea. Your electricity bill will decrease.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"せつやく (節約) culture is deeply Japanese. もったいない (wasteful/what a waste) is a national philosophy. During summer, Cool Biz (クールビズ) reduces air conditioning by loosening dress codes. During winter, Warm Biz encourages warmer clothing over heating. These campaigns save enormous amounts of energy nationally."},

    {type:"teach", trg:"もったいない", src:"wasteful / what a waste", pos:"adj", gender:null,
     note:"I-adjective. もったいないから捨(す)てないで = don't throw it away, it is wasteful.\nA uniquely Japanese concept.",
     example:"A: このごはん、もったいないから残(のこ)さないで。\nB: はい、全部(ぜんぶ)食(た)べます。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Don't leave this rice, it is wasteful.\nB: Yes, I will eat it all.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"もったいない gained international fame when Kenyan Nobel laureate Wangari Maathai adopted it as a global environmental slogan. The word expresses regret at wasting the inherent value of something. It applies to food, resources, talent, and time. もったいないせいしん (mottainai spirit) drives Japan's minimal-waste culture."},

    {type:"fb", s:"二酸化炭素(にさんかたんそ)の排出(はいしゅつ)を{1}必要(ひつよう)があります。\n(We need to reduce CO2 emissions.)", a:"へらす", opts:["へらす","ふやす","つくる","よごす"], sSrc:"We need to reduce CO2 emissions.",
     hint:"The verb meaning to decrease, reduce, or cut down."},

    {type:"teach", trg:"温暖化(おんだんか)", src:"global warming", pos:"noun", gender:null,
     note:"地球(ちきゅう)温暖化(おんだんか) = global warming.\n温暖化(おんだんか)対策(たいさく) = measures against warming.",
     example:"A: 地球(ちきゅう)温暖化(おんだんか)の影響(えいきょう)が深刻(しんこく)です。\nB: 今(いま)すぐ行動(こうどう)すべきですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: The effects of global warming are serious.\nB: We should act immediately.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"おんだんか (温暖化) combines 温暖 (warm) and 化 (change/become). Japan is already experiencing effects: hotter summers, stronger typhoons, and shifting cherry blossom timing. さくらぜんせん (cherry blossom front) data shows blooming dates have moved earlier by about 10 days over the past century."},

    {type:"mc", q:"もったいない expresses:", opts:["Regret at wasting something valuable","Excitement about something new","Confusion about a situation","Anger at someone"], ans:"Regret at wasting something valuable",
     hint:"This uniquely Japanese word has become a global environmental slogan."},

    {type:"match", pairs:[
      {trg:"エネルギー", src:"energy"},
      {trg:"資源(しげん)", src:"resources"},
      {trg:"リサイクル", src:"recycling"},
      {trg:"節約(せつやく)", src:"conservation"},
      {trg:"もったいない", src:"wasteful / what a waste"}
    ]},

    {type:"fb", s:"地球(ちきゅう){1}の影響(えいきょう)が深刻(しんこく)です。\n(The effects of global warming are serious.)", a:"おんだんか", opts:["おんだんか","じしん","たいふう","こうずい"], sSrc:"The effects of global warming are serious.",
     hint:"The compound noun for the warming of the planet."},

    {type:"mc", q:"Japan's energy self-sufficiency is low because:", opts:["The country has few natural resources","It uses too much solar power","It exports all its energy","It has no nuclear power"], ans:"The country has few natural resources",
     hint:"Japan must import most of its fossil fuels and raw materials."}
  ]
};
export default BATCH6_L1;
