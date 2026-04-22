// Unit 18 Expansion. Lesson 5: しえきうけみれんしゅう (Causative-Passive Extended Practice)
const LESSON_5 = {
  id:"jav2_u18l5", title:"しえきうけみれんしゅう", icon:"🔄", xp:15, board:true,
  steps:[
    {type:"intro", title:"しえきうけみれんしゅう",
     desc:"Combine causative and passive for advanced practice. The causative-passive is the grammar of complaint: being made to study, being forced to sing, being pressured to apologize. Master more short-form causative-passives and use them naturally in conversation.",
     goals:["Practice more causative-passive forms (full and short)","Express frustration about being forced into situations","Distinguish causative, passive, and causative-passive clearly"]},

    {type:"teach", trg:"うたわされる", src:"to be made to sing (short form)", pos:"verb", gender:null,
     note:"Short causative-passive of うたう (to sing). Group 1: うたう to うたわされる.\nFull form: うたわせられる.",
     example:"A: カラオケでうたわされました。\nB: じょうずにうたえましたか？\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I was made to sing at karaoke.\nB: Could you sing well?\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"うたわされる captures the classic Japanese social pressure to sing at karaoke. Refusing to sing can be difficult in group settings, especially with coworkers. The causative-passive perfectly describes that 'I had no choice but to sing' feeling. Karaoke culture is built on this gentle peer pressure."},

    {type:"teach", trg:"あやまらされる", src:"to be made to apologize (short form)", pos:"verb", gender:null,
     note:"Short causative-passive of あやまる (to apologize). Group 1: あやまる to あやまらされる.\nKanji: 謝らされる.",
     example:"A: じぶんがわるくないのにあやまらされました。\nB: それはくやしいですね。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I was made to apologize even though it was not my fault.\nB: That is frustrating.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"謝らされる is emotionally loaded. Being forced to apologize when you are not at fault (jibun ga waruku nai noni) triggers strong feelings of injustice. In Japanese schools and workplaces, group accountability sometimes means innocent members apologize alongside the guilty. This is a source of cultural debate."},

    {type:"teach", trg:"はしらされる", src:"to be made to run (short form)", pos:"verb", gender:null,
     note:"Short causative-passive of はしる (to run). Group 1: はしる to はしらされる.\nFull form: はしらせられる.",
     example:"A: ぶかつでまいにち10キロはしらされています。\nB: きついですね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I am made to run 10 km every day in club activities.\nB: That is tough.\nA: How long did it take?\nB: About two hours.",
     funFact:"走らされる is the sound of Japanese school sports (部活, bukatsu). School athletic clubs are notoriously rigorous, with daily long-distance running as punishment or training. The causative-passive frames the student-athlete as an unwilling participant in grueling drills ordered by coaches and senior students."},

    {type:"teach", trg:"くやしい", src:"frustrating / vexing / mortifying", pos:"adj", gender:null,
     note:"い-adjective expressing bitter frustration, especially from unfairness.\nKanji: 悔しい.",
     example:"A: まけてくやしかったです。\nB: つぎはがんばりましょう。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: I lost and it was frustrating.\nB: Let us do our best next time.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"悔しい describes the specific frustration of an unfair outcome or a loss you should have won. Athletes say it after defeats. Students say it after failing exams. It is different from simple anger; it contains a drive to try again. Kuyashii tears (kuyashi namida) are a powerful image in Japanese sports culture."},

    {type:"mc", q:"カラオケでうたわされた means:", opts:["I was made to sing at karaoke","I made others sing at karaoke","I enjoy singing at karaoke","I sang willingly at karaoke"], ans:"I was made to sing at karaoke",
     hint:"The short causative-passive always implies the speaker was forced to do the action."},

    {type:"teach", trg:"おぼえさせられる", src:"to be made to memorize", pos:"verb", gender:null,
     note:"Causative-passive of おぼえる (to memorize). Group 2: full form only.\nおぼえ + させられる.",
     example:"A: がっこうでかんじをたくさんおぼえさせられました。\nB: にほんのがっこうはきびしいですね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I was made to memorize lots of kanji at school.\nB: Japanese schools are strict.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"覚えさせられる is every Japanese student's complaint. The education system emphasizes memorization (暗記, anki). Students memorize kanji, historical dates, English vocabulary, and math formulas. The causative-passive frames this as something imposed on them. Group 2 verbs must use the full させられる form, not the short form."},

    {type:"teach", trg:"そうじさせられる", src:"to be made to clean", pos:"verb", gender:null,
     note:"Causative-passive of そうじする (to clean). する-verb: させられる.\nKanji: 掃除させられる.",
     example:"A: まいにちそうじさせられています。\nB: いやですか？\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I am made to clean every day.\nB: Do you dislike it?\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"掃除させられる is a universal student experience in Japan. Japanese schools have no janitors for classrooms. Students clean their own school (souji no jikan, cleaning time) every day. While this builds responsibility, the causative-passive form captures the feeling of it being imposed. This system is admired worldwide as character-building."},

    {type:"fb", s:"じぶんがわるくないのに{1}ました。\n(I was made to apologize even though it was not my fault.)", a:"あやまらされ", opts:["あやまらされ","あやまって","あやまり","あやまられ"], sSrc:"I was made to apologize even though it was not my fault.",
     hint:"The short causative-passive of あやまる (to apologize). Group 1: あ-row + される."},

    {type:"teach", trg:"ならわされる", src:"to be made to learn/practice (short form)", pos:"verb", gender:null,
     note:"Short causative-passive of ならう (to learn/practice). Group 1: ならう to ならわされる.\nKanji: 習わされる.",
     example:"A: こどものころピアノをならわされました。\nB: いまもひけますか？\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I was made to learn piano as a child.\nB: Can you still play?\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"習わされる captures the experience of childhood lessons chosen by parents, not children. Piano (ピアノ), swimming (水泳), calligraphy (書道), and cram school (塾) are common activities Japanese children are 'made to do.' Adults often look back with mixed feelings: grateful for skills but resentful about lost free time."},

    {type:"teach", trg:"ぶかつ", src:"club activities (school)", pos:"noun", gender:null,
     note:"Short for ぶかつどう (部活動). Kanji: 部活.\nAfter-school sports and cultural clubs.",
     example:"A: どんなぶかつにはいっていましたか？\nB: テニスぶでした。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: What club activities were you in?\nB: I was in the tennis club.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"部活 is one of the most defining experiences of Japanese adolescence. Students join sports or cultural clubs and practice almost every day, including weekends and holidays. Bukatsu builds discipline, teamwork, and senpai-kouhai relationships. It is often more time-consuming than actual classes."},

    {type:"mc", q:"おぼえさせられた uses the full form because:", opts:["おぼえる is a する-verb","おぼえる is a Group 2 verb","おぼえる is irregular","The speaker wants to be formal"], ans:"おぼえる is a Group 2 verb",
     hint:"Only G... 1 verbs can use the short causative-passive form. G... 2 must use the full させられる."},

    {type:"tip", title:"Full Form vs. Short Form Review",
     text:"Group 1 (う-verbs): use the SHORT form in speech.\nうたう → うたわされる (not うたわせられる)\nあやまる → あやまらされる\nはしる → はしらされる\nならう → ならわされる\n\nGroup 2 (る-verbs): FULL form only.\nおぼえる → おぼえさせられる (no short form)\nたべる → たべさせられる\n\nする-verbs: FULL form only.\nそうじする → そうじさせられる\nべんきょうする → べんきょうさせられる\n\nIrregulars:\nする → させられる\nくる → こさせられる",
     deepDive:{title:"Causative vs. Passive vs. Causative-Passive",
      text:"Compare three forms of たべる:\n\nCausative: たべさせる = make/let someone eat.\nこどもにやさいをたべさせる (I make the child eat vegetables.)\n\nPassive: たべられる = to be eaten.\nケーキがたべられた (The cake was eaten.)\n\nCausative-passive: たべさせられる = to be made to eat.\nやさいをたべさせられた (I was made to eat vegetables.)\n\nThe key difference: causative gives power to the speaker (I make/let). Causative-passive takes power away (I was forced). This power dynamic is what makes causative-passive the grammar of complaints."}},

    {type:"match", pairs:[{trg:"うたわされる",src:"be made to sing"},{trg:"あやまらされる",src:"be made to apologize"},{trg:"はしらされる",src:"be made to run"},{trg:"ならわされる",src:"be made to learn"}]},

    {type:"fb", s:"がっこうでかんじをたくさん{1}ました。\n(I was made to memorize lots of kanji at school.)", a:"おぼえさせられ", opts:["おぼえさせられ","おぼえて","おぼえられ","おぼえさせて"], sSrc:"I was made to memorize lots of kanji at school.",
     hint:"Full causative-passive of おぼえる (Group 2). Group 2 verbs must use させられる, not the short form."},

    {type:"match", pairs:[{trg:"おぼえさせられる",src:"be made to memorize"},{trg:"そうじさせられる",src:"be made to clean"},{trg:"くやしい",src:"frustrating"},{trg:"ぶかつ",src:"club activities"}]},

    {type:"mc", q:"Which is the correct short causative-passive of かく (to write)?", opts:["かかせる","かかせられる","かかされる","かかれる"], ans:"かかされる",
     hint:"Group 1 short form: あ-row + される. The full form would be かかせられる."},
  ]
};
export default LESSON_5;
