// Korean B2. Batch 6, Lesson 8: Intensity and Waste
// Words: 심해지다, 싱싱하다, 싶어지다, 싸구려, 싹, 싼값, 쌍, 쌍둥이, 썩, 썰렁하다, 쓰다(adj), 쓰다듬다, 쓰러지다, 쓰레기통, 쓰이다, 쓴맛, 쓸다, 쓸데없다, 쓸데없이, 쓸쓸하다

const LESSON_8 = {
  id:"kov2_b2b6_l8", title:"심해지는 감정들", icon:"🌊", xp:15, board:true,
  steps:[
    {type:"intro", title:"심해지는 감정들",
     desc:"Learn words about worsening conditions, freshness, wastefulness, and loneliness. Many of these native Korean words carry rich emotional nuance.",
     goals:["Master 20 words about intensity, bitterness, and futility","Understand native Korean adjective patterns with -하다","Use emotional descriptors in everyday conversation"]},

    {type:"teach", trg:"심해지다", src:"to become severe, to worsen", pos:"verb", gender:null,
     note:"심하다 (severe) + -해지다 (become).\nA condition growing worse over time.",
     example:"A: 요즘 미세먼지가 심해졌어.\nB: 마스크 꼭 써야겠다.",
     exampleSrc:"A: The fine dust has gotten worse lately.\nB: We really need to wear masks.",
     funFact:"Korean weather apps show 미세먼지 (fine dust) severity levels. When it 심해지다, outdoor activities stop."},

    {type:"teach", trg:"싱싱하다", src:"to be fresh, to be vivid", pos:"adj", gender:null,
     note:"Native Korean onomatopoeic adjective.\nDescribes freshness in food or liveliness.",
     example:"A: 이 생선이 정말 싱싱하다!\nB: 오늘 아침에 잡은 거래.",
     exampleSrc:"A: This fish is really fresh!\nB: They say it was caught this morning.",
     funFact:"At Korean fish markets like Jagalchi in Busan, vendors shout 싱싱해요 to advertise their catch."},

    {type:"teach", trg:"싶어지다", src:"to come to want, to start wanting", pos:"aux", gender:null,
     note:"-고 싶다 (want to) + -어지다 (become).\nGradually developing a desire.",
     example:"A: 날씨가 좋으니까 여행 가고 싶어졌어.\nB: 나도! 어디로 갈까?",
     exampleSrc:"A: Since the weather is nice, I have started wanting to travel.\nB: Me too! Where should we go?",
     funFact:"This auxiliary form adds a sense of gradual, almost involuntary desire, unlike the direct -고 싶다."},

    {type:"mc",
     q:"'먹고 싶어졌다'는 무슨 뜻인가요?",
     opts:["먹고 싶은 마음이 생겼다","이미 먹었다","먹기 싫어졌다","먹을 수 없다"],
     ans:"먹고 싶은 마음이 생겼다",
     hint:"The -어지다 ending shows a gradual change of state. What feeling developed?"},

    {type:"teach", trg:"싸구려", src:"cheap goods, cheap quality", pos:"noun", gender:null,
     note:"Native Korean. From 싸다 (cheap).\nLow-quality, bargain-bin items.",
     example:"A: 이거 싸구려 아니야?\nB: 아니, 가격은 싸지만 품질은 좋아.",
     exampleSrc:"A: Isn't this cheap junk?\nB: No, the price is low but the quality is good.",
     funFact:"싸구려 always implies low quality, not just low price. For good deals, Koreans say 가성비 (price-performance ratio)."},

    {type:"teach", trg:"싹", src:"completely, entirely; sprout", pos:"adv", gender:null,
     note:"Native Korean adverb.\nDoing something completely, leaving nothing behind.",
     example:"A: 냉장고에 있던 음식을 싹 먹었어?\nB: 미안, 배가 너무 고팠어.",
     exampleSrc:"A: Did you eat everything in the fridge completely?\nB: Sorry, I was really hungry.",
     funFact:"As a noun, 싹 means sprout or bud. As an adverb, it means wiping something clean or doing it all."},

    {type:"teach", trg:"싼값", src:"low price, bargain price", pos:"noun", gender:null,
     note:"싸다 (cheap) + 값 (price).\nA notably low price for something.",
     example:"A: 싼값에 좋은 물건을 샀어.\nB: 어디서? 나도 가고 싶어.",
     exampleSrc:"A: I bought good stuff at a bargain price.\nB: Where? I want to go too.",
     funFact:"Korean bargain hunters love 싼값 deals. Daiso stores became popular by offering everything at 싼값."},

    {type:"teach", trg:"쌍", src:"pair, couple", pos:"noun", gender:null,
     note:"Sino-Korean. 雙 (pair).\nTwo things that naturally go together.",
     example:"A: 양말 한 쌍만 사면 돼.\nB: 알겠어, 무슨 색으로?",
     exampleSrc:"A: I just need to buy one pair of socks.\nB: Got it, what color?",
     funFact:"Korean counting uses 쌍 for paired items like socks and gloves, similar to how English uses 'pair.'"},

    {type:"teach", trg:"쌍둥이", src:"twins", pos:"noun", gender:null,
     note:"쌍 (pair) + 둥이 (affectionate suffix).\nTwo children born at the same time.",
     example:"A: 저 아이들 쌍둥이야?\nB: 응, 일란성 쌍둥이래.",
     exampleSrc:"A: Are those kids twins?\nB: Yes, they say they are identical twins.",
     funFact:"Korea distinguishes 일란성 쌍둥이 (identical twins, one egg) and 이란성 쌍둥이 (fraternal twins, two eggs)."},

    {type:"fb",
     s:"우리 반에 {1}가 있는데 얼굴이 똑같아서 구별이 안 돼.",
     a:["쌍둥이"],
     opts:["쌍둥이","쌍","싸구려","싹"],
     hint:"Two siblings born at the same time who look identical to each other.",
     sSrc:"There are {1} in our class and their faces are identical so I cannot tell them apart."},

    {type:"teach", trg:"썩", src:"quite, very (negative nuance)", pos:"adv", gender:null,
     note:"Native Korean adverb.\nUsed mainly in negative sentences for emphasis.",
     example:"A: 그 영화 어땠어?\nB: 썩 좋지는 않았어.",
     exampleSrc:"A: How was that movie?\nB: It was not very good.",
     funFact:"썩 is almost always used with negatives: 썩 좋지 않다, 썩 마음에 들지 않다. Positive use is very rare."},

    {type:"teach", trg:"썰렁하다", src:"to feel chilly; to fall flat (joke)", pos:"adj", gender:null,
     note:"Native Korean adjective.\nPhysically chilly or awkwardly cold atmosphere.",
     example:"A: 왜 분위기가 이렇게 썰렁해?\nB: 아까 그 농담이 안 통한 것 같아.",
     exampleSrc:"A: Why is the atmosphere so chilly?\nB: I think that joke from earlier did not land.",
     funFact:"Korean internet culture uses 썰렁 for bad jokes. A 썰렁한 농담 is a joke so bad it makes the room freeze."},

    {type:"teach", trg:"쓰다", src:"to be bitter (taste)", pos:"adj", gender:null,
     note:"Native Korean adjective (homophone of 쓰다 to write/to use).\nBitter flavor like coffee or medicine.",
     example:"A: 이 약이 너무 쓰다.\nB: 물이랑 같이 먹어 봐.",
     exampleSrc:"A: This medicine is too bitter.\nB: Try taking it with water.",
     funFact:"쓰다 has three different meanings depending on context: bitter (adj), to write (verb), to use (verb)."},

    {type:"teach", trg:"쓰다듬다", src:"to stroke, to pat gently", pos:"verb", gender:null,
     note:"Native Korean verb.\nGentle, comforting touch with the hand.",
     example:"A: 아이가 울어서 머리를 쓰다듬어 줬어.\nB: 그랬더니 울음을 그쳤어?",
     exampleSrc:"A: The child was crying so I stroked their head.\nB: Did they stop crying after that?",
     funFact:"In Korean culture, 머리를 쓰다듬다 (stroking the head) is a warm, affectionate gesture for children."},

    {type:"teach", trg:"쓰러지다", src:"to collapse, to fall down", pos:"verb", gender:null,
     note:"Native Korean verb.\nFalling down from exhaustion, illness, or force.",
     example:"A: 갑자기 쓰러지셨다고요?\nB: 네, 과로 때문인 것 같아요.",
     exampleSrc:"A: They suddenly collapsed?\nB: Yes, it seems to be from overwork.",
     funFact:"과로로 쓰러지다 (collapsing from overwork) is unfortunately common in Korean work culture discussions."},

    {type:"teach", trg:"쓰레기통", src:"trash can, garbage bin", pos:"noun", gender:null,
     note:"쓰레기 (trash) + 통 (container).\nA bin for disposing of waste.",
     example:"A: 쓰레기통이 어디 있어요?\nB: 복도 끝에 있어요.",
     exampleSrc:"A: Where is the trash can?\nB: It is at the end of the hallway.",
     funFact:"Public 쓰레기통 are rare in Korea. Most people carry trash home, which is why streets stay clean."},

    {type:"teach", trg:"쓰이다", src:"to be used, to be written", pos:"verb", gender:null,
     note:"쓰다 (to use/write) + -이다 (passive).\nThe passive form of using or writing.",
     example:"A: 이 단어는 어디에 많이 쓰여?\nB: 주로 공식 문서에 쓰여.",
     exampleSrc:"A: Where is this word used a lot?\nB: It is mainly used in official documents.",
     funFact:"Korean passives with -이다 are common: 먹이다 (to be fed), 쓰이다 (to be used), 보이다 (to be seen)."},

    {type:"mc",
     q:"'이 재료는 요리에 자주 쓰인다'에서 '쓰인다'의 뜻은?",
     opts:["쓰러진다","사용된다","써진다","쓸모없다"],
     ans:"사용된다",
     hint:"The passive form of the verb meaning 'to use.' What happens to ingredients in cooking?"},

    {type:"teach", trg:"쓴맛", src:"bitter taste", pos:"noun", gender:null,
     note:"쓰다 (bitter) + 맛 (taste).\nThe flavor of bitterness.",
     example:"A: 커피의 쓴맛이 좋아.\nB: 나는 설탕을 넣어야 해.",
     exampleSrc:"A: I like the bitter taste of coffee.\nB: I need to add sugar.",
     funFact:"Korean taste vocabulary includes 단맛 (sweet), 쓴맛 (bitter), 신맛 (sour), 짠맛 (salty), 매운맛 (spicy)."},

    {type:"teach", trg:"쓸다", src:"to sweep", pos:"verb", gender:null,
     note:"Native Korean verb.\nCleaning a floor with a broom.",
     example:"A: 마당을 쓸어야 해.\nB: 빗자루 어디 있어?",
     exampleSrc:"A: I need to sweep the yard.\nB: Where is the broom?",
     funFact:"Korean 대청소 (big cleaning) days always start with 쓸다. Schools have students sweep classrooms daily."},

    {type:"teach", trg:"쓸데없다", src:"to be useless, to be pointless", pos:"adj", gender:null,
     note:"쓸 데 (place to use) + 없다 (not exist).\nHaving no practical purpose.",
     example:"A: 쓸데없는 걱정 좀 그만해.\nB: 미안, 습관이야.",
     exampleSrc:"A: Stop worrying about pointless things.\nB: Sorry, it is a habit.",
     funFact:"쓸데없는 걱정 (useless worrying) and 쓸데없는 소리 (pointless talk) are common dismissive phrases."},

    {type:"teach", trg:"쓸데없이", src:"uselessly, pointlessly", pos:"adv", gender:null,
     note:"쓸데없다 + -이 (adverb suffix).\nDoing something for no good reason.",
     example:"A: 왜 쓸데없이 돈을 썼어?\nB: 충동구매했어, 후회돼.",
     exampleSrc:"A: Why did you spend money pointlessly?\nB: I impulse-bought it, I regret it.",
     funFact:"쓸데없이 often pairs with negative actions: 쓸데없이 걱정하다, 쓸데없이 돈 쓰다, 쓸데없이 시간 보내다."},

    {type:"teach", trg:"쓸쓸하다", src:"to be lonely, to feel desolate", pos:"adj", gender:null,
     note:"Native Korean adjective (onomatopoeic origin).\nA quiet, empty loneliness.",
     example:"A: 혼자 있으니까 좀 쓸쓸하다.\nB: 놀러 올까?",
     exampleSrc:"A: It feels a bit lonely being alone.\nB: Should I come hang out?",
     funFact:"쓸쓸하다 evokes autumn wind and empty streets. It is more poetic than 외롭다 (lonely), with a wistful tone."},

    {type:"fb",
     s:"가을 저녁에 혼자 걸으면 왠지 {1}.",
     a:["쓸쓸해요"],
     opts:["쓸쓸해요","쓸데없어요","썰렁해요","싱싱해요"],
     hint:"A poetic loneliness, the kind you feel walking alone on an autumn evening.",
     sSrc:"Walking alone on an autumn evening feels somewhat {1}."},

    {type:"match", pairs:[
      {trg:"싱싱하다", src:"to be fresh"},
      {trg:"쓸쓸하다", src:"to be lonely"},
      {trg:"쓸데없다", src:"to be useless"},
      {trg:"썰렁하다", src:"to feel chilly"}
    ]}
  ]
};

export default LESSON_8;
