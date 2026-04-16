// Unit 29 Batch 5 Lesson 1: きんゆう (Finance & Markets)
const BATCH5_L_1 = {
  id:"jav2_u29l_b5_1", title:"きんゆう", icon:"🏦", xp:15, board:true,
  steps:[
    {type:"intro", title:"きんゆう",
     desc:"Financial vocabulary is essential for reading Japanese business news and understanding economic discussions. Learn about stock markets, currency exchange, investment, and fiscal policy. These terms appear in JLPT N2/N1 reading passages and are vital for working in or with Japanese companies.",
     goals:["Use financial vocabulary: かぶしき, かわせ, とうし","Discuss markets and monetary policy","Understand Japan-specific economic concepts"]},

    {type:"teach", trg:"かぶしき", src:"stock / shares / equity", pos:"noun", gender:null,
     note:"Kanji: 株式. かぶしきしじょう = stock market.\nかぶしきがいしゃ = stock company (corporation).",
     example:"A: かぶしきしじょうがおおはばにさがりました。\nB: せかいけいざいのふあんていさがげんいんですね。",
     exampleSrc:"A: The stock market dropped significantly.\nB: The instability of the global economy is the cause.",
     funFact:"株式 uses 株 (stump/share) and 式 (style/formula). The Tokyo Stock Exchange (東京証券取引所, toukyou shouken torihikijo) is the world's third largest. かぶしきとうし (stock investment) became popular among individual Japanese investors after the 'NISA' tax-free investment program was introduced. Before this, Japanese preferred savings (ちょきん) over investing."},

    {type:"teach", trg:"かわせ", src:"exchange (currency) / foreign exchange", pos:"noun", gender:null,
     note:"Kanji: 為替. がいこくかわせ = foreign exchange.\nかわせレート = exchange rate. えんだか/えんやす = strong/weak yen.",
     example:"A: えんやすがすすんでゆにゅうひんのかかくがあがっています。\nB: かいがいりょこうもたかくなりましたね。",
     exampleSrc:"A: The weak yen is pushing up the prices of imported goods.\nB: Overseas travel has also become expensive.",
     funFact:"為替 is a uniquely Japanese compound: 為 (for/sake) and 替 (exchange). The えんだか (strong yen) vs. えんやす (weak yen) dynamic dominates economic news. A strong yen hurts exporters like Toyota but helps importers and travelers. The Bank of Japan (日本銀行, nihon ginkou) intervenes in currency markets when fluctuations become extreme."},

    {type:"teach", trg:"とうし", src:"investment", pos:"noun", gender:null,
     note:"Kanji: 投資. とうしする = to invest.\nとうしか = investor. せっきょくてきなとうし = aggressive investment.",
     example:"A: きょういくへのとうしはみらいへのとうしです。\nB: にんげんのせいちょうにいちばんリターンがおおきいですね。",
     exampleSrc:"A: Investment in education is investment in the future.\nB: Human growth gives the greatest return.",
     funFact:"投資 uses 投 (throw) and 資 (resources/capital). Japanese households have historically favored ちょきん (savings) over とうし (investment), with over 50% of financial assets in bank deposits. This risk-averse tendency is changing as low interest rates make savings unattractive. The phrase とうしのじだい (the age of investment) describes this cultural shift."},

    {type:"teach", trg:"ぶっか", src:"prices / commodity prices / cost of living", pos:"noun", gender:null,
     note:"Kanji: 物価. ぶっかじょうしょう = price rise/inflation.\nしょうひしゃぶっかしすう = consumer price index (CPI).",
     example:"A: さいきんぶっかがあがっていますね。\nB: とくにしょくりょうひんのねあがりがきになります。",
     exampleSrc:"A: Prices have been rising recently.\nB: The rise in food prices is especially concerning.",
     funFact:"物価 uses 物 (thing/goods) and 価 (price/value). Japan experienced remarkably stable ぶっか for decades during deflation. After 2022, ぶっかじょうしょう (price rises) became a major public concern for the first time in a generation. The しょうひしゃぶっかしすう (CPI) is closely watched by the Bank of Japan and appears in every economic news broadcast."},

    {type:"mc", q:"えんやす means:", opts:["A weak yen (yen loses value against other currencies)","A strong yen","A stable yen","Digital currency"], ans:"A weak yen (yen loses value against other currencies)",
     hint:"えん (y...) + やす (cheap/w...) = the y... becoming cheaper relative to o... c...."},

    {type:"teach", trg:"ゆにゅう", src:"import / importing", pos:"noun", gender:null,
     note:"Kanji: 輸入. ゆにゅうする = to import.\nOpposite: ゆしゅつ (export). ゆにゅうひん = imported goods.",
     example:"A: にほんはエネルギーしげんのおおくをゆにゅうにたよっています。\nB: エネルギーじきゅうりつのこうじょうがかだいですね。",
     exampleSrc:"A: Japan depends on imports for most of its energy resources.\nB: Improving the energy self-sufficiency rate is a challenge.",
     funFact:"輸入 uses 輸 (transport) and 入 (enter). Japan's ゆにゅう includes fossil fuels, food (food self-sufficiency is only ~38%), and raw materials. The ぼうえきしゅうし (trade balance) swings between surplus and deficit. Japanese consumers associate ゆにゅうひん with both quality (European luxury goods) and affordability (Southeast Asian products)."},

    {type:"teach", trg:"ゆしゅつ", src:"export / exporting", pos:"noun", gender:null,
     note:"Kanji: 輸出. ゆしゅつする = to export.\nゆしゅつさんぎょう = export industry. ゆしゅつこく = exporting country.",
     example:"A: にほんのしゅようなゆしゅつひんはじどうしゃとはんどうたいです。\nB: せいぞうぎょうはにほんけいざいのちゅうしんですね。",
     exampleSrc:"A: Japan's main exports are automobiles and semiconductors.\nB: Manufacturing is the center of Japan's economy.",
     funFact:"輸出 uses 輸 (transport) and 出 (exit). Japan's ゆしゅつ strategy shifted from cheap mass products in the 1960s to high-tech, high-quality goods. Toyota, Sony, and Nintendo are ゆしゅつ success stories. The phrase メイドインジャパン (Made in Japan) transformed from a badge of cheapness in the 1950s to a mark of quality by the 1980s."},

    {type:"teach", trg:"しじょう", src:"market / marketplace", pos:"noun", gender:null,
     note:"Kanji: 市場. Two readings: しじょう (economic market) and いちば (physical marketplace).\nしじょうけいざい = market economy.",
     example:"A: あたらしいしじょうをかいたくすることがじゅうようです。\nB: アジアしじょうのせいちょうにきたいしています。",
     exampleSrc:"A: Developing new markets is important.\nB: We are expecting growth in Asian markets.",
     funFact:"市場 has two readings: しじょう for abstract economic markets (かぶしきしじょう = stock market, ろうどうしじょう = labor market) and いちば for physical marketplaces (うおいちば = fish market, like 豊洲市場 Toyosu Market). Distinguishing these readings is important for JLPT. The same kanji, two different worlds: abstract economics vs. concrete commerce."},

    {type:"tip", title:"Key Economic Indicators",
     text:"GDP: こくないそうせいさん\nCPI: しょうひしゃぶっかしすう\nUnemployment: しつぎょうりつ\nTrade balance: ぼうえきしゅうし\nExchange rate: かわせレート\nInterest rate: きんり\nInflation: インフレ\nDeflation: デフレ\n\nBank of Japan (にちぎん) actions:\nきんゆうかんわ = monetary easing\nきんりひきあげ = interest rate hike\nりょうてきかんわ = quantitative easing\n\nThese terms appear daily in Japanese financial news."},

    {type:"teach", trg:"きんり", src:"interest rate", pos:"noun", gender:null,
     note:"Kanji: 金利. ていきんり = low interest rates.\nきんりひきあげ = interest rate increase.",
     example:"A: にちぎんがきんりをひきあげるかもしれません。\nB: じゅうたくローンにえいきょうがでますね。",
     exampleSrc:"A: The Bank of Japan might raise interest rates.\nB: It will affect housing loans.",
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
