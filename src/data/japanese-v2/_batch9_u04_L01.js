// Batch 9 – Unit 04 (A1.1 How Much?): Payment & Money
const BATCH9_L1 = {
  id:"jav2_u04l_b9_1", title:"おかね", icon:"💴", xp:15, board:true,
  steps:[
    {type:"intro", title:"おかね",
     desc:"Learn essential money and payment vocabulary for everyday transactions in Japan. From coins to cashless payments.",
     goals:["Name Japanese currency denominations","Handle basic payment situations","Understand cashless payment terms"]},

    {type:"teach", trg:"おかね", src:"money", pos:"noun", gender:null,
     note:"お = polite prefix, かね = money/metal.\nおかねをはらう = to pay money.",
     example:"A: おかねがたりません。\nB: いくらたりないですか？",
     exampleSrc:"A: I do not have enough money.\nB: How much are you short?",
     funFact:"おかね (お金) uses the kanji for metal/gold because ancient coins were metal. Japan is still a cash-heavy society compared to many countries, though キャッシュレス (cashless) payments are growing rapidly since 2020."},

    {type:"teach", trg:"おつり", src:"change (money returned)", pos:"noun", gender:null,
     note:"おつりはいりません = Keep the change.\nIn Japan, tipping is not customary.",
     example:"A: せんえんでおねがいします。\nB: おつりはさんびゃくえんです。",
     exampleSrc:"A: I will pay with 1000 yen.\nB: Your change is 300 yen.",
     funFact:"In Japan, おつり is always given exactly. Tipping does not exist and can even cause confusion. Cashiers place change on a small tray (つりせんトレー) rather than handing it directly. This is considered more hygienic and polite."},

    {type:"teach", trg:"りょうしゅうしょ", src:"receipt", pos:"noun", gender:null,
     note:"Formal receipt. レシート = register receipt (casual).\nりょうしゅうしょをください = Please give me a receipt.",
     example:"A: りょうしゅうしょをおねがいします。\nB: おなまえはどうしますか？",
     exampleSrc:"A: A receipt, please.\nB: What name shall I put on it?",
     funFact:"Japan has two types of receipts: レシート (the printed register slip) and りょうしゅうしょ (a formal handwritten receipt for business expenses). When requesting a りょうしゅうしょ, the cashier will ask for your name to write on it. Business travelers always need these."},

    {type:"teach", trg:"クレジットカード", src:"credit card", pos:"noun", gender:null,
     note:"Often shortened to クレカ.\nクレジットカードはつかえますか = Can I use a credit card?",
     example:"A: クレジットカードはつかえますか？\nB: はい、つかえます。",
     exampleSrc:"A: Can I use a credit card?\nB: Yes, you can.",
     funFact:"Japan was slow to adopt クレジットカード compared to Western countries, but acceptance has grown enormously. Still, many small restaurants and shops are げんきんのみ (cash only). Asking クレジットカードはつかえますか before ordering is wise."},

    {type:"teach", trg:"げんきん", src:"cash", pos:"noun", gender:null,
     note:"げん = present, きん = money.\nげんきんばらい = cash payment.",
     example:"A: げんきんでおねがいします。\nB: かしこまりました。",
     exampleSrc:"A: Cash, please.\nB: Certainly.",
     funFact:"Japan is one of the most げんきん (現金) dependent developed nations. About 80% of transactions were cash-based before 2020. Japanese people trust げんきん because of extremely low crime rates. You can safely carry large amounts of cash in Japan."},

    {type:"teach", trg:"でんしマネー", src:"electronic money / e-money", pos:"noun", gender:null,
     note:"Suica, PASMO, PayPay are common types.\nでんしマネーではらう = to pay with e-money.",
     example:"A: でんしマネーでおねがいします。\nB: こちらにタッチしてください。",
     exampleSrc:"A: Electronic money, please.\nB: Please tap here.",
     funFact:"Japan pioneered でんしマネー with Suica (2001) and Edy (2001), years before Apple Pay. These IC cards use FeliCa technology developed by Sony. Today, PayPay (a QR code payment app) has become the dominant cashless method. Many vending machines accept Suica."},

    {type:"teach", trg:"わりかん", src:"splitting the bill", pos:"noun", gender:null,
     note:"わりかんにする = to split the bill.\nCommon among friends in Japan.",
     example:"A: わりかんにしましょう。\nB: いいですよ。ひとりいくらですか？",
     exampleSrc:"A: Let's split the bill.\nB: Sure. How much per person?",
     funFact:"わりかん (割勘) means 'divided payment.' It is very common in Japan, even on dates. The concept of べつべつで (separate checks) is also used. Some groups use apps to calculate exact わりかん amounts, including who had what."},

    {type:"teach", trg:"おかいけい", src:"the bill / check (at a restaurant)", pos:"noun", gender:null,
     note:"おかいけいおねがいします = Check, please.\nAlso: おかんじょう (more formal).",
     example:"A: すみません、おかいけいおねがいします。\nB: はい、ぜんぶでにせんえんです。",
     exampleSrc:"A: Excuse me, the check please.\nB: Yes, the total is 2000 yen.",
     funFact:"In Japan, you usually pay at the register near the exit, not at your table. Saying おかいけいおねがいします (or making a cross with your index fingers) signals you want to pay. The word かいけい (会計) literally means 'meeting and counting.'"},

    {type:"mc", q:"What is わりかん?", opts:["Splitting the bill","Paying with cash","Getting change","Using a credit card"], ans:"Splitting the bill",
     hint:"This practice is very common among friends in Japan when eating out together."},

    {type:"fb", s:"{1}でおねがいします。\n(Cash, please.)", a:"げんきん", opts:["げんきん","クレジットカード","でんしマネー","おつり"], sSrc:"Cash, please.",
     hint:"This word refers to physical money, bills and coins, as opposed to electronic payment."},

    {type:"match", pairs:[
      {trg:"おつり", src:"change"},
      {trg:"りょうしゅうしょ", src:"receipt"},
      {trg:"わりかん", src:"splitting the bill"},
      {trg:"おかいけい", src:"the bill"}
    ]},

    {type:"mc", q:"What should you ask before ordering at a small Japanese restaurant?", opts:["クレジットカードはつかえますか","おかいけいおねがいします","わりかんにしましょう","おつりはいりません"], ans:"クレジットカードはつかえますか",
     hint:"Many small Japanese restaurants only accept cash, so it is wise to check beforehand."}
  ]
};
export default BATCH9_L1;
