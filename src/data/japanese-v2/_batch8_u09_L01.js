// Batch 8 – Unit 09 (A1.3 Shopping): Clothing & Accessories
const BATCH8_L1 = {
  id:"jav2_u09l_b8_1", title:"ふくとアクセサリー", icon:"👗", xp:15, board:true,
  steps:[
    {type:"intro", title:"ふくとアクセサリー",
     desc:"Learn vocabulary for clothing, accessories, and getting dressed. From everyday wear to traditional garments, these words are essential for shopping and daily descriptions.",
     goals:["Name common clothing items and accessories","Describe what you are wearing","Handle clothing shopping conversations"]},

    {type:"teach", trg:"ふく", src:"clothes / clothing", pos:"noun", gender:null,
     note:"Kanji: 服. ふくをきる = to wear (upper body). ようふく = Western clothes.\nわふく = Japanese traditional clothes.",
     example:"A: あたらしいふくをかいました。\nB: みせてください！",
     exampleSrc:"A: I bought new clothes.\nB: Show me!",
     funFact:"Japanese has different verbs for wearing different items: きる (upper body), はく (lower body/shoes), かぶる (head), かける (glasses), する (accessories). This specificity reflects cultural attention to how garments relate to the body."},

    {type:"teach", trg:"ワンピース", src:"dress (one-piece)", pos:"noun", gender:null,
     note:"Loanword from 'one piece.' A dress that is a single garment.\nAlso a famous manga/anime title.",
     example:"A: きょうはワンピースをきています。\nB: すてきですね。どこでかいましたか？",
     exampleSrc:"A: I am wearing a dress today.\nB: It is lovely. Where did you buy it?",
     funFact:"Japanese uses ワンピース for a dress because it is one piece of clothing covering the whole body. ドレス (dress) in Japanese refers specifically to formal/evening gowns. This distinction confuses English speakers who use 'dress' for both. The manga ワンピース has nothing to do with clothing."},

    {type:"teach", trg:"うわぎ", src:"jacket / outer garment / top", pos:"noun", gender:null,
     note:"Kanji: 上着. うわぎをぬぐ = to take off a jacket.\nGeneral term for any outerwear.",
     example:"A: さむいからうわぎをきてください。\nB: はい、コートをもっていきます。",
     exampleSrc:"A: It is cold, so please wear a jacket.\nB: Okay, I will bring a coat.",
     funFact:"うわぎ literally means 'upper wear.' Japanese has a precise clothing vocabulary: うわぎ (outerwear/top), したぎ (underwear, literally 'lower wear'), and きもの (thing to wear, now mainly traditional). The word きもの originally meant any clothing before narrowing to traditional garments."},

    {type:"teach", trg:"くつした", src:"socks", pos:"noun", gender:null,
     note:"Kanji: 靴下 (under shoes). くつしたをはく = to put on socks.\nスニーカーソックス = ankle socks.",
     example:"A: くつしたはどこですか？\nB: ひきだしのなかにあります。",
     exampleSrc:"A: Where are the socks?\nB: They are in the drawer.",
     funFact:"くつした literally means 'under shoes.' Japanese schools require specific white くつした as part of the uniform. Taking off shoes indoors is mandatory in Japan, so clean くつした are essential. Fancy patterned くつした (socks) are a popular fashion accessory."},

    {type:"teach", trg:"ぼうし", src:"hat / cap", pos:"noun", gender:null,
     note:"Kanji: 帽子. ぼうしをかぶる = to wear a hat.\nむぎわらぼうし = straw hat.",
     example:"A: あついからぼうしをかぶりましょう。\nB: そうですね。ひやけしたくないです。",
     exampleSrc:"A: It is hot, so let us wear hats.\nB: Right. I do not want to get sunburned.",
     funFact:"Japanese elementary school students wear yellow ぼうし for safety visibility. Construction workers wear ヘルメット. Traditional Japanese ぼうし include the sugegasa (sedge hat) and the samurai's kabuto. The phrase ぼうしをとる (to take off one's hat) means to admire someone."},

    {type:"mc", q:"Which verb do you use with ぼうし (hat)?", opts:["かぶる","きる","はく","かける"], ans:"かぶる",
     hint:"This verb is specifically for items worn on the head."},

    {type:"teach", trg:"めがね", src:"glasses / eyeglasses", pos:"noun", gender:null,
     note:"Kanji: 眼鏡. めがねをかける = to put on glasses.\nサングラス = sunglasses.",
     example:"A: めがねをかけていますか？\nB: はい、めがなしではなにもみえません。",
     exampleSrc:"A: Do you wear glasses?\nB: Yes, I cannot see anything without them.",
     funFact:"Japan has a famous megane culture. あきはばら shops sell anime character めがね. In manga, めがね characters are stereotyped as smart and serious. Japanese optical shops like JINS and Zoff offer prescription めがね starting from about 5,000 yen, much cheaper than Western countries."},

    {type:"teach", trg:"ゆびわ", src:"ring (finger)", pos:"noun", gender:null,
     note:"Kanji: 指輪. けっこんゆびわ = wedding ring.\nゆびわをはめる = to put on a ring.",
     example:"A: すてきなゆびわですね。\nB: ありがとう。けっこんゆびわです。",
     exampleSrc:"A: What a lovely ring.\nB: Thank you. It is my wedding ring.",
     funFact:"Japan adopted the Western wedding ring tradition in the 20th century. けっこんゆびわ are worn on the left ring finger, same as Western custom. こんやくゆびわ (engagement rings) are also common. Japanese jewelry brands like Mikimoto (pearls) are world-famous."},

    {type:"teach", trg:"かさ", src:"umbrella", pos:"noun", gender:null,
     note:"Kanji: 傘. かさをさす = to open/hold an umbrella.\nおりたたみがさ = folding umbrella.",
     example:"A: あめがふりそうです。かさをもっていきましょう。\nB: おりたたみがさがあります。",
     exampleSrc:"A: It looks like it will rain. Let us bring umbrellas.\nB: I have a folding umbrella.",
     funFact:"Japan loses an estimated 12 million かさ per year. Convenience stores sell ビニールがさ (vinyl umbrellas) for about 500 yen, making them practically disposable. Japanese umbrella etiquette: shake water off before entering a building and use the かさたて (umbrella stand) provided."},

    {type:"teach", trg:"ベルト", src:"belt", pos:"noun", gender:null,
     note:"Loanword from English. かわのベルト = leather belt.\nベルトをしめる = to fasten a belt.",
     example:"A: このズボンにあうベルトがほしいです。\nB: くろとちゃいろ、どちらがいいですか？",
     exampleSrc:"A: I want a belt that matches these pants.\nB: Black or brown, which is better?",
     funFact:"Japanese business dress code requires dark ベルト matching shoe color. The traditional Japanese equivalent is おび (sash/belt for kimono), which is an art form in itself. A formal おび can cost more than the きもの it is paired with."},

    {type:"teach", trg:"マフラー", src:"scarf / muffler", pos:"noun", gender:null,
     note:"Loanword. マフラーをまく = to wrap a scarf.\nWinter essential in Japan.",
     example:"A: さむいのでマフラーをまきます。\nB: いろがきれいですね。",
     exampleSrc:"A: It is cold so I will wrap a scarf.\nB: The color is beautiful.",
     funFact:"In Japan, hand-knitting a マフラー for someone is a romantic gesture, especially among young women giving one to their crush on バレンタインデー or Christmas. This trope appears constantly in anime and manga as a symbol of affection."},

    {type:"fb", s:"あめですから{1}をもっていきましょう。\n(It is raining so let us bring an umbrella.)", a:"かさ", opts:["かさ","ぼうし","マフラー","めがね"], sSrc:"It is raining so let us bring an umbrella.",
     hint:"This item protects you from rain."},

    {type:"teach", trg:"きがえる", src:"to change clothes", pos:"verb", gender:null,
     note:"きがえ = a change of clothes. きがえる = to change (clothes).\nFrom き (wearing) + かえる (to change).",
     example:"A: しごとのあときがえます。\nB: ラクなふくがいいですよね。",
     exampleSrc:"A: I change clothes after work.\nB: Comfortable clothes are the best, right?",
     funFact:"Japanese culture has many きがえ (changing) moments: arriving at school (changing to うわばき), gym class (changing to たいいくぎ), and returning home (changing to いえぎ/room wear). The concept of separate indoor and outdoor clothing is deeply rooted."},

    {type:"teach", trg:"しちゃくする", src:"to try on (clothes)", pos:"verb", gender:null,
     note:"しちゃくしつ = fitting room. しちゃくしてもいいですか = May I try it on?\nEssential shopping phrase.",
     example:"A: このワンピースをしちゃくしてもいいですか？\nB: はい、しちゃくしつはあちらです。",
     exampleSrc:"A: May I try on this dress?\nB: Yes, the fitting room is over there.",
     funFact:"Japanese clothing stores are very attentive: staff often wait outside the しちゃくしつ to help. Some stores require you to wear a フェイスカバー (face cover) to prevent makeup stains when trying on clothes. Shoe stores let you try on with new くつした provided."},

    {type:"match", pairs:[{trg:"ふく",src:"clothes"},{trg:"くつした",src:"socks"},{trg:"ぼうし",src:"hat"},{trg:"かさ",src:"umbrella"},{trg:"マフラー",src:"scarf"}],
     hint:"Match each clothing/accessory item with its English name."},

    {type:"mc", q:"What does しちゃくする mean?", opts:["To try on clothes","To buy clothes","To wash clothes","To fold clothes"], ans:"To try on clothes",
     hint:"You do this in a fitting room (しちゃくしつ) at a clothing store."},

    {type:"fb", s:"しごとのあと{1}ます。\n(I change clothes after work.)", a:"きがえ", opts:["きがえ","しちゃくし","あらい","かい"], sSrc:"I change clothes after work.",
     hint:"This verb means to switch from one set of clothes to another."},

    {type:"mc", q:"What is special about the Japanese word きもの?", opts:["It originally meant any clothing, then narrowed to traditional garments","It means formal clothing only","It refers only to silk garments","It was borrowed from Chinese"], ans:"It originally meant any clothing, then narrowed to traditional garments",
     hint:"The kanji mean 'thing to wear,' a very general meaning."}
  ]
};
export default BATCH8_L1;
