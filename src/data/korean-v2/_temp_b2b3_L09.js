// Korean B2. Batch 3, Lesson 9: Education System
// Words: 교시, 교양, 교외, 교육비, 교육자, 교장, 교재, 교직, 교체, 교통사고, 교포, 교환, 교환하다, 교훈, 구, 구경하다, 구르다, 구별, 구별되다, 구별하다

const LESSON_9 = {
  id:"kov2_b2b3_l9", title:"교육의 세계", icon:"📚", xp:15, board:true,
  steps:[
    {type:"intro", title:"교육의 세계",
     desc:"Dive deep into Korea's education system and learn to distinguish between similar concepts. These words are essential for academic and social discussions.",
     goals:["Master 20 words about education, exchange, and distinction","Understand the 교 (teach/exchange) word family","Use formal vocabulary for academic contexts"]},

    {type:"teach", trg:"교시", src:"class period (counter)", pos:"noun", gender:null,
     note:"Sino-Korean. 校 (school) + 時 (time).\nA bound noun counting school class periods.",
     example:"A: 지금 몇 교시야?\nB: 3교시, 수학 시간이야.",
     exampleSrc:"A: What period is it now?\nB: Third period, math class.",
     funFact:"From Hanja 校時. Korean schools typically have 6-7 교시 per day, each about 45-50 minutes long."},

    {type:"teach", trg:"교양", src:"culture, liberal arts, refinement", pos:"noun", gender:null,
     note:"Sino-Korean. 教 (teach) + 養 (nurture).\nGeneral knowledge and cultural sophistication.",
     example:"A: 대학에서 교양 수업을 많이 들어야 해.\nB: 전공 외에도 다양한 분야를 배우는 거지.",
     exampleSrc:"A: You need to take many liberal arts classes in college.\nB: It means learning various fields besides your major.",
     funFact:"From Hanja 教養. 교양 있는 사람 (a cultured person) is a common compliment in Korean society."},

    {type:"teach", trg:"교외", src:"suburbs, outskirts", pos:"noun", gender:null,
     note:"Sino-Korean. 郊 (outskirts) + 外 (outside).\nAreas outside the city center.",
     example:"A: 교외에 집을 사면 어때?\nB: 공기는 좋지만 출퇴근이 힘들어.",
     exampleSrc:"A: How about buying a house in the suburbs?\nB: The air is nice but commuting is hard.",
     funFact:"From Hanja 郊外. As Seoul prices soared, many families moved to 교외 cities like Pangyo and Ilsan."},

    {type:"teach", trg:"교육비", src:"education expenses", pos:"noun", gender:null,
     note:"교육 (education) + 비 (費, cost).\nMoney spent on education.",
     example:"A: 한국의 교육비가 너무 높아.\nB: 사교육비 때문에 부담이 크지.",
     exampleSrc:"A: Education costs in Korea are too high.\nB: The burden is heavy because of private education costs.",
     funFact:"Korea has one of the highest per-student education spending rates in the world, driven largely by private tutoring."},

    {type:"teach", trg:"교육자", src:"educator", pos:"noun", gender:null,
     note:"교육 (education) + 자 (者, person).\nA person dedicated to teaching and education.",
     example:"A: 훌륭한 교육자가 되고 싶어.\nB: 학생들을 사랑하는 마음이 중요해.",
     exampleSrc:"A: I want to become an excellent educator.\nB: Loving your students is what matters most.",
     funFact:"From Hanja 教育者. More formal than 교사 (teacher). Refers to anyone in the education field, not just classroom teachers."},

    {type:"mc",
     q:"다음 중 '교양'과 관련이 깊은 것은?",
     opts:["다양한 분야의 일반적 지식","특정 분야의 전문 기술","체육 활동","요리 방법"],
     ans:"다양한 분야의 일반적 지식",
     hint:"This word describes broad cultural knowledge and refined learning across many subjects."},

    {type:"teach", trg:"교장", src:"school principal", pos:"noun", gender:null,
     note:"Sino-Korean. 校 (school) + 長 (head/chief).\nThe head administrator of a school.",
     example:"A: 교장 선생님이 훈화 말씀을 하셨어.\nB: 무슨 내용이었어?",
     exampleSrc:"A: The principal gave a speech.\nB: What was it about?",
     funFact:"From Hanja 校長. Korean principals are addressed as 교장 선생님 with the double honorific."},

    {type:"teach", trg:"교재", src:"textbook, teaching materials", pos:"noun", gender:null,
     note:"Sino-Korean. 教 (teach) + 材 (material).\nBooks and materials used for instruction.",
     example:"A: 새 교재를 사야 해.\nB: 서점에 가서 같이 고르자.",
     exampleSrc:"A: I need to buy new textbooks.\nB: Let us go to the bookstore and pick them together.",
     funFact:"From Hanja 教材. Korean language learners worldwide use the Sogang and Yonsei 교재 series."},

    {type:"teach", trg:"교직", src:"teaching profession", pos:"noun", gender:null,
     note:"Sino-Korean. 教 (teach) + 職 (profession).\nThe career of being a teacher.",
     example:"A: 교직에 있으면 방학이 길어서 좋겠다.\nB: 대신 방학에도 연수가 많아.",
     exampleSrc:"A: Being in the teaching profession must be nice with long vacations.\nB: But there is a lot of training during vacations too.",
     funFact:"From Hanja 教職. In Korea, 교직 is considered a stable and respected profession, highly sought after."},

    {type:"teach", trg:"교체", src:"replacement, substitution", pos:"noun", gender:null,
     note:"Sino-Korean. 交 (exchange) + 替 (replace).\nSwapping one thing for another.",
     example:"A: 선수 교체가 있었어.\nB: 누가 들어왔는데?",
     exampleSrc:"A: There was a player substitution.\nB: Who came in?",
     funFact:"From Hanja 交替. Common in sports (선수 교체) and daily life (부품 교체 = parts replacement)."},

    {type:"fb",
     s:"축구 경기에서 후반에 선수 {1}가 이루어졌다.",
     a:["교체"],
     opts:["교체","교환","교훈","교양"],
     hint:"This word means swapping one player for another during a game.",
     sSrc:"A player {1} took place in the second half of the soccer match."},

    {type:"teach", trg:"교통사고", src:"traffic accident", pos:"noun", gender:null,
     note:"교통 (traffic) + 사고 (事故, accident).\nA collision or incident on the road.",
     example:"A: 교통사고가 나서 길이 막혀.\nB: 다친 사람은 없어?",
     exampleSrc:"A: The road is blocked because of a traffic accident.\nB: Was anyone hurt?",
     funFact:"Korea has invested heavily in reducing 교통사고 rates, including mandatory dashcams and strict DUI laws."},

    {type:"teach", trg:"교포", src:"overseas Korean, diaspora Korean", pos:"noun", gender:null,
     note:"Sino-Korean. 僑 (sojourn) + 胞 (compatriot).\nA Korean living permanently abroad.",
     example:"A: 미국에 교포가 많이 살아.\nB: LA 코리아타운이 유명하잖아.",
     exampleSrc:"A: Many overseas Koreans live in America.\nB: LA's Koreatown is famous.",
     funFact:"From Hanja 僑胞. About 7.5 million 재외 교포 (overseas Koreans) live worldwide, the largest communities in China, the US, and Japan."},

    {type:"teach", trg:"교환", src:"exchange, swap", pos:"noun", gender:null,
     note:"Sino-Korean. 交 (exchange) + 換 (change).\nThe act of giving and receiving mutually.",
     example:"A: 선물 교환을 하자.\nB: 좋아! 얼마짜리로 할까?",
     exampleSrc:"A: Let us do a gift exchange.\nB: Great! How much should we spend?",
     funFact:"From Hanja 交換. 교환 학생 (exchange student) programs are extremely popular among Korean university students."},

    {type:"teach", trg:"교환하다", src:"to exchange, to swap", pos:"verb", gender:null,
     note:"교환 (exchange) + 하다 (to do).\nTo give and receive mutually.",
     example:"A: 연락처를 교환할까요?\nB: 네, 번호 알려 주세요.",
     exampleSrc:"A: Shall we exchange contact information?\nB: Yes, please give me your number.",
     funFact:"In Korean business culture, 명함 교환 (business card exchange) follows strict etiquette: use both hands and read the card."},

    {type:"teach", trg:"교훈", src:"lesson, moral (of a story)", pos:"noun", gender:null,
     note:"Sino-Korean. 教 (teach) + 訓 (instruct).\nA valuable lesson learned from experience.",
     example:"A: 이 이야기의 교훈이 뭐야?\nB: 정직이 최선이라는 거야.",
     exampleSrc:"A: What is the moral of this story?\nB: That honesty is the best policy.",
     funFact:"From Hanja 教訓. Korean schools display their 교훈 (school motto) prominently, often emphasizing diligence and integrity."},

    {type:"mc",
     q:"'교포'가 가리키는 사람은?",
     opts:["한국에서 일하는 교사","해외에 사는 한국인","한국을 방문하는 외국인","한국에서 태어난 외국인"],
     ans:"해외에 사는 한국인",
     hint:"This word describes a Korean person who has settled and lives permanently in another country."},

    {type:"teach", trg:"구", src:"district, ward; sphere", pos:"noun", gender:null,
     note:"Sino-Korean. 區 (district).\nAn administrative division of a city.",
     example:"A: 너는 서울 어느 구에 살아?\nB: 강남구에 살아.",
     exampleSrc:"A: Which district of Seoul do you live in?\nB: I live in Gangnam-gu.",
     funFact:"From Hanja 區. Seoul has 25 구 (districts), each functioning as a semi-independent local government."},

    {type:"teach", trg:"구경하다", src:"to look around, to sightsee", pos:"verb", gender:null,
     note:"구경 (sightseeing) + 하다 (to do).\nTo observe things for enjoyment.",
     example:"A: 시장 구경하러 갈래?\nB: 좋아, 맛있는 것도 먹자.",
     exampleSrc:"A: Do you want to go look around the market?\nB: Sure, let us eat something delicious too.",
     funFact:"구경 originally meant 'watching from outside.' 구경꾼 (onlooker/bystander) is a common related word."},

    {type:"teach", trg:"구르다", src:"to roll", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo turn over while moving along a surface.",
     example:"A: 공이 언덕 아래로 굴러갔어.\nB: 빨리 가서 잡아!",
     exampleSrc:"A: The ball rolled down the hill.\nB: Go catch it quickly!",
     funFact:"Note the irregular conjugation: 구르다 becomes 굴러 (not 구러). The ㄹ changes in certain forms."},

    {type:"teach", trg:"구별", src:"distinction, differentiation", pos:"noun", gender:null,
     note:"Sino-Korean. 區 (divide) + 別 (separate).\nTelling things apart based on differences.",
     example:"A: 쌍둥이를 구별하기 어렵다.\nB: 옷 색깔로 구별할 수 있어.",
     exampleSrc:"A: It is hard to distinguish the twins.\nB: You can tell them apart by their clothing color.",
     funFact:"From Hanja 區別. 구별 vs. 구분: 구별 emphasizes recognizing differences, 구분 emphasizes categorizing or dividing."},

    {type:"teach", trg:"구별되다", src:"to be distinguished, to be differentiated", pos:"verb", gender:null,
     note:"구별 (distinction) + 되다 (passive).\nTo be recognizably different from something else.",
     example:"A: 이 두 제품은 쉽게 구별돼?\nB: 색깔이 달라서 구별이 돼.",
     exampleSrc:"A: Can these two products be easily distinguished?\nB: They can be told apart because the colors are different.",
     funFact:"The active/passive pair: 구별하다 (I distinguish) vs. 구별되다 (it is distinguished). Korean marks this clearly."},

    {type:"teach", trg:"구별하다", src:"to distinguish, to differentiate", pos:"verb", gender:null,
     note:"구별 (distinction) + 하다 (to do).\nTo actively tell things apart.",
     example:"A: 가짜와 진짜를 구별할 수 있어?\nB: 전문가만 구별할 수 있어.",
     exampleSrc:"A: Can you distinguish fake from real?\nB: Only an expert can tell them apart.",
     funFact:"TOPIK reading passages often test 구별하다 in context: distinguishing facts from opinions, or similar concepts."},

    {type:"match", pairs:[
      {trg:"교훈", src:"moral, lesson"},
      {trg:"교포", src:"overseas Korean"},
      {trg:"구별", src:"distinction"},
      {trg:"교재", src:"textbook"}
    ]}
  ]
};
export default LESSON_9;
