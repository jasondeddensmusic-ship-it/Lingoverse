// Batch 7 – Unit 04 (A1.1 How Much?): Money & Payment Vocabulary
const BATCH7_L1 = {
  id:"jav2_u04l_b7_1", title:"おかねとはらいかた", icon:"💳", xp:15, board:true,
  steps:[
    {type:"intro", title:"おかねとはらいかた",
     desc:"Expand your shopping vocabulary with money-related words and payment methods. Japan has a unique cash and cashless culture, and these words will help you navigate any purchase.",
     goals:["Name coins and bills in Japanese","Ask about payment methods","Use shopping transaction phrases"]},

    {type:"teach", trg:"おかね", src:"money", pos:"noun", gender:null,
     note:"General word for money. お is a polite prefix.\nおかねをはらう = to pay money.",
     example:"A: おかねはたりますか？\nB: はい、だいじょうぶです。",
     exampleSrc:"A: Do you have enough money?\nB: Yes, I am fine.",
     funFact:"The お prefix in おかね is honorific. Money is treated with respect in Japanese culture. You never crumple bills. In shops, money is placed on a small tray, never handed directly. Gift money goes in special envelopes called のし袋."},

    {type:"teach", trg:"おつり", src:"change (money returned)", pos:"noun", gender:null,
     note:"おつりをもらう = to receive change.\nおつりはけっこうです = keep the change.",
     example:"A: 1000えんでおねがいします。\nB: おつりは200えんです。どうぞ。",
     exampleSrc:"A: I will pay with 1000 yen.\nB: Your change is 200 yen. Here you go.",
     funFact:"Tipping does not exist in Japan. Saying おつりはけっこうです (keep the change) actually confuses cashiers. In taxis, if you hand over a 10,000 yen note, the driver will give exact change. Japanese service is excellent without tips."},

    {type:"teach", trg:"りょうしゅうしょ", src:"receipt (formal)", pos:"noun", gender:null,
     note:"Formal receipt for business expenses.\nりょうしゅうしょをおねがいします = a receipt please.",
     example:"A: りょうしゅうしょをおねがいします。\nB: おなまえはどうしますか？",
     exampleSrc:"A: A receipt, please.\nB: What name shall I put?",
     funFact:"Japan has two receipt types: レシート (register printout) and りょうしゅうしょ (handwritten formal receipt). Business people need りょうしゅうしょ for expense reports. The cashier will ask for your name and the purpose (ただしがき). Always specify which type you need."},

    {type:"teach", trg:"おさいふ", src:"wallet / purse", pos:"noun", gender:null,
     note:"Also: さいふ without the polite お prefix.\nおさいふをわすれた = I forgot my wallet.",
     example:"A: おさいふをわすれました！\nB: たいへん！おかねをかしましょうか？",
     exampleSrc:"A: I forgot my wallet!\nB: Oh no! Shall I lend you money?",
     funFact:"Japanese wallets (さいふ) are often long and flat to keep bills perfectly uncreased. Folding money is considered somewhat disrespectful. Many people choose wallet colors based on feng shui: yellow attracts wealth, black protects it, red spends it."},

    {type:"teach", trg:"げんきん", src:"cash", pos:"noun", gender:null,
     note:"げんきんではらう = to pay in cash.\nげんきんのみ = cash only.",
     example:"A: げんきんではらいますか？\nB: いいえ、カードでおねがいします。",
     exampleSrc:"A: Will you pay in cash?\nB: No, by card please.",
     funFact:"Japan remained a heavily cash-based society longer than most developed nations. Even in 2020, over 80% of transactions used cash. コンビニ ATMs (convenience store ATMs) are everywhere because people need constant access to げんきん. Cashless payment is now rapidly growing."},

    {type:"teach", trg:"はらう", src:"to pay", pos:"verb", gender:null,
     note:"Group 1 verb. おかねをはらう = to pay money.\nはらいました = I paid.",
     example:"A: もうはらいましたか？\nB: はい、レジではらいました。",
     exampleSrc:"A: Did you already pay?\nB: Yes, I paid at the register.",
     funFact:"はらう (払う) also means 'to sweep away' or 'to brush off.' The connection between paying and sweeping is that you are clearing a debt, brushing it away. In old Japan, debts had to be cleared by year end. The expression 払いがいい means being prompt with payment."},

    {type:"teach", trg:"まける", src:"to give a discount (informal)", pos:"verb", gender:null,
     note:"Group 2 verb. Colloquial. まけてください = give me a discount.\nUsed at markets, not at chain stores.",
     example:"A: すみません、すこしまけてもらえますか？\nB: じゃあ、500えんまけますよ。",
     exampleSrc:"A: Excuse me, could you give a small discount?\nB: Well, I will take off 500 yen.",
     funFact:"Bargaining is rare in Japan except at flea markets (フリマ), electronics districts like Akihabara, and some tourist areas. Saying まけてください at a convenience store would be very awkward. But at street markets and antique shops, it is expected and even fun."},

    {type:"teach", trg:"ぜいこみ", src:"tax included", pos:"noun", gender:null,
     note:"ぜい = tax, こみ = included.\nOpposite: ぜいぬき = tax excluded.",
     example:"A: このねだんはぜいこみですか？\nB: はい、ぜいこみです。",
     exampleSrc:"A: Does this price include tax?\nB: Yes, tax is included.",
     funFact:"Japan's consumption tax (しょうひぜい) is 10% (8% for food and drinks). Prices in stores can be shown as ぜいこみ (tax included) or ぜいぬき (tax excluded). This causes confusion even for Japanese shoppers. Since 2021, ぜいこみ display became mandatory."},

    {type:"teach", trg:"つつむ", src:"to wrap", pos:"verb", gender:null,
     note:"Group 1 verb. プレゼントをつつむ = to gift-wrap.\nつつんでください = please wrap it.",
     example:"A: プレゼントようにつつんでください。\nB: はい、リボンはどのいろがいいですか？",
     exampleSrc:"A: Please wrap it as a gift.\nB: Yes, what color ribbon would you like?",
     funFact:"Gift wrapping (包装, ほうそう) is an art form in Japan. Department stores wrap gifts for free with exquisite precision. Furoshiki (風呂敷) are traditional wrapping cloths that fold into beautiful shapes. The wrapping is considered as important as the gift itself."},

    {type:"teach", trg:"おまけ", src:"bonus / freebie", pos:"noun", gender:null,
     note:"A free extra given with a purchase.\nおまけをつける = to include a freebie.",
     example:"A: このおかしにおまけがついていますよ。\nB: わあ、シールだ！",
     exampleSrc:"A: There is a freebie with this snack.\nB: Wow, a sticker!",
     funFact:"おまけ culture is huge in Japan. Snacks come with toys, drinks come with collectible figures, and magazines come with brand-name pouches. Some people buy products purely for the おまけ. Glico's Bikkuriman chocolate was famous for stickers that became a national craze."},

    {type:"teach", trg:"おとく", src:"a good deal / bargain", pos:"adj", gender:null,
     note:"Na-adjective. おとくなセット = a good-deal set.\nおとくです = it is a bargain.",
     example:"A: このセットはおとくですね。\nB: はい、べつべつにかうよりやすいです。",
     exampleSrc:"A: This set is a good deal.\nB: Yes, it is cheaper than buying separately.",
     funFact:"Japanese shoppers love おとく. Supermarkets have おとくパック (bargain packs), restaurants have おとくランチ (bargain lunches), and train companies sell おとくきっぷ (discount tickets). The word combines お (honorific) and 得 (gain/profit)."},

    {type:"teach", trg:"えらぶ", src:"to choose / to select", pos:"verb", gender:null,
     note:"Group 1 verb. ひとつえらんでください = please choose one.\nえらべない = cannot choose.",
     example:"A: どちらをえらびますか？\nB: こちらをえらびます。",
     exampleSrc:"A: Which will you choose?\nB: I will choose this one.",
     funFact:"えらぶ (選ぶ) uses the kanji 選, which also appears in 選挙 (election) and 選手 (athlete/competitor). The act of choosing is important in Japanese culture. At restaurants, taking too long to choose (えらべない) is relatable. Japanese menus often have おすすめ (recommendations) to help."},

    {type:"teach", trg:"つかう", src:"to use", pos:"verb", gender:null,
     note:"Group 1 verb. カードをつかう = to use a card.\nつかいかた = how to use.",
     example:"A: このきかいのつかいかたをおしえてください。\nB: まず、ボタンをおしてください。",
     exampleSrc:"A: Please teach me how to use this machine.\nB: First, please press the button.",
     funFact:"つかう (使う) is one of the most versatile verbs. You つかう money, tools, time, words, and even people (in the sense of employing). The kanji 使 also appears in 大使 (taishi, ambassador) and 天使 (tenshi, angel), those 'used' or 'sent' on missions."},

    // Quiz steps
    {type:"mc", q:"おつり means:",
     opts:["Change (money returned)","Receipt","Wallet","Discount"],
     ans:"Change (money returned)",
     hint:"When you pay more than the price, the cashier gives this back to you."},

    {type:"match", pairs:[
      {trg:"おかね", src:"money"},
      {trg:"おさいふ", src:"wallet"},
      {trg:"げんきん", src:"cash"},
      {trg:"ぜいこみ", src:"tax included"},
      {trg:"おつり", src:"change"}
    ]},

    {type:"fb", s:"カードでは{1}ことができません。げんきんのみです。",
     a:["はらう"],
     opts:["はらう","つかう","かう","まける"],
     hint:"The verb meaning 'to pay.' This shop does not accept cards.",
     sSrc:"You cannot {1} by card. Cash only."},

    {type:"mc", q:"まけてください is used:",
     opts:["To ask for a discount at a market","To ask for a receipt at a store","To return an item","To complain about quality"],
     ans:"To ask for a discount at a market",
     hint:"This casual verb is for bargaining, typically at flea markets or small shops."},

    {type:"fb", s:"プレゼントようにきれいに{1}ください。",
     a:["つつんで"],
     opts:["つつんで","はらって","えらんで","つかって"],
     hint:"You want the shop to gift-wrap your purchase beautifully.",
     sSrc:"Please {1} it nicely as a gift."},

    {type:"mc", q:"Japanese prices marked ぜいこみ mean:",
     opts:["Tax is already included in the price","Tax will be added at checkout","The item is tax-free","A discount is applied"],
     ans:"Tax is already included in the price",
     hint:"ぜい means t... and こみ means i.... The displayed p... is what you actually pay."},

    {type:"match", pairs:[
      {trg:"はらう", src:"to pay"},
      {trg:"えらぶ", src:"to choose"},
      {trg:"つかう", src:"to use"},
      {trg:"つつむ", src:"to wrap"},
      {trg:"おまけ", src:"freebie"}
    ]},

    {type:"fb", s:"このセットは{1}です。べつべつにかうよりやすいです。",
     a:["おとく"],
     opts:["おとく","たかい","やすい","まける"],
     hint:"This na-adjective means 'a good deal' or 'bargain.' The set price beats individual prices.",
     sSrc:"This set is a {1}. It is cheaper than buying separately."}
  ]
};
export default BATCH7_L1;
