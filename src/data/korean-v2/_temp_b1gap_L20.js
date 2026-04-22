// Korean B1 Gap - Lesson 20: Determiners, Bound Nouns, and Remaining Function Words
const LESSON_20 = {
  id:"kov2_b1gap_l20", title:"관형사와 의존명사", icon:"🧩", xp:15, board:true,
  steps:[
    {type:"intro", title:"Determiners, Bound Nouns, and Function Words",
     desc:"Master the small but critical words that hold Korean sentences together: determiners that modify nouns, bound nouns that complete grammar patterns, and versatile function words.",
     goals:["Learn 20 determiners, bound nouns, and function words","Understand how bound nouns create grammar patterns","Use determiners for precision and nuance"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"각", src:"each, every, respective", pos:"det", gender:null,
     note:"Sino-Korean determiner. Placed before nouns: 각 나라 (each country).",
     example:"A: 각 팀에 몇 명이에요?\nB: 각 팀에 5명씩이에요.\nA: 총 20명이네요.",
     exampleSrc:"A: How many people per team?\nB: 5 people in each team.\nA: That's 20 total.",
     funFact:"From hanja 各 (each). Also appears in 각자 (each person), 각각 (each one individually), and 각종 (each kind/all sorts). Very productive prefix."},

    {type:"teach", trg:"각각", src:"each one, individually", pos:"adv", gender:null,
     note:"Reduplicated form of 각. Emphasizes that items are considered separately.",
     example:"A: 선물을 어떻게 줄까요?\nB: 각각 다른 선물을 주세요.\nA: 알겠어요, 따로 준비할게요.",
     exampleSrc:"A: How should we give the gifts?\nB: Give each person a different gift.\nA: Got it, I'll prepare them separately.",
     funFact:"각각 vs. 각: 각 modifies the following noun (각 사람), while 각각 functions as an adverb (각각 다르다 = each one is different). Subtle but important distinction."},

    {type:"teach", trg:"단", src:"only, merely, but", pos:"det", gender:null,
     note:"Restrictor. Limits to a small amount: 단 하나 (only one), 단 한 번 (only once).",
     example:"A: 기회가 몇 번 있어요?\nB: 단 한 번뿐이에요.\nA: 그러면 잘 준비해야겠어요.",
     exampleSrc:"A: How many chances are there?\nB: Only one.\nA: Then I'd better prepare well.",
     funFact:"단 is punchy and dramatic. 단 하루 (only one day), 단 한 사람 (only one person). Korean dramas love this word for dramatic reveals and tense moments."},

    {type:"teach", trg:"딴", src:"other, different", pos:"det", gender:null,
     note:"Native Korean determiner. 딴 생각 (different thoughts), 딴 사람 (another person).",
     example:"A: 딴 데 가지 말고 여기 있어요.\nB: 알겠어요, 여기 있을게요.\nA: 금방 올게요.",
     exampleSrc:"A: Don't go anywhere else, stay here.\nB: Okay, I'll stay here.\nA: I'll be right back.",
     funFact:"딴 carries a slight negative nuance of 'wrong' or 'irrelevant.' 딴짓하다 means 'to goof off/do unrelated things.' Teachers scold students: 딴짓하지 마!"},

    {type:"teach", trg:"맨", src:"bare, very first/last, extreme", pos:"det", gender:null,
     note:"Intensifying determiner. 맨 앞 (very front), 맨 뒤 (very back), 맨손 (bare hands).",
     example:"A: 줄에서 맨 앞에 있었어요?\nB: 네, 아침 일찍 와서 맨 처음이었어요.\nA: 부지런하시네요!",
     exampleSrc:"A: Were you at the very front of the line?\nB: Yes, I came early in the morning and was the very first.\nA: How diligent!",
     funFact:"맨 is versatile: 맨발 (bare feet), 맨땅 (bare ground), 맨 위 (very top), 맨 아래 (very bottom). It always means the most extreme position or the most stripped-down state."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'단 한 번의 기회'에서 '단'의 역할은?",
     opts:["'오직'이라는 뜻으로 제한","'각각'이라는 뜻","'다른'이라는 뜻","'맨 처음'이라는 뜻"],
     ans:"'오직'이라는 뜻으로 제한",
     hint:"This determiner restricts quantity to emphasize how limited something is. Think 'merely' or 'only.'"},

    {type:"fb",
     s:"{1} 앞에 서고 싶어요.",
     a:["맨"],
     opts:["맨","딴","단","각"],
     hint:"An intensifying determiner meaning 'the very' in terms of extreme position. The very front.",
     sSrc:"I want to stand at the {1} front."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"몇몇", src:"some, several", pos:"det", gender:null,
     note:"Reduplicated form of 몇 (how many/some). Indicates an unspecified small number.",
     example:"A: 파티에 누가 왔어요?\nB: 몇몇 친구들이 왔어요.\nA: 몇 명이요?",
     exampleSrc:"A: Who came to the party?\nB: Some friends came.\nA: How many?",
     funFact:"몇몇 is vaguer than 몇 (a few). It suggests 'some, but I'm not being specific about how many.' It is common in written Korean and formal reports."},

    {type:"teach", trg:"군", src:"Mr. (bound noun, casual)", pos:"noun", gender:null,
     note:"Bound noun. Attached to male names in semi-formal contexts. Less formal than 씨.",
     example:"A: 김철수 군, 앞으로 나오세요.\nB: 네, 선생님.\nA: 발표를 시작하세요.",
     exampleSrc:"A: Mr. Kim Cheolsu, come to the front.\nB: Yes, teacher.\nA: Please start your presentation.",
     funFact:"군 is used by teachers for male students, or in military/official contexts. The female equivalent is 양 (Miss). Both are declining in daily use but still appear in formal settings."},

    {type:"teach", trg:"데", src:"place, occasion, case (bound noun)", pos:"noun", gender:null,
     note:"Extremely versatile bound noun. Requires a modifier: 가는 데 (place of going).",
     example:"A: 맛있는 데 알아요?\nB: 네, 좋은 데 알아요. 같이 가요.\nA: 좋아요!",
     exampleSrc:"A: Do you know a good place?\nB: Yes, I know a nice place. Let's go together.\nA: Great!",
     funFact:"데 is one of Korean's most important bound nouns. V-는 데 (place where), V-는 데 시간이 걸리다 (it takes time to), A/V-ㄴ/는데 (context/contrast). Mastering 데 unlocks many patterns."},

    {type:"teach", trg:"듯이", src:"as if, as though (bound noun)", pos:"noun", gender:null,
     note:"Creates similes. Attached after verb stems: 웃는 듯이 (as if smiling).",
     example:"A: 하늘을 나는 듯이 기분이 좋아요.\nB: 무슨 좋은 일 있어요?\nA: 시험에 합격했어요!",
     exampleSrc:"A: I feel as if I'm flying in the sky.\nB: Did something good happen?\nA: I passed the exam!",
     funFact:"듯이 creates vivid comparisons: 꿈꾸는 듯이 (as if dreaming), 죽는 듯이 아프다 (hurt as if dying). It is more literary than -처럼 but very common in writing and songs."},

    {type:"teach", trg:"나다", src:"to occur, to happen, to appear", pos:"aux", gender:null,
     note:"Auxiliary-like verb. Combined with nouns: 냄새가 나다, 소리가 나다, 열이 나다.",
     example:"A: 무슨 냄새가 나요?\nB: 빵 굽는 냄새가 나요.\nA: 맛있겠다!",
     exampleSrc:"A: What's that smell?\nB: It smells like baking bread.\nA: That must be delicious!",
     funFact:"나다 is a super-verb: 땀이 나다 (sweat comes out), 화가 나다 (anger rises), 생각이 나다 (a thought occurs), 힘이 나다 (energy appears). The common thread is something emerging."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"데", src:"place, occasion"},
      {trg:"듯이", src:"as if, as though"},
      {trg:"몇몇", src:"some, several"},
      {trg:"나다", src:"to occur, appear"}
    ]},

    {type:"mc",
     q:"'무슨 냄새가 나요?'에서 '나다'는 무슨 뜻이에요?",
     opts:["나가다","발생하다, 생기다","나오다","낳다"],
     ans:"발생하다, 생기다",
     hint:"In this context with a smell, the verb means something is emerging or being perceived. It occurs."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"가지", src:"kind, type, sort", pos:"noun", gender:null,
     note:"Counter-like noun for types or varieties. 여러 가지 (various kinds).",
     example:"A: 몇 가지 질문이 있어요.\nB: 네, 말씀하세요.\nA: 세 가지만 물어볼게요.",
     exampleSrc:"A: I have a few questions.\nB: Yes, go ahead.\nA: I'll ask just three things.",
     funFact:"가지 literally means 'branch' (of a tree). The metaphor: different types branch out from one category, like branches from a trunk. 여러 가지 = many branches = many kinds."},

    {type:"teach", trg:"멀리", src:"far away, in the distance", pos:"adv", gender:null,
     note:"From 멀다 (to be far). The adverb form for distance.",
     example:"A: 학교가 멀리 있어요?\nB: 아니요, 걸어서 10분이면 돼요.\nA: 가깝네요!",
     exampleSrc:"A: Is the school far away?\nB: No, it's just 10 minutes on foot.\nA: That's close!",
     funFact:"멀리서 보다 (to watch from afar) is a common poetic expression in Korean songs. Adding 서 makes it 'from far away.' 멀리멀리 (far, far away) is a children's expression."},

    {type:"teach", trg:"마주", src:"face to face, facing each other", pos:"adv", gender:null,
     note:"Describes two things/people facing each other directly.",
     example:"A: 우연히 길에서 마주쳤어요.\nB: 반가웠겠네요!\nA: 네, 오랜만이라 반가웠어요.",
     exampleSrc:"A: I ran into them face to face on the street.\nB: You must have been happy!\nA: Yes, it had been a long time, so I was glad.",
     funFact:"마주 + verb creates many compounds: 마주치다 (to bump into), 마주보다 (to face each other), 마주앉다 (to sit across from). All involve two parties facing one another."},

    {type:"teach", trg:"딱", src:"exactly, precisely", pos:"adv", gender:null,
     note:"Emphasizes precision or perfect fit. Very common in casual speech.",
     example:"A: 이 옷이 딱 맞아요!\nB: 다행이에요. 사이즈 고르기 어려웠거든요.\nA: 딱 좋아요!",
     exampleSrc:"A: These clothes fit perfectly!\nB: I'm glad. It was hard to pick the size.\nA: They're just right!",
     funFact:"딱 is onomatopoeic, imitating a crisp, definitive sound. 딱 맞다 (fit perfectly), 딱 한 번 (exactly once), 딱 걸렸다 (caught red-handed). The sound conveys finality."},

    {type:"teach", trg:"거의", src:"almost, nearly", pos:"adv", gender:null,
     note:"Approximation adverb. Close to completion but not quite there.",
     example:"A: 숙제 다 했어요?\nB: 거의 다 했어요. 조금만 남았어요.\nA: 빨리 끝내세요!",
     exampleSrc:"A: Did you finish the homework?\nB: I've almost finished. Just a little left.\nA: Hurry and finish it!",
     funFact:"거의 매일 (almost every day), 거의 다 (almost all), 거의 안 (almost never). It softens both positive and negative statements with the nuance of 'not quite 100%.'"},

    // --- Quiz batch 3 ---
    {type:"fb",
     s:"이 신발이 {1} 맞아요. 편해요!",
     a:["딱"],
     opts:["딱","거의","멀리","마주"],
     hint:"An adverb meaning 'exactly' or 'perfectly.' The shoes fit with precision.",
     sSrc:"These shoes fit {1} right. They're comfortable!"},

    {type:"mc",
     q:"'거의 다 끝났어요'의 뜻은?",
     opts:["전혀 못 했어요","반만 했어요","아직 조금 남았어요","완전히 끝났어요"],
     ans:"아직 조금 남았어요",
     hint:"This adverb means 'almost' or 'nearly.' The task is close to done but not yet complete."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"따르다", src:"to follow, to comply with", pos:"verb", gender:null,
     note:"Regular verb. To follow a person, rule, or instruction.",
     example:"A: 규칙을 따라야 해요.\nB: 알겠어요, 규칙을 따를게요.\nA: 감사합니다.",
     exampleSrc:"A: You must follow the rules.\nB: Understood, I'll follow them.\nA: Thank you.",
     funFact:"따르다 has a second meaning: 'to pour' (liquid). 물을 따르다 = to pour water. Context makes the meaning clear. Both senses involve flow: following a path or pouring a stream."},

    {type:"teach", trg:"따라가다", src:"to follow along, to go after", pos:"verb", gender:null,
     note:"따르다 + 가다. Compound verb for physically following someone somewhere.",
     example:"A: 저를 따라오세요.\nB: 네, 따라갈게요.\nA: 여기가 우리 사무실이에요.",
     exampleSrc:"A: Please follow me.\nB: Okay, I'll follow.\nA: Here is our office.",
     funFact:"따라가다 (follow and go) vs. 따라오다 (follow and come): the direction depends on the speaker's position. A guide says 따라오세요 (come follow me), a listener says 따라갈게요 (I'll follow)."},

    {type:"teach", trg:"따다", src:"to pick, to earn, to obtain", pos:"verb", gender:null,
     note:"Multi-meaning verb: pick fruit, earn a license, open a bottle.",
     example:"A: 자격증을 땄어요?\nB: 네, 드디어 운전면허를 땄어요!\nA: 축하해요!",
     exampleSrc:"A: Did you get your license?\nB: Yes, I finally got my driver's license!\nA: Congratulations!",
     funFact:"따다 is remarkably versatile: 사과를 따다 (pick apples), 자격증을 따다 (earn a certificate), 병을 따다 (open a bottle). The common thread is 'obtaining/extracting' something."},

    {type:"teach", trg:"간단히", src:"simply, briefly", pos:"adv", gender:null,
     note:"Adverb form of 간단하다. For doing something in a simple, quick way.",
     example:"A: 점심 뭐 먹을까요?\nB: 간단히 김밥 먹어요.\nA: 좋아요, 빨리 먹고 돌아가요.",
     exampleSrc:"A: What shall we eat for lunch?\nB: Let's just have kimbap simply.\nA: Sounds good, let's eat quickly and head back.",
     funFact:"간단히 말하면 (simply put) is a great transitional phrase for explanations. In business Korean, 간단히 보고하겠습니다 (I will report briefly) is a polished opener."},

    {type:"teach", trg:"가격", src:"price", pos:"noun", gender:null,
     note:"Sino-Korean: 價 (value) + 格 (standard). The monetary value of something.",
     example:"A: 이 가방 가격이 얼마예요?\nB: 5만 원이에요.\nA: 좀 비싸네요.",
     exampleSrc:"A: What's the price of this bag?\nB: It's 50,000 won.\nA: That's a bit expensive.",
     funFact:"Related compound words: 가격표 (price tag), 가격 인하 (price cut), 가격 인상 (price increase). In markets, you can say 가격 좀 깎아 주세요 (please lower the price)."},

    // --- Quiz batch 4 ---
    {type:"fb",
     s:"드디어 운전면허를 {1}!",
     a:["땄어요"],
     opts:["땄어요","따라갔어요","따랐어요","딱이에요"],
     hint:"A verb meaning 'to earn' or 'to obtain' a license or certificate. You finally got it.",
     sSrc:"I finally {1} my driver's license!"},

    {type:"match", pairs:[
      {trg:"따르다", src:"to follow, comply"},
      {trg:"따라가다", src:"to follow along"},
      {trg:"간단히", src:"simply, briefly"},
      {trg:"가격", src:"price"}
    ]}
  ]
};
export default LESSON_20;
