// Korean B1 Gap - Lesson 19: Stopping, Blocking, and Physical States
const LESSON_19 = {
  id:"kov2_b1gap_l19", title:"멈춤과 물리적 상태", icon:"🛑", xp:15, board:true,
  steps:[
    {type:"intro", title:"Stopping, Blocking, and Physical States",
     desc:"Learn verbs for physical actions and states: stopping, falling, blocking, trembling, and more. These verbs describe what happens to bodies and objects in the physical world.",
     goals:["Master 20 verbs for physical actions and states","Distinguish active vs. passive verb pairs","Use descriptive verbs for urgency and simplicity"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"떨다", src:"to tremble, to shiver", pos:"verb", gender:null,
     note:"Active verb. The subject deliberately or visibly shakes. Also: to be nervous.",
     example:"A: 왜 몸을 떨고 있어요?\nB: 너무 추워서 떨고 있어요.\nA: 따뜻한 옷 입으세요.",
     exampleSrc:"A: Why are you trembling?\nB: I'm shivering because it's so cold.\nA: Put on warm clothes.",
     funFact:"벌벌 떨다 means 'to tremble violently' (from fear or cold). Korean has many sound-symbolic adverbs that pair with 떨다: 덜덜, 부들부들, 와들와들."},

    {type:"teach", trg:"떨리다", src:"to be trembling, to feel shaky", pos:"verb", gender:null,
     note:"Passive/involuntary form of 떨다. The shaking happens to you, not by choice.",
     example:"A: 발표 전에 긴장돼요?\nB: 네, 손이 떨려요.\nA: 심호흡하세요.",
     exampleSrc:"A: Are you nervous before the presentation?\nB: Yes, my hands are shaking.\nA: Take a deep breath.",
     funFact:"The -리다 passive suffix appears on many physical verbs: 들다 > 들리다 (to be heard), 열다 > 열리다 (to be opened), 떨다 > 떨리다 (to be shaking)."},

    {type:"teach", trg:"떨어지다", src:"to fall, to drop, to run out", pos:"verb", gender:null,
     note:"Intransitive. Things fall by themselves. Also: to run out of supply.",
     example:"A: 나뭇잎이 떨어지고 있어요.\nB: 가을이 왔나 봐요.\nA: 벌써 시간이 빠르네요.",
     exampleSrc:"A: The leaves are falling.\nB: Autumn must have arrived.\nA: Time flies so fast.",
     funFact:"Versatile verb: 물가가 떨어지다 (prices drop), 시험에 떨어지다 (to fail an exam), 배터리가 떨어지다 (battery dies). The core meaning is always 'going down.'"},

    {type:"teach", trg:"떨어뜨리다", src:"to drop something", pos:"verb", gender:null,
     note:"Causative of 떨어지다. Someone causes something to fall.",
     example:"A: 아, 컵을 떨어뜨렸어요!\nB: 괜찮아요? 다치지 않았어요?\nA: 네, 괜찮아요. 컵만 깨졌어요.",
     exampleSrc:"A: Oh, I dropped the cup!\nB: Are you okay? Did you get hurt?\nA: Yes, I'm fine. Only the cup broke.",
     funFact:"The -뜨리다 causative ending is emphatic. Compare: 떨어지다 (it falls) vs. 떨어뜨리다 (I make it fall/drop it). The extra syllable adds a sense of accidental force."},

    {type:"teach", trg:"멈추다", src:"to stop, to halt", pos:"verb", gender:null,
     note:"Both transitive and intransitive. Cars stop, people stop, you stop a machine.",
     example:"A: 여기서 멈추세요.\nB: 왜요? 무슨 일이에요?\nA: 신호등이 빨간색이에요.",
     exampleSrc:"A: Stop here, please.\nB: Why? What's going on?\nA: The traffic light is red.",
     funFact:"멈추다 vs. 그만두다: 멈추다 is physical stopping (a car, movement), while 그만두다 is quitting an activity or habit. 비가 멈추다 (rain stops), 일을 그만두다 (quit a job)."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'손이 떨려요'에서 '떨리다'가 쓰인 이유는?",
     opts:["손을 일부러 흔드니까","손이 저절로 떨리니까","손이 아프니까","손을 씻고 있으니까"],
     ans:"손이 저절로 떨리니까",
     hint:"This is the passive form. The shaking happens involuntarily, not by the speaker's choice."},

    {type:"fb",
     s:"실수로 핸드폰을 {1}.",
     a:["떨어뜨렸어요"],
     opts:["떨어뜨렸어요","떨어졌어요","떨었어요","멈췄어요"],
     hint:"The causative form: you accidentally caused your phone to fall. You dropped it.",
     sSrc:"I accidentally {1} my phone."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"머무르다", src:"to stay, to remain", pos:"verb", gender:null,
     note:"르 irregular verb. More formal than 있다 for 'staying' at a place.",
     example:"A: 서울에 얼마나 머무를 거예요?\nB: 일주일 정도 머무를 예정이에요.\nA: 좋은 시간 보내세요.",
     exampleSrc:"A: How long will you stay in Seoul?\nB: I plan to stay about a week.\nA: Have a good time.",
     funFact:"르 irregular: 머무르다 > 머물러요. The ㄹ doubles before vowel endings. Same pattern: 다르다 > 달라요, 빠르다 > 빨라요. A key B1 grammar point."},

    {type:"teach", trg:"막다", src:"to block, to prevent", pos:"verb", gender:null,
     note:"Active verb. To physically block a path or prevent something from happening.",
     example:"A: 길을 막지 마세요.\nB: 죄송해요, 비켜갈게요.\nA: 감사합니다.",
     exampleSrc:"A: Please don't block the road.\nB: Sorry, I'll move aside.\nA: Thank you.",
     funFact:"막다 has a broad range: 길을 막다 (block a road), 입을 막다 (cover one's mouth), 공격을 막다 (defend against an attack). The core image is creating a barrier."},

    {type:"teach", trg:"막히다", src:"to be blocked, to be clogged", pos:"verb", gender:null,
     note:"Passive of 막다. Something is blocked without the subject's control.",
     example:"A: 왜 늦었어요?\nB: 길이 막혀서 늦었어요.\nA: 출퇴근 시간이라 그래요.",
     exampleSrc:"A: Why were you late?\nB: I was late because the road was congested.\nA: It's because of rush hour.",
     funFact:"길이 막히다 (traffic jam) is one of the most-used phrases in Seoul. 코가 막히다 (nose is stuffed up) is another common one. Both describe something clogged."},

    {type:"teach", trg:"그치다", src:"to cease, to stop (of itself)", pos:"verb", gender:null,
     note:"Intransitive. Used for rain, wind, crying stopping on their own.",
     example:"A: 비가 그쳤어요?\nB: 네, 방금 그쳤어요.\nA: 그러면 산책하러 가요!",
     exampleSrc:"A: Has the rain stopped?\nB: Yes, it just stopped.\nA: Then let's go for a walk!",
     funFact:"그치다 is specifically for natural cessation. Rain stops (그치다), not is stopped. A person stops crying (그치다). For deliberate stopping, use 멈추다."},

    {type:"teach", trg:"몰다", src:"to drive, to herd", pos:"verb", gender:null,
     note:"Transitive verb. To drive a vehicle or herd animals in a direction.",
     example:"A: 차를 몰고 출근해요?\nB: 네, 매일 차를 몰고 가요.\nA: 운전 조심하세요.",
     exampleSrc:"A: Do you drive to work?\nB: Yes, I drive every day.\nA: Drive carefully.",
     funFact:"몰다 originally meant herding animals. It expanded to driving vehicles. 몰아치다 means 'to rage/sweep through,' like a storm driving everything before it."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"막다", src:"to block"},
      {trg:"막히다", src:"to be blocked"},
      {trg:"그치다", src:"to cease"},
      {trg:"몰다", src:"to drive, herd"}
    ]},

    {type:"fb",
     s:"비가 {1} 후에 무지개가 떴어요.",
     a:["그친"],
     opts:["그친","막힌","멈춘","몬"],
     hint:"This verb means natural cessation. After the rain ceased on its own, a rainbow appeared.",
     sSrc:"After the rain {1}, a rainbow appeared."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"걸리다", src:"to be caught, to take (time)", pos:"verb", gender:null,
     note:"Multi-meaning passive verb. Common meanings: get caught, take time, catch a cold.",
     example:"A: 거기까지 얼마나 걸려요?\nB: 지하철로 30분 걸려요.\nA: 그러면 일찍 출발해야겠네요.",
     exampleSrc:"A: How long does it take to get there?\nB: It takes 30 minutes by subway.\nA: Then we should leave early.",
     funFact:"One of Korean's most versatile verbs: 시간이 걸리다 (take time), 감기에 걸리다 (catch a cold), 경찰에 걸리다 (get caught by police), 전화가 걸리다 (a call comes in)."},

    {type:"teach", trg:"낳다", src:"to give birth, to produce", pos:"verb", gender:null,
     note:"Irregular pronunciation: [나타]. Used for bearing children or producing results.",
     example:"A: 아기를 낳았어요?\nB: 네, 지난달에 딸을 낳았어요.\nA: 축하해요!",
     exampleSrc:"A: Did you have a baby?\nB: Yes, I gave birth to a daughter last month.\nA: Congratulations!",
     funFact:"Do not confuse with 나다 (to occur/happen). 낳다 has the extra ㅎ and specifically means giving birth. Mispronouncing this pair is a common learner mistake."},

    {type:"teach", trg:"늙다", src:"to grow old, to age", pos:"verb", gender:null,
     note:"Intransitive. Describes aging. Can sound blunt, so handle with care.",
     example:"A: 부모님이 많이 늙으셨어요.\nB: 세월이 빠르죠.\nA: 더 자주 찾아뵈야겠어요.",
     exampleSrc:"A: My parents have aged a lot.\nB: Time flies, doesn't it.\nA: I should visit them more often.",
     funFact:"늙다 is direct and can sound harsh. The polite alternative is 나이가 드시다. Saying 할머니가 늙었다 sounds rude, while 할머니가 나이가 많으시다 is respectful."},

    {type:"teach", trg:"눕다", src:"to lie down", pos:"verb", gender:null,
     note:"ㅂ irregular verb. 눕다 > 누워요. The ㅂ changes to 우 before vowels.",
     example:"A: 피곤해요. 좀 눕고 싶어요.\nB: 소파에 누워요.\nA: 고마워요, 잠깐 쉴게요.",
     exampleSrc:"A: I'm tired. I want to lie down.\nB: Lie on the sofa.\nA: Thanks, I'll rest for a bit.",
     funFact:"ㅂ irregular: 눕다 > 누워요, 누우면, 누운. Same pattern: 춥다 > 추워요, 돕다 > 도와요. Recognizing ㅂ irregulars is essential for TOPIK II."},

    {type:"teach", trg:"돌리다", src:"to turn, to rotate something", pos:"verb", gender:null,
     note:"Causative of 돌다 (to turn). You make something turn or rotate.",
     example:"A: 핸들을 왼쪽으로 돌리세요.\nB: 이렇게요?\nA: 네, 잘하고 있어요.",
     exampleSrc:"A: Turn the steering wheel to the left.\nB: Like this?\nA: Yes, you're doing well.",
     funFact:"고개를 돌리다 means 'to turn one's head.' 화제를 돌리다 means 'to change the topic.' The physical turning metaphor extends to abstract meanings."},

    // --- Quiz batch 3 ---
    {type:"mc",
     q:"'서울에서 부산까지 5시간 걸려요'에서 '걸리다'의 뜻은?",
     opts:["잡히다","감기에 걸리다","시간이 소요되다","전화가 오다"],
     ans:"시간이 소요되다",
     hint:"In this sentence about travel duration, the verb refers to how much time is needed."},

    {type:"fb",
     s:"피곤해서 소파에 {1}.",
     a:["누웠어요"],
     opts:["누웠어요","눕었어요","늙었어요","낳았어요"],
     hint:"This ㅂ irregular verb means 'to lie down.' The ㅂ changes to 우 in conjugation.",
     sSrc:"I was tired, so I {1} on the sofa."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"모자라다", src:"to be insufficient, to lack", pos:"verb", gender:null,
     note:"Intransitive descriptive verb. Something falls short of what is needed.",
     example:"A: 돈이 모자라요.\nB: 얼마나 모자라요?\nA: 만 원 정도 모자라요.",
     exampleSrc:"A: I don't have enough money.\nB: How much are you short?\nA: About 10,000 won short.",
     funFact:"모자라다 can also describe a person: 생각이 모자라다 means 'to lack judgment/thinking.' Be careful with this usage as it can sound insulting."},

    {type:"teach", trg:"닿다", src:"to reach, to touch", pos:"verb", gender:null,
     note:"Intransitive. To make contact with or arrive at a point.",
     example:"A: 손이 닿아요?\nB: 아니요, 너무 높아서 안 닿아요.\nA: 의자를 가져다줄게요.",
     exampleSrc:"A: Can you reach it?\nB: No, it's too high, I can't reach.\nA: I'll bring you a chair.",
     funFact:"닿다 is purely intransitive: things reach or touch on their own. For 'to make something touch,' you would use 대다. 손이 닿다 (hand reaches) vs. 손을 대다 (to touch with hand)."},

    {type:"teach", trg:"급하다", src:"to be urgent, to be in a hurry", pos:"adj", gender:null,
     note:"Descriptive verb. Describes situations or people in a rush.",
     example:"A: 왜 이렇게 급해요?\nB: 비행기 시간이 급해서요.\nA: 택시 타세요!",
     exampleSrc:"A: Why are you in such a hurry?\nB: My flight time is urgent.\nA: Take a taxi!",
     funFact:"급하다 comes from hanja 急 (urgent). Related words: 긴급 (emergency), 급행 (express train), 급식 (school lunch, literally 'urgent meal'). All share the sense of speed."},

    {type:"teach", trg:"간단하다", src:"to be simple, easy", pos:"adj", gender:null,
     note:"Sino-Korean: 簡 (simple) + 單 (single). Not complex.",
     example:"A: 이 요리 어려워요?\nB: 아니요, 간단해요.\nA: 그러면 저도 만들어 볼게요.",
     exampleSrc:"A: Is this dish difficult?\nB: No, it's simple.\nA: Then I'll try making it too.",
     funFact:"간단히 (simply) is the adverb form. 간단한 식사 means 'a simple meal.' In meetings, 간단히 말하면 means 'to put it simply,' a useful phrase for concise communication."},

    {type:"teach", trg:"단순하다", src:"to be simple, plain, uncomplicated", pos:"adj", gender:null,
     note:"Sino-Korean: 單 (single) + 純 (pure). Simpler than 간단하다, closer to 'plain.'",
     example:"A: 이 문제가 복잡해 보여요.\nB: 단순하게 생각해 보세요.\nA: 아, 그러면 답이 보이네요!",
     exampleSrc:"A: This problem looks complicated.\nB: Try thinking about it simply.\nA: Ah, then I can see the answer!",
     funFact:"간단하다 vs. 단순하다: 간단하다 means 'easy, not complicated' (positive). 단순하다 can mean 'simplistic' (sometimes negative). A plan can be 간단 (good) or 단순 (too basic)."},

    // --- Quiz batch 4 ---
    {type:"match", pairs:[
      {trg:"모자라다", src:"to be insufficient"},
      {trg:"닿다", src:"to reach, touch"},
      {trg:"급하다", src:"to be urgent"},
      {trg:"간단하다", src:"to be simple"}
    ]},

    {type:"mc",
     q:"'간단하다'와 '단순하다'의 차이는?",
     opts:["같은 뜻이에요","간단은 '쉽다', 단순은 '복잡하지 않다(때로 부정적)'","간단은 부정적, 단순은 긍정적","간단은 명사, 단순은 동사"],
     ans:"간단은 '쉽다', 단순은 '복잡하지 않다(때로 부정적)'",
     hint:"One word is always positive (easy/straightforward), the other can imply being too basic."}
  ]
};
export default LESSON_19;
