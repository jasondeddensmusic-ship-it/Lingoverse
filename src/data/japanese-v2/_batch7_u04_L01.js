// Batch 7 – Unit 04 (A1.1 How Much?): Money & Payment Vocabulary
const BATCH7_L1 = {
  id:"jav2_u04l_b7_1", title:"お金(かね)と払(はら)い方(かた)", icon:"💳", xp:15, board:true,
  steps:[
    {type:"intro", title:"お金(かね)と払(はら)い方(かた)",
     desc:"Expand your shopping vocabulary with money-related words and payment methods. Japan has a unique cash and cashless culture, and these words will help you navigate any purchase.",
     goals:["Name coins and bills in Japanese","Ask about payment methods","Use shopping transaction phrases"]},

    {type:"teach", trg:"お金(かね)", src:"money", pos:"noun", gender:null,
     note:"General word for money. お is a polite prefix.\nお金(かね)を払(はら)う = to pay money.",
     example:"A: お金(かね)は足(た)りますか？\nB: はい、大丈夫(だいじょうぶ)です。",
     exampleSrc:"A: Do you have enough money?\nB: Yes, I am fine.",
     funFact:"The お prefix in お金(かね) is honorific. Money is treated with respect in Japanese culture. You never crumple bills. In shops, money is placed on a small tray, never handed directly. Gift money goes in special envelopes called のし袋(ぶくろ)."},

    {type:"teach", trg:"お釣(つ)り", src:"change (money returned)", pos:"noun", gender:null,
     note:"お釣(つ)りをもらう = to receive change.\nお釣(つ)りはけっこうです = keep the change.",
     example:"A: 1000円(えん)でお願(ねが)いします。\nB: お釣(つ)りは200円(えん)です。どうぞ。",
     exampleSrc:"A: I will pay with 1000 yen.\nB: Your change is 200 yen. Here you go.",
     funFact:"Tipping does not exist in Japan. Saying お釣(つ)りはけっこうです (keep the change) actually confuses cashiers. In taxis, if you hand over a 10,000 円(えん) note, the driver will give exact change. Japanese service is excellent without tips."},

    {type:"teach", trg:"領収書(りょうしゅうしょ)", src:"receipt (formal)", pos:"noun", gender:null,
     note:"Formal receipt for business expenses.\n領収書(りょうしゅうしょ)をお願(ねが)いします = a receipt please.",
     example:"A: 領収書(りょうしゅうしょ)をお願(ねが)いします。\nB: お名前(なまえ)はどうしますか？",
     exampleSrc:"A: A receipt, please.\nB: What name shall I put?",
     funFact:"Japan has two receipt types: レシート (register printout) and 領収書(りょうしゅうしょ) (handwritten formal receipt). Business people need 領収書(りょうしゅうしょ) for expense reports. The cashier will ask for your name and the purpose (ただし書(が)き). Always specify which type you need."},

    {type:"teach", trg:"お財布(さいふ)", src:"wallet / purse", pos:"noun", gender:null,
     note:"Also: 財布(さいふ) without the polite お prefix.\nお財布(さいふ)を忘(わす)れた = I forgot my wallet.",
     example:"A: お財布(さいふ)を忘(わす)れました！\nB: 大変(たいへん)！お金(かね)を貸(か)しましょうか？",
     exampleSrc:"A: I forgot my wallet!\nB: Oh no! Shall I lend you money?",
     funFact:"Japanese 財布(さいふ) (wallets) are often long and flat to keep bills perfectly uncreased. Folding money is considered somewhat disrespectful. Many people choose wallet colors based on feng shui: yellow attracts wealth, black protects it, red spends it."},

    {type:"teach", trg:"現金(げんきん)", src:"cash", pos:"noun", gender:null,
     note:"現金(げんきん)で払(はら)う = to pay in cash.\n現金(げんきん)のみ = cash only.",
     example:"A: 現金(げんきん)で払(はら)いますか？\nB: いいえ、カードでお願(ねが)いします。",
     exampleSrc:"A: Will you pay in cash?\nB: No, by card please.",
     funFact:"Japan remained a heavily cash-based society longer than most developed nations. Even in 2020, over 80% of transactions used 現金(げんきん). コンビニのATM (convenience store ATMs) are everywhere because people need constant access to 現金(げんきん). キャッシュレス (cashless) payment is now rapidly growing."},

    {type:"teach", trg:"払(はら)う", src:"to pay", pos:"verb", gender:null,
     note:"Group 1 verb. お金(かね)を払(はら)う = to pay money.\n払(はら)いました = I paid.",
     example:"A: もう払(はら)いましたか？\nB: はい、レジで払(はら)いました。",
     exampleSrc:"A: Did you already pay?\nB: Yes, I paid at the register.",
     funFact:"払(はら)う also means 'to sweep away' or 'to brush off.' The connection between paying and sweeping is that you are clearing a debt, brushing it away. In old Japan, debts had to be cleared by year end. The expression 払(はら)いがいい means being prompt with payment."},

    {type:"teach", trg:"負(まか)ける", src:"to give a discount (informal)", pos:"verb", gender:null,
     note:"Group 2 verb. Colloquial. 負(まか)けてください = give me a discount.\nUsed at markets, not at chain stores.",
     example:"A: すみません、少(すこ)し負(まか)けてもらえますか？\nB: じゃあ、500円(えん)負(まか)けますよ。",
     exampleSrc:"A: Excuse me, could you give a small discount?\nB: Well, I will take off 500 yen.",
     funFact:"Bargaining is rare in Japan except at flea markets (フリマ), electronics districts like 秋葉原(あきはばら), and some tourist areas. Saying 負(まか)けてください at a convenience store would be very awkward. But at street markets and antique shops, it is expected and even fun."},

    {type:"teach", trg:"税込(ぜいこ)み", src:"tax included", pos:"noun", gender:null,
     note:"税(ぜい) = tax, 込(こ)み = included.\nOpposite: 税抜(ぜいぬ)き = tax excluded.",
     example:"A: この値段(ねだん)は税込(ぜいこ)みですか？\nB: はい、税込(ぜいこ)みです。",
     exampleSrc:"A: Does this price include tax?\nB: Yes, tax is included.",
     funFact:"Japan's consumption tax (消費税(しょうひぜい)) is 10% (8% for food and drinks). Prices in stores can be shown as 税込(ぜいこ)み (tax included) or 税抜(ぜいぬ)き (tax excluded). This causes confusion even for Japanese shoppers. Since 2021, 税込(ぜいこ)み display became mandatory."},

    {type:"teach", trg:"包(つつ)む", src:"to wrap", pos:"verb", gender:null,
     note:"Group 1 verb. プレゼントを包(つつ)む = to gift-wrap.\n包(つつ)んでください = please wrap it.",
     example:"A: プレゼント用(よう)に包(つつ)んでください。\nB: はい、リボンはどの色(いろ)がいいですか？",
     exampleSrc:"A: Please wrap it as a gift.\nB: Yes, what color ribbon would you like?",
     funFact:"Gift wrapping (包装(ほうそう)) is an art form in Japan. Department stores wrap gifts for free with exquisite precision. 風呂敷(ふろしき) (furoshiki) are traditional wrapping cloths that fold into beautiful shapes. The wrapping is considered as important as the gift itself."},

    {type:"teach", trg:"おまけ", src:"bonus / freebie", pos:"noun", gender:null,
     note:"A free extra given with a purchase.\nおまけをつける = to include a freebie.",
     example:"A: このお菓子(かし)におまけがついていますよ。\nB: わあ、シールだ！",
     exampleSrc:"A: There is a freebie with this snack.\nB: Wow, a sticker!",
     funFact:"おまけ culture is huge in Japan. Snacks come with toys, drinks come with collectible figures, and magazines come with brand-name pouches. Some people buy products purely for the おまけ. グリコのビックリマンチョコレートは集(あつ)めるシールで人気(にんき)となりました。"},

    {type:"teach", trg:"お得(とく)", src:"a good deal / bargain", pos:"adj", gender:null,
     note:"Na-adjective. お得(とく)なセット = a good-deal set.\nお得(とく)です = it is a bargain.",
     example:"A: このセットはお得(とく)ですね。\nB: はい、別々(べつべつ)に買(か)うより安(やす)いです。",
     exampleSrc:"A: This set is a good deal.\nB: Yes, it is cheaper than buying separately.",
     funFact:"Japanese shoppers love お得(とく). スーパーにはお得(とく)パック (bargain packs), restaurants have お得(とく)ランチ (bargain lunches), and train companies sell お得(とく)きっぷ (discount tickets). The word combines お (honorific) and 得 (gain/profit)."},

    {type:"teach", trg:"選(えら)ぶ", src:"to choose / to select", pos:"verb", gender:null,
     note:"Group 1 verb. 一(ひと)つ選(えら)んでください = please choose one.\n選(えら)べない = cannot choose.",
     example:"A: どちらを選(えら)びますか？\nB: こちらを選(えら)びます。",
     exampleSrc:"A: Which will you choose?\nB: I will choose this one.",
     funFact:"選(えら)ぶ uses the kanji 選, which also appears in 選挙(せんきょ) (election) and 選手(せんしゅ) (athlete/competitor). The act of choosing is important in Japanese culture. At restaurants, taking too long to choose (選(えら)べない) is relatable. Japanese menus often have おすすめ (recommendations) to help."},

    {type:"teach", trg:"使(つか)う", src:"to use", pos:"verb", gender:null,
     note:"Group 1 verb. カードを使(つか)う = to use a card.\n使(つか)い方(かた) = how to use.",
     example:"A: この機械(きかい)の使(つか)い方(かた)を教(おし)えてください。\nB: まず、ボタンを押(お)してください。",
     exampleSrc:"A: Please teach me how to use this machine.\nB: First, please press the button.",
     funFact:"使(つか)う is one of the most versatile verbs. You 使(つか)う money, tools, time, words, and even people (in the sense of employing). The kanji 使 also appears in 大使(たいし) (ambassador) and 天使(てんし) (angel), those 'used' or 'sent' on missions."},

    // Quiz steps
    {type:"mc", q:"お釣(つ)り means:",
     opts:["Change (money returned)","Receipt","Wallet","Discount"],
     ans:"Change (money returned)",
     hint:"When you pay more than the price, the cashier gives this back to you."},

    {type:"match", pairs:[
      {trg:"お金(かね)", src:"money"},
      {trg:"お財布(さいふ)", src:"wallet"},
      {trg:"現金(げんきん)", src:"cash"},
      {trg:"税込(ぜいこ)み", src:"tax included"},
      {trg:"お釣(つ)り", src:"change"}
    ]},

    {type:"fb", s:"カードでは{1}ことができません。現金(げんきん)のみです。",
     a:["払(はら)う"],
     opts:["払(はら)う","使(つか)う","買(か)う","負(まか)ける"],
     hint:"The verb meaning 'to pay.' This shop does not accept cards.",
     sSrc:"You cannot {1} by card. Cash only."},

    {type:"mc", q:"負(まか)けてください is used:",
     opts:["To complain about quality","To ask for a discount at a market","To ask for a receipt at a store","To return an item"],
     ans:"To ask for a discount at a market",
     hint:"This casual verb is for bargaining, typically at flea markets or small shops."},

    {type:"fb", s:"プレゼント用(よう)にきれいに{1}ください。",
     a:["包(つつ)んで"],
     opts:["包(つつ)んで","払(はら)って","選(えら)んで","使(つか)って"],
     hint:"You want the shop to gift-wrap your purchase beautifully.",
     sSrc:"Please {1} it nicely as a gift."},

    {type:"mc", q:"Japanese prices marked 税込(ぜいこ)み mean:",
     opts:["The item is tax-free","A discount is applied","Tax is already included in the price","Tax will be added at checkout"],
     ans:"Tax is already included in the price",
     hint:"税(ぜい) means t... and 込(こ)み means i.... The displayed p... is what you actually pay."},

    {type:"match", pairs:[
      {trg:"払(はら)う", src:"to pay"},
      {trg:"選(えら)ぶ", src:"to choose"},
      {trg:"使(つか)う", src:"to use"},
      {trg:"包(つつ)む", src:"to wrap"},
      {trg:"おまけ", src:"freebie"}
    ]},

    {type:"fb", s:"このセットは{1}です。別々(べつべつ)に買(か)うより安(やす)いです。",
     a:["お得(とく)"],
     opts:["お得(とく)","高(たか)い","安(やす)い","負(まか)ける"],
     hint:"This na-adjective means 'a good deal' or 'bargain.' The set price beats individual prices.",
     sSrc:"This set is a {1}. It is cheaper than buying separately."}
  ,{type:"match",pairs:[{trg:"領収書(りょうしゅうしょ)",src:"receipt (formal)"},{trg:"負(まか)ける",src:"to give a discount (informal)"}]}]
};
export default BATCH7_L1;
