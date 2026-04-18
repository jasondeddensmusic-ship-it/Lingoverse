// Unit 29 Batch 5 Lesson 1: 金融(きんゆう) (Finance & Markets)
const BATCH5_L_1 = {
  id:"jav2_u29l_b5_1", title:"金融(きんゆう)", icon:"🏦", xp:15, board:true,
  steps:[
    {type:"intro", title:"金融(きんゆう)",
     desc:"Financial vocabulary is essential for reading Japanese business news and understanding economic discussions. Learn about stock markets, currency exchange, investment, and fiscal policy. These terms appear in JLPT N2/N1 reading passages and are vital for working in or with Japanese companies.",
     goals:["Use financial vocabulary: 株式(かぶしき), 為替(かわせ), 投資(とうし)","Discuss markets and monetary policy","Understand Japan-specific economic concepts"]},

    {type:"teach", trg:"株式(かぶしき)", src:"stock / shares / equity", pos:"noun", gender:null,
     note:"Kanji: 株式(かぶしき). 株式市場(かぶしきしじょう) = stock market.\n株式会社(かぶしきがいしゃ) = stock company (corporation).",
     example:"A: 株式市場(かぶしきしじょう)が大幅(おおはば)に下(さ)がりました。\nB: 世界経済(せかいけいざい)の不安定(ふあんてい)さが原因(げんいん)ですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: The stock market dropped significantly.\nB: The instability of the global economy is the cause.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"株式(かぶしき) uses 株(かぶ) (stump/share) and 式(しき) (style/formula). The Tokyo Stock Exchange (東京証券取引所(とうきょうしょうけんとりひきじょ)) is the world's third largest. 株式投資(かぶしきとうし) (stock investment) became popular among individual Japanese investors after the 'NISA' tax-free investment program was introduced. Before this, Japanese preferred savings (貯金(ちょきん)) over investing."},

    {type:"teach", trg:"為替(かわせ)", src:"exchange (currency) / foreign exchange", pos:"noun", gender:null,
     note:"Kanji: 為替(かわせ). 外国(がいこく)為替(かわせ) = foreign exchange.\n為替(かわせ)レート = exchange rate. 円高(えんだか)/円安(えんやす) = strong/weak yen.",
     example:"A: 円安(えんやす)が進(すす)んで輸入品(ゆにゅうひん)の価格(かかく)が上(あ)がっています。\nB: 海外旅行(かいがいりょこう)も高(たか)くなりましたね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: The weak yen is pushing up the prices of imported goods.\nB: Overseas travel has also become expensive.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"為替(かわせ) is a uniquely Japanese compound: 為(ため) (for/sake) and 替(かえ) (exchange). The 円高(えんだか) (strong yen) vs. 円安(えんやす) (weak yen) dynamic dominates economic news. A strong yen hurts exporters like Toyota but helps importers and travelers. The Bank of Japan (日本銀行(にほんぎんこう)) intervenes in currency markets when fluctuations become extreme."},

    {type:"teach", trg:"投資(とうし)", src:"investment", pos:"noun", gender:null,
     note:"Kanji: 投資(とうし). 投資(とうし)する = to invest.\n投資家(とうしか) = investor. 積極的(せっきょくてき)な投資(とうし) = aggressive investment.",
     example:"A: 教育(きょういく)への投資(とうし)は未来(みらい)への投資(とうし)です。\nB: 人間(にんげん)の成長(せいちょう)に一番(いちばん)リターンが大(おお)きいですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Investment in education is investment in the future.\nB: Human growth gives the greatest return.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"投資(とうし) uses 投(とう) (throw) and 資(し) (resources/capital). Japanese households have historically favored 貯金(ちょきん) (savings) over 投資(とうし) (investment), with over 50% of financial assets in bank deposits. This risk-averse tendency is changing as low interest rates make savings unattractive. The phrase 投資(とうし)の時代(じだい) (the age of investment) describes this cultural shift."},

    {type:"teach", trg:"物価(ぶっか)", src:"prices / commodity prices / cost of living", pos:"noun", gender:null,
     note:"Kanji: 物価(ぶっか). 物価(ぶっか)上昇(じょうしょう) = price rise/inflation.\n消費者(しょうひしゃ)物価(ぶっか)指数(しすう) = consumer price index (CPI).",
     example:"A: 最近(さいきん)物価(ぶっか)が上(あ)がっていますね。\nB: 特(とく)に食料品(しょくりょうひん)の値上(ねあ)がりが気(き)になります。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Prices have been rising recently.\nB: The rise in food prices is especially concerning.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"物価(ぶっか) uses 物(もの) (thing/goods) and 価(か) (price/value). Japan experienced remarkably stable 物価(ぶっか) for decades during deflation. After 2022, 物価(ぶっか)上昇(じょうしょう) (price rises) became a major public concern for the first time in a generation. The 消費者(しょうひしゃ)物価(ぶっか)指数(しすう) (CPI) is closely watched by the Bank of Japan and appears in every economic news broadcast."},

    {type:"mc", q:"円安(えんやす) means:", opts:["A weak yen (yen loses value against other currencies)","A strong yen","A stable yen","Digital currency"], ans:"A weak yen (yen loses value against other currencies)",
     hint:"円(えん) (y...) + 安(やす) (cheap/w...) = the y... becoming cheaper relative to o... c...."},

    {type:"teach", trg:"輸入(ゆにゅう)", src:"import / importing", pos:"noun", gender:null,
     note:"Kanji: 輸入(ゆにゅう). 輸入(ゆにゅう)する = to import.\nOpposite: 輸出(ゆしゅつ) (export). 輸入品(ゆにゅうひん) = imported goods.",
     example:"A: 日本(にほん)はエネルギー資源(しげん)の多(おお)くを輸入(ゆにゅう)に頼(たよ)っています。\nB: エネルギー自給率(じきゅうりつ)の向上(こうじょう)が課題(かだい)ですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Japan depends on imports for most of its energy resources.\nB: Improving the energy self-sufficiency rate is a challenge.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"輸入(ゆにゅう) uses 輸(ゆ) (transport) and 入(にゅう) (enter). Japan's 輸入(ゆにゅう) includes fossil fuels, food (food self-sufficiency is only ~38%), and raw materials. The 貿易収支(ぼうえきしゅうし) (trade balance) swings between surplus and deficit. Japanese consumers associate 輸入品(ゆにゅうひん) with both quality (European luxury goods) and affordability (Southeast Asian products)."},

    {type:"teach", trg:"輸出(ゆしゅつ)", src:"export / exporting", pos:"noun", gender:null,
     note:"Kanji: 輸出(ゆしゅつ). 輸出(ゆしゅつ)する = to export.\n輸出産業(ゆしゅつさんぎょう) = export industry. 輸出国(ゆしゅつこく) = exporting country.",
     example:"A: 日本(にほん)の主要(しゅよう)な輸出品(ゆしゅつひん)は自動車(じどうしゃ)と半導体(はんどうたい)です。\nB: 製造業(せいぞうぎょう)は日本経済(にほんけいざい)の中心(ちゅうしん)ですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Japan's main exports are automobiles and semiconductors.\nB: Manufacturing is the center of Japan's economy.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"輸出(ゆしゅつ) uses 輸(ゆ) (transport) and 出(しゅつ) (exit). Japan's 輸出(ゆしゅつ) strategy shifted from cheap mass products in the 1960s to high-tech, high-quality goods. Toyota, Sony, and Nintendo are 輸出(ゆしゅつ) success stories. The phrase メイドインジャパン (Made in Japan) transformed from a badge of cheapness in the 1950s to a mark of quality by the 1980s."},

    {type:"teach", trg:"市場(しじょう)", src:"market / marketplace", pos:"noun", gender:null,
     note:"Kanji: 市場(しじょう). Two readings: 市場(しじょう) (economic market) and 市場(いちば) (physical marketplace).\n市場経済(しじょうけいざい) = market economy.",
     example:"A: 新(あたら)しい市場(しじょう)を開拓(かいたく)することが重要(じゅうよう)です。\nB: アジア市場(しじょう)の成長(せいちょう)に期待(きたい)しています。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Developing new markets is important.\nB: We are expecting growth in Asian markets.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"市場(しじょう) has two readings: 市場(しじょう) for abstract economic markets (株式市場(かぶしきしじょう) = stock market, 労働市場(ろうどうしじょう) = labor market) and 市場(いちば) for physical marketplaces (魚市場(うおいちば) = fish market, like 豊洲(とよす)市場(いちば) Toyosu Market). Distinguishing these readings is important for JLPT. The same kanji, two different worlds: abstract economics vs. concrete commerce."},

    {type:"tip", title:"Key Economic Indicators",
     text:"GDP: 国内総生産(こくないそうせいさん)\nCPI: 消費者(しょうひしゃ)物価(ぶっか)指数(しすう)\nUnemployment: 失業率(しつぎょうりつ)\nTrade balance: 貿易収支(ぼうえきしゅうし)\nExchange rate: 為替(かわせ)レート\nInterest rate: 金利(きんり)\nInflation: インフレ\nDeflation: デフレ\n\nBank of Japan (日銀(にちぎん)) actions:\n金融緩和(きんゆうかんわ) = monetary easing\n金利(きんり)引(ひ)き上(あ)げ = interest rate hike\n量的(りょうてき)緩和(かんわ) = quantitative easing\n\nThese terms appear daily in Japanese financial news."},

    {type:"teach", trg:"金利(きんり)", src:"interest rate", pos:"noun", gender:null,
     note:"Kanji: 金利(きんり). 低金利(ていきんり) = low interest rates.\n金利(きんり)引(ひ)き上(あ)げ = interest rate increase.",
     example:"A: 日銀(にちぎん)が金利(きんり)を引(ひ)き上(あ)げるかもしれません。\nB: 住宅(じゅうたく)ローンに影響(えいきょう)が出(で)ますね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: The Bank of Japan might raise interest rates.\nB: It will affect housing loans.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"金利(きんり) uses 金(きん) (money/gold) and 利(り) (profit/interest). Japan maintained near-zero 金利(きんり) for over two decades, a policy called ゼロ金利政策(きんりせいさく) (zero interest rate policy). This unprecedented experiment made Japanese monetary policy a global case study. When 金利(きんり) finally rose, it made international headlines and affected everything from mortgages to savings accounts."},

    {type:"fb", s:"株式(かぶしき){1}が大幅(おおはば)に下(さ)がりました。\n(The stock market dropped significantly.)", a:"市場(しじょう)", opts:["市場(しじょう)","会社(かいしゃ)","銀行(ぎんこう)","経済(けいざい)"], sSrc:"The stock market dropped significantly.",
     hint:"The word for 'market' (economic sense), combined with 株式(かぶしき) for the securities market."},

    {type:"mc", q:"市場(しじょう) and 市場(いちば) use the same kanji but:", opts:["市場(しじょう) is abstract markets, 市場(いちば) is physical marketplaces","They mean the same thing","市場(しじょう) is formal, 市場(いちば) is slang","One is old, one is new"], ans:"市場(しじょう) is abstract markets, 市場(いちば) is physical marketplaces",
     hint:"The same kanji 市場 has two readings for two different concepts."},

    {type:"match", pairs:[{trg:"株式(かぶしき)",src:"stock/shares"},{trg:"為替(かわせ)",src:"foreign exchange"},{trg:"輸入(ゆにゅう)",src:"import"},{trg:"輸出(ゆしゅつ)",src:"export"}]},

    {type:"fb", s:"日本(にほん)はエネルギー資源(しげん)の多(おお)くを{1}に頼(たよ)っています。\n(Japan depends on imports for most energy resources.)", a:"輸入(ゆにゅう)", opts:["輸入(ゆにゅう)","輸出(ゆしゅつ)","生産(せいさん)","開発(かいはつ)"], sSrc:"Japan depends on imports for most energy resources.",
     hint:"The word meaning bringing goods INTO the country from abroad."},

    {type:"mc", q:"Japan's households traditionally preferred:", opts:["Savings (貯金(ちょきん)) over investment (投資(とうし))","Investment over savings","Real estate only","Gold only"], ans:"Savings (貯金(ちょきん)) over investment (投資(とうし))",
     hint:"Risk-averse Japanese culture historically favored safe bank deposits."}
  ,{type:"match",pairs:[{trg:"物価(ぶっか)",src:"prices / commodity prices / cost of living"},{trg:"金利(きんり)",src:"interest rate"}]}]
};
export default BATCH5_L_1;
