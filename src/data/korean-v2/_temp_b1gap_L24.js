// Korean B1 Gap - Lesson 24: Physical Actions and Touch
const LESSON_24 = {
  id:"kov2_b1gap_l24", title:"동작과 접촉", icon:"🤲", xp:15, board:true,
  steps:[
    {type:"intro", title:"Physical Actions and Touch",
     desc:"Learn precise verbs for physical manipulation: touching, pressing, throwing, covering, tying, and more. Korean distinguishes these actions with remarkable specificity.",
     goals:["Learn 20 physical action and contact verbs","Describe manual tasks precisely","Use transitive action verbs in natural context"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"만지다", src:"to touch, to handle", pos:"verb", gender:null,
     note:"General touching with hands. 만지지 마세요 (don't touch).",
     example:"A: 전시품을 만지지 마세요.\nB: 죄송해요, 몰랐어요.\nA: 눈으로만 보세요.",
     exampleSrc:"A: Please don't touch the exhibits.\nB: Sorry, I didn't know.\nA: Just look with your eyes.",
     funFact:"만지다 is the base for 만지작거리다 (to fiddle with something absentmindedly). Korean has many such mimetic extensions: the -작거리다 suffix turns actions into habitual, repeated motions."},

    {type:"teach", trg:"누르다", src:"to press, to push down", pos:"verb", gender:null,
     note:"Pressing buttons, surfaces. 버튼을 누르다 (to press a button).",
     example:"A: 이 버튼을 누르세요.\nB: 이거요? 세게 눌러요?\nA: 가볍게 누르면 돼요.",
     exampleSrc:"A: Press this button.\nB: This one? Do I press hard?\nA: Press it lightly.",
     funFact:"누르다 has a second meaning: to suppress. 감정을 누르다 (to suppress emotions), 상대를 누르다 (to overpower an opponent). The physical pressing metaphor extends to emotional and competitive contexts."},

    {type:"teach", trg:"두드리다", src:"to knock, to tap", pos:"verb", gender:null,
     note:"Repeated tapping. 문을 두드리다 (to knock on a door).",
     example:"A: 문을 두드렸는데 대답이 없어요.\nB: 한 번 더 두드려 보세요.\nA: 두드리고 있는데 안 열어요.",
     exampleSrc:"A: I knocked on the door but there's no answer.\nB: Try knocking again.\nA: I'm knocking but they won't open.",
     funFact:"두드리다 is onomatopoeic: 두드두드 (knock knock). The Korean proverb 두드려 보아야 안다 (you have to knock to know) means you must try before judging. Take action before making assumptions."},

    {type:"teach", trg:"밟다", src:"to step on, to tread on", pos:"verb", gender:null,
     note:"Stepping on with feet. 발을 밟다 (to step on someone's foot).",
     example:"A: 아, 발을 밟았어요!\nB: 죄송해요! 괜찮아요?\nA: 네, 괜찮아요. 조심하세요.",
     exampleSrc:"A: Ow, you stepped on my foot!\nB: Sorry! Are you okay?\nA: Yes, I'm fine. Be careful.",
     funFact:"밟다 extends to processes: 절차를 밟다 (to go through procedures, literally 'stepping through' them). It implies methodically following each step in sequence, like walking a path one footstep at a time."},

    {type:"teach", trg:"던지다", src:"to throw", pos:"verb", gender:null,
     note:"Throwing any object. 공을 던지다 (to throw a ball).",
     example:"A: 공을 이쪽으로 던져 주세요.\nB: 준비됐어요? 던질게요!\nA: 네, 던지세요!",
     exampleSrc:"A: Throw the ball this way.\nB: Ready? I'll throw!\nA: Yes, throw it!",
     funFact:"던지다 also works for abstract things: 질문을 던지다 (to throw a question), 농담을 던지다 (to throw a joke). Korean treats words and ideas as physical objects you can toss into conversation."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'이 버튼을 누르세요'는 무슨 뜻이에요?",
     opts:["이 버튼을 만지세요","이 버튼을 던지세요","이 버튼을 밟으세요","이 버튼을 눌러서 작동하세요"],
     ans:"이 버튼을 눌러서 작동하세요",
     hint:"The verb means to press down on something. Think of what you do with buttons on a machine."},

    {type:"fb",
     s:"문을 {1}는데 대답이 없어요.",
     a:["두드리"],
     opts:["두드리","만지","던지","밟"],
     hint:"A verb meaning to knock or tap repeatedly. You do this on a door to get attention.",
     sSrc:"I'm {1}ing on the door but there's no answer."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"덮다", src:"to cover", pos:"verb", gender:null,
     note:"Placing something over. 이불을 덮다 (to cover with a blanket).",
     example:"A: 이불을 덮고 자세요.\nB: 네, 안 덮으면 추워요.\nA: 감기 걸리지 마세요.",
     exampleSrc:"A: Sleep with a blanket over you.\nB: Yes, it's cold without one.\nA: Don't catch a cold.",
     funFact:"덮다 also means to conceal: 사실을 덮다 (to cover up the truth). In news contexts, 사건을 덮다 (to cover up a case) is a serious accusation. The physical act of covering maps perfectly to secrecy."},

    {type:"teach", trg:"뒤집다", src:"to flip, to turn over", pos:"verb", gender:null,
     note:"Turning something upside down. 팬케이크를 뒤집다 (to flip a pancake).",
     example:"A: 전을 뒤집어야 해요.\nB: 언제 뒤집어요?\nA: 아래가 노릇해지면 뒤집으세요.",
     exampleSrc:"A: We need to flip the Korean pancake.\nB: When do I flip it?\nA: Flip it when the bottom is golden.",
     funFact:"뒤집어지다 (to be turned upside down) means chaos: 세상이 뒤집어지다 (the world is turned upside down). 뒤집어쓰다 (to have something dumped over you) means taking blame: 누명을 뒤집어쓰다 (to be falsely accused)."},

    {type:"teach", trg:"묶다", src:"to tie, to bind", pos:"verb", gender:null,
     note:"Tying things together. 끈으로 묶다 (to tie with string).",
     example:"A: 이 상자를 끈으로 묶어 주세요.\nB: 단단히 묶을까요?\nA: 네, 단단히 묶어 주세요.",
     exampleSrc:"A: Please tie this box with string.\nB: Shall I tie it tightly?\nA: Yes, please tie it tightly.",
     funFact:"묶다 extends to packages: 묶음 (bundle, set). 3개 묶음 (a set of 3) is common in Korean stores. 묶음 배송 (bundled delivery) is an e-commerce term meaning combining shipments."},

    {type:"teach", trg:"뽑다", src:"to pull out, to extract, to select", pos:"verb", gender:null,
     note:"Extracting from within. 이를 뽑다 (to pull a tooth), 사람을 뽑다 (to select someone).",
     example:"A: 이번에 신입사원을 몇 명 뽑아요?\nB: 다섯 명 뽑을 예정이에요.\nA: 경쟁이 치열하겠네요.",
     exampleSrc:"A: How many new employees are you hiring this time?\nB: We plan to select five.\nA: The competition must be fierce.",
     funFact:"뽑다 works for elections too: 대통령을 뽑다 (to elect a president). The core image is selecting/extracting one from many. Even 노래방에서 노래를 뽑다 (to pick a song at karaoke) uses this verb."},

    {type:"teach", trg:"빼다", src:"to remove, to subtract, to take out", pos:"verb", gender:null,
     note:"Removing from within. Mathematical subtraction: 5에서 3을 빼다 (5 minus 3).",
     example:"A: 커피에서 설탕을 빼 주세요.\nB: 알겠어요, 설탕 없이 드릴게요.\nA: 감사합니다.",
     exampleSrc:"A: Please leave out the sugar from my coffee.\nB: Sure, I'll give it without sugar.\nA: Thank you.",
     funFact:"빼다 vs. 뽑다: 빼다 is removing something that does not belong or subtracting, while 뽑다 is extracting something embedded. 빼놓을 수 없다 (cannot be left out) means something is essential."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"덮다", src:"to cover"},
      {trg:"뒤집다", src:"to flip"},
      {trg:"묶다", src:"to tie, bind"},
      {trg:"뽑다", src:"to pull out, select"}
    ]},

    {type:"fb",
     s:"커피에서 설탕을 {1} 주세요.",
     a:["빼"],
     opts:["빼","뽑아","덮어","묶어"],
     hint:"A verb meaning to remove or leave out. You want the coffee without sugar.",
     sSrc:"Please {1} the sugar from my coffee."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"쏘다", src:"to shoot", pos:"verb", gender:null,
     note:"Shooting projectiles. 총을 쏘다 (to fire a gun), 활을 쏘다 (to shoot an arrow).",
     example:"A: 양궁을 배우고 싶어요.\nB: 활을 쏴 본 적 있어요?\nA: 아니요, 처음이에요.",
     exampleSrc:"A: I want to learn archery.\nB: Have you ever shot a bow?\nA: No, it's my first time.",
     funFact:"Korea dominates Olympic archery. 양궁 (洋弓, Western archery) uses 쏘다. Fun fact: Korean archers have won gold in nearly every Olympics since 1984. The verb 쏘다 also means 'to sting' (벌이 쏘다 = a bee stings)."},

    {type:"teach", trg:"쏟다", src:"to spill, to pour out", pos:"verb", gender:null,
     note:"Accidentally or intentionally pouring liquid out. 물을 쏟다 (to spill water).",
     example:"A: 아, 커피를 쏟았어요!\nB: 괜찮아요? 화상은 없어요?\nA: 네, 다행히 식은 커피였어요.",
     exampleSrc:"A: Oh, I spilled the coffee!\nB: Are you okay? No burns?\nA: Yes, thankfully it was cold coffee.",
     funFact:"쏟다 extends to emotions: 마음을 쏟다 (to pour one's heart into something), 노력을 쏟다 (to pour effort into). The image of liquid flowing out maps to emotional or energetic investment."},

    {type:"teach", trg:"쏟아지다", src:"to pour down, to cascade", pos:"verb", gender:null,
     note:"Passive/intensive of 쏟다. Things pour down by themselves: 비가 쏟아지다.",
     example:"A: 갑자기 비가 쏟아졌어요.\nB: 우산 있어요?\nA: 없어요. 어디 들어가요!",
     exampleSrc:"A: Rain suddenly poured down.\nB: Do you have an umbrella?\nA: No. Let's go inside somewhere!",
     funFact:"쏟아지다 conveys volume and intensity. 별이 쏟아지다 (stars pour down) describes a stunning night sky. 칭찬이 쏟아지다 (praise pours in) and 비난이 쏟아지다 (criticism pours in) are common news phrases."},

    {type:"teach", trg:"뿌리다", src:"to sprinkle, to scatter", pos:"verb", gender:null,
     note:"Scattering small particles. 소금을 뿌리다 (to sprinkle salt).",
     example:"A: 고기 위에 소금을 뿌려 주세요.\nB: 많이 뿌릴까요?\nA: 조금만 뿌리세요.",
     exampleSrc:"A: Please sprinkle salt over the meat.\nB: Should I sprinkle a lot?\nA: Just a little.",
     funFact:"뿌리 means 'root' (of a plant), but 뿌리다 (to sprinkle) is a different word. 씨를 뿌리다 (to sow seeds) connects both: scattering seeds that take root. A beautiful overlap in Korean vocabulary."},

    {type:"teach", trg:"벗기다", src:"to peel off, to strip, to undress", pos:"verb", gender:null,
     note:"Removing outer layer. 껍질을 벗기다 (to peel skin), 옷을 벗기다 (to undress someone).",
     example:"A: 감자 껍질을 벗겨 주세요.\nB: 칼로 벗길까요?\nA: 네, 얇게 벗겨 주세요.",
     exampleSrc:"A: Please peel the potato skin.\nB: Shall I peel with a knife?\nA: Yes, peel it thinly.",
     funFact:"벗기다 is the causative of 벗다 (to take off). 벗다 = I take off my own clothes. 벗기다 = I take off someone else's clothes. This self/other distinction is a key Korean verb pattern."},

    // --- Quiz batch 3 ---
    {type:"mc",
     q:"'비가 쏟아졌어요'는 비가 어떻게 왔어요?",
     opts:["아주 조금 왔어요","천천히 왔어요","세게 많이 왔어요","안 왔어요"],
     ans:"세게 많이 왔어요",
     hint:"The verb implies something pouring down with great volume and intensity, like a cascade."},

    {type:"fb",
     s:"고기 위에 소금을 {1} 주세요.",
     a:["뿌려"],
     opts:["뿌려","쏟아","쏴","벗겨"],
     hint:"A verb meaning to scatter small particles. You do this lightly with salt or pepper.",
     sSrc:"Please {1} salt over the meat."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"벌리다", src:"to spread apart, to open wide", pos:"verb", gender:null,
     note:"Opening or widening. 입을 벌리다 (to open one's mouth), 다리를 벌리다 (to spread legs).",
     example:"A: 입을 크게 벌려 보세요.\nB: 아~ 이렇게요?\nA: 네, 목이 좀 부었네요.",
     exampleSrc:"A: Open your mouth wide.\nB: Ah~ like this?\nA: Yes, your throat is a bit swollen.",
     funFact:"벌리다 appears in the common expression 주머니를 벌리다 (to open one's pocket/purse), which figuratively means to spend money. 양팔을 벌리다 (to spread both arms) signals a warm welcome."},

    {type:"teach", trg:"뻗다", src:"to stretch out, to extend", pos:"verb", gender:null,
     note:"Extending limbs or lines. 팔을 뻗다 (to stretch out one's arm).",
     example:"A: 손을 뻗으면 닿을 수 있어요?\nB: 좀 더 뻗어 볼게요.\nA: 조금만 더!",
     exampleSrc:"A: Can you reach it if you stretch your hand?\nB: I'll try stretching more.\nA: Just a little more!",
     funFact:"뻗다 also means 'to collapse from exhaustion': 뻗어 자다 (to sleep stretched out = to sleep like a log). After hard work, 뻗어 버렸다 (I collapsed) is a vivid way to express total fatigue."},

    {type:"teach", trg:"얹다", src:"to place on top, to put on", pos:"verb", gender:null,
     note:"Gently placing something on a surface. 밥 위에 계란을 얹다.",
     example:"A: 밥 위에 김을 얹어 주세요.\nB: 김치도 얹을까요?\nA: 네, 같이 얹어 주세요.",
     exampleSrc:"A: Please put seaweed on top of the rice.\nB: Should I put kimchi on too?\nA: Yes, put both on.",
     funFact:"얹다 is gentle and precise, implying a careful placement. 얹혀 살다 (to live placed upon someone = to live as a freeloader) is an interesting extension: being gently placed on someone else's support."},

    {type:"teach", trg:"밀다", src:"to push", pos:"verb", gender:null,
     note:"Pushing forward. 문을 밀다 (to push a door), 수레를 밀다 (to push a cart).",
     example:"A: 이 문은 미세요, 당기지 마세요.\nB: 아, 밀어야 하는 문이군요.\nA: 네, 밀면 열려요.",
     exampleSrc:"A: Push this door, don't pull.\nB: Ah, it's a push door.\nA: Yes, push and it opens.",
     funFact:"밀다 and 당기다 (pull) are the pair every Korean knows from door signs: 미시오 (push) and 당기시오 (pull). 밀어주다 (to give a push) means to support someone behind the scenes."},

    {type:"teach", trg:"끌다", src:"to pull, to drag, to attract", pos:"verb", gender:null,
     note:"Pulling or dragging. Also: 관심을 끌다 (to attract attention).",
     example:"A: 이 가방을 끌고 가세요.\nB: 바퀴가 있어서 끌기 쉬워요.\nA: 다행이에요.",
     exampleSrc:"A: Pull this bag along.\nB: It has wheels so it's easy to drag.\nA: That's good.",
     funFact:"끌다 has rich metaphorical use: 시간을 끌다 (to drag out time/stall), 관심을 끌다 (to attract interest), 이끌다 (to lead, an intensified form). Attraction is literally 'pulling' in Korean."},

    // --- Quiz batch 4 ---
    {type:"fb",
     s:"이 문은 {1}, 당기지 마세요.",
     a:["미세요"],
     opts:["미세요","끄세요","뻗으세요","얹으세요"],
     hint:"The opposite of pulling. You do this to open certain doors by pushing them forward.",
     sSrc:"{1} this door, don't pull."},

    {type:"match", pairs:[
      {trg:"벌리다", src:"to spread apart"},
      {trg:"뻗다", src:"to stretch out"},
      {trg:"얹다", src:"to place on top"},
      {trg:"끌다", src:"to pull, drag"}
    ]},

    {type:"mc",
     q:"'관심을 끌다'는 무슨 뜻이에요?",
     opts:["관심을 밀어내다","관심을 잃다","관심을 끌어당기다","관심을 덮다"],
     ans:"관심을 끌어당기다",
     hint:"The verb means to pull or attract. When combined with 'interest,' it means drawing attention."}
  ]
};
export default LESSON_24;
