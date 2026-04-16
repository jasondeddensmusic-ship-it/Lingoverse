// Unit 33 Batch 2 Lesson 2: そうさくとひひょう (Creative Writing & Criticism)
const BATCH2_L_2 = {
  id:"jav2_u33l_b2_2", title:"そうさくとひひょう", icon:"🖊️", xp:15, board:true,
  steps:[
    {type:"intro", title:"そうさくとひひょう",
     desc:"Literary creation and criticism require specialized vocabulary for genres, techniques, and evaluation. These terms let you discuss books, analyze texts, and engage with Japanese literary culture at a sophisticated level.",
     goals:["Use creative writing vocabulary","Discuss literary genres and techniques","Evaluate works using critical vocabulary"]},

    {type:"teach", trg:"そうさく", src:"creation / creative work / composition", pos:"noun", gender:null,
     note:"Kanji: 創作. そうさくする = to create.\nそうさくかつどう = creative activities.",
     example:"A: そうさくにはインスピレーションとぎじゅつのりょうほうがひつようです。\nB: まいにちかくしゅうかんがだいじだとさっかはいいますね。",
     exampleSrc:"A: Creative work requires both inspiration and technique.\nB: Authors say the habit of writing daily is important.",
     funFact:"創作 uses 創 (create/originate) and 作 (make/produce). Japanese そうさく culture extends beyond literature to manga, anime, light novels, and doujinshi (同人誌, fan-created works). The Comiket (コミケ) convention is the world's largest そうさく marketplace, where amateur creators sell original and fan-made works."},

    {type:"teach", trg:"すいりしょうせつ", src:"mystery novel / detective fiction", pos:"noun", gender:null,
     note:"Kanji: 推理小説. すいり = deduction/reasoning.\nAlso: ミステリー (loanword).",
     example:"A: にほんのすいりしょうせつはどくとくのはってんをとげました。\nB: ほんかくミステリーはとくにゆうめいですね。",
     exampleSrc:"A: Japanese mystery novels achieved unique development.\nB: Orthodox mysteries are especially famous.",
     funFact:"推理小説 uses 推理 (reasoning/deduction) and 小説 (novel). Japan has a rich すいりしょうせつ tradition. Edogawa Ranpo (whose pen name is a Japanese rendering of Edgar Allan Poe) pioneered the genre. The ほんかくミステリー (orthodox mystery) subgenre, emphasizing fair-play puzzle solving, thrives in Japan with authors like Shimada Soji and Ayatsuji Yukito."},

    {type:"teach", trg:"ライトノベル", src:"light novel", pos:"noun", gender:null,
     note:"A Japanese literary genre: short, illustration-heavy fiction.\nAbbreviated ラノベ. Often adapted into anime.",
     example:"A: ライトノベルからアニメかされるさくひんがふえています。\nB: わかいせだいのにんきがたかいですね。",
     exampleSrc:"A: More light novels are being adapted into anime.\nB: They are very popular with younger generations.",
     funFact:"ライトノベル is a wasei-eigo (Japanese-coined English) term. These short novels feature anime-style illustrations and target young adult readers. Major ライトノベル publishers include Kadokawa and ASCII Media Works. Successful series like ソードアートオンライン and このすば sell millions of copies and drive the anime industry. ラノベ is a significant cultural export."},

    {type:"mc", q:"ほんかくミステリー emphasizes:", opts:["Fair-play puzzle solving with clues available to the reader","Horror and supernatural elements","Romantic subplots","Historical accuracy"], ans:"Fair-play puzzle solving with clues available to the reader",
     hint:"This subgenre focuses on logical deduction, giving readers all the clues needed to solve the mystery."},

    {type:"teach", trg:"じょそう", src:"mood / atmosphere / overtone (literary)", pos:"noun", gender:null,
     note:"Kanji: 叙情. じょじょうてき = lyrical.\nさくひんのじょじょう = the lyricism of a work.",
     example:"A: このしのじょじょうせいがすばらしいです。\nB: よむひとのこころにふかくひびきますね。",
     exampleSrc:"A: The lyricism of this poem is wonderful.\nB: It resonates deeply in the reader's heart.",
     funFact:"叙情 uses 叙 (narrate/describe) and 情 (emotion/feeling). じょじょうてき (lyrical) describes works that evoke deep emotional resonance. Japanese literature is often praised for its じょじょうせい, particularly poetry and nature writing. The concept connects to もののあわれ: literature that makes you feel the beauty and sadness of existence."},

    {type:"teach", trg:"はんてん", src:"plot twist / reversal / turning point", pos:"noun", gender:null,
     note:"Kanji: 反転. Also: どんでんがえし (dramatic reversal).\nストーリーのはんてん = story reversal.",
     example:"A: さいごのはんてんにはおどろきました。\nB: ぜんくふくせんがかんぺきにかいしゅうされましたね。",
     exampleSrc:"A: I was surprised by the final twist.\nB: All the foreshadowing was perfectly resolved.",
     funFact:"反転 uses 反 (reverse) and 転 (turn/roll). In Japanese narrative criticism, はんてん and どんでんがえし (dramatic reversal) are highly valued. Manga and anime are famous for unexpected はんてん that recontextualize everything that came before. The きしょうてんけつ (4-part structure) specifically includes 転 (twist) as its third element."},

    {type:"teach", trg:"ぶんたい", src:"writing style / literary style", pos:"noun", gender:null,
     note:"Kanji: 文体. どくとくのぶんたい = distinctive writing style.\nぶんたいろん = stylistics.",
     example:"A: このさっかのぶんたいはとてもどくとくです。\nB: みじかいぶんでリズムをつくっていますね。",
     exampleSrc:"A: This author's writing style is very distinctive.\nB: They create rhythm with short sentences.",
     funFact:"文体 uses 文 (writing) and 体 (body/form). Each great author has a recognizable ぶんたい. Murakami Haruki's cool, detached prose contrasts with Mishima Yukio's ornate, classical style. In Japanese literary criticism, ぶんたいぶんせき (style analysis) examines sentence length, vocabulary choice, rhythm, and narrative voice to understand an author's artistic identity."},

    {type:"fb", s:"さいごの{1}にはおどろきました。\n(I was surprised by the final twist.)", a:"はんてん", opts:["はんてん","てんかい","しゅだい","ぶんたい"], sSrc:"I was surprised by the final twist.",
     hint:"The noun for a reversal or unexpected turn in a story's plot."},

    {type:"teach", trg:"かいしゃく", src:"interpretation / reading (of a text)", pos:"noun", gender:null,
     note:"Kanji: 解釈. かいしゃくする = to interpret.\nかいしゃくのちがい = difference in interpretation.",
     example:"A: このしにはさまざまなかいしゃくがかのうです。\nB: どくしゃひとりひとりのかいしゃくがゆるされるのがぶんがくですね。",
     exampleSrc:"A: Various interpretations of this poem are possible.\nB: Literature is where each reader's interpretation is valid.",
     funFact:"解釈 uses 解 (untie/solve) and 釈 (explain/interpret). In Japanese literary education, students are encouraged to develop their own かいしゃく while grounding it in textual evidence. The phrase せいかいはない (there is no correct answer) is common in literature classes, contrasting with the more answer-driven approach of other subjects."},

    {type:"teach", trg:"えいきょうりょく", src:"influence / impact (cultural)", pos:"noun", gender:null,
     note:"Kanji: 影響力. えいきょうりょくのあるさっか = an influential author.\nぶんかてきえいきょうりょく = cultural influence.",
     example:"A: むらかみはるきのえいきょうりょくはにほんにとどまりません。\nB: せかいのわかいさっかにえいきょうをあたえていますね。",
     exampleSrc:"A: Murakami Haruki's influence is not limited to Japan.\nB: He influences young authors around the world.",
     funFact:"影響力 adds 力 (power) to えいきょう (influence). Cultural えいきょうりょく is one of Japan's greatest strengths. Through manga, anime, literature, and film, Japanese creators shape global pop culture. The concept of ソフトパワー (soft power) recognizes that cultural えいきょうりょく can be as significant as economic or military power in international relations."},

    {type:"mc", q:"かいしゃく in literary study means:", opts:["Translation from one language to another","A reader's understanding and interpretation of a text","The author's biography","The publishing history of a work"], ans:"A reader's understanding and interpretation of a text",
     hint:"This term describes how someone 'unties' or unpacks the meaning of a literary work."},

    {type:"fb", s:"このさっかのぶんたいはとても{1}です。\n(This author's writing style is very distinctive.)", a:"どくとく", opts:["どくとく","ふつう","かんたん","ふるい"], sSrc:"This author's writing style is very distinctive.",
     hint:"The adjective meaning 'unique' or 'distinctive,' describing something unlike anything else."},

    {type:"match", pairs:[{trg:"そうさく",src:"creative work"},{trg:"すいりしょうせつ",src:"mystery novel"},{trg:"ライトノベル",src:"light novel"},{trg:"じょじょう",src:"lyricism"}]},

    {type:"fb", s:"このしにはさまざまな{1}がかのうです。\n(Various interpretations of this poem are possible.)", a:"かいしゃく", opts:["かいしゃく","ひひょう","そうさく","ぶんたい"], sSrc:"Various interpretations of this poem are possible.",
     hint:"The noun for how a reader understands and unpacks the meaning of a text."},

    {type:"match", pairs:[{trg:"はんてん",src:"plot twist"},{trg:"ぶんたい",src:"writing style"},{trg:"かいしゃく",src:"interpretation"},{trg:"えいきょうりょく",src:"influence"}]},

    {type:"mc", q:"ライトノベル is important to Japanese culture because:", opts:["It is the oldest literary form","It drives the anime industry and young adult reading","It is only read by academics","It replaced all other novel forms"], ans:"It drives the anime industry and young adult reading",
     hint:"These illustrated novels are hugely popular with young readers and are frequently adapted into anime."},
  ]
};
export default BATCH2_L_2;
