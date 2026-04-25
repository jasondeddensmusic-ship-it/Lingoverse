// Batch 11 – Unit 29 (B2.2 Economy): Economic & Financial Terms
const BATCH11_L1 = {
  id:"jav2_u29l_b11_1", title:"経済用語(けいざいようご) (III)", icon:"💹", xp:15, board:true,
  steps:[
    {type:"intro", title:"経済用語(けいざいようご)",
     desc:"Learn essential economic and financial vocabulary. These terms appear frequently in news, business discussions, and JLPT N2 reading passages.",
     goals:["Discuss economic trends and indicators","Use financial vocabulary in context","Understand economic news reports"]},

    {type:"teach", trg:"景気(けいき)", src:"economy / business conditions", pos:"noun", gender:null,
     note:"景気(けいき)がいい = economy is good.\n不景気(ふけいき) = recession.",
     example:"A: 最近(さいきん)の景気(けいき)はどうですか？\nB: 少(すこ)し回復(かいふく)してきています。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: How is the economy recently?\nB: It is recovering a little.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"景気(けいき) literally means 'scene spirit' (景(けい) = scenery, 気(き) = spirit). When the economic 'scenery' looks bright, 景気(けいき)がいい. Japan's 景気(けいき) cycles include the famous バブル景気(けいき) (bubble economy, 1986-91) and the subsequent 失(うしな)われた二十年(にじゅうねん) (lost two decades) of stagnation."},

    {type:"teach", trg:"物価(ぶっか)", src:"prices / cost of living", pos:"noun", gender:null,
     note:"物価(ぶっか)上昇(じょうしょう) = price increase / inflation.\n物価(ぶっか)が上(あ)がる = prices rise.",
     example:"A: 最近(さいきん)物価(ぶっか)が上(あ)がっていますね。\nB: 特(とく)に食料品(しょくりょうひん)が高(たか)くなりました。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Prices have been rising recently.\nB: Food products especially have become expensive.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"物価(ぶっか) literally means 'thing prices.' Japan experienced decades of デフレ (deflation) where 物価(ぶっか) actually dropped, unique among major economies. The government's goal of 2% inflation (インフレターゲット) became policy. 物価(ぶっか)上昇(じょうしょう) in 2022-23 ended Japan's deflation era."},

    {type:"teach", trg:"収入(しゅうにゅう)", src:"income / revenue", pos:"noun", gender:null,
     note:"年収(ねんしゅう) = annual income.\n収入源(しゅうにゅうげん) = source of income.",
     example:"A: 平均(へいきん)年収(ねんしゅう)はどのくらいですか？\nB: 日本(にほん)の平均(へいきん)は約(やく)四百万円(よんひゃくまんえん)です。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: What is the average annual income?\nB: Japan's average is about 4 million yen.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"Discussing 収入(しゅうにゅう) is considered taboo in most Japanese social settings. 年収(ねんしゅう) (annual income) is private information. However, anonymous surveys show Japan's average is about 4.4 million yen. The gap between 収入(しゅうにゅう) in urban vs rural areas and between regular vs irregular workers drives social policy debates."},

    {type:"teach", trg:"支出(ししゅつ)", src:"expenditure / spending", pos:"noun", gender:null,
     note:"Opposite of 収入(しゅうにゅう).\n政府(せいふ)の支出(ししゅつ) = government spending.",
     example:"A: 今月(こんげつ)の支出(ししゅつ)が多(おお)すぎます。\nB: 家計簿(かけいぼ)をつけてみてはどうですか？\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: This month's spending is too much.\nB: How about trying to keep a household budget?\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"Japanese households traditionally track 支出(ししゅつ) in 家計簿(かけいぼ) (household ledger books). This practice, invented in 1904 by journalist Hani Motoko, is still popular. Modern apps replace physical 家計簿(かけいぼ) but the discipline of tracking every yen spent remains a Japanese financial virtue."},

    {type:"teach", trg:"投資(とうし)", src:"investment", pos:"noun", gender:null,
     note:"投資(とうし)する = to invest.\n株式投資(かぶしきとうし) = stock investment.",
     example:"A: 投資(とうし)を始(はじ)めたいのですが。\nB: まずは少額(しょうがく)から始(はじ)めるのがいいですよ。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: I want to start investing.\nB: Starting with small amounts is good.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japanese households historically kept savings in 貯金(ちょきん) (bank deposits) rather than 投資(とうし). The government promotes NISA (少額投資非課税制度(しょうがくとうしひかぜいせいど), small-amount tax-free investment system) to encourage 投資(とうし). Japan's stock market (東証(とうしょう)) is the third largest globally. The cultural shift from 貯金(ちょきん) to 投資(とうし) is ongoing."},

    {type:"teach", trg:"税金(ぜいきん)", src:"tax", pos:"noun", gender:null,
     note:"所得税(しょとくぜい) = income tax.\n消費税(しょうひぜい) = consumption tax (10%).",
     example:"A: 日本(にほん)の消費税(しょうひぜい)は何(なん)パーセントですか？\nB: 十(じゅう)パーセントです。食料品(しょくりょうひん)は八(はち)パーセントです。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: What is Japan's consumption tax?\nB: 10 percent. Food products are 8 percent.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"Japan's 税金(ぜいきん) system includes 消費税(しょうひぜい) (consumption tax, 10%), 所得税(しょとくぜい) (income tax, progressive), and 住民税(じゅうみんぜい) (resident tax). The consumption tax rate has been a major political issue: raised from 5% to 8% (2014) to 10% (2019). The reduced 8% rate for food was a compromise."},

    {type:"teach", trg:"輸出(ゆしゅつ)", src:"export", pos:"noun", gender:null,
     note:"輸出(ゆしゅつ)する = to export.\nOpposite: 輸入(ゆにゅう) (import).",
     example:"A: 日本(にほん)の主(おも)な輸出品(ゆしゅつひん)は何(なん)ですか？\nB: 自動車(じどうしゃ)や電子部品(でんしぶひん)です。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: What are Japan's main exports?\nB: Automobiles and electronic parts.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Japan's 輸出(ゆしゅつ) economy is dominated by automobiles (Toyota, Honda), electronics, and machinery. Japan is the world's third-largest economy. The term 貿易収支(ぼうえきしゅうし) (trade balance) tracks 輸出(ゆしゅつ) vs 輸入(ゆにゅう). Japan's trade relationships with the US and China dominate economic news."},

    {type:"teach", trg:"輸入(ゆにゅう)", src:"import", pos:"noun", gender:null,
     note:"輸入(ゆにゅう)する = to import.\n輸入品(ゆにゅうひん) = imported goods.",
     example:"A: 日本(にほん)はエネルギーを輸入(ゆにゅう)に頼(たよ)っています。\nB: 自然資源(しぜんしげん)が少(すく)ないですからね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Japan relies on imports for energy.\nB: Because natural resources are scarce.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"Japan 輸入(ゆにゅう) (imports) over 90% of its energy. This dependence shaped postwar policy: nuclear power was developed to reduce 輸入(ゆにゅう) reliance. After Fukushima, LNG imports surged. 円安(えんやす) (weak yen) makes 輸入(ゆにゅう) more expensive, directly affecting consumer prices."},

    {type:"teach", trg:"円高(えんだか)", src:"strong yen / yen appreciation", pos:"noun", gender:null,
     note:"Opposite: 円安(えんやす) (weak yen).\n円高(えんだか)になる = the yen strengthens.",
     example:"A: 円高(えんだか)は輸出(ゆしゅつ)企業(きぎょう)にとって大変(たいへん)です。\nB: 海外(かいがい)旅行(りょこう)にはいいですけどね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: A strong yen is tough for export companies.\nB: But it's good for overseas travel.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"円高(えんだか) (高(たか)い円(えん)) vs 円安(えんやす) (安(やす)い円(えん)) affects everyone. 円高(えんだか) makes imports cheaper but hurts exporters. 円安(えんやす) makes exports competitive but raises import costs. Japanese news reports daily 円相場(えんそうば) (yen exchange rate) because it directly impacts prices, travel costs, and corporate earnings."},

    {type:"teach", trg:"利息(りそく)", src:"interest (financial)", pos:"noun", gender:null,
     note:"金利(きんり) = interest rate.\nゼロ金利(きんり) = zero interest rate.",
     example:"A: 日本(にほん)の金利(きんり)は低(ひく)いですね。\nB: 長(なが)い間(あいだ)ゼロ金利(きんり)政策(せいさく)が続(つづ)いています。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Japan's interest rates are low.\nB: Zero interest rate policy has continued for a long time.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"Japan's ゼロ金利(きんり) (zero interest rate) policy, maintained for decades, means bank savings earn virtually nothing. This revolutionary monetary policy influenced global economics. The Bank of Japan (日銀(にちぎん)) even experimented with マイナス金利(きんり) (negative interest rates). Japan's monetary policy is studied worldwide as a unique economic experiment."},

    {type:"teach", trg:"貨幣(かへい)", src:"currency", pos:"noun", gender:null,
     note:"貨幣価値(かへいかち) = currency value.\n外貨(がいか) = foreign currency.",
     example:"A: 日本(にほん)の貨幣(かへい)は円(えん)です。\nB: 紙幣(しへい)は千円(せんえん)、五千円(ごせんえん)、一万円(いちまんえん)の三種類(さんしゅるい)です。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Japan's currency is the yen.\nB: Bills come in three types: 1,000, 5,000, and 10,000 yen.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"Japanese 貨幣(かへい) (currency) features historical and cultural figures on bills. The new 2024 series features Shibusawa Eiichi (10,000 yen), Tsuda Umeko (5,000 yen), and Kitasato Shibasaburo (1,000 yen). Japan remains one of the most cash-dependent developed economies despite efforts to promote キャッシュレス."},

    // Quiz steps
    {type:"mc", q:"日本(にほん)の「失(うしな)われた二十年(にじゅうねん)」は何(なん)ですか？",
     opts:["Two decades of economic stagnation after the bubble burst","A holiday period","A historical war period","An education reform era"],
     ans:"Two decades of economic stagnation after the bubble burst",
     hint:"A... the バブル景気(けいき) collapsed in 1991, Japan entered a long period of e... difficulty that shaped modern Japanese society."},

    {type:"fb", s:"日本(にほん)の消費税(しょうひぜい)は{1}パーセントです。",
     a:["十(じゅう)"],
     opts:["十(じゅう)","八(はち)","五(ご)","二十(にじゅう)"],
     hint:"Japan's general consumption tax rate was raised to this percentage in 2019. Food is taxed at a lower rate.",
     sSrc:"Japan's consumption tax is 10 percent."},

    {type:"match", pairs:[
      {trg:"輸出(ゆしゅつ)", src:"export"},
      {trg:"輸入(ゆにゅう)", src:"import"},
      {trg:"円高(えんだか)", src:"strong yen"},
      {trg:"利息(りそく)", src:"interest"}
    ]},

    {type:"mc", q:"「円高(えんだか)」は誰(だれ)にとっていいですか？",
     opts:["Farmers","Overseas travelers (imports become cheaper)","Export companies","Domestic manufacturers"],
     ans:"Overseas travelers (imports become cheaper)",
     hint:"When the yen is strong, Japanese money has more purchasing power abroad, making foreign travel and imported goods c...."},

    {type:"fb", s:"最近(さいきん){1}が上(あ)がっていますね。特(とく)に食料品(しょくりょうひん)が高(たか)くなりました。",
     a:["物価(ぶっか)"],
     opts:["物価(ぶっか)","税金(ぜいきん)","利息(りそく)","貨幣(かへい)"],
     hint:"The general level of prices for goods and services is rising. This term means 'prices' or 'cost of living.'",
     sSrc:"Prices have been rising recently. Food products especially have become expensive."},

    {type:"mc", q:"日本人(にほんじん)の伝統的(でんとうてき)なお金(かね)の管理(かんり)方法(ほうほう)は何(なん)ですか？",
     opts:["Cryptocurrency","Credit cards only","家計簿(かけいぼ) (household ledger)","Stock trading"],
     ans:"家計簿(かけいぼ) (household ledger)",
     hint:"This method of tracking every expenditure was invented in 1904 and remains popular in Japanese financial culture."}
  ,{type:"match",pairs:[{trg:"景気(けいき)",src:"economy / business conditions"},{trg:"収入(しゅうにゅう)",src:"income / revenue"},{trg:"支出(ししゅつ)",src:"expenditure / spending"},{trg:"投資(とうし)",src:"investment"},{trg:"税金(ぜいきん)",src:"tax"},{trg:"貨幣(かへい)",src:"currency"}]}]
};
export default BATCH11_L1;
