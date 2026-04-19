// Unit 05 Batch3 L01. Restaurant Ordering & Taste Descriptions
// New vocab: レストラン, メニュー, ちゅうもん, おすすめ, からい, あまい,
// しおからい, すっぱい, にがい, いただきます, ごちそうさまでした,
// おかわり, アレルギー — all absent from unit-05.js and _temp_u05 files
// (which cover Japanese cuisine dishes and taste adjectives oishii/mazui/suki/kirai).
const BATCH3_L_1 = {
  id:"jav2_u5l_b3_1", title:"レストランで", icon:"🍽", xp:15, board:true,
  steps:[
    {type:"intro", title:"レストランで",
     desc:"Learn the language of eating out in Japan. From reading a menu to saying the ritual phrases before and after meals, these expressions are essential for dining in Japanese culture.",
     goals:["Order food and drinks in a Japanese restaurant","Use taste adjectives: spicy, sweet, salty, sour, bitter","Know the ritual meal phrases that every Japanese person uses"]},

    {type:"teach", trg:"レストラン", src:"restaurant", pos:"noun", gender:null,
     note:"Loanword from French 'restaurant.' Written in katakana. Higher-end than 食堂(しょくどう).",
     example:"A: このレストランはおすすめですか？\nB: はい、とてもおいしいです。",
     exampleSrc:"A: Do you recommend this restaurant?\nB: Yes, it is very delicious.",
     funFact:"Japan has the most Michelin-starred restaurants of any country in the world. Tokyo alone has more stars than Paris. Yet some of the best food is found in tiny 6-seat restaurants run by a single chef. Japan prizes both scale and intimacy in dining."},

    {type:"teach", trg:"メニュー", src:"menu", pos:"noun", gender:null,
     note:"Loanword from French. Many Japanese restaurants have picture menus (pictured versions) for easy ordering.",
     example:"A: メニューを見(み)せてください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please show me the menu.\nB: Here you go.",
     funFact:"Japanese restaurants often display plastic food replicas (shokuhin sample) in the window showing exact portions and colors of each dish. This makes ordering easy for tourists. The industry that makes these incredibly realistic samples is based in Gujo Hachiman."},

    {type:"teach", trg:"注文(ちゅうもん)", src:"order (at a restaurant)", pos:"noun", gender:null,
     note:"注文(ちゅうもん)をする = to place an order. 注文(ちゅうもん)はお決(き)まりですか = have you decided?\nKanji: 注文.",
     example:"A: 注文(ちゅうもん)はお決(き)まりですか？\nB: はい、ラーメンを一(ひと)つください。",
     exampleSrc:"A: Have you decided on your order?\nB: Yes, one ramen please.",
     funFact:"注 (pour/focus) + 文 (writing/text). Placing an order means directing your written intention to the kitchen. In many ramen shops you order and pay at a ticket machine (kenbaiki) before sitting, making the whole process wordless and efficient."},

    {type:"teach", trg:"おすすめ", src:"recommendation / recommended", pos:"noun", gender:null,
     note:"From 勧(すす)める (to recommend). Ask the staff for their recommendation.\nKanji: お勧め.",
     example:"A: おすすめは何(なん)ですか？\nB: 今日(きょう)は魚定食(さかなていしょく)がおすすめです。",
     exampleSrc:"A: What do you recommend?\nB: Today the fish set meal is recommended.",
     funFact:"Asking osusume is the secret to ordering well in Japan. Staff recommendations are genuine, not sales tactics. Many Japanese restaurants rotate daily specials (higawari) based on fresh ingredients. The osusume is always honest because Japanese culinary pride demands it."},

    {type:"mc", q:"注文(ちゅうもん)はお決(き)まりですか means:", opts:["Have you decided on your order?","Do you want the receipt?","What would you recommend?","Can I take your plate?"],
     ans:"Have you decided on your order?",
     hint:"Okimari means 'd.../determined.' The staff is asking if you are ready to o...."},

    {type:"teach", trg:"辛(から)い", src:"spicy / hot (flavor)", pos:"adj", gender:null,
     note:"I-adjective. Describes food that burns your mouth. Also means 'salty' in some dialects.",
     example:"A: このカレーは辛(から)いですか？\nB: はい、とても辛(から)いです。注意(ちゅうい)してください。",
     exampleSrc:"A: Is this curry spicy?\nB: Yes, very spicy. Please be careful.",
     funFact:"Karai covers both spicy (chilli heat) and sometimes salty (in Kansai dialect). When spicy ramen shops offer heat levels, they use 'karakusa' (辛さ) with numbers. Level 10 at some shops equals around 1,000,000 Scoville units. Japanese spicy food culture exploded in the 2010s."},

    {type:"teach", trg:"甘(あま)い", src:"sweet", pos:"adj", gender:null,
     note:"I-adjective. Describes sweetness in food. Also used figuratively to mean lenient or naive.",
     example:"A: このケーキは甘(あま)いですか？\nB: はい、とても甘(あま)いです。おいしい！",
     exampleSrc:"A: Is this cake sweet?\nB: Yes, very sweet. Delicious!",
     funFact:"Japanese desserts are famously less sweet than Western ones. A French pastry might use 200g of sugar where a Japanese wagashi uses 80g. The Japanese aesthetic of restrained sweetness (amai but not sugary) reflects their broader culinary philosophy of balance."},

    {type:"teach", trg:"塩辛(しおから)い", src:"salty", pos:"adj", gender:null,
     note:"I-adjective. 塩(しお) (salt) + 辛(から)い. More specific than just 辛(から)い.\nKanji: 塩辛い.",
     example:"A: このスープは塩辛(しおから)いですね。\nB: そうですね、水(みず)を飲(の)みましょう。",
     exampleSrc:"A: This soup is salty, isn't it?\nB: Yes, let's drink some water.",
     funFact:"Shio (salt) is one of Japan's treasured seasonings. Shio ramen uses a light salt-based broth considered the purest ramen expression. Japan has a gourmet salt culture with premium products from different coastlines. Some salts cost 3,000 yen for a small bag."},

    {type:"fb", s:"このカレーは{1}です。辛(から)いですね！(This curry is spicy!)",
     a:"辛(から)い",
     opts:["辛(から)い","甘(あま)い","塩辛(しおから)い","酸(す)っぱい"],
     hint:"The taste adjective for food that gives a burning, spicy sensation.",
     sSrc:"This curry is spicy!"},

    {type:"teach", trg:"酸(す)っぱい", src:"sour", pos:"adj", gender:null,
     note:"I-adjective. Describes acidic, sour flavors like vinegar or citrus.\nKanji: 酸っぱい.",
     example:"A: このレモンは酸(す)っぱいですか？\nB: はい、すごく酸(す)っぱいです！",
     exampleSrc:"A: Is this lemon sour?\nB: Yes, it is very sour!",
     funFact:"Suppai derives from 酸 (su, acid/vinegar). Umeboshi (pickled plum), Japan's iconic condiment, is intensely suppai. Japanese children are sometimes shown umeboshi and told to say 'suppai' as a fun reaction experiment. The reaction to extreme sourness is universal."},

    {type:"teach", trg:"苦(にが)い", src:"bitter", pos:"adj", gender:null,
     note:"I-adjective. Describes bitter flavors like black coffee or dark chocolate.\nKanji: 苦い.",
     example:"A: ブラックコーヒーは苦(にが)いですか？\nB: はい、でも好(す)きです。",
     exampleSrc:"A: Is black coffee bitter?\nB: Yes, but I like it.",
     funFact:"苦い (nigai, bitter) shares its kanji with 苦(くる)しい (kurushii, suffering). Bitterness is conceptually linked to hardship in Japanese. Green tea has mild bitterness (nigami) considered sophisticated. Beer appreciation in Japan emphasizes the correct level of nigami in a good brew."},

    {type:"teach", trg:"いただきます", src:"let's eat (ritual before eating)", pos:"intj", gender:null,
     note:"Said before every meal. Expresses gratitude for the food and all who prepared it.\nFrom いただく (to humbly receive).",
     example:"A: ご飯(はん)ができましたよ。\nみんな: いただきます！",
     exampleSrc:"A: Dinner's ready.\nEveryone: Itadakimasu!",
     funFact:"Itadakimasu has no equivalent in English. It simultaneously thanks the cook, the farmers, the animals, and nature that provided the food. The gesture of pressing palms together (gasshou) accompanies it. Eating without saying itadakimasu feels rude in Japan, even when alone."},

    {type:"mc", q:"いただきます is said:", opts:["When ordering food","When paying the bill","Before starting to eat","After finishing a meal"],
     ans:"Before starting to eat",
     hint:"This ritual phrase expresses gratitude b... the meal begins."},

    {type:"teach", trg:"ごちそうさまでした", src:"thank you for the meal (said after eating)", pos:"intj", gender:null,
     note:"Said after finishing a meal. Counterpart to itadakimasu.\nCasual: ごちそうさま.",
     example:"A: ごちそうさまでした！とてもおいしかったです。\nB: よかったです！また作(つく)ります。",
     exampleSrc:"A: Thank you for the meal! It was very delicious.\nB: Great! I will make it again.",
     funFact:"Gochisousama literally means 'it was a feast' or 'thank you for going to all that trouble.' Gochisou (feast) comes from chisou (running around) to source ingredients. You are thanking the host for running around to prepare your meal. Deep cultural consideration packed into one word."},

    {type:"teach", trg:"おかわり", src:"second helping / refill", pos:"noun", gender:null,
     note:"Asking for more of something. おかわりできますか = Can I have a refill?\nKanji: お代わり.",
     example:"A: ご飯(はん)のおかわりはいかがですか？\nB: はい、お願(ねが)いします！",
     exampleSrc:"A: Would you like a second helping of rice?\nB: Yes please!",
     funFact:"Okawari is one of the most welcome questions a host can ask. Saying yes to okawari is a compliment to the cook. In many Japanese restaurants, rice and miso soup refills (okawari) are free. Ramen shops with unlimited rice (okawari jiyu) attract loyal customers."},

    {type:"teach", trg:"アレルギー", src:"allergy", pos:"noun", gender:null,
     note:"Loanword from German 'Allergie.' Essential safety word when eating out.\nWritten in katakana.",
     example:"A: えびのアレルギーがあります。\nB: かしこまりました。えびを除(のぞ)きます。",
     exampleSrc:"A: I have a shrimp allergy.\nB: Understood. We will remove the shrimp.",
     funFact:"Arerugii came from German via Dutch medical influence in the Meiji era. Japanese restaurant staff take allergies (arerugii) extremely seriously. The food labeling law requires notification of 28 allergens. Carrying an allergy card (arerugii kaado) in Japanese is strongly recommended for travelers with severe allergies."},

    {type:"match", pairs:[
      {trg:"辛(から)い", src:"spicy"},
      {trg:"甘(あま)い", src:"sweet"},
      {trg:"塩辛(しおから)い", src:"salty"},
      {trg:"酸(す)っぱい", src:"sour"}
    ]},

    {type:"match", pairs:[
      {trg:"いただきます", src:"ritual before eating"},
      {trg:"ごちそうさまでした", src:"ritual after eating"},
      {trg:"おかわり", src:"second helping / refill"},
      {trg:"おすすめ", src:"recommendation"}
    ]},

    {type:"fb", s:"食(た)べる前(まえ)に「{1}」と声(こえ)に出(だ)します。(Before eating, you say itadakimasu out loud.)",
     a:"いただきます",
     opts:["いただきます","ごちそうさまでした","おかわり","注文(ちゅうもん)"],
     hint:"The ritual gratitude phrase said BEFORE starting a meal.",
     sSrc:"Before eating, you say {1} out loud."},

    {type:"mc", q:"ごちそうさまでした means:", opts:["Welcome to our store","Thank you for the meal (after eating)","Let's eat","Please wait"],
     ans:"Thank you for the meal (after eating)",
     hint:"This is the paired phrase said A... finishing a m.... The before-m... phrase is its counterpart."},
  {type:"match",pairs:[{trg:"レストラン",src:"restaurant"},{trg:"メニュー",src:"menu"},{trg:"注文(ちゅうもん)",src:"order (at a restaurant)"},{trg:"苦(にが)い",src:"bitter"},{trg:"アレルギー",src:"allergy"}]}]
};
export default BATCH3_L_1;
