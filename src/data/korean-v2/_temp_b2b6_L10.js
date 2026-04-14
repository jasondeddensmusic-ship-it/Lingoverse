// Korean B2 — Batch 6, Lesson 10: Guidance and Safety
// Words: 아스팔트, 아아, 아울러, 아유, 아이(interj), 아이디어, 아하, 악기, 악몽, 악수, 안과, 안기다, 안내, 안내하다, 안부, 안심하다, 안정, 안정되다, 안주, 안쪽, 안팎 (note: 아무런 from prev list included)

const LESSON_10 = {
  id:"kov2_b2b6_l10", title:"안내와 안심", icon:"🏥", xp:15, board:true,
  steps:[
    {type:"intro", title:"안내와 안심",
     desc:"Learn vocabulary for guidance, safety, comfort, and medical care. This lesson covers Korean interjections and words built with 安 (peace/safety).",
     goals:["Master 20 words about safety, guidance, and emotional comfort","Understand Sino-Korean 安 compounds for peace and stability","Use common Korean interjections naturally"]},

    {type:"teach", trg:"아스팔트", src:"asphalt", pos:"noun", gender:null,
     note:"Loanword from English 'asphalt.'\nThe paved surface of roads.",
     example:"A: 아스팔트가 녹을 만큼 더워.\nB: 진짜, 밖에 나가기 싫다.",
     exampleSrc:"A: It is so hot the asphalt could melt.\nB: Seriously, I do not want to go outside.",
     funFact:"Korean summers get so hot that news reports show eggs frying on 아스팔트 as a heat index demonstration."},

    {type:"teach", trg:"아아", src:"ah, oh (exclamation)", pos:"intj", gender:null,
     note:"Korean exclamation of realization or emotion.\nExpresses sudden understanding or awe.",
     example:"A: 아아, 그래서 그랬구나!\nB: 이제 이해했어?",
     exampleSrc:"A: Ah, so that is why!\nB: Do you understand now?",
     funFact:"In Korean cafes, 아아 is slang for 아이스 아메리카노 (iced Americano), the most ordered drink in Korea."},

    {type:"teach", trg:"아울러", src:"in addition, along with", pos:"adv", gender:null,
     note:"Native Korean adverb.\nAdding another point to what was said, formal tone.",
     example:"A: 안전 교육을 실시하고 아울러 훈련도 해야 합니다.\nB: 알겠습니다.",
     exampleSrc:"A: We must conduct safety training and, in addition, do drills.\nB: Understood.",
     funFact:"아울러 is commonly used in formal speeches and news. It connects related points more elegantly than 그리고."},

    {type:"teach", trg:"아이디어", src:"idea", pos:"noun", gender:null,
     note:"Loanword from English 'idea.'\nA creative thought or concept.",
     example:"A: 좋은 아이디어가 있어!\nB: 뭔데? 말해 봐.",
     exampleSrc:"A: I have a good idea!\nB: What is it? Tell me.",
     funFact:"Korean startups love 아이디어 회의 (idea meetings). The Konglish phrase 브레인스토밍 (brainstorming) is also used."},

    {type:"teach", trg:"악기", src:"musical instrument", pos:"noun", gender:null,
     note:"Sino-Korean. 樂 (music) + 器 (tool/device).\nAny device for making music.",
     example:"A: 무슨 악기를 연주할 수 있어?\nB: 피아노랑 기타를 좀 쳐.",
     exampleSrc:"A: What musical instruments can you play?\nB: I play a bit of piano and guitar.",
     funFact:"가야금 (gayageum) and 대금 (daegeum) are traditional Korean 악기 with over a thousand years of history."},

    {type:"teach", trg:"악몽", src:"nightmare", pos:"noun", gender:null,
     note:"Sino-Korean. 惡 (evil) + 夢 (dream).\nA frightening or disturbing dream.",
     example:"A: 어젯밤에 악몽을 꿨어.\nB: 무슨 꿈이었어?",
     exampleSrc:"A: I had a nightmare last night.\nB: What was the dream about?",
     funFact:"Korean superstition says if you have 악몽, telling someone about it before noon prevents it from coming true."},

    {type:"mc",
     q:"'악몽'의 반대말은?",
     opts:["좋은 꿈","나쁜 꿈","현실","환상"],
     ans:"좋은 꿈",
     hint:"If a nightmare is a bad dream, what is the opposite? A good one."},

    {type:"teach", trg:"악수", src:"handshake", pos:"noun", gender:null,
     note:"Sino-Korean. 握 (grip) + 手 (hand).\nGrasping hands as a greeting or agreement.",
     example:"A: 만나서 반갑습니다.\nB: 저도요. (악수를 하며)",
     exampleSrc:"A: Nice to meet you.\nB: Likewise. (shaking hands)",
     funFact:"In Korean business culture, a handshake often accompanies a slight bow. Two hands show extra respect."},

    {type:"teach", trg:"안과", src:"ophthalmology, eye clinic", pos:"noun", gender:null,
     note:"Sino-Korean. 眼 (eye) + 科 (department).\nMedical department for eye care.",
     example:"A: 눈이 침침해서 안과에 가야 해.\nB: 예약하고 가는 게 좋아.",
     exampleSrc:"A: My eyes are blurry so I need to go to the eye clinic.\nB: It is better to make an appointment.",
     funFact:"Korean medical departments end in 과: 안과 (eye), 치과 (dental), 피부과 (dermatology), 내과 (internal medicine)."},

    {type:"teach", trg:"안기다", src:"to be held, to snuggle into", pos:"verb", gender:null,
     note:"안다 (to hold/hug) + -기다 (passive).\nBeing embraced or nestling into someone.",
     example:"A: 아이가 엄마 품에 안겼어.\nB: 정말 포근해 보인다.",
     exampleSrc:"A: The child snuggled into the mother's arms.\nB: That looks really warm and cozy.",
     funFact:"안기다 carries warmth and security. Korean literature uses 품에 안기다 (nestled in the bosom) as a comfort metaphor."},

    {type:"teach", trg:"안내", src:"guidance, information, announcement", pos:"noun", gender:null,
     note:"Sino-Korean. 案 (plan) + 内 (inside).\nLeading someone or providing information.",
     example:"A: 안내 방송 들었어?\nB: 응, 3번 출구로 가래.",
     exampleSrc:"A: Did you hear the announcement?\nB: Yes, they said to go to exit 3.",
     funFact:"Korean subway stations have multilingual 안내 방송 in Korean, English, Chinese, and Japanese."},

    {type:"teach", trg:"안내하다", src:"to guide, to direct", pos:"verb", gender:null,
     note:"안내 + 하다 (to do).\nLeading someone to a destination or providing directions.",
     example:"A: 제가 자리까지 안내해 드릴게요.\nB: 감사합니다.",
     exampleSrc:"A: I will guide you to your seat.\nB: Thank you.",
     funFact:"안내원 (guide) and 안내 데스크 (information desk) are found in every Korean museum and airport."},

    {type:"fb",
     s:"직원이 손님을 회의실로 {1} 드렸다.",
     a:["안내해"],
     opts:["안내해","안심해","안정해","안부해"],
     hint:"The act of leading or guiding someone to a specific location, like a meeting room.",
     sSrc:"The staff member {1} the guest to the conference room."},

    {type:"teach", trg:"안부", src:"regards, well-being inquiry", pos:"noun", gender:null,
     note:"Sino-Korean. 安 (peace) + 否 (whether).\nAsking if someone is at peace.",
     example:"A: 부모님께 안부 전해 주세요.\nB: 네, 감사합니다.",
     exampleSrc:"A: Please send my regards to your parents.\nB: Yes, thank you.",
     funFact:"안부를 묻다 (to ask after someone) is an important Korean social grace, showing you care about their wellbeing."},

    {type:"teach", trg:"안심하다", src:"to feel relieved, to be at ease", pos:"verb", gender:null,
     note:"Sino-Korean. 安 (peace) + 心 (heart) + 하다.\nYour heart finding peace.",
     example:"A: 검사 결과 정상이래요.\nB: 다행이다, 안심했어.",
     exampleSrc:"A: The test results are normal.\nB: Thank goodness, I am relieved.",
     funFact:"안심 also means a cut of beef (tenderloin) in Korean, a completely different word with the same pronunciation."},

    {type:"teach", trg:"안정", src:"stability, composure", pos:"noun", gender:null,
     note:"Sino-Korean. 安 (peace) + 定 (settle).\nA state of calm and steadiness.",
     example:"A: 마음의 안정이 필요해.\nB: 명상을 해 보는 건 어때?",
     exampleSrc:"A: I need peace of mind.\nB: How about trying meditation?",
     funFact:"경제 안정 (economic stability) and 정서 안정 (emotional stability) are key goals in Korean policy and wellness."},

    {type:"teach", trg:"안정되다", src:"to become stable, to settle down", pos:"verb", gender:null,
     note:"안정 + 되다 (become).\nReaching a state of stability.",
     example:"A: 이제 상황이 안정됐어?\nB: 응, 많이 나아졌어.",
     exampleSrc:"A: Has the situation stabilized now?\nB: Yes, it has improved a lot.",
     funFact:"After the 1997 financial crisis, 경제가 안정되다 (the economy stabilized) was the phrase Koreans longed to hear."},

    {type:"teach", trg:"안주", src:"snacks to go with drinks", pos:"noun", gender:null,
     note:"Sino-Korean. 按 (accompany) + 酒 (alcohol).\nFood eaten while drinking.",
     example:"A: 안주 뭐로 시킬까?\nB: 치킨이 좋겠다.",
     exampleSrc:"A: What should we order for drinking snacks?\nB: Chicken would be good.",
     funFact:"치맥 (chicken + beer) is Korea's most iconic 안주 combination. Every Korean pub has an 안주 menu."},

    {type:"teach", trg:"안쪽", src:"inside, inner part", pos:"noun", gender:null,
     note:"안 (inside) + 쪽 (side/direction).\nThe interior portion of something.",
     example:"A: 안쪽에 자리가 있어요.\nB: 감사합니다, 안쪽으로 갈게요.",
     exampleSrc:"A: There are seats on the inside.\nB: Thank you, I will go to the inside.",
     funFact:"Korean restaurants often have 안쪽 seating that is more private. Regulars know to ask for 안쪽 자리."},

    {type:"teach", trg:"안팎", src:"inside and outside, approximately", pos:"noun", gender:null,
     note:"안 (inside) + 팎/밖 (outside).\nBoth sides, or roughly around a number.",
     example:"A: 삼십 명 안팎이 참석했어요.\nB: 예상보다 많네요.",
     exampleSrc:"A: Approximately thirty people attended.\nB: That is more than expected.",
     funFact:"안팎 as 'approximately' works like 'around' in English: 열 명 안팎 (around ten people)."},

    {type:"mc",
     q:"'술과 함께 먹는 음식'을 뭐라고 하나요?",
     opts:["안주","간식","야식","디저트"],
     ans:"안주",
     hint:"The specific Korean word for food eaten as accompaniment to alcoholic drinks."},

    {type:"match", pairs:[
      {trg:"안내하다", src:"to guide"},
      {trg:"안심하다", src:"to feel relieved"},
      {trg:"안정되다", src:"to become stable"},
      {trg:"안부", src:"regards"}
    ]}
  ]
};

export default LESSON_10;
