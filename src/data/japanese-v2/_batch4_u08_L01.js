// Batch 4. Unit 08 Lesson 1: Buildings & Rooms
const BATCH4_L_1 = {
  id:"jav2_u08l_b4_1", title:"建物(たてもの)と部屋(へや)", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"建物(たてもの)と部屋(へや)",
     desc:"Learn the names of buildings in your neighborhood and rooms in a house. These words help you navigate and describe living spaces.",
     goals:["Name types of buildings","Describe rooms in a house","Give and understand basic directions to buildings"]},

    {type:"teach", trg:"建物(たてもの)", src:"building", pos:"noun", gender:null,
     note:"Build + thing. General word for any structure.",
     example:"あの建物(たてもの)は何(なん)ですか？",
     exampleSrc:"What is that building?",
     funFact:"Japanese buildings have unique naming. Apartments are called マンション (mansion, from English) even if they are tiny studios. A real mansion would be 豪邸 (goutei). This false friend confuses many English speakers."},

    {type:"teach", trg:"病院(びょういん)", src:"hospital", pos:"noun", gender:null,
     note:"Sick + institution. For full hospitals, not clinics.",
     example:"病院(びょういん)はどこですか？",
     exampleSrc:"Where is the hospital?",
     funFact:"Japanese hospitals are often massive facilities. Universal healthcare means everyone can access them. Wait times can be long, but costs are low. A typical doctor visit costs around 1,000-3,000 yen with insurance."},

    {type:"teach", trg:"郵便局(ゆうびんきょく)", src:"post office", pos:"noun", gender:null,
     note:"Mail + convenience + office.",
     example:"郵便局(ゆうびんきょく)で手紙(てがみ)を送(おく)ります。",
     exampleSrc:"I send letters at the post office.",
     funFact:"Japan Post (日本郵便) also operates a massive banking system (ゆうちょ銀行). Almost every post office has an ATM. With 24,000 locations, post offices are more common than convenience stores in rural Japan."},

    {type:"teach", trg:"銀行(ぎんこう)", src:"bank", pos:"noun", gender:null,
     note:"Silver + go. Banks were originally silver exchanges.",
     example:"銀行(ぎんこう)でお金(かね)をおろします。",
     exampleSrc:"I withdraw money at the bank.",
     funFact:"銀行 literally means 'silver going.' In the Meiji era, Japan modeled its banking system after European banks that dealt in silver. Many Japanese bank ATMs close at night and on weekends, charging fees for after-hours use."},

    {type:"teach", trg:"図書館(としょかん)", src:"library", pos:"noun", gender:null,
     note:"Diagram + book + hall.",
     example:"図書館(としょかん)で本(ほん)を借(か)ります。",
     exampleSrc:"I borrow books at the library.",
     funFact:"Japanese public libraries are beautifully maintained and silent. They often have manga sections and comfortable reading areas. Some modern libraries, like Tsutaya Library in Takeo, combine bookstores with library spaces."},

    {type:"teach", trg:"役所(やくしょ)", src:"government office / city hall", pos:"noun", gender:null,
     note:"Role + place. Where you handle official paperwork.",
     example:"役所(やくしょ)で住所(じゅうしょ)変更(へんこう)をしました。",
     exampleSrc:"I changed my address at the city hall.",
     funFact:"Foreign residents in Japan must visit the yakusho for many life events: registering an address, getting health insurance, reporting marriage. The staff are helpful but forms are often in Japanese only."},

    {type:"teach", trg:"警察署(けいさつしょ)", src:"police station", pos:"noun", gender:null,
     note:"Guard + inspect + office. The main station.",
     example:"警察署(けいさつしょ)に届(とど)けを出(だ)しました。",
     exampleSrc:"I filed a report at the police station.",
     funFact:"Japan's neighborhood police boxes (交番 kouban) are small local stations where 1-2 officers work. They help with directions, lost items, and minor complaints. Koubans are found at every major intersection."},

    {type:"teach", trg:"玄関(げんかん)", src:"entrance / entryway", pos:"noun", gender:null,
     note:"Mysterious + barrier. The transition zone in a Japanese home.",
     example:"玄関(げんかん)で靴(くつ)を脱(ぬ)ぎます。",
     exampleSrc:"I take off my shoes at the entrance.",
     funFact:"The genkan is the most important architectural feature of a Japanese home. It is a step-down area where shoes are removed before entering the raised floor. The height difference physically separates 'outside' from 'inside.'"},

    {type:"teach", trg:"台所(だいどころ)", src:"kitchen", pos:"noun", gender:null,
     note:"Counter + place. Where food preparation happens.",
     example:"台所(だいどころ)で料理(りょうり)を作(つく)ります。",
     exampleSrc:"I cook in the kitchen.",
     funFact:"Japanese kitchens are typically compact but incredibly well-organized. Built-in gas stoves with fish grills, rice cooker nooks, and sliding storage are standard. The system kitchen (システムキッチン) is a uniquely Japanese concept."},

    {type:"teach", trg:"お風呂(ふろ)", src:"bathroom / bathtub", pos:"noun", gender:null,
     note:"Honorific + wind + furnace. The bath area.",
     example:"お風呂(ふろ)に入(はい)ります。",
     exampleSrc:"I take a bath.",
     funFact:"Japanese bathrooms separate the toilet from the bath. The ofuro room has a waterproof floor with a shower area and deep soaking tub. You wash OUTSIDE the tub, then soak in clean hot water. The same water is reused by the family."},

    {type:"teach", trg:"トイレ", src:"toilet / restroom", pos:"noun", gender:null,
     note:"From English 'toilet.' Japan's toilets are world-famous for technology.",
     example:"トイレはどこですか？",
     exampleSrc:"Where is the toilet?",
     funFact:"Japanese toilets are legendary. Heated seats, bidet functions, sound effects to mask noise (音姫 otohime), and automatic lids. TOTO's Washlet technology has been exported globally but remains most advanced in Japan."},

    {type:"teach", trg:"押(お)し入(い)れ", src:"Japanese closet", pos:"noun", gender:null,
     note:"Push + enter. A deep built-in closet for futons.",
     example:"布団(ふとん)を押(お)し入(い)れにしまいます。",
     exampleSrc:"I put the futon in the closet.",
     funFact:"Oshiire closets are specifically designed to store folded futons during the day. They have a shelf dividing upper and lower sections. In the anime Doraemon, the robot cat sleeps in Nobita's oshiire."},

    {type:"teach", trg:"庭(にわ)", src:"garden / yard", pos:"noun", gender:null,
     note:"Japanese gardens are famous worldwide.",
     example:"庭(にわ)にきれいな花(はな)が咲(さ)いています。",
     exampleSrc:"Beautiful flowers are blooming in the garden.",
     funFact:"Japanese gardens (日本庭園) are designed to represent nature in miniature. Zen rock gardens use raked gravel to represent water. These gardens are designed to be contemplated, not played in."},

    {type:"mc", q:"What is a 玄関(げんかん)?",
     opts:["entryway where shoes are removed","living room","bedroom","garage"], ans:"entryway where shoes are removed",
     hint:"The transition zone between outside and inside a Japanese home."},

    {type:"fb", s:"{1}でお金(かね)をおろします。", a:"銀行(ぎんこう)",
     sSrc:"I withdraw money at the bank.",
     opts:["銀行(ぎんこう)","郵便局(ゆうびんきょく)","役所(やくしょ)","病院(びょういん)"],
     hint:"The financial institution where you keep and withdraw money."},

    {type:"match", pairs:[
      {trg:"病院(びょういん)", src:"hospital"},
      {trg:"図書館(としょかん)", src:"library"},
      {trg:"警察署(けいさつしょ)", src:"police station"},
      {trg:"郵便局(ゆうびんきょく)", src:"post office"}
    ]},

    {type:"mc", q:"What is special about Japanese toilets?",
     opts:["they are outdoors","high-tech features like heated seats and bidets","they are very small","they use no water"], ans:"high-tech features like heated seats and bidets",
     hint:"Japan is world-famous for its advanced toilet technology."},

    {type:"fb", s:"{1}で料理(りょうり)を作(つく)ります。", a:"台所(だいどころ)",
     sSrc:"I cook in the kitchen.",
     opts:["台所(だいどころ)","お風呂(ふろ)","玄関(げんかん)","庭(にわ)"],
     hint:"The room in the house dedicated to food preparation."},

    {type:"mc", q:"押(お)し入(い)れ is used mainly to store:",
     opts:["clothes","shoes","futons","books"], ans:"futons",
     hint:"A deep built-in closet designed for folded bedding."},

    {type:"mc", q:"What does 役所(やくしょ) mean?",
     opts:["school","company","store","government office"], ans:"government office",
     hint:"Where you handle official paperwork like address changes and permits."}
  ,{type:"match",pairs:[{trg:"建物(たてもの)",src:"building"},{trg:"役所(やくしょ)",src:"government office / city hall"},{trg:"玄関(げんかん)",src:"entrance / entryway"},{trg:"お風呂(ふろ)",src:"bathroom / bathtub"},{trg:"トイレ",src:"toilet / restroom"},{trg:"押(お)し入(い)れ",src:"Japanese closet"}]},{type:"match",pairs:[{trg:"庭(にわ)",src:"garden / yard"}]}]
};
export default BATCH4_L_1;
