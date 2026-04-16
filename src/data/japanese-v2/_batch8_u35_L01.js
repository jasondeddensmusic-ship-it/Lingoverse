// Batch 8 – Unit 35 (B2.4 Information Society): AI & Digital Ethics
const BATCH8_L1 = {
  id:"jav2_u35l_b8_1", title:"AIとデジタルりんり", icon:"🤖", xp:15, board:true,
  steps:[
    {type:"intro", title:"AIとデジタルりんり",
     desc:"Master vocabulary for discussing artificial intelligence, digital ethics, and technology's impact on society. These terms define 21st-century discourse in Japan and globally.",
     goals:["Discuss AI and machine learning concepts","Understand digital ethics terminology","Analyze technology's social impact"]},

    {type:"teach", trg:"じんこうちのう", src:"artificial intelligence (AI)", pos:"noun", gender:null,
     note:"Kanji: 人工知能. Also: AI (エーアイ). じんこうちのうがくしゅう = AI learning.\nGenerative AI: せいせいAI.",
     example:"A: じんこうちのうのしんぽがいちじるしいです。\nB: しごとへのえいきょうがしんぱいされていますね。",
     exampleSrc:"A: The progress of artificial intelligence is remarkable.\nB: There is concern about its impact on work.",
     funFact:"Japan's AI strategy aims to become an 'AI Utilization Advanced Nation.' The government promoted Society 5.0 (ちょうスマートしゃかい) integrating AI into all sectors. Japan's approach emphasizes ひとちゅうしんのAI (human-centered AI). The labor shortage from しょうしこうれいか actually makes Japan more receptive to AI adoption than countries fearing job loss."},

    {type:"teach", trg:"アルゴリズム", src:"algorithm", pos:"noun", gender:null,
     note:"Loanword. アルゴリズムバイアス = algorithmic bias.\nけんさくアルゴリズム = search algorithm.",
     example:"A: SNSのアルゴリズムがじょうほうをせんべつしています。\nB: フィルターバブルのもんだいですね。",
     exampleSrc:"A: Social media algorithms are filtering information.\nB: That is the filter bubble problem.",
     funFact:"アルゴリズム discourse in Japan focuses on こうへいせい (fairness) and とうめいせい (transparency). SNSアルゴリズム determine what news Japanese users see, raising concerns about エコーチェンバー (echo chambers). Japan's personal information protection law (こじんじょうほうほごほう) addresses some アルゴリズム concerns."},

    {type:"teach", trg:"じどうか", src:"automation", pos:"noun", gender:null,
     note:"Kanji: 自動化. こうじょうのじどうか = factory automation.\nぎょうむじどうか = business process automation.",
     example:"A: こうじょうのじどうかがすすんでいます。\nB: せいさんせいがおおはばにこうじょうしましたね。",
     exampleSrc:"A: Factory automation is advancing.\nB: Productivity has improved dramatically.",
     funFact:"Japan is a world leader in こうぎょうロボット (industrial robots) with companies like ファナック and やすかわでんき. じどうか addresses Japan's ろうどうりょくぶそく (labor shortage). コンビニ, restaurants, and hotels increasingly use じどうか: セルフレジ (self-checkout), はいぜんロボット (serving robots), and じどうチェックイン machines."},

    {type:"teach", trg:"りんりてきもんだい", src:"ethical issue / ethical problem", pos:"noun", gender:null,
     note:"りんり (ethics) + てき + もんだい (problem).\nAIのりんりてきもんだい = ethical issues of AI.",
     example:"A: AIのりんりてきもんだいについてかんがえるひつようがあります。\nB: だれがせきにんをとるかがじゅうようですね。",
     exampleSrc:"A: We need to think about the ethical issues of AI.\nB: Who takes responsibility is important.",
     funFact:"Japan established AIりんりガイドライン (AI Ethics Guidelines) focusing on ひとちゅうしんのげんそく (human-centered principle), こうへいせい (fairness), and とうめいせい (transparency). Unlike the EU's strict regulation approach, Japan favors ソフトロー (soft law, guidelines) over strict legislation for AI りんり."},

    {type:"teach", trg:"こじんじょうほう", src:"personal information / personal data", pos:"noun", gender:null,
     note:"Kanji: 個人情報. こじんじょうほうほごほう = Personal Information Protection Law.\nこじんじょうほうのろうえい = data leak.",
     example:"A: こじんじょうほうのあつかいにちゅういしてください。\nB: かんりをてっていします。",
     exampleSrc:"A: Please be careful with personal information handling.\nB: We will thoroughly manage it.",
     funFact:"Japan's こじんじょうほうほごほう (APPI) was significantly strengthened in 2022, approaching EU GDPR standards. こじんじょうほうのろうえい (data breaches) at companies face heavy penalties and public apology press conferences. マイナンバー (individual number system) connects government services but privacy concerns persist."},

    {type:"mc", q:"What is Japan's approach to AI ethics regulation?", opts:["Soft law guidelines rather than strict legislation","No regulation at all","Stricter than the EU","Complete ban on AI development"], ans:"Soft law guidelines rather than strict legislation",
     hint:"Japan prefers flexible g... over the EU's s... regulatory approach."},

    {type:"teach", trg:"ディープフェイク", src:"deepfake", pos:"noun", gender:null,
     note:"Loanword. ディープフェイクどうが = deepfake video.\nせいせいAIでつくられるにせのえいぞう.",
     example:"A: ディープフェイクのけんしゅつぎじゅつがひつようです。\nB: フェイクニュースたいさくにもなりますね。",
     exampleSrc:"A: Deepfake detection technology is needed.\nB: It also helps counter fake news.",
     funFact:"ディープフェイク technology raises serious concerns in Japan about にせじょうほう (misinformation) and めいよきそん (defamation). Japanese law has been slow to address AI-generated fake content specifically. ディープフェイクポルノ (deepfake pornography) targeting celebrities prompted calls for legislation."},

    {type:"teach", trg:"デジタルデバイド", src:"digital divide", pos:"noun", gender:null,
     note:"Loanword. じょうほうかくさ = information gap (native term).\nこうれいしゃのデジタルデバイド = digital divide among elderly.",
     example:"A: こうれいしゃのデジタルデバイドがもんだいです。\nB: デジタルきょういくのしえんがひつようですね。",
     exampleSrc:"A: The digital divide among elderly is a problem.\nB: Digital education support is needed.",
     funFact:"Japan's デジタルデバイド is prominent between generations. While young people are digitally native, many elderly struggle with スマートフォン and オンラインサービス. The pandemic exposed this when かくていしんこく (tax filing) and ワクチンよやく (vaccine booking) went online. The government created デジタルちょう (Digital Agency) in 2021 to address this."},

    {type:"teach", trg:"ブロックチェーン", src:"blockchain", pos:"noun", gender:null,
     note:"Loanword. ブロックチェーンぎじゅつ = blockchain technology.\nかそうつうか = cryptocurrency.",
     example:"A: ブロックチェーンぎじゅつのかつようがひろがっています。\nB: きんゆういがいのぶんやでもちゅうもくされていますね。",
     exampleSrc:"A: Utilization of blockchain technology is expanding.\nB: It is getting attention in fields beyond finance too.",
     funFact:"Japan was an early crypto adopter: ビットコイン (Bitcoin) was legal tender for payments since 2017. However, the Mt. Gox collapse (2014) and Coincheck hack (2018) prompted strict かそうつうかこうかんぎょう (crypto exchange) regulations. Japan's かそうしさんとりひきほう (Virtual Asset Trading Law) is among the world's most comprehensive."},

    {type:"teach", trg:"そうしんする", src:"to transmit / to send (data/information)", pos:"verb", gender:null,
     note:"Kanji: 送信. そうしんボタン = send button.\nじゅしん = receiving (opposite).",
     example:"A: メールをそうしんしました。\nB: まだじゅしんしていません。もういちどそうしんしてください。",
     exampleSrc:"A: I sent an email.\nB: I have not received it yet. Please send it again.",
     funFact:"そうしん/じゅしん (send/receive) are the digital communication pair. Japanese IT vocabulary mixes native and loanword terms: そうしん (send, native) but ダウンロード (download, loanword), データ (data, loanword) but しりょう (materials, native). This hybrid vocabulary reflects Japan's technology adoption pattern."},

    {type:"teach", trg:"じょうほうリテラシー", src:"information literacy / media literacy", pos:"noun", gender:null,
     note:"じょうほう (information) + リテラシー (literacy, loanword).\nデジタルリテラシー = digital literacy.",
     example:"A: じょうほうリテラシーをたかめるきょういくがひつようです。\nB: フェイクニュースをみわけるちからですね。",
     exampleSrc:"A: Education to improve information literacy is needed.\nB: The ability to distinguish fake news.",
     funFact:"じょうほうリテラシー education is increasingly integrated into Japanese schools. The 2020 curriculum revision added プログラミング (programming) to elementary education. Japan ranks middling on digital skills globally. The gap between じょうほうリテラシーきょういく (education) and じっさいのリテラシー (actual literacy) remains a challenge."},

    {type:"fb", s:"{1}のしんぽがいちじるしいです。\n(The progress of artificial intelligence is remarkable.)", a:"じんこうちのう", opts:["じんこうちのう","ブロックチェーン","アルゴリズム","じどうか"], sSrc:"The progress of artificial intelligence is remarkable.",
     hint:"This four-kanji compound means AI, using characters for 'person,' 'craft,' 'wisdom,' and 'ability.'"},

    {type:"teach", trg:"クラウド", src:"cloud (computing)", pos:"noun", gender:null,
     note:"Loanword. クラウドサービス = cloud service.\nクラウドコンピューティング = cloud computing.",
     example:"A: データをクラウドにほぞんしています。\nB: セキュリティはだいじょうぶですか？",
     exampleSrc:"A: I store data in the cloud.\nB: Is the security okay?",
     funFact:"Japan's クラウド adoption lagged behind the US but accelerated during the pandemic. Japanese companies were historically reluctant due to データしゅけん (data sovereignty) concerns. Government systems moving to ガバメントクラウド represent a major shift. Japan's クラウドしじょう (cloud market) is growing at 20%+ annually."},

    {type:"teach", trg:"サステナビリティ", src:"sustainability", pos:"noun", gender:null,
     note:"Loanword version of じぞくかのうせい.\nESGとサステナビリティけいえい = ESG and sustainability management.",
     example:"A: サステナビリティレポートをこうかいしました。\nB: とうしかからのしんらいにつながりますね。",
     exampleSrc:"A: We published a sustainability report.\nB: It builds trust with investors.",
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
