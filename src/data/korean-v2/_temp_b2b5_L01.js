// Korean B2 — Batch 5, Lesson 1: Fruits, Review, and Origins
// Words: 복숭아, 복습, 복습하다, 볶음, 볶음밥, 본, 본격적, 본부, 본사, 본성, 본인, 본질, 볼, 볼일, 봉사, 봉사하다, 봉지, 뵈다, 뵙다, 부끄러움

const LESSON_1 = {
  id:"kov2_b2b5_l1", title:"본질과 봉사", icon:"🍑", xp:15, board:true,
  steps:[
    {type:"intro", title:"본질과 봉사",
     desc:"Explore words about essence, identity, and service. Learn vocabulary for review, headquarters, and polite expressions commonly used in formal Korean.",
     goals:["Master 20 words related to essence, service, and identity","Understand Sino-Korean compounds with 本 (bon)","Use humble verb forms like 뵈다 and 뵙다"]},

    {type:"teach", trg:"복숭아", src:"peach", pos:"noun", gender:null,
     note:"Native Korean word.\nRefers to the fruit itself.",
     example:"A: 복숭아 좋아해?\nB: 응, 여름에 복숭아가 제일 맛있어.",
     exampleSrc:"A: Do you like peaches?\nB: Yes, peaches are the most delicious in summer.",
     funFact:"In Korean mythology, peaches symbolize longevity and immortality, similar to Chinese tradition."},

    {type:"teach", trg:"복습", src:"review, revision", pos:"noun", gender:null,
     note:"Sino-Korean. 復 (repeat) + 習 (study).\nStudying material again.",
     example:"A: 시험 준비 다 했어?\nB: 아직, 복습이 좀 더 필요해.",
     exampleSrc:"A: Are you done preparing for the exam?\nB: Not yet, I need a bit more review.",
     funFact:"The Korean education system emphasizes 복습 as a key study habit. The word pairs with 예습 (preview) as a study cycle."},

    {type:"teach", trg:"복습하다", src:"to review, to revise", pos:"verb", gender:null,
     note:"복습 + 하다 (to do).\nThe verb form of reviewing material.",
     example:"A: 어제 배운 거 복습했어?\nB: 아침에 한 시간 동안 복습했어.",
     exampleSrc:"A: Did you review what we learned yesterday?\nB: I reviewed for an hour in the morning.",
     funFact:"Korean students often use the phrase 복습은 3번 (review 3 times) as a study mantra."},

    {type:"mc",
     q:"복습의 반대말은 무엇인가?",
     opts:["예습","연습","학습","실습"],
     ans:"예습",
     hint:"If review means studying AGAIN, what word means studying BEFOREHAND?"},

    {type:"teach", trg:"볶음", src:"stir-fry, something stir-fried", pos:"noun", gender:null,
     note:"From 볶다 (to stir-fry).\nDescribes a cooking method or the dish itself.",
     example:"A: 오늘 저녁은 뭐 먹을까?\nB: 야채 볶음 어때?",
     exampleSrc:"A: What should we eat for dinner tonight?\nB: How about vegetable stir-fry?",
     funFact:"Korean stir-fry dishes like 떡볶이 (tteokbokki) use this root. 떡 (rice cake) + 볶이 (stir-fried)."},

    {type:"teach", trg:"볶음밥", src:"fried rice", pos:"noun", gender:null,
     note:"볶음 (stir-fry) + 밥 (rice).\nA compound noun for stir-fried rice.",
     example:"A: 볶음밥에 뭘 넣을까?\nB: 김치하고 계란만 넣자.",
     exampleSrc:"A: What should we put in the fried rice?\nB: Let's just add kimchi and eggs.",
     funFact:"Kimchi fried rice (김치볶음밥) is the most popular way to use leftover kimchi in Korea."},

    {type:"teach", trg:"본", src:"this, the present (in question)", pos:"noun", gender:null,
     note:"Sino-Korean. 本 (root, origin).\nUsed as a determiner in formal contexts.",
     example:"A: 본 계약서의 내용을 확인해 주세요.\nB: 네, 바로 확인하겠습니다.",
     exampleSrc:"A: Please check the contents of this contract.\nB: Yes, I will check it right away.",
     funFact:"In formal documents, 본 replaces 이 to sound more official. You will see it in legal texts and news."},

    {type:"teach", trg:"본격적", src:"full-scale, earnest", pos:"noun", gender:null,
     note:"Sino-Korean. 本格 (main form) + 的.\nDescribes something done seriously or in full.",
     example:"A: 본격적인 여름이 시작됐어.\nB: 맞아, 벌써 30도가 넘었어.",
     exampleSrc:"A: Full-scale summer has begun.\nB: Right, it has already passed 30 degrees.",
     funFact:"Often used in news headlines: 본격적인 경기 회복 (full-scale economic recovery)."},

    {type:"fb",
     s:"드디어 {1} 공사가 시작되었습니다.",
     a:["본격적인"],
     opts:["본격적인","부분적인","소극적인","상징적인"],
     hint:"Which word means 'full-scale' or 'earnest,' indicating something done in a serious, complete way?",
     sSrc:"At last, {1} construction has begun."},

    {type:"teach", trg:"본부", src:"headquarters", pos:"noun", gender:null,
     note:"Sino-Korean. 本 (main) + 部 (division).\nThe central office or command center.",
     example:"A: 회의가 본부에서 열려요.\nB: 서울 본부요, 부산 본부요?",
     exampleSrc:"A: The meeting is being held at headquarters.\nB: Seoul headquarters or Busan headquarters?",
     funFact:"Military bases in Korea use 사령부 for command headquarters, while companies use 본부."},

    {type:"teach", trg:"본사", src:"head office, main company", pos:"noun", gender:null,
     note:"Sino-Korean. 本 (main) + 社 (company).\nThe primary office of a business.",
     example:"A: 본사가 어디에 있어요?\nB: 서울 강남에 있어요.",
     exampleSrc:"A: Where is the head office?\nB: It is in Gangnam, Seoul.",
     funFact:"Most Korean conglomerate (재벌) head offices cluster in Seoul's Gangnam and Jongno districts."},

    {type:"teach", trg:"본성", src:"true nature, innate character", pos:"noun", gender:null,
     note:"Sino-Korean. 本 (root) + 性 (nature).\nOne's fundamental character.",
     example:"A: 사람의 본성은 선하다고 생각해?\nB: 글쎄, 상황에 따라 달라지는 것 같아.",
     exampleSrc:"A: Do you think human nature is good?\nB: Hmm, I think it depends on the situation.",
     funFact:"The debate between 성선설 (human nature is good) and 성악설 (human nature is evil) originates from ancient Chinese philosophy."},

    {type:"teach", trg:"본인", src:"the person in question, oneself", pos:"noun", gender:null,
     note:"Sino-Korean. 本 (this) + 人 (person).\nFormal way to say 'oneself.'",
     example:"A: 본인이 직접 오셔야 합니다.\nB: 대리인은 안 되나요?",
     exampleSrc:"A: You must come in person.\nB: Can a representative not come instead?",
     funFact:"At Korean banks, you will always hear 본인 확인 (identity verification) when doing transactions."},

    {type:"match", pairs:[
      {trg:"본부", src:"headquarters"},
      {trg:"본사", src:"head office"},
      {trg:"본성", src:"true nature"},
      {trg:"본인", src:"oneself"}
    ]},

    {type:"teach", trg:"본질", src:"essence, fundamental nature", pos:"noun", gender:null,
     note:"Sino-Korean. 本 (root) + 質 (quality).\nThe core of something.",
     example:"A: 이 문제의 본질이 뭐라고 생각해?\nB: 의사소통 부족이 본질이야.",
     exampleSrc:"A: What do you think is the essence of this problem?\nB: Lack of communication is the essence.",
     funFact:"A common Korean expression: 본질을 파악하다 (to grasp the essence). Used often in academic writing."},

    {type:"teach", trg:"볼", src:"cheek", pos:"noun", gender:null,
     note:"Native Korean word.\nRefers to the side of the face.",
     example:"A: 아기 볼이 너무 귀엽다.\nB: 맞아, 만지고 싶어.",
     exampleSrc:"A: The baby's cheeks are so cute.\nB: Right, I want to touch them.",
     funFact:"Koreans often describe cute cheeks as 볼이 빵빵하다 (cheeks are puffy), a term of endearment."},

    {type:"teach", trg:"볼일", src:"errand, business to attend to", pos:"noun", gender:null,
     note:"볼 (to see/attend) + 일 (matter).\nSomething you need to take care of.",
     example:"A: 오늘 볼일이 있어서 먼저 갈게.\nB: 알겠어, 내일 봐.",
     exampleSrc:"A: I have an errand today so I will head out first.\nB: Okay, see you tomorrow.",
     funFact:"This is a polite, indirect way to excuse yourself without explaining what you need to do."},

    {type:"teach", trg:"봉사", src:"volunteer service", pos:"noun", gender:null,
     note:"Sino-Korean. 奉 (offer) + 仕 (serve).\nService offered without payment.",
     example:"A: 주말에 봉사 활동 같이 갈래?\nB: 좋아, 어디서 하는 건데?",
     exampleSrc:"A: Do you want to go do volunteer work together on the weekend?\nB: Sure, where is it?",
     funFact:"Korean high school students need volunteer hours (봉사 시간) for university admissions."},

    {type:"teach", trg:"봉사하다", src:"to volunteer, to serve", pos:"verb", gender:null,
     note:"봉사 + 하다 (to do).\nThe verb form of volunteering.",
     example:"A: 어디서 봉사하고 있어?\nB: 양로원에서 봉사하고 있어.",
     exampleSrc:"A: Where are you volunteering?\nB: I am volunteering at a nursing home.",
     funFact:"Korea has a strong culture of corporate volunteering. Many companies give employees paid days off for 봉사."},

    {type:"fb",
     s:"주말마다 고아원에서 {1} 있어요.",
     a:["봉사하고"],
     opts:["봉사하고","복습하고","볶아서","부끄러워"],
     hint:"Which verb means to volunteer or serve? Think about offering your time to help others.",
     sSrc:"I am {1} at the orphanage every weekend."},

    {type:"teach", trg:"봉지", src:"bag, pouch", pos:"noun", gender:null,
     note:"Sino-Korean. 封 (seal) + 紙 (paper).\nA small bag, often plastic or paper.",
     example:"A: 봉지 필요하세요?\nB: 아니요, 가방 있어요.",
     exampleSrc:"A: Do you need a bag?\nB: No, I have a bag.",
     funFact:"Since 2019, Korean supermarkets charge for plastic bags. Cashiers always ask 봉지 필요하세요?"},

    {type:"teach", trg:"뵈다", src:"to see, to meet (humble)", pos:"verb", gender:null,
     note:"Humble form of 보다 (to see).\nUsed when the other person has higher status.",
     example:"A: 사장님을 뵈러 왔습니다.\nB: 잠시만 기다려 주세요.",
     exampleSrc:"A: I have come to see the CEO.\nB: Please wait a moment.",
     funFact:"Korean has multiple politeness levels. 뵈다 is the humble (겸양어) version, showing deep respect."},

    {type:"teach", trg:"뵙다", src:"to meet (very humble)", pos:"verb", gender:null,
     note:"Even more humble form of 보다.\nUsed in greetings to superiors.",
     example:"A: 처음 뵙겠습니다.\nB: 만나서 반갑습니다.",
     exampleSrc:"A: It is nice to meet you for the first time.\nB: It is nice to meet you too.",
     funFact:"처음 뵙겠습니다 is the most formal way to introduce yourself to someone in Korea."},

    {type:"teach", trg:"부끄러움", src:"shame, embarrassment", pos:"noun", gender:null,
     note:"From 부끄럽다 (to be embarrassed).\nThe noun form of the feeling.",
     example:"A: 부끄러움을 많이 타는 편이야?\nB: 응, 사람 많은 데서 말 못 해.",
     exampleSrc:"A: Do you tend to feel embarrassed easily?\nB: Yes, I cannot speak in front of many people.",
     funFact:"Koreans describe shyness as 부끄러움을 타다 (to ride embarrassment), a uniquely Korean expression."},

    {type:"mc",
     q:"윗사람을 처음 만날 때 어떤 인사가 가장 적절한가?",
     opts:["처음 뵙겠습니다","처음 봤습니다","처음 만나요","처음이에요"],
     ans:"처음 뵙겠습니다",
     hint:"Which greeting uses the most humble form of 'to see,' appropriate for meeting a superior?"},

    {type:"match", pairs:[
      {trg:"복습", src:"review"},
      {trg:"봉사", src:"volunteer service"},
      {trg:"봉지", src:"bag"},
      {trg:"부끄러움", src:"embarrassment"}
    ]}
  ]
};
export default LESSON_1;
