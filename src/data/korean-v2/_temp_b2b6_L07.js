// Korean B2 — Batch 6, Lesson 7: Reality and Practice
// Words: 실제로, 실질적, 실천, 실천하다, 실체, 실컷, 실태, 실패, 실험, 실현, 실현되다, 실현하다, 싫어지다, 심각해지다, 심리적, 심부름, 심사, 심심하다, 심정, 심판

const LESSON_7 = {
  id:"kov2_b2b6_l7", title:"실천과 심판", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"실천과 심판",
     desc:"Explore words about putting plans into action, experiments, and judgment. Many use 實 (real/actual) and 心 (heart/mind) roots.",
     goals:["Master 20 words about practice, failure, and emotional states","Understand 實 compounds for reality and action","Use psychology and judgment vocabulary in context"]},

    {type:"teach", trg:"실제로", src:"actually, in reality", pos:"adv", gender:null,
     note:"Sino-Korean. 實際 (actual) + 로 (by way of).\nWhat really happens versus expectations.",
     example:"A: 실제로 해 보니까 어때?\nB: 생각보다 어려웠어.",
     exampleSrc:"A: How was it when you actually tried it?\nB: It was harder than I thought.",
     funFact:"실제로 is more formal than 사실 (in fact). It emphasizes the gap between expectation and reality."},

    {type:"teach", trg:"실질적", src:"substantial, practical", pos:"noun", gender:null,
     note:"Sino-Korean. 實質 (substance) + 的 (quality).\nHaving real practical effect.",
     example:"A: 실질적인 도움이 필요해요.\nB: 구체적으로 뭐가 필요하세요?",
     exampleSrc:"A: I need substantial help.\nB: Specifically, what do you need?",
     funFact:"실질적 vs 형식적 (substantial vs formal/superficial) is a common contrast in Korean discussion."},

    {type:"teach", trg:"실천", src:"practice, putting into action", pos:"noun", gender:null,
     note:"Sino-Korean. 實 (real) + 踐 (tread).\nActually doing what you say or plan.",
     example:"A: 계획만 세우지 말고 실천해야지.\nB: 알아, 오늘부터 시작할게.",
     exampleSrc:"A: You should not just make plans, you need to put them into action.\nB: I know, I will start today.",
     funFact:"말보다 실천 (actions over words) is a popular Korean saying. It matches 'actions speak louder than words.'"},

    {type:"teach", trg:"실천하다", src:"to put into practice, to carry out", pos:"verb", gender:null,
     note:"실천 + 하다 (to do).\nActively doing what was planned or promised.",
     example:"A: 새해 목표를 실천하고 있어?\nB: 운동은 하고 있는데 독서는 못 하고 있어.",
     exampleSrc:"A: Are you carrying out your New Year's goals?\nB: I am exercising but I have not been reading.",
     funFact:"Korean New Year resolutions (새해 다짐) are famously hard to 실천하다. January gym crowds prove it."},

    {type:"mc",
     q:"'말보다 실천'이 강조하는 것은?",
     opts:["행동으로 보여 주는 것","말을 잘하는 것","계획을 세우는 것","다른 사람을 비판하는 것"],
     ans:"행동으로 보여 주는 것",
     hint:"This saying values doing over talking. What matters more than words?"},

    {type:"teach", trg:"실체", src:"true nature, substance, entity", pos:"noun", gender:null,
     note:"Sino-Korean. 實 (real) + 體 (body).\nThe true form behind appearances.",
     example:"A: 드디어 사건의 실체가 드러났어.\nB: 예상과 많이 달랐지?",
     exampleSrc:"A: The true nature of the incident was finally revealed.\nB: It was very different from what we expected, right?",
     funFact:"실체를 밝히다 (to reveal the true nature) is a phrase from Korean investigative journalism."},

    {type:"teach", trg:"실컷", src:"to one's heart's content, fully", pos:"adv", gender:null,
     note:"Native Korean adverb.\nDoing something as much as you want.",
     example:"A: 오늘은 실컷 놀자!\nB: 좋아! 뭐 할까?",
     exampleSrc:"A: Let's play to our heart's content today!\nB: Great! What should we do?",
     funFact:"실컷 has a satisfying, indulgent feeling. It often pairs with 먹다 (eat), 자다 (sleep), or 놀다 (play)."},

    {type:"teach", trg:"실태", src:"actual conditions, current state", pos:"noun", gender:null,
     note:"Sino-Korean. 實 (real) + 態 (condition).\nThe true state of affairs.",
     example:"A: 환경 오염 실태를 조사했어요.\nB: 결과가 심각한가요?",
     exampleSrc:"A: We investigated the actual conditions of environmental pollution.\nB: Are the results serious?",
     funFact:"실태 조사 (condition survey) is a standard Korean research method used by government and media."},

    {type:"teach", trg:"실패", src:"failure", pos:"noun", gender:null,
     note:"Sino-Korean. 失 (lose) + 敗 (defeat).\nNot succeeding in an attempt.",
     example:"A: 실패는 성공의 어머니야.\nB: 맞아, 포기하지 말자.",
     exampleSrc:"A: Failure is the mother of success.\nB: Right, let's not give up.",
     funFact:"실패는 성공의 어머니 is the Korean version of 'failure is the mother of success,' widely quoted."},

    {type:"teach", trg:"실험", src:"experiment", pos:"noun", gender:null,
     note:"Sino-Korean. 實 (real) + 驗 (test).\nA scientific test to verify something.",
     example:"A: 과학 실험 결과가 어떻게 나왔어?\nB: 가설이 맞는 것 같아.",
     exampleSrc:"A: How did the science experiment turn out?\nB: It seems the hypothesis was correct.",
     funFact:"실험실 (laboratory) adds 室 (room). Korean schools require 실험 in science education from middle school."},

    {type:"fb",
     s:"과학자들은 수백 번의 {1}을 통해 새로운 사실을 발견했다.",
     a:["실험"],
     opts:["실험","실패","실천","실태"],
     hint:"Scientists discover new facts through repeated scientific tests in their labs.",
     sSrc:"Scientists discovered new facts through hundreds of {1}."},

    {type:"teach", trg:"실현", src:"realization, fulfillment", pos:"noun", gender:null,
     note:"Sino-Korean. 實 (real) + 現 (appear).\nMaking something real that was once a dream.",
     example:"A: 꿈의 실현을 위해 노력하고 있어.\nB: 꼭 이루어질 거야.",
     exampleSrc:"A: I am working toward the realization of my dream.\nB: It will definitely come true.",
     funFact:"꿈의 실현 (dream fulfillment) is a motivational phrase seen in Korean commencement speeches."},

    {type:"teach", trg:"실현되다", src:"to be realized, to come true", pos:"verb", gender:null,
     note:"실현 + 되다 (passive).\nA dream or plan becoming reality.",
     example:"A: 드디어 오랜 꿈이 실현됐어.\nB: 정말 축하해!",
     exampleSrc:"A: My long-time dream has finally been realized.\nB: Congratulations!",
     funFact:"The active form 실현하다 emphasizes personal effort. The passive 실현되다 feels more like destiny."},

    {type:"teach", trg:"실현하다", src:"to realize, to make come true", pos:"verb", gender:null,
     note:"실현 + 하다 (to do).\nActively bringing a plan or dream to fruition.",
     example:"A: 목표를 실현하려면 꾸준히 노력해야 해.\nB: 맞아, 매일 조금씩 하자.",
     exampleSrc:"A: To realize your goals, you need to make consistent effort.\nB: Right, let's do a little every day.",
     funFact:"Korean motivational culture distinguishes 꿈꾸다 (to dream), 실천하다 (to practice), and 실현하다 (to achieve)."},

    {type:"teach", trg:"싫어지다", src:"to come to dislike", pos:"verb", gender:null,
     note:"싫다 (to dislike) + -어지다 (become).\nGradually developing a dislike for something.",
     example:"A: 요즘 그 음식이 싫어졌어.\nB: 왜? 전에는 좋아했잖아.",
     exampleSrc:"A: I have come to dislike that food lately.\nB: Why? You used to like it before.",
     funFact:"Korean -어지다 verbs express gradual change: 좋아지다 (come to like), 싫어지다 (come to dislike)."},

    {type:"teach", trg:"심각해지다", src:"to become serious, to worsen", pos:"verb", gender:null,
     note:"심각하다 (serious) + -해지다 (become).\nA situation growing more severe.",
     example:"A: 교통 문제가 점점 심각해지고 있어.\nB: 대책이 필요해.",
     exampleSrc:"A: The traffic problem is becoming increasingly serious.\nB: We need countermeasures.",
     funFact:"Korean news frequently uses 심각해지다 for worsening social problems: pollution, aging, housing costs."},

    {type:"teach", trg:"심리적", src:"psychological", pos:"noun", gender:null,
     note:"Sino-Korean. 心理 (psychology) + 的 (quality).\nRelating to the mind and emotions.",
     example:"A: 심리적 압박감이 너무 커.\nB: 상담을 받아 보는 게 어때?",
     exampleSrc:"A: The psychological pressure is too great.\nB: How about getting counseling?",
     funFact:"Mental health awareness is growing in Korea. 심리 상담 (psychological counseling) is increasingly sought."},

    {type:"teach", trg:"심부름", src:"errand", pos:"noun", gender:null,
     note:"Native Korean word.\nA task done on someone else's behalf.",
     example:"A: 심부름 좀 해 줄래?\nB: 뭐 사다 줄까?",
     exampleSrc:"A: Can you run an errand for me?\nB: What should I buy?",
     funFact:"In Korean families, children are often asked to do 심부름. It is seen as a way to teach responsibility."},

    {type:"teach", trg:"심사", src:"examination, screening, judging", pos:"noun", gender:null,
     note:"Sino-Korean. 審 (examine) + 査 (investigate).\nEvaluating and judging something formally.",
     example:"A: 심사 결과가 언제 나와?\nB: 다음 주에 발표된대.",
     exampleSrc:"A: When will the judging results come out?\nB: They say it will be announced next week.",
     funFact:"심사위원 (judge/panel member) is the person who evaluates. Korean audition shows always feature 심사위원."},

    {type:"teach", trg:"심심하다", src:"to be bored", pos:"adj", gender:null,
     note:"Native Korean adjective.\nFeeling bored with nothing to do.",
     example:"A: 너무 심심해. 뭐 하지?\nB: 영화라도 볼까?",
     exampleSrc:"A: I am so bored. What should I do?\nB: How about watching a movie?",
     funFact:"심심풀이 means 'killing boredom.' 심심풀이 땅콩 (boredom-killing peanuts) is a famous Korean snack expression."},

    {type:"teach", trg:"심정", src:"feelings, state of mind", pos:"noun", gender:null,
     note:"Sino-Korean. 心 (heart) + 情 (emotion).\nOne's deep inner emotional state.",
     example:"A: 지금 내 심정을 이해해 줘.\nB: 물론이지, 힘들었지?",
     exampleSrc:"A: Please understand my feelings right now.\nB: Of course, it must have been hard.",
     funFact:"심정 is deeper than 기분 (mood). It implies a serious emotional state that deserves empathy."},

    {type:"teach", trg:"심판", src:"referee, judge; judgment", pos:"noun", gender:null,
     note:"Sino-Korean. 審 (examine) + 判 (judge).\nA person who judges or the act of judging.",
     example:"A: 심판이 공정하지 않았어!\nB: 그래도 결과는 받아들여야지.",
     exampleSrc:"A: The referee was not fair!\nB: Still, we have to accept the result.",
     funFact:"In Korean sports, 심판 decisions are final. But 비디오 판독 (video review) is now common in professional leagues."},

    {type:"mc",
     q:"스포츠 경기에서 규칙을 판단하는 사람은?",
     opts:["심판","심사","실장","실험"],
     ans:"심판",
     hint:"The person on the field who makes calls about fouls and goals in sports."},

    {type:"match", pairs:[
      {trg:"실패", src:"failure"},
      {trg:"실험", src:"experiment"},
      {trg:"실현", src:"realization"},
      {trg:"실천", src:"putting into action"}
    ]}
  ]
};

export default LESSON_7;
