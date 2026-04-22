// Korean B1 Gap - Lesson 37: Adverbs of Manner and Degree
const LESSON_37 = {
  id:"kov2_b1gap_l37", title:"양태와 정도의 부사", icon:"📐", xp:15, board:true,
  steps:[
    {type:"intro", title:"Adverbs of Manner and Degree",
     desc:"Master the adverbs that Korean speakers rely on to express certainty, degree, timing, and attitude. These words add nuance and natural flow to your sentences.",
     goals:["Learn 20 manner and degree adverbs","Express certainty, probability, and timing","Add natural nuance to Korean speech"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"무조건", src:"unconditionally, no matter what", pos:"adv", gender:null,
     note:"Sino-Korean (無條件). 무 = without, 조건 = condition. Very emphatic in speech.",
     example:"A: 이 영화 재미있어요?\nB: 무조건 봐야 해요! 진짜 최고예요.",
     exampleSrc:"A: Is this movie good?\nB: You absolutely must see it! It's truly the best.",
     funFact:"From hanja 無 (without) + 條件 (condition). Young Koreans use 무조건 as an intensifier: 무조건 맛있어 (unconditionally delicious) means it is guaranteed to taste good."},

    {type:"teach", trg:"무척", src:"very much, extremely", pos:"adv", gender:null,
     note:"Native Korean intensifier. Stronger than 매우, slightly less formal. 무척 좋다 = really great.",
     example:"A: 한국어가 무척 좋아졌네요!\nB: 감사합니다. 무척 열심히 공부했어요.",
     exampleSrc:"A: Your Korean has improved so much!\nB: Thank you. I studied extremely hard.",
     funFact:"무척 originally meant 'without measure' (immeasurably). It carries genuine emotional weight, unlike the more neutral 매우 or 아주. Use it when you truly feel strongly about something."},

    {type:"teach", trg:"반드시", src:"certainly, without fail", pos:"adv", gender:null,
     note:"Native Korean. Expresses firm obligation or certainty. Stronger than 꼭.",
     example:"A: 내일까지 반드시 제출해야 해요.\nB: 알겠습니다. 반드시 하겠습니다.",
     exampleSrc:"A: You must submit it by tomorrow without fail.\nB: Understood. I will do it without fail.",
     funFact:"반드시 vs. 꼭: both mean 'certainly/must,' but 반드시 is more formal and absolute. 반드시 appears in laws, contracts, and serious promises. 꼭 is the everyday casual version."},

    {type:"teach", trg:"분명", src:"clearly, obviously", pos:"adv", gender:null,
     note:"Sino-Korean (分明). As adverb: 분명 말했다 = I clearly said it. Also adjective form exists.",
     example:"A: 분명 여기에 뒀는데 없어요.\nB: 다시 잘 찾아보세요.",
     exampleSrc:"A: I clearly put it here, but it's gone.\nB: Try looking again carefully.",
     funFact:"From hanja 分 (divide) + 明 (bright). 분명 expresses the speaker's conviction. It often carries a tone of frustration: 분명 말했잖아! = 'I clearly told you!' is a common complaint."},

    {type:"teach", trg:"분명히", src:"clearly, definitely, certainly", pos:"adv", gender:null,
     note:"분명 + 히 suffix. More explicitly adverbial. Interchangeable with 분명 in most contexts.",
     example:"A: 그 사람이 분명히 거짓말했어요.\nB: 증거가 있어요?",
     exampleSrc:"A: That person definitely lied.\nB: Do you have evidence?",
     funFact:"Adding -히 to 분명 makes it unmistakably an adverb. Korean has many such pairs: 확실/확실히, 정확/정확히. The -히 form is slightly more emphatic and formal in writing."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"다음 중 가장 강한 의무를 나타내는 부사는?",
     opts:["반드시","살짝","무척","아마"],
     ans:"반드시",
     hint:"This adverb expresses absolute obligation, stronger than 꼭. It appears in laws and formal promises."},

    {type:"fb",
     s:"이 영화는 {1} 봐야 해요!",
     a:["무조건"],
     opts:["무조건","무척","분명","살짝"],
     hint:"An emphatic adverb meaning 'no matter what' or 'unconditionally.' Contains the hanja for 'without conditions.'",
     sSrc:"You {1} have to see this movie!"},

    // --- Teach 6-10 ---
    {type:"teach", trg:"비교적", src:"relatively, comparatively", pos:"adv", gender:null,
     note:"Sino-Korean (比較的). 비교 = comparison + 적 = adjectival suffix. Academic register.",
     example:"A: 이 지역은 비교적 안전해요?\nB: 네, 비교적 조용하고 안전한 편이에요.",
     exampleSrc:"A: Is this area relatively safe?\nB: Yes, it's relatively quiet and on the safe side.",
     funFact:"From hanja 比較 (compare) + 的 (adjectival). 비교적 is a hedging word that sounds measured and objective. News reporters and academics use it heavily to avoid absolute statements."},

    {type:"teach", trg:"살짝", src:"slightly, gently, stealthily", pos:"adv", gender:null,
     note:"Native Korean. Light, subtle action. 살짝 웃다 = smile slightly. 살짝 만지다 = touch gently.",
     example:"A: 문을 살짝 열어 주세요.\nB: 이 정도면 돼요?",
     exampleSrc:"A: Please open the door slightly.\nB: Is this much enough?",
     funFact:"살짝 has a sneaky quality: 살짝 빠져나가다 means 'to slip out quietly.' It can describe both gentleness (살짝 키스 = a gentle kiss) and stealth (살짝 훔쳐보다 = to peek stealthily)."},

    {type:"teach", trg:"새로", src:"newly, anew, afresh", pos:"adv", gender:null,
     note:"Adverb form of 새롭다 (new). 새로 시작하다 = to start anew. 새로 나오다 = newly released.",
     example:"A: 새로 나온 메뉴 먹어 봤어요?\nB: 아직요. 맛있어요?",
     exampleSrc:"A: Have you tried the newly released menu?\nB: Not yet. Is it good?",
     funFact:"새로 vs. 새: both relate to 'new,' but 새로 is strictly an adverb (새로 만들다 = make anew) while 새 is a determiner (새 옷 = new clothes). Mixing them up sounds unnatural."},

    {type:"teach", trg:"솔직히", src:"honestly, frankly", pos:"adv", gender:null,
     note:"Sino-Korean (率直) + 히. Discourse marker for candid statements. Very common in conversation.",
     example:"A: 솔직히 말해도 돼요?\nB: 네, 솔직히 말해 주세요.",
     exampleSrc:"A: Can I speak honestly?\nB: Yes, please be frank.",
     funFact:"솔직히 말하면 (to be honest) is one of Korean's most common discourse markers, like 'TBH' in English. It signals the speaker is about to say something possibly uncomfortable but true."},

    {type:"teach", trg:"미리", src:"in advance, beforehand", pos:"adv", gender:null,
     note:"Native Korean. 미리 준비하다 = prepare in advance. 미리 알려 주다 = let know beforehand.",
     example:"A: 미리 예약했어요?\nB: 네, 일주일 전에 미리 했어요.",
     exampleSrc:"A: Did you reserve in advance?\nB: Yes, I did it a week ahead.",
     funFact:"미리 is essential for Korean social etiquette. Koreans value planning: 미리미리 (well in advance, reduplicated for emphasis) is a common motto. Not planning ahead is seen as inconsiderate."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"비교적", src:"relatively"},
      {trg:"살짝", src:"slightly, gently"},
      {trg:"솔직히", src:"honestly"},
      {trg:"미리", src:"in advance"}
    ]},

    {type:"fb",
     s:"{1} 말하면, 그 음식이 별로였어요.",
     a:["솔직히"],
     opts:["솔직히","분명히","반드시","비교적"],
     hint:"A common discourse marker used before giving a candid opinion. Think 'to be honest.'",
     sSrc:"{1} speaking, that food wasn't great."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"아까", src:"a while ago, earlier", pos:"adv", gender:null,
     note:"Native Korean. Recent past, same day. 아까 말했듯이 = as I said earlier.",
     example:"A: 아까 전화한 사람이 누구예요?\nB: 회사 동료예요.",
     exampleSrc:"A: Who was the person who called earlier?\nB: A colleague from work.",
     funFact:"아까 specifically means 'earlier today' or within the last few hours. For yesterday, use 어제. 아까부터 means 'since a while ago' and often implies impatience: 아까부터 기다렸어요!"},

    {type:"teach", trg:"아마도", src:"probably, perhaps", pos:"adv", gender:null,
     note:"아마 (probably) + 도 (also/even). Slightly more uncertain than 아마 alone.",
     example:"A: 내일 비가 올까요?\nB: 아마도 올 것 같아요. 우산 가져가세요.",
     exampleSrc:"A: Will it rain tomorrow?\nB: Probably. Take an umbrella.",
     funFact:"아마 and 아마도 are nearly interchangeable, but 아마도 sounds slightly more hedging. Both pair naturally with -(으)ㄹ 것 같다 (seems like it will). Japanese has a similar word: 多分 (tabun)."},

    {type:"teach", trg:"어느새", src:"before one knows it, already", pos:"adv", gender:null,
     note:"어느 (which) + 새 (gap/interval). Time passed without noticing. Poetic feel.",
     example:"A: 어느새 벌써 봄이네요.\nB: 정말요. 시간이 빨라요.",
     exampleSrc:"A: Before we knew it, it's already spring.\nB: Really. Time flies.",
     funFact:"어느새 captures a distinctly Korean sense of time passing unnoticed. It appears frequently in songs and poetry. 어느새 어른이 됐다 (before I knew it, I became an adult) is a common reflective phrase."},

    {type:"teach", trg:"어쩌면", src:"perhaps, possibly, maybe", pos:"adv", gender:null,
     note:"From 어찌하면 (if one were to do what). Expresses uncertainty or surprise at a possibility.",
     example:"A: 어쩌면 그게 더 좋은 선택일 수도 있어요.\nB: 그럴 수도 있네요.",
     exampleSrc:"A: Perhaps that might be the better choice.\nB: That could be the case.",
     funFact:"어쩌면 can express genuine uncertainty or surprised admiration: 어쩌면 이렇게 예쁠 수가! means 'How can someone be this pretty!' The tone and context switch the meaning entirely."},

    {type:"teach", trg:"얼른", src:"quickly, hurry up", pos:"adv", gender:null,
     note:"Native Korean. Urges speed. 얼른 와! = Come quickly! Often used by parents to children.",
     example:"A: 얼른 준비해요. 늦겠어요.\nB: 알겠어요. 5분만 기다려 주세요.",
     exampleSrc:"A: Hurry up and get ready. We'll be late.\nB: Okay. Just give me 5 minutes.",
     funFact:"얼른 is one of the first adverbs Korean children learn because parents use it constantly: 얼른 먹어 (eat quickly), 얼른 자 (go to sleep quickly). It is warm and familiar, not harsh."},

    // --- Quiz batch 3 ---
    {type:"mc",
     q:"'어느새 벌써 겨울이네요'에서 '어느새'는 무슨 뜻이에요?",
     opts:["갑자기","모르는 사이에","분명히","비교적"],
     ans:"모르는 사이에",
     hint:"This poetic adverb means time passed without anyone noticing. It combines 'which' + 'interval.'"},

    {type:"fb",
     s:"{1} 준비하세요! 늦겠어요!",
     a:["얼른"],
     opts:["얼른","미리","아까","새로"],
     hint:"A native Korean adverb urging someone to do something quickly. Parents say this to children constantly.",
     sSrc:"{1} get ready! We'll be late!"},

    // --- Teach 16-20 ---
    {type:"teach", trg:"없이", src:"without", pos:"adv", gender:null,
     note:"없다 (to not exist) + 이 adverb suffix. Functions like a postposition. 걱정 없이 = without worry.",
     example:"A: 문제 없이 잘 도착했어요?\nB: 네, 걱정 없이 잘 왔어요.",
     exampleSrc:"A: Did you arrive well without problems?\nB: Yes, I came well without worries.",
     funFact:"없이 is grammatically fascinating: it turns the existential verb 없다 into an adverb/postposition. Noun + 없이 is extremely productive: 소리 없이 (silently), 이유 없이 (for no reason)."},

    {type:"teach", trg:"및", src:"and, as well as", pos:"adv", gender:null,
     note:"Formal written connector. Used in lists and official documents. NOT used in speech.",
     example:"A: 이름 및 연락처를 적어 주세요.\nB: 네, 여기 있습니다.",
     exampleSrc:"A: Please write your name and contact information.\nB: Yes, here it is.",
     funFact:"및 is strictly for formal writing: contracts, forms, news articles. In conversation, Koreans use 하고, (이)랑, or 그리고. Using 및 in casual speech sounds robotic and overly stiff."},

    {type:"teach", trg:"아무래도", src:"no matter what, after all, probably", pos:"adv", gender:null,
     note:"아무리 해도 (no matter how one does it) contracted. Signals a conclusion after deliberation.",
     example:"A: 아무래도 오늘은 못 갈 것 같아요.\nB: 괜찮아요. 다음에 가요.",
     exampleSrc:"A: After all, I don't think I can go today.\nB: It's okay. Let's go next time.",
     funFact:"아무래도 softens bad news. Koreans use it to gently deliver unwelcome conclusions: 아무래도 헤어져야 할 것 같아 (I think we should break up, after all) sounds gentler than a blunt statement."},

    {type:"teach", trg:"아무튼", src:"anyway, in any case, anyhow", pos:"adv", gender:null,
     note:"Contracted from 아무리 하여도 + ㄴ. Topic-shifter. 아무튼 가자 = anyway, let's go.",
     example:"A: 이유가 뭐든 아무튼 미안해요.\nB: 아무튼 다음부터 조심하세요.",
     exampleSrc:"A: Whatever the reason, anyway I'm sorry.\nB: In any case, be careful from now on.",
     funFact:"아무튼 vs. 어쨌든: nearly identical. 아무튼 is slightly more casual. Both are discourse workhorses for changing topics or wrapping up discussions. K-variety shows use them constantly."},

    {type:"teach", trg:"방금", src:"just now, a moment ago", pos:"adv", gender:null,
     note:"Sino-Korean (方今). More immediate than 아까. 방금 전 = just a moment ago.",
     example:"A: 방금 뭐라고 했어요?\nB: 방금 회의가 끝났다고 했어요.",
     exampleSrc:"A: What did you just say?\nB: I said the meeting just ended.",
     funFact:"방금 vs. 아까: 방금 is seconds to minutes ago, 아까 is minutes to hours ago. From hanja 方 (just) + 今 (now). 방금 전에 literally means 'before just now,' an emphatic form."},

    // --- Quiz batch 4 ---
    {type:"match", pairs:[
      {trg:"없이", src:"without"},
      {trg:"아무래도", src:"no matter what, probably"},
      {trg:"아무튼", src:"anyway"},
      {trg:"방금", src:"just now"}
    ]},

    {type:"mc",
     q:"다음 중 공식적인 글에서만 쓰는 단어는?",
     opts:["아까","얼른","및","방금"],
     ans:"및",
     hint:"This formal written connector means 'and/as well as' and appears in documents and contracts, never in casual speech."},

    {type:"fb",
     s:"{1} 오늘은 못 갈 것 같아요.",
     a:["아무래도"],
     opts:["아무래도","무조건","반드시","분명히"],
     hint:"An adverb that softens a reluctant conclusion. It signals the speaker has thought it over and reached an unwelcome decision.",
     sSrc:"{1}, I don't think I can go today."}
  ]
};
export default LESSON_37;
