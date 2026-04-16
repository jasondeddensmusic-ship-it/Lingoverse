// Unit 28 Batch 5 Lesson 1: ぶんご (Classical & Literary Expressions)
const BATCH5_L_1 = {
  id:"jav2_u28l_b5_1", title:"ぶんご", icon:"📜", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんご",
     desc:"Classical Japanese expressions survive in modern formal writing. Learn patterns like ものである (it is the nature of), にほかならない (nothing other than), and いかなる (what kind of / any). These literary forms elevate your writing and reading comprehension to JLPT N1 level.",
     goals:["Use classical expressions in formal writing","Understand ものである, にほかならない, いかなる","Distinguish literary register from colloquial"]},

    {type:"teach", trg:"〜ものである", src:"it is the nature of ~ / it is natural that ~", pos:"part", gender:null,
     note:"Plain form + ものである. States a general truth or natural tendency.\nWritten/formal. にんげんはあやまるものである = humans naturally make mistakes.",
     example:"A: じかんはだれにもびょうどうにあたえられるものである。\nB: そのとおりですね。つかいかたがだいじです。",
     exampleSrc:"A: Time is something given equally to everyone.\nB: That is true. How you use it is what matters.",
     funFact:"ものである states unchangeable truths about the world. もの (thing) + である (is) creates a philosophical observation tone. It appears in essays, speeches, and proverbs. A teacher might say: がくせいはべんきょうするものだ (students are meant to study). It is never used for specific facts, only general truths."},

    {type:"teach", trg:"〜にほかならない", src:"is nothing other than ~ / is precisely ~", pos:"part", gender:null,
     note:"Noun/clause + にほかならない. Strong emphasis that X is exactly Y.\nせいこうのひけつはどりょくにほかならない = the secret of success is nothing other than effort.",
     example:"A: このもんだいのげんいんはコミュニケーションぶそくにほかならない。\nB: やはりたいわがだいじですね。",
     exampleSrc:"A: The cause of this problem is nothing other than lack of communication.\nB: Dialogue is indeed important.",
     funFact:"にほかならない literally means 'it is not other than.' It emphatically identifies something as the sole cause or identity. Academic writing uses it for strong conclusions: この結果は努力の成果にほかならない (this result is nothing other than the fruit of effort). The pattern is too formal for conversation but essential for JLPT N1 and academic Japanese."},

    {type:"teach", trg:"いかなる", src:"what kind of / any / whatever", pos:"adj", gender:null,
     note:"Classical form of どんな. Very formal/literary.\nいかなるりゆうがあっても = whatever reason there may be.",
     example:"A: いかなるこんなんにもまけないきょうじんなせいしんがひつようです。\nB: つよいいしがあればのりこえられますね。",
     exampleSrc:"A: A strong spirit that yields to no difficulty is needed.\nB: With strong will, one can overcome.",
     funFact:"いかなる is the literary equivalent of どんな (what kind of). It appears in legal documents, formal speeches, and literature. いかなるばあいも (in any case), いかなるりゆうであれ (whatever the reason), いかなるひとも (any person). Its gravity makes it inappropriate for casual speech but powerful in rhetoric."},

    {type:"teach", trg:"〜にすぎない", src:"is merely ~ / is nothing more than ~", pos:"part", gender:null,
     note:"Noun/clause + にすぎない. Minimizes or dismisses importance.\nこれはいちれいにすぎない = this is merely one example.",
     example:"A: わたしのいけんはひとりのしみんとしてのいけんにすぎません。\nB: しかし、いちしみんのこえもたいせつです。",
     exampleSrc:"A: My opinion is merely that of one citizen.\nB: However, the voice of one citizen is also important.",
     funFact:"にすぎない uses 過ぎる (to exceed/pass), negated: 'does not exceed X.' It deliberately minimizes something. Politicians use it to downplay criticism: かいしゃくのちがいにすぎない (it is merely a difference of interpretation). Writers use it for modesty: ささやかなこころみにすぎない (it is merely a humble attempt). The pattern is common in JLPT N2/N1."},

    {type:"mc", q:"にほかならない emphasizes:", opts:["That something is precisely and only X","That something might be X","That something is not X","That something is unrelated to X"], ans:"That something is precisely and only X",
     hint:"This pattern strongly identifies s... as the one and only cause or identity."},

    {type:"teach", trg:"〜からこそ", src:"precisely because ~ / it is because ~ that", pos:"part", gender:null,
     note:"Reason + からこそ. Emphasizes the reason as THE key factor.\nくるしいからこそせいちょうする = precisely because it is hard, you grow.",
     example:"A: にほんごがむずかしいからこそ、やりがいがあるのです。\nB: たしかに、たっせいかんがおおきいですね。",
     exampleSrc:"A: Precisely because Japanese is difficult, it is rewarding.\nB: Indeed, the sense of achievement is great.",
     funFact:"からこそ adds こそ (emphasis particle) to から (because). It transforms a simple cause into THE defining reason. Motivational speakers love it: しっぱいしたからこそ (precisely because you failed, you can grow). It reframes negatives as positives. The pattern appears in JLPT N2 and is common in essays arguing why challenges are valuable."},

    {type:"teach", trg:"〜ものの", src:"although / even though (literary)", pos:"part", gender:null,
     note:"Plain form + ものの. Formal concessive. More literary than のに or けど.\nべんきょうしたものの、しけんはむずかしかった = although I studied, the exam was hard.",
     example:"A: けいかくはたてたものの、じっこうにうつすのがむずかしい。\nB: りそうとげんじつのギャップですね。",
     exampleSrc:"A: Although I made a plan, putting it into action is difficult.\nB: It is the gap between ideal and reality.",
     funFact:"ものの is a literary concessive connector. While のに (although, emotional) and けど (but, casual) work in speech, ものの belongs to formal writing. It acknowledges one fact while contrasting it with another, without the emotional disappointment of のに. Academic papers and editorials prefer ものの for balanced, objective contrast."},

    {type:"teach", trg:"わずか", src:"merely / only / a tiny amount", pos:"adv", gender:null,
     note:"Kanji: 僅か. わずかなじかん = a tiny amount of time.\nわずか5ぷんで = in just 5 minutes.",
     example:"A: わずかさんかげつでにほんごがはなせるようになりました。\nB: すばらしいしんぽですね。",
     exampleSrc:"A: In merely three months, I came to be able to speak Japanese.\nB: That is wonderful progress.",
     funFact:"僅か uses a kanji meaning 'slight/barely.' わずか emphasizes how small an amount is, usually with admiration or surprise. わずかなきふ (even a small donation) encourages giving. わずかなじかんで (in just a short time) emphasizes impressive speed. The formal register makes it common in news and academic writing."},

    {type:"tip", title:"Written vs. Spoken Register Pairs",
     text:"Written (formal)     Spoken (casual)\nである              だ / です\nにおいて            で\nおよび              と / そして\nいかなる            どんな\nものの              けど / のに\nにすぎない          だけ / しか...ない\nわずか              ちょっと / すこし\nにほかならない      まさに...だ\n\nMixing registers is poor style. Formal writing uses formal throughout.\nCasual speech uses casual throughout.\nJLPT tests your ability to recognize and use appropriate register."},

    {type:"teach", trg:"きょうじん", src:"strong / tough / robust / tenacious", pos:"adj", gender:null,
     note:"な-adjective. Kanji: 強靭. きょうじんなせいしん = tenacious spirit.\nきょうじんなにくたい = strong body.",
     example:"A: きょうじんなせいしんりょくでこんなんをのりこえました。\nB: せいしんてきなつよさはたいせつですね。",
     exampleSrc:"A: With tenacious mental strength, I overcame the difficulty.\nB: Mental toughness is important.",
     funFact:"強靭 uses 強 (strong) and 靭 (tough/tenacious). It describes not just strength but resilience: the ability to bend without breaking. Japan's disaster preparedness culture values きょうじんなインフラ (resilient infrastructure) and きょうじんなしゃかい (resilient society). After the 2011 earthquake, きょうじんか (strengthening/making resilient) became a key policy term."},

    {type:"teach", trg:"たっせいかん", src:"sense of achievement / feeling of accomplishment", pos:"noun", gender:null,
     note:"Kanji: 達成感. たっせい (achievement) + かん (feeling/sense).\nたっせいかんをあじわう = to savor the sense of achievement.",
     example:"A: むずかしいもくひょうをたっせいしたときのたっせいかんはかくべつです。\nB: くろうしたぶんだけよろこびもおおきいですね。",
     exampleSrc:"A: The sense of achievement when reaching a difficult goal is special.\nB: The harder the struggle, the greater the joy.",
     funFact:"達成感 is highly valued in Japanese education and work culture. The idea that たっせいかん comes from overcoming difficulty (苦労した分だけ) is central to the Japanese philosophy of effort (努力). Teachers design tasks to give students たっせいかん. Companies celebrate team たっせい (achievement). The 感 (feeling) suffix emphasizes the emotional reward of accomplishment."},

    {type:"fb", s:"せいこうのひけつはどりょくに{1}ない。\n(The secret of success is nothing other than effort.)", a:"ほかなら", opts:["ほかなら","すぎ","かぎら","ちがい"], sSrc:"The secret of success is nothing other than effort.",
     hint:"The pattern meaning 'is nothing other than,' emphasizing that X is precisely and only Y."},

    {type:"mc", q:"にすぎない minimizes by saying:", opts:["Something is merely X and nothing more","Something is very important","Something is the best option","Something is impossible"], ans:"Something is merely X and nothing more",
     hint:"This pattern uses 過ぎない (does not exceed) to downplay s...'s significance."},

    {type:"match", pairs:[{trg:"ものである",src:"it is the nature of"},{trg:"にほかならない",src:"nothing other than"},{trg:"にすぎない",src:"merely / nothing more than"},{trg:"からこそ",src:"precisely because"}]},

    {type:"fb", s:"にほんごがむずかしい{1}、やりがいがあるのです。\n(Precisely because Japanese is difficult, it is rewarding.)", a:"からこそ", opts:["からこそ","から","ので","けど"], sSrc:"Precisely because Japanese is difficult, it is rewarding.",
     hint:"The emphasized causal pattern meaning 'precisely because,' using こそ for emphasis."},

    {type:"mc", q:"いかなる is the literary equivalent of:", opts:["どんな (what kind of / any)","いつ (when)","どこ (where)","なぜ (why)"], ans:"どんな (what kind of / any)",
     hint:"This classical adjective replaces the everyday question word for 'what kind of' in formal writing."}
  ]
};
export default BATCH5_L_1;
