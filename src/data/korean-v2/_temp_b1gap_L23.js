// Korean B1 Gap - Lesson 23: Movement and Direction Verbs
const LESSON_23 = {
  id:"kov2_b1gap_l23", title:"이동과 방향", icon:"🏃", xp:15, board:true,
  steps:[
    {type:"intro", title:"Movement and Direction Verbs",
     desc:"Korean has an incredibly rich system of compound movement verbs. By combining base verbs with directional helpers like 가다/오다, you create precise motion descriptions. Master 20 essential movement verbs.",
     goals:["Learn 20 movement and direction verbs","Understand directional compounds with 가다/오다","Distinguish subtle differences in motion verbs"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"건너다", src:"to cross", pos:"verb", gender:null,
     note:"Crossing a road, river, or bridge. 길을 건너다 (to cross the road).",
     example:"A: 횡단보도에서 길을 건너세요.\nB: 신호등이 바뀌면 건너요?\nA: 네, 초록불일 때 건너세요.",
     exampleSrc:"A: Cross the road at the crosswalk.\nB: Do I cross when the light changes?\nA: Yes, cross when it's green.",
     funFact:"건너다 also appears in 건너편 (the other side, across the way). 길 건너편 (across the street) is essential for giving directions. 다리를 건너다 (to cross a bridge) is both literal and metaphorical."},

    {type:"teach", trg:"넘다", src:"to cross over, to exceed", pos:"verb", gender:null,
     note:"Going over a barrier, mountain, or limit. 산을 넘다 (to cross a mountain).",
     example:"A: 이 산을 넘으면 마을이 있어요.\nB: 높아 보여요. 넘을 수 있을까요?\nA: 천천히 가면 괜찮아요.",
     exampleSrc:"A: If you cross this mountain, there's a village.\nB: It looks high. Can we cross it?\nA: If we go slowly, it'll be fine.",
     funFact:"넘다 works for abstract barriers too: 한계를 넘다 (to exceed a limit), 100만을 넘다 (to surpass one million). It always implies going OVER something, whether physical or figurative."},

    {type:"teach", trg:"넘어가다", src:"to go over, to pass to the other side", pos:"verb", gender:null,
     note:"넘다 + 가다. Directional compound: going over and away from the speaker.",
     example:"A: 해가 산 넘어로 넘어갔어요.\nB: 벌써 저녁이네요.\nA: 시간이 빨리 넘어가요.",
     exampleSrc:"A: The sun went over the mountain.\nB: It's already evening.\nA: Time passes quickly.",
     funFact:"넘어가다 is also used for 'letting something slide': 이번은 넘어가 줄게 (I'll let it go this time). The image is of something passing over you without stopping to cause trouble."},

    {type:"teach", trg:"넘어서다", src:"to surpass, to go beyond", pos:"verb", gender:null,
     note:"넘다 + 서다. Surpassing a threshold and standing past it.",
     example:"A: 매출이 목표를 넘어섰어요.\nB: 정말요? 대단하네요!\nA: 팀 모두 열심히 했어요.",
     exampleSrc:"A: Sales surpassed the target.\nB: Really? That's impressive!\nA: The whole team worked hard.",
     funFact:"넘어서다 implies a permanent crossing: once you surpass the threshold, you stand beyond it. 한계를 넘어서다 (to transcend one's limits) suggests growth that cannot be undone."},

    {type:"teach", trg:"다가가다", src:"to approach, to go closer", pos:"verb", gender:null,
     note:"다가 (closer) + 가다 (go). Moving toward something away from the speaker.",
     example:"A: 천천히 다가가세요.\nB: 왜요? 위험해요?\nA: 아니요, 고양이가 놀랄 수 있어요.",
     exampleSrc:"A: Approach slowly.\nB: Why? Is it dangerous?\nA: No, the cat might get startled.",
     funFact:"다가가다 vs. 다가오다: perspective matters. 다가가다 = I approach something over there. 다가오다 = something comes closer to me. Korean always specifies the direction relative to the speaker."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'해가 산 넘어로 넘어갔어요'는 무슨 뜻이에요?",
     opts:["해가 산 뒤로 졌어요","해가 떴어요","산이 높아졌어요","해가 다가왔어요"],
     ans:"해가 산 뒤로 졌어요",
     hint:"The sun moved over the mountain and went to the other side. Think about what happens at sunset."},

    {type:"fb",
     s:"횡단보도에서 길을 {1}.",
     a:["건너세요"],
     opts:["건너세요","넘으세요","다가가세요","달리세요"],
     hint:"A verb meaning to cross, specifically used for roads and streets at a crosswalk.",
     sSrc:"Please {1} the road at the crosswalk."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"다가오다", src:"to come closer, to approach (toward speaker)", pos:"verb", gender:null,
     note:"다가 (closer) + 오다 (come). Something moves toward the speaker.",
     example:"A: 시험이 다가오고 있어요.\nB: 맞아요, 일주일 남았어요.\nA: 열심히 공부해야겠어요.",
     exampleSrc:"A: The exam is approaching.\nB: Right, one week left.\nA: I need to study hard.",
     funFact:"다가오다 is often used for time: 겨울이 다가오다 (winter is approaching), 마감이 다가오다 (the deadline is coming). Time approaches you, it does not go away; hence 오다, not 가다."},

    {type:"teach", trg:"달려가다", src:"to run toward (away from speaker)", pos:"verb", gender:null,
     note:"달리다 (run) + 가다 (go). Running toward a destination.",
     example:"A: 아이가 엄마에게 달려갔어요.\nB: 반가웠나 봐요.\nA: 네, 오랜만에 만났어요.",
     exampleSrc:"A: The child ran toward their mother.\nB: They must have been happy to see her.\nA: Yes, they met after a long time.",
     funFact:"달려가다 describes purposeful running with a clear destination. It appears in sports commentary (골대로 달려가다, to run toward the goal) and emotional reunions."},

    {type:"teach", trg:"달려오다", src:"to run over (toward speaker)", pos:"verb", gender:null,
     note:"달리다 (run) + 오다 (come). Running toward where the speaker is.",
     example:"A: 강아지가 달려왔어요!\nB: 꼬리를 흔들면서요?\nA: 네, 너무 귀여웠어요.",
     exampleSrc:"A: The puppy came running over!\nB: Wagging its tail?\nA: Yes, it was so cute.",
     funFact:"달려가다 and 달려오다 form a directional pair. From the speaker's viewpoint: 달려오다 = running TO me, 달려가다 = running AWAY from me. Korean always anchors motion to the speaker's position."},

    {type:"teach", trg:"달리다", src:"to run", pos:"verb", gender:null,
     note:"Base verb for running. 빨리 달리다 (to run fast). Also: to depend on.",
     example:"A: 매일 아침에 달려요?\nB: 네, 30분씩 달려요.\nA: 건강에 좋겠네요.",
     exampleSrc:"A: Do you run every morning?\nB: Yes, I run for 30 minutes.\nA: That must be good for health.",
     funFact:"달리다 has a second meaning: 'to depend on.' 결과는 노력에 달려 있다 (the result depends on effort). The same verb covers both physical running and abstract dependency."},

    {type:"teach", trg:"달아나다", src:"to flee, to run away", pos:"verb", gender:null,
     note:"달다 (run) + 나다 (exit). Escaping from danger or trouble.",
     example:"A: 도둑이 달아났어요!\nB: 어느 쪽으로요?\nA: 골목 쪽으로 달아났어요.",
     exampleSrc:"A: The thief fled!\nB: Which direction?\nA: He ran away toward the alley.",
     funFact:"달아나다 implies urgency and fear. It is stronger than just 도망가다 (to run away). In Korean detective dramas, 범인이 달아났다 (the suspect has fled) signals high tension."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"다가오다", src:"to come closer"},
      {trg:"달려가다", src:"to run toward"},
      {trg:"달리다", src:"to run"},
      {trg:"달아나다", src:"to flee"}
    ]},

    {type:"fb",
     s:"시험이 {1} 있어요. 공부해야 해요.",
     a:["다가오고"],
     opts:["다가오고","달려가고","달아나고","넘어가고"],
     hint:"A verb meaning something is approaching the speaker. The exam is getting closer in time.",
     sSrc:"The exam is {1}. I need to study."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"날아가다", src:"to fly away", pos:"verb", gender:null,
     note:"날다 (fly) + 가다 (go). Something flies away from the speaker.",
     example:"A: 새가 날아갔어요.\nB: 어디로 날아갔어요?\nA: 남쪽으로 날아간 것 같아요.",
     exampleSrc:"A: The bird flew away.\nB: Where did it fly?\nA: I think it flew south.",
     funFact:"날아가다 is used for time too: 시간이 날아가다 (time flies away). Money metaphor: 돈이 날아갔다 (the money flew away, meaning it was lost). Both suggest something precious disappearing."},

    {type:"teach", trg:"날아오다", src:"to fly toward (the speaker)", pos:"verb", gender:null,
     note:"날다 (fly) + 오다 (come). Something flies toward the speaker.",
     example:"A: 공이 날아왔어요! 조심하세요!\nB: 어디서요?\nA: 저쪽에서 날아왔어요.",
     exampleSrc:"A: A ball is flying this way! Be careful!\nB: From where?\nA: It came flying from over there.",
     funFact:"날아오다 describes arrivals: 편지가 날아오다 (a letter arrives, flies to you). In the digital age, 메시지가 날아왔다 (a message flew in) describes the instant feeling of receiving a notification."},

    {type:"teach", trg:"돌다", src:"to turn, to spin, to go around", pos:"verb", gender:null,
     note:"Rotational movement. 모서리를 돌다 (to go around the corner).",
     example:"A: 저 모서리를 돌면 은행이 있어요.\nB: 왼쪽으로 돌아요?\nA: 네, 왼쪽으로 도세요.",
     exampleSrc:"A: If you turn at that corner, there's a bank.\nB: Do I turn left?\nA: Yes, turn left.",
     funFact:"돌다 is versatile: 지구가 돌다 (the earth rotates), 머리가 돌다 (head is spinning/dizzy), 소문이 돌다 (a rumor is going around). All share the concept of circular motion."},

    {type:"teach", trg:"돌아보다", src:"to look back, to reflect", pos:"verb", gender:null,
     note:"돌다 (turn) + 보다 (look). Turning to look behind or reflecting on the past.",
     example:"A: 한 해를 돌아보면 어떤 기분이에요?\nB: 많이 성장한 것 같아요.\nA: 잘 하셨어요!",
     exampleSrc:"A: How do you feel looking back on the year?\nB: I feel like I've grown a lot.\nA: You did well!",
     funFact:"돌아보다 is deeply philosophical in Korean. 인생을 돌아보다 (to look back on life), 과거를 돌아보다 (to reflect on the past). Year-end broadcasts are full of 한 해를 돌아보며 (reflecting on the year)."},

    {type:"teach", trg:"돌아서다", src:"to turn around", pos:"verb", gender:null,
     note:"돌다 (turn) + 서다 (stand). Turning one's body to face a new direction.",
     example:"A: 갑자기 돌아서서 어디 가요?\nB: 지갑을 잊어버렸어요!\nA: 빨리 가세요!",
     exampleSrc:"A: Where are you going, suddenly turning around?\nB: I forgot my wallet!\nA: Go quickly!",
     funFact:"돌아서다 carries emotional weight: 돌아서면 잊을 거야 (once I turn away, I'll forget). Korean breakup songs use 돌아서다 to symbolize the moment of walking away from someone forever."},

    // --- Quiz batch 3 ---
    {type:"mc",
     q:"'공이 날아왔어요'에서 공이 어디로 움직이고 있어요?",
     opts:["하늘 위로 올라가고 있어요","나에게로 오고 있어요","바닥으로 떨어지고 있어요","나에게서 멀어지고 있어요"],
     ans:"나에게로 오고 있어요",
     hint:"The directional helper 오다 means 'to come.' The ball is moving toward the person speaking."},

    {type:"fb",
     s:"저 모서리를 {1} 은행이 있어요.",
     a:["돌면"],
     opts:["돌면","넘으면","건너면","달리면"],
     hint:"A verb meaning to turn or go around. Used when giving directions at a corner.",
     sSrc:"If you {1} at that corner, there's a bank."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"들어서다", src:"to step into, to enter", pos:"verb", gender:null,
     note:"들다 (enter) + 서다 (stand). Stepping into a new space or phase.",
     example:"A: 학교에 들어서자 벚꽃이 보였어요.\nB: 예쁘겠다!\nA: 네, 봄이 온 걸 느꼈어요.",
     exampleSrc:"A: As I stepped into the school, I saw cherry blossoms.\nB: How pretty!\nA: Yes, I could feel spring had come.",
     funFact:"들어서다 is literary and scene-setting. Korean novels love opening scenes with 문을 들어서자 (as one stepped through the door). It creates a cinematic moment of transition."},

    {type:"teach", trg:"나서다", src:"to step forward, to come forward", pos:"verb", gender:null,
     note:"나다 (come out) + 서다 (stand). Volunteering or taking initiative.",
     example:"A: 누가 발표할 거예요?\nB: 제가 나서겠습니다.\nA: 용기 있네요! 감사합니다.",
     exampleSrc:"A: Who will present?\nB: I'll step forward.\nA: That's brave! Thank you.",
     funFact:"나서다 implies initiative and courage. 나서서 도와주다 (to step forward and help) is admirable. But 나서지 마 (don't step in) warns against meddling. The tone depends on context."},

    {type:"teach", trg:"서두르다", src:"to hurry, to rush", pos:"verb", gender:null,
     note:"General-purpose hurrying. 서둘러요! (Hurry up!)",
     example:"A: 서둘러요! 늦겠어요!\nB: 알겠어요, 빨리 준비할게요.\nA: 5분 안에 나가야 해요.",
     exampleSrc:"A: Hurry! We'll be late!\nB: Got it, I'll get ready quickly.\nA: We need to leave in 5 minutes.",
     funFact:"빨리빨리 (hurry hurry) culture is famous in Korea, and 서두르다 is its verb. 서두르지 마세요 (don't rush) is advice Koreans give but rarely follow themselves. The fast pace defines modern Korean life."},

    {type:"teach", trg:"뛰어들다", src:"to jump in, to plunge into", pos:"verb", gender:null,
     note:"뛰다 (jump) + 들다 (enter). Physical or metaphorical diving in.",
     example:"A: 물에 뛰어들었어요?\nB: 네, 너무 더워서 바로 뛰어들었어요.\nA: 시원했겠다!",
     exampleSrc:"A: Did you jump into the water?\nB: Yes, it was so hot I jumped right in.\nA: Must have been refreshing!",
     funFact:"뛰어들다 works metaphorically: 사업에 뛰어들다 (to plunge into business), 논쟁에 뛰어들다 (to jump into an argument). It always implies bold, impulsive entry with full commitment."},

    {type:"teach", trg:"걸음", src:"step, pace, gait", pos:"noun", gender:null,
     note:"From 걷다 (to walk). Countable: 한 걸음 (one step).",
     example:"A: 한 걸음만 더 가면 돼요.\nB: 정말요? 거의 다 왔네요!\nA: 네, 조금만 더 걸어요.",
     exampleSrc:"A: Just one more step and we're there.\nB: Really? We're almost there!\nA: Yes, just walk a little more.",
     funFact:"걸음마 (baby steps, learning to walk) is one of a child's key milestones. 첫걸음 (first step) is used for any beginning: 한국어의 첫걸음 (first steps in Korean). Poetic and motivational."},

    // --- Quiz batch 4 ---
    {type:"fb",
     s:"{1}! 버스가 곧 출발해요!",
     a:["서둘러요"],
     opts:["서둘러요","나서요","들어서요","돌아서요"],
     hint:"A verb meaning to hurry or rush. The bus is about to leave, so you need to move fast.",
     sSrc:"{1}! The bus is about to leave!"},

    {type:"match", pairs:[
      {trg:"들어서다", src:"to step into"},
      {trg:"나서다", src:"to step forward"},
      {trg:"뛰어들다", src:"to jump in"},
      {trg:"걸음", src:"step, pace"}
    ]},

    {type:"mc",
     q:"'제가 나서겠습니다'는 어떤 상황에서 써요?",
     opts:["물에 뛰어들 때","뒤로 물러날 때","앞으로 나와서 자원할 때","서두를 때"],
     ans:"앞으로 나와서 자원할 때",
     hint:"This verb means stepping forward and taking initiative. It implies volunteering or courage."}
  ]
};
export default LESSON_23;
