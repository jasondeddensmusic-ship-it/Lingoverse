// Batch 11 – Unit 30 (B2.3 Philosophy): Abstract Thought & Reasoning
const BATCH11_L1 = {
  id:"jav2_u30l_b11_1", title:"しこうとろんり", icon:"💡", xp:15, board:true,
  steps:[
    {type:"intro", title:"しこうとろんり",
     desc:"Learn vocabulary for abstract reasoning, logic, and philosophical discussion. These words enable participation in intellectual discourse at the B2 level.",
     goals:["Express logical reasoning and abstract concepts","Use philosophical vocabulary in discussion","Construct complex arguments with precision"]},

    {type:"teach", trg:"しこう", src:"thinking / thought process", pos:"noun", gender:null,
     note:"しこうする = to think deeply.\nろんりてきしこう = logical thinking.",
     example:"A: ろんりてきなしこうりょくをみにつけたいです。\nB: まいにちのれんしゅうがだいじです。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: I want to develop logical thinking ability.\nB: Daily practice is important.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"しこう (思考) is deeper than かんがえる (to think). It implies systematic mental processing. ひはんてきしこう (critical thinking) is increasingly taught in Japanese schools, moving away from rote memorization. しこうていし (stopping to think) is valued in Zen practice as a path to insight."},

    {type:"teach", trg:"ろんり", src:"logic / reasoning", pos:"noun", gender:null,
     note:"ろんりてき = logical.\nろんりがとおる = the logic holds up.",
     example:"A: そのろんりにはむじゅんがあります。\nB: どこにむじゅんがありますか？\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: There is a contradiction in that logic.\nB: Where is the contradiction?\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"ろんり (論理) is the framework of argument. ろんりてき (logical) is high praise in academic contexts. Japanese debate culture values ろんりてきなせつめい (logical explanation) over emotional appeals. The expression ろんりがとおらない (the logic doesn't hold) is a polite way to say an argument is flawed."},

    {type:"teach", trg:"むじゅん", src:"contradiction", pos:"noun", gender:null,
     note:"むじゅんする = to contradict.\nFrom Chinese: the shield-spear paradox.",
     example:"A: あなたのいけんにはむじゅんがあります。\nB: どういうむじゅんですか？\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: There is a contradiction in your opinion.\nB: What contradiction?\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"むじゅん (矛盾) literally means 'spear-shield' from an ancient Chinese parable: a merchant claimed his spear could pierce any shield and his shield could block any spear. The contradiction was obvious. This word elegantly captures logical impossibility in a single compound. It is used daily in Japanese argumentation."},

    {type:"teach", trg:"ぜんてい", src:"premise / assumption", pos:"noun", gender:null,
     note:"ぜんていとする = to assume as a premise.\nぜんていじょうけん = preconditions.",
     example:"A: そのぜんていがまちがっているかもしれません。\nB: たしかに、もういちどかくにんしましょう。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: That premise might be wrong.\nB: Indeed, let's verify again.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"ぜんてい (前提) means 'placed before' (前 = before, 提 = present). Good arguments build on solid ぜんてい. Japanese academic writing requires explicitly stating ぜんてい. In business, 'please let me confirm the ぜんてい' is a respected opening that ensures everyone starts from the same assumptions."},

    {type:"teach", trg:"けつろん", src:"conclusion", pos:"noun", gender:null,
     note:"けつろんをだす = reach a conclusion.\nけつろんからいうと = to conclude.",
     example:"A: けつろんからいうと、このけいかくはむりです。\nB: なぜそうおもいますか？\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: To conclude, this plan is impossible.\nB: Why do you think so?\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"けつろん (結論) is the destination of logical argument. Japanese essay structure often places the けつろん at the end (起承転結 style), unlike English which states it first. けつろんをさきにいう (state the conclusion first) is a modern business communication skill imported from Western rhetoric."},

    {type:"teach", trg:"こんきょ", src:"basis / grounds / evidence", pos:"noun", gender:null,
     note:"こんきょをしめす = show evidence.\nかがくてきこんきょ = scientific basis.",
     example:"A: そのしゅちょうのこんきょはなんですか？\nB: さいきんのちょうさデータにもとづいています。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: What is the basis for that claim?\nB: It is based on recent survey data.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"こんきょ (根拠) literally means 'root' (根) + 'base' (拠). Without こんきょ, arguments are dismissed as こんきょのない (groundless). Japanese academic and legal discourse demands explicit こんきょ for every claim. エビデンスベースド (evidence-based) approaches increasingly influence Japanese policy."},

    {type:"teach", trg:"しゅかんてき", src:"subjective", pos:"adj", gender:null,
     note:"Opposite: きゃっかんてき (objective).\nしゅかんてきないけん = subjective opinion.",
     example:"A: それはしゅかんてきなはんだんではありませんか？\nB: きゃっかんてきなデータでせつめいします。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Isn't that a subjective judgment?\nB: I will explain with objective data.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"The しゅかんてき/きゃっかんてき (subjective/objective) distinction is fundamental in Japanese academic writing. Students learn to clearly label which statements are facts (きゃっかんてき) and which are opinions (しゅかんてき). The suffix てき converts nouns to adjectives: ろんりてき (logical), かがくてき (scientific), こくさいてき (international)."},

    {type:"teach", trg:"きゃっかんてき", src:"objective", pos:"adj", gender:null,
     note:"きゃっかんてきなじじつ = objective fact.\nきゃっかんてきにみると = looking at it objectively.",
     example:"A: きゃっかんてきにみて、どうおもいますか？\nB: データはかいぜんけいこうをしめしています。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Looking at it objectively, what do you think?\nB: The data shows an improvement trend.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"きゃっかんてき (客観的) is prized in Japanese professional contexts. きゃっかんてきなひょうか (objective evaluation) is the ideal in performance reviews. However, complete objectivity is debated: にほんてつがく (Japanese philosophy) through Zen and Nishida Kitaro questions whether true objectivity is achievable."},

    {type:"teach", trg:"ほんしつ", src:"essence / true nature", pos:"noun", gender:null,
     note:"もんだいのほんしつ = the essence of the problem.\nほんしつてき = essential.",
     example:"A: もんだいのほんしつはなんだとおもいますか？\nB: コミュニケーションぶそくがほんしつてきなげんいんです。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: What do you think is the essence of the problem?\nB: Lack of communication is the essential cause.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"ほんしつ (本質) means 'original nature' (本 = origin, 質 = quality). Japanese philosophy deeply engages with ほんしつ: what is the ほんしつ of beauty (美の本質)? of life (生の本質)? In business, ほんしつをみぬく (seeing through to the essence) is considered the mark of great leadership."},

    {type:"teach", trg:"てつがく", src:"philosophy", pos:"noun", gender:null,
     note:"てつがくする = to philosophize.\nてつがくしゃ = philosopher.",
     example:"A: にほんのてつがくにきょうみがあります。\nB: ぜんやにしだきたろうがゆうめいですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: I am interested in Japanese philosophy.\nB: Zen and Nishida Kitaro are famous.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"てつがく (哲学) was coined in the Meiji era to translate 'philosophy.' Japan has a rich philosophical tradition blending Zen Buddhism, Confucianism, and Western thought. にしだきたろう (Nishida Kitaro) founded the Kyoto School, creating a uniquely Japanese philosophy. Modern Japanese てつがくカフェ (philosophy cafes) are popular public discussion venues."},

    {type:"teach", trg:"かちかん", src:"values / value system", pos:"noun", gender:null,
     note:"かちかんのちがい = difference in values.\nかちかんのたようか = diversification of values.",
     example:"A: せだいかんのかちかんのちがいはおおきいです。\nB: でも、たがいにそんちょうすることがだいじですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: The difference in values between generations is large.\nB: But respecting each other is important.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"かちかん (価値観) is central to modern Japanese social discourse. わかものとこうれいしゃのかちかんのちがい (value differences between youth and elderly) drives many social debates. Japan's かちかん is shifting: from しゅうだんしゅぎ (collectivism) toward こじんしゅぎ (individualism), though the shift is gradual and complex."},

    // Quiz steps
    {type:"mc", q:"「むじゅん」のもとのはなしはなんですか？",
     opts:["A merchant selling an invincible spear and shield","A king's riddle","A monk's koan","A samurai's code"],
     ans:"A merchant selling an invincible spear and shield",
     hint:"The kanji 矛 (s...) and 盾 (s...) come from a Chinese parable about contradictory claims."},

    {type:"fb", s:"そのしゅちょうの{1}はなんですか？",
     a:["こんきょ"],
     opts:["こんきょ","けつろん","ぜんてい","むじゅん"],
     hint:"You are asking for the evidence or basis that supports the claim. What grounds is the argument built on?",
     sSrc:"What is the basis for that claim?"},

    {type:"match", pairs:[
      {trg:"しゅかんてき", src:"subjective"},
      {trg:"きゃっかんてき", src:"objective"},
      {trg:"ぜんてい", src:"premise"},
      {trg:"けつろん", src:"conclusion"}
    ]},

    {type:"mc", q:"にほんのエッセイのこうぞう「きしょうてんけつ」はけつろんをどこにおきますか？",
     opts:["At the end","At the beginning","In the middle","There is no conclusion"],
     ans:"At the end",
     hint:"Traditional Japanese essay structure builds up through introduction, development, turn, and then reaches the conclusion last."},

    {type:"fb", s:"もんだいの{1}はコミュニケーションぶそくです。",
     a:["ほんしつ"],
     opts:["ほんしつ","けつろん","ぜんてい","こんきょ"],
     hint:"The speaker identifies the fundamental, essential nature of the problem. This word means 'essence' or 'true nature.'",
     sSrc:"The essence of the problem is lack of communication."},

    {type:"mc", q:"「てき」のせつびじはどんなやくわりですか？",
     opts:["Turns nouns into adjectives","Turns verbs into nouns","Makes words plural","Creates past tense"],
     ans:"Turns nouns into adjectives",
     hint:"This suffix converts concept nouns into descriptive adjectives: ろんり > ろんりてき (logical), かがく > かがくてき (scientific)."}
  ]
};
export default BATCH11_L1;
