// Batch 8 – Unit 34 (B2.4 International Relations): Diplomacy & Cooperation
const BATCH8_L1 = {
  id:"jav2_u34l_b8_1", title:"がいこうときょうりょく", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"がいこうときょうりょく",
     desc:"Master diplomacy and international cooperation vocabulary essential for discussing world affairs and Japan's role in the international community at N2 level.",
     goals:["Discuss diplomatic relations and treaties","Understand international organization terminology","Analyze Japan's foreign policy vocabulary"]},

    {type:"teach", trg:"がいこう", src:"diplomacy / foreign affairs", pos:"noun", gender:null,
     note:"Kanji: 外交. がいこうかん = diplomat.\nがいこうせいさく = foreign policy.",
     example:"A: にほんのがいこうせいさくについてぎろんします。\nB: にちべいかんけいがちゅうしんですか？",
     exampleSrc:"A: We will discuss Japan's foreign policy.\nB: Is the US-Japan relationship central?",
     funFact:"Japan's がいこう balances the にちべいどうめい (US-Japan alliance), アジアがいこう (Asian diplomacy), and こくれんちゅうしんしゅぎ (UN-centered approach). Japan's がいこうかん (diplomats) undergo rigorous training at the がいむしょう (Ministry of Foreign Affairs). Japan is the world's fourth-largest ODA donor."},

    {type:"teach", trg:"しゅのう", src:"head of state / leader / chief", pos:"noun", gender:null,
     note:"Kanji: 首脳. しゅのうかいだん = summit meeting.\nG7しゅのうかいぎ = G7 summit.",
     example:"A: G7しゅのうかいぎがひらかれます。\nB: おもなぎだいはなんですか？",
     exampleSrc:"A: The G7 summit will be held.\nB: What are the main agenda items?",
     funFact:"しゅのう (首脳) literally means 'head brain.' しゅのうかいだん (summit meetings) between Japan's そうりだいじん (Prime Minister) and other leaders shape bilateral relations. Japan hosted G7 summits in Hiroshima (2023) and has hosted multiple APEC and ASEAN-related しゅのうかいぎ."},

    {type:"teach", trg:"ちょうてい", src:"mediation / arbitration / adjustment", pos:"noun", gender:null,
     note:"Kanji: 調停. ふんそうちょうてい = conflict mediation.\nちょうていやく = mediator.",
     example:"A: こくさいふんそうのちょうていにさんかしました。\nB: へいわてきかいけつがだいじですね。",
     exampleSrc:"A: We participated in international conflict mediation.\nB: Peaceful resolution is important.",
     funFact:"Japan's role as ちょうていやく (mediator) in international disputes draws on its pacifist constitution. Japan has mediated in various conflicts and disaster relief efforts. The concept of わ (harmony) in Japanese culture supports ちょうてい approaches. Japan's contributions to UN peacekeeping (PKO) reflect this mediating role."},

    {type:"teach", trg:"たこくかんきょうてい", src:"multilateral agreement", pos:"noun", gender:null,
     note:"た (many) + こく (countries) + かん (between) + きょうてい (agreement).\nFTAやEPAがれい.",
     example:"A: あたらしいたこくかんきょうていにさんかします。\nB: かめいこくはなんかこくですか？",
     exampleSrc:"A: We will participate in a new multilateral agreement.\nB: How many member nations?",
     funFact:"Japan is a member of major たこくかんきょうてい: CPTPP (かんたいへいよう), RCEP (ちいきてきほうかつてきけいざいれんけい), and various UN agreements. Japan's strategy of building たこくかんきょうてい frameworks reflects its geopolitical position between the US, China, and ASEAN nations."},

    {type:"teach", trg:"そうごりかい", src:"mutual understanding", pos:"noun", gender:null,
     note:"そうご (mutual) + りかい (understanding).\nぶんかてきそうごりかい = cultural mutual understanding.",
     example:"A: そうごりかいのためにこうりゅうプログラムをおこなっています。\nB: わかものこうりゅうがこうかてきですね。",
     exampleSrc:"A: We conduct exchange programs for mutual understanding.\nB: Youth exchanges are effective.",
     funFact:"そうごりかい is a cornerstone of Japan's ぶんかがいこう (cultural diplomacy). JETプログラム (Japan Exchange and Teaching) brings thousands of foreigners to Japan annually. にほんごきょういく (Japanese language education) abroad promotes そうごりかい. Japan's ソフトパワー through anime, food, and culture builds international understanding."},

    {type:"mc", q:"What does しゅのうかいだん mean?", opts:["Summit meeting between heads of state","A military alliance","A trade agreement","A cultural exchange"], ans:"Summit meeting between heads of state",
     hint:"しゅのう means 'head brain' (leader), and かいだん means talks/m...."},

    {type:"teach", trg:"せいさい", src:"sanctions / punitive measures", pos:"noun", gender:null,
     note:"Kanji: 制裁. けいざいせいさい = economic sanctions.\nせいさいをかす = to impose sanctions.",
     example:"A: こくさいしゃかいがせいさいをかしました。\nB: こうかはありますか？",
     exampleSrc:"A: The international community imposed sanctions.\nB: Are they effective?",
     funFact:"Japan participates in こくれんせいさい (UN sanctions) and implements independent せいさい. けいざいせいさい (economic sanctions) include trade restrictions and asset freezes. Japan's sanctions policy balances international cooperation with its own economic interests and regional security concerns."},

    {type:"teach", trg:"なんみん", src:"refugee", pos:"noun", gender:null,
     note:"Kanji: 難民. なんみんにんてい = refugee recognition.\nなんみんじょうやく = Refugee Convention.",
     example:"A: なんみんにんていりつがひくいとひはんされています。\nB: せいどのかいぜんがもとめられていますね。",
     exampleSrc:"A: Japan is criticized for its low refugee recognition rate.\nB: System reform is being demanded.",
     funFact:"Japan's なんみん recognition rate is extremely low (about 1-2% of applications). This contrasts with Germany (25-40%) and Canada (50%+). Critics call Japan しまぐにこんじょう (island nation mentality). Recent reforms in 2023 slightly expanded ほかんてきほご (complementary protection) for those who do not qualify as なんみん but cannot return home."},

    {type:"teach", trg:"じんどうてきえんじょ", src:"humanitarian aid", pos:"noun", gender:null,
     note:"じんどう (humanitarian) + てき + えんじょ (assistance).\nJapan is a major aid donor.",
     example:"A: じんどうてきえんじょをおくりました。\nB: いりょうチームもはけんされましたか？",
     exampleSrc:"A: We sent humanitarian aid.\nB: Were medical teams dispatched too?",
     funFact:"Japan's じんどうてきえんじょ is significant globally. Japan International Cooperation Agency (JICA) operates in 150+ countries. Japan's disaster experience drives expert ぼうさいえんじょ (disaster prevention aid). The phrase じんどうてきかいにゅう (humanitarian intervention) sparks debate given Japan's pacifist constitution."},

    {type:"teach", trg:"へいわいじ", src:"peacekeeping", pos:"noun", gender:null,
     note:"Kanji: 平和維持. こくれんへいわいじかつどう = UN peacekeeping operations (PKO).\nへいわいじぐん = peacekeeping force.",
     example:"A: にほんはこくれんPKOにさんかしています。\nB: じえいたいがはけんされていますか？",
     exampleSrc:"A: Japan participates in UN PKO.\nB: Are Self-Defense Forces dispatched?",
     funFact:"Japan's PKO participation began in 1992 after controversial legislation. The じえいたい (Self-Defense Forces) have been deployed to Cambodia, Mozambique, South Sudan, and elsewhere. Japan's PKO activities are limited by constitutional constraints: primarily logistical support, engineering, and humanitarian assistance rather than combat roles."},

    {type:"teach", trg:"ぐんしゅく", src:"disarmament / arms reduction", pos:"noun", gender:null,
     note:"Kanji: 軍縮. かくぐんしゅく = nuclear disarmament.\nぐんしゅくかいぎ = disarmament conference.",
     example:"A: かくぐんしゅくのこうしょうがつづいています。\nB: にほんはひかくさんこくとしてせっきょくてきですね。",
     exampleSrc:"A: Nuclear disarmament negotiations continue.\nB: Japan is active as a non-nuclear state.",
     funFact:"Japan's unique position as the only country to suffer nuclear attack makes かくぐんしゅく advocacy deeply personal. Hiroshima and Nagasaki's ひばくしゃ (atomic bomb survivors) have led global ぐんしゅく movements. Japan supports the NPT (かくふかくさんじょうやく) but has not signed the Nuclear Weapons Ban Treaty, creating a policy tension."},

    {type:"fb", s:"こくさいしゃかいがけいざい{1}をかしました。\n(The international community imposed economic sanctions.)", a:"せいさい", opts:["せいさい","きょうてい","ちょうてい","えんじょ"], sSrc:"The international community imposed economic sanctions.",
     hint:"This word means punitive measures taken against a country."},

    {type:"teach", trg:"どうめい", src:"alliance", pos:"noun", gender:null,
     note:"Kanji: 同盟. にちべいどうめい = US-Japan alliance.\nぐんじどうめい = military alliance.",
     example:"A: にちべいどうめいはにほんのあんぜんほしょうのきばんです。\nB: せんごながくつづいていますね。",
     exampleSrc:"A: The US-Japan alliance is the foundation of Japan's security.\nB: It has continued since the postwar era.",
     funFact:"にちべいどうめい (US-Japan alliance) has been the cornerstone of Japan's security since 1951. US military bases in Japan (mainly Okinawa) are both valued for security and controversial locally. The alliance extends to economic and technological cooperation. Japan's defense spending has increased significantly since 2022."},

    {type:"teach", trg:"きんちょう", src:"tension / strain", pos:"noun", gender:null,
     note:"Kanji: 緊張. こくさいてききんちょう = international tension.\nきんちょうかんけい = strained relations.",
     example:"A: ちいきのきんちょうがたかまっています。\nB: がいこうてきかいけつをのぞみます。",
     exampleSrc:"A: Regional tensions are heightening.\nB: I hope for a diplomatic resolution.",
     funFact:"きんちょう in international relations often appears in Japanese news about East Asian geopolitics: ちゅうごくとのきんちょう, かんとうほうめんのきんちょう (Korean Peninsula tension). Japan's geographic position between great powers makes きんちょう management a constant foreign policy challenge."},

    {type:"match", pairs:[{trg:"がいこう",src:"diplomacy"},{trg:"せいさい",src:"sanctions"},{trg:"なんみん",src:"refugee"},{trg:"どうめい",src:"alliance"},{trg:"ぐんしゅく",src:"disarmament"}],
     hint:"Match each international relations term with its English meaning."},

    {type:"mc", q:"Why is Japan's なんみん recognition rate criticized?", opts:["It is extremely low at about 1-2% of applications","It is too high","The process is too fast","There are no applications"], ans:"It is extremely low at about 1-2% of applications",
     hint:"This rate is significantly lower than most other developed nations."},

    {type:"fb", s:"にちべい{1}はにほんのあんぜんほしょうのきばんです。\n(The US-Japan alliance is the foundation of Japan's security.)", a:"どうめい", opts:["どうめい","がいこう","きんちょう","ちょうてい"], sSrc:"The US-Japan alliance is the foundation of Japan's security.",
     hint:"This word means a formal partnership between nations for mutual benefit."},

    {type:"mc", q:"What limits Japan's PKO military activities abroad?", opts:["Constitutional constraints from Article 9","Lack of military equipment","International treaties","Budget limitations"], ans:"Constitutional constraints from Article 9",
     hint:"Japan's pacifist constitution restricts the use of force in international operations."}
  ]
};
export default BATCH8_L1;
