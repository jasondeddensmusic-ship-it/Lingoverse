// Korean B2. Batch 2, Lesson 13: Confidence and Time
// Words: 당당하다, 당분간, 당시, 당하다, 대가, 대강, 대개, 대규모, 대기, 대기하다, 대낮, 대다, 대다수, 대도시, 대략, 대량, 대로, 대륙, 대비, 대비하다

const LESSON_13 = {
  id:"kov2_b2b2_l13", title:"당당한 태도", icon:"💪", xp:15, board:true,
  steps:[
    {type:"intro", title:"당당한 태도",
     desc:"Learn words about confidence, scale, and preparation. These Sino-Korean compounds are essential for news, formal reports, and professional discourse.",
     goals:["Master 20 words about scale, time, and preparation","Understand 대 (big/great) compound patterns","Build vocabulary for formal and journalistic contexts"]},

    {type:"teach", trg:"당당하다", src:"to be confident, dignified", pos:"adj", gender:null,
     note:"Sino-Korean. 堂 (hall) + 堂 (hall) + 하다.\nCarrying oneself with upright dignity.",
     example:"A: 면접에서 당당하게 말했어요.\nB: 잘했어요, 자신감이 중요하죠.",
     exampleSrc:"A: I spoke confidently at the interview.\nB: Good job, confidence is important.",
     funFact:"당당하다 implies righteous confidence, not arrogance. It is always positive in Korean."},

    {type:"teach", trg:"당분간", src:"for the time being, for a while", pos:"adv", gender:null,
     note:"Sino-Korean. 當 (current) + 分 (portion) + 間 (between).\nFor the current period of time.",
     example:"A: 당분간 출장이 없을 거예요.\nB: 그럼 좀 쉴 수 있겠네요.",
     exampleSrc:"A: There will be no business trips for a while.\nB: Then you can rest a bit.",
     funFact:"당분간 is formal. Casual equivalents: 한동안 (for a while), 얼마간 (for some time)."},

    {type:"teach", trg:"당시", src:"at that time, back then", pos:"noun", gender:null,
     note:"Sino-Korean. 當 (that/relevant) + 時 (time).\nThe time period being discussed.",
     example:"A: 당시 상황이 어땠어요?\nB: 매우 혼란스러웠어요.",
     exampleSrc:"A: What was the situation like at that time?\nB: It was very chaotic.",
     funFact:"당시 is a historian's word. It appears constantly in news reporting and academic writing about past events."},

    {type:"teach", trg:"당하다", src:"to suffer, to be subjected to", pos:"verb", gender:null,
     note:"Sino-Korean. 當 (face) + 하다.\nTo be on the receiving end of something negative.",
     example:"A: 사기를 당했어요.\nB: 경찰에 신고하세요.",
     exampleSrc:"A: I was scammed.\nB: Report it to the police.",
     funFact:"당하다 always implies suffering: 도둑을 당하다 (be robbed), 폭행을 당하다 (be assaulted). Always negative."},

    {type:"teach", trg:"대가", src:"price, cost; master/expert", pos:"noun", gender:null,
     note:"Two Hanja: 代價 (price paid) or 大家 (great master).\nEither the cost of something or a top expert.",
     example:"A: 성공에는 대가가 따르는 법이에요.\nB: 맞아요, 노력 없이는 안 되죠.",
     exampleSrc:"A: Success always comes at a price.\nB: Right, you cannot succeed without effort.",
     funFact:"대가를 치르다 (pay the price) is common in formal writing. 대가 as 'master' appears in art: 음악의 대가 (music master)."},

    {type:"teach", trg:"대강", src:"roughly, in outline", pos:"adv", gender:null,
     note:"Sino-Korean. 大 (big) + 綱 (main rope).\nLooking at the main threads, not details.",
     example:"A: 대강 설명해 주세요.\nB: 간단히 말하면 이렇습니다.",
     exampleSrc:"A: Please explain roughly.\nB: In simple terms, it is like this.",
     funFact:"대강 is between 대충 (very roughly, carelessly) and 대략 (approximately). Each has a different nuance."},

    {type:"mc",
     q:"'당하다'가 쓰이는 상황으로 맞는 것은?",
     opts:["사기를 당했을 때","상을 받았을 때","여행을 갔을 때","친구를 만났을 때"],
     ans:"사기를 당했을 때",
     hint:"This verb is used when someone suffers or is subjected to something negative."},

    {type:"teach", trg:"대개", src:"mostly, generally", pos:"noun", gender:null,
     note:"Sino-Korean. 大 (big) + 概 (approximate).\nIn most cases, as a general rule.",
     example:"A: 한국 사람들은 대개 매운 음식을 좋아해요.\nB: 물론 예외도 있죠.",
     exampleSrc:"A: Korean people mostly like spicy food.\nB: Of course, there are exceptions.",
     funFact:"대개 is slightly more formal than 보통 (usually). It implies a broader generalization."},

    {type:"teach", trg:"대규모", src:"large-scale", pos:"noun", gender:null,
     note:"Sino-Korean. 大 (big) + 規模 (scale).\nSomething of very large proportions.",
     example:"A: 대규모 공사가 진행 중이에요.\nB: 완공까지 얼마나 걸려요?",
     exampleSrc:"A: Large-scale construction is underway.\nB: How long until completion?",
     funFact:"대규모 is a news favorite: 대규모 시위 (large-scale protest), 대규모 투자 (large-scale investment)."},

    {type:"teach", trg:"대기", src:"atmosphere; waiting, standby", pos:"noun", gender:null,
     note:"Two Hanja: 大氣 (atmosphere) or 待機 (wait).\nEither the air around us or the act of waiting.",
     example:"A: 대기 오염이 심해졌어요.\nB: 마스크를 꼭 쓰세요.",
     exampleSrc:"A: Air pollution has gotten worse.\nB: Be sure to wear a mask.",
     funFact:"대기 오염 (air pollution) and 대기 시간 (waiting time) use different Hanja but the same sound."},

    {type:"teach", trg:"대기하다", src:"to wait, to stand by", pos:"verb", gender:null,
     note:"대기 (standby, 待機) + 하다.\nTo wait in a state of readiness.",
     example:"A: 여기서 대기해 주세요.\nB: 알겠습니다, 연락 기다리겠습니다.",
     exampleSrc:"A: Please wait here on standby.\nB: Understood, I will wait for your call.",
     funFact:"대기하다 is more formal than 기다리다 (wait). It implies being ready to act at any moment."},

    {type:"teach", trg:"대낮", src:"broad daylight", pos:"noun", gender:null,
     note:"대 (big/full) + 낮 (daytime).\nThe brightest, most visible part of the day.",
     example:"A: 대낮에 도둑이 들었어요.\nB: 정말요? 대담하네요.",
     exampleSrc:"A: A thief broke in during broad daylight.\nB: Really? That is bold.",
     funFact:"대낮 emphasizes visibility. 대낮에 (in broad daylight) implies brazenness when describing crimes."},

    {type:"fb",
     s:"{1} 출장이 없을 거예요.",
     a:["당분간"],
     opts:["당분간","당시","대략","대개"],
     hint:"For the current period of time, for a while. A formal time expression.",
     sSrc:"There will be no business trips {1}."},

    {type:"teach", trg:"대다", src:"to touch, to place against; to attribute to", pos:"verb", gender:null,
     note:"Native Korean. Multiple meanings:\n1. Touch/place against. 2. Give a reason/excuse.",
     example:"A: 무슨 핑계를 대려고 해?\nB: 핑계가 아니라 사실이야.",
     exampleSrc:"A: What excuse are you trying to give?\nB: It is not an excuse, it is the truth.",
     funFact:"핑계를 대다 (make an excuse) is the most common figurative use. 입을 대다 (put lips to) means to touch."},

    {type:"teach", trg:"대다수", src:"the majority, most", pos:"noun", gender:null,
     note:"Sino-Korean. 大 (big) + 多 (many) + 數 (number).\nThe greater number of something.",
     example:"A: 대다수의 학생이 찬성했어요.\nB: 압도적이네요.",
     exampleSrc:"A: The majority of students agreed.\nB: That is overwhelming.",
     funFact:"대다수 is more emphatic than 대부분 (most). It implies an even larger portion of the total."},

    {type:"teach", trg:"대도시", src:"large city, metropolis", pos:"noun", gender:null,
     note:"Sino-Korean. 大 (big) + 都市 (city).\nA city of major size and importance.",
     example:"A: 대도시에 살고 싶어요?\nB: 편리하지만 너무 복잡해요.",
     exampleSrc:"A: Do you want to live in a big city?\nB: It is convenient but too hectic.",
     funFact:"Korea's top 대도시: 서울, 부산, 인천, 대구, 대전. Over 80% of Koreans live in urban areas."},

    {type:"teach", trg:"대략", src:"approximately, roughly", pos:"adv", gender:null,
     note:"Sino-Korean. 大 (big) + 略 (brief/outline).\nAn approximate estimation.",
     example:"A: 대략 얼마나 걸려요?\nB: 대략 30분 정도요.",
     exampleSrc:"A: How long does it take approximately?\nB: About 30 minutes.",
     funFact:"대략 is more formal than 약 (about). In casual speech, 한 (about) is most common: 한 30분."},

    {type:"teach", trg:"대량", src:"large quantity, mass (production)", pos:"noun", gender:null,
     note:"Sino-Korean. 大 (big) + 量 (quantity).\nA very large amount of something.",
     example:"A: 이 공장에서 대량 생산하고 있어요.\nB: 하루에 몇 개나 만들어요?",
     exampleSrc:"A: This factory mass-produces them.\nB: How many do they make per day?",
     funFact:"대량 생산 (mass production), 대량 구매 (bulk purchase), 대량 해고 (mass layoff). Always implies large scale."},

    {type:"mc",
     q:"'대규모'의 반대말에 가장 가까운 것은?",
     opts:["대강","소규모","대량","대다수"],
     ans:"소규모",
     hint:"If 대규모 means large-scale, its opposite uses 소 (small) instead of 대 (big)."},

    {type:"teach", trg:"대로", src:"as, according to; main road", pos:"noun", gender:null,
     note:"Bound noun: as/according to.\nAlso: 大路 (main road) as a standalone noun.",
     example:"A: 계획대로 진행합시다.\nB: 네, 원래 계획을 따릅시다.",
     exampleSrc:"A: Let us proceed as planned.\nB: Yes, let us follow the original plan.",
     funFact:"대로 as a bound noun is one of the most useful grammar patterns: 말한 대로 (as said), 원하는 대로 (as you wish)."},

    {type:"teach", trg:"대륙", src:"continent", pos:"noun", gender:null,
     note:"Sino-Korean. 大 (big) + 陸 (land).\nA massive body of land.",
     example:"A: 아시아 대륙은 세계에서 가장 커요.\nB: 면적도 인구도 최대죠.",
     exampleSrc:"A: The Asian continent is the largest in the world.\nB: Both in area and population.",
     funFact:"대륙 is also used figuratively: 대륙의 기상 (continental spirit) implies something bold and grand."},

    {type:"teach", trg:"대비", src:"preparation, contrast", pos:"noun", gender:null,
     note:"Sino-Korean. 對備 (prepare against) or 對比 (contrast).\nTwo Hanja, two meanings.",
     example:"A: 재난에 대비해야 해요.\nB: 비상 물품을 준비합시다.",
     exampleSrc:"A: We must prepare for disasters.\nB: Let us prepare emergency supplies.",
     funFact:"대비하다 (prepare for) uses 對備. 대비되다 (be contrasted) uses 對比. Same sound, different Hanja."},

    {type:"teach", trg:"대비하다", src:"to prepare for, to guard against", pos:"verb", gender:null,
     note:"대비 (preparation, 對備) + 하다.\nTo get ready for a potential situation.",
     example:"A: 겨울에 대비해서 난방 점검을 합시다.\nB: 좋은 생각이에요.",
     exampleSrc:"A: Let us check the heating in preparation for winter.\nB: Good idea.",
     funFact:"대비하다 implies proactive preparation for something potentially negative. Very common in safety contexts."},

    {type:"match", pairs:[
      {trg:"당당하다", src:"confident"},
      {trg:"대규모", src:"large-scale"},
      {trg:"대륙", src:"continent"},
      {trg:"대비", src:"preparation"},
      {trg:"대다수", src:"majority"}
    ]},

    {type:"fb",
     s:"재난에 {1}해서 비상 물품을 준비합시다.",
     a:["대비"],
     opts:["대비","대기","대강","대략"],
     hint:"To prepare and guard against a potential negative event or situation.",
     sSrc:"Let us prepare emergency supplies to {1} for disasters."}
  ]
};
export default LESSON_13;
