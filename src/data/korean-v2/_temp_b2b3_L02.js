// Korean B2. Batch 3, Lesson 2: Membership and Value
// Words: 가상, 가슴속, 가요, 가위, 가이드, 가입, 가입자, 가입하다, 가정교사, 가져가다, 가져다주다, 가죽, 가짜, 가치, 가톨릭, 가하다, 각기, 각오, 각자, 간격

const LESSON_2 = {
  id:"kov2_b2b3_l2", title:"가입과 가치", icon:"💎", xp:15, board:true,
  steps:[
    {type:"intro", title:"가입과 가치",
     desc:"Learn words about membership, value, authenticity, and individual differences. These terms are common in formal discussion and daily life alike.",
     goals:["Master 20 words for membership, value, and identity","Understand 가- compound verbs for carrying and bringing","Distinguish formal and conversational registers"]},

    {type:"teach", trg:"가상", src:"virtual, imaginary", pos:"noun", gender:null,
     note:"Sino-Korean. 假 (false) + 想 (thought).\nSomething imagined or simulated.",
     example:"A: 가상 현실 게임 해 봤어?\nB: 응, 정말 실감 나더라.",
     exampleSrc:"A: Have you tried a virtual reality game?\nB: Yes, it felt so real.",
     funFact:"From Hanja 假想. 가상현실 (virtual reality) became a buzzword in Korea with the rise of the metaverse industry."},

    {type:"teach", trg:"가슴속", src:"deep in one's heart", pos:"noun", gender:null,
     note:"가슴 (chest/heart) + 속 (inside).\nThe innermost feelings.",
     example:"A: 그 말이 가슴속 깊이 와닿았어.\nB: 나도 눈물이 날 뻔했어.",
     exampleSrc:"A: Those words touched me deep in my heart.\nB: I almost cried too.",
     funFact:"Korean uses body-part compounds for emotions: 가슴속 (in the heart), 머릿속 (in the mind), 뱃속 (in the gut)."},

    {type:"teach", trg:"가요", src:"popular song, K-pop song", pos:"noun", gender:null,
     note:"Sino-Korean. 歌 (song) + 謠 (ballad).\nA general term for popular music.",
     example:"A: 요즘 어떤 가요를 좋아해?\nB: 발라드를 주로 들어.",
     exampleSrc:"A: What kind of pop songs do you like these days?\nB: I mainly listen to ballads.",
     funFact:"From Hanja 歌謠. Korea's major music shows (가요대전, 가요대축제) use this word, not K-pop."},

    {type:"teach", trg:"가위", src:"scissors", pos:"noun", gender:null,
     note:"Native Korean word.\nA cutting tool with two blades.",
     example:"A: 가위 좀 빌려줄래?\nB: 여기, 조심해서 써.",
     exampleSrc:"A: Could you lend me some scissors?\nB: Here, use them carefully.",
     funFact:"가위바위보 (scissors-rock-paper) is the Korean version of rock-paper-scissors, with scissors listed first."},

    {type:"mc",
     q:"'가상 현실'에서 '가상'의 뜻은?",
     opts:["실제가 아닌 상상의","아주 크고 넓은","빠르게 변하는","과거에 있었던"],
     ans:"실제가 아닌 상상의",
     hint:"This Sino-Korean word combines 'false' and 'thought' to describe something not real."},

    {type:"teach", trg:"가이드", src:"guide", pos:"noun", gender:null,
     note:"Loanword from English 'guide.'\nA person who leads or a guidebook.",
     example:"A: 여행 가이드가 설명을 잘해 줬어.\nB: 다음에도 그 가이드를 예약하자.",
     exampleSrc:"A: The travel guide gave great explanations.\nB: Let us book that guide next time too.",
     funFact:"Korea uses many English loanwords for tourism: 가이드, 투어, 호텔. Native equivalents exist but sound old-fashioned."},

    {type:"teach", trg:"가입", src:"enrollment, subscription, joining", pos:"noun", gender:null,
     note:"Sino-Korean. 加 (add) + 入 (enter).\nThe act of joining an organization.",
     example:"A: 회원 가입은 어떻게 해요?\nB: 홈페이지에서 신청하시면 됩니다.",
     exampleSrc:"A: How do I sign up for membership?\nB: You can apply on the website.",
     funFact:"From Hanja 加入. Every Korean website requires 회원가입 (membership registration) before you can use it."},

    {type:"teach", trg:"가입자", src:"subscriber, member", pos:"noun", gender:null,
     note:"가입 (joining) + 자 (者, person).\nA person who has joined.",
     example:"A: 이 서비스의 가입자가 몇 명이에요?\nB: 백만 명이 넘었어요.",
     exampleSrc:"A: How many subscribers does this service have?\nB: It has exceeded one million.",
     funFact:"The suffix -자 (者) marks a person who does something: 가입자, 소비자 (consumer), 연구자 (researcher)."},

    {type:"teach", trg:"가입하다", src:"to join, to enroll, to subscribe", pos:"verb", gender:null,
     note:"가입 + 하다. To become a member.\nUsed for clubs, services, and organizations.",
     example:"A: 헬스장에 가입했어?\nB: 응, 어제 3개월 회원으로 가입했어.",
     exampleSrc:"A: Did you sign up for the gym?\nB: Yes, I enrolled as a 3-month member yesterday.",
     funFact:"Korean distinguishes 가입하다 (to join) from 탈퇴하다 (to withdraw membership), both very formal."},

    {type:"fb",
     s:"인터넷 쇼핑몰에 회원 {1}을 해야 주문할 수 있어요.",
     a:["가입"],
     opts:["가입","가치","가상","가위"],
     hint:"This Sino-Korean noun means the act of registering as a member of something.",
     sSrc:"You need to complete member {1} on the online shopping mall to place an order."},

    {type:"teach", trg:"가정교사", src:"private tutor", pos:"noun", gender:null,
     note:"가정 (家庭, home) + 교사 (教師, teacher).\nA teacher who comes to the home.",
     example:"A: 아이에게 가정교사를 구하려고요.\nB: 영어 가정교사요? 수학이요?",
     exampleSrc:"A: I am looking for a private tutor for my child.\nB: An English tutor? Or math?",
     funFact:"Private tutoring (과외) is a massive industry in Korea, with spending rivaling some countries' education budgets."},

    {type:"teach", trg:"가져가다", src:"to take (away)", pos:"verb", gender:null,
     note:"가지다 (to have) + 가다 (to go).\nTo carry something away from the current location.",
     example:"A: 이 책 가져가도 돼?\nB: 응, 다 읽으면 돌려줘.",
     exampleSrc:"A: Can I take this book with me?\nB: Yes, return it when you finish reading.",
     funFact:"Korean directional compounds: 가져가다 (take away) vs. 가져오다 (bring here). Direction matters."},

    {type:"teach", trg:"가져다주다", src:"to bring and give, to deliver", pos:"verb", gender:null,
     note:"가지다 + 다 + 주다 (give).\nTo carry something and hand it to someone.",
     example:"A: 물 좀 가져다줄래?\nB: 잠깐만, 지금 가져다줄게.",
     exampleSrc:"A: Could you bring me some water?\nB: Just a moment, I will bring it right now.",
     funFact:"This triple compound verb (have + transfer + give) shows how Korean stacks verbs for precise meaning."},

    {type:"teach", trg:"가죽", src:"leather", pos:"noun", gender:null,
     note:"Native Korean word.\nAnimal skin processed for use.",
     example:"A: 이 가방은 진짜 가죽이에요?\nB: 네, 소가죽으로 만든 거예요.",
     exampleSrc:"A: Is this bag real leather?\nB: Yes, it is made from cowhide.",
     funFact:"Traditional Korean archery targets were made of leather. The word 가죽 also appears in the idiom 가죽이 두껍다 (thick-skinned)."},

    {type:"mc",
     q:"'가져다주다'는 어떤 동작을 뜻하나요?",
     opts:["가만히 서서 기다리는 것","가지고 와서 주는 것","가지고 가서 버리는 것","가까이 와서 앉는 것"],
     ans:"가지고 와서 주는 것",
     hint:"This compound verb combines carrying something and giving it to someone."},

    {type:"teach", trg:"가짜", src:"fake, counterfeit", pos:"noun", gender:null,
     note:"Native Korean word.\nSomething that is not genuine.",
     example:"A: 이 가방이 가짜인 것 같아.\nB: 어떻게 알아?\nA: 로고가 좀 다르거든.",
     exampleSrc:"A: I think this bag is fake.\nB: How can you tell?\nA: The logo is slightly different.",
     funFact:"The opposite is 진짜 (real/genuine). Koreans use both constantly: 진짜? (Really?) 가짜야! (It is fake!)"},

    {type:"teach", trg:"가치", src:"value, worth", pos:"noun", gender:null,
     note:"Sino-Korean. 價 (price) + 値 (value).\nThe importance or usefulness of something.",
     example:"A: 이 그림의 가치를 어떻게 평가해요?\nB: 역사적 가치가 매우 높습니다.",
     exampleSrc:"A: How do you evaluate the value of this painting?\nB: Its historical value is very high.",
     funFact:"From Hanja 價値. 가치관 (value system/worldview) is a key concept in Korean philosophy discussions."},

    {type:"teach", trg:"가톨릭", src:"Catholic, Catholicism", pos:"noun", gender:null,
     note:"Loanword from 'Catholic.'\nThe Catholic Christian denomination.",
     example:"A: 한국에 가톨릭 신자가 많아요?\nB: 네, 전체 인구의 약 10%예요.",
     exampleSrc:"A: Are there many Catholics in Korea?\nB: Yes, about 10% of the total population.",
     funFact:"Korea is unique in that Catholicism arrived through Korean scholars who discovered it in China, not through missionaries."},

    {type:"teach", trg:"가하다", src:"to inflict, to apply (force)", pos:"verb", gender:null,
     note:"Sino-Korean. 加 (add) + 하다 (do).\nTo apply force or pressure onto something.",
     example:"A: 그런 행동은 다른 사람에게 고통을 가하는 거야.\nB: 정말 반성해야겠다.",
     exampleSrc:"A: Such behavior inflicts pain on others.\nB: I really need to reflect on that.",
     funFact:"From Hanja 加. Often seen in formal contexts: 압력을 가하다 (apply pressure), 제재를 가하다 (impose sanctions)."},

    {type:"teach", trg:"각기", src:"each, respectively", pos:"adv", gender:null,
     note:"Sino-Korean. 各 (each) + 其 (that).\nEmphasizes that each item is different.",
     example:"A: 학생들이 각기 다른 주제를 발표했어요.\nB: 다양한 관점을 들을 수 있었겠네요.",
     exampleSrc:"A: The students each presented on different topics.\nB: You must have heard various perspectives.",
     funFact:"From Hanja 各其. Compare with 각자 (each person) and 각각 (each one). All use the 各 character."},

    {type:"teach", trg:"각오", src:"determination, resolve, readiness", pos:"noun", gender:null,
     note:"Sino-Korean. 覺 (awareness) + 悟 (enlightenment).\nMental preparedness for difficulty.",
     example:"A: 이번 시험은 각오를 단단히 해야 해.\nB: 알아, 밤새 공부할 각오야.",
     exampleSrc:"A: You need to steel your resolve for this exam.\nB: I know, I am prepared to study all night.",
     funFact:"각오를 하다 (to make a determination) carries a sense of bracing yourself, often before something challenging."},

    {type:"teach", trg:"각자", src:"each person, individually", pos:"noun", gender:null,
     note:"Sino-Korean. 各 (each) + 自 (self).\nEvery person on their own.",
     example:"A: 점심은 각자 알아서 먹자.\nB: 좋아, 나는 김밥 먹을래.",
     exampleSrc:"A: Let us each handle our own lunch.\nB: OK, I want to eat gimbap.",
     funFact:"각자 내다 (each person pays) is the Korean concept of splitting the bill, though 한턱내다 (treating) is more traditional."},

    {type:"teach", trg:"간격", src:"gap, interval, spacing", pos:"noun", gender:null,
     note:"Sino-Korean. 間 (between) + 隔 (separate).\nThe distance or time between things.",
     example:"A: 버스 간격이 너무 길어.\nB: 평일에는 10분 간격인데 주말에는 20분이야.",
     exampleSrc:"A: The bus intervals are too long.\nB: On weekdays it is every 10 minutes, but on weekends it is 20.",
     funFact:"From Hanja 間隔. Used for both physical spacing (좌석 간격, seat spacing) and time intervals (시간 간격)."},

    {type:"match", pairs:[
      {trg:"가짜", src:"fake"},
      {trg:"가치", src:"value"},
      {trg:"각오", src:"determination"},
      {trg:"간격", src:"interval"}
    ]}
  ]
};
export default LESSON_2;
