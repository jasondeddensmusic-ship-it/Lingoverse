// Korean B2. Batch 6, Lesson 13: Thinness and Children
// Words: 얇다, 양국, 양력, 양배추, 양보, 양보하다, 양상추, 양식, 양옆, 양주, 얕다, 얘(interj), 어기다, 어느덧, 어두워지다, 어때(contraction), 어려워지다, 어리석다, 어린아이, 어린애

const LESSON_13 = {
  id:"kov2_b2b6_l13", title:"양보와 변화", icon:"🥬", xp:15, board:true,
  steps:[
    {type:"intro", title:"양보와 변화",
     desc:"Learn words about yielding, food, diplomacy, and change. This lesson covers 양 (both/Western) compounds and native Korean change verbs with -워지다.",
     goals:["Master 20 words about compromise, food, and gradual change","Understand Sino-Korean 양 compounds for duality and Western things","Use -워지다 pattern for describing gradual changes"]},

    {type:"teach", trg:"얇다", src:"to be thin (flat objects)", pos:"adj", gender:null,
     note:"Native Korean adjective.\nThinness of flat or layered objects.",
     example:"A: 이 종이가 너무 얇아서 찢어질 것 같아.\nB: 두꺼운 종이로 바꿀까?",
     exampleSrc:"A: This paper is so thin it might tear.\nB: Should we switch to thicker paper?",
     funFact:"얇다 is for flat things (paper, fabric). 가늘다 is for long thin things (rope, fingers). Korean distinguishes them."},

    {type:"teach", trg:"양국", src:"both countries, the two nations", pos:"noun", gender:null,
     note:"Sino-Korean. 兩 (both) + 國 (country).\nTwo countries in a diplomatic context.",
     example:"A: 양국 간의 관계가 개선되고 있어요.\nB: 좋은 소식이네요.",
     exampleSrc:"A: Relations between the two countries are improving.\nB: That is good news.",
     funFact:"Korean diplomacy news uses 양국 constantly. 한일 양국 (Korea-Japan both countries) is one of the most common pairs."},

    {type:"teach", trg:"양력", src:"solar calendar", pos:"noun", gender:null,
     note:"Sino-Korean. 陽 (sun) + 曆 (calendar).\nThe Western Gregorian calendar system.",
     example:"A: 생일이 양력으로 몇 월이에요?\nB: 양력 3월 15일이에요.",
     exampleSrc:"A: What month is your birthday on the solar calendar?\nB: March 15th on the solar calendar.",
     funFact:"Many older Koreans celebrate birthdays by 음력 (lunar calendar). Younger generations mostly use 양력."},

    {type:"teach", trg:"양배추", src:"cabbage", pos:"noun", gender:null,
     note:"양 (Western) + 배추 (napa cabbage).\nLiterally 'Western cabbage,' round green cabbage.",
     example:"A: 양배추즙이 위에 좋대.\nB: 그래서 요즘 많이 마시는구나.",
     exampleSrc:"A: They say cabbage juice is good for the stomach.\nB: So that is why people drink it a lot these days.",
     funFact:"양배추 juice became a Korean health trend. The 양 prefix means 'Western': 양파 (onion), 양말 (socks), 양복 (suit)."},

    {type:"teach", trg:"양보", src:"concession, yielding", pos:"noun", gender:null,
     note:"Sino-Korean. 讓 (yield) + 步 (step).\nTaking a step back for compromise.",
     example:"A: 서로 양보가 필요해.\nB: 맞아, 다 이기려고 하면 안 돼.",
     exampleSrc:"A: We both need to make concessions.\nB: Right, we cannot both try to win everything.",
     funFact:"양보 is valued in Korean culture. The phrase 양보하는 사람이 이긴다 (the one who yields wins) is well known."},

    {type:"teach", trg:"양보하다", src:"to yield, to make a concession", pos:"verb", gender:null,
     note:"양보 + 하다 (to do).\nActively stepping back or compromising.",
     example:"A: 좌석을 양보해 주시겠어요?\nB: 네, 물론이죠.",
     exampleSrc:"A: Would you yield your seat?\nB: Yes, of course.",
     funFact:"Korean public transit etiquette encourages 양보하다 for elderly, pregnant women, and people with disabilities."},

    {type:"mc",
     q:"'양배추'에서 '양'의 의미는?",
     opts:["서양의","양","많은","좋은"],
     ans:"서양의",
     hint:"The prefix 양 in food words like 양파 and 양배추 refers to something that came from the West."},

    {type:"teach", trg:"양상추", src:"lettuce", pos:"noun", gender:null,
     note:"양 (Western) + 상추 (lettuce).\nCrispy lettuce used in salads and wraps.",
     example:"A: 샌드위치에 양상추 넣어 줘.\nB: 토마토도 넣을까?",
     exampleSrc:"A: Put lettuce in the sandwich.\nB: Should I add tomato too?",
     funFact:"Korean BBQ uses 상추 (Korean lettuce) for wraps, while 양상추 (Western lettuce) goes in salads and burgers."},

    {type:"teach", trg:"양식", src:"Western food; form/style; resources", pos:"noun", gender:null,
     note:"Multiple Sino-Korean origins.\n洋食 (Western food), 樣式 (style), 糧食 (provisions).",
     example:"A: 오늘 점심은 양식 먹을까?\nB: 좋아, 파스타 어때?",
     exampleSrc:"A: Should we eat Western food for lunch today?\nB: Sure, how about pasta?",
     funFact:"Korean restaurants categorize by 한식 (Korean), 양식 (Western), 중식 (Chinese), 일식 (Japanese)."},

    {type:"teach", trg:"양주", src:"Western liquor, whisky", pos:"noun", gender:null,
     note:"Sino-Korean. 洋 (Western) + 酒 (alcohol).\nImported Western spirits like whisky or brandy.",
     example:"A: 양주 한잔 할까요?\nB: 좋아요, 위스키로 주세요.",
     exampleSrc:"A: Shall we have a glass of Western liquor?\nB: Sure, whisky please.",
     funFact:"양주 was once a luxury status symbol in Korea. 양주 bottles at Korean weddings were a traditional gift."},

    {type:"teach", trg:"얕다", src:"to be shallow", pos:"adj", gender:null,
     note:"Native Korean adjective.\nNot deep, physically or figuratively.",
     example:"A: 이 수영장은 좀 얕아.\nB: 아이들한테는 딱 좋겠다.",
     exampleSrc:"A: This swimming pool is a bit shallow.\nB: It would be perfect for children.",
     funFact:"얕보다 (to look down on, to underestimate) uses 얕다 figuratively. Never 사람을 얕보다 in Korean culture."},

    {type:"teach", trg:"어기다", src:"to break (a promise/rule), to violate", pos:"verb", gender:null,
     note:"Native Korean verb.\nFailing to keep a promise or follow a rule.",
     example:"A: 약속을 어기면 안 돼.\nB: 알아, 꼭 지킬게.",
     exampleSrc:"A: You must not break your promise.\nB: I know, I will definitely keep it.",
     funFact:"약속을 어기다 (breaking a promise) is taken very seriously in Korean relationships and business."},

    {type:"fb",
     s:"교통 규칙을 {1} 벌금을 내야 했다.",
     a:["어겨서"],
     opts:["어겨서","어두워서","어려워서","얕아서"],
     hint:"The act of violating or breaking a rule, which led to a fine as punishment.",
     sSrc:"Because I {1} the traffic rules, I had to pay a fine."},

    {type:"teach", trg:"어느덧", src:"before one knows it, already", pos:"adv", gender:null,
     note:"Native Korean adverb.\nTime passing without one noticing.",
     example:"A: 어느덧 벌써 겨울이네.\nB: 시간이 정말 빠르다.",
     exampleSrc:"A: Before we knew it, it is already winter.\nB: Time really flies.",
     funFact:"어느덧 is a beautifully poetic adverb. Korean essays and literature use it to express the passage of time."},

    {type:"teach", trg:"어두워지다", src:"to become dark", pos:"verb", gender:null,
     note:"어둡다 (dark) + -워지다 (become).\nThe gradual onset of darkness.",
     example:"A: 밖이 벌써 어두워졌네.\nB: 빨리 집에 가자.",
     exampleSrc:"A: It has already gotten dark outside.\nB: Let's hurry home.",
     funFact:"어두워지다 pairs with 밝아지다 (to brighten). Korean seasons dramatically affect when it 어두워지다."},

    {type:"teach", trg:"어려워지다", src:"to become difficult", pos:"verb", gender:null,
     note:"어렵다 (difficult) + -워지다 (become).\nA situation getting harder over time.",
     example:"A: 취업이 점점 어려워지고 있어.\nB: 경쟁이 심하니까.",
     exampleSrc:"A: Getting a job is becoming increasingly difficult.\nB: Because the competition is fierce.",
     funFact:"Korean news loves 어려워지다 for economic reporting: 생활이 어려워지다 (life becoming harder) is a common headline."},

    {type:"teach", trg:"어리석다", src:"to be foolish, to be unwise", pos:"adj", gender:null,
     note:"Native Korean adjective.\nLacking wisdom or good judgment.",
     example:"A: 그건 어리석은 판단이었어.\nB: 지금 생각하면 후회돼.",
     exampleSrc:"A: That was a foolish decision.\nB: Thinking about it now, I regret it.",
     funFact:"어리석다 is literary and somewhat formal. In casual speech, Koreans say 바보 같다 (like a fool) instead."},

    {type:"teach", trg:"어린아이", src:"young child, small child", pos:"noun", gender:null,
     note:"어리다 (young) + ㄴ + 아이 (child).\nA child who is still very young.",
     example:"A: 어린아이가 혼자 돌아다니면 위험해.\nB: 부모님이 근처에 있겠지.",
     exampleSrc:"A: It is dangerous for a young child to walk around alone.\nB: The parents must be nearby.",
     funFact:"어린아이 and 어린이 both mean child, but 어린아이 emphasizes youth while 어린이 is more general."},

    {type:"teach", trg:"어린애", src:"kid, little child (informal)", pos:"noun", gender:null,
     note:"어리다 (young) + ㄴ + 애 (kid, informal).\nCasual way to refer to a young child.",
     example:"A: 아직 어린애니까 이해해 줘.\nB: 알았어, 한 번만 봐줄게.",
     exampleSrc:"A: They are still a kid so please understand.\nB: Okay, I will let it go this once.",
     funFact:"어린애 is more casual than 어린아이. Adults sometimes say 어린애처럼 굴다 (to act like a kid) as a mild criticism."},

    {type:"mc",
     q:"'어느덧 봄이 왔다'의 뜻은?",
     opts:["아직 봄이 안 왔다","모르는 사이에 봄이 왔다","갑자기 봄이 왔다","드디어 봄이 왔다"],
     ans:"모르는 사이에 봄이 왔다",
     hint:"This adverb describes time passing gently and unnoticed, as if spring arrived without you realizing."},

    {type:"match", pairs:[
      {trg:"양보하다", src:"to yield"},
      {trg:"어기다", src:"to break a rule"},
      {trg:"어리석다", src:"to be foolish"},
      {trg:"얇다", src:"to be thin"}
    ]}
  ]
};

export default LESSON_13;
