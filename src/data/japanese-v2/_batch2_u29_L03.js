// Unit 29 Batch 2 Lesson 3: きんゆうとぎんこう (Finance & Banking)
const BATCH2_L_3 = {
  id:"jav2_u29l_b2_3", title:"きんゆうとぎんこう", icon:"🏦", xp:15, board:true,
  steps:[
    {type:"intro", title:"きんゆうとぎんこう",
     desc:"Financial vocabulary is essential for living and working in Japan. From banking transactions to understanding economic news, these terms appear in daily life and JLPT N2 reading passages about economics and society.",
     goals:["Use banking and finance vocabulary","Discuss financial instruments and transactions","Understand Japan's financial system terminology"]},

    {type:"teach", trg:"きんゆう", src:"finance / financial", pos:"noun", gender:null,
     note:"Kanji: 金融. きんゆうきかん = financial institution.\nきんゆうせいさく = monetary policy.",
     example:"A: にちぎんのきんゆうせいさくがちゅうもくされています。\nB: きんりのへんどうがきになりますね。",
     exampleSrc:"A: The Bank of Japan's monetary policy is attracting attention.\nB: Interest rate changes are concerning.",
     funFact:"金融 uses 金 (money/metal) and 融 (melt/dissolve). Finance is where money 'flows and melts together.' The にちぎん (Bank of Japan, shortened from 日本銀行) sets きんゆうせいさく that affects everything from mortgage rates to the yen's value. Japan's long period of zero interest rates made its きんゆうせいさく globally unique."},

    {type:"teach", trg:"きんり", src:"interest rate", pos:"noun", gender:null,
     note:"Kanji: 金利. きんりがあがる = interest rates rise.\nていきんり = low interest rate.",
     example:"A: さいきんきんりがすこしあがりました。\nB: よきんのりそくがふえますね。",
     exampleSrc:"A: Interest rates have risen slightly recently.\nB: Deposit interest will increase.",
     funFact:"金利 uses 金 (money) and 利 (profit/benefit). Japan maintained near-zero きんり for over two decades (1999-2024), a policy called ゼロきんりせいさく (zero interest rate policy). This unprecedented experiment in monetary policy was an attempt to stimulate the economy during the 'lost decades.' Rising きんり in recent years marks a historic shift."},

    {type:"teach", trg:"よきん", src:"deposit / savings (bank)", pos:"noun", gender:null,
     note:"Kanji: 預金. よきんする = to deposit.\nふつうよきん = regular savings. ていきよきん = fixed deposit.",
     example:"A: まいつきよきんをしています。\nB: いくらくらいよきんしていますか？",
     exampleSrc:"A: I make deposits every month.\nB: About how much do you deposit?",
     funFact:"預金 uses 預 (entrust/deposit) and 金 (money). Japanese households historically have high よきん rates, preferring the safety of bank deposits over stock investments. The phrase タンスよきん (tansu deposits, keeping cash at home in a chest) describes the estimated billions of yen that Japanese people keep as physical cash outside the banking system."},

    {type:"mc", q:"きんゆうせいさく means:", opts:["Monetary policy","Tax collection","Trade regulation","Budget allocation"], ans:"Monetary policy",
     hint:"きんゆう (finance) + せいさく (policy) describes government/central bank management of money supply."},

    {type:"teach", trg:"かわせ", src:"currency exchange / foreign exchange", pos:"noun", gender:null,
     note:"Kanji: 為替. かわせレート = exchange rate.\nえんだか = strong yen. えんやす = weak yen.",
     example:"A: さいきんえんやすがすすんでいますね。\nB: ゆにゅうひんのねだんがあがりそうです。",
     exampleSrc:"A: The yen has been weakening recently.\nB: Prices of imported goods are likely to rise.",
     funFact:"為替 is one of those Japanese words where the kanji readings are unusual. かわせ originally meant 'exchange' in commercial transactions. えんだか (yen appreciation, 円高) and えんやす (yen depreciation, 円安) are daily news terms. The yen's value against the dollar affects everything from tourist numbers to export competitiveness."},

    {type:"teach", trg:"りそく", src:"interest (money earned on deposits)", pos:"noun", gender:null,
     note:"Kanji: 利息. りそくがつく = interest accrues.\nりそくしゅうにゅう = interest income.",
     example:"A: ていきよきんのほうがりそくがたかいです。\nB: でも、いつでもひきだせるふつうよきんがべんりです。",
     exampleSrc:"A: Fixed deposits have higher interest.\nB: But regular savings that can be withdrawn anytime are more convenient.",
     funFact:"利息 uses 利 (profit) and 息 (breath). Interest is the 'breath of profit,' money that grows naturally over time. During Japan's zero interest rate era, りそく on bank deposits was negligible. A popular joke was that keeping money in a bank earned less りそく than the ATM fees to withdraw it."},

    {type:"teach", trg:"ふさい", src:"debt / liabilities", pos:"noun", gender:null,
     note:"Kanji: 負債. こくさいふさい = national debt.\nOpposite: しさん (assets).",
     example:"A: にほんのこくさいふさいはGDPのにひゃくパーセントをこえています。\nB: せかいさいだいきぼのふさいですね。",
     exampleSrc:"A: Japan's national debt exceeds 200% of GDP.\nB: That is the largest debt in the world.",
     funFact:"負債 uses 負 (bear/lose) and 債 (debt/bond). Japan holds the world's largest national ふさい relative to GDP, yet remains financially stable because most debt is held domestically. This paradox confounds economists. The phrase ざいせいけんぜんか (fiscal consolidation) is a perpetual policy goal that successive governments struggle to achieve."},

    {type:"fb", s:"さいきんえんやすが{1}でいますね。\n(The yen has been weakening recently.)", a:"すすん", opts:["すすん","あがっ","さがっ","かわっ"], sSrc:"The yen has been weakening recently.",
     hint:"The verb meaning 'to progress/advance,' used with えんやす to describe ongoing depreciation."},

    {type:"teach", trg:"ぜいきん", src:"tax / taxes", pos:"noun", gender:null,
     note:"Kanji: 税金. しょうひぜい = consumption tax.\nしょとくぜい = income tax.",
     example:"A: にほんのしょうひぜいはじゅうパーセントです。\nB: しょくりょうひんははちパーセントのけいげんぜいりつです。",
     exampleSrc:"A: Japan's consumption tax is 10%.\nB: Food products have a reduced rate of 8%.",
     funFact:"税金 uses 税 (tax) and 金 (money). Japan's しょうひぜい (consumption tax) was introduced in 1989 at 3%, rising to 10% in 2019. The けいげんぜいりつ (reduced tax rate) of 8% for food was introduced to protect consumers. Tax policy is perpetually debated, with ぞうぜい (tax increase) being politically unpopular but fiscally necessary."},

    {type:"teach", trg:"しさん", src:"assets / property / wealth", pos:"noun", gender:null,
     note:"Kanji: 資産. しさんうんよう = asset management.\nOpposite: ふさい (liabilities).",
     example:"A: しさんうんようについてそうだんしたいのですが。\nB: ファイナンシャルプランナーにそうだんしてみてはいかがですか？",
     exampleSrc:"A: I would like to consult about asset management.\nB: How about consulting a financial planner?",
     funFact:"資産 uses 資 (resources/capital) and 産 (produce/property). Japan's household しさん exceeds 2,000 trillion yen, one of the largest pools of savings in the world. The government has been encouraging households to shift from よきん (deposits) to とうし (investment) through programs like NISA (少額投資非課税制度), a tax-free investment account."},

    {type:"mc", q:"えんやす means:", opts:["Yen appreciation (strong yen)","Yen depreciation (weak yen)","Stable yen","Digital yen"], ans:"Yen depreciation (weak yen)",
     hint:"やす means 'cheap/low,' so えんやす describes the yen losing value against other currencies."},

    {type:"fb", s:"にほんのしょうひ{1}はじゅうパーセントです。\n(Japan's consumption tax is 10%.)", a:"ぜい", opts:["ぜい","きん","りつ","ぜいきん"], sSrc:"Japan's consumption tax is 10%.",
     hint:"The word for 'tax,' part of the compound しょうひぜい (consumption tax)."},

    {type:"match", pairs:[{trg:"きんゆう",src:"finance"},{trg:"きんり",src:"interest rate"},{trg:"よきん",src:"deposit/savings"},{trg:"かわせ",src:"currency exchange"}]},

    {type:"fb", s:"にほんのこくさい{1}はGDPのにひゃくパーセントをこえています。\n(Japan's national debt exceeds 200% of GDP.)", a:"ふさい", opts:["ふさい","しさん","きんゆう","けいざい"], sSrc:"Japan's national debt exceeds 200% of GDP.",
     hint:"The noun meaning 'debt' or 'liabilities,' the opposite of assets."},

    {type:"match", pairs:[{trg:"りそく",src:"interest (earned)"},{trg:"ふさい",src:"debt"},{trg:"ぜいきん",src:"tax"},{trg:"しさん",src:"assets"}]},

    {type:"mc", q:"Japan's household savings are notable for:", opts:["Being among the largest in the world","Being among the smallest in the world","Being entirely in stocks","Being entirely in real estate"], ans:"Being among the largest in the world",
     hint:"Japanese households hold over 2,000 trillion yen, much of it in bank deposits."},
  ]
};
export default BATCH2_L_3;
