// Batch 11 – Unit 28 (B2.2 Written vs Spoken): Register & Style Vocabulary
const BATCH11_L1 = {
  id:"jav2_u28l_b11_1", title:"文体(ぶんたい)の違(ちが)い", icon:"📝", xp:15, board:true,
  steps:[
    {type:"intro", title:"文体(ぶんたい)の違(ちが)い",
     desc:"Learn vocabulary for discussing differences between written and spoken Japanese, formal and informal registers, and stylistic choices in communication.",
     goals:["Understand register-specific vocabulary","Use formal written expressions","Distinguish between spoken and written style markers"]},

    {type:"teach", trg:"である", src:"is / to be (written style)", pos:"verb", gender:null,
     note:"Written equivalent of です. Used in essays and academic writing.\nXである = X is (formal/written).",
     example:"A: 日本(にほん)は島国(しまぐに)である。\nB: これは論文(ろんぶん)の書(か)き方(かた)ですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Japan is an island nation. (written style)\nB: This is essay writing style.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"である is the backbone of Japanese academic writing. It replaces です/だ with a more authoritative tone. 論文(ろんぶん) (academic papers) almost exclusively use である調(ちょう) (である style). Students learn to switch between です/ます (polite) and である (written) styles, a skill tested on JLPT N2."},

    {type:"teach", trg:"くだけた", src:"casual / informal (style)", pos:"adj", gender:null,
     note:"くだけた表現(ひょうげん) = casual expression.\nOpposite: かたい (stiff/formal).",
     example:"A: このメールは少(すこ)しくだけすぎていませんか？\nB: 社長(しゃちょう)あてなので、もっと丁寧(ていねい)にしましょう。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Isn't this email a bit too casual?\nB: Since it's addressed to the president, let's make it more polite.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"Japanese communication constantly navigates くだけた (casual) vs かたい (formal). The same message has dramatically different forms: うん (yeah), はい (yes), はい、かしこまりました (yes, certainly). Choosing the wrong register causes social discomfort. This register awareness is called 敬語力(けいごりょく) (keigo competence)."},

    {type:"teach", trg:"文末(ぶんまつ)", src:"sentence ending", pos:"noun", gender:null,
     note:"文末表現(ぶんまつひょうげん) = sentence-ending expressions.\nKey indicator of formality level.",
     example:"A: 文末(ぶんまつ)を変(か)えるだけで、印象(いんしょう)が変(か)わります。\nB: 確(たし)かに、です/ます とだ/である はだいぶ違(ちが)いますね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Just changing the sentence ending changes the impression.\nB: Indeed, です/ます and だ/である are quite different.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"Japanese 文末(ぶんまつ) is where register lives. The same content changes tone entirely: 食(た)べる (casual), 食(た)べます (polite), 召(め)し上(あ)がる (honorific), いただく (humble). Sentence endings also convey gender and personality: わ, よ, ぞ, ぜ each carry distinct nuances."},

    {type:"teach", trg:"書(か)き言葉(ことば)", src:"written language", pos:"noun", gender:null,
     note:"Opposite: 話(はな)し言葉(ことば) (spoken language).\n書(か)き言葉(ことば)的(てき)な表現(ひょうげん) = written-style expression.",
     example:"A: これは書(か)き言葉(ことば)なので、話(はな)し言葉(ことば)に変(か)えましょう。\nB: どの部分(ぶぶん)を変(か)えればいいですか？\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: This is written language, so let's change it to spoken style.\nB: Which parts should I change?\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"The gap between 書(か)き言葉(ことば) and 話(はな)し言葉(ことば) in Japanese is enormous compared to English. Written Japanese uses kanji-heavy compounds (従(したが)って = therefore), while spoken uses simpler forms (だから = so). This divide means Japanese students must learn essentially two vocabularies. JLPT tests both extensively."},

    {type:"teach", trg:"話(はな)し言葉(ことば)", src:"spoken language / colloquial", pos:"noun", gender:null,
     note:"Everyday conversational Japanese.\n話(はな)し言葉(ことば)的(てき)な表現(ひょうげん) = colloquial expression.",
     example:"A: 「すげー」は話(はな)し言葉(ことば)です。\nB: 書(か)き言葉(ことば)では「すごい」ですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: 'Sugee' is spoken language.\nB: In written language it is 'sugoi.'\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"話(はな)し言葉(ことば) includes contractions (食(た)べている > 食(た)べてる), slang (すげー for すごい), and filler words (えーと, あのー). Young people's 話(はな)し言葉(ことば) evolves rapidly: マジ (seriously?), やばい (awesome/terrible), and エモい (emotional/moving) are recent additions that older speakers may not use."},

    {type:"teach", trg:"形式(けいしき)", src:"form / format / formality", pos:"noun", gender:null,
     note:"形式的(けいしきてき) = formal/ceremonial.\n形式(けいしき)ばる = to be formal/stiff.",
     example:"A: この書類(しょるい)の形式(けいしき)を教(おし)えてください。\nB: A4サイズで、左(ひだり)そろえです。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Please tell me the format of this document.\nB: A4 size, left-aligned.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"形式(けいしき) matters enormously in Japanese culture. Documents have strict formats. Speeches follow set 形式(けいしき). Even informal gatherings have loose 形式(けいしき) (opening greetings, closing words). The phrase 形式的(けいしきてき)な (formal/ceremonial) describes events that prioritize protocol over substance."},

    {type:"teach", trg:"表現(ひょうげん)", src:"expression", pos:"noun", gender:null,
     note:"表現(ひょうげん)する = to express.\n表現力(ひょうげんりょく) = expressive ability.",
     example:"A: 日本語(にほんご)の表現(ひょうげん)はとても豊(ゆた)かです。\nB: 擬音語(ぎおんご)だけでも数百(すうひゃく)ありますね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Japanese expressions are very rich.\nB: There are hundreds of onomatopoeia alone.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"表現(ひょうげん) is a fundamental concept in Japanese language education. 表現力(ひょうげんりょく) (expressive ability) is a key metric in school assessments. Japanese prides itself on nuanced 表現(ひょうげん): the difference between さむい (cold), 冷(ひ)える (get chilled), and 凍(こご)える (freeze) captures precisely different experiences of cold."},

    {type:"teach", trg:"ニュアンス", src:"nuance", pos:"noun", gender:null,
     note:"Loanword from French/English.\nニュアンスが違(ちが)う = the nuance is different.",
     example:"A: 「好(す)き」と「愛(あい)してる」はニュアンスが違(ちが)います。\nB: 「愛(あい)してる」の方(ほう)が強(つよ)いですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: 'Suki' and 'Aishiteru' have different nuances.\nB: 'Aishiteru' is stronger.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"Japanese speakers are extremely sensitive to ニュアンス. The difference between 好(す)き (like/love, mild) and 愛(あい)してる (I love you, intense) illustrates this. Japanese people rarely say 愛(あい)してる, reserving it for the deepest emotions. 好(す)き covers most romantic situations. This ニュアンス gap shocks English speakers."},

    {type:"teach", trg:"的確(てきかく)", src:"accurate / precise", pos:"adj", gender:null,
     note:"的確(てきかく)な表現(ひょうげん) = precise expression.\n的確(てきかく)に伝(つた)える = convey accurately.",
     example:"A: もっと的確(てきかく)に説明(せつめい)してください。\nB: すみません、もう一度(いちど)説明(せつめい)します。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Please explain more precisely.\nB: Sorry, I will explain again.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"的確(てきかく) is valued highly in Japanese communication, especially in business. 的確(てきかく)な指示(しじ) (precise instructions) prevent misunderstandings. The emphasis on 的確(てきかく) reflects a culture where ambiguity in instructions can cause serious problems in manufacturing and service delivery."},

    {type:"teach", trg:"曖昧(あいまい)", src:"ambiguous / vague", pos:"adj", gender:null,
     note:"曖昧(あいまい)な返事(へんじ) = vague reply.\n日本人(にほんじん)は曖昧(あいまい)な表現(ひょうげん)が多(おお)い.",
     example:"A: はっきり答(こた)えてください。曖昧(あいまい)な返事(へんじ)は困(こま)ります。\nB: すみません、はっきり言(い)います。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Please answer clearly. Vague answers are troublesome.\nB: Sorry, I will speak clearly.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"曖昧(あいまい) is famously central to Japanese communication. Japanese culture values 曖昧(あいまい)さ (ambiguity) as social lubrication: leaving room for interpretation avoids direct confrontation. 研究者(けんきゅうしゃ) are divided on whether Japanese 曖昧(あいまい) is a virtue (harmony-preserving) or a problem (miscommunication-causing)."},

    {type:"teach", trg:"分(わ)かりやすい", src:"easy to understand / clear", pos:"adj", gender:null,
     note:"Compound: 分(わ)かる + やすい.\n分(わ)かりやすく説明(せつめい)する = explain in an easy-to-understand way.",
     example:"A: この説明(せつめい)はとても分(わ)かりやすいです。\nB: ありがとうございます。簡単(かんたん)な言葉(ことば)で書(か)きました。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: This explanation is very easy to understand.\nB: Thank you. I wrote it in simple words.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"The やすい suffix (easy to do) is incredibly productive: 読(よ)みやすい (easy to read), 使(つか)いやすい (easy to use), 住(す)みやすい (easy to live in). Japanese UX design highly values 分(わ)かりやすさ (understandability). Signs, instructions, and public announcements prioritize 分(わ)かりやすい communication over sophisticated language."},

    // Quiz steps
    {type:"mc", q:"「である」はいつ使(つか)いますか？",
     opts:["In essays and academic writing","In casual conversation","In text messages","In children's books"],
     ans:"In essays and academic writing",
     hint:"This sentence-ending style replaces です with a more authoritative, impersonal tone appropriate for formal w...."},

    {type:"fb", s:"日本語(にほんご)の{1}はとても豊(ゆた)かです。",
     a:["表現(ひょうげん)"],
     opts:["表現(ひょうげん)","文末(ぶんまつ)","形式(けいしき)","ニュアンス"],
     hint:"The speaker is commenting on how rich and varied Japanese words and phrases are. This means 'expressions.'",
     sSrc:"Japanese expressions are very rich."},

    {type:"match", pairs:[
      {trg:"書(か)き言葉(ことば)", src:"written language"},
      {trg:"話(はな)し言葉(ことば)", src:"spoken language"},
      {trg:"的確(てきかく)", src:"accurate / precise"},
      {trg:"曖昧(あいまい)", src:"ambiguous / vague"}
    ]},

    {type:"mc", q:"日本語(にほんご)の「曖昧(あいまい)さ」はどうとらえられていますか？",
     opts:["Both as harmony-preserving virtue and miscommunication risk","Only negative","Only positive","Not discussed at all"],
     ans:"Both as harmony-preserving virtue and miscommunication risk",
     hint:"Researchers debate whether Japanese ambiguity is good (avoiding confrontation) or bad (causing misunderstandings)."},

    {type:"fb", s:"「好(す)き」と「愛(あい)してる」は{1}が違(ちが)います。",
     a:["ニュアンス"],
     opts:["ニュアンス","形式(けいしき)","文末(ぶんまつ)","表現(ひょうげん)"],
     hint:"These two love expressions differ in subtle emotional intensity. This loanword describes such subtle differences in meaning.",
     sSrc:"'Suki' and 'Aishiteru' have different nuances."},

    {type:"mc", q:"「やすい」の接尾辞(せつびじ)はどんな意味(いみ)ですか？",
     opts:["Easy to do","Cheap","Fast","Important"],
     ans:"Easy to do",
     hint:"When attached to verb stems, this suffix creates adjectives describing how effortlessly an action can be done."}
  ]
};
export default BATCH11_L1;
