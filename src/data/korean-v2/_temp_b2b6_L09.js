// Korean B2. Batch 6, Lesson 9: Seeds and Innocence
// Words: 씌우다, 씨, 씨름, 씨앗, 씩씩하다, 씻기다, 아깝다, 아끼다, 아냐, 아뇨, 아니야, 아니하다, 아드님, 아래쪽, 아래층, 아랫사람, 아르바이트, 아무개, 아무런, (det)

const LESSON_9 = {
  id:"kov2_b2b6_l9", title:"씨앗과 겸손", icon:"🌱", xp:15, board:true,
  steps:[
    {type:"intro", title:"씨앗과 겸손",
     desc:"Learn words about seeds, washing, thriftiness, and social hierarchy. This set includes negation forms and honorific vocabulary essential for polite Korean.",
     goals:["Master 20 words about nature, thriftiness, and social position","Understand Korean negation and refusal patterns","Use honorific and hierarchical vocabulary correctly"]},

    {type:"teach", trg:"씌우다", src:"to put on (someone), to cover", pos:"verb", gender:null,
     note:"Causative of 쓰다 (to wear on head).\nPutting a hat or cover on someone else.",
     example:"A: 아이한테 모자를 씌워 줘.\nB: 알겠어, 햇볕이 강하니까.",
     exampleSrc:"A: Put a hat on the child.\nB: Got it, since the sunlight is strong.",
     funFact:"씌우다 is also used figuratively: 누명을 씌우다 means to frame someone or pin false blame on them."},

    {type:"teach", trg:"씨", src:"seed; Mr./Ms. (suffix)", pos:"noun", gender:null,
     note:"Native Korean noun.\nPlant seed, or a polite name suffix.",
     example:"A: 이 씨를 봄에 심으면 돼?\nB: 응, 4월이 가장 좋아.",
     exampleSrc:"A: Should I plant this seed in spring?\nB: Yes, April is the best.",
     funFact:"As a name suffix, 씨 is polite but less formal than 님. Using it with a last name alone can sound cold."},

    {type:"teach", trg:"씨름", src:"Korean traditional wrestling", pos:"noun", gender:null,
     note:"Native Korean noun.\nTraditional wrestling where opponents grab each other's belt.",
     example:"A: 추석에 씨름 대회 본 적 있어?\nB: 응, 정말 재미있었어.",
     exampleSrc:"A: Have you watched a ssireum tournament on Chuseok?\nB: Yes, it was really fun.",
     funFact:"씨름 was designated a UNESCO Intangible Cultural Heritage in 2018, jointly by North and South Korea."},

    {type:"teach", trg:"씨앗", src:"seed (for planting)", pos:"noun", gender:null,
     note:"씨 (seed) + 앗 (diminutive).\nA small seed ready to be planted.",
     example:"A: 해바라기 씨앗을 샀어.\nB: 화분에 심을 거야?",
     exampleSrc:"A: I bought sunflower seeds.\nB: Are you going to plant them in a pot?",
     funFact:"Koreans eat roasted 해바라기 씨앗 (sunflower seeds) as a snack, especially at baseball games."},

    {type:"mc",
     q:"한국의 전통 운동으로, 상대방의 허리띠를 잡고 하는 것은?",
     opts:["씨름","태권도","유도","검도"],
     ans:"씨름",
     hint:"A traditional Korean sport where two wrestlers grab each other's waist sash."},

    {type:"teach", trg:"씩씩하다", src:"to be brave, to be spirited", pos:"adj", gender:null,
     note:"Native Korean adjective (reduplicated form).\nBold and energetic, especially in children.",
     example:"A: 아이가 참 씩씩하네요.\nB: 네, 겁이 없어요.",
     exampleSrc:"A: The child is really brave.\nB: Yes, they are fearless.",
     funFact:"씩씩하다 is often used to encourage children. Parents say 씩씩하게 (bravely) when kids face challenges."},

    {type:"teach", trg:"씻기다", src:"to wash (someone), to be washed", pos:"verb", gender:null,
     note:"씻다 (to wash) + -기다 (causative/passive).\nWashing someone else or being washed.",
     example:"A: 아기를 씻기고 재울게.\nB: 고마워, 나는 설거지할게.",
     exampleSrc:"A: I will wash the baby and put them to sleep.\nB: Thanks, I will do the dishes.",
     funFact:"Korean parenting involves 아이를 씻기다 as a daily routine. Many Korean bathrooms have low stools for this."},

    {type:"teach", trg:"아깝다", src:"to be wasteful, to be a shame to lose", pos:"adj", gender:null,
     note:"Native Korean adjective.\nFeeling that something valuable is being wasted.",
     example:"A: 이 음식 버리기 아깝다.\nB: 그러면 내일 먹자.",
     exampleSrc:"A: It would be a waste to throw this food away.\nB: Then let's eat it tomorrow.",
     funFact:"아깝다 reflects Korean frugality culture. Throwing away food or money triggers this feeling strongly."},

    {type:"teach", trg:"아끼다", src:"to save, to cherish, to be frugal with", pos:"verb", gender:null,
     note:"Native Korean verb.\nBeing careful not to waste something valuable.",
     example:"A: 용돈을 아끼고 있어.\nB: 뭐 사려고?",
     exampleSrc:"A: I am saving my allowance.\nB: What are you planning to buy?",
     funFact:"아끼다 can mean both saving money and cherishing a person: 아끼는 사람 means someone you hold dear."},

    {type:"fb",
     s:"이렇게 좋은 기회를 놓치면 너무 {1}.",
     a:["아까워요"],
     opts:["아까워요","아껴요","아파요","아무래요"],
     hint:"The feeling when something valuable might be wasted or lost. A real shame.",
     sSrc:"It would be such a {1} to miss this great opportunity."},

    {type:"teach", trg:"아냐", src:"no (casual)", pos:"intj", gender:null,
     note:"Casual contraction of 아니야.\nInformal way to say no among close friends.",
     example:"A: 화났어?\nB: 아냐, 괜찮아.",
     exampleSrc:"A: Are you angry?\nB: No, I am fine.",
     funFact:"Korean has many levels of saying no: 아냐 (casual), 아니요 (polite), 아닙니다 (formal), 아뇨 (shortened polite)."},

    {type:"teach", trg:"아뇨", src:"no (polite, shortened)", pos:"intj", gender:null,
     note:"Shortened from 아니요.\nPolite but slightly casual refusal.",
     example:"A: 커피 드실래요?\nB: 아뇨, 괜찮아요.",
     exampleSrc:"A: Would you like coffee?\nB: No, I am fine.",
     funFact:"아뇨 is softer than the full 아니요. It is the most commonly heard form in everyday polite conversation."},

    {type:"teach", trg:"아니야", src:"no (informal); it is not", pos:"intj", gender:null,
     note:"아니다 (to not be) + 야 (casual ending).\nDirect informal negation.",
     example:"A: 이거 네 거야?\nB: 아니야, 동생 거야.",
     exampleSrc:"A: Is this yours?\nB: No, it is my sibling's.",
     funFact:"아니야 doubles as both a simple 'no' and the copula negation 'it is not' in casual speech."},

    {type:"teach", trg:"아니하다", src:"to not do (literary/formal)", pos:"aux", gender:null,
     note:"Literary negative auxiliary.\n않다 is its commonly used contracted form.",
     example:"A: 그는 노력을 아니하였다.\nB: 그래서 결과가 좋지 않았어.",
     exampleSrc:"A: He did not make an effort.\nB: That is why the result was not good.",
     funFact:"아니하다 is the uncontracted form of 않다. You see it in legal texts, literature, and the Korean constitution."},

    {type:"teach", trg:"아드님", src:"son (honorific)", pos:"noun", gender:null,
     note:"아들 (son) + 님 (honorific suffix).\nRespectful way to refer to someone's son.",
     example:"A: 아드님이 대학에 입학했다면서요?\nB: 네, 서울대에 합격했어요.",
     exampleSrc:"A: I heard your son was admitted to university?\nB: Yes, he was accepted to Seoul National University.",
     funFact:"Korean honorific family terms: 아드님 (son), 따님 (daughter), 부인 (wife), 남편분 (husband)."},

    {type:"teach", trg:"아래쪽", src:"the lower part, downward direction", pos:"noun", gender:null,
     note:"아래 (below) + 쪽 (direction/side).\nThe area below or the downward direction.",
     example:"A: 아래쪽에 가게가 있어요.\nB: 어떤 가게요?",
     exampleSrc:"A: There is a store on the lower side.\nB: What kind of store?",
     funFact:"Korean direction words pair with 쪽: 위쪽 (upper), 아래쪽 (lower), 왼쪽 (left), 오른쪽 (right)."},

    {type:"teach", trg:"아래층", src:"the floor below, downstairs", pos:"noun", gender:null,
     note:"아래 (below) + 층 (floor/story).\nThe floor directly beneath the current one.",
     example:"A: 아래층에서 소리가 나.\nB: 공사하나 봐.",
     exampleSrc:"A: There is noise coming from the floor below.\nB: They must be doing construction.",
     funFact:"층간소음 (inter-floor noise) is a major issue in Korean apartments. 아래층/위층 conflicts are common."},

    {type:"teach", trg:"아랫사람", src:"subordinate, junior (in hierarchy)", pos:"noun", gender:null,
     note:"아래 (below) + 사람 (person).\nSomeone lower in age or social rank.",
     example:"A: 아랫사람한테도 예의를 지켜야 해.\nB: 맞아, 직급에 상관없이.",
     exampleSrc:"A: You should be polite to subordinates too.\nB: Right, regardless of rank.",
     funFact:"Korean society traditionally divides people into 윗사람 (seniors) and 아랫사람 (juniors). Respect flows upward."},

    {type:"teach", trg:"아르바이트", src:"part-time job", pos:"noun", gender:null,
     note:"From German 'Arbeit' (work).\nPart-time or temporary employment.",
     example:"A: 요즘 아르바이트 하고 있어?\nB: 응, 카페에서 일해.",
     exampleSrc:"A: Are you doing a part-time job these days?\nB: Yes, I work at a cafe.",
     funFact:"Korean borrows the German word Arbeit but narrows it to mean only part-time work. It is shortened to 알바."},

    {type:"teach", trg:"아무개", src:"so-and-so, someone unnamed", pos:"pron", gender:null,
     note:"아무 (any) + 개 (suffix).\nA placeholder name for an unspecified person.",
     example:"A: 김 아무개 씨가 전화했대.\nB: 이름을 안 물어봤어?",
     exampleSrc:"A: A Mr. Kim so-and-so called.\nB: You did not ask for the name?",
     funFact:"아무개 functions like 'John Doe' in English. It is used when the exact name is unknown or unimportant."},

    {type:"mc",
     q:"'알바'는 어느 나라 말에서 온 외래어인가요?",
     opts:["프랑스어","독일어","영어","일본어"],
     ans:"독일어",
     hint:"The full form is 아르바이트. This word comes from a European language meaning 'work.'"},

    {type:"match", pairs:[
      {trg:"아깝다", src:"to be wasteful"},
      {trg:"아끼다", src:"to save, to cherish"},
      {trg:"아드님", src:"son (honorific)"},
      {trg:"아랫사람", src:"subordinate"}
    ]}
  ]
};

export default LESSON_9;
