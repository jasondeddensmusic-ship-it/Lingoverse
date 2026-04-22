// Unit 33 Batch 2 Lesson 2: 創作(そうさく)と批評(ひひょう) (Creative Writing & Criticism)
const BATCH2_L_2 = {
  id:"jav2_u33l_b2_2", title:"創作(そうさく)と批評(ひひょう)", icon:"🖊️", xp:15, board:true,
  steps:[
    {type:"intro", title:"創作(そうさく)と批評(ひひょう)",
     desc:"Literary creation and criticism require specialized vocabulary for genres, techniques, and evaluation. These terms let you discuss books, analyze texts, and engage with Japanese literary culture at a sophisticated level.",
     goals:["Use creative writing vocabulary","Discuss literary genres and techniques","Evaluate works using critical vocabulary"]},

    {type:"teach", trg:"創作(そうさく)", src:"creation / creative work / composition", pos:"noun", gender:null,
     note:"Kanji: 創作. 創作(そうさく)する = to create.\n創作(そうさく)活動(かつどう) = creative activities.",
     example:"A: 創作(そうさく)にはインスピレーションと技術(ぎじゅつ)の両方(りょうほう)が必要(ひつよう)です。\nB: 毎日書(まいにちか)く習慣(しゅうかん)が大事(だいじ)だと作家(さっか)はいいますね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Creative work requires both inspiration and technique.\nB: Authors say the habit of writing daily is important.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"創作 uses 創 (create/originate) and 作 (make/produce). Japanese 創作(そうさく) culture extends beyond literature to manga, anime, light novels, and 同人誌(どうじんし) (fan-created works). The Comiket (コミケ) convention is the world's largest 創作(そうさく) marketplace, where amateur creators sell original and fan-made works."},

    {type:"teach", trg:"推理小説(すいりしょうせつ)", src:"mystery novel / detective fiction", pos:"noun", gender:null,
     note:"Kanji: 推理小説. 推理(すいり) = deduction/reasoning.\nAlso: ミステリー (loanword).",
     example:"A: 日本(にほん)の推理小説(すいりしょうせつ)は独自(どくじ)の発展(はってん)を遂(と)げました。\nB: 本格(ほんかく)ミステリーは特(とく)に有名(ゆうめい)ですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Japanese mystery novels achieved unique development.\nB: Orthodox mysteries are especially famous.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"推理小説 uses 推理(すいり) (reasoning/deduction) and 小説(しょうせつ) (novel). Japan has a rich 推理小説(すいりしょうせつ) tradition. Edogawa Ranpo (whose pen name is a Japanese rendering of Edgar Allan Poe) pioneered the genre. The 本格(ほんかく)ミステリー (orthodox mystery) subgenre, emphasizing fair-play puzzle solving, thrives in Japan with authors like Shimada Soji and Ayatsuji Yukito."},

    {type:"teach", trg:"ライトノベル", src:"light novel", pos:"noun", gender:null,
     note:"A Japanese literary genre: short, illustration-heavy fiction.\nAbbreviated ラノベ. Often adapted into anime.",
     example:"A: ライトノベルからアニメ化(か)される作品(さくひん)が増(ふ)えています。\nB: 若(わか)い世代(せだい)の人気(にんき)が高(たか)いですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: More light novels are being adapted into anime.\nB: They are very popular with younger generations.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"ライトノベル is a wasei-eigo (Japanese-coined English) term. These short novels feature anime-style illustrations and target young adult readers. Major ライトノベル publishers include Kadokawa and ASCII Media Works. Successful series like ソードアートオンライン and このすば sell millions of copies and drive the anime industry. ラノベ is a significant cultural export."},

    {type:"mc", q:"本格(ほんかく)ミステリー emphasizes:", opts:["Fair-play puzzle solving with clues available to the reader","Horror and supernatural elements","Romantic subplots","Historical accuracy"], ans:"Fair-play puzzle solving with clues available to the reader",
     hint:"This subgenre focuses on logical deduction, giving readers all the c... needed to solve the mystery."},

    {type:"teach", trg:"叙情(じょじょう)", src:"mood / atmosphere / overtone (literary)", pos:"noun", gender:null,
     note:"Kanji: 叙情. 叙情的(じょじょうてき) = lyrical.\n作品(さくひん)の叙情(じょじょう) = the lyricism of a work.",
     example:"A: この詩(し)の叙情性(じょじょうせい)が素晴(すば)らしいです。\nB: 読(よ)む人(ひと)の心(こころ)に深(ふか)く響(ひび)きますね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: The lyricism of this poem is wonderful.\nB: It resonates deeply in the reader's heart.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"叙情 uses 叙 (narrate/describe) and 情 (emotion/feeling). 叙情的(じょじょうてき) (lyrical) describes works that evoke deep emotional resonance. Japanese literature is often praised for its 叙情性(じょじょうせい), particularly poetry and nature writing. The concept connects to 物(もの)の哀(あわ)れ: literature that makes you feel the beauty and sadness of existence."},

    {type:"teach", trg:"反転(はんてん)", src:"plot twist / reversal / turning point", pos:"noun", gender:null,
     note:"Kanji: 反転. Also: どんでん返(がえ)し (dramatic reversal).\nストーリーの反転(はんてん) = story reversal.",
     example:"A: 最後(さいご)の反転(はんてん)には驚(おどろ)きました。\nB: 前(まえ)の伏線(ふくせん)が完璧(かんぺき)に回収(かいしゅう)されましたね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: I was surprised by the final twist.\nB: All the foreshadowing was perfectly resolved.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"反転 uses 反 (reverse) and 転 (turn/roll). In Japanese narrative criticism, 反転(はんてん) and どんでん返(がえ)し (dramatic reversal) are highly valued. Manga and anime are famous for unexpected 反転(はんてん) that recontextualize everything that came before. The 起承転結(きしょうてんけつ) (4-part structure) specifically includes 転(てん) (twist) as its third element."},

    {type:"teach", trg:"文体(ぶんたい)", src:"writing style / literary style", pos:"noun", gender:null,
     note:"Kanji: 文体. 独特(どくとく)の文体(ぶんたい) = distinctive writing style.\n文体論(ぶんたいろん) = stylistics.",
     example:"A: この作家(さっか)の文体(ぶんたい)はとても独特(どくとく)です。\nB: 短(みじか)い文(ぶん)でリズムを作(つく)っていますね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: This author's writing style is very distinctive.\nB: They create rhythm with short sentences.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"文体 uses 文 (writing) and 体 (body/form). Each great author has a recognizable 文体(ぶんたい). Murakami Haruki's cool, detached prose contrasts with Mishima Yukio's ornate, classical style. In Japanese literary criticism, 文体(ぶんたい)分析(ぶんせき) (style analysis) examines sentence length, vocabulary choice, rhythm, and narrative voice to understand an author's artistic identity."},

    {type:"fb", s:"最後(さいご)の{1}には驚(おどろ)きました。\n(I was surprised by the final twist.)", a:"反転(はんてん)", opts:["反転(はんてん)","展開(てんかい)","主題(しゅだい)","文体(ぶんたい)"], sSrc:"I was surprised by the final twist.",
     hint:"The noun for a reversal or unexpected turn in a story's plot."},

    {type:"teach", trg:"解釈(かいしゃく)", src:"interpretation / reading (of a text)", pos:"noun", gender:null,
     note:"Kanji: 解釈. 解釈(かいしゃく)する = to interpret.\n解釈(かいしゃく)の違(ちが)い = difference in interpretation.",
     example:"A: この詩(し)にはさまざまな解釈(かいしゃく)が可能(かのう)です。\nB: 読者(どくしゃ)一人(ひとり)ひとりの解釈(かいしゃく)が許(ゆる)されるのが文学(ぶんがく)ですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Various interpretations of this poem are possible.\nB: Literature is where each reader's interpretation is valid.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"解釈 uses 解 (untie/solve) and 釈 (explain/interpret). In Japanese literary education, students are encouraged to develop their own 解釈(かいしゃく) while grounding it in textual evidence. The phrase 正解(せいかい)はない (there is no correct answer) is common in literature classes, contrasting with the more answer-driven approach of other subjects."},

    {type:"teach", trg:"影響力(えいきょうりょく)", src:"influence / impact (cultural)", pos:"noun", gender:null,
     note:"Kanji: 影響力. 影響力(えいきょうりょく)のある作家(さっか) = an influential author.\n文化的(ぶんかてき)影響力(えいきょうりょく) = cultural influence.",
     example:"A: 村上(むらかみ)春樹(はるき)の影響力(えいきょうりょく)は日本(にほん)にとどまりません。\nB: 世界(せかい)の若(わか)い作家(さっか)に影響(えいきょう)を与(あた)えていますね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Murakami Haruki's influence is not limited to Japan.\nB: He influences young authors around the world.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"影響力 adds 力(りょく) (power) to 影響(えいきょう) (influence). Cultural 影響力(えいきょうりょく) is one of Japan's greatest strengths. Through manga, anime, literature, and film, Japanese creators shape global pop culture. The concept of ソフトパワー (soft power) recognizes that cultural 影響力(えいきょうりょく) can be as significant as economic or military power in international relations."},

    {type:"mc", q:"解釈(かいしゃく) in literary study means:", opts:["Translation from one language to another","A reader's understanding and interpretation of a text","The author's biography","The publishing history of a work"], ans:"A reader's understanding and interpretation of a text",
     hint:"This term describes how someone 'unties' or unpacks the meaning of a literary work."},

    {type:"fb", s:"この作家(さっか)の文体(ぶんたい)はとても{1}です。\n(This author's writing style is very distinctive.)", a:"独特(どくとく)", opts:["独特(どくとく)","普通(ふつう)","簡単(かんたん)","古(ふる)い"], sSrc:"This author's writing style is very distinctive.",
     hint:"The adjective meaning 'unique' or 'distinctive,' describing something unlike anything else."},

    {type:"match", pairs:[{trg:"創作(そうさく)",src:"creative work"},{trg:"推理小説(すいりしょうせつ)",src:"mystery novel"},{trg:"ライトノベル",src:"light novel"},{trg:"叙情(じょじょう)",src:"lyricism"}]},

    {type:"fb", s:"この詩(し)にはさまざまな{1}が可能(かのう)です。\n(Various interpretations of this poem are possible.)", a:"解釈(かいしゃく)", opts:["解釈(かいしゃく)","批評(ひひょう)","創作(そうさく)","文体(ぶんたい)"], sSrc:"Various interpretations of this poem are possible.",
     hint:"The noun for how a reader understands and unpacks the meaning of a text."},

    {type:"match", pairs:[{trg:"反転(はんてん)",src:"plot twist"},{trg:"文体(ぶんたい)",src:"writing style"},{trg:"解釈(かいしゃく)",src:"interpretation"},{trg:"影響力(えいきょうりょく)",src:"influence"}]},

    {type:"mc", q:"ライトノベル is important to Japanese culture because:", opts:["It replaced all other novel forms","It is the oldest literary form","It drives the anime industry and young adult reading","It is only read by academics"], ans:"It drives the anime industry and young adult reading",
     hint:"These illustrated novels are hugely popular with y... readers and are frequently adapted into a...."},
  ]
};
export default BATCH2_L_2;
