// Batch 4 — Unit 03 Lesson 1: Furniture & Household Items
const BATCH4_L_1 = {
  id:"jav2_u03l_b4_1", title:"かぐ", icon:"🛋️", xp:15, board:true,
  steps:[
    {type:"intro", title:"かぐとかでん",
     desc:"Learn the names of common furniture and household items. These words will help you describe your living space and shop for your home.",
     goals:["Name common furniture pieces","Describe items in your home","Use location words with household objects"]},

    {type:"teach", trg:"いす", src:"chair", pos:"noun", gender:null,
     note:"Can be written 椅子. One of the first household words you need.",
     example:"いすにすわってください。",
     exampleSrc:"Please sit on the chair.",
     funFact:"Traditional Japanese homes use zabuton (floor cushions) instead of chairs. Sitting on chairs only became common after the Meiji era when Western furniture was introduced. Many Japanese still prefer floor seating at home."},

    {type:"teach", trg:"つくえ", src:"desk", pos:"noun", gender:null,
     note:"Kanji: 机. Specifically a desk for work or study. Dining table is テーブル.",
     example:"つくえのうえにほんがあります。",
     exampleSrc:"There is a book on the desk.",
     funFact:"Japanese elementary students all use the same type of desk with a built-in shelf underneath. These desks are designed to be rearranged into groups for collaborative learning."},

    {type:"teach", trg:"テーブル", src:"table", pos:"noun", gender:null,
     note:"From English 'table.' Used for dining and coffee tables.",
     example:"テーブルのうえにはながあります。",
     exampleSrc:"There are flowers on the table.",
     funFact:"Many Japanese homes have a kotatsu, a low table with a heater underneath and a blanket draped over it. Families gather around the kotatsu in winter to eat, watch TV, and nap."},

    {type:"teach", trg:"ベッド", src:"bed", pos:"noun", gender:null,
     note:"From English 'bed.' Traditional Japanese sleeping uses ふとん (futon).",
     example:"あたらしいベッドをかいました。",
     exampleSrc:"I bought a new bed.",
     funFact:"Futons folded up each morning give the room daytime space. Many young Japanese now prefer beds, but futons remain popular. The ability to put away your bed and use the room for other purposes is very practical in small apartments."},

    {type:"teach", trg:"まど", src:"window", pos:"noun", gender:null,
     note:"Kanji: 窓. Japanese windows often slide open rather than swing.",
     example:"まどをあけてもいいですか？",
     exampleSrc:"May I open the window?",
     funFact:"The kanji 窓 is quite complex (14 strokes). Japanese sliding windows and doors (引き戸) are traditional. Western-style swinging windows are called 開き窓 (hiraki-mado)."},

    {type:"teach", trg:"とびら", src:"door", pos:"noun", gender:null,
     note:"Kanji: 扉. A more literary word. Everyday speech also uses ドア.",
     example:"とびらをしめてください。",
     exampleSrc:"Please close the door.",
     funFact:"Traditional Japanese sliding doors include fusuma (opaque) and shoji (translucent paper). Shoji screens filter light beautifully. The word tobira originally referred to a hinged door, distinguishing it from sliding types."},

    {type:"teach", trg:"れいぞうこ", src:"refrigerator", pos:"noun", gender:null,
     note:"Kanji: 冷蔵庫. Cold + store + warehouse.",
     example:"ぎゅうにゅうはれいぞうこにあります。",
     exampleSrc:"The milk is in the refrigerator.",
     funFact:"Japanese refrigerators are engineering marvels with compartments for vegetables, meat, frozen goods, and even a special zone for keeping things at just above freezing. They also tend to be much quieter than Western models."},

    {type:"teach", trg:"せんたくき", src:"washing machine", pos:"noun", gender:null,
     note:"Kanji: 洗濯機. Wash + launder + machine.",
     example:"せんたくきがこわれました。",
     exampleSrc:"The washing machine broke.",
     funFact:"Most Japanese washing machines wash with cold water only and are top-loading. Japanese people hang-dry clothes on balconies rather than using dryers. Dryers are considered wasteful and bad for clothes."},

    {type:"teach", trg:"でんき", src:"electricity / light", pos:"noun", gender:null,
     note:"Kanji: 電気. Electric + energy. Also means the room light.",
     example:"でんきをけしてください。",
     exampleSrc:"Please turn off the light.",
     funFact:"Denki means both 'electricity' and 'the room light' depending on context. The phrase 'denki wo tsukete' (turn on the light) and 'denki wo keshite' (turn off the light) are among the most commonly used household phrases."},

    {type:"teach", trg:"エアコン", src:"air conditioner", pos:"noun", gender:null,
     note:"Shortened from エアコンディショナー. Essential in Japanese summers.",
     example:"あついからエアコンをつけましょう。",
     exampleSrc:"It's hot, so let's turn on the AC.",
     funFact:"Almost every room in Japan has its own wall-mounted AC unit. Japanese AC technology is among the best in the world. Companies like Daikin, Mitsubishi, and Panasonic export globally."},

    {type:"teach", trg:"かがみ", src:"mirror", pos:"noun", gender:null,
     note:"Kanji: 鏡. One of the three sacred treasures of Japan is the mirror.",
     example:"かがみをみてください。",
     exampleSrc:"Please look in the mirror.",
     funFact:"The sacred mirror (八咫鏡 Yata no Kagami) is one of Japan's three imperial regalia, kept at the Ise Grand Shrine. Mirrors in Shinto represent truth because they reflect reality without deception."},

    {type:"teach", trg:"たな", src:"shelf", pos:"noun", gender:null,
     note:"Kanji: 棚. Shelves, racks, and cupboards.",
     example:"ほんをたなにおいてください。",
     exampleSrc:"Please put the books on the shelf.",
     funFact:"Japanese homes maximize vertical space with shelves and storage. The tokonoma (alcove with a decorative shelf) is a feature of traditional Japanese rooms where art and flowers are displayed."},

    {type:"teach", trg:"カーテン", src:"curtain", pos:"noun", gender:null,
     note:"From English 'curtain.' Japanese homes typically have both レースカーテン and thick curtains.",
     example:"カーテンをしめてください。",
     exampleSrc:"Please close the curtains.",
     funFact:"Japanese apartments almost always have two layers of curtains: sheer lace curtains for daytime privacy and thick blackout curtains for sleeping. This dual-curtain system is standard in every home."},

    {type:"teach", trg:"そうじする", src:"to clean", pos:"verb", gender:null,
     note:"Kanji: 掃除する. Suru verb. Sweep + remove.",
     example:"にちようびにへやをそうじします。",
     exampleSrc:"I clean my room on Sundays.",
     funFact:"Japanese school students clean their own classrooms daily (掃除の時間). There are no janitors in most schools. This teaches responsibility and teamwork from a young age."},

    {type:"mc", q:"What does れいぞうこ mean?",
     opts:["refrigerator","washing machine","air conditioner","microwave"], ans:"refrigerator",
     hint:"The appliance where you keep food cold at home."},

    {type:"fb", s:"{1}をあけてもいいですか？", a:"まど",
     sSrc:"May I open the window?",
     opts:["まど","とびら","カーテン","れいぞうこ"],
     hint:"The glass opening in a wall that lets in light and air."},

    {type:"match", pairs:[
      {trg:"いす", src:"chair"},
      {trg:"つくえ", src:"desk"},
      {trg:"たな", src:"shelf"},
      {trg:"かがみ", src:"mirror"}
    ]},

    {type:"mc", q:"エアコン is short for:",
     opts:["air conditioner","air control","electric fan","heater"], ans:"air conditioner",
     hint:"A shortened katakana loanword for cooling/heating a room."},

    {type:"fb", s:"にちようびにへやを{1}します。", a:"そうじ",
     sSrc:"I clean my room on Sundays.",
     opts:["そうじ","せんたく","りょうり","べんきょう"],
     hint:"The act of sweeping, wiping, and tidying up."},

    {type:"mc", q:"Traditional Japanese sleeping uses:",
     opts:["ふとん","ベッド","ソファー","いす"], ans:"ふとん",
     hint:"A foldable bedding placed on tatami floors at night."},

    {type:"mc", q:"What does でんき mean?",
     opts:["electricity / light","gas","water","heat"], ans:"electricity / light",
     hint:"Both the energy source and the lamp in your room."}
  ]
};
export default BATCH4_L_1;
