// Unit 25 Batch 2 Lesson 4: プレゼンと名刺(めいし) (Presentations & Business Cards)
const BATCH2_L_4 = {
  id:"jav2_u25l_b2_4", title:"プレゼンと名刺(めいし)", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"プレゼンと名刺(めいし)",
     desc:"Japanese business presentations and networking follow specific cultural protocols. Learn vocabulary for slides, demonstrations, business card exchange, and audience engagement. These skills are critical for anyone working in a Japanese corporate environment.",
     goals:["Use presentation vocabulary","Master business card exchange terms","Navigate formal self-introduction language"]},

    {type:"teach", trg:"スライド", src:"slide (presentation)", pos:"noun", gender:null,
     note:"Loanword from English. スライドを作(つく)る = to make slides.\nスライドをめくる = to advance slides.",
     example:"A: スライドを準備(じゅんび)しましたので、ご覧(らん)ください。\nB: はっきり見(み)えます。続(つづ)けてください。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: I have prepared slides, so please take a look.\nB: I can see them clearly. Please continue.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"While PowerPoint dominates globally, Japanese business presentations have unique characteristics. Slides tend to be text-heavy compared to Western minimalist styles. The phrase 箇条書(かじょうが)きスライド (bullet-point slide) coexists with infographic-style layouts. Companies like Toyota pioneered the A3報告書(ほうこくしょ) (A3 report), a one-page visual summary."},

    {type:"teach", trg:"名刺(めいし)", src:"business card / name card", pos:"noun", gender:null,
     note:"名刺交換(めいしこうかん) = business card exchange.\n名刺入(めいしい)れ = business card holder.",
     example:"A: 名刺(めいし)をお渡(わた)しいたします。\nB: 頂戴(ちょうだい)いたします。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Allow me to give you my business card.\nB: I gratefully receive it.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"名刺 exchange is a ritual in Japanese business. Cards are presented with both hands, text facing the receiver. You study the card carefully, never write on it or put it in your pocket immediately. During meetings, cards are arranged on the table in the seating order. A messy 名刺入(めいしい)れ (card holder) signals disorganization."},

    {type:"teach", trg:"自己紹介(じこしょうかい)", src:"self-introduction", pos:"noun", gender:null,
     note:"自己紹介(じこしょうかい)する = to introduce oneself.\nA fundamental skill in Japanese business and social life.",
     example:"A: では、自己紹介(じこしょうかい)をお願(ねが)いします。\nB: はじめまして。ABC社(しゃ)の田中(たなか)ともうします。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Now then, please introduce yourself.\nB: How do you do. I am Tanaka from ABC Company.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"自己紹介 is practiced from childhood in Japan. On the first day of school, work, or any group activity, 自己紹介(じこしょうかい) is expected. The standard format includes: name, affiliation, and a brief personal detail. Japanese people often rehearse their 自己紹介(じこしょうかい) to ensure it is polished. In business, your company name typically comes before your personal name."},

    {type:"mc", q:"名刺交換(めいしこうかん) requires:", opts:["Presenting the card with both hands, text facing the receiver","Tossing the card casually across the table","Writing notes on the card during the meeting","Keeping your card in your wallet until asked"], ans:"Presenting the card with both hands, text facing the receiver",
     hint:"Japanese business c... exchange is a formal ritual showing respect through physical gestures."},

    {type:"teach", trg:"営業(えいぎょう)", src:"sales / business development", pos:"noun", gender:null,
     note:"営業部(えいぎょうぶ) = sales department.\n営業(えいぎょう)マン = salesperson.",
     example:"A: 営業(えいぎょう)成績(せいせき)が今月(こんげつ)目標(もくひょう)を達成(たっせい)しました。\nB: すばらしい！チームの努力(どりょく)の結果(けっか)ですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Sales performance achieved this month's target.\nB: Wonderful! It is the result of the team's effort.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"営業 uses 営(えい) (manage/operate) and 業(ぎょう) (business/industry). Japanese 営業(えいぎょう) culture emphasizes relationship-building over hard selling. The concept of ルート営業(えいぎょう) (route sales, visiting clients regularly) builds long-term trust. 営業(えいぎょう)マン (salesperson) is a respected profession, and top performers are celebrated at annual company events."},

    {type:"teach", trg:"目標(もくひょう)", src:"target / goal / objective", pos:"noun", gender:null,
     note:"目標(もくひょう)を立(た)てる = to set a target.\n営業(えいぎょう)目標(もくひょう) = sales target.",
     example:"A: 今期(こんき)の目標(もくひょう)は何(なん)ですか？\nB: 売上(うりあげ)を十(じゅう)パーセント増加(ぞうか)させることです。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: What is this quarter's target?\nB: To increase sales by ten percent.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"目標 uses 目(もく) (eye) and 標(ひょう) (mark/sign). A target is an 'eye-mark' to aim at. While 目的(もくてき) (purpose) asks 'why,' 目標(もくひょう) (target) asks 'how much/by when.' Japanese management by objectives (目標(もくひょう)管理(かんり), mokuhyou kanri) sets clear, measurable 目標(もくひょう) for each employee, reviewed quarterly or annually."},

    {type:"teach", trg:"売上(うりあげ)", src:"sales / revenue / turnover", pos:"noun", gender:null,
     note:"売上(うりあげ)高(だか) = sales figures.\n売上(うりあげ)が伸(の)びる = sales grow.",
     example:"A: 売上(うりあげ)が前年(ぜんねん)比(ひ)二十(にじゅう)パーセント増加(ぞうか)しました。\nB: 市場(いちば)の拡大(かくだい)が効(き)いていますね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Sales increased 20% compared to the previous year.\nB: Market expansion is contributing.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"売上 combines 売(うり) (sell) and 上(あげ) (up). Sales literally 'go up' when business is good. In Japanese companies, 売上(うりあげ) numbers are closely tracked and publicly shared within teams. Monthly, quarterly, and annual 売上(うりあげ) reports drive strategic decisions. The phrase 売上(うりあげ)ナンバーワン (number one in sales) is a badge of honor."},

    {type:"fb", s:"今期(こんき)の{1}は売上(うりあげ)を十(じゅう)パーセント増加(ぞうか)させることです。\n(This quarter's target is to increase sales by 10%.)", a:"目標(もくひょう)", opts:["目標(もくひょう)","目的(もくてき)","結果(けっか)","成果(せいか)"], sSrc:"This quarter's target is to increase sales by 10%.",
     hint:"The noun for a measurable goal or target, answering 'how much' or 'by when.'"},

    {type:"teach", trg:"客先(きゃくさき)", src:"client / customer (visited)", pos:"noun", gender:null,
     note:"客先(きゃくさき)を訪問(ほうもん)する = to visit a client.\nUsed when going to the client's location.",
     example:"A: 今日(きょう)は客先(きゃくさき)で打(う)ち合(あ)わせがあります。\nB: 何時(なんじ)に戻(もど)りますか？\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: I have a meeting at a client's office today.\nB: What time will you return?\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"客先 uses 客(きゃく) (guest/customer) and 先(さき) (destination/ahead). In Japanese business, visiting 客先(きゃくさき) (going to the client) is more common than asking clients to come to you. This reflects the service-oriented culture where the provider goes to the customer. The phrase 客先(きゃくさき)での対応(たいおう) (handling things at the client's site) is a core business skill."},

    {type:"teach", trg:"打(う)ち合(あ)わせ", src:"meeting / consultation / coordination meeting", pos:"noun", gender:null,
     note:"Less formal than 会議(かいぎ).\n打(う)ち合(あ)わせをする = to have a coordination meeting.",
     example:"A: 明日(あした)の打(う)ち合(あ)わせの時間(じかん)を確認(かくにん)させてください。\nB: 午前(ごぜん)十時(じゅうじ)からでいかがですか？\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Let me confirm the time for tomorrow's meeting.\nB: How about from 10 AM?\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"打ち合わせ literally means 'striking together,' from the music term for synchronizing rhythms. Unlike the formal 会議(かいぎ) (conference), 打(う)ち合(あ)わせ is a working meeting to coordinate details and align plans. It is typically smaller, less structured, and more collaborative. Many decisions in Japanese companies happen in 打(う)ち合(あ)わせ rather than formal 会議(かいぎ)."},

    {type:"teach", trg:"前年比(ぜんねんひ)", src:"compared to the previous year / year-on-year", pos:"noun", gender:null,
     note:"前年(ぜんねん) (previous year) + 比(ひ) (ratio/comparison).\n前月比(ぜんげつひ) = month-on-month.",
     example:"A: 前年比(ぜんねんひ)で売上(うりあげ)が増加(ぞうか)しました。\nB: どのくらい増加(ぞうか)しましたか？\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Sales increased compared to last year.\nB: By how much did they increase?\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"前年比 is a standard business metric. Japanese financial reporting constantly references 前年比(ぜんねんひ) to show growth or decline. The suffix 比(ひ) (comparison) appears in many business terms: 前期比(ぜんきひ) (compared to previous period), 対前年比(たいぜんねんひ) (versus previous year). These comparisons drive quarterly earnings reports and stock market analysis."},

    {type:"mc", q:"打(う)ち合(あ)わせ is different from 会議(かいぎ) because:", opts:["It is less formal and more collaborative","It is more formal and structured","It requires written minutes","It only happens with clients"], ans:"It is less formal and more collaborative",
     hint:"This working meeting is for coordination and alignment, unlike the f... conference setting."},

    {type:"fb", s:"今日(きょう)は{1}で打(う)ち合(あ)わせがあります。\n(I have a meeting at a client's office today.)", a:"客先(きゃくさき)", opts:["客先(きゃくさき)","会社(かいしゃ)","本社(ほんしゃ)","事務所(じむしょ)"], sSrc:"I have a meeting at a client's office today.",
     hint:"The compound noun for a client's location that you visit for business."},

    {type:"match", pairs:[{trg:"名刺(めいし)",src:"business card"},{trg:"自己紹介(じこしょうかい)",src:"self-introduction"},{trg:"営業(えいぎょう)",src:"sales"},{trg:"打(う)ち合(あ)わせ",src:"coordination meeting"}]},

    {type:"fb", s:"売上(うりあげ)が前年(ぜんねん){1}に二十(にじゅう)パーセント増加(ぞうか)しました。\n(Sales increased 20% compared to the previous year.)", a:"比(ひ)", opts:["比(ひ)","から","より","まで"], sSrc:"Sales increased 20% compared to the previous year.",
     hint:"The suffix meaning 'ratio' or 'comparison,' attached after the time period being compared against."},

    {type:"match", pairs:[{trg:"売上(うりあげ)",src:"sales/revenue"},{trg:"目標(もくひょう)",src:"target/goal"},{trg:"客先(きゃくさき)",src:"client (visited)"},{trg:"前年比(ぜんねんひ)",src:"year-on-year"}]},

    {type:"mc", q:"自己紹介(じこしょうかい) in Japanese business typically includes:", opts:["Only your name","Your company name, department, then personal name","Your personal hobbies first","Your salary information"], ans:"Your company name, department, then personal name",
     hint:"In Japanese business culture, your organizational affiliation comes before your individual identity."},
  {type:"match",pairs:[{trg:"スライド",src:"slide (presentation)"}]}]
};
export default BATCH2_L_4;
