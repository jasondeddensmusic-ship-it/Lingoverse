// Unit 35 Batch 2 Lesson 1: AIりんり (AI Ethics & Governance)
const BATCH2_L_1 = {
  id:"jav2_u35l_b2_1", title:"AIりんり", icon:"🤖", xp:15, board:true,
  steps:[
    {type:"intro", title:"AIりんり",
     desc:"Artificial intelligence governance is one of the defining challenges of our era. Learn vocabulary for AI regulation, algorithmic fairness, and the ethical implications of automation. These terms appear in Japanese technology policy discussions and JLPT N1 passages about society.",
     goals:["Use AI governance vocabulary","Discuss algorithmic fairness and accountability","Understand Japan's approach to AI ethics"]},

    {type:"teach", trg:"とうめいせい", src:"transparency", pos:"noun", gender:null,
     note:"Kanji: 透明性. アルゴリズムのとうめいせい = algorithmic transparency.\nせつめいせきにん = accountability.",
     example:"A: AIのいしけっていかていにとうめいせいがもとめられています。\nB: ブラックボックスかをふせがなければなりません。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Transparency in AI decision-making processes is demanded.\nB: We must prevent black-boxing.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"透明性 uses 透明 (transparent) and 性 (nature/quality). As AI systems make decisions about loans, hiring, and criminal justice, とうめいせい becomes critical. Japan's AI Strategy emphasizes 'human-centric AI' that is transparent and explainable. The challenge is that deep learning models are inherently difficult to explain."},

    {type:"teach", trg:"せつめいかのう", src:"explainable / interpretable", pos:"adj", gender:null,
     note:"Kanji: 説明可能. せつめいかのうAI = Explainable AI (XAI).\nAI decisions people can understand.",
     example:"A: せつめいかのうAIのかいはつがすすんでいます。\nB: なぜそのけつろんにいたったかをりかいできることがじゅうようですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Development of explainable AI is progressing.\nB: It is important to understand why it reached that conclusion.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"説明可能 adds 可能 (possible) to 説明 (explanation). XAI (せつめいかのうAI) is a growing field that aims to make AI decisions understandable to humans. Japan's Society 5.0 framework requires AI systems to be せつめいかのう, especially in high-stakes domains like healthcare and finance."},

    {type:"teach", trg:"きかいがくしゅう", src:"machine learning", pos:"noun", gender:null,
     note:"Kanji: 機械学習. ディープラーニング = deep learning.\nきょうかがくしゅう = reinforcement learning.",
     example:"A: きかいがくしゅうはおおりょうのデータからパターンをまなびます。\nB: データのしつがけっかにおおきくえいきょうしますね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Machine learning learns patterns from large amounts of data.\nB: The quality of data greatly affects the results.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"機械学習 uses 機械 (machine) and 学習 (learning). Japan's AI research has strong foundations in robotics and pattern recognition. Major Japanese companies like NEC, Fujitsu, and Preferred Networks are leaders in きかいがくしゅう applications. The field intersects with Japan's strengths in manufacturing, healthcare, and material science."},

    {type:"mc", q:"せつめいかのうAI aims to:", opts:["Make AI decisions understandable to humans","Make AI run faster","Replace human decision-making entirely","Reduce AI development costs"], ans:"Make AI decisions understandable to humans",
     hint:"This field addresses the 'black box' problem where AI reaches conclusions that nobody can explain."},

    {type:"teach", trg:"バイアス", src:"bias (in data/algorithms)", pos:"noun", gender:null,
     note:"Loanword from English. データバイアス = data bias.\nむいしきバイアス = unconscious bias.",
     example:"A: AIにはがくしゅうデータのバイアスがはんえいされるきけんがあります。\nB: こうへいなAIをつくるにはデータのかたよりをなくすひつようがありますね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: There is a danger that AI reflects bias in its training data.\nB: To create fair AI, we need to eliminate bias in data.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"バイアス is a loanword used in technical, psychological, and social contexts. In AI ethics, バイアス is a central concern: if training data reflects historical discrimination (in hiring, lending, policing), the AI will perpetuate it. Japan's AI guidelines emphasize バイアスの排除 (elimination of bias) as a design principle."},

    {type:"teach", trg:"かたより", src:"bias / slant / imbalance", pos:"noun", gender:null,
     note:"From かたよる (to lean/be biased). Native Japanese word for bias.\nデータのかたより = data imbalance.",
     example:"A: データにかたよりがあるとAIのせいどがさがります。\nB: たようなデータをしゅうしゅうすることがたいせつです。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: If there is bias in the data, AI accuracy decreases.\nB: Collecting diverse data is important.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"偏り is the native Japanese equivalent of バイアス. While バイアス is used in technical contexts, かたより appears in everyday language: しょくせいかつのかたより (dietary imbalance), いけんのかたより (biased opinion). In AI discussions, both words are used, with かたより often describing the data problem and バイアス describing the systemic issue."},

    {type:"teach", trg:"きせい", src:"regulation / control", pos:"noun", gender:null,
     note:"Kanji: 規制. きせいする = to regulate.\nAIきせい = AI regulation.",
     example:"A: AIにたいするきせいのあるべきすがたがぎろんされています。\nB: イノベーションをそがいしないきせいがひつようですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: What AI regulation should look like is being debated.\nB: Regulation that does not hinder innovation is needed.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"規制 uses 規 (rule/standard) and 制 (control/system). Japan's approach to AI きせい favors 'soft law' (guidelines and principles) over 'hard law' (binding regulations). This contrasts with the EU's comprehensive AI Act. Japan's lighter-touch approach aims to foster innovation while the AI Principles published in 2019 set ethical guidelines."},

    {type:"fb", s:"AIのいしけっていかていに{1}がもとめられています。\n(Transparency in AI decision-making processes is demanded.)", a:"とうめいせい", opts:["とうめいせい","バイアス","きせい","きかいがくしゅう"], sSrc:"Transparency in AI decision-making processes is demanded.",
     hint:"The noun meaning 'transparency,' the quality of being open and understandable."},

    {type:"teach", trg:"しゅけんしゃ", src:"sovereign / stakeholder / person in charge", pos:"noun", gender:null,
     note:"データしゅけん = data sovereignty.\nデジタルしゅけん = digital sovereignty.",
     example:"A: こじんがじぶんのデータのしゅけんをもつべきです。\nB: データポータビリティーのけんりがじゅうようですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Individuals should have sovereignty over their own data.\nB: The right to data portability is important.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"In the context of AI and technology, データしゅけん (data sovereignty) is a growing concept. It asks: who owns and controls personal data? Japan's こじんじょうほうほごほう (Personal Information Protection Act) addresses some aspects, but the broader question of individual digital rights continues to evolve as AI systems collect and process more personal information."},

    {type:"teach", trg:"じりつがた", src:"autonomous / self-governing type", pos:"adj", gender:null,
     note:"Kanji: 自律型. じりつがたAI = autonomous AI.\nじりつがたへいき = autonomous weapons.",
     example:"A: じりつがたAIのかいはつにはりんりてきなガイドラインがひつようです。\nB: にんげんのかんしがなくなることへのふあんがありますね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Ethical guidelines are needed for the development of autonomous AI.\nB: There are concerns about losing human oversight.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"自律型 uses 自律 (autonomous/self-governing) and 型 (type/model). The debate over じりつがたへいき (autonomous weapons, 'killer robots') is a major topic in international law. Japan, consistent with its peace constitution, supports regulations on fully autonomous weapons while developing AI for defensive and civilian applications."},

    {type:"mc", q:"Japan's approach to AI regulation favors:", opts:["Strict binding laws like the EU","Soft law (guidelines and principles)","No regulation at all","Complete ban on AI development"], ans:"Soft law (guidelines and principles)",
     hint:"Japan prefers flexible g... over rigid laws to balance innovation with ethics."},

    {type:"fb", s:"AIにたいする{1}のあるべきすがたがぎろんされています。\n(What AI regulation should look like is being debated.)", a:"きせい", opts:["きせい","かいはつ","かつよう","けんきゅう"], sSrc:"What AI regulation should look like is being debated.",
     hint:"The noun meaning 'regulation' or 'control,' the rules governing how something operates."},

    {type:"match", pairs:[{trg:"とうめいせい",src:"transparency"},{trg:"せつめいかのう",src:"explainable"},{trg:"きかいがくしゅう",src:"machine learning"},{trg:"バイアス",src:"bias"}]},

    {type:"fb", s:"こじんがじぶんのデータの{1}をもつべきです。\n(Individuals should have sovereignty over their own data.)", a:"しゅけん", opts:["しゅけん","プライバシー","セキュリティー","バイアス"], sSrc:"Individuals should have sovereignty over their own data.",
     hint:"The noun meaning 'sovereignty' or 'control,' the supreme authority over something."},

    {type:"match", pairs:[{trg:"かたより",src:"bias/imbalance"},{trg:"きせい",src:"regulation"},{trg:"じりつがた",src:"autonomous"},{trg:"データしゅけん",src:"data sovereignty"}]},

    {type:"mc", q:"The main concern about じりつがたAI is:", opts:["It costs too much","Loss of human oversight and control","It is too slow","It uses too much electricity"], ans:"Loss of human oversight and control",
     hint:"Autonomous systems that operate without h... supervision raise fundamental ethical questions."},
  ]
};
export default BATCH2_L_1;
