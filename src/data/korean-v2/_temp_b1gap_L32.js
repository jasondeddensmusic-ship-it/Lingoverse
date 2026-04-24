// Korean B1 Gap - Lesson 32: Seeing, Hiding and Revealing
const LESSON_32 = {
  id:"kov2_b1gap_l32", title:"보기, 숨기기와 드러내기", icon:"👁", xp:15, board:true,
  steps:[
    {type:"intro", title:"Seeing, Hiding and Revealing",
     desc:"Learn verbs for looking, hiding, and disappearing, along with nouns for physical and visual concepts. These words paint vivid pictures in Korean storytelling.",
     goals:["Learn 20 words for seeing, concealing, and revealing","Master compound verbs with -보다 (to look)","Distinguish verbs of disappearance: 없어지다, 사라지다"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"가리다", src:"to cover, to hide, to block", pos:"verb", gender:null,
     note:"Native Korean. Covers something from view.\n얼굴을 가리다 = to cover one's face.",
     example:"A: 왜 얼굴을 가려요?\nB: 부끄러워서요. 카메라가 싫어요.\nA: 괜찮아요, 사진 안 찍을게요.",
     exampleSrc:"A: Why are you covering your face?\nB: I'm embarrassed. I don't like cameras.\nA: It's okay, I won't take a photo.",
     funFact:"가리다 also means 'to be picky': 음식을 가리다 (to be picky about food). The two meanings are unrelated but share the same word. Context makes the meaning clear."},

    {type:"teach", trg:"감다", src:"to close (eyes), to wind, to wash (hair)", pos:"verb", gender:null,
     note:"Native Korean. 눈을 감다 = to close one's eyes.\nAlso: 머리를 감다 = to wash one's hair.",
     example:"A: 눈을 감아 보세요.\nB: 감았어요. 무슨 소리가 들려요.\nA: 이제 눈을 떠 보세요!",
     exampleSrc:"A: Try closing your eyes.\nB: I closed them. I can hear something.\nA: Now try opening your eyes!",
     funFact:"감다 has three distinct meanings depending on context: close eyes (눈을 감다), wash hair (머리를 감다), and wind/wrap (실을 감다). All three are common everyday verbs."},

    {type:"teach", trg:"숨다", src:"to hide (oneself)", pos:"verb", gender:null,
     note:"Native Korean. Intransitive: the subject hides.\n숨바꼭질 = hide and seek (숨다 + 바꾸다 + 질).",
     example:"A: 아이가 어디 숨었어요?\nB: 옷장 뒤에 숨었어요.\nA: 찾았다! 여기 있었네!",
     exampleSrc:"A: Where did the child hide?\nB: They hid behind the closet.\nA: Found you! You were here!",
     funFact:"숨다 is intransitive (you hide yourself), while 숨기다 is transitive (you hide something). 숨바꼭질 (hide and seek) is the quintessential Korean childhood game."},

    {type:"teach", trg:"바라보다", src:"to gaze at, to look at intently", pos:"verb", gender:null,
     note:"Compound verb. 바라 (toward) + 보다 (to look).\nImplies deep, intentional looking.",
     example:"A: 뭘 바라보고 있어요?\nB: 저 노을을 바라보고 있어요.\nA: 정말 아름답네요.",
     exampleSrc:"A: What are you gazing at?\nB: I'm gazing at that sunset.\nA: It's really beautiful.",
     funFact:"바라보다 is a romantic and literary verb. Song lyrics and poetry use it constantly. It implies emotional depth: you don't just see something, you are absorbed in looking at it."},

    {type:"teach", trg:"둘러보다", src:"to look around, to browse", pos:"verb", gender:null,
     note:"Compound verb. 둘러 (around) + 보다 (to look).\n가게를 둘러보다 = to browse a store.",
     example:"A: 이 가게 좀 둘러봐도 돼요?\nB: 물론이요, 천천히 둘러보세요.\nA: 감사합니다.",
     exampleSrc:"A: May I look around this store?\nB: Of course, take your time looking around.\nA: Thank you.",
     funFact:"둘러보다 is the polite way to say you want to browse without buying. Shop clerks hear 둘러볼게요 (I'll just look around) constantly. It avoids the pressure of being approached by staff."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'얼굴을 가리다'는 무슨 뜻이에요?",
     opts:["얼굴을 숨기다","얼굴을 보다","얼굴을 만지다","얼굴을 씻다"],
     ans:"얼굴을 숨기다",
     hint:"This verb means to block something from view. When applied to a face, you are preventing others from seeing it."},

    {type:"fb",
     s:"가게를 {1} 돼요?",
     a:["둘러봐도"],
     opts:["둘러봐도","바라봐도","살펴봐도","숨어봐도"],
     hint:"This compound verb means 'to look around' a place. It combines 'around' with 'to see' and is used when browsing shops.",
     sSrc:"May I {1} the store?"},

    // --- Teach 6-10 ---
    {type:"teach", trg:"살펴보다", src:"to examine, to look into carefully", pos:"verb", gender:null,
     note:"Compound verb. 살피다 (to observe) + 보다 (to look).\nMore thorough than just 보다.",
     example:"A: 이 서류를 잘 살펴보세요.\nB: 네, 꼼꼼히 확인할게요.\nA: 실수가 있으면 알려 주세요.",
     exampleSrc:"A: Please examine this document carefully.\nB: Okay, I'll check it thoroughly.\nA: Let me know if there are any mistakes.",
     funFact:"살펴보다 implies careful, meticulous observation. It is used in professional contexts: doctors 살펴보다 patients, editors 살펴보다 manuscripts, and inspectors 살펴보다 buildings."},

    {type:"teach", trg:"끼다", src:"to insert, to put on (rings, gloves)", pos:"verb", gender:null,
     note:"Native Korean. 반지를 끼다 = to put on a ring.\n장갑을 끼다 = to put on gloves.",
     example:"A: 반지를 어느 손가락에 끼어요?\nB: 왼손 네 번째에 끼어요.\nA: 예쁜 반지네요.",
     exampleSrc:"A: Which finger do you put the ring on?\nB: I wear it on the fourth finger of my left hand.\nA: It's a pretty ring.",
     funFact:"끼다 is specifically for items that go onto fingers or hands: rings, gloves, glasses. For clothes you use 입다 (wear clothes), 신다 (wear shoes), 쓰다 (wear hats). Korean has different verbs for wearing different items."},

    {type:"teach", trg:"붙다", src:"to stick, to be attached, to pass (exam)", pos:"verb", gender:null,
     note:"Native Korean. Intransitive: something sticks on its own.\n시험에 붙다 = to pass an exam.",
     example:"A: 시험에 붙었어요!\nB: 축하해요! 열심히 했으니까요.\nA: 다음 시험도 잘 하고 싶어요.",
     exampleSrc:"A: I passed the exam!\nB: Congratulations! Because you studied hard.\nA: I want to do well on the next exam too.",
     funFact:"붙다 literally means 'to stick' but colloquially means 'to pass a test.' The logic: your name 'sticks' to the passing list. The opposite 떨어지다 (to fall) means 'to fail' because your name falls off."},

    {type:"teach", trg:"빠지다", src:"to fall into, to be immersed, to be missing", pos:"verb", gender:null,
     note:"Native Korean. Multiple meanings depending on context.\n물에 빠지다 = fall into water. 빠져 있다 = absorbed in.",
     example:"A: 요즘 한국 드라마에 빠져 있어요.\nB: 무슨 드라마 봐요?\nA: 로맨스 드라마요. 너무 재미있어요.",
     exampleSrc:"A: These days I'm hooked on Korean dramas.\nB: What drama are you watching?\nA: A romance drama. It's so interesting.",
     funFact:"빠지다 is extremely versatile: 사랑에 빠지다 (fall in love), 함정에 빠지다 (fall into a trap), 이가 빠지다 (a tooth falls out), 게임에 빠지다 (be addicted to games). The core meaning is always 'falling into.'"},

    {type:"teach", trg:"없애다", src:"to eliminate, to get rid of", pos:"verb", gender:null,
     note:"Derived from 없다 (to not exist) + causative -애다.\nMake something not exist.",
     example:"A: 이 얼룩을 없애고 싶어요.\nB: 세제를 쓰면 없앨 수 있어요.\nA: 한번 해 볼게요.",
     exampleSrc:"A: I want to get rid of this stain.\nB: You can remove it with detergent.\nA: I'll give it a try.",
     funFact:"없애다 is the causative of 없다. This is a productive Korean pattern: 없다 (not exist) becomes 없애다 (make not exist), 높다 (high) becomes 높이다 (make high). Understanding causatives unlocks many verbs."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"살펴보다", src:"to examine"},
      {trg:"끼다", src:"to insert/put on"},
      {trg:"붙다", src:"to stick/pass"},
      {trg:"빠지다", src:"to fall into"}
    ]},

    {type:"mc",
     q:"시험에 합격했을 때 어떤 표현을 써요?",
     opts:["시험에 빠졌어요","시험에 붙었어요","시험에 끼었어요","시험에 감았어요"],
     ans:"시험에 붙었어요",
     hint:"This verb literally means 'to stick.' When your name stays on the passing list, you have passed the exam."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"없어지다", src:"to disappear, to be gone", pos:"verb", gender:null,
     note:"Passive of 없애다. Something ceases to exist.\n돈이 없어졌다 = the money is gone.",
     example:"A: 지갑이 없어졌어요!\nB: 어디에서 잃어버렸어요?\nA: 모르겠어요. 아까까지 있었는데.",
     exampleSrc:"A: My wallet is gone!\nB: Where did you lose it?\nA: I don't know. It was here just a moment ago.",
     funFact:"없어지다 implies something concrete vanishing. Compare: 사라지다 (to vanish) is more poetic and can describe abstract things. 없어지다 is practical: your keys, your money, or your appetite 없어지다."},

    {type:"teach", trg:"사라지다", src:"to vanish, to disappear", pos:"verb", gender:null,
     note:"Native Korean. More literary and dramatic than 없어지다.\n안개가 사라지다 = the fog vanishes.",
     example:"A: 별이 하나둘 사라지고 있어요.\nB: 곧 아침이 올 거예요.\nA: 이 순간이 사라지지 않았으면 좋겠어요.",
     exampleSrc:"A: The stars are disappearing one by one.\nB: Morning will come soon.\nA: I wish this moment wouldn't vanish.",
     funFact:"사라지다 is the preferred verb in poetry, song lyrics, and dramatic narration. 꿈처럼 사라지다 (vanish like a dream) is a classic Korean poetic expression."},

    {type:"teach", trg:"앞서다", src:"to lead, to be ahead of", pos:"verb", gender:null,
     note:"Compound verb. 앞 (front) + 서다 (to stand).\nTo stand in front, therefore to lead.",
     example:"A: 이 분야에서 한국이 앞서 있어요.\nB: 기술 발전이 빠르니까요.\nA: 맞아요. 많이 투자했거든요.",
     exampleSrc:"A: Korea is ahead in this field.\nB: Because technological advancement is fast.\nA: Right. They invested a lot.",
     funFact:"앞서다 works both literally (to walk ahead of someone) and figuratively (to lead in competition or development). 시대를 앞서다 means 'to be ahead of one's time.'"},

    {type:"teach", trg:"속하다", src:"to belong to, to be part of", pos:"verb", gender:null,
     note:"Sino-Korean. 속 (belong, 屬) + 하다.\nDescribes membership or classification.",
     example:"A: 이 동물은 어떤 종에 속해요?\nB: 포유류에 속해요.\nA: 멸종 위기 종에도 속하나요?",
     exampleSrc:"A: What species does this animal belong to?\nB: It belongs to mammals.\nA: Does it also belong to endangered species?",
     funFact:"From hanja 屬. 속하다 is formal and used in classification: 이 단어는 명사에 속한다 (this word belongs to nouns). In everyday speech, Koreans might prefer ~에 들어가다 (to go into a group)."},

    {type:"teach", trg:"눈앞", src:"before one's eyes, right in front", pos:"noun", gender:null,
     note:"Compound noun. 눈 (eye) + 앞 (front).\nLiterally: 'eye-front.' Very immediate proximity.",
     example:"A: 눈앞이 캄캄해요.\nB: 무슨 일이에요?\nA: 갑자기 안 보여요.",
     exampleSrc:"A: Everything before my eyes is dark.\nB: What happened?\nA: I suddenly can't see.",
     funFact:"눈앞이 캄캄하다 (it's dark before one's eyes) is a common idiom for feeling hopeless or overwhelmed. 눈앞에 펼쳐지다 (to unfold before one's eyes) describes a scene appearing dramatically."},

    // --- Quiz batch 3 ---
    {type:"fb",
     s:"별이 하나둘 {1} 있어요.",
     a:["사라지고"],
     opts:["사라지고","없어지고","가리고","숨고"],
     hint:"This poetic verb describes something fading away beautifully. It is preferred in literary and dramatic contexts over the more practical alternative.",
     sSrc:"The stars are {1} one by one."},

    {type:"mc",
     q:"'눈앞이 캄캄하다'는 무슨 뜻이에요?",
     opts:["밤이 되다","잠이 오다","앞이 안 보이다, 막막하다","눈을 감다"],
     ans:"앞이 안 보이다, 막막하다",
     hint:"This idiom uses 'dark' and 'before one's eyes' to describe a feeling of hopelessness when you cannot see any way forward."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"불빛", src:"firelight, light (from a source)", pos:"noun", gender:null,
     note:"Compound noun. 불 (fire) + 빛 (light).\nAny light from a source: lamp, candle, streetlight.",
     example:"A: 저 멀리 불빛이 보여요.\nB: 마을이 가까운 것 같아요.\nA: 드디어 도착할 수 있겠어요.",
     exampleSrc:"A: I can see a light in the distance.\nB: It seems like the village is close.\nA: We can finally arrive.",
     funFact:"불빛 is warm and atmospheric. 촛불빛 (candlelight), 가로등 불빛 (streetlight), 도시의 불빛 (city lights). It conveys a sense of hope or arrival, especially in stories about travelers."},

    {type:"teach", trg:"배경", src:"background, setting", pos:"noun", gender:null,
     note:"Sino-Korean. 배 (back, 背) + 경 (scene, 景).\nBackground in photos, stories, or situations.",
     example:"A: 이 영화의 배경이 어디에요?\nB: 1920년대 서울이에요.\nA: 역사적 배경이 흥미롭네요.",
     exampleSrc:"A: Where is the setting of this movie?\nB: It's 1920s Seoul.\nA: The historical background is interesting.",
     funFact:"From hanja 背景, 'back scenery.' Used for both physical backgrounds (사진 배경, photo background) and abstract contexts (문화적 배경, cultural background). 배경음악 is background music (BGM)."},

    {type:"teach", trg:"새벽", src:"dawn, early morning", pos:"noun", gender:null,
     note:"Native Korean. The hours between midnight and sunrise, roughly 1 AM to 5 AM.\nDistinct from 아침 (morning).",
     example:"A: 새벽에 왜 깨어 있어요?\nB: 잠이 안 와서요.\nA: 따뜻한 우유를 마셔 보세요.",
     exampleSrc:"A: Why are you awake at dawn?\nB: Because I can't fall asleep.\nA: Try drinking some warm milk.",
     funFact:"새벽 culture is real in Korea. 새벽 배송 (dawn delivery) guarantees orders by 7 AM. 새벽 기도 (dawn prayer) is a Korean church tradition. 새벽 시장 (dawn market) opens at 3 or 4 AM."},

    {type:"teach", trg:"살", src:"flesh, skin, body fat", pos:"noun", gender:null,
     note:"Native Korean. 살이 찌다 = to gain weight.\n살이 빠지다 = to lose weight.",
     example:"A: 요즘 살이 많아졌어요.\nB: 운동을 좀 해야 할 것 같아요.\nA: 내일부터 시작할게요.",
     exampleSrc:"A: I've gained a lot of weight lately.\nB: I think I need to exercise.\nA: I'll start tomorrow.",
     funFact:"살 is one of the most common body-related nouns. 살이 찌다/빠지다 (gain/lose weight) is extremely frequent in conversation. 닭살 (chicken skin, i.e. goosebumps) is used when something gives you the creeps."},

    {type:"teach", trg:"뼈", src:"bone", pos:"noun", gender:null,
     note:"Native Korean. 뼈가 부러지다 = a bone breaks.\n뼈를 깎는 = bone-cutting, i.e. agonizing.",
     example:"A: 팔 뼈가 부러졌대요?\nB: 네, 3주 동안 깁스를 해야 해요.\nA: 빨리 나으세요.",
     exampleSrc:"A: You broke the bone in your arm?\nB: Yes, I need a cast for 3 weeks.\nA: Get well soon.",
     funFact:"뼈 is used in powerful idioms: 뼈를 깎는 노력 (bone-cutting effort, i.e. grueling work), 뼈를 묻다 (to bury one's bones, i.e. to settle permanently), 뼈저리게 느끼다 (to feel it in your bones)."},

    // --- Quiz batch 4 ---
    {type:"match", pairs:[
      {trg:"불빛", src:"light"},
      {trg:"배경", src:"background"},
      {trg:"새벽", src:"dawn"},
      {trg:"뼈", src:"bone"}
    ]},

    {type:"fb",
     s:"요즘 {1}이 많이 쪘어요.",
     a:["살"],
     opts:["살","뼈","숨","배경"],
     hint:"This native Korean noun refers to flesh or body fat. Combined with 찌다, it describes gaining weight.",
     sSrc:"I've gained a lot of {1} lately."},

    // --- Tip card ---
    {type:"tip", title:"Compound Verbs with -보다",
     text:"Korean creates nuanced verbs by combining direction/manner words with 보다 (to see/look):\n\n바라보다 = to gaze at (toward + look)\n둘러보다 = to look around (around + look)\n살펴보다 = to examine (observe + look)\n돌아보다 = to look back (turn + look)\n내려다보다 = to look down at (down + look)\n\nEach compound adds a specific direction or quality to the basic act of seeing.",
     deepDive:{title:"The Productivity of 보다 Compounds",
      text:"보다 is one of Korean's most productive compound bases. Beyond directional compounds, the auxiliary -아/어 보다 means 'to try doing something': 먹어 보다 (try eating), 가 보다 (try going). This auxiliary use is different from the compound verbs above and is one of the most essential grammar patterns in intermediate Korean."}},

    // --- Final quiz ---
    {type:"mc",
     q:"'이 영화의 배경이 어디에요?'에서 '배경'은?",
     opts:["감독","주인공","결말","장소와 시대"],
     ans:"장소와 시대",
     hint:"This Sino-Korean noun combines 'back' and 'scenery.' In the context of a movie, it refers to the place and time period where the story takes place."},

    {type:"fb",
     s:"저 멀리 {1}이 보여요.",
     a:["불빛"],
     opts:["불빛","새벽","배경","눈앞"],
     hint:"This compound noun combines 'fire' and 'light.' It describes any visible glow from a source, like a lamp or distant village.",
     sSrc:"I can see a {1} in the distance."}
  ]
};

export default LESSON_32;
