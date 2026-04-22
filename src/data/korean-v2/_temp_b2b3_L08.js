// Korean B2. Batch 3, Lesson 8: Customs and Observations
// Words: 관념, 관람, 관람객, 관리하다, 관습, 관심사, 관점, 관찰, 광경, 광장, 괴로움, 괴로워하다, 괴롭다, 괴롭히다, 굉장하다, 교내, 교대, 교문, 교복, 교사

const LESSON_8 = {
  id:"kov2_b2b3_l8", title:"관찰과 관습", icon:"👁️", xp:15, board:true,
  steps:[
    {type:"intro", title:"관찰과 관습",
     desc:"Explore words about perception, customs, suffering, and school environments. These words are central to discussing culture, psychology, and education.",
     goals:["Master 20 words about observation, customs, and school life","Understand the 관 (view/observe) word family","Express emotional states and school vocabulary naturally"]},

    {type:"teach", trg:"관념", src:"notion, concept, idea", pos:"noun", gender:null,
     note:"Sino-Korean. 觀 (view) + 念 (thought).\nAn established way of thinking about something.",
     example:"A: 고정관념에 빠지면 안 돼.\nB: 맞아, 열린 마음이 중요해.",
     exampleSrc:"A: You should not fall into fixed notions.\nB: Right, having an open mind is important.",
     funFact:"From Hanja 觀念. 고정관념 (fixed notion/stereotype) is one of the most common compound uses."},

    {type:"teach", trg:"관람", src:"viewing, watching (formal)", pos:"noun", gender:null,
     note:"Sino-Korean. 觀 (view) + 覽 (look at).\nThe formal act of watching a performance or exhibit.",
     example:"A: 영화 관람 중에는 휴대폰을 꺼 주세요.\nB: 네, 알겠습니다.",
     exampleSrc:"A: Please turn off your phone during movie viewing.\nB: Yes, understood.",
     funFact:"From Hanja 觀覽. 관람료 (admission fee) and 관람 시간 (viewing hours) are standard museum/theater terms."},

    {type:"teach", trg:"관람객", src:"viewer, audience member, spectator", pos:"noun", gender:null,
     note:"관람 (viewing) + 객 (客, guest).\nA person who watches a show or exhibition.",
     example:"A: 오늘 관람객이 많네.\nB: 유명한 전시회라서 그런가 봐.",
     exampleSrc:"A: There are many spectators today.\nB: It must be because it is a famous exhibition.",
     funFact:"관람객 is for exhibition/show viewers, 관광객 is for tourists. Same 객 (guest) suffix, different context."},

    {type:"teach", trg:"관리하다", src:"to manage, to maintain", pos:"verb", gender:null,
     note:"관리 (management) + 하다 (to do).\nTo oversee and take care of something.",
     example:"A: 건강을 잘 관리해야 해.\nB: 운동이랑 식단 조절을 하고 있어.",
     exampleSrc:"A: You need to manage your health well.\nB: I am exercising and controlling my diet.",
     funFact:"From Hanja 管理. 관리 appears everywhere: 시간 관리 (time management), 재산 관리 (asset management)."},

    {type:"teach", trg:"관습", src:"custom, convention", pos:"noun", gender:null,
     note:"Sino-Korean. 慣 (accustomed) + 習 (practice).\nTraditional practices passed down over time.",
     example:"A: 이 마을에는 독특한 관습이 있어.\nB: 어떤 건데? 궁금하다.",
     exampleSrc:"A: This village has a unique custom.\nB: What kind? I am curious.",
     funFact:"From Hanja 慣習. Distinguished from 풍습 (folk custom): 관습 is more formal and institutional."},

    {type:"mc",
     q:"다음 중 '관습'과 가장 관련 있는 것은?",
     opts:["오래된 전통적 행동","새로운 기술 개발","개인적인 취미","과학적 실험"],
     ans:"오래된 전통적 행동",
     hint:"This word refers to traditional practices that have been followed for generations."},

    {type:"teach", trg:"관심사", src:"matter of interest, concern", pos:"noun", gender:null,
     note:"관심 (interest) + 사 (事, matter).\nA topic or subject one cares about.",
     example:"A: 요즘 가장 큰 관심사가 뭐야?\nB: 환경 문제에 관심이 많아.",
     exampleSrc:"A: What is your biggest concern these days?\nB: I am very interested in environmental issues.",
     funFact:"From Hanja 關心事. Job interviewers often ask 최근 관심사 (recent interests) to gauge awareness."},

    {type:"teach", trg:"관점", src:"viewpoint, perspective", pos:"noun", gender:null,
     note:"Sino-Korean. 觀 (view) + 點 (point).\nThe angle from which one sees an issue.",
     example:"A: 다른 관점에서 생각해 봐.\nB: 그래, 상대방 입장도 고려해야지.",
     exampleSrc:"A: Try thinking from a different perspective.\nB: Right, I should consider the other person's position.",
     funFact:"From Hanja 觀點. TOPIK essays require showing multiple 관점 to score high marks."},

    {type:"teach", trg:"관찰", src:"observation", pos:"noun", gender:null,
     note:"Sino-Korean. 觀 (view) + 察 (examine).\nCareful, systematic watching.",
     example:"A: 자연 관찰이 과학의 시작이야.\nB: 맞아, 작은 것도 잘 봐야 해.",
     exampleSrc:"A: Observing nature is the beginning of science.\nB: Right, you need to look carefully even at small things.",
     funFact:"From Hanja 觀察. 참여 관찰 (participant observation) is a key research method in Korean social sciences."},

    {type:"teach", trg:"광경", src:"sight, scene, spectacle", pos:"noun", gender:null,
     note:"Sino-Korean. 光 (light) + 景 (scenery).\nA remarkable or memorable visual scene.",
     example:"A: 일출의 광경이 정말 장관이었어.\nB: 부럽다, 나도 보고 싶어.",
     exampleSrc:"A: The sight of the sunrise was truly spectacular.\nB: I am jealous, I want to see it too.",
     funFact:"From Hanja 光景. Often paired with 장관 (magnificent sight): 장관을 이루다 means 'to form a spectacle.'"},

    {type:"fb",
     s:"다른 {1}에서 문제를 바라보면 해결책이 보일 수 있다.",
     a:["관점"],
     opts:["관점","관습","관찰","관념"],
     hint:"This word means the angle or perspective from which you look at an issue.",
     sSrc:"If you look at the problem from a different {1}, you may find a solution."},

    {type:"teach", trg:"광장", src:"plaza, public square", pos:"noun", gender:null,
     note:"Sino-Korean. 廣 (wide) + 場 (place).\nA large open public space in a city.",
     example:"A: 광화문 광장에서 축제가 열려.\nB: 사람이 많겠다. 일찍 가자.",
     exampleSrc:"A: A festival is being held at Gwanghwamun Plaza.\nB: There will be many people. Let us go early.",
     funFact:"From Hanja 廣場. Gwanghwamun Plaza in central Seoul is Korea's most iconic public gathering space."},

    {type:"teach", trg:"괴로움", src:"agony, suffering, distress", pos:"noun", gender:null,
     note:"괴롭다 (agonizing) + 음 (nominalizer).\nThe state of being in pain or distress.",
     example:"A: 그 사람의 괴로움을 이해할 수 있어?\nB: 직접 겪어 봐야 알 수 있을 거야.",
     exampleSrc:"A: Can you understand that person's suffering?\nB: You would need to experience it yourself to know.",
     funFact:"The -음 suffix creates abstract nouns from adjective stems: 즐거움 (joy), 슬픔 (sadness), 괴로움 (agony)."},

    {type:"teach", trg:"괴로워하다", src:"to suffer, to agonize", pos:"verb", gender:null,
     note:"괴롭다 (agonizing) + 워하다 (to feel).\nTo visibly experience distress.",
     example:"A: 친구가 많이 괴로워하고 있어.\nB: 옆에서 힘이 되어 줘.",
     exampleSrc:"A: My friend is suffering a lot.\nB: Be there to support them.",
     funFact:"The -워하다 pattern expresses outward display of feelings: 부러워하다 (to envy), 무서워하다 (to be scared)."},

    {type:"teach", trg:"괴롭다", src:"to be agonizing, to be painful", pos:"adj", gender:null,
     note:"Native Korean adjective.\nDescribes a state of emotional or physical torment.",
     example:"A: 시험 기간이 너무 괴로워.\nB: 조금만 참아, 곧 끝나.",
     exampleSrc:"A: Exam season is so agonizing.\nB: Hang in there, it will be over soon.",
     funFact:"괴롭다 describes internal suffering, while 괴롭히다 (to torment) describes causing suffering to others."},

    {type:"teach", trg:"괴롭히다", src:"to torment, to bully, to harass", pos:"verb", gender:null,
     note:"괴롭 (agonizing stem) + 히다 (causative).\nTo cause someone pain or distress.",
     example:"A: 누가 너를 괴롭히면 선생님한테 말해.\nB: 알겠어, 꼭 말할게.",
     exampleSrc:"A: If someone bullies you, tell the teacher.\nB: OK, I definitely will.",
     funFact:"학교 폭력 (school violence) campaigns use 괴롭히다 as the key term for bullying awareness."},

    {type:"mc",
     q:"'괴로워하다'와 '괴롭히다'의 차이는?",
     opts:["하나는 과거형이고 하나는 현재형이다","자기가 괴로운 것과 남을 괴롭게 하는 것","둘 다 같은 뜻이다","하나는 명사이고 하나는 동사이다"],
     ans:"자기가 괴로운 것과 남을 괴롭게 하는 것",
     hint:"One describes experiencing pain yourself, the other describes causing pain to someone else."},

    {type:"teach", trg:"굉장하다", src:"to be tremendous, to be amazing", pos:"adj", gender:null,
     note:"Sino-Korean root. 宏 (vast) + 壯 (grand).\nExpresses something impressively large or great.",
     example:"A: 이번 콘서트 굉장했어!\nB: 맞아, 가수가 정말 잘하더라.",
     exampleSrc:"A: This concert was amazing!\nB: Right, the singer was really good.",
     funFact:"굉장히 (tremendously) is one of the most common intensifiers in spoken Korean, like 'really' in English."},

    {type:"teach", trg:"교내", src:"on campus, within the school", pos:"noun", gender:null,
     note:"Sino-Korean. 校 (school) + 內 (inside).\nInside the school grounds.",
     example:"A: 교내 식당에서 점심 먹자.\nB: 좋아, 오늘 메뉴가 뭔지 볼까?",
     exampleSrc:"A: Let us eat lunch at the school cafeteria.\nB: Sure, shall we check today's menu?",
     funFact:"From Hanja 校內. Opposite: 교외 (校外, outside campus/suburbs)."},

    {type:"teach", trg:"교대", src:"shift change; teacher's college", pos:"noun", gender:null,
     note:"Sino-Korean. 交 (exchange) + 代 (substitute).\nCan mean rotation or a teachers' university.",
     example:"A: 야근 교대 시간이 언제야?\nB: 밤 10시에 교대해.",
     exampleSrc:"A: When is the night shift change?\nB: We switch at 10 PM.",
     funFact:"From Hanja 交代. Also short for 교육대학교 (teachers' college): 서울교대, 부산교대, etc."},

    {type:"teach", trg:"교문", src:"school gate", pos:"noun", gender:null,
     note:"Sino-Korean. 校 (school) + 門 (gate).\nThe main entrance gate of a school.",
     example:"A: 교문 앞에서 만나자.\nB: 알겠어, 3시에 갈게.",
     exampleSrc:"A: Let us meet in front of the school gate.\nB: OK, I will be there at 3.",
     funFact:"From Hanja 校門. Korean schools often have distinctive gates, and 교문 앞 is a classic meeting spot for students."},

    {type:"teach", trg:"교복", src:"school uniform", pos:"noun", gender:null,
     note:"Sino-Korean. 校 (school) + 服 (clothing).\nStandardized clothing worn by students.",
     example:"A: 한국 학생들은 교복을 입어야 해?\nB: 대부분의 중고등학교에서 입어.",
     exampleSrc:"A: Do Korean students have to wear uniforms?\nB: Most middle and high schools wear them.",
     funFact:"From Hanja 校服. Korean school uniforms have become a fashion icon, with tourists renting them to take photos."},

    {type:"teach", trg:"교사", src:"teacher, instructor", pos:"noun", gender:null,
     note:"Sino-Korean. 教 (teach) + 師 (master).\nA professional educator at a school.",
     example:"A: 교사가 되려면 어떻게 해야 해?\nB: 교육대학교를 졸업하고 시험을 봐야 해.",
     exampleSrc:"A: What do you need to do to become a teacher?\nB: You need to graduate from a teachers' college and pass an exam.",
     funFact:"From Hanja 教師. Korean teachers are highly respected. Teacher's Day (스승의 날, May 15) is a major celebration."},

    {type:"match", pairs:[
      {trg:"교복", src:"school uniform"},
      {trg:"광장", src:"plaza"},
      {trg:"관찰", src:"observation"},
      {trg:"괴로움", src:"agony"}
    ]}
  ]
};
export default LESSON_8;
