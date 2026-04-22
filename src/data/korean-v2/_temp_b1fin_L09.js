// Korean B1 Final Gap - Lesson 9: Tradition & Society
const LESSON_9 = {
  id:"kov2_b1fin_l9", title:"전통과 사회", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Tradition & Society",
     desc:"Learn vocabulary for Korean tradition, religion, politics, and national identity. These words are essential for understanding Korean culture and reading the news.",
     goals:["Learn 20 words about tradition, politics, and society","Discuss national history and cultural heritage","Understand terms for governance and diplomacy"]},

    {type:"teach", trg:"전통", src:"tradition", pos:"noun", gender:null,
     note:"Sino-Korean (傳統). 전 (傳) = transmit, 통 (統) = unify/system.",
     example:"A: 한국의 전통 문화가 뭐예요?\nB: 한복, 한옥, 한식이 대표적이에요.",
     exampleSrc:"A: What is Korean traditional culture?\nB: Hanbok, hanok, and hansik are representative.",
     funFact:"전통 is a source of pride. Modern Korea actively preserves 전통 through national holidays, cultural centers, and UNESCO heritage sites."},

    {type:"teach", trg:"전통적", src:"traditional", pos:"noun", gender:null,
     note:"전통 + 적 (的). Used as a modifier: 전통적인 + noun.",
     example:"A: 전통적인 결혼식을 했어요?\nB: 네, 전통적인 한복을 입고 결혼했어요.",
     exampleSrc:"A: Did you have a traditional wedding?\nB: Yes, we wore traditional hanbok for the wedding.",
     funFact:"Many Korean couples have both a 전통적인 ceremony and a Western-style one. The 전통 ceremony involves bowing and sharing dates and chestnuts."},

    {type:"teach", trg:"유교", src:"Confucianism", pos:"noun", gender:null,
     note:"Sino-Korean (儒敎). The philosophical system that shaped Korean society.",
     example:"A: 유교가 한국에 어떤 영향을 줬어요?\nB: 가족과 예절 문화에 큰 영향을 줬어요.",
     exampleSrc:"A: What influence did Confucianism have on Korea?\nB: It greatly influenced family and etiquette culture.",
     funFact:"유교 values like respect for elders, emphasis on education, and filial piety still deeply influence modern Korean daily life."},

    {type:"teach", trg:"종교", src:"religion", pos:"noun", gender:null,
     note:"Sino-Korean (宗敎). 종 (宗) = sect/school, 교 (敎) = teaching.",
     example:"A: 종교가 있어요?\nB: 저는 특별한 종교는 없어요.",
     exampleSrc:"A: Do you have a religion?\nB: I don't have a particular religion.",
     funFact:"Korea has remarkable religious diversity: Buddhism, Christianity, and Confucianism coexist. About 56% of Koreans report no religious affiliation."},

    {type:"teach", trg:"서양", src:"the West, Western countries", pos:"noun", gender:null,
     note:"Sino-Korean (西洋). 서 (西) = west, 양 (洋) = ocean.",
     example:"A: 서양 음식을 좋아해요?\nB: 네, 파스타를 특히 좋아해요.",
     exampleSrc:"A: Do you like Western food?\nB: Yes, I especially like pasta.",
     funFact:"서양 contrasts with 동양 (the East). In Korean thinking, 서양 = Europe and the Americas, 동양 = East Asia. This division runs deep in cultural discourse."},

    {type:"mc",
     q:"한국의 예절 문화에 큰 영향을 준 것은?",
     opts:["유교","종교","전쟁","서양"],
     ans:"유교",
     hint:"This philosophical system from China emphasized respect, family, and social harmony."},

    {type:"teach", trg:"조상", src:"ancestor", pos:"noun", gender:null,
     note:"Sino-Korean (祖上). 조 (祖) = ancestor, 상 (上) = above.",
     example:"A: 조상님들의 무덤은 어디에 있어요?\nB: 시골에 있어요. 명절에 가요.",
     exampleSrc:"A: Where are the ancestors' graves?\nB: They're in the countryside. We go on holidays.",
     funFact:"Koreans honor 조상 during Chuseok and Seollal with 차례 (ancestral rites). Food is carefully prepared and offered at the family altar."},

    {type:"teach", trg:"절", src:"Buddhist temple; bow", pos:"noun", gender:null,
     note:"Native Korean noun. Two meanings: temple (寺) and a formal bow.",
     example:"A: 이 절이 유명해요?\nB: 네, 천 년 된 아주 유명한 절이에요.",
     exampleSrc:"A: Is this temple famous?\nB: Yes, it's a very famous temple that's a thousand years old.",
     funFact:"절 as 'bow' is essential in Korean etiquette. The deep 큰절 (grand bow) is performed on New Year's Day before elders. 절 as 'temple' refers to Buddhist sites."},

    {type:"teach", trg:"왕", src:"king", pos:"noun", gender:null,
     note:"Sino-Korean (王). Title for Korean monarchs through the Joseon Dynasty.",
     example:"A: 조선의 가장 유명한 왕은 누구예요?\nB: 세종대왕이 가장 유명해요.",
     exampleSrc:"A: Who is the most famous king of Joseon?\nB: King Sejong the Great is the most famous.",
     funFact:"세종대왕 (King Sejong the Great) created Hangul, the Korean alphabet. His face appears on the 10,000 won bill. He is Korea's most beloved 왕."},

    {type:"teach", trg:"장군", src:"general (military)", pos:"noun", gender:null,
     note:"Sino-Korean (將軍). 장 (將) = lead, 군 (軍) = army.",
     example:"A: 이순신 장군을 알아요?\nB: 네, 한국의 영웅이에요.",
     exampleSrc:"A: Do you know General Yi Sun-sin?\nB: Yes, he's a Korean hero.",
     funFact:"Admiral Yi Sun-sin is Korea's greatest military hero. His turtle ship (거북선) defeated the Japanese navy in the 1590s. His statue stands in central Seoul."},

    {type:"fb",
     s:"세종대왕은 조선의 가장 위대한 {1}이에요.",
     a:["왕"],
     opts:["왕","장군","조상","절"],
     hint:"This title refers to a monarch who rules a kingdom. Sejong held this position.",
     sSrc:"King Sejong the Great is the greatest {1} of Joseon."},

    {type:"teach", trg:"통일", src:"unification, reunification", pos:"noun", gender:null,
     note:"Sino-Korean (統一). 통 (統) = unify, 일 (一) = one.",
     example:"A: 남북 통일이 가능할까요?\nB: 언젠가는 통일이 되길 바라요.",
     exampleSrc:"A: Is Korean reunification possible?\nB: I hope reunification happens someday.",
     funFact:"통일 is one of the most emotionally charged words in Korean. It refers specifically to the reunification of North and South Korea."},

    {type:"teach", trg:"전쟁", src:"war", pos:"noun", gender:null,
     note:"Sino-Korean (戰爭). 전 (戰) = battle, 쟁 (爭) = fight/contend.",
     example:"A: 한국전쟁이 언제 시작됐어요?\nB: 1950년에 시작됐어요.",
     exampleSrc:"A: When did the Korean War start?\nB: It started in 1950.",
     funFact:"The Korean War (1950-1953) is called 6.25 전쟁 in Korea (June 25th War), named after its start date. It technically never ended, only a ceasefire."},

    {type:"teach", trg:"전국", src:"the whole country, nationwide", pos:"noun", gender:null,
     note:"Sino-Korean (全國). 전 (全) = all, 국 (國) = country.",
     example:"A: 이 행사는 전국에서 열려요?\nB: 네, 전국 10개 도시에서요.",
     exampleSrc:"A: Is this event held nationwide?\nB: Yes, in 10 cities nationwide.",
     funFact:"전국 appears in many fixed phrases: 전국 방송 (national broadcast), 전국 날씨 (nationwide weather), 전국 대회 (national tournament)."},

    {type:"teach", trg:"외교", src:"diplomacy", pos:"noun", gender:null,
     note:"Sino-Korean (外交). 외 (外) = outside, 교 (交) = interact.",
     example:"A: 외교가 왜 중요해요?\nB: 나라 사이의 평화를 위해 중요해요.",
     exampleSrc:"A: Why is diplomacy important?\nB: It's important for peace between nations.",
     funFact:"Korea's 외교 is complex: strong US alliance, delicate China relations, and the ongoing North Korea situation. It is a frequent news topic."},

    {type:"teach", trg:"정치적", src:"political", pos:"noun", gender:null,
     note:"Sino-Korean (政治的). 정치 (politics) + 적 (的) suffix.",
     example:"A: 이 문제는 정치적이에요?\nB: 네, 정치적으로 민감한 문제예요.",
     exampleSrc:"A: Is this issue political?\nB: Yes, it's a politically sensitive issue.",
     funFact:"Korean politics is passionate. Election seasons bring intense 정치적 debate, and voter turnout is consistently high compared to other democracies."},

    {type:"match", pairs:[
      {trg:"통일", src:"reunification"},
      {trg:"전쟁", src:"war"},
      {trg:"외교", src:"diplomacy"},
      {trg:"전국", src:"nationwide"},
      {trg:"정치적", src:"political"}
    ]},

    {type:"teach", trg:"일반", src:"general, ordinary, common", pos:"noun", gender:null,
     note:"Sino-Korean (一般). The standard or ordinary case.",
     example:"A: 일반 좌석이에요, 우등 좌석이에요?\nB: 일반 좌석으로 주세요.",
     exampleSrc:"A: General seating or premium seating?\nB: General seating, please.",
     funFact:"일반 appears on every Korean train and bus ticket. 일반실 (general class) vs 특실 (premium class) is a common choice."},

    {type:"teach", trg:"일반적", src:"general, typical, common", pos:"noun", gender:null,
     note:"일반 + 적. 일반적으로 means 'generally' or 'typically.'",
     example:"A: 일반적으로 한국 사람들은 매운 음식을 좋아해요?\nB: 일반적으로 그래요, 하지만 다 그런 건 아니에요.",
     exampleSrc:"A: Do Korean people generally like spicy food?\nB: Generally yes, but not everyone.",
     funFact:"일반적으로 is a favorite TOPIK essay phrase. It introduces general facts before a specific argument."},

    {type:"teach", trg:"주요", src:"major, main, key", pos:"noun", gender:null,
     note:"Sino-Korean (主要). 주 (主) = main, 요 (要) = important.",
     example:"A: 주요 뉴스가 뭐예요?\nB: 경제와 교육 문제가 주요 뉴스예요.",
     exampleSrc:"A: What's the major news?\nB: Economics and education issues are the main news.",
     funFact:"주요 is a headline word: 주요 도시 (major cities), 주요 인물 (key figures), 주요 원인 (main cause). It signals importance."},

    {type:"teach", trg:"주택", src:"house, housing, residence", pos:"noun", gender:null,
     note:"Sino-Korean (住宅). 주 (住) = live, 택 (宅) = house.",
     example:"A: 주택 가격이 올랐어요?\nB: 네, 서울 주택 가격이 많이 올랐어요.",
     exampleSrc:"A: Have housing prices gone up?\nB: Yes, Seoul housing prices have risen a lot.",
     funFact:"주택 prices in Seoul are a major social issue. Many young Koreans feel homeownership is impossible, calling it 영끌 (borrowing to the max to buy)."},

    {type:"teach", trg:"지방", src:"region, province; fat (body)", pos:"noun", gender:null,
     note:"Two meanings: 地方 (region) or 脂肪 (body fat). Context determines which.",
     example:"A: 서울 말고 지방에서 살아 봤어요?\nB: 네, 부산에서 살았어요.",
     exampleSrc:"A: Have you lived in the provinces, not Seoul?\nB: Yes, I lived in Busan.",
     funFact:"In Korea, 지방 often means 'anywhere that is not Seoul.' The Seoul-vs-지방 divide is a real cultural and economic discussion."},

    {type:"teach", trg:"지역", src:"area, district, region", pos:"noun", gender:null,
     note:"Sino-Korean (地域). More specific than 지방. A defined geographic area.",
     example:"A: 이 지역에 맛집이 많아요?\nB: 네, 이 지역은 음식으로 유명해요.",
     exampleSrc:"A: Are there many good restaurants in this area?\nB: Yes, this area is famous for food.",
     funFact:"지역 is used for specific areas: 강남 지역 (Gangnam area), 학교 주변 지역 (area around the school). It is more precise than 지방."},

    {type:"mc",
     q:"서울이 아닌 곳을 한국에서 뭐라고 불러요?",
     opts:["주택","지방","전국","지역"],
     ans:"지방",
     hint:"This word refers to provinces or regions outside the capital city."}
  ]
};
export default LESSON_9;
