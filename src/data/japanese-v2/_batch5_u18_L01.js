// Unit 18 Batch 5 Lesson 1: 使役受(しえきう)け身(み) (Causative-Passive: Being Made To Do)
const BATCH5_L_1 = {
  id:"jav2_u18l_b5_1", title:"使役受(しえきう)け身(み)", icon:"😤", xp:15, board:true,
  steps:[
    {type:"intro", title:"使役受(しえきう)け身(み)",
     desc:"The causative-passive combines both forms: 'I was made to do something.' This is one of the longest verb conjugations in Japanese and expresses forced actions. Soldiers are made to march, students are made to memorize, employees are made to work overtime. It captures situations where you had no choice.",
     goals:["Form causative-passive verbs correctly","Express being forced to do something unwillingly","Use the shortened form させられる → される for Group 1"]},

    {type:"teach", trg:"食(た)べさせられる", src:"to be made to eat", pos:"verb", gender:null,
     note:"Causative-passive of 食(た)べる. Group 2: stem + させられる.\n子供(こども)のころ嫌(きら)いなものを食(た)べさせられた = As a child I was made to eat things I disliked.",
     example:"A: 子供(こども)のころニンジンを食(た)べさせられました。\nB: 今(いま)はニンジンが好(す)きですか？\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: As a child I was made to eat carrots.\nB: Do you like carrots now?\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"食(た)べさせられる is the classic example for teaching causative-passive. The chain is: 食(た)べる (eat) to 食(た)べさせる (make eat) to 食(た)べさせられる (be made to eat). Every Japanese child has been 食(た)べさせられた something they disliked. This shared experience makes it the most relatable example."},

    {type:"teach", trg:"飲(の)まされる", src:"to be made to drink (shortened causative-passive)", pos:"verb", gender:null,
     note:"Shortened causative-passive of 飲(の)む. Full form: 飲(の)ませられる.\nGroup 1 verbs allow shortened form: ませられる to まされる.",
     example:"A: 飲(の)み会(かい)でたくさん飲(の)まされました。\nB: 無理(むり)に飲(の)まない方(ほう)がいいですよ。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: I was made to drink a lot at the drinking party.\nB: You should not drink against your will.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"飲(の)まされる is deeply connected to Japanese drinking culture. At 宴会(えんかい) (banquets), juniors are pressured to drink by seniors. This forced drinking is so common that 飲(の)まされる is an everyday word. Modern awareness of alcohol harassment (アルハラ) is slowly changing this culture."},

    {type:"teach", trg:"待(ま)つ → 待(ま)たされる", src:"to be made to wait (shortened causative-passive)", pos:"verb", gender:null,
     note:"Shortened form of 待(ま)たせられる. Group 1 shortening.\n一時間(いちじかん)も待(ま)たされた = I was made to wait a whole hour.",
     example:"A: 病院(びょういん)で三時間(さんじかん)も待(ま)たされました。\nB: 日本(にほん)の病院(びょういん)は待(ま)つのが普通(ふつう)ですよ。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: I was made to wait three hours at the hospital.\nB: Waiting is normal at Japanese hospitals.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"待(ま)たされる is one of the most commonly used causative-passives. The long wait at Japanese hospitals is legendary. Patients often say 三時間(さんじかん)待(ま)ち三分(さんぷん)診察(しんさつ) (3 hours waiting, 3 minutes consultation). The causative-passive perfectly captures the helpless frustration of forced waiting."},

    {type:"teach", trg:"やらされる", src:"to be made to do (something unwanted)", pos:"verb", gender:null,
     note:"Shortened causative-passive of やる (to do). Full: やらせられる.\n嫌(いや)な仕事(しごと)をやらされる = made to do unpleasant work.",
     example:"A: 新入社員(しんにゅうしゃいん)は雑用(ざつよう)をやらされがちです。\nB: 最初(さいしょ)は誰(だれ)でもそうですよ。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: New employees tend to be made to do miscellaneous tasks.\nB: Everyone goes through that at first.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"やらされる captures the Japanese workplace hierarchy. New employees (新入社員(しんにゅうしゃいん)) are expected to do tedious tasks as part of training. The causative-passive やらされる carries a nuance of resentment. Some companies are changing this tradition, but やらされ感 (the feeling of being forced) remains a common complaint."},

    {type:"mc", q:"食(た)べさせられた means:", opts:["I was made to eat","I made someone eat","I wanted to eat","I could not eat"], ans:"I was made to eat",
     hint:"The causative-passive chain: e... to make-e... to be-m...-to-e...."},

    {type:"teach", trg:"覚(おぼ)えさせられる", src:"to be made to memorize", pos:"verb", gender:null,
     note:"Causative-passive of 覚(おぼ)える. Group 2: stem + させられる.\n漢字(かんじ)を覚(おぼ)えさせられる = made to memorize kanji.",
     example:"A: 毎日(まいにち)漢字(かんじ)を百個(ひゃっこ)覚(おぼ)えさせられました。\nB: 大変(たいへん)でしたね。でも役(やく)に立(た)ったでしょう？\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I was made to memorize 100 kanji every day.\nB: That must have been tough. But it was useful, right?\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"覚(おぼ)えさせられる is the story of every Japanese student. Rote memorization (暗記(あんき)) is a cornerstone of Japanese education. Students are made to memorize kanji, historical dates, English vocabulary, and mathematical formulas. The education system values repetition and discipline, producing high literacy rates but also criticism about creativity."},

    {type:"teach", trg:"走(はし)らされる", src:"to be made to run", pos:"verb", gender:null,
     note:"Shortened causative-passive of 走(はし)る. Full: 走(はし)らせられる.\nGroup 1 shortening: せられる to される.",
     example:"A: 部活(ぶかつ)で毎日(まいにち)十周(じゅっしゅう)走(はし)らされました。\nB: 体育会系(たいいくかいけい)の部活(ぶかつ)は厳(きび)しいですね。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: In club activities I was made to run ten laps every day.\nB: Athletic clubs are strict.\nA: How was it?\nB: It was very good.",
     funFact:"走(はし)らされる is the reality of Japanese school sports clubs (部活(ぶかつ)). Strict training regimes are traditional, with running laps as universal punishment and conditioning. The phrase しごき (intense training/hazing) describes the harsh methods of some coaches. Reform movements are gradually making 部活(ぶかつ) more humane."},

    {type:"tip", title:"Causative-Passive Formation",
     text:"Group 2 (る-verbs): stem + させられる\n食(た)べる → 食(た)べさせられる\n覚(おぼ)える → 覚(おぼ)えさせられる\n\nGroup 1 (う-verbs): Two options\nFull form: あ-row + せられる\n飲(の)む → 飲(の)ませられる\n\nShortened form: あ-row + される\n飲(の)む → 飲(の)まされる (more natural in speech)\n待(ま)つ → 待(ま)たされる\n走(はし)る → 走(はし)らされる\n\nIrregulars:\nする → させられる\nくる → こさせられる\n\nNote: The shortened form only works for Group 1. Group 2 always uses させられる.",
     deepDive:{title:"Why the Shortened Form Exists",
      text:"The full causative-passive (飲(の)ませられる, 6 syllables) is cumbersome in speech. Natural spoken Japanese shortens Group 1 causative-passives:\n\n飲(の)ませられる → 飲(の)まされる\n待(ま)たせられる → 待(ま)たされる\n書(か)かせられる → 書(か)かされる\n\nThis shortened form drops せ, merging the causative and passive into one smooth form.\n\nGroup 2 verbs cannot shorten because the result would be identical to plain passive:\n食(た)べさせられる cannot become 食(た)べされる (not a word)\n\nIn JLPT, both forms are tested. In conversation, the short form dominates."}},

    {type:"teach", trg:"新入社員(しんにゅうしゃいん)", src:"new employee / new hire", pos:"noun", gender:null,
     note:"Kanji: 新入社員(しんにゅうしゃいん). 新入(しんにゅう) (newly entering) + 社員(しゃいん) (company employee).\n四月(しがつ)は新入社員(しんにゅうしゃいん)が始(はじ)まる月(つき)。",
     example:"A: 今年(ことし)の新入社員(しんにゅうしゃいん)は優秀(ゆうしゅう)ですね。\nB: 研修(けんしゅう)も熱心(ねっしん)に受(う)けています。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: This year's new employees are excellent.\nB: They are taking training seriously too.\nA: When was it?\nB: It was last summer.",
     funFact:"April 1st is the universal start date for 新入社員(しんにゅうしゃいん) across Japan. Companies hold entrance ceremonies (入社式(にゅうしゃしき)), and new hires in fresh suits flood train stations. This synchronized entry creates a shared national experience. The phrase 新入社員(しんにゅうしゃいん) evokes youth, nervousness, and new beginnings."},

    {type:"teach", trg:"厳(きび)しい", src:"strict / harsh / severe", pos:"adj", gender:null,
     note:"い-adjective. 厳(きび)しい先生(せんせい) = strict teacher.\n厳(きび)しい練習(れんしゅう) = harsh training.",
     example:"A: 新(あたら)しい上司(じょうし)は厳(きび)しいですか？\nB: 厳(きび)しいですが、公平(こうへい)な人(ひと)です。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Is the new boss strict?\nB: Strict, but fair.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"厳(きび)しい describes the Japanese approach to discipline and quality. A 厳(きび)しい teacher or boss is not necessarily disliked. In traditional Japanese thinking, strictness shows care: the proverb says 可愛(かわい)い子(こ)には旅(たび)をさせよ (send your beloved child on a journey, meaning hardship builds character). Being 厳(きび)しい on yourself (自分(じぶん)に厳(きび)しい) is admired."},

    {type:"teach", trg:"無理(むり)やり", src:"by force / forcibly / against one's will", pos:"adv", gender:null,
     note:"無理(むり)やり食(た)べさせられた = was forcibly made to eat.\nOften used with causative-passive.",
     example:"A: 無理(むり)やり飲(の)まされるのは嫌(いや)です。\nB: 断(ことわ)る勇気(ゆうき)も必要(ひつよう)ですね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I dislike being forced to drink.\nB: Courage to refuse is also necessary.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"無理(むり)やり adds emphasis to forced actions. 無理(むり) means 'impossible/unreasonable' and やり comes from やる (to do). Together: doing something unreasonably by force. In modern Japan, 無理(むり)やり is increasingly associated with harassment awareness. Forcing someone to drink (無理(むり)やり飲(の)ませる) is now recognized as alcohol harassment."},

    {type:"fb", s:"飲(の)み会(かい)でたくさん{1}ました。\n(I was made to drink a lot at the drinking party.)", a:"飲(の)まされ", opts:["飲(の)まされ","飲(の)ませて","飲(の)んで","飲(の)ませられ"], sSrc:"I was made to drink a lot at the drinking party.",
     hint:"The shortened causative-passive of 飲(の)む. Group 1 shortening: 飲(の)ませられる to 飲(の)まされる."},

    {type:"teach", trg:"断(ことわ)る", src:"to refuse / to decline", pos:"verb", gender:null,
     note:"Group 1 verb. 招待(しょうたい)を断(ことわ)る = decline an invitation.\nKanji: 断(ことわ)る.",
     example:"A: 飲(の)み会(かい)の誘(さそ)いを断(ことわ)りました。\nB: 自分(じぶん)の体(からだ)が大事(だいじ)ですからね。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I declined the invitation to the drinking party.\nB: Your health is important, after all.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"断(ことわ)る is difficult culturally in Japan, where direct refusal can damage relationships. Japanese people often use indirect refusals: ちょっと... (well...), 考(かんが)えておきます (I will think about it). The ability to 断(ことわ)る directly is increasingly seen as healthy self-assertion, though the cultural preference for indirect communication persists."},

    {type:"mc", q:"Which is the shortened causative-passive of 待(ま)つ?", opts:["待(ま)たされる","待(ま)たせる","待(ま)たせられる","待(ま)つされる"], ans:"待(ま)たされる",
     hint:"Group 1 shortening drops せ: あ-row + される instead of あ-row + せられる."},

    {type:"teach", trg:"我慢(がまん)させられる", src:"to be made to endure / to be forced to put up with", pos:"verb", gender:null,
     note:"Causative-passive of 我慢(がまん)する (to endure). する-verb: させられる.\n痛(いた)みを我慢(がまん)させられた = was forced to endure pain.",
     example:"A: 長(なが)い時間(じかん)我慢(がまん)させられました。\nB: もう大丈夫(だいじょうぶ)ですか？\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I was made to endure for a long time.\nB: Are you okay now?\nA: How long did it take?\nB: About two hours.",
     funFact:"我慢(がまん) (endurance/patience) is considered a virtue in Japanese culture. The expression 我慢(がまん)する is taught to children from an early age. However, 我慢(がまん)させられる (being forced to endure) has a negative connotation, suggesting unreasonable suffering imposed by others. The line between admirable patience and forced suffering is a cultural debate."},

    {type:"match", pairs:[{trg:"食(た)べさせられる",src:"to be made to eat"},{trg:"飲(の)まされる",src:"to be made to drink"},{trg:"待(ま)たされる",src:"to be made to wait"},{trg:"走(はし)らされる",src:"to be made to run"}]},

    {type:"fb", s:"毎日(まいにち)漢字(かんじ)を{1}ました。\n(I was made to memorize kanji every day.)", a:"覚(おぼ)えさせられ", opts:["覚(おぼ)えさせられ","覚(おぼ)えさせて","覚(おぼ)えられ","覚(おぼ)えて"], sSrc:"I was made to memorize kanji every day.",
     hint:"Causative-passive of 覚(おぼ)える. Group 2 full form: stem + させられる."},

    {type:"mc", q:"無理(むり)やり means:", opts:["By force / against one's will","Naturally / willingly","Carefully / gently","Politely / respectfully"], ans:"By force / against one's will",
     hint:"This adverb describes actions done without consent, often paired with causative-passive verbs."}
  ]
};
export default BATCH5_L_1;
