// Unit 23 Batch 5 Lesson 1: 名詞化(めいしか)の活用(かつよう) (Applied Nominalization)
const BATCH5_L_1 = {
  id:"jav2_u23l_b5_1", title:"名詞化(めいしか)の活用(かつよう)", icon:"🔧", xp:15, board:true,
  steps:[
    {type:"intro", title:"名詞化(めいしか)の活用(かつよう)",
     desc:"Apply nominalization patterns in real contexts: hobbies, abilities, experiences, and plans. Master ことがある (have experienced), ことができる (can do), ようにする (make an effort to), and ようになる (come to be able to). These patterns turn verbs into building blocks for complex sentences.",
     goals:["Use ことがある for past experiences","Use ことができる for abilities","Use ようにする and ようになる for change and effort"]},

    {type:"teach", trg:"〜たことがある", src:"have experienced ~ / have done ~ before", pos:"part", gender:null,
     note:"Past tense + ことがある. Describes life experiences.\n日本(にほん)に行(い)ったことがある = I have been to Japan.",
     example:"A: 寿司(すし)を作(つく)ったことがありますか？\nB: いいえ、ありません。一度(いちど)作(つく)ってみたいです。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Have you ever made sushi?\nB: No, I have not. I would like to try making it once.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"たことがある is the experience pattern. It asks about lifetime experiences, not recent events. 日本(にほん)に行(い)ったことがありますか (Have you ever been to Japan?) is different from 日本(にほん)に行(い)きましたか (Did you go to Japan?). The first asks about any time in your life; the second asks about a specific occasion. JLPT tests this distinction frequently."},

    {type:"teach", trg:"〜ことができる", src:"to be able to ~ / can ~", pos:"part", gender:null,
     note:"Dictionary form + ことができる. Formal way to express ability.\n日本語(にほんご)を話(はな)すことができます = I can speak Japanese.",
     example:"A: このカードで支払(しはら)うことができますか？\nB: はい、クレジットカードをご利用(りよう)いただけます。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Can I pay with this card?\nB: Yes, you can use a credit card.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"ことができる is the formal alternative to the potential form (話(はな)せる = can speak). Both mean the same, but ことができる sounds more formal and written. Signs in Japan say ご利用(りよう)いただけます or ことができます. In everyday speech, the potential form (られる/える) is more natural. In writing and JLPT, both appear equally."},

    {type:"teach", trg:"〜ようにする", src:"to make an effort to ~ / to try to ~", pos:"part", gender:null,
     note:"Dictionary/negative form + ようにする. Describes making a conscious effort.\n早(はや)く寝(ね)るようにする = make an effort to go to bed early.",
     example:"A: 健康(けんこう)のために毎日(まいにち)運動(うんどう)するようにしています。\nB: 素晴(すば)らしい習慣(しゅうかん)ですね。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: I make an effort to exercise every day for my health.\nB: That is a wonderful habit.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"ようにする implies a conscious, ongoing effort. It does not guarantee success. 毎日(まいにち)運動(うんどう)するようにしている means 'I try to exercise daily' (but sometimes fail). This honest nuance is very Japanese: effort matters even without perfect results. Doctors say 野菜(やさい)を食(た)べるようにしてください (please try to eat vegetables), a gentle instruction allowing human imperfection."},

    {type:"teach", trg:"〜ようになる", src:"to come to ~ / to become able to ~", pos:"part", gender:null,
     note:"Dictionary/negative form + ようになる. Describes gradual change in ability or habit.\n日本語(にほんご)が分(わ)かるようになった = I came to understand Japanese.",
     example:"A: 日本(にほん)に住(す)んでから、刺身(さしみ)が食(た)べられるようになりました。\nB: すごいですね。最初(さいしょ)はだめだったんですか？\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Since living in Japan, I have come to be able to eat sashimi.\nB: That is impressive. You could not eat it at first?\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"ようになる describes a gradual change that happened over time, not a sudden switch. It captures the journey of learning: できなかった (could not) to できるようになった (came to be able to). Language learners love this pattern: 日本語(にほんご)が読(よ)めるようになった (I can now read Japanese). The gradual nature matches the Japanese philosophy of steady improvement (少(すこ)しずつ)."},

    {type:"mc", q:"日本(にほん)に行(い)ったことがある means:", opts:["I have been to Japan (in my lifetime)","I went to Japan recently","I am going to Japan","I want to go to Japan"], ans:"I have been to Japan (in my lifetime)",
     hint:"The たことがある pattern asks about l... experiences, not specific occasions."},

    {type:"teach", trg:"習慣(しゅうかん)", src:"habit / custom / practice", pos:"noun", gender:null,
     note:"Kanji: 習慣(しゅうかん). 生活(せいかつ)習慣(しゅうかん) = lifestyle habits.\n習慣(しゅうかん)にする = to make something a habit.",
     example:"A: よい習慣(しゅうかん)を身(み)につけることが大切(たいせつ)です。\nB: まずは早(はや)く起(お)きる習慣(しゅうかん)から始(はじ)めましょう。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: It is important to develop good habits.\nB: Let us start with the habit of waking up early.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"習慣(しゅうかん) uses 習(しゅう) (learn/practice) and 慣(かん) (accustomed). Japanese culture values 習慣(しゅうかん) highly. Morning routines (朝(あさ)の習慣(しゅうかん)), study habits (勉強(べんきょう)の習慣(しゅうかん)), and seasonal customs (季節(きせつ)の習慣(しゅうかん)) are discussed constantly. The saying 三日坊主(みっかぼうず) (three-day monk) describes someone who cannot maintain a new 習慣(しゅうかん) beyond three days."},

    {type:"teach", trg:"身(み)につける", src:"to acquire (a skill) / to learn / to master", pos:"verb", gender:null,
     note:"身(み) (body) + に + つける (to attach). Literally: attach to your body.\n技術(ぎじゅつ)を身(み)につける = acquire a skill.",
     example:"A: 日本語(にほんご)を身(み)につけるにはどうすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ練習(れんしゅう)することです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: What should I do to acquire Japanese?\nB: Practice a little bit every day.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"身(み)につける literally means 'to attach to your body,' implying that knowledge or skill becomes part of you physically. This metaphor reflects the Japanese emphasis on embodied learning (体(からだ)で覚(おぼ)える, learn with your body). Martial arts, calligraphy, and tea ceremony all value repeated physical practice until skills are 身(み)についた (attached to the body)."},

    {type:"teach", trg:"一度(いちど)", src:"once / one time", pos:"adv", gender:null,
     note:"Kanji: 一度(いちど). 一度(いちど)もない = not even once.\nもう一度(いちど) = one more time.",
     example:"A: 富士山(ふじさん)に一度(いちど)登(のぼ)ってみたいです。\nB: 一度(いちど)は登(のぼ)るべきですよ。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I would like to climb Mt. Fuji once.\nB: You should climb it at least once.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"一度(いちど) is often used with てみたい (want to try) for bucket list items: 一度(いちど)やってみたい (I want to try it once). The phrase 一度(いちど)きり (only once) emphasizes uniqueness. 一期一会(いちごいちえ) (one meeting one chance) is a famous tea ceremony concept meaning every encounter is unique and unrepeatable."},

    {type:"tip", title:"Nominalization Patterns: こと vs. よう",
     text:"こと patterns (using こと as nominalizer):\nたことがある = have experienced\nことができる = can do (formal)\nことにする = decide to\nことになる = it has been decided\n\nよう patterns (using よう for manner/state):\nようにする = make an effort to (conscious)\nようになる = come to be able to (gradual change)\nようにいう = tell someone to\n\nKey difference:\nこと = abstract fact/event\nよう = manner/way/appearance\n\nExample:\n泳(およ)ぐことができる = can swim (ability stated as fact)\n泳(およ)げるようになった = came to be able to swim (process of change)"},

    {type:"teach", trg:"〜ないようにする", src:"to make an effort not to ~ / to try to avoid ~", pos:"part", gender:null,
     note:"Negative form + ようにする. Conscious effort to avoid something.\n遅(おく)れないようにする = try not to be late.",
     example:"A: 会議(かいぎ)に遅(おく)れないようにしてください。\nB: はい、気(き)をつけます。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Please try not to be late for the meeting.\nB: Yes, I will be careful.\nA: How was it?\nB: It was very good.",
     funFact:"ないようにする is the negative counterpart: making an effort NOT to do something. It is common in health advice (食(た)べすぎないようにする, try not to overeat), workplace rules (間違(まちが)えないようにする, try not to make mistakes), and parenting (危(あぶ)ないことをしないようにする, try to avoid dangerous things). The ように softens it from a command to a suggestion."},

    {type:"teach", trg:"とうとう", src:"finally / at last / in the end", pos:"adv", gender:null,
     note:"Emphasizes reaching a conclusion after a long process.\nとうとう合格(ごうかく)した = finally passed. Can be positive or negative.",
     example:"A: 三回(さんかい)目(め)の挑戦(ちょうせん)でとうとう合格(ごうかく)しました。\nB: おめでとう！諦(あきら)めなくてよかったですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: On my third attempt, I finally passed.\nB: Congratulations! It is good that you did not give up.\nA: When was it?\nB: It was last summer.",
     funFact:"とうとう carries a sense of reaching the finish line after a long journey. It works for both positive (とうとう夢(ゆめ)が叶(かな)った, my dream finally came true) and negative (とうとう雨(あめ)が降(ふ)った, it finally rained) outcomes. Similar words: ついに (at last, more literary), やっと (finally, with relief). Each has a slightly different emotional flavor."},

    {type:"fb", s:"日本(にほん)に住(す)んでから刺身(さしみ)が{1}ようになりました。\n(Since living in Japan, I came to be able to eat sashimi.)", a:"食(た)べられる", opts:["食(た)べられる","食(た)べる","食(た)べた","食(た)べて"], sSrc:"Since living in Japan, I came to be able to eat sashimi.",
     hint:"The potential form of 食(た)べる before ようになる (came to be able to)."},

    {type:"mc", q:"ようにする vs. ようになる:", opts:["する = formal, なる = casual","する = conscious effort, なる = natural/gradual change","Both mean the same thing","する = past, なる = future"], ans:"する = conscious effort, なる = natural/gradual change",
     hint:"One is something you deliberately try to do; the other happens gradually over time."},

    {type:"match", pairs:[{trg:"たことがある",src:"have experienced"},{trg:"ことができる",src:"can do (formal)"},{trg:"ようにする",src:"make effort to"},{trg:"ようになる",src:"come to be able to"}]},

    {type:"fb", s:"健康(けんこう)のために毎日(まいにち)運動(うんどう)する{1}しています。\n(I make an effort to exercise every day for health.)", a:"ようにして", opts:["ようにして","ことにして","ためにして","ほうにして"], sSrc:"I make an effort to exercise every day for health.",
     hint:"The pattern meaning 'making a conscious effort to,' using よう + に + する."},

    {type:"mc", q:"三日坊主(みっかぼうず) describes:", opts:["Someone who works three days a week","A three-day holiday","Someone who cannot stick with new habits","A Buddhist monk"], ans:"Someone who cannot stick with new habits",
     hint:"This idiom literally means 'three-day monk,' implying s... gives up a n... practice after only three days."}
  ,{type:"match",pairs:[{trg:"習慣(しゅうかん)",src:"habit / custom / practice"},{trg:"身(み)につける",src:"to acquire (a skill) / to learn / to master"},{trg:"一度(いちど)",src:"once / one time"},{trg:"とうとう",src:"finally / at last / in the end"}]}]
};
export default BATCH5_L_1;
