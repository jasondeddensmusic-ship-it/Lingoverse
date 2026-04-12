// Korean B1 Gap - Lesson 5: Emotions, Feelings, and Inner States
const LESSON_5 = {
  id:"kov2_b1gap_l5", title:"감정과 마음", icon:"💭", xp:15, board:true,
  steps:[
    {type:"intro", title:"Emotions, Feelings, and Inner States",
     desc:"Express your inner world in Korean. Learn vocabulary for emotions, psychological states, and expectations. These words are essential for B1-level conversations about how you feel and what you anticipate.",
     goals:["Master 20 emotion and feeling vocabulary words","Express curiosity, frustration, and surprise","Discuss expectations, memory, and personal qualities"]},

    // --- Teach 1-4 ---
    {type:"teach", trg:"감정", src:"emotion, feeling", pos:"noun", gender:null,
     note:"General term for emotions. 감정적 (emotional), 감정 표현 (emotional expression).",
     example:"A: 감정을 잘 표현하세요?\nB: 아니요, 감정을 숨기는 편이에요.\nA: 감정을 표현하는 게 좋아요.",
     exampleSrc:"A: Do you express your emotions well?\nB: No, I tend to hide my emotions.\nA: It's good to express your emotions.",
     funFact:"From hanja: 感 (feel) + 情 (emotion/feeling). The same 感 appears in 감동 (being moved) and 감사 (gratitude). Korean has a rich vocabulary for emotional states."},

    {type:"teach", trg:"감동", src:"being moved, deep impression", pos:"noun", gender:null,
     note:"The feeling of being deeply touched. 감동적 (moving/touching), 감동받다 (to be moved).",
     example:"A: 그 영화 봤어요?\nB: 네, 정말 감동적이었어요.\nA: 저도 감동받아서 울었어요.",
     exampleSrc:"A: Have you seen that movie?\nB: Yes, it was really moving.\nA: I was so moved that I cried.",
     funFact:"From hanja: 感 (feel) + 動 (move). Literally 'feelings move.' Koreans use 감동 frequently to describe art, music, speeches, and acts of kindness that stir the heart."},

    {type:"teach", trg:"기쁨", src:"joy, happiness", pos:"noun", gender:null,
     note:"Noun form of 기쁘다 (to be happy). Pure Korean word.",
     example:"A: 합격 소식을 들었을 때 기쁨이 컸어요?\nB: 네, 기쁨의 눈물을 흘렸어요.\nA: 그 기쁨을 나누고 싶었겠네요.",
     exampleSrc:"A: Was the joy great when you heard the acceptance news?\nB: Yes, I shed tears of joy.\nA: You must have wanted to share that joy.",
     funFact:"Native Korean. The adjective 기쁘다 becomes the noun 기쁨 through the -ㅁ suffix. This pattern creates many emotion nouns: 슬프다 > 슬픔 (sadness), 아프다 > 아픔 (pain)."},

    {type:"teach", trg:"긴장", src:"tension, nervousness", pos:"noun", gender:null,
     note:"Physical or mental tension. 긴장하다 (to be nervous), 긴장감 (sense of tension).",
     example:"A: 면접 전에 긴장돼요?\nB: 네, 항상 긴장해요.\nA: 긴장을 풀려면 심호흡을 하세요.",
     exampleSrc:"A: Do you get nervous before interviews?\nB: Yes, I always get nervous.\nA: To relieve tension, take deep breaths.",
     funFact:"From hanja: 緊 (tight/tense) + 張 (stretch/spread). Literally 'tightly stretched.' The same 張 appears in 주장 (claim/assertion) and 긴장감 adds 感 (feeling) for 'a sense of tension.'"},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"영화를 보고 울었다면, 어떤 감정을 느꼈을까요?",
     opts:["긴장","기쁨","감동","궁금함"],
     ans:"감동",
     hint:"When a movie makes you cry (in a good way), you were deeply touched or moved."},

    {type:"fb",
     s:"면접 전에 {1}을 풀기 위해 심호흡을 했어요.",
     a:["긴장"],
     opts:["긴장","감동","기쁨","감정"],
     hint:"Before the interview, you did deep breathing to relieve your nervousness.",
     sSrc:"I did deep breathing to relieve {1} before the interview."},

    // --- Teach 5-8 ---
    {type:"teach", trg:"고민", src:"worry, concern, deliberation", pos:"noun", gender:null,
     note:"Deep thinking about a problem. 고민하다 (to worry/agonize), 고민거리 (source of worry).",
     example:"A: 요즘 무슨 고민이 있어요?\nB: 진로에 대한 고민이 있어요.\nA: 고민이 있으면 이야기하세요.",
     exampleSrc:"A: Do you have any worries lately?\nB: I have concerns about my career path.\nA: If you have worries, talk about them.",
     funFact:"From hanja: 苦 (bitter/suffer) + 悶 (anguish/worry). Literally 'bitter anguish.' 고민 상담 (worry counseling) is a popular segment on Korean radio and TV shows."},

    {type:"teach", trg:"고통", src:"pain, suffering", pos:"noun", gender:null,
     note:"Physical or emotional suffering. Stronger than 아픔.",
     example:"A: 큰 고통을 겪었어요?\nB: 네, 고통스러운 시간이었어요.\nA: 고통을 극복해서 대단해요.",
     exampleSrc:"A: Did you go through great suffering?\nB: Yes, it was a painful time.\nA: It's impressive that you overcame the suffering.",
     funFact:"From hanja: 苦 (bitter) + 痛 (pain). Both characters independently mean pain. 고통스럽다 (to be painful) adds the descriptive suffix. The same 苦 appears in 고생 (hardship)."},

    {type:"teach", trg:"겁", src:"fear, fright", pos:"noun", gender:null,
     note:"Native Korean. 겁이 나다 (to feel scared), 겁쟁이 (coward).",
     example:"A: 무서운 영화를 좋아해요?\nB: 아니요, 겁이 많아요.\nA: 겁을 내지 마세요, 재미있어요!",
     exampleSrc:"A: Do you like scary movies?\nB: No, I scare easily (I have a lot of fear).\nA: Don't be afraid, they're fun!",
     funFact:"Native Korean word. 겁이 나다 literally means 'fear arises.' The expression 겁이 많다 (to have a lot of fear) describes a timid personality. 겁쟁이 adds -쟁이 (person who is characterized by)."},

    {type:"teach", trg:"느낌", src:"feeling, impression", pos:"noun", gender:null,
     note:"More sensory than 감정. Can describe physical sensations or vibes.",
     example:"A: 이 음악의 느낌이 좋아요.\nB: 따뜻한 느낌이 들어요.\nA: 첫 느낌이 중요하죠.",
     exampleSrc:"A: The feeling of this music is nice.\nB: It gives a warm feeling.\nA: First impressions are important.",
     funFact:"Noun form of 느끼다 (to feel) via the -ㅁ suffix. 느낌 is more about sensory/intuitive impressions, while 감정 is about deeper emotions. 'I have a feeling that...' uses 느낌."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"고민", src:"worry, concern"},
      {trg:"고통", src:"pain, suffering"},
      {trg:"겁", src:"fear, fright"},
      {trg:"느낌", src:"feeling, impression"}
    ]},

    {type:"mc",
     q:"'겁이 많다'의 뜻은?",
     opts:["기쁨이 큰 것","쉽게 무서워하는 성격","감동을 잘 받는 것","고민이 많은 것"],
     ans:"쉽게 무서워하는 성격",
     hint:"Having a lot of 겁 (fear) describes someone who is easily frightened or timid."},

    // --- Teach 9-12 ---
    {type:"teach", trg:"느끼다", src:"to feel", pos:"verb", gender:null,
     note:"Both physical and emotional feeling. Very common B1 verb.",
     example:"A: 한국에서 뭘 느꼈어요?\nB: 사람들의 따뜻함을 느꼈어요.\nA: 저도 같은 걸 느꼈어요.",
     exampleSrc:"A: What did you feel in Korea?\nB: I felt the warmth of the people.\nA: I felt the same thing.",
     funFact:"Native Korean verb. The past tense form 느꼈다 uses the irregular ㄲ doubling. 느끼다 covers all senses: you can 느끼다 cold, happiness, hunger, or a vague intuition."},

    {type:"teach", trg:"느껴지다", src:"to be felt, to come across as", pos:"verb", gender:null,
     note:"Passive of 느끼다. The feeling arrives without effort from the subject.",
     example:"A: 봄이 느껴져요?\nB: 네, 따뜻한 바람이 느껴져요.\nA: 봄의 느낌이 좋죠.",
     exampleSrc:"A: Can you feel spring?\nB: Yes, I can feel the warm breeze.\nA: The feeling of spring is nice.",
     funFact:"The -어지다 suffix creates passives from active verbs: 느끼다 > 느껴지다, 보다 > 보이다, 듣다 > 들리다. This passive form suggests the sensation comes naturally without trying."},

    {type:"teach", trg:"궁금하다", src:"to be curious", pos:"adj", gender:null,
     note:"Descriptive verb (adjective). Used when you want to know something.",
     example:"A: 궁금한 게 있어요.\nB: 뭐가 궁금해요?\nA: 한국에서 가장 인기 있는 음식이 궁금해요.",
     exampleSrc:"A: I have something I'm curious about.\nB: What are you curious about?\nA: I'm curious about the most popular food in Korea.",
     funFact:"From hanja: 窮 (extreme/exhaust) + 金 is a folk etymology, but the actual origin is debated. 궁금증 (curiosity) adds -증 (symptom), treating curiosity like a condition you catch."},

    {type:"teach", trg:"답답하다", src:"to be frustrated, to feel suffocated", pos:"adj", gender:null,
     note:"Both physical (stuffy) and emotional (frustrated). Very Korean emotion.",
     example:"A: 왜 이렇게 답답해요?\nB: 일이 안 풀려서 답답해요.\nA: 답답하면 산책을 해 보세요.",
     exampleSrc:"A: Why am I so frustrated?\nB: Things aren't working out, so I'm frustrated.\nA: If you're feeling stifled, try taking a walk.",
     funFact:"A uniquely Korean emotion that has no exact English equivalent. It describes the feeling of being trapped, stifled, or frustrated when things do not progress. Used for both stuffy rooms and emotional blockages."},

    // --- Quiz batch 3 ---
    {type:"fb",
     s:"봄바람이 따뜻하게 {1}.",
     a:["느껴져요"],
     opts:["느껴져요","느꼈어요","궁금해요","답답해요"],
     hint:"The warm spring breeze is passively felt. Use the form where the sensation arrives naturally.",
     sSrc:"The spring breeze {1} warm."},

    {type:"mc",
     q:"일이 잘 안 풀릴 때 느끼는 감정은?",
     opts:["기쁨","감동","궁금함","답답함"],
     ans:"답답함",
     hint:"When things are stuck and nothing is progressing, you feel stifled and frustrated."},

    // --- Teach 13-16 ---
    {type:"teach", trg:"당황하다", src:"to be flustered, to be taken aback", pos:"verb", gender:null,
     note:"Sudden confusion from an unexpected situation. 당황스럽다 (flustering).",
     example:"A: 갑자기 질문을 받아서 당황했어요.\nB: 당황하지 않으려면 준비가 필요해요.\nA: 맞아요, 당황하면 말이 안 나와요.",
     exampleSrc:"A: I was flustered because I got a sudden question.\nB: To avoid being flustered, you need preparation.\nA: Right, when flustered, words don't come out.",
     funFact:"From hanja: 唐 (reckless/absurd) + 慌 (panic/fluster). This emotion describes the split-second panic when something unexpected happens. Very common on TOPIK listening sections in dialogue reactions."},

    {type:"teach", trg:"놀랍다", src:"to be surprising, to be amazing", pos:"adj", gender:null,
     note:"Can be positive (amazing!) or neutral (surprising). 놀라운 (surprising, as modifier).",
     example:"A: 놀라운 소식이 있어요!\nB: 뭐예요? 놀랍게도 합격했어요?\nA: 네, 정말 놀랍죠?",
     exampleSrc:"A: There's surprising news!\nB: What? Surprisingly, did you pass?\nA: Yes, it's really surprising, right?",
     funFact:"From the verb 놀라다 (to be startled) + the descriptive suffix -ㅂ다. 놀라다 is native Korean. The adverb form 놀랍게도 (surprisingly) is very common in written Korean."},

    {type:"teach", trg:"기대", src:"expectation, anticipation", pos:"noun", gender:null,
     note:"Looking forward to something. 기대하다 (to expect), 기대에 부응하다 (to meet expectations).",
     example:"A: 새 영화에 기대가 돼요?\nB: 네, 기대가 커요.\nA: 기대에 부응하면 좋겠네요.",
     exampleSrc:"A: Are you looking forward to the new movie?\nB: Yes, my expectations are high.\nA: I hope it meets expectations.",
     funFact:"From hanja: 期 (period/expect) + 待 (wait). Literally 'expecting and waiting.' The same 期 appears in 기간 (period) and 학기 (semester). All involve anticipating a time."},

    {type:"teach", trg:"기대하다", src:"to expect, to look forward to", pos:"verb", gender:null,
     note:"Can be positive (anticipation) or neutral (expectation). Very common B1 verb.",
     example:"A: 좋은 결과를 기대하고 있어요.\nB: 너무 기대하면 실망할 수 있어요.\nA: 적당히 기대할게요.",
     exampleSrc:"A: I'm expecting good results.\nB: If you expect too much, you might be disappointed.\nA: I'll keep my expectations moderate.",
     funFact:"The phrase 기대에 못 미치다 (to fall short of expectations) and 기대 이상 (beyond expectations) are very common expressions in Korean reviews and evaluations."},

    // --- Quiz batch 4 ---
    {type:"fb",
     s:"갑자기 이름을 불러서 {1}했어요.",
     a:["당황"],
     opts:["당황","기대","감동","궁금"],
     hint:"When someone suddenly called your name, you were caught off guard and flustered.",
     sSrc:"I was {1} because my name was called suddenly."},

    {type:"match", pairs:[
      {trg:"당황하다", src:"to be flustered"},
      {trg:"놀랍다", src:"to be surprising"},
      {trg:"기대", src:"expectation"},
      {trg:"기대하다", src:"to expect"}
    ]},

    // --- Teach 17-20 ---
    {type:"teach", trg:"긍정적", src:"positive, optimistic", pos:"adj", gender:null,
     note:"Opposite of 부정적 (negative). Used for attitudes, outcomes, and reviews.",
     example:"A: 결과가 긍정적이에요?\nB: 네, 아주 긍정적인 반응이에요.\nA: 긍정적으로 생각합시다.",
     exampleSrc:"A: Is the result positive?\nB: Yes, the response is very positive.\nA: Let's think positively.",
     funFact:"From hanja: 肯 (agree/willing) + 定 (fix/settle) + 的 (target). Literally 'willingly settled,' meaning a favorable stance. The same 定 appears in 결정 (decision) from Lesson 1."},

    {type:"teach", trg:"매력", src:"charm, attractiveness", pos:"noun", gender:null,
     note:"Personal charm or appeal. 매력적 (charming), 매력 포인트 (charm point).",
     example:"A: 그 사람의 매력이 뭐예요?\nB: 웃는 모습이 매력적이에요.\nA: 한국어의 매력은 뭐라고 생각해요?",
     exampleSrc:"A: What's that person's charm?\nB: Their smile is charming.\nA: What do you think is the charm of Korean?",
     funFact:"From hanja: 魅 (enchant/bewitch) + 力 (power). Literally 'the power to enchant.' The character 魅 contains 鬼 (ghost/demon), hinting at supernatural attractiveness. 매력적 is a common compliment."},

    {type:"teach", trg:"기억", src:"memory", pos:"noun", gender:null,
     note:"Both the faculty of memory and a specific memory. 기억하다 (to remember).",
     example:"A: 좋은 기억이 있어요?\nB: 한국 여행의 기억이 가장 좋아요.\nA: 그 기억을 오래 간직하세요.",
     exampleSrc:"A: Do you have good memories?\nB: My memories of traveling in Korea are the best.\nA: Cherish those memories for a long time.",
     funFact:"From hanja: 記 (write down) + 億 (hundred million). Literally 'recording a hundred million things.' The same 記 appears in 기록 (record) and 일기 (diary)."},

    {type:"teach", trg:"기억하다", src:"to remember", pos:"verb", gender:null,
     note:"Active remembering. Opposite: 잊다/잊어버리다 (to forget).",
     example:"A: 첫 만남을 기억해요?\nB: 네, 잘 기억하고 있어요.\nA: 기억해 줘서 고마워요.",
     exampleSrc:"A: Do you remember our first meeting?\nB: Yes, I remember it well.\nA: Thank you for remembering.",
     funFact:"The expression 기억에 남다 (to remain in memory) describes an unforgettable experience. 기억력 adds 力 (power) to mean 'memory ability.' Both are common TOPIK vocabulary."},

    // --- Quiz batch 5 ---
    {type:"mc",
     q:"'긍정적'의 반대말은?",
     opts:["매력적","감동적","부정적","과학적"],
     ans:"부정적",
     hint:"The opposite of positive/optimistic uses the prefix 부 (不, meaning 'not')."},

    {type:"fb",
     s:"한국 여행의 {1}이 아직 생생해요.",
     a:["기억"],
     opts:["기억","기대","매력","감정"],
     hint:"The memories from your Korea trip are still vivid in your mind.",
     sSrc:"The {1} of my Korea trip is still vivid."},

    {type:"mc",
     q:"사람에게 '매력적이다'라고 하면 어떤 뜻인가요?",
     opts:["그 사람이 화가 났다","그 사람이 긴장하고 있다","그 사람이 답답해하고 있다","그 사람이 끌리는 점이 있다"],
     ans:"그 사람이 끌리는 점이 있다",
     hint:"매력 means charm or attractive power. The adjective form describes someone appealing."}
  ]
};
export default LESSON_5;
