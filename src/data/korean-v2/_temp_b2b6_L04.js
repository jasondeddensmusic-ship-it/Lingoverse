// Korean B2. Batch 6, Lesson 4: City Media and Food Basics
// Words: 시외, 시외버스, 시위, 시일, 시점, 시중, 시즌, 시집, 시집가다, 시청, 시청률, 시합, 식기, 식다, 식량, 식료품, 식빵, 식생활, 식욕, 식초

const LESSON_4 = {
  id:"kov2_b2b6_l4", title:"시외와 식생활", icon:"🚌", xp:15, board:true,
  steps:[
    {type:"intro", title:"시외와 식생활",
     desc:"Learn words about city boundaries, media viewership, and food vocabulary. These terms cover daily life topics from transportation to kitchen staples.",
     goals:["Master 20 words about suburban life, media, and food","Understand compounds with 市 (city) and 食 (food)","Use viewership and food-related vocabulary naturally"]},

    {type:"teach", trg:"시외", src:"suburbs, outside the city", pos:"noun", gender:null,
     note:"Sino-Korean. 市 (city) + 外 (outside).\nAreas beyond city boundaries.",
     example:"A: 시외에 사니까 출퇴근이 힘들지?\nB: 응, 매일 한 시간 걸려.",
     exampleSrc:"A: Living outside the city, the commute must be hard, right?\nB: Yes, it takes an hour every day.",
     funFact:"The opposite is 시내 (city center). These two words divide Korean urban geography."},

    {type:"teach", trg:"시외버스", src:"intercity bus, suburban bus", pos:"noun", gender:null,
     note:"시외 (outside city) + 버스 (bus).\nA bus connecting cities or going to suburbs.",
     example:"A: 시외버스 터미널이 어디예요?\nB: 지하철 3호선 타고 가세요.",
     exampleSrc:"A: Where is the intercity bus terminal?\nB: Take subway line 3.",
     funFact:"Korea's intercity bus system is highly efficient. The 고속버스 (express bus) network connects every major city."},

    {type:"teach", trg:"시위", src:"demonstration, protest", pos:"noun", gender:null,
     note:"Sino-Korean. 示 (show) + 威 (power).\nA public display of opposition.",
     example:"A: 오늘 광화문에서 시위가 있대.\nB: 무슨 시위야?",
     exampleSrc:"A: They say there is a demonstration at Gwanghwamun today.\nB: What kind of protest is it?",
     funFact:"Gwanghwamun Square in Seoul is Korea's symbolic protest location. The 2016 candlelight protests drew millions."},

    {type:"teach", trg:"시일", src:"time, number of days", pos:"noun", gender:null,
     note:"Sino-Korean. 時 (time) + 日 (day).\nA span of time or days needed.",
     example:"A: 완성하는 데 시일이 좀 걸릴 거예요.\nB: 얼마나 걸릴까요?",
     exampleSrc:"A: It will take some time to complete.\nB: How long will it take?",
     funFact:"시일이 걸리다 (to take time) is a formal way of saying something needs days or weeks."},

    {type:"mc",
     q:"'시일이 걸리다'는 무슨 뜻인가요?",
     opts:["시간이 필요하다","돈이 들다","장소가 바뀌다","사람이 모이다"],
     ans:"시간이 필요하다",
     hint:"시일 contains 時 (time) and 日 (day). What does it mean when something 'takes' these?"},

    {type:"teach", trg:"시점", src:"point in time, viewpoint", pos:"noun", gender:null,
     note:"Sino-Korean. 時 (time) + 點 (point).\nA specific moment or perspective.",
     example:"A: 이 시점에서 결정을 내려야 해.\nB: 맞아, 더 미룰 수 없어.",
     exampleSrc:"A: We need to make a decision at this point.\nB: Right, we cannot delay any longer.",
     funFact:"In literature, 시점 also means narrative perspective: 1인칭 시점 (first person), 3인칭 시점 (third person)."},

    {type:"teach", trg:"시중", src:"the market, public circulation", pos:"noun", gender:null,
     note:"Sino-Korean. 市 (market) + 中 (middle).\nGoods available in the general market.",
     example:"A: 시중에서 이 제품을 살 수 있어?\nB: 응, 마트에 다 있어.",
     exampleSrc:"A: Can you buy this product on the market?\nB: Yes, it is available at any mart.",
     funFact:"시중가 (market price) and 시중은행 (commercial bank) are common compound words in Korean business news."},

    {type:"teach", trg:"시즌", src:"season (sports/entertainment)", pos:"noun", gender:null,
     note:"Loanword from English 'season'.\nA period for sports leagues or TV shows.",
     example:"A: 야구 시즌이 시작됐어!\nB: 올해는 어느 팀이 강해?",
     exampleSrc:"A: Baseball season has started!\nB: Which team is strong this year?",
     funFact:"Korean baseball (KBO) season runs April to October. Korea also uses 시즌 for K-drama series."},

    {type:"teach", trg:"시집", src:"collection of poems; husband's family", pos:"noun", gender:null,
     note:"Two meanings: 詩集 (poem collection) or 媤 (husband's house).\nContext determines meaning.",
     example:"A: 이 시집 좋다. 누구 거야?\nB: 나태주 시인의 시집이야.",
     exampleSrc:"A: This poetry collection is good. Whose is it?\nB: It is poet Na Taeju's collection.",
     funFact:"시집 meaning 'husband's family' is the root of 시집가다 (to marry, for women). The poetry meaning uses 詩集."},

    {type:"teach", trg:"시집가다", src:"to get married (for women)", pos:"verb", gender:null,
     note:"시집 (husband's home) + 가다 (to go).\nTraditionally, a woman 'goes to' the husband's family.",
     example:"A: 언니가 다음 달에 시집가.\nB: 정말? 축하해야겠다!",
     exampleSrc:"A: My older sister is getting married next month.\nB: Really? We should congratulate her!",
     funFact:"The male equivalent is 장가가다. These traditional terms reflect the old custom of women joining the husband's household."},

    {type:"teach", trg:"시청", src:"city hall", pos:"noun", gender:null,
     note:"Sino-Korean. 市 (city) + 廳 (hall/office).\nThe administrative center of a city.",
     example:"A: 서류를 시청에 제출해야 해.\nB: 시청이 어디 있어?",
     exampleSrc:"A: I need to submit documents to city hall.\nB: Where is city hall?",
     funFact:"Seoul City Hall Plaza is a popular gathering spot. The old building is now a library, and the new one looks like a wave."},

    {type:"teach", trg:"시청률", src:"viewership rating", pos:"noun", gender:null,
     note:"시청 (viewing) + 률 (率, rate).\nThe percentage of viewers watching a show.",
     example:"A: 이 드라마 시청률이 30%래.\nB: 대박! 국민 드라마네.",
     exampleSrc:"A: They say this drama's viewership rating is 30%.\nB: Wow! It is a national drama.",
     funFact:"In Korea, dramas over 20% are considered mega-hits. The highest ever was over 60% for older dramas."},

    {type:"fb",
     s:"이번 회 {1}이 역대 최고를 기록했습니다.",
     a:["시청률"],
     opts:["시청률","시청","시합","시즌"],
     hint:"The percentage that measures how many people watched a TV program.",
     sSrc:"This episode's {1} set an all-time record."},

    {type:"teach", trg:"시합", src:"match, game, competition", pos:"noun", gender:null,
     note:"Sino-Korean. 試 (try) + 合 (together).\nA competitive contest between opponents.",
     example:"A: 내일 시합 준비 다 됐어?\nB: 응, 열심히 연습했어.",
     exampleSrc:"A: Are you all prepared for tomorrow's match?\nB: Yes, I practiced hard.",
     funFact:"시합 is preferred in martial arts and individual sports. 경기 is used more broadly for team sports."},

    {type:"teach", trg:"식기", src:"tableware, dishes", pos:"noun", gender:null,
     note:"Sino-Korean. 食 (eat) + 器 (vessel).\nPlates, bowls, and utensils for eating.",
     example:"A: 새 식기 세트를 샀어.\nB: 예쁘다! 어디서 샀어?",
     exampleSrc:"A: I bought a new tableware set.\nB: Pretty! Where did you buy it?",
     funFact:"Korean metal 식기 (especially stainless steel chopsticks and rice bowls) is unique. Most Asian cultures use different materials."},

    {type:"teach", trg:"식다", src:"to cool down, to grow cold", pos:"verb", gender:null,
     note:"Native Korean verb.\nFood or enthusiasm losing warmth.",
     example:"A: 빨리 먹어. 국이 식겠다.\nB: 알았어, 지금 먹을게.",
     exampleSrc:"A: Eat quickly. The soup will get cold.\nB: Okay, I will eat now.",
     funFact:"식다 is used figuratively: 열정이 식다 (passion cools down), 인기가 식다 (popularity fades)."},

    {type:"teach", trg:"식량", src:"food supply, provisions", pos:"noun", gender:null,
     note:"Sino-Korean. 食 (food) + 糧 (grain).\nFood as a resource or supply.",
     example:"A: 식량 문제가 심각해지고 있어.\nB: 세계적으로 그렇지.",
     exampleSrc:"A: The food supply issue is becoming serious.\nB: It is happening globally.",
     funFact:"North Korea's 식량 부족 (food shortage) has been a major humanitarian concern for decades."},

    {type:"teach", trg:"식료품", src:"groceries, foodstuffs", pos:"noun", gender:null,
     note:"Sino-Korean. 食料 (food materials) + 品 (goods).\nFood products for purchase.",
     example:"A: 식료품 사러 마트에 갈래?\nB: 응, 뭐 필요한 거 있어?",
     exampleSrc:"A: Want to go to the mart to buy groceries?\nB: Yes, is there anything we need?",
     funFact:"식료품점 (grocery store) is the formal term. Koreans commonly say 마트 (mart) in daily conversation."},

    {type:"teach", trg:"식빵", src:"white bread, sandwich bread", pos:"noun", gender:null,
     note:"食 (food) + 빵 (bread, from Portuguese 'pao').\nSliced bread for toast or sandwiches.",
     example:"A: 식빵이 다 떨어졌어.\nB: 편의점에서 사 올게.",
     exampleSrc:"A: We are out of bread.\nB: I will buy some from the convenience store.",
     funFact:"빵 entered Korean from Portuguese via Japan. 식빵 specifically means the sliced loaf type, not artisan bread."},

    {type:"teach", trg:"식생활", src:"dietary life, eating habits", pos:"noun", gender:null,
     note:"Sino-Korean. 食 (food) + 生活 (life).\nOne's overall pattern of eating.",
     example:"A: 건강한 식생활이 중요해.\nB: 맞아, 채소를 많이 먹어야 해.",
     exampleSrc:"A: A healthy dietary life is important.\nB: Right, we should eat a lot of vegetables.",
     funFact:"Korea's traditional 식생활 centered on rice, soup, and banchan. Western food has shifted eating patterns rapidly."},

    {type:"teach", trg:"식욕", src:"appetite", pos:"noun", gender:null,
     note:"Sino-Korean. 食 (food) + 欲 (desire).\nThe desire to eat.",
     example:"A: 요즘 식욕이 없어.\nB: 스트레스 받으면 그럴 수 있어.",
     exampleSrc:"A: I have no appetite lately.\nB: Stress can cause that.",
     funFact:"식욕이 당기다 (appetite is pulled) means craving food. The opposite is 식욕이 없다 (no appetite)."},

    {type:"teach", trg:"식초", src:"vinegar", pos:"noun", gender:null,
     note:"Sino-Korean. 食 (food) + 醋 (vinegar).\nA sour liquid used in cooking.",
     example:"A: 냉면에 식초 넣을까?\nB: 응, 좀 넣어 줘.",
     exampleSrc:"A: Should I add vinegar to the cold noodles?\nB: Yes, add some please.",
     funFact:"Korean vinegar drinking (음용식초) became a health trend. Apple cider vinegar drinks are sold everywhere."},

    {type:"match", pairs:[
      {trg:"식기", src:"tableware"},
      {trg:"식량", src:"food supply"},
      {trg:"식빵", src:"white bread"},
      {trg:"식초", src:"vinegar"}
    ]},

    {type:"mc",
     q:"건강한 식생활을 위해 중요한 것은?",
     opts:["긴 시일","균형 잡힌 식단","비싼 식기","높은 시청률"],
     ans:"균형 잡힌 식단",
     hint:"For a healthy dietary life, what matters most: balanced meals, expensive dishes, ratings, or time?"}
  ]
};

export default LESSON_4;
