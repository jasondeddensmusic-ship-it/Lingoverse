// Unit 20 Batch 2 Lesson 2: 敬語(けいご)ミス (Common Keigo Mistakes)
const BATCH2_L_2 = {
  id:"jav2_u20l_b2_2", title:"敬語(けいご)ミス", icon:"🚫", xp:15, board:true,
  steps:[
    {type:"intro", title:"敬語(けいご)ミス",
     desc:"Even native Japanese speakers make keigo mistakes. Learn the most common errors: double honorifics, mixing up sonkeigo and kenjougo, and overusing させていただく. Understanding these pitfalls will help you use keigo correctly and confidently.",
     goals:["Identify and avoid double honorific errors","Distinguish proper sonkeigo from kenjougo usage","Recognize overuse of させていただく and find alternatives"]},

    {type:"teach", trg:"二重敬語(にじゅうけいご)", src:"double honorific (keigo error)", pos:"noun", gender:null,
     note:"二重(にじゅう) (double) + 敬語(けいご) (polite language). Using two honorific forms on one verb.\nExample error: おっしゃられる (double honorific of 言(い)う).",
     example:"A: おっしゃられるは間違(まちが)いです。おっしゃるが正(ただ)しいです。\nB: 二重敬語(にじゅうけいご)に気(き)をつけます。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: 'ossharareru' is incorrect. 'ossharu' is correct.\nB: I will be careful about double honorifics.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"二重敬語 is the most common keigo error even among native speakers. It happens when people add passive られる to an already-honorific verb: おっしゃる + られる = おっしゃられる (wrong). The original おっしゃる is already honorific, so adding passive makes it doubly elevated and grammatically incorrect."},

    {type:"teach", trg:"おっしゃられる", src:"[INCORRECT] double honorific of 'to say'", pos:"verb", gender:null,
     note:"WRONG form. おっしゃる is already honorific.\nCorrect: おっしゃる. Wrong: おっしゃられる.",
     example:"A: 社長(しゃちょう)がおっしゃったとおりです。\nB: そのとおりにいたしましょう。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: It is as the president said.\nB: Let us do as instructed.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"おっしゃられる is so widespread that some linguists debate whether it should be accepted. However, traditional grammar considers it an error. Other double honorific traps: ご覧(らん)になられる (wrong, should be ご覧(らん)になる), おいでになられる (wrong, should be おいでになる). The rule: one honorific marker per verb."},

    {type:"teach", trg:"〜れる敬語(けいご)", src:"passive-honorific (common but lower-register)", pos:"part", gender:null,
     note:"Using passive form as honorific: 読(よ)まれる = read (hon.).\nAcceptable but less elegant than special forms.",
     example:"A: 社長(しゃちょう)はもうお帰(かえ)りになりましたか？\nB: はい、先(さき)ほど帰(かえ)られました。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Has the president gone home already? (elegant hon.)\nB: Yes, he left a while ago. (passive hon.)\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"Using passive as honorific (帰(かえ)られる for 'he went home') is grammatically correct but considered the 'easy way out.' Dedicated honorific forms (お帰(かえ)りになる) are more elegant. In business, using passive-honorific suggests you know keigo exists but have not mastered the higher forms."},

    {type:"teach", trg:"内外(うちそと)の間違(まちが)い", src:"in-group/out-group error", pos:"noun", gender:null,
     note:"Using honorific for your own company members when speaking to outsiders.\n内(うち) = in-group. 外(そと) = out-group.",
     example:"A: 社長(しゃちょう)がまいりますのでお待(ま)ちください。\nB: かしこまりました。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Our president will come, so please wait. (correct: humble for own boss)\nB: Certainly.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"The uchi-soto (内外) rule trips up even native speakers. When a client calls, you must say 社長(しゃちょう)はいまおりません (humble) not いらっしゃいません (honorific) about your own boss. Your boss is in your group (内(うち)), so you humble their actions when talking to outsiders (外(そと))."},

    {type:"mc", q:"Which is the correct keigo for 'the president said'?", opts:["社長(しゃちょう)がおっしゃられた","社長(しゃちょう)がおっしゃった","社長(しゃちょう)が言(い)った","社長(しゃちょう)がもうした"], ans:"社長(しゃちょう)がおっしゃった",
     hint:"おっしゃる is already honorific. Adding られる creates a double honorific error."},

    {type:"teach", trg:"させていただきすぎ", src:"overusing させていただく", pos:"noun", gender:null,
     note:"Using させていただく where simpler forms work.\nいたします or します are often sufficient.",
     example:"A: ご説明(せつめい)させていただきます...はおおげさです。\nB: ご説明(せつめい)いたしますで十分(じゅうぶん)です。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: 'gosetsumei sasete itadakimasu' is excessive.\nB: 'gosetsumei itashimasu' is sufficient.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"させていただく overuse is a hot topic in Japanese linguistics. Originally reserved for situations where genuine permission was needed, it has spread to nearly every business context. Linguists call it the 'sasete-itadaku pandemic.' While not grammatically wrong, overuse sounds obsequious and can obscure meaning."},

    {type:"teach", trg:"バイト敬語(けいご)", src:"part-time job keigo (often incorrect)", pos:"noun", gender:null,
     note:"Non-standard keigo used by part-time workers. Often ungrammatical.\nExample: こちらコーヒーになります (this will become coffee, wrong).",
     example:"A: こちらコーヒーになりますは、正(ただ)しくありません。\nB: こちらコーヒーでございますが正(ただ)しいです。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: 'kochira koohii ni narimasu' is not correct.\nB: 'kochira koohii de gozaimasu' is correct.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"バイト敬語(けいご) (part-time job keigo) is a well-known linguistic phenomenon. Young part-time workers create pseudo-polite forms that sound formal but are grammatically wrong. The classic: こちらコーヒーになります ('this will become coffee' instead of 'this is coffee'). These errors are so widespread they have become a meme in Japan."},

    {type:"fb", s:"社長(しゃちょう)は{1}のでお待(ま)ちください。\n(Our president will come, so please wait.)", a:"まいります", opts:["まいります","いらっしゃいます","きます","おいでになります"], sSrc:"Our president will come, so please wait.",
     hint:"When talking to an outsider about your own boss, use humble (not honorific) forms."},

    {type:"teach", trg:"よろしかったでしょうか", src:"[INCORRECT] was that all right? (バイト keigo)", pos:"intj", gender:null,
     note:"Common バイト敬語(けいご) error. Past tense used for present situation.\nCorrect: よろしいでしょうか (is that all right?).",
     example:"A: ご注文(ちゅうもん)は以上(いじょう)でよろしいでしょうか？\nB: はい、お願(ねが)いします。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Is your order complete?\nB: Yes, please go ahead.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"よろしかったでしょうか uses past tense (よろしかった) for a present situation, which is grammatically strange. The correct form is よろしいでしょうか (present tense). This error is so pervasive in fast food and convenience stores that entire magazine articles have been written about it."},

    {type:"teach", trg:"〜でよろしいでしょうか", src:"is ~ acceptable? / would ~ be all right? (correct polite)", pos:"part", gender:null,
     note:"Correct polite confirmation phrase. でしょうか adds gentle questioning.\nReplace よろしかった (wrong past) with よろしい (correct present).",
     example:"A: お飲(の)み物(もの)はコーヒーでよろしいでしょうか？\nB: はい、けっこうです。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Is coffee alright for your drink?\nB: Yes, that is fine.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"でよろしいでしょうか is the standard polite confirmation. でしょうか softens the question with doubt/deference: 'would it perhaps be acceptable?' This questioning tone shows the speaker does not presume to know the answer. It is essential in customer service, meetings, and any situation requiring confirmation."},

    {type:"mc", q:"Which is the uchi-soto rule?", opts:["Always use honorific for everyone","Use humble for your in-group when speaking to outsiders","Use honorific for yourself","Use casual speech at work"], ans:"Use humble for your in-group when speaking to outsiders",
     hint:"Your company members (including your boss) are '内(うち).' Use h... forms about them when talking to '外(そと)' (o...)."},

    {type:"tip", title:"Top Keigo Mistakes to Avoid",
     text:"1. 二重敬語(にじゅうけいご) (double honorific):\nWrong: おっしゃられる, ご覧(らん)になられる\nRight: おっしゃる, ご覧(らん)になる\n\n2. 内外(うちそと)の混乱(こんらん) (uchi-soto confusion):\nWrong: 社長(しゃちょう)がいらっしゃいます (to outsider)\nRight: 社長(しゃちょう)がまいります (to outsider)\n\n3. させていただく overuse:\nWrong: 説明(せつめい)させていただきます (no permission needed)\nRight: ご説明(せつめい)いたします (simpler, equally polite)\n\n4. バイト敬語(けいご):\nWrong: こちらコーヒーになります\nRight: こちらコーヒーでございます",
     deepDive:{title:"Why Keigo Mistakes Persist",
      text:"Keigo errors persist because:\n\n1. Schools teach basic keigo but not nuances.\n2. Part-time jobs teach imitation, not grammar.\n3. Overcorrection: fear of being rude leads to excessive politeness.\n4. Language change: させていただく is genuinely evolving.\n\nThe good news for learners: even incorrect keigo shows effort and is appreciated. Japanese people are forgiving of keigo mistakes from non-native speakers. The attempt matters more than perfection. Focus on the most common forms first, and refine over time."}},

    {type:"match", pairs:[{trg:"二重敬語(にじゅうけいご)",src:"double honorific error"},{trg:"内外(うちそと)の間違(まちが)い",src:"in-group/out-group error"},{trg:"バイト敬語(けいご)",src:"part-time job keigo"},{trg:"させていただきすぎ",src:"overusing sasete-itadaku"}]},

    {type:"fb", s:"ご注文(ちゅうもん)は以上(いじょう)で{1}でしょうか？\n(Is your order complete?)", a:"よろしい", opts:["よろしい","よろしかった","いい","よい"], sSrc:"Is your order complete?",
     hint:"Use the present tense of よろしい, not the past tense (which is a バイト敬語(けいご) error)."},

    {type:"match", pairs:[{trg:"かしこまりました",src:"certainly (service)"},{trg:"でよろしいでしょうか",src:"would that be alright?"},{trg:"よろしかったでしょうか",src:"[INCORRECT] was that ok?"},{trg:"おもてなし",src:"hospitality"}]},

    {type:"mc", q:"こちらコーヒーになります is incorrect because:", opts:["Coffee is too informal for keigo","'Becomes' implies transformation, not identification","You should not serve coffee","The word order is wrong"], ans:"'Becomes' implies transformation, not identification",
     hint:"になります means 'will become.' The item is not becoming coffee; it already IS coffee. Use でございます."},
  ]
};
export default BATCH2_L_2;
