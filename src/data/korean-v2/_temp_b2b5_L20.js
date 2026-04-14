// Korean B2 — Batch 5, Lesson 20: Effort, Capital, and Demand
// Words: 쇼, 수고, 수고하다, 수년, 수단, 수도, 수도권, 수도꼭지, 수돗물, 수동적, 수리하다, 수만, 수면, 수명, 수백, 수석, 수시로, 수십, 수없이, 수염, 수요

const LESSON_20 = {
  id:"kov2_b2b5_l20", title:"수고와 수요", icon:"💧", xp:15, board:true,
  steps:[
    {type:"intro", title:"수고와 수요",
     desc:"Learn vocabulary about effort, water infrastructure, numbers, and demand. This lesson covers essential words for workplace courtesy, urban life, and economics.",
     goals:["Master 21 words about effort, water, numbers, and demand","Understand Sino-Korean compounds with 水 (water) and 數 (number)","Use workplace courtesy expressions and economic vocabulary"]},

    {type:"teach", trg:"수", src:"number, way, method (bound noun)", pos:"noun", gender:null,
     note:"Sino-Korean. 數 (number) or native bound noun.\nUsed in patterns like -ㄹ 수 있다 (can do).",
     example:"A: 방법이 없어? 다른 수가 있을 텐데.\nB: 한 가지 수가 있기는 해.",
     exampleSrc:"A: Is there no way? There must be another method.\nB: There is one way, actually.",
     funFact:"수 as a bound noun in -ㄹ 수 있다/없다 (can/cannot) is one of the most essential Korean grammar patterns."},

    {type:"teach", trg:"쇼", src:"show", pos:"noun", gender:null,
     note:"Loanword from English 'show.'\nA performance or entertainment event.",
     example:"A: 오늘 TV 쇼 봤어?\nB: 응, 진짜 재미있었어.",
     exampleSrc:"A: Did you watch the TV show today?\nB: Yes, it was really fun.",
     funFact:"예능 쇼 (variety show) is a massive genre in Korea. 런닝맨, 나 혼자 산다, 놀면 뭐하니 are iconic examples."},

    {type:"teach", trg:"수고", src:"effort, hard work, trouble", pos:"noun", gender:null,
     note:"Sino-Korean. 受 (receive) + 苦 (suffering).\nEffort or trouble taken for a task.",
     example:"A: 수고 많으셨습니다.\nB: 감사합니다, 수고하셨어요.",
     exampleSrc:"A: Thank you for your hard work.\nB: Thank you, you worked hard too.",
     funFact:"수고하셨습니다 and 수고하세요 are essential Korean workplace phrases, said when parting or thanking colleagues."},

    {type:"teach", trg:"수고하다", src:"to work hard, to make effort", pos:"verb", gender:null,
     note:"수고 + 하다.\nTo put in effort or labor.",
     example:"A: 오늘도 수고했어.\nB: 너도 수고했어, 내일 보자.",
     exampleSrc:"A: You worked hard today too.\nB: You too, see you tomorrow.",
     funFact:"수고하세요 (keep up the good work) is said to someone who continues working as you leave. Not used to superiors."},

    {type:"teach", trg:"수년", src:"several years", pos:"noun", gender:null,
     note:"Sino-Korean. 數 (several) + 年 (year).\nA period of multiple years.",
     example:"A: 수년 동안 이 분야를 연구했어.\nB: 경험이 풍부하시겠다.",
     exampleSrc:"A: I researched this field for several years.\nB: You must have rich experience.",
     funFact:"수년 is vague (3-9 years). For precision, Koreans specify: 3년 (3 years), 5년 (5 years), 10년 (10 years)."},

    {type:"teach", trg:"수단", src:"means, method, measure", pos:"noun", gender:null,
     note:"Sino-Korean. 手 (hand) + 段 (step).\nA way of achieving something.",
     example:"A: 목적을 위해 어떤 수단이든 쓸 거야?\nB: 아니, 정당한 수단만 사용할 거야.",
     exampleSrc:"A: Will you use any means for your goal?\nB: No, I will only use legitimate means.",
     funFact:"수단과 방법을 가리지 않다 (to not distinguish between means and methods) means to use any means necessary."},

    {type:"fb",
     s:"오늘 하루도 {1} 많으셨습니다.",
     a:["수고"],
     opts:["수고","수단","수면","수요"],
     hint:"Which word means effort or hard work, used in the most common Korean workplace farewell phrase?",
     sSrc:"Thank you for all your {1} today as well."},

    {type:"teach", trg:"수도", src:"capital city, waterworks", pos:"noun", gender:null,
     note:"Sino-Korean. 首都 (head city) or 水道 (water path).\nThe main city of a country, or water supply system.",
     example:"A: 한국의 수도는 서울이야.\nB: 맞아, 인구가 천만 명이 넘지.",
     exampleSrc:"A: The capital of Korea is Seoul.\nB: Right, the population exceeds ten million.",
     funFact:"수도 means both 'capital city' (首都) and 'water supply' (水道). 수도꼭지 uses the water meaning."},

    {type:"teach", trg:"수도권", src:"capital region, metropolitan area", pos:"noun", gender:null,
     note:"수도 (capital) + 권 (sphere).\nThe area surrounding the capital city.",
     example:"A: 수도권에 인구가 집중되어 있어.\nB: 전체 인구의 절반이 살고 있지.",
     exampleSrc:"A: The population is concentrated in the capital region.\nB: Half the entire population lives there.",
     funFact:"Korea's 수도권 (Seoul, Incheon, Gyeonggi) holds about 26 million people, half of the nation's population."},

    {type:"teach", trg:"수도꼭지", src:"faucet, tap", pos:"noun", gender:null,
     note:"수도 (waterworks) + 꼭지 (tip/spout).\nThe valve that controls water flow.",
     example:"A: 수도꼭지에서 물이 새고 있어.\nB: 수리 기사를 불러야겠다.",
     exampleSrc:"A: Water is leaking from the faucet.\nB: We need to call a repair technician.",
     funFact:"수도꼭지를 잠그다 (to close the faucet) is a daily Korean phrase. Water conservation is emphasized in schools."},

    {type:"teach", trg:"수돗물", src:"tap water", pos:"noun", gender:null,
     note:"수도 (waterworks) + 물 (water) with ㅅ insertion.\nWater from the municipal supply.",
     example:"A: 한국에서 수돗물을 마셔도 돼?\nB: 안전하지만 대부분 정수기를 써.",
     exampleSrc:"A: Can you drink tap water in Korea?\nB: It is safe but most people use water purifiers.",
     funFact:"Seoul's tap water is marketed as '아리수' (Arisu). Despite being safe, most Koreans prefer filtered water."},

    {type:"teach", trg:"수동적", src:"passive", pos:"noun", gender:null,
     note:"Sino-Korean. 受動 (receiving motion) + 的.\nLetting things happen rather than taking initiative.",
     example:"A: 너무 수동적으로 행동하지 마.\nB: 알겠어, 더 적극적으로 할게.",
     exampleSrc:"A: Do not act too passively.\nB: Got it, I will be more proactive.",
     funFact:"수동적 vs 능동적 (passive vs active) is an important grammar concept too: 수동태 (passive voice)."},

    {type:"teach", trg:"수리하다", src:"to repair, to fix", pos:"verb", gender:null,
     note:"Sino-Korean. 修理 (fix) + 하다.\nRestoring something to working condition.",
     example:"A: 컴퓨터를 수리해야 해.\nB: 서비스 센터에 가져가 봐.",
     exampleSrc:"A: I need to get my computer repaired.\nB: Try taking it to the service center.",
     funFact:"수리비 (repair cost) can be expensive. 자가 수리 (DIY repair) is growing with YouTube tutorials in Korea."},

    {type:"teach", trg:"수만", src:"tens of thousands", pos:"noun", gender:null,
     note:"Sino-Korean. 數 (several) + 萬 (ten thousand).\nTens of thousands, a very large number.",
     example:"A: 수만 명이 시위에 참가했어.\nB: 그렇게 많은 사람이?",
     exampleSrc:"A: Tens of thousands of people participated in the protest.\nB: That many people?",
     funFact:"수만, 수백, 수십 (tens of thousands, hundreds, tens) are precise Korean ways to express approximate large numbers."},

    {type:"teach", trg:"수면", src:"sleep, water surface", pos:"noun", gender:null,
     note:"Sino-Korean. 睡眠 (sleep) or 水面 (water surface).\nTwo meanings depending on context.",
     example:"A: 수면 부족이 건강에 안 좋아.\nB: 매일 7시간은 자야 해.",
     exampleSrc:"A: Lack of sleep is bad for health.\nB: You should sleep at least 7 hours every day.",
     funFact:"수면 장애 (sleep disorder) affects many Koreans. 수면제 (sleeping pill) use has been increasing."},

    {type:"teach", trg:"수명", src:"lifespan, life expectancy", pos:"noun", gender:null,
     note:"Sino-Korean. 壽 (longevity) + 命 (life).\nThe expected duration of life.",
     example:"A: 한국인의 평균 수명이 늘었어.\nB: 의료 기술이 발전한 덕분이지.",
     exampleSrc:"A: The average lifespan of Koreans has increased.\nB: It is thanks to advances in medical technology.",
     funFact:"Korea's average 수명 is among the world's highest at 83+. 제품 수명 means the lifespan of a product."},

    {type:"mc",
     q:"한국 인구의 약 절반이 사는 지역을 무엇이라고 하는가?",
     opts:["수도권","북부","서부","수도"],
     ans:"수도권",
     hint:"Which word means the capital metropolitan area, the region surrounding Seoul?"},

    {type:"teach", trg:"수백", src:"hundreds", pos:"noun", gender:null,
     note:"Sino-Korean. 數 (several) + 百 (hundred).\nSeveral hundred, a large number.",
     example:"A: 수백 명이 줄을 서 있었어.\nB: 인기가 대단하네.",
     exampleSrc:"A: Hundreds of people were standing in line.\nB: The popularity is amazing.",
     funFact:"Korean number approximations follow a pattern: 수십 (tens), 수백 (hundreds), 수천 (thousands), 수만 (ten-thousands)."},

    {type:"teach", trg:"수석", src:"top, chief, first place", pos:"noun", gender:null,
     note:"Sino-Korean. 首 (head) + 席 (seat).\nThe highest-ranking position.",
     example:"A: 수석으로 졸업했어.\nB: 대단하다! 축하해.",
     exampleSrc:"A: I graduated as valedictorian.\nB: Impressive! Congratulations.",
     funFact:"수석 졸업 (graduating first) is a major achievement. 수석 비서관 means chief secretary (a powerful government role)."},

    {type:"teach", trg:"수시로", src:"at any time, frequently, from time to time", pos:"adv", gender:null,
     note:"Sino-Korean. 隨時 (following time).\nDoing something whenever the opportunity arises.",
     example:"A: 물을 수시로 마셔야 해.\nB: 알겠어, 물병을 가지고 다닐게.",
     exampleSrc:"A: You should drink water frequently.\nB: Got it, I will carry a water bottle.",
     funFact:"수시 (随時) also refers to the rolling admissions system in Korean universities, as opposed to 정시 (regular admissions)."},

    {type:"teach", trg:"수십", src:"tens, dozens", pos:"noun", gender:null,
     note:"Sino-Korean. 數 (several) + 十 (ten).\nSeveral tens, meaning dozens.",
     example:"A: 수십 번 연락했는데 안 받아.\nB: 바쁜가 보다.",
     exampleSrc:"A: I contacted them dozens of times but they did not answer.\nB: They must be busy.",
     funFact:"수십 년 (decades) and 수십 명 (dozens of people) are very common in Korean news and everyday speech."},

    {type:"teach", trg:"수없이", src:"countless times, innumerably", pos:"adv", gender:null,
     note:"수 (number) + 없이 (without).\nSo many times it cannot be counted.",
     example:"A: 수없이 노력했어.\nB: 그 노력이 결국 결실을 맺을 거야.",
     exampleSrc:"A: I made efforts countless times.\nB: That effort will eventually bear fruit.",
     funFact:"수없이 많다 (to be innumerably many) emphasizes overwhelming quantity. More literary than 많이."},

    {type:"teach", trg:"수염", src:"beard, mustache, whiskers", pos:"noun", gender:null,
     note:"Sino-Korean. 鬚 (beard) + 髥 (whiskers).\nFacial hair.",
     example:"A: 수염을 기르고 있어?\nB: 응, 좀 멋있어 보이지 않아?",
     exampleSrc:"A: Are you growing a beard?\nB: Yes, don't I look a bit cool?",
     funFact:"Traditionally, Korean men grew beards as a sign of wisdom. Today, most Korean men shave daily for the clean look."},

    {type:"teach", trg:"수요", src:"demand (economic)", pos:"noun", gender:null,
     note:"Sino-Korean. 需 (need) + 要 (essential).\nThe desire and ability to purchase goods.",
     example:"A: 반도체에 대한 수요가 늘고 있어.\nB: 공급이 따라가지 못하고 있어.",
     exampleSrc:"A: Demand for semiconductors is increasing.\nB: Supply cannot keep up.",
     funFact:"수요와 공급 (supply and demand) is a fundamental economics concept. 수요일 (Wednesday) uses different Hanja (水曜)."},

    {type:"fb",
     s:"경제학의 기본은 {1}와 공급의 법칙이다.",
     a:["수요"],
     opts:["수요","수고","수면","수단"],
     hint:"Which economic term means demand, forming the famous pair with supply in economics?",
     sSrc:"The foundation of economics is the law of {1} and supply."},

    {type:"match", pairs:[
      {trg:"수고", src:"effort/hard work"},
      {trg:"수도권", src:"capital region"},
      {trg:"수명", src:"lifespan"},
      {trg:"수요", src:"demand"}
    ]}
  ]
};
export default LESSON_20;
