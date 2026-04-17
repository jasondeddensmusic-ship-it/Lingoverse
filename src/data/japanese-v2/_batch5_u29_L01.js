// Unit 29 Batch 5 Lesson 1: きんゆう (Finance & Markets)
const BATCH5_L_1 = {
  id:"jav2_u29l_b5_1", title:"きんゆう", icon:"🏦", xp:15, board:true,
  steps:[
    {type:"intro", title:"きんゆう",
     desc:"Financial vocabulary is essential for reading Japanese business news and understanding economic discussions. Learn about stock markets, currency exchange, investment, and fiscal policy. These terms appear in JLPT N2/N1 reading passages and are vital for working in or with Japanese companies.",
     goals:["Use financial vocabulary: かぶしき, かわせ, とうし","Discuss markets and monetary policy","Understand Japan-specific economic concepts"]},

    {type:"teach", trg:"かぶしき", src:"stock / shares / equity", pos:"noun", gender:null,
     note:"Kanji: 株式. かぶしきしじょう = stock market.\nかぶしきがいしゃ = stock company (corporation).",
     example:"A: かぶしきしじょうがおおはばにさがりました。\nB: せかいけいざいのふあんていさがげんいんですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: The stock market dropped significantly.\nB: The instability of the global economy is the cause.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"株式 uses 株 (stump/share) and 式 (style/formula). The Tokyo Stock Exchange (東京証券取引所, toukyou shouken torihikijo) is the world's third largest. かぶしきとうし (stock investment) became popular among individual Japanese investors after the 'NISA' tax-free investment program was introduced. Before this, Japanese preferred savings (ちょきん) over investing."},

    {type:"teach", trg:"かわせ", src:"exchange (currency) / foreign exchange", pos:"noun", gender:null,
     note:"Kanji: 為替. がいこくかわせ = foreign exchange.\nかわせレート = exchange rate. えんだか/えんやす = strong/weak yen.",
     example:"A: えんやすがすすんでゆにゅうひんのかかくがあがっています。\nB: かいがいりょこうもたかくなりましたね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: The weak yen is pushing up the prices of imported goods.\nB: Overseas travel has also become expensive.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"為替 is a uniquely Japanese compound: 為 (for/sake) and 替 (exchange). The えんだか (strong yen) vs. えんやす (weak yen) dynamic dominates economic news. A strong yen hurts exporters like Toyota but helps importers and travelers. The Bank of Japan (日本銀行, nihon ginkou) intervenes in currency markets when fluctuations become extreme."},

    {type:"teach", trg:"とうし", src:"investment", pos:"noun", gender:null,
     note:"Kanji: 投資. とうしする = to invest.\nとうしか = investor. せっきょくてきなとうし = aggressive investment.",
     example:"A: きょういくへのとうしはみらいへのとうしです。\nB: にんげんのせいちょうにいちばんリターンがおおきいですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Investment in education is investment in the future.\nB: Human growth gives the greatest return.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"投資 uses 投 (throw) and 資 (resources/capital). Japanese households have historically favored ちょきん (savings) over とうし (investment), with over 50% of financial assets in bank deposits. This risk-averse tendency is changing as low interest rates make savings unattractive. The phrase とうしのじだい (the age of investment) describes this cultural shift."},

    {type:"teach", trg:"ぶっか", src:"prices / commodity prices / cost of living", pos:"noun", gender:null,
     note:"Kanji: 物価. ぶっかじょうしょう = price rise/inflation.\nしょうひしゃぶっかしすう = consumer price index (CPI).",
     example:"A: さいきんぶっかがあがっていますね。\nB: とくにしょくりょうひんのねあがりがきになります。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Prices have been rising recently.\nB: The rise in food prices is especially concerning.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"物価 uses 物 (thing/goods) and 価 (price/value). Japan experienced remarkably stable ぶっか for decades during deflation. After 2022, ぶっかじょうしょう (price rises) became a major public concern for the first time in a generation. The しょうひしゃぶっかしすう (CPI) is closely watched by the Bank of Japan and appears in every economic news broadcast."},

    {type:"mc", q:"えんやす means:", opts:["A weak yen (yen loses value against other currencies)","A strong yen","A stable yen","Digital currency"], ans:"A weak yen (yen loses value against other currencies)",
     hint:"えん (y...) + やす (cheap/w...) = the y... becoming cheaper relative to o... c...."},

    {type:"teach", trg:"ゆにゅう", src:"import / importing", pos:"noun", gender:null,
     note:"Kanji: 輸入. ゆにゅうする = to import.\nOpposite: ゆしゅつ (export). ゆにゅうひん = imported goods.",
     example:"A: にほんはエネルギーしげんのおおくをゆにゅうにたよっています。\nB: エネルギーじきゅうりつのこうじょうがかだいですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Japan depends on imports for most of its energy resources.\nB: Improving the energy self-sufficiency rate is a challenge.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"輸入 uses 輸 (transport) and 入 (enter). Japan's ゆにゅう includes fossil fuels, food (food self-sufficiency is only ~38%), and raw materials. The ぼうえきしゅうし (trade balance) swings between surplus and deficit. Japanese consumers associate ゆにゅうひん with both quality (European luxury goods) and affordability (Southeast Asian products)."},

    {type:"teach", trg:"ゆしゅつ", src:"export / exporting", pos:"noun", gender:null,
     note:"Kanji: 輸出. ゆしゅつする = to export.\nゆしゅつさんぎょう = export industry. ゆしゅつこく = exporting country.",
     example:"A: にほんのしゅようなゆしゅつひんはじどうしゃとはんどうたいです。\nB: せいぞうぎょうはにほんけいざいのちゅうしんですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Japan's main exports are automobiles and semiconductors.\nB: Manufacturing is the center of Japan's economy.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"輸出 uses 輸 (transport) and 出 (exit). Japan's ゆしゅつ strategy shifted from cheap mass products in the 1960s to high-tech, high-quality goods. Toyota, Sony, and Nintendo are ゆしゅつ success stories. The phrase メイドインジャパン (Made in Japan) transformed from a badge of cheapness in the 1950s to a mark of quality by the 1980s."},

    {type:"teach", trg:"しじょう", src:"market / marketplace", pos:"noun", gender:null,
     note:"Kanji: 市場. Two readings: しじょう (economic market) and いちば (physical marketplace).\nしじょうけいざい = market economy.",
     example:"A: あたらしいしじょうをかいたくすることがじゅうようです。\nB: アジアしじょうのせいちょうにきたいしています。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Developing new markets is important.\nB: We are expecting growth in Asian markets.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"市場 has two readings: しじょう for abstract economic markets (かぶしきしじょう = stock market, ろうどうしじょう = labor market) and いちば for physical marketplaces (うおいちば = fish market, like 豊洲市場 Toyosu Market). Distinguishing these readings is important for JLPT. The same kanji, two different worlds: abstract economics vs. concrete commerce."},

    {type:"tip", title:"Key Economic Indicators",
     text:"GDP: こくないそうせいさん\nCPI: しょうひしゃぶっかしすう\nUnemployment: しつぎょうりつ\nTrade balance: ぼうえきしゅうし\nExchange rate: かわせレート\nInterest rate: きんり\nInflation: インフレ\nDeflation: デフレ\n\nBank of Japan (にちぎん) actions:\nきんゆうかんわ = monetary easing\nきんりひきあげ = interest rate hike\nりょうてきかんわ = quantitative easing\n\nThese terms appear daily in Japanese financial news."},

    {type:"teach", trg:"きんり", src:"interest rate", pos:"noun", gender:null,
     note:"Kanji: 金利. ていきんり = low interest rates.\nきんりひきあげ = interest rate increase.",
     example:"A: にちぎんがきんりをひきあげるかもしれません。\nB: じゅうたくローンにえいきょうがでますね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: The Bank of Japan might raise interest rates.\nB: It will affect housing loans.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"金利 uses 金 (money/gold) and 利 (profit/interest). Japan maintained near-zero きんり for over two decades, a policy called ゼロきんりせいさく (zero interest rate policy). This unprecedented experiment made Japanese monetary policy a global case study. When きんり finally rose, it made international headlines and affected everything from mortgages to savings accounts."},

    {type:"fb", s:"かぶしき{1}がおおはばにさがりました。\n(The stock market dropped significantly.)", a:"しじょう", opts:["しじょう","かいしゃ","ぎんこう","けいざい"], sSrc:"The stock market dropped significantly.",
     hint:"The word for 'market' (economic sense), combined with かぶしき for the securities market."},

    {type:"mc", q:"しじょう and いちば use the same kanji but:", opts:["しじょう is abstract markets, いちば is physical marketplaces","They mean the same thing","しじょう is formal, いちば is slang","One is old, one is new"], ans:"しじょう is abstract markets, いちば is physical marketplaces",
     hint:"The same kanji 市場 has two readings for two different concepts."},

    {type:"match", pairs:[{trg:"かぶしき",src:"stock/shares"},{trg:"かわせ",src:"foreign exchange"},{trg:"ゆにゅう",src:"import"},{trg:"ゆしゅつ",src:"export"}]},

    {type:"fb", s:"にほんはエネルギーしげんのおおくを{1}にたよっています。\n(Japan depends on imports for most energy resources.)", a:"ゆにゅう", opts:["ゆにゅう","ゆしゅつ","せいさん","かいはつ"], sSrc:"Japan depends on imports for most energy resources.",
     hint:"The word meaning bringing goods INTO the country from abroad."},

    {type:"mc", q:"Japan's households traditionally preferred:", opts:["Savings (ちょきん) over investment (とうし)","Investment over savings","Real estate only","Gold only"], ans:"Savings (ちょきん) over investment (とうし)",
     hint:"Risk-averse Japanese culture historically favored safe bank deposits."}
  ]
};
export default BATCH5_L_1;
