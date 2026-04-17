// Unit 13 Expansion L4. Life Milestones
// Experience pattern with life events, achievements, and personal growth.

const LESSON_4 = {id:"jav2_u13l4", title:"じんせいのできごと", icon:"🎓", xp:15, board:true, steps:[
  {type:"intro", title:"じんせいのできごと",
   desc:"Discuss life milestones and important experiences. From moving to a new city to learning a new skill, these patterns let you share meaningful stories about your life journey.",
   goals:["Talk about life milestones using experience patterns","Learn vocabulary for life events and achievements","Combine experience patterns with time expressions"]},

  {type:"teach", trg:"ひっこし", src:"moving (to a new home)", pos:"noun", gender:null,
   note:"ひっこす = to move (residence). ひっこしする = also used.\nKanji: 引っ越し.",
   example:"A: がいこくにひっこしたことがありますか？\nB: はい、にほんにひっこしたことがあります。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
   exampleSrc:"A: Have you ever moved to a foreign country?\nB: Yes, I have moved to Japan before.\nA: Who did you go with?\nB: I went with a friend.",
   funFact:"引っ越し combines 引く (pull) and 越す (cross over). Moving day culture in Japan involves specialized moving companies (ひっこしやさん) known for efficiency and care. They even wear white gloves. The busiest moving period is March-April when the school and fiscal year begins."},

  {type:"teach", trg:"にゅういん", src:"hospitalization", pos:"noun", gender:null,
   note:"にゅういんする = to be hospitalized. たいいんする = to be discharged.\nKanji: 入院.",
   example:"A: にゅういんしたことがありますか？\nB: いちどだけあります。こどものときです。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
   exampleSrc:"A: Have you been hospitalized before?\nB: Just once. When I was a child.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
   funFact:"入院 combines 入 (enter) and 院 (institution). Japan's healthcare system is known for relatively long hospital stays compared to Western countries. Visiting hospitalized friends or family (おみまい) is an important social obligation, often with fruit baskets or flowers."},

  {type:"teach", trg:"めんせつ", src:"interview (job/school)", pos:"noun", gender:null,
   note:"めんせつをうける = to have an interview (receive it).\nKanji: 面接.",
   example:"A: にほんごでめんせつをうけたことがありますか？\nB: いいえ、こわくてまだできません。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
   exampleSrc:"A: Have you had a job interview in Japanese?\nB: No, I am too scared and cannot yet.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
   funFact:"面接 combines 面 (face) and 接 (contact), literally 'face-to-face contact.' Japanese job interviews follow strict protocols: knock three times, bow, sit only when invited. The しゅうしょくかつどう (job hunting) season for university students is a highly structured national process."},

  {type:"mc", q:"がいこくにひっこしたことがある means:", opts:["I want to move abroad","I moved abroad recently","I have moved to a foreign country before","I am moving abroad"], ans:"I have moved to a foreign country before",
   hint:"た-form + ことがある describes a past life experience."},

  {type:"teach", trg:"うんてんめんきょ", src:"driver's license", pos:"noun", gender:null,
   note:"うんてん (driving) + めんきょ (license). Essential adult milestone.\nKanji: 運転免許.",
   example:"A: うんてんめんきょをとったことがありますか？\nB: はい、じゅうはっさいのときにとりました。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
   exampleSrc:"A: Have you gotten a driver's license before?\nB: Yes, I got it when I was eighteen.\nA: I am also interested.\nB: Then, how about doing it together next time?",
   funFact:"Getting a driver's license in Japan typically requires attending a driving school (じどうしゃがっこう) for weeks and costs over 300,000 yen. The minimum age is 18. Despite the expense, the license doubles as the most common form of photo ID in Japan."},

  {type:"teach", trg:"しっぱい", src:"failure / mistake", pos:"noun", gender:null,
   note:"しっぱいする = to fail. Opposite: せいこう (success).\nKanji: 失敗.",
   example:"A: おおきなしっぱいをしたことがありますか？\nB: はい、でもしっぱいからまなびました。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
   exampleSrc:"A: Have you ever made a big mistake?\nB: Yes, but I learned from the mistake.\nA: What was it like?\nB: It was much better than I imagined.",
   funFact:"失敗 combines 失 (lose) and 敗 (defeat). The Japanese proverb 'shippai wa seikou no moto' (failure is the origin of success) reflects a cultural acceptance of learning from mistakes. Toyota's 'kaizen' (continuous improvement) philosophy embraces failures as learning opportunities."},

  {type:"teach", trg:"せいこう", src:"success", pos:"noun", gender:null,
   note:"せいこうする = to succeed. Opposite: しっぱい (failure).\nKanji: 成功.",
   example:"A: にほんごのしけんにせいこうしたことがありますか？\nB: はい、きょねんJLPTのN4にごうかくしました。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
   exampleSrc:"A: Have you ever passed a Japanese language exam?\nB: Yes, I passed JLPT N4 last year.\nA: What did you eat?\nB: I ate the local specialty.",
   funFact:"成功 combines 成 (become/achieve) and 功 (merit/achievement). Japanese culture values the process as much as the result. がんばった (gave your best effort) is often praised even in failure. This process-oriented mindset is captured in the word どりょく (effort)."},

  {type:"fb", s:"おおきな{1}をしたことがあります。\n(I have made a big mistake before.)", a:"しっぱい", opts:["しっぱい","せいこう","けいけん","けっこん"], sSrc:"I have made a big mistake before.",
   hint:"The noun meaning 'failure' or 'mistake,' opposite of success."},

  {type:"teach", trg:"いちどだけ", src:"just once / only once", pos:"adv", gender:null,
   note:"いちど (one time) + だけ (only). Specifies frequency of experience.\nにど = twice, さんど = three times.",
   example:"A: ひこうきにのったことがありますか？\nB: いちどだけあります。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
   exampleSrc:"A: Have you ridden an airplane before?\nB: Just once.\nA: That is exciting.\nB: Yes, I am already excited.",
   funFact:"The counter ど (times) is used for frequency of experiences: いちど (once), にど (twice), さんど (three times), よんかい/よんど. Adding だけ (only) emphasizes the limited number. The reply いちどだけ is a natural, concise answer to experience questions."},

  {type:"teach", trg:"こどものとき", src:"when I was a child", pos:"noun", gender:null,
   note:"こども (child) + の (possessive) + とき (time/when).\nUsed to set the time frame for experiences.",
   example:"A: こどものときにうみであそんだことがありますか？\nB: はい、まいなつおばあちゃんのいえのちかくのうみであそびました。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
   exampleSrc:"A: Did you play at the beach when you were a child?\nB: Yes, I played at the beach near my grandmother's house every summer.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
   funFact:"こどものとき is a powerful nostalgia trigger in Japanese conversation. Sharing childhood memories builds intimacy. The pattern works with any noun: がくせいのとき (when I was a student), にほんにいたとき (when I was in Japan). とき clauses are essential for storytelling."},

  {type:"mc", q:"いちどだけあります means:", opts:["Never","Just once","Many times","Twice"], ans:"Just once",
   hint:"いちど means 'o...' and だけ means 'only/just.'"},

  {type:"teach", trg:"わすれられない", src:"unforgettable / cannot forget", pos:"verb", gender:null,
   note:"Potential negative of わすれる. わすれられない = cannot forget.\nUsed for powerful memories.",
   example:"A: わすれられないけいけんはありますか？\nB: はい、はじめてふじさんにのぼったことです。\nA: どうでしたか？\nB: とても良(よ)かったです。",
   exampleSrc:"A: Do you have an unforgettable experience?\nB: Yes, climbing Mt. Fuji for the first time.\nA: How was it?\nB: It was very good.",
   funFact:"わすれられない (unforgettable) is a beautiful word that appears in countless songs, novels, and personal stories. The potential negative form turns the verb 'forget' into an adjective-like expression. わすれられないおもいで (unforgettable memory) is a treasured phrase."},

  {type:"teach", trg:"おもいで", src:"memory / memories", pos:"noun", gender:null,
   note:"Warm, nostalgic memories. おもいでをつくる = to make memories.\nKanji: 思い出.",
   example:"A: にほんでのいちばんのおもいではなんですか？\nB: ともだちとはなみをしたことです。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
   exampleSrc:"A: What is your best memory from Japan?\nB: Going cherry blossom viewing with friends.\nA: When was it?\nB: It was last summer.",
   funFact:"思い出 combines 思い (thoughts/feelings) and 出 (come out), meaning 'feelings that come out' when you remember. The phrase いいおもいでになりました (it became a good memory) is a gracious way to close a shared experience. Souvenir shops are called おみやげやさん, not おもいで shops."},

  {type:"fb", s:"{1}けいけんはありますか？\n(Do you have an unforgettable experience?)", a:"わすれられない", opts:["わすれられない","わすれた","わすれる","わすれている"], sSrc:"Do you have an unforgettable experience?",
   hint:"The potential negative of わすれる, meaning 'cannot forget.'"},

  {type:"match", pairs:[{trg:"ひっこし",src:"moving house"},{trg:"にゅういん",src:"hospitalization"},{trg:"めんせつ",src:"interview"},{trg:"うんてんめんきょ",src:"driver's license"}]},

  {type:"match", pairs:[{trg:"しっぱい",src:"failure"},{trg:"せいこう",src:"success"},{trg:"わすれられない",src:"unforgettable"},{trg:"おもいで",src:"memory"}]},

  {type:"mc", q:"おもいでをつくる means:", opts:["To lose memories","To forget memories","To make memories","To share memories"], ans:"To make memories",
   hint:"つくる means 'to m.../create' and おもいで means 'm....'"},

  {type:"fb", s:"にほんでのいちばんの{1}はなんですか？\n(What is your best memory from Japan?)", a:"おもいで", opts:["おもいで","けいけん","しっぱい","りょこう"], sSrc:"What is your best memory from Japan?",
   hint:"The word for warm, nostalgic memories of past experiences."},

  {type:"tip", title:"Sharing Life Stories",
   text:"Basic experience: た-form + ことがある\nひっこしたことがある (have moved before)\n\nFrequency:\nいちどだけ (just once)\nにど (twice)\nなんども (many times)\n\nTime setting:\nこどものとき (when I was a child)\nがくせいのとき (when I was a student)\n\nEmotional coloring:\nわすれられないけいけん (unforgettable experience)\nいいおもいで (good memory)\nすばらしいけいけん (wonderful experience)",
   deepDive:{title:"Answering experience questions naturally",
    text:"When asked たことがありますか, natural responses include:\n\nYes, with detail:\nはい、にかいあります。(Yes, twice.)\nはい、こどものときにいちどあります。(Yes, once when I was a child.)\n\nNo, with interest:\nいいえ、ないです。でもしてみたいです。(No. But I want to try.)\nまだないです。いつかしたいです。(Not yet. I want to someday.)\n\nAdding emotion:\nはい、すばらしかったです。(Yes, it was wonderful.)\nはい、わすれられません。(Yes, I cannot forget it.)"}},
]};
export default LESSON_4;
