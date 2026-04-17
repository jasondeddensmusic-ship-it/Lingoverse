// Batch 8 – Unit 09 (A1.3 Shopping): Clothing & Accessories
const BATCH8_L1 = {
  id:"jav2_u09l_b8_1", title:"服(ふく)とアクセサリー", icon:"👗", xp:15, board:true,
  steps:[
    {type:"intro", title:"服(ふく)とアクセサリー",
     desc:"Learn vocabulary for clothing, accessories, and getting dressed. From everyday wear to traditional garments, these words are essential for shopping and daily descriptions.",
     goals:["Name common clothing items and accessories","Describe what you are wearing","Handle clothing shopping conversations"]},

    {type:"teach", trg:"服(ふく)", src:"clothes / clothing", pos:"noun", gender:null,
     note:"Kanji: 服. 服(ふく)を着(き)る = to wear (upper body). 洋服(ようふく) = Western clothes.\n和服(わふく) = Japanese traditional clothes.",
     example:"A: 新(あたら)しい服(ふく)を買(か)いました。\nB: 見(み)せてください！",
     exampleSrc:"A: I bought new clothes.\nB: Show me!",
     funFact:"Japanese has different verbs for wearing different items: 着(き)る (upper body), 履(は)く (lower body/shoes), 被(かぶ)る (head), かける (glasses), する (accessories). This specificity reflects cultural attention to how garments relate to the body."},

    {type:"teach", trg:"ワンピース", src:"dress (one-piece)", pos:"noun", gender:null,
     note:"Loanword from 'one piece.' A dress that is a single garment.\nAlso a famous manga/anime title.",
     example:"A: 今日(きょう)はワンピースを着(き)ています。\nB: 素敵(すてき)ですね。どこで買(か)いましたか？",
     exampleSrc:"A: I am wearing a dress today.\nB: It is lovely. Where did you buy it?",
     funFact:"Japanese uses ワンピース for a dress because it is one piece of clothing covering the whole body. ドレス (dress) in Japanese refers specifically to formal/evening gowns. This distinction confuses English speakers who use 'dress' for both. The manga ワンピース has nothing to do with clothing."},

    {type:"teach", trg:"上着(うわぎ)", src:"jacket / outer garment / top", pos:"noun", gender:null,
     note:"Kanji: 上着. 上着(うわぎ)を脱(ぬ)ぐ = to take off a jacket.\nGeneral term for any outerwear.",
     example:"A: 寒(さむ)いから上着(うわぎ)を着(き)てください。\nB: はい、コートを持(も)っていきます。",
     exampleSrc:"A: It is cold, so please wear a jacket.\nB: Okay, I will bring a coat.",
     funFact:"上着(うわぎ) literally means 'upper wear.' Japanese has a precise clothing vocabulary: 上着(うわぎ) (outerwear/top), 下着(したぎ) (underwear, literally 'lower wear'), and 着物(きもの) (thing to wear, now mainly traditional). The word 着物(きもの) originally meant any clothing before narrowing to traditional garments."},

    {type:"teach", trg:"靴下(くつした)", src:"socks", pos:"noun", gender:null,
     note:"Kanji: 靴下 (under shoes). 靴下(くつした)を履(は)く = to put on socks.\nスニーカーソックス = ankle socks.",
     example:"A: 靴下(くつした)はどこですか？\nB: 引(ひ)き出(だ)しの中(なか)にあります。",
     exampleSrc:"A: Where are the socks?\nB: They are in the drawer.",
     funFact:"靴下(くつした) literally means 'under shoes.' Japanese schools require specific white 靴下(くつした) as part of the uniform. Taking off shoes indoors is mandatory in Japan, so clean 靴下(くつした) are essential. Fancy patterned 靴下(くつした) (socks) are a popular fashion accessory."},

    {type:"teach", trg:"帽子(ぼうし)", src:"hat / cap", pos:"noun", gender:null,
     note:"Kanji: 帽子. 帽子(ぼうし)を被(かぶ)る = to wear a hat.\n麦藁(むぎわら)帽子(ぼうし) = straw hat.",
     example:"A: 暑(あつ)いから帽子(ぼうし)を被(かぶ)りましょう。\nB: そうですね。日焼(ひや)けしたくないです。",
     exampleSrc:"A: It is hot, so let us wear hats.\nB: Right. I do not want to get sunburned.",
     funFact:"Japanese elementary school students wear yellow 帽子(ぼうし) for safety visibility. Construction workers wear ヘルメット. Traditional Japanese 帽子(ぼうし) include the 菅笠(すげがさ) (sedge hat) and the samurai's 兜(かぶと). The phrase 帽子(ぼうし)を取(と)る (to take off one's hat) means to admire someone."},

    {type:"mc", q:"Which verb do you use with 帽子(ぼうし) (hat)?", opts:["被(かぶ)る","着(き)る","履(は)く","かける"], ans:"被(かぶ)る",
     hint:"This verb is specifically for items worn on the head."},

    {type:"teach", trg:"眼鏡(めがね)", src:"glasses / eyeglasses", pos:"noun", gender:null,
     note:"Kanji: 眼鏡. 眼鏡(めがね)をかける = to put on glasses.\nサングラス = sunglasses.",
     example:"A: 眼鏡(めがね)をかけていますか？\nB: はい、眼鏡(めがね)なしでは何(なに)も見(み)えません。",
     exampleSrc:"A: Do you wear glasses?\nB: Yes, I cannot see anything without them.",
     funFact:"Japan has a famous 眼鏡(めがね) culture. 秋葉原(あきはばら) shops sell anime character 眼鏡(めがね). In manga, 眼鏡(めがね) characters are stereotyped as smart and serious. Japanese optical shops like JINS and Zoff offer prescription 眼鏡(めがね) starting from about 5,000 yen, much cheaper than Western countries."},

    {type:"teach", trg:"指輪(ゆびわ)", src:"ring (finger)", pos:"noun", gender:null,
     note:"Kanji: 指輪. 結婚(けっこん)指輪(ゆびわ) = wedding ring.\n指輪(ゆびわ)をはめる = to put on a ring.",
     example:"A: 素敵(すてき)な指輪(ゆびわ)ですね。\nB: ありがとう。結婚(けっこん)指輪(ゆびわ)です。",
     exampleSrc:"A: What a lovely ring.\nB: Thank you. It is my wedding ring.",
     funFact:"Japan adopted the Western wedding ring tradition in the 20th century. 結婚(けっこん)指輪(ゆびわ) are worn on the left ring finger, same as Western custom. 婚約(こんやく)指輪(ゆびわ) (engagement rings) are also common. Japanese jewelry brands like Mikimoto (pearls) are world-famous."},

    {type:"teach", trg:"傘(かさ)", src:"umbrella", pos:"noun", gender:null,
     note:"Kanji: 傘. 傘(かさ)をさす = to open/hold an umbrella.\n折(お)りたたみ傘(がさ) = folding umbrella.",
     example:"A: 雨(あめ)が降(ふ)りそうです。傘(かさ)を持(も)っていきましょう。\nB: 折(お)りたたみ傘(がさ)があります。",
     exampleSrc:"A: It looks like it will rain. Let us bring umbrellas.\nB: I have a folding umbrella.",
     funFact:"Japan loses an estimated 12 million 傘(かさ) per year. Convenience stores sell ビニール傘(がさ) (vinyl umbrellas) for about 500 yen, making them practically disposable. Japanese umbrella etiquette: shake water off before entering a building and use the 傘立(かさた)て (umbrella stand) provided."},

    {type:"teach", trg:"ベルト", src:"belt", pos:"noun", gender:null,
     note:"Loanword from English. 革(かわ)のベルト = leather belt.\nベルトを締(し)める = to fasten a belt.",
     example:"A: このズボンに合(あ)うベルトがほしいです。\nB: 黒(くろ)と茶色(ちゃいろ)、どちらがいいですか？",
     exampleSrc:"A: I want a belt that matches these pants.\nB: Black or brown, which is better?",
     funFact:"Japanese business dress code requires dark ベルト matching shoe color. The traditional Japanese equivalent is 帯(おび) (sash/belt for kimono), which is an art form in itself. A formal 帯(おび) can cost more than the 着物(きもの) it is paired with."},

    {type:"teach", trg:"マフラー", src:"scarf / muffler", pos:"noun", gender:null,
     note:"Loanword. マフラーを巻(ま)く = to wrap a scarf.\nWinter essential in Japan.",
     example:"A: 寒(さむ)いのでマフラーを巻(ま)きます。\nB: 色(いろ)がきれいですね。",
     exampleSrc:"A: It is cold so I will wrap a scarf.\nB: The color is beautiful.",
     funFact:"In Japan, hand-knitting a マフラー for someone is a romantic gesture, especially among young women giving one to their crush on バレンタインデー or Christmas. This trope appears constantly in anime and manga as a symbol of affection."},

    {type:"fb", s:"雨(あめ)ですから{1}を持(も)っていきましょう。\n(It is raining so let us bring an umbrella.)", a:"傘(かさ)", opts:["傘(かさ)","帽子(ぼうし)","マフラー","眼鏡(めがね)"], sSrc:"It is raining so let us bring an umbrella.",
     hint:"This item protects you from rain."},

    {type:"teach", trg:"着(き)替(が)える", src:"to change clothes", pos:"verb", gender:null,
     note:"着(き)替(が)え = a change of clothes. 着(き)替(が)える = to change (clothes).\nFrom 着(き)る (wearing) + 変(か)える (to change).",
     example:"A: 仕事(しごと)のあと着(き)替(が)えます。\nB: ラクな服(ふく)がいいですよね。",
     exampleSrc:"A: I change clothes after work.\nB: Comfortable clothes are the best, right?",
     funFact:"Japanese culture has many 着(き)替(が)え (changing) moments: arriving at school (changing to 上(うわ)ばき), gym class (changing to 体育着(たいいくぎ)), and returning home (changing to 部屋着(へやぎ)/room wear). The concept of separate indoor and outdoor clothing is deeply rooted."},

    {type:"teach", trg:"試着(しちゃく)する", src:"to try on (clothes)", pos:"verb", gender:null,
     note:"試着室(しちゃくしつ) = fitting room. 試着(しちゃく)してもいいですか = May I try it on?\nEssential shopping phrase.",
     example:"A: このワンピースを試着(しちゃく)してもいいですか？\nB: はい、試着室(しちゃくしつ)はあちらです。",
     exampleSrc:"A: May I try on this dress?\nB: Yes, the fitting room is over there.",
     funFact:"Japanese clothing stores are very attentive: staff often wait outside the 試着室(しちゃくしつ) to help. Some stores require you to wear a フェイスカバー (face cover) to prevent makeup stains when trying on clothes. Shoe stores let you try on with new 靴下(くつした) provided."},

    {type:"match", pairs:[{trg:"服(ふく)",src:"clothes"},{trg:"靴下(くつした)",src:"socks"},{trg:"帽子(ぼうし)",src:"hat"},{trg:"傘(かさ)",src:"umbrella"},{trg:"マフラー",src:"scarf"}],
     hint:"Match each clothing/accessory item with its English name."},

    {type:"mc", q:"What does 試着(しちゃく)する mean?", opts:["To try on clothes","To buy clothes","To wash clothes","To fold clothes"], ans:"To try on clothes",
     hint:"You do this in a fitting room (試着室(しちゃくしつ)) at a clothing store."},

    {type:"fb", s:"仕事(しごと)のあと{1}ます。\n(I change clothes after work.)", a:"着(き)替(が)え", opts:["着(き)替(が)え","試着(しちゃく)し","洗(あら)い","買(か)い"], sSrc:"I change clothes after work.",
     hint:"This verb means to switch from one set of clothes to another."},

    {type:"mc", q:"What is special about the Japanese word 着物(きもの)?", opts:["It originally meant any clothing, then narrowed to traditional garments","It means formal clothing only","It refers only to silk garments","It was borrowed from Chinese"], ans:"It originally meant any clothing, then narrowed to traditional garments",
     hint:"The kanji mean 'thing to wear,' a very general meaning."}
  ]
};
export default BATCH8_L1;
