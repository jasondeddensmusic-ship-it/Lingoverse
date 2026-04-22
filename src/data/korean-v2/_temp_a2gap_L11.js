// Korean A2 Gap - Lesson 11: Places, Buildings & Positions
// 18 teach cards + quizzes, interleaved
// PP8 checked, PP61 English metalanguage, PP64 all teach cards tested

const LESSON_11 = {
  id:"kov2_a2gap_l11", title:"장소와 건물", icon:"🏛️", xp:15, board:true,
  steps:[
    // ── Intro ──
    {type:"intro", title:"장소와 건물",
     desc:"Learn how to talk about places, buildings, and positions in Korean. From offices to parks, these words help you navigate any Korean city.",
     goals:["Name 18 common places and buildings","Use spatial words like middle, this place, that place","Describe locations in everyday conversation"]},

    // ── Teach 1: 장소 ──
    {type:"teach", trg:"장소", src:"place, location", pos:"noun", gender:null,
     note:"Sino-Korean: 場 (field) + 所 (place).\nA general word for any location.",
     example:"A: 어디에서 만날까요?\nB: 좋은 장소를 찾아볼게요.",
     exampleSrc:"A: Where shall we meet?\nB: I'll look for a good place.",
     funFact:"Built from hanja 場所. Korean has dozens of location words ending in 소 (所), like 사무소 (office) and 화장실 (restroom, lit. makeup room)."},

    // ── Teach 2: 거리 ──
    {type:"teach", trg:"거리", src:"street, distance", pos:"noun", gender:null,
     note:"Native Korean. Means both 'street' and 'distance'.\nContext tells you which meaning.",
     example:"A: 이 거리에 맛있는 식당이 있어요?\nB: 네, 걸어서 5분 거리예요.",
     exampleSrc:"A: Are there any good restaurants on this street?\nB: Yes, it's a 5-minute walking distance.",
     funFact:"The same word covers 'street' and 'distance' because Korean thinks of space in terms of how far you walk along a road."},

    // ── Teach 3: 사무실 ──
    {type:"teach", trg:"사무실", src:"office", pos:"noun", gender:null,
     note:"Sino-Korean: 事務 (business affairs) + 室 (room).\nThe standard word for a workplace office.",
     example:"A: 사무실이 몇 층에 있어요?\nB: 3층에 있어요.",
     exampleSrc:"A: What floor is the office on?\nB: It's on the 3rd floor.",
     funFact:"The 실 (室 room) ending appears in many Korean room words: 교실 (classroom), 화장실 (restroom), 침실 (bedroom)."},

    // ── Teach 4: 경찰서 ──
    {type:"teach", trg:"경찰서", src:"police station", pos:"noun", gender:null,
     note:"Sino-Korean: 警察 (police) + 署 (office/station).\nThe 서 ending marks official government buildings.",
     example:"A: 경찰서가 어디에 있어요?\nB: 은행 옆에 있어요.",
     exampleSrc:"A: Where is the police station?\nB: It's next to the bank.",
     funFact:"The 서 (署) ending signals an official government post. You also see it in 소방서 (fire station) and 구청 (district office)."},

    // ── Quiz block 1 ──
    {type:"mc",
     q:"'사무실'에서 '실'의 뜻은 무엇입니까?",
     opts:["room","street","building","floor"],
     ans:"room",
     hint:"This hanja character appears in many Korean words for enclosed spaces where people gather."},

    {type:"fb",
     s:"여기서 {1}까지 얼마나 걸려요?",
     a:["경찰서"],
     opts:["경찰서","사무실","장소","거리"],
     hint:"You need the official government building where police work.",
     sSrc:"How long does it take from here to the {1}?"},

    {type:"match", pairs:[
      {trg:"장소", src:"place/location"},
      {trg:"거리", src:"street/distance"},
      {trg:"사무실", src:"office"},
      {trg:"경찰서", src:"police station"}
    ]},

    // ── Teach 5: 대사관 ──
    {type:"teach", trg:"대사관", src:"embassy", pos:"noun", gender:null,
     note:"Sino-Korean: 大使 (ambassador) + 館 (building).\nWhere ambassadors work.",
     example:"A: 미국 대사관이 어디에 있어요?\nB: 광화문 근처에 있어요.",
     exampleSrc:"A: Where is the American embassy?\nB: It's near Gwanghwamun.",
     funFact:"The 관 (館) ending means a large public building. You see it in 도서관 (library), 박물관 (museum), and 미술관 (art gallery)."},

    // ── Teach 6: 박물관 ──
    {type:"teach", trg:"박물관", src:"museum", pos:"noun", gender:null,
     note:"Sino-Korean: 博物 (broad things) + 館 (building).\nLiterally a building of many things.",
     example:"A: 내일 박물관에 갈래요?\nB: 좋아요! 국립박물관에 가요.",
     exampleSrc:"A: Do you want to go to a museum tomorrow?\nB: Great! Let's go to the National Museum.",
     funFact:"The National Museum of Korea in Seoul is one of the largest museums in the world, with over 310,000 artifacts."},

    // ── Teach 7: 극장 ──
    {type:"teach", trg:"극장", src:"theater", pos:"noun", gender:null,
     note:"Sino-Korean: 劇 (drama) + 場 (place).\nUsed for both movie theaters and live performance venues.",
     example:"A: 극장에서 영화 볼까요?\nB: 네, 좋은 영화가 있어요.",
     exampleSrc:"A: Shall we watch a movie at the theater?\nB: Yes, there's a good movie playing.",
     funFact:"Koreans often say 영화관 (movie hall) for cinemas and reserve 극장 for live theater, though both are understood."},

    // ── Teach 8: 교회 ──
    {type:"teach", trg:"교회", src:"church", pos:"noun", gender:null,
     note:"Sino-Korean: 敎 (teach) + 會 (gathering).\nLiterally a 'teaching gathering.'",
     example:"A: 일요일에 교회에 가요?\nB: 네, 매주 일요일에 가요.",
     exampleSrc:"A: Do you go to church on Sundays?\nB: Yes, I go every Sunday.",
     funFact:"South Korea has one of the largest Christian populations in East Asia. About 28% of Koreans identify as Christian."},

    // ── Quiz block 2 ──
    {type:"mc",
     q:"'박물관'과 '대사관'에 공통으로 들어가는 글자는?",
     opts:["서","관","실","장"],
     ans:"관",
     hint:"Both words end with a character meaning a large public building or hall."},

    {type:"fb",
     s:"주말에 {1}에서 연극을 봤어요.",
     a:["극장"],
     opts:["극장","교회","박물관","대사관"],
     hint:"This is the place specifically for watching plays and performances.",
     sSrc:"I saw a play at the {1} on the weekend."},

    // ── Teach 9: 공원 ──
    {type:"teach", trg:"공원", src:"park", pos:"noun", gender:null,
     note:"Sino-Korean: 公 (public) + 園 (garden).\nA public garden or green space.",
     example:"A: 공원에서 산책할까요?\nB: 좋아요, 날씨가 좋네요.",
     exampleSrc:"A: Shall we take a walk in the park?\nB: Sure, the weather is nice.",
     funFact:"Seoul's Han River parks stretch over 40 km and are a beloved spot for cycling, picnics, and delivery chicken."},

    // ── Teach 10: 운동장 ──
    {type:"teach", trg:"운동장", src:"sports field, playground", pos:"noun", gender:null,
     note:"Sino-Korean: 運動 (exercise) + 場 (place).\nAny open field for sports or play.",
     example:"A: 운동장에서 축구해요?\nB: 네, 같이 해요!",
     exampleSrc:"A: Are you playing soccer at the sports field?\nB: Yes, let's play together!",
     funFact:"Every Korean school has an 운동장. It doubles as the gathering place for school events, assemblies, and field day competitions."},

    // ── Teach 11: 수영장 ──
    {type:"teach", trg:"수영장", src:"swimming pool", pos:"noun", gender:null,
     note:"Sino-Korean: 水泳 (swimming) + 場 (place).\nA dedicated place for swimming.",
     example:"A: 수영장이 가까워요?\nB: 네, 걸어서 10분이에요.",
     exampleSrc:"A: Is the swimming pool nearby?\nB: Yes, it's a 10-minute walk.",
     funFact:"Korean public pools require swim caps. Many visitors are surprised when they arrive without one and have to buy one at the entrance."},

    // ── Teach 12: 공중전화 ──
    {type:"teach", trg:"공중전화", src:"public phone", pos:"noun", gender:null,
     note:"Sino-Korean: 公衆 (public) + 電話 (telephone).\nA phone booth for public use.",
     example:"A: 공중전화가 아직 있어요?\nB: 지하철역에 있을 거예요.",
     exampleSrc:"A: Are there still public phones?\nB: There should be some at the subway station.",
     funFact:"Public phones are nearly extinct in Korea due to smartphones, but a few survive in subway stations for emergencies."},

    // ── Quiz block 3 ──
    {type:"mc",
     q:"운동장에서 무엇을 해요?",
     opts:["영화를 봐요","전화를 해요","축구를 해요","수영을 해요"],
     ans:"축구를 해요",
     hint:"This is an open field for sports. Think of the most common outdoor team sport.",
     },

    {type:"match", pairs:[
      {trg:"공원", src:"park"},
      {trg:"수영장", src:"swimming pool"},
      {trg:"운동장", src:"sports field"},
      {trg:"공중전화", src:"public phone"}
    ]},

    // ── Teach 13: 휴지통 ──
    {type:"teach", trg:"휴지통", src:"trash can", pos:"noun", gender:null,
     note:"Sino-Korean + native: 휴지 (tissue/waste paper) + 통 (barrel/bin).\nLiterally a tissue barrel.",
     example:"A: 휴지통이 어디에 있어요?\nB: 문 옆에 있어요.",
     exampleSrc:"A: Where is the trash can?\nB: It's next to the door.",
     funFact:"Finding public trash cans in Korea is famously difficult. Most were removed in the 1990s, so Koreans carry trash home or find convenience store bins."},

    // ── Teach 14: 자리 ──
    {type:"teach", trg:"자리", src:"seat, spot, place", pos:"noun", gender:null,
     note:"Native Korean. Flexible word meaning seat, spot, or position.\nUsed for physical seats and abstract positions.",
     example:"A: 자리 있어요?\nB: 네, 여기 앉으세요.",
     exampleSrc:"A: Is there a seat available?\nB: Yes, please sit here.",
     funFact:"자리 is also used in expressions like 자리를 잡다 (to settle in/find one's place) and 빈자리 (empty seat/vacancy)."},

    // ── Teach 15: 가운데 ──
    {type:"teach", trg:"가운데", src:"middle, center", pos:"noun", gender:null,
     note:"Native Korean. Indicates the center point between two sides.\nOften used with location particles.",
     example:"A: 어디에 앉을까요?\nB: 가운데에 앉아요.",
     exampleSrc:"A: Where shall we sit?\nB: Let's sit in the middle.",
     funFact:"가운데 is one of Korea's oldest native words. Unlike left (왼쪽) and right (오른쪽) which use 쪽 (side), 가운데 stands alone."},

    // ── Quiz block 4 ──
    {type:"fb",
     s:"{1}이 어디에 있어요? 쓰레기를 버리고 싶어요.",
     a:["휴지통"],
     opts:["휴지통","자리","가운데","장소"],
     hint:"You need the container for throwing away garbage and tissue paper.",
     sSrc:"Where is the {1}? I want to throw away trash."},

    {type:"mc",
     q:"'자리 있어요?'는 무슨 뜻이에요?",
     opts:["Where is the place?","Is this the middle?","Is the park open?","Is there a seat?"],
     ans:"Is there a seat?",
     hint:"This native Korean word refers to a spot where you can sit down."},

    // ── Teach 16: 이곳 ──
    {type:"teach", trg:"이곳", src:"this place (here)", pos:"pron", gender:null,
     note:"이 (this) + 곳 (place). Refers to somewhere near the speaker.\nMore formal than 여기.",
     example:"A: 이곳이 유명한 식당이에요?\nB: 네, 이곳은 정말 맛있어요.",
     exampleSrc:"A: Is this place the famous restaurant?\nB: Yes, this place is really delicious.",
     funFact:"Korean has a three-way distance system: 이 (near me), 그 (near you), 저 (far from both). This pattern applies to 곳, 것, 사람, and many more."},

    // ── Teach 17: 그곳 ──
    {type:"teach", trg:"그곳", src:"that place (there)", pos:"pron", gender:null,
     note:"그 (that) + 곳 (place). Refers to somewhere near the listener.\nMore formal than 거기.",
     example:"A: 부산에 가 봤어요?\nB: 네, 그곳은 정말 아름다워요.",
     exampleSrc:"A: Have you been to Busan?\nB: Yes, that place is really beautiful.",
     funFact:"In writing and formal speech, 그곳 is preferred over 거기. News reporters almost always say 그곳 instead of 거기."},

    // ── Teach 18: 저곳 ──
    {type:"teach", trg:"저곳", src:"that place over there", pos:"pron", gender:null,
     note:"저 (that over there) + 곳 (place).\nRefers to somewhere far from both speaker and listener.",
     example:"A: 저곳이 뭐예요?\nB: 저곳은 새로 생긴 도서관이에요.",
     exampleSrc:"A: What is that place over there?\nB: That place is a newly built library.",
     funFact:"The 이/그/저 system is one of the first patterns Korean learners master. Once you know it, you can point to anything: 이것/그것/저것 (this/that/that thing)."},

    // ── Final quiz block ──
    {type:"match", pairs:[
      {trg:"이곳", src:"this place"},
      {trg:"그곳", src:"that place"},
      {trg:"저곳", src:"that place over there"},
      {trg:"가운데", src:"middle/center"}
    ]},

    {type:"mc",
     q:"멀리 있는 건물을 가리키며: '___이 뭐예요?'",
     opts:["저곳","여기","이곳","그곳"],
     ans:"저곳",
     hint:"The building is far from both you and the person you are speaking to."},

    {type:"fb",
     s:"방의 {1}에 큰 테이블이 있어요.",
     a:["가운데"],
     opts:["가운데","자리","이곳","장소"],
     hint:"The table sits at the center point of the room, equidistant from the walls.",
     sSrc:"There is a big table in the {1} of the room."},
  ]
};
export default LESSON_11;
