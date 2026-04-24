// Korean A2 Gap - Lesson 13: Countries & Directional Movement
// 14 teach cards + quizzes, interleaved
// PP8 checked, PP61 English metalanguage, PP64 all teach cards tested

const LESSON_13 = {
  id:"kov2_a2gap_l13", title:"나라와 방향", icon:"🌍", xp:15, board:true,
  steps:[
    // ── Intro ──
    {type:"intro", title:"나라와 방향",
     desc:"Learn country names and directional movement verbs. These words let you talk about where people are from and describe physical movement in precise directions.",
     goals:["Name 6 major countries in Korean","Use directional compound verbs (go up, come down, walk to)","Distinguish between movement toward and away from the speaker"]},

    // ── Teach 1: 독일 ──
    {type:"teach", trg:"독일", src:"Germany", pos:"noun", gender:null,
     note:"Sino-Korean phonetic: 獨逸.\nBorrowed from the Japanese kanji reading of 'Deutsch.'",
     example:"A: 독일에 가 본 적 있어요?\nB: 네, 베를린이 정말 멋있었어요.",
     exampleSrc:"A: Have you ever been to Germany?\nB: Yes, Berlin was really cool.",
     funFact:"Korea borrowed many country names through Japanese kanji during the colonial period. 독일 comes from the Japanese 'Doitsu,' itself from 'Deutsch.'"},

    // ── Teach 2: 러시아 ──
    {type:"teach", trg:"러시아", src:"Russia", pos:"noun", gender:null,
     note:"Direct loanword from 'Russia.'\nOne of the few country names borrowed directly into Korean.",
     example:"A: 러시아는 얼마나 커요?\nB: 세계에서 가장 큰 나라예요.",
     exampleSrc:"A: How big is Russia?\nB: It's the biggest country in the world.",
     funFact:"Unlike 독일 (Germany) which came through Japanese, 러시아 is a direct phonetic adaptation of 'Russia' into Korean syllables."},

    // ── Teach 3: 영국 ──
    {type:"teach", trg:"영국", src:"England, United Kingdom", pos:"noun", gender:null,
     note:"Sino-Korean: 英國 (heroic country).\nOfficially refers to the UK, not just England.",
     example:"A: 영국 음식이 맛있어요?\nB: 글쎄요, 사람마다 달라요.",
     exampleSrc:"A: Is British food good?\nB: Well, it depends on the person.",
     funFact:"The hanja 英 (heroic/brilliant) was chosen for its phonetic similarity to 'Eng-' in England, not for its meaning."},

    // ── Teach 4: 프랑스 ──
    {type:"teach", trg:"프랑스", src:"France", pos:"noun", gender:null,
     note:"Direct loanword from 'France.'\nKorean approximation of French pronunciation.",
     example:"A: 프랑스어를 배우고 싶어요.\nB: 저도요! 파리에 가고 싶어요.",
     exampleSrc:"A: I want to learn French.\nB: Me too! I want to go to Paris.",
     funFact:"To say the French language, add 어 (language): 프랑스어. This pattern works for most countries: 독일어, 영국... wait, English is 영어 (shortened)."},

    // ── Quiz block 1 ──
    {type:"match", pairs:[
      {trg:"독일", src:"Germany"},
      {trg:"러시아", src:"Russia"},
      {trg:"영국", src:"United Kingdom"},
      {trg:"프랑스", src:"France"}
    ]},

    {type:"mc",
     q:"'독일'이라는 이름은 어디에서 왔어요?",
     opts:["독일어 'Deutsch'에서","프랑스어에서","러시아어에서","영어 'Germany'에서"],
     ans:"독일어 'Deutsch'에서",
     hint:"This country name came through Japanese kanji and traces back to the country's own word for itself."},

    // ── Teach 5: 캐나다 ──
    {type:"teach", trg:"캐나다", src:"Canada", pos:"noun", gender:null,
     note:"Direct loanword from 'Canada.'\nPronounced 'kae-na-da' in Korean.",
     example:"A: 캐나다에서 왔어요?\nB: 네, 토론토에서 왔어요.",
     exampleSrc:"A: Are you from Canada?\nB: Yes, I'm from Toronto.",
     funFact:"Canada is a popular immigration destination for Koreans. Vancouver and Toronto both have large Korean communities with bustling Koreatowns."},

    // ── Teach 6: 호주 ──
    {type:"teach", trg:"호주", src:"Australia", pos:"noun", gender:null,
     note:"Sino-Korean: 濠洲 (moat continent).\nThe hanja was chosen for phonetic similarity to 'Aus-'.",
     example:"A: 호주에 가고 싶어요.\nB: 시드니가 좋아요!",
     exampleSrc:"A: I want to go to Australia.\nB: Sydney is great!",
     funFact:"Australia is one of the top destinations for Korean working holiday visas. Many young Koreans spend a year there improving their English."},

    // ── Quiz block 2 ──
    {type:"fb",
     s:"저는 {1}에서 왔어요. 토론토에 살았어요.",
     a:["캐나다"],
     opts:["캐나다","호주","영국","프랑스"],
     hint:"Toronto is the largest city in this North American country.",
     sSrc:"I'm from {1}. I lived in Toronto."},

    {type:"mc",
     q:"호주의 한자 이름은 어떤 뜻이에요?",
     opts:["호수 나라","소리가 비슷해서","큰 나라","남쪽 나라"],
     ans:"소리가 비슷해서",
     hint:"Like many country names in Chinese characters, the meaning matters less than the sound match."},

    // ── Teach 7: 걸어가다 ──
    {type:"teach", trg:"걸어가다", src:"to walk (going away)", pos:"verb", gender:null,
     note:"걷다 (to walk) + 어 + 가다 (to go).\nWalking in a direction away from the speaker.",
     example:"A: 학교까지 어떻게 가요?\nB: 걸어가요. 10분이면 돼요.",
     exampleSrc:"A: How do you get to school?\nB: I walk. It only takes 10 minutes.",
     funFact:"Korean directional verbs always specify perspective. 가다 (go: away from me) vs 오다 (come: toward me). This distinction is critical in compound verbs."},

    // ── Teach 8: 걸어오다 ──
    {type:"teach", trg:"걸어오다", src:"to walk (coming toward)", pos:"verb", gender:null,
     note:"걷다 (to walk) + 어 + 오다 (to come).\nWalking toward the speaker's location.",
     example:"A: 저기서 누가 걸어오고 있어요.\nB: 아, 친구예요!",
     exampleSrc:"A: Someone is walking this way from over there.\nB: Oh, it's my friend!",
     funFact:"The 가다/오다 distinction in compounds is one of the hardest things for English speakers. English just says 'walk,' but Korean forces you to specify direction."},

    // ── Teach 9: 올라가다 ──
    {type:"teach", trg:"올라가다", src:"to go up, to ascend", pos:"verb", gender:null,
     note:"오르다 (to rise) + 아 + 가다 (to go).\nGoing upward, away from the speaker.",
     example:"A: 엘리베이터로 올라갈까요?\nB: 아니요, 걸어서 올라가요.",
     exampleSrc:"A: Shall we go up by elevator?\nB: No, let's walk up.",
     funFact:"올라가다 vs 올라오다: if you are at the bottom and someone climbs up away from you, it is 올라가다. If they climb up toward you at the top, it is 올라오다."},

    // ── Teach 10: 내려가다 ──
    {type:"teach", trg:"내려가다", src:"to go down, to descend", pos:"verb", gender:null,
     note:"내리다 (to descend) + 어 + 가다 (to go).\nGoing downward, away from the speaker.",
     example:"A: 1층으로 내려가요.\nB: 네, 엘리베이터 타요.",
     exampleSrc:"A: Let's go down to the 1st floor.\nB: OK, let's take the elevator.",
     funFact:"내려가다 is also used figuratively: prices go down (가격이 내려가다) and temperatures drop (온도가 내려가다)."},

    // ── Quiz block 3 ──
    {type:"mc",
     q:"산 위에서 아래로 이동하는 것은?",
     opts:["걸어오다","올라가다","내려가다","걸어가다"],
     ans:"내려가다",
     hint:"This verb combines 'descend' with 'go' for downward movement away from the speaker."},

    {type:"fb",
     s:"학교까지 매일 {1}.",
     a:["걸어가요"],
     opts:["걸어가요","걸어와요","올라가요","내려가요"],
     hint:"You travel to school on foot, moving away from your home.",
     sSrc:"I {1} to school every day."},

    // ── Teach 11: 내려오다 ──
    {type:"teach", trg:"내려오다", src:"to come down", pos:"verb", gender:null,
     note:"내리다 (to descend) + 어 + 오다 (to come).\nComing downward, toward the speaker.",
     example:"A: 빨리 내려오세요!\nB: 네, 지금 내려가요!",
     exampleSrc:"A: Come down quickly!\nB: OK, I'm coming down now!",
     funFact:"Notice in the example: A says 내려오다 (come down to me), but B says 내려가다 (go down, away from where I am). Same movement, different perspectives."},

    // ── Teach 12: 오르다 ──
    {type:"teach", trg:"오르다", src:"to climb, to ascend", pos:"verb", gender:null,
     note:"Native Korean. The base verb for upward movement.\nUsed for climbing, rising, and increasing.",
     example:"A: 산을 오르는 건 힘들어요.\nB: 네, 하지만 경치가 좋아요.",
     exampleSrc:"A: Climbing a mountain is hard.\nB: Yes, but the scenery is beautiful.",
     funFact:"오르다 is the root inside 올라가다 and 올라오다. It also means 'to rise' for prices (물가가 오르다) and fame (이름이 오르다)."},

    // ── Teach 13: 가져오다 ──
    {type:"teach", trg:"가져오다", src:"to bring (toward speaker)", pos:"verb", gender:null,
     note:"가지다 (to have/hold) + 어 + 오다 (to come).\nBringing something toward the speaker.",
     example:"A: 물 좀 가져와 주세요.\nB: 네, 바로 가져올게요.",
     exampleSrc:"A: Please bring me some water.\nB: Sure, I'll bring it right away.",
     funFact:"가져오다 (bring here) vs 가져가다 (take away): the 오다/가다 ending determines direction. English uses separate words (bring vs take), Korean uses compound verbs."},

    // ── Teach 14: 날다 ──
    {type:"teach", trg:"날다", src:"to fly", pos:"verb", gender:null,
     note:"Native Korean. Used for birds, planes, and anything airborne.\nAlso used figuratively for speed.",
     example:"A: 새가 하늘을 날고 있어요.\nB: 와, 정말 자유로워 보여요.",
     exampleSrc:"A: A bird is flying in the sky.\nB: Wow, it looks so free.",
     funFact:"날다 is a ㄹ-irregular verb: the ㄹ drops before ㄴ, ㅂ, and ㅅ. So 'flies' becomes 나는 (not 날는), and 'flew' becomes 날았어요."},

    // ── Final quiz block ──
    {type:"match", pairs:[
      {trg:"내려오다", src:"to come down"},
      {trg:"오르다", src:"to climb/ascend"},
      {trg:"가져오다", src:"to bring"},
      {trg:"날다", src:"to fly"}
    ]},

    {type:"mc",
     q:"'물 좀 가져와 주세요'는 무슨 뜻이에요?",
     opts:["Please take the water away","Please drink water","Please pour some water","Please bring me some water"],
     ans:"Please bring me some water",
     hint:"This compound verb means to carry something toward the person speaking."},

    {type:"fb",
     s:"새가 하늘을 {1} 있어요.",
     a:["날고"],
     opts:["날고","걸어가고","올라가고","내려오고"],
     hint:"Birds do this through the sky using their wings.",
     sSrc:"A bird is {1} in the sky."},

    {type:"mc",
     q:"아래에 있는 사람이 위에 있는 사람에게: '빨리 ___!'",
     opts:["내려오세요","걸어가세요","날아가세요","올라가세요"],
     ans:"내려오세요",
     hint:"The speaker is below, asking someone above to move downward toward them."},
  ]
};
export default LESSON_13;
