// Korean B2. Batch 4, Lesson 16: Night and Kitchen
// Words: 밤늦다, 밤새, 밤새다, 밤새우다, 밤색, 밤중, 밤하늘, 밥그릇, 밥맛, 밥상, 밥솥, 방면, 방바닥, 방송사, 방송하다, 방식, 방안, 방울, 방지, 방지하다

const LESSON_16 = {
  id:"kov2_b2b4_l16", title:"밤새와 밥상", icon:"🌙", xp:15, board:true,
  steps:[
    {type:"intro", title:"밤새와 밥상",
     desc:"Learn words about nighttime activities, meals, and broadcasting. This lesson covers 밤- night compounds, 밥- food vocabulary, and 방- room and prevention words.",
     goals:["Master 20 words about night, meals, and broadcasting","Understand 밤- compounds for nighttime concepts","Use 방- words for directions, methods, and prevention"]},

    {type:"teach", trg:"밤늦다", src:"to be late at night", pos:"adj", gender:null,
     note:"밤 (night) + 늦다 (late).\nDescribes doing something at a late hour.",
     example:"A: 밤늦게까지 공부하면 안 돼요.\nB: 알아요, 일찍 자려고요.",
     exampleSrc:"A: You should not study until late at night.\nB: I know, I am trying to sleep early.",
     funFact:"밤늦게 (late at night) is the adverbial form. Korean parents constantly say 밤늦게 다니지 마 (do not go out late at night)."},

    {type:"teach", trg:"밤새", src:"all night long", pos:"noun", gender:null,
     note:"밤 (night) + 새 (throughout).\nFrom evening to dawn without sleeping.",
     example:"A: 밤새 게임했어?\nB: 어, 눈이 빨개졌어.",
     exampleSrc:"A: Did you game all night?\nB: Yeah, my eyes are red.",
     funFact:"밤새 works as both noun and adverb: 밤새 공부하다 (study all night), 밤새도록 (throughout the entire night)."},

    {type:"teach", trg:"밤새다", src:"to stay up all night", pos:"verb", gender:null,
     note:"밤 (night) + 새다 (to break through).\nTo remain awake until dawn.",
     example:"A: 시험 공부하느라 밤을 샜어.\nB: 힘들었겠다, 좀 쉬어.",
     exampleSrc:"A: I stayed up all night studying for the exam.\nB: That must have been hard, rest a bit.",
     funFact:"밤을 새다 and 밤새다 are interchangeable. Korean college students call all-nighters 올나이트 (all-night)."},

    {type:"teach", trg:"밤새우다", src:"to stay up all night (doing something)", pos:"verb", gender:null,
     note:"밤 (night) + 새우다 (causative of 새다).\nDeliberately staying awake through the night.",
     example:"A: 프로젝트 때문에 밤을 새웠어요.\nB: 커피 좀 드실래요?",
     exampleSrc:"A: I stayed up all night because of the project.\nB: Would you like some coffee?",
     funFact:"밤새다 (night passes) vs. 밤새우다 (I make the night pass). The causative -우다 adds intentionality."},

    {type:"teach", trg:"밤색", src:"chestnut color, brown", pos:"noun", gender:null,
     note:"밤 (chestnut) + 색 (色, color).\nThe warm brown color of chestnuts.",
     example:"A: 밤색 가방이 예쁘네요.\nB: 가을에 잘 어울리는 색이죠.",
     exampleSrc:"A: That chestnut-colored bag is pretty.\nB: It is a color that goes well with autumn.",
     funFact:"Korean color names from nature: 밤색 (chestnut brown), 살구색 (apricot), 하늘색 (sky blue), 연두색 (yellow-green)."},

    {type:"mc",
     q:"'밤새다'와 '밤새우다'의 차이점은?",
     opts:["밤새우다는 의도적으로 새는 것을 강조한다","둘의 의미가 완전히 다르다","밤새다만 공부에 쓴다","밤새우다는 과거형이다"],
     ans:"밤새우다는 의도적으로 새는 것을 강조한다",
     hint:"The causative suffix -우다 adds a sense of intentionally making the night pass while staying awake."},

    {type:"teach", trg:"밤중", src:"middle of the night", pos:"noun", gender:null,
     note:"밤 (night) + 중 (中, middle).\nThe deep part of nighttime.",
     example:"A: 밤중에 전화하면 안 돼.\nB: 미안, 급한 일이 있어서.",
     exampleSrc:"A: You should not call in the middle of the night.\nB: Sorry, I had something urgent.",
     funFact:"한밤중 (in the dead of night) is more dramatic than 밤중. Both refer to the deep hours of darkness."},

    {type:"teach", trg:"밤하늘", src:"night sky", pos:"noun", gender:null,
     note:"밤 (night) + 하늘 (sky).\nThe sky after dark.",
     example:"A: 밤하늘에 별이 가득해.\nB: 시골이라 도시보다 잘 보여.",
     exampleSrc:"A: The night sky is full of stars.\nB: It is the countryside, so they are more visible than in the city.",
     funFact:"Korea has designated 별 관측 명소 (star-watching spots) where you can see the 밤하늘 without light pollution."},

    {type:"teach", trg:"밥그릇", src:"rice bowl", pos:"noun", gender:null,
     note:"밥 (rice/meal) + 그릇 (bowl).\nThe bowl used for serving rice.",
     example:"A: 밥그릇이 예쁘면 밥이 더 맛있어 보여.\nB: 그래서 좋은 그릇을 사는 거야.",
     exampleSrc:"A: Rice looks more delicious in a pretty bowl.\nB: That is why people buy nice bowls.",
     funFact:"밥그릇 싸움 (rice bowl fight) idiomatically means fighting over territory or resources, like turf wars."},

    {type:"teach", trg:"밥맛", src:"appetite; annoyance", pos:"noun", gender:null,
     note:"밥 (rice) + 맛 (taste).\nAppetite for food, or something distasteful.",
     example:"A: 밥맛이 없어서 적게 먹었어.\nB: 어디 아픈 거 아니야?",
     exampleSrc:"A: I ate little because I had no appetite.\nB: Are you not feeling well?",
     funFact:"밥맛이다 (slang) means 'annoying/disgusting,' like something that kills your appetite. Very colloquial."},

    {type:"teach", trg:"밥상", src:"dining table, meal table", pos:"noun", gender:null,
     note:"밥 (rice) + 상 (床, table).\nA table set for a meal.",
     example:"A: 밥상을 차려 놨어요.\nB: 와, 맛있겠다!",
     exampleSrc:"A: I have set the dinner table.\nB: Wow, it looks delicious!",
     funFact:"Traditional Korean 밥상 is a low table. 차린 밥상에 숟가락 얹기 (placing a spoon on a set table) means taking credit for others' work."},

    {type:"teach", trg:"밥솥", src:"rice cooker", pos:"noun", gender:null,
     note:"밥 (rice) + 솥 (pot/kettle).\nA pot or device for cooking rice.",
     example:"A: 전기 밥솥을 새로 샀어요.\nB: 어떤 회사요?",
     exampleSrc:"A: I bought a new electric rice cooker.\nB: What company?",
     funFact:"Korean 전기 밥솥 (electric rice cookers) are advanced tech products. Premium models cost hundreds of dollars."},

    {type:"fb",
     s:"어머니가 저녁 {1}을 차려 주셨다.",
     a:["밥상"],
     opts:["밥상","밥솥","밥그릇","밥맛"],
     hint:"This compound noun means a dining table set with food, the traditional Korean meal setting.",
     sSrc:"Mother set the evening {1} for us."},

    {type:"teach", trg:"방면", src:"direction, area, field", pos:"noun", gender:null,
     note:"Sino-Korean. 方 (direction) + 面 (face/side).\nA direction or area of expertise.",
     example:"A: 서울 방면으로 가는 버스가 있나요?\nB: 3번 정류장에서 타세요.",
     exampleSrc:"A: Is there a bus heading in the Seoul direction?\nB: Take it at stop number 3.",
     funFact:"From Hanja 方面. Used for physical directions (서울 방면) and fields: 과학 방면 (the science field)."},

    {type:"teach", trg:"방바닥", src:"room floor", pos:"noun", gender:null,
     note:"방 (room) + 바닥 (floor).\nThe floor surface of a room.",
     example:"A: 겨울에 방바닥이 따뜻해서 좋아.\nB: 온돌이 정말 좋지.",
     exampleSrc:"A: The room floor is warm in winter, which is nice.\nB: Ondol (floor heating) is really great.",
     funFact:"Korea's 온돌 (underfloor heating) makes 방바닥 warm. Koreans sit, eat, and sleep on the floor traditionally."},

    {type:"teach", trg:"방송사", src:"broadcasting company", pos:"noun", gender:null,
     note:"Sino-Korean. 放送 (broadcast) + 社 (company).\nA TV or radio broadcasting organization.",
     example:"A: 어느 방송사 뉴스를 봐요?\nB: KBS를 주로 봐요.",
     exampleSrc:"A: Which broadcasting company's news do you watch?\nB: I mainly watch KBS.",
     funFact:"Korea's big 3 방송사: KBS, MBC, SBS. They dominate Korean television and are known globally for K-dramas."},

    {type:"teach", trg:"방송하다", src:"to broadcast, to air", pos:"verb", gender:null,
     note:"방송 (broadcast) + 하다 (to do).\nTo transmit programs on TV, radio, or online.",
     example:"A: 이 프로그램은 매주 월요일에 방송해요.\nB: 그날 꼭 봐야겠다.",
     exampleSrc:"A: This program airs every Monday.\nB: I should definitely watch it that day.",
     funFact:"생방송 (live broadcast), 재방송 (rebroadcast), 방송 사고 (broadcasting accident/blooper) are common terms."},

    {type:"teach", trg:"방식", src:"method, way, format", pos:"noun", gender:null,
     note:"Sino-Korean. 方 (direction) + 式 (form).\nA way of doing something.",
     example:"A: 새로운 방식으로 해 봅시다.\nB: 좋아요, 다른 방식이 필요해요.",
     exampleSrc:"A: Let us try a new method.\nB: Good, we need a different method.",
     funFact:"From Hanja 方式. 생활 방식 (lifestyle), 결제 방식 (payment method), 교육 방식 (teaching method)."},

    {type:"teach", trg:"방안", src:"inside a room; plan, solution", pos:"noun", gender:null,
     note:"Two meanings.\n방 + 안 (inside room). 方案 (method + plan) = solution.",
     example:"A: 문제 해결 방안을 찾아야 해요.\nB: 회의에서 논의합시다.",
     exampleSrc:"A: We need to find a solution.\nB: Let us discuss it at the meeting.",
     funFact:"As 'inside a room': 방 안에 있다. As 'solution' (方案): 대안 (alternative), 방안 (plan), 해결책 (resolution)."},

    {type:"teach", trg:"방울", src:"drop (of liquid); bell", pos:"noun", gender:null,
     note:"Native Korean word.\nA small bead of liquid or a small bell.",
     example:"A: 눈물 한 방울이 뺨을 적셨어.\nB: 그 영화가 그렇게 슬펐어?",
     exampleSrc:"A: A single teardrop moistened my cheek.\nB: Was the movie that sad?",
     funFact:"방울토마토 (cherry tomato, literally 'bell tomato') gets its name from the round bell-like shape."},

    {type:"mc",
     q:"'방안'이 '해결책'의 의미일 때 어떤 한자를 쓰나요?",
     opts:["放案 (놓을 + 계획)","方案 (방향 + 계획)","房案 (방 + 책상)","防案 (막을 + 계획)"],
     ans:"方案 (방향 + 계획)",
     hint:"When meaning 'plan' or 'solution,' the first character means 'direction/method' and the second means 'plan.'"},

    {type:"teach", trg:"방지", src:"prevention", pos:"noun", gender:null,
     note:"Sino-Korean. 防 (defend) + 止 (stop).\nStopping something bad from happening.",
     example:"A: 사고 방지를 위해 안전 교육을 해요.\nB: 예방이 최선이죠.",
     exampleSrc:"A: We do safety training for accident prevention.\nB: Prevention is the best approach.",
     funFact:"From Hanja 防止. 범죄 방지 (crime prevention), 오염 방지 (pollution prevention), 미끄럼 방지 (slip prevention)."},

    {type:"teach", trg:"방지하다", src:"to prevent, to stop from happening", pos:"verb", gender:null,
     note:"방지 (prevention) + 하다 (to do).\nTo take action to prevent something.",
     example:"A: 감염을 방지하려면 손을 자주 씻으세요.\nB: 마스크도 착용하는 게 좋죠.",
     exampleSrc:"A: To prevent infection, wash your hands often.\nB: Wearing a mask is also good.",
     funFact:"방지하다 is the active form. 방지되다 (to be prevented) is the passive. Very common in health advisories."},

    {type:"fb",
     s:"감염 {1}를 위해 손을 깨끗이 씻으세요.",
     a:["방지"],
     opts:["방지","방안","방식","방송"],
     hint:"This Sino-Korean noun means prevention, stopping something bad before it happens.",
     sSrc:"Wash your hands clean for infection {1}."},

    {type:"match", pairs:[
      {trg:"밤새우다", src:"to stay up all night"},
      {trg:"방송하다", src:"to broadcast"},
      {trg:"방식", src:"method, way"},
      {trg:"방지하다", src:"to prevent"}
    ]}
  ]
};
export default LESSON_16;
