// Batch 8 – Unit 23 (B1.3 Nominalization): Abstract Nouns & Concepts
const BATCH8_L1 = {
  id:"jav2_u23l_b8_1", title:"ちゅうしょうてきなめいし", icon:"💡", xp:15, board:true,
  steps:[
    {type:"intro", title:"ちゅうしょうてきなめいし",
     desc:"Master abstract nouns and conceptual vocabulary essential for intellectual discussion. These words let you express ideas, values, and principles at an advanced level.",
     goals:["Use abstract concept words in discussion","Express values and principles","Navigate intellectual and philosophical vocabulary"]},

    {type:"teach", trg:"かのうせい", src:"possibility / potential", pos:"noun", gender:null,
     note:"Kanji: 可能性. かのうせいがある = there is a possibility.\nかのうせいがたかい = highly likely.",
     example:"A: せいこうするかのうせいはどのくらいですか？\nB: かなりたかいとおもいます。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: What is the possibility of success?\nB: I think it is quite high.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"かのうせい is formed from かのう (possible) + せい (nature/quality). The せい suffix creates abstract nouns from adjectives: しゅうようせい (importance), しんらいせい (reliability), そうぞうせい (creativity). Mastering this suffix unlocks hundreds of abstract nouns."},

    {type:"teach", trg:"じつげんする", src:"to realize / to make real / to achieve", pos:"verb", gender:null,
     note:"Kanji: 実現. ゆめをじつげんする = to realize a dream.\nじつげんかのう = achievable.",
     example:"A: もくひょうをじつげんするためにがんばります。\nB: おうえんしています。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I will work hard to achieve my goals.\nB: I am cheering you on.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"じつげん combines 実 (real/fruit) and 現 (appear). It is stronger than かなえる because it implies making something concrete and visible. Companies talk about ビジョンのじつげん (realizing a vision). SDGs are called じぞくかのうなかいはつもくひょうのじつげん (realization of sustainable development goals)."},

    {type:"teach", trg:"かちかん", src:"values / sense of values", pos:"noun", gender:null,
     note:"Kanji: 価値観. かちかんがちがう = values differ.\nたようなかちかん = diverse values.",
     example:"A: かちかんはひとそれぞれです。\nB: たがいにそんちょうすることがたいせつですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Everyone has different values.\nB: Mutually respecting each other is important.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"かちかん (価値観) is a key concept in modern Japanese discourse. せだいかんのかちかんのちがい (differences in values between generations) explains many social tensions. Traditional Japanese かちかん emphasized group harmony, while younger generations prioritize じこじつげん (self-realization)."},

    {type:"teach", trg:"げんそく", src:"principle / fundamental rule", pos:"noun", gender:null,
     note:"Kanji: 原則. げんそくてきに = in principle.\nげんそくとして = as a rule.",
     example:"A: げんそくとしてざんぎょうはきんしです。\nB: れいがいはありますか？\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: In principle, overtime is prohibited.\nB: Are there exceptions?\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"げんそく is essential in legal, business, and academic Japanese. げんそくてきに (in principle) is a useful qualifier that implies exceptions may exist. The phrase ほうのげんそく (principles of law) and だんじょびょうどうのげんそく (principle of gender equality) appear in constitution discussions."},

    {type:"teach", trg:"ほんしつ", src:"essence / true nature / substance", pos:"noun", gender:null,
     note:"Kanji: 本質. もんだいのほんしつ = the essence of the problem.\nほんしつてき = essential.",
     example:"A: もんだいのほんしつをりかいしましょう。\nB: ひょうめんてきなげんしょうだけみていてはだめですね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Let us understand the essence of the problem.\nB: We must not look only at surface phenomena.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"ほんしつ (本質) combines 本 (root/origin) and 質 (quality/nature). Japanese philosophy values ほんしつをみる (seeing the true nature of things). In business, ほんしつてきなもんだい (fundamental problems) are distinguished from ひょうめんてきなもんだい (surface problems)."},

    {type:"mc", q:"What suffix creates abstract nouns from adjectives (like かのうせい from かのう)?", opts:["せい","かん","りょく","てき"], ans:"せい",
     hint:"This suffix means 'nature' or 'quality' and turns adjectives into abstract concepts."},

    {type:"teach", trg:"えいきょうりょく", src:"influence / power of influence", pos:"noun", gender:null,
     note:"えいきょう (influence) + りょく (power). えいきょうりょくのあるひと = influential person.\nりょく suffix = power/ability.",
     example:"A: SNSのえいきょうりょくはおおきいです。\nB: じょうほうリテラシーがだいじですね。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: The influence of social media is great.\nB: Information literacy is important.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"The りょく suffix creates 'power of' nouns: そうぞうりょく (imagination power), しゅうちゅうりょく (concentration power), たいりょく (physical strength), きおくりょく (memory power). Mastering りょく compounds dramatically expands your abstract vocabulary."},

    {type:"teach", trg:"みかた", src:"perspective / way of seeing / viewpoint", pos:"noun", gender:null,
     note:"み (seeing) + かた (way). みかたをかえる = to change perspective.\nDifferent from みかた (ally).",
     example:"A: みかたをかえるとちがうこたえがみえます。\nB: はっそうのてんかんですね。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: If you change your perspective, different answers become visible.\nB: That is a shift in thinking.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"みかた (見方) is distinct from みかた (味方, ally) in kanji. The かた suffix creates 'way of' nouns: かんがえかた (way of thinking), はなしかた (way of speaking), いきかた (way of living). These compound nouns are essential for expressing abstract concepts."},

    {type:"teach", trg:"はっそう", src:"idea / concept / way of thinking", pos:"noun", gender:null,
     note:"Kanji: 発想. はっそうをかえる = to change one's way of thinking.\nはっそうりょく = creative thinking ability.",
     example:"A: あたらしいはっそうがうまれました。\nB: くわしくおしえてください。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: A new idea was born.\nB: Please tell me in detail.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"はっそう (発想) emphasizes the creative origin of an idea. はっそうのてんかん (paradigm shift, literally 'switching of conception') is a common business buzzword. ぎゃくてんのはっそう (reverse thinking) means approaching problems from the opposite direction, which Japanese innovation culture values."},

    {type:"teach", trg:"しこう", src:"thinking / thought process", pos:"noun", gender:null,
     note:"Kanji: 思考. ろんりてきしこう = logical thinking.\nひはんてきしこう = critical thinking.",
     example:"A: ろんりてきしこうをきたえましょう。\nB: どうすればいいですか？\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Let us train our logical thinking.\nB: How should we do that?\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"しこう has two common kanji: 思考 (thinking/cognition) and 志向 (orientation/tendency). ろんりてきしこう (logical thinking) and ひはんてきしこう (critical thinking) are emphasized in modern Japanese education reform, moving away from きおくがた (memorization-based) learning."},

    {type:"teach", trg:"そうぞうりょく", src:"imagination / creative power", pos:"noun", gender:null,
     note:"そうぞう (imagination) + りょく (power).\nそうぞうりょくゆたか = rich in imagination.",
     example:"A: こどものそうぞうりょくはすばらしいです。\nB: おとなもまなぶべきですね。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Children's imagination is wonderful.\nB: Adults should learn from it too.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"Japanese distinguishes そうぞう (想像, imagination) from そうぞう (創造, creation). Both are read the same but have different kanji. そうぞうりょく with 想像 means imaginative power; with 創造 means creative power. This homophone pair confuses even native speakers in speech."},

    {type:"teach", trg:"こうけんする", src:"to contribute", pos:"verb", gender:null,
     note:"Kanji: 貢献. しゃかいにこうけんする = to contribute to society.\nこうけんど = contribution level.",
     example:"A: ちいきしゃかいにこうけんしたいです。\nB: ボランティアからはじめませんか？\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: I want to contribute to the local community.\nB: Why not start with volunteering?\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"こうけん (貢献) combines 貢 (tribute) and 献 (offering). In Japanese job evaluations, こうけんど (contribution degree) directly affects promotion. しゃかいこうけん (social contribution) is a pillar of Japanese corporate philosophy, reflecting the belief that businesses exist to serve society."},

    {type:"fb", s:"もんだいの{1}をりかいしましょう。\n(Let us understand the essence of the problem.)", a:"ほんしつ", opts:["ほんしつ","かのうせい","えいきょう","はっそう"], sSrc:"Let us understand the essence of the problem.",
     hint:"This word means the true nature or fundamental substance of something."},

    {type:"teach", trg:"きじゅん", src:"standard / criterion / benchmark", pos:"noun", gender:null,
     note:"Kanji: 基準. ひょうかきじゅん = evaluation criteria.\nあんぜんきじゅん = safety standard.",
     example:"A: はんだんのきじゅんはなんですか？\nB: ひようたいこうかです。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: What is the criterion for judgment?\nB: Cost-effectiveness.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"きじゅん (基準) is the backbone of Japanese quality control. ISO standards are こくさいきじゅん. Japan's strict しょくひんあんぜんきじゅん (food safety standards) are among the world's toughest. The phrase きじゅんをみたす (to meet standards) drives manufacturing excellence."},

    {type:"teach", trg:"どうき", src:"motivation / motive", pos:"noun", gender:null,
     note:"Kanji: 動機. しぼうどうき = motivation for applying.\nはんこうどうき = criminal motive.",
     example:"A: にほんごをまなぶどうきはなんですか？\nB: にほんではたらきたいからです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: What is your motivation for learning Japanese?\nB: Because I want to work in Japan.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"しぼうどうき (motivation for applying) is the most-asked interview question in Japan. Students prepare and memorize their どうき meticulously. A good どうき shows passion, logic, and connection to the company. In mystery novels, はんこうどうき (criminal motive) is the detective's key question."},

    {type:"match", pairs:[{trg:"かのうせい",src:"possibility"},{trg:"かちかん",src:"values"},{trg:"ほんしつ",src:"essence"},{trg:"はっそう",src:"idea/concept"},{trg:"どうき",src:"motivation"}],
     hint:"Match each abstract noun with its English meaning."},

    {type:"mc", q:"What is the difference between そうぞう (想像) and そうぞう (創造)?", opts:["Imagination vs. Creation (same pronunciation, different kanji)","Past vs. Future","Abstract vs. Concrete","They mean the same thing"], ans:"Imagination vs. Creation (same pronunciation, different kanji)",
     hint:"These homophone pairs are distinguished by their k... but sound identical in speech."},

    {type:"fb", s:"にほんごをまなぶ{1}はなんですか？\n(What is your motivation for learning Japanese?)", a:"どうき", opts:["どうき","きじゅん","かちかん","げんそく"], sSrc:"What is your motivation for learning Japanese?",
     hint:"This word asks about the driving reason behind an action."},

    {type:"mc", q:"What does the りょく suffix add to a noun?", opts:["Power or ability","Size or quantity","Feeling or emotion","Time or period"], ans:"Power or ability",
     hint:"えいきょうりょく (influence p...), そうぞうりょく (imagination p...) all use this suffix."}
  ]
};
export default BATCH8_L1;
