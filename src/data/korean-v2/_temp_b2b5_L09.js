// Korean B2. Batch 5, Lesson 9: Dialect, Industry, and Survival
// Words: 사정, 사진기, 사촌, 사춘기, 사투리, 사표, 사회생활, 사회자, 사회주의, 사회학, 사흘, 산길, 산부인과, 산속, 산업, 살림, 살아가다, 살아나다, 살아남다, 살아오다

const LESSON_9 = {
  id:"kov2_b2b5_l9", title:"삶의 여정", icon:"🏔️", xp:15, board:true,
  steps:[
    {type:"intro", title:"삶의 여정",
     desc:"Learn vocabulary about circumstances, family, social life, industry, and survival. These words help express life experiences and social structures at the B2 level.",
     goals:["Master 20 words about social life, industry, and survival","Understand compound verbs with 살아- (living/surviving)","Use formal social and academic vocabulary"]},

    {type:"teach", trg:"사정", src:"circumstances, situation, reason", pos:"noun", gender:null,
     note:"Sino-Korean. 事 (matter) + 情 (feeling/situation).\nThe background reasons or conditions.",
     example:"A: 개인 사정으로 참석이 어렵습니다.\nB: 알겠습니다, 다음에 뵙겠습니다.",
     exampleSrc:"A: Due to personal circumstances, it is difficult to attend.\nB: I understand, I will see you next time.",
     funFact:"사정이 있다 (there are circumstances) is a polite way to excuse yourself without giving details."},

    {type:"teach", trg:"사진기", src:"camera", pos:"noun", gender:null,
     note:"사진 (photograph) + 기 (machine).\nA device for taking photographs.",
     example:"A: 새 사진기를 샀어.\nB: 어떤 브랜드야?",
     exampleSrc:"A: I bought a new camera.\nB: What brand is it?",
     funFact:"카메라 (from English) is more common in casual speech, but 사진기 is the pure Korean term still used formally."},

    {type:"teach", trg:"사촌", src:"cousin", pos:"noun", gender:null,
     note:"Sino-Korean. 四 (four) + 寸 (inch/degree).\nFour degrees of family separation.",
     example:"A: 사촌이 몇 명이야?\nB: 다섯 명이야. 다 서울에 살아.",
     exampleSrc:"A: How many cousins do you have?\nB: Five. They all live in Seoul.",
     funFact:"Korean measures family distance in 촌 (degrees): 1촌 (parent/child), 2촌 (siblings), 4촌 (cousins)."},

    {type:"teach", trg:"사춘기", src:"puberty, adolescence", pos:"noun", gender:null,
     note:"Sino-Korean. 思春期 (thinking of spring period).\nThe phase of adolescent development.",
     example:"A: 사춘기 때 부모님과 많이 싸웠어.\nB: 대부분 그렇지. 자연스러운 거야.",
     exampleSrc:"A: I fought a lot with my parents during puberty.\nB: Most people do. It is natural.",
     funFact:"The literal meaning 'spring-longing period' poetically captures the emotional awakening of adolescence."},

    {type:"teach", trg:"사투리", src:"dialect, regional accent", pos:"noun", gender:null,
     note:"Native Korean word.\nA regional way of speaking.",
     example:"A: 사투리 쓰면 더 친근하게 느껴져.\nB: 맞아, 경상도 사투리가 매력적이야.",
     exampleSrc:"A: Using dialect feels more friendly.\nB: Right, the Gyeongsang dialect is charming.",
     funFact:"Korea has distinct dialects: 경상도, 전라도, 충청도, 제주도. Jeju dialect is almost unintelligible to mainlanders."},

    {type:"fb",
     s:"그 배우는 드라마에서 부산 {1}를 잘 사용했다.",
     a:["사투리"],
     opts:["사투리","사설","사상","사정"],
     hint:"Which word means regional dialect, describing how an actor used a Busan accent in a drama?",
     sSrc:"That actor used the Busan {1} well in the drama."},

    {type:"teach", trg:"사표", src:"letter of resignation", pos:"noun", gender:null,
     note:"Sino-Korean. 辭 (resign) + 表 (expression).\nA formal document to quit a job.",
     example:"A: 사표를 내기로 결심했어.\nB: 정말? 다른 곳으로 가는 거야?",
     exampleSrc:"A: I decided to submit my resignation.\nB: Really? Are you going somewhere else?",
     funFact:"사표를 내다 (to submit a resignation) vs 사표를 던지다 (to throw a resignation, more dramatic/angry)."},

    {type:"teach", trg:"사회생활", src:"social life, working life", pos:"noun", gender:null,
     note:"사회 (society) + 생활 (life).\nLife as a member of society, often meaning work life.",
     example:"A: 사회생활이 쉽지 않아.\nB: 사람들과의 관계가 제일 어렵지.",
     exampleSrc:"A: Social life is not easy.\nB: Relationships with people are the hardest part.",
     funFact:"In Korea, 사회생활 usually implies navigating workplace hierarchies and maintaining relationships."},

    {type:"teach", trg:"사회자", src:"host, MC, moderator", pos:"noun", gender:null,
     note:"사회 (society/proceedings) + 자 (person).\nThe person who leads an event or show.",
     example:"A: 사회자가 분위기를 잘 이끌었어.\nB: 경험이 많은 사람인 것 같아.",
     exampleSrc:"A: The MC led the atmosphere well.\nB: They seem to be someone with a lot of experience.",
     funFact:"Korean TV shows have professional 사회자 who are celebrities in their own right, known as MCs."},

    {type:"teach", trg:"사회주의", src:"socialism", pos:"noun", gender:null,
     note:"Sino-Korean. 社會主義.\nA political and economic ideology.",
     example:"A: 사회주의와 자본주의의 차이를 알아?\nB: 경제 체제가 근본적으로 달라.",
     exampleSrc:"A: Do you know the difference between socialism and capitalism?\nB: The economic systems are fundamentally different.",
     funFact:"Due to the Korean division, 사회주의 is a sensitive topic. South Korea is firmly capitalist (자본주의)."},

    {type:"teach", trg:"사회학", src:"sociology", pos:"noun", gender:null,
     note:"사회 (society) + 학 (study).\nThe academic study of society.",
     example:"A: 대학에서 사회학을 전공하고 있어.\nB: 졸업 후에 뭘 하고 싶어?",
     exampleSrc:"A: I am majoring in sociology at university.\nB: What do you want to do after graduation?",
     funFact:"사회학 is a popular major in Korean universities. It pairs well with journalism, policy, and social work."},

    {type:"teach", trg:"사흘", src:"three days", pos:"noun", gender:null,
     note:"Native Korean number word.\nA period of three days.",
     example:"A: 사흘 동안 비가 계속 왔어.\nB: 그래서 길이 다 젖었구나.",
     exampleSrc:"A: It rained continuously for three days.\nB: So that is why the roads are all wet.",
     funFact:"Korean has native day-counting: 하루 (1 day), 이틀 (2 days), 사흘 (3 days), 나흘 (4 days), 닷새 (5 days)."},

    {type:"mc",
     q:"순 한국어로 '3일'을 의미하는 단어는?",
     opts:["사흘","삼일","세날","셋째"],
     ans:"사흘",
     hint:"Korean has native words for counting days. Which one specifically means three days?"},

    {type:"teach", trg:"산길", src:"mountain path, trail", pos:"noun", gender:null,
     note:"산 (mountain) + 길 (road).\nA path through the mountains.",
     example:"A: 산길이 험해서 조심해야 해.\nB: 등산화를 신고 가야겠다.",
     exampleSrc:"A: The mountain path is rough so you need to be careful.\nB: I should wear hiking boots.",
     funFact:"Korea is 70% mountainous. 산길 hiking is the nation's most popular outdoor activity."},

    {type:"teach", trg:"산부인과", src:"obstetrics and gynecology", pos:"noun", gender:null,
     note:"산 (birth) + 부인 (woman) + 과 (department).\nMedical department for women's health and childbirth.",
     example:"A: 산부인과 예약을 해야 해.\nB: 어느 병원으로 갈 거야?",
     exampleSrc:"A: I need to make an appointment at OB/GYN.\nB: Which hospital are you going to?",
     funFact:"Korean medical departments all end in 과: 내과 (internal medicine), 외과 (surgery), 소아과 (pediatrics)."},

    {type:"teach", trg:"산속", src:"deep in the mountains", pos:"noun", gender:null,
     note:"산 (mountain) + 속 (inside).\nThe interior of mountain terrain.",
     example:"A: 산속에서 사는 건 어때?\nB: 조용하지만 외로울 수도 있어.",
     exampleSrc:"A: What is it like living deep in the mountains?\nB: It is quiet but can be lonely.",
     funFact:"Many Korean Buddhist temples are located 산속에 (deep in the mountains), following the tradition of mountain meditation."},

    {type:"teach", trg:"산업", src:"industry", pos:"noun", gender:null,
     note:"Sino-Korean. 産 (produce) + 業 (work).\nOrganized economic production.",
     example:"A: 한국의 주요 산업이 뭐야?\nB: 반도체, 자동차, 조선업이 유명해.",
     exampleSrc:"A: What are Korea's major industries?\nB: Semiconductors, automobiles, and shipbuilding are famous.",
     funFact:"Korea's 산업화 (industrialization) in the 1960s-80s transformed it from agrarian to high-tech in one generation."},

    {type:"teach", trg:"살림", src:"housekeeping, household management", pos:"noun", gender:null,
     note:"Native Korean. From 살다 (to live).\nManaging a household and its finances.",
     example:"A: 살림을 잘 하는 사람이 부러워.\nB: 경험이 쌓이면 누구나 할 수 있어.",
     exampleSrc:"A: I envy people who manage the household well.\nB: Anyone can do it with experience.",
     funFact:"살림살이 (household affairs) is an extended form. 살림을 차리다 means to set up a household (often after marriage)."},

    {type:"teach", trg:"살아가다", src:"to live on, to get by", pos:"verb", gender:null,
     note:"살다 (live) + 아가다 (keep going).\nTo continue living through life's challenges.",
     example:"A: 세상을 살아가는 게 쉽지 않아.\nB: 그래도 포기하면 안 되지.",
     exampleSrc:"A: Getting through life is not easy.\nB: But we must not give up.",
     funFact:"살아가다 has a philosophical nuance of ongoing journey, unlike 살다 which simply means 'to live.'"},

    {type:"teach", trg:"살아나다", src:"to come back to life, to revive", pos:"verb", gender:null,
     note:"살다 (live) + 아나다 (come out).\nReturning to life or recovering.",
     example:"A: 거의 죽을 뻔했는데 살아났어.\nB: 정말 다행이다.",
     exampleSrc:"A: I almost died but came back to life.\nB: That is truly a relief.",
     funFact:"Also used figuratively: 경기가 살아나다 (the economy revives), 기억이 살아나다 (memories come alive)."},

    {type:"teach", trg:"살아남다", src:"to survive", pos:"verb", gender:null,
     note:"살다 (live) + 아남다 (remain).\nTo stay alive through danger.",
     example:"A: 경쟁에서 살아남으려면 계속 발전해야 해.\nB: 맞아, 멈추면 뒤처져.",
     exampleSrc:"A: To survive the competition, you must keep developing.\nB: Right, if you stop, you fall behind.",
     funFact:"살아남다 is used both literally (surviving a disaster) and figuratively (surviving in business or life)."},

    {type:"teach", trg:"살아오다", src:"to have lived, to have been living", pos:"verb", gender:null,
     note:"살다 (live) + 아오다 (come).\nLiving up until now, looking back on one's life.",
     example:"A: 지금까지 살아오면서 가장 행복했던 때가 언제야?\nB: 아이들이 태어났을 때.",
     exampleSrc:"A: What was the happiest time in your life so far?\nB: When my children were born.",
     funFact:"살아오다 implies reflection on the past. 살아온 날들 (the days I have lived) is a common introspective phrase."},

    {type:"fb",
     s:"치열한 경쟁에서 {1} 회사만이 성공한다.",
     a:["살아남은"],
     opts:["살아남은","살아온","살아간","살아난"],
     hint:"Which compound verb means to survive, specifically used for enduring fierce competition?",
     sSrc:"Only companies that {1} fierce competition succeed."},

    {type:"match", pairs:[
      {trg:"사투리", src:"dialect"},
      {trg:"산업", src:"industry"},
      {trg:"살아남다", src:"to survive"},
      {trg:"사흘", src:"three days"}
    ]}
  ]
};
export default LESSON_9;
