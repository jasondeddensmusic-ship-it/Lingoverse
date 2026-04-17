// Unit 36 Batch 2 Lesson 2: 試験(しけん)準備(じゅんび) (Exam Preparation & Mixed Register)
const BATCH2_L_2 = {
  id:"jav2_u36l_b2_2", title:"試験(しけん)準備(じゅんび)", icon:"📝", xp:15, board:true,
  steps:[
    {type:"intro", title:"試験(しけん)準備(じゅんび)",
     desc:"This final lesson consolidates B2-level vocabulary through mixed-domain review and exam-style practice. You will encounter cross-domain vocabulary, register-switching, and the kind of complex reasoning tested on JLPT N1. This lesson is your capstone for B2 Japanese.",
     goals:["Review vocabulary across all B2 domains","Practice mixed-register comprehension","Demonstrate cross-domain analytical thinking"]},

    {type:"teach", trg:"合格(ごうかく)", src:"passing (an exam) / acceptance", pos:"noun", gender:null,
     note:"Kanji: 合格(ごうかく). 合格(ごうかく)する = to pass.\n試験(しけん)に合格(ごうかく)する = to pass an exam.",
     example:"A: JLPTに合格(ごうかく)するためには計画(けいかく)的(てき)な勉強(べんきょう)が必要(ひつよう)です。\nB: 毎日(まいにち)の積(つ)み重(かさ)ねが大事(だいじ)ですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Planned study is needed to pass the JLPT.\nB: Daily accumulation is important.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"合格(ごうかく) uses 合(ごう) (match/fit) and 格(かく) (standard/status). Passing an exam means 'meeting the standard.' Japanese exam culture is intense: from 受験(じゅけん) (entrance exams) to 資格試験(しかくしけん) (qualification exams), studying for 合格(ごうかく) is a national pastime. Families visit shrines to pray for 合格(ごうかく), and special 合格(ごうかく)祈願(きがん) (prayer for passing) charms are sold."},

    {type:"teach", trg:"読(よ)み解(と)く", src:"to read and understand / to comprehend deeply", pos:"verb", gender:null,
     note:"Kanji: 読(よ)み解(と)く. 文章(ぶんしょう)を読(よ)み解(と)く = to comprehend a text.\nCombines reading with analytical understanding.",
     example:"A: 長文(ちょうぶん)を読(よ)み解(と)く力(ちから)がJLPTでは試(ため)されます。\nB: 要旨(ようし)をつかむ練習(れんしゅう)が大切(たいせつ)ですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: The ability to comprehend long texts is tested on the JLPT.\nB: Practice in grasping the main points is important.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"読(よ)み解(と)く combines 読(よ)む (read) and 解(と)く (solve/untie). It means more than just reading: it means analytically understanding the structure, argument, and nuances of a text. JLPT N1 reading requires 読(よ)み解(と)く ability across diverse topics: editorials, academic abstracts, literary passages, and practical documents."},

    {type:"teach", trg:"要旨(ようし)", src:"gist / main points / summary", pos:"noun", gender:null,
     note:"Kanji: 要旨(ようし). 論文(ろんぶん)の要旨(ようし) = abstract of a paper.\n要旨(ようし)をまとめる = to summarize the main points.",
     example:"A: まず要旨(ようし)をつかんでから再読(さいどく)しましょう。\nB: スキミングの技術(ぎじゅつ)が役(やく)に立(た)ちますね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: First grasp the gist, then re-read.\nB: Skimming techniques are useful.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"要旨(ようし) uses 要(よう) (essential/important) and 旨(し) (meaning/purport). In Japanese academic writing, the 要旨(ようし) (abstract) is the first thing readers see. JLPT reading comprehension tests the ability to identify the 要旨(ようし) of complex passages. The skill of separating 要旨(ようし) from supporting details is fundamental to advanced reading."},

    {type:"mc", q:"読(よ)み解(と)く means:", opts:["To read quickly","To read and deeply comprehend","To read aloud","To read for pleasure"], ans:"To read and deeply comprehend",
     hint:"This compound verb combines reading with analytical understanding, going beyond surface comprehension."},

    {type:"teach", trg:"文脈(ぶんみゃく)", src:"context / flow of text / discourse", pos:"noun", gender:null,
     note:"Kanji: 文脈(ぶんみゃく). 文脈(ぶんみゃく)から判断(はんだん)する = to judge from context.\n前後(ぜんご)の文脈(ぶんみゃく) = surrounding context.",
     example:"A: この言葉(ことば)の意味(いみ)は文脈(ぶんみゃく)によって変(か)わります。\nB: 前後(ぜんご)の文(ぶん)をよく見(み)る必要(ひつよう)がありますね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: The meaning of this word changes depending on context.\nB: You need to look carefully at the surrounding sentences.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"文脈(ぶんみゃく) uses 文(ぶん) (text/writing) and 脈(みゃく) (pulse/vein). Context is the 'vein running through the text.' Advanced Japanese comprehension depends heavily on 文脈(ぶんみゃく) reading. JLPT N1 tests this through questions where the same word means different things in different passages, requiring readers to determine meaning from 文脈(ぶんみゃく)."},

    {type:"teach", trg:"考(かんが)え方(かた)", src:"way of thinking / mindset / perspective", pos:"noun", gender:null,
     note:"Kanji: 考(かんが)え方(かた). From 考(かんが)える + 方(かた) (way).\n日本的(にほんてき)な考(かんが)え方(かた) = Japanese way of thinking.",
     example:"A: 文化(ぶんか)によって考(かんが)え方(かた)が違(ちが)います。\nB: その違(ちが)いを理解(りかい)することが国際(こくさい)理解(りかい)の第一歩(だいいっぽ)です。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Ways of thinking differ by culture.\nB: Understanding those differences is the first step to international understanding.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"考(かんが)え方(かた) is one of the most frequently used compound nouns in Japanese. It captures something deeper than 'opinion': it is the framework through which you process reality. 日本的(にほんてき)な考(かんが)え方(かた) (Japanese way of thinking) is a concept explored in countless books. Understanding different 考(かんが)え方(かた) is seen as the key to cross-cultural communication."},

    {type:"teach", trg:"概要(がいよう)をつかむ", src:"to grasp the outline / to get the overview", pos:"verb", gender:null,
     note:"概要(がいよう) (outline/summary) + つかむ (to grasp).\nAn essential reading comprehension strategy.",
     example:"A: まず文章(ぶんしょう)の概要(がいよう)をつかみましょう。\nB: 第一段落(だいいちだんらく)と最後(さいご)の段落(だんらく)がヒントになります。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: First, let us grasp the outline of the text.\nB: The first and last paragraphs give hints.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"概要(がいよう) uses 概(がい) (approximate) and 要(よう) (essential). つかむ (to grasp) makes this a physical metaphor: literally 'grabbing hold of the outline.' This is a key JLPT reading strategy. Japanese test-taking advice emphasizes 概要(がいよう)をつかむ before diving into details, a top-down reading approach valued in Japanese education."},

    {type:"fb", s:"まず文章(ぶんしょう)の{1}をつかみましょう。\n(First, let us grasp the outline of the text.)", a:"概要(がいよう)", opts:["概要(がいよう)","要旨(ようし)","文脈(ぶんみゃく)","主題(しゅだい)"], sSrc:"First, let us grasp the outline of the text.",
     hint:"The noun meaning 'outline' or 'overview,' the broad picture before details."},

    {type:"teach", trg:"慎重(しんちょう)", src:"careful / cautious / prudent", pos:"adj", gender:null,
     note:"Kanji: 慎重(しんちょう). 慎重(しんちょう)に = carefully.\n慎重(しんちょう)な判断(はんだん) = careful judgment.",
     example:"A: 重要(じゅうよう)な決(き)め事(ごと)には慎重(しんちょう)な判断(はんだん)が必要(ひつよう)です。\nB: 慌(あわ)てずにじっくり考(かんが)えましょう。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Important decisions require careful judgment.\nB: Let us think thoroughly without rushing.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"慎重(しんちょう) uses 慎(しん) (prudent/careful) and 重(ちょう) (heavy/serious). Being 慎重(しんちょう) is a valued trait in Japanese decision-making. The culture prefers thorough deliberation over quick action. The phrase 慎重(しんちょう)に検討(けんとう)する (to carefully consider) is ubiquitous in business and government, sometimes frustratingly so for those seeking quick decisions."},

    {type:"teach", trg:"積(つ)み重(かさ)ね", src:"accumulation / building up over time", pos:"noun", gender:null,
     note:"From 積(つ)み重(かさ)ねる (to pile up/accumulate).\n努力(どりょく)の積(つ)み重(かさ)ね = accumulated effort.",
     example:"A: 日本語(にほんご)の上達(じょうたつ)は毎日(まいにち)の積(つ)み重(かさ)ねです。\nB: 一日(いちにち)少(すこ)しずつでも必(かなら)ず伸(の)びます。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Japanese language improvement is daily accumulation.\nB: Even a little each day will certainly lead to progress.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"積(つ)み重(かさ)ね combines 積(つ)む (to pile up) and 重(かさ)ねる (to layer/repeat). This word captures a deeply Japanese concept: great achievements come from small, consistent daily efforts layered over time. The manufacturing philosophy of カイゼン (continuous improvement) is essentially 積(つ)み重(かさ)ね applied to business processes."},

    {type:"teach", trg:"再読(さいどく)", src:"re-reading / reading again", pos:"noun", gender:null,
     note:"Kanji: 再読(さいどく). 再読(さいどく)する = to re-read.\nReading for deeper understanding the second time.",
     example:"A: 再読(さいどく)すると、初(はじ)めて気(き)づくことが多(おお)いです。\nB: 名作(めいさく)は何度(なんど)読(よ)んでも新(あたら)しい発見(はっけん)がありますね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: When you re-read, there are many things you notice for the first time.\nB: Masterpieces have new discoveries no matter how many times you read them.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"再読(さいどく) uses 再(さい) (again) and 読(どく) (read). Japanese literary culture values 再読(さいどく) highly. The phrase 二度読(にどよ)み、三度読(さんどよ)み (reading twice, three times) is recommended for complex texts. JLPT preparation guides emphasize 再読(さいどく) of practice tests to understand not just the correct answers but why incorrect options are wrong."},

    {type:"teach", trg:"共通点(きょうつうてん)", src:"common point / shared characteristic", pos:"noun", gender:null,
     note:"Kanji: 共通点(きょうつうてん). 共通点(きょうつうてん)を見(み)つける = to find common points.\n共通点(きょうつうてん)と相違点(そういてん) = similarities and differences.",
     example:"A: 二(ふた)つの文化(ぶんか)の共通点(きょうつうてん)と相違点(そういてん)を考(かんが)えましょう。\nB: 比較(ひかく)文化論(ぶんかろん)の基本(きほん)ですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Let us think about the similarities and differences between two cultures.\nB: That is the foundation of comparative cultural studies.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"共通点(きょうつうてん) uses 共通(きょうつう) (shared/common) and 点(てん) (point). Finding 共通点(きょうつうてん) between different domains is a key analytical skill. JLPT reading often asks what two passages have in common. In Japanese education, comparing 共通点(きょうつうてん) and 相違点(そういてん) (differences) is a standard analytical framework applied from elementary school through university."},

    {type:"mc", q:"積(つ)み重(かさ)ね captures the Japanese concept that:", opts:["Speed is more important than consistency","Great results come from small daily efforts over time","Only natural talent matters","Practice is unnecessary"], ans:"Great results come from small daily efforts over time",
     hint:"This word embodies the belief that consistent s... e... layer into significant achievements."},

    {type:"fb", s:"JLPTに合格(ごうかく)するためには{1}的(てき)な勉強(べんきょう)が必要(ひつよう)です。\n(Planned study is needed to pass the JLPT.)", a:"計画(けいかく)", opts:["計画(けいかく)","慎重(しんちょう)","概要(がいよう)","要旨(ようし)"], sSrc:"Planned study is needed to pass the JLPT.",
     hint:"The noun meaning 'plan' or 'planning,' a systematic approach to achieving a goal."},

    {type:"match", pairs:[{trg:"合格(ごうかく)",src:"passing (exam)"},{trg:"読(よ)み解(と)く",src:"read and comprehend deeply"},{trg:"要旨(ようし)",src:"gist/main points"},{trg:"文脈(ぶんみゃく)",src:"context"}]},

    {type:"fb", s:"日本語(にほんご)の上達(じょうたつ)は毎日(まいにち)の{1}です。\n(Japanese language improvement is daily accumulation.)", a:"積(つ)み重(かさ)ね", opts:["積(つ)み重(かさ)ね","勉強(べんきょう)","試験(しけん)","計画(けいかく)"], sSrc:"Japanese language improvement is daily accumulation.",
     hint:"The noun for building something up layer by layer over time."},

    {type:"match", pairs:[{trg:"考(かんが)え方(かた)",src:"way of thinking"},{trg:"慎重(しんちょう)",src:"careful/cautious"},{trg:"積(つ)み重(かさ)ね",src:"accumulation"},{trg:"共通点(きょうつうてん)",src:"common point"}]},

    {type:"tip", title:"B2 Complete: Your Next Steps",
     text:"You have completed B2 Japanese. Key accomplishments:\n\n1. 14 specialized domains from nominalization to cybersecurity\n2. 400+ B2-level vocabulary items across all domains\n3. Advanced grammar: にほかならない, をもって, つつある\n4. Formal connectors: すなわち, いっぽう, にもかかわらず\n5. Cross-domain analytical vocabulary\n\nFor JLPT N1:\n- Read Japanese newspapers daily (NHK News Web)\n- Listen to podcasts and lectures\n- Practice reading comprehension with time limits\n- Review all B2 vocabulary systematically",
     deepDive:{title:"The Road to N1",
      text:"JLPT N1 requires approximately 10,000 vocabulary items and 200+ grammar patterns.\n\nYour B2 vocabulary covers the core academic and social vocabulary tested on N1. To continue:\n\n1. Vocabulary: Add 10-20 new words daily from N1 word lists.\n2. Grammar: Study the remaining N1 patterns (approximately 80-100 beyond what you have learned).\n3. Reading: Practice with full-length N1 reading sections. Focus on speed and accuracy.\n4. Listening: Train with NHK Radio News (slower pace) then TV news (natural speed).\n\nRemember: 積(つ)み重(かさ)ね. Consistent daily effort is the path to N1 合格(ごうかく)."}},

    {type:"mc", q:"The most important strategy for JLPT reading comprehension is:", opts:["Reading every word carefully from start to finish","First grasping the outline, then re-reading for details","Guessing all answers without reading","Only reading the questions, not the passages"], ans:"First grasping the outline, then re-reading for details",
     hint:"概要(がいよう)をつかむ (grasp the o...) f..., t... 再読(さいどく) (re-read) for specific answers."},
  ]
};
export default BATCH2_L_2;
