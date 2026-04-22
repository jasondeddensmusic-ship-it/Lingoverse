// Korean B2. Batch 2, Lesson 19: Surroundings and Position
// Words: 두르다, 두리번거리다, 두부, 두세, 두어, 둘러싸다, 둘러싸이다, 둥지, 뒤늦다, 뒤따르다, 뒤지다, 뒤쪽, 뒤편, 뒷골목, 뒷모습, 뒷문, 뒷산, 드디어, 드러나다, 드물다

const LESSON_19 = {
  id:"kov2_b2b2_l19", title:"뒤편의 세계", icon:"🔍", xp:15, board:true,
  steps:[
    {type:"intro", title:"뒤편의 세계",
     desc:"Explore words about what lies behind, what surrounds, and what is rare. These words paint vivid pictures of spatial relationships and hidden realities.",
     goals:["Master 20 words about position, surroundings, and rarity","Understand 뒤/뒷 compound nouns","Learn verbs for surrounding, searching, and revealing"]},

    {type:"teach", trg:"두르다", src:"to wrap around, to encircle", pos:"verb", gender:null,
     note:"Native Korean. To place something\naround another thing in a circle.",
     example:"A: 목에 스카프를 둘렀어요.\nB: 날씨가 추우니까 잘했어요.",
     exampleSrc:"A: I wrapped a scarf around my neck.\nB: Good idea since the weather is cold.",
     funFact:"두르다 is irregular: 두르다 > 둘러 (not 두러). The ㄹ appears in conjugation, surprising many learners."},

    {type:"teach", trg:"두리번거리다", src:"to look around restlessly", pos:"verb", gender:null,
     note:"Mimetic origin. The restless turning of\none's head to scan surroundings.",
     example:"A: 왜 두리번거리고 있어?\nB: 친구를 찾고 있어.",
     exampleSrc:"A: Why are you looking around?\nB: I am looking for my friend.",
     funFact:"두리번두리번 is the ideophone. -거리다 turns ideophones into verbs: 깜빡거리다 (blink), 흔들거리다 (sway)."},

    {type:"teach", trg:"두부", src:"tofu, bean curd", pos:"noun", gender:null,
     note:"Sino-Korean. 豆 (bean) + 腐 (curdled).\nCurdled soybean milk pressed into blocks.",
     example:"A: 두부를 좋아하세요?\nB: 네, 순두부찌개가 제일 좋아요.",
     exampleSrc:"A: Do you like tofu?\nB: Yes, soft tofu stew is my favorite.",
     funFact:"두부 is a Korean kitchen staple. After being released from prison, Koreans traditionally eat 두부 for a fresh start."},

    {type:"teach", trg:"두세", src:"two or three", pos:"noun", gender:null,
     note:"둘 (two) + 셋 (three) blended.\nAn approximate number meaning 2-3.",
     example:"A: 두세 명이면 충분해요.\nB: 그럼 세 명만 부릅시다.",
     exampleSrc:"A: Two or three people would be enough.\nB: Then let us invite just three.",
     funFact:"Korean approximate number words: 두세 (2-3), 서너 (3-4), 대여섯 (5-6). Built into the number system."},

    {type:"teach", trg:"두어", src:"about two, a couple of", pos:"noun", gender:null,
     note:"둘 (two) + 어 (approximately).\nApproximately two of something.",
     example:"A: 두어 시간이면 도착해요.\nB: 그럼 3시쯤이네요.",
     exampleSrc:"A: It takes about two hours to arrive.\nB: So around 3 o'clock then.",
     funFact:"두어 is less precise than 두세. It feels like 'a couple' in English. Very casual and natural."},

    {type:"teach", trg:"둘러싸다", src:"to surround, to encircle", pos:"verb", gender:null,
     note:"두르다 (wrap) + 어 + 싸다 (wrap up).\nTo completely enclose something.",
     example:"A: 산이 마을을 둘러싸고 있어요.\nB: 아름다운 풍경이에요.",
     exampleSrc:"A: Mountains surround the village.\nB: It is a beautiful landscape.",
     funFact:"둘러싸다 combines two wrapping verbs for emphasis. Double-verb compounds are a Korean specialty."},

    {type:"mc",
     q:"'두리번거리다'는 어떤 모습을 표현하나요?",
     opts:["이리저리 고개를 돌리며 보는 모습","가만히 서서 앞을 보는 모습","눈을 감고 있는 모습","뒤를 돌아보는 모습"],
     ans:"이리저리 고개를 돌리며 보는 모습",
     hint:"Restlessly turning your head side to side, scanning your surroundings for something."},

    {type:"teach", trg:"둘러싸이다", src:"to be surrounded", pos:"verb", gender:null,
     note:"Passive of 둘러싸다.\nTo be enclosed on all sides.",
     example:"A: 적에게 둘러싸였어요.\nB: 탈출할 방법을 찾아야 해요.",
     exampleSrc:"A: We are surrounded by enemies.\nB: We need to find a way to escape.",
     funFact:"둘러싸이다 is the passive. Active: 경찰이 건물을 둘러쌌다. Passive: 건물이 경찰에 둘러싸였다."},

    {type:"teach", trg:"둥지", src:"nest", pos:"noun", gender:null,
     note:"Native Korean. A bird's home\nbuilt from twigs and materials.",
     example:"A: 나무 위에 새 둥지가 있어요.\nB: 알이 있을 수도 있어요.",
     exampleSrc:"A: There is a bird's nest in the tree.\nB: There might be eggs in it.",
     funFact:"둥지를 틀다 (build a nest) also means 'to settle down' somewhere. A warm metaphor for making a home."},

    {type:"teach", trg:"뒤늦다", src:"to be belated, too late", pos:"adj", gender:null,
     note:"뒤 (behind/late) + 늦다 (late).\nDouble emphasis on being late.",
     example:"A: 뒤늦게 후회해도 소용없어요.\nB: 맞아요, 미리 생각했어야죠.",
     exampleSrc:"A: Regretting belatedly is useless.\nB: Right, you should have thought ahead.",
     funFact:"뒤늦은 후회 (belated regret) is a set expression. 뒤 intensifies 늦다, making it even more tardy."},

    {type:"teach", trg:"뒤따르다", src:"to follow behind, to ensue", pos:"verb", gender:null,
     note:"뒤 (behind) + 따르다 (follow).\nTo come after in sequence or position.",
     example:"A: 성공 뒤에는 어려움이 뒤따라요.\nB: 준비가 필요하겠네요.",
     exampleSrc:"A: Difficulties follow behind success.\nB: Preparation must be needed.",
     funFact:"뒤따르다 is both literal (physically follow) and figurative (consequences follow). Very versatile."},

    {type:"teach", trg:"뒤지다", src:"to search through, to rummage; to fall behind", pos:"verb", gender:null,
     note:"뒤 (back/behind) + 지다 (fall).\nTo search thoroughly, or to lag behind.",
     example:"A: 서랍을 다 뒤져도 못 찾았어요.\nB: 다른 데 놓았을 수도 있어요.",
     exampleSrc:"A: I rummaged through all the drawers but could not find it.\nB: You might have put it somewhere else.",
     funFact:"뒤지다 as 'search' implies messy, thorough rummaging. 뒤지다 as 'fall behind' is used in competitions."},

    {type:"fb",
     s:"산이 마을을 {1} 있어요.",
     a:["둘러싸고"],
     opts:["둘러싸고","뒤따르고","뒤지고","두르고"],
     hint:"Mountains completely encircle or enclose the village on all sides.",
     sSrc:"Mountains {1} the village."},

    {type:"teach", trg:"뒤쪽", src:"the back, rear side", pos:"noun", gender:null,
     note:"뒤 (back) + 쪽 (side/direction).\nThe area toward the rear.",
     example:"A: 뒤쪽에 자리가 있어요.\nB: 뒤쪽으로 가서 앉읍시다.",
     exampleSrc:"A: There are seats in the back.\nB: Let us go to the back and sit down.",
     funFact:"쪽 is a directional suffix: 앞쪽 (front), 뒤쪽 (back), 왼쪽 (left), 오른쪽 (right). Four main directions."},

    {type:"teach", trg:"뒤편", src:"the area behind, the back part", pos:"noun", gender:null,
     note:"뒤 (back) + 편 (side/area).\nThe space behind something.",
     example:"A: 건물 뒤편에 주차장이 있어요.\nB: 거기에 차를 대겠습니다.",
     exampleSrc:"A: There is a parking lot behind the building.\nB: I will park there.",
     funFact:"뒤편 is softer and more literary than 뒤쪽. 앞편 (front part) is its pair."},

    {type:"teach", trg:"뒷골목", src:"back alley, backstreet", pos:"noun", gender:null,
     note:"뒤 (back) + ㅅ + 골목 (alley).\nA narrow street behind the main road.",
     example:"A: 뒷골목에 맛있는 식당이 있어요.\nB: 숨겨진 맛집이네요!",
     exampleSrc:"A: There is a delicious restaurant in the back alley.\nB: A hidden gem!",
     funFact:"뒷골목 culture is beloved in Korea. The best food is often found in 뒷골목 rather than main streets."},

    {type:"teach", trg:"뒷모습", src:"back view, retreating figure", pos:"noun", gender:null,
     note:"뒤 (back) + ㅅ + 모습 (appearance).\nHow someone looks from behind.",
     example:"A: 떠나는 그의 뒷모습이 쓸쓸해 보였어요.\nB: 마음이 아프네요.",
     exampleSrc:"A: His retreating figure looked lonely.\nB: That is heartbreaking.",
     funFact:"뒷모습 is deeply poetic in Korean. It evokes departure, loneliness, and nostalgia. Very literary."},

    {type:"teach", trg:"뒷문", src:"back door", pos:"noun", gender:null,
     note:"뒤 (back) + ㅅ + 문 (door).\nThe door at the rear of a building.",
     example:"A: 뒷문으로 들어오세요.\nB: 알겠어요.",
     exampleSrc:"A: Please come in through the back door.\nB: Okay.",
     funFact:"뒷문 figuratively means backdoor dealings: 뒷문으로 입학하다 (get admitted through the back door, i.e., corruption)."},

    {type:"mc",
     q:"'뒷골목'에서 찾을 수 있는 것은?",
     opts:["대형 마트","숨겨진 맛집","고속도로","공항"],
     ans:"숨겨진 맛집",
     hint:"Back alleys in Korean cities are famous for hiding small, authentic, delicious restaurants."},

    {type:"teach", trg:"뒷산", src:"the hill behind (a village/house)", pos:"noun", gender:null,
     note:"뒤 (back) + ㅅ + 산 (mountain).\nThe mountain or hill behind a settlement.",
     example:"A: 뒷산에 산책하러 갈까요?\nB: 좋아요, 공기가 맑겠어요.",
     exampleSrc:"A: Shall we go for a walk on the hill out back?\nB: Sure, the air must be fresh.",
     funFact:"In traditional Korean 풍수 (feng shui), the 뒷산 protects the village from cold northern winds."},

    {type:"teach", trg:"드디어", src:"finally, at last", pos:"adv", gender:null,
     note:"Native Korean. After a long wait,\nsomething has finally happened.",
     example:"A: 드디어 졸업했어요!\nB: 축하해요! 오래 기다렸죠.",
     exampleSrc:"A: I finally graduated!\nB: Congratulations! You waited a long time.",
     funFact:"드디어 implies positive long-awaited results. 결국 (in the end) is neutral and can be negative."},

    {type:"teach", trg:"드러나다", src:"to be revealed, to come to light", pos:"verb", gender:null,
     note:"Native Korean. Something hidden\nbecomes visible or known.",
     example:"A: 진실이 드러났어요.\nB: 결국 모든 게 밝혀졌군요.",
     exampleSrc:"A: The truth was revealed.\nB: So everything came to light in the end.",
     funFact:"드러나다 is passive/intransitive (it reveals itself). 드러내다 is active (someone reveals it)."},

    {type:"teach", trg:"드물다", src:"to be rare, uncommon", pos:"adj", gender:null,
     note:"Native Korean. Happening or existing\nvery infrequently.",
     example:"A: 이런 기회는 드물어요.\nB: 놓치지 맙시다.",
     exampleSrc:"A: An opportunity like this is rare.\nB: Let us not miss it.",
     funFact:"드물다 is the opposite of 흔하다 (common). 드문 경우 (rare case) and 드문드문 (sparsely) are related forms."},

    {type:"match", pairs:[
      {trg:"둥지", src:"nest"},
      {trg:"뒷골목", src:"back alley"},
      {trg:"드디어", src:"finally"},
      {trg:"드러나다", src:"to be revealed"},
      {trg:"두부", src:"tofu"}
    ]},

    {type:"fb",
     s:"{1} 졸업했어요!",
     a:["드디어"],
     opts:["드디어","드물게","뒤늦게","두어"],
     hint:"An adverb expressing that something long-awaited has finally happened. Great relief and joy.",
     sSrc:"I {1} graduated!"}
  ]
};
export default LESSON_19;
