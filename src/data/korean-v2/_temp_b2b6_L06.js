// Korean B2 — Batch 6, Lesson 6: Applications and Thread
// Words: 신중하다, 신청서, 신청하다, 신체적, 신호등, 신혼부부, 신혼여행, 신화, 실, 실감, 실로, 실리다, 실망, 실수하다, 실습, 실시, 실시되다, 실은, 실장, 실정

const LESSON_6 = {
  id:"kov2_b2b6_l6", title:"신청과 실감", icon:"📋", xp:15, board:true,
  steps:[
    {type:"intro", title:"신청과 실감",
     desc:"Learn vocabulary about applications, newlyweds, myths, and reality. These words bridge formal paperwork with everyday realizations.",
     goals:["Master 20 words about applications, marriage, and reality","Understand compounds with 身 (body), 新 (new), and 實 (real)","Use formal application and workplace vocabulary"]},

    {type:"teach", trg:"신중하다", src:"to be cautious, to be prudent", pos:"adj", gender:null,
     note:"Sino-Korean. 愼 (careful) + 重 (heavy) + 하다.\nBeing very careful before acting.",
     example:"A: 이 결정은 신중하게 해야 해.\nB: 맞아, 서두르지 말자.",
     exampleSrc:"A: We need to make this decision cautiously.\nB: Right, let's not rush.",
     funFact:"신중 is valued highly in Korean business culture. Hasty decisions are seen as irresponsible."},

    {type:"teach", trg:"신청서", src:"application form", pos:"noun", gender:null,
     note:"Sino-Korean. 申請 (apply) + 書 (document).\nA form submitted to request something.",
     example:"A: 신청서를 작성해서 제출해 주세요.\nB: 마감일이 언제예요?",
     exampleSrc:"A: Please fill out the application form and submit it.\nB: When is the deadline?",
     funFact:"Korean bureaucracy loves forms. 신청서 types include visa, leave, scholarship, and hundreds more."},

    {type:"teach", trg:"신청하다", src:"to apply, to request", pos:"verb", gender:null,
     note:"Sino-Korean. 申請 (apply) + 하다.\nFormally requesting something through proper channels.",
     example:"A: 장학금을 신청했어?\nB: 응, 어제 서류를 냈어.",
     exampleSrc:"A: Did you apply for the scholarship?\nB: Yes, I submitted the documents yesterday.",
     funFact:"In Korea, you 신청하다 for everything: visas, gym memberships, online courses, even song requests at karaoke."},

    {type:"mc",
     q:"장학금을 받으려면 먼저 무엇을 해야 하나요?",
     opts:["신청서를 제출한다","신혼여행을 간다","실습을 한다","실망한다"],
     ans:"신청서를 제출한다",
     hint:"To receive a scholarship, you need to formally apply. Which involves submitting paperwork?"},

    {type:"teach", trg:"신체적", src:"physical, bodily", pos:"noun", gender:null,
     note:"Sino-Korean. 身體 (body) + 的 (quality).\nRelating to the physical body.",
     example:"A: 신체적 건강도 중요하지만 정신 건강도 중요해.\nB: 둘 다 챙겨야지.",
     exampleSrc:"A: Physical health is important, but mental health is too.\nB: We need to take care of both.",
     funFact:"Korean health checkups (건강검진) are thorough, checking both 신체적 and 정신적 (mental) health."},

    {type:"teach", trg:"신호등", src:"traffic light", pos:"noun", gender:null,
     note:"Sino-Korean. 信號 (signal) + 燈 (lamp).\nA light that controls traffic flow.",
     example:"A: 신호등이 빨간불이야. 잠깐 기다려.\nB: 알았어, 급하지 않아.",
     exampleSrc:"A: The traffic light is red. Wait a moment.\nB: Okay, I am not in a hurry.",
     funFact:"Korean traffic lights play musical jingles for pedestrians. The sound changes when it is about to turn red."},

    {type:"teach", trg:"신혼부부", src:"newlywed couple", pos:"noun", gender:null,
     note:"Sino-Korean. 新婚 (newly married) + 夫婦 (husband and wife).\nA recently married couple.",
     example:"A: 옆집에 신혼부부가 이사 왔대.\nB: 인사하러 가볼까?",
     exampleSrc:"A: A newlywed couple moved in next door.\nB: Should we go say hello?",
     funFact:"신혼부부 in Korea traditionally receive 전세 (deposit-based rent) money from parents to start their home."},

    {type:"teach", trg:"신혼여행", src:"honeymoon", pos:"noun", gender:null,
     note:"Sino-Korean. 新婚 (newly married) + 旅行 (travel).\nA trip taken after the wedding.",
     example:"A: 신혼여행은 어디로 갔어?\nB: 하와이로 갔어. 정말 좋았어.",
     exampleSrc:"A: Where did you go for your honeymoon?\nB: We went to Hawaii. It was wonderful.",
     funFact:"Top Korean honeymoon destinations include Hawaii, Maldives, and Guam. Jeju Island is the domestic favorite."},

    {type:"teach", trg:"신화", src:"myth, mythology", pos:"noun", gender:null,
     note:"Sino-Korean. 神 (divine) + 話 (story).\nStories about gods and legendary events.",
     example:"A: 그리스 신화에 관심 있어?\nB: 응, 정말 재미있어.",
     exampleSrc:"A: Are you interested in Greek mythology?\nB: Yes, it is really interesting.",
     funFact:"Korea has its own creation myth: 단군 신화. Dangun is said to have founded the first Korean kingdom in 2333 BC."},

    {type:"fb",
     s:"한국의 건국 {1}에서 단군이 나라를 세웠다고 전해진다.",
     a:["신화"],
     opts:["신화","신비","신념","신세"],
     hint:"A story about gods and legendary origins of a nation.",
     sSrc:"In Korea's founding {1}, it is said that Dangun established the nation."},

    {type:"teach", trg:"실", src:"thread, yarn; room", pos:"noun", gender:null,
     note:"Two meanings: native Korean '실' (thread) or Sino-Korean 室 (room).\nContext determines meaning.",
     example:"A: 바늘에 실을 꿰어 줄래?\nB: 잠깐만, 눈이 안 좋아서.",
     exampleSrc:"A: Can you thread the needle for me?\nB: Wait a moment, my eyesight is not good.",
     funFact:"As 室 (room), 실 appears in compounds: 연구실 (research lab), 교무실 (teachers' office), 실장 (department head)."},

    {type:"teach", trg:"실감", src:"real feeling, realization", pos:"noun", gender:null,
     note:"Sino-Korean. 實 (real) + 感 (feeling).\nTruly feeling or experiencing something.",
     example:"A: 합격한 게 아직 실감이 안 나.\nB: 곧 실감 날 거야.",
     exampleSrc:"A: I still cannot believe I passed.\nB: You will feel it soon.",
     funFact:"실감이 나다/안 나다 (to feel real/unreal) is a very common expression for overwhelming news."},

    {type:"teach", trg:"실로", src:"truly, indeed", pos:"adv", gender:null,
     note:"Sino-Korean. 實 (real) + 로 (by means of).\nA formal literary adverb meaning 'in truth.'",
     example:"A: 실로 놀라운 결과입니다.\nB: 아무도 예상하지 못했어요.",
     exampleSrc:"A: It is truly a surprising result.\nB: Nobody expected it.",
     funFact:"실로 is a literary/formal word. In everyday speech, Koreans use 정말 or 진짜 instead."},

    {type:"teach", trg:"실리다", src:"to be loaded, to be published", pos:"verb", gender:null,
     note:"Passive of 싣다 (to load/publish).\nSomething being placed onto or into.",
     example:"A: 이 기사가 신문에 실렸어.\nB: 정말? 어느 신문에?",
     exampleSrc:"A: This article was published in the newspaper.\nB: Really? Which newspaper?",
     funFact:"실리다 is used for both physical loading (짐이 실리다, cargo is loaded) and media publishing (기사가 실리다)."},

    {type:"teach", trg:"실망", src:"disappointment", pos:"noun", gender:null,
     note:"Sino-Korean. 失 (lose) + 望 (hope).\nLiterally 'losing hope.'",
     example:"A: 시험 결과에 실망했어.\nB: 다음에 더 잘하면 돼.",
     exampleSrc:"A: I was disappointed by the exam results.\nB: You can do better next time.",
     funFact:"실망시키다 (to disappoint someone) is the causative. Koreans take 실망 seriously in relationships."},

    {type:"teach", trg:"실수하다", src:"to make a mistake", pos:"verb", gender:null,
     note:"Sino-Korean. 失 (lose) + 手 (hand) + 하다.\nLiterally 'losing your hand,' making an error.",
     example:"A: 또 실수했어. 어떡하지?\nB: 괜찮아, 누구나 실수해.",
     exampleSrc:"A: I made a mistake again. What should I do?\nB: It is okay, everyone makes mistakes.",
     funFact:"The original hanja 失手 literally means 'slip of the hand.' The word implies an unintentional error."},

    {type:"teach", trg:"실습", src:"practical training, lab work", pos:"noun", gender:null,
     note:"Sino-Korean. 實 (real) + 習 (practice).\nHands-on learning in a real setting.",
     example:"A: 다음 주부터 병원에서 실습이야.\nB: 긴장되겠다.",
     exampleSrc:"A: Starting next week, I have practical training at the hospital.\nB: That must be nerve-wracking.",
     funFact:"Medical and teaching students in Korea must complete 실습 (practicum) before graduating. It is mandatory."},

    {type:"teach", trg:"실시", src:"implementation, carrying out", pos:"noun", gender:null,
     note:"Sino-Korean. 實 (real) + 施 (carry out).\nPutting a plan into action.",
     example:"A: 새로운 정책이 다음 달부터 실시됩니다.\nB: 구체적인 내용이 뭐예요?",
     exampleSrc:"A: The new policy will be implemented starting next month.\nB: What are the specific details?",
     funFact:"실시하다 is used in formal/official contexts. 하다 is casual. Government announcements always use 실시."},

    {type:"teach", trg:"실시되다", src:"to be implemented, to be carried out", pos:"verb", gender:null,
     note:"실시 + 되다 (passive).\nSomething being put into effect.",
     example:"A: 건강 검진이 내일 실시될 예정이에요.\nB: 준비할 게 있나요?",
     exampleSrc:"A: Health checkups will be carried out tomorrow.\nB: Is there anything to prepare?",
     funFact:"Korean news frequently uses 실시되다 for policies, elections, and surveys being conducted."},

    {type:"mc",
     q:"'실습'과 가장 관련이 깊은 것은?",
     opts:["실제 현장에서 배우는 것","책으로 공부하는 것","시험을 보는 것","집에서 쉬는 것"],
     ans:"실제 현장에서 배우는 것",
     hint:"This type of learning happens in real settings like hospitals or classrooms, not in textbooks."},

    {type:"teach", trg:"실은", src:"actually, to tell the truth", pos:"adv", gender:null,
     note:"Sino-Korean. 實 (real) + 은 (topic marker).\nRevealing something previously hidden.",
     example:"A: 실은 말 못 한 게 있어.\nB: 뭔데? 괜찮아, 말해 봐.",
     exampleSrc:"A: Actually, there is something I have not told you.\nB: What is it? It is okay, go ahead.",
     funFact:"실은 is a conversation opener for confessions or surprising reveals. It signals honesty is coming."},

    {type:"teach", trg:"실장", src:"department head, team leader", pos:"noun", gender:null,
     note:"Sino-Korean. 室 (room/office) + 長 (chief).\nThe head of a department or office.",
     example:"A: 실장님, 보고서 확인해 주세요.\nB: 네, 잠시 후에 볼게요.",
     exampleSrc:"A: Department head, please check the report.\nB: Yes, I will look at it shortly.",
     funFact:"Korean corporate hierarchy has many titles: 사원, 대리, 과장, 차장, 부장, 실장, 이사, 상무, 전무, 부사장, 사장."},

    {type:"teach", trg:"실정", src:"actual situation, real conditions", pos:"noun", gender:null,
     note:"Sino-Korean. 實 (real) + 情 (situation).\nHow things actually are, versus how they appear.",
     example:"A: 현재 실정이 어때요?\nB: 솔직히 말하면 좋지 않아요.",
     exampleSrc:"A: What is the actual situation right now?\nB: To be honest, it is not good.",
     funFact:"실정을 파악하다 (to grasp the real situation) is a key phrase in Korean management and politics."},

    {type:"match", pairs:[
      {trg:"실감", src:"real feeling"},
      {trg:"실망", src:"disappointment"},
      {trg:"실습", src:"practical training"},
      {trg:"실정", src:"actual situation"}
    ]}
  ]
};

export default LESSON_6;
