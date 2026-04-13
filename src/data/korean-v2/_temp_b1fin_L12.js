// Korean B1 Final Gap - Lesson 12: Change & Transformation
const LESSON_12 = {
  id:"kov2_b1fin_l12", title:"변화와 흐름", icon:"🔄", xp:15, board:true,
  steps:[
    {type:"intro", title:"Change & Transformation",
     desc:"Master verbs of change, connection, and transformation. These action words describe how things flow, merge, shake, and evolve over time.",
     goals:["Learn 20 verbs of change, flow, and transformation","Describe gradual processes and physical changes","Express connecting, releasing, and spreading"]},

    {type:"teach", trg:"점점", src:"gradually, more and more", pos:"adv", gender:null,
     note:"Native Korean adverb. Steady, incremental change over time.",
     example:"A: 날씨가 점점 추워지네요.\nB: 네, 겨울이 다가오고 있어요.",
     exampleSrc:"A: The weather is getting colder and colder.\nB: Yes, winter is approaching.",
     funFact:"점점 is one of the most commonly tested adverbs on TOPIK. It pairs with change verbs: 점점 커지다 (gradually grow), 점점 좋아지다 (gradually improve)."},

    {type:"teach", trg:"점차", src:"gradually, step by step", pos:"adv", gender:null,
     note:"Sino-Korean (漸次). More formal than 점점. Used in writing and news.",
     example:"A: 상황이 점차 나아지고 있어요.\nB: 다행이에요.",
     exampleSrc:"A: The situation is gradually improving.\nB: That's a relief.",
     funFact:"점차 and 점점 both mean gradually, but 점차 is literary/formal while 점점 is conversational. News broadcasts prefer 점차."},

    {type:"teach", trg:"조금씩", src:"little by little, bit by bit", pos:"adv", gender:null,
     note:"조금 (a little) + 씩 (each/at a time). Small increments.",
     example:"A: 한국어가 조금씩 좋아지고 있어요.\nB: 꾸준히 하면 분명 늘어요.",
     exampleSrc:"A: My Korean is improving little by little.\nB: If you keep at it, it'll definitely improve.",
     funFact:"조금씩 is the encouraging version of 'gradually.' Teachers love saying 조금씩 하면 돼요 (just do a little at a time and you'll be fine)."},

    {type:"teach", trg:"줄이다", src:"to reduce, to decrease (something)", pos:"verb", gender:null,
     note:"Causative of 줄다. Making something smaller or less.",
     example:"A: 비용을 줄여야 해요.\nB: 어디서 줄일 수 있을까요?",
     exampleSrc:"A: We need to reduce costs.\nB: Where can we cut back?",
     funFact:"줄이다 (transitive: reduce something) vs 줄다 (intransitive: something decreases). This causative pair is a B1 grammar essential."},

    {type:"teach", trg:"커지다", src:"to get bigger, to grow larger", pos:"verb", gender:null,
     note:"크다 (big) + 지다 (become). Something becomes bigger.",
     example:"A: 강아지가 많이 커졌네요!\nB: 네, 점점 커지고 있어요.",
     exampleSrc:"A: The puppy has grown so much!\nB: Yes, it's getting bigger and bigger.",
     funFact:"The pattern 형용사 + 지다 creates change verbs: 커지다 (get bigger), 작아지다 (get smaller), 예뻐지다 (become prettier). Extremely productive."},

    {type:"mc",
     q:"'비용을 적게 만들다'를 한 단어로 하면?",
     opts:["줄이다","커지다","점점","조금씩"],
     ans:"줄이다",
     hint:"This causative verb means to make something decrease or become less."},

    {type:"teach", trg:"합치다", src:"to combine, to merge", pos:"verb", gender:null,
     note:"합 (合, combine) + 치다. Bringing things together into one.",
     example:"A: 두 회사가 합쳐요?\nB: 네, 내년에 합칠 거예요.",
     exampleSrc:"A: Are the two companies merging?\nB: Yes, they will merge next year.",
     funFact:"합치다 is used for merging companies, combining teams, pooling money, and joining forces. 힘을 합치다 means 'to combine strength/efforts.'"},

    {type:"teach", trg:"연결되다", src:"to be connected, to be linked", pos:"verb", gender:null,
     note:"Sino-Korean (連結). Passive: things become connected.",
     example:"A: 인터넷이 연결돼요?\nB: 네, 와이파이가 자동으로 연결돼요.",
     exampleSrc:"A: Is the internet connected?\nB: Yes, WiFi connects automatically.",
     funFact:"연결되다 is the go-to word for internet and phone connections. 전화가 연결되다 (call connects) and 네트워크가 연결되다 (network connects)."},

    {type:"teach", trg:"연결하다", src:"to connect, to link", pos:"verb", gender:null,
     note:"Active form. Deliberately connecting things together.",
     example:"A: 블루투스를 연결해 주세요.\nB: 네, 지금 연결할게요.",
     exampleSrc:"A: Please connect the Bluetooth.\nB: Okay, I'll connect it now.",
     funFact:"연결하다 is everywhere in tech-savvy Korea: USB 연결, 블루투스 연결, 충전기 연결. Connecting devices is part of daily life."},

    {type:"teach", trg:"흐르다", src:"to flow, to stream", pos:"verb", gender:null,
     note:"Native Korean verb. Water, time, music all 'flow.'",
     example:"A: 강물이 조용히 흐르고 있어요.\nB: 평화로운 풍경이네요.",
     exampleSrc:"A: The river is flowing quietly.\nB: It's a peaceful scenery.",
     funFact:"흐르다 extends beautifully: 시간이 흐르다 (time flows), 음악이 흐르다 (music flows), 눈물이 흐르다 (tears flow). Korean poetry loves this word."},

    {type:"teach", trg:"흘리다", src:"to spill, to shed (tears/sweat)", pos:"verb", gender:null,
     note:"Causative of 흐르다. Causing liquid to flow out.",
     example:"A: 커피를 흘렸어요!\nB: 괜찮아요, 닦을게요.",
     exampleSrc:"A: I spilled the coffee!\nB: It's okay, I'll wipe it up.",
     funFact:"흘리다 is used for both accidents (물을 흘리다, spill water) and emotions (눈물을 흘리다, shed tears, 땀을 흘리다, shed sweat)."},

    {type:"fb",
     s:"시간이 빠르게 {1}.",
     a:["흘러요"],
     opts:["흘러요","흘려요","합쳐요","연결해요"],
     hint:"Time does this naturally, like water in a river. It moves forward continuously.",
     sSrc:"Time {1} quickly."},

    {type:"teach", trg:"흘러나오다", src:"to flow out, to leak out", pos:"verb", gender:null,
     note:"Compound: 흘러 (flowing) + 나오다 (come out). Something seeps out.",
     example:"A: 어디서 음악이 흘러나와요.\nB: 옆집에서 흘러나오는 것 같아요.",
     exampleSrc:"A: Music is flowing out from somewhere.\nB: I think it's coming from next door.",
     funFact:"흘러나오다 creates a beautiful image: sounds, smells, or light gently emerging. 빛이 흘러나오다 (light flows out) is a common literary image."},

    {type:"teach", trg:"채우다", src:"to fill, to fill up", pos:"verb", gender:null,
     note:"Native Korean verb. Making something full. Opposite of 비우다 (empty).",
     example:"A: 물을 채워 주세요.\nB: 네, 컵에 물을 채울게요.",
     exampleSrc:"A: Please fill it with water.\nB: Okay, I'll fill the cup with water.",
     funFact:"채우다 extends to abstract filling: 시간을 채우다 (fill time), 마음을 채우다 (fill the heart), 부족한 부분을 채우다 (fill gaps)."},

    {type:"teach", trg:"풀다", src:"to untie, to solve, to release", pos:"verb", gender:null,
     note:"Native Korean verb. Multiple meanings: untie, solve, release tension.",
     example:"A: 문제를 풀었어요?\nB: 아직 못 풀었어요. 어려워요.",
     exampleSrc:"A: Did you solve the problem?\nB: I haven't solved it yet. It's difficult.",
     funFact:"풀다 covers: 신발 끈을 풀다 (untie shoelaces), 문제를 풀다 (solve a problem), 스트레스를 풀다 (release stress), 오해를 풀다 (clear a misunderstanding)."},

    {type:"teach", trg:"풀리다", src:"to be untied, to be solved, to loosen", pos:"verb", gender:null,
     note:"Passive of 풀다. Things get resolved or loosened on their own.",
     example:"A: 오해가 풀렸어요?\nB: 네, 다행히 오해가 풀렸어요.",
     exampleSrc:"A: Has the misunderstanding been resolved?\nB: Yes, fortunately the misunderstanding was cleared up.",
     funFact:"풀리다 is the natural resolution: 긴장이 풀리다 (tension eases), 날씨가 풀리다 (weather warms up), 문제가 풀리다 (problem gets solved)."},

    {type:"match", pairs:[
      {trg:"풀다", src:"to solve/untie"},
      {trg:"채우다", src:"to fill up"},
      {trg:"합치다", src:"to combine"},
      {trg:"흐르다", src:"to flow"},
      {trg:"연결하다", src:"to connect"}
    ]},

    {type:"teach", trg:"펴다", src:"to spread out, to unfold, to straighten", pos:"verb", gender:null,
     note:"Native Korean verb. Opening something that was folded or bent.",
     example:"A: 지도를 펴 봐요.\nB: 여기 펼쳤어요. 어디로 갈까요?",
     exampleSrc:"A: Spread out the map.\nB: I've unfolded it here. Where shall we go?",
     funFact:"펴다 works for physical and abstract unfolding: 책을 펴다 (open a book), 꿈을 펴다 (unfold a dream), 날개를 펴다 (spread wings)."},

    {type:"teach", trg:"펼쳐지다", src:"to unfold, to spread out, to be displayed", pos:"verb", gender:null,
     note:"Passive of 펼치다. A scene or vista opens up before you.",
     example:"A: 창문 밖에 멋진 풍경이 펼쳐져요.\nB: 와, 정말 아름다워요!",
     exampleSrc:"A: A wonderful scenery unfolds outside the window.\nB: Wow, it's truly beautiful!",
     funFact:"펼쳐지다 is a favorite literary word: 눈앞에 펼쳐지다 (unfold before one's eyes). It creates a cinematic feeling of revelation."},

    {type:"teach", trg:"틀다", src:"to turn on, to twist, to play (music)", pos:"verb", gender:null,
     note:"Native Korean verb. Turning a knob, faucet, or playing music/radio.",
     example:"A: 라디오 좀 틀어 줄래요?\nB: 네, 어떤 채널 틀까요?",
     exampleSrc:"A: Could you turn on the radio?\nB: Sure, which channel should I turn to?",
     funFact:"틀다 is used for anything with a knob or switch: 수도를 틀다 (turn on faucet), 에어컨을 틀다 (turn on AC), 음악을 틀다 (play music)."},

    {type:"teach", trg:"흔들다", src:"to shake, to sway, to wave", pos:"verb", gender:null,
     note:"Native Korean verb. Moving something back and forth.",
     example:"A: 손을 흔들어 주세요!\nB: 네, 이렇게요?",
     exampleSrc:"A: Please wave your hand!\nB: Okay, like this?",
     funFact:"흔들다 works literally and figuratively: 나무가 흔들리다 (tree sways), 마음이 흔들리다 (heart wavers/is tempted). Shaking implies instability."},

    {type:"teach", trg:"젓다", src:"to stir, to shake (head)", pos:"verb", gender:null,
     note:"Native Korean verb. Stirring a liquid or shaking one's head.",
     example:"A: 커피를 잘 저어요.\nB: 네, 설탕이 녹을 때까지 젓고 있어요.",
     exampleSrc:"A: Stir the coffee well.\nB: Okay, I'm stirring until the sugar dissolves.",
     funFact:"고개를 젓다 (shake one's head) means 'no' in Korean body language, same as Western cultures. But 고개를 끄덕이다 (nod) means yes."},

    {type:"teach", trg:"터뜨리다", src:"to burst, to pop, to explode", pos:"verb", gender:null,
     note:"Causative: making something burst. From 터지다 (to burst).",
     example:"A: 풍선을 터뜨려도 돼요?\nB: 네, 터뜨려 봐요!",
     exampleSrc:"A: Can I pop the balloon?\nB: Yes, go ahead and pop it!",
     funFact:"터뜨리다 is also used for emotions: 웃음을 터뜨리다 (burst into laughter), 울음을 터뜨리다 (burst into tears). Emotions 'explode' outward."},

    {type:"mc",
     q:"음악을 듣고 싶을 때 라디오를 어떻게 해요?",
     opts:["젓다","흔들다","틀다","펴다"],
     ans:"틀다",
     hint:"This verb means to turn on a device by twisting a knob or pressing a switch."}
  ]
};
export default LESSON_12;
