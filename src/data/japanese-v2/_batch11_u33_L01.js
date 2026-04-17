// Batch 11 – Unit 33 (B2.4 Literature): Literary & Artistic Vocabulary
const BATCH11_L1 = {
  id:"jav2_u33l_b11_1", title:"ぶんがくとげいじゅつ", icon:"🖌️", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんがくとげいじゅつ",
     desc:"Learn vocabulary for discussing literature, art, and creative expression. Japan has a rich artistic tradition spanning poetry, prose, theater, and visual arts.",
     goals:["Discuss literary genres and techniques","Use artistic and creative vocabulary","Understand cultural references to Japanese arts"]},

    {type:"teach", trg:"さくひん", src:"work (of art/literature)", pos:"noun", gender:null,
     note:"だいひょうさく = masterpiece/representative work.\nさくひんをつくる = create a work.",
     example:"A: このさくかのだいひょうさくはなんですか？\nB: 「ノルウェイのもり」がゆうめいです。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: What is this author's representative work?\nB: 'Norwegian Wood' is famous.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"さくひん (作品) applies to any creative output: literature, film, music, or art. Japanese literary prizes like あくたがわしょう (Akutagawa Prize) for serious fiction and なおきしょう (Naoki Prize) for popular fiction are major cultural events. Winning elevates a さくひん to national attention."},

    {type:"teach", trg:"しょうせつ", src:"novel", pos:"noun", gender:null,
     note:"しょうせつか = novelist.\nたんぺんしょうせつ = short story.",
     example:"A: にほんのしょうせつをよんだことがありますか？\nB: はい、むらかみはるきのしょうせつをよみました。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Have you read a Japanese novel?\nB: Yes, I read a Murakami Haruki novel.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"Japanese しょうせつ (小説) has a global reputation. むらかみはるき, かわばたやすなり (Nobel 1968), おおえけんざぶろう (Nobel 1994) are internationally celebrated. Light novels (ライトノベル) are a popular modern genre blending しょうせつ with anime/manga aesthetics, creating a unique literary ecosystem."},

    {type:"teach", trg:"し", src:"poem / poetry", pos:"noun", gender:null,
     note:"しじん = poet. しをかく = write poetry.\nSpecifically modern/free verse poetry.",
     example:"A: にほんのしにきょうみがあります。\nB: まずはいくやたんかからはじめてみてはどうですか？\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: I am interested in Japanese poetry.\nB: How about starting with haiku or tanka?\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Japanese し (詩) in the modern sense refers to free verse, while traditional forms have specific names: はいく (17 syllables), たんか (31 syllables), れんが (linked verse). Poetry holds a special place: even modern politicians write poems. The ancient まんようしゅう (Man'yoshu, 759 AD) is Japan's oldest poetry collection."},

    {type:"teach", trg:"ひょうげんりょく", src:"expressive power / expressiveness", pos:"noun", gender:null,
     note:"ひょうげんりょくがゆたか = richly expressive.\nKey literary quality.",
     example:"A: このさっかのひょうげんりょくはすばらしいです。\nB: びょうしゃがせいかくでうつくしいですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: This author's expressiveness is wonderful.\nB: The descriptions are precise and beautiful.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"ひょうげんりょく (表現力) is a core evaluation criterion in Japanese education, from elementary school compositions to university entrance exams. Japanese literary criticism values ぶんたいのうつくしさ (beauty of writing style) as much as content. Writers are celebrated for their unique ひょうげんりょく."},

    {type:"teach", trg:"びょうしゃ", src:"description / depiction", pos:"noun", gender:null,
     note:"しんりびょうしゃ = psychological description.\nびょうしゃりょく = descriptive power.",
     example:"A: このしょうせつのしぜんびょうしゃがうつくしいです。\nB: よんでいるとけしきがめにうかびますね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: The nature descriptions in this novel are beautiful.\nB: When reading, the scenery comes to mind.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japanese literary tradition excels in びょうしゃ (描写). しぜんびょうしゃ (nature description) connects to the seasonal awareness embedded in culture. しんりびょうしゃ (psychological description) is central to the 私小説 (I-novel) genre where authors write thinly-veiled autobiographical fiction exploring inner emotional landscapes."},

    {type:"teach", trg:"ものがたり", src:"story / tale / narrative", pos:"noun", gender:null,
     note:"ものがたりをつくる = create a story.\nげんじものがたり = The Tale of Genji.",
     example:"A: にほんさいこのものがたりはなんですか？\nB: げんじものがたりです。せんねんいじょうまえにかかれました。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: What is the oldest Japanese narrative?\nB: The Tale of Genji. It was written over a thousand years ago.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"げんじものがたり (The Tale of Genji, ~1010 AD) by むらさきしきぶ is considered the world's first novel. This ものがたり (物語) explored psychology, politics, and romance with unprecedented sophistication. The word ものがたり itself means 'telling of things' (物 = things, 語り = telling), reflecting the oral storytelling tradition."},

    {type:"teach", trg:"でんとうげいのう", src:"traditional performing arts", pos:"noun", gender:null,
     note:"のう (Noh), かぶき (Kabuki), ぶんらく (Bunraku).\nAll UNESCO heritage.",
     example:"A: にほんのでんとうげいのうをみたことがありますか？\nB: かぶきをいちどみました。とてもうつくしかったです。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Have you seen Japanese traditional performing arts?\nB: I saw Kabuki once. It was very beautiful.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"Japan's three major でんとうげいのう are: のう (Noh, subtle/spiritual), かぶき (Kabuki, dramatic/colorful), and ぶんらく (Bunraku, puppet theater). All are UNESCO Intangible Cultural Heritage. かぶき performers train from childhood, with famous acting families (梨園) passing traditions through generations."},

    {type:"teach", trg:"えがく", src:"to depict / to draw / to portray", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: えがいて.\nゆめをえがく = envision a dream.",
     example:"A: このえいがはせんごのにほんをえがいています。\nB: れきしてきなさくひんですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: This film depicts postwar Japan.\nB: It is a historical work.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"えがく (描く) serves double duty: physically drawing pictures and figuratively portraying themes. しょうせつでじだいをえがく (portray an era in a novel), ゆめをえがく (envision a dream). The kanji 描 contains 手 (hand) + 苗 (seedling), suggesting the careful hand-cultivation of imagery."},

    {type:"teach", trg:"かんどう", src:"being deeply moved / emotion", pos:"noun", gender:null,
     note:"かんどうする = to be moved/impressed.\nかんどうてき = moving/touching.",
     example:"A: このえいがにかんどうしました。\nB: わたしもなきました。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: I was deeply moved by this film.\nB: I cried too.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"かんどう (感動) describes being deeply stirred emotionally, a prized experience in Japanese culture. かんどうてき (moving/touching) is the highest praise for art, performances, and even everyday moments. Japanese audiences value かんどう deeply, often expressing it through silence, tears, or heartfelt applause."},

    {type:"teach", trg:"そうぞうりょく", src:"imagination / creative power", pos:"noun", gender:null,
     note:"そうぞうりょくゆたかな = imaginative.\nそうぞうりょくをいかす = utilize imagination.",
     example:"A: こどものそうぞうりょくはすばらしいです。\nB: おとなにないはっそうがありますね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Children's imagination is wonderful.\nB: They have ideas adults don't have.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"そうぞうりょく (想像力) is celebrated in Japanese creative culture. Note: そうぞう has two meanings with different kanji: 想像 (imagination) and 創造 (creation). そうぞうりょく (imaginative power) differs from そうぞうせい (creativity). Japanese education is debating how to foster そうぞうりょく alongside traditional knowledge-based learning."},

    {type:"teach", trg:"げいじゅつか", src:"artist", pos:"noun", gender:null,
     note:"げいじゅつ = art. げいじゅつさくひん = work of art.\nげいじゅつか = artist.",
     example:"A: しょうらいげいじゅつかになりたいです。\nB: どんなげいじゅつにきょうみがありますか？\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: I want to become an artist in the future.\nB: What kind of art are you interested in?\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"Japanese げいじゅつ (芸術) tradition spans visual arts (日本画, 浮世絵), performing arts (能, 歌舞伎), literary arts (俳句, 小説), and craft arts (陶芸, 漆芸). The concept of 人間国宝 (Living National Treasure) recognizes master げいじゅつか who preserve traditional techniques. Japan has over 100 designated Living National Treasures."},

    // Quiz steps
    {type:"mc", q:"「げんじものがたり」はなぜゆうめいですか？",
     opts:["It is considered the world's first novel","It is the longest book ever","It was written by a samurai","It predicted the future"],
     ans:"It is considered the world's first novel",
     hint:"Written over 1,000 years ago by Murasaki Shikibu, this work is celebrated for being the earliest full-length n... in w... literature."},

    {type:"fb", s:"このえいがにとても{1}しました。",
     a:["かんどう"],
     opts:["かんどう","びょうしゃ","そうぞう","ひょうげん"],
     hint:"You were deeply moved emotionally by the film. This word describes being stirred by art or experiences.",
     sSrc:"I was deeply moved by this film."},

    {type:"match", pairs:[
      {trg:"しょうせつ", src:"novel"},
      {trg:"し", src:"poem"},
      {trg:"ものがたり", src:"tale / narrative"},
      {trg:"さくひん", src:"work of art"}
    ]},

    {type:"mc", q:"にほんのでんとうげいのうをみっつあげてください。",
     opts:["Noh, Kabuki, Bunraku","Karate, Judo, Kendo","Sushi, Ramen, Tempura","Haiku, Tanka, Renga"],
     ans:"Noh, Kabuki, Bunraku",
     hint:"These three traditional performing arts are all UNESCO Intangible Cultural Heritage. They involve theater, not poetry or food."},

    {type:"fb", s:"このしょうせつのしぜん{1}がうつくしいです。",
     a:["びょうしゃ"],
     opts:["びょうしゃ","ものがたり","かんどう","さくひん"],
     hint:"The novel's way of depicting and describing nature is beautiful. This word means 'description' or 'depiction.'",
     sSrc:"The nature descriptions in this novel are beautiful."},

    {type:"mc", q:"「にんげんこくほう」はなんですか？",
     opts:["Master artists designated as Living National Treasures","Famous politicians","Olympic athletes","University professors"],
     ans:"Master artists designated as Living National Treasures",
     hint:"This designation recognizes individuals who preserve important traditional artistic techniques at the highest level."}
  ]
};
export default BATCH11_L1;
