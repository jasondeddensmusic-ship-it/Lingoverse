// Korean B2 — Batch 5, Lesson 5: Crowds, Rain, and Criticism
// Words: 붐비다, 붙들다, 붙잡다, 붙잡히다, 브랜드, 블라우스, 비, 비극, 비기다, 비난, 비닐, 비닐봉지, 비다, 비둘기, 비롯되다, 비롯하다, 비만, 비명, 비바람, 비비다

const LESSON_5 = {
  id:"kov2_b2b5_l5", title:"비와 비난", icon:"🌧️", xp:15, board:true,
  steps:[
    {type:"intro", title:"비와 비난",
     desc:"Learn words about crowds, grabbing, rain, tragedy, and criticism. This lesson builds your ability to describe weather, emotional reactions, and social commentary.",
     goals:["Master 20 words related to crowds, weather, and criticism","Understand passive verb pairs like 붙잡다/붙잡히다","Use descriptive vocabulary for weather and emotions"]},

    {type:"teach", trg:"붐비다", src:"to be crowded, to be packed", pos:"verb", gender:null,
     note:"Native Korean verb.\nDescribes a place full of people.",
     example:"A: 주말에 명동이 엄청 붐벼.\nB: 평일에 가는 게 낫겠다.",
     exampleSrc:"A: Myeongdong is incredibly crowded on weekends.\nB: It would be better to go on a weekday.",
     funFact:"Seoul's subway during rush hour is famously crowded. Koreans say 지하철이 붐비다 as a daily understatement."},

    {type:"teach", trg:"붙들다", src:"to hold onto, to grab", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo seize and keep hold of someone or something.",
     example:"A: 아이를 꼭 붙들고 있어야 해.\nB: 알겠어, 놓치지 않을게.",
     exampleSrc:"A: You need to hold onto the child tightly.\nB: Got it, I will not let go.",
     funFact:"붙들다 implies holding on firmly, not just touching. It suggests effort to prevent escape or falling."},

    {type:"teach", trg:"붙잡다", src:"to seize, to catch, to grab hold of", pos:"verb", gender:null,
     note:"붙다 (stick) + 잡다 (grab).\nTo catch and hold firmly.",
     example:"A: 경찰이 도둑을 붙잡았어.\nB: 다행이다, 빨리 잡혔네.",
     exampleSrc:"A: The police caught the thief.\nB: That is a relief, they were caught quickly.",
     funFact:"붙잡다 is stronger than 잡다 alone. It suggests not just catching but firmly restraining."},

    {type:"teach", trg:"붙잡히다", src:"to be caught, to be seized", pos:"verb", gender:null,
     note:"붙잡다 + 히다 (passive).\nThe passive form: being caught by someone.",
     example:"A: 결국 범인이 붙잡혔대.\nB: 도망친 지 일주일 만이네.",
     exampleSrc:"A: The criminal was finally caught, they say.\nB: It has been a week since they escaped.",
     funFact:"Korean passive verbs often end in -히다, -리다, -기다, or -이다. Mastering these is key for B2."},

    {type:"mc",
     q:"경찰이 범인을 잡았다는 뉴스에서 적절한 표현은?",
     opts:["범인이 붙잡혔다","범인이 붙들었다","범인이 붙잡았다","범인이 붐볐다"],
     ans:"범인이 붙잡혔다",
     hint:"The criminal is the one BEING caught, so you need the passive form of the verb meaning to seize."},

    {type:"teach", trg:"브랜드", src:"brand", pos:"noun", gender:null,
     note:"Loanword from English 'brand.'\nA commercial brand or label.",
     example:"A: 어떤 브랜드를 좋아해?\nB: 나는 한국 브랜드를 주로 써.",
     exampleSrc:"A: Which brand do you like?\nB: I mainly use Korean brands.",
     funFact:"Korea has globally successful brands: Samsung, Hyundai, LG. Koreans call them K-브랜드."},

    {type:"teach", trg:"블라우스", src:"blouse", pos:"noun", gender:null,
     note:"Loanword from English 'blouse.'\nA women's upper garment.",
     example:"A: 이 블라우스 예쁘지 않아?\nB: 응, 색깔이 좋다.",
     exampleSrc:"A: Isn't this blouse pretty?\nB: Yes, the color is nice.",
     funFact:"Korean fashion vocabulary borrows heavily from English and French: 블라우스, 코트, 스카프."},

    {type:"teach", trg:"비", src:"rain", pos:"noun", gender:null,
     note:"Native Korean word.\nPrecipitation falling from clouds.",
     example:"A: 비가 올 것 같아.\nB: 우산 챙겨 가자.",
     exampleSrc:"A: It looks like it is going to rain.\nB: Let's bring an umbrella.",
     funFact:"Korea has a distinct rainy season (장마) in July. 비 combines with many words: 비바람, 빗물, 빗방울."},

    {type:"teach", trg:"비극", src:"tragedy", pos:"noun", gender:null,
     note:"Sino-Korean. 悲 (sad) + 劇 (drama).\nA tragic event or theatrical tragedy.",
     example:"A: 전쟁은 인류의 비극이야.\nB: 맞아, 반복되지 않아야 해.",
     exampleSrc:"A: War is a tragedy of humankind.\nB: Right, it must not be repeated.",
     funFact:"The opposite is 희극 (comedy). Both terms come from classical Greek theater terminology via Chinese."},

    {type:"teach", trg:"비기다", src:"to tie, to draw (in a game)", pos:"verb", gender:null,
     note:"Native Korean verb.\nWhen neither side wins.",
     example:"A: 축구 경기 결과가 어떻게 됐어?\nB: 2대 2로 비겼어.",
     exampleSrc:"A: What was the soccer game result?\nB: It was a 2-to-2 tie.",
     funFact:"In Korean sports reporting, 비기다 is used for draws, while 무승부 (no win or loss) is the formal term."},

    {type:"teach", trg:"비난", src:"criticism, blame, condemnation", pos:"noun", gender:null,
     note:"Sino-Korean. 非 (wrong) + 難 (difficult).\nPublicly finding fault with someone.",
     example:"A: 정치인이 국민의 비난을 받고 있어.\nB: 그럴 만한 이유가 있겠지.",
     exampleSrc:"A: The politician is receiving public criticism.\nB: There must be a good reason for it.",
     funFact:"비난 is stronger than 비판 (critique). 비난 implies blame, while 비판 can be constructive."},

    {type:"teach", trg:"비닐", src:"vinyl, plastic (material)", pos:"noun", gender:null,
     note:"Loanword from English 'vinyl.'\nUsed broadly to mean plastic material.",
     example:"A: 비닐을 줄여야 환경을 지킬 수 있어.\nB: 맞아, 장바구니를 가져다녀야지.",
     exampleSrc:"A: We can protect the environment by reducing plastic.\nB: Right, I should carry a shopping bag.",
     funFact:"In Korea, 비닐 broadly refers to thin plastic, not just vinyl. 비닐하우스 means greenhouse (plastic house)."},

    {type:"teach", trg:"비닐봉지", src:"plastic bag", pos:"noun", gender:null,
     note:"비닐 (vinyl/plastic) + 봉지 (bag).\nA plastic shopping bag.",
     example:"A: 비닐봉지 대신 에코백을 사용하세요.\nB: 네, 이미 가지고 왔어요.",
     exampleSrc:"A: Please use an eco-bag instead of a plastic bag.\nB: Yes, I already brought one.",
     funFact:"Korea banned free plastic bags in supermarkets in 2019. 비닐봉지 now costs around 100-500 won each."},

    {type:"fb",
     s:"마트에서 {1}를 받으려면 돈을 내야 해요.",
     a:["비닐봉지"],
     opts:["비닐봉지","블라우스","브랜드","비둘기"],
     hint:"Which compound noun means plastic bag, the kind you pay for at Korean supermarkets?",
     sSrc:"To get a {1} at the supermarket, you have to pay."},

    {type:"teach", trg:"비다", src:"to be empty, to be vacant", pos:"verb", gender:null,
     note:"Native Korean verb.\nDescribes something with nothing inside.",
     example:"A: 이 자리 비어 있어요?\nB: 네, 앉으세요.",
     exampleSrc:"A: Is this seat empty?\nB: Yes, please sit down.",
     funFact:"빈방 (empty room), 빈자리 (empty seat), 빈손 (empty hands) are all common compounds using 비다."},

    {type:"teach", trg:"비둘기", src:"pigeon, dove", pos:"noun", gender:null,
     note:"Native Korean word.\nThe common city bird.",
     example:"A: 공원에 비둘기가 많다.\nB: 먹이를 주는 사람이 많아서 그래.",
     exampleSrc:"A: There are many pigeons in the park.\nB: It is because many people feed them.",
     funFact:"In Korea, 비둘기 are both loved and considered a nuisance. Some cities have campaigns to stop feeding them."},

    {type:"teach", trg:"비롯되다", src:"to originate from, to stem from", pos:"verb", gender:null,
     note:"비롯하다 + 되다 (passive).\nSomething having its origin in something else.",
     example:"A: 이 문제는 의사소통 부족에서 비롯됐어.\nB: 그러니까 대화를 더 많이 해야 해.",
     exampleSrc:"A: This problem stems from a lack of communication.\nB: So we need to talk more.",
     funFact:"에서 비롯되다 is a formal pattern commonly used in essays and news to trace causes."},

    {type:"teach", trg:"비롯하다", src:"to begin with, starting from", pos:"verb", gender:null,
     note:"Native Korean verb.\nUsed in the pattern 을/를 비롯하여 (starting with, including).",
     example:"A: 한국을 비롯하여 여러 나라가 참가했어.\nB: 몇 개국이나 참가한 거야?",
     exampleSrc:"A: Starting with Korea, many countries participated.\nB: How many countries participated?",
     funFact:"을/를 비롯하여 is a TOPIK staple. It lists a primary example before expanding to others."},

    {type:"teach", trg:"비만", src:"obesity", pos:"noun", gender:null,
     note:"Sino-Korean. 肥 (fat) + 滿 (full).\nThe medical condition of being overweight.",
     example:"A: 소아 비만이 늘고 있대.\nB: 운동 부족과 식습관 때문이래.",
     exampleSrc:"A: Childhood obesity is increasing, they say.\nB: They say it is due to lack of exercise and eating habits.",
     funFact:"Korea has a lower obesity rate than most developed nations, but 비만율 (obesity rate) is rising in younger groups."},

    {type:"teach", trg:"비명", src:"scream, shriek", pos:"noun", gender:null,
     note:"Sino-Korean. 悲 (sad) + 鳴 (cry out).\nA loud cry of fear or pain.",
     example:"A: 갑자기 비명이 들렸어.\nB: 무슨 일이야? 괜찮아?",
     exampleSrc:"A: A scream was suddenly heard.\nB: What happened? Are you okay?",
     funFact:"비명을 지르다 (to let out a scream) is the standard collocation. Also used for screams of excitement."},

    {type:"teach", trg:"비바람", src:"rain and wind, driving rain", pos:"noun", gender:null,
     note:"비 (rain) + 바람 (wind).\nA storm with both rain and wind.",
     example:"A: 비바람이 심하니까 외출하지 마.\nB: 알겠어, 집에 있을게.",
     exampleSrc:"A: The rain and wind are severe, so do not go out.\nB: Okay, I will stay home.",
     funFact:"Korean weather compounds are poetic: 비바람 (rain-wind), 눈보라 (snow-blizzard), 안개비 (fog-rain)."},

    {type:"teach", trg:"비비다", src:"to rub, to mix by rubbing", pos:"verb", gender:null,
     note:"Native Korean verb.\nRubbing surfaces together, or mixing by hand.",
     example:"A: 비빔밥은 잘 비벼야 맛있어.\nB: 참기름도 넣어야지.",
     exampleSrc:"A: Bibimbap is delicious when you mix it well.\nB: You also need to add sesame oil.",
     funFact:"비빔밥 literally means 'mixed rice.' The 비빔 comes from 비비다 (to mix by rubbing/stirring)."},

    {type:"mc",
     q:"비빔밥을 만들 때 밥과 재료를 어떻게 하는가?",
     opts:["비빈다","비난한다","비긴다","비운다"],
     ans:"비빈다",
     hint:"Which verb means to mix by rubbing, the key action when preparing Korea's famous mixed rice bowl?"},

    {type:"match", pairs:[
      {trg:"비극", src:"tragedy"},
      {trg:"비난", src:"criticism"},
      {trg:"비명", src:"scream"},
      {trg:"비만", src:"obesity"}
    ]}
  ]
};
export default LESSON_5;
