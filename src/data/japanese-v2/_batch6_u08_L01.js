// Batch 6 – Unit 08 (A1.2 Places & Location): At the Post Office & Bank
const BATCH6_L1 = {
  id:"jav2_u08l_b6_1", title:"郵便局(ゆうびんきょく)と銀行(ぎんこう)", icon:"🏦", xp:15, board:true,
  steps:[
    {type:"intro", title:"郵便局(ゆうびんきょく)と銀行(ぎんこう)",
     desc:"Learn essential vocabulary for handling errands at the post office and bank. These are common public service locations that every resident in Japan needs to navigate.",
     goals:["Handle basic transactions at post offices and banks","Use verbs: 送(おく)る, 受(う)け取(と)る, 預(あず)ける, 降(お)ろす","Name common documents and services"]},

    {type:"teach", trg:"郵便局(ゆうびんきょく)", src:"post office", pos:"noun", gender:null,
     note:"Kanji: 郵便局. 郵便(ゆうびん) = postal mail. 局(きょく) = office/bureau.\nJapan Post is also a bank.",
     example:"A: 郵便局(ゆうびんきょく)はどこですか？\nB: 駅(えき)の近(ちか)くにあります。",
     exampleSrc:"A: Where is the post office?\nB: It is near the station.",
     funFact:"Japan Post (日本郵便(にほんゆうびん)) is one of the world's largest financial institutions. Besides mail, it offers banking (ゆうちょ銀行(ぎんこう)) and insurance. The red 〒 symbol marks every post office. Japan has about 24,000 post offices, reaching even remote islands."},

    {type:"teach", trg:"銀行(ぎんこう)", src:"bank", pos:"noun", gender:null,
     note:"Kanji: 銀行. ATM = エーティーエム.\n銀行員(ぎんこういん) = bank employee.",
     example:"A: 銀行(ぎんこう)は何時(なんじ)に開(あ)きますか？\nB: 9時(くじ)から3時(さんじ)までです。",
     exampleSrc:"A: What time does the bank open?\nB: From 9 to 3.",
     funFact:"Japanese banks typically close at 3 PM, much earlier than in Western countries. However, ATMs are available at convenience stores 24/7. The word 銀行(ぎんこう) uses 銀(ぎん) (silver) and 行(こう) (go/business), reflecting the historical role of silver currency in trade."},

    {type:"teach", trg:"送(おく)る", src:"to send", pos:"verb", gender:null,
     note:"Group 1 verb. 手紙(てがみ)を送(おく)る = to send a letter.\nKanji: 送る. Also: to see someone off.",
     example:"A: 日本(にほん)に小包(こづつみ)を送(おく)りたいです。\nB: 郵便局(ゆうびんきょく)で送(おく)れますよ。",
     exampleSrc:"A: I want to send a package to Japan.\nB: You can send it at the post office.",
     funFact:"送(おく)る has two key meanings: to send (物(もの)を送(おく)る) and to see someone off (人(ひと)を送(おく)る). At Japanese airports and stations, sending off ceremonies are common. The word 贈(おく)り物(もの) (a gift/present) connects sending with generosity."},

    {type:"teach", trg:"受(う)け取(と)る", src:"to receive / to accept", pos:"verb", gender:null,
     note:"Group 1 verb. 荷物(にもつ)を受(う)け取(と)る = to receive a package.\nKanji: 受け取る.",
     example:"A: 荷物(にもつ)を受(う)け取(と)りました。\nB: サインをお願(ねが)いします。",
     exampleSrc:"A: I received the package.\nB: Please sign here.",
     funFact:"受(う)け取(と)る combines 受(う)ける (to receive) and 取(と)る (to take). In Japanese post offices, you may need to show ID (身分証明書(みぶんしょうめいしょ)) to receive packages. Japan's delivery services (ヤマト運輸(うんゆ), 佐川急便(さがわきゅうびん)) allow re-delivery scheduling by phone or app."},

    {type:"teach", trg:"切手(きって)", src:"postage stamp", pos:"noun", gender:null,
     note:"Kanji: 切手. 切手(きって)を貼(は)る = to stick a stamp on.\n切手(きって)収集(しゅうしゅう) = stamp collecting.",
     example:"A: 80円(えん)の切手(きって)を2枚(にまい)ください。\nB: はい、160円(えん)です。",
     exampleSrc:"A: Two 80-yen stamps, please.\nB: That is 160 yen.",
     funFact:"Japan issues beautiful commemorative stamps (記念(きねん)切手(きって)) featuring anime characters, seasonal flowers, and cultural sites. Stamp collecting is a popular hobby. The cheapest domestic letter stamp costs 84 yen. Japan was the first Asian country to issue stamps (1871)."},

    {type:"mc", q:"送(おく)る means:", opts:["To send","To receive","To buy","To open"], ans:"To send",
     hint:"This verb is used for sending letters, packages, and emails."},

    {type:"teach", trg:"預(あず)ける", src:"to deposit / to entrust", pos:"verb", gender:null,
     note:"Group 2 verb. お金(かね)を預(あず)ける = to deposit money.\nKanji: 預ける. 荷物(にもつ)を預(あず)ける = to check luggage.",
     example:"A: 通帳(つうちょう)にお金(かね)を預(あず)けたいです。\nB: こちらの窓口(まどぐち)へどうぞ。",
     exampleSrc:"A: I would like to deposit money in my passbook.\nB: Please come to this window.",
     funFact:"預(あず)ける covers both financial deposits and entrusting objects. At stations, コインロッカー (coin lockers) let you 預(あず)ける luggage. The kanji 預(あず)ける combines 予 (in advance) and 頁 (head), suggesting planning ahead by storing something safely."},

    {type:"teach", trg:"下(お)ろす", src:"to withdraw (money) / to take down", pos:"verb", gender:null,
     note:"Group 1 verb. お金(かね)を下(お)ろす = to withdraw money.\nKanji: 下ろす/降ろす.",
     example:"A: ATMでお金(かね)を下(お)ろしてきます。\nB: 2万円(にまんえん)下(お)ろしてきてください。",
     exampleSrc:"A: I will go withdraw money at the ATM.\nB: Please withdraw 20,000 yen.",
     funFact:"下(お)ろす literally means 'to bring down.' Money comes 'down' from the account. The same verb means to grate (大根(だいこん)を下(お)ろす) and to unload (荷物(にもつ)を下(お)ろす). Convenience store ATMs charge small fees (手数料(てすうりょう)) for after-hours withdrawals."},

    {type:"teach", trg:"小包(こづつみ)", src:"package / parcel", pos:"noun", gender:null,
     note:"Kanji: 小包. 小(こ) = small, 包(つつみ) = wrapping.\n国際(こくさい)小包(こづつみ) = international parcel.",
     example:"A: 小包(こづつみ)を送(おく)りたいのですが。\nB: 重(おも)さを計(はか)りますね。",
     exampleSrc:"A: I would like to send a parcel.\nB: Let me weigh it.",
     funFact:"Japanese parcel wrapping (包(つつ)み) is an art. Department stores wrap gifts in beautiful paper with precise folds. Even post office parcels are handled with care. Japan's courier services are famous for delivering packages gently and on time, sometimes within hours."},

    {type:"teach", trg:"窓口(まどぐち)", src:"service window / counter", pos:"noun", gender:null,
     note:"Kanji: 窓口. 窓(まど) = window, 口(ぐち) = opening.\nUsed at banks, post offices, and government offices.",
     example:"A: 窓口(まどぐち)で手続(てつづ)きをしてください。\nB: 何番(なんばん)の窓口(まどぐち)ですか？",
     exampleSrc:"A: Please complete the procedure at the window.\nB: Which window number?",
     funFact:"Japanese service counters use numbered windows (一番(いちばん)窓口(まどぐち), 二番(にばん)窓口(まどぐち)). You take a numbered ticket (番号(ばんごう)札(ふだ)) and wait for your number to be called. This orderly queuing system reflects Japanese love of organization."},

    {type:"fb", s:"ATMでお金(かね)を{1}てきます。\n(I will go withdraw money at the ATM.)", a:"下(お)ろし", opts:["下(お)ろし","預(あず)け","送(おく)っ","受(う)け取(と)っ"], sSrc:"I will go withdraw money at the ATM.",
     hint:"The て-form of the verb meaning to withdraw money."},

    {type:"teach", trg:"通帳(つうちょう)", src:"bankbook / passbook", pos:"noun", gender:null,
     note:"Kanji: 通帳. Used with traditional bank accounts.\n通帳(つうちょう)を記帳(きちょう)する = to update the passbook.",
     example:"A: 通帳(つうちょう)を持(も)ってきてください。\nB: はい、持(も)っています。",
     exampleSrc:"A: Please bring your bankbook.\nB: Yes, I have it.",
     funFact:"Japanese bank passbooks (通帳(つうちょう)) are physical booklets that record transactions. You insert them into ATMs to print updated records. While digital banking grows, many Japanese still prefer the tangible record of a 通帳(つうちょう). Each major bank has its own design."},

    {type:"teach", trg:"はんこ", src:"personal seal / stamp", pos:"noun", gender:null,
     note:"Also 印鑑(いんかん). Used instead of signatures in Japan.\nRegistered seals: 実印(じついん).",
     example:"A: ここにはんこを押(お)してください。\nB: はい、こちらでいいですか？",
     exampleSrc:"A: Please stamp your seal here.\nB: Okay, is this spot correct?",
     funFact:"はんこ (判子(はんこ)) culture is unique to East Asia. In Japan, your registered seal (実印(じついん)) has legal power equal to a signature. Banks, real estate, and contracts require はんこ. Each seal is unique, carved from wood, stone, or horn. Cheap ones are available at 100-yen shops."},

    {type:"mc", q:"預(あず)ける means:", opts:["To deposit or entrust","To withdraw","To send","To stamp"], ans:"To deposit or entrust",
     hint:"This verb describes putting money into an account or leaving something in someone's care."},

    {type:"match", pairs:[
      {trg:"郵便局(ゆうびんきょく)", src:"post office"},
      {trg:"銀行(ぎんこう)", src:"bank"},
      {trg:"切手(きって)", src:"stamp"},
      {trg:"小包(こづつみ)", src:"package"},
      {trg:"はんこ", src:"personal seal"}
    ]},

    {type:"fb", s:"80円(えん)の{1}を2枚(にまい)ください。\n(Two 80-yen stamps, please.)", a:"切手(きって)", opts:["切手(きって)","はがき","封筒(ふうとう)","切符(きっぷ)"], sSrc:"Two 80-yen stamps, please.",
     hint:"The word for postage stamps, used on letters and parcels."},

    {type:"mc", q:"A 通帳(つうちょう) is:", opts:["A physical bankbook that records transactions","A credit card","A train ticket","An ID card"], ans:"A physical bankbook that records transactions",
     hint:"This item is inserted into ATMs to print your banking r...."}
  ,{type:"match",pairs:[{trg:"送(おく)る",src:"to send"},{trg:"受(う)け取(と)る",src:"to receive / to accept"},{trg:"預(あず)ける",src:"to deposit / to entrust"},{trg:"下(お)ろす",src:"to withdraw (money) / to take down"},{trg:"窓口(まどぐち)",src:"service window / counter"},{trg:"通帳(つうちょう)",src:"bankbook / passbook"}]}]
};
export default BATCH6_L1;
