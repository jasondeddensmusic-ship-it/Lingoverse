// Unit 18 Batch 5 Lesson 1: しえきうけみ (Causative-Passive: Being Made To Do)
const BATCH5_L_1 = {
  id:"jav2_u18l_b5_1", title:"しえきうけみ", icon:"😤", xp:15, board:true,
  steps:[
    {type:"intro", title:"しえきうけみ",
     desc:"The causative-passive combines both forms: 'I was made to do something.' This is one of the longest verb conjugations in Japanese and expresses forced actions. Soldiers are made to march, students are made to memorize, employees are made to work overtime. It captures situations where you had no choice.",
     goals:["Form causative-passive verbs correctly","Express being forced to do something unwillingly","Use the shortened form させられる → される for Group 1"]},

    {type:"teach", trg:"たべさせられる", src:"to be made to eat", pos:"verb", gender:null,
     note:"Causative-passive of たべる. Group 2: stem + させられる.\nこどものころきらいなものをたべさせられた = As a child I was made to eat things I disliked.",
     example:"A: こどものころにんじんをたべさせられました。\nB: いまはにんじんがすきですか？",
     exampleSrc:"A: As a child I was made to eat carrots.\nB: Do you like carrots now?",
     funFact:"たべさせられる is the classic example for teaching causative-passive. The chain is: たべる (eat) to たべさせる (make eat) to たべさせられる (be made to eat). Every Japanese child has been たべさせられた something they disliked. This shared experience makes it the most relatable example."},

    {type:"teach", trg:"のまされる", src:"to be made to drink (shortened causative-passive)", pos:"verb", gender:null,
     note:"Shortened causative-passive of のむ. Full form: のませられる.\nGroup 1 verbs allow shortened form: ませられる to まされる.",
     example:"A: のみかいでたくさんのまされました。\nB: むりにのまないほうがいいですよ。",
     exampleSrc:"A: I was made to drink a lot at the drinking party.\nB: You should not drink against your will.",
     funFact:"のまされる is deeply connected to Japanese drinking culture. At enkai (宴会, banquets), juniors are pressured to drink by seniors. This forced drinking is so common that のまされる is an everyday word. Modern awareness of alcohol harassment (アルハラ, aruhara) is slowly changing this culture."},

    {type:"teach", trg:"まつ → またされる", src:"to be made to wait (shortened causative-passive)", pos:"verb", gender:null,
     note:"Shortened form of またせられる. Group 1 shortening.\nいちじかんもまたされた = I was made to wait a whole hour.",
     example:"A: びょういんでさんじかんもまたされました。\nB: にほんのびょういんはまつのがふつうですよ。",
     exampleSrc:"A: I was made to wait three hours at the hospital.\nB: Waiting is normal at Japanese hospitals.",
     funFact:"またされる is one of the most commonly used causative-passives. The long wait at Japanese hospitals is legendary. Patients often say さんじかんまちさんぷんしんさつ (3 hours waiting, 3 minutes consultation). The causative-passive perfectly captures the helpless frustration of forced waiting."},

    {type:"teach", trg:"やらされる", src:"to be made to do (something unwanted)", pos:"verb", gender:null,
     note:"Shortened causative-passive of やる (to do). Full: やらせられる.\nいやなしごとをやらされる = made to do unpleasant work.",
     example:"A: しんにゅうしゃいんはざつようをやらされがちです。\nB: さいしょはだれでもそうですよ。",
     exampleSrc:"A: New employees tend to be made to do miscellaneous tasks.\nB: Everyone goes through that at first.",
     funFact:"やらされる captures the Japanese workplace hierarchy. New employees (新入社員 shinnyuu shain) are expected to do tedious tasks as part of training. The causative-passive やらされる carries a nuance of resentment. Some companies are changing this tradition, but やらされ感 (yarasare-kan, the feeling of being forced) remains a common complaint."},

    {type:"mc", q:"たべさせられた means:", opts:["I was made to eat","I made someone eat","I wanted to eat","I could not eat"], ans:"I was made to eat",
     hint:"The causative-passive chain: e... to make-e... to be-m...-to-e...."},

    {type:"teach", trg:"おぼえさせられる", src:"to be made to memorize", pos:"verb", gender:null,
     note:"Causative-passive of おぼえる. Group 2: stem + させられる.\nかんじをおぼえさせられる = made to memorize kanji.",
     example:"A: まいにちかんじをひゃっこおぼえさせられました。\nB: たいへんでしたね。でもやくにたったでしょう？",
     exampleSrc:"A: I was made to memorize 100 kanji every day.\nB: That must have been tough. But it was useful, right?",
     funFact:"おぼえさせられる is the story of every Japanese student. Rote memorization (暗記 anki) is a cornerstone of Japanese education. Students are made to memorize kanji, historical dates, English vocabulary, and mathematical formulas. The education system values repetition and discipline, producing high literacy rates but also criticism about creativity."},

    {type:"teach", trg:"はしらされる", src:"to be made to run", pos:"verb", gender:null,
     note:"Shortened causative-passive of はしる. Full: はしらせられる.\nGroup 1 shortening: せられる to される.",
     example:"A: ぶかつでまいにちじゅっしゅうはしらされました。\nB: たいいくかいけいのぶかつはきびしいですね。",
     exampleSrc:"A: In club activities I was made to run ten laps every day.\nB: Athletic clubs are strict.",
     funFact:"はしらされる is the reality of Japanese school sports clubs (部活 bukatsu). Strict training regimes are traditional, with running laps as universal punishment and conditioning. The phrase しごき (intense training/hazing) describes the harsh methods of some coaches. Reform movements are gradually making 部活 more humane."},

    {type:"tip", title:"Causative-Passive Formation",
     text:"Group 2 (る-verbs): stem + させられる\nたべる → たべさせられる\nおぼえる → おぼえさせられる\n\nGroup 1 (う-verbs): Two options\nFull form: あ-row + せられる\nのむ → のませられる\n\nShortened form: あ-row + される\nのむ → のまされる (more natural in speech)\nまつ → またされる\nはしる → はしらされる\n\nIrregulars:\nする → させられる\nくる → こさせられる\n\nNote: The shortened form only works for Group 1. Group 2 always uses させられる.",
     deepDive:{title:"Why the Shortened Form Exists",
      text:"The full causative-passive (のませられる, 6 syllables) is cumbersome in speech. Natural spoken Japanese shortens Group 1 causative-passives:\n\nのませられる → のまされる\nまたせられる → またされる\nかかせられる → かかされる\n\nThis shortened form drops せ, merging the causative and passive into one smooth form.\n\nGroup 2 verbs cannot shorten because the result would be identical to plain passive:\nたべさせられる cannot become たべされる (not a word)\n\nIn JLPT, both forms are tested. In conversation, the short form dominates."}},

    {type:"teach", trg:"しんにゅうしゃいん", src:"new employee / new hire", pos:"noun", gender:null,
     note:"Kanji: 新入社員. しんにゅう (newly entering) + しゃいん (company employee).\nApril is when new hires start.",
     example:"A: ことしのしんにゅうしゃいんはゆうしゅうですね。\nB: けんしゅうもねっしんにうけています。",
     exampleSrc:"A: This year's new employees are excellent.\nB: They are taking training seriously too.",
     funFact:"April 1st is the universal start date for 新入社員 across Japan. Companies hold entrance ceremonies (入社式 nyuushashiki), and new hires in fresh suits flood train stations. This synchronized entry creates a shared national experience. The phrase しんにゅうしゃいん evokes youth, nervousness, and new beginnings."},

    {type:"teach", trg:"きびしい", src:"strict / harsh / severe", pos:"adj", gender:null,
     note:"い-adjective. きびしいせんせい = strict teacher.\nきびしいれんしゅう = harsh training.",
     example:"A: あたらしいじょうしはきびしいですか？\nB: きびしいですが、こうへいなひとです。",
     exampleSrc:"A: Is the new boss strict?\nB: Strict, but fair.",
     funFact:"きびしい describes the Japanese approach to discipline and quality. A きびしい teacher or boss is not necessarily disliked. In traditional Japanese thinking, strictness shows care: the proverb says かわいいこにはたびをさせよ (send your beloved child on a journey, meaning hardship builds character). Being きびしい on yourself (じぶんにきびしい) is admired."},

    {type:"teach", trg:"むりやり", src:"by force / forcibly / against one's will", pos:"adv", gender:null,
     note:"むりやりたべさせられた = was forcibly made to eat.\nOften used with causative-passive.",
     example:"A: むりやりのまされるのはいやです。\nB: ことわるゆうきもひつようですね。",
     exampleSrc:"A: I dislike being forced to drink.\nB: Courage to refuse is also necessary.",
     funFact:"むりやり adds emphasis to forced actions. 無理 means 'impossible/unreasonable' and やり comes from やる (to do). Together: doing something unreasonably by force. In modern Japan, むりやり is increasingly associated with harassment awareness. Forcing someone to drink (むりやりのませる) is now recognized as alcohol harassment."},

    {type:"fb", s:"のみかいでたくさん{1}ました。\n(I was made to drink a lot at the drinking party.)", a:"のまされ", opts:["のまされ","のませて","のんで","のませられ"], sSrc:"I was made to drink a lot at the drinking party.",
     hint:"The shortened causative-passive of のむ. Group 1 shortening: のませられる to のまされる."},

    {type:"teach", trg:"ことわる", src:"to refuse / to decline", pos:"verb", gender:null,
     note:"Group 1 verb. しょうたいをことわる = decline an invitation.\nKanji: 断る.",
     example:"A: のみかいのさそいをことわりました。\nB: じぶんのからだがだいじですからね。",
     exampleSrc:"A: I declined the invitation to the drinking party.\nB: Your health is important, after all.",
     funFact:"断る is difficult culturally in Japan, where direct refusal can damage relationships. Japanese people often use indirect refusals: ちょっと... (well...), かんがえておきます (I will think about it). The ability to ことわる directly is increasingly seen as healthy self-assertion, though the cultural preference for indirect communication persists."},

    {type:"mc", q:"Which is the shortened causative-passive of まつ?", opts:["またされる","またせる","またせられる","まつされる"], ans:"またされる",
     hint:"Group 1 shortening drops せ: あ-row + される instead of あ-row + せられる."},

    {type:"teach", trg:"がまんさせられる", src:"to be made to endure / to be forced to put up with", pos:"verb", gender:null,
     note:"Causative-passive of がまんする (to endure). する-verb: させられる.\nいたみをがまんさせられた = was forced to endure pain.",
     example:"A: ながいじかんがまんさせられました。\nB: もうだいじょうぶですか？",
     exampleSrc:"A: I was made to endure for a long time.\nB: Are you okay now?",
     funFact:"がまん (endurance/patience) is considered a virtue in Japanese culture. The expression がまんする is taught to children from an early age. However, がまんさせられる (being forced to endure) has a negative connotation, suggesting unreasonable suffering imposed by others. The line between admirable patience and forced suffering is a cultural debate."},

    {type:"match", pairs:[{trg:"たべさせられる",src:"to be made to eat"},{trg:"のまされる",src:"to be made to drink"},{trg:"またされる",src:"to be made to wait"},{trg:"はしらされる",src:"to be made to run"}]},

    {type:"fb", s:"まいにちかんじを{1}ました。\n(I was made to memorize kanji every day.)", a:"おぼえさせられ", opts:["おぼえさせられ","おぼえさせて","おぼえられ","おぼえて"], sSrc:"I was made to memorize kanji every day.",
     hint:"Causative-passive of おぼえる. Group 2 full form: stem + させられる."},

    {type:"mc", q:"むりやり means:", opts:["By force / against one's will","Naturally / willingly","Carefully / gently","Politely / respectfully"], ans:"By force / against one's will",
     hint:"This adverb describes actions done without consent, often paired with causative-passive verbs."}
  ]
};
export default BATCH5_L_1;
