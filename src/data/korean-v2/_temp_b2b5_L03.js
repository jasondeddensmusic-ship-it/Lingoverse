// Korean B2. Batch 5, Lesson 3: Debt, Family, and Analysis
// Words: 부채, 부치다, 부친, 부탁, 부품, 부피, 부회장, 북, 북부, 분노, 분량, 분리, 분리되다, 분리하다, 분명하다, 분명해지다, 분석, 분야, 분주하다, 분포하다

const LESSON_3 = {
  id:"kov2_b2b5_l3", title:"분석과 분리", icon:"🔬", xp:15, board:true,
  steps:[
    {type:"intro", title:"분석과 분리",
     desc:"Learn words about debt, family titles, analysis, and separation. This lesson covers essential academic and workplace vocabulary used in formal contexts.",
     goals:["Master 20 words related to requests, analysis, and separation","Understand Sino-Korean compounds with 分 (divide/portion)","Use formal family and workplace titles"]},

    {type:"teach", trg:"부채", src:"debt, liability", pos:"noun", gender:null,
     note:"Sino-Korean. 負 (bear) + 債 (debt).\nMoney owed to others.",
     example:"A: 부채가 얼마나 있어?\nB: 은행 대출금이 좀 남아 있어.",
     exampleSrc:"A: How much debt do you have?\nB: I still have some bank loans remaining.",
     funFact:"부채 also means 'fan' (the handheld kind) with different Hanja (扇子). The context makes the meaning clear."},

    {type:"teach", trg:"부치다", src:"to send, to mail", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo dispatch something, especially mail or parcels.",
     example:"A: 소포를 부치러 우체국에 갈 거야.\nB: 나도 편지 하나 부쳐 줄래?",
     exampleSrc:"A: I am going to the post office to send a package.\nB: Can you also mail a letter for me?",
     funFact:"부치다 has many meanings: mail a letter, fry a pancake (전을 부치다), or bring up a topic (안건을 부치다)."},

    {type:"teach", trg:"부친", src:"father (formal)", pos:"noun", gender:null,
     note:"Sino-Korean. 父 (father) + 親 (parent).\nFormal term for one's father.",
     example:"A: 부친께서는 건강하시죠?\nB: 네, 감사합니다. 잘 계십니다.",
     exampleSrc:"A: Is your father in good health?\nB: Yes, thank you. He is doing well.",
     funFact:"Korean has many words for 'father' at different formality levels: 아빠 (casual), 아버지 (standard), 부친 (formal/written)."},

    {type:"teach", trg:"부탁", src:"request, favor", pos:"noun", gender:null,
     note:"Sino-Korean. 付 (entrust) + 託 (request).\nAsking someone for help.",
     example:"A: 부탁 하나만 해도 될까?\nB: 물론이지, 뭔데?",
     exampleSrc:"A: Can I ask you a favor?\nB: Of course, what is it?",
     funFact:"잘 부탁드립니다 (I humbly request your kindness) is said when meeting new colleagues or starting partnerships."},

    {type:"fb",
     s:"처음 뵙겠습니다. 잘 {1}.",
     a:["부탁드립니다"],
     opts:["부탁드립니다","부담합니다","부치겠습니다","분석합니다"],
     hint:"Which phrase completes the formal Korean greeting meaning 'please take care of me'?",
     sSrc:"Nice to meet you. Please {1}."},

    {type:"teach", trg:"부품", src:"component, part", pos:"noun", gender:null,
     note:"Sino-Korean. 部 (part) + 品 (goods).\nA piece of a larger machine or product.",
     example:"A: 이 부품이 고장 났어.\nB: 새 부품을 주문해야겠다.",
     exampleSrc:"A: This part is broken.\nB: We need to order a new part.",
     funFact:"Korea is a global leader in semiconductor 부품 (components). Samsung and SK Hynix dominate the market."},

    {type:"teach", trg:"부피", src:"volume, bulk", pos:"noun", gender:null,
     note:"Sino-Korean. 付 (attach) + 皮 (surface).\nThe three-dimensional space something occupies.",
     example:"A: 이 상자의 부피가 얼마나 돼?\nB: 가로 세로 높이를 재 봐야 해.",
     exampleSrc:"A: What is the volume of this box?\nB: We need to measure the width, length, and height.",
     funFact:"In science class, Korean students learn 부피 = 가로 x 세로 x 높이 (volume = width x length x height)."},

    {type:"teach", trg:"부회장", src:"vice president (of an organization)", pos:"noun", gender:null,
     note:"Sino-Korean. 副 (vice) + 會長 (president).\nSecond in command of a group.",
     example:"A: 부회장으로 선출되셨네요. 축하합니다.\nB: 감사합니다. 열심히 하겠습니다.",
     exampleSrc:"A: You were elected vice president. Congratulations.\nB: Thank you. I will work hard.",
     funFact:"In Korean conglomerates, 부회장 is an extremely powerful position, often held by family members of the founder."},

    {type:"teach", trg:"북", src:"drum", pos:"noun", gender:null,
     note:"Native Korean word.\nA percussion instrument.",
     example:"A: 북 소리가 정말 웅장하다.\nB: 전통 공연에서 들으니까 더 그렇지.",
     exampleSrc:"A: The drum sound is truly magnificent.\nB: It sounds even more so at a traditional performance.",
     funFact:"The Korean 북 (buk drum) is central to pungmul (풍물), traditional farmer's music and dance."},

    {type:"teach", trg:"북부", src:"northern part, the north", pos:"noun", gender:null,
     note:"Sino-Korean. 北 (north) + 部 (part).\nThe northern region of an area.",
     example:"A: 북부 지방은 겨울에 정말 추워.\nB: 영하 20도까지 내려간대.",
     exampleSrc:"A: The northern region is really cold in winter.\nB: I heard it drops to minus 20 degrees.",
     funFact:"Koreans use directional 부 words often: 북부, 남부, 동부, 서부 (north, south, east, west parts)."},

    {type:"teach", trg:"분노", src:"anger, fury, rage", pos:"noun", gender:null,
     note:"Sino-Korean. 忿 (anger) + 怒 (rage).\nIntense anger or wrath.",
     example:"A: 그 소식을 듣고 분노를 느꼈어.\nB: 누구나 화가 날 만한 상황이야.",
     exampleSrc:"A: I felt rage after hearing that news.\nB: It is a situation where anyone would be angry.",
     funFact:"분노 is stronger than 화 (anger). 분노 조절 장애 (anger management disorder) is a recognized condition in Korea."},

    {type:"teach", trg:"분량", src:"quantity, amount, portion", pos:"noun", gender:null,
     note:"Sino-Korean. 分 (divide) + 量 (measure).\nThe measured amount of something.",
     example:"A: 이번 과제의 분량이 얼마나 돼?\nB: A4 열 장 정도야.",
     exampleSrc:"A: How much is the volume of this assignment?\nB: About ten A4 pages.",
     funFact:"Korean drama scripts measure 분량 by episode. A standard episode is about 60 pages of script."},

    {type:"mc",
     q:"과제의 양을 물어볼 때 적절한 말은?",
     opts:["분량이 얼마나 돼?","분노가 얼마나 돼?","부피가 얼마나 돼?","분석이 얼마나 돼?"],
     ans:"분량이 얼마나 돼?",
     hint:"Which noun specifically refers to the quantity or amount of work or content?"},

    {type:"teach", trg:"분리", src:"separation, sorting", pos:"noun", gender:null,
     note:"Sino-Korean. 分 (divide) + 離 (separate).\nThe act of dividing things apart.",
     example:"A: 쓰레기 분리 잘 해야 해.\nB: 알아, 재활용은 따로 모을게.",
     exampleSrc:"A: You need to sort the trash properly.\nB: I know, I will collect recyclables separately.",
     funFact:"Korea has one of the world's strictest recycling systems. 분리수거 (waste sorting) is a daily routine."},

    {type:"teach", trg:"분리되다", src:"to be separated, to become divided", pos:"verb", gender:null,
     note:"분리 + 되다 (to become).\nPassive form of separation.",
     example:"A: 두 그룹으로 분리됐어.\nB: 왜 나눠진 거야?",
     exampleSrc:"A: They were separated into two groups.\nB: Why were they divided?",
     funFact:"분리되다 (passive) vs 분리하다 (active) is a key grammar pattern. The subject either receives or performs the action."},

    {type:"teach", trg:"분리하다", src:"to separate, to sort", pos:"verb", gender:null,
     note:"분리 + 하다 (to do).\nActively dividing or sorting things.",
     example:"A: 색깔별로 분리해 주세요.\nB: 네, 빨간색이랑 파란색으로 나눌게요.",
     exampleSrc:"A: Please sort them by color.\nB: Okay, I will divide them into red and blue.",
     funFact:"In recycling, Koreans 분리하다 plastic, paper, glass, and metal into separate bins every day."},

    {type:"teach", trg:"분명하다", src:"to be clear, to be obvious", pos:"adj", gender:null,
     note:"Sino-Korean. 分 (divide) + 明 (bright).\nSomething that is clearly distinguishable.",
     example:"A: 이건 분명한 실수야.\nB: 맞아, 누가 봐도 알 수 있어.",
     exampleSrc:"A: This is a clear mistake.\nB: Right, anyone can see it.",
     funFact:"분명히 (clearly, as adverb) is used to emphasize certainty: 분명히 말했잖아 (I clearly told you)."},

    {type:"teach", trg:"분명해지다", src:"to become clear", pos:"verb", gender:null,
     note:"분명하다 + 해지다 (to become).\nSomething gradually becoming obvious.",
     example:"A: 원인이 점점 분명해지고 있어.\nB: 조사가 진행될수록 그런 것 같아.",
     exampleSrc:"A: The cause is gradually becoming clear.\nB: It seems that way as the investigation progresses.",
     funFact:"The -해지다 pattern turns adjectives into 'become' verbs: 행복해지다 (become happy), 분명해지다 (become clear)."},

    {type:"teach", trg:"분석", src:"analysis", pos:"noun", gender:null,
     note:"Sino-Korean. 分 (divide) + 析 (separate).\nBreaking something down to understand it.",
     example:"A: 데이터 분석이 끝났어?\nB: 아직이요, 내일까지 마칠게요.",
     exampleSrc:"A: Is the data analysis finished?\nB: Not yet, I will finish it by tomorrow.",
     funFact:"분석 is one of the most-used Sino-Korean words in academic and business Korean."},

    {type:"teach", trg:"분야", src:"field, area of expertise", pos:"noun", gender:null,
     note:"Sino-Korean. 分 (divide) + 野 (field).\nA specialized domain or area.",
     example:"A: 어떤 분야에 관심이 있어?\nB: 인공지능 분야에 관심이 많아.",
     exampleSrc:"A: What field are you interested in?\nB: I am very interested in the AI field.",
     funFact:"In job postings, 분야 is used to specify the area: IT 분야, 의료 분야, 교육 분야."},

    {type:"teach", trg:"분주하다", src:"to be busy, to be bustling", pos:"adj", gender:null,
     note:"Sino-Korean. 奔 (run) + 走 (go).\nActively and restlessly busy.",
     example:"A: 명절 전에 시장이 분주하다.\nB: 다들 음식 재료를 사러 다니잖아.",
     exampleSrc:"A: The market is bustling before the holiday.\nB: Everyone is going around buying food ingredients.",
     funFact:"분주하다 implies visible, physical busyness with people moving about, unlike 바쁘다 which is general busy-ness."},

    {type:"teach", trg:"분포하다", src:"to be distributed, to be spread out", pos:"verb", gender:null,
     note:"Sino-Korean. 分 (divide) + 布 (spread).\nTo be scattered across an area.",
     example:"A: 이 식물은 남부 지역에 분포해 있어요.\nB: 북부에는 없는 건가요?",
     exampleSrc:"A: This plant is distributed in the southern region.\nB: Is it not found in the north?",
     funFact:"분포도 (distribution map) is commonly used in science and geography classes in Korean schools."},

    {type:"fb",
     s:"이 동물은 주로 아시아 전역에 {1} 있다.",
     a:["분포해"],
     opts:["분포해","분리해","분석해","분노해"],
     hint:"Which verb means to be spread out or distributed across a geographic area?",
     sSrc:"This animal is mainly {1} throughout Asia."},

    {type:"match", pairs:[
      {trg:"분석", src:"analysis"},
      {trg:"분야", src:"field"},
      {trg:"분리", src:"separation"},
      {trg:"분노", src:"anger"}
    ]}
  ]
};
export default LESSON_3;
