// Korean B2 — Batch 3, Lesson 3: Social Roles and Simplicity
// Words: 간부, 간섭, 간식, 간신히, 간장, 간접, 간판, 간편하다, 간호, 간혹, 갇히다, 갈등, 갈비탕, 갈아입다, 갈증, 감, 감각, 감독, 감동적, 감상

const LESSON_3 = {
  id:"kov2_b2b3_l3", title:"간섭과 간편", icon:"🏥", xp:15, board:true,
  steps:[
    {type:"intro", title:"간섭과 간편",
     desc:"Explore words about social roles, interference, nursing, and simplicity. This lesson covers the 간- family of Sino-Korean compounds and several emotionally rich words.",
     goals:["Master 20 words covering social dynamics and perception","Understand the 間/簡 Hanja patterns","Use emotional vocabulary naturally in conversation"]},

    {type:"teach", trg:"간부", src:"executive, officer, cadre", pos:"noun", gender:null,
     note:"Sino-Korean. 幹 (main) + 部 (division).\nA person in a leadership position.",
     example:"A: 회사 간부 회의가 있대요.\nB: 중요한 결정을 내리나 봐요.",
     exampleSrc:"A: There is an executive meeting at the company.\nB: They must be making an important decision.",
     funFact:"From Hanja 幹部. In Korean organizations, the 간부 level sits between regular staff and top management."},

    {type:"teach", trg:"간섭", src:"interference, meddling", pos:"noun", gender:null,
     note:"Sino-Korean. 干 (interfere) + 涉 (wade into).\nGetting involved in others' affairs.",
     example:"A: 부모님의 간섭이 너무 심해.\nB: 걱정이 되시니까 그러시는 거야.",
     exampleSrc:"A: My parents' interference is too much.\nB: They do it because they worry about you.",
     funFact:"From Hanja 干涉. 내정 간섭 (interference in internal affairs) is a common term in Korean political news."},

    {type:"teach", trg:"간식", src:"snack", pos:"noun", gender:null,
     note:"Sino-Korean. 間 (between) + 食 (food).\nFood eaten between meals.",
     example:"A: 간식으로 뭐 먹을래?\nB: 떡볶이 먹자!",
     exampleSrc:"A: What do you want for a snack?\nB: Let us eat tteokbokki!",
     funFact:"From Hanja 間食. Korean school children often eat 간식 at 분식집 (snack shops) selling tteokbokki, sundae, and gimbap."},

    {type:"teach", trg:"간신히", src:"barely, narrowly", pos:"adv", gender:null,
     note:"간신 (with difficulty) + 히 (adverb suffix).\nBy the thinnest margin possible.",
     example:"A: 시험에 간신히 합격했어.\nB: 다행이다. 다음에는 더 열심히 해.",
     exampleSrc:"A: I barely passed the exam.\nB: Thank goodness. Study harder next time.",
     funFact:"Synonymous with 겨우 (barely), but 간신히 carries a stronger sense of dramatic struggle."},

    {type:"mc",
     q:"'간섭'의 뜻으로 알맞은 것은?",
     opts:["남의 일에 끼어드는 것","음식을 만드는 것","조용히 쉬는 것","편하게 지내는 것"],
     ans:"남의 일에 끼어드는 것",
     hint:"This word describes someone getting involved in matters that are not their own."},

    {type:"teach", trg:"간장", src:"soy sauce", pos:"noun", gender:null,
     note:"Sino-Korean. 간 (salty flavor) + 장 (醬, paste).\nFermented soybean sauce.",
     example:"A: 이 요리에 간장을 좀 넣어야 해.\nB: 진간장으로 넣을까, 국간장으로 넣을까?",
     exampleSrc:"A: We need to add some soy sauce to this dish.\nB: Should I add dark soy sauce or soup soy sauce?",
     funFact:"Korean distinguishes 진간장 (dark, for cooking) and 국간장 (light, for soups), each with different brewing processes."},

    {type:"teach", trg:"간접", src:"indirect", pos:"noun", gender:null,
     note:"Sino-Korean. 間 (between) + 接 (connect).\nNot direct, through an intermediary.",
     example:"A: 간접 경험도 중요해요.\nB: 책을 많이 읽으면 간접 경험이 늘어요.",
     exampleSrc:"A: Indirect experience is important too.\nB: If you read a lot, your indirect experience grows.",
     funFact:"From Hanja 間接. The opposite is 직접 (direct). Both are used extremely often in formal Korean."},

    {type:"teach", trg:"간판", src:"signboard, sign", pos:"noun", gender:null,
     note:"Sino-Korean. 看 (look) + 板 (board).\nA board meant to be looked at.",
     example:"A: 이 가게 간판이 너무 작아서 못 봤어.\nB: 맞아, 다음에는 크게 만들어야겠다.",
     exampleSrc:"A: I could not see this store's sign because it was too small.\nB: Right, they should make it bigger next time.",
     funFact:"Korean commercial streets are famous for their colorful 간판 overload. Some cities now regulate signboard sizes and colors."},

    {type:"teach", trg:"간편하다", src:"to be simple, to be convenient", pos:"adj", gender:null,
     note:"Sino-Korean. 簡 (simple) + 便 (convenient).\nEasy and hassle-free.",
     example:"A: 이 앱으로 결제하면 정말 간편해요.\nB: 그래서 요즘 다들 이 앱을 써요.",
     exampleSrc:"A: Paying with this app is really convenient.\nB: That is why everyone uses this app these days.",
     funFact:"From Hanja 簡便. Korea's love of convenience drives words like 간편식 (convenient meal/ready meal)."},

    {type:"fb",
     s:"이 방법이 훨씬 {1}해서 시간을 절약할 수 있어요.",
     a:["간편"],
     opts:["간편","간접","간신히","간혹"],
     hint:"This adjective describes something that is simple and easy to do, saving effort.",
     sSrc:"This method is much more {1}, so you can save time."},

    {type:"teach", trg:"간호", src:"nursing, nursing care", pos:"noun", gender:null,
     note:"Sino-Korean. 看 (watch) + 護 (protect).\nWatching over and protecting the sick.",
     example:"A: 간호사가 환자를 정성껏 간호했어요.\nB: 덕분에 빨리 회복했대요.",
     exampleSrc:"A: The nurse cared for the patient with great devotion.\nB: Thanks to that, they recovered quickly.",
     funFact:"From Hanja 看護. 간호사 (nurse) was formally changed from the older term 간호원 in 2012 to raise professional status."},

    {type:"teach", trg:"간혹", src:"occasionally, once in a while", pos:"adv", gender:null,
     note:"Sino-Korean. 間 (between) + 或 (perhaps).\nSomething that happens infrequently.",
     example:"A: 간혹 실수할 때도 있지.\nB: 그래, 누구나 실수는 해.",
     exampleSrc:"A: Everyone makes mistakes occasionally.\nB: True, everyone makes mistakes.",
     funFact:"Frequency spectrum in Korean: 항상 (always) > 자주 (often) > 가끔 (sometimes) > 간혹 (occasionally) > 거의 (hardly)."},

    {type:"teach", trg:"갇히다", src:"to be trapped, to be confined", pos:"verb", gender:null,
     note:"가두다 (to confine) + 히다 (passive).\nTo be locked or shut inside.",
     example:"A: 엘리베이터에 갇혔어!\nB: 비상벨을 눌러!",
     exampleSrc:"A: I am trapped in the elevator!\nB: Press the emergency bell!",
     funFact:"The active form 가두다 means 'to lock up.' The ㅎ irregular passive creates the tense double consonant ㄷ > ㅌ."},

    {type:"teach", trg:"갈등", src:"conflict, discord", pos:"noun", gender:null,
     note:"Sino-Korean. 葛 (kudzu) + 藤 (wisteria).\nTwo tangled vines, a metaphor for conflict.",
     example:"A: 형제 사이에 갈등이 있어?\nB: 좀 있어, 하지만 곧 해결될 거야.",
     exampleSrc:"A: Is there conflict between the siblings?\nB: A little, but it will be resolved soon.",
     funFact:"The Hanja 葛藤 literally means 'tangled vines.' The image of intertwined plants captures relational tension beautifully."},

    {type:"mc",
     q:"'갇히다'는 어떤 상태를 뜻하나요?",
     opts:["빠져나가지 못하는 상태","높이 올라간 상태","빠르게 움직이는 상태","편하게 쉬는 상태"],
     ans:"빠져나가지 못하는 상태",
     hint:"Think about being locked inside a room or elevator with no way out."},

    {type:"teach", trg:"갈비탕", src:"short rib soup", pos:"noun", gender:null,
     note:"갈비 (ribs) + 탕 (湯, soup).\nA hearty soup made from beef ribs.",
     example:"A: 추운 날에는 갈비탕이 최고야.\nB: 맞아, 뜨끈한 국물이 몸을 녹여 주지.",
     exampleSrc:"A: Short rib soup is the best on cold days.\nB: Right, the hot broth warms you up.",
     funFact:"갈비탕 is a winter comfort food. The ribs are simmered for hours until the broth turns milky white."},

    {type:"teach", trg:"갈아입다", src:"to change clothes", pos:"verb", gender:null,
     note:"갈다 (to change/replace) + 입다 (to wear).\nTo put on different clothing.",
     example:"A: 비에 젖었으니까 빨리 갈아입어.\nB: 응, 마른 옷 가져올게.",
     exampleSrc:"A: You got wet in the rain, so change your clothes quickly.\nB: OK, I will get some dry clothes.",
     funFact:"Korean has many 갈다 compounds: 갈아타다 (transfer vehicles), 갈아끼우다 (replace a part)."},

    {type:"teach", trg:"갈증", src:"thirst", pos:"noun", gender:null,
     note:"Sino-Korean. 渴 (thirst) + 症 (symptom).\nThe physical sensation of needing water.",
     example:"A: 운동하고 나니까 갈증이 심해.\nB: 물 많이 마셔야 해.",
     exampleSrc:"A: I am so thirsty after exercising.\nB: You need to drink lots of water.",
     funFact:"Also used figuratively: 지식에 대한 갈증 (thirst for knowledge). The metaphor works the same as in English."},

    {type:"teach", trg:"감", src:"persimmon; sense, feeling", pos:"noun", gender:null,
     note:"Two meanings: native Korean (persimmon fruit)\nor Sino-Korean 感 (sense/feeling).",
     example:"A: 감이 잘 익었네.\nB: 이번 가을에 감이 많이 열렸어.",
     exampleSrc:"A: The persimmons are nicely ripe.\nB: A lot of persimmons grew this autumn.",
     funFact:"As a fruit, 감 is iconic in Korean autumn. As a suffix (감), it means material for: 대통령감 (presidential material)."},

    {type:"teach", trg:"감각", src:"sense, sensation, sensibility", pos:"noun", gender:null,
     note:"Sino-Korean. 感 (feel) + 覺 (perceive).\nThe ability to perceive through the body or mind.",
     example:"A: 이 디자이너는 색채 감각이 뛰어나요.\nB: 맞아요, 색 조합이 항상 예뻐요.",
     exampleSrc:"A: This designer has an excellent sense of color.\nB: That is right, the color combinations are always beautiful.",
     funFact:"오감 (five senses) uses this root: 시각 (sight), 청각 (hearing), 후각 (smell), 미각 (taste), 촉각 (touch)."},

    {type:"teach", trg:"감독", src:"director, supervisor", pos:"noun", gender:null,
     note:"Sino-Korean. 監 (oversee) + 督 (supervise).\nA person who oversees work or a production.",
     example:"A: 이 영화의 감독이 누구예요?\nB: 봉준호 감독이에요.",
     exampleSrc:"A: Who is the director of this movie?\nB: It is director Bong Joon-ho.",
     funFact:"From Hanja 監督. Used for both film directors and sports team managers. Bong Joon-ho made 감독 world-famous."},

    {type:"teach", trg:"감동적", src:"touching, moving, impressive", pos:"noun", gender:null,
     note:"감동 (being moved) + 적 (-like suffix).\nUsed as adjective: of a touching nature.",
     example:"A: 그 연설이 정말 감동적이었어.\nB: 나도 눈물이 났어.",
     exampleSrc:"A: That speech was really moving.\nB: I was brought to tears too.",
     funFact:"The -적 suffix creates adjectival nouns from Sino-Korean roots. 감동적인 영화 (a moving movie) is a very common phrase."},

    {type:"teach", trg:"감상", src:"appreciation, viewing; impressions", pos:"noun", gender:null,
     note:"Sino-Korean. 鑑 (examine) + 賞 (appreciate).\nThe act of carefully appreciating art or nature.",
     example:"A: 미술 감상을 좋아해요?\nB: 네, 주말마다 전시회에 가요.",
     exampleSrc:"A: Do you enjoy art appreciation?\nB: Yes, I go to exhibitions every weekend.",
     funFact:"감상 can also mean personal impressions: 독후감상 (book review impressions). Context determines the meaning."},

    {type:"match", pairs:[
      {trg:"간부", src:"executive"},
      {trg:"감독", src:"director"},
      {trg:"간호", src:"nursing"},
      {trg:"감각", src:"sensation"}
    ]}
  ]
};
export default LESSON_3;
