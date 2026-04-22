// Batch 6 – Unit 03 (A1.1 What Is This?): Classroom & Stationery
const BATCH6_L1 = {
  id:"jav2_u03l_b6_1", title:"教室(きょうしつ)", icon:"📐", xp:15, board:true,
  steps:[
    {type:"intro", title:"教室(きょうしつ)",
     desc:"Learn the names of common classroom and stationery items. These are among the first nouns every Japanese learner needs, and they pair perfectly with これ/それ/あれ patterns.",
     goals:["Name classroom and stationery items","Use counter words for flat and thin objects","Practice これ/それ/あれ with new vocabulary"]},

    {type:"teach", trg:"鉛筆(えんぴつ)", src:"pencil", pos:"noun", gender:null,
     note:"Kanji: 鉛筆. 一本(いっぽん), 二本(にほん) for counting.\nシャープペンシル = mechanical pencil.",
     example:"A: 鉛筆(えんぴつ)を貸(か)してください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please lend me a pencil.\nB: Here you go.",
     funFact:"鉛筆(えんぴつ) combines 鉛 (lead) and 筆 (writing brush). Japanese students traditionally use pencils through elementary school, switching to シャーペン (mechanical pencil, shortened from シャープペンシル) in middle school. The brand Tombow has made pencils in Japan since 1913."},

    {type:"teach", trg:"消(け)しゴム", src:"eraser", pos:"noun", gender:null,
     note:"消(け)し = erasing, ゴム = rubber (from Dutch 'gom').\nAlso called イレーサー in some contexts.",
     example:"A: 消(け)しゴムはありますか？\nB: はい、これを使(つか)ってください。",
     exampleSrc:"A: Do you have an eraser?\nB: Yes, please use this one.",
     funFact:"The ゴム in 消(け)しゴム comes from Dutch 'gom' (rubber), reflecting the Dutch trading relationship with Japan during the Edo period. Japanese erasers are famous for quality. The brand MONO by Tombow is used worldwide."},

    {type:"teach", trg:"ノート", src:"notebook", pos:"noun", gender:null,
     note:"Katakana loanword from English 'note.'\nノートをとる = to take notes.",
     example:"A: このノートは誰(だれ)のですか？\nB: 私(わたし)のです。",
     exampleSrc:"A: Whose notebook is this?\nB: It is mine.",
     funFact:"Japanese students use special squared notebooks called ジャポニカ学習帳(がくしゅうちょう) for kanji practice. Each square fits one character. The brand has been sold since 1970 and features nature photographs on the covers."},

    {type:"teach", trg:"はさみ", src:"scissors", pos:"noun", gender:null,
     note:"Always used in singular form (no plural marker).\nはさみで紙(かみ)を切(き)る = cut paper with scissors.",
     example:"A: はさみはどこですか？\nB: 机(つくえ)の上(うえ)にあります。",
     exampleSrc:"A: Where are the scissors?\nB: They are on the desk.",
     funFact:"はさみ originally comes from the verb はさむ (to pinch/clip between). Japanese scissors for crafts are extremely precise. The city of 関(せき) in 岐阜(ぎふ) prefecture is famous for bladesmiths who have made cutting tools for over 700 years."},

    {type:"teach", trg:"のり", src:"glue", pos:"noun", gender:null,
     note:"Glue stick or liquid glue. スティックのり = glue stick.\nのりで付(つ)ける = to attach with glue.",
     example:"A: のりを貸(か)してもらえますか？\nB: はい、スティックのりでいいですか？",
     exampleSrc:"A: Could you lend me some glue?\nB: Sure, is a glue stick okay?",
     funFact:"のり also means seaweed (海苔(のり)) in a completely different context. The word for glue のり comes from 糊(のり) (paste), which was originally rice paste. Traditional Japanese crafts used rice-based のり long before synthetic glue existed."},

    {type:"mc", q:"これは鉛筆(えんぴつ)です means:", opts:["This is a pencil","That is a pencil","This is an eraser","That is a notebook"], ans:"This is a pencil",
     hint:"これ means 'this' (near the speaker), and 鉛筆(えんぴつ) is a writing tool with graphite."},

    {type:"teach", trg:"物差(ものさ)し", src:"ruler", pos:"noun", gender:null,
     note:"Also 定規(じょうぎ). 物差(ものさ)し emphasizes measuring.\n30センチの物差(ものさ)し = 30 cm ruler.",
     example:"A: 物差(ものさ)しで線(せん)を引(ひ)いてください。\nB: はい、分(わ)かりました。",
     exampleSrc:"A: Please draw a line with a ruler.\nB: Okay, understood.",
     funFact:"物差(ものさ)し (物差し) literally means 'thing-measurer.' 定規(じょうぎ) (定規) means 'fixed standard.' In practice, 物差(ものさ)し is for measuring length, while 定規(じょうぎ) is for drawing straight lines, though many people use them interchangeably."},

    {type:"teach", trg:"筆箱(ふでばこ)", src:"pencil case", pos:"noun", gender:null,
     note:"Kanji: 筆箱. 筆(ふで) = brush/writing tool, 箱(はこ) = box.\nEvery student carries one.",
     example:"A: 筆箱(ふでばこ)に鉛筆(えんぴつ)が何本(なんぼん)ありますか？\nB: 5本(ごほん)あります。",
     exampleSrc:"A: How many pencils are in your pencil case?\nB: There are five.",
     funFact:"Japanese students take their 筆箱(ふでばこ) very seriously. Popular characters (from anime and games) decorate them. A typical pencil case contains pencils, erasers, a ruler, colored pens, and sometimes scissors. The newest trend is 'standing' pencil cases that open vertically."},

    {type:"teach", trg:"一本(いっぽん)", src:"one (long thin object)", pos:"num", gender:null,
     note:"Counter: 本(ほん)/本(ぼん)/本(ぽん) for long thin objects.\n二本(にほん), 三本(さんぼん), 四本(よんほん)...",
     example:"A: 鉛筆(えんぴつ)を一本(いっぽん)ください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please give me one pencil.\nB: Here you go.",
     funFact:"The counter 本(ほん) is used for anything long and thin: pencils, bottles, trees, roads, phone calls, even movies. The reading changes: 一本(いっぽん) (1), 二本(にほん) (2), 三本(さんぼん) (3). These sound changes (rendaku) follow old phonetic rules."},

    {type:"teach", trg:"一枚(いちまい)", src:"one (flat thin object)", pos:"num", gender:null,
     note:"Counter: 枚(まい) for flat objects like paper, plates, shirts.\n二枚(にまい), 三枚(さんまい), 四枚(よんまい)...",
     example:"A: 紙(かみ)を一枚(いちまい)ください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please give me one sheet of paper.\nB: Here you go.",
     funFact:"枚(まい) counts flat things: paper, plates, photos, tickets, shirts, CDs. Unlike 本(ほん), the reading never changes (always まい). Japanese has over 500 counter words, but mastering about 20 covers 95% of daily needs."},

    {type:"teach", trg:"紙(かみ)", src:"paper", pos:"noun", gender:null,
     note:"Kanji: 紙. 折(お)り紙(がみ) = folding paper. 紙(かみ)を切(き)る = to cut paper.\nDifferent from 髪(かみ) (hair) and 神(かみ) (god).",
     example:"A: 色紙(いろがみ)はありますか？\nB: はい、赤(あか)と青(あお)があります。",
     exampleSrc:"A: Do you have colored paper?\nB: Yes, we have red and blue.",
     funFact:"紙(かみ) is a homophone minefield: 紙(かみ) can mean paper (紙), hair (髪), or god (神). Context and pitch accent distinguish them. Japanese paper (和紙(わし)) is a UNESCO Intangible Cultural Heritage, prized for its strength and beauty."},

    {type:"fb", s:"鉛筆(えんぴつ)を{1}ください。\n(Please give me one pencil.)", a:"一本(いっぽん)", opts:["一本(いっぽん)","一枚(いちまい)","一つ","一個(いっこ)"], sSrc:"Please give me one pencil.",
     hint:"Pencils are long and thin. Use the counter for long thin objects."},

    {type:"teach", trg:"引(ひ)く", src:"to draw (a line) / to pull", pos:"verb", gender:null,
     note:"Group 1 verb. 線(せん)を引(ひ)く = to draw a line.\nAlso: ドアを引(ひ)く = to pull a door.",
     example:"A: 物差(ものさ)しで線(せん)を引(ひ)きましょう。\nB: はい、真(ま)っすぐに引(ひ)きます。",
     exampleSrc:"A: Let us draw a line with a ruler.\nB: Okay, I will draw it straight.",
     funFact:"引(ひ)く has many meanings depending on context: to pull (door), to draw (line), to play (piano, guitar), to catch (a cold, 風邪(かぜ)を引(ひ)く), to look up (dictionary, 辞書(じしょ)を引(ひ)く). One verb, many uses."},

    {type:"teach", trg:"押(お)す", src:"to push / to press", pos:"verb", gender:null,
     note:"Group 1 verb. ボタンを押(お)す = to press a button.\nドアを押(お)す = to push a door.",
     example:"A: このボタンを押(お)してください。\nB: はい、押(お)しました。",
     exampleSrc:"A: Please press this button.\nB: Okay, I pressed it.",
     funFact:"Doors in Japan are often labeled 押(お)す (push) and 引(ひ)く (pull). These two verbs are a natural pair. 押(お)す also means to stamp a seal (はんこを押(お)す), which is essential in Japanese business. Personal seals (はんこ) are used instead of signatures."},

    {type:"mc", q:"Which counter is used for sheets of paper?", opts:["人(にん)","枚(まい)","本(ほん)","個(こ)"], ans:"枚(まい)",
     hint:"This counter is used for flat, thin objects like paper, plates, and shirts."},

    {type:"match", pairs:[
      {trg:"鉛筆(えんぴつ)", src:"pencil"},
      {trg:"消(け)しゴム", src:"eraser"},
      {trg:"はさみ", src:"scissors"},
      {trg:"ノート", src:"notebook"},
      {trg:"紙(かみ)", src:"paper"}
    ]},

    {type:"fb", s:"ドアを{1}てください。\n(Please push the door.)", a:"押(お)し", opts:["押(お)し","引(ひ)い","切(き)っ","のり"], sSrc:"Please push the door.",
     hint:"The て-form of 押(お)す (to push). Drop the す, add して."},

    {type:"mc", q:"物差(ものさ)し is used for:", opts:["Erasing mistakes","Writing notes","Measuring length or drawing lines","Cutting paper"], ans:"Measuring length or drawing lines",
     hint:"This tool helps you measure things or draw straight l...."}
  ,{type:"match",pairs:[{trg:"のり",src:"glue"},{trg:"物差(ものさ)し",src:"ruler"},{trg:"筆箱(ふでばこ)",src:"pencil case"},{trg:"一枚(いちまい)",src:"one (flat thin object)"},{trg:"引(ひ)く",src:"to draw (a line) / to pull"},{trg:"押(お)す",src:"to push / to press"}]},
  {type:"fb", s:"間違(まちが)えたので{1}で消(け)しました。", a:["消(け)しゴム"], opts:["消(け)しゴム","鉛筆(えんぴつ)","はさみ","のり"], hint:"The small rubber tool used to remove pencil marks from paper.", sSrc:"Because I made a mistake, I erased it with a {1}."}
]
};
export default BATCH6_L1;
