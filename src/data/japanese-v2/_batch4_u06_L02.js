// Batch 4 — Unit 06 Lesson 2: Clothing & Getting Dressed
const BATCH4_L_2 = {
  id:"jav2_u06l_b4_2", title:"ふく", icon:"👔", xp:15, board:true,
  steps:[
    {type:"intro", title:"ふくとファッション",
     desc:"Learn clothing vocabulary and the verbs for wearing different types of clothes. Japanese uses different 'wear' verbs depending on the body part.",
     goals:["Name common clothing items","Use the correct 'wear' verb for each item","Talk about fashion and outfits"]},

    {type:"teach", trg:"ふく", src:"clothes / clothing", pos:"noun", gender:null,
     note:"Kanji: 服. The general word for all garments.",
     example:"あたらしいふくをかいました。",
     exampleSrc:"I bought new clothes.",
     funFact:"The kanji 服 originally meant 'to submit/obey.' It evolved to mean clothing because in ancient times, the clothes you wore showed your social rank and the rules you followed."},

    {type:"teach", trg:"きる", src:"to wear (upper body)", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 着る. For shirts, jackets, dresses.",
     example:"あかいシャツをきています。",
     exampleSrc:"I am wearing a red shirt.",
     funFact:"Japanese has different 'wear' verbs for different body parts. きる for tops, はく for bottoms and shoes, かぶる for hats, かける for glasses. This precision about dressing is unique to Japanese."},

    {type:"teach", trg:"はく", src:"to wear (lower body / feet)", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 履く. For pants, skirts, shoes, socks.",
     example:"くろいズボンをはいています。",
     exampleSrc:"I am wearing black pants.",
     funFact:"Haku covers everything from the waist down: pants, skirts, shoes, socks, even underwear. The verb literally means 'to put feet through.' You step into these items rather than pulling them over your head."},

    {type:"teach", trg:"かぶる", src:"to wear (on head)", pos:"verb", gender:null,
     note:"Godan verb. For hats, helmets, wigs, anything on the head.",
     example:"ぼうしをかぶっています。",
     exampleSrc:"I am wearing a hat.",
     funFact:"Kaburu also means 'to be covered by' (like water splashing over you). The head-covering sense comes from this broader meaning. Kaburu works for anything that goes on top of your head."},

    {type:"teach", trg:"シャツ", src:"shirt", pos:"noun", gender:null,
     note:"From English 'shirt.' General term for all shirts.",
     example:"しろいシャツをきてください。",
     exampleSrc:"Please wear a white shirt.",
     funFact:"In Japanese business culture, the white shirt (白シャツ) is almost mandatory. While 'cool biz' campaigns since 2005 allow no-tie casual, the white shirt remains the default. Colored shirts are slowly becoming acceptable."},

    {type:"teach", trg:"ズボン", src:"pants / trousers", pos:"noun", gender:null,
     note:"From French 'jupon' (petticoat). An unusual borrowing.",
     example:"あたらしいズボンをかいたいです。",
     exampleSrc:"I want to buy new pants.",
     funFact:"The word zubon comes from French 'jupon,' which actually means 'petticoat/underskirt.' How a word for women's undergarments became the Japanese word for pants is one of language history's great mysteries."},

    {type:"teach", trg:"スカート", src:"skirt", pos:"noun", gender:null,
     note:"From English 'skirt.' Part of most Japanese school uniforms.",
     example:"みどりのスカートをはいています。",
     exampleSrc:"I am wearing a green skirt.",
     funFact:"Japanese school uniforms with sailor-style tops and pleated skirts became iconic in anime. The length of school skirts varies by region. Tokyo students tend to wear shorter skirts, while rural areas keep them longer."},

    {type:"teach", trg:"くつ", src:"shoes", pos:"noun", gender:null,
     note:"Kanji: 靴. General term for all shoes.",
     example:"くつをぬいでください。",
     exampleSrc:"Please take off your shoes.",
     funFact:"Removing shoes is fundamental in Japan. You remove them at homes, temples, some restaurants, and even some offices. There is always a genkan (entryway) where shoes are left. Indoor slippers (スリッパ) are provided."},

    {type:"teach", trg:"くつした", src:"socks", pos:"noun", gender:null,
     note:"Kanji: 靴下. Shoes + under. Literally 'under-shoes.'",
     example:"あたらしいくつしたがひつようです。",
     exampleSrc:"I need new socks.",
     funFact:"Since shoes come off so often in Japan, socks are always visible. Having clean, hole-free socks is important. Some Japanese women wear decorative or themed socks as fashion statements."},

    {type:"teach", trg:"ぼうし", src:"hat / cap", pos:"noun", gender:null,
     note:"Kanji: 帽子. The general word for any headwear.",
     example:"あついからぼうしをかぶりましょう。",
     exampleSrc:"It's hot, so let's wear hats.",
     funFact:"Japanese elementary students wear yellow hats (黄色い帽子) so drivers can easily spot them. This safety measure is mandated by many schools. The bright yellow stands out against any background."},

    {type:"teach", trg:"コート", src:"coat / overcoat", pos:"noun", gender:null,
     note:"From English 'coat.' Heavier than ジャケット.",
     example:"さむいからコートをきます。",
     exampleSrc:"It's cold, so I wear a coat.",
     funFact:"Japanese fashion layers are precise: インナー (inner), シャツ (shirt), カーディガン (cardigan), ジャケット (jacket), コート (coat). Each layer has a purpose and style. Layering is both practical and fashionable."},

    {type:"teach", trg:"ネクタイ", src:"necktie", pos:"noun", gender:null,
     note:"From English 'necktie.' Essential in Japanese business culture.",
     example:"ネクタイをしめています。",
     exampleSrc:"I am wearing a necktie.",
     funFact:"Japan's 'cool biz' campaign (2005) encouraged workers to ditch neckties in summer to reduce AC use and save energy. The government set office temperatures to 28C. This cultural shift saved millions of kilowatt-hours."},

    {type:"teach", trg:"ぬぐ", src:"to take off (clothing)", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 脱ぐ. The opposite of wearing.",
     example:"いえではコートをぬぎます。",
     exampleSrc:"I take off my coat at home.",
     funFact:"Nugu is used for all types of clothing removal. But specifically for shoes at the entrance, the cultural ritual of 'kutsu wo nugu' (removing shoes) is one of the first things visitors to Japan learn."},

    {type:"teach", trg:"にあう", src:"to suit / to look good on", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 似合う. Resemble + fit.",
     example:"そのドレスはとてもにあいますね。",
     exampleSrc:"That dress really suits you.",
     funFact:"Niau is the go-to compliment for someone's outfit. It means the clothes match the person perfectly. The opposite, 似合わない (niaWANAi), is rarely said directly because it would be rude."},

    {type:"mc", q:"Which verb means 'to wear pants'?",
     opts:["はく","きる","かぶる","しめる"], ans:"はく",
     hint:"The verb for items worn on the lower body and feet."},

    {type:"fb", s:"ぼうしを{1}ています。", a:"かぶっ",
     sSrc:"I am wearing a hat.",
     opts:["かぶっ","きっ","はいっ","ぬいっ"],
     hint:"The specific wearing verb for things placed on the head."},

    {type:"match", pairs:[
      {trg:"シャツ", src:"shirt"},
      {trg:"ズボン", src:"pants"},
      {trg:"くつ", src:"shoes"},
      {trg:"コート", src:"coat"}
    ]},

    {type:"mc", q:"What does ぬぐ mean?",
     opts:["to take off (clothes)","to wear","to buy","to wash"], ans:"to take off (clothes)",
     hint:"The opposite action of putting c... on your body."},

    {type:"fb", s:"{1}をぬいでください。", a:"くつ",
     sSrc:"Please take off your shoes.",
     opts:["くつ","ふく","ぼうし","コート"],
     hint:"The footwear you must remove when entering a Japanese home."},

    {type:"mc", q:"にあう means:",
     opts:["to suit / look good on","to buy","to try on","to sew"], ans:"to suit / look good on",
     hint:"A compliment meaning the clothing matches the person well."},

    {type:"mc", q:"ズボン comes from which language?",
     opts:["French","English","German","Dutch"], ans:"French",
     hint:"Borrowed from a word that originally meant petticoat."}
  ]
};
export default BATCH4_L_2;
