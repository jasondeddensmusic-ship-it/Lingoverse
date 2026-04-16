// Batch 6 – Unit 27 (B2.2 Environment): Energy & Sustainability
const BATCH6_L1 = {
  id:"jav2_u27l_b6_1", title:"エネルギーとじぞく", icon:"♻️", xp:15, board:true,
  steps:[
    {type:"intro", title:"エネルギーとじぞく",
     desc:"Explore vocabulary for energy, sustainability, and environmental policy. Japan's energy challenges after 2011 make this topic particularly relevant and frequently discussed in news and society.",
     goals:["Discuss energy sources and policies","Use sustainability vocabulary","Express opinions on environmental issues"]},

    {type:"teach", trg:"エネルギー", src:"energy", pos:"noun", gender:null,
     note:"From German/English. さいせいかのうエネルギー = renewable energy.\nかくエネルギー = nuclear energy.",
     example:"A: にほんのエネルギーじきゅうりつはひくいです。\nB: そうですね。しげんがすくないですから。",
     exampleSrc:"A: Japan's energy self-sufficiency rate is low.\nB: Yes. Because natural resources are scarce.",
     funFact:"Japan imports about 90% of its energy. After the 2011 Fukushima disaster, all nuclear power plants were shut down, dramatically increasing fossil fuel imports. The nation's energy policy (エネルギーせいさく) became one of the most debated topics. Japan now aims for carbon neutrality by 2050."},

    {type:"teach", trg:"じぞくかのう", src:"sustainable", pos:"adj", gender:null,
     note:"Kanji: 持続可能. じぞくかのうなしゃかい = sustainable society.\nSDGs = えすでぃーじーず.",
     example:"A: じぞくかのうなしゃかいをめざすべきです。\nB: そのためにわたしたちになにができますか？",
     exampleSrc:"A: We should aim for a sustainable society.\nB: What can we do toward that?",
     funFact:"じぞくかのう (持続可能) is Japan's translation of 'sustainable.' SDGs (えすでぃーじーず, Sustainable Development Goals) have become hugely popular in Japan. Schools teach SDGs, companies display SDGs badges, and media covers SDGs initiatives. The 17 colored goal icons are recognizable throughout the country."},

    {type:"teach", trg:"たいようこう", src:"solar power / sunlight", pos:"noun", gender:null,
     note:"Kanji: 太陽光. たいようこうはつでん = solar power generation.\nソーラーパネル = solar panels.",
     example:"A: やねにソーラーパネルをつけましたか？\nB: はい、でんきだいがやすくなりました。",
     exampleSrc:"A: Did you install solar panels on your roof?\nB: Yes, the electricity bill became cheaper.",
     funFact:"After 2011, Japan became one of the world's largest solar energy markets. たいようこうはつでん (solar power generation) capacity grew rapidly with government subsidies. However, mountainous terrain limits installation space, leading to creative solutions: floating solar panels on reservoirs and dam surfaces."},

    {type:"teach", trg:"はいしゅつ", src:"emission / discharge", pos:"noun", gender:null,
     note:"Kanji: 排出. CO2はいしゅつりょう = CO2 emissions.\nはいしゅつをへらす = to reduce emissions.",
     example:"A: にさんかたんそのはいしゅつをへらすひつようがあります。\nB: くるまをへらすことからはじめましょう。",
     exampleSrc:"A: We need to reduce CO2 emissions.\nB: Let us start by reducing car use.",
     funFact:"はいしゅつ (排出) combines 排 (expel) and 出 (exit). カーボンニュートラル (carbon neutral) by 2050 is Japan's official goal. はいしゅつけん (emission credits) and はいしゅつきせい (emission regulations) are key policy terms. Japan's manufacturing sector accounts for a large portion of はいしゅつ."},

    {type:"teach", trg:"しげん", src:"resources / natural resources", pos:"noun", gender:null,
     note:"Kanji: 資源. しぜんしげん = natural resources.\nしげんのむだづかい = wasting resources.",
     example:"A: にほんはてんねんしげんがすくないくにです。\nB: だからリサイクルがじゅうようなのですね。",
     exampleSrc:"A: Japan is a country with few natural resources.\nB: That is why recycling is important.",
     funFact:"Japan's lack of natural しげん (resources) shaped its history and economy. With few minerals and fossil fuels, Japan became a manufacturing powerhouse: importing raw しげん, adding value through technology, and exporting finished products. This resource scarcity also drives Japan's advanced recycling systems and energy conservation culture."},

    {type:"mc", q:"じぞくかのう means:", opts:["Sustainable","Renewable","Recyclable","Efficient"], ans:"Sustainable",
     hint:"This word describes systems that can continue long-term without depleting resources."},

    {type:"teach", trg:"よごす", src:"to pollute / to dirty / to contaminate", pos:"verb", gender:null,
     note:"Group 1 verb. かわをよごす = to pollute a river.\nKanji: 汚す. くうきをよごす = to pollute air.",
     example:"A: こうじょうのはいすいがかわをよごしています。\nB: きびしいきせいがひつようですね。",
     exampleSrc:"A: Factory wastewater is polluting the river.\nB: Strict regulations are needed.",
     funFact:"よごす (汚す, to dirty) and よごれる (汚れる, to become dirty) are a transitive/intransitive pair. Japan's environmental history includes severe pollution: Minamata disease (水俣病), itai-itai disease. These tragedies led to some of the world's strictest environmental laws. Today, Japanese rivers and air are remarkably clean."},

    {type:"teach", trg:"リサイクル", src:"recycling", pos:"noun", gender:null,
     note:"Katakana loanword. リサイクルする = to recycle.\n3R: リデュース, リユース, リサイクル.",
     example:"A: ペットボトルはリサイクルにだしてください。\nB: はい、キャップとラベルをはずしてからですね。",
     exampleSrc:"A: Please put PET bottles in recycling.\nB: Yes, after removing the cap and label.",
     funFact:"Japanese recycling is among the world's most detailed. ペットボトル (PET bottles) must have caps removed, labels peeled, and bottles rinsed. Japan recycles about 85% of PET bottles (vs. 30% in the US). The 3R movement (Reduce, Reuse, Recycle) is taught in elementary school."},

    {type:"teach", trg:"せつやく", src:"conservation / saving / economizing", pos:"noun", gender:null,
     note:"Kanji: 節約. でんきのせつやく = saving electricity.\nせつやくする = to economize.",
     example:"A: でんきのせつやくのためにLEDにかえました。\nB: いいですね。でんきだいがへりますよ。",
     exampleSrc:"A: I switched to LED to save electricity.\nB: Good idea. Your electricity bill will decrease.",
     funFact:"せつやく (節約) culture is deeply Japanese. もったいない (wasteful/what a waste) is a national philosophy. During summer, Cool Biz (クールビズ) reduces air conditioning by loosening dress codes. During winter, Warm Biz encourages warmer clothing over heating. These campaigns save enormous amounts of energy nationally."},

    {type:"teach", trg:"もったいない", src:"wasteful / what a waste", pos:"adj", gender:null,
     note:"I-adjective. もったいないからすてないで = don't throw it away, it is wasteful.\nA uniquely Japanese concept.",
     example:"A: このごはん、もったいないからのこさないで。\nB: はい、ぜんぶたべます。",
     exampleSrc:"A: Don't leave this rice, it is wasteful.\nB: Yes, I will eat it all.",
     funFact:"もったいない gained international fame when Kenyan Nobel laureate Wangari Maathai adopted it as a global environmental slogan. The word expresses regret at wasting the inherent value of something. It applies to food, resources, talent, and time. もったいないせいしん (mottainai spirit) drives Japan's minimal-waste culture."},

    {type:"fb", s:"にさんかたんそのはいしゅつを{1}ひつようがあります。\n(We need to reduce CO2 emissions.)", a:"へらす", opts:["へらす","ふやす","つくる","よごす"], sSrc:"We need to reduce CO2 emissions.",
     hint:"The verb meaning to decrease, reduce, or cut down."},

    {type:"teach", trg:"おんだんか", src:"global warming", pos:"noun", gender:null,
     note:"Kanji: 温暖化. ちきゅうおんだんか = global warming.\nおんだんかたいさく = measures against warming.",
     example:"A: ちきゅうおんだんかのえいきょうがしんこくです。\nB: いますぐこうどうすべきですね。",
     exampleSrc:"A: The effects of global warming are serious.\nB: We should act immediately.",
     funFact:"おんだんか (温暖化) combines 温暖 (warm) and 化 (change/become). Japan is already experiencing effects: hotter summers, stronger typhoons, and shifting cherry blossom timing. さくらぜんせん (cherry blossom front) data shows blooming dates have moved earlier by about 10 days over the past century."},

    {type:"mc", q:"もったいない expresses:", opts:["Regret at wasting something valuable","Excitement about something new","Confusion about a situation","Anger at someone"], ans:"Regret at wasting something valuable",
     hint:"This uniquely Japanese word has become a global environmental slogan."},

    {type:"match", pairs:[
      {trg:"エネルギー", src:"energy"},
      {trg:"しげん", src:"resources"},
      {trg:"リサイクル", src:"recycling"},
      {trg:"せつやく", src:"conservation"},
      {trg:"もったいない", src:"wasteful / what a waste"}
    ]},

    {type:"fb", s:"ちきゅう{1}のえいきょうがしんこくです。\n(The effects of global warming are serious.)", a:"おんだんか", opts:["おんだんか","じしん","たいふう","こうずい"], sSrc:"The effects of global warming are serious.",
     hint:"The compound noun for the warming of the planet."},

    {type:"mc", q:"Japan's energy self-sufficiency is low because:", opts:["The country has few natural resources","It uses too much solar power","It exports all its energy","It has no nuclear power"], ans:"The country has few natural resources",
     hint:"Japan must import most of its fossil fuels and raw materials."}
  ]
};
export default BATCH6_L1;
