// Korean B1 Gap - Lesson 25: Home and Indoor Spaces
const LESSON_25 = {
  id:"kov2_b1gap_l25", title:"집과 실내 공간", icon:"🏠", xp:15, board:true,
  steps:[
    {type:"intro", title:"Home and Indoor Spaces",
     desc:"Explore the Korean home from the master bedroom to the front gate. Learn vocabulary for rooms, surfaces, household tasks, and indoor actions. Korean homes have unique architectural elements worth knowing.",
     goals:["Learn 20 home and indoor vocabulary words","Describe rooms, surfaces, and household items","Use home-related action verbs naturally"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"안방", src:"master bedroom, inner room", pos:"noun", gender:null,
     note:"안 (inside) + 방 (room). The main bedroom in a Korean home.",
     example:"A: 안방에서 주무세요?\nB: 네, 안방이 제일 따뜻해요.\nA: 온돌이 있어서 그런가 봐요.",
     exampleSrc:"A: Do you sleep in the master bedroom?\nB: Yes, the master bedroom is the warmest.\nA: It must be because of the underfloor heating.",
     funFact:"In traditional Korean homes, 안방 was the woman's domain, the most private and protected room. 안주인 (the lady of the house) governed from the 안방. The architecture reflected Confucian gender separation."},

    {type:"teach", trg:"마루", src:"wooden floor, main hall", pos:"noun", gender:null,
     note:"Traditional raised wooden floor. A key feature of Korean architecture.",
     example:"A: 마루에 앉아서 쉬세요.\nB: 마루가 시원하네요.\nA: 여름에는 마루가 최고예요.",
     exampleSrc:"A: Sit on the wooden floor and rest.\nB: The wooden floor is cool.\nA: In summer, the wooden floor is the best.",
     funFact:"마루 is a uniquely Korean feature: an open wooden platform connecting rooms, used for ventilation in hot summers. While 온돌 (heated floor) kept rooms warm in winter, 마루 provided natural cooling in summer."},

    {type:"teach", trg:"대문", src:"front gate, main gate", pos:"noun", gender:null,
     note:"大 (big) + 門 (gate). The main entrance gate of a house or compound.",
     example:"A: 대문을 잠갔어요?\nB: 아, 깜빡했어요. 잠글게요.\nA: 밤에는 꼭 잠가야 해요.",
     exampleSrc:"A: Did you lock the front gate?\nB: Oh, I forgot. I'll lock it.\nA: You must lock it at night.",
     funFact:"대문 (大門, great gate) reflects traditional Korean housing where homes had outer walls and a proper gate. Even in modern apartment culture, 대문 survives in expressions like 대문 밖 (outside the gate)."},

    {type:"teach", trg:"벽", src:"wall", pos:"noun", gender:null,
     note:"Any wall, interior or exterior. 벽에 걸다 (to hang on the wall).",
     example:"A: 이 그림을 벽에 걸까요?\nB: 네, 저 벽이 좋겠어요.\nA: 못을 박아야 해요.",
     exampleSrc:"A: Shall we hang this picture on the wall?\nB: Yes, that wall would be good.\nA: We need to hammer in a nail.",
     funFact:"벽 appears in powerful idioms: 벽에 부딪히다 (to hit a wall = to face an obstacle), 벽을 허물다 (to tear down a wall = to break barriers). 언어의 벽 (language wall/barrier) is familiar to all language learners."},

    {type:"teach", trg:"계단", src:"stairs, staircase", pos:"noun", gender:null,
     note:"Sino-Korean: 階 (step) + 段 (level). Steps connecting floors.",
     example:"A: 엘리베이터가 고장 났어요.\nB: 그러면 계단으로 올라가야 해요.\nA: 5층인데 힘들겠어요.",
     exampleSrc:"A: The elevator is broken.\nB: Then we have to take the stairs.\nA: It's the 5th floor, that'll be tough.",
     funFact:"계단 (階段) uses the hanja for step-level. The compound 계단식 (staircase-style) describes terraced fields: 계단식 논 (terraced rice paddies), a beautiful feature of Korean mountain farming."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'안방'이 전통 한국 집에서 특별한 이유는?",
     opts:["가장 안쪽의 주된 방이라서","손님 방이라서","부엌 옆에 있어서","가장 작은 방이라서"],
     ans:"가장 안쪽의 주된 방이라서",
     hint:"The word combines 안 (inside) and 방 (room). It was the most private, innermost room in the house."},

    {type:"fb",
     s:"엘리베이터가 고장 나서 {1}으로 올라갔어요.",
     a:["계단"],
     opts:["계단","마루","벽","대문"],
     hint:"Sino-Korean word for steps that connect different floors. You climb these when the elevator is broken.",
     sSrc:"The elevator was broken, so I went up by {1}."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"복도", src:"hallway, corridor", pos:"noun", gender:null,
     note:"Sino-Korean: 複 (multiple) + 道 (path). A passage connecting rooms.",
     example:"A: 복도에서 뛰지 마세요.\nB: 죄송해요.\nA: 미끄러울 수 있어요.",
     exampleSrc:"A: Don't run in the hallway.\nB: Sorry.\nA: It can be slippery.",
     funFact:"복도 (複道) literally means 'multiple paths.' In Korean schools, 복도 is where all the drama happens: 복도에서 만나 (meet me in the hallway) is a classic Korean drama confrontation setup."},

    {type:"teach", trg:"실내", src:"indoors, interior", pos:"noun", gender:null,
     note:"Sino-Korean: 室 (room) + 內 (inside). Opposite of 실외 (outdoors).",
     example:"A: 실내에서 담배를 피우면 안 돼요.\nB: 알겠어요, 밖에 나갈게요.\nA: 실외 흡연 구역이 있어요.",
     exampleSrc:"A: You can't smoke indoors.\nB: Understood, I'll go outside.\nA: There's an outdoor smoking area.",
     funFact:"실내 (室內, room-inside) pairs with 실외 (室外, room-outside). Korean buildings clearly mark 실내화 (indoor shoes) and 실외화 (outdoor shoes). The indoor/outdoor shoe distinction is deeply cultural."},

    {type:"teach", trg:"바닥", src:"floor, ground, bottom", pos:"noun", gender:null,
     note:"The lowest surface. 바닥에 앉다 (to sit on the floor).",
     example:"A: 바닥이 미끄러워요. 조심하세요.\nB: 왜 미끄러워요?\nA: 방금 물을 쏟았거든요.",
     exampleSrc:"A: The floor is slippery. Be careful.\nB: Why is it slippery?\nA: Because I just spilled water.",
     funFact:"바닥나다 (the bottom is exposed) means to run out completely. 돈이 바닥났다 (money hit the bottom = broke). 바닥을 치다 (to hit the floor) means reaching rock bottom before a recovery."},

    {type:"teach", trg:"구멍", src:"hole, opening", pos:"noun", gender:null,
     note:"Any kind of hole or opening. 구멍이 나다 (a hole forms).",
     example:"A: 양말에 구멍이 났어요.\nB: 새 양말을 사세요.\nA: 좋아하는 양말인데 아까워요.",
     exampleSrc:"A: There's a hole in my sock.\nB: Buy new socks.\nA: They're my favorite socks, what a waste.",
     funFact:"구멍가게 (hole shop) is an endearing term for a tiny neighborhood convenience store. The 'hole' refers to the small size. These are disappearing as chain stores expand, but the word remains beloved."},

    {type:"teach", trg:"바깥", src:"outside, exterior", pos:"noun", gender:null,
     note:"The area outside. 바깥 날씨 (the weather outside). Opposite of 안 (inside).",
     example:"A: 바깥 날씨가 어때요?\nB: 춥고 바람이 많이 불어요.\nA: 따뜻하게 입고 나가세요.",
     exampleSrc:"A: How's the weather outside?\nB: It's cold and very windy.\nA: Dress warmly before going out.",
     funFact:"바깥주인 (outside master) traditionally referred to the husband, who handled affairs outside the home, while 안주인 (inside master) was the wife. This reflects old Confucian gender roles in Korean household structure."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"복도", src:"hallway"},
      {trg:"실내", src:"indoors"},
      {trg:"바닥", src:"floor, ground"},
      {trg:"바깥", src:"outside"}
    ]},

    {type:"fb",
     s:"양말에 {1}이 났어요.",
     a:["구멍"],
     opts:["구멍","바닥","벽","복도"],
     hint:"A noun meaning a hole or opening. Something that forms in worn clothing or socks.",
     sSrc:"There's a {1} in my sock."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"공간", src:"space, room", pos:"noun", gender:null,
     note:"Sino-Korean: 空 (empty) + 間 (between). Physical or abstract space.",
     example:"A: 이 집은 공간이 넓어요.\nB: 맞아요, 방이 세 개나 있어요.\nA: 가족이 살기 좋겠어요.",
     exampleSrc:"A: This house has a lot of space.\nB: Right, it has three rooms.\nA: It would be nice for a family.",
     funFact:"공간 (空間, empty-between) is philosophical: space is the emptiness between things. 개인 공간 (personal space) is increasingly valued by young Koreans. 공간 디자인 (space design) is a growing field."},

    {type:"teach", trg:"빨래", src:"laundry", pos:"noun", gender:null,
     note:"Both the clothes to wash and the act of washing. 빨래를 하다 (to do laundry).",
     example:"A: 빨래를 했어요?\nB: 네, 빨래를 널었어요.\nA: 오늘 날씨가 좋아서 금방 마르겠어요.",
     exampleSrc:"A: Did you do the laundry?\nB: Yes, I hung it up to dry.\nA: The weather is nice today, so it should dry quickly.",
     funFact:"Korean apartments traditionally have 빨래 건조대 (laundry drying racks) on balconies. Dryers are less common than in Western homes. 빨래를 널다 (to hang laundry) is a daily ritual for many Korean households."},

    {type:"teach", trg:"먼지", src:"dust", pos:"noun", gender:null,
     note:"Fine dust particles. 먼지를 닦다 (to wipe dust), 미세먼지 (fine dust/PM2.5).",
     example:"A: 먼지가 많이 쌓였어요.\nB: 청소해야겠어요.\nA: 먼지를 닦아 주세요.",
     exampleSrc:"A: A lot of dust has piled up.\nB: We should clean.\nA: Please wipe the dust.",
     funFact:"미세먼지 (微細 fine + 먼지 dust) has become a major Korean concern. Koreans check 미세먼지 levels daily via apps. When levels are high, masks are worn and outdoor activities are cancelled."},

    {type:"teach", trg:"바늘", src:"needle", pos:"noun", gender:null,
     note:"Sewing needle. 바늘에 실을 꿰다 (to thread a needle).",
     example:"A: 바늘 있어요? 단추를 달아야 해요.\nB: 바느질 상자에 있어요.\nA: 감사해요, 금방 할게요.",
     exampleSrc:"A: Do you have a needle? I need to sew a button.\nB: It's in the sewing box.\nA: Thanks, I'll do it quickly.",
     funFact:"가는 데 바늘 간다 (where the thread goes, the needle goes) is a proverb meaning inseparable friends or partners always go together. 바늘방석에 앉다 (sitting on a needle cushion) means being extremely uncomfortable."},

    {type:"teach", trg:"가꾸다", src:"to cultivate, to tend, to groom", pos:"verb", gender:null,
     note:"Caring for gardens, appearance, or spaces. 정원을 가꾸다 (to tend a garden).",
     example:"A: 정원을 예쁘게 가꾸셨네요.\nB: 매일 조금씩 가꿔요.\nA: 꽃이 정말 예뻐요.",
     exampleSrc:"A: You've tended the garden beautifully.\nB: I tend it a little every day.\nA: The flowers are really pretty.",
     funFact:"가꾸다 applies to self-improvement too: 외모를 가꾸다 (to groom one's appearance), 마음을 가꾸다 (to cultivate one's mind). The verb implies patient, ongoing effort, like nurturing a plant."},

    // --- Quiz batch 3 ---
    {type:"mc",
     q:"'미세먼지'의 '먼지'는 무슨 뜻이에요?",
     opts:["바람","가루 같은 작은 입자","비","물"],
     ans:"가루 같은 작은 입자",
     hint:"Think of the fine particles that settle on surfaces in your home. You wipe them away with a cloth."},

    {type:"fb",
     s:"정원을 매일 {1}.",
     a:["가꿔요"],
     opts:["가꿔요","쌓아요","붙여요","끊어요"],
     hint:"A verb meaning to tend or cultivate. Used for gardens, appearance, or anything requiring careful ongoing care.",
     sSrc:"I {1} the garden every day."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"쌓다", src:"to stack, to pile up, to build up", pos:"verb", gender:null,
     note:"Actively stacking. 벽돌을 쌓다 (to stack bricks), 경험을 쌓다 (to build experience).",
     example:"A: 상자를 높이 쌓지 마세요.\nB: 왜요?\nA: 넘어질 수 있어요.",
     exampleSrc:"A: Don't stack the boxes too high.\nB: Why?\nA: They might fall over.",
     funFact:"쌓다 is powerful metaphorically: 경험을 쌓다 (to build experience), 신뢰를 쌓다 (to build trust), 실력을 쌓다 (to build skills). Success in Korean culture is described as a patient stacking process."},

    {type:"teach", trg:"쌓이다", src:"to pile up, to accumulate", pos:"verb", gender:null,
     note:"Passive of 쌓다. Things pile up by themselves: 눈이 쌓이다 (snow piles up).",
     example:"A: 책상에 서류가 쌓여 있어요.\nB: 정리해야겠어요.\nA: 하나씩 처리하세요.",
     exampleSrc:"A: Documents are piled up on the desk.\nB: I need to organize them.\nA: Handle them one at a time.",
     funFact:"쌓다/쌓이다 is another active/passive pair. You stack bricks (쌓다), but stress piles up on its own (쌓이다). 피로가 쌓이다 (fatigue accumulates) describes the gradual burden of overwork."},

    {type:"teach", trg:"싸다", src:"to wrap, to pack", pos:"verb", gender:null,
     note:"Wrapping objects or packing bags. 선물을 싸다 (to wrap a gift), 짐을 싸다 (to pack bags).",
     example:"A: 짐을 다 쌌어요?\nB: 거의 다 쌌어요. 조금만 남았어요.\nA: 빨리 싸세요, 출발해야 해요.",
     exampleSrc:"A: Have you packed everything?\nB: Almost done. Just a little left.\nA: Pack quickly, we need to leave.",
     funFact:"싸다 has a second meaning: 'to be cheap.' 이 가격 싸요 (this price is cheap). Context makes the difference clear. 도시락을 싸다 (to pack a lunchbox) is a daily act of love in Korean families."},

    {type:"teach", trg:"끊다", src:"to cut off, to sever, to quit", pos:"verb", gender:null,
     note:"Cutting a connection. 전화를 끊다 (to hang up), 담배를 끊다 (to quit smoking).",
     example:"A: 담배를 끊었어요?\nB: 네, 한 달 전에 끊었어요.\nA: 대단해요! 힘들었죠?",
     exampleSrc:"A: Did you quit smoking?\nB: Yes, I quit a month ago.\nA: Impressive! It must have been hard?",
     funFact:"끊다 implies a clean break: 관계를 끊다 (to cut off a relationship), 연락을 끊다 (to cut off contact). 끊임없이 (ceaselessly, without cutting) is a common adverb meaning continuously or relentlessly."},

    {type:"teach", trg:"붙이다", src:"to stick on, to attach, to paste", pos:"verb", gender:null,
     note:"Causative of 붙다. 스티커를 붙이다 (to stick a sticker), 포스터를 붙이다 (to put up a poster).",
     example:"A: 여기에 포스터를 붙여도 돼요?\nB: 네, 벽에 붙이세요.\nA: 테이프가 있어요?",
     exampleSrc:"A: Can I stick a poster here?\nB: Yes, stick it on the wall.\nA: Do you have tape?",
     funFact:"붙이다 extends to nicknames: 별명을 붙이다 (to stick on a nickname). 불을 붙이다 (to light a fire, literally stick fire onto something) and 이름을 붙이다 (to name something) are everyday uses."},

    // --- Quiz batch 4 ---
    {type:"fb",
     s:"담배를 한 달 전에 {1}.",
     a:["끊었어요"],
     opts:["끊었어요","붙였어요","쌌어요","쌓았어요"],
     hint:"A verb meaning to cut off or quit a habit. Used for stopping smoking or ending a phone call.",
     sSrc:"I {1} smoking a month ago."},

    {type:"match", pairs:[
      {trg:"쌓다", src:"to stack, pile up"},
      {trg:"싸다", src:"to wrap, pack"},
      {trg:"끊다", src:"to cut off, quit"},
      {trg:"붙이다", src:"to stick on, attach"}
    ]},

    {type:"mc",
     q:"'책상에 서류가 쌓여 있어요'에서 '쌓이다'는 무슨 뜻이에요?",
     opts:["붙였다는 뜻","직접 쌓았다는 뜻","저절로 쌓였다는 뜻","치웠다는 뜻"],
     ans:"저절로 쌓였다는 뜻",
     hint:"This is the passive form of 쌓다. The documents accumulated on their own, without someone actively stacking them."}
  ]
};
export default LESSON_25;
