// Korean A2 Gap - Lesson 15: Everyday Actions & State Changes
const LESSON_15 = {
  id:"kov2_a2gap_l15", title:"일상 동작과 변화", icon:"🔄", xp:15, board:true,
  steps:[
    {type:"intro", title:"Everyday Actions & State Changes",
     desc:"Master 18 essential action verbs covering physical actions, state changes, and life events. These verbs appear constantly in daily Korean conversation.",
     goals:["Learn 18 high-frequency action and state-change verbs","Practice verb usage in natural dialogue contexts","Recognize hanja-based and native Korean verb patterns"]},

    {type:"teach", trg:"나오다", src:"to come out", pos:"verb", gender:null,
     note:"Opposite of 들어가다 (to go in).\nVery common compound verb base.",
     example:"A: 영화가 나왔어요?\nB: 네, 어제 나왔어요!",
     exampleSrc:"A: Did the movie come out?\nB: Yes, it came out yesterday!",
     funFact:"나오다 combines 나 (emerge) + 오다 (come). It spawns dozens of compounds: 나가다 (go out), 나서다 (step forward), 나타나다 (appear)."},

    {type:"teach", trg:"내다", src:"to put out, to pay", pos:"verb", gender:null,
     note:"Dual meaning: produce/emit + pay money.\nContext determines which sense.",
     example:"A: 커피 값은 누가 내요?\nB: 오늘은 제가 낼게요!",
     exampleSrc:"A: Who's paying for the coffee?\nB: I'll pay today!",
     funFact:"내다 originally meant 'to bring outward.' The money sense comes from bringing coins out of your purse. It appears in compounds like 참다 + 내다 = endure to the end."},

    {type:"teach", trg:"넣다", src:"to put in, to insert", pos:"verb", gender:null,
     note:"Opposite of 꺼내다 (to take out).\nUsed for physical and abstract insertion.",
     example:"A: 설탕을 넣을까요?\nB: 아니요, 넣지 마세요.",
     exampleSrc:"A: Shall I put in sugar?\nB: No, please don't put it in.",
     funFact:"The consonant cluster in 넣다 (nieot + hieut) makes pronunciation tricky. It sounds like [너타] in casual speech. Learners often confuse it with 놓다 (to place down)."},

    {type:"teach", trg:"바꾸다", src:"to change, to exchange", pos:"verb", gender:null,
     note:"Used for swapping or replacing things.\nDifferent from 변하다 (to transform).",
     example:"A: 색깔을 바꿀까요?\nB: 네, 파란색으로 바꿔 주세요.",
     exampleSrc:"A: Shall we change the color?\nB: Yes, please change it to blue.",
     funFact:"Koreans say 바꿔 드릴게요 (I'll switch it for you) at stores when exchanging products. The polite helper verb 드리다 shows respect to the customer."},

    // Quiz block 1: first 4 words
    {type:"mc",
     q:"영화가 어제 ___.",
     opts:["넣었어요","나왔어요","바꿨어요","냈어요"],
     ans:"나왔어요",
     hint:"Think about a movie being released or appearing for the first time."},

    {type:"fb",
     s:"커피에 설탕을 {1} 마세요.",
     a:["넣지"],
     opts:["넣지","내지","나오지","바꾸지"],
     hint:"Which verb means inserting something into a container?",
     sSrc:"Please don't {1} sugar in the coffee."},

    {type:"teach", trg:"켜다", src:"to turn on", pos:"verb", gender:null,
     note:"For lights, devices, engines.\nOpposite: 끄다 (to turn off).",
     example:"A: 불 좀 켜 주세요.\nB: 네, 지금 켤게요.",
     exampleSrc:"A: Please turn on the light.\nB: Okay, I'll turn it on now.",
     funFact:"켜다 originally meant to light a fire or candle. Even though we now flip switches, the verb persists from the era of oil lamps and hearths."},

    {type:"teach", trg:"끄다", src:"to turn off, to extinguish", pos:"verb", gender:null,
     note:"For lights, devices, fire.\nOpposite: 켜다 (to turn on).",
     example:"A: 텔레비전 좀 꺼 주세요.\nB: 알겠어요, 끌게요.",
     exampleSrc:"A: Please turn off the TV.\nB: Got it, I'll turn it off.",
     funFact:"끄다 literally meant to extinguish flames. Korean firefighters still use the phrase 불을 끄다. The ㄲ sound (tense k) gives it a forceful, decisive feel."},

    {type:"teach", trg:"닦다", src:"to wipe, to brush, to polish", pos:"verb", gender:null,
     note:"Covers cleaning surfaces and brushing teeth.\n이를 닦다 = brush teeth.",
     example:"A: 이 닦았어요?\nB: 네, 방금 닦았어요!",
     exampleSrc:"A: Did you brush your teeth?\nB: Yes, I just brushed them!",
     funFact:"Korean parents ask 이 닦았어? (Did you brush your teeth?) every night. The same verb works for polishing shoes (구두를 닦다) and wiping tables (식탁을 닦다)."},

    {type:"teach", trg:"깎다", src:"to cut, to peel, to discount", pos:"verb", gender:null,
     note:"Three common uses: cut hair, peel fruit, lower price.\nContext determines meaning.",
     example:"A: 사과를 깎아 줄까요?\nB: 네, 깎아 주세요.",
     exampleSrc:"A: Shall I peel the apple for you?\nB: Yes, please peel it.",
     funFact:"At Korean markets, 깎아 주세요! (Give me a discount!) is the magic bargaining phrase. Vendors expect it and often have a 'real' price below the listed one."},

    // Quiz block 2: words 5-8
    {type:"match", pairs:[
      {trg:"켜다", src:"to turn on"},
      {trg:"끄다", src:"to turn off"},
      {trg:"닦다", src:"to wipe/brush"},
      {trg:"깎다", src:"to cut/peel/discount"}
    ]},

    {type:"mc",
     q:"자기 전에 이를 꼭 ___.",
     opts:["닦으세요","깎으세요","켜세요","끄세요"],
     ans:"닦으세요",
     hint:"What do you do to your teeth every night before sleeping?"},

    {type:"teach", trg:"피우다", src:"to smoke, to make bloom", pos:"verb", gender:null,
     note:"담배를 피우다 = smoke a cigarette.\n꽃을 피우다 = make flowers bloom.",
     example:"A: 여기서 담배를 피워도 돼요?\nB: 아니요, 여기는 금연이에요.",
     exampleSrc:"A: Can I smoke here?\nB: No, this is a no-smoking area.",
     funFact:"The dual meaning of 피우다 reflects Korean poetic sensibility: both fire (smoking) and life (blooming) involve something emerging from within. Poets love this double meaning."},

    {type:"teach", trg:"불다", src:"to blow", pos:"verb", gender:null,
     note:"For wind, blowing out candles, blowing a whistle.\n바람이 불다 = the wind blows.",
     example:"A: 바람이 많이 불어요.\nB: 네, 오늘 정말 춥네요.",
     exampleSrc:"A: The wind is blowing hard.\nB: Yes, it's really cold today.",
     funFact:"In the famous children's song, 바람아 불어라 (Blow, wind!) uses this verb. Korean weather reports love 강풍이 불겠습니다 (strong winds will blow)."},

    {type:"teach", trg:"뛰다", src:"to run, to jump", pos:"verb", gender:null,
     note:"Covers both running and jumping.\n심장이 뛰다 = heart beats/pounds.",
     example:"A: 왜 이렇게 뛰어요?\nB: 버스를 놓칠 뻔했어요!",
     exampleSrc:"A: Why are you running like that?\nB: I almost missed the bus!",
     funFact:"뛰다 is one of few Korean verbs covering both 'run' and 'jump.' Context clarifies: 운동장에서 뛰다 (run on the field) vs. 높이 뛰다 (jump high). The heart 'jumping' is a vivid metaphor."},

    {type:"teach", trg:"죽다", src:"to die", pos:"verb", gender:null,
     note:"Direct and common. Used literally and figuratively.\n배고파 죽겠다 = I'm starving (dying of hunger).",
     example:"A: 이 식물이 죽었어요.\nB: 물을 안 줘서 그래요.",
     exampleSrc:"A: This plant died.\nB: It's because you didn't water it.",
     funFact:"Koreans use 죽겠다 (I'm going to die) as casual hyperbole constantly: 더워 죽겠다 (dying of heat), 바빠 죽겠다 (dying of busyness). It sounds dramatic but is perfectly normal."},

    // Quiz block 3: words 9-12
    {type:"fb",
     s:"바람이 많이 {1}.",
     a:["불어요"],
     opts:["불어요","뛰어요","피워요","죽어요"],
     hint:"Which verb describes what the wind does on a stormy day?",
     sSrc:"The wind is {1} hard."},

    {type:"mc",
     q:"배고파서 ___!",
     opts:["뛰겠어요","불겠어요","깎겠어요","죽겠어요"],
     ans:"죽겠어요",
     hint:"Koreans exaggerate hunger with a dramatic life-or-death expression."},

    {type:"teach", trg:"태어나다", src:"to be born", pos:"verb", gender:null,
     note:"Passive form: born = given birth to.\n어디에서 태어났어요? = Where were you born?",
     example:"A: 어디에서 태어났어요?\nB: 서울에서 태어났어요.",
     exampleSrc:"A: Where were you born?\nB: I was born in Seoul.",
     funFact:"태어나다 contains 태 (tai) from the hanja 胎 meaning 'womb/fetus.' The full structure is 태 (womb) + 어나다 (emerge from), literally 'emerge from the womb.'"},

    {type:"teach", trg:"생기다", src:"to form, to arise, to come into being", pos:"verb", gender:null,
     note:"From hanja 生 (life/birth).\nAlso means 'to look like': 잘 생기다 = good-looking.",
     example:"A: 새 카페가 생겼어요!\nB: 어디에 생겼어요?",
     exampleSrc:"A: A new cafe opened up!\nB: Where did it open?",
     funFact:"잘생기다 (handsome) literally means 'well-formed.' Korean beauty language links appearance to creation itself. 못생기다 (ugly) means 'badly formed' but sounds much harsher."},

    {type:"teach", trg:"시작되다", src:"to be started, to begin (passive)", pos:"verb", gender:null,
     note:"Passive of 시작하다. The event begins on its own.\n시작 from hanja 始作 (begin + make).",
     example:"A: 영화가 시작됐어요?\nB: 네, 5분 전에 시작됐어요.",
     exampleSrc:"A: Has the movie started?\nB: Yes, it started 5 minutes ago.",
     funFact:"시작 (始作) uses two hanja both meaning 'begin.' This doubling for emphasis is common in Sino-Korean: 시작, 종말 (end + conclusion). Korean loves reinforcing meaning through pairs."},

    {type:"teach", trg:"끝내다", src:"to finish, to complete", pos:"verb", gender:null,
     note:"Active: someone finishes something.\nPassive form: 끝나다 (to be finished).",
     example:"A: 숙제를 끝냈어요?\nB: 아직 못 끝냈어요.",
     exampleSrc:"A: Did you finish your homework?\nB: I haven't finished it yet.",
     funFact:"끝 (end) is pure Korean, not hanja. 끝내다 (finish actively) vs. 끝나다 (finish passively) is a key pair. 끝내주다 literally means 'finish it off' but slang means 'awesome, killer.'"},

    // Quiz block 4: words 13-16
    {type:"match", pairs:[
      {trg:"태어나다", src:"to be born"},
      {trg:"생기다", src:"to form/arise"},
      {trg:"시작되다", src:"to be started"},
      {trg:"끝내다", src:"to finish"}
    ]},

    {type:"fb",
     s:"저는 서울에서 {1}.",
     a:["태어났어요"],
     opts:["태어났어요","생겼어요","시작됐어요","끝냈어요"],
     hint:"Which verb means 'was born' when talking about your birthplace?",
     sSrc:"I {1} in Seoul."},

    {type:"teach", trg:"안되다", src:"to not work, to not be allowed", pos:"verb", gender:null,
     note:"안 + 되다. Two senses: 'doesn't function' and 'not permitted.'\n안됩니다 = It's not allowed (formal).",
     example:"A: 여기서 사진을 찍어도 돼요?\nB: 안돼요. 촬영 금지예요.",
     exampleSrc:"A: Can I take photos here?\nB: No, you can't. Photography is prohibited.",
     funFact:"Korean children hear 안돼! (No! You can't!) from parents constantly. It became such a cultural meme that there are viral videos of toddlers dramatically shouting 안돼! back at their parents."},

    {type:"teach", trg:"버리다", src:"to throw away, to discard", pos:"verb", gender:null,
     note:"Also used as a grammar helper: V + 아/어 버리다\n= do completely (with finality or regret).",
     example:"A: 이거 버려도 돼요?\nB: 네, 버리세요.",
     exampleSrc:"A: Can I throw this away?\nB: Yes, throw it away.",
     funFact:"As a helper verb, 버리다 adds emotional weight: 먹어 버렸다 (ate it all up, oops), 잊어 버렸다 (completely forgot, regrettably). It implies the action is done and cannot be undone."},

    // Quiz block 5: final words + cumulative
    {type:"mc",
     q:"여기서 사진을 찍으면 ___.",
     opts:["버려요","끝내요","안돼요","생겨요"],
     ans:"안돼요",
     hint:"What do you say when something is not allowed or prohibited?"},

    {type:"fb",
     s:"필요 없으면 {1}.",
     a:["버리세요"],
     opts:["버리세요","안되세요","나오세요","내세요"],
     hint:"Which verb means to discard something you no longer need?",
     sSrc:"If you don't need it, {1} it."},

    {type:"mc",
     q:"불 좀 ___ 주세요. 어두워요.",
     opts:["끄","깎아","닦아","켜"],
     ans:"켜",
     hint:"It's dark, so you need to activate the light source."}
  ]
};
export default LESSON_15;
