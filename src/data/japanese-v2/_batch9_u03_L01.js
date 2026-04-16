// Batch 9 – Unit 03 (A1.1 What Is This?): Classroom Objects
const BATCH9_L1 = {
  id:"jav2_u03l_b9_1", title:"きょうしつのもの", icon:"📎", xp:15, board:true,
  steps:[
    {type:"intro", title:"きょうしつのもの",
     desc:"Learn the names of common classroom and stationery items. These words appear frequently in beginner Japanese textbooks and daily life.",
     goals:["Name common classroom objects","Use これ/それ/あれ with new vocabulary","Ask and answer what things are"]},

    {type:"teach", trg:"けしゴム", src:"eraser", pos:"noun", gender:null,
     note:"けし = erasing, ゴム = rubber (from Dutch 'gom').\nAlso called イレイサー in some contexts.",
     example:"A: けしゴムをかしてください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please lend me an eraser.\nB: Here you go.",
     funFact:"The word ゴム comes from the Dutch word 'gom,' reflecting Japan's historical trade with the Netherlands. Japanese stationery is world-famous, and brands like Mono make erasers that are exported globally."},

    {type:"teach", trg:"はさみ", src:"scissors", pos:"noun", gender:null,
     note:"Always used in singular form in Japanese.\nはさみでまるをきる = cut a circle with scissors.",
     example:"A: はさみはどこですか？\nB: つくえのうえにあります。",
     exampleSrc:"A: Where are the scissors?\nB: They are on the desk.",
     funFact:"はさみ comes from はさむ (to pinch/clip). Unlike English, Japanese treats scissors as singular. Japanese はさみ craftsmen in Sakai, Osaka have been making blades for centuries, and Japanese scissors are prized by hairdressers worldwide."},

    {type:"teach", trg:"のり", src:"glue", pos:"noun", gender:null,
     note:"Stick glue: スティックのり.\nLiquid glue: えきたいのり.",
     example:"A: のりをつかってください。\nB: スティックのりでいいですか？",
     exampleSrc:"A: Please use glue.\nB: Is stick glue okay?",
     funFact:"Traditional Japanese のり was made from rice starch. The word also means 'seaweed' (海苔) in a different context, which is a completely different thing. Japanese stationery brand Yamato's のり is an iconic classroom product since 1899."},

    {type:"teach", trg:"ものさし", src:"ruler", pos:"noun", gender:null,
     note:"Also called じょうぎ (more formal).\nさんじゅっセンチのものさし = 30 cm ruler.",
     example:"A: ものさしでせんをひいてください。\nB: わかりました。",
     exampleSrc:"A: Please draw a line with a ruler.\nB: Understood.",
     funFact:"ものさし literally means 'thing measurer.' The more formal じょうぎ (定規) means 'fixed rule.' Technically, ものさし is for measuring and じょうぎ is for drawing straight lines, but most people use them interchangeably."},

    {type:"teach", trg:"ふでばこ", src:"pencil case", pos:"noun", gender:null,
     note:"ふで = brush/writing tool, はこ = box.\nEvery student carries one.",
     example:"A: それはかわいいふでばこですね。\nB: ありがとう。あたらしいんです。",
     exampleSrc:"A: That is a cute pencil case.\nB: Thank you. It is new.",
     funFact:"ふでばこ (筆箱) literally means 'brush box,' from the days when students used calligraphy brushes. Modern ふでばこ come in endless designs. Japanese elementary students often have elaborate multi-layered magnetic ふでばこ that are engineering marvels."},

    {type:"teach", trg:"きょうかしょ", src:"textbook", pos:"noun", gender:null,
     note:"きょうか = subject, しょ = book.\nきょうかしょをひらいてください = Please open your textbook.",
     example:"A: きょうかしょのにじゅうページをひらいてください。\nB: はい、せんせい。",
     exampleSrc:"A: Please open your textbook to page twenty.\nB: Yes, teacher.",
     funFact:"Japanese きょうかしょ (教科書) are provided free to all elementary and junior high school students by the government. They are reviewed and approved by the Ministry of Education. The きょうかしょ review process sometimes causes international controversy."},

    {type:"teach", trg:"こくばん", src:"blackboard", pos:"noun", gender:null,
     note:"こく = black, ばん = board.\nこくばんけし = blackboard eraser.",
     example:"A: こくばんをみてください。\nB: はい。",
     exampleSrc:"A: Please look at the blackboard.\nB: Yes.",
     funFact:"Most Japanese classrooms still use こくばん (黒板) rather than whiteboards. The こくばん is actually green, not black, because green reduces eye strain. こくばんアート (blackboard art) is a viral trend where students create elaborate chalk drawings."},

    {type:"teach", trg:"ホチキス", src:"stapler", pos:"noun", gender:null,
     note:"Named after the Hotchkiss brand.\nホチキスでとめる = to staple.",
     example:"A: ホチキスをかしてください。\nB: はい、これをつかってください。",
     exampleSrc:"A: Please lend me the stapler.\nB: Here, use this one.",
     funFact:"ホチキス is named after the E.H. Hotchkiss company that first exported staplers to Japan. Unlike English 'stapler,' Japanese kept the brand name. Similarly, バンドエイド (Band-Aid) is used for all adhesive bandages regardless of brand."},

    {type:"mc", q:"What does ふでばこ literally mean?", opts:["Brush box","Pen house","Color bag","Writing desk"], ans:"Brush box",
     hint:"ふで means writing b... (from calligraphy days) and はこ means b... or container."},

    {type:"fb", s:"{1}のにじゅうページをひらいてください。\n(Please open your textbook to page twenty.)", a:"きょうかしょ", opts:["きょうかしょ","ノート","ふでばこ","じしょ"], sSrc:"Please open your textbook to page twenty.",
     hint:"This word refers to the official study book used in class for a particular subject."},

    {type:"match", pairs:[
      {trg:"けしゴム", src:"eraser"},
      {trg:"はさみ", src:"scissors"},
      {trg:"のり", src:"glue"},
      {trg:"ホチキス", src:"stapler"}
    ]},

    {type:"mc", q:"Why is the Japanese word for 'blackboard' (こくばん) ironic?", opts:["Most Japanese blackboards are actually green","They are made of white wood","Students write on paper instead","The word means 'green board'"], ans:"Most Japanese blackboards are actually green",
     hint:"Despite the name meaning 'black board,' the actual color was changed to reduce eye strain."}
  ]
};
export default BATCH9_L1;
