// Korean B1 Gap - Lesson 27: Village, Town and Infrastructure
const LESSON_27 = {
  id:"kov2_b1gap_l27", title:"마을과 도시 기반", icon:"🏘️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Village, Town and Infrastructure",
     desc:"From quiet countryside villages to busy downtown areas, learn how Koreans describe their communities, roads, buildings, and the systems that connect them.",
     goals:["Learn 20 words for communities and infrastructure","Describe urban and rural environments","Discuss transportation and energy topics"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"마을", src:"village", pos:"noun", gender:null,
     note:"Native Korean. A small community, smaller than a town. Often rural.",
     example:"A: 이 마을은 정말 조용하네요.\nB: 네, 인구가 100명도 안 돼요.\nA: 평화로워요.",
     exampleSrc:"A: This village is really quiet.\nB: Yes, the population is less than 100.\nA: It's peaceful.",
     funFact:"마을 carries warmth and nostalgia. Many Koreans have a 고향 마을 (hometown village) they return to during Chuseok. The word implies community bonds that cities lack."},

    {type:"teach", trg:"동네", src:"neighborhood", pos:"noun", gender:null,
     note:"Native Korean. Your local area, the neighborhood you live in.",
     example:"A: 이 동네에 빵집이 있어요?\nB: 네, 저기 골목 안에 있어요.\nA: 걸어갈 수 있어요?",
     exampleSrc:"A: Is there a bakery in this neighborhood?\nB: Yes, it's in the alley over there.\nA: Can I walk there?",
     funFact:"동네 is one of the most-used Korean location words. 우리 동네 (our neighborhood) is how Koreans describe where they live. 동네 한 바퀴 (one loop around the neighborhood) means a casual stroll."},

    {type:"teach", trg:"골목", src:"alley, narrow lane", pos:"noun", gender:null,
     note:"Native Korean. A narrow side street, typically in older neighborhoods.",
     example:"A: 이 골목에 맛집이 숨어 있어요.\nB: 정말요? 찾기 어렵겠네요.\nA: 그래서 더 특별해요.",
     exampleSrc:"A: A great restaurant is hidden in this alley.\nB: Really? It must be hard to find.\nA: That's what makes it more special.",
     funFact:"골목길 (alley road) culture is huge in Korea. TV shows like 백종원의 골목식당 (Baek Jongwon's Alley Restaurant) celebrate hidden gems in narrow streets. Old 골목 areas are now trendy tourist spots."},

    {type:"teach", trg:"시골", src:"countryside, rural area", pos:"noun", gender:null,
     note:"Sino-Korean origin but feels native. The opposite of city life.",
     example:"A: 시골에 가면 공기가 좋아요.\nB: 맞아요, 도시보다 훨씬 맑아요.\nA: 은퇴하면 시골에 살고 싶어요.",
     exampleSrc:"A: The air is good in the countryside.\nB: Right, it's much cleaner than the city.\nA: When I retire, I want to live in the countryside.",
     funFact:"시골 carries both positive (fresh air, nature) and negative (boring, inconvenient) connotations depending on context. 촌스럽다 (country bumpkin-ish) derives from 촌 (村), the hanja version."},

    {type:"teach", trg:"시내", src:"downtown, city center", pos:"noun", gender:null,
     note:"Sino-Korean: 市 (city) + 內 (inside). The central commercial area of a city.",
     example:"A: 시내에 나가서 쇼핑할까요?\nB: 좋아요, 버스로 갈까요?\nA: 네, 20분이면 돼요.",
     exampleSrc:"A: Shall we go downtown and shop?\nB: Sure, shall we take the bus?\nA: Yes, it only takes 20 minutes.",
     funFact:"시내버스 (city bus) is the standard urban bus. 시내 vs. 시외: 시내 is inside the city, 시외 (市外) is outside it. The 시외버스 (intercity bus) connects cities across Korea."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"도시의 반대 개념으로, 공기가 맑고 조용한 곳은?",
     opts:["시골","시내","동네","골목"],
     ans:"시골",
     hint:"This word describes the rural area outside cities, where nature is closer and life is quieter."},

    {type:"fb",
     s:"이 {1}에 숨은 맛집이 있대요.",
     a:["골목"],
     opts:["골목","시골","마을","시내"],
     hint:"A narrow side street in an older neighborhood, where hidden gems are often found.",
     sSrc:"They say there's a hidden restaurant in this {1}."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"도로", src:"road, highway", pos:"noun", gender:null,
     note:"Sino-Korean: 道 (way) + 路 (road). Formal word for paved roads and highways.",
     example:"A: 이 도로가 부산까지 이어져요.\nB: 고속도로예요?\nA: 아니요, 일반 도로예요.",
     exampleSrc:"A: This road leads all the way to Busan.\nB: Is it a highway?\nA: No, it's a regular road.",
     funFact:"고속도로 (高速道路) means expressway/highway. Korea's first highway, the 경부고속도로 (Gyeongbu Expressway), connected Seoul to Busan in 1970 and symbolized Korea's rapid industrialization."},

    {type:"teach", trg:"공사", src:"construction, building work", pos:"noun", gender:null,
     note:"Sino-Korean: 工 (work) + 事 (affair). Construction or renovation projects.",
     example:"A: 앞에 공사 중이라 길이 막혀요.\nB: 돌아가야 하나요?\nA: 네, 다른 길로 가요.",
     exampleSrc:"A: The road ahead is blocked because of construction.\nB: Do we have to go around?\nA: Yes, let's take another way.",
     funFact:"공사 중 (under construction) is one of the most common signs in Korean cities. Seoul is always rebuilding. The joke: 서울은 영원히 공사 중 (Seoul is forever under construction)."},

    {type:"teach", trg:"건축", src:"architecture, building design", pos:"noun", gender:null,
     note:"Sino-Korean: 建 (build) + 築 (construct). The art and practice of designing buildings.",
     example:"A: 한국의 전통 건축이 아름다워요.\nB: 맞아요, 한옥이 특히 좋아요.\nA: 경복궁 건축이 최고예요.",
     exampleSrc:"A: Korean traditional architecture is beautiful.\nB: Right, hanok houses are especially nice.\nA: Gyeongbokgung's architecture is the best.",
     funFact:"건축가 (architect) and 건축물 (building/structure) are related compounds. Korean traditional architecture (한옥 건축) emphasizes harmony with nature, using wood and avoiding nails."},

    {type:"teach", trg:"공장", src:"factory", pos:"noun", gender:null,
     note:"Sino-Korean: 工 (work) + 場 (place). A manufacturing facility.",
     example:"A: 이 공장에서 자동차를 만들어요.\nB: 하루에 몇 대 만들어요?\nA: 약 500대요.",
     exampleSrc:"A: They make cars in this factory.\nB: How many per day?\nA: About 500.",
     funFact:"Korea's industrial rise was built on 공장: Hyundai, Samsung, and LG all started with factories. 공장 지대 (factory zone/industrial area) transformed Korean cities in the 1960s-80s."},

    {type:"teach", trg:"신호", src:"signal, traffic light", pos:"noun", gender:null,
     note:"Sino-Korean: 信 (trust) + 號 (sign). A signal, often referring to traffic lights.",
     example:"A: 신호가 빨간색이에요. 기다리세요.\nB: 네, 초록불 되면 건너요.\nA: 안전이 제일 중요해요.",
     exampleSrc:"A: The signal is red. Wait.\nB: Okay, we'll cross when it turns green.\nA: Safety is the most important thing.",
     funFact:"신호등 (signal light) is the full word for traffic light. 신호 위반 (signal violation) is running a red light. In Korean driving culture, 빨간 신호 (red signal) is taken very seriously."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"도로", src:"road, highway"},
      {trg:"공사", src:"construction"},
      {trg:"건축", src:"architecture"},
      {trg:"공장", src:"factory"}
    ]},

    {type:"fb",
     s:"{1}가 빨간색일 때 건너면 안 돼요.",
     a:["신호"],
     opts:["신호","도로","공사","속도"],
     hint:"The Sino-Korean word for a signal or traffic light that tells you when to stop or go.",
     sSrc:"You must not cross when the {1} is red."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"승용차", src:"passenger car, sedan", pos:"noun", gender:null,
     note:"Sino-Korean: 乘 (ride) + 用 (use) + 車 (vehicle). A car for personal use.",
     example:"A: 승용차로 출근해요?\nB: 아니요, 지하철이 더 빨라요.\nA: 서울은 그게 맞아요.",
     exampleSrc:"A: Do you commute by car?\nB: No, the subway is faster.\nA: That's true for Seoul.",
     funFact:"승용차 is the formal/official term. In daily speech, Koreans say 차 (car) or 자동차 (automobile). 승용차 appears on road signs, parking lots, and insurance documents."},

    {type:"teach", trg:"속도", src:"speed, velocity", pos:"noun", gender:null,
     note:"Sino-Korean: 速 (fast) + 度 (degree). How fast something moves.",
     example:"A: 여기서 속도 제한이 얼마예요?\nB: 시속 60킬로예요.\nA: 알겠어요, 천천히 갈게요.",
     exampleSrc:"A: What's the speed limit here?\nB: 60 kilometers per hour.\nA: Got it, I'll go slowly.",
     funFact:"속도위반 (speeding violation) is a common traffic offense. 고속 (high speed) appears in 고속도로 (highway) and 고속열차 (high-speed train, KTX). Korea loves speed."},

    {type:"teach", trg:"부근", src:"vicinity, nearby area", pos:"noun", gender:null,
     note:"Sino-Korean: 附 (attach) + 近 (near). The area close to a specific location.",
     example:"A: 역 부근에 식당이 있어요?\nB: 네, 역 부근에 많아요.\nA: 걸어갈 수 있어요?",
     exampleSrc:"A: Are there restaurants near the station?\nB: Yes, there are many near the station.\nA: Can I walk there?",
     funFact:"부근 is more formal than 근처 (nearby) or 가까이 (close by). You'll see 부근 on maps and official signs: 학교 부근 서행 (slow down near school). Daily speech prefers 근처."},

    {type:"teach", trg:"여기저기", src:"here and there, all around", pos:"adv", gender:null,
     note:"Compound: 여기 (here) + 저기 (there). Looking or going to many places.",
     example:"A: 여기저기 돌아다녔어요?\nB: 네, 서울 여기저기 구경했어요.\nA: 어디가 가장 좋았어요?",
     exampleSrc:"A: Did you go around here and there?\nB: Yes, I sightseered all around Seoul.\nA: Where was the best?",
     funFact:"여기저기 is a lovely example of Korean paired compounds: 이것저것 (this and that), 이리저리 (this way and that), 여기저기 (here and there). They create a sense of scattered, casual movement."},

    {type:"teach", trg:"시설", src:"facility, establishment", pos:"noun", gender:null,
     note:"Sino-Korean: 施 (carry out) + 設 (establish). Infrastructure or equipped buildings.",
     example:"A: 이 호텔은 시설이 좋아요.\nB: 수영장도 있어요?\nA: 네, 운동 시설이 다 있어요.",
     exampleSrc:"A: This hotel has good facilities.\nB: Is there a pool too?\nA: Yes, it has all the fitness facilities.",
     funFact:"시설 is used broadly: 편의시설 (convenience facilities), 교육시설 (educational facilities), 의료시설 (medical facilities). Koreans rate places by their 시설 quality."},

    // --- Quiz batch 3 ---
    {type:"mc",
     q:"'역 부근에 가게가 많아요'에서 '부근'은?",
     opts:["역 반대편에","역 근처에","역 안에","역에서 먼 곳"],
     ans:"역 근처에",
     hint:"This Sino-Korean word means the area nearby or in the vicinity of something. Close, not far."},

    {type:"fb",
     s:"이 호텔은 {1}이 정말 좋아요.",
     a:["시설"],
     opts:["시설","속도","공사","건축"],
     hint:"The Sino-Korean word for the equipment and infrastructure of a building like a hotel or gym.",
     sSrc:"This hotel has really good {1}."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"농촌", src:"rural area, farming community", pos:"noun", gender:null,
     note:"Sino-Korean: 農 (farming) + 村 (village). Specifically an agricultural community.",
     example:"A: 농촌에 젊은 사람이 적어요.\nB: 맞아요, 다 도시로 가요.\nA: 농촌 문제가 심각해요.",
     exampleSrc:"A: There are few young people in rural areas.\nB: Right, they all go to the cities.\nA: The rural area problem is serious.",
     funFact:"농촌 vs. 시골: 농촌 emphasizes the farming aspect (agricultural community), while 시골 is broader (any countryside). 농촌 인구 감소 (rural population decline) is a major Korean social issue."},

    {type:"teach", trg:"농사", src:"farming, agriculture (activity)", pos:"noun", gender:null,
     note:"Sino-Korean: 農 (farming) + 事 (affair). The act of farming crops.",
     example:"A: 올해 농사가 잘 됐어요?\nB: 비가 많이 와서 힘들었어요.\nA: 내년에는 좋아지길 바라요.",
     exampleSrc:"A: Did the farming go well this year?\nB: It was tough because of too much rain.\nA: I hope next year will be better.",
     funFact:"농사짓다 (to do farming) is a very common verb phrase. 풍년 (bumper crop year) and 흉년 (poor harvest year) are old terms still used. Korean culture deeply respects farming traditions."},

    {type:"teach", trg:"농업", src:"agriculture (industry)", pos:"noun", gender:null,
     note:"Sino-Korean: 農 (farming) + 業 (industry). Agriculture as an economic sector.",
     example:"A: 한국의 농업이 발전하고 있어요.\nB: 스마트 농업이 인기예요.\nA: 기술이 많이 바뀌었네요.",
     exampleSrc:"A: Korea's agriculture is developing.\nB: Smart farming is popular.\nA: Technology has changed a lot.",
     funFact:"농업 vs. 농사: 농업 is the industry/sector (agriculture), 농사 is the hands-on activity (farming). News uses 농업, farmers use 농사. Related: 공업 (manufacturing), 상업 (commerce)."},

    {type:"teach", trg:"가스", src:"gas (fuel)", pos:"noun", gender:null,
     note:"Loanword from English 'gas.' Natural gas or fuel gas for cooking/heating.",
     example:"A: 가스 요금이 올랐어요.\nB: 겨울이라 난방비가 많이 나와요.\nA: 절약해야겠어요.",
     exampleSrc:"A: The gas bill went up.\nB: It's winter, so heating costs are high.\nA: We need to save.",
     funFact:"가스레인지 (gas range/stove) is standard in Korean kitchens. 가스비 (gas bill) is a regular household expense. In Korea, most apartment heating runs on natural gas through 도시가스 (city gas)."},

    {type:"teach", trg:"에너지", src:"energy", pos:"noun", gender:null,
     note:"Loanword from English 'energy.' Both physical energy and industrial power.",
     example:"A: 재생 에너지가 중요해요.\nB: 태양열 에너지를 써야 해요.\nA: 환경을 위해서 필요해요.",
     exampleSrc:"A: Renewable energy is important.\nB: We should use solar energy.\nA: It's necessary for the environment.",
     funFact:"에너지 절약 (energy saving) campaigns are common in Korea. Related terms: 에너지원 (energy source), 신재생에너지 (new renewable energy). Korea imports most of its energy, making this a key policy topic."},

    // --- Quiz batch 4 ---
    {type:"mc",
     q:"'농촌'과 '농사'와 '농업'에 공통으로 들어 있는 한자는?",
     opts:["業 (업)","事 (일)","農 (농)","村 (마을)"],
     ans:"農 (농)",
     hint:"All three words share a hanja character that relates to cultivating crops and working the land."},

    {type:"fb",
     s:"겨울에 {1} 요금이 많이 올라요.",
     a:["가스"],
     opts:["가스","에너지","농업","시설"],
     hint:"A loanword for the fuel used for cooking and heating in most Korean apartments.",
     sSrc:"The {1} bill goes up a lot in winter."},

    {type:"match", pairs:[
      {trg:"농촌", src:"rural farming area"},
      {trg:"농사", src:"farming (activity)"},
      {trg:"에너지", src:"energy"},
      {trg:"여기저기", src:"here and there"}
    ]}
  ]
};
export default LESSON_27;
