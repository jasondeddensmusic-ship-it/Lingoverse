// Batch 8 – Unit 10 (A1.3 Weather): Natural Phenomena & Disasters
const BATCH8_L1 = {
  id:"jav2_u10l_b8_1", title:"自然(しぜん)災害(さいがい)", icon:"🌊", xp:15, board:true,
  steps:[
    {type:"intro", title:"自然(しぜん)災害(さいがい)",
     desc:"Learn vocabulary for natural phenomena and disasters. Japan experiences earthquakes, typhoons, and other events regularly, making this vocabulary genuinely important.",
     goals:["Name common natural disasters and phenomena","Understand weather warnings and safety terms","Use emergency-related vocabulary"]},

    {type:"teach", trg:"地震(じしん)", src:"earthquake", pos:"noun", gender:null,
     note:"Kanji: 地震. 地震(じしん)が起(お)きる = an earthquake occurs.\n大地震(おおじしん) = major earthquake.",
     example:"A: 昨日(きのう)地震(じしん)がありましたね。\nB: はい、怖(こわ)かったです。",
     exampleSrc:"A: There was an earthquake yesterday.\nB: Yes, it was scary.",
     funFact:"Japan experiences about 1,500 earthquakes per year that can be felt. The 震度(しんど) scale (1 to 7) measures intensity, different from the magnitude scale. Every Japanese person learns 地震(じしん)対策(たいさく) (earthquake preparedness) from childhood. The phrase 地震(じしん)雷(かみなり)火事(かじ)親父(おやじ) lists Japan's four scariest things."},

    {type:"teach", trg:"台風(たいふう)", src:"typhoon", pos:"noun", gender:null,
     note:"Kanji: 台風. 台風(たいふう)が来(く)る = a typhoon is coming.\nTyphoon season: July to October.",
     example:"A: 台風(たいふう)が来(き)ています。外(そと)に出(で)ないでください。\nB: はい、気(き)をつけます。",
     exampleSrc:"A: A typhoon is coming. Please do not go outside.\nB: Okay, I will be careful.",
     funFact:"Japan is hit by an average of 3 typhoons per year. 台風(たいふう) are numbered, not named, in Japanese media. Schools and companies often close on 台風(たいふう)の日(ひ) (typhoon days). The phrase 台風(たいふう)一過(いっか) (after the typhoon passes) refers to the beautiful clear weather that follows."},

    {type:"teach", trg:"津波(つなみ)", src:"tsunami", pos:"noun", gender:null,
     note:"A Japanese word adopted into English worldwide.\nKanji: 津波 (harbor wave).",
     example:"A: 津波(つなみ)警報(けいほう)が出(で)ています。\nB: 高(たか)いところに逃(に)げましょう。",
     exampleSrc:"A: A tsunami warning has been issued.\nB: Let us evacuate to high ground.",
     funFact:"津波(つなみ) is one of the few Japanese words used universally in every language. After the 2011 Great East Japan Earthquake, 津波(つなみ) awareness became global. Coastal areas have 津波(つなみ)避難(ひなん)タワー (tsunami evacuation towers) and clear evacuation route signs."},

    {type:"teach", trg:"洪水(こうずい)", src:"flood", pos:"noun", gender:null,
     note:"Kanji: 洪水. 洪水(こうずい)警報(けいほう) = flood warning.\n川(かわ)が氾濫(はんらん)する = a river overflows.",
     example:"A: 大雨(おおあめ)で洪水(こうずい)になりました。\nB: 避難(ひなん)しましたか？",
     exampleSrc:"A: The heavy rain caused a flood.\nB: Did you evacuate?",
     funFact:"洪水(こうずい) (floods) from heavy rain cause more damage in Japan than earthquakes in most years. ゲリラ豪雨(ごうう) (guerrilla downpours) are sudden intense rainstorms that have increased with climate change. Japanese cities have massive underground flood prevention channels, including the famous 首都圏(しゅとけん)外郭(がいかく)放水路(ほうすいろ) near Tokyo."},

    {type:"teach", trg:"火山(かざん)", src:"volcano", pos:"noun", gender:null,
     note:"Kanji: 火山 (fire mountain). 火山(かざん)噴火(ふんか) = volcanic eruption.\nJapan has 111 active volcanoes.",
     example:"A: 富士山(ふじさん)は火山(かざん)ですか？\nB: はい、活火山(かっかざん)です。",
     exampleSrc:"A: Is Mount Fuji a volcano?\nB: Yes, it is an active volcano.",
     funFact:"Japan sits on the Pacific Ring of Fire with 111 活火山(かっかざん) (active volcanoes), about 7% of the world's total. 富士山(ふじさん) (Mount Fuji) last erupted in 1707. Volcanic hot springs (温泉(おんせん)) are one of Japan's greatest cultural treasures, directly created by 火山(かざん)活動(かつどう) (volcanic activity)."},

    {type:"mc", q:"What does 津波(つなみ) literally mean in Japanese?", opts:["Harbor wave","Big wave","Scary wave","Sea earthquake"], ans:"Harbor wave",
     hint:"The kanji 津 means h.../port and 波 means w...."},

    {type:"teach", trg:"避難(ひなん)", src:"evacuation / taking refuge", pos:"noun", gender:null,
     note:"Kanji: 避難. 避難(ひなん)する = to evacuate.\n避難所(ひなんじょ) = evacuation shelter.",
     example:"A: 避難所(ひなんじょ)はどこですか？\nB: 近(ちか)くの小学校(しょうがっこう)です。",
     exampleSrc:"A: Where is the evacuation shelter?\nB: The nearby elementary school.",
     funFact:"Every Japanese neighborhood has designated 避難所(ひなんじょ) (evacuation shelters), usually schools and community centers. 防災(ぼうさい)訓練(くんれん) (disaster drills) happen annually on September 1 (Disaster Prevention Day). Most households keep a 防災(ぼうさい)リュック (emergency backpack) with water, food, and supplies."},

    {type:"teach", trg:"警報(けいほう)", src:"warning / alert", pos:"noun", gender:null,
     note:"Kanji: 警報. 大雨(おおあめ)警報(けいほう) = heavy rain warning.\n注意報(ちゅういほう) = advisory (less severe).",
     example:"A: 大雨(おおあめ)警報(けいほう)が出(で)ています。\nB: 学校(がっこう)はお休(やす)みですか？",
     exampleSrc:"A: A heavy rain warning has been issued.\nB: Is school cancelled?",
     funFact:"Japan's 警報(けいほう) system has multiple levels: 注意報(ちゅういほう) (advisory), 警報(けいほう) (warning), and 特別(とくべつ)警報(けいほう) (special warning, the most severe). When 警報(けいほう) is issued, many schools close automatically. Emergency alerts also arrive as loud 緊急速報(きんきゅうそくほう) (emergency broadcasts) on all phones."},

    {type:"teach", trg:"揺(ゆ)れる", src:"to shake / to sway", pos:"verb", gender:null,
     note:"地震(じしん)で揺(ゆ)れる = to shake from an earthquake.\n揺(ゆ)れ = the shaking/tremor.",
     example:"A: 今(いま)揺(ゆ)れましたか？\nB: はい、地震(じしん)かもしれません。",
     exampleSrc:"A: Did it just shake?\nB: Yes, it might be an earthquake.",
     funFact:"Japanese people develop a sensitivity to 揺(ゆ)れ from living with frequent earthquakes. The question 今(いま)揺(ゆ)れた？ (Did it just shake?) is a common Japanese conversation topic. 揺(ゆ)れ can also describe ships swaying, trees in wind, or even emotional instability (心(こころ)が揺(ゆ)れる, to be emotionally shaken)."},

    {type:"teach", trg:"雷(かみなり)", src:"thunder / lightning", pos:"noun", gender:null,
     note:"Kanji: 雷. 雷(かみなり)が鳴(な)る = thunder rumbles.\n雷(かみなり)が落(お)ちる = lightning strikes.",
     example:"A: 雷(かみなり)が鳴(な)っています。\nB: 危(あぶ)ないから中(なか)に入(はい)りましょう。",
     exampleSrc:"A: It is thundering.\nB: It is dangerous, so let us go inside.",
     funFact:"雷(かみなり) literally means 'god's sound' (神(かみ)鳴(な)り). In Japanese mythology, 雷神(らいじん) (the thunder god) beats drums to create thunder. The phrase 雷(かみなり)親父(おやじ) describes a stern, loud father who scolds like thunder. Summer 雷(かみなり) in the mountains is a genuine danger."},

    {type:"teach", trg:"虹(にじ)", src:"rainbow", pos:"noun", gender:null,
     note:"Kanji: 虹. 虹(にじ)が出(で)る = a rainbow appears.\n虹色(にじいろ) = rainbow-colored.",
     example:"A: 雨(あめ)のあとに虹(にじ)が出(で)ました。\nB: きれいですね！写真(しゃしん)を撮(と)りましょう。",
     exampleSrc:"A: A rainbow appeared after the rain.\nB: Beautiful! Let us take a photo.",
     funFact:"The Japanese word 虹(にじ) uses a kanji with the insect radical (虫), because ancient Chinese thought rainbows were giant snakes or dragons arching across the sky. Japanese children learn to count seven colors in a 虹(にじ), the same as in English (though some cultures see fewer)."},

    {type:"fb", s:"高(たか)いところに{1}しましょう。\n(Let us evacuate to high ground.)", a:"避難(ひなん)", opts:["避難(ひなん)","警報(けいほう)","地震(じしん)","津波(つなみ)"], sSrc:"Let us evacuate to high ground.",
     hint:"This word means to take refuge or escape from danger."},

    {type:"teach", trg:"防災(ぼうさい)", src:"disaster prevention / preparedness", pos:"noun", gender:null,
     note:"Kanji: 防災. 防災(ぼうさい)訓練(くんれん) = disaster drill.\n防災(ぼうさい)グッズ = emergency supplies.",
     example:"A: 防災(ぼうさい)グッズを準備(じゅんび)しましたか？\nB: 水(みず)、缶詰(かんづめ)、懐中電灯(かいちゅうでんとう)があります。",
     exampleSrc:"A: Have you prepared emergency supplies?\nB: I have water, canned food, and a flashlight.",
     funFact:"Japan is a world leader in 防災(ぼうさい) (disaster prevention). September 1 is 防災(ぼうさい)の日(ひ) (Disaster Prevention Day), marking the 1923 Great Kanto Earthquake. Schools hold 防災(ぼうさい)訓練(くんれん) regularly. Japanese buildings are built with 耐震(たいしん) (earthquake resistance) technology."},

    {type:"teach", trg:"緊急(きんきゅう)", src:"emergency / urgent", pos:"noun", gender:null,
     note:"Kanji: 緊急. 緊急(きんきゅう)事態(じたい) = state of emergency.\n緊急(きんきゅう)連絡先(れんらくさき) = emergency contact.",
     example:"A: 緊急(きんきゅう)の場合(ばあい)は119に電話(でんわ)してください。\nB: わかりました。",
     exampleSrc:"A: In case of emergency, please call 119.\nB: Understood.",
     funFact:"Japan's emergency numbers are 110 for police and 119 for fire/ambulance (the reverse of Western countries). During 緊急(きんきゅう)事態(じたい) (state of emergency), trains may stop and stores close. The 緊急(きんきゅう)速報(そくほう) (emergency alert) system sends warnings directly to all mobile phones in an area."},

    {type:"match", pairs:[{trg:"地震(じしん)",src:"earthquake"},{trg:"台風(たいふう)",src:"typhoon"},{trg:"津波(つなみ)",src:"tsunami"},{trg:"洪水(こうずい)",src:"flood"},{trg:"火山(かざん)",src:"volcano"}],
     hint:"Match each natural disaster with its English name."},

    {type:"mc", q:"What is 防災(ぼうさい)?", opts:["Disaster prevention and preparedness","A type of natural disaster","An emergency phone number","A weather forecast"], ans:"Disaster prevention and preparedness",
     hint:"Japan is a world leader in this field, with regular drills and emergency supplies."},

    {type:"fb", s:"{1}が起(お)きて、建物(たてもの)が揺(ゆ)れました。\n(An earthquake occurred and the building shook.)", a:"地震(じしん)", opts:["地震(じしん)","台風(たいふう)","雷(かみなり)","津波(つなみ)"], sSrc:"An earthquake occurred and the building shook.",
     hint:"This natural event causes the ground and buildings to shake."},

    {type:"mc", q:"What is the Japanese emergency number for fire and ambulance?", opts:["119","110","911","999"], ans:"119",
     hint:"This is the reverse order of police calls. Fire and ambulance share this number."}
  ,{type:"match",pairs:[{trg:"警報(けいほう)",src:"warning / alert"},{trg:"揺(ゆ)れる",src:"to shake / to sway"},{trg:"雷(かみなり)",src:"thunder / lightning"},{trg:"虹(にじ)",src:"rainbow"},{trg:"防災(ぼうさい)",src:"disaster prevention / preparedness"},{trg:"緊急(きんきゅう)",src:"emergency / urgent"}]}]
};
export default BATCH8_L1;
