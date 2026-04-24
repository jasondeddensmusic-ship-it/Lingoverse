// Korean B1 Gap - Lesson 3: Business, Contracts, and Management
const LESSON_3 = {
  id:"kov2_b1gap_l3", title:"경영과 계약", icon:"💼", xp:15, board:true,
  steps:[
    {type:"intro", title:"Business, Contracts, and Management",
     desc:"Master essential business Korean for the workplace. Learn vocabulary for management, contracts, customers, and corporate life that appears frequently in TOPIK readings and real-world Korean offices.",
     goals:["Master 20 business and workplace vocabulary words","Understand management and contract terminology","Navigate Korean corporate hierarchy vocabulary"]},

    // --- Teach 1-4 ---
    {type:"teach", trg:"경영", src:"management, business administration", pos:"noun", gender:null,
     note:"Running/managing a business. Often paired with 하다 or used as modifier.",
     example:"A: 경영학을 전공했어요?\nB: 네, 대학에서 경영학을 공부했어요.\nA: 경영이 쉽지 않죠?",
     exampleSrc:"A: Did you major in business administration?\nB: Yes, I studied business administration in college.\nA: Management isn't easy, right?",
     funFact:"From hanja: 經 (manage/pass through) + 營 (operate/camp). The same 經 appears in 경제 (economy) and 경험 (experience). All relate to 'managing' something."},

    {type:"teach", trg:"경제적", src:"economic, economical", pos:"adj", gender:null,
     note:"Can mean 'related to economy' or 'cost-effective.' Context determines meaning.",
     example:"A: 이 방법이 경제적이에요?\nB: 네, 가장 경제적인 방법이에요.\nA: 경제적으로 어려운 시기네요.",
     exampleSrc:"A: Is this method economical?\nB: Yes, it's the most economical method.\nA: It's an economically difficult time.",
     funFact:"From hanja: 經 (manage) + 濟 (cross a river/save) + 的 (target). 경제 originally meant 'managing the world and saving the people' in classical Chinese."},

    {type:"teach", trg:"계약", src:"contract, agreement", pos:"noun", gender:null,
     note:"Legal/business term. 계약하다 (to sign a contract), 계약서 (contract document).",
     example:"A: 계약서를 확인했어요?\nB: 네, 내일 계약할 거예요.\nA: 계약 조건을 잘 읽어 보세요.",
     exampleSrc:"A: Have you checked the contract?\nB: Yes, I'll sign the contract tomorrow.\nA: Read the contract terms carefully.",
     funFact:"From hanja: 契 (bond/promise) + 約 (promise/agreement). Both characters mean 'promise,' making this word doubly emphatic about binding agreements."},

    {type:"teach", trg:"고객", src:"customer, client", pos:"noun", gender:null,
     note:"Formal business term. More polite than 손님 in corporate contexts.",
     example:"A: 고객 만족이 가장 중요해요.\nB: 맞아요, 고객의 의견을 들어야 해요.\nA: 고객 서비스를 개선합시다.",
     exampleSrc:"A: Customer satisfaction is most important.\nB: Right, we need to listen to customer opinions.\nA: Let's improve customer service.",
     funFact:"From hanja: 顧 (look back/care for) + 客 (guest). Literally 'a guest you look back to care for.' The nuance is that customers deserve attentive care."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'계약서'에서 '-서'의 뜻은?",
     opts:["문서, 서류","시간","사람","장소"],
     ans:"문서, 서류",
     hint:"The suffix -서 turns a concept into a written document. Think: contract + document."},

    {type:"fb",
     s:"{1} 만족도를 높이기 위해 노력하고 있어요.",
     a:["고객"],
     opts:["고객","경영","계약","고급"],
     hint:"We are trying to increase the satisfaction of our clients/customers.",
     sSrc:"We are working to increase {1} satisfaction."},

    // --- Teach 5-8 ---
    {type:"teach", trg:"고급", src:"high-class, premium", pos:"noun", gender:null,
     note:"Used as modifier: 고급 레스토랑, 고급 브랜드. Opposite: 저급.",
     example:"A: 이 호텔은 고급이에요?\nB: 네, 아주 고급스러워요.\nA: 고급 레스토랑도 있어요?",
     exampleSrc:"A: Is this hotel high-class?\nB: Yes, it's very upscale.\nA: Are there premium restaurants too?",
     funFact:"From hanja: 高 (high) + 級 (grade/level). The same 級 appears in 등급 (rating/grade) and 학급 (school class/grade level)."},

    {type:"teach", trg:"근무", src:"work, duty", pos:"noun", gender:null,
     note:"Formal word for 'work.' 근무하다 (to work), 근무 시간 (working hours).",
     example:"A: 근무 시간이 어떻게 돼요?\nB: 오전 9시부터 오후 6시까지 근무해요.\nA: 야간 근무도 있어요?",
     exampleSrc:"A: What are the working hours?\nB: I work from 9 AM to 6 PM.\nA: Is there night shift work too?",
     funFact:"From hanja: 勤 (diligent) + 務 (duty/affair). The same 勤 appears in 근로 (labor) and 출근 (going to work). All emphasize diligence."},

    {type:"teach", trg:"근무하다", src:"to work, to be on duty", pos:"verb", gender:null,
     note:"More formal than 일하다. Used in professional/official contexts.",
     example:"A: 어디에서 근무하세요?\nB: 서울 본사에서 근무하고 있어요.\nA: 얼마나 오래 근무하셨어요?",
     exampleSrc:"A: Where do you work?\nB: I work at the Seoul headquarters.\nA: How long have you been working there?",
     funFact:"On Korean resumes (이력서), 근무하다 is preferred over 일하다. Using the more formal Sino-Korean verb signals professionalism."},

    {type:"teach", trg:"관리", src:"management, maintenance", pos:"noun", gender:null,
     note:"Broader than 경영. Can mean managing people, things, or systems.",
     example:"A: 건강 관리를 잘 하세요?\nB: 운동으로 관리하고 있어요.\nA: 시간 관리도 중요해요.",
     exampleSrc:"A: Do you manage your health well?\nB: I manage it through exercise.\nA: Time management is important too.",
     funFact:"From hanja: 管 (tube/pipe/control) + 理 (principle/reason). Originally meant 'controlling the flow through pipes,' now means managing anything systematically."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"경영", src:"business administration"},
      {trg:"근무", src:"work, duty"},
      {trg:"관리", src:"management"},
      {trg:"고급", src:"high-class"}
    ]},

    {type:"mc",
     q:"'근무 시간'의 뜻은?",
     opts:["쉬는 시간","일하는 시간","자는 시간","먹는 시간"],
     ans:"일하는 시간",
     hint:"근무 means work/duty. Combined with 시간, it describes working hours."},

    // --- Teach 9-12 ---
    {type:"teach", trg:"광고", src:"advertisement", pos:"noun", gender:null,
     note:"Very common word. 광고하다 (to advertise), TV 광고 (TV commercial).",
     example:"A: 이 광고 봤어요?\nB: 네, 재미있는 광고예요.\nA: 광고 덕분에 매출이 올랐대요.",
     exampleSrc:"A: Have you seen this ad?\nB: Yes, it's a fun advertisement.\nA: I heard sales went up thanks to the ad.",
     funFact:"From hanja: 廣 (wide/broad) + 告 (announce/inform). Literally 'broadly announcing.' The Korean advertising industry is massive, fueled by K-pop celebrity endorsements."},

    {type:"teach", trg:"담당하다", src:"to be in charge of", pos:"verb", gender:null,
     note:"Common in workplaces. 담당자 (person in charge), 담당 업무 (assigned duties).",
     example:"A: 이 프로젝트를 누가 담당해요?\nB: 제가 담당하고 있어요.\nA: 담당자에게 연락할게요.",
     exampleSrc:"A: Who is in charge of this project?\nB: I'm in charge of it.\nA: I'll contact the person in charge.",
     funFact:"From hanja: 擔 (carry on shoulders) + 當 (face/bear). Literally 'carrying the responsibility on your shoulders.' A very physical metaphor for workplace duty."},

    {type:"teach", trg:"맡기다", src:"to entrust, to leave with", pos:"verb", gender:null,
     note:"Causative of 맡다. You entrust something TO someone else.",
     example:"A: 아이를 누구에게 맡겨요?\nB: 부모님께 맡기고 있어요.\nA: 믿을 수 있는 분이라 다행이에요.",
     exampleSrc:"A: Who do you leave your child with?\nB: I'm leaving them with my parents.\nA: It's good that they're trustworthy.",
     funFact:"Native Korean verb. The base 맡다 means 'to take charge,' while 맡기다 reverses it to mean 'to give charge to someone.' This active/causative pair is a core Korean grammar pattern."},

    {type:"teach", trg:"맡다", src:"to take charge of, to undertake", pos:"verb", gender:null,
     note:"Native Korean. You take responsibility. Related to 맡기다 (to entrust).",
     example:"A: 이번 행사를 맡아 주실 수 있어요?\nB: 네, 제가 맡을게요.\nA: 감사합니다, 믿고 맡기겠습니다.",
     exampleSrc:"A: Could you take charge of this event?\nB: Yes, I'll take charge of it.\nA: Thank you, I'll trust and entrust it to you.",
     funFact:"Also means 'to smell' in a completely different usage: 냄새를 맡다 (to smell a scent). Context always makes the meaning clear. Homonyms are common in Korean."},

    // --- Quiz batch 3 ---
    {type:"fb",
     s:"이 프로젝트는 김 과장님이 {1}하고 있어요.",
     a:["담당"],
     opts:["담당","광고","관리","계약"],
     hint:"Mr. Kim is the person responsible for this project. Which word means 'in charge'?",
     sSrc:"Section Chief Kim is {1} this project."},

    {type:"mc",
     q:"'맡기다'와 '맡다'의 관계는?",
     opts:["둘 다 같은 뜻이다","맡기다는 명사, 맡다는 동사","맡기다는 '주다', 맡다는 '받다' 의미","맡기다는 광고, 맡다는 관리"],
     ans:"맡기다는 '주다', 맡다는 '받다' 의미",
     hint:"One means to hand over responsibility, the other to accept it. Think give vs. receive."},

    // --- Teach 13-16 ---
    {type:"teach", trg:"계산하다", src:"to calculate, to pay", pos:"verb", gender:null,
     note:"Two meanings: mathematical calculation AND paying a bill at a restaurant.",
     example:"A: 계산해 주세요.\nB: 네, 총 25,000원입니다.\nA: 카드로 계산할게요.",
     exampleSrc:"A: The bill, please.\nB: Yes, the total is 25,000 won.\nA: I'll pay by card.",
     funFact:"From hanja: 計 (count/plan) + 算 (calculate). At restaurants, 계산서 is the bill and 계산하다 means 'to pay.' This dual meaning (calculate + pay) confuses many learners."},

    {type:"teach", trg:"과장", src:"section chief", pos:"noun", gender:null,
     note:"Mid-level manager title. Part of the Korean corporate hierarchy.",
     example:"A: 과장님, 보고서 확인해 주세요.\nB: 알겠어요. 내일까지 확인할게요.\nA: 감사합니다, 과장님.",
     exampleSrc:"A: Section Chief, please review the report.\nB: Understood. I'll review it by tomorrow.\nA: Thank you, Section Chief.",
     funFact:"Korean corporate ranks: 사원 (staff) < 대리 (assistant manager) < 과장 (section chief) < 차장 (deputy manager) < 부장 (department head) < 이사 (director)."},

    {type:"teach", trg:"개발하다", src:"to develop", pos:"verb", gender:null,
     note:"Used for products, technology, real estate, and skills.",
     example:"A: 새 제품을 개발하고 있어요?\nB: 네, 6개월째 개발 중이에요.\nA: 개발이 잘 되고 있어요?",
     exampleSrc:"A: Are you developing a new product?\nB: Yes, we've been developing it for 6 months.\nA: Is the development going well?",
     funFact:"From hanja: 開 (open) + 發 (emit/shoot). Literally 'opening and releasing.' The same 開 appears in 개방 (opening up) and 개선 (improvement)."},

    {type:"teach", trg:"경기", src:"economy; game/match", pos:"noun", gender:null,
     note:"Two unrelated meanings: economic conditions OR a sports game.",
     example:"A: 요즘 경기가 안 좋아요.\nB: 네, 경기 침체가 심해요.\nA: 경기가 빨리 좋아지면 좋겠어요.",
     exampleSrc:"A: The economy isn't good these days.\nB: Yes, the economic recession is severe.\nA: I hope the economy gets better quickly.",
     funFact:"Two different hanja: economy 景氣 (scene + spirit) vs. sports 競技 (compete + skill). Written identically in hangul but completely different origins. Context is everything."},

    // --- Quiz batch 4 ---
    {type:"fb",
     s:"새로운 앱을 {1}하는 데 1년이 걸렸어요.",
     a:["개발"],
     opts:["개발","계산","광고","계약"],
     hint:"It took a year to create this new app from scratch. Which word means 'develop'?",
     sSrc:"It took 1 year to {1} the new app."},

    {type:"match", pairs:[
      {trg:"계산하다", src:"to calculate / to pay"},
      {trg:"과장", src:"section chief"},
      {trg:"개발하다", src:"to develop"},
      {trg:"경기", src:"economy; game"}
    ]},

    // --- Teach 17-20 ---
    {type:"teach", trg:"관련", src:"relation, connection", pos:"noun", gender:null,
     note:"Used as modifier or with 되다/하다. 관련 있다 (is related).",
     example:"A: 이 문제와 관련이 있어요?\nB: 네, 직접적으로 관련이 있어요.\nA: 관련 자료를 보내 주세요.",
     exampleSrc:"A: Is this related to that problem?\nB: Yes, it's directly related.\nA: Please send related materials.",
     funFact:"From hanja: 關 (gate/barrier) + 聯 (connect/link). Literally 'connected at the gate.' The same 關 appears in 관심 (interest, literally 'heart at the gate')."},

    {type:"teach", trg:"관련되다", src:"to be related, to be connected", pos:"verb", gender:null,
     note:"Passive form. The connection exists, the subject doesn't create it.",
     example:"A: 이 사건과 관련된 사람이 있어요?\nB: 세 명이 관련돼 있어요.\nA: 관련된 정보를 찾아보세요.",
     exampleSrc:"A: Is there anyone connected to this case?\nB: Three people are involved.\nA: Look for related information.",
     funFact:"In Korean news, 관련된 is one of the most frequent modifiers. 'Related persons' (관련자), 'related documents' (관련 서류), 'related laws' (관련 법률) appear in every article."},

    {type:"teach", trg:"관련하다", src:"to relate to, to concern", pos:"verb", gender:null,
     note:"Active form. Often in patterns like -에 관련하여 (regarding, concerning).",
     example:"A: 이 문제에 관련하여 회의를 합시다.\nB: 네, 관련 부서에 연락할게요.\nA: 빨리 처리해야 해요.",
     exampleSrc:"A: Let's have a meeting regarding this issue.\nB: Yes, I'll contact the related department.\nA: We need to handle it quickly.",
     funFact:"The pattern -에 관련하여 is extremely formal and common in official documents, news, and business emails. It is roughly equivalent to English 'regarding' or 'concerning.'"},

    {type:"teach", trg:"단체", src:"group, organization", pos:"noun", gender:null,
     note:"An organized group with a shared purpose. 시민 단체 (civic group).",
     example:"A: 어떤 단체에 소속돼 있어요?\nB: 환경 보호 단체에서 활동해요.\nA: 단체 활동이 보람 있겠네요.",
     exampleSrc:"A: Which organization do you belong to?\nB: I'm active in an environmental protection group.\nA: Group activities must be rewarding.",
     funFact:"From hanja: 團 (round/group) + 體 (body). Literally 'a body formed into a group.' The same 體 appears in 신체 (body), 전체 (whole), 구체적 (concrete/specific)."},

    // --- Quiz batch 5 ---
    {type:"mc",
     q:"'관련'의 반대 의미에 가장 가까운 것은?",
     opts:["광고","경영","관리","무관"],
     ans:"무관",
     hint:"The prefix 무- means 'without.' Without relation means unrelated."},

    {type:"fb",
     s:"환경 보호 {1}에 가입하고 싶어요.",
     a:["단체"],
     opts:["단체","관련","계약","경기"],
     hint:"You want to join an organized group dedicated to environmental protection.",
     sSrc:"I want to join an environmental protection {1}."},

    {type:"mc",
     q:"한국 회사에서 '과장'의 위치는?",
     opts:["중간 관리자","최고 경영자","신입 사원","회사 대표"],
     ans:"중간 관리자",
     hint:"This title is above staff level but below department head in the corporate hierarchy."}
  ]
};
export default LESSON_3;
