// Korean A2 Gap - Lesson 2: Family, People & Social Roles
// Temp file - to be merged into unit by main session

const LESSON_2 = {
  id:"kov2_a2gap_l2", title:"가족과 사람들", icon:"👨‍👩‍👧", xp:15, board:true,
  steps:[
    {type:"intro", title:"가족과 사람들",
     desc:"Learn vocabulary for family relationships, social roles, and honorific forms for addressing people in Korean society.",
     goals:["Name family members and social roles","Use honorific titles for people","Talk about hometown and community"]},

    // --- Teach block 1: Family core ---
    {type:"teach", trg:"부모", src:"parents", pos:"noun", gender:null,
     note:"The pair of father and mother. Sino-Korean word.",
     example:"A: 부모가 어디 사세요?\nB: 서울에 사세요.",
     exampleSrc:"A: Where do your parents live?\nB: They live in Seoul.",
     funFact:"From Hanja 父母: 父 (father) + 母 (mother). The same characters appear in 부친 (father, formal) and 모친 (mother, formal)."},

    {type:"teach", trg:"부모님", src:"parents (honorific)", pos:"noun", gender:null,
     note:"Honorific form of 부모. The suffix 님 adds respect.\nAlways used when speaking about your own parents politely.",
     example:"A: 부모님은 건강하세요?\nB: 네, 감사합니다.",
     exampleSrc:"A: Are your parents healthy?\nB: Yes, thank you.",
     funFact:"The suffix 님 is one of the most important honorific markers. It attaches to roles: 선생님 (teacher), 사장님 (boss), 부모님 (parents). Dropping 님 can sound rude."},

    {type:"teach", trg:"부부", src:"married couple", pos:"noun", gender:null,
     note:"A husband and wife pair. Formal register.",
     example:"A: 저 부부는 언제 결혼했어요?\nB: 작년에 했어요.",
     exampleSrc:"A: When did that couple get married?\nB: They did last year.",
     funFact:"From Hanja 夫婦: 夫 (husband) + 婦 (wife). The word is symmetrical, pairing both partners equally. 부부 싸움 (couple's fight) is a common collocation."},

    {type:"teach", trg:"부인", src:"wife (formal)", pos:"noun", gender:null,
     note:"Formal word for someone's wife. Also a polite form of address.",
     example:"A: 사장님 부인이세요?\nB: 네, 만나서 반갑습니다.",
     exampleSrc:"A: Are you the president's wife?\nB: Yes, nice to meet you.",
     funFact:"From Hanja 夫人 (lady/madam). In formal Korean, you refer to another person's wife as 부인 but your own wife as 아내 or 집사람 (house person, humble)."},

    {type:"teach", trg:"아기", src:"baby", pos:"noun", gender:null,
     note:"A very young child, typically under 2 years old.",
     example:"A: 아기가 정말 귀여워요!\nB: 감사합니다. 여섯 달이에요.",
     exampleSrc:"A: The baby is really cute!\nB: Thank you. She is six months old.",
     funFact:"Pure Korean word. Korean has a rich age vocabulary: 아기 (baby), 어린이 (child), 청소년 (teenager), 어른 (adult). Each stage has its own social expectations."},

    // --- Quiz block 1 ---
    {type:"mc",
     q:"아버지와 어머니를 높여서 부르는 말은?",
     opts:["부모님","부부","부인","아기"],
     ans:"부모님",
     hint:"This word adds the honorific suffix to the basic word for 'parents.'"},

    {type:"fb",
     s:"저 {1}는 결혼한 지 10년이 됐어요.",
     a:["부부"],
     opts:["부부","부모","부인","아기"],
     hint:"This Sino-Korean word refers to a married husband-and-wife pair.",
     sSrc:"That {1} has been married for 10 years."},

    // --- Teach block 2: Social titles ---
    {type:"teach", trg:"어린이", src:"child", pos:"noun", gender:null,
     note:"A child, roughly ages 4 to 12. More formal than 아이.",
     example:"A: 어린이날에 뭐 해요?\nB: 공원에 가요.",
     exampleSrc:"A: What do you do on Children's Day?\nB: We go to the park.",
     funFact:"어린이날 (Children's Day, May 5) is a national holiday in Korea. It was established in 1923 by children's rights advocate Bang Jeong-hwan."},

    {type:"teach", trg:"아저씨", src:"uncle; mister", pos:"noun", gender:null,
     note:"Used for middle-aged men. Can mean uncle or a general title.",
     example:"A: 아저씨, 여기 물 좀 주세요.\nB: 네, 잠깐만요.",
     exampleSrc:"A: Mister, please give me some water.\nB: Yes, just a moment.",
     funFact:"Calling someone 아저씨 can be sensitive. Young men may feel offended because it implies they look middle-aged. Context and tone matter greatly."},

    {type:"teach", trg:"아주머니", src:"aunt; ma'am", pos:"noun", gender:null,
     note:"Polite form for a middle-aged woman. More respectful than 아줌마.",
     example:"A: 아주머니, 이거 얼마예요?\nB: 삼천 원이에요.",
     exampleSrc:"A: Ma'am, how much is this?\nB: It is 3,000 won.",
     funFact:"아주머니 is the full, polite form. In markets and casual settings, the shortened 아줌마 is more common but can sound slightly less respectful."},

    {type:"teach", trg:"아줌마", src:"ajumma (middle-aged woman, casual)", pos:"noun", gender:null,
     note:"Casual/familiar form of 아주머니. Very common in daily life.",
     example:"A: 아줌마, 김치 더 주세요!\nB: 여기요!",
     exampleSrc:"A: Ajumma, more kimchi please!\nB: Here you go!",
     funFact:"아줌마 is a cultural icon. The stereotype of a strong, no-nonsense Korean ajumma with a visor and floral pants is affectionately recognized worldwide."},

    {type:"teach", trg:"손님", src:"guest; customer", pos:"noun", gender:null,
     note:"Someone visiting or a customer at a business.\n손 (guest) + 님 (honorific).",
     example:"A: 손님, 뭐 드시겠어요?\nB: 커피 한 잔 주세요.",
     exampleSrc:"A: Customer, what would you like?\nB: One cup of coffee, please.",
     funFact:"In Korean service culture, the customer is literally honored: 손님 contains 님 (honorific suffix). '손님은 왕이다' (The customer is king) is a well-known saying."},

    {type:"teach", trg:"주인", src:"owner; host", pos:"noun", gender:null,
     note:"The owner of a place, business, or pet. Also means 'host.'",
     example:"A: 이 가게 주인이 누구예요?\nB: 저 아저씨예요.",
     exampleSrc:"A: Who is the owner of this store?\nB: It is that man over there.",
     funFact:"From Hanja 主人: 主 (master) + 人 (person). The compound 주인공 (主人公) means 'protagonist,' literally the 'master person' of a story."},

    // --- Quiz block 2 ---
    {type:"mc",
     q:"식당에서 음식을 주문하는 사람은?",
     opts:["손님","주인","아기","부인"],
     ans:"손님",
     hint:"This word contains an honorific suffix and means both 'guest' and 'customer.'"},

    {type:"match", pairs:[
      {trg:"아저씨", src:"uncle/mister"},
      {trg:"아주머니", src:"aunt/ma'am"},
      {trg:"아줌마", src:"ajumma (casual)"},
      {trg:"어린이", src:"child"}
    ]},

    // --- Teach block 3: Formal/honorific people + place ---
    {type:"teach", trg:"사장", src:"company president; boss", pos:"noun", gender:null,
     note:"Head of a company or business. Often used with 님: 사장님.",
     example:"A: 사장님이 어디 계세요?\nB: 회의 중이에요.",
     exampleSrc:"A: Where is the boss?\nB: He is in a meeting.",
     funFact:"From Hanja 社長: 社 (company) + 長 (chief). Korean has a detailed hierarchy of titles: 사원 (employee), 대리 (assistant manager), 과장, 부장, 사장."},

    {type:"teach", trg:"여러분", src:"everyone; ladies and gentlemen", pos:"pron", gender:null,
     note:"Polite plural 'you all.' Used to address a group respectfully.",
     example:"A: 여러분, 안녕하세요!\nB: 안녕하세요!",
     exampleSrc:"A: Everyone, hello!\nB: Hello!",
     funFact:"여러 (several/many) + 분 (person, honorific counter). Speeches, announcements, and YouTube videos in Korea almost always start with 여러분."},

    {type:"teach", trg:"그분", src:"that person (honorific)", pos:"pron", gender:null,
     note:"Honorific way to say 'that person.' 그 (that) + 분 (person, honorific).",
     example:"A: 그분이 누구세요?\nB: 우리 선생님이세요.",
     exampleSrc:"A: Who is that person?\nB: That is our teacher.",
     funFact:"Korean has three distance levels for 'that person': 그 사람 (neutral), 그분 (respectful), 그 놈 (rude/derogatory). Choosing the wrong one is a social mistake."},

    {type:"teach", trg:"이분", src:"this person (honorific)", pos:"pron", gender:null,
     note:"Honorific for 'this person.' 이 (this) + 분 (person, honorific).\nUsed when introducing someone present.",
     example:"A: 이분은 김 교수님이세요.\nB: 만나서 반갑습니다.",
     exampleSrc:"A: This is Professor Kim.\nB: Nice to meet you.",
     funFact:"When introducing people in Korean, using 이분 instead of 이 사람 shows you respect the person being introduced. It is a small word with big social impact."},

    {type:"teach", trg:"댁", src:"house (honorific); your home", pos:"noun", gender:null,
     note:"Honorific word for someone else's home. Also means 'you' (very formal).",
     example:"A: 댁이 어디세요?\nB: 강남에 있어요.",
     exampleSrc:"A: Where is your home?\nB: It is in Gangnam.",
     funFact:"댁 is the respectful word for 집 (house). Asking '댁이 어디세요?' is much more polite than '집이 어디예요?' Using 댁 shows you respect the listener."},

    // --- Quiz block 3 ---
    {type:"fb",
     s:"{1}, 안녕하세요! 오늘 수업을 시작하겠습니다.",
     a:["여러분"],
     opts:["여러분","그분","이분","손님"],
     hint:"A polite way to address a whole group, often used at the start of speeches.",
     sSrc:"{1}, hello! We will begin today's class."},

    {type:"mc",
     q:"누군가를 소개할 때 높여서 '이 사람' 대신 뭐라고 해요?",
     opts:["이분","그분","댁","여러분"],
     ans:"이분",
     hint:"Replace the neutral 사람 with the honorific counter for people when they are nearby."},

    // --- Teach block 4: Place & identity ---
    {type:"teach", trg:"우리나라", src:"our country", pos:"noun", gender:null,
     note:"How Koreans refer to Korea. Literally 'our country.'\nUsed with pride and affection.",
     example:"A: 우리나라 음식이 맛있어요.\nB: 맞아요, 정말 맛있어요.",
     exampleSrc:"A: Our country's food is delicious.\nB: That's right, it is really delicious.",
     funFact:"Koreans say 우리나라 (our country) rather than 한국 in casual speech. The 우리 (our/we) reflects Korean collectivist culture, where 'we' is preferred over 'I.'"},

    {type:"teach", trg:"고향", src:"hometown", pos:"noun", gender:null,
     note:"The place where you were born or grew up. An emotionally loaded word.",
     example:"A: 고향이 어디예요?\nB: 부산이에요.",
     exampleSrc:"A: Where is your hometown?\nB: It is Busan.",
     funFact:"From Hanja 故鄕: 故 (old/past) + 鄕 (village). Asking about someone's 고향 is one of the first things Koreans do when getting acquainted. It builds connection."},

    // --- Final quiz block ---
    {type:"mc",
     q:"한국 사람들이 자기 나라를 부르는 말은?",
     opts:["우리나라","고향","댁","나라"],
     ans:"우리나라",
     hint:"This phrase uses the collective 'we/our' instead of a formal country name."},

    {type:"match", pairs:[
      {trg:"사장", src:"company president"},
      {trg:"댁", src:"house (honorific)"},
      {trg:"고향", src:"hometown"},
      {trg:"우리나라", src:"our country"}
    ]}
  ]
};
export default LESSON_2;
