// Batch 11 – Unit 01 (A1.1 Greetings): Question Words & Responding
const BATCH11_L1 = {
  id:"jav2_u01l_b11_1", title:"質問(しつもん)のことば", icon:"❓", xp:15, board:true,
  steps:[
    {type:"intro", title:"質問(しつもん)のことば",
     desc:"Master the essential Japanese question words. These are the building blocks for asking about people, things, places, times, and reasons.",
     goals:["Use だれ, なに, どこ, いつ, なぜ correctly","Form basic questions with question words","Understand question word + particle patterns"]},

    {type:"teach", trg:"だれ", src:"who", pos:"pron", gender:null,
     note:"Question word for people. Polite form: どなた.\nだれ + が = who (subject), だれ + の = whose.",
     example:"A: だれが来(き)ましたか？\nB: 田中(たなか)さんが来(き)ました。",
     exampleSrc:"A: Who came?\nB: Tanaka-san came.",
     funFact:"In casual speech, だれ is standard. どなた is the polite equivalent used with strangers or customers. There is also どちらさま, an even more formal version used at reception desks and in business."},

    {type:"teach", trg:"なに", src:"what", pos:"pron", gender:null,
     note:"Before certain sounds, becomes なん: なんですか, なんじ, なんにん.\nなに is used before particles like を and が.",
     example:"A: なにを食(た)べますか？\nB: お寿司(すし)を食(た)べます。",
     exampleSrc:"A: What will you eat?\nB: I will eat sushi.",
     funFact:"The なに vs なん switch depends on the next sound. Before た, だ, な row sounds and counters, use なん. Before other particles like を and が, use なに. Japanese children learn this distinction naturally by age three."},

    {type:"teach", trg:"どこ", src:"where", pos:"pron", gender:null,
     note:"どこ + に = where (destination), どこ + で = where (action location).\nPolite: どちら.",
     example:"A: 駅(えき)はどこですか？\nB: あの道(みち)の先(さき)です。",
     exampleSrc:"A: Where is the station?\nB: It is at the end of that road.",
     funFact:"The こそあど system is a core feature of Japanese. こ = near speaker, そ = near listener, あ = far from both, ど = question. So ここ (here), そこ (there), あそこ (over there), どこ (where) form a perfect set."},

    {type:"teach", trg:"いつ", src:"when", pos:"pron", gender:null,
     note:"Does not need a particle in most sentences.\nいつから = since when, いつまで = until when.",
     example:"A: いつ日本(にほん)に行(い)きますか？\nB: 来年(らいねん)の春(はる)に行(い)きます。",
     exampleSrc:"A: When will you go to Japan?\nB: I will go next spring.",
     funFact:"Unlike other question words, いつ does not take the particle か in informal speech. In formal speech you add か: いつですか. It is one of the few question words that can stand alone as a complete question: いつ？ (When?)"},

    {type:"teach", trg:"なぜ", src:"why", pos:"adv", gender:null,
     note:"Formal. Casual alternatives: どうして (neutral), なんで (very casual).\nAll three mean 'why' but differ in politeness.",
     example:"A: なぜ日本語(にほんご)を勉強(べんきょう)していますか？\nB: 日本(にほん)の文化(ぶんか)が好(す)きだからです。",
     exampleSrc:"A: Why are you studying Japanese?\nB: Because I like Japanese culture.",
     funFact:"The three 'why' words rank by formality: なぜ (formal/written) > どうして (neutral) > なんで (casual). なぜ appears in news and literature. なんで is what friends use. Using なぜ in casual conversation sounds like a detective interrogating someone."},

    {type:"teach", trg:"どう", src:"how / in what way", pos:"adv", gender:null,
     note:"Asks about manner or state. どうですか = How is it?\nどうやって = how (method).",
     example:"A: 日本語(にほんご)の勉強(べんきょう)はどうですか？\nB: 楽(たの)しいですが、漢字(かんじ)が難(むずか)しいです。",
     exampleSrc:"A: How is your Japanese study?\nB: It is fun, but kanji is difficult.",
     funFact:"どう is incredibly versatile. どうぞ (please/go ahead), どうも (thanks/somehow), どういたしまして (you are welcome) all derive from this root. It is one of the most productive words in Japanese."},

    {type:"teach", trg:"いくつ", src:"how many / how old", pos:"pron", gender:null,
     note:"For counting things without a specific counter.\nFor age: おいくつですか (polite).",
     example:"A: りんごはいくつありますか？\nB: 三(み)っつあります。",
     exampleSrc:"A: How many apples are there?\nB: There are three.",
     funFact:"いくつ uses the native Japanese counting system (ひとつ, ふたつ, みっつ...). When asking age, it is actually asking 'how many years' using this native system. Children's ages are often asked with いくつ, while adults get なんさい."},

    {type:"teach", trg:"どれ", src:"which one (of three or more)", pos:"pron", gender:null,
     note:"For choosing among 3+ items. For two items, use どちら.\nPoints to a specific item.",
     example:"A: どれが好(す)きですか？\nB: 赤(あか)いのが好(す)きです。",
     exampleSrc:"A: Which one do you like?\nB: I like the red one.",
     funFact:"The difference between どれ (which one) and どの (which + noun) trips up many learners. どれ stands alone: どれがいい？ (Which is good?). どの needs a noun: どの本(ほん)がいい？ (Which book is good?). Think of どれ as a pronoun and どの as an adjective."},

    {type:"teach", trg:"どんな", src:"what kind of", pos:"adj", gender:null,
     note:"Always followed by a noun: どんな + noun.\nどんな人(ひと) = what kind of person.",
     example:"A: どんな音楽(おんがく)が好(す)きですか？\nB: ロックが好(す)きです。",
     exampleSrc:"A: What kind of music do you like?\nB: I like rock.",
     funFact:"どんな is a contraction of どのような (what sort of). In casual speech, どんな is standard. In writing or formal speech, どのような sounds more polished. Both are JLPT N5 level and extremely common in daily conversation."},

    {type:"teach", trg:"どちら", src:"which (of two) / where (polite)", pos:"pron", gender:null,
     note:"Polite version of どこ and どっち.\nどちらさま = who (very polite, used at reception).",
     example:"A: コーヒーとお茶(ちゃ)、どちらがいいですか？\nB: お茶(ちゃ)をおねがいします。",
     exampleSrc:"A: Coffee or tea, which would you prefer?\nB: Tea, please.",
     funFact:"どちら pulls double duty: it means 'which of two' and is also the polite form of どこ (where). At a hotel reception you might hear どちらからいらっしゃいましたか (Where did you come from?). Casual equivalent is どっち."},

    {type:"teach", trg:"どのくらい", src:"how much / how long", pos:"adv", gender:null,
     note:"Asks about extent, duration, or amount.\nVariant: どれくらい (same meaning).",
     example:"A: 駅(えき)までどのくらいかかりますか？\nB: 歩(ある)いて十(じゅっ)分(ぷん)くらいです。",
     exampleSrc:"A: How long does it take to the station?\nB: About ten minutes on foot.",
     funFact:"This phrase combines どの (which) with くらい (approximately). It asks about quantities, distances, and time spans. Japanese people frequently add くらい or ぐらい after numbers to mean 'about' or 'approximately.'"},

    // Quiz steps
    {type:"mc", q:"「だれ」はどういう意味(いみ)ですか？",
     opts:["Who","What","Where","When"],
     ans:"Who",
     hint:"This question word asks about a person's identity. The polite form is どなた."},

    {type:"fb", s:"駅(えき)は{1}ですか？",
     a:["どこ"],
     opts:["どこ","だれ","なに","いつ"],
     hint:"You are asking about a location. This word means 'where' and is part of the こそあど system.",
     sSrc:"Where is the station?"},

    {type:"match", pairs:[
      {trg:"なに", src:"what"},
      {trg:"いつ", src:"when"},
      {trg:"なぜ", src:"why"},
      {trg:"どう", src:"how"}
    ]},

    {type:"mc", q:"「なに」が「なん」になるのはどの場合(ばあい)ですか？",
     opts:["Before た, だ, な row sounds","Before を and が","Before は and も","Always in questions"],
     ans:"Before た, だ, な row sounds",
     hint:"Think about なんですか and なんじ. The sound that follows determines the reading."},

    {type:"fb", s:"{1}音楽(おんがく)が好(す)きですか？",
     a:["どんな"],
     opts:["どんな","どこ","だれ","いつ"],
     hint:"You are asking about the type or kind of music. This word means 'what kind of' and always precedes a noun.",
     sSrc:"What kind of music do you like?"},

    {type:"mc", q:"二(ふた)つのものから選(えら)ぶとき、どのことばを使(つか)いますか？",
     opts:["どちら","どれ","どこ","どの"],
     ans:"どちら",
     hint:"This word is specifically for choosing between two options. For three or more, you would use a different question word."}
  ]
};
export default BATCH11_L1;
