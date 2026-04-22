// Korean B2. Batch 4, Lesson 11: Staying and Writing
// Words: 묵다, 묶이다, 문구, 문득, 문밖, 문서, 문자, 문제되다, 문학적, 문화재, 문화적, 묻히다, 물가, 물결, 물기, 물러나다, 물리학, 물질, 물질적, 물체

const LESSON_11 = {
  id:"kov2_b2b4_l11", title:"문화와 물질", icon:"📜", xp:15, board:true,
  steps:[
    {type:"intro", title:"문화와 물질",
     desc:"Learn words about culture, writing, water, and material things. This lesson covers 문- (writing/culture) and 물- (water/material) compounds.",
     goals:["Master 20 words about culture, documents, and physical matter","Understand 문- Hanja compounds (writing, culture)","Use 물- compounds for water, matter, and prices"]},

    {type:"teach", trg:"묵다", src:"to stay overnight; to age (food)", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo lodge somewhere, or for food to ferment.",
     example:"A: 어디서 묵을 거예요?\nB: 역 근처 호텔에서 묵을 거예요.",
     exampleSrc:"A: Where will you stay?\nB: I will stay at a hotel near the station.",
     funFact:"묵다 for lodging is casual. For fermentation: 김치가 묵다 (kimchi ages), 묵은지 (aged kimchi)."},

    {type:"teach", trg:"묶이다", src:"to be tied up, to be bound", pos:"verb", gender:null,
     note:"묶다 (to tie) + 이다 (passive).\nBeing restrained or bundled together.",
     example:"A: 일에 묶여서 여행을 못 가요.\nB: 좀 쉬어야 해요.",
     exampleSrc:"A: I am tied up with work and cannot go on a trip.\nB: You need to take a break.",
     funFact:"Used figuratively: 규칙에 묶이다 (bound by rules), 계약에 묶이다 (bound by a contract)."},

    {type:"teach", trg:"문구", src:"stationery; phrase, sentence", pos:"noun", gender:null,
     note:"Two meanings.\n文具 (writing + tools) = stationery. 文句 (writing + phrase) = phrase.",
     example:"A: 문구점에서 공책을 샀어.\nB: 예쁜 거 많았어?",
     exampleSrc:"A: I bought a notebook at the stationery store.\nB: Were there many pretty ones?",
     funFact:"Korean 문구점 (stationery stores) are beloved by students. 문구 also means a written phrase: 광고 문구 (ad copy)."},

    {type:"teach", trg:"문득", src:"suddenly, all of a sudden", pos:"adv", gender:null,
     note:"Native Korean adverb.\nA thought or feeling arising unexpectedly.",
     example:"A: 문득 고향이 그리워졌어.\nB: 오랜만에 부모님 전화해 봐.",
     exampleSrc:"A: I suddenly missed my hometown.\nB: Call your parents for the first time in a while.",
     funFact:"문득 is softer than 갑자기 (suddenly). It implies a gentle, unexpected realization rather than a shock."},

    {type:"teach", trg:"문밖", src:"outside the door", pos:"noun", gender:null,
     note:"문 (door) + 밖 (outside).\nThe area beyond a door or entrance.",
     example:"A: 문밖에 누가 있는 것 같아.\nB: 가서 확인해 볼게.",
     exampleSrc:"A: I think someone is outside the door.\nB: I will go check.",
     funFact:"밖 compounds mark 'outside of': 문밖 (outside the door), 나라 밖 (outside the country), 예상 밖 (unexpected)."},

    {type:"mc",
     q:"'문득'과 '갑자기'의 차이점은?",
     opts:["문득은 부드럽고 갑자기는 충격적이다","의미가 완전히 같다","갑자기는 긍정적이고 문득은 부정적이다","문득은 과거만, 갑자기는 미래만 쓴다"],
     ans:"문득은 부드럽고 갑자기는 충격적이다",
     hint:"One implies a gentle realization; the other implies an abrupt, startling change."},

    {type:"teach", trg:"문서", src:"document", pos:"noun", gender:null,
     note:"Sino-Korean. 文 (writing) + 書 (text).\nAn official written record.",
     example:"A: 중요한 문서를 이메일로 보내 주세요.\nB: 첨부 파일로 보내겠습니다.",
     exampleSrc:"A: Please send the important document by email.\nB: I will send it as an attachment.",
     funFact:"From Hanja 文書. 공식 문서 (official document), 비밀 문서 (classified document), 문서화 (documentation)."},

    {type:"teach", trg:"문자", src:"text message; character (writing)", pos:"noun", gender:null,
     note:"Sino-Korean. 文 (writing) + 字 (character).\nA written character or a text message.",
     example:"A: 문자 보냈는데 봤어?\nB: 아직 못 봤어, 지금 확인할게.",
     exampleSrc:"A: I sent a text, did you see it?\nB: Not yet, I will check now.",
     funFact:"From Hanja 文字. In daily Korean, 문자 almost always means 'text message.' 한글 is 'Korean characters.'"},

    {type:"teach", trg:"문제되다", src:"to become a problem, to be problematic", pos:"verb", gender:null,
     note:"문제 (problem) + 되다 (become).\nSomething turns into an issue.",
     example:"A: 소음이 문제가 되고 있어요.\nB: 관리실에 이야기해 봐야겠어요.",
     exampleSrc:"A: Noise is becoming a problem.\nB: We should talk to the management office.",
     funFact:"문제되다 is often used in news: 사회적으로 문제되다 (become a social issue), 법적으로 문제되다 (become a legal issue)."},

    {type:"teach", trg:"문학적", src:"literary (as modifier)", pos:"noun", gender:null,
     note:"Sino-Korean. 文學 (literature) + 的 (characteristic).\nRelating to literature or its qualities.",
     example:"A: 이 영화는 문학적 표현이 많아요.\nB: 원작이 소설이라서 그런가 봐요.",
     exampleSrc:"A: This movie has many literary expressions.\nB: Probably because the original was a novel.",
     funFact:"From Hanja 文學的. The -적 suffix creates adjective modifiers from nouns: 과학적, 예술적, 역사적."},

    {type:"teach", trg:"문화재", src:"cultural heritage, cultural property", pos:"noun", gender:null,
     note:"Sino-Korean. 文化 (culture) + 財 (treasure).\nOfficially designated cultural treasures.",
     example:"A: 경복궁은 중요한 문화재예요.\nB: 보존이 정말 잘 되어 있더라고요.",
     exampleSrc:"A: Gyeongbokgung is an important cultural heritage site.\nB: It is really well preserved.",
     funFact:"From Hanja 文化財. Korea has 국보 (national treasures) and 보물 (treasures) as official cultural property designations."},

    {type:"teach", trg:"문화적", src:"cultural (as modifier)", pos:"noun", gender:null,
     note:"Sino-Korean. 文化 (culture) + 的 (characteristic).\nRelating to culture.",
     example:"A: 문화적 차이를 이해하는 게 중요해요.\nB: 맞아요, 서로 존중해야 해요.",
     exampleSrc:"A: Understanding cultural differences is important.\nB: Right, we need to respect each other.",
     funFact:"문화적 충격 (culture shock) is a commonly used expression for the surprise of encountering a different culture."},

    {type:"fb",
     s:"경복궁은 한국의 중요한 {1}입니다.",
     a:["문화재"],
     opts:["문화재","문화적","문학적","문서"],
     hint:"This Sino-Korean compound means officially designated cultural heritage or cultural property.",
     sSrc:"Gyeongbokgung is an important Korean {1}."},

    {type:"teach", trg:"묻히다", src:"to be buried, to be hidden away", pos:"verb", gender:null,
     note:"묻다 (to bury) + 히다 (passive).\nBeing covered up or buried.",
     example:"A: 이 보석이 땅속에 묻혀 있었어요.\nB: 어떻게 발견했어요?",
     exampleSrc:"A: This jewel was buried underground.\nB: How did you discover it?",
     funFact:"Used figuratively: 재능이 묻히다 (talent is buried/hidden), 역사에 묻히다 (lost to history)."},

    {type:"teach", trg:"물가", src:"prices, cost of living", pos:"noun", gender:null,
     note:"Sino-Korean. 物 (things) + 價 (price).\nThe general level of prices in an economy.",
     example:"A: 물가가 계속 오르고 있어요.\nB: 장보기가 부담스러워요.",
     exampleSrc:"A: Prices keep rising.\nB: Grocery shopping feels burdensome.",
     funFact:"From Hanja 物價. 물가 상승 (price increase) is a frequent news topic. Also note: 물가 can mean 'waterside' (水邊)."},

    {type:"teach", trg:"물결", src:"wave, ripple", pos:"noun", gender:null,
     note:"물 (water) + 결 (texture/flow).\nThe movement of water in waves.",
     example:"A: 호수의 물결이 잔잔하다.\nB: 바람이 없어서 그렇지.",
     exampleSrc:"A: The ripples on the lake are calm.\nB: It is because there is no wind.",
     funFact:"Used figuratively: 변화의 물결 (wave of change), 한류의 물결 (the Korean Wave). Very poetic."},

    {type:"teach", trg:"물기", src:"moisture, dampness", pos:"noun", gender:null,
     note:"물 (water) + 기 (energy/presence).\nThe presence of water or dampness.",
     example:"A: 머리카락의 물기를 잘 말려야 해.\nB: 드라이기로 말릴게.",
     exampleSrc:"A: You should dry the moisture from your hair well.\nB: I will dry it with a hairdryer.",
     funFact:"물기를 제거하다 (remove moisture) is common in cooking instructions: 야채의 물기를 빼다 (drain water from vegetables)."},

    {type:"teach", trg:"물러나다", src:"to step back, to withdraw, to resign", pos:"verb", gender:null,
     note:"물러 (back) + 나다 (come out).\nTo retreat from a position or place.",
     example:"A: 사장이 자리에서 물러났대요.\nB: 후임자는 누구예요?",
     exampleSrc:"A: I heard the CEO stepped down from the position.\nB: Who is the successor?",
     funFact:"물러나다 is used for physical retreat (한 발 물러나다, step back one step) and resignation from office."},

    {type:"teach", trg:"물리학", src:"physics", pos:"noun", gender:null,
     note:"Sino-Korean. 物理 (principles of things) + 學 (study).\nThe scientific study of matter and energy.",
     example:"A: 대학에서 물리학을 공부하고 있어요.\nB: 어렵지 않아요?",
     exampleSrc:"A: I am studying physics at university.\nB: Is it not difficult?",
     funFact:"From Hanja 物理學. 물리 literally means 'principles of things.' 양자 물리학 (quantum physics) is a hot topic."},

    {type:"mc",
     q:"'물가'에는 두 가지 뜻이 있는데, 다른 뜻은?",
     opts:["물이 없는 곳","물 근처, 물이 있는 곳","물이 깊은 곳","물이 맑은 곳"],
     ans:"물 근처, 물이 있는 곳",
     hint:"Besides meaning prices (物價), this word with different Hanja characters means the waterside (水邊)."},

    {type:"teach", trg:"물질", src:"matter, substance, material", pos:"noun", gender:null,
     note:"Sino-Korean. 物 (thing) + 質 (quality/substance).\nPhysical matter or chemical substance.",
     example:"A: 이 물질은 인체에 해로워요.\nB: 취급할 때 장갑을 끼세요.",
     exampleSrc:"A: This substance is harmful to the body.\nB: Wear gloves when handling it.",
     funFact:"From Hanja 物質. 유해 물질 (harmful substance), 영양 물질 (nutrients), 화학 물질 (chemical substance)."},

    {type:"teach", trg:"물질적", src:"material, materialistic (as modifier)", pos:"noun", gender:null,
     note:"물질 (matter) + 적 (characteristic).\nRelating to physical or material things.",
     example:"A: 물질적 풍요가 꼭 행복은 아니야.\nB: 맞아, 정신적 만족도 중요해.",
     exampleSrc:"A: Material abundance is not necessarily happiness.\nB: Right, mental satisfaction is important too.",
     funFact:"물질적 vs. 정신적 (spiritual/mental) is a common contrast in Korean philosophy and daily conversation."},

    {type:"teach", trg:"물체", src:"object, physical body", pos:"noun", gender:null,
     note:"Sino-Korean. 物 (thing) + 體 (body).\nA physical thing with form.",
     example:"A: 미확인 물체가 하늘에 있어요!\nB: UFO인가? 사진 찍어 봐!",
     exampleSrc:"A: There is an unidentified object in the sky!\nB: Is it a UFO? Try taking a photo!",
     funFact:"미확인 비행 물체 (UFO, unidentified flying object) uses this word. In physics, 물체 is any object with mass."},

    {type:"fb",
     s:"{1}이 계속 올라서 생활이 어려워지고 있어요.",
     a:["물가"],
     opts:["물가","물결","물기","물체"],
     hint:"This Sino-Korean noun means the general price level or cost of living.",
     sSrc:"Life is getting harder because {1} keeps rising."},

    {type:"match", pairs:[
      {trg:"문화재", src:"cultural heritage"},
      {trg:"물러나다", src:"to step back"},
      {trg:"물리학", src:"physics"},
      {trg:"물질", src:"substance, matter"}
    ]}
  ]
};
export default LESSON_11;
