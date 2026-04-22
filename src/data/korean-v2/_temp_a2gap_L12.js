// Korean A2 Gap - Lesson 12: Korean Geography & Travel Planning
// 17 teach cards + quizzes, interleaved
// PP8 checked, PP61 English metalanguage, PP64 all teach cards tested

const LESSON_12 = {
  id:"kov2_a2gap_l12", title:"한국 여행", icon:"🗺️", xp:15, board:true,
  steps:[
    // ── Intro ──
    {type:"intro", title:"한국 여행",
     desc:"Explore Korea's most famous landmarks and learn essential travel vocabulary. From Seoul Station to Seoraksan, plan your trip in Korean.",
     goals:["Name major Korean landmarks and cities","Use travel verbs: leave, return, go and come back","Discuss travel plans and scenery"]},

    // ── Teach 1: 경복궁 ──
    {type:"teach", trg:"경복궁", src:"Gyeongbokgung Palace", pos:"noun", gender:null,
     note:"Sino-Korean: 景福 (bright fortune) + 宮 (palace).\nThe main royal palace of the Joseon dynasty.",
     example:"A: 경복궁에 가 봤어요?\nB: 네, 정말 아름다웠어요.",
     exampleSrc:"A: Have you been to Gyeongbokgung?\nB: Yes, it was really beautiful.",
     funFact:"Built in 1395, Gyeongbokgung was the largest of the Five Grand Palaces. Its name means 'Palace of Shining Happiness.'"},

    // ── Teach 2: 경주 ──
    {type:"teach", trg:"경주", src:"Gyeongju (city)", pos:"noun", gender:null,
     note:"Sino-Korean: 慶州 (celebration province).\nAncient capital of the Silla Kingdom (57 BC to 935 AD).",
     example:"A: 경주에서 뭘 볼 수 있어요?\nB: 불국사하고 석굴암이 유명해요.",
     exampleSrc:"A: What can you see in Gyeongju?\nB: Bulguksa Temple and Seokguram Grotto are famous.",
     funFact:"Gyeongju is called a 'museum without walls.' The entire city is a UNESCO World Heritage Site with ancient tombs, temples, and relics everywhere."},

    // ── Teach 3: 남대문 ──
    {type:"teach", trg:"남대문", src:"Namdaemun (South Gate)", pos:"noun", gender:null,
     note:"Sino-Korean: 南 (south) + 大 (big) + 門 (gate).\nSeoul's famous historic south gate.",
     example:"A: 남대문을 직접 봤어요?\nB: 네, 정말 크고 멋있어요.",
     exampleSrc:"A: Did you see Namdaemun in person?\nB: Yes, it's really big and impressive.",
     funFact:"Officially called Sungnyemun, this gate was Korea's National Treasure No. 1. It was damaged by arson in 2008 and fully restored by 2013."},

    // ── Teach 4: 남대문시장 ──
    {type:"teach", trg:"남대문시장", src:"Namdaemun Market", pos:"noun", gender:null,
     note:"남대문 (Namdaemun) + 시장 (market).\nThe largest traditional market in Korea.",
     example:"A: 남대문시장에서 뭘 살 수 있어요?\nB: 뭐든지 다 있어요!",
     exampleSrc:"A: What can you buy at Namdaemun Market?\nB: They have everything!",
     funFact:"Namdaemun Market has been operating for over 600 years since 1414. It has over 10,000 shops selling everything from ginseng to custom suits."},

    // ── Quiz block 1 ──
    {type:"mc",
     q:"한국에서 가장 큰 전통 시장은?",
     opts:["남대문시장","서울역","경복궁","경주"],
     ans:"남대문시장",
     hint:"This landmark combines a famous gate name with the Korean word for market."},

    {type:"match", pairs:[
      {trg:"경복궁", src:"Gyeongbokgung Palace"},
      {trg:"경주", src:"Gyeongju (ancient capital)"},
      {trg:"남대문", src:"South Gate"},
      {trg:"남대문시장", src:"Namdaemun Market"}
    ]},

    // ── Teach 5: 부산 ──
    {type:"teach", trg:"부산", src:"Busan (city)", pos:"noun", gender:null,
     note:"Sino-Korean: 釜山 (cauldron mountain).\nKorea's second largest city, famous for beaches and seafood.",
     example:"A: 부산까지 얼마나 걸려요?\nB: KTX로 2시간 반이에요.",
     exampleSrc:"A: How long does it take to get to Busan?\nB: It's 2 and a half hours by KTX.",
     funFact:"Busan's Haeundae Beach draws millions of visitors each summer. The city also hosts Asia's largest film festival, BIFF."},

    // ── Teach 6: 서울역 ──
    {type:"teach", trg:"서울역", src:"Seoul Station", pos:"noun", gender:null,
     note:"서울 (Seoul) + 역 (station).\nThe main railway hub connecting Seoul to all of Korea.",
     example:"A: 서울역에서 KTX를 탈 수 있어요?\nB: 네, 부산까지 가요.",
     exampleSrc:"A: Can I take the KTX from Seoul Station?\nB: Yes, it goes to Busan.",
     funFact:"The old Seoul Station building (built 1925) is now a cultural space. The modern station next to it handles over 100,000 passengers daily."},

    // ── Teach 7: 설악산 ──
    {type:"teach", trg:"설악산", src:"Seoraksan (mountain)", pos:"noun", gender:null,
     note:"Sino-Korean: 雪嶽 (snow peak) + 山 (mountain).\nKorea's most famous mountain for hiking.",
     example:"A: 설악산에 등산하러 갈까요?\nB: 좋아요, 단풍이 예쁠 거예요.",
     exampleSrc:"A: Shall we go hiking at Seoraksan?\nB: Sure, the autumn leaves will be pretty.",
     funFact:"Seoraksan is the third highest mountain in South Korea (1,708m). Its name means 'Snowy Crag Mountain' because snow stays on its peaks well into summer."},

    // ── Teach 8: 인천 ──
    {type:"teach", trg:"인천", src:"Incheon (city)", pos:"noun", gender:null,
     note:"Sino-Korean: 仁川 (benevolent river).\nHome to Korea's main international airport.",
     example:"A: 인천공항에서 서울까지 얼마나 걸려요?\nB: 버스로 한 시간쯤이요.",
     exampleSrc:"A: How long does it take from Incheon Airport to Seoul?\nB: About an hour by bus.",
     funFact:"Incheon International Airport has been ranked the best airport in the world multiple times. It features a Korean culture museum, spa, and ice rink."},

    // ── Quiz block 2 ──
    {type:"fb",
     s:"{1}에서 KTX를 타고 부산까지 갈 수 있어요.",
     a:["서울역"],
     opts:["서울역","인천","설악산","경주"],
     hint:"This is the main railway station in the capital city.",
     sSrc:"You can take the KTX from {1} to Busan."},

    {type:"mc",
     q:"설악산은 무엇으로 유명해요?",
     opts:["전통 시장","등산과 단풍","공항","해산물"],
     ans:"등산과 단풍",
     hint:"This mountain is known for its natural beauty and outdoor activities in autumn."},

    // ── Teach 9: 경치 ──
    {type:"teach", trg:"경치", src:"scenery, view", pos:"noun", gender:null,
     note:"Sino-Korean: 景 (scene) + 致 (to bring about).\nUsed for natural landscapes and views.",
     example:"A: 경치가 정말 좋아요!\nB: 네, 여기는 경치가 유명해요.",
     exampleSrc:"A: The scenery is really beautiful!\nB: Yes, this place is famous for its views.",
     funFact:"Koreans love exclaiming about scenery. The phrase 경치가 좋다 (the scenery is good) is one of the most common travel compliments."},

    // ── Teach 10: 지도 ──
    {type:"teach", trg:"지도", src:"map", pos:"noun", gender:null,
     note:"Sino-Korean: 地 (earth/land) + 圖 (picture/diagram).\nLiterally a picture of the land.",
     example:"A: 지도 있어요?\nB: 네, 핸드폰에 지도 앱이 있어요.",
     exampleSrc:"A: Do you have a map?\nB: Yes, I have a map app on my phone.",
     funFact:"Naver Map and Kakao Map dominate navigation in Korea. Google Maps works but has limited detail due to Korean mapping data regulations."},

    // ── Teach 11: 자동차 ──
    {type:"teach", trg:"자동차", src:"car, automobile", pos:"noun", gender:null,
     note:"Sino-Korean: 自動 (self-moving) + 車 (vehicle).\nThe formal word for automobile.",
     example:"A: 자동차로 갈까요?\nB: 아니요, 기차가 더 편해요.",
     exampleSrc:"A: Shall we go by car?\nB: No, the train is more comfortable.",
     funFact:"In daily speech, Koreans often shorten 자동차 to just 차. So 차 can mean both 'car' and 'tea' depending on context."},

    // ── Teach 12: 주소 ──
    {type:"teach", trg:"주소", src:"address", pos:"noun", gender:null,
     note:"Sino-Korean: 住 (live/reside) + 所 (place).\nYour residential or mailing address.",
     example:"A: 주소를 알려 주세요.\nB: 서울시 강남구 역삼동 123번지예요.",
     exampleSrc:"A: Please tell me the address.\nB: It's 123, Yeoksam-dong, Gangnam-gu, Seoul.",
     funFact:"Korea reformed its address system in 2014 from the old 동/번지 (neighborhood/lot number) system to street-based addresses, but many Koreans still use the old system."},

    // ── Quiz block 3 ──
    {type:"match", pairs:[
      {trg:"경치", src:"scenery/view"},
      {trg:"지도", src:"map"},
      {trg:"자동차", src:"car"},
      {trg:"주소", src:"address"}
    ]},

    {type:"fb",
     s:"산에서 본 {1}가 정말 아름다웠어요.",
     a:["경치"],
     opts:["경치","지도","주소","자동차"],
     hint:"This Sino-Korean word refers to the natural landscape and views you admire from a high point.",
     sSrc:"The {1} I saw from the mountain was really beautiful."},

    // ── Teach 13: 떠나다 ──
    {type:"teach", trg:"떠나다", src:"to leave, to depart", pos:"verb", gender:null,
     note:"Native Korean. Conveys leaving a place behind.\nOften used for trips and emotional departures.",
     example:"A: 언제 떠나요?\nB: 내일 아침에 떠나요.",
     exampleSrc:"A: When are you leaving?\nB: I'm leaving tomorrow morning.",
     funFact:"떠나다 carries an emotional weight that 가다 (to go) does not. Saying 떠나다 implies you are leaving something behind, not just heading somewhere."},

    // ── Teach 14: 돌아오다 ──
    {type:"teach", trg:"돌아오다", src:"to return, to come back", pos:"verb", gender:null,
     note:"돌다 (to turn) + 아 + 오다 (to come).\nLiterally to 'turn and come back.'",
     example:"A: 언제 돌아와요?\nB: 다음 주에 돌아와요.",
     exampleSrc:"A: When are you coming back?\nB: I'm coming back next week.",
     funFact:"Korean has precise movement verbs. 돌아오다 (return here) vs 돌아가다 (return there) depends on the speaker's perspective."},

    // ── Teach 15: 다녀오다 ──
    {type:"teach", trg:"다녀오다", src:"to go and come back", pos:"verb", gender:null,
     note:"다니다 (to attend/commute) + 오다 (to come).\nImplies a round trip: going somewhere and returning.",
     example:"A: 잘 다녀오세요!\nB: 네, 다녀올게요!",
     exampleSrc:"A: Have a good trip!\nB: Thanks, I'll be back!",
     funFact:"잘 다녀오세요 is one of the most common Korean farewells. Families say it every morning when someone leaves for work or school."},

    // ── Quiz block 4 ──
    {type:"mc",
     q:"'잘 다녀오세요'는 언제 사용해요?",
     opts:["누군가 전화를 할 때","누군가 잠을 잘 때","누군가 외출할 때","누군가 음식을 먹을 때"],
     ans:"누군가 외출할 때",
     hint:"This phrase is a farewell wishing someone a safe round trip when they go out."},

    {type:"fb",
     s:"여행을 {1} 기분이 좋아요.",
     a:["떠나다"],
     opts:["떠나다","돌아오다","다녀오다","가다"],
     hint:"This native Korean verb emphasizes the emotional act of departing, not just going.",
     sSrc:"I feel good to {1} on a trip."},

    // ── Teach 16: 소풍 ──
    {type:"teach", trg:"소풍", src:"picnic, outing", pos:"noun", gender:null,
     note:"Sino-Korean: 逍風 (leisurely wind).\nA casual day trip or picnic, often a school event.",
     example:"A: 이번 주에 소풍 갈까요?\nB: 좋아요! 공원에서 소풍해요.",
     exampleSrc:"A: Shall we go on a picnic this week?\nB: Great! Let's have a picnic at the park.",
     funFact:"Korean school field trips are called 소풍. Students look forward to them all year, especially the kimbap their parents pack for the trip."},

    // ── Teach 17: 계획 ──
    {type:"teach", trg:"계획", src:"plan", pos:"noun", gender:null,
     note:"Sino-Korean: 計 (calculate) + 劃 (mark/divide).\nUsed for plans, schedules, and intentions.",
     example:"A: 주말 계획이 있어요?\nB: 경주에 갈 계획이에요.",
     exampleSrc:"A: Do you have plans for the weekend?\nB: I'm planning to go to Gyeongju.",
     funFact:"계획을 세우다 (to make a plan, literally 'to stand a plan up') is the standard collocation. Koreans also commonly say 계획대로 (according to plan)."},

    // ── Final quiz block ──
    {type:"mc",
     q:"여행에서 집으로 다시 오는 것은?",
     opts:["떠나다","소풍","다녀오다","돌아오다"],
     ans:"돌아오다",
     hint:"This compound verb combines 'to turn' with 'to come' for the act of returning home."},

    {type:"match", pairs:[
      {trg:"떠나다", src:"to leave/depart"},
      {trg:"돌아오다", src:"to return"},
      {trg:"소풍", src:"picnic/outing"},
      {trg:"계획", src:"plan"}
    ]},
  ]
};
export default LESSON_12;
