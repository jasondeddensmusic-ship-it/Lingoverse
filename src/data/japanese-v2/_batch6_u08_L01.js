// Batch 6 – Unit 08 (A1.2 Places & Location): At the Post Office & Bank
const BATCH6_L1 = {
  id:"jav2_u08l_b6_1", title:"ゆうびんきょくとぎんこう", icon:"🏦", xp:15, board:true,
  steps:[
    {type:"intro", title:"ゆうびんきょくとぎんこう",
     desc:"Learn essential vocabulary for handling errands at the post office and bank. These are common public service locations that every resident in Japan needs to navigate.",
     goals:["Handle basic transactions at post offices and banks","Use verbs: おくる, うけとる, あずける, おろす","Name common documents and services"]},

    {type:"teach", trg:"ゆうびんきょく", src:"post office", pos:"noun", gender:null,
     note:"Kanji: 郵便局. ゆうびん = postal mail. きょく = office/bureau.\nJapan Post is also a bank.",
     example:"A: ゆうびんきょくはどこですか？\nB: えきのちかくにあります。",
     exampleSrc:"A: Where is the post office?\nB: It is near the station.",
     funFact:"Japan Post (日本郵便) is one of the world's largest financial institutions. Besides mail, it offers banking (ゆうちょ銀行) and insurance. The red 〒 symbol marks every post office. Japan has about 24,000 post offices, reaching even remote islands."},

    {type:"teach", trg:"ぎんこう", src:"bank", pos:"noun", gender:null,
     note:"Kanji: 銀行. ATM = エーティーエム.\nぎんこういん = bank employee.",
     example:"A: ぎんこうはなんじにあきますか？\nB: くじからさんじまでです。",
     exampleSrc:"A: What time does the bank open?\nB: From 9 to 3.",
     funFact:"Japanese banks typically close at 3 PM, much earlier than in Western countries. However, ATMs are available at convenience stores 24/7. The word 銀行 uses 銀 (silver) and 行 (go/business), reflecting the historical role of silver currency in trade."},

    {type:"teach", trg:"おくる", src:"to send", pos:"verb", gender:null,
     note:"Group 1 verb. てがみをおくる = to send a letter.\nKanji: 送る. Also: to see someone off.",
     example:"A: にほんにこづつみをおくりたいです。\nB: ゆうびんきょくでおくれますよ。",
     exampleSrc:"A: I want to send a package to Japan.\nB: You can send it at the post office.",
     funFact:"おくる has two key meanings: to send (物を送る) and to see someone off (人を送る). At Japanese airports and stations, sending off ceremonies are common. The word おくりもの (送り物, a gift/present) connects sending with generosity."},

    {type:"teach", trg:"うけとる", src:"to receive / to accept", pos:"verb", gender:null,
     note:"Group 1 verb. にもつをうけとる = to receive a package.\nKanji: 受け取る.",
     example:"A: にもつをうけとりました。\nB: サインをおねがいします。",
     exampleSrc:"A: I received the package.\nB: Please sign here.",
     funFact:"うけとる combines うける (to receive) and とる (to take). In Japanese post offices, you may need to show ID (みぶんしょうめいしょ) to receive packages. Japan's delivery services (ヤマト運輸, 佐川急便) allow re-delivery scheduling by phone or app."},

    {type:"teach", trg:"きって", src:"postage stamp", pos:"noun", gender:null,
     note:"Kanji: 切手. きってをはる = to stick a stamp on.\nきってしゅうしゅう = stamp collecting.",
     example:"A: はちじゅうえんのきってをにまいください。\nB: はい、ひゃくろくじゅうえんです。",
     exampleSrc:"A: Two 80-yen stamps, please.\nB: That is 160 yen.",
     funFact:"Japan issues beautiful commemorative stamps (きねんきって) featuring anime characters, seasonal flowers, and cultural sites. Stamp collecting is a popular hobby. The cheapest domestic letter stamp costs 84 yen. Japan was the first Asian country to issue stamps (1871)."},

    {type:"mc", q:"おくる means:", opts:["To send","To receive","To buy","To open"], ans:"To send",
     hint:"This verb is used for sending letters, packages, and emails."},

    {type:"teach", trg:"あずける", src:"to deposit / to entrust", pos:"verb", gender:null,
     note:"Group 2 verb. おかねをあずける = to deposit money.\nKanji: 預ける. にもつをあずける = to check luggage.",
     example:"A: つうちょうにおかねをあずけたいです。\nB: こちらのまどぐちへどうぞ。",
     exampleSrc:"A: I would like to deposit money in my passbook.\nB: Please come to this window.",
     funFact:"あずける covers both financial deposits and entrusting objects. At stations, コインロッカー (coin lockers) let you あずける luggage. The kanji 預 combines 予 (in advance) and 頁 (head), suggesting planning ahead by storing something safely."},

    {type:"teach", trg:"おろす", src:"to withdraw (money) / to take down", pos:"verb", gender:null,
     note:"Group 1 verb. おかねをおろす = to withdraw money.\nKanji: 下ろす/降ろす.",
     example:"A: ATMでおかねをおろしてきます。\nB: にまんえんおろしてきてください。",
     exampleSrc:"A: I will go withdraw money at the ATM.\nB: Please withdraw 20,000 yen.",
     funFact:"おろす literally means 'to bring down.' Money comes 'down' from the account. The same verb means to grate (daikon をおろす) and to unload (にもつをおろす). Convenience store ATMs charge small fees (てすうりょう) for after-hours withdrawals."},

    {type:"teach", trg:"こづつみ", src:"package / parcel", pos:"noun", gender:null,
     note:"Kanji: 小包. こ = small, つつみ = wrapping.\nこくさいこづつみ = international parcel.",
     example:"A: こづつみをおくりたいのですが。\nB: おもさをはかりますね。",
     exampleSrc:"A: I would like to send a parcel.\nB: Let me weigh it.",
     funFact:"Japanese parcel wrapping (つつみ) is an art. Department stores wrap gifts in beautiful paper with precise folds. Even post office parcels are handled with care. Japan's courier services are famous for delivering packages gently and on time, sometimes within hours."},

    {type:"teach", trg:"まどぐち", src:"service window / counter", pos:"noun", gender:null,
     note:"Kanji: 窓口. まど = window, ぐち = opening.\nUsed at banks, post offices, and government offices.",
     example:"A: まどぐちでてつづきをしてください。\nB: なんばんのまどぐちですか？",
     exampleSrc:"A: Please complete the procedure at the window.\nB: Which window number?",
     funFact:"Japanese service counters use numbered windows (いちばんまどぐち, にばんまどぐち). You take a numbered ticket (ばんごうふだ) and wait for your number to be called. This orderly queuing system reflects Japanese love of organization."},

    {type:"fb", s:"ATMでおかねを{1}てきます。\n(I will go withdraw money at the ATM.)", a:"おろし", opts:["おろし","あずけ","おくっ","うけとっ"], sSrc:"I will go withdraw money at the ATM.",
     hint:"The て-form of the verb meaning to withdraw money."},

    {type:"teach", trg:"つうちょう", src:"bankbook / passbook", pos:"noun", gender:null,
     note:"Kanji: 通帳. Used with traditional bank accounts.\nつうちょうをきちょうする = to update the passbook.",
     example:"A: つうちょうをもってきてください。\nB: はい、もっています。",
     exampleSrc:"A: Please bring your bankbook.\nB: Yes, I have it.",
     funFact:"Japanese bank passbooks (通帳) are physical booklets that record transactions. You insert them into ATMs to print updated records. While digital banking grows, many Japanese still prefer the tangible record of a つうちょう. Each major bank has its own design."},

    {type:"teach", trg:"はんこ", src:"personal seal / stamp", pos:"noun", gender:null,
     note:"Also いんかん. Used instead of signatures in Japan.\nRegistered seals: じついん.",
     example:"A: ここにはんこをおしてください。\nB: はい、こちらでいいですか？",
     exampleSrc:"A: Please stamp your seal here.\nB: Okay, is this spot correct?",
     funFact:"はんこ (判子) culture is unique to East Asia. In Japan, your registered seal (実印, じついん) has legal power equal to a signature. Banks, real estate, and contracts require はんこ. Each seal is unique, carved from wood, stone, or horn. Cheap ones are available at 100-yen shops."},

    {type:"mc", q:"あずける means:", opts:["To deposit or entrust","To withdraw","To send","To stamp"], ans:"To deposit or entrust",
     hint:"This verb describes putting money into an account or leaving something in someone's care."},

    {type:"match", pairs:[
      {trg:"ゆうびんきょく", src:"post office"},
      {trg:"ぎんこう", src:"bank"},
      {trg:"きって", src:"stamp"},
      {trg:"こづつみ", src:"package"},
      {trg:"はんこ", src:"personal seal"}
    ]},

    {type:"fb", s:"はちじゅうえんの{1}をにまいください。\n(Two 80-yen stamps, please.)", a:"きって", opts:["きって","はがき","ふうとう","きっぷ"], sSrc:"Two 80-yen stamps, please.",
     hint:"The word for postage stamps, used on letters and parcels."},

    {type:"mc", q:"A つうちょう is:", opts:["A physical bankbook that records transactions","A credit card","A train ticket","An ID card"], ans:"A physical bankbook that records transactions",
     hint:"This item is inserted into ATMs to print your banking r...."}
  ]
};
export default BATCH6_L1;
