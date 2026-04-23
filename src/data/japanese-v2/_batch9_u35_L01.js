// Batch 9 – Unit 35 (B2): デジタル社会(しゃかい)
const BATCH9_L1 = {
  id:"jav2_u35l_b9_1", title:"デジタル社会(しゃかい)", icon:"💻", xp:15, board:true,
  steps:[
    {type:"intro", title:"デジタル社会(しゃかい)",
     desc:"Digital society and technology vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"人工知能(じんこうちのう)", src:"artificial intelligence", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 人工知能(じんこうちのう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Let us think about artificial intelligence.\nB: It is an important theme.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"人工(じんこう) (artificial) + 知能(ちのう) (intelligence). Abbreviated AI. Japan's 2019 AI strategy aims for humanistic AI use (人間中心(にんげんちゅうしん)のAI). Workplace 生成AI (generative AI) adoption surged through 2023-2024."},

    {type:"teach", trg:"ビッグデータ", src:"big data", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ビッグデータについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Let us think about big data.\nB: It is an important theme.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"Imported English. Japanese firms were early ビッグデータ adopters in telecom, retail, and railway. JR East collects billions of Suica card tap records daily, anonymized for 都市計画(としけいかく) (urban planning)."},

    {type:"teach", trg:"サイバーセキュリティ", src:"cybersecurity", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: サイバーセキュリティについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Let us think about cybersecurity.\nB: It is an important theme.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"Imported English. Japan's 内閣サイバーセキュリティセンター (NISC) runs since 2015. Ransomware attacks on Japanese companies spiked in 2021-2022, making サイバーセキュリティ a board-level concern."},

    {type:"teach", trg:"デジタル化(か)", src:"digitalization", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: デジタル化(か)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Let us think about digitalization.\nB: It is an important theme.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"Imported デジタル + 化(か) (-ification). Japan notoriously lagged in デジタル化(か) (hanko seal, fax machines). The 2021 デジタル庁(ちょう) (Digital Agency) was created to accelerate government digitization."},

    {type:"teach", trg:"自動化(じどうか)", src:"automation", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 自動化(じどうか)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Let us think about automation.\nB: It is an important theme.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"自動(じどう) (automatic) + 化(か) (-ification). Japanese manufacturing pioneered 自動化(じどうか). Toyota's 自働化(じどうか, with an added 人 radical) means human-supervised automation, a philosophical distinction."},

    {type:"teach", trg:"ロボティクス", src:"robotics", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ロボティクスについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Let us think about robotics.\nB: It is an important theme.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"Imported English. Japan is the world leader in industrial ロボティクス with firms like FANUC, Yaskawa, and Kawasaki. ASIMO and Pepper made Japan a pop-culture ロボティクス exporter too."},

    {type:"teach", trg:"クラウド", src:"cloud computing", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: クラウドについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Let us think about cloud computing.\nB: It is an important theme.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Imported English cloud. AWS Tokyo was launched in 2011. Japanese government クラウド adoption accelerated after 2020 with the ガバメントクラウド (government cloud) initiative replacing dozens of fragmented systems."},

    {type:"teach", trg:"アルゴリズム", src:"algorithm", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: アルゴリズムについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Let us think about algorithm.\nB: It is an important theme.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"Imported English. Japanese high school 情報(じょうほう)I curriculum includes アルゴリズム basics since 2022. 生成AI impact on job markets has made アルゴリズム awareness a general civic literacy concern."},

    {type:"mc", q:"What does 人工知能(じんこうちのう) mean?", opts:["artificial intelligence","big data","cybersecurity","digitalization"], ans:"artificial intelligence",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}は重要(じゅうよう)です。\n(automation is important.)", a:"自動化(じどうか)", opts:["自動化(じどうか)","ロボティクス","クラウド","人工知能(じんこうちのう)"], sSrc:"automation is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"人工知能(じんこうちのう)",src:"artificial intelligence"},{trg:"ビッグデータ",src:"big data"},{trg:"サイバーセキュリティ",src:"cybersecurity"},{trg:"デジタル化(か)",src:"digitalization"},{trg:"クラウド",src:"cloud computing"}]},

    {type:"mc", q:"Which word means algorithm?", opts:["ロボティクス","アルゴリズム","自動化(じどうか)","ビッグデータ"], ans:"アルゴリズム",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
