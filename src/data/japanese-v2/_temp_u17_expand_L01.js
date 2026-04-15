// Unit 17 Expansion. Lesson 3: にちじょうのうけみ (Passive in Daily Life)
const LESSON_3 = {
  id:"jav2_u17l3", title:"にちじょうのうけみ", icon:"🏠", xp:15, board:true,
  steps:[
    {type:"intro", title:"にちじょうのうけみ",
     desc:"The passive voice is not just for formal settings. Japanese uses passive constantly in everyday life: being told something, being asked for directions, having your seat taken. Master these daily-life passive expressions to sound more natural.",
     goals:["Use passive verbs in everyday situations","Describe experiences with passive (being told, being asked)","Combine passive with time and place expressions"]},

    {type:"teach", trg:"きかれる", src:"to be asked", pos:"verb", gender:null,
     note:"Passive of きく (to ask/listen). Group 1: きく to きか + れる.\nKanji: 聞かれる. Very common in daily life.",
     example:"A: みちをきかれました。\nB: おしえてあげましたか？",
     exampleSrc:"A: I was asked for directions.\nB: Did you tell them?",
     funFact:"聞かれる is one of the most frequently used passives in daily Japanese. Being asked for directions (michi wo kikareru) is a common urban experience. The verb kiku covers both 'ask' and 'listen,' so the passive kikareru can mean 'was asked' or 'was heard' depending on context."},

    {type:"teach", trg:"いわれる", src:"to be told / to be said", pos:"verb", gender:null,
     note:"Passive of いう (to say). Group 1: いう to いわ + れる.\nKanji: 言われる. The most common passive verb.",
     example:"A: いしゃにもっとやすむようにいわれました。\nB: むりしないでくださいね。",
     exampleSrc:"A: I was told by the doctor to rest more.\nB: Please do not overdo it.",
     funFact:"言われる is arguably the single most common passive verb in Japanese. It covers 'was told,' 'was said to,' and 'people say that.' The impersonal passive いわれている means 'it is said that' and introduces common knowledge or proverbs: にほんはあんぜんだといわれている (It is said that Japan is safe)."},

    {type:"teach", trg:"とられる", src:"to have something taken / to be taken", pos:"verb", gender:null,
     note:"Passive of とる (to take). Group 1: とる to とら + れる.\nKanji: 取られる. Often used for seats or possessions.",
     example:"A: せきをとられてしまいました。\nB: べつのせきをさがしましょう。",
     exampleSrc:"A: I had my seat taken.\nB: Let us look for another seat.",
     funFact:"取られる often appears with てしまう (regrettably) to express frustration: せきをとられてしまった (I had my seat taken, unfortunately). In crowded cafes and trains, saving seats is a common concern. Leaving belongings on a seat is the Japanese way to claim it."},

    {type:"teach", trg:"みられる", src:"to be seen / to be watched", pos:"verb", gender:null,
     note:"Passive of みる (to see). Group 2: み + られる.\nKanji: 見られる. Also the potential form (can see).",
     example:"A: しらないひとにじっとみられました。\nB: こわかったですか？",
     exampleSrc:"A: I was stared at by a stranger.\nB: Were you scared?",
     funFact:"見られる is both passive (to be seen) and potential (can see). Context tells them apart. In the passive sense, it often describes uncomfortable staring. Foreign visitors in rural Japan sometimes experience じろじろみられる (being stared at intently), though this is usually curiosity rather than hostility."},

    {type:"mc", q:"いしゃにやすむようにいわれた means:", opts:["I was told by the doctor to rest","I told the doctor to rest","The doctor rested","I asked the doctor about rest"], ans:"I was told by the doctor to rest",
     hint:"The passive of いう (to say) with に marking who t... you. よう(に) expresses the content of what was said."},

    {type:"teach", trg:"おこられる", src:"to be scolded / to be yelled at", pos:"verb", gender:null,
     note:"Passive of おこる (to get angry). Group 1: おこる to おこら + れる.\nKanji: 怒られる. More emotional than しかられる.",
     example:"A: おくれてじょうしにおこられました。\nB: きをつけてくださいね。",
     exampleSrc:"A: I was scolded by my boss for being late.\nB: Please be careful.",
     funFact:"怒られる describes being on the receiving end of anger. Unlike しかられる (corrective scolding), おこられる implies emotional anger from the other person. Children and employees use this word constantly. The distinction between shikaru (educational) and okoru (emotional) matters in Japanese parenting philosophy."},

    {type:"teach", trg:"さそわれる", src:"to be invited (casual)", pos:"verb", gender:null,
     note:"Passive of さそう (to invite casually). Group 1: さそう to さそわ + れる.\nKanji: 誘われる. More casual than しょうたいされる.",
     example:"A: ともだちにカラオケにさそわれました。\nB: たのしそうですね！",
     exampleSrc:"A: I was invited to karaoke by a friend.\nB: That sounds fun!",
     funFact:"誘われる is the casual invitation passive, used among friends and peers. Compare: しょうたいされる (formal invitations like weddings) vs. さそわれる (casual invitations like karaoke or drinks). Being invited out (sasowareru) signals that you are included in a social group, which matters deeply in Japanese culture."},

    {type:"teach", trg:"おくれる", src:"to be late", pos:"verb", gender:null,
     note:"Group 2 verb. でんしゃにおくれる = miss the train.\nKanji: 遅れる. Not a passive form itself.",
     example:"A: かいぎにおくれてしまいました。\nB: だいじょうぶですか？",
     exampleSrc:"A: I was late for the meeting.\nB: Are you okay?",
     funFact:"遅れる is distinct from おそい (slow). Being late in Japan carries more social weight than in many cultures. Trains that are even one minute late trigger apology announcements. Workers arriving late must apologize formally. The phrase おくれてすみません (sorry for being late) is used daily."},

    {type:"fb", s:"ともだちにカラオケに{1}ました。\n(I was invited to karaoke by a friend.)", a:"さそわれ", opts:["さそわれ","さそって","さそい","さそう"], sSrc:"I was invited to karaoke by a friend.",
     hint:"The passive form of さそう (to invite casually). Group 1: あ-row + れる."},

    {type:"teach", trg:"しつもんされる", src:"to be asked a question", pos:"verb", gender:null,
     note:"Passive of しつもんする (to ask a question). する-verb to される.\nKanji: 質問される.",
     example:"A: じゅぎょうでせんせいにしつもんされました。\nB: こたえられましたか？",
     exampleSrc:"A: I was asked a question by the teacher in class.\nB: Could you answer?",
     funFact:"質問 combines 質 (quality/substance) and 問 (question). Being called on in class (shitsumon sareru) is a nerve-wracking experience for Japanese students, who tend to avoid standing out. The passive form emphasizes the student's feeling of being put on the spot."},

    {type:"teach", trg:"おされる", src:"to be pushed", pos:"verb", gender:null,
     note:"Passive of おす (to push). Group 1: おす to おさ + れる.\nKanji: 押される. Common on crowded trains.",
     example:"A: まんいんでんしゃでおされました。\nB: たいへんでしたね。",
     exampleSrc:"A: I was pushed on a packed train.\nB: That must have been tough.",
     funFact:"押される is an everyday experience on Tokyo rush hour trains. Professional pushers (oshiya) literally push passengers into packed carriages. The passive form perfectly captures the commuter's experience of being a passive victim of the crowd. まんいんでんしゃ (packed train) is a compound every Tokyo resident knows."},

    {type:"mc", q:"せきをとられてしまった means:", opts:["I took a seat successfully","I had my seat taken (unfortunately)","I reserved a seat","Someone offered me a seat"], ans:"I had my seat taken (unfortunately)",
     hint:"The passive of とる (to take) with てしまう expressing regret about the outcome."},

    {type:"tip", title:"Passive in Everyday Situations",
     text:"Daily life passives you will hear constantly:\n\nきかれる: to be asked (directions, questions)\nいわれる: to be told (advice, instructions)\nとられる: to have something taken (seat, photo)\nみられる: to be seen/watched\nおこられる: to be scolded\nさそわれる: to be invited (casual)\nしつもんされる: to be asked a question\nおされる: to be pushed\n\nPattern: [person] に + [verb passive]\nいしゃに + いわれた = was told by the doctor.",
     deepDive:{title:"Passive Feelings",
      text:"In English, passive often sounds stiff or bureaucratic. In Japanese, passive is emotional and personal. Every passive sentence centers the speaker's experience:\n\nいわれた carries weight: someone told you, and it affected you.\nみられた feels uncomfortable: someone watched you.\nさそわれた feels warm: someone included you.\n\nChoosing passive over active in Japanese is not a stylistic preference but an emotional signal. It tells the listener: 'this happened TO me, and here is how I felt about it.'"}},

    {type:"match", pairs:[{trg:"きかれる",src:"to be asked"},{trg:"いわれる",src:"to be told"},{trg:"とられる",src:"to have taken"},{trg:"みられる",src:"to be seen"}]},

    {type:"fb", s:"まんいんでんしゃで{1}ました。\n(I was pushed on a packed train.)", a:"おされ", opts:["おされ","おして","おし","おさえ"], sSrc:"I was pushed on a packed train.",
     hint:"The passive form of おす (to push). Group 1: あ-row + れる."},

    {type:"match", pairs:[{trg:"おこられる",src:"to be scolded"},{trg:"さそわれる",src:"to be invited"},{trg:"しつもんされる",src:"to be asked a question"},{trg:"おされる",src:"to be pushed"}]},

    {type:"mc", q:"Which verb is BOTH passive and potential?", opts:["きかれる","いわれる","みられる","おこられる"], ans:"みられる",
     hint:"Group 2 passive and potential forms are identical. This verb means both 'be seen' and 'can see.'"},
  ]
};
export default LESSON_3;
