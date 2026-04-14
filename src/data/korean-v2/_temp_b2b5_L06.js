// Korean B2 — Batch 5, Lesson 6: Emergency and Rain
// Words: 비상, 비서, 비우다, 비웃다, 비중, 비추다, 비치다, 비키다, 비타민, 비판, 비판적, 비하다, 비행, 비행장, 빌딩, 빗, 빗물, 빗방울, 빗줄기, 빚

const LESSON_6 = {
  id:"kov2_b2b5_l6", title:"비상과 비판", icon:"🚨", xp:15, board:true,
  steps:[
    {type:"intro", title:"비상과 비판",
     desc:"Learn vocabulary about emergencies, criticism, flight, and rain imagery. These words are common in news reports, workplace conversations, and literary descriptions.",
     goals:["Master 20 words about emergencies, criticism, and weather","Distinguish similar-sounding 비- words with different meanings","Use descriptive rain vocabulary for expressive writing"]},

    {type:"teach", trg:"비상", src:"emergency", pos:"noun", gender:null,
     note:"Sino-Korean. 非 (not) + 常 (ordinary).\nAn extraordinary, urgent situation.",
     example:"A: 비상사태가 선포됐어.\nB: 무슨 일이야? 큰일이야?",
     exampleSrc:"A: A state of emergency was declared.\nB: What happened? Is it serious?",
     funFact:"비상구 (emergency exit) signs are green in Korea, following international standards. Every building must have them."},

    {type:"teach", trg:"비서", src:"secretary, assistant", pos:"noun", gender:null,
     note:"Sino-Korean. 秘 (secret) + 書 (writing).\nSomeone who handles confidential work.",
     example:"A: 사장님 비서에게 일정을 확인해 봐.\nB: 네, 바로 전화할게요.",
     exampleSrc:"A: Check the schedule with the CEO's secretary.\nB: Yes, I will call right away.",
     funFact:"The Korean drama 'What's Wrong with Secretary Kim' (김비서가 왜 그럴까) made this job title famous globally."},

    {type:"teach", trg:"비우다", src:"to empty, to vacate", pos:"verb", gender:null,
     note:"Causative of 비다 (to be empty).\nTo make something empty.",
     example:"A: 방을 비워 주세요. 청소해야 해요.\nB: 네, 짐을 치울게요.",
     exampleSrc:"A: Please vacate the room. We need to clean it.\nB: Okay, I will move my stuff.",
     funFact:"마음을 비우다 (to empty one's mind) is a Buddhist-influenced expression meaning to let go of worries."},

    {type:"teach", trg:"비웃다", src:"to ridicule, to sneer at", pos:"verb", gender:null,
     note:"비 (crooked/wrong) + 웃다 (to laugh).\nTo laugh at someone mockingly.",
     example:"A: 남을 비웃으면 안 돼.\nB: 맞아, 기분이 나쁘잖아.",
     exampleSrc:"A: You should not ridicule others.\nB: Right, it hurts their feelings.",
     funFact:"비웃음 (sneer, mocking laughter) is the noun form. Korean culture strongly discourages 남을 비웃는 것."},

    {type:"teach", trg:"비중", src:"weight, proportion, importance", pos:"noun", gender:null,
     note:"Sino-Korean. 比 (compare) + 重 (heavy).\nThe relative importance or share of something.",
     example:"A: 이 프로젝트에서 마케팅의 비중이 커.\nB: 예산도 그만큼 늘려야겠네.",
     exampleSrc:"A: Marketing has a large proportion in this project.\nB: We should increase the budget accordingly.",
     funFact:"In physics, 비중 means specific gravity. In everyday use, it means how much weight or importance something carries."},

    {type:"fb",
     s:"수출이 경제에서 차지하는 {1}이 매우 크다.",
     a:["비중"],
     opts:["비중","비상","비판","비행"],
     hint:"Which noun means proportion or relative importance within a larger whole?",
     sSrc:"The {1} that exports hold in the economy is very large."},

    {type:"teach", trg:"비추다", src:"to shine, to illuminate, to suggest", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo cast light on, or to hint/suggest.",
     example:"A: 거울에 얼굴을 비춰 봐.\nB: 어디 보자, 괜찮은데?",
     exampleSrc:"A: Try reflecting your face in the mirror.\nB: Let me see, it looks fine?",
     funFact:"비추다 has dual meanings: literal (shine light) and figurative (suggest/hint). Context tells you which."},

    {type:"teach", trg:"비치다", src:"to be reflected, to show through", pos:"verb", gender:null,
     note:"Native Korean verb. Intransitive counterpart of 비추다.\nLight or an image appearing through something.",
     example:"A: 호수에 산이 비치는 게 정말 아름답다.\nB: 사진 찍자, 이 풍경 놓치기 싫어.",
     exampleSrc:"A: The mountain reflected in the lake is truly beautiful.\nB: Let's take a photo, I don't want to miss this scenery.",
     funFact:"비추다 (transitive: to shine on) vs 비치다 (intransitive: to be reflected) is a classic Korean verb pair."},

    {type:"teach", trg:"비키다", src:"to move aside, to step out of the way", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo move to the side to make room.",
     example:"A: 잠깐 비켜 줄래? 지나가야 해.\nB: 아, 미안. 여기 좁구나.",
     exampleSrc:"A: Can you move aside for a moment? I need to pass.\nB: Oh, sorry. It is narrow here.",
     funFact:"비켜! (Move!) is a direct command. It sounds rude unless said urgently. 비켜 주세요 is the polite version."},

    {type:"teach", trg:"비타민", src:"vitamin", pos:"noun", gender:null,
     note:"Loanword from English 'vitamin.'\nNutrients essential for health.",
     example:"A: 비타민 C를 많이 먹어야 감기 예방이 돼.\nB: 과일을 많이 먹으면 되지?",
     exampleSrc:"A: You need to take a lot of vitamin C to prevent colds.\nB: I just need to eat a lot of fruit, right?",
     funFact:"Korea has a massive vitamin supplement market. Pharmacies (약국) display 비타민 prominently near the entrance."},

    {type:"teach", trg:"비판", src:"critique, criticism (analytical)", pos:"noun", gender:null,
     note:"Sino-Korean. 批 (judge) + 判 (decide).\nAnalytical evaluation, not mere blame.",
     example:"A: 건설적인 비판은 환영해.\nB: 좋아, 솔직하게 말할게.",
     exampleSrc:"A: I welcome constructive criticism.\nB: Okay, I will speak honestly.",
     funFact:"비판 (analytical critique) differs from 비난 (blame/condemnation). 비판 can be positive and constructive."},

    {type:"teach", trg:"비판적", src:"critical (in thinking)", pos:"noun", gender:null,
     note:"비판 + 적 (suffix).\nHaving a questioning, analytical mindset.",
     example:"A: 비판적 사고가 중요해.\nB: 맞아, 모든 것을 그냥 받아들이면 안 돼.",
     exampleSrc:"A: Critical thinking is important.\nB: Right, you should not just accept everything.",
     funFact:"비판적 사고 (critical thinking) is emphasized in Korean university education. It is a TOPIK essay keyword."},

    {type:"mc",
     q:"건설적인 의견을 말할 때 적절한 단어는?",
     opts:["비판","비난","비명","비웃음"],
     ans:"비판",
     hint:"Which word means analytical criticism that can be constructive, not just blame or condemnation?"},

    {type:"teach", trg:"비하다", src:"to be compared to, relative to", pos:"verb", gender:null,
     note:"Sino-Korean. 比 (compare) + 하다.\nUsed in the pattern 에 비하면/비해 (compared to).",
     example:"A: 작년에 비해 성적이 많이 올랐어.\nB: 열심히 공부한 보람이 있네.",
     exampleSrc:"A: Compared to last year, my grades went up a lot.\nB: Your hard work paid off.",
     funFact:"에 비해 is one of the most common comparison patterns in Korean, essential for TOPIK writing."},

    {type:"teach", trg:"비행", src:"flight, flying", pos:"noun", gender:null,
     note:"Sino-Korean. 飛 (fly) + 行 (go).\nThe act of flying through the air.",
     example:"A: 비행 시간이 얼마나 걸려?\nB: 서울에서 도쿄까지 두 시간 정도야.",
     exampleSrc:"A: How long is the flight time?\nB: It is about two hours from Seoul to Tokyo.",
     funFact:"비행 also means 'misconduct' with different Hanja (非行). 청소년 비행 means juvenile delinquency."},

    {type:"teach", trg:"비행장", src:"airfield, airport", pos:"noun", gender:null,
     note:"비행 (flight) + 장 (place).\nA place where aircraft take off and land.",
     example:"A: 근처에 군용 비행장이 있어.\nB: 그래서 비행기 소리가 자주 들리는구나.",
     exampleSrc:"A: There is a military airfield nearby.\nB: So that is why we often hear airplane sounds.",
     funFact:"비행장 typically refers to smaller airfields. Large commercial airports use 공항 (空港) instead."},

    {type:"teach", trg:"빌딩", src:"building (tall)", pos:"noun", gender:null,
     note:"Loanword from English 'building.'\nUsually refers to a tall commercial building.",
     example:"A: 저 빌딩이 몇 층이야?\nB: 63층이야. 63빌딩이라고 해.",
     exampleSrc:"A: How many floors is that building?\nB: It is 63 floors. It is called the 63 Building.",
     funFact:"The 63 Building (63빌딩) on Yeouido was Seoul's tallest for decades. Now Lotte World Tower holds the record."},

    {type:"teach", trg:"빗", src:"comb", pos:"noun", gender:null,
     note:"Native Korean word.\nA tool for grooming hair.",
     example:"A: 빗 좀 빌려줄래?\nB: 여기, 이거 써.",
     exampleSrc:"A: Can you lend me a comb?\nB: Here, use this one.",
     funFact:"Traditional Korean combs (참빗) were made from boxwood and were considered precious personal items."},

    {type:"teach", trg:"빗물", src:"rainwater", pos:"noun", gender:null,
     note:"빗 (rain, variant of 비) + 물 (water).\nWater from rainfall.",
     example:"A: 빗물이 새고 있어.\nB: 지붕을 수리해야겠다.",
     exampleSrc:"A: Rainwater is leaking.\nB: We need to repair the roof.",
     funFact:"In old Korea, 빗물 was collected in large jars (항아리) and used for washing. Some rural areas still do this."},

    {type:"teach", trg:"빗방울", src:"raindrop", pos:"noun", gender:null,
     note:"빗 (rain) + 방울 (drop).\nIndividual drops of rain.",
     example:"A: 빗방울이 떨어지기 시작했어.\nB: 우산 가져왔어?",
     exampleSrc:"A: Raindrops have started falling.\nB: Did you bring an umbrella?",
     funFact:"Korean has beautiful rain vocabulary: 빗방울 (raindrop), 빗줄기 (rain streak), 빗소리 (sound of rain)."},

    {type:"teach", trg:"빗줄기", src:"streak of rain, downpour line", pos:"noun", gender:null,
     note:"빗 (rain) + 줄기 (stem/line).\nVisible lines of heavy rain falling.",
     example:"A: 빗줄기가 점점 굵어지고 있어.\nB: 폭우가 오나 봐.",
     exampleSrc:"A: The rain streaks are getting thicker.\nB: A heavy rain must be coming.",
     funFact:"빗줄기가 굵다 (the rain lines are thick) is a uniquely Korean way to describe heavy rain."},

    {type:"teach", trg:"빚", src:"debt, money owed", pos:"noun", gender:null,
     note:"Native Korean word.\nMoney borrowed that must be repaid.",
     example:"A: 빚을 빨리 갚고 싶어.\nB: 조금씩이라도 갚아 나가면 돼.",
     exampleSrc:"A: I want to pay off my debt quickly.\nB: Just pay it back little by little.",
     funFact:"빚 (native Korean) and 부채 (Sino-Korean) both mean debt. 빚 is more colloquial, 부채 more formal/financial."},

    {type:"fb",
     s:"굵은 {1}가 창문을 두드리고 있다.",
     a:["빗줄기"],
     opts:["빗줄기","빗방울","빗물","빗"],
     hint:"Which word describes thick, visible lines of heavy rain, suggesting a downpour?",
     sSrc:"Thick {1} are beating against the window."},

    {type:"match", pairs:[
      {trg:"비상", src:"emergency"},
      {trg:"비판", src:"critique"},
      {trg:"빗물", src:"rainwater"},
      {trg:"빚", src:"debt"}
    ]}
  ]
};
export default LESSON_6;
