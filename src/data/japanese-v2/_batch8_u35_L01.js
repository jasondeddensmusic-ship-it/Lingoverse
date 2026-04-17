// Batch 8 – Unit 35 (B2.4 Information Society): AI & Digital Ethics
const BATCH8_L1 = {
  id:"jav2_u35l_b8_1", title:"AIとデジタルりんり", icon:"🤖", xp:15, board:true,
  steps:[
    {type:"intro", title:"AIとデジタルりんり",
     desc:"Master vocabulary for discussing artificial intelligence, digital ethics, and technology's impact on society. These terms define 21st-century discourse in Japan and globally.",
     goals:["Discuss AI and machine learning concepts","Understand digital ethics terminology","Analyze technology's social impact"]},

    {type:"teach", trg:"じんこうちのう", src:"artificial intelligence (AI)", pos:"noun", gender:null,
     note:"Kanji: 人工知能. Also: AI (エーアイ). じんこうちのうがくしゅう = AI learning.\nGenerative AI: せいせいAI.",
     example:"A: じんこうちのうのしんぽがいちじるしいです。\nB: しごとへのえいきょうがしんぱいされていますね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: The progress of artificial intelligence is remarkable.\nB: There is concern about its impact on work.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"Japan's AI strategy aims to become an 'AI Utilization Advanced Nation.' The government promoted Society 5.0 (ちょうスマートしゃかい) integrating AI into all sectors. Japan's approach emphasizes ひとちゅうしんのAI (human-centered AI). The labor shortage from しょうしこうれいか actually makes Japan more receptive to AI adoption than countries fearing job loss."},

    {type:"teach", trg:"アルゴリズム", src:"algorithm", pos:"noun", gender:null,
     note:"Loanword. アルゴリズムバイアス = algorithmic bias.\nけんさくアルゴリズム = search algorithm.",
     example:"A: SNSのアルゴリズムがじょうほうをせんべつしています。\nB: フィルターバブルのもんだいですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Social media algorithms are filtering information.\nB: That is the filter bubble problem.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"アルゴリズム discourse in Japan focuses on こうへいせい (fairness) and とうめいせい (transparency). SNSアルゴリズム determine what news Japanese users see, raising concerns about エコーチェンバー (echo chambers). Japan's personal information protection law (こじんじょうほうほごほう) addresses some アルゴリズム concerns."},

    {type:"teach", trg:"じどうか", src:"automation", pos:"noun", gender:null,
     note:"Kanji: 自動化. こうじょうのじどうか = factory automation.\nぎょうむじどうか = business process automation.",
     example:"A: こうじょうのじどうかがすすんでいます。\nB: せいさんせいがおおはばにこうじょうしましたね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Factory automation is advancing.\nB: Productivity has improved dramatically.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"Japan is a world leader in こうぎょうロボット (industrial robots) with companies like ファナック and やすかわでんき. じどうか addresses Japan's ろうどうりょくぶそく (labor shortage). コンビニ, restaurants, and hotels increasingly use じどうか: セルフレジ (self-checkout), はいぜんロボット (serving robots), and じどうチェックイン machines."},

    {type:"teach", trg:"りんりてきもんだい", src:"ethical issue / ethical problem", pos:"noun", gender:null,
     note:"りんり (ethics) + てき + もんだい (problem).\nAIのりんりてきもんだい = ethical issues of AI.",
     example:"A: AIのりんりてきもんだいについてかんがえるひつようがあります。\nB: だれがせきにんをとるかがじゅうようですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: We need to think about the ethical issues of AI.\nB: Who takes responsibility is important.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"Japan established AIりんりガイドライン (AI Ethics Guidelines) focusing on ひとちゅうしんのげんそく (human-centered principle), こうへいせい (fairness), and とうめいせい (transparency). Unlike the EU's strict regulation approach, Japan favors ソフトロー (soft law, guidelines) over strict legislation for AI りんり."},

    {type:"teach", trg:"こじんじょうほう", src:"personal information / personal data", pos:"noun", gender:null,
     note:"Kanji: 個人情報. こじんじょうほうほごほう = Personal Information Protection Law.\nこじんじょうほうのろうえい = data leak.",
     example:"A: こじんじょうほうのあつかいにちゅういしてください。\nB: かんりをてっていします。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Please be careful with personal information handling.\nB: We will thoroughly manage it.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"Japan's こじんじょうほうほごほう (APPI) was significantly strengthened in 2022, approaching EU GDPR standards. こじんじょうほうのろうえい (data breaches) at companies face heavy penalties and public apology press conferences. マイナンバー (individual number system) connects government services but privacy concerns persist."},

    {type:"mc", q:"What is Japan's approach to AI ethics regulation?", opts:["Soft law guidelines rather than strict legislation","No regulation at all","Stricter than the EU","Complete ban on AI development"], ans:"Soft law guidelines rather than strict legislation",
     hint:"Japan prefers flexible g... over the EU's s... regulatory approach."},

    {type:"teach", trg:"ディープフェイク", src:"deepfake", pos:"noun", gender:null,
     note:"Loanword. ディープフェイクどうが = deepfake video.\nせいせいAIでつくられるにせのえいぞう.",
     example:"A: ディープフェイクのけんしゅつぎじゅつがひつようです。\nB: フェイクニュースたいさくにもなりますね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Deepfake detection technology is needed.\nB: It also helps counter fake news.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"ディープフェイク technology raises serious concerns in Japan about にせじょうほう (misinformation) and めいよきそん (defamation). Japanese law has been slow to address AI-generated fake content specifically. ディープフェイクポルノ (deepfake pornography) targeting celebrities prompted calls for legislation."},

    {type:"teach", trg:"デジタルデバイド", src:"digital divide", pos:"noun", gender:null,
     note:"Loanword. じょうほうかくさ = information gap (native term).\nこうれいしゃのデジタルデバイド = digital divide among elderly.",
     example:"A: こうれいしゃのデジタルデバイドがもんだいです。\nB: デジタルきょういくのしえんがひつようですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: The digital divide among elderly is a problem.\nB: Digital education support is needed.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"Japan's デジタルデバイド is prominent between generations. While young people are digitally native, many elderly struggle with スマートフォン and オンラインサービス. The pandemic exposed this when かくていしんこく (tax filing) and ワクチンよやく (vaccine booking) went online. The government created デジタルちょう (Digital Agency) in 2021 to address this."},

    {type:"teach", trg:"ブロックチェーン", src:"blockchain", pos:"noun", gender:null,
     note:"Loanword. ブロックチェーンぎじゅつ = blockchain technology.\nかそうつうか = cryptocurrency.",
     example:"A: ブロックチェーンぎじゅつのかつようがひろがっています。\nB: きんゆういがいのぶんやでもちゅうもくされていますね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Utilization of blockchain technology is expanding.\nB: It is getting attention in fields beyond finance too.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"Japan was an early crypto adopter: ビットコイン (Bitcoin) was legal tender for payments since 2017. However, the Mt. Gox collapse (2014) and Coincheck hack (2018) prompted strict かそうつうかこうかんぎょう (crypto exchange) regulations. Japan's かそうしさんとりひきほう (Virtual Asset Trading Law) is among the world's most comprehensive."},

    {type:"teach", trg:"そうしんする", src:"to transmit / to send (data/information)", pos:"verb", gender:null,
     note:"Kanji: 送信. そうしんボタン = send button.\nじゅしん = receiving (opposite).",
     example:"A: メールをそうしんしました。\nB: まだじゅしんしていません。もういちどそうしんしてください。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: I sent an email.\nB: I have not received it yet. Please send it again.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"そうしん/じゅしん (send/receive) are the digital communication pair. Japanese IT vocabulary mixes native and loanword terms: そうしん (send, native) but ダウンロード (download, loanword), データ (data, loanword) but しりょう (materials, native). This hybrid vocabulary reflects Japan's technology adoption pattern."},

    {type:"teach", trg:"じょうほうリテラシー", src:"information literacy / media literacy", pos:"noun", gender:null,
     note:"じょうほう (information) + リテラシー (literacy, loanword).\nデジタルリテラシー = digital literacy.",
     example:"A: じょうほうリテラシーをたかめるきょういくがひつようです。\nB: フェイクニュースをみわけるちからですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Education to improve information literacy is needed.\nB: The ability to distinguish fake news.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"じょうほうリテラシー education is increasingly integrated into Japanese schools. The 2020 curriculum revision added プログラミング (programming) to elementary education. Japan ranks middling on digital skills globally. The gap between じょうほうリテラシーきょういく (education) and じっさいのリテラシー (actual literacy) remains a challenge."},

    {type:"fb", s:"{1}のしんぽがいちじるしいです。\n(The progress of artificial intelligence is remarkable.)", a:"じんこうちのう", opts:["じんこうちのう","ブロックチェーン","アルゴリズム","じどうか"], sSrc:"The progress of artificial intelligence is remarkable.",
     hint:"This four-kanji compound means AI, using characters for 'person,' 'craft,' 'wisdom,' and 'ability.'"},

    {type:"teach", trg:"クラウド", src:"cloud (computing)", pos:"noun", gender:null,
     note:"Loanword. クラウドサービス = cloud service.\nクラウドコンピューティング = cloud computing.",
     example:"A: データをクラウドにほぞんしています。\nB: セキュリティはだいじょうぶですか？\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: I store data in the cloud.\nB: Is the security okay?\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"Japan's クラウド adoption lagged behind the US but accelerated during the pandemic. Japanese companies were historically reluctant due to データしゅけん (data sovereignty) concerns. Government systems moving to ガバメントクラウド represent a major shift. Japan's クラウドしじょう (cloud market) is growing at 20%+ annually."},

    {type:"teach", trg:"サステナビリティ", src:"sustainability", pos:"noun", gender:null,
     note:"Loanword version of じぞくかのうせい.\nESGとサステナビリティけいえい = ESG and sustainability management.",
     example:"A: サステナビリティレポートをこうかいしました。\nB: とうしかからのしんらいにつながりますね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: We published a sustainability report.\nB: It builds trust with investors.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"サステナビリティ and じぞくかのうせい coexist in Japanese business. サステナビリティ tends to appear in corporate communications (more global/trendy), while じぞくかのうせい appears in government documents (more formal/native). ESG (かんきょう・しゃかい・ガバナンス) reporting is increasingly mandatory for listed companies."},

    {type:"match", pairs:[{trg:"じんこうちのう",src:"artificial intelligence"},{trg:"じどうか",src:"automation"},{trg:"こじんじょうほう",src:"personal data"},{trg:"デジタルデバイド",src:"digital divide"},{trg:"じょうほうリテラシー",src:"information literacy"}],
     hint:"Match each technology term with its English meaning."},

    {type:"mc", q:"Why is Japan relatively receptive to AI and automation?", opts:["Labor shortage from aging population makes AI adoption practical","Japan has unlimited tech workers","The government banned manual labor","AI is cheaper than in other countries"], ans:"Labor shortage from aging population makes AI adoption practical",
     hint:"Japan's demographic challenge of しょうしこうれいか creates a genuine need for automation."},

    {type:"fb", s:"こうれいしゃの{1}がもんだいです。\n(The digital divide among elderly is a problem.)", a:"デジタルデバイド", opts:["デジタルデバイド","じょうほうリテラシー","じんこうちのう","クラウド"], sSrc:"The digital divide among elderly is a problem.",
     hint:"This loanword describes the gap between those who can and cannot use digital technology."},

    {type:"mc", q:"What did Japan create in 2021 to address digital issues?", opts:["デジタルちょう (Digital Agency)","AI police force","Robot army","Virtual government"], ans:"デジタルちょう (Digital Agency)",
     hint:"This new government a... coordinates Japan's d... transformation efforts."}
  ]
};
export default BATCH8_L1;
