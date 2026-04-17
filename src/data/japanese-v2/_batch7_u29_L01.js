// Batch 7 – Unit 29 (B2.1 Economy): Financial & Economic Terms
const BATCH7_L1 = {
  id:"jav2_u29l_b7_1", title:"経済用語(けいざいようご)", icon:"💹", xp:15, board:true,
  steps:[
    {type:"intro", title:"経済用語(けいざいようご)",
     desc:"Learn financial and economic vocabulary for understanding news, discussing market trends, and navigating Japan's economy. These JLPT N2 terms appear in business and media daily.",
     goals:["Discuss economic trends and indicators","Use financial terminology accurately","Analyze market situations with proper vocabulary"]},

    {type:"teach", trg:"景気(けいき)", src:"economic conditions / business climate", pos:"noun", gender:null,
     note:"景気(けいき)がいい = economy is good. 不景気(ふけいき) = recession.\n景気回復(けいきかいふく) = economic recovery.",
     example:"A: 最近(さいきん)景気(けいき)はどうですか？\nB: 少(すこ)し回復(かいふく)してきています。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: How is the economy recently?\nB: It is recovering a little.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"景気(けいき) uses 景(けい) (scenery/view) and 気(き) (spirit/energy). The economy's 'mood' or 'energy.' Japanese people discuss 景気(けいき) like weather. 景気DI (Diffusion Index) is closely watched. The famous 'Tankan' survey by the Bank of Japan measures business 景気(けいき) quarterly."},

    {type:"teach", trg:"物価(ぶっか)", src:"prices (general price level)", pos:"noun", gender:null,
     note:"物価上昇(ぶっかじょうしょう) = price increase/inflation.\n物価安定(ぶっかあんてい) = price stability.",
     example:"A: 最近(さいきん)物価(ぶっか)が上(あ)がっていますね。\nB: 特(とく)に食品(しょくひん)の物価(ぶっか)が高(たか)くなりました。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Prices have been rising recently.\nB: Food prices especially have become high.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"物価(ぶっか) literally means 'thing-price.' Japan experienced decades of deflation (デフレ) where 物価(ぶっか) fell or stagnated. After 2022, 物価(ぶっか) started rising significantly for the first time in 30 years. Japanese consumers, accustomed to stable prices, found 物価上昇(ぶっかじょうしょう) shocking."},

    {type:"teach", trg:"株式(かぶしき)", src:"stocks / shares", pos:"noun", gender:null,
     note:"株式市場(かぶしきしじょう) = stock market. 株価(かぶか) = stock price.\n株式会社(かぶしきがいしゃ) = corporation (stock company).",
     example:"A: 今日(きょう)の株価(かぶか)はどうでしたか？\nB: 日経平均(にっけいへいきん)が上(あ)がりました。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: How were stock prices today?\nB: The Nikkei average went up.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"株式(かぶしき) uses 株(かぶ) (stump/share) and 式(しき) (style/form). The Tokyo Stock Exchange (東京証券取引所(とうきょうしょうけんとりひきじょ)) is the world's third largest. 日経平均(にっけいへいきん) (Nikkei 225) is Japan's main stock index. Japanese individual investment in 株式(かぶしき) was historically low but is growing rapidly with NISA tax incentives."},

    {type:"teach", trg:"金融(きんゆう)", src:"finance / banking", pos:"noun", gender:null,
     note:"金融機関(きんゆうきかん) = financial institution.\n金融政策(きんゆうせいさく) = monetary policy.",
     example:"A: 日本銀行(にほんぎんこう)の金融政策(きんゆうせいさく)が変(か)わりました。\nB: 金利(きんり)に影響(えいきょう)がありますね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: The Bank of Japan's monetary policy changed.\nB: It affects interest rates.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"金融(きんゆう) combines 金(きん) (gold/money) and 融(ゆう) (melt/blend). Finance 'melts' money into the economy. Japan's 金融(きんゆう) system includes megabanks (三菱UFJ(みつびしUFJ), みずほ, 三井住友(みついすみとも)), regional banks, and the powerful 日本銀行(にほんぎんこう). Zero interest rates lasted over a decade, reshaping savings culture."},

    {type:"teach", trg:"貿易(ぼうえき)", src:"trade / foreign trade", pos:"noun", gender:null,
     note:"貿易収支(ぼうえきしゅうし) = trade balance. 輸出(ゆしゅつ) = export. 輸入(ゆにゅう) = import.",
     example:"A: 日本(にほん)は貿易(ぼうえき)の国(くに)です。\nB: 資源(しげん)を輸入(ゆにゅう)し、製品(せいひん)を輸出(ゆしゅつ)しています。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Japan is a trading nation.\nB: It imports resources and exports products.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"貿易(ぼうえき) has defined Japan since the Meiji era. Japan transforms imported raw materials into high-value exports (cars, electronics, machinery). The trade surplus peaked in the 1980s, causing friction with the US. Today, Japan imports more energy post-Fukushima, shifting the 貿易収支(ぼうえきしゅうし)."},

    {type:"teach", trg:"税金(ぜいきん)", src:"tax", pos:"noun", gender:null,
     note:"所得税(しょとくぜい) = income tax. 消費税(しょうひぜい) = consumption tax.\n税金(ぜいきん)を納(おさ)める = to pay taxes.",
     example:"A: 消費税(しょうひぜい)が上(あ)がりましたね。\nB: 家計(かけい)に影響(えいきょう)が大(おお)きいです。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Consumption tax went up.\nB: The impact on household budgets is large.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"税金(ぜいきん) debates dominate Japanese politics. Consumption tax rose from 3% (1989) to 5% to 8% to 10%. Each increase sparked public outcry. Japan's 税金(ぜいきん) structure combines national and local taxes. The ふるさと納税(のうぜい) (hometown tax donation) system lets people direct tax payments to rural areas and receive local products in return."},

    {type:"teach", trg:"予算(よさん)", src:"budget", pos:"noun", gender:null,
     note:"国家予算(こっかよさん) = national budget. 予算案(よさんあん) = budget proposal.\n予算(よさん)を組(く)む = to draft a budget.",
     example:"A: 来年度(らいねんど)の予算案(よさんあん)が発表(はっぴょう)されました。\nB: 教育予算(きょういくよさん)は増(ふ)えましたか？\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Next year's budget proposal was announced.\nB: Did the education budget increase?\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"予算(よさん) debates in the Japanese Diet (国会(こっかい)) are major political events. Japan's national 予算(よさん) exceeds 100 trillion yen. About one-third goes to social security (社会保障(しゃかいほしょう)). The massive national debt (over 250% of GDP) makes 予算(よさん) discussions about balancing services and fiscal responsibility increasingly urgent."},

    {type:"teach", trg:"債務(さいむ)", src:"debt / liabilities", pos:"noun", gender:null,
     note:"国家債務(こっかさいむ) = national debt. 債務者(さいむしゃ) = debtor.\n債務整理(さいむせいり) = debt restructuring.",
     example:"A: 日本(にほん)の国家債務(こっかさいむ)は大(おお)きいですね。\nB: GDPの250パーセント以上(いじょう)です。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Japan's national debt is large.\nB: Over 250% of GDP.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"Japan has the world's highest government 債務(さいむ) (debt) to GDP ratio. Despite this, Japanese government bonds remain stable because over 90% are held domestically. The debate between fiscal hawks (財政健全派(ざいせいけんぜんは)) and growth-first advocates (成長優先(せいちょうゆうせん)) defines economic policy discussions."},

    {type:"teach", trg:"賃金(ちんぎん)", src:"wages / pay", pos:"noun", gender:null,
     note:"賃金引(ちんぎんひ)き上(あ)げ = wage increase.\n最低賃金(さいていちんぎん) = minimum wage.",
     example:"A: 賃金(ちんぎん)が上(あ)がらないのに物価(ぶっか)が上(あ)がっています。\nB: 実質賃金(じっしつちんぎん)が下(さ)がっていますね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Prices rise while wages do not.\nB: Real wages are declining.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"賃金(ちんぎん) stagnation is Japan's defining economic challenge. Wages barely grew for 30 years. 春闘(しゅんとう) (spring wage negotiations) between unions and companies are annual events. PM Kishida made 賃金引(ちんぎんひ)き上(あ)げ (wage increases) a top priority. The phrase 失(うしな)われた30年(ねん) (lost 30 years) describes this era."},

    {type:"teach", trg:"スタートアップ", src:"startup (company)", pos:"noun", gender:null,
     note:"Katakana loanword. スタートアップ企業(きぎょう) = startup company.\nスタートアップ支援(しえん) = startup support.",
     example:"A: 日本(にほん)でもスタートアップが増(ふ)えています。\nB: 渋谷(しぶや)がスタートアップの中心地(ちゅうしんち)です。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Startups are increasing in Japan too.\nB: Shibuya is the startup center.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japan's スタートアップ ecosystem is growing but still small compared to the US and China. The government declared a 'Startup Development Five-Year Plan' in 2022, aiming to create 100,000 new startups. Risk-averse culture and the security of large company employment slow growth. Shibuya's 'Bit Valley' is Japan's startup hub."},

    {type:"teach", trg:"フリーランス", src:"freelancer", pos:"noun", gender:null,
     note:"Katakana loanword. フリーランスで働(はたら)く = to work freelance.\nフリーランスの方(ほう)が自由(じゆう) = freelancing is freer.",
     example:"A: フリーランスに転職(てんしょく)しました。\nB: 自由(じゆう)な働(はたら)き方(かた)ですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: I switched to freelancing.\nB: A free way of working.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"フリーランス is a growing work style in Japan, with over 4 million people. The Freelance Protection Law (2023) gives them better legal standing. Remote work acceleration during COVID expanded フリーランス opportunities. However, lack of benefits (健康保険(けんこうほけん), 年金(ねんきん)) remains a challenge."},

    {type:"teach", trg:"実質賃金(じっしつちんぎん)", src:"real wages (adjusted for inflation)", pos:"noun", gender:null,
     note:"実質(じっしつ) = real/actual. 賃金(ちんぎん) = wages.\n名目賃金(めいもくちんぎん) = nominal wages.",
     example:"A: 実質賃金(じっしつちんぎん)が下(さ)がり続(つづ)けています。\nB: 物価上昇(ぶっかじょうしょう)が原因(げんいん)ですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Real wages continue to decline.\nB: Price increases are the cause.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"実質賃金(じっしつちんぎん) is the true measure of purchasing power. Even if nominal wages rise, if 物価(ぶっか) rises faster, 実質賃金(じっしつちんぎん) falls. Japan has experienced 実質賃金(じっしつちんぎん) decline for consecutive months, creating the painful combination of higher prices and stagnant real income."},

    // Quiz steps
    {type:"mc", q:"Japan's national debt exceeds:",
     opts:["250% of GDP","100% of GDP","50% of GDP","500% of GDP"],
     ans:"250% of GDP",
     hint:"Despite being the world's highest ratio, Japanese bonds remain stable because most are held domestically."},

    {type:"match", pairs:[
      {trg:"景気(けいき)", src:"economic conditions"},
      {trg:"物価(ぶっか)", src:"prices"},
      {trg:"株式(かぶしき)", src:"stocks"},
      {trg:"貿易(ぼうえき)", src:"trade"},
      {trg:"税金(ぜいきん)", src:"tax"}
    ]},

    {type:"fb", s:"最近(さいきん){1}が上(あ)がっていますね。特(とく)に食品(しょくひん)が。",
     a:["物価(ぶっか)"],
     opts:["物価(ぶっか)","賃金(ちんぎん)","株価(かぶか)","予算(よさん)"],
     hint:"General price levels have been rising, especially food. This word means 'prices.'",
     sSrc:"Recently {1} have been rising. Especially food."},

    {type:"mc", q:"春闘(しゅんとう) (shuntou) is:",
     opts:["Annual spring wage negotiations","A spring festival","A sumo tournament","A cherry blossom event"],
     ans:"Annual spring wage negotiations",
     hint:"Unions and companies negotiate 賃金(ちんぎん) increases every s... in this ritual."},

    {type:"fb", s:"日本銀行(にほんぎんこう)の{1}政策(せいさく)が変(か)わりました。",
     a:["金融(きんゆう)"],
     opts:["金融(きんゆう)","貿易(ぼうえき)","税金(ぜいきん)","景気(けいき)"],
     hint:"The Bank of Japan changed its monetary policy. This word means 'finance/banking.'",
     sSrc:"The Bank of Japan's {1} policy changed."},

    {type:"mc", q:"ふるさと納税(のうぜい) lets people:",
     opts:["Direct tax payments to rural areas and receive local products","Avoid paying taxes entirely","Pay taxes to foreign countries","Get tax refunds automatically"],
     ans:"Direct tax payments to rural areas and receive local products",
     hint:"This unique Japanese system lets taxpayers support r... communities in exchange for regional specialties."},

    {type:"match", pairs:[
      {trg:"金融(きんゆう)", src:"finance"},
      {trg:"予算(よさん)", src:"budget"},
      {trg:"債務(さいむ)", src:"debt"},
      {trg:"賃金(ちんぎん)", src:"wages"},
      {trg:"実質賃金(じっしつちんぎん)", src:"real wages"}
    ]},

    {type:"fb", s:"日本(にほん)でも{1}が増(ふ)えています。渋谷(しぶや)が中心地(ちゅうしんち)です。",
     a:["スタートアップ"],
     opts:["スタートアップ","フリーランス","貿易(ぼうえき)","金融(きんゆう)"],
     hint:"New innovative companies are growing in Japan, especially in Shibuya.",
     sSrc:"{1} are increasing in Japan too. Shibuya is the center."}
  ]
};
export default BATCH7_L1;
