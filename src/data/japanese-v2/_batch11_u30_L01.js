// Batch 11 – Unit 30 (B2.3 Philosophy): Abstract Thought & Reasoning
const BATCH11_L1 = {
  id:"jav2_u30l_b11_1", title:"思考(しこう)と論理(ろんり)", icon:"💡", xp:15, board:true,
  steps:[
    {type:"intro", title:"思考(しこう)と論理(ろんり)",
     desc:"Learn vocabulary for abstract reasoning, logic, and philosophical discussion. These words enable participation in intellectual discourse at the B2 level.",
     goals:["Express logical reasoning and abstract concepts","Use philosophical vocabulary in discussion","Construct complex arguments with precision"]},

    {type:"teach", trg:"思考(しこう)", src:"thinking / thought process", pos:"noun", gender:null,
     note:"思考(しこう)する = to think deeply.\n論理的(ろんりてき)思考(しこう) = logical thinking.",
     example:"A: 論理的(ろんりてき)な思考力(しこうりょく)を身(み)につけたいです。\nB: 毎日(まいにち)の練習(れんしゅう)が大事(だいじ)です。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: I want to develop logical thinking ability.\nB: Daily practice is important.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"思考(しこう) is deeper than 考(かんが)える (to think). It implies systematic mental processing. 批判的(ひはんてき)思考(しこう) (critical thinking) is increasingly taught in Japanese schools, moving away from rote memorization. 思考停止(しこうていし) (stopping to think) is valued in Zen practice as a path to insight."},

    {type:"teach", trg:"論理(ろんり)", src:"logic / reasoning", pos:"noun", gender:null,
     note:"論理的(ろんりてき) = logical.\n論理(ろんり)が通(とお)る = the logic holds up.",
     example:"A: その論理(ろんり)には矛盾(むじゅん)があります。\nB: どこに矛盾(むじゅん)がありますか？\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: There is a contradiction in that logic.\nB: Where is the contradiction?\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"論理(ろんり) is the framework of argument. 論理的(ろんりてき) (logical) is high praise in academic contexts. Japanese debate culture values 論理的(ろんりてき)な説明(せつめい) (logical explanation) over emotional appeals. The expression 論理(ろんり)が通(とお)らない (the logic doesn't hold) is a polite way to say an argument is flawed."},

    {type:"teach", trg:"矛盾(むじゅん)", src:"contradiction", pos:"noun", gender:null,
     note:"矛盾(むじゅん)する = to contradict.\nFrom Chinese: the shield-spear paradox.",
     example:"A: あなたの意見(いけん)には矛盾(むじゅん)があります。\nB: どういう矛盾(むじゅん)ですか？\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: There is a contradiction in your opinion.\nB: What contradiction?\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"矛盾(むじゅん) literally means 'spear-shield' from an ancient Chinese parable: a merchant claimed his spear could pierce any shield and his shield could block any spear. The contradiction was obvious. This word elegantly captures logical impossibility in a single compound. It is used daily in Japanese argumentation."},

    {type:"teach", trg:"前提(ぜんてい)", src:"premise / assumption", pos:"noun", gender:null,
     note:"前提(ぜんてい)とする = to assume as a premise.\n前提条件(ぜんていじょうけん) = preconditions.",
     example:"A: その前提(ぜんてい)が間違(まちが)っているかもしれません。\nB: 確(たし)かに、もう一度(いちど)確認(かくにん)しましょう。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: That premise might be wrong.\nB: Indeed, let's verify again.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"前提(ぜんてい) means 'placed before' (前(まえ) = before, 提(てい) = present). Good arguments build on solid 前提(ぜんてい). Japanese academic writing requires explicitly stating 前提(ぜんてい). In business, 'please let me confirm the 前提(ぜんてい)' is a respected opening that ensures everyone starts from the same assumptions."},

    {type:"teach", trg:"結論(けつろん)", src:"conclusion", pos:"noun", gender:null,
     note:"結論(けつろん)を出(だ)す = reach a conclusion.\n結論(けつろん)から言(い)うと = to conclude.",
     example:"A: 結論(けつろん)から言(い)うと、この計画(けいかく)は無理(むり)です。\nB: なぜそう思(おも)いますか？\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: To conclude, this plan is impossible.\nB: Why do you think so?\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"結論(けつろん) is the destination of logical argument. Japanese essay structure often places the 結論(けつろん) at the end (起承転結(きしょうてんけつ) style), unlike English which states it first. 結論(けつろん)を先(さき)に言(い)う (state the conclusion first) is a modern business communication skill imported from Western rhetoric."},

    {type:"teach", trg:"根拠(こんきょ)", src:"basis / grounds / evidence", pos:"noun", gender:null,
     note:"根拠(こんきょ)を示(しめ)す = show evidence.\n科学的(かがくてき)根拠(こんきょ) = scientific basis.",
     example:"A: その主張(しゅちょう)の根拠(こんきょ)は何(なん)ですか？\nB: 最近(さいきん)の調査(ちょうさ)データにもとづいています。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: What is the basis for that claim?\nB: It is based on recent survey data.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"根拠(こんきょ) literally means 'root' (根(こん)) + 'base' (拠(きょ)). Without 根拠(こんきょ), arguments are dismissed as 根拠(こんきょ)のない (groundless). Japanese academic and legal discourse demands explicit 根拠(こんきょ) for every claim. エビデンスベースド (evidence-based) approaches increasingly influence Japanese policy."},

    {type:"teach", trg:"主観的(しゅかんてき)", src:"subjective", pos:"adj", gender:null,
     note:"Opposite: 客観的(きゃっかんてき) (objective).\n主観的(しゅかんてき)な意見(いけん) = subjective opinion.",
     example:"A: それは主観的(しゅかんてき)な判断(はんだん)ではありませんか？\nB: 客観的(きゃっかんてき)なデータで説明(せつめい)します。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Isn't that a subjective judgment?\nB: I will explain with objective data.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"The 主観的(しゅかんてき)/客観的(きゃっかんてき) (subjective/objective) distinction is fundamental in Japanese academic writing. Students learn to clearly label which statements are facts (客観的(きゃっかんてき)) and which are opinions (主観的(しゅかんてき)). The suffix てき converts nouns to adjectives: 論理的(ろんりてき) (logical), 科学的(かがくてき) (scientific), 国際的(こくさいてき) (international)."},

    {type:"teach", trg:"客観的(きゃっかんてき)", src:"objective", pos:"adj", gender:null,
     note:"客観的(きゃっかんてき)な事実(じじつ) = objective fact.\n客観的(きゃっかんてき)に見(み)ると = looking at it objectively.",
     example:"A: 客観的(きゃっかんてき)に見(み)て、どう思(おも)いますか？\nB: データは改善(かいぜん)傾向(けいこう)を示(しめ)しています。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Looking at it objectively, what do you think?\nB: The data shows an improvement trend.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"客観的(きゃっかんてき) is prized in Japanese professional contexts. 客観的(きゃっかんてき)な評価(ひょうか) (objective evaluation) is the ideal in performance reviews. However, complete objectivity is debated: 日本哲学(にほんてつがく) (Japanese philosophy) through Zen and Nishida Kitaro questions whether true objectivity is achievable."},

    {type:"teach", trg:"本質(ほんしつ)", src:"essence / true nature", pos:"noun", gender:null,
     note:"問題(もんだい)の本質(ほんしつ) = the essence of the problem.\n本質的(ほんしつてき) = essential.",
     example:"A: 問題(もんだい)の本質(ほんしつ)は何(なん)だと思(おも)いますか？\nB: コミュニケーション不足(ぶそく)が本質的(ほんしつてき)な原因(げんいん)です。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: What do you think is the essence of the problem?\nB: Lack of communication is the essential cause.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"本質(ほんしつ) means 'original nature' (本(ほん) = origin, 質(しつ) = quality). Japanese philosophy deeply engages with 本質(ほんしつ): what is the 本質(ほんしつ) of beauty (美(び)の本質(ほんしつ))? of life (生(せい)の本質(ほんしつ))? In business, 本質(ほんしつ)を見(み)ぬく (seeing through to the essence) is considered the mark of great leadership."},

    {type:"teach", trg:"哲学(てつがく)", src:"philosophy", pos:"noun", gender:null,
     note:"哲学(てつがく)する = to philosophize.\n哲学者(てつがくしゃ) = philosopher.",
     example:"A: 日本(にほん)の哲学(てつがく)に興味(きょうみ)があります。\nB: 禅(ぜん)や西田幾多郎(にしだきたろう)が有名(ゆうめい)ですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: I am interested in Japanese philosophy.\nB: Zen and Nishida Kitaro are famous.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"哲学(てつがく) was coined in the Meiji era to translate 'philosophy.' Japan has a rich philosophical tradition blending Zen Buddhism, Confucianism, and Western thought. 西田幾多郎(にしだきたろう) (Nishida Kitaro) founded the Kyoto School, creating a uniquely Japanese philosophy. Modern Japanese 哲学(てつがく)カフェ (philosophy cafes) are popular public discussion venues."},

    {type:"teach", trg:"価値観(かちかん)", src:"values / value system", pos:"noun", gender:null,
     note:"価値観(かちかん)の違(ちが)い = difference in values.\n価値観(かちかん)の多様化(たようか) = diversification of values.",
     example:"A: 世代間(せだいかん)の価値観(かちかん)の違(ちが)いは大(おお)きいです。\nB: でも、お互(たが)いに尊重(そんちょう)することが大事(だいじ)ですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: The difference in values between generations is large.\nB: But respecting each other is important.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"価値観(かちかん) is central to modern Japanese social discourse. 若者(わかもの)と高齢者(こうれいしゃ)の価値観(かちかん)の違(ちが)い (value differences between youth and elderly) drives many social debates. Japan's 価値観(かちかん) is shifting: from 集団主義(しゅうだんしゅぎ) (collectivism) toward 個人主義(こじんしゅぎ) (individualism), though the shift is gradual and complex."},

    // Quiz steps
    {type:"mc", q:"「矛盾(むじゅん)」の元(もと)の話(はなし)は何(なん)ですか？",
     opts:["A merchant selling an invincible spear and shield","A king's riddle","A monk's koan","A samurai's code"],
     ans:"A merchant selling an invincible spear and shield",
     hint:"The kanji 矛(ほこ) (s...) and 盾(たて) (s...) come from a Chinese parable about contradictory claims."},

    {type:"fb", s:"その主張(しゅちょう)の{1}は何(なん)ですか？",
     a:["根拠(こんきょ)"],
     opts:["根拠(こんきょ)","結論(けつろん)","前提(ぜんてい)","矛盾(むじゅん)"],
     hint:"You are asking for the evidence or basis that supports the claim. What grounds is the argument built on?",
     sSrc:"What is the basis for that claim?"},

    {type:"match", pairs:[
      {trg:"主観的(しゅかんてき)", src:"subjective"},
      {trg:"客観的(きゃっかんてき)", src:"objective"},
      {trg:"前提(ぜんてい)", src:"premise"},
      {trg:"結論(けつろん)", src:"conclusion"}
    ]},

    {type:"mc", q:"日本(にほん)のエッセイの構造(こうぞう)「起承転結(きしょうてんけつ)」は結論(けつろん)をどこに置(お)きますか？",
     opts:["There is no conclusion","At the end","At the beginning","In the middle"],
     ans:"At the end",
     hint:"Traditional Japanese essay structure builds up through introduction, development, turn, and then reaches the conclusion last."},

    {type:"fb", s:"問題(もんだい)の{1}はコミュニケーション不足(ぶそく)です。",
     a:["本質(ほんしつ)"],
     opts:["本質(ほんしつ)","結論(けつろん)","前提(ぜんてい)","根拠(こんきょ)"],
     hint:"The speaker identifies the fundamental, essential nature of the problem. This word means 'essence' or 'true nature.'",
     sSrc:"The essence of the problem is lack of communication."},

    {type:"mc", q:"「的(てき)」の接尾辞(せつびじ)はどんな役割(やくわり)ですか？",
     opts:["Makes words plural","Creates past tense","Turns nouns into adjectives","Turns verbs into nouns"],
     ans:"Turns nouns into adjectives",
     hint:"This suffix transforms abstract concepts into descriptive modifiers: 論理(ろんり) > 論理的(ろんりてき) (logical), 科学(かがく) > 科学的(かがくてき) (scientific)."}
  ,{type:"match",pairs:[{trg:"思考(しこう)",src:"thinking / thought process"},{trg:"論理(ろんり)",src:"logic / reasoning"},{trg:"矛盾(むじゅん)",src:"contradiction"},{trg:"哲学(てつがく)",src:"philosophy"},{trg:"価値観(かちかん)",src:"values / value system"}]}]
};
export default BATCH11_L1;
