// Korean B2. Batch 3, Lesson 16: Registration and Appearance
// Words: 등록, 등록금, 등록증, 등록하다, 등산로, 등장, 등장하다, 디스크, 디자이너, 디자인, 따님, 따라다니다, 따라서, 따라오다, 따로따로, 따스하다, 딱딱하다, 딸아이, 땅바닥, 땅속

const LESSON_16 = {
  id:"kov2_b2b3_l16", title:"등록과 등장", icon:"📋", xp:15, board:true,
  steps:[
    {type:"intro", title:"등록과 등장",
     desc:"Learn vocabulary for registration, appearances, and descriptions. These words cover administrative processes, following, and describing textures and warmth.",
     goals:["Master 20 words about registration, appearance, and description","Understand the 등 (register/ascend) word family","Use formal registration terms and descriptive adjectives"]},

    {type:"teach", trg:"등록", src:"registration, enrollment", pos:"noun", gender:null,
     note:"Sino-Korean. 登 (ascend/record) + 錄 (register).\nThe act of officially signing up.",
     example:"A: 수업 등록은 언제까지야?\nB: 다음 주 금요일까지야.",
     exampleSrc:"A: When is the deadline for class registration?\nB: Until next Friday.",
     funFact:"From Hanja 登錄. 등록 is used everywhere: 차량 등록 (vehicle registration), 사업자 등록 (business registration)."},

    {type:"teach", trg:"등록금", src:"tuition fee, registration fee", pos:"noun", gender:null,
     note:"등록 (registration) + 금 (金, money).\nThe fee paid for enrollment.",
     example:"A: 등록금이 너무 비싸.\nB: 장학금을 신청해 봐.",
     exampleSrc:"A: The tuition is too expensive.\nB: Try applying for a scholarship.",
     funFact:"University 등록금 in Korea is a major social issue. Student protests for lower tuition have been significant."},

    {type:"teach", trg:"등록증", src:"registration card, certificate", pos:"noun", gender:null,
     note:"등록 (registration) + 증 (證, proof).\nAn official document proving registration.",
     example:"A: 등록증을 가져왔어?\nB: 네, 여기 있어요.",
     exampleSrc:"A: Did you bring your registration card?\nB: Yes, here it is.",
     funFact:"From Hanja 登錄證. 외국인 등록증 (alien registration card) is essential for foreigners living in Korea."},

    {type:"teach", trg:"등록하다", src:"to register, to enroll", pos:"verb", gender:null,
     note:"등록 (registration) + 하다 (to do).\nTo officially sign up for something.",
     example:"A: 온라인으로 등록할 수 있어?\nB: 응, 홈페이지에서 등록하면 돼.",
     exampleSrc:"A: Can I register online?\nB: Yes, you can register on the website.",
     funFact:"등록하다 is the formal version. In casual speech, 신청하다 (to apply) or 가입하다 (to join) are alternatives."},

    {type:"teach", trg:"등산로", src:"hiking trail, mountain path", pos:"noun", gender:null,
     note:"등산 (mountain climbing) + 로 (路, road).\nA designated path for hiking.",
     example:"A: 이 등산로는 초보자에게 적합해?\nB: 응, 경사가 완만해서 괜찮아.",
     exampleSrc:"A: Is this hiking trail suitable for beginners?\nB: Yes, the slope is gentle so it is fine.",
     funFact:"Korea has over 20 national parks with well-maintained 등산로. Weekend hiking is practically a national pastime."},

    {type:"mc",
     q:"'등록금'이 필요한 상황은?",
     opts:["대학에 입학할 때","식당에서 밥을 먹을 때","버스를 탈 때","병원에 갈 때"],
     ans:"대학에 입학할 때",
     hint:"This fee is specifically paid when enrolling in educational institutions for courses."},

    {type:"teach", trg:"등장", src:"appearance, entry (on stage)", pos:"noun", gender:null,
     note:"Sino-Korean. 登 (ascend/enter) + 場 (scene/place).\nMaking one's appearance in a story or event.",
     example:"A: 주인공의 등장 장면이 멋졌어.\nB: 음악도 분위기를 잘 살렸지.",
     exampleSrc:"A: The protagonist's entrance scene was great.\nB: The music set the mood well too.",
     funFact:"From Hanja 登場. 등장인물 (characters) is a standard literary term used in book reviews and film criticism."},

    {type:"teach", trg:"등장하다", src:"to appear, to enter (scene)", pos:"verb", gender:null,
     note:"등장 (appearance) + 하다 (to do).\nTo make one's appearance.",
     example:"A: 새로운 인물이 3장에서 등장해.\nB: 어떤 역할을 하는 인물이야?",
     exampleSrc:"A: A new character appears in chapter 3.\nB: What role does this character play?",
     funFact:"등장하다 is used for both fictional characters and real people appearing at events or in public."},

    {type:"teach", trg:"디스크", src:"disk; slipped disc", pos:"noun", gender:null,
     note:"Loanword from English 'disc/disk.'\nCan mean a storage medium or a spinal condition.",
     example:"A: 허리 디스크가 있어서 조심해야 해.\nB: 무거운 것을 들지 마.",
     exampleSrc:"A: I have a slipped disc so I need to be careful.\nB: Do not lift heavy things.",
     funFact:"In Korea, 디스크 almost always refers to a herniated spinal disc. 허리 디스크 (back disc) is extremely common."},

    {type:"teach", trg:"디자이너", src:"designer", pos:"noun", gender:null,
     note:"Loanword from English 'designer.'\nA professional who creates visual or functional designs.",
     example:"A: 유명한 디자이너가 이 옷을 만들었어.\nB: 그래서 디자인이 독특하구나.",
     exampleSrc:"A: A famous designer made these clothes.\nB: That is why the design is unique.",
     funFact:"Korea's fashion and tech industries employ massive numbers of designers. Seoul Fashion Week is an international event."},

    {type:"teach", trg:"디자인", src:"design", pos:"noun", gender:null,
     note:"Loanword from English 'design.'\nThe plan or arrangement of form and function.",
     example:"A: 이 제품의 디자인이 마음에 들어.\nB: 심플하면서도 세련됐지.",
     exampleSrc:"A: I like the design of this product.\nB: It is simple yet sophisticated.",
     funFact:"Korea invests heavily in design education. 홍익대학교 (Hongik University) is the country's most famous design school."},

    {type:"fb",
     s:"새로운 캐릭터가 영화 중반에 {1}한다.",
     a:["등장"],
     opts:["등장","등록","등산","디자인"],
     hint:"This word means a character makes their appearance or entrance into a story.",
     sSrc:"A new character {1} in the middle of the movie."},

    {type:"teach", trg:"따님", src:"daughter (honorific)", pos:"noun", gender:null,
     note:"딸 (daughter) + 님 (honorific suffix).\nA respectful way to refer to someone else's daughter.",
     example:"A: 따님이 대학에 합격하셨다면서요?\nB: 네, 감사합니다.",
     exampleSrc:"A: I heard your daughter was accepted to university?\nB: Yes, thank you.",
     funFact:"따님 honors the parent by elevating their child. Similarly: 아드님 (son, honorific), 부인 (wife, honorific)."},

    {type:"teach", trg:"따라다니다", src:"to follow around, to tag along", pos:"verb", gender:null,
     note:"따라 (following) + 다니다 (to go around).\nTo continuously follow someone wherever they go.",
     example:"A: 강아지가 나를 계속 따라다녀.\nB: 너를 좋아하나 봐.",
     exampleSrc:"A: The puppy keeps following me around.\nB: It must like you.",
     funFact:"따라다니다 implies persistent following. More intense than 따라가다 (to follow once/in one direction)."},

    {type:"teach", trg:"따라서", src:"therefore, accordingly, consequently", pos:"adv", gender:null,
     note:"따르다 (to follow) + 아서 (because).\nA formal logical connector.",
     example:"A: 예산이 부족합니다. 따라서 계획을 수정해야 합니다.\nB: 어떤 부분을 줄일까요?",
     exampleSrc:"A: The budget is insufficient. Therefore, we need to revise the plan.\nB: Which parts should we cut?",
     funFact:"따라서 is one of the most important TOPIK writing connectors. It signals a logical conclusion from prior evidence."},

    {type:"teach", trg:"따라오다", src:"to follow (toward speaker), to keep up", pos:"verb", gender:null,
     note:"따라 (following) + 오다 (to come).\nTo follow someone toward the speaker's location.",
     example:"A: 나를 따라와.\nB: 어디로 가는 건데?",
     exampleSrc:"A: Follow me.\nB: Where are we going?",
     funFact:"따라오다 (come following) vs. 따라가다 (go following). The direction relative to the speaker matters in Korean."},

    {type:"teach", trg:"따로따로", src:"separately, individually, each on their own", pos:"adv", gender:null,
     note:"따로 (separately) repeated for emphasis.\nEach person or thing acting independently.",
     example:"A: 계산은 따로따로 해 주세요.\nB: 네, 각자 계산하겠습니다.",
     exampleSrc:"A: Please ring us up separately.\nB: Yes, I will calculate each one individually.",
     funFact:"Korean dining culture is traditionally communal (한 그릇), so 따로따로 paying is a modern Western influence."},

    {type:"mc",
     q:"'따라서'의 역할은 문장에서 무엇인가?",
     opts:["예를 들어 설명하는 것","앞의 내용에서 결론을 이끌어내는 것","시간 순서를 나타내는 것","반대 의미를 나타내는 것"],
     ans:"앞의 내용에서 결론을 이끌어내는 것",
     hint:"This word connects a cause or premise to its logical result or conclusion."},

    {type:"teach", trg:"따스하다", src:"to be warm, to be cozy", pos:"adj", gender:null,
     note:"Variant of 따뜻하다.\nA softer, dialectal form expressing gentle warmth.",
     example:"A: 봄바람이 따스하다.\nB: 겨울이 끝나가는 느낌이야.",
     exampleSrc:"A: The spring breeze is warm.\nB: It feels like winter is ending.",
     funFact:"따스하다 is considered softer and more poetic than 따뜻하다. Writers and poets prefer it for its gentler sound."},

    {type:"teach", trg:"딱딱하다", src:"to be hard, to be stiff, to be rigid", pos:"adj", gender:null,
     note:"Onomatopoeic origin.\nDescribes physical hardness or rigid formality.",
     example:"A: 이 빵이 너무 딱딱해.\nB: 오래돼서 그래, 새 거 사자.",
     exampleSrc:"A: This bread is too hard.\nB: It is old, let us buy a new one.",
     funFact:"Also used figuratively: 분위기가 딱딱하다 (the atmosphere is stiff/formal). Koreans value 부드러운 (soft) over 딱딱한."},

    {type:"teach", trg:"딸아이", src:"daughter (informal/affectionate)", pos:"noun", gender:null,
     note:"딸 (daughter) + 아이 (child).\nAn affectionate way to refer to one's daughter.",
     example:"A: 딸아이가 올해 초등학교에 들어갔어.\nB: 벌써? 시간이 빠르다.",
     exampleSrc:"A: My daughter entered elementary school this year.\nB: Already? Time flies.",
     funFact:"딸아이 is warmly informal. The 아이 suffix makes it affectionate, like 'my little girl' in English."},

    {type:"teach", trg:"땅바닥", src:"ground surface, floor (outdoor)", pos:"noun", gender:null,
     note:"땅 (ground) + 바닥 (floor/bottom).\nThe surface of the earth beneath your feet.",
     example:"A: 땅바닥에 앉지 마, 옷 더러워져.\nB: 돗자리를 깔자.",
     exampleSrc:"A: Do not sit on the ground, your clothes will get dirty.\nB: Let us spread a mat.",
     funFact:"땅바닥 emphasizes the bare ground surface. It sounds less refined than 바닥 alone, often used in scolding."},

    {type:"teach", trg:"땅속", src:"underground, beneath the ground", pos:"noun", gender:null,
     note:"땅 (ground) + 속 (inside).\nThe space below the earth's surface.",
     example:"A: 고구마는 땅속에서 자라.\nB: 그래서 캐내야 하는 거구나.",
     exampleSrc:"A: Sweet potatoes grow underground.\nB: That is why you have to dig them up.",
     funFact:"땅속 vs. 지하 (underground): 땅속 is literal earth-beneath-feet, 지하 is for constructed spaces like subways."},

    {type:"match", pairs:[
      {trg:"등록금", src:"tuition fee"},
      {trg:"따님", src:"daughter (honorific)"},
      {trg:"딱딱하다", src:"to be hard, rigid"},
      {trg:"따라서", src:"therefore"}
    ]}
  ]
};
export default LESSON_16;
