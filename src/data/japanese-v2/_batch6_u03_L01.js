// Batch 6 – Unit 03 (A1.1 What Is This?): Classroom & Stationery
const BATCH6_L1 = {
  id:"jav2_u03l_b6_1", title:"きょうしつ", icon:"📐", xp:15, board:true,
  steps:[
    {type:"intro", title:"きょうしつ",
     desc:"Learn the names of common classroom and stationery items. These are among the first nouns every Japanese learner needs, and they pair perfectly with これ/それ/あれ patterns.",
     goals:["Name classroom and stationery items","Use counter words for flat and thin objects","Practice これ/それ/あれ with new vocabulary"]},

    {type:"teach", trg:"えんぴつ", src:"pencil", pos:"noun", gender:null,
     note:"Kanji: 鉛筆. いっぽん, にほん for counting.\nシャープペンシル = mechanical pencil.",
     example:"A: えんぴつをかしてください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please lend me a pencil.\nB: Here you go.",
     funFact:"鉛筆 combines 鉛 (lead) and 筆 (writing brush). Japanese students traditionally use pencils through elementary school, switching to シャーペン (mechanical pencil, shortened from シャープペンシル) in middle school. The brand Tombow has made pencils in Japan since 1913."},

    {type:"teach", trg:"けしゴム", src:"eraser", pos:"noun", gender:null,
     note:"けし = erasing, ゴム = rubber (from Dutch 'gom').\nAlso called イレーサー in some contexts.",
     example:"A: けしゴムはありますか？\nB: はい、これをつかってください。",
     exampleSrc:"A: Do you have an eraser?\nB: Yes, please use this one.",
     funFact:"The ゴム in けしゴム comes from Dutch 'gom' (rubber), reflecting the Dutch trading relationship with Japan during the Edo period. Japanese erasers are famous for quality. The brand MONO by Tombow is used worldwide."},

    {type:"teach", trg:"ノート", src:"notebook", pos:"noun", gender:null,
     note:"Katakana loanword from English 'note.'\nノートをとる = to take notes.",
     example:"A: このノートはだれのですか？\nB: わたしのです。",
     exampleSrc:"A: Whose notebook is this?\nB: It is mine.",
     funFact:"Japanese students use special squared notebooks called ジャポニカがくしゅうちょう for kanji practice. Each square fits one character. The brand has been sold since 1970 and features nature photographs on the covers."},

    {type:"teach", trg:"はさみ", src:"scissors", pos:"noun", gender:null,
     note:"Always used in singular form (no plural marker).\nはさみでかみをきる = cut paper with scissors.",
     example:"A: はさみはどこですか？\nB: つくえのうえにあります。",
     exampleSrc:"A: Where are the scissors?\nB: They are on the desk.",
     funFact:"はさみ originally comes from the verb はさむ (to pinch/clip between). Japanese scissors for crafts are extremely precise. The city of Seki in Gifu prefecture is famous for bladesmiths who have made cutting tools for over 700 years."},

    {type:"teach", trg:"のり", src:"glue", pos:"noun", gender:null,
     note:"Glue stick or liquid glue. スティックのり = glue stick.\nのりでつける = to attach with glue.",
     example:"A: のりをかしてもらえますか？\nB: はい、スティックのりでいいですか？",
     exampleSrc:"A: Could you lend me some glue?\nB: Sure, is a glue stick okay?",
     funFact:"のり also means seaweed (海苔) in a completely different context. The word for glue のり comes from 糊 (paste), which was originally rice paste. Traditional Japanese crafts used rice-based のり long before synthetic glue existed."},

    {type:"mc", q:"これはえんぴつです means:", opts:["This is a pencil","That is a pencil","This is an eraser","That is a notebook"], ans:"This is a pencil",
     hint:"これ means 'this' (near the speaker), and えんぴつ is a writing tool with graphite."},

    {type:"teach", trg:"ものさし", src:"ruler", pos:"noun", gender:null,
     note:"Also じょうぎ (定規). ものさし emphasizes measuring.\nさんじゅうセンチのものさし = 30 cm ruler.",
     example:"A: ものさしでせんをひいてください。\nB: はい、わかりました。",
     exampleSrc:"A: Please draw a line with a ruler.\nB: Okay, understood.",
     funFact:"ものさし (物差し) literally means 'thing-measurer.' じょうぎ (定規) means 'fixed standard.' In practice, ものさし is for measuring length, while じょうぎ is for drawing straight lines, though many people use them interchangeably."},

    {type:"teach", trg:"ふでばこ", src:"pencil case", pos:"noun", gender:null,
     note:"Kanji: 筆箱. ふで = brush/writing tool, はこ = box.\nEvery student carries one.",
     example:"A: ふでばこにえんぴつがなんぼんありますか？\nB: ごほんあります。",
     exampleSrc:"A: How many pencils are in your pencil case?\nB: There are five.",
     funFact:"Japanese students take their ふでばこ very seriously. Popular characters (from anime and games) decorate them. A typical pencil case contains pencils, erasers, a ruler, colored pens, and sometimes scissors. The newest trend is 'standing' pencil cases that open vertically."},

    {type:"teach", trg:"いっぽん", src:"one (long thin object)", pos:"num", gender:null,
     note:"Counter: ほん/ぼん/ぽん for long thin objects.\nにほん, さんぼん, よんほん...",
     example:"A: えんぴつをいっぽんください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please give me one pencil.\nB: Here you go.",
     funFact:"The counter ほん (本) is used for anything long and thin: pencils, bottles, trees, roads, phone calls, even movies. The reading changes: いっぽん (1), にほん (2), さんぼん (3). These sound changes (rendaku) follow old phonetic rules."},

    {type:"teach", trg:"いちまい", src:"one (flat thin object)", pos:"num", gender:null,
     note:"Counter: まい for flat objects like paper, plates, shirts.\nにまい, さんまい, よんまい...",
     example:"A: かみをいちまいください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please give me one sheet of paper.\nB: Here you go.",
     funFact:"まい (枚) counts flat things: paper, plates, photos, tickets, shirts, CDs. Unlike ほん, the reading never changes (always まい). Japanese has over 500 counter words, but mastering about 20 covers 95% of daily needs."},

    {type:"teach", trg:"かみ", src:"paper", pos:"noun", gender:null,
     note:"Kanji: 紙. おりがみ = folding paper. かみをきる = to cut paper.\nDifferent from かみ (hair, 髪) and かみ (god, 神).",
     example:"A: いろがみはありますか？\nB: はい、あかとあおがあります。",
     exampleSrc:"A: Do you have colored paper?\nB: Yes, we have red and blue.",
     funFact:"かみ (紙) is a homophone minefield: かみ can mean paper (紙), hair (髪), or god (神). Context and pitch accent distinguish them. Japanese paper (和紙, わし) is a UNESCO Intangible Cultural Heritage, prized for its strength and beauty."},

    {type:"fb", s:"えんぴつを{1}ください。\n(Please give me one pencil.)", a:"いっぽん", opts:["いっぽん","いちまい","ひとつ","いっこ"], sSrc:"Please give me one pencil.",
     hint:"Pencils are long and thin. Use the counter for long thin objects."},

    {type:"teach", trg:"ひく", src:"to draw (a line) / to pull", pos:"verb", gender:null,
     note:"Group 1 verb. せんをひく = to draw a line.\nAlso: ドアをひく = to pull a door.",
     example:"A: ものさしでせんをひきましょう。\nB: はい、まっすぐにひきます。",
     exampleSrc:"A: Let us draw a line with a ruler.\nB: Okay, I will draw it straight.",
     funFact:"ひく has many meanings depending on context: to pull (door), to draw (line), to play (piano, guitar), to catch (a cold, かぜをひく), to look up (dictionary, じしょをひく). One verb, many uses."},

    {type:"teach", trg:"おす", src:"to push / to press", pos:"verb", gender:null,
     note:"Group 1 verb. ボタンをおす = to press a button.\nドアをおす = to push a door.",
     example:"A: このボタンをおしてください。\nB: はい、おしました。",
     exampleSrc:"A: Please press this button.\nB: Okay, I pressed it.",
     funFact:"Doors in Japan are often labeled おす (push) and ひく (pull). These two verbs are a natural pair. おす also means to stamp a seal (はんこをおす), which is essential in Japanese business. Personal seals (はんこ) are used instead of signatures."},

    {type:"mc", q:"Which counter is used for sheets of paper?", opts:["まい","ほん","こ","にん"], ans:"まい",
     hint:"This counter is used for flat, thin objects like paper, plates, and shirts."},

    {type:"match", pairs:[
      {trg:"えんぴつ", src:"pencil"},
      {trg:"けしゴム", src:"eraser"},
      {trg:"はさみ", src:"scissors"},
      {trg:"ノート", src:"notebook"},
      {trg:"かみ", src:"paper"}
    ]},

    {type:"fb", s:"ドアを{1}てください。\n(Please push the door.)", a:"おし", opts:["おし","ひい","きっ","のり"], sSrc:"Please push the door.",
     hint:"The て-form of おす (to push). Drop the す, add して."},

    {type:"mc", q:"ものさし is used for:", opts:["Measuring length or drawing lines","Cutting paper","Erasing mistakes","Writing notes"], ans:"Measuring length or drawing lines",
     hint:"This tool helps you measure things or draw straight l...."}
  ]
};
export default BATCH6_L1;
