// Batch 8 – Unit 04 (A1.1 How Much?): Money & Transactions
const BATCH8_L1 = {
  id:"jav2_u04l_b8_1", title:"おかねとしはらい", icon:"💳", xp:15, board:true,
  steps:[
    {type:"intro", title:"おかねとしはらい",
     desc:"Learn vocabulary for handling money and making payments in Japan. From cash to cashless, these words cover real transactions you will encounter every day.",
     goals:["Name Japanese currency and coins","Handle payment methods","Use transaction-related phrases"]},

    {type:"teach", trg:"おかね", src:"money", pos:"noun", gender:null,
     note:"Kanji: お金. おかねをはらう = to pay money.\nおかねがない = I have no money.",
     example:"A: おかねはたりますか？\nB: はい、だいじょうぶです。",
     exampleSrc:"A: Do you have enough money?\nB: Yes, it is fine.",
     funFact:"おかね uses the honorific お prefix with かね (metal/money). Japanese culture considers talking about おかね directly to be slightly impolite. Handing money at stores is done via a small tray (おつりざら), never hand to hand, to show respect."},

    {type:"teach", trg:"おつり", src:"change (money returned)", pos:"noun", gender:null,
     note:"From つる/つり (to fish out). おつりをもらう = to receive change.\nおつりはいりません = keep the change.",
     example:"A: せんえんでおねがいします。\nB: おつりは200えんです。",
     exampleSrc:"A: Here is 1000 yen.\nB: Your change is 200 yen.",
     funFact:"In Japan, cashiers always count your おつり aloud and place it on a small tray. Tipping does not exist in Japan, so saying おつりはいりません (keep the change) is very rare and can confuse staff. The precision of Japanese cash handling is legendary."},

    {type:"teach", trg:"クレジットカード", src:"credit card", pos:"noun", gender:null,
     note:"Loanword. クレジットカードでおねがいします = credit card please.\nカードばらい = card payment.",
     example:"A: クレジットカードはつかえますか？\nB: はい、つかえます。",
     exampleSrc:"A: Can I use a credit card?\nB: Yes, you can.",
     funFact:"Japan was historically a cash-heavy society. Even in 2020, over 70% of transactions were cash. However, キャッシュレス (cashless) payments are rapidly growing thanks to QR codes, IC cards like Suica, and government incentives."},

    {type:"teach", trg:"げんきん", src:"cash", pos:"noun", gender:null,
     note:"Kanji: 現金. げんきんばらい = cash payment.\nげんきんのみ = cash only.",
     example:"A: げんきんでおねがいします。\nB: はい、1500えんです。",
     exampleSrc:"A: I will pay in cash.\nB: Yes, that is 1500 yen.",
     funFact:"Japan's love of げんきん is unique among developed countries. ATMs at convenience stores dispense crisp, clean bills. Japanese people often carry significant amounts of cash. The word げんきん also means 'calculating' when describing a person who only acts for personal benefit."},

    {type:"teach", trg:"りょうしゅうしょ", src:"receipt (formal/tax)", pos:"noun", gender:null,
     note:"Kanji: 領収書. Formal receipt for business expenses.\nりょうしゅうしょをください = receipt please.",
     example:"A: りょうしゅうしょをおねがいします。\nB: おなまえはどうしますか？",
     exampleSrc:"A: May I have a receipt?\nB: What name shall I put?",
     funFact:"Japan has two kinds of receipts: レシート (the register printout) and りょうしゅうしょ (a formal handwritten receipt for tax purposes). Business travelers always ask for りょうしゅうしょ because companies require them for expense reports. Restaurants and taxis readily provide them."},

    {type:"mc", q:"What does おつり mean?", opts:["Change (money returned)","Cash","Credit card","Receipt"], ans:"Change (money returned)",
     hint:"This is the m... you get back when you pay more than the price."},

    {type:"teach", trg:"わりびき", src:"discount", pos:"noun", gender:null,
     note:"Kanji: 割引. にわりびき = 20% off.\nがくせいわりびき = student discount.",
     example:"A: がくせいわりびきはありますか？\nB: はい、にわりびきになります。",
     exampleSrc:"A: Is there a student discount?\nB: Yes, it will be 20% off.",
     funFact:"Japanese わりびき uses the counter わり (10%). いちわり = 10%, にわり = 20%, さんわり = 30%. Department stores have seasonal セール (sales) with big わりびき. はんがく (half price) stickers appear on supermarket food near closing time."},

    {type:"teach", trg:"ぜいこみ", src:"tax included", pos:"noun", gender:null,
     note:"Kanji: 税込み. ぜいぬき = before tax.\nThe consumption tax in Japan is 10% (8% for food).",
     example:"A: このねだんはぜいこみですか？\nB: はい、ぜいこみです。",
     exampleSrc:"A: Is this price tax included?\nB: Yes, tax is included.",
     funFact:"Japan's consumption tax (しょうひぜい) is 10% for most items but 8% for food and beverages taken away. This double rate system confuses even Japanese people. Since 2021, stores must display ぜいこみ prices, ending years of confusing ぜいぬき displays."},

    {type:"teach", trg:"おさいふ", src:"wallet / purse", pos:"noun", gender:null,
     note:"Polite form of さいふ. Kanji: 財布.\nながさいふ = long wallet. おりたたみさいふ = folding wallet.",
     example:"A: おさいふをわすれました。\nB: たいへんですね。かしましょうか？",
     exampleSrc:"A: I forgot my wallet.\nB: That is tough. Shall I lend you some?",
     funFact:"Japanese おさいふ culture is specific: people prefer ながさいふ (long wallets) to avoid folding bills, because bent bills are considered disrespectful to money. Some believe a yellow おさいふ brings wealth. Spring (はる) sounds like はる (to swell), so buying a wallet in spring means it will be full."},

    {type:"teach", trg:"こうざ", src:"bank account", pos:"noun", gender:null,
     note:"Kanji: 口座. こうざをひらく = to open an account.\nぎんこうこうざ = bank account.",
     example:"A: にほんでこうざをひらきたいです。\nB: パスポートとざいりゅうカードがひつようです。",
     exampleSrc:"A: I want to open a bank account in Japan.\nB: You need a passport and residence card.",
     funFact:"Opening a ぎんこうこうざ in Japan requires a resident address and usually a phone number. Many banks still use paper passbooks (つうちょう) that get stamped at ATMs. Japan's ゆうちょぎんこう (Japan Post Bank) is the largest bank by deposits in the world."},

    {type:"teach", trg:"にせんえんさつ", src:"2000 yen bill", pos:"noun", gender:null,
     note:"A rare denomination. Most Japanese have never used one.\nさつ = bill/banknote.",
     example:"A: にせんえんさつをみたことがありますか？\nB: いいえ、いちどもありません。",
     exampleSrc:"A: Have you ever seen a 2000 yen bill?\nB: No, not even once.",
     funFact:"The にせんえんさつ was issued in 2000 to commemorate the G8 summit in Okinawa. It features Okinawa's しゅれいもん gate. Most vending machines and ATMs do not accept it. It circulates mainly in Okinawa. Finding one elsewhere is considered lucky."},

    {type:"fb", s:"{1}でおねがいします。\n(Credit card, please.)", a:"クレジットカード", opts:["クレジットカード","げんきん","おつり","おかね"], sSrc:"Credit card, please.",
     hint:"This loanword describes a plastic payment card for purchases."},

    {type:"teach", trg:"ポイントカード", src:"loyalty card / point card", pos:"noun", gender:null,
     note:"Loanword. ポイントカードはおもちですか = Do you have a point card?\nHeard at every register.",
     example:"A: ポイントカードはおもちですか？\nB: はい、Tカードです。",
     exampleSrc:"A: Do you have a point card?\nB: Yes, here is my T-Card.",
     funFact:"ポイントカードはおもちですか is the phrase you hear most often at Japanese registers. Japan has an enormous ポイント culture: T-Point, Rakuten Points, dポイント, Ponta. Some people have ten or more cards. ポイントかつどう (point hunting) is a serious hobby."},

    {type:"teach", trg:"ふりこみ", src:"bank transfer", pos:"noun", gender:null,
     note:"Kanji: 振込. ふりこみする = to make a bank transfer.\nATM or online banking.",
     example:"A: やちんはふりこみでおねがいします。\nB: まいつきなんにちまでですか？",
     exampleSrc:"A: Please pay the rent by bank transfer.\nB: By what date each month?",
     funFact:"ふりこみ is how most bills are paid in Japan: rent, utilities, tuition. Convenience store ATMs handle ふりこみ 24 hours a day. Unfortunately, ふりこみさぎ (transfer scams) targeting elderly people are a major social problem in Japan."},

    {type:"match", pairs:[{trg:"おかね",src:"money"},{trg:"おつり",src:"change"},{trg:"げんきん",src:"cash"},{trg:"わりびき",src:"discount"},{trg:"ぜいこみ",src:"tax included"}],
     hint:"Match each money-related term with its English meaning."},

    {type:"mc", q:"What is りょうしゅうしょ?", opts:["A formal receipt for tax purposes","A bank account","A wallet","A credit card bill"], ans:"A formal receipt for tax purposes",
     hint:"Business travelers in Japan always request this document for expense reports."},

    {type:"fb", s:"がくせい{1}はありますか？\n(Is there a student discount?)", a:"わりびき", opts:["わりびき","ぜいこみ","ポイント","おつり"], sSrc:"Is there a student discount?",
     hint:"This word means a reduction in price."},

    {type:"mc", q:"Why is the にせんえんさつ (2000 yen bill) special?", opts:["It is extremely rare and most people have never used one","It is the most common bill in Japan","It was discontinued in 2010","It features Mount Fuji"], ans:"It is extremely rare and most people have never used one",
     hint:"This bill was issued for a special occasion and mainly circulates in one region."}
  ]
};
export default BATCH8_L1;
