// Batch 9 – Unit 03 (A1.1 What Is This?): Classroom Objects
const BATCH9_L1 = {
  id:"jav2_u03l_b9_1", title:"教室(きょうしつ)のもの", icon:"📎", xp:15, board:true,
  steps:[
    {type:"intro", title:"教室(きょうしつ)のもの",
     desc:"Learn the names of common classroom and stationery items. These words appear frequently in beginner Japanese textbooks and daily life.",
     goals:["Name common classroom objects","Use これ/それ/あれ with new vocabulary","Ask and answer what things are"]},

    {type:"teach", trg:"けしゴム", src:"eraser", pos:"noun", gender:null,
     note:"けし = erasing, ゴム = rubber (from Dutch 'gom').\nAlso called イレイサー in some contexts.",
     example:"A: けしゴムを貸(か)してください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please lend me an eraser.\nB: Here you go.",
     funFact:"The word ゴム comes from the Dutch word 'gom,' reflecting Japan's historical trade with the Netherlands. Japanese stationery is world-famous, and brands like Mono make erasers that are exported globally."},

    {type:"teach", trg:"はさみ", src:"scissors", pos:"noun", gender:null,
     note:"Always used in singular form in Japanese.\nはさみで丸(まる)を切(き)る = cut a circle with scissors.",
     example:"A: はさみはどこですか？\nB: 机(つくえ)の上(うえ)にあります。",
     exampleSrc:"A: Where are the scissors?\nB: They are on the desk.",
     funFact:"はさみ comes from はさむ (to pinch/clip). Unlike English, Japanese treats scissors as singular. Japanese はさみ craftsmen in Sakai, Osaka have been making blades for centuries, and Japanese scissors are prized by hairdressers worldwide."},

    {type:"teach", trg:"のり", src:"glue", pos:"noun", gender:null,
     note:"Stick glue: スティックのり.\nLiquid glue: 液体(えきたい)のり.",
     example:"A: のりを使(つか)ってください。\nB: スティックのりでいいですか？",
     exampleSrc:"A: Please use glue.\nB: Is stick glue okay?",
     funFact:"Traditional Japanese のり was made from rice starch. The word also means 'seaweed' (海苔) in a different context, which is a completely different thing. Japanese stationery brand Yamato's のり is an iconic classroom product since 1899."},

    {type:"teach", trg:"ものさし", src:"ruler", pos:"noun", gender:null,
     note:"Also called 定規(じょうぎ) (more formal).\n三十(さんじゅっ)センチのものさし = 30 cm ruler.",
     example:"A: ものさしで線(せん)を引(ひ)いてください。\nB: わかりました。",
     exampleSrc:"A: Please draw a line with a ruler.\nB: Understood.",
     funFact:"ものさし literally means 'thing measurer.' The more formal 定規(じょうぎ) means 'fixed rule.' Technically, ものさし is for measuring and 定規(じょうぎ) is for drawing straight lines, but most people use them interchangeably."},

    {type:"teach", trg:"筆箱(ふでばこ)", src:"pencil case", pos:"noun", gender:null,
     note:"筆(ふで) = brush/writing tool, 箱(はこ) = box.\nEvery student carries one.",
     example:"A: それはかわいい筆箱(ふでばこ)ですね。\nB: ありがとう。新(あたら)しいんです。",
     exampleSrc:"A: That is a cute pencil case.\nB: Thank you. It is new.",
     funFact:"筆箱(ふでばこ) literally means 'brush box,' from the days when students used calligraphy brushes. Modern 筆箱(ふでばこ) come in endless designs. Japanese elementary students often have elaborate multi-layered magnetic 筆箱(ふでばこ) that are engineering marvels."},

    {type:"teach", trg:"教科書(きょうかしょ)", src:"textbook", pos:"noun", gender:null,
     note:"教科(きょうか) = subject, 書(しょ) = book.\n教科書(きょうかしょ)を開(ひら)いてください = Please open your textbook.",
     example:"A: 教科書(きょうかしょ)の二十(にじゅう)ページを開(ひら)いてください。\nB: はい、先生(せんせい)。",
     exampleSrc:"A: Please open your textbook to page twenty.\nB: Yes, teacher.",
     funFact:"Japanese 教科書(きょうかしょ) are provided free to all elementary and junior high school students by the government. They are reviewed and approved by the Ministry of Education. The 教科書(きょうかしょ) review process sometimes causes international controversy."},

    {type:"teach", trg:"黒板(こくばん)", src:"blackboard", pos:"noun", gender:null,
     note:"黒(こく) = black, 板(ばん) = board.\n黒板消(こくばんけ)し = blackboard eraser.",
     example:"A: 黒板(こくばん)を見(み)てください。\nB: はい。",
     exampleSrc:"A: Please look at the blackboard.\nB: Yes.",
     funFact:"Most Japanese classrooms still use 黒板(こくばん) rather than whiteboards. The 黒板(こくばん) is actually green, not black, because green reduces eye strain. 黒板(こくばん)アート (blackboard art) is a viral trend where students create elaborate chalk drawings."},

    {type:"teach", trg:"ホチキス", src:"stapler", pos:"noun", gender:null,
     note:"Named after the Hotchkiss brand.\nホチキスで止(と)める = to staple.",
     example:"A: ホチキスを貸(か)してください。\nB: はい、これを使(つか)ってください。",
     exampleSrc:"A: Please lend me the stapler.\nB: Here, use this one.",
     funFact:"ホチキス is named after the E.H. Hotchkiss company that first exported staplers to Japan. Unlike English 'stapler,' Japanese kept the brand name. Similarly, バンドエイド (Band-Aid) is used for all adhesive bandages regardless of brand."},

    {type:"mc", q:"What does 筆箱(ふでばこ) literally mean?", opts:["Brush box","Pen house","Color bag","Writing desk"], ans:"Brush box",
     hint:"筆(ふで) means writing b... (from calligraphy days) and 箱(はこ) means b... or container."},

    {type:"fb", s:"{1}の二十(にじゅう)ページを開(ひら)いてください。\n(Please open your textbook to page twenty.)", a:"教科書(きょうかしょ)", opts:["教科書(きょうかしょ)","ノート","筆箱(ふでばこ)","辞書(じしょ)"], sSrc:"Please open your textbook to page twenty.",
     hint:"This word refers to the official study book used in class for a particular subject."},

    {type:"match", pairs:[
      {trg:"けしゴム", src:"eraser"},
      {trg:"はさみ", src:"scissors"},
      {trg:"のり", src:"glue"},
      {trg:"ホチキス", src:"stapler"}
    ]},

    {type:"mc", q:"Why is the Japanese word for 'blackboard' (黒板(こくばん)) ironic?", opts:["Most Japanese blackboards are actually green","They are made of white wood","Students write on paper instead","The word means 'green board'"], ans:"Most Japanese blackboards are actually green",
     hint:"Despite the name meaning 'black board,' the actual color was changed to reduce eye strain."}
  ,{type:"match",pairs:[{trg:"ものさし",src:"ruler"},{trg:"筆箱(ふでばこ)",src:"pencil case"},{trg:"黒板(こくばん)",src:"blackboard"}]}]
};
export default BATCH9_L1;
