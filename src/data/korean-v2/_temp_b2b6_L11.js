// Korean B2 — Batch 6, Lesson 11: Looking Ahead
// Words: 앉히다, 알루미늄, 알아내다, 알아보다, 알아주다, 알코올, 암, 암시, 암컷, 압력, 앞길, 앞날, 앞두다, 앞뒤, 앞문, 앞바다, 앞서, 앞세우다, 앞장서다, 앞쪽

const LESSON_11 = {
  id:"kov2_b2b6_l11", title:"앞길과 발견", icon:"🔍", xp:15, board:true,
  steps:[
    {type:"intro", title:"앞길과 발견",
     desc:"Learn vocabulary about discovery, pressure, and looking forward. This lesson features compound verbs with 알다 (to know) and directional words with 앞 (front).",
     goals:["Master 20 words about discovery, pressure, and direction","Understand compound verbs built from 알다 (to know)","Use 앞 compounds for spatial and temporal concepts"]},

    {type:"teach", trg:"앉히다", src:"to seat (someone), to make sit", pos:"verb", gender:null,
     note:"앉다 (to sit) + -히다 (causative).\nCausing someone to take a seat.",
     example:"A: 손님을 소파에 앉히세요.\nB: 네, 이쪽으로 안내할게요.",
     exampleSrc:"A: Please seat the guest on the sofa.\nB: Yes, I will guide them this way.",
     funFact:"Korean causatives add suffixes: 앉다 > 앉히다, 먹다 > 먹이다, 읽다 > 읽히다. Each verb has its own form."},

    {type:"teach", trg:"알루미늄", src:"aluminum", pos:"noun", gender:null,
     note:"Loanword from English 'aluminum.'\nA lightweight metal used in cans and foil.",
     example:"A: 이 캔은 알루미늄이야?\nB: 응, 재활용 가능해.",
     exampleSrc:"A: Is this can aluminum?\nB: Yes, it is recyclable.",
     funFact:"Korea has strict recycling rules. 알루미늄 cans go in the 캔류 (can category) bin, separate from plastic."},

    {type:"teach", trg:"알아내다", src:"to find out, to discover", pos:"verb", gender:null,
     note:"알다 (know) + 아 + 내다 (bring out).\nSucceeding in uncovering information.",
     example:"A: 드디어 진실을 알아냈어.\nB: 어떻게 알아냈어?",
     exampleSrc:"A: I finally found out the truth.\nB: How did you find out?",
     funFact:"Korean detective dramas love 알아내다. The hero always says 반드시 알아내겠다 (I will definitely find out)."},

    {type:"teach", trg:"알아보다", src:"to look into, to recognize", pos:"verb", gender:null,
     note:"알다 (know) + 아 + 보다 (try seeing).\nInvestigating or recognizing someone/something.",
     example:"A: 좋은 식당 좀 알아봐 줘.\nB: 알겠어, 검색해 볼게.",
     exampleSrc:"A: Please look into some good restaurants for me.\nB: Got it, I will search.",
     funFact:"알아보다 has two uses: 'to research' (알아봐 줘) and 'to recognize' (못 알아보겠다 = I cannot recognize)."},

    {type:"teach", trg:"알아주다", src:"to acknowledge, to appreciate", pos:"verb", gender:null,
     note:"알다 (know) + 아 + 주다 (give).\nRecognizing and appreciating someone's worth.",
     example:"A: 아무도 내 노력을 알아주지 않아.\nB: 내가 알아줄게.",
     exampleSrc:"A: Nobody acknowledges my effort.\nB: I will acknowledge it.",
     funFact:"알아주다 expresses deep recognition. When Koreans say 알아주는 사람, they mean someone who truly gets you."},

    {type:"mc",
     q:"'좋은 병원을 알아보고 있어'의 의미는?",
     opts:["좋은 병원을 찾고 있다","좋은 병원을 알고 있다","좋은 병원에 다니고 있다","좋은 병원을 기억하고 있다"],
     ans:"좋은 병원을 찾고 있다",
     hint:"알아보다 in this context means to research or look into something, not to recognize."},

    {type:"teach", trg:"알코올", src:"alcohol", pos:"noun", gender:null,
     note:"Loanword from English 'alcohol.'\nEthanol or alcoholic content.",
     example:"A: 이 음료에 알코올이 들어 있나요?\nB: 아니요, 무알코올이에요.",
     exampleSrc:"A: Does this drink contain alcohol?\nB: No, it is non-alcoholic.",
     funFact:"Korea ranks among the top alcohol-consuming nations. 소주 has about 17% 알코올, lower than most spirits."},

    {type:"teach", trg:"암", src:"cancer", pos:"noun", gender:null,
     note:"Sino-Korean. 癌 (cancer).\nMalignant disease. Also means 'rock' in other contexts.",
     example:"A: 조기에 암을 발견하면 치료율이 높아요.\nB: 그래서 정기 검진이 중요하군요.",
     exampleSrc:"A: If cancer is detected early, the cure rate is high.\nB: So that is why regular checkups are important.",
     funFact:"Korea's national health insurance covers cancer screening. 위암 (stomach cancer) screening starts at age 40."},

    {type:"teach", trg:"암시", src:"hint, implication, suggestion", pos:"noun", gender:null,
     note:"Sino-Korean. 暗 (dark/hidden) + 示 (show).\nShowing something indirectly, hinting.",
     example:"A: 그의 말에는 암시가 담겨 있었어.\nB: 무슨 뜻인지 알겠어?",
     exampleSrc:"A: His words contained an implication.\nB: Do you understand what he meant?",
     funFact:"자기 암시 (self-suggestion/autosuggestion) is a Korean self-help concept about positive mental programming."},

    {type:"teach", trg:"암컷", src:"female animal", pos:"noun", gender:null,
     note:"암 (female) + 컷 (creature suffix).\nRefers to female animals, never humans.",
     example:"A: 이 고양이는 암컷이에요?\nB: 네, 암컷이에요.",
     exampleSrc:"A: Is this cat female?\nB: Yes, it is female.",
     funFact:"The pair 수컷 (male animal) and 암컷 (female animal) uses native Korean prefixes 수/암 for gender."},

    {type:"teach", trg:"압력", src:"pressure", pos:"noun", gender:null,
     note:"Sino-Korean. 壓 (press) + 力 (force).\nPhysical force or social/political pressure.",
     example:"A: 사회적 압력이 너무 심해.\nB: 스트레스 받지 마.",
     exampleSrc:"A: The social pressure is too intense.\nB: Do not stress about it.",
     funFact:"압력밥솥 (pressure rice cooker) uses the same 압력. Korean rice cookers are a beloved kitchen technology."},

    {type:"fb",
     s:"상사의 {1}에 못 이겨서 결국 동의했다.",
     a:["압력"],
     opts:["압력","암시","안정","안내"],
     hint:"When someone in power pushes or forces you into agreeing. A kind of social force.",
     sSrc:"Unable to withstand the boss's {1}, I eventually agreed."},

    {type:"teach", trg:"앞길", src:"future path, road ahead", pos:"noun", gender:null,
     note:"앞 (front) + 길 (road).\nOne's future course or prospects.",
     example:"A: 앞길이 창창한 젊은이네.\nB: 노력도 많이 하고.",
     exampleSrc:"A: That young person has a bright future ahead.\nB: They also work very hard.",
     funFact:"앞길이 창창하다 (the road ahead is bright) is the standard Korean way to praise someone's promising future."},

    {type:"teach", trg:"앞날", src:"future, days ahead", pos:"noun", gender:null,
     note:"앞 (front) + 날 (day).\nThe days that lie ahead.",
     example:"A: 앞날이 걱정돼.\nB: 너무 걱정하지 마, 잘 될 거야.",
     exampleSrc:"A: I am worried about the future.\nB: Do not worry too much, it will work out.",
     funFact:"앞날 is more personal and emotional than 미래 (future). It is about your own life, not the abstract future."},

    {type:"teach", trg:"앞두다", src:"to have ahead, to be approaching", pos:"verb", gender:null,
     note:"앞 (front) + 두다 (to place).\nHaving an event or deadline coming up.",
     example:"A: 시험을 앞두고 긴장돼.\nB: 잘 준비했잖아, 걱정 마.",
     exampleSrc:"A: I am nervous with the exam approaching.\nB: You prepared well, do not worry.",
     funFact:"눈앞에 두다 (to have right before your eyes) intensifies the urgency of an approaching event."},

    {type:"teach", trg:"앞뒤", src:"front and back; context", pos:"noun", gender:null,
     note:"앞 (front) + 뒤 (back).\nBoth sides, or the surrounding context of a situation.",
     example:"A: 앞뒤가 안 맞는 이야기야.\nB: 그러니까, 뭔가 이상해.",
     exampleSrc:"A: The story does not add up.\nB: Right, something is off.",
     funFact:"앞뒤가 맞다/안 맞다 (context adds up/does not) is a common phrase for logical consistency in Korean."},

    {type:"teach", trg:"앞서", src:"ahead, before, previously", pos:"adv", gender:null,
     note:"앞 (front) + 서 (at/from).\nBeing ahead in time, position, or rank.",
     example:"A: 앞서 말씀드린 것처럼 변경 사항이 있습니다.\nB: 네, 확인했습니다.",
     exampleSrc:"A: As I mentioned previously, there are changes.\nB: Yes, I confirmed them.",
     funFact:"앞서가다 (to go ahead, to be ahead of the times) describes innovators and trendsetters in Korean."},

    {type:"teach", trg:"앞장서다", src:"to take the lead, to be at the forefront", pos:"verb", gender:null,
     note:"앞장 (front position) + 서다 (to stand).\nStepping forward to lead others.",
     example:"A: 누가 이 프로젝트에서 앞장설 거야?\nB: 내가 할게.",
     exampleSrc:"A: Who will take the lead on this project?\nB: I will do it.",
     funFact:"Korean leaders are expected to 앞장서다. The phrase implies not just leading but demonstrating through action."},

    {type:"teach", trg:"앞쪽", src:"the front part, forward direction", pos:"noun", gender:null,
     note:"앞 (front) + 쪽 (side/direction).\nThe area or direction in front.",
     example:"A: 앞쪽에 앉을까?\nB: 응, 잘 보이잖아.",
     exampleSrc:"A: Should we sit in the front?\nB: Yes, we can see better.",
     funFact:"Korean classroom culture has 앞쪽 (front) for eager students and 뒷쪽 (back) for those who want to hide."},

    {type:"mc",
     q:"'앞뒤가 안 맞는다'는 무슨 뜻인가요?",
     opts:["이야기가 논리적이지 않다","앞과 뒤가 바뀌었다","길을 잃었다","순서가 틀렸다"],
     ans:"이야기가 논리적이지 않다",
     hint:"When the front and back of a story do not match, it means the logic is inconsistent."},

    {type:"match", pairs:[
      {trg:"알아내다", src:"to find out"},
      {trg:"알아보다", src:"to look into"},
      {trg:"알아주다", src:"to acknowledge"},
      {trg:"앞장서다", src:"to take the lead"}
    ]}
  ]
};

export default LESSON_11;
