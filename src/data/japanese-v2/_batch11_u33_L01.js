// Batch 11 – Unit 33 (B2.4 Literature): Literary & Artistic Vocabulary
const BATCH11_L1 = {
  id:"jav2_u33l_b11_1", title:"文学(ぶんがく)と芸術(げいじゅつ)", icon:"🖌️", xp:15, board:true,
  steps:[
    {type:"intro", title:"文学(ぶんがく)と芸術(げいじゅつ)",
     desc:"Learn vocabulary for discussing literature, art, and creative expression. Japan has a rich artistic tradition spanning poetry, prose, theater, and visual arts.",
     goals:["Discuss literary genres and techniques","Use artistic and creative vocabulary","Understand cultural references to Japanese arts"]},

    {type:"teach", trg:"作品(さくひん)", src:"work (of art/literature)", pos:"noun", gender:null,
     note:"代表作(だいひょうさく) = masterpiece/representative work.\n作品(さくひん)を作(つく)る = create a work.",
     example:"A: この作家(さっか)の代表作(だいひょうさく)は何(なん)ですか？\nB: 「ノルウェイの森(もり)」が有名(ゆうめい)です。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: What is this author's representative work?\nB: 'Norwegian Wood' is famous.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"作品(さくひん) applies to any creative output: literature, film, music, or art. Japanese literary prizes like 芥川賞(あくたがわしょう) (Akutagawa Prize) for serious fiction and 直木賞(なおきしょう) (Naoki Prize) for popular fiction are major cultural events. Winning elevates a 作品(さくひん) to national attention."},

    {type:"teach", trg:"小説(しょうせつ)", src:"novel", pos:"noun", gender:null,
     note:"小説家(しょうせつか) = novelist.\n短編(たんぺん)小説(しょうせつ) = short story.",
     example:"A: 日本(にほん)の小説(しょうせつ)を読(よ)んだことがありますか？\nB: はい、村上春樹(むらかみはるき)の小説(しょうせつ)を読(よ)みました。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Have you read a Japanese novel?\nB: Yes, I read a Murakami Haruki novel.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"Japanese 小説(しょうせつ) has a global reputation. 村上春樹(むらかみはるき), 川端康成(かわばたやすなり) (Nobel 1968), 大江健三郎(おおえけんざぶろう) (Nobel 1994) are internationally celebrated. Light novels (ライトノベル) are a popular modern genre blending 小説(しょうせつ) with anime/manga aesthetics, creating a unique literary ecosystem."},

    {type:"teach", trg:"詩(し)", src:"poem / poetry", pos:"noun", gender:null,
     note:"詩人(しじん) = poet. 詩(し)を書(か)く = write poetry.\nSpecifically modern/free verse poetry.",
     example:"A: 日本(にほん)の詩(し)に興味(きょうみ)があります。\nB: まず俳句(はいく)や短歌(たんか)から始(はじ)めてみてはどうですか？\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: I am interested in Japanese poetry.\nB: How about starting with haiku or tanka?\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Japanese 詩(し) in the modern sense refers to free verse, while traditional forms have specific names: 俳句(はいく) (17 syllables), 短歌(たんか) (31 syllables), 連歌(れんが) (linked verse). Poetry holds a special place: even modern politicians write poems. The ancient 万葉集(まんようしゅう) (Man'yoshu, 759 AD) is Japan's oldest poetry collection."},

    {type:"teach", trg:"表現力(ひょうげんりょく)", src:"expressive power / expressiveness", pos:"noun", gender:null,
     note:"表現力(ひょうげんりょく)が豊(ゆた)か = richly expressive.\nKey literary quality.",
     example:"A: この作家(さっか)の表現力(ひょうげんりょく)は素晴(すば)らしいです。\nB: 描写(びょうしゃ)が正確(せいかく)で美(うつく)しいですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: This author's expressiveness is wonderful.\nB: The descriptions are precise and beautiful.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"表現力(ひょうげんりょく) is a core evaluation criterion in Japanese education, from elementary school compositions to university entrance exams. Japanese literary criticism values 文体(ぶんたい)の美(うつく)しさ (beauty of writing style) as much as content. Writers are celebrated for their unique 表現力(ひょうげんりょく)."},

    {type:"teach", trg:"描写(びょうしゃ)", src:"description / depiction", pos:"noun", gender:null,
     note:"心理(しんり)描写(びょうしゃ) = psychological description.\n描写力(びょうしゃりょく) = descriptive power.",
     example:"A: この小説(しょうせつ)の自然(しぜん)描写(びょうしゃ)が美(うつく)しいです。\nB: 読(よ)んでいると景色(けしき)が目(め)に浮(う)かびますね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: The nature descriptions in this novel are beautiful.\nB: When reading, the scenery comes to mind.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japanese literary tradition excels in 描写(びょうしゃ). 自然(しぜん)描写(びょうしゃ) (nature description) connects to the seasonal awareness embedded in culture. 心理(しんり)描写(びょうしゃ) (psychological description) is central to the 私小説(しょうせつ) (I-novel) genre where authors write thinly-veiled autobiographical fiction exploring inner emotional landscapes."},

    {type:"teach", trg:"物語(ものがたり)", src:"story / tale / narrative", pos:"noun", gender:null,
     note:"物語(ものがたり)を作(つく)る = create a story.\n源氏物語(げんじものがたり) = The Tale of Genji.",
     example:"A: 日本最古(にほんさいこ)の物語(ものがたり)は何(なん)ですか？\nB: 源氏物語(げんじものがたり)です。千年(せんねん)以上(いじょう)前(まえ)に書(か)かれました。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: What is the oldest Japanese narrative?\nB: The Tale of Genji. It was written over a thousand years ago.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"源氏物語(げんじものがたり) (The Tale of Genji, ~1010 AD) by 紫式部(むらさきしきぶ) is considered the world's first novel. This 物語(ものがたり) explored psychology, politics, and romance with unprecedented sophistication. The word 物語(ものがたり) itself means 'telling of things' (物(もの) = things, 語(かた)り = telling), reflecting the oral storytelling tradition."},

    {type:"teach", trg:"伝統芸能(でんとうげいのう)", src:"traditional performing arts", pos:"noun", gender:null,
     note:"能(のう) (Noh), 歌舞伎(かぶき) (Kabuki), 文楽(ぶんらく) (Bunraku).\nAll UNESCO heritage.",
     example:"A: 日本(にほん)の伝統芸能(でんとうげいのう)を見(み)たことがありますか？\nB: 歌舞伎(かぶき)を一度(いちど)見(み)ました。とても美(うつく)しかったです。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Have you seen Japanese traditional performing arts?\nB: I saw Kabuki once. It was very beautiful.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"Japan's three major 伝統芸能(でんとうげいのう) are: 能(のう) (Noh, subtle/spiritual), 歌舞伎(かぶき) (Kabuki, dramatic/colorful), and 文楽(ぶんらく) (Bunraku, puppet theater). All are UNESCO Intangible Cultural Heritage. 歌舞伎(かぶき) performers train from childhood, with famous acting families (梨園(りえん)) passing traditions through generations."},

    {type:"teach", trg:"描(えが)く", src:"to depict / to draw / to portray", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: 描(えが)いて.\n夢(ゆめ)を描(えが)く = envision a dream.",
     example:"A: この映画(えいが)は戦後(せんご)の日本(にほん)を描(えが)いています。\nB: 歴史的(れきしてき)な作品(さくひん)ですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: This film depicts postwar Japan.\nB: It is a historical work.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"描(えが)く serves double duty: physically drawing pictures and figuratively portraying themes. 小説(しょうせつ)で時代(じだい)を描(えが)く (portray an era in a novel), 夢(ゆめ)を描(えが)く (envision a dream). The kanji 描(えが) contains 手(て) (hand) + 苗(なえ) (seedling), suggesting the careful hand-cultivation of imagery."},

    {type:"teach", trg:"感動(かんどう)", src:"being deeply moved / emotion", pos:"noun", gender:null,
     note:"感動(かんどう)する = to be moved/impressed.\n感動的(かんどうてき) = moving/touching.",
     example:"A: この映画(えいが)に感動(かんどう)しました。\nB: 私(わたし)も泣(な)きました。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: I was deeply moved by this film.\nB: I cried too.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"感動(かんどう) describes being deeply stirred emotionally, a prized experience in Japanese culture. 感動的(かんどうてき) (moving/touching) is the highest praise for art, performances, and even everyday moments. Japanese audiences value 感動(かんどう) deeply, often expressing it through silence, tears, or heartfelt applause."},

    {type:"teach", trg:"想像力(そうぞうりょく)", src:"imagination / creative power", pos:"noun", gender:null,
     note:"想像力(そうぞうりょく)豊(ゆた)かな = imaginative.\n想像力(そうぞうりょく)を生(い)かす = utilize imagination.",
     example:"A: 子(こ)どもの想像力(そうぞうりょく)は素晴(すば)らしいです。\nB: 大人(おとな)にない発想(はっそう)がありますね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Children's imagination is wonderful.\nB: They have ideas adults don't have.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"想像力(そうぞうりょく) is celebrated in Japanese creative culture. Note: そうぞう has two meanings with different kanji: 想像(そうぞう) (imagination) and 創造(そうぞう) (creation). 想像力(そうぞうりょく) (imaginative power) differs from 創造性(そうぞうせい) (creativity). Japanese education is debating how to foster 想像力(そうぞうりょく) alongside traditional knowledge-based learning."},

    {type:"teach", trg:"芸術家(げいじゅつか)", src:"artist", pos:"noun", gender:null,
     note:"芸術(げいじゅつ) = art. 芸術作品(げいじゅつさくひん) = work of art.\n芸術家(げいじゅつか) = artist.",
     example:"A: 将来(しょうらい)芸術家(げいじゅつか)になりたいです。\nB: どんな芸術(げいじゅつ)に興味(きょうみ)がありますか？\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: I want to become an artist in the future.\nB: What kind of art are you interested in?\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"Japanese 芸術(げいじゅつ) tradition spans visual arts (日本画(にほんが), 浮世絵(うきよえ)), performing arts (能(のう), 歌舞伎(かぶき)), literary arts (俳句(はいく), 小説(しょうせつ)), and craft arts (陶芸(とうげい), 漆芸(しつげい)). The concept of 人間国宝(にんげんこくほう) (Living National Treasure) recognizes master 芸術家(げいじゅつか) who preserve traditional techniques. Japan has over 100 designated Living National Treasures."},

    // Quiz steps
    {type:"mc", q:"「源氏物語(げんじものがたり)」はなぜ有名(ゆうめい)ですか？",
     opts:["It is considered the world's first novel","It is the longest book ever","It was written by a samurai","It predicted the future"],
     ans:"It is considered the world's first novel",
     hint:"Written over 1,000 years ago by Murasaki Shikibu, this work is celebrated for being the earliest full-length n... in w... literature."},

    {type:"fb", s:"この映画(えいが)にとても{1}しました。",
     a:["感動(かんどう)"],
     opts:["感動(かんどう)","描写(びょうしゃ)","想像(そうぞう)","表現(ひょうげん)"],
     hint:"You were deeply moved emotionally by the film. This word describes being stirred by art or experiences.",
     sSrc:"I was deeply moved by this film."},

    {type:"match", pairs:[
      {trg:"小説(しょうせつ)", src:"novel"},
      {trg:"詩(し)", src:"poem"},
      {trg:"物語(ものがたり)", src:"tale / narrative"},
      {trg:"作品(さくひん)", src:"work of art"}
    ]},

    {type:"mc", q:"日本(にほん)の伝統芸能(でんとうげいのう)を三(みっ)つ挙(あ)げてください。",
     opts:["Noh, Kabuki, Bunraku","Karate, Judo, Kendo","Sushi, Ramen, Tempura","Haiku, Tanka, Renga"],
     ans:"Noh, Kabuki, Bunraku",
     hint:"These three traditional performing arts are all UNESCO Intangible Cultural Heritage. They involve theater, not poetry or food."},

    {type:"fb", s:"この小説(しょうせつ)の自然(しぜん){1}が美(うつく)しいです。",
     a:["描写(びょうしゃ)"],
     opts:["描写(びょうしゃ)","物語(ものがたり)","感動(かんどう)","作品(さくひん)"],
     hint:"The novel's way of depicting and describing nature is beautiful. This word means 'description' or 'depiction.'",
     sSrc:"The nature descriptions in this novel are beautiful."},

    {type:"mc", q:"「人間国宝(にんげんこくほう)」は何(なん)ですか？",
     opts:["Master artists designated as Living National Treasures","Famous politicians","Olympic athletes","University professors"],
     ans:"Master artists designated as Living National Treasures",
     hint:"This designation recognizes individuals who preserve important traditional artistic techniques at the highest level."}
  ,{type:"match",pairs:[{trg:"表現力(ひょうげんりょく)",src:"expressive power / expressiveness"},{trg:"伝統芸能(でんとうげいのう)",src:"traditional performing arts"},{trg:"描(えが)く",src:"to depict / to draw / to portray"},{trg:"想像力(そうぞうりょく)",src:"imagination / creative power"},{trg:"芸術家(げいじゅつか)",src:"artist"}]}]
};
export default BATCH11_L1;
