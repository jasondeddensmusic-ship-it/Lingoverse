// Batch 6 – Unit 35 (B2.4 Information Society): AI & Digital Transformation
const BATCH6_L1 = {
  id:"jav2_u35l_b6_1", title:"AIとデジタル変革(へんかく)", icon:"🤖", xp:15, board:true,
  steps:[
    {type:"intro", title:"AIとデジタル変革(へんかく)",
     desc:"Learn cutting-edge vocabulary for artificial intelligence, digital transformation, and the information society. These terms dominate Japanese news, business, and academic discourse.",
     goals:["Discuss AI and technology trends","Use vocabulary for digital transformation","Express opinions on technology and society"]},

    {type:"teach", trg:"人工知能(じんこうちのう)", src:"artificial intelligence (AI)", pos:"noun", gender:null,
     note:"Abbreviated: AI (エーアイ).\nAI技術(ぎじゅつ) = AI technology.",
     example:"A: 人工知能(じんこうちのう)が私(わたし)たちの生活(せいかつ)を変(か)えています。\nB: 便利(べんり)になる反面(はんめん)、失業(しつぎょう)の不安(ふあん)もありますね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Artificial intelligence is changing our lives.\nB: It becomes convenient, but there are also worries about unemployment.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"人工知能(じんこうちのう) uses 人工 (artificial) and 知能 (intelligence). Japan was an early AI researcher (the Fifth Generation Computer Project, 1982). Today, Japan uses AI in manufacturing (ものづくり), healthcare (医療(いりょう)), and disaster prediction (災害予測(さいがいよそく)). The national AI strategy aims to make Japan a world leader."},

    {type:"teach", trg:"ビッグデータ", src:"big data", pos:"noun", gender:null,
     note:"Katakana loanword. ビッグデータ解析(かいせき) = big data analysis.\nデータ活用(かつよう) = data utilization.",
     example:"A: ビッグデータを活用(かつよう)してマーケティングを効率化(こうりつか)しましょう。\nB: 顧客(こきゃく)の行動(こうどう)パターンがわかりますね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Let us use big data to make marketing more efficient.\nB: We can understand customer behavior patterns.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"ビッグデータ has become a major buzzword in Japanese business. Companies analyze purchasing patterns, web behavior, and IoT sensor data. Japan's My Number system and government digitalization (デジタル庁(ちょう), Digital Agency, established 2021) aim to create a data-driven society while protecting privacy (プライバシー)."},

    {type:"teach", trg:"ロボット", src:"robot", pos:"noun", gender:null,
     note:"Katakana loanword. 産業(さんぎょう)ロボット = industrial robot.\n介護(かいご)ロボット = care robot.",
     example:"A: 日本(にほん)はロボット技術(ぎじゅつ)の世界的(せかいてき)リーダーです。\nB: 工場(こうじょう)だけでなく、介護(かいご)やサービスにも使(つか)われていますね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Japan is a global leader in robot technology.\nB: They are used not only in factories but also in care and services.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japan loves ロボット. From Astro Boy (鉄腕(てつわん)アトム) to Pepper (the social robot), Japanese culture embraces robots as helpful companions rather than threats. Japan leads in industrial ロボット deployment. Aging society drives development of 介護(かいご)ロボット (care robots) and コミュニケーションロボット (companion robots)."},

    {type:"teach", trg:"自動化(じどうか)", src:"automation", pos:"noun", gender:null,
     note:"自動化(じどうか)する = to automate.\n工場(こうじょう)の自動化(じどうか) = factory automation.",
     example:"A: 自動化(じどうか)によって生産性(せいさんせい)が上(あ)がりました。\nB: 一方(いっぽう)で、仕事(しごと)がなくなる不安(ふあん)もあります。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Productivity increased through automation.\nB: On the other hand, there are concerns about job losses.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"自動化(じどうか) combines 自動(じどう) (automatic) and 化(か) (transformation). Japan pioneered factory 自動化(じどうか) with Toyota's production system. Now, AI-driven 自動化(じどうか) extends to offices, agriculture, and logistics. 自動運転(じどううんてん) (autonomous driving) is heavily invested in, with Japan aiming for Level 4 autonomy."},

    {type:"teach", trg:"プライバシー", src:"privacy", pos:"noun", gender:null,
     note:"Katakana loanword. 個人(こじん)のプライバシー = personal privacy.\nプライバシー保護(ほご) = privacy protection.",
     example:"A: ビッグデータ活用(かつよう)とプライバシー保護(ほご)のバランスが難(むずか)しいです。\nB: 法整備(ほうせいび)が必要(ひつよう)ですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Balancing big data use and privacy protection is difficult.\nB: Legal frameworks are needed.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"プライバシー awareness is growing in Japan. The 個人情報保護法(こじんじょうほうほごほう) (Personal Information Protection Act) was strengthened in 2022. Japanese culture values privacy in some areas (home life) but shares more in others (workplace). The tension between データ活用(かつよう) and プライバシー is a major societal debate."},

    {type:"mc", q:"自動化(じどうか) means:", opts:["Automation","Digitalization","Artificial intelligence","Robotics"], ans:"Automation",
     hint:"This word describes making processes run by themselves without human intervention."},

    {type:"teach", trg:"革新(かくしん)", src:"innovation / revolution", pos:"noun", gender:null,
     note:"技術革新(ぎじゅつかくしん) = technological innovation.\n革新的(かくしんてき) = innovative.",
     example:"A: 技術革新(ぎじゅつかくしん)のスピードが速(はや)まっています。\nB: 対応(たいおう)できる人材(じんざい)が必要(ひつよう)です。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: The speed of technological innovation is accelerating.\nB: Personnel who can adapt are needed.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"革新(かくしん) uses 革 (leather/reform) and 新 (new). Japan faces an 'innovation dilemma': excelling at 改善(かいぜん) (incremental improvement) but struggling with disruptive 革新(かくしん). Startups (スタートアップ) are being promoted by government. Silicon Valley-style 革新(かくしん) culture is slowly growing in Japan."},

    {type:"teach", trg:"セキュリティ", src:"security (cyber/digital)", pos:"noun", gender:null,
     note:"Katakana loanword. サイバーセキュリティ = cybersecurity.\nセキュリティ対策(たいさく) = security measures.",
     example:"A: サイバーセキュリティの強化(きょうか)が急務(きゅうむ)です。\nB: パスワード管理(かんり)から始(はじ)めましょう。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Strengthening cybersecurity is urgent.\nB: Let us start with password management.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"サイバーセキュリティ is a national priority. Japan established the National Center of Incident Readiness and Strategy for Cybersecurity (NISC) and hosted cybersecurity measures for the Olympics. Despite being a tech leader, Japan lags in セキュリティ awareness among regular users. ランサムウェア (ransomware) attacks on Japanese companies increased dramatically."},

    {type:"teach", trg:"進化(しんか)", src:"evolution / advancement", pos:"noun", gender:null,
     note:"進化(しんか)する = to evolve.\n技術(ぎじゅつ)の進化(しんか) = technological advancement.",
     example:"A: スマートフォンの進化(しんか)はめざましいです。\nB: 十年前(じゅうねんまえ)とは全然(ぜんぜん)違(ちが)いますね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: The evolution of smartphones is remarkable.\nB: It is completely different from 10 years ago.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"進化(しんか) combines 進 (advance) and 化 (change). In tech contexts, 進化(しんか) describes rapid advancement. Japanese smartphones evolved uniquely: before the iPhone, Japan had advanced 'feature phones' (ガラケー, from Galapagos phone, unique to Japan's ecosystem). Now, スマホ (smartphone) penetration exceeds 90%."},

    {type:"teach", trg:"仮想(かそう)", src:"virtual", pos:"adj", gender:null,
     note:"仮想(かそう)現実(げんじつ) = virtual reality (VR).\n仮想(かそう)空間(くうかん) = virtual space.",
     example:"A: 仮想(かそう)現実(げんじつ)の技術(ぎじゅつ)が進化(しんか)しています。\nB: メタバースの時代(じだい)が来(き)ますね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Virtual reality technology is evolving.\nB: The era of the metaverse is coming.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"仮想(かそう) uses 仮 (temporary/provisional) and 想 (imagine). Japan leads in VR content for gaming and entertainment. 仮想通貨(かそうつうか) (virtual currency/cryptocurrency) regulation is among the world's most advanced, following the Mt. Gox collapse. VRチャット and メタバース platforms are growing communities."},

    {type:"fb", s:"技術(ぎじゅつ){1}のスピードが速(はや)まっています。\n(The speed of technological innovation is accelerating.)", a:"かくしん", opts:["かくしん","しんか","じどうか","かそう"], sSrc:"The speed of technological innovation is accelerating.",
     hint:"The word for revolutionary new developments in technology."},

    {type:"teach", trg:"繋(つな)がる", src:"to connect / to be linked", pos:"verb", gender:null,
     note:"Group 1 verb. インターネットに繋(つな)がる = to connect to the internet.",
     example:"A: このデバイスはWi-Fiに繋(つな)がりますか？\nB: はい、設定(せってい)が必要(ひつよう)です。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Does this device connect to Wi-Fi?\nB: Yes, setup is required.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"繋(つな)がる (to be connected) has become a defining word of the digital age. IoT (モノのインターネット) means everything 繋(つな)がる. Social media 繋(つな)がり (connections) complement real-world relationships. The pandemic showed that digital 繋(つな)がり can sustain communities. Japan aims for Society 5.0 where everything is seamlessly 繋(つな)がる."},

    {type:"mc", q:"仮想現実(かそうげんじつ) is:", opts:["Simulated training","Virtual reality (VR)","Augmented reality","Actual reality"], ans:"Virtual reality (VR)",
     hint:"仮想 (provisional/imagined) + 現実 (actuality). The exact translation matches the famous three-letter tech acronym."},

    {type:"match", pairs:[
      {trg:"人工知能(じんこうちのう)", src:"artificial intelligence"},
      {trg:"自動化(じどうか)", src:"automation"},
      {trg:"革新(かくしん)", src:"innovation"},
      {trg:"プライバシー", src:"privacy"},
      {trg:"進化(しんか)", src:"evolution"}
    ]},

    {type:"fb", s:"インターネットに{1}りますか？\n(Does it connect to the internet?)", a:"つなが", opts:["つなが","つくり","つづき","つかい"], sSrc:"Does it connect to the internet?",
     hint:"The verb meaning to be connected or linked to something."},

    {type:"mc", q:"Japan faces an 'innovation dilemma' because:", opts:["It lacks internet access","Its population is too young","It excels at incremental improvement but struggles with disruptive innovation","It has too many robots"], ans:"It excels at incremental improvement but struggles with disruptive innovation",
     hint:"Japan's strength in kaizen (i...) does not always translate to radical new ideas."}
  ,{type:"match",pairs:[{trg:"ビッグデータ",src:"big data"},{trg:"ロボット",src:"robot"},{trg:"セキュリティ",src:"security (cyber/digital)"},{trg:"仮想(かそう)",src:"virtual"},{trg:"繋(つな)がる",src:"to connect / to be linked"}]},
  {type:"fb", s:"製造業(せいぞうぎょう)では{1}が多(おお)くの作業(さぎょう)を自動化(じどうか)しています。", a:["ロボット"], opts:["ロボット","人工知能(じんこうちのう)","ビッグデータ","プライバシー"], hint:"A machine that performs tasks automatically, common on factory production lines.", sSrc:"In manufacturing, {1} automate many tasks."}
]
};
export default BATCH6_L1;
