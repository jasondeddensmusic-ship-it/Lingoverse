// Korean B1 Final Gap - Lesson 4: Nature, Food & Body
const LESSON_4 = {
  id:"kov2_b1fin_l4", title:"자연과 음식", icon:"🌿", xp:15, board:true,
  steps:[
    {type:"intro", title:"Nature, Food & the Body",
     desc:"Learn vocabulary for the natural world, common foods, and the human body. These words come up in everyday conversations about weather, cooking, and health.",
     goals:["Learn 20 words for nature, food, and body parts","Discuss weather, ingredients, and physical sensations","Use descriptive vocabulary for the natural world"]},

    {type:"teach", trg:"공기", src:"air, atmosphere", pos:"noun", gender:null,
     note:"Sino-Korean (空氣). 공 (空) = empty/sky, 기 (氣) = energy/gas.",
     example:"A: 오늘 공기가 좋네요.\nB: 네, 비 온 뒤라서 공기가 맑아요.",
     exampleSrc:"A: The air is nice today.\nB: Yes, it's clear because it rained.",
     funFact:"Korea tracks 미세먼지 (fine dust/PM2.5) daily. When 공기 quality is bad, people check air quality apps before going outside."},

    {type:"teach", trg:"온도", src:"temperature", pos:"noun", gender:null,
     note:"Sino-Korean (溫度). 온 (溫) = warm, 도 (度) = degree.",
     example:"A: 오늘 온도가 몇 도예요?\nB: 영하 5도예요. 너무 추워요!",
     exampleSrc:"A: What's the temperature today?\nB: It's minus 5 degrees. So cold!",
     funFact:"Korea uses Celsius. When Koreans say 30도, they mean 30 degrees Celsius (86F). Winter can drop to 영하 (below zero) 20도 in the north."},

    {type:"teach", trg:"태양", src:"the sun", pos:"noun", gender:null,
     note:"Sino-Korean (太陽). 태 (太) = great, 양 (陽) = bright/yang.",
     example:"A: 태양이 뜨거워요.\nB: 그늘에서 쉬는 게 좋겠어요.",
     exampleSrc:"A: The sun is hot.\nB: It would be good to rest in the shade.",
     funFact:"태양 is the formal/scientific word for the sun. In daily speech, Koreans say 해 (native Korean). The Korean flag's 태극 also contains the 양 concept."},

    {type:"teach", trg:"햇빛", src:"sunlight", pos:"noun", gender:null,
     note:"Native Korean compound. 햇 (sun's) + 빛 (light).",
     example:"A: 햇빛이 너무 강해요.\nB: 선크림 바르세요.",
     exampleSrc:"A: The sunlight is too strong.\nB: Put on sunscreen.",
     funFact:"햇빛 uses the native Korean 해 (sun) with the possessive ㅅ. Similar compounds: 햇살 (sun rays), 햇볕 (sunshine warmth)."},

    {type:"teach", trg:"햇살", src:"sunbeams, sun rays", pos:"noun", gender:null,
     note:"Native Korean compound. 햇 (sun's) + 살 (rays/arrows).",
     example:"A: 따뜻한 햇살이 좋아요.\nB: 네, 봄 햇살은 정말 기분이 좋아요.",
     exampleSrc:"A: I love the warm sunbeams.\nB: Yes, spring sunbeams really feel good.",
     funFact:"햇살 is the poetic word for sunlight. 살 originally meant 'arrow,' so 햇살 literally means 'sun arrows.' It is a favorite word in Korean poetry."},

    {type:"fb",
     s:"비 온 뒤에 {1}가 맑아졌어요.",
     a:["공기"],
     opts:["공기","온도","태양","햇빛"],
     hint:"After rain, this invisible substance we breathe becomes cleaner.",
     sSrc:"After the rain, the {1} became clear."},

    {type:"teach", trg:"파도", src:"wave (ocean)", pos:"noun", gender:null,
     note:"Sino-Korean (波濤). 파 (波) = wave, 도 (濤) = large wave.",
     example:"A: 파도가 높아요?\nB: 네, 오늘은 파도가 세서 수영하면 안 돼요.",
     exampleSrc:"A: Are the waves high?\nB: Yes, the waves are strong today so you shouldn't swim.",
     funFact:"Jeju Island is famous for its 파도 sounds. Many Korean ASMR recordings feature Jeju wave sounds for relaxation."},

    {type:"teach", trg:"푸르다", src:"blue, green, lush", pos:"adj", gender:null,
     note:"Native Korean. Poetic word for vivid blue or green in nature.",
     example:"A: 하늘이 정말 푸르네요.\nB: 네, 가을 하늘이 가장 푸르러요.",
     exampleSrc:"A: The sky is really blue.\nB: Yes, the autumn sky is the bluest.",
     funFact:"푸르다 covers both blue and green, like the ancient Korean color concept. A 푸른 숲 (lush forest) and 푸른 하늘 (blue sky) both use this word."},

    {type:"teach", trg:"흙", src:"soil, earth, dirt", pos:"noun", gender:null,
     note:"Native Korean noun. The physical substance of the ground.",
     example:"A: 이 흙이 좋은 흙이에요?\nB: 네, 화분에 쓰기 좋은 흙이에요.",
     exampleSrc:"A: Is this good soil?\nB: Yes, it's good soil for flower pots.",
     funFact:"In Korean culture, 흙 is deeply symbolic. The phrase 흙으로 돌아가다 (return to the earth) means to pass away, reflecting the cycle of life."},

    {type:"teach", trg:"풀", src:"grass, herbs", pos:"noun", gender:null,
     note:"Native Korean noun. General word for grass or non-woody plants.",
     example:"A: 잔디밭에 풀이 많이 자랐네요.\nB: 네, 비가 와서 풀이 빨리 자랐어요.",
     exampleSrc:"A: A lot of grass has grown on the lawn.\nB: Yes, it grew fast because of the rain.",
     funFact:"풀 also means 'glue' in a different context. 풀을 뜯다 (to pick grass) describes cows grazing, while 풀로 붙이다 means to glue something."},

    {type:"teach", trg:"피다", src:"to bloom, to blossom", pos:"verb", gender:null,
     note:"Native Korean verb. Used for flowers opening. Also: fire starting.",
     example:"A: 벚꽃이 피었어요?\nB: 네, 이번 주에 활짝 피었어요!",
     exampleSrc:"A: Have the cherry blossoms bloomed?\nB: Yes, they bloomed fully this week!",
     funFact:"꽃이 피다 (flowers bloom) is one of the most beloved phrases in Korean. Every spring, 벚꽃이 피다 trends on social media."},

    {type:"match", pairs:[
      {trg:"파도", src:"ocean wave"},
      {trg:"푸르다", src:"blue/green/lush"},
      {trg:"흙", src:"soil/earth"},
      {trg:"풀", src:"grass"},
      {trg:"피다", src:"to bloom"}
    ]},

    {type:"teach", trg:"향기", src:"fragrance, scent, aroma", pos:"noun", gender:null,
     note:"Sino-Korean (香氣). 향 (香) = fragrant, 기 (氣) = energy/air.",
     example:"A: 꽃 향기가 좋네요.\nB: 장미 향기예요. 진짜 좋죠?",
     exampleSrc:"A: The flower fragrance is lovely.\nB: It's the scent of roses. Really nice, right?",
     funFact:"향기 is always positive. For bad smells, Korean uses 냄새 (smell/odor). Saying something has 향기 is always a compliment."},

    {type:"teach", trg:"지붕", src:"roof", pos:"noun", gender:null,
     note:"Native Korean noun. The top covering of a building.",
     example:"A: 지붕 색깔이 예뻐요.\nB: 네, 한옥 지붕은 정말 아름다워요.",
     exampleSrc:"A: The roof color is pretty.\nB: Yes, traditional Korean house roofs are truly beautiful.",
     funFact:"Traditional Korean 지붕 have curved eaves that supposedly deflect evil spirits. The curve also helps rain slide off efficiently."},

    {type:"teach", trg:"창밖", src:"outside the window", pos:"noun", gender:null,
     note:"Compound: 창 (window) + 밖 (outside).",
     example:"A: 창밖을 봐요!\nB: 와, 눈이 오고 있어요!",
     exampleSrc:"A: Look outside the window!\nB: Wow, it's snowing!",
     funFact:"창밖 is a favorite literary image in Korean songs and poetry. Looking out the window represents longing, reflection, or waiting for someone."},

    {type:"teach", trg:"콩", src:"bean, soybean", pos:"noun", gender:null,
     note:"Native Korean noun. Core ingredient in Korean cuisine.",
     example:"A: 된장은 뭘로 만들어요?\nB: 콩으로 만들어요. 한국의 대표 음식이에요.",
     exampleSrc:"A: What is doenjang made from?\nB: It's made from soybeans. It's a signature Korean food.",
     funFact:"Soybeans are the foundation of Korean cooking: 된장 (soybean paste), 간장 (soy sauce), 두부 (tofu) all come from 콩."},

    {type:"teach", trg:"오징어", src:"squid", pos:"noun", gender:null,
     note:"Native Korean noun. One of Korea's most popular seafoods.",
     example:"A: 오징어 좋아해요?\nB: 네! 오징어볶음이 제일 맛있어요.",
     exampleSrc:"A: Do you like squid?\nB: Yes! Stir-fried squid is the most delicious.",
     funFact:"Korea is one of the world's top squid-consuming nations. Dried 오징어 is a classic movie snack and beer pairing."},

    {type:"teach", trg:"참기름", src:"sesame oil", pos:"noun", gender:null,
     note:"Compound: 참 (true/real) + 기름 (oil). Premium cooking oil.",
     example:"A: 비빔밥에 참기름 넣었어요?\nB: 네, 참기름을 넣어야 맛있어요.",
     exampleSrc:"A: Did you add sesame oil to the bibimbap?\nB: Yes, you need to add sesame oil for it to be delicious.",
     funFact:"참 means 'true/genuine.' 참기름 is 'true oil' because sesame oil was historically the most valued cooking oil in Korea."},

    {type:"mc",
     q:"한국 요리에서 가장 기본이 되는 재료는?",
     opts:["오징어","콩","참기름","치즈"],
     ans:"콩",
     hint:"This ingredient is the base for doenjang, ganjang, and tofu, all essentials."},

    {type:"teach", trg:"후춧가루", src:"pepper powder, ground pepper", pos:"noun", gender:null,
     note:"Compound: 후추 (pepper) + 가루 (powder).",
     example:"A: 후춧가루 좀 뿌려 주세요.\nB: 네, 여기 있어요.",
     exampleSrc:"A: Please sprinkle some pepper.\nB: Here you go.",
     funFact:"후추 came to Korea via trade routes. The word may trace back to Sanskrit through Chinese 胡椒. It was once as valuable as gold."},

    {type:"teach", trg:"치즈", src:"cheese", pos:"noun", gender:null,
     note:"Loanword from English. Increasingly popular in Korean fusion food.",
     example:"A: 치즈 좋아해요?\nB: 네, 치즈 떡볶이가 최고예요!",
     exampleSrc:"A: Do you like cheese?\nB: Yes, cheese tteokbokki is the best!",
     funFact:"치즈 has become a Korean food trend. Cheese tteokbokki, cheese dakgalbi, and even cheese ramen are hugely popular fusion dishes."},

    {type:"teach", trg:"음료", src:"beverage, drink", pos:"noun", gender:null,
     note:"Sino-Korean (飮料). Formal word for any drink.",
     example:"A: 어떤 음료 드릴까요?\nB: 차가운 음료 주세요.",
     exampleSrc:"A: What beverage would you like?\nB: A cold drink, please.",
     funFact:"Korean convenience stores have massive 음료 sections. Korea's unique drinks include 식혜 (sweet rice drink) and 수정과 (cinnamon punch)."},

    {type:"teach", trg:"피부", src:"skin", pos:"noun", gender:null,
     note:"Sino-Korean (皮膚). Used for both skin care and medical contexts.",
     example:"A: 피부가 좋아 보여요!\nB: 고마워요, 요즘 관리하고 있어요.",
     exampleSrc:"A: Your skin looks great!\nB: Thanks, I've been taking care of it lately.",
     funFact:"Korea's skincare obsession is real. 피부 관리 (skin management) is a national hobby, and K-beauty products are exported worldwide."},

    {type:"fb",
     s:"꽃에서 좋은 {1}가 나요.",
     a:["향기"],
     opts:["향기","풍경","공기","피부"],
     hint:"This word specifically means a pleasant fragrance or aroma coming from something.",
     sSrc:"A nice {1} comes from the flowers."}
  ]
};
export default LESSON_4;
