// Batch 8 – Unit 35 (B2.4 Information Society): AI & Digital Ethics
const BATCH8_L1 = {
  id:"jav2_u35l_b8_1", title:"AIとデジタル倫理(りんり)", icon:"🤖", xp:15, board:true,
  steps:[
    {type:"intro", title:"AIとデジタル倫理(りんり)",
     desc:"Master vocabulary for discussing artificial intelligence, digital ethics, and technology's impact on society. These terms define 21st-century discourse in Japan and globally.",
     goals:["Discuss AI and machine learning concepts","Understand digital ethics terminology","Analyze technology's social impact"]},

    {type:"teach", trg:"人工知能(じんこうちのう)", src:"artificial intelligence (AI)", pos:"noun", gender:null,
     note:"Also: AI (エーアイ). 人工知能学習(じんこうちのうがくしゅう) = AI learning.\nGenerative AI: 生成(せいせい)AI.",
     example:"A: 人工知能(じんこうちのう)の進歩(しんぽ)が著(いちじる)しいです。\nB: 仕事(しごと)への影響(えいきょう)が心配(しんぱい)されていますね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: The progress of artificial intelligence is remarkable.\nB: There is concern about its impact on work.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"Japan's AI strategy aims to become an 'AI Utilization Advanced Nation.' The government promoted Society 5.0 (超(ちょう)スマート社会(しゃかい)) integrating AI into all sectors. Japan's approach emphasizes 人中心(ひとちゅうしん)のAI (human-centered AI). The labor shortage from 少子高齢化(しょうしこうれいか) actually makes Japan more receptive to AI adoption than countries fearing job loss."},

    {type:"teach", trg:"アルゴリズム", src:"algorithm", pos:"noun", gender:null,
     note:"Loanword. アルゴリズムバイアス = algorithmic bias.\n検索(けんさく)アルゴリズム = search algorithm.",
     example:"A: SNSのアルゴリズムが情報(じょうほう)を選別(せんべつ)しています。\nB: フィルターバブルの問題(もんだい)ですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Social media algorithms are filtering information.\nB: That is the filter bubble problem.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"アルゴリズム discourse in Japan focuses on 公平性(こうへいせい) (fairness) and 透明性(とうめいせい) (transparency). SNSアルゴリズム determine what news Japanese users see, raising concerns about エコーチェンバー (echo chambers). Japan's personal information protection law (個人情報保護法(こじんじょうほうほごほう)) addresses some アルゴリズム concerns."},

    {type:"teach", trg:"自動化(じどうか)", src:"automation", pos:"noun", gender:null,
     note:"工場(こうじょう)の自動化(じどうか) = factory automation.\n業務自動化(ぎょうむじどうか) = business process automation.",
     example:"A: 工場(こうじょう)の自動化(じどうか)が進(すす)んでいます。\nB: 生産性(せいさんせい)が大幅(おおはば)に向上(こうじょう)しましたね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Factory automation is advancing.\nB: Productivity has improved dramatically.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"Japan is a world leader in 工業(こうぎょう)ロボット (industrial robots) with companies like ファナック and 安川電機(やすかわでんき). 自動化(じどうか) addresses Japan's 労働力不足(ろうどうりょくぶそく) (labor shortage). コンビニ, restaurants, and hotels increasingly use 自動化(じどうか): セルフレジ (self-checkout), 配膳(はいぜん)ロボット (serving robots), and 自動(じどう)チェックイン machines."},

    {type:"teach", trg:"倫理的問題(りんりてきもんだい)", src:"ethical issue / ethical problem", pos:"noun", gender:null,
     note:"倫理(りんり) (ethics) + 的(てき) + 問題(もんだい) (problem).\nAIの倫理的問題(りんりてきもんだい) = ethical issues of AI.",
     example:"A: AIの倫理的問題(りんりてきもんだい)について考(かんが)える必要(ひつよう)があります。\nB: 誰(だれ)が責任(せきにん)を取(と)るかが重要(じゅうよう)ですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: We need to think about the ethical issues of AI.\nB: Who takes responsibility is important.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"Japan established AI倫理(りんり)ガイドライン (AI Ethics Guidelines) focusing on 人中心(ひとちゅうしん)の原則(げんそく) (human-centered principle), 公平性(こうへいせい) (fairness), and 透明性(とうめいせい) (transparency). Unlike the EU's strict regulation approach, Japan favors ソフトロー (soft law, guidelines) over strict legislation for AI 倫理(りんり)."},

    {type:"teach", trg:"個人情報(こじんじょうほう)", src:"personal information / personal data", pos:"noun", gender:null,
     note:"個人情報保護法(こじんじょうほうほごほう) = Personal Information Protection Law.\n個人情報(こじんじょうほう)の漏洩(ろうえい) = data leak.",
     example:"A: 個人情報(こじんじょうほう)の扱(あつか)いに注意(ちゅうい)してください。\nB: 管理(かんり)を徹底(てってい)します。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Please be careful with personal information handling.\nB: We will thoroughly manage it.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"Japan's 個人情報保護法(こじんじょうほうほごほう) (APPI) was significantly strengthened in 2022, approaching EU GDPR standards. 個人情報(こじんじょうほう)の漏洩(ろうえい) (data breaches) at companies face heavy penalties and public apology press conferences. マイナンバー (individual number system) connects government services but privacy concerns persist."},

    {type:"mc", q:"What is Japan's approach to AI ethics regulation?", opts:["Soft law guidelines rather than strict legislation","No regulation at all","Stricter than the EU","Complete ban on AI development"], ans:"Soft law guidelines rather than strict legislation",
     hint:"Japan favors flexible, non-binding principles over the EU's harder regulatory approach."},

    {type:"teach", trg:"ディープフェイク", src:"deepfake", pos:"noun", gender:null,
     note:"Loanword. ディープフェイク動画(どうが) = deepfake video.\n生成(せいせい)AIで作(つく)られる偽(にせ)の映像(えいぞう).",
     example:"A: ディープフェイクの検出(けんしゅつ)技術(ぎじゅつ)が必要(ひつよう)です。\nB: フェイクニュース対策(たいさく)にもなりますね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Deepfake detection technology is needed.\nB: It also helps counter fake news.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"ディープフェイク technology raises serious concerns in Japan about 偽情報(にせじょうほう) (misinformation) and 名誉毀損(めいよきそん) (defamation). Japanese law has been slow to address AI-generated fake content specifically. ディープフェイクポルノ (deepfake pornography) targeting celebrities prompted calls for legislation."},

    {type:"teach", trg:"デジタルデバイド", src:"digital divide", pos:"noun", gender:null,
     note:"Loanword. 情報格差(じょうほうかくさ) = information gap (native term).\n高齢者(こうれいしゃ)のデジタルデバイド = digital divide among elderly.",
     example:"A: 高齢者(こうれいしゃ)のデジタルデバイドが問題(もんだい)です。\nB: デジタル教育(きょういく)の支援(しえん)が必要(ひつよう)ですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: The digital divide among elderly is a problem.\nB: Digital education support is needed.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"Japan's デジタルデバイド is prominent between generations. While young people are digitally native, many elderly struggle with スマートフォン and オンラインサービス. The pandemic exposed this when 確定申告(かくていしんこく) (tax filing) and ワクチン予約(よやく) (vaccine booking) went online. The government created デジタル庁(ちょう) (Digital Agency) in 2021 to address this."},

    {type:"teach", trg:"ブロックチェーン", src:"blockchain", pos:"noun", gender:null,
     note:"Loanword. ブロックチェーン技術(ぎじゅつ) = blockchain technology.\n仮想通貨(かそうつうか) = cryptocurrency.",
     example:"A: ブロックチェーン技術(ぎじゅつ)の活用(かつよう)が広(ひろ)がっています。\nB: 金融(きんゆう)以外(いがい)の分野(ぶんや)でも注目(ちゅうもく)されていますね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Utilization of blockchain technology is expanding.\nB: It is getting attention in fields beyond finance too.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"Japan was an early crypto adopter: ビットコイン (Bitcoin) was legal tender for payments since 2017. However, the Mt. Gox collapse (2014) and Coincheck hack (2018) prompted strict 仮想通貨交換業(かそうつうかこうかんぎょう) (crypto exchange) regulations. Japan's 仮想資産取引法(かそうしさんとりひきほう) (Virtual Asset Trading Law) is among the world's most comprehensive."},

    {type:"teach", trg:"送信(そうしん)する", src:"to transmit / to send (data/information)", pos:"verb", gender:null,
     note:"送信(そうしん)ボタン = send button.\n受信(じゅしん) = receiving (opposite).",
     example:"A: メールを送信(そうしん)しました。\nB: まだ受信(じゅしん)していません。もう一度(いちど)送信(そうしん)してください。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: I sent an email.\nB: I have not received it yet. Please send it again.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"送信(そうしん)/受信(じゅしん) (send/receive) are the digital communication pair. Japanese IT vocabulary mixes native and loanword terms: 送信(そうしん) (send, native) but ダウンロード (download, loanword), データ (data, loanword) but 資料(しりょう) (materials, native). This hybrid vocabulary reflects Japan's technology adoption pattern."},

    {type:"teach", trg:"情報(じょうほう)リテラシー", src:"information literacy / media literacy", pos:"noun", gender:null,
     note:"情報(じょうほう) (information) + リテラシー (literacy, loanword).\nデジタルリテラシー = digital literacy.",
     example:"A: 情報(じょうほう)リテラシーを高(たか)める教育(きょういく)が必要(ひつよう)です。\nB: フェイクニュースを見分(みわ)ける力(ちから)ですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Education to improve information literacy is needed.\nB: The ability to distinguish fake news.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"情報(じょうほう)リテラシー education is increasingly integrated into Japanese schools. The 2020 curriculum revision added プログラミング (programming) to elementary education. Japan ranks middling on digital skills globally. The gap between 情報(じょうほう)リテラシー教育(きょういく) (education) and 実際(じっさい)のリテラシー (actual literacy) remains a challenge."},

    {type:"fb", s:"{1}の進歩(しんぽ)が著(いちじる)しいです。\n(The progress of artificial intelligence is remarkable.)", a:"人工知能(じんこうちのう)", opts:["人工知能(じんこうちのう)","ブロックチェーン","アルゴリズム","自動化(じどうか)"], sSrc:"The progress of artificial intelligence is remarkable.",
     hint:"This four-kanji compound means AI, using characters for 'person,' 'craft,' 'wisdom,' and 'ability.'"},

    {type:"teach", trg:"クラウド", src:"cloud (computing)", pos:"noun", gender:null,
     note:"Loanword. クラウドサービス = cloud service.\nクラウドコンピューティング = cloud computing.",
     example:"A: データをクラウドに保存(ほぞん)しています。\nB: セキュリティは大丈夫(だいじょうぶ)ですか？\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: I store data in the cloud.\nB: Is the security okay?\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"Japan's クラウド adoption lagged behind the US but accelerated during the pandemic. Japanese companies were historically reluctant due to データ主権(しゅけん) (data sovereignty) concerns. Government systems moving to ガバメントクラウド represent a major shift. Japan's クラウド市場(しじょう) (cloud market) is growing at 20%+ annually."},

    {type:"teach", trg:"サステナビリティ", src:"sustainability", pos:"noun", gender:null,
     note:"Loanword version of 持続可能性(じぞくかのうせい).\nESGとサステナビリティ経営(けいえい) = ESG and sustainability management.",
     example:"A: サステナビリティレポートを公開(こうかい)しました。\nB: 投資家(とうしか)からの信頼(しんらい)につながりますね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: We published a sustainability report.\nB: It builds trust with investors.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"サステナビリティ and 持続可能性(じぞくかのうせい) coexist in Japanese business. サステナビリティ tends to appear in corporate communications (more global/trendy), while 持続可能性(じぞくかのうせい) appears in government documents (more formal/native). ESG (環境(かんきょう)・社会(しゃかい)・ガバナンス) reporting is increasingly mandatory for listed companies."},

    {type:"match", pairs:[{trg:"人工知能(じんこうちのう)",src:"artificial intelligence"},{trg:"自動化(じどうか)",src:"automation"},{trg:"個人情報(こじんじょうほう)",src:"personal data"},{trg:"デジタルデバイド",src:"digital divide"},{trg:"情報(じょうほう)リテラシー",src:"information literacy"}],
     hint:"Match each technology term with its English meaning."},

    {type:"mc", q:"Why is Japan relatively receptive to AI and automation?", opts:["Labor shortage from aging population makes AI adoption practical","Japan has unlimited tech workers","The government banned manual labor","AI is cheaper than in other countries"], ans:"Labor shortage from aging population makes AI adoption practical",
     hint:"Japan's demographic challenge of 少子高齢化(しょうしこうれいか) creates a genuine need for automation."},

    {type:"fb", s:"高齢者(こうれいしゃ)の{1}が問題(もんだい)です。\n(The digital divide among elderly is a problem.)", a:"デジタルデバイド", opts:["デジタルデバイド","情報(じょうほう)リテラシー","人工知能(じんこうちのう)","クラウド"], sSrc:"The digital divide among elderly is a problem.",
     hint:"This loanword describes the gap between those who can and cannot use digital technology."},

    {type:"mc", q:"What did Japan create in 2021 to address digital issues?", opts:["デジタル庁(ちょう) (Digital Agency)","AI police force","Robot army","Virtual government"], ans:"デジタル庁(ちょう) (Digital Agency)",
     hint:"This new ministry-level body was created in 2021 to lead Japan's transformation into a digitalized society."}
  ,{type:"match",pairs:[{trg:"アルゴリズム",src:"algorithm"},{trg:"倫理的問題(りんりてきもんだい)",src:"ethical issue / ethical problem"},{trg:"ディープフェイク",src:"deepfake"},{trg:"ブロックチェーン",src:"blockchain"},{trg:"送信(そうしん)する",src:"to transmit / to send (data/information)"},{trg:"クラウド",src:"cloud (computing)"}]},{type:"match",pairs:[{trg:"サステナビリティ",src:"sustainability"}]}]
};
export default BATCH8_L1;
