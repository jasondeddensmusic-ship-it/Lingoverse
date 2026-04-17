// Unit 26 Batch 5 Lesson 1: マスメディア (Mass Media & Journalism)
const BATCH5_L_1 = {
  id:"jav2_u26l_b5_1", title:"マスメディア", icon:"📡", xp:15, board:true,
  steps:[
    {type:"intro", title:"マスメディア",
     desc:"Dive deeper into Japanese media vocabulary. Learn about broadcasting, publishing, press freedom, and the role of media in society. These terms unlock NHK news, newspaper editorials, and media criticism. JLPT N2 frequently tests media-related reading comprehension.",
     goals:["Use broadcasting and publishing vocabulary","Discuss press freedom and media ethics","Understand media-specific expressions"]},

    {type:"teach", trg:"ほうそう", src:"broadcasting / transmission", pos:"noun", gender:null,
     note:"Kanji: 放送. ほうそうする = to broadcast.\nなまほうそう = live broadcast. さいほうそう = rebroadcast.",
     example:"A: このばんぐみはなまほうそうです。\nB: ハプニングがあるかもしれませんね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: This program is a live broadcast.\nB: There might be unexpected incidents.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"放送 uses 放 (release/emit) and 送 (send). NHK (Nippon Hoso Kyokai, Japan Broadcasting Corporation) is Japan's public broadcaster, funded by a mandatory viewing fee. ほうそうほう (Broadcasting Act) requires political neutrality. Japan has a unique system where variety shows (バラエティ) and serious news coexist on the same channels."},

    {type:"teach", trg:"しゅっぱん", src:"publishing / publication", pos:"noun", gender:null,
     note:"Kanji: 出版. しゅっぱんする = to publish.\nしゅっぱんしゃ = publisher. しゅっぱんぶつ = published work.",
     example:"A: あたらしいしょうせつがらいげつしゅっぱんされます。\nB: たのしみにしています。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: A new novel will be published next month.\nB: I am looking forward to it.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"出版 uses 出 (go out) and 版 (printing plate/edition). Japan has one of the world's largest しゅっぱん industries. Despite digital trends, physical books remain popular. Bookstores (本屋 hon'ya) are cultural spaces. The しゅっぱんぎょうかい (publishing industry) faces challenges from digital media but manga sales remain enormous."},

    {type:"teach", trg:"しゃせつ", src:"editorial (newspaper opinion piece)", pos:"noun", gender:null,
     note:"Kanji: 社説. しゃ (company/society) + せつ (opinion/theory).\nThe newspaper's official position on issues.",
     example:"A: きょうのしゃせつはきょういくかいかくについてです。\nB: しんぶんしゃのいけんはどうですか？\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Today's editorial is about educational reform.\nB: What is the newspaper's opinion?\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"社説 is the newspaper's institutional voice. Each of Japan's major papers (朝日, 読売, 毎日, 日経, 産経) has distinct political leanings visible in their しゃせつ. Reading しゃせつ from different papers on the same topic reveals Japan's political spectrum. JLPT N1 often uses しゃせつ-style passages for reading comprehension."},

    {type:"teach", trg:"ばいたい", src:"media / medium (communication channel)", pos:"noun", gender:null,
     note:"Kanji: 媒体. こうこくばいたい = advertising medium.\nデジタルばいたい = digital media.",
     example:"A: こうこくばいたいとしてSNSがちゅうもくされています。\nB: わかいそうにはこうかてきですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: SNS is attracting attention as an advertising medium.\nB: It is effective for the younger generation.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"媒体 uses 媒 (matchmaker/intermediary) and 体 (body/entity). The word comes from the idea of a medium connecting message sender and receiver. Traditional ばいたい (TV, newspaper, radio) are called マスメディア (mass media). Digital ばいたい are called ニューメディア or デジタルメディア. The shift between these is a major topic in Japanese business."},

    {type:"mc", q:"なまほうそう means:", opts:["A live broadcast","A recorded program","A news report","A commercial break"], ans:"A live broadcast",
     hint:"なま means 'raw/l...' and ほうそう means 'b....'"},

    {type:"teach", trg:"へんしゅう", src:"editing / compilation", pos:"noun", gender:null,
     note:"Kanji: 編集. へんしゅうする = to edit.\nへんしゅうしゃ = editor. へんしゅうちょう = editor-in-chief.",
     example:"A: この ざっしのへんしゅうちょうにインタビューしました。\nB: どんなかたでしたか？\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: I interviewed the editor-in-chief of this magazine.\nB: What kind of person were they?\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"編集 uses 編 (compile/knit) and 集 (collect/gather). The へんしゅうしゃ (editor) is a prestigious role in Japanese publishing. Manga editors are legendary figures who shape stories alongside artists. Famous manga like Dragon Ball were greatly influenced by their editors' suggestions. The へんしゅうぶ (editorial department) is the creative heart of any publication."},

    {type:"teach", trg:"とうこう", src:"contribution / submission (to a publication)", pos:"noun", gender:null,
     note:"Kanji: 投稿. とうこうする = to submit/contribute.\nどくしゃとうこう = reader submissions.",
     example:"A: しんぶんにとうこうしたことはありますか？\nB: いちどだけいけんぶんをとうこうしました。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Have you ever submitted to a newspaper?\nB: I submitted an opinion piece just once.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"投稿 uses 投 (throw/submit) and 稿 (manuscript/draft). In the digital age, とうこう has expanded to mean posting on social media, blogs, and video platforms. SNSにとうこうする (to post on social media) is now more common than traditional newspaper とうこう. YouTube creators are called とうこうしゃ (contributors/posters)."},

    {type:"teach", trg:"えつらん", src:"reading / perusal / browsing", pos:"noun", gender:null,
     note:"Kanji: 閲覧. えつらんする = to read/browse.\nえつらんすう = page views. Formal word for reading/viewing.",
     example:"A: このサイトのえつらんすうがきゅうぞうしています。\nB: きじのないようがよかったんでしょうね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: This site's page views are rapidly increasing.\nB: The article content must have been good.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"閲覧 uses 閲 (inspect/review) and 覧 (look/view). Originally a formal term for reading official documents, it now includes digital browsing. えつらんすう (view count) is a key metric for websites. としょかんのえつらんしつ (library reading room) uses the traditional meaning. The dual usage shows how classical Japanese adapts to digital concepts."},

    {type:"tip", title:"Media Vocabulary Categories",
     text:"Broadcasting: ほうそう, なまほうそう, さいほうそう, ばんぐみ\nPrint: しゅっぱん, きじ, しゃせつ, とくしゅう\nDigital: えつらん, とうこう, ばいたい, ウェブサイト\nPeople: きしゃ (reporter), へんしゅうしゃ (editor), アナウンサー (anchor)\nProcess: しゅざい (news gathering), へんしゅう (editing), ほうどう (reporting)\n\nMedia criticism vocabulary:\nへんこうほうどう = biased reporting\nごほうどう = false reporting\nほうどうのじゆう = press freedom"},

    {type:"teach", trg:"しゅざい", src:"news gathering / reporting (the process)", pos:"noun", gender:null,
     note:"Kanji: 取材. しゅざいする = to gather news/interview.\nげんちしゅざい = on-location reporting.",
     example:"A: きしゃがげんちでしゅざいをおこなっています。\nB: さいしんのじょうほうがきたいされますね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Reporters are conducting on-location reporting.\nB: We can expect the latest information.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"取材 uses 取 (take/obtain) and 材 (material). Japanese しゅざい involves meticulous preparation: researching backgrounds, preparing questions, and building relationships with sources. The 記者クラブ (kisha club, press club) system gives accredited reporters exclusive access but limits outsiders. Freelance journalists often criticize this system as restricting ほうどうのじゆう (press freedom)."},

    {type:"teach", trg:"へんこう", src:"bias / partiality / leaning", pos:"noun", gender:null,
     note:"Kanji: 偏向. へんこうほうどう = biased reporting.\nへんこうする = to be biased.",
     example:"A: へんこうほうどうにちゅういするべきです。\nB: ふくすうのじょうほうげんをかくにんすることがたいせつですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: We should be careful of biased reporting.\nB: It is important to check multiple information sources.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"偏向 uses 偏 (biased/one-sided) and 向 (direction). Media bias (メディアバイアス) is a growing concern in Japan. Each major newspaper has known political leanings. The concept of メディアリテラシー (media literacy) is being introduced in schools. Teaching citizens to recognize へんこう and seek multiple perspectives is increasingly seen as essential."},

    {type:"fb", s:"きしゃがげんちで{1}をおこなっています。\n(Reporters are conducting on-location reporting.)", a:"しゅざい", opts:["しゅざい","ほうどう","しゃせつ","ほうそう"], sSrc:"Reporters are conducting on-location reporting.",
     hint:"The word for the process of gathering news through interviews and on-site investigation."},

    {type:"mc", q:"えつらんすう means:", opts:["Page views / number of times viewed","Number of articles","Number of subscribers","Publication date"], ans:"Page views / number of times viewed",
     hint:"えつらん (reading/browsing) + すう (n...) = a count of how many t... content was v...."},

    {type:"match", pairs:[{trg:"ほうそう",src:"broadcasting"},{trg:"しゅっぱん",src:"publishing"},{trg:"へんしゅう",src:"editing"},{trg:"しゅざい",src:"news gathering"}]},

    {type:"fb", s:"へんこう{1}にちゅういするべきです。\n(We should be careful of biased reporting.)", a:"ほうどう", opts:["ほうどう","しゃせつ","きじ","とうこう"], sSrc:"We should be careful of biased reporting.",
     hint:"The word for news reporting/coverage, combined with へんこう (bias) for 'biased reporting.'"},

    {type:"mc", q:"しゃせつ is:", opts:["A newspaper's official editorial opinion","A news article","A reporter's blog","A reader's letter"], ans:"A newspaper's official editorial opinion",
     hint:"This combines しゃ (company) with せつ (o.../theory) for the paper's institutional stance."}
  ]
};
export default BATCH5_L_1;
