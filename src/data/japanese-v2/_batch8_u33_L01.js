// Batch 8 – Unit 33 (B2.4 Literature): Literary Terms & Narrative
const BATCH8_L1 = {
  id:"jav2_u33l_b8_1", title:"ぶんがくようご", icon:"📖", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんがくようご",
     desc:"Master literary and narrative vocabulary for discussing books, stories, and creative writing in Japanese. These terms connect to Japan's rich literary tradition.",
     goals:["Use literary analysis vocabulary","Discuss narrative structure and themes","Appreciate Japanese literary concepts"]},

    {type:"teach", trg:"しょうせつ", src:"novel / fiction", pos:"noun", gender:null,
     note:"Kanji: 小説. しょうせつか = novelist.\nたんぺんしょうせつ = short story. ちょうへんしょうせつ = long novel.",
     example:"A: このしょうせつをよみましたか？\nB: はい、とてもかんどうしました。",
     exampleSrc:"A: Have you read this novel?\nB: Yes, I was very moved.",
     funFact:"Japan's しょうせつ tradition is ancient: げんじものがたり (Tale of Genji, ~1000 AD) is considered the world's first novel. Modern しょうせつか like むらかみはるき (Haruki Murakami) are globally famous. The あくたがわしょう (Akutagawa Prize) for literature and なおきしょう (Naoki Prize) for popular fiction are Japan's most prestigious literary awards."},

    {type:"teach", trg:"ものがたり", src:"story / tale / narrative", pos:"noun", gender:null,
     note:"Kanji: 物語. From もの (thing) + かたり (telling).\nものがたりせい = narrativity.",
     example:"A: このものがたりのてーまはなんですか？\nB: あいとゆうきです。",
     exampleSrc:"A: What is the theme of this story?\nB: Love and courage.",
     funFact:"ものがたり is the native Japanese word for narrative, predating the borrowed term しょうせつ (novel, from Chinese). Classical ものがたり include げんじものがたり and たけとりものがたり. Modern usage extends beyond literature: ブランドのものがたり (brand story), じんせいのものがたり (life story). Everything in Japan can have a ものがたり."},

    {type:"teach", trg:"ひゆ", src:"metaphor / figure of speech", pos:"noun", gender:null,
     note:"Kanji: 比喩. ひゆてき = metaphorical.\nちょくゆ = simile. いんゆ = metaphor (implicit).",
     example:"A: このうたにはおおくのひゆがつかわれています。\nB: じんせいをたびにたとえていますね。",
     exampleSrc:"A: Many metaphors are used in this poem.\nB: It compares life to a journey.",
     funFact:"Japanese literary criticism distinguishes ちょくゆ (直喩, simile using ように/ごとく) from いんゆ (隠喩, implicit metaphor). Japanese poetry, especially はいく, relies heavily on ひゆ and きごう (symbolism). The classic comparison じんせいはたびのようだ (life is like a journey) appears in Basho's famous おくのほそみち."},

    {type:"teach", trg:"しゅじんこう", src:"protagonist / main character", pos:"noun", gender:null,
     note:"Kanji: 主人公. しゅじんこうしてん = protagonist's perspective.\nAlso used for real people who drive a story.",
     example:"A: このしょうせつのしゅじんこうはだれですか？\nB: わかいきょうしです。",
     exampleSrc:"A: Who is the protagonist of this novel?\nB: A young teacher.",
     funFact:"しゅじんこう literally means 'master person.' In manga and anime, しゅじんこうほせい (protagonist correction/power) is a humorous concept: the hero always wins through plot armor. Japanese fiction often features antiheroes and morally complex しゅじんこう, reflecting a literary tradition less focused on clear good vs. evil."},

    {type:"teach", trg:"ふくせん", src:"foreshadowing / plot thread", pos:"noun", gender:null,
     note:"Kanji: 伏線. ふくせんをはる = to plant foreshadowing.\nふくせんかいしゅう = resolving a plot thread.",
     example:"A: このばめんはふくせんだったんですね。\nB: さいごにすべてつながりました。",
     exampleSrc:"A: This scene was foreshadowing.\nB: Everything connected at the end.",
     funFact:"ふくせん appreciation is huge in Japanese storytelling culture. ふくせんかいしゅう (recovering/resolving foreshadowing) is considered masterful writing. Manga readers and anime viewers discuss ふくせん obsessively. The phrase ふくせんをはりすぎ (too much foreshadowing) is mild criticism. Japanese mystery novels are renowned for ふくせん craft."},

    {type:"mc", q:"What is considered the world's first novel?", opts:["げんじものがたり (Tale of Genji)","いっせんいちやものがたり (One Thousand and One Nights)","ドン・キホーテ","ロビンソン・クルーソー"], ans:"げんじものがたり (Tale of Genji)",
     hint:"Written around 1000 AD by Murasaki Shikibu, this Japanese classic predates European novels."},

    {type:"teach", trg:"ぎょうかんをよむ", src:"to read between the lines", pos:"verb", gender:null,
     note:"ぎょう (line) + かん (between) + よむ (to read).\nImplied meaning. Essential skill in Japanese communication.",
     example:"A: にほんぶんがくではぎょうかんをよむことがだいじです。\nB: すべてをことばにしないぶんかですね。",
     exampleSrc:"A: In Japanese literature, reading between the lines is important.\nB: It is a culture that does not put everything into words.",
     funFact:"ぎょうかんをよむ is not just a literary skill but a core Japanese communication skill. Japanese communication is こうコンテキスト (high-context): much is implied rather than stated. Literary works by かわばたやすなり (Kawabata Yasunari) and よしもとばなな exemplify this style, leaving crucial emotions unspoken."},

    {type:"teach", trg:"てんかい", src:"development / unfolding / progression (of a story)", pos:"noun", gender:null,
     note:"Kanji: 展開. ものがたりのてんかい = story development.\nいがいなてんかい = unexpected development.",
     example:"A: てんかいがはやくてドキドキしました。\nB: どんでんがえしがすごかったですね。",
     exampleSrc:"A: The fast-paced development was thrilling.\nB: The plot twist was amazing.",
     funFact:"Japanese narrative structure follows きしょうてんけつ (起承転結): introduction, development, turn, conclusion. This differs from Western three-act structure. The てん (turn) is the most valued part, similar to a twist. てんかい in manga is discussed passionately by fans: 'kono tenkai wa atsui!' (this development is hot!)."},

    {type:"teach", trg:"どんでんがえし", src:"plot twist / dramatic reversal", pos:"noun", gender:null,
     note:"From kabuki theater revolving stage.\nどんでんがえしのけつまつ = a twist ending.",
     example:"A: さいごにどんでんがえしがありました。\nB: まったくよそうできませんでした。",
     exampleSrc:"A: There was a plot twist at the end.\nB: I could not predict it at all.",
     funFact:"どんでんがえし comes from the どんでん (revolving stage) in かぶき theater, where the entire set literally turns around to reveal a new scene. In modern use, it means any dramatic reversal. Japanese mystery writers are masters of どんでんがえし. Anime endings with どんでんがえし generate massive online discussion."},

    {type:"teach", trg:"よいん", src:"lingering impression / afterglow / reverberation", pos:"noun", gender:null,
     note:"Kanji: 余韻. よいんにひたる = to bask in the afterglow.\nA valued quality in Japanese aesthetics.",
     example:"A: よいんがのこるえいがでした。\nB: みおわったあともかんがえさせられますね。",
     exampleSrc:"A: It was a movie with a lingering impression.\nB: It makes you think even after watching.",
     funFact:"よいん (余韻) is a deeply valued aesthetic concept in Japan. The best art, music, and literature leave よいん: a resonance that continues after the experience ends. はいく masters achieve よいん in just 17 syllables. よいんにひたる (to savor the lingering feeling) is a meditative pleasure valued in Japanese culture."},

    {type:"teach", trg:"きしょうてんけつ", src:"four-part narrative structure (intro-development-turn-conclusion)", pos:"noun", gender:null,
     note:"起承転結. Traditional Japanese/Chinese storytelling framework.\nUsed in writing instruction.",
     example:"A: さくぶんはきしょうてんけつでかきましょう。\nB: てんのぶぶんがいちばんむずかしいです。",
     exampleSrc:"A: Let us write essays in ki-sho-ten-ketsu structure.\nB: The 'turn' part is the most difficult.",
     funFact:"きしょうてんけつ (起承転結) originates from Chinese poetry and is Japan's default narrative structure: き (introduction), しょう (development), てん (unexpected turn), けつ (conclusion). It differs from Western structures by emphasizing the てん (turn/surprise). Japanese school essays, business presentations, and four-panel manga (よんこまマンガ) all follow this pattern."},

    {type:"fb", s:"さいごに{1}がありました。\n(There was a plot twist at the end.)", a:"どんでんがえし", opts:["どんでんがえし","ふくせん","てんかい","よいん"], sSrc:"There was a plot twist at the end.",
     hint:"This term from kabuki theater describes a dramatic reversal of the story."},

    {type:"teach", trg:"じょじょう", src:"lyricism / emotional expression / pathos", pos:"noun", gender:null,
     note:"Kanji: 抒情. じょじょうてき = lyrical.\nじょじょうし = lyric poetry.",
     example:"A: このしはとてもじょじょうてきです。\nB: かんじょうがこめられていますね。",
     exampleSrc:"A: This poem is very lyrical.\nB: It is filled with emotion.",
     funFact:"じょじょう (抒情) is central to Japanese literary aesthetics. Japanese poetry traditions (わか, はいく, たんか) are fundamentally じょじょうてき. The concept of もののあはれ (the pathos of things) by もとおりのりなが (18th century scholar) defined Japanese literature's emotional core: beauty is found in impermanence and gentle sadness."},

    {type:"teach", trg:"はいく", src:"haiku (17-syllable poem)", pos:"noun", gender:null,
     note:"5-7-5 mora structure. きご (seasonal word) required.\nまつおばしょう = Matsuo Basho, greatest haiku poet.",
     example:"A: にほんのはいくをかいてみたいです。\nB: まずきごをまなびましょう。",
     exampleSrc:"A: I want to try writing Japanese haiku.\nB: First, let us learn seasonal words.",
     funFact:"はいく is the world's shortest poetic form: 5-7-5 おん (mora). It requires a きご (seasonal reference word) and aims for しょうちゅう (small yet infinite). Basho's 'ふるいけや かわずとびこむ みずのおと' (old pond, frog jumps in, sound of water) is the most famous. はいく is practiced globally in multiple languages."},

    {type:"match", pairs:[{trg:"しょうせつ",src:"novel"},{trg:"ものがたり",src:"story/tale"},{trg:"ふくせん",src:"foreshadowing"},{trg:"どんでんがえし",src:"plot twist"},{trg:"よいん",src:"lingering impression"}],
     hint:"Match each literary term with its English meaning."},

    {type:"mc", q:"What does ぎょうかんをよむ mean?", opts:["To read between the lines","To read very quickly","To read aloud","To read backwards"], ans:"To read between the lines",
     hint:"This skill is essential in Japanese high-context communication and literature."},

    {type:"fb", s:"さくぶんは{1}でかきましょう。\n(Let us write essays in four-part structure.)", a:"きしょうてんけつ", opts:["きしょうてんけつ","ひゆ","じょじょう","ぎょうかん"], sSrc:"Let us write essays in four-part structure.",
     hint:"This traditional structure has four parts: introduction, development, turn, conclusion."},

    {type:"mc", q:"What is よいん in Japanese aesthetics?", opts:["The lingering emotional impression after an experience","The opening scene of a story","A type of poetry","A writing technique"], ans:"The lingering emotional impression after an experience",
     hint:"Great art leaves this resonance that continues long a... the e... ends."}
  ]
};
export default BATCH8_L1;
