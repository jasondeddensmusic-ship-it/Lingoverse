// Unit 23 Expansion — Lesson 4: ことのパターン (Advanced こと Patterns)
const LESSON_4 = {
  id:"jav2_u23l4", title:"ことのパターン", icon:"🔑", xp:15, board:true,
  steps:[
    {type:"intro", title:"ことのパターン",
     desc:"Master advanced set patterns built on こと that go beyond basics. Learn ことになっている (it is expected/the rule is), ことがある with past tense (have experienced), ことにしている (have made it a habit), and ということ (the fact that / meaning that). These patterns are JLPT N3 essentials.",
     goals:["Use た+ことがある for life experience","Use ことにしている for personal habits","Use ことになっている for rules and expectations"]},

    {type:"teach", trg:"〜たことがある", src:"to have experienced ~ / to have done ~ before", pos:"part", gender:null,
     note:"Past tense + ことがある = life experience.\nDifferent from dictionary form + ことがある (sometimes happens).",
     example:"A: にほんにいったことがありますか？\nB: はい、にかいいったことがあります。",
     exampleSrc:"A: Have you ever been to Japan?\nB: Yes, I have been twice.",
     funFact:"たことがある is one of the most-used Japanese patterns. It maps to English 'have you ever?' but through a different lens: instead of present perfect tense, Japanese uses 'the matter of having done X exists.' This pattern only works for notable experiences. You would not say まいにちごはんをたべたことがある (I have eaten rice every day) because that is too mundane."},

    {type:"teach", trg:"〜ことにしている", src:"I make it a practice to ~ / I have decided to always ~", pos:"part", gender:null,
     note:"Dictionary form + ことにしている = habitual decision, ongoing practice.\nまいあさはしることにしている = I make it a practice to run every morning.",
     example:"A: まいにちさんじゅっぷんうんどうすることにしています。\nB: けんこうてきですね。",
     exampleSrc:"A: I make it a practice to exercise thirty minutes every day.\nB: That is healthy.",
     funFact:"ことにしている is ことにする (decide) in the ongoing state (している). It means a decision you made that you continue to follow. It is stronger than a simple habit: it implies a conscious choice. よるおそくたべないことにしている (I have decided not to eat late at night) feels more committed than たべない (I don't eat)."},

    {type:"teach", trg:"〜ことになっている", src:"it is the rule that ~ / it is expected that ~", pos:"part", gender:null,
     note:"Dictionary form + ことになっている = an established rule or social expectation.\nExpresses rules without naming who made them.",
     example:"A: このかいしゃではスーツをきることになっています。\nB: カジュアルなふくはだめですか？",
     exampleSrc:"A: At this company, the rule is to wear suits.\nB: Casual clothes are not allowed?",
     funFact:"ことになっている describes rules and norms as if they exist by themselves, without attributing them to anyone. This fits Japanese social structure perfectly: rules just 'are.' にほんではいえのなかでくつをぬぐことになっている (in Japan, the rule is to remove shoes indoors). The passive, impersonal framing avoids naming who decided."},

    {type:"mc", q:"にほんにいったことがある means:", opts:["I sometimes go to Japan","I have been to Japan before","I am going to Japan","Japan is a place I decided to go"], ans:"I have been to Japan before",
     hint:"Past tense (た) + ことがある expresses having experienced something at some point in life."},

    {type:"teach", trg:"〜ということ", src:"the fact that ~ / it means that ~", pos:"part", gender:null,
     note:"Clause + ということ = the fact/meaning of what was said.\nOften follows quotes or explanations. Abbreviation: って (casual).",
     example:"A: あしたやすみだということをしっていましたか？\nB: いいえ、しりませんでした。",
     exampleSrc:"A: Did you know that tomorrow is a day off?\nB: No, I did not know.",
     funFact:"ということ wraps an entire clause into a noun phrase meaning 'the fact/matter of.' It is the backbone of indirect speech and explanation in Japanese. The casual abbreviation って is one of the most common sounds in spoken Japanese: あしたやすみだって (I heard tomorrow is off). ということは (if that is the case) introduces logical deductions."},

    {type:"teach", trg:"〜ということは", src:"if that is the case / that means", pos:"part", gender:null,
     note:"ということは = so, that means. Draws a conclusion from what was said.\nUsed to confirm understanding or make deductions.",
     example:"A: あしたはてんきがわるいそうです。\nB: ということは、ピクニックはちゅうしですか？",
     exampleSrc:"A: I heard tomorrow's weather will be bad.\nB: So that means the picnic is cancelled?",
     funFact:"ということは acts as a logical bridge: given fact A, conclusion B follows. It is the spoken equivalent of したがって but more conversational and interactive. In classroom settings, teachers use it to check understanding: しけんがないということは、じゅぎょうもないということですか？ (no exam means no class either?)."},

    {type:"teach", trg:"しゅうかん", src:"habit / custom", pos:"noun", gender:null,
     note:"Kanji: 習慣. しゅう (learn/practice) + かん (accustom).\nせいかつしゅうかん = lifestyle habits.",
     example:"A: いいしゅうかんをつけることがたいせつです。\nB: たとえばどんなしゅうかんですか？",
     exampleSrc:"A: It is important to develop good habits.\nB: For example, what kind of habits?",
     funFact:"習慣 combines 習 (learn through practice) and 慣 (become accustomed). Japanese culture values しゅうかん deeply: early rising (早起き), bathing at night (入浴), and seasonal cleaning (大掃除, year-end cleaning). The phrase せいかつしゅうかんびょう (lifestyle disease) shows how seriously habits are taken as health determinants."},

    {type:"fb", s:"まいにちうんどうする___にしています。\n(I make it a practice to exercise every day.)", a:"こと", opts:["こと","の","もの","ところ"], sSrc:"I make it a practice to exercise every day.",
     hint:"The nominalizer in the fixed pattern expressing an ongoing habitual decision."},

    {type:"teach", trg:"〜ないことにしている", src:"I make it a practice NOT to ~", pos:"part", gender:null,
     note:"Negative form + ことにしている = habitual avoidance.\nA conscious ongoing decision to not do something.",
     example:"A: よるおそくスマホをみないことにしています。\nB: すいみんのためにいいですね。",
     exampleSrc:"A: I make it a practice not to look at my phone late at night.\nB: That is good for sleep.",
     funFact:"ないことにしている is the negative counterpart: a deliberate ongoing avoidance. Japanese health advice columns love this pattern: あまいものをたべないことにしている (I have made it a practice not to eat sweets), おさけをのまないことにしている (I have decided not to drink alcohol). The pattern implies discipline and self-control."},

    {type:"teach", trg:"けいけん", src:"experience", pos:"noun", gender:null,
     note:"Kanji: 経験. けい (pass through) + けん (test/verify).\nけいけんする = to experience.",
     example:"A: がいこくにすんだけいけんはありますか？\nB: はい、にねんかんイギリスにすんでいました。",
     exampleSrc:"A: Do you have experience living abroad?\nB: Yes, I lived in England for two years.",
     funFact:"経験 uses 経 (pass through) and 験 (test/verify): experience is passing through tests. Japanese job hunting (就職活動, shuukatsu) heavily weighs けいけん. Students join clubs, volunteer, and study abroad specifically to build けいけん for interviews. The phrase けいけんしゃ (experienced person) carries respect."},

    {type:"teach", trg:"ルール", src:"rule", pos:"noun", gender:null,
     note:"From English 'rule.' ルールをまもる = to follow a rule.\nAlso: きそく (rule, more formal/Japanese).",
     example:"A: このプールのルールをよんでください。\nB: わかりました。ルールをまもります。",
     exampleSrc:"A: Please read the rules of this pool.\nB: Understood. I will follow the rules.",
     funFact:"ルール (from English 'rule') coexists with the Japanese word きそく (規則). ルール is more casual and common in everyday speech, while きそく appears in legal and formal contexts. Japanese society is highly rule-oriented: ルールをまもる (follow the rules) is drilled into children. The phrase ルールを破る (break the rules) carries serious social stigma."},

    {type:"mc", q:"ことになっている expresses:", opts:["A personal habit","An established rule or expectation","A past experience","A future decision"], ans:"An established rule or expectation",
     hint:"This pattern describes norms and regulations that exist impersonally."},

    {type:"match", pairs:[{trg:"たことがある",src:"have experienced"},{trg:"ことにしている",src:"make it a practice"},{trg:"ことになっている",src:"it is the rule"},{trg:"ということ",src:"the fact that"}]},

    {type:"fb", s:"このかいしゃではスーツをきる___になっています。\n(At this company, the rule is to wear suits.)", a:"こと", opts:["こと","の","もの","ところ"], sSrc:"At this company, the rule is to wear suits.",
     hint:"The nominalizer in the fixed pattern expressing an established rule or norm."},

    {type:"match", pairs:[{trg:"しゅうかん",src:"habit/custom"},{trg:"けいけん",src:"experience"},{trg:"ルール",src:"rule"},{trg:"ということは",src:"that means"}]},

    {type:"mc", q:"ということは is used to:", opts:["Quote someone directly","Draw a logical conclusion from what was said","Describe a personal habit","Express a rule"], ans:"Draw a logical conclusion from what was said",
     hint:"This phrase bridges a fact to its l... implication: 'if that is the case, then...'"},
  ]
};
export default LESSON_4;
