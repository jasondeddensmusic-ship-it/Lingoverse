// Korean B1 Gap - Lesson 21: Physical Description and Qualities
const LESSON_21 = {
  id:"kov2_b1gap_l21", title:"생김새와 성질", icon:"🔍", xp:15, board:true,
  steps:[
    {type:"intro", title:"Physical Description and Qualities",
     desc:"Learn to describe the physical properties of objects and surroundings: thin, thick, deep, dark, round, and more. Build rich descriptive vocabulary for B1-level communication.",
     goals:["Learn 20 adjectives and nouns for physical description","Describe size, shape, texture, and light","Use descriptive adjectives in natural dialogue"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"가늘다", src:"to be thin, slender, fine", pos:"adj", gender:null,
     note:"For thin lines, threads, sounds. Opposite of 굵다 (thick).",
     example:"A: 이 국수는 면이 정말 가늘어요.\nB: 그래서 빨리 익어요.\nA: 가는 면이 더 맛있어요.",
     exampleSrc:"A: The noodles in this dish are really thin.\nB: That's why they cook fast.\nA: Thin noodles taste better.",
     funFact:"가늘다 describes fineness: 가는 목소리 (thin voice), 가는 허리 (slim waist). It implies delicacy, not weakness. Korean poetry uses it to suggest fragility and beauty."},

    {type:"teach", trg:"검다", src:"to be black, dark-colored", pos:"adj", gender:null,
     note:"Pure color adjective. 검은 머리 (black hair), 검은색 (the color black).",
     example:"A: 검은 고양이가 있어요!\nB: 어디요? 진짜 검은색이에요?\nA: 네, 눈만 반짝여요.",
     exampleSrc:"A: There's a black cat!\nB: Where? Is it really black?\nA: Yes, only its eyes sparkle.",
     funFact:"In Korean folk belief, 검은 콩 (black beans) bring good fortune. 검은머리 외국인 (black-haired foreigner) is a humorous expression for ethnically Korean people raised abroad."},

    {type:"teach", trg:"곱다", src:"to be fine, beautiful, gentle", pos:"adj", gender:null,
     note:"Describes fine texture or refined beauty. 고운 피부 (fine skin), 고운 모래 (fine sand).",
     example:"A: 피부가 정말 고와요.\nB: 고마워요. 매일 관리해요.\nA: 비결이 뭐예요?",
     exampleSrc:"A: Your skin is really beautiful.\nB: Thanks. I take care of it every day.\nA: What's your secret?",
     funFact:"곱다 has an irregular conjugation: 곱다 becomes 고와요 (not 곱아요). It shares this ㅂ-irregular pattern with 춥다, 덥다, and 아름답다. The stem vowel changes before -아/어."},

    {type:"teach", trg:"굵다", src:"to be thick, coarse", pos:"adj", gender:null,
     note:"For thick lines, threads, voices. Opposite of 가늘다 (thin).",
     example:"A: 이 펜은 선이 너무 굵어요.\nB: 가는 펜으로 바꿀까요?\nA: 네, 가는 게 좋겠어요.",
     exampleSrc:"A: This pen draws too thick a line.\nB: Shall I switch to a thin pen?\nA: Yes, a thin one would be better.",
     funFact:"굵은 목소리 (thick/deep voice) is a compliment for men. 굵은 글씨 (bold text) uses the same word. The character 굵 carries a sense of solidity and weight."},

    {type:"teach", trg:"둥글다", src:"to be round, circular", pos:"adj", gender:null,
     note:"Describes round shapes. 둥근 달 (round moon), 둥근 얼굴 (round face).",
     example:"A: 보름달이 정말 둥글어요.\nB: 네, 완벽하게 둥근 달이에요.\nA: 사진 찍어요!",
     exampleSrc:"A: The full moon is really round.\nB: Yes, it's a perfectly round moon.\nA: Let's take a photo!",
     funFact:"둥글다 is related to the mimetic word 동글동글 (round and cute). 둥근 세상 (round world) poetically means a harmonious world where sharp edges have been smoothed."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'가는 면'의 반대말은?",
     opts:["굵은 면","검은 면","둥근 면","고운 면"],
     ans:"굵은 면",
     hint:"If thin noodles are 가는 면, what adjective means thick or coarse? Think of the opposite pair.",
     },

    {type:"fb",
     s:"피부가 정말 {1}.",
     a:["고와요"],
     opts:["고와요","굵어요","검어요","둥글어요"],
     hint:"An adjective meaning fine or beautiful, often used for skin. It has an irregular conjugation.",
     sSrc:"Your skin is really {1}."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"두껍다", src:"to be thick (flat objects)", pos:"adj", gender:null,
     note:"For thick books, walls, ice. Opposite of 얇다. Irregular: 두꺼워요.",
     example:"A: 이 책이 너무 두꺼워요.\nB: 500페이지나 돼요.\nA: 언제 다 읽어요?",
     exampleSrc:"A: This book is so thick.\nB: It's 500 pages.\nA: When will I finish reading it?",
     funFact:"두껍다 vs. 굵다: use 두껍다 for flat things (books, walls, ice) and 굵다 for cylindrical things (rope, pens, limbs). Getting this distinction right sounds very natural."},

    {type:"teach", trg:"붉다", src:"to be red, reddish", pos:"adj", gender:null,
     note:"Literary/poetic red. More elegant than 빨갛다 (bright red).",
     example:"A: 저녁 하늘이 붉게 물들었어요.\nB: 정말 아름다워요.\nA: 노을이 참 예뻐요.",
     exampleSrc:"A: The evening sky is dyed red.\nB: It's really beautiful.\nA: The sunset is so pretty.",
     funFact:"붉다 carries warmth and literary beauty, while 빨갛다 is everyday bright red. 붉은 노을 (red sunset) and 붉은 단풍 (red autumn leaves) appear constantly in Korean poetry and songs."},

    {type:"teach", trg:"깊다", src:"to be deep", pos:"adj", gender:null,
     note:"Physical and metaphorical depth. 깊은 물 (deep water), 깊은 생각 (deep thought).",
     example:"A: 이 호수가 얼마나 깊어요?\nB: 아주 깊어요. 수영하면 안 돼요.\nA: 조심할게요.",
     exampleSrc:"A: How deep is this lake?\nB: Very deep. You shouldn't swim.\nA: I'll be careful.",
     funFact:"깊다 extends beautifully to emotions: 깊은 사랑 (deep love), 깊은 슬픔 (deep sadness), 깊은 밤 (deep night). The character carries philosophical weight in Korean literature."},

    {type:"teach", trg:"낡다", src:"to be old, worn out", pos:"adj", gender:null,
     note:"For objects, not people. 낡은 옷 (worn clothes), 낡은 집 (old house).",
     example:"A: 이 가방이 너무 낡았어요.\nB: 새 가방을 살까요?\nA: 아니요, 이 가방이 편해요.",
     exampleSrc:"A: This bag is so worn out.\nB: Shall we buy a new bag?\nA: No, this bag is comfortable.",
     funFact:"낡다 implies age through use, not age of a person (use 늙다 for people aging). Koreans have a warm expression: 낡았지만 정이 든다 (it's worn but I've grown attached). Sentimentality for well-used things."},

    {type:"teach", trg:"부드럽다", src:"to be soft, gentle, smooth", pos:"adj", gender:null,
     note:"Texture, taste, personality. Irregular: 부드러워요.",
     example:"A: 이 케이크가 정말 부드러워요.\nB: 크림을 많이 넣었어요.\nA: 한 조각 더 먹고 싶어요!",
     exampleSrc:"A: This cake is really soft.\nB: I put in a lot of cream.\nA: I want to eat another piece!",
     funFact:"부드럽다 works for personality too: 부드러운 사람 (gentle person), 부드러운 목소리 (soft voice). In business, 부드러운 카리스마 (soft charisma) describes effective, non-aggressive leaders."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"두껍다", src:"thick (flat objects)"},
      {trg:"붉다", src:"red, reddish"},
      {trg:"깊다", src:"deep"},
      {trg:"낡다", src:"old, worn out"}
    ]},

    {type:"fb",
     s:"이 케이크가 정말 {1}.",
     a:["부드러워요"],
     opts:["부드러워요","두꺼워요","낡았어요","깊어요"],
     hint:"An adjective describing a gentle, smooth texture, like cream or silk. Irregular form.",
     sSrc:"This cake is really {1}."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"겉", src:"surface, exterior, outside", pos:"noun", gender:null,
     note:"The outer layer. Opposite: 속 (inside). 겉모습 (outward appearance).",
     example:"A: 겉만 보고 판단하지 마세요.\nB: 맞아요, 속이 더 중요해요.\nA: 겉과 속이 다를 수 있어요.",
     exampleSrc:"A: Don't judge just by the surface.\nB: Right, the inside is more important.\nA: The exterior and interior can be different.",
     funFact:"겉과 속이 다르다 (the outside and inside are different) is a common proverb-like expression meaning someone is two-faced. 겉바속촉 is modern slang: crispy outside, moist inside."},

    {type:"teach", trg:"길이", src:"length", pos:"noun", gender:null,
     note:"Measurement noun from 길다 (long). 길이가 얼마예요? (What is the length?)",
     example:"A: 이 방의 길이가 얼마예요?\nB: 5미터 정도예요.\nA: 충분히 넓네요.",
     exampleSrc:"A: What is the length of this room?\nB: About 5 meters.\nA: That's wide enough.",
     funFact:"Korean measurement nouns follow a pattern: 길다 to 길이 (length), 넓다 to 넓이 (area), 높다 to 높이 (height), 깊다 to 깊이 (depth). The suffix -이 transforms adjectives into nouns."},

    {type:"teach", trg:"높이", src:"height", pos:"noun", gender:null,
     note:"Measurement noun from 높다 (high). Also used as adverb (highly).",
     example:"A: 이 건물의 높이가 얼마예요?\nB: 100미터가 넘어요.\nA: 정말 높네요!",
     exampleSrc:"A: What is the height of this building?\nB: It's over 100 meters.\nA: That's really tall!",
     funFact:"높이 doubles as an adverb: 높이 날다 (to fly high), 높이 평가하다 (to highly evaluate). Context determines whether it is a noun (the height) or adverb (highly)."},

    {type:"teach", trg:"무게", src:"weight", pos:"noun", gender:null,
     note:"From 무겁다 (heavy). 무게가 얼마예요? (How much does it weigh?)",
     example:"A: 이 상자의 무게가 얼마예요?\nB: 10킬로그램이에요.\nA: 혼자 들기 힘들겠어요.",
     exampleSrc:"A: How much does this box weigh?\nB: 10 kilograms.\nA: It would be hard to lift alone.",
     funFact:"무게를 두다 (to place weight on) metaphorically means to emphasize something. In daily life, 몸무게 (body weight) is a sensitive topic; Koreans consider it very personal."},

    {type:"teach", trg:"깊이", src:"deeply, depth", pos:"adv", gender:null,
     note:"Adverb from 깊다 (deep). 깊이 생각하다 (to think deeply).",
     example:"A: 이 문제를 깊이 생각해 봐요.\nB: 네, 천천히 생각해 볼게요.\nA: 서두르지 마세요.",
     exampleSrc:"A: Think deeply about this problem.\nB: Yes, I'll think about it carefully.\nA: Don't rush.",
     funFact:"깊이 as a noun means depth (물의 깊이 = depth of water), and as an adverb means deeply (깊이 감사하다 = to be deeply grateful). Same word, two roles based on position."},

    // --- Quiz batch 3 ---
    {type:"mc",
     q:"'겉만 보고 판단하지 마세요'는 무슨 뜻이에요?",
     opts:["길이를 재라는 뜻","외모만 보지 말라는 뜻","높이를 확인하라는 뜻","무게를 재라는 뜻"],
     ans:"외모만 보지 말라는 뜻",
     hint:"겉 means surface or exterior. The sentence warns against judging based on outward appearance alone."},

    {type:"fb",
     s:"이 건물의 {1}가 100미터예요.",
     a:["높이"],
     opts:["높이","길이","무게","깊이"],
     hint:"The measurement noun derived from 높다. It refers to how tall something is vertically.",
     sSrc:"The {1} of this building is 100 meters."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"가까이", src:"nearby, close", pos:"adv", gender:null,
     note:"Adverb from 가깝다 (close). 가까이 오세요 (come closer).",
     example:"A: 가까이 오세요. 잘 안 들려요.\nB: 이 정도면 돼요?\nA: 네, 이제 잘 들려요.",
     exampleSrc:"A: Come closer. I can't hear well.\nB: Is this close enough?\nA: Yes, now I can hear well.",
     funFact:"가까이하기 어려운 사람 (a person hard to get close to) describes someone intimidating or unapproachable. The opposite, 가까이하기 쉬운 사람, is the highest social compliment."},

    {type:"teach", trg:"가득", src:"fully, to the brim, packed", pos:"adv", gender:null,
     note:"Indicates something is completely full. 가득 차다 (to be full).",
     example:"A: 냉장고에 음식이 가득 있어요.\nB: 장을 많이 봤나 봐요.\nA: 네, 한 주 치를 샀어요.",
     exampleSrc:"A: The fridge is packed with food.\nB: You must have done a lot of grocery shopping.\nA: Yes, I bought a week's worth.",
     funFact:"가득 is purely an adverb and cannot be conjugated like an adjective. 가슴이 가득 차다 (heart is full) expresses overwhelming emotion. 사랑이 가득한 집 (a house full of love)."},

    {type:"teach", trg:"어둡다", src:"to be dark, dim", pos:"adj", gender:null,
     note:"Physical and metaphorical. 어두운 방 (dark room), 표정이 어둡다 (expression is gloomy).",
     example:"A: 방이 너무 어두워요.\nB: 불을 켤까요?\nA: 네, 켜 주세요. 아무것도 안 보여요.",
     exampleSrc:"A: The room is too dark.\nB: Shall I turn on the light?\nA: Yes, please. I can't see anything.",
     funFact:"어둡다 also means lacking knowledge: 컴퓨터에 어둡다 (to be in the dark about computers). The metaphor of darkness as ignorance exists across many cultures, including Korean."},

    {type:"teach", trg:"어둠", src:"darkness", pos:"noun", gender:null,
     note:"Abstract noun from 어둡다. 어둠 속에서 (in the darkness).",
     example:"A: 어둠이 무서워요?\nB: 조금요. 어둠 속에서 잘 못 자요.\nA: 작은 불을 켜 놓으세요.",
     exampleSrc:"A: Are you afraid of darkness?\nB: A little. I can't sleep well in the dark.\nA: Keep a small light on.",
     funFact:"어둠 appears in philosophical Korean: 어둠이 빛을 이길 수 없다 (darkness cannot defeat light). Korean horror stories start with 어둠 속에서 (from within the darkness)."},

    {type:"teach", trg:"빛", src:"light, radiance", pos:"noun", gender:null,
     note:"Physical light and figurative brilliance. 빛나다 (to shine).",
     example:"A: 햇빛이 너무 밝아요.\nB: 선글라스를 쓰세요.\nA: 네, 눈이 부셔요.",
     exampleSrc:"A: The sunlight is too bright.\nB: Wear sunglasses.\nA: Yes, it's blinding.",
     funFact:"빛 compounds are everywhere: 햇빛 (sunlight), 달빛 (moonlight), 별빛 (starlight), 눈빛 (gaze, literally eye-light). A person's 눈빛 reveals their true feelings."},

    // --- Quiz batch 4 ---
    {type:"mc",
     q:"'방이 너무 어두워요. 불을 켜 주세요'는 무슨 상황이에요?",
     opts:["가까이 오라는 상황","밖이 밝은 상황","빛이 필요한 상황","음식이 가득 있는 상황"],
     ans:"빛이 필요한 상황",
     hint:"The room is too dim. The speaker is asking for illumination because they cannot see.",
     },

    {type:"fb",
     s:"냉장고에 음식이 {1} 있어요.",
     a:["가득"],
     opts:["가득","가까이","깊이","높이"],
     hint:"An adverb meaning completely full, packed to the brim. The fridge is overflowing.",
     sSrc:"The fridge is {1} of food."},

    {type:"match", pairs:[
      {trg:"어둠", src:"darkness"},
      {trg:"빛", src:"light, radiance"},
      {trg:"가까이", src:"nearby, close"},
      {trg:"어둡다", src:"dark, dim"}
    ]}
  ]
};
export default LESSON_21;
