// Korean B1 Gap - Lesson 34: Choices, Beliefs and Opinions
const LESSON_34 = {
  id:"kov2_b1gap_l34", title:"선택, 믿음과 의견", icon:"⚖", xp:15, board:true,
  steps:[
    {type:"intro", title:"Choices, Beliefs and Opinions",
     desc:"Build the vocabulary for decision-making, critical thinking, and expressing judgments. These words power academic discussion, debate, and everyday opinion-sharing.",
     goals:["Learn 20 words for choices, beliefs, and opinions","Express agreement, opposition, and analysis","Use success/failure vocabulary in context"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"선택", src:"choice, selection", pos:"noun", gender:null,
     note:"Sino-Korean. 선 (select, 選) + 택 (pick, 擇).\n선택의 여지 = room for choice.",
     example:"A: 어려운 선택이에요.\nB: 천천히 생각해 보세요.\nA: 후회 없는 선택을 하고 싶어요.",
     exampleSrc:"A: It's a difficult choice.\nB: Take your time and think about it.\nA: I want to make a choice I won't regret.",
     funFact:"From hanja 選擇, doubled 'picking.' 선택 장애 (choice paralysis) is a popular slang term among young Koreans who struggle to decide anything, even what to eat for lunch."},

    {type:"teach", trg:"선택하다", src:"to choose, to select", pos:"verb", gender:null,
     note:"Verb form of 선택. More deliberate than 고르다 (to pick).\n현명하게 선택하다 = to choose wisely.",
     example:"A: 어떤 색을 선택할 거예요?\nB: 파란색을 선택할게요.\nA: 좋은 선택이에요.",
     exampleSrc:"A: Which color will you choose?\nB: I'll choose blue.\nA: That's a good choice.",
     funFact:"선택하다 is formal and deliberate, while 고르다 is casual and everyday. You 고르다 fruit at the market but 선택하다 a career path. The formality difference matters in Korean."},

    {type:"teach", trg:"받아들이다", src:"to accept, to take in", pos:"verb", gender:null,
     note:"Compound verb. 받다 (receive) + 들이다 (take in).\nAccepting ideas, situations, or people.",
     example:"A: 결과를 받아들이기 힘들어요.\nB: 시간이 필요해요.\nA: 천천히 받아들일게요.",
     exampleSrc:"A: It's hard to accept the results.\nB: You need time.\nA: I'll accept it slowly.",
     funFact:"받아들이다 implies emotional or intellectual acceptance, not just physical receiving. 현실을 받아들이다 (accept reality) is a common expression when someone must face difficult truths."},

    {type:"teach", trg:"반대하다", src:"to oppose, to be against", pos:"verb", gender:null,
     note:"Sino-Korean. 반 (opposite, 反) + 대 (face, 對) + 하다.\n반대 의견 = opposing opinion.",
     example:"A: 이 계획에 반대하는 사람이 있어요?\nB: 저는 반대해요. 비용이 너무 많이 들어요.\nA: 다른 방법을 찾아볼까요?",
     exampleSrc:"A: Is there anyone who opposes this plan?\nB: I oppose it. The cost is too high.\nA: Shall we look for another way?",
     funFact:"From hanja 反對, 'face the opposite.' 찬성 (agreement) and 반대 (opposition) are always paired in Korean debate: 찬성하시는 분? 반대하시는 분? (Those in favor? Those opposed?)"},

    {type:"teach", trg:"비교하다", src:"to compare", pos:"verb", gender:null,
     note:"Sino-Korean. 비 (compare, 比) + 교 (examine, 較) + 하다.\n가격을 비교하다 = to compare prices.",
     example:"A: 두 제품을 비교해 봤어요?\nB: 네, 가격은 비슷하지만 품질이 달라요.\nA: 어떤 게 더 좋아요?",
     exampleSrc:"A: Did you compare the two products?\nB: Yes, the prices are similar but the quality is different.\nA: Which one is better?",
     funFact:"From hanja 比較. 비교 불가 (incomparable, beyond comparison) is used for something so outstanding that comparison is pointless. Online shoppers constantly 비교하다 before buying."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"결과를 마음으로 인정하는 것을 뭐라고 해요?",
     opts:["받아들이다","비교하다","선택하다","반대하다"],
     ans:"받아들이다",
     hint:"This compound verb combines 'receive' and 'take in.' It describes emotional or intellectual acceptance of a situation or truth."},

    {type:"fb",
     s:"두 제품을 {1} 봤어요.",
     a:["비교해"],
     opts:["비교해","반대해","선택해","받아들여"],
     hint:"This Sino-Korean verb means to examine two or more things side by side to note similarities and differences.",
     sSrc:"I tried {1} the two products."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"비판하다", src:"to criticize", pos:"verb", gender:null,
     note:"Sino-Korean. 비 (criticize, 批) + 판 (judge, 判) + 하다.\nFormal criticism, not casual complaining.",
     example:"A: 그 정책을 비판하는 사람이 많아요.\nB: 왜 비판해요?\nA: 효과가 없다고 생각하니까요.",
     exampleSrc:"A: Many people criticize that policy.\nB: Why do they criticize it?\nA: Because they think it's ineffective.",
     funFact:"From hanja 批判. 비판적 사고 (critical thinking) is a core educational goal in Korean universities. 비판 is intellectual critique, while 비난 (denouncement) is harsher and more personal."},

    {type:"teach", trg:"분석하다", src:"to analyze", pos:"verb", gender:null,
     note:"Sino-Korean. 분 (divide, 分) + 석 (explain, 析) + 하다.\nBreaking something down to understand it.",
     example:"A: 이 데이터를 분석해 주세요.\nB: 네, 분석 결과를 내일까지 드릴게요.\nA: 감사합니다.",
     exampleSrc:"A: Please analyze this data.\nB: Okay, I'll give you the analysis results by tomorrow.\nA: Thank you.",
     funFact:"From hanja 分析, 'divide and explain.' 데이터 분석 (data analysis) is a hot career field in Korea. The noun 분석 appears in 분석가 (analyst) and 분석력 (analytical ability)."},

    {type:"teach", trg:"무시하다", src:"to ignore, to disregard", pos:"verb", gender:null,
     note:"Sino-Korean. 무 (nothing, 無) + 시 (see, 視) + 하다.\nLiterally: 'see as nothing.'",
     example:"A: 왜 제 의견을 무시해요?\nB: 무시한 게 아니에요. 못 들었어요.\nA: 다시 한번 말할게요.",
     exampleSrc:"A: Why are you ignoring my opinion?\nB: I wasn't ignoring it. I didn't hear you.\nA: I'll say it one more time.",
     funFact:"From hanja 無視, 'see as nothing.' 무시하다 can range from mild (not paying attention) to severe (showing contempt). 무시당하다 (to be ignored) is a passive form that conveys the pain of being dismissed."},

    {type:"teach", trg:"믿다", src:"to believe, to trust", pos:"verb", gender:null,
     note:"Native Korean. One of the most fundamental verbs.\n믿을 수 없다 = unbelievable.",
     example:"A: 저를 믿어 주세요.\nB: 물론 믿어요. 걱정하지 마세요.\nA: 감사해요. 실망시키지 않을게요.",
     exampleSrc:"A: Please believe in me.\nB: Of course I believe you. Don't worry.\nA: Thank you. I won't disappoint you.",
     funFact:"믿다 covers both 'believe' and 'trust' in Korean. There is no separate word for trust vs. belief. 하나님을 믿다 (believe in God) and 친구를 믿다 (trust a friend) use the same verb."},

    {type:"teach", trg:"믿음", src:"belief, faith, trust", pos:"noun", gender:null,
     note:"Noun form of 믿다. The -ㅁ nominalization pattern.\n믿음이 강하다 = to have strong faith.",
     example:"A: 서로에 대한 믿음이 중요해요.\nB: 맞아요. 믿음이 없으면 관계가 어려워요.\nA: 항상 솔직해야 해요.",
     exampleSrc:"A: Trust in each other is important.\nB: Right. Without trust, relationships are difficult.\nA: We should always be honest.",
     funFact:"믿음 is the standard word for religious faith: 믿음이 있다 (to have faith). It also works for interpersonal trust: 믿음을 주다 (to give trust), 믿음을 저버리다 (to betray trust)."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"비판하다", src:"to criticize"},
      {trg:"분석하다", src:"to analyze"},
      {trg:"무시하다", src:"to ignore"},
      {trg:"믿다", src:"to believe"}
    ]},

    {type:"fb",
     s:"왜 제 의견을 {1}?",
     a:["무시해요"],
     opts:["무시해요","분석해요","비판해요","믿어요"],
     hint:"This verb literally means 'see as nothing' in its hanja components. It describes disregarding someone or something.",
     sSrc:"Why are you {1} my opinion?"},

    // --- Teach 11-15 ---
    {type:"teach", trg:"상상", src:"imagination", pos:"noun", gender:null,
     note:"Sino-Korean. 상 (think, 想) + 상 (think, 像).\n상상력 = imaginative power.",
     example:"A: 상상만 해도 좋아요.\nB: 뭘 상상해요?\nA: 여행을 가는 상상이요.",
     exampleSrc:"A: Just imagining it makes me happy.\nB: What are you imagining?\nA: Imagining going on a trip.",
     funFact:"상상 is doubled 'thinking/imagining.' 상상 이상 means 'beyond imagination.' K-pop fans use 상상도 못 했어 (I couldn't even imagine it) to express being overwhelmed by their favorite artists."},

    {type:"teach", trg:"상상하다", src:"to imagine", pos:"verb", gender:null,
     note:"Verb form of 상상. Active imagining.\n미래를 상상하다 = to imagine the future.",
     example:"A: 10년 후를 상상해 봐요.\nB: 글쎄요. 상상이 안 돼요.\nA: 그때는 뭘 하고 있을까요?",
     exampleSrc:"A: Try imagining 10 years from now.\nB: Hmm. I can't imagine it.\nA: What will we be doing then?",
     funFact:"상상하다 is the active verb, while 상상이 되다/안 되다 (to be imaginable/unimaginable) is the result. 상상도 못 하다 (cannot even imagine) is an extremely common intensifier."},

    {type:"teach", trg:"성공", src:"success", pos:"noun", gender:null,
     note:"Sino-Korean. 성 (become, 成) + 공 (achievement, 功).\n성공적 = successful.",
     example:"A: 사업에 성공했어요?\nB: 네, 드디어 성공했어요.\nA: 정말 축하해요!",
     exampleSrc:"A: Did you succeed in business?\nB: Yes, I finally succeeded.\nA: Congratulations!",
     funFact:"From hanja 成功, 'become achievement.' Korean culture values 성공 highly. 성공 스토리 (success story) is a borrowed English phrase frequently used in Korean media and self-help books."},

    {type:"teach", trg:"성공하다", src:"to succeed", pos:"verb", gender:null,
     note:"Verb form of 성공.\n~에 성공하다 = to succeed in/at something.",
     example:"A: 다이어트에 성공했어요?\nB: 5킬로 빼는 데 성공했어요.\nA: 대단해요! 비결이 뭐예요?",
     exampleSrc:"A: Did you succeed in your diet?\nB: I succeeded in losing 5 kilograms.\nA: Amazing! What's your secret?",
     funFact:"성공하다 takes the particle -에: 시험에 성공하다 (succeed at an exam), 사업에 성공하다 (succeed in business). It pairs naturally with 실패하다 (to fail) as the eternal opposites."},

    {type:"teach", trg:"실패하다", src:"to fail", pos:"verb", gender:null,
     note:"Sino-Korean. 실 (lose, 失) + 패 (defeat, 敗) + 하다.\n~에 실패하다 = to fail at something.",
     example:"A: 시험에 실패했어요.\nB: 괜찮아요. 다음에 다시 도전하세요.\nA: 네, 포기하지 않을게요.",
     exampleSrc:"A: I failed the exam.\nB: It's okay. Try again next time.\nA: Yes, I won't give up.",
     funFact:"From hanja 失敗, 'lose defeat.' 실패는 성공의 어머니 (failure is the mother of success) is one of the most quoted Korean proverbs. It encourages resilience after setbacks."},

    // --- Quiz batch 3 ---
    {type:"mc",
     q:"'실패는 성공의 어머니'라는 속담의 뜻은?",
     opts:["실패하면 포기해야 한다","실패를 통해 성공할 수 있다","어머니가 성공했다","성공하면 실패한다"],
     ans:"실패를 통해 성공할 수 있다",
     hint:"This proverb encourages people who have failed. It says that the experience of falling short is what eventually leads to achievement."},

    {type:"fb",
     s:"10년 후를 {1} 봐요.",
     a:["상상해"],
     opts:["상상해","성공해","실패해","분석해"],
     hint:"This verb means to form mental pictures of things that are not present. It is about creating images in your mind.",
     sSrc:"Try {1} 10 years from now."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"불가능하다", src:"to be impossible", pos:"adj", gender:null,
     note:"Sino-Korean. 불 (not, 不) + 가능 (possible, 可能) + 하다.\nThe opposite of 가능하다.",
     example:"A: 오늘까지 끝내는 건 불가능해요.\nB: 그러면 내일까지 해 주세요.\nA: 네, 내일까지는 가능해요.",
     exampleSrc:"A: Finishing by today is impossible.\nB: Then please do it by tomorrow.\nA: Yes, by tomorrow it's possible.",
     funFact:"불가능하다 is the formal counterpart to 안 되다 (it doesn't work/can't be done). In motivational contexts, 불가능은 없다 (there is no impossible) is a popular slogan."},

    {type:"teach", trg:"얻다", src:"to obtain, to gain, to get", pos:"verb", gender:null,
     note:"Native Korean. Broader than 받다 (receive).\n경험을 얻다 = to gain experience. 정보를 얻다 = to obtain information.",
     example:"A: 이 경험에서 많은 것을 얻었어요.\nB: 어떤 것을 얻었어요?\nA: 자신감을 얻었어요.",
     exampleSrc:"A: I gained a lot from this experience.\nB: What did you gain?\nA: I gained confidence.",
     funFact:"얻다 implies actively acquiring something through effort or circumstance. 받다 (receive) is more passive. You 얻다 knowledge, experience, and trust through your own actions."},

    {type:"teach", trg:"알아듣다", src:"to understand (what is said), to catch", pos:"verb", gender:null,
     note:"Compound verb. 알다 (know) + 듣다 (hear).\nUnderstanding spoken language. Key for language learners.",
     example:"A: 한국어를 알아들어요?\nB: 조금 알아들어요. 천천히 말해 주세요.\nA: 네, 천천히 할게요.",
     exampleSrc:"A: Do you understand Korean?\nB: I understand a little. Please speak slowly.\nA: Okay, I'll speak slowly.",
     funFact:"알아듣다 is specifically about auditory comprehension: hearing and understanding. 이해하다 (to understand) is broader and more intellectual. Language learners celebrate when they first 알아듣다 a full Korean conversation."},

    {type:"teach", trg:"어울리다", src:"to suit, to go well with, to get along", pos:"verb", gender:null,
     note:"Native Korean. Describes harmony and compatibility.\n잘 어울리다 = to match well, to suit.",
     example:"A: 이 옷이 저한테 어울려요?\nB: 네, 정말 잘 어울려요.\nA: 그러면 이걸로 할게요.",
     exampleSrc:"A: Does this outfit suit me?\nB: Yes, it really suits you.\nA: Then I'll go with this one.",
     funFact:"어울리다 works for clothes (suits you), people (get along), and combinations (go together). 어울리지 않다 describes things that clash or don't match. Fashion, personality, and food pairings all 어울리다 or not."},

    {type:"teach", trg:"방법", src:"method, way", pos:"noun", gender:null,
     note:"Sino-Korean. 방 (direction, 方) + 법 (law/method, 法).\n방법을 찾다 = to find a way.",
     example:"A: 좋은 방법이 없을까요?\nB: 다른 방법을 생각해 봐요.\nA: 여러 가지 방법을 시도해 볼게요.",
     exampleSrc:"A: Isn't there a good method?\nB: Let's think of another way.\nA: I'll try various methods.",
     funFact:"From hanja 方法, 'direction law.' 방법 is one of the most frequently used nouns in Korean. Every problem-solving conversation includes it: 다른 방법 (another way), 가장 좋은 방법 (the best method)."},

    // --- Quiz batch 4 ---
    {type:"match", pairs:[
      {trg:"불가능하다", src:"impossible"},
      {trg:"얻다", src:"to obtain"},
      {trg:"알아듣다", src:"to understand (speech)"},
      {trg:"어울리다", src:"to suit"}
    ]},

    {type:"fb",
     s:"이 경험에서 자신감을 {1}.",
     a:["얻었어요"],
     opts:["얻었어요","받았어요","알아들었어요","어울렸어요"],
     hint:"This native Korean verb means to actively acquire something through effort or experience. It is broader and more active than simply receiving.",
     sSrc:"I {1} confidence from this experience."},

    // --- Tip card ---
    {type:"tip", title:"하다/되다 Active-Passive Pairs",
     text:"Sino-Korean vocabulary creates systematic active/passive pairs:\n\n선택하다 (choose) vs. 선택되다 (be chosen)\n분석하다 (analyze) vs. 분석되다 (be analyzed)\n무시하다 (ignore) vs. 무시되다/당하다 (be ignored)\n비판하다 (criticize) vs. 비판되다/받다 (be criticized)\n\nUse -하다 when the subject acts, -되다 when the subject receives the action. For negative actions, -당하다 or -받다 can replace -되다 with a stronger nuance of 'suffering' the action.",
     deepDive:{title:"Expressing Opinions Formally",
      text:"Korean debate and discussion use specific phrases: 제 의견은 (my opinion is), 저는 반대합니다 (I oppose), 찬성합니다 (I agree), 분석해 보면 (if we analyze), 비교하면 (if we compare). These formulas are essential for TOPIK writing and academic Korean. Notice how each uses a Sino-Korean verb with 하다."}},

    // --- Final quiz ---
    {type:"mc",
     q:"'이 옷이 저한테 잘 ___'에서 빈칸에 알맞은 말은?",
     opts:["믿어요","얻어요","어울려요","알아들어요"],
     ans:"어울려요",
     hint:"This verb describes harmony and compatibility. When clothes match your appearance, or people get along well, this is the word to use."},

    {type:"fb",
     s:"좋은 {1}을 찾아야 해요.",
     a:["방법"],
     opts:["방법","선택","믿음","성공"],
     hint:"This Sino-Korean noun combines 'direction' and 'law/rule.' It refers to the way or means of doing something.",
     sSrc:"We need to find a good {1}."}
  ]
};

export default LESSON_34;
