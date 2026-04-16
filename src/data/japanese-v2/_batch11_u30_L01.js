// Batch 11 – Unit 30 (B2.3 Philosophy): Abstract Thought & Reasoning
const BATCH11_L1 = {
  id:"jav2_u30l_b11_1", title:"しこうとろんり", icon:"💡", xp:15, board:true,
  steps:[
    {type:"intro", title:"しこうとろんり",
     desc:"Learn vocabulary for abstract reasoning, logic, and philosophical discussion. These words enable participation in intellectual discourse at the B2 level.",
     goals:["Express logical reasoning and abstract concepts","Use philosophical vocabulary in discussion","Construct complex arguments with precision"]},

    {type:"teach", trg:"しこう", src:"thinking / thought process", pos:"noun", gender:null,
     note:"しこうする = to think deeply.\nろんりてきしこう = logical thinking.",
     example:"A: ろんりてきなしこうりょくをみにつけたいです。\nB: まいにちのれんしゅうがだいじです。",
     exampleSrc:"A: I want to develop logical thinking ability.\nB: Daily practice is important.",
     funFact:"しこう (思考) is deeper than かんがえる (to think). It implies systematic mental processing. ひはんてきしこう (critical thinking) is increasingly taught in Japanese schools, moving away from rote memorization. しこうていし (stopping to think) is valued in Zen practice as a path to insight."},

    {type:"teach", trg:"ろんり", src:"logic / reasoning", pos:"noun", gender:null,
     note:"ろんりてき = logical.\nろんりがとおる = the logic holds up.",
     example:"A: そのろんりにはむじゅんがあります。\nB: どこにむじゅんがありますか？",
     exampleSrc:"A: There is a contradiction in that logic.\nB: Where is the contradiction?",
     funFact:"ろんり (論理) is the framework of argument. ろんりてき (logical) is high praise in academic contexts. Japanese debate culture values ろんりてきなせつめい (logical explanation) over emotional appeals. The expression ろんりがとおらない (the logic doesn't hold) is a polite way to say an argument is flawed."},

    {type:"teach", trg:"むじゅん", src:"contradiction", pos:"noun", gender:null,
     note:"むじゅんする = to contradict.\nFrom Chinese: the shield-spear paradox.",
     example:"A: あなたのいけんにはむじゅんがあります。\nB: どういうむじゅんですか？",
     exampleSrc:"A: There is a contradiction in your opinion.\nB: What contradiction?",
     funFact:"むじゅん (矛盾) literally means 'spear-shield' from an ancient Chinese parable: a merchant claimed his spear could pierce any shield and his shield could block any spear. The contradiction was obvious. This word elegantly captures logical impossibility in a single compound. It is used daily in Japanese argumentation."},

    {type:"teach", trg:"ぜんてい", src:"premise / assumption", pos:"noun", gender:null,
     note:"ぜんていとする = to assume as a premise.\nぜんていじょうけん = preconditions.",
     example:"A: そのぜんていがまちがっているかもしれません。\nB: たしかに、もういちどかくにんしましょう。",
     exampleSrc:"A: That premise might be wrong.\nB: Indeed, let's verify again.",
     funFact:"ぜんてい (前提) means 'placed before' (前 = before, 提 = present). Good arguments build on solid ぜんてい. Japanese academic writing requires explicitly stating ぜんてい. In business, 'please let me confirm the ぜんてい' is a respected opening that ensures everyone starts from the same assumptions."},

    {type:"teach", trg:"けつろん", src:"conclusion", pos:"noun", gender:null,
     note:"けつろんをだす = reach a conclusion.\nけつろんからいうと = to conclude.",
     example:"A: けつろんからいうと、このけいかくはむりです。\nB: なぜそうおもいますか？",
     exampleSrc:"A: To conclude, this plan is impossible.\nB: Why do you think so?",
     funFact:"けつろん (結論) is the destination of logical argument. Japanese essay structure often places the けつろん at the end (起承転結 style), unlike English which states it first. けつろんをさきにいう (state the conclusion first) is a modern business communication skill imported from Western rhetoric."},

    {type:"teach", trg:"こんきょ", src:"basis / grounds / evidence", pos:"noun", gender:null,
     note:"こんきょをしめす = show evidence.\nかがくてきこんきょ = scientific basis.",
     example:"A: そのしゅちょうのこんきょはなんですか？\nB: さいきんのちょうさデータにもとづいています。",
     exampleSrc:"A: What is the basis for that claim?\nB: It is based on recent survey data.",
     funFact:"こんきょ (根拠) literally means 'root' (根) + 'base' (拠). Without こんきょ, arguments are dismissed as こんきょのない (groundless). Japanese academic and legal discourse demands explicit こんきょ for every claim. エビデンスベースド (evidence-based) approaches increasingly influence Japanese policy."},

    {type:"teach", trg:"しゅかんてき", src:"subjective", pos:"adj", gender:null,
     note:"Opposite: きゃっかんてき (objective).\nしゅかんてきないけん = subjective opinion.",
     example:"A: それはしゅかんてきなはんだんではありませんか？\nB: きゃっかんてきなデータでせつめいします。",
     exampleSrc:"A: Isn't that a subjective judgment?\nB: I will explain with objective data.",
     funFact:"The しゅかんてき/きゃっかんてき (subjective/objective) distinction is fundamental in Japanese academic writing. Students learn to clearly label which statements are facts (きゃっかんてき) and which are opinions (しゅかんてき). The suffix てき converts nouns to adjectives: ろんりてき (logical), かがくてき (scientific), こくさいてき (international)."},

    {type:"teach", trg:"きゃっかんてき", src:"objective", pos:"adj", gender:null,
     note:"きゃっかんてきなじじつ = objective fact.\nきゃっかんてきにみると = looking at it objectively.",
     example:"A: きゃっかんてきにみて、どうおもいますか？\nB: データはかいぜんけいこうをしめしています。",
     exampleSrc:"A: Looking at it objectively, what do you think?\nB: The data shows an improvement trend.",
     funFact:"きゃっかんてき (客観的) is prized in Japanese professional contexts. きゃっかんてきなひょうか (objective evaluation) is the ideal in performance reviews. However, complete objectivity is debated: にほんてつがく (Japanese philosophy) through Zen and Nishida Kitaro questions whether true objectivity is achievable."},

    {type:"teach", trg:"ほんしつ", src:"essence / true nature", pos:"noun", gender:null,
     note:"もんだいのほんしつ = the essence of the problem.\nほんしつてき = essential.",
     example:"A: もんだいのほんしつはなんだとおもいますか？\nB: コミュニケーションぶそくがほんしつてきなげんいんです。",
     exampleSrc:"A: What do you think is the essence of the problem?\nB: Lack of communication is the essential cause.",
     funFact:"ほんしつ (本質) means 'original nature' (本 = origin, 質 = quality). Japanese philosophy deeply engages with ほんしつ: what is the ほんしつ of beauty (美の本質)? of life (生の本質)? In business, ほんしつをみぬく (seeing through to the essence) is considered the mark of great leadership."},

    {type:"teach", trg:"てつがく", src:"philosophy", pos:"noun", gender:null,
     note:"てつがくする = to philosophize.\nてつがくしゃ = philosopher.",
     example:"A: にほんのてつがくにきょうみがあります。\nB: ぜんやにしだきたろうがゆうめいですね。",
     exampleSrc:"A: I am interested in Japanese philosophy.\nB: Zen and Nishida Kitaro are famous.",
     funFact:"てつがく (哲学) was coined in the Meiji era to translate 'philosophy.' Japan has a rich philosophical tradition blending Zen Buddhism, Confucianism, and Western thought. にしだきたろう (Nishida Kitaro) founded the Kyoto School, creating a uniquely Japanese philosophy. Modern Japanese てつがくカフェ (philosophy cafes) are popular public discussion venues."},

    {type:"teach", trg:"かちかん", src:"values / value system", pos:"noun", gender:null,
     note:"かちかんのちがい = difference in values.\nかちかんのたようか = diversification of values.",
     example:"A: せだいかんのかちかんのちがいはおおきいです。\nB: でも、たがいにそんちょうすることがだいじですね。",
     exampleSrc:"A: The difference in values between generations is large.\nB: But respecting each other is important.",
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
