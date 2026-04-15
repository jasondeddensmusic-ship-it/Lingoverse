// Unit 03 Expansion L05. Body Parts & Physical Description
const LESSON_5 = {
  id:"jav2_u3l5", title:"からだ", icon:"🫀", xp:15, board:true,
  steps:[
    {type:"intro", title:"からだ",
     desc:"Learn the names of body parts in Japanese. These words are essential for describing people, talking about health, and understanding many Japanese idioms and expressions.",
     goals:["Name major body parts","Use body parts in common expressions","Understand body-part idioms in Japanese"]},

    {type:"teach", trg:"からだ", src:"body", pos:"noun", gender:null,
     note:"General word for the entire body. Also means 'health' in some expressions.\nKanji: 体.",
     example:"A: からだにきをつけてください。\nB: ありがとうございます。",
     exampleSrc:"A: Please take care of your health.\nB: Thank you.",
     funFact:"体 originally meant 'substance/form.' Karada ni ki wo tsukete (take care of your body) is one of the most common parting wishes in Japan, said to anyone working hard, traveling, or facing challenges."},

    {type:"teach", trg:"あたま", src:"head", pos:"noun", gender:null,
     note:"Physical head and also 'mind/brain' in expressions.\nKanji: 頭.",
     example:"A: あたまがいたいです。\nB: くすりをのみましょう。",
     exampleSrc:"A: I have a headache.\nB: Let's take medicine.",
     funFact:"Atama ga ii (head is good) means 'smart.' Atama ga katai (head is hard) means 'stubborn.' Atama wo sageru (lower your head) means 'to bow/apologize.' The head is used in dozens of idioms about intelligence and attitude."},

    {type:"teach", trg:"かお", src:"face", pos:"noun", gender:null,
     note:"Physical face and also reputation/social standing in expressions.\nKanji: 顔.",
     example:"A: きょうはかおいろがいいですね。\nB: ありがとう。げんきです。",
     exampleSrc:"A: You look well today (your face color is good).\nB: Thanks. I'm well.",
     funFact:"Kao covers face AND social reputation. 'Kao ga hiroi' (wide face) means well-connected. 'Kao wo tateru' (build someone's face) means to save face. The Japanese concept of 'face' (mentsu) is deeply tied to social harmony."},

    {type:"teach", trg:"め", src:"eye", pos:"noun", gender:null,
     note:"One of the most versatile body-part words in Japanese idioms.\nKanji: 目.",
     example:"A: めがおおきいですね。\nB: ははにもそういわれます。",
     exampleSrc:"A: You have big eyes.\nB: My mother says that too.",
     funFact:"Big eyes (me ga ookii) are considered attractive in Japan, driving the popularity of circle lenses, false eyelashes, and eye makeup. The idiom 'me kara uroko' (scales from the eyes) means 'a revelation,' borrowed from a Bible story via Portuguese missionaries."},

    {type:"mc", q:"あたまがいたい means:", opts:["Smart person","Headache","Hard head","Big brain"], ans:"Headache",
     hint:"Atama (head) + ga itai (hurts/painful)."},

    {type:"teach", trg:"はな", src:"nose", pos:"noun", gender:null,
     note:"Homophone with はな (flower). Different kanji: 鼻 (nose) vs 花 (flower).\nKanji: 鼻.",
     example:"A: はなが高いですね。\nB: ありがとうございます。",
     exampleSrc:"A: You have a tall nose.\nB: Thank you.",
     funFact:"A 'tall nose' (hana ga takai) is a compliment in Japan meaning a prominent nose bridge, considered attractive. It also idiomatically means 'proud/boastful.' 'Hana ga takai' (his nose is high = he is proud/boastful) is a common expression."},

    {type:"teach", trg:"くち", src:"mouth", pos:"noun", gender:null,
     note:"Physical mouth and also 'way of speaking' in idioms.\nKanji: 口.",
     example:"A: くちをあけてください。\nB: ああ。（あける）",
     exampleSrc:"A: Please open your mouth.\nB: Aah. (opens)",
     funFact:"口 is one of the simplest kanji: a square representing an open mouth. It appears in kuchi-genka (mouth-argument = verbal fight), iriguchi (entrance = entering-mouth), deguchi (exit = leaving-mouth), and hitokuchi (one bite = one-mouth)."},

    {type:"teach", trg:"みみ", src:"ear", pos:"noun", gender:null,
     note:"Physical ear and hearing ability in expressions.\nKanji: 耳.",
     example:"A: みみがいいですね。\nB: おんがくをよくききます。",
     exampleSrc:"A: You have good ears.\nB: I listen to a lot of music.",
     funFact:"Mimi ga ii (good ears) means you have excellent hearing or musical sense. Mimi ga itai (ears hurt) means you are hearing something you do not want to hear (painful truth). The kanji 耳 is a pictograph of an ear with three horizontal lines for the folds."},

    {type:"teach", trg:"て", src:"hand", pos:"noun", gender:null,
     note:"Covers hand and arm in many expressions. One of the most used body parts in idioms.\nKanji: 手.",
     example:"A: てをあらいましょう。\nB: はい、せっけんをつかいます。",
     exampleSrc:"A: Let's wash our hands.\nB: Yes, I'll use soap.",
     funFact:"手 is in hundreds of expressions: jouzu (skillful = upper hand), heta (unskillful = lower hand), tegami (letter = hand-paper), tetsudau (help = hand-accompany). Japanese culture values 'te-shigoto' (handwork/craftsmanship) enormously."},

    {type:"fb", s:"{1}をあらいましょう。",
     a:["て"],
     opts:["て","あし","あたま","め"],
     hint:"The body part you wash frequently, especially before eating.",
     sSrc:"Let's wash our hands."},

    {type:"teach", trg:"あし", src:"foot / leg", pos:"noun", gender:null,
     note:"Covers both foot and leg. Context determines which.\nKanji: 足 (also read 'soku').",
     example:"A: あしがいたいです。\nB: たくさんあるきましたからね。",
     exampleSrc:"A: My feet hurt.\nB: Because we walked a lot.",
     funFact:"足 means both 'leg' and 'foot' (Japanese does not distinguish). Ashi ga hayai (fast legs) means quick/fast. Ashi wo hipparu (pull someone's leg) means to drag someone down. The kanji shows a kneecap above a foot."},

    {type:"teach", trg:"おなか", src:"stomach / belly", pos:"noun", gender:null,
     note:"Polite word for stomach. The お is an honorific prefix.\nCasual: はら (hara).",
     example:"A: おなかがすいた！\nB: もうすぐごはんですよ。",
     exampleSrc:"A: I'm hungry!\nB: Lunch is coming soon.",
     funFact:"Onaka ga suita (stomach emptied = hungry) and onaka ga ippai (stomach full = full) are essential everyday phrases. The casual 'hara' appears in harakiri (belly-cutting) and hara wo tateru (to get angry = stomach stands up)."},

    {type:"teach", trg:"せなか", src:"back (body)", pos:"noun", gender:null,
     note:"The back of the body. Compound: 背 (height/back) + 中 (center).\nKanji: 背中.",
     example:"A: せなかがいたいです。\nB: マッサージしましょうか？",
     exampleSrc:"A: My back hurts.\nB: Shall I give you a massage?",
     funFact:"Se (height/back) + naka (middle). Senaka wo osu (push someone's back) means to encourage someone. In Japanese culture, showing your back to someone important is rude. Bowing brings your back into view, showing you trust the other person."},

    {type:"teach", trg:"ゆび", src:"finger / toe", pos:"noun", gender:null,
     note:"Covers both fingers and toes. te no yubi = finger, ashi no yubi = toe.\nKanji: 指.",
     example:"A: ゆびをけがしました。\nB: だいじょうぶですか？バンドエイドがありますよ。",
     exampleSrc:"A: I hurt my finger.\nB: Are you okay? I have a bandage.",
     funFact:"Yubi covers fingers AND toes. To specify: te no yubi (hand-finger) or ashi no yubi (foot-finger). The ring finger is kusuri-yubi (medicine finger) because Japanese people traditionally stirred medicine with that finger."},

    {type:"mc", q:"おなかがすいた means:", opts:["I have a stomachache","I am hungry","I am full","I am tired"], ans:"I am hungry",
     hint:"The stomach has emptied (suita), meaning you need to eat."},

    {type:"match", pairs:[
      {trg:"あたま", src:"head"},
      {trg:"かお", src:"face"},
      {trg:"め", src:"eye"},
      {trg:"はな", src:"nose"}
    ]},

    {type:"match", pairs:[
      {trg:"て", src:"hand"},
      {trg:"あし", src:"foot / leg"},
      {trg:"おなか", src:"stomach"},
      {trg:"せなか", src:"back"}
    ]},

    {type:"fb", s:"{1}がいたいです。くすりをのみましょう。",
     a:["あたま"],
     opts:["あたま","て","あし","ゆび"],
     hint:"The body part associated with headaches, where you might take medicine.",
     sSrc:"I have a headache. Let's take medicine."},

    {type:"mc", q:"て appears in じょうず (skillful) because:", opts:["It literally means 'upper hand'","Hands are smart","Te means 'skill'","It is a coincidence"], ans:"It literally means 'upper hand'",
     hint:"上 (jou, u...) + 手 (zu/te, h...) = u... h... = skillful."},

    {type:"mc", q:"ゆび covers:", opts:["Only fingers","Only toes","Both fingers and toes","Wrists"], ans:"Both fingers and toes",
     hint:"Japanese uses the same word for both, specifying with te no (hand) or ashi no (foot)."},
  ]
};
export default LESSON_5;
