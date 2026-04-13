// Korean B1 Final Gap - Lesson 19: Quantity, Scope & Connectors
const LESSON_19 = {
  id:"kov2_b1fin_l19", title:"범위와 연결어", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"Quantity, Scope & Connectors",
     desc:"Master words for expressing scope, portions, alternatives, and logical connections. These functional words tie sentences together and express precise quantities.",
     goals:["Learn 20 words for scope, portions, and connectors","Express 'at least,' 'except,' 'the whole,' and 'or'","Use formal discourse connectors in Korean"]},

    {type:"teach", trg:"포함되다", src:"to be included, to be contained", pos:"verb", gender:null,
     note:"Passive of 포함하다. Something is included within a group.",
     example:"A: 세금이 가격에 포함돼요?\nB: 네, 세금이 포함된 가격이에요.",
     exampleSrc:"A: Is tax included in the price?\nB: Yes, it's a price that includes tax.",
     funFact:"포함되다 is essential for shopping and contracts. 배송비 포함 (shipping included) vs 배송비 별도 (shipping extra) matters when ordering online."},

    {type:"teach", trg:"함부로", src:"recklessly, carelessly, without permission", pos:"adv", gender:null,
     note:"Native Korean adverb. Doing something without proper thought or authority.",
     example:"A: 남의 물건을 함부로 만지면 안 돼요.\nB: 알겠어요, 조심할게요.",
     exampleSrc:"A: You shouldn't touch others' things carelessly.\nB: I understand, I'll be careful.",
     funFact:"함부로 implies crossing a boundary: 함부로 말하다 (speak recklessly), 함부로 판단하다 (judge carelessly). It is a gentle reprimand."},

    {type:"teach", trg:"하여튼", src:"anyway, in any case, regardless", pos:"adv", gender:null,
     note:"Formal version of 하여간/아무튼. Dismisses a digression.",
     example:"A: 하여튼 결론은 뭐예요?\nB: 하여튼 우리는 계속 노력해야 해요.",
     exampleSrc:"A: Anyway, what's the conclusion?\nB: In any case, we need to keep trying.",
     funFact:"하여튼 is slightly more formal than 아무튼 (anyway). Both redirect a conversation to the main point. 어쨌든 is another common variant."},

    {type:"teach", trg:"혹은", src:"or, alternatively", pos:"adv", gender:null,
     note:"Sino-Korean (或). Formal way to say 'or.' More literary than 또는.",
     example:"A: 이메일 혹은 전화로 연락 주세요.\nB: 네, 이메일로 보내 드릴게요.",
     exampleSrc:"A: Please contact us by email or phone.\nB: Okay, I'll send an email.",
     funFact:"혹은 is the most formal 'or.' Formality ladder: 혹은 (most formal) > 또는 (formal) > 아니면 (casual). Choose based on context."},

    {type:"teach", trg:"왠지", src:"somehow, for some reason", pos:"adv", gender:null,
     note:"Contraction of 왜인지 (for what reason). An unexplained feeling.",
     example:"A: 왠지 오늘 기분이 좋아요.\nB: 좋은 일이 생길 것 같아요!",
     exampleSrc:"A: I feel good today for some reason.\nB: Something good might happen!",
     funFact:"왠지 expresses an intuition without clear logic: 왠지 불안하다 (I feel uneasy for some reason). It is a very Korean expression of vague feelings."},

    {type:"fb",
     s:"남의 물건을 {1} 만지지 마세요.",
     a:["함부로"],
     opts:["함부로","왠지","하여튼","혹은"],
     hint:"This adverb means carelessly or without permission, implying boundary-crossing.",
     sSrc:"Don't touch others' belongings {1}."},

    {type:"teach", trg:"인제", src:"now, at this point (dialectal/formal)", pos:"adv", gender:null,
     note:"Variant of 이제 (now). Used in some dialects and formal speech.",
     example:"A: 인제 출발할까요?\nB: 네, 인제 가요.",
     exampleSrc:"A: Shall we leave now?\nB: Yes, let's go now.",
     funFact:"인제 is standard but less common than 이제 in daily speech. Some regional dialects prefer 인제. There is also a town called 인제 in Gangwon Province."},

    {type:"teach", trg:"즉", src:"that is, namely, in other words", pos:"adv", gender:null,
     note:"Sino-Korean (卽). A logical connector for rephrasing or clarifying.",
     example:"A: 한국의 수도, 즉 서울에 가 봤어요?\nB: 네, 작년에 갔어요.",
     exampleSrc:"A: Have you been to Korea's capital, that is, Seoul?\nB: Yes, I went last year.",
     funFact:"즉 is the Korean equivalent of 'i.e.' or 'namely.' Academic papers and news articles use it to clarify: A, 즉 B (A, namely B)."},

    {type:"teach", trg:"즉시", src:"immediately, at once", pos:"noun", gender:null,
     note:"Sino-Korean (卽時). 즉 (卽) = immediately, 시 (時) = time.",
     example:"A: 문제가 생기면 즉시 알려 주세요.\nB: 네, 즉시 연락할게요.",
     exampleSrc:"A: If a problem arises, let me know immediately.\nB: Okay, I'll contact you right away.",
     funFact:"즉시 is more formal than 바로 (right away). Emergency instructions always use 즉시: 즉시 대피하세요 (evacuate immediately)."},

    {type:"teach", trg:"외", src:"other than, besides, except", pos:"noun", gender:null,
     note:"Sino-Korean (外). Bound noun meaning 'outside of' or 'other than.'",
     example:"A: 이 외에 다른 질문 있어요?\nB: 아니요, 이 외에는 없어요.",
     exampleSrc:"A: Are there any other questions besides this?\nB: No, there are none besides this.",
     funFact:"외 works as a suffix: 그 외 (other than that), 이 외에 (besides this). It efficiently marks what is excluded."},

    {type:"teach", trg:"이외", src:"other than, apart from, besides", pos:"noun", gender:null,
     note:"이 (this) + 외 (outside). More specific than plain 외.",
     example:"A: 한국어 이외에 다른 언어를 할 수 있어요?\nB: 네, 영어와 일본어도 해요.",
     exampleSrc:"A: Can you speak languages other than Korean?\nB: Yes, I can also speak English and Japanese.",
     funFact:"이외에도 (in addition to this) is a useful connector: 이 이외에도 많은 장점이 있다 (there are many advantages besides this)."},

    {type:"match", pairs:[
      {trg:"즉", src:"that is/namely"},
      {trg:"즉시", src:"immediately"},
      {trg:"혹은", src:"or/alternatively"},
      {trg:"왠지", src:"for some reason"},
      {trg:"이외", src:"other than/besides"}
    ]},

    {type:"teach", trg:"이하", src:"below, under, less than", pos:"noun", gender:null,
     note:"Sino-Korean (以下). 이 (以) = by means of, 하 (下) = below.",
     example:"A: 12세 이하는 무료예요.\nB: 그럼 우리 아이는 무료네요!",
     exampleSrc:"A: Children 12 and under are free.\nB: Then our child is free!",
     funFact:"이하 and 이상 (above) are essential for understanding Korean rules: 18세 이상 (18 and above), 영하 10도 이하 (below minus 10 degrees)."},

    {type:"teach", trg:"일부", src:"a part, some, a portion", pos:"noun", gender:null,
     note:"Sino-Korean (一部). 일 (一) = one, 부 (部) = part.",
     example:"A: 일부 사람들만 찬성했어요?\nB: 네, 일부만 찬성하고 나머지는 반대했어요.",
     exampleSrc:"A: Did only some people agree?\nB: Yes, only some agreed and the rest opposed.",
     funFact:"일부 is the polite way to say 'some' when you mean 'not all': 일부 지역 (some areas), 일부 학생 (some students). It avoids overgeneralizing."},

    {type:"teach", trg:"전체", src:"the whole, entire, total", pos:"noun", gender:null,
     note:"Sino-Korean (全體). 전 (全) = all, 체 (體) = body.",
     example:"A: 전체 인원이 몇 명이에요?\nB: 전체 100명이에요.",
     exampleSrc:"A: What's the total number of people?\nB: The total is 100 people.",
     funFact:"전체 is the opposite of 일부 (some). 전체적으로 (overall) is a common summary phrase in evaluations and reports."},

    {type:"teach", trg:"전체적", src:"overall, as a whole", pos:"noun", gender:null,
     note:"전체 + 적. Used to describe the big picture.",
     example:"A: 전체적으로 어떻게 생각해요?\nB: 전체적으로 괜찮은 것 같아요.",
     exampleSrc:"A: What do you think overall?\nB: Overall, I think it's okay.",
     funFact:"전체적으로 is the standard way to give a summary judgment: 전체적으로 만족해요 (I'm satisfied overall). Useful in reviews and feedback."},

    {type:"teach", trg:"절반", src:"half", pos:"noun", gender:null,
     note:"Sino-Korean (折半). 절 (折) = fold/break, 반 (半) = half.",
     example:"A: 절반은 이미 끝났어요.\nB: 그러면 절반만 더 하면 돼요.",
     exampleSrc:"A: Half is already done.\nB: Then we just need to do the other half.",
     funFact:"절반 is more formal than 반 (half). In statistics: 응답자의 절반 이상 (more than half of respondents). It sounds precise and objective."},

    {type:"mc",
     q:"'전체'의 반대 개념은?",
     opts:["절반","일부","이하","이외"],
     ans:"일부",
     hint:"The opposite of 'the whole' is just a portion or some of it."},

    {type:"teach", trg:"적어도", src:"at least, at the minimum", pos:"adv", gender:null,
     note:"적다 (to be few) + 어도 (even if). Even if it's few...",
     example:"A: 적어도 한 시간은 공부해야 해요.\nB: 알겠어요, 적어도 그만큼은 할게요.",
     exampleSrc:"A: You should study for at least an hour.\nB: I understand, I'll do at least that much.",
     funFact:"적어도 and 최소한 both mean 'at least,' but 적어도 is more conversational while 최소한 is more formal/written."},

    {type:"teach", trg:"적극", src:"active, proactive, positive", pos:"noun", gender:null,
     note:"Sino-Korean (積極). 적 (積) = accumulate, 극 (極) = extreme/pole.",
     example:"A: 적극적으로 참여해 주세요.\nB: 네, 적극적으로 할게요!",
     exampleSrc:"A: Please participate actively.\nB: Yes, I'll be proactive!",
     funFact:"적극적 (proactive) contrasts with 소극적 (passive). Korean workplaces highly value 적극적인 태도 (proactive attitude) in employees."},

    {type:"teach", trg:"적극적", src:"active, proactive, assertive", pos:"noun", gender:null,
     note:"적극 + 적 (的). Describing someone who takes initiative.",
     example:"A: 적극적인 자세가 필요해요.\nB: 맞아요, 적극적으로 해 봐야 해요.",
     exampleSrc:"A: An active attitude is needed.\nB: Right, you need to try doing it proactively.",
     funFact:"적극적 is always positive in Korean. Job descriptions always list 적극적인 사람 (proactive person) as a desired quality."},

    {type:"teach", trg:"울리다", src:"to make ring, to make cry, to resonate", pos:"verb", gender:null,
     note:"Causative of 울다 (to cry/ring). Making something produce sound or tears.",
     example:"A: 종을 울려 주세요.\nB: 네, 지금 울릴게요.",
     exampleSrc:"A: Please ring the bell.\nB: Okay, I'll ring it now.",
     funFact:"울리다 works for bells (종을 울리다), hearts (마음을 울리다 = move someone's heart), and alarms (알람을 울리다). A versatile causative."},

    {type:"teach", trg:"우리말", src:"our language (Korean)", pos:"noun", gender:null,
     note:"Compound: 우리 (our) + 말 (language). How Koreans refer to Korean.",
     example:"A: 이 표현은 우리말로 뭐예요?\nB: 우리말로 하면 '감사합니다'예요.",
     exampleSrc:"A: What is this expression in Korean?\nB: In Korean, it's 'gamsahamnida.'",
     funFact:"우리말 reflects Korean national identity: 'our language.' The concept of 우리 (we/our) is central to Korean collectivism. 우리나라 = our country."},

    {type:"fb",
     s:"{1} 하루에 한 시간은 운동해야 해요.",
     a:["적어도"],
     opts:["적어도","적극적","전체적","일부"],
     hint:"This adverb sets a minimum threshold, meaning 'at the very least.'",
     sSrc:"You should exercise {1} one hour a day."}
  ]
};
export default LESSON_19;
