// Unit 04 Expansion L04 — Shopping Phrases & At the Store
const LESSON_4 = {
  id:"jav2_u4l4", title:"おかいものフレーズ", icon:"🏬", xp:15, board:true,
  steps:[
    {type:"intro", title:"おかいものフレーズ",
     desc:"Learn the essential phrases you hear and say while shopping in Japan. From what shop clerks say to how to ask for sizes and colors, these phrases will make shopping easy.",
     goals:["Understand common shop clerk phrases","Ask for sizes, colors, and different items","Navigate a real Japanese shopping experience"]},

    {type:"teach", trg:"いらっしゃいませ", src:"welcome (to our shop)", pos:"intj", gender:null,
     note:"Said by shop staff when customers enter. You do NOT need to respond.",
     example:"A: いらっしゃいませ！なにをおさがしですか？\nB: シャツをみたいのですが。",
     exampleSrc:"A: Welcome! What are you looking for?\nB: I'd like to look at shirts.",
     funFact:"Irasshaimase is the honorific form of irassharu (to come/be). You will hear it hundreds of times in Japan. Every konbini, restaurant, and department store employee shouts it. No response is expected. Just nod or smile."},

    {type:"teach", trg:"みせてください", src:"please show me", pos:"verb", gender:null,
     note:"From miseru (to show) + te kudasai (please do). Very useful when shopping.",
     example:"A: あのとけいをみせてください。\nB: はい、こちらです。",
     exampleSrc:"A: Please show me that watch.\nB: Yes, here it is.",
     funFact:"Misete kudasai is more polite than just pointing. In Japanese department stores, the staff will carefully take out items, explain features, and wrap purchases beautifully. This level of service (omotenashi) is expected and free of charge."},

    {type:"teach", trg:"ためしてもいいですか", src:"may I try it on?", pos:"verb", gender:null,
     note:"Tamesu (to try) + te mo ii desu ka (is it okay if I?). For clothes and shoes.",
     example:"A: このくつをためしてもいいですか？\nB: はい、どうぞ。こちらへ。",
     exampleSrc:"A: May I try on these shoes?\nB: Yes, please. This way.",
     funFact:"Japanese fitting rooms (shichakushitsu) have special rules: remove shoes before entering, do not put clothes on the floor, and be careful not to get makeup on clothes. Some stores provide face covers to protect garments while trying them on."},

    {type:"teach", trg:"サイズ", src:"size", pos:"noun", gender:null,
     note:"From English 'size.' Japanese sizes run smaller than Western sizes.\nS, M, L, LL (extra large).",
     example:"A: このシャツのサイズはなんですか？\nB: Mサイズです。",
     exampleSrc:"A: What size is this shirt?\nB: It is size M.",
     funFact:"Japanese clothing sizes run significantly smaller than Western sizes. A Japanese L is often a Western M. 'Free size' (furii saizu) means one-size-fits-all but usually fits Japanese body proportions. LL (double L) replaces XL in Japan."},

    {type:"mc", q:"いらっしゃいませ requires you to:", opts:["Say konnichiwa back","Say arigatou","Bow deeply","No response needed"], ans:"No response needed",
     hint:"This is a one-way greeting from staff. Customers just acknowledge with a nod or nothing."},

    {type:"teach", trg:"ほかのいろ", src:"another color / other colors", pos:"noun", gender:null,
     note:"Hoka no (other) + iro (color). Use to ask for alternatives.",
     example:"A: ほかのいろはありますか？\nB: あか、あお、しろがあります。",
     exampleSrc:"A: Do you have other colors?\nB: We have red, blue, and white.",
     funFact:"Hoka (other/another) is incredibly useful. Hoka no saizu (other sizes), hoka no mise (other shops), hoka ni nani ka (anything else?). One word, endless shopping applications."},

    {type:"teach", trg:"おおきいサイズ", src:"larger size", pos:"noun", gender:null,
     note:"Pattern: i-adj + saizu. Also: ちいさいサイズ (smaller size).",
     example:"A: もうすこしおおきいサイズはありますか？\nB: しょうしょうおまちください。",
     exampleSrc:"A: Do you have a slightly larger size?\nB: Please wait a moment.",
     funFact:"Finding larger sizes can be challenging in Japan. Many shops stock mainly S, M, and L. Specialty stores for larger sizes exist but are less common. Online shopping from international brands has made this easier for non-Japanese body types."},

    {type:"teach", trg:"にあう", src:"to suit / to look good on", pos:"verb", gender:null,
     note:"A u-verb. Pattern: X は Y に にあう = X suits Y.\nKanji: 似合う.",
     example:"A: このスカート、にあいますか？\nB: はい、とてもにあっています！",
     exampleSrc:"A: Does this skirt look good on me?\nB: Yes, it looks great on you!",
     funFact:"似 (resemble) + 合 (match). Niau means things match harmoniously. It applies to clothes, hairstyles, and even personality pairings. Oniau (お似合い) said about a couple means 'you two are well-matched.'"},

    {type:"teach", trg:"レジ", src:"cash register / checkout", pos:"noun", gender:null,
     note:"Short for レジスター (register). Where you pay.\nWritten in katakana.",
     example:"A: レジはどこですか？\nB: あちらです。",
     exampleSrc:"A: Where is the register?\nB: Over there.",
     funFact:"At Japanese registers, you place money on a small tray (kanetsubo), not hand it directly to the cashier. The cashier counts change aloud and returns it on the tray. This ritualized exchange avoids direct hand contact and is considered more hygienic."},

    {type:"fb", s:"このくつを___もいいですか？",
     a:["ためして"],
     opts:["ためして","みせて","かって","はいって"],
     hint:"The te-form of the verb 'to try' used when asking permission to try something on.",
     sSrc:"May I try on these shoes?"},

    {type:"teach", trg:"おつり", src:"change (money returned)", pos:"noun", gender:null,
     note:"Money given back after paying. The お is an honorific prefix.\nKanji: お釣り.",
     example:"A: おつりはひゃくえんです。\nB: ありがとうございます。",
     exampleSrc:"A: Your change is 100 yen.\nB: Thank you.",
     funFact:"Japanese cashiers count change meticulously and announce the amount. Self-checkout machines are spreading, but many Japanese people still prefer human interaction for the politeness ritual. Vending machines always give exact change, even for 10,000 yen bills."},

    {type:"teach", trg:"ふくろ", src:"bag (plastic/paper)", pos:"noun", gender:null,
     note:"Since 2020, plastic bags cost money in Japan.\nKanji: 袋.",
     example:"A: ふくろはいりますか？\nB: いいえ、だいじょうぶです。",
     exampleSrc:"A: Do you need a bag?\nB: No, I'm fine.",
     funFact:"Japan's plastic bag fee (reji-bukuro yuryouka) started in 2020 as an environmental measure. Before that, shops gave bags freely. Now, eco-bags (maibaggu, 'my bag') are extremely popular. Furoshiki (traditional wrapping cloths) are making a comeback too."},

    {type:"teach", trg:"カード", src:"card (credit/debit)", pos:"noun", gender:null,
     note:"From English 'card.' Japan was cash-heavy but is rapidly adopting cashless payment.",
     example:"A: カードでおねがいします。\nB: はい。こちらにタッチしてください。",
     exampleSrc:"A: By card, please.\nB: Yes. Please tap here.",
     funFact:"Japan was one of the last developed nations to widely adopt credit cards. IC cards like Suica and Pasmo (for trains AND shopping) are more popular. QR code payments (PayPay, Line Pay) exploded during COVID. Cash (genkin) is still accepted everywhere."},

    {type:"teach", trg:"げんきん", src:"cash", pos:"noun", gender:null,
     note:"Cash money. Japan still uses cash heavily compared to other developed countries.\nKanji: 現金.",
     example:"A: げんきんでおねがいします。\nB: はい。にせんえんおあずかりします。",
     exampleSrc:"A: Cash, please.\nB: Yes. 2,000 yen received.",
     funFact:"現 (present/real) + 金 (money). Despite being a tech powerhouse, Japan loves cash. Many small shops and restaurants still do not accept cards. Carrying genkin is essential. Japanese bills are among the most difficult to counterfeit in the world."},

    {type:"mc", q:"ふくろはいりますか is asking:", opts:["Do you want to buy a bag?","Do you need a bag?","Is this your bag?","Where is the bag?"], ans:"Do you need a bag?",
     hint:"Since 2020, this question is asked at every Japanese store checkout."},

    {type:"match", pairs:[
      {trg:"いらっしゃいませ", src:"Welcome (shop)"},
      {trg:"みせてください", src:"Please show me"},
      {trg:"ためしてもいいですか", src:"May I try it on?"},
      {trg:"にあう", src:"Suits / looks good"}
    ]},

    {type:"match", pairs:[
      {trg:"レジ", src:"cash register"},
      {trg:"おつり", src:"change (money)"},
      {trg:"ふくろ", src:"bag"},
      {trg:"カード", src:"card"}
    ]},

    {type:"fb", s:"___でおねがいします。",
     a:["カード"],
     opts:["カード","げんきん","レジ","ふくろ"],
     hint:"The payment method using a plastic credit or debit card.",
     sSrc:"By card, please."},

    {type:"mc", q:"At a Japanese register, you should:", opts:["Hand money directly to the cashier","Place money on the small tray","Drop coins on the counter","Hold money up to show"], ans:"Place money on the small tray",
     hint:"A small tray (kanetsubo) sits on the counter for hygienic money exchange."},

    {type:"mc", q:"サイズ in Japan compared to Western sizes:", opts:["Run larger","Run smaller","Are the same","Vary by brand only"], ans:"Run smaller",
     hint:"A Japanese L often corresponds to a Western M."},
  ]
};
export default LESSON_4;
