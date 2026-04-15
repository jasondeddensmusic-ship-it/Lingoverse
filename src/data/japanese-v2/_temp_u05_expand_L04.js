// Unit 05 Expansion L06 — Drinks, Snacks & Convenience Store Culture
const LESSON_6 = {
  id:"jav2_u5l6", title:"コンビニとおやつ", icon:"🏪", xp:15, board:true,
  steps:[
    {type:"intro", title:"コンビニとおやつ",
     desc:"Learn about drinks, snacks, and Japan's famous convenience store culture. Konbini (convenience stores) are a cornerstone of daily life and offer an incredible variety of food and drink.",
     goals:["Name popular Japanese drinks and snacks","Navigate a convenience store transaction","Understand Japan's vending machine and konbini culture"]},

    {type:"teach", trg:"コンビニ", src:"convenience store", pos:"noun", gender:null,
     note:"Short for コンビニエンスストア. The three giants: セブンイレブン, ファミマ, ローソン.",
     example:"A: コンビニにいきましょう。\nB: なにをかいますか？",
     exampleSrc:"A: Let's go to the convenience store.\nB: What are you going to buy?",
     funFact:"Japan has about 56,000 convenience stores, open 24/7. They are not just shops. You can pay bills, send packages, buy concert tickets, print documents, and get a surprisingly good hot meal. Japanese konbini food quality rivals some restaurants."},

    {type:"teach", trg:"おかし", src:"sweets / snacks / candy", pos:"noun", gender:null,
     note:"General word for confections and snacks. Includes Japanese and Western sweets.\nKanji: お菓子.",
     example:"A: にほんのおかしがすきですか？\nB: はい、ポッキーがだいすきです。",
     exampleSrc:"A: Do you like Japanese snacks?\nB: Yes, I love Pocky.",
     funFact:"Japan's snack industry is legendary for creativity. Limited-edition flavors appear weekly: matcha KitKat, sakura Pocky, wasabi peas. Japanese omiyage (souvenir) culture drives this: travelers bring back local specialty snacks for coworkers and friends."},

    {type:"teach", trg:"おちゃ", src:"tea (review, expanded)", pos:"noun", gender:null,
     note:"Review. Types: りょくちゃ (green), むぎちゃ (barley), ほうじちゃ (roasted), まっちゃ (matcha).",
     example:"A: つめたいおちゃをかいましょう。\nB: むぎちゃがいいです。",
     exampleSrc:"A: Let's buy cold tea.\nB: Barley tea would be good.",
     funFact:"Bottled tea is a massive industry in Japan. Vending machines and konbini stock dozens of varieties. Mugicha (barley tea) is the summer staple, served cold. Houjicha (roasted green tea) is mild and popular with children. Matcha lattes are a modern hit."},

    {type:"teach", trg:"ビール", src:"beer", pos:"noun", gender:null,
     note:"From Dutch 'bier.' Japan's most popular alcoholic drink.\nWritten in katakana.",
     example:"A: ビールをのみますか？\nB: はい、いっぱいおねがいします。",
     exampleSrc:"A: Will you have beer?\nB: Yes, one glass please.",
     funFact:"Beer came from Dutch traders (bier, not English 'beer'). Japan's big four: Asahi, Kirin, Sapporo, Suntory. The first glass is almost always beer at social gatherings (toriaezu biiru = beer for now). It is poured for others, never yourself."},

    {type:"mc", q:"コンビニ is short for:", opts:["Combination","Convenience store","Community center","Company office"], ans:"Convenience store",
     hint:"A shortened loanword from 'convenience store.'"},

    {type:"teach", trg:"おさけ", src:"alcohol / sake / rice wine", pos:"noun", gender:null,
     note:"General word for alcohol AND specifically Japanese rice wine.\nKanji: お酒.",
     example:"A: おさけはのみますか？\nB: はい、すこしだけ。",
     exampleSrc:"A: Do you drink alcohol?\nB: Yes, just a little.",
     funFact:"O-sake means both 'alcohol in general' and 'Japanese rice wine specifically.' Context determines meaning. At a bar, 'osake kudasai' means 'sake (rice wine) please.' But 'osake wo nomu' can mean drinking any alcohol. The ambiguity is intentional."},

    {type:"teach", trg:"じどうはんばいき", src:"vending machine", pos:"noun", gender:null,
     note:"Jidou (automatic) + hanbaiki (selling machine). Japan has about 5 million.\nKanji: 自動販売機.",
     example:"A: のどがかわいた。\nB: じどうはんばいきがあそこにあるよ。",
     exampleSrc:"A: I'm thirsty.\nB: There's a vending machine over there.",
     funFact:"Japan has roughly 5 million vending machines, one for every 23 people. They sell hot and cold drinks, snacks, ice cream, soup, and even umbrellas. Hot drinks are marked in red, cold in blue. They work perfectly and are almost never vandalized."},

    {type:"teach", trg:"アイスクリーム", src:"ice cream", pos:"noun", gender:null,
     note:"From English. Often shortened to アイス (aisu).\nWritten in katakana.",
     example:"A: アイスをたべたいです。\nB: コンビニでかいましょう。",
     exampleSrc:"A: I want to eat ice cream.\nB: Let's buy some at the convenience store.",
     funFact:"Japan has unique ice cream flavors: matcha (green tea), kurogoma (black sesame), sakura (cherry blossom), sweet potato, and even wasabi. Convenience store ice cream quality is remarkably high. Haagen-Dazs Japan releases Japan-exclusive flavors regularly."},

    {type:"teach", trg:"おにぎり", src:"rice ball (review, konbini context)", pos:"noun", gender:null,
     note:"Review. The konbini's bestselling item. About 2 billion sold yearly.",
     example:"A: コンビニのおにぎりはおいしいですね。\nB: はい、やすくておいしいです。",
     exampleSrc:"A: Convenience store rice balls are delicious.\nB: Yes, cheap and tasty.",
     funFact:"Konbini onigiri are an engineering marvel. The packaging keeps the nori (seaweed) separate from the rice until you open it, so it stays crispy. The pull-tab opening system was designed by packaging engineers. Over 100 yen for a satisfying snack."},

    {type:"fb", s:"のどがかわいた。___がある。",
     a:["じどうはんばいき"],
     opts:["じどうはんばいき","コンビニ","レストラン","がっこう"],
     hint:"The automatic drink-selling machines found on almost every Japanese street corner.",
     sSrc:"I'm thirsty. There's a vending machine."},

    {type:"teach", trg:"チョコレート", src:"chocolate", pos:"noun", gender:null,
     note:"From English. Often shortened to チョコ (choko).\nWritten in katakana.",
     example:"A: バレンタインにチョコをあげますか？\nB: はい、てづくりチョコをあげます。",
     exampleSrc:"A: Will you give chocolate for Valentine's?\nB: Yes, I'll give handmade chocolate.",
     funFact:"Japan's chocolate culture is enormous. Valentine's Day: women give chocolate to men. White Day (March 14): men return gifts. Giri-choko (obligation chocolate) for coworkers is declining, but honmei-choko (true feeling chocolate) for romantic interests thrives."},

    {type:"teach", trg:"せんべい", src:"rice cracker", pos:"noun", gender:null,
     note:"Traditional Japanese snack. Savory, crunchy, often with soy sauce glaze.\nKanji: 煎餅.",
     example:"A: おちゃとせんべいをたべましょう。\nB: いいですね。にほんらしいですね。",
     exampleSrc:"A: Let's have tea and rice crackers.\nB: Sounds good. Very Japanese.",
     funFact:"Senbei are Japan's original snack, dating back centuries. They come in hundreds of varieties: soy sauce, nori-wrapped, shrimp, wasabi. Nuremembei (wet crackers) from Choshi city are famously chewy. Tea and senbei is the classic Japanese afternoon treat."},

    {type:"teach", trg:"だんご", src:"dango (rice dumplings)", pos:"noun", gender:null,
     note:"Sweet rice flour balls on a stick. Often three-colored (pink, white, green).\nKanji: 団子.",
     example:"A: はなみにだんごをたべませんか？\nB: いいですね！さくらとだんご！",
     exampleSrc:"A: Shall we eat dango at the flower viewing?\nB: Sounds great! Cherry blossoms and dango!",
     funFact:"Hana yori dango (dumplings over flowers) is a famous Japanese proverb meaning practicality over beauty. Hanami-dango (flower-viewing dumplings) are three-colored: pink (spring), white (winter), green (summer). The proverb became the title of a mega-hit manga/drama."},

    {type:"teach", trg:"あたためますか", src:"shall I heat it up?", pos:"verb", gender:null,
     note:"Asked by konbini staff for bento and onigiri. Yes: おねがいします.",
     example:"A: おべんとうをかいます。\nB: あたためますか？\nA: はい、おねがいします。",
     exampleSrc:"A: I'll buy a bento.\nB: Shall I heat it up?\nA: Yes, please.",
     funFact:"This is the phrase you will hear most at a konbini checkout when buying food. Staff will microwave your bento perfectly. They also ask about chopsticks: ohashi wa otsuke shimasu ka (shall I include chopsticks?). The service detail is remarkable."},

    {type:"mc", q:"じどうはんばいき are special in Japan because:", opts:["They are very expensive","There are about 5 million of them","They only sell drinks","They require membership"], ans:"There are about 5 million of them",
     hint:"Japan has an incredibly high density of these machines, about one per 23 people."},

    {type:"match", pairs:[
      {trg:"コンビニ", src:"convenience store"},
      {trg:"おかし", src:"sweets / snacks"},
      {trg:"ビール", src:"beer"},
      {trg:"おさけ", src:"alcohol / sake"}
    ]},

    {type:"match", pairs:[
      {trg:"アイスクリーム", src:"ice cream"},
      {trg:"チョコレート", src:"chocolate"},
      {trg:"せんべい", src:"rice cracker"},
      {trg:"だんご", src:"rice dumplings"}
    ]},

    {type:"fb", s:"バレンタインに___をあげます。",
     a:["チョコ"],
     opts:["チョコ","せんべい","だんご","おにぎり"],
     hint:"The sweet treat given on February 14th in Japan, usually handmade for someone special.",
     sSrc:"I give chocolate on Valentine's Day."},

    {type:"mc", q:"はなよりだんご means:", opts:["Flowers are beautiful","Dumplings with flowers","Practicality over beauty","Food before rest"], ans:"Practicality over beauty",
     hint:"This proverb puts dango (practical satisfaction) above hana (aesthetic appreciation)."},

    {type:"mc", q:"あたためますか is asked at konbini when:", opts:["You buy drinks","You buy bento or onigiri","You pay with a card","You ask for directions"], ans:"You buy bento or onigiri",
     hint:"Staff offer to microwave your purchased food items."},
  ]
};
export default LESSON_6;
