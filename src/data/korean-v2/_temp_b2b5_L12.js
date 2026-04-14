// Korean B2 — Batch 5, Lesson 12: Novelty, Production, and Living
// Words: 새롭다, 새소리, 새우, 새우다, 새해, 색다르다, 색연필, 생, 생기, 생명, 생물, 생방송, 생산, 생산되다, 생산력, 생산자, 생산하다, 생신, 생활비, 생활수준

const LESSON_12 = {
  id:"kov2_b2b5_l12", title:"새로운 생산", icon:"🌱", xp:15, board:true,
  steps:[
    {type:"intro", title:"새로운 생산",
     desc:"Learn vocabulary about novelty, nature, production, and living standards. This lesson covers essential words for discussing innovation, biology, and economics.",
     goals:["Master 20 words about newness, life, and production","Understand Sino-Korean compounds with 生 (life/produce)","Use production-related vocabulary for economic discussions"]},

    {type:"teach", trg:"새롭다", src:"to be new, to be novel", pos:"adj", gender:null,
     note:"Native Korean adjective.\nSomething fresh or previously unknown.",
     example:"A: 새로운 경험이 필요해.\nB: 여행을 가 보는 건 어때?",
     exampleSrc:"A: I need new experiences.\nB: How about going on a trip?",
     funFact:"새롭다 conjugates irregularly: 새로운 (adjective form), 새로워 (casual), 새롭습니다 (formal)."},

    {type:"teach", trg:"새소리", src:"birdsong, sound of birds", pos:"noun", gender:null,
     note:"새 (bird) + 소리 (sound).\nThe singing or chirping of birds.",
     example:"A: 아침에 새소리가 좋다.\nB: 자연 속에서 사는 느낌이야.",
     exampleSrc:"A: Birdsong in the morning is lovely.\nB: It feels like living in nature.",
     funFact:"Korean compound sounds: 새소리 (birdsong), 물소리 (water sound), 바람소리 (wind sound), 빗소리 (rain sound)."},

    {type:"teach", trg:"새우", src:"shrimp, prawn", pos:"noun", gender:null,
     note:"Native Korean word.\nA small crustacean used widely in Korean cuisine.",
     example:"A: 새우 알레르기가 있어?\nB: 아니, 새우를 아주 좋아해.",
     exampleSrc:"A: Do you have a shrimp allergy?\nB: No, I love shrimp.",
     funFact:"새우깡 (shrimp chips) is one of Korea's most iconic snacks, made by Nongshim since 1971."},

    {type:"teach", trg:"새우다", src:"to stay up all night", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo remain awake through the entire night.",
     example:"A: 시험 공부하느라 밤을 새웠어.\nB: 좀 자고 해야 효율이 좋아.",
     exampleSrc:"A: I stayed up all night studying for the exam.\nB: You should sleep some for better efficiency.",
     funFact:"밤을 새우다 and 밤을 새다 both mean 'to pull an all-nighter.' 새우다 emphasizes the deliberate effort."},

    {type:"teach", trg:"새해", src:"New Year", pos:"noun", gender:null,
     note:"새 (new) + 해 (year).\nThe beginning of a new calendar year.",
     example:"A: 새해 복 많이 받으세요!\nB: 감사합니다, 새해에 좋은 일만 있길 바라요.",
     exampleSrc:"A: Happy New Year!\nB: Thank you, I hope only good things happen in the new year.",
     funFact:"Korea celebrates both solar (1/1) and lunar New Year (설날). The lunar one is the bigger holiday by far."},

    {type:"fb",
     s:"{1} 복 많이 받으세요!",
     a:["새해"],
     opts:["새해","생신","생일","새벽"],
     hint:"Which compound word means New Year, used in the most common Korean New Year greeting?",
     sSrc:"Happy {1}!"},

    {type:"teach", trg:"색다르다", src:"to be unique, to be different", pos:"adj", gender:null,
     note:"색 (color) + 다르다 (different).\nLiterally 'different in color,' meaning novel or unusual.",
     example:"A: 이 식당은 메뉴가 색다르다.\nB: 한번 먹어 볼까?",
     exampleSrc:"A: This restaurant has a unique menu.\nB: Shall we try it?",
     funFact:"색다른 경험 (a unique experience) is a popular phrase in travel blogs and restaurant reviews."},

    {type:"teach", trg:"색연필", src:"colored pencil", pos:"noun", gender:null,
     note:"색 (color) + 연필 (pencil).\nPencils with colored leads for drawing.",
     example:"A: 색연필로 그림을 그렸어.\nB: 색감이 정말 예쁘다.",
     exampleSrc:"A: I drew a picture with colored pencils.\nB: The colors are really pretty.",
     funFact:"색연필 coloring books for adults became a huge trend in Korea as a stress relief tool."},

    {type:"teach", trg:"생", src:"raw, uncooked, life", pos:"noun", gender:null,
     note:"Sino-Korean. 生 (life/raw).\nAs a prefix, means raw or unprocessed.",
     example:"A: 생선회를 좋아해?\nB: 응, 생으로 먹는 게 맛있어.",
     exampleSrc:"A: Do you like raw fish?\nB: Yes, eating it raw is delicious.",
     funFact:"생맥주 (draft beer), 생방송 (live broadcast), 생크림 (fresh cream) all use 생 as a 'fresh/raw' prefix."},

    {type:"teach", trg:"생기", src:"vitality, liveliness", pos:"noun", gender:null,
     note:"Sino-Korean. 生 (life) + 氣 (energy).\nThe energy of being alive.",
     example:"A: 운동하니까 얼굴에 생기가 돌아왔어.\nB: 건강해 보여서 좋다.",
     exampleSrc:"A: After exercising, vitality has returned to your face.\nB: It is good that you look healthy.",
     funFact:"생기 있는 (lively, vibrant) is a common compliment. 생기가 넘치다 means overflowing with vitality."},

    {type:"teach", trg:"생명", src:"life, living thing", pos:"noun", gender:null,
     note:"Sino-Korean. 生 (life) + 命 (fate).\nThe state of being alive.",
     example:"A: 모든 생명은 소중해.\nB: 작은 곤충도 마찬가지야.",
     exampleSrc:"A: All life is precious.\nB: Even small insects are the same.",
     funFact:"생명 보험 (life insurance) and 생명 공학 (biotechnology) use this word in very different contexts."},

    {type:"teach", trg:"생물", src:"living organism, creature", pos:"noun", gender:null,
     note:"Sino-Korean. 生 (life) + 物 (thing).\nAny living thing.",
     example:"A: 바다에는 다양한 생물이 살아.\nB: 아직 발견되지 않은 생물도 많대.",
     exampleSrc:"A: Various organisms live in the ocean.\nB: They say there are many undiscovered creatures too.",
     funFact:"생물학 (biology) is one of the most popular science subjects in Korean high schools."},

    {type:"teach", trg:"생방송", src:"live broadcast", pos:"noun", gender:null,
     note:"생 (live/raw) + 방송 (broadcast).\nA broadcast happening in real time.",
     example:"A: 이 프로그램은 생방송이야?\nB: 응, 지금 실시간으로 하고 있어.",
     exampleSrc:"A: Is this program a live broadcast?\nB: Yes, it is happening in real time right now.",
     funFact:"K-pop live broadcasts on platforms like V LIVE and YouTube are called 생방송. Fans tune in worldwide."},

    {type:"mc",
     q:"실시간으로 진행되는 방송을 무엇이라고 하는가?",
     opts:["생방송","녹화 방송","재방송","특별 방송"],
     ans:"생방송",
     hint:"Which compound uses the prefix 생 (raw/live) to describe a broadcast happening right now?"},

    {type:"teach", trg:"생산", src:"production, manufacturing", pos:"noun", gender:null,
     note:"Sino-Korean. 生 (produce) + 産 (give birth).\nCreating goods or products.",
     example:"A: 이 공장에서 뭘 생산해?\nB: 자동차 부품을 생산하고 있어.",
     exampleSrc:"A: What does this factory produce?\nB: We are producing automobile parts.",
     funFact:"한국의 생산량 (Korea's production volume) in semiconductors, ships, and cars ranks among the world's top."},

    {type:"teach", trg:"생산되다", src:"to be produced, to be manufactured", pos:"verb", gender:null,
     note:"생산 + 되다 (passive).\nGoods being created or made.",
     example:"A: 이 제품은 어디서 생산돼?\nB: 한국에서 생산되고 있어.",
     exampleSrc:"A: Where is this product manufactured?\nB: It is being produced in Korea.",
     funFact:"Made in Korea (한국에서 생산된) products are globally associated with high quality in electronics and cars."},

    {type:"teach", trg:"생산력", src:"productive capacity, productivity", pos:"noun", gender:null,
     note:"생산 + 력 (power/force).\nThe ability or power to produce.",
     example:"A: 기술 발전으로 생산력이 크게 늘었어.\nB: 자동화 덕분이지.",
     exampleSrc:"A: Productivity has greatly increased with technological development.\nB: It is thanks to automation.",
     funFact:"생산력 vs 생산성 (productivity per unit). 생산력 is total capacity, 생산성 is efficiency."},

    {type:"teach", trg:"생산자", src:"producer, manufacturer", pos:"noun", gender:null,
     note:"생산 + 자 (person).\nThe entity that creates goods.",
     example:"A: 생산자와 소비자의 관계가 중요해.\nB: 서로 신뢰가 있어야 해.",
     exampleSrc:"A: The relationship between producer and consumer is important.\nB: There must be mutual trust.",
     funFact:"생산자 직거래 (direct producer trade) is growing in Korea, cutting out middlemen for fresher produce."},

    {type:"teach", trg:"생산하다", src:"to produce, to manufacture", pos:"verb", gender:null,
     note:"생산 + 하다.\nActively creating goods or products.",
     example:"A: 올해 목표는 10만 대를 생산하는 거야.\nB: 작년보다 20% 늘어난 거네.",
     exampleSrc:"A: This year's goal is to produce 100,000 units.\nB: That is a 20% increase from last year.",
     funFact:"대량 생산하다 (to mass-produce) was the foundation of Korea's rapid industrialization in the 1970s-80s."},

    {type:"teach", trg:"생신", src:"birthday (honorific)", pos:"noun", gender:null,
     note:"Sino-Korean. 生 (birth) + 辰 (time).\nRespectful word for an elder's birthday.",
     example:"A: 할머니 생신이 내일이야.\nB: 꽃을 사 드리자.",
     exampleSrc:"A: Grandmother's birthday is tomorrow.\nB: Let's buy her flowers.",
     funFact:"생일 is the standard word for birthday. 생신 is the honorific used for parents, grandparents, and elders."},

    {type:"teach", trg:"생활비", src:"living expenses, cost of living", pos:"noun", gender:null,
     note:"생활 (life) + 비 (cost).\nThe money needed for daily life.",
     example:"A: 한 달 생활비가 얼마나 돼?\nB: 집세 포함하면 200만 원 정도야.",
     exampleSrc:"A: How much are your monthly living expenses?\nB: Including rent, about 2 million won.",
     funFact:"Seoul's 생활비 is among the highest in Asia. Young Koreans often discuss 생활비 절약 (cutting living costs)."},

    {type:"teach", trg:"생활수준", src:"standard of living", pos:"noun", gender:null,
     note:"생활 (life) + 수준 (level).\nThe quality or level of everyday life.",
     example:"A: 한국의 생활수준이 많이 높아졌어.\nB: 30년 전과 비교하면 엄청나게 달라졌지.",
     exampleSrc:"A: Korea's standard of living has risen a lot.\nB: Compared to 30 years ago, it has changed enormously.",
     funFact:"Korea's 생활수준 rose dramatically from the 1980s to 2020s, reflected in HDI rankings."},

    {type:"fb",
     s:"서울의 {1}이 계속 올라서 젊은 사람들이 힘들어하고 있다.",
     a:["생활비"],
     opts:["생활비","생활수준","생산력","생명"],
     hint:"Which compound noun means living expenses, the cost burden that is making life hard for young people?",
     sSrc:"Young people are struggling because {1} in Seoul keeps rising."},

    {type:"match", pairs:[
      {trg:"생산", src:"production"},
      {trg:"생명", src:"life"},
      {trg:"생방송", src:"live broadcast"},
      {trg:"새롭다", src:"to be new"}
    ]}
  ]
};
export default LESSON_12;
