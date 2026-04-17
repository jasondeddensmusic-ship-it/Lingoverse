// Batch 8 – Unit 04 (A1.1 How Much?): Money & Transactions
const BATCH8_L1 = {
  id:"jav2_u04l_b8_1", title:"お金(かね)と支払(しはら)い", icon:"💳", xp:15, board:true,
  steps:[
    {type:"intro", title:"お金(かね)と支払(しはら)い",
     desc:"Learn vocabulary for handling money and making payments in Japan. From cash to cashless, these words cover real transactions you will encounter every day.",
     goals:["Name Japanese currency and coins","Handle payment methods","Use transaction-related phrases"]},

    {type:"teach", trg:"お金(かね)", src:"money", pos:"noun", gender:null,
     note:"Kanji: お金. お金(かね)をはらう = to pay money.\nお金(かね)がない = I have no money.",
     example:"A: お金(かね)はたりますか？\nB: はい、だいじょうぶです。",
     exampleSrc:"A: Do you have enough money?\nB: Yes, it is fine.",
     funFact:"お金(かね) uses the honorific お prefix with 金(かね) (metal/money). Japanese culture considers talking about お金(かね) directly to be slightly impolite. Handing money at stores is done via a small tray (おつりざら), never hand to hand, to show respect."},

    {type:"teach", trg:"おつり", src:"change (money returned)", pos:"noun", gender:null,
     note:"From つる/つり (to fish out). おつりをもらう = to receive change.\nおつりはいりません = keep the change.",
     example:"A: 千円(せんえん)でおねがいします。\nB: おつりは200円(えん)です。",
     exampleSrc:"A: Here is 1000 yen.\nB: Your change is 200 yen.",
     funFact:"In Japan, cashiers always count your おつり aloud and place it on a small tray. Tipping does not exist in Japan, so saying おつりはいりません (keep the change) is very rare and can confuse staff. The precision of Japanese cash handling is legendary."},

    {type:"teach", trg:"クレジットカード", src:"credit card", pos:"noun", gender:null,
     note:"Loanword. クレジットカードでおねがいします = credit card please.\nカード払(ばら)い = card payment.",
     example:"A: クレジットカードは使(つか)えますか？\nB: はい、使(つか)えます。",
     exampleSrc:"A: Can I use a credit card?\nB: Yes, you can.",
     funFact:"Japan was historically a cash-heavy society. Even in 2020, over 70% of transactions were cash. However、キャッシュレス (cashless) payments are rapidly growing thanks to QR codes, IC cards like Suica, and government incentives."},

    {type:"teach", trg:"現金(げんきん)", src:"cash", pos:"noun", gender:null,
     note:"Kanji: 現金. 現金(げんきん)払(ばら)い = cash payment.\n現金(げんきん)のみ = cash only.",
     example:"A: 現金(げんきん)でおねがいします。\nB: はい、1500円(えん)です。",
     exampleSrc:"A: I will pay in cash.\nB: Yes, that is 1500 yen.",
     funFact:"Japan's love of 現金(げんきん) is unique among developed countries. ATMs at convenience stores dispense crisp, clean bills. Japanese people often carry significant amounts of cash. The word 現金(げんきん) also means 'calculating' when describing a person who only acts for personal benefit."},

    {type:"teach", trg:"領収書(りょうしゅうしょ)", src:"receipt (formal/tax)", pos:"noun", gender:null,
     note:"Kanji: 領収書. Formal receipt for business expenses.\n領収書(りょうしゅうしょ)をください = receipt please.",
     example:"A: 領収書(りょうしゅうしょ)をおねがいします。\nB: お名前(なまえ)はどうしますか？",
     exampleSrc:"A: May I have a receipt?\nB: What name shall I put?",
     funFact:"Japan has two kinds of receipts: レシート (the register printout) and 領収書(りょうしゅうしょ) (a formal handwritten receipt for tax purposes). Business travelers always ask for 領収書(りょうしゅうしょ) because companies require them for expense reports. Restaurants and taxis readily provide them."},

    {type:"mc", q:"What does おつり mean?", opts:["Change (money returned)","Cash","Credit card","Receipt"], ans:"Change (money returned)",
     hint:"This is the m... you get back when you pay more than the price."},

    {type:"teach", trg:"割引(わりびき)", src:"discount", pos:"noun", gender:null,
     note:"Kanji: 割引. 二割引(にわりびき) = 20% off.\n学生(がくせい)割引(わりびき) = student discount.",
     example:"A: 学生(がくせい)割引(わりびき)はありますか？\nB: はい、二割引(にわりびき)になります。",
     exampleSrc:"A: Is there a student discount?\nB: Yes, it will be 20% off.",
     funFact:"Japanese 割引(わりびき) uses the counter 割(わり) (10%). 一割(いちわり) = 10%, 二割(にわり) = 20%, 三割(さんわり) = 30%. Department stores have seasonal セール (sales) with big 割引(わりびき). 半額(はんがく) (half price) stickers appear on supermarket food near closing time."},

    {type:"teach", trg:"税込(ぜいこ)み", src:"tax included", pos:"noun", gender:null,
     note:"Kanji: 税込み. 税抜(ぜいぬ)き = before tax.\nThe consumption tax in Japan is 10% (8% for food).",
     example:"A: この値段(ねだん)は税込(ぜいこ)みですか？\nB: はい、税込(ぜいこ)みです。",
     exampleSrc:"A: Is this price tax included?\nB: Yes, tax is included.",
     funFact:"Japan's consumption tax (消費税(しょうひぜい)) is 10% for most items but 8% for food and beverages taken away. This double rate system confuses even Japanese people. Since 2021, stores must display 税込(ぜいこ)み prices, ending years of confusing 税抜(ぜいぬ)き displays."},

    {type:"teach", trg:"お財布(さいふ)", src:"wallet / purse", pos:"noun", gender:null,
     note:"Polite form of 財布(さいふ). Kanji: 財布.\n長財布(ながさいふ) = long wallet. 折(お)りたたみ財布(さいふ) = folding wallet.",
     example:"A: お財布(さいふ)を忘(わす)れました。\nB: たいへんですね。貸(か)しましょうか？",
     exampleSrc:"A: I forgot my wallet.\nB: That is tough. Shall I lend you some?",
     funFact:"Japanese お財布(さいふ) culture is specific: people prefer 長財布(ながさいふ) (long wallets) to avoid folding bills, because bent bills are considered disrespectful to money. Some believe a yellow お財布(さいふ) brings wealth. 春(はる) (spring) sounds like はる (to swell), so buying a wallet in spring means it will be full."},

    {type:"teach", trg:"口座(こうざ)", src:"bank account", pos:"noun", gender:null,
     note:"Kanji: 口座. 口座(こうざ)をひらく = to open an account.\n銀行(ぎんこう)口座(こうざ) = bank account.",
     example:"A: 日本(にほん)で口座(こうざ)をひらきたいです。\nB: パスポートと在留(ざいりゅう)カードが必要(ひつよう)です。",
     exampleSrc:"A: I want to open a bank account in Japan.\nB: You need a passport and residence card.",
     funFact:"Opening a 銀行(ぎんこう)口座(こうざ) in Japan requires a resident address and usually a phone number. Many banks still use paper passbooks (通帳(つうちょう)) that get stamped at ATMs. Japan's 郵便局(ゆうびんきょく)銀行(ぎんこう) (Japan Post Bank) is the largest bank by deposits in the world."},

    {type:"teach", trg:"二千円(にせんえん)札(さつ)", src:"2000 yen bill", pos:"noun", gender:null,
     note:"A rare denomination. Most Japanese have never used one.\n札(さつ) = bill/banknote.",
     example:"A: 二千円(にせんえん)札(さつ)を見(み)たことがありますか？\nB: いいえ、一度(いちど)もありません。",
     exampleSrc:"A: Have you ever seen a 2000 yen bill?\nB: No, not even once.",
     funFact:"The 二千円(にせんえん)札(さつ) was issued in 2000 to commemorate the G8 summit in Okinawa. It features Okinawa's 守礼門(しゅれいもん) gate. Most vending machines and ATMs do not accept it. It circulates mainly in Okinawa. Finding one elsewhere is considered lucky."},

    {type:"fb", s:"{1}でおねがいします。\n(Credit card, please.)", a:"クレジットカード", opts:["クレジットカード","現金(げんきん)","おつり","お金(かね)"], sSrc:"Credit card, please.",
     hint:"This loanword describes a plastic payment card for purchases."},

    {type:"teach", trg:"ポイントカード", src:"loyalty card / point card", pos:"noun", gender:null,
     note:"Loanword. ポイントカードはおもちですか = Do you have a point card?\nHeard at every register.",
     example:"A: ポイントカードはおもちですか？\nB: はい、Tカードです。",
     exampleSrc:"A: Do you have a point card?\nB: Yes, here is my T-Card.",
     funFact:"ポイントカードはおもちですか is the phrase you hear most often at Japanese registers. Japan has an enormous ポイント culture: T-Point, Rakuten Points, dポイント, Ponta. Some people have ten or more cards. ポイント活動(かつどう) (point hunting) is a serious hobby."},

    {type:"teach", trg:"振込(ふりこみ)", src:"bank transfer", pos:"noun", gender:null,
     note:"Kanji: 振込. 振込(ふりこみ)する = to make a bank transfer.\nATM or online banking.",
     example:"A: 家賃(やちん)は振込(ふりこみ)でおねがいします。\nB: 毎月(まいつき)何日(なんにち)までですか？",
     exampleSrc:"A: Please pay the rent by bank transfer.\nB: By what date each month?",
     funFact:"振込(ふりこみ) is how most bills are paid in Japan: rent, utilities, tuition. Convenience store ATMs handle 振込(ふりこみ) 24 hours a day. Unfortunately、振込(ふりこみ)詐欺(さぎ) (transfer scams) targeting elderly people are a major social problem in Japan."},

    {type:"match", pairs:[{trg:"お金(かね)",src:"money"},{trg:"おつり",src:"change"},{trg:"現金(げんきん)",src:"cash"},{trg:"割引(わりびき)",src:"discount"},{trg:"税込(ぜいこ)み",src:"tax included"}],
     hint:"Match each money-related term with its English meaning."},

    {type:"mc", q:"What is 領収書(りょうしゅうしょ)?", opts:["A formal receipt for tax purposes","A bank account","A wallet","A credit card bill"], ans:"A formal receipt for tax purposes",
     hint:"Business travelers in Japan always request this document for expense reports."},

    {type:"fb", s:"学生(がくせい){1}はありますか？\n(Is there a student discount?)", a:"割引(わりびき)", opts:["割引(わりびき)","税込(ぜいこ)み","ポイント","おつり"], sSrc:"Is there a student discount?",
     hint:"This word means a reduction in price."},

    {type:"mc", q:"Why is the 二千円(にせんえん)札(さつ) (2000 yen bill) special?", opts:["It is extremely rare and most people have never used one","It is the most common bill in Japan","It was discontinued in 2010","It features Mount Fuji"], ans:"It is extremely rare and most people have never used one",
     hint:"This bill was issued for a special occasion and mainly circulates in one region."}
  ]
};
export default BATCH8_L1;
