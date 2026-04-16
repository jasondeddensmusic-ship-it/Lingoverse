// Batch 8 – Unit 23 (B1.3 Nominalization): Abstract Nouns & Concepts
const BATCH8_L1 = {
  id:"jav2_u23l_b8_1", title:"ちゅうしょうてきなめいし", icon:"💡", xp:15, board:true,
  steps:[
    {type:"intro", title:"ちゅうしょうてきなめいし",
     desc:"Master abstract nouns and conceptual vocabulary essential for intellectual discussion. These words let you express ideas, values, and principles at an advanced level.",
     goals:["Use abstract concept words in discussion","Express values and principles","Navigate intellectual and philosophical vocabulary"]},

    {type:"teach", trg:"かのうせい", src:"possibility / potential", pos:"noun", gender:null,
     note:"Kanji: 可能性. かのうせいがある = there is a possibility.\nかのうせいがたかい = highly likely.",
     example:"A: せいこうするかのうせいはどのくらいですか？\nB: かなりたかいとおもいます。",
     exampleSrc:"A: What is the possibility of success?\nB: I think it is quite high.",
     funFact:"かのうせい is formed from かのう (possible) + せい (nature/quality). The せい suffix creates abstract nouns from adjectives: しゅうようせい (importance), しんらいせい (reliability), そうぞうせい (creativity). Mastering this suffix unlocks hundreds of abstract nouns."},

    {type:"teach", trg:"じつげんする", src:"to realize / to make real / to achieve", pos:"verb", gender:null,
     note:"Kanji: 実現. ゆめをじつげんする = to realize a dream.\nじつげんかのう = achievable.",
     example:"A: もくひょうをじつげんするためにがんばります。\nB: おうえんしています。",
     exampleSrc:"A: I will work hard to achieve my goals.\nB: I am cheering you on.",
     funFact:"じつげん combines 実 (real/fruit) and 現 (appear). It is stronger than かなえる because it implies making something concrete and visible. Companies talk about ビジョンのじつげん (realizing a vision). SDGs are called じぞくかのうなかいはつもくひょうのじつげん (realization of sustainable development goals)."},

    {type:"teach", trg:"かちかん", src:"values / sense of values", pos:"noun", gender:null,
     note:"Kanji: 価値観. かちかんがちがう = values differ.\nたようなかちかん = diverse values.",
     example:"A: かちかんはひとそれぞれです。\nB: たがいにそんちょうすることがたいせつですね。",
     exampleSrc:"A: Everyone has different values.\nB: Mutually respecting each other is important.",
     funFact:"かちかん (価値観) is a key concept in modern Japanese discourse. せだいかんのかちかんのちがい (differences in values between generations) explains many social tensions. Traditional Japanese かちかん emphasized group harmony, while younger generations prioritize じこじつげん (self-realization)."},

    {type:"teach", trg:"げんそく", src:"principle / fundamental rule", pos:"noun", gender:null,
     note:"Kanji: 原則. げんそくてきに = in principle.\nげんそくとして = as a rule.",
     example:"A: げんそくとしてざんぎょうはきんしです。\nB: れいがいはありますか？",
     exampleSrc:"A: In principle, overtime is prohibited.\nB: Are there exceptions?",
     funFact:"げんそく is essential in legal, business, and academic Japanese. げんそくてきに (in principle) is a useful qualifier that implies exceptions may exist. The phrase ほうのげんそく (principles of law) and だんじょびょうどうのげんそく (principle of gender equality) appear in constitution discussions."},

    {type:"teach", trg:"ほんしつ", src:"essence / true nature / substance", pos:"noun", gender:null,
     note:"Kanji: 本質. もんだいのほんしつ = the essence of the problem.\nほんしつてき = essential.",
     example:"A: もんだいのほんしつをりかいしましょう。\nB: ひょうめんてきなげんしょうだけみていてはだめですね。",
     exampleSrc:"A: Let us understand the essence of the problem.\nB: We must not look only at surface phenomena.",
     funFact:"ほんしつ (本質) combines 本 (root/origin) and 質 (quality/nature). Japanese philosophy values ほんしつをみる (seeing the true nature of things). In business, ほんしつてきなもんだい (fundamental problems) are distinguished from ひょうめんてきなもんだい (surface problems)."},

    {type:"mc", q:"What suffix creates abstract nouns from adjectives (like かのうせい from かのう)?", opts:["せい","かん","りょく","てき"], ans:"せい",
     hint:"This suffix means 'nature' or 'quality' and turns adjectives into abstract concepts."},

    {type:"teach", trg:"えいきょうりょく", src:"influence / power of influence", pos:"noun", gender:null,
     note:"えいきょう (influence) + りょく (power). えいきょうりょくのあるひと = influential person.\nりょく suffix = power/ability.",
     example:"A: SNSのえいきょうりょくはおおきいです。\nB: じょうほうリテラシーがだいじですね。",
     exampleSrc:"A: The influence of social media is great.\nB: Information literacy is important.",
     funFact:"The りょく suffix creates 'power of' nouns: そうぞうりょく (imagination power), しゅうちゅうりょく (concentration power), たいりょく (physical strength), きおくりょく (memory power). Mastering りょく compounds dramatically expands your abstract vocabulary."},

    {type:"teach", trg:"みかた", src:"perspective / way of seeing / viewpoint", pos:"noun", gender:null,
     note:"み (seeing) + かた (way). みかたをかえる = to change perspective.\nDifferent from みかた (ally).",
     example:"A: みかたをかえるとちがうこたえがみえます。\nB: はっそうのてんかんですね。",
     exampleSrc:"A: If you change your perspective, different answers become visible.\nB: That is a shift in thinking.",
     funFact:"みかた (見方) is distinct from みかた (味方, ally) in kanji. The かた suffix creates 'way of' nouns: かんがえかた (way of thinking), はなしかた (way of speaking), いきかた (way of living). These compound nouns are essential for expressing abstract concepts."},

    {type:"teach", trg:"はっそう", src:"idea / concept / way of thinking", pos:"noun", gender:null,
     note:"Kanji: 発想. はっそうをかえる = to change one's way of thinking.\nはっそうりょく = creative thinking ability.",
     example:"A: あたらしいはっそうがうまれました。\nB: くわしくおしえてください。",
     exampleSrc:"A: A new idea was born.\nB: Please tell me in detail.",
     funFact:"はっそう (発想) emphasizes the creative origin of an idea. はっそうのてんかん (paradigm shift, literally 'switching of conception') is a common business buzzword. ぎゃくてんのはっそう (reverse thinking) means approaching problems from the opposite direction, which Japanese innovation culture values."},

    {type:"teach", trg:"しこう", src:"thinking / thought process", pos:"noun", gender:null,
     note:"Kanji: 思考. ろんりてきしこう = logical thinking.\nひはんてきしこう = critical thinking.",
     example:"A: ろんりてきしこうをきたえましょう。\nB: どうすればいいですか？",
     exampleSrc:"A: Let us train our logical thinking.\nB: How should we do that?",
     funFact:"しこう has two common kanji: 思考 (thinking/cognition) and 志向 (orientation/tendency). ろんりてきしこう (logical thinking) and ひはんてきしこう (critical thinking) are emphasized in modern Japanese education reform, moving away from きおくがた (memorization-based) learning."},

    {type:"teach", trg:"そうぞうりょく", src:"imagination / creative power", pos:"noun", gender:null,
     note:"そうぞう (imagination) + りょく (power).\nそうぞうりょくゆたか = rich in imagination.",
     example:"A: こどものそうぞうりょくはすばらしいです。\nB: おとなもまなぶべきですね。",
     exampleSrc:"A: Children's imagination is wonderful.\nB: Adults should learn from it too.",
     funFact:"Japanese distinguishes そうぞう (想像, imagination) from そうぞう (創造, creation). Both are read the same but have different kanji. そうぞうりょく with 想像 means imaginative power; with 創造 means creative power. This homophone pair confuses even native speakers in speech."},

    {type:"teach", trg:"こうけんする", src:"to contribute", pos:"verb", gender:null,
     note:"Kanji: 貢献. しゃかいにこうけんする = to contribute to society.\nこうけんど = contribution level.",
     example:"A: ちいきしゃかいにこうけんしたいです。\nB: ボランティアからはじめませんか？",
     exampleSrc:"A: I want to contribute to the local community.\nB: Why not start with volunteering?",
     funFact:"こうけん (貢献) combines 貢 (tribute) and 献 (offering). In Japanese job evaluations, こうけんど (contribution degree) directly affects promotion. しゃかいこうけん (social contribution) is a pillar of Japanese corporate philosophy, reflecting the belief that businesses exist to serve society."},

    {type:"fb", s:"もんだいの{1}をりかいしましょう。\n(Let us understand the essence of the problem.)", a:"ほんしつ", opts:["ほんしつ","かのうせい","えいきょう","はっそう"], sSrc:"Let us understand the essence of the problem.",
     hint:"This word means the true nature or fundamental substance of something."},

    {type:"teach", trg:"きじゅん", src:"standard / criterion / benchmark", pos:"noun", gender:null,
     note:"Kanji: 基準. ひょうかきじゅん = evaluation criteria.\nあんぜんきじゅん = safety standard.",
     example:"A: はんだんのきじゅんはなんですか？\nB: ひようたいこうかです。",
     exampleSrc:"A: What is the criterion for judgment?\nB: Cost-effectiveness.",
     funFact:"きじゅん (基準) is the backbone of Japanese quality control. ISO standards are こくさいきじゅん. Japan's strict しょくひんあんぜんきじゅん (food safety standards) are among the world's toughest. The phrase きじゅんをみたす (to meet standards) drives manufacturing excellence."},

    {type:"teach", trg:"どうき", src:"motivation / motive", pos:"noun", gender:null,
     note:"Kanji: 動機. しぼうどうき = motivation for applying.\nはんこうどうき = criminal motive.",
     example:"A: にほんごをまなぶどうきはなんですか？\nB: にほんではたらきたいからです。",
     exampleSrc:"A: What is your motivation for learning Japanese?\nB: Because I want to work in Japan.",
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
