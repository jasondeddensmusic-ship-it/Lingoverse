// Korean B2. Batch 4, Lesson 15: Feet and Night
// Words: 반짝이다, 받침, 발걸음, 발길, 발끝, 발달되다, 발등, 발레, 발목, 발바닥, 발음하다, 발자국, 발전되다, 발톱, 발휘하다, 밝아지다, 밝혀내다, 밝혀지다, 밤, 밤낮

const LESSON_15 = {
  id:"kov2_b2b4_l15", title:"발걸음과 밤", icon:"👣", xp:15, board:true,
  steps:[
    {type:"intro", title:"발걸음과 밤",
     desc:"Learn words about feet, walking, discovery, and nighttime. This lesson covers 발- body compounds and 밝-/밤- words for light and darkness.",
     goals:["Master 20 words about feet, development, and nighttime","Understand 발- body part compounds","Use 밝- and 밤- words for light, dark, and discovery"]},

    {type:"teach", trg:"반짝이다", src:"to twinkle, to sparkle", pos:"verb", gender:null,
     note:"반짝 (sparkle) + 이다.\nTo emit or reflect light intermittently.",
     example:"A: 눈이 반짝이는 게 뭔가 기대되나 봐.\nB: 맞아, 너무 기대돼!",
     exampleSrc:"A: Your eyes are twinkling, you must be excited.\nB: You are right, I am so excited!",
     funFact:"반짝이다 vs. 반짝거리다: both mean sparkle, but -이다 is a single or gentle sparkle, -거리다 is continuous."},

    {type:"teach", trg:"받침", src:"support, base; final consonant (in Hangul)", pos:"noun", gender:null,
     note:"받다 (receive/support) + 침 (nominalizer).\nSomething that supports from below.",
     example:"A: 한글에서 받침이 어려워요.\nB: 연습하면 금방 익숙해져요.",
     exampleSrc:"A: Final consonants in Hangul are difficult.\nB: You will get used to them quickly with practice.",
     funFact:"In Hangul, 받침 is the bottom consonant: 한 has ㄴ as 받침. Up to 2 consonants can stack as 받침 (e.g., 읽)."},

    {type:"teach", trg:"발걸음", src:"footstep, step, pace", pos:"noun", gender:null,
     note:"발 (foot) + 걸음 (step).\nThe act of stepping or walking.",
     example:"A: 발걸음을 재촉해야 해.\nB: 늦겠다, 빨리 가자!",
     exampleSrc:"A: We need to quicken our steps.\nB: We will be late, let us hurry!",
     funFact:"첫 발걸음 (first step) is used metaphorically: 성공의 첫 발걸음 (the first step toward success)."},

    {type:"teach", trg:"발길", src:"one's steps, direction of walking", pos:"noun", gender:null,
     note:"발 (foot) + 길 (path).\nThe direction one walks or the act of walking away.",
     example:"A: 발길이 떨어지지 않아.\nB: 그만큼 좋은 곳이었나 봐.",
     exampleSrc:"A: I cannot bring myself to leave.\nB: It must have been that good of a place.",
     funFact:"발길이 떨어지지 않다 (feet will not leave) and 발길을 돌리다 (turn one's steps away) are common expressions."},

    {type:"teach", trg:"발끝", src:"tip of the toe, tiptoe", pos:"noun", gender:null,
     note:"발 (foot) + 끝 (tip/end).\nThe very end of one's toes.",
     example:"A: 발끝으로 서면 키가 좀 더 커 보여.\nB: 그래도 몇 센티밖에 안 돼.",
     exampleSrc:"A: Standing on tiptoe makes you look a bit taller.\nB: Still, it is only a few centimeters.",
     funFact:"끝 compounds mark the tip of body parts: 손끝 (fingertip), 발끝 (toe tip), 코끝 (tip of nose)."},

    {type:"mc",
     q:"'발길이 떨어지지 않는다'는 무슨 뜻인가요?",
     opts:["너무 좋아서 떠나기 싫다","발이 아파서 걸을 수 없다","길이 막혀서 갈 수 없다","발을 다쳐서 움직일 수 없다"],
     ans:"너무 좋아서 떠나기 싫다",
     hint:"This expression literally means 'one's feet will not leave,' describing reluctance to depart."},

    {type:"teach", trg:"발달되다", src:"to be developed, to advance", pos:"verb", gender:null,
     note:"발달 (development) + 되다 (passive).\nSomething becomes more advanced.",
     example:"A: 기술이 빠르게 발달되고 있어요.\nB: AI 분야가 특히 그렇죠.",
     exampleSrc:"A: Technology is advancing rapidly.\nB: The AI field especially.",
     funFact:"From Hanja 發達. 아동 발달 (child development), 근육 발달 (muscle development), 두뇌 발달 (brain development)."},

    {type:"teach", trg:"발등", src:"top of the foot, instep", pos:"noun", gender:null,
     note:"발 (foot) + 등 (back/top).\nThe upper surface of the foot.",
     example:"A: 발등에 불이 떨어졌어요.\nB: 급한 일이 생겼구나.",
     exampleSrc:"A: Fire fell on my instep (I am in an urgent situation).\nB: So something urgent came up.",
     funFact:"발등에 불이 떨어지다 (fire falls on the instep) is a famous idiom meaning a crisis is imminent."},

    {type:"teach", trg:"발레", src:"ballet", pos:"noun", gender:null,
     note:"Loanword from French 'ballet.'\nClassical dance performed on stage.",
     example:"A: 어릴 때 발레를 배웠어.\nB: 멋지다! 지금도 할 수 있어?",
     exampleSrc:"A: I learned ballet when I was young.\nB: Cool! Can you still do it?",
     funFact:"Korea's National Ballet Company performs at the Seoul Arts Center. 발레리나 (ballerina) is well-known in Korean."},

    {type:"teach", trg:"발목", src:"ankle", pos:"noun", gender:null,
     note:"발 (foot) + 목 (neck/joint).\nThe joint connecting foot to leg.",
     example:"A: 운동하다가 발목을 다쳤어.\nB: 얼음을 대야 해.",
     exampleSrc:"A: I hurt my ankle while exercising.\nB: You should put ice on it.",
     funFact:"발목을 잡다 (to grab someone's ankle) idiomatically means to hold someone back or hinder them."},

    {type:"teach", trg:"발바닥", src:"sole of the foot", pos:"noun", gender:null,
     note:"발 (foot) + 바닥 (floor/bottom).\nThe bottom surface of the foot.",
     example:"A: 모래사장에서 발바닥이 뜨거워!\nB: 신발을 신고 걸어.",
     exampleSrc:"A: The soles of my feet are burning on the sandy beach!\nB: Walk with shoes on.",
     funFact:"Korean foot massage (발 마사지) focuses on 발바닥 pressure points, believed to connect to all body organs."},

    {type:"teach", trg:"발음하다", src:"to pronounce", pos:"verb", gender:null,
     note:"Sino-Korean. 發 (emit) + 音 (sound) + 하다.\nTo produce speech sounds.",
     example:"A: 이 단어를 어떻게 발음해요?\nB: 천천히 따라 해 보세요.",
     exampleSrc:"A: How do you pronounce this word?\nB: Try repeating it slowly.",
     funFact:"From Hanja 發音. 발음 is a constant concern for Korean learners. Korean pronunciation rules (음운 규칙) are complex."},

    {type:"fb",
     s:"해변에서 {1}이 뜨거워서 뛰어다녔다.",
     a:["발바닥"],
     opts:["발바닥","발목","발등","발끝"],
     hint:"This compound noun means the bottom surface of the foot that touches the ground.",
     sSrc:"My {1} were so hot on the beach that I ran around."},

    {type:"teach", trg:"발자국", src:"footprint", pos:"noun", gender:null,
     note:"발 (foot) + 자국 (mark/trace).\nThe mark left by a foot on the ground.",
     example:"A: 눈 위에 발자국이 보여.\nB: 누가 아침에 지나간 거야.",
     exampleSrc:"A: I can see footprints in the snow.\nB: Someone passed by in the morning.",
     funFact:"자국 marks traces of things: 바퀴 자국 (tire tracks), 상처 자국 (scar), 연필 자국 (pencil mark)."},

    {type:"teach", trg:"발전되다", src:"to be developed, to progress", pos:"verb", gender:null,
     note:"발전 (development) + 되다 (passive).\nSomething advances or improves.",
     example:"A: 의학이 많이 발전됐어요.\nB: 예전에 치료 못하던 병도 치료해요.",
     exampleSrc:"A: Medicine has developed a lot.\nB: They can cure diseases that were untreatable before.",
     funFact:"발전 vs. 발달: 발전 (發展) emphasizes progress/growth. 발달 (發達) emphasizes reaching full capacity."},

    {type:"teach", trg:"발톱", src:"toenail", pos:"noun", gender:null,
     note:"발 (foot) + 톱 (nail/claw).\nThe nail on a toe.",
     example:"A: 발톱을 깎아야겠다.\nB: 발톱깎이 욕실에 있어.",
     exampleSrc:"A: I need to cut my toenails.\nB: The nail clipper is in the bathroom.",
     funFact:"The pair: 손톱 (fingernail) and 발톱 (toenail). 톱 means both 'claw' and 'saw' depending on context."},

    {type:"teach", trg:"발휘하다", src:"to demonstrate, to display (ability)", pos:"verb", gender:null,
     note:"Sino-Korean. 發 (emit) + 揮 (wave) + 하다.\nTo showcase one's skills or potential.",
     example:"A: 실력을 마음껏 발휘하세요.\nB: 최선을 다하겠습니다.",
     exampleSrc:"A: Demonstrate your skills to the fullest.\nB: I will do my best.",
     funFact:"From Hanja 發揮. Common pairings: 능력을 발휘하다 (display ability), 실력을 발휘하다 (show skills)."},

    {type:"teach", trg:"밝아지다", src:"to brighten, to become light", pos:"verb", gender:null,
     note:"밝다 (bright) + 아지다 (become).\nGrowing lighter or more cheerful.",
     example:"A: 날이 밝아지기 시작했어.\nB: 벌써 새벽 5시네.",
     exampleSrc:"A: The day is starting to brighten.\nB: It is already 5 AM.",
     funFact:"Used figuratively: 표정이 밝아지다 (expression brightens), 미래가 밝아지다 (future becomes brighter)."},

    {type:"mc",
     q:"'발휘하다'는 무엇을 할 때 쓰나요?",
     opts:["발음할 때","능력이나 실력을 보여줄 때","발을 씻을 때","발견할 때"],
     ans:"능력이나 실력을 보여줄 때",
     hint:"This formal verb means to demonstrate or display one's abilities, skills, or potential."},

    {type:"teach", trg:"밝혀내다", src:"to uncover, to find out, to reveal", pos:"verb", gender:null,
     note:"밝히다 (reveal) + 내다 (produce).\nTo actively discover hidden truth.",
     example:"A: 경찰이 범인의 정체를 밝혀냈어요.\nB: 수사가 오래 걸렸나 봐요.",
     exampleSrc:"A: The police uncovered the criminal's identity.\nB: The investigation must have taken a long time.",
     funFact:"밝혀내다 (active discovery) vs. 밝혀지다 (passive revelation). The -내다/-지다 pair shows agent vs. no agent."},

    {type:"teach", trg:"밝혀지다", src:"to be revealed, to come to light", pos:"verb", gender:null,
     note:"밝히다 (reveal) + 지다 (passive).\nSomething hidden becomes known.",
     example:"A: 진실이 마침내 밝혀졌어요.\nB: 오래 걸렸지만 다행이에요.",
     exampleSrc:"A: The truth was finally revealed.\nB: It took a long time, but that is fortunate.",
     funFact:"Very common in news: 원인이 밝혀지다 (cause is revealed), 사실이 밝혀지다 (facts come to light)."},

    {type:"teach", trg:"밤", src:"night; chestnut", pos:"noun", gender:null,
     note:"Native Korean word with two meanings.\n밤 (night) and 밤 (chestnut).",
     example:"A: 밤에 산책하는 걸 좋아해.\nB: 시원하고 조용해서 좋지.",
     exampleSrc:"A: I like taking walks at night.\nB: It is nice because it is cool and quiet.",
     funFact:"밤 as chestnut: 군밤 (roasted chestnuts) is a beloved Korean winter street snack, sold from carts."},

    {type:"teach", trg:"밤낮", src:"day and night, around the clock", pos:"noun", gender:null,
     note:"밤 (night) + 낮 (day).\nAll hours without stopping.",
     example:"A: 밤낮으로 일하면 안 돼요.\nB: 건강이 제일 중요하죠.",
     exampleSrc:"A: You should not work day and night.\nB: Health is the most important.",
     funFact:"밤낮없이 (without distinguishing day and night) means working tirelessly, 24/7."},

    {type:"fb",
     s:"오랜 수사 끝에 범인의 정체가 {1}.",
     a:["밝혀졌다"],
     opts:["밝혀졌다","밝아졌다","발휘됐다","발전됐다"],
     hint:"This passive verb means 'was revealed' or 'came to light,' often used for truth or facts.",
     sSrc:"After a long investigation, the criminal's identity was {1}."},

    {type:"match", pairs:[
      {trg:"발걸음", src:"footstep"},
      {trg:"발음하다", src:"to pronounce"},
      {trg:"밝혀내다", src:"to uncover"},
      {trg:"밤낮", src:"day and night"}
    ]}
  ]
};
export default LESSON_15;
