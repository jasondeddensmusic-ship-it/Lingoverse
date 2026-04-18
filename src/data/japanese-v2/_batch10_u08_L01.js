// Batch 10 – Unit 08 (A2.1 Places): Home Rooms & Spaces
const BATCH10_L1 = {
  id:"jav2_u08l_b10_1", title:"家(いえ)の中(なか)", icon:"🏠", xp:15, board:true,
  steps:[
    {type:"intro", title:"家(いえ)の中(なか)",
     desc:"Learn the vocabulary for rooms and spaces inside a Japanese home. Japanese homes have unique features not found in Western houses.",
     goals:["Name rooms in a Japanese home","Understand unique Japanese home features","Describe your living space"]},

    {type:"teach", trg:"玄関(げんかん)", src:"entrance / entryway", pos:"noun", gender:null,
     note:"Where you remove shoes. Every Japanese home has one.\n靴(くつ)を脱(ぬ)ぐ = to take off shoes.",
     example:"A: 玄関(げんかん)で靴(くつ)を脱(ぬ)いでください。\nB: スリッパはありますか？",
     exampleSrc:"A: Please remove your shoes at the entrance.\nB: Are there slippers?",
     funFact:"玄関(げんかん) is the spiritual boundary between outside and inside. The step up from 玄関(げんかん) to the main floor is called 上(あが)り框(かまち). Never step on the raised area with outdoor shoes. Guests are greeted at the 玄関(げんかん), and delivery people never enter beyond it."},

    {type:"teach", trg:"押(お)し入(い)れ", src:"closet (Japanese-style)", pos:"noun", gender:null,
     note:"Built-in closet with sliding doors.\n布団(ふとん)を押(お)し入(い)れに入(い)れる = put futon in the closet.",
     example:"A: 布団(ふとん)はどこにしまいますか？\nB: 押(お)し入(い)れに入(い)れてください。",
     exampleSrc:"A: Where should I put away the futon?\nB: Put it in the closet.",
     funFact:"押(お)し入(い)れ literally means 'push-in place.' These deep closets with sliding doors store 布団(ふとん) (futon) during the day, transforming bedrooms into living spaces. In the anime ドラえもん, the robot cat sleeps in the 押(お)し入(い)れ, making it one of the most famous closets in Japanese pop culture."},

    {type:"teach", trg:"和室(わしつ)", src:"Japanese-style room (tatami room)", pos:"noun", gender:null,
     note:"和(わ) = Japanese, 室(しつ) = room.\nOpposite: 洋室(ようしつ) (Western-style room).",
     example:"A: 和室(わしつ)でお茶(ちゃ)を飲(の)みましょう。\nB: 畳(たたみ)は気持(きも)ちいいですね。",
     exampleSrc:"A: Let's drink tea in the Japanese room.\nB: Tatami feels nice, doesn't it?",
     funFact:"和室(わしつ) features 畳(たたみ) (tatami) floors, 襖(ふすま) (sliding doors), and often a 床の間(とこのま) (decorative alcove). Room size is measured in 畳(じょう) (tatami mats): a 6畳(ろくじょう) (6-mat) room is standard. Modern apartments often have one 和室(わしつ) alongside 洋室(ようしつ) (Western rooms)."},

    {type:"teach", trg:"ベランダ", src:"balcony / veranda", pos:"noun", gender:null,
     note:"Used for drying laundry.\n洗濯物(せんたくもの)を干(ほ)す = to hang laundry to dry.",
     example:"A: ベランダに洗濯物(せんたくもの)を干(ほ)しました。\nB: 今日(きょう)はいい天気(てんき)ですね。",
     exampleSrc:"A: I hung the laundry on the balcony.\nB: It is nice weather today.",
     funFact:"Japanese ベランダ are primarily used for drying laundry, not relaxing. Most Japanese prefer natural sun-drying over using a dryer. The ベランダ is also where 布団(ふとん) are hung to air out. In apartments, ベランダ rules are strict about what you can place there."},

    {type:"teach", trg:"廊下(ろうか)", src:"hallway / corridor", pos:"noun", gender:null,
     note:"廊下(ろうか)を走(はし)らない = do not run in the hallway.\nCommon in schools and apartments.",
     example:"A: 廊下(ろうか)を走(はし)らないでください。\nB: すみません。",
     exampleSrc:"A: Please do not run in the hallway.\nB: Sorry.",
     funFact:"廊下(ろうか)を走るな (don't run in the hallway) is one of the most iconic school rules in Japan. Japanese school 廊下(ろうか) are cleaned by students themselves during 掃除(そうじ)の時間(じかん) (cleaning time). Long straight 廊下(ろうか) in schools are used for 雑巾(ぞうきん)がけ (floor cloth cleaning races)."},

    {type:"teach", trg:"浴室(よくしつ)", src:"bathroom (bathing room)", pos:"noun", gender:null,
     note:"Separate from トイレ in Japan!\nお風呂(ふろ) = bath. 浴槽(よくそう) = bathtub.",
     example:"A: 浴室(よくしつ)はこちらです。\nB: シャワーだけでもいいですか？",
     exampleSrc:"A: The bathroom is this way.\nB: Is it okay to just shower?",
     funFact:"Japanese 浴室(よくしつ) is SEPARATE from the トイレ (toilet room). This surprises many visitors. The bathing area has a washing space outside the tub where you clean yourself first, then soak in the tub. The same bath water is shared by the whole family, so cleanliness before entering is essential."},

    {type:"teach", trg:"軒下(のきした)", src:"under the eaves", pos:"noun", gender:null,
     note:"軒(のき) = eaves, 下(した) = under.\n雨宿(あまやど)り = taking shelter from rain.",
     example:"A: 雨(あめ)が降(ふ)ってきました。\nB: 軒下(のきした)で雨宿(あまやど)りしましょう。",
     exampleSrc:"A: It started raining.\nB: Let's take shelter under the eaves.",
     funFact:"軒下(のきした) is a characteristic feature of traditional Japanese architecture. The wide eaves protect walls from rain and provide shade. In summer, 風鈴(ふうりん) (wind chimes) hang from 軒(のき), and in winter, つらら (icicles) form. The phrase 軒(のき)を貸(か)す means 'to offer shelter.'"},

    {type:"teach", trg:"階段(かいだん)", src:"stairs / staircase", pos:"noun", gender:null,
     note:"階段(かいだん)を上(のぼ)る = to go up stairs.\n階段(かいだん)を下(お)りる = to go down stairs.",
     example:"A: エレベーターが故障(こしょう)です。\nB: 階段(かいだん)で行(い)きましょう。",
     exampleSrc:"A: The elevator is out of order.\nB: Let's take the stairs.",
     funFact:"階段(かいだん) uses the kanji for floor (階) and step (段). Japanese homes often have steep, narrow 階段(かいだん) to save space. The famous 階段(かいだん) at Shinto shrines can number in the hundreds. 金比羅(こんぴら)さん in Kagawa has 1,368 stone 階段(かいだん) to the inner shrine."},

    {type:"mc", q:"Why are Japanese 浴室(よくしつ) and トイレ separate?", opts:["For hygiene, the bathing area is kept clean from toilet germs","Japanese homes are larger","It is a legal requirement","For decoration purposes"], ans:"For hygiene, the bathing area is kept clean from toilet germs",
     hint:"In Japanese homes, the bathing area is kept pristine because the whole family shares the same soak water."},

    {type:"fb", s:"{1}で靴(くつ)を脱(ぬ)いでください。\n(Please remove your shoes at the entrance.)", a:"玄関(げんかん)", opts:["玄関(げんかん)","廊下(ろうか)","和室(わしつ)","浴室(よくしつ)"], sSrc:"Please remove your shoes at the entrance.",
     hint:"This is the first area you enter in a Japanese home, where outdoor shoes are exchanged for slippers."},

    {type:"match", pairs:[
      {trg:"玄関(げんかん)", src:"entrance"},
      {trg:"押(お)し入(い)れ", src:"closet"},
      {trg:"和室(わしつ)", src:"tatami room"},
      {trg:"ベランダ", src:"balcony"}
    ]},

    {type:"mc", q:"What is 押(お)し入(い)れ primarily used for?", opts:["Storing futon during the day","Hanging clothes","Keeping food","Storing books"], ans:"Storing futon during the day",
     hint:"These deep closets with sliding doors transform sleeping spaces into living areas."}
  ,{type:"match",pairs:[{trg:"廊下(ろうか)",src:"hallway / corridor"},{trg:"浴室(よくしつ)",src:"bathroom (bathing room)"},{trg:"軒下(のきした)",src:"under the eaves"},{trg:"階段(かいだん)",src:"stairs / staircase"}]}]
};
export default BATCH10_L1;
