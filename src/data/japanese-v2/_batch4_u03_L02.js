// Batch 4 — Unit 03 Lesson 2: Stationery & Everyday Objects
const BATCH4_L_2 = {
  id:"jav2_u03l_b4_2", title:"文房具(ぶんぼうぐ)", icon:"✏️", xp:15, board:true,
  steps:[
    {type:"intro", title:"文房具(ぶんぼうぐ)",
     desc:"Learn the names of stationery and small everyday objects. Japan is famous for its stationery culture, and these words are used daily.",
     goals:["Name common stationery items","Describe everyday carry items","Use counters for small objects"]},

    {type:"teach", trg:"ボールペン", src:"ballpoint pen", pos:"noun", gender:null,
     note:"From 'ball + pen.' More specific than just ペン.",
     example:"ボールペンを貸(か)してください。",
     exampleSrc:"Please lend me a ballpoint pen.",
     funFact:"Japan produces the world's best ballpoint pens. The Uni-ball Jetstream and Pilot Hi-Tec-C are considered the smoothest pens ever made. Japanese pen technology is exported globally."},

    {type:"teach", trg:"はさみ", src:"scissors", pos:"noun", gender:null,
     note:"Kanji: 鋏. Always used in singular form (no plural marker needed).",
     example:"はさみで紙(かみ)を切(き)ります。",
     exampleSrc:"I cut paper with scissors.",
     funFact:"Japanese scissors often have a unique design with thinner, more precise blades than Western scissors. Japanese craft scissors for paper cutting are works of art themselves."},

    {type:"teach", trg:"のり", src:"glue", pos:"noun", gender:null,
     note:"Originally rice paste glue. Modern glue sticks are also called のり.",
     example:"のりで紙(かみ)を貼(は)ります。",
     exampleSrc:"I stick paper with glue.",
     funFact:"Traditional Japanese glue was literally made from cooked rice (糊(のり)). This rice paste was used for centuries in paper crafts, bookbinding, and even building walls. The word survives for modern chemical glue."},

    {type:"teach", trg:"物差(ものさ)し", src:"ruler", pos:"noun", gender:null,
     note:"Also called 定規(じょうぎ). 物差(ものさ)し emphasizes measuring length.",
     example:"物差(ものさ)しで線(せん)を引(ひ)きます。",
     exampleSrc:"I draw a line with a ruler.",
     funFact:"Japanese rulers often show centimeters on one side and the traditional Japanese unit 'sun' on the other. One sun equals about 3.03 cm. The shaku-sun system predates metric adoption."},

    {type:"teach", trg:"封筒(ふうとう)", src:"envelope", pos:"noun", gender:null,
     note:"Kanji: 封筒. Seal + tube.",
     example:"手紙(てがみ)を封筒(ふうとう)に入(い)れます。",
     exampleSrc:"I put the letter in an envelope.",
     funFact:"Japanese envelope etiquette is complex. Money gifts (御祝儀(おしゅうぎ)) go in special decorated envelopes. White envelopes for congratulations, black for funerals. The folding direction matters too."},

    {type:"teach", trg:"切手(きって)", src:"postage stamp", pos:"noun", gender:null,
     note:"Kanji: 切手. Cut + hand. Originally a permit that was 'cut off.'",
     example:"切手(きって)を貼(は)ってください。",
     exampleSrc:"Please stick on a stamp.",
     funFact:"Japanese commemorative stamps are collector's items. The postal service releases beautiful designs for seasons, anime, landmarks, and cultural events. Some rare stamps are worth thousands of dollars."},

    {type:"teach", trg:"鍵(かぎ)", src:"key", pos:"noun", gender:null,
     note:"Kanji: 鍵. Also used metaphorically: 'the key to success.'",
     example:"鍵(かぎ)をなくしてしまいました。",
     exampleSrc:"I accidentally lost my key.",
     funFact:"Japanese apartment keys are transitioning to digital smart locks, but the old-fashioned key is still common. In Japan, losing your key is less of a safety concern because crime rates are extremely low."},

    {type:"teach", trg:"財布(さいふ)", src:"wallet", pos:"noun", gender:null,
     note:"Kanji: 財布. Wealth + cloth. Originally a money pouch.",
     example:"財布(さいふ)にお金(かね)がありません。",
     exampleSrc:"There is no money in my wallet.",
     funFact:"Japan is still largely a cash society. Japanese wallets are often long and slim to hold bills unfolded, because folding money is considered slightly disrespectful to the currency."},

    {type:"teach", trg:"鞄(かばん)", src:"bag", pos:"noun", gender:null,
     note:"A general word for any bag. Backpack: リュック. Briefcase: ブリーフケース.",
     example:"鞄(かばん)の中(なか)に何(なに)がありますか？",
     exampleSrc:"What is inside the bag?",
     funFact:"The Japanese word kaban may come from Dutch 'kabas' (basket). Elementary students all carry the iconic randoseru (ランドセル), a rigid leather backpack that lasts all six school years."},

    {type:"teach", trg:"眼鏡(めがね)", src:"glasses / eyeglasses", pos:"noun", gender:null,
     note:"Kanji: 眼鏡. Eye + mirror. Sunglasses: サングラス.",
     example:"眼鏡(めがね)をかけています。",
     exampleSrc:"I am wearing glasses.",
     funFact:"Japan has a high rate of myopia. Over 60% of Japanese teens need vision correction. The phrase '眼鏡(めがね)をかける' (to hang glasses) uses a different verb than wearing clothes (着(き)る) or hats (被(かぶ)る)."},

    {type:"teach", trg:"ハンカチ", src:"handkerchief", pos:"noun", gender:null,
     note:"From English 'handkerchief.' Essential in Japanese daily life.",
     example:"ハンカチを忘(わす)れないでね。",
     exampleSrc:"Don't forget your handkerchief.",
     funFact:"Japanese people always carry a handkerchief because public restrooms often lack hand dryers or paper towels. Not having a hankerchief is considered a bit careless."},

    {type:"teach", trg:"手帳(てちょう)", src:"planner / pocket diary", pos:"noun", gender:null,
     note:"Kanji: 手帳. Hand + notebook. Personal organizers.",
     example:"予定(よてい)を手帳(てちょう)に書(か)きます。",
     exampleSrc:"I write plans in my planner.",
     funFact:"Japanese stationery shops dedicate entire floors to techou planners. The October-start (matching fiscal year) and April-start (matching school year) planners sell millions each year. Hobonichi Techo is a cult favorite worldwide."},

    {type:"teach", trg:"辞書(じしょ)", src:"dictionary", pos:"noun", gender:null,
     note:"Kanji: 辞書. Words + book. Electronic: 電子辞書(でんしじしょ).",
     example:"わからないことばを辞書(じしょ)で調(しら)べます。",
     exampleSrc:"I look up unknown words in a dictionary.",
     funFact:"Before smartphones, the Casio electronic dictionary (電子辞書(でんしじしょ)) was essential for every student. These devices contained dozens of dictionaries in one. Some Japanese students still prefer them for exam preparation."},

    {type:"teach", trg:"調(しら)べる", src:"to look up / investigate", pos:"verb", gender:null,
     note:"Ichidan verb. Te-form: 調(しら)べて. Used for research and checking facts.",
     example:"インターネットで調(しら)べました。",
     exampleSrc:"I looked it up on the internet.",
     funFact:"The kanji 調 combines words (言) with a cycle (周), suggesting thorough investigation by checking all around. Japanese students are taught to always 調(しら)べる before asking others."},

    {type:"mc", q:"What is a ハンカチ?",
     opts:["handkerchief","hat","scarf","glove"], ans:"handkerchief",
     hint:"A small cloth Japanese people always carry for drying hands."},

    {type:"fb", s:"{1}で紙(かみ)を切(き)ります。", a:"はさみ",
     sSrc:"I cut paper with scissors.",
     opts:["はさみ","のり","物差(ものさ)し","ボールペン"],
     hint:"A cutting tool with two blades that open and close."},

    {type:"match", pairs:[
      {trg:"財布(さいふ)", src:"wallet"},
      {trg:"鍵(かぎ)", src:"key"},
      {trg:"眼鏡(めがね)", src:"glasses"},
      {trg:"鞄(かばん)", src:"bag"}
    ]},

    {type:"mc", q:"What does 辞書(じしょ) mean?",
     opts:["dictionary","textbook","novel","newspaper"], ans:"dictionary",
     hint:"A book or app where you look up words and their meanings."},

    {type:"fb", s:"わからないことばを{1}で調(しら)べます。", a:"辞書(じしょ)",
     sSrc:"I look up unknown words in a dictionary.",
     opts:["辞書(じしょ)","手帳(てちょう)","ノート","本(ほん)"],
     hint:"The reference tool specifically for finding word meanings."},

    {type:"mc", q:"切手(きって) means:",
     opts:["postage stamp","envelope","letter","postcard"], ans:"postage stamp",
     hint:"The small adhesive piece you stick on mail for delivery."},

    {type:"mc", q:"What does 調(しら)べる mean?",
     opts:["to look up","to write","to read","to forget"], ans:"to look up",
     hint:"To investigate or research something you do not know."}
  ,{type:"match",pairs:[{trg:"ボールペン",src:"ballpoint pen"},{trg:"のり",src:"glue"},{trg:"物差(ものさ)し",src:"ruler"},{trg:"封筒(ふうとう)",src:"envelope"},{trg:"切手(きって)",src:"postage stamp"},{trg:"ハンカチ",src:"handkerchief"}]},{type:"match",pairs:[{trg:"手帳(てちょう)",src:"planner / pocket diary"},{trg:"調(しら)べる",src:"to look up / investigate"}]}]
};
export default BATCH4_L_2;
