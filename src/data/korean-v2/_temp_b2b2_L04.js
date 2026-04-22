// Korean B2. Batch 2, Lesson 4: Awakening and Insight
// Words: 깨끗해지다, 깨닫다, 깨달음, 깨뜨리다, 깨소금, 깨어나다, 깨어지다, 깨우다, 꺼지다, 꺾다, 껌, 꼬리, 꼬마, 꼭, 꼭대기, 꼴, 꼼꼼하다, 꼼짝, 꽂다, 꽉

const LESSON_4 = {
  id:"kov2_b2b2_l4", title:"깨달음과 변화", icon:"💡", xp:15, board:true,
  steps:[
    {type:"intro", title:"깨달음과 변화",
     desc:"Learn vocabulary about awakening, breaking, and precise descriptions. These native Korean words bring vivid imagery to your speech.",
     goals:["Master 20 native Korean verbs and descriptive words","Understand causative and passive verb pairs","Use ideophones and vivid adverbs naturally"]},

    {type:"teach", trg:"깨끗해지다", src:"to become clean", pos:"verb", gender:null,
     note:"깨끗하다 (clean) + 해지다 (become).\nThe process of becoming clean.",
     example:"A: 빨래를 하니까 깨끗해졌어요.\nB: 세제를 많이 넣었더니 효과가 좋네요.",
     exampleSrc:"A: The laundry became clean after washing.\nB: The extra detergent worked well.",
     funFact:"The -해지다 pattern works with all 하다-adjectives: 유명해지다 (become famous), 건강해지다 (become healthy)."},

    {type:"teach", trg:"깨닫다", src:"to realize, to come to understand", pos:"verb", gender:null,
     note:"Native Korean. A moment of insight\nwhere something clicks into place.",
     example:"A: 그때 중요한 사실을 깨달았어요.\nB: 뭘 깨달았는데요?",
     exampleSrc:"A: I realized an important fact then.\nB: What did you realize?",
     funFact:"깨닫다 implies a sudden, profound understanding. It is deeper than simply '알다' (to know)."},

    {type:"teach", trg:"깨달음", src:"realization, enlightenment", pos:"noun", gender:null,
     note:"Nominalized form of 깨닫다.\nThe state of having realized something profound.",
     example:"A: 큰 깨달음을 얻었어요.\nB: 어떤 깨달음이요?",
     exampleSrc:"A: I gained a great realization.\nB: What kind of realization?",
     funFact:"In Buddhism, 깨달음 is the word for enlightenment. The Buddha is called 깨달은 사람 (the awakened one)."},

    {type:"teach", trg:"깨뜨리다", src:"to break, to shatter", pos:"verb", gender:null,
     note:"깨다 (to break) + 뜨리다 (intensifier).\nTo break something forcefully into pieces.",
     example:"A: 누가 유리창을 깨뜨렸어?\nB: 아이들이 공놀이하다가 깨뜨렸어.",
     exampleSrc:"A: Who broke the window?\nB: The kids broke it while playing ball.",
     funFact:"깨뜨리다 is stronger than 깨다. The -뜨리다 suffix adds force: 넘어뜨리다 (knock over), 무너뜨리다 (demolish)."},

    {type:"teach", trg:"깨소금", src:"ground sesame seeds", pos:"noun", gender:null,
     note:"깨 (sesame) + 소금 (salt).\nSesame seeds ground with a bit of salt.",
     example:"A: 나물에 깨소금을 넣을까?\nB: 응, 조금만 뿌려 줘.",
     exampleSrc:"A: Should I add ground sesame to the vegetables?\nB: Yes, sprinkle just a little.",
     funFact:"Despite containing 소금 (salt), 깨소금 is primarily ground sesame. The salt is a small addition."},

    {type:"mc",
     q:"'깨달음'과 가장 가까운 뜻은?",
     opts:["갑자기 이해하게 된 것","오랫동안 공부한 것","다른 사람에게 배운 것","책에서 읽은 것"],
     ans:"갑자기 이해하게 된 것",
     hint:"A sudden, profound moment of understanding something deeply, like a light turning on."},

    {type:"teach", trg:"깨어나다", src:"to wake up, to awaken", pos:"verb", gender:null,
     note:"깨다 (wake) + 어나다 (come out of).\nTo emerge from sleep or unconsciousness.",
     example:"A: 환자가 드디어 깨어났어요.\nB: 정말 다행이에요!",
     exampleSrc:"A: The patient finally woke up.\nB: What a relief!",
     funFact:"깨어나다 is more literary than 일어나다. It implies awakening from a deep or significant sleep."},

    {type:"teach", trg:"깨어지다", src:"to be broken, to shatter", pos:"verb", gender:null,
     note:"깨다 (break) + 어지다 (become).\nSomething breaks apart on its own.",
     example:"A: 접시가 깨어졌어요.\nB: 괜찮아, 새 거 사자.",
     exampleSrc:"A: The plate broke.\nB: It is okay, let us buy a new one.",
     funFact:"깨어지다 is intransitive (it broke by itself). 깨뜨리다 is transitive (someone broke it). A key verb pair."},

    {type:"teach", trg:"깨우다", src:"to wake someone up", pos:"verb", gender:null,
     note:"Causative of 깨다. To cause someone\nto wake from sleep.",
     example:"A: 아침 7시에 깨워 줘.\nB: 알겠어, 알람도 맞춰 놓을게.",
     exampleSrc:"A: Wake me up at 7 AM.\nB: Got it, I will also set an alarm.",
     funFact:"깨우다 also means 'to enlighten' someone figuratively: 잠에서 깨우다 (literal) vs 무지에서 깨우다 (figurative)."},

    {type:"teach", trg:"꺼지다", src:"to go out, to turn off, to get lost", pos:"verb", gender:null,
     note:"Native Korean. A light or fire goes out.\nSlang: rude way to say 'get lost.'",
     example:"A: 갑자기 불이 꺼졌어요.\nB: 정전인가 봐요.",
     exampleSrc:"A: The lights suddenly went out.\nB: It must be a power outage.",
     funFact:"꺼져! as slang means 'Get lost!' Very rude. Only use with close friends in a joking context."},

    {type:"fb",
     s:"환자가 마취에서 {1}.",
     a:["깨어났다"],
     opts:["깨어났다","깨뜨렸다","깨우다","꺼졌다"],
     hint:"To emerge from unconsciousness or deep sleep. The patient comes to.",
     sSrc:"The patient {1} from anesthesia."},

    {type:"teach", trg:"꺾다", src:"to break off, to bend, to turn", pos:"verb", gender:null,
     note:"Native Korean. To snap something by bending,\nor to change direction.",
     example:"A: 꽃 줄기를 꺾지 마세요.\nB: 죄송해요, 몰랐어요.",
     exampleSrc:"A: Do not break the flower stem.\nB: Sorry, I did not know.",
     funFact:"꺾다 extends to abstract uses: 기세를 꺾다 (break someone's momentum), 고개를 꺾다 (turn one's head)."},

    {type:"teach", trg:"껌", src:"chewing gum", pos:"noun", gender:null,
     note:"Borrowed from English 'gum.'\nAdapted to Korean pronunciation.",
     example:"A: 껌 하나 줄까?\nB: 고마워, 민트맛 있어?",
     exampleSrc:"A: Want a piece of gum?\nB: Thanks, do you have mint flavor?",
     funFact:"껌 is one of many English loanwords shortened in Korean. Others: 에어컨 (aircon), 아파트 (apartment)."},

    {type:"teach", trg:"꼬리", src:"tail", pos:"noun", gender:null,
     note:"Native Korean. The tail of an animal.\nAlso used in many figurative expressions.",
     example:"A: 강아지가 꼬리를 흔들어요.\nB: 반가운가 봐요.",
     exampleSrc:"A: The puppy is wagging its tail.\nB: It must be happy to see you.",
     funFact:"꼬리를 잡다 (catch the tail) means to catch someone's mistake. 꼬리를 물다 (bite the tail) means one thing follows another."},

    {type:"teach", trg:"꼬마", src:"little kid, tot", pos:"noun", gender:null,
     note:"Native Korean. An affectionate term\nfor a very young child.",
     example:"A: 이 꼬마가 네 딸이야?\nB: 응, 올해 다섯 살이야.",
     exampleSrc:"A: Is this little one your daughter?\nB: Yes, she is five years old this year.",
     funFact:"꼬마 is endearing but can be condescending if used for older children. Safe for toddlers and preschoolers."},

    {type:"teach", trg:"꼭", src:"surely, without fail; tightly", pos:"adv", gender:null,
     note:"Native Korean. Emphasizes certainty or firmness.\nTwo senses: 'definitely' or 'tightly.'",
     example:"A: 꼭 와야 해!\nB: 알겠어, 꼭 갈게.",
     exampleSrc:"A: You must come no matter what!\nB: I got it, I will definitely go.",
     funFact:"꼭 is one of the most common Korean adverbs. 꼭 잡아 (hold tight) and 꼭 해 (do it for sure) are daily phrases."},

    {type:"mc",
     q:"'꼬리를 흔들다'에서 꼬리의 뜻은?",
     opts:["목에 달린 방울","동물의 뒷부분에 달린 것","머리 위의 뿔","앞발"],
     ans:"동물의 뒷부분에 달린 것",
     hint:"The appendage at the rear end of an animal, often used to express emotion."},

    {type:"teach", trg:"꼭대기", src:"top, summit, peak", pos:"noun", gender:null,
     note:"꼭 (tight/exact) + 대기 (top area).\nThe very highest point of something.",
     example:"A: 산 꼭대기에 올라갔어요?\nB: 네, 경치가 정말 좋았어요.",
     exampleSrc:"A: Did you climb to the top of the mountain?\nB: Yes, the view was really great.",
     funFact:"꼭대기 is used for mountains, buildings, and abstract things: 권력의 꼭대기 (the pinnacle of power)."},

    {type:"teach", trg:"꼴", src:"appearance, state (often negative)", pos:"noun", gender:null,
     note:"Native Korean. How something looks,\nusually with a negative nuance.",
     example:"A: 비 맞아서 꼴이 말이 아니야.\nB: 빨리 옷 갈아입어.",
     exampleSrc:"A: I got rained on and look like a mess.\nB: Hurry and change clothes.",
     funFact:"꼴 is almost always negative. 꼴불견 (unsightly) and 꼴 좋다 (sarcastic: 'what a sight') are common."},

    {type:"teach", trg:"꼼꼼하다", src:"to be meticulous, thorough", pos:"adj", gender:null,
     note:"Native Korean mimetic origin.\nDescribes careful, detailed attention.",
     example:"A: 그 직원은 정말 꼼꼼해요.\nB: 맞아요, 실수가 거의 없어요.",
     exampleSrc:"A: That employee is really meticulous.\nB: Right, they hardly make mistakes.",
     funFact:"꼼꼼하다 is a highly valued trait in Korean workplaces. It appears frequently in job recommendation letters."},

    {type:"teach", trg:"꼼짝", src:"a budge, a slight movement", pos:"adv", gender:null,
     note:"Mimetic word. A tiny movement.\nUsually in negative: 꼼짝도 못 하다.",
     example:"A: 너무 무거워서 꼼짝도 못 했어요.\nB: 도움을 요청했어야지.",
     exampleSrc:"A: It was so heavy I could not budge.\nB: You should have asked for help.",
     funFact:"꼼짝 almost always appears with 못 하다 (cannot). 꼼짝도 못 하다 (cannot even budge) is a set expression."},

    {type:"teach", trg:"꽂다", src:"to stick in, to insert", pos:"verb", gender:null,
     note:"Native Korean. To push something pointed\ninto a surface.",
     example:"A: 꽃을 꽃병에 꽂아 줘.\nB: 예쁘게 꽂아 놓을게.",
     exampleSrc:"A: Put the flowers in the vase.\nB: I will arrange them nicely.",
     funFact:"눈을 꽂다 means to fix one's eyes on something. 꽂히다 (passive) means to be stuck or fixated on."},

    {type:"teach", trg:"꽉", src:"tightly, firmly", pos:"adv", gender:null,
     note:"Mimetic/ideophone. The sensation of\nsomething being squeezed tight.",
     example:"A: 손을 꽉 잡아.\nB: 이렇게?",
     exampleSrc:"A: Hold my hand tightly.\nB: Like this?",
     funFact:"꽉 is stronger than 꼭. Intensity scale: 살짝 (lightly) < 꼭 (firmly) < 꽉 (tightly) < 꽈악 (very tightly)."},

    {type:"match", pairs:[
      {trg:"깨달음", src:"enlightenment"},
      {trg:"꼭대기", src:"summit"},
      {trg:"꼼꼼하다", src:"meticulous"},
      {trg:"꺾다", src:"to break off"},
      {trg:"꽉", src:"tightly"}
    ]},

    {type:"fb",
     s:"너무 무거워서 {1}도 못 했어요.",
     a:["꼼짝"],
     opts:["꼼짝","꼭","꽉","깜빡"],
     hint:"A mimetic word for the tiniest movement. Used with 'cannot' to mean completely stuck.",
     sSrc:"It was so heavy I could not {1} at all."}
  ]
};
export default LESSON_4;
