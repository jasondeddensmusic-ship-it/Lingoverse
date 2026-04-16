// Batch 8 – Unit 10 (A1.3 Weather): Natural Phenomena & Disasters
const BATCH8_L1 = {
  id:"jav2_u10l_b8_1", title:"しぜんさいがい", icon:"🌊", xp:15, board:true,
  steps:[
    {type:"intro", title:"しぜんさいがい",
     desc:"Learn vocabulary for natural phenomena and disasters. Japan experiences earthquakes, typhoons, and other events regularly, making this vocabulary genuinely important.",
     goals:["Name common natural disasters and phenomena","Understand weather warnings and safety terms","Use emergency-related vocabulary"]},

    {type:"teach", trg:"じしん", src:"earthquake", pos:"noun", gender:null,
     note:"Kanji: 地震. じしんがおきる = an earthquake occurs.\nおおじしん = major earthquake.",
     example:"A: きのうじしんがありましたね。\nB: はい、こわかったです。",
     exampleSrc:"A: There was an earthquake yesterday.\nB: Yes, it was scary.",
     funFact:"Japan experiences about 1,500 earthquakes per year that can be felt. The しんど scale (1 to 7) measures intensity, different from the magnitude scale. Every Japanese person learns じしんたいさく (earthquake preparedness) from childhood. The phrase じしんかみなりかじおやじ lists Japan's four scariest things."},

    {type:"teach", trg:"たいふう", src:"typhoon", pos:"noun", gender:null,
     note:"Kanji: 台風. たいふうがくる = a typhoon is coming.\nTyphoon season: July to October.",
     example:"A: たいふうがきています。そとにでないでください。\nB: はい、きをつけます。",
     exampleSrc:"A: A typhoon is coming. Please do not go outside.\nB: Okay, I will be careful.",
     funFact:"Japan is hit by an average of 3 typhoons per year. たいふう are numbered, not named, in Japanese media. Schools and companies often close on たいふうのひ (typhoon days). The phrase たいふういっか (after the typhoon passes) refers to the beautiful clear weather that follows."},

    {type:"teach", trg:"つなみ", src:"tsunami", pos:"noun", gender:null,
     note:"A Japanese word adopted into English worldwide.\nKanji: 津波 (harbor wave).",
     example:"A: つなみけいほうがでています。\nB: たかいところににげましょう。",
     exampleSrc:"A: A tsunami warning has been issued.\nB: Let us evacuate to high ground.",
     funFact:"つなみ is one of the few Japanese words used universally in every language. After the 2011 Great East Japan Earthquake, つなみ awareness became global. Coastal areas have つなみひなんタワー (tsunami evacuation towers) and clear evacuation route signs."},

    {type:"teach", trg:"こうずい", src:"flood", pos:"noun", gender:null,
     note:"Kanji: 洪水. こうずいけいほう = flood warning.\nかわがはんらんする = a river overflows.",
     example:"A: おおあめでこうずいになりました。\nB: ひなんしましたか？",
     exampleSrc:"A: The heavy rain caused a flood.\nB: Did you evacuate?",
     funFact:"こうずい (floods) from heavy rain cause more damage in Japan than earthquakes in most years. ゲリラごうう (guerrilla downpours) are sudden intense rainstorms that have increased with climate change. Japanese cities have massive underground flood prevention channels, including the famous しゅとけんがいかくほうすいろ near Tokyo."},

    {type:"teach", trg:"かざん", src:"volcano", pos:"noun", gender:null,
     note:"Kanji: 火山 (fire mountain). かざんふんか = volcanic eruption.\nJapan has 111 active volcanoes.",
     example:"A: ふじさんはかざんですか？\nB: はい、かっかざんです。",
     exampleSrc:"A: Is Mount Fuji a volcano?\nB: Yes, it is an active volcano.",
     funFact:"Japan sits on the Pacific Ring of Fire with 111 かっかざん (active volcanoes), about 7% of the world's total. ふじさん (Mount Fuji) last erupted in 1707. Volcanic hot springs (おんせん) are one of Japan's greatest cultural treasures, directly created by かざんかつどう (volcanic activity)."},

    {type:"mc", q:"What does つなみ literally mean in Japanese?", opts:["Harbor wave","Big wave","Scary wave","Sea earthquake"], ans:"Harbor wave",
     hint:"The kanji 津 means h.../port and 波 means w...."},

    {type:"teach", trg:"ひなん", src:"evacuation / taking refuge", pos:"noun", gender:null,
     note:"Kanji: 避難. ひなんする = to evacuate.\nひなんじょ = evacuation shelter.",
     example:"A: ひなんじょはどこですか？\nB: ちかくのしょうがっこうです。",
     exampleSrc:"A: Where is the evacuation shelter?\nB: The nearby elementary school.",
     funFact:"Every Japanese neighborhood has designated ひなんじょ (evacuation shelters), usually schools and community centers. ぼうさいくんれん (disaster drills) happen annually on September 1 (Disaster Prevention Day). Most households keep a ぼうさいリュック (emergency backpack) with water, food, and supplies."},

    {type:"teach", trg:"けいほう", src:"warning / alert", pos:"noun", gender:null,
     note:"Kanji: 警報. おおあめけいほう = heavy rain warning.\nちゅういほう = advisory (less severe).",
     example:"A: おおあめけいほうがでています。\nB: がっこうはおやすみですか？",
     exampleSrc:"A: A heavy rain warning has been issued.\nB: Is school cancelled?",
     funFact:"Japan's けいほう system has multiple levels: ちゅういほう (advisory), けいほう (warning), and とくべつけいほう (special warning, the most severe). When けいほう is issued, many schools close automatically. Emergency alerts also arrive as loud きんきゅうそくほう (emergency broadcasts) on all phones."},

    {type:"teach", trg:"ゆれる", src:"to shake / to sway", pos:"verb", gender:null,
     note:"じしんでゆれる = to shake from an earthquake.\nゆれ = the shaking/tremor.",
     example:"A: いまゆれましたか？\nB: はい、じしんかもしれません。",
     exampleSrc:"A: Did it just shake?\nB: Yes, it might be an earthquake.",
     funFact:"Japanese people develop a sensitivity to ゆれ from living with frequent earthquakes. The question いまゆれた？ (Did it just shake?) is a common Japanese conversation topic. ゆれ can also describe ships swaying, trees in wind, or even emotional instability (こころがゆれる, to be emotionally shaken)."},

    {type:"teach", trg:"かみなり", src:"thunder / lightning", pos:"noun", gender:null,
     note:"Kanji: 雷. かみなりがなる = thunder rumbles.\nかみなりがおちる = lightning strikes.",
     example:"A: かみなりがなっています。\nB: あぶないからなかにはいりましょう。",
     exampleSrc:"A: It is thundering.\nB: It is dangerous, so let us go inside.",
     funFact:"かみなり literally means 'god's sound' (神鳴り). In Japanese mythology, らいじん (the thunder god) beats drums to create thunder. The phrase かみなりおやじ describes a stern, loud father who scolds like thunder. Summer かみなり in the mountains is a genuine danger."},

    {type:"teach", trg:"にじ", src:"rainbow", pos:"noun", gender:null,
     note:"Kanji: 虹. にじがでる = a rainbow appears.\nにじいろ = rainbow-colored.",
     example:"A: あめのあとににじがでました。\nB: きれいですね！しゃしんをとりましょう。",
     exampleSrc:"A: A rainbow appeared after the rain.\nB: Beautiful! Let us take a photo.",
     funFact:"The Japanese word にじ (虹) uses a kanji with the insect radical (虫), because ancient Chinese thought rainbows were giant snakes or dragons arching across the sky. Japanese children learn to count seven colors in a にじ, the same as in English (though some cultures see fewer)."},

    {type:"fb", s:"たかいところに{1}しましょう。\n(Let us evacuate to high ground.)", a:"ひなん", opts:["ひなん","けいほう","じしん","つなみ"], sSrc:"Let us evacuate to high ground.",
     hint:"This word means to take refuge or escape from danger."},

    {type:"teach", trg:"ぼうさい", src:"disaster prevention / preparedness", pos:"noun", gender:null,
     note:"Kanji: 防災. ぼうさいくんれん = disaster drill.\nぼうさいグッズ = emergency supplies.",
     example:"A: ぼうさいグッズをじゅんびしましたか？\nB: みず、かんづめ、かいちゅうでんとうがあります。",
     exampleSrc:"A: Have you prepared emergency supplies?\nB: I have water, canned food, and a flashlight.",
     funFact:"Japan is a world leader in ぼうさい (disaster prevention). September 1 is ぼうさいのひ (Disaster Prevention Day), marking the 1923 Great Kanto Earthquake. Schools hold ぼうさいくんれん regularly. Japanese buildings are built with 耐震 (earthquake resistance) technology."},

    {type:"teach", trg:"きんきゅう", src:"emergency / urgent", pos:"noun", gender:null,
     note:"Kanji: 緊急. きんきゅうじたい = state of emergency.\nきんきゅうれんらくさき = emergency contact.",
     example:"A: きんきゅうのばあいは119にでんわしてください。\nB: わかりました。",
     exampleSrc:"A: In case of emergency, please call 119.\nB: Understood.",
     funFact:"Japan's emergency numbers are 110 for police and 119 for fire/ambulance (the reverse of Western countries). During きんきゅうじたい (state of emergency), trains may stop and stores close. The きんきゅうそくほう (emergency alert) system sends warnings directly to all mobile phones in an area."},

    {type:"match", pairs:[{trg:"じしん",src:"earthquake"},{trg:"たいふう",src:"typhoon"},{trg:"つなみ",src:"tsunami"},{trg:"こうずい",src:"flood"},{trg:"かざん",src:"volcano"}],
     hint:"Match each natural disaster with its English name."},

    {type:"mc", q:"What is ぼうさい?", opts:["Disaster prevention and preparedness","A type of natural disaster","An emergency phone number","A weather forecast"], ans:"Disaster prevention and preparedness",
     hint:"Japan is a world leader in this field, with regular drills and emergency supplies."},

    {type:"fb", s:"{1}がおきて、たてものがゆれました。\n(An earthquake occurred and the building shook.)", a:"じしん", opts:["じしん","たいふう","かみなり","つなみ"], sSrc:"An earthquake occurred and the building shook.",
     hint:"This natural event causes the ground and buildings to shake."},

    {type:"mc", q:"What is the Japanese emergency number for fire and ambulance?", opts:["119","110","911","999"], ans:"119",
     hint:"This is the reverse order of police calls. Fire and ambulance share this number."}
  ]
};
export default BATCH8_L1;
