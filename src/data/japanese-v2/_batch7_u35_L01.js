// Batch 7 – Unit 35 (B2.2 Information Society): Digital & Technology Vocabulary
const BATCH7_L1 = {
  id:"jav2_u35l_b7_1", title:"デジタル社会(しゃかい)", icon:"💻", xp:15, board:true,
  steps:[
    {type:"intro", title:"デジタル社会(しゃかい)",
     desc:"Learn vocabulary for the digital age: AI, data, privacy, and technology ethics. These terms are essential for understanding modern Japan's relationship with technology.",
     goals:["Discuss AI and digital technology","Use privacy and data vocabulary","Express opinions about technology's role in society"]},

    {type:"teach", trg:"人工知能(じんこうちのう)", src:"artificial intelligence (AI)", pos:"noun", gender:null,
     note:"Also: AI (エーアイ). 人工知能技術(じんこうちのうぎじゅつ) = AI technology.\nAI活用(かつよう) = AI utilization.",
     example:"A: 人工知能(じんこうちのう)が社会(しゃかい)を変(か)えています。\nB: 機会(きかい)もあればリスクもありますね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: AI is changing society.\nB: There are opportunities and risks.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"人工知能(じんこうちのう) research is a Japanese government priority. Japan's Society 5.0 vision integrates AI into every sector. However, Japan lags behind the US and China in AI development. Anime and manga (Astro Boy, Ghost in the Shell) explored AI concepts decades before the current boom, shaping Japanese attitudes toward AI."},

    {type:"teach", trg:"自動化(じどうか)", src:"automation", pos:"noun", gender:null,
     note:"工場(こうじょう)の自動化(じどうか) = factory automation.\n業務自動化(ぎょうむじどうか) = business process automation.",
     example:"A: 自動化(じどうか)によって生産性(せいさんせい)が上(あ)がりました。\nB: しかし雇用(こよう)への影響(えいきょう)もあります。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Automation increased productivity.\nB: However, there is impact on employment.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japan pioneered industrial 自動化(じどうか) with robotics in the 1970s-80s. Japanese factories have more robots per worker than almost any country. Now, 自動化(じどうか) extends to services: automated checkout (セルフレジ), robot hotels, and AI customer service. Japan views 自動化(じどうか) as an answer to labor shortages from the aging population."},

    {type:"teach", trg:"個人情報(こじんじょうほう)", src:"personal information / personal data", pos:"noun", gender:null,
     note:"個人情報保護法(こじんじょうほうほごほう) = Personal Information Protection Law.\n漏洩(ろうえい) = data leak.",
     example:"A: 個人情報(こじんじょうほう)の管理(かんり)は大事(だいじ)です。\nB: 漏洩事故(ろうえいじこ)が増(ふ)えていますね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Managing personal data is important.\nB: Data leak incidents are increasing.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"個人情報(こじんじょうほう) protection became law in 2003, updated significantly in 2022. Japan received an EU 'adequacy' decision, meaning data can flow freely between Japan and EU. The number of 個人情報(こじんじょうほう)漏洩(ろうえい) incidents grows annually. Companies face fines and reputational damage for mishandling data."},

    {type:"teach", trg:"電子署名(でんししょめい)", src:"digital signature / electronic signature", pos:"noun", gender:null,
     note:"Also: 電子サイン. 電子署名法(でんししょめいほう) = Digital Signature Law.\nオンライン契約(けいやく) = online contracts.",
     example:"A: 電子署名(でんししょめい)で契約(けいやく)ができます。\nB: はんこが要(い)らなくなりましたね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Contracts can be made with digital signatures.\nB: Personal seals are no longer needed.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"電子署名(でんししょめい) is slowly replacing はんこ (personal seals) in Japan. The COVID pandemic accelerated this shift when working from home made physical seal-stamping impractical. The 'digital minister' (デジタル大臣(だいじん)) position was created in 2021 to drive digital transformation. Japan's はんこ culture resists change."},

    {type:"teach", trg:"クラウド", src:"cloud (computing)", pos:"noun", gender:null,
     note:"Katakana loanword. クラウドコンピューティング = cloud computing.\nクラウドサービス = cloud services.",
     example:"A: データはクラウドに保存(ほぞん)しましょう。\nB: セキュリティは大丈夫(だいじょうぶ)ですか？\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Let us save data to the cloud.\nB: Is the security okay?\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"クラウド adoption in Japan was slower than in the US due to security concerns and preference for on-premises systems. The government's 'Cloud by Default' policy (2018) pushed adoption. Japanese companies increasingly use AWS, Azure, and domestic providers. Data sovereignty (データ主権(しゅけん)) concerns influence クラウド decisions."},

    {type:"teach", trg:"キャッシュレス化(か)", src:"going cashless / cashless transition", pos:"noun", gender:null,
     note:"キャッシュレス決済(けっさい) = cashless payment.\nQRコード決済(けっさい) = QR code payment.",
     example:"A: 日本(にほん)でもキャッシュレス化(か)が進(すす)んでいます。\nB: でもまだ現金(げんきん)が好(す)きな人(ひと)も多(おお)いです。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Cashless transition is progressing in Japan too.\nB: But many people still prefer cash.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"Japan's キャッシュレス (cashless) rate jumped from 24% (2019) to over 36% during COVID. PayPay (QR code payment) became ubiquitous. However, Japan still lags behind China (80%+) and South Korea (90%+). Elderly resistance, love of cash, and the reliability of ATMs slow the transition. The government targets 40% by 2025."},

    {type:"teach", trg:"ブロックチェーン", src:"blockchain", pos:"noun", gender:null,
     note:"Katakana loanword. 分散型台帳(ぶんさんがたちょうぼ) = distributed ledger.\n仮想通貨(かそうつうか) = cryptocurrency.",
     example:"A: ブロックチェーン技術(ぎじゅつ)に注目(ちゅうもく)しています。\nB: 金融(きんゆう)以外(いがい)の活用(かつよう)も期待(きたい)されていますね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: I am paying attention to blockchain technology.\nB: Applications beyond finance are expected.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"Japan was an early ブロックチェーン adopter. Mt. Gox (the early Bitcoin exchange) was based in Tokyo. After its 2014 collapse, Japan created the world's first crypto exchange regulatory framework. NFTs (非代替性(ひだいたいせい)トークン) generated art and gaming interest. Japan views ブロックチェーン as infrastructure for Web3."},

    {type:"teach", trg:"情報格差(じょうほうかくさ)", src:"digital divide / information gap", pos:"noun", gender:null,
     note:"デジタルデバイド = digital divide (loanword).\n世代間格差(せだいかんかくさ) = generational gap.",
     example:"A: 高齢者(こうれいしゃ)と若者(わかもの)で情報格差(じょうほうかくさ)があります。\nB: デジタル教室(きょうしつ)が必要(ひつよう)ですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: There is a digital divide between elderly and young.\nB: Digital literacy classes are needed.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"情報格差(じょうほうかくさ) is significant in Japan's aging society. While young people are digitally fluent, many elderly struggle with smartphones and online services. The government's マイナンバーカード (My Number Card, digital ID) rollout exposed this gap. Local governments offer デジタル活用(かつよう)支援(しえん) (digital usage support) classes."},

    {type:"teach", trg:"テレワーク", src:"telework / remote work", pos:"noun", gender:null,
     note:"Katakana loanword. Also: リモートワーク.\nテレワーク導入(どうにゅう) = telework implementation.",
     example:"A: コロナの後(あと)テレワークが増(ふ)えました。\nB: 通勤時間(つうきんじかん)が減(へ)ってよかったです。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Telework increased after COVID.\nB: It was good that commuting time decreased.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"テレワーク transformed Japanese work culture almost overnight during COVID. Pre-pandemic, remote work was rare (under 10%). At peak, it reached 30%+ in Tokyo. Many companies now offer hybrid arrangements. However, traditional management culture (見(み)える化(か), making work visible) and はんこ requirements slowed adoption."},

    {type:"teach", trg:"サイバー攻撃(こうげき)", src:"cyber attack", pos:"noun", gender:null,
     note:"サイバーセキュリティ = cybersecurity.\nランサムウェア = ransomware.",
     example:"A: 企業(きぎょう)へのサイバー攻撃(こうげき)が増(ふ)えています。\nB: セキュリティ対策(たいさく)が急務(きゅうむ)です。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Cyber attacks on companies are increasing.\nB: Security measures are urgent.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"サイバー攻撃(こうげき) against Japan has increased dramatically. The 2022 attack on Toyota's supply chain shut down all Japanese factories for a day. Government and military systems face constant threats. Japan created a サイバーセキュリティ strategy and actively develops defense capabilities. Shortage of cybersecurity professionals is a critical challenge."},

    {type:"teach", trg:"ロボット工学(こうがく)", src:"robotics / robot engineering", pos:"noun", gender:null,
     note:"ロボット = robot. 工学(こうがく) = engineering.\n産業用(さんぎょうよう)ロボット = industrial robot.",
     example:"A: 日本(にほん)はロボット工学(こうがく)の先進国(せんしんこく)です。\nB: 介護(かいご)ロボットや産業用(さんぎょうよう)ロボットが有名(ゆうめい)です。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Japan is a leader in robotics.\nB: Care robots and industrial robots are famous.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"Japan has the world's highest robot density in manufacturing. Beyond factories, Japan develops ロボット for eldercare (介護(かいご)ロボット), disaster response, and companionship. The cultural acceptance of robots (influenced by Astro Boy and Doraemon) makes Japan uniquely receptive. ASIMO, Pepper, and AIBO represent Japan's ロボット innovation."},

    {type:"teach", trg:"自動運転(じどううんてん)", src:"autonomous driving / self-driving", pos:"noun", gender:null,
     note:"自動運転車(じどううんてんしゃ) = self-driving car.\nレベル4自動運転(じどううんてん) = Level 4 autonomy.",
     example:"A: 自動運転(じどううんてん)の実験(じっけん)が進(すす)んでいます。\nB: 過疎地域(かそちいき)での活用(かつよう)が期待(きたい)されています。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Self-driving experiments are progressing.\nB: Use in rural areas is expected.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"Japan approved Level 4 自動運転(じどううんてん) (autonomous driving) in 2023, among the first countries to do so. The focus is rural areas where elderly drivers face accident risks and public transport is limited. Toyota, Honda, and Nissan invest heavily. Japan's detailed traffic laws and narrow roads create unique 自動運転(じどううんてん) challenges."},

    // Quiz steps
    {type:"mc", q:"Japan's cashless payment rate is approximately:",
     opts:["36%","80%","10%","60%"],
     ans:"36%",
     hint:"Still lower than China (80%+) and South Korea (90%+), though growing rapidly post-COVID."},

    {type:"match", pairs:[
      {trg:"人工知能(じんこうちのう)", src:"AI"},
      {trg:"自動化(じどうか)", src:"automation"},
      {trg:"クラウド", src:"cloud computing"},
      {trg:"テレワーク", src:"remote work"},
      {trg:"ロボット工学(こうがく)", src:"robotics"}
    ]},

    {type:"fb", s:"{1}の管理(かんり)は大事(だいじ)です。漏洩事故(ろうえいじこ)が増(ふ)えています。",
     a:["個人情報(こじんじょうほう)"],
     opts:["個人情報(こじんじょうほう)","電子署名(でんししょめい)","ブロックチェーン","クラウド"],
     hint:"Personal data management is critical as leak incidents increase.",
     sSrc:"{1} management is important. Leak incidents are increasing."},

    {type:"mc", q:"はんこ culture in Japan is being challenged by:",
     opts:["Digital signatures and remote work","New seal designs","Faster ink","Larger stamps"],
     ans:"Digital signatures and remote work",
     hint:"COVID made physical seal-stamping impractical, accelerating the shift to 電子署名(でんししょめい)."},

    {type:"fb", s:"高齢者(こうれいしゃ)と若者(わかもので){1}があります。",
     a:["情報格差(じょうほうかくさ)"],
     opts:["情報格差(じょうほうかくさ)","テレワーク","キャッシュレス化(か)","クラウド"],
     hint:"The gap in digital literacy between elderly and young people.",
     sSrc:"There is a {1} between elderly and young people."},

    {type:"mc", q:"Japan approved Level 4 autonomous driving in 2023 primarily for:",
     opts:["Rural areas where elderly face transportation challenges","Tokyo highway traffic","Racing competitions","Delivery drones"],
     ans:"Rural areas where elderly face transportation challenges",
     hint:"The focus is solving mobility issues in areas with limited public transport and aging drivers."},

    {type:"match", pairs:[
      {trg:"個人情報(こじんじょうほう)", src:"personal data"},
      {trg:"電子署名(でんししょめい)", src:"digital signature"},
      {trg:"サイバー攻撃(こうげき)", src:"cyber attack"},
      {trg:"自動運転(じどううんてん)", src:"autonomous driving"},
      {trg:"情報格差(じょうほうかくさ)", src:"digital divide"}
    ]},

    {type:"fb", s:"企業(きぎょう)への{1}が増(ふ)えています。セキュリティが急務(きゅうむ)です。",
     a:["サイバー攻撃(こうげき)"],
     opts:["サイバー攻撃(こうげき)","テレワーク","自動化(じどうか)","キャッシュレス化(か)"],
     hint:"Attacks on corporate computer systems are increasing. Security is urgent.",
     sSrc:"{1} on companies are increasing. Security is urgent."}
  ]
};
export default BATCH7_L1;
