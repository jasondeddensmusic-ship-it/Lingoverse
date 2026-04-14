// Korean B2 — Batch 5, Lesson 18: Inner Feelings and Hands
// Words: 소재, 소중하다, 소중히, 소지품, 소질, 소포, 소프트웨어, 소형, 소홀히, 소화, 소화하다, 속마음, 속삭이다, 속상하다, 속옷, 속이다, 손길, 손녀, 손등, 손목

const LESSON_18 = {
  id:"kov2_b2b5_l18", title:"속마음과 손길", icon:"🤲", xp:15, board:true,
  steps:[
    {type:"intro", title:"속마음과 손길",
     desc:"Learn vocabulary about importance, inner feelings, deception, and hand-related words. This lesson covers emotional vocabulary and body part compounds.",
     goals:["Master 20 words about value, inner emotions, and hands","Understand compound nouns with 속 (inside) and 손 (hand)","Express emotional states and physical descriptions"]},

    {type:"teach", trg:"소재", src:"material, subject matter, location", pos:"noun", gender:null,
     note:"Sino-Korean. 素 (element) + 材 (material).\nRaw material or the subject of a story.",
     example:"A: 이 영화의 소재가 뭐야?\nB: 실화를 바탕으로 한 소재야.",
     exampleSrc:"A: What is the subject matter of this movie?\nB: It is based on a true story.",
     funFact:"소재 has three meanings: material (fabric), subject matter (story), and location (소재지). Context decides."},

    {type:"teach", trg:"소중하다", src:"to be precious, to be valuable", pos:"adj", gender:null,
     note:"Sino-Korean. 所 (that which) + 重 (heavy/important).\nTruly precious and worth protecting.",
     example:"A: 가족이 가장 소중해.\nB: 나도 같은 생각이야.",
     exampleSrc:"A: Family is the most precious thing.\nB: I think the same.",
     funFact:"소중한 사람 (precious person) is a heartfelt way to describe someone important to you in Korean."},

    {type:"teach", trg:"소중히", src:"preciously, dearly, with care", pos:"adv", gender:null,
     note:"소중하다 + 히 (adverb suffix).\nTreating something with great care and value.",
     example:"A: 이 선물을 소중히 간직할게.\nB: 마음에 들어서 다행이다.",
     exampleSrc:"A: I will treasure this gift dearly.\nB: I am glad you like it.",
     funFact:"소중히 여기다 (to regard as precious) is the most common pattern. 소중히 다루다 means to handle with care."},

    {type:"teach", trg:"소지품", src:"personal belongings", pos:"noun", gender:null,
     note:"소지 (possess/carry) + 품 (goods).\nItems one carries on their person.",
     example:"A: 소지품을 잘 챙기세요.\nB: 네, 확인하고 갈게요.",
     exampleSrc:"A: Please keep track of your personal belongings.\nB: Yes, I will check before leaving.",
     funFact:"소지품 검사 (belongings inspection) happens at airport security, concerts, and government buildings in Korea."},

    {type:"teach", trg:"소질", src:"talent, aptitude", pos:"noun", gender:null,
     note:"Sino-Korean. 素 (element) + 質 (quality).\nNatural ability or gift for something.",
     example:"A: 음악에 소질이 있어.\nB: 악기를 배워 보는 건 어때?",
     exampleSrc:"A: You have talent for music.\nB: How about learning an instrument?",
     funFact:"소질이 있다/없다 (to have/lack talent) is a common way Koreans discuss natural abilities."},

    {type:"teach", trg:"소포", src:"package, parcel", pos:"noun", gender:null,
     note:"Sino-Korean. 小 (small) + 包 (wrap).\nA wrapped item sent by mail.",
     example:"A: 소포가 도착했어.\nB: 뭘 주문한 거야?",
     exampleSrc:"A: A package arrived.\nB: What did you order?",
     funFact:"택배 (delivery) is more common in modern Korean than 소포 (parcel). But 소포 is still used for postal packages."},

    {type:"fb",
     s:"이 추억을 {1} 간직하겠습니다.",
     a:["소중히"],
     opts:["소중히","소홀히","소극적으로","소박하게"],
     hint:"Which adverb means preciously or dearly, expressing how one will treasure a memory?",
     sSrc:"I will {1} treasure this memory."},

    {type:"teach", trg:"소프트웨어", src:"software", pos:"noun", gender:null,
     note:"Loanword from English 'software.'\nComputer programs and applications.",
     example:"A: 새 소프트웨어를 개발하고 있어.\nB: 어떤 종류의 프로그램이야?",
     exampleSrc:"A: I am developing new software.\nB: What kind of program is it?",
     funFact:"Korea's software industry is growing rapidly. 하드웨어 (hardware) + 소프트웨어 form the tech vocabulary pair."},

    {type:"teach", trg:"소형", src:"small-sized, compact", pos:"noun", gender:null,
     note:"Sino-Korean. 小 (small) + 形 (form).\nSmaller than standard size.",
     example:"A: 소형 차가 주차하기 편해.\nB: 유지비도 적게 들지.",
     exampleSrc:"A: Compact cars are easy to park.\nB: Maintenance costs are lower too.",
     funFact:"소형, 중형, 대형 (small, medium, large) classify everything from cars to apartments to stores in Korea."},

    {type:"teach", trg:"소홀히", src:"negligently, carelessly", pos:"adv", gender:null,
     note:"소홀하다 (negligent) + 히 (adverb).\nDoing something without proper attention.",
     example:"A: 건강을 소홀히 하면 안 돼.\nB: 맞아, 후회하기 전에 관리해야 해.",
     exampleSrc:"A: You must not neglect your health.\nB: Right, you should take care of it before you regret.",
     funFact:"소홀히 하다 (to neglect) is a common warning. 소홀히 다루다 means to handle carelessly."},

    {type:"teach", trg:"소화", src:"digestion", pos:"noun", gender:null,
     note:"Sino-Korean. 消 (dissolve) + 化 (transform).\nThe body breaking down food.",
     example:"A: 소화가 안 돼서 배가 아파.\nB: 소화제 먹어 봐.",
     exampleSrc:"A: I have indigestion so my stomach hurts.\nB: Try taking a digestive medicine.",
     funFact:"소화제 (digestive medicine) is a Korean pharmacy staple. 까스활명수 is the most famous brand."},

    {type:"teach", trg:"소화하다", src:"to digest, to handle/manage", pos:"verb", gender:null,
     note:"소화 + 하다.\nTo digest food or to handle a task/role.",
     example:"A: 이 역할을 잘 소화하고 있어.\nB: 연기력이 대단해.",
     exampleSrc:"A: You are handling this role well.\nB: Your acting ability is impressive.",
     funFact:"소화하다 is used figuratively for actors: 역할을 소화하다 (to digest/handle a role) means to play it convincingly."},

    {type:"teach", trg:"속마음", src:"inner thoughts, true feelings", pos:"noun", gender:null,
     note:"속 (inside) + 마음 (heart/mind).\nWhat someone really thinks or feels inside.",
     example:"A: 속마음을 말해 줘.\nB: 사실 좀 서운했어.",
     exampleSrc:"A: Tell me your true feelings.\nB: Actually, I was a bit hurt.",
     funFact:"Korean culture values 눈치 (reading others' feelings) partly because people rarely share 속마음 directly."},

    {type:"teach", trg:"속삭이다", src:"to whisper", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo speak very softly and quietly.",
     example:"A: 귀에 속삭이듯이 말했어.\nB: 무슨 비밀이야?",
     exampleSrc:"A: They spoke as if whispering in my ear.\nB: What secret is it?",
     funFact:"속삭이다 is romantic and poetic. K-drama dialogue frequently uses 속삭이다 for intimate scenes."},

    {type:"teach", trg:"속상하다", src:"to feel upset, to feel distressed", pos:"adj", gender:null,
     note:"속 (inside) + 상하다 (be damaged).\nFeeling hurt or troubled inside.",
     example:"A: 시험에 떨어져서 속상해.\nB: 다음에 더 잘할 수 있어.",
     exampleSrc:"A: I feel upset because I failed the exam.\nB: You can do better next time.",
     funFact:"속상하다 literally means your insides are damaged. It captures emotional distress more vividly than 'upset.'"},

    {type:"mc",
     q:"시험에 떨어져서 마음이 아플 때 적절한 표현은?",
     opts:["속상하다","속삭이다","속이다","소박하다"],
     ans:"속상하다",
     hint:"Which adjective describes feeling upset or distressed inside, literally meaning 'insides are damaged'?"},

    {type:"teach", trg:"속옷", src:"underwear", pos:"noun", gender:null,
     note:"속 (inside) + 옷 (clothes).\nClothing worn under outer garments.",
     example:"A: 속옷을 사러 가야 해.\nB: 백화점 세일 중이래.",
     exampleSrc:"A: I need to go buy underwear.\nB: I heard the department store is having a sale.",
     funFact:"겉옷 (outerwear) vs 속옷 (underwear). The 속/겉 (inside/outside) pattern appears in many Korean compounds."},

    {type:"teach", trg:"속이다", src:"to deceive, to trick", pos:"verb", gender:null,
     note:"속 (inside) + 이다 (make).\nTo manipulate someone's perception falsely.",
     example:"A: 사람을 속이면 안 돼.\nB: 맞아, 신뢰가 가장 중요해.",
     exampleSrc:"A: You should not deceive people.\nB: Right, trust is the most important thing.",
     funFact:"눈을 속이다 (to deceive the eyes) means an optical illusion. 속이다 has broad usage beyond just lying."},

    {type:"teach", trg:"손길", src:"touch, hand (figurative)", pos:"noun", gender:null,
     note:"손 (hand) + 길 (path).\nThe reaching out of a hand, often caring or helpful.",
     example:"A: 따뜻한 손길이 필요한 사람들이 많아.\nB: 우리도 도울 수 있는 방법을 찾자.",
     exampleSrc:"A: Many people need a warm helping hand.\nB: Let's find ways we can help too.",
     funFact:"손길이 닿다 (for a hand to reach) means receiving care or attention. Very poetic and warm."},

    {type:"teach", trg:"손녀", src:"granddaughter", pos:"noun", gender:null,
     note:"Sino-Korean. 孫 (grandchild) + 女 (female).\nA son's or daughter's daughter.",
     example:"A: 손녀가 올해 학교에 입학해.\nB: 벌써? 시간이 빠르다.",
     exampleSrc:"A: My granddaughter starts school this year.\nB: Already? Time passes quickly.",
     funFact:"손녀 (granddaughter) and 손자 (grandson) together are 손주 (grandchildren). Korean grandparents dote on 손주."},

    {type:"teach", trg:"손등", src:"back of the hand", pos:"noun", gender:null,
     note:"손 (hand) + 등 (back).\nThe top surface of the hand.",
     example:"A: 손등에 상처가 있네.\nB: 어제 요리하다가 다쳤어.",
     exampleSrc:"A: There is a wound on the back of your hand.\nB: I got hurt while cooking yesterday.",
     funFact:"손등 (back of hand) vs 손바닥 (palm). 손등을 때리다 used to be a classroom punishment in old Korea."},

    {type:"teach", trg:"손목", src:"wrist", pos:"noun", gender:null,
     note:"손 (hand) + 목 (neck/joint).\nThe joint connecting hand to arm.",
     example:"A: 손목이 아파서 병원에 갔어.\nB: 컴퓨터를 너무 많이 써서 그래.",
     exampleSrc:"A: I went to the hospital because my wrist hurts.\nB: It is because you use the computer too much.",
     funFact:"손목시계 (wristwatch) uses this word. 손목 터널 증후군 is carpal tunnel syndrome."},

    {type:"fb",
     s:"사람을 {1} 안 돼. 정직이 제일 중요해.",
     a:["속이면"],
     opts:["속이면","속상하면","속삭이면","소화하면"],
     hint:"Which verb means to deceive or trick, used here to warn against dishonesty?",
     sSrc:"You must not {1} people. Honesty is the most important."},

    {type:"match", pairs:[
      {trg:"소중하다", src:"to be precious"},
      {trg:"속마음", src:"inner thoughts"},
      {trg:"속상하다", src:"to feel upset"},
      {trg:"손목", src:"wrist"}
    ]}
  ]
};
export default LESSON_18;
