// Batch 8 – Unit 33 (B2.4 Literature): Literary Terms & Narrative
const BATCH8_L1 = {
  id:"jav2_u33l_b8_1", title:"文学(ぶんがく)用語(ようご)", icon:"📖", xp:15, board:true,
  steps:[
    {type:"intro", title:"文学(ぶんがく)用語(ようご)",
     desc:"Master literary and narrative vocabulary for discussing books, stories, and creative writing in Japanese. These terms connect to Japan's rich literary tradition.",
     goals:["Use literary analysis vocabulary","Discuss narrative structure and themes","Appreciate Japanese literary concepts"]},

    {type:"teach", trg:"小説(しょうせつ)", src:"novel / fiction", pos:"noun", gender:null,
     note:"小説家(しょうせつか) = novelist.\n短編小説(たんぺんしょうせつ) = short story. 長編小説(ちょうへんしょうせつ) = long novel.",
     example:"A: この小説(しょうせつ)を読(よ)みましたか？\nB: はい、とても感動(かんどう)しました。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Have you read this novel?\nB: Yes, I was very moved.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"Japan's 小説(しょうせつ) tradition is ancient: 源氏物語(げんじものがたり) (Tale of Genji, ~1000 AD) is considered the world's first novel. Modern 小説家(しょうせつか) like 村上春樹(むらかみはるき) (Haruki Murakami) are globally famous. The 芥川賞(あくたがわしょう) (Akutagawa Prize) for literature and 直木賞(なおきしょう) (Naoki Prize) for popular fiction are Japan's most prestigious literary awards."},

    {type:"teach", trg:"物語(ものがたり)", src:"story / tale / narrative", pos:"noun", gender:null,
     note:"From もの (thing) + 語(かた)り (telling).\n物語性(ものがたりせい) = narrativity.",
     example:"A: この物語(ものがたり)のテーマは何(なん)ですか？\nB: 愛(あい)と勇気(ゆうき)です。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: What is the theme of this story?\nB: Love and courage.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"物語(ものがたり) is the native Japanese word for narrative, predating the borrowed term 小説(しょうせつ) (novel, from Chinese). Classical 物語(ものがたり) include 源氏物語(げんじものがたり) and 竹取物語(たけとりものがたり). Modern usage extends beyond literature: ブランドの物語(ものがたり) (brand story), 人生(じんせい)の物語(ものがたり) (life story). Everything in Japan can have a 物語(ものがたり)."},

    {type:"teach", trg:"比喩(ひゆ)", src:"metaphor / figure of speech", pos:"noun", gender:null,
     note:"比喩的(ひゆてき) = metaphorical.\n直喩(ちょくゆ) = simile. 隠喩(いんゆ) = metaphor (implicit).",
     example:"A: この歌(うた)には多(おお)くの比喩(ひゆ)が使(つか)われています。\nB: 人生(じんせい)を旅(たび)に例(たと)えていますね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Many metaphors are used in this poem.\nB: It compares life to a journey.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"Japanese literary criticism distinguishes 直喩(ちょくゆ) (simile using ように/ごとく) from 隠喩(いんゆ) (implicit metaphor). Japanese poetry, especially はいく, relies heavily on 比喩(ひゆ) and 象徴(しょうちょう) (symbolism). The classic comparison 人生(じんせい)は旅(たび)のようだ (life is like a journey) appears in Basho's famous 奥(おく)の細道(ほそみち)."},

    {type:"teach", trg:"主人公(しゅじんこう)", src:"protagonist / main character", pos:"noun", gender:null,
     note:"主人公視点(しゅじんこうしてん) = protagonist's perspective.\nAlso used for real people who drive a story.",
     example:"A: この小説(しょうせつ)の主人公(しゅじんこう)は誰(だれ)ですか？\nB: 若(わか)い教師(きょうし)です。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Who is the protagonist of this novel?\nB: A young teacher.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"主人公(しゅじんこう) literally means 'master person.' In manga and anime, 主人公補正(しゅじんこうほせい) (protagonist correction/power) is a humorous concept: the hero always wins through plot armor. Japanese fiction often features antiheroes and morally complex 主人公(しゅじんこう), reflecting a literary tradition less focused on clear good vs. evil."},

    {type:"teach", trg:"伏線(ふくせん)", src:"foreshadowing / plot thread", pos:"noun", gender:null,
     note:"伏線(ふくせん)を張(は)る = to plant foreshadowing.\n伏線回収(ふくせんかいしゅう) = resolving a plot thread.",
     example:"A: この場面(ばめん)は伏線(ふくせん)だったんですね。\nB: 最後(さいご)にすべてつながりました。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: This scene was foreshadowing.\nB: Everything connected at the end.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"伏線(ふくせん) appreciation is huge in Japanese storytelling culture. 伏線回収(ふくせんかいしゅう) (recovering/resolving foreshadowing) is considered masterful writing. Manga readers and anime viewers discuss 伏線(ふくせん) obsessively. The phrase 伏線(ふくせん)を張(は)りすぎ (too much foreshadowing) is mild criticism. Japanese mystery novels are renowned for 伏線(ふくせん) craft."},

    {type:"mc", q:"What is considered the world's first novel?", opts:["源氏物語(げんじものがたり) (Tale of Genji)","一千一夜物語(いっせんいちやものがたり) (One Thousand and One Nights)","ドン・キホーテ","ロビンソン・クルーソー"], ans:"源氏物語(げんじものがたり) (Tale of Genji)",
     hint:"Written around 1000 AD by Murasaki Shikibu, this Japanese classic predates European novels."},

    {type:"teach", trg:"行間(ぎょうかん)を読(よ)む", src:"to read between the lines", pos:"verb", gender:null,
     note:"行(ぎょう) (line) + 間(かん) (between) + 読(よ)む (to read).\nImplied meaning. Essential skill in Japanese communication.",
     example:"A: 日本(にほん)文学(ぶんがく)では行間(ぎょうかん)を読(よ)むことが大事(だいじ)です。\nB: すべてを言葉(ことば)にしない文化(ぶんか)ですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: In Japanese literature, reading between the lines is important.\nB: It is a culture that does not put everything into words.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"行間(ぎょうかん)を読(よ)む is not just a literary skill but a core Japanese communication skill. Japanese communication is 高(こう)コンテキスト (high-context): much is implied rather than stated. Literary works by 川端康成(かわばたやすなり) (Kawabata Yasunari) and 吉本(よしもと)ばなな exemplify this style, leaving crucial emotions unspoken."},

    {type:"teach", trg:"展開(てんかい)", src:"development / unfolding / progression (of a story)", pos:"noun", gender:null,
     note:"物語(ものがたり)の展開(てんかい) = story development.\n意外(いがい)な展開(てんかい) = unexpected development.",
     example:"A: 展開(てんかい)が速(はや)くてドキドキしました。\nB: どんでんがえしがすごかったですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: The fast-paced development was thrilling.\nB: The plot twist was amazing.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"Japanese narrative structure follows 起承転結(きしょうてんけつ): introduction, development, turn, conclusion. This differs from Western three-act structure. The 転(てん) (turn) is the most valued part, similar to a twist. 展開(てんかい) in manga is discussed passionately by fans: 'この展開(てんかい)は熱(あつ)い！' (this development is hot!)."},

    {type:"teach", trg:"どんでんがえし", src:"plot twist / dramatic reversal", pos:"noun", gender:null,
     note:"From kabuki theater revolving stage.\nどんでんがえしの結末(けつまつ) = a twist ending.",
     example:"A: 最後(さいご)にどんでんがえしがありました。\nB: まったく予想(よそう)できませんでした。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: There was a plot twist at the end.\nB: I could not predict it at all.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"どんでんがえし comes from the どんでん (revolving stage) in 歌舞伎(かぶき) theater, where the entire set literally turns around to reveal a new scene. In modern use, it means any dramatic reversal. Japanese mystery writers are masters of どんでんがえし. Anime endings with どんでんがえし generate massive online discussion."},

    {type:"teach", trg:"余韻(よいん)", src:"lingering impression / afterglow / reverberation", pos:"noun", gender:null,
     note:"余韻(よいん)にひたる = to bask in the afterglow.\nA valued quality in Japanese aesthetics.",
     example:"A: 余韻(よいん)が残(のこ)る映画(えいが)でした。\nB: 見終(みお)わった後(あと)も考(かんが)えさせられますね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: It was a movie with a lingering impression.\nB: It makes you think even after watching.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"余韻(よいん) is a deeply valued aesthetic concept in Japan. The best art, music, and literature leave 余韻(よいん): a resonance that continues after the experience ends. はいく masters achieve 余韻(よいん) in just 17 syllables. 余韻(よいん)にひたる (to savor the lingering feeling) is a meditative pleasure valued in Japanese culture."},

    {type:"teach", trg:"起承転結(きしょうてんけつ)", src:"four-part narrative structure (intro-development-turn-conclusion)", pos:"noun", gender:null,
     note:"Traditional Japanese/Chinese storytelling framework.\nUsed in writing instruction.",
     example:"A: 作文(さくぶん)は起承転結(きしょうてんけつ)で書(か)きましょう。\nB: 転(てん)の部分(ぶぶん)が一番(いちばん)難(むずか)しいです。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Let us write essays in ki-sho-ten-ketsu structure.\nB: The 'turn' part is the most difficult.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"起承転結(きしょうてんけつ) originates from Chinese poetry and is Japan's default narrative structure: 起(き) (introduction), 承(しょう) (development), 転(てん) (unexpected turn), 結(けつ) (conclusion). It differs from Western structures by emphasizing the 転(てん) (turn/surprise). Japanese school essays, business presentations, and four-panel manga (4コママンガ) all follow this pattern."},

    {type:"fb", s:"最後(さいご)に{1}がありました。\n(There was a plot twist at the end.)", a:"どんでんがえし", opts:["どんでんがえし","伏線(ふくせん)","展開(てんかい)","余韻(よいん)"], sSrc:"There was a plot twist at the end.",
     hint:"This term from kabuki theater describes a dramatic reversal of the story."},

    {type:"teach", trg:"抒情(じょじょう)", src:"lyricism / emotional expression / pathos", pos:"noun", gender:null,
     note:"抒情的(じょじょうてき) = lyrical.\n抒情詩(じょじょうし) = lyric poetry.",
     example:"A: この詩(し)はとても抒情的(じょじょうてき)です。\nB: 感情(かんじょう)が込(こ)められていますね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: This poem is very lyrical.\nB: It is filled with emotion.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"抒情(じょじょう) is central to Japanese literary aesthetics. Japanese poetry traditions (和歌(わか), はいく, 短歌(たんか)) are fundamentally 抒情的(じょじょうてき). The concept of もののあはれ (the pathos of things) by 本居宣長(もとおりのりなが) (18th century scholar) defined Japanese literature's emotional core: beauty is found in impermanence and gentle sadness."},

    {type:"teach", trg:"はいく", src:"haiku (17-syllable poem)", pos:"noun", gender:null,
     note:"5-7-5 mora structure. 季語(きご) (seasonal word) required.\n松尾芭蕉(まつおばしょう) = Matsuo Basho, greatest haiku poet.",
     example:"A: 日本(にほん)のはいくを書(か)いてみたいです。\nB: まず季語(きご)を学(まな)びましょう。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: I want to try writing Japanese haiku.\nB: First, let us learn seasonal words.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"はいく is the world's shortest poetic form: 5-7-5 おん (mora). It requires a 季語(きご) (seasonal reference word) and aims for 小(しょう)の中(なか)の大(だい) (small yet infinite). Basho's 'ふるいけや かわずとびこむ みずのおと' (old pond, frog jumps in, sound of water) is the most famous. はいく is practiced globally in multiple languages."},

    {type:"match", pairs:[{trg:"小説(しょうせつ)",src:"novel"},{trg:"物語(ものがたり)",src:"story/tale"},{trg:"伏線(ふくせん)",src:"foreshadowing"},{trg:"どんでんがえし",src:"plot twist"},{trg:"余韻(よいん)",src:"lingering impression"}],
     hint:"Match each literary term with its English meaning."},

    {type:"mc", q:"What does 行間(ぎょうかん)を読(よ)む mean?", opts:["To read between the lines","To read very quickly","To read aloud","To read backwards"], ans:"To read between the lines",
     hint:"This skill is essential in Japanese high-context communication and literature."},

    {type:"fb", s:"作文(さくぶん)は{1}で書(か)きましょう。\n(Let us write essays in four-part structure.)", a:"起承転結(きしょうてんけつ)", opts:["起承転結(きしょうてんけつ)","比喩(ひゆ)","抒情(じょじょう)","行間(ぎょうかん)"], sSrc:"Let us write essays in four-part structure.",
     hint:"This traditional structure has four parts: introduction, development, turn, conclusion."},

    {type:"mc", q:"What is 余韻(よいん) in Japanese aesthetics?", opts:["The lingering emotional impression after an experience","The opening scene of a story","A type of poetry","A writing technique"], ans:"The lingering emotional impression after an experience",
     hint:"Great art leaves a resonance that keeps reverberating in the mind long after you have finished it."}
  ]
};
export default BATCH8_L1;
