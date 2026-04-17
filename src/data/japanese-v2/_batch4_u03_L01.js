// Batch 4 — Unit 03 Lesson 1: Furniture & Household Items
const BATCH4_L_1 = {
  id:"jav2_u03l_b4_1", title:"家具(かぐ)", icon:"🛋️", xp:15, board:true,
  steps:[
    {type:"intro", title:"家具(かぐ)と家電(かでん)",
     desc:"Learn the names of common furniture and household items. These words will help you describe your living space and shop for your home.",
     goals:["Name common furniture pieces","Describe items in your home","Use location words with household objects"]},

    {type:"teach", trg:"椅子(いす)", src:"chair", pos:"noun", gender:null,
     note:"Can be written 椅子. One of the first household words you need.",
     example:"椅子(いす)に座(すわ)ってください。",
     exampleSrc:"Please sit on the chair.",
     funFact:"Traditional Japanese homes use zabuton (floor cushions) instead of chairs. Sitting on chairs only became common after the Meiji era when Western furniture was introduced. Many Japanese still prefer floor seating at home."},

    {type:"teach", trg:"机(つくえ)", src:"desk", pos:"noun", gender:null,
     note:"Kanji: 机. Specifically a desk for work or study. Dining table is テーブル.",
     example:"机(つくえ)の上(うえ)に本(ほん)があります。",
     exampleSrc:"There is a book on the desk.",
     funFact:"Japanese elementary students all use the same type of desk with a built-in shelf underneath. These desks are designed to be rearranged into groups for collaborative learning."},

    {type:"teach", trg:"テーブル", src:"table", pos:"noun", gender:null,
     note:"From English 'table.' Used for dining and coffee tables.",
     example:"テーブルの上(うえ)に花(はな)があります。",
     exampleSrc:"There are flowers on the table.",
     funFact:"Many Japanese homes have a kotatsu, a low table with a heater underneath and a blanket draped over it. Families gather around the kotatsu in winter to eat, watch TV, and nap."},

    {type:"teach", trg:"ベッド", src:"bed", pos:"noun", gender:null,
     note:"From English 'bed.' Traditional Japanese sleeping uses 布団(ふとん) (futon).",
     example:"新(あたら)しいベッドを買(か)いました。",
     exampleSrc:"I bought a new bed.",
     funFact:"Futons folded up each morning give the room daytime space. Many young Japanese now prefer beds, but futons remain popular. The ability to put away your bed and use the room for other purposes is very practical in small apartments."},

    {type:"teach", trg:"窓(まど)", src:"window", pos:"noun", gender:null,
     note:"Kanji: 窓. Japanese windows often slide open rather than swing.",
     example:"窓(まど)を開(あ)けてもいいですか？",
     exampleSrc:"May I open the window?",
     funFact:"The kanji 窓 is quite complex (14 strokes). Japanese sliding windows and doors (引(ひ)き戸(と)) are traditional. Western-style swinging windows are called 開(ひら)き窓(まど) (hiraki-mado)."},

    {type:"teach", trg:"扉(とびら)", src:"door", pos:"noun", gender:null,
     note:"Kanji: 扉. A more literary word. Everyday speech also uses ドア.",
     example:"扉(とびら)を閉(し)めてください。",
     exampleSrc:"Please close the door.",
     funFact:"Traditional Japanese sliding doors include fusuma (opaque) and shoji (translucent paper). Shoji screens filter light beautifully. The word tobira originally referred to a hinged door, distinguishing it from sliding types."},

    {type:"teach", trg:"冷蔵庫(れいぞうこ)", src:"refrigerator", pos:"noun", gender:null,
     note:"Kanji: 冷蔵庫. Cold + store + warehouse.",
     example:"牛乳(ぎゅうにゅう)は冷蔵庫(れいぞうこ)にあります。",
     exampleSrc:"The milk is in the refrigerator.",
     funFact:"Japanese refrigerators are engineering marvels with compartments for vegetables, meat, frozen goods, and even a special zone for keeping things at just above freezing. They also tend to be much quieter than Western models."},

    {type:"teach", trg:"洗濯機(せんたくき)", src:"washing machine", pos:"noun", gender:null,
     note:"Kanji: 洗濯機. Wash + launder + machine.",
     example:"洗濯機(せんたくき)が壊(こわ)れました。",
     exampleSrc:"The washing machine broke.",
     funFact:"Most Japanese washing machines wash with cold water only and are top-loading. Japanese people hang-dry clothes on balconies rather than using dryers. Dryers are considered wasteful and bad for clothes."},

    {type:"teach", trg:"電気(でんき)", src:"electricity / light", pos:"noun", gender:null,
     note:"Kanji: 電気. Electric + energy. Also means the room light.",
     example:"電気(でんき)を消(け)してください。",
     exampleSrc:"Please turn off the light.",
     funFact:"Denki means both 'electricity' and 'the room light' depending on context. The phrase '電気(でんき)をつけて' (turn on the light) and '電気(でんき)を消(け)して' (turn off the light) are among the most commonly used household phrases."},

    {type:"teach", trg:"エアコン", src:"air conditioner", pos:"noun", gender:null,
     note:"Shortened from エアコンディショナー. Essential in Japanese summers.",
     example:"暑(あつ)いからエアコンをつけましょう。",
     exampleSrc:"It's hot, so let's turn on the AC.",
     funFact:"Almost every room in Japan has its own wall-mounted AC unit. Japanese AC technology is among the best in the world. Companies like Daikin, Mitsubishi, and Panasonic export globally."},

    {type:"teach", trg:"鏡(かがみ)", src:"mirror", pos:"noun", gender:null,
     note:"Kanji: 鏡. One of the three sacred treasures of Japan is the mirror.",
     example:"鏡(かがみ)を見(み)てください。",
     exampleSrc:"Please look in the mirror.",
     funFact:"The sacred mirror (八咫鏡(やたのかがみ) Yata no Kagami) is one of Japan's three imperial regalia, kept at the Ise Grand Shrine. Mirrors in Shinto represent truth because they reflect reality without deception."},

    {type:"teach", trg:"棚(たな)", src:"shelf", pos:"noun", gender:null,
     note:"Kanji: 棚. Shelves, racks, and cupboards.",
     example:"本(ほん)を棚(たな)に置(お)いてください。",
     exampleSrc:"Please put the books on the shelf.",
     funFact:"Japanese homes maximize vertical space with shelves and storage. The tokonoma (alcove with a decorative shelf) is a feature of traditional Japanese rooms where art and flowers are displayed."},

    {type:"teach", trg:"カーテン", src:"curtain", pos:"noun", gender:null,
     note:"From English 'curtain.' Japanese homes typically have both レースカーテン and thick curtains.",
     example:"カーテンを閉(し)めてください。",
     exampleSrc:"Please close the curtains.",
     funFact:"Japanese apartments almost always have two layers of curtains: sheer lace curtains for daytime privacy and thick blackout curtains for sleeping. This dual-curtain system is standard in every home."},

    {type:"teach", trg:"掃除(そうじ)する", src:"to clean", pos:"verb", gender:null,
     note:"Kanji: 掃除する. Suru verb. Sweep + remove.",
     example:"日曜日(にちようび)に部屋(へや)を掃除(そうじ)します。",
     exampleSrc:"I clean my room on Sundays.",
     funFact:"Japanese school students clean their own classrooms daily (掃除(そうじ)の時間(じかん)). There are no janitors in most schools. This teaches responsibility and teamwork from a young age."},

    {type:"mc", q:"What does 冷蔵庫(れいぞうこ) mean?",
     opts:["refrigerator","washing machine","air conditioner","microwave"], ans:"refrigerator",
     hint:"The appliance where you keep food cold at home."},

    {type:"fb", s:"{1}を開(あ)けてもいいですか？", a:"窓(まど)",
     sSrc:"May I open the window?",
     opts:["窓(まど)","扉(とびら)","カーテン","冷蔵庫(れいぞうこ)"],
     hint:"The glass opening in a wall that lets in light and air."},

    {type:"match", pairs:[
      {trg:"椅子(いす)", src:"chair"},
      {trg:"机(つくえ)", src:"desk"},
      {trg:"棚(たな)", src:"shelf"},
      {trg:"鏡(かがみ)", src:"mirror"}
    ]},

    {type:"mc", q:"エアコン is short for:",
     opts:["air conditioner","air control","electric fan","heater"], ans:"air conditioner",
     hint:"A shortened katakana loanword for cooling/heating a room."},

    {type:"fb", s:"日曜日(にちようび)に部屋(へや)を{1}します。", a:"掃除(そうじ)",
     sSrc:"I clean my room on Sundays.",
     opts:["掃除(そうじ)","洗濯(せんたく)","料理(りょうり)","勉強(べんきょう)"],
     hint:"The act of sweeping, wiping, and tidying up."},

    {type:"mc", q:"Traditional Japanese sleeping uses:",
     opts:["布団(ふとん)","ベッド","ソファー","椅子(いす)"], ans:"布団(ふとん)",
     hint:"A foldable bedding placed on tatami floors at night."},

    {type:"mc", q:"What does 電気(でんき) mean?",
     opts:["electricity / light","gas","water","heat"], ans:"electricity / light",
     hint:"Both the energy source and the lamp in your room."}
  ]
};
export default BATCH4_L_1;
