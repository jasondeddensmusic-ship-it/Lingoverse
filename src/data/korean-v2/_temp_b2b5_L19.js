// Korean B2. Batch 5, Lesson 19: Hands and Traditions
// Words: 손발, 손뼉, 손수, 손수건, 손쉽다, 손실, 손자, 손잡다, 손잡이, 손질, 손질하다, 손톱, 손해, 솜, 솜씨, 솟다, 송아지, 송이, 송편, 쇠

const LESSON_19 = {
  id:"kov2_b2b5_l19", title:"손과 전통", icon:"🧶", xp:15, board:true,
  steps:[
    {type:"intro", title:"손과 전통",
     desc:"Learn vocabulary about hands, craftsmanship, loss, and Korean traditions. This lesson covers body-related compounds and cultural vocabulary for holidays and nature.",
     goals:["Master 20 words about hands, skill, and traditions","Understand compound nouns with 손 (hand)","Use vocabulary for traditional Korean food and culture"]},

    {type:"teach", trg:"손발", src:"hands and feet, coordination", pos:"noun", gender:null,
     note:"손 (hand) + 발 (foot).\nLiterally hands and feet. Figuratively, coordination or teamwork.",
     example:"A: 우리 팀은 손발이 잘 맞아.\nB: 오래 같이 일해서 그런 것 같아.",
     exampleSrc:"A: Our team coordinates well.\nB: I think it is because we have worked together for a long time.",
     funFact:"손발이 맞다 (hands and feet match) means perfect teamwork. 손발이 안 맞다 means poor coordination."},

    {type:"teach", trg:"손뼉", src:"palms (for clapping)", pos:"noun", gender:null,
     note:"손 (hand) + 뼉 (flat surface).\nThe flat of the hands used for clapping.",
     example:"A: 손뼉을 치며 환영했어.\nB: 분위기가 좋았겠다.",
     exampleSrc:"A: They welcomed with clapping.\nB: The atmosphere must have been good.",
     funFact:"손뼉을 치다 (to clap hands) is the standard expression. 박수 치다 is the more common daily equivalent."},

    {type:"teach", trg:"손수", src:"by oneself, with one's own hands", pos:"adv", gender:null,
     note:"손 (hand) + 수 (self).\nDoing something personally without help.",
     example:"A: 이 케이크를 손수 만들었어?\nB: 응, 레시피 보고 직접 만들었어.",
     exampleSrc:"A: Did you make this cake yourself?\nB: Yes, I followed a recipe and made it myself.",
     funFact:"손수 emphasizes personal effort and craftsmanship. 손수 만든 (handmade) carries warmth and sincerity."},

    {type:"teach", trg:"손수건", src:"handkerchief", pos:"noun", gender:null,
     note:"손수 (by hand) + 건 (cloth).\nA small cloth for wiping hands or face.",
     example:"A: 손수건 있어? 땀이 많이 나.\nB: 여기, 깨끗한 거 하나 있어.",
     exampleSrc:"A: Do you have a handkerchief? I am sweating a lot.\nB: Here, I have a clean one.",
     funFact:"In old Korean dramas, giving someone a 손수건 was a romantic gesture, like giving a token of affection."},

    {type:"teach", trg:"손쉽다", src:"to be easy, to be simple", pos:"adj", gender:null,
     note:"손 (hand) + 쉽다 (easy).\nSomething that can be done easily by hand.",
     example:"A: 이 요리는 손쉽게 만들 수 있어.\nB: 좋아, 오늘 해 볼까?",
     exampleSrc:"A: This dish can be made easily.\nB: Great, shall we try it today?",
     funFact:"손쉽게 (easily) is the adverb form. 손쉬운 방법 (an easy method) appears often in how-to guides."},

    {type:"teach", trg:"손실", src:"loss, damage", pos:"noun", gender:null,
     note:"Sino-Korean. 損 (damage) + 失 (lose).\nFinancial or material loss.",
     example:"A: 이번 투자에서 큰 손실이 났어.\nB: 다음에는 더 신중하게 하자.",
     exampleSrc:"A: We had a big loss from this investment.\nB: Let's be more careful next time.",
     funFact:"손실 is primarily financial. 손해 is broader (includes non-financial loss). Both are common in business Korean."},

    {type:"fb",
     s:"태풍으로 인해 농작물의 {1}이 크다.",
     a:["손실"],
     opts:["손실","손질","손해","손목"],
     hint:"Which noun means loss or damage, specifically referring to material or economic harm from the typhoon?",
     sSrc:"The {1} of crops due to the typhoon is significant."},

    {type:"teach", trg:"손자", src:"grandson", pos:"noun", gender:null,
     note:"Sino-Korean. 孫 (grandchild) + 子 (son).\nA son's or daughter's son.",
     example:"A: 손자가 벌써 중학생이야.\nB: 시간이 참 빠르다.",
     exampleSrc:"A: My grandson is already in middle school.\nB: Time really passes quickly.",
     funFact:"Korean grandparents often use 손자, 손녀 (grandson, granddaughter) together as 손주 (grandchildren)."},

    {type:"teach", trg:"손잡다", src:"to hold hands, to join hands", pos:"verb", gender:null,
     note:"손 (hand) + 잡다 (grab).\nPhysically or figuratively joining hands.",
     example:"A: 두 회사가 손잡고 협력하기로 했어.\nB: 좋은 소식이네.",
     exampleSrc:"A: The two companies decided to join hands and cooperate.\nB: That is good news.",
     funFact:"손잡다 is used both literally (holding hands) and figuratively (forming a partnership or alliance)."},

    {type:"teach", trg:"손잡이", src:"handle, knob, grip", pos:"noun", gender:null,
     note:"손 (hand) + 잡다 (grab) + 이 (thing).\nThe part you grab with your hand.",
     example:"A: 문 손잡이가 고장 났어.\nB: 새 것으로 교체해야겠다.",
     exampleSrc:"A: The door handle is broken.\nB: We need to replace it with a new one.",
     funFact:"손잡이 appears on doors, cups, bags. 컵 손잡이 (cup handle) is a distinctly Korean compound."},

    {type:"teach", trg:"손질", src:"trimming, grooming, preparation", pos:"noun", gender:null,
     note:"손 (hand) + 질 (action).\nThe act of preparing or grooming with hands.",
     example:"A: 생선 손질을 잘 해야 맛있어.\nB: 비늘부터 제거하자.",
     exampleSrc:"A: Fish needs to be prepared well to taste good.\nB: Let's start by removing the scales.",
     funFact:"손질 is used for food prep (생선 손질), plant care (정원 손질), and grooming (머리 손질)."},

    {type:"teach", trg:"손질하다", src:"to trim, to groom, to prepare", pos:"verb", gender:null,
     note:"손질 + 하다.\nActively preparing or grooming something.",
     example:"A: 정원을 손질하고 있었어.\nB: 깔끔해졌네, 잘했어.",
     exampleSrc:"A: I was grooming the garden.\nB: It looks neat, well done.",
     funFact:"재료를 손질하다 (to prepare ingredients) is a fundamental cooking term in Korean recipe videos."},

    {type:"teach", trg:"손톱", src:"fingernail", pos:"noun", gender:null,
     note:"손 (hand) + 톱 (claw/nail).\nThe nail on a finger.",
     example:"A: 손톱이 너무 길어.\nB: 손톱깎이 줄까?",
     exampleSrc:"A: Your fingernails are too long.\nB: Shall I give you the nail clipper?",
     funFact:"손톱깎이 (nail clipper) is a Korean household essential. 발톱 (toenail) uses the same pattern with 발 (foot)."},

    {type:"teach", trg:"손해", src:"loss, harm, disadvantage", pos:"noun", gender:null,
     note:"Sino-Korean. 損 (damage) + 害 (harm).\nBeing worse off than before.",
     example:"A: 이 거래에서 손해를 봤어.\nB: 얼마나 손해 본 거야?",
     exampleSrc:"A: I took a loss on this deal.\nB: How much did you lose?",
     funFact:"손해를 보다 (to see a loss) is the standard expression. 손해 배상 means compensation for damages."},

    {type:"mc",
     q:"두 회사가 협력하기로 한 것을 표현할 때 적절한 말은?",
     opts:["손잡고 협력하다","손질하고 협력하다","손해 보고 협력하다","손톱 깎고 협력하다"],
     ans:"손잡고 협력하다",
     hint:"Which expression uses the metaphor of joining hands to describe companies forming a partnership?"},

    {type:"teach", trg:"솜", src:"cotton", pos:"noun", gender:null,
     note:"Native Korean word.\nSoft, fluffy fiber material.",
     example:"A: 이 이불에 솜이 많이 들어 있어.\nB: 그래서 따뜻한 거구나.",
     exampleSrc:"A: This blanket has a lot of cotton in it.\nB: So that is why it is warm.",
     funFact:"솜사탕 (cotton candy) literally means 'cotton sugar.' 솜이불 is a cotton-filled blanket, a Korean winter essential."},

    {type:"teach", trg:"솜씨", src:"skill, craftsmanship, dexterity", pos:"noun", gender:null,
     note:"솜 (cotton/skill) + 씨 (seed/manner).\nHand skill or artistic ability.",
     example:"A: 요리 솜씨가 대단하다.\nB: 오랫동안 연습한 덕분이야.",
     exampleSrc:"A: Your cooking skill is impressive.\nB: It is thanks to long practice.",
     funFact:"솜씨 좋다 (to have good skills) is a warm compliment for handwork: cooking, sewing, crafts."},

    {type:"teach", trg:"솟다", src:"to rise, to surge, to spring up", pos:"verb", gender:null,
     note:"Native Korean verb.\nSomething rising upward from below.",
     example:"A: 해가 솟아오르고 있어.\nB: 일출이 정말 아름답다.",
     exampleSrc:"A: The sun is rising.\nB: The sunrise is truly beautiful.",
     funFact:"용기가 솟다 (courage rises) and 힘이 솟다 (energy rises) use this verb for emotional surging."},

    {type:"teach", trg:"송아지", src:"calf (young cow)", pos:"noun", gender:null,
     note:"Native Korean word.\nA baby cow.",
     example:"A: 송아지가 태어났어!\nB: 건강한 거야?",
     exampleSrc:"A: A calf was born!\nB: Is it healthy?",
     funFact:"Korean proverb: 송아지 엉덩이에 쥐 (a mouse on a calf's rear) means something tiny and insignificant."},

    {type:"teach", trg:"송이", src:"cluster, bunch (counter for mushrooms/flowers)", pos:"noun", gender:null,
     note:"Native Korean counter word.\nUsed for mushrooms, flowers, and grapes.",
     example:"A: 장미 한 송이 사 줄까?\nB: 좋아, 빨간 장미로 해 줘.",
     exampleSrc:"A: Shall I buy you a rose?\nB: Sure, make it a red rose.",
     funFact:"송이버섯 (pine mushroom, matsutake) is one of Korea's most prized and expensive fungi, costing over $500/kg."},

    {type:"teach", trg:"송편", src:"rice cake (Chuseok traditional food)", pos:"noun", gender:null,
     note:"송 (pine) + 편 (rice cake).\nHalf-moon shaped rice cakes steamed on pine needles.",
     example:"A: 추석에 송편을 만들었어.\nB: 안에 뭘 넣었어?",
     exampleSrc:"A: I made songpyeon for Chuseok.\nB: What did you put inside?",
     funFact:"Making 송편 is a Chuseok tradition. The saying goes: 송편을 예쁘게 만들면 예쁜 아기를 낳는다 (pretty songpyeon, pretty baby)."},

    {type:"teach", trg:"쇠", src:"iron, metal", pos:"noun", gender:null,
     note:"Native Korean word.\nThe metal iron, or metal in general.",
     example:"A: 이 문은 쇠로 만들었어.\nB: 튼튼하겠다.",
     exampleSrc:"A: This door is made of iron.\nB: It must be sturdy.",
     funFact:"쇠 appears in many compounds: 쇠고기 (beef, literally 'iron meat'), 쇠사슬 (iron chain), 쇠퇴 (decline)."},

    {type:"fb",
     s:"추석 때 가족과 함께 {1}을 만들었다.",
     a:["송편"],
     opts:["송편","솜사탕","소시지","설렁탕"],
     hint:"Which traditional rice cake is made during Chuseok, steamed on pine needles in a half-moon shape?",
     sSrc:"During Chuseok, I made {1} together with my family."},

    {type:"match", pairs:[
      {trg:"솜씨", src:"craftsmanship"},
      {trg:"송편", src:"Chuseok rice cake"},
      {trg:"손해", src:"loss"},
      {trg:"손수", src:"by oneself"}
    ]}
  ]
};
export default LESSON_19;
