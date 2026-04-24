// Korean B1 Gap - Lesson 36: Body, Health and Medical
const LESSON_36 = {
  id:"kov2_b1gap_l36", title:"신체와 건강", icon:"🏥", xp:15, board:true,
  steps:[
    {type:"intro", title:"Body, Health and Medical",
     desc:"Learn essential vocabulary for talking about your body, health conditions, medical situations, and lifestyle habits in Korean.",
     goals:["Learn 20 body, health, and lifestyle words","Discuss medical situations and habits","Describe physical states and food quality"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"신체", src:"body, physique", pos:"noun", gender:null,
     note:"Sino-Korean (身體). Formal word for the physical body. 신체검사 = physical exam.",
     example:"A: 신체검사 결과가 나왔어요?\nB: 네, 신체 건강은 양호하대요.",
     exampleSrc:"A: Did the physical exam results come out?\nB: Yes, they said my body is in good health.",
     funFact:"From hanja 身 (body) + 體 (form). More clinical than 몸, which is the everyday word. 신체 appears in legal and medical documents."},

    {type:"teach", trg:"손바닥", src:"palm (of the hand)", pos:"noun", gender:null,
     note:"Compound: 손 (hand) + 바닥 (floor/bottom). The 'floor of the hand.'",
     example:"A: 손바닥이 왜 이렇게 빨개요?\nB: 아까 박수를 너무 많이 쳤어요.",
     exampleSrc:"A: Why is your palm so red?\nB: I clapped too much earlier.",
     funFact:"The idiom 손바닥 뒤집듯 means 'as easy as flipping your palm,' describing something effortless or someone who changes their mind instantly."},

    {type:"teach", trg:"알", src:"egg, pill, grain", pos:"noun", gender:null,
     note:"Native Korean. Context decides meaning: 달걀 한 알 (one egg), 약 한 알 (one pill).",
     example:"A: 약 몇 알 먹어야 해요?\nB: 한 번에 두 알씩 드세요.",
     exampleSrc:"A: How many pills should I take?\nB: Take two pills at a time.",
     funFact:"알 is a natural counter for small round objects: eggs, pills, grains, seeds. 알이 굵다 literally means 'the grains are large' but idiomatically means 'to be substantial or well-off.'"},

    {type:"teach", trg:"앓다", src:"to be ill, to suffer from", pos:"verb", gender:null,
     note:"Native Korean verb. Describes ongoing illness: 감기를 앓다 (to suffer from a cold).",
     example:"A: 오래 앓았다면서요?\nB: 네, 한 달 동안 독감을 앓았어요.",
     exampleSrc:"A: I heard you were sick for a long time?\nB: Yes, I suffered from the flu for a month.",
     funFact:"앓다 implies prolonged suffering, not a momentary ache. 마음을 앓다 means 'to agonize/worry deeply,' showing the word extends beyond physical illness."},

    {type:"teach", trg:"수술", src:"surgery, operation", pos:"noun", gender:null,
     note:"Sino-Korean (手術). 수술하다 = to perform surgery. 수술받다 = to receive surgery.",
     example:"A: 수술은 잘 끝났어요?\nB: 네, 의사 선생님이 성공적이래요.",
     exampleSrc:"A: Did the surgery go well?\nB: Yes, the doctor said it was successful.",
     funFact:"From hanja 手 (hand) + 術 (technique). Korean distinguishes the surgeon's action (수술하다) from the patient's experience (수술받다) with different verb endings."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'손바닥'에서 '바닥'의 원래 뜻은?",
     opts:["바닥, 밑면","팔꿈치","손톱","손가락"],
     ans:"바닥, 밑면",
     hint:"Think about the structure: 손 means hand, and the second part refers to a flat surface underneath."},

    {type:"fb",
     s:"한 달 동안 독감을 {1}.",
     a:["앓았어요"],
     opts:["앓았어요","쉬었어요","수술했어요","먹었어요"],
     hint:"This verb describes prolonged suffering from an illness, not just resting or treating it.",
     sSrc:"I {1} the flu for a month."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"부작용", src:"side effect", pos:"noun", gender:null,
     note:"Sino-Korean (副作用). 부 = secondary, 작용 = function/effect.",
     example:"A: 이 약에 부작용이 있어요?\nB: 가끔 졸릴 수 있어요.",
     exampleSrc:"A: Does this medicine have side effects?\nB: You might feel drowsy sometimes.",
     funFact:"From hanja 副 (vice/secondary) + 作用 (action/effect). The same 부 appears in 부사장 (vice president) and 부교수 (associate professor)."},

    {type:"teach", trg:"숙이다", src:"to lower, to bow (one's head)", pos:"verb", gender:null,
     note:"Causative of 숙다. 고개를 숙이다 = to bow one's head. Shows respect or shame.",
     example:"A: 왜 고개를 숙이고 있어요?\nB: 실수한 게 부끄러워서요.",
     exampleSrc:"A: Why are you bowing your head?\nB: I'm embarrassed about my mistake.",
     funFact:"Bowing is deeply embedded in Korean culture. 고개를 숙이다 can express respect, shame, or concentration. At funerals, mourners 고개를 숙여 인사하다 (bow in greeting)."},

    {type:"teach", trg:"쉬다", src:"to rest, to take a break", pos:"verb", gender:null,
     note:"Native Korean. Also means 'to breathe': 숨을 쉬다. Very common daily word.",
     example:"A: 좀 쉬세요. 피곤해 보여요.\nB: 고마워요. 잠깐 쉴게요.",
     exampleSrc:"A: Please rest a bit. You look tired.\nB: Thanks. I'll take a short break.",
     funFact:"쉬다 has two distinct meanings: to rest (쉬는 날 = day off) and to breathe (숨을 쉬다). Context always makes the meaning clear. 목이 쉬다 means 'voice goes hoarse.'"},

    {type:"teach", trg:"약하다", src:"to be weak, to be faint", pos:"adj", gender:null,
     note:"Sino-Korean root 弱. Opposite of 강하다. 약한 체질 = weak constitution.",
     example:"A: 위가 약해서 매운 음식을 못 먹어요.\nB: 그럼 순한 메뉴로 시킬게요.",
     exampleSrc:"A: I can't eat spicy food because my stomach is weak.\nB: Then I'll order a mild menu item.",
     funFact:"약하다 extends beyond physical weakness: 유혹에 약하다 means 'weak against temptation.' Koreans say 나는 단것에 약해 (I'm weak for sweets) to mean they can't resist."},

    {type:"teach", trg:"신선하다", src:"to be fresh", pos:"adj", gender:null,
     note:"Sino-Korean (新鮮). For food, air, ideas. 신선한 채소 = fresh vegetables.",
     example:"A: 이 생선 신선해요?\nB: 네, 오늘 아침에 들어온 거예요.",
     exampleSrc:"A: Is this fish fresh?\nB: Yes, it came in this morning.",
     funFact:"From hanja 新 (new) + 鮮 (fresh/vivid). 신선 also means 'immortal hermit' in Korean mythology, written with different characters (神仙). Context makes the meaning clear."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"수술", src:"surgery"},
      {trg:"부작용", src:"side effect"},
      {trg:"쉬다", src:"to rest"},
      {trg:"신선하다", src:"to be fresh"}
    ]},

    {type:"fb",
     s:"이 약에 {1}이 있으니 조심하세요.",
     a:["부작용"],
     opts:["부작용","수술","신체","알"],
     hint:"The unwanted secondary effects that medicine can cause. A compound using 'secondary' + 'action.'",
     sSrc:"Be careful because this medicine has {1}."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"식품", src:"food product, foodstuff", pos:"noun", gender:null,
     note:"Sino-Korean (食品). Formal/commercial. 건강식품 = health food. 가공식품 = processed food.",
     example:"A: 어떤 식품을 주로 사요?\nB: 건강에 좋은 것만 사요.",
     exampleSrc:"A: What food products do you mainly buy?\nB: I only buy what is good for health.",
     funFact:"From hanja 食 (eat) + 品 (goods). Korean distinguishes 음식 (prepared food/dishes), 식품 (food products/groceries), and 식료품 (food supplies). Each has its context."},

    {type:"teach", trg:"버릇", src:"habit (often bad), mannerism", pos:"noun", gender:null,
     note:"Native Korean. Usually negative: 나쁜 버릇 (bad habit). 버릇없다 = ill-mannered.",
     example:"A: 손톱 물어뜯는 버릇이 있어요.\nB: 그 버릇 고치기 어렵죠.",
     exampleSrc:"A: I have a habit of biting my nails.\nB: That habit is hard to break, right?",
     funFact:"버릇 leans negative while 습관 is neutral. 세 살 버릇 여든까지 간다 is a proverb meaning 'habits formed at three last until eighty,' like 'old habits die hard.'"},

    {type:"teach", trg:"습관", src:"habit, custom", pos:"noun", gender:null,
     note:"Sino-Korean (習慣). Neutral or positive. 좋은 습관 = good habit. 생활 습관 = lifestyle habits.",
     example:"A: 아침에 일찍 일어나는 습관이 있어요?\nB: 네, 6시에 일어나요.",
     exampleSrc:"A: Do you have a habit of waking up early?\nB: Yes, I wake up at 6.",
     funFact:"From hanja 習 (practice/learn) + 慣 (accustomed). 습관 vs. 버릇: you can say 좋은 습관 naturally, but 좋은 버릇 sounds odd because 버릇 implies something slightly annoying."},

    {type:"teach", trg:"생활하다", src:"to live, to lead a life", pos:"verb", gender:null,
     note:"Sino-Korean (生活). Describes daily living patterns: 건강하게 생활하다 = live healthily.",
     example:"A: 한국에서 어떻게 생활하고 있어요?\nB: 잘 적응해서 편하게 생활하고 있어요.",
     exampleSrc:"A: How are you getting along in Korea?\nB: I've adapted well and am living comfortably.",
     funFact:"생활 vs. 살다: 살다 is simply 'to live/exist,' while 생활하다 emphasizes the manner and quality of daily life. 대학 생활 means 'university life' as a whole experience."},

    {type:"teach", trg:"어리다", src:"to be young, to be childish", pos:"adj", gender:null,
     note:"Native Korean. For people only. 어린 아이 = young child. 어린이 = children (noun form).",
     example:"A: 동생이 아직 어려요?\nB: 네, 이제 다섯 살이에요.",
     exampleSrc:"A: Is your younger sibling still young?\nB: Yes, they're five years old now.",
     funFact:"어리다 only describes human youth, never objects. 어린이날 (Children's Day, May 5) is a national holiday. 어린이집 is 'daycare/kindergarten.' The noun form 어린이 is used in formal contexts."},

    // --- Quiz batch 3 ---
    {type:"mc",
     q:"다음 중 부정적인 뉘앙스가 강한 단어는?",
     opts:["생활","버릇","식품","습관"],
     ans:"버릇",
     hint:"One of these words for 'habit' carries a slightly negative connotation and is used for bad mannerisms."},

    {type:"fb",
     s:"건강하게 {1} 위해 운동을 해요.",
     a:["생활하기"],
     opts:["생활하기","먹기","쉬기","앓기"],
     hint:"This Sino-Korean verb means 'to lead a daily life' in a particular manner, not just 'to exist.'",
     sSrc:"I exercise in order to {1} healthily."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"아무렇다", src:"to be of any kind, however", pos:"adj", gender:null,
     note:"Usually negative: 아무렇지 않다 = to be fine, to not be affected at all.",
     example:"A: 다쳤는데 괜찮아요?\nB: 아무렇지도 않아요. 걱정 마세요.",
     exampleSrc:"A: You got hurt, are you okay?\nB: It's nothing at all. Don't worry.",
     funFact:"Almost always appears as 아무렇지 않다 in real speech. 아무렇지 않은 척하다 means 'to pretend nothing is wrong,' a very Korean emotional response of masking one's feelings."},

    {type:"teach", trg:"알맞다", src:"to be suitable, to be just right", pos:"adj", gender:null,
     note:"Compound: 알 (properly) + 맞다 (to fit). 알맞은 크기 = the right size.",
     example:"A: 이 신발 사이즈가 알맞아요?\nB: 네, 딱 맞아요!",
     exampleSrc:"A: Is this shoe size just right?\nB: Yes, it fits perfectly!",
     funFact:"알맞다 implies a Goldilocks quality: not too much, not too little. It is common in test instructions: 알맞은 답을 고르세요 (choose the suitable answer)."},

    {type:"teach", trg:"수많다", src:"to be countless, to be numerous", pos:"adj", gender:null,
     note:"Compound: 수 (number) + 많다 (many). 수많은 사람들 = countless people.",
     example:"A: 수많은 별을 보니까 감동이에요.\nB: 도시에서는 볼 수 없는 풍경이죠.",
     exampleSrc:"A: I'm moved seeing countless stars.\nB: It's a sight you can't see in the city.",
     funFact:"수많다 is more literary and emphatic than just 많다. It appears frequently in poetry and dramatic narration. 수많은 시간 동안 = 'over countless hours.'"},

    {type:"teach", trg:"순수하다", src:"to be pure, to be innocent", pos:"adj", gender:null,
     note:"Sino-Korean (純粹). Both physical and emotional purity. 순수한 마음 = pure heart.",
     example:"A: 아이들의 순수한 눈을 보세요.\nB: 정말 맑고 예쁘네요.",
     exampleSrc:"A: Look at the children's innocent eyes.\nB: They're truly clear and beautiful.",
     funFact:"From hanja 純 (pure) + 粹 (essence). 순수 can describe substances (순수한 물 = pure water) or character. K-dramas often describe the lead as having a 순수한 마음."},

    {type:"teach", trg:"양", src:"amount, quantity", pos:"noun", gender:null,
     note:"Sino-Korean (量). 양이 많다/적다 = a lot/little in quantity. 양보다 질 = quality over quantity.",
     example:"A: 음식 양이 충분해요?\nB: 네, 양이 많아서 남을 것 같아요.",
     exampleSrc:"A: Is the food quantity enough?\nB: Yes, there's so much it might be left over.",
     funFact:"From hanja 量 (measure/quantity). The proverb 양보다 질 (quality over quantity) is a common saying. 양심 (conscience) uses a different 良 meaning 'good.'"},

    // --- Quiz batch 4 ---
    {type:"match", pairs:[
      {trg:"알맞다", src:"suitable, just right"},
      {trg:"수많다", src:"countless"},
      {trg:"순수하다", src:"pure, innocent"},
      {trg:"양", src:"amount, quantity"}
    ]},

    {type:"mc",
     q:"'아무렇지도 않아요'의 뜻은?",
     opts:["매우 슬퍼요","아주 아파요","전혀 괜찮아요","조금 걱정돼요"],
     ans:"전혀 괜찮아요",
     hint:"This expression means the speaker is completely unaffected. Think about the 아무 prefix meaning 'any/no.'"},

    {type:"fb",
     s:"음식 {1}이 너무 많아서 다 못 먹었어요.",
     a:["양"],
     opts:["양","알","식품","습관"],
     hint:"A Sino-Korean noun for the measurable amount or quantity of something. Written with hanja 量.",
     sSrc:"The food {1} was too much, so I couldn't eat it all."},

    // --- Final review ---
    {type:"mc",
     q:"'세 살 버릇 여든까지 간다'와 비슷한 영어 표현은?",
     opts:["아는 것이 힘이다","눈에서 멀어지면 마음에서도 멀어진다","시간은 금이다","습관은 제2의 천성"],
     ans:"습관은 제2의 천성",
     hint:"This proverb is about habits formed in childhood persisting through old age. Which option means the same?"}
  ]
};
export default LESSON_36;
