// Batch 6 – Unit 34 (B2.4 International Relations): Diplomacy & Global Issues
const BATCH6_L1 = {
  id:"jav2_u34l_b6_1", title:"外交(がいこう)と国際(こくさい)問題(もんだい)", icon:"🌐", xp:15, board:true,
  steps:[
    {type:"intro", title:"外交(がいこう)と国際(こくさい)問題(もんだい)",
     desc:"Learn vocabulary for international diplomacy, global issues, and geopolitics. These JLPT N1-level terms appear constantly in news and are essential for academic and professional discussions.",
     goals:["Discuss diplomatic relations and international organizations","Use vocabulary for global issues","Analyze international news"]},

    {type:"teach", trg:"外交(がいこう)", src:"diplomacy / foreign policy", pos:"noun", gender:null,
     note:"外交官(がいこうかん) = diplomat.\n外交(がいこう)問題(もんだい) = diplomatic issue.",
     example:"A: 日本(にほん)の外交(がいこう)政策(せいさく)はどう変(か)わっていますか？\nB: 経済外交(けいざいがいこう)に力(ちから)を入(い)れています。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: How is Japan's foreign policy changing?\nB: Economic diplomacy is being emphasized.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"外交(がいこう) combines 外 (outside) and 交 (exchange). Japan's post-war 外交(がいこう) centered on the US alliance and economic partnerships. Japan is a major contributor to the UN, ODA (政府開発援助(せいふかいはつえんじょ)), and peacekeeping operations. The Ministry of Foreign Affairs (外務省(がいむしょう)) manages Japan's diplomatic relationships with nearly 200 countries."},

    {type:"teach", trg:"条約(じょうやく)", src:"treaty / pact", pos:"noun", gender:null,
     note:"平和条約(へいわじょうやく) = peace treaty.\n条約(じょうやく)を結(むす)ぶ = to conclude a treaty.",
     example:"A: 両国間(りょうこくかん)で新(しん)条約(じょうやく)が結(むす)ばれました。\nB: 関係改善(かんけいかいぜん)の第一歩(だいいっぽ)ですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: A new treaty was concluded between the two countries.\nB: It is the first step toward improving relations.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"条約(じょうやく) uses 条 (article/clause) and 約 (promise). Japan's most famous treaty is the 日米安保条約(にちべいあんぽじょうやく) (US-Japan Security Treaty, 1960). Peace treaties (平和条約(へいわじょうやく)), trade agreements (貿易協定(ぼうえききょうてい)), and environmental accords all use this framework."},

    {type:"teach", trg:"国際連合(こくさいれんごう)", src:"United Nations", pos:"noun", gender:null,
     note:"Abbreviated: 国連(こくれん).\n国連(こくれん)事務総長(じむそうちょう) = UN Secretary-General.",
     example:"A: 国連(こくれん)の役割(やくわり)は何(なん)ですか？\nB: 国際(こくさい)平和(へいわ)の維持(いじ)と人道的(じんどうてき)支援(しえん)です。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: What is the role of the UN?\nB: Maintaining international peace and humanitarian aid.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"Japan is a major 国連(こくれん) (UN) contributor: the third-largest financial contributor and active in peacekeeping. Japan has long sought a permanent seat on the UN Security Council (安全保障理事会(あんぜんほしょうりじかい)). Japanese nationals serve in various UN agencies. The 2030 SDGs are heavily promoted through UN-Japan partnerships."},

    {type:"teach", trg:"難民(なんみん)", src:"refugee", pos:"noun", gender:null,
     note:"難民(なんみん)問題(もんだい) = refugee crisis.\n難民(なんみん)認定(にんてい) = refugee recognition.",
     example:"A: 世界(せかい)の難民(なんみん)問題(もんだい)は深刻(しんこく)です。\nB: 日本(にほん)は難民(なんみん)の受(う)け入(い)れが少(すく)ないと批判(ひはん)されています。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: The global refugee problem is serious.\nB: Japan is criticized for accepting few refugees.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"難民(なんみん) uses 難 (difficulty) and 民 (people). Japan accepts very few refugees compared to other developed nations (less than 1% of applications were approved historically, though recent reforms aim to increase this). The topic generates significant domestic debate between humanitarian concerns and immigration policy."},

    {type:"teach", trg:"貿易(ぼうえき)", src:"trade / commerce", pos:"noun", gender:null,
     note:"輸出(ゆしゅつ) = exports. 輸入(ゆにゅう) = imports.\n貿易(ぼうえき)摩擦(まさつ) = trade friction.",
     example:"A: 日本(にほん)の主(おも)な貿易(ぼうえき)相手(あいて)はどこですか？\nB: 中国(ちゅうごく)、アメリカ、韓国(かんこく)などです。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Who are Japan's main trading partners?\nB: China, America, South Korea, and others.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"貿易(ぼうえき) drives Japan's economy. The country exports cars, electronics, and machinery while importing energy and raw materials. 貿易摩擦(ぼうえきまさつ) (trade friction) with the US was a major issue in the 1980s-90s. Today, Japan participates in TPP/CPTPP and other multilateral trade frameworks."},

    {type:"mc", q:"国連(こくれん) is short for:", opts:["国際連合(こくさいれんごう) (United Nations)","国内連絡(こくないれんらく) (domestic contact)","国際連盟(こくさいれんめい) (international league)","国民連合(こくみんれんごう) (people's union)"], ans:"国際連合(こくさいれんごう) (United Nations)",
     hint:"This abbreviation refers to the global organization for international peace and cooperation."},

    {type:"teach", trg:"脅威(きょうい)", src:"threat / menace", pos:"noun", gender:null,
     note:"安全保障上(あんぜんほしょうじょう)の脅威(きょうい) = security threat.\n脅威(きょうい)を与(あた)える = to pose a threat.",
     example:"A: 核兵器(かくへいき)は世界(せかい)にとって脅威(きょうい)です。\nB: 核軍縮(かくぐんしゅく)が必要(ひつよう)ですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Nuclear weapons are a threat to the world.\nB: Nuclear disarmament is needed.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"脅威(きょうい) uses 脅 (threaten) and 威 (authority/power). In Japanese security discourse, 脅威認識(きょういにんしき) (threat assessment) shapes defense policy. North Korea's missile program, regional tensions, and cyberattacks are discussed as 脅威(きょうい). Japan's Self-Defense Forces (自衛隊(じえいたい)) are structured around these 脅威(きょうい) assessments."},

    {type:"teach", trg:"援助(えんじょ)", src:"aid / assistance / support", pos:"noun", gender:null,
     note:"開発援助(かいはつえんじょ) = development aid.\n緊急援助(きんきゅうえんじょ) = emergency aid.",
     example:"A: 日本(にほん)はさまざまな国(くに)に援助(えんじょ)を行(おこな)っています。\nB: 特(とく)にアジアへのODAが多(おお)いですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Japan provides aid to various countries.\nB: ODA to Asia is particularly large.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"援助(えんじょ) is a cornerstone of Japan's international reputation. Japan was one of the world's largest ODA (Official Development Assistance) donors for decades. JICA (国際協力機構(こくさいきょうりょくきこう)) sends Japanese volunteers and experts to developing countries. Japan's 援助(えんじょ) philosophy emphasizes self-reliance: 'teach to fish, don't just give fish.'"},

    {type:"teach", trg:"協力(きょうりょく)", src:"cooperation (international)", pos:"noun", gender:null,
     note:"国際協力(こくさいきょうりょく) = international cooperation.\n技術(ぎじゅつ)協力(きょうりょく) = technical cooperation.",
     example:"A: 環境(かんきょう)問題(もんだい)には国際協力(こくさいきょうりょく)が不可欠(ふかけつ)です。\nB: 一国(いっこく)だけでは解決(かいけつ)できませんね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: International cooperation is essential for environmental issues.\nB: One country alone cannot solve them.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"国際協力(こくさいきょうりょく) (international cooperation) is a frequent phrase in Japanese diplomacy. Japan promotes 協力(きょうりょく) through JICA, cultural exchange programs (JETプログラム), and technology sharing. The phrase ウインウインのかんけい (win-win relationship) has entered Japanese diplomatic vocabulary."},

    {type:"teach", trg:"対立(たいりつ)", src:"confrontation / conflict / opposition", pos:"noun", gender:null,
     note:"意見(いけん)の対立(たいりつ) = conflict of opinions.\n対立(たいりつ)する = to be in conflict.",
     example:"A: 両国(りょうこく)の対立(たいりつ)が深(ふか)まっています。\nB: 対話(たいわ)による解決(かいけつ)を望(のぞ)みます。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: The confrontation between the two countries is deepening.\nB: I hope for resolution through dialogue.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"対立(たいりつ) combines 対 (against/pair) and 立 (stand). Japanese diplomacy traditionally avoids direct 対立(たいりつ), preferring behind-the-scenes negotiation. The phrase 対話(たいわ) (dialogue) is preferred over 対立(たいりつ) (confrontation) in official statements. Japan's peace constitution reflects a fundamental preference for 対話(たいわ) over 武力的対立(ぶりょくてきたいりつ) (armed conflict)."},

    {type:"fb", s:"環境(かんきょう)問題(もんだい)には国際(こくさい){1}が不可欠(ふかけつ)です。\n(International cooperation is essential for environmental issues.)", a:"きょうりょく", opts:["きょうりょく","たいりつ","きょうい","ぼうえき"], sSrc:"International cooperation is essential for environmental issues.",
     hint:"The word meaning working together with other countries toward shared goals."},

    {type:"mc", q:"難民(なんみん) describes:", opts:["People forced to flee their country due to conflict or persecution","Tourists","Business travelers","Students abroad"], ans:"People forced to flee their country due to conflict or persecution",
     hint:"This word combines 'difficulty' and 'p...' to describe displaced populations."},

    {type:"match", pairs:[
      {trg:"外交(がいこう)", src:"diplomacy"},
      {trg:"条約(じょうやく)", src:"treaty"},
      {trg:"貿易(ぼうえき)", src:"trade"},
      {trg:"援助(えんじょ)", src:"aid / assistance"},
      {trg:"対立(たいりつ)", src:"confrontation"}
    ]},

    {type:"fb", s:"両国間(りょうこくかん)で新(しん){1}が結(むす)ばれました。\n(A new treaty was concluded between the two countries.)", a:"じょうやく", opts:["じょうやく","ぼうえき","がいこう","えんじょ"], sSrc:"A new treaty was concluded between the two countries.",
     hint:"The formal agreement between nations, often covering peace, trade, or security."},

    {type:"mc", q:"援助(えんじょ) in international context means:", opts:["Providing aid and assistance to other countries","Attacking enemies","Closing borders","Raising taxes"], ans:"Providing aid and assistance to other countries",
     hint:"Japan is known for its generous ODA program supporting developing nations."}
  ,{type:"match",pairs:[{trg:"難民(なんみん)",src:"refugee"},{trg:"脅威(きょうい)",src:"threat / menace"}]}]
};
export default BATCH6_L1;
