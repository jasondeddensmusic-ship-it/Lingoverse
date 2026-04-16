// Unit 34 Batch 2 Lesson 2: ちいきれんけい (Regional Partnerships)
const BATCH2_L_2 = {
  id:"jav2_u34l_b2_2", title:"ちいきれんけい", icon:"🌏", xp:15, board:true,
  steps:[
    {type:"intro", title:"ちいきれんけい",
     desc:"Japan operates within a complex web of regional partnerships in the Indo-Pacific. Learn vocabulary for regional organizations, trade blocs, and multilateral cooperation. These terms are essential for understanding Japanese foreign policy and JLPT N1 reading passages.",
     goals:["Use regional partnership vocabulary","Discuss trade blocs and alliances","Understand Japan's regional role"]},

    {type:"teach", trg:"どうめい", src:"alliance / coalition", pos:"noun", gender:null,
     note:"Kanji: 同盟. にちべいどうめい = US-Japan alliance.\nぐんじどうめい = military alliance.",
     example:"A: にちべいどうめいはにほんのあんぜんほしょうのきちゅうです。\nB: ろくじゅうねんいじょうつづいているどうめいですね。",
     exampleSrc:"A: The US-Japan alliance is the cornerstone of Japan's security.\nB: It is an alliance that has lasted over 60 years.",
     funFact:"同盟 uses 同 (same) and 盟 (oath/pledge). The にちべいどうめい is Japan's most important bilateral relationship, anchored by the Security Treaty (1960). Under the alliance, the US maintains military bases in Japan, most notably in Okinawa. The alliance has evolved from Cold War containment to addressing 21st-century challenges including cybersecurity and space."},

    {type:"teach", trg:"たこくかん", src:"multilateral / between many countries", pos:"adj", gender:null,
     note:"Kanji: 多国間. たこくかんきょうりょく = multilateral cooperation.\nOpposite: にこくかん (bilateral).",
     example:"A: たこくかんのわくぐみでもんだいをかいけつすべきです。\nB: いっこくだけではたいおうできないもんだいがふえています。",
     exampleSrc:"A: We should solve problems within multilateral frameworks.\nB: Problems that one country cannot handle alone are increasing.",
     funFact:"多国間 uses 多 (many), 国 (countries), and 間 (between). Japan actively participates in たこくかん frameworks including the G7, G20, APEC, and ASEAN+3. The shift from にこくかん (bilateral) to たこくかん diplomacy reflects the increasing complexity of global challenges that require collective responses."},

    {type:"teach", trg:"けいざいけん", src:"economic zone / economic sphere", pos:"noun", gender:null,
     note:"Kanji: 経済圏. アジアけいざいけん = Asian economic zone.\nじゆうぼうえきけん = free trade zone.",
     example:"A: アジアけいざいけんのせいちょうはめざましいです。\nB: にほんきぎょうのしんしゅつもかそくしていますね。",
     exampleSrc:"A: The growth of the Asian economic zone is remarkable.\nB: Japanese companies' expansion is also accelerating.",
     funFact:"経済圏 uses 経済 (economy) and 圏 (sphere/zone). Japan is part of several overlapping けいざいけん: the RCEP (Regional Comprehensive Economic Partnership), CPTPP (Comprehensive and Progressive Trans-Pacific Partnership), and bilateral EPA (Economic Partnership Agreements) with the EU and others. These agreements shape trade flows worth trillions of yen."},

    {type:"mc", q:"にちべいどうめい is described as:", opts:["The cornerstone of Japan's security","A temporary arrangement","A trade agreement only","An environmental partnership"], ans:"The cornerstone of Japan's security",
     hint:"This alliance has been the foundation of J...'s defense strategy for over 60 years."},

    {type:"teach", trg:"りょうどもんだい", src:"territorial dispute / territorial issue", pos:"noun", gender:null,
     note:"Kanji: 領土問題. りょうど (territory) + もんだい (problem/issue).\nほっぽうりょうど = Northern Territories.",
     example:"A: にほんはいくつかのりょうどもんだいをかかえています。\nB: へいわてきかいけつがのぞまれますね。",
     exampleSrc:"A: Japan has several territorial disputes.\nB: Peaceful resolution is hoped for.",
     funFact:"領土問題 is one of the most sensitive topics in Japanese foreign policy. Japan has disputes with Russia (Northern Territories/Kuril Islands), South Korea (Takeshima/Dokdo), and China/Taiwan (Senkaku/Diaoyu Islands). These issues involve complex historical, legal, and emotional dimensions that affect bilateral relations."},

    {type:"teach", trg:"けいざいせいさい", src:"economic sanctions", pos:"noun", gender:null,
     note:"Kanji: 経済制裁. せいさいをかす = to impose sanctions.\nゆにゅうきんし = import ban.",
     example:"A: こくさいしゃかいはけいざいせいさいをはっどうしました。\nB: こうかがでるまでにじかんがかかりますね。",
     exampleSrc:"A: The international community imposed economic sanctions.\nB: It takes time for the effects to appear.",
     funFact:"経済制裁 uses 経済 (economic) and 制裁 (sanction/punishment). Japan participates in international けいざいせいさい through UN Security Council resolutions and independently. As a major trading nation, Japan's sanctions decisions carry significant economic weight. Balancing せいさい obligations with business interests is a constant diplomatic challenge."},

    {type:"teach", trg:"ODA", src:"Official Development Assistance", pos:"noun", gender:null,
     note:"Pronounced オーディーエー. せいふかいはつえんじょ = ODA (full Japanese name).\nJapan is a major ODA contributor.",
     example:"A: にほんのODAはアジアやアフリカのかいはつにこうけんしています。\nB: インフラせいびがとくにつよいぶんやですね。",
     exampleSrc:"A: Japan's ODA contributes to development in Asia and Africa.\nB: Infrastructure development is an especially strong area.",
     funFact:"ODA (Official Development Assistance) is Japan's primary tool for international contribution. Japan was the world's largest ODA donor in the 1990s and remains a top contributor. Japanese ODA emphasizes じりつ (self-reliance) of recipient countries, focusing on infrastructure, education, and technical training rather than direct financial aid. JICA implements most ODA programs."},

    {type:"fb", s:"こくさいしゃかいはけいざい{1}をはっどうしました。\n(The international community imposed economic sanctions.)", a:"せいさい", opts:["せいさい","きょうりょく","えんじょ","こうしょう"], sSrc:"The international community imposed economic sanctions.",
     hint:"The noun meaning penalties or punishments imposed to enforce compliance."},

    {type:"teach", trg:"にっちゅうかんけい", src:"Japan-China relations", pos:"noun", gender:null,
     note:"Kanji: 日中関係. にっちゅう = Japan-China.\nにっかんかんけい = Japan-Korea relations.",
     example:"A: にっちゅうかんけいはけいざいてきそうごいぞんがふかいです。\nB: せいじてきなきんちょうとのバランスがかだいですね。",
     exampleSrc:"A: Japan-China relations have deep economic interdependence.\nB: Balancing with political tensions is the challenge.",
     funFact:"日中関係 is one of the most complex bilateral relationships in the world. Japan and China are each other's largest trading partners, yet historical issues (WWII, Nanjing), territorial disputes (Senkaku Islands), and strategic competition create ongoing friction. The phrase せいれいけいねつ (cold politics, hot economics) describes periods where political tensions coexist with strong economic ties."},

    {type:"teach", trg:"しゅうだんてきじえいけん", src:"collective self-defense", pos:"noun", gender:null,
     note:"Kanji: 集団的自衛権. Reinterpreted by Japan in 2014.\nAllows defense of allies under attack.",
     example:"A: しゅうだんてきじえいけんのこうしがかのうになりました。\nB: けんぽうかいしゃくのへんこうにたいしてさまざまないけんがあります。",
     exampleSrc:"A: The exercise of collective self-defense has become possible.\nB: There are various opinions about the change in constitutional interpretation.",
     funFact:"集団的自衛権 was reinterpreted by the Abe government in 2014, allowing Japan to defend allies under attack even if Japan itself is not directly attacked. This was the most significant change to Japan's security posture since 1947. The decision was highly controversial, with massive protests arguing it violated Article 9's spirit."},

    {type:"mc", q:"せいれいけいねつ describes Japan-China relations with:", opts:["Cold politics and hot economics coexisting","Complete diplomatic isolation","Perfect harmony in all areas","Military alliance"], ans:"Cold politics and hot economics coexisting",
     hint:"This phrase captures how political friction can coexist with strong trade relationships."},

    {type:"fb", s:"にほんの{1}はアジアやアフリカのかいはつにこうけんしています。\n(Japan's ODA contributes to development in Asia and Africa.)", a:"ODA", opts:["ODA","GDP","PKO","SDF"], sSrc:"Japan's ODA contributes to development in Asia and Africa.",
     hint:"The abbreviation for Official Development Assistance, Japan's foreign aid program."},

    {type:"match", pairs:[{trg:"どうめい",src:"alliance"},{trg:"たこくかん",src:"multilateral"},{trg:"りょうどもんだい",src:"territorial dispute"},{trg:"けいざいせいさい",src:"economic sanctions"}]},

    {type:"fb", s:"にちべい{1}はにほんのあんぜんほしょうのきちゅうです。\n(The US-Japan alliance is the cornerstone of Japan's security.)", a:"どうめい", opts:["どうめい","じょうやく","こうしょう","ぼうえき"], sSrc:"The US-Japan alliance is the cornerstone of Japan's security.",
     hint:"The noun for a formal partnership between nations based on shared interests."},

    {type:"match", pairs:[{trg:"ODA",src:"development assistance"},{trg:"にっちゅうかんけい",src:"Japan-China relations"},{trg:"しゅうだんてきじえいけん",src:"collective self-defense"},{trg:"けいざいけん",src:"economic zone"}]},

    {type:"mc", q:"Japan's ODA focuses especially on:", opts:["Military equipment","Infrastructure development and technical training","Direct cash payments","Agricultural subsidies"], ans:"Infrastructure development and technical training",
     hint:"Japan's aid philosophy emphasizes teaching self-reliance through building systems and training people."},
  ]
};
export default BATCH2_L_2;
