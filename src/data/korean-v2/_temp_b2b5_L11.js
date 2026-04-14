// Korean B2 — Batch 5, Lesson 11: Symbols, Commerce, and Freshness
// Words: 상대적, 상대편, 상류, 상반기, 상상력, 상식, 상업, 상인, 상자, 상점, 상징적, 상징하다, 상추, 상쾌하다, 상태, 상표, 상황, 새기다, 새다, 새로이

const LESSON_11 = {
  id:"kov2_b2b5_l11", title:"상징과 상황", icon:"🔷", xp:15, board:true,
  steps:[
    {type:"intro", title:"상징과 상황",
     desc:"Learn vocabulary about opposition, commerce, symbols, and freshness. This lesson covers words essential for news reading, business discussions, and everyday descriptions.",
     goals:["Master 20 words about comparison, commerce, and situations","Understand Sino-Korean compounds with 상 (above/mutual/commerce)","Express abstract concepts like imagination and symbolism"]},

    {type:"teach", trg:"상대적", src:"relative, comparative", pos:"noun", gender:null,
     note:"상대 (counterpart) + 적 (suffix).\nConsidered in relation to something else.",
     example:"A: 서울은 다른 도시에 비해 상대적으로 비싸.\nB: 물가가 높은 편이지.",
     exampleSrc:"A: Seoul is relatively expensive compared to other cities.\nB: The cost of living tends to be high.",
     funFact:"상대적 vs 절대적 (absolute) is a key conceptual pair. 상대적 빈곤 (relative poverty) is a social science term."},

    {type:"teach", trg:"상대편", src:"the other side, the opposing party", pos:"noun", gender:null,
     note:"상대 (counterpart) + 편 (side).\nThe opponent or opposite side in a dispute or competition.",
     example:"A: 상대편의 입장도 들어 봐야 해.\nB: 맞아, 한쪽만 들으면 안 돼.",
     exampleSrc:"A: You should also listen to the other side's position.\nB: Right, you should not just hear one side.",
     funFact:"In Korean debates, 상대편 refers to the opposing team. In sports, it means the opposing side."},

    {type:"teach", trg:"상류", src:"upper class, upstream", pos:"noun", gender:null,
     note:"Sino-Korean. 上 (upper) + 流 (flow).\nThe top tier of society or the upper part of a river.",
     example:"A: 상류층의 생활이 궁금해?\nB: 아니, 그냥 내 삶에 집중할래.",
     exampleSrc:"A: Are you curious about upper-class life?\nB: No, I just want to focus on my own life.",
     funFact:"상류, 중류, 하류 (upper, middle, lower) apply to both rivers and social classes in Korean."},

    {type:"teach", trg:"상반기", src:"first half of the year", pos:"noun", gender:null,
     note:"Sino-Korean. 上半期 (upper half period).\nJanuary through June.",
     example:"A: 상반기 실적이 좋았어.\nB: 하반기에도 계속 잘하자.",
     exampleSrc:"A: First-half performance was good.\nB: Let's keep it up in the second half.",
     funFact:"Korean business runs on 상반기/하반기 (first/second half). Reports and budgets follow this cycle."},

    {type:"teach", trg:"상상력", src:"imagination", pos:"noun", gender:null,
     note:"상상 (imagination) + 력 (power).\nThe ability to create mental images or ideas.",
     example:"A: 아이들은 상상력이 풍부해.\nB: 어른들도 상상력을 키워야 해.",
     exampleSrc:"A: Children have rich imagination.\nB: Adults should also develop their imagination.",
     funFact:"상상력 is considered crucial in Korean education reform. 창의력 (creativity) and 상상력 are often paired."},

    {type:"teach", trg:"상식", src:"common sense, general knowledge", pos:"noun", gender:null,
     note:"Sino-Korean. 常 (usual) + 識 (knowledge).\nKnowledge that everyone is expected to have.",
     example:"A: 그건 상식이야.\nB: 미안, 나는 몰랐어.",
     exampleSrc:"A: That is common sense.\nB: Sorry, I did not know.",
     funFact:"상식 퀴즈 (general knowledge quiz) is a staple of Korean variety shows. Not knowing is considered embarrassing."},

    {type:"fb",
     s:"그것은 누구나 알아야 할 기본 {1}이다.",
     a:["상식"],
     opts:["상식","상상력","상징","상황"],
     hint:"Which word means common sense or general knowledge that everyone is expected to have?",
     sSrc:"That is basic {1} that everyone should know."},

    {type:"teach", trg:"상업", src:"commerce, business", pos:"noun", gender:null,
     note:"Sino-Korean. 商 (commerce) + 業 (work).\nCommercial trading and business activity.",
     example:"A: 이 지역은 상업이 발달했어.\nB: 가게와 식당이 많아서 그렇지.",
     exampleSrc:"A: Commerce is well-developed in this area.\nB: That is because there are many shops and restaurants.",
     funFact:"상업 지구 (commercial district) is a zoning term. Myeongdong is Seoul's most famous 상업 지구."},

    {type:"teach", trg:"상인", src:"merchant, trader", pos:"noun", gender:null,
     note:"Sino-Korean. 商 (commerce) + 人 (person).\nA person who buys and sells goods.",
     example:"A: 시장 상인들이 친절해.\nB: 단골이 되면 더 잘 해 줘.",
     exampleSrc:"A: The market merchants are kind.\nB: They treat you even better if you become a regular.",
     funFact:"Korean traditional markets (전통시장) have 상인 who call out to customers, creating a lively atmosphere."},

    {type:"teach", trg:"상자", src:"box, case", pos:"noun", gender:null,
     note:"Sino-Korean. 箱 (box) + 子 (thing).\nA container with flat sides.",
     example:"A: 이 상자에 뭐가 들어 있어?\nB: 이사할 때 쓸 물건들이야.",
     exampleSrc:"A: What is inside this box?\nB: Things I will use when moving.",
     funFact:"택배 상자 (delivery box) is a daily sight in Korea. The country has one of the world's fastest delivery systems."},

    {type:"teach", trg:"상점", src:"shop, store", pos:"noun", gender:null,
     note:"Sino-Korean. 商 (commerce) + 店 (shop).\nA place that sells goods.",
     example:"A: 근처에 편의 상점이 있어?\nB: 바로 앞에 편의점이 있어.",
     exampleSrc:"A: Is there a convenience store nearby?\nB: There is one right in front.",
     funFact:"상점 is the general formal word. 가게 (native Korean) is the casual equivalent. 편의점 is specifically a convenience store."},

    {type:"teach", trg:"상징적", src:"symbolic", pos:"noun", gender:null,
     note:"상징 (symbol) + 적.\nHaving symbolic meaning or significance.",
     example:"A: 이 건물은 상징적인 의미가 있어.\nB: 어떤 의미인데?",
     exampleSrc:"A: This building has symbolic meaning.\nB: What kind of meaning?",
     funFact:"광화문 (Gwanghwamun Gate) is considered 상징적 of Korean democracy because of the many protests held there."},

    {type:"teach", trg:"상징하다", src:"to symbolize, to represent", pos:"verb", gender:null,
     note:"상징 + 하다.\nTo serve as a symbol of something.",
     example:"A: 비둘기는 평화를 상징해.\nB: 올리브 가지도 마찬가지지.",
     exampleSrc:"A: Doves symbolize peace.\nB: Olive branches do as well.",
     funFact:"무궁화 (hibiscus) 상징하다 Korea. It appears on passports, government seals, and national emblems."},

    {type:"mc",
     q:"비둘기가 무엇을 상징하는가?",
     opts:["평화","전쟁","부","지식"],
     ans:"평화",
     hint:"What universal concept does the dove represent worldwide?"},

    {type:"teach", trg:"상추", src:"lettuce", pos:"noun", gender:null,
     note:"Native Korean word.\nLeafy green vegetable used in wraps.",
     example:"A: 고기 먹을 때 상추가 필수야.\nB: 쌈 싸 먹으면 맛있지.",
     exampleSrc:"A: Lettuce is essential when eating meat.\nB: It is delicious when you wrap it up.",
     funFact:"Korean BBQ is always served with 상추 for wrapping. 쌈 (wrap) culture defines Korean dining."},

    {type:"teach", trg:"상쾌하다", src:"to be refreshing, to be invigorating", pos:"adj", gender:null,
     note:"Sino-Korean. 爽 (refreshing) + 快 (pleasant).\nA feeling of pleasant freshness.",
     example:"A: 아침 공기가 상쾌하다.\nB: 이른 아침에 산책하니까 기분이 좋아.",
     exampleSrc:"A: The morning air is refreshing.\nB: Taking a walk in the early morning feels great.",
     funFact:"상쾌한 아침 (refreshing morning) is a common greeting phrase in Korean morning shows and advertisements."},

    {type:"teach", trg:"상태", src:"state, condition, status", pos:"noun", gender:null,
     note:"Sino-Korean. 狀 (form) + 態 (manner).\nThe current condition of something.",
     example:"A: 환자의 상태가 어때요?\nB: 안정적이에요, 걱정하지 마세요.",
     exampleSrc:"A: How is the patient's condition?\nB: It is stable, do not worry.",
     funFact:"건강 상태 (health condition), 정신 상태 (mental state), 경제 상태 (economic condition) are all common collocations."},

    {type:"teach", trg:"상표", src:"trademark, brand label", pos:"noun", gender:null,
     note:"Sino-Korean. 商 (commerce) + 標 (mark).\nA registered brand symbol or name.",
     example:"A: 이 상표는 유명해?\nB: 응, 전 세계적으로 알려진 상표야.",
     exampleSrc:"A: Is this trademark well-known?\nB: Yes, it is a globally recognized trademark.",
     funFact:"상표 등록 (trademark registration) is legally important in Korea. 등록 상표 has the (R) symbol."},

    {type:"teach", trg:"상황", src:"situation, circumstances", pos:"noun", gender:null,
     note:"Sino-Korean. 狀 (form) + 況 (condition).\nThe overall state of affairs at a given time.",
     example:"A: 지금 상황이 어때?\nB: 좀 복잡해, 나중에 설명할게.",
     exampleSrc:"A: How is the situation now?\nB: It is a bit complicated, I will explain later.",
     funFact:"상황 is one of the most versatile Korean nouns. It appears in countless compounds: 비상 상황, 경제 상황, 현재 상황."},

    {type:"teach", trg:"새기다", src:"to engrave, to carve, to inscribe", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo cut or mark into a surface.",
     example:"A: 반지에 이름을 새겨 줄 수 있어요?\nB: 네, 어떤 글씨체로 해 드릴까요?",
     exampleSrc:"A: Can you engrave a name on the ring?\nB: Yes, which font would you like?",
     funFact:"마음에 새기다 (to engrave in the heart) means to remember something deeply and permanently."},

    {type:"teach", trg:"새다", src:"to leak, to dawn (of day)", pos:"verb", gender:null,
     note:"Native Korean verb with two meanings.\nWater/air leaking, or day breaking.",
     example:"A: 지붕에서 물이 새고 있어.\nB: 빨리 수리해야겠다.",
     exampleSrc:"A: Water is leaking from the roof.\nB: We need to repair it quickly.",
     funFact:"밤을 새다 (to stay up all night, literally 'the night leaks away') is a common expression for pulling an all-nighter."},

    {type:"teach", trg:"새로이", src:"newly, afresh", pos:"adv", gender:null,
     note:"새롭다 (new) + 이 (adverb suffix).\nIn a new way or manner.",
     example:"A: 새로이 시작하는 마음으로 해 보자.\nB: 좋아, 과거는 잊고 다시 시작하자.",
     exampleSrc:"A: Let's try with a fresh start mindset.\nB: Good, let's forget the past and start again.",
     funFact:"새로이 is more literary than 새로 (newly). It carries a sense of deliberate renewal or fresh beginning."},

    {type:"fb",
     s:"새해에는 {1} 마음으로 모든 일에 임하겠습니다.",
     a:["새로이"],
     opts:["새로이","상당히","상관없이","상쾌하게"],
     hint:"Which adverb means 'newly' or 'afresh,' expressing a fresh start for the new year?",
     sSrc:"In the new year, I will approach everything with a {1} renewed heart."},

    {type:"match", pairs:[
      {trg:"상식", src:"common sense"},
      {trg:"상황", src:"situation"},
      {trg:"상태", src:"condition"},
      {trg:"상상력", src:"imagination"}
    ]}
  ]
};
export default LESSON_11;
