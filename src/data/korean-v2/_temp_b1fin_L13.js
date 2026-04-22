// Korean B1 Final Gap - Lesson 13: Information & Communication
const LESSON_13 = {
  id:"kov2_b1fin_l13", title:"정보와 소통", icon:"📡", xp:15, board:true,
  steps:[
    {type:"intro", title:"Information & Communication",
     desc:"Build vocabulary for discussing information, meaning, technology, and communication. These words are essential for navigating Korea's digital society.",
     goals:["Learn 20 words about information, meaning, and communication","Discuss technology, electronics, and media","Express doubt, interpretation, and verification"]},

    {type:"teach", trg:"정보", src:"information", pos:"noun", gender:null,
     note:"Sino-Korean (情報). 정 (情) = feeling/situation, 보 (報) = report.",
     example:"A: 이 정보가 정확해요?\nB: 네, 공식 사이트에서 가져온 정보예요.",
     exampleSrc:"A: Is this information accurate?\nB: Yes, it's information from the official site.",
     funFact:"Korea is an information society. 정보 통신 기술 (ICT) drives the economy. The term 정보화 사회 (information society) describes modern Korea."},

    {type:"teach", trg:"자세히", src:"in detail, closely, thoroughly", pos:"adv", gender:null,
     note:"Derived from 자세하다 (detailed). Adverb form.",
     example:"A: 자세히 설명해 주세요.\nB: 네, 처음부터 자세히 말할게요.",
     exampleSrc:"A: Please explain in detail.\nB: Okay, I'll explain thoroughly from the beginning.",
     funFact:"자세히 보면 (if you look closely) is a common phrase for revealing hidden details. A famous Korean song starts with this phrase."},

    {type:"teach", trg:"의미", src:"meaning, significance", pos:"noun", gender:null,
     note:"Sino-Korean (意味). 의 (意) = intention, 미 (味) = taste/flavor.",
     example:"A: 이 단어의 의미가 뭐예요?\nB: '행복'이라는 의미예요.",
     exampleSrc:"A: What's the meaning of this word?\nB: It means 'happiness.'",
     funFact:"Literally 'taste of intention.' This mirrors how Japanese uses the same characters (意味, imi). Language learning is all about understanding 의미."},

    {type:"teach", trg:"의미하다", src:"to mean, to signify", pos:"verb", gender:null,
     note:"Verb form of 의미. What something means or represents.",
     example:"A: 이 표시가 뭘 의미해요?\nB: 출입 금지를 의미해요.",
     exampleSrc:"A: What does this sign mean?\nB: It means no entry.",
     funFact:"의미하다 is used in formal analysis: 이것은 경제 성장을 의미한다 (this signifies economic growth). Common in news and academic writing."},

    {type:"teach", trg:"의심하다", src:"to doubt, to suspect", pos:"verb", gender:null,
     note:"Sino-Korean (疑心). 의 (疑) = doubt, 심 (心) = heart/mind.",
     example:"A: 그 이야기를 의심해요?\nB: 좀 의심스러워요. 확인해 봐야 해요.",
     exampleSrc:"A: Do you doubt that story?\nB: It's a bit suspicious. We need to verify.",
     funFact:"The noun form 의심 is used in 의심의 여지가 없다 (there is no room for doubt), a strong expression of certainty."},

    {type:"mc",
     q:"어떤 것이 진짜인지 아닌지 확실하지 않을 때 하는 것은?",
     opts:["의심하다","의하다","확인하다","의미하다"],
     ans:"의심하다",
     hint:"This verb means to have reservations about whether something is true."},

    {type:"teach", trg:"의하다", src:"to be based on, to be due to", pos:"verb", gender:null,
     note:"Sino-Korean (依). Used in the grammar pattern N에 의하면 (according to N).",
     example:"A: 보도에 의하면 내일 비가 온대요.\nB: 그래요? 우산을 가져가야겠네요.",
     exampleSrc:"A: According to reports, it'll rain tomorrow.\nB: Really? I should bring an umbrella.",
     funFact:"에 의하면 (according to) and 에 의해 (by means of) are essential B1 grammar patterns. They appear constantly in news and academic Korean."},

    {type:"teach", trg:"확인", src:"confirmation, verification, check", pos:"noun", gender:null,
     note:"Sino-Korean (確認). 확 (確) = certain, 인 (認) = recognize.",
     example:"A: 예약 확인 됐어요?\nB: 네, 확인 이메일을 받았어요.",
     exampleSrc:"A: Has the reservation been confirmed?\nB: Yes, I received a confirmation email.",
     funFact:"확인 is everywhere in Korean digital life: 본인 확인 (identity verification), 이메일 확인 (email check), 주문 확인 (order confirmation)."},

    {type:"teach", trg:"확인하다", src:"to confirm, to verify, to check", pos:"verb", gender:null,
     note:"Verb form of 확인. Active verification.",
     example:"A: 출발 전에 확인해 주세요.\nB: 네, 다시 한번 확인할게요.",
     exampleSrc:"A: Please check before departure.\nB: Okay, I'll check one more time.",
     funFact:"확인해 주세요 (please check/confirm) is one of the most practical Korean phrases. It works in restaurants, offices, airports, and hospitals."},

    {type:"teach", trg:"해석", src:"interpretation, analysis", pos:"noun", gender:null,
     note:"Sino-Korean (解釋). 해 (解) = untie/solve, 석 (釋) = explain.",
     example:"A: 이 문장의 해석이 어려워요.\nB: 문맥을 보면 해석할 수 있어요.",
     exampleSrc:"A: The interpretation of this sentence is difficult.\nB: If you look at the context, you can interpret it.",
     funFact:"해석 applies to language translation, data analysis, and artistic interpretation. 자유로운 해석 (free interpretation) is valued in art criticism."},

    {type:"teach", trg:"토론", src:"debate, discussion", pos:"noun", gender:null,
     note:"Sino-Korean (討論). 토 (討) = discuss, 론 (論) = theory/argument.",
     example:"A: 토론 수업이 있어요?\nB: 네, 매주 금요일에 토론해요.",
     exampleSrc:"A: Do you have a debate class?\nB: Yes, we debate every Friday.",
     funFact:"Korean TV has intense 토론 shows where experts debate politics, economics, and social issues. Heated exchanges are considered good television."},

    {type:"fb",
     s:"보도에 {1} 경제가 좋아지고 있대요.",
     a:["의하면"],
     opts:["의하면","의미하면","의심하면","확인하면"],
     hint:"This grammar pattern means 'according to' a source of information.",
     sSrc:"According to reports, the economy is reportedly improving."},

    {type:"teach", trg:"통신", src:"communication, telecommunications", pos:"noun", gender:null,
     note:"Sino-Korean (通信). 통 (通) = pass through, 신 (信) = trust/message.",
     example:"A: 통신 상태가 안 좋아요.\nB: 여기는 산이라서 통신이 안 될 수도 있어요.",
     exampleSrc:"A: The communication signal is bad.\nB: Since it's a mountain, communication might not work.",
     funFact:"Korea's three major 통신 companies (SKT, KT, LG U+) compete fiercely. Korea leads the world in 5G 통신 deployment."},

    {type:"teach", trg:"전자", src:"electronics, electronic", pos:"noun", gender:null,
     note:"Sino-Korean (電子). 전 (電) = electricity, 자 (子) = child/particle.",
     example:"A: 전자 제품을 좋아해요?\nB: 네, 새 전자 제품 나오면 꼭 사요.",
     exampleSrc:"A: Do you like electronics?\nB: Yes, when new electronics come out I always buy them.",
     funFact:"삼성전자 (Samsung Electronics) is Korea's largest company. The Yongsan Electronics Market in Seoul was once Asia's biggest 전자 shopping district."},

    {type:"teach", trg:"전기", src:"electricity; biography", pos:"noun", gender:null,
     note:"Two meanings: 電氣 (electricity) or 傳記 (biography). Context determines which.",
     example:"A: 전기 요금이 많이 나왔어요?\nB: 에어컨 때문에 전기 요금이 올랐어요.",
     exampleSrc:"A: Was the electricity bill high?\nB: The bill went up because of the air conditioner.",
     funFact:"Korea's 전기 system uses 220V. The same word 전기 also means biography: 세종대왕 전기 (biography of King Sejong). Different hanja, same pronunciation."},

    {type:"teach", trg:"피시", src:"PC, personal computer", pos:"noun", gender:null,
     note:"Loanword from English 'PC.' Widely used in Korea.",
     example:"A: 피시방에 갈래요?\nB: 좋아요, 게임 한판 해요!",
     exampleSrc:"A: Want to go to a PC cafe?\nB: Sure, let's play a game!",
     funFact:"피시방 (PC bang) is a Korean cultural institution. These internet cafes have high-end gaming PCs, snacks, and are open 24/7. Esports culture was born here."},

    {type:"teach", trg:"통하다", src:"to go through, to communicate, to work", pos:"verb", gender:null,
     note:"Sino-Korean (通). Something passes through or gets understood.",
     example:"A: 영어가 통해요?\nB: 네, 여기서는 영어가 통해요.",
     exampleSrc:"A: Does English work here?\nB: Yes, English gets through here.",
     funFact:"통하다 has rich usage: 말이 통하다 (communication works), 길이 통하다 (road connects), 마음이 통하다 (hearts connect/kindred spirits)."},

    {type:"teach", trg:"전해지다", src:"to be passed down, to be conveyed", pos:"verb", gender:null,
     note:"Passive of 전하다. Stories, traditions, or messages get passed along.",
     example:"A: 이 이야기는 오래전부터 전해져 왔어요.\nB: 전통적인 이야기군요.",
     exampleSrc:"A: This story has been passed down from long ago.\nB: It's a traditional story, I see.",
     funFact:"전해지다 is the word for oral tradition: 입에서 입으로 전해지다 (passed from mouth to mouth). Korean folk tales are 전해진 이야기."},

    {type:"match", pairs:[
      {trg:"통신", src:"telecommunications"},
      {trg:"전자", src:"electronics"},
      {trg:"전기", src:"electricity"},
      {trg:"통하다", src:"to get through/work"},
      {trg:"전해지다", src:"to be passed down"}
    ]},

    {type:"teach", trg:"통", src:"container, barrel, bin", pos:"noun", gender:null,
     note:"Sino-Korean (桶). Also used as a counter for letters/calls.",
     example:"A: 쓰레기를 쓰레기통에 버려 주세요.\nB: 네, 알겠습니다.",
     exampleSrc:"A: Please throw the trash in the trash bin.\nB: Okay, understood.",
     funFact:"통 appears in many compounds: 쓰레기통 (trash can), 우체통 (mailbox), 물통 (water container). Also a counter: 전화 한 통 (one phone call)."},

    {type:"teach", trg:"점", src:"point, dot, score; store/shop", pos:"noun", gender:null,
     note:"Sino-Korean (點/店). Multiple meanings based on context.",
     example:"A: 시험에서 90점 받았어요!\nB: 잘했어요! 높은 점수네요.",
     exampleSrc:"A: I got 90 points on the exam!\nB: Well done! That's a high score.",
     funFact:"점 as 'shop' appears in: 음식점 (restaurant), 미용점 (beauty shop), 매점 (snack shop). As 'point': 점수 (score), 관점 (viewpoint)."},

    {type:"teach", trg:"예", src:"example; yes (formal)", pos:"noun", gender:null,
     note:"Sino-Korean (例). As noun: example/instance. As interjection: formal 'yes.'",
     example:"A: 예를 들어 설명해 주세요.\nB: 예를 들면, 이런 경우가 있어요.",
     exampleSrc:"A: Please explain with an example.\nB: For example, there's a case like this.",
     funFact:"예를 들면 (for example) is a must-know phrase. In formal settings, 예 (yes) is more polite than 네 (yes). Military and service use 예."},

    {type:"teach", trg:"중", src:"middle, during, among (bound noun)", pos:"noun", gender:null,
     note:"Sino-Korean (中). Attached after nouns: 수업 중 (during class).",
     example:"A: 지금 회의 중이에요.\nB: 그럼 나중에 전화할게요.",
     exampleSrc:"A: I'm in a meeting right now.\nB: Then I'll call later.",
     funFact:"중 is one of the most used bound nouns: 공사 중 (under construction), 준비 중 (in preparation), 고민 중 (in contemplation)."},

    {type:"mc",
     q:"'지금 식사 중이에요'에서 '중'의 의미는?",
     opts:["가운데","하는 동안","종류","이후"],
     ans:"하는 동안",
     hint:"In this sentence, the bound noun indicates an activity is currently in progress."}
  ]
};
export default LESSON_13;
