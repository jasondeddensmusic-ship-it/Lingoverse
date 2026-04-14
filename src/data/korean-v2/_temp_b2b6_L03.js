// Korean B2 — Batch 6, Lesson 3: Poetry, Time, and City Life
// Words: 시, 시각, 시금치, 시기, 시끄럽다, 시나리오, 시내버스, 시대적, 시댁, 시도, 시들다, 시디, 시디롬, 시멘트, 시부모, 시선, 시스템, 시아버지, 시야, 시어머니

const LESSON_3 = {
  id:"kov2_b2b6_l3", title:"시와 시대", icon:"📜", xp:15, board:true,
  steps:[
    {type:"intro", title:"시와 시대",
     desc:"Learn words starting with 시 covering poetry, time periods, city infrastructure, and family relationships. Many of these are Sino-Korean compounds with 時 (time) or 市 (city).",
     goals:["Master 20 words about time, city life, and in-law relationships","Distinguish different meanings of 시 (poem, time, city, in-law prefix)","Use period and attempt vocabulary in context"]},

    {type:"teach", trg:"시", src:"poem, poetry", pos:"noun", gender:null,
     note:"Sino-Korean. 詩 (poem).\nA literary work in verse form.",
     example:"A: 이 시 읽어 봤어?\nB: 응, 윤동주 시인의 시지?",
     exampleSrc:"A: Have you read this poem?\nB: Yes, it is by the poet Yun Dongju, right?",
     funFact:"Yun Dongju is Korea's most beloved poet. His works were written during the Japanese occupation and are still memorized by students."},

    {type:"teach", trg:"시각", src:"time, point in time; visual sense", pos:"noun", gender:null,
     note:"Sino-Korean. 時 (time) + 刻 (moment).\nAlso means 'perspective' with 視 (see) + 覺 (perceive).",
     example:"A: 정확한 시각이 어떻게 되나요?\nB: 지금 오후 세 시 반입니다.",
     exampleSrc:"A: What is the exact time?\nB: It is currently 3:30 PM.",
     funFact:"시각 has two meanings depending on hanja: 時刻 (point in time) and 視覺 (visual perception). Context makes it clear."},

    {type:"teach", trg:"시금치", src:"spinach", pos:"noun", gender:null,
     note:"Native Korean word.\nA common leafy green in Korean cuisine.",
     example:"A: 시금치 나물 만들어 줄까?\nB: 좋아! 참기름 넣어 줘.",
     exampleSrc:"A: Shall I make spinach side dish?\nB: Great! Put sesame oil in it.",
     funFact:"시금치 나물 (seasoned spinach) is one of the essential banchan (side dishes) on every Korean table."},

    {type:"teach", trg:"시기", src:"period, era; jealousy", pos:"noun", gender:null,
     note:"Sino-Korean. 時 (time) + 期 (period).\nAlso means jealousy with 猜 + 忌.",
     example:"A: 지금은 어려운 시기야.\nB: 맞아, 다 같이 힘내자.",
     exampleSrc:"A: This is a difficult period.\nB: Right, let's all stay strong together.",
     funFact:"시기 as 'jealousy' and 시기 as 'period' are written with different hanja but pronounced identically."},

    {type:"teach", trg:"시끄럽다", src:"to be noisy, to be loud", pos:"adj", gender:null,
     note:"Native Korean adjective.\nDescribes an annoyingly loud environment.",
     example:"A: 옆집이 너무 시끄러워.\nB: 밤이니까 조용히 해 달라고 해.",
     exampleSrc:"A: The neighbors are too noisy.\nB: It is night, so ask them to be quiet.",
     funFact:"시끄럽다 also means 'controversial' or 'causing a fuss' in figurative use: 그 문제로 시끄럽다 (it is causing a stir)."},

    {type:"mc",
     q:"'요즘 그 문제로 시끄럽다'에서 시끄럽다의 뜻은?",
     opts:["논란이 되고 있다","소리가 크다","화가 났다","걱정이 된다"],
     ans:"논란이 되고 있다",
     hint:"In this context, the word does not mean physically loud. Think of something causing public debate."},

    {type:"teach", trg:"시나리오", src:"scenario, screenplay", pos:"noun", gender:null,
     note:"Loanword from Italian 'scenario'.\nA film script or a possible future situation.",
     example:"A: 이 영화 시나리오가 정말 좋다.\nB: 맞아, 대사가 자연스러워.",
     exampleSrc:"A: The screenplay of this movie is really good.\nB: Right, the dialogue is natural.",
     funFact:"Korea's film industry is world-class. Bong Joonho won the Oscar for Best Original Screenplay with Parasite."},

    {type:"teach", trg:"시내버스", src:"city bus, local bus", pos:"noun", gender:null,
     note:"시내 (city center) + 버스 (bus).\nA bus operating within city limits.",
     example:"A: 시내버스로 몇 정거장이야?\nB: 다섯 정거장이면 돼.",
     exampleSrc:"A: How many stops is it by city bus?\nB: Five stops will do.",
     funFact:"Korean city buses are color-coded by route type: blue for trunk, green for branch, red for express."},

    {type:"teach", trg:"시대적", src:"of the era, epochal", pos:"noun", gender:null,
     note:"Sino-Korean. 時代 (era) + 的 (quality).\nRelating to a particular historical period.",
     example:"A: 이건 시대적 배경을 알아야 이해돼.\nB: 조선 시대 이야기지?",
     exampleSrc:"A: You need to know the historical background to understand this.\nB: It is a Joseon Dynasty story, right?",
     funFact:"시대적 요구 (demands of the times) is a phrase frequently used in Korean political speeches."},

    {type:"teach", trg:"시댁", src:"husband's family home", pos:"noun", gender:null,
     note:"시 (in-law, from husband's side) + 댁 (house).\nThe home of the husband's parents.",
     example:"A: 명절에 시댁에 가야 해.\nB: 올해는 며칠 있을 거야?",
     exampleSrc:"A: I have to go to my in-laws' house for the holiday.\nB: How many days will you stay this year?",
     funFact:"시댁 visits during holidays are a common source of family stress in Korea, often discussed in media."},

    {type:"teach", trg:"시도", src:"attempt, try", pos:"noun", gender:null,
     note:"Sino-Korean. 試 (try) + 圖 (plan).\nMaking an effort to do something.",
     example:"A: 첫 번째 시도에서 성공했어?\nB: 아니, 세 번째 시도에서 됐어.",
     exampleSrc:"A: Did you succeed on the first attempt?\nB: No, it worked on the third attempt.",
     funFact:"시도하다 (to attempt) is commonly paired with 도전하다 (to challenge). Both express trying something new."},

    {type:"fb",
     s:"여러 번의 {1} 끝에 드디어 성공했다.",
     a:["시도"],
     opts:["시도","시기","시각","시선"],
     hint:"Multiple tries before finally succeeding. What word means 'attempt'?",
     sSrc:"After multiple {1}, we finally succeeded."},

    {type:"teach", trg:"시들다", src:"to wilt, to wither", pos:"verb", gender:null,
     note:"Native Korean verb.\nPlants losing freshness, or energy fading.",
     example:"A: 꽃이 벌써 시들었네.\nB: 물을 안 줘서 그래.",
     exampleSrc:"A: The flowers have already wilted.\nB: It is because you did not water them.",
     funFact:"시들다 is used figuratively for fading enthusiasm: 열정이 시들다 (passion withers)."},

    {type:"teach", trg:"시디", src:"CD (compact disc)", pos:"noun", gender:null,
     note:"Loanword from English 'CD'.\nA compact disc for music or data.",
     example:"A: 이 시디 아직 들을 수 있어?\nB: 응, 상태가 좋아.",
     exampleSrc:"A: Can you still play this CD?\nB: Yes, it is in good condition.",
     funFact:"Despite streaming, CD sales in Korea remain strong thanks to K-pop fans who buy albums for photo cards."},

    {type:"teach", trg:"시디롬", src:"CD-ROM", pos:"noun", gender:null,
     note:"Loanword from English 'CD-ROM'.\nA read-only compact disc for computers.",
     example:"A: 이 프로그램은 시디롬으로 설치해야 해.\nB: 요즘 시디롬 드라이브가 없는데.",
     exampleSrc:"A: This program needs to be installed from a CD-ROM.\nB: But these days computers do not have CD-ROM drives.",
     funFact:"시디롬 was essential in 1990s-2000s Korean computing. Many educational programs came on CD-ROM."},

    {type:"teach", trg:"시멘트", src:"cement", pos:"noun", gender:null,
     note:"Loanword from English 'cement'.\nConstruction material for binding.",
     example:"A: 시멘트가 다 마르면 튼튼해질 거야.\nB: 며칠 걸리나요?",
     exampleSrc:"A: When the cement dries completely, it will be strong.\nB: How many days will it take?",
     funFact:"Korea's rapid industrialization in the 1960s-70s was fueled by massive cement production for construction."},

    {type:"teach", trg:"시부모", src:"parents-in-law (husband's parents)", pos:"noun", gender:null,
     note:"시 (husband's family) + 부모 (parents).\nThe husband's mother and father together.",
     example:"A: 시부모님을 모시고 살아?\nB: 아니, 따로 살지만 자주 뵈러 가.",
     exampleSrc:"A: Do you live with your in-laws?\nB: No, we live separately but visit often.",
     funFact:"The 시 prefix marks husband's-side relatives: 시아버지, 시어머니, 시댁. Wife's side uses 처 or 장."},

    {type:"teach", trg:"시선", src:"gaze, line of sight", pos:"noun", gender:null,
     note:"Sino-Korean. 視 (see) + 線 (line).\nWhere someone's eyes are directed.",
     example:"A: 모든 시선이 그녀에게 집중됐어.\nB: 그만큼 연기를 잘했으니까.",
     exampleSrc:"A: All eyes were focused on her.\nB: Because she acted that well.",
     funFact:"시선을 끌다 (to attract attention) and 시선을 피하다 (to avoid eye contact) are common Korean expressions."},

    {type:"teach", trg:"시스템", src:"system", pos:"noun", gender:null,
     note:"Loanword from English 'system'.\nAn organized structure or method.",
     example:"A: 새로운 시스템을 도입했어요.\nB: 사용법을 교육해 주세요.",
     exampleSrc:"A: We have introduced a new system.\nB: Please provide training on how to use it.",
     funFact:"시스템 is used extensively in Korean IT and business. The native alternative 체계 is more formal."},

    {type:"teach", trg:"시아버지", src:"father-in-law (husband's father)", pos:"noun", gender:null,
     note:"시 (husband's side) + 아버지 (father).\nThe husband's father.",
     example:"A: 시아버지께서 생신이시래.\nB: 선물을 준비하자.",
     exampleSrc:"A: They say it is your father-in-law's birthday.\nB: Let's prepare a gift.",
     funFact:"Addressing in-laws correctly is crucial in Korean culture. 시아버지 is called 아버님 to his face."},

    {type:"teach", trg:"시야", src:"field of vision, perspective", pos:"noun", gender:null,
     note:"Sino-Korean. 視 (see) + 野 (field).\nThe range of what one can see.",
     example:"A: 안개 때문에 시야가 좁아졌어.\nB: 운전 조심해.",
     exampleSrc:"A: The fog has narrowed the field of vision.\nB: Be careful driving.",
     funFact:"시야를 넓히다 (to broaden one's perspective) is used both literally and figuratively in Korean."},

    {type:"teach", trg:"시어머니", src:"mother-in-law (husband's mother)", pos:"noun", gender:null,
     note:"시 (husband's side) + 어머니 (mother).\nThe husband's mother.",
     example:"A: 시어머니가 김치를 보내 주셨어.\nB: 역시 시어머니 손맛이 최고야.",
     exampleSrc:"A: My mother-in-law sent us kimchi.\nB: As expected, your mother-in-law's cooking is the best.",
     funFact:"The 시어머니-며느리 (mother-in-law and daughter-in-law) relationship is a major theme in Korean dramas."},

    {type:"mc",
     q:"남편 쪽 부모님을 뭐라고 하나요?",
     opts:["시부모","장인","처가","외가"],
     ans:"시부모",
     hint:"The prefix for husband's-side family members is 시-. What is the combined word for both parents?"},

    {type:"match", pairs:[
      {trg:"시댁", src:"husband's family home"},
      {trg:"시아버지", src:"father-in-law (husband's)"},
      {trg:"시어머니", src:"mother-in-law (husband's)"},
      {trg:"시부모", src:"parents-in-law (husband's)"}
    ]}
  ]
};

export default LESSON_3;
