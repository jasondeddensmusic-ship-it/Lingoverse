// Unit 19 Expansion — Lesson 4: ばのつかいかた (Mastering ば)
const LESSON_4 = {
  id:"jav2_u19l4", title:"ばのつかいかた", icon:"🔗", xp:15, board:true,
  steps:[
    {type:"intro", title:"ばのつかいかた",
     desc:"Explore ば, the logical conditional. It shines in proverbs, advice, adjective conditions, and hypothetical reasoning. While たら is the all-rounder, ば adds clarity and elegance to logical if-then statements.",
     goals:["Form ば with all verb groups and adjectives","Use ば in proverbs and set phrases","Combine ば with いい for advice (how should I?)"]},

    {type:"teach", trg:"いけば", src:"if (you) go", pos:"verb", gender:null,
     note:"ば-form of いく (to go). Group 1: いく to いけ + ば.\nUsed for logical conditions about going somewhere.",
     example:"A: とうきょうにいけばスカイツリーがみえますよ。\nB: いってみたいです。",
     exampleSrc:"A: If you go to Tokyo, you can see the Skytree.\nB: I would like to try going.",
     funFact:"いけば is the ば-form of the essential verb いく. The ば conditional with いく creates clean advice: いけばわかる (if you go, you will understand). This pattern appears in the famous phrase 行けば分かるさ (if you go, you will see), a line from a popular song by Antonio Inoki."},

    {type:"teach", trg:"よめば", src:"if (you) read", pos:"verb", gender:null,
     note:"ば-form of よむ (to read). Group 1: よむ to よめ + ば.\nよめばわかる = if you read it, you will understand.",
     example:"A: このほんをよめばにほんのぶんかがわかりますよ。\nB: かりてもいいですか？",
     exampleSrc:"A: If you read this book, you will understand Japanese culture.\nB: May I borrow it?",
     funFact:"よめばわかる (if you read, you will understand) is a common phrase used by teachers, authors, and reviewers. The ば conditional implies a logical certainty: reading naturally leads to understanding. This clean cause-effect relationship is where ば excels over the other conditionals."},

    {type:"teach", trg:"たかければ", src:"if it is expensive", pos:"adj", gender:null,
     note:"ば-form of たかい (expensive/high). い-adjective: い to ければ.\nOpposite: やすければ (if cheap).",
     example:"A: たかければかいません。\nB: セールをまちましょう。",
     exampleSrc:"A: If it is expensive, I will not buy it.\nB: Let us wait for a sale.",
     funFact:"Adjective ば-conditionals sound particularly natural in Japanese. たかければかわない (if expensive, will not buy), おいしければたべる (if delicious, will eat), とおければいかない (if far, will not go). These clean adjective conditions are where ば truly outshines たら in everyday speech."},

    {type:"teach", trg:"〜ばいい", src:"should ~ / it would be good to ~", pos:"part", gender:null,
     note:"ば + いい = advice pattern. どうすればいい？ = What should I do?\nなにをたべればいい？ = What should I eat?",
     example:"A: にほんごがじょうずになりたいです。どうすればいいですか？\nB: まいにちれんしゅうすればいいですよ。",
     exampleSrc:"A: I want to become good at Japanese. What should I do?\nB: You should practice every day.",
     funFact:"ばいい is the essential advice pattern. どうすればいい (what should I do?) is one of the most frequently asked questions in Japanese. It literally means 'if I do how, would it be good?' The answer follows the same pattern: れんしゅうすればいい (if you practice, it will be good = you should practice)."},

    {type:"mc", q:"どうすればいいですか means:", opts:["What did you do?","What should I do?","How are you?","What happened?"], ans:"What should I do?",
     hint:"ば + いい creates the advice-seeking pattern: if I do what, would it be good?"},

    {type:"teach", trg:"いそがばまわれ", src:"more haste, less speed (proverb)", pos:"noun", gender:null,
     note:"いそぐ (to hurry) ば + まわる (to go around) imperative.\nLiteral: if you hurry, take the detour.",
     example:"A: しけんまであと1にちしかない！\nB: いそがばまわれ。おちついてべんきょうしましょう。",
     exampleSrc:"A: There is only one day until the exam!\nB: Haste makes waste. Let us study calmly.",
     funFact:"急がば回れ is one of Japan's most famous proverbs. It originated from Lake Biwa travel: rushing across the lake by boat was dangerous, so the safer detour on land was wiser despite being longer. ば appears in many Japanese proverbs because it conveys timeless logical truths perfectly."},

    {type:"teach", trg:"おいしければ", src:"if it is delicious", pos:"adj", gender:null,
     note:"ば-form of おいしい (delicious). い-adjective: い to ければ.\nNatural in food discussions.",
     example:"A: おいしければまたいきたいです。\nB: きっとおいしいですよ。",
     exampleSrc:"A: If it is delicious, I want to go again.\nB: I am sure it will be delicious.",
     funFact:"おいしければ shows how ば works beautifully with sensory adjectives. Japanese food culture revolves around taste judgments: おいしければまたくる (if tasty, I will come back) is the highest praise for a restaurant. Online reviews often use this ば pattern to describe conditional recommendations."},

    {type:"fb", s:"にほんごがじょうずになりたいです。どう___いいですか？\n(I want to improve my Japanese. What should I do?)", a:"すれば", opts:["すれば","したら","すると","するなら"], sSrc:"What should I do?",
     hint:"The ば conditional of する combined with いい for seeking advice."},

    {type:"teach", trg:"なければ", src:"if there is not / if (one) does not have", pos:"adj", gender:null,
     note:"ば-form of ない (not exist). ない to なければ.\nじかんがなければ = if there is no time.",
     example:"A: じかんがなければしかたないですね。\nB: そうですね。またこんどにしましょう。",
     exampleSrc:"A: If there is no time, it cannot be helped.\nB: That is right. Let us do it another time.",
     funFact:"なければ is extremely common because negative conditions arise constantly. なければならない (if not, it will not do = must do) is a grammar pattern built on this: たべなければならない (must eat). This double-negative construction is standard Japanese, not informal."},

    {type:"teach", trg:"れんしゅうする", src:"to practice", pos:"verb", gender:null,
     note:"する-verb. れんしゅう = practice/training.\nKanji: 練習する. 練 (polish/refine) + 習 (learn).",
     example:"A: まいにちれんしゅうしていますか？\nB: はい、1じかんれんしゅうしています。",
     exampleSrc:"A: Do you practice every day?\nB: Yes, I practice for one hour.",
     funFact:"練習 is the Japanese path to mastery. The kanji 練 means 'polish/knead' and 習 means 'learn through practice.' Together they embody the concept of learning through repetition. Japanese education emphasizes renshuu heavily. The phrase 練習あるのみ (nothing but practice) reflects a deep cultural belief in effort over talent."},

    {type:"mc", q:"いそがばまわれ means:", opts:["If you rush, you will arrive first","Haste makes waste / more haste, less speed","Running is good exercise","Hurry up and go around"], ans:"Haste makes waste / more haste, less speed",
     hint:"This proverb uses ば to express: if you hurry, the wise choice is the roundabout way."},

    {type:"teach", trg:"〜なければならない", src:"must ~ / have to ~", pos:"part", gender:null,
     note:"なければ (if not) + ならない (it will not do).\nDouble negative: if you do not do it, it will not work = must do.",
     example:"A: あしたまでにレポートをかかなければなりません。\nB: がんばってくださいね。",
     exampleSrc:"A: I must write the report by tomorrow.\nB: Please do your best.",
     funFact:"なければならない is how Japanese expresses obligation. It is a triple-layer construction: the verb negative (かかない), the ば conditional (かかなければ), and ならない (will not do). The result: 'if I do not write, it will not do' = 'I must write.' Shorter versions exist: なきゃ (casual), なくてはいけない (formal alternative)."},

    {type:"fb", s:"あしたまでにレポートをかか___なりません。\n(I must write the report by tomorrow.)", a:"なければ", opts:["なければ","ないと","なくて","ないで"], sSrc:"I must write the report by tomorrow.",
     hint:"The ば-form of ない, combined with ならない to express obligation (must do)."},

    {type:"tip", title:"ば in Proverbs, Advice, and Obligation",
     text:"Advice pattern:\nどうすればいい？ = What should I do?\nまいにちれんしゅうすればいい = You should practice daily.\n\nProverbs:\nいそがばまわれ = haste makes waste.\nちりもつもればやまとなる = even dust piles up into a mountain.\n\nObligation:\n~なければならない = must do.\nいかなければならない = must go.\nたべなければならない = must eat.\n\nAdjective conditions:\nたかければかわない = if expensive, will not buy.\nおいしければたべる = if tasty, will eat.",
     deepDive:{title:"ば vs. たら: When ば Wins",
      text:"ば is preferred over たら in these situations:\n\n1. Adjective conditions: やすければかう sounds cleaner than やすかったらかう.\n2. Advice: すればいい sounds more direct than したらいい (both work, but ば is crisper).\n3. Proverbs: ば gives timeless, universal truth. Proverbs almost never use たら.\n4. Obligation: なければならない is fixed with ば. なかったらならない is ungrammatical.\n5. Logical reasoning: clean if-then arguments prefer ば for its clarity.\n\nIn short: ば is the intellectual conditional. It belongs in advice, wisdom, and logical argument."}},

    {type:"match", pairs:[{trg:"いけば",src:"if you go"},{trg:"よめば",src:"if you read"},{trg:"たかければ",src:"if expensive"},{trg:"おいしければ",src:"if delicious"}]},

    {type:"match", pairs:[{trg:"ばいい",src:"should/it would be good"},{trg:"なければならない",src:"must do"},{trg:"いそがばまわれ",src:"haste makes waste"},{trg:"れんしゅうする",src:"to practice"}]},

    {type:"mc", q:"なければならない is built from:", opts:["Causative + passive","ば conditional of ない + ならない","たら + いけない","と + だめ"], ans:"ば conditional of ない + ならない",
     hint:"The ば-form of the negative (なければ) plus ならない (will not do) creates obligation."},
  ]
};
export default LESSON_4;
