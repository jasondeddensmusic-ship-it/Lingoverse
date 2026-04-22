// Unit 20 Expansion. Lesson 5: けいごのペア (Keigo Verb Pairs)
const LESSON_5 = {
  id:"jav2_u20l5", title:"けいごのペア", icon:"🔄", xp:15, board:true,
  steps:[
    {type:"intro", title:"けいごのペア",
     desc:"Every keigo verb comes in a pair: honorific (for others) and humble (for yourself). Mixing them up is the most common keigo mistake. Master the complete set of pairs and practice switching between them depending on who is performing the action.",
     goals:["Memorize all major sonkeigo/kenjougo verb pairs","Switch correctly between honorific and humble in conversations","Avoid the most common keigo mistakes"]},

    {type:"teach", trg:"ごぞんじ", src:"to know (honorific)", pos:"verb", gender:null,
     note:"Honorific of しる (to know). ごぞんじですか？ = Do you know?\nKanji: ご存知. Used for the other person's knowledge.",
     example:"A: このレストランをごぞんじですか？\nB: はい、とてもゆうめいなみせです。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Do you know this restaurant?\nB: Yes, it is a very famous place.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"ご存知 is the honorific for 'to know.' When asking if someone (of higher status) knows something, ごぞんじですか is the correct form. The humble counterpart is ぞんじる: ぞんじません (I do not know, humble). Note: しる has no standard て-form keigo. ごぞんじ is a standalone honorific form."},

    {type:"teach", trg:"ぞんじる", src:"to know (humble)", pos:"verb", gender:null,
     note:"Humble of しる (to know). ぞんじません = I do not know (humble).\nぞんじあげる = I know (of someone respected).",
     example:"A: さいとうさまをごぞんじですか？\nB: はい、ぞんじあげております。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Do you know Mr. Saitou?\nB: Yes, I know of him. (humble)\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"ぞんじる is rarely used in the affirmative on its own. Instead, ぞんじあげる (know + raise, extra humble) is used: ぞんじあげております (I know of them, with great respect). The negative ぞんじません is more common and means 'I do not know' in humble speech. This asymmetry is unusual in keigo."},

    {type:"teach", trg:"おっしゃる", src:"to say (honorific, review)", pos:"verb", gender:null,
     note:"Honorific of いう. Pair: おっしゃる (hon.) / もうす (hum.).\nReviewing this essential pair for the comparison exercise.",
     example:"A: しゃちょうがなんとおっしゃいましたか？\nB: らいしゅうまでにけんとうするとおっしゃいました。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: What did the president say?\nB: He said he would consider it by next week.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"おっしゃる and もうす are the 'say' pair. This pair comes up constantly because reporting what others said (honorific) and what you said (humble) is a fundamental conversation skill. Mixing them up (using もうす for a superior's speech) is a serious keigo error."},

    {type:"teach", trg:"うかがう", src:"to visit / to ask / to hear (humble)", pos:"verb", gender:null,
     note:"Humble replacement for いく (visit), きく (ask/hear), and たずねる (visit).\nKanji: 伺う. Triple-function humble verb.",
     example:"A: あしたおうかがいしてもよろしいでしょうか？\nB: はい、おまちしております。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: May I visit you tomorrow?\nB: Yes, I will be waiting.\nA: How was it?\nB: It was very good.",
     funFact:"伺う is the humble mirror of いらっしゃる, but while いらっしゃる covers 3 verbs (be/go/come), うかがう covers different ones (visit/ask/listen). When visiting a client: おうかがいします (I will humbly visit). When asking a question: おうかがいしてもよろしいですか (may I humbly ask?)."},

    {type:"mc", q:"ごぞんじですか is used to ask:", opts:["Do you know? (honorific)","Does he know? (humble)","Did anyone know?","Do I know?"], ans:"Do you know? (honorific)",
     hint:"ご存知 is the h... form, used when asking about the other person's knowledge."},

    {type:"teach", trg:"さしあげる", src:"to give (humble, to someone higher)", pos:"verb", gender:null,
     note:"Humble replacement for あげる (to give).\nPair: くださる (hon., give to me) / さしあげる (hum., give to them).",
     example:"A: プレゼントをさしあげたいのですが。\nB: きっとよろこばれますよ。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I would like to give a present.\nB: I am sure they will be pleased.\nA: When was it?\nB: It was last summer.",
     funFact:"さしあげる is the humble giving verb. In standard speech: あげる (I give). In keigo: さしあげる (I humbly give upward). The kanji 差し上げる means 'to hold out and raise up,' as if physically elevating the gift to the recipient. This verb pair (くださる/さしあげる) is the keigo of gift-giving."},

    {type:"teach", trg:"めしあがる", src:"to eat/drink (honorific, review)", pos:"verb", gender:null,
     note:"Honorific of たべる/のむ. Pair: めしあがる (hon.) / いただく (hum.).\nReviewing for pair comparison.",
     example:"A: どうぞめしあがってください。\nB: では、いただきます。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Please help yourself. (honorific for their eating)\nB: I will partake. (humble for my eating)\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"This exchange is the perfect keigo pair in action. The host says めしあがってください (please eat, honorific for the guest), and the guest responds いただきます (I will humbly receive/eat). Both speakers correctly apply keigo to the right person: honorific for the other, humble for themselves."},

    {type:"fb", s:"あしたお{1}してもよろしいでしょうか？\n(May I visit you tomorrow? - humble)", a:"うかがい", opts:["うかがい","いき","まいり","たずね"], sSrc:"May I visit you tomorrow?",
     hint:"The humble verb that covers visiting, asking, and hearing. Uses the お + stem + する pattern."},

    {type:"teach", trg:"おめにかかる", src:"to meet (humble)", pos:"verb", gender:null,
     note:"Humble replacement for あう (to meet). Literally: to be placed before your eyes.\nKanji: お目にかかる.",
     example:"A: おめにかかれてうれしいです。\nB: こちらこそ。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I am glad to meet you. (humble)\nB: Likewise.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"お目にかかる literally means 'to hang before your eye,' as if the humble speaker is merely placed in the honored person's line of sight. This beautiful metaphor reflects how kenjougo works: rather than 'I meet you,' it is 'I am placed before you.' The expression おめにかかれてうれしいです is the formal version of あえてうれしいです."},

    {type:"teach", trg:"ぞんじません", src:"I do not know (humble)", pos:"verb", gender:null,
     note:"Humble negative of しる (to know). ぞんじる + ません.\nMore polite than しりません.",
     example:"A: このかたをごぞんじですか？\nB: もうしわけございません。ぞんじません。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Do you know this person?\nB: I am sorry. I do not know them.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"ぞんじません is the humble 'I do not know,' contrasting with しりません (neutral). Adding もうしわけございません (deepest apology) before admitting ignorance is standard business etiquette. Not knowing something a superior expects you to know requires the cushion of a humble apology."},

    {type:"mc", q:"The correct pair for eating is:", opts:["くださる (hon.) / さしあげる (hum.)","めしあがる (hon.) / いただく (hum.)","たべられる (hon.) / たべます (hum.)","おたべになる (hon.) / もうす (hum.)"], ans:"めしあがる (hon.) / いただく (hum.)",
     hint:"The special honorific for eating pairs with the humble verb also used before meals."},

    {type:"tip", title:"Complete Keigo Pair Chart",
     text:"Verb: Honorific (for others) / Humble (for yourself)\n\nいく/くる: いらっしゃる / まいる\nいる: いらっしゃる / おる\nたべる/のむ: めしあがる / いただく\nいう: おっしゃる / もうす\nみる: ごらんになる / はいけんする\nする: なさる / いたす\nくれる: くださる / (no humble)\nあげる: (no honorific) / さしあげる\nもらう: (no honorific) / いただく\nしる: ごぞんじ / ぞんじる\nあう: (おあいになる) / おめにかかる\nきく/いく: (おたずねになる) / うかがう",
     deepDive:{title:"The Three Most Common Keigo Mistakes",
      text:"Mistake 1: Honorific for yourself.\nWrong: わたしはいらっしゃいます (I am here, honorific).\nRight: わたしはおります (I am here, humble).\n\nMistake 2: Humble for a superior.\nWrong: しゃちょうがもうしました (the president said, humble).\nRight: しゃちょうがおっしゃいました (the president said, honorific).\n\nMistake 3: Double keigo (over-polite).\nWrong: おめしあがりになられる (double honorific for eating).\nRight: めしあがる (single honorific is correct).\n\nThe golden rule: honorific for their actions, humble for yours. One layer of keigo per verb, not two."}},

    {type:"match", pairs:[{trg:"ごぞんじ",src:"to know (hon.)"},{trg:"ぞんじる",src:"to know (hum.)"},{trg:"うかがう",src:"to visit/ask (hum.)"},{trg:"さしあげる",src:"to give (hum.)"}]},

    {type:"fb", s:"もうしわけございません。{1}ません。\n(I am sorry. I do not know. - humble)", a:"ぞんじ", opts:["ぞんじ","しり","わかり","おぼえ"], sSrc:"I am sorry. I do not know.",
     hint:"The humble form of しる (to know) in its negative. More polite than しりません."},

    {type:"match", pairs:[{trg:"おめにかかる",src:"to meet (hum.)"},{trg:"ぞんじません",src:"I do not know (hum.)"},{trg:"おっしゃる / もうす",src:"say (hon. / hum.)"},{trg:"めしあがる / いただく",src:"eat (hon. / hum.)"}]},

    {type:"mc", q:"When meeting someone important for the first time, you say:", opts:["みてうれしいです (casual)","あえてうれしいです (neutral)","おめにかかれてうれしいです (humble)","いらっしゃってうれしいです (honorific)"], ans:"おめにかかれてうれしいです (humble)",
     hint:"You h... YOUR action of meeting. The h... verb for 'to meet' replaces あう."},
  ]
};
export default LESSON_5;
