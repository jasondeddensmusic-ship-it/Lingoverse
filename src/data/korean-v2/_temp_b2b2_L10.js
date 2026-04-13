// Korean B2 — Batch 2, Lesson 10: The Body and Perception
// Words: 눈동자, 눈뜨다, 눈병, 눈부시다, 눈썹, 느리다, 늑대, 늘어놓다, 늘어서다, 늘어지다, 능동적, 늦가을, 늦어지다, 다가서다, 다녀가다, 다듬다, 다루다, 다름없다, 다만, 다방

const LESSON_10 = {
  id:"kov2_b2b2_l10", title:"감각과 접근", icon:"👁️", xp:15, board:true,
  steps:[
    {type:"intro", title:"감각과 접근",
     desc:"Learn vocabulary about the body, senses, and ways of approaching situations. From eyes to abstract descriptions of behavior.",
     goals:["Master 20 words about perception and approach","Understand body-part compound words","Learn words for states of change and attitude"]},

    {type:"teach", trg:"눈동자", src:"pupil (of the eye), eyeball", pos:"noun", gender:null,
     note:"눈 (eye) + 동자 (child/ball).\nThe dark center of the eye.",
     example:"A: 아기의 눈동자가 정말 맑아요.\nB: 천사 같은 눈이에요.",
     exampleSrc:"A: The baby's eyes are so clear.\nB: They are angel-like eyes.",
     funFact:"동자 (童子) literally means 'child.' The pupil was named for the tiny reflection of a person seen in it."},

    {type:"teach", trg:"눈뜨다", src:"to open one's eyes; to become aware", pos:"verb", gender:null,
     note:"눈 (eye) + 뜨다 (to open).\nTo physically open eyes, or gain new awareness.",
     example:"A: 아침에 눈을 떴을 때 비가 오고 있었어요.\nB: 비 소리에 눈이 떠졌구나.",
     exampleSrc:"A: When I opened my eyes in the morning, it was raining.\nB: The rain sound woke you up.",
     funFact:"눈뜨다 figuratively means 'to become enlightened': 예술에 눈뜨다 (to awaken to art)."},

    {type:"teach", trg:"눈병", src:"eye disease, eye infection", pos:"noun", gender:null,
     note:"눈 (eye) + 병 (disease).\nAny illness affecting the eyes.",
     example:"A: 눈병이 유행이래요.\nB: 손을 자주 씻어야겠어요.",
     exampleSrc:"A: They say eye infections are going around.\nB: We should wash our hands often.",
     funFact:"눈병 is a general term. Specific ones: 결막염 (conjunctivitis), 다래끼 (stye). Korean is very specific about illnesses."},

    {type:"teach", trg:"눈부시다", src:"to be dazzling, blinding, brilliant", pos:"adj", gender:null,
     note:"눈 (eye) + 부시다 (to glare).\nSo bright it hurts the eyes. Also: stunning beauty.",
     example:"A: 햇살이 눈부시게 밝아요.\nB: 선글라스를 쓰세요.",
     exampleSrc:"A: The sunlight is dazzlingly bright.\nB: Put on sunglasses.",
     funFact:"눈부시다 is one of Korean's most beautiful adjectives. 눈부신 미래 (dazzling future) is a favorite expression."},

    {type:"teach", trg:"눈썹", src:"eyebrow", pos:"noun", gender:null,
     note:"눈 (eye) + 썹 (brow ridge).\nThe hair above the eye.",
     example:"A: 눈썹을 정리했어?\nB: 응, 미용실에서 했어.",
     exampleSrc:"A: Did you groom your eyebrows?\nB: Yes, I had it done at the salon.",
     funFact:"눈썹 문신 (eyebrow tattoo) is extremely popular in Korea. It is one of the most common cosmetic procedures."},

    {type:"teach", trg:"느리다", src:"to be slow", pos:"adj", gender:null,
     note:"Native Korean. Moving or happening\nat a pace below normal speed.",
     example:"A: 인터넷 속도가 너무 느려요.\nB: 와이파이를 다시 연결해 보세요.",
     exampleSrc:"A: The internet speed is too slow.\nB: Try reconnecting the Wi-Fi.",
     funFact:"느리다 is the opposite of 빠르다 (fast). 느린 is the adjective form: 느린 속도 (slow speed)."},

    {type:"mc",
     q:"'눈부시다'가 사용될 수 있는 상황은?",
     opts:["햇빛이 너무 밝을 때","방이 어두울 때","비가 올 때","바람이 불 때"],
     ans:"햇빛이 너무 밝을 때",
     hint:"When something is so bright that it hurts your eyes, like direct sunlight."},

    {type:"teach", trg:"늑대", src:"wolf", pos:"noun", gender:null,
     note:"Native Korean. A large wild canine\npredator.",
     example:"A: 옛날이야기에 늑대가 자주 나와요.\nB: 보통 나쁜 역할이죠.",
     exampleSrc:"A: Wolves appear often in old tales.\nB: Usually as the villain.",
     funFact:"In Korean folklore, the wolf is less prominent than the tiger (호랑이). But 늑대 appears in Western fairy tales retold in Korean."},

    {type:"teach", trg:"늘어놓다", src:"to lay out in a row, to ramble on", pos:"verb", gender:null,
     note:"늘다 (stretch) + 어 + 놓다 (place).\nTo spread things out, or to talk at length.",
     example:"A: 물건을 바닥에 늘어놓지 마.\nB: 미안, 정리할게.",
     exampleSrc:"A: Do not spread things out on the floor.\nB: Sorry, I will clean up.",
     funFact:"변명을 늘어놓다 (to lay out excuses) is a negative expression. It implies making too many excuses."},

    {type:"teach", trg:"늘어서다", src:"to line up, to stand in a row", pos:"verb", gender:null,
     note:"늘다 (stretch) + 어 + 서다 (stand).\nTo form a line or queue.",
     example:"A: 사람들이 길게 늘어서 있어요.\nB: 인기 있는 맛집인가 봐요.",
     exampleSrc:"A: People are lined up for a long way.\nB: It must be a popular restaurant.",
     funFact:"Korean queue culture is strong. 줄을 서다 and 늘어서다 both describe waiting in line."},

    {type:"teach", trg:"늘어지다", src:"to stretch out, to droop, to collapse", pos:"verb", gender:null,
     note:"늘다 (stretch) + 어지다 (become).\nTo become elongated or to slump down.",
     example:"A: 더위에 지쳐서 소파에 늘어졌어요.\nB: 에어컨 켤까요?",
     exampleSrc:"A: I was exhausted from the heat and collapsed on the sofa.\nB: Should I turn on the AC?",
     funFact:"늘어지다 can describe rubber bands (stretching), people (flopping down), or time (dragging on)."},

    {type:"teach", trg:"능동적", src:"active, proactive", pos:"noun", gender:null,
     note:"Sino-Korean. 能 (ability) + 動 (move) + 的.\nActing on one's own initiative.",
     example:"A: 능동적으로 참여해 주세요.\nB: 알겠습니다, 적극적으로 하겠습니다.",
     exampleSrc:"A: Please participate proactively.\nB: Understood, I will be active.",
     funFact:"능동적 (active) vs 수동적 (passive). This pair appears in grammar (능동태/수동태) and personality descriptions."},

    {type:"fb",
     s:"햇빛이 너무 {1}.",
     a:["눈부셨다"],
     opts:["눈부셨다","느렸다","늦었다","넓었다"],
     hint:"When sunlight is so brilliant that it hurts or overwhelms your eyes.",
     sSrc:"The sunlight was too {1}."},

    {type:"teach", trg:"늦가을", src:"late autumn", pos:"noun", gender:null,
     note:"늦 (late) + 가을 (autumn).\nThe final weeks of the autumn season.",
     example:"A: 늦가을에는 단풍이 절정이에요.\nB: 산에 구경 가고 싶어요.",
     exampleSrc:"A: In late autumn, the foliage is at its peak.\nB: I want to go see it in the mountains.",
     funFact:"Korean marks seasons with 초 (early), 한 (mid), 늦 (late): 초가을, 한가을, 늦가을. Very precise."},

    {type:"teach", trg:"늦어지다", src:"to be delayed, to become late", pos:"verb", gender:null,
     note:"늦다 (late) + 어지다 (become).\nSomething becomes later than planned.",
     example:"A: 출발이 좀 늦어질 것 같아요.\nB: 괜찮아요, 기다릴게요.",
     exampleSrc:"A: The departure seems like it will be delayed.\nB: That is okay, I will wait.",
     funFact:"늦어지다 implies a gradual delay. 늦다 is simply 'to be late.' The -어지다 adds the process of becoming."},

    {type:"teach", trg:"다가서다", src:"to approach, to step closer", pos:"verb", gender:null,
     note:"다가 (approaching) + 서다 (stand).\nTo come closer and stand near.",
     example:"A: 천천히 다가서면 놀라지 않을 거야.\nB: 알겠어, 조심히 다가갈게.",
     exampleSrc:"A: If you approach slowly, it will not get startled.\nB: Okay, I will approach carefully.",
     funFact:"다가서다 implies stopping close to someone. 다가가다 implies continuing to approach. Subtle but distinct."},

    {type:"teach", trg:"다녀가다", src:"to visit and leave, to stop by", pos:"verb", gender:null,
     note:"다니다 (go around) + 어 + 가다 (go).\nTo visit somewhere and then depart.",
     example:"A: 어제 친구가 다녀갔어요.\nB: 오래 있었어요?",
     exampleSrc:"A: A friend visited and left yesterday.\nB: Did they stay long?",
     funFact:"다녀가다 implies a completed visit. 다녀오다 means to visit and return (to where you started)."},

    {type:"mc",
     q:"'능동적'의 반대말은?",
     opts:["수동적","논리적","적극적","감정적"],
     ans:"수동적",
     hint:"If 능동적 means acting on your own initiative, the opposite is being acted upon by others."},

    {type:"teach", trg:"다듬다", src:"to trim, to refine, to polish", pos:"verb", gender:null,
     note:"Native Korean. To make something\nneater by trimming or adjusting.",
     example:"A: 글을 다듬어서 다시 제출하세요.\nB: 네, 문장을 정리하겠습니다.",
     exampleSrc:"A: Polish the writing and resubmit it.\nB: Yes, I will organize the sentences.",
     funFact:"다듬다 works for hair (머리를 다듬다), writing (글을 다듬다), and stones (돌을 다듬다). Very versatile."},

    {type:"teach", trg:"다루다", src:"to handle, to deal with, to cover (a topic)", pos:"verb", gender:null,
     note:"Native Korean. To manage or work with\nsomething, whether physical or abstract.",
     example:"A: 이 책은 어떤 주제를 다루나요?\nB: 한국의 경제 발전을 다룹니다.",
     exampleSrc:"A: What topic does this book cover?\nB: It covers Korea's economic development.",
     funFact:"다루다 spans from physical (tools) to abstract (topics, issues). One of Korean's most flexible verbs."},

    {type:"teach", trg:"다름없다", src:"to be no different, to be the same as", pos:"adj", gender:null,
     note:"다르다 (different) + ㅁ + 없다 (without).\nWithout any difference. Essentially identical.",
     example:"A: 이건 사기나 다름없어요.\nB: 맞아요, 항의해야 해요.",
     exampleSrc:"A: This is no different from fraud.\nB: Right, we should protest.",
     funFact:"~나 다름없다 (is no different from) is a powerful comparison pattern. It equates two things absolutely."},

    {type:"teach", trg:"다만", src:"however, only, merely", pos:"adv", gender:null,
     note:"Native Korean conjunction/adverb.\nAdds a reservation or exception to what was said.",
     example:"A: 좋은 계획이에요. 다만 시간이 부족해요.\nB: 일정을 조정할 수 있어요.",
     exampleSrc:"A: It is a good plan. However, time is short.\nB: We can adjust the schedule.",
     funFact:"다만 is softer than 하지만 (but). It gently adds a condition without strong contradiction."},

    {type:"teach", trg:"다방", src:"tearoom, old-style cafe", pos:"noun", gender:null,
     note:"Sino-Korean. 茶 (tea) + 房 (room).\nA traditional Korean tea shop or coffee house.",
     example:"A: 옛날에는 다방이 많았대요.\nB: 지금은 카페가 다 대신했죠.",
     exampleSrc:"A: They say there used to be many tearooms.\nB: Now cafes have replaced them all.",
     funFact:"다방 was Korea's social hub from the 1960s-1990s. Artists, writers, and businesspeople all met in 다방s."},

    {type:"match", pairs:[
      {trg:"눈썹", src:"eyebrow"},
      {trg:"늑대", src:"wolf"},
      {trg:"능동적", src:"proactive"},
      {trg:"다방", src:"tearoom"},
      {trg:"다루다", src:"to handle"}
    ]},

    {type:"fb",
     s:"이 다큐멘터리는 환경 문제를 {1}.",
     a:["다룬다"],
     opts:["다룬다","다듬는다","다가선다","다녀간다"],
     hint:"To cover, deal with, or address a particular topic or subject matter.",
     sSrc:"This documentary {1} environmental issues."}
  ]
};
export default LESSON_10;
