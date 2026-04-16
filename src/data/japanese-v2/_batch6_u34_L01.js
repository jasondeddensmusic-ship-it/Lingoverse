// Batch 6 – Unit 34 (B2.4 International Relations): Diplomacy & Global Issues
const BATCH6_L1 = {
  id:"jav2_u34l_b6_1", title:"がいこうとこくさいもんだい", icon:"🌐", xp:15, board:true,
  steps:[
    {type:"intro", title:"がいこうとこくさいもんだい",
     desc:"Learn vocabulary for international diplomacy, global issues, and geopolitics. These JLPT N1-level terms appear constantly in news and are essential for academic and professional discussions.",
     goals:["Discuss diplomatic relations and international organizations","Use vocabulary for global issues","Analyze international news"]},

    {type:"teach", trg:"がいこう", src:"diplomacy / foreign policy", pos:"noun", gender:null,
     note:"Kanji: 外交. がいこうかん = diplomat.\nがいこうもんだい = diplomatic issue.",
     example:"A: にほんのがいこうせいさくはどうかわっていますか？\nB: けいざいがいこうにちからをいれています。",
     exampleSrc:"A: How is Japan's foreign policy changing?\nB: Economic diplomacy is being emphasized.",
     funFact:"がいこう (外交) combines 外 (outside) and 交 (exchange). Japan's post-war がいこう centered on the US alliance and economic partnerships. Japan is a major contributor to the UN, ODA (政府開発援助), and peacekeeping operations. The Ministry of Foreign Affairs (がいむしょう) manages Japan's diplomatic relationships with nearly 200 countries."},

    {type:"teach", trg:"じょうやく", src:"treaty / pact", pos:"noun", gender:null,
     note:"Kanji: 条約. へいわじょうやく = peace treaty.\nじょうやくをむすぶ = to conclude a treaty.",
     example:"A: りょうこくかんでしんじょうやくがむすばれました。\nB: かんけいかいぜんのだいいっぽですね。",
     exampleSrc:"A: A new treaty was concluded between the two countries.\nB: It is the first step toward improving relations.",
     funFact:"じょうやく (条約) uses 条 (article/clause) and 約 (promise). Japan's most famous treaty is the にちべいあんぽじょうやく (US-Japan Security Treaty, 1960). Peace treaties (へいわじょうやく), trade agreements (ぼうえききょうてい), and environmental accords all use this framework."},

    {type:"teach", trg:"こくさいれんごう", src:"United Nations", pos:"noun", gender:null,
     note:"Kanji: 国際連合. Abbreviated: こくれん.\nこくれんじむそうちょう = UN Secretary-General.",
     example:"A: こくれんのやくわりはなんですか？\nB: こくさいへいわといじとじんどうてきしえんです。",
     exampleSrc:"A: What is the role of the UN?\nB: Maintaining international peace and humanitarian aid.",
     funFact:"Japan is a major こくれん (UN) contributor: the third-largest financial contributor and active in peacekeeping. Japan has long sought a permanent seat on the UN Security Council (あんぜんほしょうりじかい). Japanese nationals serve in various UN agencies. The 2030 SDGs are heavily promoted through UN-Japan partnerships."},

    {type:"teach", trg:"なんみん", src:"refugee", pos:"noun", gender:null,
     note:"Kanji: 難民. なんみんもんだい = refugee crisis.\nなんみんにんてい = refugee recognition.",
     example:"A: せかいのなんみんもんだいはしんこくです。\nB: にほんはなんみんのうけいれがすくないとひはんされています。",
     exampleSrc:"A: The global refugee problem is serious.\nB: Japan is criticized for accepting few refugees.",
     funFact:"なんみん (難民) uses 難 (difficulty) and 民 (people). Japan accepts very few refugees compared to other developed nations (less than 1% of applications were approved historically, though recent reforms aim to increase this). The topic generates significant domestic debate between humanitarian concerns and immigration policy."},

    {type:"teach", trg:"ぼうえき", src:"trade / commerce", pos:"noun", gender:null,
     note:"Kanji: 貿易. ゆしゅつ = exports. ゆにゅう = imports.\nぼうえきまさつ = trade friction.",
     example:"A: にほんのおもなぼうえきあいてはどこですか？\nB: ちゅうごく、アメリカ、かんこくなどです。",
     exampleSrc:"A: Who are Japan's main trading partners?\nB: China, America, South Korea, and others.",
     funFact:"ぼうえき (貿易) drives Japan's economy. The country exports cars, electronics, and machinery while importing energy and raw materials. ぼうえきまさつ (trade friction) with the US was a major issue in the 1980s-90s. Today, Japan participates in TPP/CPTPP and other multilateral trade frameworks."},

    {type:"mc", q:"こくれん is short for:", opts:["こくさいれんごう (United Nations)","こくないれんらく (domestic contact)","こくさいれんめい (international league)","こくみんれんごう (people's union)"], ans:"こくさいれんごう (United Nations)",
     hint:"This abbreviation refers to the global organization for international peace and cooperation."},

    {type:"teach", trg:"きょうい", src:"threat / menace", pos:"noun", gender:null,
     note:"Kanji: 脅威. あんぜんほしょうじょうのきょうい = security threat.\nきょういをあたえる = to pose a threat.",
     example:"A: かくへいきはせかいにとってきょういです。\nB: かくぐんしゅくがひつようですね。",
     exampleSrc:"A: Nuclear weapons are a threat to the world.\nB: Nuclear disarmament is needed.",
     funFact:"きょうい (脅威) uses 脅 (threaten) and 威 (authority/power). In Japanese security discourse, きょうい assessment (脅威認識) shapes defense policy. North Korea's missile program, regional tensions, and cyberattacks are discussed as きょうい. Japan's Self-Defense Forces (じえいたい) are structured around these きょうい assessments."},

    {type:"teach", trg:"えんじょ", src:"aid / assistance / support", pos:"noun", gender:null,
     note:"Kanji: 援助. かいはつえんじょ = development aid.\nきんきゅうえんじょ = emergency aid.",
     example:"A: にほんはさまざまなくににえんじょをおこなっています。\nB: とくにアジアへのODAがおおいですね。",
     exampleSrc:"A: Japan provides aid to various countries.\nB: ODA to Asia is particularly large.",
     funFact:"えんじょ (援助) is a cornerstone of Japan's international reputation. Japan was one of the world's largest ODA (Official Development Assistance) donors for decades. JICA (国際協力機構) sends Japanese volunteers and experts to developing countries. Japan's えんじょ philosophy emphasizes self-reliance: 'teach to fish, don't just give fish.'"},

    {type:"teach", trg:"きょうりょく", src:"cooperation (international)", pos:"noun", gender:null,
     note:"Kanji: 協力. こくさいきょうりょく = international cooperation.\nぎじゅつきょうりょく = technical cooperation.",
     example:"A: かんきょうもんだいにはこくさいきょうりょくがふかけつです。\nB: いちこくだけではかいけつできませんね。",
     exampleSrc:"A: International cooperation is essential for environmental issues.\nB: One country alone cannot solve them.",
     funFact:"こくさいきょうりょく (international cooperation) is a frequent phrase in Japanese diplomacy. Japan promotes きょうりょく through JICA, cultural exchange programs (JETプログラム), and technology sharing. The phrase ウインウインのかんけい (win-win relationship) has entered Japanese diplomatic vocabulary."},

    {type:"teach", trg:"たいりつ", src:"confrontation / conflict / opposition", pos:"noun", gender:null,
     note:"Kanji: 対立. いけんのたいりつ = conflict of opinions.\nたいりつする = to be in conflict.",
     example:"A: りょうこくのたいりつがふかまっています。\nB: たいわによるかいけつをのぞみます。",
     exampleSrc:"A: The confrontation between the two countries is deepening.\nB: I hope for resolution through dialogue.",
     funFact:"たいりつ (対立) combines 対 (against/pair) and 立 (stand). Japanese diplomacy traditionally avoids direct たいりつ, preferring behind-the-scenes negotiation. The phrase たいわ (対話, dialogue) is preferred over たいりつ (confrontation) in official statements. Japan's peace constitution reflects a fundamental preference for たいわ over ぶりょくてきたいりつ (armed conflict)."},

    {type:"fb", s:"かんきょうもんだいにはこくさい{1}がふかけつです。\n(International cooperation is essential for environmental issues.)", a:"きょうりょく", opts:["きょうりょく","たいりつ","きょうい","ぼうえき"], sSrc:"International cooperation is essential for environmental issues.",
     hint:"The word meaning working together with other countries toward shared goals."},

    {type:"mc", q:"なんみん describes:", opts:["People forced to flee their country due to conflict or persecution","Tourists","Business travelers","Students abroad"], ans:"People forced to flee their country due to conflict or persecution",
     hint:"This word combines 'difficulty' and 'p...' to describe displaced populations."},

    {type:"match", pairs:[
      {trg:"がいこう", src:"diplomacy"},
      {trg:"じょうやく", src:"treaty"},
      {trg:"ぼうえき", src:"trade"},
      {trg:"えんじょ", src:"aid / assistance"},
      {trg:"たいりつ", src:"confrontation"}
    ]},

    {type:"fb", s:"りょうこくかんでしん{1}がむすばれました。\n(A new treaty was concluded between the two countries.)", a:"じょうやく", opts:["じょうやく","ぼうえき","がいこう","えんじょ"], sSrc:"A new treaty was concluded between the two countries.",
     hint:"The formal agreement between nations, often covering peace, trade, or security."},

    {type:"mc", q:"えんじょ in international context means:", opts:["Providing aid and assistance to other countries","Attacking enemies","Closing borders","Raising taxes"], ans:"Providing aid and assistance to other countries",
     hint:"Japan is known for its generous ODA program supporting developing nations."}
  ]
};
export default BATCH6_L1;
