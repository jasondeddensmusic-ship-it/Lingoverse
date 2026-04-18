// Batch 8 – Unit 23 (B1.3 Nominalization): Abstract Nouns & Concepts
const BATCH8_L1 = {
  id:"jav2_u23l_b8_1", title:"抽象的(ちゅうしょうてき)な名詞(めいし)", icon:"💡", xp:15, board:true,
  steps:[
    {type:"intro", title:"抽象的(ちゅうしょうてき)な名詞(めいし)",
     desc:"Master abstract nouns and conceptual vocabulary essential for intellectual discussion. These words let you express ideas, values, and principles at an advanced level.",
     goals:["Use abstract concept words in discussion","Express values and principles","Navigate intellectual and philosophical vocabulary"]},

    {type:"teach", trg:"可能性(かのうせい)", src:"possibility / potential", pos:"noun", gender:null,
     note:"Kanji: 可能性. 可能性(かのうせい)がある = there is a possibility.\n可能性(かのうせい)が高(たか)い = highly likely.",
     example:"A: 成功(せいこう)する可能性(かのうせい)はどのくらいですか？\nB: かなり高(たか)いと思(おも)います。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: What is the possibility of success?\nB: I think it is quite high.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"可能性(かのうせい) is formed from かのう (possible) + せい (nature/quality). The せい suffix creates abstract nouns from adjectives: 重要性(じゅうようせい) (importance), 信頼性(しんらいせい) (reliability), 創造性(そうぞうせい) (creativity). Mastering this suffix unlocks hundreds of abstract nouns."},

    {type:"teach", trg:"実現(じつげん)する", src:"to realize / to make real / to achieve", pos:"verb", gender:null,
     note:"Kanji: 実現. 夢(ゆめ)を実現(じつげん)する = to realize a dream.\n実現可能(じつげんかのう) = achievable.",
     example:"A: 目標(もくひょう)を実現(じつげん)するために頑張(がんば)ります。\nB: 応援(おうえん)しています。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I will work hard to achieve my goals.\nB: I am cheering you on.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"実現(じつげん) combines 実 (real/fruit) and 現 (appear). It is stronger than 叶(かな)える because it implies making something concrete and visible. Companies talk about ビジョンの実現(じつげん) (realizing a vision). SDGs are called 持続可能(じぞくかのう)な開発(かいはつ)目標(もくひょう)の実現(じつげん) (realization of sustainable development goals)."},

    {type:"teach", trg:"価値観(かちかん)", src:"values / sense of values", pos:"noun", gender:null,
     note:"Kanji: 価値観. 価値観(かちかん)が違(ちが)う = values differ.\n多様(たよう)な価値観(かちかん) = diverse values.",
     example:"A: 価値観(かちかん)は人(ひと)それぞれです。\nB: お互(たが)いに尊重(そんちょう)することが大切(たいせつ)ですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Everyone has different values.\nB: Mutually respecting each other is important.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"価値観(かちかん) is a key concept in modern Japanese discourse. 世代間(せだいかん)の価値観(かちかん)の違(ちが)い (differences in values between generations) explains many social tensions. Traditional Japanese 価値観(かちかん) emphasized group harmony, while younger generations prioritize 自己実現(じこじつげん) (self-realization)."},

    {type:"teach", trg:"原則(げんそく)", src:"principle / fundamental rule", pos:"noun", gender:null,
     note:"Kanji: 原則. 原則的(げんそくてき)に = in principle.\n原則(げんそく)として = as a rule.",
     example:"A: 原則(げんそく)として残業(ざんぎょう)は禁止(きんし)です。\nB: 例外(れいがい)はありますか？\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: In principle, overtime is prohibited.\nB: Are there exceptions?\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"原則(げんそく) is essential in legal, business, and academic Japanese. 原則的(げんそくてき)に (in principle) is a useful qualifier that implies exceptions may exist. The phrase 法(ほう)の原則(げんそく) (principles of law) and 男女平等(だんじょびょうどう)の原則(げんそく) (principle of gender equality) appear in constitution discussions."},

    {type:"teach", trg:"本質(ほんしつ)", src:"essence / true nature / substance", pos:"noun", gender:null,
     note:"Kanji: 本質. 問題(もんだい)の本質(ほんしつ) = the essence of the problem.\n本質的(ほんしつてき) = essential.",
     example:"A: 問題(もんだい)の本質(ほんしつ)を理解(りかい)しましょう。\nB: 表面的(ひょうめんてき)な現象(げんしょう)だけ見(み)ていてはだめですね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Let us understand the essence of the problem.\nB: We must not look only at surface phenomena.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"本質(ほんしつ) (本質) combines 本 (root/origin) and 質 (quality/nature). Japanese philosophy values 本質(ほんしつ)を見(み)る (seeing the true nature of things). In business, 本質的(ほんしつてき)な問題(もんだい) (fundamental problems) are distinguished from 表面的(ひょうめんてき)な問題(もんだい) (surface problems)."},

    {type:"mc", q:"What suffix creates abstract nouns from adjectives (like 可能性(かのうせい) from かのう)?", opts:["せい","かん","りょく","てき"], ans:"せい",
     hint:"This suffix means 'nature' or 'quality' and turns adjectives into abstract concepts."},

    {type:"teach", trg:"影響力(えいきょうりょく)", src:"influence / power of influence", pos:"noun", gender:null,
     note:"影響(えいきょう) (influence) + 力(りょく) (power). 影響力(えいきょうりょく)のある人(ひと) = influential person.\n力(りょく) suffix = power/ability.",
     example:"A: SNSの影響力(えいきょうりょく)は大(おお)きいです。\nB: 情報(じょうほう)リテラシーが大事(だいじ)ですね。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: The influence of social media is great.\nB: Information literacy is important.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"The 力(りょく) suffix creates 'power of' nouns: 想像力(そうぞうりょく) (imagination power), 集中力(しゅうちゅうりょく) (concentration power), 体力(たいりょく) (physical strength), 記憶力(きおくりょく) (memory power). Mastering 力(りょく) compounds dramatically expands your abstract vocabulary."},

    {type:"teach", trg:"見方(みかた)", src:"perspective / way of seeing / viewpoint", pos:"noun", gender:null,
     note:"見(み) (seeing) + 方(かた) (way). 見方(みかた)を変(か)える = to change perspective.\nDifferent from 味方(みかた) (ally).",
     example:"A: 見方(みかた)を変(か)えると違(ちが)う答(こた)えが見(み)えます。\nB: 発想(はっそう)の転換(てんかん)ですね。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: If you change your perspective, different answers become visible.\nB: That is a shift in thinking.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"見方(みかた) (見方) is distinct from 味方(みかた) (ally) in kanji. The 方(かた) suffix creates 'way of' nouns: 考(かんが)え方(かた) (way of thinking), 話(はな)し方(かた) (way of speaking), 生(い)き方(かた) (way of living). These compound nouns are essential for expressing abstract concepts."},

    {type:"teach", trg:"発想(はっそう)", src:"idea / concept / way of thinking", pos:"noun", gender:null,
     note:"Kanji: 発想. 発想(はっそう)を変(か)える = to change one's way of thinking.\n発想力(はっそうりょく) = creative thinking ability.",
     example:"A: 新(あたら)しい発想(はっそう)が生(う)まれました。\nB: 詳(くわ)しく教(おし)えてください。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: A new idea was born.\nB: Please tell me in detail.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"発想(はっそう) emphasizes the creative origin of an idea. 発想(はっそう)の転換(てんかん) (paradigm shift, literally 'switching of conception') is a common business buzzword. 逆転(ぎゃくてん)の発想(はっそう) (reverse thinking) means approaching problems from the opposite direction, which Japanese innovation culture values."},

    {type:"teach", trg:"思考(しこう)", src:"thinking / thought process", pos:"noun", gender:null,
     note:"Kanji: 思考. 論理的(ろんりてき)思考(しこう) = logical thinking.\n批判的(ひはんてき)思考(しこう) = critical thinking.",
     example:"A: 論理的(ろんりてき)思考(しこう)を鍛(きた)えましょう。\nB: どうすればいいですか？\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Let us train our logical thinking.\nB: How should we do that?\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"思考(しこう) has two common kanji: 思考(しこう) (thinking/cognition) and 志向(しこう) (orientation/tendency). 論理的(ろんりてき)思考(しこう) (logical thinking) and 批判的(ひはんてき)思考(しこう) (critical thinking) are emphasized in modern Japanese education reform, moving away from 記憶型(きおくがた) (memorization-based) learning."},

    {type:"teach", trg:"想像力(そうぞうりょく)", src:"imagination / creative power", pos:"noun", gender:null,
     note:"想像(そうぞう) (imagination) + 力(りょく) (power).\n想像力(そうぞうりょく)豊(ゆた)か = rich in imagination.",
     example:"A: 子供(こども)の想像力(そうぞうりょく)は素晴(すば)らしいです。\nB: 大人(おとな)も学(まな)ぶべきですね。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Children's imagination is wonderful.\nB: Adults should learn from it too.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"Japanese distinguishes 想像(そうぞう) (imagination) from 創造(そうぞう) (creation). Both are read the same but have different kanji. 想像力(そうぞうりょく) with 想像 means imaginative power; with 創造 means creative power. This homophone pair confuses even native speakers in speech."},

    {type:"teach", trg:"貢献(こうけん)する", src:"to contribute", pos:"verb", gender:null,
     note:"Kanji: 貢献. 社会(しゃかい)に貢献(こうけん)する = to contribute to society.\n貢献度(こうけんど) = contribution level.",
     example:"A: 地域(ちいき)社会(しゃかい)に貢献(こうけん)したいです。\nB: ボランティアから始(はじ)めませんか？\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: I want to contribute to the local community.\nB: Why not start with volunteering?\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"貢献(こうけん) combines 貢 (tribute) and 献 (offering). In Japanese job evaluations, 貢献度(こうけんど) (contribution degree) directly affects promotion. 社会(しゃかい)貢献(こうけん) (social contribution) is a pillar of Japanese corporate philosophy, reflecting the belief that businesses exist to serve society."},

    {type:"fb", s:"問題(もんだい)の{1}を理解(りかい)しましょう。\n(Let us understand the essence of the problem.)", a:"本質(ほんしつ)", opts:["本質(ほんしつ)","可能性(かのうせい)","影響(えいきょう)","発想(はっそう)"], sSrc:"Let us understand the essence of the problem.",
     hint:"This word means the true nature or fundamental substance of something."},

    {type:"teach", trg:"基準(きじゅん)", src:"standard / criterion / benchmark", pos:"noun", gender:null,
     note:"Kanji: 基準. 評価(ひょうか)基準(きじゅん) = evaluation criteria.\n安全(あんぜん)基準(きじゅん) = safety standard.",
     example:"A: 判断(はんだん)の基準(きじゅん)は何(なに)ですか？\nB: 費用(ひよう)対(たい)効果(こうか)です。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: What is the criterion for judgment?\nB: Cost-effectiveness.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"基準(きじゅん) is the backbone of Japanese quality control. ISO standards are 国際(こくさい)基準(きじゅん). Japan's strict 食品(しょくひん)安全(あんぜん)基準(きじゅん) (food safety standards) are among the world's toughest. The phrase 基準(きじゅん)を満(み)たす (to meet standards) drives manufacturing excellence."},

    {type:"teach", trg:"動機(どうき)", src:"motivation / motive", pos:"noun", gender:null,
     note:"Kanji: 動機. 志望(しぼう)動機(どうき) = motivation for applying.\n犯行(はんこう)動機(どうき) = criminal motive.",
     example:"A: 日本語(にほんご)を学(まな)ぶ動機(どうき)は何(なに)ですか？\nB: 日本(にほん)で働(はたら)きたいからです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: What is your motivation for learning Japanese?\nB: Because I want to work in Japan.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"志望(しぼう)動機(どうき) (motivation for applying) is the most-asked interview question in Japan. Students prepare and memorize their 動機(どうき) meticulously. A good 動機(どうき) shows passion, logic, and connection to the company. In mystery novels, 犯行(はんこう)動機(どうき) (criminal motive) is the detective's key question."},

    {type:"match", pairs:[{trg:"可能性(かのうせい)",src:"possibility"},{trg:"価値観(かちかん)",src:"values"},{trg:"本質(ほんしつ)",src:"essence"},{trg:"発想(はっそう)",src:"idea/concept"},{trg:"動機(どうき)",src:"motivation"}],
     hint:"Match each abstract noun with its English meaning."},

    {type:"mc", q:"What is the difference between そうぞう (想像) and そうぞう (創造)?", opts:["Imagination vs. Creation (same pronunciation, different kanji)","Past vs. Future","Abstract vs. Concrete","They mean the same thing"], ans:"Imagination vs. Creation (same pronunciation, different kanji)",
     hint:"These homophone pairs are distinguished by their k... but sound identical in speech."},

    {type:"fb", s:"日本語(にほんご)を学(まな)ぶ{1}は何(なに)ですか？\n(What is your motivation for learning Japanese?)", a:"動機(どうき)", opts:["動機(どうき)","基準(きじゅん)","価値観(かちかん)","原則(げんそく)"], sSrc:"What is your motivation for learning Japanese?",
     hint:"This word asks about the driving reason behind an action."},

    {type:"mc", q:"What does the 力(りょく) suffix add to a noun?", opts:["Power or ability","Size or quantity","Feeling or emotion","Time or period"], ans:"Power or ability",
     hint:"影響力(えいきょうりょく) (influence p...), 想像力(そうぞうりょく) (imagination p...) all use this suffix."}
  ,{type:"match",pairs:[{trg:"実現(じつげん)する",src:"to realize / to make real / to achieve"},{trg:"原則(げんそく)",src:"principle / fundamental rule"},{trg:"見方(みかた)",src:"perspective / way of seeing / viewpoint"},{trg:"思考(しこう)",src:"thinking / thought process"},{trg:"貢献(こうけん)する",src:"to contribute"},{trg:"基準(きじゅん)",src:"standard / criterion / benchmark"}]}]
};
export default BATCH8_L1;
