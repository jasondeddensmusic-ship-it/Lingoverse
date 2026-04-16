// Unit 26 Batch 5 Lesson 1: マスメディア (Mass Media & Journalism)
const BATCH5_L_1 = {
  id:"jav2_u26l_b5_1", title:"マスメディア", icon:"📡", xp:15, board:true,
  steps:[
    {type:"intro", title:"マスメディア",
     desc:"Dive deeper into Japanese media vocabulary. Learn about broadcasting, publishing, press freedom, and the role of media in society. These terms unlock NHK news, newspaper editorials, and media criticism. JLPT N2 frequently tests media-related reading comprehension.",
     goals:["Use broadcasting and publishing vocabulary","Discuss press freedom and media ethics","Understand media-specific expressions"]},

    {type:"teach", trg:"ほうそう", src:"broadcasting / transmission", pos:"noun", gender:null,
     note:"Kanji: 放送. ほうそうする = to broadcast.\nなまほうそう = live broadcast. さいほうそう = rebroadcast.",
     example:"A: このばんぐみはなまほうそうです。\nB: ハプニングがあるかもしれませんね。",
     exampleSrc:"A: This program is a live broadcast.\nB: There might be unexpected incidents.",
     funFact:"放送 uses 放 (release/emit) and 送 (send). NHK (Nippon Hoso Kyokai, Japan Broadcasting Corporation) is Japan's public broadcaster, funded by a mandatory viewing fee. ほうそうほう (Broadcasting Act) requires political neutrality. Japan has a unique system where variety shows (バラエティ) and serious news coexist on the same channels."},

    {type:"teach", trg:"しゅっぱん", src:"publishing / publication", pos:"noun", gender:null,
     note:"Kanji: 出版. しゅっぱんする = to publish.\nしゅっぱんしゃ = publisher. しゅっぱんぶつ = published work.",
     example:"A: あたらしいしょうせつがらいげつしゅっぱんされます。\nB: たのしみにしています。",
     exampleSrc:"A: A new novel will be published next month.\nB: I am looking forward to it.",
     funFact:"出版 uses 出 (go out) and 版 (printing plate/edition). Japan has one of the world's largest しゅっぱん industries. Despite digital trends, physical books remain popular. Bookstores (本屋 hon'ya) are cultural spaces. The しゅっぱんぎょうかい (publishing industry) faces challenges from digital media but manga sales remain enormous."},

    {type:"teach", trg:"しゃせつ", src:"editorial (newspaper opinion piece)", pos:"noun", gender:null,
     note:"Kanji: 社説. しゃ (company/society) + せつ (opinion/theory).\nThe newspaper's official position on issues.",
     example:"A: きょうのしゃせつはきょういくかいかくについてです。\nB: しんぶんしゃのいけんはどうですか？",
     exampleSrc:"A: Today's editorial is about educational reform.\nB: What is the newspaper's opinion?",
     funFact:"社説 is the newspaper's institutional voice. Each of Japan's major papers (朝日, 読売, 毎日, 日経, 産経) has distinct political leanings visible in their しゃせつ. Reading しゃせつ from different papers on the same topic reveals Japan's political spectrum. JLPT N1 often uses しゃせつ-style passages for reading comprehension."},

    {type:"teach", trg:"ばいたい", src:"media / medium (communication channel)", pos:"noun", gender:null,
     note:"Kanji: 媒体. こうこくばいたい = advertising medium.\nデジタルばいたい = digital media.",
     example:"A: こうこくばいたいとしてSNSがちゅうもくされています。\nB: わかいそうにはこうかてきですね。",
     exampleSrc:"A: SNS is attracting attention as an advertising medium.\nB: It is effective for the younger generation.",
     funFact:"媒体 uses 媒 (matchmaker/intermediary) and 体 (body/entity). The word comes from the idea of a medium connecting message sender and receiver. Traditional ばいたい (TV, newspaper, radio) are called マスメディア (mass media). Digital ばいたい are called ニューメディア or デジタルメディア. The shift between these is a major topic in Japanese business."},

    {type:"mc", q:"なまほうそう means:", opts:["A live broadcast","A recorded program","A news report","A commercial break"], ans:"A live broadcast",
     hint:"なま means 'raw/l...' and ほうそう means 'b....'"},

    {type:"teach", trg:"へんしゅう", src:"editing / compilation", pos:"noun", gender:null,
     note:"Kanji: 編集. へんしゅうする = to edit.\nへんしゅうしゃ = editor. へんしゅうちょう = editor-in-chief.",
     example:"A: この ざっしのへんしゅうちょうにインタビューしました。\nB: どんなかたでしたか？",
     exampleSrc:"A: I interviewed the editor-in-chief of this magazine.\nB: What kind of person were they?",
     funFact:"編集 uses 編 (compile/knit) and 集 (collect/gather). The へんしゅうしゃ (editor) is a prestigious role in Japanese publishing. Manga editors are legendary figures who shape stories alongside artists. Famous manga like Dragon Ball were greatly influenced by their editors' suggestions. The へんしゅうぶ (editorial department) is the creative heart of any publication."},

    {type:"teach", trg:"とうこう", src:"contribution / submission (to a publication)", pos:"noun", gender:null,
     note:"Kanji: 投稿. とうこうする = to submit/contribute.\nどくしゃとうこう = reader submissions.",
     example:"A: しんぶんにとうこうしたことはありますか？\nB: いちどだけいけんぶんをとうこうしました。",
     exampleSrc:"A: Have you ever submitted to a newspaper?\nB: I submitted an opinion piece just once.",
     funFact:"投稿 uses 投 (throw/submit) and 稿 (manuscript/draft). In the digital age, とうこう has expanded to mean posting on social media, blogs, and video platforms. SNSにとうこうする (to post on social media) is now more common than traditional newspaper とうこう. YouTube creators are called とうこうしゃ (contributors/posters)."},

    {type:"teach", trg:"えつらん", src:"reading / perusal / browsing", pos:"noun", gender:null,
     note:"Kanji: 閲覧. えつらんする = to read/browse.\nえつらんすう = page views. Formal word for reading/viewing.",
     example:"A: このサイトのえつらんすうがきゅうぞうしています。\nB: きじのないようがよかったんでしょうね。",
     exampleSrc:"A: This site's page views are rapidly increasing.\nB: The article content must have been good.",
     funFact:"閲覧 uses 閲 (inspect/review) and 覧 (look/view). Originally a formal term for reading official documents, it now includes digital browsing. えつらんすう (view count) is a key metric for websites. としょかんのえつらんしつ (library reading room) uses the traditional meaning. The dual usage shows how classical Japanese adapts to digital concepts."},

    {type:"tip", title:"Media Vocabulary Categories",
     text:"Broadcasting: ほうそう, なまほうそう, さいほうそう, ばんぐみ\nPrint: しゅっぱん, きじ, しゃせつ, とくしゅう\nDigital: えつらん, とうこう, ばいたい, ウェブサイト\nPeople: きしゃ (reporter), へんしゅうしゃ (editor), アナウンサー (anchor)\nProcess: しゅざい (news gathering), へんしゅう (editing), ほうどう (reporting)\n\nMedia criticism vocabulary:\nへんこうほうどう = biased reporting\nごほうどう = false reporting\nほうどうのじゆう = press freedom"},

    {type:"teach", trg:"しゅざい", src:"news gathering / reporting (the process)", pos:"noun", gender:null,
     note:"Kanji: 取材. しゅざいする = to gather news/interview.\nげんちしゅざい = on-location reporting.",
     example:"A: きしゃがげんちでしゅざいをおこなっています。\nB: さいしんのじょうほうがきたいされますね。",
     exampleSrc:"A: Reporters are conducting on-location reporting.\nB: We can expect the latest information.",
     funFact:"取材 uses 取 (take/obtain) and 材 (material). Japanese しゅざい involves meticulous preparation: researching backgrounds, preparing questions, and building relationships with sources. The 記者クラブ (kisha club, press club) system gives accredited reporters exclusive access but limits outsiders. Freelance journalists often criticize this system as restricting ほうどうのじゆう (press freedom)."},

    {type:"teach", trg:"へんこう", src:"bias / partiality / leaning", pos:"noun", gender:null,
     note:"Kanji: 偏向. へんこうほうどう = biased reporting.\nへんこうする = to be biased.",
     example:"A: へんこうほうどうにちゅういするべきです。\nB: ふくすうのじょうほうげんをかくにんすることがたいせつですね。",
     exampleSrc:"A: We should be careful of biased reporting.\nB: It is important to check multiple information sources.",
     funFact:"偏向 uses 偏 (biased/one-sided) and 向 (direction). Media bias (メディアバイアス) is a growing concern in Japan. Each major newspaper has known political leanings. The concept of メディアリテラシー (media literacy) is being introduced in schools. Teaching citizens to recognize へんこう and seek multiple perspectives is increasingly seen as essential."},

    {type:"fb", s:"きしゃがげんちで{1}をおこなっています。\n(Reporters are conducting on-location reporting.)", a:"しゅざい", opts:["しゅざい","ほうどう","しゃせつ","ほうそう"], sSrc:"Reporters are conducting on-location reporting.",
     hint:"The word for the process of gathering news through interviews and on-site investigation."},

    {type:"mc", q:"えつらんすう means:", opts:["Page views / number of times viewed","Number of articles","Number of subscribers","Publication date"], ans:"Page views / number of times viewed",
     hint:"えつらん (reading/browsing) + すう (n...) = a count of how many t... content was v...."},

    {type:"match", pairs:[{trg:"ほうそう",src:"broadcasting"},{trg:"しゅっぱん",src:"publishing"},{trg:"へんしゅう",src:"editing"},{trg:"しゅざい",src:"news gathering"}]},

    {type:"fb", s:"へんこう{1}にちゅういするべきです。\n(We should be careful of biased reporting.)", a:"ほうどう", opts:["ほうどう","しゃせつ","きじ","とうこう"], sSrc:"We should be careful of biased reporting.",
     hint:"The word for news reporting/coverage, combined with へんこう (bias) for 'biased reporting.'"},

    {type:"mc", q:"しゃせつ is:", opts:["A newspaper's official editorial opinion","A news article","A reporter's blog","A reader's letter"], ans:"A newspaper's official editorial opinion",
     hint:"This combines しゃ (company) with せつ (opinion/theory) for the paper's institutional stance."}
  ]
};
export default BATCH5_L_1;
