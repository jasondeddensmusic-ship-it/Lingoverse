// Batch 11 – Unit 34 (B2.4 International Relations): Diplomacy & Global Issues
const BATCH11_L1 = {
  id:"jav2_u34l_b11_1", title:"こくさいじょうせい", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"こくさいじょうせい",
     desc:"Learn vocabulary for discussing international relations, diplomacy, and global issues. These terms appear frequently in Japanese news and are tested on JLPT N2/N1.",
     goals:["Discuss international affairs in Japanese","Use diplomacy and cooperation vocabulary","Understand global issues through Japanese perspectives"]},

    {type:"teach", trg:"がいこう", src:"diplomacy / foreign affairs", pos:"noun", gender:null,
     note:"がいこうかん = diplomat.\nがいこうもんだい = diplomatic issue.",
     example:"A: にほんのがいこうせいさくについてどうおもいますか？\nB: へいわしゅぎをたいせつにするべきです。",
     exampleSrc:"A: What do you think about Japan's foreign policy?\nB: We should value pacifism.",
     funFact:"Japan's がいこう (外交) since WWII has been characterized by へいわがいこう (peace diplomacy) and けいざいがいこう (economic diplomacy). Japan is one of the largest contributors to ODA (政府開発援助, Official Development Assistance). The がいむしょう (Ministry of Foreign Affairs) manages Japan's diplomatic relationships with 195 countries."},

    {type:"teach", trg:"きょうりょく", src:"cooperation", pos:"noun", gender:null,
     note:"きょうりょくする = to cooperate.\nこくさいきょうりょく = international cooperation.",
     example:"A: かんきょうもんだいにはこくさいてきなきょうりょくがひつようです。\nB: いちこくだけではかいけつできませんね。",
     exampleSrc:"A: International cooperation is necessary for environmental issues.\nB: One country alone cannot solve them.",
     funFact:"きょうりょく (協力) is central to Japanese social values: mutual help and cooperation. Japan participates in こくさいきょうりょく through JICA (国際協力機構), sending specialists and volunteers to developing countries. Japanese きょうりょくたいいん (cooperation corps members) work in education, agriculture, and healthcare worldwide."},

    {type:"teach", trg:"こくれん", src:"United Nations", pos:"noun", gender:null,
     note:"Short for こくさいれんごう.\nこくれんそうかい = UN General Assembly.",
     example:"A: にほんはこくれんのあんぜんほしょうりじかいにはいっていますか？\nB: じょうにんりじこくではありません。",
     exampleSrc:"A: Is Japan in the UN Security Council?\nB: It is not a permanent member.",
     funFact:"Japan has sought じょうにんりじこく (permanent member) status in the UN Security Council for decades. Japan is the third-largest contributor to the UN budget. こくれん大学 (United Nations University) is headquartered in Tokyo. Japan's UN-related vocabulary is heavily tested on JLPT N1."},

    {type:"teach", trg:"ふんそう", src:"conflict / dispute", pos:"noun", gender:null,
     note:"ちいきふんそう = regional conflict.\nふんそうかいけつ = conflict resolution.",
     example:"A: せかいにはまだおおくのふんそうがあります。\nB: へいわてきなかいけつをのぞみます。",
     exampleSrc:"A: There are still many conflicts in the world.\nB: I hope for peaceful resolution.",
     funFact:"ふんそう (紛争) ranges from armed conflict to trade disputes. Japan's constitution Article 9 renounces war, but the じえいたい (Self-Defense Forces) exists for defensive purposes. Japan participates in PKO (国連平和維持活動) peacekeeping operations. The tension between pacifism and security needs is Japan's central foreign policy debate."},

    {type:"teach", trg:"じんどうてき", src:"humanitarian", pos:"adj", gender:null,
     note:"じんどうてきしえん = humanitarian aid.\nFrom じんどう (humanity/humaneness).",
     example:"A: にほんはじんどうてきしえんにちからをいれています。\nB: さいがいきゅうえんもはやいですね。",
     exampleSrc:"A: Japan puts effort into humanitarian aid.\nB: Disaster relief is also fast.",
     funFact:"Japan's じんどうてき (人道的) support is significant globally. After natural disasters, Japan rapidly deploys きゅうえんたい (relief teams). Japanese earthquake expertise makes its disaster relief particularly valuable. Japan's own disaster experience (阪神大震災, 東日本大震災) drives its commitment to helping others in similar situations."},

    {type:"teach", trg:"じょうやく", src:"treaty", pos:"noun", gender:null,
     note:"にちべいあんぽじょうやく = US-Japan Security Treaty.\nじょうやくをむすぶ = conclude a treaty.",
     example:"A: にちべいあんぽじょうやくはいつからありますか？\nB: せんきゅうひゃくごじゅういちねんからです。",
     exampleSrc:"A: Since when has the US-Japan Security Treaty existed?\nB: Since 1951.",
     funFact:"The にちべいあんぽじょうやく (US-Japan Security Treaty) is the cornerstone of Japan's defense policy. US military bases in Japan, particularly in Okinawa, remain a contentious issue. Japan also has じゆうぼうえききょうてい (free trade agreements) with multiple countries and regions, including the CPTPP."},

    {type:"teach", trg:"なんみん", src:"refugee", pos:"noun", gender:null,
     note:"なんみんもんだい = refugee issue.\nなんみんにんてい = refugee recognition.",
     example:"A: にほんのなんみんにんていりつはたかいですか？\nB: ざんねんながら、ひくいのがげんじょうです。",
     exampleSrc:"A: Is Japan's refugee recognition rate high?\nB: Unfortunately, it is currently low.",
     funFact:"Japan's なんみん (難民) acceptance rate has been historically very low (under 1% of applications), drawing international criticism. Recent reforms aim to increase acceptance. The debate balances にゅうかんほう (immigration law) strictness with じんどうてき (humanitarian) obligations. This topic frequently appears in JLPT N1 reading passages."},

    {type:"teach", trg:"ぼうえき", src:"trade / commerce", pos:"noun", gender:null,
     note:"じゆうぼうえき = free trade.\nぼうえきしゅうし = trade balance.",
     example:"A: にほんのぼうえきあいてこくはどこですか？\nB: ちゅうごくとアメリカがおおいです。",
     exampleSrc:"A: Who are Japan's trade partners?\nB: China and America are the largest.",
     funFact:"Japan's ぼうえき (貿易) relationships shape its economy and diplomacy. Japan exports automobiles and electronics while importing energy and food. ぼうえきまさつ (trade friction), particularly with the US in the 1980s-90s, shaped modern trade policies. Japan's participation in mega-trade agreements (CPTPP, RCEP) reflects its free trade commitment."},

    {type:"teach", trg:"たぶんか", src:"multicultural", pos:"adj", gender:null,
     note:"たぶんかきょうせい = multicultural coexistence.\nたぶんかしゃかい = multicultural society.",
     example:"A: にほんはたぶんかしゃかいにむかっています。\nB: がいこくじんろうどうしゃもふえていますね。",
     exampleSrc:"A: Japan is moving toward a multicultural society.\nB: Foreign workers are increasing too.",
     funFact:"たぶんかきょうせい (多文化共生, multicultural coexistence) is Japan's framework for integration. With 3 million foreign residents, Japan is navigating cultural diversity while maintaining social cohesion. Local governments create たぶんかきょうせいけいかく (multicultural coexistence plans). The challenge is balancing Japanese cultural identity with openness to diversity."},

    {type:"teach", trg:"へいわ", src:"peace", pos:"noun", gender:null,
     note:"へいわしゅぎ = pacifism.\nせかいへいわ = world peace.",
     example:"A: へいわをまもるためになにができますか？\nB: まずたがいをりかいすることがだいじです。",
     exampleSrc:"A: What can we do to protect peace?\nB: First, understanding each other is important.",
     funFact:"へいわ (平和) is deeply ingrained in postwar Japanese identity. Hiroshima and Nagasaki's へいわきねんしりょうかん (Peace Memorial Museums) receive millions of visitors. Japan's へいわけんぽう (peace constitution) and ひかくさんげんそく (three non-nuclear principles) reflect this commitment. August 6 and 9 are solemn national remembrance days."},

    // Quiz steps
    {type:"mc", q:"にほんこくけんぽうだいきゅうじょうはなにをきていしていますか？",
     opts:["Renunciation of war and non-possession of military force","Freedom of the press","Right to education","Equality under the law"],
     ans:"Renunciation of war and non-possession of military force",
     hint:"This famous constitutional article makes Japan's peace-oriented foreign policy unique among major nations."},

    {type:"fb", s:"かんきょうもんだいにはこくさいてきな{1}がひつようです。",
     a:["きょうりょく"],
     opts:["きょうりょく","ふんそう","ぼうえき","がいこう"],
     hint:"Environmental problems require countries to work together. This word means 'cooperation.'",
     sSrc:"International cooperation is necessary for environmental issues."},

    {type:"match", pairs:[
      {trg:"がいこう", src:"diplomacy"},
      {trg:"じょうやく", src:"treaty"},
      {trg:"なんみん", src:"refugee"},
      {trg:"へいわ", src:"peace"}
    ]},

    {type:"mc", q:"にほんのさいだいのぼうえきあいてこくはどこですか？",
     opts:["China and the United States","India and Russia","Germany and France","Australia and Canada"],
     ans:"China and the United States",
     hint:"Japan's largest trading partners are its closest economic superpowers, one across the Pacific and one across the Sea of Japan."},

    {type:"fb", s:"にほんはたぶんか{1}にむかっています。",
     a:["しゃかい"],
     opts:["しゃかい","がいこう","ぼうえき","じょうやく"],
     hint:"Japan is becoming a society that includes multiple cultures. This word means 'society.'",
     sSrc:"Japan is moving toward a multicultural society."},

    {type:"mc", q:"JICAはなにをするきかんですか？",
     opts:["International cooperation and development aid","Military defense","Trade regulation","Tax collection"],
     ans:"International cooperation and development aid",
     hint:"This Japanese government agency sends specialists and volunteers to developing countries for c... projects."}
  ]
};
export default BATCH11_L1;
