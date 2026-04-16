// Batch 9 – Unit 12 (A2.2 Ability): Skills & Talents
const BATCH9_L1 = {
  id:"jav2_u12l_b9_1", title:"とくぎ", icon:"🎯", xp:15, board:true,
  steps:[
    {type:"intro", title:"とくぎ",
     desc:"Expand your ability vocabulary with words for skills, talents, and competencies. Learn to describe what you and others can do.",
     goals:["Describe skills and talents","Talk about learning new abilities","Express different levels of competence"]},

    {type:"teach", trg:"うんてんする", src:"to drive", pos:"verb", gender:null,
     note:"うんてんめんきょ = driver's license.\nうんてんしゅ = driver.",
     example:"A: くるまをうんてんできますか？\nB: はい、めんきょをもっています。",
     exampleSrc:"A: Can you drive a car?\nB: Yes, I have a license.",
     funFact:"Getting an うんてんめんきょ in Japan is expensive (200,000-300,000 yen) and involves attending a じどうしゃがっこう (driving school). Many young urban Japanese skip driving entirely since public transport is excellent. The phrase ペーパードライバー means someone with a license who never drives."},

    {type:"teach", trg:"およぐ", src:"to swim", pos:"verb", gender:null,
     note:"およげる = can swim. プールでおよぐ = to swim in a pool.\nすいえい = swimming (formal).",
     example:"A: およげますか？\nB: すこしおよげます。",
     exampleSrc:"A: Can you swim?\nB: I can swim a little.",
     funFact:"すいえい (swimming) is a mandatory part of Japanese school education. Most schools have pools, and children learn to swim in PE class. なつやすみ (summer vacation) includes school pool days. The 25-meter lap test is a milestone every Japanese child remembers."},

    {type:"teach", trg:"ひく", src:"to play (piano/guitar)", pos:"verb", gender:null,
     note:"ピアノをひく = to play piano. ギターをひく = to play guitar.\nひける = can play.",
     example:"A: なにかがっきをひけますか？\nB: ピアノをすこしひけます。",
     exampleSrc:"A: Can you play any instrument?\nB: I can play piano a little.",
     funFact:"ひく (弾く) is specifically for string and keyboard instruments. Drums use たたく (to hit), and wind instruments use ふく (to blow). Japanese music education includes リコーダー (recorder) in elementary school and ピアニカ (pianica) in kindergarten. YAMAHA and KAWAI music schools are ubiquitous."},

    {type:"teach", trg:"じょうず", src:"skilled / good at", pos:"adj", gender:null,
     note:"な-adjective. にほんごがじょうずですね = Your Japanese is good.\nOpposite: へた (unskilled).",
     example:"A: にほんごがじょうずですね。\nB: いいえ、まだまだです。",
     exampleSrc:"A: Your Japanese is good.\nB: No, I still have a long way to go.",
     funFact:"じょうず (上手) literally means 'upper hand.' Japanese people almost always deflect this compliment with まだまだです (I still have far to go) or いいえ、とんでもない (no, not at all). Accepting the compliment directly would seem arrogant. This humble response is socially expected."},

    {type:"teach", trg:"へた", src:"unskilled / bad at", pos:"adj", gender:null,
     note:"な-adjective. りょうりがへた = bad at cooking.\nOpposite: じょうず (skilled).",
     example:"A: えがへたです。\nB: れんしゅうすればうまくなりますよ。",
     exampleSrc:"A: I am bad at drawing.\nB: If you practice, you will improve.",
     funFact:"へた (下手) literally means 'lower hand.' Using it about yourself is humble and acceptable, but saying it about others is rude. The expression へたのよこずき means 'fond of something despite being bad at it,' a lovable quality in Japanese culture. へたうま means 'charmingly unskilled.'"},

    {type:"teach", trg:"なれる", src:"to get used to / to become accustomed", pos:"verb", gender:null,
     note:"なれている = am accustomed to.\nにほんのせいかつになれる = to get used to life in Japan.",
     example:"A: にほんのせいかつになれましたか？\nB: はい、だいぶなれました。",
     exampleSrc:"A: Have you gotten used to life in Japan?\nB: Yes, I am quite used to it.",
     funFact:"なれる (慣れる) is essential for anyone living in Japan. The process of adapting to Japanese customs is called てきおう (adaptation). Common things foreigners なれる to: taking shoes off everywhere, bowing constantly, and eating with はし (chopsticks). The phrase おくちになれた means 'your palate adapted.'"},

    {type:"teach", trg:"おぼえる", src:"to memorize / to remember", pos:"verb", gender:null,
     note:"かんじをおぼえる = to memorize kanji.\nおぼえられない = cannot memorize.",
     example:"A: たんごをおぼえるのがたいへんです。\nB: フラッシュカードがべんりですよ。",
     exampleSrc:"A: Memorizing vocabulary is tough.\nB: Flashcards are convenient.",
     funFact:"おぼえる (覚える) is the bane of every Japanese learner. Japanese students memorize massive amounts: 2,136 じょうようかんじ (common-use kanji), hundreds of ことわざ (proverbs), and historical dates. The verb also means 'to learn a skill': しごとをおぼえる (to learn the job)."},

    {type:"teach", trg:"みにつける", src:"to acquire (a skill) / to master", pos:"verb", gender:null,
     note:"み = body, につける = to attach to.\nぎじゅつをみにつける = to acquire a skill.",
     example:"A: あたらしいぎじゅつをみにつけたいです。\nB: なにをべんきょうしますか？",
     exampleSrc:"A: I want to acquire new skills.\nB: What will you study?",
     funFact:"みにつける (身に付ける) literally means 'to attach to your body,' suggesting the skill becomes part of you. It implies deeper mastery than just おぼえる (memorizing). A skill that is みについた is integrated into your being. Japanese martial arts use this concept extensively."},

    {type:"mc", q:"How should you respond when someone says にほんごがじょうずですね?", opts:["まだまだです (I still have far to go)","はい、じょうずです (Yes, I am good)","ありがとう (Thank you)","しっています (I know)"], ans:"まだまだです (I still have far to go)",
     hint:"Japanese social norms expect a humble deflection rather than direct acceptance of compliments."},

    {type:"fb", s:"にほんのせいかつに{1}ましたか？\n(Have you gotten used to life in Japan?)", a:"なれ", opts:["なれ","おぼえ","みにつけ","うんてんし"], sSrc:"Have you gotten used to life in Japan?",
     hint:"This verb means to become accustomed to something through experience and time."},

    {type:"match", pairs:[
      {trg:"じょうず", src:"skilled"},
      {trg:"へた", src:"unskilled"},
      {trg:"おぼえる", src:"to memorize"},
      {trg:"みにつける", src:"to acquire a skill"}
    ]},

    {type:"mc", q:"Which verb is used specifically for playing piano or guitar?", opts:["ひく","たたく","ふく","うたう"], ans:"ひく",
     hint:"This verb is for string and keyboard instruments. Drums and wind instruments use different verbs."}
  ]
};
export default BATCH9_L1;
