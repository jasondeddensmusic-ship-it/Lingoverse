// Unit 30 Batch 2 Lesson 1: しそうし (History of Thought)
const BATCH2_L_1 = {
  id:"jav2_u30l_b2_1", title:"しそうし", icon:"📚", xp:15, board:true,
  steps:[
    {type:"intro", title:"しそうし",
     desc:"Expand your philosophical vocabulary with terms for reasoning, belief systems, and intellectual traditions. These words bridge Western and Eastern philosophy, enabling deeper engagement with Japanese academic texts and JLPT N1 reading passages about ideas and society.",
     goals:["Use terms for reasoning and belief","Discuss intellectual traditions","Navigate abstract philosophical vocabulary"]},

    {type:"teach", trg:"しそう", src:"thought / ideology / philosophy", pos:"noun", gender:null,
     note:"Kanji: 思想. しそうか = thinker/ideologist.\nじゆうしそう = liberal thought.",
     example:"A: めいじじだいにせいようのしそうがにほんにつたわりました。\nB: にほんのでんとうてきなしそうとどうゆうごうしたのでしょう。",
     exampleSrc:"A: Western thought was transmitted to Japan during the Meiji era.\nB: How did it merge with traditional Japanese thought?",
     funFact:"思想 uses 思 (think) and 想 (imagine). It refers to organized systems of thought. Meiji-era Japan absorbed Western しそう at remarkable speed, translating thousands of works on philosophy, political theory, and science. Thinkers like Fukuzawa Yukichi shaped how Western ideas were adapted to Japanese culture."},

    {type:"teach", trg:"かんねん", src:"notion / idea / mental concept", pos:"noun", gender:null,
     note:"Kanji: 観念. こていかんねん = fixed notion / preconception.\nかんねんてき = idealistic / conceptual.",
     example:"A: こていかんねんにとらわれずにかんがえましょう。\nB: じゆうなはっそうがだいじですね。",
     exampleSrc:"A: Let us think without being bound by fixed notions.\nB: Free thinking is important.",
     funFact:"観念 uses 観 (observe/view) and 念 (thought/idea). While がいねん (concept) is neutral and academic, かんねん carries more subjective weight. こていかんねん (fixed notion) implies stubborn preconceptions. The related expression かんねんする means 'to resign oneself' or 'to accept the inevitable,' showing how mental concepts can become traps."},

    {type:"teach", trg:"りせい", src:"reason / rationality / intellect", pos:"noun", gender:null,
     note:"Kanji: 理性. りせいてき = rational.\nりせいとかんじょう = reason and emotion.",
     example:"A: りせいてきなはんだんがもとめられるばめんです。\nB: かんじょうにながされないようにしましょう。",
     exampleSrc:"A: This is a situation that demands rational judgment.\nB: Let us not be swayed by emotions.",
     funFact:"理性 uses 理 (reason/principle) and 性 (nature/quality). In Kantian philosophy translated into Japanese, りせい represents 'Vernunft' (reason). The tension between りせい and かんじょう (emotion) is a universal theme, but Japanese culture often values a third path: ちょっかん (intuition), which transcends both reason and emotion."},

    {type:"mc", q:"こていかんねん means:", opts:["Fixed notion / preconception","Free thinking","New concept","Abstract theory"], ans:"Fixed notion / preconception",
     hint:"こてい means 'fixed/rigid' combined with the word for notion, describing stubborn preconceptions."},

    {type:"teach", trg:"ぜんあく", src:"good and evil / right and wrong", pos:"noun", gender:null,
     note:"Kanji: 善悪. ぜんあくのはんだん = moral judgment.\nFrom Buddhist and Confucian traditions.",
     example:"A: ぜんあくのきじゅんはぶんかによってことなります。\nB: ふへんてきなぜんあくはあるのでしょうか？",
     exampleSrc:"A: Standards of good and evil differ by culture.\nB: Is there a universal good and evil?",
     funFact:"善悪 pairs 善 (good) and 悪 (evil). This compound appears throughout Japanese moral philosophy, from Buddhist concepts of 善因善果 (good causes produce good effects) to modern ethical debates. The question of whether ぜんあく is absolute or relative is a perennial topic in Japanese philosophy classrooms."},

    {type:"teach", trg:"しんねん", src:"belief / conviction / faith in an idea", pos:"noun", gender:null,
     note:"Kanji: 信念. しんねんをもつ = to hold a conviction.\nかたいしんねん = firm belief.",
     example:"A: じぶんのしんねんをつらぬくことはたいせつです。\nB: しかし、たにんのしんねんもそんちょうしなければなりません。",
     exampleSrc:"A: It is important to stand by your convictions.\nB: However, we must also respect others' beliefs.",
     funFact:"信念 uses 信 (believe) and 念 (thought/conviction). しんねん is stronger than いけん (opinion) because it implies deep personal commitment. Japanese leaders are often evaluated on whether they have しんねん. The expression しんねんをまげない (not bending one's convictions) is admired, though it can also mean inflexibility."},

    {type:"teach", trg:"げんしょう", src:"phenomenon", pos:"noun", gender:null,
     note:"Kanji: 現象. しゃかいげんしょう = social phenomenon.\nしぜんげんしょう = natural phenomenon.",
     example:"A: このしゃかいげんしょうのげんいんをぶんせきしましょう。\nB: ふくすうのようそがからみあっていますね。",
     exampleSrc:"A: Let us analyze the cause of this social phenomenon.\nB: Multiple factors are intertwined.",
     funFact:"現象 uses 現 (appear/present) and 象 (image/elephant). A phenomenon is an 'appearing image.' In philosophy, Husserl's phenomenology is translated as げんしょうがく. The word bridges science and philosophy: both しぜんげんしょう (natural phenomena) and しゃかいげんしょう (social phenomena) are studied through observation and analysis."},

    {type:"fb", s:"りせいてきな{1}がもとめられるばめんです。\n(This is a situation that demands rational judgment.)", a:"はんだん", opts:["はんだん","かんじょう","しんねん","しそう"], sSrc:"This is a situation that demands rational judgment.",
     hint:"The noun meaning a conclusion reached through thinking, deciding what to do."},

    {type:"teach", trg:"ちょっかん", src:"intuition / gut feeling", pos:"noun", gender:null,
     note:"Kanji: 直感. ちょっかんてき = intuitive.\nちょっかんにしたがう = to follow intuition.",
     example:"A: ちょっかんてきにそれはまちがいだとかんじました。\nB: りくつではせつめいできなくても、ちょっかんはだいじです。",
     exampleSrc:"A: I intuitively felt that it was wrong.\nB: Even if you cannot explain it logically, intuition is important.",
     funFact:"直感 uses 直 (direct/straight) and 感 (feel). Japanese culture values ちょっかん as a legitimate way of knowing, alongside りせい (reason). In martial arts, business, and art, ちょっかん is cultivated through years of practice. The concept of 'reading the air' (くうきをよむ) is a social form of ちょっかん."},

    {type:"teach", trg:"へんけん", src:"prejudice / bias", pos:"noun", gender:null,
     note:"Kanji: 偏見. へんけんをもつ = to hold prejudice.\nへんけんのない = free from prejudice.",
     example:"A: へんけんをなくすためにはきょういくがじゅうようです。\nB: たようなひととのこうりゅうもこうかてきです。",
     exampleSrc:"A: Education is important for eliminating prejudice.\nB: Interaction with diverse people is also effective.",
     funFact:"偏見 uses 偏 (lean/incline) and 見 (see/view). Prejudice is 'leaning sight.' While Japan values social harmony, it also faces challenges with へんけん regarding gender, ethnicity, and disability. The phrase むいしきのへんけん (unconscious bias) has entered Japanese workplace vocabulary as diversity training becomes more common."},

    {type:"teach", trg:"むいしき", src:"unconscious / subconscious", pos:"noun", gender:null,
     note:"Kanji: 無意識. むいしきのうちに = unconsciously.\nFreud's concept of the unconscious mind.",
     example:"A: むいしきのへんけんはだれにでもあります。\nB: まずきづくことがだいいっぽです。",
     exampleSrc:"A: Everyone has unconscious biases.\nB: The first step is to become aware of them.",
     funFact:"無意識 uses 無 (without) and 意識 (consciousness). When Freud's works were translated into Japanese in the early 20th century, むいしき became a key term in Japanese intellectual discourse. The concept fascinated Japanese thinkers because it resonated with Zen Buddhist ideas about layers of awareness beneath conscious thought."},

    {type:"mc", q:"ちょっかん is valued in Japanese culture because:", opts:["It replaces the need for education","It represents knowledge gained through deep practice and experience","It is always more accurate than logic","It requires no effort to develop"], ans:"It represents knowledge gained through deep practice and experience",
     hint:"Intuition in Japanese culture is not random but is developed through years of dedicated practice."},

    {type:"fb", s:"へんけんをなくすためには{1}がじゅうようです。\n(Education is important for eliminating prejudice.)", a:"きょういく", opts:["きょういく","けいけん","ちょっかん","しんねん"], sSrc:"Education is important for eliminating prejudice.",
     hint:"The noun for the systematic process of teaching and learning."},

    {type:"match", pairs:[{trg:"しそう",src:"thought/ideology"},{trg:"りせい",src:"reason/rationality"},{trg:"しんねん",src:"belief/conviction"},{trg:"げんしょう",src:"phenomenon"}]},

    {type:"fb", s:"むいしきの{1}はだれにでもあります。\n(Everyone has unconscious biases.)", a:"へんけん", opts:["へんけん","しんねん","かんねん","りせい"], sSrc:"Everyone has unconscious biases.",
     hint:"The noun meaning 'prejudice' or 'bias,' leaning sight that distorts judgment."},

    {type:"match", pairs:[{trg:"ぜんあく",src:"good and evil"},{trg:"ちょっかん",src:"intuition"},{trg:"へんけん",src:"prejudice"},{trg:"むいしき",src:"unconscious"}]},

    {type:"mc", q:"げんしょう means:", opts:["Belief system","Scientific law","Phenomenon","Hypothesis"], ans:"Phenomenon",
     hint:"The word for an observable event or occurrence, used in both science and philosophy."},
  ]
};
export default BATCH2_L_1;
