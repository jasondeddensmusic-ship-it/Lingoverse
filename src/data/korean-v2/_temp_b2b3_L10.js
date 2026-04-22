// Korean B2. Batch 3, Lesson 10: Structure and Composition
// Words: 구분, 구분되다, 구분하다, 구석, 구석구석, 구성, 구성되다, 구성하다, 구속, 구속되다, 구속하다, 구역, 구입, 구입하다, 구청, 국가적, 국기, 국내선, 국내외, 국립

const LESSON_10 = {
  id:"kov2_b2b3_l10", title:"구성과 구분", icon:"🏗️", xp:15, board:true,
  steps:[
    {type:"intro", title:"구성과 구분",
     desc:"Learn vocabulary for categorization, composition, and national institutions. These words are fundamental for formal writing and discussions about systems and structures.",
     goals:["Master 20 words about division, composition, and national affairs","Understand the productive 구 word families","Use institutional vocabulary in formal contexts"]},

    {type:"teach", trg:"구분", src:"division, classification", pos:"noun", gender:null,
     note:"Sino-Korean. 區 (divide) + 分 (part).\nSorting things into categories.",
     example:"A: 쓰레기를 종류별로 구분해야 해.\nB: 재활용 분리가 중요하지.",
     exampleSrc:"A: You need to sort trash by type.\nB: Recycling separation is important.",
     funFact:"From Hanja 區分. Korea's strict 4-way recycling requires careful 구분: paper, plastic, metal, and general waste."},

    {type:"teach", trg:"구분되다", src:"to be classified, to be divided", pos:"verb", gender:null,
     note:"구분 (classification) + 되다 (passive).\nThings are sorted into categories.",
     example:"A: 이 시험은 두 부분으로 구분돼.\nB: 듣기와 읽기로 나뉘는 거지?",
     exampleSrc:"A: This exam is divided into two parts.\nB: Listening and reading, right?",
     funFact:"구분되다 (be divided) is the passive counterpart of 구분하다 (to divide). Both are extremely common in formal Korean."},

    {type:"teach", trg:"구분하다", src:"to classify, to divide, to sort", pos:"verb", gender:null,
     note:"구분 (classification) + 하다 (to do).\nTo actively sort things into groups.",
     example:"A: 이 책을 장르별로 구분해 줘.\nB: 소설, 시, 에세이로 나눌게.",
     exampleSrc:"A: Please sort these books by genre.\nB: I will divide them into novels, poetry, and essays.",
     funFact:"구분하다 vs. 구별하다: 구분 is about sorting into categories, 구별 is about telling things apart."},

    {type:"teach", trg:"구석", src:"corner, nook", pos:"noun", gender:null,
     note:"Native Korean word.\nA secluded or tucked-away spot.",
     example:"A: 카페 구석 자리에 앉자.\nB: 좋아, 거기가 조용하겠다.",
     exampleSrc:"A: Let us sit in the corner of the cafe.\nB: Good, it should be quiet there.",
     funFact:"구석에 몰리다 (to be cornered) is used both literally and figuratively for being in a tight spot."},

    {type:"teach", trg:"구석구석", src:"every nook and cranny", pos:"noun", gender:null,
     note:"구석 (corner) repeated for emphasis.\nAbsolutely every hidden spot.",
     example:"A: 방을 구석구석 청소했어?\nB: 응, 먼지 하나 없어.",
     exampleSrc:"A: Did you clean every corner of the room?\nB: Yes, there is not a speck of dust.",
     funFact:"Korean loves reduplication for emphasis: 곳곳 (everywhere), 집집 (every house), 사람사람 (each person)."},

    {type:"mc",
     q:"'구석구석 찾아봤다'는 무슨 뜻인가?",
     opts:["모든 곳을 빠짐없이 찾았다","한 곳만 찾았다","대충 찾았다","찾기를 포기했다"],
     ans:"모든 곳을 빠짐없이 찾았다",
     hint:"The word is repeated for emphasis, meaning you searched absolutely everywhere."},

    {type:"teach", trg:"구성", src:"composition, formation", pos:"noun", gender:null,
     note:"Sino-Korean. 構 (construct) + 成 (complete).\nHow something is put together.",
     example:"A: 팀 구성이 어떻게 돼?\nB: 5명으로 구성돼 있어.",
     exampleSrc:"A: How is the team composed?\nB: It consists of 5 members.",
     funFact:"From Hanja 構成. Essential in formal writing: 문장 구성 (sentence structure), 조직 구성 (organization structure)."},

    {type:"teach", trg:"구성되다", src:"to be composed of, to consist of", pos:"verb", gender:null,
     note:"구성 (composition) + 되다 (passive).\nTo be made up of certain elements.",
     example:"A: 이 위원회는 10명으로 구성돼 있어.\nB: 전문가가 많이 포함돼 있어?",
     exampleSrc:"A: This committee is composed of 10 people.\nB: Are many experts included?",
     funFact:"'N으로 구성되다' is a TOPIK staple pattern. Nearly every reading passage uses this structure."},

    {type:"teach", trg:"구성하다", src:"to compose, to form, to organize", pos:"verb", gender:null,
     note:"구성 (composition) + 하다 (to do).\nTo actively put elements together.",
     example:"A: 새로운 팀을 구성해야 해.\nB: 어떤 사람들이 필요해?",
     exampleSrc:"A: We need to form a new team.\nB: What kind of people do we need?",
     funFact:"구성하다 (active: we compose) vs. 구성되다 (passive: it is composed). The active form emphasizes the agent."},

    {type:"teach", trg:"구속", src:"arrest, detention; constraint", pos:"noun", gender:null,
     note:"Sino-Korean. 拘 (restrain) + 束 (bind).\nLegal detention or physical constraint.",
     example:"A: 용의자가 구속됐대.\nB: 증거가 충분했나 봐.",
     exampleSrc:"A: I heard the suspect was arrested.\nB: There must have been enough evidence.",
     funFact:"From Hanja 拘束. In baseball, 구속 also means pitch speed: 150km 구속 (150km/h fastball)."},

    {type:"fb",
     s:"이 프로그램은 4개의 단계로 {1}돼 있다.",
     a:["구성"],
     opts:["구성","구속","구분","구입"],
     hint:"This word means how something is put together or composed of parts.",
     sSrc:"This program is {1} of four stages."},

    {type:"teach", trg:"구속되다", src:"to be arrested, to be detained", pos:"verb", gender:null,
     note:"구속 (detention) + 되다 (passive).\nTo be placed under legal custody.",
     example:"A: 범인이 어제 구속됐어.\nB: 다행이다, 이제 안심이야.",
     exampleSrc:"A: The criminal was arrested yesterday.\nB: That is a relief, now I can relax.",
     funFact:"Korean law distinguishes 체포 (arrest at scene) from 구속 (formal detention by court order)."},

    {type:"teach", trg:"구속하다", src:"to arrest, to detain; to constrain", pos:"verb", gender:null,
     note:"구속 (detention) + 하다 (to do).\nTo place someone under restraint.",
     example:"A: 경찰이 용의자를 구속했어.\nB: 재판은 언제 시작해?",
     exampleSrc:"A: The police detained the suspect.\nB: When does the trial start?",
     funFact:"Also used figuratively: 규칙에 구속되다 (to be constrained by rules). Not just for criminal contexts."},

    {type:"teach", trg:"구역", src:"zone, area, section", pos:"noun", gender:null,
     note:"Sino-Korean. 區 (area) + 域 (territory).\nA designated or defined area.",
     example:"A: 여기는 금연 구역이에요.\nB: 죄송합니다, 밖에서 피울게요.",
     exampleSrc:"A: This is a non-smoking zone.\nB: Sorry, I will smoke outside.",
     funFact:"From Hanja 區域. 투표 구역 (voting district), 관할 구역 (jurisdiction), 금연 구역 (no-smoking zone)."},

    {type:"teach", trg:"구입", src:"purchase, buying", pos:"noun", gender:null,
     note:"Sino-Korean. 購 (buy) + 入 (enter).\nThe formal act of buying something.",
     example:"A: 티켓 구입은 어디서 해요?\nB: 온라인으로도 구입할 수 있어요.",
     exampleSrc:"A: Where can I purchase tickets?\nB: You can also buy them online.",
     funFact:"From Hanja 購入. More formal than 사다 (to buy). Used in official contexts: 구입 영수증 (purchase receipt)."},

    {type:"teach", trg:"구입하다", src:"to purchase, to buy (formal)", pos:"verb", gender:null,
     note:"구입 (purchase) + 하다 (to do).\nThe formal verb for buying.",
     example:"A: 새 컴퓨터를 구입했어.\nB: 어디서 샀어? 얼마였어?",
     exampleSrc:"A: I purchased a new computer.\nB: Where did you buy it? How much was it?",
     funFact:"구입하다 is the formal/written form. 사다 is the everyday spoken form. Both mean 'to buy.'"},

    {type:"mc",
     q:"'구역'과 의미가 가장 비슷한 것은?",
     opts:["교실","지역","건물","도로"],
     ans:"지역",
     hint:"This word refers to a designated section or territory within a larger space."},

    {type:"teach", trg:"구청", src:"district office", pos:"noun", gender:null,
     note:"Sino-Korean. 區 (district) + 廳 (office).\nThe local government office of a 구.",
     example:"A: 주민등록증을 구청에서 발급받아야 해.\nB: 가까운 구청이 어디야?",
     exampleSrc:"A: You need to get your resident ID at the district office.\nB: Where is the nearest district office?",
     funFact:"From Hanja 區廳. Every Korean must register at their local 구청 for official documents and services."},

    {type:"teach", trg:"국가적", src:"national, state-level", pos:"noun", gender:null,
     note:"국가 (nation) + 적 (的, adjectival suffix).\nRelating to the nation as a whole.",
     example:"A: 이것은 국가적 차원의 문제야.\nB: 정부가 나서야 할 일이네.",
     exampleSrc:"A: This is a national-level issue.\nB: The government needs to step in.",
     funFact:"국가적 행사 (national event) includes things like the Olympics, presidential elections, and national holidays."},

    {type:"teach", trg:"국기", src:"national flag", pos:"noun", gender:null,
     note:"Sino-Korean. 國 (country) + 旗 (flag).\nThe official flag representing a nation.",
     example:"A: 한국의 국기는 태극기야.\nB: 가운데 빨강과 파랑이 인상적이야.",
     exampleSrc:"A: Korea's national flag is the Taegeukgi.\nB: The red and blue in the center are impressive.",
     funFact:"From Hanja 國旗. The Korean flag's design represents yin-yang balance and the four trigrams of I Ching philosophy."},

    {type:"teach", trg:"국내선", src:"domestic flight/line", pos:"noun", gender:null,
     note:"국내 (domestic) + 선 (線, line/route).\nAirline routes within the country.",
     example:"A: 국내선 비행기는 어디서 타요?\nB: 국내선 터미널은 옆 건물이에요.",
     exampleSrc:"A: Where do I board a domestic flight?\nB: The domestic terminal is the building next door.",
     funFact:"From Hanja 國內線. Opposite: 국제선 (international line). Korea's busiest domestic route is Seoul-Jeju."},

    {type:"teach", trg:"국내외", src:"domestic and international", pos:"noun", gender:null,
     note:"국내 (domestic) + 외 (外, outside).\nBoth inside and outside the country.",
     example:"A: 이 회사는 국내외에서 활동하고 있어.\nB: 글로벌 기업이 된 거네.",
     exampleSrc:"A: This company is active both domestically and internationally.\nB: So it has become a global company.",
     funFact:"A compound showing Korean's efficiency: 국내외 packs 'domestic and foreign' into three syllables."},

    {type:"teach", trg:"국립", src:"national, state-run", pos:"noun", gender:null,
     note:"Sino-Korean. 國 (country) + 立 (establish).\nEstablished and operated by the national government.",
     example:"A: 국립 박물관에 가 봤어?\nB: 응, 무료라서 자주 가.",
     exampleSrc:"A: Have you been to the national museum?\nB: Yes, it is free so I go often.",
     funFact:"From Hanja 國立. Korea's National Museum in Yongsan is one of the world's largest, housing 300,000+ artifacts."},

    {type:"match", pairs:[
      {trg:"국기", src:"national flag"},
      {trg:"구청", src:"district office"},
      {trg:"구입", src:"purchase"},
      {trg:"구역", src:"zone"}
    ]}
  ]
};
export default LESSON_10;
