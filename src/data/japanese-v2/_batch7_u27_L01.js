// Batch 7 – Unit 27 (B2.1 Environment): Environmental Science Vocabulary
const BATCH7_L1 = {
  id:"jav2_u27l_b7_1", title:"かんきょうかがく", icon:"🌍", xp:15, board:true,
  steps:[
    {type:"intro", title:"かんきょうかがく",
     desc:"Learn environmental science vocabulary for discussing ecological issues, climate change, and conservation. These JLPT N2 terms appear in news, policy discussions, and academic contexts.",
     goals:["Discuss climate and environmental topics","Use scientific environmental terminology","Express opinions on ecological issues"]},

    {type:"teach", trg:"おんだんか", src:"global warming", pos:"noun", gender:null,
     note:"ちきゅうおんだんか = global warming.\nおんだんかたいさく = warming countermeasures.",
     example:"A: ちきゅうおんだんかがしんこくです。\nB: CO2はいしゅつをへらすひつようがあります。",
     exampleSrc:"A: Global warming is serious.\nB: We need to reduce CO2 emissions.",
     funFact:"おんだんか (温暖化) combines 温 (warm) and 暖 (warm) with 化 (becoming). Japan committed to carbon neutrality by 2050. Summer temperatures in Tokyo now regularly exceed 35 degrees. 猛暑日 (もうしょび, extreme heat days) have doubled since the 1990s."},

    {type:"teach", trg:"はいしゅつ", src:"emission / discharge", pos:"noun", gender:null,
     note:"はいしゅつする = to emit. CO2はいしゅつりょう = CO2 emissions.\nはいしゅつきせい = emission regulations.",
     example:"A: はいしゅつりょうをさくげんしなければなりません。\nB: さいせいかのうエネルギーがかぎです。",
     exampleSrc:"A: We must reduce emissions.\nB: Renewable energy is the key.",
     funFact:"はいしゅつ (排出) is a key environmental term. Japan's はいしゅつ trading system and carbon tax discussions mirror global efforts. Industrial はいしゅつ regulations drove Japan to develop some of the world's cleanest factories. The Kyoto Protocol (京都議定書) was named after the city where it was adopted in 1997."},

    {type:"teach", trg:"さいせいかのう", src:"renewable", pos:"adj", gender:null,
     note:"さいせいかのうエネルギー = renewable energy.\nたいようこうはつでん = solar power.",
     example:"A: さいせいかのうエネルギーのわりあいをふやすべきです。\nB: たいようこうとふうりょくがゆうぼうです。",
     exampleSrc:"A: We should increase the share of renewable energy.\nB: Solar and wind are promising.",
     funFact:"さいせいかのう (再生可能) literally means 'can be reborn.' After the 2011 Fukushima nuclear disaster, Japan rapidly expanded さいせいかのうエネルギー. Solar panels now cover fields, hillsides, and rooftops. Japan aims for 36-38% renewable electricity by 2030."},

    {type:"teach", trg:"せいたいけい", src:"ecosystem", pos:"noun", gender:null,
     note:"せいたいけいをまもる = to protect the ecosystem.\nかいようせいたいけい = marine ecosystem.",
     example:"A: もりはだいじなせいたいけいです。\nB: たようなどうしょくぶつがくらしています。",
     exampleSrc:"A: Forests are important ecosystems.\nB: Diverse plants and animals live there.",
     funFact:"せいたいけい (生態系) awareness is growing in Japan. Satoyama (里山, border zones between mountain and flatland) are celebrated as balanced せいたいけい. Japan's island geography creates unique ecosystems: the Ogasawara Islands are called 'the Galapagos of the East.' Endemic species preservation is a national priority."},

    {type:"teach", trg:"ぜつめつきぐしゅ", src:"endangered species", pos:"noun", gender:null,
     note:"ぜつめつ = extinction. きぐ = concern. しゅ = species.\nレッドリスト = Red List.",
     example:"A: にほんのぜつめつきぐしゅにはなにがいますか？\nB: トキやイリオモテヤマネコがいます。",
     exampleSrc:"A: What endangered species are there in Japan?\nB: There are crested ibis and Iriomote wild cats.",
     funFact:"Japan's most famous ぜつめつきぐしゅ success story is the トキ (crested ibis). Once extinct in the wild in Japan, breeding programs using Chinese birds have restored a wild population. The last Japanese-born トキ died in 2003, but reintroduced birds now number over 400 on Sado Island."},

    {type:"teach", trg:"しげん", src:"resources", pos:"noun", gender:null,
     note:"しぜんしげん = natural resources.\nしげんのむだづかい = waste of resources.",
     example:"A: にほんはしげんがすくないくにです。\nB: だからリサイクルがだいじなのですね。",
     exampleSrc:"A: Japan is a resource-poor country.\nB: That is why recycling is important.",
     funFact:"しげん (資源) scarcity shaped Japan's economy and culture. With few natural しげん, Japan imports 90%+ of energy and most raw materials. This vulnerability drove energy efficiency, recycling culture, and もったいない philosophy. Japan recycles about 20% of waste, with some categories reaching 98%."},

    {type:"teach", trg:"おせん", src:"pollution / contamination", pos:"noun", gender:null,
     note:"かんきょうおせん = environmental pollution.\nたいきおせん = air pollution. すいしつおせん = water pollution.",
     example:"A: かわのおせんがもんだいになっています。\nB: こうじょうからのはいすいがげんいんです。",
     exampleSrc:"A: River pollution has become a problem.\nB: Factory wastewater is the cause.",
     funFact:"Japan's おせん (汚染) history includes devastating 公害 (こうがい, industrial pollution) events: Minamata disease (mercury), Itai-itai disease (cadmium). These tragedies led to some of the world's strictest environmental laws. Japan transformed from heavily polluted in the 1960s to remarkably clean today."},

    {type:"teach", trg:"しょりする", src:"to process / to dispose of / to treat", pos:"verb", gender:null,
     note:"ごみしょり = waste processing.\nはいすいしょり = wastewater treatment.",
     example:"A: プラスチックごみのしょりがかだいです。\nB: リサイクルりつをあげましょう。",
     exampleSrc:"A: Plastic waste processing is a challenge.\nB: Let us increase the recycling rate.",
     funFact:"Japan's ごみしょり (waste processing) system is world-class. ごみ分別 (ぶんべつ, waste sorting) into 10+ categories is common. Some towns achieve near-zero waste. Incinerators generate electricity. However, Japan still burns most waste rather than recycling it, and plastic packaging remains excessive."},

    {type:"teach", trg:"ほぜん", src:"conservation / preservation", pos:"noun", gender:null,
     note:"しぜんほぜん = nature conservation.\nほぜんかつどう = conservation activities.",
     example:"A: このもりのほぜんかつどうにさんかしませんか？\nB: ぜひさんかしたいです。",
     exampleSrc:"A: Would you like to join conservation activities for this forest?\nB: I would love to participate.",
     funFact:"ほぜん (保全) reflects Japan's Shinto-rooted respect for nature. 鎮守の森 (ちんじゅのもり, shrine forests) have been preserved for centuries. Modern ほぜん efforts include 世界遺産 (UNESCO World Heritage) sites like Yakushima and Shirakami Mountains. Volunteer ほぜん activities are popular weekend activities."},

    {type:"teach", trg:"たんそちゅうりつ", src:"carbon neutral", pos:"noun", gender:null,
     note:"Also: カーボンニュートラル.\nたんそちゅうりつをめざす = to aim for carbon neutrality.",
     example:"A: 2050ねんまでにたんそちゅうりつをたっせいするもくひょうです。\nB: おおきなちょうせんですね。",
     exampleSrc:"A: The goal is to achieve carbon neutrality by 2050.\nB: That is a big challenge.",
     funFact:"たんそちゅうりつ (炭素中立) became a major policy goal when then-PM Suga declared it in 2020. Japanese companies are rapidly developing green technology: hydrogen fuel cells, ammonia combustion, carbon capture. The challenge is enormous for a country that relies heavily on fossil fuels post-Fukushima."},

    {type:"teach", trg:"じゅんかんがた", src:"circular (economy/system)", pos:"adj", gender:null,
     note:"じゅんかんがたしゃかい = circular society.\nじゅんかん = circulation/cycle.",
     example:"A: じゅんかんがたしゃかいをめざすべきです。\nB: つくる、つかう、リサイクル、のサイクルですね。",
     exampleSrc:"A: We should aim for a circular society.\nB: The cycle of make, use, recycle.",
     funFact:"じゅんかんがた (循環型) economy is a Japanese government priority. The concept builds on traditional もったいない values. Japan's 循環型社会形成推進基本法 (Circular Society Basic Law, 2000) was among the world's first such legislation. Reuse shops (リユースショップ) and repair cafes are growing."},

    {type:"teach", trg:"きこうへんどう", src:"climate change", pos:"noun", gender:null,
     note:"きこう = climate. へんどう = fluctuation/change.\nきこうへんどうたいさく = climate change measures.",
     example:"A: きこうへんどうのえいきょうがかくちにでています。\nB: きょくたんなきしょうがふえましたね。",
     exampleSrc:"A: Climate change effects are appearing everywhere.\nB: Extreme weather has increased.",
     funFact:"きこうへんどう (気候変動) impacts are visible in Japan: more powerful typhoons, record temperatures, unusual cherry blossom timing, and coral bleaching in Okinawa. The shift in 桜前線 (sakura front) is an emotional indicator for Japanese people, making きこうへんどう tangible and personal."},

    // Quiz steps
    {type:"mc", q:"Japan aims for carbon neutrality by:",
     opts:["2050","2030","2040","2100"],
     ans:"2050",
     hint:"This ambitious target was declared in 2020 and drives current energy and industrial policy."},

    {type:"match", pairs:[
      {trg:"おんだんか", src:"global warming"},
      {trg:"はいしゅつ", src:"emission"},
      {trg:"せいたいけい", src:"ecosystem"},
      {trg:"おせん", src:"pollution"},
      {trg:"ほぜん", src:"conservation"}
    ]},

    {type:"fb", s:"にほんは{1}がすくないくにです。だからリサイクルがだいじです。",
     a:["しげん"],
     opts:["しげん","おせん","ほぜん","はいしゅつ"],
     hint:"Japan lacks natural resources, importing most energy and raw materials.",
     sSrc:"Japan is a country with few {1}. That is why recycling is important."},

    {type:"mc", q:"Japan's Minamata disease was caused by:",
     opts:["Mercury pollution from a factory","Air pollution from cars","Nuclear radiation","Volcanic gases"],
     ans:"Mercury pollution from a factory",
     hint:"This devastating おせん event in the 1950s-60s led to strict environmental laws."},

    {type:"fb", s:"{1}エネルギーのわりあいをふやすべきです。",
     a:["さいせいかのう"],
     opts:["さいせいかのう","しぜん","かんきょう","たんそ"],
     hint:"Solar and wind power are types of this: energy that can be regenerated.",
     sSrc:"We should increase the share of {1} energy."},

    {type:"mc", q:"トキ (crested ibis) conservation in Japan:",
     opts:["Successfully restored a wild population from near-extinction","Failed completely","Was never attempted","Is still in early stages"],
     ans:"Successfully restored a wild population from near-extinction",
     hint:"Once extinct in the w... in Japan, breeding programs now sustain over 400 w... birds on Sado Island."},

    {type:"match", pairs:[
      {trg:"さいせいかのう", src:"renewable"},
      {trg:"しげん", src:"resources"},
      {trg:"たんそちゅうりつ", src:"carbon neutral"},
      {trg:"じゅんかんがた", src:"circular"},
      {trg:"きこうへんどう", src:"climate change"}
    ]},

    {type:"fb", s:"プラスチックごみの{1}がかだいです。",
     a:["しょり"],
     opts:["しょり","ほぜん","はいしゅつ","おせん"],
     hint:"Processing and disposing of plastic waste remains a challenge. This noun means 'processing.'",
     sSrc:"Plastic waste {1} is a challenge."}
  ]
};
export default BATCH7_L1;
