// Batch 7 – Unit 30 (B2.2 Philosophy): Philosophical & Abstract Thought
const BATCH7_L1 = {
  id:"jav2_u30l_b7_1", title:"てつがくてきしこう", icon:"🔮", xp:15, board:true,
  steps:[
    {type:"intro", title:"てつがくてきしこう",
     desc:"Learn vocabulary for philosophical and abstract thought. These JLPT N2/N1 terms enable deep discussions about existence, meaning, and human nature.",
     goals:["Discuss philosophical concepts in Japanese","Use abstract reasoning vocabulary","Express complex ideas about existence and meaning"]},

    {type:"teach", trg:"そんざい", src:"existence / being", pos:"noun", gender:null,
     note:"そんざいする = to exist. そんざいかん = sense of presence.\nそんざいいぎ = reason for being.",
     example:"A: にんげんのそんざいいぎとはなんでしょうか。\nB: ふかいしつもんですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: What is the meaning of human existence?\nB: That is a deep question.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"そんざい (存在) is central to Japanese philosophy. The concept of 無 (む, nothingness/void) in Zen Buddhism explores the nature of そんざい. The word いきがい (生きがい, reason for living) became globally famous as Japan's answer to 'why do we exist?' そんざいいぎ and いきがい explore the same deep territory."},

    {type:"teach", trg:"ほんしつ", src:"essence / true nature", pos:"noun", gender:null,
     note:"もんだいのほんしつ = the essence of the problem.\nほんしつてき = essential/fundamental.",
     example:"A: もんだいのほんしつをかんがえましょう。\nB: ひょうめんだけみていてはいけません。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Let us think about the essence of the problem.\nB: We must not only look at the surface.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"ほんしつ (本質) combines 本 (root/origin) and 質 (quality/nature). Japanese business and academic culture values ほんしつ thinking: getting to the root cause (根本原因) rather than treating symptoms. Toyota's '5 Whys' method asks 'why?' five times to reach the ほんしつ of a problem."},

    {type:"teach", trg:"かんねん", src:"concept / idea / notion", pos:"noun", gender:null,
     note:"こていかんねん = fixed idea/prejudice.\nかんねんてき = conceptual.",
     example:"A: じゆうというかんねんはくにによってちがいます。\nB: ぶんかてきなはいけいがえいきょうしますね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: The concept of freedom differs by country.\nB: Cultural background has an influence.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"かんねん (観念) originally meant Buddhist meditation/contemplation (観 = observe, 念 = thought). It evolved to mean 'concept' or 'idea.' The phrase 観念する also means 'to resign oneself' or 'to give up,' reflecting the Buddhist teaching of accepting reality through deep contemplation."},

    {type:"teach", trg:"しゅかんてき", src:"subjective", pos:"adj", gender:null,
     note:"Na-adjective. Opposite: きゃっかんてき (objective).\nしゅかんてきないけん = subjective opinion.",
     example:"A: それはしゅかんてきないけんですね。\nB: きゃっかんてきなデータもひつようです。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: That is a subjective opinion.\nB: Objective data is also needed.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"しゅかんてき (主観的) vs きゃっかんてき (客観的) is a fundamental distinction in Japanese academic writing. Students are taught to present きゃっかんてき evidence before しゅかんてき analysis. However, Japanese aesthetics (wabi-sabi, mono no aware) are inherently しゅかんてき, valuing personal perception over objective measurement."},

    {type:"teach", trg:"ぜんてい", src:"premise / precondition / assumption", pos:"noun", gender:null,
     note:"ぜんていじょうけん = prerequisite.\nぜんていとして = on the premise that.",
     example:"A: このぎろんのぜんていをかくにんしましょう。\nB: まず、きほんてきなじじつからはじめます。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Let us confirm the premises of this discussion.\nB: First, let us start from basic facts.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"ぜんてい (前提) literally means 'presented beforehand.' Japanese debate structure always clarifies ぜんてい before argumentation. Unstated ぜんてい (暗黙の前提) often cause miscommunication across cultures. Japanese communication relies heavily on shared ぜんてい that do not need stating, which confuses outsiders."},

    {type:"teach", trg:"もうてん", src:"blind spot / overlooked point", pos:"noun", gender:null,
     note:"もうてんをつく = to point out a blind spot.\nしこうのもうてん = blind spot in thinking.",
     example:"A: そのけいかくにはもうてんがあります。\nB: どこですか？おしえてください。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: There is a blind spot in that plan.\nB: Where? Please tell me.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"もうてん (盲点) literally means 'blind spot' (盲 = blind, 点 = point). In Japanese business, pointing out もうてん is valued because it prevents costly mistakes. However, identifying someone else's もうてん requires diplomatic skill. The phrase 気づかなかった (I did not notice) is a polite way to acknowledge your own もうてん."},

    {type:"teach", trg:"ぎもん", src:"doubt / question / skepticism", pos:"noun", gender:null,
     note:"ぎもんにおもう = to feel doubtful.\nぎもんてん = point of doubt.",
     example:"A: このけっかにぎもんをかんじます。\nB: どのてんにぎもんがありますか？\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: I feel doubt about these results.\nB: On which points do you have doubt?\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"ぎもん (疑問) combines 疑 (doubt/suspect) and 問 (question). Japanese academic culture values constructive ぎもん. Asking good questions is considered a sign of intelligence. However, in social settings, expressing too much ぎもん can seem confrontational. The art is in the framing."},

    {type:"teach", trg:"けつろん", src:"conclusion", pos:"noun", gender:null,
     note:"けつろんをだす = to reach a conclusion.\nけつろんとして = in conclusion.",
     example:"A: けつろんとして、このけいかくをすすめるべきです。\nB: さんせいです。はじめましょう。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: In conclusion, we should proceed with this plan.\nB: I agree. Let us begin.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"けつろん (結論) combines 結 (tie/conclude) and 論 (argument/theory). In Japanese academic writing, けつろん comes at the END, unlike English where the thesis often comes first. This bottom-up structure (起承転結, introduction-development-twist-conclusion) reflects traditional Japanese narrative structure."},

    {type:"teach", trg:"ていぎ", src:"definition", pos:"noun", gender:null,
     note:"ていぎする = to define.\nまずていぎをあきらかにする = first, clarify the definition.",
     example:"A: まず「しあわせ」のていぎをかんがえましょう。\nB: むずかしいていぎですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: First, let us think about the definition of 'happiness.'\nB: That is a difficult definition.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"ていぎ (定義) is crucial in Japanese academic discourse. Discussions often begin with ていぎ clarification because Japanese words can carry different nuances. The same word may mean different things in different contexts. Precise ていぎ prevents the miscommunication that ambiguous Japanese language naturally invites."},

    {type:"teach", trg:"むじゅん", src:"contradiction", pos:"noun", gender:null,
     note:"むじゅんする = to contradict. むじゅんてん = point of contradiction.\nFrom an ancient Chinese parable.",
     example:"A: そのせつめいにはむじゅんがあります。\nB: どこがむじゅんしていますか？\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: There is a contradiction in that explanation.\nB: Where is the contradiction?\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"むじゅん (矛盾) literally means 'spear-shield,' from a Chinese parable: a merchant sold a spear that pierces anything and a shield that blocks anything. What happens when the spear hits the shield? This paradox gave Japanese the word for contradiction. It is one of the most elegant etymologies in the language."},

    {type:"teach", trg:"ぜったいてき", src:"absolute", pos:"adj", gender:null,
     note:"Na-adjective. Opposite: そうたいてき (relative).\nぜったいてきなしんり = absolute truth.",
     example:"A: ぜったいてきなこたえはありますか？\nB: じんせいではそうたいてきなことがおおいです。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Is there an absolute answer?\nB: In life, most things are relative.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"ぜったいてき (絶対的) vs そうたいてき (相対的) reflects a deep philosophical divide. Japanese thinking tends toward そうたいてき (relative/contextual) rather than ぜったいてき (absolute). This influences everything from moral judgments to business decisions. 'It depends on the situation' (ばあいによる) is a very Japanese response."},

    {type:"teach", trg:"ちょっかん", src:"intuition / gut feeling", pos:"noun", gender:null,
     note:"ちょっかんてき = intuitive.\nちょっかんでわかる = to understand intuitively.",
     example:"A: ちょっかんでは、このほうがいいとおもいます。\nB: ろんりてきなりゆうもかんがえましょう。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Intuitively, I think this is better.\nB: Let us also think of logical reasons.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"ちょっかん (直感) is valued alongside logic in Japanese decision-making. The concept of 勘 (かん, intuition/sixth sense) is respected in business. Experienced craftsmen (職人) rely on ちょっかん developed through years of practice. Japanese sword makers, tea masters, and chefs cultivate ちょっかん as a higher form of knowledge."},

    // Quiz steps
    {type:"mc", q:"むじゅん comes from a parable about:",
     opts:["A spear that pierces anything vs a shield that blocks anything","Fire and water fighting","A mountain meeting the sea","Light and darkness"],
     ans:"A spear that pierces anything vs a shield that blocks anything",
     hint:"The merchant's impossible claims created the word for contradiction: 矛 (s...) + 盾 (s...)."},

    {type:"match", pairs:[
      {trg:"そんざい", src:"existence"},
      {trg:"ほんしつ", src:"essence"},
      {trg:"かんねん", src:"concept"},
      {trg:"ぜんてい", src:"premise"},
      {trg:"けつろん", src:"conclusion"}
    ]},

    {type:"fb", s:"もんだいの{1}をかんがえましょう。ひょうめんだけではいけません。",
     a:["ほんしつ"],
     opts:["ほんしつ","けつろん","ぜんてい","ていぎ"],
     hint:"Get to the root cause, not just the surface. This noun means 'essence.'",
     sSrc:"Let us think about the {1} of the problem. Not just the surface."},

    {type:"mc", q:"Japanese academic writing places the けつろん:",
     opts:["At the end (bottom-up structure)","At the beginning (top-down)","In the middle","Nowhere specific"],
     ans:"At the end (bottom-up structure)",
     hint:"Following the 起承転結 s..., the conclusion comes after development and a twist."},

    {type:"fb", s:"それは{1}てきないけんですね。データもひつようです。",
     a:["しゅかん"],
     opts:["しゅかん","きゃっかん","ぜったい","そうたい"],
     hint:"That opinion is based on personal feeling, not data. This word means 'subjective.'",
     sSrc:"That is a {1} opinion. Data is also needed."},

    {type:"mc", q:"Japanese thinking tends to be:",
     opts:["そうたいてき (relative/contextual)","ぜったいてき (absolute)","Neither","Both equally"],
     ans:"そうたいてき (relative/contextual)",
     hint:"'It depends on the situation' is a very Japanese response to moral and practical questions."},

    {type:"match", pairs:[
      {trg:"しゅかんてき", src:"subjective"},
      {trg:"むじゅん", src:"contradiction"},
      {trg:"ぎもん", src:"doubt"},
      {trg:"もうてん", src:"blind spot"},
      {trg:"ちょっかん", src:"intuition"}
    ]},

    {type:"fb", s:"まず「しあわせ」の{1}をあきらかにしましょう。",
     a:["ていぎ"],
     opts:["ていぎ","けつろん","むじゅん","ぜんてい"],
     hint:"Before discussing happiness, we need to clarify what it means. This word means 'definition.'",
     sSrc:"First, let us clarify the {1} of 'happiness.'"}
  ]
};
export default BATCH7_L1;
