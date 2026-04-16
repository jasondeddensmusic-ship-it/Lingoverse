// Batch 7 – Unit 30 (B2.2 Philosophy): Philosophical & Abstract Thought
const BATCH7_L1 = {
  id:"jav2_u30l_b7_1", title:"てつがくてきしこう", icon:"🔮", xp:15, board:true,
  steps:[
    {type:"intro", title:"てつがくてきしこう",
     desc:"Learn vocabulary for philosophical and abstract thought. These JLPT N2/N1 terms enable deep discussions about existence, meaning, and human nature.",
     goals:["Discuss philosophical concepts in Japanese","Use abstract reasoning vocabulary","Express complex ideas about existence and meaning"]},

    {type:"teach", trg:"そんざい", src:"existence / being", pos:"noun", gender:null,
     note:"そんざいする = to exist. そんざいかん = sense of presence.\nそんざいいぎ = reason for being.",
     example:"A: にんげんのそんざいいぎとはなんでしょうか。\nB: ふかいしつもんですね。",
     exampleSrc:"A: What is the meaning of human existence?\nB: That is a deep question.",
     funFact:"そんざい (存在) is central to Japanese philosophy. The concept of 無 (む, nothingness/void) in Zen Buddhism explores the nature of そんざい. The word いきがい (生きがい, reason for living) became globally famous as Japan's answer to 'why do we exist?' そんざいいぎ and いきがい explore the same deep territory."},

    {type:"teach", trg:"ほんしつ", src:"essence / true nature", pos:"noun", gender:null,
     note:"もんだいのほんしつ = the essence of the problem.\nほんしつてき = essential/fundamental.",
     example:"A: もんだいのほんしつをかんがえましょう。\nB: ひょうめんだけみていてはいけません。",
     exampleSrc:"A: Let us think about the essence of the problem.\nB: We must not only look at the surface.",
     funFact:"ほんしつ (本質) combines 本 (root/origin) and 質 (quality/nature). Japanese business and academic culture values ほんしつ thinking: getting to the root cause (根本原因) rather than treating symptoms. Toyota's '5 Whys' method asks 'why?' five times to reach the ほんしつ of a problem."},

    {type:"teach", trg:"かんねん", src:"concept / idea / notion", pos:"noun", gender:null,
     note:"こていかんねん = fixed idea/prejudice.\nかんねんてき = conceptual.",
     example:"A: じゆうというかんねんはくにによってちがいます。\nB: ぶんかてきなはいけいがえいきょうしますね。",
     exampleSrc:"A: The concept of freedom differs by country.\nB: Cultural background has an influence.",
     funFact:"かんねん (観念) originally meant Buddhist meditation/contemplation (観 = observe, 念 = thought). It evolved to mean 'concept' or 'idea.' The phrase 観念する also means 'to resign oneself' or 'to give up,' reflecting the Buddhist teaching of accepting reality through deep contemplation."},

    {type:"teach", trg:"しゅかんてき", src:"subjective", pos:"adj", gender:null,
     note:"Na-adjective. Opposite: きゃっかんてき (objective).\nしゅかんてきないけん = subjective opinion.",
     example:"A: それはしゅかんてきないけんですね。\nB: きゃっかんてきなデータもひつようです。",
     exampleSrc:"A: That is a subjective opinion.\nB: Objective data is also needed.",
     funFact:"しゅかんてき (主観的) vs きゃっかんてき (客観的) is a fundamental distinction in Japanese academic writing. Students are taught to present きゃっかんてき evidence before しゅかんてき analysis. However, Japanese aesthetics (wabi-sabi, mono no aware) are inherently しゅかんてき, valuing personal perception over objective measurement."},

    {type:"teach", trg:"ぜんてい", src:"premise / precondition / assumption", pos:"noun", gender:null,
     note:"ぜんていじょうけん = prerequisite.\nぜんていとして = on the premise that.",
     example:"A: このぎろんのぜんていをかくにんしましょう。\nB: まず、きほんてきなじじつからはじめます。",
     exampleSrc:"A: Let us confirm the premises of this discussion.\nB: First, let us start from basic facts.",
     funFact:"ぜんてい (前提) literally means 'presented beforehand.' Japanese debate structure always clarifies ぜんてい before argumentation. Unstated ぜんてい (暗黙の前提) often cause miscommunication across cultures. Japanese communication relies heavily on shared ぜんてい that do not need stating, which confuses outsiders."},

    {type:"teach", trg:"もうてん", src:"blind spot / overlooked point", pos:"noun", gender:null,
     note:"もうてんをつく = to point out a blind spot.\nしこうのもうてん = blind spot in thinking.",
     example:"A: そのけいかくにはもうてんがあります。\nB: どこですか？おしえてください。",
     exampleSrc:"A: There is a blind spot in that plan.\nB: Where? Please tell me.",
     funFact:"もうてん (盲点) literally means 'blind spot' (盲 = blind, 点 = point). In Japanese business, pointing out もうてん is valued because it prevents costly mistakes. However, identifying someone else's もうてん requires diplomatic skill. The phrase 気づかなかった (I did not notice) is a polite way to acknowledge your own もうてん."},

    {type:"teach", trg:"ぎもん", src:"doubt / question / skepticism", pos:"noun", gender:null,
     note:"ぎもんにおもう = to feel doubtful.\nぎもんてん = point of doubt.",
     example:"A: このけっかにぎもんをかんじます。\nB: どのてんにぎもんがありますか？",
     exampleSrc:"A: I feel doubt about these results.\nB: On which points do you have doubt?",
     funFact:"ぎもん (疑問) combines 疑 (doubt/suspect) and 問 (question). Japanese academic culture values constructive ぎもん. Asking good questions is considered a sign of intelligence. However, in social settings, expressing too much ぎもん can seem confrontational. The art is in the framing."},

    {type:"teach", trg:"けつろん", src:"conclusion", pos:"noun", gender:null,
     note:"けつろんをだす = to reach a conclusion.\nけつろんとして = in conclusion.",
     example:"A: けつろんとして、このけいかくをすすめるべきです。\nB: さんせいです。はじめましょう。",
     exampleSrc:"A: In conclusion, we should proceed with this plan.\nB: I agree. Let us begin.",
     funFact:"けつろん (結論) combines 結 (tie/conclude) and 論 (argument/theory). In Japanese academic writing, けつろん comes at the END, unlike English where the thesis often comes first. This bottom-up structure (起承転結, introduction-development-twist-conclusion) reflects traditional Japanese narrative structure."},

    {type:"teach", trg:"ていぎ", src:"definition", pos:"noun", gender:null,
     note:"ていぎする = to define.\nまずていぎをあきらかにする = first, clarify the definition.",
     example:"A: まず「しあわせ」のていぎをかんがえましょう。\nB: むずかしいていぎですね。",
     exampleSrc:"A: First, let us think about the definition of 'happiness.'\nB: That is a difficult definition.",
     funFact:"ていぎ (定義) is crucial in Japanese academic discourse. Discussions often begin with ていぎ clarification because Japanese words can carry different nuances. The same word may mean different things in different contexts. Precise ていぎ prevents the miscommunication that ambiguous Japanese language naturally invites."},

    {type:"teach", trg:"むじゅん", src:"contradiction", pos:"noun", gender:null,
     note:"むじゅんする = to contradict. むじゅんてん = point of contradiction.\nFrom an ancient Chinese parable.",
     example:"A: そのせつめいにはむじゅんがあります。\nB: どこがむじゅんしていますか？",
     exampleSrc:"A: There is a contradiction in that explanation.\nB: Where is the contradiction?",
     funFact:"むじゅん (矛盾) literally means 'spear-shield,' from a Chinese parable: a merchant sold a spear that pierces anything and a shield that blocks anything. What happens when the spear hits the shield? This paradox gave Japanese the word for contradiction. It is one of the most elegant etymologies in the language."},

    {type:"teach", trg:"ぜったいてき", src:"absolute", pos:"adj", gender:null,
     note:"Na-adjective. Opposite: そうたいてき (relative).\nぜったいてきなしんり = absolute truth.",
     example:"A: ぜったいてきなこたえはありますか？\nB: じんせいではそうたいてきなことがおおいです。",
     exampleSrc:"A: Is there an absolute answer?\nB: In life, most things are relative.",
     funFact:"ぜったいてき (絶対的) vs そうたいてき (相対的) reflects a deep philosophical divide. Japanese thinking tends toward そうたいてき (relative/contextual) rather than ぜったいてき (absolute). This influences everything from moral judgments to business decisions. 'It depends on the situation' (ばあいによる) is a very Japanese response."},

    {type:"teach", trg:"ちょっかん", src:"intuition / gut feeling", pos:"noun", gender:null,
     note:"ちょっかんてき = intuitive.\nちょっかんでわかる = to understand intuitively.",
     example:"A: ちょっかんでは、このほうがいいとおもいます。\nB: ろんりてきなりゆうもかんがえましょう。",
     exampleSrc:"A: Intuitively, I think this is better.\nB: Let us also think of logical reasons.",
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
