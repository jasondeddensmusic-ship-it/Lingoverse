// Korean B2 — Batch 3, Lesson 12: Rights and Returning Home
// Words: 권리, 권위, 권투, 귀가, 귀가하다, 귀국, 귀국하다, 귀신, 귀중하다, 귀찮다, 귀하다, 귓속, 규모, 규정, 규칙적, 균형, 귤, 그간, 그나마, 그녀

const LESSON_12 = {
  id:"kov2_b2b3_l12", title:"권리와 귀환", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"권리와 귀환",
     desc:"Learn vocabulary about rights, returning home, and personal attributes. These words cover legal, emotional, and everyday contexts essential for B2 proficiency.",
     goals:["Master 20 words about rights, homecoming, and personal qualities","Understand the 귀 (return/precious) word family","Express value judgments and regulations naturally"]},

    {type:"teach", trg:"권리", src:"right, entitlement", pos:"noun", gender:null,
     note:"Sino-Korean. 權 (power) + 利 (benefit).\nA legal or moral entitlement.",
     example:"A: 모든 사람에게 교육받을 권리가 있어.\nB: 맞아, 기본적인 인권이지.",
     exampleSrc:"A: Everyone has the right to education.\nB: Right, it is a basic human right.",
     funFact:"From Hanja 權利. 인권 (human rights), 시민권 (civil rights), 투표권 (voting rights) all use the 권 root."},

    {type:"teach", trg:"권위", src:"authority, prestige", pos:"noun", gender:null,
     note:"Sino-Korean. 權 (power) + 威 (dignity).\nRecognized expertise or commanding respect.",
     example:"A: 그 교수님은 이 분야의 권위자야.\nB: 논문을 많이 쓰신 분이지?",
     exampleSrc:"A: That professor is an authority in this field.\nB: They have written many papers, right?",
     funFact:"From Hanja 權威. 권위적 (authoritarian) has a negative connotation, while 권위 있는 (authoritative) is positive."},

    {type:"teach", trg:"권투", src:"boxing", pos:"noun", gender:null,
     note:"Sino-Korean. 拳 (fist) + 鬪 (fight).\nThe sport of fighting with fists.",
     example:"A: 권투를 배워 보고 싶어.\nB: 체육관에 권투 수업이 있어.",
     exampleSrc:"A: I want to try learning boxing.\nB: The gym has boxing classes.",
     funFact:"From Hanja 拳鬪. Korea has produced several world boxing champions. The word literally means 'fist fighting.'"},

    {type:"teach", trg:"귀가", src:"returning home", pos:"noun", gender:null,
     note:"Sino-Korean. 歸 (return) + 家 (home).\nThe act of going back home.",
     example:"A: 늦은 밤 귀가할 때 조심해.\nB: 걱정 마, 택시 타고 갈게.",
     exampleSrc:"A: Be careful when returning home late at night.\nB: Do not worry, I will take a taxi.",
     funFact:"From Hanja 歸家. 안전 귀가 (safe return home) campaigns are common in Korean cities for late-night safety."},

    {type:"teach", trg:"귀가하다", src:"to return home, to go home", pos:"verb", gender:null,
     note:"귀가 (returning home) + 하다 (to do).\nThe formal verb for going back home.",
     example:"A: 몇 시에 귀가할 거야?\nB: 9시쯤 귀가할 예정이야.",
     exampleSrc:"A: What time will you return home?\nB: I plan to return home around 9.",
     funFact:"More formal than 집에 가다. Used in news reports and official announcements about people's movements."},

    {type:"mc",
     q:"'권리'와 반대 개념에 가장 가까운 것은?",
     opts:["의무","권위","규모","균형"],
     ans:"의무",
     hint:"If a right is something you are entitled to receive, the opposite is something you are obligated to do."},

    {type:"teach", trg:"귀국", src:"returning to one's country", pos:"noun", gender:null,
     note:"Sino-Korean. 歸 (return) + 國 (country).\nComing back to one's home country.",
     example:"A: 유학 끝나고 귀국할 거야?\nB: 응, 내년에 귀국해.",
     exampleSrc:"A: Will you return to Korea after studying abroad?\nB: Yes, I will return next year.",
     funFact:"From Hanja 歸國. The 귀 character always implies returning to where you belong: 귀가 (home), 귀국 (country)."},

    {type:"teach", trg:"귀국하다", src:"to return to one's country", pos:"verb", gender:null,
     note:"귀국 (returning home) + 하다 (to do).\nTo come back to one's homeland.",
     example:"A: 친구가 미국에서 귀국했어.\nB: 오랜만에 만나겠네!",
     exampleSrc:"A: My friend returned from America.\nB: You must be meeting after a long time!",
     funFact:"귀국하다 implies returning to your own country. For traveling to another country, 입국하다 (enter a country) is used."},

    {type:"teach", trg:"귀신", src:"ghost, spirit", pos:"noun", gender:null,
     note:"Sino-Korean. 鬼 (ghost) + 神 (spirit).\nA supernatural being, often of the dead.",
     example:"A: 귀신을 믿어?\nB: 아니, 하지만 무서운 이야기는 좋아해.",
     exampleSrc:"A: Do you believe in ghosts?\nB: No, but I like scary stories.",
     funFact:"From Hanja 鬼神. Korean ghost lore features 처녀귀신 (maiden ghost) in white hanbok, a staple of horror movies."},

    {type:"teach", trg:"귀중하다", src:"to be precious, to be valuable", pos:"adj", gender:null,
     note:"Sino-Korean. 貴 (precious) + 重 (heavy/important).\nOf great value or importance.",
     example:"A: 이것은 매우 귀중한 자료야.\nB: 잘 보관해야겠다.",
     exampleSrc:"A: This is very precious material.\nB: We should store it carefully.",
     funFact:"From Hanja 貴重. 귀중품 (valuables) is the word on lockers at Korean spas and gyms."},

    {type:"fb",
     s:"이 문서는 매우 {1}한 역사 자료입니다.",
     a:["귀중"],
     opts:["귀중","귀찮","귀가","규칙"],
     hint:"This word describes something of great importance and value that must be preserved.",
     sSrc:"This document is a very {1} historical resource."},

    {type:"teach", trg:"귀찮다", src:"to be bothersome, to be annoying", pos:"adj", gender:null,
     note:"Native Korean adjective.\nFeeling that something is tedious or troublesome.",
     example:"A: 설거지하기 귀찮아.\nB: 나도! 식기 세척기가 있었으면 좋겠다.",
     exampleSrc:"A: Doing the dishes is such a bother.\nB: Same! I wish we had a dishwasher.",
     funFact:"One of the most commonly used adjectives by young Koreans. 귀찮아 is practically a lifestyle word."},

    {type:"teach", trg:"귀하다", src:"to be precious, to be noble, to be rare", pos:"adj", gender:null,
     note:"Sino-Korean root. 貴 (precious).\nDescribes something of high status or rare value.",
     example:"A: 이 약초는 매우 귀한 것이야.\nB: 그래서 가격이 비싼 거구나.",
     exampleSrc:"A: This medicinal herb is very rare.\nB: That is why it is expensive.",
     funFact:"귀하 is also used as a formal address (like 'esteemed'): 김철수 귀하 on formal letters and invitations."},

    {type:"teach", trg:"귓속", src:"inside the ear", pos:"noun", gender:null,
     note:"귀 (ear) + ㅅ (sai-siot) + 속 (inside).\nThe inner part of the ear.",
     example:"A: 귓속이 간지러워.\nB: 면봉으로 조심히 닦아.",
     exampleSrc:"A: The inside of my ear itches.\nB: Clean it carefully with a cotton swab.",
     funFact:"The ㅅ in 귓속 is sai-siot, a linking consonant in compound nouns. Other examples: 깃발, 냇물, 콧노래."},

    {type:"teach", trg:"규모", src:"scale, size, scope", pos:"noun", gender:null,
     note:"Sino-Korean. 規 (rule/standard) + 模 (pattern).\nThe overall size or extent of something.",
     example:"A: 이번 행사의 규모가 어떻게 돼?\nB: 참가자가 500명 정도야.",
     exampleSrc:"A: What is the scale of this event?\nB: About 500 participants.",
     funFact:"From Hanja 規模. 대규모 (large-scale) and 소규모 (small-scale) are very common compound forms."},

    {type:"teach", trg:"규정", src:"regulation, rule, provision", pos:"noun", gender:null,
     note:"Sino-Korean. 規 (rule) + 定 (fix/decide).\nAn established rule or regulation.",
     example:"A: 회사 규정을 꼭 지켜야 해.\nB: 알겠어, 규정집을 읽어 볼게.",
     exampleSrc:"A: You must follow company regulations.\nB: OK, I will read the regulation handbook.",
     funFact:"From Hanja 規定. 규정 is more formal than 규칙 (rule). Used in legal and institutional contexts."},

    {type:"mc",
     q:"'규모'와 의미가 가장 비슷한 것은?",
     opts:["크기","규칙","규정","균형"],
     ans:"크기",
     hint:"This word describes the overall size or extent of something, like a project or event."},

    {type:"teach", trg:"규칙적", src:"regular, systematic", pos:"noun", gender:null,
     note:"규칙 (rule) + 적 (的, suffix).\nFollowing a consistent pattern or schedule.",
     example:"A: 규칙적으로 운동하는 게 중요해.\nB: 매일 30분씩 걷고 있어.",
     exampleSrc:"A: Exercising regularly is important.\nB: I walk for 30 minutes every day.",
     funFact:"규칙적인 생활 (regular lifestyle) is a common recommendation from Korean doctors: sleep, eat, and exercise on schedule."},

    {type:"teach", trg:"균형", src:"balance, equilibrium", pos:"noun", gender:null,
     note:"Sino-Korean. 均 (equal) + 衡 (balance).\nA state of even distribution or stability.",
     example:"A: 일과 생활의 균형이 중요해.\nB: 워라밸이라고 하지? 요즘 화두야.",
     exampleSrc:"A: Work-life balance is important.\nB: They call it work-life balance, right? It is a hot topic these days.",
     funFact:"From Hanja 均衡. 워라밸 (work-life balance, from English) is one of Korea's most popular lifestyle buzzwords."},

    {type:"teach", trg:"귤", src:"tangerine, mandarin orange", pos:"noun", gender:null,
     note:"Sino-Korean. 橘 (tangerine).\nA small citrus fruit, especially from Jeju Island.",
     example:"A: 제주도 귤이 정말 달아.\nB: 겨울에 먹는 귤이 제일 맛있어.",
     exampleSrc:"A: Jeju tangerines are really sweet.\nB: Tangerines eaten in winter are the most delicious.",
     funFact:"Jeju Island produces over 99% of Korea's tangerines. 귤 boxes are a classic winter gift."},

    {type:"teach", trg:"그간", src:"during that time, in the meantime", pos:"noun", gender:null,
     note:"그 (that) + 간 (間, interval).\nThe period between then and now.",
     example:"A: 그간 잘 지냈어?\nB: 응, 바빴지만 잘 지냈어.",
     exampleSrc:"A: Have you been well during this time?\nB: Yes, I was busy but doing well.",
     funFact:"그간 is a slightly formal alternative to 그동안. Both mean 'in the meantime' but 그간 is more concise."},

    {type:"teach", trg:"그나마", src:"at least, even so, that much at least", pos:"adv", gender:null,
     note:"그 (that) + 나마 (at least suffix).\nExpresses settling for a less-than-ideal but acceptable situation.",
     example:"A: 비가 오는데 그나마 우산이 있어서 다행이야.\nB: 맞아, 없었으면 큰일날 뻔했어.",
     exampleSrc:"A: It is raining, but at least we have an umbrella.\nB: Right, it would have been terrible without one.",
     funFact:"그나마 conveys a uniquely Korean sentiment: finding small comfort in an otherwise bad situation."},

    {type:"teach", trg:"그녀", src:"she, her", pos:"pron", gender:null,
     note:"그 (that) + 녀 (女, woman).\nA third-person feminine pronoun.",
     example:"A: 그녀가 누구야?\nB: 새로 온 동료야.",
     exampleSrc:"A: Who is she?\nB: She is a new colleague.",
     funFact:"그녀 is mainly a literary/written pronoun. In spoken Korean, people use names or titles instead of pronouns."},

    {type:"match", pairs:[
      {trg:"귤", src:"tangerine"},
      {trg:"귀신", src:"ghost"},
      {trg:"균형", src:"balance"},
      {trg:"권리", src:"right"}
    ]}
  ]
};
export default LESSON_12;
