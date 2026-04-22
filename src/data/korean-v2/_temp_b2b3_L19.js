// Korean B2. Batch 3, Lesson 19: Readiness and Mindset
// Words: 레저, 렌즈, 로봇, 로터리, 리, 리그, 리터, 마누라, 마당, 마디, 마땅하다, 마라톤, 마련, 마무리, 마사지, 마약, 마요네즈, 마음가짐, 마음껏, 마음먹다

const LESSON_19 = {
  id:"kov2_b2b3_l19", title:"마음과 마련", icon:"🧠", xp:15, board:true,
  steps:[
    {type:"intro", title:"마음과 마련",
     desc:"Learn vocabulary about leisure, measurement, family, and mindset. These words cover modern lifestyle terms and essential expressions about attitude and preparation.",
     goals:["Master 20 words about leisure, family, and inner resolve","Understand the 마음 (heart/mind) word family","Use loanwords and native Korean expressions naturally"]},

    {type:"teach", trg:"레저", src:"leisure", pos:"noun", gender:null,
     note:"Loanword from English 'leisure.'\nRecreational activities done for enjoyment.",
     example:"A: 주말에 레저 활동을 즐겨.\nB: 어떤 레저를 좋아해?",
     exampleSrc:"A: I enjoy leisure activities on weekends.\nB: What kind of leisure do you like?",
     funFact:"레저 스포츠 (leisure sports) like camping, surfing, and paddleboarding have boomed in Korea post-COVID."},

    {type:"teach", trg:"렌즈", src:"lens; contact lens", pos:"noun", gender:null,
     note:"Loanword from English 'lens.'\nAn optical device or contact lenses for vision.",
     example:"A: 렌즈를 끼고 있어?\nB: 응, 안경보다 편해서.",
     exampleSrc:"A: Are you wearing contact lenses?\nB: Yes, they are more comfortable than glasses.",
     funFact:"Korea is the world's largest market for colored contact lenses. 컬러 렌즈 (color lenses) are a beauty staple."},

    {type:"teach", trg:"로봇", src:"robot", pos:"noun", gender:null,
     note:"Loanword from English 'robot.'\nAn automated machine that performs tasks.",
     example:"A: 로봇 청소기가 집을 청소해 줘.\nB: 편리한 세상이 됐다.",
     exampleSrc:"A: The robot vacuum cleans the house for me.\nB: We live in a convenient world.",
     funFact:"Korea is a global leader in robotics. Korean companies manufacture many of the world's industrial and service robots."},

    {type:"teach", trg:"로터리", src:"rotary, roundabout, traffic circle", pos:"noun", gender:null,
     note:"Loanword from English 'rotary.'\nA circular road intersection.",
     example:"A: 로터리에서 좌회전해.\nB: 알겠어, 두 번째 출구로 나갈게.",
     exampleSrc:"A: Turn left at the roundabout.\nB: Got it, I will take the second exit.",
     funFact:"Many Korean cities have replaced 로터리 with regular intersections, but the word remains common in directions."},

    {type:"teach", trg:"리", src:"(counter: ri, ~400 meters)", pos:"noun", gender:null,
     note:"Sino-Korean. 里 (village/distance unit).\nA traditional Korean unit of distance.",
     example:"A: 여기서 5리 정도 가면 마을이 나와.\nB: 걸어서 갈 수 있는 거리야?",
     exampleSrc:"A: If you go about 5 ri from here, you reach the village.\nB: Is it walking distance?",
     funFact:"From Hanja 里. 1 리 is about 393 meters. 천리길도 한 걸음부터 (A journey of 1,000 ri starts with a single step)."},

    {type:"mc",
     q:"'천리길도 한 걸음부터'라는 속담의 의미는?",
     opts:["큰 일도 작은 시작에서 비롯된다","멀리 가려면 차를 타야 한다","걸어서 천 리를 가야 한다","빨리 걸으면 먼저 도착한다"],
     ans:"큰 일도 작은 시작에서 비롯된다",
     hint:"This proverb teaches that even the longest journey begins with taking a first step."},

    {type:"teach", trg:"리그", src:"league", pos:"noun", gender:null,
     note:"Loanword from English 'league.'\nAn organized sports competition series.",
     example:"A: 프로야구 리그가 시작됐어.\nB: 올해는 어떤 팀이 우승할까?",
     exampleSrc:"A: The professional baseball league has started.\nB: Which team will win this year?",
     funFact:"Korea's K-League (soccer) and KBO League (baseball) are immensely popular, with passionate fan cultures."},

    {type:"teach", trg:"리터", src:"liter", pos:"noun", gender:null,
     note:"Loanword from English 'liter.'\nA metric unit of volume.",
     example:"A: 물을 하루에 2리터 이상 마셔야 해.\nB: 그렇게 많이?",
     exampleSrc:"A: You should drink more than 2 liters of water a day.\nB: That much?",
     funFact:"Korea uses the metric system exclusively. 리터 for volume and 킬로그램 for weight are standard everywhere."},

    {type:"teach", trg:"마누라", src:"wife (informal/old-fashioned)", pos:"noun", gender:null,
     note:"Native Korean word.\nAn informal, slightly rough way to refer to one's wife.",
     example:"A: 마누라한테 혼날 거야.\nB: 미리 전화해서 말해.",
     exampleSrc:"A: My wife is going to scold me.\nB: Call and tell her ahead of time.",
     funFact:"마누라 is considered old-fashioned and can be rude. Modern polite terms: 아내 (wife), 와이프 (from English 'wife')."},

    {type:"teach", trg:"마당", src:"yard, courtyard", pos:"noun", gender:null,
     note:"Native Korean word.\nThe open ground area around a house.",
     example:"A: 마당에서 바비큐를 할까?\nB: 좋아! 고기를 준비할게.",
     exampleSrc:"A: Shall we have a barbecue in the yard?\nB: Great! I will prepare the meat.",
     funFact:"Traditional Korean homes (한옥) always feature a 마당. 마당극 (yard theater) is an outdoor folk performance tradition."},

    {type:"teach", trg:"마디", src:"word, phrase; joint, segment", pos:"noun", gender:null,
     note:"Native Korean word.\nA unit of speech or a physical section/joint.",
     example:"A: 한 마디만 할게.\nB: 뭔데? 말해 봐.",
     exampleSrc:"A: Let me say just one word.\nB: What is it? Go ahead.",
     funFact:"한 마디 (one word/phrase) is used when someone wants to make a brief but important statement."},

    {type:"fb",
     s:"성공을 위해서는 올바른 {1}이 중요하다.",
     a:["마음가짐"],
     opts:["마음가짐","마사지","마련","마디"],
     hint:"This word refers to your mental attitude or mindset when approaching something.",
     sSrc:"The right {1} is important for success."},

    {type:"teach", trg:"마땅하다", src:"to be proper, to be fitting, to be right", pos:"adj", gender:null,
     note:"Native Korean adjective.\nSomething is as it should be, appropriate.",
     example:"A: 잘못했으면 사과하는 게 마땅해.\nB: 맞아, 내가 먼저 사과할게.",
     exampleSrc:"A: If you did wrong, it is only right to apologize.\nB: You are right, I will apologize first.",
     funFact:"마땅하다 also means 'suitable': 마땅한 장소 (a suitable place). 마땅히 (adverb) means 'rightly, as one should.'"},

    {type:"teach", trg:"마라톤", src:"marathon", pos:"noun", gender:null,
     note:"Loanword from English 'marathon.'\nA long-distance running race of 42.195 km.",
     example:"A: 마라톤에 참가할 거야?\nB: 올해 처음으로 도전해 볼 거야.",
     exampleSrc:"A: Are you going to participate in the marathon?\nB: I will try for the first time this year.",
     funFact:"The Seoul International Marathon and Chuncheon Marathon are major events. Korea has produced world-class marathon runners."},

    {type:"teach", trg:"마련", src:"preparation, provision; inevitable consequence", pos:"noun", gender:null,
     note:"Native Korean word.\nPreparing something needed, or an expected outcome.",
     example:"A: 자리를 마련해 주셔서 감사합니다.\nB: 편하게 앉으세요.",
     exampleSrc:"A: Thank you for arranging a seat.\nB: Please sit comfortably.",
     funFact:"마련이다 means 'it is bound to happen': 실수는 있기 마련이다 (mistakes are inevitable). Very useful grammar pattern."},

    {type:"teach", trg:"마무리", src:"finishing, wrapping up", pos:"noun", gender:null,
     note:"Native Korean word.\nThe final touches or conclusion of something.",
     example:"A: 프로젝트 마무리를 잘해야 해.\nB: 마지막까지 신경 쓸게.",
     exampleSrc:"A: We need to wrap up the project well.\nB: I will pay attention until the very end.",
     funFact:"마무리하다 (to finish up) is used constantly in business: 마무리 단계 (final stage), 마무리 작업 (finishing work)."},

    {type:"teach", trg:"마사지", src:"massage", pos:"noun", gender:null,
     note:"Loanword from English 'massage.'\nBody manipulation for relaxation or therapy.",
     example:"A: 어깨가 뻣뻣해서 마사지를 받고 싶어.\nB: 근처에 좋은 마사지 가게가 있어.",
     exampleSrc:"A: My shoulders are stiff, I want to get a massage.\nB: There is a good massage place nearby.",
     funFact:"Korean 찜질방 (jjimjilbang) often include massage services. The culture of body care is deeply ingrained."},

    {type:"mc",
     q:"'마땅하다'와 의미가 가장 비슷한 것은?",
     opts:["이상하다","적절하다","어렵다","불편하다"],
     ans:"적절하다",
     hint:"This word describes something that is proper, fitting, or appropriate for the situation."},

    {type:"teach", trg:"마약", src:"drugs, narcotics", pos:"noun", gender:null,
     note:"Sino-Korean. 麻 (hemp/numb) + 藥 (medicine).\nIllegal substances that cause addiction.",
     example:"A: 마약은 절대 하면 안 돼.\nB: 맞아, 한 번이라도 위험해.",
     exampleSrc:"A: You must never do drugs.\nB: Right, even once is dangerous.",
     funFact:"From Hanja 麻藥. Korea has very strict anti-drug laws. 마약 also appears in slang: 마약떡볶이 (addictively delicious tteokbokki)."},

    {type:"teach", trg:"마요네즈", src:"mayonnaise", pos:"noun", gender:null,
     note:"Loanword from English/French 'mayonnaise.'\nA creamy condiment made from eggs and oil.",
     example:"A: 샌드위치에 마요네즈를 넣을까?\nB: 응, 많이 넣어 줘.",
     exampleSrc:"A: Shall I add mayonnaise to the sandwich?\nB: Yes, put a lot in.",
     funFact:"마요네즈 (shortened to 마요) is extremely popular in Korean food. Korean fried chicken and kimbap often feature it."},

    {type:"teach", trg:"마음가짐", src:"mindset, attitude, mental preparation", pos:"noun", gender:null,
     note:"마음 (mind/heart) + 가짐 (having/holding).\nThe mental attitude one holds.",
     example:"A: 마음가짐이 중요해.\nB: 긍정적으로 생각하려고 노력할게.",
     exampleSrc:"A: Your mindset is important.\nB: I will try to think positively.",
     funFact:"마음가짐 is essential in Korean sports and education culture. Coaches and teachers emphasize it constantly."},

    {type:"teach", trg:"마음껏", src:"to one's heart's content, freely", pos:"adv", gender:null,
     note:"마음 (heart) + 껏 (to the extent of).\nWithout any restriction, as much as desired.",
     example:"A: 오늘은 마음껏 놀자!\nB: 좋아! 걱정 없이 즐기자.",
     exampleSrc:"A: Let us play to our hearts' content today!\nB: Great! Let us enjoy without worries.",
     funFact:"마음껏 먹어 (eat as much as you want) is a generous Korean invitation at meals and feasts."},

    {type:"teach", trg:"마음먹다", src:"to make up one's mind, to decide", pos:"verb", gender:null,
     note:"마음 (mind) + 먹다 (to eat/consume).\nTo firmly decide or resolve to do something.",
     example:"A: 마음먹으면 뭐든 할 수 있어.\nB: 맞아, 의지가 중요하지.",
     exampleSrc:"A: If you make up your mind, you can do anything.\nB: Right, willpower is important.",
     funFact:"마음을 먹다 literally means 'to eat one's mind.' It implies consuming doubt and replacing it with determination."},

    {type:"match", pairs:[
      {trg:"마음껏", src:"to one's heart's content"},
      {trg:"마련", src:"preparation"},
      {trg:"마약", src:"drugs"},
      {trg:"마당", src:"yard"}
    ]}
  ]
};
export default LESSON_19;
