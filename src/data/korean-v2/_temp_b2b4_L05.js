// Korean B2 — Batch 4, Lesson 5: Stillness and Struggle
// Words: 고속버스, 고요하다, 고작, 고전, 고집, 고집하다, 고추장, 고춧가루, 고통스럽다, 고함, 곡, 곡식, 곤란하다, 곧다, 곧바로, 곧이어, 곧잘, 곧장, 골, 말없이

const LESSON_5 = {
  id:"kov2_b2b4_l5", title:"고요와 고집", icon:"🏔️", xp:15, board:true,
  steps:[
    {type:"intro", title:"고요와 고집",
     desc:"Learn words about quietness, stubbornness, food spices, and directional adverbs. This lesson blends personality traits with Korean culinary terms.",
     goals:["Master 20 words about stillness, struggle, and food vocabulary","Understand the 곧- adverb cluster (straight, immediately)","Learn Korean food culture terms: 고추장 and 고춧가루"]},

    {type:"teach", trg:"고속버스", src:"express bus", pos:"noun", gender:null,
     note:"고속 (high speed) + 버스 (bus).\nA long-distance express bus.",
     example:"A: 부산까지 고속버스로 갈까요?\nB: KTX보다 저렴하니까 좋겠어요.",
     exampleSrc:"A: Shall we take an express bus to Busan?\nB: It is cheaper than KTX, so that would be good.",
     funFact:"Korea's 고속버스 terminals are massive transport hubs. The Seoul Express Bus Terminal serves millions annually."},

    {type:"teach", trg:"고요하다", src:"to be quiet, to be serene", pos:"adj", gender:null,
     note:"Native Korean adjective.\nA deep, peaceful quietness.",
     example:"A: 새벽의 호수가 정말 고요하다.\nB: 이런 평화로운 순간이 좋아.",
     exampleSrc:"A: The lake at dawn is truly serene.\nB: I love peaceful moments like this.",
     funFact:"고요한 아침의 나라 (Land of the Morning Calm) is a poetic name for Korea, using this very word."},

    {type:"teach", trg:"고작", src:"at most, merely, only", pos:"adv", gender:null,
     note:"Native Korean adverb.\nExpresses disappointment at a small amount.",
     example:"A: 세일인데 고작 10% 할인이야?\nB: 그래도 없는 것보다 나아.",
     exampleSrc:"A: It is a sale and only 10% off?\nB: Still, better than nothing.",
     funFact:"고작 carries a dismissive tone. Compare with 겨우 (barely), which emphasizes difficulty rather than disappointment."},

    {type:"teach", trg:"고전", src:"classic (literature/art); a hard fight", pos:"noun", gender:null,
     note:"Two Hanja sources.\n古典 (old + standard) = classic. 苦戰 (bitter + battle) = hard fight.",
     example:"A: 이번 시합에서 우리 팀이 고전했어.\nB: 그래도 이겼으니 다행이야.",
     exampleSrc:"A: Our team had a tough fight in this match.\nB: At least we won, so that is fortunate.",
     funFact:"Same sound, different meanings: 고전 문학 (classic literature) vs. 고전을 면치 못하다 (could not avoid a hard fight)."},

    {type:"teach", trg:"고집", src:"stubbornness, obstinacy", pos:"noun", gender:null,
     note:"Sino-Korean. 固 (firm) + 執 (hold).\nHolding firmly to one's position.",
     example:"A: 그 사람은 고집이 정말 세.\nB: 한번 정하면 절대 안 바꿔.",
     exampleSrc:"A: That person is really stubborn.\nB: Once they decide, they never change.",
     funFact:"From Hanja 固執. 고집이 세다 (stubbornness is strong) is the standard expression, while 고집쟁이 means 'stubborn person.'"},

    {type:"mc",
     q:"'고요하다'와 관련 있는 한국의 별명은?",
     opts:["고요한 아침의 나라","빠른 변화의 나라","강한 바람의 나라","깊은 바다의 나라"],
     ans:"고요한 아침의 나라",
     hint:"Korea has a poetic name meaning 'Land of the Morning Calm' that uses this adjective."},

    {type:"teach", trg:"고집하다", src:"to insist on, to be stubborn about", pos:"verb", gender:null,
     note:"고집 (stubbornness) + 하다 (to do).\nTo firmly maintain one's position.",
     example:"A: 자기 의견만 고집하면 안 돼요.\nB: 알겠어요, 다른 의견도 들어 볼게요.",
     exampleSrc:"A: You should not insist only on your own opinion.\nB: I understand, I will listen to other opinions too.",
     funFact:"고집하다 can be negative (stubborn) or positive (persistent). 소신을 고집하다 means to stick to one's principles."},

    {type:"teach", trg:"고추장", src:"red pepper paste", pos:"noun", gender:null,
     note:"고추 (chili pepper) + 장 (醬, sauce/paste).\nKorea's signature fermented condiment.",
     example:"A: 비빔밥에 고추장을 넣어야 맛있어.\nB: 나는 많이 넣는 게 좋아.",
     exampleSrc:"A: Bibimbap is delicious with red pepper paste.\nB: I like to add a lot.",
     funFact:"고추장 is fermented for months in traditional 장독 (earthenware pots). It blends sweet, spicy, and umami flavors."},

    {type:"teach", trg:"고춧가루", src:"red pepper flakes, chili powder", pos:"noun", gender:null,
     note:"고추 (chili) + ㅅ (possessive) + 가루 (powder).\nDried and ground chili pepper.",
     example:"A: 김치 담글 때 고춧가루가 많이 필요해.\nB: 시장에서 좋은 거 사 올게.",
     exampleSrc:"A: We need a lot of chili powder when making kimchi.\nB: I will buy good quality from the market.",
     funFact:"Korean 고춧가루 is coarser and milder than most chili powders, giving kimchi its distinctive color and flavor."},

    {type:"teach", trg:"고통스럽다", src:"to be painful, to be agonizing", pos:"adj", gender:null,
     note:"고통 (pain) + 스럽다 (seeming).\nDescribes something that causes suffering.",
     example:"A: 이별은 정말 고통스러운 경험이야.\nB: 시간이 지나면 나아질 거야.",
     exampleSrc:"A: Breaking up is really a painful experience.\nB: It will get better with time.",
     funFact:"고통 comes from Hanja 苦痛 (bitter + pain). Both characters mean 'suffering,' doubling the intensity."},

    {type:"teach", trg:"고함", src:"a shout, a yell", pos:"noun", gender:null,
     note:"Native Korean word.\nA loud cry or scream.",
     example:"A: 밖에서 고함 소리가 들려요.\nB: 뭔 일이지? 한번 봐야겠다.",
     exampleSrc:"A: I can hear shouting from outside.\nB: What is going on? I should take a look.",
     funFact:"고함을 지르다 (to let out a shout) is the standard verb pairing. 함성 is a related word for cheers."},

    {type:"fb",
     s:"비빔밥에 {1}을 넣으면 더 맛있어요.",
     a:["고추장"],
     opts:["고추장","고춧가루","고집","고전"],
     hint:"This is the famous fermented red pepper paste that is essential for Korean bibimbap.",
     sSrc:"Bibimbap is more delicious when you add {1}."},

    {type:"teach", trg:"곡", src:"a song, a piece of music", pos:"noun", gender:null,
     note:"Sino-Korean. 曲 (tune).\nA single musical composition.",
     example:"A: 이 곡이 정말 좋다!\nB: 이 가수의 신곡이야.",
     exampleSrc:"A: This song is really good!\nB: It is this singer's new release.",
     funFact:"From Hanja 曲. 작곡 (composition), 명곡 (masterpiece), 신곡 (new song) all use this character."},

    {type:"teach", trg:"곡식", src:"grain, cereal crops", pos:"noun", gender:null,
     note:"Sino-Korean. 穀 (grain) + 食 (food).\nEdible grains like rice, wheat, barley.",
     example:"A: 한국의 주요 곡식은 뭐예요?\nB: 쌀이 가장 중요한 곡식이에요.",
     exampleSrc:"A: What are the main grains in Korea?\nB: Rice is the most important grain.",
     funFact:"From Hanja 穀食. Korea's traditional 오곡밥 (five-grain rice) uses rice, millet, sorghum, beans, and red beans."},

    {type:"teach", trg:"곤란하다", src:"to be in a difficult situation, to be embarrassing", pos:"adj", gender:null,
     note:"Sino-Korean. 困 (troubled) + 難 (difficult) + 하다.\nFeeling awkward or stuck.",
     example:"A: 갑자기 부탁을 해서 곤란해요.\nB: 천천히 생각하고 답해도 돼요.",
     exampleSrc:"A: I am in a difficult position because of the sudden request.\nB: You can think it over and answer slowly.",
     funFact:"From Hanja 困難. Koreans often use this to politely decline: 좀 곤란합니다 (that is a bit difficult)."},

    {type:"teach", trg:"곧다", src:"to be straight, to be upright", pos:"adj", gender:null,
     note:"Native Korean adjective.\nPhysically straight or morally upright.",
     example:"A: 허리를 곧게 펴고 앉아라.\nB: 알겠어요, 자세를 고칠게요.",
     exampleSrc:"A: Sit up with your back straight.\nB: OK, I will fix my posture.",
     funFact:"곧다 describes both physical straightness and moral integrity: 곧은 사람 (an upright/honest person)."},

    {type:"teach", trg:"곧바로", src:"right away, immediately, straight", pos:"adv", gender:null,
     note:"곧 (straight) + 바로 (right).\nWithout delay or detour.",
     example:"A: 도착하면 곧바로 연락해.\nB: 알겠어, 전화할게.",
     exampleSrc:"A: Contact me right away when you arrive.\nB: Got it, I will call.",
     funFact:"곧바로 combines two similar adverbs for emphasis. 곧 and 바로 both mean 'immediately' on their own."},

    {type:"mc",
     q:"'곤란하다'는 어떤 상황을 표현하나요?",
     opts:["난처하고 어려운 상황","즐겁고 행복한 상황","조용하고 평화로운 상황","빠르고 긴급한 상황"],
     ans:"난처하고 어려운 상황",
     hint:"The Hanja 困 means troubled and 難 means difficult. Both point to an awkward predicament."},

    {type:"teach", trg:"곧이어", src:"soon after, shortly afterward", pos:"adv", gender:null,
     note:"곧 (soon) + 이어 (following).\nSomething happens right after the first event.",
     example:"A: 천둥이 치더니 곧이어 비가 쏟아졌어.\nB: 우산 없어서 다 젖었겠다.",
     exampleSrc:"A: After the thunder, rain poured down shortly afterward.\nB: You must have gotten soaked without an umbrella.",
     funFact:"Part of the 곧- adverb family: 곧바로 (immediately), 곧이어 (soon after), 곧잘 (fairly often), 곧장 (straight)."},

    {type:"teach", trg:"곧잘", src:"fairly often, quite well", pos:"adv", gender:null,
     note:"곧 (straight) + 잘 (well).\nDoing something reasonably often or well.",
     example:"A: 그 아이는 곧잘 거짓말을 해.\nB: 아직 어려서 그런 거야.",
     exampleSrc:"A: That child lies fairly often.\nB: It is because they are still young.",
     funFact:"곧잘 can be positive (곧잘 한다, does it quite well) or mildly critical (곧잘 빠진다, often absent)."},

    {type:"teach", trg:"곧장", src:"straight ahead, directly", pos:"adv", gender:null,
     note:"곧 (straight) + 장 (emphatic).\nGoing directly without stopping.",
     example:"A: 학교 끝나면 곧장 집에 와.\nB: 네, 알겠어요.",
     exampleSrc:"A: Come straight home after school.\nB: Yes, I understand.",
     funFact:"Parents' favorite adverb: 곧장 와! (Come straight back!) is heard in Korean homes daily."},

    {type:"teach", trg:"골", src:"goal (in sports)", pos:"noun", gender:null,
     note:"Loanword from English 'goal.'\nScoring in soccer or similar sports.",
     example:"A: 결승골을 넣었어!\nB: 대박! 우리 팀이 이겼어!",
     exampleSrc:"A: They scored the winning goal!\nB: Amazing! Our team won!",
     funFact:"Korean sports use many English loanwords: 골 (goal), 골키퍼 (goalkeeper), 슛 (shoot), 패스 (pass)."},

    {type:"teach", trg:"말없이", src:"without a word, silently", pos:"adv", gender:null,
     note:"말 (words) + 없이 (without).\nDoing something without speaking.",
     example:"A: 그는 말없이 방을 나갔어.\nB: 무슨 일이 있었나 봐.",
     exampleSrc:"A: He left the room without a word.\nB: Something must have happened.",
     funFact:"The -없이 suffix creates adverbs of absence: 소리 없이 (soundlessly), 힘없이 (powerlessly), 뜻없이 (meaninglessly)."},

    {type:"fb",
     s:"천둥이 친 후 {1} 비가 내리기 시작했다.",
     a:["곧이어"],
     opts:["곧이어","곧장","곧바로","곧잘"],
     hint:"This adverb means 'soon after' or 'shortly afterward,' describing one event following another quickly.",
     sSrc:"After the thunder, rain began to fall {1}."},

    {type:"match", pairs:[
      {trg:"고추장", src:"red pepper paste"},
      {trg:"곡식", src:"grain"},
      {trg:"곤란하다", src:"to be in a difficult spot"},
      {trg:"말없이", src:"without a word"}
    ]}
  ]
};
export default LESSON_5;
