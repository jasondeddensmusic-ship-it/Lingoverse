// Korean B1 Final Gap - Lesson 14: Location & Space
const LESSON_14 = {
  id:"kov2_b1fin_l14", title:"위치와 공간", icon:"📍", xp:15, board:true,
  steps:[
    {type:"intro", title:"Location & Space",
     desc:"Learn vocabulary for describing locations, spatial relationships, and geographical concepts. These words help you navigate spaces and discuss where things are.",
     goals:["Learn 19 words about location, space, and geography","Describe spatial relationships and surroundings","Use bound nouns for sides, times, and occasions"]},

    {type:"teach", trg:"위치", src:"location, position", pos:"noun", gender:null,
     note:"Sino-Korean (位置). 위 (位) = rank/position, 치 (置) = place.",
     example:"A: 현재 위치가 어디예요?\nB: 지도에서 위치를 확인해 볼게요.",
     exampleSrc:"A: Where is your current location?\nB: I'll check the location on the map.",
     funFact:"GPS and map apps always show 현재 위치 (current location). 위치 공유 (location sharing) is commonly used among Korean friends."},

    {type:"teach", trg:"위치하다", src:"to be located, to be situated", pos:"verb", gender:null,
     note:"Verb form of 위치. Formal way to say where something is.",
     example:"A: 이 건물은 어디에 위치해 있어요?\nB: 시내 중심에 위치해 있어요.",
     exampleSrc:"A: Where is this building located?\nB: It's located in the city center.",
     funFact:"위치하다 is the formal version of 있다 for location. Real estate listings always say N에 위치한 아파트 (apartment located in N)."},

    {type:"teach", trg:"주변", src:"surroundings, vicinity, around", pos:"noun", gender:null,
     note:"Sino-Korean (周邊). 주 (周) = around, 변 (邊) = side/edge.",
     example:"A: 주변에 식당이 있어요?\nB: 네, 주변에 맛집이 많아요.",
     exampleSrc:"A: Are there restaurants around here?\nB: Yes, there are many good restaurants nearby.",
     funFact:"주변 is the go-to word for 'around here': 학교 주변 (around the school), 역 주변 (around the station). Map apps show 주변 맛집 (nearby restaurants)."},

    {type:"teach", trg:"주위", src:"surroundings, around (one's vicinity)", pos:"noun", gender:null,
     note:"Sino-Korean (周圍). Similar to 주변 but often for one's personal surroundings.",
     example:"A: 주위를 둘러보세요.\nB: 와, 주위 풍경이 멋져요!",
     exampleSrc:"A: Look around you.\nB: Wow, the surrounding scenery is wonderful!",
     funFact:"주위 and 주변 are nearly interchangeable, but 주위 feels closer to the speaker: 내 주위 (around me) vs 학교 주변 (around the school)."},

    {type:"teach", trg:"한쪽", src:"one side, one direction", pos:"noun", gender:null,
     note:"Compound: 한 (one) + 쪽 (side/direction).",
     example:"A: 한쪽으로 비켜 주세요.\nB: 네, 이쪽으로 가면 되죠?",
     exampleSrc:"A: Please move to one side.\nB: Okay, should I go this way?",
     funFact:"한쪽 implies an imbalance: 한쪽만 듣다 (to hear only one side). In Korean arguments, 한쪽 편 (one side's story) is considered incomplete."},

    {type:"mc",
     q:"'주변'과 비슷한 의미의 단어는?",
     opts:["중간","한쪽","주위","곁"],
     ans:"주위",
     hint:"This word also means 'surroundings' or 'vicinity,' very close in meaning to 주변."},

    {type:"teach", trg:"곁", src:"side, beside, proximity", pos:"noun", gender:null,
     note:"Native Korean noun. Being right next to someone or something.",
     example:"A: 항상 곁에 있어 줄게요.\nB: 고마워요, 든든해요.",
     exampleSrc:"A: I'll always be by your side.\nB: Thank you, that's reassuring.",
     funFact:"곁 is more intimate than 옆 (next to). 곁에 있다 (to be by someone's side) implies emotional closeness, not just physical proximity."},

    {type:"teach", trg:"중간", src:"middle, midpoint, halfway", pos:"noun", gender:null,
     note:"Sino-Korean (中間). 중 (中) = center, 간 (間) = between.",
     example:"A: 중간시험이 언제예요?\nB: 다음 주가 중간시험 기간이에요.",
     exampleSrc:"A: When are the midterm exams?\nB: Next week is the midterm exam period.",
     funFact:"중간고사 (midterms) and 기말고사 (finals) are the two exam periods that define Korean student life. 중간 also means 'halfway through.'"},

    {type:"teach", trg:"중심", src:"center, core, heart (of something)", pos:"noun", gender:null,
     note:"Sino-Korean (中心). 중 (中) = middle, 심 (心) = heart.",
     example:"A: 서울의 중심이 어디예요?\nB: 종로나 광화문이 중심이에요.",
     exampleSrc:"A: Where is the center of Seoul?\nB: Jongno or Gwanghwamun is the center.",
     funFact:"도심 (都心) means city center, using the same 심. 중심 works abstractly too: 가족 중심 (family-centered), 고객 중심 (customer-centered)."},

    {type:"teach", trg:"지구", src:"Earth, the globe", pos:"noun", gender:null,
     note:"Sino-Korean (地球). 지 (地) = earth/ground, 구 (球) = ball/sphere.",
     example:"A: 지구 온난화가 심각해요.\nB: 네, 우리 모두 노력해야 해요.",
     exampleSrc:"A: Global warming is serious.\nB: Yes, we all need to make an effort.",
     funFact:"지구 온난화 (global warming) and 지구촌 (global village) are common news terms. 지구를 지키다 (protect the Earth) appears in environmental campaigns."},

    {type:"teach", trg:"현지", src:"the local area, on-site, local", pos:"noun", gender:null,
     note:"Sino-Korean (現地). 현 (現) = current, 지 (地) = place.",
     example:"A: 현지 음식을 먹어 봤어요?\nB: 네, 현지 음식이 정말 맛있었어요.",
     exampleSrc:"A: Did you try the local food?\nB: Yes, the local food was really delicious.",
     funFact:"현지 implies being physically there: 현지 시간 (local time), 현지 문화 (local culture), 현지인 (local person). Travel shows always emphasize 현지 experiences."},

    {type:"fb",
     s:"서울의 {1}에는 고궁이 많아요.",
     a:["중심"],
     opts:["중심","중간","주변","한쪽"],
     hint:"This word means the core or heart of a city, where the most important landmarks are.",
     sSrc:"There are many old palaces in the {1} of Seoul."},

    {type:"teach", trg:"해외", src:"overseas, abroad", pos:"noun", gender:null,
     note:"Sino-Korean (海外). 해 (海) = sea, 외 (外) = outside.",
     example:"A: 해외여행 자주 가요?\nB: 일 년에 한 번 정도 해외에 가요.",
     exampleSrc:"A: Do you travel overseas often?\nB: I go abroad about once a year.",
     funFact:"Literally 'outside the sea.' As an island-like peninsula, Korea sees overseas as 'beyond the water.' 해외 취업 (overseas employment) is a growing trend."},

    {type:"teach", trg:"유학", src:"studying abroad", pos:"noun", gender:null,
     note:"Sino-Korean (留學). 유 (留) = stay, 학 (學) = study.",
     example:"A: 유학을 가고 싶어요?\nB: 네, 미국에서 유학하고 싶어요.",
     exampleSrc:"A: Do you want to study abroad?\nB: Yes, I want to study in America.",
     funFact:"Korea sends one of the highest numbers of 유학생 (exchange students) globally. The US, UK, Canada, and Australia are top 유학 destinations."},

    {type:"teach", trg:"코너", src:"corner, section", pos:"noun", gender:null,
     note:"Loanword from English. A corner or a designated section.",
     example:"A: 책 코너가 어디예요?\nB: 2층 왼쪽 코너에 있어요.",
     exampleSrc:"A: Where is the book section?\nB: It's on the second floor, left corner.",
     funFact:"Korean stores use 코너 for sections: 화장품 코너 (cosmetics section), 식품 코너 (food section). It is borrowed from English 'corner' but means 'section.'"},

    {type:"teach", trg:"탑", src:"tower, pagoda", pos:"noun", gender:null,
     note:"Sino-Korean (塔). Traditional Buddhist pagoda or modern tower.",
     example:"A: 남산 서울 타워에 가 봤어요?\nB: 네, 탑에서 보는 야경이 예뻐요.",
     exampleSrc:"A: Have you been to Namsan Seoul Tower?\nB: Yes, the night view from the tower is beautiful.",
     funFact:"Korea has ancient Buddhist 탑 (pagodas) at temple sites and modern 탑 like N Seoul Tower. The Dabotap pagoda appears on the 10 won coin."},

    {type:"teach", trg:"터", src:"site, ground, plot (of land)", pos:"noun", gender:null,
     note:"Native Korean bound noun. A place where something was or will be.",
     example:"A: 여기가 옛날 궁궐 터예요?\nB: 네, 조선 시대 궁궐이 있던 터예요.",
     exampleSrc:"A: Is this the site of an old palace?\nB: Yes, it's the site where a Joseon-era palace stood.",
     funFact:"터 implies historical significance: 전쟁터 (battlefield), 놀이터 (playground), 일터 (workplace). The 터 marks where activity happens or happened."},

    {type:"match", pairs:[
      {trg:"해외", src:"overseas"},
      {trg:"유학", src:"studying abroad"},
      {trg:"현지", src:"local area"},
      {trg:"지구", src:"Earth"},
      {trg:"터", src:"site/ground"}
    ]},

    {type:"teach", trg:"집안", src:"inside the house, family, household", pos:"noun", gender:null,
     note:"Compound: 집 (house) + 안 (inside). The home or the family.",
     example:"A: 집안일을 누가 해요?\nB: 가족이 함께 나눠서 해요.",
     exampleSrc:"A: Who does the housework?\nB: The family shares and does it together.",
     funFact:"집안 has a double meaning: the physical home interior and the family lineage. 집안이 좋다 can mean 'the family has good standing.'"},

    {type:"teach", trg:"편", src:"side, direction, team (bound noun)", pos:"noun", gender:null,
     note:"Sino-Korean (便/偏). Indicates a side, team, or tendency.",
     example:"A: 어느 편이에요?\nB: 저는 찬성하는 편이에요.",
     exampleSrc:"A: Which side are you on?\nB: I'm on the side that agrees.",
     funFact:"편 is versatile: 우리 편 (our side/team), V-는 편이다 (tends to V). The grammar pattern A/V-ㄴ/는 편이다 softens statements: 키가 큰 편이에요 (I'm on the tall side)."},

    {type:"teach", trg:"초", src:"second (time); beginning; candle", pos:"noun", gender:null,
     note:"Sino-Korean bound noun with multiple meanings based on hanja.",
     example:"A: 10초 안에 대답하세요!\nB: 잠깐만요, 5초만 더 주세요.",
     exampleSrc:"A: Answer within 10 seconds!\nB: Wait, give me just 5 more seconds.",
     funFact:"초 has three common uses: 초 as seconds (秒), 초 as beginning (初, like 초등학교 = elementary school), and 초 as candle/wax (燭)."},

    {type:"teach", trg:"적", src:"time/occasion when (bound noun)", pos:"noun", gender:null,
     note:"Bound noun used in V-ㄴ 적이 있다/없다 (have/haven't experienced).",
     example:"A: 한국에 간 적이 있어요?\nB: 네, 작년에 간 적이 있어요.",
     exampleSrc:"A: Have you ever been to Korea?\nB: Yes, I went last year.",
     funFact:"V-ㄴ 적이 있다 is one of the most essential Korean grammar patterns. It is equivalent to English present perfect: 'have you ever...'"},

    {type:"teach", trg:"지", src:"since (time elapsed, bound noun)", pos:"noun", gender:null,
     note:"Bound noun in V-ㄴ 지 + time (it has been X since V).",
     example:"A: 한국에 온 지 얼마나 됐어요?\nB: 온 지 3년 됐어요.",
     exampleSrc:"A: How long has it been since you came to Korea?\nB: It's been 3 years since I came.",
     funFact:"V-ㄴ 지 + duration is a must-know B1 pattern: 먹은 지 한 시간 됐어요 (it's been an hour since I ate). It measures elapsed time."},

    {type:"mc",
     q:"'한국에 온 지 2년 됐어요'에서 '지'의 역할은?",
     opts:["장소를 나타낸다","시간의 경과를 나타낸다","이유를 나타낸다","방향을 나타낸다"],
     ans:"시간의 경과를 나타낸다",
     hint:"This bound noun appears after past tense verbs to indicate how much time has passed."}
  ]
};
export default LESSON_14;
