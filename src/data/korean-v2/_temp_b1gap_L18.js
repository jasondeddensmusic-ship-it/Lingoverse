// Korean B1 Gap - Lesson 18: Arts, Culture, and Evaluation
const LESSON_18 = {
  id:"kov2_b1gap_l18", title:"예술과 평가", icon:"🎭", xp:15, board:true,
  steps:[
    {type:"intro", title:"Arts, Culture, and Evaluation",
     desc:"Explore vocabulary for performances, creative arts, and making evaluations. Learn to discuss culture, express opinions about quality, and describe experiences with nuance.",
     goals:["Learn 20 words for arts, culture, and evaluation","Describe performances and creative works","Express judgments with natural Korean adverbs"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"공연", src:"performance, show", pos:"noun", gender:null,
     note:"Sino-Korean. Covers concerts, plays, musicals, any live performance.",
     example:"A: 이번 주말에 공연 보러 갈래요?\nB: 무슨 공연이에요?\nA: 뮤지컬이에요. 아주 유명해요.",
     exampleSrc:"A: Do you want to go see a performance this weekend?\nB: What kind of performance?\nA: It's a musical. It's very famous.",
     funFact:"From hanja 公 (public) + 演 (perform). Seoul's Daehangno district has over 200 small theaters and is Korea's Broadway."},

    {type:"teach", trg:"관객", src:"audience, spectator", pos:"noun", gender:null,
     note:"Sino-Korean. 관 (watch) + 객 (guest). The people watching a performance.",
     example:"A: 관객이 많았어요?\nB: 네, 자리가 다 찼어요.\nA: 인기가 많은 공연이네요.",
     exampleSrc:"A: Was there a big audience?\nB: Yes, every seat was full.\nA: It must be a popular show.",
     funFact:"Related words: 관람 (viewing), 관광 (sightseeing), 관찰 (observation). All share the hanja 觀 (watch/observe)."},

    {type:"teach", trg:"드라마", src:"drama, TV series", pos:"noun", gender:null,
     note:"Loanword from English. In Korean, almost always means 'TV drama series.'",
     example:"A: 요즘 무슨 드라마 봐요?\nB: 새로 나온 로맨스 드라마 봐요.\nA: 재미있어요?",
     exampleSrc:"A: What drama are you watching these days?\nB: I'm watching a new romance drama.\nA: Is it good?",
     funFact:"Korean dramas (K-dramas) are a massive cultural export. The 'Hallyu wave' spread Korean TV across Asia and then globally. 드라마 is now a global word."},

    {type:"teach", trg:"그룹", src:"group", pos:"noun", gender:null,
     note:"Loanword from English. Used for music groups, study groups, and business groups.",
     example:"A: 좋아하는 그룹이 있어요?\nB: 네, K-pop 그룹 좋아해요.\nA: 어떤 그룹이요?",
     exampleSrc:"A: Do you have a favorite group?\nB: Yes, I like K-pop groups.\nA: Which group?",
     funFact:"In Korean business culture, 그룹 also means 'conglomerate.' Samsung Group, Hyundai Group, LG Group. These chaebol groups shape the Korean economy."},

    {type:"teach", trg:"그림자", src:"shadow", pos:"noun", gender:null,
     note:"그림 (picture/drawing) + 자 (thing). A shadow is like a 'picture-thing.'",
     example:"A: 벽에 그림자가 보여요.\nB: 아, 나무 그림자예요.\nA: 예쁘네요.",
     exampleSrc:"A: I can see a shadow on the wall.\nB: Oh, it's a tree shadow.\nA: It's pretty.",
     funFact:"The etymology is poetic: a shadow is a 'picture' (그림) cast by light. Korean shadow puppetry (그림자놀이) is a traditional children's game."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"공연을 보는 사람들을 뭐라고 해요?",
     opts:["관객","동화","그룹","드라마"],
     ans:"관객",
     hint:"The word combines 'watch' and 'guest' in its hanja roots. Spectators at a show."},

    {type:"fb",
     s:"요즘 재미있는 {1}을 보고 있어요.",
     a:["드라마"],
     opts:["드라마","그림자","관객","덕분"],
     hint:"A loanword from English. In Korean, it specifically means a TV series.",
     sSrc:"I'm watching an interesting {1} these days."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"리듬", src:"rhythm", pos:"noun", gender:null,
     note:"Loanword from English. Used in music, dance, and figurative speech.",
     example:"A: 이 노래 리듬이 좋아요.\nB: 네, 춤추고 싶어지는 리듬이에요.\nA: 같이 춰요!",
     exampleSrc:"A: This song has a good rhythm.\nB: Yes, it's a rhythm that makes you want to dance.\nA: Let's dance together!",
     funFact:"Korean traditional music (국악) uses very different rhythmic patterns called 장단. The most famous is 세마치장단, a three-beat pattern."},

    {type:"teach", trg:"동화", src:"fairy tale", pos:"noun", gender:null,
     note:"Sino-Korean: 童 (child) + 話 (story). Stories for children.",
     example:"A: 어릴 때 무슨 동화를 좋아했어요?\nB: 콩쥐팥쥐를 좋아했어요.\nA: 한국의 신데렐라네요!",
     exampleSrc:"A: What fairy tales did you like as a child?\nB: I liked Kongjwi and Patjwi.\nA: It's the Korean Cinderella!",
     funFact:"콩쥐팥쥐 is Korea's Cinderella story. 콩쥐 (Bean Girl) is the kind stepsister, 팥쥐 (Red Bean Girl) is the mean one. Korean fairy tales often feature food in names."},

    {type:"teach", trg:"놀이", src:"play, game, activity", pos:"noun", gender:null,
     note:"From 놀다 (to play). Refers to games, amusement, recreational activities.",
     example:"A: 아이들이 무슨 놀이를 하고 있어요?\nB: 숨바꼭질 놀이를 해요.\nA: 재미있겠다!",
     exampleSrc:"A: What game are the children playing?\nB: They're playing hide and seek.\nA: That sounds fun!",
     funFact:"Korean traditional games include 윷놀이 (board game with sticks), 연날리기 (kite flying), and 제기차기 (a hacky-sack-like game). 놀이 appears in all of them."},

    {type:"teach", trg:"대부분", src:"most, the majority", pos:"noun", gender:null,
     note:"Sino-Korean: 大 (big) + 部 (part) + 分 (portion). The biggest portion.",
     example:"A: 학생들이 다 왔어요?\nB: 대부분 왔어요. 두 명만 안 왔어요.\nA: 거의 다 왔네요.",
     exampleSrc:"A: Have all the students arrived?\nB: Most of them have. Only two haven't.\nA: Almost everyone is here.",
     funFact:"대부분 can function as a noun ('the majority') or an adverb ('mostly'). 대부분의 사람들 = most people. 대부분 알고 있어요 = most people know."},

    {type:"teach", trg:"대신", src:"instead, in place of", pos:"noun", gender:null,
     note:"Sino-Korean: 代 (replace) + 身 (body). To take someone's place.",
     example:"A: 오늘 회의에 못 가요.\nB: 그러면 제가 대신 갈게요.\nA: 정말요? 감사해요!",
     exampleSrc:"A: I can't go to the meeting today.\nB: Then I'll go instead.\nA: Really? Thank you!",
     funFact:"대신 can also introduce a trade-off: 비싸요. 대신 품질이 좋아요. (It's expensive. But instead, the quality is good.) This 'but in exchange' usage is very common."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"동화", src:"fairy tale"},
      {trg:"놀이", src:"play, game"},
      {trg:"대부분", src:"most, majority"},
      {trg:"대신", src:"instead"}
    ]},

    {type:"mc",
     q:"'제가 대신 갈게요'는 무슨 뜻이에요?",
     opts:["제가 나중에 갈게요","제가 대체하여 가겠어요","제가 혼자 갈게요","제가 먼저 갈게요"],
     ans:"제가 대체하여 가겠어요",
     hint:"This word means taking someone else's place. Going in substitution for another person."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"덕분", src:"thanks to, owing to", pos:"noun", gender:null,
     note:"Positive attribution. 덕분에 = thanks to. Always for good outcomes.",
     example:"A: 한국어 실력이 많이 늘었네요!\nB: 선생님 덕분이에요.\nA: 아니에요, 본인이 열심히 한 거예요.",
     exampleSrc:"A: Your Korean has improved a lot!\nB: It's thanks to the teacher.\nA: No, it's because you worked hard.",
     funFact:"덕분 is only for positive results. For negative outcomes, use 탓 instead: 비 탓에 못 갔어요 (I couldn't go because of the rain)."},

    {type:"teach", trg:"도중", src:"in the middle of, during", pos:"noun", gender:null,
     note:"Sino-Korean: 途 (road) + 中 (middle). While on the way or in the process.",
     example:"A: 회의 도중에 전화가 왔어요.\nB: 중요한 전화였어요?\nA: 네, 그래서 잠깐 나갔어요.",
     exampleSrc:"A: A call came in the middle of the meeting.\nB: Was it an important call?\nA: Yes, so I stepped out briefly.",
     funFact:"도중에 specifically means 'in the midst of an ongoing activity.' Contrast with 중에 which is broader. 도중 implies you were interrupted while doing something."},

    {type:"teach", trg:"그중", src:"among them", pos:"noun", gender:null,
     note:"그 (that) + 중 (among). Picks from a previously mentioned group.",
     example:"A: 여러 나라를 여행했어요.\nB: 그중에서 어디가 가장 좋았어요?\nA: 그중에서 일본이 제일 좋았어요.",
     exampleSrc:"A: I've traveled to several countries.\nB: Among them, where was the best?\nA: Among them, Japan was the best.",
     funFact:"The pattern 그중에서 + superlative is extremely useful. It works like English 'of those, the most...' and appears frequently in TOPIK reading passages."},

    {type:"teach", trg:"대단하다", src:"to be great, remarkable", pos:"adj", gender:null,
     note:"Descriptive verb. Expresses admiration or impressive quality.",
     example:"A: 한국어를 혼자 배웠어요.\nB: 와, 대단하네요!\nA: 아직 부족해요.",
     exampleSrc:"A: I learned Korean by myself.\nB: Wow, that's remarkable!\nA: I still have a long way to go.",
     funFact:"대단히 (the adverb form) means 'greatly.' 대단한 사람 means 'an amazing person.' Koreans use 대단하다 as genuine praise, not casual flattery."},

    {type:"teach", trg:"다양하다", src:"to be diverse, varied", pos:"adj", gender:null,
     note:"Sino-Korean: 多 (many) + 樣 (types). Having many different kinds.",
     example:"A: 이 식당 메뉴가 다양해요.\nB: 네, 뭘 먹을지 고르기 어려워요.\nA: 저는 불고기로 할게요.",
     exampleSrc:"A: This restaurant's menu is diverse.\nB: Yes, it's hard to choose what to eat.\nA: I'll go with bulgogi.",
     funFact:"다양성 (diversity) is the noun form. Korean companies increasingly value 다양성 in their workforce. The adjective form 다양한 is one of TOPIK's most frequent modifiers."},

    // --- Quiz batch 3 ---
    {type:"fb",
     s:"선생님 {1}에 시험에 합격했어요.",
     a:["덕분"],
     opts:["덕분","도중","대신","그중"],
     hint:"A noun for positive attribution. You passed because of the teacher's help.",
     sSrc:"I passed the exam {1} the teacher."},

    {type:"mc",
     q:"'다양하다'의 뜻에 가장 가까운 것은?",
     opts:["아주 좋다","단순하다","여러 종류가 있다","매우 크다"],
     ans:"여러 종류가 있다",
     hint:"This adjective describes having many different types or varieties of something."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"당연하다", src:"to be natural, obvious", pos:"adj", gender:null,
     note:"Something that goes without saying. 당연히 = of course, naturally.",
     example:"A: 도와줘서 고마워요.\nB: 당연한 거예요! 친구잖아요.\nA: 좋은 친구예요.",
     exampleSrc:"A: Thanks for helping.\nB: It's only natural! We're friends.\nA: You're a good friend.",
     funFact:"당연하지! is a very common casual response meaning 'Of course!' or 'Obviously!' It is the Korean equivalent of the English 'Duh, of course!'"},

    {type:"teach", trg:"당연히", src:"naturally, of course", pos:"adv", gender:null,
     note:"Adverb form of 당연하다. States something obvious or expected.",
     example:"A: 내일 올 거예요?\nB: 당연히 갈 거예요!\nA: 좋아요, 기다릴게요.",
     exampleSrc:"A: Are you coming tomorrow?\nB: Of course I'm going!\nA: Great, I'll be waiting.",
     funFact:"On tests, 당연히 often signals a strong assertion. If a speaker says 당연히, they consider the fact beyond debate."},

    {type:"teach", trg:"목사", src:"pastor, minister", pos:"noun", gender:null,
     note:"Sino-Korean: 牧 (shepherd) + 師 (teacher/master). A religious leader.",
     example:"A: 일요일에 교회 가요?\nB: 네, 우리 목사님 설교가 좋아요.\nA: 언제부터 다녔어요?",
     exampleSrc:"A: Do you go to church on Sunday?\nB: Yes, our pastor's sermons are good.\nA: How long have you been attending?",
     funFact:"Christianity is one of Korea's major religions. About 28% of Koreans are Christian. 목사 specifically refers to Protestant pastors, while 신부 is used for Catholic priests."},

    {type:"teach", trg:"몰래", src:"secretly, stealthily", pos:"adv", gender:null,
     note:"From 모르다 (to not know). Doing something without others knowing.",
     example:"A: 깜짝 파티를 준비하고 있어요.\nB: 몰래 준비해야 해요!\nA: 네, 절대 비밀이에요.",
     exampleSrc:"A: I'm preparing a surprise party.\nB: We have to prepare it secretly!\nA: Yes, it's absolutely a secret.",
     funFact:"Derived from 모르다 (to not know). The logic: if you do something 몰래, others 모르다 about it. A neat etymological pair that helps you remember both words."},

    {type:"teach", trg:"마치", src:"as if, just like", pos:"adv", gender:null,
     note:"Creates similes. Often paired with -처럼 or -같이. Literary/emphatic.",
     example:"A: 오늘 날씨가 마치 여름 같아요.\nB: 맞아요, 4월인데 덥네요.\nA: 아이스크림 먹고 싶어요.",
     exampleSrc:"A: The weather today is just like summer.\nB: Right, it's April but it's hot.\nA: I want to eat ice cream.",
     funFact:"마치 adds poetic flair. Compare: 여름 같아요 (it's like summer) vs. 마치 여름 같아요 (it's just like summer). The 마치 makes it more vivid and literary."},

    // --- Quiz batch 4 ---
    {type:"match", pairs:[
      {trg:"당연히", src:"naturally, of course"},
      {trg:"몰래", src:"secretly"},
      {trg:"마치", src:"as if, just like"},
      {trg:"목사", src:"pastor"}
    ]},

    {type:"fb",
     s:"친구 생일 선물을 {1} 준비했어요.",
     a:["몰래"],
     opts:["몰래","당연히","마치","대단히"],
     hint:"An adverb meaning doing something without the other person knowing. A stealthy action.",
     sSrc:"I prepared a birthday gift for my friend {1}."}
  ]
};
export default LESSON_18;
