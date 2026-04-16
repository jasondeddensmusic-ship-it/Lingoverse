// Batch 11 – Unit 33 (B2.4 Literature): Literary & Artistic Vocabulary
const BATCH11_L1 = {
  id:"jav2_u33l_b11_1", title:"ぶんがくとげいじゅつ", icon:"🖌️", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんがくとげいじゅつ",
     desc:"Learn vocabulary for discussing literature, art, and creative expression. Japan has a rich artistic tradition spanning poetry, prose, theater, and visual arts.",
     goals:["Discuss literary genres and techniques","Use artistic and creative vocabulary","Understand cultural references to Japanese arts"]},

    {type:"teach", trg:"さくひん", src:"work (of art/literature)", pos:"noun", gender:null,
     note:"だいひょうさく = masterpiece/representative work.\nさくひんをつくる = create a work.",
     example:"A: このさくかのだいひょうさくはなんですか？\nB: 「ノルウェイのもり」がゆうめいです。",
     exampleSrc:"A: What is this author's representative work?\nB: 'Norwegian Wood' is famous.",
     funFact:"さくひん (作品) applies to any creative output: literature, film, music, or art. Japanese literary prizes like あくたがわしょう (Akutagawa Prize) for serious fiction and なおきしょう (Naoki Prize) for popular fiction are major cultural events. Winning elevates a さくひん to national attention."},

    {type:"teach", trg:"しょうせつ", src:"novel", pos:"noun", gender:null,
     note:"しょうせつか = novelist.\nたんぺんしょうせつ = short story.",
     example:"A: にほんのしょうせつをよんだことがありますか？\nB: はい、むらかみはるきのしょうせつをよみました。",
     exampleSrc:"A: Have you read a Japanese novel?\nB: Yes, I read a Murakami Haruki novel.",
     funFact:"Japanese しょうせつ (小説) has a global reputation. むらかみはるき, かわばたやすなり (Nobel 1968), おおえけんざぶろう (Nobel 1994) are internationally celebrated. Light novels (ライトノベル) are a popular modern genre blending しょうせつ with anime/manga aesthetics, creating a unique literary ecosystem."},

    {type:"teach", trg:"し", src:"poem / poetry", pos:"noun", gender:null,
     note:"しじん = poet. しをかく = write poetry.\nSpecifically modern/free verse poetry.",
     example:"A: にほんのしにきょうみがあります。\nB: まずはいくやたんかからはじめてみてはどうですか？",
     exampleSrc:"A: I am interested in Japanese poetry.\nB: How about starting with haiku or tanka?",
     funFact:"Japanese し (詩) in the modern sense refers to free verse, while traditional forms have specific names: はいく (17 syllables), たんか (31 syllables), れんが (linked verse). Poetry holds a special place: even modern politicians write poems. The ancient まんようしゅう (Man'yoshu, 759 AD) is Japan's oldest poetry collection."},

    {type:"teach", trg:"ひょうげんりょく", src:"expressive power / expressiveness", pos:"noun", gender:null,
     note:"ひょうげんりょくがゆたか = richly expressive.\nKey literary quality.",
     example:"A: このさっかのひょうげんりょくはすばらしいです。\nB: びょうしゃがせいかくでうつくしいですね。",
     exampleSrc:"A: This author's expressiveness is wonderful.\nB: The descriptions are precise and beautiful.",
     funFact:"ひょうげんりょく (表現力) is a core evaluation criterion in Japanese education, from elementary school compositions to university entrance exams. Japanese literary criticism values ぶんたいのうつくしさ (beauty of writing style) as much as content. Writers are celebrated for their unique ひょうげんりょく."},

    {type:"teach", trg:"びょうしゃ", src:"description / depiction", pos:"noun", gender:null,
     note:"しんりびょうしゃ = psychological description.\nびょうしゃりょく = descriptive power.",
     example:"A: このしょうせつのしぜんびょうしゃがうつくしいです。\nB: よんでいるとけしきがめにうかびますね。",
     exampleSrc:"A: The nature descriptions in this novel are beautiful.\nB: When reading, the scenery comes to mind.",
     funFact:"Japanese literary tradition excels in びょうしゃ (描写). しぜんびょうしゃ (nature description) connects to the seasonal awareness embedded in culture. しんりびょうしゃ (psychological description) is central to the 私小説 (I-novel) genre where authors write thinly-veiled autobiographical fiction exploring inner emotional landscapes."},

    {type:"teach", trg:"ものがたり", src:"story / tale / narrative", pos:"noun", gender:null,
     note:"ものがたりをつくる = create a story.\nげんじものがたり = The Tale of Genji.",
     example:"A: にほんさいこのものがたりはなんですか？\nB: げんじものがたりです。せんねんいじょうまえにかかれました。",
     exampleSrc:"A: What is the oldest Japanese narrative?\nB: The Tale of Genji. It was written over a thousand years ago.",
     funFact:"げんじものがたり (The Tale of Genji, ~1010 AD) by むらさきしきぶ is considered the world's first novel. This ものがたり (物語) explored psychology, politics, and romance with unprecedented sophistication. The word ものがたり itself means 'telling of things' (物 = things, 語り = telling), reflecting the oral storytelling tradition."},

    {type:"teach", trg:"でんとうげいのう", src:"traditional performing arts", pos:"noun", gender:null,
     note:"のう (Noh), かぶき (Kabuki), ぶんらく (Bunraku).\nAll UNESCO heritage.",
     example:"A: にほんのでんとうげいのうをみたことがありますか？\nB: かぶきをいちどみました。とてもうつくしかったです。",
     exampleSrc:"A: Have you seen Japanese traditional performing arts?\nB: I saw Kabuki once. It was very beautiful.",
     funFact:"Japan's three major でんとうげいのう are: のう (Noh, subtle/spiritual), かぶき (Kabuki, dramatic/colorful), and ぶんらく (Bunraku, puppet theater). All are UNESCO Intangible Cultural Heritage. かぶき performers train from childhood, with famous acting families (梨園) passing traditions through generations."},

    {type:"teach", trg:"えがく", src:"to depict / to draw / to portray", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: えがいて.\nゆめをえがく = envision a dream.",
     example:"A: このえいがはせんごのにほんをえがいています。\nB: れきしてきなさくひんですね。",
     exampleSrc:"A: This film depicts postwar Japan.\nB: It is a historical work.",
     funFact:"えがく (描く) serves double duty: physically drawing pictures and figuratively portraying themes. しょうせつでじだいをえがく (portray an era in a novel), ゆめをえがく (envision a dream). The kanji 描 contains 手 (hand) + 苗 (seedling), suggesting the careful hand-cultivation of imagery."},

    {type:"teach", trg:"かんどう", src:"being deeply moved / emotion", pos:"noun", gender:null,
     note:"かんどうする = to be moved/impressed.\nかんどうてき = moving/touching.",
     example:"A: このえいがにかんどうしました。\nB: わたしもなきました。",
     exampleSrc:"A: I was deeply moved by this film.\nB: I cried too.",
     funFact:"かんどう (感動) describes being deeply stirred emotionally, a prized experience in Japanese culture. かんどうてき (moving/touching) is the highest praise for art, performances, and even everyday moments. Japanese audiences value かんどう deeply, often expressing it through silence, tears, or heartfelt applause."},

    {type:"teach", trg:"そうぞうりょく", src:"imagination / creative power", pos:"noun", gender:null,
     note:"そうぞうりょくゆたかな = imaginative.\nそうぞうりょくをいかす = utilize imagination.",
     example:"A: こどものそうぞうりょくはすばらしいです。\nB: おとなにないはっそうがありますね。",
     exampleSrc:"A: Children's imagination is wonderful.\nB: They have ideas adults don't have.",
     funFact:"そうぞうりょく (想像力) is celebrated in Japanese creative culture. Note: そうぞう has two meanings with different kanji: 想像 (imagination) and 創造 (creation). そうぞうりょく (imaginative power) differs from そうぞうせい (creativity). Japanese education is debating how to foster そうぞうりょく alongside traditional knowledge-based learning."},

    {type:"teach", trg:"げいじゅつか", src:"artist", pos:"noun", gender:null,
     note:"げいじゅつ = art. げいじゅつさくひん = work of art.\nげいじゅつか = artist.",
     example:"A: しょうらいげいじゅつかになりたいです。\nB: どんなげいじゅつにきょうみがありますか？",
     exampleSrc:"A: I want to become an artist in the future.\nB: What kind of art are you interested in?",
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
