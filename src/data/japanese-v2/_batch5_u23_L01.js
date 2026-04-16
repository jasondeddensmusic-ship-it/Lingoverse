// Unit 23 Batch 5 Lesson 1: めいしかのかつよう (Applied Nominalization)
const BATCH5_L_1 = {
  id:"jav2_u23l_b5_1", title:"めいしかのかつよう", icon:"🔧", xp:15, board:true,
  steps:[
    {type:"intro", title:"めいしかのかつよう",
     desc:"Apply nominalization patterns in real contexts: hobbies, abilities, experiences, and plans. Master ことがある (have experienced), ことができる (can do), ようにする (make an effort to), and ようになる (come to be able to). These patterns turn verbs into building blocks for complex sentences.",
     goals:["Use ことがある for past experiences","Use ことができる for abilities","Use ようにする and ようになる for change and effort"]},

    {type:"teach", trg:"〜たことがある", src:"have experienced ~ / have done ~ before", pos:"part", gender:null,
     note:"Past tense + ことがある. Describes life experiences.\nにほんにいったことがある = I have been to Japan.",
     example:"A: すしをつくったことがありますか？\nB: いいえ、ありません。いちどつくってみたいです。",
     exampleSrc:"A: Have you ever made sushi?\nB: No, I have not. I would like to try making it once.",
     funFact:"たことがある is the experience pattern. It asks about lifetime experiences, not recent events. にほんにいったことがありますか (Have you ever been to Japan?) is different from にほんにいきましたか (Did you go to Japan?). The first asks about any time in your life; the second asks about a specific occasion. JLPT tests this distinction frequently."},

    {type:"teach", trg:"〜ことができる", src:"to be able to ~ / can ~", pos:"part", gender:null,
     note:"Dictionary form + ことができる. Formal way to express ability.\nにほんごをはなすことができます = I can speak Japanese.",
     example:"A: このカードでしはらうことができますか？\nB: はい、クレジットカードをごりよういただけます。",
     exampleSrc:"A: Can I pay with this card?\nB: Yes, you can use a credit card.",
     funFact:"ことができる is the formal alternative to the potential form (はなせる = can speak). Both mean the same, but ことができる sounds more formal and written. Signs in Japan say ごりよういただけます or ことができます. In everyday speech, the potential form (られる/える) is more natural. In writing and JLPT, both appear equally."},

    {type:"teach", trg:"〜ようにする", src:"to make an effort to ~ / to try to ~", pos:"part", gender:null,
     note:"Dictionary/negative form + ようにする. Describes making a conscious effort.\nはやくねるようにする = make an effort to go to bed early.",
     example:"A: けんこうのためにまいにちうんどうするようにしています。\nB: すばらしいしゅうかんですね。",
     exampleSrc:"A: I make an effort to exercise every day for my health.\nB: That is a wonderful habit.",
     funFact:"ようにする implies a conscious, ongoing effort. It does not guarantee success. まいにちうんどうするようにしている means 'I try to exercise daily' (but sometimes fail). This honest nuance is very Japanese: effort matters even without perfect results. Doctors say やさいをたべるようにしてください (please try to eat vegetables), a gentle instruction allowing human imperfection."},

    {type:"teach", trg:"〜ようになる", src:"to come to ~ / to become able to ~", pos:"part", gender:null,
     note:"Dictionary/negative form + ようになる. Describes gradual change in ability or habit.\nにほんごがわかるようになった = I came to understand Japanese.",
     example:"A: にほんにすんでから、さしみがたべられるようになりました。\nB: すごいですね。さいしょはだめだったんですか？",
     exampleSrc:"A: Since living in Japan, I have come to be able to eat sashimi.\nB: That is impressive. You could not eat it at first?",
     funFact:"ようになる describes a gradual change that happened over time, not a sudden switch. It captures the journey of learning: できなかった (could not) to できるようになった (came to be able to). Language learners love this pattern: にほんごがよめるようになった (I can now read Japanese). The gradual nature matches the Japanese philosophy of steady improvement (少しずつ)."},

    {type:"mc", q:"にほんにいったことがある means:", opts:["I have been to Japan (in my lifetime)","I went to Japan recently","I am going to Japan","I want to go to Japan"], ans:"I have been to Japan (in my lifetime)",
     hint:"The たことがある pattern asks about l... experiences, not specific occasions."},

    {type:"teach", trg:"しゅうかん", src:"habit / custom / practice", pos:"noun", gender:null,
     note:"Kanji: 習慣. せいかつしゅうかん = lifestyle habits.\nしゅうかんにする = to make something a habit.",
     example:"A: よいしゅうかんをみにつけることがたいせつです。\nB: まずははやくおきるしゅうかんからはじめましょう。",
     exampleSrc:"A: It is important to develop good habits.\nB: Let us start with the habit of waking up early.",
     funFact:"習慣 uses 習 (learn/practice) and 慣 (accustomed). Japanese culture values しゅうかん highly. Morning routines (朝の習慣), study habits (勉強の習慣), and seasonal customs (季節の習慣) are discussed constantly. The saying 三日坊主 (mikka bouzu, three-day monk) describes someone who cannot maintain a new しゅうかん beyond three days."},

    {type:"teach", trg:"みにつける", src:"to acquire (a skill) / to learn / to master", pos:"verb", gender:null,
     note:"み (body) + に + つける (to attach). Literally: attach to your body.\nぎじゅつをみにつける = acquire a skill.",
     example:"A: にほんごをみにつけるにはどうすればいいですか？\nB: まいにちすこしずつれんしゅうすることです。",
     exampleSrc:"A: What should I do to acquire Japanese?\nB: Practice a little bit every day.",
     funFact:"身につける literally means 'to attach to your body,' implying that knowledge or skill becomes part of you physically. This metaphor reflects the Japanese emphasis on embodied learning (体で覚える, learn with your body). Martial arts, calligraphy, and tea ceremony all value repeated physical practice until skills are みについた (attached to the body)."},

    {type:"teach", trg:"いちど", src:"once / one time", pos:"adv", gender:null,
     note:"Kanji: 一度. いちどもない = not even once.\nもういちど = one more time.",
     example:"A: ふじさんにいちどのぼってみたいです。\nB: いちどはのぼるべきですよ。",
     exampleSrc:"A: I would like to climb Mt. Fuji once.\nB: You should climb it at least once.",
     funFact:"一度 is often used with てみたい (want to try) for bucket list items: いちどやってみたい (I want to try it once). The phrase いちどきり (only once) emphasizes uniqueness. いちごいちえ (一期一会, one meeting one chance) is a famous tea ceremony concept meaning every encounter is unique and unrepeatable."},

    {type:"tip", title:"Nominalization Patterns: こと vs. よう",
     text:"こと patterns (using こと as nominalizer):\nたことがある = have experienced\nことができる = can do (formal)\nことにする = decide to\nことになる = it has been decided\n\nよう patterns (using よう for manner/state):\nようにする = make an effort to (conscious)\nようになる = come to be able to (gradual change)\nようにいう = tell someone to\n\nKey difference:\nこと = abstract fact/event\nよう = manner/way/appearance\n\nExample:\nおよぐことができる = can swim (ability stated as fact)\nおよげるようになった = came to be able to swim (process of change)"},

    {type:"teach", trg:"〜ないようにする", src:"to make an effort not to ~ / to try to avoid ~", pos:"part", gender:null,
     note:"Negative form + ようにする. Conscious effort to avoid something.\nおくれないようにする = try not to be late.",
     example:"A: かいぎにおくれないようにしてください。\nB: はい、きをつけます。",
     exampleSrc:"A: Please try not to be late for the meeting.\nB: Yes, I will be careful.",
     funFact:"ないようにする is the negative counterpart: making an effort NOT to do something. It is common in health advice (たべすぎないようにする, try not to overeat), workplace rules (まちがえないようにする, try not to make mistakes), and parenting (あぶないことをしないようにする, try to avoid dangerous things). The ように softens it from a command to a suggestion."},

    {type:"teach", trg:"とうとう", src:"finally / at last / in the end", pos:"adv", gender:null,
     note:"Emphasizes reaching a conclusion after a long process.\nとうとうごうかくした = finally passed. Can be positive or negative.",
     example:"A: さんかいめのちょうせんでとうとうごうかくしました。\nB: おめでとう！あきらめなくてよかったですね。",
     exampleSrc:"A: On my third attempt, I finally passed.\nB: Congratulations! It is good that you did not give up.",
     funFact:"とうとう carries a sense of reaching the finish line after a long journey. It works for both positive (とうとうゆめがかなった, my dream finally came true) and negative (とうとうあめがふった, it finally rained) outcomes. Similar words: ついに (at last, more literary), やっと (finally, with relief). Each has a slightly different emotional flavor."},

    {type:"fb", s:"にほんにすんでからさしみが{1}ようになりました。\n(Since living in Japan, I came to be able to eat sashimi.)", a:"たべられる", opts:["たべられる","たべる","たべた","たべて"], sSrc:"Since living in Japan, I came to be able to eat sashimi.",
     hint:"The potential form of たべる before ようになる (came to be able to)."},

    {type:"mc", q:"ようにする vs. ようになる:", opts:["する = conscious effort, なる = natural/gradual change","Both mean the same thing","する = past, なる = future","する = formal, なる = casual"], ans:"する = conscious effort, なる = natural/gradual change",
     hint:"One is something you deliberately try to do; the other happens gradually over time."},

    {type:"match", pairs:[{trg:"たことがある",src:"have experienced"},{trg:"ことができる",src:"can do (formal)"},{trg:"ようにする",src:"make effort to"},{trg:"ようになる",src:"come to be able to"}]},

    {type:"fb", s:"けんこうのためにまいにちうんどうする{1}しています。\n(I make an effort to exercise every day for health.)", a:"ようにして", opts:["ようにして","ことにして","ためにして","ほうにして"], sSrc:"I make an effort to exercise every day for health.",
     hint:"The pattern meaning 'making a conscious effort to,' using よう + に + する."},

    {type:"mc", q:"三日坊主 (みっかぼうず) describes:", opts:["Someone who cannot stick with new habits","A Buddhist monk","Someone who works three days a week","A three-day holiday"], ans:"Someone who cannot stick with new habits",
     hint:"This idiom literally means 'three-day monk,' implying someone gives up a new practice after only three days."}
  ]
};
export default BATCH5_L_1;
