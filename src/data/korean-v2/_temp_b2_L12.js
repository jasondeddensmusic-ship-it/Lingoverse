// B2 Lesson 12: Body & Action
// Words: 근육, 감각, 갈다, 긁다, 걷기, 걷다, 굽히다, 구르다, 걸치다, 굶다,
//        갈아입다, 건드리다, 건네다, 건네주다, 거품, 곧다, 골치, 간호, 귓속, 간격

const LESSON_12 = {
  id:"kov2_b2_l12", title:"몸과 움직임", icon:"\uD83E\uDDBE", xp:15, board:true,
  steps:[
    {type:"intro", title:"Body & Action",
     desc:"Learn vocabulary for body parts, physical actions, and bodily states. These words are common in everyday Korean and appear in TOPIK II reading passages about health and daily life.",
     goals:["Learn 20 body and physical action vocabulary words","Understand pure Korean verbs for physical movement","Describe physical states and sensations"]},

    {type:"teach", trg:"\uADFC\uC721", src:"muscle", pos:"noun", gender:null,
     note:"Sino-Korean: tendon (筋) + flesh (肉).\nMuscle tissue in the body.",
     example:"A: \uADFC\uC721\uC744 \uD0A4\uC6B0\uACE0 \uC2F6\uC5B4\uC694.\nB: \uC6B4\uB3D9\uC744 \uAFB8\uC900\uD788 \uD574\uC57C \uD574\uC694.\nA: \uC5B4\uB5A4 \uC6B4\uB3D9\uC774 \uADFC\uC721\uC5D0 \uC88B\uC544\uC694?\nB: \uC6E8\uC774\uD2B8 \uD2B8\uB808\uC774\uB2DD\uC774 \uD6A8\uACFC\uC801\uC774\uC5D0\uC694.",
     exampleSrc:"A: I want to build muscle.\nB: You need to exercise consistently.\nA: What exercise is good for muscles?\nB: Weight training is effective.",
     funFact:"근육통 (muscle pain) is something Koreans often discuss after exercise. The phrase 근육이 붙다 (muscles attach) means to gain muscle mass."},

    {type:"teach", trg:"\uAC10\uAC01", src:"sense; sensation; feeling", pos:"noun", gender:null,
     note:"Sino-Korean: feel (感) + perceive (覺).\nThe five senses or a general feeling.",
     example:"A: \uC774 \uC625\uAC10\uC758 \uAC10\uAC01\uC774 \uC88B\uC544\uC694.\nB: \uBD80\uB4DC\uB7EC\uC6B4 \uAC10\uAC01\uC774\uC8E0.\nA: \uC624\uAC10\uC744 \uD65C\uC6A9\uD55C \uC218\uC5C5\uC774\uC5C8\uC5B4\uC694.\nB: \uAC10\uAC01\uC801\uC778 \uACBD\uD5D8\uC774\uC5C8\uACA0\uB124\uC694.",
     exampleSrc:"A: The sensation of this fabric is nice.\nB: It has a soft feeling.\nA: The class utilized the five senses.\nB: It must have been a sensory experience.",
     funFact:"오감 (five senses) are: 시각 (sight), 청각 (hearing), 후각 (smell), 미각 (taste), 촉각 (touch). All use the 感/覺 pattern."},

    {type:"teach", trg:"\uAC08\uB2E4", src:"to grind; to sharpen; to replace", pos:"verb", gender:null,
     note:"Pure Korean verb with multiple meanings depending on context.",
     example:"A: \uCE7C\uC744 \uAC08\uC544\uC57C \uD574\uC694.\nB: \uBB34\uB5A0\uC84C\uC5B4\uC694?\nA: \uD0C0\uC774\uC5B4\uB97C \uAC08\uC544\uC57C \uD574\uC694.\nB: \uC815\uBE44\uC18C\uC5D0 \uAC00\uC138\uC694.",
     exampleSrc:"A: I need to sharpen the knife.\nB: Has it become dull?\nA: I need to change the tires.\nB: Go to the repair shop.",
     funFact:"갈다 has surprisingly many meanings: sharpen (칼을 갈다), change/replace (타이어를 갈다), grind (커피를 갈다), plow (밭을 갈다)."},

    {type:"teach", trg:"\uAE41\uB2E4", src:"to scratch; to scrape", pos:"verb", gender:null,
     note:"Pure Korean verb. Physical scratching action.",
     example:"A: \uBAA8\uAE30\uC5D0 \uBB3C\uB9B0 \uACF3\uC744 \uAE41\uACE0 \uC788\uC5B4\uC694.\nB: \uAE41\uC73C\uBA74 \uB354 \uAC00\uB824\uC6CC\uC694.\nA: \uB4F1\uC744 \uAE41\uC5B4 \uC8FC\uC138\uC694.\nB: \uC5B4\uB514\uAC00 \uAC00\uB824\uC6CC\uC694?",
     exampleSrc:"A: I am scratching the mosquito bite.\nB: Scratching makes it itchier.\nA: Please scratch my back.\nB: Where is it itchy?",
     funFact:"등 긁어 주다 (scratch someone's back) is literal but also metaphorical, similar to the English idiom 'scratch my back.'"},

    {type:"teach", trg:"\uAC77\uAE30", src:"walking (as exercise/activity)", pos:"noun", gender:null,
     note:"Nominalized form of 걷다 (to walk) + -기.",
     example:"A: \uAC77\uAE30\uAC00 \uAC74\uAC15\uC5D0 \uC88B\uC544\uC694.\nB: \uB9E4\uC77C \uAC77\uAE30\uB97C \uD574\uC694?\nA: \uB124, 30\uBD84\uC529 \uAC77\uAE30\uB97C \uD574\uC694.\nB: \uAC77\uAE30 \uC6B4\uB3D9\uC774 \uC81C\uC77C \uC27D\uC8E0.",
     exampleSrc:"A: Walking is good for health.\nB: Do you walk every day?\nA: Yes, I walk 30 minutes a day.\nB: Walking exercise is the easiest.",
     funFact:"걷기 as exercise has become hugely popular in Korea. 걷기 대회 (walking events) and 둘레길 (trail paths) attract millions annually."},

    {type:"teach", trg:"\uAC77\uB2E4", src:"to walk", pos:"verb", gender:null,
     note:"Pure Korean irregular verb (ㄷ-irregular).\nConjugates: 걸어, 걸으면.",
     example:"A: \uD559\uAD50\uAE4C\uC9C0 \uAC78\uC5B4\uC11C \uAC00\uC694.\nB: \uC5BC\uB9C8\uB098 \uAC78\uB824\uC694?\nA: 20\uBD84\uC815\uB3C4 \uAC78\uC5B4\uC694.\nB: \uC88B\uC740 \uC6B4\uB3D9\uC774\uB124\uC694.",
     exampleSrc:"A: I walk to school.\nB: How long does it take?\nA: I walk about 20 minutes.\nB: That is good exercise.",
     funFact:"걷다 is a ㄷ-irregular verb: the ㄷ becomes ㄹ before vowels. 걷다 > 걸어요, 걸으면. This is a common irregular pattern in Korean."},

    {type:"mc",
     q:"\uAC74\uAC15\uC744 \uC704\uD574 \uB9E4\uC77C \uD558\uB294 \uC6B4\uB3D9\uC73C\uB85C \uAC00\uC7A5 \uC27D\uACE0 \uC88B\uC740 \uAC83\uC740?",
     opts:["\uAC77\uAE30","\uADFC\uC721 \uC6B4\uB3D9","\uC218\uC601","\uC694\uAC00"],
     ans:"\uAC77\uAE30",
     hint:"This is the simplest form of exercise that requires no equipment, just moving your feet."},

    {type:"teach", trg:"\uAD3D\uD788\uB2E4", src:"to bend; to bow", pos:"verb", gender:null,
     note:"Pure Korean causative verb. To cause something to bend.",
     example:"A: \uD5C8\uB9AC\uB97C \uAD3D\uD788\uC9C0 \uB9C8\uC138\uC694.\nB: \uD5C8\uB9AC \uAC74\uAC15\uC5D0 \uC88B\uC9C0 \uC54A\uC544\uC694?\nA: \uBB34\uB98E\uC744 \uAD3D\uD788\uACE0 \uC6B4\uB3D9\uD558\uC138\uC694.\nB: \uC2A4\uD2B8\uB808\uCE6D\uC774 \uC911\uC694\uD558\uC8E0.",
     exampleSrc:"A: Do not bend your waist.\nB: Is it bad for the back?\nA: Bend your knees and exercise.\nB: Stretching is important.",
     funFact:"굽히다 is the causative of 굽다 (to be bent). Korean has systematic causative patterns: 먹다/먹이다, 보다/보이다, 굽다/굽히다."},

    {type:"teach", trg:"\uAD6C\uB974\uB2E4", src:"to roll; to tumble", pos:"verb", gender:null,
     note:"Pure Korean verb. Rolling motion.",
     example:"A: \uACF5\uC774 \uB9C8\uB2F9\uC73C\uB85C \uAD6C\uB974\uACE0 \uC788\uC5B4\uC694.\nB: \uC7A1\uC544 \uC624\uC138\uC694.\nA: \uBC14\uB2E5\uC5D0\uC11C \uAD6C\uB974\uBA70 \uC6C3\uC5C8\uC5B4\uC694.\nA: \uC544\uC774\uB4E4\uC774 \uB6F0\uC5B4\uB178\uB294 \uBAA8\uC2B5\uC774\uC5D0\uC694.",
     exampleSrc:"A: The ball is rolling toward the yard.\nB: Go catch it.\nA: They rolled on the floor laughing.\nA: That is children playing.",
     funFact:"구르다 is used in the expression 이를 구르다 (to grind one's teeth in frustration) and 눈물이 구르다 (tears roll down)."},

    {type:"teach", trg:"\uAC78\uCE58\uB2E4", src:"to span; to drape over; to extend over", pos:"verb", gender:null,
     note:"Pure Korean verb. Covering a range or placing across.",
     example:"A: \uC5B4\uAE68\uC5D0 \uC637\uC744 \uAC78\uCE58\uACE0 \uB098\uC654\uC5B4\uC694.\nB: \uC785\uC744 \uAC83\uC774 \uC5C6\uC5B4\uC694?\nA: 3\uC77C\uC5D0 \uAC78\uCE5C \uD68C\uC758\uC600\uC5B4\uC694.\nB: \uAE34 \uD68C\uC758\uC600\uB124\uC694.",
     exampleSrc:"A: I came out with clothes draped over my shoulder.\nB: Did you not have anything to wear?\nA: It was a meeting spanning three days.\nB: That was a long meeting.",
     funFact:"걸치다 is versatile: physically draping (옷을 걸치다), spanning time (3일에 걸치다), or extending across (분야에 걸치다)."},

    {type:"teach", trg:"\uAD78\uB2E4", src:"to starve; to go hungry", pos:"verb", gender:null,
     note:"Pure Korean verb. Not eating, whether by force or choice.",
     example:"A: \uC624\uB298 \uC810\uC2EC\uC744 \uAD78\uC5C8\uC5B4\uC694.\nB: \uC65C \uAD78\uC5C8\uC5B4\uC694?\nA: \uC77C\uC774 \uB108\uBB34 \uBC14\uBE74\uC5B4\uC694.\nB: \uBC25\uC744 \uAD78\uC73C\uBA74 \uAC74\uAC15\uC5D0 \uC548 \uC88B\uC544\uC694.",
     exampleSrc:"A: I skipped lunch today.\nB: Why did you go hungry?\nA: I was too busy with work.\nB: Skipping meals is bad for health.",
     funFact:"굶다 is distinct from 단식하다 (to fast intentionally). 굶다 implies hunger from circumstance, while 단식 is deliberate."},

    {type:"fb",
     s:"\uC6B4\uB3D9\uD560 \uB54C \uD5C8\uB9AC\uB97C {1} \uB9C8\uC138\uC694.",
     a:["\uAD3D\uD788\uC9C0"],
     opts:["\uAD3D\uD788\uC9C0","\uAD6C\uB974\uC9C0","\uAE41\uC9C0","\uAC78\uCE58\uC9C0"],
     hint:"This causative verb means to bend a body part. Bad posture involves doing this to your back.",
     sSrc:"Do not {1} your waist when exercising."},

    {type:"teach", trg:"\uAC08\uC544\uC785\uB2E4", src:"to change clothes", pos:"verb", gender:null,
     note:"Pure Korean compound: change (갈다) + wear (입다).",
     example:"A: \uC637\uC744 \uAC08\uC544\uC785\uACE0 \uB098\uAC00\uC694.\nB: \uBB34\uC2A8 \uC637\uC73C\uB85C \uAC08\uC544\uC785\uC744 \uAC70\uC608\uC694?\nA: \uD3B8\uD55C \uC637\uC73C\uB85C \uAC08\uC544\uC785\uC744\uAC8C\uC694.\nB: \uB0A0\uC528\uAC00 \uB354\uC6B0\uB2C8\uAE4C \uAC00\uBCCD\uAC8C \uC785\uC73C\uC138\uC694.",
     exampleSrc:"A: I will change clothes and go out.\nB: What will you change into?\nA: I will change into comfortable clothes.\nB: Since it is hot, dress lightly.",
     funFact:"갈아입다 is a compound verb: 갈다 (change) + 입다 (wear). Similar compounds: 갈아타다 (transfer vehicles), 갈아끼우다 (replace/swap in)."},

    {type:"teach", trg:"\uAC74\uB4DC\uB9AC\uB2E4", src:"to touch; to disturb; to tamper with", pos:"verb", gender:null,
     note:"Pure Korean verb. Light touching, often unwelcome.",
     example:"A: \uC81C \uBB3C\uAC74\uC744 \uAC74\uB4DC\uB9AC\uC9C0 \uB9C8\uC138\uC694.\nB: \uC8C4\uC1A1\uD569\uB2C8\uB2E4.\nA: \uBBFC\uAC10\uD55C \uC8FC\uC81C\uB97C \uAC74\uB4DC\uB838\uC5B4\uC694.\nB: \uC870\uC2EC\uD574\uC57C \uD588\uB294\uB370\uC694.",
     exampleSrc:"A: Do not touch my things.\nB: I am sorry.\nA: You brought up a sensitive topic.\nB: I should have been more careful.",
     funFact:"건드리다 has both physical (touching objects) and emotional (provoking, disturbing) meanings. 신경을 건드리다 means 'to get on someone's nerves.'"},

    {type:"teach", trg:"\uAC74\uB124\uB2E4", src:"to hand over; to pass to", pos:"verb", gender:null,
     note:"Pure Korean verb. Transferring something to someone.",
     example:"A: \uC11C\uB958\uB97C \uAC74\uB124\uBC1B\uC558\uC5B4\uC694.\nB: \uB204\uAD6C\uD55C\uD14C\uC11C \uAC74\uB124\uBC1B\uC558\uC5B4\uC694?\nA: \uB2F4\uB2F9\uC790\uD55C\uD14C\uC11C \uAC74\uB124\uBC1B\uC558\uC5B4\uC694.\nB: \uC798 \uBCF4\uAD00\uD558\uC138\uC694.",
     exampleSrc:"A: I received the documents.\nB: Who did you receive them from?\nA: I received them from the person in charge.\nB: Keep them safe.",
     funFact:"건네다 is the base form. 건네주다 adds the 'giving' nuance (주다). 건네받다 adds the 'receiving' nuance (받다)."},

    {type:"teach", trg:"\uAC74\uB124\uC8FC\uB2E4", src:"to hand over (to someone); to give across", pos:"verb", gender:null,
     note:"Pure Korean compound: pass (건네다) + give (주다).\nHanding something to someone as a favor.",
     example:"A: \uCEF4\uC744 \uAC74\uB124\uC8FC\uC138\uC694.\nB: \uC5EC\uAE30 \uC788\uC5B4\uC694.\nA: \uC6C3\uC73C\uBA70 \uC120\uBB3C\uC744 \uAC74\uB124\uC92C\uC5B4\uC694.\nB: \uACE0\uB9C8\uC6B4 \uB9C8\uC74C\uC774\uB124\uC694.",
     exampleSrc:"A: Please hand me the cup.\nB: Here you go.\nA: They handed over the gift with a smile.\nB: How kind.",
     funFact:"건네주다 vs 건네다: 건네주다 is warmer and more considerate. The addition of 주다 makes it a favor done for someone else."},

    {type:"teach", trg:"\uAC70\uD488", src:"foam; bubbles; froth", pos:"noun", gender:null,
     note:"Pure Korean word. Light, airy foam.",
     example:"A: \uBE44\uB204\uB85C \uAC70\uD488\uC744 \uB9CC\uB4E4\uC5C8\uC5B4\uC694.\nB: \uAC70\uD488\uC774 \uB9CE\uC544\uC57C \uAE68\uB057\uD574\uC838\uC694.\nA: \uBB3C\uC774 \uAC70\uD488\uC744 \uC77C\uC73C\uD0A4\uACE0 \uC788\uC5B4\uC694.\nB: \uB04C\uACE0 \uC788\uB098 \uBD10\uC694.",
     exampleSrc:"A: I made foam with soap.\nB: More foam means it cleans better.\nA: The water is foaming up.\nB: It must be boiling.",
     funFact:"거품 is also used metaphorically: 거품 경제 (bubble economy), meaning an inflated economy that may burst."},

    {type:"teach", trg:"\uACE7\uB2E4", src:"to be straight; to be upright", pos:"adj", gender:null,
     note:"Pure Korean adjective. Physically or morally straight.",
     example:"A: \uC790\uC138\uB97C \uACE7\uAC8C \uD558\uC138\uC694.\nB: \uD5C8\uB9AC\uB97C \uD3B4\uACE0 \uC549\uC744\uAC8C\uC694.\nA: \uACE7\uC740 \uC131\uACA9\uC744 \uAC00\uC9C4 \uC0AC\uB78C\uC774\uC5D0\uC694.\nB: \uC815\uC9C1\uD558\uACE0 \uC62C\uBC14\uB978 \uC0AC\uB78C\uC774\uC8E0.",
     exampleSrc:"A: Keep your posture straight.\nB: I will sit with my back straight.\nA: They have an upright character.\nB: An honest and righteous person.",
     funFact:"곧다 describes both physical straightness (곧은 길, straight road) and moral uprightness (곧은 성격, upright character)."},

    {type:"teach", trg:"\uACE8\uCE58", src:"headache (figurative); trouble; worry", pos:"noun", gender:null,
     note:"Pure Korean compound: skull (골) + hurt (치).\nSomething that causes a headache.",
     example:"A: \uC774 \uBB38\uC81C\uAC00 \uACE8\uCE58\uC608\uC694.\nB: \uACE8\uCE58 \uC544\uD508 \uBB38\uC81C\uB124\uC694.\nA: \uACE8\uCE58\uB97C \uC378\uACE0 \uC788\uC5B4\uC694.\nB: \uD568\uAED8 \uD574\uACB0\uD569\uC2DC\uB2E4.",
     exampleSrc:"A: This problem is a headache.\nB: It is a troublesome problem.\nA: I am dealing with a headache.\nB: Let us solve it together.",
     funFact:"골치 아프다 (a headache) is the standard colloquial expression for annoying problems. It is not about literal headaches."},

    {type:"teach", trg:"\uAC04\uD638", src:"nursing; care (medical)", pos:"noun", gender:null,
     note:"Sino-Korean: watch over (看) + protect (護).\nMedical care and nursing.",
     example:"A: \uAC04\uD638\uC0AC\uAC00 \uB418\uACE0 \uC2F6\uC5B4\uC694.\nB: \uAC04\uD638\uD559\uC744 \uACF5\uBD80\uD574\uC57C \uD574\uC694.\nA: \uD658\uC790 \uAC04\uD638\uAC00 \uC911\uC694\uD574\uC694.\nB: \uAC04\uD638\uC0AC\uC758 \uC5ED\uD560\uC774 \uD06C\uC8E0.",
     exampleSrc:"A: I want to become a nurse.\nB: You need to study nursing.\nA: Patient care is important.\nB: The role of nurses is significant.",
     funFact:"간호사 (nurse) is a highly respected profession in Korea. The nursing entrance exam (간호학과 입시) is very competitive."},

    {type:"teach", trg:"\uADC3\uC18D", src:"inside the ear", pos:"noun", gender:null,
     note:"Pure Korean compound: ear (귀) + inside (속).\nThe inner ear or whispering distance.",
     example:"A: \uADC3\uC18D\uC5D0\uC11C \uC74C\uC545\uC774 \uB4E4\uB824\uC694.\nB: \uC774\uC5B4\uD3F0\uC744 \uC4F0\uACE0 \uC788\uC5B4\uC694?\nA: \uADC3\uC18D\uB9D0\uB85C \uBE44\uBC00\uC744 \uC54C\uB824 \uC92C\uC5B4\uC694.\nB: \uBB34\uC2A8 \uBE44\uBC00\uC774\uC5D0\uC694?",
     exampleSrc:"A: I can hear music inside my ear.\nB: Are you wearing earphones?\nA: They told me a secret in a whisper.\nB: What secret?",
     funFact:"귓속말 (ear-inside-word) means 'whisper.' The construction uses the ㅅ linking sound: 귀 + 속 > 귓속."},

    {type:"teach", trg:"\uAC04\uACA9", src:"interval; gap; space between", pos:"noun", gender:null,
     note:"Sino-Korean: between (間) + separate (隔).\nPhysical or temporal space between things.",
     example:"A: \uBC84\uC2A4 \uAC04\uACA9\uC774 \uAE38\uC5B4\uC694.\nB: 30\uBD84 \uAC04\uACA9\uC73C\uB85C \uC640\uC694.\nA: \uAC04\uACA9\uC744 \uC880 \uC904\uC5EC\uC57C \uD574\uC694.\nB: \uCD9C\uD1F4\uADFC \uC2DC\uAC04\uC5D0\uB294 \uAC04\uACA9\uC774 \uC9E7\uC544\uC838\uC694.",
     exampleSrc:"A: The bus interval is long.\nB: They come at 30-minute intervals.\nA: They should shorten the interval.\nB: During rush hour, the interval gets shorter.",
     funFact:"간격 is used in many contexts: 시간 간격 (time interval), 거리 간격 (distance gap), 사회적 간격 (social distance)."},

    {type:"mc",
     q:"\uBE44\uB204\uB97C \uC0AC\uC6A9\uD558\uBA74 \uBB34\uC5C7\uC774 \uC0DD\uAE38\uAE4C\uC694?",
     opts:["\uAC70\uD488","\uADFC\uC721","\uAC10\uAC01","\uACE8\uCE58"],
     ans:"\uAC70\uD488",
     hint:"This word describes the light, airy substance that forms when soap meets water."},

    {type:"match", pairs:[
      {trg:"\uADFC\uC721", src:"muscle"},
      {trg:"\uAC10\uAC01", src:"sensation"},
      {trg:"\uAC77\uAE30", src:"walking"},
      {trg:"\uACE8\uCE58", src:"headache/trouble"},
      {trg:"\uAC04\uD638", src:"nursing"},
      {trg:"\uAC04\uACA9", src:"interval"}
    ]}
  ]
};
export default LESSON_12;
