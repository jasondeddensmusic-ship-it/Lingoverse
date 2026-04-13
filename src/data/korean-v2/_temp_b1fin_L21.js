// Korean B1 Final Gap - Lesson 21: Objects, Types & Conditions
const LESSON_21 = {
  id:"kov2_b1fin_l21", title:"사물과 조건", icon:"🔧", xp:15, board:true,
  steps:[
    {type:"intro", title:"Objects, Types & Conditions",
     desc:"Learn vocabulary for categories, conditions, sequences, and miscellaneous objects and concepts. These words fill important gaps in your B1 Korean toolkit.",
     goals:["Learn 15 words about types, conditions, and sequences","Describe varieties, priorities, and conditions","Use determiners and classifiers accurately"]},

    {type:"teach", trg:"종류", src:"kind, type, variety", pos:"noun", gender:null,
     note:"Sino-Korean (種類). 종 (種) = species/seed, 류 (類) = type/class.",
     example:"A: 어떤 종류의 음식을 좋아해요?\nB: 모든 종류의 한식을 좋아해요.",
     exampleSrc:"A: What kind of food do you like?\nB: I like all kinds of Korean food.",
     funFact:"종류 is indispensable for shopping and ordering: 이런 종류 (this kind), 여러 종류 (various kinds). Korean menus list items by 종류."},

    {type:"teach", trg:"종", src:"species, kind; bell; servant (archaic)", pos:"noun", gender:null,
     note:"Sino-Korean. Multiple hanja: 種 (species), 鐘 (bell), 從 (servant).",
     example:"A: 이 동물은 어떤 종이에요?\nB: 멸종 위기 종이에요.",
     exampleSrc:"A: What species is this animal?\nB: It's an endangered species.",
     funFact:"종 as 'bell' appears in 종소리 (bell sound). Korea's famous Emille Bell (에밀레종) is a national treasure from the Silla dynasty."},

    {type:"teach", trg:"조건", src:"condition, requirement, terms", pos:"noun", gender:null,
     note:"Sino-Korean (條件). 조 (條) = article/clause, 건 (件) = matter.",
     example:"A: 어떤 조건이 있어요?\nB: 경력 3년 이상이 조건이에요.",
     exampleSrc:"A: What conditions are there?\nB: The condition is 3 or more years of experience.",
     funFact:"조건 is crucial in contracts, jobs, and relationships: 근무 조건 (working conditions), 계약 조건 (contract terms). Always read the 조건 carefully."},

    {type:"teach", trg:"조각", src:"piece, fragment, sculpture", pos:"noun", gender:null,
     note:"Sino-Korean (彫刻) for sculpture. Native Korean for 'piece.'",
     example:"A: 케이크 한 조각 드릴까요?\nB: 네, 작은 조각으로 주세요.",
     exampleSrc:"A: Shall I give you a piece of cake?\nB: Yes, a small piece please.",
     funFact:"조각 means both 'piece/fragment' and 'sculpture.' 조각가 (sculptor) creates 조각 작품 (sculptural works). Context makes the meaning clear."},

    {type:"teach", trg:"차례", src:"turn, order, sequence", pos:"noun", gender:null,
     note:"Sino-Korean (次例). 차 (次) = next/order, 례 (例) = example.",
     example:"A: 다음은 제 차례예요?\nB: 네, 이번에 당신 차례예요.",
     exampleSrc:"A: Is it my turn next?\nB: Yes, it's your turn this time.",
     funFact:"차례 also means ancestral rites performed during Seollal and Chuseok. 차례를 지내다 (perform ancestral rites) is a family tradition."},

    {type:"mc",
     q:"줄을 서서 기다릴 때 '내 ___가 됐다'라고 해요.",
     opts:["조건","종류","차례","조각"],
     ans:"차례",
     hint:"This word means your turn or position in a sequence."},

    {type:"teach", trg:"석유", src:"petroleum, oil", pos:"noun", gender:null,
     note:"Sino-Korean (石油). 석 (石) = stone, 유 (油) = oil.",
     example:"A: 석유 가격이 올랐어요?\nB: 네, 국제 석유 가격이 많이 올랐어요.",
     exampleSrc:"A: Has the oil price gone up?\nB: Yes, international petroleum prices have risen a lot.",
     funFact:"Korea imports nearly all its 석유. Oil prices directly affect everything from gas to heating. 석유 위기 (oil crisis) is a feared economic scenario."},

    {type:"teach", trg:"열차", src:"train", pos:"noun", gender:null,
     note:"Sino-Korean (列車). 열 (列) = row/line, 차 (車) = vehicle.",
     example:"A: 열차가 몇 시에 출발해요?\nB: 10시 열차를 타면 돼요.",
     exampleSrc:"A: What time does the train depart?\nB: You can take the 10 o'clock train.",
     funFact:"열차 is more formal than 기차 (train). KTX (Korea Train Express) is always called a 열차 in announcements. 열차 번호 = train number."},

    {type:"teach", trg:"자동", src:"automatic", pos:"noun", gender:null,
     note:"Sino-Korean (自動). 자 (自) = self, 동 (動) = move.",
     example:"A: 이 문은 자동이에요?\nB: 네, 자동문이라서 가까이 가면 열려요.",
     exampleSrc:"A: Is this door automatic?\nB: Yes, it's an automatic door so it opens when you approach.",
     funFact:"자동 is everywhere in modern Korea: 자동차 (automobile), 자동판매기 (vending machine), 자동 번역 (auto-translate). Korea embraces automation."},

    {type:"teach", trg:"중요성", src:"importance, significance", pos:"noun", gender:null,
     note:"Sino-Korean (重要性). 중요 (important) + 성 (性, nature/quality).",
     example:"A: 교육의 중요성을 알고 있어요?\nB: 네, 교육은 매우 중요해요.",
     exampleSrc:"A: Do you understand the importance of education?\nB: Yes, education is very important.",
     funFact:"The suffix 성 (性) creates abstract nouns: 가능성 (possibility), 중요성 (importance), 필요성 (necessity). It is highly productive in formal Korean."},

    {type:"teach", trg:"집중", src:"concentration, focus", pos:"noun", gender:null,
     note:"Sino-Korean (集中). 집 (集) = gather, 중 (中) = center.",
     example:"A: 집중이 안 돼요.\nB: 잠깐 쉬고 다시 집중해 봐요.",
     exampleSrc:"A: I can't concentrate.\nB: Take a short break and try to focus again.",
     funFact:"집중력 (concentration power) is a skill Korean students constantly work on. Study cafes (공부 카페) are designed to maximize 집중."},

    {type:"fb",
     s:"공부할 때 {1}이 잘 안 돼요.",
     a:["집중"],
     opts:["집중","조건","중요성","종류"],
     hint:"This word means focusing your attention, gathering your mental energy on one task.",
     sSrc:"When studying, I can't {1} well."},

    {type:"teach", trg:"주인공", src:"main character, protagonist", pos:"noun", gender:null,
     note:"Sino-Korean (主人公). 주인 (主人) = owner/master, 공 (公) = person.",
     example:"A: 이 드라마의 주인공이 누구예요?\nB: 유명한 배우가 주인공이에요.",
     exampleSrc:"A: Who is the main character of this drama?\nB: A famous actor is the protagonist.",
     funFact:"Korean dramas live or die by their 주인공. Casting the right 주인공 can make or break a show. Fans discuss 주인공 casting endlessly online."},

    {type:"teach", trg:"짓", src:"act, deed, behavior (often negative)", pos:"noun", gender:null,
     note:"Native Korean noun. Usually implies bad or notable behavior.",
     example:"A: 그런 짓은 하지 마세요.\nB: 알겠어요, 다시는 안 할게요.",
     exampleSrc:"A: Don't do that kind of thing.\nB: I understand, I won't do it again.",
     funFact:"짓 carries a negative connotation: 나쁜 짓 (bad deed), 못된 짓 (wicked act). It is rarely used for positive actions. 짓을 하다 = to do a deed."},

    {type:"teach", trg:"큰일", src:"big problem, serious trouble", pos:"noun", gender:null,
     note:"Compound: 큰 (big) + 일 (matter/event). An alarming situation.",
     example:"A: 큰일 났어요!\nB: 왜요? 무슨 일이에요?",
     exampleSrc:"A: There's big trouble!\nB: Why? What happened?",
     funFact:"큰일 났다 (big trouble has happened) is a common exclamation of alarm. It can range from minor panic (forgetting homework) to actual emergencies."},

    {type:"match", pairs:[
      {trg:"종류", src:"kind/type"},
      {trg:"조건", src:"condition"},
      {trg:"차례", src:"turn/order"},
      {trg:"집중", src:"concentration"},
      {trg:"주인공", src:"protagonist"}
    ]},

    {type:"mc",
     q:"'그런 ___은 하지 마세요!'에서 부정적인 행동을 나타내는 단어는?",
     opts:["짓","일","것","차례"],
     ans:"짓",
     hint:"This native Korean noun implies a negative deed or undesirable behavior."}
  ]
};
export default LESSON_21;
