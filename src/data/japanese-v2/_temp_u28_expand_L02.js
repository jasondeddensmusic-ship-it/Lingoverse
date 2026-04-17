// Unit 28 Expansion. Lesson 4: Literary Expressions
const LESSON_4 = {
  id:"jav2_u28l4", title:"ぶんがくてきひょうげん", icon:"📕", xp:15, board:true,
  steps:[
    {type:"intro", title:"Literary Expressions",
     desc:"Japanese literature uses expressions and patterns that differ from both everyday speech and academic writing. Learn the classical-influenced literary forms, poetic vocabulary, and narrative techniques that enrich reading comprehension at the B2 level.",
     goals:["Recognize literary forms like ごとく, いわば, あたかも","Understand narrative voice and literary vocabulary","Distinguish literary register from academic and spoken"]},

    {type:"teach", trg:"ごとく", src:"like / as if (literary)", pos:"part", gender:null,
     note:"Classical form of よう (like). Noun + のごとく or Verb + がごとく.\nHighly literary. Rarely used in conversation.",
     example:"A: かぜのごとくすぎさっていった。\nB: とてもはやかったのですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: It passed by like the wind.\nB: It was very fast.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"ごとく comes from classical Japanese 如く (gotoku). While modern Japanese uses よう (it is like) or みたい (it looks like), literary texts preserve ごとく for elevated, poetic comparisons. You encounter it in novels, poetry, proverbs (光陰矢の如し, time flies like an arrow), and formal speeches seeking gravitas."},

    {type:"teach", trg:"いわば", src:"so to speak / as it were", pos:"adv", gender:null,
     note:"From 言わば (if one were to say). Introduces an analogy or metaphor.\nUsed in essays, speeches, and literary commentary.",
     example:"A: かれはいわばチームのたいこくちゅうです。\nB: そんなにだいじなひとなんですか？\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: He is, so to speak, the pillar of the team.\nB: Is he that important a person?\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"いわば literally means 'if one were to say it.' It introduces metaphors: the speaker acknowledges they are using figurative language. This self-aware style is very Japanese: flagging that you are being indirect. Similar expressions include いうなれば (if I may say so) and たとえていえば (to give an analogy)."},

    {type:"teach", trg:"あたかも", src:"as if / just like (literary)", pos:"adv", gender:null,
     note:"Kanji: 恰も. Literary adverb for vivid similes.\nあたかも〜ようだ / あたかも〜ごとく.",
     example:"A: あたかもゆめのようなけしきだった。\nB: ほんとうにうつくしかったのですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: It was a landscape as if from a dream.\nB: It must have been truly beautiful.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"あたかも heightens the vividness of a comparison. While よう by itself means 'like,' あたかも...ようだ means 'just exactly as if.' It appears in literary descriptions, travel writing, and poetic prose. The kanji 恰 (fitting/just right) suggests a perfect match between the comparison and reality."},

    {type:"mc", q:"ごとく is the literary equivalent of:", opts:["から (because)","ので (since)","よう or みたい (like/as if)","けど (but)"], ans:"よう or みたい (like/as if)",
     hint:"This classical form creates elevated comparisons in the same way よう does casually."},

    {type:"teach", trg:"えがく", src:"to depict / to portray / to draw", pos:"verb", gender:null,
     note:"Kanji: 描く. Also read かく (to draw physically).\nえがく is for literary/artistic depiction. じんぶつをえがく = to portray a character.",
     example:"A: このしょうせつはせんごのにほんをえがいている。\nB: どのようなじだいでしたか？\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: This novel depicts postwar Japan.\nB: What kind of era was it?\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"描く has two readings: かく (physically drawing a picture) and えがく (depicting through words or artistic vision). The literary えがく implies creative interpretation: the author chooses what to show and how. The phrase いきいきとえがく (to depict vividly) is a common literary compliment."},

    {type:"teach", trg:"たいこくちゅう", src:"pillar / mainstay / backbone", pos:"noun", gender:null,
     note:"Kanji: 大黒柱. Originally: the main pillar in a traditional Japanese house.\nFigurative: the person who supports everything.",
     example:"A: かのじょはかぞくのたいこくちゅうです。\nB: みんながたよりにしているのですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: She is the pillar of her family.\nB: Everyone relies on her.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"大黒柱 originally refers to the central structural pillar in a traditional Japanese house. The name combines 大黒 (Daikoku, the god of wealth and household) with 柱 (pillar). Metaphorically, the たいこくちゅう is the person who holds everything together. In older usage, it meant the father; modern usage applies it to anyone who is the backbone of a group."},

    {type:"fb", s:"あたかもゆめの{1}けしきだった。\n(It was a landscape as if from a dream.)", a:"ような", opts:["ような","ごとく","みたいな","らしい"], sSrc:"It was a landscape as if from a dream.",
     hint:"The comparison particle that naturally follows あたかも in a standard literary simile."},

    {type:"teach", trg:"せつない", src:"painfully tender / bittersweet / heartaching", pos:"adj", gender:null,
     note:"A uniquely Japanese emotional word. Combines sadness with beauty.\nせつないきもち = a bittersweet feeling.",
     example:"A: このうたはとてもせつないメロディーですね。\nB: きいていてなみだがでそうです。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: This song has a very bittersweet melody.\nB: It almost brings me to tears.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"せつない is considered one of the most untranslatable Japanese words. It describes the ache of longing, the beauty in sadness, the tightness in your chest when something is beautiful but painful. It applies to lost love, nostalgia, and fleeting beauty. The adjective captures the Japanese aesthetic of もののあわれ (the pathos of things)."},

    {type:"teach", trg:"もののあわれ", src:"the pathos of things / sensitivity to beauty's transience", pos:"noun", gender:null,
     note:"Core Japanese aesthetic concept. もの (things) + あわれ (pathos/sorrow).\nAppreciating the bittersweetness of impermanence.",
     example:"A: さくらはもののあわれをかんじさせますね。\nB: うつくしいからこそ、ちるのがかなしいです。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Cherry blossoms make you feel the pathos of things.\nB: Because they are beautiful, it is sad when they fall.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"もののあわれ was defined by Edo-period scholar Motoori Norinaga as the emotional core of Japanese literature. It is the catch in the breath when you see cherry blossoms, knowing they will fall. It permeates The Tale of Genji, haiku, and modern literature alike. This aesthetic values not happiness but the awareness that beauty is fleeting."},

    {type:"mc", q:"せつない describes:", opts:["Pure happiness","A bittersweet ache that mixes beauty and sadness","Intense anger","Calm indifference"], ans:"A bittersweet ache that mixes beauty and sadness",
     hint:"This uniquely Japanese emotion combines longing and tenderness with a touch of pain."},

    {type:"teach", trg:"はかない", src:"fleeting / transient / ephemeral", pos:"adj", gender:null,
     note:"Kanji: 儚い. Describes things that are brief and beautiful.\nはかないいのち = a fleeting life. はかないゆめ = an ephemeral dream.",
     example:"A: にんげんのいのちははかないものです。\nB: だからこそいちにちいちにちをたいせつにしましょう。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Human life is a fleeting thing.\nB: That is exactly why we should cherish each day.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"The kanji 儚 combines 人 (person) and 夢 (dream): a person's dream, inherently fragile. はかない is central to Japanese aesthetics. Cherry blossoms are loved because they are はかない. The warrior's honor was はかない. Even technology is はかない. This acceptance of impermanence connects to Buddhist concepts of 無常 (mujou, impermanence)."},

    {type:"teach", trg:"むじょう", src:"impermanence / transience", pos:"noun", gender:null,
     note:"Kanji: 無常. む (without) + じょう (constancy).\nBuddhist concept. Everything changes; nothing is permanent.",
     example:"A: へいけものがたりはむじょうをうたっています。\nB: 'いんのこえ、しょぎょうむじょうのひびきあり' ですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: The Tale of the Heike sings of impermanence.\nB: Yes, the famous opening about impermanence.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"無常 is a Buddhist philosophical concept meaning nothing stays the same. It became a defining aesthetic of Japanese literature. The Tale of the Heike opens with it. Yoshida Kenko's Tsurezuregusa explores it. Modern authors like Kawabata Yasunari embed it in their work. Understanding むじょう unlocks much of Japanese literary sensibility."},

    {type:"fb", s:"このしょうせつはせんごのにほんを{1}いる。\n(This novel depicts postwar Japan.)", a:"えがいて", opts:["えがいて","かいて","のべて","ろんじて"], sSrc:"This novel depicts postwar Japan.",
     hint:"The verb for artistic or literary portrayal, not physical drawing."},

    {type:"match", pairs:[{trg:"ごとく",src:"like (literary)"},{trg:"いわば",src:"so to speak"},{trg:"あたかも",src:"as if (literary)"},{trg:"えがく",src:"to depict"}]},

    {type:"fb", s:"さくらは{1}をかんじさせますね。\n(Cherry blossoms make you feel the pathos of things.)", a:"もののあわれ", opts:["もののあわれ","むじょう","せつない","はかない"], sSrc:"Cherry blossoms make you feel the pathos of things.",
     hint:"The classical aesthetic concept about sensitivity to beauty and transience."},

    {type:"match", pairs:[{trg:"せつない",src:"bittersweet/heartaching"},{trg:"はかない",src:"fleeting"},{trg:"むじょう",src:"impermanence"},{trg:"もののあわれ",src:"pathos of things"}]},
  ]
};
export default LESSON_4;
