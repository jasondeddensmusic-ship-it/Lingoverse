// Batch 9 – Unit 12 (A2.2 Ability): Skills & Talents
const BATCH9_L1 = {
  id:"jav2_u12l_b9_1", title:"特技(とくぎ)", icon:"🎯", xp:15, board:true,
  steps:[
    {type:"intro", title:"特技(とくぎ)",
     desc:"Expand your ability vocabulary with words for skills, talents, and competencies. Learn to describe what you and others can do.",
     goals:["Describe skills and talents","Talk about learning new abilities","Express different levels of competence"]},

    {type:"teach", trg:"運転(うんてん)する", src:"to drive", pos:"verb", gender:null,
     note:"運転(うんてん)免許(めんきょ) = driver's license.\n運転手(うんてんしゅ) = driver.",
     example:"A: 車(くるま)を運転(うんてん)できますか？\nB: はい、免許(めんきょ)を持(も)っています。",
     exampleSrc:"A: Can you drive a car?\nB: Yes, I have a license.",
     funFact:"Getting an 運転(うんてん)免許(めんきょ) in Japan is expensive (200,000-300,000 yen) and involves attending a 自動車(じどうしゃ)学校(がっこう) (driving school). Many young urban Japanese skip driving entirely since public transport is excellent. The phrase ペーパードライバー means someone with a license who never drives."},

    {type:"teach", trg:"泳(およ)ぐ", src:"to swim", pos:"verb", gender:null,
     note:"泳(およ)げる = can swim. プールで泳(およ)ぐ = to swim in a pool.\n水泳(すいえい) = swimming (formal).",
     example:"A: 泳(およ)げますか？\nB: 少(すこ)し泳(およ)げます。",
     exampleSrc:"A: Can you swim?\nB: I can swim a little.",
     funFact:"水泳(すいえい) (swimming) is a mandatory part of Japanese school education. Most schools have pools, and children learn to swim in PE class. 夏休(なつやす)み (summer vacation) includes school pool days. The 25-meter lap test is a milestone every Japanese child remembers."},

    {type:"teach", trg:"弾(ひ)く", src:"to play (piano/guitar)", pos:"verb", gender:null,
     note:"ピアノを弾(ひ)く = to play piano. ギターを弾(ひ)く = to play guitar.\n弾(ひ)ける = can play.",
     example:"A: 何(なに)か楽器(がっき)を弾(ひ)けますか？\nB: ピアノを少(すこ)し弾(ひ)けます。",
     exampleSrc:"A: Can you play any instrument?\nB: I can play piano a little.",
     funFact:"弾(ひ)く is specifically for string and keyboard instruments. Drums use 叩(たた)く (to hit), and wind instruments use 吹(ふ)く (to blow). Japanese music education includes リコーダー (recorder) in elementary school and ピアニカ (pianica) in kindergarten. YAMAHA and KAWAI music schools are ubiquitous."},

    {type:"teach", trg:"上手(じょうず)", src:"skilled / good at", pos:"adj", gender:null,
     note:"な-adjective. 日本語(にほんご)が上手(じょうず)ですね = Your Japanese is good.\nOpposite: 下手(へた) (unskilled).",
     example:"A: 日本語(にほんご)が上手(じょうず)ですね。\nB: いいえ、まだまだです。",
     exampleSrc:"A: Your Japanese is good.\nB: No, I still have a long way to go.",
     funFact:"上手(じょうず) literally means 'upper hand.' Japanese people almost always deflect this compliment with まだまだです (I still have far to go) or いいえ、とんでもない (no, not at all). Accepting the compliment directly would seem arrogant. This humble response is socially expected."},

    {type:"teach", trg:"下手(へた)", src:"unskilled / bad at", pos:"adj", gender:null,
     note:"な-adjective. 料理(りょうり)が下手(へた) = bad at cooking.\nOpposite: 上手(じょうず) (skilled).",
     example:"A: 絵(え)が下手(へた)です。\nB: 練習(れんしゅう)すればうまくなりますよ。",
     exampleSrc:"A: I am bad at drawing.\nB: If you practice, you will improve.",
     funFact:"下手(へた) literally means 'lower hand.' Using it about yourself is humble and acceptable, but saying it about others is rude. The expression 下手(へた)の横好(よこず)き means 'fond of something despite being bad at it,' a lovable quality in Japanese culture. 下手(へた)うま means 'charmingly unskilled.'"},

    {type:"teach", trg:"慣(な)れる", src:"to get used to / to become accustomed", pos:"verb", gender:null,
     note:"慣(な)れている = am accustomed to.\n日本(にほん)の生活(せいかつ)に慣(な)れる = to get used to life in Japan.",
     example:"A: 日本(にほん)の生活(せいかつ)に慣(な)れましたか？\nB: はい、だいぶ慣(な)れました。",
     exampleSrc:"A: Have you gotten used to life in Japan?\nB: Yes, I am quite used to it.",
     funFact:"慣(な)れる is essential for anyone living in Japan. The process of adapting to Japanese customs is called 適応(てきおう) (adaptation). Common things foreigners 慣(な)れる to: taking shoes off everywhere, bowing constantly, and eating with 箸(はし) (chopsticks). The phrase お口(くち)に慣(な)れた means 'your palate adapted.'"},

    {type:"teach", trg:"覚(おぼ)える", src:"to memorize / to remember", pos:"verb", gender:null,
     note:"漢字(かんじ)を覚(おぼ)える = to memorize kanji.\n覚(おぼ)えられない = cannot memorize.",
     example:"A: 単語(たんご)を覚(おぼ)えるのが大変(たいへん)です。\nB: フラッシュカードが便利(べんり)ですよ。",
     exampleSrc:"A: Memorizing vocabulary is tough.\nB: Flashcards are convenient.",
     funFact:"覚(おぼ)える is the bane of every Japanese learner. Japanese students memorize massive amounts: 2,136 常用漢字(じょうようかんじ) (common-use kanji), hundreds of ことわざ (proverbs), and historical dates. The verb also means 'to learn a skill': 仕事(しごと)を覚(おぼ)える (to learn the job)."},

    {type:"teach", trg:"身(み)に付(つ)ける", src:"to acquire (a skill) / to master", pos:"verb", gender:null,
     note:"身(み) = body, に付(つ)ける = to attach to.\n技術(ぎじゅつ)を身(み)に付(つ)ける = to acquire a skill.",
     example:"A: 新(あたら)しい技術(ぎじゅつ)を身(み)に付(つ)けたいです。\nB: 何(なに)を勉強(べんきょう)しますか？",
     exampleSrc:"A: I want to acquire new skills.\nB: What will you study?",
     funFact:"身(み)に付(つ)ける literally means 'to attach to your body,' suggesting the skill becomes part of you. It implies deeper mastery than just 覚(おぼ)える (memorizing). A skill that is 身(み)についた is integrated into your being. Japanese martial arts use this concept extensively."},

    {type:"mc", q:"How should you respond when someone says 日本語(にほんご)が上手(じょうず)ですね?", opts:["まだまだです (I still have far to go)","はい、上手(じょうず)です (Yes, I am good)","ありがとう (Thank you)","知(し)っています (I know)"], ans:"まだまだです (I still have far to go)",
     hint:"Japanese social norms expect a humble deflection rather than direct acceptance of compliments."},

    {type:"fb", s:"日本(にほん)の生活(せいかつ)に{1}ましたか？\n(Have you gotten used to life in Japan?)", a:"慣(な)れ", opts:["慣(な)れ","覚(おぼ)え","身(み)に付(つ)け","運転(うんてん)し"], sSrc:"Have you gotten used to life in Japan?",
     hint:"This verb means to become accustomed to something through experience and time."},

    {type:"match", pairs:[
      {trg:"上手(じょうず)", src:"skilled"},
      {trg:"下手(へた)", src:"unskilled"},
      {trg:"覚(おぼ)える", src:"to memorize"},
      {trg:"身(み)に付(つ)ける", src:"to acquire a skill"}
    ]},

    {type:"mc", q:"Which verb is used specifically for playing piano or guitar?", opts:["弾(ひ)く","叩(たた)く","吹(ふ)く","歌(うた)う"], ans:"弾(ひ)く",
     hint:"This verb is for string and keyboard instruments. Drums and wind instruments use different verbs."}
  ,{type:"match",pairs:[{trg:"運転(うんてん)する",src:"to drive"},{trg:"泳(およ)ぐ",src:"to swim"}]}]
};
export default BATCH9_L1;
