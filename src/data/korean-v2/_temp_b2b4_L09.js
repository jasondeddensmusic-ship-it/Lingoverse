// Korean B2. Batch 4, Lesson 9: Gathering and Body
// Words: 모집, 모집하다, 모처럼, 모퉁이, 목걸이, 목록, 목숨, 목욕탕, 몰려들다, 몰려오다, 몸매, 몸무게, 몸살, 몸속, 몸짓, 몸통, 못되다, 못생기다, 못지않다, 묘사

const LESSON_9 = {
  id:"kov2_b2b4_l9", title:"모집과 몸", icon:"🏋️", xp:15, board:true,
  steps:[
    {type:"intro", title:"모집과 몸",
     desc:"Learn words about recruiting, body parts, and physical descriptions. This lesson covers body-related compounds and useful adjectives for describing people.",
     goals:["Master 20 words about recruiting, body, and descriptions","Understand 몸- compound nouns for body vocabulary","Use 못- prefix adjectives for negative descriptions"]},

    {type:"teach", trg:"모집", src:"recruitment, enrollment", pos:"noun", gender:null,
     note:"Sino-Korean. 募 (recruit) + 集 (gather).\nGathering people for a position or program.",
     example:"A: 신입 사원 모집 공고가 나왔어요.\nB: 마감일이 언제예요?",
     exampleSrc:"A: The new employee recruitment notice is out.\nB: When is the deadline?",
     funFact:"From Hanja 募集. Used widely: 학생 모집 (student enrollment), 회원 모집 (member recruitment)."},

    {type:"teach", trg:"모집하다", src:"to recruit, to enroll", pos:"verb", gender:null,
     note:"모집 (recruitment) + 하다 (to do).\nTo actively seek people to join.",
     example:"A: 동아리 회원을 모집하고 있어요.\nB: 어떤 동아리예요?",
     exampleSrc:"A: We are recruiting club members.\nB: What kind of club is it?",
     funFact:"Korean universities have 동아리 모집 (club recruitment) events at the start of each semester."},

    {type:"teach", trg:"모처럼", src:"for the first time in a while, after a long time", pos:"adv", gender:null,
     note:"Native Korean adverb.\nDoing something rare or long-awaited.",
     example:"A: 모처럼 가족이 다 모였네요.\nB: 네, 정말 오랜만이에요.",
     exampleSrc:"A: The whole family is gathered for the first time in a while.\nB: Yes, it has been a really long time.",
     funFact:"모처럼 implies something positive and long-awaited. It carries a sense of appreciation for the rare occasion."},

    {type:"teach", trg:"모퉁이", src:"corner (of a street)", pos:"noun", gender:null,
     note:"Native Korean word.\nWhere two streets or walls meet.",
     example:"A: 그 카페는 모퉁이에 있어요.\nB: 아, 코너에 있는 그 카페요?",
     exampleSrc:"A: That cafe is on the corner.\nB: Oh, the one on the corner?",
     funFact:"모퉁이를 돌다 (to turn a corner) is both literal and figurative: life taking an unexpected turn."},

    {type:"teach", trg:"목걸이", src:"necklace", pos:"noun", gender:null,
     note:"목 (neck) + 걸이 (hanger).\nJewelry that hangs around the neck.",
     example:"A: 예쁜 목걸이를 하고 있네!\nB: 생일 선물로 받았어.",
     exampleSrc:"A: You are wearing a pretty necklace!\nB: I received it as a birthday gift.",
     funFact:"The -걸이 suffix means 'thing that hangs': 옷걸이 (clothes hanger), 열쇠걸이 (key holder)."},

    {type:"mc",
     q:"'모처럼'은 어떤 상황에서 쓰나요?",
     opts:["오랜만에 하는 일에 대해","매일 하는 일에 대해","급하게 하는 일에 대해","실수로 하는 일에 대해"],
     ans:"오랜만에 하는 일에 대해",
     hint:"This adverb expresses appreciation for something that happens rarely or after a long wait."},

    {type:"teach", trg:"목록", src:"list, catalog", pos:"noun", gender:null,
     note:"Sino-Korean. 目 (eye/item) + 錄 (record).\nAn organized list of items.",
     example:"A: 장보기 목록을 만들었어?\nB: 응, 10가지 적어 놨어.",
     exampleSrc:"A: Did you make a shopping list?\nB: Yes, I wrote down 10 things.",
     funFact:"From Hanja 目錄. 위시리스트 (wish list) is also used, but 목록 is the standard Korean term."},

    {type:"teach", trg:"목숨", src:"life (as in life and death)", pos:"noun", gender:null,
     note:"목 (neck/life) + 숨 (breath).\nOne's life, especially in dangerous contexts.",
     example:"A: 소방관이 목숨을 걸고 사람을 구했어요.\nB: 정말 영웅이에요.",
     exampleSrc:"A: The firefighter risked their life to save someone.\nB: They are a true hero.",
     funFact:"목숨을 걸다 (to risk one's life) is a powerful expression. 생명 is the neutral/scientific word for life."},

    {type:"teach", trg:"목욕탕", src:"bathhouse, public bath", pos:"noun", gender:null,
     note:"Sino-Korean. 沐浴 (bathe) + 湯 (hot water).\nA public bathing facility.",
     example:"A: 한국 목욕탕에 가 봤어?\nB: 응, 찜질방도 같이 있더라.",
     exampleSrc:"A: Have you been to a Korean bathhouse?\nB: Yes, it had a jjimjilbang (sauna) too.",
     funFact:"Korean 목욕탕 culture includes scrubbing (때밀이), cold plunge pools, and communal relaxation. A social experience."},

    {type:"teach", trg:"몰려들다", src:"to rush in, to flock to", pos:"verb", gender:null,
     note:"몰리다 (be driven) + 들다 (enter).\nMany people or things rushing into a place.",
     example:"A: 세일 소식에 손님이 몰려들었어요.\nB: 줄이 엄청 길겠네요.",
     exampleSrc:"A: Customers flocked in at the sale news.\nB: The line must be very long.",
     funFact:"몰려들다 implies an inward rush. Compare: 몰려오다 (rush toward the speaker), 몰려가다 (rush away)."},

    {type:"teach", trg:"몰려오다", src:"to come rushing, to surge toward", pos:"verb", gender:null,
     note:"몰리다 (be driven) + 오다 (come).\nThings or people surging toward the speaker.",
     example:"A: 파도가 해변으로 몰려오고 있어!\nB: 조심해, 물러나자.",
     exampleSrc:"A: Waves are surging toward the beach!\nB: Careful, let us step back.",
     funFact:"Also used for emotions: 슬픔이 몰려오다 (sadness comes rushing in), 피로가 몰려오다 (fatigue washes over)."},

    {type:"fb",
     s:"소방관이 {1}을 걸고 화재 현장에 들어갔다.",
     a:["목숨"],
     opts:["목숨","목록","목걸이","목욕탕"],
     hint:"This compound noun literally means 'neck-breath' and refers to one's life in dangerous situations.",
     sSrc:"The firefighter risked their {1} and entered the fire scene."},

    {type:"teach", trg:"몸매", src:"body figure, physique", pos:"noun", gender:null,
     note:"몸 (body) + 매 (appearance/shape).\nThe overall shape of one's body.",
     example:"A: 운동을 시작한 후 몸매가 좋아졌어.\nB: 열심히 한 보람이 있네!",
     exampleSrc:"A: My figure has improved since I started exercising.\nB: Your hard work paid off!",
     funFact:"Korean media frequently discusses 몸매, though attitudes are shifting toward body positivity (몸 긍정주의)."},

    {type:"teach", trg:"몸무게", src:"body weight", pos:"noun", gender:null,
     note:"몸 (body) + 무게 (weight).\nHow much a person weighs.",
     example:"A: 요즘 몸무게가 좀 늘었어.\nB: 운동이랑 식단 관리를 해 봐.",
     exampleSrc:"A: I have gained some weight recently.\nB: Try exercising and watching your diet.",
     funFact:"Korean uses kilograms: 몸무게가 60킬로 (weighs 60 kg). Asking 몸무게 directly can be considered rude."},

    {type:"teach", trg:"몸살", src:"body ache (from overwork/cold)", pos:"noun", gender:null,
     note:"몸 (body) + 살 (ache).\nAll-over body ache, often before getting sick.",
     example:"A: 몸살이 나서 오늘 쉬어야 할 것 같아.\nB: 푹 쉬고 약 먹어.",
     exampleSrc:"A: I have body aches so I think I need to rest today.\nB: Rest well and take medicine.",
     funFact:"몸살 is a uniquely Korean concept: the whole-body ache that signals overwork or an incoming cold."},

    {type:"teach", trg:"몸속", src:"inside the body", pos:"noun", gender:null,
     note:"몸 (body) + 속 (inside).\nThe internal part of the body.",
     example:"A: 몸속에 독소가 쌓이면 안 좋아요.\nB: 물을 많이 마시면 도움이 돼요.",
     exampleSrc:"A: It is not good when toxins build up inside the body.\nB: Drinking a lot of water helps.",
     funFact:"속 (inside) attaches to many nouns: 마음속 (inside the heart), 가방 속 (inside the bag), 꿈속 (inside a dream)."},

    {type:"teach", trg:"몸짓", src:"gesture, body movement", pos:"noun", gender:null,
     note:"몸 (body) + 짓 (action/gesture).\nPhysical movements to express meaning.",
     example:"A: 말이 안 통해서 몸짓으로 설명했어.\nB: 그래도 의사소통이 됐어?",
     exampleSrc:"A: We could not understand each other, so I explained with gestures.\nB: Were you still able to communicate?",
     funFact:"The -짓 suffix describes actions: 손짓 (hand gesture), 눈짓 (eye signal), 헛짓 (useless action)."},

    {type:"teach", trg:"몸통", src:"torso, trunk of the body", pos:"noun", gender:null,
     note:"몸 (body) + 통 (tube/main part).\nThe main part of the body excluding limbs.",
     example:"A: 몸통 운동을 하면 자세가 좋아져요.\nB: 플랭크를 해 볼까요?",
     exampleSrc:"A: Torso exercises improve your posture.\nB: Shall we try planks?",
     funFact:"통 means 'main body': 나무통 (tree trunk), 비행기 몸통 (airplane fuselage)."},

    {type:"mc",
     q:"'몸살'은 어떤 상태를 말하나요?",
     opts:["배가 아픈 것","과로나 감기 전에 오는 전신 통증","운동 후 근육통","머리가 아픈 것"],
     ans:"과로나 감기 전에 오는 전신 통증",
     hint:"This uniquely Korean concept describes all-over body aches from overwork or an oncoming cold."},

    {type:"teach", trg:"못되다", src:"to be mean, to be wicked", pos:"adj", gender:null,
     note:"못 (badly) + 되다 (become).\nHaving a bad character or disposition.",
     example:"A: 저 사람은 정말 못됐어.\nB: 왜? 무슨 일 있었어?",
     exampleSrc:"A: That person is really mean.\nB: Why? What happened?",
     funFact:"못된 짓 (wicked deed) and 못된 버릇 (bad habit) are common expressions using this adjective."},

    {type:"teach", trg:"못생기다", src:"to be ugly, to be unattractive", pos:"adj", gender:null,
     note:"못 (badly) + 생기다 (to look/form).\nHaving an unattractive appearance.",
     example:"A: 자기가 못생겼다고 생각하지 마.\nB: 고마워, 좀 자신감이 생겨.",
     exampleSrc:"A: Do not think of yourself as ugly.\nB: Thank you, I feel a bit more confident.",
     funFact:"The opposite is 잘생기다 (to be handsome). Both are compound adjectives: 잘/못 + 생기다."},

    {type:"teach", trg:"못지않다", src:"to be just as good as, to be no less than", pos:"adj", gender:null,
     note:"못지않다 = not inferior to.\nExpresses equality or near-equality.",
     example:"A: 그녀의 실력은 전문가 못지않아요.\nB: 정말 대단하네요.",
     exampleSrc:"A: Her skills are no less than a professional's.\nB: That is really impressive.",
     funFact:"A useful B2 expression: X 못지않다 (is just as good as X). Very common in writing and formal speech."},

    {type:"teach", trg:"묘사", src:"description, depiction", pos:"noun", gender:null,
     note:"Sino-Korean. 描 (draw) + 寫 (copy).\nDescribing something vividly in words or art.",
     example:"A: 이 소설은 인물 묘사가 뛰어나요.\nB: 읽으면 눈앞에 그려져요.",
     exampleSrc:"A: This novel has excellent character descriptions.\nB: When you read it, you can picture them.",
     funFact:"From Hanja 描寫. Both characters relate to drawing/copying. 묘사하다 (to describe) is the verb form."},

    {type:"fb",
     s:"그의 실력은 전문가 {1}다.",
     a:["못지않"],
     opts:["못지않","못되","못생기","묘사하"],
     hint:"This expression means 'no less than' or 'just as good as,' expressing equality with something impressive.",
     sSrc:"His skills are {1} those of a professional."},

    {type:"match", pairs:[
      {trg:"모집하다", src:"to recruit"},
      {trg:"목숨", src:"life (endangered)"},
      {trg:"몸살", src:"body ache"},
      {trg:"묘사", src:"description"}
    ]}
  ]
};
export default LESSON_9;
