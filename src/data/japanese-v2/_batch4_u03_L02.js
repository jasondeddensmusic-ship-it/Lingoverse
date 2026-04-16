// Batch 4 — Unit 03 Lesson 2: Stationery & Everyday Objects
const BATCH4_L_2 = {
  id:"jav2_u03l_b4_2", title:"ぶんぼうぐ", icon:"✏️", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんぼうぐ",
     desc:"Learn the names of stationery and small everyday objects. Japan is famous for its stationery culture, and these words are used daily.",
     goals:["Name common stationery items","Describe everyday carry items","Use counters for small objects"]},

    {type:"teach", trg:"ボールペン", src:"ballpoint pen", pos:"noun", gender:null,
     note:"From 'ball + pen.' More specific than just ペン.",
     example:"ボールペンをかしてください。",
     exampleSrc:"Please lend me a ballpoint pen.",
     funFact:"Japan produces the world's best ballpoint pens. The Uni-ball Jetstream and Pilot Hi-Tec-C are considered the smoothest pens ever made. Japanese pen technology is exported globally."},

    {type:"teach", trg:"はさみ", src:"scissors", pos:"noun", gender:null,
     note:"Kanji: 鋏. Always used in singular form (no plural marker needed).",
     example:"はさみでかみをきります。",
     exampleSrc:"I cut paper with scissors.",
     funFact:"Japanese scissors often have a unique design with thinner, more precise blades than Western scissors. Japanese craft scissors for paper cutting are works of art themselves."},

    {type:"teach", trg:"のり", src:"glue", pos:"noun", gender:null,
     note:"Originally rice paste glue. Modern glue sticks are also called のり.",
     example:"のりでかみをはります。",
     exampleSrc:"I stick paper with glue.",
     funFact:"Traditional Japanese glue was literally made from cooked rice (糊). This rice paste was used for centuries in paper crafts, bookbinding, and even building walls. The word survives for modern chemical glue."},

    {type:"teach", trg:"ものさし", src:"ruler", pos:"noun", gender:null,
     note:"Also called じょうぎ (定規). ものさし emphasizes measuring length.",
     example:"ものさしでせんをひきます。",
     exampleSrc:"I draw a line with a ruler.",
     funFact:"Japanese rulers often show centimeters on one side and the traditional Japanese unit 'sun' on the other. One sun equals about 3.03 cm. The shaku-sun system predates metric adoption."},

    {type:"teach", trg:"ふうとう", src:"envelope", pos:"noun", gender:null,
     note:"Kanji: 封筒. Seal + tube.",
     example:"てがみをふうとうにいれます。",
     exampleSrc:"I put the letter in an envelope.",
     funFact:"Japanese envelope etiquette is complex. Money gifts (御祝儀) go in special decorated envelopes. White envelopes for congratulations, black for funerals. The folding direction matters too."},

    {type:"teach", trg:"きって", src:"postage stamp", pos:"noun", gender:null,
     note:"Kanji: 切手. Cut + hand. Originally a permit that was 'cut off.'",
     example:"きってをはってください。",
     exampleSrc:"Please stick on a stamp.",
     funFact:"Japanese commemorative stamps are collector's items. The postal service releases beautiful designs for seasons, anime, landmarks, and cultural events. Some rare stamps are worth thousands of dollars."},

    {type:"teach", trg:"かぎ", src:"key", pos:"noun", gender:null,
     note:"Kanji: 鍵. Also used metaphorically: 'the key to success.'",
     example:"かぎをなくしてしまいました。",
     exampleSrc:"I accidentally lost my key.",
     funFact:"Japanese apartment keys are transitioning to digital smart locks, but the old-fashioned key is still common. In Japan, losing your key is less of a safety concern because crime rates are extremely low."},

    {type:"teach", trg:"さいふ", src:"wallet", pos:"noun", gender:null,
     note:"Kanji: 財布. Wealth + cloth. Originally a money pouch.",
     example:"さいふにおかねがありません。",
     exampleSrc:"There is no money in my wallet.",
     funFact:"Japan is still largely a cash society. Japanese wallets are often long and slim to hold bills unfolded, because folding money is considered slightly disrespectful to the currency."},

    {type:"teach", trg:"かばん", src:"bag", pos:"noun", gender:null,
     note:"A general word for any bag. Backpack: リュック. Briefcase: ブリーフケース.",
     example:"かばんのなかになにがありますか？",
     exampleSrc:"What is inside the bag?",
     funFact:"The Japanese word kaban may come from Dutch 'kabas' (basket). Elementary students all carry the iconic randoseru (ランドセル), a rigid leather backpack that lasts all six school years."},

    {type:"teach", trg:"めがね", src:"glasses / eyeglasses", pos:"noun", gender:null,
     note:"Kanji: 眼鏡. Eye + mirror. Sunglasses: サングラス.",
     example:"めがねをかけています。",
     exampleSrc:"I am wearing glasses.",
     funFact:"Japan has a high rate of myopia. Over 60% of Japanese teens need vision correction. The phrase 'megane wo kakeru' (to hang glasses) uses a different verb than wearing clothes (kiru) or hats (kaburu)."},

    {type:"teach", trg:"ハンカチ", src:"handkerchief", pos:"noun", gender:null,
     note:"From English 'handkerchief.' Essential in Japanese daily life.",
     example:"ハンカチをわすれないでね。",
     exampleSrc:"Don't forget your handkerchief.",
     funFact:"Japanese people always carry a handkerchief because public restrooms often lack hand dryers or paper towels. Not having a hankerchief is considered a bit careless."},

    {type:"teach", trg:"てちょう", src:"planner / pocket diary", pos:"noun", gender:null,
     note:"Kanji: 手帳. Hand + notebook. Personal organizers.",
     example:"よていをてちょうにかきます。",
     exampleSrc:"I write plans in my planner.",
     funFact:"Japanese stationery shops dedicate entire floors to techou planners. The October-start (matching fiscal year) and April-start (matching school year) planners sell millions each year. Hobonichi Techo is a cult favorite worldwide."},

    {type:"teach", trg:"じしょ", src:"dictionary", pos:"noun", gender:null,
     note:"Kanji: 辞書. Words + book. Electronic: でんしじしょ.",
     example:"わからないことばをじしょでしらべます。",
     exampleSrc:"I look up unknown words in a dictionary.",
     funFact:"Before smartphones, the Casio electronic dictionary (電子辞書) was essential for every student. These devices contained dozens of dictionaries in one. Some Japanese students still prefer them for exam preparation."},

    {type:"teach", trg:"しらべる", src:"to look up / investigate", pos:"verb", gender:null,
     note:"Ichidan verb. Te-form: しらべて. Used for research and checking facts.",
     example:"インターネットでしらべました。",
     exampleSrc:"I looked it up on the internet.",
     funFact:"The kanji 調 combines words (言) with a cycle (周), suggesting thorough investigation by checking all around. Japanese students are taught to always しらべる before asking others."},

    {type:"mc", q:"What is a ハンカチ?",
     opts:["handkerchief","hat","scarf","glove"], ans:"handkerchief",
     hint:"A small cloth Japanese people always carry for drying hands."},

    {type:"fb", s:"{1}でかみをきります。", a:"はさみ",
     sSrc:"I cut paper with scissors.",
     opts:["はさみ","のり","ものさし","ボールペン"],
     hint:"A cutting tool with two blades that open and close."},

    {type:"match", pairs:[
      {trg:"さいふ", src:"wallet"},
      {trg:"かぎ", src:"key"},
      {trg:"めがね", src:"glasses"},
      {trg:"かばん", src:"bag"}
    ]},

    {type:"mc", q:"What does じしょ mean?",
     opts:["dictionary","textbook","novel","newspaper"], ans:"dictionary",
     hint:"A book or app where you look up words and their meanings."},

    {type:"fb", s:"わからないことばを{1}でしらべます。", a:"じしょ",
     sSrc:"I look up unknown words in a dictionary.",
     opts:["じしょ","てちょう","ノート","ほん"],
     hint:"The reference tool specifically for finding word meanings."},

    {type:"mc", q:"きって means:",
     opts:["postage stamp","envelope","letter","postcard"], ans:"postage stamp",
     hint:"The small adhesive piece you stick on mail for delivery."},

    {type:"mc", q:"What does しらべる mean?",
     opts:["to look up","to write","to read","to forget"], ans:"to look up",
     hint:"To investigate or research something you do not know."}
  ]
};
export default BATCH4_L_2;
