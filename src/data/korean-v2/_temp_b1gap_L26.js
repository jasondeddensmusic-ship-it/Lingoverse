// Korean B1 Gap - Lesson 26: Nature and Landscape
const LESSON_26 = {
  id:"kov2_b1gap_l26", title:"자연과 풍경", icon:"🏔️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Nature and Landscape",
     desc:"Explore Korean vocabulary for the natural world: rivers, rocks, islands, forests, and the living things within them. Essential for travel, literature, and everyday descriptions of Korea's stunning scenery.",
     goals:["Learn 20 nature and landscape nouns","Describe terrain, weather, and wildlife","Use nature vocabulary in everyday conversation"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"강물", src:"river water, river current", pos:"noun", gender:null,
     note:"Compound: 강 (river) + 물 (water). Specifically the water flowing in a river.",
     example:"A: 강물이 정말 맑아요!\nB: 네, 이 지역은 물이 깨끗해요.\nA: 수영해도 될까요?",
     exampleSrc:"A: The river water is really clear!\nB: Yes, the water in this area is clean.\nA: Can I swim in it?",
     funFact:"강물 vs. 강: 강 is the river itself (geography), while 강물 is the water flowing through it. Korean poetry loves 강물 for its imagery of flowing time and change."},

    {type:"teach", trg:"땅", src:"land, ground, earth", pos:"noun", gender:null,
     note:"Native Korean. The physical ground beneath your feet or land as territory.",
     example:"A: 이 땅은 누구 거예요?\nB: 우리 할아버지 땅이에요.\nA: 넓은 땅이네요!",
     exampleSrc:"A: Whose land is this?\nB: It's our grandfather's land.\nA: It's a big piece of land!",
     funFact:"땅 appears in many expressions: 땅콩 (peanut, literally 'earth nut'), 땅바닥 (the ground surface), 땅값 (land price). In Korean real estate, 땅 is everything."},

    {type:"teach", trg:"들", src:"field, plain, open area", pos:"noun", gender:null,
     note:"Native Korean. Open, flat land, usually grassy. Not cultivated like 밭.",
     example:"A: 들에 꽃이 많이 피었어요.\nB: 봄이라 예쁘죠?\nA: 사진 찍으러 가요!",
     exampleSrc:"A: Many flowers have bloomed in the field.\nB: It's spring, so they're pretty, right?\nA: Let's go take photos!",
     funFact:"들 creates the word 들판 (open field/plain) and 벌판 (wide plain). 들꽃 (wildflower, literally 'field flower') is a beloved Korean poetic image symbolizing humble beauty."},

    {type:"teach", trg:"모래", src:"sand", pos:"noun", gender:null,
     note:"Native Korean. Sand on beaches, in deserts, or riverbeds.",
     example:"A: 모래가 너무 뜨거워요!\nB: 슬리퍼를 신으세요.\nA: 바닷가 모래는 항상 뜨겁죠.",
     exampleSrc:"A: The sand is too hot!\nB: Put on your slippers.\nA: Beach sand is always hot.",
     funFact:"모래시계 (hourglass, literally 'sand clock') was the title of a legendary 1995 Korean drama. 모래성 (sand castle) is used metaphorically for something fragile and temporary."},

    {type:"teach", trg:"바위", src:"rock, boulder", pos:"noun", gender:null,
     note:"Native Korean. Large rocks or boulders, bigger than 돌 (stone).",
     example:"A: 저 바위 위에 올라갈 수 있어요?\nB: 위험해요, 조심하세요.\nA: 경치가 좋을 것 같아요.",
     exampleSrc:"A: Can I climb up on that rock?\nB: It's dangerous, be careful.\nA: I think the view will be great.",
     funFact:"바위 is culturally important: many Korean mountain temples have named boulders with spiritual significance. 바위 vs. 돌: think boulder vs. stone. Size is the key difference."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'강물이 맑다'에서 '강물'의 뜻은?",
     opts:["바다의 파도","강에 흐르는 물","비가 내리는 물","호수의 물"],
     ans:"강에 흐르는 물",
     hint:"This compound word combines 'river' with 'water.' It refers specifically to what flows through a river."},

    {type:"fb",
     s:"해변에 {1}가 너무 뜨거워요.",
     a:["모래"],
     opts:["모래","바위","땅","들"],
     hint:"The fine, granular substance that covers beaches and gets between your toes when hot.",
     sSrc:"The {1} at the beach is too hot."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"돌", src:"stone, pebble", pos:"noun", gender:null,
     note:"Native Korean. Smaller than 바위. Stones you can hold in your hand.",
     example:"A: 강에서 돌을 주웠어요.\nB: 예쁜 돌이네요!\nA: 기념으로 가져갈게요.",
     exampleSrc:"A: I picked up a stone from the river.\nB: It's a pretty stone!\nA: I'll take it as a souvenir.",
     funFact:"돌 also means a baby's first birthday (돌잔치). The connection is unclear, but both meanings are ancient native Korean. Context always makes it clear which meaning is intended."},

    {type:"teach", trg:"섬", src:"island", pos:"noun", gender:null,
     note:"Native Korean. Any land surrounded by water, from small to large.",
     example:"A: 제주도는 한국에서 가장 큰 섬이에요.\nB: 거기 가 봤어요?\nA: 네, 정말 아름다워요.",
     exampleSrc:"A: Jeju is the largest island in Korea.\nB: Have you been there?\nA: Yes, it's really beautiful.",
     funFact:"Korea has over 3,300 islands. The word 섬 appears in many place names: 강화도, 울릉도, 독도 all end in 도 (島, island in hanja), but 섬 is the native Korean word used in everyday speech."},

    {type:"teach", trg:"그늘", src:"shade, shadow", pos:"noun", gender:null,
     note:"Native Korean. The cool area blocked from sunlight. Different from 그림자 (cast shadow).",
     example:"A: 너무 더워요. 그늘에서 쉬어요.\nB: 저기 나무 그늘이 좋아 보여요.\nA: 거기로 가요!",
     exampleSrc:"A: It's too hot. Let's rest in the shade.\nB: The shade under that tree over there looks nice.\nA: Let's go there!",
     funFact:"그늘 vs. 그림자: 그늘 is the shaded area (나무 그늘 = tree shade), while 그림자 is the shadow shape cast by an object. You rest in 그늘 but see your 그림자 on the ground."},

    {type:"teach", trg:"소나무", src:"pine tree", pos:"noun", gender:null,
     note:"소나무: 솔 (pine) + 나무 (tree). Korea's most iconic tree species.",
     example:"A: 이 산에 소나무가 많네요.\nB: 한국 산에는 소나무가 제일 많아요.\nA: 향기가 좋아요.",
     exampleSrc:"A: There are a lot of pine trees on this mountain.\nB: Korean mountains have the most pine trees.\nA: The scent is nice.",
     funFact:"The pine tree (소나무) is a national symbol of Korea, representing endurance and loyalty. It appears on the 500 won coin and in the national anthem: 남산 위에 저 소나무 (that pine tree on Namsan)."},

    {type:"teach", trg:"뿌리", src:"root", pos:"noun", gender:null,
     note:"Native Korean. Plant roots, or metaphorically, origins and foundations.",
     example:"A: 이 나무는 뿌리가 정말 깊어요.\nB: 그래서 태풍에도 안 넘어져요.\nA: 뿌리가 중요하네요.",
     exampleSrc:"A: This tree has really deep roots.\nB: That's why it doesn't fall in typhoons.\nA: Roots are important.",
     funFact:"뿌리 is used metaphorically: 뿌리 깊은 전통 (deep-rooted tradition), 뿌리를 내리다 (to put down roots / to settle). A popular Korean drama called 뿌리깊은나무 (Deep Rooted Tree) explored Hangul's creation."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"섬", src:"island"},
      {trg:"그늘", src:"shade"},
      {trg:"소나무", src:"pine tree"},
      {trg:"돌", src:"stone, pebble"}
    ]},

    {type:"mc",
     q:"한국 산에 가장 많은 나무는?",
     opts:["대나무","은행나무","벚나무","소나무"],
     ans:"소나무",
     hint:"This tree is a national symbol of Korea and even appears in the Korean national anthem."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"날개", src:"wing", pos:"noun", gender:null,
     note:"Native Korean. Wings of birds, insects, or airplanes.",
     example:"A: 새가 날개를 펴고 날아가요.\nB: 정말 자유로워 보여요.\nA: 저도 날개가 있으면 좋겠어요.",
     exampleSrc:"A: The bird is spreading its wings and flying.\nB: It looks really free.\nA: I wish I had wings too.",
     funFact:"날개를 달다 (to attach wings) is an idiom meaning 'to gain momentum' or 'to take off.' When a business succeeds quickly, Koreans say 날개 돋친 듯이 팔리다 (selling as if it sprouted wings)."},

    {type:"teach", trg:"새끼", src:"baby animal, young animal", pos:"noun", gender:null,
     note:"Native Korean. The offspring of an animal. Can also be rude slang for a person.",
     example:"A: 고양이 새끼가 태어났어요!\nB: 몇 마리예요?\nA: 네 마리예요. 너무 귀여워요.",
     exampleSrc:"A: The cat had kittens!\nB: How many?\nA: Four. They're so cute.",
     funFact:"새끼 is perfectly polite for animals: 강아지 새끼 (puppy), 고양이 새끼 (kitten). But be very careful: when used for people, it becomes a strong insult. Context and tone make all the difference."},

    {type:"teach", trg:"식물", src:"plant", pos:"noun", gender:null,
     note:"Sino-Korean: 植 (plant) + 物 (thing). The general term for all plant life.",
     example:"A: 집에 식물을 많이 키워요?\nB: 네, 식물 키우는 게 취미예요.\nA: 어떤 식물이 좋아요?",
     exampleSrc:"A: Do you grow many plants at home?\nB: Yes, growing plants is my hobby.\nA: What kind of plants do you like?",
     funFact:"식물인간 (植物人間) literally means 'plant person' and refers to someone in a vegetative state. Korean compound words can be startlingly direct. Related: 동물 (animal), 광물 (mineral)."},

    {type:"teach", trg:"밭", src:"dry field, crop field", pos:"noun", gender:null,
     note:"Native Korean. A non-irrigated field for growing vegetables, as opposed to 논 (rice paddy).",
     example:"A: 할머니 밭에서 감자를 캤어요.\nB: 직접 키운 감자예요?\nA: 네, 맛이 정말 좋아요.",
     exampleSrc:"A: I dug potatoes from grandmother's field.\nB: Are they potatoes she grew herself?\nA: Yes, they taste really good.",
     funFact:"밭 vs. 논: Korea distinguishes dry fields (밭, for vegetables/grains) from wet paddies (논, for rice). This distinction reflects how central rice farming is to Korean agriculture and culture."},

    {type:"teach", trg:"바닷가", src:"seaside, beach, seashore", pos:"noun", gender:null,
     note:"Compound: 바다 (sea) + 가 (edge). The area where the sea meets the land.",
     example:"A: 주말에 바닷가에 갈까요?\nB: 좋아요! 어디로 갈까요?\nA: 부산 해운대는 어때요?",
     exampleSrc:"A: Shall we go to the seaside this weekend?\nB: Sure! Where should we go?\nA: How about Haeundae in Busan?",
     funFact:"바닷가 is more casual and native-sounding than 해변 (海邊, beach). Koreans often say 바닷가에 놀러 가다 (go to the seaside to play). Haeundae and Gyeongpo are Korea's most famous 바닷가 spots."},

    // --- Quiz batch 3 ---
    {type:"fb",
     s:"고양이 {1}가 네 마리 태어났어요.",
     a:["새끼"],
     opts:["새끼","날개","뿌리","식물"],
     hint:"This noun refers to the young offspring of an animal. Kittens, puppies, cubs.",
     sSrc:"Four cat {1} were born."},

    {type:"mc",
     q:"'밭'에서 주로 무엇을 키워요?",
     opts:["물고기","벼","채소와 곡물","나무"],
     ans:"채소와 곡물",
     hint:"This type of field is dry, not flooded. It is used for growing vegetables and grains, not rice."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"물속", src:"underwater, inside water", pos:"noun", gender:null,
     note:"Compound: 물 (water) + 속 (inside). Beneath the water's surface.",
     example:"A: 물속에 물고기가 많아요?\nB: 네, 맑아서 물속이 다 보여요.\nA: 스노클링하고 싶어요!",
     exampleSrc:"A: Are there many fish underwater?\nB: Yes, the water is clear so you can see everything underwater.\nA: I want to go snorkeling!",
     funFact:"The pattern X + 속 is very productive: 물속 (in water), 마음속 (in one's heart), 꿈속 (in a dream), 숲속 (in the forest). Korean loves these 'inside' compounds for vivid imagery."},

    {type:"teach", trg:"산소", src:"oxygen", pos:"noun", gender:null,
     note:"Sino-Korean: 酸 (acid) + 素 (element). The chemical element we breathe.",
     example:"A: 산에 가면 산소가 많아요.\nB: 그래서 공기가 맑은 거예요.\nA: 도시보다 숨쉬기가 좋아요.",
     exampleSrc:"A: There's a lot of oxygen in the mountains.\nB: That's why the air is fresh.\nA: It's easier to breathe than in the city.",
     funFact:"산소 literally means 'acid element' because early chemists thought oxygen was essential for all acids. 산소방 (oxygen room/bar) was a trend in Korean cities for people wanting fresh air breaks."},

    {type:"teach", trg:"기온", src:"temperature (air)", pos:"noun", gender:null,
     note:"Sino-Korean: 氣 (air) + 溫 (warm). Specifically air temperature, not body or water.",
     example:"A: 오늘 기온이 몇 도예요?\nB: 영하 5도래요.\nA: 정말 추워요!",
     exampleSrc:"A: What's the temperature today?\nB: They say it's minus 5 degrees.\nA: It's really cold!",
     funFact:"기온 is for weather reports. For body temperature, use 체온 (體溫). For water temperature, use 수온 (水溫). Korean has specific compounds for each type of temperature measurement."},

    {type:"teach", trg:"너머", src:"the other side, beyond", pos:"noun", gender:null,
     note:"Native Korean. What lies beyond or on the far side of something.",
     example:"A: 산 너머에 무엇이 있어요?\nB: 작은 마을이 있어요.\nA: 가 보고 싶어요!",
     exampleSrc:"A: What's on the other side of the mountain?\nB: There's a small village.\nA: I want to go see it!",
     funFact:"너머 vs. 넘어: 너머 is a noun (the other side), while 넘어 is a verb form (넘다, to cross over). 담 너머 (beyond the wall) is a common literary image for the unknown or forbidden."},

    {type:"teach", trg:"곳곳", src:"everywhere, here and there", pos:"noun", gender:null,
     note:"Reduplicated form of 곳 (place). Many places, scattered throughout.",
     example:"A: 서울 곳곳에 공원이 있어요.\nB: 맞아요, 어디든 가까워요.\nA: 그게 서울의 장점이에요.",
     exampleSrc:"A: There are parks everywhere in Seoul.\nB: Right, they're close no matter where you are.\nA: That's Seoul's advantage.",
     funFact:"곳곳 doubles the word 곳 (place) for the meaning 'place after place.' Korean loves reduplication: 사람사람 (person after person), 집집 (house after house), 곳곳 (place after place)."},

    // --- Quiz batch 4 ---
    {type:"fb",
     s:"오늘 {1}이 영하 10도래요.",
     a:["기온"],
     opts:["기온","산소","물속","너머"],
     hint:"A Sino-Korean word for the measurement of how warm or cold the air is. Weather forecasters use this.",
     sSrc:"They say today's {1} is minus 10 degrees."},

    {type:"match", pairs:[
      {trg:"물속", src:"underwater"},
      {trg:"곳곳", src:"everywhere"},
      {trg:"너머", src:"the other side"},
      {trg:"바닷가", src:"seaside"}
    ]},

    {type:"mc",
     q:"'서울 곳곳에 맛집이 있어요'에서 '곳곳'의 뜻은?",
     opts:["한 곳에만","가끔","아주 먼 곳에","여기저기 여러 곳에"],
     ans:"여기저기 여러 곳에",
     hint:"This is a reduplicated form of 'place,' meaning many different locations scattered throughout an area."}
  ]
};
export default LESSON_26;
