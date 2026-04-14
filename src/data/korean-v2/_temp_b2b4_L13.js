// Korean B2 — Batch 4, Lesson 13: Folk and Belief
// Words: 민속, 민주, 민주주의, 민주화, 믿어지다, 밀리다, 밀접하다, 밉다, 밑바닥, 바, 바가지, 바구니, 바깥쪽, 바닷물, 바람직하다, 바로잡다, 바싹, 바이러스, 바이올린, 바치다

const LESSON_13 = {
  id:"kov2_b2b4_l13", title:"민주와 바람직", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"민주와 바람직",
     desc:"Learn words about democracy, folk traditions, belief, and desirable states. This lesson mixes political vocabulary with everyday items and qualities.",
     goals:["Master 20 words about democracy, belief, and daily objects","Understand 민- Hanja compounds (people, folk)","Use 바- words for containers, corrections, and dedication"]},

    {type:"teach", trg:"민속", src:"folk, folklore, folk customs", pos:"noun", gender:null,
     note:"Sino-Korean. 民 (people) + 俗 (customs).\nTraditional customs of common people.",
     example:"A: 민속 박물관에 가 봤어?\nB: 응, 전통 놀이 체험도 할 수 있어.",
     exampleSrc:"A: Have you been to the folk museum?\nB: Yes, you can even experience traditional games.",
     funFact:"From Hanja 民俗. 국립민속박물관 (National Folk Museum) in Seoul is inside Gyeongbokgung palace grounds."},

    {type:"teach", trg:"민주", src:"democracy", pos:"noun", gender:null,
     note:"Sino-Korean. 民 (people) + 主 (master).\nRule by the people.",
     example:"A: 민주 사회에서는 모든 시민이 중요해요.\nB: 투표권이 그 증거죠.",
     exampleSrc:"A: In a democratic society, every citizen matters.\nB: The right to vote is proof of that.",
     funFact:"From Hanja ��主. Korea's democracy was hard-won through the 1987 민주화 운동 (democratization movement)."},

    {type:"teach", trg:"민주주의", src:"democracy (as ideology)", pos:"noun", gender:null,
     note:"Sino-Korean. 民主 (democracy) + 主義 (ideology).\nThe political system of democracy.",
     example:"A: 민주주의의 핵심은 뭐라고 생각해요?\nB: 국민의 자유와 권리를 보장하는 거요.",
     exampleSrc:"A: What do you think is the core of democracy?\nB: Guaranteeing the freedom and rights of the people.",
     funFact:"The -주의 suffix marks ideologies: 자본주��� (capitalism), 사회주의 (socialism), 공산주��� (communism)."},

    {type:"teach", trg:"민주화", src:"democratization", pos:"noun", gender:null,
     note:"민주 (democracy) + 화 (化, transformation).\nThe process of becoming democratic.",
     example:"A: 한국의 민주화 과정이 대단해요.\nB: 많은 희생이 있었죠.",
     exampleSrc:"A: Korea's democratization process is remarkable.\nB: There were many sacrifices.",
     funFact:"The June 1987 민주화 운동 is a pivotal moment in Korean history, leading to direct presidential elections."},

    {type:"teach", trg:"믿어지다", src:"to be believable, to seem credible", pos:"verb", gender:null,
     note:"믿다 (believe) + 어지다 (become).\nSomething becomes believable or hard to believe.",
     example:"A: 이 소식이 믿어지�� 않아요.\nB: 저도 처음에 놀랐어요.",
     exampleSrc:"A: I cannot believe this news.\nB: I was surprised at first too.",
     funFact:"Almost always used in negative form: ���어지지 않다 (unbelievable). Positive use is rare."},

    {type:"mc",
     q:"'-주의'가 붙으면 어떤 의미가 되나요?",
     opts:["사상이나 이념을 뜻한다","사람을 뜻한다","장소를 뜻한다","시간을 뜻한다"],
     ans:"사상이나 이념을 뜻한다",
     hint:"This Sino-Korean suffix from Hanja 主義 creates words for ideologies and belief systems."},

    {type:"teach", trg:"밀리다", src:"to be pushed back, to pile up", pos:"verb", gender:null,
     note:"밀다 (push) + 리다 (passive).\nBeing pushed or work accumulating.",
     example:"A: 일이 밀려서 야근해야 해요.\nB: 도와줄까요?",
     exampleSrc:"A: Work has piled up so I have to work overtime.\nB: Shall I help you?",
     funFact:"���리다 is the passive of ��다 (to push). Very common: 일이 밀리��� (work piles up), 밀린 잠 (sleep debt)."},

    {type:"teach", trg:"밀접하다", src:"to be closely related, to be intimate", pos:"adj", gender:null,
     note:"Sino-Korean. 密 (close) + 接 (contact) + 하다.\nVery closely connected.",
     example:"A: 경제와 교육은 밀접한 관계가 있���요.\nB: 교육이 경제 성장의 기반이죠.",
     exampleSrc:"A: Economy and education are closely related.\nB: Education is the foundation of economic growth.",
     funFact:"From Hanja 密接. Very formal. Used in academic writing: 밀접한 관련 (close relation), 밀접한 연관 (close connection)."},

    {type:"teach", trg:"밉다", src:"to be hateful, to be dislikable", pos:"adj", gender:null,
     note:"Native Korean adjective.\nFinding someone unappealing or annoying.",
     example:"A: 그 사람이 미운 건 아닌데 짜증 나.\nB: 왜? 무슨 일 있었어?",
     exampleSrc:"A: I do not hate that person, but they annoy me.\nB: Why? What happened?",
     funFact:"ㅂ-irregular: 밉다 becomes 미운 (modifying), 미워 (casual). 미운 오리 새끼 (The Ugly Duckling)."},

    {type:"teach", trg:"밑바닥", src:"very bottom, rock bottom", pos:"noun", gender:null,
     note:"밑 (below) + 바닥 (floor).\nThe absolute lowest point.",
     example:"A: 인생의 밑바닥을 경험했어요.\nB: 이제 올라갈 일만 남았어요.",
     exampleSrc:"A: I experienced the very bottom of life.\nB: Now there is nowhere to go but up.",
     funFact:"밑바닥부터 시작하다 (start from the very bottom) is an inspirational expression for self-made success stories."},

    {type:"teach", trg:"바", src:"thing (bound noun); bar", pos:"noun", gender:null,
     note:"Bound noun after verb modifier.\nUsed in formal patterns like -ㄴ 바.",
     example:"A: 제가 아는 바로는 그렇습니다.\nB: 확인해 보겠습니다.",
     exampleSrc:"A: As far as I know, that is correct.\nB: I will verify.",
     funFact:"As a bound noun, 바 appears in formal expressions: 아는 바 (what one knows), 발표한 바 (what was announced)."},

    {type:"fb",
     s:"한국의 {1} 과정에서 많은 시민이 희생되었다.",
     a:["민주화"],
     opts:["민주화","민속","민주주의","��간"],
     hint:"This noun describes the process of becoming democratic, a pivotal chapter in Korean history.",
     sSrc:"Many citizens sacrificed during Korea's {1} process."},

    {type:"teach", trg:"바가지", src:"gourd bowl; rip-off, overcharging", pos:"noun", gender:null,
     note:"Native Korean word.\nA bowl made from a gourd, or being overcharged.",
     example:"A: 관광지에서 바가지를 쓰면 안 돼.\nB: 가격을 미리 확인해야 해.",
     exampleSrc:"A: You should not get ripped off at tourist spots.\nB: You should check prices in advance.",
     funFact:"바가지를 쓰다 (to wear a gourd bowl) idiomatically means being overcharged. Very useful in markets!"},

    {type:"teach", trg:"바구니", src:"basket", pos:"noun", gender:null,
     note:"Native Korean word.\nA container for carrying things.",
     example:"A: 과일 바구니를 선물로 보냈어요.\nB: 좋은 선물이네요!",
     exampleSrc:"A: I sent a fruit basket as a gift.\nB: That is a nice gift!",
     funFact:"장바구니 (shopping basket/cart) combines 장 (market) + 바구니. Online shopping also uses 장바구니 for the cart."},

    {type:"teach", trg:"바깥쪽", src:"the outside, the outer side", pos:"noun", gender:null,
     note:"바깥 (outside) + 쪽 (side/direction).\nThe exterior portion.",
     example:"A: 바깥쪽에 자리가 있어요.\nB: 바깥쪽이 시원하니까 거기 앉자.",
     exampleSrc:"A: There are seats on the outside.\nB: The outside is cool, so let us sit there.",
     funFact:"쪽 compounds mark directions: 바깥쪽 (outside), 안쪽 (inside), 왼쪽 (left), 오른쪽 (right)."},

    {type:"teach", trg:"바닷물", src:"seawater, ocean water", pos:"noun", gender:null,
     note:"바다 (sea) + ㅅ + 물 (water).\nSalty water from the ocean.",
     example:"A: 바닷물이 짜서 많이 못 마셔.\nB: 바닷물은 마시는 게 아니지!",
     exampleSrc:"A: Seawater is salty so you cannot drink much.\nB: You are not supposed to drink seawater!",
     funFact:"The ㅅ in 바닷물 is called 사이시옷, a connector between compound nouns that adds a t-sound."},

    {type:"teach", trg:"바람직하다", src:"to be desirable, to be ideal", pos:"adj", gender:null,
     note:"바라다 (wish for) + ㅁ직하다 (worthy of).\nSomething worth hoping for.",
     example:"A: 솔직한 대화가 바람직해요.\nB: 맞아요, 숨기는 건 안 좋아요.",
     exampleSrc:"A: Honest conversation is desirable.\nB: Right, hiding things is not good.",
     funFact:"바람직하다 is very formal and positive. Common in editorials and official recommendations."},

    {type:"teach", trg:"바로잡다", src:"to correct, to set right", pos:"verb", gender:null,
     note:"바로 (straight) + 잡다 (grasp).\nTo fix something that was wrong.",
     example:"A: 잘못된 정보를 바로잡아야 해요.\nB: 빨리 수정 공지를 올립시다.",
     exampleSrc:"A: We need to correct the wrong information.\nB: Let us post a correction notice quickly.",
     funFact:"Used for abstract corrections too: 자세를 바���잡다 (correct posture), 풍속을 바로잡다 (reform customs)."},

    {type:"mc",
     q:"'바가지를 쓰다'는 무슨 뜻인가요?",
     opts:["물건을 비싸게 사다","바가지로 물을 떠다","모자를 쓰다","선물을 받다"],
     ans:"물건을 비싸게 사다",
     hint:"This idiom involving a gourd bowl means being overcharged or ripped off when buying something."},

    {type:"teach", trg:"바싹", src:"very close; completely dried up", pos:"adv", gender:null,
     note:"Native Korean adverb.\nVery near, or dried out thoroughly.",
     example:"A: 바싹 다가와서 들어 봐.\nB: 뭔데? 비밀이야?",
     exampleSrc:"A: Come very close and listen.\nB: What is it? A secret?",
     funFact:"바싹 마르다 (completely dried up) and 바싹 다가가다 (move very close) show the two meanings."},

    {type:"teach", trg:"바이러스", src:"virus", pos:"noun", gender:null,
     note:"Loanword from English 'virus.'\nA microscopic infectious agent.",
     example:"A: 컴퓨터 바이러스에 감염됐어요.\nB: 백신 프로그램을 돌려 보세요.",
     exampleSrc:"A: My computer got infected with a virus.\nB: Try running an antivirus program.",
     funFact:"바이러스 is used for both biological (감기 바이러스) and computer viruses (컴퓨터 바이러스) in Korean."},

    {type:"teach", trg:"바이올린", src:"violin", pos:"noun", gender:null,
     note:"Loanword from English 'violin.'\nA stringed instrument.",
     example:"A: 바이올린을 얼마나 배웠어?\nB: 5년째 배우고 있어.",
     exampleSrc:"A: How long have you been learning violin?\nB: I have been learning for 5 years.",
     funFact:"Korea has produced world-class violinists. Classical music education is highly valued in Korean families."},

    {type:"teach", trg:"바치다", src:"to devote, to dedicate, to offer", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo give up something precious for a cause.",
     example:"A: 평생을 연구에 바쳤어요.\nB: 정말 존경스러운 분이에요.",
     exampleSrc:"A: They devoted their whole life to research.\nB: They are truly an admirable person.",
     funFact:"바치다 implies sacrifice: 목숨을 바치다 (give one's life), 노력�� 바치다 (devote effort). Very solemn."},

    {type:"fb",
     s:"잘못된 관행을 {1}아야 합니다.",
     a:["바로잡"],
     opts:["바로잡","바치","바싹","바람직하"],
     hint:"This compound verb means to correct or set right something that is wrong.",
     sSrc:"We must {1} incorrect practices."},

    {type:"match", pairs:[
      {trg:"민주주의", src:"democracy"},
      {trg:"바가지", src:"rip-off; gourd bowl"},
      {trg:"바람직하다", src:"to be desirable"},
      {trg:"바치다", src:"to devote"}
    ]}
  ]
};
export default LESSON_13;
