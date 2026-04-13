// Korean B1 Final Gap - Lesson 1: Research & Academia
const LESSON_1 = {
  id:"kov2_b1fin_l1", title:"연구와 학문", icon:"🔬", xp:15, board:true,
  steps:[
    {type:"intro", title:"Research & Academia",
     desc:"Build vocabulary for discussing research, academic institutions, and professional roles. These words appear frequently in news articles and formal Korean.",
     goals:["Learn 20 words related to research and academic life","Understand Sino-Korean roots for scholarly terms","Use professional titles and institutional vocabulary"]},

    {type:"teach", trg:"연구", src:"research, study", pos:"noun", gender:null,
     note:"Sino-Korean (研究). Core academic noun, pairs with 하다.",
     example:"A: 어떤 연구를 하고 계세요?\nB: 한국어 교육에 대한 연구를 하고 있어요.",
     exampleSrc:"A: What research are you doing?\nB: I'm doing research on Korean language education.",
     funFact:"From hanja 研 (grind/polish) + 究 (investigate). Literally 'polishing an investigation' to perfection."},

    {type:"teach", trg:"연구하다", src:"to research, to study", pos:"verb", gender:null,
     note:"Verb form of 연구. Takes a topic with 을/를 or 에 대해.",
     example:"A: 대학원에서 뭘 연구해요?\nB: 인공지능을 연구하고 있어요.\nA: 요즘 인기 있는 분야네요!",
     exampleSrc:"A: What do you research in grad school?\nB: I'm researching artificial intelligence.\nA: That's a popular field these days!",
     funFact:"Korean academic papers always use 연구하다 rather than the casual 공부하다 when referring to formal research."},

    {type:"teach", trg:"연구소", src:"research institute", pos:"noun", gender:null,
     note:"Sino-Korean (研究所). 소 (所) means 'place.'",
     example:"A: 연구소가 어디에 있어요?\nB: 대전에 있는 과학 연구소에요.\nA: 거기서 무슨 일을 해요?",
     exampleSrc:"A: Where is the research institute?\nB: It's a science research institute in Daejeon.\nA: What do they do there?",
     funFact:"Daejeon is Korea's science capital. The Korea Advanced Institute of Science and Technology (KAIST) and many 연구소 are based there."},

    {type:"teach", trg:"연구자", src:"researcher", pos:"noun", gender:null,
     note:"Sino-Korean (研究者). 자 (者) means 'person who does.'",
     example:"A: 이 연구자가 유명해요?\nB: 네, 노벨상 후보로 거론되는 연구자예요.",
     exampleSrc:"A: Is this researcher famous?\nB: Yes, they're a researcher mentioned as a Nobel Prize candidate.",
     funFact:"The suffix 자 (者) works like English '-er.' 연구자 (researcher), 소비자 (consumer), 학습자 (learner) all follow this pattern."},

    {type:"mc",
     q:"'연구소'에서 '소(所)'의 의미는?",
     opts:["사람","장소","시간","방법"],
     ans:"장소",
     hint:"Think about what 소 adds to 연구. It indicates where the research happens."},

    {type:"fb",
     s:"그 교수님은 20년 동안 한국 역사를 {1}.",
     a:["연구했어요"],
     opts:["연구했어요","연구소예요","연구자예요","연구예요"],
     hint:"The professor has been doing this activity for 20 years. Pick the verb form.",
     sSrc:"That professor has {1} Korean history for 20 years."},

    {type:"teach", trg:"학기", src:"semester, school term", pos:"noun", gender:null,
     note:"Sino-Korean (學期). 학 (學) = study, 기 (期) = period.",
     example:"A: 이번 학기에 몇 과목 들어요?\nB: 다섯 과목이요. 너무 많죠?\nA: 좀 많네요!",
     exampleSrc:"A: How many subjects are you taking this semester?\nB: Five subjects. Too many, right?\nA: That is a lot!",
     funFact:"Korean universities have two semesters: 1학기 (March-June) and 2학기 (September-December), matching the March school year start."},

    {type:"teach", trg:"학습", src:"learning, study", pos:"noun", gender:null,
     note:"Sino-Korean (學習). More formal than 공부. Used in educational contexts.",
     example:"A: 학습 방법을 바꿔 봤어요?\nB: 네, 온라인 학습을 시작했어요.",
     exampleSrc:"A: Have you tried changing your learning method?\nB: Yes, I started online learning.",
     funFact:"From hanja 學 (study) + 習 (practice/review). The idea is that true learning requires both studying and repeated practice."},

    {type:"teach", trg:"입학", src:"admission, enrollment (school)", pos:"noun", gender:null,
     note:"Sino-Korean (入學). 입 (入) = enter, 학 (學) = school.",
     example:"A: 입학 시험은 언제예요?\nB: 다음 달이에요. 긴장돼요.\nA: 잘 될 거예요!",
     exampleSrc:"A: When is the entrance exam?\nB: Next month. I'm nervous.\nA: It'll go well!",
     funFact:"In Korea, 입학식 (entrance ceremony) is a big deal. Parents attend, and students wear new uniforms. It marks a fresh start."},

    {type:"teach", trg:"전문", src:"specialty, expertise", pos:"noun", gender:null,
     note:"Sino-Korean (專門). Often used as a prefix: 전문가 (expert), 전문직 (profession).",
     example:"A: 전문 분야가 뭐예요?\nB: 저는 환경 과학이 전문이에요.",
     exampleSrc:"A: What's your area of expertise?\nB: My specialty is environmental science.",
     funFact:"전문점 means specialty shop. Korea has 전문점 for everything: chicken, coffee, eyeglasses. It signals quality and focus."},

    {type:"match", pairs:[
      {trg:"연구소", src:"research institute"},
      {trg:"학기", src:"semester"},
      {trg:"입학", src:"school enrollment"},
      {trg:"전문", src:"specialty/expertise"},
      {trg:"학습", src:"learning"}
    ]},

    {type:"teach", trg:"자료", src:"data, materials, resources", pos:"noun", gender:null,
     note:"Sino-Korean (資料). Used for reference materials and data.",
     example:"A: 발표 자료 준비했어요?\nB: 네, 자료를 다 모았어요.\nA: 저한테도 보내 주세요.",
     exampleSrc:"A: Did you prepare the presentation materials?\nB: Yes, I gathered all the data.\nA: Please send them to me too.",
     funFact:"자료실 (reference room) exists in most Korean libraries. It houses special materials that cannot be checked out."},

    {type:"teach", trg:"조사하다", src:"to investigate, to survey", pos:"verb", gender:null,
     note:"Sino-Korean (調査). Used for both research surveys and police investigations.",
     example:"A: 그 사건을 조사하고 있어요?\nB: 네, 경찰이 조사 중이에요.",
     exampleSrc:"A: Are they investigating that incident?\nB: Yes, the police are investigating.",
     funFact:"In Korean dramas, you hear 조사 a lot in crime shows. But in daily life, it mostly means conducting a survey or looking into something."},

    {type:"teach", trg:"프로그램", src:"program", pos:"noun", gender:null,
     note:"Loanword from English. Used for TV shows, computer software, and training courses.",
     example:"A: 이 프로그램 재미있어요?\nB: 네, 요즘 인기 있는 프로그램이에요.",
     exampleSrc:"A: Is this program fun?\nB: Yes, it's a popular program these days.",
     funFact:"Koreans abbreviate it to 프로 in casual speech, though 프로 also means 'professional.' Context tells you which one."},

    {type:"teach", trg:"프로", src:"pro, professional", pos:"noun", gender:null,
     note:"Short for professional. Also used as a unit meaning percent (%) in spoken Korean.",
     example:"A: 그 선수는 진짜 프로예요.\nB: 맞아요, 실력이 대단해요.",
     exampleSrc:"A: That player is a real pro.\nB: Right, their skill is amazing.",
     funFact:"In Korea, 프로 is also used for percentage: 백 프로 = 100%. So '백 프로 확실해요' means 'I'm 100% sure.'"},

    {type:"fb",
     s:"발표에 필요한 {1}를 아직 못 모았어요.",
     a:["자료"],
     opts:["자료","전문","학기","연구자"],
     hint:"You need these reference materials and data for the presentation.",
     sSrc:"I haven't gathered the {1} needed for the presentation yet."},

    {type:"teach", trg:"직원", src:"employee, staff member", pos:"noun", gender:null,
     note:"Sino-Korean (職員). General term for any organization's staff.",
     example:"A: 이 회사에 직원이 몇 명이에요?\nB: 약 200명 정도예요.",
     exampleSrc:"A: How many employees does this company have?\nB: About 200 or so.",
     funFact:"Korea has a strong culture of 직원 loyalty. Many workers still spend their entire career at one company, though this is slowly changing."},

    {type:"teach", trg:"총장", src:"president (of a university), director general", pos:"noun", gender:null,
     note:"Sino-Korean (總長). 총 (總) = overall, 장 (長) = leader.",
     example:"A: 새 총장이 취임했어요?\nB: 네, 이번 달에 새 총장이 오셨어요.",
     exampleSrc:"A: Did the new university president take office?\nB: Yes, the new president came this month.",
     funFact:"Korean university presidents hold enormous prestige. The role combines academic leadership with significant social status."},

    {type:"teach", trg:"회원", src:"member (of a group)", pos:"noun", gender:null,
     note:"Sino-Korean (會員). 회 (會) = gathering, 원 (員) = person.",
     example:"A: 회원 가입하셨어요?\nB: 네, 어제 회원이 됐어요.\nA: 환영합니다!",
     exampleSrc:"A: Did you sign up for membership?\nB: Yes, I became a member yesterday.\nA: Welcome!",
     funFact:"회원 가입 (member registration) is one of the most common phrases on Korean websites. Almost every site requires it."},

    {type:"teach", trg:"회장", src:"chairman, president (of a group)", pos:"noun", gender:null,
     note:"Sino-Korean (會長). 회 (會) = association, 장 (長) = head.",
     example:"A: 동아리 회장이 누구예요?\nB: 김민수 씨가 회장이에요.",
     exampleSrc:"A: Who is the club president?\nB: Minsu Kim is the president.",
     funFact:"In Korean companies, 회장 is the highest title, above even 사장 (CEO). Samsung's leader is called 회장."},

    {type:"teach", trg:"책임자", src:"person in charge", pos:"noun", gender:null,
     note:"Sino-Korean (責任者). 책임 (責任) = responsibility, 자 (者) = person.",
     example:"A: 이 프로젝트의 책임자가 누구예요?\nB: 박 부장님이 책임자예요.",
     exampleSrc:"A: Who is the person in charge of this project?\nB: Manager Park is the person in charge.",
     funFact:"In Korean workplace culture, the 책임자 bears both the credit and the blame. Responsibility is taken very seriously."},

    {type:"mc",
     q:"회사의 모든 직원을 관리하는 사람은?",
     opts:["회원","총장","책임자","연구자"],
     ans:"책임자",
     hint:"This person is responsible for overseeing and managing others."},

    {type:"teach", trg:"종업원", src:"employee (service worker)", pos:"noun", gender:null,
     note:"Sino-Korean (從業員). Specifically for service industry workers.",
     example:"A: 이 식당 종업원이 친절하네요.\nB: 맞아요, 서비스가 좋아요.",
     exampleSrc:"A: The employees at this restaurant are friendly.\nB: Right, the service is good.",
     funFact:"종업원 is often used for restaurant and retail staff. It is more specific than 직원, which covers all types of employees."},

    {type:"teach", trg:"주제", src:"topic, subject, theme", pos:"noun", gender:null,
     note:"Sino-Korean (主題). 주 (主) = main, 제 (題) = topic.",
     example:"A: 오늘 토론 주제가 뭐예요?\nB: 환경 보호가 주제예요.",
     exampleSrc:"A: What's today's discussion topic?\nB: The topic is environmental protection.",
     funFact:"TOPIK writing always gives a 주제 for essays. Staying on topic is crucial for a high score."},

    {type:"teach", trg:"주장하다", src:"to assert, to claim, to argue", pos:"verb", gender:null,
     note:"Sino-Korean (主張). Used in debates, essays, and news reporting.",
     example:"A: 그 사람은 뭐라고 주장해요?\nB: 자기가 옳다고 주장하고 있어요.",
     exampleSrc:"A: What does that person claim?\nB: They're claiming that they're right.",
     funFact:"In Korean essays, your main argument is called 주장. A strong essay states its 주장 clearly in the introduction."},

    {type:"match", pairs:[
      {trg:"직원", src:"employee"},
      {trg:"종업원", src:"service worker"},
      {trg:"회장", src:"chairman"},
      {trg:"책임자", src:"person in charge"},
      {trg:"주장하다", src:"to claim/argue"}
    ]}
  ]
};
export default LESSON_1;
