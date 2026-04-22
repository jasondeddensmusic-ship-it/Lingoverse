// Batch 9 – Unit 04 (A1.1 How Much?): Payment & Money
const BATCH9_L1 = {
  id:"jav2_u04l_b9_1", title:"お金(かね)", icon:"💴", xp:15, board:true,
  steps:[
    {type:"intro", title:"お金(かね)",
     desc:"Learn essential money and payment vocabulary for everyday transactions in Japan. From coins to cashless payments.",
     goals:["Name Japanese currency denominations","Handle basic payment situations","Understand cashless payment terms"]},

    {type:"teach", trg:"お金(かね)", src:"money", pos:"noun", gender:null,
     note:"お = polite prefix, 金(かね) = money/metal.\nお金(かね)を払(はら)う = to pay money.",
     example:"A: お金(かね)が足(た)りません。\nB: いくら足(た)りないですか？",
     exampleSrc:"A: I do not have enough money.\nB: How much are you short?",
     funFact:"お金(かね) uses the kanji for metal/gold because ancient coins were metal. Japan is still a cash-heavy society compared to many countries, though キャッシュレス (cashless) payments are growing rapidly since 2020."},

    {type:"teach", trg:"おつり", src:"change (money returned)", pos:"noun", gender:null,
     note:"おつりはいりません = Keep the change.\nIn Japan, tipping is not customary.",
     example:"A: 千円(せんえん)でお願(ねが)いします。\nB: おつりは三百円(さんびゃくえん)です。",
     exampleSrc:"A: I will pay with 1000 yen.\nB: Your change is 300 yen.",
     funFact:"In Japan, おつり is always given exactly. Tipping does not exist and can even cause confusion. Cashiers place change on a small tray (つりせんトレー) rather than handing it directly. This is considered more hygienic and polite."},

    {type:"teach", trg:"領収書(りょうしゅうしょ)", src:"receipt", pos:"noun", gender:null,
     note:"Formal receipt. レシート = register receipt (casual).\n領収書(りょうしゅうしょ)をください = Please give me a receipt.",
     example:"A: 領収書(りょうしゅうしょ)をお願(ねが)いします。\nB: お名前(なまえ)はどうしますか？",
     exampleSrc:"A: A receipt, please.\nB: What name shall I put on it?",
     funFact:"Japan has two types of receipts: レシート (the printed register slip) and 領収書(りょうしゅうしょ) (a formal handwritten receipt for business expenses). When requesting a 領収書(りょうしゅうしょ), the cashier will ask for your name to write on it. Business travelers always need these."},

    {type:"teach", trg:"クレジットカード", src:"credit card", pos:"noun", gender:null,
     note:"Often shortened to クレカ.\nクレジットカードは使(つか)えますか = Can I use a credit card?",
     example:"A: クレジットカードは使(つか)えますか？\nB: はい、使(つか)えます。",
     exampleSrc:"A: Can I use a credit card?\nB: Yes, you can.",
     funFact:"Japan was slow to adopt クレジットカード compared to Western countries, but acceptance has grown enormously. Still, many small restaurants and shops are 現金(げんきん)のみ (cash only). Asking クレジットカードは使(つか)えますか before ordering is wise."},

    {type:"teach", trg:"現金(げんきん)", src:"cash", pos:"noun", gender:null,
     note:"現(げん) = present, 金(きん) = money.\n現金(げんきん)払(ばら)い = cash payment.",
     example:"A: 現金(げんきん)でお願(ねが)いします。\nB: かしこまりました。",
     exampleSrc:"A: Cash, please.\nB: Certainly.",
     funFact:"Japan is one of the most 現金(げんきん) dependent developed nations. About 80% of transactions were cash-based before 2020. Japanese people trust 現金(げんきん) because of extremely low crime rates. You can safely carry large amounts of cash in Japan."},

    {type:"teach", trg:"電子(でんし)マネー", src:"electronic money / e-money", pos:"noun", gender:null,
     note:"Suica, PASMO, PayPay are common types.\n電子(でんし)マネーで払(はら)う = to pay with e-money.",
     example:"A: 電子(でんし)マネーでお願(ねが)いします。\nB: こちらにタッチしてください。",
     exampleSrc:"A: Electronic money, please.\nB: Please tap here.",
     funFact:"Japan pioneered 電子(でんし)マネー with Suica (2001) and Edy (2001), years before Apple Pay. These IC cards use FeliCa technology developed by Sony. Today, PayPay (a QR code payment app) has become the dominant cashless method. Many vending machines accept Suica."},

    {type:"teach", trg:"割(わり)勘(かん)", src:"splitting the bill", pos:"noun", gender:null,
     note:"割(わり)勘(かん)にする = to split the bill.\nCommon among friends in Japan.",
     example:"A: 割(わり)勘(かん)にしましょう。\nB: いいですよ。一人(ひとり)いくらですか？",
     exampleSrc:"A: Let's split the bill.\nB: Sure. How much per person?",
     funFact:"割(わり)勘(かん) means 'divided payment.' It is very common in Japan, even on dates. The concept of 別々(べつべつ)で (separate checks) is also used. Some groups use apps to calculate exact 割(わり)勘(かん) amounts, including who had what."},

    {type:"teach", trg:"お会計(かいけい)", src:"the bill / check (at a restaurant)", pos:"noun", gender:null,
     note:"お会計(かいけい)お願(ねが)いします = Check, please.\nAlso: お勘定(かんじょう) (more formal).",
     example:"A: すみません、お会計(かいけい)お願(ねが)いします。\nB: はい、全部(ぜんぶ)で二千円(にせんえん)です。",
     exampleSrc:"A: Excuse me, the check please.\nB: Yes, the total is 2000 yen.",
     funFact:"In Japan, you usually pay at the register near the exit, not at your table. Saying お会計(かいけい)お願(ねが)いします (or making a cross with your index fingers) signals you want to pay. The word 会計(かいけい) literally means 'meeting and counting.'"},

    {type:"mc", q:"What is 割(わり)勘(かん)?", opts:["Splitting the bill","Paying with cash","Getting change","Using a credit card"], ans:"Splitting the bill",
     hint:"This practice is very common among friends in Japan when eating out together."},

    {type:"fb", s:"{1}でお願(ねが)いします。\n(Cash, please.)", a:"現金(げんきん)", opts:["現金(げんきん)","クレジットカード","電子(でんし)マネー","おつり"], sSrc:"Cash, please.",
     hint:"This word refers to physical money, bills and coins, as opposed to electronic payment."},

    {type:"match", pairs:[
      {trg:"おつり", src:"change"},
      {trg:"領収書(りょうしゅうしょ)", src:"receipt"},
      {trg:"割(わり)勘(かん)", src:"splitting the bill"},
      {trg:"お会計(かいけい)", src:"the bill"}
    ]},

    {type:"mc", q:"What should you ask before ordering at a small Japanese restaurant?", opts:["おつりはいりません","クレジットカードは使(つか)えますか","お会計(かいけい)お願(ねが)いします","割(わり)勘(かん)にしましょう"], ans:"クレジットカードは使(つか)えますか",
     hint:"Many small Japanese restaurants only accept cash, so it is wise to check beforehand."}
  ,{type:"match",pairs:[{trg:"お金(かね)",src:"money"},{trg:"電子(でんし)マネー",src:"electronic money / e-money"}]}]
};
export default BATCH9_L1;
