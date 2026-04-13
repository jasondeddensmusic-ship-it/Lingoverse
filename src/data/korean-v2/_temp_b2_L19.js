// B2 Lesson 19: Records & Memory
// Words: 기억나다, 기억되다, 기대다, 기대되다, 기도, 기도하다, 기독교, 기둥, 기울다, 기울이다,
//        기뻐하다, 긴급, 기다, 금메달, 근래, 근로, 글쎄요, 글씨, 귀신, 귀중하다

const LESSON_19 = {
  id:"kov2_b2_l19", title:"기억과 기대", icon:"\uD83D\uDCA1", xp:15, board:true,
  steps:[
    {type:"intro", title:"Memory & Expectation",
     desc:"Learn vocabulary for memory, expectation, emotion, and various abstract and concrete nouns. These words appear across TOPIK II reading and listening passages.",
     goals:["Learn 20 words for memory, emotion, and various topics","Understand active vs. passive Korean verb pairs","Express expectations and emotional states formally"]},

    {type:"teach", trg:"\uAE30\uC5B5\uB098\uB2E4", src:"to remember; to recall (involuntary)", pos:"verb", gender:null,
     note:"Sino-Korean + Korean: memory (記憶) + come out (나다).\nA memory surfaces on its own.",
     example:"A: \uC5B4\uB9B4 \uB54C\uAC00 \uAE30\uC5B5\uB098\uC694.\nB: \uC5B4\uB5A4 \uAE30\uC5B5\uC774 \uB098\uC694?\nA: \uD560\uBA38\uB2C8 \uC9D1\uC774 \uAE30\uC5B5\uB098\uC694.\nB: \uC88B\uC740 \uAE30\uC5B5\uC774\uB124\uC694.",
     exampleSrc:"A: I remember my childhood.\nB: What memories come to mind?\nA: I remember my grandmother's house.\nB: Those are good memories.",
     funFact:"기억나다 (memory comes out) vs 기억하다 (I remember deliberately): Korean distinguishes involuntary recall from active remembering."},

    {type:"teach", trg:"\uAE30\uC5B5\uB418\uB2E4", src:"to be remembered (passive)", pos:"verb", gender:null,
     note:"Passive form. Something is remembered by others.",
     example:"A: \uADF8 \uC0AC\uAC74\uC740 \uC624\uB798 \uAE30\uC5B5\uB420 \uAC70\uC608\uC694.\nB: \uC5ED\uC0AC\uC801\uC778 \uC0AC\uAC74\uC774\uC8E0.\nA: \uC88B\uC740 \uC0AC\uB78C\uC73C\uB85C \uAE30\uC5B5\uB418\uACE0 \uC2F6\uC5B4\uC694.\nB: \uC120\uD55C \uC601\uD5A5\uC744 \uB0A8\uAE30\uC138\uC694.",
     exampleSrc:"A: That event will be remembered for a long time.\nB: It is a historical event.\nA: I want to be remembered as a good person.\nB: Leave a positive impact.",
     funFact:"기억되다 focuses on legacy. How you 기억되다 (are remembered) after you are gone is a powerful concept in Korean philosophy."},

    {type:"teach", trg:"\uAE30\uB300\uB2E4", src:"to lean on; to rest against", pos:"verb", gender:null,
     note:"Pure Korean verb. Physically leaning on something.",
     example:"A: \uBCBD\uC5D0 \uAE30\uB300\uC5B4 \uC26C\uC5C8\uC5B4\uC694.\nB: \uD53C\uACE4\uD558\uC138\uC694?\nA: \uC5B4\uAE68\uC5D0 \uAE30\uB300\uC5B4 \uC6B8\uC5C8\uC5B4\uC694.\nB: \uD798\uB4E4\uC5C8\uACA0\uB124\uC694.",
     exampleSrc:"A: I rested leaning against the wall.\nB: Are you tired?\nA: I cried leaning on their shoulder.\nB: That must have been hard.",
     funFact:"기대다 (to lean on physically) is different from 기대하다 (to expect). They look similar but have completely different origins and meanings."},

    {type:"teach", trg:"\uAE30\uB300\uB418\uB2E4", src:"to be anticipated; to look forward to", pos:"verb", gender:null,
     note:"Sino-Korean: expect (期) + wait (待) + become (되다).\nPassive: anticipation builds in you.",
     example:"A: \uB2E4\uC74C \uC5EC\uD589\uC774 \uAE30\uB300\uB3FC\uC694.\nB: \uC5B4\uB514\uB85C \uAC00\uC138\uC694?\nA: \uACB0\uACFC\uAC00 \uAE30\uB300\uB3FC\uC694.\nB: \uC88B\uC740 \uACB0\uACFC\uB97C \uAE30\uB300\uD569\uB2C8\uB2E4.",
     exampleSrc:"A: I am looking forward to the next trip.\nB: Where are you going?\nA: I am anticipating the results.\nB: I hope for good results.",
     funFact:"기대되다 is passive (excitement comes to me), while 기대하다 is active (I place my expectations). Both are extremely common."},

    {type:"teach", trg:"\uAE30\uB3C4", src:"prayer; praying", pos:"noun", gender:null,
     note:"Sino-Korean: pray (祈) + pray (禱).\nBoth characters mean 'pray,' intensifying.",
     example:"A: \uB9E4\uC77C \uAE30\uB3C4\uB97C \uD574\uC694.\nB: \uBB34\uC5C7\uC744 \uC704\uD574 \uAE30\uB3C4\uD574\uC694?\nA: \uAC00\uC871\uC758 \uAC74\uAC15\uC744 \uC704\uD574 \uAE30\uB3C4\uD574\uC694.\nB: \uC544\uB984\uB2E4\uC6B4 \uB9C8\uC74C\uC774\uB124\uC694.",
     exampleSrc:"A: I pray every day.\nB: What do you pray for?\nA: I pray for my family's health.\nB: What a beautiful heart.",
     funFact:"기도 is used in both religious and secular contexts. 기도하는 마음으로 (with a prayerful heart) means approaching something with sincere hope."},

    {type:"mc",
     q:"\uC5B4\uB9B4 \uB54C\uAC00 \uC800\uC808\uB85C \uC0DD\uAC01\uB0AC\uC5B4\uC694. \uC774\uAC83\uC740?",
     opts:["\uAE30\uC5B5\uB098\uB2E4","\uAE30\uB300\uB418\uB2E4","\uAE30\uC5B5\uB418\uB2E4","\uAE30\uB3C4\uD558\uB2E4"],
     ans:"\uAE30\uC5B5\uB098\uB2E4",
     hint:"This verb means a memory surfaces on its own, not through deliberate effort."},

    {type:"teach", trg:"\uAE30\uB3C4\uD558\uB2E4", src:"to pray", pos:"verb", gender:null,
     note:"Verb form of 기도. The act of praying.",
     example:"A: \uC2DC\uD5D8 \uC804\uC5D0 \uAE30\uB3C4\uD588\uC5B4\uC694.\nB: \uC2DC\uD5D8 \uC798 \uBD10\uAE38 \uAE30\uB3C4\uD574\uC694.\nA: \uD3C9\uD654\uB97C \uC704\uD574 \uAE30\uB3C4\uD569\uB2C8\uB2E4.\nB: \uAE30\uB3C4\uAC00 \uC774\uB8E8\uC5B4\uC9C0\uAE38 \uBC14\uB78D\uB2C8\uB2E4.",
     exampleSrc:"A: I prayed before the exam.\nB: I pray you do well on the exam.\nA: I pray for peace.\nB: I hope the prayer comes true.",
     funFact:"기도하다 is common across religions in Korea: Christianity (기독교), Buddhism (불교), and traditional beliefs all use this term."},

    {type:"teach", trg:"\uAE30\uB3C5\uAD50", src:"Christianity; Protestantism", pos:"noun", gender:null,
     note:"Sino-Korean: Christ (基督) + teaching (教).\nProtestant Christianity specifically.",
     example:"A: \uAE30\uB3C5\uAD50 \uC2E0\uC790\uC608\uC694?\nB: \uB124, \uB9E4\uC8FC \uAD50\uD68C\uC5D0 \uAC00\uC694.\nA: \uD55C\uAD6D\uC5D0\uC11C \uAE30\uB3C5\uAD50\uAC00 \uD070\uAC00\uC694?\nB: \uB124, \uC778\uAD6C\uC758 \uC57D 20%\uAC00 \uAE30\uB3C5\uAD50\uC778\uC774\uC5D0\uC694.",
     exampleSrc:"A: Are you Christian?\nB: Yes, I go to church every week.\nA: Is Christianity big in Korea?\nB: Yes, about 20% of the population is Christian.",
     funFact:"Korea has one of the largest Christian populations in Asia. 기독교 specifically means Protestantism; 천주교 means Catholicism."},

    {type:"teach", trg:"\uAE30\uB465", src:"pillar; column; post", pos:"noun", gender:null,
     note:"Pure Korean word. A structural support column.",
     example:"A: \uC774 \uAC74\uBB3C\uC758 \uAE30\uB465\uC774 \uBA4B\uC788\uC5B4\uC694.\nB: \uB3CC\uB85C \uB9CC\uB4E0 \uAE30\uB465\uC774\uC5D0\uC694.\nA: \uAC00\uC871\uC740 \uC0AC\uD68C\uC758 \uAE30\uB465\uC774\uC5D0\uC694.\nB: \uB9DE\uC544\uC694, \uAE30\uBCF8\uC774 \uB418\uC8E0.",
     exampleSrc:"A: The pillars of this building are beautiful.\nB: They are stone pillars.\nA: Family is the pillar of society.\nB: That is right, it is the foundation.",
     funFact:"기둥 is used metaphorically: 사회의 기둥 (pillar of society), 가정의 기둥 (pillar of the family). It implies essential support."},

    {type:"teach", trg:"\uAE30\uC6B8\uB2E4", src:"to tilt; to lean; to incline", pos:"verb", gender:null,
     note:"Pure Korean verb. Leaning or tilting to one side.",
     example:"A: \uD574\uAC00 \uC11C\uCABD\uC73C\uB85C \uAE30\uC6B8\uC5C8\uC5B4\uC694.\nB: \uD574\uC9C8\uB155\uC774 \uAC00\uAE4C\uC6CC\uC694.\nA: \uAC74\uBB3C\uC774 \uAE30\uC6B8\uC5B4\uC838 \uC788\uC5B4\uC694.\nB: \uC704\uD5D8\uD574 \uBCF4\uC5EC\uC694.",
     exampleSrc:"A: The sun has tilted to the west.\nB: Sunset is approaching.\nA: The building is leaning.\nB: It looks dangerous.",
     funFact:"기울다 (intransitive, it tilts) vs 기울이다 (transitive, I tilt it). This active-passive pair is a common Korean grammar pattern."},

    {type:"teach", trg:"\uAE30\uC6B8\uC774\uB2E4", src:"to tilt (something); to devote; to pour", pos:"verb", gender:null,
     note:"Causative of 기울다. To actively tilt or devote effort.",
     example:"A: \uADC0\uB97C \uAE30\uC6B8\uC5EC \uB4E4\uC5B4 \uC8FC\uC138\uC694.\nB: \uBB34\uC2A8 \uC774\uC57C\uAE30\uC608\uC694?\nA: \uB178\uB825\uC744 \uAE30\uC6B8\uC5EC\uC57C \uD574\uC694.\nB: \uCD5C\uC120\uC744 \uB2E4\uD558\uACA0\uC2B5\uB2C8\uB2E4.",
     exampleSrc:"A: Please lend me your ear.\nB: What is the story?\nA: I must devote my efforts.\nB: I will do my best.",
     funFact:"귀를 기울이다 (to lend one's ear) is a beautiful Korean expression meaning to listen carefully and attentively."},

    {type:"teach", trg:"\uAE30\uBF54\uD558\uB2E4", src:"to be delighted; to rejoice", pos:"verb", gender:null,
     note:"Pure Korean: happy (기쁘다) + do/show (하다).\nShowing joy outwardly.",
     example:"A: \uD569\uACA9 \uC18C\uC2DD\uC5D0 \uAE30\uBF54\uD588\uC5B4\uC694.\nB: \uB2F9\uC5F0\uD788 \uAE30\uBF54\uD560 \uC77C\uC774\uC8E0!\nA: \uAC00\uC871 \uBAA8\uB450\uAC00 \uAE30\uBF54\uD588\uC5B4\uC694.\nB: \uD589\uBCF5\uD55C \uC21C\uAC04\uC774\uB124\uC694.",
     exampleSrc:"A: I rejoiced at the news of passing.\nB: Of course, that is cause for celebration!\nA: The whole family was delighted.\nB: What a happy moment.",
     funFact:"기뻐하다 shows the joy outwardly, while 기쁘다 describes the internal state. This -워하다 pattern works for all emotional adjectives."},

    {type:"fb",
     s:"\uADC0\uB97C {1} \uB4E4\uC5B4 \uC8FC\uC138\uC694.",
     a:["\uAE30\uC6B8\uC5EC"],
     opts:["\uAE30\uC6B8\uC5EC","\uAE30\uB300\uD574","\uAE30\uC5B5\uD574","\uAE30\uB3C4\uD574"],
     hint:"This expression means to listen attentively by 'tilting' your ear toward the speaker.",
     sSrc:"Please {1} lend me your ear."},

    {type:"teach", trg:"\uAE34\uAE09", src:"emergency; urgent", pos:"noun", gender:null,
     note:"Sino-Korean: tight/urgent (緊) + urgent (急).\nDouble urgency.",
     example:"A: \uAE34\uAE09 \uC0C1\uD669\uC774\uC5D0\uC694!\nB: 119\uC5D0 \uC804\uD654\uD558\uC138\uC694.\nA: \uAE34\uAE09 \uD68C\uC758\uAC00 \uC18C\uC9D1\uB418\uC5C8\uC5B4\uC694.\nB: \uBB34\uC2A8 \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
     exampleSrc:"A: It is an emergency!\nB: Call 119 (Korean emergency number).\nA: An emergency meeting was called.\nB: What happened?",
     funFact:"119 is Korea's emergency number (fire/ambulance), while 112 is for police. 긴급 재난 문자 (emergency disaster texts) are sent to all phones."},

    {type:"teach", trg:"\uAE08\uBA54\uB2EC", src:"gold medal", pos:"noun", gender:null,
     note:"Sino-Korean + English: gold (金) + medal.",
     example:"A: \uAE08\uBA54\uB2EC\uC744 \uB531\uC5B4\uC694!\nB: \uCD95\uD558\uD574\uC694! \uB300\uB2E8\uD574\uC694!\nA: \uAE08\uBA54\uB2EC\uC758 \uAFC8\uC744 \uC774\uB8E8\uC5C8\uC5B4\uC694.\nB: \uD55C\uAD6D\uC758 \uC790\uB791\uC774\uC5D0\uC694.",
     exampleSrc:"A: They won the gold medal!\nB: Congratulations! Amazing!\nA: The dream of a gold medal came true.\nB: They are Korea's pride.",
     funFact:"Korea is an Olympic powerhouse, especially in archery, short track speed skating, and taekwondo. 금메달 fever grips the nation during Olympics."},

    {type:"teach", trg:"\uADFC\uB798", src:"recently; in recent times", pos:"noun", gender:null,
     note:"Sino-Korean: near (近) + come (來).\nThe recent past.",
     example:"A: \uADFC\uB798\uC5D0 \uBCF8 \uC601\uD654 \uC911\uC5D0 \uBC94\uC8C4\uBB3C\uC774 \uC81C\uC77C \uC7AC\uBBF8\uC788\uC5C8\uC5B4\uC694.\nB: \uADFC\uB798\uC5D0 \uC88B\uC740 \uC601\uD654\uAC00 \uB9CE\uC544\uC694.\nA: \uADFC\uB798 \uAC74\uAC15\uC740 \uC5B4\uB556\uC5B4\uC694?\nB: \uADFC\uB798 \uC798 \uC9C0\uB0B4\uACE0 \uC788\uC5B4\uC694.",
     exampleSrc:"A: Among movies I have seen recently, the crime film was the best.\nB: There have been many good movies recently.\nA: How has your health been recently?\nB: I have been well recently.",
     funFact:"근래 is more formal than 요즘 (these days) and 최근 (recently). It suggests a slightly longer recent period than 최근."},

    {type:"teach", trg:"\uADFC\uB85C", src:"labor; work; employment", pos:"noun", gender:null,
     note:"Sino-Korean: diligent (勤) + labor (勞).\nFormal term for work/labor.",
     example:"A: \uADFC\uB85C \uC870\uAC74\uC774 \uAC1C\uC120\uB418\uC5C8\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uC810\uC774 \uAC1C\uC120\uB418\uC5C8\uC5B4\uC694?\nA: \uADFC\uB85C \uC2DC\uAC04\uC774 \uC904\uC5B4\uB4E4\uC5C8\uC5B4\uC694.\nB: \uADFC\uB85C\uC790\uC758 \uAD8C\uB9AC\uAC00 \uC911\uC694\uD574\uC694.",
     exampleSrc:"A: Working conditions have improved.\nB: What improved?\nA: Working hours were reduced.\nB: Workers' rights are important.",
     funFact:"근로자의 날 (Workers' Day, May 1st) is a Korean holiday. 근로 is the formal/legal term; 노동 (labor) is used in advocacy contexts."},

    {type:"teach", trg:"\uAE00\uC528", src:"handwriting; lettering", pos:"noun", gender:null,
     note:"Pure Korean compound: writing (글) + seed (씨).\nThe shape and style of written characters.",
     example:"A: \uAE00\uC528\uAC00 \uC608\uC058\uC694.\nB: \uC5B4\uB9B4 \uB54C\uBD80\uD130 \uC5F0\uC2B5\uD588\uC5B4\uC694.\nA: \uAE00\uC528\uB97C \uC798 \uC4F0\uACE0 \uC2F6\uC5B4\uC694.\nB: \uBD93\uAE00\uC528 \uC5F0\uC2B5\uC744 \uD574 \uBCF4\uC138\uC694.",
     exampleSrc:"A: Your handwriting is beautiful.\nB: I have practiced since childhood.\nA: I want to write beautifully.\nB: Try practicing calligraphy.",
     funFact:"글씨 literally means 'writing seeds.' Good 글씨 is valued in Korean culture. 붓글씨 (brush calligraphy) is a traditional art form."},

    {type:"teach", trg:"\uADC0\uC2E0", src:"ghost; spirit; phantom", pos:"noun", gender:null,
     note:"Sino-Korean: noble/precious (鬼) + spirit (神).\nSupernatural spirit or ghost.",
     example:"A: \uADC0\uC2E0\uC744 \uBBFF\uC5B4\uC694?\nB: \uC544\uB2C8\uC694, \uD558\uC9C0\uB9CC \uBB34\uC11C\uC6CC\uC694.\nA: \uADC0\uC2E0 \uC774\uC57C\uAE30\uB97C \uC88B\uC544\uD574\uC694.\nB: \uD55C\uAD6D \uADC0\uC2E0 \uC774\uC57C\uAE30\uAC00 \uC7AC\uBBF8\uC788\uC8E0.",
     exampleSrc:"A: Do you believe in ghosts?\nB: No, but they scare me.\nA: I like ghost stories.\nB: Korean ghost stories are interesting.",
     funFact:"Korean ghost culture is rich: 처녀귀신 (maiden ghost) and 물귀신 (water ghost) are iconic figures. Korean horror draws deeply from 귀신 traditions."},

    {type:"teach", trg:"\uADC0\uC911\uD558\uB2E4", src:"to be precious; to be valuable", pos:"adj", gender:null,
     note:"Sino-Korean: noble/precious (貴) + heavy (重) + be (하다).",
     example:"A: \uC2DC\uAC04\uC740 \uADC0\uC911\uD574\uC694.\nB: \uD5C8\uBE44\uD558\uBA74 \uC548 \uB3FC\uC694.\nA: \uADC0\uC911\uD55C \uACBD\uD5D8\uC774\uC5C8\uC5B4\uC694.\nB: \uADC0\uC911\uD55C \uCD94\uC5B5\uC73C\uB85C \uAC04\uC9C1\uD558\uC138\uC694.",
     exampleSrc:"A: Time is precious.\nB: We must not waste it.\nA: It was a precious experience.\nB: Keep it as a precious memory.",
     funFact:"귀중품 (valuables) is the compound noun. At airports and hotels, 귀중품 보관함 (valuables locker) keeps your precious items safe."},

    {type:"mc",
     q:"\uC2DC\uAC04\uC740 \uB9E4\uC6B0 \uC18C\uC911\uD558\uACE0 \uD5C8\uBE44\uD558\uBA74 \uC548 \uB3FC\uC694. \uC2DC\uAC04\uC740?",
     opts:["\uADC0\uC911\uD558\uB2E4","\uAE34\uAE09\uD558\uB2E4","\uAE30\uBF54\uD558\uB2E4","\uAE30\uC6B8\uB2E4"],
     ans:"\uADC0\uC911\uD558\uB2E4",
     hint:"This adjective means something is precious, valuable, and should be treated with care."},

    {type:"match", pairs:[
      {trg:"\uAE30\uC5B5\uB098\uB2E4", src:"to recall"},
      {trg:"\uAE30\uB300\uB418\uB2E4", src:"to be anticipated"},
      {trg:"\uAE34\uAE09", src:"emergency"},
      {trg:"\uAE08\uBA54\uB2EC", src:"gold medal"},
      {trg:"\uADFC\uB85C", src:"labor"},
      {trg:"\uADC0\uC2E0", src:"ghost"}
    ]}
  ]
};
export default LESSON_19;
