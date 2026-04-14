// Korean B2 — Batch 3, Lesson 13: Time, Memory, and Longing
// Words: 그놈, 그대, 그때그때, 그래야, 그래픽, 그러다, 그런대로, 그럴듯하다, 그렇지, 그루, 그리로, 그리움, 그리하여, 그립다, 그만하다, 그사이, 그야말로, 그이, 그저, 그저께

const LESSON_13 = {
  id:"kov2_b2b3_l13", title:"그리움과 그때", icon:"🕰️", xp:15, board:true,
  steps:[
    {type:"intro", title:"그리움과 그때",
     desc:"Master expressions of nostalgia, time references, and discourse markers. These words add nuance and fluency to your Korean, especially in storytelling and emotional expression.",
     goals:["Master 20 words about time, longing, and discourse connectors","Understand 그- prefix patterns for demonstratives","Express nuanced emotions and temporal references"]},

    {type:"teach", trg:"그놈", src:"that guy, that fellow (rough)", pos:"pron", gender:null,
     note:"그 (that) + 놈 (fellow, derogatory).\nA rough or dismissive way to refer to a male.",
     example:"A: 그놈이 또 말썽을 부렸어.\nB: 언제쯤 정신을 차릴까.",
     exampleSrc:"A: That guy caused trouble again.\nB: When will he come to his senses?",
     funFact:"놈 is quite informal and can be rude. Among close friends it is playful, but toward strangers it is offensive."},

    {type:"teach", trg:"그대", src:"you (literary/poetic)", pos:"pron", gender:null,
     note:"Archaic/literary pronoun.\nA poetic or romantic form of 'you.'",
     example:"A: 그대를 사랑합니다.\nB: 이 노래 가사가 정말 아름다워.",
     exampleSrc:"A: I love you (poetic).\nB: The lyrics of this song are really beautiful.",
     funFact:"그대 is almost never used in daily speech. It appears in songs, poems, and literary works for romantic effect."},

    {type:"teach", trg:"그때그때", src:"each time, as it comes up", pos:"adv", gender:null,
     note:"그때 (that time) repeated.\nHandling things on a case-by-case basis.",
     example:"A: 계획을 미리 세워?\nB: 아니, 그때그때 상황에 맞게 해.",
     exampleSrc:"A: Do you plan ahead?\nB: No, I handle things as they come up.",
     funFact:"Reduplication for 'each instance': 사람사람 (each person), 날마다 (each day), 그때그때 (each time)."},

    {type:"teach", trg:"그래야", src:"only then, you should, that is how", pos:"noun", gender:null,
     note:"그래 (like that) + 야 (only then).\nA contracted form expressing necessity.",
     example:"A: 열심히 공부해야 해.\nB: 그래야 시험에 합격할 수 있지.",
     exampleSrc:"A: You need to study hard.\nB: Only then can you pass the exam.",
     funFact:"그래야 is a contraction of 그래야만. It emphasizes that something is a prerequisite for a result."},

    {type:"teach", trg:"그래픽", src:"graphic, graphics", pos:"noun", gender:null,
     note:"Loanword from English 'graphic.'\nVisual design or computer-generated imagery.",
     example:"A: 이 게임의 그래픽이 정말 좋다.\nB: 최신 기술로 만들었대.",
     exampleSrc:"A: The graphics of this game are really good.\nB: They say it was made with the latest technology.",
     funFact:"Korea's gaming and webtoon industries have pushed 그래픽 technology to world-class levels."},

    {type:"mc",
     q:"'그때그때'와 의미가 가장 비슷한 것은?",
     opts:["상황에 따라","항상 같게","미리 정해서","나중에 한꺼번에"],
     ans:"상황에 따라",
     hint:"This expression means dealing with things individually as each situation arises."},

    {type:"teach", trg:"그러다", src:"to do so, to act that way", pos:"verb", gender:null,
     note:"그리 (like that) + 하다 contracted.\nTo continue doing something in that manner.",
     example:"A: 계속 그러다가는 큰일 나.\nB: 알겠어, 조심할게.",
     exampleSrc:"A: If you keep doing that, you will be in big trouble.\nB: OK, I will be careful.",
     funFact:"그러다 is a highly versatile verb. 그러다가 (while doing so), 그러면 (if so), 그러니까 (therefore) all derive from it."},

    {type:"teach", trg:"그런대로", src:"passably, tolerably, so-so", pos:"adv", gender:null,
     note:"그런 (like that) + 대로 (as is).\nAcceptable but not excellent.",
     example:"A: 음식이 어때?\nB: 그런대로 먹을 만해.",
     exampleSrc:"A: How is the food?\nB: It is passable, edible enough.",
     funFact:"A politely understated expression. Koreans often use understatement, so 그런대로 can actually mean 'quite decent.'"},

    {type:"teach", trg:"그럴듯하다", src:"to be plausible, to seem convincing", pos:"adj", gender:null,
     note:"그럴 (like that) + 듯하다 (seems like).\nAppearing believable or impressive.",
     example:"A: 그의 설명이 그럴듯해.\nB: 하지만 증거가 필요해.",
     exampleSrc:"A: His explanation seems plausible.\nB: But we need evidence.",
     funFact:"Can be both positive (that looks convincing) and slightly sarcastic (that sounds too good to be true) depending on tone."},

    {type:"teach", trg:"그렇지", src:"that is right, isn't it so", pos:"intj", gender:null,
     note:"그렇다 (to be so) + 지 (confirmation).\nUsed to confirm or agree with someone.",
     example:"A: 이게 맞지?\nB: 그렇지, 네 말이 맞아.",
     exampleSrc:"A: This is correct, right?\nB: That is right, you are correct.",
     funFact:"그렇지! is a common verbal agreement marker, like English 'Exactly!' or 'That is right!'"},

    {type:"teach", trg:"그루", src:"(counter for trees)", pos:"noun", gender:null,
     note:"Native Korean bound noun.\nA counting unit specifically for trees.",
     example:"A: 나무 몇 그루를 심었어?\nB: 열 그루를 심었어.",
     exampleSrc:"A: How many trees did you plant?\nB: I planted ten trees.",
     funFact:"Korean has specific counters for nearly everything: 그루 (trees), 송이 (flowers/mushrooms), 마리 (animals)."},

    {type:"fb",
     s:"그의 이야기가 {1}해서 모두 믿었다.",
     a:["그럴듯"],
     opts:["그럴듯","그런대로","그래픽","그저"],
     hint:"This word means something sounds convincing or plausible enough to believe.",
     sSrc:"His story was {1} enough that everyone believed it."},

    {type:"teach", trg:"그리로", src:"to that place, over there", pos:"adv", gender:null,
     note:"그리 (that direction) + 로 (toward).\nIndicating direction toward a referenced place.",
     example:"A: 그리로 가면 우체국이 있어.\nB: 고마워, 그쪽으로 갈게.",
     exampleSrc:"A: If you go that way, there is a post office.\nB: Thanks, I will head that direction.",
     funFact:"Part of a directional trio: 이리로 (this way), 그리로 (that way), 저리로 (over that way, far)."},

    {type:"teach", trg:"그리움", src:"longing, yearning, nostalgia", pos:"noun", gender:null,
     note:"그립다 (to miss) + 음 (nominalizer).\nThe deep feeling of missing someone or something.",
     example:"A: 고향에 대한 그리움이 크다.\nB: 오래 떨어져 있으면 당연하지.",
     exampleSrc:"A: The longing for my hometown is great.\nB: It is natural when you have been away for long.",
     funFact:"그리움 is a deeply Korean emotion, often featured in songs and poems about 고향 (hometown) and lost love."},

    {type:"teach", trg:"그리하여", src:"and so, thus, therefore", pos:"adv", gender:null,
     note:"그리 (like that) + 하여 (doing).\nA formal literary connector meaning 'and thus.'",
     example:"A: 비가 많이 왔다. 그리하여 행사가 취소되었다.\nB: 안타깝지만 어쩔 수 없지.",
     exampleSrc:"A: It rained a lot. And so the event was canceled.\nB: It is unfortunate but cannot be helped.",
     funFact:"그리하여 is very formal and literary. Spoken Korean prefers 그래서 (so/therefore) for the same meaning."},

    {type:"teach", trg:"그립다", src:"to miss, to long for", pos:"adj", gender:null,
     note:"Native Korean adjective.\nThe feeling of wanting someone or something absent.",
     example:"A: 할머니가 너무 그리워.\nB: 곧 명절이니까 만날 수 있을 거야.",
     exampleSrc:"A: I miss my grandmother so much.\nB: The holidays are coming soon, so you will see her.",
     funFact:"그립다 conjugates irregularly: 그리워 (not 그립어). It captures a warmth that English 'miss' does not fully convey."},

    {type:"mc",
     q:"'그리움'을 느끼는 상황으로 가장 적절한 것은?",
     opts:["고향을 떠나 오래 살 때","맛있는 음식을 먹을 때","새 친구를 사귈 때","시험을 잘 볼 때"],
     ans:"고향을 떠나 오래 살 때",
     hint:"This emotion arises when you are separated from someone or someplace dear for a long time."},

    {type:"teach", trg:"그만하다", src:"to be about that much, to be enough", pos:"adj", gender:null,
     note:"그만 (that much) + 하다 (to do/be).\nSomething has reached a sufficient level.",
     example:"A: 다행히 피해가 그만하면 괜찮아.\nB: 맞아, 더 클 수도 있었어.",
     exampleSrc:"A: Fortunately, the damage is not too bad at this level.\nB: Right, it could have been worse.",
     funFact:"그만하다 can mean 'that is enough' (stop) or 'about that level' (acceptable), depending on context."},

    {type:"teach", trg:"그사이", src:"in the meantime, during that time", pos:"noun", gender:null,
     note:"그 (that) + 사이 (間, between/interval).\nThe time gap between two events.",
     example:"A: 잠깐 자리를 비웠는데 그사이에 전화가 왔어.\nB: 누구한테서?",
     exampleSrc:"A: I stepped away briefly and a call came in the meantime.\nB: From whom?",
     funFact:"그사이 is more colloquial than 그간 or 그동안. All three express 'during that interval.'"},

    {type:"teach", trg:"그야말로", src:"truly, really, indeed", pos:"adv", gender:null,
     note:"그 (that) + 야말로 (truly/indeed).\nEmphasizes that something is exactly as described.",
     example:"A: 이 영화는 그야말로 걸작이야.\nB: 동의해, 올해 최고의 영화야.",
     exampleSrc:"A: This movie is truly a masterpiece.\nB: I agree, it is the best movie of the year.",
     funFact:"그야말로 adds strong emphasis. It elevates the statement from observation to conviction."},

    {type:"teach", trg:"그이", src:"that person (intimate/literary)", pos:"pron", gender:null,
     note:"그 (that) + 이 (person suffix).\nA literary way to refer to someone, often a lover.",
     example:"A: 그이를 만난 지 벌써 10년이야.\nB: 세월이 참 빠르다.",
     exampleSrc:"A: It has already been 10 years since I met that person.\nB: Time really flies.",
     funFact:"그이 is literary and nostalgic. In modern spoken Korean, people use names or 그 사람 instead."},

    {type:"teach", trg:"그저", src:"just, merely, simply", pos:"adv", gender:null,
     note:"Native Korean adverb.\nExpresses something is nothing more than what is stated.",
     example:"A: 왜 웃어?\nB: 그저 기분이 좋아서.",
     exampleSrc:"A: Why are you smiling?\nB: Just because I am in a good mood.",
     funFact:"그저 그렇다 (to be just so-so) is a very common expression for something mediocre or unremarkable."},

    {type:"teach", trg:"그저께", src:"the day before yesterday", pos:"noun", gender:null,
     note:"그저 (just) + 께 (time suffix).\nTwo days ago from today.",
     example:"A: 그저께 뭐 했어?\nB: 그저께는 친구를 만났어.",
     exampleSrc:"A: What did you do the day before yesterday?\nB: The day before yesterday I met a friend.",
     funFact:"Part of a time sequence: 모레 (day after tomorrow), 내일 (tomorrow), 오늘 (today), 어제 (yesterday), 그저께(day before yesterday)."},

    {type:"match", pairs:[
      {trg:"그리움", src:"longing, nostalgia"},
      {trg:"그야말로", src:"truly, indeed"},
      {trg:"그저께", src:"day before yesterday"},
      {trg:"그대", src:"you (poetic)"}
    ]}
  ]
};
export default LESSON_13;
