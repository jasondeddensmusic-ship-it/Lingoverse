// Korean B2. Batch 2, Lesson 11: Diversity and Determination
// Words: 다소, 다양성, 다양해지다, 다이어트, 다정하다, 다지다, 다짐하다, 다치다, 다투다, 다툼, 다행, 다행히, 닥치다, 단계, 단골, 단단하다, 단독, 단맛, 단순, 단위

const LESSON_11 = {
  id:"kov2_b2b2_l11", title:"다짐과 단계", icon:"🎯", xp:15, board:true,
  steps:[
    {type:"intro", title:"다짐과 단계",
     desc:"Learn vocabulary about determination, diversity, and structured phases. These words are essential for discussing personal goals and social change.",
     goals:["Master 20 words about resolve and organization","Understand abstract nouns for social concepts","Learn words describing stages and qualities"]},

    {type:"teach", trg:"다소", src:"somewhat, a little, to some extent", pos:"adv", gender:null,
     note:"Sino-Korean. 多 (many) + 少 (few).\nLiterally 'more or less.' Used to hedge statements.",
     example:"A: 이 방법은 다소 위험해요.\nB: 다른 방법을 찾아봐요.",
     exampleSrc:"A: This method is somewhat dangerous.\nB: Let us look for another way.",
     funFact:"다소 is formal and written. In casual speech, Koreans use 좀 or 약간 instead."},

    {type:"teach", trg:"다양성", src:"diversity, variety", pos:"noun", gender:null,
     note:"다양 (diverse) + 성 (nature/quality).\nThe quality of being varied and different.",
     example:"A: 문화의 다양성을 존중해야 해요.\nB: 동의해요, 차이를 인정하는 게 중요하죠.",
     exampleSrc:"A: We must respect cultural diversity.\nB: I agree, recognizing differences is important.",
     funFact:"다양성 has gained prominence in Korean public discourse. 생물 다양성 (biodiversity) is a key environmental term."},

    {type:"teach", trg:"다양해지다", src:"to become diverse, to diversify", pos:"verb", gender:null,
     note:"다양하다 (diverse) + 해지다 (become).\nThe process of becoming more varied.",
     example:"A: 한국 사회가 다양해지고 있어요.\nB: 다문화 가정이 많이 늘었죠.",
     exampleSrc:"A: Korean society is becoming more diverse.\nB: Multicultural families have increased a lot.",
     funFact:"다양해지다 is common in sociological discussions. Korea's growing multiculturalism drives this word's frequency."},

    {type:"teach", trg:"다이어트", src:"diet (weight loss)", pos:"noun", gender:null,
     note:"Borrowed from English 'diet.'\nIn Korean, specifically means weight loss efforts.",
     example:"A: 다이어트를 시작했어요.\nB: 무슨 방법으로 하고 있어요?",
     exampleSrc:"A: I started a diet.\nB: What method are you using?",
     funFact:"In Korean, 다이어트 always means 'weight loss diet,' never just 'what you eat.' The English meaning is narrowed."},

    {type:"teach", trg:"다정하다", src:"to be affectionate, warm-hearted", pos:"adj", gender:null,
     note:"Sino-Korean. 多 (many) + 情 (feeling) + 하다.\nFull of warm feelings toward others.",
     example:"A: 그 사람은 정말 다정해요.\nB: 맞아요, 누구에게나 따뜻하게 대해요.",
     exampleSrc:"A: That person is really affectionate.\nB: Right, they treat everyone warmly.",
     funFact:"다정다감 (多情多感) is a four-character idiom meaning 'full of feeling and sensitivity.' A positive personality trait."},

    {type:"teach", trg:"다지다", src:"to strengthen, to firm up; to mince", pos:"verb", gender:null,
     note:"Native Korean. Two meanings:\n1. To make firm/solid. 2. To chop finely.",
     example:"A: 마음을 단단히 다졌어요.\nB: 좋은 결과가 있을 거예요.",
     exampleSrc:"A: I firmly strengthened my resolve.\nB: There will be good results.",
     funFact:"마늘을 다지다 (mince garlic) in cooking, 결의를 다지다 (strengthen resolve) in speeches. Same verb, different worlds."},

    {type:"mc",
     q:"'다양성'과 가장 관련 있는 것은?",
     opts:["서로 다른 문화를 존중하는 것","모든 것을 같게 만드는 것","한 가지만 집중하는 것","오래된 전통을 지키는 것"],
     ans:"서로 다른 문화를 존중하는 것",
     hint:"The quality of having many different types. Think about respecting differences between cultures."},

    {type:"teach", trg:"다짐하다", src:"to resolve, to make a firm promise", pos:"verb", gender:null,
     note:"다짐 (resolve) + 하다.\nTo make a strong commitment to oneself or others.",
     example:"A: 새해에 무엇을 다짐했어요?\nB: 매일 운동하겠다고 다짐했어요.",
     exampleSrc:"A: What did you resolve for the new year?\nB: I resolved to exercise every day.",
     funFact:"새해 다짐 (New Year's resolution) is common but rarely kept, just like in English-speaking cultures."},

    {type:"teach", trg:"다치다", src:"to get hurt, to be injured", pos:"verb", gender:null,
     note:"Native Korean. To sustain a physical injury.\nThe most common word for getting hurt.",
     example:"A: 어디 다쳤어요?\nB: 넘어져서 무릎을 다쳤어요.",
     exampleSrc:"A: Where did you get hurt?\nB: I fell and injured my knee.",
     funFact:"다치다 is the go-to word for injuries. 부상을 입다 (sustain an injury) is the formal/news version."},

    {type:"teach", trg:"다투다", src:"to quarrel, to fight, to argue", pos:"verb", gender:null,
     note:"Native Korean. To have a verbal or physical\nconflict with someone.",
     example:"A: 친구와 다투었어요.\nB: 무슨 일이 있었어요?",
     exampleSrc:"A: I had a fight with my friend.\nB: What happened?",
     funFact:"다투다 covers verbal arguments to physical fights. 싸우다 (fight) is stronger and more physical."},

    {type:"teach", trg:"다툼", src:"quarrel, dispute, conflict", pos:"noun", gender:null,
     note:"Nominalized form of 다투다.\nThe act or instance of quarreling.",
     example:"A: 형제끼리 다툼이 잦아요.\nB: 어릴 때는 그럴 수 있어요.",
     exampleSrc:"A: The siblings quarrel frequently.\nB: That can happen when they are young.",
     funFact:"다툼 is formed by adding -ㅁ to the verb stem. This nominalization is productive: 싸움 (fight), 배움 (learning)."},

    {type:"fb",
     s:"새해에 매일 운동하겠다고 {1}.",
     a:["다짐했다"],
     opts:["다짐했다","다쳤다","다투었다","다정했다"],
     hint:"To make a firm personal resolution or commitment to yourself.",
     sSrc:"I {1} to exercise every day for the new year."},

    {type:"teach", trg:"다행", src:"fortunate, lucky (situation)", pos:"noun", gender:null,
     note:"Sino-Korean. 多 (much) + 幸 (fortune).\nA fortunate outcome, relief.",
     example:"A: 사고가 났지만 다행히 다친 사람은 없어요.\nB: 정말 다행이에요.",
     exampleSrc:"A: There was an accident but fortunately no one was hurt.\nB: What a relief.",
     funFact:"다행이다 (it is fortunate) is one of the most used relief expressions in Korean daily life."},

    {type:"teach", trg:"다행히", src:"fortunately, luckily", pos:"adv", gender:null,
     note:"다행 (fortune) + 히 (adverb suffix).\nExpresses relief that something went well.",
     example:"A: 다행히 비행기를 놓치지 않았어요.\nB: 아슬아슬했겠네요.",
     exampleSrc:"A: Fortunately, I did not miss the plane.\nB: That must have been a close call.",
     funFact:"다행히 always starts a sentence or clause. It sets the tone of relief for what follows."},

    {type:"teach", trg:"닥치다", src:"to approach suddenly; to shut up (slang)", pos:"verb", gender:null,
     note:"Native Korean. Two very different uses:\n1. A crisis approaches. 2. Rude command to be quiet.",
     example:"A: 시험이 코앞에 닥쳤어요.\nB: 빨리 준비해야겠어요.",
     exampleSrc:"A: The exam is right upon us.\nB: We need to prepare quickly.",
     funFact:"닥치다 as 'shut up' is very rude. The crisis meaning (위기가 닥치다) is standard and formal."},

    {type:"teach", trg:"단계", src:"stage, phase, step", pos:"noun", gender:null,
     note:"Sino-Korean. 段 (section) + 階 (stairs).\nA level or phase in a process.",
     example:"A: 이 프로젝트는 어떤 단계에 있어요?\nB: 두 번째 단계를 진행 중이에요.",
     exampleSrc:"A: What stage is this project at?\nB: We are in the second phase.",
     funFact:"단계 is everywhere: 경고 단계 (alert level), 발전 단계 (development stage), 초기 단계 (initial phase)."},

    {type:"teach", trg:"단골", src:"regular customer, patron", pos:"noun", gender:null,
     note:"Native Korean. A customer who visits\nthe same place habitually.",
     example:"A: 여기 단골이세요?\nB: 네, 10년째 다니고 있어요.",
     exampleSrc:"A: Are you a regular here?\nB: Yes, I have been coming for 10 years.",
     funFact:"단골 culture is strong in Korea. Regular customers get special treatment: extra side dishes, friendly service."},

    {type:"mc",
     q:"'다행히'는 문장에서 어떤 역할을 하나요?",
     opts:["놀라움을 표현한다","안도의 느낌을 표현한다","슬픔을 표현한다","분노를 표현한다"],
     ans:"안도의 느낌을 표현한다",
     hint:"This adverb expresses relief that a situation turned out well despite worry."},

    {type:"teach", trg:"단단하다", src:"to be hard, firm, solid", pos:"adj", gender:null,
     note:"Native Korean. Physically hard or\nfiguratively strong and resolute.",
     example:"A: 이 사과가 아주 단단해요.\nB: 잘 익은 건데 원래 단단한 종류예요.",
     exampleSrc:"A: This apple is very firm.\nB: It is ripe; it is a firm variety.",
     funFact:"단단히 (firmly) is the adverb form. 마음을 단단히 먹다 (steel one's heart/resolve) is a common expression."},

    {type:"teach", trg:"단독", src:"sole, independent, exclusive", pos:"noun", gender:null,
     note:"Sino-Korean. 單 (single) + 獨 (alone).\nDoing something alone or exclusively.",
     example:"A: 단독 인터뷰를 했어요?\nB: 네, 저만 만날 수 있었어요.",
     exampleSrc:"A: Did you do an exclusive interview?\nB: Yes, only I could meet them.",
     funFact:"단독 주택 (detached house) vs 아파트 (apartment). In Korea, 단독 주택 is becoming rare in cities."},

    {type:"teach", trg:"단맛", src:"sweet taste, sweetness", pos:"noun", gender:null,
     note:"달다 (sweet) + ㄴ + 맛 (taste).\nThe flavor of sweetness.",
     example:"A: 이 과자는 단맛이 강해요.\nB: 설탕이 많이 들었나 봐요.",
     exampleSrc:"A: This snack has a strong sweet taste.\nB: It must have a lot of sugar.",
     funFact:"Korean taste words: 단맛 (sweet), 짠맛 (salty), 신맛 (sour), 쓴맛 (bitter), 매운맛 (spicy). Five basic tastes."},

    {type:"teach", trg:"단순", src:"simple, uncomplicated", pos:"noun", gender:null,
     note:"Sino-Korean. 單 (single) + 純 (pure).\nHaving only one element, not complex.",
     example:"A: 문제가 생각보다 단순해요.\nB: 그럼 빨리 해결할 수 있겠네요.",
     exampleSrc:"A: The problem is simpler than I thought.\nB: Then we can solve it quickly.",
     funFact:"단순하다 vs 간단하다 (easy/brief). 단순 implies lacking complexity, 간단 implies being concise or quick."},

    {type:"teach", trg:"단위", src:"unit (of measurement)", pos:"noun", gender:null,
     note:"Sino-Korean. 單 (single) + 位 (position).\nA standard quantity used for measuring.",
     example:"A: 이 물질의 단위는 뭐예요?\nB: 그램 단위로 측정해요.",
     exampleSrc:"A: What is the unit for this substance?\nB: We measure it in grams.",
     funFact:"단위 is used in science, economics, and daily life: 화폐 단위 (currency unit), 시간 단위 (time unit)."},

    {type:"match", pairs:[
      {trg:"다양성", src:"diversity"},
      {trg:"단계", src:"stage"},
      {trg:"단골", src:"regular customer"},
      {trg:"다행", src:"fortunate"},
      {trg:"단위", src:"unit"}
    ]},

    {type:"fb",
     s:"이 문제는 생각보다 {1}해요.",
     a:["단순"],
     opts:["단순","단단","다양","다정"],
     hint:"Not complex. Having a straightforward, uncomplicated nature.",
     sSrc:"This problem is more {1} than I thought."}
  ]
};
export default LESSON_11;
