// Korean B1 Final Gap - Lesson 10: Emotions & Personality Traits
const LESSON_10 = {
  id:"kov2_b1fin_l10", title:"감정과 성격", icon:"😊", xp:15, board:true,
  steps:[
    {type:"intro", title:"Emotions & Personality Traits",
     desc:"Master adjectives and nouns for describing emotions, personality, and physical qualities. These words let you paint vivid pictures of people and feelings.",
     goals:["Learn 20 descriptive adjectives and emotion words","Describe personality traits and physical qualities","Use interjections and emotional expressions naturally"]},

    {type:"teach", trg:"착하다", src:"kind, good-natured, well-behaved", pos:"adj", gender:null,
     note:"Native Korean adjective. Describes moral goodness, especially in character.",
     example:"A: 그 아이가 착해요?\nB: 네, 정말 착한 아이예요.",
     exampleSrc:"A: Is that child well-behaved?\nB: Yes, they're a really good-natured child.",
     funFact:"착하다 is one of the highest compliments for a person's character. 착한 가격 (kind price) means a reasonably low price."},

    {type:"teach", trg:"젊다", src:"young", pos:"adj", gender:null,
     note:"Native Korean adjective. Used for people (not objects).",
     example:"A: 아직 젊으니까 걱정하지 마세요.\nB: 고마워요, 아직 젊을 때 열심히 할게요.",
     exampleSrc:"A: You're still young, so don't worry.\nB: Thanks, I'll work hard while I'm still young.",
     funFact:"젊다 is only for people. For new or young objects, Korean uses 새롭다 (new) or 어리다 (young, for children/animals)."},

    {type:"teach", trg:"좁다", src:"narrow, cramped, small (space)", pos:"adj", gender:null,
     note:"Native Korean adjective. Opposite of 넓다 (wide/spacious).",
     example:"A: 이 방이 좀 좁지 않아요?\nB: 네, 좀 좁지만 괜찮아요.",
     exampleSrc:"A: Isn't this room a bit cramped?\nB: Yes, it's a bit small but it's okay.",
     funFact:"Seoul apartments are often described as 좁다 due to high density. The contrast between 좁은 집 (cramped house) and 넓은 집 (spacious house) drives real estate dreams."},

    {type:"teach", trg:"짙다", src:"dark, deep, thick (color/fog)", pos:"adj", gender:null,
     note:"Native Korean adjective. For dense or deep qualities of color, fog, or flavor.",
     example:"A: 안개가 짙어요.\nB: 네, 짙은 안개 때문에 운전 조심하세요.",
     exampleSrc:"A: The fog is thick.\nB: Yes, be careful driving because of the thick fog.",
     funFact:"짙다 pairs with sensory experiences: 짙은 색 (deep color), 짙은 향기 (strong fragrance), 짙은 안개 (thick fog). It implies intensity."},

    {type:"teach", trg:"차갑다", src:"cold (to the touch), cold-hearted", pos:"adj", gender:null,
     note:"Native Korean adjective. Physical cold or emotionally cold.",
     example:"A: 물이 차가워요!\nB: 냉장고에 있던 물이라서요.",
     exampleSrc:"A: The water is cold!\nB: It's because it was in the fridge.",
     funFact:"차갑다 can describe personality: 차가운 사람 (cold person). It is the opposite of 따뜻하다 (warm), which also works for both temperature and personality."},

    {type:"mc",
     q:"안개가 아주 두꺼울 때 어떻게 표현해요?",
     opts:["짙다","차갑다","착하다","좁다"],
     ans:"짙다",
     hint:"This adjective describes density or depth, used for fog, color, and fragrance."},

    {type:"teach", trg:"편안하다", src:"comfortable, at ease", pos:"adj", gender:null,
     note:"Sino-Korean (便安). 편 (便) = convenient, 안 (安) = peaceful.",
     example:"A: 이 소파가 편안해요?\nB: 네, 정말 편안해요. 잠이 올 것 같아요.",
     exampleSrc:"A: Is this sofa comfortable?\nB: Yes, it's really comfortable. I feel like falling asleep.",
     funFact:"편안하다 covers both physical comfort (편안한 의자) and emotional ease (마음이 편안하다). It is a state Koreans actively seek."},

    {type:"teach", trg:"편리하다", src:"convenient, handy", pos:"adj", gender:null,
     note:"Sino-Korean (便利). 편 (便) = convenient, 리 (利) = beneficial.",
     example:"A: 이 앱이 편리해요?\nB: 네, 사용하기 정말 편리해요.",
     exampleSrc:"A: Is this app convenient?\nB: Yes, it's really convenient to use.",
     funFact:"Korea is obsessed with 편리. From heated toilet seats to delivery in 30 minutes, everything is designed for maximum 편리함 (convenience)."},

    {type:"teach", trg:"특별하다", src:"special, exceptional", pos:"adj", gender:null,
     note:"Sino-Korean (特別). 특 (特) = special, 별 (別) = different.",
     example:"A: 오늘 특별한 날이에요?\nB: 네, 제 생일이에요!",
     exampleSrc:"A: Is today a special day?\nB: Yes, it's my birthday!",
     funFact:"특별 시 (特別市) is Seoul's official title: Special Metropolitan City. It distinguishes Seoul from all other Korean cities."},

    {type:"teach", trg:"특별히", src:"especially, particularly, specially", pos:"adv", gender:null,
     note:"Adverb form of 특별하다.",
     example:"A: 특별히 좋아하는 음식이 있어요?\nB: 특별히 좋아하는 건 김치찌개예요.",
     exampleSrc:"A: Is there any food you particularly like?\nB: What I particularly like is kimchi stew.",
     funFact:"특별히 is often used with negatives too: 특별히 할 일 없어요 (nothing particular to do). It modulates expectations up or down."},

    {type:"teach", trg:"특별", src:"special (as noun/modifier)", pos:"noun", gender:null,
     note:"Sino-Korean (特別). Used as noun or prefix: 특별 할인, 특별 행사.",
     example:"A: 특별 할인이 있어요?\nB: 네, 이번 주만 특별 할인이에요.",
     exampleSrc:"A: Is there a special discount?\nB: Yes, it's a special discount only this week.",
     funFact:"특별 as a prefix appears everywhere: 특별 메뉴 (special menu), 특별 손님 (special guest), 특별 방송 (special broadcast)."},

    {type:"fb",
     s:"이 의자는 앉으면 정말 {1}.",
     a:["편안해요"],
     opts:["편안해요","편리해요","특별해요","착해요"],
     hint:"This adjective describes the physical comfort of sitting in something relaxing.",
     sSrc:"This chair is really {1} when you sit in it."},

    {type:"teach", trg:"튼튼하다", src:"sturdy, strong, solid, robust", pos:"adj", gender:null,
     note:"Native Korean adjective. Physical strength or durability.",
     example:"A: 이 가방이 튼튼해요?\nB: 네, 아주 튼튼해요. 오래 쓸 수 있어요.",
     exampleSrc:"A: Is this bag sturdy?\nB: Yes, very sturdy. You can use it for a long time.",
     funFact:"튼튼하다 is used for both objects and health: 몸이 튼튼하다 (the body is strong/healthy). Korean grandmothers always wish 튼튼하게 자라라 (grow up strong)."},

    {type:"teach", trg:"조심스럽다", src:"cautious, careful, delicate", pos:"adj", gender:null,
     note:"Derived from 조심 (caution) + 스럽다. Having the quality of being careful.",
     example:"A: 왜 그렇게 조심스러워요?\nB: 깨지기 쉬운 거라서 조심스럽게 들어요.",
     exampleSrc:"A: Why are you being so careful?\nB: It breaks easily, so I'm holding it carefully.",
     funFact:"조심스럽다 implies thoughtful caution, while 조심하다 (to be careful) is more active. 조심스러운 태도 means a cautiously considered attitude."},

    {type:"teach", trg:"조심하다", src:"to be careful, to watch out", pos:"verb", gender:null,
     note:"Sino-Korean (操心). One of the most common warnings in Korean.",
     example:"A: 조심하세요! 바닥이 미끄러워요.\nB: 알려 주셔서 감사합니다.",
     exampleSrc:"A: Be careful! The floor is slippery.\nB: Thank you for telling me.",
     funFact:"조심하세요 is heard everywhere: 감기 조심하세요 (watch out for colds), 운전 조심하세요 (drive carefully). It shows genuine care for others."},

    {type:"teach", trg:"커다랗다", src:"very large, huge, enormous", pos:"adj", gender:null,
     note:"Emphatic form of 크다. Much bigger than just 'big.'",
     example:"A: 커다란 나무가 있네요!\nB: 네, 100년 된 커다란 나무예요.",
     exampleSrc:"A: There's a huge tree!\nB: Yes, it's a 100-year-old enormous tree.",
     funFact:"커다랗다 is the intensified form of 크다. Korean has several such patterns: 새빨갛다 (very red), 시커멓다 (very dark). They add emotional emphasis."},

    {type:"teach", trg:"조그맣다", src:"very small, tiny, little", pos:"adj", gender:null,
     note:"Emphatic diminutive of 작다. Even smaller than 'small.'",
     example:"A: 이 강아지가 조그마해요!\nB: 네, 아직 아기라서 조그마해요.",
     exampleSrc:"A: This puppy is so tiny!\nB: Yes, it's still a baby so it's tiny.",
     funFact:"조그맣다 is the cute, emphatic version of 작다. It is often used affectionately, especially about babies, puppies, and tiny objects."},

    {type:"match", pairs:[
      {trg:"튼튼하다", src:"sturdy/robust"},
      {trg:"커다랗다", src:"enormous"},
      {trg:"조그맣다", src:"tiny"},
      {trg:"편안하다", src:"comfortable"},
      {trg:"조심하다", src:"to be careful"}
    ]},

    {type:"teach", trg:"웃음", src:"laughter, smile", pos:"noun", gender:null,
     note:"Derived from 웃다 (to laugh) + 음 (nominalizer). The act of laughing.",
     example:"A: 웃음이 끊이지 않았어요.\nB: 정말 재미있는 시간이었어요.",
     exampleSrc:"A: The laughter never stopped.\nB: It was a really fun time.",
     funFact:"웃음 is highly valued in Korean culture. The phrase 웃는 얼굴에 침 못 뱉는다 means 'you can't spit on a smiling face,' emphasizing the power of a smile."},

    {type:"teach", trg:"한숨", src:"sigh", pos:"noun", gender:null,
     note:"Compound: 한 (one/big) + 숨 (breath). A deep exhale of worry.",
     example:"A: 왜 한숨을 쉬어요?\nB: 걱정이 많아서 한숨이 나와요.",
     exampleSrc:"A: Why are you sighing?\nB: I have a lot of worries, so sighs come out.",
     funFact:"한숨 쉬다 (to sigh) is a universal Korean expression of stress. In dramas, a character's 한숨 often signals an internal struggle."},

    {type:"teach", trg:"충격", src:"shock, impact", pos:"noun", gender:null,
     note:"Sino-Korean (衝擊). 충 (衝) = rush/hit, 격 (擊) = strike.",
     example:"A: 그 뉴스를 듣고 충격을 받았어요.\nB: 저도요. 정말 충격적이었어요.",
     exampleSrc:"A: I was shocked hearing that news.\nB: Me too. It was really shocking.",
     funFact:"충격 is used for both physical impact (교통 충격 = traffic impact) and emotional shock (문화 충격 = culture shock). 문화 충격 is a common topic for foreigners in Korea."},

    {type:"teach", trg:"참", src:"oh, by the way, truly (interjection)", pos:"intj", gender:null,
     note:"Versatile interjection. Introduces a new topic or expresses genuine feeling.",
     example:"A: 참, 내일 시간 있어요?\nB: 왜요? 무슨 일이에요?",
     exampleSrc:"A: Oh, by the way, are you free tomorrow?\nB: Why? What's up?",
     funFact:"참 has two uses: as an interjection ('oh, by the way') and as an adverb ('truly/really'). 참 잘했다 means 'truly well done.'"},

    {type:"teach", trg:"음", src:"hmm, um (thinking sound)", pos:"intj", gender:null,
     note:"Filler interjection. Used while thinking or hesitating.",
     example:"A: 뭐 먹을까요?\nB: 음... 피자 어때요?",
     exampleSrc:"A: What shall we eat?\nB: Hmm... how about pizza?",
     funFact:"음 is Korea's thinking sound, equivalent to 'hmm' or 'um.' In text messages, Koreans write 음 or 흠 when pondering something."},

    {type:"mc",
     q:"걱정이 많을 때 깊은 숨을 내쉬는 것은?",
     opts:["웃음","한숨","충격","참"],
     ans:"한숨",
     hint:"This word means a deep breath released from worry or stress, like a sigh."}
  ]
};
export default LESSON_10;
