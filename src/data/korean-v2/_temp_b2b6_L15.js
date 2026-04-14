// Korean B2 — Batch 6, Lesson 15: Strictness and Bodies
// Words: 얼리다, 얼마간, 얼음, 얼핏, 엄격하다, 엄숙하다, 엄청나다, 업다, 업종, 업체, 엇갈리다, 엉덩이, 엉망, 엉터리, 엊그제, 엎드리다, 엔(bound_noun), 엔진, 엘리베이터, 여(noun)

const LESSON_15 = {
  id:"kov2_b2b6_l15", title:"엄격한 세상", icon:"🧊", xp:15, board:true,
  steps:[
    {type:"intro", title:"엄격한 세상",
     desc:"Learn words about strictness, business, and physical states. This lesson covers body-related vocabulary, industry terms, and adjectives for intensity.",
     goals:["Master 20 words about strictness, chaos, and industry","Understand Korean business vocabulary with 業 compounds","Use intensity adjectives and body-related words naturally"]},

    {type:"teach", trg:"얼리다", src:"to freeze (something), to make frozen", pos:"verb", gender:null,
     note:"얼다 (to freeze) + -리다 (causative).\nCausing something to become frozen.",
     example:"A: 남은 음식을 얼려 놓을까?\nB: 응, 냉동실에 넣어 줘.",
     exampleSrc:"A: Should I freeze the leftover food?\nB: Yes, put it in the freezer.",
     funFact:"Korean freezer culture is strong. 만두 (dumplings) and 밥 (rice) are commonly 얼리다 for later meals."},

    {type:"teach", trg:"얼마간", src:"for some time, for a while", pos:"noun", gender:null,
     note:"얼마 (how much) + 간 (period).\nAn unspecified but moderate duration.",
     example:"A: 얼마간 연락이 없었어.\nB: 바빴나 보다.",
     exampleSrc:"A: There was no contact for some time.\nB: They must have been busy.",
     funFact:"얼마간 is vaguer than 며칠 (a few days) or 몇 달 (a few months). It leaves the exact duration open."},

    {type:"teach", trg:"얼음", src:"ice", pos:"noun", gender:null,
     note:"얼다 (to freeze) + 음 (noun form).\nFrozen water.",
     example:"A: 얼음 좀 더 넣어 줄래?\nB: 여기, 많이 넣을게.",
     exampleSrc:"A: Can you add more ice?\nB: Here, I will put in a lot.",
     funFact:"아이스 아메리카노 is so popular that Korean cafes use massive amounts of 얼음. Koreans drink iced coffee even in winter."},

    {type:"teach", trg:"얼핏", src:"at a glance, briefly", pos:"adv", gender:null,
     note:"Native Korean adverb.\nCatching a brief, fleeting glimpse of something.",
     example:"A: 얼핏 보니까 괜찮은 것 같아.\nB: 자세히 한번 봐 봐.",
     exampleSrc:"A: At a glance it seems fine.\nB: Take a closer look.",
     funFact:"얼핏 보다 (to glance) implies you did not look carefully. It softens opinions: 얼핏 들었는데 (I overheard briefly)."},

    {type:"teach", trg:"엄격하다", src:"to be strict, to be rigorous", pos:"adj", gender:null,
     note:"Sino-Korean. 嚴 (severe) + 格 (standard) + 하다.\nMaintaining high, inflexible standards.",
     example:"A: 우리 아버지는 교육에 엄격하셔.\nB: 그래도 다 너를 위한 거야.",
     exampleSrc:"A: My father is strict about education.\nB: Still, it is all for your sake.",
     funFact:"Korean education culture is famous for 엄격한 부모 (strict parents). The 'tiger mom' stereotype has roots here."},

    {type:"teach", trg:"엄숙하다", src:"to be solemn, to be grave", pos:"adj", gender:null,
     note:"Sino-Korean. 嚴 (severe) + 肅 (reverent) + 하다.\nA serious, reverent atmosphere.",
     example:"A: 추모식 분위기가 매우 엄숙했어.\nB: 그래야 하지.",
     exampleSrc:"A: The atmosphere at the memorial was very solemn.\nB: It should be.",
     funFact:"엄숙한 분위기 (solemn atmosphere) is expected at Korean funerals and national ceremonies."},

    {type:"mc",
     q:"'엄청나다'는 어떤 뜻인가요?",
     opts:["매우 크거나 많다","엄격하다","엄숙하다","정확하다"],
     ans:"매우 크거나 많다",
     hint:"An adjective that describes something enormous or extraordinary in scale or degree."},

    {type:"teach", trg:"엄청나다", src:"to be enormous, to be tremendous", pos:"adj", gender:null,
     note:"Native Korean adjective.\nSomething overwhelmingly large or impressive in scale.",
     example:"A: 피해가 엄청나다고 해.\nB: 정말? 얼마나 심해?",
     exampleSrc:"A: They say the damage is enormous.\nB: Really? How bad is it?",
     funFact:"엄청나게 (adverb form) is one of the most overused intensifiers in casual Korean, like 'super' in English."},

    {type:"teach", trg:"업다", src:"to carry on one's back", pos:"verb", gender:null,
     note:"Native Korean verb.\nCarrying a person piggyback-style.",
     example:"A: 아이가 잠들어서 업고 왔어.\nB: 무겁지 않았어?",
     exampleSrc:"A: The child fell asleep so I carried them on my back.\nB: Was it not heavy?",
     funFact:"업다 is common in Korean family life. Grandparents 업다 grandchildren, and friends 업다 tired friends."},

    {type:"teach", trg:"업종", src:"type of business, industry sector", pos:"noun", gender:null,
     note:"Sino-Korean. 業 (business) + 種 (type).\nThe category of a business or industry.",
     example:"A: 어떤 업종에서 일하세요?\nB: IT 업종이요.",
     exampleSrc:"A: What industry do you work in?\nB: The IT industry.",
     funFact:"Korean job applications always ask for 업종. Common categories: 제조업 (manufacturing), 서비스업 (services), IT."},

    {type:"teach", trg:"업체", src:"company, business entity", pos:"noun", gender:null,
     note:"Sino-Korean. 業 (business) + 體 (body).\nA business organization or firm.",
     example:"A: 이사 업체를 알아보고 있어.\nB: 좋은 데 추천해 줄까?",
     exampleSrc:"A: I am looking into moving companies.\nB: Should I recommend a good one?",
     funFact:"업체 is more formal than 회사 (company). It is used in contracts and official documents."},

    {type:"teach", trg:"엇갈리다", src:"to cross paths, to diverge", pos:"verb", gender:null,
     note:"엇 (askew) + 갈리다 (to be split).\nPassing by each other or having conflicting views.",
     example:"A: 의견이 엇갈리고 있어.\nB: 다시 한번 논의해 보자.",
     exampleSrc:"A: Opinions are diverging.\nB: Let's discuss it once more.",
     funFact:"엇갈리다 beautifully describes near-misses: 길에서 엇갈렸다 (we crossed paths without meeting)."},

    {type:"fb",
     s:"두 전문가의 의견이 완전히 {1} 있다.",
     a:["엇갈리고"],
     opts:["엇갈리고","엉망이고","엄격하고","업고"],
     hint:"When two people's opinions go in opposite directions and do not align at all.",
     sSrc:"The opinions of the two experts are completely {1}."},

    {type:"teach", trg:"엉덩이", src:"buttocks, bottom", pos:"noun", gender:null,
     note:"Native Korean noun.\nThe rear part of the body used for sitting.",
     example:"A: 엉덩이가 아파, 너무 오래 앉았나 봐.\nB: 일어나서 좀 걸어.",
     exampleSrc:"A: My bottom hurts, I must have sat too long.\nB: Get up and walk around a bit.",
     funFact:"In Korean slapstick comedy, 엉덩이 humor is common and considered mild. Kids find it especially funny."},

    {type:"teach", trg:"엉망", src:"mess, disaster, shambles", pos:"noun", gender:null,
     note:"Native Korean noun.\nA state of total disorder or failure.",
     example:"A: 발표가 완전 엉망이었어.\nB: 다음에 더 잘하면 돼.",
     exampleSrc:"A: The presentation was a complete mess.\nB: You can do better next time.",
     funFact:"엉망진창 is the intensified form of 엉망. Adding 진창 (muddy mess) makes the disaster even more emphatic."},

    {type:"teach", trg:"엉터리", src:"nonsense, sham, fake", pos:"noun", gender:null,
     note:"Native Korean noun.\nSomething fraudulent or completely wrong.",
     example:"A: 그 정보는 엉터리야.\nB: 정말? 누가 그랬어?",
     exampleSrc:"A: That information is nonsense.\nB: Really? Who said that?",
     funFact:"엉터리 can describe both false information (엉터리 뉴스) and incompetent people (엉터리 의사). Strong criticism."},

    {type:"teach", trg:"엊그제", src:"the day before yesterday, just recently", pos:"adv", gender:null,
     note:"Native Korean adverb.\nVery recently, feels like just two days ago.",
     example:"A: 엊그제 만난 것 같은데 벌써 1년이야.\nB: 시간 참 빠르다.",
     exampleSrc:"A: It feels like we met just the other day, but it has already been a year.\nB: Time really flies.",
     funFact:"엊그제 literally means 'the day before yesterday' but is often used figuratively for 'just recently.'"},

    {type:"teach", trg:"엎드리다", src:"to lie face down, to prostrate", pos:"verb", gender:null,
     note:"Native Korean verb.\nLying with your face toward the ground.",
     example:"A: 피곤해서 침대에 엎드렸어.\nB: 좀 쉬어.",
     exampleSrc:"A: I was so tired I lay face down on the bed.\nB: Get some rest.",
     funFact:"엎드려 절하다 (to bow prostrate) is the deepest form of Korean bow, reserved for parents and ancestors."},

    {type:"teach", trg:"엔진", src:"engine", pos:"noun", gender:null,
     note:"Loanword from English 'engine.'\nA machine that converts energy into motion.",
     example:"A: 차 엔진에서 이상한 소리가 나.\nB: 정비소에 가 봐.",
     exampleSrc:"A: There is a strange sound coming from the car engine.\nB: Go to the repair shop.",
     funFact:"Hyundai and Kia develop their own 엔진 technology. Korea's automotive industry is the world's 5th largest."},

    {type:"teach", trg:"엘리베이터", src:"elevator", pos:"noun", gender:null,
     note:"Loanword from English 'elevator.'\nA lift for moving between floors.",
     example:"A: 엘리베이터가 고장 났어.\nB: 그러면 계단으로 가자.",
     exampleSrc:"A: The elevator is broken.\nB: Then let's take the stairs.",
     funFact:"Korean apartments are famous for high-rise living. Most have multiple 엘리베이터. Walking up is rare."},

    {type:"mc",
     q:"'발표가 엉망이었다'는 무슨 뜻인가요?",
     opts:["발표가 매우 안 좋았다","발표가 취소되었다","발표가 길었다","발표가 재미있었다"],
     ans:"발표가 매우 안 좋았다",
     hint:"엉망 describes a state of total mess or failure. If a presentation was 엉망, it went badly."},

    {type:"match", pairs:[
      {trg:"엄격하다", src:"to be strict"},
      {trg:"엄청나다", src:"to be enormous"},
      {trg:"엉망", src:"mess, disaster"},
      {trg:"엇갈리다", src:"to cross paths"}
    ]}
  ]
};

export default LESSON_15;
