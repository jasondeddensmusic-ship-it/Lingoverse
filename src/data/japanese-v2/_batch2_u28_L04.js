// Unit 28 Batch 2 Lesson 4: ぶんがくてきひょうげん (Literary Expressions)
const BATCH2_L_4 = {
  id:"jav2_u28l_b2_4", title:"ぶんがくてきひょうげん", icon:"📜", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんがくてきひょうげん",
     desc:"Literary Japanese uses distinctive vocabulary and patterns rarely found in daily conversation. Learn expressions for narration, description, and emotional nuance used in novels, essays, and formal writing. These terms elevate your reading comprehension and writing to B2 level.",
     goals:["Recognize literary vocabulary in texts","Use descriptive and narrative expressions","Understand classical-modern language bridges"]},

    {type:"teach", trg:"あたかも", src:"as if / as though / just like", pos:"adv", gender:null,
     note:"Literary comparison. More formal than まるで.\nあたかもゆめのよう = as if it were a dream.",
     example:"A: あたかもじかんがとまったかのようだった。\nB: うつくしいひょうげんですね。",
     exampleSrc:"A: It was as if time had stopped.\nB: That is a beautiful expression.",
     funFact:"あたかも is written 恰も in kanji but almost always appears in hiragana. It elevates a comparison from casual (まるで) to literary. In novels and essays, あたかも creates vivid imagery by drawing unexpected parallels. The pattern あたかも...かのよう (as if...were) is a hallmark of literary Japanese prose."},

    {type:"teach", trg:"おのずと", src:"naturally / spontaneously / of its own accord", pos:"adv", gender:null,
     note:"Kanji: 自ずと. Something happens without deliberate effort.\nおのずとわかる = you will naturally come to understand.",
     example:"A: たくさんよめば、おのずとにほんごのかんかくがみにつきます。\nB: けいぞくがたいせつですね。",
     exampleSrc:"A: If you read a lot, a sense for Japanese will naturally develop.\nB: Continuity is important.",
     funFact:"自ずと uses the classical reading of 自 (self). It suggests organic, effortless emergence. In Japanese philosophy, おのずと connects to the Zen concept of 自然 (しぜん, naturalness). The idea that understanding arrives おのずと (naturally, without forcing) reflects a cultural preference for intuitive knowledge over forced learning."},

    {type:"teach", trg:"かつて", src:"once / formerly / at one time", pos:"adv", gender:null,
     note:"Kanji: 嘗て. Literary past reference.\nかつてない = unprecedented / never before.",
     example:"A: ここにはかつておおきなもりがありました。\nB: いまはまちになってしまいましたね。",
     exampleSrc:"A: There was once a great forest here.\nB: Now it has become a town.",
     funFact:"かつて is a literary time marker that evokes a distant, often nostalgic past. Unlike まえ (before) or いぜん (previously), かつて carries emotional weight. The phrase かつてない (never before/unprecedented) is powerful in news and literature: かつてないきぼの (on an unprecedented scale). It signals something historically unique."},

    {type:"mc", q:"あたかも is used for:", opts:["Literary comparisons, more formal than まるで","Casual everyday comparisons","Making direct statements","Asking polite questions"], ans:"Literary comparisons, more formal than まるで",
     hint:"This adverb elevates similes to a literary register, creating vivid imagery in writing."},

    {type:"teach", trg:"ひそか", src:"secret / quiet / private / hidden", pos:"adj", gender:null,
     note:"Kanji: 密か. ひそかにおもう = to secretly think.\nLiterary and emotional nuance.",
     example:"A: かれはひそかにかのじょをあいしていた。\nB: きもちをつたえるゆうきがなかったのですね。",
     exampleSrc:"A: He secretly loved her.\nB: He did not have the courage to express his feelings.",
     funFact:"密か uses the kanji for 'secret/dense.' In literary Japanese, ひそかに conveys hidden emotions, unspoken feelings, and private desires. It is a favorite word of novelists because it reveals inner life. The related verb ひそめる (to conceal) appears in literary descriptions of suppressed emotions and hidden glances."},

    {type:"teach", trg:"いだく", src:"to hold / to harbor / to embrace (feelings)", pos:"verb", gender:null,
     note:"Kanji: 抱く. ゆめをいだく = to hold a dream.\nぎもんをいだく = to harbor a doubt. Literary verb.",
     example:"A: かれはあたらしいみらいへのきぼうをいだいていた。\nB: そのきぼうがかれをうごかしたのですね。",
     exampleSrc:"A: He held hope for a new future.\nB: That hope is what moved him.",
     funFact:"抱く has two readings: いだく (literary, for emotions) and だく (physical embrace). ゆめをいだく (to hold a dream) uses the literary reading. ぎもんをいだく (to harbor doubt) is common in formal writing and news. This verb elevates emotional expression beyond the everyday もつ (to have), adding depth and weight to feelings."},

    {type:"teach", trg:"たたずむ", src:"to stand still / to linger / to remain motionless", pos:"verb", gender:null,
     note:"Kanji: 佇む. Literary verb for standing in a scene.\nまどべにたたずむ = to stand at the window.",
     example:"A: かのじょはこえんのベンチのそばにたたずんでいた。\nB: なにをかんがえていたのでしょう。",
     exampleSrc:"A: She was standing quietly near a park bench.\nB: I wonder what she was thinking.",
     funFact:"佇む describes standing motionless, often contemplatively or melancholically. It is a deeply literary verb that paints a visual scene. Unlike ただ立つ (just standing), たたずむ implies emotional depth. Novelists use it to place characters in moments of reflection, creating images that linger in the reader's mind."},

    {type:"fb", s:"ここにはかつておおきな{1}がありました。\n(There was once a great forest here.)", a:"もり", opts:["もり","まち","うみ","かわ"], sSrc:"There was once a great forest here.",
     hint:"The noun for a dense area of trees, contrasted with the town that replaced it."},

    {type:"teach", trg:"はかない", src:"fleeting / transient / ephemeral", pos:"adj", gender:null,
     note:"Kanji: 儚い. はかないいのち = a fleeting life.\nCentral aesthetic concept in Japanese literature.",
     example:"A: さくらのうつくしさははかないからこそかちがある。\nB: にほんてきなびいしきですね。",
     exampleSrc:"A: The beauty of cherry blossoms has value precisely because it is fleeting.\nB: That is a very Japanese aesthetic sense.",
     funFact:"儚い uses 亻(person) and 夢 (dream), suggesting 'dreamlike.' はかなさ (transience) is central to Japanese aesthetics: the beauty of cherry blossoms, the melancholy of autumn, and the impermanence of all things. This concept connects to もののあわれ (the pathos of things), a literary sensibility that finds beauty in passing moments."},

    {type:"teach", trg:"つづる", src:"to write / to compose / to spell out", pos:"verb", gender:null,
     note:"Kanji: 綴る. ぶんしょうをつづる = to compose prose.\nLiterary word for the act of writing.",
     example:"A: かれはじぶんのけいけんをしょうせつにつづった。\nB: じったいけんにもとづくさくひんですね。",
     exampleSrc:"A: He composed his experiences into a novel.\nB: It is a work based on real experience.",
     funFact:"綴る originally meant 'to bind together' (like binding pages). As a literary verb, it means to weave words into text. While かく (write) is neutral, つづる implies care and artistry. Bloggers and essayists often say おもいをつづる (to compose one's thoughts), giving their writing a literary self-awareness."},

    {type:"teach", trg:"ささやく", src:"to whisper / to murmur", pos:"verb", gender:null,
     note:"Kanji: 囁く. みみもとでささやく = to whisper in someone's ear.\nDescriptive, sensory literary verb.",
     example:"A: かぜがこのはのあいだをささやくようにふいていた。\nB: しぜんをにんかくかしたうつくしいひょうげんです。",
     exampleSrc:"A: The wind blew as if whispering through the leaves.\nB: That is a beautiful personification of nature.",
     funFact:"囁く is an onomatopoeia-derived verb that captures the soft, intimate sound of whispering. In literature, nature often ささやく: wind whispers, streams whisper, and even silence can ささやく. This personification (にんかくか) is a hallmark of Japanese literary prose, blurring the line between the human and natural worlds."},

    {type:"mc", q:"はかない describes something that is:", opts:["Permanent and lasting","Fleeting and transient","Strong and powerful","Ancient and historical"], ans:"Fleeting and transient",
     hint:"This aesthetic concept values the beauty found in things that do not last."},

    {type:"fb", s:"かれはじぶんのけいけんをしょうせつに{1}。\n(He composed his experiences into a novel.)", a:"つづった", opts:["つづった","かいた","よんだ","はなした"], sSrc:"He composed his experiences into a novel.",
     hint:"The literary verb for weaving words into text with care and artistry."},

    {type:"match", pairs:[{trg:"あたかも",src:"as if (literary)"},{trg:"おのずと",src:"naturally/spontaneously"},{trg:"かつて",src:"once/formerly"},{trg:"ひそか",src:"secret/hidden"}]},

    {type:"fb", s:"さくらのうつくしさは{1}からこそかちがある。\n(Cherry blossom beauty has value precisely because it is fleeting.)", a:"はかない", opts:["はかない","うつくしい","あかるい","ながい"], sSrc:"Cherry blossom beauty has value precisely because it is fleeting.",
     hint:"The adjective meaning 'transient' or 'ephemeral,' central to Japanese aesthetics."},

    {type:"match", pairs:[{trg:"いだく",src:"to harbor (feelings)"},{trg:"たたずむ",src:"to stand motionless"},{trg:"つづる",src:"to compose (literary)"},{trg:"ささやく",src:"to whisper"}]},

    {type:"mc", q:"たたずむ in literature suggests:", opts:["Running quickly","Standing motionless in contemplation","Sitting casually","Walking briskly"], ans:"Standing motionless in contemplation",
     hint:"This literary verb implies emotional depth and reflection, not just physical stillness."},
  ]
};
export default BATCH2_L_4;
