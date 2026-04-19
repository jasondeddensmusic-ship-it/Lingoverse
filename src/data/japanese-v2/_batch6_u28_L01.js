// Batch 6 – Unit 28 (B2.2 Written vs Spoken): Proverbs & Idiomatic Expressions
const BATCH6_L1 = {
  id:"jav2_u28l_b6_1", title:"ことわざと慣用句(かんようく)", icon:"📖", xp:15, board:true,
  steps:[
    {type:"intro", title:"ことわざと慣用句(かんようく)",
     desc:"Learn classic Japanese proverbs and idiomatic expressions. These set phrases appear in daily conversation, writing, and JLPT tests. They reveal deep cultural values and wisdom.",
     goals:["Understand and use common ことわざ (proverbs)","Learn かんようく (idioms) with body part words","Recognize these expressions in reading and conversation"]},

    {type:"teach", trg:"ことわざ", src:"proverb / saying", pos:"noun", gender:null,
     note:"日本(にほん)のことわざ = Japanese proverbs.\nことわざにあるように = as the proverb says.",
     example:"A: いいことわざを知(し)っていますか？\nB: 猿(さる)も木(き)から落(お)ちる。どんな名人(めいじん)でも失敗(しっぱい)する、というものです。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Do you know any good proverbs?\nB: 'Even monkeys fall from trees.' It means even experts make mistakes.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"Japanese ことわざ (proverbs) often use nature imagery: animals, seasons, and landscapes. Many originated in China and adapted to Japanese culture. Others are uniquely Japanese. Knowing ことわざ is considered a sign of education and wisdom. JLPT N2 and N1 tests regularly include them."},

    {type:"teach", trg:"石(いし)の上(うえ)にも三年(さんねん)", src:"patience pays off (sit on a stone for 3 years)", pos:"intj", gender:null,
     note:"Literal: even on a stone, three years.\nMeaning: perseverance eventually brings success.",
     example:"A: 日本語(にほんご)がなかなか上達(じょうたつ)しません。\nB: 石(いし)の上(うえ)にも三年(さんねん)ですよ。続(つづ)けてください。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: My Japanese is not improving easily.\nB: Patience pays off. Keep going.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"This proverb teaches that even a cold stone warms if you sit on it for three years. It encourages persistence through discomfort. The Japanese version of 'patience is a virtue.' It is often said to new employees struggling with their first job or students frustrated with studies."},

    {type:"teach", trg:"能(のう)ある鷹(たか)は爪(つめ)を隠(かく)す", src:"a talented hawk hides its claws", pos:"intj", gender:null,
     note:"Meaning: truly skilled people do not show off.\nThe Japanese value of modesty.",
     example:"A: 田中(たなか)さんは実(じつ)はピアノの名人(めいじん)なんですよ。\nB: 能(のう)ある鷹(たか)は爪(つめ)を隠(かく)すですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Mr. Tanaka is actually a piano master.\nB: A talented hawk hides its claws, indeed.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"This proverb embodies the Japanese value of modesty (けんきょ). Boasting is culturally discouraged. Truly talented people quietly demonstrate ability rather than announcing it. The reverse is also true: those who boast loudly are suspected of lacking real skill. This proverb is frequently applied to humble overachievers."},

    {type:"teach", trg:"目(め)からうろこ", src:"scales falling from one's eyes (a revelation)", pos:"intj", gender:null,
     note:"Short for 目(め)からうろこが落(お)ちる.\nMeaning: suddenly understanding something clearly.",
     example:"A: その説明(せつめい)を聞(き)いて目(め)からうろこでした。\nB: わかりやすかったですか？\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Hearing that explanation was a revelation.\nB: Was it easy to understand?\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"目(め)からうろこが落(お)ちる (scales fall from the eyes) actually comes from the Bible (Acts 9:18), entering Japanese through Christian missions. Despite its Western origin, it is thoroughly naturalized in Japanese. It describes the moment of sudden clarity: 'Ah, now I understand!' Used in conversation, books, and TV."},

    {type:"teach", trg:"口(くち)が軽(かる)い", src:"loose-lipped / cannot keep a secret", pos:"adj", gender:null,
     note:"口(くち) = mouth, 軽(かる)い = light. Body part + adjective idiom.\nOpposite: 口(くち)が固(かた)い (tight-lipped).",
     example:"A: あの人(ひと)には秘密(ひみつ)を言(い)わないほうがいいですよ。\nB: 口(くち)が軽(かる)いんですか？\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: You should not tell that person secrets.\nB: Are they loose-lipped?\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"Japanese has many body-part idioms: 口(くち)が軽(かる)い (loose-lipped), 口(くち)が固(かた)い (tight-lipped), 耳(みみ)が痛(いた)い (painful to hear / true criticism), 目(め)が高(たか)い (has a discerning eye), 手(て)が早(はや)い (quick-handed / efficient). These vivid expressions paint personality through physical metaphors."},

    {type:"mc", q:"石(いし)の上(うえ)にも三年(さんねん) means:", opts:["Patience and persistence pay off","Three years is a long time","Stones are uncomfortable","Never sit still"], ans:"Patience and persistence pay off",
     hint:"This proverb encourages continuing through difficulty until results come."},

    {type:"teach", trg:"腹(はら)を立(た)てる", src:"to get angry / to be furious", pos:"verb", gender:null,
     note:"腹(はら) = belly/stomach. Anger 'stands up' in the belly.\nAlso: 腹(はら)が立(た)つ (intransitive).",
     example:"A: 約束(やくそく)を破(やぶ)られて腹(はら)を立(た)てました。\nB: そうですよね。怒(おこ)るのも当然(とうぜん)です。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: I got angry because they broke their promise.\nB: Of course. It is natural to be angry.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"Japanese locates emotions in the belly (腹(はら)), not the heart. 腹(はら)が立(た)つ (anger rises in the belly), 腹(はら)をくくる (to brace oneself, literally 'tie the belly'), 腹(はら)黒(ぐろ)い (black-bellied = scheming). The phrase 腹(はら)を割(わ)って話(はな)す (to split open the belly and talk) means to speak with complete honesty."},

    {type:"teach", trg:"足(あし)を引(ひ)っ張(ぱ)る", src:"to hold someone back / to drag someone down", pos:"verb", gender:null,
     note:"足(あし) = leg/foot. Pulling someone's leg (negative meaning).\nNOT the English 'pulling your leg' (joking).",
     example:"A: ミスが多(おお)いとチームの足(あし)を引(ひ)っ張(ぱ)ってしまいます。\nB: 気(き)をつけましょう。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Too many mistakes will drag the team down.\nB: Let us be careful.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"足(あし)を引(ひ)っ張(ぱ)る (to pull someone's leg) means to hinder or hold back in Japanese. This is the OPPOSITE of the English idiom 'pulling your leg' (joking). Other 足(あし) idioms: 足(あし)が早(はや)い (fast on one's feet / food spoils quickly), 足元(あしもと)を見(み)る (to exploit someone's weakness, look at their feet)."},

    {type:"teach", trg:"目(め)を回(まわ)す", src:"to faint / to be overwhelmed", pos:"verb", gender:null,
     note:"目(め) = eyes. Eyes 'spin around' from shock or overwhelm.\n目(め)が回(まわ)る = to feel dizzy.",
     example:"A: 請求書(せいきゅうしょ)の額(がく)を見(み)て目(め)を回(まわ)しました。\nB: そんなに高(たか)かったのですか？\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: I nearly fainted when I saw the bill amount.\nB: Was it that expensive?\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"目(め)を回(まわ)す (eyes spinning) describes being overwhelmed to the point of near-fainting. Other 目(め) idioms: 目(め)をつぶる (close your eyes = overlook), 目(め)を覚(さ)ます (open your eyes = wake up/realize), 目(め)を疑(うたが)う (doubt your eyes = can't believe what you see). Eyes are the most idiom-rich body part in Japanese."},

    {type:"teach", trg:"手(て)を抜(ぬ)く", src:"to cut corners / to slack off", pos:"verb", gender:null,
     note:"手(て) = hand. Pulling your hand out = not putting full effort.\n手抜(てぬ)き = cutting corners.",
     example:"A: 仕事(しごと)で手(て)を抜(ぬ)いてはいけません。\nB: はい、最後(さいご)までしっかりやります。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: You must not cut corners at work.\nB: Yes, I will do it properly until the end.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"手(て)を抜(ぬ)く (pull out the hand) means doing less than your best. Other 手(て) idioms: 手(て)を出(だ)す (put your hand in = get involved), 手(て)に入(い)れる (put in your hand = obtain), 手(て)を焼(や)く (burn your hand = have trouble with), 手(て)がかかる (hands are occupied = requires effort). The hand represents action and effort in Japanese."},

    {type:"fb", s:"能(のう)ある鷹(たか)は{1}を隠(かく)す。\n(A talented hawk hides its claws.)", a:"つめ", opts:["つめ","て","あし","め"], sSrc:"A talented hawk hides its claws.",
     hint:"The body part that hawks use to catch prey. Talented people hide their skills."},

    {type:"teach", trg:"耳(みみ)にたこができる", src:"to be sick of hearing something (calluses form on ears)", pos:"intj", gender:null,
     note:"耳(みみ) = ears, たこ = callus. Hearing something so often that calluses form.\nUsed for nagging or repetition.",
     example:"A: 勉強(べんきょう)しなさい！\nB: もう耳(みみ)にたこができるくらい聞(き)いたよ。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Study!\nB: I have heard that so many times my ears have calluses.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"耳(みみ)にたこができる is a humorous exaggeration. The image of calluses forming from repeated exposure to the same words is vivid. Children use it when parents nag them. It is similar to 'broken record' in English but uses the body as the site of wear. 耳(みみ) idioms: 耳(みみ)が痛(いた)い (painful to hear = harsh truth), 耳(みみ)よりな (worth hearing = good news)."},

    {type:"mc", q:"足(あし)を引(ひ)っ張(ぱ)る in Japanese means:", opts:["To hold someone back or hinder them","To joke with someone","To help someone walk","To kick someone"], ans:"To hold someone back or hinder them",
     hint:"Unlike the English idiom, this Japanese expression has a negative, obstructing meaning."},

    {type:"match", pairs:[
      {trg:"口(くち)が軽(かる)い", src:"loose-lipped"},
      {trg:"腹(はら)を立(た)てる", src:"to get angry"},
      {trg:"足(あし)を引(ひ)っ張(ぱ)る", src:"to hold someone back"},
      {trg:"目(め)を回(まわ)す", src:"to be overwhelmed"},
      {trg:"手(て)を抜(ぬ)く", src:"to cut corners"}
    ]},

    {type:"fb", s:"仕事(しごと)で{1}を抜(ぬ)いてはいけません。\n(You must not cut corners at work.)", a:"て", opts:["て","あし","め","くち"], sSrc:"You must not cut corners at work.",
     hint:"The body part meaning 'hand' that represents effort in this idiom."},

    {type:"mc", q:"目(め)からうろこ describes:", opts:["A sudden moment of understanding","Being unable to see","Crying with happiness","Feeling sleepy"], ans:"A sudden moment of understanding",
     hint:"This expression describes the revelation of seeing something clearly for the first time."}
  ,{type:"match",pairs:[{trg:"ことわざ",src:"proverb / saying"},{trg:"石(いし)の上(うえ)にも三年(さんねん)",src:"patience pays off (sit on a stone for 3 years)"},{trg:"目(め)からうろこ",src:"scales falling from one's eyes (a revelation)"},{trg:"耳(みみ)にたこができる",src:"to be sick of hearing something (calluses form on ears)"}]},
  {type:"fb", s:"「石(いし)の上(うえ)にも三年(さんねん)」は有名(ゆうめい)な日本語(にほんご)の{1}です。", a:["ことわざ"], opts:["ことわざ","石(いし)の上(うえ)にも三年(さんねん)","目(め)からうろこ","口(くち)が軽(かる)い"], hint:"A traditional short saying that expresses a wisdom or moral principle.", sSrc:"'Sitting on a stone for three years' is a famous Japanese {1}."}
]
};
export default BATCH6_L1;
