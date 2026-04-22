// Korean B1 Gap - Lesson 31: Mental States and Emotions
const LESSON_31 = {
  id:"kov2_b1gap_l31", title:"마음 상태와 감정", icon:"💭", xp:15, board:true,
  steps:[
    {type:"intro", title:"Mental States and Emotions",
     desc:"Explore the Korean vocabulary for inner feelings, emotional states, and psychological experiences. These words let you express complex emotions beyond basic 'happy' and 'sad.'",
     goals:["Learn 20 words for mental states, emotions, and inner experiences","Express nuanced feelings like anxiety, awkwardness, and envy","Use emotional nouns to discuss abstract experiences"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"불안하다", src:"to be anxious, uneasy", pos:"adj", gender:null,
     note:"Sino-Korean. 불 (not, 不) + 안 (peace, 安) = no peace.\nDescribes worry about the future.",
     example:"A: 시험 결과가 언제 나와요?\nB: 다음 주요. 너무 불안해요.\nA: 잘 했을 거예요. 걱정 마세요.",
     exampleSrc:"A: When do the exam results come out?\nB: Next week. I'm so anxious.\nA: You must have done well. Don't worry.",
     funFact:"From hanja 不安. The noun form 불안 is used in psychology: 불안 장애 (anxiety disorder). Korean distinguishes 불안 (future worry) from 걱정 (general concern)."},

    {type:"teach", trg:"불편하다", src:"to be uncomfortable, inconvenient", pos:"adj", gender:null,
     note:"Sino-Korean. 불 (not, 不) + 편 (convenient, 便).\nPhysical or emotional discomfort.",
     example:"A: 이 의자가 좀 불편해요.\nB: 다른 자리로 옮길까요?\nA: 네, 그래 주세요.",
     exampleSrc:"A: This chair is a bit uncomfortable.\nB: Shall we move to another seat?\nA: Yes, please do.",
     funFact:"Korean uses 불편하다 for both physical discomfort (an uncomfortable bed) and social awkwardness (an uncomfortable relationship). The antonym 편하다 means comfortable or at ease."},

    {type:"teach", trg:"심각하다", src:"to be serious, grave", pos:"adj", gender:null,
     note:"Sino-Korean. 심 (deep, 深) + 각 (engrave, 刻).\nSomething deeply engraved, therefore serious.",
     example:"A: 요즘 환경 문제가 심각해요.\nB: 맞아요. 빨리 해결해야 해요.\nA: 우리도 뭔가 해야 해요.",
     exampleSrc:"A: Environmental problems are serious these days.\nB: That's right. We need to solve them quickly.\nA: We should do something too.",
     funFact:"From hanja 深刻. Often used with 상황 (situation): 심각한 상황 = a grave situation. In casual speech, 심각 alone can be an exclamation meaning 'that's serious!'"},

    {type:"teach", trg:"심하다", src:"to be severe, extreme", pos:"adj", gender:null,
     note:"Sino-Korean. 심 (deep, 甚) + 하다.\nMeans excessively intense or harsh.",
     example:"A: 비가 너무 심하게 와요.\nB: 밖에 나가면 안 돼요.\nA: 집에서 기다려야겠어요.",
     exampleSrc:"A: The rain is coming down really hard.\nB: You shouldn't go outside.\nA: I'll have to wait at home.",
     funFact:"심하다 often carries a negative judgment. 농담이 심하다 (the joke went too far), 더위가 심하다 (the heat is severe). The adverb form 심하게 means 'severely' or 'harshly.'"},

    {type:"teach", trg:"안타깝다", src:"to be regrettable, pitiful", pos:"adj", gender:null,
     note:"Native Korean. Expresses sympathy and frustration at an unfortunate situation.\nNo direct English equivalent.",
     example:"A: 그 학생이 시험에 떨어졌대요.\nB: 정말 안타까워요. 열심히 했는데.\nA: 다음에는 꼭 붙을 거예요.",
     exampleSrc:"A: That student failed the exam.\nB: That's really unfortunate. They worked so hard.\nA: They'll definitely pass next time.",
     funFact:"안타깝다 uniquely combines pity, frustration, and heartache. It is what you feel watching someone struggle despite their best efforts. There is no single English word that captures this emotion."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'시험 결과가 너무 ___해요'에서 미래에 대한 걱정을 나타내는 말은?",
     opts:["불안","심각","안타깝","불편"],
     ans:"불안",
     hint:"This word combines 'not' and 'peace' from Chinese characters. It describes worry about something that hasn't happened yet."},

    {type:"fb",
     s:"비가 너무 {1} 와서 밖에 못 나갔어요.",
     a:["심하게"],
     opts:["심하게","심각하게","불안하게","불편하게"],
     hint:"This adverb means the intensity was excessive or extreme. Think of rain that is unreasonably harsh.",
     sSrc:"It rained so {1} that I couldn't go outside."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"어색하다", src:"to be awkward, unfamiliar", pos:"adj", gender:null,
     note:"Native Korean. Describes social awkwardness or something feeling unnatural.\n어색한 분위기 (awkward atmosphere).",
     example:"A: 오랜만에 만나니까 어색해요.\nB: 저도요. 뭐라고 말해야 할지 모르겠어요.\nA: 커피 한잔하면서 이야기해요.",
     exampleSrc:"A: It's awkward since we haven't met in a long time.\nB: Me too. I don't know what to say.\nA: Let's talk over a cup of coffee.",
     funFact:"어색하다 is the go-to word for social discomfort in Korean. 첫 만남은 항상 어색하다 (first meetings are always awkward). It also describes things that feel 'off,' like wearing unfamiliar clothes."},

    {type:"teach", trg:"솔직하다", src:"to be honest, frank", pos:"adj", gender:null,
     note:"Sino-Korean. 솔 (lead, 率) + 직 (straight, 直).\n솔직히 말하면 = frankly speaking.",
     example:"A: 솔직히 말해도 돼요?\nB: 네, 솔직하게 말해 주세요.\nA: 이 요리는 좀 짜요.",
     exampleSrc:"A: Can I speak honestly?\nB: Yes, please be frank.\nA: This dish is a bit salty.",
     funFact:"From hanja 率直, meaning 'straightforwardly leading.' 솔직히 (honestly) is one of the most common sentence openers in Korean conversation, similar to 'to be honest' in English."},

    {type:"teach", trg:"엉뚱하다", src:"to be absurd, unexpected, off-the-wall", pos:"adj", gender:null,
     note:"Native Korean. Describes someone or something wildly unexpected.\n엉뚱한 질문 (an absurd question).",
     example:"A: 왜 갑자기 엉뚱한 질문을 해요?\nB: 그냥 궁금했어요.\nA: 항상 엉뚱한 생각을 하네요.",
     exampleSrc:"A: Why do you suddenly ask such an absurd question?\nB: I was just curious.\nA: You always have such off-the-wall thoughts.",
     funFact:"엉뚱하다 is often used affectionately in Korean. An 엉뚱한 사람 is not necessarily foolish. They might be creative, unpredictable, or charmingly quirky. K-drama characters described this way are usually lovable."},

    {type:"teach", trg:"부럽다", src:"to be envious, jealous", pos:"adj", gender:null,
     note:"Native Korean. Conjugated form: 부러워요.\nDescribes longing for what others have.",
     example:"A: 친구가 유럽 여행을 갔대요.\nB: 정말 부러워요! 저도 가고 싶어요.\nA: 다음에 같이 가요.",
     exampleSrc:"A: My friend went traveling in Europe.\nB: I'm so envious! I want to go too.\nA: Let's go together next time.",
     funFact:"부럽다 is a common irregular adjective. The polite form is 부러워요, not 부럽어요 (the ㅂ changes to 우). 부러우면 지는 거다 is a popular saying meaning 'to be envious is to lose.'"},

    {type:"teach", trg:"슬픔", src:"sadness, sorrow", pos:"noun", gender:null,
     note:"Noun form of 슬프다 (to be sad).\nThe suffix -ㅁ turns adjectives into abstract nouns.",
     example:"A: 이 영화를 보면 슬픔을 느껴요.\nB: 저도요. 항상 울어요.\nA: 감정을 잘 표현한 영화예요.",
     exampleSrc:"A: I feel sadness when I watch this movie.\nB: Me too. I always cry.\nA: It's a movie that expresses emotions well.",
     funFact:"The -ㅁ/음 suffix is highly productive in Korean. 슬프다 becomes 슬픔, 기쁘다 becomes 기쁨, 아프다 becomes 아픔. This pattern lets you nominalize almost any descriptive verb."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"어색하다", src:"awkward"},
      {trg:"솔직하다", src:"honest"},
      {trg:"엉뚱하다", src:"absurd"},
      {trg:"부럽다", src:"envious"}
    ]},

    {type:"mc",
     q:"'솔직히 말하면'은 무슨 뜻이에요?",
     opts:["어색하게 말하면","정직하게 말하면","엉뚱하게 말하면","심하게 말하면"],
     ans:"정직하게 말하면",
     hint:"This phrase introduces a frank statement. The speaker is about to give their genuine, unfiltered opinion."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"아픔", src:"pain, ache", pos:"noun", gender:null,
     note:"Noun form of 아프다 (to be sick, painful).\nBoth physical and emotional pain.",
     example:"A: 이별의 아픔을 어떻게 이겨요?\nB: 시간이 지나면 나아져요.\nA: 시간이 약이라고 하죠.",
     exampleSrc:"A: How do you overcome the pain of a breakup?\nB: It gets better as time passes.\nA: They say time is the best medicine.",
     funFact:"아픔 is used poetically in Korean literature and music. 사랑의 아픔 (the pain of love) is a classic theme. The saying 시간이 약이다 (time is medicine) is the go-to comfort phrase."},

    {type:"teach", trg:"어려움", src:"difficulty, hardship", pos:"noun", gender:null,
     note:"Noun form of 어렵다 (to be difficult).\n어려움을 겪다 = to experience difficulties.",
     example:"A: 한국어 공부에 어려움이 있어요?\nB: 네, 발음이 가장 어려워요.\nA: 연습하면 나아질 거예요.",
     exampleSrc:"A: Do you have any difficulties studying Korean?\nB: Yes, pronunciation is the hardest.\nA: It will get better with practice.",
     funFact:"어려움 follows the same nominalization pattern as 슬픔. The expression 어려움을 겪다 (to undergo difficulties) appears constantly in news reports, speeches, and formal contexts."},

    {type:"teach", trg:"미소", src:"smile", pos:"noun", gender:null,
     note:"Sino-Korean. 미 (small, 微) + 소 (laugh, 笑).\nA gentle, subtle smile. More refined than 웃음.",
     example:"A: 그 사람은 항상 미소를 짓고 있어요.\nB: 네, 참 따뜻한 사람이에요.\nA: 미소가 예뻐요.",
     exampleSrc:"A: That person always has a smile on their face.\nB: Yes, they're a really warm person.\nA: Their smile is pretty.",
     funFact:"From hanja 微笑, literally 'tiny laugh.' 미소를 짓다 (to form a smile) is more literary than 웃다 (to laugh/smile). The Mona Lisa's smile is called 모나리자의 미소 in Korean."},

    {type:"teach", trg:"싸움", src:"fight, quarrel", pos:"noun", gender:null,
     note:"Noun form of 싸우다 (to fight).\n싸움을 하다 = to have a fight. Both verbal and physical.",
     example:"A: 어제 친구와 싸움을 했어요.\nB: 무슨 일이었어요?\nA: 작은 오해 때문이었어요.",
     exampleSrc:"A: I had a fight with my friend yesterday.\nB: What happened?\nA: It was because of a small misunderstanding.",
     funFact:"싸움 covers everything from a mild argument to a full brawl. 말싸움 is a verbal argument, 주먹싸움 is a fistfight. 닭싸움 (chicken fight) is a children's game where you hop on one leg."},

    {type:"teach", trg:"불만", src:"complaint, dissatisfaction", pos:"noun", gender:null,
     note:"Sino-Korean. 불 (not, 不) + 만 (full, 滿).\nNot full, therefore not satisfied.",
     example:"A: 서비스에 불만이 있으세요?\nB: 네, 음식이 너무 늦게 나왔어요.\nA: 죄송합니다. 다시 확인하겠습니다.",
     exampleSrc:"A: Do you have any complaints about the service?\nB: Yes, the food came out too late.\nA: I'm sorry. I'll check again.",
     funFact:"From hanja 不滿, 'not full/satisfied.' 불만을 품다 means 'to harbor dissatisfaction.' In business Korean, 고객 불만 (customer complaints) is a standard term."},

    // --- Quiz batch 3 ---
    {type:"fb",
     s:"이별의 {1}은 시간이 지나면 나아져요.",
     a:["아픔"],
     opts:["아픔","슬픔","미소","싸움"],
     hint:"This noun specifically refers to pain or ache. It comes from the adjective meaning 'to be sick or hurting.'",
     sSrc:"The {1} of a breakup gets better as time passes."},

    {type:"mc",
     q:"'미소'의 한자 뜻은?",
     opts:["이상한 웃음","큰 웃음","작은 웃음","슬픈 웃음"],
     ans:"작은 웃음",
     hint:"The hanja components mean 'tiny' and 'laugh.' This is a gentle, subtle expression rather than a big grin."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"비밀", src:"secret", pos:"noun", gender:null,
     note:"Sino-Korean. 비 (secret, 秘) + 밀 (dense, 密).\n비밀을 지키다 = to keep a secret.",
     example:"A: 이건 비밀인데 말해 줄게요.\nB: 네, 아무한테도 안 말할게요.\nA: 약속해요?",
     exampleSrc:"A: This is a secret, but I'll tell you.\nB: Okay, I won't tell anyone.\nA: Do you promise?",
     funFact:"From hanja 秘密, doubled secrecy. 비밀번호 means 'secret number,' i.e. password or PIN. The phrase 공공연한 비밀 (open secret) is used for things everyone knows but nobody says."},

    {type:"teach", trg:"심리", src:"psychology, mentality", pos:"noun", gender:null,
     note:"Sino-Korean. 심 (heart/mind, 心) + 리 (principle, 理).\nThe principles of the mind.",
     example:"A: 소비자 심리를 이해해야 해요.\nB: 맞아요. 사람들이 왜 사는지 알아야 해요.\nA: 심리학 수업을 들어 볼까요?",
     exampleSrc:"A: We need to understand consumer psychology.\nB: Right. We need to know why people buy things.\nA: Should we take a psychology class?",
     funFact:"From hanja 心理, 'heart principle.' 심리학 is psychology (the study), 심리적 is psychological. 범죄 심리 (criminal psychology) is a hugely popular genre in Korean dramas and novels."},

    {type:"teach", trg:"상처", src:"wound, scar, hurt", pos:"noun", gender:null,
     note:"Sino-Korean. 상 (injury, 傷) + 처 (place, 處).\nBoth physical wounds and emotional scars.",
     example:"A: 마음에 상처를 받았어요.\nB: 무슨 일이 있었어요?\nA: 친구가 나쁜 말을 했어요.",
     exampleSrc:"A: I was emotionally hurt.\nB: What happened?\nA: My friend said something hurtful.",
     funFact:"상처를 받다 (to receive a wound) is the standard way to say 'to be hurt emotionally.' 상처를 주다 (to give a wound) means 'to hurt someone's feelings.' Physical wounds also use 상처."},

    {type:"teach", trg:"보람", src:"reward, worthwhileness, sense of fulfillment", pos:"noun", gender:null,
     note:"Native Korean. 보람이 있다 = to be rewarding.\nDescribes the feeling that effort was worthwhile.",
     example:"A: 봉사활동을 하니까 보람이 있어요.\nB: 맞아요. 사람들을 도우면 기분이 좋아요.\nA: 보람 있는 하루였어요.",
     exampleSrc:"A: Volunteering feels rewarding.\nB: Right. Helping people feels good.\nA: It was a worthwhile day.",
     funFact:"보람 has no exact English equivalent. It captures the deep satisfaction of meaningful effort. 보람찬 (full of worthwhileness) and 보람 있는 (having reward) describe experiences that make struggle feel valuable."},

    {type:"teach", trg:"숨", src:"breath", pos:"noun", gender:null,
     note:"Native Korean. 숨을 쉬다 = to breathe.\n숨을 참다 = to hold one's breath.",
     example:"A: 너무 빨리 뛰어서 숨이 차요.\nB: 잠깐 쉬세요. 숨을 깊이 쉬세요.\nA: 네, 좀 나아졌어요.",
     exampleSrc:"A: I ran too fast, so I'm out of breath.\nB: Rest a moment. Take a deep breath.\nA: Yes, I feel a bit better.",
     funFact:"숨 appears in many expressive phrases: 숨이 막히다 (to be suffocating), 숨을 죽이다 (to kill one's breath, i.e. hold still quietly), 숨바꼭질 (hide and seek, literally 'breath-change game')."},

    // --- Quiz batch 4 ---
    {type:"match", pairs:[
      {trg:"비밀", src:"secret"},
      {trg:"상처", src:"wound"},
      {trg:"보람", src:"worthwhileness"},
      {trg:"숨", src:"breath"}
    ]},

    {type:"fb",
     s:"소비자 {1}를 이해해야 마케팅을 잘 할 수 있어요.",
     a:["심리"],
     opts:["심리","비밀","불만","상처"],
     hint:"This Sino-Korean noun combines 'heart/mind' and 'principle.' It refers to the study of how people think and feel.",
     sSrc:"You need to understand consumer {1} to do marketing well."},

    // --- Tip card ---
    {type:"tip", title:"Nominalization with -ㅁ/음",
     text:"Korean turns descriptive verbs into abstract nouns using the suffix -ㅁ or -음:\n\n슬프다 (sad) > 슬픔 (sadness)\n아프다 (painful) > 아픔 (pain)\n어렵다 (difficult) > 어려움 (difficulty)\n기쁘다 (happy) > 기쁨 (joy)\n\nFor verb stems ending in a consonant, use -음. For vowel-final stems, use -ㅁ. These nouns describe abstract states and are common in literary Korean.",
     deepDive:{title:"Nominalization Patterns",
      text:"The -ㅁ/음 suffix creates 'the state of being X.' This is different from -기, which nominalizes actions: 달리기 (running as an activity) vs. 달림 (the state of running, rarely used). For emotions, -ㅁ/음 is strongly preferred: 슬픔, 기쁨, 아픔 are standard. The resulting nouns behave like regular nouns and take particles: 슬픔을 느끼다 (to feel sadness), 아픔이 있다 (there is pain)."}},

    // --- Final quiz ---
    {type:"fb",
     s:"봉사활동을 하면 {1}이 있어요.",
     a:["보람"],
     opts:["보람","불만","비밀","심리"],
     hint:"This native Korean noun describes the deep satisfaction of meaningful work. It captures the feeling that your effort was truly worthwhile.",
     sSrc:"When you volunteer, there is a sense of {1}."},

    {type:"mc",
     q:"'숨을 참다'는 무슨 뜻이에요?",
     opts:["빨리 뛰다","크게 쉬다","깊이 쉬다","숨을 멈추다"],
     ans:"숨을 멈추다",
     hint:"When you 참다 (endure/hold), combined with breath, it means you temporarily stop the natural breathing process."}
  ]
};

export default LESSON_31;
