// Korean B2. Batch 2, Lesson 1: Commemorations and Records
// Words: 기념, 기념일, 기념품, 기념하다, 기록, 기록되다, 기법, 기본적, 기막히다, 기성, 기성세대, 기술자, 기술하다, 기억나다, 기억되다, 기호, 기혼, 기획, 기초적, 기초하다

const LESSON_1 = {
  id:"kov2_b2b2_l1", title:"기념과 기록", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"기념과 기록",
     desc:"Explore words for commemorations, records, and foundational concepts. These Sino-Korean compounds are essential for formal writing and journalism.",
     goals:["Master 20 words related to commemoration and documentation","Understand Sino-Korean compound patterns with 기 (gi)","Use formal register vocabulary in context"]},

    {type:"teach", trg:"기념", src:"commemoration, anniversary", pos:"noun", gender:null,
     note:"Sino-Korean. 記 (record) + 念 (thought).\nA thought worth recording.",
     example:"A: 이번 행사는 어떤 기념으로 열리나요?\nB: 학교 설립 50주년 기념입니다.",
     exampleSrc:"A: What commemoration is this event for?\nB: It is the 50th anniversary of the school's founding.",
     funFact:"From Hanja 記念. Korea has over 50 national commemoration days, many tied to independence history."},

    {type:"teach", trg:"기념일", src:"anniversary, memorial day", pos:"noun", gender:null,
     note:"기념 (commemoration) + 일 (day).\nA day set aside for remembering.",
     example:"A: 내일이 무슨 기념일이에요?\nB: 우리 결혼 기념일이에요.",
     exampleSrc:"A: What anniversary is tomorrow?\nB: It is our wedding anniversary.",
     funFact:"Koreans celebrate the 100th day of a relationship (백일) as a major milestone, not just yearly anniversaries."},

    {type:"teach", trg:"기념품", src:"souvenir, memento", pos:"noun", gender:null,
     note:"기념 (commemoration) + 품 (goods).\nA physical item that preserves a memory.",
     example:"A: 여행에서 기념품 샀어?\nB: 응, 작은 도자기를 하나 샀어.",
     exampleSrc:"A: Did you buy a souvenir from the trip?\nB: Yes, I bought a small piece of pottery.",
     funFact:"The most popular Korean souvenir is hanbok-dressed dolls, followed by traditional fans and tea sets."},

    {type:"teach", trg:"기념하다", src:"to commemorate", pos:"verb", gender:null,
     note:"기념 + 하다. To observe or celebrate a memory.\nUsed for both solemn and festive occasions.",
     example:"A: 이 행사는 뭘 기념하나요?\nB: 독립운동을 기념하는 행사입니다.",
     exampleSrc:"A: What does this event commemorate?\nB: It is an event commemorating the independence movement.",
     funFact:"March 1st (삼일절) commemorates the 1919 independence movement against Japanese colonial rule."},

    {type:"mc",
     q:"다음 중 '기념품'의 뜻으로 맞는 것은?",
     opts:["여행이나 행사에서 사는 물건","매일 쓰는 생활용품","음식을 보관하는 그릇","학교에서 주는 상장"],
     ans:"여행이나 행사에서 사는 물건",
     hint:"Think of an item you bring back from a trip to remember the experience."},

    {type:"teach", trg:"기록", src:"record, documentation", pos:"noun", gender:null,
     note:"Sino-Korean. 記 (record) + 錄 (register).\nWritten evidence of events or achievements.",
     example:"A: 이 선수의 기록은 어떻게 돼요?\nB: 세계 기록을 세 번 갱신했어요.",
     exampleSrc:"A: What are this athlete's records like?\nB: They have broken the world record three times.",
     funFact:"Korea's Joseon Dynasty kept some of history's most detailed daily records, the 조선왕조실록."},

    {type:"teach", trg:"기록되다", src:"to be recorded, to be documented", pos:"verb", gender:null,
     note:"기록 + 되다 (passive).\nSomething becomes part of the official record.",
     example:"A: 그 사건이 역사에 기록되었나요?\nB: 네, 중요한 역사적 사건으로 기록되었습니다.",
     exampleSrc:"A: Was that event recorded in history?\nB: Yes, it was documented as an important historical event.",
     funFact:"The verb ending -되다 creates passive forms from Sino-Korean nouns, a very productive pattern."},

    {type:"teach", trg:"기법", src:"technique, method", pos:"noun", gender:null,
     note:"Sino-Korean. 技 (skill) + 法 (method).\nA specialized way of doing something.",
     example:"A: 이 작가의 글쓰기 기법이 독특해요.\nB: 맞아요, 아주 실험적이에요.",
     exampleSrc:"A: This writer's writing technique is unique.\nB: That's right, it is very experimental.",
     funFact:"Traditional Korean painting uses the 수묵 기법 (ink wash technique), prizing spontaneity over perfection."},

    {type:"teach", trg:"기본적", src:"basic, fundamental", pos:"noun", gender:null,
     note:"기본 (foundation) + 적 (-like suffix).\nUsed as an adjective meaning 'of a basic nature.'",
     example:"A: 이건 기본적인 규칙이에요?\nB: 네, 모든 사람이 지켜야 하는 규칙입니다.",
     exampleSrc:"A: Is this a basic rule?\nB: Yes, it is a rule everyone must follow.",
     funFact:"The suffix -적 turns nouns into adjectives, borrowed from Chinese 的. It appears in hundreds of Korean words."},

    {type:"fb",
     s:"이 기술은 전통적인 {1}에 기초하고 있다.",
     a:["기법"],
     opts:["기법","기록","기념","기호"],
     hint:"A specialized method or way of doing something skillfully.",
     sSrc:"This technology is based on a traditional {1}."},

    {type:"teach", trg:"기막히다", src:"to be astounding, breathtaking", pos:"adj", gender:null,
     note:"기 (energy/breath) + 막히다 (to be blocked).\nSo amazing it takes your breath away.",
     example:"A: 경치가 어때?\nB: 기막히게 아름다워!",
     exampleSrc:"A: How is the scenery?\nB: It is breathtakingly beautiful!",
     funFact:"Literally 'one's gi (life force) is blocked.' Can mean amazingly good OR shockingly bad depending on tone."},

    {type:"teach", trg:"기성", src:"established, existing", pos:"noun", gender:null,
     note:"Sino-Korean. 既 (already) + 成 (completed).\nSomething already formed or in place.",
     example:"A: 기성 제품을 쓸까요?\nB: 아니요, 맞춤 제작을 합시다.",
     exampleSrc:"A: Shall we use an off-the-shelf product?\nB: No, let us have it custom-made.",
     funFact:"기성복 (ready-made clothes) vs 맞춤복 (tailored clothes) is a common contrast in Korean shopping."},

    {type:"teach", trg:"기성세대", src:"the older generation, establishment", pos:"noun", gender:null,
     note:"기성 (established) + 세대 (generation).\nThe generation already in power.",
     example:"A: 기성세대와 젊은 세대의 차이가 크죠?\nB: 네, 특히 가치관에서 많이 달라요.",
     exampleSrc:"A: The gap between the older and younger generations is large, right?\nB: Yes, especially in values.",
     funFact:"Korean generational discourse often contrasts 기성세대 with MZ세대 (Millennials and Gen Z)."},

    {type:"mc",
     q:"'기막히다'는 어떤 뜻인가요?",
     opts:["조용하고 평화롭다","놀랍고 대단하다","슬프고 외롭다","무겁고 답답하다"],
     ans:"놀랍고 대단하다",
     hint:"When something is so amazing that it literally blocks your breath or life force."},

    {type:"teach", trg:"기술자", src:"technician, skilled worker", pos:"noun", gender:null,
     note:"기술 (technology/skill) + 자 (person).\nA person with specialized technical skills.",
     example:"A: 이 기계는 누가 고칠 수 있어요?\nB: 전문 기술자를 불러야 해요.",
     exampleSrc:"A: Who can fix this machine?\nB: We need to call a specialized technician.",
     funFact:"The suffix -자 (者) marks a person by their role. Compare 과학자 (scientist), 기자 (journalist)."},

    {type:"teach", trg:"기술하다", src:"to describe, to write about", pos:"verb", gender:null,
     note:"記述 (written description) + 하다.\nTo describe in writing, more formal than 설명하다.",
     example:"A: 보고서에 그 상황을 기술했나요?\nB: 네, 자세히 기술했습니다.",
     exampleSrc:"A: Did you describe the situation in the report?\nB: Yes, I described it in detail.",
     funFact:"기술하다 is preferred in academic and legal writing. 설명하다 is more common in everyday speech."},

    {type:"teach", trg:"기억나다", src:"to come to mind, to recall", pos:"verb", gender:null,
     note:"기억 (memory) + 나다 (to come out).\nA memory surfaces on its own.",
     example:"A: 그 사람 이름이 기억나?\nB: 아, 갑자기 기억났어! 김 선생님이야.",
     exampleSrc:"A: Do you remember that person's name?\nB: Oh, it just came to me! It is Teacher Kim.",
     funFact:"기억나다 is involuntary recall (it comes to you). 기억하다 is active remembering (you try to recall)."},

    {type:"teach", trg:"기억되다", src:"to be remembered", pos:"verb", gender:null,
     note:"기억 (memory) + 되다 (passive).\nSomething remains in collective or personal memory.",
     example:"A: 그분은 어떤 사람으로 기억되나요?\nB: 위대한 지도자로 기억됩니다.",
     exampleSrc:"A: How is that person remembered?\nB: They are remembered as a great leader.",
     funFact:"Korean uses -되다 passives extensively in formal/written style, much more than casual speech."},

    {type:"fb",
     s:"어린 시절의 추억이 갑자기 {1}.",
     a:["기억났다"],
     opts:["기억났다","기억되다","기록되다","기술하다"],
     hint:"A memory surfacing involuntarily, like it just popped into your head.",
     sSrc:"Childhood memories suddenly {1}."},

    {type:"teach", trg:"기호", src:"preference, taste; symbol", pos:"noun", gender:null,
     note:"Sino-Korean. 嗜好 (taste) or 記號 (symbol).\nTwo Hanja origins with different meanings.",
     example:"A: 커피 기호가 어떻게 되세요?\nB: 저는 아메리카노를 좋아해요.",
     exampleSrc:"A: What is your coffee preference?\nB: I like Americano.",
     funFact:"The same word 기호 can mean 'preference' (嗜好) or 'symbol/sign' (記號) depending on context."},

    {type:"teach", trg:"기혼", src:"married (status)", pos:"noun", gender:null,
     note:"Sino-Korean. 既 (already) + 婚 (marriage).\nAlready married. Opposite: 미혼 (unmarried).",
     example:"A: 기혼이세요, 미혼이세요?\nB: 기혼입니다. 아이도 둘 있어요.",
     exampleSrc:"A: Are you married or single?\nB: I am married. I also have two children.",
     funFact:"Korean forms use 기혼/미혼 checkboxes. 기 (旣, already) vs 미 (未, not yet) is a common prefix pair."},

    {type:"teach", trg:"기획", src:"planning, project planning", pos:"noun", gender:null,
     note:"Sino-Korean. 企 (plan) + 劃 (draw/scheme).\nStrategic planning for events or projects.",
     example:"A: 이번 축제 기획은 누가 맡았어요?\nB: 마케팅 팀에서 기획했어요.",
     exampleSrc:"A: Who was in charge of planning this festival?\nB: The marketing team planned it.",
     funFact:"기획자 (planner/producer) is a major role in Korean entertainment. K-drama success starts with 기획."},

    {type:"teach", trg:"기초적", src:"basic, elementary", pos:"noun", gender:null,
     note:"기초 (foundation) + 적.\nRelating to the very foundation of something.",
     example:"A: 이건 기초적인 문법이에요.\nB: 그래도 틀리는 사람이 많아요.",
     exampleSrc:"A: This is basic grammar.\nB: Still, many people get it wrong.",
     funFact:"기초적 and 기본적 both mean 'basic' but 기초적 emphasizes foundation level while 기본적 means standard/default."},

    {type:"teach", trg:"기초하다", src:"to be based on, to be founded on", pos:"verb", gender:null,
     note:"기초 (foundation) + 하다.\nSomething rests on a foundation. Formal register.",
     example:"A: 이 이론은 무엇에 기초하고 있나요?\nB: 수백 건의 실험 결과에 기초하고 있습니다.",
     exampleSrc:"A: What is this theory based on?\nB: It is based on hundreds of experimental results.",
     funFact:"Often used in academic writing: ~에 기초하다 (to be based on). Compare ~에 근거하다 (to be grounded in)."},

    {type:"match", pairs:[
      {trg:"기념품", src:"souvenir"},
      {trg:"기록", src:"record"},
      {trg:"기법", src:"technique"},
      {trg:"기획", src:"planning"},
      {trg:"기혼", src:"married"}
    ]},

    {type:"mc",
     q:"'이 연구는 실험 데이터에 ___하고 있다'에서 빈칸에 알맞은 것은?",
     opts:["기록","기술","기초","기념"],
     ans:"기초",
     hint:"The research rests on a foundation of experimental data. Think of the word for 'foundation.'"},

    {type:"fb",
     s:"이번 프로젝트의 {1}은 마케팅 팀이 담당합니다.",
     a:["기획"],
     opts:["기획","기념","기록","기법"],
     hint:"Strategic planning and organization of a project from start to finish.",
     sSrc:"The {1} of this project is handled by the marketing team."}
  ]
};
export default LESSON_1;
