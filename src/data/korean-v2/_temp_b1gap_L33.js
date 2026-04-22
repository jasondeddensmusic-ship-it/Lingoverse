// Korean B1 Gap - Lesson 33: Change, Development and Discovery
const LESSON_33 = {
  id:"kov2_b1gap_l33", title:"변화, 발전과 발견", icon:"🌱", xp:15, board:true,
  steps:[
    {type:"intro", title:"Change, Development and Discovery",
     desc:"Master the vocabulary of transformation: words for change, growth, discovery, and creation. These Sino-Korean words share root hanja characters and form productive word families.",
     goals:["Learn 20 words for change, development, and discovery","Recognize the 발 (發) hanja family: 발전, 발달, 발생, 발견","Distinguish active and passive verb pairs"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"바뀌다", src:"to be changed, to be switched", pos:"verb", gender:null,
     note:"Passive of 바꾸다 (to change something).\n계획이 바뀌었다 = the plan was changed.",
     example:"A: 회의 시간이 바뀌었어요.\nB: 몇 시로 바뀌었어요?\nA: 오후 3시로 바뀌었어요.",
     exampleSrc:"A: The meeting time has been changed.\nB: What time was it changed to?\nA: It was changed to 3 PM.",
     funFact:"바뀌다 (passive, something changes) vs. 바꾸다 (active, someone changes something) is a classic Korean active/passive pair. 세상이 바뀌었다 (the world has changed) is a common expression."},

    {type:"teach", trg:"변화", src:"change, transformation", pos:"noun", gender:null,
     note:"Sino-Korean. 변 (change, 變) + 화 (transform, 化).\nMore formal and abstract than 바뀜.",
     example:"A: 최근에 큰 변화가 있었어요?\nB: 네, 직장을 옮겼어요.\nA: 새로운 변화는 항상 좋은 거예요.",
     exampleSrc:"A: Have there been any big changes recently?\nB: Yes, I changed jobs.\nA: New changes are always a good thing.",
     funFact:"From hanja 變化. 변화를 두려워하지 마라 (don't fear change) is a popular motivational phrase. 기후 변화 (climate change) and 사회 변화 (social change) use this noun constantly."},

    {type:"teach", trg:"변화하다", src:"to change, to transform", pos:"verb", gender:null,
     note:"Verb form of 변화. More formal than 바뀌다.\nUsed for significant, often gradual changes.",
     example:"A: 이 도시가 많이 변화했어요.\nB: 맞아요. 10년 전과 완전히 달라요.\nA: 앞으로도 더 변화할 거예요.",
     exampleSrc:"A: This city has changed a lot.\nB: That's right. It's completely different from 10 years ago.\nA: It will change even more going forward.",
     funFact:"변화하다 implies deeper, more fundamental change than 바뀌다. A meeting time 바뀌다 (small change), but society 변화하다 (fundamental transformation). The distinction matters in formal writing."},

    {type:"teach", trg:"발전", src:"development, progress, advancement", pos:"noun", gender:null,
     note:"Sino-Korean. 발 (emit, 發) + 전 (unfold, 展).\nUnfolding outward, therefore progressing.",
     example:"A: 한국의 경제 발전이 놀라워요.\nB: 맞아요. 짧은 시간에 많이 발전했어요.\nA: 다른 나라에도 좋은 본보기예요.",
     exampleSrc:"A: Korea's economic development is amazing.\nB: Right. It developed a lot in a short time.\nA: It's a good example for other countries too.",
     funFact:"From hanja 發展. Korea's rapid 경제 발전 from the 1960s to 1990s is called 한강의 기적 (Miracle on the Han River). 발전소 means 'power plant' (a place that generates power)."},

    {type:"teach", trg:"발달", src:"development, growth", pos:"noun", gender:null,
     note:"Sino-Korean. 발 (emit, 發) + 달 (reach, 達).\nSimilar to 발전 but emphasizes natural growth or maturation.",
     example:"A: 아이의 두뇌 발달에 좋은 음식이 뭐예요?\nB: 생선이 좋다고 해요.\nA: 그래서 많이 먹이는 거군요.",
     exampleSrc:"A: What foods are good for a child's brain development?\nB: They say fish is good.\nA: So that's why they feed them a lot of it.",
     funFact:"발달 vs. 발전: 발달 emphasizes organic, natural growth (brain development, child development), while 발전 emphasizes intentional progress (economic development, technological advancement). Both use the 發 hanja."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'아이의 두뇌 ___에 좋은 음식'에서 자연적 성장을 나타내는 말은?",
     opts:["발달","변화","발생","발전"],
     ans:"발달",
     hint:"This word emphasizes organic, natural growth and maturation. It shares a root character with 발전 but focuses on biological or cognitive growth."},

    {type:"fb",
     s:"회의 시간이 오후 3시로 {1}.",
     a:["바뀌었어요"],
     opts:["바뀌었어요","변화했어요","발전했어요","발달했어요"],
     hint:"This passive verb is used for everyday, practical changes like schedule adjustments. It is the passive of 바꾸다.",
     sSrc:"The meeting time was {1} to 3 PM."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"발달하다", src:"to develop, to grow", pos:"verb", gender:null,
     note:"Verb form of 발달. Natural or organic development.\n기술이 발달하다 = technology develops.",
     example:"A: 한국의 IT 기술이 많이 발달했어요.\nB: 인터넷 속도가 세계에서 가장 빨라요.\nA: 정말 대단하네요.",
     exampleSrc:"A: Korea's IT technology has developed a lot.\nB: Internet speed is the fastest in the world.\nA: That's really impressive.",
     funFact:"While 발달 originally described natural growth, modern Korean uses 발달하다 for technology too: IT가 발달하다, 교통이 발달하다. The sense is that the technology has matured to a high level."},

    {type:"teach", trg:"발생", src:"occurrence, outbreak", pos:"noun", gender:null,
     note:"Sino-Korean. 발 (emit, 發) + 생 (life/birth, 生).\nSomething coming into being. Often negative events.",
     example:"A: 사고가 발생했다고 해요.\nB: 어디에서 발생했어요?\nA: 고속도로에서 발생했대요.",
     exampleSrc:"A: They say an accident occurred.\nB: Where did it occur?\nA: They say it occurred on the highway.",
     funFact:"발생 is the standard news word for incidents: 화재 발생 (fire outbreak), 지진 발생 (earthquake occurrence), 사고 발생 (accident occurrence). It sounds neutral and official, used in reports and announcements."},

    {type:"teach", trg:"발생하다", src:"to occur, to break out", pos:"verb", gender:null,
     note:"Verb form of 발생. Formal, used in news and reports.\n문제가 발생하다 = a problem occurs.",
     example:"A: 시스템에 문제가 발생했어요.\nB: 어떤 문제예요?\nA: 데이터가 사라지는 오류가 발생했어요.",
     exampleSrc:"A: A problem occurred in the system.\nB: What kind of problem?\nA: An error occurred where data disappears.",
     funFact:"발생하다 is interchangeable with 생기다 in many contexts, but 발생하다 is more formal. News broadcasts prefer 사건이 발생했습니다, while friends would say 일이 생겼어 (something came up)."},

    {type:"teach", trg:"발견", src:"discovery", pos:"noun", gender:null,
     note:"Sino-Korean. 발 (emit, 發) + 견 (see, 見).\n'Emit seeing,' i.e. to come to see. Finding something new.",
     example:"A: 새로운 유적이 발견됐어요.\nB: 어디에서 발견됐어요?\nA: 경주에서 발견됐대요.",
     exampleSrc:"A: New ruins were discovered.\nB: Where were they discovered?\nA: They say they were discovered in Gyeongju.",
     funFact:"From hanja 發見, 'emit seeing.' The 발 (發) character appears in 발전, 발달, 발생, and 발견. It always carries the sense of something emerging outward or coming into view."},

    {type:"teach", trg:"발견되다", src:"to be discovered", pos:"verb", gender:null,
     note:"Passive form. 발견 + 되다.\nSomething is found, not by your action but as a passive result.",
     example:"A: 그 범인이 발견됐어요?\nB: 아직 발견되지 않았어요.\nA: 빨리 발견됐으면 좋겠어요.",
     exampleSrc:"A: Was the criminal found?\nB: They haven't been found yet.\nA: I hope they're found soon.",
     funFact:"The -되다 passive is one of the most important grammar patterns in Korean news language. 발견되다 (be discovered), 건설되다 (be built), 개발되다 (be developed). It removes the agent and focuses on the result."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"발생", src:"occurrence"},
      {trg:"발견", src:"discovery"},
      {trg:"발달", src:"growth"},
      {trg:"발전", src:"advancement"}
    ]},

    {type:"mc",
     q:"뉴스에서 사고를 보도할 때 주로 쓰는 표현은?",
     opts:["사고가 변화했습니다","사고가 발생했습니다","사고가 발달했습니다","사고가 발견했습니다"],
     ans:"사고가 발생했습니다",
     hint:"News broadcasts use this formal verb when reporting incidents. It combines the hanja for 'emit' and 'birth,' describing something coming into being."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"발견하다", src:"to discover, to find", pos:"verb", gender:null,
     note:"Active form. Someone actively discovers or finds something.\n새로운 사실을 발견하다 = to discover a new fact.",
     example:"A: 재미있는 카페를 발견했어요.\nB: 어디에 있어요?\nA: 골목 안쪽에 숨어 있어요.",
     exampleSrc:"A: I discovered an interesting cafe.\nB: Where is it?\nA: It's hidden inside an alley.",
     funFact:"발견하다 (active, I discover) vs. 발견되다 (passive, it is discovered). Korean consistently marks this active/passive distinction with 하다/되다 pairs, one of the language's most systematic grammar features."},

    {type:"teach", trg:"생겨나다", src:"to come into being, to arise", pos:"verb", gender:null,
     note:"Compound verb. 생기다 (to form) + 나다 (to come out).\nSomething new appears or is born.",
     example:"A: 새로운 문화가 생겨나고 있어요.\nB: 어떤 문화요?\nA: 온라인 커뮤니티 문화요.",
     exampleSrc:"A: New cultures are coming into being.\nB: What kind of cultures?\nA: Online community cultures.",
     funFact:"생겨나다 emphasizes the process of emergence more than 생기다 alone. The 나다 (come out) adds dynamism. Things 생겨나다 naturally and organically, like new trends, problems, or ideas."},

    {type:"teach", trg:"상하다", src:"to go bad, to spoil, to be hurt", pos:"verb", gender:null,
     note:"Sino-Korean. 상 (injury, 傷) + 하다.\n음식이 상하다 = food goes bad. 기분이 상하다 = feelings are hurt.",
     example:"A: 이 우유 상한 것 같아요.\nB: 냄새를 맡아 보세요.\nA: 맞아요, 상했어요. 버려야 해요.",
     exampleSrc:"A: This milk seems to have gone bad.\nB: Try smelling it.\nA: You're right, it's spoiled. We need to throw it out.",
     funFact:"상하다 bridges the physical and emotional: food 상하다 (spoils) and feelings 상하다 (get hurt). Both involve damage to something's original good state. 마음이 상하다 is a gentle way to say someone's feelings were hurt."},

    {type:"teach", trg:"심다", src:"to plant", pos:"verb", gender:null,
     note:"Native Korean. Literally planting in soil.\n나무를 심다 = to plant a tree. 씨를 심다 = to plant a seed.",
     example:"A: 봄에 꽃을 심을 거예요.\nB: 무슨 꽃을 심을 거예요?\nA: 장미하고 튤립을 심을 거예요.",
     exampleSrc:"A: I'm going to plant flowers in spring.\nB: What flowers will you plant?\nA: I'll plant roses and tulips.",
     funFact:"심다 is also used figuratively: 희망을 심다 (to plant hope), 의심을 심다 (to plant doubt). Arbor Day (식목일, April 5th) is when Koreans traditionally plant trees together."},

    {type:"teach", trg:"기르다", src:"to raise, to grow, to cultivate", pos:"verb", gender:null,
     note:"Native Korean. Raising living things.\n아이를 기르다 = to raise a child. 동물을 기르다 = to keep a pet.",
     example:"A: 강아지를 기르고 싶어요.\nB: 책임감이 필요해요.\nA: 알아요. 잘 기를 자신이 있어요.",
     exampleSrc:"A: I want to raise a puppy.\nB: You need a sense of responsibility.\nA: I know. I'm confident I can raise it well.",
     funFact:"기르다 is for living things: children, animals, plants. For inanimate things or skills, use 키우다 (which also means 'to raise' but extends to abstract growth like 실력을 키우다, to improve one's skills)."},

    // --- Quiz batch 3 ---
    {type:"fb",
     s:"이 우유가 {1} 것 같아요. 냄새가 이상해요.",
     a:["상한"],
     opts:["상한","심은","기른","바뀐"],
     hint:"This verb describes food that has deteriorated from its original good state. It also describes hurt feelings.",
     sSrc:"This milk seems to have {1}. It smells strange."},

    {type:"mc",
     q:"'나무를 심다'에서 '심다'는 무슨 뜻이에요?",
     opts:["자르다","키우다","땅에 넣다","물을 주다"],
     ans:"땅에 넣다",
     hint:"This verb specifically describes the act of putting seeds or seedlings into the ground. It is the initial act, not the ongoing care."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"살리다", src:"to save, to revive, to make the most of", pos:"verb", gender:null,
     note:"Causative of 살다 (to live). Make something live.\n사람을 살리다 = to save a person.",
     example:"A: 의사가 환자를 살렸어요.\nB: 정말 다행이에요.\nA: 빨리 치료해서 살릴 수 있었대요.",
     exampleSrc:"A: The doctor saved the patient.\nB: That's really fortunate.\nA: They say they could save them because they treated quickly.",
     funFact:"살리다 extends beyond medical rescue: 분위기를 살리다 (to liven up the mood), 장점을 살리다 (to make the most of strengths), 전통을 살리다 (to revive traditions). It always means bringing something to life."},

    {type:"teach", trg:"세우다", src:"to establish, to set up, to build", pos:"verb", gender:null,
     note:"Causative of 서다 (to stand). Make something stand.\n계획을 세우다 = to make a plan.",
     example:"A: 여행 계획을 세웠어요?\nB: 네, 일정을 다 세웠어요.\nA: 저도 보여 주세요.",
     exampleSrc:"A: Did you make travel plans?\nB: Yes, I set up the entire schedule.\nA: Show me too.",
     funFact:"세우다 is incredibly versatile: 건물을 세우다 (erect a building), 목표를 세우다 (set a goal), 계획을 세우다 (make a plan), 기록을 세우다 (set a record). The core meaning is always making something 'stand up.'"},

    {type:"teach", trg:"세워지다", src:"to be established, to be built", pos:"verb", gender:null,
     note:"Passive of 세우다. Something is made to stand by someone else.\n건물이 세워지다 = a building is erected.",
     example:"A: 새 학교가 세워졌어요.\nB: 어디에 세워졌어요?\nA: 마을 입구에 세워졌어요.",
     exampleSrc:"A: A new school was established.\nB: Where was it established?\nA: It was established at the entrance of the village.",
     funFact:"세우다/세워지다 is another active/passive pair like 발견하다/발견되다. Korean systematically creates passives with -아/어지다 for native verbs and -되다 for Sino-Korean verbs."},

    {type:"teach", trg:"시도하다", src:"to attempt, to try", pos:"verb", gender:null,
     note:"Sino-Korean. 시 (try, 試) + 도 (degree, 度) + 하다.\nA deliberate, conscious attempt.",
     example:"A: 새로운 요리를 시도해 봤어요.\nB: 어땠어요?\nA: 처음이라 실패했지만 다시 시도할 거예요.",
     exampleSrc:"A: I tried attempting a new dish.\nB: How was it?\nA: I failed since it was my first time, but I'll try again.",
     funFact:"From hanja 試度. 시도 is more formal and deliberate than -아/어 보다 (casual try). Scientists 시도하다 experiments, athletes 시도하다 new techniques. It implies courage and intentionality."},

    {type:"teach", trg:"미치다", src:"to affect, to reach, to extend to", pos:"verb", gender:null,
     note:"Native Korean. 영향을 미치다 = to have an influence.\nDifferent from 미치다 (to go crazy).",
     example:"A: 이 결정이 모든 사람에게 영향을 미쳐요.\nB: 그래서 신중하게 결정해야 해요.\nA: 맞아요. 잘 생각해 봐요.",
     exampleSrc:"A: This decision affects everyone.\nB: That's why we need to decide carefully.\nA: Right. Let's think it over.",
     funFact:"미치다 has two completely different meanings depending on context: 영향을 미치다 (to exert influence) and 미치다 (to go crazy). The first is formal and academic; the second is colloquial and emotional. Context is everything."},

    // --- Quiz batch 4 ---
    {type:"match", pairs:[
      {trg:"살리다", src:"to save/revive"},
      {trg:"세우다", src:"to establish"},
      {trg:"시도하다", src:"to attempt"},
      {trg:"미치다", src:"to affect"}
    ]},

    {type:"fb",
     s:"여행 계획을 {1}?",
     a:["세웠어요"],
     opts:["세웠어요","살렸어요","시도했어요","미쳤어요"],
     hint:"This causative verb means 'to make something stand.' When combined with plans, it means creating or setting up those plans.",
     sSrc:"Did you {1} travel plans?"},

    // --- Tip card ---
    {type:"tip", title:"The 발 (發) Hanja Family",
     text:"Four important nouns share the hanja 發 (emit, send forth):\n\n발전 (發展) = development, progress (emit + unfold)\n발달 (發達) = growth, maturation (emit + reach)\n발생 (發生) = occurrence, outbreak (emit + birth)\n발견 (發見) = discovery (emit + see)\n\nAll describe something coming outward or into view. Recognizing this root helps you guess meanings of new Sino-Korean words.",
     deepDive:{title:"Active vs. Passive Pairs",
      text:"Korean systematically marks whether the subject acts or is acted upon. For Sino-Korean verbs: 발견하다 (discover, active) vs. 발견되다 (be discovered, passive). For native verbs: 바꾸다 (change something) vs. 바뀌다 (be changed), 세우다 (build) vs. 세워지다 (be built). Mastering these pairs is essential for reading news and formal texts."}},

    // --- Final quiz ---
    {type:"mc",
     q:"'이 결정이 모든 사람에게 영향을 ___'에서 빈칸에 알맞은 말은?",
     opts:["심어요","세워요","발전해요","미쳐요"],
     ans:"미쳐요",
     hint:"This verb means 'to reach' or 'to extend to.' Combined with 영향 (influence), it describes the effect something has on others."},

    {type:"fb",
     s:"새로운 요리를 {1} 봤어요.",
     a:["시도해"],
     opts:["시도해","발견해","발생해","변화해"],
     hint:"This Sino-Korean verb means to make a deliberate, conscious attempt. It is more formal than the casual -아/어 보다 pattern.",
     sSrc:"I tried {1} a new dish."}
  ]
};

export default LESSON_33;
