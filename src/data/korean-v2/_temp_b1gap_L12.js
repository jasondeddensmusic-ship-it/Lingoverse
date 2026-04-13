// Korean V2 B1 Gap Lesson 12 — Thought, Memory, and Perception
// 20 teach cards + interleaved quizzes. Max 30 steps.

const LESSON_12 = {
  id:"kov2_b1gap_l12", title:"생각과 기억", icon:"🧠", xp:15, board:true,
  steps:[
    {type:"intro", title:"Thought, Memory, and Perception",
     desc:"Explore the inner world of thinking, remembering, and perceiving. These words describe what happens inside your mind and how you see the world around you.",
     goals:["Master 20 thought and perception words","Distinguish transitive/intransitive verb pairs","Use compound verbs for mental processes"]},

    // ── Teach 1-4: Memory verbs ──
    {type:"teach", trg:"떠오르다", src:"to come to mind, to surface", pos:"verb", gender:null,
     note:"떠 (float) + 오르다 (rise).\nIntransitive: the thought rises on its own.",
     example:"A: 갑자기 좋은 생각이 떠올랐어요.\nB: 어떤 생각이요?\nA: 여행 갈 때 찍은 사진이 떠올랐어요.\nB: 좋은 추억이네요.",
     exampleSrc:"A: A good thought suddenly came to mind.\nB: What thought?\nA: A photo I took while traveling came to mind.\nB: That's a nice memory.",
     funFact:"Korean distinguishes between memories that come to you (떠오르다) and memories you actively recall (떠올리다)."},

    {type:"teach", trg:"떠올리다", src:"to recall, to bring to mind", pos:"verb", gender:null,
     note:"Transitive form of 떠오르다.\nYOU actively recall something.",
     example:"A: 옛날 일을 떠올리면 웃음이 나요.\nB: 어떤 일이요?\nA: 학교 다닐 때 친구들이랑 놀던 일이요.\nB: 저도 그때를 떠올리면 좋아요.",
     exampleSrc:"A: When I recall old times, I laugh.\nB: What kind of things?\nA: Playing with friends when I was in school.\nB: I also feel good when I recall those times.",
     funFact:"The -리다 ending often makes intransitive verbs transitive: 떠오르다 (rise) vs 떠올리다 (raise)."},

    {type:"teach", trg:"머릿속", src:"in one's mind, inside one's head", pos:"noun", gender:null,
     note:"머리 (head) + ㅅ (possessive) + 속 (inside).\nFigurative: the space of thought.",
     example:"A: 머릿속이 복잡해요.\nB: 무슨 생각을 해요?\nA: 이것저것 다 생각나요.\nB: 좀 쉬는 게 좋겠어요.",
     exampleSrc:"A: My mind is complicated.\nB: What are you thinking about?\nA: All sorts of things come to mind.\nB: You should take a rest.",
     funFact:"Koreans say 머릿속이 하얘지다 (mind goes white) to describe going blank from shock."},

    {type:"teach", trg:"마음속", src:"in one's heart, deep inside", pos:"noun", gender:null,
     note:"마음 (heart/mind) + 속 (inside).\nEmotional inner world, deeper than 머릿속.",
     example:"A: 마음속으로 뭐라고 생각해요?\nB: 솔직히 좀 걱정돼요.\nA: 마음속에 담아 두지 마세요.\nB: 네, 이야기할게요.",
     exampleSrc:"A: What do you think deep inside?\nB: Honestly, I'm a bit worried.\nA: Don't keep it inside your heart.\nB: Okay, I'll talk about it.",
     funFact:"마음속 is the emotional core, while 머릿속 is intellectual. Korean separates heart-thinking from head-thinking."},

    // ── Quiz batch 1 ──
    {type:"mc",
     q:"갑자기 좋은 아이디어가 ___.",
     opts:["떠올렸어요","떠올랐어요","머릿속이에요","마음속이에요"],
     ans:"떠올랐어요",
     hint:"A good idea suddenly surfaced on its own. Which intransitive verb describes this?"},

    {type:"fb",
     s:"옛날 추억을 {1}면 기분이 좋아요.",
     a:["떠올리"],
     opts:["떠올리","떠오르","머릿속","마음속"],
     hint:"When I actively bring back old memories. Which transitive recall verb fits?",
     sSrc:"When I recall old memories, I feel good."},

    // ── Teach 5-8: Perception and consideration ──
    {type:"teach", trg:"고려하다", src:"to consider, to take into account", pos:"verb", gender:null,
     note:"Hanja: 考慮 (think + ponder).\nFormal. Used in decisions and planning.",
     example:"A: 이 문제를 어떻게 해결할까요?\nB: 여러 가지를 고려해야 해요.\nA: 예를 들면요?\nB: 시간, 비용, 사람 수를 고려해야 해요.",
     exampleSrc:"A: How should we solve this problem?\nB: We need to consider various things.\nA: For example?\nB: We need to consider time, cost, and number of people.",
     funFact:"In Korean job interviews, 고려하다 is a favorite word: 여러 요소를 고려했습니다 (I considered various factors)."},

    {type:"teach", trg:"깨다", src:"to wake up, to break", pos:"verb", gender:null,
     note:"Two meanings: wake from sleep OR break something.\nContext tells you which.",
     example:"A: 몇 시에 깼어요?\nB: 6시에 깼어요. 알람 소리에요.\nA: 일찍 깼네요!\nB: 네, 오늘 할 일이 많아요.",
     exampleSrc:"A: What time did you wake up?\nB: I woke up at 6. It was the alarm.\nA: You woke up early!\nB: Yes, I have a lot to do today.",
     funFact:"The expression 꿈을 깨다 means to wake from a dream, but also to have your illusions shattered."},

    {type:"teach", trg:"깨지다", src:"to be broken, to shatter", pos:"verb", gender:null,
     note:"Passive form of 깨다 (break).\nThe object breaks on its own or by accident.",
     example:"A: 컵이 깨졌어요!\nB: 어떻게 깨졌어요?\nA: 테이블에서 떨어졌어요.\nB: 조심하세요. 유리 조각 위험해요.",
     exampleSrc:"A: The cup broke!\nB: How did it break?\nA: It fell from the table.\nB: Be careful. Glass pieces are dangerous.",
     funFact:"Korean has many transitive/passive pairs: 깨다/깨지다, 놓다/놓이다, 만들다/만들어지다."},

    {type:"teach", trg:"닮다", src:"to resemble, to look like", pos:"verb", gender:null,
     note:"Used for physical or personality resemblance.\n닮은꼴 = a look-alike.",
     example:"A: 아이가 누구를 닮았어요?\nB: 얼굴은 아빠를 닮았어요.\nA: 성격은요?\nB: 성격은 엄마를 닮은 것 같아요.",
     exampleSrc:"A: Who does the child resemble?\nB: The face resembles the father.\nA: What about personality?\nB: I think the personality resembles the mother.",
     funFact:"Koreans love the compliment 연예인 닮았어요 (you look like a celebrity)."},

    // ── Quiz batch 2 ──
    {type:"match", pairs:[
      {trg:"고려하다", src:"to consider"},
      {trg:"깨다", src:"to wake up, break"},
      {trg:"깨지다", src:"to be broken"},
      {trg:"닮다", src:"to resemble"}
    ]},

    {type:"mc",
     q:"유리컵이 바닥에 떨어져서 ___.",
     opts:["깼어요","닮았어요","고려했어요","깨졌어요"],
     ans:"깨졌어요",
     hint:"The glass cup fell and shattered. Which passive verb means to be broken?"},

    // ── Teach 9-12: Compound perception verbs ──
    {type:"teach", trg:"그려지다", src:"to be drawn, to be pictured", pos:"verb", gender:null,
     note:"Passive of 그리다 (to draw).\nFigurative: an image forms in your mind.",
     example:"A: 미래가 어떻게 그려져요?\nB: 행복한 가정이 그려져요.\nA: 좋은 꿈이네요.\nB: 열심히 노력할 거예요.",
     exampleSrc:"A: How do you picture the future?\nB: A happy family is pictured.\nA: That's a nice dream.\nB: I'll work hard for it.",
     funFact:"The expression 그림이 그려지다 (a picture is drawn) means you can clearly imagine a scene."},

    {type:"teach", trg:"들여다보다", src:"to peer into, to look closely", pos:"verb", gender:null,
     note:"들여 (inward) + 다 + 보다 (look).\nLooking carefully into something.",
     example:"A: 뭘 들여다보고 있어요?\nB: 이 상자 안을 들여다보고 있어요.\nA: 뭐가 있어요?\nB: 아직 모르겠어요. 어두워서.",
     exampleSrc:"A: What are you peering into?\nB: I'm looking into this box.\nA: What's in there?\nB: I don't know yet. It's dark.",
     funFact:"Korean compound verbs with 들여- indicate inward movement: 들여다보다, 들여놓다, 들여보내다."},

    {type:"teach", trg:"들려오다", src:"to be heard (coming from somewhere)", pos:"verb", gender:null,
     note:"들리다 (be heard) + 오다 (come).\nSound coming toward the listener.",
     example:"A: 무슨 소리가 들려와요?\nB: 음악 소리가 들려와요.\nA: 어디에서 들려오는 거예요?\nB: 옆집에서 들려오는 것 같아요.",
     exampleSrc:"A: What sound is that?\nB: I hear music.\nA: Where is it coming from?\nB: I think it's coming from the next-door neighbor.",
     funFact:"The -아/어 오다 pattern means the action comes toward you. 들려오다 = sound reaches you."},

    {type:"teach", trg:"뜨다", src:"to open (eyes), to float", pos:"verb", gender:null,
     note:"Two core meanings: open eyes (눈을 뜨다)\nOR float on water (물에 뜨다).",
     example:"A: 눈을 떠 보세요.\nB: 와, 깜짝이야!\nA: 생일 축하해요!\nB: 눈을 뜨자마자 놀랐어요!",
     exampleSrc:"A: Open your eyes.\nB: Wow, what a surprise!\nA: Happy birthday!\nB: I was surprised as soon as I opened my eyes!",
     funFact:"해가 뜨다 means 'the sun rises,' using the floating/ascending meaning of 뜨다."},

    // ── Quiz batch 3 ──
    {type:"fb",
     s:"옆 방에서 웃음소리가 {1}.",
     a:["들려왔어요"],
     opts:["들려왔어요","들여다봤어요","그려졌어요","떴어요"],
     hint:"Laughter was heard coming from the next room. Which compound verb describes sound arriving?",
     sSrc:"Laughter was heard coming from the next room."},

    // ── Teach 13-16: Appearance nouns ──
    {type:"teach", trg:"눈빛", src:"look in one's eyes, gaze", pos:"noun", gender:null,
     note:"눈 (eye) + 빛 (light).\nThe light or expression in someone's eyes.",
     example:"A: 그 사람 눈빛이 무서웠어요.\nB: 왜요? 무슨 일이 있었어요?\nA: 화가 난 눈빛이었어요.\nB: 눈빛만 봐도 알 수 있어요.",
     exampleSrc:"A: That person's gaze was scary.\nB: Why? What happened?\nA: It was an angry look in the eyes.\nB: You can tell just from the look in someone's eyes.",
     funFact:"Korean uses many 눈 compounds: 눈물 (tears), 눈썹 (eyebrows), 눈동자 (pupil), 눈빛 (gaze)."},

    {type:"teach", trg:"모습", src:"appearance, figure", pos:"noun", gender:null,
     note:"How someone or something looks overall.\nBroader than just face.",
     example:"A: 오랜만에 친구를 만났어요.\nB: 많이 변했어요?\nA: 아니요, 옛날 모습 그대로예요.\nB: 반가웠겠네요.",
     exampleSrc:"A: I met a friend after a long time.\nB: Did they change a lot?\nA: No, they look the same as before.\nB: That must have been nice.",
     funFact:"모습 can describe both physical appearance and the impression someone gives: 열심히 일하는 모습 (the image of working hard)."},

    {type:"teach", trg:"모양", src:"shape, form", pos:"noun", gender:null,
     note:"Physical shape of an object.\nAlso used figuratively: -는 모양이다 = it seems.",
     example:"A: 이 빵 모양이 재미있어요.\nB: 네, 동물 모양이에요.\nA: 곰 모양 같아요.\nB: 먹기 아깝네요.",
     exampleSrc:"A: This bread has a funny shape.\nB: Yes, it's animal-shaped.\nA: It looks like a bear shape.\nB: It's too cute to eat.",
     funFact:"The grammar pattern -는 모양이다 means 'it seems/appears that,' based on evidence you observe."},

    {type:"teach", trg:"관하다", src:"regarding, concerning", pos:"verb", gender:null,
     note:"Hanja: 關 (related, connected).\nUsed as -에 관한/관해서 = about, regarding.",
     example:"A: 이 책은 뭐에 관한 거예요?\nB: 한국 역사에 관한 책이에요.\nA: 재미있어요?\nB: 네, 아주 흥미로워요.",
     exampleSrc:"A: What is this book about?\nB: It's a book about Korean history.\nA: Is it interesting?\nB: Yes, very fascinating.",
     funFact:"-에 관해서 and -에 대해서 both mean 'about/regarding.' 관하다 is slightly more formal and written."},

    // ── Quiz batch 4 ──
    {type:"match", pairs:[
      {trg:"눈빛", src:"look in eyes, gaze"},
      {trg:"모습", src:"appearance, figure"},
      {trg:"모양", src:"shape, form"},
      {trg:"관하다", src:"regarding"}
    ]},

    // ── Teach 17-20: Final batch ──
    {type:"teach", trg:"건지다", src:"to rescue, to fish out", pos:"verb", gender:null,
     note:"Pull something out of water or danger.\n건져 올리다 = to pull up and save.",
     example:"A: 강에 빠진 사람을 건졌대요.\nB: 누가 건졌어요?\nA: 지나가던 사람이 뛰어들어서 건졌어요.\nB: 정말 용감하네요.",
     exampleSrc:"A: They rescued a person who fell in the river.\nB: Who rescued them?\nA: A passerby jumped in and saved them.\nB: That's really brave.",
     funFact:"In cooking, 건지다 means to fish something out of broth: 건더기를 건지다 (scoop out the solids)."},

    {type:"teach", trg:"고개", src:"head (for nodding), hill pass", pos:"noun", gender:null,
     note:"Two meanings: the head/neck area (for nodding),\nor a mountain pass.",
     example:"A: 고개를 끄덕였어요?\nB: 네, 동의한다는 뜻으로 고개를 끄덕였어요.\nA: 고개를 저으면 반대예요?\nB: 네, 맞아요.",
     exampleSrc:"A: Did you nod your head?\nB: Yes, I nodded as a sign of agreement.\nA: Shaking your head means disagreement?\nB: Yes, that's right.",
     funFact:"고개를 끄덕이다 (nod), 고개를 젓다 (shake head), 고개를 숙이다 (bow head): three essential Korean gestures."},

    {type:"teach", trg:"낯설다", src:"to be unfamiliar, to be strange", pos:"adj", gender:null,
     note:"낯 (face) + 설다 (raw, uncooked).\nA face you have not seen before feels 'raw.'",
     example:"A: 이 동네가 낯설어요.\nB: 처음 왔으니까 그렇죠.\nA: 낯선 곳은 좀 긴장돼요.\nB: 금방 익숙해질 거예요.",
     exampleSrc:"A: This neighborhood feels unfamiliar.\nB: Of course, since it's your first time here.\nA: Unfamiliar places make me a bit nervous.\nB: You'll get used to it soon.",
     funFact:"The opposite is 낯익다 (to be familiar). 낯 (face) + 익다 (to ripen) = a face that has 'ripened' into familiarity."},

    {type:"teach", trg:"귀엽다", src:"to be cute", pos:"adj", gender:null,
     note:"One of the most common compliments in Korean.\n귀여워요 is the polite form.",
     example:"A: 이 강아지 너무 귀여워요!\nB: 맞아요, 정말 귀엽죠?\nA: 이름이 뭐예요?\nB: 콩이에요. 작고 귀여워서요.",
     exampleSrc:"A: This puppy is so cute!\nB: Right, really cute, isn't it?\nA: What's its name?\nB: Kongi. Because it's small and cute.",
     funFact:"Korean 'aegyo' (애교) culture celebrates cuteness. 귀엽다 is the ultimate compliment for pets, babies, and friends."},

    // ── Final quiz batch ──
    {type:"mc",
     q:"처음 가는 곳은 ___어요.",
     opts:["낯설","귀여워","건져","고려해"],
     ans:"낯설",
     hint:"A place you visit for the first time feels strange or unfamiliar. Which adjective describes this?"},

    {type:"fb",
     s:"강에서 아이를 {1}어요.",
     a:["건졌"],
     opts:["건졌","깼","닮았","떴"],
     hint:"Someone was pulled out of the river and saved. Which verb means to rescue or fish out?",
     sSrc:"They rescued the child from the river."},

    {type:"mc",
     q:"고개를 끄덕이면 무슨 뜻이에요?",
     opts:["반대한다는 뜻이에요","동의한다는 뜻이에요","모른다는 뜻이에요","화가 났다는 뜻이에요"],
     ans:"동의한다는 뜻이에요",
     hint:"Nodding your head is a universal gesture. What does it communicate in Korean culture?"}
  ]
};

export default LESSON_12;
