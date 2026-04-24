// Korean B1 Final Gap - Lesson 17: Superlatives & Emphasis
const LESSON_17 = {
  id:"kov2_b1fin_l17", title:"최고와 강조", icon:"🥇", xp:15, board:true,
  steps:[
    {type:"intro", title:"Superlatives & Emphasis",
     desc:"Master words for extremes, rankings, and emphasis. These adverbs and nouns help you express 'the most,' 'the best,' 'especially,' and 'exactly.'",
     goals:["Learn 20 words for superlatives, rankings, and emphasis","Express 'the most,' 'especially,' and 'exactly'","Use intensifiers and focus adverbs naturally"]},

    {type:"teach", trg:"최고", src:"the best, the highest, the greatest", pos:"noun", gender:null,
     note:"Sino-Korean (最高). 최 (最) = most, 고 (高) = high.",
     example:"A: 최고의 한국 음식이 뭐예요?\nB: 비빔밥이 최고예요!",
     exampleSrc:"A: What's the best Korean food?\nB: Bibimbap is the best!",
     funFact:"최고 is used as an exclamation: 최고! (the best!). K-pop fans shout 최고 at concerts. It is also a common social media comment."},

    {type:"teach", trg:"최근", src:"recently, lately", pos:"noun", gender:null,
     note:"Sino-Korean (最近). 최 (最) = most, 근 (近) = near.",
     example:"A: 최근에 좋은 영화 봤어요?\nB: 네, 최근에 본 영화 중에 하나 추천할게요.",
     exampleSrc:"A: Have you seen a good movie recently?\nB: Yes, I'll recommend one from what I've seen recently.",
     funFact:"최근 is the formal version of 요즘 (these days). News uses 최근: 최근 조사에 따르면 (according to recent surveys)."},

    {type:"teach", trg:"최대", src:"maximum, the largest", pos:"noun", gender:null,
     note:"Sino-Korean (最大). 최 (最) = most, 대 (大) = big.",
     example:"A: 최대 몇 명까지 가능해요?\nB: 최대 50명까지 가능해요.",
     exampleSrc:"A: What's the maximum number of people?\nB: Up to a maximum of 50 people.",
     funFact:"최대 and 최소 (minimum) are always paired in specifications: 최대 속도 (max speed), 최소 인원 (minimum personnel). Formal and precise."},

    {type:"teach", trg:"최선", src:"one's best, the best effort", pos:"noun", gender:null,
     note:"Sino-Korean (最善). 최 (最) = most, 선 (善) = good.",
     example:"A: 최선을 다했어요?\nB: 네, 최선을 다했어요. 후회 없어요.",
     exampleSrc:"A: Did you do your best?\nB: Yes, I did my best. No regrets.",
     funFact:"최선을 다하다 (to do one's best) is the Korean motto for life. Students, athletes, and workers all aim to show they gave 최선."},

    {type:"teach", trg:"최소한", src:"at least, at the minimum", pos:"noun", gender:null,
     note:"Sino-Korean (最少限). The bare minimum threshold.",
     example:"A: 최소한 몇 시간 자야 해요?\nB: 최소한 7시간은 자야 해요.",
     exampleSrc:"A: How many hours should you sleep at least?\nB: You should sleep at least 7 hours.",
     funFact:"최소한 sets a floor: 최소한 이것만은 (at least this much). It contrasts with 최대한 (to the maximum extent possible)."},

    {type:"mc",
     q:"'최선을 다하다'의 의미는?",
     opts:["가장 노력하다","가장 많이 하다","가장 먼저 하다","가장 빨리 하다"],
     ans:"가장 노력하다",
     hint:"This phrase means putting in the greatest possible effort, doing your absolute best."},

    {type:"teach", trg:"최초", src:"the first, the very first, the earliest", pos:"noun", gender:null,
     note:"Sino-Korean (最初). 최 (最) = most, 초 (初) = beginning.",
     example:"A: 한글은 누가 최초로 만들었어요?\nB: 세종대왕이 최초로 만들었어요.",
     exampleSrc:"A: Who first created Hangul?\nB: King Sejong created it first.",
     funFact:"최초 emphasizes being the absolute first: 세계 최초 (world's first), 한국 최초 (Korea's first). It carries prestige and pride."},

    {type:"teach", trg:"훨씬", src:"by far, much more, significantly", pos:"adv", gender:null,
     note:"Native Korean adverb. A big difference in comparison.",
     example:"A: 서울이 부산보다 커요?\nB: 네, 서울이 훨씬 커요.",
     exampleSrc:"A: Is Seoul bigger than Busan?\nB: Yes, Seoul is much bigger.",
     funFact:"훨씬 amplifies any comparison: 훨씬 좋다 (much better), 훨씬 빠르다 (much faster). It signals the gap is large, not marginal."},

    {type:"teach", trg:"특히", src:"especially, particularly, in particular", pos:"adv", gender:null,
     note:"Sino-Korean (特). Highlighting one thing above others.",
     example:"A: 한국 음식 좋아해요?\nB: 네, 특히 김치찌개를 좋아해요.",
     exampleSrc:"A: Do you like Korean food?\nB: Yes, I especially like kimchi stew.",
     funFact:"특히 is one of the most frequently used Korean adverbs. TOPIK essays love it as a transition: 특히 (especially/in particular)."},

    {type:"teach", trg:"특징", src:"characteristic, feature, trait", pos:"noun", gender:null,
     note:"Sino-Korean (特徵). 특 (特) = special, 징 (徵) = sign/mark.",
     example:"A: 이 제품의 특징이 뭐예요?\nB: 가볍고 튼튼한 게 특징이에요.",
     exampleSrc:"A: What's the feature of this product?\nB: Being light and sturdy is its characteristic.",
     funFact:"특징 is the go-to word for describing what makes something unique: 한국어의 특징 (characteristics of Korean), 이 지역의 특징 (features of this area)."},

    {type:"fb",
     s:"한국 음식 중에서 {1} 불고기를 좋아해요.",
     a:["특히"],
     opts:["특히","훨씬","최고","최근"],
     hint:"This adverb singles out one item as particularly notable among a group.",
     sSrc:"Among Korean foods, I {1} like bulgogi."},

    {type:"teach", trg:"오직", src:"only, solely, exclusively", pos:"adv", gender:null,
     note:"Native Korean adverb. Nothing else but this one thing.",
     example:"A: 오직 한 가지만 선택할 수 있어요.\nB: 그럼 오직 이것만 할게요.",
     exampleSrc:"A: You can choose only one thing.\nB: Then I'll do only this.",
     funFact:"오직 is more emphatic than 단지 (just/merely). 오직 너만 (only you) is a romantic phrase seen in Korean songs and dramas."},

    {type:"teach", trg:"유난히", src:"exceptionally, unusually, remarkably", pos:"adv", gender:null,
     note:"Derived from 유난하다 (to be exceptional). Adverb form.",
     example:"A: 올해 겨울이 유난히 추워요.\nB: 맞아요, 예년보다 유난히 추운 것 같아요.",
     exampleSrc:"A: This winter is exceptionally cold.\nB: Right, it seems unusually cold compared to other years.",
     funFact:"유난히 implies deviation from the norm: 유난히 밝다 (unusually bright), 유난히 조용하다 (unusually quiet). It highlights the unexpected."},

    {type:"teach", trg:"역시", src:"as expected, indeed, also, after all", pos:"adv", gender:null,
     note:"Sino-Korean (亦是). Confirming what was already believed.",
     example:"A: 이 식당 맛있죠?\nB: 역시! 역시 여기가 최고예요.",
     exampleSrc:"A: This restaurant is delicious, right?\nB: Indeed! As expected, this place is the best.",
     funFact:"역시 is incredibly versatile: confirming expectations (역시 그럴 줄 알았어 = I knew it), showing admiration (역시 대단해 = impressive as expected)."},

    {type:"teach", trg:"주로", src:"mainly, primarily, mostly", pos:"adv", gender:null,
     note:"Sino-Korean (主). Indicating the main tendency or activity.",
     example:"A: 주로 뭘 해요?\nB: 주로 집에서 책을 읽어요.",
     exampleSrc:"A: What do you mainly do?\nB: I mainly read books at home.",
     funFact:"주로 is the casual way to express main habits: 주로 뭘 먹어요? (what do you mainly eat?), 주로 어디에 가요? (where do you mainly go?)."},

    {type:"teach", trg:"우선", src:"first of all, for now, priority", pos:"adv", gender:null,
     note:"Sino-Korean (優先). Establishing what comes first.",
     example:"A: 우선 뭘 해야 해요?\nB: 우선 계획이 필요해요.",
     exampleSrc:"A: What should we do first?\nB: First, we need a plan.",
     funFact:"우선순위 (priority order) combines 우선 + 순위 (ranking). Korean companies obsess over 우선순위 in project management."},

    {type:"match", pairs:[
      {trg:"역시", src:"as expected/indeed"},
      {trg:"오직", src:"only/solely"},
      {trg:"주로", src:"mainly"},
      {trg:"우선", src:"first of all"},
      {trg:"훨씬", src:"by far/much more"}
    ]},

    {type:"teach", trg:"진짜", src:"real, genuine, really", pos:"noun", gender:null,
     note:"Sino-Korean (眞). Used as noun (the real thing) and adverb (really).",
     example:"A: 이거 진짜예요?\nB: 네, 진짜 가죽이에요.",
     exampleSrc:"A: Is this real?\nB: Yes, it's genuine leather.",
     funFact:"진짜 and 정말 both mean 'really,' but 진짜 is slightly more casual. Young Koreans use 진짜? (really?) constantly in conversation."},

    {type:"teach", trg:"직접", src:"directly, in person, personally", pos:"noun", gender:null,
     note:"Sino-Korean (直接). 직 (直) = straight, 접 (接) = connect.",
     example:"A: 직접 만들었어요?\nB: 네, 제가 직접 만들었어요.",
     exampleSrc:"A: Did you make it yourself?\nB: Yes, I made it personally.",
     funFact:"직접 emphasizes hands-on involvement: 직접 요리하다 (cook personally), 직접 가다 (go in person). It shows effort and authenticity."},

    {type:"teach", trg:"정도", src:"degree, extent, about/approximately", pos:"noun", gender:null,
     note:"Sino-Korean (程度). How much of something. Also 'approximately.'",
     example:"A: 얼마 정도 걸려요?\nB: 30분 정도 걸려요.",
     exampleSrc:"A: About how long does it take?\nB: It takes about 30 minutes.",
     funFact:"정도 after numbers means 'approximately': 10명 정도 (about 10 people). As a noun: 어느 정도 (to what extent). Extremely common."},

    {type:"teach", trg:"정말로", src:"truly, really, genuinely", pos:"adv", gender:null,
     note:"정말 (really) + 로 (particle). Emphatic form of 정말.",
     example:"A: 정말로 갈 거예요?\nB: 네, 정말로 갈 거예요.",
     exampleSrc:"A: Are you really going?\nB: Yes, I'm really going.",
     funFact:"정말로 adds weight to 정말. When someone says 정말로, they are emphasizing sincerity. It is used when the listener might doubt you."},

    {type:"teach", trg:"절대로", src:"absolutely, never (with negatives)", pos:"adv", gender:null,
     note:"Sino-Korean (絕對). The strongest level of emphasis.",
     example:"A: 이건 절대로 말하면 안 돼요.\nB: 알겠어요, 절대로 안 말할게요.",
     exampleSrc:"A: You must absolutely never tell anyone this.\nB: I understand, I will absolutely not tell.",
     funFact:"절대로 + negative = absolute prohibition. 절대로 하지 마 (absolutely do not). It is the strongest 'never' in Korean."},

    {type:"teach", trg:"한꺼번에", src:"all at once, at the same time", pos:"adv", gender:null,
     note:"Native Korean compound. Doing everything together simultaneously.",
     example:"A: 한꺼번에 다 할 수 있어요?\nB: 아니요, 하나씩 해야 해요.",
     exampleSrc:"A: Can you do it all at once?\nB: No, I need to do them one by one.",
     funFact:"한꺼번에 contrasts with 하나씩 (one by one). The question of whether to tackle things 한꺼번에 or 하나씩 is a common practical dilemma."},

    {type:"mc",
     q:"'이건 _____ 비밀이에요!'에서 가장 강한 표현은?",
     opts:["정말로","절대로","특히","역시"],
     ans:"절대로",
     hint:"This is the strongest emphasis word, meaning absolutely, used with secrets you must never share."}
  ]
};
export default LESSON_17;
