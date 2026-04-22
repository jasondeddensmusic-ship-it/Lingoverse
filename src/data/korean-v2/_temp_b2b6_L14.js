// Korean B2. Batch 6, Lesson 14: Language and Cold
// Words: 어린이날, 어머(interj), 어저께, 어젯밤, 어지럽다, 어째서, 어쨌든, 어쩌다가, 어쩐지, 어쩜, 어찌, 어찌나, 어찌하다, 억, 억울하다, 언덕, 언론, 언어, 얻어먹다, 얼다

const LESSON_14 = {
  id:"kov2_b2b6_l14", title:"어쩐지 그렇더라", icon:"🤔", xp:15, board:true,
  steps:[
    {type:"intro", title:"어쩐지 그렇더라",
     desc:"Learn Korean question words, exclamations, and words about media and language. Many words in this set are uniquely Korean with no direct translation.",
     goals:["Master 20 words including Korean question adverbs and exclamations","Understand the nuances between 어째서, 어찌, 어쩐지, and related forms","Use large numbers and express feelings of injustice"]},

    {type:"teach", trg:"어린이날", src:"Children's Day", pos:"noun", gender:null,
     note:"어린이 (children) + 날 (day).\nKorea's national holiday celebrating children.",
     example:"A: 어린이날에 뭐 할 거야?\nB: 아이들 데리고 놀이공원 갈 거야.",
     exampleSrc:"A: What are you doing on Children's Day?\nB: I am taking the kids to an amusement park.",
     funFact:"May 5th is 어린이날 in Korea. It was established in 1923 by children's rights activist Bang Jeong-hwan."},

    {type:"teach", trg:"어머", src:"oh my (exclamation, feminine)", pos:"intj", gender:null,
     note:"Shortened from 어머나.\nExclamation of surprise, used mostly by women.",
     example:"A: 어머, 이게 누구야!\nB: 오랜만이야!",
     exampleSrc:"A: Oh my, who is this!\nB: Long time no see!",
     funFact:"어머 is considered feminine in Korean. Men typically use 어 or 아 for surprise. 어머나 is the longer form."},

    {type:"teach", trg:"어저께", src:"yesterday (dialect/colloquial)", pos:"noun", gender:null,
     note:"Variant of 어제 (yesterday).\nColloquial or dialectal form heard in casual speech.",
     example:"A: 어저께 뭐 했어?\nB: 친구들 만났어.",
     exampleSrc:"A: What did you do yesterday?\nB: I met some friends.",
     funFact:"어저께 is a softer, older form of 어제. You hear it more in countryside dialects and from older speakers."},

    {type:"teach", trg:"어젯밤", src:"last night", pos:"noun", gender:null,
     note:"어제 (yesterday) + 밤 (night).\nThe previous evening.",
     example:"A: 어젯밤에 잘 잤어?\nB: 아니, 잠을 못 잤어.",
     exampleSrc:"A: Did you sleep well last night?\nB: No, I could not sleep.",
     funFact:"어젯밤 is more natural than 어제 밤 (with a space). Korean often fuses time words: 오늘밤, 어젯밤, 그저께."},

    {type:"mc",
     q:"'어쩐지 오늘 기분이 좋더라'에서 '어쩐지'의 뜻은?",
     opts:["왠지 모르게","갑자기","분명히","아마도"],
     ans:"왠지 모르게",
     hint:"A word expressing a vague feeling that something is the case, without knowing exactly why."},

    {type:"teach", trg:"어지럽다", src:"to be dizzy; to be messy", pos:"adj", gender:null,
     note:"Native Korean adjective.\nPhysical dizziness or visual messiness.",
     example:"A: 머리가 어지러워.\nB: 좀 앉아서 쉬어.",
     exampleSrc:"A: I feel dizzy.\nB: Sit down and rest for a bit.",
     funFact:"어지럽다 describes both dizziness (머리가 어지럽다) and a messy room (방이 어지럽다). Context makes it clear."},

    {type:"teach", trg:"어째서", src:"why, for what reason", pos:"adv", gender:null,
     note:"어찌 (how) + 해서 (doing so).\nAsking the reason, often with frustration.",
     example:"A: 어째서 말을 안 했어?\nB: 말할 기회가 없었어.",
     exampleSrc:"A: Why did you not say anything?\nB: I did not have a chance to speak.",
     funFact:"어째서 is more emotional than 왜 (why). It carries a tone of frustration or disbelief."},

    {type:"teach", trg:"어쨌든", src:"anyway, in any case", pos:"adv", gender:null,
     note:"어찌 + 했든 (however it was).\nMoving past details to the main point.",
     example:"A: 어쨌든 결과가 좋았잖아.\nB: 그건 맞아.",
     exampleSrc:"A: Anyway, the result was good.\nB: That is true.",
     funFact:"어쨌든 is one of the most used transition words in Korean conversation, like 'anyway' in English."},

    {type:"teach", trg:"어쩌다가", src:"by chance, accidentally", pos:"adv", gender:null,
     note:"어찌하다 + -다가 (in the course of).\nSomething happening unintentionally.",
     example:"A: 어쩌다가 이렇게 됐어?\nB: 나도 모르게 실수했어.",
     exampleSrc:"A: How did this happen by accident?\nB: I made a mistake without realizing.",
     funFact:"어쩌다가 implies surprise at an unplanned outcome. It often starts stories about unexpected situations."},

    {type:"teach", trg:"어쩐지", src:"no wonder, somehow", pos:"adv", gender:null,
     note:"어찌 + ㄴ + 지 (whether how).\nRealizing the reason for something after the fact.",
     example:"A: 어쩐지 전화를 안 받더라니 여행 갔었구나.\nB: 응, 미안해.",
     exampleSrc:"A: No wonder you were not answering calls, you were traveling.\nB: Yes, sorry.",
     funFact:"어쩐지 expresses an 'aha' moment. The speaker connects a past observation with a newly learned reason."},

    {type:"teach", trg:"어찌", src:"how (literary); in what way", pos:"adv", gender:null,
     note:"Native Korean question adverb.\nLiterary or formal way of asking 'how.'",
     example:"A: 이 상황을 어찌 해야 할까?\nB: 차분하게 생각해 보자.",
     exampleSrc:"A: What should we do about this situation?\nB: Let's think about it calmly.",
     funFact:"어찌 is the root of many Korean question words: 어째서, 어쩐지, 어쨌든, 어쩌다. It is formal on its own."},

    {type:"teach", trg:"어찌나", src:"so much, how (emphatic surprise)", pos:"adv", gender:null,
     note:"어찌 (how) + 나 (emphasis).\nExpressing surprise at how extreme something is.",
     example:"A: 어찌나 맛있던지 다 먹었어.\nB: 그 정도였어?",
     exampleSrc:"A: It was so delicious that I ate it all.\nB: Was it that good?",
     funFact:"어찌나...던지 is a set pattern meaning 'so much that...' It adds dramatic flair to Korean storytelling."},

    {type:"teach", trg:"억", src:"hundred million (100,000,000)", pos:"num", gender:null,
     note:"Sino-Korean. 億 (hundred million).\nThe Korean counting unit after 만 (ten thousand).",
     example:"A: 그 집이 10억이래.\nB: 서울 집값이 정말 비싸다.",
     exampleSrc:"A: They say that house is 1 billion won.\nB: Seoul house prices are really expensive.",
     funFact:"Korean counts in units of 만 (10K) and 억 (100M), not millions. 1 billion won = 10억 원."},

    {type:"fb",
     s:"로또 1등 당첨금이 50{1} 원이래요.",
     a:["억"],
     opts:["억","만","천","백"],
     hint:"The Korean number unit for 100,000,000. The largest commonly used counting unit.",
     sSrc:"They say the first prize lottery winnings are 50 {1} won."},

    {type:"teach", trg:"억울하다", src:"to feel wronged, to feel unjustly treated", pos:"adj", gender:null,
     note:"Sino-Korean. 抑鬱 (suppressed grievance) + 하다.\nThe frustration of unfair treatment.",
     example:"A: 너무 억울해서 눈물이 나.\nB: 무슨 일이야? 말해 봐.",
     exampleSrc:"A: I feel so wronged that tears are coming.\nB: What happened? Tell me.",
     funFact:"억울하다 is a deeply Korean emotion with no perfect English equivalent. It combines injustice, frustration, and helplessness."},

    {type:"teach", trg:"언덕", src:"hill, slope", pos:"noun", gender:null,
     note:"Native Korean noun.\nA gentle rise in the ground, smaller than a mountain.",
     example:"A: 이 언덕을 올라가면 바다가 보여.\nB: 진짜? 빨리 가자!",
     exampleSrc:"A: If you go up this hill, you can see the ocean.\nB: Really? Let's go quickly!",
     funFact:"Seoul is built on many 언덕. The hilly geography is why Korean neighborhoods often have steep streets."},

    {type:"teach", trg:"언론", src:"the press, media", pos:"noun", gender:null,
     note:"Sino-Korean. 言 (speech) + 論 (discussion).\nMass media and journalism collectively.",
     example:"A: 언론에서 크게 보도했어.\nB: 어떤 내용이었어?",
     exampleSrc:"A: The media reported it widely.\nB: What was the content?",
     funFact:"언론의 자유 (freedom of the press) is a cornerstone of Korean democracy, hard-won through the 1980s movement."},

    {type:"teach", trg:"언어", src:"language", pos:"noun", gender:null,
     note:"Sino-Korean. 言 (speech) + 語 (words).\nA system of human communication.",
     example:"A: 몇 개 언어를 할 수 있어?\nB: 한국어랑 영어, 두 개.",
     exampleSrc:"A: How many languages can you speak?\nB: Korean and English, two.",
     funFact:"Korean (한국어) uses its own unique alphabet, Hangul. King Sejong created it in 1443 to increase literacy."},

    {type:"teach", trg:"얻어먹다", src:"to mooch food, to get a free meal", pos:"verb", gender:null,
     note:"얻다 (to get) + 어 + 먹다 (to eat).\nEating at someone else's expense.",
     example:"A: 오늘 친구한테 밥을 얻어먹었어.\nB: 다음에는 네가 사.",
     exampleSrc:"A: I got a free meal from a friend today.\nB: Next time, you should treat.",
     funFact:"Korean dining culture revolves around 사다 (to treat) and 얻어먹다 (to be treated). Taking turns is expected."},

    {type:"teach", trg:"얼다", src:"to freeze", pos:"verb", gender:null,
     note:"Native Korean verb.\nBecoming solid from cold or being extremely cold.",
     example:"A: 물이 다 얼었어.\nB: 오늘 영하 10도래.",
     exampleSrc:"A: The water has completely frozen.\nB: They say it is minus 10 degrees today.",
     funFact:"Korean winters in Seoul regularly see temperatures where 한강이 얼다 (the Han River freezes). It is a winter milestone."},

    {type:"mc",
     q:"'억울하다'에 가장 가까운 뜻은?",
     opts:["걱정되다","부당한 대우에 속상하다","화가 나다","슬프다"],
     ans:"부당한 대우에 속상하다",
     hint:"The unique feeling of being unfairly treated, with frustration and helplessness combined."},

    {type:"match", pairs:[
      {trg:"어쨌든", src:"anyway"},
      {trg:"어쩐지", src:"no wonder"},
      {trg:"언론", src:"the press"},
      {trg:"언어", src:"language"}
    ]}
  ]
};

export default LESSON_14;
