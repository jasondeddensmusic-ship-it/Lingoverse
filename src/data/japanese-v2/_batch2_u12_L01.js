// Batch 2 expansion for Unit 12 (Ability) — more potential verbs, skills, talents, できる expressions
const BATCH2_L_1 = {
  id:"jav2_u12l_b2_1", title:"能力(のうりょく)", icon:"🏅", xp:15, board:true,
  steps:[
  {type:"intro", title:"能力(のうりょく)",
   desc:"Expand your ability vocabulary with more potential forms and skill-related expressions. Learn to talk about what you are good at, what you are learning, and how to describe different levels of skill with natural Japanese phrasing.",
   goals:["Form potential verbs for more everyday actions","Describe skill levels: jouzu, heta, maamaa","Express gradual improvement and learning progress"]},

  {type:"teach", trg:"作(つく)れる", src:"can make / can cook", pos:"verb", gender:null,
   note:"Potential of 作(つく)る (Group 1): る becomes れる.\n作(つく)る becomes 作(つく)れる.",
   example:"A: カレーが作(つく)れますか？\nB: はい、得意料理(とくいりょうり)です。",
   exampleSrc:"A: Can you make curry?\nB: Yes, it is my specialty dish.",
   funFact:"作(つく)る covers both 'make' and 'cook.' 作(つく)れる (can make) is essential for talking about cooking skills. Japanese home cooking (家庭料理(かていりょうり)) is a valued skill. Many young Japanese take cooking classes before living alone for the first time."},

  {type:"teach", trg:"歩(ある)ける", src:"can walk", pos:"verb", gender:null,
   note:"Potential of 歩(ある)く (Group 1): く becomes ける.\n歩(ある)く becomes 歩(ある)ける.",
   example:"A: 駅(えき)まで歩(ある)けますか？\nB: はい、十分(じゅっぷん)ぐらいで歩(ある)けます。",
   exampleSrc:"A: Can you walk to the station?\nB: Yes, I can walk there in about 10 minutes.",
   funFact:"歩(ある)ける is useful for checking distances. 駅(えき)まで歩(ある)けますか？ (Can you walk to the station?) is a common question in Japan, where walking is a primary mode of transport. Japanese people walk an average of 6,000-8,000 steps daily."},

  {type:"teach", trg:"乗(の)れる", src:"can ride / can take (transport)", pos:"verb", gender:null,
   note:"Potential of 乗(の)る (Group 1): る becomes れる.\n乗(の)る becomes 乗(の)れる.",
   example:"A: 自転車(じてんしゃ)に乗(の)れますか？\nB: はい、乗(の)れます。",
   exampleSrc:"A: Can you ride a bicycle?\nB: Yes, I can.",
   funFact:"乗(の)れる works for all vehicles: 自転車(じてんしゃ)に乗(の)れる (can ride a bike), 馬(うま)に乗(の)れる (can ride a horse), サーフボードに乗(の)れる (can surf). The particle に marks what you ride. Bicycling is extremely common in Japan, with special parking areas at every station."},

  {type:"teach", trg:"まあまあ", src:"so-so / not bad", pos:"adv", gender:null,
   note:"A middle-ground response. Neither good nor bad.\nVery commonly used in everyday speech.",
   example:"A: 日本語(にほんご)が話(はな)せますか？\nB: まあまあ話(はな)せます。",
   exampleSrc:"A: Can you speak Japanese?\nB: I can speak it so-so.",
   funFact:"まあまあ is the quintessential non-committal Japanese response. It avoids both bragging and self-deprecation. When asked about a skill, まあまあ is the safe, humble middle ground. It literally comes from まあ (well), doubled for emphasis."},

  {type:"mc", q:"作(つく)れる means:", opts:["must make","can make","want to make","will make"], ans:"can make",
   hint:"The potential form expressing the ability to create or cook something."},

  {type:"teach", trg:"ピアノ", src:"piano", pos:"noun", gender:null,
   note:"Loanword from Italian. Katakana. Piano lessons are very popular in Japan.\nピアノを弾(ひ)く = to play the piano.",
   example:"A: ピアノが弾(ひ)けますか？\nB: 少(すこ)し弾(ひ)けます。子供(こども)のとき習(なら)いました。",
   exampleSrc:"A: Can you play the piano?\nB: I can play a little. I learned as a child.",
   funFact:"Piano education is huge in Japan. Yamaha and Kawai, two of the world's largest piano makers, are Japanese. Over 3 million Japanese children take piano lessons. The verb for playing piano is 弾(ひ)く (to pull/play strings or keys), different from 吹(ふ)く (to blow, for wind instruments)."},

  {type:"teach", trg:"運動(うんどう)", src:"exercise / sports", pos:"noun", gender:null,
   note:"General word for physical activity. 運動(うんどう)する = to exercise.\nKanji: 運動(うんどう).",
   example:"A: 毎日(まいにち)運動(うんどう)していますか？\nB: はい、朝(あさ)ジョギングをしています。",
   exampleSrc:"A: Do you exercise every day?\nB: Yes, I jog in the morning.",
   funFact:"運動 combines 運(うん) (carry/luck) and 動(どう) (move). 運動会(うんどうかい) (sports day) is a major annual event at every Japanese school, featuring relay races, tug-of-war, and choreographed group exercises. The whole community often attends and cheers."},

  {type:"teach", trg:"ギター", src:"guitar", pos:"noun", gender:null,
   note:"Loanword from English/Spanish. Katakana.\nギターを弾(ひ)く = to play guitar.",
   example:"A: ギターが弾(ひ)けますか？\nB: いいえ、弾(ひ)けません。でも習(なら)いたいです。",
   exampleSrc:"A: Can you play guitar?\nB: No, I cannot. But I want to learn.",
   funFact:"Guitar is Japan's most popular instrument after piano. The acoustic guitar scene is thriving, with Japanese-made guitars (Takamine, Ibanez) being world-renowned. 弾(ひ)く is used for all string and keyboard instruments, while 叩(たた)く (to hit) is used for drums."},

  {type:"fb", s:"自転車(じてんしゃ)に{1}ますか？\n(Can you ride a bicycle?)", a:"乗(の)れ", opts:["乗(の)れ","乗(の)り","乗(の)って","乗(の)る"], sSrc:"Can you ride a bicycle?",
   hint:"The potential stem of 乗(の)る (to ride). Change る to れ."},

  {type:"teach", trg:"習(なら)う", src:"to learn / to take lessons", pos:"verb", gender:null,
   note:"Group 1 verb. Specifically for learning from a teacher.\nKanji: 習(なら)う. Different from 学(まな)ぶ (to study/learn academically).",
   example:"A: ピアノを習(なら)っていますか？\nB: はい、毎週(まいしゅう)習(なら)っています。",
   exampleSrc:"A: Are you taking piano lessons?\nB: Yes, I take lessons every week.",
   funFact:"習(なら)う implies learning from a teacher or through practice. 学(まな)ぶ (学(まな)ぶ) is more academic or self-directed. You 習(なら)う piano (take lessons), but 学(まな)ぶ history (study it). The distinction reflects Japanese respect for apprenticeship and direct teaching."},

  {type:"teach", trg:"自転車(じてんしゃ)", src:"bicycle", pos:"noun", gender:null,
   note:"Japan's most common personal vehicle. Strictly regulated (lights, registration).\nKanji: 自転車(じてんしゃ). Literally 'self-turning-vehicle.'",
   example:"A: 自転車(じてんしゃ)で学校(がっこう)に行(い)きますか？\nB: はい、毎日(まいにち)自転車(じてんしゃ)です。",
   exampleSrc:"A: Do you go to school by bicycle?\nB: Yes, bicycle every day.",
   funFact:"自転車(じてんしゃ) literally breaks down as 自(じ) (self) + 転(てん) (turn) + 車(しゃ) (vehicle). Japan has over 70 million bicycles. Cycling regulations include mandatory lights at night and no umbrella-riding. Bicycle parking (駐車(ちゅうしゃ)) areas at stations are enormous and often multi-storied."},

  {type:"teach", trg:"少(すこ)しだけ", src:"just a little / only a little", pos:"adv", gender:null,
   note:"少(すこ)し (a little) + だけ (only). A humble way to describe modest ability.",
   example:"A: 日本語(にほんご)ができますか？\nB: 少(すこ)しだけできます。",
   exampleSrc:"A: Can you do Japanese?\nB: Just a little.",
   funFact:"少(すこ)しだけ is the ultimate humble response to ability questions. Japanese culture values modesty, so even someone quite skilled might say 少(すこ)しだけ. It softens the claim more than 少(すこ)し alone. Adding だけ (only) increases the humility."},

  {type:"teach", trg:"だんだん", src:"gradually / little by little", pos:"adv", gender:null,
   note:"Describes slow, steady change over time. Reduplication for emphasis.\nKanji: 段々(だんだん).",
   example:"A: 日本語(にほんご)がだんだんわかるようになりました。\nB: 素晴(すば)らしいですね！",
   exampleSrc:"A: I gradually came to understand Japanese.\nB: That is wonderful!",
   funFact:"だんだん (step by step) uses 段(だん) (step/stage) doubled. It describes slow but steady progress. The phrase だんだんよくなる (getting better gradually) is encouraging for learners. A similar word 少(すこ)しずつ (little by little) emphasizes even smaller increments."},

  {type:"mc", q:"まあまあ means:", opts:["very good","terrible","so-so","perfect"], ans:"so-so",
   hint:"The safe, humble middle-ground response that avoids both bragging and self-criticism."},

  {type:"match", pairs:[{trg:"作(つく)れる",src:"can make"},{trg:"歩(ある)ける",src:"can walk"},{trg:"乗(の)れる",src:"can ride"},{trg:"まあまあ",src:"so-so"}]},

  {type:"match", pairs:[{trg:"ピアノ",src:"piano"},{trg:"ギター",src:"guitar"},{trg:"習(なら)う",src:"to learn/take lessons"},{trg:"だんだん",src:"gradually"}]},

  {type:"fb", s:"日本語(にほんご)が{1}わかるようになりました。\n(I gradually came to understand Japanese.)", a:"だんだん", opts:["だんだん","すぐに","ぜんぜん","まだ"], sSrc:"I gradually came to understand Japanese.",
   hint:"The adverb meaning 'step by step' or 'little by little' over time."},

  {type:"mc", q:"習(なら)う specifically means:", opts:["to teach others","to study alone","to learn from a teacher","to practice by yourself"], ans:"to learn from a teacher",
   hint:"This verb implies direct instruction, different from self-directed academic study."},

  {type:"fb", s:"日本語(にほんご)ができますか？{1}できます。\n(Can you do Japanese? Just a little.)", a:"少(すこ)しだけ", opts:["少(すこ)しだけ","たくさん","ぜんぜん","よく"], sSrc:"Can you do Japanese? Just a little.",
   hint:"The humble response combining 'a little' with 'only.'"},
{type:"match",pairs:[{trg:"運動(うんどう)",src:"exercise / sports"},{trg:"自転車(じてんしゃ)",src:"bicycle"}]}]};
export default BATCH2_L_1;
