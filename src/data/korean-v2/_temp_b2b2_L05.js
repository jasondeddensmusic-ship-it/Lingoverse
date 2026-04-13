// Korean B2 — Batch 2, Lesson 5: Nature and Dreams
// Words: 꽃씨, 꽃잎, 꾸다, 꾸리다, 꾸준하다, 꾸중, 꿀, 꿈꾸다, 꿈속, 끈, 끊어지다, 끊임없다, 끊임없이, 끌리다, 끌어당기다, 끝없다, 끝없이, 끼, 끼어들다, 끼우다

const LESSON_5 = {
  id:"kov2_b2b2_l5", title:"꿈과 끈기", icon:"🌸", xp:15, board:true,
  steps:[
    {type:"intro", title:"꿈과 끈기",
     desc:"Explore words about nature, dreams, persistence, and attraction. These native Korean words create vivid and poetic expressions.",
     goals:["Master 20 words about dreams, persistence, and nature","Understand compound adjectives and adverbs","Learn words for continuous and endless states"]},

    {type:"teach", trg:"꽃씨", src:"flower seed", pos:"noun", gender:null,
     note:"꽃 (flower) + 씨 (seed).\nThe seed from which a flower grows.",
     example:"A: 봄에 꽃씨를 심었어요.\nB: 어떤 꽃이 필까요?",
     exampleSrc:"A: I planted flower seeds in spring.\nB: What kind of flowers will bloom?",
     funFact:"Korean gardens traditionally use 꽃씨 for cosmos (코스모스), marigolds (금잔화), and morning glories (나팔꽃)."},

    {type:"teach", trg:"꽃잎", src:"flower petal", pos:"noun", gender:null,
     note:"꽃 (flower) + 잎 (leaf).\nThe delicate colored parts of a flower.",
     example:"A: 벚꽃잎이 바람에 날려요.\nB: 정말 아름다운 풍경이에요.",
     exampleSrc:"A: Cherry blossom petals are blowing in the wind.\nB: It is a truly beautiful sight.",
     funFact:"벚꽃잎 (cherry blossom petals) falling is called 벚꽃비 (cherry blossom rain). A beloved spring image."},

    {type:"teach", trg:"꾸다", src:"to dream; to borrow", pos:"verb", gender:null,
     note:"Native Korean. Two distinct meanings:\n1. To have a dream. 2. To borrow (money).",
     example:"A: 어젯밤에 무서운 꿈을 꿨어요.\nB: 무슨 꿈이었어요?",
     exampleSrc:"A: I had a scary dream last night.\nB: What kind of dream was it?",
     funFact:"꿈을 꾸다 (to dream a dream) uses the same verb. 돈을 꾸다 (to borrow money) is its other common use."},

    {type:"teach", trg:"꾸리다", src:"to pack, to put together", pos:"verb", gender:null,
     note:"Native Korean. To gather things together\ninto a bundle or package.",
     example:"A: 짐을 다 꾸렸어?\nB: 거의 다 꾸렸어, 조금만 더.",
     exampleSrc:"A: Did you finish packing your bags?\nB: Almost done, just a little more.",
     funFact:"꾸리다 extends beyond luggage: 살림을 꾸리다 (set up a household), 사업을 꾸리다 (build a business)."},

    {type:"teach", trg:"꾸준하다", src:"to be steady, consistent, persistent", pos:"adj", gender:null,
     note:"Native Korean. Describes unwavering effort\nthat continues without stopping.",
     example:"A: 성공 비결이 뭐예요?\nB: 꾸준한 노력이에요.",
     exampleSrc:"A: What is the secret to success?\nB: Consistent effort.",
     funFact:"꾸준히 운동하다 (exercise consistently) is the most common collocation. Koreans deeply value persistence."},

    {type:"teach", trg:"꾸중", src:"scolding, reprimand", pos:"noun", gender:null,
     note:"Native Korean. A verbal reprimand,\nmilder than punishment.",
     example:"A: 선생님한테 꾸중을 들었어요.\nB: 왜요? 무슨 일이 있었어요?",
     exampleSrc:"A: I got scolded by the teacher.\nB: Why? What happened?",
     funFact:"꾸중 is formal. 잔소리 (nagging) is what parents do daily. 혼나다 (get in trouble) is the kid's version."},

    {type:"mc",
     q:"'꾸준한 노력'은 어떤 뜻인가요?",
     opts:["멈추지 않고 계속하는 노력","갑자기 많이 하는 노력","가끔씩 하는 노력","한 번만 하는 노력"],
     ans:"멈추지 않고 계속하는 노력",
     hint:"Effort that is continuous and unwavering over time, never stopping or slowing down."},

    {type:"teach", trg:"꿀", src:"honey", pos:"noun", gender:null,
     note:"Native Korean. Sweet golden liquid\nmade by bees.",
     example:"A: 차에 꿀을 넣을까요?\nB: 네, 한 숟가락만 넣어 주세요.",
     exampleSrc:"A: Should I add honey to the tea?\nB: Yes, just one spoonful please.",
     funFact:"Korean slang uses 꿀 for 'sweet deal': 꿀잠 (sweet sleep), 꿀팁 (great tip), 꿀벌 (honeybee, also hardworker)."},

    {type:"teach", trg:"꿈꾸다", src:"to dream of, to aspire to", pos:"verb", gender:null,
     note:"꿈 (dream) + 꾸다 (to dream).\nTo dream while sleeping or aspire to a goal.",
     example:"A: 어릴 때 뭘 꿈꿨어요?\nB: 우주 비행사를 꿈꿨어요.",
     exampleSrc:"A: What did you dream of as a child?\nB: I dreamed of being an astronaut.",
     funFact:"꿈꾸다 combines the noun and verb for dream. It can mean literal dreaming or aspirational dreaming."},

    {type:"teach", trg:"꿈속", src:"in a dream, dreamland", pos:"noun", gender:null,
     note:"꿈 (dream) + 속 (inside).\nThe world inside a dream.",
     example:"A: 꿈속에서 하늘을 날았어요.\nB: 좋은 꿈이었네요!",
     exampleSrc:"A: I flew through the sky in my dream.\nB: That was a good dream!",
     funFact:"꿈속 captures a space. Korean uses 속 productively: 물속 (underwater), 마음속 (in one's heart), 숲속 (in the forest)."},

    {type:"teach", trg:"끈", src:"string, cord, strap", pos:"noun", gender:null,
     note:"Native Korean. A thin flexible material\nused for tying or binding.",
     example:"A: 신발 끈이 풀렸어요.\nB: 잠깐, 다시 묶을게요.",
     exampleSrc:"A: My shoelace came untied.\nB: Hold on, I will retie it.",
     funFact:"끈기 (persistence, tenacity) comes from 끈 (string). The idea of holding on without letting go."},

    {type:"fb",
     s:"어릴 때 과학자를 {1}.",
     a:["꿈꿨다"],
     opts:["꿈꿨다","꾸렸다","꾸중했다","꾸었다"],
     hint:"To have an aspiration or dream about becoming something in the future.",
     sSrc:"As a child, I {1} of becoming a scientist."},

    {type:"teach", trg:"끊어지다", src:"to be cut off, to be severed", pos:"verb", gender:null,
     note:"끊다 (to cut) + 어지다 (become).\nSomething gets severed or disconnected.",
     example:"A: 전화가 갑자기 끊어졌어요.\nB: 신호가 약한가 봐요.",
     exampleSrc:"A: The phone call suddenly cut off.\nB: The signal must be weak.",
     funFact:"끊어지다 is used for phone lines, power, relationships, and supply chains. A versatile passive verb."},

    {type:"teach", trg:"끊임없다", src:"to be ceaseless, unending", pos:"adj", gender:null,
     note:"끊다 (cut) + 임 (act of) + 없다 (without).\nWithout any cutting off. Continuous.",
     example:"A: 끊임없는 노력이 필요해요.\nB: 맞아요, 포기하면 안 돼요.",
     exampleSrc:"A: Ceaseless effort is needed.\nB: Right, we must not give up.",
     funFact:"끊임없다 is built from three morphemes. This layered construction is typical of native Korean adjectives."},

    {type:"teach", trg:"끊임없이", src:"ceaselessly, without pause", pos:"adv", gender:null,
     note:"Adverb form of 끊임없다.\nDescribes actions that continue without any break.",
     example:"A: 그는 끊임없이 질문했어요.\nB: 호기심이 많은 학생이에요.",
     exampleSrc:"A: He asked questions ceaselessly.\nB: He is a very curious student.",
     funFact:"끊임없이 is preferred in writing. In casual speech, 계속 (continuously) is more common."},

    {type:"teach", trg:"끌리다", src:"to be attracted, to be drawn to", pos:"verb", gender:null,
     note:"Passive of 끌다 (to pull/drag).\nTo feel an involuntary pull toward something.",
     example:"A: 왜 이 그림에 끌리는 걸까?\nB: 색감이 특별해서 그런 것 같아.",
     exampleSrc:"A: Why am I drawn to this painting?\nB: I think it is because the colors are special.",
     funFact:"끌리다 is used for romantic attraction, artistic appeal, and intellectual curiosity alike."},

    {type:"teach", trg:"끌어당기다", src:"to pull toward, to attract", pos:"verb", gender:null,
     note:"끌다 (pull) + 어 + 당기다 (pull).\nDouble-pull compound. To draw something toward you.",
     example:"A: 자석이 철을 끌어당기듯이요.\nB: 네, 그런 비유가 딱이에요.",
     exampleSrc:"A: Like how a magnet pulls iron.\nB: Yes, that metaphor fits perfectly.",
     funFact:"끌어당기다 combines two verbs meaning 'pull.' This double-verb construction intensifies the action."},

    {type:"mc",
     q:"'끊임없이'의 반대말은?",
     opts:["가끔","끊임없이","꾸준히","빠르게"],
     ans:"가끔",
     hint:"The opposite of 'ceaselessly' or 'without pause.' Think of something that happens only sometimes."},

    {type:"teach", trg:"끝없다", src:"to be endless, boundless", pos:"adj", gender:null,
     note:"끝 (end) + 없다 (without).\nHaving no end or boundary.",
     example:"A: 끝없는 바다가 펼쳐져 있었어요.\nB: 정말 장관이었겠네요.",
     exampleSrc:"A: An endless ocean stretched out.\nB: It must have been a spectacular sight.",
     funFact:"끝없다 appears in poetry and literature. 끝없는 is one of Korea's most evocative adjective forms."},

    {type:"teach", trg:"끝없이", src:"endlessly, without end", pos:"adv", gender:null,
     note:"Adverb form of 끝없다.\nDescribes something continuing with no visible end.",
     example:"A: 길이 끝없이 이어져 있었어요.\nB: 얼마나 걸었어요?",
     exampleSrc:"A: The road stretched on endlessly.\nB: How long did you walk?",
     funFact:"끝없이 and 끊임없이 are near-synonyms but differ: 끝없이 = no end point, 끊임없이 = no interruption."},

    {type:"teach", trg:"끼", src:"talent, knack, natural flair", pos:"noun", gender:null,
     note:"Native Korean. An innate ability,\nespecially for performance or entertainment.",
     example:"A: 저 아이는 연기 끼가 있어요.\nB: 장래에 배우가 될 수도 있겠네요.",
     exampleSrc:"A: That child has a talent for acting.\nB: They could become an actor in the future.",
     funFact:"끼 is specifically for performance talent. It is different from 재능 (general talent) or 소질 (aptitude)."},

    {type:"teach", trg:"끼어들다", src:"to cut in, to butt in, to squeeze in", pos:"verb", gender:null,
     note:"끼다 (to be wedged) + 어들다 (enter into).\nTo insert oneself where not invited.",
     example:"A: 대화에 끼어들지 마세요.\nB: 죄송합니다.",
     exampleSrc:"A: Do not butt into the conversation.\nB: I am sorry.",
     funFact:"끼어들다 is used for traffic (cutting in lane), conversations (interrupting), and any unwelcome insertion."},

    {type:"teach", trg:"끼우다", src:"to insert, to fit between", pos:"verb", gender:null,
     note:"Causative of 끼다. To put something\nbetween two surfaces.",
     example:"A: 반지를 손가락에 끼웠어?\nB: 응, 딱 맞아.",
     exampleSrc:"A: Did you put the ring on your finger?\nB: Yes, it fits perfectly.",
     funFact:"끼우다 (insert) vs 끼다 (be wedged) vs 끼어들다 (butt in). Three related but distinct verbs from one root."},

    {type:"match", pairs:[
      {trg:"꽃잎", src:"petal"},
      {trg:"꿀", src:"honey"},
      {trg:"끈", src:"string"},
      {trg:"끼", src:"talent"},
      {trg:"끌리다", src:"to be attracted"}
    ]},

    {type:"fb",
     s:"전화가 갑자기 {1}.",
     a:["끊어졌다"],
     opts:["끊어졌다","끌어당겼다","끼어들었다","끝없었다"],
     hint:"The call was suddenly cut off or severed involuntarily.",
     sSrc:"The phone call suddenly {1}."}
  ]
};
export default LESSON_5;
