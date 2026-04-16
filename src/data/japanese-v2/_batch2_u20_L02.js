// Unit 20 Batch 2 Lesson 2: けいごミス (Common Keigo Mistakes)
const BATCH2_L_2 = {
  id:"jav2_u20l_b2_2", title:"けいごミス", icon:"🚫", xp:15, board:true,
  steps:[
    {type:"intro", title:"けいごミス",
     desc:"Even native Japanese speakers make keigo mistakes. Learn the most common errors: double honorifics, mixing up sonkeigo and kenjougo, and overusing させていただく. Understanding these pitfalls will help you use keigo correctly and confidently.",
     goals:["Identify and avoid double honorific errors","Distinguish proper sonkeigo from kenjougo usage","Recognize overuse of させていただく and find alternatives"]},

    {type:"teach", trg:"にじゅうけいご", src:"double honorific (keigo error)", pos:"noun", gender:null,
     note:"にじゅう (double) + けいご (polite language). Using two honorific forms on one verb.\nExample error: おっしゃられる (double honorific of いう).",
     example:"A: おっしゃられるはまちがいです。おっしゃるがただしいです。\nB: にじゅうけいごにきをつけます。",
     exampleSrc:"A: 'ossharareru' is incorrect. 'ossharu' is correct.\nB: I will be careful about double honorifics.",
     funFact:"二重敬語 is the most common keigo error even among native speakers. It happens when people add passive られる to an already-honorific verb: おっしゃる + られる = おっしゃられる (wrong). The original おっしゃる is already honorific, so adding passive makes it doubly elevated and grammatically incorrect."},

    {type:"teach", trg:"おっしゃられる", src:"[INCORRECT] double honorific of 'to say'", pos:"verb", gender:null,
     note:"WRONG form. おっしゃる is already honorific.\nCorrect: おっしゃる. Wrong: おっしゃられる.",
     example:"A: しゃちょうがおっしゃったとおりです。\nB: そのとおりにいたしましょう。",
     exampleSrc:"A: It is as the president said.\nB: Let us do as instructed.",
     funFact:"おっしゃられる is so widespread that some linguists debate whether it should be accepted. However, traditional grammar considers it an error. Other double honorific traps: ごらんになられる (wrong, should be ごらんになる), おいでになられる (wrong, should be おいでになる). The rule: one honorific marker per verb."},

    {type:"teach", trg:"〜れるけいご", src:"passive-honorific (common but lower-register)", pos:"part", gender:null,
     note:"Using passive form as honorific: よまれる = read (hon.).\nAcceptable but less elegant than special forms.",
     example:"A: しゃちょうはもうおかえりになりましたか？\nB: はい、さきほどかえられました。",
     exampleSrc:"A: Has the president gone home already? (elegant hon.)\nB: Yes, he left a while ago. (passive hon.)",
     funFact:"Using passive as honorific (かえられる for 'he went home') is grammatically correct but considered the 'easy way out.' Dedicated honorific forms (おかえりになる) are more elegant. In business, using passive-honorific suggests you know keigo exists but have not mastered the higher forms."},

    {type:"teach", trg:"うちそとのまちがい", src:"in-group/out-group error", pos:"noun", gender:null,
     note:"Using honorific for your own company members when speaking to outsiders.\nうち = in-group. そと = out-group.",
     example:"A: しゃちょうがまいりますのでおまちください。\nB: かしこまりました。",
     exampleSrc:"A: Our president will come, so please wait. (correct: humble for own boss)\nB: Certainly.",
     funFact:"The uchi-soto (in-group/out-group) rule trips up even native speakers. When a client calls, you must say しゃちょうはいまおりません (humble) not いらっしゃいません (honorific) about your own boss. Your boss is in your group (uchi), so you humble their actions when talking to outsiders (soto)."},

    {type:"mc", q:"Which is the correct keigo for 'the president said'?", opts:["しゃちょうがおっしゃられた","しゃちょうがおっしゃった","しゃちょうがいった","しゃちょうがもうした"], ans:"しゃちょうがおっしゃった",
     hint:"おっしゃる is already honorific. Adding られる creates a double honorific error."},

    {type:"teach", trg:"させていただきすぎ", src:"overusing させていただく", pos:"noun", gender:null,
     note:"Using させていただく where simpler forms work.\nいたします or します are often sufficient.",
     example:"A: ごせつめいさせていただきます...はおおげさです。\nB: ごせつめいいたしますでじゅうぶんです。",
     exampleSrc:"A: 'gosetsumei sasete itadakimasu' is excessive.\nB: 'gosetsumei itashimasu' is sufficient.",
     funFact:"させていただく overuse is a hot topic in Japanese linguistics. Originally reserved for situations where genuine permission was needed, it has spread to nearly every business context. Linguists call it the 'sasete-itadaku pandemic.' While not grammatically wrong, overuse sounds obsequious and can obscure meaning."},

    {type:"teach", trg:"バイトけいご", src:"part-time job keigo (often incorrect)", pos:"noun", gender:null,
     note:"Non-standard keigo used by part-time workers. Often ungrammatical.\nExample: こちらコーヒーになります (this will become coffee, wrong).",
     example:"A: こちらコーヒーになりますは、ただしくありません。\nB: こちらコーヒーでございますがただしいです。",
     exampleSrc:"A: 'kochira koohii ni narimasu' is not correct.\nB: 'kochira koohii de gozaimasu' is correct.",
     funFact:"バイト敬語 (part-time job keigo) is a well-known linguistic phenomenon. Young part-time workers create pseudo-polite forms that sound formal but are grammatically wrong. The classic: こちらコーヒーになります ('this will become coffee' instead of 'this is coffee'). These errors are so widespread they have become a meme in Japan."},

    {type:"fb", s:"しゃちょうは{1}のでおまちください。\n(Our president will come, so please wait.)", a:"まいります", opts:["まいります","いらっしゃいます","きます","おいでになります"], sSrc:"Our president will come, so please wait.",
     hint:"When talking to an outsider about your own boss, use humble (not honorific) forms."},

    {type:"teach", trg:"よろしかったでしょうか", src:"[INCORRECT] was that all right? (バイト keigo)", pos:"intj", gender:null,
     note:"Common バイト keigo error. Past tense used for present situation.\nCorrect: よろしいでしょうか (is that all right?).",
     example:"A: ごちゅうもんはいじょうでよろしいでしょうか？\nB: はい、おねがいします。",
     exampleSrc:"A: Is your order complete?\nB: Yes, please go ahead.",
     funFact:"よろしかったでしょうか uses past tense (よろしかった) for a present situation, which is grammatically strange. The correct form is よろしいでしょうか (present tense). This error is so pervasive in fast food and convenience stores that entire magazine articles have been written about it."},

    {type:"teach", trg:"〜でよろしいでしょうか", src:"is ~ acceptable? / would ~ be all right? (correct polite)", pos:"part", gender:null,
     note:"Correct polite confirmation phrase. でしょうか adds gentle questioning.\nReplace よろしかった (wrong past) with よろしい (correct present).",
     example:"A: おのみものはコーヒーでよろしいでしょうか？\nB: はい、けっこうです。",
     exampleSrc:"A: Is coffee alright for your drink?\nB: Yes, that is fine.",
     funFact:"でよろしいでしょうか is the standard polite confirmation. でしょうか softens the question with doubt/deference: 'would it perhaps be acceptable?' This questioning tone shows the speaker does not presume to know the answer. It is essential in customer service, meetings, and any situation requiring confirmation."},

    {type:"mc", q:"Which is the uchi-soto rule?", opts:["Always use honorific for everyone","Use humble for your in-group when speaking to outsiders","Use honorific for yourself","Use casual speech at work"], ans:"Use humble for your in-group when speaking to outsiders",
     hint:"Your company members (including your boss) are 'uchi.' Use h... forms about them when talking to 'soto' (o...)."},

    {type:"tip", title:"Top Keigo Mistakes to Avoid",
     text:"1. Double honorific (にじゅうけいご):\nWrong: おっしゃられる, ごらんになられる\nRight: おっしゃる, ごらんになる\n\n2. Uchi-soto confusion:\nWrong: しゃちょうがいらっしゃいます (to outsider)\nRight: しゃちょうがまいります (to outsider)\n\n3. させていただく overuse:\nWrong: せつめいさせていただきます (no permission needed)\nRight: ごせつめいいたします (simpler, equally polite)\n\n4. バイト keigo:\nWrong: こちらコーヒーになります\nRight: こちらコーヒーでございます",
     deepDive:{title:"Why Keigo Mistakes Persist",
      text:"Keigo errors persist because:\n\n1. Schools teach basic keigo but not nuances.\n2. Part-time jobs teach imitation, not grammar.\n3. Overcorrection: fear of being rude leads to excessive politeness.\n4. Language change: させていただく is genuinely evolving.\n\nThe good news for learners: even incorrect keigo shows effort and is appreciated. Japanese people are forgiving of keigo mistakes from non-native speakers. The attempt matters more than perfection. Focus on the most common forms first, and refine over time."}},

    {type:"match", pairs:[{trg:"にじゅうけいご",src:"double honorific error"},{trg:"うちそとのまちがい",src:"in-group/out-group error"},{trg:"バイトけいご",src:"part-time job keigo"},{trg:"させていただきすぎ",src:"overusing sasete-itadaku"}]},

    {type:"fb", s:"ごちゅうもんはいじょうで{1}でしょうか？\n(Is your order complete?)", a:"よろしい", opts:["よろしい","よろしかった","いい","よい"], sSrc:"Is your order complete?",
     hint:"Use the present tense of よろしい, not the past tense (which is a バイト keigo error)."},

    {type:"match", pairs:[{trg:"かしこまりました",src:"certainly (service)"},{trg:"でよろしいでしょうか",src:"would that be alright?"},{trg:"よろしかったでしょうか",src:"[INCORRECT] was that ok?"},{trg:"おもてなし",src:"hospitality"}]},

    {type:"mc", q:"こちらコーヒーになります is incorrect because:", opts:["Coffee is too informal for keigo","'Becomes' implies transformation, not identification","You should not serve coffee","The word order is wrong"], ans:"'Becomes' implies transformation, not identification",
     hint:"になります means 'will become.' The item is not becoming coffee; it already IS coffee. Use でございます."},
  ]
};
export default BATCH2_L_2;
