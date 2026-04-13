// Korean B1 Gap - Lesson 16: Degree and Manner Adverbs
const LESSON_16 = {
  id:"kov2_b1gap_l16", title:"정도와 방식의 부사", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"Degree and Manner Adverbs",
     desc:"Master adverbs that express intensity, degree, and manner. These words let you describe HOW something happens and to WHAT extent, moving your Korean beyond simple sentences.",
     goals:["Learn 20 degree and manner adverbs","Express intensity from 'barely' to 'enormously'","Use manner adverbs for natural descriptions"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"굉장히", src:"enormously, tremendously", pos:"adv", gender:null,
     note:"Strong intensifier. More emphatic than 매우 or 아주.",
     example:"A: 시험이 어땠어요?\nB: 굉장히 어려웠어요.\nA: 다음에는 더 준비하세요.",
     exampleSrc:"A: How was the exam?\nB: It was enormously difficult.\nA: Prepare more next time.",
     funFact:"From hanja 驚 (surprise) + 壯 (grand). Literally 'surprisingly grand,' which captures the sense of being overwhelmingly impressive."},

    {type:"teach", trg:"대단히", src:"greatly, very much", pos:"adv", gender:null,
     note:"Formal intensifier. Common in polite speech and writing.",
     example:"A: 도와주셔서 대단히 감사합니다.\nB: 별말씀을요.\nA: 다음에도 잘 부탁드려요.",
     exampleSrc:"A: Thank you very much for your help.\nB: Don't mention it.\nA: I look forward to working with you again.",
     funFact:"Often paired with 감사합니다 in formal thanks. It sounds more sophisticated than 정말 or 너무 in business contexts."},

    {type:"teach", trg:"몹시", src:"extremely, terribly", pos:"adv", gender:null,
     note:"Strong intensifier with slightly negative nuance. Often used with hardship or weather.",
     example:"A: 밖에 날씨가 어때요?\nB: 몹시 추워요. 코트 입으세요.\nA: 알겠어요, 고마워요.",
     exampleSrc:"A: How's the weather outside?\nB: It's extremely cold. Wear a coat.\nA: Got it, thanks.",
     funFact:"Native Korean word, not Sino-Korean. It carries a heavier emotional weight than 매우, suggesting the speaker truly feels the intensity."},

    {type:"teach", trg:"너무나", src:"so very, exceedingly", pos:"adv", gender:null,
     note:"Emphatic form of 너무. Adds emotional weight. Literary or dramatic tone.",
     example:"A: 그 영화 봤어요?\nB: 네, 너무나 감동적이었어요.\nA: 저도 꼭 봐야겠어요.",
     exampleSrc:"A: Did you watch that movie?\nB: Yes, it was so very moving.\nA: I definitely need to see it too.",
     funFact:"While 너무 was historically only negative ('too much'), modern Korean uses it positively too. 너무나 keeps the dramatic flair in both directions."},

    {type:"teach", trg:"꽤", src:"quite, fairly", pos:"adv", gender:null,
     note:"Moderate intensifier. Not extreme, but more than expected.",
     example:"A: 한국어 공부 얼마나 했어요?\nB: 꽤 오래 했어요. 3년 정도요.\nA: 그래서 잘하시는군요!",
     exampleSrc:"A: How long have you studied Korean?\nB: Quite a long time. About 3 years.\nA: That's why you're good at it!",
     funFact:"One of the shortest adverbs in Korean. Despite its brevity, it is extremely common in daily conversation and adds a casual, understated tone."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"빈칸에 알맞은 단어는? '도와주셔서 _____ 감사합니다.'",
     opts:["꽤","대단히","막","괜히"],
     ans:"대단히",
     hint:"This is a formal expression of deep gratitude. Which intensifier fits polite thanks?"},

    {type:"fb",
     s:"오늘 날씨가 {1} 더워서 밖에 못 나갔어요.",
     a:["몹시"],
     opts:["몹시","꽤","단지","가만히"],
     hint:"An intensifier with a slightly negative, suffering nuance. The heat was unbearable.",
     sSrc:"The weather was {1} hot today, so I couldn't go outside."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"되게", src:"really, very", pos:"adv", gender:null,
     note:"Casual spoken intensifier. Similar to 진짜 or 엄청. Avoid in formal writing.",
     example:"A: 어제 파티 어땠어?\nB: 되게 재미있었어!\nA: 나도 가고 싶었는데.",
     exampleSrc:"A: How was the party yesterday?\nB: It was really fun!\nA: I wanted to go too.",
     funFact:"Derived from the verb 되다 (to become). The logic is 'to the point of becoming' something, which evolved into a general intensifier in casual speech."},

    {type:"teach", trg:"그만큼", src:"that much, to that extent", pos:"adv", gender:null,
     note:"References a previously mentioned degree. 'As much as that.'",
     example:"A: 왜 이렇게 열심히 해요?\nB: 그만큼 중요한 일이니까요.\nA: 맞아요, 이해해요.",
     exampleSrc:"A: Why are you working so hard?\nB: Because it's that important.\nA: Right, I understand.",
     funFact:"그 (that) + 만큼 (as much as). The particle 만큼 is a comparison marker. You can attach it to nouns too: 산만큼 (as much as a mountain)."},

    {type:"teach", trg:"그다지", src:"not that much, not particularly", pos:"adv", gender:null,
     note:"Always used with negatives. Cannot be used in affirmative sentences.",
     example:"A: 이 식당 맛있어요?\nB: 그다지 맛있지 않아요.\nA: 그러면 다른 데 갈까요?",
     exampleSrc:"A: Is this restaurant good?\nB: It's not that good.\nA: Then shall we go somewhere else?",
     funFact:"Think of it as the polite way to say something is mediocre. It softens criticism by saying 'not particularly' rather than 'bad.'"},

    {type:"teach", trg:"그리", src:"that way, so (with negation)", pos:"adv", gender:null,
     note:"Typically used with negatives, like 그다지. Means 'not so' or 'not that.'",
     example:"A: 시험이 어려웠어요?\nB: 그리 어렵지 않았어요.\nA: 다행이네요!",
     exampleSrc:"A: Was the exam difficult?\nB: It wasn't so difficult.\nA: That's a relief!",
     funFact:"Short form of 그리하여 (doing it that way). In modern Korean, it has narrowed to mostly appear in negative constructions."},

    {type:"teach", trg:"단순히", src:"simply, merely", pos:"adv", gender:null,
     note:"Adverb form of 단순하다. Used to downplay complexity.",
     example:"A: 왜 그렇게 했어요?\nB: 단순히 호기심 때문이에요.\nA: 아, 다른 이유는 없었군요.",
     exampleSrc:"A: Why did you do that?\nB: Simply out of curiosity.\nA: Ah, there was no other reason.",
     funFact:"From hanja 單 (single) + 純 (pure). The idea of 'single and pure' evolved into 'simple' and then the adverb 'simply.'"},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"되게", src:"really, very (casual)"},
      {trg:"그다지", src:"not that much"},
      {trg:"그만큼", src:"that much"},
      {trg:"단순히", src:"simply, merely"}
    ]},

    {type:"mc",
     q:"'그리 어렵지 않았어요'는 무슨 뜻이에요?",
     opts:["굉장히 어려웠어요","단순히 쉬웠어요","그렇게 어렵지 않았어요","되게 어려웠어요"],
     ans:"그렇게 어렵지 않았어요",
     hint:"This adverb softens difficulty with negation. It means 'not so' or 'not particularly.'"},

    // --- Teach 11-15 ---
    {type:"teach", trg:"단지", src:"merely, only", pos:"adv", gender:null,
     note:"Restrictor adverb. Limits scope to 'nothing more than.'",
     example:"A: 왜 전화했어요?\nB: 단지 안부를 물으려고요.\nA: 고마워요, 잘 지내고 있어요.",
     exampleSrc:"A: Why did you call?\nB: Merely to ask how you're doing.\nA: Thanks, I'm doing well.",
     funFact:"Often interchangeable with 다만 or 그저. However, 단지 emphasizes limitation ('only this, nothing more') while 다만 introduces a caveat."},

    {type:"teach", trg:"괜히", src:"for no reason, needlessly", pos:"adv", gender:null,
     note:"Implies the action was pointless or regrettable. Often expresses mild self-criticism.",
     example:"A: 왜 그 말을 했어요?\nB: 괜히 말했어요. 후회해요.\nA: 다음부터 조심하세요.",
     exampleSrc:"A: Why did you say that?\nB: I said it for no reason. I regret it.\nA: Be careful next time.",
     funFact:"Related to 괜찮다 (to be okay). Both share the root meaning of 'without particular cause.' Something done 괜히 is done without good reason."},

    {type:"teach", trg:"굳이", src:"stubbornly, going out of one's way", pos:"adv", gender:null,
     note:"Implies unnecessary effort or insistence. Often in questions or negatives.",
     example:"A: 굳이 직접 갈 필요 있어요?\nB: 네, 직접 확인하고 싶어요.\nA: 알겠어요, 조심하세요.",
     exampleSrc:"A: Do you really need to go in person?\nB: Yes, I want to check myself.\nA: Alright, be careful.",
     funFact:"Native Korean word with no hanja origin. It captures a uniquely Korean nuance of 'insisting on doing something even when there is an easier option.'"},

    {type:"teach", trg:"가만히", src:"quietly, still, motionlessly", pos:"adv", gender:null,
     note:"Describes staying still or quiet. Also used as a filler: 'let me think.'",
     example:"A: 가만히 있어 봐요.\nB: 왜요? 무슨 소리 들려요?\nA: 네, 밖에서 이상한 소리가 나요.",
     exampleSrc:"A: Stay still for a moment.\nB: Why? Do you hear something?\nA: Yes, there's a strange sound outside.",
     funFact:"가만히 있다 literally means 'to exist still.' Parents often say 가만히 있어! to restless children, meaning 'stay put!'"},

    {type:"teach", trg:"깜짝", src:"with a start, suddenly (surprise)", pos:"adv", gender:null,
     note:"Onomatopoeia-like adverb for sudden surprise. Common in 깜짝 놀라다.",
     example:"A: 생일 파티 어땠어요?\nB: 깜짝 놀랐어요! 몰랐거든요.\nA: 다행히 성공했네요!",
     exampleSrc:"A: How was the birthday party?\nB: I was startled! I had no idea.\nA: Glad it was a success!",
     funFact:"Korean has many 'mimetic' adverbs that paint a sensory picture. 깜짝 evokes the physical jolt of being startled. 깜짝 파티 means surprise party."},

    // --- Quiz batch 3 ---
    {type:"fb",
     s:"생일 선물을 받고 {1} 놀랐어요.",
     a:["깜짝"],
     opts:["깜짝","가만히","괜히","굳이"],
     hint:"This mimetic adverb describes the physical jolt of being pleasantly surprised.",
     sSrc:"I was surprised {1} when I received the birthday gift."},

    {type:"mc",
     q:"'괜히 걱정했어요'는 무슨 뜻이에요?",
     opts:["조금 걱정했어요","굉장히 걱정했어요","가만히 걱정했어요","쓸데없이 걱정했어요"],
     ans:"쓸데없이 걱정했어요",
     hint:"This adverb means the worrying was pointless and without real cause."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"깨끗이", src:"cleanly, neatly", pos:"adv", gender:null,
     note:"Adverb form of 깨끗하다 (to be clean). -이 suffix creates the adverb.",
     example:"A: 방을 깨끗이 치웠어요?\nB: 네, 깨끗이 청소했어요.\nA: 잘했어요!",
     exampleSrc:"A: Did you clean the room neatly?\nB: Yes, I cleaned it spotlessly.\nA: Well done!",
     funFact:"Many Korean adjectives become adverbs with -이 or -히. 깨끗하다 uses -이 because the stem ends in a consonant cluster. Compare: 조용히 (quietly)."},

    {type:"teach", trg:"똑같이", src:"identically, in the same way", pos:"adv", gender:null,
     note:"From 똑같다 (to be identical). Emphasizes exact sameness.",
     example:"A: 이거 저것과 똑같이 만들어 주세요.\nB: 네, 똑같이 해 드릴게요.\nA: 감사합니다.",
     exampleSrc:"A: Please make this identically to that one.\nB: Yes, I'll do it the same way.\nA: Thank you.",
     funFact:"똑 is an intensifying prefix meaning 'exactly.' 똑바로 means 'straight/properly,' 똑똑하다 means 'smart.' All share the sense of precision."},

    {type:"teach", trg:"마구", src:"recklessly, wildly", pos:"adv", gender:null,
     note:"Describes uncontrolled or chaotic action. Negative or dramatic nuance.",
     example:"A: 아이가 왜 울어요?\nB: 사탕을 못 먹게 했더니 마구 울어요.\nA: 좀 달래 주세요.",
     exampleSrc:"A: Why is the child crying?\nB: I didn't let them have candy, so they're crying wildly.\nA: Please soothe them a bit.",
     funFact:"Native Korean word. It paints a picture of actions without restraint. 마구 먹다 means eating recklessly, 마구 달리다 means running wildly."},

    {type:"teach", trg:"막", src:"just now, carelessly, indiscriminately", pos:"adv", gender:null,
     note:"Very casual. Can mean 'just now' (time) or 'carelessly' (manner).",
     example:"A: 막 도착했어요.\nB: 아, 딱 맞게 왔네요!\nA: 네, 운이 좋았어요.",
     exampleSrc:"A: I just arrived.\nB: Oh, you came at just the right time!\nA: Yes, I was lucky.",
     funFact:"One of Korean's most versatile adverbs. 막 먹다 means 'eat carelessly,' 막 시작하다 means 'just started.' Context determines the meaning."},

    {type:"teach", trg:"매년", src:"every year, annually", pos:"adv", gender:null,
     note:"Sino-Korean: 매(every) + 년(year). Same pattern: 매일, 매주, 매달.",
     example:"A: 매년 여행을 가요?\nB: 네, 매년 여름에 바다에 가요.\nA: 좋은 습관이네요!",
     exampleSrc:"A: Do you travel every year?\nB: Yes, I go to the sea every summer.\nA: That's a nice habit!",
     funFact:"The 매 prefix from hanja 每 (every) is highly productive: 매일 (daily), 매주 (weekly), 매달 (monthly), 매번 (every time)."},

    // --- Quiz batch 4 ---
    {type:"match", pairs:[
      {trg:"깨끗이", src:"cleanly, neatly"},
      {trg:"마구", src:"recklessly, wildly"},
      {trg:"막", src:"just now, carelessly"},
      {trg:"매년", src:"every year"}
    ]},

    {type:"fb",
     s:"이 두 그림은 {1} 생겼어요.",
     a:["똑같이"],
     opts:["똑같이","단순히","마구","그리"],
     hint:"An adverb meaning 'identically' or 'in exactly the same way.' Think of precise sameness.",
     sSrc:"These two pictures look {1} alike."}
  ]
};
export default LESSON_16;
