// Korean B2 — Batch 6, Lesson 5: New Things and Identity
// Words: 식품점, 식히다, 신경, 신고하다, 신규, 신기하다, 신념, 신랑, 신문사, 신문지, 신분, 신비, 신사, 신설, 신세, 신세대, 신속하다, 신인, 신입생, 신제품

const LESSON_5 = {
  id:"kov2_b2b6_l5", title:"새로운 시작", icon:"✨", xp:15, board:true,
  steps:[
    {type:"intro", title:"새로운 시작",
     desc:"Learn vocabulary about new beginnings, identity, and beliefs. Many words use the 新 (new) or 身 (body/self) hanja roots.",
     goals:["Master 20 words about new things, identity, and reporting","Understand Sino-Korean compounds with 新 (new) and 身 (self)","Use formal reporting and application vocabulary"]},

    {type:"teach", trg:"식품점", src:"grocery store, food shop", pos:"noun", gender:null,
     note:"Sino-Korean. 食品 (food products) + 店 (store).\nA store that sells food items.",
     example:"A: 근처에 식품점이 있어?\nB: 골목 끝에 하나 있어.",
     exampleSrc:"A: Is there a grocery store nearby?\nB: There is one at the end of the alley.",
     funFact:"While 식품점 is the formal term, most Koreans say 슈퍼 (super) or 마트 for their local grocery store."},

    {type:"teach", trg:"식히다", src:"to cool (something) down", pos:"verb", gender:null,
     note:"Causative of 식다 (to cool).\nMaking something lose heat.",
     example:"A: 뜨거우니까 좀 식혀서 먹어.\nB: 알았어, 조금 기다릴게.",
     exampleSrc:"A: It is hot, so cool it down before eating.\nB: Okay, I will wait a bit.",
     funFact:"Korean has many causative pairs: 식다/식히다, 녹다/녹이다, 끓다/끓이다 (cool/cool it, melt/melt it, boil/boil it)."},

    {type:"teach", trg:"신경", src:"nerve; attention, care", pos:"noun", gender:null,
     note:"Sino-Korean. 神 (spirit) + 經 (path).\nPhysical nerves or mental attention.",
     example:"A: 그 일에 너무 신경 쓰지 마.\nB: 알겠어, 노력할게.",
     exampleSrc:"A: Do not worry too much about that matter.\nB: Okay, I will try.",
     funFact:"신경 쓰다 (to pay attention/worry) is one of the most common Korean expressions. 신경 쓰이다 means it bothers you."},

    {type:"teach", trg:"신고하다", src:"to report (to authorities)", pos:"verb", gender:null,
     note:"Sino-Korean. 申告 (declare) + 하다.\nOfficial reporting to police or government.",
     example:"A: 도둑을 봤으면 바로 신고해야 해.\nB: 112에 전화하면 되지?",
     exampleSrc:"A: If you see a thief, you should report it immediately.\nB: I call 112, right?",
     funFact:"112 is Korea's police emergency number (like 911). 119 is fire/ambulance. 신고 is the formal word for reporting."},

    {type:"mc",
     q:"범죄를 목격했을 때 어디에 신고해야 하나요?",
     opts:["경찰서에 신고한다","신문사에 연락한다","시청에 간다","학교에 알린다"],
     ans:"경찰서에 신고한다",
     hint:"When you witness a crime, which authority handles criminal reports?"},

    {type:"teach", trg:"신규", src:"new, newly established", pos:"noun", gender:null,
     note:"Sino-Korean. 新 (new) + 規 (standard).\nSomething newly created or registered.",
     example:"A: 신규 회원에게 할인이 있어요.\nB: 그럼 바로 가입할게요.",
     exampleSrc:"A: There is a discount for new members.\nB: Then I will sign up right away.",
     funFact:"신규 is the business/formal word for 'new.' Casual Korean uses 새 or 새로운 instead."},

    {type:"teach", trg:"신기하다", src:"to be amazing, to be fascinating", pos:"adj", gender:null,
     note:"Sino-Korean. 神 (divine) + 奇 (strange) + 하다.\nFeeling wonder at something unusual.",
     example:"A: 이 기술이 진짜 신기해.\nB: 맞아, 미래가 온 것 같아.",
     exampleSrc:"A: This technology is really fascinating.\nB: Right, it feels like the future has arrived.",
     funFact:"신기하다 carries a sense of childlike wonder. Adults use it for genuine amazement, unlike the milder 재미있다."},

    {type:"teach", trg:"신념", src:"belief, conviction", pos:"noun", gender:null,
     note:"Sino-Korean. 信 (trust) + 念 (thought).\nA firmly held principle or belief.",
     example:"A: 그는 자기 신념을 지켰어.\nB: 대단한 사람이야.",
     exampleSrc:"A: He held onto his convictions.\nB: He is an admirable person.",
     funFact:"신념 is stronger than 믿음 (faith/belief). It implies unwavering commitment to a principle."},

    {type:"teach", trg:"신랑", src:"groom, bridegroom", pos:"noun", gender:null,
     note:"Sino-Korean. 新 (new) + 郞 (young man).\nThe man getting married.",
     example:"A: 신랑이 정말 멋있다!\nB: 신부도 너무 예뻐.",
     exampleSrc:"A: The groom looks really handsome!\nB: The bride is so beautiful too.",
     funFact:"At Korean weddings, the 신랑 traditionally bows to the bride's parents. The pair is 신랑/신부 (groom/bride)."},

    {type:"teach", trg:"신문사", src:"newspaper company", pos:"noun", gender:null,
     note:"Sino-Korean. 新聞 (newspaper) + 社 (company).\nAn organization that publishes newspapers.",
     example:"A: 어느 신문사에서 일해요?\nB: 한국일보에서 기자로 일해요.",
     exampleSrc:"A: Which newspaper company do you work for?\nB: I work as a reporter at Hankook Ilbo.",
     funFact:"Korea's major newspapers include 조선일보, 중앙일보, and 한겨레. 신문사 competition is fierce."},

    {type:"teach", trg:"신문지", src:"newspaper (the physical paper)", pos:"noun", gender:null,
     note:"Sino-Korean. 新聞 (news) + 紙 (paper).\nThe paper material itself, often for wrapping.",
     example:"A: 신문지로 유리잔을 싸 줄게.\nB: 고마워, 깨지면 안 되니까.",
     exampleSrc:"A: I will wrap the glass with newspaper.\nB: Thanks, since it should not break.",
     funFact:"Koreans commonly reuse 신문지 for wrapping, cleaning windows, and absorbing oil from fried food."},

    {type:"fb",
     s:"이사할 때 그릇을 {1}로 감쌌다.",
     a:["신문지"],
     opts:["신문지","신문사","신분","신설"],
     hint:"The physical paper material used to wrap fragile items when moving.",
     sSrc:"When moving, I wrapped the dishes with {1}."},

    {type:"teach", trg:"신분", src:"social status, identity", pos:"noun", gender:null,
     note:"Sino-Korean. 身 (body/self) + 分 (portion).\nOne's official position or identity.",
     example:"A: 신분증을 보여 주세요.\nB: 여기 여권이요.",
     exampleSrc:"A: Please show your ID.\nB: Here is my passport.",
     funFact:"신분증 (ID card) is essential in Korea. The resident registration card (주민등록증) is issued at age 17."},

    {type:"teach", trg:"신비", src:"mystery, mysteriousness", pos:"noun", gender:null,
     note:"Sino-Korean. 神 (divine) + 秘 (secret).\nThe quality of being mysterious and wondrous.",
     example:"A: 우주의 신비는 끝이 없어.\nB: 알면 알수록 더 궁금해져.",
     exampleSrc:"A: The mystery of the universe is endless.\nB: The more you know, the more curious you become.",
     funFact:"신비롭다 (to be mysterious) is the adjective form. It describes a sense of divine or awe-inspiring mystery."},

    {type:"teach", trg:"신사", src:"gentleman", pos:"noun", gender:null,
     note:"Sino-Korean. 紳 (sash/gentry) + 士 (scholar).\nA refined, well-mannered man.",
     example:"A: 그분은 진짜 신사예요.\nB: 맞아, 항상 예의가 바르시지.",
     exampleSrc:"A: He is a true gentleman.\nB: Right, he is always polite.",
     funFact:"Sinsa-dong (신사동) in Gangnam is named after this word. The pair 신사/숙녀 means 'ladies and gentlemen.'"},

    {type:"teach", trg:"신설", src:"newly established, new installation", pos:"noun", gender:null,
     note:"Sino-Korean. 新 (new) + 設 (establish).\nSetting up something for the first time.",
     example:"A: 이 학교에 새 학과가 신설됐대.\nB: 무슨 학과인데?",
     exampleSrc:"A: They say a new department was established at this school.\nB: What department is it?",
     funFact:"신설 is used for new departments, subway stations, and government offices. It implies official creation."},

    {type:"teach", trg:"신세", src:"one's lot in life, indebtedness", pos:"noun", gender:null,
     note:"Sino-Korean. 身 (self) + 世 (world).\nOne's life situation or the favors owed to others.",
     example:"A: 그동안 신세 많이 졌습니다.\nB: 아닙니다, 별말씀을요.",
     exampleSrc:"A: I have been greatly indebted to you.\nB: Not at all, do not mention it.",
     funFact:"신세를 지다 (to be indebted) is a key Korean social expression. 신세 한탄 means lamenting one's fate."},

    {type:"teach", trg:"신세대", src:"new generation", pos:"noun", gender:null,
     note:"Sino-Korean. 新 (new) + 世代 (generation).\nThe younger, newer generation.",
     example:"A: 신세대는 생각이 많이 다르지.\nB: 시대가 바뀌었으니까.",
     exampleSrc:"A: The new generation thinks very differently.\nB: Because times have changed.",
     funFact:"신세대 became a buzzword in 1990s Korea for post-democratization youth. Now MZ세대 (Millennials + Gen Z) is used."},

    {type:"teach", trg:"신속하다", src:"to be swift, to be prompt", pos:"adj", gender:null,
     note:"Sino-Korean. 迅 (fast) + 速 (speed) + 하다.\nActing quickly and efficiently.",
     example:"A: 신속한 대응이 필요합니다.\nB: 네, 바로 처리하겠습니다.",
     exampleSrc:"A: A swift response is needed.\nB: Yes, I will handle it immediately.",
     funFact:"신속, 정확 (swift and accurate) is a common Korean slogan for delivery services and emergency response."},

    {type:"teach", trg:"신인", src:"newcomer, rookie", pos:"noun", gender:null,
     note:"Sino-Korean. 新 (new) + 人 (person).\nA new person in a field or industry.",
     example:"A: 올해의 신인상은 누가 받았어?\nB: 그 드라마에 나온 배우래.",
     exampleSrc:"A: Who received the rookie award this year?\nB: They say it is the actor from that drama.",
     funFact:"신인상 (rookie award) is highly prestigious in Korean entertainment. K-pop groups compete fiercely for it."},

    {type:"teach", trg:"신입생", src:"new student, freshman", pos:"noun", gender:null,
     note:"Sino-Korean. 新入 (newly enter) + 生 (student).\nA student just entering a school.",
     example:"A: 신입생 환영회가 언제야?\nB: 다음 주 금요일이래.",
     exampleSrc:"A: When is the freshman welcome party?\nB: They say it is next Friday.",
     funFact:"Korean universities have elaborate 신입생 환영회 (MT) traditions with group activities and bonding."},

    {type:"teach", trg:"신제품", src:"new product", pos:"noun", gender:null,
     note:"Sino-Korean. 新 (new) + 製品 (product).\nA recently released product.",
     example:"A: 이 신제품 써 봤어?\nB: 아직, 어떤데?",
     exampleSrc:"A: Have you tried this new product?\nB: Not yet, how is it?",
     funFact:"Korean consumers are known for being early adopters. 신제품 launches often create long lines at stores."},

    {type:"mc",
     q:"신입생 환영회는 무엇을 위한 행사인가요?",
     opts:["새로 들어온 학생을 환영하기 위해","졸업생을 축하하기 위해","교수를 소개하기 위해","시험 결과를 발표하기 위해"],
     ans:"새로 들어온 학생을 환영하기 위해",
     hint:"The event is for students who are NEW to the school. What is its purpose?"},

    {type:"match", pairs:[
      {trg:"신인", src:"newcomer"},
      {trg:"신입생", src:"freshman"},
      {trg:"신제품", src:"new product"},
      {trg:"신규", src:"newly established"}
    ]}
  ]
};

export default LESSON_5;
