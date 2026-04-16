// Batch 6 – Unit 26 (B2.1 News & Media): Disasters & Emergency Response
const BATCH6_L1 = {
  id:"jav2_u26l_b6_1", title:"さいがいとぼうさい", icon:"🌊", xp:15, board:true,
  steps:[
    {type:"intro", title:"さいがいとぼうさい",
     desc:"Learn critical vocabulary for natural disasters and emergency preparedness. Japan is one of the most disaster-prone countries, and this vocabulary appears constantly in news and daily life.",
     goals:["Name types of natural disasters","Understand emergency broadcast vocabulary","Discuss disaster preparedness"]},

    {type:"teach", trg:"さいがい", src:"disaster / calamity", pos:"noun", gender:null,
     note:"Kanji: 災害. しぜんさいがい = natural disaster.\nさいがいたいさく = disaster countermeasures.",
     example:"A: にほんはしぜんさいがいがおおいくにです。\nB: そうですね。じしん、たいふう、つなみなどがあります。",
     exampleSrc:"A: Japan is a country with many natural disasters.\nB: Yes. There are earthquakes, typhoons, tsunamis, and more.",
     funFact:"さいがい (災害) combines 災 (disaster) and 害 (harm). Japan experiences earthquakes, typhoons, volcanic eruptions, floods, and landslides regularly. The Great East Japan Earthquake (2011) and subsequent tsunami killed over 15,000 people and fundamentally changed disaster preparedness nationwide."},

    {type:"teach", trg:"じしん", src:"earthquake", pos:"noun", gender:null,
     note:"Kanji: 地震. おおきいじしん = large earthquake.\nじしんそくほう = earthquake early warning.",
     example:"A: きのうのよるじしんがありましたね。\nB: はい、しんどさんでした。",
     exampleSrc:"A: There was an earthquake last night, wasn't there?\nB: Yes, it was intensity 3.",
     funFact:"Japan experiences about 1,500 noticeable earthquakes per year. The Japanese seismic intensity scale (しんど) ranges from 0 to 7. Earthquake early warning systems (きんきゅうじしんそくほう) alert phones seconds before shaking arrives. The distinctive alarm sound is known to every Japanese resident."},

    {type:"teach", trg:"ひなん", src:"evacuation / taking refuge", pos:"noun", gender:null,
     note:"Kanji: 避難. ひなんする = to evacuate.\nひなんじょ = evacuation shelter.",
     example:"A: つなみけいほうがでました。すぐにひなんしてください。\nB: もよりのひなんじょはどこですか？",
     exampleSrc:"A: A tsunami warning has been issued. Please evacuate immediately.\nB: Where is the nearest evacuation shelter?",
     funFact:"ひなん (避難) is one of the most critical words in Japanese emergency vocabulary. ひなんけいろ (evacuation route), ひなんくんれん (evacuation drill), and ひなんぐ (emergency supplies) are all essential terms. Schools conduct ひなんくんれん multiple times per year. Every community has designated ひなんじょ."},

    {type:"teach", trg:"たいふう", src:"typhoon", pos:"noun", gender:null,
     note:"Kanji: 台風. たいふうがくる = a typhoon is coming.\nたいふうのめ = the eye of the typhoon.",
     example:"A: あしたおおがたのたいふうがちかづいています。\nB: がいしゅつをひかえましょう。",
     exampleSrc:"A: A large typhoon is approaching tomorrow.\nB: Let us refrain from going out.",
     funFact:"Japan typically experiences 10-15 typhoons per year, with the season peaking August to October. Typhoons are numbered: たいふういちごう (Typhoon No. 1). The Japan Meteorological Agency (きしょうちょう) tracks and names them. Super typhoons can bring winds over 200 km/h and massive rainfall."},

    {type:"teach", trg:"けいほう", src:"warning / alert", pos:"noun", gender:null,
     note:"Kanji: 警報. おおあめけいほう = heavy rain warning.\nきんきゅうけいほう = emergency alert.",
     example:"A: おおあめけいほうがはっぴょうされました。\nB: きょうはいえにいたほうがいいですね。",
     exampleSrc:"A: A heavy rain warning has been issued.\nB: We should stay home today.",
     funFact:"けいほう (警報) is more serious than ちゅういほう (注意報, advisory). The hierarchy: ちゅういほう (caution) < けいほう (warning) < とくべつけいほう (special warning, most severe). When とくべつけいほう is issued, it means 'once in decades' level danger. Schools close automatically when けいほう is issued."},

    {type:"mc", q:"ひなんじょ is:", opts:["An evacuation shelter","A hospital","A police station","A fire station"], ans:"An evacuation shelter",
     hint:"This is the designated safe place to go during emergencies."},

    {type:"teach", trg:"こうずい", src:"flood", pos:"noun", gender:null,
     note:"Kanji: 洪水. こうずいけいほう = flood warning.\nこうずいハザードマップ = flood hazard map.",
     example:"A: おおあめでかわがはんらんしてこうずいになりました。\nB: ひがいはどのくらいですか？",
     exampleSrc:"A: Heavy rain caused the river to overflow and flood.\nB: How much damage is there?",
     funFact:"こうずい (洪水) is increasingly common due to climate change. The term ゲリラごうう (guerrilla downpour) describes sudden, intense rainfall that overwhelms drainage systems. Japanese cities use ちかちゅうすいそう (underground water tanks) and ゆうすいち (retention basins) as countermeasures."},

    {type:"teach", trg:"きんきゅう", src:"emergency / urgent", pos:"noun", gender:null,
     note:"Kanji: 緊急. きんきゅうじたい = state of emergency.\nきんきゅうれんらく = emergency contact.",
     example:"A: きんきゅうのばあいは119ばんにでんわしてください。\nB: わかりました。けいたいにばんごうをほぞんしました。",
     exampleSrc:"A: In an emergency, please call 119.\nB: Understood. I saved the number on my phone.",
     funFact:"きんきゅう (緊急) combines 緊 (tense/tight) and 急 (urgent/hurry). きんきゅうじたいせんげん (state of emergency declaration) gained widespread recognition during COVID-19. Japan's emergency broadcast system sends きんきゅうそくほう (emergency alerts) directly to all phones in affected areas."},

    {type:"teach", trg:"ぼうさい", src:"disaster prevention", pos:"noun", gender:null,
     note:"Kanji: 防災. ぼうさいくんれん = disaster drill.\nぼうさいグッズ = emergency supplies.",
     example:"A: ぼうさいグッズはじゅんびしていますか？\nB: はい、みずとしょくりょうをさんにちぶんよういしています。",
     exampleSrc:"A: Have you prepared emergency supplies?\nB: Yes, I have water and food for three days.",
     funFact:"Japan leads the world in ぼうさい (防災). Every September 1st is ぼうさいのひ (Disaster Prevention Day), commemorating the 1923 Great Kanto Earthquake. Schools, workplaces, and communities hold regular ぼうさいくんれん (disaster drills). Japanese homes keep ぼうさいぶくろ (emergency bags) ready."},

    {type:"teach", trg:"ふっこう", src:"reconstruction / recovery", pos:"noun", gender:null,
     note:"Kanji: 復興. ふっこうする = to reconstruct.\nさいがいふっこう = disaster recovery.",
     example:"A: ひさいちのふっこうをおうえんしましょう。\nB: はい、ぼきんかつどうにさんかします。",
     exampleSrc:"A: Let us support the reconstruction of disaster areas.\nB: Yes, I will participate in fundraising activities.",
     funFact:"ふっこう (復興) became a national mission word after 2011. ふっこうちょう (Reconstruction Agency) was established as a government ministry. がんばろう東北 (stay strong, Tohoku) and ふっこうおうえん (reconstruction support) rallied the nation. Products from disaster areas are bought as ふっこうおうえん to support local economies."},

    {type:"fb", s:"つなみけいほうがでました。すぐに{1}してください。\n(A tsunami warning was issued. Please evacuate immediately.)", a:"ひなん", opts:["ひなん","ぼうさい","ふっこう","こうしょう"], sSrc:"A tsunami warning was issued. Please evacuate immediately.",
     hint:"The verb meaning to take refuge or evacuate to safety."},

    {type:"teach", trg:"そなえる", src:"to prepare (for) / to equip", pos:"verb", gender:null,
     note:"Group 2 verb. じしんにそなえる = to prepare for earthquakes.\nKanji: 備える.",
     example:"A: じしんにそなえてかぐをこていしましょう。\nB: たいしんマットをかいました。",
     exampleSrc:"A: Let us secure furniture in preparation for earthquakes.\nB: I bought earthquake-proofing mats.",
     funFact:"そなえあればうれいなし (if you prepare, there is no worry) is a famous Japanese proverb. そなえる culture drives Japan's disaster readiness: earthquake kits, emergency water, flashlights, and portable radios. The word combines 備 (prepare) with the concept of having supplies ready before disaster strikes."},

    {type:"mc", q:"ぼうさいグッズ are:", opts:["Emergency supplies and equipment","Office supplies","Cooking tools","Sports equipment"], ans:"Emergency supplies and equipment",
     hint:"ぼうさい means disaster prevention, and グッズ means goods/s...."},

    {type:"match", pairs:[
      {trg:"じしん", src:"earthquake"},
      {trg:"たいふう", src:"typhoon"},
      {trg:"こうずい", src:"flood"},
      {trg:"ひなん", src:"evacuation"},
      {trg:"ぼうさい", src:"disaster prevention"}
    ]},

    {type:"fb", s:"じしんに{1}てかぐをこていしましょう。\n(Let us secure furniture in preparation for earthquakes.)", a:"そなえ", opts:["そなえ","なれ","あきらめ","そうだんし"], sSrc:"Let us secure furniture in preparation for earthquakes.",
     hint:"The て-form of the verb meaning to prepare for something in advance."},

    {type:"mc", q:"ふっこう describes:", opts:["Rebuilding and recovery after disaster","Preventing disasters","Predicting earthquakes","Evacuating to safety"], ans:"Rebuilding and recovery after disaster",
     hint:"This word refers to the long-term process of reconstruction."}
  ]
};
export default BATCH6_L1;
