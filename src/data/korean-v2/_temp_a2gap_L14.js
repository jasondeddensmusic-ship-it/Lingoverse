// Korean A2 Gap - Lesson 14: Colors & Descriptive Adjectives
// 16 teach cards + quizzes, interleaved
// PP8 checked, PP61 English metalanguage, PP64 all teach cards tested

const LESSON_14 = {
  id:"kov2_a2gap_l14", title:"색깔과 형용사", icon:"🎨", xp:15, board:true,
  steps:[
    // ── Intro ──
    {type:"intro", title:"색깔과 형용사",
     desc:"Master Korean color words and descriptive adjectives. Korean colors work differently from English. These adjectives let you describe the world around you with precision.",
     goals:["Name the 5 basic colors using the 색 (color) system","Use 11 common descriptive adjectives","Understand how Korean adjectives function as verbs"]},

    // ── Teach 1: 흰색 ──
    {type:"teach", trg:"흰색", src:"white (color)", pos:"noun", gender:null,
     note:"흰 (white, adjective form of 희다) + 색 (color).\nThe noun form used when naming the color itself.",
     example:"A: 무슨 색을 좋아해요?\nB: 흰색을 좋아해요. 깨끗해 보여요.",
     exampleSrc:"A: What color do you like?\nB: I like white. It looks clean.",
     funFact:"Korean has two color systems: native adjectives (하얗다/희다 for white) and Sino-Korean noun forms (흰색). The noun form is used when naming colors directly."},

    // ── Teach 2: 검은색 ──
    {type:"teach", trg:"검은색", src:"black (color)", pos:"noun", gender:null,
     note:"검은 (black, adjective form of 검다) + 색 (color).\nThe noun form for naming the color.",
     example:"A: 검은색 가방이 있어요?\nB: 네, 여기 있어요.",
     exampleSrc:"A: Do you have a black bag?\nB: Yes, here it is.",
     funFact:"In Korean culture, 검은색 (black) is traditionally associated with formality and authority, not mourning. White was historically the mourning color."},

    // ── Teach 3: 빨간색 ──
    {type:"teach", trg:"빨간색", src:"red (color)", pos:"noun", gender:null,
     note:"빨간 (red, adjective form of 빨갛다) + 색 (color).\nThe bright, vivid red.",
     example:"A: 빨간색 옷을 입을까요?\nB: 네, 잘 어울려요!",
     exampleSrc:"A: Should I wear the red clothes?\nB: Yes, they suit you well!",
     funFact:"Red is deeply symbolic in Korea. It wards off evil spirits. Korean soccer fans are called the 'Red Devils' and wear red to support their national team."},

    // ── Teach 4: 노란색 ──
    {type:"teach", trg:"노란색", src:"yellow (color)", pos:"noun", gender:null,
     note:"노란 (yellow, adjective form of 노랗다) + 색 (color).\nA warm, bright yellow.",
     example:"A: 노란색 꽃이 예뻐요.\nB: 네, 봄에 많이 피어요.",
     exampleSrc:"A: The yellow flowers are pretty.\nB: Yes, many bloom in spring.",
     funFact:"노랗다 belongs to a special group of Korean color adjectives that use the ㅎ-irregular pattern: 노랗다 becomes 노란 (not 노랗은) before nouns."},

    // ── Teach 5: 파란색 ──
    {type:"teach", trg:"파란색", src:"blue (color)", pos:"noun", gender:null,
     note:"파란 (blue, adjective form of 파랗다) + 색 (color).\nCovers both blue and sometimes green.",
     example:"A: 하늘이 파란색이에요.\nB: 네, 오늘 날씨가 정말 좋아요.",
     exampleSrc:"A: The sky is blue.\nB: Yes, the weather is really nice today.",
     funFact:"Traditionally, Korean used 파랗다 for both blue and green. Traffic lights still use 파란불 (blue light) for the green signal. A separate word 초록색 exists for green."},

    // ── Quiz block 1 ──
    {type:"match", pairs:[
      {trg:"흰색", src:"white"},
      {trg:"검은색", src:"black"},
      {trg:"빨간색", src:"red"},
      {trg:"노란색", src:"yellow"}
    ]},

    {type:"mc",
     q:"한국에서 '파란불'은 신호등의 무슨 색이에요?",
     opts:["파란색","초록색","빨간색","노란색"],
     ans:"초록색",
     hint:"Korean traditionally used one word for both blue and green, so the 'blue light' is actually this color."},

    {type:"fb",
     s:"축구 팬들이 {1} 옷을 입고 응원해요.",
     a:["빨간색"],
     opts:["빨간색","파란색","흰색","검은색"],
     hint:"Korean national team supporters are famously called the 'Red Devils' for wearing this color.",
     sSrc:"Soccer fans cheer wearing {1} clothes."},

    // ── Teach 6: 아름답다 ──
    {type:"teach", trg:"아름답다", src:"to be beautiful", pos:"adj", gender:null,
     note:"Native Korean. A ㅂ-irregular adjective.\n아름답다 becomes 아름다운 before nouns, 아름다워요 in polite speech.",
     example:"A: 이 경치가 정말 아름다워요.\nB: 네, 사진 찍어요!",
     exampleSrc:"A: This scenery is really beautiful.\nB: Yes, let's take a photo!",
     funFact:"아름답다 is reserved for genuine beauty in nature, art, or character. For casual 'pretty,' Koreans use 예쁘다. Using 아름답다 for a person is a strong compliment."},

    // ── Teach 7: 밝다 ──
    {type:"teach", trg:"밝다", src:"to be bright", pos:"adj", gender:null,
     note:"Native Korean. Used for light, colors, and figuratively for personality.\nRegular conjugation: 밝아요.",
     example:"A: 이 방이 밝아요?\nB: 네, 창문이 커서 밝아요.",
     exampleSrc:"A: Is this room bright?\nB: Yes, it's bright because the window is big.",
     funFact:"밝다 is also used for personality: 성격이 밝다 (bright personality) means someone is cheerful and optimistic. The opposite is 어둡다 (dark/gloomy)."},

    // ── Teach 8: 복잡하다 ──
    {type:"teach", trg:"복잡하다", src:"to be complicated, to be crowded", pos:"adj", gender:null,
     note:"Sino-Korean: 複雜 (complex/tangled) + 하다.\nUsed for both complexity and physical crowding.",
     example:"A: 지하철이 복잡해요?\nB: 네, 출근 시간에는 정말 복잡해요.",
     exampleSrc:"A: Is the subway crowded?\nB: Yes, it's really crowded during rush hour.",
     funFact:"복잡하다 does double duty: 문제가 복잡하다 (the problem is complicated) and 거리가 복잡하다 (the street is crowded). Context makes the meaning clear."},

    // ── Teach 9: 조용하다 ──
    {type:"teach", trg:"조용하다", src:"to be quiet", pos:"adj", gender:null,
     note:"Sino-Korean: 操用 + 하다. Used for calm, silent places and people.\nRegular 하다 conjugation: 조용해요.",
     example:"A: 이 카페가 조용해요?\nB: 네, 공부하기 좋아요.",
     exampleSrc:"A: Is this cafe quiet?\nB: Yes, it's good for studying.",
     funFact:"조용히 하세요 (please be quiet) is what Korean teachers say to noisy classrooms. The adverb form 조용히 (quietly) is extremely common in daily life."},

    // ── Quiz block 2 ──
    {type:"mc",
     q:"'복잡하다'는 어떤 뜻이에요?",
     opts:["to be simple","to be complicated or crowded","to be quiet","to be bright"],
     ans:"to be complicated or crowded",
     hint:"This adjective has two meanings: tangled complexity and physical congestion in busy places."},

    {type:"fb",
     s:"이 도서관은 아주 {1}. 공부하기 좋아요.",
     a:["조용해요"],
     opts:["조용해요","복잡해요","밝아요","아름다워요"],
     hint:"Libraries are valued for their silence, which makes them ideal for studying.",
     sSrc:"This library is very {1}. It's good for studying."},

    // ── Teach 10: 유명하다 ──
    {type:"teach", trg:"유명하다", src:"to be famous", pos:"adj", gender:null,
     note:"Sino-Korean: 有名 (have name) + 하다.\nLiterally 'to have a name,' meaning well-known.",
     example:"A: 이 식당이 유명해요?\nB: 네, 비빔밥으로 유명해요.",
     exampleSrc:"A: Is this restaurant famous?\nB: Yes, it's famous for bibimbap.",
     funFact:"The pattern 'X(으)로 유명하다' (famous for X) is one of the most useful constructions at A2 level. It works for places, people, and things."},

    // ── Teach 11: 똑같다 ──
    {type:"teach", trg:"똑같다", src:"to be exactly the same", pos:"adj", gender:null,
     note:"똑 (exactly, emphatic) + 같다 (to be the same).\nStronger than just 같다.",
     example:"A: 이 두 개가 똑같아요?\nB: 네, 색깔도 크기도 똑같아요.",
     exampleSrc:"A: Are these two exactly the same?\nB: Yes, the color and size are exactly the same.",
     funFact:"똑 is an intensifier that makes 같다 (same) emphatic. Korean has many such intensifiers: 새빨갛다 (bright red), 새까맣다 (jet black), 새하얗다 (snow white)."},

    // ── Teach 12: 따뜻하다 ──
    {type:"teach", trg:"따뜻하다", src:"to be warm", pos:"adj", gender:null,
     note:"Native Korean. Pleasant warmth, not hot.\nUsed for weather, drinks, personality, and atmosphere.",
     example:"A: 오늘 날씨가 따뜻해요.\nB: 네, 봄이 왔어요!",
     exampleSrc:"A: The weather is warm today.\nB: Yes, spring has come!",
     funFact:"따뜻하다 covers a comfort zone of warmth. For actual heat, use 덥다 (hot weather) or 뜨겁다 (hot to touch). A warm heart is 따뜻한 마음."},

    // ── Quiz block 3 ──
    {type:"match", pairs:[
      {trg:"유명하다", src:"to be famous"},
      {trg:"똑같다", src:"to be exactly the same"},
      {trg:"따뜻하다", src:"to be warm"},
      {trg:"아름답다", src:"to be beautiful"}
    ]},

    {type:"mc",
     q:"'이 식당은 비빔밥으로 ___해요.'",
     opts:["유명","따뜻","조용","복잡"],
     ans:"유명",
     hint:"This restaurant has a reputation. The Sino-Korean adjective literally means 'to have a name.'"},

    // ── Teach 13: 시원하다 ──
    {type:"teach", trg:"시원하다", src:"to be cool, to be refreshing", pos:"adj", gender:null,
     note:"Native Korean. Pleasantly cool or refreshing.\nUsed for weather, drinks, breezes, and even satisfying feelings.",
     example:"A: 이 음료가 시원해요.\nB: 네, 더울 때 시원한 음료가 좋아요.",
     exampleSrc:"A: This drink is refreshing.\nB: Yes, a cool drink is great when it's hot.",
     funFact:"시원하다 has an unusual extended meaning: 시원하다 can mean 'satisfying' or 'relieving.' A good stretch, a resolved problem, or spicy soup can all be 시원하다."},

    // ── Teach 14: 뜨겁다 ──
    {type:"teach", trg:"뜨겁다", src:"to be hot (to the touch)", pos:"adj", gender:null,
     note:"Native Korean. ㅂ-irregular: 뜨거워요 in polite form.\nSpecifically for things that burn when touched.",
     example:"A: 조심하세요! 커피가 뜨거워요.\nB: 감사합니다, 조심할게요.",
     exampleSrc:"A: Be careful! The coffee is hot.\nB: Thank you, I'll be careful.",
     funFact:"Korean distinguishes heat precisely: 덥다 (weather is hot), 뜨겁다 (object is hot to touch), 맵다 (food is spicy-hot). English uses 'hot' for all three."},

    // ── Teach 15: 무겁다 ──
    {type:"teach", trg:"무겁다", src:"to be heavy", pos:"adj", gender:null,
     note:"Native Korean. ㅂ-irregular: 무거워요 in polite form.\nUsed for physical weight and figurative heaviness.",
     example:"A: 이 가방이 무거워요?\nB: 네, 책이 많이 들어 있어요.",
     exampleSrc:"A: Is this bag heavy?\nB: Yes, it has a lot of books in it.",
     funFact:"무겁다 is also used figuratively: 마음이 무겁다 (heart is heavy) means feeling burdened or guilty. The opposite is 가볍다 (to be light)."},

    // ── Teach 16: 늦다 ──
    {type:"teach", trg:"늦다", src:"to be late", pos:"adj", gender:null,
     note:"Native Korean. Functions as both adjective and verb.\n늦다 = be late. 늦게 = the adverb 'late.'",
     example:"A: 왜 늦었어요?\nB: 버스가 늦게 왔어요.",
     exampleSrc:"A: Why were you late?\nB: The bus came late.",
     funFact:"Korean culture values punctuality. Being late (늦다) to a meeting is considered quite rude. The phrase 늦어서 죄송합니다 (sorry for being late) is essential survival Korean."},

    // ── Final quiz block ──
    {type:"fb",
     s:"조심하세요! 물이 {1}.",
     a:["뜨거워요"],
     opts:["뜨거워요","시원해요","따뜻해요","무거워요"],
     hint:"The water could burn you. This ㅂ-irregular adjective specifically means hot to the touch.",
     sSrc:"Be careful! The water is {1}."},

    {type:"mc",
     q:"'이 가방이 무거워요'에서 '무겁다'의 뜻은?",
     opts:["to be light","to be heavy","to be big","to be small"],
     ans:"to be heavy",
     hint:"This ㅂ-irregular adjective describes something that has a lot of physical weight."},

    {type:"match", pairs:[
      {trg:"시원하다", src:"to be cool/refreshing"},
      {trg:"뜨겁다", src:"to be hot (touch)"},
      {trg:"무겁다", src:"to be heavy"},
      {trg:"늦다", src:"to be late"}
    ]},

    {type:"mc",
     q:"'늦어서 죄송합니다'는 언제 사용해요?",
     opts:["약속 시간에 늦었을 때","음식이 맛있을 때","날씨가 좋을 때","가방이 무거울 때"],
     ans:"약속 시간에 늦었을 때",
     hint:"This apology phrase is used when you arrive after the expected time."},
  ]
};
export default LESSON_14;
