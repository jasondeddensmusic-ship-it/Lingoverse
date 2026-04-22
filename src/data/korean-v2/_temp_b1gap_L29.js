// Korean B1 Gap - Lesson 29: Work, Careers and Hierarchy
const LESSON_29 = {
  id:"kov2_b1gap_l29", title:"직업과 업무", icon:"💼", xp:15, board:true,
  steps:[
    {type:"intro", title:"Work, Careers and Hierarchy",
     desc:"Learn the vocabulary of Korean workplaces and professional life. From job titles and hierarchy to office procedures, these words are essential for navigating Korean professional culture.",
     goals:["Learn 20 career and workplace words","Understand Korean workplace hierarchy terms","Use formal request and procedure vocabulary"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"업무", src:"duties, work tasks", pos:"noun", gender:null,
     note:"Sino-Korean: 業 (business) + 務 (duty). Professional responsibilities and tasks.",
     example:"A: 오늘 업무가 많아요?\nB: 네, 보고서를 세 개 써야 해요.\nA: 힘내세요!",
     exampleSrc:"A: Do you have a lot of work today?\nB: Yes, I have to write three reports.\nA: Hang in there!",
     funFact:"업무 is the formal word for work tasks. 업무 시간 (work hours), 업무 보고 (work report), 업무 메일 (work email). In Korean offices, keeping 업무 and 개인 (personal) separate is important."},

    {type:"teach", trg:"부장", src:"department head, manager", pos:"noun", gender:null,
     note:"Sino-Korean: 部 (department) + 長 (chief). A mid-senior management position.",
     example:"A: 부장님, 보고서 확인해 주세요.\nB: 네, 내일까지 확인할게요.\nA: 감사합니다, 부장님.",
     exampleSrc:"A: Manager, please check the report.\nB: Okay, I'll check it by tomorrow.\nA: Thank you, Manager.",
     funFact:"Korean corporate hierarchy: 사원 > 대리 > 과장 > 부장 > 이사 > 사장. 부장 is the highest rank before executive level. Adding 님 (부장님) is mandatory when addressing them."},

    {type:"teach", trg:"반장", src:"class president, squad leader", pos:"noun", gender:null,
     note:"Sino-Korean: 班 (class/group) + 長 (chief). Leader of a class or small group.",
     example:"A: 반장은 누구예요?\nB: 수진이가 반장이에요.\nA: 반장 선거는 언제 했어요?",
     exampleSrc:"A: Who is the class president?\nB: Sujin is the class president.\nA: When was the class president election?",
     funFact:"Every Korean school class elects a 반장 who takes attendance, leads class activities, and mediates with teachers. It is a child's first leadership experience. 부반장 (vice class president) assists them."},

    {type:"teach", trg:"박사", src:"PhD, doctorate, doctor (academic)", pos:"noun", gender:null,
     note:"Sino-Korean: 博 (broad) + 士 (scholar). Someone with a doctoral degree.",
     example:"A: 박사 학위를 받았어요?\nB: 네, 작년에 박사 과정을 끝냈어요.\nA: 축하드려요, 박사님!",
     exampleSrc:"A: Did you receive your PhD?\nB: Yes, I finished my doctoral program last year.\nA: Congratulations, Doctor!",
     funFact:"In Korea, 박사 is a prestigious title. 박사님 is used as an honorific, similar to 'Dr.' in English. The path: 학사 (bachelor's) > 석사 (master's) > 박사 (doctorate). Korea has one of the highest PhD rates globally."},

    {type:"teach", trg:"사원", src:"employee, company member", pos:"noun", gender:null,
     note:"Sino-Korean: 社 (company) + 員 (member). An entry-level office worker.",
     example:"A: 신입 사원이에요?\nB: 네, 이번 달에 입사했어요.\nA: 환영해요!",
     exampleSrc:"A: Are you a new employee?\nB: Yes, I joined this month.\nA: Welcome!",
     funFact:"사원 is the lowest rank in Korean corporate hierarchy. 신입 사원 (new employee) goes through rigorous 연수 (training). The jump from 사원 to 대리 (assistant manager) takes about 3-4 years."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"한국 회사에서 '부장'은 어떤 위치예요?",
     opts:["중간 관리직","가장 높은 직위","인턴","신입 직원"],
     ans:"중간 관리직",
     hint:"This Sino-Korean title sits between lower managers and executives. A department head position."},

    {type:"fb",
     s:"오늘 {1}가 많아서 야근해야 해요.",
     a:["업무"],
     opts:["업무","부장","사원","박사"],
     hint:"The Sino-Korean word for professional duties and work tasks at the office.",
     sSrc:"I have to work overtime because there are a lot of {1} today."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"배우", src:"actor, actress", pos:"noun", gender:null,
     note:"Sino-Korean: 俳 (act) + 優 (excellent). A performing artist in film, TV, or theater.",
     example:"A: 좋아하는 배우가 누구예요?\nB: 송강호를 좋아해요.\nA: 저도요! 연기를 잘하죠.",
     exampleSrc:"A: Who is your favorite actor?\nB: I like Song Kangho.\nA: Me too! He acts well.",
     funFact:"배우 is gender-neutral in Korean. No separate word for actress. 남자 배우 (male actor) and 여자 배우 (female actor) add gender when needed. K-drama culture has made Korean 배우 globally famous."},

    {type:"teach", trg:"선수", src:"athlete, player", pos:"noun", gender:null,
     note:"Sino-Korean: 選 (select) + 手 (hand/person). A selected competitor in sports.",
     example:"A: 그 축구 선수 알아요?\nB: 네, 손흥민 선수요?\nA: 네, 정말 대단한 선수예요.",
     exampleSrc:"A: Do you know that soccer player?\nB: Yes, Son Heungmin?\nA: Yes, he's a truly amazing player.",
     funFact:"선수 literally means 'selected hand/person.' Korean sports honorifics: players are called 선수, not by first name. 국가대표 선수 (national team player) is the highest honor for a Korean athlete."},

    {type:"teach", trg:"아나운서", src:"announcer, news anchor", pos:"noun", gender:null,
     note:"Loanword from English 'announcer.' A TV or radio broadcast presenter.",
     example:"A: 아나운서가 되고 싶어요.\nB: 목소리가 좋으니까 잘 어울려요.\nA: 열심히 준비할게요.",
     exampleSrc:"A: I want to become an announcer.\nB: Your voice is nice, so it suits you.\nA: I'll prepare hard.",
     funFact:"In Korea, 아나운서 is an elite career requiring perfect Korean pronunciation and appearance. KBS, MBC, SBS announcers are celebrities. The selection process is famously competitive with thousands of applicants."},

    {type:"teach", trg:"시인", src:"poet", pos:"noun", gender:null,
     note:"Sino-Korean: 詩 (poem) + 人 (person). Someone who writes poetry.",
     example:"A: 좋아하는 시인이 있어요?\nB: 윤동주 시인을 좋아해요.\nA: 저도 그 시인의 시를 좋아해요.",
     exampleSrc:"A: Do you have a favorite poet?\nB: I like the poet Yun Dongju.\nA: I like that poet's poems too.",
     funFact:"Yun Dongju (윤동주) is Korea's most beloved 시인. His poem 서시 (Preface) is memorized by nearly every Korean student. Poetry holds a special place in Korean culture, more than in many Western countries."},

    {type:"teach", trg:"스타", src:"star (celebrity)", pos:"noun", gender:null,
     note:"Loanword from English 'star.' A famous celebrity or top performer.",
     example:"A: 한류 스타를 좋아해요?\nB: 네, K-pop 스타들을 좋아해요.\nA: 누구를 제일 좋아해요?",
     exampleSrc:"A: Do you like Hallyu stars?\nB: Yes, I like K-pop stars.\nA: Who do you like the most?",
     funFact:"한류 스타 (Korean Wave star) refers to Korean celebrities famous internationally. 스타 is preferred over 별 (native Korean for star) when talking about celebrities. 슈퍼스타 (superstar) is also common."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"배우", src:"actor"},
      {trg:"선수", src:"athlete"},
      {trg:"시인", src:"poet"},
      {trg:"아나운서", src:"announcer"}
    ]},

    {type:"fb",
     s:"손흥민은 한국의 유명한 축구 {1}예요.",
     a:["선수"],
     opts:["선수","배우","스타","시인"],
     hint:"The Sino-Korean word for a sports competitor. Literally 'selected person.'",
     sSrc:"Son Heungmin is a famous Korean soccer {1}."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"부", src:"department, division", pos:"noun", gender:null,
     note:"Sino-Korean: 部. A section or division within an organization. Often a bound noun.",
     example:"A: 어느 부에서 일해요?\nB: 마케팅부에서 일해요.\nA: 마케팅부가 바쁘죠?",
     exampleSrc:"A: Which department do you work in?\nB: I work in the marketing department.\nA: The marketing department is busy, right?",
     funFact:"부 attaches to create department names: 인사부 (HR department), 영업부 (sales department), 기획부 (planning department). In government: 외교부 (Ministry of Foreign Affairs), 교육부 (Ministry of Education)."},

    {type:"teach", trg:"신청", src:"application, request (formal)", pos:"noun", gender:null,
     note:"Sino-Korean: 申 (state) + 請 (request). A formal application for something.",
     example:"A: 비자 신청했어요?\nB: 네, 지난주에 신청했어요.\nA: 결과가 빨리 나오면 좋겠어요.",
     exampleSrc:"A: Did you apply for a visa?\nB: Yes, I applied last week.\nA: I hope the result comes quickly.",
     funFact:"신청서 (application form), 신청하다 (to apply), 신청 마감 (application deadline). Korea loves paperwork: 수강 신청 (course registration) at universities is notoriously competitive and stressful."},

    {type:"teach", trg:"신고", src:"report, declaration (official)", pos:"noun", gender:null,
     note:"Sino-Korean: 申 (state) + 告 (inform). Officially reporting something to authorities.",
     example:"A: 경찰에 신고했어요?\nB: 네, 바로 신고했어요.\nA: 잘하셨어요.",
     exampleSrc:"A: Did you report it to the police?\nB: Yes, I reported it right away.\nA: You did well.",
     funFact:"신고 vs. 신청: 신고 is reporting/declaring (to police, tax office), while 신청 is requesting/applying (for visa, course). Both start with 申 (state/declare) but go in different directions."},

    {type:"teach", trg:"방문", src:"visit", pos:"noun", gender:null,
     note:"Sino-Korean: 訪 (visit) + 問 (ask/inquire). A formal visit to a place or person.",
     example:"A: 내일 고객 방문이 있어요.\nB: 준비할 게 있어요?\nA: 회의실을 예약해 주세요.",
     exampleSrc:"A: There's a client visit tomorrow.\nB: Is there anything to prepare?\nA: Please book a meeting room.",
     funFact:"방문 is more formal than 가다 (to go) or 찾아가다 (to visit casually). 방문객 (visitor), 가정 방문 (home visit), 방문 예약 (appointment). The hanja 訪問 literally means 'visit and inquire.'"},

    {type:"teach", trg:"방문하다", src:"to visit (formally)", pos:"verb", gender:null,
     note:"Verb form of 방문. Used for planned, purposeful visits.",
     example:"A: 한국을 방문한 적 있어요?\nB: 네, 작년에 서울을 방문했어요.\nA: 어땠어요?",
     exampleSrc:"A: Have you ever visited Korea?\nB: Yes, I visited Seoul last year.\nA: How was it?",
     funFact:"방문하다 is the verb Korean immigration forms use: 방문 목적 (purpose of visit). It is more formal than 놀러 가다 (go for fun) or 다녀오다 (go and come back). Official contexts always use 방문하다."},

    // --- Quiz batch 3 ---
    {type:"mc",
     q:"경찰에 사건을 알리는 것을 뭐라고 해요?",
     opts:["방문","신고","업무","신청"],
     ans:"신고",
     hint:"This is the Sino-Korean word for officially reporting something to authorities, like the police or tax office."},

    {type:"fb",
     s:"비자 {1}은 마감일까지 해야 해요.",
     a:["신청"],
     opts:["신청","신고","방문","업무"],
     hint:"The formal process of requesting something officially, like a visa or course enrollment.",
     sSrc:"The visa {1} must be done by the deadline."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"부탁하다", src:"to request, to ask a favor", pos:"verb", gender:null,
     note:"Sino-Korean root: 付 (entrust) + 託 (entrust). To politely ask someone to do something.",
     example:"A: 부탁 하나 해도 돼요?\nB: 네, 말씀하세요.\nA: 이 서류 좀 복사해 주세요.",
     exampleSrc:"A: May I ask a favor?\nB: Yes, go ahead.\nA: Please copy this document for me.",
     funFact:"잘 부탁합니다 (I'm counting on you / please take care of it) is one of the most common Korean polite phrases. It is used when meeting someone new, starting a project, or asking for help."},

    {type:"teach", trg:"보관하다", src:"to store, to keep safe", pos:"verb", gender:null,
     note:"Sino-Korean: 保 (protect) + 管 (manage). To safely store something for future use.",
     example:"A: 이 서류를 어디에 보관해요?\nB: 파일함에 보관하세요.\nA: 네, 알겠어요.",
     exampleSrc:"A: Where should I store these documents?\nB: Please store them in the file cabinet.\nA: Okay, understood.",
     funFact:"보관함 (storage locker) is found at Korean train stations, gyms, and schools. 냉장 보관 (refrigerated storage) appears on food packaging. 보관 기간 (storage period) tells you how long to keep something."},

    {type:"teach", trg:"맞추다", src:"to match, to adjust, to fit", pos:"verb", gender:null,
     note:"Causative of 맞다 (to be right/fit). To make something fit or adjust correctly.",
     example:"A: 시간을 맞춰서 만나요.\nB: 3시에 맞출 수 있어요?\nA: 네, 3시에 맞출게요.",
     exampleSrc:"A: Let's match our times and meet.\nB: Can you make it at 3?\nA: Yes, I'll adjust to 3.",
     funFact:"맞추다 is versatile: 답을 맞추다 (guess the answer correctly), 눈높이를 맞추다 (match someone's level), 맞춤법 (spelling rules, literally 'fitting method'). Each use involves making things align."},

    {type:"teach", trg:"고르다", src:"to choose, to select, to pick", pos:"verb", gender:null,
     note:"Native Korean. The ㄹ-irregular verb for selecting among options.",
     example:"A: 어떤 색을 고를까요?\nB: 파란색을 고를게요.\nA: 좋은 선택이에요!",
     exampleSrc:"A: Which color should I choose?\nB: I'll choose blue.\nA: Good choice!",
     funFact:"고르다 is ㄹ-irregular: 고르다 > 골라요 (the ㄹ drops before ㄴ/ㅂ). 골라 먹다 (pick and eat) is what you do at a buffet. 고르기 어렵다 (hard to choose) describes Korean restaurant menus with 100 items."},

    {type:"teach", trg:"순서", src:"order, sequence, turn", pos:"noun", gender:null,
     note:"Sino-Korean: 順 (follow/obey) + 序 (order). The correct sequence or whose turn it is.",
     example:"A: 순서대로 앉으세요.\nB: 제 순서는 몇 번이에요?\nA: 세 번째예요.",
     exampleSrc:"A: Please sit in order.\nB: What number is my turn?\nA: Third.",
     funFact:"순서 is essential in Korean culture, which values orderly queuing. 순서를 지키다 (follow the order/wait your turn) is a social virtue. Cutting in line (새치기) is considered very rude."},

    // --- Quiz batch 4 ---
    {type:"fb",
     s:"{1}대로 한 명씩 들어오세요.",
     a:["순서"],
     opts:["순서","업무","부탁","방문"],
     hint:"The Sino-Korean word for the correct sequence or order of turns. Please enter one at a time.",
     sSrc:"Please come in one at a time in {1}."},

    {type:"mc",
     q:"'부탁 하나 해도 돼요?'에서 '부탁하다'는?",
     opts:["보관하다","거절하다","정중하게 요청하다","명령하다"],
     ans:"정중하게 요청하다",
     hint:"This verb means to politely ask someone for help or a favor. It is a core Korean politeness expression."},

    {type:"match", pairs:[
      {trg:"보관하다", src:"to store, keep safe"},
      {trg:"맞추다", src:"to match, adjust"},
      {trg:"고르다", src:"to choose, select"},
      {trg:"부탁하다", src:"to request a favor"}
    ]}
  ]
};
export default LESSON_29;
