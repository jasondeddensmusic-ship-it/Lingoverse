// Korean B2. Batch 4, Lesson 14: Wheels and Clapping
// Words: 바퀴, 바탕, 박, 박다, 박수, 박스, 박히다, 반기다, 반대편, 반면, 반발, 반복되다, 반복하다, 반성, 반성하다, 반영하다, 반응, 반죽, 반지, 반짝거리다

const LESSON_14 = {
  id:"kov2_b2b4_l14", title:"반복과 반성", icon:"🔄", xp:15, board:true,
  steps:[
    {type:"intro", title:"반복과 반성",
     desc:"Learn words about repetition, reflection, and reactions. This lesson covers 반- compounds dealing with opposition, repetition, and response.",
     goals:["Master 20 words about repetition, reflection, and reactions","Understand 반- Hanja compounds (half, oppose, return)","Use verbs for hammering, welcoming, and sparkling"]},

    {type:"teach", trg:"바퀴", src:"wheel; round, lap", pos:"noun", gender:null,
     note:"Native Korean word.\nA circular rotating part, or one complete circle.",
     example:"A: 자전거 바퀴가 펑크 났어.\nB: 자전거 가게에서 고쳐야겠다.",
     exampleSrc:"A: My bicycle wheel got a flat tire.\nB: We should fix it at a bike shop.",
     funFact:"바퀴 also counts laps: 운동장 세 바퀴 (three laps around the field). 바퀴벌레 (cockroach) literally means 'wheel bug.'"},

    {type:"teach", trg:"바탕", src:"foundation, basis, background", pos:"noun", gender:null,
     note:"Native Korean word.\nThe underlying base of something.",
     example:"A: 이 영화는 실화를 바탕으로 만들었어요.\nB: 그래서 더 감동적이었나 봐요.",
     exampleSrc:"A: This movie was made based on a true story.\nB: That is probably why it was more moving.",
     funFact:"~을 바탕으로 (based on) is a very common formal expression in Korean writing and news."},

    {type:"teach", trg:"박", src:"gourd; night (counter)", pos:"noun", gender:null,
     note:"Native Korean. As counter: one night stay.\nAlso the gourd plant.",
     example:"A: 1박 2일 여행을 갈까?\nB: 좋아, 어디로 갈까?",
     exampleSrc:"A: Shall we go on a 1-night-2-day trip?\nB: Sure, where shall we go?",
     funFact:"박 as a night counter: 2박 3일 (2 nights 3 days). Also a common Korean surname: 박 (Park)."},

    {type:"teach", trg:"박다", src:"to hammer in, to drive in, to plant firmly", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo firmly insert something by striking.",
     example:"A: 벽에 못을 박아야 해.\nB: 망치 가져올게.",
     exampleSrc:"A: I need to hammer a nail into the wall.\nB: I will bring a hammer.",
     funFact:"Also used figuratively: 머리에 박히다 (stuck in one's head), 눈에 박히다 (etched in one's eyes)."},

    {type:"teach", trg:"박수", src:"applause, clapping", pos:"noun", gender:null,
     note:"Sino-Korean. 拍 (clap) + 手 (hand).\nClapping hands to show approval.",
     example:"A: 공연이 끝나자 큰 박수가 터졌어요.\nB: 정말 감동적인 공연이었죠.",
     exampleSrc:"A: Loud applause erupted when the performance ended.\nB: It was a truly moving performance.",
     funFact:"From Hanja 拍手. 박수를 치다 (to clap). Korean audiences also chant 앙코르 (encore) after great performances."},

    {type:"mc",
     q:"'1박 2일'은 얼마나 긴 여행인가요?",
     opts:["하룻밤 자고 이틀 동안","이틀 자고 삼일 동안","당일치기 여행","일주일 여행"],
     ans:"하룻밤 자고 이틀 동안",
     hint:"박 counts nights of stay. This popular trip format means staying one night over two days."},

    {type:"teach", trg:"박스", src:"box, cardboard box", pos:"noun", gender:null,
     note:"Loanword from English 'box.'\nA container, usually cardboard.",
     example:"A: 이사할 때 박스가 많이 필요해.\nB: 마트에서 빈 박스를 구할 수 있어.",
     exampleSrc:"A: You need many boxes when moving.\nB: You can get empty boxes from the mart.",
     funFact:"Korean uses both 박스 (loanword) and 상자 (native word). 택배 박스 (delivery box) is extremely common in Korean life."},

    {type:"teach", trg:"박히다", src:"to be stuck in, to be embedded", pos:"verb", gender:null,
     note:"박다 (hammer) + 히다 (passive).\nSomething gets lodged or fixed in place.",
     example:"A: 가시가 손가락에 박혔어!\nB: 핀셋으로 빼야겠다.",
     exampleSrc:"A: A thorn got stuck in my finger!\nB: I need to pull it out with tweezers.",
     funFact:"Figurative use is common: 기억에 박히다 (etched in memory), 한곳에 박혀 있다 (to be stuck in one place)."},

    {type:"teach", trg:"반기다", src:"to welcome warmly, to be glad to see", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo greet someone with genuine joy.",
     example:"A: 강아지가 주인을 반기며 뛰어왔어.\nB: 강아지가 정말 좋아하나 보다.",
     exampleSrc:"A: The dog ran over, welcoming its owner.\nB: The dog must really love them.",
     funFact:"반기다 implies warm, enthusiastic welcome. Pets 반기다 their owners, and friends 반기다 each other after long absence."},

    {type:"teach", trg:"반대편", src:"the opposite side", pos:"noun", gender:null,
     note:"반대 (opposite) + 편 (side).\nThe side directly across from something.",
     example:"A: 출구는 반대편에 있어요.\nB: 아, 이쪽이 아니라 저쪽이구나.",
     exampleSrc:"A: The exit is on the opposite side.\nB: Oh, not this side but that side.",
     funFact:"Similar to 맞은편 and 건너편, but 반대편 emphasizes opposition: 의견의 반대편 (the opposing view)."},

    {type:"teach", trg:"반면", src:"on the other hand, whereas", pos:"noun", gender:null,
     note:"Sino-Korean. 反 (opposite) + 面 (face/side).\nPresenting a contrasting aspect.",
     example:"A: 서울은 편리한 반면 물가가 높아요.\nB: 맞아요, 장단점이 있죠.",
     exampleSrc:"A: Seoul is convenient, but on the other hand prices are high.\nB: Right, there are pros and cons.",
     funFact:"From Hanja 反面. 반면에 (on the other hand) is one of the most important connectors for TOPIK writing."},

    {type:"fb",
     s:"도시는 편리한 {1} 공기가 좋지 않다.",
     a:["반면"],
     opts:["반면","반대편","반응","반복"],
     hint:"This connecting word means 'on the other hand' or 'whereas,' used to present a contrast.",
     sSrc:"Cities are convenient, but {1} the air quality is not good."},

    {type:"teach", trg:"반발", src:"resistance, backlash, opposition", pos:"noun", gender:null,
     note:"Sino-Korean. 反 (oppose) + 發 (emit).\nPushing back against something.",
     example:"A: 새 정책에 대한 반발이 심해요.\nB: 시민들의 의견을 더 들어야 해요.",
     exampleSrc:"A: There is strong backlash against the new policy.\nB: We need to listen more to citizens' opinions.",
     funFact:"From Hanja 反發. 반발심 (rebellious feelings), 반발을 사다 (to invite backlash), 반발하다 (to resist)."},

    {type:"teach", trg:"반복되다", src:"to be repeated, to recur", pos:"verb", gender:null,
     note:"반복 (repetition) + 되다 (passive).\nSomething happens again and again.",
     example:"A: 같은 문제가 반복되고 있어요.\nB: 근본적인 해결이 필요해요.",
     exampleSrc:"A: The same problem keeps recurring.\nB: A fundamental solution is needed.",
     funFact:"From Hanja 反復. 반복 학습 (repetitive learning) is a key study method in Korean education."},

    {type:"teach", trg:"반복하다", src:"to repeat, to do again", pos:"verb", gender:null,
     note:"반복 (repetition) + 하다 (to do).\nTo do something over and over.",
     example:"A: 발음을 반복해서 연습하세요.\nB: 네, 계속 연습할게요.",
     exampleSrc:"A: Practice pronunciation by repeating.\nB: Yes, I will keep practicing.",
     funFact:"반복하다 (active: I repeat) vs. 반복되다 (passive: it repeats itself). The -하다/-되다 pair again."},

    {type:"teach", trg:"반성", src:"self-reflection, introspection", pos:"noun", gender:null,
     note:"Sino-Korean. 反 (return) + 省 (examine).\nLooking back at oneself critically.",
     example:"A: 실수를 하면 반성이 필요해요.\nB: 같은 실수를 반복하지 않으려면요.",
     exampleSrc:"A: When you make mistakes, self-reflection is needed.\nB: So you do not repeat the same mistakes.",
     funFact:"From Hanja 反省. 반성문 (letter of self-reflection) is a well-known Korean school and military punishment."},

    {type:"teach", trg:"반성하다", src:"to reflect on oneself, to feel remorse", pos:"verb", gender:null,
     note:"반성 (reflection) + 하다 (to do).\nTo critically examine one's own actions.",
     example:"A: 행동을 반성하고 있어요.\nB: 인정하는 게 첫 번째 단계예요.",
     exampleSrc:"A: I am reflecting on my actions.\nB: Acknowledging it is the first step.",
     funFact:"반성하다 is slightly different from 후회하다 (to regret). 반성 implies learning from mistakes, 후회 is just feeling bad."},

    {type:"mc",
     q:"'반성문'은 무엇인가요?",
     opts:["편지의 한 형식","잘못을 되돌아보며 쓰는 글","소설의 한 종류","신문 기사"],
     ans:"잘못을 되돌아보며 쓰는 글",
     hint:"This is a written form of self-reflection, commonly assigned as a corrective measure in Korean schools."},

    {type:"teach", trg:"반영하다", src:"to reflect, to incorporate", pos:"verb", gender:null,
     note:"Sino-Korean. 反 (return) + 映 (project) + 하다.\nTo incorporate ideas or show a reflection.",
     example:"A: 고객 의견을 제품에 반영했어요.\nB: 그래서 만족도가 높아졌군요.",
     exampleSrc:"A: We incorporated customer feedback into the product.\nB: So satisfaction levels increased.",
     funFact:"From Hanja 反映. 현실을 반영하다 (reflect reality), 의견을 반영하다 (incorporate opinions)."},

    {type:"teach", trg:"반응", src:"reaction, response", pos:"noun", gender:null,
     note:"Sino-Korean. 反 (return) + 應 (respond).\nA response to a stimulus.",
     example:"A: 새 제품에 대한 반응이 어때요?\nB: 긍정적인 반응이 많아요.",
     exampleSrc:"A: What is the reaction to the new product?\nB: There are many positive reactions.",
     funFact:"From Hanja 反應. Used in science (화학 반응, chemical reaction) and daily life (반응이 좋다, good response)."},

    {type:"teach", trg:"반죽", src:"dough, batter", pos:"noun", gender:null,
     note:"반 (half/mix) + 죽 (porridge).\nA mixture of flour and liquid kneaded together.",
     example:"A: 빵 반죽을 잘 치대야 맛있어요.\nB: 30분 정도 치대면 될까요?",
     exampleSrc:"A: You need to knead bread dough well for it to be tasty.\nB: Would about 30 minutes of kneading be enough?",
     funFact:"반죽 is essential in Korean cooking: 수제비 반죽 (hand-pulled noodle dough), 만두 반죽 (dumpling dough)."},

    {type:"teach", trg:"반지", src:"ring (jewelry)", pos:"noun", gender:null,
     note:"Native Korean word.\nJewelry worn on the finger.",
     example:"A: 이 반지 정말 예쁘다!\nB: 약혼 반지야, 어제 받았어.",
     exampleSrc:"A: This ring is really pretty!\nB: It is an engagement ring, I received it yesterday.",
     funFact:"약혼 반지 (engagement ring), 결혼 반지 (wedding ring), 커플링 (couple ring) are common in Korean romance culture."},

    {type:"teach", trg:"반짝거리다", src:"to sparkle, to glitter", pos:"verb", gender:null,
     note:"반짝 (sparkle) + 거리다 (repeatedly).\nTo shine repeatedly with light.",
     example:"A: 밤하늘에 별이 반짝거려.\nB: 오늘 밤은 정말 맑다.",
     exampleSrc:"A: Stars are sparkling in the night sky.\nB: Tonight is truly clear.",
     funFact:"반짝 is onomatopoeia for a single flash. Adding -거리다 makes it continuous: 반짝거리다 (keeps sparkling)."},

    {type:"fb",
     s:"고객의 의견을 제품에 {1}해야 합니다.",
     a:["반영"],
     opts:["반영","반복","반성","반발"],
     hint:"This Sino-Korean verb means to incorporate or reflect feedback into something.",
     sSrc:"We must {1} customer opinions into the product."},

    {type:"match", pairs:[
      {trg:"반면", src:"on the other hand"},
      {trg:"반성", src:"self-reflection"},
      {trg:"반응", src:"reaction"},
      {trg:"반지", src:"ring (jewelry)"}
    ]}
  ]
};
export default LESSON_14;
