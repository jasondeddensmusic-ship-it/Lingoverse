// Batch 9 – Unit 10 (A2.1 Weather): Natural Disasters & Climate
const BATCH9_L1 = {
  id:"jav2_u10l_b9_1", title:"しぜんさいがい", icon:"🌊", xp:15, board:true,
  steps:[
    {type:"intro", title:"しぜんさいがい",
     desc:"Learn vocabulary for natural disasters and climate phenomena. Japan experiences earthquakes, typhoons, and other events, making this essential safety vocabulary.",
     goals:["Understand natural disaster terminology","Follow safety instructions","Discuss weather-related emergencies"]},

    {type:"teach", trg:"じしん", src:"earthquake", pos:"noun", gender:null,
     note:"じしんがおきる = an earthquake occurs.\nじしんそくほう = earthquake alert.",
     example:"A: じしんだ！つくえのしたにはいって！\nB: わかった！",
     exampleSrc:"A: Earthquake! Get under the desk!\nB: Got it!",
     funFact:"Japan experiences about 1,500 じしん per year. The country has the world's most advanced earthquake early warning system (きんきゅうじしんそくほう). Japanese children practice ぼうさいくんれん (disaster drills) monthly at school. The phrase じしんかみなりかじおやじ lists the four most feared things."},

    {type:"teach", trg:"たいふう", src:"typhoon", pos:"noun", gender:null,
     note:"たいふうがくる = a typhoon is coming.\nたいふうシーズン = typhoon season.",
     example:"A: たいふうがちかづいています。\nB: そとにでないでください。",
     exampleSrc:"A: A typhoon is approaching.\nB: Please do not go outside.",
     funFact:"Japan faces about 10-15 たいふう per year, mostly August to October. Japanese media reports たいふう with numbered names (たいふう15ごう) rather than personal names. The word たいふう comes from the Chinese たいふん, which may derive from Arabic or Greek via trade routes."},

    {type:"teach", trg:"つなみ", src:"tsunami", pos:"noun", gender:null,
     note:"つなみけいほう = tsunami warning.\nA Japanese word adopted worldwide.",
     example:"A: つなみけいほうがでました。\nB: たかいところににげてください。",
     exampleSrc:"A: A tsunami warning was issued.\nB: Please evacuate to high ground.",
     funFact:"つなみ (津波) literally means 'harbor wave.' It is one of the most well-known Japanese words internationally, adopted after the 2004 Indian Ocean tsunami. Japan's coastal areas have つなみひなんタワー (tsunami evacuation towers) and markers showing historical tsunami heights."},

    {type:"teach", trg:"ひなん", src:"evacuation / taking refuge", pos:"noun", gender:null,
     note:"ひなんする = to evacuate. ひなんじょ = evacuation shelter.\nひなんけいろ = evacuation route.",
     example:"A: ひなんじょはどこですか？\nB: ちかくのがっこうです。",
     exampleSrc:"A: Where is the evacuation shelter?\nB: The nearby school.",
     funFact:"Every Japanese neighborhood has designated ひなんじょ (避難所), usually schools or community centers. Green signs with a running figure mark ひなんけいろ (evacuation routes). Japan's ぼうさい (disaster preparedness) culture includes keeping ひなんぶくろ (emergency bags) ready at home."},

    {type:"teach", trg:"こうずい", src:"flood", pos:"noun", gender:null,
     note:"こうずいけいほう = flood warning.\nこう = flood, ずい = water.",
     example:"A: おおあめでこうずいのきけんがあります。\nB: かわにちかづかないでください。",
     exampleSrc:"A: There is flood risk due to heavy rain.\nB: Please stay away from the river.",
     funFact:"こうずい (洪水) is a serious concern during つゆ (rainy season) and たいふう season. Japan's rivers are short and steep, making flash floods common. ハザードマップ (hazard maps) show flood risk zones. The 2019 たいふう 19ごう caused devastating こうずい across eastern Japan."},

    {type:"teach", trg:"けいほう", src:"warning / alert", pos:"noun", gender:null,
     note:"おおあめけいほう = heavy rain warning.\nちゅういほう = advisory (lower level).",
     example:"A: ぼうふうけいほうがでました。\nB: がっこうがやすみになります。",
     exampleSrc:"A: A storm warning was issued.\nB: School will be canceled.",
     funFact:"Japan's けいほう (警報) system has three levels: ちゅういほう (advisory), けいほう (warning), and とくべつけいほう (special warning, most severe). When a けいほう is issued, schools often close. Japanese smartphones automatically receive きんきゅうそくほう (emergency alerts) with a loud alarm."},

    {type:"teach", trg:"ぼうさい", src:"disaster prevention / preparedness", pos:"noun", gender:null,
     note:"ぼうさいくんれん = disaster drill.\nぼうさいグッズ = emergency supplies.",
     example:"A: ぼうさいくんれんにさんかしましょう。\nB: いいですね。だいじなことです。",
     exampleSrc:"A: Let's participate in the disaster drill.\nB: Good idea. It is important.",
     funFact:"Japan is a world leader in ぼうさい (防災). September 1st is ぼうさいのひ (Disaster Prevention Day), marking the 1923 Great Kanto Earthquake anniversary. Schools and companies hold ぼうさいくんれん regularly. Every home is encouraged to keep 3 days of water and food as ぼうさいびちく."},

    {type:"teach", trg:"ふっきゅう", src:"recovery / restoration", pos:"noun", gender:null,
     note:"ふっきゅうする = to recover/restore.\nふっきゅうこうじ = restoration work.",
     example:"A: でんきがふっきゅうしました。\nB: よかったですね。",
     exampleSrc:"A: The electricity has been restored.\nB: That is good.",
     funFact:"Japan's ふっきゅう (復旧) speed after disasters amazes the world. After the 2011 earthquake, bullet trains resumed within 49 days. Roads were repaired in weeks. The concept of ふっこう (復興, reconstruction) goes beyond physical repair to community rebuilding. がんばろう (let's persevere) becomes a rallying cry."},

    {type:"mc", q:"What does つなみ literally mean?", opts:["Harbor wave","Big water","Ocean anger","Shaking sea"], ans:"Harbor wave",
     hint:"つ comes from 津 (h.../port) and なみ comes from 波 (w...)."},

    {type:"fb", s:"{1}はどこですか？ちかくのがっこうです。\n(Where is the evacuation shelter? The nearby school.)", a:"ひなんじょ", opts:["ひなんじょ","こうばん","びょういん","たいしかん"], sSrc:"Where is the evacuation shelter? The nearby school.",
     hint:"These designated safe locations, often schools, are where people go during emergencies."},

    {type:"match", pairs:[
      {trg:"じしん", src:"earthquake"},
      {trg:"たいふう", src:"typhoon"},
      {trg:"こうずい", src:"flood"},
      {trg:"ぼうさい", src:"disaster prevention"}
    ]},

    {type:"mc", q:"When is ぼうさいのひ (Disaster Prevention Day)?", opts:["September 1st","March 11th","January 17th","August 15th"], ans:"September 1st",
     hint:"This date commemorates the Great Kanto Earthquake of 1923."}
  ]
};
export default BATCH9_L1;
