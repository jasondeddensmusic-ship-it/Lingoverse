// Korean B2. Batch 2, Lesson 9: Agriculture and Logic
// Words: 녹화, 논, 논리, 논리적, 논하다, 놀리다, 놀이터, 놈, 농민, 농부, 농사일, 농사짓다, 농산물, 농장, 놓아두다, 놔두다, 뇌, 눈가, 눈감다, 눈길

const LESSON_9 = {
  id:"kov2_b2b2_l9", title:"논리와 농촌", icon:"🌾", xp:15, board:true,
  steps:[
    {type:"intro", title:"논리와 농촌",
     desc:"Learn vocabulary for farming, logical thinking, and everyday observations. A mix of rural life and intellectual discourse.",
     goals:["Master 20 words about agriculture and reasoning","Understand farming compound words","Build academic vocabulary for arguments and debate"]},

    {type:"teach", trg:"녹화", src:"video recording; greening/afforestation", pos:"noun", gender:null,
     note:"Two Hanja: 錄畵 (record video) or 綠化 (make green).\nVideo recording is the common modern use.",
     example:"A: 방송 녹화가 언제예요?\nB: 내일 오후에 녹화합니다.",
     exampleSrc:"A: When is the broadcast recording?\nB: We will record tomorrow afternoon.",
     funFact:"녹화 (video) vs 녹음 (audio). Korean keeps them separate: 화 (畵, picture) vs 음 (音, sound)."},

    {type:"teach", trg:"논", src:"rice paddy, wet field", pos:"noun", gender:null,
     note:"Native Korean. A flooded field\nwhere rice is cultivated.",
     example:"A: 논에 물이 가득 차 있어요.\nB: 모내기 철이 됐나 봐요.",
     exampleSrc:"A: The rice paddy is full of water.\nB: It must be rice planting season.",
     funFact:"논 (wet paddy) vs 밭 (dry field). This distinction is fundamental to Korean agriculture vocabulary."},

    {type:"teach", trg:"논리", src:"logic, reasoning", pos:"noun", gender:null,
     note:"Sino-Korean. 論 (discuss) + 理 (principle).\nThe principles of correct reasoning.",
     example:"A: 이 주장에는 논리가 부족해요.\nB: 더 많은 근거가 필요하겠네요.",
     exampleSrc:"A: This argument lacks logic.\nB: More evidence seems necessary.",
     funFact:"논리학 (logic as an academic field) uses the same root. 논리적 사고 (logical thinking) is prized in Korean education."},

    {type:"teach", trg:"논리적", src:"logical", pos:"noun", gender:null,
     note:"논리 (logic) + 적 (-like suffix).\nBehaving in accordance with reason.",
     example:"A: 논리적으로 생각해 봅시다.\nB: 좋아요, 하나씩 분석합시다.",
     exampleSrc:"A: Let us think logically.\nB: Okay, let us analyze one by one.",
     funFact:"논리적 is the adjective form. 감정적 (emotional) is its common contrast in Korean debate culture."},

    {type:"teach", trg:"논하다", src:"to discuss, to debate", pos:"verb", gender:null,
     note:"Sino-Korean. 論 (discuss) + 하다.\nTo formally discuss or argue about a topic.",
     example:"A: 이 문제에 대해 논합시다.\nB: 각자의 의견을 먼저 정리합시다.",
     exampleSrc:"A: Let us discuss this issue.\nB: Let us first organize our individual opinions.",
     funFact:"논하다 is more formal than 이야기하다. It implies structured debate, not casual chatting."},

    {type:"teach", trg:"놀리다", src:"to tease, to make fun of", pos:"verb", gender:null,
     note:"Causative of 놀다 (play). To cause play,\nbut colloquially: to tease someone.",
     example:"A: 친구들이 나를 놀렸어.\nB: 장난이었을 거야, 신경 쓰지 마.",
     exampleSrc:"A: My friends teased me.\nB: They were just joking. Do not worry about it.",
     funFact:"놀리다 originally means 'to make someone play' but evolved to mean 'tease.' Causative verbs shift meaning."},

    {type:"mc",
     q:"'논'과 '밭'의 차이는?",
     opts:["논은 물이 있고, 밭은 마른 땅이다","논은 크고, 밭은 작다","논은 산에 있고, 밭은 평야에 있다","차이가 없다"],
     ans:"논은 물이 있고, 밭은 마른 땅이다",
     hint:"One is flooded for rice growing, the other is a dry field for vegetables and grains."},

    {type:"teach", trg:"놀이터", src:"playground", pos:"noun", gender:null,
     note:"놀이 (play) + 터 (ground/site).\nA place designated for children to play.",
     example:"A: 아이들이 놀이터에서 놀고 있어요.\nB: 날씨가 좋으니까 밖에서 노는 게 좋죠.",
     exampleSrc:"A: The children are playing at the playground.\nB: The weather is nice, so playing outside is good.",
     funFact:"터 means 'site/ground': 주차장 터 (parking lot site), 집터 (house plot), 놀이터 (play ground)."},

    {type:"teach", trg:"놈", src:"fellow, guy (rough/casual)", pos:"noun", gender:null,
     note:"Bound noun. A casual or rough way\nto refer to a male person or creature.",
     example:"A: 그 놈이 또 말썽을 부렸어.\nB: 이번엔 뭘 했는데?",
     exampleSrc:"A: That guy caused trouble again.\nB: What did he do this time?",
     funFact:"놈 is informal and can be rude. It can be affectionate among close male friends or derogatory otherwise."},

    {type:"teach", trg:"농민", src:"farmer, peasant", pos:"noun", gender:null,
     note:"Sino-Korean. 農 (farming) + 民 (people).\nPeople who work the land.",
     example:"A: 농민들이 시위를 하고 있어요.\nB: 쌀 가격 문제 때문이래요.",
     exampleSrc:"A: Farmers are protesting.\nB: It is because of rice price issues.",
     funFact:"농민 is the formal/political term. 농부 is more personal and warmer. News uses 농민, stories use 농부."},

    {type:"teach", trg:"농부", src:"farmer", pos:"noun", gender:null,
     note:"Sino-Korean. 農 (farming) + 夫 (man).\nA person who farms the land.",
     example:"A: 농부 아저씨가 매일 새벽에 일어나요.\nB: 정말 부지런하시네요.",
     exampleSrc:"A: The farmer uncle wakes up at dawn every day.\nB: He is really diligent.",
     funFact:"농부 has a warmer, storytelling feel. The famous song '농부의 노래' (Farmer's Song) uses this word."},

    {type:"teach", trg:"농사일", src:"farm work, agricultural labor", pos:"noun", gender:null,
     note:"농사 (farming) + 일 (work).\nThe physical labor of farming.",
     example:"A: 농사일이 정말 힘들어요.\nB: 특히 여름에 더울 때 힘들죠.",
     exampleSrc:"A: Farm work is really hard.\nB: Especially when it is hot in summer.",
     funFact:"농사일 is a compound of 농사 (agriculture) + 일 (work). Korean often doubles the specificity this way."},

    {type:"fb",
     s:"이 주장에는 {1}가 부족해요.",
     a:["논리"],
     opts:["논리","농사","녹화","놀이"],
     hint:"The quality of reasoning or structured argument that makes a claim convincing.",
     sSrc:"This argument lacks {1}."},

    {type:"teach", trg:"농사짓다", src:"to farm, to cultivate crops", pos:"verb", gender:null,
     note:"농사 (farming) + 짓다 (to build/make).\nTo engage in the act of farming.",
     example:"A: 할아버지는 평생 농사를 지었어요.\nB: 대단하시네요.",
     exampleSrc:"A: Grandfather farmed his entire life.\nB: That is impressive.",
     funFact:"짓다 combines with many nouns: 집을 짓다 (build a house), 밥을 짓다 (cook rice), 농사를 짓다 (farm)."},

    {type:"teach", trg:"농산물", src:"agricultural products", pos:"noun", gender:null,
     note:"Sino-Korean. 農 (farming) + 産 (produce) + 物 (things).\nGoods produced through farming.",
     example:"A: 지역 농산물을 사는 게 좋아요.\nB: 신선하고 농민도 도울 수 있죠.",
     exampleSrc:"A: It is good to buy local agricultural products.\nB: They are fresh and it helps farmers.",
     funFact:"농산물 시장 (agricultural market) is where fresh produce is sold. Korea has famous ones in every city."},

    {type:"teach", trg:"농장", src:"farm, ranch", pos:"noun", gender:null,
     note:"Sino-Korean. 農 (farming) + 場 (place).\nA place where farming takes place.",
     example:"A: 주말에 농장 체험을 갈까요?\nB: 좋아요, 아이들이 좋아할 거예요.",
     exampleSrc:"A: Shall we go to a farm experience this weekend?\nB: Sure, the kids will love it.",
     funFact:"농장 체험 (farm experience) is a popular Korean family activity. Picking strawberries is the top choice."},

    {type:"teach", trg:"놓아두다", src:"to leave as is, to let be", pos:"verb", gender:null,
     note:"놓다 (place) + 아 + 두다 (keep).\nTo place something and leave it there.",
     example:"A: 그 문제는 잠시 놓아두세요.\nB: 나중에 다시 생각해 볼게요.",
     exampleSrc:"A: Leave that issue alone for a while.\nB: I will think about it again later.",
     funFact:"놓아두다 and 놔두다 are the same word. 놔두다 is the contracted casual form used in speech."},

    {type:"teach", trg:"놔두다", src:"to leave alone, to let be", pos:"verb", gender:null,
     note:"Contraction of 놓아두다.\nMore casual and common in everyday speech.",
     example:"A: 그냥 놔둬, 나중에 할게.\nB: 알겠어.",
     exampleSrc:"A: Just leave it, I will do it later.\nB: Okay.",
     funFact:"놔두다 shows Korean's love of contractions: 놓아두다 > 놔두다. Similarly: 보아 > 봐, 가지고 > 갖고."},

    {type:"mc",
     q:"'농산물'의 뜻으로 맞는 것은?",
     opts:["숲에서 모은 것","농사로 생산한 물건","공장에서 만든 물건","바다에서 잡은 것"],
     ans:"농사로 생산한 물건",
     hint:"Products that come from agricultural cultivation, like vegetables, rice, and fruit."},

    {type:"teach", trg:"뇌", src:"brain", pos:"noun", gender:null,
     note:"Sino-Korean. 腦 (brain).\nThe organ inside the skull that controls thought.",
     example:"A: 뇌 건강을 위해 뭘 해야 하나요?\nB: 충분한 수면과 운동이 중요해요.",
     exampleSrc:"A: What should I do for brain health?\nB: Sufficient sleep and exercise are important.",
     funFact:"뇌 appears in medical compounds: 뇌졸중 (stroke), 뇌과학 (brain science), 뇌파 (brain waves)."},

    {type:"teach", trg:"눈가", src:"area around the eyes", pos:"noun", gender:null,
     note:"눈 (eye) + 가 (edge/area).\nThe skin and area surrounding the eyes.",
     example:"A: 눈가에 주름이 생겼어요.\nB: 웃음 주름은 예쁜 거예요.",
     exampleSrc:"A: I got wrinkles around my eyes.\nB: Laugh lines are beautiful.",
     funFact:"눈가 is a poetic word often used in literature: 눈가가 촉촉해지다 (eyes becoming moist with emotion)."},

    {type:"teach", trg:"눈감다", src:"to close one's eyes; to turn a blind eye", pos:"verb", gender:null,
     note:"눈 (eye) + 감다 (to close/wind).\nLiterally close eyes, or figuratively ignore.",
     example:"A: 이번만 눈감아 주세요.\nB: 마지막이에요, 다음엔 안 돼요.",
     exampleSrc:"A: Please turn a blind eye just this once.\nB: This is the last time. Next time, no.",
     funFact:"눈감다 has a euphemistic meaning too: to pass away (close one's eyes forever). Context is critical."},

    {type:"teach", trg:"눈길", src:"gaze, attention; snowy road", pos:"noun", gender:null,
     note:"눈 (eye or snow) + 길 (road/path).\nThe path of one's gaze, or a snow-covered road.",
     example:"A: 그 작품이 눈길을 끌었어요.\nB: 정말 독특한 디자인이었죠.",
     exampleSrc:"A: That artwork caught my attention.\nB: It really was a unique design.",
     funFact:"눈길을 끌다 (to catch one's eye) is very common. 눈길을 주다 (to give attention) is its companion phrase."},

    {type:"match", pairs:[
      {trg:"논", src:"rice paddy"},
      {trg:"뇌", src:"brain"},
      {trg:"농장", src:"farm"},
      {trg:"논리", src:"logic"},
      {trg:"눈길", src:"gaze"}
    ]},

    {type:"fb",
     s:"그 광고가 사람들의 {1}을 끌었어요.",
     a:["눈길"],
     opts:["눈길","눈가","논리","농사"],
     hint:"The path of someone's gaze or attention. Something that 'catches the eye.'",
     sSrc:"That advertisement caught people's {1}."}
  ]
};
export default LESSON_9;
