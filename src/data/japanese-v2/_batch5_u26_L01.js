// Unit 26 Batch 5 Lesson 1: マスメディア (Mass Media & Journalism)
const BATCH5_L_1 = {
  id:"jav2_u26l_b5_1", title:"マスメディア", icon:"📡", xp:15, board:true,
  steps:[
    {type:"intro", title:"マスメディア",
     desc:"Dive deeper into Japanese media vocabulary. Learn about broadcasting, publishing, press freedom, and the role of media in society. These terms unlock NHK news, newspaper editorials, and media criticism. JLPT N2 frequently tests media-related reading comprehension.",
     goals:["Use broadcasting and publishing vocabulary","Discuss press freedom and media ethics","Understand media-specific expressions"]},

    {type:"teach", trg:"放送(ほうそう)", src:"broadcasting / transmission", pos:"noun", gender:null,
     note:"Kanji: 放送(ほうそう). 放送(ほうそう)する = to broadcast.\n生(なま)放送(ほうそう) = live broadcast. 再放送(さいほうそう) = rebroadcast.",
     example:"A: この番組(ばんぐみ)は生(なま)放送(ほうそう)です。\nB: ハプニングがあるかもしれませんね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: This program is a live broadcast.\nB: There might be unexpected incidents.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"放送(ほうそう) uses 放(ほう) (release/emit) and 送(そう) (send). NHK (日本(にほん)放送(ほうそう)協会(きょうかい), Japan Broadcasting Corporation) is Japan's public broadcaster, funded by a mandatory viewing fee. 放送法(ほうそうほう) (Broadcasting Act) requires political neutrality. Japan has a unique system where variety shows (バラエティ) and serious news coexist on the same channels."},

    {type:"teach", trg:"出版(しゅっぱん)", src:"publishing / publication", pos:"noun", gender:null,
     note:"Kanji: 出版(しゅっぱん). 出版(しゅっぱん)する = to publish.\n出版社(しゅっぱんしゃ) = publisher. 出版物(しゅっぱんぶつ) = published work.",
     example:"A: 新(あたら)しい小説(しょうせつ)が来月(らいげつ)出版(しゅっぱん)されます。\nB: 楽(たの)しみにしています。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: A new novel will be published next month.\nB: I am looking forward to it.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"出版(しゅっぱん) uses 出(しゅつ) (go out) and 版(ぱん) (printing plate/edition). Japan has one of the world's largest 出版(しゅっぱん) industries. Despite digital trends, physical books remain popular. Bookstores (本屋(ほんや)) are cultural spaces. The 出版業界(しゅっぱんぎょうかい) (publishing industry) faces challenges from digital media but manga sales remain enormous."},

    {type:"teach", trg:"社説(しゃせつ)", src:"editorial (newspaper opinion piece)", pos:"noun", gender:null,
     note:"Kanji: 社説(しゃせつ). 社(しゃ) (company/society) + 説(せつ) (opinion/theory).\nThe newspaper's official position on issues.",
     example:"A: 今日(きょう)の社説(しゃせつ)は教育改革(きょういくかいかく)についてです。\nB: 新聞社(しんぶんしゃ)の意見(いけん)はどうですか？\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Today's editorial is about educational reform.\nB: What is the newspaper's opinion?\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"社説(しゃせつ) is the newspaper's institutional voice. Each of Japan's major papers (朝日(あさひ), 読売(よみうり), 毎日(まいにち), 日経(にっけい), 産経(さんけい)) has distinct political leanings visible in their 社説(しゃせつ). Reading 社説(しゃせつ) from different papers on the same topic reveals Japan's political spectrum. JLPT N1 often uses 社説(しゃせつ)-style passages for reading comprehension."},

    {type:"teach", trg:"媒体(ばいたい)", src:"media / medium (communication channel)", pos:"noun", gender:null,
     note:"Kanji: 媒体(ばいたい). 広告(こうこく)媒体(ばいたい) = advertising medium.\nデジタル媒体(ばいたい) = digital media.",
     example:"A: 広告(こうこく)媒体(ばいたい)としてSNSが注目(ちゅうもく)されています。\nB: 若(わか)い層(そう)には効果的(こうかてき)ですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: SNS is attracting attention as an advertising medium.\nB: It is effective for the younger generation.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"媒体(ばいたい) uses 媒(ばい) (matchmaker/intermediary) and 体(たい) (body/entity). The word comes from the idea of a medium connecting message sender and receiver. Traditional 媒体(ばいたい) (TV, newspaper, radio) are called マスメディア (mass media). Digital 媒体(ばいたい) are called ニューメディア or デジタルメディア. The shift between these is a major topic in Japanese business."},

    {type:"mc", q:"生(なま)放送(ほうそう) means:", opts:["A live broadcast","A recorded program","A news report","A commercial break"], ans:"A live broadcast",
     hint:"生(なま) means 'raw/l...' and 放送(ほうそう) means 'b....'"},

    {type:"teach", trg:"編集(へんしゅう)", src:"editing / compilation", pos:"noun", gender:null,
     note:"Kanji: 編集(へんしゅう). 編集(へんしゅう)する = to edit.\n編集者(へんしゅうしゃ) = editor. 編集長(へんしゅうちょう) = editor-in-chief.",
     example:"A: この雑誌(ざっし)の編集長(へんしゅうちょう)にインタビューしました。\nB: どんな方(かた)でしたか？\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: I interviewed the editor-in-chief of this magazine.\nB: What kind of person were they?\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"編集(へんしゅう) uses 編(へん) (compile/knit) and 集(しゅう) (collect/gather). The 編集者(へんしゅうしゃ) (editor) is a prestigious role in Japanese publishing. Manga editors are legendary figures who shape stories alongside artists. Famous manga like Dragon Ball were greatly influenced by their editors' suggestions. The 編集部(へんしゅうぶ) (editorial department) is the creative heart of any publication."},

    {type:"teach", trg:"投稿(とうこう)", src:"contribution / submission (to a publication)", pos:"noun", gender:null,
     note:"Kanji: 投稿(とうこう). 投稿(とうこう)する = to submit/contribute.\n読者(どくしゃ)投稿(とうこう) = reader submissions.",
     example:"A: 新聞(しんぶん)に投稿(とうこう)したことはありますか？\nB: 一度(いちど)だけ意見文(いけんぶん)を投稿(とうこう)しました。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Have you ever submitted to a newspaper?\nB: I submitted an opinion piece just once.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"投稿(とうこう) uses 投(とう) (throw/submit) and 稿(こう) (manuscript/draft). In the digital age, 投稿(とうこう) has expanded to mean posting on social media, blogs, and video platforms. SNSに投稿(とうこう)する (to post on social media) is now more common than traditional newspaper 投稿(とうこう). YouTube creators are called 投稿者(とうこうしゃ) (contributors/posters)."},

    {type:"teach", trg:"閲覧(えつらん)", src:"reading / perusal / browsing", pos:"noun", gender:null,
     note:"Kanji: 閲覧(えつらん). 閲覧(えつらん)する = to read/browse.\n閲覧数(えつらんすう) = page views. Formal word for reading/viewing.",
     example:"A: このサイトの閲覧数(えつらんすう)が急増(きゅうぞう)しています。\nB: 記事(きじ)の内容(ないよう)が良(よ)かったんでしょうね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: This site's page views are rapidly increasing.\nB: The article content must have been good.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"閲覧(えつらん) uses 閲(えつ) (inspect/review) and 覧(らん) (look/view). Originally a formal term for reading official documents, it now includes digital browsing. 閲覧数(えつらんすう) (view count) is a key metric for websites. 図書館(としょかん)の閲覧室(えつらんしつ) (library reading room) uses the traditional meaning. The dual usage shows how classical Japanese adapts to digital concepts."},

    {type:"tip", title:"Media Vocabulary Categories",
     text:"Broadcasting: 放送(ほうそう), 生(なま)放送(ほうそう), 再放送(さいほうそう), 番組(ばんぐみ)\nPrint: 出版(しゅっぱん), 記事(きじ), 社説(しゃせつ), 特集(とくしゅう)\nDigital: 閲覧(えつらん), 投稿(とうこう), 媒体(ばいたい), ウェブサイト\nPeople: 記者(きしゃ) (reporter), 編集者(へんしゅうしゃ) (editor), アナウンサー (anchor)\nProcess: 取材(しゅざい) (news gathering), 編集(へんしゅう) (editing), 報道(ほうどう) (reporting)\n\nMedia criticism vocabulary:\n偏向(へんこう)報道(ほうどう) = biased reporting\n誤報道(ごほうどう) = false reporting\n報道(ほうどう)の自由(じゆう) = press freedom"},

    {type:"teach", trg:"取材(しゅざい)", src:"news gathering / reporting (the process)", pos:"noun", gender:null,
     note:"Kanji: 取材(しゅざい). 取材(しゅざい)する = to gather news/interview.\n現地(げんち)取材(しゅざい) = on-location reporting.",
     example:"A: 記者(きしゃ)が現地(げんち)で取材(しゅざい)を行(おこな)っています。\nB: 最新(さいしん)の情報(じょうほう)が期待(きたい)されますね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Reporters are conducting on-location reporting.\nB: We can expect the latest information.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"取材(しゅざい) uses 取(しゅ) (take/obtain) and 材(ざい) (material). Japanese 取材(しゅざい) involves meticulous preparation: researching backgrounds, preparing questions, and building relationships with sources. The 記者(きしゃ)クラブ (kisha club, press club) system gives accredited reporters exclusive access but limits outsiders. Freelance journalists often criticize this system as restricting 報道(ほうどう)の自由(じゆう) (press freedom)."},

    {type:"teach", trg:"偏向(へんこう)", src:"bias / partiality / leaning", pos:"noun", gender:null,
     note:"Kanji: 偏向(へんこう). 偏向(へんこう)報道(ほうどう) = biased reporting.\n偏向(へんこう)する = to be biased.",
     example:"A: 偏向(へんこう)報道(ほうどう)に注意(ちゅうい)するべきです。\nB: 複数(ふくすう)の情報源(じょうほうげん)を確認(かくにん)することが大切(たいせつ)ですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: We should be careful of biased reporting.\nB: It is important to check multiple information sources.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"偏向(へんこう) uses 偏(へん) (biased/one-sided) and 向(こう) (direction). Media bias (メディアバイアス) is a growing concern in Japan. Each major newspaper has known political leanings. The concept of メディアリテラシー (media literacy) is being introduced in schools. Teaching citizens to recognize 偏向(へんこう) and seek multiple perspectives is increasingly seen as essential."},

    {type:"fb", s:"記者(きしゃ)が現地(げんち)で{1}を行(おこな)っています。\n(Reporters are conducting on-location reporting.)", a:"取材(しゅざい)", opts:["取材(しゅざい)","報道(ほうどう)","社説(しゃせつ)","放送(ほうそう)"], sSrc:"Reporters are conducting on-location reporting.",
     hint:"The word for the process of gathering news through interviews and on-site investigation."},

    {type:"mc", q:"閲覧数(えつらんすう) means:", opts:["Publication date","Page views / number of times viewed","Number of articles","Number of subscribers"], ans:"Page views / number of times viewed",
     hint:"閲覧(えつらん) (reading/browsing) + 数(すう) (n...) = a count of how many t... content was v...."},

    {type:"match", pairs:[{trg:"放送(ほうそう)",src:"broadcasting"},{trg:"出版(しゅっぱん)",src:"publishing"},{trg:"編集(へんしゅう)",src:"editing"},{trg:"取材(しゅざい)",src:"news gathering"}]},

    {type:"fb", s:"偏向(へんこう){1}に注意(ちゅうい)するべきです。\n(We should be careful of biased reporting.)", a:"報道(ほうどう)", opts:["報道(ほうどう)","社説(しゃせつ)","記事(きじ)","投稿(とうこう)"], sSrc:"We should be careful of biased reporting.",
     hint:"The word for news reporting/coverage, combined with 偏向(へんこう) (bias) for 'biased reporting.'"},

    {type:"mc", q:"社説(しゃせつ) is:", opts:["A reporter's blog","A reader's letter","A newspaper's official editorial opinion","A news article"], ans:"A newspaper's official editorial opinion",
     hint:"This combines 社(しゃ) (company) with 説(せつ) (o.../theory) for the paper's institutional stance."}
  ,{type:"match",pairs:[{trg:"社説(しゃせつ)",src:"editorial (newspaper opinion piece)"},{trg:"媒体(ばいたい)",src:"media / medium (communication channel)"},{trg:"投稿(とうこう)",src:"contribution / submission (to a publication)"},{trg:"閲覧(えつらん)",src:"reading / perusal / browsing"},{trg:"偏向(へんこう)",src:"bias / partiality / leaning"}]}]
};
export default BATCH5_L_1;
