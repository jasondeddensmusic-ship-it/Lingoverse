// Batch 6 – Unit 34 (B2.4 International Relations): Diplomacy & Global Issues
const BATCH6_L1 = {
  id:"jav2_u34l_b6_1", title:"がいこうとこくさいもんだい", icon:"🌐", xp:15, board:true,
  steps:[
    {type:"intro", title:"がいこうとこくさいもんだい",
     desc:"Learn vocabulary for international diplomacy, global issues, and geopolitics. These JLPT N1-level terms appear constantly in news and are essential for academic and professional discussions.",
     goals:["Discuss diplomatic relations and international organizations","Use vocabulary for global issues","Analyze international news"]},

    {type:"teach", trg:"がいこう", src:"diplomacy / foreign policy", pos:"noun", gender:null,
     note:"Kanji: 外交. がいこうかん = diplomat.\nがいこうもんだい = diplomatic issue.",
     example:"A: にほんのがいこうせいさくはどうかわっていますか？\nB: けいざいがいこうにちからをいれています。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: How is Japan's foreign policy changing?\nB: Economic diplomacy is being emphasized.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"がいこう (外交) combines 外 (outside) and 交 (exchange). Japan's post-war がいこう centered on the US alliance and economic partnerships. Japan is a major contributor to the UN, ODA (政府開発援助), and peacekeeping operations. The Ministry of Foreign Affairs (がいむしょう) manages Japan's diplomatic relationships with nearly 200 countries."},

    {type:"teach", trg:"じょうやく", src:"treaty / pact", pos:"noun", gender:null,
     note:"Kanji: 条約. へいわじょうやく = peace treaty.\nじょうやくをむすぶ = to conclude a treaty.",
     example:"A: りょうこくかんでしんじょうやくがむすばれました。\nB: かんけいかいぜんのだいいっぽですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: A new treaty was concluded between the two countries.\nB: It is the first step toward improving relations.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"じょうやく (条約) uses 条 (article/clause) and 約 (promise). Japan's most famous treaty is the にちべいあんぽじょうやく (US-Japan Security Treaty, 1960). Peace treaties (へいわじょうやく), trade agreements (ぼうえききょうてい), and environmental accords all use this framework."},

    {type:"teach", trg:"こくさいれんごう", src:"United Nations", pos:"noun", gender:null,
     note:"Kanji: 国際連合. Abbreviated: こくれん.\nこくれんじむそうちょう = UN Secretary-General.",
     example:"A: こくれんのやくわりはなんですか？\nB: こくさいへいわといじとじんどうてきしえんです。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: What is the role of the UN?\nB: Maintaining international peace and humanitarian aid.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"Japan is a major こくれん (UN) contributor: the third-largest financial contributor and active in peacekeeping. Japan has long sought a permanent seat on the UN Security Council (あんぜんほしょうりじかい). Japanese nationals serve in various UN agencies. The 2030 SDGs are heavily promoted through UN-Japan partnerships."},

    {type:"teach", trg:"なんみん", src:"refugee", pos:"noun", gender:null,
     note:"Kanji: 難民. なんみんもんだい = refugee crisis.\nなんみんにんてい = refugee recognition.",
     example:"A: せかいのなんみんもんだいはしんこくです。\nB: にほんはなんみんのうけいれがすくないとひはんされています。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: The global refugee problem is serious.\nB: Japan is criticized for accepting few refugees.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"なんみん (難民) uses 難 (difficulty) and 民 (people). Japan accepts very few refugees compared to other developed nations (less than 1% of applications were approved historically, though recent reforms aim to increase this). The topic generates significant domestic debate between humanitarian concerns and immigration policy."},

    {type:"teach", trg:"ぼうえき", src:"trade / commerce", pos:"noun", gender:null,
     note:"Kanji: 貿易. ゆしゅつ = exports. ゆにゅう = imports.\nぼうえきまさつ = trade friction.",
     example:"A: にほんのおもなぼうえきあいてはどこですか？\nB: ちゅうごく、アメリカ、かんこくなどです。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Who are Japan's main trading partners?\nB: China, America, South Korea, and others.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"ぼうえき (貿易) drives Japan's economy. The country exports cars, electronics, and machinery while importing energy and raw materials. ぼうえきまさつ (trade friction) with the US was a major issue in the 1980s-90s. Today, Japan participates in TPP/CPTPP and other multilateral trade frameworks."},

    {type:"mc", q:"こくれん is short for:", opts:["こくさいれんごう (United Nations)","こくないれんらく (domestic contact)","こくさいれんめい (international league)","こくみんれんごう (people's union)"], ans:"こくさいれんごう (United Nations)",
     hint:"This abbreviation refers to the global organization for international peace and cooperation."},

    {type:"teach", trg:"きょうい", src:"threat / menace", pos:"noun", gender:null,
     note:"Kanji: 脅威. あんぜんほしょうじょうのきょうい = security threat.\nきょういをあたえる = to pose a threat.",
     example:"A: かくへいきはせかいにとってきょういです。\nB: かくぐんしゅくがひつようですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Nuclear weapons are a threat to the world.\nB: Nuclear disarmament is needed.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"きょうい (脅威) uses 脅 (threaten) and 威 (authority/power). In Japanese security discourse, きょうい assessment (脅威認識) shapes defense policy. North Korea's missile program, regional tensions, and cyberattacks are discussed as きょうい. Japan's Self-Defense Forces (じえいたい) are structured around these きょうい assessments."},

    {type:"teach", trg:"えんじょ", src:"aid / assistance / support", pos:"noun", gender:null,
     note:"Kanji: 援助. かいはつえんじょ = development aid.\nきんきゅうえんじょ = emergency aid.",
     example:"A: にほんはさまざまなくににえんじょをおこなっています。\nB: とくにアジアへのODAがおおいですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Japan provides aid to various countries.\nB: ODA to Asia is particularly large.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"えんじょ (援助) is a cornerstone of Japan's international reputation. Japan was one of the world's largest ODA (Official Development Assistance) donors for decades. JICA (国際協力機構) sends Japanese volunteers and experts to developing countries. Japan's えんじょ philosophy emphasizes self-reliance: 'teach to fish, don't just give fish.'"},

    {type:"teach", trg:"きょうりょく", src:"cooperation (international)", pos:"noun", gender:null,
     note:"Kanji: 協力. こくさいきょうりょく = international cooperation.\nぎじゅつきょうりょく = technical cooperation.",
     example:"A: かんきょうもんだいにはこくさいきょうりょくがふかけつです。\nB: いちこくだけではかいけつできませんね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: International cooperation is essential for environmental issues.\nB: One country alone cannot solve them.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"こくさいきょうりょく (international cooperation) is a frequent phrase in Japanese diplomacy. Japan promotes きょうりょく through JICA, cultural exchange programs (JETプログラム), and technology sharing. The phrase ウインウインのかんけい (win-win relationship) has entered Japanese diplomatic vocabulary."},

    {type:"teach", trg:"たいりつ", src:"confrontation / conflict / opposition", pos:"noun", gender:null,
     note:"Kanji: 対立. いけんのたいりつ = conflict of opinions.\nたいりつする = to be in conflict.",
     example:"A: りょうこくのたいりつがふかまっています。\nB: たいわによるかいけつをのぞみます。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: The confrontation between the two countries is deepening.\nB: I hope for resolution through dialogue.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
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
