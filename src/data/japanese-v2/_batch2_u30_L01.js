// Unit 30 Batch 2 Lesson 1: しそうし (History of Thought)
const BATCH2_L_1 = {
  id:"jav2_u30l_b2_1", title:"しそうし", icon:"📚", xp:15, board:true,
  steps:[
    {type:"intro", title:"しそうし",
     desc:"Expand your philosophical vocabulary with terms for reasoning, belief systems, and intellectual traditions. These words bridge Western and Eastern philosophy, enabling deeper engagement with Japanese academic texts and JLPT N1 reading passages about ideas and society.",
     goals:["Use terms for reasoning and belief","Discuss intellectual traditions","Navigate abstract philosophical vocabulary"]},

    {type:"teach", trg:"しそう", src:"thought / ideology / philosophy", pos:"noun", gender:null,
     note:"Kanji: 思想. しそうか = thinker/ideologist.\nじゆうしそう = liberal thought.",
     example:"A: めいじじだいにせいようのしそうがにほんにつたわりました。\nB: にほんのでんとうてきなしそうとどうゆうごうしたのでしょう。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Western thought was transmitted to Japan during the Meiji era.\nB: How did it merge with traditional Japanese thought?\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"思想 uses 思 (think) and 想 (imagine). It refers to organized systems of thought. Meiji-era Japan absorbed Western しそう at remarkable speed, translating thousands of works on philosophy, political theory, and science. Thinkers like Fukuzawa Yukichi shaped how Western ideas were adapted to Japanese culture."},

    {type:"teach", trg:"かんねん", src:"notion / idea / mental concept", pos:"noun", gender:null,
     note:"Kanji: 観念. こていかんねん = fixed notion / preconception.\nかんねんてき = idealistic / conceptual.",
     example:"A: こていかんねんにとらわれずにかんがえましょう。\nB: じゆうなはっそうがだいじですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Let us think without being bound by fixed notions.\nB: Free thinking is important.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"観念 uses 観 (observe/view) and 念 (thought/idea). While がいねん (concept) is neutral and academic, かんねん carries more subjective weight. こていかんねん (fixed notion) implies stubborn preconceptions. The related expression かんねんする means 'to resign oneself' or 'to accept the inevitable,' showing how mental concepts can become traps."},

    {type:"teach", trg:"りせい", src:"reason / rationality / intellect", pos:"noun", gender:null,
     note:"Kanji: 理性. りせいてき = rational.\nりせいとかんじょう = reason and emotion.",
     example:"A: りせいてきなはんだんがもとめられるばめんです。\nB: かんじょうにながされないようにしましょう。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: This is a situation that demands rational judgment.\nB: Let us not be swayed by emotions.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"理性 uses 理 (reason/principle) and 性 (nature/quality). In Kantian philosophy translated into Japanese, りせい represents 'Vernunft' (reason). The tension between りせい and かんじょう (emotion) is a universal theme, but Japanese culture often values a third path: ちょっかん (intuition), which transcends both reason and emotion."},

    {type:"mc", q:"こていかんねん means:", opts:["Fixed notion / preconception","Free thinking","New concept","Abstract theory"], ans:"Fixed notion / preconception",
     hint:"こてい means 'f.../rigid' combined with the word for n..., describing stubborn preconceptions."},

    {type:"teach", trg:"ぜんあく", src:"good and evil / right and wrong", pos:"noun", gender:null,
     note:"Kanji: 善悪. ぜんあくのはんだん = moral judgment.\nFrom Buddhist and Confucian traditions.",
     example:"A: ぜんあくのきじゅんはぶんかによってことなります。\nB: ふへんてきなぜんあくはあるのでしょうか？\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Standards of good and evil differ by culture.\nB: Is there a universal good and evil?\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"善悪 pairs 善 (good) and 悪 (evil). This compound appears throughout Japanese moral philosophy, from Buddhist concepts of 善因善果 (good causes produce good effects) to modern ethical debates. The question of whether ぜんあく is absolute or relative is a perennial topic in Japanese philosophy classrooms."},

    {type:"teach", trg:"しんねん", src:"belief / conviction / faith in an idea", pos:"noun", gender:null,
     note:"Kanji: 信念. しんねんをもつ = to hold a conviction.\nかたいしんねん = firm belief.",
     example:"A: じぶんのしんねんをつらぬくことはたいせつです。\nB: しかし、たにんのしんねんもそんちょうしなければなりません。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: It is important to stand by your convictions.\nB: However, we must also respect others' beliefs.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"信念 uses 信 (believe) and 念 (thought/conviction). しんねん is stronger than いけん (opinion) because it implies deep personal commitment. Japanese leaders are often evaluated on whether they have しんねん. The expression しんねんをまげない (not bending one's convictions) is admired, though it can also mean inflexibility."},

    {type:"teach", trg:"げんしょう", src:"phenomenon", pos:"noun", gender:null,
     note:"Kanji: 現象. しゃかいげんしょう = social phenomenon.\nしぜんげんしょう = natural phenomenon.",
     example:"A: このしゃかいげんしょうのげんいんをぶんせきしましょう。\nB: ふくすうのようそがからみあっていますね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Let us analyze the cause of this social phenomenon.\nB: Multiple factors are intertwined.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"現象 uses 現 (appear/present) and 象 (image/elephant). A phenomenon is an 'appearing image.' In philosophy, Husserl's phenomenology is translated as げんしょうがく. The word bridges science and philosophy: both しぜんげんしょう (natural phenomena) and しゃかいげんしょう (social phenomena) are studied through observation and analysis."},

    {type:"fb", s:"りせいてきな{1}がもとめられるばめんです。\n(This is a situation that demands rational judgment.)", a:"はんだん", opts:["はんだん","かんじょう","しんねん","しそう"], sSrc:"This is a situation that demands rational judgment.",
     hint:"The noun meaning a conclusion reached through thinking, deciding what to do."},

    {type:"teach", trg:"ちょっかん", src:"intuition / gut feeling", pos:"noun", gender:null,
     note:"Kanji: 直感. ちょっかんてき = intuitive.\nちょっかんにしたがう = to follow intuition.",
     example:"A: ちょっかんてきにそれはまちがいだとかんじました。\nB: りくつではせつめいできなくても、ちょっかんはだいじです。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: I intuitively felt that it was wrong.\nB: Even if you cannot explain it logically, intuition is important.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"直感 uses 直 (direct/straight) and 感 (feel). Japanese culture values ちょっかん as a legitimate way of knowing, alongside りせい (reason). In martial arts, business, and art, ちょっかん is cultivated through years of practice. The concept of 'reading the air' (くうきをよむ) is a social form of ちょっかん."},

    {type:"teach", trg:"へんけん", src:"prejudice / bias", pos:"noun", gender:null,
     note:"Kanji: 偏見. へんけんをもつ = to hold prejudice.\nへんけんのない = free from prejudice.",
     example:"A: へんけんをなくすためにはきょういくがじゅうようです。\nB: たようなひととのこうりゅうもこうかてきです。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Education is important for eliminating prejudice.\nB: Interaction with diverse people is also effective.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"偏見 uses 偏 (lean/incline) and 見 (see/view). Prejudice is 'leaning sight.' While Japan values social harmony, it also faces challenges with へんけん regarding gender, ethnicity, and disability. The phrase むいしきのへんけん (unconscious bias) has entered Japanese workplace vocabulary as diversity training becomes more common."},

    {type:"teach", trg:"むいしき", src:"unconscious / subconscious", pos:"noun", gender:null,
     note:"Kanji: 無意識. むいしきのうちに = unconsciously.\nFreud's concept of the unconscious mind.",
     example:"A: むいしきのへんけんはだれにでもあります。\nB: まずきづくことがだいいっぽです。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Everyone has unconscious biases.\nB: The first step is to become aware of them.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"無意識 uses 無 (without) and 意識 (consciousness). When Freud's works were translated into Japanese in the early 20th century, むいしき became a key term in Japanese intellectual discourse. The concept fascinated Japanese thinkers because it resonated with Zen Buddhist ideas about layers of awareness beneath conscious thought."},

    {type:"mc", q:"ちょっかん is valued in Japanese culture because:", opts:["It replaces the need for education","It represents knowledge gained through deep practice and experience","It is always more accurate than logic","It requires no effort to develop"], ans:"It represents knowledge gained through deep practice and experience",
     hint:"Intuition in Japanese culture is not random but is developed t... years of dedicated p...."},

    {type:"fb", s:"へんけんをなくすためには{1}がじゅうようです。\n(Education is important for eliminating prejudice.)", a:"きょういく", opts:["きょういく","けいけん","ちょっかん","しんねん"], sSrc:"Education is important for eliminating prejudice.",
     hint:"The noun for the systematic process of teaching and learning."},

    {type:"match", pairs:[{trg:"しそう",src:"thought/ideology"},{trg:"りせい",src:"reason/rationality"},{trg:"しんねん",src:"belief/conviction"},{trg:"げんしょう",src:"phenomenon"}]},

    {type:"fb", s:"むいしきの{1}はだれにでもあります。\n(Everyone has unconscious biases.)", a:"へんけん", opts:["へんけん","しんねん","かんねん","りせい"], sSrc:"Everyone has unconscious biases.",
     hint:"The noun meaning 'prejudice' or 'bias,' leaning sight that distorts judgment."},

    {type:"match", pairs:[{trg:"ぜんあく",src:"good and evil"},{trg:"ちょっかん",src:"intuition"},{trg:"へんけん",src:"prejudice"},{trg:"むいしき",src:"unconscious"}]},

    {type:"mc", q:"げんしょう means:", opts:["Belief system","Scientific law","Phenomenon","Hypothesis"], ans:"Phenomenon",
     hint:"The word for an observable event or occurrence, used in both science and philosophy."},
  ]
};
export default BATCH2_L_1;
