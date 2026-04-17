// Batch 9 – Unit 10 (A2.1 Weather): Natural Disasters & Climate
const BATCH9_L1 = {
  id:"jav2_u10l_b9_1", title:"自然災害(しぜんさいがい)", icon:"🌊", xp:15, board:true,
  steps:[
    {type:"intro", title:"自然災害(しぜんさいがい)",
     desc:"Learn vocabulary for natural disasters and climate phenomena. Japan experiences earthquakes, typhoons, and other events, making this essential safety vocabulary.",
     goals:["Understand natural disaster terminology","Follow safety instructions","Discuss weather-related emergencies"]},

    {type:"teach", trg:"地震(じしん)", src:"earthquake", pos:"noun", gender:null,
     note:"地震(じしん)が起(お)きる = an earthquake occurs.\n地震(じしん)速報(そくほう) = earthquake alert.",
     example:"A: 地震(じしん)だ！机(つくえ)の下(した)に入(はい)って！\nB: わかった！",
     exampleSrc:"A: Earthquake! Get under the desk!\nB: Got it!",
     funFact:"Japan experiences about 1,500 地震(じしん) per year. The country has the world's most advanced earthquake early warning system (緊急(きんきゅう)地震(じしん)速報(そくほう)). Japanese children practice 防災訓練(ぼうさいくんれん) (disaster drills) monthly at school. The phrase 地震(じしん)雷(かみなり)火事(かじ)親父(おやじ) lists the four most feared things."},

    {type:"teach", trg:"台風(たいふう)", src:"typhoon", pos:"noun", gender:null,
     note:"台風(たいふう)が来(く)る = a typhoon is coming.\n台風(たいふう)シーズン = typhoon season.",
     example:"A: 台風(たいふう)が近(ちか)づいています。\nB: 外(そと)に出(で)ないでください。",
     exampleSrc:"A: A typhoon is approaching.\nB: Please do not go outside.",
     funFact:"Japan faces about 10-15 台風(たいふう) per year, mostly August to October. Japanese media reports 台風(たいふう) with numbered names (台風(たいふう)15号(ごう)) rather than personal names. The word 台風(たいふう) comes from the Chinese たいふん, which may derive from Arabic or Greek via trade routes."},

    {type:"teach", trg:"津波(つなみ)", src:"tsunami", pos:"noun", gender:null,
     note:"津波(つなみ)警報(けいほう) = tsunami warning.\nA Japanese word adopted worldwide.",
     example:"A: 津波(つなみ)警報(けいほう)が出(で)ました。\nB: 高(たか)いところに逃(に)げてください。",
     exampleSrc:"A: A tsunami warning was issued.\nB: Please evacuate to high ground.",
     funFact:"津波(つなみ) literally means 'harbor wave.' It is one of the most well-known Japanese words internationally, adopted after the 2004 Indian Ocean tsunami. Japan's coastal areas have 津波(つなみ)避難(ひなん)タワー (tsunami evacuation towers) and markers showing historical tsunami heights."},

    {type:"teach", trg:"避難(ひなん)", src:"evacuation / taking refuge", pos:"noun", gender:null,
     note:"避難(ひなん)する = to evacuate. 避難所(ひなんじょ) = evacuation shelter.\n避難(ひなん)経路(けいろ) = evacuation route.",
     example:"A: 避難所(ひなんじょ)はどこですか？\nB: 近(ちか)くの学校(がっこう)です。",
     exampleSrc:"A: Where is the evacuation shelter?\nB: The nearby school.",
     funFact:"Every Japanese neighborhood has designated 避難所(ひなんじょ), usually schools or community centers. Green signs with a running figure mark 避難(ひなん)経路(けいろ) (evacuation routes). Japan's 防災(ぼうさい) (disaster preparedness) culture includes keeping 避難(ひなん)袋(ぶくろ) (emergency bags) ready at home."},

    {type:"teach", trg:"洪水(こうずい)", src:"flood", pos:"noun", gender:null,
     note:"洪水(こうずい)警報(けいほう) = flood warning.\n洪(こう) = flood, 水(ずい) = water.",
     example:"A: 大雨(おおあめ)で洪水(こうずい)の危険(きけん)があります。\nB: 川(かわ)に近(ちか)づかないでください。",
     exampleSrc:"A: There is flood risk due to heavy rain.\nB: Please stay away from the river.",
     funFact:"洪水(こうずい) is a serious concern during 梅雨(つゆ) (rainy season) and 台風(たいふう) season. Japan's rivers are short and steep, making flash floods common. ハザードマップ (hazard maps) show flood risk zones. The 2019 台風(たいふう) 19号(ごう) caused devastating 洪水(こうずい) across eastern Japan."},

    {type:"teach", trg:"警報(けいほう)", src:"warning / alert", pos:"noun", gender:null,
     note:"大雨(おおあめ)警報(けいほう) = heavy rain warning.\n注意報(ちゅういほう) = advisory (lower level).",
     example:"A: 暴風(ぼうふう)警報(けいほう)が出(で)ました。\nB: 学校(がっこう)が休(やす)みになります。",
     exampleSrc:"A: A storm warning was issued.\nB: School will be canceled.",
     funFact:"Japan's 警報(けいほう) system has three levels: 注意報(ちゅういほう) (advisory), 警報(けいほう) (warning), and 特別(とくべつ)警報(けいほう) (special warning, most severe). When a 警報(けいほう) is issued, schools often close. Japanese smartphones automatically receive 緊急(きんきゅう)速報(そくほう) (emergency alerts) with a loud alarm."},

    {type:"teach", trg:"防災(ぼうさい)", src:"disaster prevention / preparedness", pos:"noun", gender:null,
     note:"防災訓練(ぼうさいくんれん) = disaster drill.\n防災(ぼうさい)グッズ = emergency supplies.",
     example:"A: 防災訓練(ぼうさいくんれん)に参加(さんか)しましょう。\nB: いいですね。大切(たいせつ)なことです。",
     exampleSrc:"A: Let's participate in the disaster drill.\nB: Good idea. It is important.",
     funFact:"Japan is a world leader in 防災(ぼうさい). September 1st is 防災(ぼうさい)の日(ひ) (Disaster Prevention Day), marking the 1923 Great Kanto Earthquake anniversary. Schools and companies hold 防災訓練(ぼうさいくんれん) regularly. Every home is encouraged to keep 3 days of water and food as 防災(ぼうさい)備蓄(びちく)."},

    {type:"teach", trg:"復旧(ふっきゅう)", src:"recovery / restoration", pos:"noun", gender:null,
     note:"復旧(ふっきゅう)する = to recover/restore.\n復旧(ふっきゅう)工事(こうじ) = restoration work.",
     example:"A: 電気(でんき)が復旧(ふっきゅう)しました。\nB: よかったですね。",
     exampleSrc:"A: The electricity has been restored.\nB: That is good.",
     funFact:"Japan's 復旧(ふっきゅう) speed after disasters amazes the world. After the 2011 earthquake, bullet trains resumed within 49 days. Roads were repaired in weeks. The concept of 復興(ふっこう) (reconstruction) goes beyond physical repair to community rebuilding. がんばろう (let's persevere) becomes a rallying cry."},

    {type:"mc", q:"What does 津波(つなみ) literally mean?", opts:["Harbor wave","Big water","Ocean anger","Shaking sea"], ans:"Harbor wave",
     hint:"津(つ) comes from 津 (h.../port) and 波(なみ) comes from 波 (w...)."},

    {type:"fb", s:"{1}はどこですか？近(ちか)くの学校(がっこう)です。\n(Where is the evacuation shelter? The nearby school.)", a:"避難所(ひなんじょ)", opts:["避難所(ひなんじょ)","交番(こうばん)","病院(びょういん)","大使館(たいしかん)"], sSrc:"Where is the evacuation shelter? The nearby school.",
     hint:"These designated safe locations, often schools, are where people go during emergencies."},

    {type:"match", pairs:[
      {trg:"地震(じしん)", src:"earthquake"},
      {trg:"台風(たいふう)", src:"typhoon"},
      {trg:"洪水(こうずい)", src:"flood"},
      {trg:"防災(ぼうさい)", src:"disaster prevention"}
    ]},

    {type:"mc", q:"When is 防災(ぼうさい)の日(ひ) (Disaster Prevention Day)?", opts:["September 1st","March 11th","January 17th","August 15th"], ans:"September 1st",
     hint:"This date commemorates the Great Kanto Earthquake of 1923."}
  ]
};
export default BATCH9_L1;
