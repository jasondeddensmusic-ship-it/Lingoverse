// Korean B2. Batch 5, Lesson 17: Wishes, Consumption, and Ownership
// Words: 소망, 소매, 소문나다, 소박하다, 소비, 소비하다, 소설가, 소속, 소수, 소시지, 소아과, 소요되다, 소용, 소용없다, 소원, 소위, 소유, 소유자, 소유하다, 소음

const LESSON_17 = {
  id:"kov2_b2b5_l17", title:"소망과 소유", icon:"💫", xp:15, board:true,
  steps:[
    {type:"intro", title:"소망과 소유",
     desc:"Learn vocabulary about wishes, consumption, belonging, and ownership. This lesson covers essential words for expressing desires, economic concepts, and social roles.",
     goals:["Master 20 words about desires, consumption, and ownership","Understand Sino-Korean compounds with 所/消 (place/consume)","Express abstract concepts of belonging and ownership"]},

    {type:"teach", trg:"소망", src:"wish, hope, aspiration", pos:"noun", gender:null,
     note:"Sino-Korean. 所 (that which) + 望 (hope).\nA deep personal wish or aspiration.",
     example:"A: 새해 소망이 뭐야?\nB: 가족 모두 건강한 거.",
     exampleSrc:"A: What is your New Year wish?\nB: For my whole family to be healthy.",
     funFact:"소망 is more formal and deeper than 바람 (wish). It carries a sense of heartfelt longing."},

    {type:"teach", trg:"소매", src:"retail, sleeve", pos:"noun", gender:null,
     note:"Sino-Korean. 小 (small) + 賣 (sell) for retail.\nSelling in small quantities to consumers.",
     example:"A: 소매 가격이 얼마야?\nB: 도매보다 30% 비싸.",
     exampleSrc:"A: What is the retail price?\nB: It is 30% more expensive than wholesale.",
     funFact:"소매 (retail) vs 도매 (wholesale). 소매 also means 'sleeve': 긴 소매 (long sleeve), 짧은 소매 (short sleeve)."},

    {type:"teach", trg:"소문나다", src:"to become rumored, to be talked about", pos:"verb", gender:null,
     note:"소문 (rumor) + 나다 (come out).\nA rumor spreading among people.",
     example:"A: 그 맛집이 소문났더라.\nB: 줄이 엄청 길겠다.",
     exampleSrc:"A: That restaurant became well-known.\nB: The line must be very long.",
     funFact:"소문난 맛집 (a restaurant famous by word of mouth) is the highest praise in Korean food culture."},

    {type:"teach", trg:"소박하다", src:"to be simple, to be modest, to be humble", pos:"adj", gender:null,
     note:"Sino-Korean. 素 (plain) + 朴 (simple).\nPleasantly simple and unpretentious.",
     example:"A: 소박한 삶이 좋아.\nB: 나도, 화려한 것보다 편안한 게 좋아.",
     exampleSrc:"A: I like a simple life.\nB: Me too, I prefer comfort over extravagance.",
     funFact:"소박하다 is always positive in Korean. It implies genuine, unpretentious simplicity."},

    {type:"teach", trg:"소비", src:"consumption, spending", pos:"noun", gender:null,
     note:"Sino-Korean. 消 (use up) + 費 (cost).\nUsing up goods or money.",
     example:"A: 소비를 줄여야 해.\nB: 불필요한 지출부터 줄이자.",
     exampleSrc:"A: We need to reduce consumption.\nB: Let's start by cutting unnecessary spending.",
     funFact:"소비자 (consumer) and 소비 문화 (consumer culture) are central to Korean economic discussions."},

    {type:"teach", trg:"소비하다", src:"to consume, to spend", pos:"verb", gender:null,
     note:"소비 + 하다.\nActively using up resources or money.",
     example:"A: 에너지를 너무 많이 소비하고 있어.\nB: 절약하는 습관을 들여야 해.",
     exampleSrc:"A: We are consuming too much energy.\nB: We need to develop saving habits.",
     funFact:"시간을 소비하다 (to spend time) has a slightly negative nuance, implying waste. 보내다 is more neutral."},

    {type:"fb",
     s:"환경을 위해 에너지 {1}를 줄여야 합니다.",
     a:["소비"],
     opts:["소비","소득","소음","소유"],
     hint:"Which noun means consumption or spending, referring to the use of energy we should reduce?",
     sSrc:"For the environment, we must reduce energy {1}."},

    {type:"teach", trg:"소설가", src:"novelist", pos:"noun", gender:null,
     note:"소설 (novel) + 가 (expert/person).\nA person who writes novels.",
     example:"A: 유명한 소설가가 되고 싶어.\nB: 매일 글을 쓰는 습관이 중요해.",
     exampleSrc:"A: I want to become a famous novelist.\nB: The habit of writing every day is important.",
     funFact:"Korea has produced notable 소설가 like Han Kang, who won international literary prizes."},

    {type:"teach", trg:"소속", src:"affiliation, belonging", pos:"noun", gender:null,
     note:"Sino-Korean. 所 (place) + 屬 (belong).\nThe organization one belongs to.",
     example:"A: 어디에 소속되어 있어요?\nB: 마케팅 부서에 소속되어 있어요.",
     exampleSrc:"A: Which organization do you belong to?\nB: I belong to the marketing department.",
     funFact:"소속감 (sense of belonging) is extremely important in Korean group-oriented culture."},

    {type:"teach", trg:"소수", src:"minority, small number", pos:"noun", gender:null,
     note:"Sino-Korean. 少 (few) + 數 (number).\nA small portion of the total.",
     example:"A: 소수 의견도 존중해야 해.\nB: 동의해, 다수만 옳은 건 아니야.",
     exampleSrc:"A: Minority opinions should also be respected.\nB: I agree, the majority is not always right.",
     funFact:"소수 also means prime number in math (素數). 소수 민족 means ethnic minority."},

    {type:"teach", trg:"소시지", src:"sausage", pos:"noun", gender:null,
     note:"Loanword from English 'sausage.'\nProcessed meat in a casing.",
     example:"A: 아침에 소시지 먹을까?\nB: 좋아, 달걀이랑 같이 구워 줘.",
     exampleSrc:"A: Should we eat sausage for breakfast?\nB: Sure, grill it together with eggs.",
     funFact:"Korean-style 소시지 is often sweeter and milder than Western sausages. 비엔나 소시지 is a lunchbox staple."},

    {type:"teach", trg:"소아과", src:"pediatrics", pos:"noun", gender:null,
     note:"Sino-Korean. 小兒 (child) + 科 (department).\nMedical department for children.",
     example:"A: 아이가 아프면 소아과에 가야 해.\nB: 근처에 좋은 소아과 있어?",
     exampleSrc:"A: When a child is sick, you should go to pediatrics.\nB: Is there a good pediatric clinic nearby?",
     funFact:"Korea's declining birth rate has led to many 소아�� clinics closing, a sign of the demographic crisis."},

    {type:"teach", trg:"소요되다", src:"to be required (time/cost)", pos:"verb", gender:null,
     note:"Sino-Korean. 所要 (requirement) + 되다.\nTime or resources being needed.",
     example:"A: 서울에서 부산까지 몇 시간 소요돼?\nB: KTX로 약 2시간 30분 소��돼.",
     exampleSrc:"A: How many hours does it take from Seoul to Busan?\nB: It takes about 2 hours 30 minutes by KTX.",
     funFact:"소요 시간 (required time) and 소요 비용 (required cost) are formal phrases common in official guides."},

    {type:"teach", trg:"소용", src:"use, usefulness", pos:"noun", gender:null,
     note:"Sino-Korean. 所 (that which) + 用 (use).\nThe practical value or usefulness of something.",
     example:"A: 후회해도 소용없어.\nB: 맞아, 앞을 보자.",
     exampleSrc:"A: Regretting is no use.\nB: Right, let's look ahead.",
     funFact:"소용이 있다/없다 (to be useful/useless) is one of the most common patterns using this word."},

    {type:"teach", trg:"소용없다", src:"to be useless, to be pointless", pos:"adj", gender:null,
     note:"소용 + 없다.\nHaving no practical value or effect.",
     example:"A: 아무리 말해도 소용없어.\nB: 그래도 포기하지 마.",
     exampleSrc:"A: No matter how much I say, it is useless.\nB: Still, do not give up.",
     funFact:"소용없다 is blunt. It means efforts are completely futile. A dramatic word often used in emotional contexts."},

    {type:"mc",
     q:"노력해도 결과가 바뀌지 않을 때 적절한 표현은?",
     opts:["소용없다","소박하다","소극적이다","소중하다"],
     ans:"소용없다",
     hint:"Which expression means it is useless or pointless, indicating that effort will not change the outcome?"},

    {type:"teach", trg:"소원", src:"wish, desire (heartfelt)", pos:"noun", gender:null,
     note:"Sino-Korean. 所 (that which) + 願 (wish).\nA deep, personal wish.",
     example:"A: 소원이 뭐야?\nB: 세계 여행을 하는 게 소원이야.",
     exampleSrc:"A: What is your wish?\nB: My wish is to travel the world.",
     funFact:"소원을 빌다 (to make a wish) is said when seeing a shooting star or at temples. 별똥별에 소원을 빌어!"},

    {type:"teach", trg:"소위", src:"so-called, what is called", pos:"adv", gender:null,
     note:"Sino-Korean. 所 (that which) + 謂 (call).\nUsed to introduce a term or concept.",
     example:"A: 소위 '금수저'라는 말 알아?\nB: 부유한 집 출신을 말하는 거잖아.",
     exampleSrc:"A: Do you know the so-called 'gold spoon' expression?\nB: It means someone from a wealthy family.",
     funFact:"소위 is formal. It can be neutral or sarcastic depending on tone. 소위 전문가 (the so-called expert) is often sarcastic."},

    {type:"teach", trg:"소유", src:"ownership, possession", pos:"noun", gender:null,
     note:"Sino-Korean. 所 (place) + 有 (have).\nHaving legal possession of something.",
     example:"A: 이 건물의 소유는 누구한테 있어?\nB: 대기업이 소유하고 있어.",
     exampleSrc:"A: Who owns this building?\nB: A large corporation owns it.",
     funFact:"소유권 (ownership rights) and 소유욕 (desire to possess) extend this root into legal and psychological contexts."},

    {type:"teach", trg:"소유자", src:"owner, proprietor", pos:"noun", gender:null,
     note:"소유 + 자 (person).\nThe person who owns something.",
     example:"A: 이 차의 소유자가 누구야?\nB: 이 사무실의 김 과장이야.",
     exampleSrc:"A: Who is the owner of this car?\nB: It is Manager Kim from this office.",
     funFact:"소유자 is the legal term used on property documents and vehicle registrations."},

    {type:"teach", trg:"소유하다", src:"to own, to possess", pos:"verb", gender:null,
     note:"소유 + 하다.\nTo have legal ownership of something.",
     example:"A: 집을 소유하는 게 꿈이야.\nB: 요즘 집값이 너무 비싸지.",
     exampleSrc:"A: Owning a house is my dream.\nB: Housing prices are too expensive these days.",
     funFact:"부동산을 소유하다 (to own real estate) is a major life goal for many Koreans."},

    {type:"teach", trg:"소음", src:"noise, unwanted sound", pos:"noun", gender:null,
     note:"Sino-Korean. 騷 (disturb) + 音 (sound).\nUnpleasant or disruptive sound.",
     example:"A: 층간 소음 때문에 힘들어.\nB: 관리실에 이야기해 봤어?",
     exampleSrc:"A: I am struggling because of noise between floors.\nB: Have you talked to the management office?",
     funFact:"층간 소음 (inter-floor noise) is Korea's #1 neighbor dispute. Apartment living makes it a national issue."},

    {type:"fb",
     s:"아파트에서 {1} 문제로 이웃과 갈등이 생겼다.",
     a:["소음"],
     opts:["소음","소득","소비","소유"],
     hint:"Which word means noise, the most common cause of neighbor disputes in Korean apartments?",
     sSrc:"A conflict arose with neighbors over {1} issues in the apartment."},

    {type:"match", pairs:[
      {trg:"소비", src:"consumption"},
      {trg:"소유", src:"ownership"},
      {trg:"소원", src:"wish"},
      {trg:"소음", src:"noise"}
    ]}
  ]
};
export default LESSON_17;
