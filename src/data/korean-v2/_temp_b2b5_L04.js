// Korean B2. Batch 5, Lesson 4: Inequality and Misfortune
// Words: 분필, 불가피하다, 불과, 불과하다, 불구하다, 불꽃, 불러일으키다, 불리하다, 불법, 불쌍하다, 불어오다, 불완전하다, 불이익, 불편, 불평, 불평등하다, 불필요하다, 불행, 불행하다, 불확실하다

const LESSON_4 = {
  id:"kov2_b2b5_l4", title:"불확실한 세상", icon:"🔥", xp:15, board:true,
  steps:[
    {type:"intro", title:"불확실한 세상",
     desc:"Learn words built with the negative prefix 불 (not). This lesson covers essential vocabulary for expressing disadvantage, uncertainty, and injustice at the B2 level.",
     goals:["Master 20 words using the negative prefix 불","Distinguish nuances between similar 불- compounds","Express complex negative concepts fluently"]},

    {type:"tip", title:"The 불 Prefix: Negation in Sino-Korean",
     text:"The prefix 불 (不) means 'not' or 'un-' and creates negative adjectives and nouns:\n\n불가능 (impossible) = 불 + 가능 (possible)\n불편 (discomfort) = 불 + 편 (comfort)\n불행 (unhappiness) = 불 + 행 (happiness)\n\nThis is one of the most productive prefixes in Korean. Mastering it unlocks dozens of B2-level words."},

    {type:"teach", trg:"분필", src:"chalk", pos:"noun", gender:null,
     note:"Sino-Korean. 粉 (powder) + 筆 (brush/writing tool).\nA writing stick made of powder.",
     example:"A: 분필로 칠판에 써 주세요.\nB: 하얀 분필밖에 없는데 괜찮아요?",
     exampleSrc:"A: Please write on the blackboard with chalk.\nB: I only have white chalk, is that okay?",
     funFact:"Despite digital classrooms, many Korean schools still use 분필 and blackboards. Teachers joke about chalk dust."},

    {type:"teach", trg:"불가피하다", src:"to be unavoidable, to be inevitable", pos:"adj", gender:null,
     note:"Sino-Korean. 不可避 (cannot avoid).\nSomething that cannot be escaped.",
     example:"A: 일정 변경이 불가피해졌어요.\nB: 어쩔 수 없죠, 다시 잡읍시다.",
     exampleSrc:"A: A schedule change has become unavoidable.\nB: It cannot be helped, let's reschedule.",
     funFact:"불가피한 사정 (unavoidable circumstances) is a common phrase in formal apologies and announcements."},

    {type:"teach", trg:"불과", src:"only, merely, no more than", pos:"adv", gender:null,
     note:"Sino-Korean. 不 (not) + 過 (exceed).\nEmphasizes how small an amount is.",
     example:"A: 시험까지 불과 이틀 남았어.\nB: 정말? 시간이 너무 빨리 갔다.",
     exampleSrc:"A: There are only two days left until the exam.\nB: Really? Time went by so fast.",
     funFact:"불과 emphasizes surprisingly small amounts. It carries a tone of 'can you believe it is only this much?'"},

    {type:"teach", trg:"불과하다", src:"to be merely, to be nothing more than", pos:"adj", gender:null,
     note:"불과 + 하다.\nUsed to minimize the significance of something.",
     example:"A: 성공 확률이 10%에 불과해.\nB: 그래도 시도해 볼 가치는 있어.",
     exampleSrc:"A: The success rate is merely 10%.\nB: Still, it is worth trying.",
     funFact:"에 불과하다 is a set pattern meaning 'is nothing more than.' Very common in news and essays."},

    {type:"teach", trg:"불구하다", src:"despite, regardless (used as -에도 불구하고)", pos:"verb", gender:null,
     note:"Sino-Korean. 不 (not) + 拘 (restrain).\nAlmost always used in the pattern -에도 불구하고.",
     example:"A: 비가 와도 불구하고 경기는 계속됐어.\nB: 선수들이 대단하다.",
     exampleSrc:"A: Despite the rain, the game continued.\nB: The players are impressive.",
     funFact:"에도 불구하고 is one of the most important grammar patterns for TOPIK II writing tasks."},

    {type:"fb",
     s:"어려움에도 {1} 끝까지 포기하지 않았다.",
     a:["불구하고"],
     opts:["불구하고","불과하고","불리하고","불편하고"],
     hint:"Which phrase means 'despite' or 'regardless of,' used after a difficulty to show perseverance?",
     sSrc:"{1} the difficulties, they did not give up until the end."},

    {type:"teach", trg:"불꽃", src:"flame, spark", pos:"noun", gender:null,
     note:"불 (fire) + 꽃 (flower).\nLiterally 'fire flower,' meaning a flame or spark.",
     example:"A: 불꽃놀이 보러 갈래?\nB: 좋아! 한강에서 보자.",
     exampleSrc:"A: Do you want to go see the fireworks?\nB: Great! Let's watch from the Han River.",
     funFact:"The Seoul International Fireworks Festival (서울 세계 불꽃축제) on the Han River draws millions each October."},

    {type:"teach", trg:"불러일으키다", src:"to arouse, to provoke, to stir up", pos:"verb", gender:null,
     note:"불러 (call) + 일으키다 (raise up).\nTo cause a reaction or emotion to emerge.",
     example:"A: 그 연설이 큰 논란을 불러일으켰어.\nB: 정치인의 말 한마디가 이렇게 큰 파장을 일으키다니.",
     exampleSrc:"A: That speech stirred up great controversy.\nB: One word from a politician caused such a big ripple.",
     funFact:"Common collocations: 논란을 불러일으키다 (stir controversy), 감동을 불러일으키다 (arouse emotion)."},

    {type:"teach", trg:"불리하다", src:"to be disadvantageous, to be unfavorable", pos:"adj", gender:null,
     note:"Sino-Korean. 不 (not) + 利 (benefit).\nA situation that works against someone.",
     example:"A: 이 조건은 우리한테 불리해.\nB: 다시 협상해 봐야겠다.",
     exampleSrc:"A: These conditions are unfavorable for us.\nB: We should try to negotiate again.",
     funFact:"The opposite is 유리하다 (advantageous). These two form a natural pair in Korean."},

    {type:"teach", trg:"불법", src:"illegality, being illegal", pos:"noun", gender:null,
     note:"Sino-Korean. 不 (not) + 法 (law).\nAgainst the law.",
     example:"A: 불법 주차하면 벌금을 내야 해.\nB: 알아, 주차장에 세울게.",
     exampleSrc:"A: If you park illegally, you have to pay a fine.\nB: I know, I will park in the parking lot.",
     funFact:"불법 다운로드 (illegal downloading) was a major issue in Korea, leading to strict copyright enforcement."},

    {type:"teach", trg:"불쌍하다", src:"to be pitiful, to be pathetic", pos:"adj", gender:null,
     note:"Native Korean adjective.\nFeeling sorry for someone's suffering.",
     example:"A: 길에서 버려진 강아지를 봤어. 정말 불쌍했어.\nB: 동물 보호소에 연락했어?",
     exampleSrc:"A: I saw an abandoned puppy on the street. It was really pitiful.\nB: Did you contact an animal shelter?",
     funFact:"불쌍하다 expresses sympathy for someone weaker. Koreans use it readily for animals and children."},

    {type:"teach", trg:"불어오다", src:"to blow in (wind)", pos:"verb", gender:null,
     note:"불다 (to blow) + 어오다 (come toward).\nWind coming toward the speaker.",
     example:"A: 시원한 바람이 불어온다.\nB: 가을이 오나 봐.",
     exampleSrc:"A: A cool breeze is blowing in.\nB: Autumn must be coming.",
     funFact:"Korean direction verbs are precise: 불어오다 (blow toward me) vs 불어가다 (blow away from me)."},

    {type:"teach", trg:"불완전하다", src:"to be incomplete, to be imperfect", pos:"adj", gender:null,
     note:"Sino-Korean. 不完全 (not complete).\nLacking something needed for wholeness.",
     example:"A: 이 보고서는 아직 불완전해요.\nB: 어떤 부분이 빠져 있어요?",
     exampleSrc:"A: This report is still incomplete.\nB: Which parts are missing?",
     funFact:"In Korean grammar, 불완전 동사 (defective verbs) refers to verbs that cannot be conjugated in all forms."},

    {type:"mc",
     q:"다음 중 '법에 어긋나는 것'을 의미하는 단어는?",
     opts:["불법","불편","불평","불행"],
     ans:"불법",
     hint:"Which word combines the negative prefix with 법 (law) to mean something against the law?"},

    {type:"teach", trg:"불이익", src:"disadvantage, penalty", pos:"noun", gender:null,
     note:"Sino-Korean. 不 (not) + 利益 (benefit).\nA loss or penalty suffered.",
     example:"A: 지각하면 불이익이 있어요.\nB: 어떤 불이익이요?",
     exampleSrc:"A: There are penalties for being late.\nB: What kind of penalties?",
     funFact:"In Korean workplaces, 불이익을 받다 (to receive a disadvantage) can mean losing a promotion or bonus."},

    {type:"teach", trg:"불편", src:"inconvenience, discomfort", pos:"noun", gender:null,
     note:"Sino-Korean. 不 (not) + 便 (convenient).\nA state of discomfort.",
     example:"A: 불편한 점이 있으면 말씀해 주세요.\nB: 네, 감사합니다.",
     exampleSrc:"A: If there is any inconvenience, please let us know.\nB: Yes, thank you.",
     funFact:"불편을 드려 죄송합니다 (Sorry for the inconvenience) is the standard apology phrase in Korean customer service."},

    {type:"teach", trg:"불평", src:"complaint, grumbling", pos:"noun", gender:null,
     note:"Sino-Korean. 不 (not) + 平 (flat/even).\nExpression of dissatisfaction.",
     example:"A: 불평만 하지 말고 해결책을 찾아 봐.\nB: 맞아, 그게 더 생산적이지.",
     exampleSrc:"A: Instead of just complaining, try to find a solution.\nB: Right, that is more productive.",
     funFact:"불평불만 (complaints and dissatisfaction) is a common four-character expression doubling the negative emphasis."},

    {type:"teach", trg:"불평등하다", src:"to be unequal, to be inequitable", pos:"adj", gender:null,
     note:"Sino-Korean. 不平等 (not equal).\nLacking fairness or equality.",
     example:"A: 임금이 불평등하다는 문제가 있어.\nB: 성별에 따른 차이가 아직 커.",
     exampleSrc:"A: There is a problem of unequal wages.\nB: The gap based on gender is still large.",
     funFact:"소득 불평등 (income inequality) and 성별 불평등 (gender inequality) are major topics in Korean social discourse."},

    {type:"teach", trg:"불필요하다", src:"to be unnecessary", pos:"adj", gender:null,
     note:"Sino-Korean. 不必要 (not necessary).\nSomething that is not needed.",
     example:"A: 불필요한 지출을 줄여야 해.\nB: 어디서부터 줄일까?",
     exampleSrc:"A: We need to reduce unnecessary spending.\nB: Where should we start cutting?",
     funFact:"In business, 불필요한 회의 (unnecessary meetings) is a frequent complaint among Korean office workers."},

    {type:"teach", trg:"불행", src:"misfortune, unhappiness", pos:"noun", gender:null,
     note:"Sino-Korean. 不 (not) + 幸 (fortune).\nThe state of being unlucky or unhappy.",
     example:"A: 불행은 혼자 오지 않는다고 하잖아.\nB: 맞아, 힘들 때 더 힘든 일이 생기더라.",
     exampleSrc:"A: They say misfortune does not come alone.\nB: Right, when times are hard, harder things happen.",
     funFact:"The Korean proverb 불행 중 다행 means 'fortune within misfortune,' similar to 'every cloud has a silver lining.'"},

    {type:"teach", trg:"불행하다", src:"to be unhappy, to be unfortunate", pos:"adj", gender:null,
     note:"불행 + 하다.\nThe adjective form describing unhappiness.",
     example:"A: 불행하다고 느끼면 도움을 받아야 해.\nB: 주변 사람들에게 이야기하는 것도 좋아.",
     exampleSrc:"A: If you feel unhappy, you should get help.\nB: Talking to people around you is also good.",
     funFact:"Tolstoy's famous opening about unhappy families is well known in Korea: 불행한 가정은 각각의 이유로 불행하다."},

    {type:"teach", trg:"불확실하다", src:"to be uncertain, to be unclear", pos:"adj", gender:null,
     note:"Sino-Korean. 不確實 (not certain).\nLacking certainty or clarity.",
     example:"A: 미래가 불확실해서 걱정이야.\nB: 확실한 건 아무것도 없어. 그냥 최선을 다하자.",
     exampleSrc:"A: I am worried because the future is uncertain.\nB: Nothing is certain. Let's just do our best.",
     funFact:"불확실성 (uncertainty) is a key concept in economics. Korean news frequently discusses 경제 불확실성."},

    {type:"fb",
     s:"경제 전망이 {1} 투자를 미루기로 했다.",
     a:["불확실해서"],
     opts:["불확실해서","불평등해서","불필요해서","불가피해서"],
     hint:"Which adjective means uncertain or unclear, making someone delay a decision?",
     sSrc:"Because the economic outlook is {1}, we decided to postpone the investment."},

    {type:"match", pairs:[
      {trg:"불편", src:"discomfort"},
      {trg:"불행", src:"misfortune"},
      {trg:"불법", src:"illegality"},
      {trg:"불꽃", src:"flame"}
    ]}
  ]
};
export default LESSON_4;
