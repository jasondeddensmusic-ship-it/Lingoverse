// Batch 6 – Unit 32 (B2.3 Medicine): Mental Health & Wellbeing
const BATCH6_L1 = {
  id:"jav2_u32l_b6_1", title:"メンタルヘルス", icon:"🧘", xp:15, board:true,
  steps:[
    {type:"intro", title:"メンタルヘルス",
     desc:"Learn vocabulary for mental health, psychological wellbeing, and emotional care. As awareness grows in Japan, this vocabulary becomes increasingly important in daily life and media.",
     goals:["Discuss mental health topics with appropriate vocabulary","Understand stress, anxiety, and coping vocabulary","Express emotional states with nuance"]},

    {type:"teach", trg:"メンタルヘルス", src:"mental health", pos:"noun", gender:null,
     note:"Katakana loanword. メンタルがよわい = mentally fragile.\nメンタルケア = mental health care.",
     example:"A: しょくばでのメンタルヘルスたいさくがじゅうようです。\nB: そうですね。ストレスチェックをじっしすべきです。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Mental health measures in the workplace are important.\nB: Yes. Stress checks should be implemented.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"Japan's awareness of メンタルヘルス has grown dramatically. Since 2015, companies with 50+ employees must conduct annual ストレスチェック. However, stigma (スティグマ) around mental illness persists. Counseling (カウンセリング) and therapy (セラピー) are becoming more accepted, especially among younger generations."},

    {type:"teach", trg:"ふあん", src:"anxiety / unease / worry", pos:"noun", gender:null,
     note:"Kanji: 不安. ふあんになる = to become anxious.\nしょうらいのふあん = anxiety about the future.",
     example:"A: しょうらいにたいするふあんがあります。\nB: ぐたいてきにどんなことがふあんですか？\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: I have anxiety about the future.\nB: Specifically, what are you anxious about?\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"ふあん (不安) combines 不 (not) and 安 (peace). Japan consistently ranks high in future ふあん surveys. Financial insecurity, career uncertainty, and aging are common sources. しゃかいふあん (social anxiety) is a recognized condition. The phrase まんぜんとしたふあん (vague, unfocused anxiety) describes a diffuse unease."},

    {type:"teach", trg:"うつ", src:"depression", pos:"noun", gender:null,
     note:"Kanji: 鬱. うつびょう = depressive disorder.\nうつじょうたい = depressive state.",
     example:"A: さいきんうつっぽいきぶんがつづいています。\nB: いちどせんもんかにそうだんしてみませんか？\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: I have been feeling depressed recently.\nB: Would you consider consulting a specialist?\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"うつ (depression) awareness has increased significantly in Japan. The kanji 鬱 is famously complex (29 strokes) and difficult to write. うつびょう affects about 7% of Japanese adults. The phrase こころのかぜ (a cold of the heart) was used to reduce stigma, comparing depression to a common physical illness that can be treated."},

    {type:"teach", trg:"カウンセリング", src:"counseling", pos:"noun", gender:null,
     note:"Katakana loanword. カウンセラー = counselor.\nカウンセリングをうける = to receive counseling.",
     example:"A: カウンセリングをうけてみたいのですが。\nB: がっこうのカウンセラーにまずれんらくしてみてください。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: I would like to try receiving counseling.\nB: Please try contacting the school counselor first.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"Japan placed スクールカウンセラー (school counselors) in all public junior high schools by 2001. Workplace Employee Assistance Programs (EAP) offer カウンセリング. Online and phone counseling services (いのちのでんわ, Lifeline) provide anonymous support. Seeking help is increasingly normalized."},

    {type:"teach", trg:"いやす", src:"to heal / to soothe / to comfort", pos:"verb", gender:null,
     note:"Group 1 verb. こころをいやす = to heal the heart/mind.\nKanji: 癒す. いやし = healing.",
     example:"A: しぜんのなかにいるとこころがいやされます。\nB: おんせんもいいですよ。からだもこころもいやされます。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Being in nature heals the heart.\nB: Onsen is also good. Both body and mind are healed.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"いやし (癒し) became a buzzword in stressed-out Japan. いやしスポット (healing spots: temples, forests, hot springs), いやしのおんがく (healing music), and いやしけいペット (comfort pets) are entire industries. もりりんよく (forest bathing) is a scientifically studied いやし practice originating in Japan."},

    {type:"mc", q:"ふあん describes:", opts:["Anxiety and unease","Physical pain","Excitement","Anger"], ans:"Anxiety and unease",
     hint:"This word combines 不 (not) and 安 (peace) to express a worried mental state."},

    {type:"teach", trg:"きぶん", src:"mood / feeling / disposition", pos:"noun", gender:null,
     note:"Kanji: 気分. きぶんがいい = feeling good.\nきぶんてんかん = change of mood/scenery.",
     example:"A: きょうはきぶんがすぐれません。\nB: むりしないでやすんでくださいね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: I am not feeling well today.\nB: Please don't push yourself and rest.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"きぶん (気分) combines 気 (spirit/energy) and 分 (portion). きぶんてんかん (mood change) is an important self-care concept: changing scenery, taking a walk, or doing something different to reset your mental state. The phrase きぶんやさん (mood person) describes someone whose mood changes easily."},

    {type:"teach", trg:"りらっくす", src:"to relax", pos:"verb", gender:null,
     note:"From English 'relax.' りらっくすする = to relax.\nリラクゼーション = relaxation.",
     example:"A: たまにはりらっくすしましょう。\nB: そうですね。おんせんにいきたいです。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Let us relax once in a while.\nB: Yes. I want to go to a hot spring.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"Japanese りらっくす culture includes onsen (hot springs), sentou (public baths), massage, yoga, and meditation. もくよくざい (bath additives) transform home baths into relaxation sessions. Japanese workplaces are beginning to offer リフレッシュきゅうか (refresh vacation) for mental health recovery."},

    {type:"teach", trg:"こどく", src:"loneliness / solitude / isolation", pos:"noun", gender:null,
     note:"Kanji: 孤独. こどくかん = feeling of loneliness.\nこどくし = solitary death.",
     example:"A: こうれいしゃのこどくがしゃかいもんだいになっています。\nB: ちいきのつながりがたいせつですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Elderly loneliness has become a social problem.\nB: Community connections are important.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"こどく (孤独) is a serious social issue in Japan. こどくし (solitary death) among elderly living alone affects thousands annually. The government appointed a こどく・こりつたいさくたんとうだいじん (Minister of Loneliness) in 2021. ひきこもり (social withdrawal) affects an estimated 1.5 million people. Community connections are seen as the key solution."},

    {type:"teach", trg:"じしん", src:"self-confidence / confidence in oneself", pos:"noun", gender:null,
     note:"Kanji: 自信. じしんがある = to have confidence.\nDifferent from じしん (地震, earthquake).",
     example:"A: じしんをもってがんばってください。\nB: ありがとう。がんばります。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Please be confident and do your best.\nB: Thank you. I will try my best.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"じしん (自信) and じしん (地震) are perfect homophones but use completely different kanji: 自信 (self + belief) vs 地震 (earth + shake). Context always clarifies meaning. Japanese culture sometimes discourages excessive じしん (it can look like arrogance), preferring humble competence. Building healthy じしん is increasingly discussed in education."},

    {type:"teach", trg:"がまん", src:"patience / endurance / self-restraint", pos:"noun", gender:null,
     note:"Kanji: 我慢. がまんする = to endure/be patient.\nがまんづよい = patient/enduring.",
     example:"A: あとすこしです。がまんしてください。\nB: はい、がんばります。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Just a little more. Please be patient.\nB: Yes, I will try my best.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"がまん (我慢) is a core Japanese value: the ability to endure discomfort without complaining. Children learn がまん early. However, excessive がまん can harm mental health. Modern psychology encourages expressing feelings rather than always enduring. The balance between がまん and self-expression is a evolving cultural conversation."},

    {type:"fb", s:"しぜんのなかにいるとこころが{1}されます。\n(Being in nature heals the heart.)", a:"いや", opts:["いや","こわ","おどろか","よろこば"], sSrc:"Being in nature heals the heart.",
     hint:"The passive stem of the verb meaning to heal or soothe."},

    {type:"teach", trg:"あんしん", src:"peace of mind / relief / reassurance", pos:"noun", gender:null,
     note:"Kanji: 安心. あんしんする = to feel relieved.\nあんしん・あんぜん = safety and security.",
     example:"A: むすめがぶじにとうちゃくしてあんしんしました。\nB: よかったですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: I felt relieved that my daughter arrived safely.\nB: That is good.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"あんしん (安心) combines 安 (peace) and 心 (heart). あんしん and あんぜん (safety) are often paired: あんしん・あんぜんなまち (a safe and secure town). The feeling of あんしん is what Japanese hospitality (おもてなし) aims to create. Products labeled あんしんせっけい (peace-of-mind design) sell better."},

    {type:"mc", q:"がまん describes:", opts:["Patient endurance without complaining","Extreme happiness","Complete relaxation","Intense fear"], ans:"Patient endurance without complaining",
     hint:"This traditional Japanese value involves quietly bearing difficulty."},

    {type:"match", pairs:[
      {trg:"ふあん", src:"anxiety"},
      {trg:"いやす", src:"to heal / soothe"},
      {trg:"こどく", src:"loneliness"},
      {trg:"がまん", src:"patience / endurance"},
      {trg:"あんしん", src:"peace of mind"}
    ]},

    {type:"fb", s:"じしんを{1}てがんばってください。\n(Please be confident and do your best.)", a:"もっ", opts:["もっ","すて","わすれ","なくし"], sSrc:"Please be confident and do your best.",
     hint:"The て-form of もつ (to hold/have), used with じしん meaning to have confidence."},

    {type:"mc", q:"こどくし is a social problem involving:", opts:["People dying alone without anyone noticing","Children being bullied","Traffic accidents","Natural disasters"], ans:"People dying alone without anyone noticing",
     hint:"This issue particularly affects elderly p... living a... in Japan."}
  ]
};
export default BATCH6_L1;
