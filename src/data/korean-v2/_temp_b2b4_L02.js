// Korean B2. Batch 4, Lesson 2: Worry and Crossing Over
// Words: 걱정스럽다, 건, 건너, 건너가다, 건너오다, 건너편, 건넌방, 건네다, 건네주다, 건드리다, 건설, 건설되다, 건설하다, 건전하다, 건조, 건조하다, 걷기, 걷다, 걸치다, 검정색

const LESSON_2 = {
  id:"kov2_b2b4_l2", title:"건너와 건설", icon:"🌉", xp:15, board:true,
  steps:[
    {type:"intro", title:"건너와 건설",
     desc:"Learn words about crossing, building, and physical states. This lesson covers a rich cluster of 건- compound verbs and construction vocabulary.",
     goals:["Master 20 words about crossing, handing over, and construction","Understand verb compounds built on 건너- (cross)","Use descriptive vocabulary for textures and conditions"]},

    {type:"teach", trg:"걱정스럽다", src:"to look worrisome, to seem concerning", pos:"adj", gender:null,
     note:"걱정 (worry) + 스럽다 (seeming).\nDescribes something that appears worrying.",
     example:"A: 요즘 네 표정이 걱정스러워.\nB: 회사 일이 좀 힘들어서 그래.",
     exampleSrc:"A: Your expression looks worrisome lately.\nB: It is because work has been tough.",
     funFact:"The -스럽다 suffix creates adjectives meaning 'seems like': 사랑스럽다 (lovely), 자연스럽다 (natural)."},

    {type:"teach", trg:"건", src:"thing, matter (bound noun)", pos:"noun", gender:null,
     note:"Bound noun. 것 (thing) contracted.\nUsed after modifying clauses.",
     example:"A: 공부하는 건 좋은데 쉬는 것도 중요해.\nB: 알겠어, 좀 쉴게.",
     exampleSrc:"A: Studying is good, but resting is also important.\nB: OK, I will rest a bit.",
     funFact:"건 is the spoken contraction of 것은. In formal writing, 것은 is preferred over 건."},

    {type:"teach", trg:"건너", src:"the other side, across", pos:"noun", gender:null,
     note:"Native Korean word.\nThe opposite side of a river, road, or space.",
     example:"A: 강 건너에 뭐가 있어?\nB: 큰 공원이 있어.",
     exampleSrc:"A: What is on the other side of the river?\nB: There is a big park.",
     funFact:"Forms the base for many compound verbs: 건너가다 (go across), 건너오다 (come across), 건너뛰다 (skip)."},

    {type:"teach", trg:"건너가다", src:"to go across, to cross over", pos:"verb", gender:null,
     note:"건너 (across) + 가다 (go).\nMoving away from the speaker across a boundary.",
     example:"A: 횡단보도로 건너가세요.\nB: 네, 신호등이 바뀔 때까지 기다릴게요.",
     exampleSrc:"A: Please cross at the crosswalk.\nB: Yes, I will wait until the traffic light changes.",
     funFact:"건너가다 implies movement away from the speaker, while 건너오다 implies movement toward the speaker."},

    {type:"teach", trg:"건너오다", src:"to come across, to cross over (toward speaker)", pos:"verb", gender:null,
     note:"건너 (across) + 오다 (come).\nMoving toward the speaker across a boundary.",
     example:"A: 조심해서 건너와!\nB: 걱정 마, 차 없는 거 확인했어.",
     exampleSrc:"A: Cross over carefully!\nB: Do not worry, I checked that there are no cars.",
     funFact:"The -가다/-오다 directional pair exists in many Korean verbs: 올라가다/올라오다, 내려가다/내려오다."},

    {type:"mc",
     q:"'건너가다'와 '건너오다'의 차이점은?",
     opts:["방향이 다르다: 가다는 멀어지고, 오다는 다가온다","뜻이 완전히 같다","건너가다만 교통에 쓴다","건너오다는 수영할 때만 쓴다"],
     ans:"방향이 다르다: 가다는 멀어지고, 오다는 다가온다",
     hint:"Korean directional verbs split by perspective: one moves away, the other moves toward you."},

    {type:"teach", trg:"건너편", src:"the opposite side", pos:"noun", gender:null,
     note:"건너 (across) + 편 (side).\nThe other side of a street, river, or room.",
     example:"A: 건너편에 맛있는 식당이 있어.\nB: 점심에 같이 가자!",
     exampleSrc:"A: There is a delicious restaurant on the opposite side.\nB: Let us go together for lunch!",
     funFact:"Similar to 맞은편 (facing side). Both mean 'opposite side' but 맞은편 implies directly facing."},

    {type:"teach", trg:"건넌방", src:"the room across the hall", pos:"noun", gender:null,
     note:"건너 (across) + ㄴ + 방 (room).\nA room on the other side.",
     example:"A: 건넌방에서 소리가 나요.\nB: 옆집 아이가 놀고 있나 봐요.",
     exampleSrc:"A: There is a noise coming from the room across.\nB: The neighbor's child must be playing.",
     funFact:"In traditional Korean houses (한옥), rooms were arranged around a courtyard, making 건넌방 common."},

    {type:"teach", trg:"건네다", src:"to hand over, to pass (something)", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo transfer something from your hand to another's.",
     example:"A: 서류를 건네 주시겠어요?\nB: 네, 여기 있습니다.",
     exampleSrc:"A: Could you hand over the documents?\nB: Yes, here they are.",
     funFact:"건네다 also means to say or address: 말을 건네다 (to strike up a conversation) is a common expression."},

    {type:"teach", trg:"건네주다", src:"to hand over to someone", pos:"verb", gender:null,
     note:"건네다 (hand over) + 주다 (give).\nHanding something over as a favor.",
     example:"A: 이 편지를 민수에게 건네줄 수 있어?\nB: 물론이지, 내일 줄게.",
     exampleSrc:"A: Can you pass this letter to Minsu?\nB: Of course, I will give it to him tomorrow.",
     funFact:"Adding 주다 to verbs adds a nuance of doing something for someone's benefit in Korean."},

    {type:"fb",
     s:"길 {1}에 우체국이 있습니다.",
     a:["건너편"],
     opts:["건너편","건넌방","건조","건설"],
     hint:"This compound noun means the opposite side of a street or road.",
     sSrc:"The post office is on the other {1} of the street."},

    {type:"teach", trg:"건드리다", src:"to touch, to mess with, to provoke", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo touch something (often when you should not).",
     example:"A: 내 물건 건드리지 마!\nB: 미안, 그냥 궁금해서 봤어.",
     exampleSrc:"A: Do not touch my stuff!\nB: Sorry, I was just curious.",
     funFact:"건드리다 often carries a negative nuance of unwanted interference, unlike 만지다 (neutral touch)."},

    {type:"teach", trg:"건설", src:"construction, building", pos:"noun", gender:null,
     note:"Sino-Korean. 建 (build) + 設 (establish).\nThe act of constructing buildings or structures.",
     example:"A: 이 지역에 건설 공사가 한창이에요.\nB: 새 아파트 단지가 생긴대요.",
     exampleSrc:"A: Construction is in full swing in this area.\nB: They say a new apartment complex is being built.",
     funFact:"From Hanja 建設. Korea's rapid development earned it the name 'construction republic' in the 1970s."},

    {type:"teach", trg:"건설되다", src:"to be constructed, to be built", pos:"verb", gender:null,
     note:"건설 (construction) + 되다 (passive).\nA structure gets built.",
     example:"A: 새 다리가 건설될 예정이래요.\nB: 교통이 좀 나아지겠네요.",
     exampleSrc:"A: A new bridge is scheduled to be constructed.\nB: Traffic will improve a bit.",
     funFact:"The passive form -되다 is preferred in news and formal reports when the builder is not the focus."},

    {type:"teach", trg:"건설하다", src:"to construct, to build", pos:"verb", gender:null,
     note:"건설 (construction) + 하다 (to do).\nActive form: someone builds something.",
     example:"A: 정부가 새 고속도로를 건설하고 있어요.\nB: 완공은 언제쯤이에요?",
     exampleSrc:"A: The government is constructing a new highway.\nB: When will it be completed?",
     funFact:"From Hanja 建設. Major Korean construction firms like Samsung C&T and Hyundai are global players."},

    {type:"mc",
     q:"'건드리다'는 어떤 뉘앙스를 가지고 있나요?",
     opts:["조용히 지나간다","허락 없이 만지거나 방해한다","부드럽게 만진다","건설을 시작한다"],
     ans:"허락 없이 만지거나 방해한다",
     hint:"This verb implies touching something you probably should not, or provoking someone."},

    {type:"teach", trg:"건전하다", src:"to be sound, to be wholesome", pos:"adj", gender:null,
     note:"Sino-Korean. 健 (healthy) + 全 (complete) + 하다.\nDescribes something morally or physically healthy.",
     example:"A: 건전한 취미 생활이 필요해.\nB: 운동이나 독서는 어때?",
     exampleSrc:"A: I need a wholesome hobby.\nB: How about exercise or reading?",
     funFact:"From Hanja 健全. Korean media ratings use 건전 to describe family-friendly content."},

    {type:"teach", trg:"건조", src:"dryness, drying", pos:"noun", gender:null,
     note:"Sino-Korean. 乾 (dry) + 燥 (parched).\nThe state of being dry or the process of drying.",
     example:"A: 가을에는 건조 주의보가 많아요.\nB: 로션을 자주 발라야겠어요.",
     exampleSrc:"A: There are many dryness advisories in autumn.\nB: I should apply lotion often.",
     funFact:"From Hanja 乾燥. Also used in 건조기 (dryer) and 건조 식품 (dried foods like 건어물, dried fish)."},

    {type:"teach", trg:"건조하다", src:"to be dry, to be arid", pos:"adj", gender:null,
     note:"건조 (dryness) + 하다.\nDescribes dry weather, skin, or atmosphere.",
     example:"A: 겨울에 피부가 너무 건조해요.\nB: 가습기를 사용해 보세요.",
     exampleSrc:"A: My skin is so dry in winter.\nB: Try using a humidifier.",
     funFact:"Also used figuratively: 건조한 사람 describes someone with a dry, emotionless personality."},

    {type:"teach", trg:"걷기", src:"walking (as activity)", pos:"noun", gender:null,
     note:"걷다 (to walk) + 기 (nominalizer).\nThe activity of walking as exercise or pastime.",
     example:"A: 요즘 걷기 운동을 하고 있어요.\nB: 좋은 습관이네요!",
     exampleSrc:"A: I have been doing walking exercise lately.\nB: That is a good habit!",
     funFact:"Korea has many designated 걷기 길 (walking trails), the most famous being Jeju Olle Trail."},

    {type:"teach", trg:"걷다", src:"to walk", pos:"verb", gender:null,
     note:"Native Korean verb.\nBasic movement on foot.",
     example:"A: 오늘은 버스 대신 걸어가자.\nB: 좋아, 날씨도 좋으니까.",
     exampleSrc:"A: Let us walk instead of taking the bus today.\nB: Sure, since the weather is nice.",
     funFact:"걷다 has a second meaning: to collect or gather (세금을 걷다, collect taxes). Context determines which."},

    {type:"teach", trg:"걸치다", src:"to span, to drape over, to stretch across", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo extend across something or place over loosely.",
     example:"A: 어깨에 재킷을 걸치고 나왔어.\nB: 밤에 추울 수 있으니까 잘했어.",
     exampleSrc:"A: I draped a jacket over my shoulders and came out.\nB: Good idea since it can be cold at night.",
     funFact:"Also used for time spans: 며칠에 걸쳐 (over several days), 세 달에 걸쳐 (spanning three months)."},

    {type:"teach", trg:"검정색", src:"black (color)", pos:"noun", gender:null,
     note:"검정 (black) + 색 (色, color).\nThe color black.",
     example:"A: 검정색 옷을 자주 입어요?\nB: 네, 어디에나 잘 어울리니까요.",
     exampleSrc:"A: Do you often wear black clothes?\nB: Yes, because it goes well with anything.",
     funFact:"In Korean, 검정 comes from 검다 (to be black). Formal alternatives include 흑색 (Hanja 黑色)."},

    {type:"fb",
     s:"겨울에는 날씨가 {1}해서 보습제가 필요해요.",
     a:["건조"],
     opts:["건조","건전","건설","건너"],
     hint:"This Sino-Korean adjective describes dry weather or dry skin conditions.",
     sSrc:"In winter, the weather is {1}, so moisturizer is needed."},

    {type:"match", pairs:[
      {trg:"건설하다", src:"to construct"},
      {trg:"건전하다", src:"to be wholesome"},
      {trg:"건조하다", src:"to be dry"},
      {trg:"걸치다", src:"to span, to drape"}
    ]}
  ]
};
export default LESSON_2;
