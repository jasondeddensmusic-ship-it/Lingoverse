// Korean B1 Gap - Lesson 38: Compound Motion and Misc Verbs
const LESSON_38 = {
  id:"kov2_b1gap_l38", title:"복합 동사와 혼합 어휘", icon:"🔄", xp:15, board:true,
  steps:[
    {type:"intro", title:"Compound Motion and Miscellaneous Verbs",
     desc:"Expand your verb repertoire with compound motion verbs, verbs of thought, and useful nouns. These words fill essential gaps for natural B1-level expression.",
     goals:["Learn 14 versatile verbs for actions and thoughts","Learn 6 important nouns","Use compound verbs in natural Korean sentences"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"꺼내다", src:"to take out, to bring up (a topic)", pos:"verb", gender:null,
     note:"Compound: 꺼 (out) + 내다 (put forth). Physical or figurative extraction.",
     example:"A: 가방에서 지갑을 꺼내세요.\nB: 잠깐만요. 꺼내고 있어요.",
     exampleSrc:"A: Take out your wallet from the bag.\nB: Just a moment. I'm taking it out.",
     funFact:"꺼내다 works for both objects and topics: 주머니에서 꺼내다 (take out of a pocket) and 이야기를 꺼내다 (bring up a story/topic). The figurative use is very common in conversation."},

    {type:"teach", trg:"내밀다", src:"to stick out, to extend, to thrust forward", pos:"verb", gender:null,
     note:"Compound: 내 (outward) + 밀다 (push). 손을 내밀다 = extend one's hand.",
     example:"A: 손을 내밀어 보세요.\nB: 이렇게요?\nA: 네, 악수합시다.",
     exampleSrc:"A: Try extending your hand.\nB: Like this?\nA: Yes, let's shake hands.",
     funFact:"내밀다 combines direction (내 = outward) with force (밀다 = push). Korean has many such directional compounds: 내놓다 (put out), 내보내다 (send out), 내려놓다 (put down)."},

    {type:"teach", trg:"달다", src:"to attach, to hang, to install", pos:"verb", gender:null,
     note:"Native Korean. 이름표를 달다 = attach a name tag. 별을 달다 = earn a star/badge.",
     example:"A: 커튼을 어디에 달까요?\nB: 거실 창문에 달아 주세요.",
     exampleSrc:"A: Where should I hang the curtain?\nB: Please hang it on the living room window.",
     funFact:"달다 has a homophone: 달다 meaning 'to be sweet.' Context always clarifies: 커튼을 달다 (hang curtains) vs. 사탕이 달다 (candy is sweet). Korean has many such homophones."},

    {type:"teach", trg:"들르다", src:"to drop by, to stop by", pos:"verb", gender:null,
     note:"Native Korean. Irregular conjugation (르 irregular). 들러서 = having stopped by.",
     example:"A: 집에 가는 길에 편의점에 들를까요?\nB: 네, 우유 좀 사 주세요.",
     exampleSrc:"A: Shall we stop by the convenience store on the way home?\nB: Yes, please buy some milk.",
     funFact:"들르다 is a 르 irregular verb: the ㄹ doubles in some forms (들러, 들렀다). It implies a brief, unplanned visit: 잠깐 들르다 (drop by briefly). For planned visits, use 방문하다."},

    {type:"teach", trg:"벌이다", src:"to start, to undertake, to set up", pos:"verb", gender:null,
     note:"Native Korean. For starting events or conflicts. 사업을 벌이다 = start a business.",
     example:"A: 큰 행사를 벌이고 있네요.\nB: 네, 동네 축제를 준비 중이에요.",
     exampleSrc:"A: They're putting on a big event.\nB: Yes, they're preparing a neighborhood festival.",
     funFact:"벌이다 implies something on a grand scale: 전쟁을 벌이다 (wage war), 싸움을 벌이다 (start a fight), 파티를 벌이다 (throw a party). It always suggests significant effort or scale."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'이야기를 꺼내다'의 뜻은?",
     opts:["이야기를 시작하다, 화제를 꺼내다","이야기를 듣다","이야기를 쓰다","이야기를 끝내다"],
     ans:"이야기를 시작하다, 화제를 꺼내다",
     hint:"This compound verb literally means 'to take something out.' When used with a topic, it means to introduce or raise that subject."},

    {type:"fb",
     s:"집에 가는 길에 서점에 {1}.",
     a:["들렀어요"],
     opts:["들렀어요","꺼냈어요","달았어요","벌였어요"],
     hint:"A 르-irregular verb meaning to make a brief, casual stop at a place on the way somewhere.",
     sSrc:"I {1} the bookstore on the way home."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"묻다", src:"to bury; to ask", pos:"verb", gender:null,
     note:"Two distinct verbs sharing the same form. 'To bury' is regular. 'To ask' is also regular but older form.",
     example:"A: 강아지가 뼈를 땅에 묻었어요.\nB: 강아지들이 원래 그래요.",
     exampleSrc:"A: The puppy buried a bone in the ground.\nB: Puppies are like that.",
     funFact:"묻다 'to bury' and 묻다 'to ask' are different words that happen to look identical. Context always clarifies: 땅에 묻다 = bury in ground, 질문을 묻다 = ask a question. Their conjugations differ slightly in formal speech."},

    {type:"teach", trg:"물다", src:"to bite, to hold in the mouth", pos:"verb", gender:null,
     note:"Native Korean. 물어뜯다 = bite and tear. 입에 물다 = hold in the mouth.",
     example:"A: 강아지가 신발을 물었어요!\nB: 훈련을 더 시켜야겠네요.",
     exampleSrc:"A: The puppy bit my shoe!\nB: We need to train it more.",
     funFact:"물다 also means 'to compensate/pay for damages' in a legal sense: 피해를 물다 (pay for damages). This extended meaning comes from the idea of 'taking on' responsibility, like holding it in your teeth."},

    {type:"teach", trg:"싣다", src:"to load, to carry (on a vehicle), to publish", pos:"verb", gender:null,
     note:"Native Korean. ㄷ irregular: 싣다 > 실어요. 짐을 싣다 = load cargo. 기사를 싣다 = publish an article.",
     example:"A: 짐을 차에 다 실었어요?\nB: 네, 출발할 수 있어요.",
     exampleSrc:"A: Did you load all the luggage in the car?\nB: Yes, we can depart.",
     funFact:"싣다 is a ㄷ irregular verb (ㄷ changes to ㄹ before vowels). The publishing meaning comes from the metaphor of 'loading' content onto paper: 신문에 싣다 means 'to publish in a newspaper.'"},

    {type:"teach", trg:"바르다", src:"to apply, to spread, to smear", pos:"verb", gender:null,
     note:"Native Korean. 크림을 바르다 = apply cream. 버터를 바르다 = spread butter. Regular conjugation.",
     example:"A: 선크림 발랐어요?\nB: 아, 깜빡했어요. 바르고 올게요.",
     exampleSrc:"A: Did you apply sunscreen?\nB: Oh, I forgot. I'll apply it and come.",
     funFact:"바르다 has a homophone meaning 'to be straight/honest' (바른 자세 = correct posture). The 'apply' meaning is by far more common in daily life. 르 irregular: 바르다 > 발라요."},

    {type:"teach", trg:"바라다", src:"to wish, to hope, to desire", pos:"verb", gender:null,
     note:"Native Korean. Formal well-wishing: 건강을 바랍니다 = I wish you health.",
     example:"A: 새해 복 많이 받으세요.\nB: 감사합니다. 건강하시길 바랍니다.",
     exampleSrc:"A: Happy New Year.\nB: Thank you. I hope you stay healthy.",
     funFact:"바라다 is the verb behind the polite closing 바랍니다, which ends formal letters and speeches. 부디 (please) often pairs with it: 부디 건강하시길 바랍니다 (I sincerely wish you good health)."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"묻다", src:"to bury; to ask"},
      {trg:"물다", src:"to bite"},
      {trg:"싣다", src:"to load, to publish"},
      {trg:"바라다", src:"to wish, to hope"}
    ]},

    {type:"fb",
     s:"선크림을 {1} 나가세요.",
     a:["바르고"],
     opts:["바르고","물고","묻고","싣고"],
     hint:"This verb means to apply or spread something onto the skin, like cream or lotion. A 르-irregular verb.",
     sSrc:"Go out after {1} sunscreen."},

    // --- Teach 11-14 (remaining verbs) ---
    {type:"teach", trg:"반하다", src:"to fall for, to be charmed by", pos:"verb", gender:null,
     note:"Sino-Korean root 反 (reverse/turn). 첫눈에 반하다 = to fall in love at first sight.",
     example:"A: 그 사람에게 반했어요?\nB: 네, 첫눈에 반했어요.",
     exampleSrc:"A: Did you fall for that person?\nB: Yes, it was love at first sight.",
     funFact:"첫눈에 반하다 (fall in love at first sight) is one of K-drama's favorite phrases. 반하다 can also describe being charmed by non-romantic things: 풍경에 반하다 (be captivated by scenery)."},

    {type:"teach", trg:"생각나다", src:"to come to mind, to recall", pos:"verb", gender:null,
     note:"생각 (thought) + 나다 (to emerge). Involuntary recall. 갑자기 생각났어요 = it suddenly came to mind.",
     example:"A: 갑자기 좋은 생각이 났어요!\nB: 뭔데요? 말해 보세요.",
     exampleSrc:"A: A good idea suddenly came to mind!\nB: What is it? Tell me.",
     funFact:"생각나다 vs. 생각하다: 나다 makes it involuntary (a memory surfaces on its own), while 하다 is deliberate thinking. 고향이 생각나다 means 'my hometown comes to mind,' implying nostalgia."},

    {type:"teach", trg:"생각되다", src:"to be thought, to seem, to be considered", pos:"verb", gender:null,
     note:"생각 (thought) + 되다 (become). Passive/objective. More formal than 생각나다.",
     example:"A: 이 방법이 좋다고 생각돼요?\nB: 네, 가장 효과적이라고 생각돼요.",
     exampleSrc:"A: Do you think this method is good?\nB: Yes, I think it's the most effective.",
     funFact:"생각되다 is the passive counterpart of 생각하다. It sounds more objective and tentative: 필요하다고 생각됩니다 (it is thought to be necessary) is typical of presentations and reports."},

    {type:"teach", trg:"어쩌다", src:"to happen by chance, accidentally", pos:"verb", gender:null,
     note:"From 어찌하다 (to do what). 어쩌다 보니 = as it happened, by chance.",
     example:"A: 어쩌다 이 동네로 오게 됐어요?\nB: 어쩌다 보니 직장이 가까워서요.",
     exampleSrc:"A: How did you end up coming to this neighborhood?\nB: It just happened because work is nearby.",
     funFact:"어쩌다 also functions as an adverb meaning 'occasionally': 어쩌다 한 번 (once in a while). The phrase 어쩌다 보니 (as things happened) is a very natural way to explain unplanned circumstances."},

    // --- Quiz batch 3 ---
    {type:"mc",
     q:"'첫눈에 반하다'의 뜻은?",
     opts:["첫 눈이 오다","처음 보고 좋아하게 되다","눈이 아프다","처음 만나다"],
     ans:"처음 보고 좋아하게 되다",
     hint:"This expression involves 첫 (first) + 눈 (eyes/glance). It describes an instant romantic attraction."},

    {type:"fb",
     s:"갑자기 좋은 아이디어가 {1}.",
     a:["생각났어요"],
     opts:["생각났어요","생각됐어요","반했어요","어쩌다요"],
     hint:"This compound verb describes a thought or memory emerging involuntarily and suddenly. Think of an idea 'coming to' you.",
     sSrc:"A good idea suddenly {1}."},

    // --- Teach 15-20 (nouns) ---
    {type:"teach", trg:"냄새", src:"smell, odor, scent", pos:"noun", gender:null,
     note:"Native Korean. 냄새가 나다 = a smell comes. 냄새를 맡다 = to smell (actively).",
     example:"A: 무슨 냄새가 나요?\nB: 옆집에서 고기 굽는 냄새예요.",
     exampleSrc:"A: What's that smell?\nB: It's the smell of grilling meat from next door.",
     funFact:"냄새 is neutral: it can be good or bad. Specify with 좋은 냄새 (good smell) or 나쁜 냄새 (bad smell). 향기 is the elegant word for pleasant fragrance, while 악취 means stench."},

    {type:"teach", trg:"상대", src:"opponent, counterpart, partner", pos:"noun", gender:null,
     note:"Sino-Korean (相對). 상대방 is the expanded form. 상대하다 = to deal with someone.",
     example:"A: 오늘 경기 상대가 누구예요?\nB: 강한 팀이에요. 잘 준비해야 해요.",
     exampleSrc:"A: Who is today's game opponent?\nB: It's a strong team. We need to prepare well.",
     funFact:"From hanja 相 (mutual) + 對 (face). 상대 is versatile: sports opponents, business counterparts, romantic partners. 상대가 안 되다 means 'to be no match for' someone."},

    {type:"teach", trg:"상대방", src:"the other party, the other person", pos:"noun", gender:null,
     note:"상대 + 방 (side/direction). More formal. Used in legal, business, and relationship contexts.",
     example:"A: 상대방의 입장도 생각해 보세요.\nB: 알겠어요. 노력해 볼게요.",
     exampleSrc:"A: Try to consider the other party's position too.\nB: I see. I'll try.",
     funFact:"상대방 is the go-to word in Korean relationship advice: 상대방을 존중하다 (respect the other person). In legal contexts, 상대방 means 'the opposing party.' Very formal and neutral."},

    {type:"teach", trg:"수상", src:"award, prize-winning", pos:"noun", gender:null,
     note:"Sino-Korean (受賞). 수상하다 = to receive an award. 수상 소감 = acceptance speech.",
     example:"A: 대통령상을 수상했대요!\nB: 대단하네요! 축하해요.",
     exampleSrc:"A: They won the Presidential Award!\nB: Amazing! Congratulations.",
     funFact:"From hanja 受 (receive) + 賞 (prize). Caution: 수상 can also mean 'suspicious' (written 殊常). Context clarifies: 수상한 사람 (suspicious person) vs. 수상 소감 (award speech)."},

    {type:"teach", trg:"본래", src:"originally, inherently, by nature", pos:"adv", gender:null,
     note:"Sino-Korean (本來). 본래의 모습 = original appearance. More literary than 원래.",
     example:"A: 본래 이 건물은 학교였어요.\nB: 정말요? 지금은 박물관이네요.",
     exampleSrc:"A: Originally this building was a school.\nB: Really? Now it's a museum.",
     funFact:"From hanja 本 (root/origin) + 來 (come). 본래 vs. 원래: nearly identical, but 본래 is slightly more formal and literary. 원래 is the everyday conversation choice."},

    {type:"teach", trg:"약간", src:"a little, somewhat, slightly", pos:"adv", gender:null,
     note:"Sino-Korean (若干). Hedging word. 약간 비싸다 = a little expensive. Very useful softener.",
     example:"A: 이 옷이 약간 커요.\nB: 작은 사이즈로 바꿔 드릴까요?",
     exampleSrc:"A: These clothes are slightly big.\nB: Shall I exchange them for a smaller size?",
     funFact:"From hanja 若 (like/as if) + 干 (some). 약간 is a polite understatement tool. Saying 약간 instead of 많이 softens criticism: 약간 이상해요 (it's a little weird) is much gentler than 많이 이상해요."},

    // --- Quiz batch 4 ---
    {type:"match", pairs:[
      {trg:"냄새", src:"smell, odor"},
      {trg:"상대방", src:"the other party"},
      {trg:"수상", src:"award, prize"},
      {trg:"약간", src:"slightly, a little"}
    ]},

    {type:"mc",
     q:"'수상'이라는 단어의 다른 뜻은?",
     opts:["빠른","수영","의심스러운","아름다운"],
     ans:"의심스러운",
     hint:"This Sino-Korean word has a homophone with a very different meaning. Think about describing someone who seems suspicious."},

    {type:"fb",
     s:"{1}의 입장도 이해해 보세요.",
     a:["상대방"],
     opts:["상대방","냄새","수상","본래"],
     hint:"A formal noun meaning 'the other person/party' in a relationship or negotiation. Uses 방 (side) as a suffix.",
     sSrc:"Try to understand {1}'s position too."}
  ]
};
export default LESSON_38;
