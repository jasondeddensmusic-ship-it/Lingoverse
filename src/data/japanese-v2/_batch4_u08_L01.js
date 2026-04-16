// Batch 4 — Unit 08 Lesson 1: Buildings & Rooms
const BATCH4_L_1 = {
  id:"jav2_u08l_b4_1", title:"たてものとへや", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"たてものとへや",
     desc:"Learn the names of buildings in your neighborhood and rooms in a house. These words help you navigate and describe living spaces.",
     goals:["Name types of buildings","Describe rooms in a house","Give and understand basic directions to buildings"]},

    {type:"teach", trg:"たてもの", src:"building", pos:"noun", gender:null,
     note:"Kanji: 建物. Build + thing. General word for any structure.",
     example:"あのたてものはなんですか？",
     exampleSrc:"What is that building?",
     funFact:"Japanese buildings have unique naming. Apartments are called マンション (mansion, from English) even if they are tiny studios. A real mansion would be 豪邸 (goutei). This false friend confuses many English speakers."},

    {type:"teach", trg:"びょういん", src:"hospital", pos:"noun", gender:null,
     note:"Kanji: 病院. Sick + institution. For full hospitals, not clinics.",
     example:"びょういんはどこですか？",
     exampleSrc:"Where is the hospital?",
     funFact:"Japanese hospitals are often massive facilities. Universal healthcare means everyone can access them. Wait times can be long, but costs are low. A typical doctor visit costs around 1,000-3,000 yen with insurance."},

    {type:"teach", trg:"ゆうびんきょく", src:"post office", pos:"noun", gender:null,
     note:"Kanji: 郵便局. Mail + convenience + office.",
     example:"ゆうびんきょくでてがみをおくります。",
     exampleSrc:"I send letters at the post office.",
     funFact:"Japan Post (日本郵便) also operates a massive banking system (ゆうちょ銀行). Almost every post office has an ATM. With 24,000 locations, post offices are more common than convenience stores in rural Japan."},

    {type:"teach", trg:"ぎんこう", src:"bank", pos:"noun", gender:null,
     note:"Kanji: 銀行. Silver + go. Banks were originally silver exchanges.",
     example:"ぎんこうでおかねをおろします。",
     exampleSrc:"I withdraw money at the bank.",
     funFact:"銀行 literally means 'silver going.' In the Meiji era, Japan modeled its banking system after European banks that dealt in silver. Many Japanese bank ATMs close at night and on weekends, charging fees for after-hours use."},

    {type:"teach", trg:"としょかん", src:"library", pos:"noun", gender:null,
     note:"Kanji: 図書館. Diagram + book + hall.",
     example:"としょかんでほんをかります。",
     exampleSrc:"I borrow books at the library.",
     funFact:"Japanese public libraries are beautifully maintained and silent. They often have manga sections and comfortable reading areas. Some modern libraries, like Tsutaya Library in Takeo, combine bookstores with library spaces."},

    {type:"teach", trg:"やくしょ", src:"government office / city hall", pos:"noun", gender:null,
     note:"Kanji: 役所. Role + place. Where you handle official paperwork.",
     example:"やくしょでじゅうしょへんこうをしました。",
     exampleSrc:"I changed my address at the city hall.",
     funFact:"Foreign residents in Japan must visit the yakusho for many life events: registering an address, getting health insurance, reporting marriage. The staff are helpful but forms are often in Japanese only."},

    {type:"teach", trg:"けいさつしょ", src:"police station", pos:"noun", gender:null,
     note:"Kanji: 警察署. Guard + inspect + office. The main station.",
     example:"けいさつしょにとどけをだしました。",
     exampleSrc:"I filed a report at the police station.",
     funFact:"Japan's neighborhood police boxes (交番 kouban) are small local stations where 1-2 officers work. They help with directions, lost items, and minor complaints. Koubans are found at every major intersection."},

    {type:"teach", trg:"げんかん", src:"entrance / entryway", pos:"noun", gender:null,
     note:"Kanji: 玄関. Mysterious + barrier. The transition zone in a Japanese home.",
     example:"げんかんでくつをぬぎます。",
     exampleSrc:"I take off my shoes at the entrance.",
     funFact:"The genkan is the most important architectural feature of a Japanese home. It is a step-down area where shoes are removed before entering the raised floor. The height difference physically separates 'outside' from 'inside.'"},

    {type:"teach", trg:"だいどころ", src:"kitchen", pos:"noun", gender:null,
     note:"Kanji: 台所. Counter + place. Where food preparation happens.",
     example:"だいどころでりょうりをつくります。",
     exampleSrc:"I cook in the kitchen.",
     funFact:"Japanese kitchens are typically compact but incredibly well-organized. Built-in gas stoves with fish grills, rice cooker nooks, and sliding storage are standard. The system kitchen (システムキッチン) is a uniquely Japanese concept."},

    {type:"teach", trg:"おふろ", src:"bathroom / bathtub", pos:"noun", gender:null,
     note:"Kanji: お風呂. Honorific + wind + furnace. The bath area.",
     example:"おふろにはいります。",
     exampleSrc:"I take a bath.",
     funFact:"Japanese bathrooms separate the toilet from the bath. The ofuro room has a waterproof floor with a shower area and deep soaking tub. You wash OUTSIDE the tub, then soak in clean hot water. The same water is reused by the family."},

    {type:"teach", trg:"トイレ", src:"toilet / restroom", pos:"noun", gender:null,
     note:"From English 'toilet.' Japan's toilets are world-famous for technology.",
     example:"トイレはどこですか？",
     exampleSrc:"Where is the toilet?",
     funFact:"Japanese toilets are legendary. Heated seats, bidet functions, sound effects to mask noise (音姫 otohime), and automatic lids. TOTO's Washlet technology has been exported globally but remains most advanced in Japan."},

    {type:"teach", trg:"おしいれ", src:"Japanese closet", pos:"noun", gender:null,
     note:"Kanji: 押し入れ. Push + enter. A deep built-in closet for futons.",
     example:"ふとんをおしいれにしまいます。",
     exampleSrc:"I put the futon in the closet.",
     funFact:"Oshiire closets are specifically designed to store folded futons during the day. They have a shelf dividing upper and lower sections. In the anime Doraemon, the robot cat sleeps in Nobita's oshiire."},

    {type:"teach", trg:"にわ", src:"garden / yard", pos:"noun", gender:null,
     note:"Kanji: 庭. Japanese gardens are famous worldwide.",
     example:"にわにきれいなはながさいています。",
     exampleSrc:"Beautiful flowers are blooming in the garden.",
     funFact:"Japanese gardens (日本庭園) are designed to represent nature in miniature. Zen rock gardens use raked gravel to represent water. These gardens are designed to be contemplated, not played in."},

    {type:"mc", q:"What is a げんかん?",
     opts:["entryway where shoes are removed","living room","bedroom","garage"], ans:"entryway where shoes are removed",
     hint:"The transition zone between outside and inside a Japanese home."},

    {type:"fb", s:"{1}でおかねをおろします。", a:"ぎんこう",
     sSrc:"I withdraw money at the bank.",
     opts:["ぎんこう","ゆうびんきょく","やくしょ","びょういん"],
     hint:"The financial institution where you keep and withdraw money."},

    {type:"match", pairs:[
      {trg:"びょういん", src:"hospital"},
      {trg:"としょかん", src:"library"},
      {trg:"けいさつしょ", src:"police station"},
      {trg:"ゆうびんきょく", src:"post office"}
    ]},

    {type:"mc", q:"What is special about Japanese toilets?",
     opts:["high-tech features like heated seats and bidets","they are very small","they use no water","they are outdoors"], ans:"high-tech features like heated seats and bidets",
     hint:"Japan is world-famous for its advanced toilet technology."},

    {type:"fb", s:"{1}でりょうりをつくります。", a:"だいどころ",
     sSrc:"I cook in the kitchen.",
     opts:["だいどころ","おふろ","げんかん","にわ"],
     hint:"The room in the house dedicated to food preparation."},

    {type:"mc", q:"おしいれ is used mainly to store:",
     opts:["futons","books","clothes","shoes"], ans:"futons",
     hint:"A deep built-in closet designed for folded bedding."},

    {type:"mc", q:"What does やくしょ mean?",
     opts:["government office","school","company","store"], ans:"government office",
     hint:"Where you handle official paperwork like address changes and permits."}
  ]
};
export default BATCH4_L_1;
