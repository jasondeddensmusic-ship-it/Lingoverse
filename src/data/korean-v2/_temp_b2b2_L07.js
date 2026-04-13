// Korean B2 — Batch 2, Lesson 7: Flight and Sharpness
// Words: 날리다, 날아다니다, 납득하다, 낭비, 낮아지다, 내과, 내다보다, 내달, 내려놓다, 내려다보다, 내려지다, 내버리다, 내보내다, 내부, 내쉬다, 내외, 내용물, 내적, 내주다, 내후년

const LESSON_7 = {
  id:"kov2_b2b2_l7", title:"안과 밖", icon:"🏥", xp:15, board:true,
  steps:[
    {type:"intro", title:"안과 밖",
     desc:"Learn words about inner and outer spaces, medical terms, and time expressions. Many of these use the prefix 내 (inside) in compound forms.",
     goals:["Master 20 words with 내 (inside) compounds and related vocabulary","Understand directional compound verbs","Learn medical and time-related terms"]},

    {type:"teach", trg:"날리다", src:"to blow away, to send flying; to gain fame", pos:"verb", gender:null,
     note:"Causative of 날다 (fly). To make something fly.\nAlso: to become famous.",
     example:"A: 바람이 모자를 날렸어요.\nB: 잡을 수가 없었어요.",
     exampleSrc:"A: The wind blew my hat away.\nB: I could not catch it.",
     funFact:"이름을 날리다 means 'to make a name for oneself.' The image of your name flying across the land."},

    {type:"teach", trg:"날아다니다", src:"to fly around, to flutter about", pos:"verb", gender:null,
     note:"날다 (fly) + 아 + 다니다 (go around).\nTo fly here and there repeatedly.",
     example:"A: 벌이 주위를 날아다녀요.\nB: 조심해, 쏠 수도 있어.",
     exampleSrc:"A: A bee is flying around nearby.\nB: Be careful, it might sting.",
     funFact:"The -다니다 suffix adds 'going around': 돌아다니다 (walk around), 떠돌아다니다 (wander around)."},

    {type:"teach", trg:"납득하다", src:"to be convinced, to understand and accept", pos:"verb", gender:null,
     note:"Sino-Korean. 納 (accept) + 得 (get) + 하다.\nTo truly accept something as reasonable.",
     example:"A: 설명을 듣고 납득하셨나요?\nB: 네, 이제 이해가 됩니다.",
     exampleSrc:"A: Were you convinced after hearing the explanation?\nB: Yes, I understand now.",
     funFact:"납득 is formal. It implies intellectual acceptance, not just understanding. Common in legal and business contexts."},

    {type:"teach", trg:"낭비", src:"waste, extravagance", pos:"noun", gender:null,
     note:"Sino-Korean. 浪 (wave/reckless) + 費 (spend).\nReckless spending of resources.",
     example:"A: 시간 낭비하지 마세요.\nB: 알겠어요, 바로 시작할게요.",
     exampleSrc:"A: Do not waste time.\nB: Okay, I will start right away.",
     funFact:"시간 낭비 (waste of time), 돈 낭비 (waste of money), 에너지 낭비 (waste of energy) are the top collocations."},

    {type:"teach", trg:"낮아지다", src:"to become lower, to decrease", pos:"verb", gender:null,
     note:"낮다 (low) + 아지다 (become).\nSomething gradually decreases or drops.",
     example:"A: 기온이 많이 낮아졌어요.\nB: 겨울이 다가오고 있나 봐요.",
     exampleSrc:"A: The temperature has dropped a lot.\nB: Winter must be approaching.",
     funFact:"Part of the -아지다 change pattern: 높아지다 (become higher), 낮아지다 (become lower). A natural pair."},

    {type:"teach", trg:"내과", src:"internal medicine department", pos:"noun", gender:null,
     note:"Sino-Korean. 內 (inside) + 科 (department).\nThe medical department for internal organs.",
     example:"A: 배가 아프면 내과에 가세요.\nB: 내과가 어디에 있어요?",
     exampleSrc:"A: If your stomach hurts, go to internal medicine.\nB: Where is the internal medicine department?",
     funFact:"Korean hospital departments use -과: 외과 (surgery), 내과 (internal), 피부과 (dermatology), 안과 (ophthalmology)."},

    {type:"mc",
     q:"'낭비'의 뜻으로 맞는 것은?",
     opts:["돈이나 시간을 헛되이 쓰는 것","돈을 잘 저축하는 것","물건을 정리하는 것","새 물건을 사는 것"],
     ans:"돈이나 시간을 헛되이 쓰는 것",
     hint:"Using money, time, or resources recklessly without good purpose. The opposite of saving."},

    {type:"teach", trg:"내다보다", src:"to look ahead, to foresee", pos:"verb", gender:null,
     note:"내다 (put out) + 보다 (look).\nTo look outward or into the future.",
     example:"A: 미래를 내다보는 안목이 있어요.\nB: 그래서 투자를 잘하시는 거군요.",
     exampleSrc:"A: You have the vision to look into the future.\nB: So that is why you invest well.",
     funFact:"내다보다 can be literal (look out a window) or figurative (foresee the future). Context decides."},

    {type:"teach", trg:"내달", src:"next month", pos:"noun", gender:null,
     note:"내 (coming) + 달 (month).\nThe month that follows the current one.",
     example:"A: 내달에 출장이 있어요.\nB: 어디로 가시나요?",
     exampleSrc:"A: I have a business trip next month.\nB: Where are you going?",
     funFact:"내달 is formal/written. Casual speech uses 다음 달. Compare: 내년 (next year), 내일 (tomorrow)."},

    {type:"teach", trg:"내려놓다", src:"to put down, to let go of", pos:"verb", gender:null,
     note:"내리다 (lower) + 어 + 놓다 (place).\nTo set something down, literally or figuratively.",
     example:"A: 짐을 여기 내려놓으세요.\nB: 감사합니다, 정말 무거웠어요.",
     exampleSrc:"A: Please put your luggage down here.\nB: Thank you, it was really heavy.",
     funFact:"마음을 내려놓다 (put down your heart) means to let go of worries. A popular mindfulness expression."},

    {type:"teach", trg:"내려다보다", src:"to look down at", pos:"verb", gender:null,
     note:"내리다 (descend) + 어 + 다 + 보다 (look).\nTo gaze downward from a higher position.",
     example:"A: 전망대에서 도시를 내려다봤어요.\nB: 경치가 어땠어요?",
     exampleSrc:"A: I looked down at the city from the observation deck.\nB: How was the view?",
     funFact:"내려다보다 vs 올려다보다 (look up at). These directional compound verbs add spatial precision."},

    {type:"fb",
     s:"전망대에서 도시를 {1}.",
     a:["내려다봤다"],
     opts:["내려다봤다","내다봤다","내려놓았다","내보냈다"],
     hint:"To gaze downward from a high vantage point at something below.",
     sSrc:"I {1} the city from the observation deck."},

    {type:"teach", trg:"내려지다", src:"to be issued, to be handed down", pos:"verb", gender:null,
     note:"내리다 (lower/issue) + 어지다 (become).\nA decision or order is issued from above.",
     example:"A: 판결이 내려졌나요?\nB: 네, 어제 최종 판결이 내려졌어요.",
     exampleSrc:"A: Has the verdict been handed down?\nB: Yes, the final verdict was issued yesterday.",
     funFact:"Used for official decisions: 명령이 내려지다 (order issued), 판결이 내려지다 (verdict handed down)."},

    {type:"teach", trg:"내버리다", src:"to throw away, to abandon", pos:"verb", gender:null,
     note:"내다 (put out) + 버리다 (discard).\nTo discard something completely.",
     example:"A: 낡은 옷을 다 내버렸어요.\nB: 기부하지 그랬어요.",
     exampleSrc:"A: I threw away all the old clothes.\nB: You should have donated them.",
     funFact:"내버리다 adds finality. 버리다 alone means discard; 내버리다 emphasizes casting out completely."},

    {type:"teach", trg:"내보내다", src:"to send out, to let out, to dismiss", pos:"verb", gender:null,
     note:"내다 (put out) + 보내다 (send).\nTo send someone or something outside.",
     example:"A: 아이들을 밖으로 내보냈어요.\nB: 날씨가 좋으니까 밖에서 놀게 하세요.",
     exampleSrc:"A: I sent the children outside.\nB: The weather is nice, so let them play outside.",
     funFact:"In business: 직원을 내보내다 can mean to fire/dismiss an employee. A euphemism for layoff."},

    {type:"teach", trg:"내부", src:"interior, inside", pos:"noun", gender:null,
     note:"Sino-Korean. 內 (inside) + 部 (part).\nThe inner part of something.",
     example:"A: 건물 내부를 구경할 수 있어요?\nB: 네, 입장료가 있어요.",
     exampleSrc:"A: Can I tour the interior of the building?\nB: Yes, there is an admission fee.",
     funFact:"내부 pairs with 외부 (exterior). 내부 조사 (internal investigation) is common in corporate and legal Korean."},

    {type:"teach", trg:"내쉬다", src:"to exhale, to breathe out", pos:"verb", gender:null,
     note:"내다 (put out) + 쉬다 (breathe/rest).\nTo release breath outward.",
     example:"A: 긴 한숨을 내쉬었어요.\nB: 무슨 걱정이 있어요?",
     exampleSrc:"A: I let out a long sigh.\nB: Do you have something on your mind?",
     funFact:"한숨을 내쉬다 (let out a sigh) is the most common collocation. 들이쉬다 (inhale) is the opposite."},

    {type:"mc",
     q:"'내달'은 무엇을 뜻하나요?",
     opts:["다음 달","지난달","이번 달","다다음 달"],
     ans:"다음 달",
     hint:"The month coming right after this one. A formal way to say 'next month.'"},

    {type:"teach", trg:"내외", src:"approximately; husband and wife", pos:"noun", gender:null,
     note:"Sino-Korean. 內 (inside) + 外 (outside).\nTwo meanings: 'around/about' or 'married couple.'",
     example:"A: 30명 내외가 참석할 거예요.\nB: 그러면 큰 방을 예약합시다.",
     exampleSrc:"A: About 30 people will attend.\nB: Then let us reserve a large room.",
     funFact:"김 사장 내외 means 'Director Kim and spouse.' 내외 as 'approximately' is used with numbers."},

    {type:"teach", trg:"내용물", src:"contents (of a container)", pos:"noun", gender:null,
     note:"내용 (content) + 물 (thing/substance).\nThe physical items inside a container.",
     example:"A: 상자의 내용물을 확인해 주세요.\nB: 깨진 것은 없네요.",
     exampleSrc:"A: Please check the contents of the box.\nB: Nothing appears broken.",
     funFact:"내용 means abstract content (of a book, speech). 내용물 means physical contents (of a package, box)."},

    {type:"teach", trg:"내적", src:"internal, inner", pos:"noun", gender:null,
     note:"Sino-Korean. 內 (inside) + 的 (-like).\nRelating to the inner self or internal aspects.",
     example:"A: 내적 성장이 중요해요.\nB: 맞아요, 겉모습보다요.",
     exampleSrc:"A: Inner growth is important.\nB: Right, more than outward appearance.",
     funFact:"내적 vs 외적 (external). 내적 갈등 (internal conflict) is a key term in literature and psychology."},

    {type:"teach", trg:"내주다", src:"to hand over, to give up", pos:"verb", gender:null,
     note:"내다 (put out) + 주다 (give).\nTo give something away or hand it to someone.",
     example:"A: 첫 골을 내줬어요.\nB: 다시 따라잡을 수 있어요.",
     exampleSrc:"A: We gave up the first goal.\nB: We can catch up again.",
     funFact:"In sports: 골을 내주다 (concede a goal). In business: 시장을 내주다 (give up market share)."},

    {type:"teach", trg:"내후년", src:"the year after next", pos:"noun", gender:null,
     note:"내 (next) + 후 (after) + 년 (year).\nTwo years from now.",
     example:"A: 내후년에 졸업해요.\nB: 그때까지 열심히 하세요!",
     exampleSrc:"A: I will graduate the year after next.\nB: Work hard until then!",
     funFact:"Korean time words: 올해 (this year), 내년 (next year), 내후년 (year after next), 재작년 (year before last)."},

    {type:"match", pairs:[
      {trg:"내과", src:"internal medicine"},
      {trg:"내부", src:"interior"},
      {trg:"내후년", src:"year after next"},
      {trg:"낭비", src:"waste"},
      {trg:"내달", src:"next month"}
    ]},

    {type:"fb",
     s:"마음의 짐을 {1}.",
     a:["내려놓았다"],
     opts:["내려놓았다","내려다봤다","내보냈다","내쉬었다"],
     hint:"To set down a burden, both physically and as a metaphor for letting go of worries.",
     sSrc:"I {1} the burden from my heart."}
  ]
};
export default LESSON_7;
