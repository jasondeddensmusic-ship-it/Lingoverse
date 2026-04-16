// Batch 10 – Unit 08 (A2.1 Places): Home Rooms & Spaces
const BATCH10_L1 = {
  id:"jav2_u08l_b10_1", title:"いえのなか", icon:"🏠", xp:15, board:true,
  steps:[
    {type:"intro", title:"いえのなか",
     desc:"Learn the vocabulary for rooms and spaces inside a Japanese home. Japanese homes have unique features not found in Western houses.",
     goals:["Name rooms in a Japanese home","Understand unique Japanese home features","Describe your living space"]},

    {type:"teach", trg:"げんかん", src:"entrance / entryway", pos:"noun", gender:null,
     note:"Where you remove shoes. Every Japanese home has one.\nくつをぬぐ = to take off shoes.",
     example:"A: げんかんでくつをぬいでください。\nB: スリッパはありますか？",
     exampleSrc:"A: Please remove your shoes at the entrance.\nB: Are there slippers?",
     funFact:"げんかん (玄関) is the spiritual boundary between outside and inside. The step up from げんかん to the main floor is called あがりかまち. Never step on the raised area with outdoor shoes. Guests are greeted at the げんかん, and delivery people never enter beyond it."},

    {type:"teach", trg:"おしいれ", src:"closet (Japanese-style)", pos:"noun", gender:null,
     note:"Built-in closet with sliding doors.\nふとんをおしいれにいれる = put futon in the closet.",
     example:"A: ふとんはどこにしまいますか？\nB: おしいれにいれてください。",
     exampleSrc:"A: Where should I put away the futon?\nB: Put it in the closet.",
     funFact:"おしいれ (押入れ) literally means 'push-in place.' These deep closets with sliding doors store ふとん (futon) during the day, transforming bedrooms into living spaces. In the anime ドラえもん, the robot cat sleeps in the おしいれ, making it one of the most famous closets in Japanese pop culture."},

    {type:"teach", trg:"わしつ", src:"Japanese-style room (tatami room)", pos:"noun", gender:null,
     note:"わ = Japanese, しつ = room.\nOpposite: ようしつ (Western-style room).",
     example:"A: わしつでおちゃをのみましょう。\nB: たたみはきもちいいですね。",
     exampleSrc:"A: Let's drink tea in the Japanese room.\nB: Tatami feels nice, doesn't it?",
     funFact:"わしつ (和室) features たたみ (tatami) floors, ふすま (sliding doors), and often a とこのま (decorative alcove). Room size is measured in じょう (tatami mats): a ろくじょう (6-mat) room is standard. Modern apartments often have one わしつ alongside ようしつ (Western rooms)."},

    {type:"teach", trg:"ベランダ", src:"balcony / veranda", pos:"noun", gender:null,
     note:"Used for drying laundry.\nせんたくものをほす = to hang laundry to dry.",
     example:"A: ベランダにせんたくものをほしました。\nB: きょうはいいてんきですね。",
     exampleSrc:"A: I hung the laundry on the balcony.\nB: It is nice weather today.",
     funFact:"Japanese ベランダ are primarily used for drying laundry, not relaxing. Most Japanese prefer natural sun-drying over using a dryer. The ベランダ is also where ふとん are hung to air out. In apartments, ベランダ rules are strict about what you can place there."},

    {type:"teach", trg:"ろうか", src:"hallway / corridor", pos:"noun", gender:null,
     note:"ろうかをはしらない = do not run in the hallway.\nCommon in schools and apartments.",
     example:"A: ろうかをはしらないでください。\nB: すみません。",
     exampleSrc:"A: Please do not run in the hallway.\nB: Sorry.",
     funFact:"ろうかをはしるな (don't run in the hallway) is one of the most iconic school rules in Japan. Japanese school ろうか are cleaned by students themselves during そうじのじかん (cleaning time). Long straight ろうか in schools are used for ぞうきんがけ (floor cloth cleaning races)."},

    {type:"teach", trg:"よくしつ", src:"bathroom (bathing room)", pos:"noun", gender:null,
     note:"Separate from トイレ in Japan!\nおふろ = bath. よくそう = bathtub.",
     example:"A: よくしつはこちらです。\nB: シャワーだけでもいいですか？",
     exampleSrc:"A: The bathroom is this way.\nB: Is it okay to just shower?",
     funFact:"Japanese よくしつ (浴室) is SEPARATE from the トイレ (toilet room). This surprises many visitors. The bathing area has a washing space outside the tub where you clean yourself first, then soak in the tub. The same bath water is shared by the whole family, so cleanliness before entering is essential."},

    {type:"teach", trg:"のきした", src:"under the eaves", pos:"noun", gender:null,
     note:"のき = eaves, した = under.\nあまやどり = taking shelter from rain.",
     example:"A: あめがふってきました。\nB: のきしたであまやどりしましょう。",
     exampleSrc:"A: It started raining.\nB: Let's take shelter under the eaves.",
     funFact:"のきした (軒下) is a characteristic feature of traditional Japanese architecture. The wide eaves protect walls from rain and provide shade. In summer, ふうりん (wind chimes) hang from のき, and in winter, つらら (icicles) form. The phrase のきをかす means 'to offer shelter.'"},

    {type:"teach", trg:"かいだん", src:"stairs / staircase", pos:"noun", gender:null,
     note:"かいだんをのぼる = to go up stairs.\nかいだんをおりる = to go down stairs.",
     example:"A: エレベーターがこしょうです。\nB: かいだんでいきましょう。",
     exampleSrc:"A: The elevator is out of order.\nB: Let's take the stairs.",
     funFact:"かいだん (階段) uses the kanji for floor (階) and step (段). Japanese homes often have steep, narrow かいだん to save space. The famous かいだん at Shinto shrines can number in the hundreds. こんぴらさん in Kagawa has 1,368 stone かいだん to the inner shrine."},

    {type:"mc", q:"Why are Japanese よくしつ and トイレ separate?", opts:["For hygiene, the bathing area is kept clean from toilet germs","Japanese homes are larger","It is a legal requirement","For decoration purposes"], ans:"For hygiene, the bathing area is kept clean from toilet germs",
     hint:"Separating b... from toileting is a h... practice, especially since bath water is shared by the family."},

    {type:"fb", s:"{1}でくつをぬいでください。\n(Please remove your shoes at the entrance.)", a:"げんかん", opts:["げんかん","ろうか","わしつ","よくしつ"], sSrc:"Please remove your shoes at the entrance.",
     hint:"This is the first area you enter in a Japanese home, where outdoor shoes are exchanged for slippers."},

    {type:"match", pairs:[
      {trg:"げんかん", src:"entrance"},
      {trg:"おしいれ", src:"closet"},
      {trg:"わしつ", src:"tatami room"},
      {trg:"ベランダ", src:"balcony"}
    ]},

    {type:"mc", q:"What is おしいれ primarily used for?", opts:["Storing futon during the day","Hanging clothes","Keeping food","Storing books"], ans:"Storing futon during the day",
     hint:"These deep closets with sliding doors transform sleeping spaces into living areas."}
  ]
};
export default BATCH10_L1;
