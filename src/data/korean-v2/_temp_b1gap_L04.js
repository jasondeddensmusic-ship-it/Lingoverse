// Korean B1 Gap - Lesson 4: Education and Academic Life
const LESSON_4 = {
  id:"kov2_b1gap_l4", title:"교육과 학문", icon:"📚", xp:15, board:true,
  steps:[
    {type:"intro", title:"Education and Academic Life",
     desc:"Learn essential vocabulary for education, research, and academic work in Korean. These words are critical for TOPIK II readings about school, university, and scientific topics.",
     goals:["Master 20 education and academic vocabulary words","Understand hanja roots in academic terminology","Discuss research, writing, and school subjects"]},

    // --- Teach 1-4 ---
    {type:"teach", trg:"과목", src:"subject, course", pos:"noun", gender:null,
     note:"School or university subject. 필수 과목 (required course), 선택 과목 (elective).",
     example:"A: 이번 학기에 몇 과목을 들어요?\nB: 다섯 과목을 듣고 있어요.\nA: 가장 좋아하는 과목이 뭐예요?",
     exampleSrc:"A: How many courses are you taking this semester?\nB: I'm taking five courses.\nA: What's your favorite subject?",
     funFact:"From hanja: 科 (branch/department) + 目 (eye/item). The same 科 appears in 과학 (science) and 교과서 (textbook). 目 means 'item' in compound words."},

    {type:"teach", trg:"과제", src:"assignment, task", pos:"noun", gender:null,
     note:"Homework, project, or any assigned task. Very common in school contexts.",
     example:"A: 과제를 다 했어요?\nB: 아직 반밖에 못 했어요.\nA: 과제 마감이 내일이에요!",
     exampleSrc:"A: Have you finished the assignment?\nB: I've only done half so far.\nA: The assignment deadline is tomorrow!",
     funFact:"From hanja: 課 (lesson/levy) + 題 (topic/problem). The same 題 appears in 문제 (problem), 주제 (topic/theme), and 제목 (title)."},

    {type:"teach", trg:"과학자", src:"scientist", pos:"noun", gender:null,
     note:"과학 (science) + -자 (person). The -자 suffix creates many profession nouns.",
     example:"A: 어렸을 때 과학자가 되고 싶었어요?\nB: 네, 유명한 과학자를 존경했어요.\nA: 지금도 과학에 관심이 있어요?",
     exampleSrc:"A: Did you want to become a scientist as a child?\nB: Yes, I admired famous scientists.\nA: Are you still interested in science?",
     funFact:"From hanja: 科 (branch) + 學 (study) + 者 (person). Korea's most famous scientist is 장영실 (Jang Yeong-sil), a 15th-century inventor who created rain gauges and sundials."},

    {type:"teach", trg:"과학적", src:"scientific", pos:"adj", gender:null,
     note:"Adjective form of 과학. Used to describe methods, thinking, or evidence.",
     example:"A: 이 주장이 과학적이에요?\nB: 네, 과학적인 근거가 있어요.\nA: 과학적으로 증명됐어요?",
     exampleSrc:"A: Is this claim scientific?\nB: Yes, there is scientific evidence.\nA: Has it been scientifically proven?",
     funFact:"The suffix -적 (from hanja 的) is the most productive adjective-maker in Korean. Attach it to almost any Sino-Korean noun: 경제적, 대표적, 과학적, 구체적, 긍정적."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'과학적 근거'의 뜻은?",
     opts:["과학 과목의 과제","과학으로 증명할 수 있는 이유","과학자의 이름","과학 시험 점수"],
     ans:"과학으로 증명할 수 있는 이유",
     hint:"과학적 means scientific and 근거 means evidence/basis. Together they form a research term."},

    {type:"fb",
     s:"이번 학기 {1} 마감일을 확인하세요.",
     a:["과제"],
     opts:["과제","과목","과학","논문"],
     hint:"Check the deadline for your homework or assignments this semester.",
     sSrc:"Please check this semester's {1} deadlines."},

    // --- Teach 5-8 ---
    {type:"teach", trg:"논문", src:"thesis, academic paper", pos:"noun", gender:null,
     note:"Academic writing: 석사 논문 (master's thesis), 박사 논문 (doctoral dissertation).",
     example:"A: 논문 주제를 정했어요?\nB: 네, 한국어 교육에 대한 논문을 쓸 거예요.\nA: 논문 쓰기가 힘들겠네요.",
     exampleSrc:"A: Have you decided on your thesis topic?\nB: Yes, I'll write a paper on Korean language education.\nA: Writing a thesis must be tough.",
     funFact:"From hanja: 論 (discuss/argue) + 文 (writing/text). The same 論 appears in 이론 (theory) and 토론 (debate). Academic writing is deeply respected in Korean culture."},

    {type:"teach", trg:"논의하다", src:"to discuss, to deliberate", pos:"verb", gender:null,
     note:"Formal discussion. More serious than 이야기하다 (to talk).",
     example:"A: 이 문제를 논의해야 해요.\nB: 내일 회의에서 논의합시다.\nA: 모든 팀원이 논의에 참여해야 해요.",
     exampleSrc:"A: We need to discuss this issue.\nB: Let's discuss it at tomorrow's meeting.\nA: All team members should participate in the discussion.",
     funFact:"From hanja: 論 (discuss) + 議 (deliberate). Both characters mean discussing or debating, making this an emphatic compound. The noun form 논의 is also common."},

    {type:"teach", trg:"교류", src:"exchange, interaction", pos:"noun", gender:null,
     note:"Cultural, academic, or interpersonal exchange. 문화 교류 (cultural exchange).",
     example:"A: 한일 문화 교류가 활발해요.\nB: 교류를 통해 서로 이해할 수 있어요.\nA: 학생 교류 프로그램도 있어요?",
     exampleSrc:"A: Korea-Japan cultural exchange is active.\nB: Through exchange, we can understand each other.\nA: Are there student exchange programs too?",
     funFact:"From hanja: 交 (cross/interact) + 流 (flow). Literally 'crossing flows.' The same 交 appears in 교통 (traffic, literally 'crossing communication') and 교육 (education)."},

    {type:"teach", trg:"기초", src:"foundation, basics", pos:"noun", gender:null,
     note:"The fundamental base of knowledge or a structure. Often with 적 (기초적).",
     example:"A: 기초부터 배우고 싶어요.\nB: 기초가 중요하니까요.\nA: 기초가 탄탄하면 나중에 쉬워요.",
     exampleSrc:"A: I want to learn from the basics.\nB: Because the foundation is important.\nA: If the foundation is solid, it gets easier later.",
     funFact:"From hanja: 基 (base/foundation) + 礎 (cornerstone). Literally 'the base stone.' 기초 공사 means 'foundation work' in construction. The metaphor extends to all learning."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"논문", src:"thesis, paper"},
      {trg:"논의하다", src:"to discuss"},
      {trg:"교류", src:"exchange"},
      {trg:"기초", src:"foundation, basics"}
    ]},

    {type:"mc",
     q:"문화 교류의 목적으로 가장 맞는 것은?",
     opts:["논문을 쓰기 위해","과제를 하기 위해","서로를 이해하기 위해","시험을 보기 위해"],
     ans:"서로를 이해하기 위해",
     hint:"Cultural exchange aims at mutual understanding between different groups."},

    // --- Teach 9-12 ---
    {type:"teach", trg:"기본", src:"basics, fundamentals", pos:"noun", gender:null,
     note:"Similar to 기초 but more about principles. 기본적 (fundamental), 기본권 (basic rights).",
     example:"A: 기본을 먼저 익히세요.\nB: 기본이 제일 중요하죠.\nA: 기본에 충실하면 실력이 늘어요.",
     exampleSrc:"A: Master the basics first.\nB: The fundamentals are the most important.\nA: If you stay true to the basics, your skills improve.",
     funFact:"From hanja: 基 (base) + 本 (root/origin). Compare with 기초: 기본 focuses on core principles, while 기초 focuses on the starting level. Both share the character 基."},

    {type:"teach", trg:"기간", src:"period, duration", pos:"noun", gender:null,
     note:"A span of time. 기간 동안 (during the period), 신청 기간 (application period).",
     example:"A: 프로젝트 기간이 얼마나 돼요?\nB: 3개월 기간이에요.\nA: 기간 내에 끝낼 수 있어요?",
     exampleSrc:"A: How long is the project period?\nB: It's a 3-month period.\nA: Can you finish within the period?",
     funFact:"From hanja: 期 (period/expect) + 間 (between/space). The same 期 appears in 학기 (semester), 기대 (expectation), and 기한 (deadline)."},

    {type:"teach", trg:"글", src:"writing, text", pos:"noun", gender:null,
     note:"Native Korean word. Covers any written text: essays, posts, articles.",
     example:"A: 글을 잘 쓰시네요.\nB: 감사합니다, 매일 글을 써요.\nA: 어떤 글을 쓰세요?",
     exampleSrc:"A: You write well.\nB: Thank you, I write every day.\nA: What kind of writing do you do?",
     funFact:"Pure native Korean. 글 is one of the most fundamental words in the language. 한글 (hangul) literally means 'great writing' or 'Korean writing.' 글자 means 'written character.'"},

    {type:"teach", trg:"글쓰기", src:"writing (the act of)", pos:"noun", gender:null,
     note:"Compound: 글 (writing) + 쓰기 (the act of writing). A school subject name.",
     example:"A: 글쓰기 수업을 들어요?\nB: 네, 글쓰기 실력을 키우고 싶어요.\nA: 글쓰기는 연습이 중요해요.",
     exampleSrc:"A: Are you taking a writing class?\nB: Yes, I want to improve my writing skills.\nA: Practice is important for writing.",
     funFact:"The -기 suffix nominalizes verbs in Korean: 읽기 (reading), 듣기 (listening), 말하기 (speaking), 쓰기 (writing). These are the four TOPIK skill sections."},

    // --- Quiz batch 3 ---
    {type:"fb",
     s:"신청 {1}은 다음 주 금요일까지예요.",
     a:["기간"],
     opts:["기간","기초","기본","기술"],
     hint:"You are talking about the time span during which applications are accepted.",
     sSrc:"The application {1} is until next Friday."},

    {type:"mc",
     q:"TOPIK 시험의 네 가지 영역이 아닌 것은?",
     opts:["읽기, 듣기, 쓰기, 말하기","듣기, 읽기, 쓰기, 말하기","말하기, 읽기, 듣기, 글쓰기","글쓰기, 번역하기, 듣기, 읽기"],
     ans:"글쓰기, 번역하기, 듣기, 읽기",
     hint:"One of these lists includes 'translating' which is NOT a TOPIK section. The four skills are listening, reading, writing, and speaking."},

    // --- Teach 13-16 ---
    {type:"teach", trg:"글자", src:"letter, character", pos:"noun", gender:null,
     note:"A single written character. 글 (writing) + 자 (character).",
     example:"A: 이 글자를 읽을 수 있어요?\nB: 한글 글자는 읽을 수 있어요.\nA: 한자 글자는 어려워요.",
     exampleSrc:"A: Can you read this character?\nB: I can read hangul characters.\nA: Chinese characters are difficult.",
     funFact:"Hangul has 24 basic letters (자음 14, 모음 10) that combine into syllable blocks. Each block is one 글자. King Sejong created this system in 1443 so that common people could become literate."},

    {type:"teach", trg:"기록하다", src:"to record, to document", pos:"verb", gender:null,
     note:"Writing something down for preservation. 기록 (record/documentation).",
     example:"A: 회의 내용을 기록했어요?\nB: 네, 자세히 기록했어요.\nA: 기록을 공유해 주세요.",
     exampleSrc:"A: Did you record the meeting contents?\nB: Yes, I recorded them in detail.\nA: Please share the records.",
     funFact:"From hanja: 記 (write down) + 錄 (record/register). The same 記 appears in 일기 (diary) and 기자 (journalist/reporter). All relate to writing things down."},

    {type:"teach", trg:"기술", src:"technology, skill", pos:"noun", gender:null,
     note:"Two meanings: modern technology AND personal skill/technique.",
     example:"A: 한국의 기술이 발전했어요.\nB: 특히 IT 기술이 세계적이에요.\nA: 기술 발전이 빠르죠.",
     exampleSrc:"A: Korea's technology has advanced.\nB: Especially IT technology is world-class.\nA: Technological development is fast.",
     funFact:"From hanja: 技 (skill/craft) + 術 (art/method). Originally meant craftsman's skill, now also means technology. 과학 기술 (science and technology) is often abbreviated to 과기."},

    {type:"teach", trg:"담임", src:"homeroom teacher", pos:"noun", gender:null,
     note:"Short for 담임 선생님. The teacher responsible for one class of students.",
     example:"A: 담임 선생님이 누구예요?\nB: 김 선생님이 우리 담임이에요.\nA: 좋은 담임 선생님이에요?",
     exampleSrc:"A: Who is the homeroom teacher?\nB: Mr. Kim is our homeroom teacher.\nA: Is he a good homeroom teacher?",
     funFact:"From hanja: 擔 (carry) + 任 (duty/responsibility). Literally 'carrying the duty.' In Korean schools, the 담임 is more than a teacher; they handle counseling, parent meetings, and student welfare."},

    // --- Quiz batch 4 ---
    {type:"match", pairs:[
      {trg:"글자", src:"letter, character"},
      {trg:"기록하다", src:"to record"},
      {trg:"기술", src:"technology, skill"},
      {trg:"담임", src:"homeroom teacher"}
    ]},

    {type:"fb",
     s:"회의 내용을 {1}해 주세요.",
     a:["기록"],
     opts:["기록","기술","기간","기초"],
     hint:"Please write down and document what was discussed in the meeting.",
     sSrc:"Please {1} the meeting contents."},

    // --- Teach 17-20 ---
    {type:"teach", trg:"구체적", src:"specific, concrete", pos:"adj", gender:null,
     note:"Opposite of 추상적 (abstract). Used when asking for details.",
     example:"A: 좀 더 구체적으로 설명해 주세요.\nB: 구체적인 예를 들어볼게요.\nA: 구체적인 계획이 있어요?",
     exampleSrc:"A: Please explain more specifically.\nB: Let me give a concrete example.\nA: Do you have a specific plan?",
     funFact:"From hanja: 具 (tool/equipment) + 體 (body) + 的 (target). Literally 'having a body/form.' Something 구체적 has tangible shape, unlike something 추상적 (abstract)."},

    {type:"teach", trg:"내용", src:"content, details", pos:"noun", gender:null,
     note:"The substance or content of something. Extremely common in formal Korean.",
     example:"A: 이메일 내용을 확인했어요?\nB: 네, 내용이 좀 복잡해요.\nA: 주요 내용만 정리해 주세요.",
     exampleSrc:"A: Have you checked the email content?\nB: Yes, the content is a bit complex.\nA: Please summarize just the main content.",
     funFact:"From hanja: 內 (inside) + 容 (contain/face). Literally 'what is contained inside.' One of the top 50 most frequent nouns in Korean text. You will encounter it everywhere."},

    {type:"teach", trg:"관찰하다", src:"to observe", pos:"verb", gender:null,
     note:"Scientific/careful observation. 관찰 (observation), 관찰력 (observation skills).",
     example:"A: 실험에서 무엇을 관찰했어요?\nB: 온도 변화를 관찰했어요.\nA: 관찰 결과를 기록하세요.",
     exampleSrc:"A: What did you observe in the experiment?\nB: I observed temperature changes.\nA: Please record the observation results.",
     funFact:"From hanja: 觀 (see/view) + 察 (examine/investigate). The same 觀 appears in 관점 (viewpoint), 관광 (tourism, literally 'viewing light/sights'), and 관객 (audience)."},

    {type:"teach", trg:"검사", src:"inspection, examination", pos:"noun", gender:null,
     note:"Two meanings: physical inspection/test AND prosecutor (법적 검사).",
     example:"A: 건강 검사를 받았어요?\nB: 네, 어제 검사를 받았어요.\nA: 검사 결과가 어땠어요?",
     exampleSrc:"A: Have you had a health checkup?\nB: Yes, I had the examination yesterday.\nA: How were the examination results?",
     funFact:"From hanja: 檢 (examine/check) + 査 (investigate). Also means 'prosecutor' in legal contexts (same hanja). 건강 검사 (health check) is one of the most common collocations."},

    // --- Quiz batch 5 ---
    {type:"mc",
     q:"'구체적인 계획'의 반대 표현은?",
     opts:["과학적인 계획","경제적인 계획","추상적인 계획","기초적인 계획"],
     ans:"추상적인 계획",
     hint:"The opposite of concrete/specific is abstract. Which Korean word means abstract?"},

    {type:"fb",
     s:"이메일의 주요 {1}을 정리해 주세요.",
     a:["내용"],
     opts:["내용","기간","과제","검사"],
     hint:"Please organize the main substance or details of the email.",
     sSrc:"Please organize the main {1} of the email."},

    {type:"mc",
     q:"과학 실험에서 가장 중요한 단계는?",
     opts:["글쓰기 연습하기","관찰하고 기록하기","담임 선생님 만나기","과목을 선택하기"],
     ans:"관찰하고 기록하기",
     hint:"In science, you must carefully watch what happens and write it down."}
  ]
};
export default LESSON_4;
