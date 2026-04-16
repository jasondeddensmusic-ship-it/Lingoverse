// Batch 2 expansion for Unit 12 (Ability) — more potential verbs, skills, talents, できる expressions
const BATCH2_L_1 = {
  id:"jav2_u12l_b2_1", title:"のうりょく", icon:"🏅", xp:15, board:true,
  steps:[
  {type:"intro", title:"のうりょく",
   desc:"Expand your ability vocabulary with more potential forms and skill-related expressions. Learn to talk about what you are good at, what you are learning, and how to describe different levels of skill with natural Japanese phrasing.",
   goals:["Form potential verbs for more everyday actions","Describe skill levels: jouzu, heta, maamaa","Express gradual improvement and learning progress"]},

  {type:"teach", trg:"つくれる", src:"can make / can cook", pos:"verb", gender:null,
   note:"Potential of つくる (Group 1): る becomes れる.\nつくる becomes つくれる.",
   example:"A: カレーがつくれますか？\nB: はい、とくいりょうりです。",
   exampleSrc:"A: Can you make curry?\nB: Yes, it is my specialty dish.",
   funFact:"つくる covers both 'make' and 'cook.' つくれる (can make) is essential for talking about cooking skills. Japanese home cooking (katei ryouri) is a valued skill. Many young Japanese take cooking classes before living alone for the first time."},

  {type:"teach", trg:"あるける", src:"can walk", pos:"verb", gender:null,
   note:"Potential of あるく (Group 1): く becomes ける.\nあるく becomes あるける.",
   example:"A: えきまであるけますか？\nB: はい、じゅっぷんぐらいであるけます。",
   exampleSrc:"A: Can you walk to the station?\nB: Yes, I can walk there in about 10 minutes.",
   funFact:"あるける is useful for checking distances. えきまであるけますか？(Can you walk to the station?) is a common question in Japan, where walking is a primary mode of transport. Japanese people walk an average of 6,000-8,000 steps daily."},

  {type:"teach", trg:"のれる", src:"can ride / can take (transport)", pos:"verb", gender:null,
   note:"Potential of のる (Group 1): る becomes れる.\nのる becomes のれる.",
   example:"A: じてんしゃにのれますか？\nB: はい、のれます。",
   exampleSrc:"A: Can you ride a bicycle?\nB: Yes, I can.",
   funFact:"のれる works for all vehicles: じてんしゃにのれる (can ride a bike), うまにのれる (can ride a horse), サーフボードにのれる (can surf). The particle に marks what you ride. Bicycling is extremely common in Japan, with special parking areas at every station."},

  {type:"teach", trg:"まあまあ", src:"so-so / not bad", pos:"adv", gender:null,
   note:"A middle-ground response. Neither good nor bad.\nVery commonly used in everyday speech.",
   example:"A: にほんごがはなせますか？\nB: まあまあはなせます。",
   exampleSrc:"A: Can you speak Japanese?\nB: I can speak it so-so.",
   funFact:"まあまあ is the quintessential non-committal Japanese response. It avoids both bragging and self-deprecation. When asked about a skill, まあまあ is the safe, humble middle ground. It literally comes from まあ (well), doubled for emphasis."},

  {type:"mc", q:"つくれる means:", opts:["must make","can make","want to make","will make"], ans:"can make",
   hint:"The potential form expressing the ability to create or cook something."},

  {type:"teach", trg:"ピアノ", src:"piano", pos:"noun", gender:null,
   note:"Loanword from Italian. Katakana. Piano lessons are very popular in Japan.\nピアノをひく = to play the piano.",
   example:"A: ピアノがひけますか？\nB: すこしひけます。こどものときならいました。",
   exampleSrc:"A: Can you play the piano?\nB: I can play a little. I learned as a child.",
   funFact:"Piano education is huge in Japan. Yamaha and Kawai, two of the world's largest piano makers, are Japanese. Over 3 million Japanese children take piano lessons. The verb for playing piano is ひく (to pull/play strings or keys), different from ふく (to blow, for wind instruments)."},

  {type:"teach", trg:"うんどう", src:"exercise / sports", pos:"noun", gender:null,
   note:"General word for physical activity. うんどうする = to exercise.\nKanji: 運動.",
   example:"A: まいにちうんどうしていますか？\nB: はい、あさジョギングをしています。",
   exampleSrc:"A: Do you exercise every day?\nB: Yes, I jog in the morning.",
   funFact:"運動 combines 運 (carry/luck) and 動 (move). うんどうかい (sports day) is a major annual event at every Japanese school, featuring relay races, tug-of-war, and choreographed group exercises. The whole community often attends and cheers."},

  {type:"teach", trg:"ギター", src:"guitar", pos:"noun", gender:null,
   note:"Loanword from English/Spanish. Katakana.\nギターをひく = to play guitar.",
   example:"A: ギターがひけますか？\nB: いいえ、ひけません。でもならいたいです。",
   exampleSrc:"A: Can you play guitar?\nB: No, I cannot. But I want to learn.",
   funFact:"Guitar is Japan's most popular instrument after piano. The acoustic guitar scene is thriving, with Japanese-made guitars (Takamine, Ibanez) being world-renowned. ひく is used for all string and keyboard instruments, while たたく (to hit) is used for drums."},

  {type:"fb", s:"じてんしゃに{1}ますか？\n(Can you ride a bicycle?)", a:"のれ", opts:["のれ","のり","のって","のる"], sSrc:"Can you ride a bicycle?",
   hint:"The potential stem of のる (to ride). Change る to れ."},

  {type:"teach", trg:"ならう", src:"to learn / to take lessons", pos:"verb", gender:null,
   note:"Group 1 verb. Specifically for learning from a teacher.\nKanji: 習う. Different from まなぶ (to study/learn academically).",
   example:"A: ピアノをならっていますか？\nB: はい、まいしゅうならっています。",
   exampleSrc:"A: Are you taking piano lessons?\nB: Yes, I take lessons every week.",
   funFact:"ならう implies learning from a teacher or through practice. まなぶ (学ぶ) is more academic or self-directed. You ならう piano (take lessons), but まなぶ history (study it). The distinction reflects Japanese respect for apprenticeship and direct teaching."},

  {type:"teach", trg:"じてんしゃ", src:"bicycle", pos:"noun", gender:null,
   note:"Japan's most common personal vehicle. Strictly regulated (lights, registration).\nKanji: 自転車. Literally 'self-turning-vehicle.'",
   example:"A: じてんしゃでがっこうにいきますか？\nB: はい、まいにちじてんしゃです。",
   exampleSrc:"A: Do you go to school by bicycle?\nB: Yes, bicycle every day.",
   funFact:"自転車 literally breaks down as 自 (self) + 転 (turn) + 車 (vehicle). Japan has over 70 million bicycles. Cycling regulations include mandatory lights at night and no umbrella-riding. Bicycle parking (chuusha) areas at stations are enormous and often multi-storied."},

  {type:"teach", trg:"すこしだけ", src:"just a little / only a little", pos:"adv", gender:null,
   note:"すこし (a little) + だけ (only). A humble way to describe modest ability.",
   example:"A: にほんごができますか？\nB: すこしだけできます。",
   exampleSrc:"A: Can you do Japanese?\nB: Just a little.",
   funFact:"すこしだけ is the ultimate humble response to ability questions. Japanese culture values modesty, so even someone quite skilled might say すこしだけ. It softens the claim more than すこし alone. Adding だけ (only) increases the humility."},

  {type:"teach", trg:"だんだん", src:"gradually / little by little", pos:"adv", gender:null,
   note:"Describes slow, steady change over time. Reduplication for emphasis.\nKanji: 段々.",
   example:"A: にほんごがだんだんわかるようになりました。\nB: すばらしいですね！",
   exampleSrc:"A: I gradually came to understand Japanese.\nB: That is wonderful!",
   funFact:"だんだん (step by step) uses 段 (step/stage) doubled. It describes slow but steady progress. The phrase だんだんよくなる (getting better gradually) is encouraging for learners. A similar word すこしずつ (little by little) emphasizes even smaller increments."},

  {type:"mc", q:"まあまあ means:", opts:["very good","terrible","so-so","perfect"], ans:"so-so",
   hint:"The safe, humble middle-ground response that avoids both bragging and self-criticism."},

  {type:"match", pairs:[{trg:"つくれる",src:"can make"},{trg:"あるける",src:"can walk"},{trg:"のれる",src:"can ride"},{trg:"まあまあ",src:"so-so"}]},

  {type:"match", pairs:[{trg:"ピアノ",src:"piano"},{trg:"ギター",src:"guitar"},{trg:"ならう",src:"to learn/take lessons"},{trg:"だんだん",src:"gradually"}]},

  {type:"fb", s:"にほんごが{1}わかるようになりました。\n(I gradually came to understand Japanese.)", a:"だんだん", opts:["だんだん","すぐに","ぜんぜん","まだ"], sSrc:"I gradually came to understand Japanese.",
   hint:"The adverb meaning 'step by step' or 'little by little' over time."},

  {type:"mc", q:"ならう specifically means:", opts:["to teach others","to study alone","to learn from a teacher","to practice by yourself"], ans:"to learn from a teacher",
   hint:"This verb implies direct instruction, different from self-directed academic study."},

  {type:"fb", s:"にほんごができますか？{1}できます。\n(Can you do Japanese? Just a little.)", a:"すこしだけ", opts:["すこしだけ","たくさん","ぜんぜん","よく"], sSrc:"Can you do Japanese? Just a little.",
   hint:"The humble response combining 'a little' with 'only.'"},
]};
export default BATCH2_L_1;
