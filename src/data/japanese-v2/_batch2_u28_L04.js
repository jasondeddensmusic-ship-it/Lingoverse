// Unit 28 Batch 2 Lesson 4: 文学的(ぶんがくてき)表現(ひょうげん) (Literary Expressions)
const BATCH2_L_4 = {
  id:"jav2_u28l_b2_4", title:"文学的(ぶんがくてき)表現(ひょうげん)", icon:"📜", xp:15, board:true,
  steps:[
    {type:"intro", title:"文学的(ぶんがくてき)表現(ひょうげん)",
     desc:"Literary Japanese uses distinctive vocabulary and patterns rarely found in daily conversation. Learn expressions for narration, description, and emotional nuance used in novels, essays, and formal writing. These terms elevate your reading comprehension and writing to B2 level.",
     goals:["Recognize literary vocabulary in texts","Use descriptive and narrative expressions","Understand classical-modern language bridges"]},

    {type:"teach", trg:"あたかも", src:"as if / as though / just like", pos:"adv", gender:null,
     note:"Literary comparison. More formal than まるで.\nあたかも夢(ゆめ)のよう = as if it were a dream.",
     example:"A: あたかも時間(じかん)が止(と)まったかのようだった。\nB: 美(うつく)しい表現(ひょうげん)ですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: It was as if time had stopped.\nB: That is a beautiful expression.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"あたかも is written 恰も in kanji but almost always appears in hiragana. It elevates a comparison from casual (まるで) to literary. In novels and essays, あたかも creates vivid imagery by drawing unexpected parallels. The pattern あたかも...かのよう (as if...were) is a hallmark of literary Japanese prose."},

    {type:"teach", trg:"自(おの)ずと", src:"naturally / spontaneously / of its own accord", pos:"adv", gender:null,
     note:"Something happens without deliberate effort.\n自(おの)ずと分(わ)かる = you will naturally come to understand.",
     example:"A: たくさん読(よ)めば、自(おの)ずと日本語(にほんご)の感覚(かんかく)が身(み)につきます。\nB: 継続(けいぞく)が大切(たいせつ)ですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: If you read a lot, a sense for Japanese will naturally develop.\nB: Continuity is important.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"自ずと uses the classical reading of 自 (self). It suggests organic, effortless emergence. In Japanese philosophy, 自(おの)ずと connects to the Zen concept of 自然(しぜん) (naturalness). The idea that understanding arrives 自(おの)ずと (naturally, without forcing) reflects a cultural preference for intuitive knowledge over forced learning."},

    {type:"teach", trg:"かつて", src:"once / formerly / at one time", pos:"adv", gender:null,
     note:"Written 嘗て. Literary past reference.\nかつてない = unprecedented / never before.",
     example:"A: ここにはかつて大(おお)きな森(もり)がありました。\nB: 今(いま)は町(まち)になってしまいましたね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: There was once a great forest here.\nB: Now it has become a town.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"かつて is a literary time marker that evokes a distant, often nostalgic past. Unlike まえ (before) or 以前(いぜん) (previously), かつて carries emotional weight. The phrase かつてない (never before/unprecedented) is powerful in news and literature: かつてない規模(きぼ)の (on an unprecedented scale). It signals something historically unique."},

    {type:"mc", q:"あたかも is used for:", opts:["Literary comparisons, more formal than まるで","Casual everyday comparisons","Making direct statements","Asking polite questions"], ans:"Literary comparisons, more formal than まるで",
     hint:"This adverb elevates similes to a l... register, creating vivid imagery in writing."},

    {type:"teach", trg:"密(ひそ)か", src:"secret / quiet / private / hidden", pos:"adj", gender:null,
     note:"密(ひそ)かに思(おも)う = to secretly think.\nLiterary and emotional nuance.",
     example:"A: 彼(かれ)は密(ひそ)かに彼女(かのじょ)を愛(あい)していた。\nB: 気持(きも)ちを伝(つた)える勇気(ゆうき)がなかったのですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: He secretly loved her.\nB: He did not have the courage to express his feelings.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"密か uses the kanji for 'secret/dense.' In literary Japanese, 密(ひそ)かに conveys hidden emotions, unspoken feelings, and private desires. It is a favorite word of novelists because it reveals inner life. The related verb 潜(ひそ)める (to conceal) appears in literary descriptions of suppressed emotions and hidden glances."},

    {type:"teach", trg:"抱(いだ)く", src:"to hold / to harbor / to embrace (feelings)", pos:"verb", gender:null,
     note:"夢(ゆめ)を抱(いだ)く = to hold a dream.\n疑問(ぎもん)を抱(いだ)く = to harbor a doubt. Literary verb.",
     example:"A: 彼(かれ)は新(あたら)しい未来(みらい)への希望(きぼう)を抱(いだ)いていた。\nB: その希望(きぼう)が彼(かれ)を動(うご)かしたのですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: He held hope for a new future.\nB: That hope is what moved him.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"抱く has two readings: いだく (literary, for emotions) and だく (physical embrace). 夢(ゆめ)を抱(いだ)く (to hold a dream) uses the literary reading. 疑問(ぎもん)を抱(いだ)く (to harbor doubt) is common in formal writing and news. This verb elevates emotional expression beyond the everyday もつ (to have), adding depth and weight to feelings."},

    {type:"teach", trg:"佇(たたず)む", src:"to stand still / to linger / to remain motionless", pos:"verb", gender:null,
     note:"Literary verb for standing in a scene.\n窓辺(まどべ)に佇(たたず)む = to stand at the window.",
     example:"A: 彼女(かのじょ)は公園(こうえん)のベンチのそばに佇(たたず)んでいた。\nB: 何(なに)を考(かんが)えていたのでしょう。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: She was standing quietly near a park bench.\nB: I wonder what she was thinking.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"佇む describes standing motionless, often contemplatively or melancholically. It is a deeply literary verb that paints a visual scene. Unlike ただ立(た)つ (just standing), 佇(たたず)む implies emotional depth. Novelists use it to place characters in moments of reflection, creating images that linger in the reader's mind."},

    {type:"fb", s:"ここにはかつて大(おお)きな{1}がありました。\n(There was once a great forest here.)", a:"森(もり)", opts:["森(もり)","町(まち)","海(うみ)","川(かわ)"], sSrc:"There was once a great forest here.",
     hint:"The noun for a dense area of trees, contrasted with the town that replaced it."},

    {type:"teach", trg:"儚(はかな)い", src:"fleeting / transient / ephemeral", pos:"adj", gender:null,
     note:"儚(はかな)い命(いのち) = a fleeting life.\nCentral aesthetic concept in Japanese literature.",
     example:"A: 桜(さくら)の美(うつく)しさは儚(はかな)いからこそ価値(かち)がある。\nB: 日本的(にほんてき)な美意識(びいしき)ですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: The beauty of cherry blossoms has value precisely because it is fleeting.\nB: That is a very Japanese aesthetic sense.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"儚い uses 亻(person) and 夢 (dream), suggesting 'dreamlike.' 儚(はかな)さ (transience) is central to Japanese aesthetics: the beauty of cherry blossoms, the melancholy of autumn, and the impermanence of all things. This concept connects to もののあわれ (the pathos of things), a literary sensibility that finds beauty in passing moments."},

    {type:"teach", trg:"綴(つづ)る", src:"to write / to compose / to spell out", pos:"verb", gender:null,
     note:"文章(ぶんしょう)を綴(つづ)る = to compose prose.\nLiterary word for the act of writing.",
     example:"A: 彼(かれ)は自分(じぶん)の経験(けいけん)を小説(しょうせつ)に綴(つづ)った。\nB: 実体験(じったいけん)に基(もと)づく作品(さくひん)ですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: He composed his experiences into a novel.\nB: It is a work based on real experience.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"綴る originally meant 'to bind together' (like binding pages). As a literary verb, it means to weave words into text. While 書(か)く (write) is neutral, 綴(つづ)る implies care and artistry. Bloggers and essayists often say 思(おも)いを綴(つづ)る (to compose one's thoughts), giving their writing a literary self-awareness."},

    {type:"teach", trg:"囁(ささや)く", src:"to whisper / to murmur", pos:"verb", gender:null,
     note:"耳元(みみもと)で囁(ささや)く = to whisper in someone's ear.\nDescriptive, sensory literary verb.",
     example:"A: 風(かぜ)が木(こ)の葉(は)の間(あいだ)を囁(ささや)くように吹(ふ)いていた。\nB: 自然(しぜん)を人格化(にんかくか)した美(うつく)しい表現(ひょうげん)です。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: The wind blew as if whispering through the leaves.\nB: That is a beautiful personification of nature.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"囁く is an onomatopoeia-derived verb that captures the soft, intimate sound of whispering. In literature, nature often 囁(ささや)く: wind whispers, streams whisper, and even silence can 囁(ささや)く. This personification (人格化(にんかくか)) is a hallmark of Japanese literary prose, blurring the line between the human and natural worlds."},

    {type:"mc", q:"儚(はかな)い describes something that is:", opts:["Permanent and lasting","Fleeting and transient","Strong and powerful","Ancient and historical"], ans:"Fleeting and transient",
     hint:"This aesthetic concept values the beauty found in things that do not last."},

    {type:"fb", s:"彼(かれ)は自分(じぶん)の経験(けいけん)を小説(しょうせつ)に{1}。\n(He composed his experiences into a novel.)", a:"綴(つづ)った", opts:["綴(つづ)った","書(か)いた","読(よ)んだ","話(はな)した"], sSrc:"He composed his experiences into a novel.",
     hint:"The literary verb for weaving words into text with care and artistry."},

    {type:"match", pairs:[{trg:"あたかも",src:"as if (literary)"},{trg:"自(おの)ずと",src:"naturally/spontaneously"},{trg:"かつて",src:"once/formerly"},{trg:"密(ひそ)か",src:"secret/hidden"}]},

    {type:"fb", s:"桜(さくら)の美(うつく)しさは{1}からこそ価値(かち)がある。\n(Cherry blossom beauty has value precisely because it is fleeting.)", a:"儚(はかな)い", opts:["儚(はかな)い","美(うつく)しい","明(あか)るい","長(なが)い"], sSrc:"Cherry blossom beauty has value precisely because it is fleeting.",
     hint:"The adjective meaning 'transient' or 'ephemeral,' central to Japanese aesthetics."},

    {type:"match", pairs:[{trg:"抱(いだ)く",src:"to harbor (feelings)"},{trg:"佇(たたず)む",src:"to stand motionless"},{trg:"綴(つづ)る",src:"to compose (literary)"},{trg:"囁(ささや)く",src:"to whisper"}]},

    {type:"mc", q:"佇(たたず)む in literature suggests:", opts:["Running quickly","Standing motionless in contemplation","Sitting casually","Walking briskly"], ans:"Standing motionless in contemplation",
     hint:"This literary verb implies emotional depth and reflection, not just physical stillness."},
  ]
};
export default BATCH2_L_4;
